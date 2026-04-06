import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Betaalmethodes | De Notenman',
    description: 'Bekijk alle betaalmethodes die De Notenman accepteert. Veilig en eenvoudig betalen via iDEAL, creditcard en meer.',
};

export default function BetaalmethodesPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Betaalmethodes</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <p className="mb-8">
                    Bij De Notenman kunt u veilig en eenvoudig betalen via diverse betaalmethodes. Alle betalingen verlopen via een beveiligde verbinding (SSL).
                </p>

                <section className="mb-8">
                    <h2>Beschikbare betaalmethodes</h2>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li><strong>iDEAL</strong> — Direct betalen via uw eigen bank. Snel, veilig en vertrouwd.</li>
                        <li><strong>Creditcard</strong> — Visa en Mastercard worden geaccepteerd.</li>
                        <li><strong>Bancontact</strong> — Voor klanten in België.</li>
                        <li><strong>PayPal</strong> — Betaal eenvoudig via uw PayPal-account.</li>
                        <li><strong>Bankoverschrijving</strong> — Betaling via bankoverschrijving is mogelijk. Uw bestelling wordt verwerkt na ontvangst van de betaling.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2>Betalingsveiligheid</h2>
                    <p>
                        Alle betalingen worden verwerkt via Stripe, een toonaangevende en PCI DSS-gecertificeerde betaalprovider. Uw betaalgegevens worden nooit opgeslagen op onze servers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Vragen over uw betaling?</h2>
                    <p>
                        Heeft u vragen over een betaling? Neem contact met ons op via <a href="mailto:info@denotenman.com">info@denotenman.com</a> of bel ons op <a href="tel:+31647998826">06-47998826</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
