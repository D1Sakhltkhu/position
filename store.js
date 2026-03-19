const products = ["Shirt", "Ball", "Scarf"];

const div = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
  div.innerHTML += "<p>" + products[i] + "</p>";
}
