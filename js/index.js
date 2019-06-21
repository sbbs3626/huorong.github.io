/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 16:16:16 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-06-21 17:26:41
 */
$(function () {
    $('.first-parallax').parallax({
        // 人物动画
        frictionX: 0.2,
        frictionY: 0.8
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
    var _index = 3;
    returnTab(); // 默认加载第一个
    $('.third-race span').on('click', function () {
        // 示神介绍
        _index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        returnTab(_index);
    });
     $(document).on('click', '.third-role-tab span',function () {
         // 示神介绍
         var i = $(this).index();
         $(this).addClass('cur').siblings().removeClass('cur');
         returnHtml(i);
     });
    
    function returnTab() {
        //  html
        var tabHtml = '';
        for (let i = 0; i < roleData[_index].length; i++) {
            tabHtml += '<span class="third-role-tab-child">' +
                '<img src="images/role-' + (_index + 1) + '/' + (i + 1) + '.png"></span>';
        }
        $('.third-role-tab').html(tabHtml);
        returnHtml(0);
        $('.third-race span').eq(_index).addClass('cur');
        $('.third-role-tab span').eq(0).addClass('cur');
    }
    function returnHtml(i) {
        var boxHtml = '<h3>' + roleData[_index][i].name + '</h3>' +
            '<div class="text">' + roleData[_index][i].description + '</div>'+
            '<div class="thumb"><img src="images/role-' + (_index + 1) + '/' + 'thumb.png"></div>' +
            '<div class="img"><img src="images/role-' + (_index + 1) + '/' + 'img.png"></div>';
        $('.third-role-tab-box').html(boxHtml);
        
    }
});