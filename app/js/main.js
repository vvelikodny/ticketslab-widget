var startBtn = $('#startBtn');
var popup = $('.popup');
var startPopup = $('#startPopup');
var popupTicketsOfferNumber = $('input.popup-tickets__offer-number');
var popupCloseBtn = $('.popup__close-btn');
var confirmationPopupBtn = $('.confirm-block__btn');
var popupFooterSubmitBtn = $('.popup__footer-submit-btn');
var paymentCardTabField = $('.payment-card__tabfield');

$(document).ready(function() {
	// startPopup
	startBtn.on('click', function(event) {
		event.preventDefault();
		// startPopup.fadeIn(200);
		$('.popup').fadeIn(200);
	});
	// END:startPopup
	// popupFooterSubmitCheck
	function popupFooterSubmitCheck(btn, fields) {
	    $(this).btn = btn;
	    $(this).fields = fields;
	    if (fields.hasClass('active')) {
	        btn.removeClass('disabled').addClass('active');
	    } else {
	        btn.removeClass('active').addClass('disabled');
	    }
	}
	// END:popupFooterSubmitCheck
	
	// popupTicketsOfferNumber
	popupTicketsOfferNumber.styler({
	    onFormStyled: function() {
	
	        var popupTicketsOffer = $('.popup-tickets__offer');
	        var popupTicketsOfferBtn = popupTicketsOffer.find('.jq-number__spin');
	        var popupTicketsOfferMinusBtn = popupTicketsOffer.find('.jq-number__spin.minus');
	
	        popupTicketsOfferMinusBtn.addClass('disabled');
	
	        popupTicketsOfferBtn.on('click', function(event) {
	            var $this = $(this);
	            var numberParent = $this.parents('.popup-tickets__offer-number');
	            var minusBtn = numberParent.find('.minus');
	
	            if (numberParent.find('input').val() > 0) {
	                minusBtn.addClass('active').removeClass('disabled');
	            } else {
	                minusBtn.addClass('disabled').removeClass('active');
	            }
	            popupFooterSubmitCheck(popupFooterSubmitBtn, popupTicketsOfferMinusBtn);
	        });
	    }
	});
	// END:popupTicketsOfferNumber
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
	// confirmationPopupBtn
	confirmationPopupBtn.on('click', function(event) {
	    event.preventDefault();
	    $(this).parents('.confirm-popup').fadeOut(500);
	});
	// END:confirmationPopupBtn
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
});