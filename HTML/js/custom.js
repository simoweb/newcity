
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

//slide
$(document).ready(function() {
	
	$("#owl-slide").owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navigation : true, // Show next and prev buttons
		nav:true,
		navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>"
		],
		dots: false,
		singleItem:true,
		transitionStyle : "fadeIn",
		loop:true,
		items : 1,
		// "singleItem:true" is a shortcut for:
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
});


//carousel testimonial footer
jQuery(document).ready(function() {
	$('#owl-testimonial').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText: [
		"<i class='fa fa-chevron-left'></i>",
		"<i class='fa fa-chevron-right'></i>"
		],
		responsive:{
			1000:{
				items:1
			},
			600:{
				items:1
			},
			200:{
				items:1
			}
		}
	})
});


//mixtup
$(function(){
	$('#grid').mixItUp({
		animation: {
			animateResizeTargets: true
		}
	});
})
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
		offset: 100,
		callbackFunction: function(elem, action){$('.timer').countTo();} // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
	});
});

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
	jQuery.stellar({ 
		horizontalScrolling: false, 
		hideDistantElements: false, 
		responsive: true 
	});
	// 5 - parallax disable on mobile
	
	jQuery(document).ready(function ($) {
		if (Modernizr.touch){
			$('.parallax').css('background-attachment', 'scroll');
		} 
	});
	//***************************************************																							