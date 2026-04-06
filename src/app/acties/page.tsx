import { Metadata } from 'next';
import { getProducts } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Aanbiedingen & Acties | De Notenman',
    description: 'Bekijk de actuele aanbiedingen en acties van De Notenman. Profiteer van onze scherpste prijzen op premium noten en gedroogd fruit.',
};

export default async function ActiesPage() {
    const allProducts = await getProducts();
    const products = allProducts.filter(p => p.badge && p.badge !== '');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Aanbiedingen</h1>
            <p className="section-subtitle">Profiteer van onze actuele acties en scherpste prijzen.</p>
            <ProductGrid products={products} />
        </div>
    );
}
