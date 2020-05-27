$(function () {
    var button = $('.responsiveButton');
    button.on('click', function () {
        $('#overlay').css({ "display": "block" });
        $('#overlay').animate({ top: '0' }, 500, function () {
            $('#overlay').css({ "display": "block" });
        });
    });

    var exit = $('.overlay-exit').on('click', function () {
        // $('#overlay').css({ "animation": "block", "top": "0" });

        // $('#overlay').addClass('demoClass');
        // $('#overlay').css({ "animation": "demo .5s ease-in-out" });
        // $('#overlay').css({ "display": "none" });

        $('#overlay').animate({ top: '-100%' }, 500, function () {
            $('#overlay').css({ "display": "none" });
        });

    });
});
