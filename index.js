const backEl = document.querySelector("p");
function back(event){
    event.preventDefault();
    window.location.href = "./index.html"
}

backEl.addEventListener("click", back)

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
   window.location.href = "./index.html"
   alert("Within 24 hours We will place your order")
})