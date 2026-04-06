import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Muesli & Granen | De Notenman',
    description: 'Ontdek onze muesli en granen bij De Notenman. Gezond ontbijten met premium kwaliteit.',
};

export default async function MuesliGranenPage() {
    const products = await getProductsByCategory('muesli-granen');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Muesli & Granen</h1>
            <p className="section-subtitle">Een gezond ontbijt begint met de beste ingrediënten.</p>
            <ProductGrid products={products} />
        </div>
    );
}
