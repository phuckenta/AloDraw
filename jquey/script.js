$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(3000).fadeOut('fast');
});