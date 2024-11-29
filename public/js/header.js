// Hamburger menu 

// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

// Hamburger menu end

// Redirect events
function redirectShoppingCart() {
    location.href = "./shoppingCart.html";
};

function redirectSignUp() {
    location.href = "./signUp.html";
};

