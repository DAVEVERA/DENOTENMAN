
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'products.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

let changed = 0;

data.forEach(product => {
    if (product.image && !product.image.startsWith('/')) {
        product.image = product.image.replace(/^(?:public\/)?assets\//, '/assets/');
        changed++;
    }
    if (product.variants) {
        product.variants.forEach(v => {
            if (v.image && !v.image.startsWith('/')) {
                v.image = v.image.replace(/^(?:public\/)?assets\//, '/assets/');
                changed++;
            }
        });
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 4));
console.log(`Updated ${changed} image paths in products.json.`);
