// Carrousel Might like
$(document).ready(function(){
    $('.carrouselMightLike').slick({
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
                slidesToScroll: 1,
              }
            }
        ]
    });
});
// Carrousel Might like end