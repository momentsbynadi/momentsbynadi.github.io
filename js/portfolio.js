$(document).ready(function(){
    $('.card').hover(function(){
        $(this).find('.card-body').animate({ backgroundColor: "rgb(207,204,204)"}, 500);
        $(this).find('.card-img-top').addClass('scaled');
    },function() {
        $(this).find('.card-body').stop().animate({ backgroundColor: "rgb(255,255,255)" }, 500);
        $(this).find('.card-img-top').removeClass('scaled');
    });

    $('.card').magnificPopup({
        items: [
            {
                src: 'images/lake/001.JPG'
            },
            {
                src: 'images/lake/002.JPG'
            },
            {
                src: 'images/lake/003.JPG'
            }
        ],
        gallery: {
            enabled: true
        },
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

});