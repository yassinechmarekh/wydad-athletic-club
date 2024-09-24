// open & close cart
cart = document.getElementById("cart");
bg_overlay = document.querySelector('.bg-overlay');

function open_cart(){
    cart.classList.add("active");
    bg_overlay.classList.add("active");
}

function close_cart(){
    cart.classList.remove("active");
    bg_overlay.classList.remove("active");
}