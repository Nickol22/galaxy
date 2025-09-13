let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  document.getElementById('cart-count').textContent = cart.length;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.product} - $${item.price};
    cartItems.appendChild(li);
  });
  document.getElementById('cart-total').textContent = Итого: $${total};
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

function checkout() {
  if (cart.length === 0) {
    alert('Корзина пуста!');
    return;
  }
  alert('Спасибо за заказ! Ваш заказ оформлен.');
  cart = [];
  total = 0;
  document.getElementById('cart-count').textContent = 0;
  updateCart();
  toggleCart();
}
