import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: '404 – Pagina niet gevonden | De Notenman',
    description: 'Deze pagina bestaat niet (meer). Ga terug naar de homepage van De Notenman.',
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '4rem 1.5rem',
        }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 700, borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: '2.5rem' }}>
                <Image
                    src="/assets/img/ui/404-eekhoorn.jpg"
                    alt="Eekhoorn met losgekoppeld snoer — pagina niet gevonden"
                    width={700}
                    height={394}
                    priority
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Oeps! Deze pagina bestaat niet.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: 480, marginBottom: '2rem' }}>
                Het lijkt erop dat onze eekhoorn de stekker eruit heeft getrokken. De pagina die u zoekt is verplaatst of bestaat niet meer.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/" className="btn btn-primary">Terug naar home</Link>
                <Link href="/noten" className="btn btn-outline">Bekijk ons assortiment</Link>
            </div>
        </div>
    );
}
