!(function(e, t) {
  "function" == typeof define && define.amd
    ? define([], function() {
        return t(e);
      })
    : "object" == typeof exports
    ? (module.exports = t(e))
    : (e.SmoothScroll = t(e));
})(
  "undefined" != typeof global
    ? global
    : "undefined" != typeof window
    ? window
    : this,
  function(C) {
    "use strict";
    var L = {
        ignore: "[data-scroll-ignore]",
        header: null,
        topOnEmptyHash: !0,
        speed: 500,
        speedAsDuration: !1,
        durationMax: null,
        durationMin: null,
        clip: !0,
        offset: 0,
        easing: "easeInOutCubic",
        customEasing: null,
        updateURL: !0,
        popstate: !0,
        emitEvents: !0
      },
      H = function() {
        var n = {};
        return (
          Array.prototype.forEach.call(arguments, function(e) {
            for (var t in e) {
              if (!e.hasOwnProperty(t)) return;
              n[t] = e[t];
            }
          }),
          n
        );
      },
      r = function(e) {
        "#" === e.charAt(0) && (e = e.substr(1));
        for (
          var t,
            n = String(e),
            o = n.length,
            a = -1,
            r = "",
            i = n.charCodeAt(0);
          ++a < o;

        ) {
          if (0 === (t = n.charCodeAt(a)))
            throw new InvalidCharacterError(
              "Invalid character: the input contains U+0000."
            );
          (1 <= t && t <= 31) ||
          127 == t ||
          (0 === a && 48 <= t && t <= 57) ||
          (1 === a && 48 <= t && t <= 57 && 45 === i)
            ? (r += "\\" + t.toString(16) + " ")
            : (r +=
                128 <= t ||
                45 === t ||
                95 === t ||
                (48 <= t && t <= 57) ||
                (65 <= t && t <= 90) ||
                (97 <= t && t <= 122)
                  ? n.charAt(a)
                  : "\\" + n.charAt(a));
        }
        return "#" + r;
      },
      q = function() {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      },
      x = function(e) {
        return e
          ? ((t = e), parseInt(C.getComputedStyle(t).height, 10) + e.offsetTop)
          : 0;
        var t;
      },
      Q = function(e, t, n, o) {
        if (t.emitEvents && "function" == typeof C.CustomEvent) {
          var a = new CustomEvent(e, {
            bubbles: !0,
            detail: { anchor: n, toggle: o }
          });
          document.dispatchEvent(a);
        }
      };
    return function(o, e) {
      var I,
        a,
        M,
        A,
        w = {};
      (w.cancelScroll = function(e) {
        cancelAnimationFrame(A), (A = null), e || Q("scrollCancel", I);
      }),
        (w.animateScroll = function(i, s, e) {
          var c = H(I || L, e || {}),
            u = "[object Number]" === Object.prototype.toString.call(i),
            t = u || !i.tagName ? null : i;
          if (u || t) {
            var l = C.pageYOffset;
            c.header && !M && (M = document.querySelector(c.header));
            var n,
              o,
              a,
              d,
              r,
              f,
              m,
              h,
              p = x(M),
              g = u
                ? i
                : (function(e, t, n, o) {
                    var a = 0;
                    if (e.offsetParent)
                      for (; (a += e.offsetTop), (e = e.offsetParent); );
                    return (
                      (a = Math.max(a - t - n, 0)),
                      o && (a = Math.min(a, q() - C.innerHeight)),
                      a
                    );
                  })(
                    t,
                    p,
                    parseInt(
                      "function" == typeof c.offset ? c.offset(i, s) : c.offset,
                      10
                    ),
                    c.clip
                  ),
              y = g - l,
              v = q(),
              S = 0,
              E = ((n = y),
              (a = (o = c).speedAsDuration
                ? o.speed
                : Math.abs((n / 1e3) * o.speed)),
              o.durationMax && a > o.durationMax
                ? o.durationMax
                : o.durationMin && a < o.durationMin
                ? o.durationMin
                : a),
              b = function(e, t) {
                var n,
                  o,
                  a,
                  r = C.pageYOffset;
                if (e == t || r == t || (l < t && C.innerHeight + r) >= v)
                  return (
                    w.cancelScroll(!0),
                    (o = t),
                    (a = u),
                    0 === (n = i) && document.body.focus(),
                    a ||
                      (n.focus(),
                      document.activeElement !== n &&
                        (n.setAttribute("tabindex", "-1"),
                        n.focus(),
                        (n.style.outline = "none")),
                      C.scrollTo(0, o)),
                    Q("scrollStop", c, i, s),
                    !(A = d = null)
                  );
              },
              O = function(e) {
                var t, n, o;
                d || (d = e),
                  (r = (S += e - d) / parseInt(E, 10)),
                  (f =
                    l +
                    y *
                      ((n = r = 1 < r ? 1 : r),
                      "easeInQuad" === (t = c).easing && (o = n * n),
                      "easeOutQuad" === t.easing && (o = n * (2 - n)),
                      "easeInOutQuad" === t.easing &&
                        (o = n < 0.5 ? 2 * n * n : (4 - 2 * n) * n - 1),
                      "easeInCubic" === t.easing && (o = n * n * n),
                      "easeOutCubic" === t.easing && (o = --n * n * n + 1),
                      "easeInOutCubic" === t.easing &&
                        (o =
                          n < 0.5
                            ? 4 * n * n * n
                            : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1),
                      "easeInQuart" === t.easing && (o = n * n * n * n),
                      "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n),
                      "easeInOutQuart" === t.easing &&
                        (o =
                          n < 0.5
                            ? 8 * n * n * n * n
                            : 1 - 8 * --n * n * n * n),
                      "easeInQuint" === t.easing && (o = n * n * n * n * n),
                      "easeOutQuint" === t.easing &&
                        (o = 1 + --n * n * n * n * n),
                      "easeInOutQuint" === t.easing &&
                        (o =
                          n < 0.5
                            ? 16 * n * n * n * n * n
                            : 1 + 16 * --n * n * n * n * n),
                      t.customEasing && (o = t.customEasing(n)),
                      o || n)),
                  C.scrollTo(0, Math.floor(f)),
                  b(f, g) || ((A = C.requestAnimationFrame(O)), (d = e));
              };
            0 === C.pageYOffset && C.scrollTo(0, 0),
              (m = i),
              (h = c),
              u ||
                (history.pushState &&
                  h.updateURL &&
                  history.pushState(
                    { smoothScroll: JSON.stringify(h), anchor: m.id },
                    document.title,
                    m === document.documentElement ? "#top" : "#" + m.id
                  )),
              Q("scrollStart", c, i, s),
              w.cancelScroll(!0),
              C.requestAnimationFrame(O);
          }
        });
      var t = function(e) {
          if (
            !(
              "matchMedia" in C &&
              C.matchMedia("(prefers-reduced-motion)").matches
            ) &&
            0 === e.button &&
            !e.metaKey &&
            !e.ctrlKey &&
            "closest" in e.target &&
            (a = e.target.closest(o)) &&
            "a" === a.tagName.toLowerCase() &&
            !e.target.closest(I.ignore) &&
            a.hostname === C.location.hostname &&
            a.pathname === C.location.pathname &&
            /#/.test(a.href)
          ) {
            var t = r(a.hash),
              n =
                I.topOnEmptyHash && "#" === t
                  ? document.documentElement
                  : document.querySelector(t);
            (n = n || "#top" !== t ? n : document.documentElement) &&
              (e.preventDefault(),
              (function(e) {
                if (history.replaceState && e.updateURL && !history.state) {
                  var t = C.location.hash;
                  (t = t || C.pageYOffset),
                    history.replaceState(
                      {
                        smoothScroll: JSON.stringify(e),
                        anchor: t || C.pageYOffset
                      },
                      document.title,
                      t || C.location.href
                    );
                }
              })(I),
              w.animateScroll(n, a));
          }
        },
        n = function(e) {
          if (
            null !== history.state &&
            history.state.smoothScroll &&
            history.state.smoothScroll === JSON.stringify(I)
          ) {
            var t = history.state.anchor;
            (t &&
              0 !== t &&
              !(t = document.querySelector(r(history.state.anchor)))) ||
              w.animateScroll(t, null, { updateURL: !1 });
          }
        };
      return (
        (w.destroy = function() {
          I &&
            (document.removeEventListener("click", t, !1),
            C.removeEventListener("popstate", n, !1),
            w.cancelScroll(),
            (A = M = a = I = null));
        }),
        (w.init = function(e) {
          if (
            !(
              "querySelector" in document &&
              "addEventListener" in C &&
              "requestAnimationFrame" in C &&
              "closest" in C.Element.prototype
            )
          )
            throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
          w.destroy(),
            (I = H(L, e || {})),
            (M = I.header ? document.querySelector(I.header) : null),
            document.addEventListener("click", t, !1),
            I.updateURL && I.popstate && C.addEventListener("popstate", n, !1);
        }),
        w.init(e),
        w
      );
    };
  }
);
