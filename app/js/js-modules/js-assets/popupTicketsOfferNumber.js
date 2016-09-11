// popupFooterSubmitCheck
function popupFooterSubmitCheck(btn, fields) {
    this.btn = btn;
    this.fields = fields;
    fields.each(function(index, el) {
        if ($(this).hasClass('disabled')) {
            btn.addClass('disabled');
        } else {
            btn.removeClass('disabled');
        }
    });
}
// END:popupFooterSubmitCheck

// popupTicketsOfferNumber
popupTicketsOfferNumber.styler({
    onFormStyled: function() {
        var popupTicketsOffer = $('.popup-tickets__offer');
        var popupTicketsOfferBtn = popupTicketsOffer.find('.jq-number__spin');
        var popupTicketsOfferMinusBtn = popupTicketsOffer.find('.jq-number__spin.minus');

        popupTicketsOfferMinusBtn.addClass('disabled');

        $('.jq-number__spin').on('click', function(event) {
            var $this = $(this);
            var numberParent = $this.parents('.popup-tickets__offer-number');
            var minusBtn = numberParent.find('.minus');

            if (numberParent.find('input').val() > 0) {
                minusBtn.removeClass('disabled');
            } else {
                minusBtn.addClass('disabled');
            }
            popupFooterSubmitCheck(popupFooterSubmitBtn, popupTicketsOfferMinusBtn);
        });
    }
});
// END:popupTicketsOfferNumber
