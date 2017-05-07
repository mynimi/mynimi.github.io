/* global $:false, document:false, window:false, setInterval: false */

$(document).ready(function () {

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

    // open external links in new window
    $("a[href^='http']:not(.noblank)").attr("target","_blank");

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


        // dissapearing .header based on nav state
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > headerHeight) {
                didScroll = false;
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

    $("nav").stick_in_parent();

});

// responsive Menu
$('.menu .toggle').click(function () {
    $('.responsive').toggleClass('active');
});


// procreate brushes tabs
$('.brush-nav span').click(function(){
    var tabId = $(this).data('toggles-tab');
    $('.brush-nav span').not($(this)).removeClass('active');
    $(this).addClass('active');
    $('.brush-tab').not('#'+tabId).slideUp();
    $('#'+tabId).slideDown();
});

$('a[data-lightbox]').click(function(e){
    e.preventDefault();
    var img = $(this).attr('href');
    $('body').append('<div class="shadow"></div>');
    $('body').append('<img src="'+img+'" class="lightbox-img">');
    $('body').append('<div class="lightbox-open"></div>');
});
$('body').on('click', '.lightbox-open', function(){
    $('.shadow').remove();
    $('.lightbox-img').remove();
    $('.lightbox-open').remove();
});
$(document).keyup(function(e){
    if(e.keyCode === 27){
        $('.shadow').remove();
        $('.lightbox-img').remove();
    }
});
