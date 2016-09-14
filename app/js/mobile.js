$(document).ready(function() {
	// startPopupMobile
	var popupMainHeaderInfoBtn = $('.popup-main__header-info-btn');
	var popupInfiMobile = $('.popup-info-mobile');
	
	$(document).ready(function() {
	    popupMainHeaderInfoBtn.on('click', function(event) {
	        event.preventDefault();
	        popupInfiMobile.fadeIn(500);
	    });
	});
	// END:startPopupMobile
});