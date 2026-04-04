const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Manually read .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (fs.existsSync(envPath)) {
    console.log('Reading .env.local...');
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            const cleanKey = key.trim();
            const cleanValue = value.trim().replace(/^["']|["']$/g, '');
            if (cleanKey === 'NEXT_PUBLIC_SUPABASE_URL') supabaseUrl = cleanValue;
            if (cleanKey === 'SUPABASE_SERVICE_ROLE_KEY') supabaseKey = cleanValue;
            if (!supabaseKey && cleanKey === 'NEXT_PUBLIC_SUPABASE_ANON_KEY') supabaseKey = cleanValue;
        }
    });
}

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
    const productsPath = path.join(__dirname, '../src/data/products.json');
    if (!fs.existsSync(productsPath)) {
        console.error('products.json not found!');
        process.exit(1);
    }

    let productsData;
    try {
        productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    } catch (e) {
        console.error('Failed to parse products.json:', e.message);
        process.exit(1);
    }

    console.log(`Starting migration of ${productsData.length} products...`);

    for (const p of productsData) {
        console.log(`Migrating: ${p.name}`);

        // 1. Insert Product
        const { error: pError } = await supabase
            .from('products')
            .upsert({
                id: p.id,
                name: p.name,
                slug: p.slug,
                category: p.category,
                category_label: p.categoryLabel,
                image: p.image,
                description: p.desc,
                base_price: p.basePrice,
                unit: p.unit,
                badge: p.badge,
                origin: p.origin || (p.variants?.[0]?.origin),
                is_active: true
            });

        if (pError) {
            console.error(`Error inserting product ${p.name}:`, pError);
            continue;
        }

        // 2. Insert Weights
        if (p.weights && p.weights.length > 0) {
            for (const w of p.weights) {
                const { error: wError } = await supabase
                    .from('product_weights')
                    .upsert({
                        product_id: p.id,
                        grams: w.grams,
                        label: w.label,
                        price: w.price
                    }, { onConflict: 'product_id, grams' });

                if (wError) console.error(`Error inserting weight ${w.label}:`, wError);
            }
        }

        // 3. Insert Variants
        if (p.variants && p.variants.length > 0) {
            for (const v of p.variants) {
                const { error: vError } = await supabase
                    .from('product_variants')
                    .upsert({
                        product_id: p.id,
                        variant_id: v.id,
                        name: v.name,
                        price: v.price,
                        image: v.image,
                        sku: v.sku,
                        stock_status: v.stock?.status || 'in_stock',
                        stock_label: v.stock?.label || 'Op voorraad'
                    }, { onConflict: 'product_id, variant_id' });

                if (vError) console.error(`Error inserting variant ${v.name}:`, vError);
            }
        }
    }
    console.log("Migration complete!");
}

migrate();
