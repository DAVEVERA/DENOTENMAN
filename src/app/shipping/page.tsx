import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Verzending & Retourneren | De Notenman',
    description: 'Informatie over verzending, bezorging en retourneren bij De Notenman.',
};

export default function ShippingPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Verzending & Retourneren</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Verzending</h2>
                    <p>
                        Wij doen ons best om uw bestelling zo spoedig mogelijk bij u af te leveren. Bestellingen die op werkdagen vóór 16:00 worden gedaan, proberen wij dezelfde dag nog te verzenden.
                    </p>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li><strong>Verzendkosten:</strong> €4,95 voor bestellingen onder de €50,-.</li>
                        <li><strong>Gratis verzending:</strong> Voor bestellingen vanaf €50,-.</li>
                        <li><strong>Levertijd:</strong> Doorgaans 1-2 werkdagen.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2>Retourneren</h2>
                    <p>
                        U heeft het recht uw bestelling tot 14 dagen na ontvangst zonder opgave van reden te annuleren, mits de verzegeling niet verbroken is. Bij verbreking van de verzegeling is uw bestelling definitief en kan deze niet meer geretourneerd worden.
                    </p>
                    <p className="mt-2">
                        Enkel de kosten voor retour van u thuis naar de webwinkel zijn voor eigen rekening. Deze kosten bedragen circa 7,25 per pakket, raadpleeg voor de exacte tarieven de website van uw vervoerder.
                    </p>
                </section>
            </div>
        </div>
    );
}
