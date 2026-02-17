const cart = {
  user: "Ana",
  items: ["Headphones", "Mouse", "Keyboard"],
  prices: [120, 40, 80],
};
let total = 0;
for (let i = 0; i < cart.length; i++) {
  console.log("Ana is buying" + cart.items);
  total = cart.prices[i];
}
console.log("total price:" + total);
