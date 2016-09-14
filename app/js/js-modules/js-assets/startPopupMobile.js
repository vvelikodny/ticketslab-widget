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
