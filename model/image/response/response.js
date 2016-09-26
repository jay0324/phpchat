/*  
    $ Responsive plugin
    Program: Jay HSU
    Date: 2016/02/18
*/

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
/*
!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";if(a.matchMedia&&a.matchMedia("all").addListener)return!1;var b=a.matchMedia,c=b("only all").matches,d=!1,e=0,f=[],g=function(){a.clearTimeout(e),e=a.setTimeout(function(){for(var c=0,d=f.length;d>c;c++){var e=f[c].mql,g=f[c].listeners||[],h=b(e.media).matches;if(h!==e.matches){e.matches=h;for(var i=0,j=g.length;j>i;i++)g[i].call(a,e)}}},30)};a.matchMedia=function(e){var h=b(e),i=[],j=0;return h.addListener=function(b){c&&(d||(d=!0,a.addEventListener("resize",g,!0)),0===j&&(j=f.push({mql:h,listeners:i})),i.push(b))},h.removeListener=function(a){for(var b=0,c=i.length;c>b;b++)i[b]===a&&i.splice(b,1)},h}}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
*/
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
/*
!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
*/
/*!
* screenfull
* v2.0.0 - 2014-12-22
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var a="undefined"!=typeof module&&module.exports,b="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,c=function(){for(var a,b,c=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],d=0,e=c.length,f={};e>d;d++)if(a=c[d],a&&a[1]in document){for(d=0,b=a.length;b>d;d++)f[c[0][d]]=a[d];return f}return!1}(),d={request:function(a){var d=c.requestFullscreen;a=a||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[d]():a[d](b&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[c.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},raw:c};return c?(Object.defineProperties(d,{isFullscreen:{get:function(){return!!document[c.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[c.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[c.fullscreenEnabled]}}}),void(a?module.exports=d:window.screenfull=d)):void(a?module.exports=!1:window.screenfull=!1)}();


/*
*
*main program
*
*/
var currScrollPos = 0;
var ladderObjAmt = 0;
(function($) {
    $.JResponsive = function(options) {
        //-- 設定響應式開拉式內容 --////////////////////////////////////////////////////////////////
        //-- 參數設定:////////////////////////////////////////////////////////////////////////////
        //-- 在這裡您可以選擇要嵌入開拉式區塊的內容，您可以直接由原本網頁內容的物件直接複製，或自行寫網頁內容//
        /////////////////////////////////////////////////////////////////////////////////////////
        //using object to replace variable
        //here is the default value
        var defaults = {
            defaultResponse: true,
            setUILoadWidth: 800,
            printMediaSetupMode: false,
            modulePath: "",
            mobileSwitch: "body",
            viewPortSetup: "",
            res_langVarDefault: "",
            res_langVarEn: "",
            res_langVarTw: "/tw/",
            res_langArrayTw: "",
            res_langVarCn: "/cn/",
            res_langArrayCn: "",
            res_langVarAdd1: "",
            res_langArrayAdd1: "",
            res_langVarAdd2: "",
            res_langArrayAdd2: "",
            defaultLangMenuObj: "",
            customLangMenu: "<ul>" + '<li><a href="#">中文版</a></li>' + '<li><a href="#">ENGLISH</a></li>' + "</ul>",
            defaultMenuObj: "",
            customMenu: "",
            defaultSubMenuObj: "",
            customSubMenu: "",
            additionalPage: "",
            pannelPosition: "left",
            pannelStyle: '',
            menuCollapse:'',
            resPageLoader: false,
            resPageLoaderTigger: 800,
            responsiveSwitch: true,
            res_langSwitch: true,
            res_tabJumperSetting: {},
            res_mobileTopNavBtnSetup: {},
            additionalBtn: "",
            res_mobileBottomNavBtnSetup: {},
            additionalBottomBtn: "",
            scrollTop: true
        };

        options = $.extend(defaults, options);

        //預設全域的響應式視窗風格
        var pannelStyle = options.pannelStyle;

        //啟用伸縮選單的物件ID
        var menuCollapse = options.menuCollapse;

        //scroll to top plugin 控制
        var scroll_to_top = options.scrollTop;
        if (scroll_to_top)resScrolltotop.init();

        //列印模式測試
        var printMediaMode = options.printMediaSetupMode;
        var printMediaSetupMode = (printMediaMode)?"all":"print";

        //設定響應式介面載入尺寸
        var setUILoadWidth = options.setUILoadWidth;

        //設定響應式主導覽按鈕 (上方)
        var resMobileNavSetup = options.res_mobileTopNavBtnSetup;
        var resMenuState = true; //true使用:false不使用
        var resPrimM = true; //true使用主選單:false不使用
        var resMenuType = 'fixed'; //類型fixed永遠在上面,absolute只在頁面最上方
        var resMobileNavSetupWidth = 50;
        var resMobileNavSetupHeight = 50;
        var resMobileNavSetupMargin = 5;
        for (var data in resMobileNavSetup) {
            switch (data) {
              case "state":
                resMenuState = resMobileNavSetup[data];
              break;
              case "type":
                resMenuType = resMobileNavSetup[data];
              break;
              case "primary":
                resPrimM = resMobileNavSetup[data];
              break;
              case "width":
                resMobileNavSetupWidth = resMobileNavSetup[data];
                break;

              case "height":
                resMobileNavSetupHeight = resMobileNavSetup[data];
                break;

              case "margin":
                resMobileNavSetupMargin = resMobileNavSetup[data];
                break;
            }
        }
        var resMarginTop = resMenuState == true ? "margin-top:"+resMobileNavSetupHeight+"px;" : "";

        //設定響應式主導覽按鈕 (下方)
        var resBottomMobileNavSetup = options.res_mobileBottomNavBtnSetup;
        var resBottomMenuState = false; //true使用:false不使用
        var resBottomPrimM = true; //true使用主選單:false不使用
        var resBottomMenuType = 'fixed'; //類型fixed永遠在上面,absolute只在頁面最上方
        var resBottomMobileNavSetupWidth = 50;
        var resBottomMobileNavSetupHeight = 50;
        var resBottomMobileNavSetupMargin = 5;
        for (var data in resBottomMobileNavSetup) {
            switch (data) {
              case "state":
                resBottomMenuState = resBottomMobileNavSetup[data];
              break;
              case "type":
                resBottomMenuType = resBottomMobileNavSetup[data];
              break;
              case "primary":
                resBottomPrimM = resBottomMobileNavSetup[data];
              break;
              case "width":
                resBottomMobileNavSetupWidth = resBottomMobileNavSetup[data];
                break;

              case "height":
                resBottomMobileNavSetupHeight = resBottomMobileNavSetup[data];
                break;

              case "margin":
                resBottomMobileNavSetupMargin = resBottomMobileNavSetup[data];
                break;
            }
        }
        var resMarginBottom = resBottomMenuState == true ? "margin-bottom:"+(resBottomMobileNavSetupHeight+20)+"px;" : "";

        //響應式預設值 
        //開啟:true 
        //關閉:false
        var defaultResponse = (options.defaultResponse)?"true":"false";

        var responsiveSwitch = options.responsiveSwitch ? "" : "style='display:none'";
        //響應式開關
        //模組的預設路徑
        var path = $.JRes_modulePath();
        var modulePath = options.modulePath == "" ? path : options.modulePath;
        //選單位置
        var pannelPosition = fnCheckPosition(options.pannelPosition, "position");
        var flipDirection = fnCheckPosition(options.pannelPosition, "direction");
        //擴充響應式頁面
        var additionalPageArray = options.additionalPage;
        var countAddPage = additionalPageArray.length;
        var resPageTitleMargin = Math.round((resMobileNavSetupHeight/2)/3); //resPageTitle間距
        var resPageTitleHeight = resMobileNavSetupHeight - (resPageTitleMargin * 2); //resPageTitle高度
        var additionalPageContent = '<div id="resPageLoader" class="resFlipPage resFlipPageR"><div class="menuList" style="' + resMarginTop + resMarginBottom + '">' + 
                                    '<div style="height:' + resMobileNavSetupHeight + 'px;" class="resPageController">' + 
                                    '<div style="width:' + resMobileNavSetupWidth + 'px;height:' + resMobileNavSetupHeight + 'px;" class="resAddPageBackIcon" onclick="JResPageControl({id:\'#resPageLoader\',action:\'back\'});return false;"></div>' + 
                                    '<div style="height:' + resPageTitleHeight + 'px;margin:' + resPageTitleMargin + 'px 0;" class="resAddPageTitle">Res Loader</div></div>'+
                                    '<div style="height:' + resBottomMobileNavSetupHeight + 'px;" class="resPageControllerBottom"><div style="width:' + resBottomMobileNavSetupWidth + 'px;height:' + resBottomMobileNavSetupHeight + 'px;" id="closeAllresFlipPage" onclick="JResPageControl({id:\'\',action:\'closeAll\'});return false;"></div></div>' +
                                    '<div class="resAddPageContent"><div class="resAddPageContentMain">' + 
                                    '<div id="resPageLoad_loading_icon"></div>' + 
                                    '<div id="resPageLoad_area"></div>' + 
                                    '</div></div></div></div>';
        if (countAddPage > 0) {
            for (var i = 0; i < countAddPage; i++) {
                var addPagePosition = "";
                var addPageflipDirection = "";
                if (additionalPageArray != undefined) {
                    addPagePosition = fnCheckPosition(additionalPageArray[i][1] + "_page", "position");
                    addPageflipDirection = fnCheckPosition(additionalPageArray[i][1] + "_page", "direction");
                } else {
                    addPagePosition = pannelPosition;
                    addPageflipDirection = flipDirection;
                }
                var addPageContent = additionalPageArray[i][3] != undefined ? additionalPageArray[i][3] : "";
                var addPageID = additionalPageArray[i][0] + "_pageContent";
                var relateBtn = "";
                if ($.trim(additionalPageArray[i][4]) != "") {
                    var relateID = additionalPageArray[i][4].indexOf("_pageContent") == -1 ? additionalPageArray[i][4] + "_pageContent" : additionalPageArray[i][4];
                    relateBtn = '<div style="width:' + resMobileNavSetupWidth + 'px;height:' + resMobileNavSetupHeight + 'px;" class="resAddPageNextIcon" onclick="JResPageControl({id:\'#' + relateID + '\',action:\'open\'});return false;"></div>';
                }
                additionalPageContent += '<div id="' + addPageID + '" class="resFlipPage ' + addPagePosition + '"><div class="menuList" style="' + resMarginTop + resMarginBottom + '">' +
                                         '<div style="height:' + resMobileNavSetupHeight + 'px;" class="resPageController">' + 
                                            '<div style="width:' + resMobileNavSetupWidth + 'px;height:' + resMobileNavSetupHeight + 'px;" class="resAddPageBackIcon" onclick="JResPageControl({id:\'#' + addPageID + '\',action:\'back\'});return false;"></div>' + 
                                            '<div style="height:' + resPageTitleHeight + 'px;margin:' + resPageTitleMargin + 'px 0;" class="resAddPageTitle">' + additionalPageArray[i][2] + "</div>" + 
                                            relateBtn + 
                                         '</div>'+
                                         '<div style="height:' + resBottomMobileNavSetupHeight + 'px;" class="resPageControllerBottom"><div style="width:' + resBottomMobileNavSetupWidth + 'px;height:' + resBottomMobileNavSetupHeight + 'px;" id="closeAllresFlipPage" onclick="JResPageControl({id:\'\',action:\'closeAll\'});return false;"></div></div>' +
                                         '<div class="resAddPageContent"><div class="resAddPageContentMain">' + 
                                            addPageContent + 
                                         "<div class='clear'></div></div></div></div></div>";
            }
        }
        //擴充上選單按鈕
        var additionalBtnArray = options.additionalBtn;
        var countAddBtn = additionalBtnArray.length;
        var additionalBtn = "";
        var btnTarget = "";
        var additionalPannelContent = "";
        var mobile_nav_BtnAmt = 0;
        //若主選單按鈕有啟用在上選單
        if (resPrimM) {
            additionalBtn += '<li id="menu_btn" style="width:' + resMobileNavSetupWidth + "px;height:" + resMobileNavSetupHeight + "px;margin-right:" + resMobileNavSetupMargin + 'px"><a href="#" style="width:' + resMobileNavSetupWidth + "px;height:" + resMobileNavSetupHeight + 'px;"></a></li>';
            mobile_nav_BtnAmt = 1;
        }
        
        if (countAddBtn > 0) {
            for (var i = 0; i < countAddBtn; i++) {
                var btnId = additionalBtnArray[i][0] != undefined ? additionalBtnArray[i][0] : "";
                var btnLink = additionalBtnArray[i][1] != undefined ? additionalBtnArray[i][1] : "#";
                var btnText = additionalBtnArray[i][2] != undefined ? additionalBtnArray[i][2] : "";
                var showBtn = true;
                switch (additionalBtnArray[i][3]) {
                  case "pannel":
                    //開啟響應式視窗
                    var addPanelPosition = "";
                    var addflipDirection = "";
                    if (additionalBtnArray[i][4][0] != undefined) {
                        addPanelPosition = fnCheckPosition(additionalBtnArray[i][4][0], "position");
                        addflipDirection = fnCheckPosition(additionalBtnArray[i][4][0], "direction");
                    } else {
                        addPanelPosition = pannelPosition;
                        addflipDirection = flipDirection;
                    }

                    //pannel風格
                    if (additionalBtnArray[i][4][2] != undefined) {
                        addPannelStyle = additionalBtnArray[i][4][2];
                    }else{
                        addPannelStyle = pannelStyle;
                    }

                    var addPanelContent = additionalBtnArray[i][4][1] != undefined ? additionalBtnArray[i][4][1] : "";
                    additionalPannelContent += '<div id="' + btnId + '_pannelContent" class="flipContent ' + addPannelStyle + ' ' + addPanelPosition + '"><div class="menuList" style="' + resMarginTop + resMarginBottom + '">' + addPanelContent + "<div class='clear'></div></div></div>";
                    btnTarget = " onclick=\"JResMobileTopNav({btnId:'#" + btnId + "',contentId:'#" + btnId + "_pannelContent',position:'" + addflipDirection + "',resetEvt:false});return false;\"";
                    //trim whitespace from pannel content, then check if it is empty return value false to showBtn
                    if ($.trim(addPanelContent) == "") {
                        showBtn = false;
                    }
                    break;

                  case "tab":
                    //移動至頁面區塊按鈕
                    btnTarget = " class='resTabJumper' ";
                    //檢查tab目標連結是否含有路徑
                    var targetURL = btnLink;
                    if (targetURL.split("#")[0] == undefined || targetURL.split("#")[0] == "") {
                        //若無路徑檢查tab目標物件是否存在
                        if ($(targetURL).length == 0){
                            showBtn = false;
                        }
                    }
                    break;

                    case "page":
                        //開啟響應式頁面
                        btnTarget = " class='resPageBtn' toggle='"+btnLink+"' ";
                    break;

                    case "loader":
                        //開啟響應式載入頁面
                        btnTarget = " class='resPageLoaderBtn' ";
                        var addLoaderSetup = additionalBtnArray[i][4] != undefined ? additionalBtnArray[i][4] : "";
                        //將其餘參數寫入
                        if (addLoaderSetup != "") {
                            for (var data in addLoaderSetup) {
                                btnTarget += data + "='" + addLoaderSetup[data] + "' ";
                            }
                        }

                    break;


                  case undefined:
                    btnTarget = "";
                    break;

                  default:
                    btnTarget = " target='" + additionalBtnArray[i][3] + "'";
                    break;
                }
                //showBtn value with false than don't show the button
                if (showBtn) {
                    additionalBtn += '<li id="' + btnId + '" style="width:' + resMobileNavSetupWidth + "px;height:" + resMobileNavSetupHeight + "px;margin-right:" + resMobileNavSetupMargin + 'px"><a href="' + btnLink + '" ' + btnTarget + 'style="width:' + resMobileNavSetupWidth + "px;height:" + resMobileNavSetupHeight + 'px;">' + btnText + '</a></li>';
                }
                mobile_nav_BtnAmt++;
            }
        }
        //擴充下選單按鈕
        var additionalBottomBtnArray = options.additionalBottomBtn;
        var countAddBottomBtn = additionalBottomBtnArray.length;
        var additionalBottomBtn = "";
        var BottombtnTarget = "";
        var additionalBottomPannelContent = "";
        var mobile_nav_BottomBtnAmt = 0;
        //若主選單按鈕有啟用在下選單
        if (resBottomPrimM) {
            additionalBottomBtn += '<li id="menu_btn_bottom" style="width:' + resBottomMobileNavSetupWidth + "px;height:" + resBottomMobileNavSetupHeight + "px;margin-right:" + resBottomMobileNavSetupMargin + 'px"><a href="#" style="width:' + resBottomMobileNavSetupWidth + "px;height:" + resBottomMobileNavSetupHeight + 'px;"></a></li>';
            mobile_nav_BottomBtnAmt = 1;
        }

        if (countAddBottomBtn > 0) {
            for (var i = 0; i < countAddBottomBtn; i++) {
                var btnId = additionalBottomBtnArray[i][0] != undefined ? additionalBottomBtnArray[i][0] : "";
                var btnLink = additionalBottomBtnArray[i][1] != undefined ? additionalBottomBtnArray[i][1] : "#";
                var btnText = additionalBottomBtnArray[i][2] != undefined ? additionalBottomBtnArray[i][2] : "";
                var showBtn = true;
                switch (additionalBottomBtnArray[i][3]) {
                  case "pannel":
                    //開啟響應式視窗
                    var addPanelPosition = "";
                    var addflipDirection = "";
                    if (additionalBottomBtnArray[i][4][0] != undefined) {
                        addPanelPosition = fnCheckPosition(additionalBottomBtnArray[i][4][0], "position");
                        addflipDirection = fnCheckPosition(additionalBottomBtnArray[i][4][0], "direction");
                    } else {
                        addPanelPosition = pannelPosition;
                        addflipDirection = flipDirection;
                    }

                    //pannel風格
                    if (additionalBtnArray[i][4][2] != undefined) {
                        addPannelStyle = additionalBtnArray[i][4][2];
                    }else{
                        addPannelStyle = pannelStyle;
                    }

                    var addPanelContent = additionalBottomBtnArray[i][4][1] != undefined ? additionalBottomBtnArray[i][4][1] : "";
                    additionalBottomPannelContent += '<div id="' + btnId + '_pannelContent" class="flipContent ' + addPannelStyle + ' ' + addPanelPosition + '"><div class="menuList" style="' + resMarginTop + resMarginBottom + '">' + addPanelContent + "<div class='clear'></div></div></div>";
                    BottombtnTarget = " onclick=\"JResMobileTopNav({btnId:'#" + btnId + "',contentId:'#" + btnId + "_pannelContent',position:'" + addflipDirection + "',resetEvt:false});return false;\"";
                    //trim whitespace from pannel content, then check if it is empty return value false to showBtn
                    if ($.trim(addPanelContent) == "") {
                        showBtn = false;
                    }
                    break;

                  case "tab":
                    //移動至頁面區塊按鈕
                    BottombtnTarget = " class='resTabJumper' ";
                    //檢查tab目標連結是否含有路徑
                    var targetURL = btnLink;
                    if (targetURL.split("#")[0] == undefined || targetURL.split("#")[0] == "") {
                        //若無路徑檢查tab目標物件是否存在
                        if ($(targetURL).length == 0){
                            showBtn = false;
                        }
                    }
                    break;

                    case "page":
                        //開啟響應式頁面
                        btnTarget = " class='resPageBtn' toggle='"+btnLink+"' ";
                    break;

                    case "loader":
                        //開啟響應式載入頁面
                        btnTarget = " class='resPageLoaderBtn' ";
                        var addLoaderSetup = additionalBtnArray[i][4] != undefined ? additionalBtnArray[i][4] : "";
                        //將其餘參數寫入
                        if (addLoaderSetup != "") {
                            for (var data in addLoaderSetup) {
                                btnTarget += data + "='" + addLoaderSetup[data] + "' ";
                            }
                        }

                    break;

                  case undefined:
                    BottombtnTarget = "";
                    break;

                  default:
                    BottombtnTarget = " target='" + additionalBottomBtnArray[i][3] + "'";
                    break;
                }
                //showBtn value with false than don't show the button
                if (showBtn) {
                    additionalBottomBtn += '<li id="' + btnId + '" style="width:' + resBottomMobileNavSetupWidth + "px;height:" + resBottomMobileNavSetupHeight + "px;margin-right:" + resBottomMobileNavSetupMargin + 'px"><a href="' + btnLink + '" ' + BottombtnTarget + 'style="width:' + resBottomMobileNavSetupWidth + "px;height:" + resBottomMobileNavSetupHeight + 'px;">' + btnText + "</a></li>";
                }
                mobile_nav_BottomBtnAmt++;
            }
        }
        //本地使用
        var noServer = true;
        if (window.location.protocol.match(/(http|https)/)) {
            var noServer = false;
        }
        //響應式開關
        var mobileSwitch = options.mobileSwitch;
        //響應式viewport其餘參數
        var viewPortSetup = options.viewPortSetup;
        //語言選單
        //res_langVarDefault: 網站預設語系 tw:繁體 cn:簡體 預設:英文
        //res_langVarTw: 繁中版判斷值
        //res_langVarCn: 簡中版判斷值
        //res_langVarAdd1: 外加語言1判斷值
        //res_langVarAdd2: 外加語言2判斷值
        //res_langArrayTw: 繁中翻譯字串
        //res_langArrayCn: 簡中翻譯字串
        //res_langArrayAdd1: 外加語言1翻譯字串
        //res_langArrayAdd2: 外加語言2翻譯字串
        //defaultLangMenuObj: 原網頁內容的語言選單id或class
        //customLangMenu: 客製化的語言選單內容
        var res_langSwitch = options.res_langSwitch ? "" : "style='display:none'";
        //語言選單開關
        var res_langVarDefault = options.res_langVarDefault.toLowerCase();
        var res_langVarEn = options.res_langVarEn;
        //繁中版
        var res_langVarTw = options.res_langVarTw.toLowerCase();
        var res_langArrayTw = [ "language:語系", "menu:主選單", "mobile:切換手機版", "desktop:切換電腦版" ];
        var res_langArrayTw_extend = options.res_langArrayTw;
        if (res_langArrayTw_extend.length > 0) {
            for (var i = 0; i < res_langArrayTw_extend.length; i++) {
                res_langArrayTw.push(res_langArrayTw_extend[i]);
            }
        }
        //簡中版
        var res_langVarCn = options.res_langVarCn.toLowerCase();
        var res_langArrayCn = [ "language:语系", "menu:主选单", "mobile:切换手机版", "desktop:切换桌面版" ];
        var res_langArrayCn_extend = options.res_langArrayCn;
        if (res_langArrayCn_extend.length > 0) {
            for (var i = 0; i < res_langArrayCn_extend.length; i++) {
                res_langArrayCn.push(res_langArrayCn_extend[i]);
            }
        }
        //外加語言1
        var res_langVarAdd1 = options.res_langVarAdd1.toLowerCase();
        var res_langArrayAdd1 = [ "language:language", "menu:menu", "mobile:mobile", "desktop:desktop" ];
        var res_langArrayAdd1_extend = options.res_langArrayAdd1;
        if (res_langArrayAdd1_extend.length > 0) {
            for (var i = 0; i < res_langArrayAdd1_extend.length; i++) {
                res_langArrayAdd1.push(res_langArrayAdd1_extend[i]);
            }
        }
        //外加語言2
        var res_langVarAdd2 = options.res_langVarAdd2.toLowerCase();
        var res_langArrayAdd2 = [ "language:language", "menu:menu", "mobile:mobile", "desktop:desktop" ];
        var res_langArrayAdd2_extend = options.res_langArrayAdd2;
        if (res_langArrayAdd2_extend.length > 0) {
            for (var i = 0; i < res_langArrayAdd2_extend.length; i++) {
                res_langArrayAdd2.push(res_langArrayAdd2_extend[i]);
            }
        }
        var defaultLangMenuObj = options.defaultLangMenuObj;
        var customLangMenu = options.customLangMenu;
        //主選單
        //defaultMenuObj: 原網頁內容的主選單id或class
        //customMenu: 客製化的主選單內容
        var defaultMenuObj = options.defaultMenuObj;
        var customMenu = options.customMenu;
        //其他選單或內容
        //defaultSubMenuObj: 原網頁內容的id或class
        //customSubMenu: 客製化的內容
        var defaultSubMenuObj = options.defaultSubMenuObj;
        //語言選單
        var customSubMenu = options.customSubMenu;
        //是否要使用頁面載入按鈕
        var resPageLoader = options.resPageLoader;
        var resPageLoaderTigger = options.resPageLoaderTigger;
        //設定標籤定位移動參數
        var resTabSetup = options.res_tabJumperSetting;
        var restabJumperState = true;
        var restabJumperSpeed = 2e3;
        for (var data in resTabSetup) {
            switch (data) {
              case "state":
                restabJumperState = resTabSetup[data];
                break;

              case "speed":
                restabJumperSpeed = resTabSetup[data];
                break;
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////
        //-- 設定拉開內容判斷式 -- //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////
        //language menu
        var language = $(defaultLangMenuObj).length > 0 ? $(defaultLangMenuObj).prop("tagName") != "UL" ? $(defaultLangMenuObj).html() : "<ul>" + $(defaultLangMenuObj).html() + "</ul>" : customLangMenu;
        //primary menu
        var primaryMenu = $(defaultMenuObj).length > 0 ? $(defaultMenuObj).prop("tagName") != "UL" ? $(defaultMenuObj).html() : "<ul>" + $(defaultMenuObj).html() + "</ul>" : customMenu;
        //submenu
        var subMenu = "";
        var countDefaultSubMenuObj = defaultSubMenuObj.length;
        if (countDefaultSubMenuObj > 0) {
            for (var i = 0; i < countDefaultSubMenuObj; i++) {
                if ($(defaultSubMenuObj[i]).length > 0) {
                    if ($(defaultSubMenuObj[i][1]).length > 0) {
                        subMenu += '<div class="resContent_' + i + '">';
                        subMenu += defaultSubMenuObj[i][0] != "" ? "<h1>" + fnTranslate(defaultSubMenuObj[i][0]) + "</h1>" : "";
                        subMenu += '<div class="resContent">';
                        subMenu += $(defaultSubMenuObj[i][1]).prop("tagName") != "UL" ? $(defaultSubMenuObj[i][1]).html() : "<ul>" + $(defaultSubMenuObj[i][1]).html() + "</ul>";
                        subMenu += "</div></div>";
                    }
                }
            }
        }
        subMenu += customSubMenu;
        //--if response is on -->
        //response cookie
        //if cookie is not set yet, set default response on
        if ($.JRes_getCookie() == "") {
            document.cookie = $.JRes_modulePath() + "_response=" + defaultResponse;
        }
        //加入行動版ICON
        $("head").prepend('<link href="' + modulePath + 'response/_img/app_ico.png" rel="apple-touch-icon">');
        //加入響應式預設樣式
        //fnLoadCSS('response_default',modulePath + 'response/_css/default.css','all');
        //$("head").append('<link id="response_default" rel="stylesheet" type="text/css" media="all" href="' + modulePath + 'response/_css/default.css"/>');
        //將每組row之後都加上clear
        $(".resRow").append("<div class='clear'></div>");
        
        //若不是IE9以下才進行響應式設定
        if (!$.JRes_isLtIE9()){
            //check the response cookie
            if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
                //-- add response meta --
                $("head").prepend('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0' + viewPortSetup + '">');
                //fnLoadCSS('response',modulePath + 'response/_css/response.css','all');
                //fnLoadCSS('response_custom',modulePath + 'response/_css/custom.css','all');
                //$("head").append('<link id="response" rel="stylesheet" type="text/css" media="all" href="' + modulePath + 'response/_css/response.css"/><link id="response_custom" rel="stylesheet" type="text/css" media="all" href="' + modulePath + 'response/_css/custom.css"/>');
                //var swapBtn = (noServer== false)?'<li id="swap_btn" '+responsiveSwitch+'><a href="#"></a></li>':'';
                var swapBtn = noServer == false ? '<div id="resSwap" ' + responsiveSwitch + "><span>" + fnTranslate("mobile") + '</span> <span class="split">|</span> <a id="swap_btn">' + fnTranslate("desktop") + "</a><div class='clear'></div></div>" : "";
                //-- loader --
                if (resPageLoader) {
                    //如果resPageLoaderTigger設定always，則總是使用
                    if (resPageLoaderTigger == "always") {
                        $("body").append('<div id="resLoader"></div>');
                        $(window).load(function() {
                            setTimeout("JResLoader({dom:'#resLoader'})", 800);
                        });
                    } else {
                        //如果resPageLoaderTigger設定在某一尺寸下才使用
                        if ($(window).width() <= resPageLoaderTigger) {
                            $("body").append('<div id="resLoader"></div>');
                            $(window).load(function() {
                                setTimeout("JResLoader({dom:'#resLoader'})", 800);
                            });
                        }
                    }
                }

                //-- 計算resMainWrap css設定
                var resMainWrap_miniHight = $(window).height(); //min-height
                var body_margin_top = ''; //padding-top
                var body_margin_bottom = ''; //padding-bottom

                //-- 計算導覽按鈕群長度 (上方) --
                var mobile_nav_btn_width = mobile_nav_BtnAmt * (resMobileNavSetupWidth + resMobileNavSetupMargin);
                var mobile_nav = resMenuState == true ? ' style="position:'+resMenuType+';width:' + $(window).width() + "px;height:" + resMobileNavSetupHeight + 'px;" ' : ' resState="notUsed" style="display:none" ';
                var mobile_nav_width = $(window).width() > mobile_nav_btn_width ? ' style="width:' + $(window).width() + 'px;" ' : ' style="width:' + mobile_nav_btn_width + 'px;" ';
                if (resMenuState == true) {
                    body_margin_top = 'padding-top:' + resMobileNavSetupHeight + 'px;'; //上選單有使用進行resMainWrap padding-top設定
                    resMainWrap_miniHight -= resMobileNavSetupHeight; //如果有padding則需要把resMainWrap min-height相對減去
                }

                //-- 計算導覽按鈕群長度 (下方) --
                var mobile_nav_btn_width_bottom = mobile_nav_BottomBtnAmt * (resBottomMobileNavSetupWidth + resBottomMobileNavSetupMargin);
                var mobile_nav_bottom = resBottomMenuState == true ? ' style="position:'+resBottomMenuType+';width:' + $(window).width() + "px;height:" + resBottomMobileNavSetupHeight + 'px;" ' : ' resState="notUsed" style="display:none" ';
                var mobile_nav_width_bottom = $(window).width() > mobile_nav_btn_width_bottom ? ' style="width:' + $(window).width() + 'px;" ' : ' style="width:' + mobile_nav_btn_width_bottom + 'px;" ';
                var body_margin_bottom = (resBottomMenuState == true) ? 'padding-bottom:' + resBottomMobileNavSetupHeight + 'px;' : ''; //下選單有使用進行padding-bottom
                if (resBottomMenuState == true) {
                    body_margin_bottom = 'padding-bottom:' + resBottomMobileNavSetupHeight + 'px;'; //下選單有使用進行resMainWrap padding-bottom設定
                    resMainWrap_miniHight -= resBottomMobileNavSetupHeight; //如果有padding則需要把resMainWrap min-height相對減去
                }

                //螢幕在800以下進行選單物件狀態偵測
                var body_margin = $(window).width() <= setUILoadWidth ? ' style="' + body_margin_top + body_margin_bottom + '" ' : '';

                //-- mobile menu interface --
                $("body").wrapInner('<div id="resMainWrap" '+body_margin+'></div>');
                $("body").append('<div id="mobile_nav" ' + mobile_nav + "><ul " + mobile_nav_width + ">" + additionalBtn + "</ul></div>" + '<div id="mobile_nav_bottom" ' + mobile_nav_bottom + "><ul " + mobile_nav_width_bottom + ">" + additionalBottomBtn + "</ul></div>"  + '<div id="mobile_nav_content" class="flipContent ' + pannelStyle + ' ' + pannelPosition + '"><div class="menuList" style="' + resMarginTop + resMarginBottom + '">' + swapBtn + '<div id="reslang" ' + res_langSwitch + ">" + "<h1>" + fnTranslate("language") + "</h1>" + language + "<div class='clear'></div></div>" + '<div id="resPrimery">' + "<h1>" + fnTranslate("menu") + "</h1>" + primaryMenu + "<div class='clear'></div></div>" + subMenu + "<div class='clear'></div></div></div>" + additionalPannelContent + additionalBottomPannelContent + additionalPageContent);
                //上下區主選單控制
                $("#menu_btn,#menu_btn_bottom").click(function() {
                    JResMobileTopNav({
                        btnId: "#menu_btn,#menu_btn_bottom",
                        contentId: "#mobile_nav_content",
                        position: flipDirection,
                        resetEvt: false
                    });
                    return false;
                });
                //-- content close mask --
                $("body").append('<div id="resContentMask"></div>');
                //-- give content container a mini-height
                $("#resMainWrap").css("min-height", resMainWrap_miniHight + "px");

                //使用伸縮選單的物件ID
                if (menuCollapse != ""){
                    $(menuCollapse).JResMenu();
                }

            } else {
                //切換為桌面版
                $(mobileSwitch).append('<div id="resSwapDesk" class="swap_btn_desktop_wrap" ' + responsiveSwitch + '><div class="swap_btn_desktop"><span>' + fnTranslate("desktop") + '</span> | <a id="swap_btn" href="#">' + fnTranslate("mobile") + "</a></div></div>");
            }
        }
        //--add print media style sheet --
        //fnLoadCSS('resprint',modulePath + 'response/_css/print.css',printMediaSetupMode);
        //$("head").append('<link id="resprint" rel="stylesheet" type="text/css" media="'+printMediaSetupMode+'" href="' + modulePath + 'response/_css/print.css"/>');
        //加入響應式按鈕
        //$(".resBtn").each(function() {
            $('body').on('click','.resBtn',function(){
            //$(this).click(function() {
                var toggle = $(this).attr("toggle");
                var addBtn = options.additionalBtn;
                var countAddBtn = addBtn.length;
                for (var i = 0; i < countAddBtn; i++) {
                    if (toggle == addBtn[i][0]) {
                        var pos = addBtn[i][4][0];
                    }
                }
                JResMobileTopNav({
                    btnId: "#" + toggle,
                    contentId: "#" + toggle + "_pannelContent",
                    position: pos,
                    resetEvt: false
                });
                return false;
            });
        //});
        //加入響應式頁面按鈕
        //$(".resPageBtn").each(function() {
            //$(this).click(function() {
            $('body').on('click','.resPageBtn',function(){
                var toggle = $(this).attr("toggle");
                JResPageControl({
                    id: "#" + toggle + "_pageContent"
                });
                return false;
            });
        //});
        //加入響應式Ajax載入頁面按鈕
        $("#resPageLoad_loading_icon").hide();
        $("#resPageLoader").ajaxStart(function() {
            $("#resPageLoad_loading_icon").show();
        }).ajaxComplete(function() {
            setTimeout("JResLoader({dom:'#resPageLoad_loading_icon'})", 800);
        });
        //resPageLoaderBtn
        //$(".resPageLoaderBtn").each(function() {
            //$(this).click(function() {
            $('body').on('click','.resPageLoaderBtn',function(){
                //判斷loader類型
                //查看是否總是使用響應視窗
                if ($(this).attr("tigger") == "" || $(this).attr("tigger") == undefined) {
                    //預設值在800以內寬度再使用響應視窗
                    if ($(window).width() <= setUILoadWidth) {
                        JResPageControl({
                            id: "#resPageLoader"
                        });
                        var pageTitle = $(this).attr("title") == "" || $(this).attr("title") == undefined ? "" : $(this).attr("title");
                        var toggleParam = ($(this).attr("toggleParam") == undefined || $(this).attr("toggleParam") == "") ? "" : $(this).attr("toggleParam");
                        $("#resPageLoader .resAddPageTitle").text(pageTitle);
                        if ($(this).attr("toggle") == "" || $(this).attr("toggle") == undefined || $(this).attr("toggle") == "iframe") {
                            //iframe loader
                            $("#resPageLoad_loading_icon").show();
                            // show Loading Div
                            setTimeout("JResLoader({dom:'#resPageLoad_loading_icon'})", 800);
                            var url = $(this).attr("href");
                            var height = $(window).height() - 120;
                            $("#resPageLoad_area").html('<iframe id="resIframeLoader" style="display:block;width:100%;height:' + height + 'px;border:0;" src="' + url + '" '+toggleParam+'>');
                        } else {
                            //ajax loader
                            if ($(this).attr("toggle") == "ajax") {
                                var url = $(this).attr("href");
                            } else {
                                if ($(this).attr("toggleDom") == "" || $(this).attr("toggleDom") == undefined) {
                                    var url = $(this).attr("href");
                                } else {
                                    var url = $(this).attr("href") + " " + $(this).attr("toggleDom");
                                }
                            }
                            $("#resPageLoad_area").load(url);
                        }
                        return false;
                    } else {
                        return true;
                    }
                } else if ($(this).attr("tigger") == "always") {
                    JResPageControl({
                        id: "#resPageLoader"
                    });
                    var pageTitle = $(this).attr("title") == "" || $(this).attr("title") == undefined ? "" : $(this).attr("title");
                    var toggleParam = ($(this).attr("toggleParam") == undefined || $(this).attr("toggleParam") == "") ? "" : $(this).attr("toggleParam");
                    $("#resPageLoader .resAddPageTitle").text(pageTitle);
                    if ($(this).attr("toggle") == "" || $(this).attr("toggle") == undefined || $(this).attr("toggle") == "iframe") {
                        //iframe loader
                        $("#resPageLoad_loading_icon").show();
                        // show Loading Div
                        setTimeout("JResLoader({dom:'#resPageLoad_loading_icon'})", 800);
                        var url = $(this).attr("href");
                        var height = $(window).height() - 120;
                        $("#resPageLoad_area").html('<iframe id="resIframeLoader" style="display:block;width:100%;height:' + height + 'px;border:0;" src="' + url + '" '+toggleParam+'>');
                    } else {
                        //ajax loader
                        if ($(this).attr("toggle") == "ajax") {
                            var url = $(this).attr("href");
                        } else {
                            if ($(this).attr("toggleDom") == "" || $(this).attr("toggleDom") == undefined) {
                                var url = $(this).attr("href");
                            } else {
                                var url = $(this).attr("href") + " " + $(this).attr("toggleDom");
                            }
                        }
                        $("#resPageLoad_area").load(url);
                    }
                    return false;
                }
            });
        //});
        //若url有#則使用定位移動函式 (restabJumperState:true使用/false停用, restabJumperSpeed:移動速度)
        if (restabJumperState && window.location.hash) {
            var targetPosID = $(window.location.hash);
            var speed = restabJumperSpeed;
            var paddingAmt = 0;
            //檢查此頁面是否有此區塊物件ID
            if ($(targetPosID).length > 0) {
                if (resMenuState === true && resMenuType === "fixed" && $(window).width() <= setUILoadWidth) {
                    paddingAmt = resMobileNavSetupHeight;
                }
                fnTabJumper(targetPosID, speed, paddingAmt);
            }
        }
        //resTabJumper
        if (restabJumperState) {
            //$(".resTabJumper").each(function() {
            $('body').on('click','.resTabJumper',function(){
                //$(this).click(function() {
                    var targetURL = $(this).attr("href");
                    if (targetURL.split("#")[0] == undefined || targetURL.split("#")[0] == "") {
                        var targetPosID = "#" + targetURL.split("#")[1];
                        var speed = restabJumperSpeed;
                        var paddingAmt = 0;
                        //檢查此頁面是否有此區塊物件ID
                        if ($(targetPosID).length > 0) {
                            if (resMenuState === true && resMenuType === "fixed" && $(window).width() <= setUILoadWidth) {
                                paddingAmt = resMobileNavSetupHeight;
                            }
                            fnTabJumper(targetPosID, speed, paddingAmt);
                        }
                        return false;
                    } else {
                        return true;
                    }
                //});
            });

            //在相對高度的jumper按鈕加入jumperActive class
            var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "scroll"; //FF doesn't recognize mousewheel as of FF3.x
            $(window).on(mousewheelevt, function(e){
                var winScroll = $(this).scrollTop();
                //將頁面中聯結有含此ID的連結加入active
                $(".resTabJumper").each(function(){
                    var targetURL = $(this).attr("href");
                    if (targetURL.split("#")[0] == undefined || targetURL.split("#")[0] == "") {
                        var targetPosID = "#" + targetURL.split("#")[1];
                        var tragglePos = $(targetPosID).position().top;
                        var tragglePosMax = tragglePos+$(targetPosID).height();
                        if(winScroll >= tragglePos && winScroll < tragglePosMax){
                            $(this).addClass("jumperActive");
                        }else{
                            $(this).removeClass("jumperActive");
                        }
                    }
                });
            })
        }

        //reset cookie
        $("#swap_btn").click(function() {
            fnSwap(document.cookie);
            window.location.reload();
            return false;
        });
        //close all pannel if click resContentMask area
        $("#resContentMask").click(function() {
            JResMobileTopNav({
                resetEvt: true
            });
        });
        $(window).scroll(function() {
            JResMobileTopNav({
                resetEvt: true
            });
        });
        //swap version
        function fnTabJumper(targetPosID, speed, paddingAmt) {
            var paddingAmt = paddingAmt + 10; //多10px
            $("html, body").animate({
                scrollTop: $(targetPosID).offset().top - paddingAmt
            }, speed);
        }
        //check pannel direction (針對響應式頁面及響應式按鈕)
        function fnCheckPosition(chkPos, returnVar) {
            //alert(chkPos);
            switch (chkPos) {
              case "right":
                position = "flipContentR";
                direction = "right";
                break;

              case "top":
                position = "flipContentT";
                direction = "top";
                break;

              case "top_small":
                position = "flipContentTS";
                direction = "top_small";
                break;

              case "left_under":
                position = "flipContentLU";
                direction = "left_under";
                break;

              case "right_under":
                position = "flipContentRU";
                direction = "right_under";
                break;

              case "right_page":
                position = "resFlipPageR";
                direction = "right";
                break;

              case "left_page":
                position = "resFlipPageL";
                direction = "left";
                break;

              case "top_page":
                position = "resFlipPageT";
                direction = "top";
                break;

              default:
                position = "flipContentL";
                direction = "left";
                break;
            }
            switch (returnVar) {
              case "position":
                return position;
                break;

              default:
                return direction;
                break;
            }
        }
        //swap version
        function fnSwap(responseCookie) {
            var getHost = $.JRes_modulePath();
            if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
                document.cookie = getHost + "_response=false";
            } else {
                document.cookie = getHost + "_response=true";
            }
        }
        //translate language
        function fnTranslate(str) {
            var transStr = "";
            var checkString = window.location.href.toLowerCase();
            if (res_langVarTw != "" && checkString.indexOf(res_langVarTw) != -1) {
                transStr = fnReturnTranslate(res_langArrayTw, str);
            } else if (res_langVarCn != "" && checkString.indexOf(res_langVarCn) != -1) {
                transStr = fnReturnTranslate(res_langArrayCn, str);
            } else if (res_langVarAdd1 != "" && checkString.indexOf(res_langVarAdd1) != -1) {
                transStr = fnReturnTranslate(res_langArrayAdd1, str);
            } else if (res_langVarAdd2 != "" && checkString.indexOf(res_langVarAdd2) != -1) {
                transStr = fnReturnTranslate(res_langArrayAdd2, str);
            } else if (res_langVarEn != "" && checkString.indexOf(res_langVarEn) != -1) {
                transStr = str;
            } else {
                //網站預設語系
                switch (res_langVarDefault) {
                  //繁中
                    case "tw":
                    transStr = fnReturnTranslate(res_langArrayTw, str);
                    break;

                  //簡中
                    case "cn":
                    transStr = fnReturnTranslate(res_langArrayCn, str);
                    break;

                  //外加語系1
                    case "add1":
                    transStr = fnReturnTranslate(res_langArrayAdd1, str);
                    break;

                  //外加語系2
                    case "add2":
                    transStr = fnReturnTranslate(res_langArrayAdd2, str);
                    break;

                  //預設值
                    default:
                    transStr = str;
                    break;
                }
            }
            return transStr;
        }
        function fnReturnTranslate(transArray, str) {
            var transStr;
            for (var i = 0; i < transArray.length; i++) {
                if (transArray[i].split(":")[0] == str.toLowerCase()) {
                    transStr = transArray[i].split(":")[1];
                }
            }
            return transStr;
        }
    };
    //JMarquee 文字跑馬燈
    $.fn.JResMarquee = function(options) {
        var defaults = {
            objWidth: "auto",
            fontSize: 30,
            position: -1,
            speed: 30
        };
        options = $.extend(defaults, options);
        if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
            $(this).addClass("resMarquee");
            $(this).wrapInner("<span>");
            var marContainer = "#" + $(this).attr("id");
            var marObj = marContainer + ">span";
            var fontSize = options.fontSize;
            var position = options.position;
            var speed = options.speed;
            var objWidth = options.objWidth;
            var documentW = $(window).width() - 20;
            var resMarqueeContainerW = Math.min($(marContainer).width(), documentW);
            if (objWidth != "auto") {
                resMarqueeW = Number(objWidth);
            } else {
                var resChineseCharW = fontSize + 1;
                var resCharW = fontSize - 1;
                var resChar = $(marObj).text().split("");
                var resNumberChar = resChar.length;
                var resMarqueeW = 0;
                //resNumberChar*resChineseCharW;
                for (var i = 0; i < resNumberChar; i++) {
                    resMarqueeW += Number(checkCharacterWidth(fontSize, resChar[i]));
                }
            }
            $(marObj).width(resMarqueeW);
            if (resMarqueeContainerW < resMarqueeW) {
                JResLoopMarquee({
                    marContainer: marContainer,
                    marObj: marObj,
                    position: position,
                    speed: speed,
                    resMarqueeContainerW: resMarqueeContainerW
                });
            } else {
                $(marObj).width("auto");
            }
        }
        //check character width fontSize:int, chr:string
        function checkCharacterWidth(fontSize, chr) {
            if (chr.search(/[0-9]/g) != -1) {
                //alert("[0-9]");
                return fontSize;
            } else if (chr.search(/[A-Z]/g) != -1) {
                //alert("[A-Z]");
                return fontSize + 3;
            } else if (chr.search(/[a-z]/g) != -1) {
                //alert("[a-z]");
                return fontSize - 2;
            } else if (chr.search(/\s]/g) != -1) {
                //alert("[\s]");
                return fontSize;
            } else if (chr.search(/[,.()?!:;]/g) != -1) {
                //alert("[\W]:"+chr);
                return fontSize - 8;
            } else {
                //alert("other");
                return fontSize + 2;
            }
        }
    };

    //resLoader 控制載入動畫
    JResLoader = function(options) {
        var defaults = {
            dom: '#resLoader',
            state: 'hide',
            speed: 200
        };
        options = $.extend(defaults, options);
        //console.log(options.dom);
        switch(options.state) {
            case 'show':
                $(options.dom).fadeIn(options.speed);
            break;
            default:
                $(options.dom).fadeOut(options.speed);
            break;
        }
    };

    //JMarquee 跑馬燈結束
    //JMarquee looping animation
    JResLoopMarquee = function(options) {
        var defaults = {
            marContainer: "",
            marObj: "",
            position: 1,
            speed: 20,
            resMarqueeContainerW: 0
        };
        options = $.extend(defaults, options);
        var marContainer = options.marContainer;
        var marObj = options.marObj;
        var position = options.position;
        var speed = options.speed;
        var resMarqueeContainerW = options.resMarqueeContainerW;
        $(marContainer).css("text-align", "left");
        var currentPos = Number($(marObj).css("margin-left").replace("px", ""));
        var maxPos = $(marObj).width() * position;
        switch (position) {
          case 1:
            if (currentPos < resMarqueeContainerW) {
                $(marObj).css({
                    "margin-left": currentPos + position + "px"
                });
            } else {
                $(marObj).css("margin-left", maxPos * -1 + "px");
            }
            break;

          default:
            if (currentPos > maxPos) {
                $(marObj).css({
                    "margin-left": currentPos + position + "px"
                });
            } else {
                $(marObj).css("margin-left", resMarqueeContainerW + "px");
            }
            break;
        }
        setTimeout("JResLoopMarquee({marContainer:'" + marContainer + "',marObj:'" + marObj + "',position:" + position + ",speed:" + speed + ",resMarqueeContainerW:" + resMarqueeContainerW + "})", speed);
    };
    //JMarquee looping animation
    //JResOverflow 橫向卷軸功能
    $.fn.JResOverflow = function(options) {
        //make move_overflow tag for image that width is larger than document width
        //if the image width is over the current page width, and wrap it with mobile_overflow   
        var defaults = {
            flow: true,
            paddingAmt: 25,
            setUILoadWidth: 800
        };
        options = $.extend(defaults, options);
        var setUILoadWidth = options.setUILoadWidth;

        if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
            var overflow = options.flow;
            var objTag = $(this).prop("tagName");
            var paddingAmt = options.paddingAmt;
            var documentW = $(window).width() - paddingAmt;
            var d = new Date();
            var objWraperClass = "mobile_overflow_"+d.getTime();
            switch (objTag) {
              case "IMG":
                $(this).each(function() {
                    $(this).addClass('resIgnoreImgReSizer'); //加上class來避免res排版又再次處理物件
                    var objW = 0;
                    var objH = 0;
                    $(this).one('load', function() {
                        $(this).css({
                            width: "auto",
                            height: "auto"
                        });
                        objW = $(this).width();
                        objH = $(this).height();
                        
                    }).each(function(){
                      if(this.complete) {
                        $(this).trigger('load');
                      }
                    });

                    //處理物件
                    if (objW > (documentW-paddingAmt) && overflow == true) {
                        if (!$(this).hasClass("resUnwrap")) {
                            $(this).css({
                                width: "auto",
                                height: "auto"
                            });
                            $(this).wrap('<div class="'+objWraperClass+' mobile_overflow" style="text-align:center">');
                        }
                    } else {
                        //檢查看是否寬度偵測出來是0,如果是則直接包上overflow物件
                        if (objW == 0) {
                            $(this).wrap('<div class="'+objWraperClass+' mobile_overflow" style="text-align:center">');
                        }else{
                            if (objW > documentW) {
                                $(this).css({
                                    width: "100%",
                                    height: "auto"
                                });
                            }
                        }
                    }
                });
                break;

              case "TABLE":
                if (setUILoadWidth > documentW) {
                    var setWidth = "";
                    if (documentW > 600 && documentW <= 1000) {
                        setWidth = "1000px";
                    }else{
                        setWidth = "600px";
                    }

                    $(this).each(function() {
                        if ($(this).width() > (documentW-paddingAmt) && overflow == true) {
                            if (!$(this).hasClass("resUnwrap")) {
                                $(this).width(setWidth);
                                $(this).wrap('<div class="'+objWraperClass+' mobile_overflow">');
                            }
                        }
                    });
                }
                break;

              default:
                $(this).each(function() {
                    if ($(this).width() > (documentW-paddingAmt) && overflow == true) {
                        if (!$(this).hasClass("resUnwrap")) {
                            $(this).wrap('<div class="'+objWraperClass+' mobile_overflow">');
                        }
                    } else {
                        $(this).width("100%");
                    }
                });
                break;
            }

            //800以下在把外框加入設備寬
            if ($(window).width() <= setUILoadWidth){
                $("."+objWraperClass).css({"width":Math.round(documentW)+"px"});
            }
        }
    };

    //JSlideImg 功能
    $.fn.JSlideImg = function(options) {
        var defaults = {
            disObj: this,
            childTag: "img",
            transitTime: 3,
            transitStyle: '',
            holdTime: 5,
            paddingAmt: 0,
            layout: "clear",
            touchSwipAmt: 100,
            thumb: {
                state: false,
                amount: 4,
                width:100,
                height:100,
                type: 'horizontal',
                position: 'bottom:0;left:0;'
            },
            slideBtn:{
                state: false,
                trigger: 'click',
                width: 100,
                height: 100,
                type: 'horizontal'
            },
            autoPlay: true,
            setupResposive: {},
            onTrans: false,
            onHold: false
        };
        options = $.extend(defaults, options);
        if (options.childTag.toLowerCase() == "img") $(options.childTag, this).addClass("resUnlarger");
        //禁止resEnlarge使用
        //設定排版方式
        switch (options.layout.toLowerCase()) {
          case "left":
            $(this).css({
                "float": "left"
            });
            break;

          case "right":
            $(this).css({
                "float": "right"
            });
            break;

          case "center":
            $(this).css({
                clear: "both",
                "margin-right": "auto",
                "margin-left": "auto"
            });
            break;

          default:
            $(this).css({
                clear: "both"
            });
            break;
        }
        $(options.disObj).addClass("resJSlideImg");
        //if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
        var paddingAmt = options.paddingAmt;
        var maxAmt = $(">"+options.childTag.toLowerCase(), this).length - 1;
        var maxAmtThumb = $(">"+options.childTag.toLowerCase(), this).length;
        var resJSlideWidth, resJSlideHeight;
        var resContainer = $(this);
        var autoPlay = options.autoPlay;
        var thumb = options.thumb;
        var slideBtn = options.slideBtn;
        var setupResposive = options.setupResposive;
        var curr = 0;
        var prev = -1;
        var begin = true;
        var loop;
        var swipToNextPOS = 0;
        var swipToPrevPOS = 0;
        var trackSwipEvent = false;
        var touchSwipAmt = options.touchSwipAmt;

        //螢幕寬與上層容器取得其最小值來作為最大寬度
        var maxJSlideWidth = Math.min(($(window).width() - paddingAmt), ($(resContainer).parent().width() - paddingAmt));
        if (maxJSlideWidth == 0) maxJSlideWidth = $(window).width() - paddingAmt;

        //如果物件是連結,則抓取子物件img來判斷長寬
        var getChildImg = (options.childTag.toLowerCase() == 'a')?">img":"";

        //設定物件長寬
        $(options.childTag.toLowerCase() + ":eq(0)" + getChildImg, this).one('load', function() {
            resJSlideWidth = $(this).width();
            resJSlideHeight = $(this).height();

            if (resJSlideWidth >= maxJSlideWidth) {
                resJSlideHeight = resJSlideHeight * (maxJSlideWidth / resJSlideWidth);
                resJSlideWidth = maxJSlideWidth;
            }
            resContainer.width(resJSlideWidth);
            resContainer.height(resJSlideHeight);
            $(options.childTag.toLowerCase(), resContainer).css("width", "100%");

        }).each(function(){
          if(this.complete) {
            $(this).trigger('load');
          }
        });
        //如果slideshow物件非img則取得容器寬高
        if (resJSlideWidth == undefined) resJSlideWidth = $(options.disObj).width();
        if (resJSlideHeight == undefined) resJSlideHeight = $(options.disObj).height();


        //檢查是否有響應式設定
        fnCheckResponsiveSetup();

        //取得物件小圖設定值
        if(!$.isEmptyObject(thumb)){
            if(thumb['state']) {
                var ThumbScroller = (maxAmtThumb <= thumb['amount']) ? false : true;
                if (thumb['type'] == 'vertical') {
                    var btnW = (thumb['width']+12);
                    var btnH = (ThumbScroller) ? 20 : 0;
                    var positionPrev = "top:0;";
                    var positionNext = "bottom:0;";
                    var positionTrack = "top:"+btnH+"px;";
                    var thumbW = (thumb['width']+12);
                    var thumbH = (((thumb['height']+12) * thumb['amount']) + (btnH*2));
                    var maxThumbTrack = (((maxAmtThumb/thumb['amount'])-1)*thumbH)-((btnH*2)+(10*thumb['amount']));
                    var thumbWUL = (thumb['width']+12) + 'px';
                    var thumbHUL = "auto";
                    if (thumb['position'] === 'auto'){
                        var posH = (resJSlideHeight - thumbH)/2; 
                        var thumbPos = 'left:10px;top:'+posH+'px;';
                    }else{
                        var thumbPos = thumb['position'];
                    }
                 }else{
                    var btnW = (ThumbScroller) ? 20 : 0;
                    var btnH = (thumb['height']+12);
                    var positionPrev = "left:0;";
                    var positionNext = "right:0;";
                    var positionTrack = "left:"+btnW+"px;";
                    var thumbW = (((thumb['width']+12) * thumb['amount']) + (btnW*2));
                    var thumbH = (thumb['height']+12);
                    var maxThumbTrack = (((maxAmtThumb/thumb['amount'])-1)*thumbW)-((btnW*2)+(10*thumb['amount']));
                    var thumbWUL = 'auto';
                    var thumbHUL = (thumb['height']+12) + 'px';
                    if (thumb['position'] === 'auto'){
                        var posW = (resJSlideWidth - thumbW)/2; 
                        var thumbPos = 'left:'+posW+'px;bottom:10px;';
                    }else{
                        var thumbPos = thumb['position'];
                    }
                 } 

                var thumbDom = '<div class="resJSlideImgThumb resJSlideImgController" style="'+thumbPos+'width:'+thumbW+'px;height:'+thumbH+'px">'+
                '<a class="resJSlideImgThumbPrev end" href="#" style="'+positionPrev+'width:'+btnW+'px;height:'+btnH+'px"></a>'+
                '<ul class="resJSlideImgThumbTrack" style="'+positionTrack+'width:'+thumbWUL+';height:'+thumbHUL+'">';
                $("#" + options.disObj.attr("id") + ">" + options.childTag.toLowerCase()).each(function(){
                    var source = ($(this).attr('toggle-thumb-source') == undefined || $(this).attr('toggle-thumb-source') == "") ? $(this).attr('src') : $(this).attr('toggle-thumb-source');
                    var title = ($(this).attr('toggle-thumb-title') == undefined || $(this).attr('toggle-thumb-title') == "") ? $(this).attr('title') : $(this).attr('toggle-thumb-title');
                    thumbDom += '<li class="resJSlideImgThumbItem" style="width:'+thumb['width']+'px;height:'+thumb['height']+'px;">'+
                        '<img src="'+source+'" />'+
                        '<span>'+title+'</span>'+
                    '</li>';
                })
                thumbDom += '</ul><a class="resJSlideImgThumbNext" href="#" style="'+positionNext+'width:'+btnW+'px;height:'+btnH+'px"></a></div>';
                $(options.disObj).append(thumbDom);
            }
        }

        //取得前後項目切換按鈕
        if(!$.isEmptyObject(slideBtn)){
            if(slideBtn['state']) {
                if (slideBtn['type'] == 'vertical') {
                    var setSlideBtnContainerPos = 'left:' + ((resJSlideWidth - slideBtn['width'])/2) + 'px;';
                    var setSlideBtnContainerWidth = (slideBtn['width'] === 'auto')?'100%':slideBtn['width']+'px';
                    var setSlideBtnContainerHeight = resJSlideHeight;
                    var setSlideBtnWidth = (slideBtn['width'] === 'auto')?'100%':slideBtn['width']+'px';
                    var setSlideBtnHeight = (slideBtn['height'] === 'auto')?'100%':slideBtn['height']+'px';
                    var setSlideBtnPrevPos = 'top:0;';
                    var setSlideBtnNextPos = 'bottom:0;';
                    var setSlideBtnTriggleEvent = (slideBtn['trigger'] === undefined) ? 'click':slideBtn['trigger'];
                }else{
                    var setSlideBtnContainerPos = 'top:' + ((resJSlideHeight - slideBtn['height'])/2) + 'px;';
                    var setSlideBtnContainerWidth = resJSlideWidth;
                    var setSlideBtnContainerHeight = (slideBtn['height'] === 'auto')?'100%':slideBtn['height']+'px';
                    var setSlideBtnWidth = (slideBtn['width'] === 'auto')?'100%':slideBtn['width']+'px';
                    var setSlideBtnHeight = (slideBtn['height'] === 'auto')?'100%':slideBtn['height']+'px';
                    var setSlideBtnPrevPos = 'left:0px;';
                    var setSlideBtnNextPos = 'right:0px;';
                    var setSlideBtnTriggleEvent = (slideBtn['trigger'] === undefined) ? 'click':slideBtn['trigger'];
                }
                var slideBtnDom = '<div class="resJSlideImgslideBtn resJSlideImgController" style="width:'+setSlideBtnContainerWidth+';height:'+setSlideBtnContainerHeight+'">'+
                    '<a class="resJSlideImgslideBtnPrev" href="#" style="'+setSlideBtnContainerPos+setSlideBtnPrevPos+'width:'+setSlideBtnWidth+';height:'+setSlideBtnHeight+'"></a>'+
                    '<a class="resJSlideImgslideBtnNext" href="#" style="'+setSlideBtnContainerPos+setSlideBtnNextPos+'width:'+setSlideBtnWidth+';height:'+setSlideBtnHeight+'"></a>'+
                '</div>';
                $(options.disObj).append(slideBtnDom);
            }
        }

        //start slideshow
        if ($("#" + options.disObj.attr("id")).length > 0 && $("#" + options.disObj.attr("id")).css("display") != "none") {
            if (maxAmt == 0) {
                $("#" + options.disObj.attr("id") + ">" + options.childTag.toLowerCase()).animate({
                    opacity: "1"
                }, options.transitTime * 1e3);
            } else {
                //建立效果及迴圈
                fnDefineLoop();
            }
        }

        //thumb controller
        $("#" + options.disObj.attr("id")).on('click',".resJSlideImgThumbItem", function(){
            //reset loop and all current state
            fnStopLoop();

            //set click item to current state
            prev = (curr == 0) ? maxAmt : curr-1; //取得上一個項目
            curr = $(this).index();
            //console.log('prev:'+prev+' curr:'+curr);
            begin = false;

            //建立效果及迴圈
            fnDefineLoop();

            return false;
        })

        //thumb prevBtn
        $(options.disObj).on('click',".resJSlideImgThumbPrev", function(){
            if (thumb['type'] == 'vertical') {
                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("top").replace("px",""));
                if (currentPosition < btnH) {
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbNext").removeClass('end');
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                        top: (currentPosition+thumbH-(btnH*2)) + "px"
                    },500);
                }else{
                    $(this).addClass('end');
                }
            }else{
                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("left").replace("px",""));
                if (currentPosition < btnW) {
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbNext").removeClass('end');
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                        left: (currentPosition+thumbW-(btnW*2)) + "px"
                    },500);
                }else{
                    $(this).addClass('end');
                }
            }
            return false;
        })

        //thumb nextBtn
        $(options.disObj).on('click',".resJSlideImgThumbNext", function(){
            if (thumb['type'] == 'vertical') {
                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("top").replace("px",""));
                if ((maxThumbTrack*-1) < currentPosition) {
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbPrev").removeClass('end');
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                        top: (currentPosition-thumbH+(btnH*2)) + "px"
                    },500);
                }else{
                    $(this).addClass('end');
                }
            }else{
                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("left").replace("px",""));
                if ((maxThumbTrack*-1) < currentPosition) {
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbPrev").removeClass('end');
                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                        left: (currentPosition-thumbW+(btnW*2)) + "px"
                    },500);
                }else{
                    $(this).addClass('end');
                }
            }
            return false;
        })
        
        //console.log(setSlideBtnTriggleEvent);

        //slideshow PrevBtn
        $(options.disObj).on(setSlideBtnTriggleEvent,".resJSlideImgslideBtnPrev", function(e){
            //reset loop and all current state
            fnStopLoop();
            //console.log(e);
            //set click item to current state
            //loop時以自動加一所以，需要減2
            prev = (curr == 0) ? maxAmt : curr-1; //先還原為目前的項目
            curr = (prev <= 0) ? maxAmt : prev-1; //取得上一個項目
            begin = false;
            
            //建立效果及迴圈
            fnDefineLoop(true);

            return false;
        })

        //slideshow NextBtn
        $(options.disObj).on(setSlideBtnTriggleEvent,".resJSlideImgslideBtnNext", function(e){
            //reset loop and all current state
            fnStopLoop();
            //console.log(e);
            //set click item to current state
            //loop時以自動加一所以，不必再加
            begin = false;

            //建立效果及迴圈
            fnDefineLoop(true);

            return false;
        })

        //slideshow touch event
        $(options.disObj).on('touchstart',function(e) {
            //touchstart
            var touch = e.originalEvent.touches[0];
            swipToNextPOS = touch.pageX-touchSwipAmt;
            swipToPrevPOS = touch.pageX+touchSwipAmt;
            trackSwipEvent = true;

        }).on('touchmove',function(e) {
            //touchmove
            var touch = e.originalEvent.touches[0];

            //swip to next
            if (trackSwipEvent && swipToNextPOS > touch.pageX){
                //reset loop and all current state
                fnStopLoop();
                begin = false;

                //建立效果及迴圈
                fnDefineLoop(true);
                trackSwipEvent = false;
            }

            //swip to prev
            if (trackSwipEvent && swipToPrevPOS < touch.pageX){
                //reset loop and all current state
                fnStopLoop();
                prev = (curr == 0) ? maxAmt : curr-1; //先還原為目前的項目
                curr = (prev <= 0) ? maxAmt : prev-1; //取得上一個項目
                begin = false;
                
                //建立效果及迴圈
                fnDefineLoop(true);
                trackSwipEvent = false;
            }

        });


        //建立效果及迴圈
        function fnDefineLoop(control){
            control = control || false; //如無定義預設值false

            //如果指令來自控制按鈕
            if (control) {
                fnUpdateThumbTrack();
            }

            //add current active class to thumb item
                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbItem").removeClass('active');
                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbItem:eq("+curr+")").addClass('active');

                //start to slide the first slidshow
                JResSlideShow({
                        disObj: options.disObj.attr("id"),
                        childTag: options.childTag.toLowerCase(),
                        curr: curr,
                        prev: prev,
                        maxAmt: maxAmt,
                        transitTime: options.transitTime,
                        transitStyle: options.transitStyle,
                        holdTime: options.holdTime,
                        begin: begin,
                        onTrans: options.onTrans,
                        onHold: options.onHold
                });

                begin = false; //進場預設值設為flase
                curr = (curr < maxAmt) ? curr+1 : 0; //取得下一個項目
                prev = -1; //較果結束後要把prev設回預設值

                //如果有自訂transition延遲時間加上去
                if (options.onTrans != false) {
                    var loopTime = options.holdTime * 1e3 + options.transitTime * 1e3;
                }else{
                    var loopTime = options.holdTime * 1e3;
                }

                //if auto play enable
                //start loop the slideshow
                if (autoPlay) {
                    loop = setInterval(function(){

                        fnUpdateThumbTrack();

                        JResSlideShow({
                            disObj: options.disObj.attr("id"),
                            childTag: options.childTag.toLowerCase(),
                            curr: curr,
                            prev: prev,
                            maxAmt: maxAmt,
                            transitTime: options.transitTime,
                            transitStyle: options.transitStyle,
                            holdTime: options.holdTime,
                            begin: begin,
                            onTrans: options.onTrans,
                            onHold: options.onHold
                        });

                        curr = (curr < maxAmt) ? curr+1 : 0; //取得下一個項目

                    }, loopTime);
                }

                return loop;
        }

        //停止重設迴圈
        function fnStopLoop(){
            clearTimeout(loop);
            $("#" + options.disObj.attr("id") + ">" + options.childTag.toLowerCase()).each(function(){
                if(!$(this).hasClass("resJSlideImgController")) {
                    $(this).css({
                        "z-index":"0"
                    });
                    /*$(this).animate({
                        opacity: "0"
                    }, options.transitTime);*/
                }
            })
        }

        //更新thumbtrack位置設定
        function fnUpdateThumbTrack(){
            //set loop for thumb track
                        if (ThumbScroller && thumb['state']) {
                            if (thumb['type'] == 'vertical') {
                                var currentTrackPosition = (Math.floor(curr/thumb['amount'])*thumbH)-((btnH*2)+(10*thumb['amount']));
                                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("top").replace("px",""));
                                //console.log(currentTrackPosition+','+(currentPosition*-1));
                                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbPrev").removeClass('end');
                                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbNext").removeClass('end');
                                if (currentTrackPosition > (currentPosition*-1)) {
                                    if ((maxThumbTrack*-1) < currentPosition) {
                                        var newPos = (currentPosition-thumbH+(btnH*2));
                                    }
                                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                                        top: newPos + "px"
                                    },500);
                                }else if (curr == 0){
                                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                                        top: btnH + "px"
                                    },500);
                                }
                            }else{
                                var currentTrackPosition = (Math.floor(curr/thumb['amount'])*thumbW)-((btnW*2)+(10*thumb['amount']));
                                var currentPosition = parseInt($("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").css("left").replace("px",""));
                                //console.log(thumb['amount']+','+currentTrackPosition+','+(currentPosition*-1));
                                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbPrev").removeClass('end');
                                $("#" + options.disObj.attr("id") + " .resJSlideImgThumbNext").removeClass('end');
                                if (currentTrackPosition > (currentPosition*-1)) {
                                    if ((maxThumbTrack*-1) < currentPosition) {
                                        var newPos = (currentPosition-thumbW+(btnW*2));
                                    }
                                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                                        left: newPos + "px"
                                    },500);
                                }else if (curr == 0){
                                    $("#" + options.disObj.attr("id") + " .resJSlideImgThumbTrack").animate({
                                        left: btnW + "px"
                                    },500);
                                }
                            }
                        }
        }

        //檢查是否有響應式設定
        function fnCheckResponsiveSetup(){
            if(!$.isEmptyObject(setupResposive)){
                var checkWinWArray = [];
                for (var winW in setupResposive){
                    checkWinWArray.push(winW); //先建立Windows Index for sorting
                }

                checkWinWArray = checkWinWArray.sort(function(a, b){return b-a}); //DESC Sorting

                //update listAmt
                for (var i=0;i<checkWinWArray.length;i++) {
                    if ($(window).width() < checkWinWArray[i]) {
                        //thumb響應式設定
                        thumb['state'] = (setupResposive[checkWinWArray[i]]['state'] != undefined)?setupResposive[checkWinWArray[i]]['state']:thumb['state'];
                        thumb['amount'] = (setupResposive[checkWinWArray[i]]['amount'] != undefined)?setupResposive[checkWinWArray[i]]['amount']:thumb['amount'];
                        thumb['width'] = (setupResposive[checkWinWArray[i]]['width'] != undefined)?setupResposive[checkWinWArray[i]]['width']:thumb['width'];
                        thumb['height'] = (setupResposive[checkWinWArray[i]]['height'] != undefined)?setupResposive[checkWinWArray[i]]['height']:thumb['height'];
                        thumb['type'] = (setupResposive[checkWinWArray[i]]['type'] != undefined)?setupResposive[checkWinWArray[i]]['type']:thumb['type'];
                        thumb['position'] = (setupResposive[checkWinWArray[i]]['position'] != undefined)?setupResposive[checkWinWArray[i]]['position']:thumb['position'];
                        
                        if(!$.isEmptyObject(setupResposive[checkWinWArray[i]]['slideBtn'])){
                            //上下項目響應式設定
                            slideBtn['state'] = (setupResposive[checkWinWArray[i]]['slideBtn']['state'] != undefined)?setupResposive[checkWinWArray[i]]['slideBtn']['state']:slideBtn['state'];
                            slideBtn['width'] = (setupResposive[checkWinWArray[i]]['slideBtn']['width'] != undefined)?setupResposive[checkWinWArray[i]]['slideBtn']['width']:slideBtn['width'];
                            slideBtn['height'] = (setupResposive[checkWinWArray[i]]['slideBtn']['height'] != undefined)?setupResposive[checkWinWArray[i]]['slideBtn']['height']:slideBtn['height'];
                            slideBtn['type'] = (setupResposive[checkWinWArray[i]]['slideBtn']['type'] != undefined)?setupResposive[checkWinWArray[i]]['slideBtn']['type']:slideBtn['type'];
                        }
                    }
                }
            }
        }
    };

    //JSlideImg slideshow loop controller
    JResSlideShow = function(options) {
        var defaults = {
            disObj: "",
            childTag: "",
            curr: 0,
            prev: false,
            maxAmt: 0,
            transitTime: 0,
            transitStyle: '',
            holdTime: 0,
            begin: false,
            onTrans: false,
            onHold: false
        };
        options = $.extend(defaults, options);
        var disObj = options.disObj;
        var childTag = options.childTag;
        var curr = options.curr;
        var maxAmt = options.maxAmt;
        var begin = options.begin; //是否為第一次進場
        var transitTime = options.transitTime;
        var holdTime = options.holdTime;
        var transitStyle = options.transitStyle;
        //若不是第一次進場才進行上一張圖退場動作
        if (options.prev == -1) {
            var prev = (curr > 0) ? curr - 1 : maxAmt; //prev obj
        }else{
            var prev = options.prev;
        }

        $("#" + disObj + " .resJSlideImgThumbItem").removeClass('active');
        $("#" + disObj + " .resJSlideImgThumbItem:eq("+curr+")").addClass('active');

        //客製變換效果
        if (options.onTrans != false) {
            //console.log(prev+','+curr);
            options.onTrans.call({
                curr: $("#" + disObj + ">" + childTag + ":eq(" + curr + ")"),
                prev: $("#" + disObj + ">" + childTag + ":eq(" + prev + ")"),
                begin: begin
            });
            

            //載入物件延伸
            setTimeout( 
                function() {
                    if (options.onHold != false) {
                        options.onHold.call( $("#" + disObj + ">" + childTag + ":eq(" + curr + ")") );
                    }
                }
            , transitTime * 1e3);


        }else{
            //out effect
            //若不是第一次進場才進行上一張圖退場動作
            //transitStyle用來設定輪播時的效果: animate(動畫效果), 預設空值(淡入淡出)

            if (!begin) {
                switch (transitStyle) {
                    case 'animate':
                        $("#" + disObj + ">" + childTag + ":eq(" + prev + ")").css({
                            opacity: "1",
                            'z-index': '0'
                        });
                    break;
                    default:
                        $("#" + disObj + ">" + childTag + ":eq(" + prev + ")").animate({
                            opacity: "0",
                            'z-index': '0'
                        }, transitTime * 1e3, "linear");
                    break;
                }
            }

            //in effect
            $("#" + disObj + ">" + childTag + ":eq(" + curr + ")").css({
                'z-index': '1'
            });
            $("#" + disObj + ">" + childTag + ":eq(" + curr + ")").animate({
                opacity: "1"
            }, transitTime * 1e3, "linear", function() {
                //載入物件延伸
                if (options.onHold != false) {
                    options.onHold.call( $("#" + disObj + ">" + childTag + ":eq(" + curr + ")") ); 
                }else{
                    //預設動作
                    $("#" + disObj + ">" + childTag + ":eq(" + prev + ")").css({
                        opacity: "0"
                    });
                }
            });
        }
    };

    //取JRes Cookie參數值
    $.JRes_getCookie = function(options) {
        var defaults = {
            search_key: $.JRes_modulePath() + "_response="
        };
        options = $.extend(defaults, options);
        var name = options.search_key;
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = $.trim(ca[i]);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    };

    //取得模組跟目錄參數路徑
    $.JRes_modulePath = function() {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf("response.js") != -1) {
                return scripts[i].src.replace("response/response.js", "");
            } else if (scripts[i].src.indexOf("response.min.js") != -1) {
                return scripts[i].src.replace("response/response.min.js", "");
            } else if (scripts[i].src.indexOf("response.beautified.js") != -1) {
                return scripts[i].src.replace("response/response.beautified.js", "");
            }
        }
    };

    //取得是否為手持設備 (true: 手持設備 false: 非手持設備)
    $.JRes_isMobile = function(){
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile|Android)/)) {
            return true;
        }else{
            return false;
        }
    }

    //檢查是否為IE9以下版本 (true: IE9以下 false: 非IE9以下)
    $.JRes_isLtIE9 = function(){
        if (navigator.userAgent.match(/(MSIE 8|MSIE 7|MSIE 6)/)) {
            return true;
        }else{
            return false;
        }
    }   

    //取得是否有flash支援 (true: 有支援 false: 非支援)
    $.JRes_isFlash = function(){
        var hasFlash = false;
        try {
          var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
          if (fo) {
            hasFlash = true;
          }
        } catch (e) {
          if (navigator.mimeTypes
                && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
                && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
            hasFlash = true;
          }
        }
        return hasFlash;
    }

    //自動重整 auto refresh mode
    var resRefreshMode = true;
    $.JRes_autoRefresh = function(options){
        var defaults = {
            state: true,
            ignore: ''
        };
        options = $.extend(defaults, options);
        resRefreshMode = options.state;
        if (options.ignore != ""){
            if(options.ignore.indexOf(",") != -1){
                var ignorePage = options.ignore.split(",");
                for (var i=0; i< ignorePage.length; i++){
                    if (window.location.href.indexOf(ignorePage[i]) != -1){
                        resRefreshMode = false;
                    }
                }
            }else{
                if (window.location.href.indexOf(options.ignore) != -1){
                    resRefreshMode = false;//console.log(resRefreshMode);
                }
            }
        }

        return resRefreshMode;
    }

    //JResEnlarge 放大圖功能
    $.fn.JResEnlarge = function(options) {
        //make img with enlarge formate
        var defaults = {
            enlargeSize: "100%",
            scalePx: 20,
            paddingAmt: 20,
            extraSource: "",
            setUILoadWidth: 800,
            popupMode: false,
            enablePluginMode: false
        };
        options = $.extend(defaults, options);
        var setUILoadWidth = options.setUILoadWidth;
        var popupMode = options.popupMode;
        var enablePluginMode = options.enablePluginMode;

        if (($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "")) {
            if ($(window).width() <= setUILoadWidth) {
                var enlargeSize = options.enlargeSize;
                var scalePx = options.scalePx;
                var paddingAmt = options.paddingAmt;
                //var documentW = $(window).width() - paddingAmt;
                //螢幕寬與上層容器取得其最小值來作為最大寬度
                var documentW = Math.min(($(window).width() - paddingAmt), ($(this).parent().width() - paddingAmt));
                if (documentW <= 100) documentW = $(window).width() - paddingAmt;

                var touchOrangal, updateOrangal = 0;

                $(this).each(function() {
                    var enablePluginModeSource = "";
                    $(this).addClass("resEnlargeImg");
                        //先檢查class
                        if (!$(this).hasClass("resUnlarger")) {
                            //再檢查是否有設定onclick event
                            if (!$(this).attr("onclick")) {
                                //檢查圖片是否有usemap的attribute設定值，如果沒有才包覆此功能
                                if ($(this).attr("usemap") == undefined) {
                                    //再檢查是否被a包覆，如果有則不使用此功能
                                    switch ($(this).parent("a").prop("tagName")) {
                                        case "A":
                                            if (enablePluginMode && fnCheckFormat($(this).parent("a").attr("href").toLowerCase())){
                                                var doUsed = true;
                                                enablePluginModeSource = $(this).parent("a").attr('href');
                                                $(this).unwrap('a');
                                            }else{
                                                var doUsed = false;
                                            }
                                        break;
                                        default:
                                            enablePluginModeSource = $(this).attr('src');
                                            var doUsed = true;
                                        break;
                                    }
                                }else{
                                    var doUsed = false;
                                }
                            } else {
                                var doUsed = false;
                            }
                
                            if (doUsed) {
                                var objW,objH = 0;
                                var wrapH = 'height:auto';
                                $(this).one('load', function() {
                                    var d = new Date();
                                    var thisID = "resEnlarge_" + Math.floor(d.getTime()); //因為亂數會重複所以改成毫秒
                                    
                                    //若圖片尺寸取不到,則以100%的方式取得上層容器的尺寸
                                    $(this).css({width: "auto",height: "auto"});
                                    objW = $(this).width();
                                    objH = $(this).height();
                                    

                                    //如果在寫入時該物件為隱藏物件，會導致物件無法偵測到尺寸，此時把該物件的寬度設定為預設外框的寬度，高度auto,設定在物件的樣式中
                                    if (objW == 0) {
                                        objW = documentW;
                                        $(this).css({
                                            width: objW+"px",
                                            height: "auto",
                                            float: "none"
                                        });
                                    }else{
                                        if (objW >= documentW) {
                                            objH = (documentW/objW)*objH;
                                            objW = documentW;
                                        }
                                        $(this).css({
                                            width: objW+"px",
                                            height: objH+"px",
                                            float: "none"
                                        });
                                        wrapH = 'height:' + objH + 'px;';
                                    }
                                    
                                    //console.log(documentW+','+objW+','+objH);
                                    
                                    //建立wrap內容
                                    $(this).wrap('<div class="resEnlargeWraper"><div id="' + thisID + '" class="resEnlarge" style="width:' + objW + 'px;' + wrapH + '">');
                                    $(this).before('<div class="resEnlargeOpenIcon" onclick="JResEnlargeControl({id:\'' + thisID + "',action:'open',scalePx:" + scalePx + '});return false;"></div>');
                                    if (enlargeSize == "auto") {
                                        var FitIconVal = 'style="display:none"';
                                        var OrangIconVal = "";
                                    } else {
                                        var FitIconVal = "";
                                        var OrangIconVal = 'style="display:none"';
                                    }
                                    var resEnlargeControl = '<div class="resEnlargeCloseIcon" toggle="' + thisID + '" onclick=""></div>' +
                                                             '<div class="resEnlargeFitIcon" toggle="' + thisID + '" ' + FitIconVal + ' onclick=""></div>' + 
                                                             '<div class="resEnlargeOraginalIcon" toggle="' + thisID + '" ' + OrangIconVal + ' onclick=""></div>' + 
                                                             '<div class="resEnlargePlusIcon" toggle="' + thisID + '" onclick=""></div>' + 
                                                             '<div class="resEnlargeDisIcon" toggle="' + thisID + '" onclick=""></div>';
                                    var extraSource = options.extraSource != "" ? options.extraSource : $(this).attr("src");
                                    extraSource = (enablePluginMode) ? enablePluginModeSource : extraSource;
                                    var resEnlargeContent = '<div class="resEnlargeContent" toggle="' + thisID + '">' + 
                                                            '<div class="resEnlargeControlBar">' + resEnlargeControl + "</div>" + 
                                                            '<img id="' + thisID + '_enObj" src="' + extraSource + '" style="width:' + enlargeSize + ';height:auto;" />' + "</div>";
                                    $(this).after(resEnlargeContent);

                                }).each(function(){
                                  if(this.complete) {
                                    $(this).trigger('load');
                                    //console.log(this.complete);
                                  }
                                });
                            }
                        }

                });
            }else{
                $(this).each(function() {
                    if (popupMode){
                        if (!$(this).hasClass("resUnlarger")) {
                            //再檢查是否有設定onclick event
                            if (!$(this).attr("onclick")) {
                                //再檢查是否被a包覆，如果有則不使用此功能
                                switch ($(this).parent("a").prop("tagName")) {
                                    case "A":
                                        if (enablePluginMode && fnCheckFormat($(this).parent("a").attr("href").toLowerCase())){
                                            var doUsed = true;
                                            options.extraSource = $(this).parent("a").attr('href');
                                            $(this).unwrap('a');
                                        }else{
                                            var doUsed = false;
                                        }
                                    break;
                                    default:
                                        options.extraSource = $(this).attr("src");
                                        var doUsed = true;
                                    break;
                                }
                            } else {
                                var doUsed = false;
                            }
                        }
                        if (doUsed) {
                            $(this).each(function() {
                                $(this).addClass("resPopupBox");
                                $(this).attr("source",options.extraSource);
                            })
                        }
                    }
                })
            }
        }

        //event
                $(document).on('click','.resEnlargeCloseIcon',function(){
                    JResEnlargeControl({
                        id: $(this).attr("toggle"),
                        action:'close',
                        scalePx: scalePx
                    });
                    return false;
                }).on('click','.resEnlargeFitIcon',function(){
                    JResEnlargeControl({
                        id: $(this).attr("toggle"),
                        action:'fit',
                        scalePx: scalePx
                    });
                    return false;
                }).on('click','.resEnlargeOraginalIcon',function(){
                    JResEnlargeControl({
                        id: $(this).attr("toggle"),
                        action:'oraginal',
                        scalePx: scalePx
                    });
                    return false;
                }).on('click','.resEnlargePlusIcon',function(){
                    JResEnlargeControl({
                        id: $(this).attr("toggle"),
                        action:'plus',
                        scalePx: scalePx
                    });
                    return false;
                }).on('click','.resEnlargeDisIcon',function(){
                    JResEnlargeControl({
                        id: $(this).attr("toggle"),
                        action:'dis',
                        scalePx: scalePx
                    });
                    return false;
                }).on('touchstart','.resEnlargeContent',function(e){
                    if (($("meta[name='viewport']").attr("content").search('user-scalable=1') == -1) || ($("meta[name='viewport']").attr("content").search('user-scalable=yes') == -1)){
                        var touch1 = e.originalEvent.touches[0];
                        var touch2 = e.originalEvent.touches[1];
                        if (!(touch1 == undefined || touch2 == undefined)){
                            touchOrangal = fnGetDistance(touch1.pageX,touch2.pageX,touch1.pageY,touch2.pageY);
                        }
                    }
                    //alert(touchOrangal);
                }).on('touchmove','.resEnlargeContent',function(e){
                    if (($("meta[name='viewport']").attr("content").search('user-scalable=1') == -1) || ($("meta[name='viewport']").attr("content").search('user-scalable=yes') == -1)){
                        var touch1 = e.originalEvent.touches[0];
                        var touch2 = e.originalEvent.touches[1];
                        if (!(touch1 == undefined || touch2 == undefined)){
                            updateOrangal = fnGetDistance(touch1.pageX,touch2.pageX,touch1.pageY,touch2.pageY);
                            JResEnlargeControl({
                                id: $(this).attr("toggle"),
                                action:'plus',
                                scalePx: Math.round((touchOrangal - updateOrangal)*-1)
                            });
                            touchOrangal = updateOrangal; //更新touch間距
                        }
                    }
                    //alert(touchOrangal - updateOrangal);
                }).on('click','.resPopupBox',function(){
                    $(this).JResPopupBox({
                        type:'img',
                        action:'open'
                    });
                }).on('click','.resPopupBoxCloseBtn, .resPopupBoxWrap',function(){
                    $(this).JResPopupBox({
                        action:'close'
                    });
                })
                

        //計算兩點間距離
        function fnGetDistance(x1,x2,y1,y2){
            x1 = eval(x1);
            x2 = eval(x2);
            y1 = eval(y1);
            y2 = eval(y2);
            var xd = x2 - x1;
            var yd = y2 - y1;
            return Math.pow((xd * xd + yd * yd), 0.5);
        }

        //檢查圖片尺寸
        function fnCheckFormat(searchStr){
                                        if (searchStr.indexOf('.jpg') != -1) {
                                            checkFormat = true;
                                        }else if (searchStr.indexOf('.jpeg') != -1) {
                                            checkFormat = true;
                                        }else if (searchStr.indexOf('.gif') != -1) {
                                            checkFormat = true;
                                        }else if (searchStr.indexOf('.png') != -1) {
                                            checkFormat = true;
                                        }else{
                                            checkFormat = false;
                                        }
            return checkFormat;
        }
    };

    //mobile enlarge control
    JResEnlargeControl = function(options) {
        var defaults = {
            id: "",
            action: "",
            scalePx: 20
        };
        options = $.extend(defaults, options);
        var id = options.id;
        var action = options.action;
        var scalePx = options.scalePx;
        switch (action) {
          //打開視窗
            case "open":
            $("#" + id + ">.resEnlargeContent").fadeIn(200);
            if ($("#mobile_nav_bottom").attr("resState") != "notUsed") {
                $("#mobile_nav_bottom").fadeOut(100);
            }
            if ($("#mobile_nav").attr("resState") != "notUsed") {
                $("#mobile_nav").fadeOut(100);
                $("body").css({'overflow':'hidden'});
            }
            $("body").css({'overflow':'hidden'});
            
            break;

          //關閉視窗
            case "close":
            $("#" + id + ">.resEnlargeContent").fadeOut(200);
            if ($("#mobile_nav_bottom").attr("resState") != "notUsed") {
                $("#mobile_nav_bottom").fadeIn(100);
            }
            if ($("#mobile_nav").attr("resState") != "notUsed") {
                $("#mobile_nav").fadeIn(100);
            }
            $("body").css({'overflow':'auto'});
            break;

          //符合尺寸
            case "fit":
            if ($("#" + id + " .resEnlargeOraginalIcon").css("display") == "none") {
                $("#" + id + " .resEnlargeFitIcon").hide();
                $("#" + id + " .resEnlargeOraginalIcon").show();
                $("#" + id + ">.resEnlargeContent>img").attr("style", "width:auto !important");
            }
            break;

          //原始大小
            case "oraginal":
            if ($("#" + id + " .resEnlargeFitIcon").css("display") == "none") {
                $("#" + id + " .resEnlargeFitIcon").show();
                $("#" + id + " .resEnlargeOraginalIcon").hide();
                $("#" + id + ">.resEnlargeContent>img").attr("style", "width:100% !important");
            }
            break;

          //放大
            case "plus":
            $("#" + id + ">.resEnlargeContent>img").attr("style", "width:" + ($("#" + id + ">.resEnlargeContent>img").width() + scalePx) + "px !important");
            break;

          //縮小
            case "dis":
            $("#" + id + ">.resEnlargeContent>img").attr("style", "width:" + ($("#" + id + ">.resEnlargeContent>img").width() - scalePx) + "px !important");
            break;
        }
    };

    //resPopup box
    $(function(){$('body').append('<div class="resPopupBoxWrap">');})
    $.fn.JResPopupBox = function(options) {
        var defaults = {
            type: 'img',
            action: 'open'
        };
        options = $.extend(defaults, options);
        var obj = $(this);
        var type = options.type;
        var action = options.action;
        var content = "";
        var setStyle = 'style="width:auto;height:auto;"';

        //effect
        if (action == "open"){
            //建立pupup up物件
            var popupBox = '<div class="resPopupBoxContent">'+
                                '<div class="resPopupBoxCloseBtn"></div>'+
                                '<div class="resPopupBoxContentArea">'+
                                '</div>'+
                            '</div>';
            //將popup物件寫入
            $(".resPopupBoxWrap").html(popupBox);

            //判斷要開啟的物件
            switch(type){
                case "img":
                default:
                    var defaultW,defaultH;
                    var imgW,imgH;
                    var source = $(this).attr("source"); //先取得我們要放大的圖
                    $('body').append('<img class="resTmpImgObj" src="'+source+'" />'); //建立放大物件已取得尺寸
                    $(".resTmpImgObj").one('load', function() {
                        defaultW = $(this).css('width');
                        defaultH = $(this).css('height');
                        $(this).css({width: "auto",height: "auto"}); //先還原圖片
                        imgW = $(this).width(); 
                        imgH = $(this).height(); 
                        $(this).css({width: defaultW,height: defaultH});//在復原原設定

                        //console.log('W:'+imgW+', H:'+imgH+' WinW:'+$(window).width()+' WinH:'+$(window).height());

                         if (imgH > imgW){
                            //如果圖片是直的
                            if (imgH > $(window).height()) {
                                setStyle = 'style="width:auto;height:'+($(window).height()-100)+'px;"';
                            }
                         }else{
                            //如果圖片是橫的或方的
                            if (imgW > $(window).width()) {
                                setStyle = 'style="width:'+($(window).width()-100)+'px;height:auto;"';
                            }else if (imgH > $(window).height()) {
                                setStyle = 'style="width:auto;height:'+($(window).height()-100)+'px;"';
                            }
                         }
                            
                         content = '<img src="'+source+'" '+setStyle+' />';

                         $(this).remove(); //取得尺寸後移除
                         $(".resPopupBoxContentArea").append(content); //將內容寫入

                    }).each(function(){
                      if(this.complete) {
                        $(this).trigger('load');
                      }
                    });
                    
                break;
            }

            $(".resPopupBoxWrap").fadeIn(500); 
            $("body").css({'overflow':'hidden'});
            
        }else{
            $(".resPopupBoxWrap").fadeOut(500);
            $("body").css({'overflow':'auto'});
        }
    }

    //mobile enlarge control
    //mobile additional page control
    JResPageControl = function(options) {
        var defaults = {
            id: "",
            action: "open"
        };
        options = $.extend(defaults, options);
        var id = options.id;
        var action = options.action;
        switch (action) {
          //關閉頁面
            case "back":
                $("html").removeClass("resHtmlOverflow");
                if ($(id).hasClass("resFlipPageR")) {
                    $(id).animate({
                        right: "-120%"
                    }, 300);
                } else if ($(id).hasClass("resFlipPageT")) {
                    $(id).animate({
                        top: "-120%"
                    }, 300);
                } else {
                    $(id).animate({
                        left: "-120%"
                    }, 300);
                }
                //關閉時清除url_loader內容
                $("#resPageLoad_area").html("");
                $("body").css({"overflow":"auto"});
                $(this).animate({"z-index":-1},300);
            break;

            //關閉全部頁面
            case "closeAll":
                $("html").removeClass("resHtmlOverflow");
                $(".resFlipPage").each(function(){
                    if ($(this).hasClass("resFlipPageR") && ($(this).css("right") == "0px" || $(this).css("right") == "0%")){
                        $(this).animate({
                            right: "-120%"
                        }, 300);
                    }else if ($(this).hasClass("resFlipPageT") && ($(this).css("top") == "0px" || $(this).css("top") == "0%")){
                        $(this).animate({
                            right: "-120%"
                        }, 300);
                    }else{
                        $(this).animate({
                            right: "-120%"
                        }, 300);
                    }
                })
                //關閉時清除url_loader內容
                $("#resPageLoad_area").html("");
                $("body").css({"overflow":"auto"});
                $(this).animate({"z-index":-1},300);
            break;

          //打開頁面
            case "open":
            default:
                $("html").addClass("resHtmlOverflow");
                if ($(id).hasClass("resFlipPageR")) {
                    $(id).animate({
                        right: "0px"
                    }, 300);
                } else if ($(id).hasClass("resFlipPageT")) {
                    $(id).animate({
                        top: "0px"
                    }, 300);
                } else {
                    $(id).animate({
                        left: "0px"
                    }, 300);
                }
                $("body").css({"overflow":"hidden"});
                $(id).css({"z-index":1001});
            break;
        }
    };
    //mobile navigation bar
    JResMobileTopNav = function(options) {
        var defaults = {
            btnId: "",
            contentId: "",
            position: "",
            resetEvt: true
        };
        options = $.extend(defaults, options);
        var btnId = options.btnId;
        var contentId = options.contentId;
        var position = options.position;
        var resetEvt = options.resetEvt;
        //開啟前先檢查其他pannel如果已經開啟則關閉
        $(".flipContentL").each(function() {
            if ($(this).css("left") == "0px" || $(this).css("left") == "0%") {
                $(this).animate({
                    left: "-90%"
                }, 300);
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        $(".flipContentR").each(function() {
            if ($(this).css("right") == "0px" || $(this).css("left") == "0%") {
                $(this).animate({
                    right: "-90%"
                }, 300);
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        $(".flipContentT").each(function() {
            if ($(this).css("top") == "0px" || $(this).css("left") == "0%") {
                $(this).animate({
                    top: "-90%"
                }, 300);
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        $(".flipContentTS").each(function() {
            if ($(this).css("top") == "0px" || $(this).css("left") == "0%") {
                $(this).animate({
                    top: "-110px"
                }, 300);
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        $(".flipContentLU").each(function() {
            if ($(this).css("left") == "0px" || $(this).css("left") == "0%") {
                $("#resContentMask").removeAttr("style").css("left", "0");
                $(this).animate({
                    left: "-90%"
                }, 300);
                $("#resMainWrap").animate({
                    left: "0"
                }, 300, function() {
                    //$(this).removeAttr("style");
                    $(this).css("left","");
                });
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        $(".flipContentRU").each(function() {
            if ($(this).css("right") == "0px" || $(this).css("left") == "0%") {
                $("#resContentMask").removeAttr("style").css("right", "0");
                $(this).animate({
                    right: "-90%"
                }, 300);
                $("#resMainWrap").animate({
                    right: "0"
                }, 300, function() {
                    //$(this).removeAttr("style");
                    $(this).css("right","");
                });
                $("#mobile_nav ul li a div").remove();
                $("#mobile_nav_bottom ul li a div").remove();
                $.JResContentScroll({
                    action: true
                });
            }
        });
        if (resetEvt == false) {
            //開啟視窗
            switch (position) {
              case "right":
                if ($(contentId).css("right") == "0px" || $(contentId).css("right") == "0%") {
                    $(contentId).animate({
                        right: "-90%"
                    }, 300);
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $(contentId).animate({
                        right: "0px"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeRight_btn'></div>");
                }
                break;

              case "top":
                if ($(contentId).css("top") == "0px" || $(contentId).css("top") == "0%") {
                    $(contentId).animate({
                        top: "-90%"
                    }, 300);
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $(contentId).animate({
                        top: "0px"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeTop_btn'></div>");
                }
                break;

              case "top_small":
                if ($(contentId).css("top") == "0px" || $(contentId).css("top") == "0%") {
                    $(contentId).animate({
                        top: "-100px"
                    }, 300);
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $(contentId).animate({
                        top: "0px"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeTop_btn'></div>");
                }
                break;

              case "left_under":
                if ($(contentId).css("left") == "0px" || $(contentId).css("left") == "0%") {
                    $("#resContentMask").removeAttr("style").css("left", "0");
                    $(contentId).animate({
                        left: "-90%"
                    }, 300);
                    $("#resMainWrap").animate({
                        left: "0"
                    }, 300, function() {
                        //$(this).removeAttr("style");
                        $(this).css("left","");
                    });
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $("#resContentMask").removeAttr("style").css("left", "90%");
                    $(contentId).animate({
                        left: "0px"
                    }, 300);
                    $("#resMainWrap").animate({
                        left: "90%"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeLeft_btn'></div>");
                }
                break;

              case "right_under":
                if ($(contentId).css("right") == "0px" || $(contentId).css("right") == "0%") {
                    $("#resContentMask").removeAttr("style").css("right", "0");
                    $(contentId).animate({
                        right: "-90%"
                    }, 300);
                    $("#resMainWrap").animate({
                        right: "0"
                    }, 300, function() {
                        //$(this).removeAttr("style");
                        $(this).css("right","");
                    });
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $("#resContentMask").removeAttr("style").css("right", "90%");
                    $(contentId).animate({
                        right: "0px"
                    }, 300);
                    $("#resMainWrap").animate({
                        right: "90%"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeRight_btn'></div>");
                }
                break;

              default:
                if ($(contentId).css("left") == "0px" || $(contentId).css("left") == "0%") {
                    $(contentId).animate({
                        left: "-90%"
                    }, 300);
                    $.JResContentScroll({
                        action: true
                    });
                    $("a div", btnId).remove();
                } else {
                    $(contentId).animate({
                        left: "0px"
                    }, 300);
                    $.JResContentScroll({
                        action: false
                    });
                    $("a", btnId).append("<div class='closeLeft_btn'></div>");
                }
                break;
            }
        }
    };
    //mobile navigation bar
    //content scrollerbar
    $.JResContentScroll = function(options) {
        var defaults = {
            action: true
        };
        options = $.extend(defaults, options);
        var action = options.action;
        if (action) {
            //$("#resMainWrap").css({"position":"relative"});
            $("html").removeClass("resHtmlOverflow");
            $("#resContentMask").hide();
        } else {
            //$("#resMainWrap").css({"position":"fixed"});
            $("html").addClass("resHtmlOverflow");
            $("#resContentMask").show();
            //$("#resMainWrap").css("min-height", $(window).height() + "px");
        }
    };

    //延遲載入功能
    $.fn.JResDelayLoader = function(options) {
        var defaults = {
            state: true,
            loadObj: '',
            delay: 200,
            transition: 500,
            eventPos: 100,
            onLoad: false
        };
        options = $.extend(defaults, options);
        var obj = $(this);
        var loadObj = options.loadObj;
        var delay = options.delay;
        var transition = options.transition;
        var state = options.state;
        var eventPos = options.eventPos;
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "scroll" //FF doesn't recognize mousewheel as of FF3.x
        
        //如果是啟用且有物件才執行
        if (state && $(obj).length > 0) {
      
                if (loadObj != '') {
                    //如果有設定欲執行延遲載入的子物件，則執行預設載入動作
                    if (options.onLoad != false) {
                        $(loadObj,obj).css({visibility:'hidden'}); //客制效果使用visibility來隱藏
                    }else{
                        $(loadObj,obj).css({opacity: '0'});
                    }
                }

                $(window).on(mousewheelevt, function(e){
                    //if scroll to the end of page, then show all hidden items
                    if($(window).scrollTop() + $(window).height() == $(document).height()) {
                        fnTrggleEffect();
                    }

                    //init triggle when half browser height hit the scroll obj
                    var trigglePos = $(window).scrollTop() + Math.round(($(window).height()/2)+eventPos);
                    if ($(obj).position().top < trigglePos){
                        fnTrggleEffect();
                    }
                })

                //當文件載入時,先行偵測目前卷軸位置,並進行動作
                $(window).on('load', function(){
                    //init triggle when half browser height hit the scroll obj
                    var trigglePos = $(window).scrollTop() + Math.round(($(window).height()/2)+eventPos);
                    if ($(obj).position().top < trigglePos){
                         fnTrggleEffect();
                    }

                    //if scroll to the end of page, then show all hidden items
                    if($(window).scrollTop() + $(window).height() == $(document).height()) {
                        fnTrggleEffect();
                    }
                })
        }

        //載入效果
        function fnTrggleEffect(){
            if (loadObj != '') {
                if ($(loadObj,obj).attr("load") != "complete") {
                    var maxAmt = $(loadObj,obj).length;
                    var delayAmt = 0;
                    for (var i = 0; i<maxAmt; i++ ){
                        delayAmt+=delay;

                        if (options.onLoad != false) {
                            $(loadObj+":eq("+i+")",obj).css({visibility:'visible'}); //將物件設為visible再進行效果
                            options.onLoad.call( $(loadObj+":eq("+i+")",obj) ); //執行其他客製的動作
                        }else{
                            $(loadObj+":eq("+i+")",obj).delay(delayAmt).animate({
                                opacity: '1'
                            },transition);
                        }

                        //加入載入完成標記
                        $(loadObj+":eq("+i+")",obj).attr("load","complete");

                    }
                }
            }
        }
    }

    //物件ladder定位功能
    $.fn.JResLadderObj = function(options) {
        var defaults = {
            state: true,
            setupMode: false,
            position: 'fixed',
            container: '',
            path: {
                0:{
                    speed: 1,
                    start:{
                        ladder: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                        opacity: 0
                    },
                    end: {
                        ladder: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                        opacity: 1
                    } 
                }
            }
        };
        options = $.extend(defaults, options);
        var obj = $(this);
        var state = options.state;
        var mode = options.setupMode;
        var path = options.path;
        var currentPoint = 0;
        var currentPosX,currentPosY,currentPosZ,currentOpacity,scrollAmt = 0;
        var position = options.position;
        var speed = 1;
        var pathArray = [];
        var container = options.container;
        var track = (position=="fixed" && container != "")?$(document).height():$(container).height();
        var winW = $(window).width();
        var currentPath;


        //定位位置
        if(!$.isEmptyObject(path)){
            for (var point in path) {
                pathArray.push(point);
            }
        }

        //若有啟用且該頁面有此物件
        if (state && $(obj).length > 0) {

            //定義物件的預設ladder高度
            var initStartLadderForGeneal = (position == "fixed") ? 0 : Math.round($(container).position().top)-Math.round($(window).height());
            var initEndLadderForGeneal = (position == "fixed") ? 0 : Math.round($(container).position().top)+Math.round($(window).height());

            //定義物件
            $(obj).addClass("JResLadderObj");

            //定位物件
            $(obj).css({
                'position':position,
                'top':path[pathArray[0]]['start']['y'],
                'left':path[pathArray[0]]['start']['x'],
                'z-index':path[pathArray[0]]['start']['z'],
                opacity: path[pathArray[0]]['start']['opacity'],
                '-ms-filter': "progid:DXImageTransform.Microsoft.Alpha(Opacity="+Math.round(path[pathArray[0]]['start']['opacity']*100)+")",
                'filter': "alpha(opacity="+Math.round(path[pathArray[0]]['start']['opacity']*100)+")"
            });

            //if is setup mode, show position dialog
            if (mode){
                var showModeData = {'currScrollPos':currScrollPos,
                                    'track':track,
                                    'path':pathArray[0],
                                    'start':path[pathArray[0]]['start']['ladder'],
                                    'end':path[pathArray[0]]['end']['ladder'],
                                    'currentPosX':Math.round(path[pathArray[0]]['start']['x']),
                                    'currentPosY':Math.round(path[pathArray[0]]['start']['y']),
                                    'currentPosZ':path[pathArray[0]]['start']['z'],
                                    'currentOpacity':path[pathArray[0]]['start']['opacity'],
                                    'scrollAmt': scrollAmt
                                   };
                fnSetupMode($(obj),showModeData);
                fnGlobalInfo(showModeData);
            }

            //console.log(pathArray);

            //加入控制 
            var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "scroll" //FF doesn't recognize mousewheel as of FF3.x
            $(window).on(mousewheelevt, function(e){
                    //取得目前物件位置
                    currentPosX = parseInt($(obj).position().left);
                    currentPosY = parseInt($(obj).position().top);
                    currentPosZ = parseInt($(obj).css("z-index"));
                    currentOpacity = parseFloat($(obj).css("opacity")); //parseFloat return value with floatpoint
                    scrollAmt = 0;
                    //console.log(path['0']['start']['ladder']+","+$(this).scrollTop()+","+ (path['0']['end']['ladder'] <= $(this).scrollTop()));
                    //檢查動向
                    if ((path[pathArray[pathArray.length-1]]['end']['ladder'] + initEndLadderForGeneal) >= $(this).scrollTop()) {
                        if ((path[pathArray[pathArray.length-1]]['start']['ladder'] + initStartLadderForGeneal) <= $(this).scrollTop()) {
                            for (var i = 0; i < pathArray.length; i++) {
                            //針對目前的scrollTop位置尋找適合的定位點
                                if((path[pathArray[i]]['start']['ladder'] + initStartLadderForGeneal) <= $(this).scrollTop() && (path[pathArray[i]]['end']['ladder'] + initEndLadderForGeneal) >= $(this).scrollTop()){
                                    currentPath = i;
                                    //console.log("scroll: "+$(this).scrollTop()+" start:"+path[pathArray[i]]['start']['ladder']+" end:"+path[pathArray[i]]['end']['ladder']);

                                    var pathTrack = (path[pathArray[i]]['end']['ladder'] + initEndLadderForGeneal) - (path[pathArray[i]]['start']['ladder'] + initStartLadderForGeneal);
                                    var xPath = path[pathArray[i]]['start']['x'] - path[pathArray[i]]['end']['x'];
                                    var yPath = path[pathArray[i]]['start']['y'] - path[pathArray[i]]['end']['y'];
                                    var xDirection = (xPath < 0) ? 1 : -1;
                                    var yDirection = (yPath < 0) ? 1 : -1;
                                    var xMoveAmt = Math.abs(xPath)/pathTrack;
                                    var yMoveAmt = Math.abs(yPath)/pathTrack;
                                    scrollAmt = Math.abs($(this).scrollTop()-currScrollPos);
                                    var scrollDirection = ($(this).scrollTop() < currScrollPos)? -1 : 1 ;
                                    var opacityAmt = Math.abs(path[pathArray[i]]['start']['opacity'] - path[pathArray[i]]['end']['opacity'])/pathTrack;
                                    //console.log("currentOpacity: "+currentOpacity+" opacityAmt: "+opacityAmt*scrollAmt+" top: "+$(this).scrollTop()+" prev: "+currScrollPos);
                                    //console.log("opacityAmt: "+opacityAmt);

                                    //計算X軸位置
                                    currentPosX += (xMoveAmt*scrollAmt)*scrollDirection*xDirection;
                                    if (path[pathArray[i]]['start']['x'] < path[pathArray[i]]['end']['x']) {
                                        currentPosX = (currentPosX <= path[pathArray[i]]['start']['x']) ? path[pathArray[i]]['start']['x'] : currentPosX;
                                        currentPosX = (currentPosX >= path[pathArray[i]]['end']['x']) ? path[pathArray[i]]['end']['x'] : currentPosX;
                                    }else{
                                        currentPosX = (currentPosX >= path[pathArray[i]]['start']['x']) ? path[pathArray[i]]['start']['x'] : currentPosX;
                                        currentPosX = (currentPosX <= path[pathArray[i]]['end']['x']) ? path[pathArray[i]]['end']['x'] : currentPosX;
                                    }

                                    //計算y軸位置
                                    currentPosY += (yMoveAmt*scrollAmt)*scrollDirection*yDirection;
                                    //console.log("obj: "+$(obj).attr("id")+" y:"+scrollAmt+" x:"+currentPosX+" scroll: "+$(this).scrollTop());
                                    if (path[pathArray[i]]['start']['y'] < path[pathArray[i]]['end']['y']) {
                                        currentPosY = (currentPosY <= path[pathArray[i]]['start']['y']) ? path[pathArray[i]]['start']['y'] : currentPosY;
                                        currentPosY = (currentPosY >= path[pathArray[i]]['end']['y']) ? path[pathArray[i]]['end']['y'] : currentPosY;
                                    }else{
                                        currentPosY = (currentPosY >= path[pathArray[i]]['start']['y']) ? path[pathArray[i]]['start']['y'] : currentPosY;
                                        currentPosY = (currentPosY <= path[pathArray[i]]['end']['y']) ? path[pathArray[i]]['end']['y'] : currentPosY;
                                    }

                                    //計算z-index位置
                                    currentPosZ = ((path[pathArray[i]]['end']['ladder'] + initEndLadderForGeneal) >= $(this).scrollTop())? path[pathArray[i]]['start']['z'] : path[pathArray[i]]['end']['z'];
                                    //console.log('currentScroll: '+$(this).scrollTop()+" endScroll: "+path[pathArray[i]]['end']['ladder']);

                                    //計算opacity值
                                    currentOpacity += (opacityAmt*scrollAmt)*scrollDirection;
                                    //console.log('currentScroll: '+currentOpacity);

                                    $(obj).css({
                                        'top':Math.round(currentPosY)+'px',
                                        'left':Math.round(currentPosX)+'px',
                                        'z-index':currentPosZ,
                                        opacity:currentOpacity
                                    });
                                }
                            }
                        }else{
                            //當定位在最初設定前，則將物件移到最初位置 (其他)
                            currentPosX = path[pathArray[pathArray.length-1]]['start']['x'];
                            currentPosY = path[pathArray[pathArray.length-1]]['start']['y'];
                            currentPosZ = path[pathArray[pathArray.length-1]]['start']['z'];
                            currentOpacity = path[pathArray[pathArray.length-1]]['start']['opacity'];
                            $(obj).css({
                                'top':Math.round(currentPosY)+'px',
                                'left':Math.round(currentPosX)+'px',
                                'z-index':currentPosZ,
                                opacity:currentOpacity
                            });
                        }

                    }else{
                        //當定位已達最後設定
                        currentOpacity = path[pathArray[pathArray.length-1]]['end']['opacity'];
                        if (position == "fixed"){
                            //當定位已達最後設定，則將物件移動改為一般卷軸移動 (fixed)
                            var scrollDirection = ($(this).scrollTop() < currScrollPos)? 1 : -1 ;
                            var scrollAmt = Math.abs($(this).scrollTop()-currScrollPos);
                            currentPosY = (currentPosY > path[pathArray[pathArray.length-1]]['end']['y']) ? path[pathArray[pathArray.length-1]]['end']['y'] : currentPosY;
                            currentPosY += (scrollAmt)*scrollDirection;
                            //console.log($(obj).attr("id")+": "+currentPosY);
                            $(obj).css({
                                'top':currentPosY+'px',
                                opacity:currentOpacity
                            });
                        }else{
                            //當定位已達最後設定，則將物件移到最終位置 (其他)
                            currentPosX = path[pathArray[pathArray.length-1]]['end']['x'];
                            currentPosY = path[pathArray[pathArray.length-1]]['end']['y'];
                            $(obj).css({
                                'top':Math.round(currentPosY)+'px',
                                'left':Math.round(currentPosX)+'px',
                                opacity:currentOpacity
                            });
                        }
                    }

                    //update scrollPos global var
                    if($(obj).attr("id") == $(".JResLadderObj").last().attr("id")) {
                        currScrollPos = $(this).scrollTop();
                    }

                    //if is setup mode, show position dialog
                    if (mode){
                        var showModeData = {'currScrollPos':currScrollPos,
                                            'track':track,
                                            'path':pathArray[currentPath],
                                            'start':(path[pathArray[currentPath]]['start']['ladder'] + initStartLadderForGeneal),
                                            'end':(path[pathArray[currentPath]]['end']['ladder'] + initEndLadderForGeneal),
                                            'currentPosX':Math.round(currentPosX),
                                            'currentPosY':Math.round(currentPosY),
                                            'currentPosZ':currentPosZ,
                                            'currentOpacity':currentOpacity,
                                            'scrollAmt': scrollAmt
                                            };
                        fnSetupMode($(obj),showModeData);
                        fnGlobalInfo(showModeData);
                    }

            });

        }


        $(document).on('click','.resLadderJumper',function(){
            var getToggleObj = $(this).attr("toggle");
            var getLadderPoint = $(this).attr("ladder");
            if ($(obj).attr("id") == getToggleObj) {
               var toMoveFromTop = (path[pathArray[getLadderPoint]]['end']['ladder'] + initEndLadderForGeneal); 
            }
            //console.log(toMoveFromTop);
            $("html, body").animate({
                scrollTop: toMoveFromTop
            }, 3000);
            return false;
        })

        //setup mode info box
        function fnSetupMode(obj,showModeData){
            var showModeContent = 'ScrollTrack: '+showModeData['track']+'<br>'+
                'CurrentPath: '+showModeData['path']+'<br>'+
                'PathStart: '+(showModeData['start'] + initStartLadderForGeneal)+'<br>'+
                'PathEnd: '+(showModeData['end'] + initEndLadderForGeneal)+'<br>'+
                'Obj1 X: '+showModeData['currentPosX']+'<br>'+
                'Obj1 Y: '+showModeData['currentPosY']+'<br>'+
                'Obj1 Z: '+showModeData['currentPosZ']+'<br>'+
                'Opacity: '+showModeData['currentOpacity']+'<br>';
            $(".resLadderMode",obj).remove();
            $(obj).append('<div id="resLadderInfoBox_'+$(obj).attr("id")+'" class="resLadderMode"><div class="title">ID: '+$(obj).attr("id")+'</div><div class="content">'+showModeContent+'</div></div>');
        }

        //global info
        function fnGlobalInfo(showModeData){
            var showModeContent = 'CurrentScroll: '+showModeData['currScrollPos']+'<br>'+
                'scrollAmt: '+showModeData['scrollAmt']+'<br>';
            $("#resGlobalInfo").remove();
            $('body').append('<div id="resGlobalInfo" class="resLadderMode"><div class="title">Setup Mode: ON</div><div class="content">'+showModeContent+'</div></div>');
        }
    }

    //物件Follow定位功能 (跟屁蟲)
    $.fn.JResFollowObj = function(options) {
        var defaults = {
            state: true,
            position: 'absolute',
            pos: {
                top: 0,
                left: 0
            },
            z: 0,
            delay: 100
        };
        options = $.extend(defaults, options);
        var obj = $(this);
        var state = options.state;
        var position = options.position;
        var pos = options.pos;
        var posY = 0;
        var delay = options.delay;
        var z = options.z;

        //使用
        if (state && $(obj).length > 0) {
            //定義物件
            $(obj).addClass("JResFollowObj");

            //定位類型
            $(obj).css({'position':position,'z-index':z});

            //定位初始位置
            if(!$.isEmptyObject(pos)){
                for (var init in pos) {
                    $(obj).css(init,pos[init]);
                    if (init == "top"){
                        posY = pos[init];
                    }
                }
            }

            //加入控制
            if (position == "fixed"){
                $(obj).css({top:($(this).scrollTop()+posY)+'px'});
            }else{
                var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "scroll" //FF doesn't recognize mousewheel as of FF3.x
                $(window).on(mousewheelevt, function(e){
                    $(obj).animate({top:($(this).scrollTop()+posY)+'px'},delay);
                });
            }
        }
    }

    //tab功能
    $.fn.JResContentTab = function(options) {
        var defaults = {
            init: 0,
            fx: 'slide',
            transitTime: 300,
            createTabs: {},
            onClick: false
        };
        options = $.extend(defaults, options);
        var tabObj = $(this);
        var targetTab = (window.location.hash != "#")?window.location.hash:"";
        var getHashIndex = $(targetTab,tabObj).index(); //取得網址參數
        var tabInit = (getHashIndex != -1)?getHashIndex:options.init;
        var fx = options.fx;
        var transitTime = options.transitTime;
        var tabsObj = options.createTabs;
        var tabsBtn = '';
        var tabsContent = '';

        //檢查是否有js寫入
        if(!$.isEmptyObject(tabsObj)){
            for (var tabs in tabsObj) {
                tabsBtn += '<li><a href="#'+tabsObj[tabs]['id']+'" class="tabsBtn">'+tabsObj[tabs]['text']+'</a></li>';
                tabsContent += '<li id="'+tabsObj[tabs]['id']+'" class="tabsContent">'+tabsObj[tabs]['content']+'</li>';
            }
            $(this).html('<ul class="tabs">'+tabsBtn+'</ul>'+'<ul class="tabs_content">'+tabsContent+'</ul>');
        }

        var targetObj = $(".tabsBtn:eq("+tabInit+")", tabObj).attr("href");

        $(".tabsContent").append("<div class='clear'></div>");
        //init
        $(".tabsBtn:eq("+tabInit+")", tabObj).addClass("active");
        $(".tabsContent"+targetObj, tabObj).css("display","block");

        //event
        $(tabObj).on('click','.tabsBtn', function(){
            if (!$(this).hasClass("noTab")) {
                if (!$(this).hasClass("active")){
                    fnFx($(".tabsContent", tabObj), fx, 'hide', transitTime);
                    $(".tabsBtn", tabObj).removeClass("active");
                    var targetObj = $(this).attr("href");
                    //console.log(tabObj);
                    fnFx($(targetObj, tabObj), fx, 'show', transitTime);
                    $(this).addClass("active");

                    //執行客製動作
                    if (options.onClick != false) {
                        options.onClick.call( $(tabObj) );
                    }

                }
                return false;
            }
        })

        //轉場效果
        function fnFx(obj, fx, evt, transitTime){
            switch(fx){
                case 'fade': 
                    if (evt == 'show'){
                        $(obj).fadeIn(transitTime);
                    }else{
                        $(obj).fadeOut(transitTime);
                    }
                break;
                case 'slide': 
                    if (evt == 'show'){
                        $(obj).slideDown(transitTime);
                    }else{
                        $(obj).slideUp(transitTime);
                    }
                break;
                default:
                    if (evt == 'show'){
                        $(obj).show(transitTime);
                    }else{
                        $(obj).hide(transitTime);
                    }
                break;
            }
           

        }
    };

    //選單功能功能
    $.fn.JResMenu = function(options) {
        var defaults = {
            view: 'vertical',
            action: 'click'
        };
        options = $.extend(defaults, options);
        $(this).each(function(){
            var obj = $(this);
            var view = options.view;
            var action = options.action;

            //如針對目前在操作中的menu，將其z-index設為上層
            $(obj).on('mouseenter',function(){
                $(this).css("z-index","2");
            }).on('mouseleave',function(){
                $(this).css("z-index","1");
            });

            //將所有的ul後面加入clear
            $("ul",obj).each(function(){
                $(this).after("<div class='clear'></div>");
            });
            //將有子層級的按鈕加入class
            $("li",obj).each(function(){
                if ($(this).children('ul').length > 0) {
                    $('>a',this).addClass('hasChild');
                }
            });

            //判斷view類型
            switch (view){
                case 'horizontal':
                    //add style
                    $(obj).addClass("resMenu2");

                    //add event
                    if (action == 'hover') {
                        //hover event
                        $(obj).on('mouseenter','li',function(e){
                            $(">ul",this).slideDown(10);
                        }).on('mouseleave','li',function(e){
                            $(this).parent().children().each(function(){
                                $(this).children('ul').slideUp(10);
                            })
                        })
                    }else{
                        //click event
                        $(obj).on('click','li',function(e){
                            if ($(e.target).hasClass("hasChild")) {
                                //偵測同層目錄下的物件就收起來
                                $(this).parent().children().each(function(){
                                    $(this).children('ul').slideUp(200);
                                })

                                //偵測目前點擊的物件是否有子目錄，有的話就開啟
                                if($(">ul",this).length > 0){
                                    if ($(">ul",this).css('display') == 'none') {
                                        $(">ul",this).slideDown(200);
                                    }else{
                                        $(">ul",this).slideUp(200);
                                    }
                                    return false;
                                }

                                //只偵測到目前的物件
                                e.stopPropagation(); 

                            }

                            
                        }).on('mouseleave',function(){
                            $('li>ul',this).slideUp(200);
                        });
                    }

                break;
                case 'vertical':
                    //add style
                    $(obj).addClass("resMenu");

                    //add event
                    if (action == 'hover') {
                        //hover event
                        $(obj).on('mouseenter','li',function(e){
                            $(">ul",this).slideDown(500);
                        }).on('mouseleave','li',function(e){
                            //偵測同層目錄下的物件是否有active,沒有的話就收起來
                            $(this).parent().children().each(function(){
                                if(!$(this).hasClass('active')){
                                    $(this).children('ul').slideUp(500);
                                }
                            })
                        })

                    }else{
                        //click event
                        $(obj).on('click','li',function(e){
                            //偵測同層目錄下的物件是否有active,沒有的話就收起來
                            if ($(e.target).hasClass("hasChild")) {
                                $(this).parent().children().each(function(){
                                    if(!$(this).hasClass('active')){
                                        $(this).children('ul').slideUp(200);
                                    }
                                })

                                //偵測目前點擊的物件是否有子目錄，有的話就開啟
                                if($(">ul",this).length > 0){
                                    if ($(">ul",this).css('display') == 'none') {
                                        $(">ul",this).slideDown(200);
                                    }else{
                                        $(">ul",this).slideUp(200);
                                    }
                                    return false;
                                }

                                //只偵測到目前的物件
                                //console.log($(e.target).hasClass("hasChild"));
                                e.stopPropagation();
                            }
                        })
                    }
                break;
            }

        });
    }

    //slider功能
    $.fn.JResContentSlider = function(options) {
        var defaults = {
            autoPlay: true,
            delayTime: 3000,
            touchSwipAmt: 100, 
            transitionTime: 1000,
            listAmt: 5,
            listPaddingAmt: 2,
            from:0,
            btnSetup:{
                nextBtn:{
                    state: true,
                    width: 20
                },
                prevBtn:{
                    state: true,
                    width: 20
                }
            },
            setupResposive: {}
        };
        options = $.extend(defaults, options);

        //設定物件model
        var obj = $(this);
        var autoPlay = options.autoPlay;
        var touchSwipAmt = options.touchSwipAmt;
        var delayTime = options.delayTime;
        var transitionTime = options.transitionTime;
        var listAmt = parseInt(options.listAmt);
        var listPaddingAmt = parseInt(options.listPaddingAmt);
        var btnSetup = options.btnSetup;
        var paddingAmt = options.paddingAmt;
        var from = options.from;

        var setupResposive = options.setupResposive;
        //檢查是否有響應式設定
        if(!$.isEmptyObject(setupResposive)){
            var checkWinWArray = [];
            for (var winW in setupResposive){
                checkWinWArray.push(winW); //先建立Windows Index for sorting
            }

            checkWinWArray = checkWinWArray.sort(function(a, b){return b-a}); //DESC Sorting

            //update listAmt
            for (var i=0;i<checkWinWArray.length;i++) {
                if ($(window).width() < checkWinWArray[i]) {
                    listAmt = (setupResposive[checkWinWArray[i]]['listAmt'] != undefined)?setupResposive[checkWinWArray[i]]['listAmt']:listAmt;
                    listPaddingAmt = (setupResposive[checkWinWArray[i]]['listPaddingAmt'] != undefined)?setupResposive[checkWinWArray[i]]['listPaddingAmt']:listPaddingAmt;
                    btnSetup = (setupResposive[checkWinWArray[i]]['btnSetup'] != undefined)?setupResposive[checkWinWArray[i]]['btnSetup']:btnSetup;
                    autoPlay = (setupResposive[checkWinWArray[i]]['autoPlay'] != undefined)?setupResposive[checkWinWArray[i]]['autoPlay']:btnSetup;
                }
            }
        }

        //創建按鈕組
        if(!$.isEmptyObject(btnSetup)){
            for (var btn in btnSetup) {
                var setState = (btnSetup[btn]['state'] != undefined)?btnSetup[btn]['state']:true;
                if(setState){
                    var setWidth = (btnSetup[btn]['width'] != undefined)?btnSetup[btn]['width']:20;
                    var setStyle =  'style="width:'+setWidth+'px';
                    switch (btn){
                        case "nextBtn":
                            $(".sliderContainer",obj).append('<div class="sliderContainerPrevBtn" '+setStyle+'"></div>');
                        break;
                        case "prevBtn":
                            $(".sliderContainer",obj).append('<div class="sliderContainerNextBtn" '+setStyle+'"></div>');
                        break;
                    }
                } 
            }    
        }
        var prevWidth = $(".sliderContainer .sliderContainerPrevBtn",obj).width();
        var nextWidth = $(".sliderContainer .sliderContainerNextBtn",obj).width();

        var amountOfItem = $(".sliderContainer>ul>li",obj).length;
        //var containerWidth = ($(window).width() > 800)?$(".sliderContainer",obj).width() - (nextWidth+prevWidth+paddingAmt):$(window).width() - (nextWidth+prevWidth+paddingAmt);
        var containerWidth = $(".sliderContainer",obj).width() - (nextWidth+prevWidth);
        //console.log(containerWidth);
        var itemWidth = (containerWidth/listAmt) - (listPaddingAmt*2);
        var startPOS = containerWidth*from*-1;
        var currentPOS = 0;
        var setContainerWidth = (itemWidth+(listPaddingAmt*2))*amountOfItem;
        var swipToNextPOS = 0;
        var swipToPrevPOS = 0;
        var trackSwipEvent = false;
        var startLimited = containerWidth*from;
        var endLimited = setContainerWidth-(startLimited);
        //console.log(currentPOS);
        //設定container樣式
        $(".sliderContainer>ul",obj).width(setContainerWidth).css({"margin-left":(prevWidth+startPOS)+"px","margin-right":nextWidth+"px"}); 
        //設定item樣式
        $(".sliderContainer>ul>li",obj).width(itemWidth).css({"margin":"0 "+listPaddingAmt+"px"});

        //將slide中圖片bind resIgnoreImgReSizer class
        $(".sliderContainer img",obj).each(function(){
            $(this).addClass("resIgnoreImgReSizer");
        })

        //設定control
        //prev btn event
        $(obj).on('click',".sliderContainerPrevBtn", function(){
            if ((currentPOS*-1) > (startLimited*-1)){
                currentPOS+=containerWidth;
            }else{
                currentPOS = -(endLimited-containerWidth);
            }
            $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
            //console.log(currentPOS);
        })

        //next btn event
        $(obj).on('click',".sliderContainerNextBtn", function(){
            if (((currentPOS*-1) < endLimited) && (endLimited+currentPOS) > containerWidth ){
                currentPOS-=containerWidth;
            }else{
                currentPOS = startLimited;
            }
            $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
            //console.log(currentPOS);
        })
        
        //content area event
        $(obj).on('mouseenter',".sliderContainer",function(e) {
            //mouseenter
            if(autoPlay) {
                //mouse over stop looping
                clearInterval(timeID);
            }

        }).on('mouseleave',".sliderContainer",function(e) {
            //mouseleave
            if(autoPlay) {
                timeID = setInterval(function() {
                    if (((currentPOS*-1) < endLimited) && (endLimited+currentPOS) > containerWidth ){
                        currentPOS-=containerWidth;
                    }else{
                        currentPOS = startLimited;
                    }
                    $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
                    //console.log(currentPOS);
                }, delayTime);
            }

        }).on('touchstart',".sliderContainer",function(e) {
            //touchstart
            var touch = e.originalEvent.touches[0];
            swipToNextPOS = touch.pageX-touchSwipAmt;
            swipToPrevPOS = touch.pageX+touchSwipAmt;
            trackSwipEvent = true;

        }).on('touchmove',".sliderContainer",function(e) {
            //touchmove
            var touch = e.originalEvent.touches[0];
            //swip to next
            if (trackSwipEvent && swipToNextPOS > touch.pageX){
                if (((currentPOS*-1) < endLimited) && (endLimited+currentPOS) > containerWidth ){
                    currentPOS-=containerWidth;
                }else{
                    currentPOS = startLimited;
                }
                $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
                trackSwipEvent = false;
            }

            //swip to prev
            if (trackSwipEvent && swipToPrevPOS < touch.pageX){
                if ((currentPOS*-1) > (startLimited*-1)){
                    currentPOS+=containerWidth;
                }else{
                    currentPOS = -(endLimited-containerWidth);
                }
                $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
                trackSwipEvent = false;
            }
        });

        //循環播放
        if(autoPlay) {
            var timeID = setInterval(function() {
                if (((currentPOS*-1) < endLimited) && (endLimited+currentPOS) > containerWidth ){
                    currentPOS-=containerWidth;
                }else{
                    currentPOS = startLimited;
                }
                $(".sliderContainer>ul",obj).animate({"left":currentPOS+"px"},transitionTime);
                //console.log(currentPOS);

            }, delayTime);
        }
    }

    //卷軸固定物件
    $.fn.JResScrollSticker = function(options) {
        var defaults = {
            position: {
               'top':'0' 
            }
        };
        options = $.extend(defaults, options);
        var targetObj = $(this);
        var position = options.position;
        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "scroll"; //FF doesn't recognize mousewheel as of FF3.x
        var tragglePos = $(targetObj).position().top+$(targetObj).height();

        $(window).on(mousewheelevt, function(e){
            //console.log($(this).scrollTop()+','+tragglePos);
            if($(this).scrollTop() < tragglePos){
                $(targetObj).css({
                    "position":"relative",
                    "z-index":"1",
                    "top":"0"
                });
            }else{
                $(targetObj).css({
                    "position":"fixed",
                    "z-index":"1000",
                    "top":"auto",
                    "bottom":"auto"
                }).css(position);
            }
        })
    }

    //loadCSS
    fnLoadCSS = function(id,href,media) {
      var cssLink = $("<link>");
      $("head").append(cssLink); //IE hack: append before setting href

      cssLink.attr({
        id: id,
        rel:  "stylesheet",
        type: "text/css",
        href: href,
        media: media
      });
    };

    //content scrollerbar
    // scrolltotop plugin
    /***********************************************
    *外掛: 向上按鈕*
    * Scroll To Top Control script- c Dynamic Drive DHTML code library (www.dynamicdrive.com)
    * Modified by www.MyBloggerTricks.com
    * Modified by www.scrolltotop.com
    * This notice MUST stay intact for legal use
    * Visit Project Page at http://www.dynamicdrive.com for full source code
    ***********************************************/
    var resScrolltotop = {
        //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
        //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
        setting: {
            startline: 100,
            scrollto: 0,
            scrollduration: 1e3,
            fadeduration: [ 500, 100 ]
        },
        controlHTML: "",
        //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
        controlattrs: {
            offsetx: 5,
            offsety: 5
        },
        //offset of control relative to right/ bottom of window corner
        anchorkeyword: "#top",
        //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links
        state: {
            isvisible: false,
            shouldvisible: false
        },
        scrollup: function() {
            if (!this.cssfixedsupport) //if control is positioned using JavaScript
            this.$control.css({
                opacity: 0
            });
            //hide control immediately after clicking it
            var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
            if (typeof dest == "string" && $("#" + dest).length == 1) //check element set by string exists
            dest = $("#" + dest).offset().top; else dest = 0;
            this.$body.animate({
                scrollTop: dest
            }, this.setting.scrollduration);
        },
        keepfixed: function() {
            var $window = $(window);
            var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
            var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
            this.$control.css({
                left: controlx + "px",
                top: controly + "px"
            });
        },
        togglecontrol: function() {
            var scrolltop = $(window).scrollTop();
            if (!this.cssfixedsupport) this.keepfixed();
            this.state.shouldvisible = scrolltop >= this.setting.startline ? true : false;
            if (this.state.shouldvisible && !this.state.isvisible) {
                this.$control.stop().animate({
                    opacity: 1
                }, this.setting.fadeduration[0]);
                this.state.isvisible = true;
            } else if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({
                    opacity: 0
                }, this.setting.fadeduration[1]);
                this.state.isvisible = false;
            }
        },
        init: function() {
            $(document).ready(function($) {
                var mainobj = resScrolltotop;
                var iebrws = document.all;
                mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
                //not IE or IE7+ browsers in standards mode
                mainobj.$body = window.opera ? document.compatMode == "CSS1Compat" ? $("html") : $("body") : $("html,body");
                mainobj.$control = $('<div id="topcontrol" ' + mainobj.controlHTML + '></div>').css({
                    position: mainobj.cssfixedsupport ? "fixed" : "absolute",
                    bottom: mainobj.controlattrs.offsety,
                    right: mainobj.controlattrs.offsetx,
                    opacity: 0,
                    cursor: "pointer",
                    "z-index": "999"
                }).attr({
                    title: "Scroll to Top"
                }).click(function() {
                    mainobj.scrollup();
                    return false;
                }).appendTo("#resMainWrap");
                if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") //loose check for IE6 and below, plus whether control contains any text
                mainobj.$control.css({
                    width: mainobj.$control.width()
                });
                //IE6- seems to require an explicit width on a DIV containing text
                mainobj.togglecontrol();
                $('a[href="' + mainobj.anchorkeyword + '"]').click(function() {
                    mainobj.scrollup();
                    return false;
                });
                $(window).bind("scroll resize", function(e) {
                    mainobj.togglecontrol();
                });
            });
        }
    };
    
    // scrolltotop plugin
    //Jres 螢幕尺寸變換同步功能
    //orientationchange reload
    //if in print mode or desktop mode, reload the page
    var resPrintActive = false;
    var resFullscreen = false;
    //default value set false
    if ($.JRes_getCookie() == "true" || $.JRes_getCookie() == null || $.JRes_getCookie() == "") {
        $(window).resize(function() {

                
            if (resRefreshMode) {
                if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile|Android)/)) {
                    if (!resPrintActive) {
                        //if not print event then reload when browser resize
                        //if browser in full screen than do not auto reload
                        //using screenfull plugin to check fullscreen mode
                        if (screenfull.enabled) {
                            if (screenfull.isFullscreen) {
                                resFullscreen = screenfull.isFullscreen;
                            }else{
                                window.setTimeout(function() {
                                    resFullscreen = screenfull.isFullscreen;
                                }, 100);
                            } 
                        }

                        //if is not full screen then reload the page
                        if (!resFullscreen) {
                            if (navigator.userAgent.match(/(Firefox)/)) {
                                //if in firefox
                                window.location.href = window.location.href;
                            } else {
                                //IE 9以下不進行重整
                                if (!$.JRes_isLtIE9()){
                                    //console.log($.JRes_isLtIE9());
                                    if (navigator.userAgent.match(/(IE 9|IE 10)/)){
                                        //IE 9 或 IE 10 則只在瀏覽器不等於螢幕寬的時候重整
                                        if ($(window).width() != window.innerWidth) {
                                            location.reload();
                                        }
                                    }else{
                                        location.reload();
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
        });
        $(window).on("orientationchange", function() {
            if (resRefreshMode) {
                if (navigator.userAgent.match(/(Firefox)/)) {
                    //if in firefox
                    window.location.href = window.location.href;
                } else {
                    //if in other browsers
                    location.reload();
                }
            }
        });
    }

    //save form data
    function resFnSaveForm(){
        //清掉原本存取的session
        sessionStorage.clear();

        //把form值暫存起來
        $("input,select,textarea").each(function(){
            if ($(this).attr('type') == "hidden" || $(this).attr('type') == "submit" || $(this).attr('type') == "reset") {
                //如果input為hidden,submit,reset則不進行存取
            }else{
                if ($(this).attr('name') != undefined) {
                    sessionStorage.setItem($(this).attr("name"), $(this).val());
                }
            }
        })


    }

    //read form data
    function resFnReadForm(){
        //把form值讀取出來
        $("input,select,textarea").each(function(){
            var value = sessionStorage.getItem($(this).attr("name"));

            if($(this).val() == "" && $(this).val() != value){
                if (value !== null) $(this).val(value);
            }

        })
    }


    //detect print event: if active set resPrintActive with value true
    var beforePrint = function() {
        resPrintActive = true;
    };
    //after print event: once print event detect then reset resPrintActive with value false
    var afterPrint = function() {
        resPrintActive = false;
    };
    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia("print");
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    //Jres 螢幕尺寸變換同步功能
    //-- check resCol img width --
    $(window).bind("load", function() {

        //處理resTable
        $(".resTable td").each(function(){
            if ($(this).html() == "&nbsp;" || $(this).html() == "" || $(this).html() == " "){
                $(this).addClass("resEmptyCol");
            }
        })

        //處理res排版圖片尺寸
        $('.resRow [class*="resCol"]').each(function() {
            $resColW = $(this).width();
            //console.log("width:"+$resColW);
            $("img", this).each(function() {
                if (!$(this).hasClass("resIgnoreImgReSizer")) {
                    $(this).css("width", "auto");
                    //偵測尺寸前先還原圖片尺寸
                    if (!$(this).hasClass("resEnlargeImg")) {
                        if ($(this).width() >= $resColW) {
                            $(this).css("width", "100%");
                        } else {
                            //如果是以100%比方式出值，則直接以100%來出圖
                            if ($resColW <= 100) {
                                $(this).css("width", "100%");
                            } else {
                                $(this).css("width", "auto");
                            }
                        }
                    } else {
                        $(this).parent(".resEnlarge").css("width", "100%");
                        if($(this).parent(".resEnlarge").width() < $(this).width()) {
                            $(this).css({"width":"100%","height":"auto"});
                        }
                    }
                }
            });
        });

    });

    //document ready action
    var resStoreData = true;
    $(document).ready(function(){
        //取消a在IE中的focus
        $("a").focus(function(){$(this).blur()})
    })

    // Run on page load
    $(window).on('load',function() {
        //把form值讀取出來
        //resFnReadForm();
    });

    // Before refreshing the page, save the form data to sessionStorage
    $(window).unload(function() {
        //把form值暫存起來
        //resFnSaveForm();
    });

})(jQuery);