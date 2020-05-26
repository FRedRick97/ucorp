$(function () {
    var button = $('.responsiveButton');
    button.on('click', function () {
        console.log('I was clicked');
        $('nav').toggleClass('navDisplay');
        $('.header-logo').toggleClass('adjustHeight');
        $('header').toggleClass('headerHeight');
    });


});
