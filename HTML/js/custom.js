
//	1 - top menu fixed on scroll
//	2 - switch color demo
//	3 - animate progress bar
//	4 - animate on scroll
//	5 - disable on mobile


//***************************************************
// 1 - top menu fixed on scroll
jQuery("document").ready(function($){ 
    var nav = $('#navbar'); 
    $(window).scroll(function () {
        if ($(this).scrollTop() >38) {
            nav.addClass("fixed-menu");
		} 
		else {
            nav.removeClass("fixed-menu");
		}
	});
});

//***************************************************

// 2 - switch color demo
jQuery('.content-cog').click(function () {
	jQuery('.switcher').show();
});

jQuery('.theme-close').click(function () {
	jQuery('.switcher').hide();
});

if($.cookie("css")) {
	$("#switch-color").attr("href",$.cookie("css"));
}
jQuery(document).ready(function() { 
	$("#nav li a").click(function() { 
		$("#switch-color").attr("href",$(this).attr('rel'));
		$.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
		return false;
	});
});

//***************************************************
// 3 - animate progress bar
$.fn.animateBar = function(){
	$.each($('.progress-bar'),function(){
		$(this).css('width', $(this).attr('aria-valuenow')+'%');
	});	
}

jQuery(document).ready(function() {
    jQuery('.fade-scroll.animate-bar,.fade-scroll-left.animate-bar,.fade-scroll-right.animate-bar').addClass("hidden-scroll").viewportChecker({
		classToAdd: 'visible-scroll animated fadeIn',
		offset: 100,
		callbackFunction: function(elem, action){jQuery('.progress').animateBar();} 
	});
});

//***************************************************
// 4 - animate on scroll
jQuery(document).ready(function() {
    jQuery('.fade-scroll').addClass("hidden-scroll").viewportChecker({
		classToAdd: 'visible-scroll animated fadeIn',
		offset: 100
	});
	jQuery('.fade-scroll-left').addClass("hidden-scroll").viewportChecker({
        classToAdd: 'visible-scroll animated fadeInLeft',
		offset: 100
	});
	jQuery('.fade-scroll-right').addClass("hidden-scroll").viewportChecker({
		classToAdd: 'visible-scroll animated fadeInRight',
		offset: 100
	});   
});

//***************************************************
$(window).stellar({
	horizontalScrolling: false,
});
// 5 - parallax disable on mobile

jQuery(document).ready(function ($) {
	if (Modernizr.touch){
		$('.parallax').css('background-attachment', 'scroll');
	} 
});
//***************************************************																						