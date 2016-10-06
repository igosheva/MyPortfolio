import $ from 'jquery';

$('#header-menu').click(function () {
	$('.header-menu__item').toggleClass('menu-active');
	$('#content-menu').slideToggle(100);
	$('.js-item-link').click(function () {
		$('#content-menu').slideUp(100);
		$('.header-menu__item').removeClass('menu-active');
	});
});

$('.js-item-link').on('click', function (g) {
	let item = $(this).closest('.js-menu-item'),
			contentItem = $('.js-main-info'),
			itemPosition = item.data('class');

	contentItem.filter('.main-info__' +itemPosition)
		.add(item)
		.addClass('active')
		.siblings()
		.removeClass('active');
});

//  ========================
//  Счетчик символов письма
//  ========================
	let maxCount = 500;

	$("#counter").html('0');

	$("#textarea").keyup(function() {
		let revText = this.value.length;
		if (this.value.length > maxCount)
				{
				this.value = this.value.substr(0, maxCount);
				}
		let cnt = (revText);
		if(cnt <= 0){
			$("#counter").html('0');
		}
		else {
			$("#counter").html(cnt);
		}
	});

let myModule = (function () {
	let init = function () {
		_setUpListners();
	};
	let _setUpListners = function () {
		$('#addproject').on('submit', _addProject); //добавление проекта
	};
	let _addProject = function (ev) {
		console.log('добавление проекта');
		ev.preventDefault(); //отменить стандартное поведение
	};
	return {
		init:init
	}
});
myModule.init();

/*let validation = (function () {

	//Инициализирует модуль
	let init = function () {
		_setUpListners();
	};

	//Прослушивает события
	let _setUpListners = function () {
	};

	//Создает тултипы
	let _cteatQtip = function (element, position) {

		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			position = {
				my: 'right center',
				at: 'left center'
			}
		}
		element.qtip({
			content: {
				text:function() {
					return $(this).attr('qtip-content')
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				lip: {
					height: 10,
					width: 16
				}
			}
		}).trigger('show');
	};

	//Универсальная функция
	let validateForm = function (form) {
		console.log('Привет! Я в модуле валидации, проверяю форму');
		let elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;

		//Пройдемся по всем элементам формы
		$.each(elements, function (index, val) {
			console.log(index);
			console.log(val);
		})
	};

	//Возвращает объект(публичные методы)
	return {
		init:init,
		validateForm: validateForm
	}
});
validation.init();*/

let contactMe = (function () {
	let init = function () {
		_setUpListners();
	};

	//Прослушиает события
	let _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

	//Проверяет форму на валидность
	let _submitForm = function(ev){
		console.log('Отправка формы');
		ev.preventDefault();

		let form = $(this),
			url = 'contactme.php',
			defObj = _ajaxForm(form, url);

		//Что-то будем делать с ответом сервера defObj
	};
	let _ajaxForm = function(form, url) {
		console.log('ajax запрос, но с проверкой!');
		if(validation.validateForm(form)) return false;
		//если false - то код ниже не произойдет никогда
	};

	//Возвращает объект(публичные методы)
	return {
		init:init
	}
});
contactMe.init();
