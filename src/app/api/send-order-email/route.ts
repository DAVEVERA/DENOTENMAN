import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import OrderConfirmationEmail from '@/components/emails/OrderConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

export async function POST(request: NextRequest) {
    try {
        const { payment_intent_id } = await request.json();

        if (!payment_intent_id) {
            return NextResponse.json({ error: 'Missing payment_intent_id' }, { status: 400 });
        }

        // 1. Retrieve the payment intent from Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);

        if (paymentIntent.status !== 'succeeded') {
            return NextResponse.json({ error: 'Payment not succeeded' }, { status: 400 });
        }

        // 2. Extract Data
        // Attempt to get email from latest charge or receipt_email
        let email = paymentIntent.receipt_email;
        if (!email && paymentIntent.latest_charge) {
            // We might need to expand latest_charge but let's try assuming it's linked or check if we need another call
            // Typically simplified: if we didn't explicitly set receipt_email on update, it might be missing.
            // But Stripe Payment Element usually collects it.
        }

        // Fallback: If no email found in Stripe object, we can't send.
        // However, the checkout form *should* have collected it.
        // For this MVP, let's assume the user enters it in the checkout (PaymentElement).

        const items = paymentIntent.metadata.items ? JSON.parse(paymentIntent.metadata.items) : [];
        const total = paymentIntent.amount;

        if (!email) {
            // If Stripe didn't catch the email, we can't send. 
            // We could try to pass it from frontend if we stored it in localstorage, but that's insecure.
            // Let's return error or skip.
            return NextResponse.json({ error: 'No email found in payment intent' }, { status: 400 });
        }

        // 3. Send Email
        const { data, error } = await resend.emails.send({
            from: 'De Notenman <onboarding@resend.dev>',
            to: [email],
            subject: `Bestelbevestiging #${payment_intent_id.slice(-6).toUpperCase()}`,
            react: OrderConfirmationEmail({
                orderId: payment_intent_id.slice(-6).toUpperCase(),
                items,
                total,
                customerName: 'Klant'
            }),
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error("Internal Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
