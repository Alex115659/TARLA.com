const home = document.querySelector(".main-page");
const shop = document.querySelector(".shop-page");

home.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "/index.html";
    history.pushState(null, null, window.location.href);
});

shop.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./shop.html";
});

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsDiv.innerHTML = "";  

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>price: £${item.price}</p>
                <button class="buy-button" data-index="${index}">Buy</button>
            `;
            cartItemsDiv.appendChild(productDiv);
        });

        // Добавляем обработчики событий на кнопки "Купить"
        document.querySelectorAll(".buy-button").forEach(function(buyButton) {
            buyButton.addEventListener("click", function(event) {
                event.preventDefault();
                const itemIndex = this.getAttribute('data-index');

                // Удаляем товар из корзины
                cart.splice(itemIndex, 1);

                // Обновляем localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Перерисовываем корзину
                displayCart();

                // Перенаправление на страницу оплаты (по желанию)
                window.location.href = "./card.html";
            });
        });
    }
}

// Инициализация корзины
displayCart();

