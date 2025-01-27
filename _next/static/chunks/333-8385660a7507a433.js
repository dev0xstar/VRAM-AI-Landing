(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [333],
  {
    8586: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return Button;
        },
      });
      var r = n(2676),
        s = n(5924),
        i = n(7349),
        o = n(3878),
        a = n.n(o),
        l = n(883),
        c = n.n(l);
      let d = a()(() => n.e(509).then(n.bind(n, 509)), {
          loadableGenerated: { webpack: () => [509] },
          ssr: !1,
        }),
        Button = (e) => {
          let {
            icon: t,
            arrow: n,
            children: o,
            href: a,
            onClick: l,
            className: h,
            style: m,
          } = e;
          return a
            ? (0, r.jsxs)(i.r, {
                href: a,
                className: (0, s.Z)(c().button, h, t && c()["has-icon"]),
                style: m,
                children: [
                  t && (0, r.jsx)("span", { className: c().icon, children: t }),
                  (0, r.jsxs)("span", {
                    className: c().text,
                    children: [
                      (0, r.jsxs)("span", {
                        className: c().visible,
                        children: [
                          o,
                          " ",
                          n && (0, r.jsx)(d, { className: c().arrow }),
                        ],
                      }),
                      (0, r.jsxs)("span", {
                        "aria-hidden": "true",
                        className: c().hidden,
                        children: [
                          o,
                          " ",
                          n && (0, r.jsx)(d, { className: c().arrow }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsxs)("button", {
                className: (0, s.Z)(c().button, h, t && c()["has-icon"]),
                style: m,
                onClick: l,
                children: [
                  t && (0, r.jsx)("span", { className: c().icon, children: t }),
                  (0, r.jsxs)("span", {
                    className: c().text,
                    children: [
                      (0, r.jsxs)("span", {
                        className: c().visible,
                        children: [
                          o,
                          " ",
                          n && (0, r.jsx)(d, { className: c().arrow }),
                        ],
                      }),
                      (0, r.jsxs)("span", {
                        "aria-hidden": "true",
                        className: c().hidden,
                        children: [
                          o,
                          " ",
                          n && (0, r.jsx)(d, { className: c().arrow }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        };
    },
    7349: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var r = n(2676),
        s = n(2432),
        i = n(5024),
        o = n.n(i),
        a = n(5271);
      let l = (0, a.forwardRef)((e, t) => {
        var n;
        let {
            href: i,
            onClick: a = () => {},
            onMouseEnter: l = () => {},
            onMouseLeave: c = () => {},
            children: d,
            className: h,
            style: m,
          } = e,
          u = {
            ref: t,
            onClick: a,
            onMouseEnter: l,
            onMouseLeave: c,
            className: h,
            style: m,
          },
          p = (0, s.o)((e) => {
            let { setTriggerTransition: t } = e;
            return t;
          });
        if ("string" != typeof i)
          return (0, r.jsx)("button", { ...u, children: d });
        let f =
          (null == i ? void 0 : i.startsWith("mailto:")) ||
          (null == i ? void 0 : i.startsWith("tel:"));
        if (f)
          return (0, r.jsx)("a", {
            ...u,
            href: i,
            target: "_blank",
            rel: "noopener noreferrer",
            children: d,
          });
        let _ = null == i ? void 0 : i.startsWith("#"),
          x = null == i ? void 0 : i.startsWith("http");
        x || (null == i ? void 0 : i.startsWith("/")) || (i = "/".concat(i));
        let noTransition = (e) => !!["gsap"].find((t) => e.includes(t));
        return (0, r.jsx)(o(), {
          href: i,
          passHref: x || _,
          shallow: ((n = i), !!["?demo=true"].find((e) => n.includes(e))),
          ...u,
          onClick: (e) => {
            x || _ || (noTransition(i) || (e.preventDefault(), p(i)), a());
          },
          ...(x && { target: "_blank", rel: "noopener noreferrer" }),
          children: d,
        });
      });
      l.displayName = "Link";
    },
    333: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return Layout;
        },
      });
      var r = n(2676),
        s = n(6676),
        i = n(5924),
        o = n(5710),
        a = n(3992),
        l = n.n(a);
      function CustomHead(e) {
        let { title: t = "", description: n, image: s, keywords: i } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("meta", {
                  httpEquiv: "x-ua-compatible",
                  content: "ie=edge",
                }),
                (0, r.jsx)("meta", {
                  httpEquiv: "x-dns-prefetch-control",
                  content: "off",
                }),
                (0, r.jsx)("meta", {
                  httpEquiv: "Window-Target",
                  content: "_value",
                }),
                (0, r.jsx)("title", { children: t }),
                (0, r.jsx)("meta", { name: "robots", content: "index,follow" }),
                (0, r.jsx)("meta", {
                  name: "googlebot",
                  content: "index,follow",
                }),
                (0, r.jsx)("meta", {
                  name: "keywords",
                  content: i && i.length ? i.join(",") : i,
                }),
                (0, r.jsx)("meta", { name: "author", content: "VRAM" }),
                (0, r.jsx)("meta", {
                  name: "referrer",
                  content: "no-referrer",
                }),
                (0, r.jsx)("meta", {
                  name: "format-detection",
                  content: "telephone=no",
                }),
                (0, r.jsx)("meta", { name: "geo.region", content: "US" }),
                (0, r.jsx)("link", {
                  rel: "manifest",
                  href: "/site.webmanifest",
                }),
                (0, r.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/apple-touch-icon.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/favicon-32x32.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/favicon-16x16.png",
                }),
                (0, r.jsx)("link", {
                  rel: "manifest",
                  href: "/site.webmanifest",
                }),
                (0, r.jsx)("link", {
                  rel: "mask-icon",
                  href: "/safari-pinned-tab.svg",
                  color: "#ff98a2",
                }),
                (0, r.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#000000",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, r.jsx)(o.PB, {
              title: t || "VRAM - A Revolutionary AI Agent Launchpad on Eth",
              description:
                n ||
                "VRAM is an AI agent Launchpad pushing the boundaries of artificial intelligence and machine learning on Eth.",
              openGraph: {
                title: t || "VRAM - ",
                description:
                  n ||
                  "VRAM is an AI agent Launchpad pushing the boundaries of artificial intelligence and machine learning on Eth.",
                type: "website",
                locale: "en_US",
                images: [
                  {
                    url: s || "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "VRAM",
                  },
                ],
                defaultImageWidth: 1200,
                defaultImageHeight: 630,
                site_name: "",
              },
              twitter: {
                handle: "@vramxai",
                site: "@vramxai",
                cardType: "summary_large_image",
              },
            }),
          ],
        });
      }
      var c = n(8586),
        d = n(7349),
        h = n(4739),
        m = n.n(h);
      let Footer = () =>
        (0, r.jsxs)("footer", {
          className: (0, i.Z)("theme-light", m().footer),
          children: [
            (0, r.jsxs)("div", {
              className: (0, i.Z)(m().top, "layout-grid hide-on-mobile"),
              children: [
                (0, r.jsxs)("p", {
                  className: (0, i.Z)(m()["first-line"], "h1"),
                  children: [
                    "VRAM is ",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("span", {
                      className: "contrast",
                      children: "an AI platform",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: m()["shameless-plug"],
                  children: [
                    (0, r.jsx)("p", {
                      className: "p-s",
                      children: "The smarter the AI,",
                    }),
                    (0, r.jsx)("p", {
                      className: "h4",
                      children: "The bigger the VRAM",
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: (0, i.Z)(m()["last-line"], "h1"),
                  children: [
                    "to create, ",
                    (0, r.jsx)("br", {}),
                    " trade and build AI agents",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("br", {}),
                  ],
                }),
                (0, r.jsx)(c.z, {
                  className: m().cta,
                  arrow: !0,
                  href: "https://docs.vramai.xyz/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Whitepaper",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: (0, i.Z)(m().top, "layout-block hide-on-desktop"),
              children: [
                (0, r.jsxs)("div", {
                  className: m()["shameless-plug"],
                  children: [
                    (0, r.jsx)("p", { className: "h4", children: "VRAM" }),
                    (0, r.jsxs)("p", {
                      className: "p-s",
                      children: [
                        "a platform to create, trade ",
                        (0, r.jsx)("br", {}),
                        " and build AI agents",
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: (0, i.Z)(m()["first-line"], "h1"),
                  children: [
                    "VRAM is ",
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)("span", {
                      className: "contrast",
                      children:
                        "a platform to create, trade and build AI agents",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: m().bottom,
              children: [
                (0, r.jsxs)("div", {
                  className: m().links,
                  children: [
                    (0, r.jsxs)(d.r, {
                      className: m().profile,
                      href: "https://x.com/0x0sid",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/images/twitter-profile.jpg",
                          alt: "VRAM CEO",
                          className: m().profileImage,
                        }),
                        (0, r.jsxs)("div", {
                          className: m().profileInfo,
                          children: [
                            (0, r.jsx)("span", {
                              className: m().name,
                              children: "Sid",
                            }),
                            (0, r.jsx)("span", {
                              className: m().title,
                              children: "CEO",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(d.r, {
                      className: (0, i.Z)(m().link, "p-xs"),
                      href: "https://t.me/vram_ai_portal",
                      children: "Telegram",
                    }),
                    (0, r.jsx)(d.r, {
                      className: (0, i.Z)(m().link, "p-xs"),
                      href: "https://x.com/vram_ai_agent",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Twitter",
                    }),
                  ],
                }),
                (0, r.jsxs)("p", {
                  className: (0, i.Z)("p-xs", m().tm),
                  children: [
                    (0, r.jsx)("span", { children: " " }),
                    " ",
                    new Date().getFullYear(),
                    " VRAM",
                  ],
                }),
                (0, r.jsx)(c.z, {
                  className: (0, i.Z)(m().cta, "hide-on-desktop"),
                  arrow: !0,
                  href: "https://t.me/vram_ai_portal",
                  children: "Join VRAM.AI",
                }),
              ],
            }),
          ],
        });
      var u = n(2432),
        p = n(5271),
        f = n(2789),
        _ = n.n(f);
      let Intro = () => {
        let e = (0, s.ac)("(max-width: 800px)"),
          [t, n] = (0, p.useState)(!1),
          [o, a] = (0, p.useState)(!1);
        (0, u.o)((e) => {
          let { introOut: t } = e;
          return t;
        });
        let l = (0, u.o)((e) => {
            let { setIntroOut: t } = e;
            return t;
          }),
          c = (0, u.o)((e) => {
            let { lenis: t } = e;
            return t;
          });
        return (
          (0, p.useEffect)(() => {
            setTimeout(() => {
              n(!0);
            }, 1e3);
          }, []),
          (0, p.useEffect)(() => {
            if (e) {
              document.documentElement.classList.toggle("intro", !1);
              return;
            }
            o || document.documentElement.classList.toggle("intro", !0),
              c &&
                (o
                  ? (c.start(),
                    document.documentElement.classList.toggle("intro", !1))
                  : (setTimeout(() => {
                      c.stop();
                    }, 0),
                    document.documentElement.classList.toggle("intro", !0)));
          }, [o, c, e]),
          (0, r.jsx)("div", {
            className: (0, i.Z)(_().wrapper, t && _().out),
            onTransitionEnd: (e) => {
              e.target.classList.forEach((e) => {
                e.includes("out") && a(!0), e.includes("show") && l(!0);
              });
            },
            children: (0, r.jsx)("div", {
              className: (0, i.Z)(_().relative),
              children: (0, r.jsx)("div", {
                className: (0, i.Z)(_().textWrapper, t && _().show),
              }),
            }),
          })
        );
      };
      var x = n(6908),
        g = n(4570),
        j = n(3988),
        b = n(2698),
        v = n.n(b);
      function Scrollbar(e) {
        let {} = e,
          t = (0, p.useRef)(),
          { width: n, height: s } = (0, j.Z)(),
          i = (0, u.o)((e) => {
            let { lenis: t } = e;
            return t;
          });
        (0, x.v)((e) => {
          let { scroll: n, limit: r } = e;
          t.current.style.transform = "scaleX(".concat(n / r, ")");
        });
        let [o, a] = (0, p.useState)(!1);
        return (
          (0, p.useEffect)(() => {
            if (o)
              return (
                window.addEventListener("pointermove", onPointerMove, !1),
                window.addEventListener("pointerup", onPointerUp, !1),
                () => {
                  window.removeEventListener("pointermove", onPointerMove, !1),
                    window.removeEventListener("pointerup", onPointerUp, !1);
                }
              );
            function onPointerMove(e) {
              e.preventDefault();
              let t = (s - innerHeight) / 2,
                n = (0, g.KK)(0, s, e.clientY, -t, innerHeight + t),
                r = (0, g.uZ)(0, n / innerHeight, 1),
                o = i.limit * r;
              "vertical" === i.direction
                ? window.scrollTo(0, o)
                : window.scrollTo(o, 0);
            }
            function onPointerUp() {
              a(!1);
            }
          }, [o, s, n, i]),
          (0, r.jsx)("div", {
            className: v().scrollbar,
            children: (0, r.jsx)("div", { ref: t, className: v().inner }),
          })
        );
      }
      var w = n(3878),
        N = n.n(w),
        k = n(5289),
        Z = n(9425).Z,
        A = n(8008),
        y = n.n(A);
      let I = N()(
          () =>
            n
              .e(235)
              .then(n.bind(n, 9235))
              .then((e) => e.Cursor),
          { loadableGenerated: { webpack: () => [9235] }, ssr: !1 }
        ),
        E = N()(
          () =>
            n
              .e(562)
              .then(n.bind(n, 1562))
              .then((e) => e.PageTransition),
          { loadableGenerated: { webpack: () => [1562] }, ssr: !1 }
        );
      function Layout(e) {
        let {
            seo: t = { title: "", description: "", image: "", keywords: "" },
            children: n,
            theme: o = "light",
            className: a,
          } = e,
          [l, c] = (0, u.o)((e) => [e.lenis, e.setLenis]),
          d = (0, k.useRouter)();
        (0, s.bt)(() => {
          window.scrollTo(0, 0);
          let e = new Z({
            duration: 1,
            easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            orientation: "vertical",
            smoothWheel: !0,
            wheelMultiplier: 1.5,
            smoothTouch: !1,
            touchMultiplier: 2,
          });
          return (
            (window.lenis = e),
            c(e),
            () => {
              e.destroy(), c(null);
            }
          );
        }, []);
        let [h, m] = (0, p.useState)();
        return (
          (0, s.bt)(() => {
            if (l && h && "#" !== h) {
              let e = document.querySelector(h);
              e && l.scrollTo(e, { offset: 0 });
            }
          }, [l, h]),
          (0, s.bt)(() => {
            if (d.asPath.includes("#")) {
              let e = d.asPath.split("#").pop();
              e && m("#" + e);
            }
          }, [d]),
          (0, s.bt)(() => {
            function onClick(e) {
              let t = e.currentTarget,
                n = t.href.split("#").pop();
              n &&
                (e.preventDefault(),
                m("#" + n),
                setTimeout(() => {
                  window.location.hash = n;
                }, 0));
            }
            let e = [...document.querySelectorAll("[href]")].filter(
              (e) =>
                e.href.includes(d.pathname + "#") && e.href.split("#").pop()
            );
            return (
              e.forEach((e) => {
                e.addEventListener("click", onClick, !1);
              }),
              () => {
                e.forEach((e) => {
                  e.removeEventListener("click", onClick, !1);
                });
              }
            );
          }, []),
          (0, s.xQ)((e) => {
            null == l || l.raf(e);
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(CustomHead, { ...t }),
              (0, r.jsxs)("div", {
                className: (0, i.Z)("theme-".concat(o), y().layout, a),
                children: [
                  (0, r.jsx)(E, {}),
                  (0, r.jsx)(Intro, {}),
                  (0, r.jsx)(I, {}),
                  (0, r.jsx)(Scrollbar, {}),
                  (0, r.jsx)("main", { className: y().main, children: n }),
                  (0, r.jsx)(Footer, {}),
                ],
              }),
            ],
          })
        );
      }
    },
    4570: function (e, t, n) {
      "use strict";
      function clamp(e, t, n) {
        return Math.max(e, Math.min(t, n));
      }
      function mapRange(e, t, n, r, s) {
        return ((n - e) * (s - r)) / (t - e) + r;
      }
      n.d(t, {
        KK: function () {
          return mapRange;
        },
        uZ: function () {
          return clamp;
        },
      });
    },
    883: function (e) {
      e.exports = {
        button: "button_button__dZRSb",
        text: "button_text__YzV8X",
        visible: "button_visible__JooQN",
        hidden: "button_hidden__95QJi",
        arrow: "button_arrow__e89hI",
        icon: "button_icon__eZOV7",
      };
    },
    4739: function (e) {
      e.exports = {
        footer: "footer_footer__3kcQj",
        top: "footer_top__Wxu9Z",
        "first-line": "footer_first-line__H0iQt",
        "shameless-plug": "footer_shameless-plug__eobJb",
        cta: "footer_cta__CkaHZ",
        "last-line": "footer_last-line__XC5ob",
        bottom: "footer_bottom__FFkQv",
        links: "footer_links__1iZto",
        profile: "footer_profile__yI919",
        title: "footer_title__QcupS",
        profileImage: "footer_profileImage__Gd1Ft",
        profileInfo: "footer_profileInfo__X880f",
        name: "footer_name__tZAVY",
        link: "footer_link__pjK7O",
        socialIcon: "footer_socialIcon__Io8zu",
        tm: "footer_tm__XnVwQ",
      };
    },
    2789: function (e) {
      e.exports = {
        wrapper: "intro_wrapper__NJqQ6",
        out: "intro_out__XJLVd",
        logo: "intro_logo__LpPOV",
        relative: "intro_relative__6mAOC",
        backgroundLogo: "intro_backgroundLogo__RZt2w",
        logoFixed: "intro_logoFixed__7r0Qs",
        text: "intro_text__lh6bt",
        glow: "intro_glow__AQRgF",
        "white-background": "intro_white-background__bneI7",
        textWrapper: "intro_textWrapper___623n",
        vram: "intro_vram__flShY",
        ai: "intro_ai__18rr9",
        show: "intro_show__kiHh0",
        title: "intro_title__Q8lJH",
        pulse: "intro_pulse__ZgkZC",
      };
    },
    2698: function (e) {
      e.exports = {
        scrollbar: "scrollbar_scrollbar__uEd_s",
        inner: "scrollbar_inner__GHrz8",
      };
    },
    8008: function (e) {
      e.exports = {
        layout: "layout_layout__yd6mS",
        main: "layout_main__k8zJI",
      };
    },
  },
]);
