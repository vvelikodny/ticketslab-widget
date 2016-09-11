// paymentPopup
paymentCardTabField.on('input', function(event) {
	var $this = $(this);
	var inputVal = $this.val();
	var maxlength = $this.prop('maxlength');

	if(inputVal.length === maxlength){
		$this.nextAll('input').focus();
	}
});
// END:paymentPopup