// additions for Lightbox
//------------------------

// loader
var loaderOn = function () {
		$('body').append('<div class="lightbox-loader"><div></div></div>');
	},
	loaderOff = function () {
		$('.lightbox-loader').remove();
	},

// overlay
	overlayOn = function () {
		$('body').append('<div class="lightbox-overlay"></div>');
	},
	overlayOff = function () {
		$('.lightbox-overlay').remove();
	},

// arrows
	arrowsOn = function (instance, selector) {
		var $arrows = $('<span class="lightbox-left lightbox-arrow">left</span><span class="lightbox-right lightbox-arrow">right</span>"');
		$arrows.appendTo('body');
		$arrows.on('click touchend', function (e) {
			e.preventDefault();
			var $this = $(this),
				$target = $(selector + '[href="' + $('#imagelightbox').attr('src') + '"]'),
				index = $target.index(selector);

			if ($this.hasClass('lightbox-left')) {
				index = index - 1;
				if (!$(selector).eq(index).length)
					index = $(selector).length;
			} else {
				index = index + 1;
				if (!$(selector).eq(index).length)
					index = 0;
			}
			instance.switchImageLightbox(index);
			return false;
		});
	},
	arrowsOff = function () {
		$('.lightbox-arrow').remove();
	};

// Initiating Lightboxes
$(document).ready(function(){
	// minimal lightbox
	$('a[data-imagelightbox="a"]').imageLightbox();

	// loader and overlay
	$( 'a[data-imagelightbox="b"]' ).imageLightbox({
		onStart: function(){ overlayOn(); },
		onEnd: function() { overlayOff(); loaderOff(); },
		onLoadStart: function() { loaderOn(); },
		onLoadEnd:	 function() { loaderOff(); }
	});

	// arrows, loader and overlay
	var selectorC = 'a[data-imagelightbox="c"]';
	var instanceC = $(selectorC).imageLightbox({
		onStart: function () { overlayOn(); arrowsOn(instanceC, selectorC);},
		onEnd: function () { overlayOff(); arrowsOff(); loaderOff();},
		onLoadStart: function () { loaderOn(); },
		onLoadEnd: function () { loaderOff(); $('.lightbox-arrow').css('display', 'block'); }
	});

	$('.to-be-toggled').hide();
    $('.toggle-minimal').click(function(){
		$('.to-be-toggled').slideUp();
		$('.minimal').slideToggle();
	});
    $('.toggle-overlay').click(function(){
		$('.to-be-toggled').slideUp();
		$('.overlay').slideToggle();
	});
    $('.toggle-arrows').click(function(){
		$('.to-be-toggled').slideUp();
		$('.arrows').slideToggle();
	});
});