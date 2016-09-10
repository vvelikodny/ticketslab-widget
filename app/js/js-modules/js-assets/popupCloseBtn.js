// popupCloseBtn
popupCloseBtn.on('click', function(event) {
    event.preventDefault();
    $('.popup', window.parent.document).fadeOut(500);
});

$(document).mouseup(function(event) {
    if (!popupCloseBtn.is(event.target) && $('.popup', window.parent.document).has(event.target).length === 0) {
    	$('.popup', window.parent.document).fadeOut(500);
    }
});
// END:popupCloseBtn
