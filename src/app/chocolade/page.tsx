import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Chocolade | De Notenman',
    description: 'Premium chocolade bij De Notenman. Chocolade noten, reepjes en meer voor de échte chocoladeliefhebber.',
};

export default async function ChocoladePage() {
    const products = await getProductsByCategory('chocolade');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Chocolade</h1>
            <p className="section-subtitle">Premium chocolade voor de échte chocoladeliefhebber.</p>
            <ProductGrid products={products} />
        </div>
    );
}
