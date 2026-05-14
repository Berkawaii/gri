const fs = require('fs');

const dbPath = './database.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let discountedCount = 0;
db.products.forEach((product, i) => {
  // Add discount to about 30% of products (e.g. index % 3 === 0)
  if (i % 3 === 0 && product.prices.length === 1) {
    const originalPrice = product.prices[0].integer;
    // create a discount between 15% and 40%
    const discountFactor = 0.6 + Math.random() * 0.25; 
    let newPrice = Math.floor(originalPrice * discountFactor);
    // round to nearest 9 (e.g. 2999)
    newPrice = Math.floor(newPrice / 10) * 10 + 9;
    
    // Add original price as second element, new price as first
    product.prices = [
      { integer: newPrice, decimal: 0, currency: product.prices[0].currency },
      product.prices[0]
    ];
    discountedCount++;
  }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 3));
console.log(`Added discounts to ${discountedCount} products.`);
