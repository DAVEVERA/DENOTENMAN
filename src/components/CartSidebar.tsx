"use client";

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/format';
import Link from 'next/link';
import Image from 'next/image';

export default function CartSidebar() {
    const { cart, isCartOpen, closeCart, removeFromCart, updateCartQty, getCartTotal } = useCart();

    const total = getCartTotal();
    const shipping = total >= 50 ? 0 : 4.95;

    // Conditionally apply class
    const sidebarClass = isCartOpen ? 'cart-sidebar open' : 'cart-sidebar';
    const overlayClass = isCartOpen ? 'cart-overlay open' : 'cart-overlay';

    return (
        <>
            <div className={overlayClass} id="cart-overlay" onClick={closeCart}></div>
            <aside className={sidebarClass} id="cart-sidebar">
                <div className="cart-header">
                    <h3>🛒 Winkelwagen</h3>
                    <button className="close-btn" id="close-cart" aria-label="Sluit winkelwagen" onClick={closeCart}>&times;</button>
                </div>
                <div className="cart-items" id="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty" id="cart-empty" style={{ display: 'flex' }}>
                            <p>Uw winkelwagen is leeg</p>
                            <button className="btn btn-outline" id="cart-shop-btn" onClick={closeCart}>Begin met winkelen</button>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="cart-item-img">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </div>
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-weight">{item.weightLabel}</div>
                                    <div className="cart-item-bottom">
                                        <span className="cart-item-price">€{formatPrice(item.price * item.qty)}</span>
                                        <div className="cart-item-qty">
                                            <button onClick={() => updateCartQty(index, -1)} aria-label="Verminder">−</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => updateCartQty(index, 1)} aria-label="Verhoog">+</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="cart-item-remove" onClick={() => removeFromCart(index)} aria-label="Verwijder">&times;</button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer" id="cart-footer" style={{ display: 'block' }}>
                        <div className="cart-subtotal">
                            <span>Subtotaal</span>
                            <span id="cart-subtotal">€{formatPrice(total)}</span>
                        </div>
                        <div className="cart-shipping">
                            <span>Verzending</span>
                            <span id="cart-shipping">{total >= 50 ? 'Gratis' : `€${formatPrice(shipping)}`}</span>
                        </div>
                        <div className="cart-total-row">
                            <span>Totaal</span>
                            <span id="cart-total">€{formatPrice(total + shipping)}</span>
                        </div>
                        <Link href="/checkout" className="btn btn-primary btn-lg btn-checkout" id="checkout-btn" onClick={closeCart}>
                            Afrekenen
                        </Link>
                    </div>
                )}
            </aside>
        </>
    );
}
