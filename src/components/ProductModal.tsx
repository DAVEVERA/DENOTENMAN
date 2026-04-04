/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useMemo } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import { calculateItemPrice } from '@/utils/pricing';
import Image from 'next/image';
import { Product, Variant, WeightOption } from '@/types';

interface ProductModalProps {
    product: Product;
    allProducts: Product[];
    closeModal: () => void;
}

export default function ProductModal({ product, allProducts, closeModal }: ProductModalProps) {
    // @ts-ignore - Context not yet typed
    const { addToCart } = useCart();
    const [variantIndex, setVariantIndex] = useState(0);
    const [weightIndex, setWeightIndex] = useState(0);
    const [qty, setQty] = useState(1);
    const [crossSellProducts, setCrossSellProducts] = useState<Product[]>([]);

    // Reset state when product changes
    useEffect(() => {
        setVariantIndex(0);
        setWeightIndex(0);
        setQty(1);
    }, [product]);

    // Cross Sell Logic - moved to effect to avoid impure render
    useEffect(() => {
        const sourceData = allProducts || [];
        let related = sourceData.filter(p => p.category === product.category && p.id !== product.id);
        // Shuffle (simple random sort)
        const shuffled = [...related].sort(() => 0.5 - Math.random()).slice(0, 3);
        setCrossSellProducts(shuffled);
    }, [product, allProducts]);

    // Derived Product (Variant logic)
    const displayProduct = useMemo(() => {
        if (product.variants && product.variants.length > 0) {
            const v = product.variants[variantIndex];
            return {
                ...product,
                name: `${product.name} - ${v.name}`, // Display name for UI might differ from cart
                image: v.image,
                basePrice: v.price,
                sku: v.sku,
                stock: v.stock,
                origin: v.origin || product.origin,
            };
        }
        return product;
    }, [product, variantIndex]);

    // Weight Options Logic
    const weightOptions = useMemo(() => {
        const baseWeights = product.weights;
        if (!baseWeights || baseWeights.length === 0) return [];

        const variantId = (product.variants && product.variants.length > 0)
            ? product.variants[variantIndex]?.id
            : null;

        return baseWeights.map(w => {
            const newPrice = calculateItemPrice(product, variantId, w.grams);
            return { ...w, price: newPrice };
        });
    }, [product, variantIndex]);

    // Current Selection
    const currentWeightOpt = weightOptions[weightIndex] || (weightOptions.length > 0 ? weightOptions[0] : { price: displayProduct.basePrice, label: displayProduct.unit, grams: 0 } as WeightOption);
    const totalPrice = currentWeightOpt.price * qty;

    const handleaddToCart = () => {
        const variantId = product.variants && product.variants.length > 0 ? product.variants[variantIndex].id : null;

        addToCart({
            productId: product.id,
            variantId,
            name: displayProduct.name,
            image: displayProduct.image,
            sku: displayProduct.sku || '',
            weightLabel: currentWeightOpt.label,
            weightGrams: currentWeightOpt.grams,
            price: currentWeightOpt.price,
            qty
        });
        closeModal();
    };

    return (
        <div className="modal-overlay open" id="product-modal-overlay" onClick={(e: any) => e.target === e.currentTarget && closeModal()}>
            <div className="modal" id="product-modal">
                <button className="modal-close" onClick={closeModal} aria-label="Sluit">&times;</button>
                <div className="modal-body">
                    <div className="modal-img">
                        <Image
                            src={displayProduct.image || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                            alt={displayProduct.name}
                            id="modal-product-img"
                            width={500}
                            height={500}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="modal-info">
                        <span className="modal-category">{product.categoryLabel}</span>
                        <h2>{product.name}</h2> {/* Display base name here, variants selected below */}

                        <div className="modal-meta-row">
                            <span className="modal-sku">SKU: <span>{displayProduct.sku || `NUT-${String(product.id).padStart(3, '0')}`}</span></span>
                            <span className={`modal-stock ${displayProduct.stock?.status === 'out_of_stock' ? 'out' : displayProduct.stock?.lowStock ? 'low' : ''}`}>
                                {displayProduct.stock?.status === 'out_of_stock' ? 'Niet op voorraad' : displayProduct.stock?.lowStock ? 'Nog maar beperkt' : 'Op voorraad'}
                            </span>
                        </div>

                        <div className="modal-origin-row">
                            <strong>Herkomst:</strong> <span>{displayProduct.origin || 'Diverse landen'}</span>
                        </div>

                        <p className="modal-desc">{displayProduct.desc}</p>

                        <div className="modal-price-row">
                            <span className="modal-price">€{formatPrice(currentWeightOpt.price)}</span>
                            <span className="modal-unit">{currentWeightOpt.label}</span>
                        </div>

                        {/* VARIANTS */}
                        {product.variants && product.variants.length > 0 && (
                            <div className="modal-options">
                                <label>Type:</label>
                                <div className="variant-chips">
                                    {product.variants.map((v, idx) => (
                                        <div
                                            key={v.id}
                                            className={`variant-chip ${idx === variantIndex ? 'active' : ''}`}
                                            onClick={() => setVariantIndex(idx)}
                                        >
                                            {v.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* WEIGHTS */}
                        {weightOptions.length > 0 && (
                            <div className="modal-options">
                                <label>Gewicht:</label>
                                <div className="weight-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {weightOptions.map((w, idx) => (
                                        <button
                                            key={idx}
                                            className={`variant-chip ${idx === weightIndex ? 'active' : ''}`} // Reusing variant-chip class for consistent style
                                            onClick={() => setWeightIndex(idx)}
                                            style={{ minWidth: '80px', textAlign: 'center' }}
                                        >
                                            {w.label}
                                            <span style={{ display: 'block', fontSize: '0.85em', opacity: 0.8 }}>€{formatPrice(w.price)}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="modal-qty">
                            <label>Aantal:</label>
                            <div className="qty-control">
                                <button className="qty-btn" onClick={() => qty > 1 && setQty(qty - 1)}>−</button>
                                <input type="number" value={qty} readOnly aria-label="Aantal" />
                                <button className="qty-btn" onClick={() => qty < 99 && setQty(qty + 1)}>+</button>
                            </div>
                        </div>

                        <div className="modal-total-row">
                            <span>Totaal:</span>
                            <span className="modal-total">€{formatPrice(totalPrice)}</span>
                        </div>

                        <button className="btn btn-primary btn-lg btn-add-cart" onClick={handleaddToCart}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            In Winkelwagen
                        </button>

                        {/* Cross Sell */}
                        {crossSellProducts.length > 0 && (
                            <div className="modal-cross-sell" style={{ display: 'block' }}>
                                <h3>Ook lekker erbij?</h3>
                                <div className="cross-sell-grid">
                                    {crossSellProducts.map(p => (
                                        <div key={p.id} className="cross-sell-item">
                                            <Image
                                                src={p.image || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                                                alt={p.name}
                                                className="cross-sell-img"
                                                width={100}
                                                height={100}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="cross-sell-title">{p.name}</div>
                                            <span className="cross-sell-price">€{formatPrice(p.basePrice)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
