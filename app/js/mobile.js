var popupMainHeaderInfoBtn = $('.popup-main__header-info-btn');
var popupMobile = $('.popup-mobile');
var popupInfoMobile = $('.popup-info-mobile');
var popupMobileCloseBtn = $('.popup-mobile__close-btn');

$(document).ready(function() {
	// startPopupMobile
	$(document).ready(function() {
	    popupMainHeaderInfoBtn.on('click', function(event) {
	        event.preventDefault();
	        popupInfoMobile.fadeIn(500);
	    });
	    popupMobileCloseBtn.on('click', function(event) {
	    	event.preventDefault();
	    	popupMobile.fadeOut(500);
	    });
	});
	// END:startPopupMobile
});