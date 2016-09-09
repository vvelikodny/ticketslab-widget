var startBtn = $('#startBtn');
var startPopup = $('#startPopup');
var popupOverlay = $('#popupOverlay');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		popupOverlay.fadeIn(200);
	});
	// END:startPopup
});