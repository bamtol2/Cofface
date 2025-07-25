import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/@mediapipe/camera_utils/camera_utils.js
var require_camera_utils = __commonJS({
  "node_modules/@mediapipe/camera_utils/camera_utils.js"(exports) {
    (function() {
      "use strict";
      function n(a) {
        var b = 0;
        return function() {
          return b < a.length ? { done: false, value: a[b++] } : { done: true };
        };
      }
      var q = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = e.value;
        return a;
      };
      function t(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
          var e = a[b];
          if (e && e.Math == Math) return e;
        }
        throw Error("Cannot find global object");
      }
      var u = t(this);
      function v(a, b) {
        if (b) a: {
          var e = u;
          a = a.split(".");
          for (var f = 0; f < a.length - 1; f++) {
            var h = a[f];
            if (!(h in e)) break a;
            e = e[h];
          }
          a = a[a.length - 1];
          f = e[a];
          b = b(f);
          b != f && null != b && q(e, a, { configurable: true, writable: true, value: b });
        }
      }
      v("Symbol", function(a) {
        function b(l) {
          if (this instanceof b) throw new TypeError("Symbol is not a constructor");
          return new e(f + (l || "") + "_" + h++, l);
        }
        function e(l, c) {
          this.g = l;
          q(this, "description", { configurable: true, writable: true, value: c });
        }
        if (a) return a;
        e.prototype.toString = function() {
          return this.g;
        };
        var f = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", h = 0;
        return b;
      });
      v("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
          var f = u[b[e]];
          "function" === typeof f && "function" != typeof f.prototype[a] && q(f.prototype, a, { configurable: true, writable: true, value: function() {
            return w(n(this));
          } });
        }
        return a;
      });
      function w(a) {
        a = { next: a };
        a[Symbol.iterator] = function() {
          return this;
        };
        return a;
      }
      function x(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : { next: n(a) };
      }
      function y() {
        this.i = false;
        this.g = null;
        this.o = void 0;
        this.j = 1;
        this.m = 0;
        this.h = null;
      }
      function z(a) {
        if (a.i) throw new TypeError("Generator is already running");
        a.i = true;
      }
      y.prototype.l = function(a) {
        this.o = a;
      };
      function A(a, b) {
        a.h = { F: b, G: true };
        a.j = a.m;
      }
      y.prototype.return = function(a) {
        this.h = { return: a };
        this.j = this.m;
      };
      function B(a) {
        this.g = new y();
        this.h = a;
      }
      function C(a, b) {
        z(a.g);
        var e = a.g.g;
        if (e) return D(a, "return" in e ? e["return"] : function(f) {
          return { value: f, done: true };
        }, b, a.g.return);
        a.g.return(b);
        return H(a);
      }
      function D(a, b, e, f) {
        try {
          var h = b.call(a.g.g, e);
          if (!(h instanceof Object)) throw new TypeError("Iterator result " + h + " is not an object");
          if (!h.done) return a.g.i = false, h;
          var l = h.value;
        } catch (c) {
          return a.g.g = null, A(a.g, c), H(a);
        }
        a.g.g = null;
        f.call(a.g, l);
        return H(a);
      }
      function H(a) {
        for (; a.g.j; ) try {
          var b = a.h(a.g);
          if (b) return a.g.i = false, { value: b.value, done: false };
        } catch (e) {
          a.g.o = void 0, A(a.g, e);
        }
        a.g.i = false;
        if (a.g.h) {
          b = a.g.h;
          a.g.h = null;
          if (b.G) throw b.F;
          return { value: b.return, done: true };
        }
        return { value: void 0, done: true };
      }
      function I(a) {
        this.next = function(b) {
          z(a.g);
          a.g.g ? b = D(a, a.g.g.next, b, a.g.l) : (a.g.l(b), b = H(a));
          return b;
        };
        this.throw = function(b) {
          z(a.g);
          a.g.g ? b = D(a, a.g.g["throw"], b, a.g.l) : (A(a.g, b), b = H(a));
          return b;
        };
        this.return = function(b) {
          return C(a, b);
        };
        this[Symbol.iterator] = function() {
          return this;
        };
      }
      function J(a) {
        function b(f) {
          return a.next(f);
        }
        function e(f) {
          return a.throw(f);
        }
        return new Promise(function(f, h) {
          function l(c) {
            c.done ? f(c.value) : Promise.resolve(c.value).then(b, e).then(l, h);
          }
          l(a.next());
        });
      }
      v("Promise", function(a) {
        function b(c) {
          this.h = 0;
          this.i = void 0;
          this.g = [];
          this.o = false;
          var d = this.j();
          try {
            c(d.resolve, d.reject);
          } catch (g) {
            d.reject(g);
          }
        }
        function e() {
          this.g = null;
        }
        function f(c) {
          return c instanceof b ? c : new b(function(d) {
            d(c);
          });
        }
        if (a) return a;
        e.prototype.h = function(c) {
          if (null == this.g) {
            this.g = [];
            var d = this;
            this.i(function() {
              d.l();
            });
          }
          this.g.push(c);
        };
        var h = u.setTimeout;
        e.prototype.i = function(c) {
          h(c, 0);
        };
        e.prototype.l = function() {
          for (; this.g && this.g.length; ) {
            var c = this.g;
            this.g = [];
            for (var d = 0; d < c.length; ++d) {
              var g = c[d];
              c[d] = null;
              try {
                g();
              } catch (k) {
                this.j(k);
              }
            }
          }
          this.g = null;
        };
        e.prototype.j = function(c) {
          this.i(function() {
            throw c;
          });
        };
        b.prototype.j = function() {
          function c(k) {
            return function(m) {
              g || (g = true, k.call(d, m));
            };
          }
          var d = this, g = false;
          return { resolve: c(this.A), reject: c(this.l) };
        };
        b.prototype.A = function(c) {
          if (c === this) this.l(new TypeError("A Promise cannot resolve to itself"));
          else if (c instanceof b) this.C(c);
          else {
            a: switch (typeof c) {
              case "object":
                var d = null != c;
                break a;
              case "function":
                d = true;
                break a;
              default:
                d = false;
            }
            d ? this.v(c) : this.m(c);
          }
        };
        b.prototype.v = function(c) {
          var d = void 0;
          try {
            d = c.then;
          } catch (g) {
            this.l(g);
            return;
          }
          "function" == typeof d ? this.D(d, c) : this.m(c);
        };
        b.prototype.l = function(c) {
          this.u(2, c);
        };
        b.prototype.m = function(c) {
          this.u(1, c);
        };
        b.prototype.u = function(c, d) {
          if (0 != this.h) throw Error("Cannot settle(" + c + ", " + d + "): Promise already settled in state" + this.h);
          this.h = c;
          this.i = d;
          2 === this.h && this.B();
          this.H();
        };
        b.prototype.B = function() {
          var c = this;
          h(function() {
            if (c.I()) {
              var d = u.console;
              "undefined" !== typeof d && d.error(c.i);
            }
          }, 1);
        };
        b.prototype.I = function() {
          if (this.o) return false;
          var c = u.CustomEvent, d = u.Event, g = u.dispatchEvent;
          if ("undefined" === typeof g) return true;
          "function" === typeof c ? c = new c("unhandledrejection", { cancelable: true }) : "function" === typeof d ? c = new d("unhandledrejection", { cancelable: true }) : (c = u.document.createEvent("CustomEvent"), c.initCustomEvent("unhandledrejection", false, true, c));
          c.promise = this;
          c.reason = this.i;
          return g(c);
        };
        b.prototype.H = function() {
          if (null != this.g) {
            for (var c = 0; c < this.g.length; ++c) l.h(this.g[c]);
            this.g = null;
          }
        };
        var l = new e();
        b.prototype.C = function(c) {
          var d = this.j();
          c.s(d.resolve, d.reject);
        };
        b.prototype.D = function(c, d) {
          var g = this.j();
          try {
            c.call(d, g.resolve, g.reject);
          } catch (k) {
            g.reject(k);
          }
        };
        b.prototype.then = function(c, d) {
          function g(p, r) {
            return "function" == typeof p ? function(E) {
              try {
                k(p(E));
              } catch (F) {
                m(F);
              }
            } : r;
          }
          var k, m, G = new b(function(p, r) {
            k = p;
            m = r;
          });
          this.s(g(c, k), g(d, m));
          return G;
        };
        b.prototype.catch = function(c) {
          return this.then(void 0, c);
        };
        b.prototype.s = function(c, d) {
          function g() {
            switch (k.h) {
              case 1:
                c(k.i);
                break;
              case 2:
                d(k.i);
                break;
              default:
                throw Error("Unexpected state: " + k.h);
            }
          }
          var k = this;
          null == this.g ? l.h(g) : this.g.push(g);
          this.o = true;
        };
        b.resolve = f;
        b.reject = function(c) {
          return new b(function(d, g) {
            g(c);
          });
        };
        b.race = function(c) {
          return new b(function(d, g) {
            for (var k = x(c), m = k.next(); !m.done; m = k.next()) f(m.value).s(d, g);
          });
        };
        b.all = function(c) {
          var d = x(c), g = d.next();
          return g.done ? f([]) : new b(function(k, m) {
            function G(E) {
              return function(F) {
                p[E] = F;
                r--;
                0 == r && k(p);
              };
            }
            var p = [], r = 0;
            do
              p.push(void 0), r++, f(g.value).s(G(p.length - 1), m), g = d.next();
            while (!g.done);
          });
        };
        return b;
      });
      var K = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var e = 1; e < arguments.length; e++) {
          var f = arguments[e];
          if (f) for (var h in f) Object.prototype.hasOwnProperty.call(f, h) && (a[h] = f[h]);
        }
        return a;
      };
      v("Object.assign", function(a) {
        return a || K;
      });
      var L = this || self;
      var M = { facingMode: "user", width: 640, height: 480 };
      function N(a, b) {
        this.video = a;
        this.i = 0;
        this.h = Object.assign(Object.assign({}, M), b);
      }
      N.prototype.stop = function() {
        var a = this, b, e, f, h;
        return J(new I(new B(function(l) {
          if (a.g) {
            b = a.g.getTracks();
            e = x(b);
            for (f = e.next(); !f.done; f = e.next()) h = f.value, h.stop();
            a.g = void 0;
          }
          l.j = 0;
        })));
      };
      N.prototype.start = function() {
        var a = this, b;
        return J(new I(new B(function(e) {
          navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists.");
          b = a.h;
          return e.return(navigator.mediaDevices.getUserMedia({ video: { facingMode: b.facingMode, width: b.width, height: b.height } }).then(function(f) {
            O(a, f);
          }).catch(function(f) {
            var h = "Failed to acquire camera feed: " + f;
            console.error(h);
            alert(h);
            throw f;
          }));
        })));
      };
      function P(a) {
        window.requestAnimationFrame(function() {
          Q(a);
        });
      }
      function O(a, b) {
        a.g = b;
        a.video.srcObject = b;
        a.video.onloadedmetadata = function() {
          a.video.play();
          P(a);
        };
      }
      function Q(a) {
        var b = null;
        a.video.paused || a.video.currentTime === a.i || (a.i = a.video.currentTime, b = a.h.onFrame());
        b ? b.then(function() {
          P(a);
        }) : P(a);
      }
      var R = ["Camera"], S = L;
      R[0] in S || "undefined" == typeof S.execScript || S.execScript("var " + R[0]);
      for (var T; R.length && (T = R.shift()); ) R.length || void 0 === N ? S[T] && S[T] !== Object.prototype[T] ? S = S[T] : S = S[T] = {} : S[T] = N;
    }).call(exports);
  }
});
export default require_camera_utils();
//# sourceMappingURL=@mediapipe_camera_utils.js.map
