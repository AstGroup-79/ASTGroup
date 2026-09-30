const cart = [];
const overlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const money = value => value.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function renderCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty">Seu carrinho está vazio.</p>';
    cartTotal.textContent = money(0);
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <small>${item.quantity} × ${money(item.price)}</small>
      </div>
      <button class="remove" data-index="${index}">Remover</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = money(total);

  document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.index), 1);
      renderCart();
    });
  });
}

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    const existing = cart.find(item => item.name === name);

    if (existing) existing.quantity += 1;
    else cart.push({ name, price, quantity: 1 });

    renderCart();
    overlay.classList.add("open");
  });
});

document.getElementById("openCart").addEventListener("click", () => overlay.classList.add("open"));
document.getElementById("closeCart").addEventListener("click", () => overlay.classList.remove("open"));

overlay.addEventListener("click", event => {
  if (event.target === overlay) overlay.classList.remove("open");
});

document.getElementById("checkout").addEventListener("click", () => {
  if (!cart.length) {
    alert("Adicione pelo menos um produto ao carrinho.");
    return;
  }
  alert("Carrinho preparado. A integração de pagamento será adicionada na próxima etapa.");
});

renderCart();