/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    updateCartQty: (index: number, delta: number) => void;
    getCartTotal: () => number;
    getCartCount: () => number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('nutty_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('nutty_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart(prevCart => {
            // Check if item exists (same id, variant, weight)
            const existingIdx = prevCart.findIndex(c =>
                c.productId === item.productId &&
                c.variantId === item.variantId &&
                c.weightGrams === item.weightGrams
            );

            if (existingIdx > -1) {
                const newCart = [...prevCart];
                newCart[existingIdx].qty += item.qty;
                return newCart;
            } else {
                return [...prevCart, item];
            }
        });
        setIsCartOpen(true); // Auto open cart
    };

    const removeFromCart = (index: number) => {
        setCart(prev => prev.filter((_, i) => i !== index));
    };

    const updateCartQty = (index: number, delta: number) => {
        setCart(prev => {
            const newCart = [...prev];
            newCart[index].qty += delta;
            if (newCart[index].qty < 1) newCart[index].qty = 1;
            return newCart;
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    };

    const getCartCount = () => {
        return cart.reduce((sum, item) => sum + item.qty, 0);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateCartQty,
            getCartTotal,
            getCartCount,
            isCartOpen,
            openCart,
            closeCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
