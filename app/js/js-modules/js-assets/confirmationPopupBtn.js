// confirmationPopupBtn
confirmationPopupBtn.on('click', function(event) {
    if ($(event.target).hasClass('confirm-block__btn--submit')) {
        alert('submit');
    }
    event.preventDefault();
    $(this).parents('.confirm-popup').fadeOut(500);
});
// END:confirmationPopupBtn
