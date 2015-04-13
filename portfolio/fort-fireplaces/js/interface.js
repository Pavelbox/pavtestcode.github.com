$(document).ready(function() {

	// add first / last classes
	$('ul,ol').each(function() {
		$('li:last', this).addClass('last');
		$('li:first', this).addClass('first');
	});

	// a=# return false
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


	//слайдер на главной
	$("#owl-carousel").owlCarousel({
      items : 5,

	itemsCustom : [
	    [0, 1],
	    [479, 1],
	    [480, 2],
	    [600, 2],
	    [700, 3],
	    [1000, 4],
	    [1200, 5],
	    [1400, 5],
	    [1600, 5]
	  ],
      navigation: true,
      pagination: false,
      navigationText : false,
  	});

	//выезжающее меню
	var pageSlidebars = new $.slidebars({
		disableOver: 780,
	});
	$('.menu-right').on('click', function() {
		pageSlidebars.slidebars.toggle('right');
	});


	//показать информацию о бренде
	$(".show-info").click(function(){
		$(this).toggleClass('active');
		if ($('.show-info').hasClass("active")){
	    	$(this).css("border","0")
	    	.text("Спрятать")
	    }
	    else{
	    	$(this).css("border-bottom","1px dashed #d2232a").text("Информация о бренде")
	    }

		$('.description-info').slideToggle("slow");
	});

	$(window).resize(function () {
	    if ($(window).width() > 974){
	    	$('.description-info').show();
	    }
	   	else $('.description-info').hide();
	});

	//MAP
	if ($('#map').length>0){
		var latlng1 = new google.maps.LatLng(53.9239868,27.6103137);
		var latlng2 = new google.maps.LatLng(53.9249868,27.6304237);
		var latlng3 = new google.maps.LatLng(53.9219868,27.6211537);
		var image1 = "images/logos/label1.png";
		var image2 = "images/logos/label2.png";
		var image3 = "images/logos/label3.png";
		var settings = {
		    zoom: 15,
		    center: new google.maps.LatLng(53.9239868,27.6103137),
			mapTypeControl: false,
			navigationControl: false,
			scrollwheel: false,
			disableDefaultUI: true,
			zoomControl: false,
		};
		var map = new google.maps.Map(document.getElementById("map"), settings);
		var marker1 = new google.maps.Marker({
		    position: latlng1,
		    map: map,
		    icon: image1,
		});
		var marker2 = new google.maps.Marker({
		    position: latlng2,
		    map: map,
		    icon: image2,
		});
		var marker3 = new google.maps.Marker({
		    position: latlng3,
		    map: map,
		    icon: image3,
		});

		centerMap();
	}


	//VALIDATE
	if ($(".feedback-form form").length) {
		$(".feedback-form form").validate({
			rules: {
				name: {
					required: true,
				},
				email: {
					required: true,
					email: true
				},
				help: {
					required: true
				}
			},
			messages: {
				name: "",
				email: "",
				help: "",
			}
		});
	};


	//
	var mobileBreake = 974;
	if($(".items-wrap.last").length) {
		if ($(window).width() > mobileBreake ) {
			setEqualHeight($('.column'));
		}
		$(window).resize( function(){
		 	if ($(window).width() > mobileBreake ) {
			  		setEqualHeight($('.column'));
		  	}
		  	else {
		  		$(".column").attr('style','');
		  	}
		});
	}
	if($(".products-description").length) {
		if ($(window).width() > mobileBreake ) {
			setEqualHeight($('.column'));
		}
		$(window).resize( function(){
		 	if ($(window).width() > mobileBreake ) {
			  		setEqualHeight($('.column'));
		  	}
		  	else {
		  		$(".column").attr('style','');
		  	}
		});
	}

	var columns = $('.items-wrap > .one-height');
	$(window).resize(function () {
	    setEqualHeight(columns);
	});
	$(window).load(function(){
		    setEqualHeight(columns);
	});

	//FUNCTIONS
	function setEqualHeight(columns) {
	    var tallestcolumn = 0;
	    columns.css('height', '');
	    columns.each(function() {
	        currentHeight = $(this).height();
	        if(currentHeight > tallestcolumn) {
	            tallestcolumn = currentHeight;
	        }
	    });
	    columns.height(tallestcolumn);
	}

	function centerMap() {
		google.maps.event.addDomListener(window, 'resize', function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}





	// $('body').append(
	// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
	// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;" onclick="$(this).parent().hide()">Закрыть X</a> \
	// 	<ol> \
	// 		<li><a href="index.html">Главная</a></li> \
	// 		<li><a href="catalog.html">Каталог</a></li> \
	// 		<li><a href="category.html">Категории</a></li> \
	// 		<li><a href="products.html">Продукты</a></li> \
	// 		<li><a href="product.html">Продукт</a></li> \
	// 		<li><a href="contacts.html">Контакты</a></li> \
	// 		<li><a href="404.html">404</a></li> \
	// 		<li><a href="search-result.html">Результаты поиска</a></li> \
	// 	</ol> \
	// </div>');
});

