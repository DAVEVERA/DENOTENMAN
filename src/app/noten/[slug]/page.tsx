import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';

const subcategories: Record<string, string> = {
    amandelen: 'Amandelen',
    cashewnoten: 'Cashewnoten',
    hazelnoten: 'Hazelnoten',
    'macadamia-noten': 'Macadamia Noten',
    paranoten: 'Paranoten',
    pecannoten: 'Pecannoten',
    pistachenoten: 'Pistachenoten',
    walnoten: 'Walnoten',
};

export function generateStaticParams() {
    return Object.keys(subcategories).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const label = subcategories[slug];
    if (!label) return { title: 'Noten | De Notenman' };
    return {
        title: `${label} | De Notenman`,
        description: `Bestel premium ${label.toLowerCase()} bij De Notenman. Vers, ambachtelijk en snel bezorgd.`,
    };
}

export default async function NotenSubcategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const label = subcategories[slug];
    if (!label) notFound();

    const allProducts = await getProducts();
    // Match products by slug name in category or name
    const products = allProducts.filter(p =>
        p.category === slug ||
        p.name.toLowerCase().includes(slug.replace('-', ' '))
    );

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <nav style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                <Link href="/noten" style={{ color: 'var(--color-accent)' }}>Noten</Link>
                {' / '}
                <span>{label}</span>
            </nav>
            <h1 className="section-title">{label}</h1>
            <p className="section-subtitle">Ontdek ons assortiment premium {label.toLowerCase()}.</p>
            <ProductGrid products={products} />
        </div>
    );
}
