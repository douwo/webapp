$(function() {
	$('.gotop').click(function() {
		$('html , body').animate({
			scrollTop: 0
		}, 'slow');
	});
	$('.homepage').click(function() {
		window.location.href = "/m/webapp/"
	});	$(".gotop").hide(); 
});

$(window).scroll(function() {
	// 滚动条距离顶部的距离 大于 200px时
	if ($(window).scrollTop() >= 50) {
		$(".gotop").fadeIn(1000); // 开始淡入
	} else {
		$(".gotop").stop(true, true).fadeOut(1000); // 如果小于等于 200 淡出
	}
});
