// paymentPopup
paymentCardTabField.on('input', function(event) {
    var $this = $(this);
    var inputVal = $this.val();
    var maxlength = $this.prop('maxlength');
    var inputTabIndex = $this.prop('tabindex');


    if (inputVal.length === maxlength) {
        inputTabIndex++;
        $this.parents('form').find('[tabindex="'+inputTabIndex+'"]').focus();
    }
});
// END:paymentPopup
