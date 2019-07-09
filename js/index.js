/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 16:16:16 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-07-09 18:29:15
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
    var dummyStyle = document.createElement("div").style,
        vendor = function () {
            for (var n, e = "t,webkitT,MozT,msT,OT".split(","), t = 0, r = e.length; r > t; t++)
                if (n = e[t] + "ransform", n in dummyStyle) return e[t].substr(0, e[t].length - 1);
            return !1
        }(),
        _css3 = vendor ? "-" + vendor.toLowerCase() + "-" : "",
        translate3d = function (n, e, t) {
            return "translate(" + n + "," + e + "," + t + ")"
        };
    Object.defineProperty(HTMLElement.prototype, "translate3d", {
        value: function (n, e, t) {
            this.style[_css3 + "transform"] = "translate3d(" + n + "," + e + "," + t + ")"
        }
    });
    if(!ST.isMobile()){
        $("#wrapper").mCustomScrollbar({
            theme: "dark-1",
            scrollbarPosition: 'inside',
            scrollInertia: 1000,
            scrollEasing: "easeOutCirc",
            mouseWheel: {
                enable: true,
                scrollAmount: 100,
                normalizeDelta: false,
            },
            callbacks: {
                whileScrolling: function () {
                    var Top = Math.abs(this.mcs.top);
                    console.log(Top);
                    
                    $('.first')[0].translate3d(0, -(Top * .3) + 'px', 0);
                    $('.first-cloud')[0].translate3d(-(Top * .5) + 'px', 0, 0);
                    $('.menu-cloud')[0].translate3d(Top * .5 + 'px', 0, 0);
                    $('.game-cloud')[0].translate3d(-(Top * .5) + 'px', 0, 0);
                    $('.menu-box')[0].translate3d(0, -(Top * 1) + 'px', 0);
                    $('.second')[0].translate3d(0, -(Top * 1) + 'px', 0)
                    $('.third')[0].translate3d(0, -(Top * .2) + 'px', 0);
                    if(Top > 405){
                        $('.menu-box')[0].translate3d(0, -(405 + Top * .1) + 'px', 0);
                        $('.second')[0].translate3d(0, -(Top * 1.5) + 'px', 0);
                    }
                    // Top > 1500 && Top < 2600 ? $('.second')[0].translate3d(0, -(1500 - Top * .5 + 1500) + 'px', 0) : (Top > 400 ? $('.second2')[0].translate3d(0, -(Top * 1.5) + 'px', 0) : $('.second')[0].translate3d(0, 0, 0));
                    Top > 2070 && Top < 2800 ? $('.third')[0].translate3d(0, -(2070 - Top + 3105) + 'px', 0) : $('.third')[0].translate3d(0, -(Top * 1.5) + 'px', 0);
                    Top > 2700 ? $('.third')[0].translate3d(0, -(2070 - Top + 3105 + Top - 2700) + 'px', 0) : (Top > 2070 && Top < 2800 ? $('.third')[0].translate3d(0, -(2070 - Top + 3105) + 'px', 0) : $('.third')[0].translate3d(0, -(Top * 1.5) + 'px', 0))
                }
            }
        });
    }

});