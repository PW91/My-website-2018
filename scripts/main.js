!function(){function e(t,i,n){function o(r,l){if(!i[r]){if(!t[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};t[r][0].call(u.exports,function(e){var i=t[r][1][e];return o(i||e)},u,u.exports,e,t,i,n)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}return e}()({1:[function(e,t,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n){if("function"==typeof define&&define.amd)define("GLightbox",["module"],n);else if("undefined"!=typeof i)n(t);else{var o={exports:{}};n(o),e.GLightbox=o.exports}}(void 0,function(e){function t(){var e={},i=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],n++);for(var s=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=t(!0,e[o],n[o]):e[o]=n[o])};n<o;n++)s(arguments[n]);return e}function i(e,t){if((I.isNode(e)||e===window||e===document)&&(e=[e]),I.isArrayLike(e)||I.isObject(e)||(e=[e]),0!=I.size(e))if(I.isArrayLike(e)&&!I.isObject(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(I.isObject(e))for(var o in e)if(I.has(e,o)&&!1===t.call(e[o],e[o],o,e))break}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=e[O]=e[O]||[],s={all:o,evt:null,found:null};return t&&n&&I.size(o)>0&&i(o,function(e,i){if(e.eventName==t&&e.fn.toString()==n.toString())return s.found=!0,s.evt=i,!1}),s}function s(e){function t(e){I.isFunction(r)&&r.call(f,e,this),u&&t.destroy()}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.onElement,r=n.withCallback,l=n.avoidDuplicate,a=void 0===l||l,c=n.once,u=void 0!==c&&c,d=n.useCapture,h=void 0!==d&&d,f=arguments[2],v=s||[];return I.isString(v)&&(v=document.querySelectorAll(v)),t.destroy=function(){i(v,function(i){var n=o(i,e,t);n.found&&n.all.splice(n.evt,1),i.removeEventListener&&i.removeEventListener(e,t,h)})},i(v,function(i){var n=o(i,e,t);(i.addEventListener&&a&&!n.found||!a)&&(i.addEventListener(e,t,h),n.all.push({eventName:e,fn:t}))}),t}function r(e,t){a(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function l(e,t){var n=t.split(" ");n.length>1?i(n,function(t){l(e,t)}):e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function a(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"==t)return I.isFunction(n)&&n(),!1;var o=t.split(" ");i(o,function(t){r(e,"g"+t)}),s(N,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){i(o,function(e){l(t,"g"+e)}),I.isFunction(n)&&n()}})}function u(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function d(e,t){for(;e!==document.body;)if("function"==typeof(e=e.parentElement).matches?e.matches(t):e.msMatchesSelector(t))return e}function h(e){e.style.display="block"}function f(e){e.style.display="none"}function v(e,t,i,n,o){var s=document.createElement("iframe"),l=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return s.className="vimeo-video gvideo",s.src=e,s.style.height=E&&l<767?"":i+"px",s.style.width=t+"px",s.setAttribute("allowFullScreen",""),s.onload=function(){r(s,"iframe-ready"),I.isFunction(n)&&n()},o&&o.appendChild(s),s}function m(e,t){if(I.isNil(e))console.error("Inject videos api error");else{var i=document.querySelectorAll('script[src="'+e+'"]');if(I.isNil(i)||0==i.length){var n=document.createElement("script");return n.type="text/javascript",n.src=e,n.onload=function(){I.isFunction(t)&&t()},document.body.appendChild(n),!1}I.isFunction(t)&&t()}}function g(){for(var e=0;e<L.length;e++){var t=L[e],i=new YT.Player(t);T[t.id]=i}}function p(e){var t="",n=0;return i(e,function(e,i){n>0&&(t+="&amp;"),t+=i+"="+e,n+=1}),t}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""==t?(e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1):(e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t,void 0)}function b(e){var t=e.querySelector(".gslide-media"),i=e.querySelector(".gslide-description");r(t,"greset"),y(t,"translate3d(0, 0, 0)"),s(A,{onElement:t,once:!0,withCallback:function(e,i){l(t,"greset")}}),t.style.opacity="",i&&(i.style.opacity="")}var S=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),w="function"==typeof Symbol&&"symbol"==n(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":n(e)},E=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),x=null!==E||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,C=document.getElementsByTagName("html")[0],k=document.body,A=function(){var e=void 0,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),N=function(){var e=void 0,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),O=Date.now(),L=[],T={},q={selector:"glightbox",skin:"clean",closeButton:!0,startAt:0,autoplayVideos:!0,descPosition:"bottom",width:900,height:506,videosWidth:960,videosHeight:540,beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,onOpen:null,onClose:null,loopAtEnd:!1,touchNavigation:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,jwplayer:{api:null,licenseKey:null,params:{width:"100%",aspectratio:"16:9",stretching:"uniform"}},vimeo:{api:"https://player.vimeo.com/api/player.js",params:{api:1,title:0,byline:0,portrait:0}},youtube:{api:"https://www.youtube.com/iframe_api",params:{enablejsapi:1,showinfo:0}},openEffect:"zoomIn",closeEffect:"zoomOut",slideEffect:"slide",moreText:"See more",moreLength:60,lightboxHtml:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"}}};q.slideHtml='<div class="gslide">         <div class="gslide-inner-content">            <div class="ginner-container">               <div class="gslide-media">               </div>               <div class="gslide-description">                  <h4 class="gslide-title"></h4>                  <div class="gslide-desc"></div>               </div>            </div>         </div>       </div>',q.lightboxHtml='<div id="glightbox-body" class="glightbox-container">            <div class="gloader visible"></div>            <div class="goverlay"></div>            <div class="gcontainer">               <div id="glightbox-slider" class="gslider"></div>               <a class="gnext"></a>               <a class="gprev"></a>               <a class="gclose"></a>            </div>   </div>';var I={isFunction:function(e){return"function"==typeof e},isString:function(e){return"string"==typeof e},isNode:function(e){return!(!e||!e.nodeType||1!=e.nodeType)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e&&e.length&&isFinite(e.length)},isObject:function(e){return"object"===(void 0===e?"undefined":w(e))&&null!=e&&!I.isFunction(e)&&!I.isArray(e)},isNil:function(e){return null==e},has:function(e,t){return null!==e&&hasOwnProperty.call(e,t)},size:function(e){if(I.isObject(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)I.has(e,i)&&t++;return t}return e.length},isNumber:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments[1],o={href:"",title:"",description:"",descPosition:"bottom",effect:"",node:e};if(I.isObject(e)&&!I.isNode(e))return t(o,e);var s="",r=e.getAttribute("data-glightbox"),l=e.nodeName.toLowerCase();"a"===l&&(s=e.href),"img"===l&&(s=e.src),o.href=s,i(o,function(t,i){I.has(n,i)&&(o[i]=n[i]);var s=e.dataset[i];I.isNil(s)||(o[i]=s)});var a=j(s);if(o=t(o,a),I.isNil(r)){if("a"==l){var c=e.title;I.isNil(c)||""===c||(o.title=c)}if("img"==l){var u=e.alt;I.isNil(u)||""===u||(o.title=u)}var d=e.getAttribute("data-description");I.isNil(d)||""===d||(o.description=d)}else{var h=[];i(o,function(e,t){h.push(";\\s?"+t)}),h=h.join("\\s?:|"),""!==r.trim()&&i(o,function(e,t){var i=r,n=new RegExp("s?"+t+"s?:s?(.*?)("+h+"s?:|$)"),s=i.match(n);if(s&&s.length&&s[1]){var l=s[1].trim().replace(/;\s*$/,"");o[t]=l}})}var f=e.querySelector(".glightbox-desc");f&&(o.description=f.innerHTML),o.sourcetype=o.hasOwnProperty("type")?o.type:o.sourcetype,o.type=o.sourcetype;var v="video"==o.sourcetype?n.videosWidth:n.width,m="video"==o.sourcetype?n.videosHeight:n.height;return o.width=I.has(o,"width")?o.width:v,o.height=I.has(o,"height")?o.height:m,o},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(a(e,"loaded"))return!1;I.isFunction(this.settings.beforeSlideLoad)&&this.settings.beforeSlideLoad(e,n);var c=n.type,h=n.descPosition,f=e.querySelector(".gslide-media"),g=e.querySelector(".gslide-title"),y=e.querySelector(".gslide-desc"),b=e.querySelector(".gslide-description"),S=o;if(I.isFunction(this.settings.afterSlideLoad)&&(S=function(){I.isFunction(o)&&o(),i.settings.afterSlideLoad(e,n)}),""==n.title&&""==n.description?b&&b.parentNode.removeChild(b):(g&&""!==n.title?g.innerHTML=n.title:g.parentNode.removeChild(g),y&&""!==n.description?E&&this.settings.moreLength>0?(n.smallDescription=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i;if((e=e.trim()).length<=t)return e;var o=e.substr(0,t-1);return n?o+'... <a href="#" class="desc-more">'+i+"</a>":o}(n.description,this.settings.moreLength,this.settings.moreText),y.innerHTML=n.smallDescription,function e(t,i){var n=t.querySelector(".desc-more");return!!n&&void s("click",{onElement:n,withCallback:function(t,n){t.preventDefault();var o=d(n,".gslide-desc");if(!o)return!1;o.innerHTML=i.description,r(k,"gdesc-open");var a=s("click",{onElement:[k,d(o,".gslide-description")],withCallback:function(t,n){"a"!==t.target.nodeName.toLowerCase()&&(l(k,"gdesc-open"),r(k,"gdesc-closed"),o.innerHTML=i.smallDescription,e(o,i),setTimeout(function(){l(k,"gdesc-closed")},400),a.destroy())}})}})}.apply(this,[y,n])):y.innerHTML=n.description:y.parentNode.removeChild(y),r(f.parentNode,"desc-"+h),r(b,"description-"+h)),r(f,"gslide-"+c),r(e,"loaded"),"video"!==c)if("external"!==c)if("inline"!==c){if("image"===c){var w=new Image;return w.addEventListener("load",function(){I.isFunction(S)&&S()},!1),w.src=n.href,void f.appendChild(w)}I.isFunction(S)&&S()}else(function(e,t,i){var n=e.querySelector(".gslide-media"),o=document.getElementById(t.inlined.replace("#",""));if(o){var s=o.cloneNode(!0);return s.style.height=t.height+"px",s.style.maxWidth=t.width+"px",r(s,"ginlined-content"),n.appendChild(s),void(I.isFunction(i)&&i())}}).apply(this,[e,n,S]);else{var x=v(n.href,n.width,n.height,S);f.appendChild(x)}else(function(e,i,n){var o=this,s=i.source,l="gvideo"+i.index,a=e.querySelector(".gslide-media"),c=i.href,d=location.protocol.replace(":","");if("file"==d&&(d="http"),"vimeo"==s){var h=/vimeo.*\/(\d+)/i.exec(c),f=p(this.settings.vimeo.params),g=d+"://player.vimeo.com/video/"+h[1]+"?"+f;m(this.settings.vimeo.api);var y=v(g,i.width,i.height,function(){!function(e,t,i,n){if(e())return void t();i||(i=100);var o,s=setInterval(function(){e()&&(clearInterval(s),o&&clearTimeout(o),t())},i);n&&(o=setTimeout(function(){clearInterval(s)},n))}(function(){return"undefined"!=typeof Vimeo},function(){var e=new Vimeo.Player(y);T[l]=e,I.isFunction(n)&&n()})},a);y.id=l,y.className="vimeo-video gvideo",this.settings.autoplayVideos&&!E&&(y.className+=" wait-autoplay")}if("youtube"==s){var b=t(this.settings.youtube.params,{playerapiid:l}),S=p(b),w=function(e){var t="";return t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e}(c),x=d+"://www.youtube.com/embed/"+w+"?"+S;m(this.settings.youtube.api);var C=v(x,i.width,i.height,function(){if(!I.isNil(YT)&&YT.loaded){var e=new YT.Player(C);T[l]=e}else L.push(C);I.isFunction(n)&&n()},a);C.id=l,C.className="youtube-video gvideo",this.settings.autoplayVideos&&!E&&(C.className+=" wait-autoplay")}if("local"==s){var k='<video id="'+l+'" ';k+='style="background:#000; width: '+i.width+"px; height: "+i.height+'px;" ',k+='preload="metadata" ',k+='x-webkit-airplay="allow" ',k+='webkit-playsinline="" ',k+="controls ",k+='class="gvideo">';var A=c.toLowerCase().split(".").pop(),N={mp4:"",ogg:"",webm:""};for(var O in N[A]=c,N)if(N.hasOwnProperty(O)){var q=N[O];i.hasOwnProperty(O)&&(q=i[O]),""!==q&&(k+='<source src="'+q+'" type="video/'+O+'">')}var B=u(k+="</video>");a.appendChild(B);var M=document.getElementById(l);if(null!==this.settings.jwplayer&&null!==this.settings.jwplayer.api){this.settings.jwplayer;var j=this.settings.jwplayer.api;if(!j)return console.warn("Missing jwplayer api file"),I.isFunction(n)&&n(),!1;m(j,function(){var e=t(o.settings.jwplayer.params,{width:i.width+"px",height:i.height+"px",file:c});jwplayer.key=o.settings.jwplayer.licenseKey;var s=jwplayer(l);s.setup(e),T[l]=s,s.on("ready",function(){r(M=a.querySelector(".jw-video"),"gvideo"),M.id=l,I.isFunction(n)&&n()})})}else r(M,"html5-video"),T[l]=M,I.isFunction(n)&&n()}}).apply(this,[e,n,S])};void 0!==window.onYouTubeIframeAPIReady?window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady(),g()}:window.onYouTubeIframeAPIReady=g;var j=function(e){var t=e,i={};if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|gif|png|apn|webp|svg)$/))return i.sourcetype="image",i;if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return i.sourcetype="video",i.source="youtube",i;if(e.match(/vimeo\.com\/([0-9]*)/))return i.sourcetype="video",i.source="vimeo",i;if(null!==e.match(/\.(mp4|ogg|webm)$/))return i.sourcetype="video",i.source="local",i;if(e.indexOf("#")>-1){var n=t.split("#").pop();if(""!==n.trim())return i.sourcetype="inline",i.source=e,i.inlined="#"+n,i}return e.includes("gajax=true")&&(i.sourcetype="ajax",i.source=e),i.sourcetype="external",i.source=e,i},F=function(){function e(i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=t(q,i||{}),this.effectsClasses=this.getAnimationClasses()}return S(e,[{key:"init",value:function(){var e=this;this.baseEvents=s("click",{onElement:"."+this.settings.selector,withCallback:function(t,i){t.preventDefault(),e.open(i)}})}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=this.getElements(e),0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var t=this.settings.startAt;e&&(t=this.elements.indexOf(e))<0&&(t=0),this.build(),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var i=k.offsetWidth;return k.style.width=i+"px",r(k,"glightbox-open"),r(C,"glightbox-open"),E&&(r(C,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(t,!0),1==this.elements.length?(f(this.prevButton),f(this.nextButton)):(h(this.prevButton),h(this.nextButton)),this.lightboxOpen=!0,I.isFunction(this.settings.onOpen)&&this.settings.onOpen(),E&&x&&this.settings.touchNavigation?(function(){var e=this;if(this.events.hasOwnProperty("touchStart"))return!1;var t=void 0,i=void 0,n=void 0,o=!1,c=!1,u=!1,d=!1,h={},f={},v=(this.slidesContainer,null),m=0,g=0,p=null,S=null,w=null,E=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.events.doctouchmove=s("touchmove",{onElement:document,withCallback:function(e,t){if(a(k,"gdesc-open"))return e.preventDefault(),!1}}),this.events.touchStart=s("touchstart",{onElement:k,withCallback:function(t,i){a(k,"gdesc-open")||(r(k,"touching"),v=e.getActiveSlide(),p=v.querySelector(".gslide-image"),S=v.querySelector(".gslide-media"),w=v.querySelector(".gslide-description"),e.index,f=t.targetTouches[0],h.pageX=t.targetTouches[0].pageX,h.pageY=t.targetTouches[0].pageY,m=t.targetTouches[0].clientX,g=t.targetTouches[0].clientY)}}),this.events.gestureStart=s("gesturestart",{onElement:k,withCallback:function(e,t){p&&(e.preventDefault(),u=!0)}}),this.events.gestureChange=s("gesturechange",{onElement:k,withCallback:function(e,t){e.preventDefault(),y(p,"scale("+e.scale+")")}}),this.events.gesturEend=s("gestureend",{onElement:k,withCallback:function(e,t){u=!1,e.scale<1?(d=!1,y(p,"scale(1)")):d=!0}}),this.events.touchMove=s("touchmove",{onElement:k,withCallback:function(s,r){if(a(k,"touching")&&!(a(k,"gdesc-open")||u||d)){s.preventDefault(),f=s.targetTouches[0];var l=v.querySelector(".gslide-inner-content").offsetHeight,p=v.querySelector(".gslide-inner-content").offsetWidth,x=s.targetTouches[0].clientX,C=s.targetTouches[0].clientY,A=m-x,N=g-C;if(Math.abs(A)>Math.abs(N)?(o=!1,c=!0):(c=!1,o=!0),o){if(i=f.pageY-h.pageY,Math.abs(i)>=0||o){var O=.75-Math.abs(i)/l;S.style.opacity=O,w&&(w.style.opacity=O),y(S,"translate3d(0, "+i+"px, 0)")}}else if(t=f.pageX-h.pageX,n=100*t/E,c){if(e.index+1==e.elements.length&&t<-60)return b(v),!1;if(e.index-1<0&&t>60)return b(v),!1;var L=.75-Math.abs(t)/p;S.style.opacity=L,w&&(w.style.opacity=L),y(S,"translate3d("+n+"%, 0, 0)")}}}}),this.events.touchEnd=s("touchend",{onElement:k,withCallback:function(s,r){i=f.pageY-h.pageY,t=f.pageX-h.pageX,n=100*t/E,l(k,"touching");var a=v.querySelector(".gslide-inner-content").offsetHeight,u=v.querySelector(".gslide-inner-content").offsetWidth;if(o){var d=a/2;return o=!1,Math.abs(i)>=d?void e.close():void b(v)}if(c){c=!1;var m="prev",g=!0;if(t<0&&(m="next",t=Math.abs(t)),"prev"==m&&e.index-1<0&&(g=!1),"next"==m&&e.index+1>=e.elements.length&&(g=!1),g&&t>=u/2-90)return void("next"==m?e.nextSlide():e.prevSlide());b(v)}}})}.apply(this),!1):void(this.settings.keyboardNavigation&&function(){var e=this;return!this.events.hasOwnProperty("keyboard")&&void(this.events.keyboard=s("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}}))}.apply(this))}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];h(this.loader),this.index=t;var n=this.slidesContainer.querySelector(".current");n&&l(n,"current"),this.slideAnimateOut();var o=this.slidesContainer.querySelectorAll(".gslide")[t];if(h(this.slidesContainer),a(o,"loaded"))this.slideAnimateIn(o,i),f(this.loader);else{h(this.loader);var s=B(this.elements[t],this.settings);s.index=t,M.apply(this,[o,s,function(){f(e.loader),e.slideAnimateIn(o,i)}])}this.preloadSlide(t+1),this.preloadSlide(t-1),l(this.nextButton,"disabled"),l(this.prevButton,"disabled"),0===t?r(this.prevButton,"disabled"):t===this.elements.length-1&&!0!==this.settings.loopAtEnd&&r(this.nextButton,"disabled"),this.activeSlide=o}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length)return!1;if(I.isNil(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(a(i,"loaded"))return!1;var n=B(this.elements[e],this.settings);n.index=e;var o=n.sourcetype;"video"==o||"external"==o?setTimeout(function(){M.apply(t,[i,n])},200):M.apply(this,[i,n])}},{key:"prevSlide",value:function(){var e=this.index-1;return!(e<0)&&void this.goToSlide(e)}},{key:"nextSlide",value:function(){var e=this.index+1;return!(e>this.elements.length)&&void this.goToSlide(e)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e>-1&&(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,e<this.elements.length?this.showSlide(e):!0===this.settings.loopAtEnd&&(e=0,this.showSlide(e)))}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),o=e.querySelector(".gslide-description"),s={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},a={index:this.index,slide:this.activeSlide};if(n.offsetWidth>0&&o&&(f(o),e.querySelector(".ginner-container").style.maxWidth=n.offsetWidth+"px",o.style.display=""),l(e,this.effectsClasses),t)c(e,this.settings.openEffect,function(){!E&&i.settings.autoplayVideos&&i.playSlideVideo(e),I.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,a])});else{var u=this.settings.slideEffect,d="none"!==u?this.settings.cssEfects[u].in:u;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(d=this.settings.cssEfects.slide_back.in),c(e,d,function(){!E&&i.settings.autoplayVideos&&i.playSlideVideo(e),I.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,a])})}r(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;l(e,this.effectsClasses),r(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.stopSlideVideo(e),I.isFunction(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},{index:this.index,slide:this.activeSlide}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slide_back.out),c(e,i,function(){var t=e.querySelector(".gslide-media"),i=e.querySelector(".gslide-description");t.style.transform="",l(t,"greset"),t.style.opacity="",i&&(i.style.opacity=""),l(e,"prev")})}},{key:"stopSlideVideo",value:function(e){I.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e?e.querySelector(".gvideo"):null;if(!t)return!1;var i=t.id;if(T&&T.hasOwnProperty(i)){var n=T[i];a(t,"vimeo-video")&&n.pause(),a(t,"youtube-video")&&n.pauseVideo(),a(t,"jw-video")&&n.pause(!0),a(t,"html5-video")&&n.pause()}}},{key:"playSlideVideo",value:function(e){I.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e.querySelector(".gvideo");if(!t)return!1;var i=t.id;if(T&&T.hasOwnProperty(i)){var n=T[i];return a(t,"vimeo-video")&&n.play(),a(t,"youtube-video")&&n.playVideo(),a(t,"jw-video")&&n.play(),a(t,"html5-video")&&n.play(),setTimeout(function(){l(t,"wait-autoplay")},300),!1}}},{key:"setElements",value:function(e){this.settings.elements=e}},{key:"getElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=[],!I.isNil(this.settings.elements)&&I.isArray(this.settings.elements))return this.settings.elements;var t=!1;if(null!==e){var i=e.getAttribute("data-gallery");i&&""!==i&&(t=document.querySelectorAll('[data-gallery="'+i+'"]'))}return 0==t&&(t=document.querySelectorAll("."+this.settings.selector)),t=Array.prototype.slice.call(t)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g"+i.in),e.push("g"+i.out)}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=u(this.settings.lightboxHtml);document.body.appendChild(t);var n=document.getElementById("glightbox-body");this.modal=n;var o=n.querySelector(".gclose");this.prevButton=n.querySelector(".gprev"),this.nextButton=n.querySelector(".gnext"),this.overlay=n.querySelector(".goverlay"),this.loader=n.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},r(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&o&&(this.events.close=s("click",{onElement:o,withCallback:function(t,i){t.preventDefault(),e.close()}})),o&&!this.settings.closeButton&&o.parentNode.removeChild(o),this.nextButton&&(this.events.next=s("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=s("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=s("click",{onElement:n,withCallback:function(t,i){d(t.target,".ginner-container")||a(t.target,"gnext")||a(t.target,"gprev")||e.close()}})),i(this.elements,function(){var t=u(e.settings.slideHtml);e.slidesContainer.appendChild(t)}),x&&r(C,"glightbox-touch"),this.built=!0}},{key:"reload",value:function(){this.init()}},{key:"close",value:function(){var e=this;return!this.closing&&(this.closing=!0,this.stopSlideVideo(this.activeSlide),r(this.modal,"glightbox-closing"),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),c(this.activeSlide,this.settings.closeEffect,function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events)for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();l(k,"glightbox-open"),l(C,"glightbox-open"),l(k,"touching"),l(k,"gdesc-open"),k.style.width="",e.modal.parentNode.removeChild(e.modal),I.isFunction(e.settings.onClose)&&e.settings.onClose(),e.closing=null}),void 0)}},{key:"destroy",value:function(){this.close(),this.baseEvents.destroy()}}]),e}();e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new F(e);return t.init(),t}})},{}],2:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=e("./glightbox"),s=n(o),r=e("./smoothscroll"),l=n(r);!function(){function e(){var e=window.scrollY-window.innerHeight/2;e>b.offsetTop?"contact"!==N&&(a("contact"),c(),r(C),r(m),i(A,"12.6vw","1140%")):e>y.offsetTop?"exp"!==N&&(a("exp"),c(),r(x),r(v),i(A,"9.85vw","430%")):e>p.offsetTop?"skills"!==N&&(a("skills"),c(),r(E),r(f),i(A,"7.15vw","-130%")):e>g.offsetTop?"about"!==N&&(a("about"),c(),r(w),r(h),i(A,"4.45vw","-670%")):"hello"!==N&&(a("hello"),c(),r(S),r(d),i(A,"1.75vw","-1340%"))}function t(){var e=window.innerWidth/window.innerHeight;e>1.9?k.style.bottom=e*-8+"vh":k.style.bottom="0"}function i(e,t,i){switch(e){case"desktop":n(t);break;case"mobile":o(i)}}function n(e){u.style.top=e}function o(e){u.style.transform="translateX("+e+")"}function r(e){e.classList.add("active")}function a(e){N=e}function c(){S.classList.remove("active"),w.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),C.classList.remove("active"),d.classList.remove("active"),h.classList.remove("active"),f.classList.remove("active"),v.classList.remove("active"),m.classList.remove("active")}var u=document.getElementsByClassName("nav-dot")[0],d=document.getElementsByClassName("nav-item-hello")[0],h=document.getElementsByClassName("nav-item-about")[0],f=document.getElementsByClassName("nav-item-exp")[0],v=document.getElementsByClassName("nav-item-skills")[0],m=document.getElementsByClassName("nav-item-contact")[0],g=document.getElementsByClassName("section-hello")[0],p=document.getElementsByClassName("section-about")[0],y=document.getElementsByClassName("section-exp")[0],b=document.getElementsByClassName("section-skills")[0],S=(document.getElementsByClassName("section-contact")[0],document.getElementsByClassName("slide-hello")[0]),w=document.getElementsByClassName("slide-about")[0],E=document.getElementsByClassName("slide-exp")[0],x=document.getElementsByClassName("slide-skills")[0],C=document.getElementsByClassName("slide-contact")[0],k=document.getElementsByClassName("hello-img")[0],A=window.innerWidth>991?"desktop":"mobile",N="";t(),document.addEventListener("scroll",e),window.addEventListener("resize",t);(0,s.default)({selector:"for-glightbox"}),new l.default('a[href*="#"]')}()},{"./glightbox":1,"./smoothscroll":3}],3:[function(e,t,i){(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,o){"function"==typeof define&&define.amd?define([],function(){return o(e)}):"object"==("undefined"==typeof i?"undefined":n(i))?t.exports=o(e):e.SmoothScroll=o(e)}("undefined"!=typeof e?e:"undefined"!=typeof window?window:void 0,function(e){var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},i=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var i in t){if(!t.hasOwnProperty(i))return;e[i]=t[i]}}),e},n=function e(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var i,n=String(t),o=n.length,s=-1,e="",r=n.charCodeAt(0);++s<o;){if(0===(i=n.charCodeAt(s)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");e+=1<=i&&i<=31||127==i||0===s&&48<=i&&i<=57||1===s&&48<=i&&i<=57&&45===r?"\\"+i.toString(16)+" ":128<=i||45===i||95===i||48<=i&&i<=57||65<=i&&i<=90||97<=i&&i<=122?n.charAt(s):"\\"+n.charAt(s)}return"#"+e},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},s=function(t){return t?(i=t,parseInt(e.getComputedStyle(i).height,10)+t.offsetTop):0;var i},r=function(t,i,n,o){if(i.emitEvents&&"function"==typeof e.CustomEvent){var s=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(s)}};return function(l,a){var c,u,d,h,f={};f.cancelScroll=function(e){cancelAnimationFrame(h),h=null,e||r("scrollCancel",c)},f.animateScroll=function(n,l,a){var u=i(c||t,a||{}),v="[object Number]"===Object.prototype.toString.call(n),m=v||!n.tagName?null:n;if(v||m){var g=e.pageYOffset;u.header&&!d&&(d=document.querySelector(u.header));var p,y,b,S,w,E,x,C,k=s(d),A=v?n:function(t,i,n,s){var r=0;if(t.offsetParent)for(;r+=t.offsetTop,t=t.offsetParent;);return r=Math.max(r-i-n,0),s&&(r=Math.min(r,o()-e.innerHeight)),r}(m,k,parseInt("function"==typeof u.offset?u.offset(n,l):u.offset,10),u.clip),N=A-g,O=o(),L=0,T=(p=N,b=(y=u).speedAsDuration?y.speed:Math.abs(p/1e3*y.speed),y.durationMax&&b>y.durationMax?y.durationMax:y.durationMin&&b<y.durationMin?y.durationMin:b),q=function(t,i){var o,s,a,c=e.pageYOffset;if(t==i||c==i||(g<i&&e.innerHeight+c)>=O)return f.cancelScroll(!0),s=i,a=v,0===(o=n)&&document.body.focus(),a||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),e.scrollTo(0,s)),
r("scrollStop",u,n,l),!(h=S=null)},I=function t(i){var n,o,s;S||(S=i),w=(L+=i-S)/parseInt(T,10),E=g+N*(o=w=1<w?1:w,"easeInQuad"===(n=u).easing&&(s=o*o),"easeOutQuad"===n.easing&&(s=o*(2-o)),"easeInOutQuad"===n.easing&&(s=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===n.easing&&(s=o*o*o),"easeOutCubic"===n.easing&&(s=--o*o*o+1),"easeInOutCubic"===n.easing&&(s=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===n.easing&&(s=o*o*o*o),"easeOutQuart"===n.easing&&(s=1- --o*o*o*o),"easeInOutQuart"===n.easing&&(s=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===n.easing&&(s=o*o*o*o*o),"easeOutQuint"===n.easing&&(s=1+--o*o*o*o*o),"easeInOutQuint"===n.easing&&(s=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),n.customEasing&&(s=n.customEasing(o)),s||o),e.scrollTo(0,Math.floor(E)),q(E,A)||(h=e.requestAnimationFrame(t),S=i)};0===e.pageYOffset&&e.scrollTo(0,0),x=n,C=u,v||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:x.id},document.title,x===document.documentElement?"#top":"#"+x.id),r("scrollStart",u,n,l),f.cancelScroll(!0),e.requestAnimationFrame(I)}};var v=function t(i){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===i.button&&!i.metaKey&&!i.ctrlKey&&"closest"in i.target&&(u=i.target.closest(l))&&"a"===u.tagName.toLowerCase()&&!i.target.closest(c.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var t=n(u.hash),o=c.topOnEmptyHash&&"#"===t?document.documentElement:document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(i.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var i=e.location.hash;i=i||e.pageYOffset,history.replaceState({smoothScroll:JSON.stringify(t),anchor:i||e.pageYOffset},document.title,i||e.location.href)}}(c),f.animateScroll(o,u))}},m=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;t&&0!==t&&!(t=document.querySelector(n(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){c&&(document.removeEventListener("click",v,!1),e.removeEventListener("popstate",m,!1),f.cancelScroll(),h=d=u=c=null)},f.init=function(n){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),c=i(t,n||{}),d=c.header?document.querySelector(c.header):null,document.addEventListener("click",v,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",m,!1)},f.init(a),f}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);
//# sourceMappingURL=main.js.map
