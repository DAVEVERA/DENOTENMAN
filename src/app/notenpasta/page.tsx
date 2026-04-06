import { Metadata } from 'next';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Notenpasta | De Notenman',
    description: 'Ambachtelijke notenpasta van De Notenman. Pindakaas, amandelboter, cashewpasta en meer — puur en zonder toevoegingen.',
};

export default async function NotenpastaPaga() {
    const products = await getProductsByCategory('notenpasta');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Notenpasta</h1>
            <p className="section-subtitle">Ambachtelijke notenpasta, puur en zonder onnodige toevoegingen.</p>
            <ProductGrid products={products} />
        </div>
    );
}
