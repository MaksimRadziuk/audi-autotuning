$(document).ready(function(){

	$('section.profile .form_row .edit>i').click(function(){
		$(this).parent('.edit').siblings('.data').children('input').css('display', 'block');
		$(this).closest('.form_row_wrap').css('backgroundColor', '#fbfbfb');
		$(this).parent('.edit').siblings('.data').children('.data_placehoder').css('opacity', '0');
		$(this).addClass('active');
	});

	$('section.profile .form_row .data input').blur(function () {
	    if ($(this).val().trim() === '') {
	        $(this).css('display', 'none');
			$(this).closest('.form_row_wrap').css('backgroundColor', '#fff');
			$(this).siblings('.data_placehoder').css('opacity', '1');
			$(this).parent('.data').siblings('.edit').children('i').removeClass('active');
	    }
	});

	$('.address_wrap>.delete').click(function(){
		$(this).closest('.address_wrap').remove();
	});

	$('.addAdress').click(function(){
		$('.popup.adressInput').fadeIn();
		$('#popup_background').show();
	});

	$('.closePopup').click(function(){
		$('.popup.adressInput').hide();
		$('#popup_background').fadeOut();
	});

	$(".selectStreet").chosen({width: "100%"});

});