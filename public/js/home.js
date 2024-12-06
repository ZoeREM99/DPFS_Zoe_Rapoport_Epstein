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
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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

// Carrousel Recomended
$(document).ready(function(){
    $('.carrouselRecomended').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:4000,
        dots: true,  
        slidesToShow: 4,
        centerMode: false,
        centerPadding: '30px',
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
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
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });
});
// Carrousel Recomended end

// Carrousel Categories
$(document).ready(function(){
    $('.carrouselCategories').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:4000,
        dots: false,  
        slidesToShow: 3,
        centerMode: false,
        centerPadding: '30px',
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '100px',
                }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
            breakpoint: 600,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});
// Carrousel Categories end