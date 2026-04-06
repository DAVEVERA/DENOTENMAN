import { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
    title: 'Noten | De Notenman',
    description: 'Ontdek ons uitgebreide assortiment premium noten. Van amandelen tot walnoten — vers, ambachtelijk en direct bij u thuisbezorgd.',
};

const subcategories = [
    { slug: 'amandelen', label: 'Amandelen' },
    { slug: 'cashewnoten', label: 'Cashewnoten' },
    { slug: 'hazelnoten', label: 'Hazelnoten' },
    { slug: 'macadamia-noten', label: 'Macadamia Noten' },
    { slug: 'paranoten', label: 'Paranoten' },
    { slug: 'pecannoten', label: 'Pecannoten' },
    { slug: 'pistachenoten', label: 'Pistachenoten' },
    { slug: 'walnoten', label: 'Walnoten' },
];

export default async function NotenPage() {
    const products = await getProductsByCategory('noten');

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Noten</h1>
            <p className="section-subtitle">Premium kwaliteit noten, vers en ambachtelijk samengesteld.</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center' }}>
                {subcategories.map(({ slug, label }) => (
                    <Link
                        key={slug}
                        href={`/noten/${slug}`}
                        className="btn btn-outline"
                        style={{ borderRadius: 'var(--radius-full)' }}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <ProductGrid products={products} />
        </div>
    );
}
