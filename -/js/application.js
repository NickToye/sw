$(function(){


	// Scroll Top
	initScrollToTop = function() {
	$("#back-top").on('click', function(e) {
		e.preventDefault();
		return $("html, body").animate({
			scrollTop: 0
			}, 900);
		});
	};
	initScrollToTop();

	$('.dribbble-shots').hide();
	$('.instagram > ul').hide();
	jQuery(window).load(function(){
		$('.dribbble-shots').fadeIn();
		$('.instagram > ul').fadeIn();
	});

	// Buttons
	$('#loading-example-btn')
	.click(function () {
		var btn = $(this)
		btn.button('loading')
		setTimeout(function () {
			btn.button('reset')
		}, 3000)
	});

	// Popovers
	$('[data-toggle="popover"]').popover()

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip()

});
