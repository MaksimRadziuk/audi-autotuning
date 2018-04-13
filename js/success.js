$(document).ready(function(){
    var wHeight = $(window).height(),
        hHeight = $('header').outerHeight(true),
        fHeight = $('footer').outerHeight(true),
        result = wHeight - hHeight - fHeight;
    
    if (result>=100){
        $('section.success').height(result);
    }
    else {
         $('section.success').height('auto');
    }

    $(window).resize(function() {
        var wHeight = $(window).height(),
            hHeight = $('header').outerHeight(true),
            fHeight = $('footer').outerHeight(true),
            result = wHeight - hHeight - fHeight;

        if (result>=100){
            $('section.success').height(result);
        }
        else {
             $('section.success').height('auto');
        }
    });

    var wHeight = $(window).height();
    $('#popup_background').height(wHeight);
    $('.mobile_menu').height(wHeight);

    $(window).resize(function() {
        var wHeight = $(window).height();
        $('#popup_background').height(wHeight);
        $('.mobile_menu').height(wHeight);
    });

    if (innerHeight<=470) {
        var dHeight = $('html').height();
        $('#popup_background').height(dHeight);
        $('.mobile_menu').height(dHeight);
    }

});