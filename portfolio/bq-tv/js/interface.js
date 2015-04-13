$(document).ready(function() {

	// add first / last classes
	$('ul,ol').each(function() {
		$('li:last', this).addClass('last');
		$('li:first', this).addClass('first');
	});

	$('a[href=#]').click( function(e){
		e.preventDefault();
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

	//слайдер баннеры-главная
	$('.banners-slider .bxslider').bxSlider({
		mode: 'fade',
		captions: false,
		controls: false,
	});
	//слайдер баннеры-избранное
	$('.favorites-banners-slider .bxslider').bxSlider({
		mode: 'fade',
		captions: false,
		controls: false,
	});
	$('.slider-banner-large').bxSlider({
		mode: 'fade',
		captions: false,
		controls: false,
	});
	//слайдер стримы
	$('.streams-slider').bxSlider({
		slideWidth: 150,
		minSlides: 6,
		maxSlides: 6,
		slideMargin: 22,
		pager: false,
		controls:true,
		moveSlides: 1,
	});

	//loading
	var opts = {
		lines: 11,
		length: 9,
		width: 3,
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
		left: '50%',
	};
	var target = document.getElementById('loading');
	var spinner = new Spinner(opts).spin(target);

	var target_streams = document.getElementById('loader');
	var spinner_streams = new Spinner(opts).spin(target_streams);

	var target_faq = document.getElementById('preloader');
	var spinner_faq = new Spinner(opts).spin(target_faq);

	var target_banners = document.getElementById('preloader-banners');
	var spinner_banners = new Spinner(opts).spin(target_banners);


	$('#loader').fadeOut(500, function(){
		$('.streams-slider-wrap').animate({'opacity':'1'},1000);
	});



	//табы главная страница
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab= $(this).find("a").attr("href");
		$('#loading').fadeIn();
		$('#loading').fadeOut(500, function(){
			$(activeTab).fadeIn(500);
		});
		return false;
	});


	// select
	$('.select-custom').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				html: $this.children('option').eq(i).html(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
	//спрятать-показать пароль
	$("#f-password").val("");
	var password = $("#f-password");
	var button = $("#show-password");
	button.mousedown(function() {
		password.attr("type", "text");
	});
	button.mouseup(function(){
		password.attr("type", "password");
	});
	button.mouseleave(function() {
		password.attr("type", "password");
	});
	if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
		button.on("touchstart", function() {
			password.attr("type", "text");
		});

		button.on("touchend", function() {
			password.attr("type", "password");
		});
	}

	if ($(".registration-form").length) {
		$(".registration-form").validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				password: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Обязательное поле"
				},
				email: "Ошибка может быть многострочной и содержать неограниченное количество символов.",
				password: {
					required: "Обязательное поле"
				}
			}
		});
	};

	if ($(".contacts-form form").length) {
		$(".contacts-form form").validate({
			rules: {
				contact_name: {
					required: true
				},
				contact_email: {
					required: true,
					email: true
				},
			},
			messages: {
				contact_name: {
					required: "Обязательное поле"
				},
				contact_email: "Обязательное поле",
			}
		});
	};

	//показать дополнительную информацию
	$(".more-info").on("click",function(){
		$(this).toggleClass('active');

		if ( $('.more-info').hasClass("active") ){
			$('.more-info span').html('Скрыть');
			$('.more-info i').html('-');
		}
		else{
			$('.more-info span').html('Дополнительная информация');
			$('.more-info i').html('+');
		}

 		$('.hidden-info').stop(true,true).slideToggle(500);
        return false;
    });


	//перевернуть стрелку в сортировке(стр streams)
	$('.sorting .up').click(function(){
		$(this).toggleClass('down');
	})


    //обрезаем текст
    $('.recommended-block .description .h4').jTruncate({
    	ellipsisText: "...",
    	length: 60,
    	moreText: "",
    });
    $('.popular .description .h4').jTruncate({
    	ellipsisText: "...",
    	length: 52,
    	moreText: "",
    });
    $('.breadcrumbs span').jTruncate({
    	ellipsisText: "...",
    	length: 25,
    	moreText: "",
    });


	$('.edit-data').hide();
	//Редактировать данные в профиле
	$(".edit").click(function(){
		$('.edit-data').show();
		$('.data').hide();
	});
	$(".reset").click(function(){
		$('.data').show();
		$('.edit-data').hide();
	});


	//замена input[type="file"]
	if($('#chose_file').length){
		$('#chose_file').click(function(){
		$('#chose_file_input').click();
		return(false);
	});
	$('#chose_file_input').change(function(){
			var filename = $('#chose_file_text').html($(this).val().replace(/.+[\\\/]/, ""));
			if ($(filename).text() == '') {
				$('#delete').css("display",'none');
			}
			else{
				$(filename).append("<a href='#' id='delete'></a>");
				$('#delete').css("display",'inline-block');
				$('#chose_file_text').css("visibility","visible");
			}
		}).change();
	};


	$('#chose_file_text').on('click', '#delete', function(){
		$('#chose_file_text').css("visibility","hidden");
		return false;
	});


	if($('#chose_file_sec').length){
		$('#chose_file_sec').click(function(){
		$('#chose_file_input_sec').click();
		return(false);
	});
	$('#chose_file_input_sec').change(function(){
			var filename_sec = $('#chose_file_text_sec').html($(this).val().replace(/.+[\\\/]/, ""));
			if ($(filename_sec).text() == '') {
				$('#delete_sec').css("display",'none');
			}
			else{
				$(filename_sec).append("<a href='#' id='delete_sec'></a>");
				$('#delete_sec').css("display",'inline-block');
				$('#chose_file_text_sec').css("visibility","visible");
			}
		}).change();
	}
	$('#chose_file_text_sec').on('click', '#delete_sec', function(){
		$('#chose_file_text_sec').css("visibility","hidden");
		return false;
	});


	//разблокировать select в профиле и стримах
	$( ".activate" ).on( "click", function() {
	    if($(this).is(":checked")) {
	    	$('.unactive').css("display","none");
	    	$('.time-wrap').addClass('disabled');
	    }
	    else {
	    	$('.unactive').css("display","block");
	    	$('.time-wrap').removeClass('disabled');
		}
	})
	$('.filters input[type=reset]').click(function(){
		if ($('.filter-item input').is(":checked")) {
			$('.unactive').css("display","block");
			$('.time-wrap').removeClass('disabled');
		}
		else {
	    	$('.unactive').css("display","block");
	    	$('.time-wrap').removeClass('disabled');
		}
	});


	//страница настройка трансляции-(кнопка сохранить-редактировать)
	$( ".right-column .blue" ).on( "click", function() {
	    $( ".add-translation" ).hide();
	    $( ".edit-translation" ).show();
	})
	$( ".right-column .edit" ).on( "click", function() {
	    $( ".add-translation" ).show();
	    $( ".edit-translation" ).hide();
	})



	//страница translation кнопка удаления ССЫЛОК НА ВНЕШНИЙ СТРИМ
	$( ".description-wrap .close" ).on( "click", function() {
	    $(this).parent(".description-wrap").hide();
	})


	//лайк-дизлайк
	addLike('.like');
	addLike('.dislike');

	if ($("#datepicker").length) {
		$("#datepicker").datepicker({
			showOn: "button",
			buttonImage: "img/calendar.png",
			buttonImageOnly: true,
		});
	};


	//language в header
	$(".select-language a").click(function() {
		$(".dropdown-menu ul").slideToggle(250);
	});

	$(".dropdown-menu ul li a").click(function() {
		var text = $(this).html();
		$(".select-language a").html(text);
		$(".select-language a span").hide();//!!!
		$(".dropdown-menu ul").hide();
		$(this).parents('ul').find('li').removeClass('current');
		$(this).parent('li').addClass('current');
	});

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown-menu"))
		$(".dropdown-menu ul").hide();
	});


	//выбор языка страница регистрации
	$(".select-language a").click(function() {
		$(".dropdown-menu-lang ul").slideToggle(250);
		$(this).toggleClass('opened');
	});

	$(".dropdown-menu-lang ul li a").click(function() {
		var text = $(this).html();
		$(".select-language a").html(text);
		$(".select-language a span").hide();//!!!
		$(".dropdown-menu-lang ul").hide();
		$(this).parents('ul').find('li').removeClass('current');
		$(this).parent('li').addClass('current');

		$(".select-language a").removeClass('opened');
	});

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown-menu-lang")){
			$(".dropdown-menu-lang ul").hide();
			$(".select-language a").removeClass('opened');
		}
		
	});


	//выбор пола страница регистрации
	$(".select-gender a").click(function() {
		$(".dropdown-menu-gender ul").slideToggle(250);
		$(this).toggleClass('opened');
	});

	$(".dropdown-menu-gender ul li a").click(function() {
		var text = $(this).html();
		$(".select-gender a").html(text);
		$(".select-gender a span").hide();//!!!
		$(".dropdown-menu-gender ul").hide();
		$(this).parents('ul').find('li').removeClass('current');
		$(this).parent('li').addClass('current');

		$(".select-gender a").removeClass('opened');
	});

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown-menu-gender")){
			$(".dropdown-menu-gender ul").hide();
			$(".select-gender a").removeClass('opened');
		}
		
	});




	if($('#progress').length){
		$('#progress').goalProgress({
			goalAmount: 100,
			currentAmount: 56,
			speed: 1000,
			textBefore: '',
			textAfter: '',
		});
	};

	if ($('.feedback-form').length) {
		$('.feedback-form').validate({
			rules: {
				fname: {
					required: true
				},
				femail: {
					required: true,
					email: true
				}
			},
			messages: {
				fname: {
					required: "Поле «Имя» не может быть пустым"
				},
				femail: "Обязательное поле"
			}
		});
	};



	//ТАБЫ блок новостей
	$(".tab_content_news").hide();
	$("ul.tabs_news li:first").addClass("active").show();
	$(".tab_content_news:first").show();
	$("ul.tabs_news li").click(function() {
		$("ul.tabs_news li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content_news").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});



	$('.vote-btn').on('click', function(e) {
		$('.vote-answer').hide();
		$('.vote-result').show();
	});




	if ($('.fancybox').length) {
		$(".fancybox").fancybox({
			padding: 20,
		});
	};
});


//убрать скролл в stream-list
$(window).load(function(){
    $(".content").mCustomScrollbar({
    	axis:"y"
    });

    if ($('#preloader').length) {
    	$('#preloader').fadeOut(300, function(){
    		$('.preloader-container__box').animate({'opacity':'1'},1000);
    	});
    };

    if ($('#preloader-banners').length) {
    	$('#preloader-banners').fadeOut(300, function(){
    		$('.banners-slider').animate({'opacity':'1'},1000);
    	});
    };

    if ($('.favorites-slider-box').length) {
    	$('#preloader-banners').fadeOut(300, function(){
    		$('.favorites-slider-box').animate({'opacity':'1'},1000);
    	});
    };
});




//ресайз textarea  страница голосования
$.each(jQuery('.autoresize'), function() {
    var offset = this.offsetHeight - this.clientHeight;
 
    var resizeTextarea = function(el) {
        $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    $('body').on('keyup input', ".autoresize" , function() { resizeTextarea(this); });
});



//ДОБАВИТЬ ГОЛОСОВАНИЕ
$('.no-vote a').on('click',function (e) {
	$(this).parent('.no-vote').hide();
	$('.add-vote').show();
});


//СОХРАНИТЬ ГОЛОСОВАНИЕ
$('#save-vote').on('click',function (e) {
	$('.add-vote').hide();
	$('.exist-vote').show();
});


//ОТМЕНИТЬ ГОЛОСОВАНИЕ
$('.add-vote .reset').on('click',function (e) {
	$('.add-vote').hide();
	$('.no-vote').show();
	return false;
});

//РЕДАКТИРОВАТЬ ГОЛОСОВАНИЕ
$('.exist-vote .reset').on('click',function (e) {
	$('.exist-vote').hide();
	$('.add-vote').show();
});


//ДОБАВЛЕНИЕ ПОЛЕЙ СТРАНИЦА ГОЛОСОВАНИЯ
var lastRow = $('.wrapper__inputs .input-wrap:last');
lastRow.one('keyup', function () {
	var num = lastRow.attr('data-number');
	var FieldCount = parseInt(num) + 1;
	$('.wrapper__inputs').append('<div class="input-wrap" data-number="'+FieldCount+'"><label for="answer'+ FieldCount +'">Ответ '+ FieldCount +':</label><textarea name="answer'+ FieldCount +'" id="answer'+ FieldCount +'" class="autoresize" rows="1"></textarea></div>');
});


//FUNCTIONS
function addLike(class_el){
	$(class_el).one('click', function(){
		$(this).addClass('active');
		var countLike = parseFloat($(this).find('span').text());
		countLike++;
		$(this).find('span').text(countLike);
	});
}



//remove
// $('body').append(
// 	'<div class="full-list" style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;" onclick="$(this).parent().hide()">Закрыть X</a> \
// 	<ol style="padding: 40px 20px 30px 20px;"> \
// 		<li><a href="index.html">Index</a></li> \
// 		<li><a href="favorites.html">Favorites</a></li> \
// 		<li><a href="registration.html">Registration</a></li> \
// 		<li><a href="stream.html">Stream</a></li> \
// 		<li><a href="streams.html">Streams</a></li> \
// 		<li><a href="profile.html">Profile</a></li> \
// 		<li><a href="comments.html">Комментарии</a></li> \
// 		<li><a href="channel.html">Настройка канала</a></li> \
// 		<li><a href="translation.html">Настройка трансляции</a></li> \
// 		<li><a href="statistics.html">Статистика канала</a></li> \
// 		<li><a href="thank-you.html">Спасибо за регистрацию</a></li> \
// 		<li><a href="game-preferences.html">Игровые предпочтения</a></li> \
// 		<li><a href="login.html">Логин</a></li> \
// 		<li><a href="password.html">Востановление пароля</a></li> \
// 		<li><a href="contacts.html">Контакты</a></li> \
// 		<li><a href="userpage.html">Страница пользователя</a></li> \
// 		<li><a href="vote.html">Голосование</a></li> \
// 		<li><a href="faq.html">FAQ</a></li> \
// 	</ol> \
// </div>');