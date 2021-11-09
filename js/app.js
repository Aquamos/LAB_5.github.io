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

    $("#gallery__slider").unitegallery();

    $('#gallery__tiles').unitegallery({
        gallery_theme: "tiles",
        tiles_col_width: 95,
    });
    
    $('.acorn__video').acornMediaPlayer({
        theme: 'darkglass',
        volumeSlider: 'vertical'
    });
});
