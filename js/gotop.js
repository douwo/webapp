$(function() {
	$('.gotop').click(function() {
		$('html , body').animate({
			scrollTop: 0
		}, 'slow');
	});
	$('.homepage').click(function() {
		window.location.href = "index.html"
	});
});