$(document).ready(function(){
    $('body').on('click','img.photo-thumbnail',function () {
        $('.image-popup').fadeIn(500);
    });
    $('body').on('keyup',function(event){
        if (event.which == 27){
            $('.dim,.image-popup').fadeOut(500);
        }
    });
});
