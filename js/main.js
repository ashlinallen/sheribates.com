/*jshint nonew: false */
/*jslint browser: true, indent: 4*/
/*global $, define */

//Todo: create image dom from javascript
//Todo: fine-tune element dimensions and slick responsive breakpoints to fit proportions better
//Todo: set up analytics
//Todo: set up color themes
//Todo: need real "about" content

(function () {
    "use strict";

    var requires;

    requires = ["jquery", "fancybox", "fancybox_thumbs", "slick", "analytics"];

    define(requires, function ($) {

        $(".image_slider").slick({
            dots: true,
            infinite: true,
            arrows: true,
            speed: 800,
            slidesToShow: 6,
            slidesToScroll: 6,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 200,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        dots: false,
                        speed: 200,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },

                {
                    breakpoint: 540,
                    settings: {
                        dots: false,
                        speed: 200,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        $('#design .image_slider').slick('slickFilter', '[rel="email"]');
        $('#design .image_slider').slick('slickSetOption', 'appendDots', $('#design nav ul li:first-child'), true);
        
        $('#illustration .image_slider').slick('slickFilter', '[rel="personal"]');
        $('#illustration .image_slider').slick('slickSetOption', 'appendDots', $('#illustration nav ul li:first-child'), true);

        $('nav ul li a').on('click', function () {
            var dataFilter, targetcl;

            dataFilter = $(this).attr("data-filter");

            if ($(this).parents('#design').length) {
                targetcl = "#design";
            } else {
                targetcl = "#illustration";
            }

            $(this).parent().siblings().children("a").removeClass("selected");
            $(this).addClass("selected");

            $(targetcl + ' .image_slider').slick('slickFilter', '[rel="' + dataFilter + '"]');
            $(targetcl + ' .image_slider').slick('slickSetOption', 'appendDots', $(this).parent(), true);
        });

        $(".image_slider a").fancybox({
            helpers:  {
                thumbs : {
                    width: 100,
                    height: 100
                }
            }
        });

    });

}());