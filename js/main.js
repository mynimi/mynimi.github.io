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
            straight = 'M 0.49749557,0.533884 C 5.3897549,0.59230536 358.94568,0.53765168 384.74589,0.68210683 411.42068,0.59498791 765.70745,0.52741665 768.98083,0.513569 z',
            curve = 'M 0.49749557,0.533884 C 0.17215764,30.235138 358.94568,14.224118 384.74589,45.043458 412.27283,14.224118 769.31963,30.342258 768.98083,0.513569 z',
            svg = $('.triangle'),
            path = $('.triangle path'),
            anim = $('.triangle path animate'),
            trigger = '#trigger',
            svgHeight = $('.svg_wrapper').outerHeight(),
            cutouth = $('.triangle_reverse_container').outerHeight(),
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

        // disable click for svg
        svg.off('click');

        // responsive Menu
        $('.menu .toggle').click(function () {
            $('.responsive').toggleClass('active');
        });

        // set svg start attributes
        path.attr('d', curve);
        anim.attr('from', curve);
        anim.attr('to', straight);

        // click function odd
        function cool() {
            $('nav').removeClass('open');
            if ($('nav').hasClass('open')) {
                $('.backtotop').addClass('hidden');
            } else {
                $('.backtotop').removeClass('hidden');
            }
            $(trigger).children('i').data('clicked', true);
            svg.attr('class', 'triangle');
            path.attr('d', curve);
            anim.attr('from', curve);
            anim.attr('to', straight);
            $('.triangle path animate')[0].beginElement();
            if ($(trigger).children('i').hasClass('fa-eye-slash')) {
                $(trigger).children('i').removeClass('fa-eye-slash').addClass('fa-eye');
            } else {
                $(trigger).children('i').removeClass('fa-eye').addClass('fa-eye-slash');
            }
            $('#trigger').one("click", classic);
        }

        // click function even
        function classic() {
            $('nav').addClass('open');
            if ($('nav').hasClass('open')) {
                $('.backtotop').addClass('hidden');
            } else {
                $('.backtotop').removeClass('hidden');
            }
            svg.attr('class', 'triangle reverse');
            path.attr('d', straight);
            anim.attr('from', straight);
            anim.attr('to', curve);
            anim[0].beginElement();
            if ($(trigger).children('i').hasClass('fa-eye-slash')) {
                $(trigger).children('i').removeClass('fa-eye-slash').addClass('fa-eye');
            } else {
                $(trigger).children('i').removeClass('fa-eye').addClass('fa-eye-slash');
            }
            $('#trigger').one("click", cool);
        }

        // click handling even & odd
        $('#trigger').one("click", cool);

        // add margin top for fixed nav
        $('body').css({
            'margin-top': navbarHeight
        });

        $('.header').css({
            'padding-top': svgHeight,
            'margin-top': -svgHeight-10,
            'padding-bottom': cutouth,
        });

        $('.triangle_reverse_container').css({
            'margin-top': -cutouth+3
        });

        // footer positioning
        var footHeight = $('.foot').outerHeight();
        $('footer .svg_wrapper').css({
            'margin-bottom': footHeight-3
        });

        $('footer').css({
            'height': $('footer .triangle_up').outerHeight()+footHeight
        });

        // dissapearing .header based on nav state
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > (headerHeight + svgHeight)) {
                if ($('nav').hasClass('open')) {
                    didScroll = true;
                } else {
                    didScroll = false;
                }
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
                $('.backtotop').addClass('hidden');
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('nav').css({top: '0'});
                    $('.backtotop').removeClass('hidden');
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

        // make it so, that content fills at least whole window
        $('.wrapper').css({
            'min-height': $(window).height() - $('.header').outerHeight() - $('footer').height() - $('.menu').height() - 13 // because 13 is the magic number
        });


    }).resize(); // trigger resize handlers
});
