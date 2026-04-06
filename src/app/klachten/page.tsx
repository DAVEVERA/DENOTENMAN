import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Klachten | De Notenman',
    description: 'Heeft u een klacht over De Notenman? Lees hier hoe u een klacht kunt indienen en hoe wij deze afhandelen.',
};

export default function KlachtenPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Klachten</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Klacht indienen</h2>
                    <p>
                        Wij doen er alles aan om u optimaal van dienst te zijn. Toch kan het voorkomen dat u niet tevreden bent. In dat geval verzoeken wij u uw klacht zo duidelijk mogelijk aan ons kenbaar te maken.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Hoe dient u een klacht in?</h2>
                    <p>U kunt uw klacht op de volgende manieren bij ons indienen:</p>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li>Per e-mail: <a href="mailto:info@denotenman.com">info@denotenman.com</a></li>
                        <li>Telefonisch: <a href="tel:+31647998826">06-47998826</a> (ma-vr 09:00-17:00)</li>
                    </ul>
                    <p>Vermeld hierbij uw naam, ordernummer en een duidelijke omschrijving van uw klacht.</p>
                </section>

                <section className="mb-8">
                    <h2>Afhandelingstermijn</h2>
                    <p>
                        Wij nemen uw klacht binnen 2 werkdagen in behandeling en streven ernaar uw klacht binnen 14 dagen volledig af te handelen. Mocht dit langer duren, dan informeren wij u hierover.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Niet opgelost?</h2>
                    <p>
                        Mocht uw klacht niet naar tevredenheid worden opgelost, dan kunt u een geschil voorleggen aan de Geschillencommissie via <a href="https://www.degeschillencommissie.nl" target="_blank" rel="noopener noreferrer">www.degeschillencommissie.nl</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
