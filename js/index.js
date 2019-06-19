/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 16:16:16 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-06-19 17:37:39
 */
$(function () {
    $('.first-parallax').parallax({
        // 人物动画
        frictionX: 0.2,
        frictionY: 0.8
    });
    /*导航悬停*/
    var $menu = $("#menuBox");
    var menuTop = $menu.offset().top+200;
    $(window).on("scroll", function () {
        console.log(1);
        
        var windowTop = $(window).scrollTop();
        if (parseInt(windowTop) > parseInt(menuTop)) {
            $menu.addClass("fixed");
        } else {
            $menu.removeClass("fixed");
        }
    });
    var bannerSwiper = new Swiper('.banner .swiper-container', {
        // banner
       loop:true,
    });
    $('.banner .banner-prev,.banner .banner-next').on('click',function(){
        var type = $(this).attr('class');
        if (type ==='banner-prev'){
            bannerSwiper.slidePrev();
        }else {
            bannerSwiper.slideNext();
        }
    });
    var gameSwiper = new Swiper('.game .swiper-container', {
        //游戏
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        loop:true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 4,
        coverflow: {
            rotate: 0,
            stretch: -20,
            depth: 200,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            668: {
               
            }
        }
    });
   
    $('.game .game-prev,.game .game-next').on('click', function () {
        var type = $(this).attr('class');
        if (type === 'game-prev') {
            gameSwiper.slidePrev();
        } else {
            gameSwiper.slideNext();
        }
    });
  
});