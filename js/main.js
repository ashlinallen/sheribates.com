/*jshint nonew: false */
/*jslint browser: true, indent: 4*/
/*global $, define */

(function () {
    "use strict";

    var doc, win, requires;

    requires = ["jquery", "fancybox", "fancybox_thumbs", "slick"]; //, "analytics"

    define(requires, function ($) {
        $(".image_slider").slick({
            dots: true,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    });
}());