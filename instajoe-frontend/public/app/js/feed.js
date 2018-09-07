$(document).ready(function(){
    $(".uploading input").on('click',function(){
        var formData = new FormData($(".file_browse")[0][0]);
        formData.append("file_browse",$(".file_browse")[0].files[0]);
        var token = $.cookie("token");
        var decoded = jwt_decode(token);

        var xhr = new XMLHttpRequest();
        xhr.open("POST",'http://localhost:8000/upload/' + decoded.id +  '?token=' + token);
        xhr.send(formData);

        $('.loading').fadeIn(1000);
        $('.during-loading-text').fadeIn(1000);
        $('.loading').delay(2000).fadeOut(1000);
        $('.during-loading-text').delay(2000).fadeOut(1000);
        $('.after-loading-text').delay(4000).fadeIn(1000);
        $('.after-loading-text').delay(2000).fadeOut(1000);
    });
    $('.browsing input[type=submit]').on('click',function(){
        $('.file_browse').click();
    });
    $('.file_browse').on('change',function(event){
        $('.uploading-thumbnail').attr('src',URL.createObjectURL(event.target.files[0]));
    });

    $('body').keyup(function(event){
        if (event.which == 27){
            $('.upload-image-popup').fadeOut(500);
        }
    });
    $('.upload-button').on('click',function(){
        $('.upload-image-popup').fadeIn(500);
    });
    // $(window).click(function(){
    //     $('.upload-image-popup').fadeOut(500);
    // });
    // $('.upload-image-popup').click(function(event){
    // event.stopPropagation();
    // });
});
