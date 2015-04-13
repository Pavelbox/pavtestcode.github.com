$(document).ready(function() {
	$(".question-item > a").on("click", function(){
		if($(this).hasClass('active')){
			$(this).removeClass("active");

			$(this).parents('.question-item').removeClass('visible')

			$(this).siblings('.question-item__content').slideUp(200);
			$(".question-item > a i").removeClass("icon-minus").addClass("icon-plus");

		}
		else{
			$(".question-item > a i").removeClass("icon-minus").addClass("icon-plus");
			$(this).find("i").removeClass("icon-plus").addClass("icon-minus");
			$(".question-item > a").removeClass("active");
			$(this).addClass("active");


			$('.question-item').removeClass('visible');
			$(this).parents('.question-item').addClass('visible')

			$('.question-item__content').slideUp(200);
			$(this).siblings('.question-item__content').slideDown(200);
		}
	});
});



