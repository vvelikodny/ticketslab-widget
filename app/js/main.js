var startBtn = $('#startBtn');
var startPopup = $('#startPopup');
var popupTicketsOfferNumber = $('input.popup-tickets__offer-number');

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
});