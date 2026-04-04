import { formatPrice } from '@/utils/format';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    // Determine badge if any
    const badge = product.variants && product.variants[0] && product.variants[0].badge;

    return (
        <button
            className="product-card"
            onClick={() => onClick(product)}
            data-product-id={product.id}
            data-category={product.category}
        >
            <div className="product-card-img">
                <Image
                    src={product.image || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                    alt={product.name}
                    width={300}
                    height={300}
                />
                {badge && <span className="product-badge">{badge}</span>}
            </div>
            <div className="product-card-body">
                <div className="product-card-category">{product.categoryLabel}</div>
                <h3 className="product-card-name">{product.name}</h3>
                <div className="product-price-row">
                    <div className="product-price-group">
                        <span className="product-card-price">€{formatPrice(product.basePrice)}</span>
                        <span className="product-card-unit">{product.unit}</span>
                    </div>
                    <span className="product-card-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </span>
                </div>
            </div>
        </button>
    );
}
