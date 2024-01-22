!(function (t) {
  function e(e) {
    for (
      var a, o, s = e[0], l = e[1], p = e[2], u = 0, d = [];
      u < s.length;
      u++
    )
      (o = s[u]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && d.push(r[o][0]),
        (r[o] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    for (c && c(e); d.length; ) d.shift()();
    return i.push.apply(i, p || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== r[l] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var a = {},
    r = { 0: 0 },
    i = [];
  function o(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = a),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          o.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a),
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var p = 0; p < s.length; p++) e(s[p]);
  var c = l;
  i.push([475, 1]), n();
})({
  188: function (t, e, n) {
    "use strict";
    (function (t) {
      function a() {
        t(".counter").each(function () {
          t({ Counter: 0 }).animate(
            { Counter: t(this).text() },
            {
              duration: 1e3,
              easing: "swing",
              step: function () {
                t(this).text(Math.ceil(this.Counter));
              },
            },
          );
        });
      }
      n.d(e, "a", function () {
        return a;
      });
    }).call(this, n(187));
  },
  189: function (t, e, n) {
    "use strict";
    (function (t) {
      function a() {
        t(window).scroll(function () {
          t(this).scrollTop() >= 200
            ? t(".scrollToTop").fadeIn(200)
            : t(".scrollToTop").fadeOut(200);
        }),
          t(".scrollToTop").click(function () {
            t("body,html").animate({ scrollTop: 0 }, 500);
          });
      }
      n.d(e, "a", function () {
        return a;
      });
    }).call(this, n(187));
  },
  474: function (t, e, n) {},
  475: function (t, e, n) {
    "use strict";
    n.r(e);
    n(247), n(248), n(474), n(145), n(154), n(53), n(91), n(92);
    var a = n(2);
    function r() {
      var t = window.getComputedStyle(document.getElementById("intro"), null),
        e =
          (parseFloat(t.paddingLeft.replace("px", "")),
          1 * parseFloat(t.width)),
        n = 0.85 * e,
        r = null,
        i = null,
        o = null,
        s = null,
        l = !1,
        p = null,
        c = { content: 0, map: 0 },
        u = null;
      a.j("/grundsicherung/data/config.json")
        .then(function (t) {
          (r = t),
            a.j("/grundsicherung/data/xii.geojson").then(function (t) {
              (o = a.h().fitSize([e, n], t)),
                (s = a.i().projection(o)),
                (i = a
                  .p("#map")
                  .append("svg")
                  .attr("id", "map-svg")
                  .attr("width", e)
                  .attr("height", n)),
                (l = i
                  .append("g")
                  .attr("id", "dataLayer")
                  .attr("width", e)
                  .attr("height", n)),
                (p = a
                  .p("#main-navigation")
                  .selectAll("li")
                  .data(r.content)
                  .enter()
                  .append("li")
                  .text(function (t) {
                    return t.nav[0];
                  })
                  .on("click", function (t, e) {
                    d(e, c.map);
                  })),
                (u = a
                  .p("#map-wrapper")
                  .append("div")
                  .attr("class", "tooltip")
                  .style("display", "none")),
                d(2, 1);
              var h = a
                  .p("#map")
                  .append("svg")
                  .attr("id", "scale-svg")
                  .attr("width", e / 2 + 100)
                  .attr("height", 60),
                f = h
                  .append("defs")
                  .append("linearGradient")
                  .attr("id", "mainGradient");
              f
                .append("stop")
                .attr("class", "stop-left")
                .attr("stop-color", r.colors[0])
                .attr("offset", "0"),
                f
                  .append("stop")
                  .attr("class", "stop-center")
                  .attr("stop-color", r.colors[1])
                  .attr("offset", "0.5"),
                f
                  .append("stop")
                  .attr("class", "stop-right")
                  .attr("stop-color", r.colors[2])
                  .attr("offset", "1"),
                h
                  .append("rect")
                  .classed("filled", !0)
                  .attr("x", 30)
                  .attr("width", 0.2 * e)
                  .attr("height", 10),
                h
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0)
                  .attr("y", 10)
                  .text("0 %"),
                h
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0.2 * e + 60)
                  .attr("y", 10)
                  .text("50%"),
                h
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0)
                  .attr("y", 30)
                  .text("% Grundsicherungsempfänger*innen");
            });
        })
        .catch(function (t) {
          console.log(t);
        });
      var d = function t(e, n) {
          (c.content = e),
            (c.map = n),
            p.classed("active", function (t, e) {
              return e === c.content;
            }),
            a.q("#sub-navigation *").remove(),
            a
              .p("#sub-navigation")
              .selectAll("li")
              .data(r.content[c.content].maps)
              .enter()
              .append("li")
              .text(function (t) {
                return t.nav[0];
              })
              .classed("active", function (t, e) {
                return e === c.map;
              })
              .on("click", function (e, n) {
                t(c.content, n);
              }),
            h(c.content, c.map);
        },
        h = function (t, e) {
          var n = r.content[t].maps[e];
          a.p("#content-topic").html(r.content[t].title[0]),
            a.p("#content-title").html(n.title[0]),
            a.p("#content-description").html(n.description[0]),
            l.selectAll("*").remove(),
            a
              .j("/grundsicherung/data/" + n.data)
              .then(function (t) {
                t.features.forEach(function (t) {
                  t.properties[n.attribute] = parseFloat(
                    t.properties[n.attribute].replace(",", "."),
                  );
                });
                var e = a
                  .n()
                  .domain("extent" in n ? n.extent : [0, 25, 50])
                  .range("colors" in r ? r.colors : ["#2e91d2", "#F4F5F9"]);
                l.selectAll("path")
                  .data(t.features)
                  .enter()
                  .append("path")
                  .attr("d", s)
                  .on("mouseover", function () {
                    u.style("display", "block").style("position", "absolute");
                  })
                  .on("mousemove", function () {
                    var t = a.p(this).data()[0];
                    r.content[0].maps[c.map].attribute,
                      u
                        .html(
                          '<h3 class="tooltip--title">' +
                            t.properties.Name +
                            '</h3><div class="tooltip--datawrapper"> <div class="tooltip--datawrapper--row"><p class="attr">%</p><p class="value">' +
                            t.properties[n.attribute] +
                            "</p></div> </div>",
                        )
                        .style("left", a.e.pageX + 20 + "px")
                        .style("top", a.e.pageY + 20 + "px"),
                      console.log(t.properties);
                  })
                  .on("mouseout", function () {
                    u.style("display", "none");
                  })
                  .attr("fill", function (t) {
                    return isNaN(t.properties[n.attribute])
                      ? "#c2c2c2"
                      : e(t.properties[n.attribute]);
                  });
              })
              .catch(function (t) {
                console.log(t);
              });
        };
      window.addEventListener("resize", function () {
        null !== i &&
          (function () {
            var t = window.getComputedStyle(
                document.getElementById("intro"),
                null,
              ),
              e = parseFloat(t.width),
              n = 0.75 * e;
            i.attr("width", e).attr("height", n);
          })();
      });
    }
    n(115);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    var o = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.div = e.div),
          (this.file = e.file),
          (this.margin = { top: 20, right: 20, bottom: 30, left: 50 }),
          (this.width = e.width),
          (this.height = this.width > 500 ? 400 : 0.8 * this.width),
          (this.ylabel = e.ylabel),
          (this.yunit = e.yunit),
          (this.xaxis = e.xaxis),
          (this.yaxis = e.yaxis),
          (this.line2 = e.line2),
          (this.width_line = this.width - this.margin.left - this.margin.right),
          (this.height_line =
            this.height - this.margin.top - this.margin.bottom),
          (this.config = e),
          this.svg,
          (this.init = this.init.bind(this));
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function () {
              var t = this.ylabel,
                e = a.o().range([0, this.width_line]),
                n = a.n().range([this.height_line, 0]),
                r = a
                  .k()
                  .x(function (t) {
                    return e(t[h]);
                  })
                  .y(function (t) {
                    return n(t[f]);
                  }),
                i = a
                  .k()
                  .x(function (t) {
                    return e(t[h]);
                  })
                  .y(function (t) {
                    return n(t[m]);
                  }),
                o = a
                  .p("#".concat(this.div))
                  .append("svg")
                  .attr("width", this.width)
                  .attr("height", this.height)
                  .append("g")
                  .attr(
                    "transform",
                    "translate(" +
                      this.margin.left +
                      "," +
                      this.margin.top +
                      ")",
                  ),
                s = this.height_line,
                l = this.width_line,
                p = this.width,
                c = this.height,
                u = this.map,
                d = this.yunit,
                h = this.xaxis,
                f = this.yaxis,
                m = this.line2;
              a.d(this.file)
                .then(function (g) {
                  var v = a.c(function (t) {
                      return t[h];
                    }).left,
                    y = a.r("%Y");
                  g.forEach(function (t) {
                    (t[h] = y(t[h])), (t[f] = +t[f]);
                  }),
                    e.domain(
                      a.f(g, function (t) {
                        return t[h];
                      }),
                    ),
                    n.domain([
                      0,
                      a.l(g, function (t) {
                        return t[f];
                      }),
                    ]),
                    o
                      .append("path")
                      .data([g])
                      .attr("class", "line")
                      .attr("d", r),
                    o
                      .append("path")
                      .data([g])
                      .attr("class", "line")
                      .attr("id", "line2")
                      .attr("d", i),
                    o
                      .append("g")
                      .attr("class", "xaxis")
                      .attr("transform", "translate(0," + s + ")")
                      .call(
                        a
                          .a(e)
                          .ticks(p / 100)
                          .tickFormat(u),
                      ),
                    o
                      .append("g")
                      .attr("class", "yaxis")
                      .call(
                        a
                          .b(n)
                          .ticks(c / 50)
                          .tickFormat(a.g(".1f")),
                      )
                      .append("text")
                      .attr("class", "axis-title")
                      .attr("transform", "rotate(-90)")
                      .attr("y", -48)
                      .attr("dy", ".71em")
                      .text(t),
                    o.selectAll(".domain").attr("stroke-width", 0);
                  var x = o
                    .append("g")
                    .attr("class", "focus")
                    .style("display", "none");
                  x
                    .append("line")
                    .attr("class", "x-hover-line hover-line")
                    .attr("y1", 0)
                    .attr("y2", s)
                    .attr("stroke", "#2d91d2"),
                    x
                      .append("line")
                      .attr("class", "y-hover-line hover-line")
                      .attr("x1", l)
                      .attr("x2", l),
                    x.append("circle").attr("r", 7.5),
                    x
                      .append("text")
                      .attr("id", "text_count")
                      .attr("x", -20)
                      .attr("dy", "2em")
                      .attr("class", "text");
                  var w = o
                    .append("g")
                    .attr("class", "focus")
                    .style("display", "none");
                  w.append("circle").attr("id", "circ2").attr("r", 7.5),
                    w
                      .append("text")
                      .attr("id", "text_count")
                      .attr("x", -20)
                      .attr("dy", "2em")
                      .attr("class", "text"),
                    o
                      .append("rect")
                      .attr("class", "overlay")
                      .attr("width", p)
                      .attr("height", s)
                      .on("mouseover", function () {
                        x.style("display", null), w.style("display", null);
                      })
                      .on("mouseout", function () {
                        x.style("display", "none"), w.style("display", "none");
                      })
                      .on("mousemove", function () {
                        var t = e.invert(a.m(this)[0]),
                          r = v(g, t, 1),
                          i = g[r - 1],
                          o = isNaN(g[r]) ? g[r - 1] : g[r],
                          p = t - i[f] > o[f] - t ? o : i;
                        x.attr(
                          "transform",
                          "translate(" + e(p[h]) + "," + n(p[f]) + ")",
                        ),
                          x.select("#text_count").html(function () {
                            return p[f] + " " + d + " im Alter";
                          }),
                          x.select(".x-hover-line").attr("y2", s - n(p[f])),
                          x.select(".y-hover-line").attr("x2", l + l),
                          w.attr(
                            "transform",
                            "translate(" + e(p[h]) + "," + n(p[m]) + ")",
                          ),
                          w.select("#text_count").text(function () {
                            return p[m] + " " + d + " bei Erwerbsminderung";
                          }),
                          w.select(".x-hover-line").attr("y2", s - n(p[m])),
                          w.select(".y-hover-line").attr("x2", l + l),
                          e(p[h]) > 540
                            ? (x.select("text").attr("x", -90),
                              w.select("text").attr("x", -190))
                            : (x.select("text").attr("x", -20),
                              w.select("text").attr("x", -20));
                      });
                })
                .catch(function (t) {
                  console.log(t);
                });
            },
          },
        ]) && i(e.prototype, n),
        r && i(e, r),
        t
      );
    })();
    var s = n(188),
      l = n(189);
    document.addEventListener("DOMContentLoaded", function () {
      var t, e, n;
      r(),
        (t = window.getComputedStyle(document.getElementById("intro"), null)),
        (e = 2 * parseFloat(t.paddingLeft.replace("px", ""))),
        (n = parseFloat(t.width)),
        new o({
          div: "timeline",
          file: "/grundsicherung/data/timeline.csv",
          width: n - e,
          xaxis: "jahr",
          yaxis: "ab 65 Jahre insgesamt",
          line2: "18-64 Jahre insgesamt",
          yunit: "% ",
          ylabel: "% Grundsicherungsempfänger*innen",
        }).init(),
        (function () {
          var t = window.getComputedStyle(
              document.getElementById("intro"),
              null,
            ),
            e =
              (parseFloat(t.paddingLeft.replace("px", "")),
              1 * parseFloat(t.width)),
            n = 0.85 * e,
            r = null,
            i = null,
            o = null,
            s = null,
            l = null,
            p = null,
            c = null;
          a.j("/grundsicherung/data/config.json")
            .then(function (t) {
              (r = t),
                a.j("/grundsicherung/data/xii.geojson").then(function (t) {
                  (s = a.h().fitSize([e, n], t)), (l = a.i().projection(s));
                }),
                (i = a
                  .p("#timelapse-map")
                  .append("svg")
                  .attr("width", e)
                  .attr("height", n)),
                (o = i
                  .append("g")
                  .attr("id", "dataLayer_tl")
                  .attr("width", e)
                  .attr("height", n)),
                (c = a
                  .p("#year-label")
                  .append("text")
                  .attr("transform", "translate(0,12)")
                  .text("Jahr"));
              var u = a
                  .p("#timelapse-map")
                  .append("svg")
                  .attr("id", "scale-svg")
                  .attr("width", e / 2 + 100)
                  .attr("height", 60),
                d = u
                  .append("defs")
                  .append("linearGradient")
                  .attr("id", "mainGradient");
              function h(t) {
                a.d("/grundsicherung/data/timelapse.csv")
                  .then(function (e) {
                    a.j("/grundsicherung/data/lor_planungsraeume.geojson").then(
                      function (n) {
                        e.forEach(function (e) {
                          var a = e.Kennung,
                            r = +e["y" + [t]];
                          n.features.forEach(function (t) {
                            t.properties.spatial_name == a &&
                              (t.properties.value = r);
                          });
                        });
                        var s = a.n().range(r.colors).domain([0, 15, 30]);
                        o.selectAll("path").remove(),
                          o
                            .selectAll("path")
                            .data(n.features)
                            .enter()
                            .append("path")
                            .attr("fill", function (t) {
                              return isNaN(t.properties.value)
                                ? "#c2c2c2"
                                : s(t.properties.value);
                            })
                            .attr("d", l)
                            .on("mouseover", function () {
                              p.style("display", "block").style(
                                "position",
                                "absolute",
                              );
                            })
                            .on("mousemove", function () {
                              var t = a.p(this).data()[0],
                                e = a.m(i.node()).map(function (t) {
                                  return parseInt(t);
                                });
                              p.attr(
                                "style",
                                "left:" +
                                  (e[0] + 15) +
                                  "px; top:" +
                                  (e[1] - 35) +
                                  "px",
                              )
                                .html(
                                  '<h3 class="tooltip--title">' +
                                    t.properties.spatial_alias +
                                    '</h3><div class="tooltip--datawrapper"> <div class="tooltip--datawrapper--row"><p class="attr">' +
                                    (t.properties.value ? "%" : "") +
                                    '</p><p class="value">' +
                                    (t.properties.value || "keine Daten") +
                                    "</p></div> </div>",
                                )
                                .style("left", a.e.pageX + 20 + "px")
                                .style("top", a.e.pageY + 20 + "px");
                            })
                            .on("mouseout", function () {
                              p.style("display", "none");
                            }),
                          c.text("Jahr: " + t);
                      },
                    );
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
              }
              d
                .append("stop")
                .attr("class", "stop-left")
                .attr("stop-color", r.colors[0])
                .attr("offset", "0"),
                d
                  .append("stop")
                  .attr("class", "stop-center")
                  .attr("stop-color", r.colors[1])
                  .attr("offset", "0.5"),
                d
                  .append("stop")
                  .attr("class", "stop-right")
                  .attr("stop-color", r.colors[2])
                  .attr("offset", "1"),
                u
                  .append("rect")
                  .classed("filled", !0)
                  .attr("x", 40)
                  .attr("width", 0.2 * e)
                  .attr("height", 10),
                u
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0)
                  .attr("y", 10)
                  .text("0 %"),
                u
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0.2 * e + 60)
                  .attr("y", 10)
                  .text("30 %"),
                u
                  .append("text")
                  .attr("class", "axis-label")
                  .attr("x", 0)
                  .attr("y", 30)
                  .text("% Grundsicherungsempfänger*innen"),
                (p = a
                  .p("#timelapse-map-wrapper")
                  .append("div")
                  .attr("class", "tooltip")
                  .style("display", "none")),
                h(2006),
                a.p("#slider").on("input", function () {
                  h(+this.value);
                });
            })
            .catch(function (t) {
              console.log(t);
            });
        })(),
        Object(s.a)(),
        Object(l.a)();
    });
  },
});
//# sourceMappingURL=app.a32d7907.js.map
