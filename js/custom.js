$(function() {
	window.scrollReveal = new scrollReveal();
	"use strict";

	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});

	// Backstretchs

	// Countdown
	$('.countdown').downCount({
		date: '1/1/2016 00:00:00',
		offset: +1
	});

});
