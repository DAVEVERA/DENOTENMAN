require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
    console.log("Listing files in 'Products' bucket...");
    
    // We fetch in pages if there are many files.
    let allFiles = [];
    let offset = 0;
    while(true) {
        const { data, error } = await supabase.storage.from('Products').list('', {
            limit: 1000,
            offset: offset,
            sortBy: { column: 'name', order: 'asc' },
        });

        if (error) {
            console.error("Error fetching bucket:", error.message);
            process.exit(1);
        }

        if(!data || data.length === 0) break;
        allFiles = allFiles.concat(data);
        if(data.length < 1000) break;
        offset += 1000;
    }

    console.log(`Total files found: \${allFiles.length}`);
    fs = require('fs');
    fs.writeFileSync('scripts/bucket_files.json', JSON.stringify(allFiles, null, 2));
    console.log("Saved bucket files list to scripts/bucket_files.json");
    
    const missingExample = allFiles.find(f => f.name.toLowerCase().includes('gember'));
    console.log("Example search for 'gember':", missingExample ? missingExample.name : "Not found in bucket");
}

run();
