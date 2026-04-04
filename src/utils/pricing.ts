import { Product, CartItem } from '@/types';

/**
 * Calculate the price of a single product item based on variant and weight.
 * @param product - The product object
 * @param variantId - The ID of the selected variant (optional)
 * @param weightGrams - The weight in grams of the selected option (optional)
 * @returns The calculated price for one unit of this item.
 */
export function calculateItemPrice(product: Product, variantId?: string | number | null, weightGrams?: number): number {
    if (!product) return 0;

    // 1. Identify Variant Price Base
    let variantBasePrice = product.basePrice;
    if (variantId && product.variants) {
        // loose comparison for ID (string vs number safe)
        const variant = product.variants.find(v => v.id == variantId);
        if (variant) {
            variantBasePrice = variant.price;
        }
    }

    // 2. Identify Weight Factor & Price
    let price = variantBasePrice;

    // Valid weights from product
    const baseWeights = product.weights;

    // Find the weight option that matches grams
    const weightOption = baseWeights ? baseWeights.find(w => w.grams === weightGrams) : null;

    if (weightOption) {
        // Calculate factor: optionPrice / productBasePrice
        // Note: product.basePrice is the reference for the weight factors in the JSON structure
        const factor = weightOption.price / product.basePrice;

        // Apply factor to the (potentially variant-adjusted) base price
        price = Math.round((variantBasePrice * factor) * 100) / 100;
    }

    return price;
}

/**
 * Calculate the total order amount in cents (for Stripe).
 * @param items - Array of cart items { productId, variantId, weightGrams, qty }
 * @param allProducts - Array of all product objects
 * @returns Total amount in cents
 */
export function calculateOrderAmount(items: CartItem[], allProducts: Product[]): number {
    let total = 0;

    items.forEach(item => {
        const product = allProducts.find(p => p.id === item.productId);
        if (!product) return;

        const price = calculateItemPrice(product, item.variantId, item.weightGrams);
        total += price * item.qty;
    });

    // Shipping Logic: Free if total >= 50
    const shipping = total >= 50 ? 0 : 4.95;

    return Math.round((total + shipping) * 100);
}
