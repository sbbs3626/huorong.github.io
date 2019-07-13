/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 14:31:24 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-07-05 16:32:32
 */
/*REM begin*/
// 128 px（ 盒子） / 640 px(设计稿) * 10 == 2 rem;
! function(e) {
    function t() {
        var t = n.clientWidth,
            r = "}";
        !navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && t > 1024 && (t = 750, r = ";font-size:12px;}"),
            e.rem = t / 10,
            /ZTE U930_TD/.test(navigator.userAgent) && (e.rem = 1.13 * e.rem),
            /Android\s+4\.4\.4;\s+M351\s/.test(navigator.userAgent) && (e.rem = e.rem / 1.05),
            i.innerHTML = t <= 414 ? "html{font-size:" + e.rem + "px!important;}body{font-size:" + 12 * (t / 375) + "px" + r : "html{font-size:40px!important;}body{font-size:14px"
    }
    var n = document.documentElement,
        i = document.createElement("style");
    n.firstElementChild.appendChild(i),
        e.addEventListener("resize", function() {
            t()
        }, !1),
        e.addEventListener("pageshow", function(e) {
            e.persisted && t()
        }, !1),
        t()
}(window);

/*REM end*/

$.fn.zqTab = function(option, callback) {
    // tab 选项卡
    var index; //索引值
    var $this = $(this);
    $this.eq(0).addClass(option.activeName); //第一个导航高亮显示 
    $(option.container).hide().eq(0).show(); //第一个内容显示
    $this.on(option.eventName, function() {
        _index = $this.index(this); //获取当前点击的索引值
        $(this).addClass(option.activeName).siblings().removeClass(option.activeName); //当前点击高亮显示
        $(option.container).eq(_index).show().siblings().hide(); //通过索引值让对应的选项内容区显示
        callback();
    });

}
var ST = {
    _index: 0,
    isMobile: function() {
        return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    atCopy: function($value) {
        // 复制
        const input = document.createElement('input');
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('value', $value);
        document.body.appendChild(input);
        input.setSelectionRange(0, 9999);
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            alert("复制成功！");
        } else {
            alert("复制失败！请手动复制！");
        }
        document.body.removeChild(input);
    },
    returnTab: function(_index) {
        //  html
        ST._index = _index;
        var tabHtml = '';
        for (let i = 0; i < roleData[_index].length; i++) {
            tabHtml += '<span class="third-role-tab-child">' +
                '<img src="images/role-' + (_index + 1) + '/' + (i + 1) + '.png"></span>';
        }
        $('.third-role-tab').html(tabHtml);
        ST.returnHtml(0);
        $('.third-race span').eq(_index).addClass('cur');
        $('.third-role-tab span').eq(0).addClass('cur');
    },
    returnHtml: function(i) {
        var _index = ST._index;
        var boxHtml = '<h3>' + roleData[_index][i].name + '</h3>' +
            '<div class="text">' + roleData[_index][i].description + '</div>' +
            '<div class="thumb"><img src="images/role-' + (_index + 1) + '/' + 'thumb-' + (i + 1) + '.png"></div>' +
            '<div class="img"><img src="images/role-' + (_index + 1) + '/' + 'img-' + (i + 1) + '.png"></div>';
        $('.third-role-tab-box').html(boxHtml);

    }
}

/*导航悬停*/
$(function() {
    // 导航悬停

    $('.first-play,.video-close').on('click', function() {
        // 视频播放
        $('.video-box').fadeToggle();
    });
    $('.first-surprise').on('click', function() {
        // 点击弹出惊喜
        var code = 'cdefghiklmn'; // 惊喜码
        var codeHtml = '<div class="fixed-bg"><div class="mylayer-content text-center">恭喜悠獲得驚喜<br>遊戲序號: ' +
            code +
            '<p class="mtop15"><button class="mylayer-btn">複製</button></p><div class="mylayer-close"></div></div>' +
            '</div>';
        $('body').append(codeHtml);
        $('.mylayer-btn').on('click', function() {
            ST.atCopy(code);
            $('.fixed-bg').remove();
        });
        $('.mylayer-close').on('click', function() {
            $('.fixed-bg').remove();
        });
    });

});