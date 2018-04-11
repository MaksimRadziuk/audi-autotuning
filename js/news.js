$(document).ready(function(){

	if (innerWidth<=840){
		$('button.next_page').click(function(){
			$(this).css({"right":"0", "left":'auto', "transform": "translateX(0%)"});
			$('button.prev_page').css({"display":"block"});
		});
	}
	if (innerWidth<=700){
		$('button.next_page').click(function(){
			$(this).css({"right":"15px", "left":'auto', "transform": "translateX(0%)"});
			$('button.prev_page').css({"display":"block"});
		});
	}

});