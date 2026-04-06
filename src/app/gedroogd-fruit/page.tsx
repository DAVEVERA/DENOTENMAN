import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Gedroogd Fruit | De Notenman',
    description: 'Bestel heerlijk gedroogd fruit bij De Notenman. Rozijnen, abrikozen, dadels en meer — zonder toegevoegde suikers.',
};

export default async function GedroogdFruitPage() {
    const products = await getProductsByCategory('gedroogd-fruit');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Gedroogd Fruit</h1>
            <p className="section-subtitle">Natuurlijk zoet gedroogd fruit, zonder toegevoegde suikers.</p>
            <ProductGrid products={products} />
        </div>
    );
}
