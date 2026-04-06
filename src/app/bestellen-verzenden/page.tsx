import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bestellen & Verzenden | De Notenman',
    description: 'Informatie over bestellen, verzending en bezorging bij De Notenman.',
};

export default function BestellenVerzendenPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Bestellen & Verzenden</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Bestellen</h2>
                    <p>
                        Bestellen bij De Notenman is eenvoudig. Voeg de gewenste producten toe aan uw winkelwagen en volg de stappen in het bestelproces. Na bevestiging van uw bestelling ontvangt u een orderbevestiging per e-mail.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Verzending</h2>
                    <p>
                        Wij doen ons best om uw bestelling zo spoedig mogelijk bij u af te leveren. Bestellingen die op werkdagen vóór 16:00 worden gedaan, proberen wij dezelfde dag nog te verzenden.
                    </p>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li><strong>Verzendkosten:</strong> €4,95 voor bestellingen onder de €50,-.</li>
                        <li><strong>Gratis verzending:</strong> Voor bestellingen vanaf €50,-.</li>
                        <li><strong>Levertijd:</strong> Doorgaans 1-2 werkdagen.</li>
                        <li><strong>Bezorging:</strong> Via PostNL of DHL.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2>Bezorggebied</h2>
                    <p>
                        Wij bezorgen door heel Nederland en België. Voor verzending naar andere landen neemt u contact met ons op via <a href="mailto:info@denotenman.com">info@denotenman.com</a>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Track & Trace</h2>
                    <p>
                        Na verzending van uw bestelling ontvangt u een Track & Trace code per e-mail waarmee u de voortgang van uw pakket kunt volgen.
                    </p>
                </section>
            </div>
        </div>
    );
}
