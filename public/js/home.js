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
