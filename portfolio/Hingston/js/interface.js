$(document).ready(function() {

    // add first / last classes
	$('ul,ol').each(function() {
		$('li:last', this).addClass('last');
		$('li:first', this).addClass('first');
	});

	$('a[href=#]').click(function(e) {
		e.preventDefault();
	});

	// placeholder
	$('input[data-placeholder], textarea[data-placeholder]').each(function() {
		var placeholder = $(this).attr('data-placeholder');
		if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
			$(this).removeClass('placeholder');
		} else {
			$(this).val(placeholder);
			$(this).addClass('placeholder');
		}
		$(this).focusin(function() {
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}
		});
		$(this).focusout(function() {
			if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
				$(this).val(placeholder);
				$(this).addClass('placeholder');
			}
		});
	});

	// detect touch device
	if (isTouchDevice() === true) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	}


	//preloader
	var opts = {
		lines: 11,
		length: 7,
		width: 5,
		radius: 7,
		corners: 1,
		rotate: 0,
		direction: 1,
		color: '#000',
		speed: 1,
		trail: 60,
		shadow: false,
		hwaccel: false,
		className: 'spinner',
		zIndex: 100,
		top: '50%',
		left: '50%'
	};
	var target = document.getElementById('loader');
	var spinner = new Spinner(opts).spin(target);

	$(window).load(function(){
		$('#loader').fadeOut(500, function(){
	        $('.main-carousel').animate({'opacity':'1'},900);
	    });
	});


	//MAIN-CAROUSEL
	if ($('.main-carousel').length){
		$('.main-carousel').slick({
			arrows: false,
			dots: true,
		})
	};

	//MAIN-MENU
	$('.main-menu ul > li a').on("click", function(event){
		if ($(this).next('.submenu').length){
			$(this).parent('li').toggleClass('active');
			$(this).next('.submenu').slideToggle(250);
		}
	});


	//left-menu
	$('.menu-btn').on('click', function() {
		$(this).animate({"opacity": 0},0);
		pageSlidebars.slidebars.toggle('left');
		fixHeightMobile();
	});

	//SEARCH-BLOCK
	$('.search-btn').on('click', function() {
		$('.search-modal').fadeIn(250);
		$('.content').fadeOut(250);

		$('.search-btn').hide();
		$('.search-close').show();
		$('.layout').css("overflow","hidden");

		$('body').css("background","#ffffff");
		$('.grey-bg #sb-site').css("background","#ffffff");
		$('.grey-bg .sb-site-container').css("background","#ffffff");

		
	});
	$('.search-close').on('click', function() {
		$('.content').fadeIn(250);
		$('.search-modal').fadeOut(250);
		

		$('.search-close').hide();
		$('.search-btn').show();
		$('.layout').css("overflow","auto");


		$('.grey-bg').css("background","#E6E6E8");
		$('.grey-bg #sb-site').css("background","#E6E6E8");
		$('.grey-bg .sb-site-container').css("background","#E6E6E8");
	});


	$(".close-btn").on('click', function(){
		if ($('.sb-active').length) {
			pageSlidebars.slidebars.close();
			$('.menu-btn').animate({"opacity": 1},1500);
		};
	});
	if ($('.sb-active').length) {
		$('.menu-btn').animate({"opacity": 0},0);
	}


	//info-open страница project-page
	$('.info-open').on('click', function() {
		$(this).toggleClass('opened');
		$(this).next('.project-info').slideToggle(250);
	});


	//newsletter страница contacts
	$('.newsletter').on('click', function() {
		$(this).next('.newsletter-form').slideToggle(250);
	});


	var pageSlidebars = new $.slidebars({
		disableOver: 1024,
		scrollLock: true,
		siteClose: false
	});





	// idleTimer = null;
	// idleState = false; // состояние отсутствия
	// idleWait = 2000; // время ожидания в мс. (1/1000 секунды)
	 
	// $(document).ready( function(){
	//   $(document).bind('mousemove keydown scroll', function(){
	//     clearTimeout(idleTimer); // отменяем прежний временной отрезок
	//     if(idleState == true){ 
	//       // Действия на возвращение пользователя
	//        $("body").prepend("<p>С возвращением!</p>");
	//     }
	 
	//     idleState = false;
	//     idleTimer = setTimeout(function(){ 
	//       // Действия на отсутствие пользователя
	//       $("body").prepend("<p>Вы отсутствовали более чем " + idleWait/1000 + " секунд.</p>");
	//       idleState = true; 
	//     }, idleWait);
	//   });
	 
	//   $("body").trigger("mousemove"); // сгенерируем ложное событие, для запуска скрипта
	// });
});


$(window).resize(function () {
	if ( $(window).width() > 649){
		column_right = $('#col_right').innerHeight();
		caption = $('.caption').innerHeight();
		hc = column_right - caption - 2;
		object_height = $('#object_height').css('height',hc);

		$('.studio-item.big img').css('height','100%');
	}
	else
	{
		object_height3 = $('#object_height').css('height','auto');
		$('.studio-item.big img').css('height','auto');
	}
});

$(window).load(function(){
	if ( $(window).width() > 649){
		column_right = $('#col_right').innerHeight();
		caption = $('.caption').innerHeight();
		hc = column_right - caption - 2;
		object_height = $('#object_height').css('height',hc);

		$('.studio-item.big img').css('height','100%');
	}
	else
	{
		object_height = $('#object_height').css('height','auto');
		$('.studio-item.big img').css('height','auto');
	}
});





function isTouchDevice() {
	return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function fixHeightMobile() {
	var itemHeight = $(window).innerHeight();
	$("#sb-site").css('height',itemHeight);
}




//remove
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;" onclick="$(this).parent().hide()">Закрыть X</a> \
// 	<ol> \
// 		<li><a href="index.html">Index</a></li> \
// 		<li><a href="work.html">Work</a></li> \
// 		<li><a href="category.html">Category</a></li> \
// 		<li><a href="project-page.html">Project-page</a></li> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="contacts.html">Contacts</a></li> \
// 	</ol> \
// </div>');
