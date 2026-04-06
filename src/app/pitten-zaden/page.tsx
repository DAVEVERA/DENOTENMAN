import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Pitten & Zaden | De Notenman',
    description: 'Ontdek ons assortiment pitten en zaden. Rijk aan voedingsstoffen en perfect als snack of in gerechten.',
};

export default async function PittenZadenPage() {
    const products = await getProductsByCategory('pitten-zaden');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Pitten & Zaden</h1>
            <p className="section-subtitle">Voedzame pitten en zaden voor een gezonde levensstijl.</p>
            <ProductGrid products={products} />
        </div>
    );
}
