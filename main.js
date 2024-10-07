const home = document.querySelector(".main-page");
const shop = document.querySelector(".shop-page");

home.addEventListener("click", function(event) {
    event.preventDefault();
    if(window.location.href == "./index.html"){
    location.reload();
    } else {
        window.location.href = "./index.html"
    }
});


shop.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./shop.html";
    history.pushState(null, null, window.location.href);
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('my-modal');
    if (event.target === modal) {
        modal.classList.remove('open');
    }
});

const signupForm = document.getElementById("signup-form");



const el = document.querySelector(".adding-card");
el.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./shop.html"
})


document.querySelector(".delate-news").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".news-of-day").remove()
})

document.querySelector(".news-answer").addEventListener("submit", function(event){
    alert("congratulations, you're within our delivery zone!");
    document.querySelector(".news-of-day").remove()
})

document.querySelector(".card-adding").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./cart.html"
})