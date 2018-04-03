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
	

	if (innerWidth <= 767) {
		$('section.catalog .sidebar_block>.title').click(function(){
			$(this).siblings('section.catalog .sidebar_block>.innerPart').slideToggle();
		});
	}
});