// Массив для хранения добавленных товаров
let cart = [];

// Функция обновления корзины (обновление количества товаров)
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // обновляем количество товаров в корзине
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    cart.push(productId);
    updateCart(); // обновляем корзину после добавления
}

// Добавление событий на кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productId = product.getAttribute('data-id');
        addToCart(productId); // добавляем товар в корзину
    });
});