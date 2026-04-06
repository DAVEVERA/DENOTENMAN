import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Inloggen | De Notenman',
    description: 'Log in op uw account bij De Notenman om uw bestellingen te bekijken en uw gegevens te beheren.',
};

export default function LoginPage() {
    return (
        <div className="container" style={{ padding: '4rem 0', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '420px' }}>
                <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Inloggen</h1>

                <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>E-mailadres</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="uw@email.nl"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', boxSizing: 'border-box' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>Wachtwoord</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', boxSizing: 'border-box' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Inloggen
                        </button>
                    </form>

                    <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                        <p>Nog geen account? <Link href="/account" style={{ color: 'var(--color-accent)' }}>Registreren</Link></p>
                        <p style={{ marginTop: '0.5rem' }}>
                            <Link href="/contact" style={{ color: 'var(--color-accent)' }}>Wachtwoord vergeten?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
