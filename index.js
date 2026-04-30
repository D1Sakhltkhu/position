import { products } from "./store.js";

const cartItems = [];
const productGrid = document.querySelector(".product-grid");
for (let i = 0; i < products.lenght; i++) {
  const product = products[i];

  productGrid.innerHTML += (
    <article class="product-card">
      <div class="product-body">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">${product.price}</p>
        <button class="btn btn-full" type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
}
