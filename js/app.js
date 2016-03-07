$(document).ready(function () {
	
	$('.d-w').text(screen.width + 'px');
	$('.d-h').text(screen.height + 'px');
	
	/*
	 * For Mac
	 * To-Do - Find the Mac Version
	 */
	Modernizr.on('mac', function (result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('Mac Book');
		$('.d').before('<i class="icono-macbookBold"></i>');
	});
	
	/*
	 * For iPhone
	 * To-Do - Find the iPhone Version
	 */
	Modernizr.on('iphone', function (result) {
		$('.card-row.hidden').removeClass('hidden');
		
		$('.d').text('iPhone');
		$('.d').before('<i class="icono-iphoneBold icon-device"></i>');
	});
	
	/*
	 * For Android
	 * To-Do - Find the Device Type
	 */
	Modernizr.on('android', function (result) {
        $('.card-row.hidden').removeClass('hidden');
        $('.d').before('<i class="icono-nexus icon-device"></i>');
        
		if(Modernizr.tablet) {
			$('.d').text('Android Tablet');
		} else {
            $('.d').text('Android Device');
        }
	});

	/*
	 * Global Events
	 */
	$(window).resize(function () {		
		$('.d-w').text($(window).width() + 'px');
		$('.d-h').text($(window).height() + 'px');
	});
	
});