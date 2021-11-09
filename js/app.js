$(document).ready(function() {
    $('.wrapper').tabs();
    $(document).tooltip();

    $('.accordion__content').accordion({
        active: false,
        collapsible: true,
        heightStyle: "content",
    });


    $('.datepicker').datepicker();

    $('#menu').menu();

    $('#slider').slider({
        animate: "slow",
        range: "min",
        max: 10000,
        value: 10,
        slide: function(event, ui) {
            $(".slider__result").text(ui.value);
        }
    });
    $('.slider__result').text($('#slider').slider("value"));

    $("#gallery").unitegallery();
    
    $('.acorn__video').acornMediaPlayer({
        theme: 'darkglass',
        volumeSlider: 'vertical'
    });
});