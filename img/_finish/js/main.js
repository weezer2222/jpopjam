$(function(){

    // グローバル変数 -----------------------------------------
    // windowの幅と高さ
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // slick slider  -----------------------------------------
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        dots: true,
        fade: true
    });

    // modal  -----------------------------------------
    var worksImgs = ['img/works01.jpg','img/works02.png','img/works03.png'];
    for (var i = 0; i < worksImgs.length; i++) {
        $("<img>").attr("src", worksImgs[i]);
    }
    $('#works').find('section').on('click',function(){
        var index = $('#works').find('section').index(this);
        var modal = $('<div class="modal"><img src="'+worksImgs[index]+'" alt="" width="800"></div>');
        $('#overlay').addClass('show');
        $('#overlay').on('click',function(){
            $(this).removeClass('show');
        })
    });


    // スクロールイベント  -----------------------------------------
    $(window).on('scroll',function(){
        // 上からのスクロール値
        var dy = $(this).scrollTop();
        // console.log(dy);
        // #works .containerの高さを取得
        var worksContainerTop = $('#works').find('.container').offset().top;
        // console.log(worksContainerTop);

        // スクロールが#works .containerのY座標を超えらたら
        if(dy >= worksContainerTop - $(window).height()){
            // sectionに.fade-inのクラスを追加する
            $('#works').find('section').addClass('fade-in');
        }
    });


    // モバイル用メニュー  -----------------------------------------
    $('.mobile-menu').on('click',function(){
        $('header nav').addClass('mobile-menu-open');
    });

    $('.mobile-close').on('click',function(){
        $('header nav').removeClass('mobile-menu-open');
    });


});
