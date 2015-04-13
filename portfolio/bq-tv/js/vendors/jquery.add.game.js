$(document).ready(function() {
	// remove item game
	$('.block-dropdown-list_game').on('click','.remove', function(){
		$(this).closest('li').remove();
	});

	// show list game
	$('.add-game-list .show-game').focusin(function() {
		$(this).closest('.inside-dropdown').find('.list-games').slideDown(100);
	});

	// add game to list
	$('.list-games li').on('click', function(){
		var elementList = $(this).html();
		$(this).remove();
		$('.add-game-list .show-game').val(elementList);
		$('.add-game-list .button-default').removeClass('btn-off');
	});



	// add to list
	$('.add-game-list .button-default').on('click', function(){
		if (!$(this).hasClass('btn-off')) {
			var elementVal = $('.add-game-list .show-game').val();
			$('.block-dropdown-list_game').append('<li><i class="icon"><img src="img/content/game-icon-2.png" alt=""></i>'+ elementVal +'<i class="remove"></i></li>');
		};
		return false;
	});

	// close list
	$(document).on('click', function(e){
		if ($('.add-game-list .list-games:visible') && !$(e.target).closest('.add-game-list').length) {
			$(this).find('.list-games').slideUp(100);
		};
		if($('.block-dropdown-custom .dropdown:visible') && !$(e.target).closest('.block-dropdown-custom').length) {
			$(this).find('.dropdown').slideUp(100);
		};
	});

	// dropdown custom
	$('.show-dropdown').focusin(function() {
		$(this).closest('.block-dropdown-custom').find('.dropdown').slideDown(100);
	});
	$('.block-dropdown-custom .dropdown li').on('click', function(){
		var elementList = $(this).html();
		$('.block-dropdown-custom .show-dropdown').val(elementList);
		$(this).closest('.dropdown').slideUp(100);
	});

});