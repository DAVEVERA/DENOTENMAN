import Image from 'next/image';
import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/products';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
    const products = await getProducts();

    return (
        <>
            {/* HERO */}
            <section className="hero" id="hero-section">
                <div className="hero-bg">
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src="/assets/video/Denotenman video header.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <Image src="/assets/img/ui/Notenman_2020_logo.png" alt="De Notenman Logo" className="hero-logo" width={180} height={80} style={{ width: '180px', height: 'auto' }} />
                    <h1>Puur natuur,<br /><span className="accent">onweerstaanbaar lekker</span></h1>
                    <p className="hero-sub">Premium noten & gedroogd fruit — vers, ambachtelijk en direct bij u thuisbezorgd</p>
                    <button className="btn btn-primary btn-lg" id="hero-shop-btn">Bekijk Assortiment</button>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="section categories-section" id="categories-section">
                <div className="container">
                    <h2 className="section-title">Onze Categorieën</h2>
                    <p className="section-subtitle">Ontdek ons uitgebreide assortiment</p>
                    <div className="categories-grid">
                        <button className="category-card" data-category="noten">
                            <div className="category-img">
                                <Image src="/assets/img/noten/noten-collage-overzicht.jpeg" alt="Noten collectie" width={400} height={400} />
                            </div>
                            <div className="category-info">
                                <h3>Noten</h3>
                                <p>Amandelen, cashew, walnoten en meer</p>
                            </div>
                        </button>
                        <button className="category-card" data-category="gedroogd-fruit">
                            <div className="category-img">
                                <Image src="/assets/img/zuidvruchten/gedroogde-abrikozen-naturel.jpeg" alt="Gedroogd fruit collectie" width={400} height={400} />
                            </div>
                            <div className="category-info">
                                <h3>Gedroogd Fruit</h3>
                                <p>Abrikozen, mango, dadels en meer</p>
                            </div>
                        </button>
                        <button className="category-card" data-category="pitten-zaden">
                            <div className="category-img">
                                <Image src="/assets/img/zaden-pitten/pompoenpitten-geroosterd.jpeg" alt="Pitten en zaden collectie" width={400} height={400} />
                            </div>
                            <div className="category-info">
                                <h3>Pitten & Zaden</h3>
                                <p>Zonnebloempitten, pompoenpitten en meer</p>
                            </div>
                        </button>
                        <button className="category-card" data-category="mixen">
                            <div className="category-img">
                                <Image src="/assets/img/noten/luxe-notenmix-ongebrand.jpeg" alt="Noten- en fruitmixen" width={400} height={400} />
                            </div>
                            <div className="category-info">
                                <h3>Mixen</h3>
                                <p>Notenmix, trail mix en meer</p>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* SHOP / PRODUCTS */}
            <section className="section shop-section" id="shop-section">
                <div className="container">
                    <h2 className="section-title">Ons Assortiment</h2>
                    <p className="section-subtitle">Selecteer een categorie of bekijk alles</p>
                    <ProductGrid products={products} />
                </div>
            </section>

            {/* USP SECTION */}
            <section className="section usp-section">
                <div className="container">
                    <div className="usp-grid">
                        <div className="usp-card">
                            <div className="usp-icon">🌿</div>
                            <h3>100% Natuurlijk</h3>
                            <p>Geen toevoegingen, puur natuur</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon">🚚</div>
                            <h3>Snelle Levering</h3>
                            <p>Binnen 1-2 werkdagen bezorgd</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon">⭐</div>
                            <h3>Premium Kwaliteit</h3>
                            <p>Dagvers geselecteerd en verpakt</p>
                        </div>
                        <div className="usp-card">
                            <div className="usp-icon">💰</div>
                            <h3>Scherpe Prijzen</h3>
                            <p>Direct van leverancier, geen tussenpersoon</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about-section" id="about-section">
                <div className="container about-content">
                    <div className="about-text">
                        <h2 className="section-title">Over De Notenman</h2>
                        <p>Al jarenlang selecteren wij de allerbeste noten en gedroogd fruit, rechtstreeks van de bron. Onze passie voor
                            kwaliteit en smaak garandeert dat elke noot en elk stukje fruit de hoogste standaard bereikt.</p>
                        <p>Of u nu zoekt naar een gezonde snack, ingrediënten voor uw recepten, of een luxe cadeau — bij De Notenman
                            vindt u het allemaal. Vers, eerlijk en met liefde samengesteld.</p>
                    </div>
                    <div className="about-img">
                        <Image src="/assets/img/noten/noten-presentatie-markt.jpeg" alt="Noten presentatie op de markt" width={600} height={400} />
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="section contact-section" id="contact-section">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <p className="section-subtitle">Heeft u vragen? Neem gerust contact met ons op</p>
                    <form className="contact-form" id="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name">Naam</label>
                                <input type="text" id="contact-name" name="name" required placeholder="Uw naam" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">E-mail</label>
                                <input type="email" id="contact-email" name="email" required placeholder="uw@email.nl" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">Bericht</label>
                            <textarea id="contact-message" name="message" rows={5} required placeholder="Uw bericht..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Verstuur Bericht</button>
                    </form>
                </div>
            </section>
        </>
    );
}
