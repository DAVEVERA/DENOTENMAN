"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';

export default function WinkelwagenPage() {
    // @ts-ignore - Context not yet typed
    const { cart, removeFromCart, updateCartQty, getCartTotal } = useCart();

    const shipping = getCartTotal() >= 50 ? 0 : 4.95;
    const total = getCartTotal() + shipping;

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1 className="section-title">Winkelwagen</h1>
                <div style={{ marginTop: '3rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
                    <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>Uw winkelwagen is leeg.</p>
                    <Link href="/noten" className="btn btn-primary">Verder winkelen</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 className="section-title">Winkelwagen</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>

                {/* Cart items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cart.map((item: any, index: number) => (
                        <div key={index} style={{ display: 'flex', gap: '1.5rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', boxShadow: 'var(--shadow-sm)', alignItems: 'center' }}>
                            <div style={{ flexShrink: 0, width: 80, height: 80, borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--color-bg)' }}>
                                <Image src={item.image || '/assets/img/ui/placeholder.png'} alt={item.name} width={80} height={80} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.name}</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>{item.weightLabel}</p>
                                <p style={{ fontWeight: 700, color: 'var(--color-accent)', marginTop: '0.25rem' }}>{formatPrice(item.price)}</p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <button
                                    onClick={() => updateCartQty(index, -1)}
                                    className="icon-btn"
                                    style={{ width: 32, height: 32, fontSize: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                                    aria-label="Minder"
                                >−</button>
                                <span style={{ minWidth: 24, textAlign: 'center', fontWeight: 600 }}>{item.qty}</span>
                                <button
                                    onClick={() => updateCartQty(index, 1)}
                                    className="icon-btn"
                                    style={{ width: 32, height: 32, fontSize: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                                    aria-label="Meer"
                                >+</button>
                            </div>

                            <p style={{ fontWeight: 700, minWidth: 70, textAlign: 'right' }}>{formatPrice(item.price * item.qty)}</p>

                            <button
                                onClick={() => removeFromCart(index)}
                                className="icon-btn"
                                aria-label="Verwijderen"
                                style={{ color: 'var(--color-muted)', fontSize: '1.1rem' }}
                            >✕</button>
                        </div>
                    ))}
                </div>

                {/* Order summary */}
                <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-md)', alignSelf: 'start' }}>
                    <h2 style={{ marginBottom: '1.25rem' }}>Overzicht</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Subtotaal</span>
                            <span>{formatPrice(getCartTotal())}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>Verzendkosten</span>
                            <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
                        </div>
                        {getCartTotal() < 50 && (
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                                Bestel voor {formatPrice(50 - getCartTotal())} meer voor gratis verzending.
                            </p>
                        )}
                        <hr style={{ borderColor: 'var(--color-border)', margin: '0.5rem 0' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                            <span>Totaal</span>
                            <span>{formatPrice(total)}</span>
                        </div>
                    </div>
                    <Link href="/checkout" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', textDecoration: 'none' }}>
                        Ga naar afrekenen
                    </Link>
                    <Link href="/noten" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                        Verder winkelen
                    </Link>
                </div>
            </div>
        </div>
    );
}
