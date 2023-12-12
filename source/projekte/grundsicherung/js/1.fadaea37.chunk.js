(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function (t, e, n) {
      var r = n(3),
        i = n(14).f,
        o = n(16),
        a = n(17),
        u = n(100),
        s = n(148),
        c = n(59);
      t.exports = function (t, e) {
        var n,
          f,
          l,
          h,
          p,
          d = t.target,
          v = t.global,
          g = t.stat;
        if ((n = v ? r : g ? r[d] || u(d, {}) : (r[d] || {}).prototype))
          for (f in e) {
            if (
              ((h = e[f]),
              (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
              !c(v ? f : d + (g ? "." : "#") + f, t.forced) && void 0 !== l)
            ) {
              if (typeof h == typeof l) continue;
              s(h, l);
            }
            (t.sham || (l && l.sham)) && o(h, "sham", !0), a(n, f, h, t);
          }
      };
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var r = function (t, e) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        },
        i = function (t) {
          var e;
          return (
            1 === t.length &&
              ((e = t),
              (t = function (t, n) {
                return r(e(t), n);
              })),
            {
              left: function (e, n, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = e.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(e[o], n) < 0 ? (r = o + 1) : (i = o);
                }
                return r;
              },
              right: function (e, n, r, i) {
                for (
                  null == r && (r = 0), null == i && (i = e.length);
                  r < i;

                ) {
                  var o = (r + i) >>> 1;
                  t(e[o], n) > 0 ? (i = o) : (r = o + 1);
                }
                return r;
              },
            }
          );
        };
      var o = i(r),
        a = o.right,
        u = (o.left, a);
      var s = function (t, e) {
          var n,
            r,
            i,
            o = t.length,
            a = -1;
          if (null == e) {
            for (; ++a < o; )
              if (null != (n = t[a]) && n >= n)
                for (r = i = n; ++a < o; )
                  null != (n = t[a]) && (r > n && (r = n), i < n && (i = n));
          } else
            for (; ++a < o; )
              if (null != (n = e(t[a], a, t)) && n >= n)
                for (r = i = n; ++a < o; )
                  null != (n = e(t[a], a, t)) &&
                    (r > n && (r = n), i < n && (i = n));
          return [r, i];
        },
        c = Array.prototype,
        f = (c.slice, c.map, Math.sqrt(50)),
        l = Math.sqrt(10),
        h = Math.sqrt(2),
        p = function (t, e, n) {
          var r,
            i,
            o,
            a,
            u = -1;
          if (((n = +n), (t = +t) === (e = +e) && n > 0)) return [t];
          if (
            ((r = e < t) && ((i = t), (t = e), (e = i)),
            0 === (a = d(t, e, n)) || !isFinite(a))
          )
            return [];
          if (a > 0)
            for (
              t = Math.ceil(t / a),
              e = Math.floor(e / a),
              o = new Array((i = Math.ceil(e - t + 1)));
              ++u < i;

            )
              o[u] = (t + u) * a;
          else
            for (
              t = Math.floor(t * a),
              e = Math.ceil(e * a),
              o = new Array((i = Math.ceil(t - e + 1)));
              ++u < i;

            )
              o[u] = (t - u) / a;
          return r && o.reverse(), o;
        };
      function d(t, e, n) {
        var r = (e - t) / Math.max(0, n),
          i = Math.floor(Math.log(r) / Math.LN10),
          o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= f ? 10 : o >= l ? 5 : o >= h ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= f ? 10 : o >= l ? 5 : o >= h ? 2 : 1);
      }
      function v(t, e, n) {
        var r = Math.abs(e - t) / Math.max(0, n),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i;
        return (
          o >= f ? (i *= 10) : o >= l ? (i *= 5) : o >= h && (i *= 2),
          e < t ? -i : i
        );
      }
      var g = function (t, e) {
          var n,
            r,
            i = t.length,
            o = -1;
          if (null == e) {
            for (; ++o < i; )
              if (null != (n = t[o]) && n >= n)
                for (r = n; ++o < i; ) null != (n = t[o]) && n > r && (r = n);
          } else
            for (; ++o < i; )
              if (null != (n = e(t[o], o, t)) && n >= n)
                for (r = n; ++o < i; )
                  null != (n = e(t[o], o, t)) && n > r && (r = n);
          return r;
        },
        y = function (t) {
          for (var e, n, r, i = t.length, o = -1, a = 0; ++o < i; )
            a += t[o].length;
          for (n = new Array(a); --i >= 0; )
            for (e = (r = t[i]).length; --e >= 0; ) n[--a] = r[e];
          return n;
        };
      var m = Array.prototype.slice,
        x = function (t) {
          return t;
        };
      function b(t) {
        return "translate(" + (t + 0.5) + ",0)";
      }
      function w(t) {
        return "translate(0," + (t + 0.5) + ")";
      }
      function _(t) {
        return function (e) {
          return +t(e);
        };
      }
      function S(t) {
        var e = Math.max(0, t.bandwidth() - 1) / 2;
        return (
          t.round() && (e = Math.round(e)),
          function (n) {
            return +t(n) + e;
          }
        );
      }
      function T() {
        return !this.__axis;
      }
      function E(t, e) {
        var n = [],
          r = null,
          i = null,
          o = 6,
          a = 6,
          u = 3,
          s = 1 === t || 4 === t ? -1 : 1,
          c = 4 === t || 2 === t ? "x" : "y",
          f = 1 === t || 3 === t ? b : w;
        function l(l) {
          var h = null == r ? (e.ticks ? e.ticks.apply(e, n) : e.domain()) : r,
            p = null == i ? (e.tickFormat ? e.tickFormat.apply(e, n) : x) : i,
            d = Math.max(o, 0) + u,
            v = e.range(),
            g = +v[0] + 0.5,
            y = +v[v.length - 1] + 0.5,
            m = (e.bandwidth ? S : _)(e.copy()),
            b = l.selection ? l.selection() : l,
            w = b.selectAll(".domain").data([null]),
            E = b.selectAll(".tick").data(h, e).order(),
            A = E.exit(),
            M = E.enter().append("g").attr("class", "tick"),
            C = E.select("line"),
            N = E.select("text");
          (w = w.merge(
            w
              .enter()
              .insert("path", ".tick")
              .attr("class", "domain")
              .attr("stroke", "currentColor"),
          )),
          (E = E.merge(M)),
          (C = C.merge(
            M.append("line")
              .attr("stroke", "currentColor")
              .attr(c + "2", s * o),
          )),
          (N = N.merge(
            M.append("text")
              .attr("fill", "currentColor")
              .attr(c, s * d)
              .attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em"),
          )),
          l !== b &&
              ((w = w.transition(l)),
              (E = E.transition(l)),
              (C = C.transition(l)),
              (N = N.transition(l)),
              (A = A.transition(l)
                .attr("opacity", 1e-6)
                .attr("transform", function (t) {
                  return isFinite((t = m(t)))
                    ? f(t)
                    : this.getAttribute("transform");
                })),
              M.attr("opacity", 1e-6).attr("transform", function (t) {
                var e = this.parentNode.__axis;
                return f(e && isFinite((e = e(t))) ? e : m(t));
              })),
          A.remove(),
          w.attr(
            "d",
            4 === t || 2 == t
              ? a
                ? "M" + s * a + "," + g + "H0.5V" + y + "H" + s * a
                : "M0.5," + g + "V" + y
              : a
                ? "M" + g + "," + s * a + "V0.5H" + y + "V" + s * a
                : "M" + g + ",0.5H" + y,
          ),
          E.attr("opacity", 1).attr("transform", function (t) {
            return f(m(t));
          }),
          C.attr(c + "2", s * o),
          N.attr(c, s * d).text(p),
          b
            .filter(T)
            .attr("fill", "none")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr(
              "text-anchor",
              2 === t ? "start" : 4 === t ? "end" : "middle",
            ),
          b.each(function () {
            this.__axis = m;
          });
        }
        return (
          (l.scale = function (t) {
            return arguments.length ? ((e = t), l) : e;
          }),
          (l.ticks = function () {
            return (n = m.call(arguments)), l;
          }),
          (l.tickArguments = function (t) {
            return arguments.length
              ? ((n = null == t ? [] : m.call(t)), l)
              : n.slice();
          }),
          (l.tickValues = function (t) {
            return arguments.length
              ? ((r = null == t ? null : m.call(t)), l)
              : r && r.slice();
          }),
          (l.tickFormat = function (t) {
            return arguments.length ? ((i = t), l) : i;
          }),
          (l.tickSize = function (t) {
            return arguments.length ? ((o = a = +t), l) : o;
          }),
          (l.tickSizeInner = function (t) {
            return arguments.length ? ((o = +t), l) : o;
          }),
          (l.tickSizeOuter = function (t) {
            return arguments.length ? ((a = +t), l) : a;
          }),
          (l.tickPadding = function (t) {
            return arguments.length ? ((u = +t), l) : u;
          }),
          l
        );
      }
      function A(t) {
        return E(3, t);
      }
      function M(t) {
        return E(4, t);
      }
      var C = { value: function () {} };
      function N() {
        for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
          if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
            throw new Error("illegal type: " + t);
          r[t] = [];
        }
        return new k(r);
      }
      function k(t) {
        this._ = t;
      }
      function j(t, e) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = "",
              r = t.indexOf(".");
            if (
              (r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !e.hasOwnProperty(t))
            )
              throw new Error("unknown type: " + t);
            return { type: t, name: n };
          });
      }
      function R(t, e) {
        for (var n, r = 0, i = t.length; r < i; ++r)
          if ((n = t[r]).name === e) return n.value;
      }
      function O(t, e, n) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === e) {
            (t[r] = C), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != n && t.push({ name: e, value: n }), t;
      }
      k.prototype = N.prototype = {
        constructor: k,
        on: function (t, e) {
          var n,
            r = this._,
            i = j(t + "", r),
            o = -1,
            a = i.length;
          if (!(arguments.length < 2)) {
            if (null != e && "function" != typeof e)
              throw new Error("invalid callback: " + e);
            for (; ++o < a; )
              if ((n = (t = i[o]).type)) r[n] = O(r[n], t.name, e);
              else if (null == e) for (n in r) r[n] = O(r[n], t.name, null);
            return this;
          }
          for (; ++o < a; )
            if ((n = (t = i[o]).type) && (n = R(r[n], t.name))) return n;
        },
        copy: function () {
          var t = {},
            e = this._;
          for (var n in e) t[n] = e[n].slice();
          return new k(t);
        },
        call: function (t, e) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, i = new Array(n), o = 0; o < n; ++o)
              i[o] = arguments[o + 2];
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (o = 0, n = (r = this._[t]).length; o < n; ++o)
            r[o].value.apply(e, i);
        },
        apply: function (t, e, n) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
          for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(e, n);
        },
      };
      var L = N;
      function D() {}
      var I = function (t) {
        return null == t
          ? D
          : function () {
            return this.querySelector(t);
          };
      };
      function P() {
        return [];
      }
      var U = function (t) {
          return null == t
            ? P
            : function () {
              return this.querySelectorAll(t);
            };
        },
        F = function (t) {
          return function () {
            return this.matches(t);
          };
        },
        q = function (t) {
          return new Array(t.length);
        };
      function B(t, e) {
        (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = e);
      }
      B.prototype = {
        constructor: B,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, e) {
          return this._parent.insertBefore(t, e);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      function H(t, e, n, r, i, o) {
        for (var a, u = 0, s = e.length, c = o.length; u < c; ++u)
          (a = e[u])
            ? ((a.__data__ = o[u]), (r[u] = a))
            : (n[u] = new B(t, o[u]));
        for (; u < s; ++u) (a = e[u]) && (i[u] = a);
      }
      function z(t, e, n, r, i, o, a) {
        var u,
          s,
          c,
          f = {},
          l = e.length,
          h = o.length,
          p = new Array(l);
        for (u = 0; u < l; ++u)
          (s = e[u]) &&
            ((p[u] = c = "$" + a.call(s, s.__data__, u, e)),
            c in f ? (i[u] = s) : (f[c] = s));
        for (u = 0; u < h; ++u)
          (s = f[(c = "$" + a.call(t, o[u], u, o))])
            ? ((r[u] = s), (s.__data__ = o[u]), (f[c] = null))
            : (n[u] = new B(t, o[u]));
        for (u = 0; u < l; ++u) (s = e[u]) && f[p[u]] === s && (i[u] = s);
      }
      function W(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      var $ = "http://www.w3.org/1999/xhtml",
        Y = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: $,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        V = function (t) {
          var e = (t += ""),
            n = e.indexOf(":");
          return (
            n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
            Y.hasOwnProperty(e) ? { space: Y[e], local: t } : t
          );
        };
      function X(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function G(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function J(t, e) {
        return function () {
          this.setAttribute(t, e);
        };
      }
      function Z(t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e);
        };
      }
      function Q(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
        };
      }
      function K(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, n);
        };
      }
      var tt = function (t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      };
      function et(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function nt(t, e, n) {
        return function () {
          this.style.setProperty(t, e, n);
        };
      }
      function rt(t, e, n) {
        return function () {
          var r = e.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, n);
        };
      }
      function it(t, e) {
        return (
          t.style.getPropertyValue(e) ||
          tt(t).getComputedStyle(t, null).getPropertyValue(e)
        );
      }
      function ot(t) {
        return function () {
          delete this[t];
        };
      }
      function at(t, e) {
        return function () {
          this[t] = e;
        };
      }
      function ut(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? delete this[t] : (this[t] = n);
        };
      }
      function st(t) {
        return t.trim().split(/^|\s+/);
      }
      function ct(t) {
        return t.classList || new ft(t);
      }
      function ft(t) {
        (this._node = t), (this._names = st(t.getAttribute("class") || ""));
      }
      function lt(t, e) {
        for (var n = ct(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
      }
      function ht(t, e) {
        for (var n = ct(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
      }
      function pt(t) {
        return function () {
          lt(this, t);
        };
      }
      function dt(t) {
        return function () {
          ht(this, t);
        };
      }
      function vt(t, e) {
        return function () {
          (e.apply(this, arguments) ? lt : ht)(this, t);
        };
      }
      ft.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function (t) {
          var e = this._names.indexOf(t);
          e >= 0 &&
            (this._names.splice(e, 1),
            this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      function gt() {
        this.textContent = "";
      }
      function yt(t) {
        return function () {
          this.textContent = t;
        };
      }
      function mt(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.textContent = null == e ? "" : e;
        };
      }
      function xt() {
        this.innerHTML = "";
      }
      function bt(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function wt(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.innerHTML = null == e ? "" : e;
        };
      }
      function _t() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function St() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function Tt(t) {
        return function () {
          var e = this.ownerDocument,
            n = this.namespaceURI;
          return n === $ && e.documentElement.namespaceURI === $
            ? e.createElement(t)
            : e.createElementNS(n, t);
        };
      }
      function Et(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      var At = function (t) {
        var e = V(t);
        return (e.local ? Et : Tt)(e);
      };
      function Mt() {
        return null;
      }
      function Ct() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function Nt() {
        var t = this.cloneNode(!1),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      function kt() {
        var t = this.cloneNode(!0),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      var jt = {},
        Rt = null;
      "undefined" != typeof document &&
        ("onmouseenter" in document.documentElement ||
          (jt = { mouseenter: "mouseover", mouseleave: "mouseout" }));
      function Ot(t, e, n) {
        return (
          (t = Lt(t, e, n)),
          function (e) {
            var n = e.relatedTarget;
            (n && (n === this || 8 & n.compareDocumentPosition(this))) ||
              t.call(this, e);
          }
        );
      }
      function Lt(t, e, n) {
        return function (r) {
          var i = Rt;
          Rt = r;
          try {
            t.call(this, this.__data__, e, n);
          } finally {
            Rt = i;
          }
        };
      }
      function Dt(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = "",
              n = t.indexOf(".");
            return (
              n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
              { type: t, name: e }
            );
          });
      }
      function It(t) {
        return function () {
          var e = this.__on;
          if (e) {
            for (var n, r = 0, i = -1, o = e.length; r < o; ++r)
              (n = e[r]),
              (t.type && n.type !== t.type) || n.name !== t.name
                ? (e[++i] = n)
                : this.removeEventListener(n.type, n.listener, n.capture);
            ++i ? (e.length = i) : delete this.__on;
          }
        };
      }
      function Pt(t, e, n) {
        var r = jt.hasOwnProperty(t.type) ? Ot : Lt;
        return function (i, o, a) {
          var u,
            s = this.__on,
            c = r(e, o, a);
          if (s)
            for (var f = 0, l = s.length; f < l; ++f)
              if ((u = s[f]).type === t.type && u.name === t.name)
                return (
                  this.removeEventListener(u.type, u.listener, u.capture),
                  this.addEventListener(
                    u.type,
                    (u.listener = c),
                    (u.capture = n),
                  ),
                  void (u.value = e)
                );
          this.addEventListener(t.type, c, n),
          (u = {
            type: t.type,
            name: t.name,
            value: e,
            listener: c,
            capture: n,
          }),
          s ? s.push(u) : (this.__on = [u]);
        };
      }
      function Ut(t, e, n) {
        var r = tt(t),
          i = r.CustomEvent;
        "function" == typeof i
          ? (i = new i(e, n))
          : ((i = r.document.createEvent("Event")),
          n
            ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
            : i.initEvent(e, !1, !1)),
        t.dispatchEvent(i);
      }
      function Ft(t, e) {
        return function () {
          return Ut(this, t, e);
        };
      }
      function qt(t, e) {
        return function () {
          return Ut(this, t, e.apply(this, arguments));
        };
      }
      var Bt = [null];
      function Ht(t, e) {
        (this._groups = t), (this._parents = e);
      }
      function zt() {
        return new Ht([[document.documentElement]], Bt);
      }
      Ht.prototype = zt.prototype = {
        constructor: Ht,
        select: function (t) {
          "function" != typeof t && (t = I(t));
          for (
            var e = this._groups, n = e.length, r = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var o,
                a,
                u = e[i],
                s = u.length,
                c = (r[i] = new Array(s)),
                f = 0;
              f < s;
              ++f
            )
              (o = u[f]) &&
                (a = t.call(o, o.__data__, f, u)) &&
                ("__data__" in o && (a.__data__ = o.__data__), (c[f] = a));
          return new Ht(r, this._parents);
        },
        selectAll: function (t) {
          "function" != typeof t && (t = U(t));
          for (
            var e = this._groups, n = e.length, r = [], i = [], o = 0;
            o < n;
            ++o
          )
            for (var a, u = e[o], s = u.length, c = 0; c < s; ++c)
              (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
          return new Ht(r, i);
        },
        filter: function (t) {
          "function" != typeof t && (t = F(t));
          for (
            var e = this._groups, n = e.length, r = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var o, a = e[i], u = a.length, s = (r[i] = []), c = 0;
              c < u;
              ++c
            )
              (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
          return new Ht(r, this._parents);
        },
        data: function (t, e) {
          if (!t)
            return (
              (d = new Array(this.size())),
              (f = -1),
              this.each(function (t) {
                d[++f] = t;
              }),
              d
            );
          var n,
            r = e ? z : H,
            i = this._parents,
            o = this._groups;
          "function" != typeof t &&
            ((n = t),
            (t = function () {
              return n;
            }));
          for (
            var a = o.length,
              u = new Array(a),
              s = new Array(a),
              c = new Array(a),
              f = 0;
            f < a;
            ++f
          ) {
            var l = i[f],
              h = o[f],
              p = h.length,
              d = t.call(l, l && l.__data__, f, i),
              v = d.length,
              g = (s[f] = new Array(v)),
              y = (u[f] = new Array(v));
            r(l, h, g, y, (c[f] = new Array(p)), d, e);
            for (var m, x, b = 0, w = 0; b < v; ++b)
              if ((m = g[b])) {
                for (b >= w && (w = b + 1); !(x = y[w]) && ++w < v; );
                m._next = x || null;
              }
          }
          return ((u = new Ht(u, i))._enter = s), (u._exit = c), u;
        },
        enter: function () {
          return new Ht(this._enter || this._groups.map(q), this._parents);
        },
        exit: function () {
          return new Ht(this._exit || this._groups.map(q), this._parents);
        },
        join: function (t, e, n) {
          var r = this.enter(),
            i = this,
            o = this.exit();
          return (
            (r = "function" == typeof t ? t(r) : r.append(t + "")),
            null != e && (i = e(i)),
            null == n ? o.remove() : n(o),
            r && i ? r.merge(i).order() : i
          );
        },
        merge: function (t) {
          for (
            var e = this._groups,
              n = t._groups,
              r = e.length,
              i = n.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (
              var s,
                c = e[u],
                f = n[u],
                l = c.length,
                h = (a[u] = new Array(l)),
                p = 0;
              p < l;
              ++p
            )
              (s = c[p] || f[p]) && (h[p] = s);
          for (; u < r; ++u) a[u] = e[u];
          return new Ht(a, this._parents);
        },
        order: function () {
          for (var t = this._groups, e = -1, n = t.length; ++e < n; )
            for (var r, i = t[e], o = i.length - 1, a = i[o]; --o >= 0; )
              (r = i[o]) &&
                (a &&
                  4 ^ r.compareDocumentPosition(a) &&
                  a.parentNode.insertBefore(r, a),
                (a = r));
          return this;
        },
        sort: function (t) {
          function e(e, n) {
            return e && n ? t(e.__data__, n.__data__) : !e - !n;
          }
          t || (t = W);
          for (
            var n = this._groups, r = n.length, i = new Array(r), o = 0;
            o < r;
            ++o
          ) {
            for (
              var a, u = n[o], s = u.length, c = (i[o] = new Array(s)), f = 0;
              f < s;
              ++f
            )
              (a = u[f]) && (c[f] = a);
            c.sort(e);
          }
          return new Ht(i, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          var t = new Array(this.size()),
            e = -1;
          return (
            this.each(function () {
              t[++e] = this;
            }),
            t
          );
        },
        node: function () {
          for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
            for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
              var a = r[i];
              if (a) return a;
            }
          return null;
        },
        size: function () {
          var t = 0;
          return (
            this.each(function () {
              ++t;
            }),
            t
          );
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
            for (var i, o = e[n], a = 0, u = o.length; a < u; ++a)
              (i = o[a]) && t.call(i, i.__data__, a, o);
          return this;
        },
        attr: function (t, e) {
          var n = V(t);
          if (arguments.length < 2) {
            var r = this.node();
            return n.local
              ? r.getAttributeNS(n.space, n.local)
              : r.getAttribute(n);
          }
          return this.each(
            (null == e
              ? n.local
                ? G
                : X
              : "function" == typeof e
                ? n.local
                  ? K
                  : Q
                : n.local
                  ? Z
                  : J)(n, e),
          );
        },
        style: function (t, e, n) {
          return arguments.length > 1
            ? this.each(
              (null == e ? et : "function" == typeof e ? rt : nt)(
                t,
                e,
                null == n ? "" : n,
              ),
            )
            : it(this.node(), t);
        },
        property: function (t, e) {
          return arguments.length > 1
            ? this.each(
              (null == e ? ot : "function" == typeof e ? ut : at)(t, e),
            )
            : this.node()[t];
        },
        classed: function (t, e) {
          var n = st(t + "");
          if (arguments.length < 2) {
            for (var r = ct(this.node()), i = -1, o = n.length; ++i < o; )
              if (!r.contains(n[i])) return !1;
            return !0;
          }
          return this.each(("function" == typeof e ? vt : e ? pt : dt)(n, e));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? gt : ("function" == typeof t ? mt : yt)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? xt : ("function" == typeof t ? wt : bt)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(_t);
        },
        lower: function () {
          return this.each(St);
        },
        append: function (t) {
          var e = "function" == typeof t ? t : At(t);
          return this.select(function () {
            return this.appendChild(e.apply(this, arguments));
          });
        },
        insert: function (t, e) {
          var n = "function" == typeof t ? t : At(t),
            r = null == e ? Mt : "function" == typeof e ? e : I(e);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              r.apply(this, arguments) || null,
            );
          });
        },
        remove: function () {
          return this.each(Ct);
        },
        clone: function (t) {
          return this.select(t ? kt : Nt);
        },
        datum: function (t) {
          return arguments.length
            ? this.property("__data__", t)
            : this.node().__data__;
        },
        on: function (t, e, n) {
          var r,
            i,
            o = Dt(t + ""),
            a = o.length;
          if (!(arguments.length < 2)) {
            for (u = e ? Pt : It, null == n && (n = !1), r = 0; r < a; ++r)
              this.each(u(o[r], e, n));
            return this;
          }
          var u = this.node().__on;
          if (u)
            for (var s, c = 0, f = u.length; c < f; ++c)
              for (r = 0, s = u[c]; r < a; ++r)
                if ((i = o[r]).type === s.type && i.name === s.name)
                  return s.value;
        },
        dispatch: function (t, e) {
          return this.each(("function" == typeof e ? qt : Ft)(t, e));
        },
      };
      var Wt = zt,
        $t = function (t) {
          return "string" == typeof t
            ? new Ht([[document.querySelector(t)]], [document.documentElement])
            : new Ht([[t]], Bt);
        };
      var Yt = function (t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      };
      function Vt(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function Xt() {}
      var Gt = "\\s*([+-]?\\d+)\\s*",
        Jt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Zt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Qt = /^#([0-9a-f]{3,8})$/,
        Kt = new RegExp("^rgb\\(" + [Gt, Gt, Gt] + "\\)$"),
        te = new RegExp("^rgb\\(" + [Zt, Zt, Zt] + "\\)$"),
        ee = new RegExp("^rgba\\(" + [Gt, Gt, Gt, Jt] + "\\)$"),
        ne = new RegExp("^rgba\\(" + [Zt, Zt, Zt, Jt] + "\\)$"),
        re = new RegExp("^hsl\\(" + [Jt, Zt, Zt] + "\\)$"),
        ie = new RegExp("^hsla\\(" + [Jt, Zt, Zt, Jt] + "\\)$"),
        oe = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function ae() {
        return this.rgb().formatHex();
      }
      function ue() {
        return this.rgb().formatRgb();
      }
      function se(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = Qt.exec(t))
            ? ((n = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === n
              ? ce(e)
              : 3 === n
                ? new pe(
                  ((e >> 8) & 15) | ((e >> 4) & 240),
                  ((e >> 4) & 15) | (240 & e),
                  ((15 & e) << 4) | (15 & e),
                  1,
                )
                : 8 === n
                  ? fe(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255,
                  )
                  : 4 === n
                    ? fe(
                      ((e >> 12) & 15) | ((e >> 8) & 240),
                      ((e >> 8) & 15) | ((e >> 4) & 240),
                      ((e >> 4) & 15) | (240 & e),
                      (((15 & e) << 4) | (15 & e)) / 255,
                    )
                    : null)
            : (e = Kt.exec(t))
              ? new pe(e[1], e[2], e[3], 1)
              : (e = te.exec(t))
                ? new pe(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  1,
                )
                : (e = ee.exec(t))
                  ? fe(e[1], e[2], e[3], e[4])
                  : (e = ne.exec(t))
                    ? fe(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      e[4],
                    )
                    : (e = re.exec(t))
                      ? ye(e[1], e[2] / 100, e[3] / 100, 1)
                      : (e = ie.exec(t))
                        ? ye(e[1], e[2] / 100, e[3] / 100, e[4])
                        : oe.hasOwnProperty(t)
                          ? ce(oe[t])
                          : "transparent" === t
                            ? new pe(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function ce(t) {
        return new pe((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function fe(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new pe(t, e, n, r);
      }
      function le(t) {
        return (
          t instanceof Xt || (t = se(t)),
          t ? new pe((t = t.rgb()).r, t.g, t.b, t.opacity) : new pe()
        );
      }
      function he(t, e, n, r) {
        return 1 === arguments.length
          ? le(t)
          : new pe(t, e, n, null == r ? 1 : r);
      }
      function pe(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function de() {
        return "#" + ge(this.r) + ge(this.g) + ge(this.b);
      }
      function ve() {
        var t = this.opacity;
        return (
          (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === t ? ")" : ", " + t + ")")
        );
      }
      function ge(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function ye(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
              ? (t = e = NaN)
              : e <= 0 && (t = NaN),
          new xe(t, e, n, r)
        );
      }
      function me(t) {
        if (t instanceof xe) return new xe(t.h, t.s, t.l, t.opacity);
        if ((t instanceof Xt || (t = se(t)), !t)) return new xe();
        if (t instanceof xe) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          o = Math.max(e, n, r),
          a = NaN,
          u = o - i,
          s = (o + i) / 2;
        return (
          u
            ? ((a =
                e === o
                  ? (n - r) / u + 6 * (n < r)
                  : n === o
                    ? (r - e) / u + 2
                    : (e - n) / u + 4),
            (u /= s < 0.5 ? o + i : 2 - o - i),
            (a *= 60))
            : (u = s > 0 && s < 1 ? 0 : a),
          new xe(a, u, s, t.opacity)
        );
      }
      function xe(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function be(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
              ? n
              : t < 240
                ? e + ((n - e) * (240 - t)) / 60
                : e)
        );
      }
      function we(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      Yt(Xt, se, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: ae,
        formatHex: ae,
        formatHsl: function () {
          return me(this).formatHsl();
        },
        formatRgb: ue,
        toString: ue,
      }),
      Yt(
        pe,
        he,
        Vt(Xt, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new pe(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new pe(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function () {
            return this;
          },
          displayable: function () {
            return (
              -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
          },
          hex: de,
          formatHex: de,
          formatRgb: ve,
          toString: ve,
        }),
      ),
      Yt(
        xe,
        function (t, e, n, r) {
          return 1 === arguments.length
            ? me(t)
            : new xe(t, e, n, null == r ? 1 : r);
        },
        Vt(Xt, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new xe(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new xe(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * e,
              i = 2 * n - r;
            return new pe(
              be(t >= 240 ? t - 240 : t + 120, i, r),
              be(t, i, r),
              be(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity,
            );
          },
          displayable: function () {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
            );
          },
          formatHsl: function () {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? "hsl("
                : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === t ? ")" : ", " + t + ")")
            );
          },
        }),
      );
      var _e = function (t) {
        return function () {
          return t;
        };
      };
      function Se(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function Te(t) {
        return 1 == (t = +t)
          ? Ee
          : function (e, n) {
            return n - e
              ? (function (t, e, n) {
                return (
                  (t = Math.pow(t, n)),
                  (e = Math.pow(e, n) - t),
                  (n = 1 / n),
                  function (r) {
                    return Math.pow(t + r * e, n);
                  }
                );
              })(e, n, t)
              : _e(isNaN(e) ? n : e);
          };
      }
      function Ee(t, e) {
        var n = e - t;
        return n ? Se(t, n) : _e(isNaN(t) ? e : t);
      }
      var Ae = (function t(e) {
        var n = Te(e);
        function r(t, e) {
          var r = n((t = he(t)).r, (e = he(e)).r),
            i = n(t.g, e.g),
            o = n(t.b, e.b),
            a = Ee(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = o(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function Me(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (n = 0; n < i; ++n)
            (r = he(e[n])),
            (o[n] = r.r || 0),
            (a[n] = r.g || 0),
            (u[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      Me(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            u = r < e - 1 ? t[r + 2] : 2 * o - i;
          return we((n - r / e) * e, a, i, o, u);
        };
      }),
      Me(function (t) {
        var e = t.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
            i = t[(r + e - 1) % e],
            o = t[r % e],
            a = t[(r + 1) % e],
            u = t[(r + 2) % e];
          return we((n - r / e) * e, i, o, a, u);
        };
      });
      var Ce = function (t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      };
      function Ne(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      function ke(t, e) {
        var n,
          r = e ? e.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (n = 0; n < i; ++n) o[n] = Fe(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < i; ++n) a[n] = o[n](t);
          return a;
        };
      }
      var je = function (t, e) {
          var n = new Date();
          return (
            (t = +t),
            (e = +e),
            function (r) {
              return n.setTime(t * (1 - r) + e * r), n;
            }
          );
        },
        Re = function (t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return t * (1 - n) + e * n;
            }
          );
        },
        Oe = function (t, e) {
          var n,
            r = {},
            i = {};
          for (n in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== e && "object" == typeof e) || (e = {}),
          e))
            n in t ? (r[n] = Fe(t[n], e[n])) : (i[n] = e[n]);
          return function (t) {
            for (n in r) i[n] = r[n](t);
            return i;
          };
        },
        Le = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        De = new RegExp(Le.source, "g");
      var Ie,
        Pe,
        Ue = function (t, e) {
          var n,
            r,
            i,
            o = (Le.lastIndex = De.lastIndex = 0),
            a = -1,
            u = [],
            s = [];
          for (t += "", e += ""; (n = Le.exec(t)) && (r = De.exec(e)); )
            (i = r.index) > o &&
              ((i = e.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? u[a]
                ? (u[a] += r)
                : (u[++a] = r)
              : ((u[++a] = null), s.push({ i: a, x: Re(n, r) })),
            (o = De.lastIndex);
          return (
            o < e.length &&
              ((i = e.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
            u.length < 2
              ? s[0]
                ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(s[0].x)
                : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
              : ((e = s.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) u[(n = s[r]).i] = n.x(t);
                return u.join("");
              })
          );
        },
        Fe = function (t, e) {
          var n,
            r = typeof e;
          return null == e || "boolean" === r
            ? _e(e)
            : ("number" === r
              ? Re
              : "string" === r
                ? (n = se(e))
                  ? ((e = n), Ae)
                  : Ue
                : e instanceof se
                  ? Ae
                  : e instanceof Date
                    ? je
                    : Ne(e)
                      ? Ce
                      : Array.isArray(e)
                        ? ke
                        : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                          ? Oe
                          : Re)(t, e);
        },
        qe = function () {
          for (var t, e = Rt; (t = e.sourceEvent); ) e = t;
          return e;
        },
        Be = function (t, e) {
          var n = t.ownerSVGElement || t;
          if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return (
              (r.x = e.clientX),
              (r.y = e.clientY),
              [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            );
          }
          var i = t.getBoundingClientRect();
          return [
            e.clientX - i.left - t.clientLeft,
            e.clientY - i.top - t.clientTop,
          ];
        },
        He = function (t) {
          var e = qe();
          return e.changedTouches && (e = e.changedTouches[0]), Be(t, e);
        },
        ze = 0,
        We = 0,
        $e = 0,
        Ye = 0,
        Ve = 0,
        Xe = 0,
        Ge =
          "object" == typeof performance && performance.now
            ? performance
            : Date,
        Je =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
              setTimeout(t, 17);
            };
      function Ze() {
        return Ve || (Je(Qe), (Ve = Ge.now() + Xe));
      }
      function Qe() {
        Ve = 0;
      }
      function Ke() {
        this._call = this._time = this._next = null;
      }
      function tn(t, e, n) {
        var r = new Ke();
        return r.restart(t, e, n), r;
      }
      function en() {
        (Ve = (Ye = Ge.now()) + Xe), (ze = We = 0);
        try {
          !(function () {
            Ze(), ++ze;
            for (var t, e = Ie; e; )
              (t = Ve - e._time) >= 0 && e._call.call(null, t), (e = e._next);
            --ze;
          })();
        } finally {
          (ze = 0),
          (function () {
            var t,
              e,
              n = Ie,
              r = 1 / 0;
            for (; n; )
              n._call
                ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                : ((e = n._next),
                (n._next = null),
                (n = t ? (t._next = e) : (Ie = e)));
            (Pe = t), rn(r);
          })(),
          (Ve = 0);
        }
      }
      function nn() {
        var t = Ge.now(),
          e = t - Ye;
        e > 1e3 && ((Xe -= e), (Ye = t));
      }
      function rn(t) {
        ze ||
          (We && (We = clearTimeout(We)),
          t - Ve > 24
            ? (t < 1 / 0 && (We = setTimeout(en, t - Ge.now() - Xe)),
            $e && ($e = clearInterval($e)))
            : ($e || ((Ye = Ge.now()), ($e = setInterval(nn, 1e3))),
            (ze = 1),
            Je(en)));
      }
      Ke.prototype = tn.prototype = {
        constructor: Ke,
        restart: function (t, e, n) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function");
          (n = (null == n ? Ze() : +n) + (null == e ? 0 : +e)),
          this._next ||
              Pe === this ||
              (Pe ? (Pe._next = this) : (Ie = this), (Pe = this)),
          (this._call = t),
          (this._time = n),
          rn();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), rn());
        },
      };
      var on = function (t, e, n) {
          var r = new Ke();
          return (
            (e = null == e ? 0 : +e),
            r.restart(
              function (n) {
                r.stop(), t(n + e);
              },
              e,
              n,
            ),
            r
          );
        },
        an = L("start", "end", "cancel", "interrupt"),
        un = [],
        sn = function (t, e, n, r, i, o) {
          var a = t.__transition;
          if (a) {
            if (n in a) return;
          } else t.__transition = {};
          !(function (t, e, n) {
            var r,
              i = t.__transition;
            function o(s) {
              var c, f, l, h;
              if (1 !== n.state) return u();
              for (c in i)
                if ((h = i[c]).name === n.name) {
                  if (3 === h.state) return on(o);
                  4 === h.state
                    ? ((h.state = 6),
                    h.timer.stop(),
                    h.on.call("interrupt", t, t.__data__, h.index, h.group),
                    delete i[c])
                    : +c < e &&
                      ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("cancel", t, t.__data__, h.index, h.group),
                      delete i[c]);
                }
              if (
                (on(function () {
                  3 === n.state &&
                    ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(s));
                }),
                (n.state = 2),
                n.on.call("start", t, t.__data__, n.index, n.group),
                2 === n.state)
              ) {
                for (
                  n.state = 3,
                  r = new Array((l = n.tween.length)),
                  c = 0,
                  f = -1;
                  c < l;
                  ++c
                )
                  (h = n.tween[c].value.call(
                    t,
                    t.__data__,
                    n.index,
                    n.group,
                  )) && (r[++f] = h);
                r.length = f + 1;
              }
            }
            function a(e) {
              for (
                var i =
                    e < n.duration
                      ? n.ease.call(null, e / n.duration)
                      : (n.timer.restart(u), (n.state = 5), 1),
                  o = -1,
                  a = r.length;
                ++o < a;

              )
                r[o].call(t, i);
              5 === n.state &&
                (n.on.call("end", t, t.__data__, n.index, n.group), u());
            }
            function u() {
              for (var r in ((n.state = 6), n.timer.stop(), delete i[e], i))
                return;
              delete t.__transition;
            }
            (i[e] = n),
            (n.timer = tn(
              function (t) {
                (n.state = 1),
                n.timer.restart(o, n.delay, n.time),
                n.delay <= t && o(t - n.delay);
              },
              0,
              n.time,
            ));
          })(t, n, {
            name: e,
            index: r,
            group: i,
            on: an,
            tween: un,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: 0,
          });
        };
      function cn(t, e) {
        var n = ln(t, e);
        if (n.state > 0) throw new Error("too late; already scheduled");
        return n;
      }
      function fn(t, e) {
        var n = ln(t, e);
        if (n.state > 3) throw new Error("too late; already running");
        return n;
      }
      function ln(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error("transition not found");
        return n;
      }
      var hn,
        pn,
        dn,
        vn,
        gn = function (t, e) {
          var n,
            r,
            i,
            o = t.__transition,
            a = !0;
          if (o) {
            for (i in ((e = null == e ? null : e + ""), o))
              (n = o[i]).name === e
                ? ((r = n.state > 2 && n.state < 5),
                (n.state = 6),
                n.timer.stop(),
                n.on.call(
                  r ? "interrupt" : "cancel",
                  t,
                  t.__data__,
                  n.index,
                  n.group,
                ),
                delete o[i])
                : (a = !1);
            a && delete t.__transition;
          }
        },
        yn = 180 / Math.PI,
        mn = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        },
        xn = function (t, e, n, r, i, o) {
          var a, u, s;
          return (
            (a = Math.sqrt(t * t + e * e)) && ((t /= a), (e /= a)),
            (s = t * n + e * r) && ((n -= t * s), (r -= e * s)),
            (u = Math.sqrt(n * n + r * r)) && ((n /= u), (r /= u), (s /= u)),
            t * r < e * n && ((t = -t), (e = -e), (s = -s), (a = -a)),
            {
              translateX: i,
              translateY: o,
              rotate: Math.atan2(e, t) * yn,
              skewX: Math.atan(s) * yn,
              scaleX: a,
              scaleY: u,
            }
          );
        };
      function bn(t, e, n, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }
        return function (o, a) {
          var u = [],
            s = [];
          return (
            (o = t(o)),
            (a = t(a)),
            (function (t, r, i, o, a, u) {
              if (t !== i || r !== o) {
                var s = a.push("translate(", null, e, null, n);
                u.push({ i: s - 4, x: Re(t, i) }, { i: s - 2, x: Re(r, o) });
              } else (i || o) && a.push("translate(" + i + e + o + n);
            })(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
            (function (t, e, n, o) {
              t !== e
                ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                o.push({
                  i: n.push(i(n) + "rotate(", null, r) - 2,
                  x: Re(t, e),
                }))
                : e && n.push(i(n) + "rotate(" + e + r);
            })(o.rotate, a.rotate, u, s),
            (function (t, e, n, o) {
              t !== e
                ? o.push({
                  i: n.push(i(n) + "skewX(", null, r) - 2,
                  x: Re(t, e),
                })
                : e && n.push(i(n) + "skewX(" + e + r);
            })(o.skewX, a.skewX, u, s),
            (function (t, e, n, r, o, a) {
              if (t !== n || e !== r) {
                var u = o.push(i(o) + "scale(", null, ",", null, ")");
                a.push({ i: u - 4, x: Re(t, n) }, { i: u - 2, x: Re(e, r) });
              } else
                (1 === n && 1 === r) ||
                  o.push(i(o) + "scale(" + n + "," + r + ")");
            })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
            (o = a = null),
            function (t) {
              for (var e, n = -1, r = s.length; ++n < r; )
                u[(e = s[n]).i] = e.x(t);
              return u.join("");
            }
          );
        };
      }
      var wn = bn(
          function (t) {
            return "none" === t
              ? mn
              : (hn ||
                  ((hn = document.createElement("DIV")),
                  (pn = document.documentElement),
                  (dn = document.defaultView)),
              (hn.style.transform = t),
              (t = dn
                .getComputedStyle(pn.appendChild(hn), null)
                .getPropertyValue("transform")),
              pn.removeChild(hn),
              (t = t.slice(7, -1).split(",")),
              xn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
          },
          "px, ",
          "px)",
          "deg)",
        ),
        _n = bn(
          function (t) {
            return null == t
              ? mn
              : (vn ||
                  (vn = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "g",
                  )),
              vn.setAttribute("transform", t),
              (t = vn.transform.baseVal.consolidate())
                ? ((t = t.matrix), xn(t.a, t.b, t.c, t.d, t.e, t.f))
                : mn);
          },
          ", ",
          ")",
          ")",
        );
      function Sn(t, e) {
        var n, r;
        return function () {
          var i = fn(this, t),
            o = i.tween;
          if (o !== n)
            for (var a = 0, u = (r = n = o).length; a < u; ++a)
              if (r[a].name === e) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          i.tween = r;
        };
      }
      function Tn(t, e, n) {
        var r, i;
        if ("function" != typeof n) throw new Error();
        return function () {
          var o = fn(this, t),
            a = o.tween;
          if (a !== r) {
            i = (r = a).slice();
            for (var u = { name: e, value: n }, s = 0, c = i.length; s < c; ++s)
              if (i[s].name === e) {
                i[s] = u;
                break;
              }
            s === c && i.push(u);
          }
          o.tween = i;
        };
      }
      function En(t, e, n) {
        var r = t._id;
        return (
          t.each(function () {
            var t = fn(this, r);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments);
          }),
          function (t) {
            return ln(t, r).value[e];
          }
        );
      }
      var An = function (t, e) {
        var n;
        return (
          "number" == typeof e
            ? Re
            : e instanceof se
              ? Ae
              : (n = se(e))
                ? ((e = n), Ae)
                : Ue
        )(t, e);
      };
      function Mn(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Cn(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function Nn(t, e, n) {
        var r,
          i,
          o = n + "";
        return function () {
          var a = this.getAttribute(t);
          return a === o ? null : a === r ? i : (i = e((r = a), n));
        };
      }
      function kn(t, e, n) {
        var r,
          i,
          o = n + "";
        return function () {
          var a = this.getAttributeNS(t.space, t.local);
          return a === o ? null : a === r ? i : (i = e((r = a), n));
        };
      }
      function jn(t, e, n) {
        var r, i, o;
        return function () {
          var a,
            u,
            s = n(this);
          if (null != s)
            return (a = this.getAttribute(t)) === (u = s + "")
              ? null
              : a === r && u === i
                ? o
                : ((i = u), (o = e((r = a), s)));
          this.removeAttribute(t);
        };
      }
      function Rn(t, e, n) {
        var r, i, o;
        return function () {
          var a,
            u,
            s = n(this);
          if (null != s)
            return (a = this.getAttributeNS(t.space, t.local)) === (u = s + "")
              ? null
              : a === r && u === i
                ? o
                : ((i = u), (o = e((r = a), s)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function On(t, e) {
        return function (n) {
          this.setAttribute(t, e.call(this, n));
        };
      }
      function Ln(t, e) {
        return function (n) {
          this.setAttributeNS(t.space, t.local, e.call(this, n));
        };
      }
      function Dn(t, e) {
        var n, r;
        function i() {
          var i = e.apply(this, arguments);
          return i !== r && (n = (r = i) && Ln(t, i)), n;
        }
        return (i._value = e), i;
      }
      function In(t, e) {
        var n, r;
        function i() {
          var i = e.apply(this, arguments);
          return i !== r && (n = (r = i) && On(t, i)), n;
        }
        return (i._value = e), i;
      }
      function Pn(t, e) {
        return function () {
          cn(this, t).delay = +e.apply(this, arguments);
        };
      }
      function Un(t, e) {
        return (
          (e = +e),
          function () {
            cn(this, t).delay = e;
          }
        );
      }
      function Fn(t, e) {
        return function () {
          fn(this, t).duration = +e.apply(this, arguments);
        };
      }
      function qn(t, e) {
        return (
          (e = +e),
          function () {
            fn(this, t).duration = e;
          }
        );
      }
      function Bn(t, e) {
        if ("function" != typeof e) throw new Error();
        return function () {
          fn(this, t).ease = e;
        };
      }
      function Hn(t, e, n) {
        var r,
          i,
          o = (function (t) {
            return (t + "")
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var e = t.indexOf(".");
                return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
              });
          })(e)
            ? cn
            : fn;
        return function () {
          var a = o(this, t),
            u = a.on;
          u !== r && (i = (r = u).copy()).on(e, n), (a.on = i);
        };
      }
      var zn = Wt.prototype.constructor;
      function Wn(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function $n(t, e, n) {
        return function (r) {
          this.style.setProperty(t, e.call(this, r), n);
        };
      }
      function Yn(t, e, n) {
        var r, i;
        function o() {
          var o = e.apply(this, arguments);
          return o !== i && (r = (i = o) && $n(t, o, n)), r;
        }
        return (o._value = e), o;
      }
      function Vn(t) {
        return function (e) {
          this.textContent = t.call(this, e);
        };
      }
      function Xn(t) {
        var e, n;
        function r() {
          var r = t.apply(this, arguments);
          return r !== n && (e = (n = r) && Vn(r)), e;
        }
        return (r._value = t), r;
      }
      var Gn = 0;
      function Jn(t, e, n, r) {
        (this._groups = t),
        (this._parents = e),
        (this._name = n),
        (this._id = r);
      }
      function Zn() {
        return ++Gn;
      }
      var Qn = Wt.prototype;
      Jn.prototype = function (t) {
        return Wt().transition(t);
      }.prototype = {
        constructor: Jn,
        select: function (t) {
          var e = this._name,
            n = this._id;
          "function" != typeof t && (t = I(t));
          for (
            var r = this._groups, i = r.length, o = new Array(i), a = 0;
            a < i;
            ++a
          )
            for (
              var u,
                s,
                c = r[a],
                f = c.length,
                l = (o[a] = new Array(f)),
                h = 0;
              h < f;
              ++h
            )
              (u = c[h]) &&
                (s = t.call(u, u.__data__, h, c)) &&
                ("__data__" in u && (s.__data__ = u.__data__),
                (l[h] = s),
                sn(l[h], e, n, h, l, ln(u, n)));
          return new Jn(o, this._parents, e, n);
        },
        selectAll: function (t) {
          var e = this._name,
            n = this._id;
          "function" != typeof t && (t = U(t));
          for (
            var r = this._groups, i = r.length, o = [], a = [], u = 0;
            u < i;
            ++u
          )
            for (var s, c = r[u], f = c.length, l = 0; l < f; ++l)
              if ((s = c[l])) {
                for (
                  var h,
                    p = t.call(s, s.__data__, l, c),
                    d = ln(s, n),
                    v = 0,
                    g = p.length;
                  v < g;
                  ++v
                )
                  (h = p[v]) && sn(h, e, n, v, p, d);
                o.push(p), a.push(s);
              }
          return new Jn(o, a, e, n);
        },
        filter: function (t) {
          "function" != typeof t && (t = F(t));
          for (
            var e = this._groups, n = e.length, r = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var o, a = e[i], u = a.length, s = (r[i] = []), c = 0;
              c < u;
              ++c
            )
              (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
          return new Jn(r, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var e = this._groups,
              n = t._groups,
              r = e.length,
              i = n.length,
              o = Math.min(r, i),
              a = new Array(r),
              u = 0;
            u < o;
            ++u
          )
            for (
              var s,
                c = e[u],
                f = n[u],
                l = c.length,
                h = (a[u] = new Array(l)),
                p = 0;
              p < l;
              ++p
            )
              (s = c[p] || f[p]) && (h[p] = s);
          for (; u < r; ++u) a[u] = e[u];
          return new Jn(a, this._parents, this._name, this._id);
        },
        selection: function () {
          return new zn(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name,
              e = this._id,
              n = Zn(),
              r = this._groups,
              i = r.length,
              o = 0;
            o < i;
            ++o
          )
            for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
              if ((a = u[c])) {
                var f = ln(a, e);
                sn(a, t, n, c, u, {
                  time: f.time + f.delay + f.duration,
                  delay: 0,
                  duration: f.duration,
                  ease: f.ease,
                });
              }
          return new Jn(r, this._parents, t, n);
        },
        call: Qn.call,
        nodes: Qn.nodes,
        node: Qn.node,
        size: Qn.size,
        empty: Qn.empty,
        each: Qn.each,
        on: function (t, e) {
          var n = this._id;
          return arguments.length < 2
            ? ln(this.node(), n).on.on(t)
            : this.each(Hn(n, t, e));
        },
        attr: function (t, e) {
          var n = V(t),
            r = "transform" === n ? _n : An;
          return this.attrTween(
            t,
            "function" == typeof e
              ? (n.local ? Rn : jn)(n, r, En(this, "attr." + t, e))
              : null == e
                ? (n.local ? Cn : Mn)(n)
                : (n.local ? kn : Nn)(n, r, e),
          );
        },
        attrTween: function (t, e) {
          var n = "attr." + t;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == e) return this.tween(n, null);
          if ("function" != typeof e) throw new Error();
          var r = V(t);
          return this.tween(n, (r.local ? Dn : In)(r, e));
        },
        style: function (t, e, n) {
          var r = "transform" == (t += "") ? wn : An;
          return null == e
            ? this.styleTween(
              t,
              (function (t, e) {
                var n, r, i;
                return function () {
                  var o = it(this, t),
                    a = (this.style.removeProperty(t), it(this, t));
                  return o === a
                    ? null
                    : o === n && a === r
                      ? i
                      : (i = e((n = o), (r = a)));
                };
              })(t, r),
            ).on("end.style." + t, Wn(t))
            : "function" == typeof e
              ? this.styleTween(
                t,
                (function (t, e, n) {
                  var r, i, o;
                  return function () {
                    var a = it(this, t),
                      u = n(this),
                      s = u + "";
                    return (
                      null == u &&
                        (this.style.removeProperty(t), (s = u = it(this, t))),
                      a === s
                        ? null
                        : a === r && s === i
                          ? o
                          : ((i = s), (o = e((r = a), u)))
                    );
                  };
                })(t, r, En(this, "style." + t, e)),
              ).each(
                (function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    a = "style." + e,
                    u = "end." + a;
                  return function () {
                    var s = fn(this, t),
                      c = s.on,
                      f = null == s.value[a] ? o || (o = Wn(e)) : void 0;
                    (c === n && i === f) || (r = (n = c).copy()).on(u, (i = f)),
                    (s.on = r);
                  };
                })(this._id, t),
              )
              : this.styleTween(
                t,
                (function (t, e, n) {
                  var r,
                    i,
                    o = n + "";
                  return function () {
                    var a = it(this, t);
                    return a === o ? null : a === r ? i : (i = e((r = a), n));
                  };
                })(t, r, e),
                n,
              ).on("end.style." + t, null);
        },
        styleTween: function (t, e, n) {
          var r = "style." + (t += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == e) return this.tween(r, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(r, Yn(t, e, null == n ? "" : n));
        },
        text: function (t) {
          return this.tween(
            "text",
            "function" == typeof t
              ? (function (t) {
                return function () {
                  var e = t(this);
                  this.textContent = null == e ? "" : e;
                };
              })(En(this, "text", t))
              : (function (t) {
                return function () {
                  this.textContent = t;
                };
              })(null == t ? "" : t + ""),
          );
        },
        textTween: function (t) {
          var e = "text";
          if (arguments.length < 1) return (e = this.tween(e)) && e._value;
          if (null == t) return this.tween(e, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(e, Xn(t));
        },
        remove: function () {
          return this.on(
            "end.remove",
            ((t = this._id),
            function () {
              var e = this.parentNode;
              for (var n in this.__transition) if (+n !== t) return;
              e && e.removeChild(this);
            }),
          );
          var t;
        },
        tween: function (t, e) {
          var n = this._id;
          if (((t += ""), arguments.length < 2)) {
            for (
              var r, i = ln(this.node(), n).tween, o = 0, a = i.length;
              o < a;
              ++o
            )
              if ((r = i[o]).name === t) return r.value;
            return null;
          }
          return this.each((null == e ? Sn : Tn)(n, t, e));
        },
        delay: function (t) {
          var e = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? Pn : Un)(e, t))
            : ln(this.node(), e).delay;
        },
        duration: function (t) {
          var e = this._id;
          return arguments.length
            ? this.each(("function" == typeof t ? Fn : qn)(e, t))
            : ln(this.node(), e).duration;
        },
        ease: function (t) {
          var e = this._id;
          return arguments.length
            ? this.each(Bn(e, t))
            : ln(this.node(), e).ease;
        },
        end: function () {
          var t,
            e,
            n = this,
            r = n._id,
            i = n.size();
          return new Promise(function (o, a) {
            var u = { value: a },
              s = {
                value: function () {
                  0 == --i && o();
                },
              };
            n.each(function () {
              var n = fn(this, r),
                i = n.on;
              i !== t &&
                ((e = (t = i).copy())._.cancel.push(u),
                e._.interrupt.push(u),
                e._.end.push(s)),
              (n.on = e);
            });
          });
        },
      };
      var Kn = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        },
      };
      function tr(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]); )
          if (!(t = t.parentNode)) return (Kn.time = Ze()), Kn;
        return n;
      }
      (Wt.prototype.interrupt = function (t) {
        return this.each(function () {
          gn(this, t);
        });
      }),
      (Wt.prototype.transition = function (t) {
        var e, n;
        t instanceof Jn
          ? ((e = t._id), (t = t._name))
          : ((e = Zn()),
          ((n = Kn).time = Ze()),
          (t = null == t ? null : t + ""));
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
          for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
            (a = u[c]) && sn(a, t, e, c, u, n || tr(a, e));
        return new Jn(r, this._parents, t, e);
      });
      function er(t) {
        return [+t[0], +t[1]];
      }
      function nr(t) {
        return [er(t[0]), er(t[1])];
      }
      ["w", "e"].map(rr),
      ["n", "s"].map(rr),
      ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(rr);
      function rr(t) {
        return { type: t };
      }
      Math.cos, Math.sin, Math.PI, Math.max;
      Array.prototype.slice;
      var ir = Math.PI,
        or = 2 * ir,
        ar = or - 1e-6;
      function ur() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function sr() {
        return new ur();
      }
      ur.prototype = sr.prototype = {
        constructor: ur,
        moveTo: function (t, e) {
          this._ +=
            "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (t, e) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
        },
        quadraticCurveTo: function (t, e, n, r) {
          this._ +=
            "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (t, e, n, r, i, o) {
          this._ +=
            "C" +
            +t +
            "," +
            +e +
            "," +
            +n +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +o);
        },
        arcTo: function (t, e, n, r, i) {
          (t = +t), (e = +e), (n = +n), (r = +r), (i = +i);
          var o = this._x1,
            a = this._y1,
            u = n - t,
            s = r - e,
            c = o - t,
            f = a - e,
            l = c * c + f * f;
          if (i < 0) throw new Error("negative radius: " + i);
          if (null === this._x1)
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
          else if (l > 1e-6)
            if (Math.abs(f * u - s * c) > 1e-6 && i) {
              var h = n - o,
                p = r - a,
                d = u * u + s * s,
                v = h * h + p * p,
                g = Math.sqrt(d),
                y = Math.sqrt(l),
                m =
                  i * Math.tan((ir - Math.acos((d + l - v) / (2 * g * y))) / 2),
                x = m / y,
                b = m / g;
              Math.abs(x - 1) > 1e-6 &&
                (this._ += "L" + (t + x * c) + "," + (e + x * f)),
              (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(f * h > c * p) +
                  "," +
                  (this._x1 = t + b * u) +
                  "," +
                  (this._y1 = e + b * s));
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
          else;
        },
        arc: function (t, e, n, r, i, o) {
          (t = +t), (e = +e), (o = !!o);
          var a = (n = +n) * Math.cos(r),
            u = n * Math.sin(r),
            s = t + a,
            c = e + u,
            f = 1 ^ o,
            l = o ? r - i : i - r;
          if (n < 0) throw new Error("negative radius: " + n);
          null === this._x1
            ? (this._ += "M" + s + "," + c)
            : (Math.abs(this._x1 - s) > 1e-6 ||
                Math.abs(this._y1 - c) > 1e-6) &&
              (this._ += "L" + s + "," + c),
          n &&
              (l < 0 && (l = (l % or) + or),
              l > ar
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    f +
                    "," +
                    (t - a) +
                    "," +
                    (e - u) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    f +
                    "," +
                    (this._x1 = s) +
                    "," +
                    (this._y1 = c))
                : l > 1e-6 &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(l >= ir) +
                    "," +
                    f +
                    "," +
                    (this._x1 = t + n * Math.cos(i)) +
                    "," +
                    (this._y1 = e + n * Math.sin(i))));
        },
        rect: function (t, e, n, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +t) +
            "," +
            (this._y0 = this._y1 = +e) +
            "h" +
            +n +
            "v" +
            +r +
            "h" +
            -n +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      var cr = sr;
      function fr() {}
      function lr(t, e) {
        var n = new fr();
        if (t instanceof fr)
          t.each(function (t, e) {
            n.set(e, t);
          });
        else if (Array.isArray(t)) {
          var r,
            i = -1,
            o = t.length;
          if (null == e) for (; ++i < o; ) n.set(i, t[i]);
          else for (; ++i < o; ) n.set(e((r = t[i]), i, t), r);
        } else if (t) for (var a in t) n.set(a, t[a]);
        return n;
      }
      fr.prototype = lr.prototype = {
        constructor: fr,
        has: function (t) {
          return "$" + t in this;
        },
        get: function (t) {
          return this["$" + t];
        },
        set: function (t, e) {
          return (this["$" + t] = e), this;
        },
        remove: function (t) {
          var e = "$" + t;
          return e in this && delete this[e];
        },
        clear: function () {
          for (var t in this) "$" === t[0] && delete this[t];
        },
        keys: function () {
          var t = [];
          for (var e in this) "$" === e[0] && t.push(e.slice(1));
          return t;
        },
        values: function () {
          var t = [];
          for (var e in this) "$" === e[0] && t.push(this[e]);
          return t;
        },
        entries: function () {
          var t = [];
          for (var e in this)
            "$" === e[0] && t.push({ key: e.slice(1), value: this[e] });
          return t;
        },
        size: function () {
          var t = 0;
          for (var e in this) "$" === e[0] && ++t;
          return t;
        },
        empty: function () {
          for (var t in this) if ("$" === t[0]) return !1;
          return !0;
        },
        each: function (t) {
          for (var e in this) "$" === e[0] && t(this[e], e.slice(1), this);
        },
      };
      var hr = lr;
      function pr() {}
      var dr = hr.prototype;
      function vr(t, e) {
        var n = new pr();
        if (t instanceof pr)
          t.each(function (t) {
            n.add(t);
          });
        else if (t) {
          var r = -1,
            i = t.length;
          if (null == e) for (; ++r < i; ) n.add(t[r]);
          else for (; ++r < i; ) n.add(e(t[r], r, t));
        }
        return n;
      }
      pr.prototype = vr.prototype = {
        constructor: pr,
        has: dr.has,
        add: function (t) {
          return (this["$" + (t += "")] = t), this;
        },
        remove: dr.remove,
        clear: dr.clear,
        values: dr.keys,
        size: dr.size,
        empty: dr.empty,
        each: dr.each,
      };
      Array.prototype.slice;
      var gr = {},
        yr = {};
      function mr(t) {
        return new Function(
          "d",
          "return {" +
            t
              .map(function (t, e) {
                return JSON.stringify(t) + ": d[" + e + "] || \"\"";
              })
              .join(",") +
            "}",
        );
      }
      function xr(t) {
        var e = Object.create(null),
          n = [];
        return (
          t.forEach(function (t) {
            for (var r in t) r in e || n.push((e[r] = r));
          }),
          n
        );
      }
      function br(t, e) {
        var n = t + "",
          r = n.length;
        return r < e ? new Array(e - r + 1).join(0) + n : n;
      }
      function wr(t) {
        var e,
          n = t.getUTCHours(),
          r = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          o = t.getUTCMilliseconds();
        return isNaN(t)
          ? "Invalid Date"
          : ((e = t.getUTCFullYear()) < 0
            ? "-" + br(-e, 6)
            : e > 9999
              ? "+" + br(e, 6)
              : br(e, 4)) +
              "-" +
              br(t.getUTCMonth() + 1, 2) +
              "-" +
              br(t.getUTCDate(), 2) +
              (o
                ? "T" +
                  br(n, 2) +
                  ":" +
                  br(r, 2) +
                  ":" +
                  br(i, 2) +
                  "." +
                  br(o, 3) +
                  "Z"
                : i
                  ? "T" + br(n, 2) + ":" + br(r, 2) + ":" + br(i, 2) + "Z"
                  : r || n
                    ? "T" + br(n, 2) + ":" + br(r, 2) + "Z"
                    : "");
      }
      var _r = function (t) {
          var e = new RegExp("[\"" + t + "\n\r]"),
            n = t.charCodeAt(0);
          function r(t, e) {
            var r,
              i = [],
              o = t.length,
              a = 0,
              u = 0,
              s = o <= 0,
              c = !1;
            function f() {
              if (s) return yr;
              if (c) return (c = !1), gr;
              var e,
                r,
                i = a;
              if (34 === t.charCodeAt(i)) {
                for (
                  ;
                  (a++ < o && 34 !== t.charCodeAt(a)) ||
                  34 === t.charCodeAt(++a);

                );
                return (
                  (e = a) >= o
                    ? (s = !0)
                    : 10 === (r = t.charCodeAt(a++))
                      ? (c = !0)
                      : 13 === r && ((c = !0), 10 === t.charCodeAt(a) && ++a),
                  t.slice(i + 1, e - 1).replace(/""/g, "\"")
                );
              }
              for (; a < o; ) {
                if (10 === (r = t.charCodeAt((e = a++)))) c = !0;
                else if (13 === r) (c = !0), 10 === t.charCodeAt(a) && ++a;
                else if (r !== n) continue;
                return t.slice(i, e);
              }
              return (s = !0), t.slice(i, o);
            }
            for (
              10 === t.charCodeAt(o - 1) && --o,
              13 === t.charCodeAt(o - 1) && --o;
              (r = f()) !== yr;

            ) {
              for (var l = []; r !== gr && r !== yr; ) l.push(r), (r = f());
              (e && null == (l = e(l, u++))) || i.push(l);
            }
            return i;
          }
          function i(e, n) {
            return e.map(function (e) {
              return n
                .map(function (t) {
                  return a(e[t]);
                })
                .join(t);
            });
          }
          function o(e) {
            return e.map(a).join(t);
          }
          function a(t) {
            return null == t
              ? ""
              : t instanceof Date
                ? wr(t)
                : e.test((t += ""))
                  ? "\"" + t.replace(/"/g, "\"\"") + "\""
                  : t;
          }
          return {
            parse: function (t, e) {
              var n,
                i,
                o = r(t, function (t, r) {
                  if (n) return n(t, r - 1);
                  (i = t),
                  (n = e
                    ? (function (t, e) {
                      var n = mr(t);
                      return function (r, i) {
                        return e(n(r), i, t);
                      };
                    })(t, e)
                    : mr(t));
                });
              return (o.columns = i || []), o;
            },
            parseRows: r,
            format: function (e, n) {
              return (
                null == n && (n = xr(e)),
                [n.map(a).join(t)].concat(i(e, n)).join("\n")
              );
            },
            formatBody: function (t, e) {
              return null == e && (e = xr(t)), i(t, e).join("\n");
            },
            formatRows: function (t) {
              return t.map(o).join("\n");
            },
            formatRow: o,
            formatValue: a,
          };
        },
        Sr = _r(","),
        Tr = Sr.parse,
        Er =
          (Sr.parseRows,
          Sr.format,
          Sr.formatBody,
          Sr.formatRows,
          Sr.formatRow,
          Sr.formatValue,
          _r("\t")),
        Ar = Er.parse;
      Er.parseRows,
      Er.format,
      Er.formatBody,
      Er.formatRows,
      Er.formatRow,
      Er.formatValue;
      function Mr(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text();
      }
      var Cr = function (t, e) {
        return fetch(t, e).then(Mr);
      };
      function Nr(t) {
        return function (e, n, r) {
          return (
            2 === arguments.length &&
              "function" == typeof n &&
              ((r = n), (n = void 0)),
            Cr(e, n).then(function (e) {
              return t(e, r);
            })
          );
        };
      }
      var kr = Nr(Tr);
      Nr(Ar);
      function jr(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        if (204 !== t.status && 205 !== t.status) return t.json();
      }
      var Rr = function (t, e) {
        return fetch(t, e).then(jr);
      };
      function Or(t, e, n, r) {
        if (isNaN(e) || isNaN(n)) return t;
        var i,
          o,
          a,
          u,
          s,
          c,
          f,
          l,
          h,
          p = t._root,
          d = { data: r },
          v = t._x0,
          g = t._y0,
          y = t._x1,
          m = t._y1;
        if (!p) return (t._root = d), t;
        for (; p.length; )
          if (
            ((c = e >= (o = (v + y) / 2)) ? (v = o) : (y = o),
            (f = n >= (a = (g + m) / 2)) ? (g = a) : (m = a),
            (i = p),
            !(p = p[(l = (f << 1) | c)]))
          )
            return (i[l] = d), t;
        if (
          ((u = +t._x.call(null, p.data)),
          (s = +t._y.call(null, p.data)),
          e === u && n === s)
        )
          return (d.next = p), i ? (i[l] = d) : (t._root = d), t;
        do {
          (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
          (c = e >= (o = (v + y) / 2)) ? (v = o) : (y = o),
          (f = n >= (a = (g + m) / 2)) ? (g = a) : (m = a);
        } while ((l = (f << 1) | c) == (h = ((s >= a) << 1) | (u >= o)));
        return (i[h] = p), (i[l] = d), t;
      }
      var Lr = function (t, e, n, r, i) {
        (this.node = t),
        (this.x0 = e),
        (this.y0 = n),
        (this.x1 = r),
        (this.y1 = i);
      };
      function Dr(t) {
        return t[0];
      }
      function Ir(t) {
        return t[1];
      }
      function Pr(t, e, n) {
        var r = new Ur(
          null == e ? Dr : e,
          null == n ? Ir : n,
          NaN,
          NaN,
          NaN,
          NaN,
        );
        return null == t ? r : r.addAll(t);
      }
      function Ur(t, e, n, r, i, o) {
        (this._x = t),
        (this._y = e),
        (this._x0 = n),
        (this._y0 = r),
        (this._x1 = i),
        (this._y1 = o),
        (this._root = void 0);
      }
      function Fr(t) {
        for (var e = { data: t.data }, n = e; (t = t.next); )
          n = n.next = { data: t.data };
        return e;
      }
      var qr = (Pr.prototype = Ur.prototype);
      (qr.copy = function () {
        var t,
          e,
          n = new Ur(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return n;
        if (!r.length) return (n._root = Fr(r)), n;
        for (
          t = [{ source: r, target: (n._root = new Array(4)) }];
          (r = t.pop());

        )
          for (var i = 0; i < 4; ++i)
            (e = r.source[i]) &&
              (e.length
                ? t.push({ source: e, target: (r.target[i] = new Array(4)) })
                : (r.target[i] = Fr(e)));
        return n;
      }),
      (qr.add = function (t) {
        var e = +this._x.call(null, t),
          n = +this._y.call(null, t);
        return Or(this.cover(e, n), e, n, t);
      }),
      (qr.addAll = function (t) {
        var e,
          n,
          r,
          i,
          o = t.length,
          a = new Array(o),
          u = new Array(o),
          s = 1 / 0,
          c = 1 / 0,
          f = -1 / 0,
          l = -1 / 0;
        for (n = 0; n < o; ++n)
          isNaN((r = +this._x.call(null, (e = t[n])))) ||
              isNaN((i = +this._y.call(null, e))) ||
              ((a[n] = r),
              (u[n] = i),
              r < s && (s = r),
              r > f && (f = r),
              i < c && (c = i),
              i > l && (l = i));
        if (s > f || c > l) return this;
        for (this.cover(s, c).cover(f, l), n = 0; n < o; ++n)
          Or(this, a[n], u[n], t[n]);
        return this;
      }),
      (qr.cover = function (t, e) {
        if (isNaN((t = +t)) || isNaN((e = +e))) return this;
        var n = this._x0,
          r = this._y0,
          i = this._x1,
          o = this._y1;
        if (isNaN(n))
          (i = (n = Math.floor(t)) + 1), (o = (r = Math.floor(e)) + 1);
        else {
          for (
            var a, u, s = i - n, c = this._root;
            n > t || t >= i || r > e || e >= o;

          )
            switch (
              ((u = ((e < r) << 1) | (t < n)),
              ((a = new Array(4))[u] = c),
              (c = a),
              (s *= 2),
              u)
            ) {
            case 0:
              (i = n + s), (o = r + s);
              break;
            case 1:
              (n = i - s), (o = r + s);
              break;
            case 2:
              (i = n + s), (r = o - s);
              break;
            case 3:
              (n = i - s), (r = o - s);
            }
          this._root && this._root.length && (this._root = c);
        }
        return (
          (this._x0 = n), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
        );
      }),
      (qr.data = function () {
        var t = [];
        return (
          this.visit(function (e) {
            if (!e.length)
              do {
                t.push(e.data);
              } while ((e = e.next));
          }),
          t
        );
      }),
      (qr.extent = function (t) {
        return arguments.length
          ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
          : isNaN(this._x0)
            ? void 0
            : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ];
      }),
      (qr.find = function (t, e, n) {
        var r,
          i,
          o,
          a,
          u,
          s,
          c,
          f = this._x0,
          l = this._y0,
          h = this._x1,
          p = this._y1,
          d = [],
          v = this._root;
        for (
          v && d.push(new Lr(v, f, l, h, p)),
          null == n
            ? (n = 1 / 0)
            : ((f = t - n),
            (l = e - n),
            (h = t + n),
            (p = e + n),
            (n *= n));
          (s = d.pop());

        )
          if (
            !(
              !(v = s.node) ||
                (i = s.x0) > h ||
                (o = s.y0) > p ||
                (a = s.x1) < f ||
                (u = s.y1) < l
            )
          )
            if (v.length) {
              var g = (i + a) / 2,
                y = (o + u) / 2;
              d.push(
                new Lr(v[3], g, y, a, u),
                new Lr(v[2], i, y, g, u),
                new Lr(v[1], g, o, a, y),
                new Lr(v[0], i, o, g, y),
              ),
              (c = ((e >= y) << 1) | (t >= g)) &&
                    ((s = d[d.length - 1]),
                    (d[d.length - 1] = d[d.length - 1 - c]),
                    (d[d.length - 1 - c] = s));
            } else {
              var m = t - +this._x.call(null, v.data),
                x = e - +this._y.call(null, v.data),
                b = m * m + x * x;
              if (b < n) {
                var w = Math.sqrt((n = b));
                (f = t - w),
                (l = e - w),
                (h = t + w),
                (p = e + w),
                (r = v.data);
              }
            }
        return r;
      }),
      (qr.remove = function (t) {
        if (
          isNaN((o = +this._x.call(null, t))) ||
            isNaN((a = +this._y.call(null, t)))
        )
          return this;
        var e,
          n,
          r,
          i,
          o,
          a,
          u,
          s,
          c,
          f,
          l,
          h,
          p = this._root,
          d = this._x0,
          v = this._y0,
          g = this._x1,
          y = this._y1;
        if (!p) return this;
        if (p.length)
          for (;;) {
            if (
              ((c = o >= (u = (d + g) / 2)) ? (d = u) : (g = u),
              (f = a >= (s = (v + y) / 2)) ? (v = s) : (y = s),
              (e = p),
              !(p = p[(l = (f << 1) | c)]))
            )
              return this;
            if (!p.length) break;
            (e[(l + 1) & 3] || e[(l + 2) & 3] || e[(l + 3) & 3]) &&
                ((n = e), (h = l));
          }
        for (; p.data !== t; ) if (((r = p), !(p = p.next))) return this;
        return (
          (i = p.next) && delete p.next,
          r
            ? (i ? (r.next = i) : delete r.next, this)
            : e
              ? (i ? (e[l] = i) : delete e[l],
              (p = e[0] || e[1] || e[2] || e[3]) &&
                  p === (e[3] || e[2] || e[1] || e[0]) &&
                  !p.length &&
                  (n ? (n[h] = p) : (this._root = p)),
              this)
              : ((this._root = i), this)
        );
      }),
      (qr.removeAll = function (t) {
        for (var e = 0, n = t.length; e < n; ++e) this.remove(t[e]);
        return this;
      }),
      (qr.root = function () {
        return this._root;
      }),
      (qr.size = function () {
        var t = 0;
        return (
          this.visit(function (e) {
            if (!e.length)
              do {
                ++t;
              } while ((e = e.next));
          }),
          t
        );
      }),
      (qr.visit = function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          u = [],
          s = this._root;
        for (
          s && u.push(new Lr(s, this._x0, this._y0, this._x1, this._y1));
          (e = u.pop());

        )
          if (
            !t(
              (s = e.node),
              (r = e.x0),
              (i = e.y0),
              (o = e.x1),
              (a = e.y1),
            ) &&
              s.length
          ) {
            var c = (r + o) / 2,
              f = (i + a) / 2;
            (n = s[3]) && u.push(new Lr(n, c, f, o, a)),
            (n = s[2]) && u.push(new Lr(n, r, f, c, a)),
            (n = s[1]) && u.push(new Lr(n, c, i, o, f)),
            (n = s[0]) && u.push(new Lr(n, r, i, c, f));
          }
        return this;
      }),
      (qr.visitAfter = function (t) {
        var e,
          n = [],
          r = [];
        for (
          this._root &&
            n.push(new Lr(this._root, this._x0, this._y0, this._x1, this._y1));
          (e = n.pop());

        ) {
          var i = e.node;
          if (i.length) {
            var o,
              a = e.x0,
              u = e.y0,
              s = e.x1,
              c = e.y1,
              f = (a + s) / 2,
              l = (u + c) / 2;
            (o = i[0]) && n.push(new Lr(o, a, u, f, l)),
            (o = i[1]) && n.push(new Lr(o, f, u, s, l)),
            (o = i[2]) && n.push(new Lr(o, a, l, f, c)),
            (o = i[3]) && n.push(new Lr(o, f, l, s, c));
          }
          r.push(e);
        }
        for (; (e = r.pop()); ) t(e.node, e.x0, e.y0, e.x1, e.y1);
        return this;
      }),
      (qr.x = function (t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      }),
      (qr.y = function (t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      });
      Math.PI, Math.sqrt(5);
      function Br(t, e) {
        if (
          (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var n,
          r = t.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
      }
      var Hr = function (t) {
          return (t = Br(Math.abs(t))) ? t[1] : NaN;
        },
        zr =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function Wr(t) {
        if (!(e = zr.exec(t))) throw new Error("invalid format: " + t);
        var e;
        return new $r({
          fill: e[1],
          align: e[2],
          sign: e[3],
          symbol: e[4],
          zero: e[5],
          width: e[6],
          comma: e[7],
          precision: e[8] && e[8].slice(1),
          trim: e[9],
          type: e[10],
        });
      }
      function $r(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
        (this.align = void 0 === t.align ? ">" : t.align + ""),
        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
        (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (Wr.prototype = $r.prototype),
      ($r.prototype.toString = function () {
        return (
          this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
        );
      });
      var Yr,
        Vr,
        Xr,
        Gr,
        Jr = function (t, e) {
          var n = Br(t, e);
          if (!n) return t + "";
          var r = n[0],
            i = n[1];
          return i < 0
            ? "0." + new Array(-i).join("0") + r
            : r.length > i + 1
              ? r.slice(0, i + 1) + "." + r.slice(i + 1)
              : r + new Array(i - r.length + 2).join("0");
        },
        Zr = {
          "%": function (t, e) {
            return (100 * t).toFixed(e);
          },
          b: function (t) {
            return Math.round(t).toString(2);
          },
          c: function (t) {
            return t + "";
          },
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: function (t, e) {
            return t.toExponential(e);
          },
          f: function (t, e) {
            return t.toFixed(e);
          },
          g: function (t, e) {
            return t.toPrecision(e);
          },
          o: function (t) {
            return Math.round(t).toString(8);
          },
          p: function (t, e) {
            return Jr(100 * t, e);
          },
          r: Jr,
          s: function (t, e) {
            var n = Br(t, e);
            if (!n) return t + "";
            var r = n[0],
              i = n[1],
              o =
                i - (Yr = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
              a = r.length;
            return o === a
              ? r
              : o > a
                ? r + new Array(o - a + 1).join("0")
                : o > 0
                  ? r.slice(0, o) + "." + r.slice(o)
                  : "0." +
                new Array(1 - o).join("0") +
                Br(t, Math.max(0, e + o - 1))[0];
          },
          X: function (t) {
            return Math.round(t).toString(16).toUpperCase();
          },
          x: function (t) {
            return Math.round(t).toString(16);
          },
        },
        Qr = function (t) {
          return t;
        },
        Kr = Array.prototype.map,
        ti = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "µ",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      (Vr = (function (t) {
        var e,
          n,
          r =
            void 0 === t.grouping || void 0 === t.thousands
              ? Qr
              : ((e = Kr.call(t.grouping, Number)),
              (n = t.thousands + ""),
              function (t, r) {
                for (
                  var i = t.length, o = [], a = 0, u = e[0], s = 0;
                  i > 0 &&
                    u > 0 &&
                    (s + u + 1 > r && (u = Math.max(1, r - s)),
                    o.push(t.substring((i -= u), i + u)),
                    !((s += u + 1) > r));

                )
                  u = e[(a = (a + 1) % e.length)];
                return o.reverse().join(n);
              }),
          i = void 0 === t.currency ? "" : t.currency[0] + "",
          o = void 0 === t.currency ? "" : t.currency[1] + "",
          a = void 0 === t.decimal ? "." : t.decimal + "",
          u =
            void 0 === t.numerals
              ? Qr
              : (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(Kr.call(t.numerals, String)),
          s = void 0 === t.percent ? "%" : t.percent + "",
          c = void 0 === t.minus ? "-" : t.minus + "",
          f = void 0 === t.nan ? "NaN" : t.nan + "";
        function l(t) {
          var e = (t = Wr(t)).fill,
            n = t.align,
            l = t.sign,
            h = t.symbol,
            p = t.zero,
            d = t.width,
            v = t.comma,
            g = t.precision,
            y = t.trim,
            m = t.type;
          "n" === m
            ? ((v = !0), (m = "g"))
            : Zr[m] || (void 0 === g && (g = 12), (y = !0), (m = "g")),
          (p || ("0" === e && "=" === n)) && ((p = !0), (e = "0"), (n = "="));
          var x =
              "$" === h
                ? i
                : "#" === h && /[boxX]/.test(m)
                  ? "0" + m.toLowerCase()
                  : "",
            b = "$" === h ? o : /[%p]/.test(m) ? s : "",
            w = Zr[m],
            _ = /[defgprs%]/.test(m);
          function S(t) {
            var i,
              o,
              s,
              h = x,
              S = b;
            if ("c" === m) (S = w(t) + S), (t = "");
            else {
              var T = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? f : w(Math.abs(t), g)),
                y &&
                  (t = (function (t) {
                    t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                      switch (t[r]) {
                      case ".":
                        i = e = r;
                        break;
                      case "0":
                        0 === i && (i = r), (e = r);
                        break;
                      default:
                        if (!+t[r]) break t;
                        i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                  })(t)),
                T && 0 == +t && "+" !== l && (T = !1),
                (h =
                  (T ? ("(" === l ? l : c) : "-" === l || "(" === l ? "" : l) +
                  h),
                (S =
                  ("s" === m ? ti[8 + Yr / 3] : "") +
                  S +
                  (T && "(" === l ? ")" : "")),
                _)
              )
                for (i = -1, o = t.length; ++i < o; )
                  if (48 > (s = t.charCodeAt(i)) || s > 57) {
                    (S = (46 === s ? a + t.slice(i + 1) : t.slice(i)) + S),
                    (t = t.slice(0, i));
                    break;
                  }
            }
            v && !p && (t = r(t, 1 / 0));
            var E = h.length + t.length + S.length,
              A = E < d ? new Array(d - E + 1).join(e) : "";
            switch (
              (v &&
                p &&
                ((t = r(A + t, A.length ? d - S.length : 1 / 0)), (A = "")),
              n)
            ) {
            case "<":
              t = h + t + S + A;
              break;
            case "=":
              t = h + A + t + S;
              break;
            case "^":
              t = A.slice(0, (E = A.length >> 1)) + h + t + S + A.slice(E);
              break;
            default:
              t = A + h + t + S;
            }
            return u(t);
          }
          return (
            (g =
              void 0 === g
                ? 6
                : /[gprs]/.test(m)
                  ? Math.max(1, Math.min(21, g))
                  : Math.max(0, Math.min(20, g))),
            (S.toString = function () {
              return t + "";
            }),
            S
          );
        }
        return {
          format: l,
          formatPrefix: function (t, e) {
            var n = l((((t = Wr(t)).type = "f"), t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(Hr(e) / 3))),
              i = Math.pow(10, -r),
              o = ti[8 + r / 3];
            return function (t) {
              return n(i * t) + o;
            };
          },
        };
      })({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-",
      })),
      (Xr = Vr.format),
      (Gr = Vr.formatPrefix);
      var ei = function (t) {
        return t;
      };
      function ni(t, e) {
        t && ii.hasOwnProperty(t.type) && ii[t.type](t, e);
      }
      var ri = {
          Feature: function (t, e) {
            ni(t.geometry, e);
          },
          FeatureCollection: function (t, e) {
            for (var n = t.features, r = -1, i = n.length; ++r < i; )
              ni(n[r].geometry, e);
          },
        },
        ii = {
          Sphere: function (t, e) {
            e.sphere();
          },
          Point: function (t, e) {
            (t = t.coordinates), e.point(t[0], t[1], t[2]);
          },
          MultiPoint: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              (t = n[r]), e.point(t[0], t[1], t[2]);
          },
          LineString: function (t, e) {
            oi(t.coordinates, e, 0);
          },
          MultiLineString: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              oi(n[r], e, 0);
          },
          Polygon: function (t, e) {
            ai(t.coordinates, e);
          },
          MultiPolygon: function (t, e) {
            for (var n = t.coordinates, r = -1, i = n.length; ++r < i; )
              ai(n[r], e);
          },
          GeometryCollection: function (t, e) {
            for (var n = t.geometries, r = -1, i = n.length; ++r < i; )
              ni(n[r], e);
          },
        };
      function oi(t, e, n) {
        var r,
          i = -1,
          o = t.length - n;
        for (e.lineStart(); ++i < o; ) (r = t[i]), e.point(r[0], r[1], r[2]);
        e.lineEnd();
      }
      function ai(t, e) {
        var n = -1,
          r = t.length;
        for (e.polygonStart(); ++n < r; ) oi(t[n], e, 1);
        e.polygonEnd();
      }
      var ui = function (t, e) {
          t && ri.hasOwnProperty(t.type) ? ri[t.type](t, e) : ni(t, e);
        },
        si = function () {
          return new ci();
        };
      function ci() {
        this.reset();
      }
      ci.prototype = {
        constructor: ci,
        reset: function () {
          this.s = this.t = 0;
        },
        add: function (t) {
          li(fi, t, this.t),
          li(this, fi.s, this.s),
          this.s ? (this.t += fi.t) : (this.s = fi.t);
        },
        valueOf: function () {
          return this.s;
        },
      };
      var fi = new ci();
      function li(t, e, n) {
        var r = (t.s = e + n),
          i = r - e,
          o = r - i;
        t.t = e - o + (n - i);
      }
      var hi = Math.PI,
        pi = hi / 2,
        di = hi / 4,
        vi = 2 * hi,
        gi = 180 / hi,
        yi = hi / 180,
        mi = Math.abs,
        xi = Math.atan,
        bi = Math.atan2,
        wi = Math.cos,
        _i = (Math.ceil, Math.exp),
        Si = (Math.floor, Math.log),
        Ti = (Math.pow, Math.sin),
        Ei =
          Math.sign ||
          function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          },
        Ai = Math.sqrt,
        Mi = Math.tan;
      function Ci(t) {
        return t > 1 ? pi : t < -1 ? -pi : Math.asin(t);
      }
      function Ni() {}
      var ki,
        ji,
        Ri,
        Oi,
        Li = si(),
        Di = si(),
        Ii = {
          point: Ni,
          lineStart: Ni,
          lineEnd: Ni,
          polygonStart: function () {
            (Ii.lineStart = Pi), (Ii.lineEnd = qi);
          },
          polygonEnd: function () {
            (Ii.lineStart = Ii.lineEnd = Ii.point = Ni),
            Li.add(mi(Di)),
            Di.reset();
          },
          result: function () {
            var t = Li / 2;
            return Li.reset(), t;
          },
        };
      function Pi() {
        Ii.point = Ui;
      }
      function Ui(t, e) {
        (Ii.point = Fi), (ki = Ri = t), (ji = Oi = e);
      }
      function Fi(t, e) {
        Di.add(Oi * t - Ri * e), (Ri = t), (Oi = e);
      }
      function qi() {
        Fi(ki, ji);
      }
      var Bi = Ii,
        Hi = 1 / 0,
        zi = Hi,
        Wi = -Hi,
        $i = Wi;
      var Yi,
        Vi,
        Xi,
        Gi,
        Ji = {
          point: function (t, e) {
            t < Hi && (Hi = t);
            t > Wi && (Wi = t);
            e < zi && (zi = e);
            e > $i && ($i = e);
          },
          lineStart: Ni,
          lineEnd: Ni,
          polygonStart: Ni,
          polygonEnd: Ni,
          result: function () {
            var t = [
              [Hi, zi],
              [Wi, $i],
            ];
            return (Wi = $i = -(zi = Hi = 1 / 0)), t;
          },
        },
        Zi = 0,
        Qi = 0,
        Ki = 0,
        to = 0,
        eo = 0,
        no = 0,
        ro = 0,
        io = 0,
        oo = 0,
        ao = {
          point: uo,
          lineStart: so,
          lineEnd: lo,
          polygonStart: function () {
            (ao.lineStart = ho), (ao.lineEnd = po);
          },
          polygonEnd: function () {
            (ao.point = uo), (ao.lineStart = so), (ao.lineEnd = lo);
          },
          result: function () {
            var t = oo
              ? [ro / oo, io / oo]
              : no
                ? [to / no, eo / no]
                : Ki
                  ? [Zi / Ki, Qi / Ki]
                  : [NaN, NaN];
            return (Zi = Qi = Ki = to = eo = no = ro = io = oo = 0), t;
          },
        };
      function uo(t, e) {
        (Zi += t), (Qi += e), ++Ki;
      }
      function so() {
        ao.point = co;
      }
      function co(t, e) {
        (ao.point = fo), uo((Xi = t), (Gi = e));
      }
      function fo(t, e) {
        var n = t - Xi,
          r = e - Gi,
          i = Ai(n * n + r * r);
        (to += (i * (Xi + t)) / 2),
        (eo += (i * (Gi + e)) / 2),
        (no += i),
        uo((Xi = t), (Gi = e));
      }
      function lo() {
        ao.point = uo;
      }
      function ho() {
        ao.point = vo;
      }
      function po() {
        go(Yi, Vi);
      }
      function vo(t, e) {
        (ao.point = go), uo((Yi = Xi = t), (Vi = Gi = e));
      }
      function go(t, e) {
        var n = t - Xi,
          r = e - Gi,
          i = Ai(n * n + r * r);
        (to += (i * (Xi + t)) / 2),
        (eo += (i * (Gi + e)) / 2),
        (no += i),
        (ro += (i = Gi * t - Xi * e) * (Xi + t)),
        (io += i * (Gi + e)),
        (oo += 3 * i),
        uo((Xi = t), (Gi = e));
      }
      var yo = ao;
      function mo(t) {
        this._context = t;
      }
      mo.prototype = {
        _radius: 4.5,
        pointRadius: function (t) {
          return (this._radius = t), this;
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._context.closePath(), (this._point = NaN);
        },
        point: function (t, e) {
          switch (this._point) {
          case 0:
            this._context.moveTo(t, e), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(t, e);
            break;
          default:
            this._context.moveTo(t + this._radius, e),
            this._context.arc(t, e, this._radius, 0, vi);
          }
        },
        result: Ni,
      };
      var xo,
        bo,
        wo,
        _o,
        So,
        To = si(),
        Eo = {
          point: Ni,
          lineStart: function () {
            Eo.point = Ao;
          },
          lineEnd: function () {
            xo && Mo(bo, wo), (Eo.point = Ni);
          },
          polygonStart: function () {
            xo = !0;
          },
          polygonEnd: function () {
            xo = null;
          },
          result: function () {
            var t = +To;
            return To.reset(), t;
          },
        };
      function Ao(t, e) {
        (Eo.point = Mo), (bo = _o = t), (wo = So = e);
      }
      function Mo(t, e) {
        (_o -= t), (So -= e), To.add(Ai(_o * _o + So * So)), (_o = t), (So = e);
      }
      var Co = Eo;
      function No() {
        this._string = [];
      }
      function ko(t) {
        return (
          "m0," +
          t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          -2 * t +
          "a" +
          t +
          "," +
          t +
          " 0 1,1 0," +
          2 * t +
          "z"
        );
      }
      No.prototype = {
        _radius: 4.5,
        _circle: ko(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, e) {
          switch (this._point) {
          case 0:
            this._string.push("M", t, ",", e), (this._point = 1);
            break;
          case 1:
            this._string.push("L", t, ",", e);
            break;
          default:
            null == this._circle && (this._circle = ko(this._radius)),
            this._string.push("M", t, ",", e, this._circle);
          }
        },
        result: function () {
          if (this._string.length) {
            var t = this._string.join("");
            return (this._string = []), t;
          }
          return null;
        },
      };
      var jo = function (t, e) {
          var n,
            r,
            i = 4.5;
          function o(t) {
            return (
              t &&
                ("function" == typeof i &&
                  r.pointRadius(+i.apply(this, arguments)),
                ui(t, n(r))),
              r.result()
            );
          }
          return (
            (o.area = function (t) {
              return ui(t, n(Bi)), Bi.result();
            }),
            (o.measure = function (t) {
              return ui(t, n(Co)), Co.result();
            }),
            (o.bounds = function (t) {
              return ui(t, n(Ji)), Ji.result();
            }),
            (o.centroid = function (t) {
              return ui(t, n(yo)), yo.result();
            }),
            (o.projection = function (e) {
              return arguments.length
                ? ((n = null == e ? ((t = null), ei) : (t = e).stream), o)
                : t;
            }),
            (o.context = function (t) {
              return arguments.length
                ? ((r = null == t ? ((e = null), new No()) : new mo((e = t))),
                "function" != typeof i && r.pointRadius(i),
                o)
                : e;
            }),
            (o.pointRadius = function (t) {
              return arguments.length
                ? ((i = "function" == typeof t ? t : (r.pointRadius(+t), +t)),
                o)
                : i;
            }),
            o.projection(t).context(e)
          );
        },
        Ro = function (t, e) {
          function n(n, r) {
            return (n = t(n, r)), e(n[0], n[1]);
          }
          return (
            t.invert &&
              e.invert &&
              (n.invert = function (n, r) {
                return (n = e.invert(n, r)) && t.invert(n[0], n[1]);
              }),
            n
          );
        };
      function Oo(t, e) {
        return [mi(t) > hi ? t + Math.round(-t / vi) * vi : t, e];
      }
      function Lo(t, e, n) {
        return (t %= vi)
          ? e || n
            ? Ro(Io(t), Po(e, n))
            : Io(t)
          : e || n
            ? Po(e, n)
            : Oo;
      }
      function Do(t) {
        return function (e, n) {
          return [(e += t) > hi ? e - vi : e < -hi ? e + vi : e, n];
        };
      }
      function Io(t) {
        var e = Do(t);
        return (e.invert = Do(-t)), e;
      }
      function Po(t, e) {
        var n = wi(t),
          r = Ti(t),
          i = wi(e),
          o = Ti(e);
        function a(t, e) {
          var a = wi(e),
            u = wi(t) * a,
            s = Ti(t) * a,
            c = Ti(e),
            f = c * n + u * r;
          return [bi(s * i - f * o, u * n - c * r), Ci(f * i + s * o)];
        }
        return (
          (a.invert = function (t, e) {
            var a = wi(e),
              u = wi(t) * a,
              s = Ti(t) * a,
              c = Ti(e),
              f = c * i - s * o;
            return [bi(s * i + c * o, u * n + f * r), Ci(f * n - u * r)];
          }),
          a
        );
      }
      Oo.invert = Oo;
      var Uo = function () {
          var t,
            e = [];
          return {
            point: function (e, n, r) {
              t.push([e, n, r]);
            },
            lineStart: function () {
              e.push((t = []));
            },
            lineEnd: Ni,
            rejoin: function () {
              e.length > 1 && e.push(e.pop().concat(e.shift()));
            },
            result: function () {
              var n = e;
              return (e = []), (t = null), n;
            },
          };
        },
        Fo = function (t, e) {
          return mi(t[0] - e[0]) < 1e-6 && mi(t[1] - e[1]) < 1e-6;
        };
      function qo(t, e, n, r) {
        (this.x = t),
        (this.z = e),
        (this.o = n),
        (this.e = r),
        (this.v = !1),
        (this.n = this.p = null);
      }
      var Bo = function (t, e, n, r, i) {
        var o,
          a,
          u = [],
          s = [];
        if (
          (t.forEach(function (t) {
            if (!((e = t.length - 1) <= 0)) {
              var e,
                n,
                r = t[0],
                a = t[e];
              if (Fo(r, a)) {
                if (!r[2] && !a[2]) {
                  for (i.lineStart(), o = 0; o < e; ++o)
                    i.point((r = t[o])[0], r[1]);
                  return void i.lineEnd();
                }
                a[0] += 2e-6;
              }
              u.push((n = new qo(r, t, null, !0))),
              s.push((n.o = new qo(r, null, n, !1))),
              u.push((n = new qo(a, t, null, !1))),
              s.push((n.o = new qo(a, null, n, !0)));
            }
          }),
          u.length)
        ) {
          for (s.sort(e), Ho(u), Ho(s), o = 0, a = s.length; o < a; ++o)
            s[o].e = n = !n;
          for (var c, f, l = u[0]; ; ) {
            for (var h = l, p = !0; h.v; ) if ((h = h.n) === l) return;
            (c = h.z), i.lineStart();
            do {
              if (((h.v = h.o.v = !0), h.e)) {
                if (p)
                  for (o = 0, a = c.length; o < a; ++o)
                    i.point((f = c[o])[0], f[1]);
                else r(h.x, h.n.x, 1, i);
                h = h.n;
              } else {
                if (p)
                  for (c = h.p.z, o = c.length - 1; o >= 0; --o)
                    i.point((f = c[o])[0], f[1]);
                else r(h.x, h.p.x, -1, i);
                h = h.p;
              }
              (c = (h = h.o).z), (p = !p);
            } while (!h.v);
            i.lineEnd();
          }
        }
      };
      function Ho(t) {
        if ((e = t.length)) {
          for (var e, n, r = 0, i = t[0]; ++r < e; )
            (i.n = n = t[r]), (n.p = i), (i = n);
          (i.n = n = t[0]), (n.p = i);
        }
      }
      function zo(t) {
        return [bi(t[1], t[0]), Ci(t[2])];
      }
      function Wo(t) {
        var e = t[0],
          n = t[1],
          r = wi(n);
        return [r * wi(e), r * Ti(e), Ti(n)];
      }
      function $o(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function Yo(t, e) {
        return [
          t[1] * e[2] - t[2] * e[1],
          t[2] * e[0] - t[0] * e[2],
          t[0] * e[1] - t[1] * e[0],
        ];
      }
      function Vo(t, e) {
        (t[0] += e[0]), (t[1] += e[1]), (t[2] += e[2]);
      }
      function Xo(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e];
      }
      function Go(t) {
        var e = Ai(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        (t[0] /= e), (t[1] /= e), (t[2] /= e);
      }
      var Jo = si();
      function Zo(t) {
        return mi(t[0]) <= hi ? t[0] : Ei(t[0]) * (((mi(t[0]) + hi) % vi) - hi);
      }
      var Qo = function (t, e, n, r) {
        return function (i) {
          var o,
            a,
            u,
            s = e(i),
            c = Uo(),
            f = e(c),
            l = !1,
            h = {
              point: p,
              lineStart: v,
              lineEnd: g,
              polygonStart: function () {
                (h.point = m),
                (h.lineStart = x),
                (h.lineEnd = b),
                (a = []),
                (o = []);
              },
              polygonEnd: function () {
                (h.point = p), (h.lineStart = v), (h.lineEnd = g), (a = y(a));
                var t = (function (t, e) {
                  var n = Zo(e),
                    r = e[1],
                    i = Ti(r),
                    o = [Ti(n), -wi(n), 0],
                    a = 0,
                    u = 0;
                  Jo.reset(),
                  1 === i ? (r = pi + 1e-6) : -1 === i && (r = -pi - 1e-6);
                  for (var s = 0, c = t.length; s < c; ++s)
                    if ((l = (f = t[s]).length))
                      for (
                        var f,
                          l,
                          h = f[l - 1],
                          p = Zo(h),
                          d = h[1] / 2 + di,
                          v = Ti(d),
                          g = wi(d),
                          y = 0;
                        y < l;
                        ++y, p = x, v = w, g = _, h = m
                      ) {
                        var m = f[y],
                          x = Zo(m),
                          b = m[1] / 2 + di,
                          w = Ti(b),
                          _ = wi(b),
                          S = x - p,
                          T = S >= 0 ? 1 : -1,
                          E = T * S,
                          A = E > hi,
                          M = v * w;
                        if (
                          (Jo.add(bi(M * T * Ti(E), g * _ + M * wi(E))),
                          (a += A ? S + T * vi : S),
                          A ^ (p >= n) ^ (x >= n))
                        ) {
                          var C = Yo(Wo(h), Wo(m));
                          Go(C);
                          var N = Yo(o, C);
                          Go(N);
                          var k = (A ^ (S >= 0) ? -1 : 1) * Ci(N[2]);
                          (r > k || (r === k && (C[0] || C[1]))) &&
                            (u += A ^ (S >= 0) ? 1 : -1);
                        }
                      }
                  return (a < -1e-6 || (a < 1e-6 && Jo < -1e-6)) ^ (1 & u);
                })(o, r);
                a.length
                  ? (l || (i.polygonStart(), (l = !0)), Bo(a, ta, t, n, i))
                  : t &&
                    (l || (i.polygonStart(), (l = !0)),
                    i.lineStart(),
                    n(null, null, 1, i),
                    i.lineEnd()),
                l && (i.polygonEnd(), (l = !1)),
                (a = o = null);
              },
              sphere: function () {
                i.polygonStart(),
                i.lineStart(),
                n(null, null, 1, i),
                i.lineEnd(),
                i.polygonEnd();
              },
            };
          function p(e, n) {
            t(e, n) && i.point(e, n);
          }
          function d(t, e) {
            s.point(t, e);
          }
          function v() {
            (h.point = d), s.lineStart();
          }
          function g() {
            (h.point = p), s.lineEnd();
          }
          function m(t, e) {
            u.push([t, e]), f.point(t, e);
          }
          function x() {
            f.lineStart(), (u = []);
          }
          function b() {
            m(u[0][0], u[0][1]), f.lineEnd();
            var t,
              e,
              n,
              r,
              s = f.clean(),
              h = c.result(),
              p = h.length;
            if ((u.pop(), o.push(u), (u = null), p))
              if (1 & s) {
                if ((e = (n = h[0]).length - 1) > 0) {
                  for (
                    l || (i.polygonStart(), (l = !0)), i.lineStart(), t = 0;
                    t < e;
                    ++t
                  )
                    i.point((r = n[t])[0], r[1]);
                  i.lineEnd();
                }
              } else
                p > 1 && 2 & s && h.push(h.pop().concat(h.shift())),
                a.push(h.filter(Ko));
          }
          return h;
        };
      };
      function Ko(t) {
        return t.length > 1;
      }
      function ta(t, e) {
        return (
          ((t = t.x)[0] < 0 ? t[1] - pi - 1e-6 : pi - t[1]) -
          ((e = e.x)[0] < 0 ? e[1] - pi - 1e-6 : pi - e[1])
        );
      }
      var ea = Qo(
        function () {
          return !0;
        },
        function (t) {
          var e,
            n = NaN,
            r = NaN,
            i = NaN;
          return {
            lineStart: function () {
              t.lineStart(), (e = 1);
            },
            point: function (o, a) {
              var u = o > 0 ? hi : -hi,
                s = mi(o - n);
              mi(s - hi) < 1e-6
                ? (t.point(n, (r = (r + a) / 2 > 0 ? pi : -pi)),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(u, r),
                t.point(o, r),
                (e = 0))
                : i !== u &&
                  s >= hi &&
                  (mi(n - i) < 1e-6 && (n -= 1e-6 * i),
                  mi(o - u) < 1e-6 && (o -= 1e-6 * u),
                  (r = (function (t, e, n, r) {
                    var i,
                      o,
                      a = Ti(t - n);
                    return mi(a) > 1e-6
                      ? xi(
                        (Ti(e) * (o = wi(r)) * Ti(n) -
                            Ti(r) * (i = wi(e)) * Ti(t)) /
                            (i * o * a),
                      )
                      : (e + r) / 2;
                  })(n, r, o, a)),
                  t.point(i, r),
                  t.lineEnd(),
                  t.lineStart(),
                  t.point(u, r),
                  (e = 0)),
              t.point((n = o), (r = a)),
              (i = u);
            },
            lineEnd: function () {
              t.lineEnd(), (n = r = NaN);
            },
            clean: function () {
              return 2 - e;
            },
          };
        },
        function (t, e, n, r) {
          var i;
          if (null == t)
            (i = n * pi),
            r.point(-hi, i),
            r.point(0, i),
            r.point(hi, i),
            r.point(hi, 0),
            r.point(hi, -i),
            r.point(0, -i),
            r.point(-hi, -i),
            r.point(-hi, 0),
            r.point(-hi, i);
          else if (mi(t[0] - e[0]) > 1e-6) {
            var o = t[0] < e[0] ? hi : -hi;
            (i = (n * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
          } else r.point(e[0], e[1]);
        },
        [-hi, -pi],
      );
      function na(t, e, n, r, i, o) {
        if (n) {
          var a = wi(e),
            u = Ti(e),
            s = r * n;
          null == i
            ? ((i = e + r * vi), (o = e - s / 2))
            : ((i = ra(a, i)),
            (o = ra(a, o)),
            (r > 0 ? i < o : i > o) && (i += r * vi));
          for (var c, f = i; r > 0 ? f > o : f < o; f -= s)
            (c = zo([a, -u * wi(f), -u * Ti(f)])), t.point(c[0], c[1]);
        }
      }
      function ra(t, e) {
        ((e = Wo(e))[0] -= t), Go(e);
        var n,
          r = (n = -e[1]) > 1 ? 0 : n < -1 ? hi : Math.acos(n);
        return ((-e[2] < 0 ? -r : r) + vi - 1e-6) % vi;
      }
      var ia = function (t) {
        var e = wi(t),
          n = 6 * yi,
          r = e > 0,
          i = mi(e) > 1e-6;
        function o(t, n) {
          return wi(t) * wi(n) > e;
        }
        function a(t, n, r) {
          var i = [1, 0, 0],
            o = Yo(Wo(t), Wo(n)),
            a = $o(o, o),
            u = o[0],
            s = a - u * u;
          if (!s) return !r && t;
          var c = (e * a) / s,
            f = (-e * u) / s,
            l = Yo(i, o),
            h = Xo(i, c);
          Vo(h, Xo(o, f));
          var p = l,
            d = $o(h, p),
            v = $o(p, p),
            g = d * d - v * ($o(h, h) - 1);
          if (!(g < 0)) {
            var y = Ai(g),
              m = Xo(p, (-d - y) / v);
            if ((Vo(m, h), (m = zo(m)), !r)) return m;
            var x,
              b = t[0],
              w = n[0],
              _ = t[1],
              S = n[1];
            w < b && ((x = b), (b = w), (w = x));
            var T = w - b,
              E = mi(T - hi) < 1e-6;
            if (
              (!E && S < _ && ((x = _), (_ = S), (S = x)),
              E || T < 1e-6
                ? E
                  ? (_ + S > 0) ^ (m[1] < (mi(m[0] - b) < 1e-6 ? _ : S))
                  : _ <= m[1] && m[1] <= S
                : (T > hi) ^ (b <= m[0] && m[0] <= w))
            ) {
              var A = Xo(p, (-d + y) / v);
              return Vo(A, h), [m, zo(A)];
            }
          }
        }
        function u(e, n) {
          var i = r ? t : hi - t,
            o = 0;
          return (
            e < -i ? (o |= 1) : e > i && (o |= 2),
            n < -i ? (o |= 4) : n > i && (o |= 8),
            o
          );
        }
        return Qo(
          o,
          function (t) {
            var e, n, s, c, f;
            return {
              lineStart: function () {
                (c = s = !1), (f = 1);
              },
              point: function (l, h) {
                var p,
                  d = [l, h],
                  v = o(l, h),
                  g = r
                    ? v
                      ? 0
                      : u(l, h)
                    : v
                      ? u(l + (l < 0 ? hi : -hi), h)
                      : 0;
                if (
                  (!e && (c = s = v) && t.lineStart(),
                  v !== s &&
                    (!(p = a(e, d)) || Fo(e, p) || Fo(d, p)) &&
                    (d[2] = 1),
                  v !== s)
                )
                  (f = 0),
                  v
                    ? (t.lineStart(), (p = a(d, e)), t.point(p[0], p[1]))
                    : ((p = a(e, d)), t.point(p[0], p[1], 2), t.lineEnd()),
                  (e = p);
                else if (i && e && r ^ v) {
                  var y;
                  g & n ||
                    !(y = a(d, e, !0)) ||
                    ((f = 0),
                    r
                      ? (t.lineStart(),
                      t.point(y[0][0], y[0][1]),
                      t.point(y[1][0], y[1][1]),
                      t.lineEnd())
                      : (t.point(y[1][0], y[1][1]),
                      t.lineEnd(),
                      t.lineStart(),
                      t.point(y[0][0], y[0][1], 3)));
                }
                !v || (e && Fo(e, d)) || t.point(d[0], d[1]),
                (e = d),
                (s = v),
                (n = g);
              },
              lineEnd: function () {
                s && t.lineEnd(), (e = null);
              },
              clean: function () {
                return f | ((c && s) << 1);
              },
            };
          },
          function (e, r, i, o) {
            na(o, t, n, i, e, r);
          },
          r ? [0, -t] : [-hi, t - hi],
        );
      };
      function oa(t, e, n, r) {
        function i(i, o) {
          return t <= i && i <= n && e <= o && o <= r;
        }
        function o(i, o, u, c) {
          var f = 0,
            l = 0;
          if (
            null == i ||
            (f = a(i, u)) !== (l = a(o, u)) ||
            (s(i, o) < 0) ^ (u > 0)
          )
            do {
              c.point(0 === f || 3 === f ? t : n, f > 1 ? r : e);
            } while ((f = (f + u + 4) % 4) !== l);
          else c.point(o[0], o[1]);
        }
        function a(r, i) {
          return mi(r[0] - t) < 1e-6
            ? i > 0
              ? 0
              : 3
            : mi(r[0] - n) < 1e-6
              ? i > 0
                ? 2
                : 1
              : mi(r[1] - e) < 1e-6
                ? i > 0
                  ? 1
                  : 0
                : i > 0
                  ? 3
                  : 2;
        }
        function u(t, e) {
          return s(t.x, e.x);
        }
        function s(t, e) {
          var n = a(t, 1),
            r = a(e, 1);
          return n !== r
            ? n - r
            : 0 === n
              ? e[1] - t[1]
              : 1 === n
                ? t[0] - e[0]
                : 2 === n
                  ? t[1] - e[1]
                  : e[0] - t[0];
        }
        return function (a) {
          var s,
            c,
            f,
            l,
            h,
            p,
            d,
            v,
            g,
            m,
            x,
            b = a,
            w = Uo(),
            _ = {
              point: S,
              lineStart: function () {
                (_.point = T), c && c.push((f = []));
                (m = !0), (g = !1), (d = v = NaN);
              },
              lineEnd: function () {
                s && (T(l, h), p && g && w.rejoin(), s.push(w.result()));
                (_.point = S), g && b.lineEnd();
              },
              polygonStart: function () {
                (b = w), (s = []), (c = []), (x = !0);
              },
              polygonEnd: function () {
                var e = (function () {
                    for (var e = 0, n = 0, i = c.length; n < i; ++n)
                      for (
                        var o,
                          a,
                          u = c[n],
                          s = 1,
                          f = u.length,
                          l = u[0],
                          h = l[0],
                          p = l[1];
                        s < f;
                        ++s
                      )
                        (o = h),
                        (a = p),
                        (l = u[s]),
                        (h = l[0]),
                        (p = l[1]),
                        a <= r
                          ? p > r &&
                              (h - o) * (r - a) > (p - a) * (t - o) &&
                              ++e
                          : p <= r &&
                              (h - o) * (r - a) < (p - a) * (t - o) &&
                              --e;
                    return e;
                  })(),
                  n = x && e,
                  i = (s = y(s)).length;
                (n || i) &&
                  (a.polygonStart(),
                  n && (a.lineStart(), o(null, null, 1, a), a.lineEnd()),
                  i && Bo(s, u, e, o, a),
                  a.polygonEnd());
                (b = a), (s = c = f = null);
              },
            };
          function S(t, e) {
            i(t, e) && b.point(t, e);
          }
          function T(o, a) {
            var u = i(o, a);
            if ((c && f.push([o, a]), m))
              (l = o),
              (h = a),
              (p = u),
              (m = !1),
              u && (b.lineStart(), b.point(o, a));
            else if (u && g) b.point(o, a);
            else {
              var s = [
                  (d = Math.max(-1e9, Math.min(1e9, d))),
                  (v = Math.max(-1e9, Math.min(1e9, v))),
                ],
                y = [
                  (o = Math.max(-1e9, Math.min(1e9, o))),
                  (a = Math.max(-1e9, Math.min(1e9, a))),
                ];
              !(function (t, e, n, r, i, o) {
                var a,
                  u = t[0],
                  s = t[1],
                  c = 0,
                  f = 1,
                  l = e[0] - u,
                  h = e[1] - s;
                if (((a = n - u), l || !(a > 0))) {
                  if (((a /= l), l < 0)) {
                    if (a < c) return;
                    a < f && (f = a);
                  } else if (l > 0) {
                    if (a > f) return;
                    a > c && (c = a);
                  }
                  if (((a = i - u), l || !(a < 0))) {
                    if (((a /= l), l < 0)) {
                      if (a > f) return;
                      a > c && (c = a);
                    } else if (l > 0) {
                      if (a < c) return;
                      a < f && (f = a);
                    }
                    if (((a = r - s), h || !(a > 0))) {
                      if (((a /= h), h < 0)) {
                        if (a < c) return;
                        a < f && (f = a);
                      } else if (h > 0) {
                        if (a > f) return;
                        a > c && (c = a);
                      }
                      if (((a = o - s), h || !(a < 0))) {
                        if (((a /= h), h < 0)) {
                          if (a > f) return;
                          a > c && (c = a);
                        } else if (h > 0) {
                          if (a < c) return;
                          a < f && (f = a);
                        }
                        return (
                          c > 0 && ((t[0] = u + c * l), (t[1] = s + c * h)),
                          f < 1 && ((e[0] = u + f * l), (e[1] = s + f * h)),
                          !0
                        );
                      }
                    }
                  }
                }
              })(s, y, t, e, n, r)
                ? u && (b.lineStart(), b.point(o, a), (x = !1))
                : (g || (b.lineStart(), b.point(s[0], s[1])),
                b.point(y[0], y[1]),
                u || b.lineEnd(),
                (x = !1));
            }
            (d = o), (v = a), (g = u);
          }
          return _;
        };
      }
      function aa(t) {
        return function (e) {
          var n = new ua();
          for (var r in t) n[r] = t[r];
          return (n.stream = e), n;
        };
      }
      function ua() {}
      function sa(t, e, n) {
        var r = t.clipExtent && t.clipExtent();
        return (
          t.scale(150).translate([0, 0]),
          null != r && t.clipExtent(null),
          ui(n, t.stream(Ji)),
          e(Ji.result()),
          null != r && t.clipExtent(r),
          t
        );
      }
      function ca(t, e, n) {
        return sa(
          t,
          function (n) {
            var r = e[1][0] - e[0][0],
              i = e[1][1] - e[0][1],
              o = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
              a = +e[0][0] + (r - o * (n[1][0] + n[0][0])) / 2,
              u = +e[0][1] + (i - o * (n[1][1] + n[0][1])) / 2;
            t.scale(150 * o).translate([a, u]);
          },
          n,
        );
      }
      ua.prototype = {
        constructor: ua,
        point: function (t, e) {
          this.stream.point(t, e);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      };
      var fa = wi(30 * yi),
        la = function (t, e) {
          return +e
            ? (function (t, e) {
              function n(r, i, o, a, u, s, c, f, l, h, p, d, v, g) {
                var y = c - r,
                  m = f - i,
                  x = y * y + m * m;
                if (x > 4 * e && v--) {
                  var b = a + h,
                    w = u + p,
                    _ = s + d,
                    S = Ai(b * b + w * w + _ * _),
                    T = Ci((_ /= S)),
                    E =
                        mi(mi(_) - 1) < 1e-6 || mi(o - l) < 1e-6
                          ? (o + l) / 2
                          : bi(w, b),
                    A = t(E, T),
                    M = A[0],
                    C = A[1],
                    N = M - r,
                    k = C - i,
                    j = m * N - y * k;
                  ((j * j) / x > e ||
                      mi((y * N + m * k) / x - 0.5) > 0.3 ||
                      a * h + u * p + s * d < fa) &&
                      (n(
                        r,
                        i,
                        o,
                        a,
                        u,
                        s,
                        M,
                        C,
                        E,
                        (b /= S),
                        (w /= S),
                        _,
                        v,
                        g,
                      ),
                      g.point(M, C),
                      n(M, C, E, b, w, _, c, f, l, h, p, d, v, g));
                }
              }
              return function (e) {
                var r,
                  i,
                  o,
                  a,
                  u,
                  s,
                  c,
                  f,
                  l,
                  h,
                  p,
                  d,
                  v = {
                    point: g,
                    lineStart: y,
                    lineEnd: x,
                    polygonStart: function () {
                      e.polygonStart(), (v.lineStart = b);
                    },
                    polygonEnd: function () {
                      e.polygonEnd(), (v.lineStart = y);
                    },
                  };
                function g(n, r) {
                  (n = t(n, r)), e.point(n[0], n[1]);
                }
                function y() {
                  (f = NaN), (v.point = m), e.lineStart();
                }
                function m(r, i) {
                  var o = Wo([r, i]),
                    a = t(r, i);
                  n(
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    (f = a[0]),
                    (l = a[1]),
                    (c = r),
                    (h = o[0]),
                    (p = o[1]),
                    (d = o[2]),
                    16,
                    e,
                  ),
                  e.point(f, l);
                }
                function x() {
                  (v.point = g), e.lineEnd();
                }
                function b() {
                  y(), (v.point = w), (v.lineEnd = _);
                }
                function w(t, e) {
                  m((r = t), e),
                  (i = f),
                  (o = l),
                  (a = h),
                  (u = p),
                  (s = d),
                  (v.point = m);
                }
                function _() {
                  n(f, l, c, h, p, d, i, o, r, a, u, s, 16, e),
                  (v.lineEnd = x),
                  x();
                }
                return v;
              };
            })(t, e)
            : (function (t) {
              return aa({
                point: function (e, n) {
                  (e = t(e, n)), this.stream.point(e[0], e[1]);
                },
              });
            })(t);
        };
      var ha = aa({
        point: function (t, e) {
          this.stream.point(t * yi, e * yi);
        },
      });
      function pa(t, e, n, r, i) {
        function o(o, a) {
          return [e + t * (o *= r), n - t * (a *= i)];
        }
        return (
          (o.invert = function (o, a) {
            return [((o - e) / t) * r, ((n - a) / t) * i];
          }),
          o
        );
      }
      function da(t, e, n, r, i, o) {
        var a = wi(o),
          u = Ti(o),
          s = a * t,
          c = u * t,
          f = a / t,
          l = u / t,
          h = (u * n - a * e) / t,
          p = (u * e + a * n) / t;
        function d(t, o) {
          return [s * (t *= r) - c * (o *= i) + e, n - c * t - s * o];
        }
        return (
          (d.invert = function (t, e) {
            return [r * (f * t - l * e + h), i * (p - l * t - f * e)];
          }),
          d
        );
      }
      function va(t) {
        return (function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            s,
            c,
            f,
            l = 150,
            h = 480,
            p = 250,
            d = 0,
            v = 0,
            g = 0,
            y = 0,
            m = 0,
            x = 0,
            b = 1,
            w = 1,
            _ = null,
            S = ea,
            T = null,
            E = ei,
            A = 0.5;
          function M(t) {
            return s(t[0] * yi, t[1] * yi);
          }
          function C(t) {
            return (t = s.invert(t[0], t[1])) && [t[0] * gi, t[1] * gi];
          }
          function N() {
            var t = da(l, 0, 0, b, w, x).apply(null, e(d, v)),
              r = (x ? da : pa)(l, h - t[0], p - t[1], b, w, x);
            return (
              (n = Lo(g, y, m)),
              (u = Ro(e, r)),
              (s = Ro(n, u)),
              (a = la(u, A)),
              k()
            );
          }
          function k() {
            return (c = f = null), M;
          }
          return (
            (M.stream = function (t) {
              return c && f === t
                ? c
                : (c = ha(
                  (function (t) {
                    return aa({
                      point: function (e, n) {
                        var r = t(e, n);
                        return this.stream.point(r[0], r[1]);
                      },
                    });
                  })(n)(S(a(E((f = t))))),
                ));
            }),
            (M.preclip = function (t) {
              return arguments.length ? ((S = t), (_ = void 0), k()) : S;
            }),
            (M.postclip = function (t) {
              return arguments.length
                ? ((E = t), (T = r = i = o = null), k())
                : E;
            }),
            (M.clipAngle = function (t) {
              return arguments.length
                ? ((S = +t ? ia((_ = t * yi)) : ((_ = null), ea)), k())
                : _ * gi;
            }),
            (M.clipExtent = function (t) {
              return arguments.length
                ? ((E =
                    null == t
                      ? ((T = r = i = o = null), ei)
                      : oa(
                        (T = +t[0][0]),
                        (r = +t[0][1]),
                        (i = +t[1][0]),
                        (o = +t[1][1]),
                      )),
                k())
                : null == T
                  ? null
                  : [
                    [T, r],
                    [i, o],
                  ];
            }),
            (M.scale = function (t) {
              return arguments.length ? ((l = +t), N()) : l;
            }),
            (M.translate = function (t) {
              return arguments.length
                ? ((h = +t[0]), (p = +t[1]), N())
                : [h, p];
            }),
            (M.center = function (t) {
              return arguments.length
                ? ((d = (t[0] % 360) * yi), (v = (t[1] % 360) * yi), N())
                : [d * gi, v * gi];
            }),
            (M.rotate = function (t) {
              return arguments.length
                ? ((g = (t[0] % 360) * yi),
                (y = (t[1] % 360) * yi),
                (m = t.length > 2 ? (t[2] % 360) * yi : 0),
                N())
                : [g * gi, y * gi, m * gi];
            }),
            (M.angle = function (t) {
              return arguments.length ? ((x = (t % 360) * yi), N()) : x * gi;
            }),
            (M.reflectX = function (t) {
              return arguments.length ? ((b = t ? -1 : 1), N()) : b < 0;
            }),
            (M.reflectY = function (t) {
              return arguments.length ? ((w = t ? -1 : 1), N()) : w < 0;
            }),
            (M.precision = function (t) {
              return arguments.length ? ((a = la(u, (A = t * t))), k()) : Ai(A);
            }),
            (M.fitExtent = function (t, e) {
              return ca(M, t, e);
            }),
            (M.fitSize = function (t, e) {
              return (function (t, e, n) {
                return ca(t, [[0, 0], e], n);
              })(M, t, e);
            }),
            (M.fitWidth = function (t, e) {
              return (function (t, e, n) {
                return sa(
                  t,
                  function (n) {
                    var r = +e,
                      i = r / (n[1][0] - n[0][0]),
                      o = (r - i * (n[1][0] + n[0][0])) / 2,
                      a = -i * n[0][1];
                    t.scale(150 * i).translate([o, a]);
                  },
                  n,
                );
              })(M, t, e);
            }),
            (M.fitHeight = function (t, e) {
              return (function (t, e, n) {
                return sa(
                  t,
                  function (n) {
                    var r = +e,
                      i = r / (n[1][1] - n[0][1]),
                      o = -i * n[0][0],
                      a = (r - i * (n[1][1] + n[0][1])) / 2;
                    t.scale(150 * i).translate([o, a]);
                  },
                  n,
                );
              })(M, t, e);
            }),
            function () {
              return (
                (e = t.apply(this, arguments)), (M.invert = e.invert && C), N()
              );
            }
          );
        })(function () {
          return t;
        })();
      }
      function ga(t, e) {
        return [t, Si(Mi((pi + e) / 2))];
      }
      ga.invert = function (t, e) {
        return [t, 2 * xi(_i(e)) - pi];
      };
      var ya = function () {
        return (function (t) {
          var e,
            n,
            r,
            i = va(t),
            o = i.center,
            a = i.scale,
            u = i.translate,
            s = i.clipExtent,
            c = null;
          function f() {
            var o = hi * a(),
              u = i(
                (function (t) {
                  function e(e) {
                    return (
                      ((e = t(e[0] * yi, e[1] * yi))[0] *= gi), (e[1] *= gi), e
                    );
                  }
                  return (
                    (t = Lo(
                      t[0] * yi,
                      t[1] * yi,
                      t.length > 2 ? t[2] * yi : 0,
                    )),
                    (e.invert = function (e) {
                      return (
                        ((e = t.invert(e[0] * yi, e[1] * yi))[0] *= gi),
                        (e[1] *= gi),
                        e
                      );
                    }),
                    e
                  );
                })(i.rotate()).invert([0, 0]),
              );
            return s(
              null == c
                ? [
                  [u[0] - o, u[1] - o],
                  [u[0] + o, u[1] + o],
                ]
                : t === ga
                  ? [
                    [Math.max(u[0] - o, c), e],
                    [Math.min(u[0] + o, n), r],
                  ]
                  : [
                    [c, Math.max(u[1] - o, e)],
                    [n, Math.min(u[1] + o, r)],
                  ],
            );
          }
          return (
            (i.scale = function (t) {
              return arguments.length ? (a(t), f()) : a();
            }),
            (i.translate = function (t) {
              return arguments.length ? (u(t), f()) : u();
            }),
            (i.center = function (t) {
              return arguments.length ? (o(t), f()) : o();
            }),
            (i.clipExtent = function (t) {
              return arguments.length
                ? (null == t
                  ? (c = e = n = r = null)
                  : ((c = +t[0][0]),
                  (e = +t[0][1]),
                  (n = +t[1][0]),
                  (r = +t[1][1])),
                f())
                : null == c
                  ? null
                  : [
                    [c, e],
                    [n, r],
                  ];
            }),
            f()
          );
        })(ga).scale(961 / vi);
      };
      var ma = function () {
          return Math.random();
        },
        xa =
          ((function t(e) {
            function n(t, n) {
              return (
                (t = null == t ? 0 : +t),
                (n = null == n ? 1 : +n),
                1 === arguments.length ? ((n = t), (t = 0)) : (n -= t),
                function () {
                  return e() * n + t;
                }
              );
            }
            return (n.source = t), n;
          })(ma),
          (function t(e) {
            function n(t, n) {
              var r, i;
              return (
                (t = null == t ? 0 : +t),
                (n = null == n ? 1 : +n),
                function () {
                  var o;
                  if (null != r) (o = r), (r = null);
                  else
                    do {
                      (r = 2 * e() - 1), (o = 2 * e() - 1), (i = r * r + o * o);
                    } while (!i || i > 1);
                  return t + n * o * Math.sqrt((-2 * Math.log(i)) / i);
                }
              );
            }
            return (n.source = t), n;
          })(ma)),
        ba =
          ((function t(e) {
            function n() {
              var t = xa.source(e).apply(this, arguments);
              return function () {
                return Math.exp(t());
              };
            }
            return (n.source = t), n;
          })(ma),
          (function t(e) {
            function n(t) {
              return function () {
                for (var n = 0, r = 0; r < t; ++r) n += e();
                return n;
              };
            }
            return (n.source = t), n;
          })(ma));
      (function t(e) {
        function n(t) {
          var n = ba.source(e)(t);
          return function () {
            return n() / t;
          };
        }
        return (n.source = t), n;
      })(ma),
      (function t(e) {
        function n(t) {
          return function () {
            return -Math.log(1 - e()) / t;
          };
        }
        return (n.source = t), n;
      })(ma);
      function wa(t, e) {
        switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t);
        }
        return this;
      }
      var _a = Array.prototype,
        Sa = _a.map,
        Ta = _a.slice;
      var Ea = function (t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return Math.round(t * (1 - n) + e * n);
            }
          );
        },
        Aa = function (t) {
          return +t;
        },
        Ma = [0, 1];
      function Ca(t) {
        return t;
      }
      function Na(t, e) {
        return (e -= t = +t)
          ? function (n) {
            return (n - t) / e;
          }
          : ((n = isNaN(e) ? NaN : 0.5),
          function () {
            return n;
          });
        var n;
      }
      function ka(t) {
        var e,
          n = t[0],
          r = t[t.length - 1];
        return (
          n > r && ((e = n), (n = r), (r = e)),
          function (t) {
            return Math.max(n, Math.min(r, t));
          }
        );
      }
      function ja(t, e, n) {
        var r = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          i < r
            ? ((r = Na(i, r)), (o = n(a, o)))
            : ((r = Na(r, i)), (o = n(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function Ra(t, e, n) {
        var r = Math.min(t.length, e.length) - 1,
          i = new Array(r),
          o = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
          ++a < r;

        )
          (i[a] = Na(t[a], t[a + 1])), (o[a] = n(e[a], e[a + 1]));
        return function (e) {
          var n = u(t, e, 1, r) - 1;
          return o[n](i[n](e));
        };
      }
      function Oa(t, e) {
        return e
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function La() {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = Ma,
          u = Ma,
          s = Fe,
          c = Ca;
        function f() {
          return (
            (r = Math.min(a.length, u.length) > 2 ? Ra : ja), (i = o = null), l
          );
        }
        function l(e) {
          return isNaN((e = +e)) ? n : (i || (i = r(a.map(t), u, s)))(t(c(e)));
        }
        return (
          (l.invert = function (n) {
            return c(e((o || (o = r(u, a.map(t), Re)))(n)));
          }),
          (l.domain = function (t) {
            return arguments.length
              ? ((a = Sa.call(t, Aa)), c === Ca || (c = ka(a)), f())
              : a.slice();
          }),
          (l.range = function (t) {
            return arguments.length ? ((u = Ta.call(t)), f()) : u.slice();
          }),
          (l.rangeRound = function (t) {
            return (u = Ta.call(t)), (s = Ea), f();
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = t ? ka(a) : Ca), l) : c !== Ca;
          }),
          (l.interpolate = function (t) {
            return arguments.length ? ((s = t), f()) : s;
          }),
          (l.unknown = function (t) {
            return arguments.length ? ((n = t), l) : n;
          }),
          function (n, r) {
            return (t = n), (e = r), f();
          }
        );
      }
      function Da(t, e) {
        return La()(t, e);
      }
      var Ia = function (t, e, n, r) {
        var i,
          o = v(t, e, n);
        switch ((r = Wr(null == r ? ",f" : r)).type) {
        case "s":
          var a = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != r.precision ||
                isNaN(
                  (i = (function (t, e) {
                    return Math.max(
                      0,
                      3 * Math.max(-8, Math.min(8, Math.floor(Hr(e) / 3))) -
                        Hr(Math.abs(t)),
                    );
                  })(o, a)),
                ) ||
                (r.precision = i),
            Gr(r, a)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return (
                    (t = Math.abs(t)),
                    (e = Math.abs(e) - t),
                    Math.max(0, Hr(e) - Hr(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(e)))),
              ) ||
              (r.precision = i - ("e" === r.type));
          break;
        case "f":
        case "%":
          null != r.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -Hr(Math.abs(t)));
                })(o)),
              ) ||
              (r.precision = i - 2 * ("%" === r.type));
        }
        return Xr(r);
      };
      function Pa(t) {
        var e = t.domain;
        return (
          (t.ticks = function (t) {
            var n = e();
            return p(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, n) {
            var r = e();
            return Ia(r[0], r[r.length - 1], null == t ? 10 : t, n);
          }),
          (t.nice = function (n) {
            null == n && (n = 10);
            var r,
              i = e(),
              o = 0,
              a = i.length - 1,
              u = i[o],
              s = i[a];
            return (
              s < u && ((r = u), (u = s), (s = r), (r = o), (o = a), (a = r)),
              (r = d(u, s, n)) > 0
                ? (r = d(
                  (u = Math.floor(u / r) * r),
                  (s = Math.ceil(s / r) * r),
                  n,
                ))
                : r < 0 &&
                  (r = d(
                    (u = Math.ceil(u * r) / r),
                    (s = Math.floor(s * r) / r),
                    n,
                  )),
              r > 0
                ? ((i[o] = Math.floor(u / r) * r),
                (i[a] = Math.ceil(s / r) * r),
                e(i))
                : r < 0 &&
                  ((i[o] = Math.ceil(u * r) / r),
                  (i[a] = Math.floor(s * r) / r),
                  e(i)),
              t
            );
          }),
          t
        );
      }
      function Ua() {
        var t = Da(Ca, Ca);
        return (
          (t.copy = function () {
            return Oa(t, Ua());
          }),
          wa.apply(t, arguments),
          Pa(t)
        );
      }
      var Fa = function (t, e) {
        var n,
          r = 0,
          i = (t = t.slice()).length - 1,
          o = t[r],
          a = t[i];
        return (
          a < o && ((n = r), (r = i), (i = n), (n = o), (o = a), (a = n)),
          (t[r] = e.floor(o)),
          (t[i] = e.ceil(a)),
          t
        );
      };
      var qa = new Date(),
        Ba = new Date();
      function Ha(t, e, n, r) {
        function i(e) {
          return t((e = 0 === arguments.length ? new Date() : new Date(+e))), e;
        }
        return (
          (i.floor = function (e) {
            return t((e = new Date(+e))), e;
          }),
          (i.ceil = function (n) {
            return t((n = new Date(n - 1))), e(n, 1), t(n), n;
          }),
          (i.round = function (t) {
            var e = i(t),
              n = i.ceil(t);
            return t - e < n - t ? e : n;
          }),
          (i.offset = function (t, n) {
            return e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t;
          }),
          (i.range = function (n, r, o) {
            var a,
              u = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r && o > 0))
            )
              return u;
            do {
              u.push((a = new Date(+n))), e(n, o), t(n);
            } while (a < n && n < r);
            return u;
          }),
          (i.filter = function (n) {
            return Ha(
              function (e) {
                if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
              },
              function (t, r) {
                if (t >= t)
                  if (r < 0) for (; ++r <= 0; ) for (; e(t, -1), !n(t); );
                  else for (; --r >= 0; ) for (; e(t, 1), !n(t); );
              },
            );
          }),
          n &&
            ((i.count = function (e, r) {
              return (
                qa.setTime(+e),
                Ba.setTime(+r),
                t(qa),
                t(Ba),
                Math.floor(n(qa, Ba))
              );
            }),
            (i.every = function (t) {
              return (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? i.filter(
                      r
                        ? function (e) {
                          return r(e) % t == 0;
                        }
                        : function (e) {
                          return i.count(0, e) % t == 0;
                        },
                    )
                    : i
                  : null
              );
            })),
          i
        );
      }
      var za = Ha(
        function (t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function (t, e) {
          t.setFullYear(t.getFullYear() + e);
        },
        function (t, e) {
          return e.getFullYear() - t.getFullYear();
        },
        function (t) {
          return t.getFullYear();
        },
      );
      za.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Ha(
            function (e) {
              e.setFullYear(Math.floor(e.getFullYear() / t) * t),
              e.setMonth(0, 1),
              e.setHours(0, 0, 0, 0);
            },
            function (e, n) {
              e.setFullYear(e.getFullYear() + n * t);
            },
          )
          : null;
      };
      var Wa = za,
        $a =
          (za.range,
          Ha(
            function (t) {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setMonth(t.getMonth() + e);
            },
            function (t, e) {
              return (
                e.getMonth() -
                t.getMonth() +
                12 * (e.getFullYear() - t.getFullYear())
              );
            },
            function (t) {
              return t.getMonth();
            },
          )),
        Ya = $a;
      $a.range;
      function Va(t) {
        return Ha(
          function (e) {
            e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
            e.setHours(0, 0, 0, 0);
          },
          function (t, e) {
            t.setDate(t.getDate() + 7 * e);
          },
          function (t, e) {
            return (
              (e - t - 6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) /
              6048e5
            );
          },
        );
      }
      var Xa = Va(0),
        Ga = Va(1),
        Ja = Va(2),
        Za = Va(3),
        Qa = Va(4),
        Ka = Va(5),
        tu = Va(6),
        eu =
          (Xa.range,
          Ga.range,
          Ja.range,
          Za.range,
          Qa.range,
          Ka.range,
          tu.range,
          Ha(
            function (t) {
              t.setHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setDate(t.getDate() + e);
            },
            function (t, e) {
              return (
                (e -
                  t -
                  6e4 * (e.getTimezoneOffset() - t.getTimezoneOffset())) /
                864e5
              );
            },
            function (t) {
              return t.getDate() - 1;
            },
          )),
        nu = eu,
        ru =
          (eu.range,
          Ha(
            function (t) {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  1e3 * t.getSeconds() -
                  6e4 * t.getMinutes(),
              );
            },
            function (t, e) {
              t.setTime(+t + 36e5 * e);
            },
            function (t, e) {
              return (e - t) / 36e5;
            },
            function (t) {
              return t.getHours();
            },
          )),
        iu = ru,
        ou =
          (ru.range,
          Ha(
            function (t) {
              t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
            },
            function (t, e) {
              t.setTime(+t + 6e4 * e);
            },
            function (t, e) {
              return (e - t) / 6e4;
            },
            function (t) {
              return t.getMinutes();
            },
          )),
        au = ou,
        uu =
          (ou.range,
          Ha(
            function (t) {
              t.setTime(t - t.getMilliseconds());
            },
            function (t, e) {
              t.setTime(+t + 1e3 * e);
            },
            function (t, e) {
              return (e - t) / 1e3;
            },
            function (t) {
              return t.getUTCSeconds();
            },
          )),
        su = uu,
        cu =
          (uu.range,
          Ha(
            function () {},
            function (t, e) {
              t.setTime(+t + e);
            },
            function (t, e) {
              return e - t;
            },
          ));
      cu.every = function (t) {
        return (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? Ha(
                function (e) {
                  e.setTime(Math.floor(e / t) * t);
                },
                function (e, n) {
                  e.setTime(+e + n * t);
                },
                function (e, n) {
                  return (n - e) / t;
                },
              )
              : cu
            : null
        );
      };
      var fu = cu;
      cu.range;
      function lu(t) {
        return Ha(
          function (e) {
            e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
            e.setUTCHours(0, 0, 0, 0);
          },
          function (t, e) {
            t.setUTCDate(t.getUTCDate() + 7 * e);
          },
          function (t, e) {
            return (e - t) / 6048e5;
          },
        );
      }
      var hu = lu(0),
        pu = lu(1),
        du = lu(2),
        vu = lu(3),
        gu = lu(4),
        yu = lu(5),
        mu = lu(6),
        xu =
          (hu.range,
          pu.range,
          du.range,
          vu.range,
          gu.range,
          yu.range,
          mu.range,
          Ha(
            function (t) {
              t.setUTCHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setUTCDate(t.getUTCDate() + e);
            },
            function (t, e) {
              return (e - t) / 864e5;
            },
            function (t) {
              return t.getUTCDate() - 1;
            },
          )),
        bu = xu,
        wu =
          (xu.range,
          Ha(
            function (t) {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            },
            function (t, e) {
              t.setUTCFullYear(t.getUTCFullYear() + e);
            },
            function (t, e) {
              return e.getUTCFullYear() - t.getUTCFullYear();
            },
            function (t) {
              return t.getUTCFullYear();
            },
          ));
      wu.every = function (t) {
        return isFinite((t = Math.floor(t))) && t > 0
          ? Ha(
            function (e) {
              e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
              e.setUTCMonth(0, 1),
              e.setUTCHours(0, 0, 0, 0);
            },
            function (e, n) {
              e.setUTCFullYear(e.getUTCFullYear() + n * t);
            },
          )
          : null;
      };
      var _u = wu;
      wu.range;
      function Su(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return e.setFullYear(t.y), e;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Tu(t) {
        if (0 <= t.y && t.y < 100) {
          var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return e.setUTCFullYear(t.y), e;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function Eu(t, e, n) {
        return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      var Au,
        Mu,
        Cu,
        Nu = { "-": "", _: " ", 0: "0" },
        ku = /^\s*\d+/,
        ju = /^%/,
        Ru = /[\\^$*+?|[\]().{}]/g;
      function Ou(t, e, n) {
        var r = t < 0 ? "-" : "",
          i = (r ? -t : t) + "",
          o = i.length;
        return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
      }
      function Lu(t) {
        return t.replace(Ru, "\\$&");
      }
      function Du(t) {
        return new RegExp("^(?:" + t.map(Lu).join("|") + ")", "i");
      }
      function Iu(t) {
        for (var e = {}, n = -1, r = t.length; ++n < r; )
          e[t[n].toLowerCase()] = n;
        return e;
      }
      function Pu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 1));
        return r ? ((t.w = +r[0]), n + r[0].length) : -1;
      }
      function Uu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 1));
        return r ? ((t.u = +r[0]), n + r[0].length) : -1;
      }
      function Fu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.U = +r[0]), n + r[0].length) : -1;
      }
      function qu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.V = +r[0]), n + r[0].length) : -1;
      }
      function Bu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.W = +r[0]), n + r[0].length) : -1;
      }
      function Hu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 4));
        return r ? ((t.y = +r[0]), n + r[0].length) : -1;
      }
      function zu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r
          ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function Wu(t, e, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
        return r
          ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function $u(t, e, n) {
        var r = ku.exec(e.slice(n, n + 1));
        return r ? ((t.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function Yu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.m = r[0] - 1), n + r[0].length) : -1;
      }
      function Vu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.d = +r[0]), n + r[0].length) : -1;
      }
      function Xu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 3));
        return r ? ((t.m = 0), (t.d = +r[0]), n + r[0].length) : -1;
      }
      function Gu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.H = +r[0]), n + r[0].length) : -1;
      }
      function Ju(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.M = +r[0]), n + r[0].length) : -1;
      }
      function Zu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 2));
        return r ? ((t.S = +r[0]), n + r[0].length) : -1;
      }
      function Qu(t, e, n) {
        var r = ku.exec(e.slice(n, n + 3));
        return r ? ((t.L = +r[0]), n + r[0].length) : -1;
      }
      function Ku(t, e, n) {
        var r = ku.exec(e.slice(n, n + 6));
        return r ? ((t.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function ts(t, e, n) {
        var r = ju.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function es(t, e, n) {
        var r = ku.exec(e.slice(n));
        return r ? ((t.Q = +r[0]), n + r[0].length) : -1;
      }
      function ns(t, e, n) {
        var r = ku.exec(e.slice(n));
        return r ? ((t.s = +r[0]), n + r[0].length) : -1;
      }
      function rs(t, e) {
        return Ou(t.getDate(), e, 2);
      }
      function is(t, e) {
        return Ou(t.getHours(), e, 2);
      }
      function os(t, e) {
        return Ou(t.getHours() % 12 || 12, e, 2);
      }
      function as(t, e) {
        return Ou(1 + nu.count(Wa(t), t), e, 3);
      }
      function us(t, e) {
        return Ou(t.getMilliseconds(), e, 3);
      }
      function ss(t, e) {
        return us(t, e) + "000";
      }
      function cs(t, e) {
        return Ou(t.getMonth() + 1, e, 2);
      }
      function fs(t, e) {
        return Ou(t.getMinutes(), e, 2);
      }
      function ls(t, e) {
        return Ou(t.getSeconds(), e, 2);
      }
      function hs(t) {
        var e = t.getDay();
        return 0 === e ? 7 : e;
      }
      function ps(t, e) {
        return Ou(Xa.count(Wa(t) - 1, t), e, 2);
      }
      function ds(t) {
        var e = t.getDay();
        return e >= 4 || 0 === e ? Qa(t) : Qa.ceil(t);
      }
      function vs(t, e) {
        return (
          (t = ds(t)), Ou(Qa.count(Wa(t), t) + (4 === Wa(t).getDay()), e, 2)
        );
      }
      function gs(t) {
        return t.getDay();
      }
      function ys(t, e) {
        return Ou(Ga.count(Wa(t) - 1, t), e, 2);
      }
      function ms(t, e) {
        return Ou(t.getFullYear() % 100, e, 2);
      }
      function xs(t, e) {
        return Ou((t = ds(t)).getFullYear() % 100, e, 2);
      }
      function bs(t, e) {
        return Ou(t.getFullYear() % 1e4, e, 4);
      }
      function ws(t, e) {
        var n = t.getDay();
        return Ou(
          (t = n >= 4 || 0 === n ? Qa(t) : Qa.ceil(t)).getFullYear() % 1e4,
          e,
          4,
        );
      }
      function _s(t) {
        var e = t.getTimezoneOffset();
        return (
          (e > 0 ? "-" : ((e *= -1), "+")) +
          Ou((e / 60) | 0, "0", 2) +
          Ou(e % 60, "0", 2)
        );
      }
      function Ss(t, e) {
        return Ou(t.getUTCDate(), e, 2);
      }
      function Ts(t, e) {
        return Ou(t.getUTCHours(), e, 2);
      }
      function Es(t, e) {
        return Ou(t.getUTCHours() % 12 || 12, e, 2);
      }
      function As(t, e) {
        return Ou(1 + bu.count(_u(t), t), e, 3);
      }
      function Ms(t, e) {
        return Ou(t.getUTCMilliseconds(), e, 3);
      }
      function Cs(t, e) {
        return Ms(t, e) + "000";
      }
      function Ns(t, e) {
        return Ou(t.getUTCMonth() + 1, e, 2);
      }
      function ks(t, e) {
        return Ou(t.getUTCMinutes(), e, 2);
      }
      function js(t, e) {
        return Ou(t.getUTCSeconds(), e, 2);
      }
      function Rs(t) {
        var e = t.getUTCDay();
        return 0 === e ? 7 : e;
      }
      function Os(t, e) {
        return Ou(hu.count(_u(t) - 1, t), e, 2);
      }
      function Ls(t) {
        var e = t.getUTCDay();
        return e >= 4 || 0 === e ? gu(t) : gu.ceil(t);
      }
      function Ds(t, e) {
        return (
          (t = Ls(t)), Ou(gu.count(_u(t), t) + (4 === _u(t).getUTCDay()), e, 2)
        );
      }
      function Is(t) {
        return t.getUTCDay();
      }
      function Ps(t, e) {
        return Ou(pu.count(_u(t) - 1, t), e, 2);
      }
      function Us(t, e) {
        return Ou(t.getUTCFullYear() % 100, e, 2);
      }
      function Fs(t, e) {
        return Ou((t = Ls(t)).getUTCFullYear() % 100, e, 2);
      }
      function qs(t, e) {
        return Ou(t.getUTCFullYear() % 1e4, e, 4);
      }
      function Bs(t, e) {
        var n = t.getUTCDay();
        return Ou(
          (t = n >= 4 || 0 === n ? gu(t) : gu.ceil(t)).getUTCFullYear() % 1e4,
          e,
          4,
        );
      }
      function Hs() {
        return "+0000";
      }
      function zs() {
        return "%";
      }
      function Ws(t) {
        return +t;
      }
      function $s(t) {
        return Math.floor(+t / 1e3);
      }
      !(function (t) {
        (Au = (function (t) {
          var e = t.dateTime,
            n = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            s = t.shortMonths,
            c = Du(i),
            f = Iu(i),
            l = Du(o),
            h = Iu(o),
            p = Du(a),
            d = Iu(a),
            v = Du(u),
            g = Iu(u),
            y = Du(s),
            m = Iu(s),
            x = {
              a: function (t) {
                return a[t.getDay()];
              },
              A: function (t) {
                return o[t.getDay()];
              },
              b: function (t) {
                return s[t.getMonth()];
              },
              B: function (t) {
                return u[t.getMonth()];
              },
              c: null,
              d: rs,
              e: rs,
              f: ss,
              g: xs,
              G: ws,
              H: is,
              I: os,
              j: as,
              L: us,
              m: cs,
              M: fs,
              p: function (t) {
                return i[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: Ws,
              s: $s,
              S: ls,
              u: hs,
              U: ps,
              V: vs,
              w: gs,
              W: ys,
              x: null,
              X: null,
              y: ms,
              Y: bs,
              Z: _s,
              "%": zs,
            },
            b = {
              a: function (t) {
                return a[t.getUTCDay()];
              },
              A: function (t) {
                return o[t.getUTCDay()];
              },
              b: function (t) {
                return s[t.getUTCMonth()];
              },
              B: function (t) {
                return u[t.getUTCMonth()];
              },
              c: null,
              d: Ss,
              e: Ss,
              f: Cs,
              g: Fs,
              G: Bs,
              H: Ts,
              I: Es,
              j: As,
              L: Ms,
              m: Ns,
              M: ks,
              p: function (t) {
                return i[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: Ws,
              s: $s,
              S: js,
              u: Rs,
              U: Os,
              V: Ds,
              w: Is,
              W: Ps,
              x: null,
              X: null,
              y: Us,
              Y: qs,
              Z: Hs,
              "%": zs,
            },
            w = {
              a: function (t, e, n) {
                var r = p.exec(e.slice(n));
                return r
                  ? ((t.w = d[r[0].toLowerCase()]), n + r[0].length)
                  : -1;
              },
              A: function (t, e, n) {
                var r = l.exec(e.slice(n));
                return r
                  ? ((t.w = h[r[0].toLowerCase()]), n + r[0].length)
                  : -1;
              },
              b: function (t, e, n) {
                var r = y.exec(e.slice(n));
                return r
                  ? ((t.m = m[r[0].toLowerCase()]), n + r[0].length)
                  : -1;
              },
              B: function (t, e, n) {
                var r = v.exec(e.slice(n));
                return r
                  ? ((t.m = g[r[0].toLowerCase()]), n + r[0].length)
                  : -1;
              },
              c: function (t, n, r) {
                return T(t, e, n, r);
              },
              d: Vu,
              e: Vu,
              f: Ku,
              g: zu,
              G: Hu,
              H: Gu,
              I: Gu,
              j: Xu,
              L: Qu,
              m: Yu,
              M: Ju,
              p: function (t, e, n) {
                var r = c.exec(e.slice(n));
                return r
                  ? ((t.p = f[r[0].toLowerCase()]), n + r[0].length)
                  : -1;
              },
              q: $u,
              Q: es,
              s: ns,
              S: Zu,
              u: Uu,
              U: Fu,
              V: qu,
              w: Pu,
              W: Bu,
              x: function (t, e, r) {
                return T(t, n, e, r);
              },
              X: function (t, e, n) {
                return T(t, r, e, n);
              },
              y: zu,
              Y: Hu,
              Z: Wu,
              "%": ts,
            };
          function _(t, e) {
            return function (n) {
              var r,
                i,
                o,
                a = [],
                u = -1,
                s = 0,
                c = t.length;
              for (n instanceof Date || (n = new Date(+n)); ++u < c; )
                37 === t.charCodeAt(u) &&
                  (a.push(t.slice(s, u)),
                  null != (i = Nu[(r = t.charAt(++u))])
                    ? (r = t.charAt(++u))
                    : (i = "e" === r ? " " : "0"),
                  (o = e[r]) && (r = o(n, i)),
                  a.push(r),
                  (s = u + 1));
              return a.push(t.slice(s, u)), a.join("");
            };
          }
          function S(t, e) {
            return function (n) {
              var r,
                i,
                o = Eu(1900, void 0, 1);
              if (T(o, t, (n += ""), 0) != n.length) return null;
              if ("Q" in o) return new Date(o.Q);
              if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
              if (
                (e && !("Z" in o) && (o.Z = 0),
                "p" in o && (o.H = (o.H % 12) + 12 * o.p),
                void 0 === o.m && (o.m = "q" in o ? o.q : 0),
                "V" in o)
              ) {
                if (o.V < 1 || o.V > 53) return null;
                "w" in o || (o.w = 1),
                "Z" in o
                  ? ((i = (r = Tu(Eu(o.y, 0, 1))).getUTCDay()),
                  (r = i > 4 || 0 === i ? pu.ceil(r) : pu(r)),
                  (r = bu.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getUTCFullYear()),
                  (o.m = r.getUTCMonth()),
                  (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((i = (r = Su(Eu(o.y, 0, 1))).getDay()),
                  (r = i > 4 || 0 === i ? Ga.ceil(r) : Ga(r)),
                  (r = nu.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getFullYear()),
                  (o.m = r.getMonth()),
                  (o.d = r.getDate() + ((o.w + 6) % 7)));
              } else
                ("W" in o || "U" in o) &&
                  ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                  (i =
                    "Z" in o
                      ? Tu(Eu(o.y, 0, 1)).getUTCDay()
                      : Su(Eu(o.y, 0, 1)).getDay()),
                  (o.m = 0),
                  (o.d =
                    "W" in o
                      ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                      : o.w + 7 * o.U - ((i + 6) % 7)));
              return "Z" in o
                ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Tu(o))
                : Su(o);
            };
          }
          function T(t, e, n, r) {
            for (var i, o, a = 0, u = e.length, s = n.length; a < u; ) {
              if (r >= s) return -1;
              if (37 === (i = e.charCodeAt(a++))) {
                if (
                  ((i = e.charAt(a++)),
                  !(o = w[i in Nu ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0)
                )
                  return -1;
              } else if (i != n.charCodeAt(r++)) return -1;
            }
            return r;
          }
          return (
            (x.x = _(n, x)),
            (x.X = _(r, x)),
            (x.c = _(e, x)),
            (b.x = _(n, b)),
            (b.X = _(r, b)),
            (b.c = _(e, b)),
            {
              format: function (t) {
                var e = _((t += ""), x);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              parse: function (t) {
                var e = S((t += ""), !1);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcFormat: function (t) {
                var e = _((t += ""), b);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcParse: function (t) {
                var e = S((t += ""), !0);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
            }
          );
        })(t)),
        (Mu = Au.format),
        (Cu = Au.parse),
        Au.utcFormat,
        Au.utcParse;
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
      function Ys(t) {
        return new Date(t);
      }
      function Vs(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function Xs(t, e, n, r, o, a, u, s, c) {
        var f = Da(Ca, Ca),
          l = f.invert,
          h = f.domain,
          p = c(".%L"),
          d = c(":%S"),
          g = c("%I:%M"),
          y = c("%I %p"),
          m = c("%a %d"),
          x = c("%b %d"),
          b = c("%B"),
          w = c("%Y"),
          _ = [
            [u, 1, 1e3],
            [u, 5, 5e3],
            [u, 15, 15e3],
            [u, 30, 3e4],
            [a, 1, 6e4],
            [a, 5, 3e5],
            [a, 15, 9e5],
            [a, 30, 18e5],
            [o, 1, 36e5],
            [o, 3, 108e5],
            [o, 6, 216e5],
            [o, 12, 432e5],
            [r, 1, 864e5],
            [r, 2, 1728e5],
            [n, 1, 6048e5],
            [e, 1, 2592e6],
            [e, 3, 7776e6],
            [t, 1, 31536e6],
          ];
        function S(i) {
          return (
            u(i) < i
              ? p
              : a(i) < i
                ? d
                : o(i) < i
                  ? g
                  : r(i) < i
                    ? y
                    : e(i) < i
                      ? n(i) < i
                        ? m
                        : x
                      : t(i) < i
                        ? b
                        : w
          )(i);
        }
        function T(e, n, r, o) {
          if ((null == e && (e = 10), "number" == typeof e)) {
            var a = Math.abs(r - n) / e,
              u = i(function (t) {
                return t[2];
              }).right(_, a);
            u === _.length
              ? ((o = v(n / 31536e6, r / 31536e6, e)), (e = t))
              : u
                ? ((o = (u = _[a / _[u - 1][2] < _[u][2] / a ? u - 1 : u])[1]),
                (e = u[0]))
                : ((o = Math.max(v(n, r, e), 1)), (e = s));
          }
          return null == o ? e : e.every(o);
        }
        return (
          (f.invert = function (t) {
            return new Date(l(t));
          }),
          (f.domain = function (t) {
            return arguments.length ? h(Sa.call(t, Vs)) : h().map(Ys);
          }),
          (f.ticks = function (t, e) {
            var n,
              r = h(),
              i = r[0],
              o = r[r.length - 1],
              a = o < i;
            return (
              a && ((n = i), (i = o), (o = n)),
              (n = (n = T(t, i, o, e)) ? n.range(i, o + 1) : []),
              a ? n.reverse() : n
            );
          }),
          (f.tickFormat = function (t, e) {
            return null == e ? S : c(e);
          }),
          (f.nice = function (t, e) {
            var n = h();
            return (t = T(t, n[0], n[n.length - 1], e)) ? h(Fa(n, t)) : f;
          }),
          (f.copy = function () {
            return Oa(f, Xs(t, e, n, r, o, a, u, s, c));
          }),
          f
        );
      }
      var Gs = function () {
          return wa.apply(
            Xs(Wa, Ya, Xa, nu, iu, au, su, fu, Mu).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments,
          );
        },
        Js = Ha(
          function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          function (t, e) {
            t.setUTCMonth(t.getUTCMonth() + e);
          },
          function (t, e) {
            return (
              e.getUTCMonth() -
              t.getUTCMonth() +
              12 * (e.getUTCFullYear() - t.getUTCFullYear())
            );
          },
          function (t) {
            return t.getUTCMonth();
          },
        ),
        Zs =
          (Js.range,
          Ha(
            function (t) {
              t.setUTCMinutes(0, 0, 0);
            },
            function (t, e) {
              t.setTime(+t + 36e5 * e);
            },
            function (t, e) {
              return (e - t) / 36e5;
            },
            function (t) {
              return t.getUTCHours();
            },
          )),
        Qs =
          (Zs.range,
          Ha(
            function (t) {
              t.setUTCSeconds(0, 0);
            },
            function (t, e) {
              t.setTime(+t + 6e4 * e);
            },
            function (t, e) {
              return (e - t) / 6e4;
            },
            function (t) {
              return t.getUTCMinutes();
            },
          ));
      Qs.range;
      var Ks = function (t) {
          return "string" == typeof t
            ? new Ht([document.querySelectorAll(t)], [document.documentElement])
            : new Ht([null == t ? [] : t], Bt);
        },
        tc = function (t) {
          return function () {
            return t;
          };
        };
      function ec(t) {
        this._context = t;
      }
      ec.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
          case 0:
            (this._point = 1),
            this._line
              ? this._context.lineTo(t, e)
              : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, e);
          }
        },
      };
      var nc = function (t) {
        return new ec(t);
      };
      function rc(t) {
        return t[0];
      }
      function ic(t) {
        return t[1];
      }
      var oc = function () {
        var t = rc,
          e = ic,
          n = tc(!0),
          r = null,
          i = nc,
          o = null;
        function a(a) {
          var u,
            s,
            c,
            f = a.length,
            l = !1;
          for (null == r && (o = i((c = cr()))), u = 0; u <= f; ++u)
            !(u < f && n((s = a[u]), u, a)) === l &&
              ((l = !l) ? o.lineStart() : o.lineEnd()),
            l && o.point(+t(s, u, a), +e(s, u, a));
          if (c) return (o = null), c + "" || null;
        }
        return (
          (a.x = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : tc(+e)), a)
              : t;
          }),
          (a.y = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : tc(+t)), a)
              : e;
          }),
          (a.defined = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : tc(!!t)), a)
              : n;
          }),
          (a.curve = function (t) {
            return arguments.length ? ((i = t), null != r && (o = i(r)), a) : i;
          }),
          (a.context = function (t) {
            return arguments.length
              ? (null == t ? (r = o = null) : (o = i((r = t))), a)
              : r;
          }),
          a
        );
      };
      function ac() {
        this._ = null;
      }
      function uc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }
      function sc(t, e) {
        var n = e,
          r = e.R,
          i = n.U;
        i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (n.U = r),
        (n.R = r.L),
        n.R && (n.R.U = n),
        (r.L = n);
      }
      function cc(t, e) {
        var n = e,
          r = e.L,
          i = n.U;
        i ? (i.L === n ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (n.U = r),
        (n.L = r.R),
        n.L && (n.L.U = n),
        (r.R = n);
      }
      function fc(t) {
        for (; t.L; ) t = t.L;
        return t;
      }
      ac.prototype = {
        constructor: ac,
        insert: function (t, e) {
          var n, r, i;
          if (t) {
            if (((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)) {
              for (t = t.R; t.L; ) t = t.L;
              t.L = e;
            } else t.R = e;
            n = t;
          } else
            this._
              ? ((t = fc(this._)),
              (e.P = null),
              (e.N = t),
              (t.P = t.L = e),
              (n = t))
              : ((e.P = e.N = null), (this._ = e), (n = null));
          for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C; )
            n === (r = n.U).L
              ? (i = r.R) && i.C
                ? ((n.C = i.C = !1), (r.C = !0), (t = r))
                : (t === n.R && (sc(this, n), (n = (t = n).U)),
                (n.C = !1),
                (r.C = !0),
                cc(this, r))
              : (i = r.L) && i.C
                ? ((n.C = i.C = !1), (r.C = !0), (t = r))
                : (t === n.L && (cc(this, n), (n = (t = n).U)),
                (n.C = !1),
                (r.C = !0),
                sc(this, r)),
            (n = t.U);
          this._.C = !1;
        },
        remove: function (t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
          var e,
            n,
            r,
            i = t.U,
            o = t.L,
            a = t.R;
          if (
            ((n = o ? (a ? fc(a) : o) : a),
            i ? (i.L === t ? (i.L = n) : (i.R = n)) : (this._ = n),
            o && a
              ? ((r = n.C),
              (n.C = t.C),
              (n.L = o),
              (o.U = n),
              n !== a
                ? ((i = n.U),
                (n.U = t.U),
                (t = n.R),
                (i.L = t),
                (n.R = a),
                (a.U = n))
                : ((n.U = i), (i = n), (t = n.R)))
              : ((r = t.C), (t = n)),
            t && (t.U = i),
            !r)
          )
            if (t && t.C) t.C = !1;
            else {
              do {
                if (t === this._) break;
                if (t === i.L) {
                  if (
                    ((e = i.R).C &&
                      ((e.C = !1), (i.C = !0), sc(this, i), (e = i.R)),
                    (e.L && e.L.C) || (e.R && e.R.C))
                  ) {
                    (e.R && e.R.C) ||
                      ((e.L.C = !1), (e.C = !0), cc(this, e), (e = i.R)),
                    (e.C = i.C),
                    (i.C = e.R.C = !1),
                    sc(this, i),
                    (t = this._);
                    break;
                  }
                } else if (
                  ((e = i.L).C &&
                    ((e.C = !1), (i.C = !0), cc(this, i), (e = i.L)),
                  (e.L && e.L.C) || (e.R && e.R.C))
                ) {
                  (e.L && e.L.C) ||
                    ((e.R.C = !1), (e.C = !0), sc(this, e), (e = i.L)),
                  (e.C = i.C),
                  (i.C = e.L.C = !1),
                  cc(this, i),
                  (t = this._);
                  break;
                }
                (e.C = !0), (t = i), (i = i.U);
              } while (!t.C);
              t && (t.C = !1);
            }
        },
      };
      var lc = ac;
      function hc(t, e, n, r) {
        var i = [null, null],
          o = Ic.push(i) - 1;
        return (
          (i.left = t),
          (i.right = e),
          n && dc(i, t, e, n),
          r && dc(i, e, t, r),
          Lc[t.index].halfedges.push(o),
          Lc[e.index].halfedges.push(o),
          i
        );
      }
      function pc(t, e, n) {
        var r = [e, n];
        return (r.left = t), r;
      }
      function dc(t, e, n, r) {
        t[0] || t[1]
          ? t.left === n
            ? (t[1] = r)
            : (t[0] = r)
          : ((t[0] = r), (t.left = e), (t.right = n));
      }
      function vc(t, e, n, r, i) {
        var o,
          a = t[0],
          u = t[1],
          s = a[0],
          c = a[1],
          f = 0,
          l = 1,
          h = u[0] - s,
          p = u[1] - c;
        if (((o = e - s), h || !(o > 0))) {
          if (((o /= h), h < 0)) {
            if (o < f) return;
            o < l && (l = o);
          } else if (h > 0) {
            if (o > l) return;
            o > f && (f = o);
          }
          if (((o = r - s), h || !(o < 0))) {
            if (((o /= h), h < 0)) {
              if (o > l) return;
              o > f && (f = o);
            } else if (h > 0) {
              if (o < f) return;
              o < l && (l = o);
            }
            if (((o = n - c), p || !(o > 0))) {
              if (((o /= p), p < 0)) {
                if (o < f) return;
                o < l && (l = o);
              } else if (p > 0) {
                if (o > l) return;
                o > f && (f = o);
              }
              if (((o = i - c), p || !(o < 0))) {
                if (((o /= p), p < 0)) {
                  if (o > l) return;
                  o > f && (f = o);
                } else if (p > 0) {
                  if (o < f) return;
                  o < l && (l = o);
                }
                return (
                  !(f > 0 || l < 1) ||
                  (f > 0 && (t[0] = [s + f * h, c + f * p]),
                  l < 1 && (t[1] = [s + l * h, c + l * p]),
                  !0)
                );
              }
            }
          }
        }
      }
      function gc(t, e, n, r, i) {
        var o = t[1];
        if (o) return !0;
        var a,
          u,
          s = t[0],
          c = t.left,
          f = t.right,
          l = c[0],
          h = c[1],
          p = f[0],
          d = f[1],
          v = (l + p) / 2,
          g = (h + d) / 2;
        if (d === h) {
          if (v < e || v >= r) return;
          if (l > p) {
            if (s) {
              if (s[1] >= i) return;
            } else s = [v, n];
            o = [v, i];
          } else {
            if (s) {
              if (s[1] < n) return;
            } else s = [v, i];
            o = [v, n];
          }
        } else if (((u = g - (a = (l - p) / (d - h)) * v), a < -1 || a > 1))
          if (l > p) {
            if (s) {
              if (s[1] >= i) return;
            } else s = [(n - u) / a, n];
            o = [(i - u) / a, i];
          } else {
            if (s) {
              if (s[1] < n) return;
            } else s = [(i - u) / a, i];
            o = [(n - u) / a, n];
          }
        else if (h < d) {
          if (s) {
            if (s[0] >= r) return;
          } else s = [e, a * e + u];
          o = [r, a * r + u];
        } else {
          if (s) {
            if (s[0] < e) return;
          } else s = [r, a * r + u];
          o = [e, a * e + u];
        }
        return (t[0] = s), (t[1] = o), !0;
      }
      function yc(t, e) {
        var n = t.site,
          r = e.left,
          i = e.right;
        return (
          n === i && ((i = r), (r = n)),
          i
            ? Math.atan2(i[1] - r[1], i[0] - r[0])
            : (n === r ? ((r = e[1]), (i = e[0])) : ((r = e[0]), (i = e[1])),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
        );
      }
      function mc(t, e) {
        return e[+(e.left !== t.site)];
      }
      function xc(t, e) {
        return e[+(e.left === t.site)];
      }
      var bc,
        wc = [];
      function _c() {
        uc(this), (this.x = this.y = this.arc = this.site = this.cy = null);
      }
      function Sc(t) {
        var e = t.P,
          n = t.N;
        if (e && n) {
          var r = e.site,
            i = t.site,
            o = n.site;
          if (r !== o) {
            var a = i[0],
              u = i[1],
              s = r[0] - a,
              c = r[1] - u,
              f = o[0] - a,
              l = o[1] - u,
              h = 2 * (s * l - c * f);
            if (!(h >= -Uc)) {
              var p = s * s + c * c,
                d = f * f + l * l,
                v = (l * p - c * d) / h,
                g = (s * d - f * p) / h,
                y = wc.pop() || new _c();
              (y.arc = t),
              (y.site = i),
              (y.x = v + a),
              (y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g)),
              (t.circle = y);
              for (var m = null, x = Dc._; x; )
                if (y.y < x.y || (y.y === x.y && y.x <= x.x)) {
                  if (!x.L) {
                    m = x.P;
                    break;
                  }
                  x = x.L;
                } else {
                  if (!x.R) {
                    m = x;
                    break;
                  }
                  x = x.R;
                }
              Dc.insert(m, y), m || (bc = y);
            }
          }
        }
      }
      function Tc(t) {
        var e = t.circle;
        e &&
          (e.P || (bc = e.N),
          Dc.remove(e),
          wc.push(e),
          uc(e),
          (t.circle = null));
      }
      var Ec = [];
      function Ac() {
        uc(this), (this.edge = this.site = this.circle = null);
      }
      function Mc(t) {
        var e = Ec.pop() || new Ac();
        return (e.site = t), e;
      }
      function Cc(t) {
        Tc(t), Oc.remove(t), Ec.push(t), uc(t);
      }
      function Nc(t) {
        var e = t.circle,
          n = e.x,
          r = e.cy,
          i = [n, r],
          o = t.P,
          a = t.N,
          u = [t];
        Cc(t);
        for (
          var s = o;
          s.circle &&
          Math.abs(n - s.circle.x) < Pc &&
          Math.abs(r - s.circle.cy) < Pc;

        )
          (o = s.P), u.unshift(s), Cc(s), (s = o);
        u.unshift(s), Tc(s);
        for (
          var c = a;
          c.circle &&
          Math.abs(n - c.circle.x) < Pc &&
          Math.abs(r - c.circle.cy) < Pc;

        )
          (a = c.N), u.push(c), Cc(c), (c = a);
        u.push(c), Tc(c);
        var f,
          l = u.length;
        for (f = 1; f < l; ++f)
          (c = u[f]), (s = u[f - 1]), dc(c.edge, s.site, c.site, i);
        (s = u[0]),
        ((c = u[l - 1]).edge = hc(s.site, c.site, null, i)),
        Sc(s),
        Sc(c);
      }
      function kc(t) {
        for (var e, n, r, i, o = t[0], a = t[1], u = Oc._; u; )
          if ((r = jc(u, a) - o) > Pc) u = u.L;
          else {
            if (!((i = o - Rc(u, a)) > Pc)) {
              r > -Pc
                ? ((e = u.P), (n = u))
                : i > -Pc
                  ? ((e = u), (n = u.N))
                  : (e = n = u);
              break;
            }
            if (!u.R) {
              e = u;
              break;
            }
            u = u.R;
          }
        !(function (t) {
          Lc[t.index] = { site: t, halfedges: [] };
        })(t);
        var s = Mc(t);
        if ((Oc.insert(e, s), e || n)) {
          if (e === n)
            return (
              Tc(e),
              (n = Mc(e.site)),
              Oc.insert(s, n),
              (s.edge = n.edge = hc(e.site, s.site)),
              Sc(e),
              void Sc(n)
            );
          if (n) {
            Tc(e), Tc(n);
            var c = e.site,
              f = c[0],
              l = c[1],
              h = t[0] - f,
              p = t[1] - l,
              d = n.site,
              v = d[0] - f,
              g = d[1] - l,
              y = 2 * (h * g - p * v),
              m = h * h + p * p,
              x = v * v + g * g,
              b = [(g * m - p * x) / y + f, (h * x - v * m) / y + l];
            dc(n.edge, c, d, b),
            (s.edge = hc(c, t, null, b)),
            (n.edge = hc(t, d, null, b)),
            Sc(e),
            Sc(n);
          } else s.edge = hc(e.site, s.site);
        }
      }
      function jc(t, e) {
        var n = t.site,
          r = n[0],
          i = n[1],
          o = i - e;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        var u = (n = a.site)[0],
          s = n[1],
          c = s - e;
        if (!c) return u;
        var f = u - r,
          l = 1 / o - 1 / c,
          h = f / c;
        return l
          ? (-h +
              Math.sqrt(
                h * h - 2 * l * ((f * f) / (-2 * c) - s + c / 2 + i - o / 2),
              )) /
              l +
              r
          : (r + u) / 2;
      }
      function Rc(t, e) {
        var n = t.N;
        if (n) return jc(n, e);
        var r = t.site;
        return r[1] === e ? r[0] : 1 / 0;
      }
      var Oc,
        Lc,
        Dc,
        Ic,
        Pc = 1e-6,
        Uc = 1e-12;
      function Fc(t, e) {
        return e[1] - t[1] || e[0] - t[0];
      }
      function qc(t, e) {
        var n,
          r,
          i,
          o = t.sort(Fc).pop();
        for (
          Ic = [], Lc = new Array(t.length), Oc = new lc(), Dc = new lc();
          ;

        )
          if (
            ((i = bc), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x)))
          )
            (o[0] === n && o[1] === r) || (kc(o), (n = o[0]), (r = o[1])),
            (o = t.pop());
          else {
            if (!i) break;
            Nc(i.arc);
          }
        if (
          ((function () {
            for (var t, e, n, r, i = 0, o = Lc.length; i < o; ++i)
              if ((t = Lc[i]) && (r = (e = t.halfedges).length)) {
                var a = new Array(r),
                  u = new Array(r);
                for (n = 0; n < r; ++n) (a[n] = n), (u[n] = yc(t, Ic[e[n]]));
                for (
                  a.sort(function (t, e) {
                    return u[e] - u[t];
                  }),
                  n = 0;
                  n < r;
                  ++n
                )
                  u[n] = e[a[n]];
                for (n = 0; n < r; ++n) e[n] = u[n];
              }
          })(),
          e)
        ) {
          var a = +e[0][0],
            u = +e[0][1],
            s = +e[1][0],
            c = +e[1][1];
          !(function (t, e, n, r) {
            for (var i, o = Ic.length; o--; )
              (gc((i = Ic[o]), t, e, n, r) &&
                vc(i, t, e, n, r) &&
                (Math.abs(i[0][0] - i[1][0]) > Pc ||
                  Math.abs(i[0][1] - i[1][1]) > Pc)) ||
                delete Ic[o];
          })(a, u, s, c),
          (function (t, e, n, r) {
            var i,
              o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              p,
              d,
              v,
              g = Lc.length,
              y = !0;
            for (i = 0; i < g; ++i)
              if ((o = Lc[i])) {
                for (a = o.site, u = (s = o.halfedges).length; u--; )
                  Ic[s[u]] || s.splice(u, 1);
                for (u = 0, c = s.length; u < c; )
                  (d = (p = xc(o, Ic[s[u]]))[0]),
                  (v = p[1]),
                  (l = (f = mc(o, Ic[s[++u % c]]))[0]),
                  (h = f[1]),
                  (Math.abs(d - l) > Pc || Math.abs(v - h) > Pc) &&
                        (s.splice(
                          u,
                          0,
                          Ic.push(
                            pc(
                              a,
                              p,
                              Math.abs(d - t) < Pc && r - v > Pc
                                ? [t, Math.abs(l - t) < Pc ? h : r]
                                : Math.abs(v - r) < Pc && n - d > Pc
                                  ? [Math.abs(h - r) < Pc ? l : n, r]
                                  : Math.abs(d - n) < Pc && v - e > Pc
                                    ? [n, Math.abs(l - n) < Pc ? h : e]
                                    : Math.abs(v - e) < Pc && d - t > Pc
                                      ? [Math.abs(h - e) < Pc ? l : t, e]
                                      : null,
                            ),
                          ) - 1,
                        ),
                        ++c);
                c && (y = !1);
              }
            if (y) {
              var m,
                x,
                b,
                w = 1 / 0;
              for (i = 0, y = null; i < g; ++i)
                (o = Lc[i]) &&
                    (b = (m = (a = o.site)[0] - t) * m + (x = a[1] - e) * x) <
                      w &&
                    ((w = b), (y = o));
              if (y) {
                var _ = [t, e],
                  S = [t, r],
                  T = [n, r],
                  E = [n, e];
                y.halfedges.push(
                  Ic.push(pc((a = y.site), _, S)) - 1,
                  Ic.push(pc(a, S, T)) - 1,
                  Ic.push(pc(a, T, E)) - 1,
                  Ic.push(pc(a, E, _)) - 1,
                );
              }
            }
            for (i = 0; i < g; ++i)
              (o = Lc[i]) && (o.halfedges.length || delete Lc[i]);
          })(a, u, s, c);
        }
        (this.edges = Ic), (this.cells = Lc), (Oc = Dc = Ic = Lc = null);
      }
      qc.prototype = {
        constructor: qc,
        polygons: function () {
          var t = this.edges;
          return this.cells.map(function (e) {
            var n = e.halfedges.map(function (n) {
              return mc(e, t[n]);
            });
            return (n.data = e.site.data), n;
          });
        },
        triangles: function () {
          var t = [],
            e = this.edges;
          return (
            this.cells.forEach(function (n, r) {
              if ((o = (i = n.halfedges).length))
                for (
                  var i,
                    o,
                    a,
                    u,
                    s,
                    c,
                    f = n.site,
                    l = -1,
                    h = e[i[o - 1]],
                    p = h.left === f ? h.right : h.left;
                  ++l < o;

                )
                  (a = p),
                  (p = (h = e[i[l]]).left === f ? h.right : h.left),
                  a &&
                      p &&
                      r < a.index &&
                      r < p.index &&
                      ((s = a),
                      (c = p),
                      ((u = f)[0] - c[0]) * (s[1] - u[1]) -
                        (u[0] - s[0]) * (c[1] - u[1]) <
                        0) &&
                      t.push([f.data, a.data, p.data]);
            }),
            t
          );
        },
        links: function () {
          return this.edges
            .filter(function (t) {
              return t.right;
            })
            .map(function (t) {
              return { source: t.left.data, target: t.right.data };
            });
        },
        find: function (t, e, n) {
          for (
            var r, i, o = this, a = o._found || 0, u = o.cells.length;
            !(i = o.cells[a]);

          )
            if (++a >= u) return null;
          var s = t - i.site[0],
            c = e - i.site[1],
            f = s * s + c * c;
          do {
            (i = o.cells[(r = a)]),
            (a = null),
            i.halfedges.forEach(function (n) {
              var r = o.edges[n],
                u = r.left;
              if ((u !== i.site && u) || (u = r.right)) {
                var s = t - u[0],
                  c = e - u[1],
                  l = s * s + c * c;
                l < f && ((f = l), (a = u.index));
              }
            });
          } while (null !== a);
          return (o._found = r), null == n || f <= n * n ? i.site : null;
        },
      };
      Math.SQRT2;
      function Bc(t, e, n) {
        (this.k = t), (this.x = e), (this.y = n);
      }
      Bc.prototype = {
        constructor: Bc,
        scale: function (t) {
          return 1 === t ? this : new Bc(this.k * t, this.x, this.y);
        },
        translate: function (t, e) {
          return (0 === t) & (0 === e)
            ? this
            : new Bc(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      };
      new Bc(1, 0, 0);
      Bc.prototype;
      n.d(e, "c", function () {
        return i;
      }),
      n.d(e, "f", function () {
        return s;
      }),
      n.d(e, "l", function () {
        return g;
      }),
      n.d(e, "a", function () {
        return A;
      }),
      n.d(e, "b", function () {
        return M;
      }),
      n.d(e, "d", function () {
        return kr;
      }),
      n.d(e, "j", function () {
        return Rr;
      }),
      n.d(e, "g", function () {
        return Xr;
      }),
      n.d(e, "i", function () {
        return jo;
      }),
      n.d(e, "h", function () {
        return ya;
      }),
      n.d(e, "n", function () {
        return Ua;
      }),
      n.d(e, "o", function () {
        return Gs;
      }),
      n.d(e, "m", function () {
        return He;
      }),
      n.d(e, "p", function () {
        return $t;
      }),
      n.d(e, "q", function () {
        return Ks;
      }),
      n.d(e, "e", function () {
        return Rt;
      }),
      n.d(e, "k", function () {
        return oc;
      }),
      n.d(e, "r", function () {
        return Cu;
      });
    },
    function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }).call(this, n(249));
    },
    function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, n) {
      var r = n(4);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (t, e, n) {
      var r = n(3),
        i = n(75),
        o = n(12),
        a = n(56),
        u = n(107),
        s = n(150),
        c = i("wks"),
        f = r.Symbol,
        l = s ? f : (f && f.withoutSetter) || a;
      t.exports = function (t) {
        return (
          (o(c, t) && (u || "string" == typeof c[t])) ||
            (u && o(f, t) ? (c[t] = f[t]) : (c[t] = l("Symbol." + t))),
          c[t]
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        i = n(116),
        o = n(6),
        a = n(3),
        u = n(4),
        s = n(12),
        c = n(65),
        f = n(16),
        l = n(17),
        h = n(10).f,
        p = n(27),
        d = n(33),
        v = n(7),
        g = n(56),
        y = a.Int8Array,
        m = y && y.prototype,
        x = a.Uint8ClampedArray,
        b = x && x.prototype,
        w = y && p(y),
        _ = m && p(m),
        S = Object.prototype,
        T = S.isPrototypeOf,
        E = v("toStringTag"),
        A = g("TYPED_ARRAY_TAG"),
        M = i && !!d && "Opera" !== c(a.opera),
        C = !1,
        N = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8,
        },
        k = { BigInt64Array: 8, BigUint64Array: 8 },
        j = function (t) {
          if (!u(t)) return !1;
          var e = c(t);
          return s(N, e) || s(k, e);
        };
      for (r in N) a[r] || (M = !1);
      if (
        (!M || "function" != typeof w || w === Function.prototype) &&
        ((w = function () {
          throw TypeError("Incorrect invocation");
        }),
        M)
      )
        for (r in N) a[r] && d(a[r], w);
      if ((!M || !_ || _ === S) && ((_ = w.prototype), M))
        for (r in N) a[r] && d(a[r].prototype, _);
      if ((M && p(b) !== _ && d(b, _), o && !s(_, E)))
        for (r in ((C = !0),
        h(_, E, {
          get: function () {
            return u(this) ? this[A] : void 0;
          },
        }),
        N))
          a[r] && f(a[r], A, r);
      t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: M,
        TYPED_ARRAY_TAG: C && A,
        aTypedArray: function (t) {
          if (j(t)) return t;
          throw TypeError("Target is not a typed array");
        },
        aTypedArrayConstructor: function (t) {
          if (d) {
            if (T.call(w, t)) return t;
          } else
            for (var e in N)
              if (s(N, r)) {
                var n = a[e];
                if (n && (t === n || T.call(n, t))) return t;
              }
          throw TypeError("Target is not a typed array constructor");
        },
        exportTypedArrayMethod: function (t, e, n) {
          if (o) {
            if (n)
              for (var r in N) {
                var i = a[r];
                if (i && s(i.prototype, t))
                  try {
                    delete i.prototype[t];
                  } catch (t) {}
              }
            (_[t] && !n) || l(_, t, n ? e : (M && m[t]) || e);
          }
        },
        exportTypedArrayStaticMethod: function (t, e, n) {
          var r, i;
          if (o) {
            if (d) {
              if (n)
                for (r in N)
                  if ((i = a[r]) && s(i, t))
                    try {
                      delete i[t];
                    } catch (t) {}
              if (w[t] && !n) return;
              try {
                return l(w, t, n ? e : (M && w[t]) || e);
              } catch (t) {}
            }
            for (r in N) !(i = a[r]) || (i[t] && !n) || l(i, t, e);
          }
        },
        isView: function (t) {
          if (!u(t)) return !1;
          var e = c(t);
          return "DataView" === e || s(N, e) || s(k, e);
        },
        isTypedArray: j,
        TypedArray: w,
        TypedArrayPrototype: _,
      };
    },
    function (t, e, n) {
      var r = n(26),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    },
    function (t, e, n) {
      var r = n(6),
        i = n(146),
        o = n(5),
        a = n(28),
        u = Object.defineProperty;
      e.f = r
        ? u
        : function (t, e, n) {
          if ((o(t), (e = a(e, !0)), o(n), i))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
    },
    function (t, e, n) {
      var r = n(15);
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    function (t, e, n) {
      var r = n(11),
        i = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return i.call(r(t), e);
      };
    },
    function (t, e, n) {
      var r = n(38),
        i = n(55),
        o = n(11),
        a = n(9),
        u = n(62),
        s = [].push,
        c = function (t) {
          var e = 1 == t,
            n = 2 == t,
            c = 3 == t,
            f = 4 == t,
            l = 6 == t,
            h = 7 == t,
            p = 5 == t || l;
          return function (d, v, g, y) {
            for (
              var m,
                x,
                b = o(d),
                w = i(b),
                _ = r(v, g, 3),
                S = a(w.length),
                T = 0,
                E = y || u,
                A = e ? E(d, S) : n || h ? E(d, 0) : void 0;
              S > T;
              T++
            )
              if ((p || T in w) && ((x = _((m = w[T]), T, b)), t))
                if (e) A[T] = x;
                else if (x)
                  switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return m;
                  case 6:
                    return T;
                  case 2:
                    s.call(A, m);
                  }
                else
                  switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    s.call(A, m);
                  }
            return l ? -1 : c || f ? f : A;
          };
        };
      t.exports = {
        forEach: c(0),
        map: c(1),
        filter: c(2),
        some: c(3),
        every: c(4),
        find: c(5),
        findIndex: c(6),
        filterOut: c(7),
      };
    },
    function (t, e, n) {
      var r = n(6),
        i = n(73),
        o = n(31),
        a = n(21),
        u = n(28),
        s = n(12),
        c = n(146),
        f = Object.getOwnPropertyDescriptor;
      e.f = r
        ? f
        : function (t, e) {
          if (((t = a(t)), (e = u(e, !0)), c))
            try {
              return f(t, e);
            } catch (t) {}
          if (s(t, e)) return o(!i.f.call(t, e), t[e]);
        };
    },
    function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    function (t, e, n) {
      var r = n(6),
        i = n(10),
        o = n(31);
      t.exports = r
        ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
        : function (t, e, n) {
          return (t[e] = n), t;
        };
    },
    function (t, e, n) {
      var r = n(3),
        i = n(16),
        o = n(12),
        a = n(100),
        u = n(101),
        s = n(18),
        c = s.get,
        f = s.enforce,
        l = String(String).split("String");
      (t.exports = function (t, e, n, u) {
        var s,
          c = !!u && !!u.unsafe,
          h = !!u && !!u.enumerable,
          p = !!u && !!u.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || o(n, "name") || i(n, "name", e),
          (s = f(n)).source ||
            (s.source = l.join("string" == typeof e ? e : ""))),
        t !== r
          ? (c ? !p && t[e] && (h = !0) : delete t[e],
          h ? (t[e] = n) : i(t, e, n))
          : h
            ? (t[e] = n)
            : a(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && c(this).source) || u(this);
      });
    },
    function (t, e, n) {
      var r,
        i,
        o,
        a = n(147),
        u = n(3),
        s = n(4),
        c = n(16),
        f = n(12),
        l = n(102),
        h = n(74),
        p = n(57),
        d = u.WeakMap;
      if (a || l.state) {
        var v = l.state || (l.state = new d()),
          g = v.get,
          y = v.has,
          m = v.set;
        (r = function (t, e) {
          if (y.call(v, t)) throw new TypeError("Object already initialized");
          return (e.facade = t), m.call(v, t, e), e;
        }),
        (i = function (t) {
          return g.call(v, t) || {};
        }),
        (o = function (t) {
          return y.call(v, t);
        });
      } else {
        var x = h("state");
        (p[x] = !0),
        (r = function (t, e) {
          if (f(t, x)) throw new TypeError("Object already initialized");
          return (e.facade = t), c(t, x, e), e;
        }),
        (i = function (t) {
          return f(t, x) ? t[x] : {};
        }),
        (o = function (t) {
          return f(t, x);
        });
      }
      t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function (t) {
          return o(t) ? i(t) : r(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var n;
            if (!s(e) || (n = i(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        },
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(104),
        i = n(12),
        o = n(153),
        a = n(10).f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || a(e, t, { value: o.f(t) });
      };
    },
    function (t, e, n) {
      var r = n(55),
        i = n(15);
      t.exports = function (t) {
        return r(i(t));
      };
    },
    function (t, e, n) {
      var r = n(104),
        i = n(3),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2
          ? o(r[t]) || o(i[t])
          : (r[t] && r[t][e]) || (i[t] && i[t][e]);
      };
    },
    function (t, e, n) {
      var r = n(15),
        i = /"/g;
      t.exports = function (t, e, n, o) {
        var a = String(r(t)),
          u = "<" + e;
        return (
          "" !== n &&
            (u += " " + n + "=\"" + String(o).replace(i, "&quot;") + "\""),
          u + ">" + a + "</" + e + ">"
        );
      };
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = function (t) {
        return r(function () {
          var e = ""[t]("\"");
          return e !== e.toLowerCase() || e.split("\"").length > 3;
        });
      };
    },
    function (t, e) {
      t.exports = !1;
    },
    function (t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    function (t, e, n) {
      var r = n(12),
        i = n(11),
        o = n(74),
        a = n(109),
        u = o("IE_PROTO"),
        s = Object.prototype;
      t.exports = a
        ? Object.getPrototypeOf
        : function (t) {
          return (
            (t = i(t)),
            r(t, u)
              ? t[u]
              : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? s
                  : null
          );
        };
    },
    function (t, e, n) {
      var r = n(4);
      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
          return i;
        if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t))))
          return i;
        if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e, n) {
      var r = n(10).f,
        i = n(12),
        o = n(7)("toStringTag");
      t.exports = function (t, e, n) {
        t &&
          !i((t = n ? t : t.prototype), o) &&
          r(t, o, { configurable: !0, value: e });
      };
    },
    function (t, e, n) {
      var r,
        i = n(5),
        o = n(108),
        a = n(105),
        u = n(57),
        s = n(151),
        c = n(99),
        f = n(74),
        l = f("IE_PROTO"),
        h = function () {},
        p = function (t) {
          return "<script>" + t + "</script>";
        },
        d = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e;
          d = r
            ? (function (t) {
              t.write(p("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(r)
            : (((e = c("iframe")).style.display = "none"),
            s.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
          for (var n = a.length; n--; ) delete d.prototype[a[n]];
          return d();
        };
      (u[l] = !0),
      (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((h.prototype = i(t)),
                (n = new h()),
                (h.prototype = null),
                (n[l] = t))
                : (n = d()),
              void 0 === e ? n : o(n, e)
            );
          });
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    function (t, e, n) {
      var r = n(5),
        i = n(155);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__",
              ).set).call(n, []),
              (e = n instanceof Array);
            } catch (t) {}
            return function (n, o) {
              return r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n;
            };
          })()
          : void 0);
    },
    function (t, e, n) {
      "use strict";
      var r = n(1);
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1,
            );
          })
        );
      };
    },
    function (t, e, n) {
      var r = n(5),
        i = n(19),
        o = n(7)("species");
      t.exports = function (t, e) {
        var n,
          a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(3),
        o = n(6),
        a = n(125),
        u = n(8),
        s = n(79),
        c = n(41),
        f = n(31),
        l = n(16),
        h = n(9),
        p = n(163),
        d = n(181),
        v = n(28),
        g = n(12),
        y = n(65),
        m = n(4),
        x = n(30),
        b = n(33),
        w = n(43).f,
        _ = n(182),
        S = n(13).forEach,
        T = n(49),
        E = n(10),
        A = n(14),
        M = n(18),
        C = n(81),
        N = M.get,
        k = M.set,
        j = E.f,
        R = A.f,
        O = Math.round,
        L = i.RangeError,
        D = s.ArrayBuffer,
        I = s.DataView,
        P = u.NATIVE_ARRAY_BUFFER_VIEWS,
        U = u.TYPED_ARRAY_TAG,
        F = u.TypedArray,
        q = u.TypedArrayPrototype,
        B = u.aTypedArrayConstructor,
        H = u.isTypedArray,
        z = function (t, e) {
          for (var n = 0, r = e.length, i = new (B(t))(r); r > n; )
            i[n] = e[n++];
          return i;
        },
        W = function (t, e) {
          j(t, e, {
            get: function () {
              return N(this)[e];
            },
          });
        },
        $ = function (t) {
          var e;
          return (
            t instanceof D ||
            "ArrayBuffer" == (e = y(t)) ||
            "SharedArrayBuffer" == e
          );
        },
        Y = function (t, e) {
          return (
            H(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
          );
        },
        V = function (t, e) {
          return Y(t, (e = v(e, !0))) ? f(2, t[e]) : R(t, e);
        },
        X = function (t, e, n) {
          return !(Y(t, (e = v(e, !0))) && m(n) && g(n, "value")) ||
            g(n, "get") ||
            g(n, "set") ||
            n.configurable ||
            (g(n, "writable") && !n.writable) ||
            (g(n, "enumerable") && !n.enumerable)
            ? j(t, e, n)
            : ((t[e] = n.value), t);
        };
      o
        ? (P ||
            ((A.f = V),
            (E.f = X),
            W(q, "buffer"),
            W(q, "byteOffset"),
            W(q, "byteLength"),
            W(q, "length")),
        r(
          { target: "Object", stat: !0, forced: !P },
          { getOwnPropertyDescriptor: V, defineProperty: X },
        ),
        (t.exports = function (t, e, n) {
          var o = t.match(/\d+$/)[0] / 8,
            u = t + (n ? "Clamped" : "") + "Array",
            s = "get" + t,
            f = "set" + t,
            v = i[u],
            g = v,
            y = g && g.prototype,
            E = {},
            A = function (t, e) {
              j(t, e, {
                get: function () {
                  return (function (t, e) {
                    var n = N(t);
                    return n.view[s](e * o + n.byteOffset, !0);
                  })(this, e);
                },
                set: function (t) {
                  return (function (t, e, r) {
                    var i = N(t);
                    n && (r = (r = O(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                    i.view[f](e * o + i.byteOffset, r, !0);
                  })(this, e, t);
                },
                enumerable: !0,
              });
            };
          P
            ? a &&
                ((g = e(function (t, e, n, r) {
                  return (
                    c(t, g, u),
                    C(
                      m(e)
                        ? $(e)
                          ? void 0 !== r
                            ? new v(e, d(n, o), r)
                            : void 0 !== n
                              ? new v(e, d(n, o))
                              : new v(e)
                          : H(e)
                            ? z(g, e)
                            : _.call(g, e)
                        : new v(p(e)),
                      t,
                      g,
                    )
                  );
                })),
                b && b(g, F),
                S(w(v), function (t) {
                  t in g || l(g, t, v[t]);
                }),
                (g.prototype = y))
            : ((g = e(function (t, e, n, r) {
              c(t, g, u);
              var i,
                a,
                s,
                f = 0,
                l = 0;
              if (m(e)) {
                if (!$(e)) return H(e) ? z(g, e) : _.call(g, e);
                (i = e), (l = d(n, o));
                var v = e.byteLength;
                if (void 0 === r) {
                  if (v % o) throw L("Wrong length");
                  if ((a = v - l) < 0) throw L("Wrong length");
                } else if ((a = h(r) * o) + l > v) throw L("Wrong length");
                s = a / o;
              } else (s = p(e)), (i = new D((a = s * o)));
              for (
                k(t, {
                  buffer: i,
                  byteOffset: l,
                  byteLength: a,
                  length: s,
                  view: new I(i),
                });
                f < s;

              )
                A(t, f++);
            })),
            b && b(g, F),
            (y = g.prototype = x(q))),
          y.constructor !== g && l(y, "constructor", g),
          U && l(y, U, u),
          (E[u] = g),
          r({ global: !0, forced: g != v, sham: !P }, E),
          "BYTES_PER_ELEMENT" in g || l(g, "BYTES_PER_ELEMENT", o),
          "BYTES_PER_ELEMENT" in y || l(y, "BYTES_PER_ELEMENT", o),
          T(u);
        }))
        : (t.exports = function () {});
    },
    function (t, e, n) {
      var r = n(26),
        i = Math.max,
        o = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e);
      };
    },
    function (t, e, n) {
      var r = n(19);
      t.exports = function (t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e, n) {
      var r = n(5),
        i = n(110),
        o = n(9),
        a = n(38),
        u = n(64),
        s = n(156),
        c = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
      t.exports = function (t, e, n) {
        var f,
          l,
          h,
          p,
          d,
          v,
          g,
          y = n && n.that,
          m = !(!n || !n.AS_ENTRIES),
          x = !(!n || !n.IS_ITERATOR),
          b = !(!n || !n.INTERRUPTED),
          w = a(e, y, 1 + m + b),
          _ = function (t) {
            return f && s(f), new c(!0, t);
          },
          S = function (t) {
            return m
              ? (r(t), b ? w(t[0], t[1], _) : w(t[0], t[1]))
              : b
                ? w(t, _)
                : w(t);
          };
        if (x) f = t;
        else {
          if ("function" != typeof (l = u(t)))
            throw TypeError("Target is not iterable");
          if (i(l)) {
            for (h = 0, p = o(t.length); p > h; h++)
              if ((d = S(t[h])) && d instanceof c) return d;
            return new c(!1);
          }
          f = l.call(t);
        }
        for (v = f.next; !(g = v.call(f)).done; ) {
          try {
            d = S(g.value);
          } catch (t) {
            throw (s(f), t);
          }
          if ("object" == typeof d && d && d instanceof c) return d;
        }
        return new c(!1);
      };
    },
    function (t, e, n) {
      var r = n(7),
        i = n(30),
        o = n(10),
        a = r("unscopables"),
        u = Array.prototype;
      null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        u[a][t] = !0;
      });
    },
    function (t, e) {
      t.exports = function (t, e, n) {
        if (!(t instanceof e))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t;
      };
    },
    ,
    function (t, e, n) {
      var r = n(149),
        i = n(105).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, i);
        };
    },
    function (t, e, n) {
      var r = n(32);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(28),
        i = n(10),
        o = n(31);
      t.exports = function (t, e, n) {
        var a = r(e);
        a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
      };
    },
    function (t, e, n) {
      var r = n(57),
        i = n(4),
        o = n(12),
        a = n(10).f,
        u = n(56),
        s = n(67),
        c = u("meta"),
        f = 0,
        l =
          Object.isExtensible ||
          function () {
            return !0;
          },
        h = function (t) {
          a(t, c, { value: { objectID: "O" + ++f, weakData: {} } });
        },
        p = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!i(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, c)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              h(t);
            }
            return t[c].objectID;
          },
          getWeakData: function (t, e) {
            if (!o(t, c)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              h(t);
            }
            return t[c].weakData;
          },
          onFreeze: function (t) {
            return s && p.REQUIRED && l(t) && !o(t, c) && h(t), t;
          },
        });
      r[c] = !0;
    },
    function (t, e, n) {
      var r,
        i,
        o = n(3),
        a = n(60),
        u = o.process,
        s = u && u.versions,
        c = s && s.v8;
      c
        ? (i = (r = c.split("."))[0] < 4 ? 1 : r[0] + r[1])
        : a &&
          (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = a.match(/Chrome\/(\d+)/)) &&
          (i = r[1]),
      (t.exports = i && +i);
    },
    function (t, e, n) {
      var r = n(32),
        i = n(3);
      t.exports = "process" == r(i.process);
    },
    function (t, e, n) {
      "use strict";
      var r = n(22),
        i = n(10),
        o = n(7),
        a = n(6),
        u = o("species");
      t.exports = function (t) {
        var e = r(t),
          n = i.f;
        a &&
          e &&
          !e[u] &&
          n(e, u, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, e, n) {
      var r = n(17);
      t.exports = function (t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t;
      };
    },
    function (t, e, n) {
      var r = n(15),
        i = "[" + n(83) + "]",
        o = RegExp("^" + i + i + "*"),
        a = RegExp(i + i + "*$"),
        u = function (t) {
          return function (e) {
            var n = String(r(e));
            return (
              1 & t && (n = n.replace(o, "")),
              2 & t && (n = n.replace(a, "")),
              n
            );
          };
        };
      t.exports = { start: u(1), end: u(2), trim: u(3) };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5);
      t.exports = function () {
        var t = r(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(86);
      r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    ,
    function (t, e, n) {
      var r = n(1),
        i = n(32),
        o = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
          return "String" == i(t) ? o.call(t, "") : Object(t);
        }
        : Object;
    },
    function (t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + r).toString(36)
        );
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, n) {
      var r = n(21),
        i = n(9),
        o = n(37),
        a = function (t) {
          return function (e, n, a) {
            var u,
              s = r(e),
              c = i(s.length),
              f = o(a, c);
            if (t && n != n) {
              for (; c > f; ) if ((u = s[f++]) != u) return !0;
            } else
              for (; c > f; f++)
                if ((t || f in s) && s[f] === n) return t || f || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e, n) {
      var r = n(1),
        i = /#|\.prototype\./,
        o = function (t, e) {
          var n = u[a(t)];
          return n == c || (n != s && ("function" == typeof e ? r(e) : !!e));
        },
        a = (o.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        u = (o.data = {}),
        s = (o.NATIVE = "N"),
        c = (o.POLYFILL = "P");
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(22);
      t.exports = r("navigator", "userAgent") || "";
    },
    function (t, e, n) {
      var r = n(149),
        i = n(105);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i);
        };
    },
    function (t, e, n) {
      var r = n(4),
        i = n(44),
        o = n(7)("species");
      t.exports = function (t, e) {
        var n;
        return (
          i(t) &&
            ("function" != typeof (n = t.constructor) ||
            (n !== Array && !i(n.prototype))
              ? r(n) && null === (n = n[o]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        );
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, n) {
      var r = n(65),
        i = n(63),
        o = n(7)("iterator");
      t.exports = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    function (t, e, n) {
      var r = n(111),
        i = n(32),
        o = n(7)("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })(),
          );
      t.exports = r
        ? i
        : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
              ? "Null"
              : "string" ==
                typeof (n = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), o))
                ? n
                : a
                  ? i(e)
                  : "Object" == (r = i(e)) && "function" == typeof e.callee
                    ? "Arguments"
                    : r;
        };
    },
    function (t, e, n) {
      var r = n(1),
        i = n(7),
        o = n(47),
        a = i("species");
      t.exports = function (t) {
        return (
          o >= 51 ||
          !r(function () {
            var e = [];
            return (
              ((e.constructor = {})[a] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    function (t, e, n) {
      var r = n(4),
        i = n(32),
        o = n(7)("match");
      t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(1);
      function i(t, e) {
        return RegExp(t, e);
      }
      (e.UNSUPPORTED_Y = r(function () {
        var t = i("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
      (e.BROKEN_CARET = r(function () {
        var t = i("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }));
    },
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({ 1: 2 }, 1);
      e.f = o
        ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
        : r;
    },
    function (t, e, n) {
      var r = n(75),
        i = n(56),
        o = r("keys");
      t.exports = function (t) {
        return o[t] || (o[t] = i(t));
      };
    },
    function (t, e, n) {
      var r = n(25),
        i = n(102);
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.12.1",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, e, n) {
      var r = n(7)("iterator"),
        i = !1;
      try {
        var o = 0,
          a = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              i = !0;
            },
          };
        (a[r] = function () {
          return this;
        }),
        Array.from(a, function () {
          throw 2;
        });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
          var o = {};
          (o[r] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
          t(o);
        } catch (t) {}
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(21),
        i = n(40),
        o = n(63),
        a = n(18),
        u = n(113),
        s = a.set,
        c = a.getterFor("Array Iterator");
      (t.exports = u(
        Array,
        "Array",
        function (t, e) {
          s(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
        },
        function () {
          var t = c(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
          return !e || r >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
              ? { value: r, done: !1 }
              : "values" == n
                ? { value: e[r], done: !1 }
                : { value: [r, e[r]], done: !1 };
        },
        "values",
      )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
    },
    function (t, e, n) {
      var r = n(19),
        i = n(11),
        o = n(55),
        a = n(9),
        u = function (t) {
          return function (e, n, u, s) {
            r(n);
            var c = i(e),
              f = o(c),
              l = a(c.length),
              h = t ? l - 1 : 0,
              p = t ? -1 : 1;
            if (u < 2)
              for (;;) {
                if (h in f) {
                  (s = f[h]), (h += p);
                  break;
                }
                if (((h += p), t ? h < 0 : l <= h))
                  throw TypeError(
                    "Reduce of empty array with no initial value",
                  );
              }
            for (; t ? h >= 0 : l > h; h += p) h in f && (s = n(s, f[h], h, c));
            return s;
          };
        };
      t.exports = { left: u(!1), right: u(!0) };
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(6),
        o = n(116),
        a = n(16),
        u = n(50),
        s = n(1),
        c = n(41),
        f = n(26),
        l = n(9),
        h = n(163),
        p = n(293),
        d = n(27),
        v = n(33),
        g = n(43).f,
        y = n(10).f,
        m = n(112),
        x = n(29),
        b = n(18),
        w = b.get,
        _ = b.set,
        S = r.ArrayBuffer,
        T = S,
        E = r.DataView,
        A = E && E.prototype,
        M = Object.prototype,
        C = r.RangeError,
        N = p.pack,
        k = p.unpack,
        j = function (t) {
          return [255 & t];
        },
        R = function (t) {
          return [255 & t, (t >> 8) & 255];
        },
        O = function (t) {
          return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
        },
        L = function (t) {
          return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
        },
        D = function (t) {
          return N(t, 23, 4);
        },
        I = function (t) {
          return N(t, 52, 8);
        },
        P = function (t, e) {
          y(t.prototype, e, {
            get: function () {
              return w(this)[e];
            },
          });
        },
        U = function (t, e, n, r) {
          var i = h(n),
            o = w(t);
          if (i + e > o.byteLength) throw C("Wrong index");
          var a = w(o.buffer).bytes,
            u = i + o.byteOffset,
            s = a.slice(u, u + e);
          return r ? s : s.reverse();
        },
        F = function (t, e, n, r, i, o) {
          var a = h(n),
            u = w(t);
          if (a + e > u.byteLength) throw C("Wrong index");
          for (
            var s = w(u.buffer).bytes, c = a + u.byteOffset, f = r(+i), l = 0;
            l < e;
            l++
          )
            s[c + l] = f[o ? l : e - l - 1];
        };
      if (o) {
        if (
          !s(function () {
            S(1);
          }) ||
          !s(function () {
            new S(-1);
          }) ||
          s(function () {
            return new S(), new S(1.5), new S(NaN), "ArrayBuffer" != S.name;
          })
        ) {
          for (
            var q,
              B = ((T = function (t) {
                return c(this, T), new S(h(t));
              }).prototype = S.prototype),
              H = g(S),
              z = 0;
            H.length > z;

          )
            (q = H[z++]) in T || a(T, q, S[q]);
          B.constructor = T;
        }
        v && d(A) !== M && v(A, M);
        var W = new E(new T(2)),
          $ = A.setInt8;
        W.setInt8(0, 2147483648),
        W.setInt8(1, 2147483649),
        (!W.getInt8(0) && W.getInt8(1)) ||
            u(
              A,
              {
                setInt8: function (t, e) {
                  $.call(this, t, (e << 24) >> 24);
                },
                setUint8: function (t, e) {
                  $.call(this, t, (e << 24) >> 24);
                },
              },
              { unsafe: !0 },
            );
      } else
        (T = function (t) {
          c(this, T, "ArrayBuffer");
          var e = h(t);
          _(this, { bytes: m.call(new Array(e), 0), byteLength: e }),
          i || (this.byteLength = e);
        }),
        (E = function (t, e, n) {
          c(this, E, "DataView"), c(t, T, "DataView");
          var r = w(t).byteLength,
            o = f(e);
          if (o < 0 || o > r) throw C("Wrong offset");
          if (o + (n = void 0 === n ? r - o : l(n)) > r)
            throw C("Wrong length");
          _(this, { buffer: t, byteLength: n, byteOffset: o }),
          i ||
                ((this.buffer = t),
                (this.byteLength = n),
                (this.byteOffset = o));
        }),
        i &&
            (P(T, "byteLength"),
            P(E, "buffer"),
            P(E, "byteLength"),
            P(E, "byteOffset")),
        u(E.prototype, {
          getInt8: function (t) {
            return (U(this, 1, t)[0] << 24) >> 24;
          },
          getUint8: function (t) {
            return U(this, 1, t)[0];
          },
          getInt16: function (t) {
            var e = U(
              this,
              2,
              t,
              arguments.length > 1 ? arguments[1] : void 0,
            );
            return (((e[1] << 8) | e[0]) << 16) >> 16;
          },
          getUint16: function (t) {
            var e = U(
              this,
              2,
              t,
              arguments.length > 1 ? arguments[1] : void 0,
            );
            return (e[1] << 8) | e[0];
          },
          getInt32: function (t) {
            return L(
              U(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
            );
          },
          getUint32: function (t) {
            return (
              L(
                U(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
              ) >>> 0
            );
          },
          getFloat32: function (t) {
            return k(
              U(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
              23,
            );
          },
          getFloat64: function (t) {
            return k(
              U(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
              52,
            );
          },
          setInt8: function (t, e) {
            F(this, 1, t, j, e);
          },
          setUint8: function (t, e) {
            F(this, 1, t, j, e);
          },
          setInt16: function (t, e) {
            F(this, 2, t, R, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint16: function (t, e) {
            F(this, 2, t, R, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setInt32: function (t, e) {
            F(this, 4, t, O, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint32: function (t, e) {
            F(this, 4, t, O, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat32: function (t, e) {
            F(this, 4, t, D, e, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat64: function (t, e) {
            F(this, 8, t, I, e, arguments.length > 2 ? arguments[2] : void 0);
          },
        });
      x(T, "ArrayBuffer"),
      x(E, "DataView"),
      (t.exports = { ArrayBuffer: T, DataView: E });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(3),
        o = n(59),
        a = n(17),
        u = n(46),
        s = n(39),
        c = n(41),
        f = n(4),
        l = n(1),
        h = n(76),
        p = n(29),
        d = n(81);
      t.exports = function (t, e, n) {
        var v = -1 !== t.indexOf("Map"),
          g = -1 !== t.indexOf("Weak"),
          y = v ? "set" : "add",
          m = i[t],
          x = m && m.prototype,
          b = m,
          w = {},
          _ = function (t) {
            var e = x[t];
            a(
              x,
              t,
              "add" == t
                ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
                : "delete" == t
                  ? function (t) {
                    return !(g && !f(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                  : "get" == t
                    ? function (t) {
                      return g && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                    }
                    : "has" == t
                      ? function (t) {
                        return !(g && !f(t)) && e.call(this, 0 === t ? 0 : t);
                      }
                      : function (t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                      },
            );
          };
        if (
          o(
            t,
            "function" != typeof m ||
              !(
                g ||
                (x.forEach &&
                  !l(function () {
                    new m().entries().next();
                  }))
              ),
          )
        )
          (b = n.getConstructor(e, t, v, y)), (u.REQUIRED = !0);
        else if (o(t, !0)) {
          var S = new b(),
            T = S[y](g ? {} : -0, 1) != S,
            E = l(function () {
              S.has(1);
            }),
            A = h(function (t) {
              new m(t);
            }),
            M =
              !g &&
              l(function () {
                for (var t = new m(), e = 5; e--; ) t[y](e, e);
                return !t.has(-0);
              });
          A ||
            (((b = e(function (e, n) {
              c(e, b, t);
              var r = d(new m(), e, b);
              return null != n && s(n, r[y], { that: r, AS_ENTRIES: v }), r;
            })).prototype = x),
            (x.constructor = b)),
          (E || M) && (_("delete"), _("has"), v && _("get")),
          (M || T) && _(y),
          g && x.clear && delete x.clear;
        }
        return (
          (w[t] = b),
          r({ global: !0, forced: b != m }, w),
          p(b, t),
          g || n.setStrong(b, t, v),
          b
        );
      };
    },
    function (t, e, n) {
      var r = n(4),
        i = n(33);
      t.exports = function (t, e, n) {
        var o, a;
        return (
          i &&
            "function" == typeof (o = e.constructor) &&
            o !== n &&
            r((a = o.prototype)) &&
            a !== n.prototype &&
            i(t, a),
          t
        );
      };
    },
    function (t, e) {
      var n = Math.expm1,
        r = Math.exp;
      t.exports =
        !n ||
        n(10) > 22025.465794806718 ||
        n(10) < 22025.465794806718 ||
        -2e-17 != n(-2e-17)
          ? function (t) {
            return 0 == (t = +t)
              ? t
              : t > -1e-6 && t < 1e-6
                ? t + (t * t) / 2
                : r(t) - 1;
          }
          : n;
    },
    function (t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    function (t, e, n) {
      "use strict";
      var r = n(25),
        i = n(3),
        o = n(1);
      t.exports =
        r ||
        !o(function () {
          var t = Math.random();
          __defineSetter__.call(null, t, function () {}), delete i[t];
        });
    },
    function (t, e, n) {
      "use strict";
      var r = n(19),
        i = function (t) {
          var e, n;
          (this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (e = t), (n = r);
          })),
          (this.resolve = r(e)),
          (this.reject = r(n));
        };
      t.exports.f = function (t) {
        return new i(t);
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        i,
        o = n(52),
        a = n(69),
        u = n(75),
        s = RegExp.prototype.exec,
        c = u("native-string-replace", String.prototype.replace),
        f = s,
        l =
          ((r = /a/),
          (i = /b*/g),
          s.call(r, "a"),
          s.call(i, "a"),
          0 !== r.lastIndex || 0 !== i.lastIndex),
        h = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        p = void 0 !== /()??/.exec("")[1];
      (l || p || h) &&
        (f = function (t) {
          var e,
            n,
            r,
            i,
            a = this,
            u = h && a.sticky,
            f = o.call(a),
            d = a.source,
            v = 0,
            g = t;
          return (
            u &&
              (-1 === (f = f.replace("y", "")).indexOf("g") && (f += "g"),
              (g = String(t).slice(a.lastIndex)),
              a.lastIndex > 0 &&
                (!a.multiline ||
                  (a.multiline && "\n" !== t[a.lastIndex - 1])) &&
                ((d = "(?: " + d + ")"), (g = " " + g), v++),
              (n = new RegExp("^(?:" + d + ")", f))),
            p && (n = new RegExp("^" + d + "$(?!\\s)", f)),
            l && (e = a.lastIndex),
            (r = s.call(u ? n : a, g)),
            u
              ? r
                ? ((r.input = r.input.slice(v)),
                (r[0] = r[0].slice(v)),
                (r.index = a.lastIndex),
                (a.lastIndex += r[0].length))
                : (a.lastIndex = 0)
              : l && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
            p &&
              r &&
              r.length > 1 &&
              c.call(r[0], n, function () {
                for (i = 1; i < arguments.length - 2; i++)
                  void 0 === arguments[i] && (r[i] = void 0);
              }),
            r
          );
        }),
      (t.exports = f);
    },
    function (t, e, n) {
      var r = n(26),
        i = n(15),
        o = function (t) {
          return function (e, n) {
            var o,
              a,
              u = String(i(e)),
              s = r(n),
              c = u.length;
            return s < 0 || s >= c
              ? t
                ? ""
                : void 0
              : (o = u.charCodeAt(s)) < 55296 ||
                o > 56319 ||
                s + 1 === c ||
                (a = u.charCodeAt(s + 1)) < 56320 ||
                a > 57343
                ? t
                  ? u.charAt(s)
                  : o
                : t
                  ? u.slice(s, s + 2)
                  : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: o(!1), charAt: o(!0) };
    },
    function (t, e, n) {
      "use strict";
      n(53);
      var r = n(17),
        i = n(86),
        o = n(1),
        a = n(7),
        u = n(16),
        s = a("species"),
        c = RegExp.prototype,
        f = !o(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        l = "$0" === "a".replace(/./, "$0"),
        h = a("replace"),
        p = !!/./[h] && "" === /./[h]("a", "$0"),
        d = !o(function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var n = "ab".split(t);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        });
      t.exports = function (t, e, n, h) {
        var v = a(t),
          g = !o(function () {
            var e = {};
            return (
              (e[v] = function () {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          y =
            g &&
            !o(function () {
              var e = !1,
                n = /a/;
              return (
                "split" === t &&
                  (((n = {}).constructor = {}),
                  (n.constructor[s] = function () {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[v] = /./[v])),
                (n.exec = function () {
                  return (e = !0), null;
                }),
                n[v](""),
                !e
              );
            });
        if (
          !g ||
          !y ||
          ("replace" === t && (!f || !l || p)) ||
          ("split" === t && !d)
        ) {
          var m = /./[v],
            x = n(
              v,
              ""[t],
              function (t, e, n, r, o) {
                var a = e.exec;
                return a === i || a === c.exec
                  ? g && !o
                    ? { done: !0, value: m.call(e, n, r) }
                    : { done: !0, value: t.call(n, e, r) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: l,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
              },
            ),
            b = x[0],
            w = x[1];
          r(String.prototype, t, b),
          r(
            c,
            v,
            2 == e
              ? function (t, e) {
                return w.call(t, this, e);
              }
              : function (t) {
                return w.call(t, this);
              },
          );
        }
        h && u(c[v], "sham", !0);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(87).charAt;
      t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1);
      };
    },
    function (t, e, n) {
      var r = n(32),
        i = n(86);
      t.exports = function (t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
          var o = n.call(t, e);
          if ("object" != typeof o)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null",
            );
          return o;
        }
        if ("RegExp" !== r(t))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(88),
        i = n(5),
        o = n(9),
        a = n(26),
        u = n(15),
        s = n(89),
        c = n(180),
        f = n(90),
        l = Math.max,
        h = Math.min;
      r("replace", 2, function (t, e, n, r) {
        var p = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
          d = r.REPLACE_KEEPS_$0,
          v = p ? "$" : "$0";
        return [
          function (n, r) {
            var i = u(this),
              o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r);
          },
          function (t, r) {
            if ((!p && d) || ("string" == typeof r && -1 === r.indexOf(v))) {
              var u = n(e, t, this, r);
              if (u.done) return u.value;
            }
            var g = i(t),
              y = String(this),
              m = "function" == typeof r;
            m || (r = String(r));
            var x = g.global;
            if (x) {
              var b = g.unicode;
              g.lastIndex = 0;
            }
            for (var w = []; ; ) {
              var _ = f(g, y);
              if (null === _) break;
              if ((w.push(_), !x)) break;
              "" === String(_[0]) && (g.lastIndex = s(y, o(g.lastIndex), b));
            }
            for (var S, T = "", E = 0, A = 0; A < w.length; A++) {
              _ = w[A];
              for (
                var M = String(_[0]),
                  C = l(h(a(_.index), y.length), 0),
                  N = [],
                  k = 1;
                k < _.length;
                k++
              )
                N.push(void 0 === (S = _[k]) ? S : String(S));
              var j = _.groups;
              if (m) {
                var R = [M].concat(N, C, y);
                void 0 !== j && R.push(j);
                var O = String(r.apply(void 0, R));
              } else O = c(M, y, C, N, j, r);
              C >= E && ((T += y.slice(E, C) + O), (E = C + M.length));
            }
            return T + y.slice(E);
          },
        ];
      });
    },
    function (t, e, n) {
      var r = n(3),
        i = n(184),
        o = n(159),
        a = n(16);
      for (var u in i) {
        var s = r[u],
          c = s && s.prototype;
        if (c && c.forEach !== o)
          try {
            a(c, "forEach", o);
          } catch (t) {
            c.forEach = o;
          }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      var r = n(3),
        i = n(4),
        o = r.document,
        a = i(o) && i(o.createElement);
      t.exports = function (t) {
        return a ? o.createElement(t) : {};
      };
    },
    function (t, e, n) {
      var r = n(3),
        i = n(16);
      t.exports = function (t, e) {
        try {
          i(r, t, e);
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    },
    function (t, e, n) {
      var r = n(102),
        i = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (t) {
          return i.call(t);
        }),
      (t.exports = r.inspectSource);
    },
    function (t, e, n) {
      var r = n(3),
        i = n(100),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(22),
        i = n(43),
        o = n(106),
        a = n(5);
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(a(t)),
            n = o.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = r;
    },
    function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
      var r = n(47),
        i = n(1);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          return !String(Symbol()) || (!Symbol.sham && r && r < 41);
        });
    },
    function (t, e, n) {
      var r = n(6),
        i = n(10),
        o = n(5),
        a = n(61);
      t.exports = r
        ? Object.defineProperties
        : function (t, e) {
          o(t);
          for (var n, r = a(e), u = r.length, s = 0; u > s; )
            i.f(t, (n = r[s++]), e[n]);
          return t;
        };
    },
    function (t, e, n) {
      var r = n(1);
      t.exports = !r(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    function (t, e, n) {
      var r = n(7),
        i = n(63),
        o = r("iterator"),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || a[o] === t);
      };
    },
    function (t, e, n) {
      var r = {};
      (r[n(7)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        i = n(37),
        o = n(9);
      t.exports = function (t) {
        for (
          var e = r(this),
            n = o(e.length),
            a = arguments.length,
            u = i(a > 1 ? arguments[1] : void 0, n),
            s = a > 2 ? arguments[2] : void 0,
            c = void 0 === s ? n : i(s, n);
          c > u;

        )
          e[u++] = t;
        return e;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(114),
        o = n(27),
        a = n(33),
        u = n(29),
        s = n(16),
        c = n(17),
        f = n(7),
        l = n(25),
        h = n(63),
        p = n(161),
        d = p.IteratorPrototype,
        v = p.BUGGY_SAFARI_ITERATORS,
        g = f("iterator"),
        y = function () {
          return this;
        };
      t.exports = function (t, e, n, f, p, m, x) {
        i(n, e, f);
        var b,
          w,
          _,
          S = function (t) {
            if (t === p && C) return C;
            if (!v && t in A) return A[t];
            switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
            }
            return function () {
              return new n(this);
            };
          },
          T = e + " Iterator",
          E = !1,
          A = t.prototype,
          M = A[g] || A["@@iterator"] || (p && A[p]),
          C = (!v && M) || S(p),
          N = ("Array" == e && A.entries) || M;
        if (
          (N &&
            ((b = o(N.call(new t()))),
            d !== Object.prototype &&
              b.next &&
              (l ||
                o(b) === d ||
                (a ? a(b, d) : "function" != typeof b[g] && s(b, g, y)),
              u(b, T, !0, !0),
              l && (h[T] = y))),
          "values" == p &&
            M &&
            "values" !== M.name &&
            ((E = !0),
            (C = function () {
              return M.call(this);
            })),
          (l && !x) || A[g] === C || s(A, g, C),
          (h[e] = C),
          p)
        )
          if (
            ((w = {
              values: S("values"),
              keys: m ? C : S("keys"),
              entries: S("entries"),
            }),
            x)
          )
            for (_ in w) (v || E || !(_ in A)) && c(A, _, w[_]);
          else r({ target: e, proto: !0, forced: v || E }, w);
        return w;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(161).IteratorPrototype,
        i = n(30),
        o = n(31),
        a = n(29),
        u = n(63),
        s = function () {
          return this;
        };
      t.exports = function (t, e, n) {
        var c = e + " Iterator";
        return (
          (t.prototype = i(r, { next: o(1, n) })),
          a(t, c, !1, !0),
          (u[c] = s),
          t
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).map;
      r(
        { target: "Array", proto: !0, forced: !n(66)("map") },
        {
          map: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e) {
      t.exports =
        "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    },
    function (t, e, n) {
      var r = n(9),
        i = n(118),
        o = n(15),
        a = Math.ceil,
        u = function (t) {
          return function (e, n, u) {
            var s,
              c,
              f = String(o(e)),
              l = f.length,
              h = void 0 === u ? " " : String(u),
              p = r(n);
            return p <= l || "" == h
              ? f
              : ((s = p - l),
              (c = i.call(h, a(s / h.length))).length > s &&
                  (c = c.slice(0, s)),
              t ? f + c : c + f);
          };
        };
      t.exports = { start: u(!1), end: u(!0) };
    },
    function (t, e, n) {
      "use strict";
      var r = n(26),
        i = n(15);
      t.exports = function (t) {
        var e = String(i(this)),
          n = "",
          o = r(t);
        if (o < 0 || o == 1 / 0)
          throw RangeError("Wrong number of repetitions");
        for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n;
      };
    },
    function (t, e) {
      t.exports =
        Math.sign ||
        function (t) {
          return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
        };
    },
    function (t, e, n) {
      var r,
        i,
        o,
        a = n(3),
        u = n(1),
        s = n(38),
        c = n(151),
        f = n(99),
        l = n(175),
        h = n(48),
        p = a.location,
        d = a.setImmediate,
        v = a.clearImmediate,
        g = a.process,
        y = a.MessageChannel,
        m = a.Dispatch,
        x = 0,
        b = {},
        w = function (t) {
          if (b.hasOwnProperty(t)) {
            var e = b[t];
            delete b[t], e();
          }
        },
        _ = function (t) {
          return function () {
            w(t);
          };
        },
        S = function (t) {
          w(t.data);
        },
        T = function (t) {
          a.postMessage(t + "", p.protocol + "//" + p.host);
        };
      (d && v) ||
        ((d = function (t) {
          for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
          return (
            (b[++x] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            r(x),
            x
          );
        }),
        (v = function (t) {
          delete b[t];
        }),
        h
          ? (r = function (t) {
            g.nextTick(_(t));
          })
          : m && m.now
            ? (r = function (t) {
              m.now(_(t));
            })
            : y && !l
              ? ((o = (i = new y()).port2),
              (i.port1.onmessage = S),
              (r = s(o.postMessage, o, 1)))
              : a.addEventListener &&
            "function" == typeof postMessage &&
            !a.importScripts &&
            p &&
            "file:" !== p.protocol &&
            !u(T)
                ? ((r = T), a.addEventListener("message", S, !1))
                : (r =
              "onreadystatechange" in f("script")
                ? function (t) {
                  c.appendChild(f("script")).onreadystatechange =
                      function () {
                        c.removeChild(this), w(t);
                      };
                }
                : function (t) {
                  setTimeout(_(t), 0);
                })),
      (t.exports = { set: d, clear: v });
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    function (t, e, n) {
      var r = n(68);
      t.exports = function (t) {
        if (r(t))
          throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(7)("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (n) {
          try {
            return (e[r] = !1), "/./"[t](e);
          } catch (t) {}
        }
        return !1;
      };
    },
    function (t, e, n) {
      var r = n(1),
        i = n(83);
      t.exports = function (t) {
        return r(function () {
          return !!i[t]() || "​᠎" != "​᠎"[t]() || i[t].name !== t;
        });
      };
    },
    function (t, e, n) {
      var r = n(3),
        i = n(1),
        o = n(76),
        a = n(8).NATIVE_ARRAY_BUFFER_VIEWS,
        u = r.ArrayBuffer,
        s = r.Int8Array;
      t.exports =
        !a ||
        !i(function () {
          s(1);
        }) ||
        !i(function () {
          new s(-1);
        }) ||
        !o(function (t) {
          new s(), new s(null), new s(1.5), new s(t);
        }, !0) ||
        i(function () {
          return 1 !== new s(new u(2), 1, void 0).length;
        });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(3),
        o = n(22),
        a = n(25),
        u = n(6),
        s = n(107),
        c = n(150),
        f = n(1),
        l = n(12),
        h = n(44),
        p = n(4),
        d = n(5),
        v = n(11),
        g = n(21),
        y = n(28),
        m = n(31),
        x = n(30),
        b = n(61),
        w = n(43),
        _ = n(152),
        S = n(106),
        T = n(14),
        E = n(10),
        A = n(73),
        M = n(16),
        C = n(17),
        N = n(75),
        k = n(74),
        j = n(57),
        R = n(56),
        O = n(7),
        L = n(153),
        D = n(20),
        I = n(29),
        P = n(18),
        U = n(13).forEach,
        F = k("hidden"),
        q = O("toPrimitive"),
        B = P.set,
        H = P.getterFor("Symbol"),
        z = Object.prototype,
        W = i.Symbol,
        $ = o("JSON", "stringify"),
        Y = T.f,
        V = E.f,
        X = _.f,
        G = A.f,
        J = N("symbols"),
        Z = N("op-symbols"),
        Q = N("string-to-symbol-registry"),
        K = N("symbol-to-string-registry"),
        tt = N("wks"),
        et = i.QObject,
        nt = !et || !et.prototype || !et.prototype.findChild,
        rt =
          u &&
          f(function () {
            return (
              7 !=
              x(
                V({}, "a", {
                  get: function () {
                    return V(this, "a", { value: 7 }).a;
                  },
                }),
              ).a
            );
          })
            ? function (t, e, n) {
              var r = Y(z, e);
              r && delete z[e], V(t, e, n), r && t !== z && V(z, e, r);
            }
            : V,
        it = function (t, e) {
          var n = (J[t] = x(W.prototype));
          return (
            B(n, { type: "Symbol", tag: t, description: e }),
            u || (n.description = e),
            n
          );
        },
        ot = c
          ? function (t) {
            return "symbol" == typeof t;
          }
          : function (t) {
            return Object(t) instanceof W;
          },
        at = function (t, e, n) {
          t === z && at(Z, e, n), d(t);
          var r = y(e, !0);
          return (
            d(n),
            l(J, r)
              ? (n.enumerable
                ? (l(t, F) && t[F][r] && (t[F][r] = !1),
                (n = x(n, { enumerable: m(0, !1) })))
                : (l(t, F) || V(t, F, m(1, {})), (t[F][r] = !0)),
              rt(t, r, n))
              : V(t, r, n)
          );
        },
        ut = function (t, e) {
          d(t);
          var n = g(e),
            r = b(n).concat(lt(n));
          return (
            U(r, function (e) {
              (u && !st.call(n, e)) || at(t, e, n[e]);
            }),
            t
          );
        },
        st = function (t) {
          var e = y(t, !0),
            n = G.call(this, e);
          return (
            !(this === z && l(J, e) && !l(Z, e)) &&
            (!(n || !l(this, e) || !l(J, e) || (l(this, F) && this[F][e])) || n)
          );
        },
        ct = function (t, e) {
          var n = g(t),
            r = y(e, !0);
          if (n !== z || !l(J, r) || l(Z, r)) {
            var i = Y(n, r);
            return (
              !i || !l(J, r) || (l(n, F) && n[F][r]) || (i.enumerable = !0), i
            );
          }
        },
        ft = function (t) {
          var e = X(g(t)),
            n = [];
          return (
            U(e, function (t) {
              l(J, t) || l(j, t) || n.push(t);
            }),
            n
          );
        },
        lt = function (t) {
          var e = t === z,
            n = X(e ? Z : g(t)),
            r = [];
          return (
            U(n, function (t) {
              !l(J, t) || (e && !l(z, t)) || r.push(J[t]);
            }),
            r
          );
        };
      (s ||
        (C(
          (W = function () {
            if (this instanceof W)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? String(arguments[0])
                  : void 0,
              e = R(t),
              n = function (t) {
                this === z && n.call(Z, t),
                l(this, F) && l(this[F], e) && (this[F][e] = !1),
                rt(this, e, m(1, t));
              };
            return u && nt && rt(z, e, { configurable: !0, set: n }), it(e, t);
          }).prototype,
          "toString",
          function () {
            return H(this).tag;
          },
        ),
        C(W, "withoutSetter", function (t) {
          return it(R(t), t);
        }),
        (A.f = st),
        (E.f = at),
        (T.f = ct),
        (w.f = _.f = ft),
        (S.f = lt),
        (L.f = function (t) {
          return it(O(t), t);
        }),
        u &&
          (V(W.prototype, "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            },
          }),
          a || C(z, "propertyIsEnumerable", st, { unsafe: !0 }))),
      r({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: W }),
      U(b(tt), function (t) {
        D(t);
      }),
      r(
        { target: "Symbol", stat: !0, forced: !s },
        {
          for: function (t) {
            var e = String(t);
            if (l(Q, e)) return Q[e];
            var n = W(e);
            return (Q[e] = n), (K[n] = e), n;
          },
          keyFor: function (t) {
            if (!ot(t)) throw TypeError(t + " is not a symbol");
            if (l(K, t)) return K[t];
          },
          useSetter: function () {
            nt = !0;
          },
          useSimple: function () {
            nt = !1;
          },
        },
      ),
      r(
        { target: "Object", stat: !0, forced: !s, sham: !u },
        {
          create: function (t, e) {
            return void 0 === e ? x(t) : ut(x(t), e);
          },
          defineProperty: at,
          defineProperties: ut,
          getOwnPropertyDescriptor: ct,
        },
      ),
      r(
        { target: "Object", stat: !0, forced: !s },
        { getOwnPropertyNames: ft, getOwnPropertySymbols: lt },
      ),
      r(
        {
          target: "Object",
          stat: !0,
          forced: f(function () {
            S.f(1);
          }),
        },
        {
          getOwnPropertySymbols: function (t) {
            return S.f(v(t));
          },
        },
      ),
      $) &&
        r(
          {
            target: "JSON",
            stat: !0,
            forced:
              !s ||
              f(function () {
                var t = W();
                return (
                  "[null]" != $([t]) ||
                  "{}" != $({ a: t }) ||
                  "{}" != $(Object(t))
                );
              }),
          },
          {
            stringify: function (t, e, n) {
              for (var r, i = [t], o = 1; arguments.length > o; )
                i.push(arguments[o++]);
              if (((r = e), (p(e) || void 0 !== t) && !ot(t)))
                return (
                  h(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof r && (e = r.call(this, t, e)),
                        !ot(e))
                      )
                        return e;
                    }),
                  (i[1] = e),
                  $.apply(null, i)
                );
            },
          },
        );
      W.prototype[q] || M(W.prototype, q, W.prototype.valueOf),
      I(W, "Symbol"),
      (j[F] = !0);
    },
    function (t, e, n) {
      var r = n(6),
        i = n(1),
        o = n(99);
      t.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, n) {
      var r = n(3),
        i = n(101),
        o = r.WeakMap;
      t.exports = "function" == typeof o && /native code/.test(i(o));
    },
    function (t, e, n) {
      var r = n(12),
        i = n(103),
        o = n(14),
        a = n(10);
      t.exports = function (t, e) {
        for (var n = i(e), u = a.f, s = o.f, c = 0; c < n.length; c++) {
          var f = n[c];
          r(t, f) || u(t, f, s(e, f));
        }
      };
    },
    function (t, e, n) {
      var r = n(12),
        i = n(21),
        o = n(58).indexOf,
        a = n(57);
      t.exports = function (t, e) {
        var n,
          u = i(t),
          s = 0,
          c = [];
        for (n in u) !r(a, n) && r(u, n) && c.push(n);
        for (; e.length > s; ) r(u, (n = e[s++])) && (~o(c, n) || c.push(n));
        return c;
      };
    },
    function (t, e, n) {
      var r = n(107);
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, e, n) {
      var r = n(22);
      t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
      var r = n(21),
        i = n(43).f,
        o = {}.toString,
        a =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t)
          ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a.slice();
            }
          })(t)
          : i(r(t));
      };
    },
    function (t, e, n) {
      var r = n(7);
      e.f = r;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        o = n(3),
        a = n(12),
        u = n(4),
        s = n(10).f,
        c = n(148),
        f = o.Symbol;
      if (
        i &&
        "function" == typeof f &&
        (!("description" in f.prototype) || void 0 !== f().description)
      ) {
        var l = {},
          h = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof h ? new f(t) : void 0 === t ? f() : f(t);
            return "" === t && (l[e] = !0), e;
          };
        c(h, f);
        var p = (h.prototype = f.prototype);
        p.constructor = h;
        var d = p.toString,
          v = "Symbol(test)" == String(f("test")),
          g = /^Symbol\((.*)\)[^)]+$/;
        s(p, "description", {
          configurable: !0,
          get: function () {
            var t = u(this) ? this.valueOf() : this,
              e = d.call(t);
            if (a(l, t)) return "";
            var n = v ? e.slice(7, -1) : e.replace(g, "$1");
            return "" === n ? void 0 : n;
          },
        }),
        r({ global: !0, forced: !0 }, { Symbol: h });
      }
    },
    function (t, e, n) {
      var r = n(4);
      t.exports = function (t) {
        if (!r(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(5);
      t.exports = function (t) {
        var e = t.return;
        if (void 0 !== e) return r(e.call(t)).value;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        i = n(37),
        o = n(9),
        a = Math.min;
      t.exports =
        [].copyWithin ||
        function (t, e) {
          var n = r(this),
            u = o(n.length),
            s = i(t, u),
            c = i(e, u),
            f = arguments.length > 2 ? arguments[2] : void 0,
            l = a((void 0 === f ? u : i(f, u)) - c, u - s),
            h = 1;
          for (
            c < s && s < c + l && ((h = -1), (c += l - 1), (s += l - 1));
            l-- > 0;

          )
            c in n ? (n[s] = n[c]) : delete n[s], (s += h), (c += h);
          return n;
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(44),
        i = n(9),
        o = n(38),
        a = function (t, e, n, u, s, c, f, l) {
          for (var h, p = s, d = 0, v = !!f && o(f, l, 3); d < u; ) {
            if (d in n) {
              if (((h = v ? v(n[d], d, e) : n[d]), c > 0 && r(h)))
                p = a(t, e, h, i(h.length), p, c - 1) - 1;
              else {
                if (p >= 9007199254740991)
                  throw TypeError("Exceed the acceptable array length");
                t[p] = h;
              }
              p++;
            }
            d++;
          }
          return p;
        };
      t.exports = a;
    },
    function (t, e, n) {
      "use strict";
      var r = n(13).forEach,
        i = n(34)("forEach");
      t.exports = i
        ? [].forEach
        : function (t) {
          return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(38),
        i = n(11),
        o = n(275),
        a = n(110),
        u = n(9),
        s = n(45),
        c = n(64);
      t.exports = function (t) {
        var e,
          n,
          f,
          l,
          h,
          p,
          d = i(t),
          v = "function" == typeof this ? this : Array,
          g = arguments.length,
          y = g > 1 ? arguments[1] : void 0,
          m = void 0 !== y,
          x = c(d),
          b = 0;
        if (
          (m && (y = r(y, g > 2 ? arguments[2] : void 0, 2)),
          null == x || (v == Array && a(x)))
        )
          for (n = new v((e = u(d.length))); e > b; b++)
            (p = m ? y(d[b], b) : d[b]), s(n, b, p);
        else
          for (
            h = (l = x.call(d)).next, n = new v();
            !(f = h.call(l)).done;
            b++
          )
            (p = m ? o(l, y, [f.value, b], !0) : f.value), s(n, b, p);
        return (n.length = b), n;
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        i,
        o,
        a = n(1),
        u = n(27),
        s = n(16),
        c = n(12),
        f = n(7),
        l = n(25),
        h = f("iterator"),
        p = !1;
      [].keys &&
        ("next" in (o = [].keys())
          ? (i = u(u(o))) !== Object.prototype && (r = i)
          : (p = !0));
      var d =
        null == r ||
        a(function () {
          var t = {};
          return r[h].call(t) !== t;
        });
      d && (r = {}),
      (l && !d) ||
          c(r, h) ||
          s(r, h, function () {
            return this;
          }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
    },
    function (t, e, n) {
      "use strict";
      var r = n(21),
        i = n(26),
        o = n(9),
        a = n(34),
        u = Math.min,
        s = [].lastIndexOf,
        c = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
        f = a("lastIndexOf"),
        l = c || !f;
      t.exports = l
        ? function (t) {
          if (c) return s.apply(this, arguments) || 0;
          var e = r(this),
            n = o(e.length),
            a = n - 1;
          for (
            arguments.length > 1 && (a = u(a, i(arguments[1]))),
            a < 0 && (a = n + a);
            a >= 0;
            a--
          )
            if (a in e && e[a] === t) return a || 0;
          return -1;
        }
        : s;
    },
    function (t, e, n) {
      var r = n(26),
        i = n(9);
      t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = r(t),
          n = i(e);
        if (e !== n) throw RangeError("Wrong length or index");
        return n;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(19),
        i = n(4),
        o = [].slice,
        a = {},
        u = function (t, e, n) {
          if (!(e in a)) {
            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
            a[e] = Function("C,a", "return new C(" + r.join(",") + ")");
          }
          return a[e](t, n);
        };
      t.exports =
        Function.bind ||
        function (t) {
          var e = r(this),
            n = o.call(arguments, 1),
            a = function () {
              var r = n.concat(o.call(arguments));
              return this instanceof a ? u(e, r.length, r) : e.apply(t, r);
            };
          return i(e.prototype) && (a.prototype = e.prototype), a;
        };
    },
    function (t, e, n) {
      "use strict";
      var r = n(10).f,
        i = n(30),
        o = n(50),
        a = n(38),
        u = n(41),
        s = n(39),
        c = n(113),
        f = n(49),
        l = n(6),
        h = n(46).fastKey,
        p = n(18),
        d = p.set,
        v = p.getterFor;
      t.exports = {
        getConstructor: function (t, e, n, c) {
          var f = t(function (t, r) {
              u(t, f, e),
              d(t, {
                type: e,
                index: i(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              l || (t.size = 0),
              null != r && s(r, t[c], { that: t, AS_ENTRIES: n });
            }),
            p = v(e),
            g = function (t, e, n) {
              var r,
                i,
                o = p(t),
                a = y(t, e);
              return (
                a
                  ? (a.value = n)
                  : ((o.last = a =
                      {
                        index: (i = h(e, !0)),
                        key: e,
                        value: n,
                        previous: (r = o.last),
                        next: void 0,
                        removed: !1,
                      }),
                  o.first || (o.first = a),
                  r && (r.next = a),
                  l ? o.size++ : t.size++,
                  "F" !== i && (o.index[i] = a)),
                t
              );
            },
            y = function (t, e) {
              var n,
                r = p(t),
                i = h(e);
              if ("F" !== i) return r.index[i];
              for (n = r.first; n; n = n.next) if (n.key == e) return n;
            };
          return (
            o(f.prototype, {
              clear: function () {
                for (var t = p(this), e = t.index, n = t.first; n; )
                  (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete e[n.index],
                  (n = n.next);
                (t.first = t.last = void 0), l ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var e = p(this),
                  n = y(this, t);
                if (n) {
                  var r = n.next,
                    i = n.previous;
                  delete e.index[n.index],
                  (n.removed = !0),
                  i && (i.next = r),
                  r && (r.previous = i),
                  e.first == n && (e.first = r),
                  e.last == n && (e.last = i),
                  l ? e.size-- : this.size--;
                }
                return !!n;
              },
              forEach: function (t) {
                for (
                  var e,
                    n = p(this),
                    r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.next : n.first);

                )
                  for (r(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!y(this, t);
              },
            }),
            o(
              f.prototype,
              n
                ? {
                  get: function (t) {
                    var e = y(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return g(this, 0 === t ? 0 : t, e);
                  },
                }
                : {
                  add: function (t) {
                    return g(this, (t = 0 === t ? 0 : t), t);
                  },
                },
            ),
            l &&
              r(f.prototype, "size", {
                get: function () {
                  return p(this).size;
                },
              }),
            f
          );
        },
        setStrong: function (t, e, n) {
          var r = e + " Iterator",
            i = v(e),
            o = v(r);
          c(
            t,
            e,
            function (t, e) {
              d(this, {
                type: r,
                target: t,
                state: i(t),
                kind: e,
                last: void 0,
              });
            },
            function () {
              for (var t = o(this), e = t.kind, n = t.last; n && n.removed; )
                n = n.previous;
              return t.target && (t.last = n = n ? n.next : t.state.first)
                ? "keys" == e
                  ? { value: n.key, done: !1 }
                  : "values" == e
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            n ? "entries" : "values",
            !n,
            !0,
          ),
          f(e);
        },
      };
    },
    function (t, e) {
      var n = Math.log;
      t.exports =
        Math.log1p ||
        function (t) {
          return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : n(1 + t);
        };
    },
    function (t, e, n) {
      var r = n(4),
        i = Math.floor;
      t.exports = function (t) {
        return !r(t) && isFinite(t) && i(t) === t;
      };
    },
    function (t, e, n) {
      var r = n(3),
        i = n(51).trim,
        o = n(83),
        a = r.parseFloat,
        u = 1 / a(o + "-0") != -1 / 0;
      t.exports = u
        ? function (t) {
          var e = i(String(t)),
            n = a(e);
          return 0 === n && "-" == e.charAt(0) ? -0 : n;
        }
        : a;
    },
    function (t, e, n) {
      var r = n(3),
        i = n(51).trim,
        o = n(83),
        a = r.parseInt,
        u = /^[+-]?0[Xx]/,
        s = 8 !== a(o + "08") || 22 !== a(o + "0x16");
      t.exports = s
        ? function (t, e) {
          var n = i(String(t));
          return a(n, e >>> 0 || (u.test(n) ? 16 : 10));
        }
        : a;
    },
    function (t, e, n) {
      var r = n(32);
      t.exports = function (t) {
        if ("number" != typeof t && "Number" != r(t))
          throw TypeError("Incorrect invocation");
        return +t;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(6),
        i = n(1),
        o = n(61),
        a = n(106),
        u = n(73),
        s = n(11),
        c = n(55),
        f = Object.assign,
        l = Object.defineProperty;
      t.exports =
        !f ||
        i(function () {
          if (
            r &&
            1 !==
              f(
                { b: 1 },
                f(
                  l({}, "a", {
                    enumerable: !0,
                    get: function () {
                      l(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 },
                ),
              ).b
          )
            return !0;
          var t = {},
            e = {},
            n = Symbol();
          return (
            (t[n] = 7),
            "abcdefghijklmnopqrst".split("").forEach(function (t) {
              e[t] = t;
            }),
            7 != f({}, t)[n] || "abcdefghijklmnopqrst" != o(f({}, e)).join("")
          );
        })
          ? function (t, e) {
            for (
              var n = s(t), i = arguments.length, f = 1, l = a.f, h = u.f;
              i > f;

            )
              for (
                var p,
                  d = c(arguments[f++]),
                  v = l ? o(d).concat(l(d)) : o(d),
                  g = v.length,
                  y = 0;
                g > y;

              )
                (p = v[y++]), (r && !h.call(d, p)) || (n[p] = d[p]);
            return n;
          }
          : f;
    },
    function (t, e, n) {
      var r = n(6),
        i = n(61),
        o = n(21),
        a = n(73).f,
        u = function (t) {
          return function (e) {
            for (
              var n, u = o(e), s = i(u), c = s.length, f = 0, l = [];
              c > f;

            )
              (n = s[f++]),
              (r && !a.call(u, n)) || l.push(t ? [n, u[n]] : u[n]);
            return l;
          };
        };
      t.exports = { entries: u(!0), values: u(!1) };
    },
    function (t, e) {
      t.exports =
        Object.is ||
        function (t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = r.Promise;
    },
    function (t, e, n) {
      var r = n(60);
      t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    function (t, e, n) {
      var r,
        i,
        o,
        a,
        u,
        s,
        c,
        f,
        l = n(3),
        h = n(14).f,
        p = n(120).set,
        d = n(175),
        v = n(372),
        g = n(48),
        y = l.MutationObserver || l.WebKitMutationObserver,
        m = l.document,
        x = l.process,
        b = l.Promise,
        w = h(l, "queueMicrotask"),
        _ = w && w.value;
      _ ||
        ((r = function () {
          var t, e;
          for (g && (t = x.domain) && t.exit(); i; ) {
            (e = i.fn), (i = i.next);
            try {
              e();
            } catch (t) {
              throw (i ? a() : (o = void 0), t);
            }
          }
          (o = void 0), t && t.enter();
        }),
        d || g || v || !y || !m
          ? b && b.resolve
            ? (((c = b.resolve(void 0)).constructor = b),
            (f = c.then),
            (a = function () {
              f.call(c, r);
            }))
            : (a = g
              ? function () {
                x.nextTick(r);
              }
              : function () {
                p.call(l, r);
              })
          : ((u = !0),
          (s = m.createTextNode("")),
          new y(r).observe(s, { characterData: !0 }),
          (a = function () {
            s.data = u = !u;
          }))),
      (t.exports =
          _ ||
          function (t) {
            var e = { fn: t, next: void 0 };
            o && (o.next = e), i || ((i = e), a()), (o = e);
          });
    },
    function (t, e, n) {
      var r = n(5),
        i = n(4),
        o = n(85);
      t.exports = function (t, e) {
        if ((r(t), i(e) && e.constructor === t)) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(87).charAt,
        i = n(18),
        o = n(113),
        a = i.set,
        u = i.getterFor("String Iterator");
      o(
        String,
        "String",
        function (t) {
          a(this, { type: "String Iterator", string: String(t), index: 0 });
        },
        function () {
          var t,
            e = u(this),
            n = e.string,
            i = e.index;
          return i >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
        },
      );
    },
    function (t, e, n) {
      var r = n(60);
      t.exports =
        /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
          r,
        );
    },
    function (t, e, n) {
      var r = n(11),
        i = Math.floor,
        o = "".replace,
        a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        u = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, e, n, s, c, f) {
        var l = n + t.length,
          h = s.length,
          p = u;
        return (
          void 0 !== c && ((c = r(c)), (p = a)),
          o.call(f, p, function (r, o) {
            var a;
            switch (o.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return t;
            case "`":
              return e.slice(0, n);
            case "'":
              return e.slice(l);
            case "<":
              a = c[o.slice(1, -1)];
              break;
            default:
              var u = +o;
              if (0 === u) return r;
              if (u > h) {
                var f = i(u / 10);
                return 0 === f
                  ? r
                  : f <= h
                    ? void 0 === s[f - 1]
                      ? o.charAt(1)
                      : s[f - 1] + o.charAt(1)
                    : r;
              }
              a = s[u - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      };
    },
    function (t, e, n) {
      var r = n(429);
      t.exports = function (t, e) {
        var n = r(t);
        if (n % e) throw RangeError("Wrong offset");
        return n;
      };
    },
    function (t, e, n) {
      var r = n(11),
        i = n(9),
        o = n(64),
        a = n(110),
        u = n(38),
        s = n(8).aTypedArrayConstructor;
      t.exports = function (t) {
        var e,
          n,
          c,
          f,
          l,
          h,
          p = r(t),
          d = arguments.length,
          v = d > 1 ? arguments[1] : void 0,
          g = void 0 !== v,
          y = o(p);
        if (null != y && !a(y))
          for (h = (l = y.call(p)).next, p = []; !(f = h.call(l)).done; )
            p.push(f.value);
        for (
          g && d > 2 && (v = u(v, arguments[2], 2)),
          n = i(p.length),
          c = new (s(this))(n),
          e = 0;
          n > e;
          e++
        )
          c[e] = g ? v(p[e], e) : p[e];
        return c;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(50),
        i = n(46).getWeakData,
        o = n(5),
        a = n(4),
        u = n(41),
        s = n(39),
        c = n(13),
        f = n(12),
        l = n(18),
        h = l.set,
        p = l.getterFor,
        d = c.find,
        v = c.findIndex,
        g = 0,
        y = function (t) {
          return t.frozen || (t.frozen = new m());
        },
        m = function () {
          this.entries = [];
        },
        x = function (t, e) {
          return d(t.entries, function (t) {
            return t[0] === e;
          });
        };
      (m.prototype = {
        get: function (t) {
          var e = x(this, t);
          if (e) return e[1];
        },
        has: function (t) {
          return !!x(this, t);
        },
        set: function (t, e) {
          var n = x(this, t);
          n ? (n[1] = e) : this.entries.push([t, e]);
        },
        delete: function (t) {
          var e = v(this.entries, function (e) {
            return e[0] === t;
          });
          return ~e && this.entries.splice(e, 1), !!~e;
        },
      }),
      (t.exports = {
        getConstructor: function (t, e, n, c) {
          var l = t(function (t, r) {
              u(t, l, e),
              h(t, { type: e, id: g++, frozen: void 0 }),
              null != r && s(r, t[c], { that: t, AS_ENTRIES: n });
            }),
            d = p(e),
            v = function (t, e, n) {
              var r = d(t),
                a = i(o(e), !0);
              return !0 === a ? y(r).set(e, n) : (a[r.id] = n), t;
            };
          return (
            r(l.prototype, {
              delete: function (t) {
                var e = d(this);
                if (!a(t)) return !1;
                var n = i(t);
                return !0 === n
                  ? y(e).delete(t)
                  : n && f(n, e.id) && delete n[e.id];
              },
              has: function (t) {
                var e = d(this);
                if (!a(t)) return !1;
                var n = i(t);
                return !0 === n ? y(e).has(t) : n && f(n, e.id);
              },
            }),
            r(
              l.prototype,
              n
                ? {
                  get: function (t) {
                    var e = d(this);
                    if (a(t)) {
                      var n = i(t);
                      return !0 === n ? y(e).get(t) : n ? n[e.id] : void 0;
                    }
                  },
                  set: function (t, e) {
                    return v(this, t, e);
                  },
                }
                : {
                  add: function (t) {
                    return v(this, t, !0);
                  },
                },
            ),
            l
          );
        },
      });
    },
    function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (t, e, n) {
      var r = n(1),
        i = n(7),
        o = n(25),
        a = i("iterator");
      t.exports = !r(function () {
        var t = new URL("b?a=1&b=2&c=3", "http://a"),
          e = t.searchParams,
          n = "";
        return (
          (t.pathname = "c%20d"),
          e.forEach(function (t, r) {
            e.delete("b"), (n += r + t);
          }),
          (o && !t.toJSON) ||
            !e.sort ||
            "http://a/c%20d?a=1&c=3" !== t.href ||
            "3" !== e.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !e[a] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      });
    },
    function (t, e, n) {
      "use strict";
      n(77);
      var r = n(0),
        i = n(22),
        o = n(185),
        a = n(17),
        u = n(50),
        s = n(29),
        c = n(114),
        f = n(18),
        l = n(41),
        h = n(12),
        p = n(38),
        d = n(65),
        v = n(5),
        g = n(4),
        y = n(30),
        m = n(31),
        x = n(472),
        b = n(64),
        w = n(7),
        _ = i("fetch"),
        S = i("Headers"),
        T = w("iterator"),
        E = f.set,
        A = f.getterFor("URLSearchParams"),
        M = f.getterFor("URLSearchParamsIterator"),
        C = /\+/g,
        N = Array(4),
        k = function (t) {
          return (
            N[t - 1] ||
            (N[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
          );
        },
        j = function (t) {
          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        },
        R = function (t) {
          var e = t.replace(C, " "),
            n = 4;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            for (; n; ) e = e.replace(k(n--), j);
            return e;
          }
        },
        O = /[!'()~]|%20/g,
        L = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        D = function (t) {
          return L[t];
        },
        I = function (t) {
          return encodeURIComponent(t).replace(O, D);
        },
        P = function (t, e) {
          if (e)
            for (var n, r, i = e.split("&"), o = 0; o < i.length; )
              (n = i[o++]).length &&
                ((r = n.split("=")),
                t.push({ key: R(r.shift()), value: R(r.join("=")) }));
        },
        U = function (t) {
          (this.entries.length = 0), P(this.entries, t);
        },
        F = function (t, e) {
          if (t < e) throw TypeError("Not enough arguments");
        },
        q = c(
          function (t, e) {
            E(this, {
              type: "URLSearchParamsIterator",
              iterator: x(A(t).entries),
              kind: e,
            });
          },
          "Iterator",
          function () {
            var t = M(this),
              e = t.kind,
              n = t.iterator.next(),
              r = n.value;
            return (
              n.done ||
                (n.value =
                  "keys" === e
                    ? r.key
                    : "values" === e
                      ? r.value
                      : [r.key, r.value]),
              n
            );
          },
        ),
        B = function () {
          l(this, B, "URLSearchParams");
          var t,
            e,
            n,
            r,
            i,
            o,
            a,
            u,
            s,
            c = arguments.length > 0 ? arguments[0] : void 0,
            f = this,
            p = [];
          if (
            (E(f, {
              type: "URLSearchParams",
              entries: p,
              updateURL: function () {},
              updateSearchParams: U,
            }),
            void 0 !== c)
          )
            if (g(c))
              if ("function" == typeof (t = b(c)))
                for (n = (e = t.call(c)).next; !(r = n.call(e)).done; ) {
                  if (
                    (a = (o = (i = x(v(r.value))).next).call(i)).done ||
                    (u = o.call(i)).done ||
                    !o.call(i).done
                  )
                    throw TypeError("Expected sequence with length 2");
                  p.push({ key: a.value + "", value: u.value + "" });
                }
              else for (s in c) h(c, s) && p.push({ key: s, value: c[s] + "" });
            else
              P(
                p,
                "string" == typeof c
                  ? "?" === c.charAt(0)
                    ? c.slice(1)
                    : c
                  : c + "",
              );
        },
        H = B.prototype;
      u(
        H,
        {
          append: function (t, e) {
            F(arguments.length, 2);
            var n = A(this);
            n.entries.push({ key: t + "", value: e + "" }), n.updateURL();
          },
          delete: function (t) {
            F(arguments.length, 1);
            for (
              var e = A(this), n = e.entries, r = t + "", i = 0;
              i < n.length;

            )
              n[i].key === r ? n.splice(i, 1) : i++;
            e.updateURL();
          },
          get: function (t) {
            F(arguments.length, 1);
            for (var e = A(this).entries, n = t + "", r = 0; r < e.length; r++)
              if (e[r].key === n) return e[r].value;
            return null;
          },
          getAll: function (t) {
            F(arguments.length, 1);
            for (
              var e = A(this).entries, n = t + "", r = [], i = 0;
              i < e.length;
              i++
            )
              e[i].key === n && r.push(e[i].value);
            return r;
          },
          has: function (t) {
            F(arguments.length, 1);
            for (var e = A(this).entries, n = t + "", r = 0; r < e.length; )
              if (e[r++].key === n) return !0;
            return !1;
          },
          set: function (t, e) {
            F(arguments.length, 1);
            for (
              var n,
                r = A(this),
                i = r.entries,
                o = !1,
                a = t + "",
                u = e + "",
                s = 0;
              s < i.length;
              s++
            )
              (n = i[s]).key === a &&
                (o ? i.splice(s--, 1) : ((o = !0), (n.value = u)));
            o || i.push({ key: a, value: u }), r.updateURL();
          },
          sort: function () {
            var t,
              e,
              n,
              r = A(this),
              i = r.entries,
              o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
              for (t = o[n], e = 0; e < n; e++)
                if (i[e].key > t.key) {
                  i.splice(e, 0, t);
                  break;
                }
              e === n && i.push(t);
            }
            r.updateURL();
          },
          forEach: function (t) {
            for (
              var e,
                n = A(this).entries,
                r = p(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = 0;
              i < n.length;

            )
              r((e = n[i++]).value, e.key, this);
          },
          keys: function () {
            return new q(this, "keys");
          },
          values: function () {
            return new q(this, "values");
          },
          entries: function () {
            return new q(this, "entries");
          },
        },
        { enumerable: !0 },
      ),
      a(H, T, H.entries),
      a(
        H,
        "toString",
        function () {
          for (var t, e = A(this).entries, n = [], r = 0; r < e.length; )
            (t = e[r++]), n.push(I(t.key) + "=" + I(t.value));
          return n.join("&");
        },
        { enumerable: !0 },
      ),
      s(B, "URLSearchParams"),
      r({ global: !0, forced: !o }, { URLSearchParams: B }),
      o ||
          "function" != typeof _ ||
          "function" != typeof S ||
          r(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (t) {
                var e,
                  n,
                  r,
                  i = [t];
                return (
                  arguments.length > 1 &&
                    (g((e = arguments[1])) &&
                      ((n = e.body),
                      "URLSearchParams" === d(n) &&
                        ((r = e.headers ? new S(e.headers) : new S()).has(
                          "content-type",
                        ) ||
                          r.set(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8",
                          ),
                        (e = y(e, {
                          body: m(0, String(n)),
                          headers: m(0, r),
                        })))),
                    i.push(e)),
                  _.apply(this, i)
                );
              },
            },
          ),
      (t.exports = { URLSearchParams: B, getState: A });
    },
    function (t, e, n) {
      var r;
      /*!
       * jQuery JavaScript Library v3.6.0
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright OpenJS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2021-03-02T17:08Z
       */ !(function (e, n) {
        "use strict";
        "object" == typeof t.exports
          ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
              if (!t.document)
                throw new Error("jQuery requires a window with a document");
              return n(t);
            })
          : n(e);
      })("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [],
          a = Object.getPrototypeOf,
          u = o.slice,
          s = o.flat
            ? function (t) {
              return o.flat.call(t);
            }
            : function (t) {
              return o.concat.apply([], t);
            },
          c = o.push,
          f = o.indexOf,
          l = {},
          h = l.toString,
          p = l.hasOwnProperty,
          d = p.toString,
          v = d.call(Object),
          g = {},
          y = function (t) {
            return (
              "function" == typeof t &&
              "number" != typeof t.nodeType &&
              "function" != typeof t.item
            );
          },
          m = function (t) {
            return null != t && t === t.window;
          },
          x = n.document,
          b = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(t, e, n) {
          var r,
            i,
            o = (n = n || x).createElement("script");
          if (((o.text = t), e))
            for (r in b)
              (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
                o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function _(t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
              ? l[h.call(t)] || "object"
              : typeof t;
        }
        var S = function (t, e) {
          return new S.fn.init(t, e);
        };
        function T(t) {
          var e = !!t && "length" in t && t.length,
            n = _(t);
          return (
            !y(t) &&
            !m(t) &&
            ("array" === n ||
              0 === e ||
              ("number" == typeof e && e > 0 && e - 1 in t))
          );
        }
        (S.fn = S.prototype =
          {
            jquery: "3.6.0",
            constructor: S,
            length: 0,
            toArray: function () {
              return u.call(this);
            },
            get: function (t) {
              return null == t
                ? u.call(this)
                : t < 0
                  ? this[t + this.length]
                  : this[t];
            },
            pushStack: function (t) {
              var e = S.merge(this.constructor(), t);
              return (e.prevObject = this), e;
            },
            each: function (t) {
              return S.each(this, t);
            },
            map: function (t) {
              return this.pushStack(
                S.map(this, function (e, n) {
                  return t.call(e, n, e);
                }),
              );
            },
            slice: function () {
              return this.pushStack(u.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (t, e) {
                  return (e + 1) % 2;
                }),
              );
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (t, e) {
                  return e % 2;
                }),
              );
            },
            eq: function (t) {
              var e = this.length,
                n = +t + (t < 0 ? e : 0);
              return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: o.sort,
            splice: o.splice,
          }),
        (S.extend = S.fn.extend =
            function () {
              var t,
                e,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                u = 1,
                s = arguments.length,
                c = !1;
              for (
                "boolean" == typeof a &&
                  ((c = a), (a = arguments[u] || {}), u++),
                "object" == typeof a || y(a) || (a = {}),
                u === s && ((a = this), u--);
                u < s;
                u++
              )
                if (null != (t = arguments[u]))
                  for (e in t)
                    (r = t[e]),
                    "__proto__" !== e &&
                        a !== r &&
                        (c &&
                        r &&
                        (S.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = a[e]),
                          (o =
                              i && !Array.isArray(n)
                                ? []
                                : i || S.isPlainObject(n)
                                  ? n
                                  : {}),
                          (i = !1),
                          (a[e] = S.extend(c, o, r)))
                          : void 0 !== r && (a[e] = r));
              return a;
            }),
        S.extend({
          expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return (
              !(!t || "[object Object]" !== h.call(t)) &&
                (!(e = a(t)) ||
                  ("function" ==
                    typeof (n = p.call(e, "constructor") && e.constructor) &&
                    d.call(n) === v))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, n) {
            w(t, { nonce: e && e.nonce }, n);
          },
          each: function (t, e) {
            var n,
              r = 0;
            if (T(t))
              for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
            else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
            return t;
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                  (T(Object(t))
                    ? S.merge(n, "string" == typeof t ? [t] : t)
                    : c.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : f.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++)
              t[i++] = e[r];
            return (t.length = i), t;
          },
          grep: function (t, e, n) {
            for (var r = [], i = 0, o = t.length, a = !n; i < o; i++)
              !e(t[i], i) !== a && r.push(t[i]);
            return r;
          },
          map: function (t, e, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (T(t))
              for (r = t.length; o < r; o++)
                null != (i = e(t[o], o, n)) && a.push(i);
            else for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
            return s(a);
          },
          guid: 1,
          support: g,
        }),
        "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = o[Symbol.iterator]),
        S.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " ",
          ),
          function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase();
          },
        );
        var E =
          /*!
           * Sizzle CSS Selector Engine v2.3.6
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2021-02-16
           */
          (function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              p,
              d,
              v,
              g,
              y,
              m,
              x,
              b = "sizzle" + 1 * new Date(),
              w = t.document,
              _ = 0,
              S = 0,
              T = st(),
              E = st(),
              A = st(),
              M = st(),
              C = function (t, e) {
                return t === e && (l = !0), 0;
              },
              N = {}.hasOwnProperty,
              k = [],
              j = k.pop,
              R = k.push,
              O = k.push,
              L = k.slice,
              D = function (t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                  if (t[n] === e) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P = "[\\x20\\t\\r\\n\\f]",
              U =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                P +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              F =
                "\\[" +
                P +
                "*(" +
                U +
                ")(?:" +
                P +
                "*([*^$|!~]?=)" +
                P +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                U +
                "))|)" +
                P +
                "*\\]",
              q =
                ":(" +
                U +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                F +
                ")*)|.*)\\)|)",
              B = new RegExp(P + "+", "g"),
              H = new RegExp(
                "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
                "g",
              ),
              z = new RegExp("^" + P + "*," + P + "*"),
              W = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
              $ = new RegExp(P + "|>"),
              Y = new RegExp(q),
              V = new RegExp("^" + U + "$"),
              X = {
                ID: new RegExp("^#(" + U + ")"),
                CLASS: new RegExp("^\\.(" + U + ")"),
                TAG: new RegExp("^(" + U + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    P +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    P +
                    "*(?:([+-]|)" +
                    P +
                    "*(\\d+)|))" +
                    P +
                    "*\\)|)",
                  "i",
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    P +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    P +
                    "*((?:-\\d)?\\d*)" +
                    P +
                    "*\\)|)(?=[^-]|$)",
                  "i",
                ),
              },
              G = /HTML$/i,
              J = /^(?:input|select|textarea|button)$/i,
              Z = /^h\d$/i,
              Q = /^[^{]+\{\s*\[native \w/,
              K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              tt = /[+~]/,
              et = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
                "g",
              ),
              nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return (
                  e ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                      (n >> 10) | 55296,
                      (1023 & n) | 56320,
                    ))
                );
              },
              rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              it = function (t, e) {
                return e
                  ? "\0" === t
                    ? "�"
                    : t.slice(0, -1) +
                      "\\" +
                      t.charCodeAt(t.length - 1).toString(16) +
                      " "
                  : "\\" + t;
              },
              ot = function () {
                h();
              },
              at = bt(
                function (t) {
                  return (
                    !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" },
              );
            try {
              O.apply((k = L.call(w.childNodes)), w.childNodes),
              k[w.childNodes.length].nodeType;
            } catch (t) {
              O = {
                apply: k.length
                  ? function (t, e) {
                    R.apply(t, L.call(e));
                  }
                  : function (t, e) {
                    for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                    t.length = n - 1;
                  },
              };
            }
            function ut(t, e, r, i) {
              var o,
                u,
                c,
                f,
                l,
                d,
                y,
                m = e && e.ownerDocument,
                w = e ? e.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!i && (h(e), (e = e || p), v)) {
                if (11 !== w && (l = K.exec(t)))
                  if ((o = l[1])) {
                    if (9 === w) {
                      if (!(c = e.getElementById(o))) return r;
                      if (c.id === o) return r.push(c), r;
                    } else if (
                      m &&
                      (c = m.getElementById(o)) &&
                      x(e, c) &&
                      c.id === o
                    )
                      return r.push(c), r;
                  } else {
                    if (l[2]) return O.apply(r, e.getElementsByTagName(t)), r;
                    if (
                      (o = l[3]) &&
                      n.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return O.apply(r, e.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !M[t + " "] &&
                  (!g || !g.test(t)) &&
                  (1 !== w || "object" !== e.nodeName.toLowerCase())
                ) {
                  if (((y = t), (m = e), 1 === w && ($.test(t) || W.test(t)))) {
                    for (
                      ((m = (tt.test(t) && yt(e.parentNode)) || e) === e &&
                        n.scope) ||
                        ((f = e.getAttribute("id"))
                          ? (f = f.replace(rt, it))
                          : e.setAttribute("id", (f = b))),
                      u = (d = a(t)).length;
                      u--;

                    )
                      d[u] = (f ? "#" + f : ":scope") + " " + xt(d[u]);
                    y = d.join(",");
                  }
                  try {
                    return O.apply(r, m.querySelectorAll(y)), r;
                  } catch (e) {
                    M(t, !0);
                  } finally {
                    f === b && e.removeAttribute("id");
                  }
                }
              }
              return s(t.replace(H, "$1"), e, r, i);
            }
            function st() {
              var t = [];
              return function e(n, i) {
                return (
                  t.push(n + " ") > r.cacheLength && delete e[t.shift()],
                  (e[n + " "] = i)
                );
              };
            }
            function ct(t) {
              return (t[b] = !0), t;
            }
            function ft(t) {
              var e = p.createElement("fieldset");
              try {
                return !!t(e);
              } catch (t) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function lt(t, e) {
              for (var n = t.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = e;
            }
            function ht(t, e) {
              var n = e && t,
                r =
                  n &&
                  1 === t.nodeType &&
                  1 === e.nodeType &&
                  t.sourceIndex - e.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
              return t ? 1 : -1;
            }
            function pt(t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            }
            function dt(t) {
              return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
              };
            }
            function vt(t) {
              return function (e) {
                return "form" in e
                  ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                      ? "label" in e.parentNode
                        ? e.parentNode.disabled === t
                        : e.disabled === t
                      : e.isDisabled === t ||
                        (e.isDisabled !== !t && at(e) === t)
                    : e.disabled === t
                  : "label" in e && e.disabled === t;
              };
            }
            function gt(t) {
              return ct(function (e) {
                return (
                  (e = +e),
                  ct(function (n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function yt(t) {
              return t && void 0 !== t.getElementsByTagName && t;
            }
            for (e in ((n = ut.support = {}),
            (o = ut.isXML =
              function (t) {
                var e = t && t.namespaceURI,
                  n = t && (t.ownerDocument || t).documentElement;
                return !G.test(e || (n && n.nodeName) || "HTML");
              }),
            (h = ut.setDocument =
              function (t) {
                var e,
                  i,
                  a = t ? t.ownerDocument || t : w;
                return a != p && 9 === a.nodeType && a.documentElement
                  ? ((d = (p = a).documentElement),
                  (v = !o(p)),
                  w != p &&
                      (i = p.defaultView) &&
                      i.top !== i &&
                      (i.addEventListener
                        ? i.addEventListener("unload", ot, !1)
                        : i.attachEvent && i.attachEvent("onunload", ot)),
                  (n.scope = ft(function (t) {
                    return (
                      d.appendChild(t).appendChild(p.createElement("div")),
                      void 0 !== t.querySelectorAll &&
                          !t.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ft(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ft(function (t) {
                    return (
                      t.appendChild(p.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Q.test(
                    p.getElementsByClassName,
                  )),
                  (n.getById = ft(function (t) {
                    return (
                      (d.appendChild(t).id = b),
                      !p.getElementsByName || !p.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (r.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && v) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }))
                    : ((r.filter.ID = function (t) {
                      var e = t.replace(et, nt);
                      return function (t) {
                        var n =
                              void 0 !== t.getAttributeNode &&
                              t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    }),
                    (r.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && v) {
                        var n,
                          r,
                          i,
                          o = e.getElementById(t);
                        if (o) {
                          if (
                            (n = o.getAttributeNode("id")) &&
                                n.value === t
                          )
                            return [o];
                          for (
                            i = e.getElementsByName(t), r = 0;
                            (o = i[r++]);

                          )
                            if (
                              (n = o.getAttributeNode("id")) &&
                                  n.value === t
                            )
                              return [o];
                        }
                        return [];
                      }
                    })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : n.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                    }
                    : function (t, e) {
                      var n,
                        r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = o[i++]); )
                          1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                  (r.find.CLASS =
                      n.getElementsByClassName &&
                      function (t, e) {
                        if (void 0 !== e.getElementsByClassName && v)
                          return e.getElementsByClassName(t);
                      }),
                  (y = []),
                  (g = []),
                  (n.qsa = Q.test(p.querySelectorAll)) &&
                      (ft(function (t) {
                        var e;
                        (d.appendChild(t).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=" + P + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                            g.push("\\[" + P + "*(?:value|" + I + ")"),
                        t.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                        (e = p.createElement("input")).setAttribute(
                          "name",
                          "",
                        ),
                        t.appendChild(e),
                        t.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[" +
                                P +
                                "*name" +
                                P +
                                "*=" +
                                P +
                                "*(?:''|\"\")",
                            ),
                        t.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                        t.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                        t.querySelectorAll("\\\f"),
                        g.push("[\\r\\n\\f]");
                      }),
                      ft(function (t) {
                        t.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                            g.push("name" + P + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                        (d.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        g.push(",.*:");
                      })),
                  (n.matchesSelector = Q.test(
                    (m =
                        d.matches ||
                        d.webkitMatchesSelector ||
                        d.mozMatchesSelector ||
                        d.oMatchesSelector ||
                        d.msMatchesSelector),
                  )) &&
                      ft(function (t) {
                        (n.disconnectedMatch = m.call(t, "*")),
                        m.call(t, "[s!='']:x"),
                        y.push("!=", q);
                      }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (y = y.length && new RegExp(y.join("|"))),
                  (e = Q.test(d.compareDocumentPosition)),
                  (x =
                      e || Q.test(d.contains)
                        ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                          return (
                            t === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : t.compareDocumentPosition &&
                                    16 & t.compareDocumentPosition(r))
                              )
                          );
                        }
                        : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); )
                              if (e === t) return !0;
                          return !1;
                        }),
                  (C = e
                    ? function (t, e) {
                      if (t === e) return (l = !0), 0;
                      var r =
                            !t.compareDocumentPosition -
                            !e.compareDocumentPosition;
                      return (
                        r ||
                            (1 &
                              (r =
                                (t.ownerDocument || t) == (e.ownerDocument || e)
                                  ? t.compareDocumentPosition(e)
                                  : 1) ||
                            (!n.sortDetached &&
                              e.compareDocumentPosition(t) === r)
                              ? t == p || (t.ownerDocument == w && x(w, t))
                                ? -1
                                : e == p || (e.ownerDocument == w && x(w, e))
                                  ? 1
                                  : f
                                    ? D(f, t) - D(f, e)
                                    : 0
                              : 4 & r
                                ? -1
                                : 1)
                      );
                    }
                    : function (t, e) {
                      if (t === e) return (l = !0), 0;
                      var n,
                        r = 0,
                        i = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        u = [e];
                      if (!i || !o)
                        return t == p
                          ? -1
                          : e == p
                            ? 1
                            : i
                              ? -1
                              : o
                                ? 1
                                : f
                                  ? D(f, t) - D(f, e)
                                  : 0;
                      if (i === o) return ht(t, e);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (n = e; (n = n.parentNode); ) u.unshift(n);
                      for (; a[r] === u[r]; ) r++;
                      return r
                        ? ht(a[r], u[r])
                        : a[r] == w
                          ? -1
                          : u[r] == w
                            ? 1
                            : 0;
                    }),
                  p)
                  : p;
              }),
            (ut.matches = function (t, e) {
              return ut(t, null, null, e);
            }),
            (ut.matchesSelector = function (t, e) {
              if (
                (h(t),
                n.matchesSelector &&
                  v &&
                  !M[e + " "] &&
                  (!y || !y.test(e)) &&
                  (!g || !g.test(e)))
              )
                try {
                  var r = m.call(t, e);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return r;
                } catch (t) {
                  M(e, !0);
                }
              return ut(e, p, null, [t]).length > 0;
            }),
            (ut.contains = function (t, e) {
              return (t.ownerDocument || t) != p && h(t), x(t, e);
            }),
            (ut.attr = function (t, e) {
              (t.ownerDocument || t) != p && h(t);
              var i = r.attrHandle[e.toLowerCase()],
                o =
                  i && N.call(r.attrHandle, e.toLowerCase())
                    ? i(t, e, !v)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !v
                  ? t.getAttribute(e)
                  : (o = t.getAttributeNode(e)) && o.specified
                    ? o.value
                    : null;
            }),
            (ut.escape = function (t) {
              return (t + "").replace(rt, it);
            }),
            (ut.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (ut.uniqueSort = function (t) {
              var e,
                r = [],
                i = 0,
                o = 0;
              if (
                ((l = !n.detectDuplicates),
                (f = !n.sortStable && t.slice(0)),
                t.sort(C),
                l)
              ) {
                for (; (e = t[o++]); ) e === t[o] && (i = r.push(o));
                for (; i--; ) t.splice(r[i], 1);
              }
              return (f = null), t;
            }),
            (i = ut.getText =
              function (t) {
                var e,
                  n = "",
                  r = 0,
                  o = t.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += i(t);
                  } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[r++]); ) n += i(e);
                return n;
              }),
            ((r = ut.selectors =
              {
                cacheLength: 50,
                createPseudo: ct,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (t) {
                    return (
                      (t[1] = t[1].replace(et, nt)),
                      (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                      "~=" === t[2] && (t[3] = " " + t[3] + " "),
                      t.slice(0, 4)
                    );
                  },
                  CHILD: function (t) {
                    return (
                      (t[1] = t[1].toLowerCase()),
                      "nth" === t[1].slice(0, 3)
                        ? (t[3] || ut.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                        : t[3] && ut.error(t[0]),
                      t
                    );
                  },
                  PSEUDO: function (t) {
                    var e,
                      n = !t[6] && t[2];
                    return X.CHILD.test(t[0])
                      ? null
                      : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : n &&
                            Y.test(n) &&
                            (e = a(n, !0)) &&
                            (e = n.indexOf(")", n.length - e) - n.length) &&
                            ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t
                      ? function () {
                        return !0;
                      }
                      : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                  },
                  CLASS: function (t) {
                    var e = T[t + " "];
                    return (
                      e ||
                      ((e = new RegExp(
                        "(^|" + P + ")" + t + "(" + P + "|$)",
                      )) &&
                        T(t, function (t) {
                          return e.test(
                            ("string" == typeof t.className && t.className) ||
                              (void 0 !== t.getAttribute &&
                                t.getAttribute("class")) ||
                              "",
                          );
                        }))
                    );
                  },
                  ATTR: function (t, e, n) {
                    return function (r) {
                      var i = ut.attr(r, t);
                      return null == i
                        ? "!=" === e
                        : !e ||
                            ((i += ""),
                            "=" === e
                              ? i === n
                              : "!=" === e
                                ? i !== n
                                : "^=" === e
                                  ? n && 0 === i.indexOf(n)
                                  : "*=" === e
                                    ? n && i.indexOf(n) > -1
                                    : "$=" === e
                                      ? n && i.slice(-n.length) === n
                                      : "~=" === e
                                        ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1
                                        : "|=" === e &&
                                (i === n ||
                                  i.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                      a = "last" !== t.slice(-4),
                      u = "of-type" === e;
                    return 1 === r && 0 === i
                      ? function (t) {
                        return !!t.parentNode;
                      }
                      : function (e, n, s) {
                        var c,
                          f,
                          l,
                          h,
                          p,
                          d,
                          v = o !== a ? "nextSibling" : "previousSibling",
                          g = e.parentNode,
                          y = u && e.nodeName.toLowerCase(),
                          m = !s && !u,
                          x = !1;
                        if (g) {
                          if (o) {
                            for (; v; ) {
                              for (h = e; (h = h[v]); )
                                if (
                                  u
                                    ? h.nodeName.toLowerCase() === y
                                    : 1 === h.nodeType
                                )
                                  return !1;
                              d = v = "only" === t && !d && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((d = [a ? g.firstChild : g.lastChild]), a && m)
                          ) {
                            for (
                              x =
                                  (p =
                                    (c =
                                      (f =
                                        (l = (h = g)[b] || (h[b] = {}))[
                                          h.uniqueID
                                        ] || (l[h.uniqueID] = {}))[t] ||
                                      [])[0] === _ && c[1]) && c[2],
                              h = p && g.childNodes[p];
                              (h =
                                  (++p && h && h[v]) || (x = p = 0) || d.pop());

                            )
                              if (1 === h.nodeType && ++x && h === e) {
                                f[t] = [_, p, x];
                                break;
                              }
                          } else if (
                            (m &&
                                (x = p =
                                  (c =
                                    (f =
                                      (l = (h = e)[b] || (h[b] = {}))[
                                        h.uniqueID
                                      ] || (l[h.uniqueID] = {}))[t] ||
                                    [])[0] === _ && c[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (h =
                                  (++p && h && h[v]) ||
                                  (x = p = 0) ||
                                  d.pop()) &&
                                ((u
                                  ? h.nodeName.toLowerCase() !== y
                                  : 1 !== h.nodeType) ||
                                  !++x ||
                                  (m &&
                                    ((f =
                                      (l = h[b] || (h[b] = {}))[h.uniqueID] ||
                                      (l[h.uniqueID] = {}))[t] = [_, x]),
                                  h !== e));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                  },
                  PSEUDO: function (t, e) {
                    var n,
                      i =
                        r.pseudos[t] ||
                        r.setFilters[t.toLowerCase()] ||
                        ut.error("unsupported pseudo: " + t);
                    return i[b]
                      ? i(e)
                      : i.length > 1
                        ? ((n = [t, t, "", e]),
                        r.setFilters.hasOwnProperty(t.toLowerCase())
                          ? ct(function (t, n) {
                            for (var r, o = i(t, e), a = o.length; a--; )
                              t[(r = D(t, o[a]))] = !(n[r] = o[a]);
                          })
                          : function (t) {
                            return i(t, 0, n);
                          })
                        : i;
                  },
                },
                pseudos: {
                  not: ct(function (t) {
                    var e = [],
                      n = [],
                      r = u(t.replace(H, "$1"));
                    return r[b]
                      ? ct(function (t, e, n, i) {
                        for (
                          var o, a = r(t, null, i, []), u = t.length;
                          u--;

                        )
                          (o = a[u]) && (t[u] = !(e[u] = o));
                      })
                      : function (t, i, o) {
                        return (
                          (e[0] = t),
                          r(e, null, o, n),
                          (e[0] = null),
                          !n.pop()
                        );
                      };
                  }),
                  has: ct(function (t) {
                    return function (e) {
                      return ut(t, e).length > 0;
                    };
                  }),
                  contains: ct(function (t) {
                    return (
                      (t = t.replace(et, nt)),
                      function (e) {
                        return (e.textContent || i(e)).indexOf(t) > -1;
                      }
                    );
                  }),
                  lang: ct(function (t) {
                    return (
                      V.test(t || "") || ut.error("unsupported lang: " + t),
                      (t = t.replace(et, nt).toLowerCase()),
                      function (e) {
                        var n;
                        do {
                          if (
                            (n = v
                              ? e.lang
                              : e.getAttribute("xml:lang") ||
                                e.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === t ||
                              0 === n.indexOf(t + "-")
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                  },
                  root: function (t) {
                    return t === d;
                  },
                  focus: function (t) {
                    return (
                      t === p.activeElement &&
                      (!p.hasFocus || p.hasFocus()) &&
                      !!(t.type || t.href || ~t.tabIndex)
                    );
                  },
                  enabled: vt(!1),
                  disabled: vt(!0),
                  checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && !!t.checked) ||
                      ("option" === e && !!t.selected)
                    );
                  },
                  selected: function (t) {
                    return (
                      t.parentNode && t.parentNode.selectedIndex,
                      !0 === t.selected
                    );
                  },
                  empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (t) {
                    return !r.pseudos.empty(t);
                  },
                  header: function (t) {
                    return Z.test(t.nodeName);
                  },
                  input: function (t) {
                    return J.test(t.nodeName);
                  },
                  button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && "button" === t.type) || "button" === e
                    );
                  },
                  text: function (t) {
                    var e;
                    return (
                      "input" === t.nodeName.toLowerCase() &&
                      "text" === t.type &&
                      (null == (e = t.getAttribute("type")) ||
                        "text" === e.toLowerCase())
                    );
                  },
                  first: gt(function () {
                    return [0];
                  }),
                  last: gt(function (t, e) {
                    return [e - 1];
                  }),
                  eq: gt(function (t, e, n) {
                    return [n < 0 ? n + e : n];
                  }),
                  even: gt(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  odd: gt(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  lt: gt(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                      t.push(r);
                    return t;
                  }),
                  gt: gt(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
                    return t;
                  }),
                },
              }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[e] = pt(e);
            for (e in { submit: !0, reset: !0 }) r.pseudos[e] = dt(e);
            function mt() {}
            function xt(t) {
              for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
              return r;
            }
            function bt(t, e, n) {
              var r = e.dir,
                i = e.next,
                o = i || r,
                a = n && "parentNode" === o,
                u = S++;
              return e.first
                ? function (e, n, i) {
                  for (; (e = e[r]); )
                    if (1 === e.nodeType || a) return t(e, n, i);
                  return !1;
                }
                : function (e, n, s) {
                  var c,
                    f,
                    l,
                    h = [_, u];
                  if (s) {
                    for (; (e = e[r]); )
                      if ((1 === e.nodeType || a) && t(e, n, s)) return !0;
                  } else
                    for (; (e = e[r]); )
                      if (1 === e.nodeType || a)
                        if (
                          ((f =
                              (l = e[b] || (e[b] = {}))[e.uniqueID] ||
                              (l[e.uniqueID] = {})),
                          i && i === e.nodeName.toLowerCase())
                        )
                          e = e[r] || e;
                        else {
                          if ((c = f[o]) && c[0] === _ && c[1] === u)
                            return (h[2] = c[2]);
                          if (((f[o] = h), (h[2] = t(e, n, s)))) return !0;
                        }
                  return !1;
                };
            }
            function wt(t) {
              return t.length > 1
                ? function (e, n, r) {
                  for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
                  return !0;
                }
                : t[0];
            }
            function _t(t, e, n, r, i) {
              for (
                var o, a = [], u = 0, s = t.length, c = null != e;
                u < s;
                u++
              )
                (o = t[u]) &&
                  ((n && !n(o, r, i)) || (a.push(o), c && e.push(u)));
              return a;
            }
            function St(t, e, n, r, i, o) {
              return (
                r && !r[b] && (r = St(r)),
                i && !i[b] && (i = St(i, o)),
                ct(function (o, a, u, s) {
                  var c,
                    f,
                    l,
                    h = [],
                    p = [],
                    d = a.length,
                    v =
                      o ||
                      (function (t, e, n) {
                        for (var r = 0, i = e.length; r < i; r++)
                          ut(t, e[r], n);
                        return n;
                      })(e || "*", u.nodeType ? [u] : u, []),
                    g = !t || (!o && e) ? v : _t(v, h, t, u, s),
                    y = n ? (i || (o ? t : d || r) ? [] : a) : g;
                  if ((n && n(g, y, u, s), r))
                    for (c = _t(y, p), r(c, [], u, s), f = c.length; f--; )
                      (l = c[f]) && (y[p[f]] = !(g[p[f]] = l));
                  if (o) {
                    if (i || t) {
                      if (i) {
                        for (c = [], f = y.length; f--; )
                          (l = y[f]) && c.push((g[f] = l));
                        i(null, (y = []), c, s);
                      }
                      for (f = y.length; f--; )
                        (l = y[f]) &&
                          (c = i ? D(o, l) : h[f]) > -1 &&
                          (o[c] = !(a[c] = l));
                    }
                  } else
                    (y = _t(y === a ? y.splice(d, y.length) : y)),
                    i ? i(null, a, y, s) : O.apply(a, y);
                })
              );
            }
            function Tt(t) {
              for (
                var e,
                  n,
                  i,
                  o = t.length,
                  a = r.relative[t[0].type],
                  u = a || r.relative[" "],
                  s = a ? 1 : 0,
                  f = bt(
                    function (t) {
                      return t === e;
                    },
                    u,
                    !0,
                  ),
                  l = bt(
                    function (t) {
                      return D(e, t) > -1;
                    },
                    u,
                    !0,
                  ),
                  h = [
                    function (t, n, r) {
                      var i =
                        (!a && (r || n !== c)) ||
                        ((e = n).nodeType ? f(t, n, r) : l(t, n, r));
                      return (e = null), i;
                    },
                  ];
                s < o;
                s++
              )
                if ((n = r.relative[t[s].type])) h = [bt(wt(h), n)];
                else {
                  if ((n = r.filter[t[s].type].apply(null, t[s].matches))[b]) {
                    for (i = ++s; i < o && !r.relative[t[i].type]; i++);
                    return St(
                      s > 1 && wt(h),
                      s > 1 &&
                        xt(
                          t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : "",
                          }),
                        ).replace(H, "$1"),
                      n,
                      s < i && Tt(t.slice(s, i)),
                      i < o && Tt((t = t.slice(i))),
                      i < o && xt(t),
                    );
                  }
                  h.push(n);
                }
              return wt(h);
            }
            return (
              (mt.prototype = r.filters = r.pseudos),
              (r.setFilters = new mt()),
              (a = ut.tokenize =
                function (t, e) {
                  var n,
                    i,
                    o,
                    a,
                    u,
                    s,
                    c,
                    f = E[t + " "];
                  if (f) return e ? 0 : f.slice(0);
                  for (u = t, s = [], c = r.preFilter; u; ) {
                    for (a in ((n && !(i = z.exec(u))) ||
                      (i && (u = u.slice(i[0].length) || u), s.push((o = []))),
                    (n = !1),
                    (i = W.exec(u)) &&
                      ((n = i.shift()),
                      o.push({ value: n, type: i[0].replace(H, " ") }),
                      (u = u.slice(n.length))),
                    r.filter))
                      !(i = X[a].exec(u)) ||
                        (c[a] && !(i = c[a](i))) ||
                        ((n = i.shift()),
                        o.push({ value: n, type: a, matches: i }),
                        (u = u.slice(n.length)));
                    if (!n) break;
                  }
                  return e ? u.length : u ? ut.error(t) : E(t, s).slice(0);
                }),
              (u = ut.compile =
                function (t, e) {
                  var n,
                    i = [],
                    o = [],
                    u = A[t + " "];
                  if (!u) {
                    for (e || (e = a(t)), n = e.length; n--; )
                      (u = Tt(e[n]))[b] ? i.push(u) : o.push(u);
                    (u = A(
                      t,
                      (function (t, e) {
                        var n = e.length > 0,
                          i = t.length > 0,
                          o = function (o, a, u, s, f) {
                            var l,
                              d,
                              g,
                              y = 0,
                              m = "0",
                              x = o && [],
                              b = [],
                              w = c,
                              S = o || (i && r.find.TAG("*", f)),
                              T = (_ += null == w ? 1 : Math.random() || 0.1),
                              E = S.length;
                            for (
                              f && (c = a == p || a || f);
                              m !== E && null != (l = S[m]);
                              m++
                            ) {
                              if (i && l) {
                                for (
                                  d = 0,
                                  a ||
                                      l.ownerDocument == p ||
                                      (h(l), (u = !v));
                                  (g = t[d++]);

                                )
                                  if (g(l, a || p, u)) {
                                    s.push(l);
                                    break;
                                  }
                                f && (_ = T);
                              }
                              n && ((l = !g && l) && y--, o && x.push(l));
                            }
                            if (((y += m), n && m !== y)) {
                              for (d = 0; (g = e[d++]); ) g(x, b, a, u);
                              if (o) {
                                if (y > 0)
                                  for (; m--; )
                                    x[m] || b[m] || (b[m] = j.call(s));
                                b = _t(b);
                              }
                              O.apply(s, b),
                              f &&
                                  !o &&
                                  b.length > 0 &&
                                  y + e.length > 1 &&
                                  ut.uniqueSort(s);
                            }
                            return f && ((_ = T), (c = w)), x;
                          };
                        return n ? ct(o) : o;
                      })(o, i),
                    )).selector = t;
                  }
                  return u;
                }),
              (s = ut.select =
                function (t, e, n, i) {
                  var o,
                    s,
                    c,
                    f,
                    l,
                    h = "function" == typeof t && t,
                    p = !i && a((t = h.selector || t));
                  if (((n = n || []), 1 === p.length)) {
                    if (
                      (s = p[0] = p[0].slice(0)).length > 2 &&
                      "ID" === (c = s[0]).type &&
                      9 === e.nodeType &&
                      v &&
                      r.relative[s[1].type]
                    ) {
                      if (
                        !(e = (r.find.ID(c.matches[0].replace(et, nt), e) ||
                          [])[0])
                      )
                        return n;
                      h && (e = e.parentNode),
                      (t = t.slice(s.shift().value.length));
                    }
                    for (
                      o = X.needsContext.test(t) ? 0 : s.length;
                      o-- && ((c = s[o]), !r.relative[(f = c.type)]);

                    )
                      if (
                        (l = r.find[f]) &&
                        (i = l(
                          c.matches[0].replace(et, nt),
                          (tt.test(s[0].type) && yt(e.parentNode)) || e,
                        ))
                      ) {
                        if ((s.splice(o, 1), !(t = i.length && xt(s))))
                          return O.apply(n, i), n;
                        break;
                      }
                  }
                  return (
                    (h || u(t, p))(
                      i,
                      e,
                      !v,
                      n,
                      !e || (tt.test(t) && yt(e.parentNode)) || e,
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(C).join("") === b),
              (n.detectDuplicates = !!l),
              h(),
              (n.sortDetached = ft(function (t) {
                return (
                  1 & t.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ft(function (t) {
                return (
                  (t.innerHTML = "<a href='#'></a>"),
                  "#" === t.firstChild.getAttribute("href")
                );
              }) ||
                lt("type|href|height|width", function (t, e, n) {
                  if (!n)
                    return t.getAttribute(
                      e,
                      "type" === e.toLowerCase() ? 1 : 2,
                    );
                }),
              (n.attributes &&
                ft(function (t) {
                  return (
                    (t.innerHTML = "<input/>"),
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                  );
                })) ||
                lt("value", function (t, e, n) {
                  if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue;
                }),
              ft(function (t) {
                return null == t.getAttribute("disabled");
              }) ||
                lt(I, function (t, e, n) {
                  var r;
                  if (!n)
                    return !0 === t[e]
                      ? e.toLowerCase()
                      : (r = t.getAttributeNode(e)) && r.specified
                        ? r.value
                        : null;
                }),
              ut
            );
          })(n);
        (S.find = E),
        (S.expr = E.selectors),
        (S.expr[":"] = S.expr.pseudos),
        (S.uniqueSort = S.unique = E.uniqueSort),
        (S.text = E.getText),
        (S.isXMLDoc = E.isXML),
        (S.contains = E.contains),
        (S.escapeSelector = E.escape);
        var A = function (t, e, n) {
            for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                if (i && S(t).is(n)) break;
                r.push(t);
              }
            return r;
          },
          M = function (t, e) {
            for (var n = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && n.push(t);
            return n;
          },
          C = S.expr.match.needsContext;
        function N(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var k =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(t, e, n) {
          return y(e)
            ? S.grep(t, function (t, r) {
              return !!e.call(t, r, t) !== n;
            })
            : e.nodeType
              ? S.grep(t, function (t) {
                return (t === e) !== n;
              })
              : "string" != typeof e
                ? S.grep(t, function (t) {
                  return f.call(e, t) > -1 !== n;
                })
                : S.filter(e, t, n);
        }
        (S.filter = function (t, e, n) {
          var r = e[0];
          return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, t)
                ? [r]
                : []
              : S.find.matches(
                t,
                S.grep(e, function (t) {
                  return 1 === t.nodeType;
                }),
              )
          );
        }),
        S.fn.extend({
          find: function (t) {
            var e,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof t)
              return this.pushStack(
                S(t).filter(function () {
                  for (e = 0; e < r; e++)
                    if (S.contains(i[e], this)) return !0;
                }),
              );
            for (n = this.pushStack([]), e = 0; e < r; e++)
              S.find(t, i[e], n);
            return r > 1 ? S.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(j(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(j(this, t || [], !0));
          },
          is: function (t) {
            return !!j(
              this,
              "string" == typeof t && C.test(t) ? S(t) : t || [],
              !1,
            ).length;
          },
        });
        var R,
          O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (t, e, n) {
          var r, i;
          if (!t) return this;
          if (((n = n || R), "string" == typeof t)) {
            if (
              !(r =
                "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : O.exec(t)) ||
              (!r[1] && e)
            )
              return !e || e.jquery
                ? (e || n).find(t)
                : this.constructor(e).find(t);
            if (r[1]) {
              if (
                ((e = e instanceof S ? e[0] : e),
                S.merge(
                  this,
                  S.parseHTML(
                    r[1],
                    e && e.nodeType ? e.ownerDocument || e : x,
                    !0,
                  ),
                ),
                k.test(r[1]) && S.isPlainObject(e))
              )
                for (r in e) y(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
              return this;
            }
            return (
              (i = x.getElementById(r[2])) &&
                ((this[0] = i), (this.length = 1)),
              this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : y(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(S)
              : S.makeArray(t, this);
        }).prototype = S.fn),
        (R = S(x));
        var L = /^(?:parents|prev(?:Until|All))/,
          D = { children: !0, contents: !0, next: !0, prev: !0 };
        function I(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        S.fn.extend({
          has: function (t) {
            var e = S(t, this),
              n = e.length;
            return this.filter(function () {
              for (var t = 0; t < n; t++) if (S.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof t && S(t);
            if (!C.test(t))
              for (; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && S.find.matchesSelector(n, t))
                  ) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? f.call(S(t), this[0])
                : f.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
          },
          add: function (t, e) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))));
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t),
            );
          },
        }),
        S.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return A(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return A(t, "parentNode", n);
            },
            next: function (t) {
              return I(t, "nextSibling");
            },
            prev: function (t) {
              return I(t, "previousSibling");
            },
            nextAll: function (t) {
              return A(t, "nextSibling");
            },
            prevAll: function (t) {
              return A(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return A(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return A(t, "previousSibling", n);
            },
            siblings: function (t) {
              return M((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return M(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && a(t.contentDocument)
                ? t.contentDocument
                : (N(t, "template") && (t = t.content || t),
                S.merge([], t.childNodes));
            },
          },
          function (t, e) {
            S.fn[t] = function (n, r) {
              var i = S.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (r = n),
                r && "string" == typeof r && (i = S.filter(r, i)),
                this.length > 1 &&
                    (D[t] || S.uniqueSort(i), L.test(t) && i.reverse()),
                this.pushStack(i)
              );
            };
          },
        );
        var P = /[^\x20\t\r\n\f]+/g;
        function U(t) {
          return t;
        }
        function F(t) {
          throw t;
        }
        function q(t, e, n, r) {
          var i;
          try {
            t && y((i = t.promise))
              ? i.call(t).done(e).fail(n)
              : t && y((i = t.then))
                ? i.call(t, e, n)
                : e.apply(void 0, [t].slice(r));
          } catch (t) {
            n.apply(void 0, [t]);
          }
        }
        (S.Callbacks = function (t) {
          t =
            "string" == typeof t
              ? (function (t) {
                var e = {};
                return (
                  S.each(t.match(P) || [], function (t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
              : S.extend({}, t);
          var e,
            n,
            r,
            i,
            o = [],
            a = [],
            u = -1,
            s = function () {
              for (i = i || t.once, r = e = !0; a.length; u = -1)
                for (n = a.shift(); ++u < o.length; )
                  !1 === o[u].apply(n[0], n[1]) &&
                    t.stopOnFalse &&
                    ((u = o.length), (n = !1));
              t.memory || (n = !1), (e = !1), i && (o = n ? [] : "");
            },
            c = {
              add: function () {
                return (
                  o &&
                    (n && !e && ((u = o.length - 1), a.push(n)),
                    (function e(n) {
                      S.each(n, function (n, r) {
                        y(r)
                          ? (t.unique && c.has(r)) || o.push(r)
                          : r && r.length && "string" !== _(r) && e(r);
                      });
                    })(arguments),
                    n && !e && s()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (t, e) {
                    for (var n; (n = S.inArray(e, o, n)) > -1; )
                      o.splice(n, 1), n <= u && u--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? S.inArray(t, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return (i = a = []), (o = n = ""), this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return (i = a = []), n || e || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (t, n) {
                return (
                  i ||
                    ((n = [t, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    e || s()),
                  this
                );
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              },
            };
          return c;
        }),
        S.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  S.Callbacks("memory"),
                  S.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  S.Callbacks("once memory"),
                  S.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  S.Callbacks("once memory"),
                  S.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return i.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return S.Deferred(function (n) {
                    S.each(e, function (e, r) {
                      var i = y(t[r[4]]) && t[r[4]];
                      o[r[1]](function () {
                        var t = i && i.apply(this, arguments);
                        t && y(t.promise)
                          ? t
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [t] : arguments);
                      });
                    }),
                    (t = null);
                  }).promise();
                },
                then: function (t, r, i) {
                  var o = 0;
                  function a(t, e, r, i) {
                    return function () {
                      var u = this,
                        s = arguments,
                        c = function () {
                          var n, c;
                          if (!(t < o)) {
                            if ((n = r.apply(u, s)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                            y(c)
                              ? i
                                ? c.call(n, a(o, e, U, i), a(o, e, F, i))
                                : (o++,
                                c.call(
                                  n,
                                  a(o, e, U, i),
                                  a(o, e, F, i),
                                  a(o, e, U, e.notifyWith),
                                ))
                              : (r !== U && ((u = void 0), (s = [n])),
                              (i || e.resolveWith)(u, s));
                          }
                        },
                        f = i
                          ? c
                          : function () {
                            try {
                              c();
                            } catch (n) {
                              S.Deferred.exceptionHook &&
                                    S.Deferred.exceptionHook(n, f.stackTrace),
                              t + 1 >= o &&
                                      (r !== F && ((u = void 0), (s = [n])),
                                      e.rejectWith(u, s));
                            }
                          };
                      t
                        ? f()
                        : (S.Deferred.getStackHook &&
                              (f.stackTrace = S.Deferred.getStackHook()),
                        n.setTimeout(f));
                    };
                  }
                  return S.Deferred(function (n) {
                    e[0][3].add(a(0, n, y(i) ? i : U, n.notifyWith)),
                    e[1][3].add(a(0, n, y(t) ? t : U)),
                    e[2][3].add(a(0, n, y(r) ? r : F));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? S.extend(t, i) : i;
                },
              },
              o = {};
            return (
              S.each(e, function (t, n) {
                var a = n[2],
                  u = n[5];
                (i[n[1]] = a.add),
                u &&
                      a.add(
                        function () {
                          r = u;
                        },
                        e[3 - t][2].disable,
                        e[3 - t][3].disable,
                        e[0][2].lock,
                        e[0][3].lock,
                      ),
                a.add(n[3].fire),
                (o[n[0]] = function () {
                  return (
                    o[n[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              r = Array(n),
              i = u.call(arguments),
              o = S.Deferred(),
              a = function (t) {
                return function (n) {
                  (r[t] = this),
                  (i[t] = arguments.length > 1 ? u.call(arguments) : n),
                  --e || o.resolveWith(r, i);
                };
              };
            if (
              e <= 1 &&
                (q(t, o.done(a(n)).resolve, o.reject, !e),
                "pending" === o.state() || y(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) q(i[n], a(n), o.reject);
            return o.promise();
          },
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (t, e) {
          n.console &&
            n.console.warn &&
            t &&
            B.test(t.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + t.message,
              t.stack,
              e,
            );
        }),
        (S.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
        var H = S.Deferred();
        function z() {
          x.removeEventListener("DOMContentLoaded", z),
          n.removeEventListener("load", z),
          S.ready();
        }
        (S.fn.ready = function (t) {
          return (
            H.then(t).catch(function (t) {
              S.readyException(t);
            }),
            this
          );
        }),
        S.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0),
                (!0 !== t && --S.readyWait > 0) || H.resolveWith(x, [S]));
          },
        }),
        (S.ready.then = H.then),
        "complete" === x.readyState ||
          ("loading" !== x.readyState && !x.documentElement.doScroll)
          ? n.setTimeout(S.ready)
          : (x.addEventListener("DOMContentLoaded", z),
          n.addEventListener("load", z));
        var W = function (t, e, n, r, i, o, a) {
            var u = 0,
              s = t.length,
              c = null == n;
            if ("object" === _(n))
              for (u in ((i = !0), n)) W(t, e, u, n[u], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (a = !0),
              c &&
                (a
                  ? (e.call(t, r), (e = null))
                  : ((c = e),
                  (e = function (t, e, n) {
                    return c.call(S(t), n);
                  }))),
              e)
            )
              for (; u < s; u++)
                e(t[u], n, a ? r : r.call(t[u], u, e(t[u], n)));
            return i ? t : c ? e.call(t) : s ? e(t[0], n) : o;
          },
          $ = /^-ms-/,
          Y = /-([a-z])/g;
        function V(t, e) {
          return e.toUpperCase();
        }
        function X(t) {
          return t.replace($, "ms-").replace(Y, V);
        }
        var G = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function J() {
          this.expando = S.expando + J.uid++;
        }
        (J.uid = 1),
        (J.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                  ((e = {}),
                  G(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var r,
              i = this.cache(t);
            if ("string" == typeof e) i[X(e)] = n;
            else for (r in e) i[X(r)] = e[r];
            return i;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][X(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              r = t[this.expando];
            if (void 0 !== r) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(X)
                  : (e = X(e)) in r
                    ? [e]
                    : e.match(P) || []).length;
                for (; n--; ) delete r[e[n]];
              }
              (void 0 === e || S.isEmptyObject(r)) &&
                  (t.nodeType
                    ? (t[this.expando] = void 0)
                    : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !S.isEmptyObject(e);
          },
        });
        var Z = new J(),
          Q = new J(),
          K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          tt = /[A-Z]/g;
        function et(t, e, n) {
          var r;
          if (void 0 === n && 1 === t.nodeType)
            if (
              ((r = "data-" + e.replace(tt, "-$&").toLowerCase()),
              "string" == typeof (n = t.getAttribute(r)))
            ) {
              try {
                n = (function (t) {
                  return (
                    "true" === t ||
                    ("false" !== t &&
                      ("null" === t
                        ? null
                        : t === +t + ""
                          ? +t
                          : K.test(t)
                            ? JSON.parse(t)
                            : t))
                  );
                })(n);
              } catch (t) {}
              Q.set(t, e, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (t) {
            return Q.hasData(t) || Z.hasData(t);
          },
          data: function (t, e, n) {
            return Q.access(t, e, n);
          },
          removeData: function (t, e) {
            Q.remove(t, e);
          },
          _data: function (t, e, n) {
            return Z.access(t, e, n);
          },
          _removeData: function (t, e) {
            Z.remove(t, e);
          },
        }),
        S.fn.extend({
          data: function (t, e) {
            var n,
              r,
              i,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                  ((i = Q.get(o)),
                  1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                      0 === (r = a[n].name).indexOf("data-") &&
                      ((r = X(r.slice(5))), et(o, r, i[r]));
                Z.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof t
              ? this.each(function () {
                Q.set(this, t);
              })
              : W(
                this,
                function (e) {
                  var n;
                  if (o && void 0 === e)
                    return void 0 !== (n = Q.get(o, t)) ||
                          void 0 !== (n = et(o, t))
                      ? n
                      : void 0;
                  this.each(function () {
                    Q.set(this, t, e);
                  });
                },
                null,
                e,
                arguments.length > 1,
                null,
                !0,
              );
          },
          removeData: function (t) {
            return this.each(function () {
              Q.remove(this, t);
            });
          },
        }),
        S.extend({
          queue: function (t, e, n) {
            var r;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (r = Z.get(t, e)),
                n &&
                    (!r || Array.isArray(n)
                      ? (r = Z.access(t, e, S.makeArray(n)))
                      : r.push(n)),
                r || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = S.queue(t, e),
              r = n.length,
              i = n.shift(),
              o = S._queueHooks(t, e);
            "inprogress" === i && ((i = n.shift()), r--),
            i &&
                  ("fx" === e && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    t,
                    function () {
                      S.dequeue(t, e);
                    },
                    o,
                  )),
            !r && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              Z.get(t, n) ||
                Z.access(t, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    Z.remove(t, [e + "queue", n]);
                  }),
                })
            );
          },
        }),
        S.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? S.queue(this[0], t)
                : void 0 === e
                  ? this
                  : this.each(function () {
                    var n = S.queue(this, t, e);
                    S._queueHooks(this, t),
                    "fx" === t &&
                          "inprogress" !== n[0] &&
                          S.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              S.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              r = 1,
              i = S.Deferred(),
              o = this,
              a = this.length,
              u = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = Z.get(o[a], t + "queueHooks")) &&
                  n.empty &&
                  (r++, n.empty.add(u));
            return u(), i.promise(e);
          },
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          rt = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
          it = ["Top", "Right", "Bottom", "Left"],
          ot = x.documentElement,
          at = function (t) {
            return S.contains(t.ownerDocument, t);
          },
          ut = { composed: !0 };
        ot.getRootNode &&
          (at = function (t) {
            return (
              S.contains(t.ownerDocument, t) ||
              t.getRootNode(ut) === t.ownerDocument
            );
          });
        var st = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display && at(t) && "none" === S.css(t, "display"))
          );
        };
        function ct(t, e, n, r) {
          var i,
            o,
            a = 20,
            u = r
              ? function () {
                return r.cur();
              }
              : function () {
                return S.css(t, e, "");
              },
            s = u(),
            c = (n && n[3]) || (S.cssNumber[e] ? "" : "px"),
            f =
              t.nodeType &&
              (S.cssNumber[e] || ("px" !== c && +s)) &&
              rt.exec(S.css(t, e));
          if (f && f[3] !== c) {
            for (s /= 2, c = c || f[3], f = +s || 1; a--; )
              S.style(t, e, f + c),
              (1 - o) * (1 - (o = u() / s || 0.5)) <= 0 && (a = 0),
              (f /= o);
            (f *= 2), S.style(t, e, f + c), (n = n || []);
          }
          return (
            n &&
              ((f = +f || +s || 0),
              (i = n[1] ? f + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = c), (r.start = f), (r.end = i))),
            i
          );
        }
        var ft = {};
        function lt(t) {
          var e,
            n = t.ownerDocument,
            r = t.nodeName,
            i = ft[r];
          return (
            i ||
            ((e = n.body.appendChild(n.createElement(r))),
            (i = S.css(e, "display")),
            e.parentNode.removeChild(e),
            "none" === i && (i = "block"),
            (ft[r] = i),
            i)
          );
        }
        function ht(t, e) {
          for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
            (r = t[o]).style &&
              ((n = r.style.display),
              e
                ? ("none" === n &&
                    ((i[o] = Z.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                "" === r.style.display && st(r) && (i[o] = lt(r)))
                : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
          for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
          return t;
        }
        S.fn.extend({
          show: function () {
            return ht(this, !0);
          },
          hide: function () {
            return ht(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                st(this) ? S(this).show() : S(this).hide();
              });
          },
        });
        var pt,
          dt,
          vt = /^(?:checkbox|radio)$/i,
          gt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          yt = /^$|^module$|\/(?:java|ecma)script/i;
        (pt = x.createDocumentFragment().appendChild(x.createElement("div"))),
        (dt = x.createElement("input")).setAttribute("type", "radio"),
        dt.setAttribute("checked", "checked"),
        dt.setAttribute("name", "t"),
        pt.appendChild(dt),
        (g.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pt.innerHTML = "<textarea>x</textarea>"),
        (g.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue),
        (pt.innerHTML = "<option></option>"),
        (g.option = !!pt.lastChild);
        var mt = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function xt(t, e) {
          var n;
          return (
            (n =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || "*")
                : void 0 !== t.querySelectorAll
                  ? t.querySelectorAll(e || "*")
                  : []),
            void 0 === e || (e && N(t, e)) ? S.merge([t], n) : n
          );
        }
        function bt(t, e) {
          for (var n = 0, r = t.length; n < r; n++)
            Z.set(t[n], "globalEval", !e || Z.get(e[n], "globalEval"));
        }
        (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead),
        (mt.th = mt.td),
        g.option ||
            (mt.optgroup = mt.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var wt = /<|&#?\w+;/;
        function _t(t, e, n, r, i) {
          for (
            var o,
              a,
              u,
              s,
              c,
              f,
              l = e.createDocumentFragment(),
              h = [],
              p = 0,
              d = t.length;
            p < d;
            p++
          )
            if ((o = t[p]) || 0 === o)
              if ("object" === _(o)) S.merge(h, o.nodeType ? [o] : o);
              else if (wt.test(o)) {
                for (
                  a = a || l.appendChild(e.createElement("div")),
                  u = (gt.exec(o) || ["", ""])[1].toLowerCase(),
                  s = mt[u] || mt._default,
                  a.innerHTML = s[1] + S.htmlPrefilter(o) + s[2],
                  f = s[0];
                  f--;

                )
                  a = a.lastChild;
                S.merge(h, a.childNodes), ((a = l.firstChild).textContent = "");
              } else h.push(e.createTextNode(o));
          for (l.textContent = "", p = 0; (o = h[p++]); )
            if (r && S.inArray(o, r) > -1) i && i.push(o);
            else if (
              ((c = at(o)), (a = xt(l.appendChild(o), "script")), c && bt(a), n)
            )
              for (f = 0; (o = a[f++]); ) yt.test(o.type || "") && n.push(o);
          return l;
        }
        var St = /^([^.]*)(?:\.(.+)|)/;
        function Tt() {
          return !0;
        }
        function Et() {
          return !1;
        }
        function At(t, e) {
          return (
            (t ===
              (function () {
                try {
                  return x.activeElement;
                } catch (t) {}
              })()) ==
            ("focus" === e)
          );
        }
        function Mt(t, e, n, r, i, o) {
          var a, u;
          if ("object" == typeof e) {
            for (u in ("string" != typeof n && ((r = r || n), (n = void 0)), e))
              Mt(t, u, n, r, e[u], o);
            return t;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = void 0))
                  : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = Et;
          else if (!i) return t;
          return (
            1 === o &&
              ((a = i),
              ((i = function (t) {
                return S().off(t), a.apply(this, arguments);
              }).guid = a.guid || (a.guid = S.guid++))),
            t.each(function () {
              S.event.add(this, e, i, r, n);
            })
          );
        }
        function Ct(t, e, n) {
          n
            ? (Z.set(t, e, !1),
            S.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var r,
                  i,
                  o = Z.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (o.length)
                    (S.event.special[e] || {}).delegateType &&
                        t.stopPropagation();
                  else if (
                    ((o = u.call(arguments)),
                    Z.set(this, e, o),
                    (r = n(this, e)),
                    this[e](),
                    o !== (i = Z.get(this, e)) || r
                      ? Z.set(this, e, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      t.stopImmediatePropagation(),
                      t.preventDefault(),
                      i && i.value
                    );
                } else
                  o.length &&
                      (Z.set(this, e, {
                        value: S.event.trigger(
                          S.extend(o[0], S.Event.prototype),
                          o.slice(1),
                          this,
                        ),
                      }),
                      t.stopImmediatePropagation());
              },
            }))
            : void 0 === Z.get(t, e) && S.event.add(t, e, Tt);
        }
        (S.event = {
          global: {},
          add: function (t, e, n, r, i) {
            var o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              p,
              d,
              v,
              g = Z.get(t);
            if (G(t))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && S.find.matchesSelector(ot, i),
                n.guid || (n.guid = S.guid++),
                (s = g.events) || (s = g.events = Object.create(null)),
                (a = g.handle) ||
                    (a = g.handle =
                      function (e) {
                        return void 0 !== S && S.event.triggered !== e.type
                          ? S.event.dispatch.apply(t, arguments)
                          : void 0;
                      }),
                c = (e = (e || "").match(P) || [""]).length;
                c--;

              )
                (p = v = (u = St.exec(e[c]) || [])[1]),
                (d = (u[2] || "").split(".").sort()),
                p &&
                    ((l = S.event.special[p] || {}),
                    (p = (i ? l.delegateType : l.bindType) || p),
                    (l = S.event.special[p] || {}),
                    (f = S.extend(
                      {
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: d.join("."),
                      },
                      o,
                    )),
                    (h = s[p]) ||
                      (((h = s[p] = []).delegateCount = 0),
                      (l.setup && !1 !== l.setup.call(t, r, d, a)) ||
                        (t.addEventListener && t.addEventListener(p, a))),
                    l.add &&
                      (l.add.call(t, f),
                      f.handler.guid || (f.handler.guid = n.guid)),
                    i ? h.splice(h.delegateCount++, 0, f) : h.push(f),
                    (S.event.global[p] = !0));
          },
          remove: function (t, e, n, r, i) {
            var o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              p,
              d,
              v,
              g = Z.hasData(t) && Z.get(t);
            if (g && (s = g.events)) {
              for (c = (e = (e || "").match(P) || [""]).length; c--; )
                if (
                  ((p = v = (u = St.exec(e[c]) || [])[1]),
                  (d = (u[2] || "").split(".").sort()),
                  p)
                ) {
                  for (
                    l = S.event.special[p] || {},
                    h = s[(p = (r ? l.delegateType : l.bindType) || p)] || [],
                    u =
                        u[2] &&
                        new RegExp(
                          "(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)",
                        ),
                    a = o = h.length;
                    o--;

                  )
                    (f = h[o]),
                    (!i && v !== f.origType) ||
                        (n && n.guid !== f.guid) ||
                        (u && !u.test(f.namespace)) ||
                        (r &&
                          r !== f.selector &&
                          ("**" !== r || !f.selector)) ||
                        (h.splice(o, 1),
                        f.selector && h.delegateCount--,
                        l.remove && l.remove.call(t, f));
                  a &&
                    !h.length &&
                    ((l.teardown && !1 !== l.teardown.call(t, d, g.handle)) ||
                      S.removeEvent(t, p, g.handle),
                    delete s[p]);
                } else for (p in s) S.event.remove(t, p + e[c], n, r, !0);
              S.isEmptyObject(s) && Z.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u = new Array(arguments.length),
              s = S.event.fix(t),
              c = (Z.get(this, "events") || Object.create(null))[s.type] || [],
              f = S.event.special[s.type] || {};
            for (u[0] = s, e = 1; e < arguments.length; e++)
              u[e] = arguments[e];
            if (
              ((s.delegateTarget = this),
              !f.preDispatch || !1 !== f.preDispatch.call(this, s))
            ) {
              for (
                a = S.event.handlers.call(this, s, c), e = 0;
                (i = a[e++]) && !s.isPropagationStopped();

              )
                for (
                  s.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

                )
                  (s.rnamespace &&
                    !1 !== o.namespace &&
                    !s.rnamespace.test(o.namespace)) ||
                    ((s.handleObj = o),
                    (s.data = o.data),
                    void 0 !==
                      (r = (
                        (S.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, u)) &&
                      !1 === (s.result = r) &&
                      (s.preventDefault(), s.stopPropagation()));
              return f.postDispatch && f.postDispatch.call(this, s), s.result;
            }
          },
          handlers: function (t, e) {
            var n,
              r,
              i,
              o,
              a,
              u = [],
              s = e.delegateCount,
              c = t.target;
            if (s && c.nodeType && !("click" === t.type && t.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ("click" !== t.type || !0 !== c.disabled)
                ) {
                  for (o = [], a = {}, n = 0; n < s; n++)
                    void 0 === a[(i = (r = e[n]).selector + " ")] &&
                      (a[i] = r.needsContext
                        ? S(i, this).index(c) > -1
                        : S.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                  o.length && u.push({ elem: c, handlers: o });
                }
            return (
              (c = this),
              s < e.length && u.push({ elem: c, handlers: e.slice(s) }),
              u
            );
          },
          addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: y(e)
                ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
                : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function (t) {
            return t[S.expando] ? t : new S.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (t) {
                var e = this || t;
                return (
                  vt.test(e.type) &&
                    e.click &&
                    N(e, "input") &&
                    Ct(e, "click", Tt),
                  !1
                );
              },
              trigger: function (t) {
                var e = this || t;
                return (
                  vt.test(e.type) && e.click && N(e, "input") && Ct(e, "click"),
                  !0
                );
              },
              _default: function (t) {
                var e = t.target;
                return (
                  (vt.test(e.type) &&
                    e.click &&
                    N(e, "input") &&
                    Z.get(e, "click")) ||
                  N(e, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
        (S.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (S.Event = function (t, e) {
          if (!(this instanceof S.Event)) return new S.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
            (this.type = t.type),
            (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? Tt
                    : Et),
            (this.target =
                  t.target && 3 === t.target.nodeType
                    ? t.target.parentNode
                    : t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
          e && S.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || Date.now()),
          (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
          constructor: S.Event,
          isDefaultPrevented: Et,
          isPropagationStopped: Et,
          isImmediatePropagationStopped: Et,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = Tt),
            t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = Tt),
            t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = Tt),
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation();
          },
        }),
        S.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          S.event.addProp,
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          S.event.special[t] = {
            setup: function () {
              return Ct(this, t, At), !1;
            },
            trigger: function () {
              return Ct(this, t), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: e,
          };
        }),
        S.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            S.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  r = this,
                  i = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (i && (i === r || S.contains(r, i))) ||
                      ((t.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (t.type = e)),
                  n
                );
              },
            };
          },
        ),
        S.fn.extend({
          on: function (t, e, n, r) {
            return Mt(this, t, e, n, r);
          },
          one: function (t, e, n, r) {
            return Mt(this, t, e, n, r, 1);
          },
          off: function (t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
              return (
                (r = t.handleObj),
                S(t.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler,
                ),
                this
              );
            if ("object" == typeof t) {
              for (i in t) this.off(i, e, t[i]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = Et),
              this.each(function () {
                S.event.remove(this, t, n, e);
              })
            );
          },
        });
        var Nt = /<script|<style|<link/i,
          kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Rt(t, e) {
          return (
            (N(t, "table") &&
              N(11 !== e.nodeType ? e : e.firstChild, "tr") &&
              S(t).children("tbody")[0]) ||
            t
          );
        }
        function Ot(t) {
          return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function Lt(t) {
          return (
            "true/" === (t.type || "").slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute("type"),
            t
          );
        }
        function Dt(t, e) {
          var n, r, i, o, a, u;
          if (1 === e.nodeType) {
            if (Z.hasData(t) && (u = Z.get(t).events))
              for (i in (Z.remove(e, "handle events"), u))
                for (n = 0, r = u[i].length; n < r; n++)
                  S.event.add(e, i, u[i][n]);
            Q.hasData(t) &&
              ((o = Q.access(t)), (a = S.extend({}, o)), Q.set(e, a));
          }
        }
        function It(t, e) {
          var n = e.nodeName.toLowerCase();
          "input" === n && vt.test(t.type)
            ? (e.checked = t.checked)
            : ("input" !== n && "textarea" !== n) ||
              (e.defaultValue = t.defaultValue);
        }
        function Pt(t, e, n, r) {
          e = s(e);
          var i,
            o,
            a,
            u,
            c,
            f,
            l = 0,
            h = t.length,
            p = h - 1,
            d = e[0],
            v = y(d);
          if (
            v ||
            (h > 1 && "string" == typeof d && !g.checkClone && kt.test(d))
          )
            return t.each(function (i) {
              var o = t.eq(i);
              v && (e[0] = d.call(this, i, o.html())), Pt(o, e, n, r);
            });
          if (
            h &&
            ((o = (i = _t(e, t[0].ownerDocument, !1, t, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (u = (a = S.map(xt(i, "script"), Ot)).length; l < h; l++)
              (c = i),
              l !== p &&
                  ((c = S.clone(c, !0, !0)), u && S.merge(a, xt(c, "script"))),
              n.call(t[l], c, l);
            if (u)
              for (
                f = a[a.length - 1].ownerDocument, S.map(a, Lt), l = 0;
                l < u;
                l++
              )
                (c = a[l]),
                yt.test(c.type || "") &&
                    !Z.access(c, "globalEval") &&
                    S.contains(f, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase()
                      ? S._evalUrl &&
                        !c.noModule &&
                        S._evalUrl(
                          c.src,
                          { nonce: c.nonce || c.getAttribute("nonce") },
                          f,
                        )
                      : w(c.textContent.replace(jt, ""), c, f));
          }
          return t;
        }
        function Ut(t, e, n) {
          for (
            var r, i = e ? S.filter(e, t) : t, o = 0;
            null != (r = i[o]);
            o++
          )
            n || 1 !== r.nodeType || S.cleanData(xt(r)),
            r.parentNode &&
                (n && at(r) && bt(xt(r, "script")),
                r.parentNode.removeChild(r));
          return t;
        }
        S.extend({
          htmlPrefilter: function (t) {
            return t;
          },
          clone: function (t, e, n) {
            var r,
              i,
              o,
              a,
              u = t.cloneNode(!0),
              s = at(t);
            if (
              !(
                g.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                S.isXMLDoc(t)
              )
            )
              for (a = xt(u), r = 0, i = (o = xt(t)).length; r < i; r++)
                It(o[r], a[r]);
            if (e)
              if (n)
                for (
                  o = o || xt(t), a = a || xt(u), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  Dt(o[r], a[r]);
              else Dt(t, u);
            return (
              (a = xt(u, "script")).length > 0 && bt(a, !s && xt(t, "script")),
              u
            );
          },
          cleanData: function (t) {
            for (
              var e, n, r, i = S.event.special, o = 0;
              void 0 !== (n = t[o]);
              o++
            )
              if (G(n)) {
                if ((e = n[Z.expando])) {
                  if (e.events)
                    for (r in e.events)
                      i[r]
                        ? S.event.remove(n, r)
                        : S.removeEvent(n, r, e.handle);
                  n[Z.expando] = void 0;
                }
                n[Q.expando] && (n[Q.expando] = void 0);
              }
          },
        }),
        S.fn.extend({
          detach: function (t) {
            return Ut(this, t, !0);
          },
          remove: function (t) {
            return Ut(this, t);
          },
          text: function (t) {
            return W(
              this,
              function (t) {
                return void 0 === t
                  ? S.text(this)
                  : this.empty().each(function () {
                    (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = t);
                  });
              },
              null,
              t,
              arguments.length,
            );
          },
          append: function () {
            return Pt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Rt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return Pt(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
              ) {
                var e = Rt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return Pt(this, arguments, function (t) {
              this.parentNode &&
                  this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                  (S.cleanData(xt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return S.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return W(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                    !Nt.test(t) &&
                    !mt[(gt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = S.htmlPrefilter(t);
                  try {
                    for (; n < r; n++)
                      1 === (e = this[n] || {}).nodeType &&
                          (S.cleanData(xt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length,
            );
          },
          replaceWith: function () {
            var t = [];
            return Pt(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                S.inArray(this, t) < 0 &&
                    (S.cleanData(xt(this)), n && n.replaceChild(e, this));
              },
              t,
            );
          },
        }),
        S.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            S.fn[t] = function (t) {
              for (
                var n, r = [], i = S(t), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                S(i[a])[e](n),
                c.apply(r, n.get());
              return this.pushStack(r);
            };
          },
        );
        var Ft = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
          qt = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = n), e.getComputedStyle(t);
          },
          Bt = function (t, e, n) {
            var r,
              i,
              o = {};
            for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
            for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
            return r;
          },
          Ht = new RegExp(it.join("|"), "i");
        function zt(t, e, n) {
          var r,
            i,
            o,
            a,
            u = t.style;
          return (
            (n = n || qt(t)) &&
              ("" !== (a = n.getPropertyValue(e) || n[e]) ||
                at(t) ||
                (a = S.style(t, e)),
              !g.pixelBoxStyles() &&
                Ft.test(a) &&
                Ht.test(e) &&
                ((r = u.width),
                (i = u.minWidth),
                (o = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = a),
                (a = n.width),
                (u.width = r),
                (u.minWidth = i),
                (u.maxWidth = o))),
            void 0 !== a ? a + "" : a
          );
        }
        function Wt(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (f) {
              (c.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (f.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ot.appendChild(c).appendChild(f);
              var t = n.getComputedStyle(f);
              (r = "1%" !== t.top),
              (s = 12 === e(t.marginLeft)),
              (f.style.right = "60%"),
              (a = 36 === e(t.right)),
              (i = 36 === e(t.width)),
              (f.style.position = "absolute"),
              (o = 12 === e(f.offsetWidth / 3)),
              ot.removeChild(c),
              (f = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var r,
            i,
            o,
            a,
            u,
            s,
            c = x.createElement("div"),
            f = x.createElement("div");
          f.style &&
            ((f.style.backgroundClip = "content-box"),
            (f.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === f.style.backgroundClip),
            S.extend(g, {
              boxSizingReliable: function () {
                return t(), i;
              },
              pixelBoxStyles: function () {
                return t(), a;
              },
              pixelPosition: function () {
                return t(), r;
              },
              reliableMarginLeft: function () {
                return t(), s;
              },
              scrollboxSize: function () {
                return t(), o;
              },
              reliableTrDimensions: function () {
                var t, e, r, i;
                return (
                  null == u &&
                    ((t = x.createElement("table")),
                    (e = x.createElement("tr")),
                    (r = x.createElement("div")),
                    (t.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"),
                    (e.style.cssText = "border:1px solid"),
                    (e.style.height = "1px"),
                    (r.style.height = "9px"),
                    (r.style.display = "block"),
                    ot.appendChild(t).appendChild(e).appendChild(r),
                    (i = n.getComputedStyle(e)),
                    (u =
                      parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                      e.offsetHeight),
                    ot.removeChild(t)),
                  u
                );
              },
            }));
        })();
        var $t = ["Webkit", "Moz", "ms"],
          Yt = x.createElement("div").style,
          Vt = {};
        function Xt(t) {
          var e = S.cssProps[t] || Vt[t];
          return (
            e ||
            (t in Yt
              ? t
              : (Vt[t] =
                  (function (t) {
                    for (
                      var e = t[0].toUpperCase() + t.slice(1), n = $t.length;
                      n--;

                    )
                      if ((t = $t[n] + e) in Yt) return t;
                  })(t) || t))
          );
        }
        var Gt = /^(none|table(?!-c[ea]).+)/,
          Jt = /^--/,
          Zt = { position: "absolute", visibility: "hidden", display: "block" },
          Qt = { letterSpacing: "0", fontWeight: "400" };
        function Kt(t, e, n) {
          var r = rt.exec(e);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
        }
        function te(t, e, n, r, i, o) {
          var a = "width" === e ? 1 : 0,
            u = 0,
            s = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (s += S.css(t, n + it[a], !0, i)),
            r
              ? ("content" === n && (s -= S.css(t, "padding" + it[a], !0, i)),
              "margin" !== n &&
                    (s -= S.css(t, "border" + it[a] + "Width", !0, i)))
              : ((s += S.css(t, "padding" + it[a], !0, i)),
              "padding" !== n
                ? (s += S.css(t, "border" + it[a] + "Width", !0, i))
                : (u += S.css(t, "border" + it[a] + "Width", !0, i)));
          return (
            !r &&
              o >= 0 &&
              (s +=
                Math.max(
                  0,
                  Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      o -
                      s -
                      u -
                      0.5,
                  ),
                ) || 0),
            s
          );
        }
        function ee(t, e, n) {
          var r = qt(t),
            i =
              (!g.boxSizingReliable() || n) &&
              "border-box" === S.css(t, "boxSizing", !1, r),
            o = i,
            a = zt(t, e, r),
            u = "offset" + e[0].toUpperCase() + e.slice(1);
          if (Ft.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!g.boxSizingReliable() && i) ||
              (!g.reliableTrDimensions() && N(t, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === S.css(t, "display", !1, r))) &&
              t.getClientRects().length &&
              ((i = "border-box" === S.css(t, "boxSizing", !1, r)),
              (o = u in t) && (a = t[u])),
            (a = parseFloat(a) || 0) +
              te(t, e, n || (i ? "border" : "content"), o, r, a) +
              "px"
          );
        }
        function ne(t, e, n, r, i) {
          return new ne.prototype.init(t, e, n, r, i);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var n = zt(t, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var i,
                o,
                a,
                u = X(e),
                s = Jt.test(e),
                c = t.style;
              if (
                (s || (e = Xt(u)),
                (a = S.cssHooks[e] || S.cssHooks[u]),
                void 0 === n)
              )
                return a && "get" in a && void 0 !== (i = a.get(t, !1, r))
                  ? i
                  : c[e];
              "string" === (o = typeof n) &&
                (i = rt.exec(n)) &&
                i[1] &&
                ((n = ct(t, e, i)), (o = "number")),
              null != n &&
                  n == n &&
                  ("number" !== o ||
                    s ||
                    (n += (i && i[3]) || (S.cssNumber[u] ? "" : "px")),
                  g.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (c[e] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
                    (s ? c.setProperty(e, n) : (c[e] = n)));
            }
          },
          css: function (t, e, n, r) {
            var i,
              o,
              a,
              u = X(e);
            return (
              Jt.test(e) || (e = Xt(u)),
              (a = S.cssHooks[e] || S.cssHooks[u]) &&
                "get" in a &&
                (i = a.get(t, !0, n)),
              void 0 === i && (i = zt(t, e, r)),
              "normal" === i && e in Qt && (i = Qt[e]),
              "" === n || n
                ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                : i
            );
          },
        }),
        S.each(["height", "width"], function (t, e) {
          S.cssHooks[e] = {
            get: function (t, n, r) {
              if (n)
                return !Gt.test(S.css(t, "display")) ||
                    (t.getClientRects().length &&
                      t.getBoundingClientRect().width)
                  ? ee(t, e, r)
                  : Bt(t, Zt, function () {
                    return ee(t, e, r);
                  });
            },
            set: function (t, n, r) {
              var i,
                o = qt(t),
                a = !g.scrollboxSize() && "absolute" === o.position,
                u = (a || r) && "border-box" === S.css(t, "boxSizing", !1, o),
                s = r ? te(t, e, r, u, o) : 0;
              return (
                u &&
                    a &&
                    (s -= Math.ceil(
                      t["offset" + e[0].toUpperCase() + e.slice(1)] -
                        parseFloat(o[e]) -
                        te(t, e, "border", !1, o) -
                        0.5,
                    )),
                s &&
                    (i = rt.exec(n)) &&
                    "px" !== (i[3] || "px") &&
                    ((t.style[e] = n), (n = S.css(t, e))),
                Kt(0, n, s)
              );
            },
          };
        }),
        (S.cssHooks.marginLeft = Wt(g.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(zt(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                    Bt(t, { marginLeft: 0 }, function () {
                      return t.getBoundingClientRect().left;
                    })) + "px"
            );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (S.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[t + it[r] + e] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
          "margin" !== t && (S.cssHooks[t + e].set = Kt);
        }),
        S.fn.extend({
          css: function (t, e) {
            return W(
              this,
              function (t, e, n) {
                var r,
                  i,
                  o = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (r = qt(t), i = e.length; a < i; a++)
                    o[e[a]] = S.css(t, e[a], !1, r);
                  return o;
                }
                return void 0 !== n ? S.style(t, e, n) : S.css(t, e);
              },
              t,
              e,
              arguments.length > 1,
            );
          },
        }),
        (S.Tween = ne),
        (ne.prototype = {
          constructor: ne,
          init: function (t, e, n, r, i, o) {
            (this.elem = t),
            (this.prop = n),
            (this.easing = i || S.easing._default),
            (this.options = e),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (S.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = ne.propHooks[this.prop];
            return t && t.get ? t.get(this) : ne.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = ne.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                      S.easing[this.easing](
                        t,
                        this.options.duration * t,
                        0,
                        1,
                        this.options.duration,
                      ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ne.propHooks._default.set(this),
              this
            );
          },
        }),
        (ne.prototype.init.prototype = ne.prototype),
        (ne.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = S.css(t.elem, t.prop, "")) && "auto" !== e
                  ? e
                  : 0;
            },
            set: function (t) {
              S.fx.step[t.prop]
                ? S.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                    (!S.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)])
                  ? (t.elem[t.prop] = t.now)
                  : S.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (ne.propHooks.scrollTop = ne.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType &&
                  t.elem.parentNode &&
                  (t.elem[t.prop] = t.now);
              },
            }),
        (S.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (S.fx = ne.prototype.init),
        (S.fx.step = {});
        var re,
          ie,
          oe = /^(?:toggle|show|hide)$/,
          ae = /queueHooks$/;
        function ue() {
          ie &&
            (!1 === x.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(ue)
              : n.setTimeout(ue, S.fx.interval),
            S.fx.tick());
        }
        function se() {
          return (
            n.setTimeout(function () {
              re = void 0;
            }),
            (re = Date.now())
          );
        }
        function ce(t, e) {
          var n,
            r = 0,
            i = { height: t };
          for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = it[r])] = i["padding" + n] = t;
          return e && (i.opacity = i.width = t), i;
        }
        function fe(t, e, n) {
          for (
            var r,
              i = (le.tweeners[e] || []).concat(le.tweeners["*"]),
              o = 0,
              a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, e, t))) return r;
        }
        function le(t, e, n) {
          var r,
            i,
            o = 0,
            a = le.prefilters.length,
            u = S.Deferred().always(function () {
              delete s.elem;
            }),
            s = function () {
              if (i) return !1;
              for (
                var e = re || se(),
                  n = Math.max(0, c.startTime + c.duration - e),
                  r = 1 - (n / c.duration || 0),
                  o = 0,
                  a = c.tweens.length;
                o < a;
                o++
              )
                c.tweens[o].run(r);
              return (
                u.notifyWith(t, [c, r, n]),
                r < 1 && a
                  ? n
                  : (a || u.notifyWith(t, [c, 1, 0]), u.resolveWith(t, [c]), !1)
              );
            },
            c = u.promise({
              elem: t,
              props: S.extend({}, e),
              opts: S.extend(
                !0,
                { specialEasing: {}, easing: S.easing._default },
                n,
              ),
              originalProperties: e,
              originalOptions: n,
              startTime: re || se(),
              duration: n.duration,
              tweens: [],
              createTween: function (e, n) {
                var r = S.Tween(
                  t,
                  c.opts,
                  e,
                  n,
                  c.opts.specialEasing[e] || c.opts.easing,
                );
                return c.tweens.push(r), r;
              },
              stop: function (e) {
                var n = 0,
                  r = e ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) c.tweens[n].run(1);
                return (
                  e
                    ? (u.notifyWith(t, [c, 1, 0]), u.resolveWith(t, [c, e]))
                    : u.rejectWith(t, [c, e]),
                  this
                );
              },
            }),
            f = c.props;
          for (
            !(function (t, e) {
              var n, r, i, o, a;
              for (n in t)
                if (
                  ((i = e[(r = X(n))]),
                  (o = t[n]),
                  Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
                  n !== r && ((t[r] = o), delete t[n]),
                  (a = S.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((o = a.expand(o)), delete t[r], o))
                    (n in t) || ((t[n] = o[n]), (e[n] = i));
                else e[r] = i;
            })(f, c.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = le.prefilters[o].call(c, t, f, c.opts)))
              return (
                y(r.stop) &&
                  (S._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r
              );
          return (
            S.map(f, fe, c),
            y(c.opts.start) && c.opts.start.call(t, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            S.fx.timer(S.extend(s, { elem: t, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (S.Animation = S.extend(le, {
          tweeners: {
            "*": [
              function (t, e) {
                var n = this.createTween(t, e);
                return ct(n.elem, t, rt.exec(e), n), n;
              },
            ],
          },
          tweener: function (t, e) {
            y(t) ? ((e = t), (t = ["*"])) : (t = t.match(P));
            for (var n, r = 0, i = t.length; r < i; r++)
              (n = t[r]),
              (le.tweeners[n] = le.tweeners[n] || []),
              le.tweeners[n].unshift(e);
          },
          prefilters: [
            function (t, e, n) {
              var r,
                i,
                o,
                a,
                u,
                s,
                c,
                f,
                l = "width" in e || "height" in e,
                h = this,
                p = {},
                d = t.style,
                v = t.nodeType && st(t),
                g = Z.get(t, "fxshow");
              for (r in (n.queue ||
                (null == (a = S._queueHooks(t, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (u = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || u();
                  })),
                a.unqueued++,
                h.always(function () {
                  h.always(function () {
                    a.unqueued--, S.queue(t, "fx").length || a.empty.fire();
                  });
                })),
              e))
                if (((i = e[r]), oe.test(i))) {
                  if (
                    (delete e[r],
                    (o = o || "toggle" === i),
                    i === (v ? "hide" : "show"))
                  ) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    v = !0;
                  }
                  p[r] = (g && g[r]) || S.style(t, r);
                }
              if ((s = !S.isEmptyObject(e)) || !S.isEmptyObject(p))
                for (r in (l &&
                  1 === t.nodeType &&
                  ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                  null == (c = g && g.display) && (c = Z.get(t, "display")),
                  "none" === (f = S.css(t, "display")) &&
                    (c
                      ? (f = c)
                      : (ht([t], !0),
                      (c = t.style.display || c),
                      (f = S.css(t, "display")),
                      ht([t]))),
                  ("inline" === f || ("inline-block" === f && null != c)) &&
                    "none" === S.css(t, "float") &&
                    (s ||
                      (h.done(function () {
                        d.display = c;
                      }),
                      null == c &&
                        ((f = d.display), (c = "none" === f ? "" : f))),
                    (d.display = "inline-block"))),
                n.overflow &&
                  ((d.overflow = "hidden"),
                  h.always(function () {
                    (d.overflow = n.overflow[0]),
                    (d.overflowX = n.overflow[1]),
                    (d.overflowY = n.overflow[2]);
                  })),
                (s = !1),
                p))
                  s ||
                    (g
                      ? "hidden" in g && (v = g.hidden)
                      : (g = Z.access(t, "fxshow", { display: c })),
                    o && (g.hidden = !v),
                    v && ht([t], !0),
                    h.done(function () {
                      for (r in (v || ht([t]), Z.remove(t, "fxshow"), p))
                        S.style(t, r, p[r]);
                    })),
                  (s = fe(v ? g[r] : 0, r, h)),
                  r in g ||
                      ((g[r] = s.start),
                      v && ((s.end = s.start), (s.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? le.prefilters.unshift(t) : le.prefilters.push(t);
          },
        })),
        (S.speed = function (t, e, n) {
          var r =
              t && "object" == typeof t
                ? S.extend({}, t)
                : {
                  complete: n || (!n && e) || (y(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !y(e) && e),
                };
          return (
            S.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                  (r.duration in S.fx.speeds
                    ? (r.duration = S.fx.speeds[r.duration])
                    : (r.duration = S.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              y(r.old) && r.old.call(this),
              r.queue && S.dequeue(this, r.queue);
            }),
            r
          );
        }),
        S.fn.extend({
          fadeTo: function (t, e, n, r) {
            return this.filter(st)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, r);
          },
          animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
              o = S.speed(e, n, r),
              a = function () {
                var e = le(this, S.extend({}, t), o);
                (i || Z.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (t, e, n) {
            var r = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  i = null != t && t + "queueHooks",
                  o = S.timers,
                  a = Z.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && ae.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                      (null != t && o[i].queue !== t) ||
                      (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
                (!e && n) || S.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = Z.get(this),
                  r = n[t + "queue"],
                  i = n[t + "queueHooks"],
                  o = S.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                  S.queue(this, t, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                      o[e].queue === t &&
                      (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++)
                  r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        S.each(["toggle", "show", "hide"], function (t, e) {
          var n = S.fn[e];
          S.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(ce(e, !0), t, r, i);
          };
        }),
        S.each(
          {
            slideDown: ce("show"),
            slideUp: ce("hide"),
            slideToggle: ce("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            S.fn[t] = function (t, n, r) {
              return this.animate(e, t, n, r);
            };
          },
        ),
        (S.timers = []),
        (S.fx.tick = function () {
          var t,
            e = 0,
            n = S.timers;
          for (re = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || S.fx.stop(), (re = void 0);
        }),
        (S.fx.timer = function (t) {
          S.timers.push(t), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
          ie || ((ie = !0), ue());
        }),
        (S.fx.stop = function () {
          ie = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (t, e) {
          return (
            (t = (S.fx && S.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function (e, r) {
              var i = n.setTimeout(e, t);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var t = x.createElement("input"),
            e = x
              .createElement("select")
              .appendChild(x.createElement("option"));
          (t.type = "checkbox"),
          (g.checkOn = "" !== t.value),
          (g.optSelected = e.selected),
          ((t = x.createElement("input")).value = "t"),
          (t.type = "radio"),
          (g.radioValue = "t" === t.value);
        })();
        var he,
          pe = S.expr.attrHandle;
        S.fn.extend({
          attr: function (t, e) {
            return W(this, S.attr, t, e, arguments.length > 1);
          },
          removeAttr: function (t) {
            return this.each(function () {
              S.removeAttr(this, t);
            });
          },
        }),
        S.extend({
          attr: function (t, e, n) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? S.prop(t, e, n)
                : ((1 === o && S.isXMLDoc(t)) ||
                      (i =
                        S.attrHooks[e.toLowerCase()] ||
                        (S.expr.match.bool.test(e) ? he : void 0)),
                void 0 !== n
                  ? null === n
                    ? void S.removeAttr(t, e)
                    : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                      ? r
                      : (t.setAttribute(e, n + ""), n)
                  : i && "get" in i && null !== (r = i.get(t, e))
                    ? r
                    : null == (r = S.find.attr(t, e))
                      ? void 0
                      : r);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!g.radioValue && "radio" === e && N(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              r = 0,
              i = e && e.match(P);
            if (i && 1 === t.nodeType)
              for (; (n = i[r++]); ) t.removeAttribute(n);
          },
        }),
        (he = {
          set: function (t, e, n) {
            return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = pe[e] || S.find.attr;
          pe[e] = function (t, e, r) {
            var i,
              o,
              a = e.toLowerCase();
            return (
              r ||
                  ((o = pe[a]),
                  (pe[a] = i),
                  (i = null != n(t, e, r) ? a : null),
                  (pe[a] = o)),
              i
            );
          };
        });
        var de = /^(?:input|select|textarea|button)$/i,
          ve = /^(?:a|area)$/i;
        function ge(t) {
          return (t.match(P) || []).join(" ");
        }
        function ye(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function me(t) {
          return Array.isArray(t)
            ? t
            : ("string" == typeof t && t.match(P)) || [];
        }
        S.fn.extend({
          prop: function (t, e) {
            return W(this, S.prop, t, e, arguments.length > 1);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[S.propFix[t] || t];
            });
          },
        }),
        S.extend({
          prop: function (t, e, n) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && S.isXMLDoc(t)) ||
                    ((e = S.propFix[e] || e), (i = S.propHooks[e])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                    ? r
                    : (t[e] = n)
                  : i && "get" in i && null !== (r = i.get(t, e))
                    ? r
                    : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = S.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : de.test(t.nodeName) || (ve.test(t.nodeName) && t.href)
                    ? 0
                    : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        g.optSelected ||
            (S.propHooks.selected = {
              get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function (t) {
                var e = t.parentNode;
                e &&
                  (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
              },
            }),
        S.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            S.propFix[this.toLowerCase()] = this;
          },
        ),
        S.fn.extend({
          addClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u,
              s = 0;
            if (y(t))
              return this.each(function (e) {
                S(this).addClass(t.call(this, e, ye(this)));
              });
            if ((e = me(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((i = ye(n)), (r = 1 === n.nodeType && " " + ge(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (u = ge(r)) && n.setAttribute("class", u);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a,
              u,
              s = 0;
            if (y(t))
              return this.each(function (e) {
                S(this).removeClass(t.call(this, e, ye(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((i = ye(n)), (r = 1 === n.nodeType && " " + ge(i) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (u = ge(r)) && n.setAttribute("class", u);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t,
              r = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && r
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : y(t)
                ? this.each(function (n) {
                  S(this).toggleClass(t.call(this, n, ye(this), e), e);
                })
                : this.each(function () {
                  var e, i, o, a;
                  if (r)
                    for (i = 0, o = S(this), a = me(t); (e = a[i++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                        ((e = ye(this)) && Z.set(this, "__className__", e),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            e || !1 === t
                              ? ""
                              : Z.get(this, "__className__") || "",
                          ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              r = 0;
            for (e = " " + t + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + ge(ye(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
        var xe = /\r/g;
        S.fn.extend({
          val: function (t) {
            var e,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = y(t)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                    (null == (i = r ? t.call(this, n, S(this).val()) : t)
                      ? (i = "")
                      : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                        (i = S.map(i, function (t) {
                          return null == t ? "" : t + "";
                        })),
                    ((e =
                      S.valHooks[this.type] ||
                      S.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in e &&
                      void 0 !== e.set(this, i, "value")) ||
                      (this.value = i));
              }))
              : i
                ? (e =
                  S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in e &&
                void 0 !== (n = e.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                    ? n.replace(xe, "")
                    : null == n
                      ? ""
                      : n
                : void 0;
          },
        }),
        S.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = S.find.attr(t, "value");
                return null != e ? e : ge(S.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  r,
                  i = t.options,
                  o = t.selectedIndex,
                  a = "select-one" === t.type,
                  u = a ? null : [],
                  s = a ? o + 1 : i.length;
                for (r = o < 0 ? s : a ? o : 0; r < s; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                  ) {
                    if (((e = S(n).val()), a)) return e;
                    u.push(e);
                  }
                return u;
              },
              set: function (t, e) {
                for (
                  var n, r, i = t.options, o = S.makeArray(e), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                      S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        S.each(["radio", "checkbox"], function () {
          (S.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = S.inArray(S(t).val(), e) > -1);
            },
          }),
          g.checkOn ||
                (S.valHooks[this].get = function (t) {
                  return null === t.getAttribute("value") ? "on" : t.value;
                });
        }),
        (g.focusin = "onfocusin" in n);
        var be = /^(?:focusinfocus|focusoutblur)$/,
          we = function (t) {
            t.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (t, e, r, i) {
            var o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              d = [r || x],
              v = p.call(t, "type") ? t.type : t,
              g = p.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((a = h = u = r = r || x),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !be.test(v + S.event.triggered) &&
                (v.indexOf(".") > -1 &&
                  ((g = v.split(".")), (v = g.shift()), g.sort()),
                (c = v.indexOf(":") < 0 && "on" + v),
                ((t = t[S.expando]
                  ? t
                  : new S.Event(v, "object" == typeof t && t)).isTrigger = i
                  ? 2
                  : 3),
                (t.namespace = g.join(".")),
                (t.rnamespace = t.namespace
                  ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (t.result = void 0),
                t.target || (t.target = r),
                (e = null == e ? [t] : S.makeArray(e, [t])),
                (l = S.event.special[v] || {}),
                i || !l.trigger || !1 !== l.trigger.apply(r, e)))
            ) {
              if (!i && !l.noBubble && !m(r)) {
                for (
                  s = l.delegateType || v, be.test(s + v) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  d.push(a), (u = a);
                u === (r.ownerDocument || x) &&
                  d.push(u.defaultView || u.parentWindow || n);
              }
              for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
                (h = a),
                (t.type = o > 1 ? s : l.bindType || v),
                (f =
                    (Z.get(a, "events") || Object.create(null))[t.type] &&
                    Z.get(a, "handle")) && f.apply(a, e),
                (f = c && a[c]) &&
                    f.apply &&
                    G(a) &&
                    ((t.result = f.apply(a, e)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = v),
                i ||
                  t.isDefaultPrevented() ||
                  (l._default && !1 !== l._default.apply(d.pop(), e)) ||
                  !G(r) ||
                  (c &&
                    y(r[v]) &&
                    !m(r) &&
                    ((u = r[c]) && (r[c] = null),
                    (S.event.triggered = v),
                    t.isPropagationStopped() && h.addEventListener(v, we),
                    r[v](),
                    t.isPropagationStopped() && h.removeEventListener(v, we),
                    (S.event.triggered = void 0),
                    u && (r[c] = u))),
                t.result
              );
            }
          },
          simulate: function (t, e, n) {
            var r = S.extend(new S.Event(), n, { type: t, isSimulated: !0 });
            S.event.trigger(r, null, e);
          },
        }),
        S.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              S.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return S.event.trigger(t, e, n, !0);
          },
        }),
        g.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
              var n = function (t) {
                S.event.simulate(e, t.target, S.event.fix(t));
              };
              S.event.special[e] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = Z.access(r, e);
                  i || r.addEventListener(t, n, !0),
                  Z.access(r, e, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = Z.access(r, e) - 1;
                  i
                    ? Z.access(r, e, i)
                    : (r.removeEventListener(t, n, !0), Z.remove(r, e));
                },
              };
            });
        var _e = n.location,
          Se = { guid: Date.now() },
          Te = /\?/;
        S.parseXML = function (t) {
          var e, r;
          if (!t || "string" != typeof t) return null;
          try {
            e = new n.DOMParser().parseFromString(t, "text/xml");
          } catch (t) {}
          return (
            (r = e && e.getElementsByTagName("parsererror")[0]),
            (e && !r) ||
              S.error(
                "Invalid XML: " +
                  (r
                    ? S.map(r.childNodes, function (t) {
                      return t.textContent;
                    }).join("\n")
                    : t),
              ),
            e
          );
        };
        var Ee = /\[\]$/,
          Ae = /\r?\n/g,
          Me = /^(?:submit|button|image|reset|file)$/i,
          Ce = /^(?:input|select|textarea|keygen)/i;
        function Ne(t, e, n, r) {
          var i;
          if (Array.isArray(e))
            S.each(e, function (e, i) {
              n || Ee.test(t)
                ? r(t, i)
                : Ne(
                  t +
                      "[" +
                      ("object" == typeof i && null != i ? e : "") +
                      "]",
                  i,
                  n,
                  r,
                );
            });
          else if (n || "object" !== _(e)) r(t, e);
          else for (i in e) Ne(t + "[" + i + "]", e[i], n, r);
        }
        (S.param = function (t, e) {
          var n,
            r = [],
            i = function (t, e) {
              var n = y(e) ? e() : e;
              r[r.length] =
                encodeURIComponent(t) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == t) return "";
          if (Array.isArray(t) || (t.jquery && !S.isPlainObject(t)))
            S.each(t, function () {
              i(this.name, this.value);
            });
          else for (n in t) Ne(n, t[n], e, i);
          return r.join("&");
        }),
        S.fn.extend({
          serialize: function () {
            return S.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = S.prop(this, "elements");
              return t ? S.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                    !S(this).is(":disabled") &&
                    Ce.test(this.nodeName) &&
                    !Me.test(t) &&
                    (this.checked || !vt.test(t))
                );
              })
              .map(function (t, e) {
                var n = S(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                    ? S.map(n, function (t) {
                      return { name: e.name, value: t.replace(Ae, "\r\n") };
                    })
                    : { name: e.name, value: n.replace(Ae, "\r\n") };
              })
              .get();
          },
        });
        var ke = /%20/g,
          je = /#.*$/,
          Re = /([?&])_=[^&]*/,
          Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Le = /^(?:GET|HEAD)$/,
          De = /^\/\//,
          Ie = {},
          Pe = {},
          Ue = "*/".concat("*"),
          Fe = x.createElement("a");
        function qe(t) {
          return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var r,
              i = 0,
              o = e.toLowerCase().match(P) || [];
            if (y(n))
              for (; (r = o[i++]); )
                "+" === r[0]
                  ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
                  : (t[r] = t[r] || []).push(n);
          };
        }
        function Be(t, e, n, r) {
          var i = {},
            o = t === Pe;
          function a(u) {
            var s;
            return (
              (i[u] = !0),
              S.each(t[u] || [], function (t, u) {
                var c = u(e, n, r);
                return "string" != typeof c || o || i[c]
                  ? o
                    ? !(s = c)
                    : void 0
                  : (e.dataTypes.unshift(c), a(c), !1);
              }),
              s
            );
          }
          return a(e.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function He(t, e) {
          var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
          for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
          return r && S.extend(!0, t, r), t;
        }
        (Fe.href = _e.href),
        S.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: _e.href,
            type: "GET",
            isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  _e.protocol,
                ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ue,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": S.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? He(He(t, S.ajaxSettings), e) : He(S.ajaxSettings, t);
          },
          ajaxPrefilter: qe(Ie),
          ajaxTransport: qe(Pe),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var r,
              i,
              o,
              a,
              u,
              s,
              c,
              f,
              l,
              h,
              p = S.ajaxSetup({}, e),
              d = p.context || p,
              v = p.context && (d.nodeType || d.jquery) ? S(d) : S.event,
              g = S.Deferred(),
              y = S.Callbacks("once memory"),
              m = p.statusCode || {},
              b = {},
              w = {},
              _ = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (c) {
                    if (!a)
                      for (a = {}; (e = Oe.exec(o)); )
                        a[e[1].toLowerCase() + " "] = (
                          a[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = a[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == c &&
                        ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                        (b[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == c && (p.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (c) T.always(t[T.status]);
                    else for (e in t) m[e] = [m[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || _;
                  return r && r.abort(e), E(0, e), this;
                },
              };
            if (
              (g.promise(T),
              (p.url = ((t || p.url || _e.href) + "").replace(
                De,
                _e.protocol + "//",
              )),
              (p.type = e.method || e.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              s = x.createElement("a");
              try {
                (s.href = p.url),
                (s.href = s.href),
                (p.crossDomain =
                      Fe.protocol + "//" + Fe.host !=
                      s.protocol + "//" + s.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = S.param(p.data, p.traditional)),
              Be(Ie, p, e, T),
              c)
            )
              return T;
            for (l in ((f = S.event && p.global) &&
                0 == S.active++ &&
                S.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Le.test(p.type)),
            (i = p.url.replace(je, "")),
            p.hasContent
              ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded",
                    ) &&
                  (p.data = p.data.replace(ke, "+"))
              : ((h = p.url.slice(i.length)),
              p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((i += (Te.test(i) ? "&" : "?") + p.data), delete p.data),
              !1 === p.cache &&
                    ((i = i.replace(Re, "$1")),
                    (h = (Te.test(i) ? "&" : "?") + "_=" + Se.guid++ + h)),
              (p.url = i + h)),
            p.ifModified &&
                (S.lastModified[i] &&
                  T.setRequestHeader("If-Modified-Since", S.lastModified[i]),
                S.etag[i] && T.setRequestHeader("If-None-Match", S.etag[i])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
                e.contentType) &&
                T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + Ue + "; q=0.01" : "")
                : p.accepts["*"],
            ),
            p.headers))
              T.setRequestHeader(l, p.headers[l]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, T, p) || c))
              return T.abort();
            if (
              ((_ = "abort"),
              y.add(p.complete),
              T.done(p.success),
              T.fail(p.error),
              (r = Be(Pe, p, e, T)))
            ) {
              if (((T.readyState = 1), f && v.trigger("ajaxSend", [T, p]), c))
                return T;
              p.async &&
                  p.timeout > 0 &&
                  (u = n.setTimeout(function () {
                    T.abort("timeout");
                  }, p.timeout));
              try {
                (c = !1), r.send(b, E);
              } catch (t) {
                if (c) throw t;
                E(-1, t);
              }
            } else E(-1, "No Transport");
            function E(t, e, a, s) {
              var l,
                h,
                x,
                b,
                w,
                _ = e;
              c ||
                  ((c = !0),
                  u && n.clearTimeout(u),
                  (r = void 0),
                  (o = s || ""),
                  (T.readyState = t > 0 ? 4 : 0),
                  (l = (t >= 200 && t < 300) || 304 === t),
                  a &&
                    (b = (function (t, e, n) {
                      for (
                        var r, i, o, a, u = t.contents, s = t.dataTypes;
                        "*" === s[0];

                      )
                        s.shift(),
                        void 0 === r &&
                            (r =
                              t.mimeType ||
                              e.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in u)
                          if (u[i] && u[i].test(r)) {
                            s.unshift(i);
                            break;
                          }
                      if (s[0] in n) o = s[0];
                      else {
                        for (i in n) {
                          if (!s[0] || t.converters[i + " " + s[0]]) {
                            o = i;
                            break;
                          }
                          a || (a = i);
                        }
                        o = o || a;
                      }
                      if (o) return o !== s[0] && s.unshift(o), n[o];
                    })(p, T, a)),
                  !l &&
                    S.inArray("script", p.dataTypes) > -1 &&
                    S.inArray("json", p.dataTypes) < 0 &&
                    (p.converters["text script"] = function () {}),
                  (b = (function (t, e, n, r) {
                    var i,
                      o,
                      a,
                      u,
                      s,
                      c = {},
                      f = t.dataTypes.slice();
                    if (f[1])
                      for (a in t.converters)
                        c[a.toLowerCase()] = t.converters[a];
                    for (o = f.shift(); o; )
                      if (
                        (t.responseFields[o] && (n[t.responseFields[o]] = e),
                        !s &&
                          r &&
                          t.dataFilter &&
                          (e = t.dataFilter(e, t.dataType)),
                        (s = o),
                        (o = f.shift()))
                      )
                        if ("*" === o) o = s;
                        else if ("*" !== s && s !== o) {
                          if (!(a = c[s + " " + o] || c["* " + o]))
                            for (i in c)
                              if (
                                (u = i.split(" "))[1] === o &&
                                (a = c[s + " " + u[0]] || c["* " + u[0]])
                              ) {
                                !0 === a
                                  ? (a = c[i])
                                  : !0 !== c[i] &&
                                    ((o = u[0]), f.unshift(u[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else
                              try {
                                e = a(e);
                              } catch (t) {
                                return {
                                  state: "parsererror",
                                  error: a
                                    ? t
                                    : "No conversion from " + s + " to " + o,
                                };
                              }
                        }
                    return { state: "success", data: e };
                  })(p, b, T, l)),
                  l
                    ? (p.ifModified &&
                        ((w = T.getResponseHeader("Last-Modified")) &&
                          (S.lastModified[i] = w),
                        (w = T.getResponseHeader("etag")) && (S.etag[i] = w)),
                    204 === t || "HEAD" === p.type
                      ? (_ = "nocontent")
                      : 304 === t
                        ? (_ = "notmodified")
                        : ((_ = b.state), (h = b.data), (l = !(x = b.error))))
                    : ((x = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                  (T.status = t),
                  (T.statusText = (e || _) + ""),
                  l ? g.resolveWith(d, [h, _, T]) : g.rejectWith(d, [T, _, x]),
                  T.statusCode(m),
                  (m = void 0),
                  f &&
                    v.trigger(l ? "ajaxSuccess" : "ajaxError", [
                      T,
                      p,
                      l ? h : x,
                    ]),
                  y.fireWith(d, [T, _]),
                  f &&
                    (v.trigger("ajaxComplete", [T, p]),
                    --S.active || S.event.trigger("ajaxStop")));
            }
            return T;
          },
          getJSON: function (t, e, n) {
            return S.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return S.get(t, void 0, e, "script");
          },
        }),
        S.each(["get", "post"], function (t, e) {
          S[e] = function (t, n, r, i) {
            return (
              y(n) && ((i = i || r), (r = n), (n = void 0)),
              S.ajax(
                S.extend(
                  { url: t, type: e, dataType: i, data: n, success: r },
                  S.isPlainObject(t) && t,
                ),
              )
            );
          };
        }),
        S.ajaxPrefilter(function (t) {
          var e;
          for (e in t.headers)
            "content-type" === e.toLowerCase() &&
                (t.contentType = t.headers[e] || "");
        }),
        (S._evalUrl = function (t, e, n) {
          return S.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              S.globalEval(t, e, n);
            },
          });
        }),
        S.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                  (y(t) && (t = t.call(this[0])),
                  (e = S(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return y(t)
              ? this.each(function (e) {
                S(this).wrapInner(t.call(this, e));
              })
              : this.each(function () {
                var e = S(this),
                  n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
              });
          },
          wrap: function (t) {
            var e = y(t);
            return this.each(function (n) {
              S(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  S(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (S.expr.pseudos.hidden = function (t) {
          return !S.expr.pseudos.visible(t);
        }),
        (S.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
              t.offsetHeight ||
              t.getClientRects().length
          );
        }),
        (S.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
        var ze = { 0: 200, 1223: 204 },
          We = S.ajaxSettings.xhr();
        (g.cors = !!We && "withCredentials" in We),
        (g.ajax = We = !!We),
        S.ajaxTransport(function (t) {
          var e, r;
          if (g.cors || (We && !t.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  u = t.xhr();
                if (
                  (u.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) u[a] = t.xhrFields[a];
                for (a in (t.mimeType &&
                    u.overrideMimeType &&
                    u.overrideMimeType(t.mimeType),
                t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  u.setRequestHeader(a, i[a]);
                (e = function (t) {
                  return function () {
                    e &&
                        ((e =
                          r =
                          u.onload =
                          u.onerror =
                          u.onabort =
                          u.ontimeout =
                          u.onreadystatechange =
                            null),
                        "abort" === t
                          ? u.abort()
                          : "error" === t
                            ? "number" != typeof u.status
                              ? o(0, "error")
                              : o(u.status, u.statusText)
                            : o(
                              ze[u.status] || u.status,
                              u.statusText,
                              "text" !== (u.responseType || "text") ||
                                "string" != typeof u.responseText
                                ? { binary: u.response }
                                : { text: u.responseText },
                              u.getAllResponseHeaders(),
                            ));
                  };
                }),
                (u.onload = e()),
                (r = u.onerror = u.ontimeout = e("error")),
                void 0 !== u.onabort
                  ? (u.onabort = r)
                  : (u.onreadystatechange = function () {
                    4 === u.readyState &&
                            n.setTimeout(function () {
                              e && r();
                            });
                  }),
                (e = e("abort"));
                try {
                  u.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        S.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        S.ajaxSetup({
          accepts: {
            script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return S.globalEval(t), t;
            },
          },
        }),
        S.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
          t.crossDomain && (t.type = "GET");
        }),
        S.ajaxTransport("script", function (t) {
          var e, n;
          if (t.crossDomain || t.scriptAttrs)
            return {
              send: function (r, i) {
                (e = S("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                      (n = null),
                      t && i("error" === t.type ? 404 : 200, t.type);
                    }),
                  )),
                x.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
        var $e,
          Ye = [],
          Ve = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var t = Ye.pop() || S.expando + "_" + Se.guid++;
            return (this[t] = !0), t;
          },
        }),
        S.ajaxPrefilter("json jsonp", function (t, e, r) {
          var i,
            o,
            a,
            u =
                !1 !== t.jsonp &&
                (Ve.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                    0 ===
                      (t.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    Ve.test(t.data) &&
                    "data");
          if (u || "jsonp" === t.dataTypes[0])
            return (
              (i = t.jsonpCallback =
                  y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
              u
                ? (t[u] = t[u].replace(Ve, "$1" + i))
                : !1 !== t.jsonp &&
                    (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
              (t.converters["script json"] = function () {
                return a || S.error(i + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? S(n).removeProp(i) : (n[i] = o),
                t[i] && ((t.jsonpCallback = e.jsonpCallback), Ye.push(i)),
                a && y(o) && o(a[0]),
                (a = o = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument =
            ((($e = x.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === $e.childNodes.length)),
        (S.parseHTML = function (t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
            e ||
                  (g.createHTMLDocument
                    ? (((r = (e =
                        x.implementation.createHTMLDocument("")).createElement(
                      "base",
                    )).href = x.location.href),
                    e.head.appendChild(r))
                    : (e = x)),
            (o = !n && []),
            (i = k.exec(t))
              ? [e.createElement(i[1])]
              : ((i = _t([t], e, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
          var r, i, o;
        }),
        (S.fn.load = function (t, e, n) {
          var r,
            i,
            o,
            a = this,
            u = t.indexOf(" ");
          return (
            u > -1 && ((r = ge(t.slice(u))), (t = t.slice(0, u))),
            y(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (i = "POST"),
            a.length > 0 &&
                S.ajax({ url: t, type: i || "GET", dataType: "html", data: e })
                  .done(function (t) {
                    (o = arguments),
                    a.html(r ? S("<div>").append(S.parseHTML(t)).find(r) : t);
                  })
                  .always(
                    n &&
                      function (t, e) {
                        a.each(function () {
                          n.apply(this, o || [t.responseText, e, t]);
                        });
                      },
                  ),
            this
          );
        }),
        (S.expr.pseudos.animated = function (t) {
          return S.grep(S.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (S.offset = {
          setOffset: function (t, e, n) {
            var r,
              i,
              o,
              a,
              u,
              s,
              c = S.css(t, "position"),
              f = S(t),
              l = {};
            "static" === c && (t.style.position = "relative"),
            (u = f.offset()),
            (o = S.css(t, "top")),
            (s = S.css(t, "left")),
            ("absolute" === c || "fixed" === c) &&
                (o + s).indexOf("auto") > -1
              ? ((a = (r = f.position()).top), (i = r.left))
              : ((a = parseFloat(o) || 0), (i = parseFloat(s) || 0)),
            y(e) && (e = e.call(t, n, S.extend({}, u))),
            null != e.top && (l.top = e.top - u.top + a),
            null != e.left && (l.left = e.left - u.left + i),
            "using" in e ? e.using.call(t, l) : f.css(l);
          },
        }),
        S.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                  S.offset.setOffset(this, t, e);
                });
            var e,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((e = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                {
                  top: e.top + n.pageYOffset,
                  left: e.left + n.pageXOffset,
                })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === S.css(r, "position"))
                e = r.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                  n = r.ownerDocument,
                  t = r.offsetParent || n.documentElement;
                  t &&
                    (t === n.body || t === n.documentElement) &&
                    "static" === S.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                    t !== r &&
                    1 === t.nodeType &&
                    (((i = S(t).offset()).top += S.css(
                      t,
                      "borderTopWidth",
                      !0,
                    )),
                    (i.left += S.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - i.top - S.css(r, "marginTop", !0),
                left: e.left - i.left - S.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === S.css(t, "position");

              )
                t = t.offsetParent;
              return t || ot;
            });
          },
        }),
        S.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            S.fn[t] = function (r) {
              return W(
                this,
                function (t, r, i) {
                  var o;
                  if (
                    (m(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === i)
                  )
                    return o ? o[e] : t[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (t[r] = i);
                },
                t,
                r,
                arguments.length,
              );
            };
          },
        ),
        S.each(["top", "left"], function (t, e) {
          S.cssHooks[e] = Wt(g.pixelPosition, function (t, n) {
            if (n)
              return (
                (n = zt(t, e)), Ft.test(n) ? S(t).position()[e] + "px" : n
              );
          });
        }),
        S.each({ Height: "height", Width: "width" }, function (t, e) {
          S.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, r) {
              S.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  u = n || (!0 === i || !0 === o ? "margin" : "border");
                return W(
                  this,
                  function (e, n, i) {
                    var o;
                    return m(e)
                      ? 0 === r.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                        ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t],
                        ))
                        : void 0 === i
                          ? S.css(e, n, u)
                          : S.style(e, n, i, u);
                  },
                  e,
                  a ? i : void 0,
                  a,
                );
              };
            },
          );
        }),
        S.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            S.fn[e] = function (t) {
              return this.on(e, t);
            };
          },
        ),
        S.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, r) {
            return this.on(e, t, n, r);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        S.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " ",
          ),
          function (t, e) {
            S.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          },
        );
        var Xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (S.proxy = function (t, e) {
          var n, r, i;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
            return (
              (r = u.call(arguments, 2)),
              ((i = function () {
                return t.apply(e || this, r.concat(u.call(arguments)));
              }).guid = t.guid =
                t.guid || S.guid++),
              i
            );
        }),
        (S.holdReady = function (t) {
          t ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = N),
        (S.isFunction = y),
        (S.isWindow = m),
        (S.camelCase = X),
        (S.type = _),
        (S.now = Date.now),
        (S.isNumeric = function (t) {
          var e = S.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (S.trim = function (t) {
          return null == t ? "" : (t + "").replace(Xe, "");
        }),
        void 0 ===
            (r = function () {
              return S;
            }.apply(e, [])) || (t.exports = r);
        var Ge = n.jQuery,
          Je = n.$;
        return (
          (S.noConflict = function (t) {
            return (
              n.$ === S && (n.$ = Je), t && n.jQuery === S && (n.jQuery = Ge), S
            );
          }),
          void 0 === i && (n.jQuery = n.$ = S),
          S
        );
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== r && r),
        i = "URLSearchParams" in r,
        o = "Symbol" in r && "iterator" in Symbol,
        a =
          "FileReader" in r &&
          "Blob" in r &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        u = "FormData" in r,
        s = "ArrayBuffer" in r;
      if (s)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          f =
            ArrayBuffer.isView ||
            function (t) {
              return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
            };
      function l(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
        )
          throw new TypeError(
            "Invalid character in header field name: \"" + t + "\"",
          );
        return t.toLowerCase();
      }
      function h(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function p(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return { done: void 0 === e, value: e };
          },
        };
        return (
          o &&
            (e[Symbol.iterator] = function () {
              return e;
            }),
          e
        );
      }
      function d(t) {
        (this.map = {}),
        t instanceof d
          ? t.forEach(function (t, e) {
            this.append(e, t);
          }, this)
          : Array.isArray(t)
            ? t.forEach(function (t) {
              this.append(t[0], t[1]);
            }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
      }
      function v(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }
      function g(t) {
        return new Promise(function (e, n) {
          (t.onload = function () {
            e(t.result);
          }),
          (t.onerror = function () {
            n(t.error);
          });
        });
      }
      function y(t) {
        var e = new FileReader(),
          n = g(e);
        return e.readAsArrayBuffer(t), n;
      }
      function m(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function x() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            var e;
            (this.bodyUsed = this.bodyUsed),
            (this._bodyInit = t),
            t
              ? "string" == typeof t
                ? (this._bodyText = t)
                : a && Blob.prototype.isPrototypeOf(t)
                  ? (this._bodyBlob = t)
                  : u && FormData.prototype.isPrototypeOf(t)
                    ? (this._bodyFormData = t)
                    : i && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : s && a && (e = t) && DataView.prototype.isPrototypeOf(e)
                        ? ((this._bodyArrayBuffer = m(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : s && (ArrayBuffer.prototype.isPrototypeOf(t) || f(t))
                          ? (this._bodyArrayBuffer = m(t))
                          : (this._bodyText = t = Object.prototype.toString.call(t))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
                ("string" == typeof t
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : i &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8",
                    ));
          }),
          a &&
            ((this.blob = function () {
              var t = v(this);
              if (t) return t;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer) {
                var t = v(this);
                return (
                  t ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength,
                      ),
                    )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              }
              return this.blob().then(y);
            })),
          (this.text = function () {
            var t,
              e,
              n,
              r = v(this);
            if (r) return r;
            if (this._bodyBlob)
              return (
                (t = this._bodyBlob),
                (e = new FileReader()),
                (n = g(e)),
                e.readAsText(t),
                n
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (t) {
                  for (
                    var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                    r < e.length;
                    r++
                  )
                    n[r] = String.fromCharCode(e[r]);
                  return n.join("");
                })(this._bodyArrayBuffer),
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          u &&
            (this.formData = function () {
              return this.text().then(_);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (d.prototype.append = function (t, e) {
        (t = l(t)), (e = h(e));
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e;
      }),
      (d.prototype.delete = function (t) {
        delete this.map[l(t)];
      }),
      (d.prototype.get = function (t) {
        return (t = l(t)), this.has(t) ? this.map[t] : null;
      }),
      (d.prototype.has = function (t) {
        return this.map.hasOwnProperty(l(t));
      }),
      (d.prototype.set = function (t, e) {
        this.map[l(t)] = h(e);
      }),
      (d.prototype.forEach = function (t, e) {
        for (var n in this.map)
          this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
      }),
      (d.prototype.keys = function () {
        var t = [];
        return (
          this.forEach(function (e, n) {
            t.push(n);
          }),
          p(t)
        );
      }),
      (d.prototype.values = function () {
        var t = [];
        return (
          this.forEach(function (e) {
            t.push(e);
          }),
          p(t)
        );
      }),
      (d.prototype.entries = function () {
        var t = [];
        return (
          this.forEach(function (e, n) {
            t.push([n, e]);
          }),
          p(t)
        );
      }),
      o && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function w(t, e) {
        if (!(this instanceof w))
          throw new TypeError(
            "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.",
          );
        var n,
          r,
          i = (e = e || {}).body;
        if (t instanceof w) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new d(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          (this.signal = t.signal),
          i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials =
            e.credentials || this.credentials || "same-origin"),
          (!e.headers && this.headers) || (this.headers = new d(e.headers)),
          (this.method =
            ((n = e.method || this.method || "GET"),
            (r = n.toUpperCase()),
            b.indexOf(r) > -1 ? r : n)),
          (this.mode = e.mode || this.mode || null),
          (this.signal = e.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && i)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(i),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== e.cache && "no-cache" !== e.cache)
          ))
        ) {
          var o = /([?&])_=[^&]*/;
          if (o.test(this.url))
            this.url = this.url.replace(o, "$1_=" + new Date().getTime());
          else {
            this.url +=
              (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      function _(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              if (t) {
                var n = t.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  i = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(i));
              }
            }),
          e
        );
      }
      function S(t, e) {
        if (!(this instanceof S))
          throw new TypeError(
            "Please use the \"new\" operator, this DOM object constructor cannot be called as a function.",
          );
        e || (e = {}),
        (this.type = "default"),
        (this.status = void 0 === e.status ? 200 : e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = void 0 === e.statusText ? "" : "" + e.statusText),
        (this.headers = new d(e.headers)),
        (this.url = e.url || ""),
        this._initBody(t);
      }
      (w.prototype.clone = function () {
        return new w(this, { body: this._bodyInit });
      }),
      x.call(w.prototype),
      x.call(S.prototype),
      (S.prototype.clone = function () {
        return new S(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new d(this.headers),
          url: this.url,
        });
      }),
      (S.error = function () {
        var t = new S(null, { status: 0, statusText: "" });
        return (t.type = "error"), t;
      });
      var T = [301, 302, 303, 307, 308];
      S.redirect = function (t, e) {
        if (-1 === T.indexOf(e)) throw new RangeError("Invalid status code");
        return new S(null, { status: e, headers: { location: t } });
      };
      var E = r.DOMException;
      try {
        new E();
      } catch (t) {
        ((E = function (t, e) {
          (this.message = t), (this.name = e);
          var n = Error(t);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
        (E.prototype.constructor = E);
      }
      function A(t, e) {
        return new Promise(function (n, i) {
          var o = new w(t, e);
          if (o.signal && o.signal.aborted)
            return i(new E("Aborted", "AbortError"));
          var u = new XMLHttpRequest();
          function c() {
            u.abort();
          }
          (u.onload = function () {
            var t,
              e,
              r = {
                status: u.status,
                statusText: u.statusText,
                headers:
                  ((t = u.getAllResponseHeaders() || ""),
                  (e = new d()),
                  t
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split("\r")
                    .map(function (t) {
                      return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t;
                    })
                    .forEach(function (t) {
                      var n = t.split(":"),
                        r = n.shift().trim();
                      if (r) {
                        var i = n.join(":").trim();
                        e.append(r, i);
                      }
                    }),
                  e),
              };
            r.url =
              "responseURL" in u
                ? u.responseURL
                : r.headers.get("X-Request-URL");
            var i = "response" in u ? u.response : u.responseText;
            setTimeout(function () {
              n(new S(i, r));
            }, 0);
          }),
          (u.onerror = function () {
            setTimeout(function () {
              i(new TypeError("Network request failed"));
            }, 0);
          }),
          (u.ontimeout = function () {
            setTimeout(function () {
              i(new TypeError("Network request failed"));
            }, 0);
          }),
          (u.onabort = function () {
            setTimeout(function () {
              i(new E("Aborted", "AbortError"));
            }, 0);
          }),
          u.open(
            o.method,
            (function (t) {
              try {
                return "" === t && r.location.href ? r.location.href : t;
              } catch (e) {
                return t;
              }
            })(o.url),
            !0,
          ),
          "include" === o.credentials
            ? (u.withCredentials = !0)
            : "omit" === o.credentials && (u.withCredentials = !1),
          "responseType" in u &&
              (a
                ? (u.responseType = "blob")
                : s &&
                  o.headers.get("Content-Type") &&
                  -1 !==
                    o.headers
                      .get("Content-Type")
                      .indexOf("application/octet-stream") &&
                  (u.responseType = "arraybuffer")),
          !e || "object" != typeof e.headers || e.headers instanceof d
            ? o.headers.forEach(function (t, e) {
              u.setRequestHeader(e, t);
            })
            : Object.getOwnPropertyNames(e.headers).forEach(function (t) {
              u.setRequestHeader(t, h(e.headers[t]));
            }),
          o.signal &&
              (o.signal.addEventListener("abort", c),
              (u.onreadystatechange = function () {
                4 === u.readyState && o.signal.removeEventListener("abort", c);
              })),
          u.send(void 0 === o._bodyInit ? null : o._bodyInit);
        });
      }
      (A.polyfill = !0),
      r.fetch ||
          ((r.fetch = A), (r.Headers = d), (r.Request = w), (r.Response = S));
    },
    function (t, e, n) {
      n(145),
      n(154),
      n(250),
      n(251),
      n(252),
      n(253),
      n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(260),
      n(261),
      n(262),
      n(263),
      n(264),
      n(265),
      n(266),
      n(267),
      n(268),
      n(269),
      n(270),
      n(271),
      n(272),
      n(273),
      n(274),
      n(276),
      n(277),
      n(278),
      n(77),
      n(279),
      n(280),
      n(115),
      n(281),
      n(282),
      n(283),
      n(284),
      n(285),
      n(286),
      n(287),
      n(288),
      n(289),
      n(290),
      n(291),
      n(292),
      n(294),
      n(295),
      n(296),
      n(297),
      n(298),
      n(300),
      n(301),
      n(303),
      n(304),
      n(305),
      n(306),
      n(307),
      n(308),
      n(309),
      n(310),
      n(311),
      n(312),
      n(313),
      n(314),
      n(315),
      n(316),
      n(317),
      n(318),
      n(320),
      n(321),
      n(322),
      n(323),
      n(324),
      n(325),
      n(326),
      n(327),
      n(328),
      n(329),
      n(330),
      n(331),
      n(332),
      n(334),
      n(335),
      n(336),
      n(337),
      n(338),
      n(339),
      n(340),
      n(341),
      n(342),
      n(343),
      n(344),
      n(345),
      n(346),
      n(347),
      n(348),
      n(349),
      n(350),
      n(351),
      n(352),
      n(353),
      n(354),
      n(355),
      n(356),
      n(357),
      n(358),
      n(359),
      n(360),
      n(361),
      n(362),
      n(363),
      n(364),
      n(365),
      n(366),
      n(368),
      n(369),
      n(370),
      n(371),
      n(375),
      n(376),
      n(377),
      n(378),
      n(379),
      n(380),
      n(381),
      n(382),
      n(383),
      n(384),
      n(385),
      n(386),
      n(387),
      n(388),
      n(389),
      n(390),
      n(391),
      n(392),
      n(53),
      n(393),
      n(394),
      n(395),
      n(396),
      n(397),
      n(398),
      n(399),
      n(400),
      n(401),
      n(178),
      n(402),
      n(403),
      n(404),
      n(405),
      n(406),
      n(407),
      n(91),
      n(408),
      n(409),
      n(410),
      n(411),
      n(412),
      n(413),
      n(414),
      n(415),
      n(416),
      n(417),
      n(418),
      n(419),
      n(420),
      n(421),
      n(422),
      n(423),
      n(424),
      n(425),
      n(426),
      n(427),
      n(428),
      n(430),
      n(431),
      n(432),
      n(433),
      n(434),
      n(435),
      n(436),
      n(437),
      n(438),
      n(439),
      n(440),
      n(441),
      n(443),
      n(444),
      n(445),
      n(446),
      n(447),
      n(448),
      n(449),
      n(450),
      n(451),
      n(452),
      n(453),
      n(454),
      n(455),
      n(456),
      n(457),
      n(458),
      n(459),
      n(460),
      n(461),
      n(462),
      n(463),
      n(464),
      n(465),
      n(92),
      n(466),
      n(467),
      n(468),
      n(469),
      n(470),
      n(473),
      n(186),
      (t.exports = n(104));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      n(20)("asyncIterator");
    },
    function (t, e, n) {
      n(20)("hasInstance");
    },
    function (t, e, n) {
      n(20)("isConcatSpreadable");
    },
    function (t, e, n) {
      n(20)("iterator");
    },
    function (t, e, n) {
      n(20)("match");
    },
    function (t, e, n) {
      n(20)("matchAll");
    },
    function (t, e, n) {
      n(20)("replace");
    },
    function (t, e, n) {
      n(20)("search");
    },
    function (t, e, n) {
      n(20)("species");
    },
    function (t, e, n) {
      n(20)("split");
    },
    function (t, e, n) {
      n(20)("toPrimitive");
    },
    function (t, e, n) {
      n(20)("toStringTag");
    },
    function (t, e, n) {
      n(20)("unscopables");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(27),
        o = n(33),
        a = n(30),
        u = n(16),
        s = n(31),
        c = n(39),
        f = function (t, e) {
          var n = this;
          if (!(n instanceof f)) return new f(t, e);
          o && (n = o(new Error(void 0), i(n))),
          void 0 !== e && u(n, "message", String(e));
          var r = [];
          return c(t, r.push, { that: r }), u(n, "errors", r), n;
        };
      (f.prototype = a(Error.prototype, {
        constructor: s(5, f),
        message: s(5, ""),
        name: s(5, "AggregateError"),
      })),
      r({ global: !0 }, { AggregateError: f });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        o = n(44),
        a = n(4),
        u = n(11),
        s = n(9),
        c = n(45),
        f = n(62),
        l = n(66),
        h = n(7),
        p = n(47),
        d = h("isConcatSpreadable"),
        v =
          p >= 51 ||
          !i(function () {
            var t = [];
            return (t[d] = !1), t.concat()[0] !== t;
          }),
        g = l("concat"),
        y = function (t) {
          if (!a(t)) return !1;
          var e = t[d];
          return void 0 !== e ? !!e : o(t);
        };
      r(
        { target: "Array", proto: !0, forced: !v || !g },
        {
          concat: function (t) {
            var e,
              n,
              r,
              i,
              o,
              a = u(this),
              l = f(a, 0),
              h = 0;
            for (e = -1, r = arguments.length; e < r; e++)
              if (y((o = -1 === e ? a : arguments[e]))) {
                if (h + (i = s(o.length)) > 9007199254740991)
                  throw TypeError("Maximum allowed index exceeded");
                for (n = 0; n < i; n++, h++) n in o && c(l, h, o[n]);
              } else {
                if (h >= 9007199254740991)
                  throw TypeError("Maximum allowed index exceeded");
                c(l, h++, o);
              }
            return (l.length = h), l;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(157),
        o = n(40);
      r({ target: "Array", proto: !0 }, { copyWithin: i }), o("copyWithin");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).every;
      r(
        { target: "Array", proto: !0, forced: !n(34)("every") },
        {
          every: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(112),
        o = n(40);
      r({ target: "Array", proto: !0 }, { fill: i }), o("fill");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).filter;
      r(
        { target: "Array", proto: !0, forced: !n(66)("filter") },
        {
          filter: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).find,
        o = n(40),
        a = !0;
      "find" in [] &&
        Array(1).find(function () {
          a = !1;
        }),
      r(
        { target: "Array", proto: !0, forced: a },
        {
          find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
      o("find");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).findIndex,
        o = n(40),
        a = !0;
      "findIndex" in [] &&
        Array(1).findIndex(function () {
          a = !1;
        }),
      r(
        { target: "Array", proto: !0, forced: a },
        {
          findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
      o("findIndex");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(158),
        o = n(11),
        a = n(9),
        u = n(26),
        s = n(62);
      r(
        { target: "Array", proto: !0 },
        {
          flat: function () {
            var t = arguments.length ? arguments[0] : void 0,
              e = o(this),
              n = a(e.length),
              r = s(e, 0);
            return (r.length = i(r, e, e, n, 0, void 0 === t ? 1 : u(t))), r;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(158),
        o = n(11),
        a = n(9),
        u = n(19),
        s = n(62);
      r(
        { target: "Array", proto: !0 },
        {
          flatMap: function (t) {
            var e,
              n = o(this),
              r = a(n.length);
            return (
              u(t),
              ((e = s(n, 0)).length = i(
                e,
                n,
                n,
                r,
                0,
                1,
                t,
                arguments.length > 1 ? arguments[1] : void 0,
              )),
              e
            );
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(159);
      r(
        { target: "Array", proto: !0, forced: [].forEach != i },
        { forEach: i },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(160);
      r(
        {
          target: "Array",
          stat: !0,
          forced: !n(76)(function (t) {
            Array.from(t);
          }),
        },
        { from: i },
      );
    },
    function (t, e, n) {
      var r = n(5),
        i = n(156);
      t.exports = function (t, e, n, o) {
        try {
          return o ? e(r(n)[0], n[1]) : e(n);
        } catch (e) {
          throw (i(t), e);
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(58).includes,
        o = n(40);
      r(
        { target: "Array", proto: !0 },
        {
          includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
      o("includes");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(58).indexOf,
        o = n(34),
        a = [].indexOf,
        u = !!a && 1 / [1].indexOf(1, -0) < 0,
        s = o("indexOf");
      r(
        { target: "Array", proto: !0, forced: u || !s },
        {
          indexOf: function (t) {
            return u
              ? a.apply(this, arguments) || 0
              : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Array", stat: !0 }, { isArray: n(44) });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(55),
        o = n(21),
        a = n(34),
        u = [].join,
        s = i != Object,
        c = a("join", ",");
      r(
        { target: "Array", proto: !0, forced: s || !c },
        {
          join: function (t) {
            return u.call(o(this), void 0 === t ? "," : t);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(162);
      r(
        { target: "Array", proto: !0, forced: i !== [].lastIndexOf },
        { lastIndexOf: i },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        o = n(45);
      r(
        {
          target: "Array",
          stat: !0,
          forced: i(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t);
          }),
        },
        {
          of: function () {
            for (
              var t = 0,
                e = arguments.length,
                n = new ("function" == typeof this ? this : Array)(e);
              e > t;

            )
              o(n, t, arguments[t++]);
            return (n.length = e), n;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(78).left,
        o = n(34),
        a = n(47),
        u = n(48);
      r(
        {
          target: "Array",
          proto: !0,
          forced: !o("reduce") || (!u && a > 79 && a < 83),
        },
        {
          reduce: function (t) {
            return i(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0,
            );
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(78).right,
        o = n(34),
        a = n(47),
        u = n(48);
      r(
        {
          target: "Array",
          proto: !0,
          forced: !o("reduceRight") || (!u && a > 79 && a < 83),
        },
        {
          reduceRight: function (t) {
            return i(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0,
            );
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(44),
        o = [].reverse,
        a = [1, 2];
      r(
        {
          target: "Array",
          proto: !0,
          forced: String(a) === String(a.reverse()),
        },
        {
          reverse: function () {
            return i(this) && (this.length = this.length), o.call(this);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(4),
        o = n(44),
        a = n(37),
        u = n(9),
        s = n(21),
        c = n(45),
        f = n(7),
        l = n(66)("slice"),
        h = f("species"),
        p = [].slice,
        d = Math.max;
      r(
        { target: "Array", proto: !0, forced: !l },
        {
          slice: function (t, e) {
            var n,
              r,
              f,
              l = s(this),
              v = u(l.length),
              g = a(t, v),
              y = a(void 0 === e ? v : e, v);
            if (
              o(l) &&
              ("function" != typeof (n = l.constructor) ||
              (n !== Array && !o(n.prototype))
                ? i(n) && null === (n = n[h]) && (n = void 0)
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return p.call(l, g, y);
            for (
              r = new (void 0 === n ? Array : n)(d(y - g, 0)), f = 0;
              g < y;
              g++, f++
            )
              g in l && c(r, f, l[g]);
            return (r.length = f), r;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(13).some;
      r(
        { target: "Array", proto: !0, forced: !n(34)("some") },
        {
          some: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(19),
        o = n(11),
        a = n(1),
        u = n(34),
        s = [],
        c = s.sort,
        f = a(function () {
          s.sort(void 0);
        }),
        l = a(function () {
          s.sort(null);
        }),
        h = u("sort");
      r(
        { target: "Array", proto: !0, forced: f || !l || !h },
        {
          sort: function (t) {
            return void 0 === t ? c.call(o(this)) : c.call(o(this), i(t));
          },
        },
      );
    },
    function (t, e, n) {
      n(49)("Array");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(37),
        o = n(26),
        a = n(9),
        u = n(11),
        s = n(62),
        c = n(45),
        f = n(66)("splice"),
        l = Math.max,
        h = Math.min;
      r(
        { target: "Array", proto: !0, forced: !f },
        {
          splice: function (t, e) {
            var n,
              r,
              f,
              p,
              d,
              v,
              g = u(this),
              y = a(g.length),
              m = i(t, y),
              x = arguments.length;
            if (
              (0 === x
                ? (n = r = 0)
                : 1 === x
                  ? ((n = 0), (r = y - m))
                  : ((n = x - 2), (r = h(l(o(e), 0), y - m))),
              y + n - r > 9007199254740991)
            )
              throw TypeError("Maximum allowed length exceeded");
            for (f = s(g, r), p = 0; p < r; p++)
              (d = m + p) in g && c(f, p, g[d]);
            if (((f.length = r), n < r)) {
              for (p = m; p < y - r; p++)
                (v = p + n), (d = p + r) in g ? (g[v] = g[d]) : delete g[v];
              for (p = y; p > y - r + n; p--) delete g[p - 1];
            } else if (n > r)
              for (p = y - r; p > m; p--)
                (v = p + n - 1),
                (d = p + r - 1) in g ? (g[v] = g[d]) : delete g[v];
            for (p = 0; p < n; p++) g[p + m] = arguments[p + 2];
            return (g.length = y - r + n), f;
          },
        },
      );
    },
    function (t, e, n) {
      n(40)("flat");
    },
    function (t, e, n) {
      n(40)("flatMap");
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(3),
        o = n(79),
        a = n(49),
        u = o.ArrayBuffer;
      r({ global: !0, forced: i.ArrayBuffer !== u }, { ArrayBuffer: u }),
      a("ArrayBuffer");
    },
    function (t, e) {
      var n = Math.abs,
        r = Math.pow,
        i = Math.floor,
        o = Math.log,
        a = Math.LN2;
      t.exports = {
        pack: function (t, e, u) {
          var s,
            c,
            f,
            l = new Array(u),
            h = 8 * u - e - 1,
            p = (1 << h) - 1,
            d = p >> 1,
            v = 23 === e ? r(2, -24) - r(2, -77) : 0,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
            y = 0;
          for (
            (t = n(t)) != t || t === 1 / 0
              ? ((c = t != t ? 1 : 0), (s = p))
              : ((s = i(o(t) / a)),
              t * (f = r(2, -s)) < 1 && (s--, (f *= 2)),
              (t += s + d >= 1 ? v / f : v * r(2, 1 - d)) * f >= 2 &&
                  (s++, (f /= 2)),
              s + d >= p
                ? ((c = 0), (s = p))
                : s + d >= 1
                  ? ((c = (t * f - 1) * r(2, e)), (s += d))
                  : ((c = t * r(2, d - 1) * r(2, e)), (s = 0)));
            e >= 8;
            l[y++] = 255 & c, c /= 256, e -= 8
          );
          for (
            s = (s << e) | c, h += e;
            h > 0;
            l[y++] = 255 & s, s /= 256, h -= 8
          );
          return (l[--y] |= 128 * g), l;
        },
        unpack: function (t, e) {
          var n,
            i = t.length,
            o = 8 * i - e - 1,
            a = (1 << o) - 1,
            u = a >> 1,
            s = o - 7,
            c = i - 1,
            f = t[c--],
            l = 127 & f;
          for (f >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
          for (
            n = l & ((1 << -s) - 1), l >>= -s, s += e;
            s > 0;
            n = 256 * n + t[c], c--, s -= 8
          );
          if (0 === l) l = 1 - u;
          else {
            if (l === a) return n ? NaN : f ? -1 / 0 : 1 / 0;
            (n += r(2, e)), (l -= u);
          }
          return (f ? -1 : 1) * n * r(2, l - e);
        },
      };
    },
    function (t, e, n) {
      var r = n(0),
        i = n(8);
      r(
        {
          target: "ArrayBuffer",
          stat: !0,
          forced: !i.NATIVE_ARRAY_BUFFER_VIEWS,
        },
        { isView: i.isView },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        o = n(79),
        a = n(5),
        u = n(37),
        s = n(9),
        c = n(35),
        f = o.ArrayBuffer,
        l = o.DataView,
        h = f.prototype.slice;
      r(
        {
          target: "ArrayBuffer",
          proto: !0,
          unsafe: !0,
          forced: i(function () {
            return !new f(2).slice(1, void 0).byteLength;
          }),
        },
        {
          slice: function (t, e) {
            if (void 0 !== h && void 0 === e) return h.call(a(this), t);
            for (
              var n = a(this).byteLength,
                r = u(t, n),
                i = u(void 0 === e ? n : e, n),
                o = new (c(this, f))(s(i - r)),
                p = new l(this),
                d = new l(o),
                v = 0;
              r < i;

            )
              d.setUint8(v++, p.getUint8(r++));
            return o;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(79);
      r({ global: !0, forced: !n(116) }, { DataView: i.DataView });
    },
    function (t, e, n) {
      n(0)(
        { target: "Date", stat: !0 },
        {
          now: function () {
            return new Date().getTime();
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(299);
      r(
        { target: "Date", proto: !0, forced: Date.prototype.toISOString !== i },
        { toISOString: i },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        i = n(117).start,
        o = Math.abs,
        a = Date.prototype,
        u = a.getTime,
        s = a.toISOString;
      t.exports =
        r(function () {
          return (
            "0385-07-25T07:06:39.999Z" != s.call(new Date(-50000000000001))
          );
        }) ||
        !r(function () {
          s.call(new Date(NaN));
        })
          ? function () {
            if (!isFinite(u.call(this)))
              throw RangeError("Invalid time value");
            var t = this.getUTCFullYear(),
              e = this.getUTCMilliseconds(),
              n = t < 0 ? "-" : t > 9999 ? "+" : "";
            return (
              n +
                i(o(t), n ? 6 : 4, 0) +
                "-" +
                i(this.getUTCMonth() + 1, 2, 0) +
                "-" +
                i(this.getUTCDate(), 2, 0) +
                "T" +
                i(this.getUTCHours(), 2, 0) +
                ":" +
                i(this.getUTCMinutes(), 2, 0) +
                ":" +
                i(this.getUTCSeconds(), 2, 0) +
                "." +
                i(e, 3, 0) +
                "Z"
            );
          }
          : s;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        o = n(11),
        a = n(28);
      r(
        {
          target: "Date",
          proto: !0,
          forced: i(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
        },
        {
          toJSON: function (t) {
            var e = o(this),
              n = a(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(16),
        i = n(302),
        o = n(7)("toPrimitive"),
        a = Date.prototype;
      o in a || r(a, o, i);
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        i = n(28);
      t.exports = function (t) {
        if ("string" !== t && "number" !== t && "default" !== t)
          throw TypeError("Incorrect hint");
        return i(r(this), "number" !== t);
      };
    },
    function (t, e, n) {
      var r = n(17),
        i = Date.prototype,
        o = i.toString,
        a = i.getTime;
      new Date(NaN) + "" != "Invalid Date" &&
        r(i, "toString", function () {
          var t = a.call(this);
          return t == t ? o.call(this) : "Invalid Date";
        });
    },
    function (t, e, n) {
      n(0)({ target: "Function", proto: !0 }, { bind: n(164) });
    },
    function (t, e, n) {
      "use strict";
      var r = n(4),
        i = n(10),
        o = n(27),
        a = n(7)("hasInstance"),
        u = Function.prototype;
      a in u ||
        i.f(u, a, {
          value: function (t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; (t = o(t)); ) if (this.prototype === t) return !0;
            return !1;
          },
        });
    },
    function (t, e, n) {
      var r = n(6),
        i = n(10).f,
        o = Function.prototype,
        a = o.toString,
        u = /^\s*function ([^ (]*)/;
      r &&
        !("name" in o) &&
        i(o, "name", {
          configurable: !0,
          get: function () {
            try {
              return a.call(this).match(u)[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    function (t, e, n) {
      n(0)({ global: !0 }, { globalThis: n(3) });
    },
    function (t, e, n) {
      var r = n(0),
        i = n(22),
        o = n(1),
        a = i("JSON", "stringify"),
        u = /[\uD800-\uDFFF]/g,
        s = /^[\uD800-\uDBFF]$/,
        c = /^[\uDC00-\uDFFF]$/,
        f = function (t, e, n) {
          var r = n.charAt(e - 1),
            i = n.charAt(e + 1);
          return (s.test(t) && !c.test(i)) || (c.test(t) && !s.test(r))
            ? "\\u" + t.charCodeAt(0).toString(16)
            : t;
        },
        l = o(function () {
          return (
            "\"\\udf06\\ud834\"" !== a("\udf06\ud834") ||
            "\"\\udead\"" !== a("\udead")
          );
        });
      a &&
        r(
          { target: "JSON", stat: !0, forced: l },
          {
            stringify: function (t, e, n) {
              var r = a.apply(null, arguments);
              return "string" == typeof r ? r.replace(u, f) : r;
            },
          },
        );
    },
    function (t, e, n) {
      var r = n(3);
      n(29)(r.JSON, "JSON", !0);
    },
    function (t, e, n) {
      "use strict";
      var r = n(80),
        i = n(165);
      t.exports = r(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i,
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(166),
        o = Math.acosh,
        a = Math.log,
        u = Math.sqrt,
        s = Math.LN2;
      r(
        {
          target: "Math",
          stat: !0,
          forced:
            !o || 710 != Math.floor(o(Number.MAX_VALUE)) || o(1 / 0) != 1 / 0,
        },
        {
          acosh: function (t) {
            return (t = +t) < 1
              ? NaN
              : t > 94906265.62425156
                ? a(t) + s
                : i(t - 1 + u(t - 1) * u(t + 1));
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.asinh,
        o = Math.log,
        a = Math.sqrt;
      r(
        { target: "Math", stat: !0, forced: !(i && 1 / i(0) > 0) },
        {
          asinh: function t(e) {
            return isFinite((e = +e)) && 0 != e
              ? e < 0
                ? -t(-e)
                : o(e + a(e * e + 1))
              : e;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.atanh,
        o = Math.log;
      r(
        { target: "Math", stat: !0, forced: !(i && 1 / i(-0) < 0) },
        {
          atanh: function (t) {
            return 0 == (t = +t) ? t : o((1 + t) / (1 - t)) / 2;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(119),
        o = Math.abs,
        a = Math.pow;
      r(
        { target: "Math", stat: !0 },
        {
          cbrt: function (t) {
            return i((t = +t)) * a(o(t), 1 / 3);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.floor,
        o = Math.log,
        a = Math.LOG2E;
      r(
        { target: "Math", stat: !0 },
        {
          clz32: function (t) {
            return (t >>>= 0) ? 31 - i(o(t + 0.5) * a) : 32;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(82),
        o = Math.cosh,
        a = Math.abs,
        u = Math.E;
      r(
        { target: "Math", stat: !0, forced: !o || o(710) === 1 / 0 },
        {
          cosh: function (t) {
            var e = i(a(t) - 1) + 1;
            return (e + 1 / (e * u * u)) * (u / 2);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(82);
      r({ target: "Math", stat: !0, forced: i != Math.expm1 }, { expm1: i });
    },
    function (t, e, n) {
      n(0)({ target: "Math", stat: !0 }, { fround: n(319) });
    },
    function (t, e, n) {
      var r = n(119),
        i = Math.abs,
        o = Math.pow,
        a = o(2, -52),
        u = o(2, -23),
        s = o(2, 127) * (2 - u),
        c = o(2, -126);
      t.exports =
        Math.fround ||
        function (t) {
          var e,
            n,
            o = i(t),
            f = r(t);
          return o < c
            ? f * (o / c / u + 1 / a - 1 / a) * c * u
            : (n = (e = (1 + u / a) * o) - (e - o)) > s || n != n
              ? f * (1 / 0)
              : f * n;
        };
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.hypot,
        o = Math.abs,
        a = Math.sqrt;
      r(
        { target: "Math", stat: !0, forced: !!i && i(1 / 0, NaN) !== 1 / 0 },
        {
          hypot: function (t, e) {
            for (var n, r, i = 0, u = 0, s = arguments.length, c = 0; u < s; )
              c < (n = o(arguments[u++]))
                ? ((i = i * (r = c / n) * r + 1), (c = n))
                : (i += n > 0 ? (r = n / c) * r : n);
            return c === 1 / 0 ? 1 / 0 : c * a(i);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = Math.imul;
      r(
        {
          target: "Math",
          stat: !0,
          forced: i(function () {
            return -5 != o(4294967295, 5) || 2 != o.length;
          }),
        },
        {
          imul: function (t, e) {
            var n = +t,
              r = +e,
              i = 65535 & n,
              o = 65535 & r;
            return (
              0 |
              (i * o +
                ((((65535 & (n >>> 16)) * o + i * (65535 & (r >>> 16))) <<
                  16) >>>
                  0))
            );
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.log,
        o = Math.LOG10E;
      r(
        { target: "Math", stat: !0 },
        {
          log10: function (t) {
            return i(t) * o;
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Math", stat: !0 }, { log1p: n(166) });
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.log,
        o = Math.LN2;
      r(
        { target: "Math", stat: !0 },
        {
          log2: function (t) {
            return i(t) / o;
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Math", stat: !0 }, { sign: n(119) });
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(82),
        a = Math.abs,
        u = Math.exp,
        s = Math.E;
      r(
        {
          target: "Math",
          stat: !0,
          forced: i(function () {
            return -2e-17 != Math.sinh(-2e-17);
          }),
        },
        {
          sinh: function (t) {
            return a((t = +t)) < 1
              ? (o(t) - o(-t)) / 2
              : (u(t - 1) - u(-t - 1)) * (s / 2);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(82),
        o = Math.exp;
      r(
        { target: "Math", stat: !0 },
        {
          tanh: function (t) {
            var e = i((t = +t)),
              n = i(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t));
          },
        },
      );
    },
    function (t, e, n) {
      n(29)(Math, "Math", !0);
    },
    function (t, e, n) {
      var r = n(0),
        i = Math.ceil,
        o = Math.floor;
      r(
        { target: "Math", stat: !0 },
        {
          trunc: function (t) {
            return (t > 0 ? o : i)(t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(6),
        i = n(3),
        o = n(59),
        a = n(17),
        u = n(12),
        s = n(32),
        c = n(81),
        f = n(28),
        l = n(1),
        h = n(30),
        p = n(43).f,
        d = n(14).f,
        v = n(10).f,
        g = n(51).trim,
        y = i.Number,
        m = y.prototype,
        x = "Number" == s(h(m)),
        b = function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            s,
            c = f(t, !1);
          if ("string" == typeof c && c.length > 2)
            if (43 === (e = (c = g(c)).charCodeAt(0)) || 45 === e) {
              if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === e) {
              switch (c.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +c;
              }
              for (a = (o = c.slice(2)).length, u = 0; u < a; u++)
                if ((s = o.charCodeAt(u)) < 48 || s > i) return NaN;
              return parseInt(o, r);
            }
          return +c;
        };
      if (o("Number", !y(" 0o1") || !y("0b1") || y("+0x1"))) {
        for (
          var w,
            _ = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                n = this;
              return n instanceof _ &&
                (x
                  ? l(function () {
                    m.valueOf.call(n);
                  })
                  : "Number" != s(n))
                ? c(new y(b(e)), n, _)
                : b(e);
            },
            S = r
              ? p(y)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                ",",
              ),
            T = 0;
          S.length > T;
          T++
        )
          u(y, (w = S[T])) && !u(_, w) && v(_, w, d(y, w));
        (_.prototype = m), (m.constructor = _), a(i, "Number", _);
      }
    },
    function (t, e, n) {
      n(0)({ target: "Number", stat: !0 }, { EPSILON: Math.pow(2, -52) });
    },
    function (t, e, n) {
      n(0)({ target: "Number", stat: !0 }, { isFinite: n(333) });
    },
    function (t, e, n) {
      var r = n(3).isFinite;
      t.exports =
        Number.isFinite ||
        function (t) {
          return "number" == typeof t && r(t);
        };
    },
    function (t, e, n) {
      n(0)({ target: "Number", stat: !0 }, { isInteger: n(167) });
    },
    function (t, e, n) {
      n(0)(
        { target: "Number", stat: !0 },
        {
          isNaN: function (t) {
            return t != t;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(167),
        o = Math.abs;
      r(
        { target: "Number", stat: !0 },
        {
          isSafeInteger: function (t) {
            return i(t) && o(t) <= 9007199254740991;
          },
        },
      );
    },
    function (t, e, n) {
      n(0)(
        { target: "Number", stat: !0 },
        { MAX_SAFE_INTEGER: 9007199254740991 },
      );
    },
    function (t, e, n) {
      n(0)(
        { target: "Number", stat: !0 },
        { MIN_SAFE_INTEGER: -9007199254740991 },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(168);
      r(
        { target: "Number", stat: !0, forced: Number.parseFloat != i },
        { parseFloat: i },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(169);
      r(
        { target: "Number", stat: !0, forced: Number.parseInt != i },
        { parseInt: i },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(26),
        o = n(170),
        a = n(118),
        u = n(1),
        s = (1).toFixed,
        c = Math.floor,
        f = function (t, e, n) {
          return 0 === e
            ? n
            : e % 2 == 1
              ? f(t, e - 1, n * t)
              : f(t * t, e / 2, n);
        },
        l = function (t, e, n) {
          for (var r = -1, i = n; ++r < 6; )
            (i += e * t[r]), (t[r] = i % 1e7), (i = c(i / 1e7));
        },
        h = function (t, e) {
          for (var n = 6, r = 0; --n >= 0; )
            (r += t[n]), (t[n] = c(r / e)), (r = (r % e) * 1e7);
        },
        p = function (t) {
          for (var e = 6, n = ""; --e >= 0; )
            if ("" !== n || 0 === e || 0 !== t[e]) {
              var r = String(t[e]);
              n = "" === n ? r : n + a.call("0", 7 - r.length) + r;
            }
          return n;
        };
      r(
        {
          target: "Number",
          proto: !0,
          forced:
            (s &&
              ("0.000" !== (8e-5).toFixed(3) ||
                "1" !== (0.9).toFixed(0) ||
                "1.25" !== (1.255).toFixed(2) ||
                "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !u(function () {
              s.call({});
            }),
        },
        {
          toFixed: function (t) {
            var e,
              n,
              r,
              u,
              s = o(this),
              c = i(t),
              d = [0, 0, 0, 0, 0, 0],
              v = "",
              g = "0";
            if (c < 0 || c > 20) throw RangeError("Incorrect fraction digits");
            if (s != s) return "NaN";
            if (s <= -1e21 || s >= 1e21) return String(s);
            if ((s < 0 && ((v = "-"), (s = -s)), s > 1e-21))
              if (
                ((n =
                  (e =
                    (function (t) {
                      for (var e = 0, n = t; n >= 4096; )
                        (e += 12), (n /= 4096);
                      for (; n >= 2; ) (e += 1), (n /= 2);
                      return e;
                    })(s * f(2, 69, 1)) - 69) < 0
                    ? s * f(2, -e, 1)
                    : s / f(2, e, 1)),
                (n *= 4503599627370496),
                (e = 52 - e) > 0)
              ) {
                for (l(d, 0, n), r = c; r >= 7; ) l(d, 1e7, 0), (r -= 7);
                for (l(d, f(10, r, 1), 0), r = e - 1; r >= 23; )
                  h(d, 1 << 23), (r -= 23);
                h(d, 1 << r), l(d, 1, 1), h(d, 2), (g = p(d));
              } else l(d, 0, n), l(d, 1 << -e, 0), (g = p(d) + a.call("0", c));
            return (g =
              c > 0
                ? v +
                  ((u = g.length) <= c
                    ? "0." + a.call("0", c - u) + g
                    : g.slice(0, u - c) + "." + g.slice(u - c))
                : v + g);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(1),
        o = n(170),
        a = (1).toPrecision;
      r(
        {
          target: "Number",
          proto: !0,
          forced:
            i(function () {
              return "1" !== a.call(1, void 0);
            }) ||
            !i(function () {
              a.call({});
            }),
        },
        {
          toPrecision: function (t) {
            return void 0 === t ? a.call(o(this)) : a.call(o(this), t);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(171);
      r(
        { target: "Object", stat: !0, forced: Object.assign !== i },
        { assign: i },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Object", stat: !0, sham: !n(6) }, { create: n(30) });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        o = n(84),
        a = n(11),
        u = n(19),
        s = n(10);
      i &&
        r(
          { target: "Object", proto: !0, forced: o },
          {
            __defineGetter__: function (t, e) {
              s.f(a(this), t, { get: u(e), enumerable: !0, configurable: !0 });
            },
          },
        );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(6);
      r(
        { target: "Object", stat: !0, forced: !i, sham: !i },
        { defineProperties: n(108) },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(6);
      r(
        { target: "Object", stat: !0, forced: !i, sham: !i },
        { defineProperty: n(10).f },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        o = n(84),
        a = n(11),
        u = n(19),
        s = n(10);
      i &&
        r(
          { target: "Object", proto: !0, forced: o },
          {
            __defineSetter__: function (t, e) {
              s.f(a(this), t, { set: u(e), enumerable: !0, configurable: !0 });
            },
          },
        );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(172).entries;
      r(
        { target: "Object", stat: !0 },
        {
          entries: function (t) {
            return i(t);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(67),
        o = n(1),
        a = n(4),
        u = n(46).onFreeze,
        s = Object.freeze;
      r(
        {
          target: "Object",
          stat: !0,
          forced: o(function () {
            s(1);
          }),
          sham: !i,
        },
        {
          freeze: function (t) {
            return s && a(t) ? s(u(t)) : t;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(39),
        o = n(45);
      r(
        { target: "Object", stat: !0 },
        {
          fromEntries: function (t) {
            var e = {};
            return (
              i(
                t,
                function (t, n) {
                  o(e, t, n);
                },
                { AS_ENTRIES: !0 },
              ),
              e
            );
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(21),
        a = n(14).f,
        u = n(6),
        s = i(function () {
          a(1);
        });
      r(
        { target: "Object", stat: !0, forced: !u || s, sham: !u },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return a(o(t), e);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(6),
        o = n(103),
        a = n(21),
        u = n(14),
        s = n(45);
      r(
        { target: "Object", stat: !0, sham: !i },
        {
          getOwnPropertyDescriptors: function (t) {
            for (
              var e, n, r = a(t), i = u.f, c = o(r), f = {}, l = 0;
              c.length > l;

            )
              void 0 !== (n = i(r, (e = c[l++]))) && s(f, e, n);
            return f;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(152).f;
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            return !Object.getOwnPropertyNames(1);
          }),
        },
        { getOwnPropertyNames: o },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(11),
        a = n(27),
        u = n(109);
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
          sham: !u,
        },
        {
          getPrototypeOf: function (t) {
            return a(o(t));
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Object", stat: !0 }, { is: n(173) });
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(4),
        a = Object.isExtensible;
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
        },
        {
          isExtensible: function (t) {
            return !!o(t) && (!a || a(t));
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(4),
        a = Object.isFrozen;
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
        },
        {
          isFrozen: function (t) {
            return !o(t) || (!!a && a(t));
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(1),
        o = n(4),
        a = Object.isSealed;
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
        },
        {
          isSealed: function (t) {
            return !o(t) || (!!a && a(t));
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(11),
        o = n(61);
      r(
        {
          target: "Object",
          stat: !0,
          forced: n(1)(function () {
            o(1);
          }),
        },
        {
          keys: function (t) {
            return o(i(t));
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        o = n(84),
        a = n(11),
        u = n(28),
        s = n(27),
        c = n(14).f;
      i &&
        r(
          { target: "Object", proto: !0, forced: o },
          {
            __lookupGetter__: function (t) {
              var e,
                n = a(this),
                r = u(t, !0);
              do {
                if ((e = c(n, r))) return e.get;
              } while ((n = s(n)));
            },
          },
        );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(6),
        o = n(84),
        a = n(11),
        u = n(28),
        s = n(27),
        c = n(14).f;
      i &&
        r(
          { target: "Object", proto: !0, forced: o },
          {
            __lookupSetter__: function (t) {
              var e,
                n = a(this),
                r = u(t, !0);
              do {
                if ((e = c(n, r))) return e.set;
              } while ((n = s(n)));
            },
          },
        );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(46).onFreeze,
        a = n(67),
        u = n(1),
        s = Object.preventExtensions;
      r(
        {
          target: "Object",
          stat: !0,
          forced: u(function () {
            s(1);
          }),
          sham: !a,
        },
        {
          preventExtensions: function (t) {
            return s && i(t) ? s(o(t)) : t;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(46).onFreeze,
        a = n(67),
        u = n(1),
        s = Object.seal;
      r(
        {
          target: "Object",
          stat: !0,
          forced: u(function () {
            s(1);
          }),
          sham: !a,
        },
        {
          seal: function (t) {
            return s && i(t) ? s(o(t)) : t;
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Object", stat: !0 }, { setPrototypeOf: n(33) });
    },
    function (t, e, n) {
      var r = n(111),
        i = n(17),
        o = n(367);
      r || i(Object.prototype, "toString", o, { unsafe: !0 });
    },
    function (t, e, n) {
      "use strict";
      var r = n(111),
        i = n(65);
      t.exports = r
        ? {}.toString
        : function () {
          return "[object " + i(this) + "]";
        };
    },
    function (t, e, n) {
      var r = n(0),
        i = n(172).values;
      r(
        { target: "Object", stat: !0 },
        {
          values: function (t) {
            return i(t);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(168);
      r({ global: !0, forced: parseFloat != i }, { parseFloat: i });
    },
    function (t, e, n) {
      var r = n(0),
        i = n(169);
      r({ global: !0, forced: parseInt != i }, { parseInt: i });
    },
    function (t, e, n) {
      "use strict";
      var r,
        i,
        o,
        a,
        u = n(0),
        s = n(25),
        c = n(3),
        f = n(22),
        l = n(174),
        h = n(17),
        p = n(50),
        d = n(33),
        v = n(29),
        g = n(49),
        y = n(4),
        m = n(19),
        x = n(41),
        b = n(101),
        w = n(39),
        _ = n(76),
        S = n(35),
        T = n(120).set,
        E = n(176),
        A = n(177),
        M = n(373),
        C = n(85),
        N = n(121),
        k = n(18),
        j = n(59),
        R = n(7),
        O = n(374),
        L = n(48),
        D = n(47),
        I = R("species"),
        P = "Promise",
        U = k.get,
        F = k.set,
        q = k.getterFor(P),
        B = l && l.prototype,
        H = l,
        z = B,
        W = c.TypeError,
        $ = c.document,
        Y = c.process,
        V = C.f,
        X = V,
        G = !!($ && $.createEvent && c.dispatchEvent),
        J = "function" == typeof PromiseRejectionEvent,
        Z = !1,
        Q = j(P, function () {
          var t = b(H) !== String(H);
          if (!t && 66 === D) return !0;
          if (s && !z.finally) return !0;
          if (D >= 51 && /native code/.test(H)) return !1;
          var e = new H(function (t) {
              t(1);
            }),
            n = function (t) {
              t(
                function () {},
                function () {},
              );
            };
          return (
            ((e.constructor = {})[I] = n),
            !(Z = e.then(function () {}) instanceof n) || (!t && O && !J)
          );
        }),
        K =
          Q ||
          !_(function (t) {
            H.all(t).catch(function () {});
          }),
        tt = function (t) {
          var e;
          return !(!y(t) || "function" != typeof (e = t.then)) && e;
        },
        et = function (t, e) {
          if (!t.notified) {
            t.notified = !0;
            var n = t.reactions;
            E(function () {
              for (var r = t.value, i = 1 == t.state, o = 0; n.length > o; ) {
                var a,
                  u,
                  s,
                  c = n[o++],
                  f = i ? c.ok : c.fail,
                  l = c.resolve,
                  h = c.reject,
                  p = c.domain;
                try {
                  f
                    ? (i || (2 === t.rejection && ot(t), (t.rejection = 1)),
                    !0 === f
                      ? (a = r)
                      : (p && p.enter(),
                      (a = f(r)),
                      p && (p.exit(), (s = !0))),
                    a === c.promise
                      ? h(W("Promise-chain cycle"))
                      : (u = tt(a))
                        ? u.call(a, l, h)
                        : l(a))
                    : h(r);
                } catch (t) {
                  p && !s && p.exit(), h(t);
                }
              }
              (t.reactions = []), (t.notified = !1), e && !t.rejection && rt(t);
            });
          }
        },
        nt = function (t, e, n) {
          var r, i;
          G
            ? (((r = $.createEvent("Event")).promise = e),
            (r.reason = n),
            r.initEvent(t, !1, !0),
            c.dispatchEvent(r))
            : (r = { promise: e, reason: n }),
          !J && (i = c["on" + t])
            ? i(r)
            : "unhandledrejection" === t &&
                M("Unhandled promise rejection", n);
        },
        rt = function (t) {
          T.call(c, function () {
            var e,
              n = t.facade,
              r = t.value;
            if (
              it(t) &&
              ((e = N(function () {
                L
                  ? Y.emit("unhandledRejection", r, n)
                  : nt("unhandledrejection", n, r);
              })),
              (t.rejection = L || it(t) ? 2 : 1),
              e.error)
            )
              throw e.value;
          });
        },
        it = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        ot = function (t) {
          T.call(c, function () {
            var e = t.facade;
            L
              ? Y.emit("rejectionHandled", e)
              : nt("rejectionhandled", e, t.value);
          });
        },
        at = function (t, e, n) {
          return function (r) {
            t(e, r, n);
          };
        },
        ut = function (t, e, n) {
          t.done ||
            ((t.done = !0),
            n && (t = n),
            (t.value = e),
            (t.state = 2),
            et(t, !0));
        },
        st = function (t, e, n) {
          if (!t.done) {
            (t.done = !0), n && (t = n);
            try {
              if (t.facade === e) throw W("Promise can't be resolved itself");
              var r = tt(e);
              r
                ? E(function () {
                  var n = { done: !1 };
                  try {
                    r.call(e, at(st, n, t), at(ut, n, t));
                  } catch (e) {
                    ut(n, e, t);
                  }
                })
                : ((t.value = e), (t.state = 1), et(t, !1));
            } catch (e) {
              ut({ done: !1 }, e, t);
            }
          }
        };
      if (
        Q &&
        ((z = (H = function (t) {
          x(this, H, P), m(t), r.call(this);
          var e = U(this);
          try {
            t(at(st, e), at(ut, e));
          } catch (t) {
            ut(e, t);
          }
        }).prototype),
        ((r = function (t) {
          F(this, {
            type: P,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = p(z, {
          then: function (t, e) {
            var n = q(this),
              r = V(S(this, H));
            return (
              (r.ok = "function" != typeof t || t),
              (r.fail = "function" == typeof e && e),
              (r.domain = L ? Y.domain : void 0),
              (n.parent = !0),
              n.reactions.push(r),
              0 != n.state && et(n, !1),
              r.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (i = function () {
          var t = new r(),
            e = U(t);
          (this.promise = t),
          (this.resolve = at(st, e)),
          (this.reject = at(ut, e));
        }),
        (C.f = V =
          function (t) {
            return t === H || t === o ? new i(t) : X(t);
          }),
        !s && "function" == typeof l && B !== Object.prototype)
      ) {
        (a = B.then),
        Z ||
            (h(
              B,
              "then",
              function (t, e) {
                var n = this;
                return new H(function (t, e) {
                  a.call(n, t, e);
                }).then(t, e);
              },
              { unsafe: !0 },
            ),
            h(B, "catch", z.catch, { unsafe: !0 }));
        try {
          delete B.constructor;
        } catch (t) {}
        d && d(B, z);
      }
      u({ global: !0, wrap: !0, forced: Q }, { Promise: H }),
      v(H, P, !1, !0),
      g(P),
      (o = f(P)),
      u(
        { target: P, stat: !0, forced: Q },
        {
          reject: function (t) {
            var e = V(this);
            return e.reject.call(void 0, t), e.promise;
          },
        },
      ),
      u(
        { target: P, stat: !0, forced: s || Q },
        {
          resolve: function (t) {
            return A(s && this === o ? H : this, t);
          },
        },
      ),
      u(
        { target: P, stat: !0, forced: K },
        {
          all: function (t) {
            var e = this,
              n = V(e),
              r = n.resolve,
              i = n.reject,
              o = N(function () {
                var n = m(e.resolve),
                  o = [],
                  a = 0,
                  u = 1;
                w(t, function (t) {
                  var s = a++,
                    c = !1;
                  o.push(void 0),
                  u++,
                  n.call(e, t).then(function (t) {
                    c || ((c = !0), (o[s] = t), --u || r(o));
                  }, i);
                }),
                --u || r(o);
              });
            return o.error && i(o.value), n.promise;
          },
          race: function (t) {
            var e = this,
              n = V(e),
              r = n.reject,
              i = N(function () {
                var i = m(e.resolve);
                w(t, function (t) {
                  i.call(e, t).then(n.resolve, r);
                });
              });
            return i.error && r(i.value), n.promise;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(60);
      t.exports = /web0s(?!.*chrome)/i.test(r);
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = function (t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
      };
    },
    function (t, e) {
      t.exports = "object" == typeof window;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(19),
        o = n(85),
        a = n(121),
        u = n(39);
      r(
        { target: "Promise", stat: !0 },
        {
          allSettled: function (t) {
            var e = this,
              n = o.f(e),
              r = n.resolve,
              s = n.reject,
              c = a(function () {
                var n = i(e.resolve),
                  o = [],
                  a = 0,
                  s = 1;
                u(t, function (t) {
                  var i = a++,
                    u = !1;
                  o.push(void 0),
                  s++,
                  n.call(e, t).then(
                    function (t) {
                      u ||
                          ((u = !0),
                          (o[i] = { status: "fulfilled", value: t }),
                          --s || r(o));
                    },
                    function (t) {
                      u ||
                          ((u = !0),
                          (o[i] = { status: "rejected", reason: t }),
                          --s || r(o));
                    },
                  );
                }),
                --s || r(o);
              });
            return c.error && s(c.value), n.promise;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(19),
        o = n(22),
        a = n(85),
        u = n(121),
        s = n(39);
      r(
        { target: "Promise", stat: !0 },
        {
          any: function (t) {
            var e = this,
              n = a.f(e),
              r = n.resolve,
              c = n.reject,
              f = u(function () {
                var n = i(e.resolve),
                  a = [],
                  u = 0,
                  f = 1,
                  l = !1;
                s(t, function (t) {
                  var i = u++,
                    s = !1;
                  a.push(void 0),
                  f++,
                  n.call(e, t).then(
                    function (t) {
                      s || l || ((l = !0), r(t));
                    },
                    function (t) {
                      s ||
                          l ||
                          ((s = !0),
                          (a[i] = t),
                          --f ||
                            c(
                              new (o("AggregateError"))(
                                a,
                                "No one promise resolved",
                              ),
                            ));
                    },
                  );
                }),
                --f ||
                    c(new (o("AggregateError"))(a, "No one promise resolved"));
              });
            return f.error && c(f.value), n.promise;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(25),
        o = n(174),
        a = n(1),
        u = n(22),
        s = n(35),
        c = n(177),
        f = n(17);
      if (
        (r(
          {
            target: "Promise",
            proto: !0,
            real: !0,
            forced:
              !!o &&
              a(function () {
                o.prototype.finally.call(
                  { then: function () {} },
                  function () {},
                );
              }),
          },
          {
            finally: function (t) {
              var e = s(this, u("Promise")),
                n = "function" == typeof t;
              return this.then(
                n
                  ? function (n) {
                    return c(e, t()).then(function () {
                      return n;
                    });
                  }
                  : t,
                n
                  ? function (n) {
                    return c(e, t()).then(function () {
                      throw n;
                    });
                  }
                  : t,
              );
            },
          },
        ),
        !i && "function" == typeof o)
      ) {
        var l = u("Promise").prototype.finally;
        o.prototype.finally !== l &&
          f(o.prototype, "finally", l, { unsafe: !0 });
      }
    },
    function (t, e, n) {
      var r = n(0),
        i = n(22),
        o = n(19),
        a = n(5),
        u = n(1),
        s = i("Reflect", "apply"),
        c = Function.apply;
      r(
        {
          target: "Reflect",
          stat: !0,
          forced: !u(function () {
            s(function () {});
          }),
        },
        {
          apply: function (t, e, n) {
            return o(t), a(n), s ? s(t, e, n) : c.call(t, e, n);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(22),
        o = n(19),
        a = n(5),
        u = n(4),
        s = n(30),
        c = n(164),
        f = n(1),
        l = i("Reflect", "construct"),
        h = f(function () {
          function t() {}
          return !(l(function () {}, [], t) instanceof t);
        }),
        p = !f(function () {
          l(function () {});
        }),
        d = h || p;
      r(
        { target: "Reflect", stat: !0, forced: d, sham: d },
        {
          construct: function (t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (p && !h) return l(t, e, n);
            if (t == n) {
              switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
              }
              var r = [null];
              return r.push.apply(r, e), new (c.apply(t, r))();
            }
            var i = n.prototype,
              f = s(u(i) ? i : Object.prototype),
              d = Function.apply.call(t, f, e);
            return u(d) ? d : f;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(6),
        o = n(5),
        a = n(28),
        u = n(10);
      r(
        {
          target: "Reflect",
          stat: !0,
          forced: n(1)(function () {
            Reflect.defineProperty(u.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
          sham: !i,
        },
        {
          defineProperty: function (t, e, n) {
            o(t);
            var r = a(e, !0);
            o(n);
            try {
              return u.f(t, r, n), !0;
            } catch (t) {
              return !1;
            }
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(5),
        o = n(14).f;
      r(
        { target: "Reflect", stat: !0 },
        {
          deleteProperty: function (t, e) {
            var n = o(i(t), e);
            return !(n && !n.configurable) && delete t[e];
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(4),
        o = n(5),
        a = n(12),
        u = n(14),
        s = n(27);
      r(
        { target: "Reflect", stat: !0 },
        {
          get: function t(e, n) {
            var r,
              c,
              f = arguments.length < 3 ? e : arguments[2];
            return o(e) === f
              ? e[n]
              : (r = u.f(e, n))
                ? a(r, "value")
                  ? r.value
                  : void 0 === r.get
                    ? void 0
                    : r.get.call(f)
                : i((c = s(e)))
                  ? t(c, n, f)
                  : void 0;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(6),
        o = n(5),
        a = n(14);
      r(
        { target: "Reflect", stat: !0, sham: !i },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return a.f(o(t), e);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(5),
        o = n(27);
      r(
        { target: "Reflect", stat: !0, sham: !n(109) },
        {
          getPrototypeOf: function (t) {
            return o(i(t));
          },
        },
      );
    },
    function (t, e, n) {
      n(0)(
        { target: "Reflect", stat: !0 },
        {
          has: function (t, e) {
            return e in t;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(5),
        o = Object.isExtensible;
      r(
        { target: "Reflect", stat: !0 },
        {
          isExtensible: function (t) {
            return i(t), !o || o(t);
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "Reflect", stat: !0 }, { ownKeys: n(103) });
    },
    function (t, e, n) {
      var r = n(0),
        i = n(22),
        o = n(5);
      r(
        { target: "Reflect", stat: !0, sham: !n(67) },
        {
          preventExtensions: function (t) {
            o(t);
            try {
              var e = i("Object", "preventExtensions");
              return e && e(t), !0;
            } catch (t) {
              return !1;
            }
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(5),
        o = n(4),
        a = n(12),
        u = n(1),
        s = n(10),
        c = n(14),
        f = n(27),
        l = n(31);
      r(
        {
          target: "Reflect",
          stat: !0,
          forced: u(function () {
            var t = function () {},
              e = s.f(new t(), "a", { configurable: !0 });
            return !1 !== Reflect.set(t.prototype, "a", 1, e);
          }),
        },
        {
          set: function t(e, n, r) {
            var u,
              h,
              p = arguments.length < 4 ? e : arguments[3],
              d = c.f(i(e), n);
            if (!d) {
              if (o((h = f(e)))) return t(h, n, r, p);
              d = l(0);
            }
            if (a(d, "value")) {
              if (!1 === d.writable || !o(p)) return !1;
              if ((u = c.f(p, n))) {
                if (u.get || u.set || !1 === u.writable) return !1;
                (u.value = r), s.f(p, n, u);
              } else s.f(p, n, l(0, r));
              return !0;
            }
            return void 0 !== d.set && (d.set.call(p, r), !0);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(5),
        o = n(155),
        a = n(33);
      a &&
        r(
          { target: "Reflect", stat: !0 },
          {
            setPrototypeOf: function (t, e) {
              i(t), o(e);
              try {
                return a(t, e), !0;
              } catch (t) {
                return !1;
              }
            },
          },
        );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(3),
        o = n(29);
      r({ global: !0 }, { Reflect: {} }), o(i.Reflect, "Reflect", !0);
    },
    function (t, e, n) {
      var r = n(6),
        i = n(3),
        o = n(59),
        a = n(81),
        u = n(10).f,
        s = n(43).f,
        c = n(68),
        f = n(52),
        l = n(69),
        h = n(17),
        p = n(1),
        d = n(18).enforce,
        v = n(49),
        g = n(7)("match"),
        y = i.RegExp,
        m = y.prototype,
        x = /a/g,
        b = /a/g,
        w = new y(x) !== x,
        _ = l.UNSUPPORTED_Y;
      if (
        r &&
        o(
          "RegExp",
          !w ||
            _ ||
            p(function () {
              return (b[g] = !1), y(x) != x || y(b) == b || "/a/i" != y(x, "i");
            }),
        )
      ) {
        for (
          var S = function (t, e) {
              var n,
                r = this instanceof S,
                i = c(t),
                o = void 0 === e;
              if (!r && i && t.constructor === S && o) return t;
              w
                ? i && !o && (t = t.source)
                : t instanceof S && (o && (e = f.call(t)), (t = t.source)),
              _ &&
                  (n = !!e && e.indexOf("y") > -1) &&
                  (e = e.replace(/y/g, ""));
              var u = a(w ? new y(t, e) : y(t, e), r ? this : m, S);
              _ && n && (d(u).sticky = !0);
              return u;
            },
            T = function (t) {
              (t in S) ||
                u(S, t, {
                  configurable: !0,
                  get: function () {
                    return y[t];
                  },
                  set: function (e) {
                    y[t] = e;
                  },
                });
            },
            E = s(y),
            A = 0;
          E.length > A;

        )
          T(E[A++]);
        (m.constructor = S), (S.prototype = m), h(i, "RegExp", S);
      }
      v("RegExp");
    },
    function (t, e, n) {
      var r = n(6),
        i = n(10),
        o = n(52),
        a = n(69).UNSUPPORTED_Y;
      r &&
        ("g" != /./g.flags || a) &&
        i.f(RegExp.prototype, "flags", { configurable: !0, get: o });
    },
    function (t, e, n) {
      var r = n(6),
        i = n(69).UNSUPPORTED_Y,
        o = n(10).f,
        a = n(18).get,
        u = RegExp.prototype;
      r &&
        i &&
        o(RegExp.prototype, "sticky", {
          configurable: !0,
          get: function () {
            if (this !== u) {
              if (this instanceof RegExp) return !!a(this).sticky;
              throw TypeError("Incompatible receiver, RegExp required");
            }
          },
        });
    },
    function (t, e, n) {
      "use strict";
      n(53);
      var r,
        i,
        o = n(0),
        a = n(4),
        u =
          ((r = !1),
          ((i = /[ac]/).exec = function () {
            return (r = !0), /./.exec.apply(this, arguments);
          }),
          !0 === i.test("abc") && r),
        s = /./.test;
      o(
        { target: "RegExp", proto: !0, forced: !u },
        {
          test: function (t) {
            if ("function" != typeof this.exec) return s.call(this, t);
            var e = this.exec(t);
            if (null !== e && !a(e))
              throw new Error(
                "RegExp exec method returned something other than an Object or null",
              );
            return !!e;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(17),
        i = n(5),
        o = n(1),
        a = n(52),
        u = RegExp.prototype,
        s = u.toString,
        c = o(function () {
          return "/a/b" != s.call({ source: "a", flags: "b" });
        }),
        f = "toString" != s.name;
      (c || f) &&
        r(
          RegExp.prototype,
          "toString",
          function () {
            var t = i(this),
              e = String(t.source),
              n = t.flags;
            return (
              "/" +
              e +
              "/" +
              String(
                void 0 === n && t instanceof RegExp && !("flags" in u)
                  ? a.call(t)
                  : n,
              )
            );
          },
          { unsafe: !0 },
        );
    },
    function (t, e, n) {
      "use strict";
      var r = n(80),
        i = n(165);
      t.exports = r(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i,
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(87).codeAt;
      r(
        { target: "String", proto: !0 },
        {
          codePointAt: function (t) {
            return i(this, t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r,
        i = n(0),
        o = n(14).f,
        a = n(9),
        u = n(122),
        s = n(15),
        c = n(123),
        f = n(25),
        l = "".endsWith,
        h = Math.min,
        p = c("endsWith");
      i(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              f ||
              p ||
              ((r = o(String.prototype, "endsWith")), !r || r.writable)
            ) && !p,
        },
        {
          endsWith: function (t) {
            var e = String(s(this));
            u(t);
            var n = arguments.length > 1 ? arguments[1] : void 0,
              r = a(e.length),
              i = void 0 === n ? r : h(a(n), r),
              o = String(t);
            return l ? l.call(e, o, i) : e.slice(i - o.length, i) === o;
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(37),
        o = String.fromCharCode,
        a = String.fromCodePoint;
      r(
        { target: "String", stat: !0, forced: !!a && 1 != a.length },
        {
          fromCodePoint: function (t) {
            for (var e, n = [], r = arguments.length, a = 0; r > a; ) {
              if (((e = +arguments[a++]), i(e, 1114111) !== e))
                throw RangeError(e + " is not a valid code point");
              n.push(
                e < 65536
                  ? o(e)
                  : o(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320),
              );
            }
            return n.join("");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(122),
        o = n(15);
      r(
        { target: "String", proto: !0, forced: !n(123)("includes") },
        {
          includes: function (t) {
            return !!~String(o(this)).indexOf(
              i(t),
              arguments.length > 1 ? arguments[1] : void 0,
            );
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(88),
        i = n(5),
        o = n(9),
        a = n(15),
        u = n(89),
        s = n(90);
      r("match", 1, function (t, e, n) {
        return [
          function (e) {
            var n = a(this),
              r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
          },
          function (t) {
            var r = n(e, t, this);
            if (r.done) return r.value;
            var a = i(t),
              c = String(this);
            if (!a.global) return s(a, c);
            var f = a.unicode;
            a.lastIndex = 0;
            for (var l, h = [], p = 0; null !== (l = s(a, c)); ) {
              var d = String(l[0]);
              (h[p] = d),
              "" === d && (a.lastIndex = u(c, o(a.lastIndex), f)),
              p++;
            }
            return 0 === p ? null : h;
          },
        ];
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(114),
        o = n(15),
        a = n(9),
        u = n(19),
        s = n(5),
        c = n(32),
        f = n(68),
        l = n(52),
        h = n(16),
        p = n(1),
        d = n(7),
        v = n(35),
        g = n(89),
        y = n(18),
        m = n(25),
        x = d("matchAll"),
        b = y.set,
        w = y.getterFor("RegExp String Iterator"),
        _ = RegExp.prototype,
        S = _.exec,
        T = "".matchAll,
        E =
          !!T &&
          !p(function () {
            "a".matchAll(/./);
          }),
        A = i(
          function (t, e, n, r) {
            b(this, {
              type: "RegExp String Iterator",
              regexp: t,
              string: e,
              global: n,
              unicode: r,
              done: !1,
            });
          },
          "RegExp String",
          function () {
            var t = w(this);
            if (t.done) return { value: void 0, done: !0 };
            var e = t.regexp,
              n = t.string,
              r = (function (t, e) {
                var n,
                  r = t.exec;
                if ("function" == typeof r) {
                  if ("object" != typeof (n = r.call(t, e)))
                    throw TypeError("Incorrect exec result");
                  return n;
                }
                return S.call(t, e);
              })(e, n);
            return null === r
              ? { value: void 0, done: (t.done = !0) }
              : t.global
                ? ("" == String(r[0]) &&
                  (e.lastIndex = g(n, a(e.lastIndex), t.unicode)),
                { value: r, done: !1 })
                : ((t.done = !0), { value: r, done: !1 });
          },
        ),
        M = function (t) {
          var e,
            n,
            r,
            i,
            o,
            u,
            c = s(this),
            f = String(t);
          return (
            (e = v(c, RegExp)),
            void 0 === (n = c.flags) &&
              c instanceof RegExp &&
              !("flags" in _) &&
              (n = l.call(c)),
            (r = void 0 === n ? "" : String(n)),
            (i = new e(e === RegExp ? c.source : c, r)),
            (o = !!~r.indexOf("g")),
            (u = !!~r.indexOf("u")),
            (i.lastIndex = a(c.lastIndex)),
            new A(i, f, o, u)
          );
        };
      r(
        { target: "String", proto: !0, forced: E },
        {
          matchAll: function (t) {
            var e,
              n,
              r,
              i = o(this);
            if (null != t) {
              if (
                f(t) &&
                !~String(o("flags" in _ ? t.flags : l.call(t))).indexOf("g")
              )
                throw TypeError(
                  "`.matchAll` does not allow non-global regexes",
                );
              if (E) return T.apply(i, arguments);
              if (
                (void 0 === (n = t[x]) && m && "RegExp" == c(t) && (n = M),
                null != n)
              )
                return u(n).call(t, i);
            } else if (E) return T.apply(i, arguments);
            return (
              (e = String(i)),
              (r = new RegExp(t, "g")),
              m ? M.call(r, e) : r[x](e)
            );
          },
        },
      ),
      m || x in _ || h(_, x, M);
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(117).end;
      r(
        { target: "String", proto: !0, forced: n(179) },
        {
          padEnd: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(117).start;
      r(
        { target: "String", proto: !0, forced: n(179) },
        {
          padStart: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(21),
        o = n(9);
      r(
        { target: "String", stat: !0 },
        {
          raw: function (t) {
            for (
              var e = i(t.raw),
                n = o(e.length),
                r = arguments.length,
                a = [],
                u = 0;
              n > u;

            )
              a.push(String(e[u++])), u < r && a.push(String(arguments[u]));
            return a.join("");
          },
        },
      );
    },
    function (t, e, n) {
      n(0)({ target: "String", proto: !0 }, { repeat: n(118) });
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(15),
        o = n(68),
        a = n(52),
        u = n(180),
        s = n(7),
        c = n(25),
        f = s("replace"),
        l = RegExp.prototype,
        h = Math.max,
        p = function (t, e, n) {
          return n > t.length ? -1 : "" === e ? n : t.indexOf(e, n);
        };
      r(
        { target: "String", proto: !0 },
        {
          replaceAll: function (t, e) {
            var n,
              r,
              s,
              d,
              v,
              g,
              y,
              m,
              x = i(this),
              b = 0,
              w = 0,
              _ = "";
            if (null != t) {
              if (
                (n = o(t)) &&
                !~String(i("flags" in l ? t.flags : a.call(t))).indexOf("g")
              )
                throw TypeError(
                  "`.replaceAll` does not allow non-global regexes",
                );
              if (void 0 !== (r = t[f])) return r.call(t, x, e);
              if (c && n) return String(x).replace(t, e);
            }
            for (
              s = String(x),
              d = String(t),
              (v = "function" == typeof e) || (e = String(e)),
              g = d.length,
              y = h(1, g),
              b = p(s, d, 0);
              -1 !== b;

            )
              (m = v ? String(e(d, b, s)) : u(d, s, b, [], void 0, e)),
              (_ += s.slice(w, b) + m),
              (w = b + g),
              (b = p(s, d, b + y));
            return w < s.length && (_ += s.slice(w)), _;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(88),
        i = n(5),
        o = n(15),
        a = n(173),
        u = n(90);
      r("search", 1, function (t, e, n) {
        return [
          function (e) {
            var n = o(this),
              r = null == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
          },
          function (t) {
            var r = n(e, t, this);
            if (r.done) return r.value;
            var o = i(t),
              s = String(this),
              c = o.lastIndex;
            a(c, 0) || (o.lastIndex = 0);
            var f = u(o, s);
            return (
              a(o.lastIndex, c) || (o.lastIndex = c), null === f ? -1 : f.index
            );
          },
        ];
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(88),
        i = n(68),
        o = n(5),
        a = n(15),
        u = n(35),
        s = n(89),
        c = n(9),
        f = n(90),
        l = n(86),
        h = n(69).UNSUPPORTED_Y,
        p = [].push,
        d = Math.min;
      r(
        "split",
        2,
        function (t, e, n) {
          var r;
          return (
            (r =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, n) {
                  var r = String(a(this)),
                    o = void 0 === n ? 4294967295 : n >>> 0;
                  if (0 === o) return [];
                  if (void 0 === t) return [r];
                  if (!i(t)) return e.call(r, t, o);
                  for (
                    var u,
                      s,
                      c,
                      f = [],
                      h =
                          (t.ignoreCase ? "i" : "") +
                          (t.multiline ? "m" : "") +
                          (t.unicode ? "u" : "") +
                          (t.sticky ? "y" : ""),
                      d = 0,
                      v = new RegExp(t.source, h + "g");
                    (u = l.call(v, r)) &&
                      !(
                        (s = v.lastIndex) > d &&
                        (f.push(r.slice(d, u.index)),
                        u.length > 1 &&
                          u.index < r.length &&
                          p.apply(f, u.slice(1)),
                        (c = u[0].length),
                        (d = s),
                        f.length >= o)
                      );

                  )
                    v.lastIndex === u.index && v.lastIndex++;
                  return (
                    d === r.length
                      ? (!c && v.test("")) || f.push("")
                      : f.push(r.slice(d)),
                    f.length > o ? f.slice(0, o) : f
                  );
                }
                : "0".split(void 0, 0).length
                  ? function (t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                  }
                  : e),
            [
              function (e, n) {
                var i = a(this),
                  o = null == e ? void 0 : e[t];
                return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n);
              },
              function (t, i) {
                var a = n(r, t, this, i, r !== e);
                if (a.done) return a.value;
                var l = o(t),
                  p = String(this),
                  v = u(l, RegExp),
                  g = l.unicode,
                  y =
                    (l.ignoreCase ? "i" : "") +
                    (l.multiline ? "m" : "") +
                    (l.unicode ? "u" : "") +
                    (h ? "g" : "y"),
                  m = new v(h ? "^(?:" + l.source + ")" : l, y),
                  x = void 0 === i ? 4294967295 : i >>> 0;
                if (0 === x) return [];
                if (0 === p.length) return null === f(m, p) ? [p] : [];
                for (var b = 0, w = 0, _ = []; w < p.length; ) {
                  m.lastIndex = h ? 0 : w;
                  var S,
                    T = f(m, h ? p.slice(w) : p);
                  if (
                    null === T ||
                    (S = d(c(m.lastIndex + (h ? w : 0)), p.length)) === b
                  )
                    w = s(p, w, g);
                  else {
                    if ((_.push(p.slice(b, w)), _.length === x)) return _;
                    for (var E = 1; E <= T.length - 1; E++)
                      if ((_.push(T[E]), _.length === x)) return _;
                    w = b = S;
                  }
                }
                return _.push(p.slice(b)), _;
              },
            ]
          );
        },
        h,
      );
    },
    function (t, e, n) {
      "use strict";
      var r,
        i = n(0),
        o = n(14).f,
        a = n(9),
        u = n(122),
        s = n(15),
        c = n(123),
        f = n(25),
        l = "".startsWith,
        h = Math.min,
        p = c("startsWith");
      i(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              f ||
              p ||
              ((r = o(String.prototype, "startsWith")), !r || r.writable)
            ) && !p,
        },
        {
          startsWith: function (t) {
            var e = String(s(this));
            u(t);
            var n = a(
                h(arguments.length > 1 ? arguments[1] : void 0, e.length),
              ),
              r = String(t);
            return l ? l.call(e, r, n) : e.slice(n, n + r.length) === r;
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(51).trim;
      r(
        { target: "String", proto: !0, forced: n(124)("trim") },
        {
          trim: function () {
            return i(this);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(51).end,
        o = n(124)("trimEnd"),
        a = o
          ? function () {
            return i(this);
          }
          : "".trimEnd;
      r(
        { target: "String", proto: !0, forced: o },
        { trimEnd: a, trimRight: a },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(51).start,
        o = n(124)("trimStart"),
        a = o
          ? function () {
            return i(this);
          }
          : "".trimStart;
      r(
        { target: "String", proto: !0, forced: o },
        { trimStart: a, trimLeft: a },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("anchor") },
        {
          anchor: function (t) {
            return i(this, "a", "name", t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("big") },
        {
          big: function () {
            return i(this, "big", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("blink") },
        {
          blink: function () {
            return i(this, "blink", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("bold") },
        {
          bold: function () {
            return i(this, "b", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("fixed") },
        {
          fixed: function () {
            return i(this, "tt", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("fontcolor") },
        {
          fontcolor: function (t) {
            return i(this, "font", "color", t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("fontsize") },
        {
          fontsize: function (t) {
            return i(this, "font", "size", t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("italics") },
        {
          italics: function () {
            return i(this, "i", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("link") },
        {
          link: function (t) {
            return i(this, "a", "href", t);
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("small") },
        {
          small: function () {
            return i(this, "small", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("strike") },
        {
          strike: function () {
            return i(this, "strike", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("sub") },
        {
          sub: function () {
            return i(this, "sub", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        i = n(23);
      r(
        { target: "String", proto: !0, forced: n(24)("sup") },
        {
          sup: function () {
            return i(this, "sup", "", "");
          },
        },
      );
    },
    function (t, e, n) {
      n(36)("Float32", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      var r = n(26);
      t.exports = function (t) {
        var e = r(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e;
      };
    },
    function (t, e, n) {
      n(36)("Float64", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)("Int8", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)("Int16", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)("Int32", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)("Uint8", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)(
        "Uint8",
        function (t) {
          return function (e, n, r) {
            return t(this, e, n, r);
          };
        },
        !0,
      );
    },
    function (t, e, n) {
      n(36)("Uint16", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      n(36)("Uint32", function (t) {
        return function (e, n, r) {
          return t(this, e, n, r);
        };
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(157),
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("copyWithin", function (t, e) {
        return i.call(
          o(this),
          t,
          e,
          arguments.length > 2 ? arguments[2] : void 0,
        );
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).every,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("every", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(112),
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("fill", function (t) {
        return i.apply(o(this), arguments);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).filter,
        o = n(442),
        a = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("filter", function (t) {
        var e = i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
        return o(this, e);
      });
    },
    function (t, e, n) {
      var r = n(8).aTypedArrayConstructor,
        i = n(35);
      t.exports = function (t, e) {
        for (
          var n = i(t, t.constructor), o = 0, a = e.length, u = new (r(n))(a);
          a > o;

        )
          u[o] = e[o++];
        return u;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).find,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("find", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).findIndex,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("findIndex", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).forEach,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("forEach", function (t) {
        i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(125);
      (0, n(8).exportTypedArrayStaticMethod)("from", n(182), r);
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(58).includes,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("includes", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(58).indexOf,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("indexOf", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(8),
        o = n(77),
        a = n(7)("iterator"),
        u = r.Uint8Array,
        s = o.values,
        c = o.keys,
        f = o.entries,
        l = i.aTypedArray,
        h = i.exportTypedArrayMethod,
        p = u && u.prototype[a],
        d = !!p && ("values" == p.name || null == p.name),
        v = function () {
          return s.call(l(this));
        };
      h("entries", function () {
        return f.call(l(this));
      }),
      h("keys", function () {
        return c.call(l(this));
      }),
      h("values", v, !d),
      h(a, v, !d);
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = r.aTypedArray,
        o = r.exportTypedArrayMethod,
        a = [].join;
      o("join", function (t) {
        return a.apply(i(this), arguments);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(162),
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("lastIndexOf", function (t) {
        return i.apply(o(this), arguments);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).map,
        o = n(35),
        a = r.aTypedArray,
        u = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayMethod)("map", function (t) {
        return i(
          a(this),
          t,
          arguments.length > 1 ? arguments[1] : void 0,
          function (t, e) {
            return new (u(o(t, t.constructor)))(e);
          },
        );
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(125),
        o = r.aTypedArrayConstructor;
      (0, r.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var t = 0, e = arguments.length, n = new (o(this))(e); e > t; )
            n[t] = arguments[t++];
          return n;
        },
        i,
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(78).left,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("reduce", function (t) {
        return i(
          o(this),
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0,
        );
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(78).right,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("reduceRight", function (t) {
        return i(
          o(this),
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0,
        );
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = r.aTypedArray,
        o = r.exportTypedArrayMethod,
        a = Math.floor;
      o("reverse", function () {
        for (var t, e = i(this).length, n = a(e / 2), r = 0; r < n; )
          (t = this[r]), (this[r++] = this[--e]), (this[e] = t);
        return this;
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(9),
        o = n(181),
        a = n(11),
        u = n(1),
        s = r.aTypedArray;
      (0, r.exportTypedArrayMethod)(
        "set",
        function (t) {
          s(this);
          var e = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            r = a(t),
            u = i(r.length),
            c = 0;
          if (u + e > n) throw RangeError("Wrong length");
          for (; c < u; ) this[e + c] = r[c++];
        },
        u(function () {
          new Int8Array(1).set({});
        }),
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(35),
        o = n(1),
        a = r.aTypedArray,
        u = r.aTypedArrayConstructor,
        s = r.exportTypedArrayMethod,
        c = [].slice;
      s(
        "slice",
        function (t, e) {
          for (
            var n = c.call(a(this), t, e),
              r = i(this, this.constructor),
              o = 0,
              s = n.length,
              f = new (u(r))(s);
            s > o;

          )
            f[o] = n[o++];
          return f;
        },
        o(function () {
          new Int8Array(1).slice();
        }),
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(13).some,
        o = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("some", function (t) {
        return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = r.aTypedArray,
        o = r.exportTypedArrayMethod,
        a = [].sort;
      o("sort", function (t) {
        return a.call(i(this), t);
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(8),
        i = n(9),
        o = n(37),
        a = n(35),
        u = r.aTypedArray;
      (0, r.exportTypedArrayMethod)("subarray", function (t, e) {
        var n = u(this),
          r = n.length,
          s = o(t, r);
        return new (a(n, n.constructor))(
          n.buffer,
          n.byteOffset + s * n.BYTES_PER_ELEMENT,
          i((void 0 === e ? r : o(e, r)) - s),
        );
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        i = n(8),
        o = n(1),
        a = r.Int8Array,
        u = i.aTypedArray,
        s = i.exportTypedArrayMethod,
        c = [].toLocaleString,
        f = [].slice,
        l =
          !!a &&
          o(function () {
            c.call(new a(1));
          });
      s(
        "toLocaleString",
        function () {
          return c.apply(l ? f.call(u(this)) : u(this), arguments);
        },
        o(function () {
          return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
        }) ||
          !o(function () {
            a.prototype.toLocaleString.call([1, 2]);
          }),
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(8).exportTypedArrayMethod,
        i = n(1),
        o = n(3).Uint8Array,
        a = (o && o.prototype) || {},
        u = [].toString,
        s = [].join;
      i(function () {
        u.call({});
      }) &&
        (u = function () {
          return s.call(this);
        });
      var c = a.toString != u;
      r("toString", u, c);
    },
    function (t, e, n) {
      "use strict";
      var r,
        i = n(3),
        o = n(50),
        a = n(46),
        u = n(80),
        s = n(183),
        c = n(4),
        f = n(18).enforce,
        l = n(147),
        h = !i.ActiveXObject && "ActiveXObject" in i,
        p = Object.isExtensible,
        d = function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        v = (t.exports = u("WeakMap", d, s));
      if (l && h) {
        (r = s.getConstructor(d, "WeakMap", !0)), (a.REQUIRED = !0);
        var g = v.prototype,
          y = g.delete,
          m = g.has,
          x = g.get,
          b = g.set;
        o(g, {
          delete: function (t) {
            if (c(t) && !p(t)) {
              var e = f(this);
              return (
                e.frozen || (e.frozen = new r()),
                y.call(this, t) || e.frozen.delete(t)
              );
            }
            return y.call(this, t);
          },
          has: function (t) {
            if (c(t) && !p(t)) {
              var e = f(this);
              return (
                e.frozen || (e.frozen = new r()),
                m.call(this, t) || e.frozen.has(t)
              );
            }
            return m.call(this, t);
          },
          get: function (t) {
            if (c(t) && !p(t)) {
              var e = f(this);
              return (
                e.frozen || (e.frozen = new r()),
                m.call(this, t) ? x.call(this, t) : e.frozen.get(t)
              );
            }
            return x.call(this, t);
          },
          set: function (t, e) {
            if (c(t) && !p(t)) {
              var n = f(this);
              n.frozen || (n.frozen = new r()),
              m.call(this, t) ? b.call(this, t, e) : n.frozen.set(t, e);
            } else b.call(this, t, e);
            return this;
          },
        });
      }
    },
    function (t, e, n) {
      "use strict";
      n(80)(
        "WeakSet",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        n(183),
      );
    },
    function (t, e, n) {
      var r = n(3),
        i = n(184),
        o = n(77),
        a = n(16),
        u = n(7),
        s = u("iterator"),
        c = u("toStringTag"),
        f = o.values;
      for (var l in i) {
        var h = r[l],
          p = h && h.prototype;
        if (p) {
          if (p[s] !== f)
            try {
              a(p, s, f);
            } catch (t) {
              p[s] = f;
            }
          if ((p[c] || a(p, c, l), i[l]))
            for (var d in o)
              if (p[d] !== o[d])
                try {
                  a(p, d, o[d]);
                } catch (t) {
                  p[d] = o[d];
                }
        }
      }
    },
    function (t, e, n) {
      var r = n(0),
        i = n(3),
        o = n(120);
      r(
        {
          global: !0,
          bind: !0,
          enumerable: !0,
          forced: !i.setImmediate || !i.clearImmediate,
        },
        { setImmediate: o.set, clearImmediate: o.clear },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(3),
        o = n(176),
        a = n(48),
        u = i.process;
      r(
        { global: !0, enumerable: !0, noTargetGet: !0 },
        {
          queueMicrotask: function (t) {
            var e = a && u.domain;
            o(e ? e.bind(t) : t);
          },
        },
      );
    },
    function (t, e, n) {
      var r = n(0),
        i = n(3),
        o = n(60),
        a = [].slice,
        u = function (t) {
          return function (e, n) {
            var r = arguments.length > 2,
              i = r ? a.call(arguments, 2) : void 0;
            return t(
              r
                ? function () {
                  ("function" == typeof e ? e : Function(e)).apply(this, i);
                }
                : e,
              n,
            );
          };
        };
      r(
        { global: !0, bind: !0, forced: /MSIE .\./.test(o) },
        { setTimeout: u(i.setTimeout), setInterval: u(i.setInterval) },
      );
    },
    function (t, e, n) {
      "use strict";
      n(178);
      var r,
        i = n(0),
        o = n(6),
        a = n(185),
        u = n(3),
        s = n(108),
        c = n(17),
        f = n(41),
        l = n(12),
        h = n(171),
        p = n(160),
        d = n(87).codeAt,
        v = n(471),
        g = n(29),
        y = n(186),
        m = n(18),
        x = u.URL,
        b = y.URLSearchParams,
        w = y.getState,
        _ = m.set,
        S = m.getterFor("URL"),
        T = Math.floor,
        E = Math.pow,
        A = /[A-Za-z]/,
        M = /[\d+-.A-Za-z]/,
        C = /\d/,
        N = /^(0x|0X)/,
        k = /^[0-7]+$/,
        j = /^\d+$/,
        R = /^[\dA-Fa-f]+$/,
        O = /[\0\t\n\r #%/:?@[\\]]/,
        L = /[\0\t\n\r #/:?@[\\]]/,
        D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        I = /[\t\n\r]/g,
        P = function (t, e) {
          var n, r, i;
          if ("[" == e.charAt(0)) {
            if ("]" != e.charAt(e.length - 1)) return "Invalid host";
            if (!(n = F(e.slice(1, -1)))) return "Invalid host";
            t.host = n;
          } else if (V(t)) {
            if (((e = v(e)), O.test(e))) return "Invalid host";
            if (null === (n = U(e))) return "Invalid host";
            t.host = n;
          } else {
            if (L.test(e)) return "Invalid host";
            for (n = "", r = p(e), i = 0; i < r.length; i++) n += $(r[i], B);
            t.host = n;
          }
        },
        U = function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            s = t.split(".");
          if (
            (s.length && "" == s[s.length - 1] && s.pop(), (e = s.length) > 4)
          )
            return t;
          for (n = [], r = 0; r < e; r++) {
            if ("" == (i = s[r])) return t;
            if (
              ((o = 10),
              i.length > 1 &&
                "0" == i.charAt(0) &&
                ((o = N.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
              "" === i)
            )
              a = 0;
            else {
              if (!(10 == o ? j : 8 == o ? k : R).test(i)) return t;
              a = parseInt(i, o);
            }
            n.push(a);
          }
          for (r = 0; r < e; r++)
            if (((a = n[r]), r == e - 1)) {
              if (a >= E(256, 5 - e)) return null;
            } else if (a > 255) return null;
          for (u = n.pop(), r = 0; r < n.length; r++) u += n[r] * E(256, 3 - r);
          return u;
        },
        F = function (t) {
          var e,
            n,
            r,
            i,
            o,
            a,
            u,
            s = [0, 0, 0, 0, 0, 0, 0, 0],
            c = 0,
            f = null,
            l = 0,
            h = function () {
              return t.charAt(l);
            };
          if (":" == h()) {
            if (":" != t.charAt(1)) return;
            (l += 2), (f = ++c);
          }
          for (; h(); ) {
            if (8 == c) return;
            if (":" != h()) {
              for (e = n = 0; n < 4 && R.test(h()); )
                (e = 16 * e + parseInt(h(), 16)), l++, n++;
              if ("." == h()) {
                if (0 == n) return;
                if (((l -= n), c > 6)) return;
                for (r = 0; h(); ) {
                  if (((i = null), r > 0)) {
                    if (!("." == h() && r < 4)) return;
                    l++;
                  }
                  if (!C.test(h())) return;
                  for (; C.test(h()); ) {
                    if (((o = parseInt(h(), 10)), null === i)) i = o;
                    else {
                      if (0 == i) return;
                      i = 10 * i + o;
                    }
                    if (i > 255) return;
                    l++;
                  }
                  (s[c] = 256 * s[c] + i), (2 != ++r && 4 != r) || c++;
                }
                if (4 != r) return;
                break;
              }
              if (":" == h()) {
                if ((l++, !h())) return;
              } else if (h()) return;
              s[c++] = e;
            } else {
              if (null !== f) return;
              l++, (f = ++c);
            }
          }
          if (null !== f)
            for (a = c - f, c = 7; 0 != c && a > 0; )
              (u = s[c]), (s[c--] = s[f + a - 1]), (s[f + --a] = u);
          else if (8 != c) return;
          return s;
        },
        q = function (t) {
          var e, n, r, i;
          if ("number" == typeof t) {
            for (e = [], n = 0; n < 4; n++)
              e.unshift(t % 256), (t = T(t / 256));
            return e.join(".");
          }
          if ("object" == typeof t) {
            for (
              e = "",
              r = (function (t) {
                for (var e = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                  0 !== t[o]
                    ? (i > n && ((e = r), (n = i)), (r = null), (i = 0))
                    : (null === r && (r = o), ++i);
                return i > n && ((e = r), (n = i)), e;
              })(t),
              n = 0;
              n < 8;
              n++
            )
              (i && 0 === t[n]) ||
                (i && (i = !1),
                r === n
                  ? ((e += n ? ":" : "::"), (i = !0))
                  : ((e += t[n].toString(16)), n < 7 && (e += ":")));
            return "[" + e + "]";
          }
          return t;
        },
        B = {},
        H = h({}, B, { " ": 1, "\"": 1, "<": 1, ">": 1, "`": 1 }),
        z = h({}, H, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        W = h({}, z, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        $ = function (t, e) {
          var n = d(t, 0);
          return n > 32 && n < 127 && !l(e, t) ? t : encodeURIComponent(t);
        },
        Y = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
        V = function (t) {
          return l(Y, t.scheme);
        },
        X = function (t) {
          return "" != t.username || "" != t.password;
        },
        G = function (t) {
          return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
        },
        J = function (t, e) {
          var n;
          return (
            2 == t.length &&
            A.test(t.charAt(0)) &&
            (":" == (n = t.charAt(1)) || (!e && "|" == n))
          );
        },
        Z = function (t) {
          var e;
          return (
            t.length > 1 &&
            J(t.slice(0, 2)) &&
            (2 == t.length ||
              "/" === (e = t.charAt(2)) ||
              "\\" === e ||
              "?" === e ||
              "#" === e)
          );
        },
        Q = function (t) {
          var e = t.path,
            n = e.length;
          !n || ("file" == t.scheme && 1 == n && J(e[0], !0)) || e.pop();
        },
        K = function (t) {
          return "." === t || "%2e" === t.toLowerCase();
        },
        tt = {},
        et = {},
        nt = {},
        rt = {},
        it = {},
        ot = {},
        at = {},
        ut = {},
        st = {},
        ct = {},
        ft = {},
        lt = {},
        ht = {},
        pt = {},
        dt = {},
        vt = {},
        gt = {},
        yt = {},
        mt = {},
        xt = {},
        bt = {},
        wt = function (t, e, n, i) {
          var o,
            a,
            u,
            s,
            c,
            f = n || tt,
            h = 0,
            d = "",
            v = !1,
            g = !1,
            y = !1;
          for (
            n ||
              ((t.scheme = ""),
              (t.username = ""),
              (t.password = ""),
              (t.host = null),
              (t.port = null),
              (t.path = []),
              (t.query = null),
              (t.fragment = null),
              (t.cannotBeABaseURL = !1),
              (e = e.replace(D, ""))),
            e = e.replace(I, ""),
            o = p(e);
            h <= o.length;

          ) {
            switch (((a = o[h]), f)) {
            case tt:
              if (!a || !A.test(a)) {
                if (n) return "Invalid scheme";
                f = nt;
                continue;
              }
              (d += a.toLowerCase()), (f = et);
              break;
            case et:
              if (a && (M.test(a) || "+" == a || "-" == a || "." == a))
                d += a.toLowerCase();
              else {
                if (":" != a) {
                  if (n) return "Invalid scheme";
                  (d = ""), (f = nt), (h = 0);
                  continue;
                }
                if (
                  n &&
                    (V(t) != l(Y, d) ||
                      ("file" == d && (X(t) || null !== t.port)) ||
                      ("file" == t.scheme && !t.host))
                )
                  return;
                if (((t.scheme = d), n))
                  return void (
                    V(t) &&
                      Y[t.scheme] == t.port &&
                      (t.port = null)
                  );
                (d = ""),
                "file" == t.scheme
                  ? (f = pt)
                  : V(t) && i && i.scheme == t.scheme
                    ? (f = rt)
                    : V(t)
                      ? (f = ut)
                      : "/" == o[h + 1]
                        ? ((f = it), h++)
                        : ((t.cannotBeABaseURL = !0), t.path.push(""), (f = mt));
              }
              break;
            case nt:
              if (!i || (i.cannotBeABaseURL && "#" != a))
                return "Invalid scheme";
              if (i.cannotBeABaseURL && "#" == a) {
                (t.scheme = i.scheme),
                (t.path = i.path.slice()),
                (t.query = i.query),
                (t.fragment = ""),
                (t.cannotBeABaseURL = !0),
                (f = bt);
                break;
              }
              f = "file" == i.scheme ? pt : ot;
              continue;
            case rt:
              if ("/" != a || "/" != o[h + 1]) {
                f = ot;
                continue;
              }
              (f = st), h++;
              break;
            case it:
              if ("/" == a) {
                f = ct;
                break;
              }
              f = yt;
              continue;
            case ot:
              if (((t.scheme = i.scheme), a == r))
                (t.username = i.username),
                (t.password = i.password),
                (t.host = i.host),
                (t.port = i.port),
                (t.path = i.path.slice()),
                (t.query = i.query);
              else if ("/" == a || ("\\" == a && V(t))) f = at;
              else if ("?" == a)
                (t.username = i.username),
                (t.password = i.password),
                (t.host = i.host),
                (t.port = i.port),
                (t.path = i.path.slice()),
                (t.query = ""),
                (f = xt);
              else {
                if ("#" != a) {
                  (t.username = i.username),
                  (t.password = i.password),
                  (t.host = i.host),
                  (t.port = i.port),
                  (t.path = i.path.slice()),
                  t.path.pop(),
                  (f = yt);
                  continue;
                }
                (t.username = i.username),
                (t.password = i.password),
                (t.host = i.host),
                (t.port = i.port),
                (t.path = i.path.slice()),
                (t.query = i.query),
                (t.fragment = ""),
                (f = bt);
              }
              break;
            case at:
              if (!V(t) || ("/" != a && "\\" != a)) {
                if ("/" != a) {
                  (t.username = i.username),
                  (t.password = i.password),
                  (t.host = i.host),
                  (t.port = i.port),
                  (f = yt);
                  continue;
                }
                f = ct;
              } else f = st;
              break;
            case ut:
              if (((f = st), "/" != a || "/" != d.charAt(h + 1))) continue;
              h++;
              break;
            case st:
              if ("/" != a && "\\" != a) {
                f = ct;
                continue;
              }
              break;
            case ct:
              if ("@" == a) {
                v && (d = "%40" + d), (v = !0), (u = p(d));
                for (var m = 0; m < u.length; m++) {
                  var x = u[m];
                  if (":" != x || y) {
                    var b = $(x, W);
                    y ? (t.password += b) : (t.username += b);
                  } else y = !0;
                }
                d = "";
              } else if (
                a == r ||
                  "/" == a ||
                  "?" == a ||
                  "#" == a ||
                  ("\\" == a && V(t))
              ) {
                if (v && "" == d) return "Invalid authority";
                (h -= p(d).length + 1), (d = ""), (f = ft);
              } else d += a;
              break;
            case ft:
            case lt:
              if (n && "file" == t.scheme) {
                f = vt;
                continue;
              }
              if (":" != a || g) {
                if (
                  a == r ||
                    "/" == a ||
                    "?" == a ||
                    "#" == a ||
                    ("\\" == a && V(t))
                ) {
                  if (V(t) && "" == d) return "Invalid host";
                  if (n && "" == d && (X(t) || null !== t.port)) return;
                  if ((s = P(t, d))) return s;
                  if (((d = ""), (f = gt), n)) return;
                  continue;
                }
                "[" == a ? (g = !0) : "]" == a && (g = !1), (d += a);
              } else {
                if ("" == d) return "Invalid host";
                if ((s = P(t, d))) return s;
                if (((d = ""), (f = ht), n == lt)) return;
              }
              break;
            case ht:
              if (!C.test(a)) {
                if (
                  a == r ||
                    "/" == a ||
                    "?" == a ||
                    "#" == a ||
                    ("\\" == a && V(t)) ||
                    n
                ) {
                  if ("" != d) {
                    var w = parseInt(d, 10);
                    if (w > 65535) return "Invalid port";
                    (t.port = V(t) && w === Y[t.scheme] ? null : w), (d = "");
                  }
                  if (n) return;
                  f = gt;
                  continue;
                }
                return "Invalid port";
              }
              d += a;
              break;
            case pt:
              if (((t.scheme = "file"), "/" == a || "\\" == a)) f = dt;
              else {
                if (!i || "file" != i.scheme) {
                  f = yt;
                  continue;
                }
                if (a == r)
                  (t.host = i.host),
                  (t.path = i.path.slice()),
                  (t.query = i.query);
                else if ("?" == a)
                  (t.host = i.host),
                  (t.path = i.path.slice()),
                  (t.query = ""),
                  (f = xt);
                else {
                  if ("#" != a) {
                    Z(o.slice(h).join("")) ||
                        ((t.host = i.host), (t.path = i.path.slice()), Q(t)),
                    (f = yt);
                    continue;
                  }
                  (t.host = i.host),
                  (t.path = i.path.slice()),
                  (t.query = i.query),
                  (t.fragment = ""),
                  (f = bt);
                }
              }
              break;
            case dt:
              if ("/" == a || "\\" == a) {
                f = vt;
                break;
              }
              i &&
                  "file" == i.scheme &&
                  !Z(o.slice(h).join("")) &&
                  (J(i.path[0], !0)
                    ? t.path.push(i.path[0])
                    : (t.host = i.host)),
              (f = yt);
              continue;
            case vt:
              if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                if (!n && J(d)) f = yt;
                else if ("" == d) {
                  if (((t.host = ""), n)) return;
                  f = gt;
                } else {
                  if ((s = P(t, d))) return s;
                  if (("localhost" == t.host && (t.host = ""), n)) return;
                  (d = ""), (f = gt);
                }
                continue;
              }
              d += a;
              break;
            case gt:
              if (V(t)) {
                if (((f = yt), "/" != a && "\\" != a)) continue;
              } else if (n || "?" != a)
                if (n || "#" != a) {
                  if (a != r && ((f = yt), "/" != a)) continue;
                } else (t.fragment = ""), (f = bt);
              else (t.query = ""), (f = xt);
              break;
            case yt:
              if (
                a == r ||
                  "/" == a ||
                  ("\\" == a && V(t)) ||
                  (!n && ("?" == a || "#" == a))
              ) {
                if (
                  (".." === (c = (c = d).toLowerCase()) ||
                    "%2e." === c ||
                    ".%2e" === c ||
                    "%2e%2e" === c
                    ? (Q(t),
                    "/" == a || ("\\" == a && V(t)) || t.path.push(""))
                    : K(d)
                      ? "/" == a || ("\\" == a && V(t)) || t.path.push("")
                      : ("file" == t.scheme &&
                          !t.path.length &&
                          J(d) &&
                          (t.host && (t.host = ""), (d = d.charAt(0) + ":")),
                      t.path.push(d)),
                  (d = ""),
                  "file" == t.scheme && (a == r || "?" == a || "#" == a))
                )
                  for (; t.path.length > 1 && "" === t.path[0]; )
                    t.path.shift();
                "?" == a
                  ? ((t.query = ""), (f = xt))
                  : "#" == a && ((t.fragment = ""), (f = bt));
              } else d += $(a, z);
              break;
            case mt:
              "?" == a
                ? ((t.query = ""), (f = xt))
                : "#" == a
                  ? ((t.fragment = ""), (f = bt))
                  : a != r && (t.path[0] += $(a, B));
              break;
            case xt:
              n || "#" != a
                ? a != r &&
                    ("'" == a && V(t)
                      ? (t.query += "%27")
                      : (t.query += "#" == a ? "%23" : $(a, B)))
                : ((t.fragment = ""), (f = bt));
              break;
            case bt:
              a != r && (t.fragment += $(a, H));
            }
            h++;
          }
        },
        _t = function (t) {
          var e,
            n,
            r = f(this, _t, "URL"),
            i = arguments.length > 1 ? arguments[1] : void 0,
            a = String(t),
            u = _(r, { type: "URL" });
          if (void 0 !== i)
            if (i instanceof _t) e = S(i);
            else if ((n = wt((e = {}), String(i)))) throw TypeError(n);
          if ((n = wt(u, a, null, e))) throw TypeError(n);
          var s = (u.searchParams = new b()),
            c = w(s);
          c.updateSearchParams(u.query),
          (c.updateURL = function () {
            u.query = String(s) || null;
          }),
          o ||
              ((r.href = Tt.call(r)),
              (r.origin = Et.call(r)),
              (r.protocol = At.call(r)),
              (r.username = Mt.call(r)),
              (r.password = Ct.call(r)),
              (r.host = Nt.call(r)),
              (r.hostname = kt.call(r)),
              (r.port = jt.call(r)),
              (r.pathname = Rt.call(r)),
              (r.search = Ot.call(r)),
              (r.searchParams = Lt.call(r)),
              (r.hash = Dt.call(r)));
        },
        St = _t.prototype,
        Tt = function () {
          var t = S(this),
            e = t.scheme,
            n = t.username,
            r = t.password,
            i = t.host,
            o = t.port,
            a = t.path,
            u = t.query,
            s = t.fragment,
            c = e + ":";
          return (
            null !== i
              ? ((c += "//"),
              X(t) && (c += n + (r ? ":" + r : "") + "@"),
              (c += q(i)),
              null !== o && (c += ":" + o))
              : "file" == e && (c += "//"),
            (c += t.cannotBeABaseURL
              ? a[0]
              : a.length
                ? "/" + a.join("/")
                : ""),
            null !== u && (c += "?" + u),
            null !== s && (c += "#" + s),
            c
          );
        },
        Et = function () {
          var t = S(this),
            e = t.scheme,
            n = t.port;
          if ("blob" == e)
            try {
              return new _t(e.path[0]).origin;
            } catch (t) {
              return "null";
            }
          return "file" != e && V(t)
            ? e + "://" + q(t.host) + (null !== n ? ":" + n : "")
            : "null";
        },
        At = function () {
          return S(this).scheme + ":";
        },
        Mt = function () {
          return S(this).username;
        },
        Ct = function () {
          return S(this).password;
        },
        Nt = function () {
          var t = S(this),
            e = t.host,
            n = t.port;
          return null === e ? "" : null === n ? q(e) : q(e) + ":" + n;
        },
        kt = function () {
          var t = S(this).host;
          return null === t ? "" : q(t);
        },
        jt = function () {
          var t = S(this).port;
          return null === t ? "" : String(t);
        },
        Rt = function () {
          var t = S(this),
            e = t.path;
          return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : "";
        },
        Ot = function () {
          var t = S(this).query;
          return t ? "?" + t : "";
        },
        Lt = function () {
          return S(this).searchParams;
        },
        Dt = function () {
          var t = S(this).fragment;
          return t ? "#" + t : "";
        },
        It = function (t, e) {
          return { get: t, set: e, configurable: !0, enumerable: !0 };
        };
      if (
        (o &&
          s(St, {
            href: It(Tt, function (t) {
              var e = S(this),
                n = String(t),
                r = wt(e, n);
              if (r) throw TypeError(r);
              w(e.searchParams).updateSearchParams(e.query);
            }),
            origin: It(Et),
            protocol: It(At, function (t) {
              var e = S(this);
              wt(e, String(t) + ":", tt);
            }),
            username: It(Mt, function (t) {
              var e = S(this),
                n = p(String(t));
              if (!G(e)) {
                e.username = "";
                for (var r = 0; r < n.length; r++) e.username += $(n[r], W);
              }
            }),
            password: It(Ct, function (t) {
              var e = S(this),
                n = p(String(t));
              if (!G(e)) {
                e.password = "";
                for (var r = 0; r < n.length; r++) e.password += $(n[r], W);
              }
            }),
            host: It(Nt, function (t) {
              var e = S(this);
              e.cannotBeABaseURL || wt(e, String(t), ft);
            }),
            hostname: It(kt, function (t) {
              var e = S(this);
              e.cannotBeABaseURL || wt(e, String(t), lt);
            }),
            port: It(jt, function (t) {
              var e = S(this);
              G(e) || ("" == (t = String(t)) ? (e.port = null) : wt(e, t, ht));
            }),
            pathname: It(Rt, function (t) {
              var e = S(this);
              e.cannotBeABaseURL || ((e.path = []), wt(e, t + "", gt));
            }),
            search: It(Ot, function (t) {
              var e = S(this);
              "" == (t = String(t))
                ? (e.query = null)
                : ("?" == t.charAt(0) && (t = t.slice(1)),
                (e.query = ""),
                wt(e, t, xt)),
              w(e.searchParams).updateSearchParams(e.query);
            }),
            searchParams: It(Lt),
            hash: It(Dt, function (t) {
              var e = S(this);
              "" != (t = String(t))
                ? ("#" == t.charAt(0) && (t = t.slice(1)),
                (e.fragment = ""),
                wt(e, t, bt))
                : (e.fragment = null);
            }),
          }),
        c(
          St,
          "toJSON",
          function () {
            return Tt.call(this);
          },
          { enumerable: !0 },
        ),
        c(
          St,
          "toString",
          function () {
            return Tt.call(this);
          },
          { enumerable: !0 },
        ),
        x)
      ) {
        var Pt = x.createObjectURL,
          Ut = x.revokeObjectURL;
        Pt &&
          c(_t, "createObjectURL", function (t) {
            return Pt.apply(x, arguments);
          }),
        Ut &&
            c(_t, "revokeObjectURL", function (t) {
              return Ut.apply(x, arguments);
            });
      }
      g(_t, "URL"), i({ global: !0, forced: !a, sham: !o }, { URL: _t });
    },
    function (t, e, n) {
      "use strict";
      var r = /[^\0-\u007E]/,
        i = /[.\u3002\uFF0E\uFF61]/g,
        o = "Overflow: input needs wider integers to process",
        a = Math.floor,
        u = String.fromCharCode,
        s = function (t) {
          return t + 22 + 75 * (t < 26);
        },
        c = function (t, e, n) {
          var r = 0;
          for (t = n ? a(t / 700) : t >> 1, t += a(t / e); t > 455; r += 36)
            t = a(t / 35);
          return a(r + (36 * t) / (t + 38));
        },
        f = function (t) {
          var e,
            n,
            r = [],
            i = (t = (function (t) {
              for (var e = [], n = 0, r = t.length; n < r; ) {
                var i = t.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                  var o = t.charCodeAt(n++);
                  56320 == (64512 & o)
                    ? e.push(((1023 & i) << 10) + (1023 & o) + 65536)
                    : (e.push(i), n--);
                } else e.push(i);
              }
              return e;
            })(t)).length,
            f = 128,
            l = 0,
            h = 72;
          for (e = 0; e < t.length; e++) (n = t[e]) < 128 && r.push(u(n));
          var p = r.length,
            d = p;
          for (p && r.push("-"); d < i; ) {
            var v = 2147483647;
            for (e = 0; e < t.length; e++) (n = t[e]) >= f && n < v && (v = n);
            var g = d + 1;
            if (v - f > a((2147483647 - l) / g)) throw RangeError(o);
            for (l += (v - f) * g, f = v, e = 0; e < t.length; e++) {
              if ((n = t[e]) < f && ++l > 2147483647) throw RangeError(o);
              if (n == f) {
                for (var y = l, m = 36; ; m += 36) {
                  var x = m <= h ? 1 : m >= h + 26 ? 26 : m - h;
                  if (y < x) break;
                  var b = y - x,
                    w = 36 - x;
                  r.push(u(s(x + (b % w)))), (y = a(b / w));
                }
                r.push(u(s(y))), (h = c(l, g, d == p)), (l = 0), ++d;
              }
            }
            ++l, ++f;
          }
          return r.join("");
        };
      t.exports = function (t) {
        var e,
          n,
          o = [],
          a = t.toLowerCase().replace(i, ".").split(".");
        for (e = 0; e < a.length; e++)
          (n = a[e]), o.push(r.test(n) ? "xn--" + f(n) : n);
        return o.join(".");
      };
    },
    function (t, e, n) {
      var r = n(5),
        i = n(64);
      t.exports = function (t) {
        var e = i(t);
        if ("function" != typeof e)
          throw TypeError(String(t) + " is not iterable");
        return r(e.call(t));
      };
    },
    function (t, e, n) {
      "use strict";
      n(0)(
        { target: "URL", proto: !0, enumerable: !0 },
        {
          toJSON: function () {
            return URL.prototype.toString.call(this);
          },
        },
      );
    },
  ],
]);
//# sourceMappingURL=1.fadaea37.chunk.js.map
