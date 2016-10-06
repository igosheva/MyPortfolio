import $ from 'jquery';

$('.js-authorization-popup').hide();
$('.js-show-authorization').click(function () {
	$('.js-authorization-popup').show('1000');
	return false;
});
$('.js-close-authorization').click(function () {
	$('.js-authorization-popup').hide('100');
});
$('.js-button-authorization').click(function () {
	$('.js-authorization-popup').hide('100');
	$('.js-project-popup').show('100');
});
