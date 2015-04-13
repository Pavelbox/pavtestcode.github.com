$(document).ready(function() {
    // add first / last classes
    $('ul,ol').each(function() {
        $('li:last', this).addClass('last');
        $('li:first', this).addClass('first');
    });

    $('a[href=#]').click(function(e) {
        e.preventDefault();
    });

    // placeholder
    $('input[data-placeholder], textarea[data-placeholder]').each(function() {
        var placeholder = $(this).attr('data-placeholder');
        if ((($(this).val() !== undefined) && ($(this).val().length > 0)) && ($(this).val() != placeholder)) {
            $(this).removeClass('placeholder');
        } else {
            $(this).val(placeholder);
            $(this).addClass('placeholder');
        }
        $(this).focusin(function() {
            $(this).removeClass('placeholder');
            if (($(this).val() === undefined) || ($(this).val() == placeholder)) {
                $(this).val('');
            }
        });
        $(this).focusout(function() {
            if (($(this).val() === undefined) || ($(this).val() == '') || ($(this).val() == placeholder)) {
                $(this).val(placeholder);
                $(this).addClass('placeholder');
            }
        });
    });


    //Замена search value
    $('header .search-block .example a').click(function(){
        var example = $(this).text();
        $('header .search-block form input[type="text"]').val(example);
    });
    // $('.search-block form input[type="text"]').focusin(function() {
    //     $(this).val('');
    // });
    $('.page404 .search-block .example a').click(function(){
        var example = $(this).text();
        $('.page404 .search-block form input[type="text"]').val(example);
    });

    $('.top-menu-blog .search-block .example a').click(function(){
        var example = $(this).text();
        $('.top-menu-blog .search-block form input[type="text"]').val(example);
    });


    //подмена картинки submenu
    $('.submenu ul li a').mouseover(function() {
      var attrId = $(this).attr('data-item'); // item1
      var imgSrc = $(this).closest('.submenu').find('.img img').attr('src'); // img/content/menu-item.jpg
      var newSrc = 'img/content/menu-'+ attrId +'.jpg';
      $(this).closest('.submenu').find('.img img').attr('src',newSrc);
    });


    $('.main-menu-min .search-block a').click(function(){
        var example = $(this).text();
        $('.main-menu-min .search-block form input[type="text"]').val(example);
    });




    if ($('.main-slider .bxslider').length) {
        $('.main-slider .bxslider').bxSlider({
            mode: 'fade',
            controls: true,
            pager: false,
            auto: true,
            speed: 700,
            pause: 3000,
            autoHover: true,
        });
    };

    //cлайдер партнеры на главной
    if ($('.partners-slider').length) {
        $('.partners-slider').owlCarousel({
            items : 6,
            itemsCustom : [
            [300, 1],
            [400, 1],
            [500, 2],
            [760, 3],
            [1000, 4],
            [1200, 5]
          ],
          navigation: true,
          pagination: false,
          navigationText : false,
        })
    };

    //cлайдер наши работы стр.montage
    if ($('.jobs-slider').length) {
        $('.jobs-slider').owlCarousel({
            items : 6,
            itemsCustom : [
            [300, 1],
            [400, 2],
            [500, 3],
            [760, 3],
            [1000, 4],
            [1100, 5],
            [1200, 6]
          ],
          navigation: true,
          pagination: false,
          navigationText : false,
        })
    };

    //cлайдер лучшие предложения(стр. products)
    if ($('.deals-slider').length) {
        $('.deals-slider').slick({
            infinite: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            focusOnSelect:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 1,
                }
            },
            ]
        })
    };

    //подмена z-index deals-slider
    $('.deals-slider .good-item').hover(function(){
        $(this).parents('.slick-list').css("z-index","20");
        $(this).parents('.deals-slider').find('button').css("z-index","1");
    });
    $('.deals-slider .good-item').mouseleave(function(){
        $(this).parents('.slick-list').css("z-index","1");
        $(this).parents('.deals-slider').find('button').css("z-index","20");
    });

    //cлайдер лучшие похожие модели(стр. products-in)
    if ($('.similar-slider').length) {
        $('.similar-slider').slick({
            infinite: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            focusOnSelect:true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
            ]
        })
    };
    //подмена z-index similar-slider
    $('.similar-slider .good-item').hover(function(){
        $(this).parents('.slick-list').css("z-index","20");
        $(this).parents('.similar-slider').find('button').css("z-index","1");
    });
    $('.similar-slider .good-item').mouseleave(function(){
        $(this).parents('.slick-list').css("z-index","1");
        $(this).parents('.similar-slider').find('button').css("z-index","20");
    });

    //cлайдер лучшие сопутствующи товары(стр. products-in)
    if ($('.accompanying-slider').length) {
        $('.accompanying-slider').slick({
            infinite: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            focusOnSelect:true,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            },
            ]
        })
    };
    //подмена z-index accompanying-slider
    $('.accompanying-slider .good-item').hover(function(){
        $(this).parents('.slick-list').css("z-index","20");
        $(this).parents('.accompanying-slider').find('button').css("z-index","1");
    });
    $('.accompanying-slider .good-item').mouseleave(function(){
        $(this).parents('.slick-list').css("z-index","1");
        $(this).parents('.accompanying-slider').find('button').css("z-index","20");
    });


    //Доп.меню<768
    $('.menu-btn').on("click",function(){
        $('.main-menu-min').fadeToggle(250);
    });
    $('.close-menu').on("click",function(){
        $('.main-menu-min').fadeOut(250);
    });

    $('.phones-btn').on("click",function(){
        $('.header-info-min').fadeToggle(250);

    });
    $('.close-info').on("click",function(){
        $('.header-info-min').fadeOut(250);
    });

    $('.catalog-btn').on("click",function(){
        $('.catalog-info-min').fadeToggle(250);

    });
    $('.close-cat').on("click",function(){
        $('.catalog-info-min').fadeOut(250);
    });
    $(window).resize(function(){
        if ( $(window).width() > 750) {
            $('.main-menu-min').fadeOut(250);
            $('.catalog-info-min').fadeOut(250);
            $('.header-info-min').fadeOut(250);
        }
    });

    $('.catalog-info-min ul li a').on("click",function(){
        if ($(this).next('ul').length > 0){
        	$(this).parent('li').toggleClass('active');
            //$(this).toggleClass('active');
        }
        $(this).next('ul').slideToggle(500);
    });

   //MAIN-MENU
    if ($('.main-menu').length) {
        $('.main-menu > ul > li').each( function(){
            if ($(this).find('.submenu').length > 0) {
                $(this).addClass('dropdown');
            };
        })
    };
    $('.dropdown').hover(function(){
        $(this).find('.submenu').fadeToggle("fast");
    });

	//Ползунок
	if ($('#slider-handles').length) {
		$('#slider-handles').noUiSlider({
			start: [ 2270000, 22500000 ],
			range: {
				'min': [  500000 ],
	 			'max': [ 45000000 ]
			},
			connect: true,
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				postfix: '',
			})
		});
		$('#slider-handles').Link('lower').to($('#skip-value-lower'));
		$('#slider-handles').Link('upper').to($('#skip-value-upper'));
	};

	$('.show-info a').on("click",function(){
        $('.hide').slideToggle(250);
        $(this).toggleClass('toggle');
        $(this).find('span').text('Подробнее');
        $('.toggle').find('span').text('Скрыть');
    });

    $('.hide .more').on("click",function(){
        $(this).next($('.hide-block')).slideToggle(250).css("margin-top","-10px");
        $(this).toggleClass('toggle');
        $(this).find('span').text('Подробнее');
        $('.toggle').find('span').text('Скрыть');
    });

	//hover-эффект good-item
	$('.inner-block-hover .preview a').hover(function(){
		$(this).parents('.preview').find('a').removeClass('active');
		$(this).addClass('active');
		var bigPath=$(this).find('img').attr('src');
		var bigPathIn = $(this).parents('.inner-block-hover').siblings(".inner-block").find('.img img');

		bigPathIn.attr({src:bigPath});
		$(this).parents('.preview').next('.img').find('img').attr({src:bigPath});
		return false;
	});

	// select
	$('.select-custom').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});

		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});

	//VALIDATE
	if ($(".registration-form").length) {
		$(".registration-form").validate({
			rules: {
				name: {
					required: true,
				},
				surname: {
					required: true,
				},
				email_o: {
					required: true,
					email: true
				},
				password_o: {
					required: true
				},
				repeat: {
					required: true
				}
			},
			messages: {
				name: "Обязательное поле",
				surname: "Обязательное поле",
				email_o: "E-mail должен содержать символ «@»",
				password_o: "Обязательное поле",
				repeat: "Обязательное поле",
			}
		});
	};
    if ($(".message-form form").length) {
        $(".message-form form").validate({
            rules: {
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: "Обязательное поле",
                phone: "Обязательное поле",
                email: "E-mail должен содержать символ «@»",
            }
        });
    };
    if ($(".personal-cabinet").length) {
        $(".personal-cabinet").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                },
            },
            messages: {
                email: "E-mail должен содержать символ «@»",
                password: "Обязательное поле",
            }
        });
    };

    if ($(".new_user").length) {
        $(".new_user").validate({
            rules: {
                name: {
                    required: true,
                },
                surname: {
                    required: true,
                },
                email_o: {
                    required: true,
                    email: true
                },
                password_o: {
                    required: true,
                },
                repeat: {
                    required: true,
                },
            },
            messages: {
                name: "Обязательное поле",
                surname: "Обязательное поле",
                email_o: "E-mail должен содержать символ «@»",
                password_o: "Обязательное поле",
                repeat: "Обязательное поле",
            }
        });
    };


	//shopping-cart input
	if ($(".sum").length) {
		$(".sum input[type='text']").on("focusin", function(){
		    $(this).val('');
		});
		$(".sum input[type='text']").on("focusout", function(){
		    $(this).val('1');
		})
	};
	//shopping-cart show-all
	$('.cart-block .show-all').on("click",function(){
        if ($(this).next(".accompanying").length) {
            $(this).toggleClass('active');
            $('.show-all span').text('Посмотреть сопутствующие товары');
            $('.show-all.active span').text('Скрыть сопутствующие товары');
            $(this).next('.accompanying').slideToggle(200);
        }
    });

    //shopping-cart-удалить товар
    if ($('.cart-block .close a').length) {
        $(".cart-block .close a").click(function(){
            $(this).parents('.item').hide();
        });
    };


    //страница questions выбор radio button
    $( ".select-block-wrap .select-block").on( "click", function() {
        $(".select-block-wrap .select-block").find('input[type="radio"]').prop('checked', false);
        $(this).find('input[type="radio"]').prop('checked', true);
        $(".select-block").css("border","1px solid #c7c7c7");
        $(this).css("border","1px solid #ff9900");
    });
});

$( window ).load(function() {
    $('#loader-main').fadeOut(500, function(){
        $('.main-slider').animate({'opacity':'1'},900);
    });
    $('#loader-partners').fadeOut(500, function(){
        $('.partners-slider-load').animate({'opacity':'1'},900);
    });

    $('#loader-product').fadeOut(500, function(){
        $('.slider-product-block').animate({'opacity':'1'},900);
    });

    $('#loader-jobs').fadeOut(500, function(){
        $('.jobs-slider-load').animate({'opacity':'1'},900);
    });

    //preloader настройки
    var opts = {
        lines: 12,
        length: 7,
        width: 2,
        radius: 5,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: '#000',
        speed: 1,
        trail: 60,
        shadow: false,
        hwaccel: false,
        className: 'spinner',
        zIndex: 100,
        top: '50%',
        left: '50%',
    };


    if ($('#loader-main').length) {
        var target1 = document.getElementById('loader-main');
        var spinner1 = new Spinner(opts).spin(target1);
    };

    if ($('#loader-partners').length) {
        var target2 = document.getElementById('loader-partners');
        var spinner2 = new Spinner(opts).spin(target2);
    };

    if ($('#loader-product').length) {
        var target3 = document.getElementById('loader-product');
        var spinner3 = new Spinner(opts).spin(target3);
    };

    if ($('#loader-jobs').length) {
        var target4 = document.getElementById('loader-jobs');
        var spinner4 = new Spinner(opts).spin(target4);
    };


    //страница compare горизантальные скролл
    if ($('.scroll-content').length) {
    	$(".scroll-content").mCustomScrollbar({
	    	axis:"x",
	    	theme:"dark",
            scrollInertia: 0,//скорость
	    	setHeight:"100%",
			setWidth:"100%",
			mouseWheel:{ enable: false },
			advanced:{
                autoExpandHorizontalScroll:true,
                updateOnContentResize: false,
                //autoHideScrollbar: true,
            }
    	});
	};

    function updateScrollbar(){
        if ($('.scroll-content').length){
            $(".scroll-content").mCustomScrollbar("update");
        };
    }


    $(window).resize(function(e){
        updateScrollbar();
        e.preventDefault();
    });


    //compare-удалить товар
    if ($('.compare .close').length) {
        $(".compare .close").click(function(e){
            $(this).parent('.item').hide();
            updateScrollbar();
            e.preventDefault();
            return false;
        });
    };


    //compare-показать инфо
    $(".compare .more-info").click(function(){
        $(this).prev(".description").toggleClass('visible');

        $(this).toggleClass('opened');
        if($(this).hasClass('opened')) {
            $(this).html('Скрыть текст');
        }
        else {
            $(this).html('Читать далее');
        }
        return false;
    });






    //order-history весь товар
    $(".condition a").click(function(){
        if ($(this).parents('.item').find('.delivery-list').length) {
            $(this).parents('.item').find('.delivery-list').slideToggle(300);
             $(this).toggleClass('active');
        };
    });


    if ($('.slider-for').length) {
         $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            infinite: true,
            arrows: true,
            variableWidth: false,
        })
        var currentSlide = $('.slider-nav').slick('slickCurrentSlide');

        $('.slider-nav').find('.slick-slide[data-slick-index='+currentSlide+']').addClass('current');

        $('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.slider-nav').find('.slick-slide').removeClass('current');
            $('.slider-nav').find('.slick-slide[data-slick-index='+nextSlide+']').addClass('current');
        });

    }

    if ($('#video-block').length) {
        $("#video-block").lightGallery({
            videoMaxWidth : '1280px',
            speed: 500,
            thumbnail: false,
            controls: false
        });
    }
    if ($('.slider-for .gallery-wr').length) {
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers: {
                overlay: {
                  locked: false
                }
            }
        });
    }



    if ($('.our-jobs').length) {
        $(".fancybox").fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers: {
                overlay: {
                  locked: false
                }
            }
        });
    }





    $('.products-in-description .description a').click(function(){
        $(this).parent('.description').toggleClass('active');
    })

    $('.text-page .description a').click(function(){
        $(this).parent('.description').toggleClass('active');
    })


    //страница блог-переключение вида
    $('.select-view .view2').on("click",function(){
        $('.blog .select-view a').removeClass('active');
        $(this).toggleClass('active');
        $('.news-all .item').addClass('grid');
    });

    $('.select-view .view1').on("click",function(){
        $('.blog .select-view a').removeClass('active');
        $(this).toggleClass('active');
        $('.news-all .item').removeClass('grid');
    });
});

$(document).ready(function() {
	if ( $(window).width() > 479 ) {
	//remove
		// $('body').append(
		// 	'<div class="page-list" style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #000; width: 250px;"> \
		// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px;" onclick="$(this).parent().hide()">Закрыть X</a> \
		// 	<ol> \
		// 		<li><a href="index.html">Главная</a></li> \
		// 		<li><a href="products.html">Products</a></li> \
  //               <li><a href="products-in.html">Products-in</a></li> \
  //               <li><a href="category.html">Category</a></li> \
		// 		<li><a href="checkout.html">Checkout</a></li> \
		// 		<li><a href="contact.html">Contacts</a></li> \
		// 		<li><a href="member-area.html">Member-area</a></li> \
		// 		<li><a href="order-history.html">Order-history</a></li> \
		// 		<li><a href="registration.html">Registration</a></li> \
		// 		<li><a href="shopping-cart.html">Shopping-cart</a></li> \
		// 		<li><a href="compare.html">Compare</a></li> \
  //               <li><a href="text-page.html">Text-page</a></li> \
  //               <li><a href="about.html">About</a></li> \
  //               <li><a href="404.html">404</a></li> \
  //               <li><a href="blog.html">Blog</a></li> \
  //               <li><a href="questions1.html">Questions1</a></li> \
  //               <li><a href="questions2.html">Questions2</a></li> \
  //               <li><a href="montage.html">Montage</a></li> \
  //               <li><a href="delivery.html">Delivery</a></li> \
  //               <li><a href="payment.html">Payment</a></li> \
		// 	</ol> \
		// </div>');
	}
	else
		$('.page-list').hide();


    if (isTouchDevice() === true) {
        jQuery('body').addClass('touch');
    } else {
        jQuery('body').addClass('no-touch');
    }
});

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}









