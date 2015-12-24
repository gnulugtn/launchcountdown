$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs
	$("#header").backstretch("images/tn.jpg");
	$("#services").backstretch("images/3.jpg");
	
	// Countdown
	$('.countdown').downCount({
		date: '1/1/2016 00:00:00',
		offset: +10
	});			
    
});
