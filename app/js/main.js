var startBtn = $('#startBtn');
var startPopup = $('#startPopup');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		startPopup.fadeIn(200);
	});
	// END:startPopup
});