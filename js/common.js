

$(document).ready(function(){
	if (innerWidth <= 1000) {
		$('.header__menu-slider').slick({
			arrows:true,
			dots:false,
			slidesToShow:6,
			slidesToScroll:3,
			responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    }
		  ]
		});
	}
	else{}
	
	$('.hamburger').click(function(){
		$('#popup_background').show();
		$('.mobile_menu').fadeIn().addClass('active');
	});
	$('.close').click(function(){
		$('#popup_background').fadeOut();
		$('.popup').hide();
	});
	$('#popup_background').click(function(){
		$('#popup_background').fadeOut();
		$('.popup').hide();
	});

	var dHeight = $('html').height();
	$('#popup_background').height(dHeight);
	$('.mobile_menu').height(dHeight);

	$(window).resize(function() {
        var dHeight = $('html').height();
		$('#popup_background').height(dHeight);
		$('.mobile_menu').height(dHeight);
    });

	if (innerHeight<=470) {
		var dHeight = $('html').height();
		$('#popup_background').height(dHeight);
		$('.mobile_menu').height(dHeight);
	}

	$('.closePopup').click(function(){
		$('#popup_background').fadeOut();
		$('.popup').hide();
	})

	$('section.busket_table table tbody td .deleteItem').click(function(){
		$('#popup_background').show();
		$('.deleteBusketRow').fadeIn();
	});



	$('.popup form input').click(function(){
		$(this).siblings('label').hide();
	});
	$('.popup form input').blur(function () {
	    if ($(this).val().trim() === '') {
	        $(this).siblings('label').show();
	    }
	});

	$('header .rightPart .middle_row .personalCab i').click(function(){
		$('.popup.signIn').fadeIn();
		$('#popup_background').show();
	});	

	$('section.busket_forms .wrapper.signIn p>a').click(function(){
		$('.popup.signIn').fadeIn();
		$('#popup_background').show();
	});	

	$('section.product .contentPart>.slider_wrap .description .buyNow').click(function(){
		$('.popup.buyWithOneClick').fadeIn();
		$('#popup_background').show();
	});	

});