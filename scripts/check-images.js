require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkImages() {
    const { data: products, error } = await supabase
        .from('products')
        .select('id, name, image');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Total products:', products.length);
    const invalid = products.filter(p => !p.image || typeof p.image !== 'string' || p.image.trim() === '');

    if (invalid.length > 0) {
        console.log('Found products with missing/invalid images:', invalid);
    } else {
        console.log('All products have an image string.');
        // Show a few examples
        console.log('Sample images:', products.slice(0, 3).map(p => p.image));
    }
}

checkImages();
