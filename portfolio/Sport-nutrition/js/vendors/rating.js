var rating = null;
var $rating = $('.star-rating');
var $stars = $('.star-rating-star');
var $input = $('.star-rating input');

$input.on('change', function () {
	rating = $input.filter(':checked').attr('value');
});

// IE8-only

$input.on('change', function () {

	var $star;
	var value = $(this).val();

	$stars.each(function () {
		$star = $(this);
		$star.toggleClass('checked', $star.prev().val() <= value);
	});

});
