import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mijn Bestellingen | De Notenman',
    description: 'Bekijk uw bestelgeschiedenis bij De Notenman.',
};

export default function AccountOrdersPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <nav style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                <Link href="/account" style={{ color: 'var(--color-accent)' }}>Mijn Account</Link>
                {' / '}
                <span>Bestellingen</span>
            </nav>

            <h1 className="section-title">Mijn Bestellingen</h1>

            <div style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
                <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
                    <h3>Nog geen bestellingen</h3>
                    <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem' }}>
                        Uw bestelgeschiedenis verschijnt hier zodra u bent ingelogd en een bestelling heeft geplaatst.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/login" className="btn btn-primary">Inloggen</Link>
                        <Link href="/noten" className="btn btn-outline">Ga naar de shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
