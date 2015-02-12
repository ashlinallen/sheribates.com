/*jshint nonew: false */
/*jslint browser: true, indent: 4*/
/*global $, define */

//Todo: set up hello@sheribates.com
//Todo: nav arrows
//Todo: bug when switching categories after resizing

//Todo: need real "about" content
//Todo: remainder of example images

(function () {
    "use strict";

    var requires, images, imagesArr;

    requires = ["jquery", "fancybox", "fancybox_thumbs", "slick"];//, "analytics"

    document.createElement = (function (fn) {
        //Override createElement to take ID and Class.
        return function (type, id, className) {
            var elem;

            elem = fn.call(document, type);

            if (id !== undefined) {
                elem.id = id;
            }

            if (className !== undefined) {
                elem.className = className;
            }

            return elem;
        };
    }(document.createElement));

    define(requires, function ($) {
        imagesArr = [];

        images = (function () {
            return {
                image : function (gallery, title, description, subcat, filename) {
                    this.title = title;
                    this.description = description;
                    this.gallery = gallery;
                    this.subcat = subcat;
                    this.filename = filename;

                    imagesArr.push(this);
                },

                init : function () {
                    var slickContainer, imgUrl, image, anchor, i;

                    new images.image("design", "mytitle", "mydescription", "Email", "Appt-Confirmation_v01_copy_video");
                    new images.image("design", "mytitle", "mydescription", "Email", "Audi-Quote");
                    new images.image("design", "mytitle", "mydescription", "Email", "AutoQuote-Lanesheet_v02");
                    new images.image("design", "mytitle", "mydescription", "Email", "Holiday-Quote_02");
                    new images.image("design", "mytitle", "mydescription", "Email", "Missed-Appointment_v01_copy_video");
                    new images.image("design", "mytitle", "mydescription", "Email", "Quote_Generic-Blue_v02_new-copy");
                    new images.image("design", "mytitle", "mydescription", "Email", "Scheduled-Maintenance_v01_copy_video");
                    new images.image("design", "mytitle", "mydescription", "Email", "Subaru-Newsletter_v03");
                    new images.image("design", "mytitle", "mydescription", "Email", "Subaru-Newsletter_v04a");
                    new images.image("design", "mytitle", "mydescription", "Email", "Subaru_BRZ-Accessories_05-07-13_1");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "8th-place_Channel-Art");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "ash-site");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "Cognition_logo");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "dan-site");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "sheri-bates-original-site");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "sidt-site");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "amiibotracker-v01");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "be-the-people");
                    new images.image("design", "mytitle", "mydescription", "LogoAndWeb", "BFS");
                    new images.image("design", "mytitle", "mydescription", "Personal", "FB-header-01");
                    new images.image("design", "mytitle", "mydescription", "Personal", "FB-Header-Satellite");
                    new images.image("design", "mytitle", "mydescription", "Personal", "FB-Header-VHS");
                    new images.image("design", "mytitle", "mydescription", "Personal", "Pokemon-Chart");
                    new images.image("design", "mytitle", "mydescription", "Personal", "Shirt_Great-Sea-Cartography");
                    new images.image("design", "mytitle", "mydescription", "Personal", "calendars");
                    new images.image("design", "mytitle", "mydescription", "Personal", "eien-LP-channel");
                    new images.image("design", "mytitle", "mydescription", "Print", "auto-xchange_Atom-mockup");
                    new images.image("design", "mytitle", "mydescription", "Print", "Auto-XChange_Mirror-Hanger_FRONT_v01");
                    new images.image("design", "mytitle", "mydescription", "Print", "Auto-XChange_Poster-11x17_Non-Editable-Text");
                    new images.image("design", "mytitle", "mydescription", "Print", "Business-Card_Ash");
                    new images.image("design", "mytitle", "mydescription", "Print", "Business-Card_Sheri");
                    new images.image("design", "mytitle", "mydescription", "Print", "minicard_sheri-bates");
                    new images.image("design", "mytitle", "mydescription", "Print", "Shirt_Dan");
                    new images.image("design", "mytitle", "mydescription", "Print", "Subaru-Schedule-Connect-Details");
                    new images.image("design", "mytitle", "mydescription", "Print", "Subaru-Schedule-Connect-Mockup");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "journey");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "Link");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "mega-man");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "peachy");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "pikmin");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "Rini-Ink");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "sailor-moon-flats");
                    new images.image("illustration", "mytitle", "mydescription", "FanArt", "Sailor-Moon-Redux-Flats");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "devil");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "dino");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "disaster");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "Facebook-Header");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "garbage-folks");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "ghostly");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "Ice-Creamtopus");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "Lotus");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "Monster");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "pixel-baboes");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "Pokemon-Sheri-James");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "pray");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "punk-love");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "robolady");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "sittin");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "skulls");
                    new images.image("illustration", "mytitle", "mydescription", "Original", "woods");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "a-boy");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "a-couple");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "a-pink-devil");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "Cold");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "emotionalgirls2003");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "Friendship");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "pink-face");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "Pokemans");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "robot");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "satan");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "Turnip");
                    new images.image("illustration", "mytitle", "mydescription", "SketchesAndOther", "vine-angel");

                    for (i = 0; i < imagesArr.length; i += 1) {
                        if (imagesArr[i].gallery === "design") {
                            slickContainer = $('#design .image_slider');
                        } else {
                            slickContainer = $('#illustration .image_slider');
                        }

                        imgUrl = "img/examples/" + imagesArr[i].gallery + "/" + imagesArr[i].subcat + "/" + imagesArr[i].filename;

                        image = document.createElement("img");
                        image.src = imgUrl + "_thumb.jpg";

                        anchor = document.createElement("a", undefined, "fancybox");
                        anchor.href = imgUrl + ".jpg";
                        anchor.setAttribute("title", imagesArr[i].description);
                        anchor.setAttribute("rel", imagesArr[i].subcat);
                        anchor.appendChild(image);

                        slickContainer.append(anchor);
                    }
                }
            };
        }());

        images.init();

        $(".image_slider").slick({
            dots: true,
            infinite: true,
            arrows: true,
            speed: 800,
            slidesToShow: 7,
            slidesToScroll: 7,

            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 200,
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                },

                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 200,
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },

                {
                    breakpoint: 900,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 200,
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },

                {
                    breakpoint: 800,
                    settings: {
                        dots: false,
                        speed: 200,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },

                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        speed: 200,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },

                {
                    breakpoint: 400,
                    settings: {
                        dots: false,
                        speed: 200,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('#design .image_slider').slick('slickFilter', '[rel="Email"]');
        $('#design .image_slider').slick('slickSetOption', 'appendDots', $('#design nav ul li:first-child'), true);

        $('#illustration .image_slider').slick('slickFilter', '[rel="FanArt"]');
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
            //helpers:  {
            //    thumbs : {
            //        width: 100,
            //        height: 100
            //    }
            //}
        });

        $('#palettes div').on('click', function () {
            $('body').removeClass();
            $('body').addClass('scheme_' + $(this).attr('class'));
        });
    });

}());