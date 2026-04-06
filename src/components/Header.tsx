"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import AccountSidebar from './AccountSidebar';
import Image from 'next/image';

export default function Header() {
    // @ts-ignore - Context not yet typed
    const { getCartCount, openCart } = useCart();
    const cartCount = getCartCount();
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header id="site-header">
                <div className="header-inner">
                    <Link href="/" className="logo" id="logo-link" style={{ position: 'relative', zIndex: 1001 }}>
                        <Image
                            src="/assets/img/ui/Notenman_2020_logo.png"
                            alt="De Notenman Logo"
                            id="logo-img"
                            width={150}
                            height={60}
                            priority
                        />
                    </Link>
                    <nav id="main-nav">
                        <Link href="/" data-nav="home" className="nav-link active">Home</Link>
                        <Link href="/noten" data-nav="shop" className="nav-link">Shop</Link>
                        <Link href="/wie-zijn-wij" data-nav="about" className="nav-link">Over Ons</Link>
                        <Link href="/contact" data-nav="contact" className="nav-link">Contact</Link>
                    </nav>
                    <div className="header-actions">
                        <button
                            className="icon-btn"
                            id="account-btn"
                            aria-label="Mijn Account"
                            onClick={() => setIsAccountOpen(true)}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </button>
                        <button className="icon-btn cart-btn" id="cart-btn" aria-label="Winkelwagen" onClick={openCart}>
                            <Link href="/winkelwagen" aria-label="Bekijk winkelwagen" style={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </Link>
                            <span className={`cart-count ${cartCount > 0 ? 'visible' : ''}`} id="cart-count">{cartCount}</span>
                        </button>
                        <button
                            className="hamburger"
                            id="hamburger"
                            aria-label="Menu"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <div
                className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            {/* Mobile Nav Sidebar */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <Image
                        src="/assets/img/ui/Notenman_2020_logo.png"
                        alt="De Notenman Logo"
                        className="mobile-logo"
                        width={120}
                        height={40}
                        style={{ height: 'auto', width: 'auto', maxHeight: '40px' }}
                    />
                    <button className="close-btn" onClick={closeMobileMenu}>&times;</button>
                </div>
                <Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
                <Link href="/noten" className="mobile-nav-link" onClick={closeMobileMenu}>Shop</Link>
                <Link href="/wie-zijn-wij" className="mobile-nav-link" onClick={closeMobileMenu}>Over Ons</Link>
                <Link href="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact</Link>
            </div>

            {/* @ts-ignore - Component not yet typed */}
            <AccountSidebar isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
        </>
    );
}
