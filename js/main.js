/* global $:false, document:false, window:false, setInterval: false */

$(document).ready(function () {
    'use strict';

    // open external links in new window
    $("a[href^='http']").attr("target","_blank");

    $(window).resize(function () {
        // Variables
        var didScroll,
            lastScrollTop = 0,
            delta = 15,
            navbarHeight = $('nav').outerHeight(),
            headerHeight = $('.header').outerHeight(),
            parentWidth = $('div.highlighter-rouge').parent().width(),
			vw = $(window).width();

        $('div.highlighter-rouge').css({
            'margin-left': -(vw / 2 - parentWidth / 2),
            'margin-right': -(vw / 2 - parentWidth / 2)
        });

        // hide backtotop
        if ($('nav').hasClass('open')) {
            $('.backtotop').addClass('hidden');
        } else {
            $('.backtotop').removeClass('hidden');
        }

        $('.backtotop').click( function(){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });

        // responsive Menu
        $('.menu .toggle').click(function () {
            $('.responsive').toggleClass('active');
        });

        // add margin top for fixed nav
        $('body').css({
            'margin-top': navbarHeight
        });

        // dissapearing .header based on nav state
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > headerHeight) {
                didScroll = true;
            }
        });

        function hasScrolled() {
            var st = $(window).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('nav').css({top: -navbarHeight});
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('nav').css({top: '0'});
                }
            }
            lastScrollTop = st;
        }

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
    }).resize(); // trigger resize handlers
});
