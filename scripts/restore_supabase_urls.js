require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const rawDataUrl = 'https://luablfcmhzykjnxmtlqh.supabase.co/storage/v1/object/public/Products/';

const productsJsonPath = './src/data/products.json';

function getRemoteUrlFromPath(localPath) {
    if (!localPath) return null;
    let filename = localPath;
    if (localPath.includes('/')) {
        const parts = localPath.split('/');
        filename = parts[parts.length - 1];
    }
    // Encode the filename so spaces become %20, just in case Supabase needs it. But wait, Next Image requires the exact string. Let's just append the filename.
    return rawDataUrl + encodeURIComponent(filename);
}

async function run() {
    console.log("Restoring all DB images to raw Supabase URLs based on products.json...");
    let raw = fs.readFileSync(productsJsonPath, 'utf8');
    const productsList = JSON.parse(raw);

    let productUpdates = 0;
    let variantUpdates = 0;

    for (const p of productsList) {
        if (p.image) {
            const remoteUrl = getRemoteUrlFromPath(p.image);
            await supabase.from('products').update({ image: remoteUrl }).eq('id', p.id);
            productUpdates++;
        }

        if (p.variants && p.variants.length > 0) {
            for (const v of p.variants) {
                if (v.image) {
                    const remoteUrl = getRemoteUrlFromPath(v.image);
                    await supabase.from('product_variants').update({ image: remoteUrl }).eq('variant_id', v.id).eq('product_id', p.id);
                    variantUpdates++;
                }
            }
        }
    }
    
    console.log(`Successfully restored \${productUpdates} products and \${variantUpdates} variants to Supabase URLs!`);
}

run();
