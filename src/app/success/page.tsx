"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
    const { clearCart } = useCart();
    const [status, setStatus] = useState<'loading' | 'sent' | 'error'>('loading');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paymentIntentId = urlParams.get("payment_intent"); // ID usually passed as 'payment_intent'

        if (paymentIntentId) {
            // Clear cart immediately on success page load
            clearCart();

            // Trigger email sending
            fetch('/api/send-order-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payment_intent_id: paymentIntentId })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setStatus('sent');
                    } else {
                        console.error("Email failed:", data.error);
                        setStatus('error'); // Payment is fine, just email failed
                    }
                })
                .catch(err => {
                    console.error("Email req failed:", err);
                    setStatus('error');
                });
        }
    }, [clearCart]);

    return (
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h1 className="section-title">Betaling Geslaagd!</h1>
            <p className="mb-4 text-muted">Bedankt voor je bestelling bij De Notenman.</p>

            {status === 'loading' && <p>Bevestigingsmail wordt verstuurd...</p>}
            {status === 'sent' && <p className="mb-4" style={{ color: 'green' }}>✓ Bevestigingsmail is verzonden!</p>}
            {status === 'error' && <p className="mb-4" style={{ color: 'orange' }}>De betaling is gelukt, maar de bevestigingsmail kon niet worden verzonden. Neem contact op als u twijfelt.</p>}

            <Link href="/" className="btn btn-primary">Terug naar de shop</Link>
        </div>
    );
}
