/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 16:16:16 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-07-05 14:05:07
 */
$(function() {
    // 背景音乐播放
    var $audio = $('#bgm')[0];
    $audio.play();
    $('.bgm').on('click', function() {
        // 背景音乐播放
        var $this = $(this);
        if ($this.hasClass('active')) { //判读是否播放
            $audio.pause();
            $(this).removeClass('active');
        } else {
            $audio.play(); //没有就播放
            $(this).addClass('active');
        }
    });
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
        autoplay: 3000
    });
    $('.banner .banner-prev,.banner .banner-next').on('click', function() {
        var type = $(this).attr('class');
        if (type === 'banner-prev') {
            bannerSwiper.slidePrev();
        } else {
            bannerSwiper.slideNext();
        }
    });
    // 新闻动画
    var $contbox = $(".contbox");
    if ($contbox.length > 0) {
        var $contboxTop = $contbox.offset().top - 500;
        if (!ST.isMobile()) {
            $(window).on("scroll", function() {
                var windowTop = $(window).scrollTop();
                if (parseInt(windowTop) > parseInt($contboxTop)) {
                    $('.news,.follow').addClass("cur");
                }
            });
        }
    }
    if (!ST.isMobile()) {
        var gameSwiper = new Swiper('.game .swiper-container', {
            //游戏
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 4,
            initialSlide: 2,
            coverflow: {
                rotate: 0,
                stretch: -20,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            onClick: function(swiper) {
                gameSwiper.slideTo(swiper.clickedIndex)
            }
        });
    } else {
        var gameSwiper = new Swiper('.game .swiper-container', {
            //游戏
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 4,
            initialSlide: 2,
            coverflow: {
                rotate: 0,
                stretch: -10,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            onClick: function(swiper) {
                gameSwiper.slideTo(swiper.clickedIndex)
            }
        });
    }


    $('.game .game-prev,.game .game-next').on('click', function() {
        var type = $(this).attr('class');
        if (type === 'game-prev') {
            gameSwiper.slidePrev();
        } else {
            gameSwiper.slideNext();
        }
    });
    ST.returnTab(3); // 默认加载第一个
    $('.third-race span').on('click', function() {
        // 示神介绍
        _index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        ST.returnTab(_index);
    });
    $(document).on('click', '.third-role-tab span', function() {
        // 示神介绍
        var i = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        ST.returnHtml(i);
    });


});