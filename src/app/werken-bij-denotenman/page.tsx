import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Werken bij De Notenman | De Notenman',
    description: 'Bekijk de openstaande vacatures bij De Notenman. Werk in een enthousiast team met een passie voor kwaliteitsproducten.',
};

export default function WerkenBijDenotenmanPage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Werken bij De Notenman</h1>
            <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>

                <section className="mb-8">
                    <h2>Kom ons team versterken</h2>
                    <p>
                        Bij De Notenman werken we met een klein maar enthousiast team dat elke dag het beste wil leveren aan onze klanten. Heb jij een passie voor kwaliteitsproducten en klantgerichtheid? Dan zijn we misschien op zoek naar jou!
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Openstaande vacatures</h2>
                    <p style={{ color: 'var(--color-muted)', fontStyle: 'italic' }}>
                        Op dit moment hebben wij geen openstaande vacatures. Maar stuur gerust een open sollicitatie — wij bewaren uw gegevens voor toekomstige vacatures.
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Open sollicitatie</h2>
                    <p>
                        Spreekt onze werkwijze u aan en wilt u graag deel uitmaken van ons team? Stuur dan uw motivatiebrief en cv naar:
                    </p>
                    <p className="mt-4">
                        📧 <a href="mailto:info@denotenman.com">info@denotenman.com</a><br />
                        <em>Onderwerp: Open sollicitatie – [uw naam]</em>
                    </p>
                </section>

                <section className="mb-8">
                    <h2>Wat bieden wij?</h2>
                    <ul className="list-disc pl-6 mb-4 mt-2">
                        <li>Een gezellige en informele werksfeer</li>
                        <li>Marktconform salaris</li>
                        <li>Ruimte voor eigen initiatief en groei</li>
                        <li>Personeelskorting op alle producten</li>
                    </ul>
                </section>

                <Link href="/contact" className="btn btn-primary">Neem contact op</Link>
            </div>
        </div>
    );
}
