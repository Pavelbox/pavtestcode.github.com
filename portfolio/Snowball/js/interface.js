$(document).ready( function() {
	
	// Placeholder
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

	$('#musik-btn').click(function(){
		$(this).toggleClass('off');
	});

	function animateText() {
		if ( $(".block-message .info").length ) {
			$(".block-message .info").letterfx({"fx":"fade", "timing":50,"fx_duration":"1000ms"});
		};
		
	}
	setTimeout(animateText, 5000);

	
});