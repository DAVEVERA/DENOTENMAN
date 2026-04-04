import { supabase } from './supabase';
import { Product, Variant, WeightOption, StockStatus } from '@/types';

export async function getProducts(): Promise<Product[]> {
    const { data: products, error } = await supabase
        .from('products')
        .select(`
      *,
      weights:product_weights(*),
      variants:product_variants(*)
    `)
        .order('id');

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }

    // Transform data to match original JSON structure if necessary
    // Our schema is very close, but relations come back as nested arrays.
    // The frontend expects "weights" and "variants".

    // Define temporary types for raw DB response if strictness is needed, 
    // but loose mapping is often easier for initial migration unless we generate DB types.
    return products.map((p: any) => {
        // --- CATEGORY OVERRIDES ---
        let finalCategory = p.category;
        let finalCategoryLabel = p.category_label;

        // 1. Honing override (if name contains Honing)
        if (p.name.toLowerCase().includes('honing')) {
            finalCategory = 'honing';
            finalCategoryLabel = 'Honing';
        }
        // 2. Pinda merge (if category is pinda/pindas -> noten)
        else if (finalCategory === 'pinda' || finalCategory === 'pindas') {
            finalCategory = 'noten';
            finalCategoryLabel = 'Noten';
        }

        return {
            ...p,
            category: finalCategory,
            categoryLabel: finalCategoryLabel,
            desc: p.description, // remap database description to JSON desc
            basePrice: p.base_price, // map snake_case to camelCase
            // Ensure arrays are present even if empty
            weights: (p.weights || []).map((w: any) => ({
                label: w.label,
                grams: w.grams,
                price: w.price
            })) as WeightOption[],
            variants: (p.variants || []).map((v: any) => ({
                ...v,
                // map variant fields if needed, e.g. stock_status -> stock.status structure
                // For now, let's keep it flat or reconstruct stock object if frontend relies on it heavily.
                // Frontend uses stock.label, stock.status.
                stock: {
                    status: v.stock_status,
                    label: v.stock_label
                } as StockStatus
            })) as Variant[]
        };
    }) as Product[];
}
