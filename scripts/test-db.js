const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Manually read .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (fs.existsSync(envPath)) {
    console.log('Reading .env.local...');
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            const cleanKey = key.trim();
            const cleanValue = value.trim().replace(/^["']|["']$/g, ''); // Remove quotes
            if (cleanKey === 'NEXT_PUBLIC_SUPABASE_URL') supabaseUrl = cleanValue;
            if (cleanKey === 'NEXT_PUBLIC_SUPABASE_ANON_KEY') supabaseKey = cleanValue;
        }
    });
}

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    console.log('Connecting to Supabase...');
    const { data, error } = await supabase
        .from('products')
        .select('id, name')
        .limit(3);

    if (error) {
        console.error('SUPABASE ERROR:', JSON.stringify(error, null, 2));
    } else {
        console.log('SUCCESS! Retrieved products:', data.length);
        console.log(data);
    }
}

test();
