$(document).ready(function() {

	// add first / last classes
	$('ul').each(function() {
		$('li:last', this).addClass('last');
		$('li:first', this).addClass('first');
	});

	// placeholder
	$('input[data-placeholder], textarea[data-placeholder]').each(function () {
		var placeholder = $(this).attr('data-placeholder');
		if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
			$(this).removeClass('placeholder');
		} else {
			$(this).val(placeholder);
			$(this).addClass('placeholder');
		}
		$(this).focusin(function () {
			$(this).removeClass('placeholder');
			if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
				$(this).val('');
			}
		});
		$(this).focusout(function () {
			if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
				$(this).val(placeholder);
				$(this).addClass('placeholder');
			}
		});
	});

	$(' a[href=#] ').on('click',function(e){e.preventDefault();});


	$('.main-slider .slider').slick({
		arrows: false,
		dots: true
	});

	$('.slider-brands').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
	    },{
			breakpoint: 568,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}]
	});

	if ($('.shopping-dropdown').length) {
		var item = $('.shopping-dropdown');

		item.on('click', function () {
			if ( item.hasClass('open') ) {
				item.removeClass('open');
				$('.shopping').fadeOut(200);
			} else {
				item = $('.shopping-dropdown');
				item.addClass('open');
				$('.shopping').fadeIn(500);
			};
			return false;
		});
	};

	if ($('.menu-cart').length) {
		var item = $('.menu-cart');

		item.on('click', function () {
			if ( item.hasClass('open') ) {
				item.removeClass('open');
				$('.shopping-mobile').hide(0);
			} else {
				item.addClass('open');
				$('.shopping-mobile').show(0);
			};
			return false;
		});
	};


	if ($('.man-women').length) {
		$('.man-women .item').on('click', function () {
			$(this).parents('.man-women').find('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	};
	if ($('.level').length) {
		$('.level .item').on('click', function () {
			$(this).parents('.level').find('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	};
	if ($('.purpose-w').length) {
		$('.purpose-w .item').on('click', function () {
			$(this).parents('.purpose-w').find('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	};
	if ($('.purpose-m').length) {
		$('.purpose-m .item').on('click', function () {
			$(this).parents('.purpose-m').find('.active').removeClass('active');
			$(this).addClass('active');
			return false;
		});
	};


	if ($('.man-women').length) {
		
		var result, gender, goal, age;

		var men = $('.man-women .men');
		var woman = $('.man-women .woman');
		
		men.on('click', function () {
			if ( men.hasClass('active') ) {
				$('.purpose-w').hide();
				$('.purpose-m').show();
				$('.wrapper-accordion .uberAccordion .title').css("pointer-events","all");
			};

			if ( men.hasClass('active') ) {
				$('.level-w').hide();
				$('.level-m').show();
				$('.wrapper-accordion .uberAccordion .title').css("pointer-events","all");
			};

			$('#panel2').click();
			gender = $('.man-women .men').attr('data-gender');
		});

		woman.on('click', function () {
			if ( woman.hasClass('active') ) {
				$('.purpose-m').hide();
				$('.purpose-w').show();
				$('.wrapper-accordion .uberAccordion .title').css("pointer-events","all");
			};

			if ( woman.hasClass('active') ) {
				$('.level-m').hide();
				$('.level-w').show();
				$('.wrapper-accordion .uberAccordion .title').css("pointer-events","all");
			};


			$('#panel2').click();
			gender = $('.man-women .woman').attr('data-gender');		
		});

		$('#panel2').closest('li').find('.item').on('click', function(){
			goal = $(this).attr('data-goal');
			$('#panel3').click();
		});

		$('#panel3').closest('li').find('.item').on('click', function(){
			age = $(this).attr('data-age');	
			result = gender + ' / ' + goal + ' / ' + age;
			alert(result);		
		});
	};

	// close popup
	$(document).keyup(function(e){
		if (e.keyCode == 27) {
			$('.shopping-dropdown').removeClass('open');
			$('.shopping').fadeOut(200);
		}
	});

	$('body').click(function() {
		$('.shopping-dropdown').removeClass('open');
		$('.shopping').fadeOut(200);
	});

	$('.shopping').on('click', function (e) {
		e.stopPropagation();
	});


	if ($('.block-search').length) {
		$('.block-search input[type="text"]').focus(function() {
			$(this).parents('.block-search').addClass('search-focus');
		});
		$('.block-search input[type="text"]').focusout(function() {
			$(this).parents('.block-search').removeClass('search-focus');
		});
	};

	// mobile sidebar
	var pageSlidebars = new $.slidebars({
		disableOver: 768,
		scrollLock: true,
		siteClose: false
	});


	$('.menu-left').on('click', function() {
		pageSlidebars.slidebars.open('left');
		fixHeightMobile();

	});

	$('.menu-right').on('click', function() {
		pageSlidebars.slidebars.open('right');
		fixHeightMobile();
	});

	$("#sb-site").on('click', function(){
		if ($('.sb-active').length) {
			pageSlidebars.slidebars.close();
		};
	});

	$("#sb-site").on('touchmove', function() {
		if ($('.sb-active').length) {
			$(window).resize(function() {
				fixHeightMobile();
			});
			return false;
		} else {
			return true;
		}
	});

	function fixHeightMobile() {
		var itemHeight = $(window).innerHeight();
		$("#sb-site").css('height',itemHeight);
	}

	//reset filter

	if($('.reset').length) {
		$('.reset').on('click', function () {
			$('.filter-block').find('input[type="checkbox"]').prop('checked', false);
			return false;
		});
	}

	// mobile sub menu
	if ($(".nav-categories").length) {
		$(".nav-categories > ul > li").on('click',function () {
			var itemRootMobile = $(this);
			if (itemRootMobile.hasClass('open')) {
				$(this).removeClass('open');
				$(this).find('> .mobile-sub-menu').stop(true).slideUp(200);
			} else {
				if ($(this).find('> .mobile-sub-menu').length) {
					$(this).addClass('open');
					$(this).find('> .mobile-sub-menu').stop(true).slideDown(200);
				};
			}
			return false;
		});

		$('.nav-categories .mobile-sub-menu > li').on('click', function () {
			var subMenuRoot = $(this);

			if (subMenuRoot.hasClass('open')) {
				$(this).removeClass('open');
				$(this).find('ul').stop(true).slideUp(200);
			} else {
				if ($(this).find('ul').length) {
					$(this).addClass('open');
					$(this).find('ul').stop(true).slideDown(200);
				};
			};
			return false;
		});
	};

	if ($('.format').length) {
		numeral.language('ru', {
			delimiters: {
				thousands: ' ',
				decimal: ','
			}
		});
		numeral.language('ru');
		$('.format').each( function() {
			var number = $(this).html();
			string = numeral(number).format('0,0');
			$(this).html(string);
		});
	};

	// order
	if( $('.order-btn').length ) {
		$('.order-btn .btn').on('click', function () {
			$(this).parents('.order-btn').fadeOut(100);

			var target = $('#order');

			$('.wrapper-order').fadeIn(300, function () {
				$.scrollTo('#order',800);
			});
			return false;
		});
	}


	// home preloader

	if ($("#preloader").length) {
		var opts = {
			lines: 9,
			length: 6,
			width: 2,
			radius: 6,
			corners: 1,
			rotate: 0,
			direction: 1,
			color: '#fff',
			speed: 1,
			trail: 60,
			shadow: false,
			hwaccel: false,
			className: 'spinner',
			zIndex: 2e9,
			top: '50%',
			left: '50%'
		};
		var target = document.getElementById('preloader');
		var spinner = new Spinner(opts).spin(target);
	};

	if ($('.bxslider').length) {
		$('.bxslider').bxSlider({
			pagerCustom: '#bx-pager',
			controls: false,
			mode: 'fade',
		});
	};

	// remove item basket
	if ($('.purchase-table').length) {
		$('.purchase-table .remove').on('click', function(){
			var trLength = $(this).parents('tbody').find('tr').length;
			if (trLength > 1) {
				$(this).parents('tr').remove();
			};
			return false;
		});
	};

	// fancybox

	if ($('.show-gallery').length) {
		$(".show-gallery").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none',
			padding: [1,1,1,1]
		});
	};

	// fixed menu top mobile
	if ($(window).width() <= 767) {
		var headerHeight = $('.page-header').outerHeight() - $('.mobile-layout').outerHeight();
		var scrolled = $(document).scrollTop();
		if (scrolled > headerHeight){
			$('.mobile-layout').addClass('fixed');
		} else {
			$('.mobile-layout').removeClass('fixed');
		}
	};
	$(window).scroll(function() {
		headerHeight = $('.page-header').outerHeight() - $('.mobile-layout').outerHeight();
		if ($(window).width() <= 767) {
			scrolled = $(document).scrollTop();
			if (scrolled > headerHeight){
				$('.mobile-layout').addClass('fixed');
			} else {
				$('.mobile-layout').removeClass('fixed');
			}
		};
	});

	// composition popup
	if ($('#composition-popup').length) {
		$(".view-popup").fancybox({
			maxWidth	: 400,
			maxHeight	: 700,
			fitToView	: false,
			width		: '90%',
			height		: '70%',
			autoSize	: true,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			padding: [1,1,1,1]
		});
	};


	// dropdown main menu
	$('.menu-categories > ul > li > a').on('click', function(){
		var root = $(this);
		if (root.closest('li').find('.sub-menu').length) {
			if (root.closest('li').hasClass('open')) {
				root.closest('li').removeClass('open');
			} else {
				root.closest('li').addClass('open');
			};
		};
		return false;
	});

	// level 2
	$('.menu-categories .sub-menu > li > a').on('click', function(){
		var rootSub = $(this);
		if (rootSub.closest('li').find(' > ul').length) {		
			if (rootSub.closest('li').hasClass('open')) {
				rootSub.closest('li').removeClass('open');
			} else {
				rootSub.closest('li').addClass('open');
			};
		};
		return false;
	});

	// level 3
	$('.menu-categories .sub-menu > li > ul > li > a').on('click', function(){
		var rootSub2 = $(this);
		if (rootSub2.closest('li').find('ul').length) {		
			if (rootSub2.closest('li').hasClass('open')) {
				rootSub2.closest('li').removeClass('open');
			} else {
				rootSub2.closest('li').addClass('open');
			};
		};
		return false;
	});


});

$(window).load(function() {
	if ($('.main-slider').length) {
		$("#preloader").fadeOut(500, function () {
			$('.main-slider .inside').animate({'opacity':'1'},1000);
		})
	};
});


//remove
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;" onclick="$(this).parent().hide()">Закрыть X</a> \
// 	<ol> \
// 		<li><a href="index.html">Главная</a></li> \
// 		<li><a href="history.html">История</a></li> \
// 		<li><a href="category.html">Категории</a></li> \
// 		<li><a href="cart.html">Корзина</a></li> \
// 		<li><a href="blog.html">Блог</a></li> \
// 		<li><a href="blog-inner.html">Блог внутренняя</a></li> \
// 		<li><a href="contacts.html">Контакты</a></li> \
// 		<li><a href="product.html">Продукты</a></li> \
// 		<li><a href="product-inner.html">Продукты внутренняя</a></li> \
// 		<li><a href="registration.html">Регистрация</a></li> \
// 		<li><a href="compare.html">Сравнение</a></li> \
// 		<li><a href="selection-man.html">Подбор питания юношей</a></li> \
// 		<li><a href="selection-woman.html">Подбор питания девушек</a></li> \
// 	</ol> \
// </div>');
