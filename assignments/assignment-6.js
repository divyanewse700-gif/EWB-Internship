// Assignment 6: Arrays, Objects, and Core Methods
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

console.log("-- All Products (forEach) --");
products.forEach((product) => console.log(`Item: ${product.name} - Price: $${product.price}`));

console.log("\n-- Filtered Products (Price < $50) --");
const affordableProducts = products.filter((product) => product.price < 50);
console.log(`[ ${affordableProducts.map((product) => `{ name: '${product.name}', price: ${product.price} }`).join(", ")} ]`);

console.log("\n-- Mapped Product Tags (map) --");
const productTags = products.map((product) => `${product.name.toUpperCase()} costs $${product.price}`);
console.log(JSON.stringify(productTags));

