// Carrousel Principal
$(document).ready(function(){
    $('.bannerPrincipal').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:2000,
        centerMode: true,
        dots: true,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                centerMode: false,
            }
            },
            {
            breakpoint: 768,
            settings: {
                centerMode: false,
              }
            }
        ]
    });
});
// Carrousel principal end

// Carrousel News
$(document).ready(function(){
    $('.carrouselNews').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:4000,
        dots: true,  
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '30px',
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100px',
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
              }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
});
// Carrousel News end

// Carrousel Best Sellers
$(document).ready(function(){
    $('.carrouselBestSellers').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:4000,
        dots: true,  
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '30px',
        slidesToScroll: 2,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100px',
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
              }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
});
// Carrousel Best Sellers end