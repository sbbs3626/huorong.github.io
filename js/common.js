/*
 * @Author: Alan.zheng 
 * @Date: 2019-06-18 14:31:24 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2019-06-18 16:23:41
 */
/*REM begin*/
// 128 px（ 盒子） / 640 px(设计稿) * 10 == 2 rem;
! function (e) {
    function t() {
        var t = n.clientWidth,
            r = "}";
        !navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && t > 1024 && (t = 640, r = ";font-size:12px;}"),
            e.rem = t / 10,
            /ZTE U930_TD/.test(navigator.userAgent) && (e.rem = 1.13 * e.rem),
            /Android\s+4\.4\.4;\s+M351\s/.test(navigator.userAgent) && (e.rem = e.rem / 1.05),
            i.innerHTML = t <= 414 ? "html{font-size:" + e.rem + "px!important;}body{font-size:" + 12 * (t / 320) + "px" + r : "html{font-size:40px!important;}body{font-size:14px"
    }
    var n = document.documentElement,
        i = document.createElement("style");
    n.firstElementChild.appendChild(i),
        e.addEventListener("resize", function () {
            t()
        }, !1),
        e.addEventListener("pageshow", function (e) {
            e.persisted && t()
        }, !1),
        t()
}(window);

/*REM end*/