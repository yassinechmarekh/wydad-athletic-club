// loader
window.addEventListener("load", function () {
  document
    .getElementById("loader-container")
    .style.setProperty("display", "none", "important");
  document.body.classList.remove("no-scroll");
});
document.body.classList.add("no-scroll");

// open & close cart
cart = document.getElementById("cart");
bg_overlay = document.querySelector(".bg-overlay");

function open_cart() {
  cart.classList.add("active");
  bg_overlay.classList.add("active");
}

function close_cart() {
  cart.classList.remove("active");
  bg_overlay.classList.remove("active");
}

// palmares carousel
var palmaresCarousel = document.getElementById("palmaresCarousel");
var carousel = new bootstrap.Carousel(palmaresCarousel, {
  interval: 2500,
  ride: "carousel",
});

// next form checkout
function next_form(prev, next) {
  const allForms = document.querySelectorAll('.accordion-collapse');
  const allButtons = document.querySelectorAll('.accordion-button');

  allForms.forEach(form => {
      form.classList.remove('show');
  });

  allButtons.forEach(button => {
      button.classList.add('collapsed');
      button.setAttribute('aria-expanded', 'false');
  });

  const prev_form = document.getElementById(prev);
  const next_form = document.getElementById(next);

  if (prev_form && next_form) {
      next_form.classList.add('show');

      const next_button = next_form.previousElementSibling.querySelector('button');
      if (next_button) {
          next_button.classList.remove('collapsed');
          next_button.setAttribute('aria-expanded', 'true');
      }
  }
}

