$(document).ready(function() {

	$('.d-w').text( screen.width + 'px' );
	$('.d-h').text( screen.height + 'px' );
	
	/*
	 * For Mac
	 To-Do - Find the iPhone Version
	 */
	Modernizr.on('mac', function(result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('Mac Book');
		$('.d').before('<i class="icono-macbookBold"></i>');
	});
	
	/*
	 * For iPhone
	 To-Do - Find the iPhone Version
	 */
	Modernizr.on('iphone', function(result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('iPhone');
		$('.d').before('<i class="icono-iphoneBold"></i>');
		
		// Listen for orientation changes
		window.addEventListener("orientationchange", function() {
			
			if($('.portrait').length) {
				$('.icono-iphoneBold').addClass('rotate');
			}	else {
				$('.icono-iphoneBold').removeClass('rotate');
			}
			
		}, false);
	});

	$(window).resize(function() {
		$('.d-w').text( $(window).width() + 'px' );
		$('.d-h').text( $(window).height() + 'px' );
	});
});