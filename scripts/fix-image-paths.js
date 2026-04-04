require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixPaths() {
    // 1. Fix Products
    const { data: products, error: pError } = await supabase
        .from('products')
        .select('id, image');

    if (pError) console.error(pError);
    else {
        console.log(`Checking ${products.length} products...`);
        for (const p of products) {
            if (p.image && !p.image.startsWith('/') && !p.image.startsWith('http')) {
                console.log(`Fixing product ${p.id}: ${p.image} -> /${p.image}`);
                await supabase
                    .from('products')
                    .update({ image: `/${p.image}` })
                    .eq('id', p.id);
            }
        }
    }

    // 2. Fix Variants
    const { data: variants, error: vError } = await supabase
        .from('product_variants')
        .select('id, image');

    if (vError) console.error(vError);
    else {
        console.log(`Checking ${variants.length} variants...`);
        for (const v of variants) {
            if (v.image && !v.image.startsWith('/') && !v.image.startsWith('http')) {
                console.log(`Fixing variant ${v.id}: ${v.image} -> /${v.image}`);
                await supabase
                    .from('product_variants')
                    .update({ image: `/${v.image}` })
                    .eq('id', v.id);
            }
        }
    }
    console.log('Fix complete.');
}

fixPaths();
