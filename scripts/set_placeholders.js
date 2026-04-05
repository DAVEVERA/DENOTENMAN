require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const https = require('https');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const PLACEHOLDER_URL = '/assets/img/placeholder.svg';

function checkRemoteExists(url) {
    return new Promise((resolve) => {
        try {
            const req = https.request(encodeURI(url), { method: 'HEAD', timeout: 5000 }, (res) => {
                if (res.statusCode >= 200 && res.statusCode < 400) resolve(true);
                else resolve(false);
            });
            req.on('error', () => resolve(false));
            req.on('timeout', () => { req.destroy(); resolve(false); });
            req.end();
        } catch(e) {
            resolve(false);
        }
    });
}

function checkLocalExists(localUrl) {
    // Determine physical path from `/assets/img/noten/Wasabi-Pindas.jpg` -> `<cwd>/public/assets/img...`
    const relative = localUrl.startsWith('/') ? localUrl.substring(1) : localUrl;
    const fullPath = path.join(process.cwd(), 'public', relative);
    return fs.existsSync(fullPath);
}

async function fetchAll(table, cols) {
    let all = []; let from = 0;
    while(true) {
        const { data } = await supabase.from(table).select(cols).range(from, from+999);
        if(!data || data.length === 0) break;
        all = all.concat(data);
        if(data.length < 1000) break;
        from += 1000;
    }
    return all;
}

async function run() {
    console.log("Analyzing Database Image Reachability...");

    const pData = await fetchAll('products', 'id, image');
    const vData = await fetchAll('product_variants', 'id, image');
    
    const pUpdates = [];
    const vUpdates = [];

    // Parallel checks for products
    await Promise.all(pData.map(async (p) => {
        if (!p.image) return;
        if (p.image === PLACEHOLDER_URL) return; // already a placeholder

        let exists = false;
        if (p.image.startsWith('http')) exists = await checkRemoteExists(p.image);
        else exists = checkLocalExists(p.image);

        if (!exists) {
            console.log(`[Missing Product] \${p.id} - \${p.image}`);
            pUpdates.push(p.id);
        }
    }));

    // Parallel checks for variants
    await Promise.all(vData.map(async (v) => {
        if (!v.image) return;
        if (v.image === PLACEHOLDER_URL) return; // already a placeholder

        let exists = false;
        if (v.image.startsWith('http')) exists = await checkRemoteExists(v.image);
        else exists = checkLocalExists(v.image);

        if (!exists) {
            console.log(`[Missing Variant] \${v.id} - \${v.image}`);
            vUpdates.push(v.id);
        }
    }));

    console.log(`Applying placeholder to \${pUpdates.length} products and \${vUpdates.length} variants...`);

    for(let id of pUpdates) {
        await supabase.from('products').update({ image: PLACEHOLDER_URL }).eq('id', id);
    }
    for(let id of vUpdates) {
        await supabase.from('product_variants').update({ image: PLACEHOLDER_URL }).eq('id', id);
    }

    console.log("Database update complete! Server 400 errors will now be eliminated.");
}

run();
