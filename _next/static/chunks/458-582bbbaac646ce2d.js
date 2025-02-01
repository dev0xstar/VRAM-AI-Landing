(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [458],
  {
    2103: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Card;
        },
      });
      var r = s(2676),
        a = s(5924),
        i = s(5402),
        n = s.n(i);
      let Card = (e) => {
        let {
          number: t,
          text: s,
          className: i,
          inverted: o,
          background: l,
          image: c,
        } = e;
        return (0, r.jsxs)("div", {
          className: (0, a.Z)(i, n().wrapper, o && n().inverted),
          style: { "--background": l },
          children: [
            c &&
              (0, r.jsx)("div", {
                className: n().imageWrapper,
                children: (0, r.jsx)("img", {
                  src: c,
                  alt: s,
                  className: n().cardImage,
                }),
              }),
            (0, r.jsxs)("div", {
              className: n().content,
              children: [
                t &&
                  (0, r.jsx)("p", {
                    className: n().number,
                    children: t.toString().padStart(2, "0"),
                  }),
                s && (0, r.jsx)("p", { className: n().text, children: s }),
              ],
            }),
          ],
        });
      };
    },
    4: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return E;
          },
          default: function () {
            return Home;
          },
        });
      var r = s(2676),
        a = s(6676),
        i = s(5924),
        n = s(8586),
        o = s(2103),
        l = s(5271),
        c = s(6452),
        h = s.n(c),
        d = s(7369),
        m = s.n(d),
        u = s(5634),
        _ = s.n(u);
      function Popup(e) {
        let { message: t, isOpen: s, onClose: a } = e;
        return ((0, l.useEffect)(() => {
          if (s) {
            let e = setTimeout(() => {
              a();
            }, 3e3);
            return () => clearTimeout(e);
          }
        }, [s, a]),
        s)
          ? (0, r.jsx)("div", {
              className: (0, i.Z)(_().popup, s && _().visible),
              children: (0, r.jsx)("div", {
                className: _().content,
                children: t,
              }),
            })
          : null;
      }
      let p = [
          "Our AI is currently binge-watching all seasons of Silicon Valley. Join us on Telegram while we wait!",
          "Plot twist: The AI went on a meditation retreat. Check our Telegram for its return date!",
          "Looks like our AI is still debugging its morning routine. Head to Telegram for the latest updates!",
          "The AI is practicing its stand-up comedy routine. Follow us on Telegram for the punchline!",
          "Currently teaching our AI the difference between a fork and a blockchain fork. Updates on Telegram!",
          "Our AI insisted on taking a gap year to 'find itself'. Track its journey on Telegram!",
          "The AI is stuck in traffic on the blockchain. Get real-time updates on Telegram!",
          "Breaking news: AI caught daydreaming about Web4.0. Join Telegram for the full story!",
          "Our AI is still learning to count to infinity. Progress reports available on Telegram!",
          "The AI is busy writing its autobiography. Preview chapters dropping in our Telegram!",
          "Currently teaching our AI the art of patience. Practice with us on Telegram!",
          "Our AI is competing in a virtual marathon. Cheer it on in our Telegram group!",
          "The AI is taking a crash course in quantum mechanics. Study notes shared on Telegram!",
          "System update: AI learning the difference between HODLing and hugging. Join the discussion on Telegram!",
          "Our AI is currently lost in the metaverse. Help us find it on Telegram!",
          "The AI is practicing social distancing from bugs. Social interactions welcome on Telegram!",
          "Currently upgrading from Web3 to Web3.1415926... Pie charts on Telegram!",
          "Our AI is busy calculating the meaning of life. Spoiler alerts on Telegram!",
          "The AI is learning to speak Solidity fluently. Language exchange group on Telegram!",
          "System hibernating after attempting to understand Bitcoin whitepaper backwards. Wake-up call scheduled on Telegram!",
        ],
        g = (0, l.forwardRef)((e, t) => {
          let { isAtTop: s = !0 } = e,
            [a, n] = (0, l.useState)(!1),
            [o, c] = (0, l.useState)("");
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("header", {
                className: (0, i.Z)(h().header, s && h()["at-top"]),
                ref: t,
                children: (0, r.jsxs)("div", {
                  className: h().navbar,
                  children: [
                    (0, r.jsx)("div", { className: h().blurBackground }),
                    (0, r.jsxs)("div", {
                      className: (0, i.Z)("layout-block", h().head),
                      children: [
                        (0, r.jsx)("div", {
                          className: h().logoWrapper,
                          children: (0, r.jsx)(m(), {
                            src: "/images/VRAM Green.svg",
                            alt: "NVDA.AI Logo",
                            width: 180,
                            height: 60,
                            className: h().logo,
                            priority: !0,
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: h().rightSection,
                          children: [
                            (0, r.jsx)("a", {
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x64af8982049138d669C597C70544181Bf868b52E",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: h().exploreProtocol,
                              children: "Buy $NVDA",
                            }),
                            (0, r.jsx)("a", {
                              href: "https://app.vramai.xyz/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: h().exploreProtocol,
                              children: "Open App",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(Popup, {
                message: o,
                isOpen: a,
                onClose: () => n(!1),
              }),
            ],
          });
        });
      g.displayName = "Header";
      var x = s(7349),
        j = s(6908),
        b = s(333),
        f = s(2245),
        v = s(4570),
        N = s(2432),
        A = s(3878),
        k = s.n(A),
        y = s(5289),
        w = s(3988),
        T = s(968),
        I = s(4275),
        S = s.n(I);
      let Z = k()(() => s.e(659).then(s.bind(s, 9659)), {
        loadableGenerated: { webpack: () => [9659] },
        ssr: !1,
      });
      k()(() => s.e(868).then(s.bind(s, 3868)), {
        loadableGenerated: { webpack: () => [3868] },
        ssr: !1,
      }),
        k()(() => s.e(809).then(s.bind(s, 8809)), {
          loadableGenerated: { webpack: () => [8809] },
          ssr: !1,
        });
      let M = k()(
          () =>
            s
              .e(847)
              .then(s.bind(s, 4847))
              .then((e) => e.Parallax),
          { loadableGenerated: { webpack: () => [4847] }, ssr: !1 }
        ),
        R = k()(
          () =>
            s
              .e(87)
              .then(s.bind(s, 1087))
              .then((e) => e.HorizontalSlides),
          { loadableGenerated: { webpack: () => [1087] }, ssr: !1 }
        );
      k()(
        () =>
          s
            .e(133)
            .then(s.bind(s, 7133))
            .then((e) => e.FeatureCards),
        { loadableGenerated: { webpack: () => [7133] }, ssr: !1 }
      );
      let P = k()(
        () =>
          Promise.all([s.e(255), s.e(743), s.e(887), s.e(46)])
            .then(s.bind(s, 46))
            .then((e) => {
              let { WebGL: t } = e;
              return t;
            }),
        { loadableGenerated: { webpack: () => [46] }, ssr: !1 }
      );
      var E = !0;
      function Home() {
        let [e, t] = (0, l.useState)(!1),
          s = (0, l.useRef)(null),
          [c, h] = (0, a.EL)(),
          { height: d } = (0, w.Z)();
        (0, N.o)((e) => {
          let { introOut: t } = e;
          return t;
        });
        let m = (0, l.useRef)(null),
          [u, _] = (0, l.useState)("dark"),
          p = (0, N.o)((e) => {
            let { lenis: t } = e;
            return t;
          });
        (0, f.useControls)(
          "lenis",
          () => ({
            stop: (0, f.button)(() => {
              p.stop();
            }),
            start: (0, f.button)(() => {
              p.start();
            }),
          }),
          [p]
        ),
          (0, f.useControls)(
            "scrollTo",
            () => ({
              immediate: (0, f.button)(() => {
                p.scrollTo(3e4, { immediate: !0 });
              }),
              smoothDuration: (0, f.button)(() => {
                p.scrollTo(3e4, { lock: !0, duration: 10 });
              }),
              smooth: (0, f.button)(() => {
                p.scrollTo(3e4);
              }),
              forceScrollTo: (0, f.button)(() => {
                p.scrollTo(3e4, { force: !0 });
              }),
            }),
            [p]
          ),
          (0, j.v)((e) => {
            let { scroll: r } = e;
            if ((t(r > 10), !h.top)) return;
            let a = h.top + 0.3 * d,
              i = h.top + h.height - 0.8 * d,
              n = (0, v.uZ)(0, (0, v.KK)(a, i, r, 0, 1), 1),
              o = (0, v.uZ)(0, (0, v.KK)(0, 0.4, n, 0, 1), 1),
              l = (0, v.uZ)(0, (0, v.KK)(0.37, 0.8, n, 0, 1), 1);
            _(1 === l ? "light" : "dark"),
              s.current.style.setProperty("--progress1", o),
              s.current.style.setProperty("--progress2", l),
              1 === n
                ? s.current.style.setProperty(
                    "background-color",
                    "currentColor"
                  )
                : s.current.style.removeProperty("background-color");
          });
        let [A, k] = (0, a.EL)(),
          [I, E] = (0, a.EL)(),
          [V, C] = (0, a.EL)(),
          [G, O] = (0, a.EL)(),
          [W, L] = (0, a.EL)(),
          B = (0, N.o)((e) => {
            let { addThreshold: t } = e;
            return t;
          });
        (0, a.bt)(() => {
          B({ id: "top", value: 0 });
        }, []),
          (0, a.bt)(() => {
            let e = k.top - d / 2;
            B({ id: "why-start", value: e }),
              B({ id: "why-end", value: e + k.height });
          }, [k]),
          (0, a.bt)(() => {
            let e = E.top - d / 2;
            B({ id: "cards-start", value: e }),
              B({ id: "cards-end", value: e + E.height }),
              B({ id: "red-end", value: e + E.height + d });
          }, [E]),
          (0, a.bt)(() => {
            let e = C.top - d;
            B({ id: "light-start", value: e });
          }, [C]),
          (0, a.bt)(() => {
            let e = O.top;
            B({ id: "features", value: e });
          }, [O]),
          (0, a.bt)(() => {
            let e = L.top;
            B({ id: "in-use", value: e });
          }, [L]),
          (0, a.bt)(() => {
            let e = null == p ? void 0 : p.limit;
            B({ id: "end", value: e });
          }, [null == p ? void 0 : p.limit]),
          (0, j.v)((e) => {});
        let H = (0, l.useRef)(),
          [z, q] = (0, l.useState)(!1),
          $ = (0, T.Z)(H, { threshold: 0.2 });
        (0, l.useEffect)(() => {
          (null == $ ? void 0 : $.isIntersecting) && q(!0);
        }, [$]),
          (0, y.useRouter)();
        let [D, J] = (0, l.useState)(!1);
        return (0, r.jsxs)(b.A, {
          theme: u,
          seo: {
            title: "NVDA - AI Agents on ETH |",
            description:
              "NVDA is revolutionizing the blockchain space with AI-powered solutions on the Eth network, empowering users with innovative tools and technologies.",
            keywords: [
              "NVDA",
              "AI",
              "blockchain",
              "Eth",
              "machine learning",
              "AI Agents",
              "Eth network",
              "blockchain technology",
            ],
            image: "/og-image.jpg",
          },
          className: S().home,
          children: [
            (0, r.jsx)(g, { ref: m, isAtTop: !e }),
            (0, r.jsx)("div", {
              className: S().canvas,
              children: (0, r.jsx)(P, {}),
            }),
            (0, r.jsxs)("section", {
              className: S().hero,
              children: [
                (0, r.jsxs)("div", {
                  className: "layout-grid-inner",
                  children: [
                    (0, r.jsx)(Z, {
                      className: (0, i.Z)(S().icon, {
                        "white-background": "light" === u,
                      }),
                    }),
                    (0, r.jsxs)("span", {
                      className: S().sub,
                      children: [
                        (0, r.jsx)("h2", {
                          className: (0, i.Z)("h3", S().subtitle),
                          children: "A new era of AI Agents on ETH",
                        }),
                        (0, r.jsx)("h2", {
                          className: (0, i.Z)("p-xs", S().tm),
                          children: "POWERED BY $NVDA",
                        }),
                        (0, r.jsxs)("div", {
                          className: S().scrollArrow,
                          children: [
                            (0, r.jsx)("svg", {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: (0, r.jsx)("path", {
                                d: "M12 4L12 20M12 20L18 14M12 20L6 14",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                            (0, r.jsx)("span", { children: "Scroll" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: (0, i.Z)(S().bottom, "layout-grid"),
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, i.Z)(
                        "hide-on-mobile",
                        S()["scroll-hint"],
                        e && S().hide
                      ),
                      children: (0, r.jsxs)("div", {
                        className: S().text,
                        children: [
                          (0, r.jsx)("p", { children: "scroll" }),
                          (0, r.jsx)("p", { children: "to explore" }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("h1", {
                      className: (0, i.Z)(S().description, "p-s"),
                      children: [
                        (0, r.jsx)("p", {
                          className: "p-s",
                          children: "TGE Coming Soon",
                        }),
                        (0, r.jsxs)("p", {
                          className: "p-s",
                          children: [
                            (0, r.jsx)(x.r, {
                              href: "https://x.com/vram_ai_agent",
                              className: "contrast",
                              children: "Follow us",
                            }),
                            " to be notified",
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(n.z, {
                      className: S().cta,
                      arrow: !0,
                      href: "https://t.me/vram_ai_portal",
                      children: "Register for TGE",
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("section", {
              className: S().why,
              "data-lenis-scroll-snap-align": "start",
              children: (0, r.jsxs)("div", {
                className: "layout-grid",
                children: [
                  (0, r.jsx)("h2", {
                    className: (0, i.Z)(S().sticky, "h2"),
                    children: "Why NVDA Agents?",
                  }),
                  (0, r.jsxs)("aside", {
                    className: S().features,
                    ref: A,
                    children: [
                      (0, r.jsxs)("div", {
                        className: S().feature,
                        children: [
                          (0, r.jsx)("h3", {
                            className: (0, i.Z)(S().title, "h4"),
                            children: "$NVDA = AI Power",
                          }),
                          (0, r.jsx)("p", {
                            className: "p",
                            children:
                              "Stack $NVDA to enhance your AI agent's capabilities. The more $NVDA stacked, the more powerful features you unlock.",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: S().feature,
                        children: [
                          (0, r.jsx)("h3", {
                            className: (0, i.Z)(S().title, "h4"),
                            children: "Create & Build",
                          }),
                          (0, r.jsxs)("p", {
                            className: "p",
                            children: [
                              "Create autonomous AI agents that evolve",
                              (0, r.jsx)("br", {}),
                              "Watch them learn, adapt, and grow smarter",
                              (0, r.jsx)("br", {}),
                              "Stake $NVDA to unlock their true potential",
                              (0, r.jsx)("br", {}),
                              "Join the future of AI-native intelligence",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: S().feature,
                        children: [
                          (0, r.jsx)("h3", {
                            className: (0, i.Z)(S().title, "h4"),
                            children: "Trading & Liquidity",
                          }),
                          (0, r.jsxs)("p", {
                            className: "p",
                            children: [
                              "Invest by providing $NVDA to AI agents in the Launchpad.",
                              (0, r.jsx)("br", {}),
                              "Copy trades with AI agents",
                              (0, r.jsx)("br", {}),
                              "Stake $NVDA to earn $NVDA rewards",
                              (0, r.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: S().feature,
                        children: [
                          (0, r.jsx)("h3", {
                            className: (0, i.Z)(S().title, "h4"),
                            children: "AI Integration",
                          }),
                          (0, r.jsxs)("p", {
                            className: "p",
                            children: [
                              "Empower AI agents with $NVDA",
                              (0, r.jsx)("br", {}),
                              "Make all vram.ai connecting with web2 api like youtube tiktok, telegram",
                              (0, r.jsx)("br", {}),
                              "Access advanced AI features shared by vram.ai",
                              (0, r.jsx)("br", {}),
                              "Cross-chain AI functionality ",
                              (0, r.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("section", {
              className: S().rethink,
              children: [
                (0, r.jsxs)("div", {
                  className: (0, i.Z)("layout-grid", S().pre),
                  children: [
                    (0, r.jsx)("div", {
                      className: S().highlight,
                      "data-lenis-scroll-snap-align": "start",
                      children: (0, r.jsx)(M, {
                        speed: -0.5,
                        children: (0, r.jsx)("p", {
                          className: "h2",
                          children: "Rethinking the AI futures",
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: S().comparison,
                      children: (0, r.jsx)(M, {
                        speed: 0.5,
                        children: (0, r.jsx)("p", {
                          className: "p",
                          children:
                            "Our vision is the future of AI: Making them able to optimize the NVDA usage to make them sentient producing value for their IP",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: S().cards,
                  ref: I,
                  children: (0, r.jsxs)(R, {
                    children: [
                      (0, r.jsx)(o.Z, {
                        className: S().card,
                        number: "Trading",
                        text: "AI-Powered Trading Strategies",
                        image: "/images/trading.jpeg",
                      }),
                      (0, r.jsx)(o.Z, {
                        className: S().card,
                        number: "DAO",
                        text: "Automated DAO Management",
                        image: "/images/portfolio.jpeg",
                      }),
                      (0, r.jsx)(o.Z, {
                        className: S().card,
                        number: "Music",
                        text: "Creating high quality content",
                        image: "/images/music.jpeg",
                      }),
                      (0, r.jsx)(o.Z, {
                        className: S().card,
                        number: "Movies",
                        text: "AI-Powered Movie Production",
                        image: "/images/drama.jpeg",
                      }),
                      (0, r.jsx)(o.Z, {
                        className: S().card,
                        number: "ARMY",
                        text: "Cross AI functionality",
                        image: "/images/army.jpeg",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)("section", {
              ref: (e) => {
                c(e), (s.current = e);
              },
              className: S().solution,
              children: (0, r.jsx)("div", {
                className: S().inner,
                children: (0, r.jsxs)("div", {
                  className: S().zoom,
                  children: [
                    (0, r.jsxs)("h2", {
                      className: (0, i.Z)(S().first, "h1 vh"),
                      children: [
                        "Pre-TGE Phase",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("span", {
                          className: "contrast",
                          children: "HOW TO GET",
                        }),
                      ],
                    }),
                    (0, r.jsx)("h2", {
                      className: (0, i.Z)(S().enter, "h2 vh"),
                      children: (0, r.jsx)("span", {
                        className: S().getText,
                        children: "$NVDA",
                      }),
                    }),
                    (0, r.jsx)("h2", {
                      className: (0, i.Z)(S().second, "h1 vh"),
                      children: "You are early!",
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)("section", {
              className: (0, i.Z)("theme-light", S().featuring),
              ref: V,
              children: (0, r.jsx)("div", {
                className: S().inner,
                children: (0, r.jsxs)("div", {
                  className: (0, i.Z)("layout-block", S().intro),
                  children: [
                    (0, r.jsxs)("p", {
                      className: "p-l",
                      children: [
                        "NVDA is ",
                        " ",
                        (0, r.jsx)(x.r, {
                          className: "contrast semi-bold",
                          href: "https://t.me/vram_ai_portal",
                          children: "PRE-TGE",
                        }),
                        " ",
                        "phase. ",
                        (0, r.jsx)("br", {}),
                        "Join our ",
                        (0, r.jsx)(x.r, {
                          className: "contrast semi-bold",
                          href: "https://t.me/vram_ai_portal",
                          children: "Telegram",
                        }),
                        " ",
                        "  to get ",
                        (0, r.jsx)(x.r, {
                          className: "contrast semi-bold",
                          href: "https://t.me/vram_ai_portal",
                          children: "$NVDA",
                        }),
                        " ",
                        "before everybody else!",
                      ],
                    }),
                    (0, r.jsx)("p", {
                      className: (0, i.Z)("p", S().announcement),
                      children:
                        "Announcement date will be shared on our social media channels",
                    }),
                    (0, r.jsx)("div", {
                      className: S().tokenomicsWrapper,
                      children: (0, r.jsxs)("table", {
                        className: S().table,
                        children: [
                          (0, r.jsx)("thead", {
                            children: (0, r.jsxs)("tr", {
                              children: [
                                (0, r.jsx)("th", { children: "Tokenomics" }),
                                (0, r.jsx)("th", { children: "" }),
                                (0, r.jsx)("th", { children: "" }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("tbody", {
                            children: [

                              (0, r.jsxs)("tr", {
                                children: [
                                  (0, r.jsx)("td", {
                                    children: "Liquidity Pool",
                                  }),
                                  (0, r.jsx)("td", { children: "LP Burned" }),
                                ],
                              }),
                              (0, r.jsxs)("tr", {
                                children: [
                                  (0, r.jsx)("td", {
                                    children: "Tax",
                                  }),
                                  (0, r.jsx)("td", { children: "0% Buy/Sell Tax" }),
                                ],
                              }),
                              (0, r.jsxs)("tr", {
                                children: [
                                  (0, r.jsx)("td", {
                                    children: "Ownership",
                                  }),
                                  (0, r.jsx)("td", { children: "Ownership Renounced" }),
                                ],
                              }),
                              (0, r.jsxs)("tr", {
                                className: S().total,
                                children: [
                                  (0, r.jsx)("td", {
                                    children: "Total Supply",
                                  }),
                                  (0, r.jsx)("td", { children: "1,000,000,000" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, r.jsx)("section", {
              ref: (e) => {
                W(e), (H.current = e);
              },
              className: (0, i.Z)(
                "theme-light",
                S()["in-use"],
                z && S().visible
              ),
            }),
          ],
        });
      }
    },
    5402: function (e) {
      e.exports = {
        wrapper: "card_wrapper__80Ntc",
        inverted: "card_inverted__qE_BX",
        imageWrapper: "card_imageWrapper__2R6is",
        cardImage: "card_cardImage__uZr6S",
        content: "card_content__iVqcu",
        number: "card_number____g_e",
        text: "card_text__hXVyg",
      };
    },
    6452: function (e) {
      e.exports = {
        header: "header_header__pwrbs",
        navbar: "header_navbar__kkst0",
        blurBackground: "header_blurBackground__j5xSk",
        head: "header_head__1IIxT",
        logoWrapper: "header_logoWrapper__tSXEH",
        logo: "header_logo__AqbZa",
        rightSection: "header_rightSection__wX1VY",
        exploreProtocol: "header_exploreProtocol__c4rBv",
        openApp: "header_openApp__2MYbi",
        "at-top": "header_at-top__S13j1",
      };
    },
    5634: function (e) {
      e.exports = {
        popup: "popup_popup__q1CVw",
        visible: "popup_visible__qH_wi",
        content: "popup_content__xqgle",
      };
    },
    4275: function (e) {
      e.exports = {
        home: "home_home__3Her2",
        canvas: "home_canvas__mWQfy",
        "hide-text": "home_hide-text__jGIyi",
        "show-text": "home_show-text__z9ExL",
        hero: "home_hero__TJz4n",
        title: "home_title__Ddv9x",
        icon: "home_icon__9Rs9V",
        sub: "home_sub__hHQk9",
        subtitle: "home_subtitle__XS_o_",
        tm: "home_tm__GvqZn",
        scrollArrow: "home_scrollArrow__4EOsA",
        bottom: "home_bottom__QGy5P",
        "scroll-hint": "home_scroll-hint__kGdBt",
        text: "home_text__Jgdht",
        hide: "home_hide__p8w4f",
        description: "home_description__2LOMV",
        cta: "home_cta__5_2Q_",
        why: "home_why__WN_ax",
        sticky: "home_sticky__s8_O2",
        features: "home_features__8F37d",
        feature: "home_feature__sub9k",
        rethink: "home_rethink__a3Ua4",
        pre: "home_pre__JyWxG",
        highlight: "home_highlight___Cmfv",
        comparison: "home_comparison__ZIj8c",
        cards: "home_cards__AiTYB",
        card: "home_card__BOiml",
        tokenomicsWrapper: "home_tokenomicsWrapper__8f0mc",
        announcement: "home_announcement__Luga6",
        table: "home_table__Rmm89",
        total: "home_total__62p9A",
        solution: "home_solution__zwG4j",
        inner: "home_inner__7UbYH",
        zoom: "home_zoom__grwXa",
        getText: "home_getText__28TVg",
        first: "home_first__AsskJ",
        second: "home_second__xDR5W",
        enter: "home_enter__AOz9m",
        featuring: "home_featuring__9tgu5",
        grid: "home_grid__eUamX",
        item: "home_item__hE61P",
        tokenomicsSection: "home_tokenomicsSection__Ec_EQ",
        "in-use": "home_in-use__fdhU2",
        list: "home_list__k7zA3",
        temp: "home_temp__VysBX",
        animate: "home_animate__Q5s_A",
        scrollBounce: "home_scrollBounce__tGOgB",
      };
    },
  },
]);
