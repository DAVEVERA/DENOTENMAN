import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | De Notenman',
    description: 'Privacybeleid van De Notenman. Lees hoe wij omgaan met uw gegevens.',
};

export default function PrivacyPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Privacybeleid</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p className="text-muted mb-4">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

                <section className="mb-8">
                    <h2>1. Inleiding</h2>
                    <p>
                        De Notenman respecteert de privacy van alle gebruikers van haar site en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Wij gebruiken uw gegevens om de bestellingen zo snel en gemakkelijk mogelijk te laten verlopen.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>2. Gebruik van gegevens</h2>
                    <p>De Notenman gebruikt de verzamelde gegevens om haar klanten de volgende diensten te leveren:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Als u een bestelling plaatst, hebben we uw naam, e-mailadres, afleveradres en betaalgegevens nodig om uw bestelling uit te voeren en u van het verloop daarvan op de hoogte te houden.</li>
                        <li>Om het winkelen bij De Notenman zo aangenaam mogelijk te laten zijn, slaan wij met uw toestemming uw persoonlijke gegevens en de gegevens met betrekking tot uw bestelling en het gebruik van onze diensten op.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2>3. Cookies</h2>
                    <p>
                        Cookies zijn kleine stukjes informatie die door uw browser worden opgeslagen op uw computer. De Notenman gebruikt cookies om u te herkennen bij een volgend bezoek. Cookies stellen ons in staat om informatie te verzamelen over het gebruik van onze diensten en deze te verbeteren en aan te passen aan de wensen van onze bezoekers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>4. Vragen</h2>
                    <p>
                        Indien u nog vragen mocht hebben over de Privacy Policy van De Notenman, dan kunt u contact met ons opnemen. Onze klantenservice helpt u verder als u informatie nodig heeft over uw gegevens of als u deze wilt wijzigen.
                    </p>
                </section>
            </div>
        </div>
    );
}
