"use client";

import { useEffect, useState, FormEvent } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            if (!paymentIntent) return;

            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: window.location.origin + "/success", // Create success page!
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message || "An error occurred");
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
            { /* @ts-ignore - disabled prop exists on button but TS might complain if strict */}
            <button disabled={isLoading || !stripe || !elements} id="submit-btn" className="btn btn-primary btn-lg btn-block" style={{ marginTop: '1rem', width: '100%' }}>
                <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner">Processing...</div> : "Nu Betalen"}
                </span>
            </button>
            {message && <div id="payment-message" style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{message}</div>}
        </form>
    );
}
