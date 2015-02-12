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
                image : function (gallery, subcat, title, description, filename) {
                    this.title = title;
                    this.description = description;
                    this.gallery = gallery;
                    this.subcat = subcat;
                    this.filename = filename;

                    imagesArr.push(this);
                },

                init : function () {
                    var slickContainer, imgUrl, image, anchor, i;

                    new images.image("design", "Email", "Email Design |Vehicle Appointment Confirmation", "This is an automated email, sent to clients' customers to confirm their vehicle service appointment.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Appt-Confirmation_v01_copy_video");
                    new images.image("design", "Email", "Email Design | New Vehicle Quote for Audi Owners", "This email was designed adhereing to Audi brand guidelines.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Audi-Quote");
                    new images.image("design", "Email", "Email/Print Design | AutoQuote Lane Sheet", "This piece is intended to be a printout for employees in service lanes at vehicle dealerships. It shows a service lane customer a quote for a new vehicle, including the trade-in amount for their current vehicle.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "AutoQuote-Lanesheet_v02");
                    new images.image("design", "Email", "Email Design | AutoQuote Holiday Template", "This is a holiday piece for AutoLoop's AutoQuote brand.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Holiday-Quote_02");
                    new images.image("design", "Email", "Email Design | Missed Vehicle Appointment", "This email is sent to AutoLoop clients' customers upon their missing a service appointment.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Missed-Appointment_v01_copy_video");
                    new images.image("design", "Email", "Email Design | AutoQuote Email", "This is an email piece designed for AutoLoop's AutoQuote brand.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Quote_Generic-Blue_v02_new-copy");
                    new images.image("design", "Email", "Email Design | Scheduled Vehicle Maintenance", "This email template was designed to contain a coupon that is customized by an AutoLoop customer via AutoLoop's website.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Scheduled-Maintenance_v01_copy_video");
                    new images.image("design", "Email", "Email Design | Subaru - BRZ Accessories", "This is one of several pieces I designed while working closely with Subaru's brand agency, Carmichael Lynch.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Subaru-Newsletter_v03");
                    new images.image("design", "Email", "Email Newsletter Design | Subaru Newsletter 1", "Subaru requested a few newsletter designs from AutoLoop, and this was one of several I provided.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Subaru-Newsletter_v04a");
                    new images.image("design", "Email", "Email Newsletter Design | Subaru Newsletter 2", "Subaru requested a few newsletter designs from AutoLoop, and this was one of several I provided.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Subaru_BRZ-Accessories_05-07-13_1");
                    new images.image("design", "LogoAndWeb", "YouTube Channel Art |  8th Place LP", "Logo and channel design for 8th Place LP.", "8th-place_Channel-Art");
                    new images.image("design", "LogoAndWeb", "Website Design | AshlinAllen.com", "This website is a portfolio site for Ashlin Allen, the extremely talented front-end developer behind my website! I designed the graphics, animation and layout based on Ashlin's vision. <a href='http://ashlinallen.com'>AshlinAllen.com</a>", "ash-site");
                    new images.image("design", "LogoAndWeb", "Logo Design | Cognition", "A logo refresh for Cognition, a photography company.", "Cognition_logo");
                    new images.image("design", "LogoAndWeb", "Website Design | DanimalCannon.com", "I designed this site for Danimal Cannon, an indie chiptune musician/frontman of Metroid Metal. This site is actually a tumblr, which better suited the client's needs.", "dan-site");
                    new images.image("design", "LogoAndWeb", "Website Design | SheriBates.com", "This is my original website design!", "sheri-bates-original-site");
                    new images.image("design", "LogoAndWeb", "Website Design | SureIllDrawThat.com", "This website was part of a full branding  project for a client who needed streaming functionality as well as a submission and voting system.", "sidt-site");
                    new images.image("design", "LogoAndWeb", "Website Design | AmiiboTracker.com", "Amiibo Tracker is a personal project between myself and developer Ashlin Allen, meant to help collectors keep track of their Amiibos as well as see where they can be purchased and pre-ordered. This website is still in development.", "amiibotracker-v01");
                    new images.image("design", "LogoAndWeb", "Website Design | Be The People", "Be the People was a personal project between myself and developer Ashlin Allen.", "be-the-people");
                    new images.image("design", "Personal", "Facebook Cover Photo | Mountains", "", "FB-header-01");
                    new images.image("design", "Personal", "Facebook Cover Photo | Satellite", "", "FB-Header-Satellite");
                    new images.image("design", "Personal", "Facebook Cover Photo | VHS", "", "FB-Header-VHS");
                    new images.image("design", "Personal", "Pokemon Gen 6 Type Matchups", "", "Pokemon-Chart");
                    new images.image("design", "Personal", "Shirt Design | Great Sea Cartography", "", "Shirt_Great-Sea-Cartography");
                    new images.image("design", "Personal", "Desktop Wallpapers | 2015 Calendars", "", "calendars");
                    new images.image("design", "Personal", "YouTube Channel Art | Eien Vs. Video Games", "", "eien-LP-channel");
                    new images.image("design", "Print", "Print | Auto Xchange (Toyota variant)", "AutoXchange is a program created by AutoLoop. This is the Toyota variant of the program materials.", "auto-xchange_Atom-mockup");
                    new images.image("design", "Print", "Mirror Hanger | Auto Xchange", "AutoXchange is a program created by AutoLoop, and I headed up the branding and design of all of the program materials. This is a mirror hang.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Auto-XChange_Mirror-Hanger_FRONT_v01");
                    new images.image("design", "Print", "Poster, 11x17 | Auto Xchange", "AutoXchange is a program created by AutoLoop, and I headed up the branding and design of all of the program materials. This is an 11x17 poster, but there are smaller and larger variants as well.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Auto-XChange_Poster-11x17_Non-Editable-Text");
                    new images.image("design", "Print", "Business Card | Ashlin Allen", "Front-end developer Ashlin Allen's business card, based on his website design.", "Business-Card_Ash");
                    new images.image("design", "Print", "Business Card | Sheri Bates", "My card!", "Business-Card_Sheri");
                    new images.image("design", "Print", "Minicard | Sheri Bates", "My minicard!", "minicard_sheri-bates");
                    new images.image("design", "Print", "Shirt Design | Danimal Cannon", "This shirt was designed for Danimal Cannon's 2012 tour.", "Shirt_Dan");
                    new images.image("design", "Print", "Brochure Design | Subaru Schedule Connect (detail)", "This brochure was requested by Subaru to detail their Schedule Connect program.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Subaru-Schedule-Connect-Details");
                    new images.image("design", "Print", "Brochure Design | Subaru Schedule Connect", "This brochure was requested by Subaru to detail their Schedule Connect program.<br><i>Designed while I worked as Art Director at AutoLoop</i>", "Subaru-Schedule-Connect-Mockup");
                    new images.image("illustration", "FanArt", "", "", "journey");
                    new images.image("illustration", "FanArt", "", "", "Link");
                    new images.image("illustration", "FanArt", "", "", "mega-man");
                    new images.image("illustration", "FanArt", "", "", "peachy");
                    new images.image("illustration", "FanArt", "", "", "pikmin");
                    new images.image("illustration", "FanArt", "", "", "Rini-Ink");
                    new images.image("illustration", "FanArt", "", "", "sailor-moon-flats");
                    new images.image("illustration", "FanArt", "", "", "Sailor-Moon-Redux-Flats");
                    new images.image("illustration", "Original", "", "", "devil");
                    new images.image("illustration", "Original", "", "", "dino");
                    new images.image("illustration", "Original", "", "", "disaster");
                    new images.image("illustration", "Original", "", "", "Facebook-Header");
                    new images.image("illustration", "Original", "", "", "garbage-folks");
                    new images.image("illustration", "Original", "", "", "ghostly");
                    new images.image("illustration", "Original", "", "", "Ice-Creamtopus");
                    new images.image("illustration", "Original", "", "", "Lotus");
                    new images.image("illustration", "Original", "", "", "Monster");
                    new images.image("illustration", "Original", "", "", "pixel-baboes");
                    new images.image("illustration", "Original", "", "", "Pokemon-Sheri-James");
                    new images.image("illustration", "Original", "", "", "pray");
                    new images.image("illustration", "Original", "", "", "punk-love");
                    new images.image("illustration", "Original", "", "", "robolady");
                    new images.image("illustration", "Original", "", "", "sittin");
                    new images.image("illustration", "Original", "", "", "skulls");
                    new images.image("illustration", "Original", "", "", "woods");
                    new images.image("illustration", "SketchesAndOther", "", "", "a-boy");
                    new images.image("illustration", "SketchesAndOther", "", "", "a-couple");
                    new images.image("illustration", "SketchesAndOther", "", "", "a-pink-devil");
                    new images.image("illustration", "SketchesAndOther", "", "", "Cold");
                    new images.image("illustration", "SketchesAndOther", "", "", "emotionalgirls2003");
                    new images.image("illustration", "SketchesAndOther", "", "", "Friendship");
                    new images.image("illustration", "SketchesAndOther", "", "", "pink-face");
                    new images.image("illustration", "SketchesAndOther", "", "", "Pokemans");
                    new images.image("illustration", "SketchesAndOther", "", "", "robot");
                    new images.image("illustration", "SketchesAndOther", "", "", "satan");
                    new images.image("illustration", "SketchesAndOther", "", "", "Turnip");
                    new images.image("illustration", "SketchesAndOther", "", "", "vine-angel");

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

        $('#design .image_slider').slick('slickFilter', '[rel="LogoAndWeb"]');
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