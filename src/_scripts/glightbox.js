!(function(e, t) {
  if ("function" == typeof define && define.amd)
    define("GLightbox", ["module"], t);
  else if ("undefined" != typeof exports) t(module);
  else {
    var i = { exports: {} };
    t(i), (e.GLightbox = i.exports);
  }
})(this, function(e) {
  "use strict";
  var t = (function() {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
      };
    })(),
    i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    n = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
    ),
    s =
      null !== n ||
      void 0 !== document.createTouch ||
      "ontouchstart" in window ||
      "onmsgesturechange" in window ||
      navigator.msMaxTouchPoints,
    o = document.getElementsByTagName("html")[0],
    l = document.body,
    r = (function() {
      var e = void 0,
        t = document.createElement("fakeelement"),
        i = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
      for (e in i) if (void 0 !== t.style[e]) return i[e];
    })(),
    a = (function() {
      var e = void 0,
        t = document.createElement("fakeelement"),
        i = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd"
        };
      for (e in i) if (void 0 !== t.style[e]) return i[e];
    })(),
    c = Date.now(),
    d = [],
    u = {},
    h = {
      selector: "glightbox",
      skin: "clean",
      closeButton: !0,
      startAt: 0,
      autoplayVideos: !0,
      descPosition: "bottom",
      width: 900,
      height: 506,
      videosWidth: 960,
      videosHeight: 540,
      beforeSlideChange: null,
      afterSlideChange: null,
      beforeSlideLoad: null,
      afterSlideLoad: null,
      onOpen: null,
      onClose: null,
      loopAtEnd: !1,
      touchNavigation: !0,
      keyboardNavigation: !0,
      closeOnOutsideClick: !0,
      jwplayer: {
        api: null,
        licenseKey: null,
        params: { width: "100%", aspectratio: "16:9", stretching: "uniform" }
      },
      vimeo: {
        api: "https://player.vimeo.com/api/player.js",
        params: { api: 1, title: 0, byline: 0, portrait: 0 }
      },
      youtube: {
        api: "https://www.youtube.com/iframe_api",
        params: { enablejsapi: 1, showinfo: 0 }
      },
      openEffect: "zoomIn",
      closeEffect: "zoomOut",
      slideEffect: "slide",
      moreText: "See more",
      moreLength: 60,
      lightboxHtml: "",
      cssEfects: {
        fade: { in: "fadeIn", out: "fadeOut" },
        zoom: { in: "zoomIn", out: "zoomOut" },
        slide: { in: "slideInRight", out: "slideOutLeft" },
        slide_back: { in: "slideInLeft", out: "slideOutRight" }
      }
    };
  h.slideHtml =
    '<div class="gslide">         <div class="gslide-inner-content">            <div class="ginner-container">               <div class="gslide-media">               </div>               <div class="gslide-description">                  <h4 class="gslide-title"></h4>                  <div class="gslide-desc"></div>               </div>            </div>         </div>       </div>';
  function v() {
    var e = {},
      t = !1,
      i = 0,
      n = arguments.length;
    "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
      ((t = arguments[0]), i++);
    for (
      var s = function(i) {
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) &&
            (t && "[object Object]" === Object.prototype.toString.call(i[n])
              ? (e[n] = v(!0, e[n], i[n]))
              : (e[n] = i[n]));
      };
      i < n;
      i++
    ) {
      s(arguments[i]);
    }
    return e;
  }
  h.lightboxHtml =
    '<div id="glightbox-body" class="glightbox-container">            <div class="gloader visible"></div>            <div class="goverlay"></div>            <div class="gcontainer">               <div id="glightbox-slider" class="gslider"></div>               <a class="gnext"></a>               <a class="gprev"></a>               <a class="gclose"></a>            </div>   </div>';
  var f = {
    isFunction: function(e) {
      return "function" == typeof e;
    },
    isString: function(e) {
      return "string" == typeof e;
    },
    isNode: function(e) {
      return !(!e || !e.nodeType || 1 != e.nodeType);
    },
    isArray: function(e) {
      return Array.isArray(e);
    },
    isArrayLike: function(e) {
      return e && e.length && isFinite(e.length);
    },
    isObject: function(e) {
      return (
        "object" === (void 0 === e ? "undefined" : i(e)) &&
        null != e &&
        !f.isFunction(e) &&
        !f.isArray(e)
      );
    },
    isNil: function(e) {
      return null == e;
    },
    has: function(e, t) {
      return null !== e && hasOwnProperty.call(e, t);
    },
    size: function(e) {
      if (f.isObject(e)) {
        if (e.keys) return e.keys().length;
        var t = 0;
        for (var i in e) f.has(e, i) && t++;
        return t;
      }
      return e.length;
    },
    isNumber: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
  };
  function g(e, t) {
    if (
      ((f.isNode(e) || e === window || e === document) && (e = [e]),
      f.isArrayLike(e) || f.isObject(e) || (e = [e]),
      0 != f.size(e))
    )
      if (f.isArrayLike(e) && !f.isObject(e))
        for (
          var i = e.length, n = 0;
          n < i && !1 !== t.call(e[n], e[n], n, e);
          n++
        );
      else if (f.isObject(e))
        for (var s in e)
          if (f.has(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
  }
  function p(e) {
    var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      n = (e[c] = e[c] || []),
      s = { all: n, evt: null, found: null };
    return (
      t &&
        i &&
        f.size(n) > 0 &&
        g(n, function(e, n) {
          if (e.eventName == t && e.fn.toString() == i.toString())
            return (s.found = !0), (s.evt = n), !1;
        }),
      s
    );
  }
  function y(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = t.onElement,
      n = t.withCallback,
      s = t.avoidDuplicate,
      o = void 0 === s || s,
      l = t.once,
      r = void 0 !== l && l,
      a = t.useCapture,
      c = void 0 !== a && a,
      d = arguments[2],
      u = i || [];
    function h(e) {
      f.isFunction(n) && n.call(d, e, this), r && h.destroy();
    }
    return (
      f.isString(u) && (u = document.querySelectorAll(u)),
      (h.destroy = function() {
        g(u, function(t) {
          var i = p(t, e, h);
          i.found && i.all.splice(i.evt, 1),
            t.removeEventListener && t.removeEventListener(e, h, c);
        });
      }),
      g(u, function(t) {
        var i = p(t, e, h);
        ((t.addEventListener && o && !i.found) || !o) &&
          (t.addEventListener(e, h, c), i.all.push({ eventName: e, fn: h }));
      }),
      h
    );
  }
  function m(e, t) {
    w(e, t) || (e.classList ? e.classList.add(t) : (e.className += " " + t));
  }
  function b(e, t) {
    var i = t.split(" ");
    i.length > 1
      ? g(i, function(t) {
          b(e, t);
        })
      : e.classList
      ? e.classList.remove(t)
      : (e.className = e.className.replace(t, ""));
  }
  function w(e, t) {
    return e.classList
      ? e.classList.contains(t)
      : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className);
  }
  function S(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!e || "" === t) return !1;
    if ("none" == t) return f.isFunction(i) && i(), !1;
    var n = t.split(" ");
    g(n, function(t) {
      m(e, "g" + t);
    }),
      y(a, {
        onElement: e,
        avoidDuplicate: !1,
        once: !0,
        withCallback: function(e, t) {
          g(n, function(e) {
            b(t, "g" + e);
          }),
            f.isFunction(i) && i();
        }
      });
  }
  function x(e) {
    var t = document.createDocumentFragment(),
      i = document.createElement("div");
    for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
    return t;
  }
  function k(e, t) {
    for (; e !== document.body; ) {
      if (
        "function" == typeof (e = e.parentElement).matches
          ? e.matches(t)
          : e.msMatchesSelector(t)
      )
        return e;
    }
  }
  function E(e) {
    e.style.display = "block";
  }
  function C(e) {
    e.style.display = "none";
  }
  var A = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments[1],
        i = {
          href: "",
          title: "",
          description: "",
          descPosition: "bottom",
          effect: "",
          node: e
        };
      if (f.isObject(e) && !f.isNode(e)) return v(i, e);
      var n = "",
        s = e.getAttribute("data-glightbox"),
        o = e.nodeName.toLowerCase();
      "a" === o && (n = e.href),
        "img" === o && (n = e.src),
        (i.href = n),
        g(i, function(n, s) {
          f.has(t, s) && (i[s] = t[s]);
          var o = e.dataset[s];
          f.isNil(o) || (i[s] = o);
        });
      var l = j(n);
      if (((i = v(i, l)), f.isNil(s))) {
        if ("a" == o) {
          var r = e.title;
          f.isNil(r) || "" === r || (i.title = r);
        }
        if ("img" == o) {
          var a = e.alt;
          f.isNil(a) || "" === a || (i.title = a);
        }
        var c = e.getAttribute("data-description");
        f.isNil(c) || "" === c || (i.description = c);
      } else {
        var d = [];
        g(i, function(e, t) {
          d.push(";\\s?" + t);
        }),
          (d = d.join("\\s?:|")),
          "" !== s.trim() &&
            g(i, function(e, t) {
              var n = s,
                o = new RegExp("s?" + t + "s?:s?(.*?)(" + d + "s?:|$)"),
                l = n.match(o);
              if (l && l.length && l[1]) {
                var r = l[1].trim().replace(/;\s*$/, "");
                i[t] = r;
              }
            });
      }
      var u = e.querySelector(".glightbox-desc");
      u && (i.description = u.innerHTML),
        (i.sourcetype = i.hasOwnProperty("type") ? i.type : i.sourcetype),
        (i.type = i.sourcetype);
      var h = "video" == i.sourcetype ? t.videosWidth : t.width,
        p = "video" == i.sourcetype ? t.videosHeight : t.height;
      return (
        (i.width = f.has(i, "width") ? i.width : h),
        (i.height = f.has(i, "height") ? i.height : p),
        i
      );
    },
    T = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (w(e, "loaded")) return !1;
      f.isFunction(this.settings.beforeSlideLoad) &&
        this.settings.beforeSlideLoad(e, i);
      var o = i.type,
        r = i.descPosition,
        a = e.querySelector(".gslide-media"),
        c = e.querySelector(".gslide-title"),
        h = e.querySelector(".gslide-desc"),
        g = e.querySelector(".gslide-description"),
        p = s;
      if (
        (f.isFunction(this.settings.afterSlideLoad) &&
          (p = function() {
            f.isFunction(s) && s(), t.settings.afterSlideLoad(e, i);
          }),
        "" == i.title && "" == i.description
          ? g && g.parentNode.removeChild(g)
          : (c && "" !== i.title
              ? (c.innerHTML = i.title)
              : c.parentNode.removeChild(c),
            h && "" !== i.description
              ? n && this.settings.moreLength > 0
                ? ((i.smallDescription = (function(e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 50,
                      i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      n = i;
                    if ((e = e.trim()).length <= t) return e;
                    var s = e.substr(0, t - 1);
                    if (!n) return s;
                    return (
                      s + '... <a href="#" class="desc-more">' + i + "</a>"
                    );
                  })(
                    i.description,
                    this.settings.moreLength,
                    this.settings.moreText
                  )),
                  (h.innerHTML = i.smallDescription),
                  function e(t, i) {
                    var n = t.querySelector(".desc-more");
                    if (!n) return !1;
                    y("click", {
                      onElement: n,
                      withCallback: function(t, n) {
                        t.preventDefault();
                        var s = k(n, ".gslide-desc");
                        if (!s) return !1;
                        (s.innerHTML = i.description), m(l, "gdesc-open");
                        var o = y("click", {
                          onElement: [l, k(s, ".gslide-description")],
                          withCallback: function(t, n) {
                            "a" !== t.target.nodeName.toLowerCase() &&
                              (b(l, "gdesc-open"),
                              m(l, "gdesc-closed"),
                              (s.innerHTML = i.smallDescription),
                              e(s, i),
                              setTimeout(function() {
                                b(l, "gdesc-closed");
                              }, 400),
                              o.destroy());
                          }
                        });
                      }
                    });
                  }.apply(this, [h, i]))
                : (h.innerHTML = i.description)
              : h.parentNode.removeChild(h),
            m(a.parentNode, "desc-" + r),
            m(g, "description-" + r)),
        m(a, "gslide-" + o),
        m(e, "loaded"),
        "video" !== o)
      )
        if ("external" !== o)
          if ("inline" !== o) {
            if ("image" === o) {
              var S = new Image();
              return (
                S.addEventListener(
                  "load",
                  function() {
                    f.isFunction(p) && p();
                  },
                  !1
                ),
                (S.src = i.href),
                void a.appendChild(S)
              );
            }
            f.isFunction(p) && p();
          } else
            (function(e, t, i) {
              var n = e.querySelector(".gslide-media"),
                s = document.getElementById(t.inlined.replace("#", ""));
              if (s) {
                var o = s.cloneNode(!0);
                return (
                  (o.style.height = t.height + "px"),
                  (o.style.maxWidth = t.width + "px"),
                  m(o, "ginlined-content"),
                  n.appendChild(o),
                  void (f.isFunction(i) && i())
                );
              }
            }.apply(this, [e, i, p]));
        else {
          var E = O(i.href, i.width, i.height, p);
          a.appendChild(E);
        }
      else
        (function(e, t, i) {
          var s = this,
            o = t.source,
            l = "gvideo" + t.index,
            r = e.querySelector(".gslide-media"),
            a = t.href,
            c = location.protocol.replace(":", "");
          "file" == c && (c = "http");
          if ("vimeo" == o) {
            var h = /vimeo.*\/(\d+)/i.exec(a),
              g = L(this.settings.vimeo.params),
              p = c + "://player.vimeo.com/video/" + h[1] + "?" + g;
            N(this.settings.vimeo.api);
            var y = O(
              p,
              t.width,
              t.height,
              function() {
                !(function(e, t, i, n) {
                  if (e()) return void t();
                  i || (i = 100);
                  var s,
                    o = setInterval(function() {
                      e() && (clearInterval(o), s && clearTimeout(s), t());
                    }, i);
                  n &&
                    (s = setTimeout(function() {
                      clearInterval(o);
                    }, n));
                })(
                  function() {
                    return "undefined" != typeof Vimeo;
                  },
                  function() {
                    var e = new Vimeo.Player(y);
                    (u[l] = e), f.isFunction(i) && i();
                  }
                );
              },
              r
            );
            (y.id = l),
              (y.className = "vimeo-video gvideo"),
              this.settings.autoplayVideos &&
                !n &&
                (y.className += " wait-autoplay");
          }
          if ("youtube" == o) {
            var b = v(this.settings.youtube.params, { playerapiid: l }),
              w = L(b),
              S = (function(e) {
                var t = "";
                t =
                  void 0 !==
                  (e = e
                    .replace(/(>|<)/gi, "")
                    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]
                    ? (t = e[2].split(/[^0-9a-z_\-]/i))[0]
                    : e;
                return t;
              })(a),
              k = c + "://www.youtube.com/embed/" + S + "?" + w;
            N(this.settings.youtube.api);
            var E = O(
              k,
              t.width,
              t.height,
              function() {
                if (!f.isNil(YT) && YT.loaded) {
                  var e = new YT.Player(E);
                  u[l] = e;
                } else d.push(E);
                f.isFunction(i) && i();
              },
              r
            );
            (E.id = l),
              (E.className = "youtube-video gvideo"),
              this.settings.autoplayVideos &&
                !n &&
                (E.className += " wait-autoplay");
          }
          if ("local" == o) {
            var C = '<video id="' + l + '" ';
            (C +=
              'style="background:#000; width: ' +
              t.width +
              "px; height: " +
              t.height +
              'px;" '),
              (C += 'preload="metadata" '),
              (C += 'x-webkit-airplay="allow" '),
              (C += 'webkit-playsinline="" '),
              (C += "controls "),
              (C += 'class="gvideo">');
            var A = a
                .toLowerCase()
                .split(".")
                .pop(),
              T = { mp4: "", ogg: "", webm: "" };
            for (var q in ((T[A] = a), T))
              if (T.hasOwnProperty(q)) {
                var j = T[q];
                t.hasOwnProperty(q) && (j = t[q]),
                  "" !== j &&
                    (C += '<source src="' + j + '" type="video/' + q + '">');
              }
            var I = x((C += "</video>"));
            r.appendChild(I);
            var F = document.getElementById(l);
            if (
              null !== this.settings.jwplayer &&
              null !== this.settings.jwplayer.api
            ) {
              this.settings.jwplayer;
              var B = this.settings.jwplayer.api;
              if (!B)
                return (
                  console.warn("Missing jwplayer api file"),
                  f.isFunction(i) && i(),
                  !1
                );
              N(B, function() {
                var e = v(s.settings.jwplayer.params, {
                  width: t.width + "px",
                  height: t.height + "px",
                  file: a
                });
                jwplayer.key = s.settings.jwplayer.licenseKey;
                var n = jwplayer(l);
                n.setup(e),
                  (u[l] = n),
                  n.on("ready", function() {
                    m((F = r.querySelector(".jw-video")), "gvideo"),
                      (F.id = l),
                      f.isFunction(i) && i();
                  });
              });
            } else m(F, "html5-video"), (u[l] = F), f.isFunction(i) && i();
          }
        }.apply(this, [e, i, p]));
    };
  function O(e, t, i, s, o) {
    var l = document.createElement("iframe"),
      r =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    return (
      (l.className = "vimeo-video gvideo"),
      (l.src = e),
      (l.style.height = n && r < 767 ? "" : i + "px"),
      (l.style.width = t + "px"),
      l.setAttribute("allowFullScreen", ""),
      (l.onload = function() {
        m(l, "iframe-ready"), f.isFunction(s) && s();
      }),
      o && o.appendChild(l),
      l
    );
  }
  function N(e, t) {
    if (f.isNil(e)) console.error("Inject videos api error");
    else {
      var i = document.querySelectorAll('script[src="' + e + '"]');
      if (f.isNil(i) || 0 == i.length) {
        var n = document.createElement("script");
        return (
          (n.type = "text/javascript"),
          (n.src = e),
          (n.onload = function() {
            f.isFunction(t) && t();
          }),
          document.body.appendChild(n),
          !1
        );
      }
      f.isFunction(t) && t();
    }
  }
  function q() {
    for (var e = 0; e < d.length; e++) {
      var t = d[e],
        i = new YT.Player(t);
      u[t.id] = i;
    }
  }
  function L(e) {
    var t = "",
      i = 0;
    return (
      g(e, function(e, n) {
        i > 0 && (t += "&amp;"), (t += n + "=" + e), (i += 1);
      }),
      t
    );
  }
  void 0 !== window.onYouTubeIframeAPIReady
    ? (window.onYouTubeIframeAPIReady = function() {
        window.onYouTubeIframeAPIReady(), q();
      })
    : (window.onYouTubeIframeAPIReady = q);
  var j = function(e) {
    var t = e,
      i = {};
    if (
      null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|gif|png|apn|webp|svg)$/)
    )
      return (i.sourcetype = "image"), i;
    if (
      e.match(
        /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
      ) ||
      e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)
    )
      return (i.sourcetype = "video"), (i.source = "youtube"), i;
    if (e.match(/vimeo\.com\/([0-9]*)/))
      return (i.sourcetype = "video"), (i.source = "vimeo"), i;
    if (null !== e.match(/\.(mp4|ogg|webm)$/))
      return (i.sourcetype = "video"), (i.source = "local"), i;
    if (e.indexOf("#") > -1) {
      var n = t.split("#").pop();
      if ("" !== n.trim())
        return (
          (i.sourcetype = "inline"), (i.source = e), (i.inlined = "#" + n), i
        );
    }
    return (
      e.includes("gajax=true") && ((i.sourcetype = "ajax"), (i.source = e)),
      (i.sourcetype = "external"),
      (i.source = e),
      i
    );
  };
  function I(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if ("" == t)
      return (
        (e.style.webkitTransform = ""),
        (e.style.MozTransform = ""),
        (e.style.msTransform = ""),
        (e.style.OTransform = ""),
        (e.style.transform = ""),
        !1
      );
    (e.style.webkitTransform = t),
      (e.style.MozTransform = t),
      (e.style.msTransform = t),
      (e.style.OTransform = t),
      (e.style.transform = t);
  }
  function F(e) {
    var t = e.querySelector(".gslide-media"),
      i = e.querySelector(".gslide-description");
    m(t, "greset"), I(t, "translate3d(0, 0, 0)");
    y(r, {
      onElement: t,
      once: !0,
      withCallback: function(e, i) {
        b(t, "greset");
      }
    });
    (t.style.opacity = ""), i && (i.style.opacity = "");
  }
  var B = (function() {
    function e(t) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this.settings = v(h, t || {})),
        (this.effectsClasses = this.getAnimationClasses());
    }
    return (
      t(e, [
        {
          key: "init",
          value: function() {
            var e = this;
            this.baseEvents = y("click", {
              onElement: "." + this.settings.selector,
              withCallback: function(t, i) {
                t.preventDefault(), e.open(i);
              }
            });
          }
        },
        {
          key: "open",
          value: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            if (
              ((this.elements = this.getElements(e)), 0 == this.elements.length)
            )
              return !1;
            (this.activeSlide = null),
              (this.prevActiveSlideIndex = null),
              (this.prevActiveSlide = null);
            var t = this.settings.startAt;
            e && (t = this.elements.indexOf(e)) < 0 && (t = 0),
              this.build(),
              S(
                this.overlay,
                "none" == this.settings.openEffect
                  ? "none"
                  : this.settings.cssEfects.fade.in
              );
            var i = l.offsetWidth;
            if (
              ((l.style.width = i + "px"),
              m(l, "glightbox-open"),
              m(o, "glightbox-open"),
              n &&
                (m(o, "glightbox-mobile"),
                (this.settings.slideEffect = "slide")),
              this.showSlide(t, !0),
              1 == this.elements.length
                ? (C(this.prevButton), C(this.nextButton))
                : (E(this.prevButton), E(this.nextButton)),
              (this.lightboxOpen = !0),
              f.isFunction(this.settings.onOpen) && this.settings.onOpen(),
              n && s && this.settings.touchNavigation)
            )
              return (
                function() {
                  var e = this;
                  if (this.events.hasOwnProperty("touchStart")) return !1;
                  var t = void 0,
                    i = void 0,
                    n = void 0,
                    s = !1,
                    o = !1,
                    r = !1,
                    a = !1,
                    c = {},
                    d = {},
                    u = (this.slidesContainer, null),
                    h = 0,
                    v = 0,
                    f = null,
                    g = null,
                    p = null,
                    S =
                      window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth;
                  window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight,
                    (this.events.doctouchmove = y("touchmove", {
                      onElement: document,
                      withCallback: function(e, t) {
                        if (w(l, "gdesc-open")) return e.preventDefault(), !1;
                      }
                    })),
                    (this.events.touchStart = y("touchstart", {
                      onElement: l,
                      withCallback: function(t, i) {
                        w(l, "gdesc-open") ||
                          (m(l, "touching"),
                          (u = e.getActiveSlide()),
                          (f = u.querySelector(".gslide-image")),
                          (g = u.querySelector(".gslide-media")),
                          (p = u.querySelector(".gslide-description")),
                          e.index,
                          (d = t.targetTouches[0]),
                          (c.pageX = t.targetTouches[0].pageX),
                          (c.pageY = t.targetTouches[0].pageY),
                          (h = t.targetTouches[0].clientX),
                          (v = t.targetTouches[0].clientY));
                      }
                    })),
                    (this.events.gestureStart = y("gesturestart", {
                      onElement: l,
                      withCallback: function(e, t) {
                        f && (e.preventDefault(), (r = !0));
                      }
                    })),
                    (this.events.gestureChange = y("gesturechange", {
                      onElement: l,
                      withCallback: function(e, t) {
                        e.preventDefault(), I(f, "scale(" + e.scale + ")");
                      }
                    })),
                    (this.events.gesturEend = y("gestureend", {
                      onElement: l,
                      withCallback: function(e, t) {
                        (r = !1),
                          e.scale < 1 ? ((a = !1), I(f, "scale(1)")) : (a = !0);
                      }
                    })),
                    (this.events.touchMove = y("touchmove", {
                      onElement: l,
                      withCallback: function(f, y) {
                        if (
                          w(l, "touching") &&
                          !(w(l, "gdesc-open") || r || a)
                        ) {
                          f.preventDefault(), (d = f.targetTouches[0]);
                          var m = u.querySelector(".gslide-inner-content")
                              .offsetHeight,
                            b = u.querySelector(".gslide-inner-content")
                              .offsetWidth,
                            x = f.targetTouches[0].clientX,
                            k = f.targetTouches[0].clientY,
                            E = h - x,
                            C = v - k;
                          if (
                            (Math.abs(E) > Math.abs(C)
                              ? ((s = !1), (o = !0))
                              : ((o = !1), (s = !0)),
                            s)
                          ) {
                            if (
                              ((i = d.pageY - c.pageY), Math.abs(i) >= 0 || s)
                            ) {
                              var A = 0.75 - Math.abs(i) / m;
                              (g.style.opacity = A),
                                p && (p.style.opacity = A),
                                I(g, "translate3d(0, " + i + "px, 0)");
                            }
                          } else if (
                            ((t = d.pageX - c.pageX), (n = (100 * t) / S), o)
                          ) {
                            if (e.index + 1 == e.elements.length && t < -60)
                              return F(u), !1;
                            if (e.index - 1 < 0 && t > 60) return F(u), !1;
                            var T = 0.75 - Math.abs(t) / b;
                            (g.style.opacity = T),
                              p && (p.style.opacity = T),
                              I(g, "translate3d(" + n + "%, 0, 0)");
                          }
                        }
                      }
                    })),
                    (this.events.touchEnd = y("touchend", {
                      onElement: l,
                      withCallback: function(r, a) {
                        (i = d.pageY - c.pageY),
                          (t = d.pageX - c.pageX),
                          (n = (100 * t) / S),
                          b(l, "touching");
                        var h = u.querySelector(".gslide-inner-content")
                            .offsetHeight,
                          v = u.querySelector(".gslide-inner-content")
                            .offsetWidth;
                        if (s) {
                          var f = h / 2;
                          return (
                            (s = !1),
                            Math.abs(i) >= f ? void e.close() : void F(u)
                          );
                        }
                        if (o) {
                          o = !1;
                          var g = "prev",
                            p = !0;
                          if (
                            (t < 0 && ((g = "next"), (t = Math.abs(t))),
                            "prev" == g && e.index - 1 < 0 && (p = !1),
                            "next" == g &&
                              e.index + 1 >= e.elements.length &&
                              (p = !1),
                            p && t >= v / 2 - 90)
                          )
                            return void ("next" == g
                              ? e.nextSlide()
                              : e.prevSlide());
                          F(u);
                        }
                      }
                    }));
                }.apply(this),
                !1
              );
            this.settings.keyboardNavigation &&
              function() {
                var e = this;
                if (this.events.hasOwnProperty("keyboard")) return !1;
                this.events.keyboard = y("keydown", {
                  onElement: window,
                  withCallback: function(t, i) {
                    var n = (t = t || window.event).keyCode;
                    39 == n && e.nextSlide(),
                      37 == n && e.prevSlide(),
                      27 == n && e.close();
                  }
                });
              }.apply(this);
          }
        },
        {
          key: "showSlide",
          value: function() {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            E(this.loader), (this.index = t);
            var n = this.slidesContainer.querySelector(".current");
            n && b(n, "current"), this.slideAnimateOut();
            var s = this.slidesContainer.querySelectorAll(".gslide")[t];
            if ((E(this.slidesContainer), w(s, "loaded")))
              this.slideAnimateIn(s, i), C(this.loader);
            else {
              E(this.loader);
              var o = A(this.elements[t], this.settings);
              (o.index = t),
                T.apply(this, [
                  s,
                  o,
                  function() {
                    C(e.loader), e.slideAnimateIn(s, i);
                  }
                ]);
            }
            this.preloadSlide(t + 1),
              this.preloadSlide(t - 1),
              b(this.nextButton, "disabled"),
              b(this.prevButton, "disabled"),
              0 === t
                ? m(this.prevButton, "disabled")
                : t === this.elements.length - 1 &&
                  !0 !== this.settings.loopAtEnd &&
                  m(this.nextButton, "disabled"),
              (this.activeSlide = s);
          }
        },
        {
          key: "preloadSlide",
          value: function(e) {
            var t = this;
            if (e < 0 || e > this.elements.length) return !1;
            if (f.isNil(this.elements[e])) return !1;
            var i = this.slidesContainer.querySelectorAll(".gslide")[e];
            if (w(i, "loaded")) return !1;
            var n = A(this.elements[e], this.settings);
            n.index = e;
            var s = n.sourcetype;
            "video" == s || "external" == s
              ? setTimeout(function() {
                  T.apply(t, [i, n]);
                }, 200)
              : T.apply(this, [i, n]);
          }
        },
        {
          key: "prevSlide",
          value: function() {
            var e = this.index - 1;
            if (e < 0) return !1;
            this.goToSlide(e);
          }
        },
        {
          key: "nextSlide",
          value: function() {
            var e = this.index + 1;
            if (e > this.elements.length) return !1;
            this.goToSlide(e);
          }
        },
        {
          key: "goToSlide",
          value: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e > -1 &&
              ((this.prevActiveSlide = this.activeSlide),
              (this.prevActiveSlideIndex = this.index),
              e < this.elements.length
                ? this.showSlide(e)
                : !0 === this.settings.loopAtEnd &&
                  ((e = 0), this.showSlide(e)));
          }
        },
        {
          key: "slideAnimateIn",
          value: function(e, t) {
            var i = this,
              s = e.querySelector(".gslide-media"),
              o = e.querySelector(".gslide-description"),
              l = {
                index: this.prevActiveSlideIndex,
                slide: this.prevActiveSlide
              },
              r = { index: this.index, slide: this.activeSlide };
            if (
              (s.offsetWidth > 0 &&
                o &&
                (C(o),
                (e.querySelector(".ginner-container").style.maxWidth =
                  s.offsetWidth + "px"),
                (o.style.display = "")),
              b(e, this.effectsClasses),
              t)
            )
              S(e, this.settings.openEffect, function() {
                !n && i.settings.autoplayVideos && i.playSlideVideo(e),
                  f.isFunction(i.settings.afterSlideChange) &&
                    i.settings.afterSlideChange.apply(i, [l, r]);
              });
            else {
              var a = this.settings.slideEffect,
                c = "none" !== a ? this.settings.cssEfects[a].in : a;
              this.prevActiveSlideIndex > this.index &&
                "slide" == this.settings.slideEffect &&
                (c = this.settings.cssEfects.slide_back.in),
                S(e, c, function() {
                  !n && i.settings.autoplayVideos && i.playSlideVideo(e),
                    f.isFunction(i.settings.afterSlideChange) &&
                      i.settings.afterSlideChange.apply(i, [l, r]);
                });
            }
            m(e, "current");
          }
        },
        {
          key: "slideAnimateOut",
          value: function() {
            if (!this.prevActiveSlide) return !1;
            var e = this.prevActiveSlide;
            b(e, this.effectsClasses), m(e, "prev");
            var t = this.settings.slideEffect,
              i = "none" !== t ? this.settings.cssEfects[t].out : t;
            this.stopSlideVideo(e),
              f.isFunction(this.settings.beforeSlideChange) &&
                this.settings.beforeSlideChange.apply(this, [
                  {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide
                  },
                  { index: this.index, slide: this.activeSlide }
                ]),
              this.prevActiveSlideIndex > this.index &&
                "slide" == this.settings.slideEffect &&
                (i = this.settings.cssEfects.slide_back.out),
              S(e, i, function() {
                var t = e.querySelector(".gslide-media"),
                  i = e.querySelector(".gslide-description");
                (t.style.transform = ""),
                  b(t, "greset"),
                  (t.style.opacity = ""),
                  i && (i.style.opacity = ""),
                  b(e, "prev");
              });
          }
        },
        {
          key: "stopSlideVideo",
          value: function(e) {
            f.isNumber(e) &&
              (e = this.slidesContainer.querySelectorAll(".gslide")[e]);
            var t = e ? e.querySelector(".gvideo") : null;
            if (!t) return !1;
            var i = t.id;
            if (u && u.hasOwnProperty(i)) {
              var n = u[i];
              w(t, "vimeo-video") && n.pause(),
                w(t, "youtube-video") && n.pauseVideo(),
                w(t, "jw-video") && n.pause(!0),
                w(t, "html5-video") && n.pause();
            }
          }
        },
        {
          key: "playSlideVideo",
          value: function(e) {
            f.isNumber(e) &&
              (e = this.slidesContainer.querySelectorAll(".gslide")[e]);
            var t = e.querySelector(".gvideo");
            if (!t) return !1;
            var i = t.id;
            if (u && u.hasOwnProperty(i)) {
              var n = u[i];
              return (
                w(t, "vimeo-video") && n.play(),
                w(t, "youtube-video") && n.playVideo(),
                w(t, "jw-video") && n.play(),
                w(t, "html5-video") && n.play(),
                setTimeout(function() {
                  b(t, "wait-autoplay");
                }, 300),
                !1
              );
            }
          }
        },
        {
          key: "setElements",
          value: function(e) {
            this.settings.elements = e;
          }
        },
        {
          key: "getElements",
          value: function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            if (
              ((this.elements = []),
              !f.isNil(this.settings.elements) &&
                f.isArray(this.settings.elements))
            )
              return this.settings.elements;
            var t = !1;
            if (null !== e) {
              var i = e.getAttribute("data-gallery");
              i &&
                "" !== i &&
                (t = document.querySelectorAll('[data-gallery="' + i + '"]'));
            }
            return (
              0 == t &&
                (t = document.querySelectorAll("." + this.settings.selector)),
              (t = Array.prototype.slice.call(t))
            );
          }
        },
        {
          key: "getActiveSlide",
          value: function() {
            return this.slidesContainer.querySelectorAll(".gslide")[this.index];
          }
        },
        {
          key: "getActiveSlideIndex",
          value: function() {
            return this.index;
          }
        },
        {
          key: "getAnimationClasses",
          value: function() {
            var e = [];
            for (var t in this.settings.cssEfects)
              if (this.settings.cssEfects.hasOwnProperty(t)) {
                var i = this.settings.cssEfects[t];
                e.push("g" + i.in), e.push("g" + i.out);
              }
            return e.join(" ");
          }
        },
        {
          key: "build",
          value: function() {
            var e = this;
            if (this.built) return !1;
            var t = x(this.settings.lightboxHtml);
            document.body.appendChild(t);
            var i = document.getElementById("glightbox-body");
            this.modal = i;
            var n = i.querySelector(".gclose");
            (this.prevButton = i.querySelector(".gprev")),
              (this.nextButton = i.querySelector(".gnext")),
              (this.overlay = i.querySelector(".goverlay")),
              (this.loader = i.querySelector(".gloader")),
              (this.slidesContainer = document.getElementById(
                "glightbox-slider"
              )),
              (this.events = {}),
              m(this.modal, "glightbox-" + this.settings.skin),
              this.settings.closeButton &&
                n &&
                (this.events.close = y("click", {
                  onElement: n,
                  withCallback: function(t, i) {
                    t.preventDefault(), e.close();
                  }
                })),
              n && !this.settings.closeButton && n.parentNode.removeChild(n),
              this.nextButton &&
                (this.events.next = y("click", {
                  onElement: this.nextButton,
                  withCallback: function(t, i) {
                    t.preventDefault(), e.nextSlide();
                  }
                })),
              this.prevButton &&
                (this.events.prev = y("click", {
                  onElement: this.prevButton,
                  withCallback: function(t, i) {
                    t.preventDefault(), e.prevSlide();
                  }
                })),
              this.settings.closeOnOutsideClick &&
                (this.events.outClose = y("click", {
                  onElement: i,
                  withCallback: function(t, i) {
                    k(t.target, ".ginner-container") ||
                      w(t.target, "gnext") ||
                      w(t.target, "gprev") ||
                      e.close();
                  }
                })),
              g(this.elements, function() {
                var t = x(e.settings.slideHtml);
                e.slidesContainer.appendChild(t);
              }),
              s && m(o, "glightbox-touch"),
              (this.built = !0);
          }
        },
        {
          key: "reload",
          value: function() {
            this.init();
          }
        },
        {
          key: "close",
          value: function() {
            var e = this;
            if (this.closing) return !1;
            (this.closing = !0),
              this.stopSlideVideo(this.activeSlide),
              m(this.modal, "glightbox-closing"),
              S(
                this.overlay,
                "none" == this.settings.openEffect
                  ? "none"
                  : this.settings.cssEfects.fade.out
              ),
              S(this.activeSlide, this.settings.closeEffect, function() {
                if (
                  ((e.activeSlide = null),
                  (e.prevActiveSlideIndex = null),
                  (e.prevActiveSlide = null),
                  (e.built = !1),
                  e.events)
                )
                  for (var t in e.events)
                    e.events.hasOwnProperty(t) && e.events[t].destroy();
                b(l, "glightbox-open"),
                  b(o, "glightbox-open"),
                  b(l, "touching"),
                  b(l, "gdesc-open"),
                  (l.style.width = ""),
                  e.modal.parentNode.removeChild(e.modal),
                  f.isFunction(e.settings.onClose) && e.settings.onClose(),
                  (e.closing = null);
              });
          }
        },
        {
          key: "destroy",
          value: function() {
            this.close(), this.baseEvents.destroy();
          }
        }
      ]),
      e
    );
  })();
  e.exports = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = new B(e);
    return t.init(), t;
  };
});
