var startBtn = $('#startBtn');
var startPopup = $('#startPopup');
var defaultInputNumber = $('.default-input-number');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		startPopup.fadeIn(200);
	});
	// END:startPopup
	// defaultInputNumber
	defaultInputNumber.styler({
		
	});
	// END:defaultInputNumber
});