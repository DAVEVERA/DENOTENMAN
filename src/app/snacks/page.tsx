import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Snacks | De Notenman',
    description: 'Gezonde en lekkere snacks bij De Notenman. Ontdek ons assortiment notenmengsels, gekruide noten en meer.',
};

export default async function SnacksPage() {
    const products = await getProductsByCategory('snacks');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Snacks</h1>
            <p className="section-subtitle">Gezonde snacks voor onderweg of thuis — lekker én voedzaam.</p>
            <ProductGrid products={products} />
        </div>
    );
}
