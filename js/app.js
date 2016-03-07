$(document).ready(function() {
	
	$('.d-w').text( screen.width + 'px' );
	$('.d-h').text( screen.height + 'px' );
	
	/*
	 * For Mac
	 * To-Do - Find the Mac Version
	 */
	Modernizr.on('mac', function(result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('Mac Book');
		$('.d').before('<i class="icono-macbookBold"></i>');
	});
	
	/*
	 * For iPhone
	 * To-Do - Find the iPhone Version
	 */
	Modernizr.on('iphone', function(result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('iPhone');
		$('.d').before('<i class="icono-iphoneBold icon-device"></i>');
	});
	
	/*
	 * For Android
	 * To-Do - Find the Device Type
	 */
	Modernizr.on('android', function(result) {
		if( Modernizr.tablet ) {
			$('.card-row.hidden').removeClass('hidden');
			
			$('.d').text('Android Tablet');
			$('.d').before('<i class="icono-nexus icon-device"></i>');
		}
	});

	/*
	 * For Orientation
	 */
	Modernizr.on('landscape', function(result) {
		$('.d-o').text('Landscape');
	});
	
	Modernizr.on('portrait', function(result) {
		$('.d-o').text('Portrait');
	});

	/*
	 * Global Events
	 */
	$(window).resize(function() {
		// BUG
		// $('.device, .orientation').hide(); 
		
		$('.d-w').text( $(window).width() + 'px' );
		$('.d-h').text( $(window).height() + 'px' );
	});
	
	$(window).on("orientationchange",function(){
		// BUG
		// $('.device, .orientation').show();
		
		if($('.portrait').length) {
			$('.icon-device').addClass('rotate');
			$('.d-o').text('Landscape');
		}	else {
			$('.icon-device').removeClass('rotate');
			$('.d-o').text('Portrait');
		}
	});
	
});