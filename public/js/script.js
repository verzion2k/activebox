class Person {

    /* Get Person method, ajax adatok lekerdezes, */
    getPerson() {
        $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/team',
            dataType: 'json',
            success: (data) => {
                this.clonePerson(data)
            }
        });
    }

    /* render method, feluletre rendereli a personokat */
    clonePerson(data) {

        data.map((item) => {
            const $person = $('#team__skeleton').clone();

            $person.find('.card-img-top').attr('src', item.image);
            $person.find('.team__name').text(item.name);
            $person.find('.team__position').text(item.position);
            $person.find('.team__desc').text(item.description);

            $person.removeClass('d-none').removeAttr('id');



            $('#team__container').append($person);
        });

    }


}


$(document).ready(function() {


    var teamTopOffset = $("#team").offset().top;

    $(window).on('scroll', function() {
        if (window.pageYOffset > teamTopOffset - $(window).height() + 300) {

            const person = new Person();
            person.getPerson();

            $(window).off('scroll');
        }

    });

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



    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var post_url = $(this).attr('action');
        var request_method = $(this).attr('method');
        var form_data = $(this).serialize();

        $("#btnSubmit").attr("disabled", true);
        $("#btnSubmit").text("Submitted");
        $("#btnSubmit").css("background-color", "#28a745");
        $("#btnSubmit").css("cursor", "default");

        $(this).find('input, textarea').attr('disabled', true);

        $.ajax({
            url: post_url,
            type: request_method,
            data: form_data
        }).done(function(response) {

            $('#contactForm')[0].reset();
        });
    });

});