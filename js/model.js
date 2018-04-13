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
		pauseOnHover:false,
		responsive: [
	    {
	      breakpoint: 1001,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }, 
	    {
	      breakpoint:701,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }, 
	    {
	      breakpoint:481,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    ]
	});

	
	if (innerWidth <= 700) {

		$('.tiles_wrap').slick({
			slidesToShow:1,
			slidesToScroll:1,
			arrows:false,
			dots:false,
			autoplay:false,
			loop:true,
			pauseOnFocus:false,
			pauseOnHover:false
		});
	}

});