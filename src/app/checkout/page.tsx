"use client";

import { useState, useEffect } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "@/components/CheckoutForm";
import Link from 'next/link';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState("");
    const { cart } = useCart();

    useEffect(() => {
        if (cart.length === 0) return;

        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: cart.map(item => ({
                    productId: item.productId,
                    variantId: item.variantId,
                    weightGrams: item.weightGrams,
                    qty: item.qty
                }))
            }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [cart]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#d35400',
            colorBackground: '#ffffff',
            colorText: '#2c3e50',
        },
    };
    const options: StripeElementsOptions = {
        clientSecret,
        appearance,
    };

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h1>Winkelwagen is leeg</h1>
                <p className="mb-4">Je hebt nog geen producten geselecteerd.</p>
                <Link href="/" className="btn btn-primary">Naar de shop</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 className="section-title">Afrekenen</h1>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
