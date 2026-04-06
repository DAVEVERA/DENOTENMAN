import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Herroepen & Retourneren | De Notenman',
    description: 'Informatie over het herroepingsrecht en retourneren bij De Notenman. U heeft 14 dagen bedenktijd.',
};

export default function HerroependRetournerenPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Herroepen & Retourneren</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Herroepingsrecht</h2>
                    <p>
                        U heeft het recht uw bestelling tot 14 dagen na ontvangst zonder opgave van reden te annuleren (herroepingsrecht), mits de verzegeling niet verbroken is. Deze termijn gaat in op de dag nadat u het product heeft ontvangen.
                    </p>
                    <p className="mt-4">
                        <strong>Let op:</strong> Het herroepingsrecht geldt niet voor producten waarvan de verzegeling verbroken is, of voor versproducten die snel kunnen bederven.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Hoe retourneren?</h2>
                    <ol className="list-decimal pl-6 mb-4 mt-2" style={{ lineHeight: 2 }}>
                        <li>Stuur een e-mail naar <a href="mailto:info@denotenman.com">info@denotenman.com</a> met uw ordernummer en de reden voor retournering.</li>
                        <li>Verpak het product zorgvuldig in de originele verpakking.</li>
                        <li>Stuur het pakket op naar ons retouradres (ontvangt u per e-mail).</li>
                        <li>Na ontvangst en controle verwerken wij uw terugbetaling binnen 14 dagen.</li>
                    </ol>
                </section>

                <section className="mb-8">
                    <h2>Retourkosten</h2>
                    <p>
                        De kosten voor het retourneren zijn voor eigen rekening. Deze bedragen circa €7,25 per pakket. Raadpleeg voor de exacte tarieven de website van uw vervoerder.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Terugbetaling</h2>
                    <p>
                        Na ontvangst van het geretourneerde product betalen wij het aankoopbedrag (exclusief eventuele verzendkosten) binnen 14 dagen terug via de oorspronkelijke betaalmethode.
                    </p>
                </section>
            </div>
        </div>
    );
}
