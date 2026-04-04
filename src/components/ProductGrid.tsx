"use client";

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '@/types';

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const [filter, setFilter] = useState('alle');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter products
    const filteredProducts = useMemo(() => {
        const data = products || [];
        if (filter === 'alle') return data;

        if (filter === 'gedroogd-fruit') return data.filter(p => p.category === 'zuidvruchten' || p.category === 'gedroogd-fruit');
        return data.filter(p => p.category === filter);
    }, [filter, products]);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="shop-filters" id="shop-filters">
                {['alle', 'noten', 'gedroogd-fruit', 'chocolade', 'superfoods', 'honing', 'mixen'].map(f => (
                    <button
                        key={f}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f === 'alle' ? 'Alles' :
                            f === 'gedroogd-fruit' ? 'Gedroogd Fruit' :
                                f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            <div className="products-grid" id="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={handleProductClick}
                    />
                ))}
            </div>

            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    allProducts={products}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}
