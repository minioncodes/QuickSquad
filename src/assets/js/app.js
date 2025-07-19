document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");
  const searchBox = document.getElementById("search-box");

  searchIcon.addEventListener("click", function (event) {
      event.preventDefault();
      searchContainer.classList.add("active");
      searchBox.focus();
  });

  searchBox.addEventListener("blur", function () {
      searchContainer.classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const searchIcons = document.querySelectorAll("#search-icon, #search-icon-desktop, #search-icon-mobile");
  const searchContainers = document.querySelectorAll(".search-container, .search-container-mobile");
  const searchBoxes = document.querySelectorAll("#search-box, #search-box-desktop, #search-box-mobile");

  // Create dropdown dynamically
  searchContainers.forEach(searchContainer => {
      const dropdown = document.createElement("div");
      dropdown.classList.add("search-dropdown");
      searchContainer.appendChild(dropdown);
  });

  const links = [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "Contact", url: "/contact" },
      { name: "Our Services", url: "/services" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Subscription", url: "/plans" },
      { name: "Frequently asked questions", url: "/faq-page" },
      { name: "Speed Test", url: "/speedtest" },
      { name: "Terms of service", url: "/terms-of-service" },
      { name: "Testimonials", url: "/testimonials" },
      { name: "How to Fix Slow Internet and Connectivity Issues", url: "/blogs/Slow-Internet-Issues" },
      { name: "Common Computer Problems & How to Fix Them", url: "/Blogs/Computer-Problem" },
      { name: "Protecting Your Devices from Viruses & Malware", url: "/Blogs/Protecting-Your-Devices-from-Viruses-&-Malware" },
      { name: "Remote Tech Support: How It Works & When You Need It", url: "/Blogs/Remote-Tech-Support" },
      { name: "Best Tips to Optimize Your PC Performance", url: "/Blogs/Best-Tips-to-Optimize-Your-PC-Performance" },
      { name: "The Most Frequent Questions We Get at Our Help Desk", url: "/Blogs/help-desk-questions" },
      { name: "Millennials and Gen Z are digital natives, but their preferences in customer support are surprisingly different. Understanding these differences helps businesses deliver better, tailored experiences.", url: "/Blogs/tech-support" },
      { name: "How AI Chatbots Are Revolutionizing Tech Support", url: "/Blogs/AI-Powered" },
      { name: "How Artificial Intelligence Can Improve IT for Businesses", url: "/Blogs/ai-in-it-support" },
      { name: "Standard Operating Procedures (SOPs) and Training", url: "/Blogs/Standard_Operating_Procedures" },
      { name: "How Remote Support Works: Behind the Scenes of Fixing Tech Issues", url: "/blogs/How_Remote_Support_Works" },
      { name: "How to Secure Your System During Remote Support Sessions", url: "/blogs/Secure_Remote_Support_Sessions" }
  ];

  function setupSearch(searchIcon, searchContainer, searchBox) {
      if (!searchIcon || !searchContainer || !searchBox) return;

      const dropdown = searchContainer.querySelector(".search-dropdown");

      // Show input when clicking the search icon
      searchIcon.addEventListener("click", function (event) {
          event.preventDefault();
          searchContainer.classList.add("active"); // Show input
          searchBox.focus(); // Auto-focus input
      });

      // Handle input changes for search
      searchBox.addEventListener("input", function () {
          const searchText = searchBox.value.toLowerCase();
          dropdown.innerHTML = "";

          if (searchText.length > 0) {
              const filteredLinks = links.filter(link => link.name.toLowerCase().includes(searchText));
              dropdown.style.display = "block";

              filteredLinks.forEach(link => {
                  const item = document.createElement("a");
                  item.href = link.url;
                  item.textContent = link.name;
                  item.classList.add("dropdown-item");
                  dropdown.appendChild(item);
              });
          } else {
              dropdown.style.display = "none";
          }
      });

      // Hide search input & dropdown when clicking outside
      document.addEventListener("click", function (event) {
          if (!searchContainer.contains(event.target)) {
              searchContainer.classList.remove("active"); // Hide input
              dropdown.style.display = "none"; // Hide dropdown
          }
      });
  }

  // Apply search functionality for both desktop & mobile
  setupSearch(
      document.getElementById("search-icon-desktop"),
      document.querySelector(".search-container"),
      document.getElementById("search-box-desktop")
  );

  setupSearch(
      document.getElementById("search-icon-mobile"),
      document.querySelector(".search-container-mobile"),
      document.getElementById("search-box-mobile")
  );
});
// Initialize with first 5 categories
document.addEventListener("DOMContentLoaded", () => {
  initializeCategories(5);
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formSubs").action = "https://quicksquad-mail.up.railway.app/send-email";
});
(() => {
  var c_ = Object.create;
  var fn = Object.defineProperty;
  var l_ = Object.getOwnPropertyDescriptor;
  var f_ = Object.getOwnPropertyNames;
  var d_ = Object.getPrototypeOf,
    p_ = Object.prototype.hasOwnProperty;
  var ye = (e, t) => () => (e && (t = e((e = 0))), t);
  var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ue = (e, t) => {
      for (var r in t) fn(e, r, { get: t[r], enumerable: !0 });
    },
    ks = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of f_(t))
          !p_.call(e, i) &&
            i !== r &&
            fn(e, i, {
              get: () => t[i],
              enumerable: !(n = l_(t, i)) || n.enumerable,
            });
      return e;
    };
  var pe = (e, t, r) => (
      (r = e != null ? c_(d_(e)) : {}),
      ks(
        t || !e || !e.__esModule
          ? fn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    it = (e) => ks(fn({}, "__esModule", { value: !0 }), e);
  var Gs = l(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) >= 16 : !1;
      if ("objectFit" in document.documentElement.style && !t) {
        window.objectFitPolyfill = function () {
          return !1;
        };
        return;
      }
      let n = function (a) {
          let u = window.getComputedStyle(a, null),
            d = u.getPropertyValue("position"),
            E = u.getPropertyValue("overflow"),
            f = u.getPropertyValue("display");
          (!d || d === "static") && (a.style.position = "relative"),
            E !== "hidden" && (a.style.overflow = "hidden"),
            (!f || f === "inline") && (a.style.display = "block"),
            a.clientHeight === 0 && (a.style.height = "100%"),
            a.className.indexOf("object-fit-polyfill") === -1 &&
              (a.className += " object-fit-polyfill");
        },
        i = function (a) {
          let u = window.getComputedStyle(a, null),
            d = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px",
            };
          for (let E in d)
            u.getPropertyValue(E) !== d[E] && (a.style[E] = d[E]);
        },
        o = function (a) {
          let u = a.parentNode;
          n(u),
            i(a),
            (a.style.position = "absolute"),
            (a.style.height = "100%"),
            (a.style.width = "auto"),
            a.clientWidth > u.clientWidth
              ? ((a.style.top = "0"),
                (a.style.marginTop = "0"),
                (a.style.left = "50%"),
                (a.style.marginLeft = a.clientWidth / -2 + "px"))
              : ((a.style.width = "100%"),
                (a.style.height = "auto"),
                (a.style.left = "0"),
                (a.style.marginLeft = "0"),
                (a.style.top = "50%"),
                (a.style.marginTop = a.clientHeight / -2 + "px"));
        },
        s = function (a) {
          if (typeof a > "u" || a instanceof Event)
            a = document.querySelectorAll("[data-object-fit]");
          else if (a && a.nodeName) a = [a];
          else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
          else return !1;
          for (let u = 0; u < a.length; u++) {
            if (!a[u].nodeName) continue;
            let d = a[u].nodeName.toLowerCase();
            if (d === "img") {
              if (t) continue;
              a[u].complete
                ? o(a[u])
                : a[u].addEventListener("load", function () {
                    o(this);
                  });
            } else
              d === "video"
                ? a[u].readyState > 0
                  ? o(a[u])
                  : a[u].addEventListener("loadedmetadata", function () {
                      o(this);
                    })
                : o(a[u]);
          }
          return !0;
        };
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", s)
        : s(),
        window.addEventListener("resize", s),
        (window.objectFitPolyfill = s);
    })();
  });
  var Us = l(() => {
    "use strict";
    (function () {
      if (typeof window > "u") return;
      function e(n) {
        Webflow.env("design") ||
          ($("video").each(function () {
            n && $(this).prop("autoplay") ? this.play() : this.pause();
          }),
          $(".w-background-video--control").each(function () {
            n ? r($(this)) : t($(this));
          }));
      }
      function t(n) {
        n.find("> span").each(function (i) {
          $(this).prop("hidden", () => i === 0);
        });
      }
      function r(n) {
        n.find("> span").each(function (i) {
          $(this).prop("hidden", () => i === 1);
        });
      }
      $(document).ready(() => {
        let n = window.matchMedia("(prefers-reduced-motion: reduce)");
        n.addEventListener("change", (i) => {
          e(!i.matches);
        }),
          n.matches && e(!1),
          $("video:not([autoplay])").each(function () {
            $(this)
              .parent()
              .find(".w-background-video--control")
              .each(function () {
                t($(this));
              });
          }),
          $(document).on("click", ".w-background-video--control", function (i) {
            if (Webflow.env("design")) return;
            let o = $(i.currentTarget),
              s = $(`video#${o.attr("aria-controls")}`).get(0);
            if (s)
              if (s.paused) {
                let a = s.play();
                r(o),
                  a &&
                    typeof a.catch == "function" &&
                    a.catch(() => {
                      t(o);
                    });
              } else s.pause(), t(o);
          });
      });
    })();
  });
  var Fi = l(() => {
    "use strict";
    window.tram = (function (e) {
      function t(p, T) {
        var S = new v.Bare();
        return S.init(p, T);
      }
      function r(p) {
        return p.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(p) {
        var T = parseInt(p.slice(1), 16),
          S = (T >> 16) & 255,
          q = (T >> 8) & 255,
          O = 255 & T;
        return [S, q, O];
      }
      function i(p, T, S) {
        return (
          "#" + ((1 << 24) | (p << 16) | (T << 8) | S).toString(16).slice(1)
        );
      }
      function o() {}
      function s(p, T) {
        d("Type warning: Expected: [" + p + "] Got: [" + typeof T + "] " + T);
      }
      function a(p, T, S) {
        d("Units do not match [" + p + "]: " + T + ", " + S);
      }
      function u(p, T, S) {
        if ((T !== void 0 && (S = T), p === void 0)) return S;
        var q = S;
        return (
          Te.test(p) || !Le.test(p)
            ? (q = parseInt(p, 10))
            : Le.test(p) && (q = 1e3 * parseFloat(p)),
          0 > q && (q = 0),
          q === q ? q : S
        );
      }
      function d(p) {
        oe.debug && window && window.console.warn(p);
      }
      function E(p) {
        for (var T = -1, S = p ? p.length : 0, q = []; ++T < S; ) {
          var O = p[T];
          O && q.push(O);
        }
        return q;
      }
      var f = (function (p, T, S) {
          function q(se) {
            return typeof se == "object";
          }
          function O(se) {
            return typeof se == "function";
          }
          function k() {}
          function ie(se, ge) {
            function J() {
              var Me = new ce();
              return O(Me.init) && Me.init.apply(Me, arguments), Me;
            }
            function ce() {}
            ge === S && ((ge = se), (se = Object)), (J.Bare = ce);
            var le,
              Ie = (k[p] = se[p]),
              nt = (ce[p] = J[p] = new k());
            return (
              (nt.constructor = J),
              (J.mixin = function (Me) {
                return (ce[p] = J[p] = ie(J, Me)[p]), J;
              }),
              (J.open = function (Me) {
                if (
                  ((le = {}),
                  O(Me) ? (le = Me.call(J, nt, Ie, J, se)) : q(Me) && (le = Me),
                  q(le))
                )
                  for (var wr in le) T.call(le, wr) && (nt[wr] = le[wr]);
                return O(nt.init) || (nt.init = se), J;
              }),
              J.open(ge)
            );
          }
          return ie;
        })("prototype", {}.hasOwnProperty),
        I = {
          ease: [
            "ease",
            function (p, T, S, q) {
              var O = (p /= q) * p,
                k = O * p;
              return (
                T +
                S * (-2.75 * k * O + 11 * O * O + -15.5 * k + 8 * O + 0.25 * p)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (p, T, S, q) {
              var O = (p /= q) * p,
                k = O * p;
              return T + S * (-1 * k * O + 3 * O * O + -3 * k + 2 * O);
            },
          ],
          "ease-out": [
            "ease-out",
            function (p, T, S, q) {
              var O = (p /= q) * p,
                k = O * p;
              return (
                T +
                S * (0.3 * k * O + -1.6 * O * O + 2.2 * k + -1.8 * O + 1.9 * p)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (p, T, S, q) {
              var O = (p /= q) * p,
                k = O * p;
              return T + S * (2 * k * O + -5 * O * O + 2 * k + 2 * O);
            },
          ],
          linear: [
            "linear",
            function (p, T, S, q) {
              return (S * p) / q + T;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (p, T, S, q) {
              return S * (p /= q) * p + T;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (p, T, S, q) {
              return -S * (p /= q) * (p - 2) + T;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (p, T, S, q) {
              return (p /= q / 2) < 1
                ? (S / 2) * p * p + T
                : (-S / 2) * (--p * (p - 2) - 1) + T;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (p, T, S, q) {
              return S * (p /= q) * p * p + T;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (p, T, S, q) {
              return S * ((p = p / q - 1) * p * p + 1) + T;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (p, T, S, q) {
              return (p /= q / 2) < 1
                ? (S / 2) * p * p * p + T
                : (S / 2) * ((p -= 2) * p * p + 2) + T;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (p, T, S, q) {
              return S * (p /= q) * p * p * p + T;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (p, T, S, q) {
              return -S * ((p = p / q - 1) * p * p * p - 1) + T;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (p, T, S, q) {
              return (p /= q / 2) < 1
                ? (S / 2) * p * p * p * p + T
                : (-S / 2) * ((p -= 2) * p * p * p - 2) + T;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (p, T, S, q) {
              return S * (p /= q) * p * p * p * p + T;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (p, T, S, q) {
              return S * ((p = p / q - 1) * p * p * p * p + 1) + T;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (p, T, S, q) {
              return (p /= q / 2) < 1
                ? (S / 2) * p * p * p * p * p + T
                : (S / 2) * ((p -= 2) * p * p * p * p + 2) + T;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (p, T, S, q) {
              return -S * Math.cos((p / q) * (Math.PI / 2)) + S + T;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (p, T, S, q) {
              return S * Math.sin((p / q) * (Math.PI / 2)) + T;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (p, T, S, q) {
              return (-S / 2) * (Math.cos((Math.PI * p) / q) - 1) + T;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (p, T, S, q) {
              return p === 0 ? T : S * Math.pow(2, 10 * (p / q - 1)) + T;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (p, T, S, q) {
              return p === q
                ? T + S
                : S * (-Math.pow(2, (-10 * p) / q) + 1) + T;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (p, T, S, q) {
              return p === 0
                ? T
                : p === q
                ? T + S
                : (p /= q / 2) < 1
                ? (S / 2) * Math.pow(2, 10 * (p - 1)) + T
                : (S / 2) * (-Math.pow(2, -10 * --p) + 2) + T;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (p, T, S, q) {
              return -S * (Math.sqrt(1 - (p /= q) * p) - 1) + T;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (p, T, S, q) {
              return S * Math.sqrt(1 - (p = p / q - 1) * p) + T;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (p, T, S, q) {
              return (p /= q / 2) < 1
                ? (-S / 2) * (Math.sqrt(1 - p * p) - 1) + T
                : (S / 2) * (Math.sqrt(1 - (p -= 2) * p) + 1) + T;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (p, T, S, q, O) {
              return (
                O === void 0 && (O = 1.70158),
                S * (p /= q) * p * ((O + 1) * p - O) + T
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (p, T, S, q, O) {
              return (
                O === void 0 && (O = 1.70158),
                S * ((p = p / q - 1) * p * ((O + 1) * p + O) + 1) + T
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (p, T, S, q, O) {
              return (
                O === void 0 && (O = 1.70158),
                (p /= q / 2) < 1
                  ? (S / 2) * p * p * (((O *= 1.525) + 1) * p - O) + T
                  : (S / 2) *
                      ((p -= 2) * p * (((O *= 1.525) + 1) * p + O) + 2) +
                    T
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        w = window,
        C = "bkwld-tram",
        A = /[\-\.0-9]/g,
        P = /[A-Z]/,
        L = "number",
        D = /^(rgb|#)/,
        G = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        K = /(deg|rad|turn)$/,
        z = "unitless",
        Q = /(all|none) 0s ease 0s/,
        re = /^(width|height)$/,
        j = " ",
        R = y.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (p) {
          if (p in R.style) return { dom: p, css: p };
          var T,
            S,
            q = "",
            O = p.split("-");
          for (T = 0; T < O.length; T++)
            q += O[T].charAt(0).toUpperCase() + O[T].slice(1);
          for (T = 0; T < _.length; T++)
            if (((S = _[T] + q), S in R.style))
              return { dom: S, css: N[T] + p };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (H.transition) {
        var te = H.timing.dom;
        if (((R.style[te] = I["ease-in-back"][0]), !R.style[te]))
          for (var ne in m) I[ne][0] = m[ne];
      }
      var W = (t.frame = (function () {
          var p =
            w.requestAnimationFrame ||
            w.webkitRequestAnimationFrame ||
            w.mozRequestAnimationFrame ||
            w.oRequestAnimationFrame ||
            w.msRequestAnimationFrame;
          return p && H.bind
            ? p.bind(w)
            : function (T) {
                w.setTimeout(T, 16);
              };
        })()),
        X = (t.now = (function () {
          var p = w.performance,
            T = p && (p.now || p.webkitNow || p.msNow || p.mozNow);
          return T && H.bind
            ? T.bind(p)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        h = f(function (p) {
          function T(ae, de) {
            var be = E(("" + ae).split(j)),
              ve = be[0];
            de = de || {};
            var qe = Y[ve];
            if (!qe) return d("Unsupported property: " + ve);
            if (!de.weak || !this.props[ve]) {
              var ze = qe[0],
                Ge = this.props[ve];
              return (
                Ge || (Ge = this.props[ve] = new ze.Bare()),
                Ge.init(this.$el, be, qe, de),
                Ge
              );
            }
          }
          function S(ae, de, be) {
            if (ae) {
              var ve = typeof ae;
              if (
                (de ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ve == "number" && de)
              )
                return (
                  (this.timer = new Z({
                    duration: ae,
                    context: this,
                    complete: k,
                  })),
                  void (this.active = !0)
                );
              if (ve == "string" && de) {
                switch (ae) {
                  case "hide":
                    J.call(this);
                    break;
                  case "stop":
                    ie.call(this);
                    break;
                  case "redraw":
                    ce.call(this);
                    break;
                  default:
                    T.call(this, ae, be && be[1]);
                }
                return k.call(this);
              }
              if (ve == "function") return void ae.call(this, this);
              if (ve == "object") {
                var qe = 0;
                nt.call(
                  this,
                  ae,
                  function (we, u_) {
                    we.span > qe && (qe = we.span), we.stop(), we.animate(u_);
                  },
                  function (we) {
                    "wait" in we && (qe = u(we.wait, 0));
                  }
                ),
                  Ie.call(this),
                  qe > 0 &&
                    ((this.timer = new Z({ duration: qe, context: this })),
                    (this.active = !0),
                    de && (this.timer.complete = k));
                var ze = this,
                  Ge = !1,
                  ln = {};
                W(function () {
                  nt.call(ze, ae, function (we) {
                    we.active && ((Ge = !0), (ln[we.name] = we.nextStyle));
                  }),
                    Ge && ze.$el.css(ln);
                });
              }
            }
          }
          function q(ae) {
            (ae = u(ae, 0)),
              this.active
                ? this.queue.push({ options: ae })
                : ((this.timer = new Z({
                    duration: ae,
                    context: this,
                    complete: k,
                  })),
                  (this.active = !0));
          }
          function O(ae) {
            return this.active
              ? (this.queue.push({ options: ae, args: arguments }),
                void (this.timer.complete = k))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function k() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ae = this.queue.shift();
              S.call(this, ae.options, !0, ae.args);
            }
          }
          function ie(ae) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var de;
            typeof ae == "string"
              ? ((de = {}), (de[ae] = 1))
              : (de = typeof ae == "object" && ae != null ? ae : this.props),
              nt.call(this, de, Me),
              Ie.call(this);
          }
          function se(ae) {
            ie.call(this, ae), nt.call(this, ae, wr, a_);
          }
          function ge(ae) {
            typeof ae != "string" && (ae = "block"),
              (this.el.style.display = ae);
          }
          function J() {
            ie.call(this), (this.el.style.display = "none");
          }
          function ce() {
            this.el.offsetHeight;
          }
          function le() {
            ie.call(this),
              e.removeData(this.el, C),
              (this.$el = this.el = null);
          }
          function Ie() {
            var ae,
              de,
              be = [];
            this.upstream && be.push(this.upstream);
            for (ae in this.props)
              (de = this.props[ae]), de.active && be.push(de.string);
            (be = be.join(",")),
              this.style !== be &&
                ((this.style = be), (this.el.style[H.transition.dom] = be));
          }
          function nt(ae, de, be) {
            var ve,
              qe,
              ze,
              Ge,
              ln = de !== Me,
              we = {};
            for (ve in ae)
              (ze = ae[ve]),
                ve in fe
                  ? (we.transform || (we.transform = {}),
                    (we.transform[ve] = ze))
                  : (P.test(ve) && (ve = r(ve)),
                    ve in Y ? (we[ve] = ze) : (Ge || (Ge = {}), (Ge[ve] = ze)));
            for (ve in we) {
              if (((ze = we[ve]), (qe = this.props[ve]), !qe)) {
                if (!ln) continue;
                qe = T.call(this, ve);
              }
              de.call(this, qe, ze);
            }
            be && Ge && be.call(this, Ge);
          }
          function Me(ae) {
            ae.stop();
          }
          function wr(ae, de) {
            ae.set(de);
          }
          function a_(ae) {
            this.$el.css(ae);
          }
          function je(ae, de) {
            p[ae] = function () {
              return this.children
                ? s_.call(this, de, arguments)
                : (this.el && de.apply(this, arguments), this);
            };
          }
          function s_(ae, de) {
            var be,
              ve = this.children.length;
            for (be = 0; ve > be; be++) ae.apply(this.children[be], de);
            return this;
          }
          (p.init = function (ae) {
            if (
              ((this.$el = e(ae)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var de = B(this.el, "transition");
              de && !Q.test(de) && (this.upstream = de);
            }
            H.backface &&
              oe.hideBackface &&
              b(this.el, H.backface.css, "hidden");
          }),
            je("add", T),
            je("start", S),
            je("wait", q),
            je("then", O),
            je("next", k),
            je("stop", ie),
            je("set", se),
            je("show", ge),
            je("hide", J),
            je("redraw", ce),
            je("destroy", le);
        }),
        v = f(h, function (p) {
          function T(S, q) {
            var O = e.data(S, C) || e.data(S, C, new h.Bare());
            return O.el || O.init(S), q ? O.start(q) : O;
          }
          p.init = function (S, q) {
            var O = e(S);
            if (!O.length) return this;
            if (O.length === 1) return T(O[0], q);
            var k = [];
            return (
              O.each(function (ie, se) {
                k.push(T(se, q));
              }),
              (this.children = k),
              this
            );
          };
        }),
        g = f(function (p) {
          function T() {
            var k = this.get();
            this.update("auto");
            var ie = this.get();
            return this.update(k), ie;
          }
          function S(k, ie, se) {
            return ie !== void 0 && (se = ie), k in I ? k : se;
          }
          function q(k) {
            var ie = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(k);
            return (ie ? i(ie[1], ie[2], ie[3]) : k).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var O = { duration: 500, ease: "ease", delay: 0 };
          (p.init = function (k, ie, se, ge) {
            (this.$el = k), (this.el = k[0]);
            var J = ie[0];
            se[2] && (J = se[2]),
              ee[J] && (J = ee[J]),
              (this.name = J),
              (this.type = se[1]),
              (this.duration = u(ie[1], this.duration, O.duration)),
              (this.ease = S(ie[2], this.ease, O.ease)),
              (this.delay = u(ie[3], this.delay, O.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = re.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    j +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? j + I[this.ease][0] : "") +
                    (this.delay ? j + this.delay + "ms" : "")));
          }),
            (p.set = function (k) {
              (k = this.convert(k, this.type)), this.update(k), this.redraw();
            }),
            (p.transition = function (k) {
              (this.active = !0),
                (k = this.convert(k, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  k == "auto" && (k = T.call(this))),
                (this.nextStyle = k);
            }),
            (p.fallback = function (k) {
              var ie =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (k = this.convert(k, this.type)),
                this.auto &&
                  (ie == "auto" && (ie = this.convert(this.get(), this.type)),
                  k == "auto" && (k = T.call(this))),
                (this.tween = new x({
                  from: ie,
                  to: k,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (p.get = function () {
              return B(this.el, this.name);
            }),
            (p.update = function (k) {
              b(this.el, this.name, k);
            }),
            (p.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                b(this.el, this.name, this.get()));
              var k = this.tween;
              k && k.context && k.destroy();
            }),
            (p.convert = function (k, ie) {
              if (k == "auto" && this.auto) return k;
              var se,
                ge = typeof k == "number",
                J = typeof k == "string";
              switch (ie) {
                case L:
                  if (ge) return k;
                  if (J && k.replace(A, "") === "") return +k;
                  se = "number(unitless)";
                  break;
                case D:
                  if (J) {
                    if (k === "" && this.original) return this.original;
                    if (ie.test(k))
                      return k.charAt(0) == "#" && k.length == 7 ? k : q(k);
                  }
                  se = "hex or rgb string";
                  break;
                case G:
                  if (ge) return k + this.unit;
                  if (J && ie.test(k)) return k;
                  se = "number(px) or string(unit)";
                  break;
                case F:
                  if (ge) return k + this.unit;
                  if (J && ie.test(k)) return k;
                  se = "number(px) or string(unit or %)";
                  break;
                case K:
                  if (ge) return k + this.angle;
                  if (J && ie.test(k)) return k;
                  se = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ge || (J && F.test(k))) return k;
                  se = "number(unitless) or string(unit or %)";
              }
              return s(se, k), k;
            }),
            (p.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = f(g, function (p, T) {
          p.init = function () {
            T.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        M = f(g, function (p, T) {
          (p.init = function () {
            T.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (p.get = function () {
              return this.$el[this.name]();
            }),
            (p.update = function (S) {
              this.$el[this.name](S);
            });
        }),
        V = f(g, function (p, T) {
          function S(q, O) {
            var k, ie, se, ge, J;
            for (k in q)
              (ge = fe[k]),
                (se = ge[0]),
                (ie = ge[1] || k),
                (J = this.convert(q[k], se)),
                O.call(this, ie, J, se);
          }
          (p.init = function () {
            T.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  b(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (p.set = function (q) {
              S.call(this, q, function (O, k) {
                this.current[O] = k;
              }),
                b(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (p.transition = function (q) {
              var O = this.values(q);
              this.tween = new ue({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var k,
                ie = {};
              for (k in this.current) ie[k] = k in O ? O[k] : this.current[k];
              (this.active = !0), (this.nextStyle = this.style(ie));
            }),
            (p.fallback = function (q) {
              var O = this.values(q);
              this.tween = new ue({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (p.update = function () {
              b(this.el, this.name, this.style(this.current));
            }),
            (p.style = function (q) {
              var O,
                k = "";
              for (O in q) k += O + "(" + q[O] + ") ";
              return k;
            }),
            (p.values = function (q) {
              var O,
                k = {};
              return (
                S.call(this, q, function (ie, se, ge) {
                  (k[ie] = se),
                    this.current[ie] === void 0 &&
                      ((O = 0),
                      ~ie.indexOf("scale") && (O = 1),
                      (this.current[ie] = this.convert(O, ge)));
                }),
                k
              );
            });
        }),
        x = f(function (p) {
          function T(J) {
            se.push(J) === 1 && W(S);
          }
          function S() {
            var J,
              ce,
              le,
              Ie = se.length;
            if (Ie)
              for (W(S), ce = X(), J = Ie; J--; )
                (le = se[J]), le && le.render(ce);
          }
          function q(J) {
            var ce,
              le = e.inArray(J, se);
            le >= 0 &&
              ((ce = se.slice(le + 1)),
              (se.length = le),
              ce.length && (se = se.concat(ce)));
          }
          function O(J) {
            return Math.round(J * ge) / ge;
          }
          function k(J, ce, le) {
            return i(
              J[0] + le * (ce[0] - J[0]),
              J[1] + le * (ce[1] - J[1]),
              J[2] + le * (ce[2] - J[2])
            );
          }
          var ie = { ease: I.ease[1], from: 0, to: 1 };
          (p.init = function (J) {
            (this.duration = J.duration || 0), (this.delay = J.delay || 0);
            var ce = J.ease || ie.ease;
            I[ce] && (ce = I[ce][1]),
              typeof ce != "function" && (ce = ie.ease),
              (this.ease = ce),
              (this.update = J.update || o),
              (this.complete = J.complete || o),
              (this.context = J.context || this),
              (this.name = J.name);
            var le = J.from,
              Ie = J.to;
            le === void 0 && (le = ie.from),
              Ie === void 0 && (Ie = ie.to),
              (this.unit = J.unit || ""),
              typeof le == "number" && typeof Ie == "number"
                ? ((this.begin = le), (this.change = Ie - le))
                : this.format(Ie, le),
              (this.value = this.begin + this.unit),
              (this.start = X()),
              J.autoplay !== !1 && this.play();
          }),
            (p.play = function () {
              this.active ||
                (this.start || (this.start = X()), (this.active = !0), T(this));
            }),
            (p.stop = function () {
              this.active && ((this.active = !1), q(this));
            }),
            (p.render = function (J) {
              var ce,
                le = J - this.start;
              if (this.delay) {
                if (le <= this.delay) return;
                le -= this.delay;
              }
              if (le < this.duration) {
                var Ie = this.ease(le, 0, 1, this.duration);
                return (
                  (ce = this.startRGB
                    ? k(this.startRGB, this.endRGB, Ie)
                    : O(this.begin + Ie * this.change)),
                  (this.value = ce + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ce = this.endHex || this.begin + this.change),
                (this.value = ce + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (p.format = function (J, ce) {
              if (((ce += ""), (J += ""), J.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ce)),
                  (this.endRGB = n(J)),
                  (this.endHex = J),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var le = ce.replace(A, ""),
                  Ie = J.replace(A, "");
                le !== Ie && a("tween", ce, J), (this.unit = le);
              }
              (ce = parseFloat(ce)),
                (J = parseFloat(J)),
                (this.begin = this.value = ce),
                (this.change = J - ce);
            }),
            (p.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var se = [],
            ge = 1e3;
        }),
        Z = f(x, function (p) {
          (p.init = function (T) {
            (this.duration = T.duration || 0),
              (this.complete = T.complete || o),
              (this.context = T.context),
              this.play();
          }),
            (p.render = function (T) {
              var S = T - this.start;
              S < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ue = f(x, function (p, T) {
          (p.init = function (S) {
            (this.context = S.context),
              (this.update = S.update),
              (this.tweens = []),
              (this.current = S.current);
            var q, O;
            for (q in S.values)
              (O = S.values[q]),
                this.current[q] !== O &&
                  this.tweens.push(
                    new x({
                      name: q,
                      from: this.current[q],
                      to: O,
                      duration: S.duration,
                      delay: S.delay,
                      ease: S.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (p.render = function (S) {
              var q,
                O,
                k = this.tweens.length,
                ie = !1;
              for (q = k; q--; )
                (O = this.tweens[q]),
                  O.context &&
                    (O.render(S), (this.current[O.name] = O.value), (ie = !0));
              return ie
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (p.destroy = function () {
              if ((T.destroy.call(this), this.tweens)) {
                var S,
                  q = this.tweens.length;
                for (S = q; S--; ) this.tweens[S].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (p) {
        if (!H.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + p + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (p) {
          return new x(p);
        }),
        (t.delay = function (p, T, S) {
          return new Z({ complete: T, duration: p, context: S });
        }),
        (e.fn.tram = function (p) {
          return t.call(null, this, p);
        });
      var b = e.style,
        B = e.css,
        ee = { transform: H.transform && H.transform.css },
        Y = {
          color: [c, D],
          background: [c, D, "background-color"],
          "outline-color": [c, D],
          "border-color": [c, D],
          "border-top-color": [c, D],
          "border-right-color": [c, D],
          "border-bottom-color": [c, D],
          "border-left-color": [c, D],
          "border-width": [g, G],
          "border-top-width": [g, G],
          "border-right-width": [g, G],
          "border-bottom-width": [g, G],
          "border-left-width": [g, G],
          "border-spacing": [g, G],
          "letter-spacing": [g, G],
          margin: [g, G],
          "margin-top": [g, G],
          "margin-right": [g, G],
          "margin-bottom": [g, G],
          "margin-left": [g, G],
          padding: [g, G],
          "padding-top": [g, G],
          "padding-right": [g, G],
          "padding-bottom": [g, G],
          "padding-left": [g, G],
          "outline-width": [g, G],
          opacity: [g, L],
          top: [g, F],
          right: [g, F],
          bottom: [g, F],
          left: [g, F],
          "font-size": [g, F],
          "text-indent": [g, F],
          "word-spacing": [g, F],
          width: [g, F],
          "min-width": [g, F],
          "max-width": [g, F],
          height: [g, F],
          "min-height": [g, F],
          "max-height": [g, F],
          "line-height": [g, z],
          "scroll-top": [M, L, "scrollTop"],
          "scroll-left": [M, L, "scrollLeft"],
        },
        fe = {};
      H.transform &&
        ((Y.transform = [V]),
        (fe = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [K],
          rotateX: [K],
          rotateY: [K],
          scale: [L],
          scaleX: [L],
          scaleY: [L],
          skew: [K],
          skewX: [K],
          skewY: [K],
        })),
        H.transform &&
          H.backface &&
          ((fe.z = [F, "translateZ"]),
          (fe.rotateZ = [K]),
          (fe.scaleZ = [L]),
          (fe.perspective = [G]));
      var Te = /ms/,
        Le = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ws = l((fW, Vs) => {
    "use strict";
    var v_ = window.$,
      h_ = Fi() && v_.tram;
    Vs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        s = r.slice,
        a = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        E = r.forEach,
        f = r.map,
        I = r.reduce,
        m = r.reduceRight,
        y = r.filter,
        w = r.every,
        C = r.some,
        A = r.indexOf,
        P = r.lastIndexOf,
        L = Array.isArray,
        D = Object.keys,
        G = i.bind,
        F =
          (e.each =
          e.forEach =
            function (_, N, U) {
              if (_ == null) return _;
              if (E && _.forEach === E) _.forEach(N, U);
              else if (_.length === +_.length) {
                for (var H = 0, te = _.length; H < te; H++)
                  if (N.call(U, _[H], H, _) === t) return;
              } else
                for (var ne = e.keys(_), H = 0, te = ne.length; H < te; H++)
                  if (N.call(U, _[ne[H]], ne[H], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, N, U) {
          var H = [];
          return _ == null
            ? H
            : f && _.map === f
            ? _.map(N, U)
            : (F(_, function (te, ne, W) {
                H.push(N.call(U, te, ne, W));
              }),
              H);
        }),
        (e.find = e.detect =
          function (_, N, U) {
            var H;
            return (
              K(_, function (te, ne, W) {
                if (N.call(U, te, ne, W)) return (H = te), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (_, N, U) {
            var H = [];
            return _ == null
              ? H
              : y && _.filter === y
              ? _.filter(N, U)
              : (F(_, function (te, ne, W) {
                  N.call(U, te, ne, W) && H.push(te);
                }),
                H);
          });
      var K =
        (e.some =
        e.any =
          function (_, N, U) {
            N || (N = e.identity);
            var H = !1;
            return _ == null
              ? H
              : C && _.some === C
              ? _.some(N, U)
              : (F(_, function (te, ne, W) {
                  if (H || (H = N.call(U, te, ne, W))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (_, N) {
          return _ == null
            ? !1
            : A && _.indexOf === A
            ? _.indexOf(N) != -1
            : K(_, function (U) {
                return U === N;
              });
        }),
        (e.delay = function (_, N) {
          var U = s.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, U);
          }, N);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(s.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var N, U, H;
          return function () {
            N ||
              ((N = !0),
              (U = arguments),
              (H = this),
              h_.frame(function () {
                (N = !1), _.apply(H, U);
              }));
          };
        }),
        (e.debounce = function (_, N, U) {
          var H,
            te,
            ne,
            W,
            X,
            h = function () {
              var v = e.now() - W;
              v < N
                ? (H = setTimeout(h, N - v))
                : ((H = null), U || ((X = _.apply(ne, te)), (ne = te = null)));
            };
          return function () {
            (ne = this), (te = arguments), (W = e.now());
            var v = U && !H;
            return (
              H || (H = setTimeout(h, N)),
              v && ((X = _.apply(ne, te)), (ne = te = null)),
              X
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var N = 1, U = arguments.length; N < U; N++) {
            var H = arguments[N];
            for (var te in H) _[te] === void 0 && (_[te] = H[te]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (D) return D(_);
          var N = [];
          for (var U in _) e.has(_, U) && N.push(U);
          return N;
        }),
        (e.has = function (_, N) {
          return d.call(_, N);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        re = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function (_) {
          return "\\" + Q[_];
        },
        R = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, N, U) {
          !N && U && (N = U), (N = e.defaults({}, N, e.templateSettings));
          var H = RegExp(
              [
                (N.escape || z).source,
                (N.interpolate || z).source,
                (N.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            ne = "__p+='";
          _.replace(H, function (v, g, c, M, V) {
            return (
              (ne += _.slice(te, V).replace(re, j)),
              (te = V + v.length),
              g
                ? (ne +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':_.escape(__t))+
'`)
                : c
                ? (ne +=
                    `'+
((__t=(` +
                    c +
                    `))==null?'':__t)+
'`)
                : M &&
                  (ne +=
                    `';
` +
                    M +
                    `
__p+='`),
              v
            );
          }),
            (ne += `';
`);
          var W = N.variable;
          if (W) {
            if (!R.test(W))
              throw new Error("variable is not a bare identifier: " + W);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (W = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var X;
          try {
            X = new Function(N.variable || "obj", "_", ne);
          } catch (v) {
            throw ((v.source = ne), v);
          }
          var h = function (v) {
            return X.call(this, v, e);
          };
          return (
            (h.source =
              "function(" +
              W +
              `){
` +
              ne +
              "}"),
            h
          );
        }),
        e
      );
    })();
  });
  var Ne = l((dW, Qs) => {
    "use strict";
    var he = {},
      Xt = {},
      Bt = [],
      Gi = window.Webflow || [],
      _t = window.jQuery,
      Ye = _t(window),
      g_ = _t(document),
      ot = _t.isFunction,
      Ke = (he._ = Ws()),
      Xs = (he.tram = Fi() && _t.tram),
      pn = !1,
      Ui = !1;
    Xs.config.hideBackface = !1;
    Xs.config.keepInherited = !0;
    he.define = function (e, t, r) {
      Xt[e] && js(Xt[e]);
      var n = (Xt[e] = t(_t, Ke, r) || {});
      return Bs(n), n;
    };
    he.require = function (e) {
      return Xt[e];
    };
    function Bs(e) {
      he.env() &&
        (ot(e.design) && Ye.on("__wf_design", e.design),
        ot(e.preview) && Ye.on("__wf_preview", e.preview)),
        ot(e.destroy) && Ye.on("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && m_(e);
    }
    function m_(e) {
      if (pn) {
        e.ready();
        return;
      }
      Ke.contains(Bt, e.ready) || Bt.push(e.ready);
    }
    function js(e) {
      ot(e.design) && Ye.off("__wf_design", e.design),
        ot(e.preview) && Ye.off("__wf_preview", e.preview),
        ot(e.destroy) && Ye.off("__wf_destroy", e.destroy),
        e.ready && ot(e.ready) && y_(e);
    }
    function y_(e) {
      Bt = Ke.filter(Bt, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (pn) {
        ot(e) && e();
        return;
      }
      Gi.push(e);
    };
    he.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var dn = navigator.userAgent.toLowerCase(),
      zs = (he.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      E_ = (he.env.chrome =
        /chrome/.test(dn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(dn.match(/chrome\/(\d+)\./)[1], 10)),
      b_ = (he.env.ios = /(ipod|iphone|ipad)/.test(dn));
    he.env.safari = /safari/.test(dn) && !E_ && !b_;
    var ki;
    zs &&
      g_.on("touchstart mousedown", function (e) {
        ki = e.target;
      });
    he.validClick = zs
      ? function (e) {
          return e === ki || _t.contains(e, ki);
        }
      : function () {
          return !0;
        };
    var Ks = "resize.webflow orientationchange.webflow load.webflow",
      __ = "scroll.webflow " + Ks;
    he.resize = Vi(Ye, Ks);
    he.scroll = Vi(Ye, __);
    he.redraw = Vi();
    function Vi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ke.throttle(function (i) {
          Ke.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ke.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ke.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () {});
    he.ready = function () {
      (pn = !0), Ui ? I_() : Ke.each(Bt, Hs), Ke.each(Gi, Hs), he.resize.up();
    };
    function Hs(e) {
      ot(e) && e();
    }
    function I_() {
      (Ui = !1), Ke.each(Xt, Bs);
    }
    var Nt;
    he.load = function (e) {
      Nt.then(e);
    };
    function Ys() {
      Nt && (Nt.reject(), Ye.off("load", Nt.resolve)),
        (Nt = new _t.Deferred()),
        Ye.on("load", Nt.resolve);
    }
    he.destroy = function (e) {
      (e = e || {}),
        (Ui = !0),
        Ye.triggerHandler("__wf_destroy"),
        e.domready != null && (pn = e.domready),
        Ke.each(Xt, js),
        he.resize.off(),
        he.scroll.off(),
        he.redraw.off(),
        (Bt = []),
        (Gi = []),
        Nt.state() === "pending" && Ys();
    };
    _t(he.ready);
    Ys();
    Qs.exports = window.Webflow = he;
  });
  var Js = l((pW, Zs) => {
    "use strict";
    var $s = Ne();
    $s.define(
      "brand",
      (Zs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          s = window.location,
          a = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && s.hostname !== y && (m = !0),
            m &&
              !a &&
              ((d = d || f()),
              I(),
              setTimeout(I, 500),
              e(r).off(u, E).on(u, E));
        };
        function E() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", m ? "display: none !important;" : "");
        }
        function f() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            y = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            w = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(y, w), m[0];
        }
        function I() {
          var m = i.children(o),
            y = m.length && m.get(0) === d,
            w = $s.env("editor");
          if (y) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(d);
        }
        return t;
      })
    );
  });
  var tu = l((vW, eu) => {
    "use strict";
    var Wi = Ne();
    Wi.define(
      "edit",
      (eu.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Wi.env("test") || Wi.env("frame")) && !r.fixture && !w_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          s = document.location,
          a = "hashchange",
          u,
          d = r.load || I,
          E = !1;
        try {
          E =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        E
          ? d()
          : s.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
              /\?edit$/.test(s.href)) &&
            d()
          : i.on(a, f).triggerHandler(a);
        function f() {
          u || (/\?edit/.test(s.hash) && d());
        }
        function I() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(a, f),
            P(function (D) {
              e.ajax({
                url: A("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(D),
              });
            });
        }
        function m(D) {
          return function (G) {
            if (!G) {
              console.error("Could not load editor data");
              return;
            }
            (G.thirdPartyCookiesSupported = D),
              y(C(G.bugReporterScriptPath), function () {
                y(C(G.scriptPath), function () {
                  window.WebflowEditor(G);
                });
              });
          };
        }
        function y(D, G) {
          e.ajax({ type: "GET", url: D, dataType: "script", cache: !0 }).then(
            G,
            w
          );
        }
        function w(D, G, F) {
          throw (console.error("Could not load editor script: " + G), F);
        }
        function C(D) {
          return D.indexOf("//") >= 0
            ? D
            : A("https://editor-api.webflow.com" + D);
        }
        function A(D) {
          return D.replace(/([^:])\/\//g, "$1/");
        }
        function P(D) {
          var G = window.document.createElement("iframe");
          (G.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (G.style.display = "none"),
            (G.sandbox = "allow-scripts allow-same-origin");
          var F = function (K) {
            K.data === "WF_third_party_cookies_unsupported"
              ? (L(G, F), D(!1))
              : K.data === "WF_third_party_cookies_supported" &&
                (L(G, F), D(!0));
          };
          (G.onerror = function () {
            L(G, F), D(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(G);
        }
        function L(D, G) {
          window.removeEventListener("message", G, !1), D.remove();
        }
        return n;
      })
    );
    function w_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var nu = l((hW, ru) => {
    "use strict";
    var T_ = Ne();
    T_.define(
      "focus-visible",
      (ru.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            s = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function a(L) {
            return !!(
              L &&
              L !== document &&
              L.nodeName !== "HTML" &&
              L.nodeName !== "BODY" &&
              "classList" in L &&
              "contains" in L.classList
            );
          }
          function u(L) {
            var D = L.type,
              G = L.tagName;
            return !!(
              (G === "INPUT" && s[D] && !L.readOnly) ||
              (G === "TEXTAREA" && !L.readOnly) ||
              L.isContentEditable
            );
          }
          function d(L) {
            L.getAttribute("data-wf-focus-visible") ||
              L.setAttribute("data-wf-focus-visible", "true");
          }
          function E(L) {
            L.getAttribute("data-wf-focus-visible") &&
              L.removeAttribute("data-wf-focus-visible");
          }
          function f(L) {
            L.metaKey ||
              L.altKey ||
              L.ctrlKey ||
              (a(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function I() {
            n = !1;
          }
          function m(L) {
            a(L.target) && (n || u(L.target)) && d(L.target);
          }
          function y(L) {
            a(L.target) &&
              L.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              E(L.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function A() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(L) {
            (L.target.nodeName && L.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), A());
          }
          document.addEventListener("keydown", f, !0),
            document.addEventListener("mousedown", I, !0),
            document.addEventListener("pointerdown", I, !0),
            document.addEventListener("touchstart", I, !0),
            document.addEventListener("visibilitychange", w, !0),
            C(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var au = l((gW, ou) => {
    "use strict";
    var iu = Ne();
    iu.define(
      "focus",
      (ou.exports = function () {
        var e = [],
          t = !1;
        function r(s) {
          t &&
            (s.preventDefault(),
            s.stopPropagation(),
            s.stopImmediatePropagation(),
            e.unshift(s));
        }
        function n(s) {
          var a = s.target,
            u = a.tagName;
          return (
            (/^a$/i.test(u) && a.href != null) ||
            (/^(button|textarea)$/i.test(u) && a.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
              !a.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && a.controls === !0)
          );
        }
        function i(s) {
          n(s) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, s.target.focus(); e.length > 0; ) {
                var a = e.pop();
                a.target.dispatchEvent(new MouseEvent(a.type, a));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            iu.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var cu = l((mW, uu) => {
    "use strict";
    var Hi = window.jQuery,
      at = {},
      vn = [],
      su = ".w-ix",
      hn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Hi(t).triggerHandler(at.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Hi(t).triggerHandler(at.types.OUTRO));
        },
      };
    at.triggers = {};
    at.types = { INTRO: "w-ix-intro" + su, OUTRO: "w-ix-outro" + su };
    at.init = function () {
      for (var e = vn.length, t = 0; t < e; t++) {
        var r = vn[t];
        r[0](0, r[1]);
      }
      (vn = []), Hi.extend(at.triggers, hn);
    };
    at.async = function () {
      for (var e in hn) {
        var t = hn[e];
        hn.hasOwnProperty(e) &&
          (at.triggers[e] = function (r, n) {
            vn.push([t, n]);
          });
      }
    };
    at.async();
    uu.exports = at;
  });
  var jt = l((yW, du) => {
    "use strict";
    var Xi = cu();
    function lu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var x_ = window.jQuery,
      gn = {},
      fu = ".w-ix",
      O_ = {
        reset: function (e, t) {
          Xi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Xi.triggers.intro(e, t), lu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Xi.triggers.outro(e, t), lu(t, "COMPONENT_INACTIVE");
        },
      };
    gn.triggers = {};
    gn.types = { INTRO: "w-ix-intro" + fu, OUTRO: "w-ix-outro" + fu };
    x_.extend(gn.triggers, O_);
    du.exports = gn;
  });
  var pu = l((EW, vt) => {
    function Bi(e) {
      return (
        (vt.exports = Bi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (vt.exports.__esModule = !0),
        (vt.exports.default = vt.exports),
        Bi(e)
      );
    }
    (vt.exports = Bi),
      (vt.exports.__esModule = !0),
      (vt.exports.default = vt.exports);
  });
  var mn = l((bW, Tr) => {
    var A_ = pu().default;
    function vu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (vu = function (i) {
        return i ? r : t;
      })(e);
    }
    function S_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (A_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = vu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          s && (s.get || s.set)
            ? Object.defineProperty(n, o, s)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Tr.exports = S_),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var hu = l((_W, xr) => {
    function C_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (xr.exports = C_),
      (xr.exports.__esModule = !0),
      (xr.exports.default = xr.exports);
  });
  var Ee = l((IW, gu) => {
    var yn = function (e) {
      return e && e.Math == Math && e;
    };
    gu.exports =
      yn(typeof globalThis == "object" && globalThis) ||
      yn(typeof window == "object" && window) ||
      yn(typeof self == "object" && self) ||
      yn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var zt = l((wW, mu) => {
    mu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Pt = l((TW, yu) => {
    var R_ = zt();
    yu.exports = !R_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var En = l((xW, Eu) => {
    var Or = Function.prototype.call;
    Eu.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var wu = l((Iu) => {
    "use strict";
    var bu = {}.propertyIsEnumerable,
      _u = Object.getOwnPropertyDescriptor,
      L_ = _u && !bu.call({ 1: 2 }, 1);
    Iu.f = L_
      ? function (t) {
          var r = _u(this, t);
          return !!r && r.enumerable;
        }
      : bu;
  });
  var ji = l((AW, Tu) => {
    Tu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Qe = l((SW, Ou) => {
    var xu = Function.prototype,
      zi = xu.bind,
      Ki = xu.call,
      N_ = zi && zi.bind(Ki);
    Ou.exports = zi
      ? function (e) {
          return e && N_(Ki, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Ki.apply(e, arguments);
            }
          );
        };
  });
  var Cu = l((CW, Su) => {
    var Au = Qe(),
      P_ = Au({}.toString),
      M_ = Au("".slice);
    Su.exports = function (e) {
      return M_(P_(e), 8, -1);
    };
  });
  var Lu = l((RW, Ru) => {
    var q_ = Ee(),
      D_ = Qe(),
      F_ = zt(),
      k_ = Cu(),
      Yi = q_.Object,
      G_ = D_("".split);
    Ru.exports = F_(function () {
      return !Yi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return k_(e) == "String" ? G_(e, "") : Yi(e);
        }
      : Yi;
  });
  var Qi = l((LW, Nu) => {
    var U_ = Ee(),
      V_ = U_.TypeError;
    Nu.exports = function (e) {
      if (e == null) throw V_("Can't call method on " + e);
      return e;
    };
  });
  var Ar = l((NW, Pu) => {
    var W_ = Lu(),
      H_ = Qi();
    Pu.exports = function (e) {
      return W_(H_(e));
    };
  });
  var st = l((PW, Mu) => {
    Mu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Kt = l((MW, qu) => {
    var X_ = st();
    qu.exports = function (e) {
      return typeof e == "object" ? e !== null : X_(e);
    };
  });
  var Sr = l((qW, Du) => {
    var $i = Ee(),
      B_ = st(),
      j_ = function (e) {
        return B_(e) ? e : void 0;
      };
    Du.exports = function (e, t) {
      return arguments.length < 2 ? j_($i[e]) : $i[e] && $i[e][t];
    };
  });
  var ku = l((DW, Fu) => {
    var z_ = Qe();
    Fu.exports = z_({}.isPrototypeOf);
  });
  var Uu = l((FW, Gu) => {
    var K_ = Sr();
    Gu.exports = K_("navigator", "userAgent") || "";
  });
  var zu = l((kW, ju) => {
    var Bu = Ee(),
      Zi = Uu(),
      Vu = Bu.process,
      Wu = Bu.Deno,
      Hu = (Vu && Vu.versions) || (Wu && Wu.version),
      Xu = Hu && Hu.v8,
      $e,
      bn;
    Xu &&
      (($e = Xu.split(".")),
      (bn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !bn &&
      Zi &&
      (($e = Zi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Zi.match(/Chrome\/(\d+)/)), $e && (bn = +$e[1])));
    ju.exports = bn;
  });
  var Ji = l((GW, Yu) => {
    var Ku = zu(),
      Y_ = zt();
    Yu.exports =
      !!Object.getOwnPropertySymbols &&
      !Y_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Ku && Ku < 41)
        );
      });
  });
  var eo = l((UW, Qu) => {
    var Q_ = Ji();
    Qu.exports = Q_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var to = l((VW, $u) => {
    var $_ = Ee(),
      Z_ = Sr(),
      J_ = st(),
      eI = ku(),
      tI = eo(),
      rI = $_.Object;
    $u.exports = tI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Z_("Symbol");
          return J_(t) && eI(t.prototype, rI(e));
        };
  });
  var Ju = l((WW, Zu) => {
    var nI = Ee(),
      iI = nI.String;
    Zu.exports = function (e) {
      try {
        return iI(e);
      } catch {
        return "Object";
      }
    };
  });
  var tc = l((HW, ec) => {
    var oI = Ee(),
      aI = st(),
      sI = Ju(),
      uI = oI.TypeError;
    ec.exports = function (e) {
      if (aI(e)) return e;
      throw uI(sI(e) + " is not a function");
    };
  });
  var nc = l((XW, rc) => {
    var cI = tc();
    rc.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : cI(r);
    };
  });
  var oc = l((BW, ic) => {
    var lI = Ee(),
      ro = En(),
      no = st(),
      io = Kt(),
      fI = lI.TypeError;
    ic.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && no((r = e.toString)) && !io((n = ro(r, e)))) ||
        (no((r = e.valueOf)) && !io((n = ro(r, e)))) ||
        (t !== "string" && no((r = e.toString)) && !io((n = ro(r, e))))
      )
        return n;
      throw fI("Can't convert object to primitive value");
    };
  });
  var sc = l((jW, ac) => {
    ac.exports = !1;
  });
  var _n = l((zW, cc) => {
    var uc = Ee(),
      dI = Object.defineProperty;
    cc.exports = function (e, t) {
      try {
        dI(uc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        uc[e] = t;
      }
      return t;
    };
  });
  var In = l((KW, fc) => {
    var pI = Ee(),
      vI = _n(),
      lc = "__core-js_shared__",
      hI = pI[lc] || vI(lc, {});
    fc.exports = hI;
  });
  var oo = l((YW, pc) => {
    var gI = sc(),
      dc = In();
    (pc.exports = function (e, t) {
      return dc[e] || (dc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: gI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var hc = l((QW, vc) => {
    var mI = Ee(),
      yI = Qi(),
      EI = mI.Object;
    vc.exports = function (e) {
      return EI(yI(e));
    };
  });
  var It = l(($W, gc) => {
    var bI = Qe(),
      _I = hc(),
      II = bI({}.hasOwnProperty);
    gc.exports =
      Object.hasOwn ||
      function (t, r) {
        return II(_I(t), r);
      };
  });
  var ao = l((ZW, mc) => {
    var wI = Qe(),
      TI = 0,
      xI = Math.random(),
      OI = wI((1).toString);
    mc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + OI(++TI + xI, 36);
    };
  });
  var so = l((JW, Ic) => {
    var AI = Ee(),
      SI = oo(),
      yc = It(),
      CI = ao(),
      Ec = Ji(),
      _c = eo(),
      Yt = SI("wks"),
      Mt = AI.Symbol,
      bc = Mt && Mt.for,
      RI = _c ? Mt : (Mt && Mt.withoutSetter) || CI;
    Ic.exports = function (e) {
      if (!yc(Yt, e) || !(Ec || typeof Yt[e] == "string")) {
        var t = "Symbol." + e;
        Ec && yc(Mt, e)
          ? (Yt[e] = Mt[e])
          : _c && bc
          ? (Yt[e] = bc(t))
          : (Yt[e] = RI(t));
      }
      return Yt[e];
    };
  });
  var Oc = l((eH, xc) => {
    var LI = Ee(),
      NI = En(),
      wc = Kt(),
      Tc = to(),
      PI = nc(),
      MI = oc(),
      qI = so(),
      DI = LI.TypeError,
      FI = qI("toPrimitive");
    xc.exports = function (e, t) {
      if (!wc(e) || Tc(e)) return e;
      var r = PI(e, FI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = NI(r, e, t)), !wc(n) || Tc(n))
        )
          return n;
        throw DI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), MI(e, t);
    };
  });
  var uo = l((tH, Ac) => {
    var kI = Oc(),
      GI = to();
    Ac.exports = function (e) {
      var t = kI(e, "string");
      return GI(t) ? t : t + "";
    };
  });
  var lo = l((rH, Cc) => {
    var UI = Ee(),
      Sc = Kt(),
      co = UI.document,
      VI = Sc(co) && Sc(co.createElement);
    Cc.exports = function (e) {
      return VI ? co.createElement(e) : {};
    };
  });
  var fo = l((nH, Rc) => {
    var WI = Pt(),
      HI = zt(),
      XI = lo();
    Rc.exports =
      !WI &&
      !HI(function () {
        return (
          Object.defineProperty(XI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var po = l((Nc) => {
    var BI = Pt(),
      jI = En(),
      zI = wu(),
      KI = ji(),
      YI = Ar(),
      QI = uo(),
      $I = It(),
      ZI = fo(),
      Lc = Object.getOwnPropertyDescriptor;
    Nc.f = BI
      ? Lc
      : function (t, r) {
          if (((t = YI(t)), (r = QI(r)), ZI))
            try {
              return Lc(t, r);
            } catch {}
          if ($I(t, r)) return KI(!jI(zI.f, t, r), t[r]);
        };
  });
  var Cr = l((oH, Mc) => {
    var Pc = Ee(),
      JI = Kt(),
      ew = Pc.String,
      tw = Pc.TypeError;
    Mc.exports = function (e) {
      if (JI(e)) return e;
      throw tw(ew(e) + " is not an object");
    };
  });
  var Rr = l((Fc) => {
    var rw = Ee(),
      nw = Pt(),
      iw = fo(),
      qc = Cr(),
      ow = uo(),
      aw = rw.TypeError,
      Dc = Object.defineProperty;
    Fc.f = nw
      ? Dc
      : function (t, r, n) {
          if ((qc(t), (r = ow(r)), qc(n), iw))
            try {
              return Dc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw aw("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var wn = l((sH, kc) => {
    var sw = Pt(),
      uw = Rr(),
      cw = ji();
    kc.exports = sw
      ? function (e, t, r) {
          return uw.f(e, t, cw(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var ho = l((uH, Gc) => {
    var lw = Qe(),
      fw = st(),
      vo = In(),
      dw = lw(Function.toString);
    fw(vo.inspectSource) ||
      (vo.inspectSource = function (e) {
        return dw(e);
      });
    Gc.exports = vo.inspectSource;
  });
  var Wc = l((cH, Vc) => {
    var pw = Ee(),
      vw = st(),
      hw = ho(),
      Uc = pw.WeakMap;
    Vc.exports = vw(Uc) && /native code/.test(hw(Uc));
  });
  var go = l((lH, Xc) => {
    var gw = oo(),
      mw = ao(),
      Hc = gw("keys");
    Xc.exports = function (e) {
      return Hc[e] || (Hc[e] = mw(e));
    };
  });
  var Tn = l((fH, Bc) => {
    Bc.exports = {};
  });
  var $c = l((dH, Qc) => {
    var yw = Wc(),
      Yc = Ee(),
      mo = Qe(),
      Ew = Kt(),
      bw = wn(),
      yo = It(),
      Eo = In(),
      _w = go(),
      Iw = Tn(),
      jc = "Object already initialized",
      _o = Yc.TypeError,
      ww = Yc.WeakMap,
      xn,
      Lr,
      On,
      Tw = function (e) {
        return On(e) ? Lr(e) : xn(e, {});
      },
      xw = function (e) {
        return function (t) {
          var r;
          if (!Ew(t) || (r = Lr(t)).type !== e)
            throw _o("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    yw || Eo.state
      ? ((wt = Eo.state || (Eo.state = new ww())),
        (zc = mo(wt.get)),
        (bo = mo(wt.has)),
        (Kc = mo(wt.set)),
        (xn = function (e, t) {
          if (bo(wt, e)) throw new _o(jc);
          return (t.facade = e), Kc(wt, e, t), t;
        }),
        (Lr = function (e) {
          return zc(wt, e) || {};
        }),
        (On = function (e) {
          return bo(wt, e);
        }))
      : ((qt = _w("state")),
        (Iw[qt] = !0),
        (xn = function (e, t) {
          if (yo(e, qt)) throw new _o(jc);
          return (t.facade = e), bw(e, qt, t), t;
        }),
        (Lr = function (e) {
          return yo(e, qt) ? e[qt] : {};
        }),
        (On = function (e) {
          return yo(e, qt);
        }));
    var wt, zc, bo, Kc, qt;
    Qc.exports = { set: xn, get: Lr, has: On, enforce: Tw, getterFor: xw };
  });
  var el = l((pH, Jc) => {
    var Io = Pt(),
      Ow = It(),
      Zc = Function.prototype,
      Aw = Io && Object.getOwnPropertyDescriptor,
      wo = Ow(Zc, "name"),
      Sw = wo && function () {}.name === "something",
      Cw = wo && (!Io || (Io && Aw(Zc, "name").configurable));
    Jc.exports = { EXISTS: wo, PROPER: Sw, CONFIGURABLE: Cw };
  });
  var ol = l((vH, il) => {
    var Rw = Ee(),
      tl = st(),
      Lw = It(),
      rl = wn(),
      Nw = _n(),
      Pw = ho(),
      nl = $c(),
      Mw = el().CONFIGURABLE,
      qw = nl.get,
      Dw = nl.enforce,
      Fw = String(String).split("String");
    (il.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        s = n ? !!n.noTargetGet : !1,
        a = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (tl(r) &&
          (String(a).slice(0, 7) === "Symbol(" &&
            (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!Lw(r, "name") || (Mw && r.name !== a)) && rl(r, "name", a),
          (u = Dw(r)),
          u.source || (u.source = Fw.join(typeof a == "string" ? a : ""))),
        e === Rw)
      ) {
        o ? (e[t] = r) : Nw(t, r);
        return;
      } else i ? !s && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : rl(e, t, r);
    })(Function.prototype, "toString", function () {
      return (tl(this) && qw(this).source) || Pw(this);
    });
  });
  var To = l((hH, al) => {
    var kw = Math.ceil,
      Gw = Math.floor;
    al.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? Gw : kw)(t);
    };
  });
  var ul = l((gH, sl) => {
    var Uw = To(),
      Vw = Math.max,
      Ww = Math.min;
    sl.exports = function (e, t) {
      var r = Uw(e);
      return r < 0 ? Vw(r + t, 0) : Ww(r, t);
    };
  });
  var ll = l((mH, cl) => {
    var Hw = To(),
      Xw = Math.min;
    cl.exports = function (e) {
      return e > 0 ? Xw(Hw(e), 9007199254740991) : 0;
    };
  });
  var dl = l((yH, fl) => {
    var Bw = ll();
    fl.exports = function (e) {
      return Bw(e.length);
    };
  });
  var xo = l((EH, vl) => {
    var jw = Ar(),
      zw = ul(),
      Kw = dl(),
      pl = function (e) {
        return function (t, r, n) {
          var i = jw(t),
            o = Kw(i),
            s = zw(n, o),
            a;
          if (e && r != r) {
            for (; o > s; ) if (((a = i[s++]), a != a)) return !0;
          } else
            for (; o > s; s++)
              if ((e || s in i) && i[s] === r) return e || s || 0;
          return !e && -1;
        };
      };
    vl.exports = { includes: pl(!0), indexOf: pl(!1) };
  });
  var Ao = l((bH, gl) => {
    var Yw = Qe(),
      Oo = It(),
      Qw = Ar(),
      $w = xo().indexOf,
      Zw = Tn(),
      hl = Yw([].push);
    gl.exports = function (e, t) {
      var r = Qw(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Oo(Zw, o) && Oo(r, o) && hl(i, o);
      for (; t.length > n; ) Oo(r, (o = t[n++])) && (~$w(i, o) || hl(i, o));
      return i;
    };
  });
  var An = l((_H, ml) => {
    ml.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var El = l((yl) => {
    var Jw = Ao(),
      eT = An(),
      tT = eT.concat("length", "prototype");
    yl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Jw(t, tT);
      };
  });
  var _l = l((bl) => {
    bl.f = Object.getOwnPropertySymbols;
  });
  var wl = l((TH, Il) => {
    var rT = Sr(),
      nT = Qe(),
      iT = El(),
      oT = _l(),
      aT = Cr(),
      sT = nT([].concat);
    Il.exports =
      rT("Reflect", "ownKeys") ||
      function (t) {
        var r = iT.f(aT(t)),
          n = oT.f;
        return n ? sT(r, n(t)) : r;
      };
  });
  var xl = l((xH, Tl) => {
    var uT = It(),
      cT = wl(),
      lT = po(),
      fT = Rr();
    Tl.exports = function (e, t) {
      for (var r = cT(t), n = fT.f, i = lT.f, o = 0; o < r.length; o++) {
        var s = r[o];
        uT(e, s) || n(e, s, i(t, s));
      }
    };
  });
  var Al = l((OH, Ol) => {
    var dT = zt(),
      pT = st(),
      vT = /#|\.prototype\./,
      Nr = function (e, t) {
        var r = gT[hT(e)];
        return r == yT ? !0 : r == mT ? !1 : pT(t) ? dT(t) : !!t;
      },
      hT = (Nr.normalize = function (e) {
        return String(e).replace(vT, ".").toLowerCase();
      }),
      gT = (Nr.data = {}),
      mT = (Nr.NATIVE = "N"),
      yT = (Nr.POLYFILL = "P");
    Ol.exports = Nr;
  });
  var Cl = l((AH, Sl) => {
    var So = Ee(),
      ET = po().f,
      bT = wn(),
      _T = ol(),
      IT = _n(),
      wT = xl(),
      TT = Al();
    Sl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        s,
        a,
        u,
        d,
        E;
      if (
        (n
          ? (s = So)
          : i
          ? (s = So[r] || IT(r, {}))
          : (s = (So[r] || {}).prototype),
        s)
      )
        for (a in t) {
          if (
            ((d = t[a]),
            e.noTargetGet ? ((E = ET(s, a)), (u = E && E.value)) : (u = s[a]),
            (o = TT(n ? a : r + (i ? "." : "#") + a, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            wT(d, u);
          }
          (e.sham || (u && u.sham)) && bT(d, "sham", !0), _T(s, a, d, e);
        }
    };
  });
  var Ll = l((SH, Rl) => {
    var xT = Ao(),
      OT = An();
    Rl.exports =
      Object.keys ||
      function (t) {
        return xT(t, OT);
      };
  });
  var Pl = l((CH, Nl) => {
    var AT = Pt(),
      ST = Rr(),
      CT = Cr(),
      RT = Ar(),
      LT = Ll();
    Nl.exports = AT
      ? Object.defineProperties
      : function (t, r) {
          CT(t);
          for (var n = RT(r), i = LT(r), o = i.length, s = 0, a; o > s; )
            ST.f(t, (a = i[s++]), n[a]);
          return t;
        };
  });
  var ql = l((RH, Ml) => {
    var NT = Sr();
    Ml.exports = NT("document", "documentElement");
  });
  var Hl = l((LH, Wl) => {
    var PT = Cr(),
      MT = Pl(),
      Dl = An(),
      qT = Tn(),
      DT = ql(),
      FT = lo(),
      kT = go(),
      Fl = ">",
      kl = "<",
      Ro = "prototype",
      Lo = "script",
      Ul = kT("IE_PROTO"),
      Co = function () {},
      Vl = function (e) {
        return kl + Lo + Fl + e + kl + "/" + Lo + Fl;
      },
      Gl = function (e) {
        e.write(Vl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      GT = function () {
        var e = FT("iframe"),
          t = "java" + Lo + ":",
          r;
        return (
          (e.style.display = "none"),
          DT.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Vl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Sn,
      Cn = function () {
        try {
          Sn = new ActiveXObject("htmlfile");
        } catch {}
        Cn =
          typeof document < "u"
            ? document.domain && Sn
              ? Gl(Sn)
              : GT()
            : Gl(Sn);
        for (var e = Dl.length; e--; ) delete Cn[Ro][Dl[e]];
        return Cn();
      };
    qT[Ul] = !0;
    Wl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Co[Ro] = PT(t)), (n = new Co()), (Co[Ro] = null), (n[Ul] = t))
            : (n = Cn()),
          r === void 0 ? n : MT(n, r)
        );
      };
  });
  var Bl = l((NH, Xl) => {
    var UT = so(),
      VT = Hl(),
      WT = Rr(),
      No = UT("unscopables"),
      Po = Array.prototype;
    Po[No] == null && WT.f(Po, No, { configurable: !0, value: VT(null) });
    Xl.exports = function (e) {
      Po[No][e] = !0;
    };
  });
  var jl = l(() => {
    "use strict";
    var HT = Cl(),
      XT = xo().includes,
      BT = Bl();
    HT(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return XT(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    BT("includes");
  });
  var Kl = l((qH, zl) => {
    var jT = Ee(),
      zT = Qe();
    zl.exports = function (e, t) {
      return zT(jT[e].prototype[t]);
    };
  });
  var Ql = l((DH, Yl) => {
    jl();
    var KT = Kl();
    Yl.exports = KT("Array", "includes");
  });
  var Zl = l((FH, $l) => {
    var YT = Ql();
    $l.exports = YT;
  });
  var ef = l((kH, Jl) => {
    var QT = Zl();
    Jl.exports = QT;
  });
  var Mo = l((GH, tf) => {
    var $T =
      typeof global == "object" && global && global.Object === Object && global;
    tf.exports = $T;
  });
  var Ze = l((UH, rf) => {
    var ZT = Mo(),
      JT = typeof self == "object" && self && self.Object === Object && self,
      ex = ZT || JT || Function("return this")();
    rf.exports = ex;
  });
  var Qt = l((VH, nf) => {
    var tx = Ze(),
      rx = tx.Symbol;
    nf.exports = rx;
  });
  var uf = l((WH, sf) => {
    var of = Qt(),
      af = Object.prototype,
      nx = af.hasOwnProperty,
      ix = af.toString,
      Pr = of ? of.toStringTag : void 0;
    function ox(e) {
      var t = nx.call(e, Pr),
        r = e[Pr];
      try {
        e[Pr] = void 0;
        var n = !0;
      } catch {}
      var i = ix.call(e);
      return n && (t ? (e[Pr] = r) : delete e[Pr]), i;
    }
    sf.exports = ox;
  });
  var lf = l((HH, cf) => {
    var ax = Object.prototype,
      sx = ax.toString;
    function ux(e) {
      return sx.call(e);
    }
    cf.exports = ux;
  });
  var Tt = l((XH, pf) => {
    var ff = Qt(),
      cx = uf(),
      lx = lf(),
      fx = "[object Null]",
      dx = "[object Undefined]",
      df = ff ? ff.toStringTag : void 0;
    function px(e) {
      return e == null
        ? e === void 0
          ? dx
          : fx
        : df && df in Object(e)
        ? cx(e)
        : lx(e);
    }
    pf.exports = px;
  });
  var qo = l((BH, vf) => {
    function vx(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    vf.exports = vx;
  });
  var Do = l((jH, hf) => {
    var hx = qo(),
      gx = hx(Object.getPrototypeOf, Object);
    hf.exports = gx;
  });
  var ht = l((zH, gf) => {
    function mx(e) {
      return e != null && typeof e == "object";
    }
    gf.exports = mx;
  });
  var Fo = l((KH, yf) => {
    var yx = Tt(),
      Ex = Do(),
      bx = ht(),
      _x = "[object Object]",
      Ix = Function.prototype,
      wx = Object.prototype,
      mf = Ix.toString,
      Tx = wx.hasOwnProperty,
      xx = mf.call(Object);
    function Ox(e) {
      if (!bx(e) || yx(e) != _x) return !1;
      var t = Ex(e);
      if (t === null) return !0;
      var r = Tx.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && mf.call(r) == xx;
    }
    yf.exports = Ox;
  });
  var Ef = l((ko) => {
    "use strict";
    Object.defineProperty(ko, "__esModule", { value: !0 });
    ko.default = Ax;
    function Ax(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var bf = l((Uo, Go) => {
    "use strict";
    Object.defineProperty(Uo, "__esModule", { value: !0 });
    var Sx = Ef(),
      Cx = Rx(Sx);
    function Rx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var $t;
    typeof self < "u"
      ? ($t = self)
      : typeof window < "u"
      ? ($t = window)
      : typeof global < "u"
      ? ($t = global)
      : typeof Go < "u"
      ? ($t = Go)
      : ($t = Function("return this")());
    var Lx = (0, Cx.default)($t);
    Uo.default = Lx;
  });
  var Vo = l((Mr) => {
    "use strict";
    Mr.__esModule = !0;
    Mr.ActionTypes = void 0;
    Mr.default = Tf;
    var Nx = Fo(),
      Px = wf(Nx),
      Mx = bf(),
      _f = wf(Mx);
    function wf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var If = (Mr.ActionTypes = { INIT: "@@redux/INIT" });
    function Tf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Tf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        s = [],
        a = s,
        u = !1;
      function d() {
        a === s && (a = s.slice());
      }
      function E() {
        return o;
      }
      function f(w) {
        if (typeof w != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          d(),
          a.push(w),
          function () {
            if (C) {
              (C = !1), d();
              var P = a.indexOf(w);
              a.splice(P, 1);
            }
          }
        );
      }
      function I(w) {
        if (!(0, Px.default)(w))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof w.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, w));
        } finally {
          u = !1;
        }
        for (var C = (s = a), A = 0; A < C.length; A++) C[A]();
        return w;
      }
      function m(w) {
        if (typeof w != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = w), I({ type: If.INIT });
      }
      function y() {
        var w,
          C = f;
        return (
          (w = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function L() {
                P.next && P.next(E());
              }
              L();
              var D = C(L);
              return { unsubscribe: D };
            },
          }),
          (w[_f.default] = function () {
            return this;
          }),
          w
        );
      }
      return (
        I({ type: If.INIT }),
        (n = { dispatch: I, subscribe: f, getState: E, replaceReducer: m }),
        (n[_f.default] = y),
        n
      );
    }
  });
  var Ho = l((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = qx;
    function qx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Af = l((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    Xo.default = Ux;
    var xf = Vo(),
      Dx = Fo(),
      ZH = Of(Dx),
      Fx = Ho(),
      JH = Of(Fx);
    function Of(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function kx(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Gx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: xf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                xf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Ux(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var s;
      var a;
      try {
        Gx(r);
      } catch (u) {
        a = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          E = arguments[1];
        if (a) throw a;
        if (!1) var f;
        for (var I = !1, m = {}, y = 0; y < o.length; y++) {
          var w = o[y],
            C = r[w],
            A = d[w],
            P = C(A, E);
          if (typeof P > "u") {
            var L = kx(w, E);
            throw new Error(L);
          }
          (m[w] = P), (I = I || P !== A);
        }
        return I ? m : d;
      };
    }
  });
  var Cf = l((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = Vx;
    function Sf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Vx(e, t) {
      if (typeof e == "function") return Sf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          s = e[o];
        typeof s == "function" && (n[o] = Sf(s, t));
      }
      return n;
    }
  });
  var zo = l((jo) => {
    "use strict";
    jo.__esModule = !0;
    jo.default = Wx;
    function Wx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, s) {
          return s(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Rf = l((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    var Hx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ko.default = zx;
    var Xx = zo(),
      Bx = jx(Xx);
    function jx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function zx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, s) {
          var a = n(i, o, s),
            u = a.dispatch,
            d = [],
            E = {
              getState: a.getState,
              dispatch: function (I) {
                return u(I);
              },
            };
          return (
            (d = t.map(function (f) {
              return f(E);
            })),
            (u = Bx.default.apply(void 0, d)(a.dispatch)),
            Hx({}, a, { dispatch: u })
          );
        };
      };
    }
  });
  var Yo = l((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var Kx = Vo(),
      Yx = Zt(Kx),
      Qx = Af(),
      $x = Zt(Qx),
      Zx = Cf(),
      Jx = Zt(Zx),
      eO = Rf(),
      tO = Zt(eO),
      rO = zo(),
      nO = Zt(rO),
      iO = Ho(),
      iX = Zt(iO);
    function Zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = Yx.default;
    Be.combineReducers = $x.default;
    Be.bindActionCreators = Jx.default;
    Be.applyMiddleware = tO.default;
    Be.compose = nO.default;
  });
  var Je,
    Qo,
    ut,
    oO,
    aO,
    Rn,
    sO,
    $o = ye(() => {
      "use strict";
      (Je = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Qo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (ut = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (oO = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (aO = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Rn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (sO = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ve,
    uO,
    Ln = ye(() => {
      "use strict";
      (Ve = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (uO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var cO,
    Lf = ye(() => {
      "use strict";
      cO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var lO,
    fO,
    dO,
    pO,
    vO,
    hO,
    gO,
    Zo,
    Nf = ye(() => {
      "use strict";
      Ln();
      ({
        TRANSFORM_MOVE: lO,
        TRANSFORM_SCALE: fO,
        TRANSFORM_ROTATE: dO,
        TRANSFORM_SKEW: pO,
        STYLE_SIZE: vO,
        STYLE_FILTER: hO,
        STYLE_FONT_VARIATION: gO,
      } = Ve),
        (Zo = {
          [lO]: !0,
          [fO]: !0,
          [dO]: !0,
          [pO]: !0,
          [vO]: !0,
          [hO]: !0,
          [gO]: !0,
        });
    });
  var xe = {};
  Ue(xe, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => PO,
    IX2_ANIMATION_FRAME_CHANGED: () => AO,
    IX2_CLEAR_REQUESTED: () => TO,
    IX2_ELEMENT_STATE_CHANGED: () => NO,
    IX2_EVENT_LISTENER_ADDED: () => xO,
    IX2_EVENT_STATE_CHANGED: () => OO,
    IX2_INSTANCE_ADDED: () => CO,
    IX2_INSTANCE_REMOVED: () => LO,
    IX2_INSTANCE_STARTED: () => RO,
    IX2_MEDIA_QUERIES_DEFINED: () => qO,
    IX2_PARAMETER_CHANGED: () => SO,
    IX2_PLAYBACK_REQUESTED: () => IO,
    IX2_PREVIEW_REQUESTED: () => _O,
    IX2_RAW_DATA_IMPORTED: () => mO,
    IX2_SESSION_INITIALIZED: () => yO,
    IX2_SESSION_STARTED: () => EO,
    IX2_SESSION_STOPPED: () => bO,
    IX2_STOP_REQUESTED: () => wO,
    IX2_TEST_FRAME_RENDERED: () => DO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => MO,
  });
  var mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    wO,
    TO,
    xO,
    OO,
    AO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    MO,
    qO,
    DO,
    Pf = ye(() => {
      "use strict";
      (mO = "IX2_RAW_DATA_IMPORTED"),
        (yO = "IX2_SESSION_INITIALIZED"),
        (EO = "IX2_SESSION_STARTED"),
        (bO = "IX2_SESSION_STOPPED"),
        (_O = "IX2_PREVIEW_REQUESTED"),
        (IO = "IX2_PLAYBACK_REQUESTED"),
        (wO = "IX2_STOP_REQUESTED"),
        (TO = "IX2_CLEAR_REQUESTED"),
        (xO = "IX2_EVENT_LISTENER_ADDED"),
        (OO = "IX2_EVENT_STATE_CHANGED"),
        (AO = "IX2_ANIMATION_FRAME_CHANGED"),
        (SO = "IX2_PARAMETER_CHANGED"),
        (CO = "IX2_INSTANCE_ADDED"),
        (RO = "IX2_INSTANCE_STARTED"),
        (LO = "IX2_INSTANCE_REMOVED"),
        (NO = "IX2_ELEMENT_STATE_CHANGED"),
        (PO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (MO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (qO = "IX2_MEDIA_QUERIES_DEFINED"),
        (DO = "IX2_TEST_FRAME_RENDERED");
    });
  var Pe = {};
  Ue(Pe, {
    ABSTRACT_NODE: () => MA,
    AUTO: () => wA,
    BACKGROUND: () => mA,
    BACKGROUND_COLOR: () => gA,
    BAR_DELIMITER: () => OA,
    BORDER_COLOR: () => yA,
    BOUNDARY_SELECTOR: () => VO,
    CHILDREN: () => AA,
    COLON_DELIMITER: () => xA,
    COLOR: () => EA,
    COMMA_DELIMITER: () => TA,
    CONFIG_UNIT: () => YO,
    CONFIG_VALUE: () => BO,
    CONFIG_X_UNIT: () => jO,
    CONFIG_X_VALUE: () => WO,
    CONFIG_Y_UNIT: () => zO,
    CONFIG_Y_VALUE: () => HO,
    CONFIG_Z_UNIT: () => KO,
    CONFIG_Z_VALUE: () => XO,
    DISPLAY: () => bA,
    FILTER: () => dA,
    FLEX: () => _A,
    FONT_VARIATION_SETTINGS: () => pA,
    HEIGHT: () => hA,
    HTML_ELEMENT: () => NA,
    IMMEDIATE_CHILDREN: () => SA,
    IX2_ID_DELIMITER: () => FO,
    OPACITY: () => fA,
    PARENT: () => RA,
    PLAIN_OBJECT: () => PA,
    PRESERVE_3D: () => LA,
    RENDER_GENERAL: () => DA,
    RENDER_PLUGIN: () => kA,
    RENDER_STYLE: () => FA,
    RENDER_TRANSFORM: () => qA,
    ROTATE_X: () => oA,
    ROTATE_Y: () => aA,
    ROTATE_Z: () => sA,
    SCALE_3D: () => iA,
    SCALE_X: () => tA,
    SCALE_Y: () => rA,
    SCALE_Z: () => nA,
    SIBLINGS: () => CA,
    SKEW: () => uA,
    SKEW_X: () => cA,
    SKEW_Y: () => lA,
    TRANSFORM: () => QO,
    TRANSLATE_3D: () => eA,
    TRANSLATE_X: () => $O,
    TRANSLATE_Y: () => ZO,
    TRANSLATE_Z: () => JO,
    WF_PAGE: () => kO,
    WIDTH: () => vA,
    WILL_CHANGE: () => IA,
    W_MOD_IX: () => UO,
    W_MOD_JS: () => GO,
  });
  var FO,
    kO,
    GO,
    UO,
    VO,
    WO,
    HO,
    XO,
    BO,
    jO,
    zO,
    KO,
    YO,
    QO,
    $O,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    hA,
    gA,
    mA,
    yA,
    EA,
    bA,
    _A,
    IA,
    wA,
    TA,
    xA,
    OA,
    AA,
    SA,
    CA,
    RA,
    LA,
    NA,
    PA,
    MA,
    qA,
    DA,
    FA,
    kA,
    Mf = ye(() => {
      "use strict";
      (FO = "|"),
        (kO = "data-wf-page"),
        (GO = "w-mod-js"),
        (UO = "w-mod-ix"),
        (VO = ".w-dyn-item"),
        (WO = "xValue"),
        (HO = "yValue"),
        (XO = "zValue"),
        (BO = "value"),
        (jO = "xUnit"),
        (zO = "yUnit"),
        (KO = "zUnit"),
        (YO = "unit"),
        (QO = "transform"),
        ($O = "translateX"),
        (ZO = "translateY"),
        (JO = "translateZ"),
        (eA = "translate3d"),
        (tA = "scaleX"),
        (rA = "scaleY"),
        (nA = "scaleZ"),
        (iA = "scale3d"),
        (oA = "rotateX"),
        (aA = "rotateY"),
        (sA = "rotateZ"),
        (uA = "skew"),
        (cA = "skewX"),
        (lA = "skewY"),
        (fA = "opacity"),
        (dA = "filter"),
        (pA = "font-variation-settings"),
        (vA = "width"),
        (hA = "height"),
        (gA = "backgroundColor"),
        (mA = "background"),
        (yA = "borderColor"),
        (EA = "color"),
        (bA = "display"),
        (_A = "flex"),
        (IA = "willChange"),
        (wA = "AUTO"),
        (TA = ","),
        (xA = ":"),
        (OA = "|"),
        (AA = "CHILDREN"),
        (SA = "IMMEDIATE_CHILDREN"),
        (CA = "SIBLINGS"),
        (RA = "PARENT"),
        (LA = "preserve-3d"),
        (NA = "HTML_ELEMENT"),
        (PA = "PLAIN_OBJECT"),
        (MA = "ABSTRACT_NODE"),
        (qA = "RENDER_TRANSFORM"),
        (DA = "RENDER_GENERAL"),
        (FA = "RENDER_STYLE"),
        (kA = "RENDER_PLUGIN");
    });
  var qf = {};
  Ue(qf, {
    ActionAppliesTo: () => uO,
    ActionTypeConsts: () => Ve,
    EventAppliesTo: () => Qo,
    EventBasedOn: () => ut,
    EventContinuousMouseAxes: () => oO,
    EventLimitAffectedElements: () => aO,
    EventTypeConsts: () => Je,
    IX2EngineActionTypes: () => xe,
    IX2EngineConstants: () => Pe,
    InteractionTypeConsts: () => cO,
    QuickEffectDirectionConsts: () => sO,
    QuickEffectIds: () => Rn,
    ReducedMotionTypes: () => Zo,
  });
  var We = ye(() => {
    "use strict";
    $o();
    Ln();
    Lf();
    Nf();
    Pf();
    Mf();
    Ln();
    $o();
  });
  var GA,
    Df,
    Ff = ye(() => {
      "use strict";
      We();
      ({ IX2_RAW_DATA_IMPORTED: GA } = xe),
        (Df = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case GA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Jt = l((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var UA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    _e.clone = Pn;
    _e.addLast = Uf;
    _e.addFirst = Vf;
    _e.removeLast = Wf;
    _e.removeFirst = Hf;
    _e.insert = Xf;
    _e.removeAt = Bf;
    _e.replaceAt = jf;
    _e.getIn = Mn;
    _e.set = qn;
    _e.setIn = Dn;
    _e.update = Kf;
    _e.updateIn = Yf;
    _e.merge = Qf;
    _e.mergeDeep = $f;
    _e.mergeIn = Zf;
    _e.omit = Jf;
    _e.addDefaults = ed;
    var kf = "INVALID_ARGS";
    function Gf(e) {
      throw new Error(e);
    }
    function Jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var VA = {}.hasOwnProperty;
    function Pn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function He(e, t, r) {
      var n = r;
      n == null && Gf(kf);
      for (
        var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3;
        a < o;
        a++
      )
        s[a - 3] = arguments[a];
      for (var u = 0; u < s.length; u++) {
        var d = s[u];
        if (d != null) {
          var E = Jo(d);
          if (E.length)
            for (var f = 0; f <= E.length; f++) {
              var I = E[f];
              if (!(e && n[I] !== void 0)) {
                var m = d[I];
                t && Nn(n[I]) && Nn(m) && (m = He(e, t, n[I], m)),
                  !(m === void 0 || m === n[I]) &&
                    (i || ((i = !0), (n = Pn(n))), (n[I] = m));
              }
            }
        }
      }
      return n;
    }
    function Nn(e) {
      var t = typeof e > "u" ? "undefined" : UA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Uf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Vf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Wf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Hf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Xf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Bf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function jf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Mn(e, t) {
      if ((!Array.isArray(t) && Gf(kf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function qn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Pn(i);
      return (o[t] = r), o;
    }
    function zf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var s =
          Nn(e) && Nn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = zf(s, t, r, n + 1);
      }
      return qn(e, o, i);
    }
    function Dn(e, t, r) {
      return t.length ? zf(e, t, r, 0) : r;
    }
    function Kf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return qn(e, t, i);
    }
    function Yf(e, t, r) {
      var n = Mn(e, t),
        i = r(n);
      return Dn(e, t, i);
    }
    function Qf(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? He.call.apply(He, [null, !1, !1, e, t, r, n, i, o].concat(a))
        : He(!1, !1, e, t, r, n, i, o);
    }
    function $f(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? He.call.apply(He, [null, !1, !0, e, t, r, n, i, o].concat(a))
        : He(!1, !0, e, t, r, n, i, o);
    }
    function Zf(e, t, r, n, i, o, s) {
      var a = Mn(e, t);
      a == null && (a = {});
      for (
        var u = void 0,
          d = arguments.length,
          E = Array(d > 7 ? d - 7 : 0),
          f = 7;
        f < d;
        f++
      )
        E[f - 7] = arguments[f];
      return (
        E.length
          ? (u = He.call.apply(He, [null, !1, !1, a, r, n, i, o, s].concat(E)))
          : (u = He(!1, !1, a, r, n, i, o, s)),
        Dn(e, t, u)
      );
    }
    function Jf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (VA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, s = Jo(e), a = 0; a < s.length; a++) {
        var u = s[a];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function ed(e, t, r, n, i, o) {
      for (
        var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6;
        u < s;
        u++
      )
        a[u - 6] = arguments[u];
      return a.length
        ? He.call.apply(He, [null, !0, !1, e, t, r, n, i, o].concat(a))
        : He(!0, !1, e, t, r, n, i, o);
    }
    var WA = {
      clone: Pn,
      addLast: Uf,
      addFirst: Vf,
      removeLast: Wf,
      removeFirst: Hf,
      insert: Xf,
      removeAt: Bf,
      replaceAt: jf,
      getIn: Mn,
      set: qn,
      setIn: Dn,
      update: Kf,
      updateIn: Yf,
      merge: Qf,
      mergeDeep: $f,
      mergeIn: Zf,
      omit: Jf,
      addDefaults: ed,
    };
    _e.default = WA;
  });
  var rd,
    HA,
    XA,
    BA,
    jA,
    zA,
    td,
    nd,
    id = ye(() => {
      "use strict";
      We();
      (rd = pe(Jt())),
        ({
          IX2_PREVIEW_REQUESTED: HA,
          IX2_PLAYBACK_REQUESTED: XA,
          IX2_STOP_REQUESTED: BA,
          IX2_CLEAR_REQUESTED: jA,
        } = xe),
        (zA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (td = Object.create(null, {
          [HA]: { value: "preview" },
          [XA]: { value: "playback" },
          [BA]: { value: "stop" },
          [jA]: { value: "clear" },
        })),
        (nd = (e = zA, t) => {
          if (t.type in td) {
            let r = [td[t.type]];
            return (0, rd.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var De,
    KA,
    YA,
    QA,
    $A,
    ZA,
    JA,
    e0,
    t0,
    r0,
    n0,
    od,
    i0,
    ad,
    sd = ye(() => {
      "use strict";
      We();
      (De = pe(Jt())),
        ({
          IX2_SESSION_INITIALIZED: KA,
          IX2_SESSION_STARTED: YA,
          IX2_TEST_FRAME_RENDERED: QA,
          IX2_SESSION_STOPPED: $A,
          IX2_EVENT_LISTENER_ADDED: ZA,
          IX2_EVENT_STATE_CHANGED: JA,
          IX2_ANIMATION_FRAME_CHANGED: e0,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: t0,
          IX2_VIEWPORT_WIDTH_CHANGED: r0,
          IX2_MEDIA_QUERIES_DEFINED: n0,
        } = xe),
        (od = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (i0 = 20),
        (ad = (e = od, t) => {
          switch (t.type) {
            case KA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, De.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case YA:
              return (0, De.set)(e, "active", !0);
            case QA: {
              let {
                payload: { step: r = i0 },
              } = t;
              return (0, De.set)(e, "tick", e.tick + r);
            }
            case $A:
              return od;
            case e0: {
              let {
                payload: { now: r },
              } = t;
              return (0, De.set)(e, "tick", r);
            }
            case ZA: {
              let r = (0, De.addLast)(e.eventListeners, t.payload);
              return (0, De.set)(e, "eventListeners", r);
            }
            case JA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, De.setIn)(e, ["eventState", r], n);
            }
            case t0: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, De.setIn)(e, ["playbackState", r], n);
            }
            case r0: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let s = 0; s < i; s++) {
                let { key: a, min: u, max: d } = n[s];
                if (r >= u && r <= d) {
                  o = a;
                  break;
                }
              }
              return (0, De.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case n0:
              return (0, De.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var cd = l((TX, ud) => {
    function o0() {
      (this.__data__ = []), (this.size = 0);
    }
    ud.exports = o0;
  });
  var Fn = l((xX, ld) => {
    function a0(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ld.exports = a0;
  });
  var qr = l((OX, fd) => {
    var s0 = Fn();
    function u0(e, t) {
      for (var r = e.length; r--; ) if (s0(e[r][0], t)) return r;
      return -1;
    }
    fd.exports = u0;
  });
  var pd = l((AX, dd) => {
    var c0 = qr(),
      l0 = Array.prototype,
      f0 = l0.splice;
    function d0(e) {
      var t = this.__data__,
        r = c0(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : f0.call(t, r, 1), --this.size, !0;
    }
    dd.exports = d0;
  });
  var hd = l((SX, vd) => {
    var p0 = qr();
    function v0(e) {
      var t = this.__data__,
        r = p0(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    vd.exports = v0;
  });
  var md = l((CX, gd) => {
    var h0 = qr();
    function g0(e) {
      return h0(this.__data__, e) > -1;
    }
    gd.exports = g0;
  });
  var Ed = l((RX, yd) => {
    var m0 = qr();
    function y0(e, t) {
      var r = this.__data__,
        n = m0(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    yd.exports = y0;
  });
  var Dr = l((LX, bd) => {
    var E0 = cd(),
      b0 = pd(),
      _0 = hd(),
      I0 = md(),
      w0 = Ed();
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = E0;
    er.prototype.delete = b0;
    er.prototype.get = _0;
    er.prototype.has = I0;
    er.prototype.set = w0;
    bd.exports = er;
  });
  var Id = l((NX, _d) => {
    var T0 = Dr();
    function x0() {
      (this.__data__ = new T0()), (this.size = 0);
    }
    _d.exports = x0;
  });
  var Td = l((PX, wd) => {
    function O0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    wd.exports = O0;
  });
  var Od = l((MX, xd) => {
    function A0(e) {
      return this.__data__.get(e);
    }
    xd.exports = A0;
  });
  var Sd = l((qX, Ad) => {
    function S0(e) {
      return this.__data__.has(e);
    }
    Ad.exports = S0;
  });
  var ct = l((DX, Cd) => {
    function C0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Cd.exports = C0;
  });
  var ea = l((FX, Rd) => {
    var R0 = Tt(),
      L0 = ct(),
      N0 = "[object AsyncFunction]",
      P0 = "[object Function]",
      M0 = "[object GeneratorFunction]",
      q0 = "[object Proxy]";
    function D0(e) {
      if (!L0(e)) return !1;
      var t = R0(e);
      return t == P0 || t == M0 || t == N0 || t == q0;
    }
    Rd.exports = D0;
  });
  var Nd = l((kX, Ld) => {
    var F0 = Ze(),
      k0 = F0["__core-js_shared__"];
    Ld.exports = k0;
  });
  var qd = l((GX, Md) => {
    var ta = Nd(),
      Pd = (function () {
        var e = /[^.]+$/.exec((ta && ta.keys && ta.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function G0(e) {
      return !!Pd && Pd in e;
    }
    Md.exports = G0;
  });
  var ra = l((UX, Dd) => {
    var U0 = Function.prototype,
      V0 = U0.toString;
    function W0(e) {
      if (e != null) {
        try {
          return V0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Dd.exports = W0;
  });
  var kd = l((VX, Fd) => {
    var H0 = ea(),
      X0 = qd(),
      B0 = ct(),
      j0 = ra(),
      z0 = /[\\^$.*+?()[\]{}|]/g,
      K0 = /^\[object .+?Constructor\]$/,
      Y0 = Function.prototype,
      Q0 = Object.prototype,
      $0 = Y0.toString,
      Z0 = Q0.hasOwnProperty,
      J0 = RegExp(
        "^" +
          $0
            .call(Z0)
            .replace(z0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function eS(e) {
      if (!B0(e) || X0(e)) return !1;
      var t = H0(e) ? J0 : K0;
      return t.test(j0(e));
    }
    Fd.exports = eS;
  });
  var Ud = l((WX, Gd) => {
    function tS(e, t) {
      return e?.[t];
    }
    Gd.exports = tS;
  });
  var xt = l((HX, Vd) => {
    var rS = kd(),
      nS = Ud();
    function iS(e, t) {
      var r = nS(e, t);
      return rS(r) ? r : void 0;
    }
    Vd.exports = iS;
  });
  var kn = l((XX, Wd) => {
    var oS = xt(),
      aS = Ze(),
      sS = oS(aS, "Map");
    Wd.exports = sS;
  });
  var Fr = l((BX, Hd) => {
    var uS = xt(),
      cS = uS(Object, "create");
    Hd.exports = cS;
  });
  var jd = l((jX, Bd) => {
    var Xd = Fr();
    function lS() {
      (this.__data__ = Xd ? Xd(null) : {}), (this.size = 0);
    }
    Bd.exports = lS;
  });
  var Kd = l((zX, zd) => {
    function fS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    zd.exports = fS;
  });
  var Qd = l((KX, Yd) => {
    var dS = Fr(),
      pS = "__lodash_hash_undefined__",
      vS = Object.prototype,
      hS = vS.hasOwnProperty;
    function gS(e) {
      var t = this.__data__;
      if (dS) {
        var r = t[e];
        return r === pS ? void 0 : r;
      }
      return hS.call(t, e) ? t[e] : void 0;
    }
    Yd.exports = gS;
  });
  var Zd = l((YX, $d) => {
    var mS = Fr(),
      yS = Object.prototype,
      ES = yS.hasOwnProperty;
    function bS(e) {
      var t = this.__data__;
      return mS ? t[e] !== void 0 : ES.call(t, e);
    }
    $d.exports = bS;
  });
  var ep = l((QX, Jd) => {
    var _S = Fr(),
      IS = "__lodash_hash_undefined__";
    function wS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = _S && t === void 0 ? IS : t),
        this
      );
    }
    Jd.exports = wS;
  });
  var rp = l(($X, tp) => {
    var TS = jd(),
      xS = Kd(),
      OS = Qd(),
      AS = Zd(),
      SS = ep();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = TS;
    tr.prototype.delete = xS;
    tr.prototype.get = OS;
    tr.prototype.has = AS;
    tr.prototype.set = SS;
    tp.exports = tr;
  });
  var op = l((ZX, ip) => {
    var np = rp(),
      CS = Dr(),
      RS = kn();
    function LS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new np(),
          map: new (RS || CS)(),
          string: new np(),
        });
    }
    ip.exports = LS;
  });
  var sp = l((JX, ap) => {
    function NS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    ap.exports = NS;
  });
  var kr = l((eB, up) => {
    var PS = sp();
    function MS(e, t) {
      var r = e.__data__;
      return PS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    up.exports = MS;
  });
  var lp = l((tB, cp) => {
    var qS = kr();
    function DS(e) {
      var t = qS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    cp.exports = DS;
  });
  var dp = l((rB, fp) => {
    var FS = kr();
    function kS(e) {
      return FS(this, e).get(e);
    }
    fp.exports = kS;
  });
  var vp = l((nB, pp) => {
    var GS = kr();
    function US(e) {
      return GS(this, e).has(e);
    }
    pp.exports = US;
  });
  var gp = l((iB, hp) => {
    var VS = kr();
    function WS(e, t) {
      var r = VS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    hp.exports = WS;
  });
  var Gn = l((oB, mp) => {
    var HS = op(),
      XS = lp(),
      BS = dp(),
      jS = vp(),
      zS = gp();
    function rr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    rr.prototype.clear = HS;
    rr.prototype.delete = XS;
    rr.prototype.get = BS;
    rr.prototype.has = jS;
    rr.prototype.set = zS;
    mp.exports = rr;
  });
  var Ep = l((aB, yp) => {
    var KS = Dr(),
      YS = kn(),
      QS = Gn(),
      $S = 200;
    function ZS(e, t) {
      var r = this.__data__;
      if (r instanceof KS) {
        var n = r.__data__;
        if (!YS || n.length < $S - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new QS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    yp.exports = ZS;
  });
  var na = l((sB, bp) => {
    var JS = Dr(),
      eC = Id(),
      tC = Td(),
      rC = Od(),
      nC = Sd(),
      iC = Ep();
    function nr(e) {
      var t = (this.__data__ = new JS(e));
      this.size = t.size;
    }
    nr.prototype.clear = eC;
    nr.prototype.delete = tC;
    nr.prototype.get = rC;
    nr.prototype.has = nC;
    nr.prototype.set = iC;
    bp.exports = nr;
  });
  var Ip = l((uB, _p) => {
    var oC = "__lodash_hash_undefined__";
    function aC(e) {
      return this.__data__.set(e, oC), this;
    }
    _p.exports = aC;
  });
  var Tp = l((cB, wp) => {
    function sC(e) {
      return this.__data__.has(e);
    }
    wp.exports = sC;
  });
  var Op = l((lB, xp) => {
    var uC = Gn(),
      cC = Ip(),
      lC = Tp();
    function Un(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new uC(); ++t < r; ) this.add(e[t]);
    }
    Un.prototype.add = Un.prototype.push = cC;
    Un.prototype.has = lC;
    xp.exports = Un;
  });
  var Sp = l((fB, Ap) => {
    function fC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ap.exports = fC;
  });
  var Rp = l((dB, Cp) => {
    function dC(e, t) {
      return e.has(t);
    }
    Cp.exports = dC;
  });
  var ia = l((pB, Lp) => {
    var pC = Op(),
      vC = Sp(),
      hC = Rp(),
      gC = 1,
      mC = 2;
    function yC(e, t, r, n, i, o) {
      var s = r & gC,
        a = e.length,
        u = t.length;
      if (a != u && !(s && u > a)) return !1;
      var d = o.get(e),
        E = o.get(t);
      if (d && E) return d == t && E == e;
      var f = -1,
        I = !0,
        m = r & mC ? new pC() : void 0;
      for (o.set(e, t), o.set(t, e); ++f < a; ) {
        var y = e[f],
          w = t[f];
        if (n) var C = s ? n(w, y, f, t, e, o) : n(y, w, f, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          I = !1;
          break;
        }
        if (m) {
          if (
            !vC(t, function (A, P) {
              if (!hC(m, P) && (y === A || i(y, A, r, n, o))) return m.push(P);
            })
          ) {
            I = !1;
            break;
          }
        } else if (!(y === w || i(y, w, r, n, o))) {
          I = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), I;
    }
    Lp.exports = yC;
  });
  var Pp = l((vB, Np) => {
    var EC = Ze(),
      bC = EC.Uint8Array;
    Np.exports = bC;
  });
  var qp = l((hB, Mp) => {
    function _C(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Mp.exports = _C;
  });
  var Fp = l((gB, Dp) => {
    function IC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Dp.exports = IC;
  });
  var Wp = l((mB, Vp) => {
    var kp = Qt(),
      Gp = Pp(),
      wC = Fn(),
      TC = ia(),
      xC = qp(),
      OC = Fp(),
      AC = 1,
      SC = 2,
      CC = "[object Boolean]",
      RC = "[object Date]",
      LC = "[object Error]",
      NC = "[object Map]",
      PC = "[object Number]",
      MC = "[object RegExp]",
      qC = "[object Set]",
      DC = "[object String]",
      FC = "[object Symbol]",
      kC = "[object ArrayBuffer]",
      GC = "[object DataView]",
      Up = kp ? kp.prototype : void 0,
      oa = Up ? Up.valueOf : void 0;
    function UC(e, t, r, n, i, o, s) {
      switch (r) {
        case GC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case kC:
          return !(e.byteLength != t.byteLength || !o(new Gp(e), new Gp(t)));
        case CC:
        case RC:
        case PC:
          return wC(+e, +t);
        case LC:
          return e.name == t.name && e.message == t.message;
        case MC:
        case DC:
          return e == t + "";
        case NC:
          var a = xC;
        case qC:
          var u = n & AC;
          if ((a || (a = OC), e.size != t.size && !u)) return !1;
          var d = s.get(e);
          if (d) return d == t;
          (n |= SC), s.set(e, t);
          var E = TC(a(e), a(t), n, i, o, s);
          return s.delete(e), E;
        case FC:
          if (oa) return oa.call(e) == oa.call(t);
      }
      return !1;
    }
    Vp.exports = UC;
  });
  var Vn = l((yB, Hp) => {
    function VC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Hp.exports = VC;
  });
  var Ae = l((EB, Xp) => {
    var WC = Array.isArray;
    Xp.exports = WC;
  });
  var aa = l((bB, Bp) => {
    var HC = Vn(),
      XC = Ae();
    function BC(e, t, r) {
      var n = t(e);
      return XC(e) ? n : HC(n, r(e));
    }
    Bp.exports = BC;
  });
  var zp = l((_B, jp) => {
    function jC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var s = e[r];
        t(s, r, e) && (o[i++] = s);
      }
      return o;
    }
    jp.exports = jC;
  });
  var sa = l((IB, Kp) => {
    function zC() {
      return [];
    }
    Kp.exports = zC;
  });
  var ua = l((wB, Qp) => {
    var KC = zp(),
      YC = sa(),
      QC = Object.prototype,
      $C = QC.propertyIsEnumerable,
      Yp = Object.getOwnPropertySymbols,
      ZC = Yp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                KC(Yp(e), function (t) {
                  return $C.call(e, t);
                }));
          }
        : YC;
    Qp.exports = ZC;
  });
  var Zp = l((TB, $p) => {
    function JC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    $p.exports = JC;
  });
  var ev = l((xB, Jp) => {
    var eR = Tt(),
      tR = ht(),
      rR = "[object Arguments]";
    function nR(e) {
      return tR(e) && eR(e) == rR;
    }
    Jp.exports = nR;
  });
  var Gr = l((OB, nv) => {
    var tv = ev(),
      iR = ht(),
      rv = Object.prototype,
      oR = rv.hasOwnProperty,
      aR = rv.propertyIsEnumerable,
      sR = tv(
        (function () {
          return arguments;
        })()
      )
        ? tv
        : function (e) {
            return iR(e) && oR.call(e, "callee") && !aR.call(e, "callee");
          };
    nv.exports = sR;
  });
  var ov = l((AB, iv) => {
    function uR() {
      return !1;
    }
    iv.exports = uR;
  });
  var Wn = l((Ur, ir) => {
    var cR = Ze(),
      lR = ov(),
      uv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      av = uv && typeof ir == "object" && ir && !ir.nodeType && ir,
      fR = av && av.exports === uv,
      sv = fR ? cR.Buffer : void 0,
      dR = sv ? sv.isBuffer : void 0,
      pR = dR || lR;
    ir.exports = pR;
  });
  var Hn = l((SB, cv) => {
    var vR = 9007199254740991,
      hR = /^(?:0|[1-9]\d*)$/;
    function gR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? vR),
        !!t &&
          (r == "number" || (r != "symbol" && hR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    cv.exports = gR;
  });
  var Xn = l((CB, lv) => {
    var mR = 9007199254740991;
    function yR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mR;
    }
    lv.exports = yR;
  });
  var dv = l((RB, fv) => {
    var ER = Tt(),
      bR = Xn(),
      _R = ht(),
      IR = "[object Arguments]",
      wR = "[object Array]",
      TR = "[object Boolean]",
      xR = "[object Date]",
      OR = "[object Error]",
      AR = "[object Function]",
      SR = "[object Map]",
      CR = "[object Number]",
      RR = "[object Object]",
      LR = "[object RegExp]",
      NR = "[object Set]",
      PR = "[object String]",
      MR = "[object WeakMap]",
      qR = "[object ArrayBuffer]",
      DR = "[object DataView]",
      FR = "[object Float32Array]",
      kR = "[object Float64Array]",
      GR = "[object Int8Array]",
      UR = "[object Int16Array]",
      VR = "[object Int32Array]",
      WR = "[object Uint8Array]",
      HR = "[object Uint8ClampedArray]",
      XR = "[object Uint16Array]",
      BR = "[object Uint32Array]",
      me = {};
    me[FR] =
      me[kR] =
      me[GR] =
      me[UR] =
      me[VR] =
      me[WR] =
      me[HR] =
      me[XR] =
      me[BR] =
        !0;
    me[IR] =
      me[wR] =
      me[qR] =
      me[TR] =
      me[DR] =
      me[xR] =
      me[OR] =
      me[AR] =
      me[SR] =
      me[CR] =
      me[RR] =
      me[LR] =
      me[NR] =
      me[PR] =
      me[MR] =
        !1;
    function jR(e) {
      return _R(e) && bR(e.length) && !!me[ER(e)];
    }
    fv.exports = jR;
  });
  var vv = l((LB, pv) => {
    function zR(e) {
      return function (t) {
        return e(t);
      };
    }
    pv.exports = zR;
  });
  var gv = l((Vr, or) => {
    var KR = Mo(),
      hv = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
      Wr = hv && typeof or == "object" && or && !or.nodeType && or,
      YR = Wr && Wr.exports === hv,
      ca = YR && KR.process,
      QR = (function () {
        try {
          var e = Wr && Wr.require && Wr.require("util").types;
          return e || (ca && ca.binding && ca.binding("util"));
        } catch {}
      })();
    or.exports = QR;
  });
  var Bn = l((NB, Ev) => {
    var $R = dv(),
      ZR = vv(),
      mv = gv(),
      yv = mv && mv.isTypedArray,
      JR = yv ? ZR(yv) : $R;
    Ev.exports = JR;
  });
  var la = l((PB, bv) => {
    var eL = Zp(),
      tL = Gr(),
      rL = Ae(),
      nL = Wn(),
      iL = Hn(),
      oL = Bn(),
      aL = Object.prototype,
      sL = aL.hasOwnProperty;
    function uL(e, t) {
      var r = rL(e),
        n = !r && tL(e),
        i = !r && !n && nL(e),
        o = !r && !n && !i && oL(e),
        s = r || n || i || o,
        a = s ? eL(e.length, String) : [],
        u = a.length;
      for (var d in e)
        (t || sL.call(e, d)) &&
          !(
            s &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              iL(d, u))
          ) &&
          a.push(d);
      return a;
    }
    bv.exports = uL;
  });
  var jn = l((MB, _v) => {
    var cL = Object.prototype;
    function lL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || cL;
      return e === r;
    }
    _v.exports = lL;
  });
  var wv = l((qB, Iv) => {
    var fL = qo(),
      dL = fL(Object.keys, Object);
    Iv.exports = dL;
  });
  var zn = l((DB, Tv) => {
    var pL = jn(),
      vL = wv(),
      hL = Object.prototype,
      gL = hL.hasOwnProperty;
    function mL(e) {
      if (!pL(e)) return vL(e);
      var t = [];
      for (var r in Object(e)) gL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Tv.exports = mL;
  });
  var Dt = l((FB, xv) => {
    var yL = ea(),
      EL = Xn();
    function bL(e) {
      return e != null && EL(e.length) && !yL(e);
    }
    xv.exports = bL;
  });
  var Hr = l((kB, Ov) => {
    var _L = la(),
      IL = zn(),
      wL = Dt();
    function TL(e) {
      return wL(e) ? _L(e) : IL(e);
    }
    Ov.exports = TL;
  });
  var Sv = l((GB, Av) => {
    var xL = aa(),
      OL = ua(),
      AL = Hr();
    function SL(e) {
      return xL(e, AL, OL);
    }
    Av.exports = SL;
  });
  var Lv = l((UB, Rv) => {
    var Cv = Sv(),
      CL = 1,
      RL = Object.prototype,
      LL = RL.hasOwnProperty;
    function NL(e, t, r, n, i, o) {
      var s = r & CL,
        a = Cv(e),
        u = a.length,
        d = Cv(t),
        E = d.length;
      if (u != E && !s) return !1;
      for (var f = u; f--; ) {
        var I = a[f];
        if (!(s ? I in t : LL.call(t, I))) return !1;
      }
      var m = o.get(e),
        y = o.get(t);
      if (m && y) return m == t && y == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var C = s; ++f < u; ) {
        I = a[f];
        var A = e[I],
          P = t[I];
        if (n) var L = s ? n(P, A, I, t, e, o) : n(A, P, I, e, t, o);
        if (!(L === void 0 ? A === P || i(A, P, r, n, o) : L)) {
          w = !1;
          break;
        }
        C || (C = I == "constructor");
      }
      if (w && !C) {
        var D = e.constructor,
          G = t.constructor;
        D != G &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof D == "function" &&
            D instanceof D &&
            typeof G == "function" &&
            G instanceof G
          ) &&
          (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    Rv.exports = NL;
  });
  var Pv = l((VB, Nv) => {
    var PL = xt(),
      ML = Ze(),
      qL = PL(ML, "DataView");
    Nv.exports = qL;
  });
  var qv = l((WB, Mv) => {
    var DL = xt(),
      FL = Ze(),
      kL = DL(FL, "Promise");
    Mv.exports = kL;
  });
  var Fv = l((HB, Dv) => {
    var GL = xt(),
      UL = Ze(),
      VL = GL(UL, "Set");
    Dv.exports = VL;
  });
  var fa = l((XB, kv) => {
    var WL = xt(),
      HL = Ze(),
      XL = WL(HL, "WeakMap");
    kv.exports = XL;
  });
  var Kn = l((BB, Bv) => {
    var da = Pv(),
      pa = kn(),
      va = qv(),
      ha = Fv(),
      ga = fa(),
      Xv = Tt(),
      ar = ra(),
      Gv = "[object Map]",
      BL = "[object Object]",
      Uv = "[object Promise]",
      Vv = "[object Set]",
      Wv = "[object WeakMap]",
      Hv = "[object DataView]",
      jL = ar(da),
      zL = ar(pa),
      KL = ar(va),
      YL = ar(ha),
      QL = ar(ga),
      Ft = Xv;
    ((da && Ft(new da(new ArrayBuffer(1))) != Hv) ||
      (pa && Ft(new pa()) != Gv) ||
      (va && Ft(va.resolve()) != Uv) ||
      (ha && Ft(new ha()) != Vv) ||
      (ga && Ft(new ga()) != Wv)) &&
      (Ft = function (e) {
        var t = Xv(e),
          r = t == BL ? e.constructor : void 0,
          n = r ? ar(r) : "";
        if (n)
          switch (n) {
            case jL:
              return Hv;
            case zL:
              return Gv;
            case KL:
              return Uv;
            case YL:
              return Vv;
            case QL:
              return Wv;
          }
        return t;
      });
    Bv.exports = Ft;
  });
  var Jv = l((jB, Zv) => {
    var ma = na(),
      $L = ia(),
      ZL = Wp(),
      JL = Lv(),
      jv = Kn(),
      zv = Ae(),
      Kv = Wn(),
      eN = Bn(),
      tN = 1,
      Yv = "[object Arguments]",
      Qv = "[object Array]",
      Yn = "[object Object]",
      rN = Object.prototype,
      $v = rN.hasOwnProperty;
    function nN(e, t, r, n, i, o) {
      var s = zv(e),
        a = zv(t),
        u = s ? Qv : jv(e),
        d = a ? Qv : jv(t);
      (u = u == Yv ? Yn : u), (d = d == Yv ? Yn : d);
      var E = u == Yn,
        f = d == Yn,
        I = u == d;
      if (I && Kv(e)) {
        if (!Kv(t)) return !1;
        (s = !0), (E = !1);
      }
      if (I && !E)
        return (
          o || (o = new ma()),
          s || eN(e) ? $L(e, t, r, n, i, o) : ZL(e, t, u, r, n, i, o)
        );
      if (!(r & tN)) {
        var m = E && $v.call(e, "__wrapped__"),
          y = f && $v.call(t, "__wrapped__");
        if (m || y) {
          var w = m ? e.value() : e,
            C = y ? t.value() : t;
          return o || (o = new ma()), i(w, C, r, n, o);
        }
      }
      return I ? (o || (o = new ma()), JL(e, t, r, n, i, o)) : !1;
    }
    Zv.exports = nN;
  });
  var ya = l((zB, rh) => {
    var iN = Jv(),
      eh = ht();
    function th(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!eh(e) && !eh(t))
        ? e !== e && t !== t
        : iN(e, t, r, n, th, i);
    }
    rh.exports = th;
  });
  var ih = l((KB, nh) => {
    var oN = na(),
      aN = ya(),
      sN = 1,
      uN = 2;
    function cN(e, t, r, n) {
      var i = r.length,
        o = i,
        s = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var a = r[i];
        if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        a = r[i];
        var u = a[0],
          d = e[u],
          E = a[1];
        if (s && a[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var f = new oN();
          if (n) var I = n(d, E, u, e, t, f);
          if (!(I === void 0 ? aN(E, d, sN | uN, n, f) : I)) return !1;
        }
      }
      return !0;
    }
    nh.exports = cN;
  });
  var Ea = l((YB, oh) => {
    var lN = ct();
    function fN(e) {
      return e === e && !lN(e);
    }
    oh.exports = fN;
  });
  var sh = l((QB, ah) => {
    var dN = Ea(),
      pN = Hr();
    function vN(e) {
      for (var t = pN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, dN(i)];
      }
      return t;
    }
    ah.exports = vN;
  });
  var ba = l(($B, uh) => {
    function hN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    uh.exports = hN;
  });
  var lh = l((ZB, ch) => {
    var gN = ih(),
      mN = sh(),
      yN = ba();
    function EN(e) {
      var t = mN(e);
      return t.length == 1 && t[0][2]
        ? yN(t[0][0], t[0][1])
        : function (r) {
            return r === e || gN(r, e, t);
          };
    }
    ch.exports = EN;
  });
  var Xr = l((JB, fh) => {
    var bN = Tt(),
      _N = ht(),
      IN = "[object Symbol]";
    function wN(e) {
      return typeof e == "symbol" || (_N(e) && bN(e) == IN);
    }
    fh.exports = wN;
  });
  var Qn = l((e5, dh) => {
    var TN = Ae(),
      xN = Xr(),
      ON = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      AN = /^\w*$/;
    function SN(e, t) {
      if (TN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        xN(e)
        ? !0
        : AN.test(e) || !ON.test(e) || (t != null && e in Object(t));
    }
    dh.exports = SN;
  });
  var hh = l((t5, vh) => {
    var ph = Gn(),
      CN = "Expected a function";
    function _a(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(CN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, n);
        return (r.cache = o.set(i, s) || o), s;
      };
      return (r.cache = new (_a.Cache || ph)()), r;
    }
    _a.Cache = ph;
    vh.exports = _a;
  });
  var mh = l((r5, gh) => {
    var RN = hh(),
      LN = 500;
    function NN(e) {
      var t = RN(e, function (n) {
          return r.size === LN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    gh.exports = NN;
  });
  var Eh = l((n5, yh) => {
    var PN = mh(),
      MN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      qN = /\\(\\)?/g,
      DN = PN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(MN, function (r, n, i, o) {
            t.push(i ? o.replace(qN, "$1") : n || r);
          }),
          t
        );
      });
    yh.exports = DN;
  });
  var Ia = l((i5, bh) => {
    function FN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    bh.exports = FN;
  });
  var Oh = l((o5, xh) => {
    var _h = Qt(),
      kN = Ia(),
      GN = Ae(),
      UN = Xr(),
      VN = 1 / 0,
      Ih = _h ? _h.prototype : void 0,
      wh = Ih ? Ih.toString : void 0;
    function Th(e) {
      if (typeof e == "string") return e;
      if (GN(e)) return kN(e, Th) + "";
      if (UN(e)) return wh ? wh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -VN ? "-0" : t;
    }
    xh.exports = Th;
  });
  var Sh = l((a5, Ah) => {
    var WN = Oh();
    function HN(e) {
      return e == null ? "" : WN(e);
    }
    Ah.exports = HN;
  });
  var Br = l((s5, Ch) => {
    var XN = Ae(),
      BN = Qn(),
      jN = Eh(),
      zN = Sh();
    function KN(e, t) {
      return XN(e) ? e : BN(e, t) ? [e] : jN(zN(e));
    }
    Ch.exports = KN;
  });
  var sr = l((u5, Rh) => {
    var YN = Xr(),
      QN = 1 / 0;
    function $N(e) {
      if (typeof e == "string" || YN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -QN ? "-0" : t;
    }
    Rh.exports = $N;
  });
  var $n = l((c5, Lh) => {
    var ZN = Br(),
      JN = sr();
    function eP(e, t) {
      t = ZN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[JN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Lh.exports = eP;
  });
  var Zn = l((l5, Nh) => {
    var tP = $n();
    function rP(e, t, r) {
      var n = e == null ? void 0 : tP(e, t);
      return n === void 0 ? r : n;
    }
    Nh.exports = rP;
  });
  var Mh = l((f5, Ph) => {
    function nP(e, t) {
      return e != null && t in Object(e);
    }
    Ph.exports = nP;
  });
  var Dh = l((d5, qh) => {
    var iP = Br(),
      oP = Gr(),
      aP = Ae(),
      sP = Hn(),
      uP = Xn(),
      cP = sr();
    function lP(e, t, r) {
      t = iP(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var s = cP(t[n]);
        if (!(o = e != null && r(e, s))) break;
        e = e[s];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && uP(i) && sP(s, i) && (aP(e) || oP(e)));
    }
    qh.exports = lP;
  });
  var kh = l((p5, Fh) => {
    var fP = Mh(),
      dP = Dh();
    function pP(e, t) {
      return e != null && dP(e, t, fP);
    }
    Fh.exports = pP;
  });
  var Uh = l((v5, Gh) => {
    var vP = ya(),
      hP = Zn(),
      gP = kh(),
      mP = Qn(),
      yP = Ea(),
      EP = ba(),
      bP = sr(),
      _P = 1,
      IP = 2;
    function wP(e, t) {
      return mP(e) && yP(t)
        ? EP(bP(e), t)
        : function (r) {
            var n = hP(r, e);
            return n === void 0 && n === t ? gP(r, e) : vP(t, n, _P | IP);
          };
    }
    Gh.exports = wP;
  });
  var Jn = l((h5, Vh) => {
    function TP(e) {
      return e;
    }
    Vh.exports = TP;
  });
  var wa = l((g5, Wh) => {
    function xP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Wh.exports = xP;
  });
  var Xh = l((m5, Hh) => {
    var OP = $n();
    function AP(e) {
      return function (t) {
        return OP(t, e);
      };
    }
    Hh.exports = AP;
  });
  var jh = l((y5, Bh) => {
    var SP = wa(),
      CP = Xh(),
      RP = Qn(),
      LP = sr();
    function NP(e) {
      return RP(e) ? SP(LP(e)) : CP(e);
    }
    Bh.exports = NP;
  });
  var Ot = l((E5, zh) => {
    var PP = lh(),
      MP = Uh(),
      qP = Jn(),
      DP = Ae(),
      FP = jh();
    function kP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? qP
        : typeof e == "object"
        ? DP(e)
          ? MP(e[0], e[1])
          : PP(e)
        : FP(e);
    }
    zh.exports = kP;
  });
  var Ta = l((b5, Kh) => {
    var GP = Ot(),
      UP = Dt(),
      VP = Hr();
    function WP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!UP(t)) {
          var o = GP(r, 3);
          (t = VP(t)),
            (r = function (a) {
              return o(i[a], a, i);
            });
        }
        var s = e(t, r, n);
        return s > -1 ? i[o ? t[s] : s] : void 0;
      };
    }
    Kh.exports = WP;
  });
  var xa = l((_5, Yh) => {
    function HP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Yh.exports = HP;
  });
  var $h = l((I5, Qh) => {
    var XP = /\s/;
    function BP(e) {
      for (var t = e.length; t-- && XP.test(e.charAt(t)); );
      return t;
    }
    Qh.exports = BP;
  });
  var Jh = l((w5, Zh) => {
    var jP = $h(),
      zP = /^\s+/;
    function KP(e) {
      return e && e.slice(0, jP(e) + 1).replace(zP, "");
    }
    Zh.exports = KP;
  });
  var ei = l((T5, rg) => {
    var YP = Jh(),
      eg = ct(),
      QP = Xr(),
      tg = 0 / 0,
      $P = /^[-+]0x[0-9a-f]+$/i,
      ZP = /^0b[01]+$/i,
      JP = /^0o[0-7]+$/i,
      eM = parseInt;
    function tM(e) {
      if (typeof e == "number") return e;
      if (QP(e)) return tg;
      if (eg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = eg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = YP(e);
      var r = ZP.test(e);
      return r || JP.test(e) ? eM(e.slice(2), r ? 2 : 8) : $P.test(e) ? tg : +e;
    }
    rg.exports = tM;
  });
  var og = l((x5, ig) => {
    var rM = ei(),
      ng = 1 / 0,
      nM = 17976931348623157e292;
    function iM(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = rM(e)), e === ng || e === -ng)) {
        var t = e < 0 ? -1 : 1;
        return t * nM;
      }
      return e === e ? e : 0;
    }
    ig.exports = iM;
  });
  var Oa = l((O5, ag) => {
    var oM = og();
    function aM(e) {
      var t = oM(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    ag.exports = aM;
  });
  var ug = l((A5, sg) => {
    var sM = xa(),
      uM = Ot(),
      cM = Oa(),
      lM = Math.max;
    function fM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : cM(r);
      return i < 0 && (i = lM(n + i, 0)), sM(e, uM(t, 3), i);
    }
    sg.exports = fM;
  });
  var Aa = l((S5, cg) => {
    var dM = Ta(),
      pM = ug(),
      vM = dM(pM);
    cg.exports = vM;
  });
  var dg = {};
  Ue(dg, {
    ELEMENT_MATCHES: () => hM,
    FLEX_PREFIXED: () => Sa,
    IS_BROWSER_ENV: () => et,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => ri,
    withBrowser: () => ti,
  });
  var fg,
    et,
    ti,
    hM,
    Sa,
    At,
    lg,
    ri,
    ni = ye(() => {
      "use strict";
      (fg = pe(Aa())),
        (et = typeof window < "u"),
        (ti = (e, t) => (et ? e() : t)),
        (hM = ti(() =>
          (0, fg.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Sa = ti(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = ti(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (lg = At.split("transform")[0]),
        (ri = lg ? lg + "TransformStyle" : "transformStyle");
    });
  var Ca = l((C5, mg) => {
    var gM = 4,
      mM = 0.001,
      yM = 1e-7,
      EM = 10,
      jr = 11,
      ii = 1 / (jr - 1),
      bM = typeof Float32Array == "function";
    function pg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function vg(e, t) {
      return 3 * t - 6 * e;
    }
    function hg(e) {
      return 3 * e;
    }
    function oi(e, t, r) {
      return ((pg(t, r) * e + vg(t, r)) * e + hg(t)) * e;
    }
    function gg(e, t, r) {
      return 3 * pg(t, r) * e * e + 2 * vg(t, r) * e + hg(t);
    }
    function _M(e, t, r, n, i) {
      var o,
        s,
        a = 0;
      do
        (s = t + (r - t) / 2), (o = oi(s, n, i) - e), o > 0 ? (r = s) : (t = s);
      while (Math.abs(o) > yM && ++a < EM);
      return s;
    }
    function IM(e, t, r, n) {
      for (var i = 0; i < gM; ++i) {
        var o = gg(t, r, n);
        if (o === 0) return t;
        var s = oi(t, r, n) - e;
        t -= s / o;
      }
      return t;
    }
    mg.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = bM ? new Float32Array(jr) : new Array(jr);
      if (t !== r || n !== i)
        for (var s = 0; s < jr; ++s) o[s] = oi(s * ii, t, n);
      function a(u) {
        for (var d = 0, E = 1, f = jr - 1; E !== f && o[E] <= u; ++E) d += ii;
        --E;
        var I = (u - o[E]) / (o[E + 1] - o[E]),
          m = d + I * ii,
          y = gg(m, t, n);
        return y >= mM ? IM(u, m, t, n) : y === 0 ? m : _M(u, d, d + ii, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : oi(a(d), r, i);
      };
    };
  });
  var Kr = {};
  Ue(Kr, {
    bounce: () => iq,
    bouncePast: () => oq,
    ease: () => wM,
    easeIn: () => TM,
    easeInOut: () => OM,
    easeOut: () => xM,
    inBack: () => YM,
    inCirc: () => BM,
    inCubic: () => RM,
    inElastic: () => ZM,
    inExpo: () => WM,
    inOutBack: () => $M,
    inOutCirc: () => zM,
    inOutCubic: () => NM,
    inOutElastic: () => eq,
    inOutExpo: () => XM,
    inOutQuad: () => CM,
    inOutQuart: () => qM,
    inOutQuint: () => kM,
    inOutSine: () => VM,
    inQuad: () => AM,
    inQuart: () => PM,
    inQuint: () => DM,
    inSine: () => GM,
    outBack: () => QM,
    outBounce: () => KM,
    outCirc: () => jM,
    outCubic: () => LM,
    outElastic: () => JM,
    outExpo: () => HM,
    outQuad: () => SM,
    outQuart: () => MM,
    outQuint: () => FM,
    outSine: () => UM,
    swingFrom: () => rq,
    swingFromTo: () => tq,
    swingTo: () => nq,
  });
  function AM(e) {
    return Math.pow(e, 2);
  }
  function SM(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function CM(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function RM(e) {
    return Math.pow(e, 3);
  }
  function LM(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function NM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function PM(e) {
    return Math.pow(e, 4);
  }
  function MM(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function qM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function DM(e) {
    return Math.pow(e, 5);
  }
  function FM(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function kM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function GM(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function UM(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function VM(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function WM(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function HM(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function XM(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function BM(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function jM(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function zM(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function KM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function YM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function QM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $M(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function ZM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function JM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function eq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function tq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function rq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function nq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function iq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function oq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var zr,
    gt,
    wM,
    TM,
    xM,
    OM,
    Ra = ye(() => {
      "use strict";
      (zr = pe(Ca())),
        (gt = 1.70158),
        (wM = (0, zr.default)(0.25, 0.1, 0.25, 1)),
        (TM = (0, zr.default)(0.42, 0, 1, 1)),
        (xM = (0, zr.default)(0, 0, 0.58, 1)),
        (OM = (0, zr.default)(0.42, 0, 0.58, 1));
    });
  var Eg = {};
  Ue(Eg, {
    applyEasing: () => sq,
    createBezierEasing: () => aq,
    optimizeFloat: () => Yr,
  });
  function Yr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function aq(e) {
    return (0, yg.default)(...e);
  }
  function sq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Yr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Kr[e] ? Kr[e](t) : t);
  }
  var yg,
    La = ye(() => {
      "use strict";
      Ra();
      yg = pe(Ca());
    });
  var Ig = {};
  Ue(Ig, {
    createElementState: () => _g,
    ixElements: () => _q,
    mergeActionState: () => Na,
  });
  function _g(e, t, r, n, i) {
    let o =
      r === uq ? (0, ur.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ur.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Na(e, t, r, n, i) {
    let o = wq(i);
    return (0, ur.mergeIn)(e, [t, bq, r], n, o);
  }
  function wq(e) {
    let { config: t } = e;
    return Iq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        s = t[i],
        a = t[o];
      return s != null && a != null && (r[o] = a), r;
    }, {});
  }
  var ur,
    L5,
    uq,
    N5,
    cq,
    lq,
    fq,
    dq,
    pq,
    vq,
    hq,
    gq,
    mq,
    yq,
    Eq,
    bg,
    bq,
    _q,
    Iq,
    wg = ye(() => {
      "use strict";
      ur = pe(Jt());
      We();
      ({
        HTML_ELEMENT: L5,
        PLAIN_OBJECT: uq,
        ABSTRACT_NODE: N5,
        CONFIG_X_VALUE: cq,
        CONFIG_Y_VALUE: lq,
        CONFIG_Z_VALUE: fq,
        CONFIG_VALUE: dq,
        CONFIG_X_UNIT: pq,
        CONFIG_Y_UNIT: vq,
        CONFIG_Z_UNIT: hq,
        CONFIG_UNIT: gq,
      } = Pe),
        ({
          IX2_SESSION_STOPPED: mq,
          IX2_INSTANCE_ADDED: yq,
          IX2_ELEMENT_STATE_CHANGED: Eq,
        } = xe),
        (bg = {}),
        (bq = "refState"),
        (_q = (e = bg, t = {}) => {
          switch (t.type) {
            case mq:
              return bg;
            case yq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: s,
                } = t.payload,
                { actionTypeId: a } = o,
                u = e;
              return (
                (0, ur.getIn)(u, [r, n]) !== n && (u = _g(u, n, s, r, o)),
                Na(u, r, a, i, o)
              );
            }
            case Eq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Na(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      Iq = [
        [cq, pq],
        [lq, vq],
        [fq, hq],
        [dq, gq],
      ];
    });
  var Tg = l((Se) => {
    "use strict";
    Object.defineProperty(Se, "__esModule", { value: !0 });
    Se.renderPlugin =
      Se.getPluginOrigin =
      Se.getPluginDuration =
      Se.getPluginDestination =
      Se.getPluginConfig =
      Se.createPluginInstance =
      Se.clearPlugin =
        void 0;
    var Tq = (e) => e.value;
    Se.getPluginConfig = Tq;
    var xq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Se.getPluginDuration = xq;
    var Oq = (e) => e || { value: 0 };
    Se.getPluginOrigin = Oq;
    var Aq = (e) => ({ value: e.value });
    Se.getPluginDestination = Aq;
    var Sq = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Se.createPluginInstance = Sq;
    var Cq = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Se.renderPlugin = Cq;
    var Rq = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Se.clearPlugin = Rq;
  });
  var Og = l((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.renderPlugin =
      Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    var Lq = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Nq = () => window.Webflow.require("spline"),
      Pq = (e, t) => e.filter((r) => !t.includes(r)),
      Mq = (e, t) => e.value[t];
    Ce.getPluginConfig = Mq;
    var qq = () => null;
    Ce.getPluginDuration = qq;
    var xg = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      Dq = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            s = Pq(n, o);
          return s.length ? s.reduce((u, d) => ((u[d] = xg[d]), u), e) : e;
        }
        return n.reduce((o, s) => ((o[s] = xg[s]), o), {});
      };
    Ce.getPluginOrigin = Dq;
    var Fq = (e) => e.value;
    Ce.getPluginDestination = Fq;
    var kq = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? Lq(n) : null;
    };
    Ce.createPluginInstance = kq;
    var Gq = (e, t, r) => {
      let n = Nq(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        s = (a) => {
          if (!a) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && a.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      i ? s(i.spline) : n.setLoadHandler(e, s);
    };
    Ce.renderPlugin = Gq;
    var Uq = () => null;
    Ce.clearPlugin = Uq;
  });
  var Sg = l((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = Ag;
    Oe.renderPlugin = void 0;
    function Ag(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let s = o.substring(1);
        s.length === 3
          ? ((t = parseInt(s[0] + s[0], 16)),
            (r = parseInt(s[1] + s[1], 16)),
            (n = parseInt(s[2] + s[2], 16)))
          : s.length === 6 &&
            ((t = parseInt(s.substring(0, 2), 16)),
            (r = parseInt(s.substring(2, 4), 16)),
            (n = parseInt(s.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let s = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10)),
          (i = parseFloat(s[3]));
      } else if (o.startsWith("rgb")) {
        let s = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)),
          (r = parseInt(s[1], 10)),
          (n = parseInt(s[2], 10));
      } else if (o.startsWith("hsla")) {
        let s = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          a = parseFloat(s[0]),
          u = parseFloat(s[1].replace("%", "")) / 100,
          d = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let E = (1 - Math.abs(2 * d - 1)) * u,
          f = E * (1 - Math.abs(((a / 60) % 2) - 1)),
          I = d - E / 2,
          m,
          y,
          w;
        a >= 0 && a < 60
          ? ((m = E), (y = f), (w = 0))
          : a >= 60 && a < 120
          ? ((m = f), (y = E), (w = 0))
          : a >= 120 && a < 180
          ? ((m = 0), (y = E), (w = f))
          : a >= 180 && a < 240
          ? ((m = 0), (y = f), (w = E))
          : a >= 240 && a < 300
          ? ((m = f), (y = 0), (w = E))
          : ((m = E), (y = 0), (w = f)),
          (t = Math.round((m + I) * 255)),
          (r = Math.round((y + I) * 255)),
          (n = Math.round((w + I) * 255));
      } else if (o.startsWith("hsl")) {
        let s = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          a = parseFloat(s[0]),
          u = parseFloat(s[1].replace("%", "")) / 100,
          d = parseFloat(s[2].replace("%", "")) / 100,
          E = (1 - Math.abs(2 * d - 1)) * u,
          f = E * (1 - Math.abs(((a / 60) % 2) - 1)),
          I = d - E / 2,
          m,
          y,
          w;
        a >= 0 && a < 60
          ? ((m = E), (y = f), (w = 0))
          : a >= 60 && a < 120
          ? ((m = f), (y = E), (w = 0))
          : a >= 120 && a < 180
          ? ((m = 0), (y = E), (w = f))
          : a >= 180 && a < 240
          ? ((m = 0), (y = f), (w = E))
          : a >= 240 && a < 300
          ? ((m = f), (y = 0), (w = E))
          : ((m = E), (y = 0), (w = f)),
          (t = Math.round((m + I) * 255)),
          (r = Math.round((y + I) * 255)),
          (n = Math.round((w + I) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var Vq = (e, t) => e.value[t];
    Oe.getPluginConfig = Vq;
    var Wq = () => null;
    Oe.getPluginDuration = Wq;
    var Hq = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return Ag(i);
    };
    Oe.getPluginOrigin = Hq;
    var Xq = (e) => e.value;
    Oe.getPluginDestination = Xq;
    var Bq = () => null;
    Oe.createPluginInstance = Bq;
    var jq = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: s, red: a, green: u, blue: d, alpha: E } = o,
        f;
      s != null && (f = s + i),
        a != null &&
          d != null &&
          u != null &&
          E != null &&
          (f = `rgba(${a}, ${u}, ${d}, ${E})`),
        f != null && document.documentElement.style.setProperty(n, f);
    };
    Oe.renderPlugin = jq;
    var zq = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = zq;
  });
  var Cg = l((ai) => {
    "use strict";
    var Ma = mn().default;
    Object.defineProperty(ai, "__esModule", { value: !0 });
    ai.pluginMethodMap = void 0;
    var Pa = (We(), it(qf)),
      Kq = Ma(Tg()),
      Yq = Ma(Og()),
      Qq = Ma(Sg()),
      D5 = (ai.pluginMethodMap = new Map([
        [Pa.ActionTypeConsts.PLUGIN_LOTTIE, { ...Kq }],
        [Pa.ActionTypeConsts.PLUGIN_SPLINE, { ...Yq }],
        [Pa.ActionTypeConsts.PLUGIN_VARIABLE, { ...Qq }],
      ]));
  });
  var Rg = {};
  Ue(Rg, {
    clearPlugin: () => Ua,
    createPluginInstance: () => Zq,
    getPluginConfig: () => Da,
    getPluginDestination: () => ka,
    getPluginDuration: () => $q,
    getPluginOrigin: () => Fa,
    isPluginType: () => kt,
    renderPlugin: () => Ga,
  });
  function kt(e) {
    return qa.pluginMethodMap.has(e);
  }
  var qa,
    Gt,
    Da,
    Fa,
    $q,
    ka,
    Zq,
    Ga,
    Ua,
    Va = ye(() => {
      "use strict";
      ni();
      qa = pe(Cg());
      (Gt = (e) => (t) => {
        if (!et) return () => null;
        let r = qa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Da = Gt("getPluginConfig")),
        (Fa = Gt("getPluginOrigin")),
        ($q = Gt("getPluginDuration")),
        (ka = Gt("getPluginDestination")),
        (Zq = Gt("createPluginInstance")),
        (Ga = Gt("renderPlugin")),
        (Ua = Gt("clearPlugin"));
    });
  var Ng = l((G5, Lg) => {
    function Jq(e, t) {
      return e == null || e !== e ? t : e;
    }
    Lg.exports = Jq;
  });
  var Mg = l((U5, Pg) => {
    function e1(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Pg.exports = e1;
  });
  var Dg = l((V5, qg) => {
    function t1(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), s = n(t), a = s.length; a--; ) {
          var u = s[e ? a : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    qg.exports = t1;
  });
  var kg = l((W5, Fg) => {
    var r1 = Dg(),
      n1 = r1();
    Fg.exports = n1;
  });
  var Wa = l((H5, Gg) => {
    var i1 = kg(),
      o1 = Hr();
    function a1(e, t) {
      return e && i1(e, t, o1);
    }
    Gg.exports = a1;
  });
  var Vg = l((X5, Ug) => {
    var s1 = Dt();
    function u1(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!s1(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, s = Object(r);
          (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;

        );
        return r;
      };
    }
    Ug.exports = u1;
  });
  var Ha = l((B5, Wg) => {
    var c1 = Wa(),
      l1 = Vg(),
      f1 = l1(c1);
    Wg.exports = f1;
  });
  var Xg = l((j5, Hg) => {
    function d1(e, t, r, n, i) {
      return (
        i(e, function (o, s, a) {
          r = n ? ((n = !1), o) : t(r, o, s, a);
        }),
        r
      );
    }
    Hg.exports = d1;
  });
  var jg = l((z5, Bg) => {
    var p1 = Mg(),
      v1 = Ha(),
      h1 = Ot(),
      g1 = Xg(),
      m1 = Ae();
    function y1(e, t, r) {
      var n = m1(e) ? p1 : g1,
        i = arguments.length < 3;
      return n(e, h1(t, 4), r, i, v1);
    }
    Bg.exports = y1;
  });
  var Kg = l((K5, zg) => {
    var E1 = xa(),
      b1 = Ot(),
      _1 = Oa(),
      I1 = Math.max,
      w1 = Math.min;
    function T1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = _1(r)), (i = r < 0 ? I1(n + i, 0) : w1(i, n - 1))),
        E1(e, b1(t, 3), i, !0)
      );
    }
    zg.exports = T1;
  });
  var Qg = l((Y5, Yg) => {
    var x1 = Ta(),
      O1 = Kg(),
      A1 = x1(O1);
    Yg.exports = A1;
  });
  function $g(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function C1(e, t) {
    if ($g(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!S1.call(t, r[i]) || !$g(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var S1,
    Xa,
    Zg = ye(() => {
      "use strict";
      S1 = Object.prototype.hasOwnProperty;
      Xa = C1;
    });
  var hm = {};
  Ue(hm, {
    cleanupHTMLElement: () => OD,
    clearAllStyles: () => xD,
    clearObjectCache: () => j1,
    getActionListProgress: () => SD,
    getAffectedElements: () => Ya,
    getComputedStyle: () => eD,
    getDestinationValues: () => sD,
    getElementId: () => Q1,
    getInstanceId: () => K1,
    getInstanceOrigin: () => nD,
    getItemConfigByKey: () => aD,
    getMaxDurationItemIndex: () => vm,
    getNamespacedParameterId: () => LD,
    getRenderType: () => fm,
    getStyleProp: () => uD,
    mediaQueriesEqual: () => PD,
    observeStore: () => J1,
    reduceListToGroup: () => CD,
    reifyState: () => $1,
    renderHTMLElement: () => cD,
    shallowEqual: () => Xa,
    shouldAllowMediaQuery: () => ND,
    shouldNamespaceEventParameter: () => RD,
    stringifyTarget: () => MD,
  });
  function j1() {
    si.clear();
  }
  function K1() {
    return "i" + z1++;
  }
  function Q1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + Y1++;
  }
  function $1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, fi.default)(
        e,
        (s, a) => {
          let { eventTypeId: u } = a;
          return s[u] || (s[u] = {}), (s[u][a.id] = a), s;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((s) => s.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function J1({ store: e, select: t, onChange: r, comparator: n = Z1 }) {
    let { getState: i, subscribe: o } = e,
      s = o(u),
      a = t(i());
    function u() {
      let d = t(i());
      if (d == null) {
        s();
        return;
      }
      n(d, a) || ((a = d), r(a, e));
    }
    return s;
  }
  function tm(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: s,
        useEventTarget: a,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: s,
        useEventTarget: a,
      };
    }
    return {};
  }
  function Ya({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (R, _) =>
          R.concat(
            Ya({
              config: { target: _ },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: s,
        getQuerySelector: a,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: E,
        matchSelector: f,
        elementContains: I,
        isSiblingNode: m,
      } = i,
      { target: y } = e;
    if (!y) return [];
    let {
      id: w,
      objectId: C,
      selector: A,
      selectorGuids: P,
      appliesTo: L,
      useEventTarget: D,
    } = tm(y);
    if (C) return [si.has(C) ? si.get(C) : si.set(C, {}).get(C)];
    if (L === Qo.PAGE) {
      let R = s(w);
      return R ? [R] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[w || A] || {},
      K = !!(F.id || F.selector),
      z,
      Q,
      re,
      j = t && a(tm(t.target));
    if (
      (K
        ? ((z = F.limitAffectedElements), (Q = j), (re = a(F)))
        : (Q = re = a({ id: w, selector: A, selectorGuids: P })),
      t && D)
    ) {
      let R = r && (re || D === !0) ? [r] : u(j);
      if (re) {
        if (D === H1) return u(re).filter((_) => R.some((N) => I(_, N)));
        if (D === Jg) return u(re).filter((_) => R.some((N) => I(N, _)));
        if (D === em) return u(re).filter((_) => R.some((N) => m(N, _)));
      }
      return R;
    }
    return Q == null || re == null
      ? []
      : et && n
      ? u(re).filter((R) => n.contains(R))
      : z === Jg
      ? u(Q, re)
      : z === W1
      ? d(u(Q)).filter(f(re))
      : z === em
      ? E(u(Q)).filter(f(re))
      : u(re);
  }
  function eD({ element: e, actionItem: t }) {
    if (!et) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case pr:
      case vr:
      case hr:
      case gr:
      case pi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function nD(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: s } = n;
    if (kt(s)) return Fa(s)(t[s], n);
    switch (n.actionTypeId) {
      case lr:
      case fr:
      case dr:
      case Jr:
        return t[n.actionTypeId] || Qa[n.actionTypeId];
      case en:
        return tD(t[n.actionTypeId], n.config.filters);
      case tn:
        return rD(t[n.actionTypeId], n.config.fontVariations);
      case um:
        return { value: (0, mt.default)(parseFloat(o(e, ci)), 1) };
      case pr: {
        let a = o(e, lt),
          u = o(e, ft),
          d,
          E;
        return (
          n.config.widthUnit === St
            ? (d = rm.test(a) ? parseFloat(a) : parseFloat(r.width))
            : (d = (0, mt.default)(parseFloat(a), parseFloat(r.width))),
          n.config.heightUnit === St
            ? (E = rm.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (E = (0, mt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: E }
        );
      }
      case vr:
      case hr:
      case gr:
        return ID({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case pi:
        return { value: (0, mt.default)(o(e, li), r.display) };
      case B1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function sD({ element: e, actionItem: t, elementApi: r }) {
    if (kt(t.actionTypeId)) return ka(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case lr:
      case fr:
      case dr:
      case Jr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case pr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: s, heightUnit: a } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!et) return { widthValue: u, heightValue: d };
        if (s === St) {
          let E = n(e, lt);
          i(e, lt, ""), (u = o(e, "offsetWidth")), i(e, lt, E);
        }
        if (a === St) {
          let E = n(e, ft);
          i(e, ft, ""), (d = o(e, "offsetHeight")), i(e, ft, E);
        }
        return { widthValue: u, heightValue: d };
      }
      case vr:
      case hr:
      case gr: {
        let { rValue: n, gValue: i, bValue: o, aValue: s } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: s };
      }
      case en:
        return t.config.filters.reduce(iD, {});
      case tn:
        return t.config.fontVariations.reduce(oD, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function fm(e) {
    if (/^TRANSFORM_/.test(e)) return am;
    if (/^STYLE_/.test(e)) return za;
    if (/^GENERAL_/.test(e)) return ja;
    if (/^PLUGIN_/.test(e)) return sm;
  }
  function uD(e, t) {
    return e === za ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function cD(e, t, r, n, i, o, s, a, u) {
    switch (a) {
      case am:
        return vD(e, t, r, i, s);
      case za:
        return wD(e, t, r, i, o, s);
      case ja:
        return TD(e, i, s);
      case sm: {
        let { actionTypeId: d } = i;
        if (kt(d)) return Ga(d)(u, t, i);
      }
    }
  }
  function vD(e, t, r, n, i) {
    let o = pD
        .map((a) => {
          let u = Qa[a],
            {
              xValue: d = u.xValue,
              yValue: E = u.yValue,
              zValue: f = u.zValue,
              xUnit: I = "",
              yUnit: m = "",
              zUnit: y = "",
            } = t[a] || {};
          switch (a) {
            case lr:
              return `${N1}(${d}${I}, ${E}${m}, ${f}${y})`;
            case fr:
              return `${P1}(${d}${I}, ${E}${m}, ${f}${y})`;
            case dr:
              return `${M1}(${d}${I}) ${q1}(${E}${m}) ${D1}(${f}${y})`;
            case Jr:
              return `${F1}(${d}${I}, ${E}${m})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: s } = i;
    Ut(e, At, i), s(e, At, o), mD(n, r) && s(e, ri, k1);
  }
  function hD(e, t, r, n) {
    let i = (0, fi.default)(t, (s, a, u) => `${s} ${u}(${a}${dD(u, r)})`, ""),
      { setStyle: o } = n;
    Ut(e, Qr, n), o(e, Qr, i);
  }
  function gD(e, t, r, n) {
    let i = (0, fi.default)(
        t,
        (s, a, u) => (s.push(`"${u}" ${a}`), s),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ut(e, $r, n), o(e, $r, i);
  }
  function mD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === lr && n !== void 0) ||
      (e === fr && n !== void 0) ||
      (e === dr && (t !== void 0 || r !== void 0))
    );
  }
  function _D(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function ID({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ka[t],
      o = n(e, i),
      s = ED.test(o) ? o : r[i],
      a = _D(bD, s).split(Zr);
    return {
      rValue: (0, mt.default)(parseInt(a[0], 10), 255),
      gValue: (0, mt.default)(parseInt(a[1], 10), 255),
      bValue: (0, mt.default)(parseInt(a[2], 10), 255),
      aValue: (0, mt.default)(parseFloat(a[3]), 1),
    };
  }
  function wD(e, t, r, n, i, o) {
    let { setStyle: s } = o;
    switch (n.actionTypeId) {
      case pr: {
        let { widthUnit: a = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: E } = r;
        d !== void 0 && (a === St && (a = "px"), Ut(e, lt, o), s(e, lt, d + a)),
          E !== void 0 &&
            (u === St && (u = "px"), Ut(e, ft, o), s(e, ft, E + u));
        break;
      }
      case en: {
        hD(e, r, n.config, o);
        break;
      }
      case tn: {
        gD(e, r, n.config, o);
        break;
      }
      case vr:
      case hr:
      case gr: {
        let a = Ka[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          E = Math.round(r.bValue),
          f = r.aValue;
        Ut(e, a, o),
          s(e, a, f >= 1 ? `rgb(${u},${d},${E})` : `rgba(${u},${d},${E},${f})`);
        break;
      }
      default: {
        let { unit: a = "" } = n.config;
        Ut(e, i, o), s(e, i, r.value + a);
        break;
      }
    }
  }
  function TD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case pi: {
        let { value: i } = t.config;
        i === G1 && et ? n(e, li, Sa) : n(e, li, i);
        return;
      }
    }
  }
  function Ut(e, t, r) {
    if (!et) return;
    let n = lm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      s = i(e, cr);
    if (!s) {
      o(e, cr, n);
      return;
    }
    let a = s.split(Zr).map(cm);
    a.indexOf(n) === -1 && o(e, cr, a.concat(n).join(Zr));
  }
  function dm(e, t, r) {
    if (!et) return;
    let n = lm[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      s = i(e, cr);
    !s ||
      s.indexOf(n) === -1 ||
      o(
        e,
        cr,
        s
          .split(Zr)
          .map(cm)
          .filter((a) => a !== n)
          .join(Zr)
      );
  }
  function xD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let s = n[o],
        { config: a } = s.action,
        { actionListId: u } = a,
        d = i[u];
      d && nm({ actionList: d, event: s, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        nm({ actionList: i[o], elementApi: t });
      });
  }
  function nm({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        im({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: s } = o;
          s.forEach((a) => {
            im({ actionGroup: a, event: t, elementApi: r });
          });
        });
  }
  function im({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: s } = i,
        a;
      kt(o)
        ? (a = (u) => Ua(o)(u, i))
        : (a = pm({ effect: AD, actionTypeId: o, elementApi: r })),
        Ya({ config: s, event: t, elementApi: r }).forEach(a);
    });
  }
  function OD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === pr) {
      let { config: s } = t;
      s.widthUnit === St && n(e, lt, ""), s.heightUnit === St && n(e, ft, "");
    }
    i(e, cr) && pm({ effect: dm, actionTypeId: o, elementApi: r })(e);
  }
  function AD(e, t, r) {
    let { setStyle: n } = r;
    dm(e, t, r), n(e, t, ""), t === At && n(e, ri, "");
  }
  function vm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          s = o.delay + o.duration;
        s >= t && ((t = s), (r = i));
      }),
      r
    );
  }
  function SD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      s = 0,
      a = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: E } = u,
          f = E[vm(E)],
          { config: I, actionTypeId: m } = f;
        i.id === f.id && (a = s + o);
        let y = fm(m) === ja ? 0 : I.duration;
        s += I.delay + y;
      }),
      s > 0 ? Yr(a / s) : 0
    );
  }
  function CD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      s = (a) => (
        o.push((0, di.mergeIn)(a, ["config"], { delay: 0, duration: 0 })),
        a.id === t
      );
    return (
      n && n.some(({ actionItems: a }) => a.some(s)),
      i &&
        i.some((a) => {
          let { continuousActionGroups: u } = a;
          return u.some(({ actionItems: d }) => d.some(s));
        }),
      (0, di.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function RD(e, { basedOn: t }) {
    return (
      (e === Je.SCROLLING_IN_VIEW && (t === ut.ELEMENT || t == null)) ||
      (e === Je.MOUSE_MOVE && t === ut.ELEMENT)
    );
  }
  function LD(e, t) {
    return e + X1 + t;
  }
  function ND(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function PD(e, t) {
    return Xa(e && e.sort(), t && t.sort());
  }
  function MD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ba + r + Ba + n;
  }
  var mt,
    fi,
    ui,
    di,
    R1,
    L1,
    N1,
    P1,
    M1,
    q1,
    D1,
    F1,
    k1,
    G1,
    ci,
    Qr,
    $r,
    lt,
    ft,
    om,
    U1,
    V1,
    Jg,
    W1,
    em,
    H1,
    li,
    cr,
    St,
    Zr,
    X1,
    Ba,
    am,
    ja,
    za,
    sm,
    lr,
    fr,
    dr,
    Jr,
    um,
    en,
    tn,
    pr,
    vr,
    hr,
    gr,
    pi,
    B1,
    cm,
    Ka,
    lm,
    si,
    z1,
    Y1,
    Z1,
    rm,
    tD,
    rD,
    iD,
    oD,
    aD,
    Qa,
    lD,
    fD,
    dD,
    pD,
    yD,
    ED,
    bD,
    pm,
    gm = ye(() => {
      "use strict";
      (mt = pe(Ng())), (fi = pe(jg())), (ui = pe(Qg())), (di = pe(Jt()));
      We();
      Zg();
      La();
      Va();
      ni();
      ({
        BACKGROUND: R1,
        TRANSFORM: L1,
        TRANSLATE_3D: N1,
        SCALE_3D: P1,
        ROTATE_X: M1,
        ROTATE_Y: q1,
        ROTATE_Z: D1,
        SKEW: F1,
        PRESERVE_3D: k1,
        FLEX: G1,
        OPACITY: ci,
        FILTER: Qr,
        FONT_VARIATION_SETTINGS: $r,
        WIDTH: lt,
        HEIGHT: ft,
        BACKGROUND_COLOR: om,
        BORDER_COLOR: U1,
        COLOR: V1,
        CHILDREN: Jg,
        IMMEDIATE_CHILDREN: W1,
        SIBLINGS: em,
        PARENT: H1,
        DISPLAY: li,
        WILL_CHANGE: cr,
        AUTO: St,
        COMMA_DELIMITER: Zr,
        COLON_DELIMITER: X1,
        BAR_DELIMITER: Ba,
        RENDER_TRANSFORM: am,
        RENDER_GENERAL: ja,
        RENDER_STYLE: za,
        RENDER_PLUGIN: sm,
      } = Pe),
        ({
          TRANSFORM_MOVE: lr,
          TRANSFORM_SCALE: fr,
          TRANSFORM_ROTATE: dr,
          TRANSFORM_SKEW: Jr,
          STYLE_OPACITY: um,
          STYLE_FILTER: en,
          STYLE_FONT_VARIATION: tn,
          STYLE_SIZE: pr,
          STYLE_BACKGROUND_COLOR: vr,
          STYLE_BORDER: hr,
          STYLE_TEXT_COLOR: gr,
          GENERAL_DISPLAY: pi,
          OBJECT_VALUE: B1,
        } = Ve),
        (cm = (e) => e.trim()),
        (Ka = Object.freeze({ [vr]: om, [hr]: U1, [gr]: V1 })),
        (lm = Object.freeze({
          [At]: L1,
          [om]: R1,
          [ci]: ci,
          [Qr]: Qr,
          [lt]: lt,
          [ft]: ft,
          [$r]: $r,
        })),
        (si = new Map());
      z1 = 1;
      Y1 = 1;
      Z1 = (e, t) => e === t;
      (rm = /px/),
        (tD = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = lD[n.type]), r),
            e || {}
          )),
        (rD = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = fD[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (iD = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (oD = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (aD = (e, t, r) => {
          if (kt(e)) return Da(e)(r, t);
          switch (e) {
            case en: {
              let n = (0, ui.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case tn: {
              let n = (0, ui.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Qa = {
        [lr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [fr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [dr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Jr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (lD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (fD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (dD = (e, t) => {
          let r = (0, ui.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (pD = Object.keys(Qa));
      (yD = "\\(([^)]+)\\)"), (ED = /^rgb/), (bD = RegExp(`rgba?${yD}`));
      pm =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case lr:
            case fr:
            case dr:
            case Jr:
              e(n, At, r);
              break;
            case en:
              e(n, Qr, r);
              break;
            case tn:
              e(n, $r, r);
              break;
            case um:
              e(n, ci, r);
              break;
            case pr:
              e(n, lt, r), e(n, ft, r);
              break;
            case vr:
            case hr:
            case gr:
              e(n, Ka[t], r);
              break;
            case pi:
              e(n, li, r);
              break;
          }
        };
    });
  var Vt = l((Fe) => {
    "use strict";
    var mr = mn().default;
    Object.defineProperty(Fe, "__esModule", { value: !0 });
    Fe.IX2VanillaUtils =
      Fe.IX2VanillaPlugins =
      Fe.IX2ElementsReducer =
      Fe.IX2Easings =
      Fe.IX2EasingUtils =
      Fe.IX2BrowserSupport =
        void 0;
    var qD = mr((ni(), it(dg)));
    Fe.IX2BrowserSupport = qD;
    var DD = mr((Ra(), it(Kr)));
    Fe.IX2Easings = DD;
    var FD = mr((La(), it(Eg)));
    Fe.IX2EasingUtils = FD;
    var kD = mr((wg(), it(Ig)));
    Fe.IX2ElementsReducer = kD;
    var GD = mr((Va(), it(Rg)));
    Fe.IX2VanillaPlugins = GD;
    var UD = mr((gm(), it(hm)));
    Fe.IX2VanillaUtils = UD;
  });
  var hi,
    yt,
    VD,
    WD,
    HD,
    XD,
    BD,
    jD,
    vi,
    mm,
    zD,
    KD,
    $a,
    YD,
    QD,
    $D,
    ZD,
    ym,
    Em = ye(() => {
      "use strict";
      We();
      (hi = pe(Vt())),
        (yt = pe(Jt())),
        ({
          IX2_RAW_DATA_IMPORTED: VD,
          IX2_SESSION_STOPPED: WD,
          IX2_INSTANCE_ADDED: HD,
          IX2_INSTANCE_STARTED: XD,
          IX2_INSTANCE_REMOVED: BD,
          IX2_ANIMATION_FRAME_CHANGED: jD,
        } = xe),
        ({
          optimizeFloat: vi,
          applyEasing: mm,
          createBezierEasing: zD,
        } = hi.IX2EasingUtils),
        ({ RENDER_GENERAL: KD } = Pe),
        ({
          getItemConfigByKey: $a,
          getRenderType: YD,
          getStyleProp: QD,
        } = hi.IX2VanillaUtils),
        ($D = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: s,
              restingValue: a,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: E,
              skipToValue: f,
            } = e,
            { parameters: I } = t.payload,
            m = Math.max(1 - s, 0.01),
            y = I[n];
          y == null && ((m = 1), (y = a));
          let w = Math.max(y, 0) || 0,
            C = vi(w - r),
            A = E ? f : vi(r + C * m),
            P = A * 100;
          if (A === r && e.current) return e;
          let L, D, G, F;
          for (let z = 0, { length: Q } = i; z < Q; z++) {
            let { keyframe: re, actionItems: j } = i[z];
            if ((z === 0 && (L = j[0]), P >= re)) {
              L = j[0];
              let R = i[z + 1],
                _ = R && P !== re;
              (D = _ ? R.actionItems[0] : null),
                _ && ((G = re / 100), (F = (R.keyframe - re) / 100));
            }
          }
          let K = {};
          if (L && !D)
            for (let z = 0, { length: Q } = o; z < Q; z++) {
              let re = o[z];
              K[re] = $a(u, re, L.config);
            }
          else if (L && D && G !== void 0 && F !== void 0) {
            let z = (A - G) / F,
              Q = L.config.easing,
              re = mm(Q, z, d);
            for (let j = 0, { length: R } = o; j < R; j++) {
              let _ = o[j],
                N = $a(u, _, L.config),
                te = ($a(u, _, D.config) - N) * re + N;
              K[_] = te;
            }
          }
          return (0, yt.merge)(e, { position: A, current: K });
        }),
        (ZD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: s,
              verbose: a,
              actionItem: u,
              destination: d,
              destinationKeys: E,
              pluginDuration: f,
              instanceDelay: I,
              customEasingFn: m,
              skipMotion: y,
            } = e,
            w = u.config.easing,
            { duration: C, delay: A } = u.config;
          f != null && (C = f),
            (A = I ?? A),
            s === KD ? (C = 0) : (o || y) && (C = A = 0);
          let { now: P } = t.payload;
          if (r && n) {
            let L = P - (i + A);
            if (a) {
              let z = P - i,
                Q = C + A,
                re = vi(Math.min(Math.max(0, z / Q), 1));
              e = (0, yt.set)(e, "verboseTimeElapsed", Q * re);
            }
            if (L < 0) return e;
            let D = vi(Math.min(Math.max(0, L / C), 1)),
              G = mm(w, D, m),
              F = {},
              K = null;
            return (
              E.length &&
                (K = E.reduce((z, Q) => {
                  let re = d[Q],
                    j = parseFloat(n[Q]) || 0,
                    _ = (parseFloat(re) - j) * G + j;
                  return (z[Q] = _), z;
                }, {})),
              (F.current = K),
              (F.position = D),
              D === 1 && ((F.active = !1), (F.complete = !0)),
              (0, yt.merge)(e, F)
            );
          }
          return e;
        }),
        (ym = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case VD:
              return t.payload.ixInstances || Object.freeze({});
            case WD:
              return Object.freeze({});
            case HD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: s,
                  eventStateKey: a,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: E,
                  origin: f,
                  destination: I,
                  immediate: m,
                  verbose: y,
                  continuous: w,
                  parameterId: C,
                  actionGroups: A,
                  smoothing: P,
                  restingValue: L,
                  pluginInstance: D,
                  pluginDuration: G,
                  instanceDelay: F,
                  skipMotion: K,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: Q } = i,
                re = YD(Q),
                j = QD(re, Q),
                R = Object.keys(I).filter(
                  (N) => I[N] != null && typeof I[N] != "string"
                ),
                { easing: _ } = i.config;
              return (0, yt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: I,
                destinationKeys: R,
                immediate: m,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: s,
                eventStateKey: a,
                actionListId: u,
                groupIndex: d,
                renderType: re,
                isCarrier: E,
                styleProp: j,
                continuous: w,
                parameterId: C,
                actionGroups: A,
                smoothing: P,
                restingValue: L,
                pluginInstance: D,
                pluginDuration: G,
                instanceDelay: F,
                skipMotion: K,
                skipToValue: z,
                customEasingFn:
                  Array.isArray(_) && _.length === 4 ? zD(_) : void 0,
              });
            }
            case XD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, yt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case BD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let s = 0; s < o; s++) {
                let a = i[s];
                a !== r && (n[a] = e[a]);
              }
              return n;
            }
            case jD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let s = n[o],
                  a = e[s],
                  u = a.continuous ? $D : ZD;
                r = (0, yt.set)(r, s, u(a, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var JD,
    eF,
    tF,
    bm,
    _m = ye(() => {
      "use strict";
      We();
      ({
        IX2_RAW_DATA_IMPORTED: JD,
        IX2_SESSION_STOPPED: eF,
        IX2_PARAMETER_CHANGED: tF,
      } = xe),
        (bm = (e = {}, t) => {
          switch (t.type) {
            case JD:
              return t.payload.ixParameters || {};
            case eF:
              return {};
            case tF: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Tm = {};
  Ue(Tm, { default: () => nF });
  var Im,
    wm,
    rF,
    nF,
    xm = ye(() => {
      "use strict";
      Im = pe(Yo());
      Ff();
      id();
      sd();
      wm = pe(Vt());
      Em();
      _m();
      ({ ixElements: rF } = wm.IX2ElementsReducer),
        (nF = (0, Im.combineReducers)({
          ixData: Df,
          ixRequest: nd,
          ixSession: ad,
          ixElements: rF,
          ixInstances: ym,
          ixParameters: bm,
        }));
    });
  var Am = l((dj, Om) => {
    var iF = Tt(),
      oF = Ae(),
      aF = ht(),
      sF = "[object String]";
    function uF(e) {
      return typeof e == "string" || (!oF(e) && aF(e) && iF(e) == sF);
    }
    Om.exports = uF;
  });
  var Cm = l((pj, Sm) => {
    var cF = wa(),
      lF = cF("length");
    Sm.exports = lF;
  });
  var Lm = l((vj, Rm) => {
    var fF = "\\ud800-\\udfff",
      dF = "\\u0300-\\u036f",
      pF = "\\ufe20-\\ufe2f",
      vF = "\\u20d0-\\u20ff",
      hF = dF + pF + vF,
      gF = "\\ufe0e\\ufe0f",
      mF = "\\u200d",
      yF = RegExp("[" + mF + fF + hF + gF + "]");
    function EF(e) {
      return yF.test(e);
    }
    Rm.exports = EF;
  });
  var Um = l((hj, Gm) => {
    var Pm = "\\ud800-\\udfff",
      bF = "\\u0300-\\u036f",
      _F = "\\ufe20-\\ufe2f",
      IF = "\\u20d0-\\u20ff",
      wF = bF + _F + IF,
      TF = "\\ufe0e\\ufe0f",
      xF = "[" + Pm + "]",
      Za = "[" + wF + "]",
      Ja = "\\ud83c[\\udffb-\\udfff]",
      OF = "(?:" + Za + "|" + Ja + ")",
      Mm = "[^" + Pm + "]",
      qm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Dm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      AF = "\\u200d",
      Fm = OF + "?",
      km = "[" + TF + "]?",
      SF = "(?:" + AF + "(?:" + [Mm, qm, Dm].join("|") + ")" + km + Fm + ")*",
      CF = km + Fm + SF,
      RF = "(?:" + [Mm + Za + "?", Za, qm, Dm, xF].join("|") + ")",
      Nm = RegExp(Ja + "(?=" + Ja + ")|" + RF + CF, "g");
    function LF(e) {
      for (var t = (Nm.lastIndex = 0); Nm.test(e); ) ++t;
      return t;
    }
    Gm.exports = LF;
  });
  var Wm = l((gj, Vm) => {
    var NF = Cm(),
      PF = Lm(),
      MF = Um();
    function qF(e) {
      return PF(e) ? MF(e) : NF(e);
    }
    Vm.exports = qF;
  });
  var Xm = l((mj, Hm) => {
    var DF = zn(),
      FF = Kn(),
      kF = Dt(),
      GF = Am(),
      UF = Wm(),
      VF = "[object Map]",
      WF = "[object Set]";
    function HF(e) {
      if (e == null) return 0;
      if (kF(e)) return GF(e) ? UF(e) : e.length;
      var t = FF(e);
      return t == VF || t == WF ? e.size : DF(e).length;
    }
    Hm.exports = HF;
  });
  var jm = l((yj, Bm) => {
    var XF = "Expected a function";
    function BF(e) {
      if (typeof e != "function") throw new TypeError(XF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Bm.exports = BF;
  });
  var es = l((Ej, zm) => {
    var jF = xt(),
      zF = (function () {
        try {
          var e = jF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    zm.exports = zF;
  });
  var ts = l((bj, Ym) => {
    var Km = es();
    function KF(e, t, r) {
      t == "__proto__" && Km
        ? Km(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Ym.exports = KF;
  });
  var $m = l((_j, Qm) => {
    var YF = ts(),
      QF = Fn(),
      $F = Object.prototype,
      ZF = $F.hasOwnProperty;
    function JF(e, t, r) {
      var n = e[t];
      (!(ZF.call(e, t) && QF(n, r)) || (r === void 0 && !(t in e))) &&
        YF(e, t, r);
    }
    Qm.exports = JF;
  });
  var ey = l((Ij, Jm) => {
    var e2 = $m(),
      t2 = Br(),
      r2 = Hn(),
      Zm = ct(),
      n2 = sr();
    function i2(e, t, r, n) {
      if (!Zm(e)) return e;
      t = t2(t, e);
      for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o; ) {
        var u = n2(t[i]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != s) {
          var E = a[u];
          (d = n ? n(E, u, a) : void 0),
            d === void 0 && (d = Zm(E) ? E : r2(t[i + 1]) ? [] : {});
        }
        e2(a, u, d), (a = a[u]);
      }
      return e;
    }
    Jm.exports = i2;
  });
  var ry = l((wj, ty) => {
    var o2 = $n(),
      a2 = ey(),
      s2 = Br();
    function u2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var s = t[n],
          a = o2(e, s);
        r(a, s) && a2(o, s2(s, e), a);
      }
      return o;
    }
    ty.exports = u2;
  });
  var iy = l((Tj, ny) => {
    var c2 = Vn(),
      l2 = Do(),
      f2 = ua(),
      d2 = sa(),
      p2 = Object.getOwnPropertySymbols,
      v2 = p2
        ? function (e) {
            for (var t = []; e; ) c2(t, f2(e)), (e = l2(e));
            return t;
          }
        : d2;
    ny.exports = v2;
  });
  var ay = l((xj, oy) => {
    function h2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    oy.exports = h2;
  });
  var uy = l((Oj, sy) => {
    var g2 = ct(),
      m2 = jn(),
      y2 = ay(),
      E2 = Object.prototype,
      b2 = E2.hasOwnProperty;
    function _2(e) {
      if (!g2(e)) return y2(e);
      var t = m2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !b2.call(e, n))) || r.push(n);
      return r;
    }
    sy.exports = _2;
  });
  var ly = l((Aj, cy) => {
    var I2 = la(),
      w2 = uy(),
      T2 = Dt();
    function x2(e) {
      return T2(e) ? I2(e, !0) : w2(e);
    }
    cy.exports = x2;
  });
  var dy = l((Sj, fy) => {
    var O2 = aa(),
      A2 = iy(),
      S2 = ly();
    function C2(e) {
      return O2(e, S2, A2);
    }
    fy.exports = C2;
  });
  var vy = l((Cj, py) => {
    var R2 = Ia(),
      L2 = Ot(),
      N2 = ry(),
      P2 = dy();
    function M2(e, t) {
      if (e == null) return {};
      var r = R2(P2(e), function (n) {
        return [n];
      });
      return (
        (t = L2(t)),
        N2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    py.exports = M2;
  });
  var gy = l((Rj, hy) => {
    var q2 = Ot(),
      D2 = jm(),
      F2 = vy();
    function k2(e, t) {
      return F2(e, D2(q2(t)));
    }
    hy.exports = k2;
  });
  var yy = l((Lj, my) => {
    var G2 = zn(),
      U2 = Kn(),
      V2 = Gr(),
      W2 = Ae(),
      H2 = Dt(),
      X2 = Wn(),
      B2 = jn(),
      j2 = Bn(),
      z2 = "[object Map]",
      K2 = "[object Set]",
      Y2 = Object.prototype,
      Q2 = Y2.hasOwnProperty;
    function $2(e) {
      if (e == null) return !0;
      if (
        H2(e) &&
        (W2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          X2(e) ||
          j2(e) ||
          V2(e))
      )
        return !e.length;
      var t = U2(e);
      if (t == z2 || t == K2) return !e.size;
      if (B2(e)) return !G2(e).length;
      for (var r in e) if (Q2.call(e, r)) return !1;
      return !0;
    }
    my.exports = $2;
  });
  var by = l((Nj, Ey) => {
    var Z2 = ts(),
      J2 = Wa(),
      ek = Ot();
    function tk(e, t) {
      var r = {};
      return (
        (t = ek(t, 3)),
        J2(e, function (n, i, o) {
          Z2(r, i, t(n, i, o));
        }),
        r
      );
    }
    Ey.exports = tk;
  });
  var Iy = l((Pj, _y) => {
    function rk(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    _y.exports = rk;
  });
  var Ty = l((Mj, wy) => {
    var nk = Jn();
    function ik(e) {
      return typeof e == "function" ? e : nk;
    }
    wy.exports = ik;
  });
  var Oy = l((qj, xy) => {
    var ok = Iy(),
      ak = Ha(),
      sk = Ty(),
      uk = Ae();
    function ck(e, t) {
      var r = uk(e) ? ok : ak;
      return r(e, sk(t));
    }
    xy.exports = ck;
  });
  var Sy = l((Dj, Ay) => {
    var lk = Ze(),
      fk = function () {
        return lk.Date.now();
      };
    Ay.exports = fk;
  });
  var Ly = l((Fj, Ry) => {
    var dk = ct(),
      rs = Sy(),
      Cy = ei(),
      pk = "Expected a function",
      vk = Math.max,
      hk = Math.min;
    function gk(e, t, r) {
      var n,
        i,
        o,
        s,
        a,
        u,
        d = 0,
        E = !1,
        f = !1,
        I = !0;
      if (typeof e != "function") throw new TypeError(pk);
      (t = Cy(t) || 0),
        dk(r) &&
          ((E = !!r.leading),
          (f = "maxWait" in r),
          (o = f ? vk(Cy(r.maxWait) || 0, t) : o),
          (I = "trailing" in r ? !!r.trailing : I));
      function m(F) {
        var K = n,
          z = i;
        return (n = i = void 0), (d = F), (s = e.apply(z, K)), s;
      }
      function y(F) {
        return (d = F), (a = setTimeout(A, t)), E ? m(F) : s;
      }
      function w(F) {
        var K = F - u,
          z = F - d,
          Q = t - K;
        return f ? hk(Q, o - z) : Q;
      }
      function C(F) {
        var K = F - u,
          z = F - d;
        return u === void 0 || K >= t || K < 0 || (f && z >= o);
      }
      function A() {
        var F = rs();
        if (C(F)) return P(F);
        a = setTimeout(A, w(F));
      }
      function P(F) {
        return (a = void 0), I && n ? m(F) : ((n = i = void 0), s);
      }
      function L() {
        a !== void 0 && clearTimeout(a), (d = 0), (n = u = i = a = void 0);
      }
      function D() {
        return a === void 0 ? s : P(rs());
      }
      function G() {
        var F = rs(),
          K = C(F);
        if (((n = arguments), (i = this), (u = F), K)) {
          if (a === void 0) return y(u);
          if (f) return clearTimeout(a), (a = setTimeout(A, t)), m(u);
        }
        return a === void 0 && (a = setTimeout(A, t)), s;
      }
      return (G.cancel = L), (G.flush = D), G;
    }
    Ry.exports = gk;
  });
  var Py = l((kj, Ny) => {
    var mk = Ly(),
      yk = ct(),
      Ek = "Expected a function";
    function bk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(Ek);
      return (
        yk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        mk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ny.exports = bk;
  });
  var qy = {};
  Ue(qy, {
    actionListPlaybackChanged: () => Er,
    animationFrameChanged: () => mi,
    clearRequested: () => Bk,
    elementStateChanged: () => ls,
    eventListenerAdded: () => gi,
    eventStateChanged: () => ss,
    instanceAdded: () => us,
    instanceRemoved: () => cs,
    instanceStarted: () => yi,
    mediaQueriesDefined: () => ds,
    parameterChanged: () => yr,
    playbackRequested: () => Hk,
    previewRequested: () => Wk,
    rawDataImported: () => ns,
    sessionInitialized: () => is,
    sessionStarted: () => os,
    sessionStopped: () => as,
    stopRequested: () => Xk,
    testFrameRendered: () => jk,
    viewportWidthChanged: () => fs,
  });
  var My,
    _k,
    Ik,
    wk,
    Tk,
    xk,
    Ok,
    Ak,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    Mk,
    qk,
    Dk,
    Fk,
    kk,
    Gk,
    Uk,
    Vk,
    ns,
    is,
    os,
    as,
    Wk,
    Hk,
    Xk,
    Bk,
    gi,
    jk,
    ss,
    mi,
    yr,
    us,
    yi,
    cs,
    ls,
    Er,
    fs,
    ds,
    Ei = ye(() => {
      "use strict";
      We();
      (My = pe(Vt())),
        ({
          IX2_RAW_DATA_IMPORTED: _k,
          IX2_SESSION_INITIALIZED: Ik,
          IX2_SESSION_STARTED: wk,
          IX2_SESSION_STOPPED: Tk,
          IX2_PREVIEW_REQUESTED: xk,
          IX2_PLAYBACK_REQUESTED: Ok,
          IX2_STOP_REQUESTED: Ak,
          IX2_CLEAR_REQUESTED: Sk,
          IX2_EVENT_LISTENER_ADDED: Ck,
          IX2_TEST_FRAME_RENDERED: Rk,
          IX2_EVENT_STATE_CHANGED: Lk,
          IX2_ANIMATION_FRAME_CHANGED: Nk,
          IX2_PARAMETER_CHANGED: Pk,
          IX2_INSTANCE_ADDED: Mk,
          IX2_INSTANCE_STARTED: qk,
          IX2_INSTANCE_REMOVED: Dk,
          IX2_ELEMENT_STATE_CHANGED: Fk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: kk,
          IX2_VIEWPORT_WIDTH_CHANGED: Gk,
          IX2_MEDIA_QUERIES_DEFINED: Uk,
        } = xe),
        ({ reifyState: Vk } = My.IX2VanillaUtils),
        (ns = (e) => ({ type: _k, payload: { ...Vk(e) } })),
        (is = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: Ik,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (os = () => ({ type: wk })),
        (as = () => ({ type: Tk })),
        (Wk = ({ rawData: e, defer: t }) => ({
          type: xk,
          payload: { defer: t, rawData: e },
        })),
        (Hk = ({
          actionTypeId: e = Ve.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: s,
          verbose: a,
          rawData: u,
        }) => ({
          type: Ok,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: s,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: a,
            rawData: u,
          },
        })),
        (Xk = (e) => ({ type: Ak, payload: { actionListId: e } })),
        (Bk = () => ({ type: Sk })),
        (gi = (e, t) => ({
          type: Ck,
          payload: { target: e, listenerParams: t },
        })),
        (jk = (e = 1) => ({ type: Rk, payload: { step: e } })),
        (ss = (e, t) => ({ type: Lk, payload: { stateKey: e, newState: t } })),
        (mi = (e, t) => ({ type: Nk, payload: { now: e, parameters: t } })),
        (yr = (e, t) => ({ type: Pk, payload: { key: e, value: t } })),
        (us = (e) => ({ type: Mk, payload: { ...e } })),
        (yi = (e, t) => ({ type: qk, payload: { instanceId: e, time: t } })),
        (cs = (e) => ({ type: Dk, payload: { instanceId: e } })),
        (ls = (e, t, r, n) => ({
          type: Fk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Er = ({ actionListId: e, isPlaying: t }) => ({
          type: kk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (fs = ({ width: e, mediaQueries: t }) => ({
          type: Gk,
          payload: { width: e, mediaQueries: t },
        })),
        (ds = () => ({ type: Uk }));
    });
  var ke = {};
  Ue(ke, {
    elementContains: () => hs,
    getChildElements: () => rG,
    getClosestElement: () => rn,
    getProperty: () => $k,
    getQuerySelector: () => vs,
    getRefType: () => gs,
    getSiblingElements: () => nG,
    getStyle: () => Qk,
    getValidDocument: () => Jk,
    isSiblingNode: () => tG,
    matchSelector: () => Zk,
    queryDocument: () => eG,
    setStyle: () => Yk,
  });
  function Yk(e, t, r) {
    e.style[t] = r;
  }
  function Qk(e, t) {
    return e.style[t];
  }
  function $k(e, t) {
    return e[t];
  }
  function Zk(e) {
    return (t) => t[ps](e);
  }
  function vs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Dy) !== -1) {
        let n = e.split(Dy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(ky)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function Jk(e) {
    return e == null || e === document.documentElement.getAttribute(ky)
      ? document
      : null;
  }
  function eG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function hs(e, t) {
    return e.contains(t);
  }
  function tG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function rG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let s = 0; s < o; s++) t.push(i[s]);
    }
    return t;
  }
  function nG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let s = o.firstElementChild;
      for (; s != null; )
        e.indexOf(s) === -1 && t.push(s), (s = s.nextElementSibling);
    }
    return t;
  }
  function gs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? zk
        : Kk
      : null;
  }
  var Fy,
    ps,
    Dy,
    zk,
    Kk,
    ky,
    rn,
    Gy = ye(() => {
      "use strict";
      Fy = pe(Vt());
      We();
      ({ ELEMENT_MATCHES: ps } = Fy.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Dy,
          HTML_ELEMENT: zk,
          PLAIN_OBJECT: Kk,
          WF_PAGE: ky,
        } = Pe);
      rn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ps] && r[ps](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ms = l((Vj, Vy) => {
    var iG = ct(),
      Uy = Object.create,
      oG = (function () {
        function e() {}
        return function (t) {
          if (!iG(t)) return {};
          if (Uy) return Uy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Vy.exports = oG;
  });
  var bi = l((Wj, Wy) => {
    function aG() {}
    Wy.exports = aG;
  });
  var Ii = l((Hj, Hy) => {
    var sG = ms(),
      uG = bi();
    function _i(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    _i.prototype = sG(uG.prototype);
    _i.prototype.constructor = _i;
    Hy.exports = _i;
  });
  var zy = l((Xj, jy) => {
    var Xy = Qt(),
      cG = Gr(),
      lG = Ae(),
      By = Xy ? Xy.isConcatSpreadable : void 0;
    function fG(e) {
      return lG(e) || cG(e) || !!(By && e && e[By]);
    }
    jy.exports = fG;
  });
  var Qy = l((Bj, Yy) => {
    var dG = Vn(),
      pG = zy();
    function Ky(e, t, r, n, i) {
      var o = -1,
        s = e.length;
      for (r || (r = pG), i || (i = []); ++o < s; ) {
        var a = e[o];
        t > 0 && r(a)
          ? t > 1
            ? Ky(a, t - 1, r, n, i)
            : dG(i, a)
          : n || (i[i.length] = a);
      }
      return i;
    }
    Yy.exports = Ky;
  });
  var Zy = l((jj, $y) => {
    var vG = Qy();
    function hG(e) {
      var t = e == null ? 0 : e.length;
      return t ? vG(e, 1) : [];
    }
    $y.exports = hG;
  });
  var eE = l((zj, Jy) => {
    function gG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Jy.exports = gG;
  });
  var nE = l((Kj, rE) => {
    var mG = eE(),
      tE = Math.max;
    function yG(e, t, r) {
      return (
        (t = tE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = tE(n.length - t, 0), s = Array(o);
            ++i < o;

          )
            s[i] = n[t + i];
          i = -1;
          for (var a = Array(t + 1); ++i < t; ) a[i] = n[i];
          return (a[t] = r(s)), mG(e, this, a);
        }
      );
    }
    rE.exports = yG;
  });
  var oE = l((Yj, iE) => {
    function EG(e) {
      return function () {
        return e;
      };
    }
    iE.exports = EG;
  });
  var uE = l((Qj, sE) => {
    var bG = oE(),
      aE = es(),
      _G = Jn(),
      IG = aE
        ? function (e, t) {
            return aE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: bG(t),
              writable: !0,
            });
          }
        : _G;
    sE.exports = IG;
  });
  var lE = l(($j, cE) => {
    var wG = 800,
      TG = 16,
      xG = Date.now;
    function OG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = xG(),
          i = TG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= wG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    cE.exports = OG;
  });
  var dE = l((Zj, fE) => {
    var AG = uE(),
      SG = lE(),
      CG = SG(AG);
    fE.exports = CG;
  });
  var vE = l((Jj, pE) => {
    var RG = Zy(),
      LG = nE(),
      NG = dE();
    function PG(e) {
      return NG(LG(e, void 0, RG), e + "");
    }
    pE.exports = PG;
  });
  var mE = l((ez, gE) => {
    var hE = fa(),
      MG = hE && new hE();
    gE.exports = MG;
  });
  var EE = l((tz, yE) => {
    function qG() {}
    yE.exports = qG;
  });
  var ys = l((rz, _E) => {
    var bE = mE(),
      DG = EE(),
      FG = bE
        ? function (e) {
            return bE.get(e);
          }
        : DG;
    _E.exports = FG;
  });
  var wE = l((nz, IE) => {
    var kG = {};
    IE.exports = kG;
  });
  var Es = l((iz, xE) => {
    var TE = wE(),
      GG = Object.prototype,
      UG = GG.hasOwnProperty;
    function VG(e) {
      for (
        var t = e.name + "", r = TE[t], n = UG.call(TE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    xE.exports = VG;
  });
  var Ti = l((oz, OE) => {
    var WG = ms(),
      HG = bi(),
      XG = 4294967295;
    function wi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = XG),
        (this.__views__ = []);
    }
    wi.prototype = WG(HG.prototype);
    wi.prototype.constructor = wi;
    OE.exports = wi;
  });
  var SE = l((az, AE) => {
    function BG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    AE.exports = BG;
  });
  var RE = l((sz, CE) => {
    var jG = Ti(),
      zG = Ii(),
      KG = SE();
    function YG(e) {
      if (e instanceof jG) return e.clone();
      var t = new zG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = KG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    CE.exports = YG;
  });
  var PE = l((uz, NE) => {
    var QG = Ti(),
      LE = Ii(),
      $G = bi(),
      ZG = Ae(),
      JG = ht(),
      eU = RE(),
      tU = Object.prototype,
      rU = tU.hasOwnProperty;
    function xi(e) {
      if (JG(e) && !ZG(e) && !(e instanceof QG)) {
        if (e instanceof LE) return e;
        if (rU.call(e, "__wrapped__")) return eU(e);
      }
      return new LE(e);
    }
    xi.prototype = $G.prototype;
    xi.prototype.constructor = xi;
    NE.exports = xi;
  });
  var qE = l((cz, ME) => {
    var nU = Ti(),
      iU = ys(),
      oU = Es(),
      aU = PE();
    function sU(e) {
      var t = oU(e),
        r = aU[t];
      if (typeof r != "function" || !(t in nU.prototype)) return !1;
      if (e === r) return !0;
      var n = iU(r);
      return !!n && e === n[0];
    }
    ME.exports = sU;
  });
  var GE = l((lz, kE) => {
    var DE = Ii(),
      uU = vE(),
      cU = ys(),
      bs = Es(),
      lU = Ae(),
      FE = qE(),
      fU = "Expected a function",
      dU = 8,
      pU = 32,
      vU = 128,
      hU = 256;
    function gU(e) {
      return uU(function (t) {
        var r = t.length,
          n = r,
          i = DE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(fU);
          if (i && !s && bs(o) == "wrapper") var s = new DE([], !0);
        }
        for (n = s ? n : r; ++n < r; ) {
          o = t[n];
          var a = bs(o),
            u = a == "wrapper" ? cU(o) : void 0;
          u &&
          FE(u[0]) &&
          u[1] == (vU | dU | pU | hU) &&
          !u[4].length &&
          u[9] == 1
            ? (s = s[bs(u[0])].apply(s, u[3]))
            : (s = o.length == 1 && FE(o) ? s[a]() : s.thru(o));
        }
        return function () {
          var d = arguments,
            E = d[0];
          if (s && d.length == 1 && lU(E)) return s.plant(E).value();
          for (var f = 0, I = r ? t[f].apply(this, d) : E; ++f < r; )
            I = t[f].call(this, I);
          return I;
        };
      });
    }
    kE.exports = gU;
  });
  var VE = l((fz, UE) => {
    var mU = GE(),
      yU = mU();
    UE.exports = yU;
  });
  var HE = l((dz, WE) => {
    function EU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    WE.exports = EU;
  });
  var BE = l((pz, XE) => {
    var bU = HE(),
      _s = ei();
    function _U(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = _s(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = _s(t)), (t = t === t ? t : 0)),
        bU(_s(e), t, r)
      );
    }
    XE.exports = _U;
  });
  var eb,
    tb,
    rb,
    nb,
    IU,
    wU,
    TU,
    xU,
    OU,
    AU,
    SU,
    CU,
    RU,
    LU,
    NU,
    PU,
    MU,
    qU,
    DU,
    ib,
    ob,
    FU,
    kU,
    GU,
    ab,
    UU,
    VU,
    sb,
    WU,
    Is,
    ub,
    jE,
    zE,
    cb,
    on,
    HU,
    dt,
    lb,
    XU,
    Xe,
    tt,
    an,
    fb,
    ws,
    KE,
    Ts,
    BU,
    nn,
    jU,
    zU,
    KU,
    db,
    YE,
    YU,
    QE,
    QU,
    $U,
    ZU,
    $E,
    Oi,
    Ai,
    ZE,
    JE,
    pb,
    vb = ye(() => {
      "use strict";
      (eb = pe(VE())), (tb = pe(Zn())), (rb = pe(BE()));
      We();
      xs();
      Ei();
      (nb = pe(Vt())),
        ({
          MOUSE_CLICK: IU,
          MOUSE_SECOND_CLICK: wU,
          MOUSE_DOWN: TU,
          MOUSE_UP: xU,
          MOUSE_OVER: OU,
          MOUSE_OUT: AU,
          DROPDOWN_CLOSE: SU,
          DROPDOWN_OPEN: CU,
          SLIDER_ACTIVE: RU,
          SLIDER_INACTIVE: LU,
          TAB_ACTIVE: NU,
          TAB_INACTIVE: PU,
          NAVBAR_CLOSE: MU,
          NAVBAR_OPEN: qU,
          MOUSE_MOVE: DU,
          PAGE_SCROLL_DOWN: ib,
          SCROLL_INTO_VIEW: ob,
          SCROLL_OUT_OF_VIEW: FU,
          PAGE_SCROLL_UP: kU,
          SCROLLING_IN_VIEW: GU,
          PAGE_FINISH: ab,
          ECOMMERCE_CART_CLOSE: UU,
          ECOMMERCE_CART_OPEN: VU,
          PAGE_START: sb,
          PAGE_SCROLL: WU,
        } = Je),
        (Is = "COMPONENT_ACTIVE"),
        (ub = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: jE } = Pe),
        ({ getNamespacedParameterId: zE } = nb.IX2VanillaUtils),
        (cb = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (on = cb(({ element: e, nativeEvent: t }) => e === t.target)),
        (HU = cb(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (dt = (0, eb.default)([on, HU])),
        (lb = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !BU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (XU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!lb(e, n);
        }),
        (Xe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: s } = t,
            { actionListId: a, autoStopEventId: u } = o.config,
            d = lb(e, u);
          return (
            d &&
              br({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + jE + n.split(jE)[1],
                actionListId: (0, tb.default)(d, "action.config.actionListId"),
              }),
            br({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a,
            }),
            sn({
              store: e,
              eventId: s,
              eventTarget: r,
              eventStateKey: n,
              actionListId: a,
            }),
            i
          );
        }),
        (tt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (an = { handler: tt(dt, Xe) }),
        (fb = { ...an, types: [Is, ub].join(" ") }),
        (ws = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (KE = "mouseover mouseout"),
        (Ts = { types: ws }),
        (BU = { PAGE_START: sb, PAGE_FINISH: ab }),
        (nn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, rb.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (jU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (zU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let s = e.contains(i);
          return !!(r === "mouseout" && o && s);
        }),
        (KU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = nn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return jU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (db = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [Is, ub].indexOf(n) !== -1 ? n === Is : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (YE = (e) => (t, r) => {
          let n = { elementHovered: zU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (YU = (e) => (t, r) => {
          let n = { ...r, elementVisible: KU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (QE =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = nn(),
              {
                event: { config: s, eventTypeId: a },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = s,
              E = d === "PX",
              f = i - o,
              I = Number((n / f).toFixed(2));
            if (r && r.percentTop === I) return r;
            let m = (E ? u : (o * (u || 0)) / 100) / f,
              y,
              w,
              C = 0;
            r &&
              ((y = I > r.percentTop),
              (w = r.scrollingDown !== y),
              (C = w ? I : r.anchorTop));
            let A = a === ib ? I >= C + m : I <= C - m,
              P = {
                ...r,
                percentTop: I,
                inBounds: A,
                anchorTop: C,
                scrollingDown: y,
              };
            return (r && A && (w || P.inBounds !== r.inBounds) && e(t, P)) || P;
          }),
        (QU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        ($U = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (ZU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        ($E =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Oi = (e = !0) => ({
          ...fb,
          handler: tt(
            e ? dt : on,
            db((t, r) => (r.isActive ? an.handler(t, r) : r))
          ),
        })),
        (Ai = (e = !0) => ({
          ...fb,
          handler: tt(
            e ? dt : on,
            db((t, r) => (r.isActive ? r : an.handler(t, r)))
          ),
        })),
        (ZE = {
          ...Ts,
          handler: YU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: s } = o;
            return !s[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === ob) === r
              ? (Xe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (JE = 0.05),
        (pb = {
          [RU]: Oi(),
          [LU]: Ai(),
          [CU]: Oi(),
          [SU]: Ai(),
          [qU]: Oi(!1),
          [MU]: Ai(!1),
          [NU]: Oi(),
          [PU]: Ai(),
          [VU]: { types: "ecommerce-cart-open", handler: tt(dt, Xe) },
          [UU]: { types: "ecommerce-cart-close", handler: tt(dt, Xe) },
          [IU]: {
            types: "click",
            handler: tt(
              dt,
              $E((e, { clickCount: t }) => {
                XU(e) ? t === 1 && Xe(e) : Xe(e);
              })
            ),
          },
          [wU]: {
            types: "click",
            handler: tt(
              dt,
              $E((e, { clickCount: t }) => {
                t === 2 && Xe(e);
              })
            ),
          },
          [TU]: { ...an, types: "mousedown" },
          [xU]: { ...an, types: "mouseup" },
          [OU]: {
            types: KE,
            handler: tt(
              dt,
              YE((e, t) => {
                t.elementHovered && Xe(e);
              })
            ),
          },
          [AU]: {
            types: KE,
            handler: tt(
              dt,
              YE((e, t) => {
                t.elementHovered || Xe(e);
              })
            ),
          },
          [DU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: s,
                  selectedAxis: a,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: E = 0,
                } = r,
                {
                  clientX: f = o.clientX,
                  clientY: I = o.clientY,
                  pageX: m = o.pageX,
                  pageY: y = o.pageY,
                } = n,
                w = a === "X_AXIS",
                C = n.type === "mouseout",
                A = E / 100,
                P = u,
                L = !1;
              switch (s) {
                case ut.VIEWPORT: {
                  A = w
                    ? Math.min(f, window.innerWidth) / window.innerWidth
                    : Math.min(I, window.innerHeight) / window.innerHeight;
                  break;
                }
                case ut.PAGE: {
                  let {
                    scrollLeft: D,
                    scrollTop: G,
                    scrollWidth: F,
                    scrollHeight: K,
                  } = nn();
                  A = w ? Math.min(D + m, F) / F : Math.min(G + y, K) / K;
                  break;
                }
                case ut.ELEMENT:
                default: {
                  P = zE(i, u);
                  let D = n.type.indexOf("mouse") === 0;
                  if (D && dt({ element: t, nativeEvent: n }) !== !0) break;
                  let G = t.getBoundingClientRect(),
                    { left: F, top: K, width: z, height: Q } = G;
                  if (!D && !QU({ left: f, top: I }, G)) break;
                  (L = !0), (A = w ? (f - F) / z : (I - K) / Q);
                  break;
                }
              }
              return (
                C && (A > 1 - JE || A < JE) && (A = Math.round(A)),
                (s !== ut.ELEMENT || L || L !== o.elementHovered) &&
                  ((A = d ? 1 - A : A), e.dispatch(yr(P, A))),
                {
                  elementHovered: L,
                  clientX: f,
                  clientY: I,
                  pageX: m,
                  pageY: y,
                }
              );
            },
          },
          [WU]: {
            types: ws,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: s } = nn(),
                a = i / (o - s);
              (a = n ? 1 - a : a), e.dispatch(yr(r, a));
            },
          },
          [GU]: {
            types: ws,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: s,
                  scrollWidth: a,
                  scrollHeight: u,
                  clientHeight: d,
                } = nn(),
                {
                  basedOn: E,
                  selectedAxis: f,
                  continuousParameterGroupId: I,
                  startsEntering: m,
                  startsExiting: y,
                  addEndOffset: w,
                  addStartOffset: C,
                  addOffsetValue: A = 0,
                  endOffsetValue: P = 0,
                } = r,
                L = f === "X_AXIS";
              if (E === ut.VIEWPORT) {
                let D = L ? o / a : s / u;
                return (
                  D !== i.scrollPercent && t.dispatch(yr(I, D)),
                  { scrollPercent: D }
                );
              } else {
                let D = zE(n, I),
                  G = e.getBoundingClientRect(),
                  F = (C ? A : 0) / 100,
                  K = (w ? P : 0) / 100;
                (F = m ? F : 1 - F), (K = y ? K : 1 - K);
                let z = G.top + Math.min(G.height * F, d),
                  re = G.top + G.height * K - z,
                  j = Math.min(d + re, u),
                  _ = Math.min(Math.max(0, d - z), j) / j;
                return (
                  _ !== i.scrollPercent && t.dispatch(yr(D, _)),
                  { scrollPercent: _ }
                );
              }
            },
          },
          [ob]: ZE,
          [FU]: ZE,
          [ib]: {
            ...Ts,
            handler: QE((e, t) => {
              t.scrollingDown && Xe(e);
            }),
          },
          [kU]: {
            ...Ts,
            handler: QE((e, t) => {
              t.scrollingDown || Xe(e);
            }),
          },
          [ab]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: tt(on, $U(Xe)),
          },
          [sb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: tt(on, ZU(Xe)),
          },
        });
    });
  var Lb = {};
  Ue(Lb, {
    observeRequests: () => yV,
    startActionGroup: () => sn,
    startEngine: () => Pi,
    stopActionGroup: () => br,
    stopAllActionGroups: () => Sb,
    stopEngine: () => Mi,
  });
  function yV(e) {
    Wt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: _V }),
      Wt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: IV }),
      Wt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: wV }),
      Wt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: TV });
  }
  function EV(e) {
    Wt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Mi(e),
          Tb({ store: e, elementApi: ke }),
          Pi({ store: e, allowEvents: !0 }),
          xb();
      },
    });
  }
  function bV(e, t) {
    let r = Wt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function _V({ rawData: e, defer: t }, r) {
    let n = () => {
      Pi({ store: r, rawData: e, allowEvents: !0 }), xb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function xb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function IV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: s,
        immediate: a,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: E } = e;
    if (n && i && E && a) {
      let f = E.actionLists[n];
      f && (E = sV({ actionList: f, actionItemId: i, rawData: E }));
    }
    if (
      (Pi({ store: t, rawData: E, allowEvents: s, testManual: u }),
      (n && r === Ve.GENERAL_START_ACTION) || Os(r))
    ) {
      br({ store: t, actionListId: n }),
        Ab({ store: t, actionListId: n, eventId: o });
      let f = sn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: a,
        verbose: d,
      });
      d && f && t.dispatch(Er({ actionListId: n, isPlaying: !a }));
    }
  }
  function wV({ actionListId: e }, t) {
    e ? br({ store: t, actionListId: e }) : Sb({ store: t }), Mi(t);
  }
  function TV(e, t) {
    Mi(t), Tb({ store: t, elementApi: ke });
  }
  function Pi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ns(t)),
      i.active ||
        (e.dispatch(
          is({
            hasBoundaryNodes: !!document.querySelector(Ci),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (RV(e), xV(), e.getState().ixSession.hasDefinedMediaQueries && EV(e)),
        e.dispatch(os()),
        OV(e, n));
  }
  function xV() {
    let { documentElement: e } = document;
    e.className.indexOf(hb) === -1 && (e.className += ` ${hb}`);
  }
  function OV(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(mi(n, o)), t ? bV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Mi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(AV), fV(), e.dispatch(as());
    }
  }
  function AV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function SV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: s,
    smoothing: a,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: E } = e.getState(),
      { events: f } = d,
      I = f[n],
      { eventTypeId: m } = I,
      y = {},
      w = {},
      C = [],
      { continuousActionGroups: A } = s,
      { id: P } = s;
    uV(m, i) && (P = cV(t, P));
    let L = E.hasBoundaryNodes && r ? rn(r, Ci) : null;
    A.forEach((D) => {
      let { keyframe: G, actionItems: F } = D;
      F.forEach((K) => {
        let { actionTypeId: z } = K,
          { target: Q } = K.config;
        if (!Q) return;
        let re = Q.boundaryMode ? L : null,
          j = dV(Q) + As + z;
        if (((w[j] = CV(w[j], G, K)), !y[j])) {
          y[j] = !0;
          let { config: R } = K;
          Ri({
            config: R,
            event: I,
            eventTarget: r,
            elementRoot: re,
            elementApi: ke,
          }).forEach((_) => {
            C.push({ element: _, key: j });
          });
        }
      });
    }),
      C.forEach(({ element: D, key: G }) => {
        let F = w[G],
          K = (0, Et.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: z } = K,
          Q = Ni(z) ? Cs(z)(D, K) : null,
          re = Ss({ element: D, actionItem: K, elementApi: ke }, Q);
        Rs({
          store: e,
          element: D,
          eventId: n,
          actionListId: o,
          actionItem: K,
          destination: re,
          continuous: !0,
          parameterId: P,
          actionGroups: F,
          smoothing: a,
          restingValue: u,
          pluginInstance: Q,
        });
      });
  }
  function CV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, s) => (o.keyframe === t ? ((i = s), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function RV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    Ob(e),
      (0, _r.default)(r, (i, o) => {
        let s = pb[o];
        if (!s) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        DV({ logic: s, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && NV(e);
  }
  function NV(e) {
    let t = () => {
      Ob(e);
    };
    LV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(gi(window, [r, t]));
    }),
      t();
  }
  function Ob(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(fs({ width: n, mediaQueries: i }));
    }
  }
  function DV({ logic: e, store: t, events: r }) {
    FV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: s } = o,
      a = PV(r, qV);
    if (!(0, yb.default)(a)) return;
    (0, _r.default)(a, (f, I) => {
      let m = r[I],
        { action: y, id: w, mediaQueries: C = o.mediaQueryKeys } = m,
        { actionListId: A } = y.config;
      pV(C, o.mediaQueryKeys) || t.dispatch(ds()),
        y.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((L) => {
            let { continuousParameterGroupId: D } = L,
              G = (0, Et.default)(s, `${A}.continuousParameterGroups`, []),
              F = (0, mb.default)(G, ({ id: Q }) => Q === D),
              K = (L.smoothing || 0) / 100,
              z = (L.restingState || 0) / 100;
            F &&
              f.forEach((Q, re) => {
                let j = w + As + re;
                SV({
                  store: t,
                  eventStateKey: j,
                  eventTarget: Q,
                  eventId: w,
                  eventConfig: L,
                  actionListId: A,
                  parameterGroup: F,
                  smoothing: K,
                  restingValue: z,
                });
              });
          }),
        (y.actionTypeId === Ve.GENERAL_START_ACTION || Os(y.actionTypeId)) &&
          Ab({ store: t, actionListId: A, eventId: w });
    });
    let u = (f) => {
        let { ixSession: I } = t.getState();
        MV(a, (m, y, w) => {
          let C = r[y],
            A = I.eventState[w],
            { action: P, mediaQueries: L = o.mediaQueryKeys } = C;
          if (!Li(L, I.mediaQueryKey)) return;
          let D = (G = {}) => {
            let F = i(
              {
                store: t,
                element: m,
                event: C,
                eventConfig: G,
                nativeEvent: f,
                eventStateKey: w,
              },
              A
            );
            vV(F, A) || t.dispatch(ss(w, F));
          };
          P.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(D)
            : D();
        });
      },
      d = (0, Ib.default)(u, mV),
      E = ({ target: f = document, types: I, throttle: m }) => {
        I.split(" ")
          .filter(Boolean)
          .forEach((y) => {
            let w = m ? d : u;
            f.addEventListener(y, w), t.dispatch(gi(f, [y, w]));
          });
      };
    Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
  }
  function FV(e) {
    if (!gV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        s = vs(o);
      t[s] ||
        ((i === Je.MOUSE_CLICK || i === Je.MOUSE_SECOND_CLICK) &&
          ((t[s] = !0),
          (r += s + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Ab({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: s } = n,
      a = s[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, Et.default)(u, "actionItemGroups[0].actionItems", []),
        E = (0, Et.default)(a, "mediaQueries", n.mediaQueryKeys);
      if (!Li(E, i.mediaQueryKey)) return;
      d.forEach((f) => {
        let { config: I, actionTypeId: m } = f,
          y =
            I?.target?.useEventTarget === !0 && I?.target?.objectId == null
              ? { target: a.target, targets: a.targets }
              : I,
          w = Ri({ config: y, event: a, elementApi: ke }),
          C = Ni(m);
        w.forEach((A) => {
          let P = C ? Cs(m)(A, f) : null;
          Rs({
            destination: Ss({ element: A, actionItem: f, elementApi: ke }, P),
            immediate: !0,
            store: e,
            element: A,
            eventId: r,
            actionItem: f,
            actionListId: t,
            pluginInstance: P,
          });
        });
      });
    }
  }
  function Sb({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, _r.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ls(r, e), i && e.dispatch(Er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function br({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: s } = e.getState(),
      a = s.hasBoundaryNodes && r ? rn(r, Ci) : null;
    (0, _r.default)(o, (u) => {
      let d = (0, Et.default)(u, "actionItem.config.target.boundaryMode"),
        E = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && E) {
        if (a && d && !hs(a, u.element)) return;
        Ls(u, e),
          u.verbose && e.dispatch(Er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function sn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: s,
    verbose: a,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: E } = u,
      f = E[t] || {},
      { mediaQueries: I = u.mediaQueryKeys } = f,
      m = (0, Et.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: y, useFirstGroupAsInitialState: w } = m;
    if (!y || !y.length) return !1;
    o >= y.length && (0, Et.default)(f, "config.loop") && (o = 0),
      o === 0 && w && o++;
    let A =
        (o === 0 || (o === 1 && w)) && Os(f.action?.actionTypeId)
          ? f.config.delay
          : void 0,
      P = (0, Et.default)(y, [o, "actionItems"], []);
    if (!P.length || !Li(I, d.mediaQueryKey)) return !1;
    let L = d.hasBoundaryNodes && r ? rn(r, Ci) : null,
      D = iV(P),
      G = !1;
    return (
      P.forEach((F, K) => {
        let { config: z, actionTypeId: Q } = F,
          re = Ni(Q),
          { target: j } = z;
        if (!j) return;
        let R = j.boundaryMode ? L : null;
        Ri({
          config: z,
          event: f,
          eventTarget: r,
          elementRoot: R,
          elementApi: ke,
        }).forEach((N, U) => {
          let H = re ? Cs(Q)(N, F) : null,
            te = re ? hV(Q)(N, F) : null;
          G = !0;
          let ne = D === K && U === 0,
            W = oV({ element: N, actionItem: F }),
            X = Ss({ element: N, actionItem: F, elementApi: ke }, H);
          Rs({
            store: e,
            element: N,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ne,
            computedStyle: W,
            destination: X,
            immediate: s,
            verbose: a,
            pluginInstance: H,
            pluginDuration: te,
            instanceDelay: A,
          });
        });
      }),
      G
    );
  }
  function Rs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: s,
        pluginInstance: a,
        continuous: u,
        restingValue: d,
        eventId: E,
      } = n,
      f = !u,
      I = rV(),
      { ixElements: m, ixSession: y, ixData: w } = t.getState(),
      C = tV(m, i),
      { refState: A } = m[C] || {},
      P = gs(i),
      L = y.reducedMotion && Zo[o.actionTypeId],
      D;
    if (L && u)
      switch (w.events[E]?.eventTypeId) {
        case Je.MOUSE_MOVE:
        case Je.MOUSE_MOVE_IN_VIEWPORT:
          D = d;
          break;
        default:
          D = 0.5;
          break;
      }
    let G = aV(i, A, r, o, ke, a);
    if (
      (t.dispatch(
        us({
          instanceId: I,
          elementId: C,
          origin: G,
          refType: P,
          skipMotion: L,
          skipToValue: D,
          ...n,
        })
      ),
      Cb(document.body, "ix2-animation-started", I),
      s)
    ) {
      kV(t, I);
      return;
    }
    Wt({ store: t, select: ({ ixInstances: F }) => F[I], onChange: Rb }),
      f && t.dispatch(yi(I, y.tick));
  }
  function Ls(e, t) {
    Cb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: s } = i[r] || {};
    s === wb && lV(o, n, ke), t.dispatch(cs(e.id));
  }
  function Cb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function kV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(yi(t, 0)), e.dispatch(mi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    Rb(n[t], e);
  }
  function Rb(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: s,
        actionTypeId: a,
        renderType: u,
        current: d,
        groupIndex: E,
        eventId: f,
        eventTarget: I,
        eventStateKey: m,
        actionListId: y,
        isCarrier: w,
        styleProp: C,
        verbose: A,
        pluginInstance: P,
      } = e,
      { ixData: L, ixSession: D } = t.getState(),
      { events: G } = L,
      F = G[f] || {},
      { mediaQueries: K = L.mediaQueryKeys } = F;
    if (Li(K, D.mediaQueryKey) && (n || r || i)) {
      if (d || (u === eV && i)) {
        t.dispatch(ls(o, a, d, s));
        let { ixElements: z } = t.getState(),
          { ref: Q, refType: re, refState: j } = z[o] || {},
          R = j && j[a];
        (re === wb || Ni(a)) && nV(Q, j, R, f, s, C, ke, u, P);
      }
      if (i) {
        if (w) {
          let z = sn({
            store: t,
            eventId: f,
            eventTarget: I,
            eventStateKey: m,
            actionListId: y,
            groupIndex: E + 1,
            verbose: A,
          });
          A && !z && t.dispatch(Er({ actionListId: y, isPlaying: !1 }));
        }
        Ls(e, t);
      }
    }
  }
  var mb,
    Et,
    yb,
    Eb,
    bb,
    _b,
    _r,
    Ib,
    Si,
    JU,
    Os,
    As,
    Ci,
    wb,
    eV,
    hb,
    Ri,
    tV,
    Ss,
    Wt,
    rV,
    nV,
    Tb,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    Li,
    lV,
    fV,
    dV,
    pV,
    vV,
    Ni,
    Cs,
    hV,
    gb,
    gV,
    mV,
    LV,
    PV,
    MV,
    qV,
    xs = ye(() => {
      "use strict";
      (mb = pe(Aa())),
        (Et = pe(Zn())),
        (yb = pe(Xm())),
        (Eb = pe(gy())),
        (bb = pe(yy())),
        (_b = pe(by())),
        (_r = pe(Oy())),
        (Ib = pe(Py()));
      We();
      Si = pe(Vt());
      Ei();
      Gy();
      vb();
      (JU = Object.keys(Rn)),
        (Os = (e) => JU.includes(e)),
        ({
          COLON_DELIMITER: As,
          BOUNDARY_SELECTOR: Ci,
          HTML_ELEMENT: wb,
          RENDER_GENERAL: eV,
          W_MOD_IX: hb,
        } = Pe),
        ({
          getAffectedElements: Ri,
          getElementId: tV,
          getDestinationValues: Ss,
          observeStore: Wt,
          getInstanceId: rV,
          renderHTMLElement: nV,
          clearAllStyles: Tb,
          getMaxDurationItemIndex: iV,
          getComputedStyle: oV,
          getInstanceOrigin: aV,
          reduceListToGroup: sV,
          shouldNamespaceEventParameter: uV,
          getNamespacedParameterId: cV,
          shouldAllowMediaQuery: Li,
          cleanupHTMLElement: lV,
          clearObjectCache: fV,
          stringifyTarget: dV,
          mediaQueriesEqual: pV,
          shallowEqual: vV,
        } = Si.IX2VanillaUtils),
        ({
          isPluginType: Ni,
          createPluginInstance: Cs,
          getPluginDuration: hV,
        } = Si.IX2VanillaPlugins),
        (gb = navigator.userAgent),
        (gV = gb.match(/iPad/i) || gb.match(/iPhone/)),
        (mV = 12);
      LV = ["resize", "orientationchange"];
      (PV = (e, t) => (0, Eb.default)((0, _b.default)(e, t), bb.default)),
        (MV = (e, t) => {
          (0, _r.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let s = n + As + o;
              t(i, n, s);
            });
          });
        }),
        (qV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ri({ config: t, elementApi: ke });
        });
    });
  var Pb = l((bt) => {
    "use strict";
    var GV = mn().default,
      UV = hu().default;
    Object.defineProperty(bt, "__esModule", { value: !0 });
    bt.actions = void 0;
    bt.destroy = Nb;
    bt.init = BV;
    bt.setEnv = XV;
    bt.store = void 0;
    ef();
    var VV = Yo(),
      WV = UV((xm(), it(Tm))),
      Ns = (xs(), it(Lb)),
      HV = GV((Ei(), it(qy)));
    bt.actions = HV;
    var Ps = (bt.store = (0, VV.createStore)(WV.default));
    function XV(e) {
      e() && (0, Ns.observeRequests)(Ps);
    }
    function BV(e) {
      Nb(), (0, Ns.startEngine)({ store: Ps, rawData: e, allowEvents: !0 });
    }
    function Nb() {
      (0, Ns.stopEngine)(Ps);
    }
  });
  var Fb = l((Iz, Db) => {
    "use strict";
    var Mb = Ne(),
      qb = Pb();
    qb.setEnv(Mb.env);
    Mb.define(
      "ix2",
      (Db.exports = function () {
        return qb;
      })
    );
  });
  var Gb = l((wz, kb) => {
    "use strict";
    var Ir = Ne();
    Ir.define(
      "links",
      (kb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Ir.env(),
          s = window.location,
          a = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          E = /\/$/,
          f,
          I;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && Ir.env("design")),
            (I = Ir.env("slug") || s.pathname || ""),
            Ir.scroll.off(w),
            (f = []);
          for (var A = document.links, P = 0; P < A.length; ++P) y(A[P]);
          f.length && (Ir.scroll.on(w), w());
        }
        function y(A) {
          if (!A.getAttribute("hreflang")) {
            var P =
              (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
            if (((a.href = P), !(P.indexOf(":") >= 0))) {
              var L = e(A);
              if (
                a.hash.length > 1 &&
                a.host + a.pathname === s.host + s.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                var D = e(a.hash);
                D.length && f.push({ link: L, sec: D, active: !1 });
                return;
              }
              if (!(P === "#" || P === "")) {
                var G =
                  a.href === s.href || P === I || (d.test(P) && E.test(I));
                C(L, u, G);
              }
            }
          }
        }
        function w() {
          var A = n.scrollTop(),
            P = n.height();
          t.each(f, function (L) {
            if (!L.link.attr("hreflang")) {
              var D = L.link,
                G = L.sec,
                F = G.offset().top,
                K = G.outerHeight(),
                z = P * 0.5,
                Q = G.is(":visible") && F + K - z >= A && F + z <= A + P;
              L.active !== Q && ((L.active = Q), C(D, u, Q));
            }
          });
        }
        function C(A, P, L) {
          var D = A.hasClass(P);
          (L && D) || (!L && !D) || (L ? A.addClass(P) : A.removeClass(P));
        }
        return r;
      })
    );
  });
  var Vb = l((Tz, Ub) => {
    "use strict";
    var qi = Ne();
    qi.define(
      "scroll",
      (Ub.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          s = e(document.body),
          a =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (R) {
              window.setTimeout(R, 15);
            },
          u = qi.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          E = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
          I = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(I));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(R) {
          return w.test(R.hash) && R.host + R.pathname === r.host + r.pathname;
        }
        let A =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            A.matches
          );
        }
        function L(R, _) {
          var N;
          switch (_) {
            case "add":
              (N = R.attr("tabindex")),
                N
                  ? R.attr("data-wf-tabindex-swap", N)
                  : R.attr("tabindex", "-1");
              break;
            case "remove":
              (N = R.attr("data-wf-tabindex-swap")),
                N
                  ? (R.attr("tabindex", N),
                    R.removeAttr("data-wf-tabindex-swap"))
                  : R.removeAttr("tabindex");
              break;
          }
          R.toggleClass("wf-force-outline-none", _ === "add");
        }
        function D(R) {
          var _ = R.currentTarget;
          if (
            !(
              qi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var N = C(_) ? _.hash : "";
            if (N !== "") {
              var U = e(N);
              U.length &&
                (R && (R.preventDefault(), R.stopPropagation()),
                G(N, R),
                window.setTimeout(
                  function () {
                    F(U, function () {
                      L(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        L(U, "remove");
                    });
                  },
                  R ? 0 : 300
                ));
            }
          }
        }
        function G(R) {
          if (
            r.hash !== R &&
            n &&
            n.pushState &&
            !(qi.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== R && n.pushState({ hash: R }, "", R);
          }
        }
        function F(R, _) {
          var N = i.scrollTop(),
            U = K(R);
          if (N !== U) {
            var H = z(R, N, U),
              te = Date.now(),
              ne = function () {
                var W = Date.now() - te;
                window.scroll(0, Q(N, U, W, H)),
                  W <= H ? a(ne) : typeof _ == "function" && _();
              };
            a(ne);
          }
        }
        function K(R) {
          var _ = e(d),
            N = _.css("position") === "fixed" ? _.outerHeight() : 0,
            U = R.offset().top - N;
          if (R.data("scroll") === "mid") {
            var H = i.height() - N,
              te = R.outerHeight();
            te < H && (U -= Math.round((H - te) / 2));
          }
          return U;
        }
        function z(R, _, N) {
          if (P()) return 0;
          var U = 1;
          return (
            s.add(R).each(function (H, te) {
              var ne = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (U = ne);
            }),
            (472.143 * Math.log(Math.abs(_ - N) + 125) - 2e3) * U
          );
        }
        function Q(R, _, N, U) {
          return N > U ? _ : R + (_ - R) * re(N / U);
        }
        function re(R) {
          return R < 0.5
            ? 4 * R * R * R
            : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1;
        }
        function j() {
          var { WF_CLICK_EMPTY: R, WF_CLICK_SCROLL: _ } = t;
          o.on(_, f, D),
            o.on(R, E, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: j };
      })
    );
  });
  var Hb = l((xz, Wb) => {
    "use strict";
    var jV = Ne();
    jV.define(
      "touch",
      (Wb.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var s = !1,
            a = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            E;
          o.addEventListener("touchstart", f, !1),
            o.addEventListener("touchmove", I, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", f, !1),
            o.addEventListener("mousemove", I, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", y, !1);
          function f(C) {
            var A = C.touches;
            (A && A.length > 1) ||
              ((s = !0),
              A ? ((a = !0), (d = A[0].clientX)) : (d = C.clientX),
              (E = d));
          }
          function I(C) {
            if (s) {
              if (a && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var A = C.touches,
                P = A ? A[0].clientX : C.clientX,
                L = P - E;
              (E = P),
                Math.abs(L) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: L > 0 ? "right" : "left" }), y());
            }
          }
          function m(C) {
            if (s && ((s = !1), a && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (a = !1);
              return;
            }
          }
          function y() {
            s = !1;
          }
          function w() {
            o.removeEventListener("touchstart", f, !1),
              o.removeEventListener("touchmove", I, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", f, !1),
              o.removeEventListener("mousemove", I, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = w;
        }
        function i(o, s, a) {
          var u = e.Event(o, { originalEvent: s });
          e(s.target).trigger(u, a);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var jb = l((Oz, Bb) => {
    "use strict";
    var Ht = Ne(),
      zV = jt(),
      rt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Xb = !0,
      KV = /^#[a-zA-Z0-9\-_]+$/;
    Ht.define(
      "dropdown",
      (Bb.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Ht.env(),
          o = !1,
          s,
          a = Ht.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          E = zV.triggers,
          f = 900,
          I = "focusout" + u,
          m = "keydown" + u,
          y = "mouseenter" + u,
          w = "mousemove" + u,
          C = "mouseleave" + u,
          A = (a ? "click" : "mouseup") + u,
          P = "w-close" + u,
          L = "setting" + u,
          D = e(document),
          G;
        (n.ready = F),
          (n.design = function () {
            o && _(), (o = !1), F();
          }),
          (n.preview = function () {
            (o = !0), F();
          });
        function F() {
          (s = i && Ht.env("design")), (G = D.find(u)), G.each(K);
        }
        function K(c, M) {
          var V = e(M),
            x = e.data(M, u);
          x ||
            (x = e.data(M, u, {
              open: !1,
              el: V,
              config: {},
              selectedIdx: -1,
            })),
            (x.toggle = x.el.children(".w-dropdown-toggle")),
            (x.list = x.el.children(".w-dropdown-list")),
            (x.links = x.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (x.complete = H(x)),
            (x.mouseLeave = ne(x)),
            (x.mouseUpOutside = U(x)),
            (x.mouseMoveOutside = W(x)),
            z(x);
          var Z = x.toggle.attr("id"),
            ue = x.list.attr("id");
          Z || (Z = "w-dropdown-toggle-" + c),
            ue || (ue = "w-dropdown-list-" + c),
            x.toggle.attr("id", Z),
            x.toggle.attr("aria-controls", ue),
            x.toggle.attr("aria-haspopup", "menu"),
            x.toggle.attr("aria-expanded", "false"),
            x.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            x.toggle.prop("tagName") !== "BUTTON" &&
              (x.toggle.attr("role", "button"),
              x.toggle.attr("tabindex") || x.toggle.attr("tabindex", "0")),
            x.list.attr("id", ue),
            x.list.attr("aria-labelledby", Z),
            x.links.each(function (b, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                KV.test(B.hash) && B.addEventListener("click", R.bind(null, x));
            }),
            x.el.off(u),
            x.toggle.off(u),
            x.nav && x.nav.off(u);
          var oe = re(x, Xb);
          s && x.el.on(L, Q(x)),
            s ||
              (i && ((x.hovering = !1), R(x)),
              x.config.hover && x.toggle.on(y, te(x)),
              x.el.on(P, oe),
              x.el.on(m, X(x)),
              x.el.on(I, g(x)),
              x.toggle.on(A, oe),
              x.toggle.on(m, v(x)),
              (x.nav = x.el.closest(".w-nav")),
              x.nav.on(P, oe));
        }
        function z(c) {
          var M = Number(c.el.css("z-index"));
          (c.manageZ = M === f || M === f + 1),
            (c.config = {
              hover: c.el.attr("data-hover") === "true" && !a,
              delay: c.el.attr("data-delay"),
            });
        }
        function Q(c) {
          return function (M, V) {
            (V = V || {}),
              z(c),
              V.open === !0 && j(c, !0),
              V.open === !1 && R(c, { immediate: !0 });
          };
        }
        function re(c, M) {
          return r(function (V) {
            if (c.open || (V && V.type === "w-close"))
              return R(c, { forceClose: M });
            j(c);
          });
        }
        function j(c) {
          if (!c.open) {
            N(c),
              (c.open = !0),
              c.list.addClass(d),
              c.toggle.addClass(d),
              c.toggle.attr("aria-expanded", "true"),
              E.intro(0, c.el[0]),
              Ht.redraw.up(),
              c.manageZ && c.el.css("z-index", f + 1);
            var M = Ht.env("editor");
            s || D.on(A, c.mouseUpOutside),
              c.hovering && !M && c.el.on(C, c.mouseLeave),
              c.hovering && M && D.on(w, c.mouseMoveOutside),
              window.clearTimeout(c.delayId);
          }
        }
        function R(c, { immediate: M, forceClose: V } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !V)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var x = c.config;
            if (
              (E.outro(0, c.el[0]),
              D.off(A, c.mouseUpOutside),
              D.off(w, c.mouseMoveOutside),
              c.el.off(C, c.mouseLeave),
              window.clearTimeout(c.delayId),
              !x.delay || M)
            )
              return c.complete();
            c.delayId = window.setTimeout(c.complete, x.delay);
          }
        }
        function _() {
          D.find(u).each(function (c, M) {
            e(M).triggerHandler(P);
          });
        }
        function N(c) {
          var M = c.el[0];
          G.each(function (V, x) {
            var Z = e(x);
            Z.is(M) || Z.has(M).length || Z.triggerHandler(P);
          });
        }
        function U(c) {
          return (
            c.mouseUpOutside && D.off(A, c.mouseUpOutside),
            r(function (M) {
              if (c.open) {
                var V = e(M.target);
                if (!V.closest(".w-dropdown-toggle").length) {
                  var x = e.inArray(c.el[0], V.parents(u)) === -1,
                    Z = Ht.env("editor");
                  if (x) {
                    if (Z) {
                      var ue =
                          V.parents().length === 1 &&
                          V.parents("svg").length === 1,
                        oe = V.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ue || oe) return;
                    }
                    R(c);
                  }
                }
              }
            })
          );
        }
        function H(c) {
          return function () {
            c.list.removeClass(d),
              c.toggle.removeClass(d),
              c.manageZ && c.el.css("z-index", "");
          };
        }
        function te(c) {
          return function () {
            (c.hovering = !0), j(c);
          };
        }
        function ne(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || R(c);
          };
        }
        function W(c) {
          return r(function (M) {
            if (c.open) {
              var V = e(M.target),
                x = e.inArray(c.el[0], V.parents(u)) === -1;
              if (x) {
                var Z = V.parents(".w-editor-bem-EditorHoverControls").length,
                  ue = V.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  b =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (Z || ue || b) return;
                (c.hovering = !1), R(c);
              }
            }
          });
        }
        function X(c) {
          return function (M) {
            if (!(s || !c.open))
              switch (
                ((c.selectedIdx = c.links.index(document.activeElement)),
                M.keyCode)
              ) {
                case rt.HOME:
                  return c.open
                    ? ((c.selectedIdx = 0), h(c), M.preventDefault())
                    : void 0;
                case rt.END:
                  return c.open
                    ? ((c.selectedIdx = c.links.length - 1),
                      h(c),
                      M.preventDefault())
                    : void 0;
                case rt.ESCAPE:
                  return R(c), c.toggle.focus(), M.stopPropagation();
                case rt.ARROW_RIGHT:
                case rt.ARROW_DOWN:
                  return (
                    (c.selectedIdx = Math.min(
                      c.links.length - 1,
                      c.selectedIdx + 1
                    )),
                    h(c),
                    M.preventDefault()
                  );
                case rt.ARROW_LEFT:
                case rt.ARROW_UP:
                  return (
                    (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)),
                    h(c),
                    M.preventDefault()
                  );
              }
          };
        }
        function h(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function v(c) {
          var M = re(c, Xb);
          return function (V) {
            if (!s) {
              if (!c.open)
                switch (V.keyCode) {
                  case rt.ARROW_UP:
                  case rt.ARROW_DOWN:
                    return V.stopPropagation();
                }
              switch (V.keyCode) {
                case rt.SPACE:
                case rt.ENTER:
                  return M(), V.stopPropagation(), V.preventDefault();
              }
            }
          };
        }
        function g(c) {
          return r(function (M) {
            var { relatedTarget: V, target: x } = M,
              Z = c.el[0],
              ue = Z.contains(V) || Z.contains(x);
            return ue || R(c), M.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var zb = l((Ms) => {
    "use strict";
    Object.defineProperty(Ms, "__esModule", { value: !0 });
    Ms.default = YV;
    function YV(e, t, r, n, i, o, s, a, u, d, E, f, I) {
      return function (m) {
        e(m);
        var y = m.form,
          w = {
            name: y.attr("data-name") || y.attr("name") || "Untitled Form",
            pageId: y.attr("data-wf-page-id") || "",
            elementId: y.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              y.html()
            ),
            trackingCookies: n(),
          };
        let C = y.attr("data-wf-flow");
        C && (w.wfFlow = C), i(m);
        var A = o(y, w.fields);
        if (A) return s(A);
        if (((w.fileUploads = a(y)), u(m), !d)) {
          E(m);
          return;
        }
        f.ajax({
          url: I,
          type: "POST",
          data: w,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (P) {
            P && P.code === 200 && (m.success = !0), E(m);
          })
          .fail(function () {
            E(m);
          });
      };
    }
  });
  var Yb = l((Sz, Kb) => {
    "use strict";
    var Di = Ne();
    Di.define(
      "forms",
      (Kb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          s = window.XDomainRequest && !window.atob,
          a = ".w-form",
          u,
          d = /e(-)?mail/i,
          E = /^\S+@\S+$/,
          f = window.alert,
          I = Di.env(),
          m,
          y,
          w,
          C = /list-manage[1-9]?.com/i,
          A = t.debounce(function () {
            f(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              P(), !I && !m && D();
            };
        function P() {
          (u = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + u),
            s &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (w = `${y}/signFile`),
            (i = e(a + " form")),
            i.length && i.each(L);
        }
        function L(W, X) {
          var h = e(X),
            v = e.data(X, a);
          v || (v = e.data(X, a, { form: h })), G(v);
          var g = h.closest("div.w-form");
          (v.done = g.find("> .w-form-done")),
            (v.fail = g.find("> .w-form-fail")),
            (v.fileUploads = g.find(".w-file-upload")),
            v.fileUploads.each(function (V) {
              H(V, v);
            });
          var c =
            v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
          v.done.attr("aria-label") || v.form.attr("aria-label", c),
            v.done.attr("tabindex", "-1"),
            v.done.attr("role", "region"),
            v.done.attr("aria-label") ||
              v.done.attr("aria-label", c + " success"),
            v.fail.attr("tabindex", "-1"),
            v.fail.attr("role", "region"),
            v.fail.attr("aria-label") ||
              v.fail.attr("aria-label", c + " failure");
          var M = (v.action = h.attr("action"));
          if (
            ((v.handler = null),
            (v.redirect = h.attr("data-redirect")),
            C.test(M))
          ) {
            v.handler = _;
            return;
          }
          if (!M) {
            if (u) {
              v.handler = (() => {
                let V = zb().default;
                return V(G, o, Di, re, U, K, f, z, F, u, N, e, y);
              })();
              return;
            }
            A();
          }
        }
        function D() {
          (m = !0),
            n.on("submit", a + " form", function (V) {
              var x = e.data(this, a);
              x.handler && ((x.evt = V), x.handler(x));
            });
          let W = ".w-checkbox-input",
            X = ".w-radio-input",
            h = "w--redirected-checked",
            v = "w--redirected-focus",
            g = "w--redirected-focus-visible",
            c = ":focus-visible, [data-wf-focus-visible]",
            M = [
              ["checkbox", W],
              ["radio", X],
            ];
          n.on(
            "change",
            a + ' form input[type="checkbox"]:not(' + W + ")",
            (V) => {
              e(V.target).siblings(W).toggleClass(h);
            }
          ),
            n.on("change", a + ' form input[type="radio"]', (V) => {
              e(`input[name="${V.target.name}"]:not(${W})`).map((Z, ue) =>
                e(ue).siblings(X).removeClass(h)
              );
              let x = e(V.target);
              x.hasClass("w-radio-input") || x.siblings(X).addClass(h);
            }),
            M.forEach(([V, x]) => {
              n.on(
                "focus",
                a + ` form input[type="${V}"]:not(` + x + ")",
                (Z) => {
                  e(Z.target).siblings(x).addClass(v),
                    e(Z.target).filter(c).siblings(x).addClass(g);
                }
              ),
                n.on(
                  "blur",
                  a + ` form input[type="${V}"]:not(` + x + ")",
                  (Z) => {
                    e(Z.target).siblings(x).removeClass(`${v} ${g}`);
                  }
                );
            });
        }
        function G(W) {
          var X = (W.btn = W.form.find(':input[type="submit"]'));
          (W.wait = W.btn.attr("data-wait") || null),
            (W.success = !1),
            X.prop("disabled", !1),
            W.label && X.val(W.label);
        }
        function F(W) {
          var X = W.btn,
            h = W.wait;
          X.prop("disabled", !0), h && ((W.label = X.val()), X.val(h));
        }
        function K(W, X) {
          var h = null;
          return (
            (X = X || {}),
            W.find(':input:not([type="submit"]):not([type="file"])').each(
              function (v, g) {
                var c = e(g),
                  M = c.attr("type"),
                  V =
                    c.attr("data-name") || c.attr("name") || "Field " + (v + 1),
                  x = c.val();
                if (M === "checkbox") x = c.is(":checked");
                else if (M === "radio") {
                  if (X[V] === null || typeof X[V] == "string") return;
                  x =
                    W.find(
                      'input[name="' + c.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof x == "string" && (x = e.trim(x)),
                  (X[V] = x),
                  (h = h || j(c, M, V, x));
              }
            ),
            h
          );
        }
        function z(W) {
          var X = {};
          return (
            W.find(':input[type="file"]').each(function (h, v) {
              var g = e(v),
                c = g.attr("data-name") || g.attr("name") || "File " + (h + 1),
                M = g.attr("data-value");
              typeof M == "string" && (M = e.trim(M)), (X[c] = M);
            }),
            X
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function re() {
          return document.cookie.split("; ").reduce(function (X, h) {
            let v = h.split("="),
              g = v[0];
            if (g in Q) {
              let c = Q[g],
                M = v.slice(1).join("=");
              X[c] = M;
            }
            return X;
          }, {});
        }
        function j(W, X, h, v) {
          var g = null;
          return (
            X === "password"
              ? (g = "Passwords cannot be submitted.")
              : W.attr("required")
              ? v
                ? d.test(W.attr("type")) &&
                  (E.test(v) ||
                    (g = "Please enter a valid email address for: " + h))
                : (g = "Please fill out the required field: " + h)
              : h === "g-recaptcha-response" &&
                !v &&
                (g = "Please confirm you\u2019re not a robot."),
            g
          );
        }
        function R(W) {
          U(W), N(W);
        }
        function _(W) {
          G(W);
          var X = W.form,
            h = {};
          if (/^https/.test(o.href) && !/^https/.test(W.action)) {
            X.attr("method", "post");
            return;
          }
          U(W);
          var v = K(X, h);
          if (v) return f(v);
          F(W);
          var g;
          t.each(h, function (x, Z) {
            d.test(Z) && (h.EMAIL = x),
              /^((full[ _-]?)?name)$/i.test(Z) && (g = x),
              /^(first[ _-]?name)$/i.test(Z) && (h.FNAME = x),
              /^(last[ _-]?name)$/i.test(Z) && (h.LNAME = x);
          }),
            g &&
              !h.FNAME &&
              ((g = g.split(" ")),
              (h.FNAME = g[0]),
              (h.LNAME = h.LNAME || g[1]));
          var c = W.action.replace("/post?", "/post-json?") + "&c=?",
            M = c.indexOf("u=") + 2;
          M = c.substring(M, c.indexOf("&", M));
          var V = c.indexOf("id=") + 3;
          (V = c.substring(V, c.indexOf("&", V))),
            (h["b_" + M + "_" + V] = ""),
            e
              .ajax({ url: c, data: h, dataType: "jsonp" })
              .done(function (x) {
                (W.success = x.result === "success" || /already/.test(x.msg)),
                  W.success || console.info("MailChimp error: " + x.msg),
                  N(W);
              })
              .fail(function () {
                N(W);
              });
        }
        function N(W) {
          var X = W.form,
            h = W.redirect,
            v = W.success;
          if (v && h) {
            Di.location(h);
            return;
          }
          W.done.toggle(v),
            W.fail.toggle(!v),
            v ? W.done.focus() : W.fail.focus(),
            X.toggle(!v),
            G(W);
        }
        function U(W) {
          W.evt && W.evt.preventDefault(), (W.evt = null);
        }
        function H(W, X) {
          if (!X.fileUploads || !X.fileUploads[W]) return;
          var h,
            v = e(X.fileUploads[W]),
            g = v.find("> .w-file-upload-default"),
            c = v.find("> .w-file-upload-uploading"),
            M = v.find("> .w-file-upload-success"),
            V = v.find("> .w-file-upload-error"),
            x = g.find(".w-file-upload-input"),
            Z = g.find(".w-file-upload-label"),
            ue = Z.children(),
            oe = V.find(".w-file-upload-error-msg"),
            b = M.find(".w-file-upload-file"),
            B = M.find(".w-file-remove-link"),
            ee = b.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            Te = oe.attr("data-w-generic-error");
          if (
            (I ||
              Z.on("click keydown", function (O) {
                (O.type === "keydown" && O.which !== 13 && O.which !== 32) ||
                  (O.preventDefault(), x.click());
              }),
            Z.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            I)
          )
            x.on("click", function (O) {
              O.preventDefault();
            }),
              Z.on("click", function (O) {
                O.preventDefault();
              }),
              ue.on("click", function (O) {
                O.preventDefault();
              });
          else {
            B.on("click keydown", function (O) {
              if (O.type === "keydown") {
                if (O.which !== 13 && O.which !== 32) return;
                O.preventDefault();
              }
              x.removeAttr("data-value"),
                x.val(""),
                ee.html(""),
                g.toggle(!0),
                M.toggle(!1),
                Z.focus();
            }),
              x.on("change", function (O) {
                (h = O.target && O.target.files && O.target.files[0]),
                  h &&
                    (g.toggle(!1),
                    V.toggle(!1),
                    c.toggle(!0),
                    c.focus(),
                    ee.text(h.name),
                    q() || F(X),
                    (X.fileUploads[W].uploading = !0),
                    te(h, T));
              });
            var Le = Z.outerHeight();
            x.height(Le), x.width(1);
          }
          function p(O) {
            var k = O.responseJSON && O.responseJSON.msg,
              ie = Te;
            typeof k == "string" && k.indexOf("InvalidFileTypeError") === 0
              ? (ie = fe)
              : typeof k == "string" &&
                k.indexOf("MaxFileSizeError") === 0 &&
                (ie = Y),
              oe.text(ie),
              x.removeAttr("data-value"),
              x.val(""),
              c.toggle(!1),
              g.toggle(!0),
              V.toggle(!0),
              V.focus(),
              (X.fileUploads[W].uploading = !1),
              q() || G(X);
          }
          function T(O, k) {
            if (O) return p(O);
            var ie = k.fileName,
              se = k.postData,
              ge = k.fileId,
              J = k.s3Url;
            x.attr("data-value", ge), ne(J, se, h, ie, S);
          }
          function S(O) {
            if (O) return p(O);
            c.toggle(!1),
              M.css("display", "inline-block"),
              M.focus(),
              (X.fileUploads[W].uploading = !1),
              q() || G(X);
          }
          function q() {
            var O = (X.fileUploads && X.fileUploads.toArray()) || [];
            return O.some(function (k) {
              return k.uploading;
            });
          }
        }
        function te(W, X) {
          var h = new URLSearchParams({ name: W.name, size: W.size });
          e.ajax({ type: "GET", url: `${w}?${h}`, crossDomain: !0 })
            .done(function (v) {
              X(null, v);
            })
            .fail(function (v) {
              X(v);
            });
        }
        function ne(W, X, h, v, g) {
          var c = new FormData();
          for (var M in X) c.append(M, X[M]);
          c.append("file", h, v),
            e
              .ajax({
                type: "POST",
                url: W,
                data: c,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                g(null);
              })
              .fail(function (V) {
                g(V);
              });
        }
        return r;
      })
    );
  });
  var Zb = l((Cz, $b) => {
    "use strict";
    var qs = Ne(),
      Qb = "w-condition-invisible",
      QV = "." + Qb;
    function $V(e) {
      return e.filter(function (t) {
        return !cn(t);
      });
    }
    function cn(e) {
      return !!(e.$el && e.$el.closest(QV).length);
    }
    function Ds(e, t) {
      for (var r = e; r >= 0; r--) if (!cn(t[r])) return r;
      return -1;
    }
    function Fs(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!cn(t[r])) return r;
      return -1;
    }
    function ZV(e, t) {
      return Ds(e - 1, t) === -1;
    }
    function JV(e, t) {
      return Fs(e + 1, t) === -1;
    }
    function un(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function eW(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        s = "w-lightbox",
        a = s + "-",
        u = /(^|\s+)/g,
        d = [],
        E,
        f,
        I,
        m = [];
      function y(v, g) {
        return (
          (d = o(v) ? v : [v]),
          f || y.build(),
          $V(d).length > 1 &&
            ((f.items = f.empty),
            d.forEach(function (c, M) {
              var V = X("thumbnail"),
                x = X("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(V);
              un(x, `show item ${M + 1} of ${d.length}`),
                cn(c) && x.addClass(Qb),
                (f.items = f.items.add(x)),
                re(c.thumbnailUrl || c.url, function (Z) {
                  Z.prop("width") > Z.prop("height")
                    ? H(Z, "wide")
                    : H(Z, "tall"),
                    V.append(H(Z, "thumbnail-image"));
                });
            }),
            f.strip.empty().append(f.items),
            H(f.content, "group")),
          i(te(f.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          H(f.html, "noscroll"),
          y.show(g || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (f = { html: r(t.documentElement), empty: r() }),
          (f.arrowLeft = X("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.arrowRight = X("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (f.close = X("control close").attr("role", "button")),
          un(f.arrowLeft, "previous image"),
          un(f.arrowRight, "next image"),
          un(f.close, "close lightbox"),
          (f.spinner = X("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (f.strip = X("strip").attr("role", "tablist")),
          (I = new _(f.spinner, N("hide"))),
          (f.content = X("content").append(
            f.spinner,
            f.arrowLeft,
            f.arrowRight,
            f.close
          )),
          (f.container = X("container").append(f.content, f.strip)),
          (f.lightbox = X("backdrop hide").append(f.container)),
          f.strip.on("click", U("item"), L),
          f.content
            .on("swipe", D)
            .on("click", U("left"), C)
            .on("click", U("right"), A)
            .on("click", U("close"), P)
            .on("click", U("image, caption"), A),
          f.container.on("click", U("view"), P).on("dragstart", U("img"), F),
          f.lightbox.on("keydown", K).on("focusin", G),
          r(n).append(f.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          f && (te(f.html, "noscroll"), f.lightbox.remove(), (f = void 0));
        }),
        (y.show = function (v) {
          if (v !== E) {
            var g = d[v];
            if (!g) return y.hide();
            if (cn(g)) {
              if (v < E) {
                var c = Ds(v - 1, d);
                v = c > -1 ? c : v;
              } else {
                var M = Fs(v + 1, d);
                v = M > -1 ? M : v;
              }
              g = d[v];
            }
            var V = E;
            (E = v),
              f.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              I.show();
            var x = (g.html && h(g.width, g.height)) || g.url;
            return (
              re(x, function (Z) {
                if (v !== E) return;
                var ue = X("figure", "figure").append(H(Z, "image")),
                  oe = X("frame").append(ue),
                  b = X("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(oe),
                  B,
                  ee;
                g.html &&
                  ((B = r(g.html)),
                  (ee = B.is("iframe")),
                  ee && B.on("load", Y),
                  ue.append(H(B, "embed"))),
                  g.caption &&
                    ue.append(X("caption", "figcaption").text(g.caption)),
                  f.spinner.before(b),
                  ee || Y();
                function Y() {
                  if (
                    (f.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    I.hide(),
                    v !== E)
                  ) {
                    b.remove();
                    return;
                  }
                  let fe = ZV(v, d);
                  ne(f.arrowLeft, "inactive", fe),
                    W(f.arrowLeft, fe),
                    fe && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                  let Te = JV(v, d);
                  if (
                    (ne(f.arrowRight, "inactive", Te),
                    W(f.arrowRight, Te),
                    Te && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                    f.view
                      ? (i(f.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(j(f.view)),
                        i(b)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: v > V ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : b.css("opacity", 1),
                    (f.view = b),
                    f.view.prop("tabIndex", 0),
                    f.items)
                  ) {
                    te(f.items, "active"), f.items.removeAttr("aria-selected");
                    var Le = f.items.eq(v);
                    H(Le, "active"), Le.attr("aria-selected", !0), R(Le);
                  }
                }
              }),
              f.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (m.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                f.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            i(f.lightbox).add("opacity .3s").start({ opacity: 0 }).then(Q), y
          );
        }),
        (y.prev = function () {
          var v = Ds(E - 1, d);
          v > -1 && y.show(v);
        }),
        (y.next = function () {
          var v = Fs(E + 1, d);
          v > -1 && y.show(v);
        });
      function w(v) {
        return function (g) {
          this === g.target && (g.stopPropagation(), g.preventDefault(), v());
        };
      }
      var C = w(y.prev),
        A = w(y.next),
        P = w(y.hide),
        L = function (v) {
          var g = r(this).index();
          v.preventDefault(), y.show(g);
        },
        D = function (v, g) {
          v.preventDefault(),
            g.direction === "left"
              ? y.next()
              : g.direction === "right" && y.prev();
        },
        G = function () {
          this.focus();
        };
      function F(v) {
        v.preventDefault();
      }
      function K(v) {
        var g = v.keyCode;
        g === 27 || z(g, "close")
          ? y.hide()
          : g === 37 || z(g, "left")
          ? y.prev()
          : g === 39 || z(g, "right")
          ? y.next()
          : z(g, "item") && r(":focus").click();
      }
      function z(v, g) {
        if (v !== 13 && v !== 32) return !1;
        var c = r(":focus").attr("class"),
          M = N(g).trim();
        return c.includes(M);
      }
      function Q() {
        f &&
          (f.strip.scrollLeft(0).empty(),
          te(f.html, "noscroll"),
          H(f.lightbox, "hide"),
          f.view && f.view.remove(),
          te(f.content, "group"),
          H(f.arrowLeft, "inactive"),
          H(f.arrowRight, "inactive"),
          (E = f.view = void 0),
          m.forEach(function (v) {
            var g = v.node;
            g &&
              (v.hidden
                ? g.attr("aria-hidden", v.hidden)
                : g.removeAttr("aria-hidden"),
              v.tabIndex
                ? g.attr("tabIndex", v.tabIndex)
                : g.removeAttr("tabIndex"));
          }),
          (m = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function re(v, g) {
        var c = X("img", "img");
        return (
          c.one("load", function () {
            g(c);
          }),
          c.attr("src", v),
          c
        );
      }
      function j(v) {
        return function () {
          v.remove();
        };
      }
      function R(v) {
        var g = v.get(0),
          c = f.strip.get(0),
          M = g.offsetLeft,
          V = g.clientWidth,
          x = c.scrollLeft,
          Z = c.clientWidth,
          ue = c.scrollWidth - Z,
          oe;
        M < x
          ? (oe = Math.max(0, M + V - Z))
          : M + V > Z + x && (oe = Math.min(M, ue)),
          oe != null &&
            i(f.strip).add("scroll-left 500ms").start({ "scroll-left": oe });
      }
      function _(v, g, c) {
        (this.$element = v),
          (this.className = g),
          (this.delay = c || 200),
          this.hide();
      }
      (_.prototype.show = function () {
        var v = this;
        v.timeoutId ||
          (v.timeoutId = setTimeout(function () {
            v.$element.removeClass(v.className), delete v.timeoutId;
          }, v.delay));
      }),
        (_.prototype.hide = function () {
          var v = this;
          if (v.timeoutId) {
            clearTimeout(v.timeoutId), delete v.timeoutId;
            return;
          }
          v.$element.addClass(v.className);
        });
      function N(v, g) {
        return v.replace(u, (g ? " ." : " ") + a);
      }
      function U(v) {
        return N(v, !0);
      }
      function H(v, g) {
        return v.addClass(N(g));
      }
      function te(v, g) {
        return v.removeClass(N(g));
      }
      function ne(v, g, c) {
        return v.toggleClass(N(g), c);
      }
      function W(v, g) {
        return v.attr("aria-hidden", g).attr("tabIndex", g ? -1 : 0);
      }
      function X(v, g) {
        return H(r(t.createElement(g || "div")), v);
      }
      function h(v, g) {
        var c =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          v +
          '" height="' +
          g +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      return (
        (function () {
          var v = e.navigator.userAgent,
            g = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            c = v.match(g),
            M = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
          if (!M && (!c || c[2] > 7)) return;
          var V = t.createElement("style");
          t.head.appendChild(V), e.addEventListener("resize", x, !0);
          function x() {
            var Z = e.innerHeight,
              ue = e.innerWidth,
              oe =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Z +
                "px}.w-lightbox-view {width:" +
                ue +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Z +
                "px}.w-lightbox-image {max-width:" +
                ue +
                "px;max-height:" +
                Z +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Z +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Z +
                "px}.w-lightbox-item {width:" +
                0.1 * Z +
                "px;padding:" +
                0.02 * Z +
                "px " +
                0.01 * Z +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Z +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Z +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Z +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Z +
                "px}.w-lightbox-image {max-width:" +
                0.96 * ue +
                "px;max-height:" +
                0.96 * Z +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * ue +
                "px;max-height:" +
                0.84 * Z +
                "px}}";
            V.textContent = oe;
          }
          x();
        })(),
        y
      );
    }
    qs.define(
      "lightbox",
      ($b.exports = function (e) {
        var t = {},
          r = qs.env(),
          n = eW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          s,
          a = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = d;
        function d() {
          (s = r && qs.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(a)),
            o.webflowLightBox(),
            o.each(function () {
              un(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (y, w) {
              var C = e.data(w, a);
              C ||
                (C = e.data(w, a, {
                  el: e(w),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                C.el.off(a),
                E(C),
                s
                  ? C.el.on("setting" + a, E.bind(null, C))
                  : C.el.on("click" + a, f(C)).on("click" + a, function (A) {
                      A.preventDefault();
                    });
            });
          },
        });
        function E(m) {
          var y = m.el.children(".w-json").html(),
            w,
            C;
          if (!y) {
            m.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (A) {
            console.error("Malformed lightbox JSON configuration.", A);
          }
          I(y),
            y.items.forEach(function (A) {
              A.$el = m.el;
            }),
            (w = y.group),
            w
              ? ((C = u[w]),
                C || (C = u[w] = []),
                (m.items = C),
                y.items.length &&
                  ((m.index = C.length), C.push.apply(C, y.items)))
              : ((m.items = y.items), (m.index = 0));
        }
        function f(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function I(m) {
          m.images &&
            (m.images.forEach(function (y) {
              y.type = "image";
            }),
            (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var e_ = l((Rz, Jb) => {
    "use strict";
    var Ct = Ne(),
      tW = jt(),
      Re = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    Ct.define(
      "navbar",
      (Jb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          s = t.debounce,
          a,
          u,
          d,
          E,
          f = Ct.env(),
          I = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          y = "w--open",
          w = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          L = tW.triggers,
          D = e();
        (r.ready = r.design = r.preview = G),
          (r.destroy = function () {
            (D = e()), F(), u && u.length && u.each(re);
          });
        function G() {
          (d = f && Ct.env("design")),
            (E = Ct.env("editor")),
            (a = e(document.body)),
            (u = o.find(m)),
            u.length && (u.each(Q), F(), K());
        }
        function F() {
          Ct.resize.off(z);
        }
        function K() {
          Ct.resize.on(z);
        }
        function z() {
          u.each(g);
        }
        function Q(b, B) {
          var ee = e(B),
            Y = e.data(B, m);
          Y ||
            (Y = e.data(B, m, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = ee.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = ee.find(".w-nav-button")),
            (Y.container = ee.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + b),
            (Y.outside = h(Y));
          var fe = ee.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(m),
            Y.button.off(m),
            Y.menu.off(m),
            _(Y),
            d
              ? (j(Y), Y.el.on("setting" + m, N(Y)))
              : (R(Y),
                Y.button.on("click" + m, W(Y)),
                Y.menu.on("click" + m, "a", X(Y)),
                Y.button.on("keydown" + m, U(Y)),
                Y.el.on("keydown" + m, H(Y))),
            g(b, B);
        }
        function re(b, B) {
          var ee = e.data(B, m);
          ee && (j(ee), e.removeData(B, m));
        }
        function j(b) {
          b.overlay && (oe(b, !0), b.overlay.remove(), (b.overlay = null));
        }
        function R(b) {
          b.overlay ||
            ((b.overlay = e(I).appendTo(b.el)),
            b.overlay.attr("id", b.overlayContainerId),
            (b.parent = b.menu.parent()),
            oe(b, !0));
        }
        function _(b) {
          var B = {},
            ee = b.config || {},
            Y = (B.animation = b.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(Y)),
            (B.animDirect = /left$/.test(Y) ? -1 : 1),
            ee.animation !== Y && b.open && t.defer(ne, b),
            (B.easing = b.el.attr("data-easing") || "ease"),
            (B.easing2 = b.el.attr("data-easing2") || "ease");
          var fe = b.el.attr("data-duration");
          (B.duration = fe != null ? Number(fe) : 400),
            (B.docHeight = b.el.attr("data-doc-height")),
            (b.config = B);
        }
        function N(b) {
          return function (B, ee) {
            ee = ee || {};
            var Y = i.width();
            _(b),
              ee.open === !0 && Z(b, !0),
              ee.open === !1 && oe(b, !0),
              b.open &&
                t.defer(function () {
                  Y !== i.width() && ne(b);
                });
          };
        }
        function U(b) {
          return function (B) {
            switch (B.keyCode) {
              case Re.SPACE:
              case Re.ENTER:
                return W(b)(), B.preventDefault(), B.stopPropagation();
              case Re.ESCAPE:
                return oe(b), B.preventDefault(), B.stopPropagation();
              case Re.ARROW_RIGHT:
              case Re.ARROW_DOWN:
              case Re.HOME:
              case Re.END:
                return b.open
                  ? (B.keyCode === Re.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    te(b),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function H(b) {
          return function (B) {
            if (b.open)
              switch (
                ((b.selectedIdx = b.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Re.HOME:
                case Re.END:
                  return (
                    B.keyCode === Re.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    te(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Re.ESCAPE:
                  return (
                    oe(b),
                    b.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Re.ARROW_LEFT:
                case Re.ARROW_UP:
                  return (
                    (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                    te(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Re.ARROW_RIGHT:
                case Re.ARROW_DOWN:
                  return (
                    (b.selectedIdx = Math.min(
                      b.links.length - 1,
                      b.selectedIdx + 1
                    )),
                    te(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function te(b) {
          if (b.links[b.selectedIdx]) {
            var B = b.links[b.selectedIdx];
            B.focus(), X(B);
          }
        }
        function ne(b) {
          b.open && (oe(b, !0), Z(b, !0));
        }
        function W(b) {
          return s(function () {
            b.open ? oe(b) : Z(b);
          });
        }
        function X(b) {
          return function (B) {
            var ee = e(this),
              Y = ee.attr("href");
            if (!Ct.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && b.open && oe(b);
          };
        }
        function h(b) {
          return (
            b.outside && o.off("click" + m, b.outside),
            function (B) {
              var ee = e(B.target);
              (E && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                v(b, ee);
            }
          );
        }
        var v = s(function (b, B) {
          if (b.open) {
            var ee = B.closest(".w-nav-menu");
            b.menu.is(ee) || oe(b);
          }
        });
        function g(b, B) {
          var ee = e.data(B, m),
            Y = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !Y && !d && oe(ee, !0), ee.container.length)) {
            var fe = M(ee);
            ee.links.each(fe), ee.dropdowns.each(fe);
          }
          ee.open && ue(ee);
        }
        var c = "max-width";
        function M(b) {
          var B = b.container.css(c);
          return (
            B === "none" && (B = ""),
            function (ee, Y) {
              (Y = e(Y)), Y.css(c, ""), Y.css(c) === "none" && Y.css(c, B);
            }
          );
        }
        function V(b, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function x(b, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function Z(b, B) {
          if (b.open) return;
          (b.open = !0),
            b.menu.each(V),
            b.links.addClass(P),
            b.dropdowns.addClass(w),
            b.dropdownToggle.addClass(C),
            b.dropdownList.addClass(A),
            b.button.addClass(y);
          var ee = b.config,
            Y = ee.animation;
          (Y === "none" || !n.support.transform || ee.duration <= 0) &&
            (B = !0);
          var fe = ue(b),
            Te = b.menu.outerHeight(!0),
            Le = b.menu.outerWidth(!0),
            p = b.el.height(),
            T = b.el[0];
          if (
            (g(0, T),
            L.intro(0, T),
            Ct.redraw.up(),
            d || o.on("click" + m, b.outside),
            B)
          ) {
            O();
            return;
          }
          var S = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (b.overlay &&
              ((D = b.menu.prev()), b.overlay.show().append(b.menu)),
            ee.animOver)
          ) {
            n(b.menu)
              .add(S)
              .set({ x: ee.animDirect * Le, height: fe })
              .start({ x: 0 })
              .then(O),
              b.overlay && b.overlay.width(Le);
            return;
          }
          var q = p + Te;
          n(b.menu).add(S).set({ y: -q }).start({ y: 0 }).then(O);
          function O() {
            b.button.attr("aria-expanded", "true");
          }
        }
        function ue(b) {
          var B = b.config,
            ee = B.docHeight ? o.height() : a.height();
          return (
            B.animOver
              ? b.menu.height(ee)
              : b.el.css("position") !== "fixed" &&
                (ee -= b.el.outerHeight(!0)),
            b.overlay && b.overlay.height(ee),
            ee
          );
        }
        function oe(b, B) {
          if (!b.open) return;
          (b.open = !1), b.button.removeClass(y);
          var ee = b.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (B = !0),
            L.outro(0, b.el[0]),
            o.off("click" + m, b.outside),
            B)
          ) {
            n(b.menu).stop(), T();
            return;
          }
          var Y = "transform " + ee.duration + "ms " + ee.easing2,
            fe = b.menu.outerHeight(!0),
            Te = b.menu.outerWidth(!0),
            Le = b.el.height();
          if (ee.animOver) {
            n(b.menu)
              .add(Y)
              .start({ x: Te * ee.animDirect })
              .then(T);
            return;
          }
          var p = Le + fe;
          n(b.menu).add(Y).start({ y: -p }).then(T);
          function T() {
            b.menu.height(""),
              n(b.menu).set({ x: 0, y: 0 }),
              b.menu.each(x),
              b.links.removeClass(P),
              b.dropdowns.removeClass(w),
              b.dropdownToggle.removeClass(C),
              b.dropdownList.removeClass(A),
              b.overlay &&
                b.overlay.children().length &&
                (D.length ? b.menu.insertAfter(D) : b.menu.prependTo(b.parent),
                b.overlay.attr("style", "").hide()),
              b.el.triggerHandler("w-close"),
              b.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var n_ = l((Lz, r_) => {
    "use strict";
    var Rt = Ne(),
      rW = jt(),
      pt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      t_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Rt.define(
      "slider",
      (r_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          s,
          a = Rt.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          E =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          f = "w-slider-force-show",
          I = rW.triggers,
          m,
          y = !1;
        (r.ready = function () {
          (s = Rt.env("design")), w();
        }),
          (r.design = function () {
            (s = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (s = !1), w();
          }),
          (r.redraw = function () {
            (y = !0), w(), (y = !1);
          }),
          (r.destroy = C);
        function w() {
          (o = i.find(u)), o.length && (o.each(L), !m && (C(), A()));
        }
        function C() {
          Rt.resize.off(P), Rt.redraw.off(r.redraw);
        }
        function A() {
          Rt.resize.on(P), Rt.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(H);
        }
        function L(h, v) {
          var g = e(v),
            c = e.data(v, u);
          c ||
            (c = e.data(v, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: g,
              config: {},
            })),
            (c.mask = g.children(".w-slider-mask")),
            (c.left = g.children(".w-slider-arrow-left")),
            (c.right = g.children(".w-slider-arrow-right")),
            (c.nav = g.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(I.reset),
            y && (c.maskWidth = 0),
            g.attr("role") === void 0 && g.attr("role", "region"),
            g.attr("aria-label") === void 0 && g.attr("aria-label", "carousel");
          var M = c.mask.attr("id");
          if (
            (M || ((M = "w-slider-mask-" + h), c.mask.attr("id", M)),
            !s && !c.ariaLiveLabel && (c.ariaLiveLabel = e(E).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", M),
            c.left.attr("aria-label") === void 0 &&
              c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", M),
            c.right.attr("aria-label") === void 0 &&
              c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(u),
            c.left.off(u),
            c.right.off(u),
            c.nav.off(u),
            D(c),
            s
              ? (c.el.on("setting" + u, _(c)), R(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + u, _(c)),
                c.left.on("click" + u, z(c)),
                c.right.on("click" + u, Q(c)),
                c.left.on("keydown" + u, K(c, z)),
                c.right.on("keydown" + u, K(c, Q)),
                c.nav.on("keydown" + u, "> div", _(c)),
                c.config.autoplay &&
                  !c.hasTimer &&
                  ((c.hasTimer = !0), (c.timerCount = 1), j(c)),
                c.el.on("mouseenter" + u, F(c, !0, "mouse")),
                c.el.on("focusin" + u, F(c, !0, "keyboard")),
                c.el.on("mouseleave" + u, F(c, !1, "mouse")),
                c.el.on("focusout" + u, F(c, !1, "keyboard"))),
            c.nav.on("click" + u, "> div", _(c)),
            a ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var V = g.filter(":hidden");
          V.addClass(f);
          var x = g.parents(":hidden");
          x.addClass(f), y || H(h, v), V.removeClass(f), x.removeClass(f);
        }
        function D(h) {
          var v = {};
          (v.crossOver = 0),
            (v.animation = h.el.attr("data-animation") || "slide"),
            v.animation === "outin" &&
              ((v.animation = "cross"), (v.crossOver = 0.5)),
            (v.easing = h.el.attr("data-easing") || "ease");
          var g = h.el.attr("data-duration");
          if (
            ((v.duration = g != null ? parseInt(g, 10) : 500),
            G(h.el.attr("data-infinite")) && (v.infinite = !0),
            G(h.el.attr("data-disable-swipe")) && (v.disableSwipe = !0),
            G(h.el.attr("data-hide-arrows"))
              ? (v.hideArrows = !0)
              : h.config.hideArrows && (h.left.show(), h.right.show()),
            G(h.el.attr("data-autoplay")))
          ) {
            (v.autoplay = !0),
              (v.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3),
              (v.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + u + " touchstart" + u;
            s ||
              h.el.off(c).one(c, function () {
                R(h);
              });
          }
          var M = h.right.width();
          (v.edge = M ? M + 40 : 100), (h.config = v);
        }
        function G(h) {
          return h === "1" || h === "true";
        }
        function F(h, v, g) {
          return function (c) {
            if (v) h.hasFocus[g] = v;
            else if (
              e.contains(h.el.get(0), c.relatedTarget) ||
              ((h.hasFocus[g] = v),
              (h.hasFocus.mouse && g === "keyboard") ||
                (h.hasFocus.keyboard && g === "mouse"))
            )
              return;
            v
              ? (h.ariaLiveLabel.attr("aria-live", "polite"),
                h.hasTimer && R(h))
              : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && j(h));
          };
        }
        function K(h, v) {
          return function (g) {
            switch (g.keyCode) {
              case pt.SPACE:
              case pt.ENTER:
                return v(h)(), g.preventDefault(), g.stopPropagation();
            }
          };
        }
        function z(h) {
          return function () {
            U(h, { index: h.index - 1, vector: -1 });
          };
        }
        function Q(h) {
          return function () {
            U(h, { index: h.index + 1, vector: 1 });
          };
        }
        function re(h, v) {
          var g = null;
          v === h.slides.length && (w(), te(h)),
            t.each(h.anchors, function (c, M) {
              e(c.els).each(function (V, x) {
                e(x).index() === v && (g = M);
              });
            }),
            g != null && U(h, { index: g, immediate: !0 });
        }
        function j(h) {
          R(h);
          var v = h.config,
            g = v.timerMax;
          (g && h.timerCount++ > g) ||
            (h.timerId = window.setTimeout(function () {
              h.timerId == null || s || (Q(h)(), j(h));
            }, v.delay));
        }
        function R(h) {
          window.clearTimeout(h.timerId), (h.timerId = null);
        }
        function _(h) {
          return function (v, g) {
            g = g || {};
            var c = h.config;
            if (s && v.type === "setting") {
              if (g.select === "prev") return z(h)();
              if (g.select === "next") return Q(h)();
              if ((D(h), te(h), g.select == null)) return;
              re(h, g.select);
              return;
            }
            if (v.type === "swipe")
              return c.disableSwipe || Rt.env("editor")
                ? void 0
                : g.direction === "left"
                ? Q(h)()
                : g.direction === "right"
                ? z(h)()
                : void 0;
            if (h.nav.has(v.target).length) {
              var M = e(v.target).index();
              if (
                (v.type === "click" && U(h, { index: M }), v.type === "keydown")
              )
                switch (v.keyCode) {
                  case pt.ENTER:
                  case pt.SPACE: {
                    U(h, { index: M }), v.preventDefault();
                    break;
                  }
                  case pt.ARROW_LEFT:
                  case pt.ARROW_UP: {
                    N(h.nav, Math.max(M - 1, 0)), v.preventDefault();
                    break;
                  }
                  case pt.ARROW_RIGHT:
                  case pt.ARROW_DOWN: {
                    N(h.nav, Math.min(M + 1, h.pages)), v.preventDefault();
                    break;
                  }
                  case pt.HOME: {
                    N(h.nav, 0), v.preventDefault();
                    break;
                  }
                  case pt.END: {
                    N(h.nav, h.pages), v.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(h, v) {
          var g = h.children().eq(v).focus();
          h.children().not(g);
        }
        function U(h, v) {
          v = v || {};
          var g = h.config,
            c = h.anchors;
          h.previous = h.index;
          var M = v.index,
            V = {};
          M < 0
            ? ((M = c.length - 1),
              g.infinite &&
                ((V.x = -h.endX), (V.from = 0), (V.to = c[0].width)))
            : M >= c.length &&
              ((M = 0),
              g.infinite &&
                ((V.x = c[c.length - 1].width),
                (V.from = -c[c.length - 1].x),
                (V.to = V.from - V.x))),
            (h.index = M);
          var x = h.nav
            .children()
            .eq(M)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          h.nav
            .children()
            .not(x)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            g.hideArrows &&
              (h.index === c.length - 1 ? h.right.hide() : h.right.show(),
              h.index === 0 ? h.left.hide() : h.left.show());
          var Z = h.offsetX || 0,
            ue = (h.offsetX = -c[h.index].x),
            oe = { x: ue, opacity: 1, visibility: "" },
            b = e(c[h.index].els),
            B = e(c[h.previous] && c[h.previous].els),
            ee = h.slides.not(b),
            Y = g.animation,
            fe = g.easing,
            Te = Math.round(g.duration),
            Le = v.vector || (h.index > h.previous ? 1 : -1),
            p = "opacity " + Te + "ms " + fe,
            T = "transform " + Te + "ms " + fe;
          if (
            (b.find(t_).removeAttr("tabindex"),
            b.removeAttr("aria-hidden"),
            b.find("*").removeAttr("aria-hidden"),
            ee.find(t_).attr("tabindex", "-1"),
            ee.attr("aria-hidden", "true"),
            ee.find("*").attr("aria-hidden", "true"),
            s || (b.each(I.intro), ee.each(I.outro)),
            v.immediate && !y)
          ) {
            n(b).set(oe), O();
            return;
          }
          if (h.index === h.previous) return;
          if (
            (s || h.ariaLiveLabel.text(`Slide ${M + 1} of ${c.length}.`),
            Y === "cross")
          ) {
            var S = Math.round(Te - Te * g.crossOver),
              q = Math.round(Te - S);
            (p = "opacity " + S + "ms " + fe),
              n(B).set({ visibility: "" }).add(p).start({ opacity: 0 }),
              n(b)
                .set({ visibility: "", x: ue, opacity: 0, zIndex: h.depth++ })
                .add(p)
                .wait(q)
                .then({ opacity: 1 })
                .then(O);
            return;
          }
          if (Y === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(b)
                .set({ visibility: "", x: ue, opacity: 0, zIndex: h.depth++ })
                .add(p)
                .start({ opacity: 1 })
                .then(O);
            return;
          }
          if (Y === "over") {
            (oe = { x: h.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(b)
                .set({
                  visibility: "",
                  zIndex: h.depth++,
                  x: ue + c[h.index].width * Le,
                })
                .add(T)
                .start({ x: ue })
                .then(O);
            return;
          }
          g.infinite && V.x
            ? (n(h.slides.not(B))
                .set({ visibility: "", x: V.x })
                .add(T)
                .start({ x: ue }),
              n(B).set({ visibility: "", x: V.from }).add(T).start({ x: V.to }),
              (h.shifted = B))
            : (g.infinite &&
                h.shifted &&
                (n(h.shifted).set({ visibility: "", x: Z }),
                (h.shifted = null)),
              n(h.slides).set({ visibility: "" }).add(T).start({ x: ue }));
          function O() {
            (b = e(c[h.index].els)),
              (ee = h.slides.not(b)),
              Y !== "slide" && (oe.visibility = "hidden"),
              n(ee).set(oe);
          }
        }
        function H(h, v) {
          var g = e.data(v, u);
          if (g) {
            if (W(g)) return te(g);
            s && X(g) && te(g);
          }
        }
        function te(h) {
          var v = 1,
            g = 0,
            c = 0,
            M = 0,
            V = h.maskWidth,
            x = V - h.config.edge;
          x < 0 && (x = 0),
            (h.anchors = [{ els: [], x: 0, width: 0 }]),
            h.slides.each(function (ue, oe) {
              c - g > x &&
                (v++,
                (g += V),
                (h.anchors[v - 1] = { els: [], x: c, width: 0 })),
                (M = e(oe).outerWidth(!0)),
                (c += M),
                (h.anchors[v - 1].width += M),
                h.anchors[v - 1].els.push(oe);
              var b = ue + 1 + " of " + h.slides.length;
              e(oe).attr("aria-label", b), e(oe).attr("role", "group");
            }),
            (h.endX = c),
            s && (h.pages = null),
            h.nav.length && h.pages !== v && ((h.pages = v), ne(h));
          var Z = h.index;
          Z >= v && (Z = v - 1), U(h, { immediate: !0, index: Z });
        }
        function ne(h) {
          var v = [],
            g,
            c = h.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var M = 0, V = h.pages; M < V; M++)
            (g = e(d)),
              g
                .attr("aria-label", "Show slide " + (M + 1) + " of " + V)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              h.nav.hasClass("w-num") && g.text(M + 1),
              c != null && g.css({ "margin-left": c, "margin-right": c }),
              v.push(g);
          h.nav.empty().append(v);
        }
        function W(h) {
          var v = h.mask.width();
          return h.maskWidth !== v ? ((h.maskWidth = v), !0) : !1;
        }
        function X(h) {
          var v = 0;
          return (
            h.slides.each(function (g, c) {
              v += e(c).outerWidth(!0);
            }),
            h.slidesWidth !== v ? ((h.slidesWidth = v), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var o_ = l((Nz, i_) => {
    "use strict";
    var Lt = Ne(),
      nW = jt();
    Lt.define(
      "tabs",
      (i_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          s = Lt.env,
          a = s.safari,
          u = s(),
          d = "data-w-tab",
          E = "data-w-pane",
          f = ".w-tabs",
          I = "w--current",
          m = "w--tab-active",
          y = nW.triggers,
          w = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (w = !0), C(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(f)), i.length && (i.each(L), A());
          });
        function C() {
          (o = u && Lt.env("design")),
            (i = n.find(f)),
            i.length &&
              (i.each(D), Lt.env("preview") && !w && i.each(L), A(), P());
        }
        function A() {
          Lt.redraw.off(t.redraw);
        }
        function P() {
          Lt.redraw.on(t.redraw);
        }
        function L(j, R) {
          var _ = e.data(R, f);
          _ &&
            (_.links && _.links.each(y.reset),
            _.panes && _.panes.each(y.reset));
        }
        function D(j, R) {
          var _ = f.substr(1) + "-" + j,
            N = e(R),
            U = e.data(R, f);
          if (
            (U || (U = e.data(R, f, { el: N, config: {} })),
            (U.current = null),
            (U.tabIdentifier = _ + "-" + d),
            (U.paneIdentifier = _ + "-" + E),
            (U.menu = N.children(".w-tab-menu")),
            (U.links = U.menu.children(".w-tab-link")),
            (U.content = N.children(".w-tab-content")),
            (U.panes = U.content.children(".w-tab-pane")),
            U.el.off(f),
            U.links.off(f),
            U.menu.attr("role", "tablist"),
            U.links.attr("tabindex", "-1"),
            G(U),
            !o)
          ) {
            U.links.on("click" + f, K(U)), U.links.on("keydown" + f, z(U));
            var H = U.links.filter("." + I),
              te = H.attr(d);
            te && Q(U, { tab: te, immediate: !0 });
          }
        }
        function G(j) {
          var R = {};
          R.easing = j.el.attr("data-easing") || "ease";
          var _ = parseInt(j.el.attr("data-duration-in"), 10);
          _ = R.intro = _ === _ ? _ : 0;
          var N = parseInt(j.el.attr("data-duration-out"), 10);
          (N = R.outro = N === N ? N : 0),
            (R.immediate = !_ && !N),
            (j.config = R);
        }
        function F(j) {
          var R = j.current;
          return Array.prototype.findIndex.call(
            j.links,
            (_) => _.getAttribute(d) === R,
            null
          );
        }
        function K(j) {
          return function (R) {
            R.preventDefault();
            var _ = R.currentTarget.getAttribute(d);
            _ && Q(j, { tab: _ });
          };
        }
        function z(j) {
          return function (R) {
            var _ = F(j),
              N = R.key,
              U = {
                ArrowLeft: _ - 1,
                ArrowUp: _ - 1,
                ArrowRight: _ + 1,
                ArrowDown: _ + 1,
                End: j.links.length - 1,
                Home: 0,
              };
            if (N in U) {
              R.preventDefault();
              var H = U[N];
              H === -1 && (H = j.links.length - 1),
                H === j.links.length && (H = 0);
              var te = j.links[H],
                ne = te.getAttribute(d);
              ne && Q(j, { tab: ne });
            }
          };
        }
        function Q(j, R) {
          R = R || {};
          var _ = j.config,
            N = _.easing,
            U = R.tab;
          if (U !== j.current) {
            j.current = U;
            var H;
            j.links.each(function (g, c) {
              var M = e(c);
              if (R.immediate || _.immediate) {
                var V = j.panes[g];
                c.id || (c.id = j.tabIdentifier + "-" + g),
                  V.id || (V.id = j.paneIdentifier + "-" + g),
                  (c.href = "#" + V.id),
                  c.setAttribute("role", "tab"),
                  c.setAttribute("aria-controls", V.id),
                  c.setAttribute("aria-selected", "false"),
                  V.setAttribute("role", "tabpanel"),
                  V.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(d) === U
                ? ((H = c),
                  M.addClass(I)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : M.hasClass(I) &&
                  M.removeClass(I)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var te = [],
              ne = [];
            j.panes.each(function (g, c) {
              var M = e(c);
              c.getAttribute(d) === U
                ? te.push(c)
                : M.hasClass(m) && ne.push(c);
            });
            var W = e(te),
              X = e(ne);
            if (R.immediate || _.immediate) {
              W.addClass(m).each(y.intro),
                X.removeClass(m),
                w || Lt.redraw.up();
              return;
            } else {
              var h = window.scrollX,
                v = window.scrollY;
              H.focus(), window.scrollTo(h, v);
            }
            X.length && _.outro
              ? (X.each(y.outro),
                r(X)
                  .add("opacity " + _.outro + "ms " + N, { fallback: a })
                  .start({ opacity: 0 })
                  .then(() => re(_, X, W)))
              : re(_, X, W);
          }
        }
        function re(j, R, _) {
          if (
            (R.removeClass(m).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            _.addClass(m).each(y.intro),
            Lt.redraw.up(),
            !j.intro)
          )
            return r(_).set({ opacity: 1 });
          r(_)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + j.intro + "ms " + j.easing, { fallback: a })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Gs();
  Us();
  Js();
  tu();
  nu();
  au();
  jt();
  Fb();
  Gb();
  Vb();
  Hb();
  jb();
  Yb();
  Zb();
  e_();
  n_();
  o_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2de9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2de9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2de9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2de9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-18" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2ddc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2ddc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1526670506275,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2df4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2df4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-13" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dfe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dfe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1526670522329,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2e00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2dde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2df4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|5601e629-8ba2-3759-0e94-6e53d39e2df4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1526219517081,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-26" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7230",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7230",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1557355647693,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7232",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7232",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7232",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7232",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf723d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf723d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf723d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf723d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7248",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7248",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-31",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7248",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|f0855e7a-2cf6-ac1e-eedc-80d887bf7248",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557355647693,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-34" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28788",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28788",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1557357098857,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e2878a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e2878a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-35",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e2878a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e2878a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28795",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28795",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28795",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e28795",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-40": {
      id: "e-40",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-42" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1557357098857,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-44": {
      id: "e-44",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-43",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|18d1c582-6bcd-8333-9848-b885c9e287c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1557357098857,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573052330635,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|62363c91-e109-68e7-7bfa-1ec381f9dc11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|62363c91-e109-68e7-7bfa-1ec381f9dc11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573052671646,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|ad02921c-8d7d-43b6-e1f2-6f089d391c76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|ad02921c-8d7d-43b6-e1f2-6f089d391c76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573052804694,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|a3fdc283-bcb3-b1e6-7f8b-622d3d8c4c2c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|a3fdc283-bcb3-b1e6-7f8b-622d3d8c4c2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573052812421,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-62" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|90ec79ed-34e1-a097-4779-e461c652cfd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|90ec79ed-34e1-a097-4779-e461c652cfd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054226545,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-64" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|b8a8719b-0cbf-9686-2aff-52bfe0b1e49f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|b8a8719b-0cbf-9686-2aff-52bfe0b1e49f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054246625,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|fa7960d2-4853-4b93-e159-9abb3c104e1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|fa7960d2-4853-4b93-e159-9abb3c104e1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054307689,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|67ae9745-e06f-1191-1cc9-fda94432f277",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|67ae9745-e06f-1191-1cc9-fda94432f277",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054343634,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|f3854eb3-3a2f-a9e2-6988-c4e56c80182d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|f3854eb3-3a2f-a9e2-6988-c4e56c80182d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054371096,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-72" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|93def793-774d-25ae-2b5a-d11cbde218f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|93def793-774d-25ae-2b5a-d11cbde218f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054380936,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|a5f3c590-3802-32ca-a103-00cf1fbde2e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|a5f3c590-3802-32ca-a103-00cf1fbde2e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054399767,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56db2a4680968|eb4f0c65-ebe7-3075-7b4f-905fed559fee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56db2a4680968|eb4f0c65-ebe7-3075-7b4f-905fed559fee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573054406983,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "813c7e26-e3ef-4da7-b6ab-567eb8e98671",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "813c7e26-e3ef-4da7-b6ab-567eb8e98671",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054443232,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "14ab1e93-3674-c8f0-e463-b5219efdc7d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "14ab1e93-3674-c8f0-e463-b5219efdc7d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054449872,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-82" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c476d6d3-03e2-aec8-8d4d-bf37c1adfb3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c476d6d3-03e2-aec8-8d4d-bf37c1adfb3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054459607,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-84" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2460389d-6fe5-e4e3-a442-bf10e92b4093",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2460389d-6fe5-e4e3-a442-bf10e92b4093",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054475719,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1f562a64-8a3e-0090-66ba-0c862c020ceb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1f562a64-8a3e-0090-66ba-0c862c020ceb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054483800,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-88" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "0367e162-0d00-8135-3e57-d2236a00869e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "0367e162-0d00-8135-3e57-d2236a00869e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054497928,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573054580127,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-98" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|ddb16da7-c787-f48b-3cba-9e5965d3b516",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|ddb16da7-c787-f48b-3cba-9e5965d3b516",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054984986,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-100" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|4680092d-4d33-bd9b-46a1-b17c1e9a2d33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|4680092d-4d33-bd9b-46a1-b17c1e9a2d33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573054993906,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|7abbacc1-75e8-ca81-76de-cd1fa1bb7855",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|7abbacc1-75e8-ca81-76de-cd1fa1bb7855",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573055002514,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|484ddda0-fc14-bc2f-9b5b-d6128da21ce9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|484ddda0-fc14-bc2f-9b5b-d6128da21ce9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573055151905,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "978ae0e7-df87-a21f-3d29-e365e9d21bea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "978ae0e7-df87-a21f-3d29-e365e9d21bea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573055339079,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "863b291a-1001-1a4b-64ec-35bf57e50979",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "863b291a-1001-1a4b-64ec-35bf57e50979",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573055351079,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e952e18f-24d9-97b4-1843-1f0760ff777f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e952e18f-24d9-97b4-1843-1f0760ff777f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573055359872,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573055437832,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f358fd83-5d3a-a40a-c00d-fd50ab370dff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f358fd83-5d3a-a40a-c00d-fd50ab370dff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573055574119,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573055922468,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|ab60fa99-6cfe-d591-9848-e1a0eef81258",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|ab60fa99-6cfe-d591-9848-e1a0eef81258",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573057231189,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|45140f0e-61fe-6575-cf62-d9fc9c12d331",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|45140f0e-61fe-6575-cf62-d9fc9c12d331",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573057237669,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|d660662a-f6d7-4a97-17b9-1be5a4ebc869",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|d660662a-f6d7-4a97-17b9-1be5a4ebc869",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573057248716,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|08120661-cbd1-6648-2c1b-5f0cfcac8530",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|08120661-cbd1-6648-2c1b-5f0cfcac8530",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573057256892,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|9f0b3c85-3a75-7b16-58fb-4fecb34f2c40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|9f0b3c85-3a75-7b16-58fb-4fecb34f2c40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057402115,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|66955088-98c6-9e6e-b4ab-c6ae6496f132",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|66955088-98c6-9e6e-b4ab-c6ae6496f132",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057411683,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|06c0630a-8ec6-7049-9d6a-f01b8a86ac9a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|06c0630a-8ec6-7049-9d6a-f01b8a86ac9a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057426571,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|2a198a27-09a6-4fba-2bfe-3db322c60df4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|2a198a27-09a6-4fba-2bfe-3db322c60df4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057501667,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|c27b46d8-0bf9-31d3-1b19-b43e94a3eb65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|c27b46d8-0bf9-31d3-1b19-b43e94a3eb65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057511019,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|59578236-cb7e-e2df-f094-1337e83d41e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|59578236-cb7e-e2df-f094-1337e83d41e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057524962,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977|d021e6a1-7124-df26-8d86-657da6297350",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977|d021e6a1-7124-df26-8d86-657da6297350",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573057536931,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573148832809,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|ec1a27b5-0d31-fce2-cb97-78400f498665",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|ec1a27b5-0d31-fce2-cb97-78400f498665",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573149656903,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|0c4208df-5551-10aa-7f34-20cef5714f6b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|0c4208df-5551-10aa-7f34-20cef5714f6b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573149663924,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|5b5de575-19da-c75e-339e-8bbd2b9b8176",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|5b5de575-19da-c75e-339e-8bbd2b9b8176",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573149673940,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|2a26fcc5-924b-1fe4-5d72-0482f784fde7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|2a26fcc5-924b-1fe4-5d72-0482f784fde7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573149716012,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|77664baa-10fd-53a3-921e-e22cfc10e08a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|77664baa-10fd-53a3-921e-e22cfc10e08a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573149724964,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|3ccd0d49-e5e5-1142-5abb-2e9693652d91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|3ccd0d49-e5e5-1142-5abb-2e9693652d91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573149732076,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|bc4beceb-9274-b07d-e43a-31901ff238ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|bc4beceb-9274-b07d-e43a-31901ff238ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573149763155,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573157244221,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|430d373f-9ca5-fb12-b1fe-e924160e345e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|430d373f-9ca5-fb12-b1fe-e924160e345e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157735839,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|4105c793-812d-92fc-1da3-bed324bbcfda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|4105c793-812d-92fc-1da3-bed324bbcfda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157743228,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|ed884a4b-f126-d755-3183-049acc55ef06",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|ed884a4b-f126-d755-3183-049acc55ef06",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157752196,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a4857507-8348-8e6e-c052-d65f8d470fea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a4857507-8348-8e6e-c052-d65f8d470fea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573157770006,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "adcafe39-c0dc-65f9-a708-54df9e595dea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "adcafe39-c0dc-65f9-a708-54df9e595dea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573157834451,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-176" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|833b5d0d-786f-490d-b435-da16b0a61d9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|833b5d0d-786f-490d-b435-da16b0a61d9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157961533,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|d7e75b4c-1a37-3925-dd9a-d67b2022a70f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|d7e75b4c-1a37-3925-dd9a-d67b2022a70f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157976930,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|1ba67c0a-56d6-a2d0-8c7e-ca866a9acc70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|1ba67c0a-56d6-a2d0-8c7e-ca866a9acc70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157986841,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|b69fd2f9-ad8c-b0ec-4012-2ca87ce2999c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|b69fd2f9-ad8c-b0ec-4012-2ca87ce2999c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573157994249,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|d120306d-eb26-0306-f44c-edab4d5aa0b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|d120306d-eb26-0306-f44c-edab4d5aa0b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158004425,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|de390da8-197f-614a-d87d-a8a36fa8243e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|de390da8-197f-614a-d87d-a8a36fa8243e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158013217,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "3fe1c0d5-0305-e545-8fb0-95d5f7751027",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "3fe1c0d5-0305-e545-8fb0-95d5f7751027",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158028553,
    },
    "e-189": {
      id: "e-189",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-190" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "d61ed1fd-ffef-e7b8-714d-0659a913bf1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "d61ed1fd-ffef-e7b8-714d-0659a913bf1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573158039656,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974|028987df-193b-d66c-82b3-c5a6d2636785",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974|028987df-193b-d66c-82b3-c5a6d2636785",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158092114,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-194",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573158109569,
    },
    "e-195": {
      id: "e-195",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-196" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|a6561775-a336-6b4f-d948-9efe2b7a044b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|a6561775-a336-6b4f-d948-9efe2b7a044b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158448772,
    },
    "e-197": {
      id: "e-197",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-198" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158457830,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-200" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158470485,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-202" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|aafeb400-24b5-019f-b74c-0576de513cd8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|aafeb400-24b5-019f-b74c-0576de513cd8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158481956,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-204" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|f68b768c-393b-88eb-723a-95e9d0fd18b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|f68b768c-393b-88eb-723a-95e9d0fd18b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158492140,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-206" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|fde83c7c-aeb2-0c20-75d3-3a26eb2a047f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|fde83c7c-aeb2-0c20-75d3-3a26eb2a047f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158514927,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-208" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|2ea2f8a5-fa0f-0180-d5f9-d1f014f1d0c8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|2ea2f8a5-fa0f-0180-d5f9-d1f014f1d0c8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158523661,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-210" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978|c396440f-a3eb-099d-9c83-5eaa023350a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978|c396440f-a3eb-099d-9c83-5eaa023350a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158541724,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573158568003,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|cd057251-af88-225a-cd45-6e3089ed2ac0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|cd057251-af88-225a-cd45-6e3089ed2ac0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158737133,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|81a4fa88-9e62-b288-fa4c-636f61ea8708",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|81a4fa88-9e62-b288-fa4c-636f61ea8708",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158744770,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-218" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|b9d8c39a-ac5a-0eb2-9fcb-b747f1d7ae6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|b9d8c39a-ac5a-0eb2-9fcb-b747f1d7ae6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158752778,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|ffce9569-0461-5da7-1efd-c2b0d98d9ab7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|ffce9569-0461-5da7-1efd-c2b0d98d9ab7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573158763487,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158785241,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158793313,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|aafeb400-24b5-019f-b74c-0576de513cd8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|aafeb400-24b5-019f-b74c-0576de513cd8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158802630,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|f68b768c-393b-88eb-723a-95e9d0fd18b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|f68b768c-393b-88eb-723a-95e9d0fd18b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158811409,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|dc533af1-cfc2-2c18-be8b-4d3f1dae64f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|dc533af1-cfc2-2c18-be8b-4d3f1dae64f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573158834364,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971|1739aeb6-5f7a-afeb-0ac7-20e454af44d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971|1739aeb6-5f7a-afeb-0ac7-20e454af44d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573158846073,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573158882321,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|dc533af1-cfc2-2c18-be8b-4d3f1dae64f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|dc533af1-cfc2-2c18-be8b-4d3f1dae64f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159002800,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|1739aeb6-5f7a-afeb-0ac7-20e454af44d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|1739aeb6-5f7a-afeb-0ac7-20e454af44d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573159013735,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|9752c9c6-73ac-ce12-3496-cd21dd25f3cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159028167,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|665d01ac-8d33-32e7-b0b9-8ae3115d985b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159035439,
    },
    "e-245": {
      id: "e-245",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-246" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|aafeb400-24b5-019f-b74c-0576de513cd8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|aafeb400-24b5-019f-b74c-0576de513cd8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159043584,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|f68b768c-393b-88eb-723a-95e9d0fd18b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|f68b768c-393b-88eb-723a-95e9d0fd18b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159052839,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-250",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573159250256,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|473aabae-c2f1-b15b-c62d-b8e3cd717b9c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|473aabae-c2f1-b15b-c62d-b8e3cd717b9c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573159372780,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|b71f6a7b-3d99-4e51-375c-0477c54f9084",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|b71f6a7b-3d99-4e51-375c-0477c54f9084",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159383676,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|8f049a76-7602-acee-0121-cacb86ff59f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|8f049a76-7602-acee-0121-cacb86ff59f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159390340,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|14273cb0-442f-64ba-d719-e6d0407187f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|14273cb0-442f-64ba-d719-e6d0407187f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159407362,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|ef22f897-eaad-90ff-10ec-57db539f4a57",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|ef22f897-eaad-90ff-10ec-57db539f4a57",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159416595,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|dff5d5c4-229b-2b53-531a-b85d7cc4bf3b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|dff5d5c4-229b-2b53-531a-b85d7cc4bf3b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159431944,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|cfbbe133-124a-b47d-45af-e39ee52decbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|cfbbe133-124a-b47d-45af-e39ee52decbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159440444,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|fa917642-e91b-9be6-a3c4-7fc6ac29d93c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|fa917642-e91b-9be6-a3c4-7fc6ac29d93c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573159460020,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|93bea057-6d73-bbe9-51e4-5a6548066e2c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|93bea057-6d73-bbe9-51e4-5a6548066e2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573159466018,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573159499932,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|7381da49-5689-b198-78e6-e74e98033a4e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|7381da49-5689-b198-78e6-e74e98033a4e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159751355,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|4302235f-3949-ef4b-d747-775683b54765",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|4302235f-3949-ef4b-d747-775683b54765",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159757817,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-280" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|0490f696-f0a5-779e-d33a-c6f34f5b2112",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|0490f696-f0a5-779e-d33a-c6f34f5b2112",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159767711,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-282" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|5f299926-c0c7-9866-8a9b-a25d9cd27e70",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|5f299926-c0c7-9866-8a9b-a25d9cd27e70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159776264,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|9d19f533-1786-150d-18a5-0bdff6d6b12c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|9d19f533-1786-150d-18a5-0bdff6d6b12c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159788018,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d55e868097d|5284ff27-3160-767a-4697-c699ca727fda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d55e868097d|5284ff27-3160-767a-4697-c699ca727fda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573159795584,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dff37680980",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dff37680980",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573159827189,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dff37680980",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dff37680980",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573160673601,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dff37680980",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dff37680980",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573160673609,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161103200,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161103208,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161127277,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161127306,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-296",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161140045,
    },
    "e-296": {
      id: "e-296",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6053680977",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6053680977",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161140074,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161251396,
    },
    "e-298": {
      id: "e-298",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161251426,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-300",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161268604,
    },
    "e-300": {
      id: "e-300",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-299",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d3824680974",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d3824680974",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161268633,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-302",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161431339,
    },
    "e-302": {
      id: "e-302",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-301",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161431345,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-304",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161444197,
    },
    "e-304": {
      id: "e-304",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-303",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d8dc5680978",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d8dc5680978",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161444203,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-306",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161466306,
    },
    "e-306": {
      id: "e-306",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-305",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161466335,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-308",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161483137,
    },
    "e-308": {
      id: "e-308",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-307",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56df786680971",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56df786680971",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161483167,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161529371,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161529403,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-312",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161542873,
    },
    "e-312": {
      id: "e-312",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-311",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161542902,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-314",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161567049,
    },
    "e-314": {
      id: "e-314",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-313",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161567054,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-316",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161582452,
    },
    "e-316": {
      id: "e-316",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-315",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573161582482,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573482186956,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|ddb16da7-c787-f48b-3cba-9e5965d3b516",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|ddb16da7-c787-f48b-3cba-9e5965d3b516",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573482445467,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|4680092d-4d33-bd9b-46a1-b17c1e9a2d33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|4680092d-4d33-bd9b-46a1-b17c1e9a2d33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573482452564,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|7abbacc1-75e8-ca81-76de-cd1fa1bb7855",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|7abbacc1-75e8-ca81-76de-cd1fa1bb7855",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573482461243,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-326",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483205921,
    },
    "e-326": {
      id: "e-326",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-325",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483205928,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-328",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483298441,
    },
    "e-328": {
      id: "e-328",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-327",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483298448,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-330",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483394732,
    },
    "e-330": {
      id: "e-330",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-329",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483394764,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-332",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|154c212a-d02c-7631-2bc3-db4e822ffba5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|154c212a-d02c-7631-2bc3-db4e822ffba5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483449047,
    },
    "e-332": {
      id: "e-332",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-331",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|154c212a-d02c-7631-2bc3-db4e822ffba5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|154c212a-d02c-7631-2bc3-db4e822ffba5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573483449053,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-334",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|b74f4f22-a314-7d87-8236-8bb146af8e07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|b74f4f22-a314-7d87-8236-8bb146af8e07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573484942274,
    },
    "e-334": {
      id: "e-334",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-333",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|b74f4f22-a314-7d87-8236-8bb146af8e07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|b74f4f22-a314-7d87-8236-8bb146af8e07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573484942282,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-336",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|96312612-54d0-99be-2f20-b5cfd0b8b788",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|96312612-54d0-99be-2f20-b5cfd0b8b788",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573484956288,
    },
    "e-336": {
      id: "e-336",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-335",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|96312612-54d0-99be-2f20-b5cfd0b8b788",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|96312612-54d0-99be-2f20-b5cfd0b8b788",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573484956319,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|7dccee6d-fe4f-ca78-48d8-83644f134d98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|7dccee6d-fe4f-ca78-48d8-83644f134d98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573485003064,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|0d4358e7-2220-7858-3748-cc06950f3ecf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|0d4358e7-2220-7858-3748-cc06950f3ecf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485024568,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-342" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|d1b8442d-f64c-e754-4ab1-393c4be00eae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|d1b8442d-f64c-e754-4ab1-393c4be00eae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485031095,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|05a9f23f-29f9-81e1-87b6-7dcaa8dd1b5c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|05a9f23f-29f9-81e1-87b6-7dcaa8dd1b5c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485048463,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|57c22dad-66a8-5cd4-544a-f65d927a3ff8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485065374,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|630a9799-306d-fea7-efa9-766e22c71237",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485080054,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|9ec977e2-8f63-245d-a42f-976781918f0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485092590,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|ee65dce8-0eff-f7ed-fe8f-abc20d9a87f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|ee65dce8-0eff-f7ed-fe8f-abc20d9a87f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485125454,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|59effb77-8357-9b13-36bf-196e3050d316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|59effb77-8357-9b13-36bf-196e3050d316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485132014,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|914fb3fc-24b1-844b-08a4-d1c2f35474ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|914fb3fc-24b1-844b-08a4-d1c2f35474ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485141358,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|648b7866-c0ae-5345-3ff3-4fe51cb26fd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|648b7866-c0ae-5345-3ff3-4fe51cb26fd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485153950,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|943610ba-1fda-2d53-f2b9-4b385c97528f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|943610ba-1fda-2d53-f2b9-4b385c97528f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485166182,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|05a4545f-1e0e-08af-e81b-45fc6fffe16e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|05a4545f-1e0e-08af-e81b-45fc6fffe16e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485174462,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|df15dd6e-14f4-cdca-05f2-b9cef83dd076",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|df15dd6e-14f4-cdca-05f2-b9cef83dd076",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485245592,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|7710ce3c-955f-d681-f829-6426099b8791",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|7710ce3c-955f-d681-f829-6426099b8791",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485258205,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-368" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|2154bce6-ea29-79bc-a00c-0d270a5dbd35",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|2154bce6-ea29-79bc-a00c-0d270a5dbd35",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485268453,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|edc96d12-124e-c924-0a3b-362345cf3a24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|edc96d12-124e-c924-0a3b-362345cf3a24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485277950,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|bce4c0f7-3595-d7e4-ce17-b4838112ddb8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|bce4c0f7-3595-d7e4-ce17-b4838112ddb8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485298315,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|aea356a0-30fd-5bd9-419b-1670808c0b30",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|aea356a0-30fd-5bd9-419b-1670808c0b30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485327720,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|ae8f4d36-c0ec-75c7-2b29-13dd64c72bcf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|ae8f4d36-c0ec-75c7-2b29-13dd64c72bcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485336709,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|f6d9ffd5-adba-b47a-4bb1-6569837051fb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|f6d9ffd5-adba-b47a-4bb1-6569837051fb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485346364,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|b9983c42-563b-1c58-792e-c64165f74b5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|b9983c42-563b-1c58-792e-c64165f74b5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1573485403759,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-382",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573485438435,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|2f9c660a-d14c-cf8d-fd9d-3c8ab95a3d05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|2f9c660a-d14c-cf8d-fd9d-3c8ab95a3d05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485583643,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-386" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|3fc0b10a-0eec-00a3-b8d3-842dce8b3fd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|3fc0b10a-0eec-00a3-b8d3-842dce8b3fd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485595698,
    },
    "e-387": {
      id: "e-387",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-388" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|ea1fff57-def9-a7b8-6582-167d09dbb2ab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|ea1fff57-def9-a7b8-6582-167d09dbb2ab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485605586,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-390" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|eb287bf6-95c3-2688-4b82-8645864e787d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|eb287bf6-95c3-2688-4b82-8645864e787d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485615802,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|4712fa1a-8fb1-d282-51cb-be8a85063336",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|4712fa1a-8fb1-d282-51cb-be8a85063336",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573485636753,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-394" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dfeac68096c|779b6ad3-cf98-e23c-1ff9-c5d58a6c44a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dfeac68096c|779b6ad3-cf98-e23c-1ff9-c5d58a6c44a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573485650641,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-396",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573485690720,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-903" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|db14594c-1faa-fc9d-90a3-d08c68046fdd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|db14594c-1faa-fc9d-90a3-d08c68046fdd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485967859,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-400" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|b5f81a23-6cf9-42c7-2d97-743e193f0d81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|b5f81a23-6cf9-42c7-2d97-743e193f0d81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485974545,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|45297786-771c-950c-8159-66cce6f00b6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|45297786-771c-950c-8159-66cce6f00b6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485983439,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|96fe43f9-967f-5c50-fe3e-fe30c6732686",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|96fe43f9-967f-5c50-fe3e-fe30c6732686",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573485992577,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|e9e0c6da-8194-8b2c-d401-ed345c7146ff",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|e9e0c6da-8194-8b2c-d401-ed345c7146ff",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573486004670,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|9f2c262c-360d-68f0-fdb7-977008bdae44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|9f2c262c-360d-68f0-fdb7-977008bdae44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573486019710,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|3fc0b10a-0eec-00a3-b8d3-842dce8b3fd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|3fc0b10a-0eec-00a3-b8d3-842dce8b3fd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573486049919,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|ea1fff57-def9-a7b8-6582-167d09dbb2ab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|ea1fff57-def9-a7b8-6582-167d09dbb2ab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573486056142,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4abd68097f|eb287bf6-95c3-2688-4b82-8645864e787d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4abd68097f|eb287bf6-95c3-2688-4b82-8645864e787d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573486066006,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-416",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56de6d3680976",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56de6d3680976",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573486134838,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-418" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56de6d3680976|0718aa9e-7ac6-1bad-4e63-f54ef0b9b4c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56de6d3680976|0718aa9e-7ac6-1bad-4e63-f54ef0b9b4c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573486225644,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56de6d3680976|5c15c697-9add-d56e-3d3d-3b1297014339",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56de6d3680976|5c15c697-9add-d56e-3d3d-3b1297014339",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573486234470,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56de6d3680976|7ae48565-807b-d1fe-10d5-227b013408ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56de6d3680976|7ae48565-807b-d1fe-10d5-227b013408ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573486245784,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-424" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56de6d3680976|59cdbcea-7a58-cc95-25bf-ec55c4644aa8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56de6d3680976|59cdbcea-7a58-cc95-25bf-ec55c4644aa8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573486257014,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-426",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d5685680984",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d5685680984",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573486305105,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-428",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573487814953,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-430" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|e29d3da3-b44c-0d7b-0a3a-0fe3dbfef024",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|e29d3da3-b44c-0d7b-0a3a-0fe3dbfef024",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573487856474,
    },
    "e-431": {
      id: "e-431",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-432" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|2cd65fe0-3ede-efc4-29cb-b2b3f820b22a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|2cd65fe0-3ede-efc4-29cb-b2b3f820b22a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573487862824,
    },
    "e-433": {
      id: "e-433",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-434" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|67edf7c4-4236-b881-8282-6170685784d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|67edf7c4-4236-b881-8282-6170685784d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573487874902,
    },
    "e-475": {
      id: "e-475",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-476",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc9e2680979",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc9e2680979",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573488205605,
    },
    "e-477": {
      id: "e-477",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-478" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc9e2680979|484ddda0-fc14-bc2f-9b5b-d6128da21ce9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc9e2680979|484ddda0-fc14-bc2f-9b5b-d6128da21ce9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573488246355,
    },
    "e-479": {
      id: "e-479",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-480" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc9e2680979|1c0909c9-b9d9-51bd-fdf2-3f24425e1bb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc9e2680979|1c0909c9-b9d9-51bd-fdf2-3f24425e1bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573488259787,
    },
    "e-481": {
      id: "e-481",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-482" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc9e2680979|27523f0f-5e71-5def-4f2a-e0c202601a95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc9e2680979|27523f0f-5e71-5def-4f2a-e0c202601a95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573488270403,
    },
    "e-491": {
      id: "e-491",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-492",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573488356635,
    },
    "e-493": {
      id: "e-493",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-494" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573492866745,
    },
    "e-495": {
      id: "e-495",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-496",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573492907796,
    },
    "e-496": {
      id: "e-496",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-495",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|de748023-cc91-5ea5-9955-11816e81479e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573492907805,
    },
    "e-497": {
      id: "e-497",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-498",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|bb62e395-1202-fa48-f099-efab7f73b150",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|bb62e395-1202-fa48-f099-efab7f73b150",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573492931597,
    },
    "e-498": {
      id: "e-498",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-497",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|bb62e395-1202-fa48-f099-efab7f73b150",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|bb62e395-1202-fa48-f099-efab7f73b150",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573492931606,
    },
    "e-499": {
      id: "e-499",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-500" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573492978091,
    },
    "e-501": {
      id: "e-501",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-502",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493544640,
    },
    "e-502": {
      id: "e-502",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-501",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|b4499df9-2713-f9ad-0882-0d3229a6ef00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493544675,
    },
    "e-503": {
      id: "e-503",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-504",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|6a463eb1-2027-cfbf-9ed5-d0b50dd3ec5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|6a463eb1-2027-cfbf-9ed5-d0b50dd3ec5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1573493566742,
    },
    "e-504": {
      id: "e-504",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-503",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|6a463eb1-2027-cfbf-9ed5-d0b50dd3ec5a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|6a463eb1-2027-cfbf-9ed5-d0b50dd3ec5a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493566752,
    },
    "e-505": {
      id: "e-505",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-506",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|2833964b-556f-5de1-6e03-be0f27859e0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|2833964b-556f-5de1-6e03-be0f27859e0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493588270,
    },
    "e-506": {
      id: "e-506",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-505",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|2833964b-556f-5de1-6e03-be0f27859e0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|2833964b-556f-5de1-6e03-be0f27859e0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493588305,
    },
    "e-507": {
      id: "e-507",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-508" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573493620934,
    },
    "e-509": {
      id: "e-509",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-510",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493650870,
    },
    "e-510": {
      id: "e-510",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-509",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|c893ec3f-31d0-f5d7-ee4e-0cfcbd1156f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573493650904,
    },
    "e-511": {
      id: "e-511",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-512" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494040580,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-514",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494076241,
    },
    "e-514": {
      id: "e-514",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-513",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|d375232d-dd3f-b2fa-899e-5565aa7710a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494076274,
    },
    "e-515": {
      id: "e-515",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-516",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|2d8abe17-4317-0dd9-2378-93a7227e16cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|2d8abe17-4317-0dd9-2378-93a7227e16cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494102193,
    },
    "e-516": {
      id: "e-516",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-515",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|2d8abe17-4317-0dd9-2378-93a7227e16cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|2d8abe17-4317-0dd9-2378-93a7227e16cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494102202,
    },
    "e-517": {
      id: "e-517",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-518",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e540130-968d-b41a-90fb-30dd7cdccf3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e540130-968d-b41a-90fb-30dd7cdccf3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494121136,
    },
    "e-518": {
      id: "e-518",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-517",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e540130-968d-b41a-90fb-30dd7cdccf3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e540130-968d-b41a-90fb-30dd7cdccf3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494121174,
    },
    "e-519": {
      id: "e-519",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-520" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494134665,
    },
    "e-521": {
      id: "e-521",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-522",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494157208,
    },
    "e-522": {
      id: "e-522",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-521",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|654f5332-e28b-1eee-014d-4d8b89af331c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494157242,
    },
    "e-523": {
      id: "e-523",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-524",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|f4531b8f-33c8-df3f-e307-0fe290b55b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|f4531b8f-33c8-df3f-e307-0fe290b55b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494177105,
    },
    "e-524": {
      id: "e-524",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-523",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|f4531b8f-33c8-df3f-e307-0fe290b55b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|f4531b8f-33c8-df3f-e307-0fe290b55b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494177140,
    },
    "e-525": {
      id: "e-525",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-526" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494189137,
    },
    "e-527": {
      id: "e-527",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-528",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494211600,
    },
    "e-528": {
      id: "e-528",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-527",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|49ac1c6a-7b6e-593b-f4ca-76c2f8fb1ab6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494211613,
    },
    "e-529": {
      id: "e-529",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-530",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d882868096a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d882868096a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494374563,
    },
    "e-531": {
      id: "e-531",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-532" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d882868096a|991808c7-e51f-0ff4-7e7c-5800ce44d98c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d882868096a|991808c7-e51f-0ff4-7e7c-5800ce44d98c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494441730,
    },
    "e-533": {
      id: "e-533",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-534" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d882868096a|405ea3c4-c11b-8169-6aa8-da870f168d80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d882868096a|405ea3c4-c11b-8169-6aa8-da870f168d80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494450045,
    },
    "e-535": {
      id: "e-535",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-536" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d882868096a|3f5d2eaa-4a15-b157-55ad-bdcfc02c9c4f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d882868096a|3f5d2eaa-4a15-b157-55ad-bdcfc02c9c4f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573494463998,
    },
    "e-537": {
      id: "e-537",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-538",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573494805592,
    },
    "e-545": {
      id: "e-545",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-546",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495097058,
    },
    "e-547": {
      id: "e-547",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-548" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0718aa9e-7ac6-1bad-4e63-f54ef0b9b4c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0718aa9e-7ac6-1bad-4e63-f54ef0b9b4c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495148323,
    },
    "e-549": {
      id: "e-549",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-550" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|5c15c697-9add-d56e-3d3d-3b1297014339",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|5c15c697-9add-d56e-3d3d-3b1297014339",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495158812,
    },
    "e-551": {
      id: "e-551",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-552" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|7ae48565-807b-d1fe-10d5-227b013408ae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|7ae48565-807b-d1fe-10d5-227b013408ae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495170938,
    },
    "e-553": {
      id: "e-553",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-554" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|59cdbcea-7a58-cc95-25bf-ec55c4644aa8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|59cdbcea-7a58-cc95-25bf-ec55c4644aa8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495184475,
    },
    "e-555": {
      id: "e-555",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-556" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|30aa43d3-185e-8712-3c52-9ed57594708e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|30aa43d3-185e-8712-3c52-9ed57594708e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495199546,
    },
    "e-557": {
      id: "e-557",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-558" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|a9c937de-648e-5282-4ca8-79d03122f9f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|a9c937de-648e-5282-4ca8-79d03122f9f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495207970,
    },
    "e-559": {
      id: "e-559",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-560" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|eafacfe1-b000-5e1c-f1fe-f618fbfa64cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|eafacfe1-b000-5e1c-f1fe-f618fbfa64cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495217276,
    },
    "e-561": {
      id: "e-561",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-562" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|77681930-8a95-dcc5-f164-a4cb9b28d27a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|77681930-8a95-dcc5-f164-a4cb9b28d27a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495227659,
    },
    "e-563": {
      id: "e-563",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-564" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|62d8d598-e76d-80c7-40ff-1bae6771b62c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|62d8d598-e76d-80c7-40ff-1bae6771b62c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495262083,
    },
    "e-565": {
      id: "e-565",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-566" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|880df6b9-466d-1596-2117-5f2d7b971a6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|880df6b9-466d-1596-2117-5f2d7b971a6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495275211,
    },
    "e-567": {
      id: "e-567",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-568" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|2e619be2-9d7d-237d-31e3-26cb09995379",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|2e619be2-9d7d-237d-31e3-26cb09995379",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495285563,
    },
    "e-569": {
      id: "e-569",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-570" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ce6d00d9-e9ae-28ec-ca68-e2e74229074a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ce6d00d9-e9ae-28ec-ca68-e2e74229074a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495304298,
    },
    "e-571": {
      id: "e-571",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-572" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8e9cc373-ea4e-65ad-abc8-be0131dee1c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8e9cc373-ea4e-65ad-abc8-be0131dee1c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495315778,
    },
    "e-573": {
      id: "e-573",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-574" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|9e5e6b38-0ec5-4943-1be5-7719adde3386",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|9e5e6b38-0ec5-4943-1be5-7719adde3386",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495323809,
    },
    "e-575": {
      id: "e-575",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-576" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|d13a3dab-ae35-4123-c879-9dfd6382b6cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|d13a3dab-ae35-4123-c879-9dfd6382b6cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495333257,
    },
    "e-577": {
      id: "e-577",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-578" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0868acaa-e02a-9505-c5ab-514356856916",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0868acaa-e02a-9505-c5ab-514356856916",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495354730,
    },
    "e-579": {
      id: "e-579",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-580" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|eb4b3576-2e16-c924-cd5e-041e010f78f0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|eb4b3576-2e16-c924-cd5e-041e010f78f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495381178,
    },
    "e-581": {
      id: "e-581",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-582" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0d899bbf-73ad-0ca7-a325-ddf430f0a089",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0d899bbf-73ad-0ca7-a325-ddf430f0a089",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495394738,
    },
    "e-583": {
      id: "e-583",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-584" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8c8264bd-9e45-9f70-5a87-6060fad9c9dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8c8264bd-9e45-9f70-5a87-6060fad9c9dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573495404602,
    },
    "e-585": {
      id: "e-585",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-586" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|73aa34ff-1764-8cb3-e212-09a9437608bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|73aa34ff-1764-8cb3-e212-09a9437608bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495451722,
    },
    "e-587": {
      id: "e-587",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-588",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|f5d9e145-8727-a7fe-ef00-24eb4454932b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|f5d9e145-8727-a7fe-ef00-24eb4454932b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495478697,
    },
    "e-588": {
      id: "e-588",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-587",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|f5d9e145-8727-a7fe-ef00-24eb4454932b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|f5d9e145-8727-a7fe-ef00-24eb4454932b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495478712,
    },
    "e-589": {
      id: "e-589",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-590" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495495550,
    },
    "e-591": {
      id: "e-591",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-592",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495503872,
    },
    "e-592": {
      id: "e-592",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-591",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|2e42b244-c85d-bc3d-9c13-07a728decc6f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495503908,
    },
    "e-593": {
      id: "e-593",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-594",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|605d3840-0c40-a7b2-940f-66c8c63f3c0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|605d3840-0c40-a7b2-940f-66c8c63f3c0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495528481,
    },
    "e-594": {
      id: "e-594",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-593",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|605d3840-0c40-a7b2-940f-66c8c63f3c0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|605d3840-0c40-a7b2-940f-66c8c63f3c0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495528492,
    },
    "e-595": {
      id: "e-595",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-596" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495547408,
    },
    "e-597": {
      id: "e-597",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-598",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495558033,
    },
    "e-598": {
      id: "e-598",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-597",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|12b276c5-0628-2470-8895-d37718f89545",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495558069,
    },
    "e-599": {
      id: "e-599",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-600" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495594581,
    },
    "e-601": {
      id: "e-601",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-602",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495594581,
    },
    "e-602": {
      id: "e-602",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-601",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495594581,
    },
    "e-603": {
      id: "e-603",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-604",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495594581,
    },
    "e-604": {
      id: "e-604",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-603",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|788ebf0a-38bb-3b1c-7a84-7f4d0ae0e5a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495594581,
    },
    "e-605": {
      id: "e-605",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-606" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495597226,
    },
    "e-607": {
      id: "e-607",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-608",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495597226,
    },
    "e-608": {
      id: "e-608",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-607",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495597226,
    },
    "e-609": {
      id: "e-609",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-610",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495597226,
    },
    "e-610": {
      id: "e-610",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-609",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ded06d90-1499-613b-9416-5ebea46b4de9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495597226,
    },
    "e-611": {
      id: "e-611",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-612" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495598214,
    },
    "e-613": {
      id: "e-613",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-614",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495598214,
    },
    "e-614": {
      id: "e-614",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-613",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406695",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495598214,
    },
    "e-615": {
      id: "e-615",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-616",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406696",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406696",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495598214,
    },
    "e-616": {
      id: "e-616",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-615",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406696",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|8ae700c3-2efa-55a7-5c22-901806406696",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495598214,
    },
    "e-617": {
      id: "e-617",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-618",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495669637,
    },
    "e-618": {
      id: "e-618",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-617",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495669637,
    },
    "e-619": {
      id: "e-619",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-620" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495669637,
    },
    "e-621": {
      id: "e-621",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-622",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495669637,
    },
    "e-622": {
      id: "e-622",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-621",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|24d2916b-998d-e3ea-52a6-87aca0b938dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495669637,
    },
    "e-623": {
      id: "e-623",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-624",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-624": {
      id: "e-624",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-623",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-625": {
      id: "e-625",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-626" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-627": {
      id: "e-627",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-628",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-628": {
      id: "e-628",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-627",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374db6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-629": {
      id: "e-629",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-630" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-631": {
      id: "e-631",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-632",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-632": {
      id: "e-632",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-631",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-633": {
      id: "e-633",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-634",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-634": {
      id: "e-634",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-633",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dbe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-635": {
      id: "e-635",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-636" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-637": {
      id: "e-637",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-638",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-638": {
      id: "e-638",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-637",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-639": {
      id: "e-639",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-640",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-640": {
      id: "e-640",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-639",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-641": {
      id: "e-641",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-642",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-642": {
      id: "e-642",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-641",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-643": {
      id: "e-643",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-644" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-645": {
      id: "e-645",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-646",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-646": {
      id: "e-646",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-645",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-647": {
      id: "e-647",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-648",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-648": {
      id: "e-648",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-647",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-649": {
      id: "e-649",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-650" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-651": {
      id: "e-651",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-652",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-652": {
      id: "e-652",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-651",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-653": {
      id: "e-653",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-654",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-654": {
      id: "e-654",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-653",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-655": {
      id: "e-655",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-656" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374ddd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495736920,
    },
    "e-657": {
      id: "e-657",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-658",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-658": {
      id: "e-658",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-657",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|0811e696-9eba-a785-251b-4bb3c2374dde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573495736920,
    },
    "e-659": {
      id: "e-659",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-660" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4e1b680981|ad2e6d05-5874-5af0-2f46-01641812d611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4e1b680981|ad2e6d05-5874-5af0-2f46-01641812d611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573495928521,
    },
    "e-661": {
      id: "e-661",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-662",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d52e668096d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d52e668096d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573501957585,
    },
    "e-663": {
      id: "e-663",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-664" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d52e668096d|1ac6c7c8-6d19-14e8-871a-ce3765073c99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d52e668096d|1ac6c7c8-6d19-14e8-871a-ce3765073c99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502085115,
    },
    "e-665": {
      id: "e-665",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-666" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d52e668096d|ee796a24-ee6c-6077-f9e0-e0c80d029be1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d52e668096d|ee796a24-ee6c-6077-f9e0-e0c80d029be1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502091461,
    },
    "e-667": {
      id: "e-667",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-668" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d52e668096d|dfcafa08-09af-1cd2-417c-29d93e0a5fab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d52e668096d|dfcafa08-09af-1cd2-417c-29d93e0a5fab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502101085,
    },
    "e-669": {
      id: "e-669",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-670" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d52e668096d|232da310-3b58-1fbe-d8fb-cdc3cff58aaf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d52e668096d|232da310-3b58-1fbe-d8fb-cdc3cff58aaf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1573502130364,
    },
    "e-671": {
      id: "e-671",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-672",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d4bb4680969",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d4bb4680969",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573502162453,
    },
    "e-673": {
      id: "e-673",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-674",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ce2680972",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ce2680972",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573502274012,
    },
    "e-675": {
      id: "e-675",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-676" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ce2680972|65c3592f-1382-c973-bd7a-39b8325ef21d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ce2680972|65c3592f-1382-c973-bd7a-39b8325ef21d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502483780,
    },
    "e-677": {
      id: "e-677",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-678" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ce2680972|ef55c021-8194-d3ff-7d83-8510a56422bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ce2680972|ef55c021-8194-d3ff-7d83-8510a56422bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502491241,
    },
    "e-679": {
      id: "e-679",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-680" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ce2680972|7c23ded6-b6a6-5e20-f085-7a39234fbf1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ce2680972|7c23ded6-b6a6-5e20-f085-7a39234fbf1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502502712,
    },
    "e-681": {
      id: "e-681",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-682" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ce2680972|d328370f-05ad-cd70-645e-1adb115b921a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ce2680972|d328370f-05ad-cd70-645e-1adb115b921a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502513160,
    },
    "e-683": {
      id: "e-683",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-684",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573502584506,
    },
    "e-685": {
      id: "e-685",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-686" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|65c3592f-1382-c973-bd7a-39b8325ef21d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|65c3592f-1382-c973-bd7a-39b8325ef21d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502677868,
    },
    "e-687": {
      id: "e-687",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-688" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|ef55c021-8194-d3ff-7d83-8510a56422bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|ef55c021-8194-d3ff-7d83-8510a56422bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502687439,
    },
    "e-689": {
      id: "e-689",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-690" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|7c23ded6-b6a6-5e20-f085-7a39234fbf1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|7c23ded6-b6a6-5e20-f085-7a39234fbf1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502701456,
    },
    "e-691": {
      id: "e-691",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-692" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d6d7668098a|d328370f-05ad-cd70-645e-1adb115b921a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d6d7668098a|d328370f-05ad-cd70-645e-1adb115b921a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502711552,
    },
    "e-693": {
      id: "e-693",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-694",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573502743920,
    },
    "e-695": {
      id: "e-695",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-696" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|2f9c660a-d14c-cf8d-fd9d-3c8ab95a3d05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|2f9c660a-d14c-cf8d-fd9d-3c8ab95a3d05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1573502824431,
    },
    "e-697": {
      id: "e-697",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-698",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d091a68096e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d091a68096e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573502910855,
    },
    "e-699": {
      id: "e-699",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-700",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56da85e68096f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56da85e68096f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1573503068572,
    },
    "e-701": {
      id: "e-701",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-702" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04383",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04383",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-703": {
      id: "e-703",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-704" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04385",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04385",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-705": {
      id: "e-705",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-706" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04387",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04387",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-707": {
      id: "e-707",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-708" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-709": {
      id: "e-709",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-710",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-710": {
      id: "e-710",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-709",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-711": {
      id: "e-711",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-712",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0438a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0438a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-712": {
      id: "e-712",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-711",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0438a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0438a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-713": {
      id: "e-713",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-714",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-714": {
      id: "e-714",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-713",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-715": {
      id: "e-715",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-716" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04391",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-717": {
      id: "e-717",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-718",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04392",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04392",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-718": {
      id: "e-718",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-717",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04392",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04392",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-719": {
      id: "e-719",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-720",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-720": {
      id: "e-720",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-719",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-721": {
      id: "e-721",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-722" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd04399",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-723": {
      id: "e-723",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-724",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0439a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0439a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-724": {
      id: "e-724",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-723",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0439a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd0439a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286526937,
    },
    "e-725": {
      id: "e-725",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-726" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd043a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d76da680983|6342b510-5ebd-17de-327a-f4aa2bd043a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1576286526937,
    },
    "e-739": {
      id: "e-739",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-740",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-740": {
      id: "e-740",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-739",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-741": {
      id: "e-741",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-742" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286757795,
    },
    "e-743": {
      id: "e-743",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-744",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-744": {
      id: "e-744",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-743",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-745": {
      id: "e-745",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-746",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-746": {
      id: "e-746",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-745",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-747": {
      id: "e-747",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-748" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286757795,
    },
    "e-749": {
      id: "e-749",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-750",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-750": {
      id: "e-750",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-749",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-751": {
      id: "e-751",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-752" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286757795,
    },
    "e-753": {
      id: "e-753",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-754",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-754": {
      id: "e-754",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-753",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-755": {
      id: "e-755",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-756",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-756": {
      id: "e-756",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-755",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-757": {
      id: "e-757",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-758" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286757795,
    },
    "e-759": {
      id: "e-759",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-760",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-760": {
      id: "e-760",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-759",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-761": {
      id: "e-761",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-762",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-762": {
      id: "e-762",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-761",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|a6121a1f-b9a1-a6c9-a027-1ca3a5ba40ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286757795,
    },
    "e-781": {
      id: "e-781",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-782",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-782": {
      id: "e-782",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-781",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-783": {
      id: "e-783",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-784" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a290",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286774933,
    },
    "e-785": {
      id: "e-785",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-786",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a291",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a291",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-786": {
      id: "e-786",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-785",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a291",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a291",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-787": {
      id: "e-787",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-788" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286774933,
    },
    "e-789": {
      id: "e-789",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-790",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-790": {
      id: "e-790",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-789",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-791": {
      id: "e-791",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-792",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a299",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a299",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-792": {
      id: "e-792",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-791",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a299",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a299",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-793": {
      id: "e-793",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-794" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286774933,
    },
    "e-795": {
      id: "e-795",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-796",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-796": {
      id: "e-796",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-795",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-797": {
      id: "e-797",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-798",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-798": {
      id: "e-798",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-797",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|54a27bed-1acc-ddac-e6c2-f0537841a2a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286774933,
    },
    "e-817": {
      id: "e-817",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-818",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-818": {
      id: "e-818",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-817",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-819": {
      id: "e-819",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-820" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286796785,
    },
    "e-821": {
      id: "e-821",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-822",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-822": {
      id: "e-822",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-821",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-823": {
      id: "e-823",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-824" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286796785,
    },
    "e-825": {
      id: "e-825",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-826",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-826": {
      id: "e-826",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-825",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f74",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-827": {
      id: "e-827",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-828",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-828": {
      id: "e-828",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-827",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-829": {
      id: "e-829",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-830" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576286796785,
    },
    "e-831": {
      id: "e-831",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-832",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-832": {
      id: "e-832",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-831",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-833": {
      id: "e-833",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-834",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-834": {
      id: "e-834",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-833",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d158f68097e|4e9eb4c9-8c85-fb98-a4a0-5ac8891c1f7d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576286796785,
    },
    "e-835": {
      id: "e-835",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-836" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|4e30ca54-be49-bb30-0fc9-a6ed6fe22987",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|4e30ca54-be49-bb30-0fc9-a6ed6fe22987",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576287521185,
    },
    "e-837": {
      id: "e-837",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-838" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d283d68098c|4e30ca54-be49-bb30-0fc9-a6ed6fe22992",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d283d68098c|4e30ca54-be49-bb30-0fc9-a6ed6fe22992",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1576287521185,
    },
    "e-839": {
      id: "e-839",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-840",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5df45c5d0730a557e31e9522",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5df45c5d0730a557e31e9522",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576295518040,
    },
    "e-841": {
      id: "e-841",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-842",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5df526860730a5368b223d2e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5df526860730a5368b223d2e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576347270419,
    },
    "e-843": {
      id: "e-843",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-844" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|050b3602-b6f2-f608-a3b7-3a436ab61aae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|050b3602-b6f2-f608-a3b7-3a436ab61aae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576353395015,
    },
    "e-869": {
      id: "e-869",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-870" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|bc71ed79-36f2-261f-5c31-45e264d14e45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|bc71ed79-36f2-261f-5c31-45e264d14e45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1576353533040,
    },
    "e-871": {
      id: "e-871",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-872" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d108a680975|d918640e-c5f7-8295-4197-8da3385ab080",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d108a680975|d918640e-c5f7-8295-4197-8da3385ab080",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576353559937,
    },
    "e-873": {
      id: "e-873",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-874" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dc7d7680973|1f00447d-47f7-44e2-474a-b8ebbde195b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dc7d7680973|1f00447d-47f7-44e2-474a-b8ebbde195b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576353932797,
    },
    "e-875": {
      id: "e-875",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-876" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d0c5768097b|25810931-3567-f3e3-0d86-6f9a1600a935",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d0c5768097b|25810931-3567-f3e3-0d86-6f9a1600a935",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576354073172,
    },
    "e-877": {
      id: "e-877",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-878" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d7ab068097c|e59c1c82-60a9-4ecd-88b0-d5af67844ae9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d7ab068097c|e59c1c82-60a9-4ecd-88b0-d5af67844ae9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576354206238,
    },
    "e-879": {
      id: "e-879",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-880" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|9245b6a5-666e-ce5a-f06b-e24a57bc04b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|9245b6a5-666e-ce5a-f06b-e24a57bc04b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576355662246,
    },
    "e-881": {
      id: "e-881",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-882" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|9245b6a5-666e-ce5a-f06b-e24a57bc04c3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|9245b6a5-666e-ce5a-f06b-e24a57bc04c3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1576355662246,
    },
    "e-883": {
      id: "e-883",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-884" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|8fa1a34e-07df-1eb6-2f1c-48aecdf7bae6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|8fa1a34e-07df-1eb6-2f1c-48aecdf7bae6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1576355723954,
    },
    "e-885": {
      id: "e-885",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-886" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576355770369,
    },
    "e-887": {
      id: "e-887",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-888" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576355770369,
    },
    "e-889": {
      id: "e-889",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-890" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576355770369,
    },
    "e-891": {
      id: "e-891",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-892" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4bf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56d136068096b|e0ba5627-f3d5-3c37-f76a-84248fc3d4bf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1576355770369,
    },
    "e-893": {
      id: "e-893",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-894",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5df5613aa58b622383ce0625",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5df5613aa58b622383ce0625",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1576362298348,
    },
    "e-895": {
      id: "e-895",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-896" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|8ef16d17-7c0d-79b5-a702-b58f371b7025",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|8ef16d17-7c0d-79b5-a702-b58f371b7025",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1582989801064,
    },
    "e-897": {
      id: "e-897",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-898" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1582989812593,
    },
    "e-899": {
      id: "e-899",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-900" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cf7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cf7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1582989825473,
    },
    "e-901": {
      id: "e-901",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-902" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cfb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5cd35beef9a56dffa0680982|4429d9e6-ad69-626e-1c6b-7e8dcc6b1cfb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1582989859875,
    },
    "e-903": {
      id: "e-903",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-904" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5df526860730a5368b223d2e|71957d4d-4094-3fd4-1ad4-a2d49cff3587",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5df526860730a5368b223d2e|71957d4d-4094-3fd4-1ad4-a2d49cff3587",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1610490465183,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Square Image Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".overlay-portfolio.other-color",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359820",
                    "c2ffda54-060b-3575-f95b-ed928835982b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".overlay-portfolio.other-color",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359820",
                    "c2ffda54-060b-3575-f95b-ed928835982b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1525267614416,
    },
    "a-2": {
      id: "a-2",
      title: "image square Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  selector: ".overlay-portfolio.other-color",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359820",
                    "c2ffda54-060b-3575-f95b-ed928835982b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 250,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".portfolio-content.zoom-icon",
                  selectorGuids: [
                    "c2ffda54-060b-3575-f95b-ed9288359822",
                    "c2ffda54-060b-3575-f95b-ed928835982d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1525268204804,
    },
    "a-3": {
      id: "a-3",
      title: "Intro Page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-logo",
                  selectorGuids: ["67743a51-eb2a-1db6-14a4-f14c80e4bcb8"],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56db2a4680968|c5361d63-6808-54fd-97f1-13fa77b4b7b9",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56db2a4680968|c5361d63-6808-54fd-97f1-13fa77b4b7b9",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-tittle.tittle2.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "a0899976-132a-8ef4-7c0d-099974a93a17",
                    "af3267a6-1214-6967-3eb2-0dba6bac3f4d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-tittle.tittle2.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "a0899976-132a-8ef4-7c0d-099974a93a17",
                    "af3267a6-1214-6967-3eb2-0dba6bac3f4d",
                  ],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-tittle.word.center.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "9de4e168-26ab-6422-e237-8677fb3d86b3",
                    "2fda4e10-c159-a9e4-52ab-d13c617736b6",
                    "60103135-17a6-f6c0-1919-d09603a0ba07",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-tittle.word.center.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "9de4e168-26ab-6422-e237-8677fb3d86b3",
                    "2fda4e10-c159-a9e4-52ab-d13c617736b6",
                    "60103135-17a6-f6c0-1919-d09603a0ba07",
                  ],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".c-logo",
                  selectorGuids: ["67743a51-eb2a-1db6-14a4-f14c80e4bcb8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".c-logo",
                  selectorGuids: ["67743a51-eb2a-1db6-14a4-f14c80e4bcb8"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".c-logo",
                  selectorGuids: ["67743a51-eb2a-1db6-14a4-f14c80e4bcb8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".hero-tittle.word.center.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "9de4e168-26ab-6422-e237-8677fb3d86b3",
                    "2fda4e10-c159-a9e4-52ab-d13c617736b6",
                    "60103135-17a6-f6c0-1919-d09603a0ba07",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-3-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".hero-tittle.word.center.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "9de4e168-26ab-6422-e237-8677fb3d86b3",
                    "2fda4e10-c159-a9e4-52ab-d13c617736b6",
                    "60103135-17a6-f6c0-1919-d09603a0ba07",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".hero-tittle.tittle2.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "a0899976-132a-8ef4-7c0d-099974a93a17",
                    "af3267a6-1214-6967-3eb2-0dba6bac3f4d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".hero-tittle.tittle2.dark",
                  selectorGuids: [
                    "4ca8f506-998d-73d7-668c-748ae2211c31",
                    "a0899976-132a-8ef4-7c0d-099974a93a17",
                    "af3267a6-1214-6967-3eb2-0dba6bac3f4d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56db2a4680968|c5361d63-6808-54fd-97f1-13fa77b4b7b9",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56db2a4680968|c5361d63-6808-54fd-97f1-13fa77b4b7b9",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573052337761,
    },
    "a-4": {
      id: "a-4",
      title: "Hero Page 1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|8a9b11df-0c0a-3211-43ec-9fc6d1f2d21d",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|a9e817c6-4fe2-64cc-eeab-ce4b7893a06f",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|a9e817c6-4fe2-64cc-eeab-ce4b7893a06f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|a211fa36-404d-5f6b-fa87-b4f665689a25",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|a211fa36-404d-5f6b-fa87-b4f665689a25",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                xValue: 40,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d108a680975|8a9b11df-0c0a-3211-43ec-9fc6d1f2d21d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|8a9b11df-0c0a-3211-43ec-9fc6d1f2d21d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|8a9b11df-0c0a-3211-43ec-9fc6d1f2d21d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|a211fa36-404d-5f6b-fa87-b4f665689a25",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|a211fa36-404d-5f6b-fa87-b4f665689a25",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|a9e817c6-4fe2-64cc-eeab-ce4b7893a06f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d108a680975|a9e817c6-4fe2-64cc-eeab-ce4b7893a06f",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573052337761,
    },
    "a-5": {
      id: "a-5",
      title: "Subscribe Card",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                xValue: -60,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 5000,
                easing: "easeInOut",
                duration: 300,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 5000,
                easing: "easeInOut",
                duration: 300,
                target: {},
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573055440837,
    },
    "a-6": {
      id: "a-6",
      title: "Subscribe Close Button",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {},
                xValue: -60,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-6-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {},
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1573055576796,
    },
    "a-7": {
      id: "a-7",
      title: "Hero Page 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6053680977|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6053680977|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573055946961,
    },
    "a-8": {
      id: "a-8",
      title: "Hero Page 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|6abea1c2-d8a8-f5ea-6542-e43a1dda9171",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|bb69c7e5-c3ec-cb71-e05c-4e1f4e96e1af",
                },
                yValue: 30,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|bb69c7e5-c3ec-cb71-e05c-4e1f4e96e1af",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|f52e93b2-326f-cfde-57a1-3334202fa89d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|f52e93b2-326f-cfde-57a1-3334202fa89d",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|ba0b12ab-80c6-cfd9-d856-e1cce82f573c",
                },
                xValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|ba0b12ab-80c6-cfd9-d856-e1cce82f573c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dc7d7680973|6abea1c2-d8a8-f5ea-6542-e43a1dda9171",
                },
                xValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|6abea1c2-d8a8-f5ea-6542-e43a1dda9171",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|bb69c7e5-c3ec-cb71-e05c-4e1f4e96e1af",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|bb69c7e5-c3ec-cb71-e05c-4e1f4e96e1af",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|6abea1c2-d8a8-f5ea-6542-e43a1dda9171",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|ba0b12ab-80c6-cfd9-d856-e1cce82f573c",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|ba0b12ab-80c6-cfd9-d856-e1cce82f573c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-8-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|f52e93b2-326f-cfde-57a1-3334202fa89d",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dc7d7680973|f52e93b2-326f-cfde-57a1-3334202fa89d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573148836949,
    },
    "a-9": {
      id: "a-9",
      title: "Hero Page 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|d01a8ba9-2a5d-d85c-927d-6c5cdf87f4b2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|4c2a6d99-beaa-c1fe-b48c-becba2f6b795",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|4c2a6d99-beaa-c1fe-b48c-becba2f6b795",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|505cdb4f-d508-3ea7-1f62-5c96c39a9062",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|505cdb4f-d508-3ea7-1f62-5c96c39a9062",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d3824680974|d01a8ba9-2a5d-d85c-927d-6c5cdf87f4b2",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|d01a8ba9-2a5d-d85c-927d-6c5cdf87f4b2",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|d01a8ba9-2a5d-d85c-927d-6c5cdf87f4b2",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|505cdb4f-d508-3ea7-1f62-5c96c39a9062",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|505cdb4f-d508-3ea7-1f62-5c96c39a9062",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|4c2a6d99-beaa-c1fe-b48c-becba2f6b795",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d3824680974|4c2a6d99-beaa-c1fe-b48c-becba2f6b795",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573157248615,
    },
    "a-10": {
      id: "a-10",
      title: "Process Bar",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".process-bar-fill",
                  selectorGuids: ["d920e6b8-f3ea-c04d-6069-287627b054bd"],
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".process-bar-fill",
                  selectorGuids: ["d920e6b8-f3ea-c04d-6069-287627b054bd"],
                },
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573157839944,
    },
    "a-11": {
      id: "a-11",
      title: "Hero Page 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|71ddbc4f-22ab-41ea-9189-067f9b127a0b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|df7aa773-a601-b719-2114-07643092d641",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|df7aa773-a601-b719-2114-07643092d641",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d8dc5680978|71ddbc4f-22ab-41ea-9189-067f9b127a0b",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|71ddbc4f-22ab-41ea-9189-067f9b127a0b",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|71ddbc4f-22ab-41ea-9189-067f9b127a0b",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|df7aa773-a601-b719-2114-07643092d641",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-11-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d8dc5680978|df7aa773-a601-b719-2114-07643092d641",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573158114090,
    },
    "a-12": {
      id: "a-12",
      title: "Hero Page 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|e368247c-5bb7-b7cc-276f-fc19b5974317",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|d0b42926-76da-085e-480e-22e28acaf20c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|d0b42926-76da-085e-480e-22e28acaf20c",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56df786680971|e368247c-5bb7-b7cc-276f-fc19b5974317",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|e368247c-5bb7-b7cc-276f-fc19b5974317",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|e368247c-5bb7-b7cc-276f-fc19b5974317",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|d0b42926-76da-085e-480e-22e28acaf20c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56df786680971|d0b42926-76da-085e-480e-22e28acaf20c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573158571664,
    },
    "a-13": {
      id: "a-13",
      title: "Hero Page 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|a4211620-f811-3254-20ba-abe7be8fa5f3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|a4211620-f811-3254-20ba-abe7be8fa5f3",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d0c5768097b|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|609d037e-efc7-6d36-b790-0345c1f98264",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|59917b3c-38b1-0a8f-1cc2-632130bfa02a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|a4211620-f811-3254-20ba-abe7be8fa5f3",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d0c5768097b|a4211620-f811-3254-20ba-abe7be8fa5f3",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573158885124,
    },
    "a-14": {
      id: "a-14",
      title: "Hero Page 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ab068097c|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ab068097c|a4d65752-e696-4ba2-3ad4-ba6a386c66ec",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ab068097c|a4d65752-e696-4ba2-3ad4-ba6a386c66ec",
                },
                xValue: 40,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ab068097c|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                xValue: -40,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ab068097c|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ab068097c|a4d65752-e696-4ba2-3ad4-ba6a386c66ec",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ab068097c|a4d65752-e696-4ba2-3ad4-ba6a386c66ec",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-14-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ab068097c|98ff7284-5aa0-9c5e-d1b7-c2c367dab5e6",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573159253360,
    },
    "a-15": {
      id: "a-15",
      title: "Hero Page 9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|84db44d7-8fee-8c46-0b33-8383f9e2e918",
                },
                xValue: 30,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|3ad76b0a-4480-952c-133d-2a1452e49641",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|3ad76b0a-4480-952c-133d-2a1452e49641",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d55e868097d|84db44d7-8fee-8c46-0b33-8383f9e2e918",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|84db44d7-8fee-8c46-0b33-8383f9e2e918",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-15-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|afce977a-98b6-ee78-0fe5-e8c5fca07afb",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|84db44d7-8fee-8c46-0b33-8383f9e2e918",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|084bec40-9ba5-f445-55af-d0c76becce8a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|505da9b3-ef90-4073-590e-34632934ec8d",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|3ad76b0a-4480-952c-133d-2a1452e49641",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-15-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d55e868097d|3ad76b0a-4480-952c-133d-2a1452e49641",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573159503373,
    },
    "a-16": {
      id: "a-16",
      title: "Hero Home 10",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|c39bff85-ea64-81f2-8580-189b9312e2f0",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|2fda627f-273d-08a4-e6d3-c6b8fb09e833",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|2fda627f-273d-08a4-e6d3-c6b8fb09e833",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|437bda4e-96bc-0f18-9173-66eb16c9de32",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|437bda4e-96bc-0f18-9173-66eb16c9de32",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56dff37680980|c39bff85-ea64-81f2-8580-189b9312e2f0",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|c39bff85-ea64-81f2-8580-189b9312e2f0",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|c39bff85-ea64-81f2-8580-189b9312e2f0",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|437bda4e-96bc-0f18-9173-66eb16c9de32",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|437bda4e-96bc-0f18-9173-66eb16c9de32",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|2fda627f-273d-08a4-e6d3-c6b8fb09e833",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56dff37680980|2fda627f-273d-08a4-e6d3-c6b8fb09e833",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573159829882,
    },
    "a-17": {
      id: "a-17",
      title: "Navigation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: "e46a25c6-1221-2183-5b0c-44a3369a7345" },
                yValue: -50,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: { id: "e46a25c6-1221-2183-5b0c-44a3369a7345" },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1573160678665,
    },
    "a-18": {
      id: "a-18",
      title: "Navigation Show",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".navigation-scroll",
                  selectorGuids: ["179ac20e-854f-3c71-c02e-f383a2b2bb46"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".navigation-scroll",
                  selectorGuids: ["179ac20e-854f-3c71-c02e-f383a2b2bb46"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1573160713375,
    },
    "a-19": {
      id: "a-19",
      title: "Hero Default",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-19-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: null },
                xValue: 40,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-19-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-19-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: { id: null },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573482190468,
    },
    "a-20": {
      id: "a-20",
      title: "Toogle",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer",
                  selectorGuids: ["1fb509ba-dc61-c49b-efc4-428be87b630d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer",
                  selectorGuids: ["1fb509ba-dc61-c49b-efc4-428be87b630d"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573482566605,
    },
    "a-21": {
      id: "a-21",
      title: "Toogle Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-answer",
                  selectorGuids: ["1fb509ba-dc61-c49b-efc4-428be87b630d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1573483315917,
    },
    "a-22": {
      id: "a-22",
      title: "Toogle Arrow",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573483453668,
    },
    "a-23": {
      id: "a-23",
      title: "Toogle Arrow Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-image",
                  selectorGuids: ["6ea6c97a-ed8a-3f3d-6bef-38f7db345562"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1573484445229,
    },
    "a-24": {
      id: "a-24",
      title: "Hero Pages",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.word.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "5faa9c4c-767e-68e6-86dd-123abc17844c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.word.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "5faa9c4c-767e-68e6-86dd-123abc17844c",
                  ],
                },
                yValue: -20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.tittle2.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "66043e30-3312-2350-b123-d175e73b87e7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.tittle2.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "66043e30-3312-2350-b123-d175e73b87e7",
                  ],
                },
                yValue: -20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.word.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "5faa9c4c-767e-68e6-86dd-123abc17844c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.word.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "5faa9c4c-767e-68e6-86dd-123abc17844c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.tittle2.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "66043e30-3312-2350-b123-d175e73b87e7",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.tittle2.white",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "66043e30-3312-2350-b123-d175e73b87e7",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573485443283,
    },
    "a-25": {
      id: "a-25",
      title: "About Us 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.word.center.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "d3d0e557-12c6-d166-891b-f9e03b4a7741",
                    "086d4408-c943-f035-f734-fec657dc2981",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-block",
                  selectorGuids: ["a8753d10-46b8-073f-24f0-59a8a8b3ef6c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".button-block",
                  selectorGuids: ["a8753d10-46b8-073f-24f0-59a8a8b3ef6c"],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.word.center.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "d3d0e557-12c6-d166-891b-f9e03b4a7741",
                    "086d4408-c943-f035-f734-fec657dc2981",
                  ],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.tittle2.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "9b330ba7-d420-3f37-edeb-3f0617420213",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".page-tittle.tittle2.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "9b330ba7-d420-3f37-edeb-3f0617420213",
                  ],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.word.center.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "d3d0e557-12c6-d166-891b-f9e03b4a7741",
                    "086d4408-c943-f035-f734-fec657dc2981",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.word.center.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "e6ca6981-03e7-d510-c6ae-8064a892a9c2",
                    "d3d0e557-12c6-d166-891b-f9e03b4a7741",
                    "086d4408-c943-f035-f734-fec657dc2981",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.tittle2.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "9b330ba7-d420-3f37-edeb-3f0617420213",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".page-tittle.tittle2.black",
                  selectorGuids: [
                    "d83697c4-dfe3-7e3d-7d28-3f38a3d8a467",
                    "5249c243-daeb-c98d-5615-39a1b4308b6c",
                    "9b330ba7-d420-3f37-edeb-3f0617420213",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".button-block",
                  selectorGuids: ["a8753d10-46b8-073f-24f0-59a8a8b3ef6c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 300,
                target: {
                  selector: ".button-block",
                  selectorGuids: ["a8753d10-46b8-073f-24f0-59a8a8b3ef6c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573485443283,
    },
    "a-26": {
      id: "a-26",
      title: "Product Hero",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|c0f26aa0-abd0-593f-bf4e-89ca12c746d1",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|977b9f01-ad50-b527-e5e4-bb7be7688a94",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|977b9f01-ad50-b527-e5e4-bb7be7688a94",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|c0f26aa0-abd0-593f-bf4e-89ca12c746d1",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|2dd5d8d1-131f-9a1e-6046-ea97850d7ca5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|2dd5d8d1-131f-9a1e-6046-ea97850d7ca5",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|a943808d-daf7-20cd-fe99-a29f11d91b17",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-26-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d136068096b|2dd5d8d1-131f-9a1e-6046-ea97850d7ca5",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|c0f26aa0-abd0-593f-bf4e-89ca12c746d1",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|c0f26aa0-abd0-593f-bf4e-89ca12c746d1",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|2dd5d8d1-131f-9a1e-6046-ea97850d7ca5",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|2dd5d8d1-131f-9a1e-6046-ea97850d7ca5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|a943808d-daf7-20cd-fe99-a29f11d91b17",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|a943808d-daf7-20cd-fe99-a29f11d91b17",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|977b9f01-ad50-b527-e5e4-bb7be7688a94",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-26-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d136068096b|977b9f01-ad50-b527-e5e4-bb7be7688a94",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573158571664,
    },
    "a-27": {
      id: "a-27",
      title: "Hero Porfolio",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d7ce2680972|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-27-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d7ce2680972|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573482190468,
    },
    "a-28": {
      id: "a-28",
      title: "Hero Porfolio 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d6d7668098a|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|3c710a81-1f2e-aa5e-2f57-ff69320765f1",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|b9983c42-563b-1c58-792e-c64165f74b5a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-28-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d6d7668098a|d6b39f17-d3ef-2106-07be-23594067dd31",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573482190468,
    },
    "a-29": {
      id: "a-29",
      title: "404",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|7ec4599c-a3cf-b08d-1697-947817ba7513",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|e267b723-0e76-4ef1-fea3-d5d9c5fca2b3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|e267b723-0e76-4ef1-fea3-d5d9c5fca2b3",
                },
                xValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|49f087a5-b075-1324-cdbb-516ad51aab92",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-29-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|49f087a5-b075-1324-cdbb-516ad51aab92",
                },
                xValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5cd35beef9a56d091a68096e|7ec4599c-a3cf-b08d-1697-947817ba7513",
                },
                xValue: 40,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|7ec4599c-a3cf-b08d-1697-947817ba7513",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|7ec4599c-a3cf-b08d-1697-947817ba7513",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|49f087a5-b075-1324-cdbb-516ad51aab92",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|49f087a5-b075-1324-cdbb-516ad51aab92",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|e267b723-0e76-4ef1-fea3-d5d9c5fca2b3",
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-29-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  id: "5cd35beef9a56d091a68096e|e267b723-0e76-4ef1-fea3-d5d9c5fca2b3",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1573502915300,
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
