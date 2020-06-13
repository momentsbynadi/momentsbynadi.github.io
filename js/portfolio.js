$(document).ready(function(){
    $('.card').hover(function(){
        $(this).find('.card-body').animate({ backgroundColor: "rgb(207,204,204)"}, 500);
        $(this).find('.card-img-top').addClass('scaled');
    },function() {
        $(this).find('.card-body').stop().animate({ backgroundColor: "rgb(255,255,255)" }, 500);
        $(this).find('.card-img-top').removeClass('scaled');
    });

    var familyPopUp = {
        items: [],
        gallery: {
            enabled: true
        },
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    }
    for (i = 1; i <= 18; i++){
        let source = 'images/family/' + i + '.JPG';
        familyPopUp.items.push({ src : source});
    }

    var kidsPopUp = {
        items: [],
        gallery: {
            enabled: true
        },
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    }
    for (i = 1; i <= 14; i++){
        let source = 'images/kids/' + i + '.JPG';
        kidsPopUp.items.push({ src : source});
    }

    var pregnancyPopUp = {
        items: [],
        gallery: {
            enabled: true
        },
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    }
    for (i = 1; i <= 12; i++){
        let source = 'images/pregnancy/' + i + '.JPG';
        pregnancyPopUp.items.push({ src : source});
    }

    $('#family').magnificPopup(familyPopUp);
    $('#pregnancy').magnificPopup(pregnancyPopUp);
    $('#kids').magnificPopup(kidsPopUp);

});