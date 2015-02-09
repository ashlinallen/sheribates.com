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
            adaptiveHeight: true,
            speed: 300,
            slidesToShow: 4,
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
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 480,
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