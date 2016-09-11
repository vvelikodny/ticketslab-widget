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
