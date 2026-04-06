import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer id="site-footer">
            <div className="container footer-inner">
                <div className="footer-col">
                    <Image
                        src="/assets/img/ui/Notenman_2020_logo.png"
                        alt="De Notenman"
                        className="footer-logo"
                        width={150}
                        height={60}
                    />
                    <p>Premium noten & gedroogd fruit, vers en met liefde samengesteld.</p>
                </div>
                <div className="footer-col">
                    <h4>Klantenservice</h4>
                    <ul className="footer-links">
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/bestellen-verzenden">Bestellen & Verzenden</Link></li>
                        <li><Link href="/herroepen-retourneren">Herroepen & Retourneren</Link></li>
                        <li><Link href="/garantie">Garantie</Link></li>
                        <li><Link href="/klachten">Klachten</Link></li>
                        <li><Link href="/betaalmethodes">Betaalmethodes</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Navigatie</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/noten">Shop</Link></li>
                        <li><Link href="/acties">Aanbiedingen</Link></li>
                        <li><Link href="/wie-zijn-wij">Over Ons</Link></li>
                        <li><Link href="/werken-bij-denotenman">Werken bij ons</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Categorieën</h4>
                    <ul className="footer-links">
                        <li><Link href="/noten">Noten</Link></li>
                        <li><Link href="/gedroogd-fruit">Gedroogd Fruit</Link></li>
                        <li><Link href="/pitten-zaden">Pitten & Zaden</Link></li>
                        <li><Link href="/notenpasta">Notenpasta</Link></li>
                        <li><Link href="/chocolade">Chocolade</Link></li>
                        <li><Link href="/muesli-granen">Muesli & Granen</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>📧 <a href="mailto:info@denotenman.com">info@denotenman.com</a></p>
                    <p>📞 <a href="tel:+31647998826">06-47998826</a></p>
                    <p>📍 Haaren, Nederland</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    &copy; 2026 De Notenman — Alle rechten voorbehouden &nbsp;|&nbsp;
                    <Link href="/privacy-policy">Privacybeleid</Link> &nbsp;|&nbsp;
                    <Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link>
                </p>
            </div>
        </footer>
    );
}
