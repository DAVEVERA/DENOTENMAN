import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | De Notenman',
    description: 'Neem contact op met De Notenman. Wij helpen u graag verder met vragen over bestellingen, producten of leveringen.',
};

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Contact</h1>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Contactgegevens</h2>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                        <li>📧 <a href="mailto:info@denotenman.com">info@denotenman.com</a></li>
                        <li>📞 <a href="tel:+31647998826">06-47998826</a></li>
                        <li>📍 Haaren, Noord-Brabant, Nederland</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Openingstijden klantenservice</h3>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                        <li>Maandag t/m vrijdag: 09:00 – 17:00</li>
                        <li>Zaterdag: 10:00 – 14:00</li>
                        <li>Zondag: Gesloten</li>
                    </ul>
                </div>

                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Stuur een bericht</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>Naam</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Uw naam"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>E-mailadres</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="uw@email.nl"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>Bericht</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Uw bericht..."
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', resize: 'vertical' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Verstuur bericht
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
