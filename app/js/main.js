var startBtn = $('#startBtn');
var startPopup = $('#startPopup');
var addTicketsInputNumber = $('#addTicketsInputNumber');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		startPopup.fadeIn(200);
	});
	// END:startPopup
	// defaultInputNumber
	addTicketsInputNumber.styler({
		
	});
	console.log(addTicketsInputNumber.val());
	// END:defaultInputNumber
});