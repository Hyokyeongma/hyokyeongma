$(function () {
    // var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

    // if (isSafari){
    //     $('body').addClass('safary-only');
    // }

    $('.main-menu ul').slicknav({
        prependTo: '.mobile-menu'
    });
    $('.mobile-menu-trigger').click(function(){
        $('.slicknav_btn').trigger('click');
    });

    // Instantiate EasyZoom instances
    $('.zoom-image').elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });

    $("[data-fancybox]").fancybox({
        afterLoad: function(){
            $('.zoom-image').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            });
            setTimeout(function(){
                $('.zoomContainer').css({'z-index': '99999999999', 'display': 'block'});
            }, 500);
            
        },
        afterClose: function(){
            $('.zoomContainer').css({ 'z-index': '-9', 'display': 'none' });
        }
    });

    $('.article').readmore({
        collapsedHeight: 200,
        moreLink: '<div class="readmore text-center"><a href="#">Read more</a></div>',
        lessLink: '<div class="readmore text-center"><a href="#">Close</a></div>'
    });

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return decodeURI(results[1]) || 0;
        }
    }

    var mail_note = $.urlParam('success');

    if (mail_note) {
        $('.alert-success').show();
    }
    if (mail_note == 0) {
        $('.alert-danger').show();
    }    
});