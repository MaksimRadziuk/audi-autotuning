$(document).ready(function(){

	$('.majorList_option>.title').click(function(){
		$('.majorList_option').removeClass('active');
		$('.submenu_option').removeClass('active');
		$(this).parent('.majorList_option').addClass('active');
	});

	$('.submenu_option').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.producer .innerPart>ul>li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
	
	if (innerWidth>767) {
		$('section.product .sidebar_block.producer .innerPart .submenu').jScrollPane({
			showArrows:true
		});
	}
	

	$(".selectModel").chosen({width: "99%"});
	$(".selectBody").chosen({width: "99%"});

	if (innerWidth <= 767) {
		$('section.product .sidebar_block>.title').click(function(){
			$(this).siblings('section.product .sidebar_block>.innerPart').slideToggle();
		});
	}
	else {}

	$('.popular__slider-wrap').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		loop:true,
		pauseOnFocus:false,
		pauseOnHover:false,
		responsive: [
	    {
	      breakpoint: 1321,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }, 
	    {
	      breakpoint:1001,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    ]
	});

	$('#gallery').unitegallery({
		gallery_theme: "compact",
		theme_panel_position: "bottom",
		gallery_height:"100%",
		gallery_width:"100%",
		theme_hide_panel_under_width: 0,
		gallery_autoplay:false,
		gallery_control_thumbs_mousewheel:false,
		gallery_carousel:true,
		slider_control_zoom:false,
		slider_enable_arrows: true,
		slider_enable_progress_indicator: false,
		slider_enable_play_button: false,
		slider_enable_zoom_panel: false,
		slider_arrow_right_align_hor:"right",
		slider_arrow_right_offset_hor:false,
		slider_arrow_left_align_hor:"left",
		slider_arrow_left_offset_hor:false,
		strip_thumbs_align: "center",
		strip_space_between_thumbs:15
	});

	$('#descriptionTab').click(function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#description').addClass('active');
	});
	$('#compatibilityTab').click(function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#compatibility').addClass('active');
	});
	$('#feedbackTab').click(function(){
		$(this).siblings('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#feedback').addClass('active');
	});

});