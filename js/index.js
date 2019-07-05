/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 16:16:16 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-07-05 14:05:07
 */
$(function () {
    $('.first-parallax').parallax({
        // 人物动画
        frictionX: 0.2,
        frictionY: 0.4,
        scalarX: 3.0,
        scalarY: 3.0,
    });
    
    var bannerSwiper = new Swiper('.banner .swiper-container', {
        // banner
        loop: true,
    });
    $('.banner .banner-prev,.banner .banner-next').on('click', function () {
        var type = $(this).attr('class');
        if (type === 'banner-prev') {
            bannerSwiper.slidePrev();
        } else {
            bannerSwiper.slideNext();
        }
    });
    if(!ST.isMobile()){
        var gameSwiper = new Swiper('.game .swiper-container', {
            //游戏
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 4,
            coverflow: {
                rotate: 0,
                stretch: -20,
                depth: 200,
                modifier: 1,
                slideShadows: false
            }
        });
    }else {
        var gameSwiper = new Swiper('.game .swiper-container', {
            //游戏
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 4,
            coverflow: {
                rotate: 0,
                stretch: -10,
                depth: 200,
                modifier: 1,
                slideShadows: false
            }
        });
    }
 

    $('.game .game-prev,.game .game-next').on('click', function () {
        var type = $(this).attr('class');
        if (type === 'game-prev') {
            gameSwiper.slidePrev();
        } else {
            gameSwiper.slideNext();
        }
    });
    ST.returnTab(3); // 默认加载第一个
    $('.third-race span').on('click', function () {
        // 示神介绍
        _index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        ST.returnTab(_index);
    });
    $(document).on('click', '.third-role-tab span',function () {
        // 示神介绍
        var i = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        ST.returnHtml(i);
    });
    
   
});