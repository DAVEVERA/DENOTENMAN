import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Over Ons | De Notenman',
    description: 'Leer meer over De Notenman. Wij zijn een familiebedrijf gespecialiseerd in premium noten, gedroogd fruit en gezonde snacks.',
};

export default function WieZijnWijPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Wie Zijn Wij?</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Ons Verhaal</h2>
                    <p>
                        De Notenman is een Nederlands familiebedrijf met een grote passie voor noten, gedroogd fruit en gezonde snacks. Wij geloven dat gezond eten lekker moet zijn, en dat premium kwaliteit voor iedereen bereikbaar moet zijn.
                    </p>
                    <p className="mt-4">
                        Vanuit ons magazijn in Haaren (Noord-Brabant) verzorgen wij dagelijks bestellingen door heel Nederland en België. Elk product wordt zorgvuldig geselecteerd op versheid, kwaliteit en smaak.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Onze Missie</h2>
                    <p>
                        Wij willen de lekkerste en meest verse noten en gedroogde vruchten leveren tegen een eerlijke prijs. Geen gedoe, geen overbodige toevoegingen — gewoon puur natuur op zijn best.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Kwaliteit Voorop</h2>
                    <p>
                        Al onze producten worden geselecteerd op versheid en kwaliteit. We werken samen met betrouwbare leveranciers die dezelfde standaarden hanteren als wij. Zo kunt u er altijd op vertrouwen dat u het beste krijgt wat er te koop is.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Contact</h2>
                    <p>Wilt u meer weten over ons bedrijf? Neem gerust contact met ons op:</p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                        <li>📧 <a href="mailto:info@denotenman.com">info@denotenman.com</a></li>
                        <li>📞 <a href="tel:+31647998826">06-47998826</a></li>
                        <li>📍 Haaren, Noord-Brabant, Nederland</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
