$(function(){

	// Match Heights
	$('.matchHeight').matchHeight();
	$('.block--catalog article').matchHeight();
	$('.block--featured-projects article').matchHeight();
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

	// Dribbble
    var playerId = "pixelscode";
    $.jribbble.getShotsByPlayerId(playerId, function(data){
        var shots = data.shots;
        var h = '';
        $(shots).each(function(i, shot){
            h += '<div class="dribbble-shots__shot">';
            h += '<a href="' + shot.url + '" target="_blank"><img src="' + shot.image_url + '" width="800" height="600"></a>';
            h += '</div>';
        });
        $('.dribbble-shots').html(h);
    }, {per_page: 3});

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip()

});
