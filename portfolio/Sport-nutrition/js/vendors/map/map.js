$(document).ready(function(){

	function initialize() {

		var mapOptions = {
			center: new google.maps.LatLng(53.903837,27.55052),
			zoom: 16,
			scrollwheel: false,
			disableDefaultUI: true
		};

		map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(53.903837,27.55052),
			map: map,
			icon: 'images/marker.png'
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

	centerMap();

});

function centerMap() {
	google.maps.event.addDomListener(window, 'resize', function() {
		var center = map.getCenter()
		google.maps.event.trigger(map, "resize")
		map.setCenter(center)
	});
}
