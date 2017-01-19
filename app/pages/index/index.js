import $ from 'jquery';
import 'imports?jQuery=jquery!qtip2';

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
	//Инициализирует наш модуль
	let init = function () {
		_setUpListners();
	};

	//Прослушивает события
	let _setUpListners = function (e) {
		$('#addproject').on('submit', _addProject); //добавление проекта
	};

	//Добавляет проект
	let _addProject = function (e) {
		console.log('добавление проекта');
		e.preventDefault(); //отменить стандартное поведение

		//объявляем переменные
		let form = $(this),
				url = 'api/add_project.php',
				myServerGiveMeAnAnswer = _ajaxForm(form, url);

		//ajax-запрос на сервер
		myServerGiveMeAnAnswer.done(function (ans) {
			console.log(ans);

			let successBox = form.find('.success-mes'),
					errorBox = form.find('.error-mes');
			if(ans.status === 'ок') {
				errorBox.hide();
				successBox.text(ans.text).show();
			}else{
				successBox.hide();
				errorBox.text(ans.text).show();
			}
		})
	};

	//Универсальная функция
	//Для ее работы используется @form - форма, адрес php-файла, к которому мы обращаемся
	//1.Собрать данные из формы
	//2.Проверить форму
	//3.Делает запрос на сервер и возвращает ответ серверу
	let _ajaxForm = function (form, url) {


		//if(!valid) return false;
		let data = form.serialize();
		let result = $.ajax({
			url: url,
			type: 'POST',
			dateType: 'json',
			data: data,
		}).fail(function (ans) {
			console.log('Проблемы в PHP');
			form.find('.error-mes').text('На сервере произошла ошибка').show();
		});
		return result;
	};

	//Возвращаем объект
	return {
		init:init
	};
})();
myModule.init();

let validation = (function () {

	//Инициализирует модуль
	let init = function () {
		_setUpListners();
	};

	//Прослушивает события
	let _setUpListners = function () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
	};

	//Добавляет класс для незаполненных полей
	let _removeError = function () {
		$(this).removeClass('has-error');
	};

	//Очищает форму
	let _clearForm = function () {
		let form = $(this);
		form.find('.contacts-input, .contacts-textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('.has-error');
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

		let elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;

		//Пройдемся по всем элементам формы
		$.each(elements, function (index, _val) {
			let element = $(_val),
					val = element.val(),
					pos = element.attr('qtip-position');
			if(val.length === 0){
				element.addClass('has-error');
				_cteatQtip(element, pos);
				valid = false;
			}
		});
		return valid;
	};

	//Возвращает объект(публичные методы)
	return {
		init:init,
		validateForm: validateForm
	};
})();
validation.init();

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
	};
})();
contactMe.init();
