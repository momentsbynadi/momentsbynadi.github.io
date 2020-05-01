$(document).ready(function(){
    $('.card').hover(function(){
        $(this).find('.card-body').animate({ backgroundColor: "rgb(207,204,204)"}, 500);
        $(this).find('.card-img-top').addClass('scaled');
    },function() {
        $(this).find('.card-body').stop().animate({ backgroundColor: "rgb(255,255,255)" }, 500);
        $(this).find('.card-img-top').removeClass('scaled');
    });

    var defaultPopUp = {
        items: [],
        gallery: {
            enabled: true
        },
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    }

    var familyPopUp = defaultPopUp;
    for (i = 1; i < 16; i++){
        let source = 'images/family/' + i + '.jpg';
        familyPopUp.items.push({ src : source});
    }

    $('#family').magnificPopup(familyPopUp);

});