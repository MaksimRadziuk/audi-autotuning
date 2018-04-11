$(document).ready(function(){

	$('.statusSelect').chosen({width: "100%"});

	$('section.myorders .innerTable__head').click(function(){
		$(this).siblings('section.myorders .innerTable__body').slideToggle();
		$(this).children('span').toggleClass('active');
	});

});