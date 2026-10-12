const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(message) {
  return new Promise((resolve) => rl.question(message, resolve));
}

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];


const categoryThresholds = { budgetMax: 100, standardMax: 500 };

function getCategory(price) {
  if (price <= categoryThresholds.budgetMax) return "Budget";
  if (price <= categoryThresholds.standardMax) return "Standard";
  return "Premium";
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}


function calculateAdjustedTotal(total, taxRate = 0, discountRate = 0) {
  return total * (1 + taxRate) * (1 - discountRate);
}

const formatMoney = (amount) => `$${Number(amount.toFixed(2))}`;

function showInventory(items) {
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  items.forEach((item) => {
    let badge;
    switch (getCategory(item.price)) {
      case "Budget":
        badge = "Budget";
        break;
      case "Standard":
        badge = "Standard";
        break;
      case "Premium":
        badge = "Premium";
        break;
      default:
        badge = "Uncategorized";
    }
    console.log(`* Item: ${item.name} (${formatMoney(item.price)}) -> Category: ${badge}`);
  });
}

async function readNewProduct() {
  while (true) {
    const nameInput = (await prompt("Enter a product name (or leave blank to cancel): ")).trim();
    if (!nameInput) {
      console.log("No product added.");
      break;
    }


    let duplicate = false;
    for (const item of inventory) {
      if (!item.name) continue;
      if (item.name.toLowerCase() === nameInput.toLowerCase()) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      console.log("That product already exists. Try another name.");
      continue;
    }

    const priceInput = (await prompt("Enter its price: ")).trim();
    const price = Number(priceInput); // Explicit input conversion.
    if (priceInput === "" || !Number.isFinite(price) || price < 0) {
      console.log("Price must be a valid number greater than or equal to zero. Start again.");
      continue;
    }

    inventory.push({ name: nameInput, price });
    console.log(`Added ${nameInput} at ${formatMoney(price)}.`);
    break;
  }
}

async function main() {
  console.log("--- Initializing Inventory System ---");
  await readNewProduct();

  showInventory(inventory);

  const total = calculateTotal(inventory);
  const affordableItems = inventory.filter((item) => item.price < 200);
  const report = inventory.map((item) => `${item.name.toUpperCase()}: ${formatMoney(item.price)}`);

  const adjustedTotal = calculateAdjustedTotal(total, 0.08, 0.05);

  console.log("\n--- Financial Analytics ---");
  console.log(`Total Inventory Value: ${formatMoney(total)}`);
  console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItems.map((item) => item.name))}`);
  console.log(`Formatted Report List: ${JSON.stringify(report)}`);
  console.log(`Adjusted Total (8% tax, then 5% discount): ${formatMoney(adjustedTotal)}`);
}

main()
  .catch((error) => {
    console.error("Inventory dashboard could not finish:", error.message);
    process.exitCode = 1;
  })
  .finally(() => rl.close());

