import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Garantie | De Notenman',
    description: 'Lees meer over de garantievoorwaarden van De Notenman. Wij staan voor de kwaliteit van onze producten.',
};

export default function GarantiePage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Garantie</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Onze Kwaliteitsgarantie</h2>
                    <p>
                        Bij De Notenman staat kwaliteit voorop. Wij garanderen dat alle producten vers en van hoge kwaliteit zijn. Bent u niet tevreden? Dan lossen wij dat voor u op.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Wat valt onder garantie?</h2>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li>Producten die niet voldoen aan de beschrijving op de website.</li>
                        <li>Producten die beschadigd zijn bij aflevering.</li>
                        <li>Producten die niet vers zijn bij ontvangst (binnen de houdbaarheidsdatum).</li>
                        <li>Verkeerde producten die zijn geleverd.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2>Garantie claimen</h2>
                    <p>
                        Neem binnen 48 uur na ontvangst contact met ons op via <a href="mailto:info@denotenman.com">info@denotenman.com</a> of <a href="tel:+31647998826">06-47998826</a>. Stuur hierbij een foto van het product mee zodat wij uw claim zo snel mogelijk kunnen verwerken.
                    </p>
                    <p className="mt-4">
                        Wij bieden u de keuze tussen een gratis vervanging of een volledige terugbetaling.
                    </p>
                </section>
            </div>
        </div>
    );
}
