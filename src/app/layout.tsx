import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/providers/Providers';
import CartSidebar from '@/components/CartSidebar';
import { Metadata } from 'next';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'De Notenman | Premium Noten & Gedroogd Fruit Online Bestellen',
    description: 'Bestel de lekkerste noten en gedroogd fruit online bij De Notenman. Vers, ambachtelijk en direct bij u thuisbezorgd.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="nl" className={`${outfit.variable} ${playfair.variable}`}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "De Notenman",
                            "url": "https://denotenman.com",
                            "logo": "https://denotenman.com/assets/img/ui/Notenman_2020_logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+31-6-47998826",
                                "contactType": "customer service",
                                "email": "info@denotenman.com"
                            },
                            "sameAs": [
                                "https://facebook.com/denotenman",
                                "https://instagram.com/denotenman"
                            ]
                        })
                    }}
                />
                <Providers>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                    <CartSidebar />
                </Providers>
            </body>
        </html>
    );
}
