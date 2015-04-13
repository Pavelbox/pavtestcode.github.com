$(document).ready( function() {
	
    $('.step3-wrap').queue(function () {
    	$(this).delay(3000).animate({ bottom: "230px" }, 1000);
    	$(this).dequeue();    	
    });

    // play sound snowball
	function __(attr) {
		return document.querySelector(attr);
	}

    function sound() {
		__('audio').play();		
	}

	if ($('audio').length) {
		setTimeout(sound, 5200);
	};	

	$('.step-last').delay(5200).fadeIn(300);

	$('.step-final').delay(5500).fadeIn(0);

});
