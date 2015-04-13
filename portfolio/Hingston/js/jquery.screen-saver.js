var s_saver;


var wWidth = $(window).width();

if (wWidth <= 1279) {
	screenDes();
} else {
	screensaver();
};

$(window).resize(function() {


	var wWidth = $(window).width();
	if (wWidth <= 1279) {
		screenDes();
	} else {
		screensaver();
	};
})







function screenDes() {
	$('.screensaver').hide();
	$(".gallery").bgswitcher('stop');
}



function screensaver() {

	//mouse
		var heightPage = $(document).innerHeight();
		var widthPage = $(document).innerWidth();
		$(window).resize(function(){
			heightPage = $(document).innerHeight();
			widthPage = $(document).innerWidth();

			$('.gallery').css('height',heightPage);
			$('.gallery').css('width',widthPage);
		});

		$('.gallery').css('height',heightPage);
		$('.gallery').css('width',widthPage);

		$('body').mousemove(function(){

			clearTimeout(s_saver);

			s_saver = setTimeout(function(){
				$('.screensaver').fadeIn(600);
				$(".gallery").bgswitcher('start');		
				
			}, 2000);

			$('.screensaver').fadeOut(300);
			$(".gallery").bgswitcher('stop');

			
		});	

		$('body').mousemove();

	//key
	$(document).keydown(function() {

		clearTimeout(s_saver);
		s_saver = setTimeout(function(){
			$('.screensaver').fadeIn(600);
			$(".gallery").bgswitcher('start');		
			
		}, 2000);

		$('.screensaver').fadeOut(300);
		$(".gallery").bgswitcher('stop');
	});

	$(".gallery").bgswitcher({
		images: [
			"img/img1.jpg",
			"img/img2.jpg"
		],
		interval: 3000,
		shuffle: true,
		duration: 1000
	});
	$(".gallery").bgswitcher('stop');

}