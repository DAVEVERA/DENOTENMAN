export interface WeightOption {
    label: string;
    grams: number;
    price: number;
}

export interface StockStatus {
    status: 'in_stock' | 'out_of_stock' | 'low_stock';
    label: string;
    lowStock?: boolean;
}

export interface Variant {
    id: string;
    name: string;
    price: number;
    image: string;
    sku: string;
    stock: StockStatus;
    origin?: string;
    badge?: string | null;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    categoryLabel: string;
    image: string;
    desc: string;
    basePrice: number;
    unit: string;
    weights: WeightOption[];
    variants: Variant[];
    badge?: string | null;
    origin?: string;
    sku?: string;
    stock?: StockStatus;
}

export interface CartItem {
    productId: number;
    variantId: string | null;
    name: string; // Product name + Variant name
    image: string;
    sku: string;
    weightLabel: string;
    weightGrams: number;
    price: number;
    qty: number;
}
