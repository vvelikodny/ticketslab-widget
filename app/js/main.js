var startBtn = $('#startBtn');
var popup = $('.popup');
var startPopup = $('#startPopup');
var popupTicketsOfferNumber = $('input.popup-tickets__offer-number');
var popupCloseBtn = $('.popup__close-btn');
var confirmationPopupBtn = $('.confirm-block__btn');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		// startPopup.fadeIn(200);
		$('.popup').fadeIn(200);
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
	// OPTIMIZE
	// close startPopup when clicking outside the popup__container
	$(document).mouseup(function(event) {
	    if ($('.popup__iframe').has(event.target).length === 0) {
	    	$('.popup').fadeOut(500);
	    }
	});
	// END:OPTIMIZE
	// confirmationPopupBtn
	confirmationPopupBtn.on('click', function(event) {
	    event.preventDefault();
	    $(this).parents('.confirm-popup').fadeOut(500);
	});
	// END:confirmationPopupBtn
});