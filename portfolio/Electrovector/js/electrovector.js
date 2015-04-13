$(function(){

	//слайдер на стр.product
	$('.product-image .bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		mode: 'fade',
		controls: false,
	});


	//слайдер на главной
	$('.slider-top .bxslider').bxSlider({
		mode: 'fade',
		nextSelector: '#slider-next',
  		prevSelector: '#slider-prev',
  		nextText: '',
  		prevText: '',
  		//pagerCustom: ".pager-list",
  		adaptiveHeight: true,
  		onSliderLoad: function(){
  		 	$('#slider-prev').insertBefore('.bx-pager');
  		 	$('#slider-next').insertAfter('.bx-pager');
  		 	//$('.slider-top .bx-wrapper .bx-controls').insertAfter('.slide-info');
  		}
  		// onSlideNext: function() {
  		// 	var box = $('.slider-top .bx-wrapper .bx-controls').html();
  		// 	alert(box);
  		// 	$('.slider-top .bx-wrapper li').find('.bx-controls').remove();
  		// }
	});


	//форма поиска
	$('.search').click(function(){
		$(this).toggleClass('show');
		$('.search-form').toggleClass('active');

		$('.search-form.active').animate({
			width: "186px",
		}, 500);
		$('.search-form:not(.active)').animate({
			width: "0",
		}, 500);
		return false
	});


	$('.slider-completed').bxSlider({
	    slideWidth: 300,
	    minSlides: 3,
	    maxSlides: 3,
	    pager: false,
	    slideMargin: 20,
  	});



  	$(window).scroll(function() {
		if ($(this).scrollTop() > 160){
		    $('nav').addClass("fixed");
		    $('header').css('height','160px');
		} else {
			$('nav').removeClass("fixed");
		}
	});


  	//карта на странице contacts
  	function initializeContactmap() {
		var gmarkers = [];
		var map = null;
		var infowindow = null;

		var mapOptions = {
		    center: new google.maps.LatLng(53.8717133,27.7011115),
		    zoom: 15,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    mapTypeControl: false,
		    zoomControl: true,

			navigationControl: false,
			scrollwheel: false,
		};
		map = new google.maps.Map(document.getElementById("map"), mapOptions);
		google.maps.event.addListener(map, 'click', function() {
		    infowindow.close();
		});
		var locations = [
		    ['1', 53.8719133,27.7013115],
		   ];
		function setMarkers(locations) {
		    for (var i = 0; i < locations.length; i++) {
		      var location = locations[i];
		      var myLatLng = new google.maps.LatLng(location[1], location[2]);
		      var image = "images/content/label.png";
		      var marker = new google.maps.Marker({
		          position: myLatLng,
		          animation: google.maps.Animation.DROP,
		          map: map,
		          title: location[0],
		          icon: image,
		      });
				// Standard markers - if not using infobox
		      google.maps.event.addListener(marker, "click", function () {
		        map.setCenter(marker.getPosition());
		        infowindow.setContent(this.html);
		        infowindow.open(map, this);
		      });
		      gmarkers.push(marker);
		    }
		}
		// Add the markers
		setMarkers(locations);
	}



	//карта на странице where
	function initialize() {
		var gmarkers = [];
		var map = null;
		var infowindow = null;

		var mapOptions = {
		    center: new google.maps.LatLng(53.8717133,27.7011115),
		    zoom: 15,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    mapTypeControl: false,
		    zoomControl: true,
		    disableDefaultUI: true,
		    navigationControl: false,
			scrollwheel: false,
		};
		map = new google.maps.Map(document.getElementById("map_where"), mapOptions);
		google.maps.event.addListener(map, 'click', function() {
		    infowindow.close();
		});
		var locations = [
		    ['1', 53.8719133,27.7013115],
		    ['2', 53.8711133,27.7019115],
		    ['3', 53.8737133,27.7031115],
		    ['4', 53.8747133,27.7041115],
		    ['5', 53.8727133,27.7041115]
		   ];
		function setMarkers(locations) {
		    for (var i = 0; i < locations.length; i++) {
		      var location = locations[i];
		      var myLatLng = new google.maps.LatLng(location[1], location[2]);
		      var image = "images/content/label.png";
		      var marker = new google.maps.Marker({
		          position: myLatLng,
		          animation: google.maps.Animation.DROP,
		          map: map,
		          title: location[0],
		          icon: image,
		      });
				// Standard markers - if not using infobox
		      google.maps.event.addListener(marker, "click", function () {
		        map.setCenter(marker.getPosition());
		        infowindow.setContent(this.html);
		        infowindow.open(map, this);
		      });
		      gmarkers.push(marker);
		    }
		}
		// Add the markers
		setMarkers(locations);
	}


if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', initializeContactmap);
};

if ($('#map_where').length) {
  google.maps.event.addDomListener(window, 'load', initialize);
 };






	$('.contact form').validate({
        errorElement: '.error-qweq',
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },

        rules: {
            name: "required",
            place: "required",
            email: "required",
            phone: "required",
            message: "required"
        },

        messages: {
            name: {
                required: " - обязательное поле"
            },

            place: {
                required: " - обязательное поле"
            },

            email: {
                required: " - обязательное поле",
                email: " - введите правильный email"
            },

            phone: {
                required: " - обязательное поле"
            },

            message: {
                required: " - обязательное поле"
            }
        }
    });

});