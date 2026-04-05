import { NextResponse, NextRequest } from 'next/server';
import { getProducts } from '@/lib/products';
import { calculateOrderAmount } from '@/utils/pricing';
import { CartItem } from '@/types';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

export async function POST(request: NextRequest) {
    try {
        const { items } = await request.json();

        // Fetch fresh products from DB for security
        const allProducts = await getProducts();

        // Use shared utility to calculate amount
        const amount = calculateOrderAmount(items, allProducts);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "eur",
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                items: JSON.stringify(items.map(function (item: CartItem) {
                    return {
                        id: item.productId,
                        name: item.name || 'Product', // ensure name is passed from frontend call
                        qty: item.qty,
                        weight: item.weightLabel,
                        price: item.price
                    };
                }))
            }
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: `Internal Server Error: ${error.message}` },
            { status: 500 }
        );
    }
}
