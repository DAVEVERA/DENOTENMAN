import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mijn Account | De Notenman',
    description: 'Beheer uw account bij De Notenman. Bekijk uw bestellingen en persoonlijke gegevens.',
};

export default function AccountPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Mijn Account</h1>

            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                <Link href="/account/orders" style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', textAlign: 'center', transition: 'transform 0.2s' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
                        <h3>Mijn Bestellingen</h3>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Bekijk uw bestelgeschiedenis</p>
                    </div>
                </Link>

                <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👤</div>
                    <h3>Persoonlijke Gegevens</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Binnenkort beschikbaar</p>
                </div>

                <Link href="/login" style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔐</div>
                        <h3>Inloggen</h3>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Naar de inlogpagina</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
