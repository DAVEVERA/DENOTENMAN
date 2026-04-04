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
                        <li><Link href="/shipping">Verzending & Retourneren</Link></li>
                        <li><Link href="/faq">Veelgestelde Vragen</Link></li>
                        <li><Link href="/privacy">Privacybeleid</Link></li>
                        <li><Link href="/terms">Algemene Voorwaarden</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Navigatie</h4>
                    <Link href="/" data-nav="home">Home</Link>
                    <Link href="/#shop-section" data-nav="shop">Shop</Link>
                    <Link href="/#about-section" data-nav="about">Over Ons</Link>
                    <Link href="/#contact-section" data-nav="contact">Contact</Link>
                </div>
                <div className="footer-col">
                    <h4>Categorieën</h4>
                    {/* These filters might need logic adjustments in Next.js, keeping structure for now */}
                    <a href="#" data-filter-link="noten">Noten</a>
                    <a href="#" data-filter-link="gedroogd-fruit">Gedroogd Fruit</a>
                    <a href="#" data-filter-link="pitten-zaden">Pitten & Zaden</a>
                    <a href="#" data-filter-link="mixen">Mixen</a>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>📧 info@denotenman.com</p>
                    <p>📞 06-47998826</p>
                    <p>📍 Haaren, Nederland</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 De Notenman — Alle rechten voorbehouden</p>
            </div>
        </footer>
    );
}
