$(document).ready(function(){


	$('section.slider .slider_wrap').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		slidesToScroll:1,
		autoplay:true,
		loop:true,
		pauseOnFocus:false,
		pauseOnHover:false
	});

	$('.popular__slider-wrap').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:false,
		loop:true,
		pauseOnFocus:false,
		pauseOnHover:false
	});

	$('.autoHouse__slider_wrap').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		slidesToScroll:1,
		autoplay:false,
		loop:true,
		pauseOnFocus:false,
		pauseOnHover:false,
		centerMode:true,
		centerPadding:0
	});

	$('.news__slider-wrap').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll:1,
		autoplay:false,
		loop:true,
		pauseOnFocus:false,
		pauseOnHover:false
	});


});