$(function(){




    // モバイル用メニュー  -----------------------------------------
    // ハンバーガーメニューをクリックすると
    $('.mobile-menu').on('click',function(){
      console.log('ハンバーガークリック')
      $('header nav').addClass('mobile-menu-open');
    });

    // クローズボタンをクリックすると
    $('.mobile-close').on('click',function(){
      console.log('クローズクリック');
      $('header nav').removeClass('mobile-menu-open');
    });



});
