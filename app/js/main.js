var startBtn = $('#startBtn');
var popup = $('.popup');
var startPopup = $('#startPopup');
var popupTicketsOfferNumber = $('input.popup-tickets__offer-number');
var popupCloseBtn = $('.popup__close-btn');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		startPopup.fadeIn(200);
	});
	// END:startPopup
	// popupTicketsOfferNumber
	popupTicketsOfferNumber.styler();
	// END:popupTicketsOfferNumber
	// popupCloseBtn
	popupCloseBtn.on('click', function(event) {
	    event.preventDefault();
	    $('.popup', window.parent.document).fadeOut(500);
	});
	
	$(document).mouseup(function(event) {
	    if (!popupCloseBtn.is(event.target) && $('.popup', window.parent.document).has(event.target).length === 0) {
	    	$('.popup', window.parent.document).fadeOut(500);
	    }
	});
	// END:popupCloseBtn
});