$(document).ready(function(){

	if ($('.accordion-home').length) {
		$('.accordion-home').uberAccordion({
			headerClass: 'title',
			contentClass: 'content',
			animationSpeed: 100
		});
	};

	if ($('#tab-new').length) {
		$('#tab-new .accordion-default').uberAccordion({
			headerClass: 'accordion-header',
			contentClass: 'accordion-body',
			orientation: 'horizontal',
			openMultiple: true,
			orientationQuery : '',
			startSlide: 0
		});
	};

	if ($('#tab-shipping ').length) {
		$('#tab-shipping .accordion-default').uberAccordion({
			headerClass: 'accordion-header',
			contentClass: 'accordion-body',
			orientation: 'horizontal',
			orientationQuery : '',
			openMultiple: true,
			startSlide: 0
		});
	};

});
