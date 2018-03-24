

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
		        slidesToShow:3
		      }
		    }
		  ]
		});
	}
	else{}
	
	$('.hamburger').click(function(){
		$('#popup_background').fadeIn();
		$('.mobile_menu').fadeIn().addClass('active');
	});
	$('.close').click(function(){
		$('#popup_background').fadeOut();
		$('.popup').fadeOut();
	});


});