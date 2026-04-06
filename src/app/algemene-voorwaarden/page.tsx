import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Algemene Voorwaarden | De Notenman',
    description: 'Algemene Voorwaarden van De Notenman.',
};

export default function AlgemeneVoorwaardenPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Algemene Voorwaarden</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="text-muted mb-4">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

                <section className="mb-8">
                    <h2>1. Algemeen</h2>
                    <p>
                        Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen van De Notenman. De voorwaarden zijn voor een ieder toegankelijk en opgenomen op de internetsite van De Notenman.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>2. Levering</h2>
                    <p>
                        Levering vindt plaats zolang de voorraad strekt. In het kader van de regels van de koop op afstand zal De Notenman bestellingen tenminste binnen 30 dagen uitvoeren, tenzij een andere levertermijn is overeengekomen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>3. Prijzen</h2>
                    <p>
                        Prijzen worden binnen de looptijd van de aanbieding niet verhoogd, tenzij wettelijke maatregelen dit noodzakelijk maken of indien de fabrikant tussentijdse prijsverhogingen doorvoert. Alle prijzen op de site zijn onder voorbehoud van druk- en zetfouten.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>4. Zichttermijn / Herroepingsrecht</h2>
                    <p>
                        Indien er sprake is van een consumentenkoop, overeenkomstig de Wet verkopen op Afstand (artikel 7:5 BW), heeft de afnemer het recht (een deel van) de geleverde goederen binnen een periode van 14 werkdagen zonder opgave van reden te retourneren.
                        <strong> Let op:</strong> Dit geldt niet voor versproducten die snel kunnen bederven of verouderen, zoals verse noten en sommige gedroogde vruchten, tenzij deze verpakt zijn en de verzegeling niet verbroken is.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>5. Betaling</h2>
                    <p>
                        Bij bestellingen via de webwinkel dient betaling vooraf te geschieden. De Notenman accepteert betaling via iDEAL, creditcard en andere gangbare betaalmethoden. Pas na ontvangst van de betaling wordt de bestelling verwerkt.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>6. Klachten</h2>
                    <p>
                        Klachten over de uitvoering van de overeenkomst moeten volledig en duidelijk omschreven worden ingediend bij De Notenman, nadat de afnemer de gebreken heeft geconstateerd. Bij De Notenman ingediende klachten worden binnen een termijn van 14 dagen gerekend vanaf de datum van ontvangst beantwoord.
                    </p>
                </section>
            </div>
        </div>
    );
}
