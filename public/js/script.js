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

    /*
    $("#btnSubmit").click(function() {
        $(this).attr("disabled", true);
        $(this).text("Submitted");
        $(this).css("background-color", "#3a3e64");
    });
*/

    $(".navbar").height();

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    function classOnScroll() {
        let $nav = $('.navbar'),
            $scroll = $(window).scrollTop();

        if ($scroll > $nav.height()) {
            if (!$nav.hasClass('is-active'))
                $nav.addClass('is-active');
        } else
            $nav.removeClass('is-active');

    }

    classOnScroll();

    $(window).on('scroll resize', classOnScroll);

});