$(document).ready(function() {

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});