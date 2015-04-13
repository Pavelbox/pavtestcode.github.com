$(document).ready(function(){

	if ($(".contant-form").length) {
		$(".contant-form").validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				message: {
					required: true
				}
			},
			messages: {
				name: {
					required: "ошибка"
				},
				email: "ошибка",
				message: {
					required: "ошибка"
				}
			}
		});
	};

	if ($('.registration-form').length) {
		$(".registration-form").validate({
			errorElement: 'span',
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				password: {
					required: true
				},
				address: {
					required: true
				}
			},
			messages: {
				name: {
					required: "ошибка"
				},
				email: "ошибка",
				password: {
					required: "ошибка"
				},
				address: {
					required: "Необходимо указать код оператора."
				}
			}
		});

		// Показать/ спрятать пароль
		$("#f-password").val("");

		var password = $("#f-password");
		var button = $("#show-password");

		button.mousedown(function() {
			password.attr("type", "text");
		});

		button.mouseup(function(){
			password.attr("type", "password");
		});

		button.mouseleave(function() {
			password.attr("type", "password");
		});

		if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
			button.on("touchstart", function() {
				password.attr("type", "text");
			});

			button.on("touchend", function() {
				password.attr("type", "password");
			});
		}

	};

	// Добовляем новые поля в форму
	$('.add-element').on('click', function () {
		var formElement = $(this);
		formElement.parents('.line').after(
			'<div class="line add">\
				<div class="element">\
					<input type="text">\
				</div>\
			</div>'
		);
		return false;
	});


	if ($('.comment-form').length) {
		$(".comment-form").validate({
			rules: {
				name: {
					required: true
				},
				comment: {
					required: true
				}
			},
			messages: {
				name: {
					required: "ошибка"
				},
				comment: {
					required: "ошибка"
				}
			}
		});
	};

	if ($('.basket-form').length) {

		$(".basket-form").validate({
			rules: {
				name: {
					required: true
				},
				address: {
					required: true
				},
				message: {
					required: true
				}
			},
			messages: {
				name: {
					required: "ошибка"
				},
				address: {
					required: "ошибка"
				},
				message: {
					required: "ошибка"
				}
			}
		});
	};

	// подключаем маску телефона 
	// js/vendors/masked/jquery.maskedinput.min.js
	if ($(".phone-masked").length) {
		$(".phone-masked").mask("+ (999) 99 - 999 - 9999");
	};

});
