// popupCloseBtn
popupCloseBtn.on('click', function(event) {
    event.preventDefault();
    $('.popup', window.parent.document).fadeOut(500);
});
// OPTIMIZE
// close startPopup when clicking outside the popup__container
$('body').mouseup(function(event) {
    if ($('.popup__iframe').has(event.target).length === 0) {
    	$('.popup').fadeOut(500);
    }
});
// END:OPTIMIZE
