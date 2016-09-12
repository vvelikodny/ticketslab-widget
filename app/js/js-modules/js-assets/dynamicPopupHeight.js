// dynamicPopupHeight
var popup = $('.popup');
var popupTickets = popup.find('.popup-tickets');
var windowHeight = $(window).height();			
var popupDynamicHeight = windowHeight * 0.6652935118434603;
var popupTicketsDynamicHeight = windowHeight * 0.34527687296416937;

popup.find('.popup__container').height(popupDynamicHeight);
// $('.popup-tickets').height(popupTicketsDynamicHeight);
// console.log(popupDynamicHeight);
// END:dynamicPopupHeight