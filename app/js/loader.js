window.onload = function() {
	$("[data-tl-event]").each(function() {
		DrawPopup($(this));
	});

	// OPTIMIZE
	// close startPopup when clicking outside the popup__container
	$('body').mouseup(function(event) {
	    if ($('.popup__iframe').has(event.target).length === 0) {
	    	$('.popup').fadeOut(500);
	    }
	});
};

window.onmessage = function(e){
	var eventData = e.data
    if (eventData.name == 'close') {
        $('#startPopup' + eventData.params.eventId).fadeOut(200);
    }
};

function DrawPopup(ticket) {
	var eventId = ticket.attr('data-tl-event')
	
	var popup = document.createElement('div');
	popup.innerHTML = '<div id="startPopup' + eventId + '" class="popup start-popup"><div class="popup__container"><iframe id="ticketsFrame'+eventId+'" src="http://localhost:8000/e/' + eventId + '" frameborder="0" class="popup__iframe"></iframe></div></div>';
	ticket.parent().append(popup);

	ticket.on('click', function(event) {
		event.preventDefault();
		document.getElementById("ticketsFrame"+eventId).contentWindow.postMessage({name: "tickets", params: {eventId: eventId}}, '*');
		$('#startPopup' + eventId).fadeIn(200);
	});
}