

var $ = jQuery.noConflict();


$(document).ready(function() {
    $('.flexslider').flexslider({
          animation: "fade"
    });

    $(function() {
        $('.show_menu').click(function(){
            $('.menu').fadeIn();
            $('.show_menu').fadeOut();
            $('.hide_menu').fadeIn();
        });
        $('.hide_menu').click(function(){
            $('.menu').fadeOut();
            $('.show_menu').fadeIn();
            $('.hide_menu').fadeOut();
        });
    });


    $('.cover').liCover({
	    parent: $('.slides'),
	    position:'absolute',
	    veticalAlign:'middle',
	    align:'center'
	})

	$(".menu").changeActiveNav();


	$('.menu_button').click(function() {
	if ($('.menu').hasClass('collapse')) {
		$('.menu').removeClass('collapse');
	}
	else {
		$('.menu').addClass('collapse')
	}
	
	})
});
