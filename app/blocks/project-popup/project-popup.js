import $ from 'jquery';

$('.js-project-popup').hide();
$('.js-show-project').click(function () {
	$('.js-authorization-popup').show('1000');
	return false;
});
$('.js-close-project').click(function () {
	$('.js-project-popup').hide('100');
});
//  ========================
//  Счетчик символов письма
//  ========================
	let maxCount = 200;

	$("#commentCounter").html('0');

	$("#commentTextarea").keyup(function() {
		let revText = this.value.length;
		if (this.value.length > maxCount)
				{
				this.value = this.value.substr(0, maxCount);
				}
		let cnt = (revText);
		if(cnt <= 0){
			$("#commentCounter").html('0');
		}
		else {
			$("#commentCounter").html(cnt);
		}
	});
