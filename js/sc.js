$(function(){
	$(window).scroll(function (){
    // ↓.jsのクラスをそれぞれ書く
		$('.js-fade,.js-fade_1,.js-fade_3').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll_4');
			}
		});
	});
});