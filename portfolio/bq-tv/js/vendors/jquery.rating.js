$(document).ready(function(){

	//hover
	$('.rating-select li').on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);

		$(this).parent().children('li').each(function(e){
			if (e < onStar) {
				$(this).addClass('hover');
			} else {
				$(this).removeClass('hover');
			}
		});

	}).on('mouseout', function(){
		$(this).parent().children('li.star').each(function(e){
			$(this).removeClass('hover');
		});
	});
  	
  	//select
	$('.rating-select li').on('click', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var stars = $(this).parent().children('li');

		for (i = 0; i < stars.length; i++) {
			$(stars[i]).removeClass('selected');
		}

		for (i = 0; i < onStar; i++) {
			$(stars[i]).addClass('selected');
		}

		var ratingValue = parseInt($('.rating-select li.selected').last().data('value'), 10);
		
		var msg = "";
		
		if (ratingValue > 1) {
			msg = "Select star: " + ratingValue;
			alert(msg);
		} else {
			msg = "Select star: " + ratingValue;
			alert(msg);
		}
    
	});

});
