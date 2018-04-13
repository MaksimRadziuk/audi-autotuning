$(document).ready(function(){

	$('section.busket_table table button').click(function(e){
        var type = $(this).attr('data-type');
        var field = $(this).attr('data-field');
        var input = $(this).siblings('input[name ='+ field +']');
        var min = input.attr('min');
        var max = input.attr('max');
        min =parseInt(min);
        max =parseInt(max);
        var currentVal;
        var value = input.val();
        if(type == 'minus'){
            if(value>min){
                currentVal = parseInt(value) - 1;
                input.val(currentVal).change();
            }
        }
        if(type == 'plus'){
            if(value<max){
                currentVal = parseInt(value) + 1;
                input.val(currentVal).change();
            }
        }

      });

	

	$('section.busket_forms .wrapper form input').click(function(){
		$(this).siblings('label').hide();
	});
	$('section.busket_forms .wrapper form input').blur(function () {
	    if ($(this).val().trim() === '') {
	        $(this).siblings('label').show();
	    }
	});

	/*if (innerWidth<=700) {
		$('.deleteItem').click(function(){
			$(this).closest('table tbody.item').remove();
		});	
	}
	if (innerWidth>700) {
		$('.deleteItem').click(function(){
			$(this).closest('table tr').remove();
		});	
	}
	else{}*/

});