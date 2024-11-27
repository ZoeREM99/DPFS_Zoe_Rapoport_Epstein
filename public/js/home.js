$(document).ready(function(){
    $('.single-item').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:2000,
        centerMode: true,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
            }
            }
        ]
    });
});

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