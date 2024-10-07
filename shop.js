const home = document.querySelector(".main-page");
const shop = document.querySelector(".shop-page")

home.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./index.html";
    history.pushState(null, null, window.location.href);
})

shop.addEventListener("click", function(event){
    event.preventDefault();
    location.reload();
})

function addToCart(button) {
    const product = button.parentElement;
    const productName = product.getAttribute('data-name');
    const productPrice = product.getAttribute('data-price');

    const productObj = {
        name: productName,
        price: productPrice
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push(productObj);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(productName + " add in cart!");
}

function goToCart() {
    window.location.href = './cart.html';
}

document.querySelector(".card-adding").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./cart.html"
})
