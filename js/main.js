$(document).ready(function() {
    "use strict";

    if ($(window).width() < 1024) {
        $('.shops_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            infinite: true,
            cssEase: 'linear',
            fade: false,
            arrows: true,
            appendDots: $(".shops_wrap_btns_dots"),
            prevArrow: $('.shops_wrap_btns_prev'),
            nextArrow: $('.shops_wrap_btns_next'),
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
        });
    }

    if ($(window).width() < 1024) {
        $('.popular_block_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            infinite: true,
            cssEase: 'linear',
            fade: false,
            arrows: true,
            appendDots: $(".popular_block_btns_dots"),
            prevArrow: $('.popular_block_btns_prev'),
            nextArrow: $('.popular_block_btns_next'),
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
        });
    }

    $('.idea_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: false,
        arrows: true,
        appendDots: $(".idea_btns_dots"),
        prevArrow: $('.idea_btns_prev'),
        nextArrow: $('.idea_btns_next'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.product_block_img_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_block_img_nav'
    });

    $('.product_block_img_nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product_block_img_for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $(".methodology_accordion_list_item_head").click(function() {
        $(this).toggleClass("active");
        $(this).siblings().slideToggle()
    });

});