import $ from 'jquery';
$('#page-about').show();
$('#header-menu').click(function () {
	$('.header-menu__item').toggleClass('menu-active');
	$('#content-menu').slideToggle(100);
	$('.js-item-link').click(function () {
		$('#content-menu').slideUp(100);
		$('.header-menu__item').removeClass('menu-active');
	});
});
$('.js-item-link').click(function () {
	$(this).addClass('active-item').siblings('.js-item-link').removeClass('active-item');
	$('.main-info').hide();
	$('#page-' + $(this).attr('id')).show();
	return false;
});
/*let windowSize = $(document).width();
$(window).resize(function(){
	windowSize = $(document).width();
	if (windowSize > 768) {
		$('#content-menu').css('display','block');
	}
});*/

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
