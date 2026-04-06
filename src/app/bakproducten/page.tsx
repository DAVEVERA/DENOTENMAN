import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Bakproducten | De Notenman',
    description: 'Bakproducten van De Notenman. Alles wat u nodig heeft voor het bakken met noten, zaden en gedroogd fruit.',
};

export default async function BakproductenPage() {
    const products = await getProductsByCategory('bakproducten');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Bakproducten</h1>
            <p className="section-subtitle">Alles voor de thuisbakker — premium kwaliteit ingrediënten.</p>
            <ProductGrid products={products} />
        </div>
    );
}
