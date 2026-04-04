const fs = require('fs');
const path = require('path');

const filesToDelete = [
    'src/app/robots.js',
    'src/app/sitemap.js',
    'src/data/products.json',
    'scripts/migrate-products.js',
    'scripts/cleanup-js.js'
];

const rootDir = path.join(__dirname, '..');

filesToDelete.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${file}`);
        } catch (error) {
            console.error(`Error deleting ${file}:`, error.message);
        }
    } else {
        console.log(`Skipped (not found): ${file}`);
    }
});
console.log('Legacy cleanup complete.');
