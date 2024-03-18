var oy = Object.defineProperty;
var sy = (e, t, n) =>
  t in e
    ? oy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var it = (e, t, n) => (sy(e, typeof t != "symbol" ? t + "" : t, n), n);
function iy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sm = { exports: {} },
  ta = {},
  im = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns = Symbol.for("react.element"),
  ay = Symbol.for("react.portal"),
  ly = Symbol.for("react.fragment"),
  cy = Symbol.for("react.strict_mode"),
  uy = Symbol.for("react.profiler"),
  dy = Symbol.for("react.provider"),
  fy = Symbol.for("react.context"),
  py = Symbol.for("react.forward_ref"),
  my = Symbol.for("react.suspense"),
  hy = Symbol.for("react.memo"),
  gy = Symbol.for("react.lazy"),
  Hd = Symbol.iterator;
function vy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hd && e[Hd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var am = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lm = Object.assign,
  cm = {};
function Gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cm),
    (this.updater = n || am);
}
Gr.prototype.isReactComponent = {};
Gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function um() {}
um.prototype = Gr.prototype;
function qc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cm),
    (this.updater = n || am);
}
var Jc = (qc.prototype = new um());
Jc.constructor = qc;
lm(Jc, Gr.prototype);
Jc.isPureReactComponent = !0;
var Wd = Array.isArray,
  dm = Object.prototype.hasOwnProperty,
  Zc = { current: null },
  fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function pm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      dm.call(t, r) && !fm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ns,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Zc.current,
  };
}
function yy(e, t) {
  return {
    $$typeof: ns,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ns;
}
function xy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Kd = /\/+/g;
function Ha(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xy("" + e.key)
    : t.toString(36);
}
function Zs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ns:
          case ay:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ha(i, 0) : r),
      Wd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Kd, "$&/") + "/"),
          Zs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (eu(o) &&
            (o = yy(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Kd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Wd(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var c = r + Ha(s, a);
      i += Zs(s, t, n, c, o);
    }
  else if (((c = vy(e)), typeof c == "function"))
    for (e = c.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + Ha(s, a++)), (i += Zs(s, t, n, c, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Rs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Zs(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function wy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  ei = { transition: null },
  by = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: ei,
    ReactCurrentOwner: Zc,
  };
q.Children = {
  map: Rs,
  forEach: function (e, t, n) {
    Rs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Rs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Gr;
q.Fragment = ly;
q.Profiler = uy;
q.PureComponent = qc;
q.StrictMode = cy;
q.Suspense = my;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lm({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Zc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (c in t)
      dm.call(t, c) &&
        !fm.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    a = Array(c);
    for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ns, type: e.type, key: o, ref: s, props: r, _owner: i };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: fy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dy, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = pm;
q.createFactory = function (e) {
  var t = pm.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: py, render: e };
};
q.isValidElement = eu;
q.lazy = function (e) {
  return { $$typeof: gy, _payload: { _status: -1, _result: e }, _init: wy };
};
q.memo = function (e, t) {
  return { $$typeof: hy, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = ei.transition;
  ei.transition = {};
  try {
    e();
  } finally {
    ei.transition = t;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Ue.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
q.useId = function () {
  return Ue.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Ue.current.useRef(e);
};
q.useState = function (e) {
  return Ue.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Ue.current.useTransition();
};
q.version = "18.2.0";
im.exports = q;
var l = im.exports;
const Ee = om(l),
  mm = iy({ __proto__: null, default: Ee }, [l]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $y = l,
  Sy = Symbol.for("react.element"),
  Ey = Symbol.for("react.fragment"),
  Cy = Object.prototype.hasOwnProperty,
  Ry = $y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Py = { key: !0, ref: !0, __self: !0, __source: !0 };
function hm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Cy.call(t, r) && !Py.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Sy,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Ry.current,
  };
}
ta.Fragment = Ey;
ta.jsx = hm;
ta.jsxs = hm;
sm.exports = ta;
var p = sm.exports,
  jl = {},
  gm = { exports: {} },
  nt = {},
  vm = { exports: {} },
  ym = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, _) {
    var A = T.length;
    T.push(_);
    e: for (; 0 < A; ) {
      var z = (A - 1) >>> 1,
        G = T[z];
      if (0 < o(G, _)) (T[z] = _), (T[A] = G), (A = z);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var _ = T[0],
      A = T.pop();
    if (A !== _) {
      T[0] = A;
      e: for (var z = 0, G = T.length, fe = G >>> 1; z < fe; ) {
        var ie = 2 * (z + 1) - 1,
          Pe = T[ie],
          ae = ie + 1,
          U = T[ae];
        if (0 > o(Pe, A))
          ae < G && 0 > o(U, Pe)
            ? ((T[z] = U), (T[ae] = A), (z = ae))
            : ((T[z] = Pe), (T[ie] = A), (z = ie));
        else if (ae < G && 0 > o(U, A)) (T[z] = U), (T[ae] = A), (z = ae);
        else break e;
      }
    }
    return _;
  }
  function o(T, _) {
    var A = T.sortIndex - _.sortIndex;
    return A !== 0 ? A : T.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var c = [],
    u = [],
    f = 1,
    d = null,
    h = 3,
    x = !1,
    v = !1,
    g = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(T) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= T)
        r(u), (_.sortIndex = _.expirationTime), t(c, _);
      else break;
      _ = n(u);
    }
  }
  function $(T) {
    if (((g = !1), w(T), !v))
      if (n(c) !== null) (v = !0), V(S);
      else {
        var _ = n(u);
        _ !== null && B($, _.startTime - T);
      }
  }
  function S(T, _) {
    (v = !1), g && ((g = !1), y(R), (R = -1)), (x = !0);
    var A = h;
    try {
      for (
        w(_), d = n(c);
        d !== null && (!(d.expirationTime > _) || (T && !H()));

      ) {
        var z = d.callback;
        if (typeof z == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var G = z(d.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof G == "function" ? (d.callback = G) : d === n(c) && r(c),
            w(_);
        } else r(c);
        d = n(c);
      }
      if (d !== null) var fe = !0;
      else {
        var ie = n(u);
        ie !== null && B($, ie.startTime - _), (fe = !1);
      }
      return fe;
    } finally {
      (d = null), (h = A), (x = !1);
    }
  }
  var C = !1,
    E = null,
    R = -1,
    L = 5,
    M = -1;
  function H() {
    return !(e.unstable_now() - M < L);
  }
  function j() {
    if (E !== null) {
      var T = e.unstable_now();
      M = T;
      var _ = !0;
      try {
        _ = E(!0, T);
      } finally {
        _ ? Y() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function () {
      m(j);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      I = N.port2;
    (N.port1.onmessage = j),
      (Y = function () {
        I.postMessage(null);
      });
  } else
    Y = function () {
      b(j, 0);
    };
  function V(T) {
    (E = T), C || ((C = !0), Y());
  }
  function B(T, _) {
    R = b(function () {
      T(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), V(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var A = h;
      h = _;
      try {
        return T();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, _) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = h;
      h = T;
      try {
        return _();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, _, A) {
      var z = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? z + A : z))
          : (A = z),
        T)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = A + G),
        (T = {
          id: f++,
          callback: _,
          priorityLevel: T,
          startTime: A,
          expirationTime: G,
          sortIndex: -1,
        }),
        A > z
          ? ((T.sortIndex = A),
            t(u, T),
            n(c) === null &&
              T === n(u) &&
              (g ? (y(R), (R = -1)) : (g = !0), B($, A - z)))
          : ((T.sortIndex = G), t(c, T), v || x || ((v = !0), V(S))),
        T
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (T) {
      var _ = h;
      return function () {
        var A = h;
        h = _;
        try {
          return T.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    });
})(ym);
vm.exports = ym;
var _y = vm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm = l,
  tt = _y;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wm = new Set(),
  Oo = {};
function tr(e, t) {
  Mr(e, t), Mr(e + "Capture", t);
}
function Mr(e, t) {
  for (Oo[e] = t, e = 0; e < t.length; e++) wm.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Dl = Object.prototype.hasOwnProperty,
  ky =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gd = {},
  Yd = {};
function Ny(e) {
  return Dl.call(Yd, e)
    ? !0
    : Dl.call(Gd, e)
    ? !1
    : ky.test(e)
    ? (Yd[e] = !0)
    : ((Gd[e] = !0), !1);
}
function Ty(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Oy(e, t, n, r) {
  if (t === null || typeof t > "u" || Ty(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ve(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tu = /[\-:]([a-z])/g;
function nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Oe[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(tu, nu);
    Oe[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(tu, nu);
  Oe[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ru(e, t, n, r) {
  var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Oy(t, n, o, r) && (n = null),
    r || o === null
      ? Ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ps = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  ou = Symbol.for("react.strict_mode"),
  Al = Symbol.for("react.profiler"),
  bm = Symbol.for("react.provider"),
  $m = Symbol.for("react.context"),
  su = Symbol.for("react.forward_ref"),
  Ml = Symbol.for("react.suspense"),
  Il = Symbol.for("react.suspense_list"),
  iu = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Sm = Symbol.for("react.offscreen"),
  Qd = Symbol.iterator;
function oo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qd && e[Qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Wa;
function go(e) {
  if (Wa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wa = (t && t[1]) || "";
    }
  return (
    `
` +
    Wa +
    e
  );
}
var Ka = !1;
function Ga(e, t) {
  if (!e || Ka) return "";
  Ka = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var c =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ka = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? go(e) : "";
}
function jy(e) {
  switch (e.tag) {
    case 5:
      return go(e.type);
    case 16:
      return go("Lazy");
    case 13:
      return go("Suspense");
    case 19:
      return go("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ga(e.type, !1)), e;
    case 11:
      return (e = Ga(e.type.render, !1)), e;
    case 1:
      return (e = Ga(e.type, !0)), e;
    default:
      return "";
  }
}
function Ll(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vr:
      return "Fragment";
    case gr:
      return "Portal";
    case Al:
      return "Profiler";
    case ou:
      return "StrictMode";
    case Ml:
      return "Suspense";
    case Il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $m:
        return (e.displayName || "Context") + ".Consumer";
      case bm:
        return (e._context.displayName || "Context") + ".Provider";
      case su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case iu:
        return (
          (t = e.displayName || null), t !== null ? t : Ll(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return Ll(e(t));
        } catch {}
    }
  return null;
}
function Dy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ll(t);
    case 8:
      return t === ou ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Em(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ay(e) {
  var t = Em(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _s(e) {
  e._valueTracker || (e._valueTracker = Ay(e));
}
function Cm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Em(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function xi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fl(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rm(e, t) {
  (t = t.checked), t != null && ru(e, "checked", t, !1);
}
function zl(e, t) {
  Rm(e, t);
  var n = _n(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bl(e, t.type, _n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bl(e, t, n) {
  (t !== "number" || xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vo = Array.isArray;
function _r(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (vo(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _n(n) };
}
function Pm(e, t) {
  var n = _n(t.value),
    r = _n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _m(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _m(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ks,
  km = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ks = ks || document.createElement("div"),
          ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ks.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  My = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function (e) {
  My.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wo[t] = wo[e]);
  });
});
function Nm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wo.hasOwnProperty(e) && wo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Nm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Iy = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Hl(e, t) {
  if (t) {
    if (Iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Wl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Kl = null;
function au(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gl = null,
  kr = null,
  Nr = null;
function ef(e) {
  if ((e = ss(e))) {
    if (typeof Gl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = ia(t)), Gl(e.stateNode, e.type, t));
  }
}
function Om(e) {
  kr ? (Nr ? Nr.push(e) : (Nr = [e])) : (kr = e);
}
function jm() {
  if (kr) {
    var e = kr,
      t = Nr;
    if (((Nr = kr = null), ef(e), t)) for (e = 0; e < t.length; e++) ef(t[e]);
  }
}
function Dm(e, t) {
  return e(t);
}
function Am() {}
var Ya = !1;
function Mm(e, t, n) {
  if (Ya) return e(t, n);
  Ya = !0;
  try {
    return Dm(e, t, n);
  } finally {
    (Ya = !1), (kr !== null || Nr !== null) && (Am(), jm());
  }
}
function Do(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ia(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Yl = !1;
if (Gt)
  try {
    var so = {};
    Object.defineProperty(so, "passive", {
      get: function () {
        Yl = !0;
      },
    }),
      window.addEventListener("test", so, so),
      window.removeEventListener("test", so, so);
  } catch {
    Yl = !1;
  }
function Ly(e, t, n, r, o, s, i, a, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var bo = !1,
  wi = null,
  bi = !1,
  Ql = null,
  Fy = {
    onError: function (e) {
      (bo = !0), (wi = e);
    },
  };
function zy(e, t, n, r, o, s, i, a, c) {
  (bo = !1), (wi = null), Ly.apply(Fy, arguments);
}
function By(e, t, n, r, o, s, i, a, c) {
  if ((zy.apply(this, arguments), bo)) {
    if (bo) {
      var u = wi;
      (bo = !1), (wi = null);
    } else throw Error(O(198));
    bi || ((bi = !0), (Ql = u));
  }
}
function nr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Im(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tf(e) {
  if (nr(e) !== e) throw Error(O(188));
}
function Uy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return tf(o), e;
        if (s === r) return tf(o), t;
        s = s.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Lm(e) {
  return (e = Uy(e)), e !== null ? Fm(e) : null;
}
function Fm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zm = tt.unstable_scheduleCallback,
  nf = tt.unstable_cancelCallback,
  Vy = tt.unstable_shouldYield,
  Hy = tt.unstable_requestPaint,
  we = tt.unstable_now,
  Wy = tt.unstable_getCurrentPriorityLevel,
  lu = tt.unstable_ImmediatePriority,
  Bm = tt.unstable_UserBlockingPriority,
  $i = tt.unstable_NormalPriority,
  Ky = tt.unstable_LowPriority,
  Um = tt.unstable_IdlePriority,
  na = null,
  Ot = null;
function Gy(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function")
    try {
      Ot.onCommitFiberRoot(na, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Xy,
  Yy = Math.log,
  Qy = Math.LN2;
function Xy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yy(e) / Qy) | 0)) | 0;
}
var Ns = 64,
  Ts = 4194304;
function yo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Si(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = yo(a)) : ((s &= i), s !== 0 && (r = yo(s)));
  } else (i = n & ~o), i !== 0 ? (r = yo(i)) : s !== 0 && (r = yo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function qy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - wt(s),
      a = 1 << i,
      c = o[i];
    c === -1
      ? (!(a & n) || a & r) && (o[i] = qy(a, t))
      : c <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function Xl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vm() {
  var e = Ns;
  return (Ns <<= 1), !(Ns & 4194240) && (Ns = 64), e;
}
function Qa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function Zy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - wt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var se = 0;
function Hm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wm,
  uu,
  Km,
  Gm,
  Ym,
  ql = !1,
  Os = [],
  yn = null,
  xn = null,
  wn = null,
  Ao = new Map(),
  Mo = new Map(),
  pn = [],
  ex =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yn = null;
      break;
    case "dragenter":
    case "dragleave":
      xn = null;
      break;
    case "mouseover":
    case "mouseout":
      wn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ao.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mo.delete(t.pointerId);
  }
}
function io(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = ss(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function tx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (yn = io(yn, e, t, n, r, o)), !0;
    case "dragenter":
      return (xn = io(xn, e, t, n, r, o)), !0;
    case "mouseover":
      return (wn = io(wn, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return Ao.set(s, io(Ao.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Mo.set(s, io(Mo.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Qm(e) {
  var t = Un(e.target);
  if (t !== null) {
    var n = nr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Im(n)), t !== null)) {
          (e.blockedOn = t),
            Ym(e.priority, function () {
              Km(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ti(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Kl = r), n.target.dispatchEvent(r), (Kl = null);
    } else return (t = ss(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function of(e, t, n) {
  ti(e) && n.delete(t);
}
function nx() {
  (ql = !1),
    yn !== null && ti(yn) && (yn = null),
    xn !== null && ti(xn) && (xn = null),
    wn !== null && ti(wn) && (wn = null),
    Ao.forEach(of),
    Mo.forEach(of);
}
function ao(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ql ||
      ((ql = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, nx)));
}
function Io(e) {
  function t(o) {
    return ao(o, e);
  }
  if (0 < Os.length) {
    ao(Os[0], e);
    for (var n = 1; n < Os.length; n++) {
      var r = Os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yn !== null && ao(yn, e),
      xn !== null && ao(xn, e),
      wn !== null && ao(wn, e),
      Ao.forEach(t),
      Mo.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    Qm(n), n.blockedOn === null && pn.shift();
}
var Tr = tn.ReactCurrentBatchConfig,
  Ei = !0;
function rx(e, t, n, r) {
  var o = se,
    s = Tr.transition;
  Tr.transition = null;
  try {
    (se = 1), du(e, t, n, r);
  } finally {
    (se = o), (Tr.transition = s);
  }
}
function ox(e, t, n, r) {
  var o = se,
    s = Tr.transition;
  Tr.transition = null;
  try {
    (se = 4), du(e, t, n, r);
  } finally {
    (se = o), (Tr.transition = s);
  }
}
function du(e, t, n, r) {
  if (Ei) {
    var o = Jl(e, t, n, r);
    if (o === null) sl(e, t, r, Ci, n), rf(e, r);
    else if (tx(o, e, t, n, r)) r.stopPropagation();
    else if ((rf(e, r), t & 4 && -1 < ex.indexOf(e))) {
      for (; o !== null; ) {
        var s = ss(o);
        if (
          (s !== null && Wm(s),
          (s = Jl(e, t, n, r)),
          s === null && sl(e, t, r, Ci, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else sl(e, t, r, null, n);
  }
}
var Ci = null;
function Jl(e, t, n, r) {
  if (((Ci = null), (e = au(r)), (e = Un(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Im(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Xm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wy()) {
        case lu:
          return 1;
        case Bm:
          return 4;
        case $i:
        case Ky:
          return 16;
        case Um:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  fu = null,
  ni = null;
function qm() {
  if (ni) return ni;
  var e,
    t = fu,
    n = t.length,
    r,
    o = "value" in hn ? hn.value : hn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (ni = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function js() {
  return !0;
}
function sf() {
  return !1;
}
function rt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? js
        : sf),
      (this.isPropagationStopped = sf),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = js));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = js));
      },
      persist: function () {},
      isPersistent: js,
    }),
    t
  );
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pu = rt(Yr),
  os = ve({}, Yr, { view: 0, detail: 0 }),
  sx = rt(os),
  Xa,
  qa,
  lo,
  ra = ve({}, os, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== lo &&
            (lo && e.type === "mousemove"
              ? ((Xa = e.screenX - lo.screenX), (qa = e.screenY - lo.screenY))
              : (qa = Xa = 0),
            (lo = e)),
          Xa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qa;
    },
  }),
  af = rt(ra),
  ix = ve({}, ra, { dataTransfer: 0 }),
  ax = rt(ix),
  lx = ve({}, os, { relatedTarget: 0 }),
  Ja = rt(lx),
  cx = ve({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ux = rt(cx),
  dx = ve({}, Yr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fx = rt(dx),
  px = ve({}, Yr, { data: 0 }),
  lf = rt(px),
  mx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gx[e]) ? !!t[e] : !1;
}
function mu() {
  return vx;
}
var yx = ve({}, os, {
    key: function (e) {
      if (e.key) {
        var t = mx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mu,
    charCode: function (e) {
      return e.type === "keypress" ? ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ri(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xx = rt(yx),
  wx = ve({}, ra, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cf = rt(wx),
  bx = ve({}, os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  $x = rt(bx),
  Sx = ve({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ex = rt(Sx),
  Cx = ve({}, ra, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rx = rt(Cx),
  Px = [9, 13, 27, 32],
  hu = Gt && "CompositionEvent" in window,
  $o = null;
Gt && "documentMode" in document && ($o = document.documentMode);
var _x = Gt && "TextEvent" in window && !$o,
  Jm = Gt && (!hu || ($o && 8 < $o && 11 >= $o)),
  uf = " ",
  df = !1;
function Zm(e, t) {
  switch (e) {
    case "keyup":
      return Px.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function eh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function kx(e, t) {
  switch (e) {
    case "compositionend":
      return eh(t);
    case "keypress":
      return t.which !== 32 ? null : ((df = !0), uf);
    case "textInput":
      return (e = t.data), e === uf && df ? null : e;
    default:
      return null;
  }
}
function Nx(e, t) {
  if (yr)
    return e === "compositionend" || (!hu && Zm(e, t))
      ? ((e = qm()), (ni = fu = hn = null), (yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tx[e.type] : t === "textarea";
}
function th(e, t, n, r) {
  Om(r),
    (t = Ri(t, "onChange")),
    0 < t.length &&
      ((n = new pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var So = null,
  Lo = null;
function Ox(e) {
  fh(e, 0);
}
function oa(e) {
  var t = br(e);
  if (Cm(t)) return e;
}
function jx(e, t) {
  if (e === "change") return t;
}
var nh = !1;
if (Gt) {
  var Za;
  if (Gt) {
    var el = "oninput" in document;
    if (!el) {
      var pf = document.createElement("div");
      pf.setAttribute("oninput", "return;"),
        (el = typeof pf.oninput == "function");
    }
    Za = el;
  } else Za = !1;
  nh = Za && (!document.documentMode || 9 < document.documentMode);
}
function mf() {
  So && (So.detachEvent("onpropertychange", rh), (Lo = So = null));
}
function rh(e) {
  if (e.propertyName === "value" && oa(Lo)) {
    var t = [];
    th(t, Lo, e, au(e)), Mm(Ox, t);
  }
}
function Dx(e, t, n) {
  e === "focusin"
    ? (mf(), (So = t), (Lo = n), So.attachEvent("onpropertychange", rh))
    : e === "focusout" && mf();
}
function Ax(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oa(Lo);
}
function Mx(e, t) {
  if (e === "click") return oa(t);
}
function Ix(e, t) {
  if (e === "input" || e === "change") return oa(t);
}
function Lx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : Lx;
function Fo(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Dl.call(t, o) || !Et(e[o], t[o])) return !1;
  }
  return !0;
}
function hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gf(e, t) {
  var n = hf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hf(n);
  }
}
function oh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? oh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sh() {
  for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = xi(e.document);
  }
  return t;
}
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Fx(e) {
  var t = sh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    oh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = gf(n, s));
        var i = gf(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zx = Gt && "documentMode" in document && 11 >= document.documentMode,
  xr = null,
  Zl = null,
  Eo = null,
  ec = !1;
function vf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ec ||
    xr == null ||
    xr !== xi(r) ||
    ((r = xr),
    "selectionStart" in r && gu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Eo && Fo(Eo, r)) ||
      ((Eo = r),
      (r = Ri(Zl, "onSelect")),
      0 < r.length &&
        ((t = new pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xr))));
}
function Ds(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var wr = {
    animationend: Ds("Animation", "AnimationEnd"),
    animationiteration: Ds("Animation", "AnimationIteration"),
    animationstart: Ds("Animation", "AnimationStart"),
    transitionend: Ds("Transition", "TransitionEnd"),
  },
  tl = {},
  ih = {};
Gt &&
  ((ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
  "TransitionEvent" in window || delete wr.transitionend.transition);
function sa(e) {
  if (tl[e]) return tl[e];
  if (!wr[e]) return e;
  var t = wr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ih) return (tl[e] = t[n]);
  return e;
}
var ah = sa("animationend"),
  lh = sa("animationiteration"),
  ch = sa("animationstart"),
  uh = sa("transitionend"),
  dh = new Map(),
  yf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  dh.set(e, t), tr(t, [e]);
}
for (var nl = 0; nl < yf.length; nl++) {
  var rl = yf[nl],
    Bx = rl.toLowerCase(),
    Ux = rl[0].toUpperCase() + rl.slice(1);
  Dn(Bx, "on" + Ux);
}
Dn(ah, "onAnimationEnd");
Dn(lh, "onAnimationIteration");
Dn(ch, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(uh, "onTransitionEnd");
Mr("onMouseEnter", ["mouseout", "mouseover"]);
Mr("onMouseLeave", ["mouseout", "mouseover"]);
Mr("onPointerEnter", ["pointerout", "pointerover"]);
Mr("onPointerLeave", ["pointerout", "pointerover"]);
tr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vx = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
function xf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), By(r, t, void 0, e), (e.currentTarget = null);
}
function fh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            c = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), c !== s && o.isPropagationStopped())) break e;
          xf(o, a, u), (s = c);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (c = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            c !== s && o.isPropagationStopped())
          )
            break e;
          xf(o, a, u), (s = c);
        }
    }
  }
  if (bi) throw ((e = Ql), (bi = !1), (Ql = null), e);
}
function ue(e, t) {
  var n = t[sc];
  n === void 0 && (n = t[sc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ph(t, e, 2, !1), n.add(r));
}
function ol(e, t, n) {
  var r = 0;
  t && (r |= 4), ph(n, e, r, t);
}
var As = "_reactListening" + Math.random().toString(36).slice(2);
function zo(e) {
  if (!e[As]) {
    (e[As] = !0),
      wm.forEach(function (n) {
        n !== "selectionchange" && (Vx.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[As] || ((t[As] = !0), ol("selectionchange", !1, t));
  }
}
function ph(e, t, n, r) {
  switch (Xm(t)) {
    case 1:
      var o = rx;
      break;
    case 4:
      o = ox;
      break;
    default:
      o = du;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Yl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function sl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Un(a)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Mm(function () {
    var u = s,
      f = au(n),
      d = [];
    e: {
      var h = dh.get(e);
      if (h !== void 0) {
        var x = pu,
          v = e;
        switch (e) {
          case "keypress":
            if (ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = xx;
            break;
          case "focusin":
            (v = "focus"), (x = Ja);
            break;
          case "focusout":
            (v = "blur"), (x = Ja);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ja;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ax;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = $x;
            break;
          case ah:
          case lh:
          case ch:
            x = ux;
            break;
          case uh:
            x = Ex;
            break;
          case "scroll":
            x = sx;
            break;
          case "wheel":
            x = Rx;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = fx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = cf;
        }
        var g = (t & 4) !== 0,
          b = !g && e === "scroll",
          y = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var m = u, w; m !== null; ) {
          w = m;
          var $ = w.stateNode;
          if (
            (w.tag === 5 &&
              $ !== null &&
              ((w = $),
              y !== null && (($ = Do(m, y)), $ != null && g.push(Bo(m, $, w)))),
            b)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((h = new x(h, v, null, n, f)), d.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Kl &&
            (v = n.relatedTarget || n.fromElement) &&
            (Un(v) || v[Yt]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Un(v) : null),
              v !== null &&
                ((b = nr(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((g = af),
            ($ = "onMouseLeave"),
            (y = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = cf),
              ($ = "onPointerLeave"),
              (y = "onPointerEnter"),
              (m = "pointer")),
            (b = x == null ? h : br(x)),
            (w = v == null ? h : br(v)),
            (h = new g($, m + "leave", x, n, f)),
            (h.target = b),
            (h.relatedTarget = w),
            ($ = null),
            Un(f) === u &&
              ((g = new g(y, m + "enter", v, n, f)),
              (g.target = w),
              (g.relatedTarget = b),
              ($ = g)),
            (b = $),
            x && v)
          )
            t: {
              for (g = x, y = v, m = 0, w = g; w; w = ur(w)) m++;
              for (w = 0, $ = y; $; $ = ur($)) w++;
              for (; 0 < m - w; ) (g = ur(g)), m--;
              for (; 0 < w - m; ) (y = ur(y)), w--;
              for (; m--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = ur(g)), (y = ur(y));
              }
              g = null;
            }
          else g = null;
          x !== null && wf(d, h, x, g, !1),
            v !== null && b !== null && wf(d, b, v, g, !0);
        }
      }
      e: {
        if (
          ((h = u ? br(u) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var S = jx;
        else if (ff(h))
          if (nh) S = Ix;
          else {
            S = Ax;
            var C = Dx;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Mx);
        if (S && (S = S(e, u))) {
          th(d, S, n, f);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Bl(h, "number", h.value);
      }
      switch (((C = u ? br(u) : window), e)) {
        case "focusin":
          (ff(C) || C.contentEditable === "true") &&
            ((xr = C), (Zl = u), (Eo = null));
          break;
        case "focusout":
          Eo = Zl = xr = null;
          break;
        case "mousedown":
          ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ec = !1), vf(d, n, f);
          break;
        case "selectionchange":
          if (zx) break;
        case "keydown":
        case "keyup":
          vf(d, n, f);
      }
      var E;
      if (hu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        yr
          ? Zm(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Jm &&
          n.locale !== "ko" &&
          (yr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && yr && (E = qm())
            : ((hn = f),
              (fu = "value" in hn ? hn.value : hn.textContent),
              (yr = !0))),
        (C = Ri(u, R)),
        0 < C.length &&
          ((R = new lf(R, e, null, n, f)),
          d.push({ event: R, listeners: C }),
          E ? (R.data = E) : ((E = eh(n)), E !== null && (R.data = E)))),
        (E = _x ? kx(e, n) : Nx(e, n)) &&
          ((u = Ri(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new lf("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = E)));
    }
    fh(d, t);
  });
}
function Bo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Do(e, n)),
      s != null && r.unshift(Bo(e, s, o)),
      (s = Do(e, t)),
      s != null && r.push(Bo(e, s, o))),
      (e = e.return);
  }
  return r;
}
function ur(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      c = a.alternate,
      u = a.stateNode;
    if (c !== null && c === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((c = Do(n, s)), c != null && i.unshift(Bo(n, c, a)))
        : o || ((c = Do(n, s)), c != null && i.push(Bo(n, c, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Hx = /\r\n?/g,
  Wx = /\u0000|\uFFFD/g;
function bf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hx,
      `
`
    )
    .replace(Wx, "");
}
function Ms(e, t, n) {
  if (((t = bf(t)), bf(e) !== t && n)) throw Error(O(425));
}
function Pi() {}
var tc = null,
  nc = null;
function rc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var oc = typeof setTimeout == "function" ? setTimeout : void 0,
  Kx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $f = typeof Promise == "function" ? Promise : void 0,
  Gx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $f < "u"
      ? function (e) {
          return $f.resolve(null).then(e).catch(Yx);
        }
      : oc;
function Yx(e) {
  setTimeout(function () {
    throw e;
  });
}
function il(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Io(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Io(t);
}
function bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qr = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + Qr,
  Uo = "__reactProps$" + Qr,
  Yt = "__reactContainer$" + Qr,
  sc = "__reactEvents$" + Qr,
  Qx = "__reactListeners$" + Qr,
  Xx = "__reactHandles$" + Qr;
function Un(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sf(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = Sf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ss(e) {
  return (
    (e = e[kt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function ia(e) {
  return e[Uo] || null;
}
var ic = [],
  $r = -1;
function An(e) {
  return { current: e };
}
function de(e) {
  0 > $r || ((e.current = ic[$r]), (ic[$r] = null), $r--);
}
function le(e, t) {
  $r++, (ic[$r] = e.current), (e.current = t);
}
var kn = {},
  Le = An(kn),
  Ge = An(!1),
  Qn = kn;
function Ir(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function _i() {
  de(Ge), de(Le);
}
function Ef(e, t, n) {
  if (Le.current !== kn) throw Error(O(168));
  le(Le, t), le(Ge, n);
}
function mh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, Dy(e) || "Unknown", o));
  return ve({}, n, r);
}
function ki(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kn),
    (Qn = Le.current),
    le(Le, e),
    le(Ge, Ge.current),
    !0
  );
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = mh(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(Ge),
      de(Le),
      le(Le, e))
    : de(Ge),
    le(Ge, n);
}
var Bt = null,
  aa = !1,
  al = !1;
function hh(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function qx(e) {
  (aa = !0), hh(e);
}
function Mn() {
  if (!al && Bt !== null) {
    al = !0;
    var e = 0,
      t = se;
    try {
      var n = Bt;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (aa = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), zm(lu, Mn), o);
    } finally {
      (se = t), (al = !1);
    }
  }
  return null;
}
var Sr = [],
  Er = 0,
  Ni = null,
  Ti = 0,
  at = [],
  lt = 0,
  Xn = null,
  Vt = 1,
  Ht = "";
function Fn(e, t) {
  (Sr[Er++] = Ti), (Sr[Er++] = Ni), (Ni = e), (Ti = t);
}
function gh(e, t, n) {
  (at[lt++] = Vt), (at[lt++] = Ht), (at[lt++] = Xn), (Xn = e);
  var r = Vt;
  e = Ht;
  var o = 32 - wt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - wt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Vt = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (Ht = s + e);
  } else (Vt = (1 << s) | (n << o) | r), (Ht = e);
}
function vu(e) {
  e.return !== null && (Fn(e, 1), gh(e, 1, 0));
}
function yu(e) {
  for (; e === Ni; )
    (Ni = Sr[--Er]), (Sr[Er] = null), (Ti = Sr[--Er]), (Sr[Er] = null);
  for (; e === Xn; )
    (Xn = at[--lt]),
      (at[lt] = null),
      (Ht = at[--lt]),
      (at[lt] = null),
      (Vt = at[--lt]),
      (at[lt] = null);
}
var Ze = null,
  Je = null,
  pe = !1,
  xt = null;
function vh(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Je = bn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xn !== null ? { id: Vt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lc(e) {
  if (pe) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Rf(e, t)) {
        if (ac(e)) throw Error(O(418));
        t = bn(n.nextSibling);
        var r = Ze;
        t && Rf(e, t)
          ? vh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (Ze = e));
      }
    } else {
      if (ac(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (Ze = e);
    }
  }
}
function Pf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function Is(e) {
  if (e !== Ze) return !1;
  if (!pe) return Pf(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !rc(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (ac(e)) throw (yh(), Error(O(418)));
    for (; t; ) vh(e, t), (t = bn(t.nextSibling));
  }
  if ((Pf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = bn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Ze ? bn(e.stateNode.nextSibling) : null;
  return !0;
}
function yh() {
  for (var e = Je; e; ) e = bn(e.nextSibling);
}
function Lr() {
  (Je = Ze = null), (pe = !1);
}
function xu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Jx = tn.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Oi = An(null),
  ji = null,
  Cr = null,
  wu = null;
function bu() {
  wu = Cr = ji = null;
}
function $u(e) {
  var t = Oi.current;
  de(Oi), (e._currentValue = t);
}
function cc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (ji = e),
    (wu = Cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cr === null)) {
      if (ji === null) throw Error(O(308));
      (Cr = e), (ji.dependencies = { lanes: 0, firstContext: e });
    } else Cr = Cr.next = e;
  return t;
}
var Vn = null;
function Su(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
function xh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Su(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Su(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
function _f(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Di(e, t, n, r) {
  var o = e.updateQueue;
  fn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var c = a,
      u = c.next;
    (c.next = null), i === null ? (s = u) : (i.next = u), (i = c);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var d = o.baseState;
    (i = 0), (f = u = c = null), (a = s);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((h = t), (x = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(x, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (h = typeof v == "function" ? v.call(x, d, h) : v),
                h == null)
              )
                break e;
              d = ve({}, d, h);
              break e;
            case 2:
              fn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = x), (c = d)) : (f = f.next = x),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (c = d),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (Jn |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function kf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var bh = new xm.Component().refs;
function uc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var la = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = En(e),
      s = Wt(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = $n(e, s, o)),
      t !== null && (bt(t, e, o, r), oi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      o = En(e),
      s = Wt(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = $n(e, s, o)),
      t !== null && (bt(t, e, o, r), oi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = En(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = $n(e, o, r)),
      t !== null && (bt(t, e, r, n), oi(t, e, r));
  },
};
function Nf(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fo(n, r) || !Fo(o, s)
      : !0
  );
}
function $h(e, t, n) {
  var r = !1,
    o = kn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((o = Ye(t) ? Qn : Le.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Ir(e, o) : kn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = la),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Tf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && la.enqueueReplaceState(t, t.state, null);
}
function dc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = bh), Eu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = ft(s))
    : ((s = Ye(t) ? Qn : Le.current), (o.context = Ir(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (uc(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && la.enqueueReplaceState(o, o.state, null),
      Di(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function co(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === bh && (a = o.refs = {}),
              i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Of(e) {
  var t = e._init;
  return t(e._payload);
}
function Sh(e) {
  function t(y, m) {
    if (e) {
      var w = y.deletions;
      w === null ? ((y.deletions = [m]), (y.flags |= 16)) : w.push(m);
    }
  }
  function n(y, m) {
    if (!e) return null;
    for (; m !== null; ) t(y, m), (m = m.sibling);
    return null;
  }
  function r(y, m) {
    for (y = new Map(); m !== null; )
      m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling);
    return y;
  }
  function o(y, m) {
    return (y = Cn(y, m)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, m, w) {
    return (
      (y.index = w),
      e
        ? ((w = y.alternate),
          w !== null
            ? ((w = w.index), w < m ? ((y.flags |= 2), m) : w)
            : ((y.flags |= 2), m))
        : ((y.flags |= 1048576), m)
    );
  }
  function i(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, w, $) {
    return m === null || m.tag !== 6
      ? ((m = ml(w, y.mode, $)), (m.return = y), m)
      : ((m = o(m, w)), (m.return = y), m);
  }
  function c(y, m, w, $) {
    var S = w.type;
    return S === vr
      ? f(y, m, w.props.children, $, w.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === dn &&
            Of(S) === m.type))
      ? (($ = o(m, w.props)), ($.ref = co(y, m, w)), ($.return = y), $)
      : (($ = ui(w.type, w.key, w.props, null, y.mode, $)),
        ($.ref = co(y, m, w)),
        ($.return = y),
        $);
  }
  function u(y, m, w, $) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== w.containerInfo ||
      m.stateNode.implementation !== w.implementation
      ? ((m = hl(w, y.mode, $)), (m.return = y), m)
      : ((m = o(m, w.children || [])), (m.return = y), m);
  }
  function f(y, m, w, $, S) {
    return m === null || m.tag !== 7
      ? ((m = Gn(w, y.mode, $, S)), (m.return = y), m)
      : ((m = o(m, w)), (m.return = y), m);
  }
  function d(y, m, w) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ml("" + m, y.mode, w)), (m.return = y), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ps:
          return (
            (w = ui(m.type, m.key, m.props, null, y.mode, w)),
            (w.ref = co(y, null, m)),
            (w.return = y),
            w
          );
        case gr:
          return (m = hl(m, y.mode, w)), (m.return = y), m;
        case dn:
          var $ = m._init;
          return d(y, $(m._payload), w);
      }
      if (vo(m) || oo(m))
        return (m = Gn(m, y.mode, w, null)), (m.return = y), m;
      Ls(y, m);
    }
    return null;
  }
  function h(y, m, w, $) {
    var S = m !== null ? m.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return S !== null ? null : a(y, m, "" + w, $);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ps:
          return w.key === S ? c(y, m, w, $) : null;
        case gr:
          return w.key === S ? u(y, m, w, $) : null;
        case dn:
          return (S = w._init), h(y, m, S(w._payload), $);
      }
      if (vo(w) || oo(w)) return S !== null ? null : f(y, m, w, $, null);
      Ls(y, w);
    }
    return null;
  }
  function x(y, m, w, $, S) {
    if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
      return (y = y.get(w) || null), a(m, y, "" + $, S);
    if (typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case Ps:
          return (y = y.get($.key === null ? w : $.key) || null), c(m, y, $, S);
        case gr:
          return (y = y.get($.key === null ? w : $.key) || null), u(m, y, $, S);
        case dn:
          var C = $._init;
          return x(y, m, w, C($._payload), S);
      }
      if (vo($) || oo($)) return (y = y.get(w) || null), f(m, y, $, S, null);
      Ls(m, $);
    }
    return null;
  }
  function v(y, m, w, $) {
    for (
      var S = null, C = null, E = m, R = (m = 0), L = null;
      E !== null && R < w.length;
      R++
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var M = h(y, E, w[R], $);
      if (M === null) {
        E === null && (E = L);
        break;
      }
      e && E && M.alternate === null && t(y, E),
        (m = s(M, m, R)),
        C === null ? (S = M) : (C.sibling = M),
        (C = M),
        (E = L);
    }
    if (R === w.length) return n(y, E), pe && Fn(y, R), S;
    if (E === null) {
      for (; R < w.length; R++)
        (E = d(y, w[R], $)),
          E !== null &&
            ((m = s(E, m, R)), C === null ? (S = E) : (C.sibling = E), (C = E));
      return pe && Fn(y, R), S;
    }
    for (E = r(y, E); R < w.length; R++)
      (L = x(E, y, R, w[R], $)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? R : L.key),
          (m = s(L, m, R)),
          C === null ? (S = L) : (C.sibling = L),
          (C = L));
    return (
      e &&
        E.forEach(function (H) {
          return t(y, H);
        }),
      pe && Fn(y, R),
      S
    );
  }
  function g(y, m, w, $) {
    var S = oo(w);
    if (typeof S != "function") throw Error(O(150));
    if (((w = S.call(w)), w == null)) throw Error(O(151));
    for (
      var C = (S = null), E = m, R = (m = 0), L = null, M = w.next();
      E !== null && !M.done;
      R++, M = w.next()
    ) {
      E.index > R ? ((L = E), (E = null)) : (L = E.sibling);
      var H = h(y, E, M.value, $);
      if (H === null) {
        E === null && (E = L);
        break;
      }
      e && E && H.alternate === null && t(y, E),
        (m = s(H, m, R)),
        C === null ? (S = H) : (C.sibling = H),
        (C = H),
        (E = L);
    }
    if (M.done) return n(y, E), pe && Fn(y, R), S;
    if (E === null) {
      for (; !M.done; R++, M = w.next())
        (M = d(y, M.value, $)),
          M !== null &&
            ((m = s(M, m, R)), C === null ? (S = M) : (C.sibling = M), (C = M));
      return pe && Fn(y, R), S;
    }
    for (E = r(y, E); !M.done; R++, M = w.next())
      (M = x(E, y, R, M.value, $)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? R : M.key),
          (m = s(M, m, R)),
          C === null ? (S = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        E.forEach(function (j) {
          return t(y, j);
        }),
      pe && Fn(y, R),
      S
    );
  }
  function b(y, m, w, $) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === vr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ps:
          e: {
            for (var S = w.key, C = m; C !== null; ) {
              if (C.key === S) {
                if (((S = w.type), S === vr)) {
                  if (C.tag === 7) {
                    n(y, C.sibling),
                      (m = o(C, w.props.children)),
                      (m.return = y),
                      (y = m);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === dn &&
                    Of(S) === C.type)
                ) {
                  n(y, C.sibling),
                    (m = o(C, w.props)),
                    (m.ref = co(y, C, w)),
                    (m.return = y),
                    (y = m);
                  break e;
                }
                n(y, C);
                break;
              } else t(y, C);
              C = C.sibling;
            }
            w.type === vr
              ? ((m = Gn(w.props.children, y.mode, $, w.key)),
                (m.return = y),
                (y = m))
              : (($ = ui(w.type, w.key, w.props, null, y.mode, $)),
                ($.ref = co(y, m, w)),
                ($.return = y),
                (y = $));
          }
          return i(y);
        case gr:
          e: {
            for (C = w.key; m !== null; ) {
              if (m.key === C)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === w.containerInfo &&
                  m.stateNode.implementation === w.implementation
                ) {
                  n(y, m.sibling),
                    (m = o(m, w.children || [])),
                    (m.return = y),
                    (y = m);
                  break e;
                } else {
                  n(y, m);
                  break;
                }
              else t(y, m);
              m = m.sibling;
            }
            (m = hl(w, y.mode, $)), (m.return = y), (y = m);
          }
          return i(y);
        case dn:
          return (C = w._init), b(y, m, C(w._payload), $);
      }
      if (vo(w)) return v(y, m, w, $);
      if (oo(w)) return g(y, m, w, $);
      Ls(y, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        m !== null && m.tag === 6
          ? (n(y, m.sibling), (m = o(m, w)), (m.return = y), (y = m))
          : (n(y, m), (m = ml(w, y.mode, $)), (m.return = y), (y = m)),
        i(y))
      : n(y, m);
  }
  return b;
}
var Fr = Sh(!0),
  Eh = Sh(!1),
  is = {},
  jt = An(is),
  Vo = An(is),
  Ho = An(is);
function Hn(e) {
  if (e === is) throw Error(O(174));
  return e;
}
function Cu(e, t) {
  switch ((le(Ho, t), le(Vo, e), le(jt, is), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vl(t, e));
  }
  de(jt), le(jt, t);
}
function zr() {
  de(jt), de(Vo), de(Ho);
}
function Ch(e) {
  Hn(Ho.current);
  var t = Hn(jt.current),
    n = Vl(t, e.type);
  t !== n && (le(Vo, e), le(jt, n));
}
function Ru(e) {
  Vo.current === e && (de(jt), de(Vo));
}
var he = An(0);
function Ai(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ll = [];
function Pu() {
  for (var e = 0; e < ll.length; e++)
    ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var si = tn.ReactCurrentDispatcher,
  cl = tn.ReactCurrentBatchConfig,
  qn = 0,
  ge = null,
  Ce = null,
  _e = null,
  Mi = !1,
  Co = !1,
  Wo = 0,
  Zx = 0;
function Ae() {
  throw Error(O(321));
}
function _u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, o, s) {
  if (
    ((qn = s),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (si.current = e === null || e.memoizedState === null ? rw : ow),
    (e = n(r, o)),
    Co)
  ) {
    s = 0;
    do {
      if (((Co = !1), (Wo = 0), 25 <= s)) throw Error(O(301));
      (s += 1),
        (_e = Ce = null),
        (t.updateQueue = null),
        (si.current = sw),
        (e = n(r, o));
    } while (Co);
  }
  if (
    ((si.current = Ii),
    (t = Ce !== null && Ce.next !== null),
    (qn = 0),
    (_e = Ce = ge = null),
    (Mi = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Nu() {
  var e = Wo !== 0;
  return (Wo = 0), e;
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (ge.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function pt() {
  if (Ce === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = _e === null ? ge.memoizedState : _e.next;
  if (t !== null) (_e = t), (Ce = e);
  else {
    if (e === null) throw Error(O(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      _e === null ? (ge.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function Ko(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ul(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var a = (i = null),
      c = null,
      u = s;
    do {
      var f = u.lane;
      if ((qn & f) === f)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((a = c = d), (i = r)) : (c = c.next = d),
          (ge.lanes |= f),
          (Jn |= f);
      }
      u = u.next;
    } while (u !== null && u !== s);
    c === null ? (i = r) : (c.next = a),
      Et(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (ge.lanes |= s), (Jn |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dl(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    Et(s, t.memoizedState) || (Ke = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Rh() {}
function Ph(e, t) {
  var n = ge,
    r = pt(),
    o = t(),
    s = !Et(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Ke = !0)),
    (r = r.queue),
    Tu(Nh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Go(9, kh.bind(null, n, r, o, t), void 0, null),
      ke === null)
    )
      throw Error(O(349));
    qn & 30 || _h(n, t, o);
  }
  return o;
}
function _h(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Th(t) && Oh(e);
}
function Nh(e, t, n) {
  return n(function () {
    Th(t) && Oh(e);
  });
}
function Th(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function Oh(e) {
  var t = Qt(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function jf(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ko,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nw.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function Go(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jh() {
  return pt().memoizedState;
}
function ii(e, t, n, r) {
  var o = _t();
  (ge.flags |= e),
    (o.memoizedState = Go(1 | t, n, void 0, r === void 0 ? null : r));
}
function ca(e, t, n, r) {
  var o = pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ce !== null) {
    var i = Ce.memoizedState;
    if (((s = i.destroy), r !== null && _u(r, i.deps))) {
      o.memoizedState = Go(t, n, s, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = Go(1 | t, n, s, r));
}
function Df(e, t) {
  return ii(8390656, 8, e, t);
}
function Tu(e, t) {
  return ca(2048, 8, e, t);
}
function Dh(e, t) {
  return ca(4, 2, e, t);
}
function Ah(e, t) {
  return ca(4, 4, e, t);
}
function Mh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ih(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ca(4, 4, Mh.bind(null, t, e), n)
  );
}
function Ou() {}
function Lh(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fh(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zh(e, t, n) {
  return qn & 21
    ? (Et(n, t) || ((n = Vm()), (ge.lanes |= n), (Jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function ew(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cl.transition;
  cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (cl.transition = r);
  }
}
function Bh() {
  return pt().memoizedState;
}
function tw(e, t, n) {
  var r = En(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Uh(e))
  )
    Vh(t, n);
  else if (((n = xh(e, t, n, r)), n !== null)) {
    var o = Be();
    bt(n, e, r, o), Hh(n, t, r);
  }
}
function nw(e, t, n) {
  var r = En(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uh(e)) Vh(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Et(a, i))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Su(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = xh(e, t, o, r)),
      n !== null && ((o = Be()), bt(n, e, r, o), Hh(n, t, r));
  }
}
function Uh(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Vh(e, t) {
  Co = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
var Ii = {
    readContext: ft,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  rw = {
    readContext: ft,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: Df,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ii(4194308, 4, Mh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = tw.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: jf,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = jf(!1),
        t = e[0];
      return (e = ew.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        o = _t();
      if (pe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(O(349));
        qn & 30 || _h(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        Df(Nh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Go(9, kh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = ke.identifierPrefix;
      if (pe) {
        var n = Ht,
          r = Vt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ow = {
    readContext: ft,
    useCallback: Lh,
    useContext: ft,
    useEffect: Tu,
    useImperativeHandle: Ih,
    useInsertionEffect: Dh,
    useLayoutEffect: Ah,
    useMemo: Fh,
    useReducer: ul,
    useRef: jh,
    useState: function () {
      return ul(Ko);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = pt();
      return zh(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = ul(Ko)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rh,
    useSyncExternalStore: Ph,
    useId: Bh,
    unstable_isNewReconciler: !1,
  },
  sw = {
    readContext: ft,
    useCallback: Lh,
    useContext: ft,
    useEffect: Tu,
    useImperativeHandle: Ih,
    useInsertionEffect: Dh,
    useLayoutEffect: Ah,
    useMemo: Fh,
    useReducer: dl,
    useRef: jh,
    useState: function () {
      return dl(Ko);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = pt();
      return Ce === null ? (t.memoizedState = e) : zh(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = dl(Ko)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rh,
    useSyncExternalStore: Ph,
    useId: Bh,
    unstable_isNewReconciler: !1,
  };
function Br(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var iw = typeof WeakMap == "function" ? WeakMap : Map;
function Wh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fi || ((Fi = !0), ($c = r)), fc(e, t);
    }),
    n
  );
}
function Kh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        fc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        fc(e, t),
          typeof r != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new iw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ww.bind(null, e, t, n)), t.then(e, e));
}
function Mf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function If(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), $n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var aw = tn.ReactCurrentOwner,
  Ke = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Eh(t, null, n, r) : Fr(t, e.child, n, r);
}
function Lf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Or(t, o),
    (r = ku(e, t, n, r, s, o)),
    (n = Nu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (pe && n && vu(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function Ff(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !zu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Gh(e, t, s, r, o))
      : ((e = ui(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fo), n(i, r) && e.ref === t.ref)
    )
      return Xt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Cn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gh(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Fo(s, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Xt(e, t, o);
  }
  return pc(e, t, n, r, o);
}
function Yh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(Pr, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(Pr, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        le(Pr, Xe),
        (Xe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(Pr, Xe),
      (Xe |= r);
  return ze(e, t, o, n), t.child;
}
function Qh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, n, r, o) {
  var s = Ye(n) ? Qn : Le.current;
  return (
    (s = Ir(t, s)),
    Or(t, o),
    (n = ku(e, t, n, r, s, o)),
    (r = Nu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xt(e, t, o))
      : (pe && r && vu(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function zf(e, t, n, r, o) {
  if (Ye(n)) {
    var s = !0;
    ki(t);
  } else s = !1;
  if ((Or(t, o), t.stateNode === null))
    ai(e, t), $h(t, n, r), dc(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Ye(n) ? Qn : Le.current), (u = Ir(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || c !== u) && Tf(t, i, r, u)),
      (fn = !1);
    var h = t.memoizedState;
    (i.state = h),
      Di(t, r, i, o),
      (c = t.memoizedState),
      a !== r || h !== c || Ge.current || fn
        ? (typeof f == "function" && (uc(t, n, f, r), (c = t.memoizedState)),
          (a = fn || Nf(t, n, a, r, h, c, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      wh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : vt(t.type, a)),
      (i.props = u),
      (d = t.pendingProps),
      (h = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = ft(c))
        : ((c = Ye(n) ? Qn : Le.current), (c = Ir(t, c)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== d || h !== c) && Tf(t, i, r, c)),
      (fn = !1),
      (h = t.memoizedState),
      (i.state = h),
      Di(t, r, i, o);
    var v = t.memoizedState;
    a !== d || h !== v || Ge.current || fn
      ? (typeof x == "function" && (uc(t, n, x, r), (v = t.memoizedState)),
        (u = fn || Nf(t, n, u, r, h, v, c) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mc(e, t, n, r, s, o);
}
function mc(e, t, n, r, o, s) {
  Qh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Cf(t, n, !1), Xt(e, t, s);
  (r = t.stateNode), (aw.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Fr(t, e.child, null, s)), (t.child = Fr(t, null, a, s)))
      : ze(e, t, a, s),
    (t.memoizedState = r.state),
    o && Cf(t, n, !0),
    t.child
  );
}
function Xh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ef(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ef(e, t.context, !1),
    Cu(e, t.containerInfo);
}
function Bf(e, t, n, r, o) {
  return Lr(), xu(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qh(e, t, n) {
  var r = t.pendingProps,
    o = he.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(he, o & 1),
    e === null)
  )
    return (
      lc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = fa(i, r, 0, null)),
              (e = Gn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = gc(n)),
              (t.memoizedState = hc),
              e)
            : ju(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return lw(e, t, i, r, a, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Cn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = Cn(a, s)) : ((s = Gn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? gc(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = hc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Cn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ju(e, t) {
  return (
    (t = fa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fs(e, t, n, r) {
  return (
    r !== null && xu(r),
    Fr(t, e.child, null, n),
    (e = ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lw(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fl(Error(O(422)))), Fs(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = fa({ mode: "visible", children: r.children }, o, 0, null)),
        (s = Gn(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Fr(t, e.child, null, i),
        (t.child.memoizedState = gc(i)),
        (t.memoizedState = hc),
        s);
  if (!(t.mode & 1)) return Fs(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(O(419))), (r = fl(s, r, void 0)), Fs(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ke || a)) {
    if (((r = ke), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Qt(e, o), bt(r, e, o, -1));
    }
    return Fu(), (r = fl(Error(O(421)))), Fs(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Je = bn(o.nextSibling)),
      (Ze = t),
      (pe = !0),
      (xt = null),
      e !== null &&
        ((at[lt++] = Vt),
        (at[lt++] = Ht),
        (at[lt++] = Xn),
        (Vt = e.id),
        (Ht = e.overflow),
        (Xn = t)),
      (t = ju(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cc(e.return, t, n);
}
function pl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Jh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((ze(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, n, t);
        else if (e.tag === 19) Uf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ai(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pl(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ai(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pl(t, !0, n, null, s);
        break;
      case "together":
        pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ai(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cw(e, t, n) {
  switch (t.tag) {
    case 3:
      Xh(t), Lr();
      break;
    case 5:
      Ch(t);
      break;
    case 1:
      Ye(t.type) && ki(t);
      break;
    case 4:
      Cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      le(Oi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qh(e, t, n)
          : (le(he, he.current & 1),
            (e = Xt(e, t, n)),
            e !== null ? e.sibling : null);
      le(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yh(e, t, n);
  }
  return Xt(e, t, n);
}
var Zh, vc, eg, tg;
Zh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vc = function () {};
eg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(jt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Fl(e, o)), (r = Fl(e, r)), (s = []);
        break;
      case "select":
        (o = ve({}, o, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = Ul(e, o)), (r = Ul(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Pi);
    }
    Hl(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Oo.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== a && (c != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                a[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (a = a ? a.__html : void 0),
              c != null && a !== c && (s = s || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (s = s || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Oo.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && ue("scroll", e),
                  s || a === c || (s = []))
                : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function uo(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function uw(e, t, n) {
  var r = t.pendingProps;
  switch ((yu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return Ye(t.type) && _i(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zr(),
        de(Ge),
        de(Le),
        Pu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Is(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (Cc(xt), (xt = null)))),
        vc(e, t),
        Me(t),
        null
      );
    case 5:
      Ru(t);
      var o = Hn(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        eg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Me(t), null;
        }
        if (((e = Hn(jt.current)), Is(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[kt] = t), (r[Uo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < xo.length; o++) ue(xo[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              Xd(r, s), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              Jd(r, s), ue("invalid", r);
          }
          Hl(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Oo.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              _s(r), qd(r, s, !0);
              break;
            case "textarea":
              _s(r), Zd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Pi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _m(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[kt] = t),
            (e[Uo] = r),
            Zh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Wl(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < xo.length; o++) ue(xo[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = r);
                break;
              case "details":
                ue("toggle", e), (o = r);
                break;
              case "input":
                Xd(e, r), (o = Fl(e, r)), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ve({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                Jd(e, r), (o = Ul(e, r)), ue("invalid", e);
                break;
              default:
                o = r;
            }
            Hl(n, o), (a = o);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var c = a[s];
                s === "style"
                  ? Tm(e, c)
                  : s === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && km(e, c))
                  : s === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && jo(e, c)
                    : typeof c == "number" && jo(e, "" + c)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Oo.hasOwnProperty(s)
                      ? c != null && s === "onScroll" && ue("scroll", e)
                      : c != null && ru(e, s, c, i));
              }
            switch (n) {
              case "input":
                _s(e), qd(e, r, !1);
                break;
              case "textarea":
                _s(e), Zd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? _r(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      _r(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) tg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Hn(Ho.current)), Hn(jt.current), Is(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (s = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (de(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && Je !== null && t.mode & 1 && !(t.flags & 128))
          yh(), Lr(), (t.flags |= 98560), (s = !1);
        else if (((s = Is(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(O(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(O(317));
            s[kt] = t;
          } else
            Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (s = !1);
        } else xt !== null && (Cc(xt), (xt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? Re === 0 && (Re = 3) : Fu())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        zr(), vc(e, t), e === null && zo(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return $u(t.type._context), Me(t), null;
    case 17:
      return Ye(t.type) && _i(), Me(t), null;
    case 19:
      if ((de(he), (s = t.memoizedState), s === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) uo(s, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ai(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    uo(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            we() > Ur &&
            ((t.flags |= 128), (r = !0), uo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ai(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              uo(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !pe)
            )
              return Me(t), null;
          } else
            2 * we() - s.renderingStartTime > Ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), uo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = we()),
          (t.sibling = null),
          (n = he.current),
          le(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function dw(e, t) {
  switch ((yu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && _i(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zr(),
        de(Ge),
        de(Le),
        Pu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ru(t), null;
    case 13:
      if (
        (de(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(he), null;
    case 4:
      return zr(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return Lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zs = !1,
  Ie = !1,
  fw = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function yc(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var Vf = !1;
function pw(e, t) {
  if (((tc = Ei), (e = sh()), gu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            c = -1,
            u = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = i + o),
                d !== s || (r !== 0 && d.nodeType !== 3) || (c = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (x = d.firstChild) !== null;

            )
              (h = d), (d = x);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (a = i),
                h === s && ++f === r && (c = i),
                (x = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = x;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nc = { focusedElem: e, selectionRange: n }, Ei = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    b = v.memoizedState,
                    y = t.stateNode,
                    m = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : vt(t.type, g),
                      b
                    );
                  y.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch ($) {
          xe(t, t.return, $);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = Vf), (Vf = !1), v;
}
function Ro(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && yc(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ua(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ng(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ng(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[Uo], delete t[sc], delete t[Qx], delete t[Xx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Pi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wc(e, t, n), e = e.sibling; e !== null; ) wc(e, t, n), (e = e.sibling);
}
function bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
}
var Ne = null,
  yt = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) og(e, t, n), (n = n.sibling);
}
function og(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function")
    try {
      Ot.onCommitFiberUnmount(na, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Rr(n, t);
    case 6:
      var r = Ne,
        o = yt;
      (Ne = null),
        sn(e, t, n),
        (Ne = r),
        (yt = o),
        Ne !== null &&
          (yt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (yt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? il(e.parentNode, n)
              : e.nodeType === 1 && il(e, n),
            Io(e))
          : il(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (o = yt),
        (Ne = n.stateNode.containerInfo),
        (yt = !0),
        sn(e, t, n),
        (Ne = r),
        (yt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && yc(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          xe(n, t, a);
        }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), sn(e, t, n), (Ie = r))
        : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function Wf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fw()),
      t.forEach(function (r) {
        var o = $w.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (yt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (yt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(O(160));
        og(s, i, o), (Ne = null), (yt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        xe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sg(t, e), (t = t.sibling);
}
function sg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(t, e), Pt(e), r & 4)) {
        try {
          Ro(3, e, e.return), ua(3, e);
        } catch (g) {
          xe(e, e.return, g);
        }
        try {
          Ro(5, e, e.return);
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 1:
      gt(t, e), Pt(e), r & 512 && n !== null && Rr(n, n.return);
      break;
    case 5:
      if (
        (gt(t, e),
        Pt(e),
        r & 512 && n !== null && Rr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          jo(o, "");
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Rm(o, s),
              Wl(a, i);
            var u = Wl(a, s);
            for (i = 0; i < c.length; i += 2) {
              var f = c[i],
                d = c[i + 1];
              f === "style"
                ? Tm(o, d)
                : f === "dangerouslySetInnerHTML"
                ? km(o, d)
                : f === "children"
                ? jo(o, d)
                : ru(o, f, d, u);
            }
            switch (a) {
              case "input":
                zl(o, s);
                break;
              case "textarea":
                Pm(o, s);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? _r(o, !!s.multiple, x, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? _r(o, !!s.multiple, s.defaultValue, !0)
                      : _r(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Uo] = s;
          } catch (g) {
            xe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((gt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (g) {
          xe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (gt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Io(t.containerInfo);
        } catch (g) {
          xe(e, e.return, g);
        }
      break;
    case 4:
      gt(t, e), Pt(e);
      break;
    case 13:
      gt(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Mu = we())),
        r & 4 && Wf(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (u = Ie) || f), gt(t, e), (Ie = u)) : gt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (F = e, f = e.child; f !== null; ) {
            for (d = F = f; F !== null; ) {
              switch (((h = F), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ro(4, h, h.return);
                  break;
                case 1:
                  Rr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      xe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Rr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Gf(d);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (F = x)) : Gf(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (c = d.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (a.style.display = Nm("display", i)));
              } catch (g) {
                xe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                xe(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      gt(t, e), Pt(e), r & 4 && Wf(e);
      break;
    case 21:
      break;
    default:
      gt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (jo(o, ""), (r.flags &= -33));
          var s = Hf(e);
          bc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Hf(e);
          wc(e, a, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (c) {
      xe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mw(e, t, n) {
  (F = e), ig(e);
}
function ig(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || zs;
      if (!i) {
        var a = o.alternate,
          c = (a !== null && a.memoizedState !== null) || Ie;
        a = zs;
        var u = Ie;
        if (((zs = i), (Ie = c) && !u))
          for (F = o; F !== null; )
            (i = F),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Yf(o)
                : c !== null
                ? ((c.return = i), (F = c))
                : Yf(o);
        for (; s !== null; ) (F = s), ig(s), (s = s.sibling);
        (F = o), (zs = a), (Ie = u);
      }
      Kf(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (F = s)) : Kf(e);
  }
}
function Kf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || ua(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && kf(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                kf(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Io(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ie || (t.flags & 512 && xc(t));
      } catch (h) {
        xe(t, t.return, h);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Gf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Yf(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ua(4, t);
          } catch (c) {
            xe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              xe(t, o, c);
            }
          }
          var s = t.return;
          try {
            xc(t);
          } catch (c) {
            xe(t, s, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            xc(t);
          } catch (c) {
            xe(t, i, c);
          }
      }
    } catch (c) {
      xe(t, t.return, c);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var hw = Math.ceil,
  Li = tn.ReactCurrentDispatcher,
  Du = tn.ReactCurrentOwner,
  ut = tn.ReactCurrentBatchConfig,
  Z = 0,
  ke = null,
  $e = null,
  Te = 0,
  Xe = 0,
  Pr = An(0),
  Re = 0,
  Yo = null,
  Jn = 0,
  da = 0,
  Au = 0,
  Po = null,
  We = null,
  Mu = 0,
  Ur = 1 / 0,
  Ft = null,
  Fi = !1,
  $c = null,
  Sn = null,
  Bs = !1,
  gn = null,
  zi = 0,
  _o = 0,
  Sc = null,
  li = -1,
  ci = 0;
function Be() {
  return Z & 6 ? we() : li !== -1 ? li : (li = we());
}
function En(e) {
  return e.mode & 1
    ? Z & 2 && Te !== 0
      ? Te & -Te
      : Jx.transition !== null
      ? (ci === 0 && (ci = Vm()), ci)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xm(e.type))),
        e)
    : 1;
}
function bt(e, t, n, r) {
  if (50 < _o) throw ((_o = 0), (Sc = null), Error(O(185)));
  rs(e, n, r),
    (!(Z & 2) || e !== ke) &&
      (e === ke && (!(Z & 2) && (da |= n), Re === 4 && mn(e, Te)),
      Qe(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Ur = we() + 500), aa && Mn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  Jy(e, t);
  var r = Si(e, e === ke ? Te : 0);
  if (r === 0)
    n !== null && nf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nf(n), t === 1))
      e.tag === 0 ? qx(Qf.bind(null, e)) : hh(Qf.bind(null, e)),
        Gx(function () {
          !(Z & 6) && Mn();
        }),
        (n = null);
    else {
      switch (Hm(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = Bm;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = Um;
          break;
        default:
          n = $i;
      }
      n = mg(n, ag.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ag(e, t) {
  if (((li = -1), (ci = 0), Z & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (jr() && e.callbackNode !== n) return null;
  var r = Si(e, e === ke ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bi(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var s = cg();
    (ke !== e || Te !== t) && ((Ft = null), (Ur = we() + 500), Kn(e, t));
    do
      try {
        yw();
        break;
      } catch (a) {
        lg(e, a);
      }
    while (!0);
    bu(),
      (Li.current = s),
      (Z = o),
      $e !== null ? (t = 0) : ((ke = null), (Te = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = Ec(e, o)))), t === 1)
    )
      throw ((n = Yo), Kn(e, 0), mn(e, r), Qe(e, we()), n);
    if (t === 6) mn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !gw(o) &&
          ((t = Bi(e, r)),
          t === 2 && ((s = Xl(e)), s !== 0 && ((r = s), (t = Ec(e, s)))),
          t === 1))
      )
        throw ((n = Yo), Kn(e, 0), mn(e, r), Qe(e, we()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          zn(e, We, Ft);
          break;
        case 3:
          if (
            (mn(e, r), (r & 130023424) === r && ((t = Mu + 500 - we()), 10 < t))
          ) {
            if (Si(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = oc(zn.bind(null, e, We, Ft), t);
            break;
          }
          zn(e, We, Ft);
          break;
        case 4:
          if ((mn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - wt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = oc(zn.bind(null, e, We, Ft), r);
            break;
          }
          zn(e, We, Ft);
          break;
        case 5:
          zn(e, We, Ft);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Qe(e, we()), e.callbackNode === n ? ag.bind(null, e) : null;
}
function Ec(e, t) {
  var n = Po;
  return (
    e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
    (e = Bi(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && Cc(t)),
    e
  );
}
function Cc(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function gw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Et(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mn(e, t) {
  for (
    t &= ~Au,
      t &= ~da,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qf(e) {
  if (Z & 6) throw Error(O(327));
  jr();
  var t = Si(e, 0);
  if (!(t & 1)) return Qe(e, we()), null;
  var n = Bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xl(e);
    r !== 0 && ((t = r), (n = Ec(e, r)));
  }
  if (n === 1) throw ((n = Yo), Kn(e, 0), mn(e, t), Qe(e, we()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, We, Ft),
    Qe(e, we()),
    null
  );
}
function Iu(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Ur = we() + 500), aa && Mn());
  }
}
function Zn(e) {
  gn !== null && gn.tag === 0 && !(Z & 6) && jr();
  var t = Z;
  Z |= 1;
  var n = ut.transition,
    r = se;
  try {
    if (((ut.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (ut.transition = n), (Z = t), !(Z & 6) && Mn();
  }
}
function Lu() {
  (Xe = Pr.current), de(Pr);
}
function Kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kx(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var r = n;
      switch ((yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _i();
          break;
        case 3:
          zr(), de(Ge), de(Le), Pu();
          break;
        case 5:
          Ru(r);
          break;
        case 4:
          zr();
          break;
        case 13:
          de(he);
          break;
        case 19:
          de(he);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          Lu();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    ($e = e = Cn(e.current, null)),
    (Te = Xe = t),
    (Re = 0),
    (Yo = null),
    (Au = da = Jn = 0),
    (We = Po = null),
    Vn !== null)
  ) {
    for (t = 0; t < Vn.length; t++)
      if (((n = Vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Vn = null;
  }
  return e;
}
function lg(e, t) {
  do {
    var n = $e;
    try {
      if ((bu(), (si.current = Ii), Mi)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (
        ((qn = 0),
        (_e = Ce = ge = null),
        (Co = !1),
        (Wo = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (Yo = t), ($e = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          c = t;
        if (
          ((t = Te),
          (a.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = Mf(i);
          if (x !== null) {
            (x.flags &= -257),
              If(x, i, a, s, t),
              x.mode & 1 && Af(s, u, t),
              (t = x),
              (c = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(c), (t.updateQueue = g);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Af(s, u, t), Fu();
              break e;
            }
            c = Error(O(426));
          }
        } else if (pe && a.mode & 1) {
          var b = Mf(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              If(b, i, a, s, t),
              xu(Br(c, a));
            break e;
          }
        }
        (s = c = Br(c, a)),
          Re !== 4 && (Re = 2),
          Po === null ? (Po = [s]) : Po.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var y = Wh(s, c, t);
              _f(s, y);
              break e;
            case 1:
              a = c;
              var m = s.type,
                w = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(w))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var $ = Kh(s, a, t);
                _f(s, $);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      dg(n);
    } catch (S) {
      (t = S), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cg() {
  var e = Li.current;
  return (Li.current = Ii), e === null ? Ii : e;
}
function Fu() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    ke === null || (!(Jn & 268435455) && !(da & 268435455)) || mn(ke, Te);
}
function Bi(e, t) {
  var n = Z;
  Z |= 2;
  var r = cg();
  (ke !== e || Te !== t) && ((Ft = null), Kn(e, t));
  do
    try {
      vw();
      break;
    } catch (o) {
      lg(e, o);
    }
  while (!0);
  if ((bu(), (Z = n), (Li.current = r), $e !== null)) throw Error(O(261));
  return (ke = null), (Te = 0), Re;
}
function vw() {
  for (; $e !== null; ) ug($e);
}
function yw() {
  for (; $e !== null && !Vy(); ) ug($e);
}
function ug(e) {
  var t = pg(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? dg(e) : ($e = t),
    (Du.current = null);
}
function dg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dw(n, t)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), ($e = null);
        return;
      }
    } else if (((n = uw(n, t, Xe)), n !== null)) {
      $e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function zn(e, t, n) {
  var r = se,
    o = ut.transition;
  try {
    (ut.transition = null), (se = 1), xw(e, t, n, r);
  } finally {
    (ut.transition = o), (se = r);
  }
  return null;
}
function xw(e, t, n, r) {
  do jr();
  while (gn !== null);
  if (Z & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Zy(e, s),
    e === ke && (($e = ke = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      mg($i, function () {
        return jr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = ut.transition), (ut.transition = null);
    var i = se;
    se = 1;
    var a = Z;
    (Z |= 4),
      (Du.current = null),
      pw(e, n),
      sg(n, e),
      Fx(nc),
      (Ei = !!tc),
      (nc = tc = null),
      (e.current = n),
      mw(n),
      Hy(),
      (Z = a),
      (se = i),
      (ut.transition = s);
  } else e.current = n;
  if (
    (Bs && ((Bs = !1), (gn = e), (zi = o)),
    (s = e.pendingLanes),
    s === 0 && (Sn = null),
    Gy(n.stateNode),
    Qe(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fi) throw ((Fi = !1), (e = $c), ($c = null), e);
  return (
    zi & 1 && e.tag !== 0 && jr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Sc ? _o++ : ((_o = 0), (Sc = e))) : (_o = 0),
    Mn(),
    null
  );
}
function jr() {
  if (gn !== null) {
    var e = Hm(zi),
      t = ut.transition,
      n = se;
    try {
      if (((ut.transition = null), (se = 16 > e ? 16 : e), gn === null))
        var r = !1;
      else {
        if (((e = gn), (gn = null), (zi = 0), Z & 6)) throw Error(O(331));
        var o = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var s = F,
            i = s.child;
          if (F.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var c = 0; c < a.length; c++) {
                var u = a[c];
                for (F = u; F !== null; ) {
                  var f = F;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(8, f, s);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (F = d);
                  else
                    for (; F !== null; ) {
                      f = F;
                      var h = f.sibling,
                        x = f.return;
                      if ((ng(f), f === u)) {
                        F = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (F = h);
                        break;
                      }
                      F = x;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (F = i);
          else
            e: for (; F !== null; ) {
              if (((s = F), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ro(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (F = y);
                break e;
              }
              F = s.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          i = F;
          var w = i.child;
          if (i.subtreeFlags & 2064 && w !== null) (w.return = i), (F = w);
          else
            e: for (i = m; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ua(9, a);
                  }
                } catch (S) {
                  xe(a, a.return, S);
                }
              if (a === i) {
                F = null;
                break e;
              }
              var $ = a.sibling;
              if ($ !== null) {
                ($.return = a.return), (F = $);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((Z = o), Mn(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
        )
          try {
            Ot.onPostCommitFiberRoot(na, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (ut.transition = t);
    }
  }
  return !1;
}
function Xf(e, t, n) {
  (t = Br(n, t)),
    (t = Wh(e, t, 1)),
    (e = $n(e, t, 1)),
    (t = Be()),
    e !== null && (rs(e, 1, t), Qe(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) Xf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(r)))
        ) {
          (e = Br(n, e)),
            (e = Kh(t, e, 1)),
            (t = $n(t, e, 1)),
            (e = Be()),
            t !== null && (rs(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ww(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Te & n) === n &&
      (Re === 4 || (Re === 3 && (Te & 130023424) === Te && 500 > we() - Mu)
        ? Kn(e, 0)
        : (Au |= n)),
    Qe(e, t);
}
function fg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ts), (Ts <<= 1), !(Ts & 130023424) && (Ts = 4194304))
      : (t = 1));
  var n = Be();
  (e = Qt(e, t)), e !== null && (rs(e, t, n), Qe(e, n));
}
function bw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), fg(e, n);
}
function $w(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), fg(e, n);
}
var pg;
pg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), cw(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), pe && t.flags & 1048576 && gh(t, Ti, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ai(e, t), (e = t.pendingProps);
      var o = Ir(t, Le.current);
      Or(t, n), (o = ku(null, t, r, e, o, n));
      var s = Nu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((s = !0), ki(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Eu(t),
            (o.updater = la),
            (t.stateNode = o),
            (o._reactInternals = t),
            dc(t, r, e, n),
            (t = mc(null, t, r, !0, s, n)))
          : ((t.tag = 0), pe && s && vu(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ai(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ew(r)),
          (e = vt(r, e)),
          o)
        ) {
          case 0:
            t = pc(null, t, r, e, n);
            break e;
          case 1:
            t = zf(null, t, r, e, n);
            break e;
          case 11:
            t = Lf(null, t, r, e, n);
            break e;
          case 14:
            t = Ff(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        pc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        zf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Xh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          wh(e, t),
          Di(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = Br(Error(O(423)), t)), (t = Bf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Br(Error(O(424)), t)), (t = Bf(e, t, r, n, o));
            break e;
          } else
            for (
              Je = bn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                pe = !0,
                xt = null,
                n = Eh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Lr(), r === o)) {
            t = Xt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ch(t),
        e === null && lc(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        rc(r, o) ? (i = null) : s !== null && rc(r, s) && (t.flags |= 32),
        Qh(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && lc(t), null;
    case 13:
      return qh(e, t, n);
    case 4:
      return (
        Cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        Lf(e, t, r, o, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          le(Oi, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Et(s.value, i)) {
            if (s.children === o.children && !Ge.current) {
              t = Xt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var c = a.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = Wt(-1, n & -n)), (c.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (c.next = c)
                          : ((c.next = f.next), (f.next = c)),
                          (u.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      cc(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(O(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  cc(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (o = ft(o)),
        (r = r(o)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = vt(r, t.pendingProps)),
        (o = vt(r.type, o)),
        Ff(e, t, r, o, n)
      );
    case 15:
      return Gh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        ai(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), ki(t)) : (e = !1),
        Or(t, n),
        $h(t, r, o),
        dc(t, r, o, n),
        mc(null, t, r, !0, e, n)
      );
    case 19:
      return Jh(e, t, n);
    case 22:
      return Yh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function mg(e, t) {
  return zm(e, t);
}
function Sw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ct(e, t, n, r) {
  return new Sw(e, t, n, r);
}
function zu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ew(e) {
  if (typeof e == "function") return zu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === su)) return 11;
    if (e === iu) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ui(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) zu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case vr:
        return Gn(n.children, o, s, t);
      case ou:
        (i = 8), (o |= 8);
        break;
      case Al:
        return (
          (e = ct(12, n, t, o | 2)), (e.elementType = Al), (e.lanes = s), e
        );
      case Ml:
        return (e = ct(13, n, t, o)), (e.elementType = Ml), (e.lanes = s), e;
      case Il:
        return (e = ct(19, n, t, o)), (e.elementType = Il), (e.lanes = s), e;
      case Sm:
        return fa(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bm:
              i = 10;
              break e;
            case $m:
              i = 9;
              break e;
            case su:
              i = 11;
              break e;
            case iu:
              i = 14;
              break e;
            case dn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Gn(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function fa(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = Sm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ml(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function hl(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qa(0)),
    (this.expirationTimes = Qa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Bu(e, t, n, r, o, s, i, a, c) {
  return (
    (e = new Cw(e, t, n, a, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(s),
    e
  );
}
function Rw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function hg(e) {
  if (!e) return kn;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return mh(e, n, t);
  }
  return t;
}
function gg(e, t, n, r, o, s, i, a, c) {
  return (
    (e = Bu(n, r, !0, e, o, s, i, a, c)),
    (e.context = hg(null)),
    (n = e.current),
    (r = Be()),
    (o = En(n)),
    (s = Wt(r, o)),
    (s.callback = t ?? null),
    $n(n, s, o),
    (e.current.lanes = o),
    rs(e, o, r),
    Qe(e, r),
    e
  );
}
function pa(e, t, n, r) {
  var o = t.current,
    s = Be(),
    i = En(o);
  return (
    (n = hg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $n(o, t, i)),
    e !== null && (bt(e, o, i, s), oi(e, o, i)),
    i
  );
}
function Ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Uu(e, t) {
  qf(e, t), (e = e.alternate) && qf(e, t);
}
function Pw() {
  return null;
}
var vg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vu(e) {
  this._internalRoot = e;
}
ma.prototype.render = Vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  pa(e, t, null, null);
};
ma.prototype.unmount = Vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      pa(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function ma(e) {
  this._internalRoot = e;
}
ma.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && Qm(e);
  }
};
function Hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jf() {}
function _w(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ui(i);
        s.call(u);
      };
    }
    var i = gg(t, r, e, 0, null, !1, !1, "", Jf);
    return (
      (e._reactRootContainer = i),
      (e[Yt] = i.current),
      zo(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ui(c);
      a.call(u);
    };
  }
  var c = Bu(e, 0, !1, null, null, !1, !1, "", Jf);
  return (
    (e._reactRootContainer = c),
    (e[Yt] = c.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      pa(t, c, n, r);
    }),
    c
  );
}
function ga(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var c = Ui(i);
        a.call(c);
      };
    }
    pa(t, i, e, o);
  } else i = _w(n, t, e, o, r);
  return Ui(i);
}
Wm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yo(t.pendingLanes);
        n !== 0 &&
          (cu(t, n | 1), Qe(t, we()), !(Z & 6) && ((Ur = we() + 500), Mn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var o = Be();
          bt(r, e, 1, o);
        }
      }),
        Uu(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Be();
      bt(t, e, 134217728, n);
    }
    Uu(e, 134217728);
  }
};
Km = function (e) {
  if (e.tag === 13) {
    var t = En(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Be();
      bt(n, e, t, r);
    }
    Uu(e, t);
  }
};
Gm = function () {
  return se;
};
Ym = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
Gl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ia(r);
            if (!o) throw Error(O(90));
            Cm(r), zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pm(e, n);
      break;
    case "select":
      (t = n.value), t != null && _r(e, !!n.multiple, t, !1);
  }
};
Dm = Iu;
Am = Zn;
var kw = { usingClientEntryPoint: !1, Events: [ss, br, ia, Om, jm, Iu] },
  fo = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Nw = {
    bundleType: fo.bundleType,
    version: fo.version,
    rendererPackageName: fo.rendererPackageName,
    rendererConfig: fo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fo.findFiberByHostInstance || Pw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Us.isDisabled && Us.supportsFiber)
    try {
      (na = Us.inject(Nw)), (Ot = Us);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kw;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hu(t)) throw Error(O(200));
  return Rw(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Hu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = vg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Bu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yt] = t.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    new Vu(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Lm(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return Zn(e);
};
nt.hydrate = function (e, t, n) {
  if (!ha(t)) throw Error(O(200));
  return ga(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Hu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = vg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = gg(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Yt] = t.current),
    zo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ma(t);
};
nt.render = function (e, t, n) {
  if (!ha(t)) throw Error(O(200));
  return ga(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!ha(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Zn(function () {
        ga(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = Iu;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ha(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return ga(e, t, n, !1, r);
};
nt.version = "18.2.0-next-9e3b772b8-20220608";
function yg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yg);
    } catch (e) {
      console.error(e);
    }
}
yg(), (gm.exports = nt);
var In = gm.exports;
const Tw = om(In);
var Zf = In;
(jl.createRoot = Zf.createRoot), (jl.hydrateRoot = Zf.hydrateRoot);
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qo() {
  return (
    (Qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qo.apply(this, arguments)
  );
}
var vn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(vn || (vn = {}));
const ep = "popstate";
function Ow(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: a } = r.location;
    return Rc(
      "",
      { pathname: s, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Vi(o);
  }
  return Dw(t, n, null, e);
}
function Se(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Wu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jw() {
  return Math.random().toString(36).substr(2, 8);
}
function tp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Qo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Xr(t) : t,
      { state: n, key: (t && t.key) || r || jw() }
    )
  );
}
function Vi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Xr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Dw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    a = vn.Pop,
    c = null,
    u = f();
  u == null && ((u = 0), i.replaceState(Qo({}, i.state, { idx: u }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    a = vn.Pop;
    let b = f(),
      y = b == null ? null : b - u;
    (u = b), c && c({ action: a, location: g.location, delta: y });
  }
  function h(b, y) {
    a = vn.Push;
    let m = Rc(g.location, b, y);
    n && n(m, b), (u = f() + 1);
    let w = tp(m, u),
      $ = g.createHref(m);
    try {
      i.pushState(w, "", $);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign($);
    }
    s && c && c({ action: a, location: g.location, delta: 1 });
  }
  function x(b, y) {
    a = vn.Replace;
    let m = Rc(g.location, b, y);
    n && n(m, b), (u = f());
    let w = tp(m, u),
      $ = g.createHref(m);
    i.replaceState(w, "", $),
      s && c && c({ action: a, location: g.location, delta: 0 });
  }
  function v(b) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof b == "string" ? b : Vi(b);
    return (
      Se(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, y)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(b) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(ep, d),
        (c = b),
        () => {
          o.removeEventListener(ep, d), (c = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: v,
    encodeLocation(b) {
      let y = v(b);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: h,
    replace: x,
    go(b) {
      return i.go(b);
    },
  };
  return g;
}
var np;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(np || (np = {}));
function Aw(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Xr(t) : t,
    o = Ku(r.pathname || "/", n);
  if (o == null) return null;
  let s = xg(e);
  Mw(s);
  let i = null;
  for (let a = 0; i == null && a < s.length; ++a) i = Ww(s[a], Yw(o));
  return i;
}
function xg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, a) => {
    let c = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (Se(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Rn([r, c.relativePath]),
      f = n.concat(c);
    s.children &&
      s.children.length > 0 &&
      (Se(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      xg(s.children, t, f, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Vw(u, s.index), routesMeta: f });
  };
  return (
    e.forEach((s, i) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
      else for (let c of wg(s.path)) o(s, i, c);
    }),
    t
  );
}
function wg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = wg(r.join("/")),
    a = [];
  return (
    a.push(...i.map((c) => (c === "" ? s : [s, c].join("/")))),
    o && a.push(...i),
    a.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function Mw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Hw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Iw = /^:[\w-]+$/,
  Lw = 3,
  Fw = 2,
  zw = 1,
  Bw = 10,
  Uw = -2,
  rp = (e) => e === "*";
function Vw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(rp) && (r += Uw),
    t && (r += Fw),
    n
      .filter((o) => !rp(o))
      .reduce((o, s) => o + (Iw.test(s) ? Lw : s === "" ? zw : Bw), r)
  );
}
function Hw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ww(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    s = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      c = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = Kw(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: c },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: Rn([o, f.pathname]),
      pathnameBase: Zw(Rn([o, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (o = Rn([o, f.pathnameBase]));
  }
  return s;
}
function Kw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gw(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: h, isOptional: x } = f;
      if (h === "*") {
        let g = a[d] || "";
        i = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return x && !v ? (u[h] = void 0) : (u[h] = Qw(v || "", h)), u;
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function Gw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Wu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, c) => (
            r.push({ paramName: a, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Yw(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Wu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Qw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Wu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ku(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Xw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Xr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qw(n, t)) : t,
    search: eb(r),
    hash: tb(o),
  };
}
function qw(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function gl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function bg(e, t) {
  let n = Jw(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function $g(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Xr(e))
    : ((o = Qo({}, e)),
      Se(
        !o.pathname || !o.pathname.includes("?"),
        gl("?", "pathname", "search", o)
      ),
      Se(
        !o.pathname || !o.pathname.includes("#"),
        gl("#", "pathname", "hash", o)
      ),
      Se(!o.search || !o.search.includes("#"), gl("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    a;
  if (i == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      o.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let c = Xw(o, a),
    u = i && i !== "/" && i.endsWith("/"),
    f = (s || i === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c;
}
const Rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Zw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  tb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function nb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Sg = ["post", "put", "patch", "delete"];
new Set(Sg);
const rb = ["get", ...Sg];
new Set(rb);
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xo() {
  return (
    (Xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xo.apply(this, arguments)
  );
}
const Gu = l.createContext(null),
  ob = l.createContext(null),
  rr = l.createContext(null),
  va = l.createContext(null),
  Ln = l.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Eg = l.createContext(null);
function sb(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  as() || Se(!1);
  let { basename: r, navigator: o } = l.useContext(rr),
    { hash: s, pathname: i, search: a } = Rg(e, { relative: n }),
    c = i;
  return (
    r !== "/" && (c = i === "/" ? r : Rn([r, i])),
    o.createHref({ pathname: c, search: a, hash: s })
  );
}
function as() {
  return l.useContext(va) != null;
}
function ya() {
  return as() || Se(!1), l.useContext(va).location;
}
function Cg(e) {
  l.useContext(rr).static || l.useLayoutEffect(e);
}
function Yu() {
  let { isDataRoute: e } = l.useContext(Ln);
  return e ? xb() : ib();
}
function ib() {
  as() || Se(!1);
  let e = l.useContext(Gu),
    { basename: t, future: n, navigator: r } = l.useContext(rr),
    { matches: o } = l.useContext(Ln),
    { pathname: s } = ya(),
    i = JSON.stringify(bg(o, n.v7_relativeSplatPath)),
    a = l.useRef(!1);
  return (
    Cg(() => {
      a.current = !0;
    }),
    l.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = $g(u, JSON.parse(i), s, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Rn([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, i, s, e]
    )
  );
}
function ab() {
  let { matches: e } = l.useContext(Ln),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Rg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = l.useContext(rr),
    { matches: o } = l.useContext(Ln),
    { pathname: s } = ya(),
    i = JSON.stringify(bg(o, r.v7_relativeSplatPath));
  return l.useMemo(() => $g(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function lb(e, t) {
  return cb(e, t);
}
function cb(e, t, n, r) {
  as() || Se(!1);
  let { navigator: o } = l.useContext(rr),
    { matches: s } = l.useContext(Ln),
    i = s[s.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let c = i ? i.pathnameBase : "/";
  i && i.route;
  let u = ya(),
    f;
  if (t) {
    var d;
    let b = typeof t == "string" ? Xr(t) : t;
    c === "/" || ((d = b.pathname) != null && d.startsWith(c)) || Se(!1),
      (f = b);
  } else f = u;
  let h = f.pathname || "/",
    x = c === "/" ? h : h.slice(c.length) || "/",
    v = Aw(e, { pathname: x }),
    g = mb(
      v &&
        v.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: Rn([
              c,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? c
                : Rn([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && g
    ? l.createElement(
        va.Provider,
        {
          value: {
            location: Xo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: vn.Pop,
          },
        },
        g
      )
    : g;
}
function ub() {
  let e = yb(),
    t = nb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return l.createElement(
    l.Fragment,
    null,
    l.createElement("h2", null, "Unexpected Application Error!"),
    l.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? l.createElement("pre", { style: o }, n) : null,
    null
  );
}
const db = l.createElement(ub, null);
class fb extends l.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? l.createElement(
          Ln.Provider,
          { value: this.props.routeContext },
          l.createElement(Eg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function pb(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = l.useContext(Gu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    l.createElement(Ln.Provider, { value: t }, r)
  );
}
function mb(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let f = i.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id])
    );
    f >= 0 || Se(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let d = i[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          v =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!x || x[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (c = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, d, h) => {
    let x,
      v = !1,
      g = null,
      b = null;
    n &&
      ((x = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || db),
      c &&
        (u < 0 && h === 0
          ? (wb("route-fallback", !1), (v = !0), (b = null))
          : u === h &&
            ((v = !0), (b = d.route.hydrateFallbackElement || null))));
    let y = t.concat(i.slice(0, h + 1)),
      m = () => {
        let w;
        return (
          x
            ? (w = g)
            : v
            ? (w = b)
            : d.route.Component
            ? (w = l.createElement(d.route.Component, null))
            : d.route.element
            ? (w = d.route.element)
            : (w = f),
          l.createElement(pb, {
            match: d,
            routeContext: { outlet: f, matches: y, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? l.createElement(fb, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: m(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Pg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Pg || {}),
  Hi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Hi || {});
function hb(e) {
  let t = l.useContext(Gu);
  return t || Se(!1), t;
}
function gb(e) {
  let t = l.useContext(ob);
  return t || Se(!1), t;
}
function vb(e) {
  let t = l.useContext(Ln);
  return t || Se(!1), t;
}
function _g(e) {
  let t = vb(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Se(!1), n.route.id;
}
function yb() {
  var e;
  let t = l.useContext(Eg),
    n = gb(Hi.UseRouteError),
    r = _g(Hi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function xb() {
  let { router: e } = hb(Pg.UseNavigateStable),
    t = _g(Hi.UseNavigateStable),
    n = l.useRef(!1);
  return (
    Cg(() => {
      n.current = !0;
    }),
    l.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Xo({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const op = {};
function wb(e, t, n) {
  !t && !op[e] && (op[e] = !0);
}
function mr(e) {
  Se(!1);
}
function bb(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = vn.Pop,
    navigator: s,
    static: i = !1,
    future: a,
  } = e;
  as() && Se(!1);
  let c = t.replace(/^\/*/, "/"),
    u = l.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: i,
        future: Xo({ v7_relativeSplatPath: !1 }, a),
      }),
      [c, a, s, i]
    );
  typeof r == "string" && (r = Xr(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: h = "",
      state: x = null,
      key: v = "default",
    } = r,
    g = l.useMemo(() => {
      let b = Ku(f, c);
      return b == null
        ? null
        : {
            location: { pathname: b, search: d, hash: h, state: x, key: v },
            navigationType: o,
          };
    }, [c, f, d, h, x, v, o]);
  return g == null
    ? null
    : l.createElement(
        rr.Provider,
        { value: u },
        l.createElement(va.Provider, { children: n, value: g })
      );
}
function $b(e) {
  let { children: t, location: n } = e;
  return lb(Pc(t), n);
}
new Promise(() => {});
function Pc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    l.Children.forEach(e, (r, o) => {
      if (!l.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === l.Fragment) {
        n.push.apply(n, Pc(r.props.children, s));
        return;
      }
      r.type !== mr && Se(!1), !r.props.index || !r.props.children || Se(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Pc(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _c() {
  return (
    (_c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _c.apply(this, arguments)
  );
}
function Sb(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Eb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Cb(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Eb(e);
}
const Rb = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Pb = "6";
try {
  window.__reactRouterVersion = Pb;
} catch {}
const _b = "startTransition",
  sp = mm[_b];
function kb(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = l.useRef();
  s.current == null && (s.current = Ow({ window: o, v5Compat: !0 }));
  let i = s.current,
    [a, c] = l.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    f = l.useCallback(
      (d) => {
        u && sp ? sp(() => c(d)) : c(d);
      },
      [c, u]
    );
  return (
    l.useLayoutEffect(() => i.listen(f), [i, f]),
    l.createElement(bb, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const Nb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Tb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ls = l.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: a,
        target: c,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      h = Sb(t, Rb),
      { basename: x } = l.useContext(rr),
      v,
      g = !1;
    if (typeof u == "string" && Tb.test(u) && ((v = u), Nb))
      try {
        let w = new URL(window.location.href),
          $ = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u),
          S = Ku($.pathname, x);
        $.origin === w.origin && S != null
          ? (u = S + $.search + $.hash)
          : (g = !0);
      } catch {}
    let b = sb(u, { relative: o }),
      y = Ob(u, {
        replace: i,
        state: a,
        target: c,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: d,
      });
    function m(w) {
      r && r(w), w.defaultPrevented || y(w);
    }
    return l.createElement(
      "a",
      _c({}, h, { href: v || b, onClick: g || s ? r : m, ref: n, target: c })
    );
  });
var ip;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ip || (ip = {}));
var ap;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ap || (ap = {}));
function Ob(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    c = Yu(),
    u = ya(),
    f = Rg(e, { relative: i });
  return l.useCallback(
    (d) => {
      if (Cb(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Vi(u) === Vi(f);
        c(e, {
          replace: h,
          state: o,
          preventScrollReset: s,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [u, c, f, r, o, n, e, s, i, a]
  );
}
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    P.apply(this, arguments)
  );
}
function jb(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function xa(...e) {
  return (t) => e.forEach((n) => jb(n, t));
}
function X(...e) {
  return l.useCallback(xa(...e), e);
}
const Nn = l.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = l.Children.toArray(n),
    s = o.find(Db);
  if (s) {
    const i = s.props.children,
      a = o.map((c) =>
        c === s
          ? l.Children.count(i) > 1
            ? l.Children.only(null)
            : l.isValidElement(i)
            ? i.props.children
            : null
          : c
      );
    return l.createElement(
      kc,
      P({}, r, { ref: t }),
      l.isValidElement(i) ? l.cloneElement(i, void 0, a) : null
    );
  }
  return l.createElement(kc, P({}, r, { ref: t }), n);
});
Nn.displayName = "Slot";
const kc = l.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return l.isValidElement(n)
    ? l.cloneElement(n, { ...Ab(r, n.props), ref: t ? xa(t, n.ref) : n.ref })
    : l.Children.count(n) > 1
    ? l.Children.only(null)
    : null;
});
kc.displayName = "SlotClone";
const kg = ({ children: e }) => l.createElement(l.Fragment, null, e);
function Db(e) {
  return l.isValidElement(e) && e.type === kg;
}
function Ab(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            s(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ng(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ng(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Mb() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ng(e)) && (r && (r += " "), (r += t));
  return r;
}
const lp = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  cp = Mb,
  wa = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return cp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const f = n == null ? void 0 : n[u],
          d = s == null ? void 0 : s[u];
        if (f === null) return null;
        const h = lp(f) || lp(d);
        return o[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [d, h] = f;
          return h === void 0 || (u[d] = h), u;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: d, className: h, ...x } = f;
              return Object.entries(x).every((v) => {
                let [g, b] = v;
                return Array.isArray(b)
                  ? b.includes({ ...s, ...a }[g])
                  : { ...s, ...a }[g] === b;
              })
                ? [...u, d, h]
                : u;
            }, []);
    return cp(
      e,
      i,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Tg(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Tg(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Ib() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Tg(e)) && (r && (r += " "), (r += t));
  return r;
}
const Qu = "-";
function Lb(e) {
  const t = zb(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const a = i.split(Qu);
    return a[0] === "" && a.length !== 1 && a.shift(), Og(a, t) || Fb(i);
  }
  function s(i, a) {
    const c = n[i] || [];
    return a && r[i] ? [...c, ...r[i]] : c;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function Og(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Og(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(Qu);
  return (i = t.validators.find(({ validator: a }) => a(s))) == null
    ? void 0
    : i.classGroupId;
}
const up = /^\[(.+)\]$/;
function Fb(e) {
  if (up.test(e)) {
    const t = up.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function zb(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Ub(Object.entries(e.classGroups), n).forEach(([s, i]) => {
      Nc(i, r, s, t);
    }),
    r
  );
}
function Nc(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : dp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Bb(o)) {
        Nc(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Nc(i, dp(t, s), n, r);
    });
  });
}
function dp(e, t) {
  let n = e;
  return (
    t.split(Qu).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Bb(e) {
  return e.isThemeGetter;
}
function Ub(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == "string"
            ? t + s
            : typeof s == "object"
            ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a]))
            : s
        );
        return [n, o];
      })
    : e;
}
function Vb(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0) return i;
      if ((i = r.get(s)) !== void 0) return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    },
  };
}
const jg = "!";
function Hb(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const a = [];
    let c = 0,
      u = 0,
      f;
    for (let g = 0; g < i.length; g++) {
      let b = i[g];
      if (c === 0) {
        if (b === r && (n || i.slice(g, g + o) === t)) {
          a.push(i.slice(u, g)), (u = g + o);
          continue;
        }
        if (b === "/") {
          f = g;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = a.length === 0 ? i : i.substring(u),
      h = d.startsWith(jg),
      x = h ? d.substring(1) : d,
      v = f && f > u ? f - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: v,
    };
  };
}
function Wb(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function Kb(e) {
  return { cache: Vb(e.cacheSize), splitModifiers: Hb(e), ...Lb(e) };
}
const Gb = /\s+/;
function Yb(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    s = new Set();
  return e
    .trim()
    .split(Gb)
    .map((i) => {
      const {
        modifiers: a,
        hasImportantModifier: c,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = n(i);
      let d = r(f ? u.substring(0, f) : u),
        h = !!f;
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: i };
        if (((d = r(u)), !d))
          return { isTailwindClass: !1, originalClassName: i };
        h = !1;
      }
      const x = Wb(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: c ? x + jg : x,
        classGroupId: d,
        originalClassName: i,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: c, hasPostfixModifier: u } = i,
        f = a + c;
      return s.has(f)
        ? !1
        : (s.add(f), o(c, u).forEach((d) => s.add(a + d)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function Qb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Dg(t)) && (r && (r += " "), (r += n));
  return r;
}
function Dg(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Dg(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Xb(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(c) {
    const u = t.reduce((f, d) => d(f), e());
    return (n = Kb(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(c);
  }
  function a(c) {
    const u = r(c);
    if (u) return u;
    const f = Yb(c, n);
    return o(c, f), f;
  }
  return function () {
    return s(Qb.apply(null, arguments));
  };
}
function ce(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Ag = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  qb = /^\d+\/\d+$/,
  Jb = new Set(["px", "full", "screen"]),
  Zb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  e$ =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  t$ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  n$ = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  r$ =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Lt(e) {
  return Wn(e) || Jb.has(e) || qb.test(e);
}
function an(e) {
  return qr(e, "length", d$);
}
function Wn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Vs(e) {
  return qr(e, "number", Wn);
}
function po(e) {
  return !!e && Number.isInteger(Number(e));
}
function o$(e) {
  return e.endsWith("%") && Wn(e.slice(0, -1));
}
function Q(e) {
  return Ag.test(e);
}
function ln(e) {
  return Zb.test(e);
}
const s$ = new Set(["length", "size", "percentage"]);
function i$(e) {
  return qr(e, s$, Mg);
}
function a$(e) {
  return qr(e, "position", Mg);
}
const l$ = new Set(["image", "url"]);
function c$(e) {
  return qr(e, l$, p$);
}
function u$(e) {
  return qr(e, "", f$);
}
function mo() {
  return !0;
}
function qr(e, t, n) {
  const r = Ag.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function d$(e) {
  return e$.test(e) && !t$.test(e);
}
function Mg() {
  return !1;
}
function f$(e) {
  return n$.test(e);
}
function p$(e) {
  return r$.test(e);
}
function m$() {
  const e = ce("colors"),
    t = ce("spacing"),
    n = ce("blur"),
    r = ce("brightness"),
    o = ce("borderColor"),
    s = ce("borderRadius"),
    i = ce("borderSpacing"),
    a = ce("borderWidth"),
    c = ce("contrast"),
    u = ce("grayscale"),
    f = ce("hueRotate"),
    d = ce("invert"),
    h = ce("gap"),
    x = ce("gradientColorStops"),
    v = ce("gradientColorStopPositions"),
    g = ce("inset"),
    b = ce("margin"),
    y = ce("opacity"),
    m = ce("padding"),
    w = ce("saturate"),
    $ = ce("scale"),
    S = ce("sepia"),
    C = ce("skew"),
    E = ce("space"),
    R = ce("translate"),
    L = () => ["auto", "contain", "none"],
    M = () => ["auto", "hidden", "clip", "visible", "scroll"],
    H = () => ["auto", Q, t],
    j = () => [Q, t],
    Y = () => ["", Lt, an],
    N = () => ["auto", Wn, Q],
    I = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    V = () => ["solid", "dashed", "dotted", "double", "none"],
    B = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    T = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    _ = () => ["", "0", Q],
    A = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    z = () => [Wn, Vs],
    G = () => [Wn, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [mo],
      spacing: [Lt, an],
      blur: ["none", "", ln, Q],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ln, Q],
      borderSpacing: j(),
      borderWidth: Y(),
      contrast: z(),
      grayscale: _(),
      hueRotate: G(),
      invert: _(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [o$, an],
      inset: H(),
      margin: H(),
      opacity: z(),
      padding: j(),
      saturate: z(),
      scale: z(),
      sepia: _(),
      skew: G(),
      space: j(),
      translate: j(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", Q] }],
      container: ["container"],
      columns: [{ columns: [ln] }],
      "break-after": [{ "break-after": A() }],
      "break-before": [{ "break-before": A() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...I(), Q] }],
      overflow: [{ overflow: M() }],
      "overflow-x": [{ "overflow-x": M() }],
      "overflow-y": [{ "overflow-y": M() }],
      overscroll: [{ overscroll: L() }],
      "overscroll-x": [{ "overscroll-x": L() }],
      "overscroll-y": [{ "overscroll-y": L() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [g] }],
      "inset-x": [{ "inset-x": [g] }],
      "inset-y": [{ "inset-y": [g] }],
      start: [{ start: [g] }],
      end: [{ end: [g] }],
      top: [{ top: [g] }],
      right: [{ right: [g] }],
      bottom: [{ bottom: [g] }],
      left: [{ left: [g] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", po, Q] }],
      basis: [{ basis: H() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
      grow: [{ grow: _() }],
      shrink: [{ shrink: _() }],
      order: [{ order: ["first", "last", "none", po, Q] }],
      "grid-cols": [{ "grid-cols": [mo] }],
      "col-start-end": [{ col: ["auto", { span: ["full", po, Q] }, Q] }],
      "col-start": [{ "col-start": N() }],
      "col-end": [{ "col-end": N() }],
      "grid-rows": [{ "grid-rows": [mo] }],
      "row-start-end": [{ row: ["auto", { span: [po, Q] }, Q] }],
      "row-start": [{ "row-start": N() }],
      "row-end": [{ "row-end": N() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...T()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...T(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...T(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [m] }],
      px: [{ px: [m] }],
      py: [{ py: [m] }],
      ps: [{ ps: [m] }],
      pe: [{ pe: [m] }],
      pt: [{ pt: [m] }],
      pr: [{ pr: [m] }],
      pb: [{ pb: [m] }],
      pl: [{ pl: [m] }],
      m: [{ m: [b] }],
      mx: [{ mx: [b] }],
      my: [{ my: [b] }],
      ms: [{ ms: [b] }],
      me: [{ me: [b] }],
      mt: [{ mt: [b] }],
      mr: [{ mr: [b] }],
      mb: [{ mb: [b] }],
      ml: [{ ml: [b] }],
      "space-x": [{ "space-x": [E] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [E] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
      "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            Q,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ln] },
            ln,
          ],
        },
      ],
      h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ln, an] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Vs,
          ],
        },
      ],
      "font-family": [{ font: [mo] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            Q,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Wn, Vs] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Lt,
            Q,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", Q] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...V(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Lt, an] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Lt, Q] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: j() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            Q,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", Q] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...I(), a$] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", i$] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            c$,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [v] }],
      "gradient-via-pos": [{ via: [v] }],
      "gradient-to-pos": [{ to: [v] }],
      "gradient-from": [{ from: [x] }],
      "gradient-via": [{ via: [x] }],
      "gradient-to": [{ to: [x] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...V(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: V() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...V()] }],
      "outline-offset": [{ "outline-offset": [Lt, Q] }],
      "outline-w": [{ outline: [Lt, an] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: Y() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [Lt, an] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ln, u$] }],
      "shadow-color": [{ shadow: [mo] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": B() }],
      "bg-blend": [{ "bg-blend": B() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [c] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ln, Q] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [w] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [c] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [w] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            Q,
          ],
        },
      ],
      duration: [{ duration: G() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
      delay: [{ delay: G() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [$] }],
      "scale-x": [{ "scale-x": [$] }],
      "scale-y": [{ "scale-y": [$] }],
      rotate: [{ rotate: [po, Q] }],
      "translate-x": [{ "translate-x": [R] }],
      "translate-y": [{ "translate-y": [R] }],
      "skew-x": [{ "skew-x": [C] }],
      "skew-y": [{ "skew-y": [C] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            Q,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            Q,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": j() }],
      "scroll-mx": [{ "scroll-mx": j() }],
      "scroll-my": [{ "scroll-my": j() }],
      "scroll-ms": [{ "scroll-ms": j() }],
      "scroll-me": [{ "scroll-me": j() }],
      "scroll-mt": [{ "scroll-mt": j() }],
      "scroll-mr": [{ "scroll-mr": j() }],
      "scroll-mb": [{ "scroll-mb": j() }],
      "scroll-ml": [{ "scroll-ml": j() }],
      "scroll-p": [{ "scroll-p": j() }],
      "scroll-px": [{ "scroll-px": j() }],
      "scroll-py": [{ "scroll-py": j() }],
      "scroll-ps": [{ "scroll-ps": j() }],
      "scroll-pe": [{ "scroll-pe": j() }],
      "scroll-pt": [{ "scroll-pt": j() }],
      "scroll-pr": [{ "scroll-pr": j() }],
      "scroll-pb": [{ "scroll-pb": j() }],
      "scroll-pl": [{ "scroll-pl": j() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", Q] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Lt, an, Vs] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const h$ = Xb(m$);
function W(...e) {
  return h$(Ib(e));
}
const Xu = wa(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  qt = l.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? Nn : "button";
      return p.jsx(i, {
        className: W(Xu({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
qt.displayName = "Button";
const g$ = () =>
    p.jsxs("header", {
      className:
        "w-full flex flex-col justify-center items-center mt-20 mx-auto md:w-48 lg:w-2/4",
      children: [
        p.jsx("h2", {
          className:
            "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          children: "Readify",
        }),
        p.jsx("h1", {
          className:
            "scroll-m-20 text-5xl font-extrabold tracking-tight text-center px-2  mt-6 lg:text-mt-8",
          children: "Unlock your speed reading.",
        }),
        p.jsx(ls, {
          to: "/login",
          children: p.jsx(qt, {
            className: "mt-10",
            children: "Continue to application",
          }),
        }),
      ],
    }),
  v$ = "/assets/login_img-rtGbgp4U.jpg";
var Ig = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  fp = Ee.createContext && Ee.createContext(Ig),
  y$ = ["attr", "size", "title"];
function x$(e, t) {
  if (e == null) return {};
  var n = w$(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      (r = s[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function w$(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function pp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pp(Object(n), !0).forEach(function (r) {
          b$(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : pp(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function b$(e, t, n) {
  return (
    (t = $$(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function $$(e) {
  var t = S$(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function S$(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lg(e) {
  return (
    e &&
    e.map((t, n) =>
      Ee.createElement(t.tag, Ki({ key: n }, t.attr), Lg(t.child))
    )
  );
}
function E$(e) {
  return (t) =>
    Ee.createElement(C$, Wi({ attr: Ki({}, e.attr) }, t), Lg(e.child));
}
function C$(e) {
  var t = (n) => {
    var { attr: r, size: o, title: s } = e,
      i = x$(e, y$),
      a = o || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      Ee.createElement(
        "svg",
        Wi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: c,
            style: Ki(Ki({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && Ee.createElement("title", null, s),
        e.children
      )
    );
  };
  return fp !== void 0
    ? Ee.createElement(fp.Consumer, null, (n) => t(n))
    : t(Ig);
}
function R$(e) {
  return E$({
    tag: "svg",
    attr: {
      version: "1.1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "path",
        attr: {
          fill: "#FFC107",
          d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`,
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "#FF3D00",
          d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`,
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "#4CAF50",
          d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`,
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fill: "#1976D2",
          d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`,
        },
        child: [],
      },
    ],
  })(e);
}
function P$() {
  const e = () =>
    window.open("https://readify-xbps.onrender.com0/login/google");
  return p.jsxs("div", {
    role: "presentation",
    className: "flex w-full  min-h-svh",
    children: [
      p.jsx("section", {
        className: "hidden w-1/2  lg:flex ",
        children: p.jsx("img", {
          className: "w-full h-full object-cover bg-center flex-shrink-0",
          src: v$,
          alt: "Image of a person reading a book.",
        }),
      }),
      p.jsx("section", {
        className: "lg:w-1/2 flex items-center justify-center mx-auto ",
        children: p.jsxs("form", {
          className:
            "w-72 md:w-96 py-6 mx-auto flex flex-col justify-center items-center border rounded-md ",
          children: [
            p.jsx("h3", {
              className: "scroll-m-20 text-1xl font-semibold tracking-tight",
              children: "Readify",
            }),
            p.jsx("h2", {
              className:
                "scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0",
              children: "Welcome Back",
            }),
            p.jsxs(qt, {
              onClick: e,
              className: "w-3/4 mt-2",
              children: [
                p.jsx(R$, { className: "mr-2 h-4 w-4" }),
                " Continue with Google",
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Fg({ error: e }) {
  return p.jsx("p", {
    className: "leading-7 [&:not(:first-child)]:mt-6",
    children: e,
  });
}
const _$ = 1,
  k$ = 1e6;
let vl = 0;
function N$() {
  return (vl = (vl + 1) % Number.MAX_SAFE_INTEGER), vl.toString();
}
const yl = new Map(),
  mp = (e) => {
    if (yl.has(e)) return;
    const t = setTimeout(() => {
      yl.delete(e), ko({ type: "REMOVE_TOAST", toastId: e });
    }, k$);
    yl.set(e, t);
  },
  T$ = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, _$) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? mp(n)
            : e.toasts.forEach((r) => {
                mp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  di = [];
let fi = { toasts: [] };
function ko(e) {
  (fi = T$(fi, e)),
    di.forEach((t) => {
      t(fi);
    });
}
function O$({ ...e }) {
  const t = N$(),
    n = (o) => ko({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => ko({ type: "DISMISS_TOAST", toastId: t });
  return (
    ko({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function ba() {
  const [e, t] = l.useState(fi);
  return (
    l.useEffect(
      () => (
        di.push(t),
        () => {
          const n = di.indexOf(t);
          n > -1 && di.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: O$,
      dismiss: (n) => ko({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function zg(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: j$ } = Object.prototype,
  { getPrototypeOf: qu } = Object,
  $a = ((e) => (t) => {
    const n = j$.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  It = (e) => ((e = e.toLowerCase()), (t) => $a(t) === e),
  Sa = (e) => (t) => typeof t === e,
  { isArray: Jr } = Array,
  qo = Sa("undefined");
function D$(e) {
  return (
    e !== null &&
    !qo(e) &&
    e.constructor !== null &&
    !qo(e.constructor) &&
    dt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bg = It("ArrayBuffer");
function A$(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bg(e.buffer)),
    t
  );
}
const M$ = Sa("string"),
  dt = Sa("function"),
  Ug = Sa("number"),
  Ea = (e) => e !== null && typeof e == "object",
  I$ = (e) => e === !0 || e === !1,
  pi = (e) => {
    if ($a(e) !== "object") return !1;
    const t = qu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  L$ = It("Date"),
  F$ = It("File"),
  z$ = It("Blob"),
  B$ = It("FileList"),
  U$ = (e) => Ea(e) && dt(e.pipe),
  V$ = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (dt(e.append) &&
          ((t = $a(e)) === "formdata" ||
            (t === "object" &&
              dt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  H$ = It("URLSearchParams"),
  W$ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Jr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let a;
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function Vg(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Hg =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Wg = (e) => !qo(e) && e !== Hg;
function Tc() {
  const { caseless: e } = (Wg(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && Vg(t, o)) || o;
      pi(t[s]) && pi(r)
        ? (t[s] = Tc(t[s], r))
        : pi(r)
        ? (t[s] = Tc({}, r))
        : Jr(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && cs(arguments[r], n);
  return t;
}
const K$ = (e, t, n, { allOwnKeys: r } = {}) => (
    cs(
      t,
      (o, s) => {
        n && dt(o) ? (e[s] = zg(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  G$ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Y$ = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Q$ = (e, t, n, r) => {
    let o, s, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && qu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  X$ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  q$ = (e) => {
    if (!e) return null;
    if (Jr(e)) return e;
    let t = e.length;
    if (!Ug(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  J$ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && qu(Uint8Array)),
  Z$ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  eS = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  tS = It("HTMLFormElement"),
  nS = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  hp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  rS = It("RegExp"),
  Kg = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    cs(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  oS = (e) => {
    Kg(e, (t, n) => {
      if (dt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (dt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  sS = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return Jr(e) ? r(e) : r(String(e).split(t)), n;
  },
  iS = () => {},
  aS = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  xl = "abcdefghijklmnopqrstuvwxyz",
  gp = "0123456789",
  Gg = { DIGIT: gp, ALPHA: xl, ALPHA_DIGIT: xl + xl.toUpperCase() + gp },
  lS = (e = 16, t = Gg.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function cS(e) {
  return !!(
    e &&
    dt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const uS = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ea(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = Jr(r) ? [] : {};
            return (
              cs(r, (i, a) => {
                const c = n(i, o + 1);
                !qo(c) && (s[a] = c);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  dS = It("AsyncFunction"),
  fS = (e) => e && (Ea(e) || dt(e)) && dt(e.then) && dt(e.catch),
  k = {
    isArray: Jr,
    isArrayBuffer: Bg,
    isBuffer: D$,
    isFormData: V$,
    isArrayBufferView: A$,
    isString: M$,
    isNumber: Ug,
    isBoolean: I$,
    isObject: Ea,
    isPlainObject: pi,
    isUndefined: qo,
    isDate: L$,
    isFile: F$,
    isBlob: z$,
    isRegExp: rS,
    isFunction: dt,
    isStream: U$,
    isURLSearchParams: H$,
    isTypedArray: J$,
    isFileList: B$,
    forEach: cs,
    merge: Tc,
    extend: K$,
    trim: W$,
    stripBOM: G$,
    inherits: Y$,
    toFlatObject: Q$,
    kindOf: $a,
    kindOfTest: It,
    endsWith: X$,
    toArray: q$,
    forEachEntry: Z$,
    matchAll: eS,
    isHTMLForm: tS,
    hasOwnProperty: hp,
    hasOwnProp: hp,
    reduceDescriptors: Kg,
    freezeMethods: oS,
    toObjectSet: sS,
    toCamelCase: nS,
    noop: iS,
    toFiniteNumber: aS,
    findKey: Vg,
    global: Hg,
    isContextDefined: Wg,
    ALPHABET: Gg,
    generateString: lS,
    isSpecCompliantForm: cS,
    toJSONObject: uS,
    isAsyncFn: dS,
    isThenable: fS,
  };
function J(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
k.inherits(J, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Yg = J.prototype,
  Qg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Qg[e] = { value: e };
});
Object.defineProperties(J, Qg);
Object.defineProperty(Yg, "isAxiosError", { value: !0 });
J.from = (e, t, n, r, o, s) => {
  const i = Object.create(Yg);
  return (
    k.toFlatObject(
      e,
      i,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    J.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const pS = null;
function Oc(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function Xg(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = Xg(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function mS(e) {
  return k.isArray(e) && !e.some(Oc);
}
const hS = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ca(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, b) {
        return !k.isUndefined(b[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    s = n.dots,
    i = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (k.isDate(v)) return v.toISOString();
    if (!c && k.isBlob(v))
      throw new J("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(v) || k.isTypedArray(v)
      ? c && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function f(v, g, b) {
    let y = v;
    if (v && !b && typeof v == "object") {
      if (k.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (k.isArray(v) && mS(v)) ||
        ((k.isFileList(v) || k.endsWith(g, "[]")) && (y = k.toArray(v)))
      )
        return (
          (g = Xg(g)),
          y.forEach(function (w, $) {
            !(k.isUndefined(w) || w === null) &&
              t.append(
                i === !0 ? vp([g], $, s) : i === null ? g : g + "[]",
                u(w)
              );
          }),
          !1
        );
    }
    return Oc(v) ? !0 : (t.append(vp(b, g, s), u(v)), !1);
  }
  const d = [],
    h = Object.assign(hS, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: Oc,
    });
  function x(v, g) {
    if (!k.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(v),
        k.forEach(v, function (y, m) {
          (!(k.isUndefined(y) || y === null) &&
            o.call(t, y, k.isString(m) ? m.trim() : m, g, h)) === !0 &&
            x(y, g ? g.concat(m) : [m]);
        }),
        d.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function yp(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ju(e, t) {
  (this._pairs = []), e && Ca(e, this, t);
}
const qg = Ju.prototype;
qg.append = function (t, n) {
  this._pairs.push([t, n]);
};
qg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, yp);
      }
    : yp;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function gS(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Jg(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || gS,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = k.isURLSearchParams(t) ? t.toString() : new Ju(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class xp {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Zg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  vS = typeof URLSearchParams < "u" ? URLSearchParams : Ju,
  yS = typeof FormData < "u" ? FormData : null,
  xS = typeof Blob < "u" ? Blob : null,
  wS = {
    isBrowser: !0,
    classes: { URLSearchParams: vS, FormData: yS, Blob: xS },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  e0 = typeof window < "u" && typeof document < "u",
  bS = ((e) => e0 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  $S =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  SS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: e0,
        hasStandardBrowserEnv: bS,
        hasStandardBrowserWebWorkerEnv: $S,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tt = { ...SS, ...wS };
function ES(e, t) {
  return Ca(
    e,
    new Tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return Tt.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function CS(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function RS(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function t0(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      c = s >= n.length;
    return (
      (i = !i && k.isArray(o) ? o.length : i),
      c
        ? (k.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !k.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && k.isArray(o[i]) && (o[i] = RS(o[i])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, o) => {
        t(CS(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function PS(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Zu = {
  transitional: Zg,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = k.isObject(t);
      if ((s && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o ? JSON.stringify(t0(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ES(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ca(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), PS(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Zu.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? J.from(a, J.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Tt.classes.FormData, Blob: Tt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zu.headers[e] = {};
});
const ed = Zu,
  _S = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kS = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && _S[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  wp = Symbol("internals");
function ho(e) {
  return e && String(e).trim().toLowerCase();
}
function mi(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(mi) : String(e);
}
function NS(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const TS = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function wl(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function OS(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jS(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class Ra {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, c, u) {
      const f = ho(c);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = k.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || c] = mi(a));
    }
    const i = (a, c) => k.forEach(a, (u, f) => s(u, f, c));
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : k.isString(t) && (t = t.trim()) && !TS(t)
        ? i(kS(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ho(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return NS(o);
        if (k.isFunction(n)) return n.call(this, o, r);
        if (k.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ho(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || wl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = ho(i)), i)) {
        const a = k.findKey(r, i);
        a && (!n || wl(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return k.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || wl(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (o, s) => {
        const i = k.findKey(r, s);
        if (i) {
          (n[i] = mi(o)), delete n[s];
          return;
        }
        const a = t ? OS(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = mi(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[wp] = this[wp] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const a = ho(i);
      r[a] || (jS(o, i), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Ra.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(Ra.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(Ra);
const Kt = Ra;
function bl(e, t) {
  const n = this || ed,
    r = t || n,
    o = Kt.from(r.headers);
  let s = r.data;
  return (
    k.forEach(e, function (a) {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function n0(e) {
  return !!(e && e.__CANCEL__);
}
function us(e, t, n) {
  J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(us, J, { __CANCEL__: !0 });
function DS(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new J(
          "Request failed with status code " + n.status,
          [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const AS = Tt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, s) {
        const i = [e + "=" + encodeURIComponent(t)];
        k.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          k.isString(r) && i.push("path=" + r),
          k.isString(o) && i.push("domain=" + o),
          s === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function MS(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function IS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function r0(e, t) {
  return e && !MS(t) ? IS(e, t) : t;
}
const LS = Tt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(s) {
        let i = s;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (i) {
          const a = k.isString(i) ? o(i) : i;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function FS(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function zS(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        f = r[s];
      i || (i = u), (n[o] = c), (r[o] = u);
      let d = s,
        h = 0;
      for (; d !== o; ) (h += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return;
      const x = f && u - f;
      return x ? Math.round((h * 1e3) / x) : void 0;
    }
  );
}
function bp(e, t) {
  let n = 0;
  const r = zS(50, 250);
  return (o) => {
    const s = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      a = s - n,
      c = r(a),
      u = s <= i;
    n = s;
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && i && u ? (i - s) / c : void 0,
      event: o,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const BS = typeof XMLHttpRequest < "u",
  US =
    BS &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const s = Kt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: a } = e,
          c;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let f;
        if (k.isFormData(o)) {
          if (Tt.hasStandardBrowserEnv || Tt.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((f = s.getContentType()) !== !1) {
            const [g, ...b] = f
              ? f
                  .split(";")
                  .map((y) => y.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([g || "multipart/form-data", ...b].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(g + ":" + b));
        }
        const h = r0(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), Jg(h, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function x() {
          if (!d) return;
          const g = Kt.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            y = {
              data:
                !i || i === "text" || i === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: g,
              config: e,
              request: d,
            };
          DS(
            function (w) {
              n(w), u();
            },
            function (w) {
              r(w), u();
            },
            y
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = x)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (d.onabort = function () {
            d &&
              (r(new J("Request aborted", J.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new J("Network Error", J.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let b = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || Zg;
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new J(
                  b,
                  y.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Tt.hasStandardBrowserEnv &&
            (a && k.isFunction(a) && (a = a(e)), a || (a !== !1 && LS(h))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && AS.read(e.xsrfCookieName);
          g && s.set(e.xsrfHeaderName, g);
        }
        o === void 0 && s.setContentType(null),
          "setRequestHeader" in d &&
            k.forEach(s.toJSON(), function (b, y) {
              d.setRequestHeader(y, b);
            }),
          k.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          i && i !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", bp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", bp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (g) => {
              d &&
                (r(!g || g.type ? new us(null, e, d) : g),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const v = FS(h);
        if (v && Tt.protocols.indexOf(v) === -1) {
          r(new J("Unsupported protocol " + v + ":", J.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  jc = { http: pS, xhr: US };
k.forEach(jc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const $p = (e) => `- ${e}`,
  VS = (e) => k.isFunction(e) || e === null || e === !1,
  o0 = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !VS(n) && ((r = jc[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new J(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map($p).join(`
`)
            : " " + $p(s[0])
          : "as no adapter specified";
        throw new J(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: jc,
  };
function $l(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new us(null, e);
}
function Sp(e) {
  return (
    $l(e),
    (e.headers = Kt.from(e.headers)),
    (e.data = bl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    o0
      .getAdapter(e.adapter || ed.adapter)(e)
      .then(
        function (r) {
          return (
            $l(e),
            (r.data = bl.call(e, e.transformResponse, r)),
            (r.headers = Kt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            n0(r) ||
              ($l(e),
              r &&
                r.response &&
                ((r.response.data = bl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Kt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Ep = (e) => (e instanceof Kt ? e.toJSON() : e);
function Vr(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, d) {
    return k.isPlainObject(u) && k.isPlainObject(f)
      ? k.merge.call({ caseless: d }, u, f)
      : k.isPlainObject(f)
      ? k.merge({}, f)
      : k.isArray(f)
      ? f.slice()
      : f;
  }
  function o(u, f, d) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, f, d);
  }
  function s(u, f) {
    if (!k.isUndefined(f)) return r(void 0, f);
  }
  function i(u, f) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, d) {
    if (d in t) return r(u, f);
    if (d in e) return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, f) => o(Ep(u), Ep(f), !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = c[f] || o,
        h = d(e[f], t[f], f);
      (k.isUndefined(h) && d !== a) || (n[f] = h);
    }),
    n
  );
}
const s0 = "1.6.7",
  td = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    td[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Cp = {};
td.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      s0 +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, a) => {
    if (t === !1)
      throw new J(
        o(i, " has been removed" + (n ? " in " + n : "")),
        J.ERR_DEPRECATED
      );
    return (
      n &&
        !Cp[i] &&
        ((Cp[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, i, a) : !0
    );
  };
};
function HS(e, t, n) {
  if (typeof e != "object")
    throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const a = e[s],
        c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new J("option " + s + " must be " + c, J.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new J("Unknown option " + s, J.ERR_BAD_OPTION);
  }
}
const Dc = { assertOptions: HS, validators: td },
  cn = Dc.validators;
class Gi {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new xp(), response: new xp() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? s &&
            !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + s)
          : (r.stack = s);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Vr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      Dc.assertOptions(
        r,
        {
          silentJSONParsing: cn.transitional(cn.boolean),
          forcedJSONParsing: cn.transitional(cn.boolean),
          clarifyTimeoutError: cn.transitional(cn.boolean),
        },
        !1
      ),
      o != null &&
        (k.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Dc.assertOptions(
              o,
              { encode: cn.function, serialize: cn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && k.merge(s.common, s[n.method]);
    s &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete s[v];
        }
      ),
      (n.headers = Kt.concat(i, s));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((c = c && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let f,
      d = 0,
      h;
    if (!c) {
      const v = [Sp.bind(this), void 0];
      for (
        v.unshift.apply(v, a),
          v.push.apply(v, u),
          h = v.length,
          f = Promise.resolve(n);
        d < h;

      )
        f = f.then(v[d++], v[d++]);
      return f;
    }
    h = a.length;
    let x = n;
    for (d = 0; d < h; ) {
      const v = a[d++],
        g = a[d++];
      try {
        x = v(x);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      f = Sp.call(this, x);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = u.length; d < h; ) f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = Vr(this.defaults, t);
    const n = r0(t.baseURL, t.url);
    return Jg(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  Gi.prototype[t] = function (n, r) {
    return this.request(
      Vr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        Vr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (Gi.prototype[t] = n()), (Gi.prototype[t + "Form"] = n(!0));
});
const hi = Gi;
class nd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      t(function (s, i, a) {
        r.reason || ((r.reason = new us(s, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new nd(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const WS = nd;
function KS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function GS(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const Ac = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ac).forEach(([e, t]) => {
  Ac[t] = e;
});
const YS = Ac;
function i0(e) {
  const t = new hi(e),
    n = zg(hi.prototype.request, t);
  return (
    k.extend(n, hi.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return i0(Vr(e, o));
    }),
    n
  );
}
const ye = i0(ed);
ye.Axios = hi;
ye.CanceledError = us;
ye.CancelToken = WS;
ye.isCancel = n0;
ye.VERSION = s0;
ye.toFormData = Ca;
ye.AxiosError = J;
ye.Cancel = ye.CanceledError;
ye.all = function (t) {
  return Promise.all(t);
};
ye.spread = KS;
ye.isAxiosError = GS;
ye.mergeConfig = Vr;
ye.AxiosHeaders = Kt;
ye.formToJSON = (e) => t0(k.isHTMLForm(e) ? new FormData(e) : e);
ye.getAdapter = o0.getAdapter;
ye.HttpStatusCode = YS;
ye.default = ye;
const a0 = l.createContext(null),
  ds = () => l.useContext(a0),
  QS = ({ children: e }) => {
    const [t, n] = l.useState(!1),
      [r, o] = l.useState(null),
      s = Yu(),
      { toast: i } = ba();
    l.useEffect(() => {
      ye.get("https://readify-xbps.onrender.com0/user", { withCredentials: !0 })
        .then((u) => {
          n(!0), o(u.data);
        })
        .catch((u) => console.error("Error:", u));
    }, []);
    const a = () => {
        n(!0);
      },
      c = () => {
        ye.get("https://readify-xbps.onrender.com0/logout", {
          withCredentials: !0,
        })
          .then(() => {
            n(!1), o(null), i({ title: "You have been logged out." }), s("/");
          })
          .catch((u) => console.error("Error:", u));
      };
    return p.jsx(a0.Provider, {
      value: { isAuthenticated: t, user: r, login: a, logout: c },
      children: e,
    });
  };
function XS() {
  return p.jsx("div", {
    children: p.jsx(ls, {
      to: "/login",
      children: p.jsx(qt, { className: "mt-4 w-24", children: "Login" }),
    }),
  });
}
function qS({ children: e, errorMessage: t, dataLength: n }) {
  const r = ds(),
    o = r == null ? void 0 : r.user;
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col justify-start mt-10 mb-8",
    children: [
      n === 0 &&
        p.jsx("h3", {
          className: "scroll-m-20 text-2xl font-semibold tracking-tight mb-6",
          children: "Your library is empty",
        }),
      t ? p.jsx(Fg, { error: t }) : p.jsx(p.Fragment, { children: e }),
      o ? "" : p.jsx(XS, {}),
    ],
  });
}
class JS extends HTMLElement {
  constructor() {
    super();
    it(this, "_propsToUpgrade", {});
    it(this, "shadow");
    it(this, "template");
    it(this, "defaultProps");
    it(this, "isAttached", !1);
    (this.shadow = this.attachShadow({ mode: "open" })),
      (this.template = document.createElement("template"));
  }
  storePropsToUpgrade(n) {
    n.forEach((r) => {
      this.hasOwnProperty(r) &&
        this[r] !== void 0 &&
        ((this._propsToUpgrade[r] = this[r]), delete this[r]);
    });
  }
  upgradeStoredProps() {
    Object.entries(this._propsToUpgrade).forEach(([n, r]) => {
      this.setAttribute(n, r);
    });
  }
  reflect(n) {
    n.forEach((r) => {
      Object.defineProperty(this, r, {
        set(o) {
          "string,number".includes(typeof o)
            ? this.setAttribute(r, o.toString())
            : this.removeAttribute(r);
        },
        get() {
          return this.getAttribute(r);
        },
      });
    });
  }
  applyDefaultProps(n) {
    (this.defaultProps = n),
      Object.entries(n).forEach(([r, o]) => {
        this[r] = this[r] || o.toString();
      });
  }
}
var Rp =
  ":host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate var(--uib-speed) linear infinite;height:var(--uib-size);overflow:visible;transform-origin:center;width:var(--uib-size);will-change:transform}.car{stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:stretch calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}.car,.track{fill:none;transition:stroke .5s ease}.track{stroke:var(--uib-color);opacity:var(--uib-bg-opacity)}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes stretch{0%{stroke-dasharray:0,150;stroke-dashoffset:0}50%{stroke-dasharray:75,150;stroke-dashoffset:-25}to{stroke-dashoffset:-99}}";
class Pp extends JS {
  constructor() {
    super();
    it(this, "_attributes", ["size", "color", "speed", "stroke", "bg-opacity"]);
    it(this, "size");
    it(this, "color");
    it(this, "speed");
    it(this, "stroke");
    it(this, "bg-opacity");
    this.storePropsToUpgrade(this._attributes), this.reflect(this._attributes);
  }
  static get observedAttributes() {
    return ["size", "color", "stroke", "speed", "bg-opacity"];
  }
  connectedCallback() {
    this.upgradeStoredProps(),
      this.applyDefaultProps({
        size: 40,
        color: "black",
        stroke: 5,
        speed: 2,
        "bg-opacity": 0,
      });
    const n = parseInt(this.size),
      r = parseInt(this.stroke),
      o = n / 2,
      s = Math.max(0, n / 2 - r / 2);
    (this.template.innerHTML = `
      <svg
        class="container"
        viewBox="0 0 ${this.size} ${this.size}"
        height="${this.size}"
        width="${this.size}"
      >
        <circle 
          class="track"
          cx="${o}" 
          cy="${o}" 
          r="${s}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
        <circle 
          class="car"
          cx="${o}" 
          cy="${o}" 
          r="${s}" 
          pathlength="100" 
          stroke-width="${this.stroke}px" 
          fill="none" 
        />
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
          --uib-bg-opacity: ${this["bg-opacity"]};
        }
        ${Rp}
      </style>
    `),
      this.shadow.replaceChildren(this.template.content.cloneNode(!0));
  }
  attributeChangedCallback() {
    const n = this.shadow.querySelector("style"),
      r = this.shadow.querySelector("svg"),
      o = this.shadow.querySelectorAll("circle");
    if (!n) return;
    const s = parseInt(this.size),
      i = parseInt(this.stroke),
      a = String(s / 2),
      c = String(Math.max(0, s / 2 - i / 2));
    r.setAttribute("height", this.stroke),
      r.setAttribute("width", this.stroke),
      r.setAttribute("viewBox", `0 0 ${s} ${s}`),
      o.forEach((u) => {
        u.setAttribute("cx", a),
          u.setAttribute("cy", a),
          u.setAttribute("r", c),
          u.setAttribute("stroke-width", this.stroke);
      }),
      (n.innerHTML = `
      :host{
        --uib-size: ${s}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
        --uib-bg-opacity: ${this["bg-opacity"]};
      }
      ${Rp}
    `);
  }
}
var ZS = {
  register: (e = "l-ring") => {
    customElements.get(e) || customElements.define(e, class extends Pp {});
  },
  element: Pp,
};
const rd = () => (
  ZS.register(),
  p.jsx("div", {
    className: "flex justify-center items-center mt-10",
    children: p.jsx("l-ring", {
      size: "40",
      stroke: "5",
      "bg-opacity": "0",
      speed: "2",
      color: "black",
    }),
  })
);
function eE(e, t) {
  const n = l.createContext(t);
  function r(s) {
    const { children: i, ...a } = s,
      c = l.useMemo(() => a, Object.values(a));
    return l.createElement(n.Provider, { value: c }, i);
  }
  function o(s) {
    const i = l.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function He(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i),
      c = n.length;
    n = [...n, i];
    function u(d) {
      const { scope: h, children: x, ...v } = d,
        g = (h == null ? void 0 : h[e][c]) || a,
        b = l.useMemo(() => v, Object.values(v));
      return l.createElement(g.Provider, { value: b }, x);
    }
    function f(d, h) {
      const x = (h == null ? void 0 : h[e][c]) || a,
        v = l.useContext(x);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, f];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function (a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (o.scopeName = e), [r, tE(o, ...t)];
}
function tE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: c, scopeName: u }) => {
        const d = c(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function D(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
const je =
    globalThis != null && globalThis.document ? l.useLayoutEffect : () => {},
  nE = mm.useId || (() => {});
let rE = 0;
function Pn(e) {
  const [t, n] = l.useState(nE());
  return (
    je(() => {
      e || n((r) => r ?? String(rE++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function De(e) {
  const t = l.useRef(e);
  return (
    l.useEffect(() => {
      t.current = e;
    }),
    l.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function At({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = oE({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    a = De(n),
    c = l.useCallback(
      (u) => {
        if (s) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [s, e, o, a]
    );
  return [i, c];
}
function oE({ defaultProp: e, onChange: t }) {
  const n = l.useState(e),
    [r] = n,
    o = l.useRef(r),
    s = De(t);
  return (
    l.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
const sE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  K = sE.reduce((e, t) => {
    const n = l.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        a = s ? Nn : t;
      return (
        l.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        l.createElement(a, P({}, i, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function od(e, t) {
  e && In.flushSync(() => e.dispatchEvent(t));
}
function iE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Mc = "dismissableLayer.update",
  aE = "dismissableLayer.pointerDownOutside",
  lE = "dismissableLayer.focusOutside";
let _p;
const l0 = l.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  fs = l.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: c,
        ...u
      } = e,
      f = l.useContext(l0),
      [d, h] = l.useState(null),
      x =
        (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, v] = l.useState({}),
      g = X(t, (R) => h(R)),
      b = Array.from(f.layers),
      [y] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = b.indexOf(y),
      w = d ? b.indexOf(d) : -1,
      $ = f.layersWithOutsidePointerEventsDisabled.size > 0,
      S = w >= m,
      C = uE((R) => {
        const L = R.target,
          M = [...f.branches].some((H) => H.contains(L));
        !S ||
          M ||
          (s == null || s(R),
          a == null || a(R),
          R.defaultPrevented || c == null || c());
      }, x),
      E = dE((R) => {
        const L = R.target;
        [...f.branches].some((H) => H.contains(L)) ||
          (i == null || i(R),
          a == null || a(R),
          R.defaultPrevented || c == null || c());
      }, x);
    return (
      iE((R) => {
        w === f.layers.size - 1 &&
          (o == null || o(R),
          !R.defaultPrevented && c && (R.preventDefault(), c()));
      }, x),
      l.useEffect(() => {
        if (d)
          return (
            r &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((_p = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = "none")),
              f.layersWithOutsidePointerEventsDisabled.add(d)),
            f.layers.add(d),
            kp(),
            () => {
              r &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = _p);
            }
          );
      }, [d, x, r, f]),
      l.useEffect(
        () => () => {
          d &&
            (f.layers.delete(d),
            f.layersWithOutsidePointerEventsDisabled.delete(d),
            kp());
        },
        [d, f]
      ),
      l.useEffect(() => {
        const R = () => v({});
        return (
          document.addEventListener(Mc, R),
          () => document.removeEventListener(Mc, R)
        );
      }, []),
      l.createElement(
        K.div,
        P({}, u, {
          ref: g,
          style: {
            pointerEvents: $ ? (S ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: D(e.onFocusCapture, E.onFocusCapture),
          onBlurCapture: D(e.onBlurCapture, E.onBlurCapture),
          onPointerDownCapture: D(
            e.onPointerDownCapture,
            C.onPointerDownCapture
          ),
        })
      )
    );
  }),
  cE = l.forwardRef((e, t) => {
    const n = l.useContext(l0),
      r = l.useRef(null),
      o = X(t, r);
    return (
      l.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      l.createElement(K.div, P({}, e, { ref: o }))
    );
  });
function uE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e),
    r = l.useRef(!1),
    o = l.useRef(() => {});
  return (
    l.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let f = function () {
              c0(aE, n, u, { discrete: !0 });
            };
            var c = f;
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = f),
                t.addEventListener("click", o.current, { once: !0 }))
              : f();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function dE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e),
    r = l.useRef(!1);
  return (
    l.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          c0(lE, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function kp() {
  const e = new CustomEvent(Mc);
  document.dispatchEvent(e);
}
function c0(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? od(o, s) : o.dispatchEvent(s);
}
const fE = fs,
  pE = cE,
  Sl = "focusScope.autoFocusOnMount",
  El = "focusScope.autoFocusOnUnmount",
  Np = { bubbles: !1, cancelable: !0 },
  sd = l.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [a, c] = l.useState(null),
      u = De(o),
      f = De(s),
      d = l.useRef(null),
      h = X(t, (g) => c(g)),
      x = l.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    l.useEffect(() => {
      if (r) {
        let m = function (C) {
            if (x.paused || !a) return;
            const E = C.target;
            a.contains(E) ? (d.current = E) : un(d.current, { select: !0 });
          },
          w = function (C) {
            if (x.paused || !a) return;
            const E = C.relatedTarget;
            E !== null && (a.contains(E) || un(d.current, { select: !0 }));
          },
          $ = function (C) {
            if (document.activeElement === document.body)
              for (const R of C) R.removedNodes.length > 0 && un(a);
          };
        var g = m,
          b = w,
          y = $;
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", w);
        const S = new MutationObserver($);
        return (
          a && S.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", w),
              S.disconnect();
          }
        );
      }
    }, [r, a, x.paused]),
      l.useEffect(() => {
        if (a) {
          Op.add(x);
          const g = document.activeElement;
          if (!a.contains(g)) {
            const y = new CustomEvent(Sl, Np);
            a.addEventListener(Sl, u),
              a.dispatchEvent(y),
              y.defaultPrevented ||
                (mE(xE(u0(a)), { select: !0 }),
                document.activeElement === g && un(a));
          }
          return () => {
            a.removeEventListener(Sl, u),
              setTimeout(() => {
                const y = new CustomEvent(El, Np);
                a.addEventListener(El, f),
                  a.dispatchEvent(y),
                  y.defaultPrevented || un(g ?? document.body, { select: !0 }),
                  a.removeEventListener(El, f),
                  Op.remove(x);
              }, 0);
          };
        }
      }, [a, u, f, x]);
    const v = l.useCallback(
      (g) => {
        if ((!n && !r) || x.paused) return;
        const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          y = document.activeElement;
        if (b && y) {
          const m = g.currentTarget,
            [w, $] = hE(m);
          w && $
            ? !g.shiftKey && y === $
              ? (g.preventDefault(), n && un(w, { select: !0 }))
              : g.shiftKey &&
                y === w &&
                (g.preventDefault(), n && un($, { select: !0 }))
            : y === m && g.preventDefault();
        }
      },
      [n, r, x.paused]
    );
    return l.createElement(
      K.div,
      P({ tabIndex: -1 }, i, { ref: h, onKeyDown: v })
    );
  });
function mE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((un(r, { select: t }), document.activeElement !== n)) return;
}
function hE(e) {
  const t = u0(e),
    n = Tp(t, e),
    r = Tp(t.reverse(), e);
  return [n, r];
}
function u0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tp(e, t) {
  for (const n of e) if (!gE(n, { upTo: t })) return n;
}
function gE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function vE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function un(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && vE(e) && t && e.select();
  }
}
const Op = yE();
function yE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = jp(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = jp(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function jp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function xE(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Pa = l.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? Tw.createPortal(l.createElement(K.div, P({}, o, { ref: t })), r)
    : null;
});
function wE(e, t) {
  return l.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ct = (e) => {
  const { present: t, children: n } = e,
    r = bE(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n),
    s = X(r.ref, o.ref);
  return typeof n == "function" || r.isPresent
    ? l.cloneElement(o, { ref: s })
    : null;
};
Ct.displayName = "Presence";
function bE(e) {
  const [t, n] = l.useState(),
    r = l.useRef({}),
    o = l.useRef(e),
    s = l.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, c] = wE(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    l.useEffect(() => {
      const u = Hs(r.current);
      s.current = a === "mounted" ? u : "none";
    }, [a]),
    je(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const h = s.current,
          x = Hs(u);
        e
          ? c("MOUNT")
          : x === "none" || (u == null ? void 0 : u.display) === "none"
          ? c("UNMOUNT")
          : c(f && h !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, c]),
    je(() => {
      if (t) {
        const u = (d) => {
            const x = Hs(r.current).includes(d.animationName);
            d.target === t && x && In.flushSync(() => c("ANIMATION_END"));
          },
          f = (d) => {
            d.target === t && (s.current = Hs(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: l.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Hs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Cl = 0;
function id() {
  l.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Dp()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Dp()
      ),
      Cl++,
      () => {
        Cl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          Cl--;
      }
    );
  }, []);
}
function Dp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var Nt = function () {
  return (
    (Nt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    Nt.apply(this, arguments)
  );
};
function d0(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function $E(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var gi = "right-scroll-bar-position",
  vi = "width-before-scroll-bar",
  SE = "with-scroll-bars-hidden",
  EE = "--removed-body-scroll-bar-size";
function Rl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function CE(e, t) {
  var n = l.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Ap = new WeakMap();
function RE(e, t) {
  var n = CE(t || null, function (r) {
    return e.forEach(function (o) {
      return Rl(o, r);
    });
  });
  return (
    l.useLayoutEffect(
      function () {
        var r = Ap.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            s.has(a) || Rl(a, null);
          }),
            s.forEach(function (a) {
              o.has(a) || Rl(a, i);
            });
        }
        Ap.set(n, e);
      },
      [e]
    ),
    n
  );
}
function PE(e) {
  return e;
}
function _E(e, t) {
  t === void 0 && (t = PE);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(s), (i = n);
        }
        var c = function () {
            var f = i;
            (i = []), f.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(c);
          };
        u(),
          (n = {
            push: function (f) {
              i.push(f), u();
            },
            filter: function (f) {
              return (i = i.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function kE(e) {
  e === void 0 && (e = {});
  var t = _E(null);
  return (t.options = Nt({ async: !0, ssr: !1 }, e)), t;
}
var f0 = function (e) {
  var t = e.sideCar,
    n = d0(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return l.createElement(r, Nt({}, n));
};
f0.isSideCarExport = !0;
function NE(e, t) {
  return e.useMedium(t), f0;
}
var p0 = kE(),
  Pl = function () {},
  _a = l.forwardRef(function (e, t) {
    var n = l.useRef(null),
      r = l.useState({
        onScrollCapture: Pl,
        onWheelCapture: Pl,
        onTouchMoveCapture: Pl,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      a = e.children,
      c = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      d = e.shards,
      h = e.sideCar,
      x = e.noIsolation,
      v = e.inert,
      g = e.allowPinchZoom,
      b = e.as,
      y = b === void 0 ? "div" : b,
      m = d0(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      w = h,
      $ = RE([n, t]),
      S = Nt(Nt({}, m), o);
    return l.createElement(
      l.Fragment,
      null,
      f &&
        l.createElement(w, {
          sideCar: p0,
          removeScrollBar: u,
          shards: d,
          noIsolation: x,
          inert: v,
          setCallbacks: s,
          allowPinchZoom: !!g,
          lockRef: n,
        }),
      i
        ? l.cloneElement(l.Children.only(a), Nt(Nt({}, S), { ref: $ }))
        : l.createElement(y, Nt({}, S, { className: c, ref: $ }), a)
    );
  });
_a.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
_a.classNames = { fullWidth: vi, zeroRight: gi };
var TE = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function OE() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = TE();
  return t && e.setAttribute("nonce", t), e;
}
function jE(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function DE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var AE = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = OE()) && (jE(t, n), DE(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  ME = function () {
    var e = AE();
    return function (t, n) {
      l.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  m0 = function () {
    var e = ME(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  IE = { left: 0, top: 0, right: 0, gap: 0 },
  _l = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  LE = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [_l(n), _l(r), _l(o)];
  },
  FE = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return IE;
    var t = LE(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  zE = m0(),
  BE = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          SE,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          gi,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          vi,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(gi, " .")
        .concat(
          gi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(vi, " .")
        .concat(
          vi,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(EE, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  UE = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      s = l.useMemo(
        function () {
          return FE(o);
        },
        [o]
      );
    return l.createElement(zE, { styles: BE(s, !t, o, n ? "" : "!important") });
  },
  Ic = !1;
if (typeof window < "u")
  try {
    var Ws = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ic = !0), !0;
      },
    });
    window.addEventListener("test", Ws, Ws),
      window.removeEventListener("test", Ws, Ws);
  } catch {
    Ic = !1;
  }
var dr = Ic ? { passive: !1 } : !1,
  VE = function (e) {
    return e.tagName === "TEXTAREA";
  },
  h0 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !VE(e) && n[t] === "visible")
    );
  },
  HE = function (e) {
    return h0(e, "overflowY");
  },
  WE = function (e) {
    return h0(e, "overflowX");
  },
  Mp = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = g0(e, n);
      if (r) {
        var o = v0(e, n),
          s = o[1],
          i = o[2];
        if (s > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  KE = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  GE = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  g0 = function (e, t) {
    return e === "v" ? HE(t) : WE(t);
  },
  v0 = function (e, t) {
    return e === "v" ? KE(t) : GE(t);
  },
  YE = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  QE = function (e, t, n, r, o) {
    var s = YE(e, window.getComputedStyle(t).direction),
      i = s * r,
      a = n.target,
      c = t.contains(a),
      u = !1,
      f = i > 0,
      d = 0,
      h = 0;
    do {
      var x = v0(e, a),
        v = x[0],
        g = x[1],
        b = x[2],
        y = g - b - s * v;
      (v || y) && g0(e, a) && ((d += y), (h += v)), (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return (
      ((f && ((o && d === 0) || (!o && i > d))) ||
        (!f && ((o && h === 0) || (!o && -i > h)))) &&
        (u = !0),
      u
    );
  },
  Ks = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Ip = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Lp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  XE = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  qE = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  JE = 0,
  fr = [];
function ZE(e) {
  var t = l.useRef([]),
    n = l.useRef([0, 0]),
    r = l.useRef(),
    o = l.useState(JE++)[0],
    s = l.useState(function () {
      return m0();
    })[0],
    i = l.useRef(e);
  l.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    l.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = $E([e.lockRef.current], (e.shards || []).map(Lp), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = l.useCallback(function (g, b) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var y = Ks(g),
        m = n.current,
        w = "deltaX" in g ? g.deltaX : m[0] - y[0],
        $ = "deltaY" in g ? g.deltaY : m[1] - y[1],
        S,
        C = g.target,
        E = Math.abs(w) > Math.abs($) ? "h" : "v";
      if ("touches" in g && E === "h" && C.type === "range") return !1;
      var R = Mp(E, C);
      if (!R) return !0;
      if ((R ? (S = E) : ((S = E === "v" ? "h" : "v"), (R = Mp(E, C))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (w || $) && (r.current = S), !S)
      )
        return !0;
      var L = r.current || S;
      return QE(L, b, g, L === "h" ? w : $, !0);
    }, []),
    c = l.useCallback(function (g) {
      var b = g;
      if (!(!fr.length || fr[fr.length - 1] !== s)) {
        var y = "deltaY" in b ? Ip(b) : Ks(b),
          m = t.current.filter(function (S) {
            return S.name === b.type && S.target === b.target && XE(S.delta, y);
          })[0];
        if (m && m.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!m) {
          var w = (i.current.shards || [])
              .map(Lp)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(b.target);
              }),
            $ = w.length > 0 ? a(b, w[0]) : !i.current.noIsolation;
          $ && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    u = l.useCallback(function (g, b, y, m) {
      var w = { name: g, delta: b, target: y, should: m };
      t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function ($) {
            return $ !== w;
          });
        }, 1);
    }, []),
    f = l.useCallback(function (g) {
      (n.current = Ks(g)), (r.current = void 0);
    }, []),
    d = l.useCallback(function (g) {
      u(g.type, Ip(g), g.target, a(g, e.lockRef.current));
    }, []),
    h = l.useCallback(function (g) {
      u(g.type, Ks(g), g.target, a(g, e.lockRef.current));
    }, []);
  l.useEffect(function () {
    return (
      fr.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", c, dr),
      document.addEventListener("touchmove", c, dr),
      document.addEventListener("touchstart", f, dr),
      function () {
        (fr = fr.filter(function (g) {
          return g !== s;
        })),
          document.removeEventListener("wheel", c, dr),
          document.removeEventListener("touchmove", c, dr),
          document.removeEventListener("touchstart", f, dr);
      }
    );
  }, []);
  var x = e.removeScrollBar,
    v = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    v ? l.createElement(s, { styles: qE(o) }) : null,
    x ? l.createElement(UE, { gapMode: "margin" }) : null
  );
}
const e2 = NE(p0, ZE);
var y0 = l.forwardRef(function (e, t) {
  return l.createElement(_a, Nt({}, e, { ref: t, sideCar: e2 }));
});
y0.classNames = _a.classNames;
const ad = y0;
var t2 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  pr = new WeakMap(),
  Gs = new WeakMap(),
  Ys = {},
  kl = 0,
  x0 = function (e) {
    return e && (e.host || x0(e.parentNode));
  },
  n2 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = x0(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  r2 = function (e, t, n, r) {
    var o = n2(t, Array.isArray(e) ? e : [e]);
    Ys[n] || (Ys[n] = new WeakMap());
    var s = Ys[n],
      i = [],
      a = new Set(),
      c = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var f = function (d) {
      !d ||
        c.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (a.has(h)) f(h);
          else {
            var x = h.getAttribute(r),
              v = x !== null && x !== "false",
              g = (pr.get(h) || 0) + 1,
              b = (s.get(h) || 0) + 1;
            pr.set(h, g),
              s.set(h, b),
              i.push(h),
              g === 1 && v && Gs.set(h, !0),
              b === 1 && h.setAttribute(n, "true"),
              v || h.setAttribute(r, "true");
          }
        });
    };
    return (
      f(t),
      a.clear(),
      kl++,
      function () {
        i.forEach(function (d) {
          var h = pr.get(d) - 1,
            x = s.get(d) - 1;
          pr.set(d, h),
            s.set(d, x),
            h || (Gs.has(d) || d.removeAttribute(r), Gs.delete(d)),
            x || d.removeAttribute(n);
        }),
          kl--,
          kl ||
            ((pr = new WeakMap()),
            (pr = new WeakMap()),
            (Gs = new WeakMap()),
            (Ys = {}));
      }
    );
  },
  ld = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || t2(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        r2(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
const w0 = "Dialog",
  [b0, $0] = He(w0),
  [o2, Rt] = b0(w0),
  s2 = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = l.useRef(null),
      c = l.useRef(null),
      [u = !1, f] = At({ prop: r, defaultProp: o, onChange: s });
    return l.createElement(
      o2,
      {
        scope: t,
        triggerRef: a,
        contentRef: c,
        contentId: Pn(),
        titleId: Pn(),
        descriptionId: Pn(),
        open: u,
        onOpenChange: f,
        onOpenToggle: l.useCallback(() => f((d) => !d), [f]),
        modal: i,
      },
      n
    );
  },
  i2 = "DialogTrigger",
  a2 = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Rt(i2, n),
      s = X(t, o.triggerRef);
    return l.createElement(
      K.button,
      P(
        {
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": o.open,
          "aria-controls": o.contentId,
          "data-state": cd(o.open),
        },
        r,
        { ref: s, onClick: D(e.onClick, o.onOpenToggle) }
      )
    );
  }),
  S0 = "DialogPortal",
  [l2, E0] = b0(S0, { forceMount: void 0 }),
  c2 = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      s = Rt(S0, t);
    return l.createElement(
      l2,
      { scope: t, forceMount: n },
      l.Children.map(r, (i) =>
        l.createElement(
          Ct,
          { present: n || s.open },
          l.createElement(Pa, { asChild: !0, container: o }, i)
        )
      )
    );
  },
  Lc = "DialogOverlay",
  u2 = l.forwardRef((e, t) => {
    const n = E0(Lc, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Rt(Lc, e.__scopeDialog);
    return s.modal
      ? l.createElement(
          Ct,
          { present: r || s.open },
          l.createElement(d2, P({}, o, { ref: t }))
        )
      : null;
  }),
  d2 = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Rt(Lc, n);
    return l.createElement(
      ad,
      { as: Nn, allowPinchZoom: !0, shards: [o.contentRef] },
      l.createElement(
        K.div,
        P({ "data-state": cd(o.open) }, r, {
          ref: t,
          style: { pointerEvents: "auto", ...r.style },
        })
      )
    );
  }),
  Hr = "DialogContent",
  f2 = l.forwardRef((e, t) => {
    const n = E0(Hr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Rt(Hr, e.__scopeDialog);
    return l.createElement(
      Ct,
      { present: r || s.open },
      s.modal
        ? l.createElement(p2, P({}, o, { ref: t }))
        : l.createElement(m2, P({}, o, { ref: t }))
    );
  }),
  p2 = l.forwardRef((e, t) => {
    const n = Rt(Hr, e.__scopeDialog),
      r = l.useRef(null),
      o = X(t, n.contentRef, r);
    return (
      l.useEffect(() => {
        const s = r.current;
        if (s) return ld(s);
      }, []),
      l.createElement(
        C0,
        P({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: D(e.onCloseAutoFocus, (s) => {
            var i;
            s.preventDefault(),
              (i = n.triggerRef.current) === null || i === void 0 || i.focus();
          }),
          onPointerDownOutside: D(e.onPointerDownOutside, (s) => {
            const i = s.detail.originalEvent,
              a = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || a) && s.preventDefault();
          }),
          onFocusOutside: D(e.onFocusOutside, (s) => s.preventDefault()),
        })
      )
    );
  }),
  m2 = l.forwardRef((e, t) => {
    const n = Rt(Hr, e.__scopeDialog),
      r = l.useRef(!1),
      o = l.useRef(!1);
    return l.createElement(
      C0,
      P({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i;
          if (
            ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, s),
            !s.defaultPrevented)
          ) {
            var a;
            r.current ||
              (a = n.triggerRef.current) === null ||
              a === void 0 ||
              a.focus(),
              s.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (s) => {
          var i, a;
          (i = e.onInteractOutside) === null || i === void 0 || i.call(e, s),
            s.defaultPrevented ||
              ((r.current = !0),
              s.detail.originalEvent.type === "pointerdown" &&
                (o.current = !0));
          const c = s.target;
          ((a = n.triggerRef.current) === null || a === void 0
            ? void 0
            : a.contains(c)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" &&
              o.current &&
              s.preventDefault();
        },
      })
    );
  }),
  C0 = l.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...i
      } = e,
      a = Rt(Hr, n),
      c = l.useRef(null),
      u = X(t, c);
    return (
      id(),
      l.createElement(
        l.Fragment,
        null,
        l.createElement(
          sd,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
          },
          l.createElement(
            fs,
            P(
              {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": cd(a.open),
              },
              i,
              { ref: u, onDismiss: () => a.onOpenChange(!1) }
            )
          )
        ),
        !1
      )
    );
  }),
  R0 = "DialogTitle",
  h2 = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Rt(R0, n);
    return l.createElement(K.h2, P({ id: o.titleId }, r, { ref: t }));
  }),
  g2 = "DialogDescription",
  v2 = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Rt(g2, n);
    return l.createElement(K.p, P({ id: o.descriptionId }, r, { ref: t }));
  }),
  y2 = "DialogClose",
  x2 = l.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Rt(y2, n);
    return l.createElement(
      K.button,
      P({ type: "button" }, r, {
        ref: t,
        onClick: D(e.onClick, () => o.onOpenChange(!1)),
      })
    );
  });
function cd(e) {
  return e ? "open" : "closed";
}
const w2 = "DialogTitleWarning",
  [b2, o7] = eE(w2, { contentName: Hr, titleName: R0, docsSlug: "dialog" }),
  ud = s2,
  dd = a2,
  fd = c2,
  ps = u2,
  ms = f2,
  hs = h2,
  gs = v2,
  ka = x2,
  $2 = "AlertDialog",
  [S2, s7] = He($2, [$0]),
  nn = $0(),
  E2 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = nn(t);
    return l.createElement(ud, P({}, r, n, { modal: !0 }));
  },
  C2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = nn(n);
    return l.createElement(dd, P({}, o, r, { ref: t }));
  }),
  R2 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = nn(t);
    return l.createElement(fd, P({}, r, n));
  },
  P2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = nn(n);
    return l.createElement(ps, P({}, o, r, { ref: t }));
  }),
  P0 = "AlertDialogContent",
  [_2, k2] = S2(P0),
  N2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e,
      s = nn(n),
      i = l.useRef(null),
      a = X(t, i),
      c = l.useRef(null);
    return l.createElement(
      b2,
      { contentName: P0, titleName: T2, docsSlug: "alert-dialog" },
      l.createElement(
        _2,
        { scope: n, cancelRef: c },
        l.createElement(
          ms,
          P({ role: "alertdialog" }, s, o, {
            ref: a,
            onOpenAutoFocus: D(o.onOpenAutoFocus, (u) => {
              var f;
              u.preventDefault(),
                (f = c.current) === null ||
                  f === void 0 ||
                  f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
          }),
          l.createElement(kg, null, r),
          !1
        )
      )
    );
  }),
  T2 = "AlertDialogTitle",
  O2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = nn(n);
    return l.createElement(hs, P({}, o, r, { ref: t }));
  }),
  j2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = nn(n);
    return l.createElement(gs, P({}, o, r, { ref: t }));
  }),
  D2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = nn(n);
    return l.createElement(ka, P({}, o, r, { ref: t }));
  }),
  A2 = "AlertDialogCancel",
  M2 = l.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: o } = k2(A2, n),
      s = nn(n),
      i = X(t, o);
    return l.createElement(ka, P({}, s, r, { ref: i }));
  }),
  I2 = E2,
  L2 = C2,
  F2 = R2,
  _0 = P2,
  k0 = N2,
  N0 = D2,
  T0 = M2,
  O0 = O2,
  j0 = j2,
  z2 = I2,
  B2 = L2,
  U2 = F2,
  D0 = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(_0, {
      className: W(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
D0.displayName = _0.displayName;
const A0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsxs(U2, {
    children: [
      p.jsx(D0, {}),
      p.jsx(k0, {
        ref: n,
        className: W(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...t,
      }),
    ],
  })
);
A0.displayName = k0.displayName;
const M0 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: W("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
M0.displayName = "AlertDialogHeader";
const I0 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: W(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
I0.displayName = "AlertDialogFooter";
const L0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(O0, { ref: n, className: W("text-lg font-semibold", e), ...t })
);
L0.displayName = O0.displayName;
const F0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(j0, { ref: n, className: W("text-sm text-muted-foreground", e), ...t })
);
F0.displayName = j0.displayName;
const z0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(N0, { ref: n, className: W(Xu(), e), ...t })
);
z0.displayName = N0.displayName;
const B0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(T0, {
    ref: n,
    className: W(Xu({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t,
  })
);
B0.displayName = T0.displayName;
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var V2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H2 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ht = (e, t) => {
    const n = l.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: c,
          ...u
        },
        f
      ) =>
        l.createElement(
          "svg",
          {
            ref: f,
            ...V2,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(o) : s,
            className: ["lucide", `lucide-${H2(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, h]) => l.createElement(d, h)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U0 = ht("Blend", [
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["circle", { cx: "15", cy: "15", r: "7", key: "19ennj" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W2 = ht("BookOpenText", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
  ["path", { d: "M6 8h2", key: "30oboj" }],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vs = ht("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K2 = ht("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G2 = ht("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y2 = ht("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q2 = ht("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X2 = ht("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q2 = ht("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J2 = ht("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z2 = ht("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
]);
/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eC = ht("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
function tC({ handleDelete: e, id: t }) {
  return p.jsxs(z2, {
    children: [
      p.jsx(B2, {
        children: p.jsx(qt, {
          variant: "destructive",
          className: " h-6 ml-2",
          children: p.jsx(eC, { className: " h-3 w-3" }),
        }),
      }),
      p.jsxs(A0, {
        className: "w-3/4 rounded",
        children: [
          p.jsxs(M0, {
            children: [
              p.jsx(L0, { children: "Are you absolutely sure?" }),
              p.jsx(F0, {
                children:
                  "This action cannot be undone. This will permanently delete your document from the database.",
              }),
            ],
          }),
          p.jsxs(I0, {
            children: [
              p.jsx(B0, { children: "Cancel" }),
              p.jsx(z0, {
                onClick: () => e(t),
                className: "bg-red-500 hover:bg-red-700 text-foreground",
                children: "Delete",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function nC({ document: e, handleDelete: t }) {
  const n = ds(),
    r = n == null ? void 0 : n.user;
  return p.jsxs("div", {
    role: "presentation",
    children: [
      p.jsx("h3", {
        className: "text-md font-medium leading-none mb-8",
        children: "Documents",
      }),
      p.jsx("div", {
        className: "relative overflow-hidden rounded-sm",
        children: p.jsxs("table", {
          className: "table-fixed w-full text-left",
          children: [
            p.jsx("thead", {
              className: "text-black-200",
              children: p.jsxs("tr", {
                className: "bg-secondary",
                children: [
                  p.jsx("td", {
                    className:
                      "py-2 border font-medium leading-none text-sm p-4",
                    children: "Name",
                  }),
                  p.jsx("td", {
                    className:
                      "py-2 border text-sm font-medium leading-none text-end p-4",
                    children: "Date Added",
                  }),
                ],
              }),
            }),
            p.jsx("tbody", {
              className: " bg-background  text-foreground",
              children: e.map((o) =>
                p.jsxs(
                  "tr",
                  {
                    className: "py-4",
                    children: [
                      p.jsx("td", {
                        className:
                          "py-4 text-sm border text-muted-foreground p-4",
                        children: p.jsx(ls, {
                          to: `/documents/${o._id}`,
                          children: o.title,
                        }),
                      }),
                      p.jsxs("td", {
                        className:
                          "py-4 border text-muted-foreground text-xs md:text-sm text-end p-4",
                        children: [
                          new Date(o.createdAt).toLocaleDateString(),
                          r && p.jsx(tC, { handleDelete: t, id: o._id }),
                        ],
                      }),
                    ],
                  },
                  o._id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function rC() {
  const { toast: e } = ba(),
    [t, n] = l.useState([]),
    [r, o] = l.useState(!1),
    [s, i] = l.useState(""),
    [a, c] = l.useState(0),
    u = ds(),
    f = u == null ? void 0 : u.user,
    d = (h) => {
      ye.delete(`https://readify-xbps.onrender.com0/documents/${h}`, {
        withCredentials: !0,
      })
        .then(() => {
          o(!1),
            n(t.filter((x) => x._id !== h)),
            e({
              variant: "destructive",
              title: "Your document has been deleted.",
            });
        })
        .catch((x) => {
          o(!1), console.log(x);
        });
    };
  return (
    l.useEffect(() => {
      async function h() {
        try {
          o(!0), i("");
          const x = await fetch(
            "https://readify-xbps.onrender.com0/documents",
            { credentials: "include" }
          );
          if (!x.ok)
            throw new Error("Something went wrong with fetching docments");
          const v = await x.json();
          if (v.Response === "False") throw new Error("Document not found");
          n(v.data), c(v.data.length), o(!1);
        } catch (x) {
          console.log(x),
            i(
              f
                ? "Something went wrong , failed to load Documents."
                : "You must login first"
            );
        } finally {
          o(!1);
        }
      }
      h();
    }, [f]),
    p.jsxs("div", {
      role: "presentation",
      children: [
        p.jsx("div", {
          className: "border-b",
          children: p.jsx("h2", {
            className:
              "scroll-m-20 pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0",
            children: "My Library",
          }),
        }),
        p.jsx("section", {
          children: r
            ? p.jsx(rd, {})
            : p.jsx(p.Fragment, {
                children: p.jsx(qS, {
                  errorMessage: s,
                  dataLength: a,
                  children: p.jsx(nC, { document: t, handleDelete: d }),
                }),
              }),
        }),
      ],
    })
  );
}
function V0({ children: e }) {
  return p.jsx("div", {
    role: "presentation",
    className: "w-full h-14 shadow-sm flex flex-row justify-end border-b gap-2",
    children: e,
  });
}
function or(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oC = ["color"],
  sC = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, oC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  iC = ["color"],
  pd = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, iC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  aC = ["color"],
  lC = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, aC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  cC = ["color"],
  uC = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, cC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  dC = ["color"],
  fC = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, dC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  pC = ["color"],
  md = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, pC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  mC = ["color"],
  hC = l.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = or(e, mC);
    return l.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      l.createElement("path", {
        d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
        fill: r,
      })
    );
  });
const gC = ud,
  vC = dd,
  yC = fd,
  H0 = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(ps, {
      ref: n,
      className: W(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
H0.displayName = ps.displayName;
const W0 = l.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs(yC, {
    children: [
      p.jsx(H0, {}),
      p.jsxs(ms, {
        ref: r,
        className: W(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          p.jsxs(ka, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              p.jsx(md, { className: "h-4 w-4" }),
              p.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
W0.displayName = ms.displayName;
const K0 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: W("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
K0.displayName = "DialogHeader";
const G0 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: W(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
G0.displayName = "DialogFooter";
const Y0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(hs, {
    ref: n,
    className: W("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Y0.displayName = hs.displayName;
const Q0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(gs, { ref: n, className: W("text-sm text-muted-foreground", e), ...t })
);
Q0.displayName = gs.displayName;
const X0 = l.forwardRef(({ className: e, type: t, ...n }, r) =>
  p.jsx("input", {
    type: t,
    className: W(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n,
  })
);
X0.displayName = "Input";
const $t = l.forwardRef((e, t) =>
    l.createElement(
      K.label,
      P({}, e, {
        ref: t,
        onMouseDown: (n) => {
          var r;
          (r = e.onMouseDown) === null || r === void 0 || r.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault();
        },
      })
    )
  ),
  q0 = $t,
  xC = wa(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Dr = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(q0, { ref: n, className: W(xC(), e), ...t })
  );
Dr.displayName = q0.displayName;
const J0 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx("textarea", {
    className: W(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
J0.displayName = "Textarea";
function wC({
  handleSubmit: e,
  title: t,
  setTitle: n,
  text: r,
  setText: o,
  formError: s,
  loading: i,
  resetNewFormState: a,
}) {
  return p.jsxs(gC, {
    children: [
      p.jsx(vC, {
        asChild: !0,
        children: p.jsx(qt, {
          onClick: a,
          variant: "outline",
          children: "+ New Document",
        }),
      }),
      p.jsx(W0, {
        className: "w-64 md:w-96 lg:w-96 rounded-sm ",
        children: p.jsxs("form", {
          onSubmit: e,
          children: [
            p.jsxs(K0, {
              children: [
                p.jsx(Y0, { children: "Insert Text" }),
                p.jsx(Q0, {
                  children:
                    "You can insert the Title and the Text of your document here.",
                }),
              ],
            }),
            i
              ? p.jsx(rd, {})
              : p.jsxs(p.Fragment, {
                  children: [
                    p.jsxs("div", {
                      role: "presentation",
                      className: "grid gap-4 py-4",
                      children: [
                        p.jsxs("div", {
                          className: "grid w-full items-center gap-4",
                          children: [
                            p.jsx(Dr, {
                              htmlFor: "name",
                              className: "",
                              children: "Title",
                            }),
                            p.jsx(X0, {
                              value: t,
                              onChange: (c) => n(c.target.value),
                              type: "text",
                              id: "name",
                              className: "col-span-3",
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          className: "grid w-full items-center gap-4",
                          children: [
                            p.jsx(Dr, {
                              htmlFor: "text",
                              className: "",
                              children: "Text",
                            }),
                            p.jsx(J0, {
                              value: r,
                              onChange: (c) => o(c.target.value),
                              id: "text",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s && p.jsx("p", { className: "text-red-400", children: s }),
                  ],
                }),
            p.jsx(G0, {
              children: p.jsx(qt, {
                className: "",
                type: "submit",
                children: "Save changes",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function bC() {
  const e = Yu(),
    { toast: t } = ba(),
    [n, r] = l.useState(""),
    [o, s] = l.useState(""),
    [i, a] = l.useState(null),
    [c, u] = l.useState(!1),
    f = () => {
      r(""), s(""), a(null);
    };
  function d(h) {
    h.preventDefault();
    const x = { title: n, text: o };
    if (!n || !o) {
      a("Please fill out all fields");
      return;
    }
    u(!0),
      ye
        .post("https://readify-xbps.onrender.com0/documents", x, {
          withCredentials: !0,
        })
        .then((v) => {
          console.log(v.data),
            u(!1),
            e(`/documents/${v.data._id}`),
            t({ title: "Your document has been added to the library." });
        })
        .catch((v) => {
          u(!1),
            a(
              "Something went wrong with adding your document. Please try again."
            ),
            console.log(v);
        });
  }
  return p.jsx(wC, {
    title: n,
    setTitle: r,
    handleSubmit: d,
    text: o,
    setText: s,
    formError: i,
    loading: c,
    resetNewFormState: f,
  });
}
function ys(e) {
  const t = e + "CollectionProvider",
    [n, r] = He(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (x) => {
      const { scope: v, children: g } = x,
        b = Ee.useRef(null),
        y = Ee.useRef(new Map()).current;
      return Ee.createElement(o, { scope: v, itemMap: y, collectionRef: b }, g);
    },
    a = e + "CollectionSlot",
    c = Ee.forwardRef((x, v) => {
      const { scope: g, children: b } = x,
        y = s(a, g),
        m = X(v, y.collectionRef);
      return Ee.createElement(Nn, { ref: m }, b);
    }),
    u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    d = Ee.forwardRef((x, v) => {
      const { scope: g, children: b, ...y } = x,
        m = Ee.useRef(null),
        w = X(v, m),
        $ = s(u, g);
      return (
        Ee.useEffect(
          () => (
            $.itemMap.set(m, { ref: m, ...y }), () => void $.itemMap.delete(m)
          )
        ),
        Ee.createElement(Nn, { [f]: "", ref: w }, b)
      );
    });
  function h(x) {
    const v = s(e + "CollectionConsumer", x);
    return Ee.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        ($, S) => y.indexOf($.ref.current) - y.indexOf(S.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: i, Slot: c, ItemSlot: d }, h, r];
}
const $C = l.createContext(void 0);
function xs(e) {
  const t = l.useContext($C);
  return e || t || "ltr";
}
const SC = ["top", "right", "bottom", "left"],
  Tn = Math.min,
  qe = Math.max,
  Yi = Math.round,
  Qs = Math.floor,
  On = (e) => ({ x: e, y: e }),
  EC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  CC = { start: "end", end: "start" };
function Fc(e, t, n) {
  return qe(e, Tn(t, n));
}
function Jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zt(e) {
  return e.split("-")[0];
}
function Zr(e) {
  return e.split("-")[1];
}
function hd(e) {
  return e === "x" ? "y" : "x";
}
function gd(e) {
  return e === "y" ? "height" : "width";
}
function eo(e) {
  return ["top", "bottom"].includes(Zt(e)) ? "y" : "x";
}
function vd(e) {
  return hd(eo(e));
}
function RC(e, t, n) {
  n === void 0 && (n = !1);
  const r = Zr(e),
    o = vd(e),
    s = gd(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = Qi(i)), [i, Qi(i)];
}
function PC(e) {
  const t = Qi(e);
  return [zc(e), t, zc(t)];
}
function zc(e) {
  return e.replace(/start|end/g, (t) => CC[t]);
}
function _C(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function kC(e, t, n, r) {
  const o = Zr(e);
  let s = _C(Zt(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(zc)))), s
  );
}
function Qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => EC[t]);
}
function NC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Z0(e) {
  return typeof e != "number"
    ? NC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Xi(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Fp(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = eo(t),
    i = vd(t),
    a = gd(i),
    c = Zt(t),
    u = s === "y",
    f = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[a] / 2 - o[a] / 2;
  let x;
  switch (c) {
    case "top":
      x = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      x = { x: f, y: r.y + r.height };
      break;
    case "right":
      x = { x: r.x + r.width, y: d };
      break;
    case "left":
      x = { x: r.x - o.width, y: d };
      break;
    default:
      x = { x: r.x, y: r.y };
  }
  switch (Zr(t)) {
    case "start":
      x[i] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      x[i] += h * (n && u ? -1 : 1);
      break;
  }
  return x;
}
const TC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: d } = Fp(u, r, c),
    h = r,
    x = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: b, fn: y } = a[g],
      {
        x: m,
        y: w,
        data: $,
        reset: S,
      } = await y({
        x: f,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: x,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (f = m ?? f),
      (d = w ?? d),
      (x = { ...x, [b]: { ...x[b], ...$ } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: f, y: d } = Fp(u, h, c))),
        (g = -1));
  }
  return { x: f, y: d, placement: h, strategy: o, middlewareData: x };
};
async function Jo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: x = 0,
    } = Jt(t, e),
    v = Z0(x),
    b = a[h ? (d === "floating" ? "reference" : "floating") : d],
    y = Xi(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: c,
      })
    ),
    m = d === "floating" ? { ...i.floating, x: r, y: o } : i.reference,
    w = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    $ = (await (s.isElement == null ? void 0 : s.isElement(w)))
      ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Xi(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: w,
            strategy: c,
          })
        : m
    );
  return {
    top: (y.top - S.top + v.top) / $.y,
    bottom: (S.bottom - y.bottom + v.bottom) / $.y,
    left: (y.left - S.left + v.left) / $.x,
    right: (S.right - y.right + v.right) / $.x,
  };
}
const OC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: c,
        } = t,
        { element: u, padding: f = 0 } = Jt(e, t) || {};
      if (u == null) return {};
      const d = Z0(f),
        h = { x: n, y: r },
        x = vd(o),
        v = gd(x),
        g = await i.getDimensions(u),
        b = x === "y",
        y = b ? "top" : "left",
        m = b ? "bottom" : "right",
        w = b ? "clientHeight" : "clientWidth",
        $ = s.reference[v] + s.reference[x] - h[x] - s.floating[v],
        S = h[x] - s.reference[x],
        C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let E = C ? C[w] : 0;
      (!E || !(await (i.isElement == null ? void 0 : i.isElement(C)))) &&
        (E = a.floating[w] || s.floating[v]);
      const R = $ / 2 - S / 2,
        L = E / 2 - g[v] / 2 - 1,
        M = Tn(d[y], L),
        H = Tn(d[m], L),
        j = M,
        Y = E - g[v] - H,
        N = E / 2 - g[v] / 2 + R,
        I = Fc(j, N, Y),
        V =
          !c.arrow &&
          Zr(o) != null &&
          N !== I &&
          s.reference[v] / 2 - (N < j ? M : H) - g[v] / 2 < 0,
        B = V ? (N < j ? N - j : N - Y) : 0;
      return {
        [x]: h[x] + B,
        data: {
          [x]: I,
          centerOffset: N - I - B,
          ...(V && { alignmentOffset: B }),
        },
        reset: V,
      };
    },
  }),
  jC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...b
            } = Jt(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const y = Zt(o),
            m = Zt(a) === a,
            w = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            $ = h || (m || !g ? [Qi(a)] : PC(a));
          !h && v !== "none" && $.push(...kC(a, g, v, w));
          const S = [a, ...$],
            C = await Jo(t, b),
            E = [];
          let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((f && E.push(C[y]), d)) {
            const j = RC(o, i, w);
            E.push(C[j[0]], C[j[1]]);
          }
          if (
            ((R = [...R, { placement: o, overflows: E }]),
            !E.every((j) => j <= 0))
          ) {
            var L, M;
            const j = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
              Y = S[j];
            if (Y)
              return {
                data: { index: j, overflows: R },
                reset: { placement: Y },
              };
            let N =
              (M = R.filter((I) => I.overflows[0] <= 0).sort(
                (I, V) => I.overflows[1] - V.overflows[1]
              )[0]) == null
                ? void 0
                : M.placement;
            if (!N)
              switch (x) {
                case "bestFit": {
                  var H;
                  const I =
                    (H = R.map((V) => [
                      V.placement,
                      V.overflows
                        .filter((B) => B > 0)
                        .reduce((B, T) => B + T, 0),
                    ]).sort((V, B) => V[1] - B[1])[0]) == null
                      ? void 0
                      : H[0];
                  I && (N = I);
                  break;
                }
                case "initialPlacement":
                  N = a;
                  break;
              }
            if (o !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function zp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Bp(e) {
  return SC.some((t) => e[t] >= 0);
}
const DC = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Jt(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await Jo(t, { ...o, elementContext: "reference" }),
              i = zp(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Bp(i) },
            };
          }
          case "escaped": {
            const s = await Jo(t, { ...o, altBoundary: !0 }),
              i = zp(s, n.floating);
            return { data: { escapedOffsets: i, escaped: Bp(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function AC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Zt(n),
    a = Zr(n),
    c = eo(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    f = s && c ? -1 : 1,
    d = Jt(t, e);
  let {
    mainAxis: h,
    crossAxis: x,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof v == "number" && (x = a === "end" ? v * -1 : v),
    c ? { x: x * f, y: h * u } : { x: h * u, y: x * f }
  );
}
const MC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            c = await AC(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: s + c.y, data: { ...c, placement: i } };
        },
      }
    );
  },
  IC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: y, y: m } = b;
                  return { x: y, y: m };
                },
              },
              ...c
            } = Jt(e, t),
            u = { x: n, y: r },
            f = await Jo(t, c),
            d = eo(Zt(o)),
            h = hd(d);
          let x = u[h],
            v = u[d];
          if (s) {
            const b = h === "y" ? "top" : "left",
              y = h === "y" ? "bottom" : "right",
              m = x + f[b],
              w = x - f[y];
            x = Fc(m, x, w);
          }
          if (i) {
            const b = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              m = v + f[b],
              w = v - f[y];
            v = Fc(m, v, w);
          }
          const g = a.fn({ ...t, [h]: x, [d]: v });
          return { ...g, data: { x: g.x - n, y: g.y - r } };
        },
      }
    );
  },
  LC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: u = !0 } = Jt(e, t),
            f = { x: n, y: r },
            d = eo(o),
            h = hd(d);
          let x = f[h],
            v = f[d];
          const g = Jt(a, t),
            b =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (c) {
            const w = h === "y" ? "height" : "width",
              $ = s.reference[h] - s.floating[w] + b.mainAxis,
              S = s.reference[h] + s.reference[w] - b.mainAxis;
            x < $ ? (x = $) : x > S && (x = S);
          }
          if (u) {
            var y, m;
            const w = h === "y" ? "width" : "height",
              $ = ["top", "left"].includes(Zt(o)),
              S =
                s.reference[d] -
                s.floating[w] +
                (($ && ((y = i.offset) == null ? void 0 : y[d])) || 0) +
                ($ ? 0 : b.crossAxis),
              C =
                s.reference[d] +
                s.reference[w] +
                ($ ? 0 : ((m = i.offset) == null ? void 0 : m[d]) || 0) -
                ($ ? b.crossAxis : 0);
            v < S ? (v = S) : v > C && (v = C);
          }
          return { [h]: x, [d]: v };
        },
      }
    );
  },
  FC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...a } = Jt(e, t),
            c = await Jo(t, a),
            u = Zt(n),
            f = Zr(n),
            d = eo(n) === "y",
            { width: h, height: x } = r.floating;
          let v, g;
          u === "top" || u === "bottom"
            ? ((v = u),
              (g =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = u), (v = f === "end" ? "top" : "bottom"));
          const b = x - c[v],
            y = h - c[g],
            m = !t.middlewareData.shift;
          let w = b,
            $ = y;
          if (d) {
            const C = h - c.left - c.right;
            $ = f || m ? Tn(y, C) : C;
          } else {
            const C = x - c.top - c.bottom;
            w = f || m ? Tn(b, C) : C;
          }
          if (m && !f) {
            const C = qe(c.left, 0),
              E = qe(c.right, 0),
              R = qe(c.top, 0),
              L = qe(c.bottom, 0);
            d
              ? ($ = h - 2 * (C !== 0 || E !== 0 ? C + E : qe(c.left, c.right)))
              : (w =
                  x - 2 * (R !== 0 || L !== 0 ? R + L : qe(c.top, c.bottom)));
          }
          await i({ ...t, availableWidth: $, availableHeight: w });
          const S = await o.getDimensions(s.floating);
          return h !== S.width || x !== S.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function jn(e) {
  return ev(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function rn(e) {
  var t;
  return (t = (ev(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ev(e) {
  return e instanceof Node || e instanceof et(e).Node;
}
function en(e) {
  return e instanceof Element || e instanceof et(e).Element;
}
function Mt(e) {
  return e instanceof HTMLElement || e instanceof et(e).HTMLElement;
}
function Up(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
function ws(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = mt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function zC(e) {
  return ["table", "td", "th"].includes(jn(e));
}
function yd(e) {
  const t = xd(),
    n = mt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function BC(e) {
  let t = Wr(e);
  for (; Mt(t) && !Na(t); ) {
    if (yd(t)) return t;
    t = Wr(t);
  }
  return null;
}
function xd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Na(e) {
  return ["html", "body", "#document"].includes(jn(e));
}
function mt(e) {
  return et(e).getComputedStyle(e);
}
function Ta(e) {
  return en(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Wr(e) {
  if (jn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Up(e) && e.host) || rn(e);
  return Up(t) ? t.host : t;
}
function tv(e) {
  const t = Wr(e);
  return Na(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Mt(t) && ws(t)
    ? t
    : tv(t);
}
function Zo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = tv(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = et(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        ws(o) ? o : [],
        i.frameElement && n ? Zo(i.frameElement) : []
      )
    : t.concat(o, Zo(o, [], n));
}
function nv(e) {
  const t = mt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Mt(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = Yi(n) !== s || Yi(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function wd(e) {
  return en(e) ? e : e.contextElement;
}
function Ar(e) {
  const t = wd(e);
  if (!Mt(t)) return On(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = nv(t);
  let i = (s ? Yi(n.width) : n.width) / r,
    a = (s ? Yi(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const UC = On(0);
function rv(e) {
  const t = et(e);
  return !xd() || !t.visualViewport
    ? UC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function VC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== et(e)) ? !1 : t;
}
function er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = wd(e);
  let i = On(1);
  t && (r ? en(r) && (i = Ar(r)) : (i = Ar(e)));
  const a = VC(s, n, r) ? rv(s) : On(0);
  let c = (o.left + a.x) / i.x,
    u = (o.top + a.y) / i.y,
    f = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const h = et(s),
      x = r && en(r) ? et(r) : r;
    let v = h,
      g = v.frameElement;
    for (; g && r && x !== v; ) {
      const b = Ar(g),
        y = g.getBoundingClientRect(),
        m = mt(g),
        w = y.left + (g.clientLeft + parseFloat(m.paddingLeft)) * b.x,
        $ = y.top + (g.clientTop + parseFloat(m.paddingTop)) * b.y;
      (c *= b.x),
        (u *= b.y),
        (f *= b.x),
        (d *= b.y),
        (c += w),
        (u += $),
        (v = et(g)),
        (g = v.frameElement);
    }
  }
  return Xi({ width: f, height: d, x: c, y: u });
}
const HC = [":popover-open", ":modal"];
function ov(e) {
  return HC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function WC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = rn(r),
    a = t ? ov(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = On(1);
  const f = On(0),
    d = Mt(r);
  if (
    (d || (!d && !s)) &&
    ((jn(r) !== "body" || ws(i)) && (c = Ta(r)), Mt(r))
  ) {
    const h = er(r);
    (u = Ar(r)), (f.x = h.x + r.clientLeft), (f.y = h.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + f.x,
    y: n.y * u.y - c.scrollTop * u.y + f.y,
  };
}
function KC(e) {
  return Array.from(e.getClientRects());
}
function sv(e) {
  return er(rn(e)).left + Ta(e).scrollLeft;
}
function GC(e) {
  const t = rn(e),
    n = Ta(e),
    r = e.ownerDocument.body,
    o = qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + sv(e);
  const a = -n.scrollTop;
  return (
    mt(r).direction === "rtl" && (i += qe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
function YC(e, t) {
  const n = et(e),
    r = rn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    c = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = xd();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (c = o.offsetTop));
  }
  return { width: s, height: i, x: a, y: c };
}
function QC(e, t) {
  const n = er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Mt(e) ? Ar(e) : On(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    c = o * s.x,
    u = r * s.y;
  return { width: i, height: a, x: c, y: u };
}
function Vp(e, t, n) {
  let r;
  if (t === "viewport") r = YC(e, n);
  else if (t === "document") r = GC(rn(e));
  else if (en(t)) r = QC(t, n);
  else {
    const o = rv(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Xi(r);
}
function iv(e, t) {
  const n = Wr(e);
  return n === t || !en(n) || Na(n)
    ? !1
    : mt(n).position === "fixed" || iv(n, t);
}
function XC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Zo(e, [], !1).filter((a) => en(a) && jn(a) !== "body"),
    o = null;
  const s = mt(e).position === "fixed";
  let i = s ? Wr(e) : e;
  for (; en(i) && !Na(i); ) {
    const a = mt(i),
      c = yd(i);
    !c && a.position === "fixed" && (o = null),
      (
        s
          ? !c && !o
          : (!c &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ws(i) && !c && iv(e, i))
      )
        ? (r = r.filter((f) => f !== i))
        : (o = a),
      (i = Wr(i));
  }
  return t.set(e, r), r;
}
function qC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [...(n === "clippingAncestors" ? XC(t, this._c) : [].concat(n)), r],
    a = i[0],
    c = i.reduce((u, f) => {
      const d = Vp(t, f, o);
      return (
        (u.top = qe(d.top, u.top)),
        (u.right = Tn(d.right, u.right)),
        (u.bottom = Tn(d.bottom, u.bottom)),
        (u.left = qe(d.left, u.left)),
        u
      );
    }, Vp(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function JC(e) {
  const { width: t, height: n } = nv(e);
  return { width: t, height: n };
}
function ZC(e, t, n) {
  const r = Mt(t),
    o = rn(t),
    s = n === "fixed",
    i = er(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = On(0);
  if (r || (!r && !s))
    if (((jn(t) !== "body" || ws(o)) && (a = Ta(t)), r)) {
      const d = er(t, !0, s, t);
      (c.x = d.x + t.clientLeft), (c.y = d.y + t.clientTop);
    } else o && (c.x = sv(o));
  const u = i.left + a.scrollLeft - c.x,
    f = i.top + a.scrollTop - c.y;
  return { x: u, y: f, width: i.width, height: i.height };
}
function Hp(e, t) {
  return !Mt(e) || mt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function av(e, t) {
  const n = et(e);
  if (!Mt(e) || ov(e)) return n;
  let r = Hp(e, t);
  for (; r && zC(r) && mt(r).position === "static"; ) r = Hp(r, t);
  return r &&
    (jn(r) === "html" ||
      (jn(r) === "body" && mt(r).position === "static" && !yd(r)))
    ? n
    : r || BC(e) || n;
}
const e3 = async function (e) {
  const t = this.getOffsetParent || av,
    n = this.getDimensions;
  return {
    reference: ZC(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, ...(await n(e.floating)) },
  };
};
function t3(e) {
  return mt(e).direction === "rtl";
}
const n3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WC,
  getDocumentElement: rn,
  getClippingRect: qC,
  getOffsetParent: av,
  getElementRects: e3,
  getClientRects: KC,
  getDimensions: JC,
  getScale: Ar,
  isElement: en,
  isRTL: t3,
};
function r3(e, t) {
  let n = null,
    r;
  const o = rn(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const { left: u, top: f, width: d, height: h } = e.getBoundingClientRect();
    if ((a || t(), !d || !h)) return;
    const x = Qs(f),
      v = Qs(o.clientWidth - (u + d)),
      g = Qs(o.clientHeight - (f + h)),
      b = Qs(u),
      m = {
        rootMargin: -x + "px " + -v + "px " + -g + "px " + -b + "px",
        threshold: qe(0, Tn(1, c)) || 1,
      };
    let w = !0;
    function $(S) {
      const C = S[0].intersectionRatio;
      if (C !== c) {
        if (!w) return i();
        C
          ? i(!1, C)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 100));
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver($, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver($, m);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function o3(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    u = wd(e),
    f = o || s ? [...(u ? Zo(u) : []), ...Zo(t)] : [];
  f.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n);
  });
  const d = u && a ? r3(u, n) : null;
  let h = -1,
    x = null;
  i &&
    ((x = new ResizeObserver((y) => {
      let [m] = y;
      m &&
        m.target === u &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var w;
          (w = x) == null || w.observe(t);
        }))),
        n();
    })),
    u && !c && x.observe(u),
    x.observe(t));
  let v,
    g = c ? er(e) : null;
  c && b();
  function b() {
    const y = er(e);
    g &&
      (y.x !== g.x ||
        y.y !== g.y ||
        y.width !== g.width ||
        y.height !== g.height) &&
      n(),
      (g = y),
      (v = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var y;
      f.forEach((m) => {
        o && m.removeEventListener("scroll", n),
          s && m.removeEventListener("resize", n);
      }),
        d == null || d(),
        (y = x) == null || y.disconnect(),
        (x = null),
        c && cancelAnimationFrame(v);
    }
  );
}
const s3 = IC,
  i3 = jC,
  a3 = FC,
  l3 = DC,
  Wp = OC,
  c3 = LC,
  u3 = (e, t, n) => {
    const r = new Map(),
      o = { platform: n3, ...n },
      s = { ...o.platform, _c: r };
    return TC(e, t, { ...o, platform: s });
  },
  d3 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Wp({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Wp({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  };
var yi = typeof document < "u" ? l.useLayoutEffect : l.useEffect;
function qi(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!qi(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !qi(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kp(e, t) {
  const n = lv(e);
  return Math.round(t * n) / n;
}
function Gp(e) {
  const t = l.useRef(e);
  return (
    yi(() => {
      t.current = e;
    }),
    t
  );
}
function f3(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [f, d] = l.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, x] = l.useState(r);
  qi(h, r) || x(r);
  const [v, g] = l.useState(null),
    [b, y] = l.useState(null),
    m = l.useCallback((B) => {
      B !== C.current && ((C.current = B), g(B));
    }, []),
    w = l.useCallback((B) => {
      B !== E.current && ((E.current = B), y(B));
    }, []),
    $ = s || v,
    S = i || b,
    C = l.useRef(null),
    E = l.useRef(null),
    R = l.useRef(f),
    L = c != null,
    M = Gp(c),
    H = Gp(o),
    j = l.useCallback(() => {
      if (!C.current || !E.current) return;
      const B = { placement: t, strategy: n, middleware: h };
      H.current && (B.platform = H.current),
        u3(C.current, E.current, B).then((T) => {
          const _ = { ...T, isPositioned: !0 };
          Y.current &&
            !qi(R.current, _) &&
            ((R.current = _),
            In.flushSync(() => {
              d(_);
            }));
        });
    }, [h, t, n, H]);
  yi(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), d((B) => ({ ...B, isPositioned: !1 })));
  }, [u]);
  const Y = l.useRef(!1);
  yi(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1;
      }
    ),
    []
  ),
    yi(() => {
      if (($ && (C.current = $), S && (E.current = S), $ && S)) {
        if (M.current) return M.current($, S, j);
        j();
      }
    }, [$, S, j, M, L]);
  const N = l.useMemo(
      () => ({ reference: C, floating: E, setReference: m, setFloating: w }),
      [m, w]
    ),
    I = l.useMemo(() => ({ reference: $, floating: S }), [$, S]),
    V = l.useMemo(() => {
      const B = { position: n, left: 0, top: 0 };
      if (!I.floating) return B;
      const T = Kp(I.floating, f.x),
        _ = Kp(I.floating, f.y);
      return a
        ? {
            ...B,
            transform: "translate(" + T + "px, " + _ + "px)",
            ...(lv(I.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: _ };
    }, [n, a, I.floating, f.x, f.y]);
  return l.useMemo(
    () => ({ ...f, update: j, refs: N, elements: I, floatingStyles: V }),
    [f, j, N, I, V]
  );
}
function Oa(e) {
  const [t, n] = l.useState(void 0);
  return (
    je(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const c = s.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            (i = u.inlineSize), (a = u.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const cv = "Popper",
  [uv, to] = He(cv),
  [p3, dv] = uv(cv),
  m3 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = l.useState(null);
    return l.createElement(p3, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  h3 = "PopperAnchor",
  g3 = l.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = dv(h3, n),
      i = l.useRef(null),
      a = X(t, i);
    return (
      l.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : l.createElement(K.div, P({}, o, { ref: a }))
    );
  }),
  fv = "PopperContent",
  [v3, i7] = uv(fv),
  y3 = l.forwardRef((e, t) => {
    var n, r, o, s, i, a, c, u;
    const {
        __scopePopper: f,
        side: d = "bottom",
        sideOffset: h = 0,
        align: x = "center",
        alignOffset: v = 0,
        arrowPadding: g = 0,
        avoidCollisions: b = !0,
        collisionBoundary: y = [],
        collisionPadding: m = 0,
        sticky: w = "partial",
        hideWhenDetached: $ = !1,
        updatePositionStrategy: S = "optimized",
        onPlaced: C,
        ...E
      } = e,
      R = dv(fv, f),
      [L, M] = l.useState(null),
      H = X(t, (me) => M(me)),
      [j, Y] = l.useState(null),
      N = Oa(j),
      I = (n = N == null ? void 0 : N.width) !== null && n !== void 0 ? n : 0,
      V = (r = N == null ? void 0 : N.height) !== null && r !== void 0 ? r : 0,
      B = d + (x !== "center" ? "-" + x : ""),
      T =
        typeof m == "number"
          ? m
          : { top: 0, right: 0, bottom: 0, left: 0, ...m },
      _ = Array.isArray(y) ? y : [y],
      A = _.length > 0,
      z = { padding: T, boundary: _.filter(x3), altBoundary: A },
      {
        refs: G,
        floatingStyles: fe,
        placement: ie,
        isPositioned: Pe,
        middlewareData: ae,
      } = f3({
        strategy: "fixed",
        placement: B,
        whileElementsMounted: (...me) =>
          o3(...me, { animationFrame: S === "always" }),
        elements: { reference: R.anchor },
        middleware: [
          MC({ mainAxis: h + V, alignmentAxis: v }),
          b &&
            s3({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? c3() : void 0,
              ...z,
            }),
          b && i3({ ...z }),
          a3({
            ...z,
            apply: ({
              elements: me,
              rects: st,
              availableWidth: cr,
              availableHeight: Vd,
            }) => {
              const { width: ro, height: on } = st.reference,
                Cs = me.floating.style;
              Cs.setProperty("--radix-popper-available-width", `${cr}px`),
                Cs.setProperty("--radix-popper-available-height", `${Vd}px`),
                Cs.setProperty("--radix-popper-anchor-width", `${ro}px`),
                Cs.setProperty("--radix-popper-anchor-height", `${on}px`);
            },
          }),
          j && d3({ element: j, padding: g }),
          w3({ arrowWidth: I, arrowHeight: V }),
          $ && l3({ strategy: "referenceHidden", ...z }),
        ],
      }),
      [U, ee] = pv(ie),
      re = De(C);
    je(() => {
      Pe && (re == null || re());
    }, [Pe, re]);
    const te = (o = ae.arrow) === null || o === void 0 ? void 0 : o.x,
      oe = (s = ae.arrow) === null || s === void 0 ? void 0 : s.y,
      ne =
        ((i = ae.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [Fe, be] = l.useState();
    return (
      je(() => {
        L && be(window.getComputedStyle(L).zIndex);
      }, [L]),
      l.createElement(
        "div",
        {
          ref: G.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...fe,
            transform: Pe ? fe.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Fe,
            "--radix-popper-transform-origin": [
              (a = ae.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (c = ae.transformOrigin) === null || c === void 0 ? void 0 : c.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        l.createElement(
          v3,
          {
            scope: f,
            placedSide: U,
            onArrowChange: Y,
            arrowX: te,
            arrowY: oe,
            shouldHideArrow: ne,
          },
          l.createElement(
            K.div,
            P({ "data-side": U, "data-align": ee }, E, {
              ref: H,
              style: {
                ...E.style,
                animation: Pe ? void 0 : "none",
                opacity:
                  (u = ae.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function x3(e) {
  return e !== null;
}
const w3 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, s, i;
    const { placement: a, rects: c, middlewareData: u } = t,
      d =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = d ? 0 : e.arrowWidth,
      x = d ? 0 : e.arrowHeight,
      [v, g] = pv(a),
      b = { start: "0%", center: "50%", end: "100%" }[g],
      y =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        h / 2,
      m =
        ((s = (i = u.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        s !== void 0
          ? s
          : 0) +
        x / 2;
    let w = "",
      $ = "";
    return (
      v === "bottom"
        ? ((w = d ? b : `${y}px`), ($ = `${-x}px`))
        : v === "top"
        ? ((w = d ? b : `${y}px`), ($ = `${c.floating.height + x}px`))
        : v === "right"
        ? ((w = `${-x}px`), ($ = d ? b : `${m}px`))
        : v === "left" &&
          ((w = `${c.floating.width + x}px`), ($ = d ? b : `${m}px`)),
      { data: { x: w, y: $ } }
    );
  },
});
function pv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const bd = m3,
  $d = g3,
  Sd = y3,
  Nl = "rovingFocusGroup.onEntryFocus",
  b3 = { bubbles: !1, cancelable: !0 },
  Ed = "RovingFocusGroup",
  [Bc, mv, $3] = ys(Ed),
  [S3, ja] = He(Ed, [$3]),
  [E3, C3] = S3(Ed),
  R3 = l.forwardRef((e, t) =>
    l.createElement(
      Bc.Provider,
      { scope: e.__scopeRovingFocusGroup },
      l.createElement(
        Bc.Slot,
        { scope: e.__scopeRovingFocusGroup },
        l.createElement(P3, P({}, e, { ref: t }))
      )
    )
  ),
  P3 = l.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: c,
        onEntryFocus: u,
        ...f
      } = e,
      d = l.useRef(null),
      h = X(t, d),
      x = xs(s),
      [v = null, g] = At({ prop: i, defaultProp: a, onChange: c }),
      [b, y] = l.useState(!1),
      m = De(u),
      w = mv(n),
      $ = l.useRef(!1),
      [S, C] = l.useState(0);
    return (
      l.useEffect(() => {
        const E = d.current;
        if (E)
          return E.addEventListener(Nl, m), () => E.removeEventListener(Nl, m);
      }, [m]),
      l.createElement(
        E3,
        {
          scope: n,
          orientation: r,
          dir: x,
          loop: o,
          currentTabStopId: v,
          onItemFocus: l.useCallback((E) => g(E), [g]),
          onItemShiftTab: l.useCallback(() => y(!0), []),
          onFocusableItemAdd: l.useCallback(() => C((E) => E + 1), []),
          onFocusableItemRemove: l.useCallback(() => C((E) => E - 1), []),
        },
        l.createElement(
          K.div,
          P({ tabIndex: b || S === 0 ? -1 : 0, "data-orientation": r }, f, {
            ref: h,
            style: { outline: "none", ...e.style },
            onMouseDown: D(e.onMouseDown, () => {
              $.current = !0;
            }),
            onFocus: D(e.onFocus, (E) => {
              const R = !$.current;
              if (E.target === E.currentTarget && R && !b) {
                const L = new CustomEvent(Nl, b3);
                if ((E.currentTarget.dispatchEvent(L), !L.defaultPrevented)) {
                  const M = w().filter((I) => I.focusable),
                    H = M.find((I) => I.active),
                    j = M.find((I) => I.id === v),
                    N = [H, j, ...M].filter(Boolean).map((I) => I.ref.current);
                  hv(N);
                }
              }
              $.current = !1;
            }),
            onBlur: D(e.onBlur, () => y(!1)),
          })
        )
      )
    );
  }),
  _3 = "RovingFocusGroupItem",
  k3 = l.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        ...i
      } = e,
      a = Pn(),
      c = s || a,
      u = C3(_3, n),
      f = u.currentTabStopId === c,
      d = mv(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: x } = u;
    return (
      l.useEffect(() => {
        if (r) return h(), () => x();
      }, [r, h, x]),
      l.createElement(
        Bc.ItemSlot,
        { scope: n, id: c, focusable: r, active: o },
        l.createElement(
          K.span,
          P({ tabIndex: f ? 0 : -1, "data-orientation": u.orientation }, i, {
            ref: t,
            onMouseDown: D(e.onMouseDown, (v) => {
              r ? u.onItemFocus(c) : v.preventDefault();
            }),
            onFocus: D(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: D(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const g = O3(v, u.orientation, u.dir);
              if (g !== void 0) {
                v.preventDefault();
                let y = d()
                  .filter((m) => m.focusable)
                  .map((m) => m.ref.current);
                if (g === "last") y.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && y.reverse();
                  const m = y.indexOf(v.currentTarget);
                  y = u.loop ? j3(y, m + 1) : y.slice(m + 1);
                }
                setTimeout(() => hv(y));
              }
            }),
          })
        )
      )
    );
  }),
  N3 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
  };
function T3(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function O3(e, t, n) {
  const r = T3(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return N3[r];
}
function hv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function j3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const gv = R3,
  vv = k3,
  Uc = ["Enter", " "],
  D3 = ["ArrowDown", "PageUp", "Home"],
  yv = ["ArrowUp", "PageDown", "End"],
  A3 = [...D3, ...yv],
  M3 = { ltr: [...Uc, "ArrowRight"], rtl: [...Uc, "ArrowLeft"] },
  I3 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  Da = "Menu",
  [es, L3, F3] = ys(Da),
  [sr, xv] = He(Da, [F3, to, ja]),
  Cd = to(),
  wv = ja(),
  [z3, ir] = sr(Da),
  [B3, bs] = sr(Da),
  U3 = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = Cd(t),
      [c, u] = l.useState(null),
      f = l.useRef(!1),
      d = De(s),
      h = xs(o);
    return (
      l.useEffect(() => {
        const x = () => {
            (f.current = !0),
              document.addEventListener("pointerdown", v, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", v, {
                capture: !0,
                once: !0,
              });
          },
          v = () => (f.current = !1);
        return (
          document.addEventListener("keydown", x, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", x, { capture: !0 }),
              document.removeEventListener("pointerdown", v, { capture: !0 }),
              document.removeEventListener("pointermove", v, { capture: !0 });
          }
        );
      }, []),
      l.createElement(
        bd,
        a,
        l.createElement(
          z3,
          {
            scope: t,
            open: n,
            onOpenChange: d,
            content: c,
            onContentChange: u,
          },
          l.createElement(
            B3,
            {
              scope: t,
              onClose: l.useCallback(() => d(!1), [d]),
              isUsingKeyboardRef: f,
              dir: h,
              modal: i,
            },
            r
          )
        )
      )
    );
  },
  bv = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Cd(n);
    return l.createElement($d, P({}, o, r, { ref: t }));
  }),
  $v = "MenuPortal",
  [V3, Sv] = sr($v, { forceMount: void 0 }),
  H3 = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      s = ir($v, t);
    return l.createElement(
      V3,
      { scope: t, forceMount: n },
      l.createElement(
        Ct,
        { present: n || s.open },
        l.createElement(Pa, { asChild: !0, container: o }, r)
      )
    );
  },
  St = "MenuContent",
  [W3, Rd] = sr(St),
  K3 = l.forwardRef((e, t) => {
    const n = Sv(St, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = ir(St, e.__scopeMenu),
      i = bs(St, e.__scopeMenu);
    return l.createElement(
      es.Provider,
      { scope: e.__scopeMenu },
      l.createElement(
        Ct,
        { present: r || s.open },
        l.createElement(
          es.Slot,
          { scope: e.__scopeMenu },
          i.modal
            ? l.createElement(G3, P({}, o, { ref: t }))
            : l.createElement(Y3, P({}, o, { ref: t }))
        )
      )
    );
  }),
  G3 = l.forwardRef((e, t) => {
    const n = ir(St, e.__scopeMenu),
      r = l.useRef(null),
      o = X(t, r);
    return (
      l.useEffect(() => {
        const s = r.current;
        if (s) return ld(s);
      }, []),
      l.createElement(
        Pd,
        P({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: D(e.onFocusOutside, (s) => s.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      )
    );
  }),
  Y3 = l.forwardRef((e, t) => {
    const n = ir(St, e.__scopeMenu);
    return l.createElement(
      Pd,
      P({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  Pd = l.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEntryFocus: c,
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: x,
        disableOutsideScroll: v,
        ...g
      } = e,
      b = ir(St, n),
      y = bs(St, n),
      m = Cd(n),
      w = wv(n),
      $ = L3(n),
      [S, C] = l.useState(null),
      E = l.useRef(null),
      R = X(t, E, b.onContentChange),
      L = l.useRef(0),
      M = l.useRef(""),
      H = l.useRef(0),
      j = l.useRef(null),
      Y = l.useRef("right"),
      N = l.useRef(0),
      I = v ? ad : l.Fragment,
      V = v ? { as: Nn, allowPinchZoom: !0 } : void 0,
      B = (_) => {
        var A, z;
        const G = M.current + _,
          fe = $().filter((re) => !re.disabled),
          ie = document.activeElement,
          Pe =
            (A = fe.find((re) => re.ref.current === ie)) === null ||
            A === void 0
              ? void 0
              : A.textValue,
          ae = fe.map((re) => re.textValue),
          U = p4(ae, G, Pe),
          ee =
            (z = fe.find((re) => re.textValue === U)) === null || z === void 0
              ? void 0
              : z.ref.current;
        (function re(te) {
          (M.current = te),
            window.clearTimeout(L.current),
            te !== "" && (L.current = window.setTimeout(() => re(""), 1e3));
        })(G),
          ee && setTimeout(() => ee.focus());
      };
    l.useEffect(() => () => window.clearTimeout(L.current), []), id();
    const T = l.useCallback((_) => {
      var A, z;
      return (
        Y.current ===
          ((A = j.current) === null || A === void 0 ? void 0 : A.side) &&
        h4(_, (z = j.current) === null || z === void 0 ? void 0 : z.area)
      );
    }, []);
    return l.createElement(
      W3,
      {
        scope: n,
        searchRef: M,
        onItemEnter: l.useCallback(
          (_) => {
            T(_) && _.preventDefault();
          },
          [T]
        ),
        onItemLeave: l.useCallback(
          (_) => {
            var A;
            T(_) ||
              ((A = E.current) === null || A === void 0 || A.focus(), C(null));
          },
          [T]
        ),
        onTriggerLeave: l.useCallback(
          (_) => {
            T(_) && _.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: H,
        onPointerGraceIntentChange: l.useCallback((_) => {
          j.current = _;
        }, []),
      },
      l.createElement(
        I,
        V,
        l.createElement(
          sd,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: D(s, (_) => {
              var A;
              _.preventDefault(),
                (A = E.current) === null || A === void 0 || A.focus();
            }),
            onUnmountAutoFocus: i,
          },
          l.createElement(
            fs,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: u,
              onPointerDownOutside: f,
              onFocusOutside: d,
              onInteractOutside: h,
              onDismiss: x,
            },
            l.createElement(
              gv,
              P({ asChild: !0 }, w, {
                dir: y.dir,
                orientation: "vertical",
                loop: r,
                currentTabStopId: S,
                onCurrentTabStopIdChange: C,
                onEntryFocus: D(c, (_) => {
                  y.isUsingKeyboardRef.current || _.preventDefault();
                }),
              }),
              l.createElement(
                Sd,
                P(
                  {
                    role: "menu",
                    "aria-orientation": "vertical",
                    "data-state": _v(b.open),
                    "data-radix-menu-content": "",
                    dir: y.dir,
                  },
                  m,
                  g,
                  {
                    ref: R,
                    style: { outline: "none", ...g.style },
                    onKeyDown: D(g.onKeyDown, (_) => {
                      const z =
                          _.target.closest("[data-radix-menu-content]") ===
                          _.currentTarget,
                        G = _.ctrlKey || _.altKey || _.metaKey,
                        fe = _.key.length === 1;
                      z &&
                        (_.key === "Tab" && _.preventDefault(),
                        !G && fe && B(_.key));
                      const ie = E.current;
                      if (_.target !== ie || !A3.includes(_.key)) return;
                      _.preventDefault();
                      const ae = $()
                        .filter((U) => !U.disabled)
                        .map((U) => U.ref.current);
                      yv.includes(_.key) && ae.reverse(), d4(ae);
                    }),
                    onBlur: D(e.onBlur, (_) => {
                      _.currentTarget.contains(_.target) ||
                        (window.clearTimeout(L.current), (M.current = ""));
                    }),
                    onPointerMove: D(
                      e.onPointerMove,
                      ts((_) => {
                        const A = _.target,
                          z = N.current !== _.clientX;
                        if (_.currentTarget.contains(A) && z) {
                          const G = _.clientX > N.current ? "right" : "left";
                          (Y.current = G), (N.current = _.clientX);
                        }
                      })
                    ),
                  }
                )
              )
            )
          )
        )
      )
    );
  }),
  Q3 = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.createElement(K.div, P({ role: "group" }, r, { ref: t }));
  }),
  X3 = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.createElement(K.div, P({}, r, { ref: t }));
  }),
  Vc = "MenuItem",
  Yp = "menu.itemSelect",
  _d = l.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      s = l.useRef(null),
      i = bs(Vc, e.__scopeMenu),
      a = Rd(Vc, e.__scopeMenu),
      c = X(t, s),
      u = l.useRef(!1),
      f = () => {
        const d = s.current;
        if (!n && d) {
          const h = new CustomEvent(Yp, { bubbles: !0, cancelable: !0 });
          d.addEventListener(Yp, (x) => (r == null ? void 0 : r(x)), {
            once: !0,
          }),
            od(d, h),
            h.defaultPrevented ? (u.current = !1) : i.onClose();
        }
      };
    return l.createElement(
      Ev,
      P({}, o, {
        ref: c,
        disabled: n,
        onClick: D(e.onClick, f),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) === null || h === void 0 || h.call(e, d),
            (u.current = !0);
        },
        onPointerUp: D(e.onPointerUp, (d) => {
          var h;
          u.current ||
            (h = d.currentTarget) === null ||
            h === void 0 ||
            h.click();
        }),
        onKeyDown: D(e.onKeyDown, (d) => {
          const h = a.searchRef.current !== "";
          n ||
            (h && d.key === " ") ||
            (Uc.includes(d.key) &&
              (d.currentTarget.click(), d.preventDefault()));
        }),
      })
    );
  }),
  Ev = l.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e,
      i = Rd(Vc, n),
      a = wv(n),
      c = l.useRef(null),
      u = X(t, c),
      [f, d] = l.useState(!1),
      [h, x] = l.useState("");
    return (
      l.useEffect(() => {
        const v = c.current;
        if (v) {
          var g;
          x(((g = v.textContent) !== null && g !== void 0 ? g : "").trim());
        }
      }, [s.children]),
      l.createElement(
        es.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? h },
        l.createElement(
          vv,
          P({ asChild: !0 }, a, { focusable: !r }),
          l.createElement(
            K.div,
            P(
              {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
              },
              s,
              {
                ref: u,
                onPointerMove: D(
                  e.onPointerMove,
                  ts((v) => {
                    r
                      ? i.onItemLeave(v)
                      : (i.onItemEnter(v),
                        v.defaultPrevented || v.currentTarget.focus());
                  })
                ),
                onPointerLeave: D(
                  e.onPointerLeave,
                  ts((v) => i.onItemLeave(v))
                ),
                onFocus: D(e.onFocus, () => d(!0)),
                onBlur: D(e.onBlur, () => d(!1)),
              }
            )
          )
        )
      )
    );
  }),
  q3 = l.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return l.createElement(
      Rv,
      { scope: e.__scopeMenu, checked: n },
      l.createElement(
        _d,
        P(
          { role: "menuitemcheckbox", "aria-checked": Ji(n) ? "mixed" : n },
          o,
          {
            ref: t,
            "data-state": kd(n),
            onSelect: D(
              o.onSelect,
              () => (r == null ? void 0 : r(Ji(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 }
            ),
          }
        )
      )
    );
  }),
  J3 = "MenuRadioGroup",
  [Z3, e4] = sr(J3, { value: void 0, onValueChange: () => {} }),
  t4 = l.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      s = De(r);
    return l.createElement(
      Z3,
      { scope: e.__scopeMenu, value: n, onValueChange: s },
      l.createElement(Q3, P({}, o, { ref: t }))
    );
  }),
  n4 = "MenuRadioItem",
  r4 = l.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = e4(n4, e.__scopeMenu),
      s = n === o.value;
    return l.createElement(
      Rv,
      { scope: e.__scopeMenu, checked: s },
      l.createElement(
        _d,
        P({ role: "menuitemradio", "aria-checked": s }, r, {
          ref: t,
          "data-state": kd(s),
          onSelect: D(
            r.onSelect,
            () => {
              var i;
              return (i = o.onValueChange) === null || i === void 0
                ? void 0
                : i.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          ),
        })
      )
    );
  }),
  Cv = "MenuItemIndicator",
  [Rv, o4] = sr(Cv, { checked: !1 }),
  s4 = l.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      s = o4(Cv, n);
    return l.createElement(
      Ct,
      { present: r || Ji(s.checked) || s.checked === !0 },
      l.createElement(K.span, P({}, o, { ref: t, "data-state": kd(s.checked) }))
    );
  }),
  i4 = l.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return l.createElement(
      K.div,
      P({ role: "separator", "aria-orientation": "horizontal" }, r, { ref: t })
    );
  }),
  a4 = "MenuSub",
  [a7, Pv] = sr(a4),
  Xs = "MenuSubTrigger",
  l4 = l.forwardRef((e, t) => {
    const n = ir(Xs, e.__scopeMenu),
      r = bs(Xs, e.__scopeMenu),
      o = Pv(Xs, e.__scopeMenu),
      s = Rd(Xs, e.__scopeMenu),
      i = l.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: c } = s,
      u = { __scopeMenu: e.__scopeMenu },
      f = l.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      l.useEffect(() => f, [f]),
      l.useEffect(() => {
        const d = a.current;
        return () => {
          window.clearTimeout(d), c(null);
        };
      }, [a, c]),
      l.createElement(
        bv,
        P({ asChild: !0 }, u),
        l.createElement(
          Ev,
          P(
            {
              id: o.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": n.open,
              "aria-controls": o.contentId,
              "data-state": _v(n.open),
            },
            e,
            {
              ref: xa(t, o.onTriggerChange),
              onClick: (d) => {
                var h;
                (h = e.onClick) === null || h === void 0 || h.call(e, d),
                  !(e.disabled || d.defaultPrevented) &&
                    (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: D(
                e.onPointerMove,
                ts((d) => {
                  s.onItemEnter(d),
                    !d.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !i.current &&
                      (s.onPointerGraceIntentChange(null),
                      (i.current = window.setTimeout(() => {
                        n.onOpenChange(!0), f();
                      }, 100)));
                })
              ),
              onPointerLeave: D(
                e.onPointerLeave,
                ts((d) => {
                  var h;
                  f();
                  const x =
                    (h = n.content) === null || h === void 0
                      ? void 0
                      : h.getBoundingClientRect();
                  if (x) {
                    var v;
                    const g =
                        (v = n.content) === null || v === void 0
                          ? void 0
                          : v.dataset.side,
                      b = g === "right",
                      y = b ? -5 : 5,
                      m = x[b ? "left" : "right"],
                      w = x[b ? "right" : "left"];
                    s.onPointerGraceIntentChange({
                      area: [
                        { x: d.clientX + y, y: d.clientY },
                        { x: m, y: x.top },
                        { x: w, y: x.top },
                        { x: w, y: x.bottom },
                        { x: m, y: x.bottom },
                      ],
                      side: g,
                    }),
                      window.clearTimeout(a.current),
                      (a.current = window.setTimeout(
                        () => s.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((s.onTriggerLeave(d), d.defaultPrevented)) return;
                    s.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: D(e.onKeyDown, (d) => {
                const h = s.searchRef.current !== "";
                if (
                  !(e.disabled || (h && d.key === " ")) &&
                  M3[r.dir].includes(d.key)
                ) {
                  var x;
                  n.onOpenChange(!0),
                    (x = n.content) === null || x === void 0 || x.focus(),
                    d.preventDefault();
                }
              }),
            }
          )
        )
      )
    );
  }),
  c4 = "MenuSubContent",
  u4 = l.forwardRef((e, t) => {
    const n = Sv(St, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = ir(St, e.__scopeMenu),
      i = bs(St, e.__scopeMenu),
      a = Pv(c4, e.__scopeMenu),
      c = l.useRef(null),
      u = X(t, c);
    return l.createElement(
      es.Provider,
      { scope: e.__scopeMenu },
      l.createElement(
        Ct,
        { present: r || s.open },
        l.createElement(
          es.Slot,
          { scope: e.__scopeMenu },
          l.createElement(
            Pd,
            P({ id: a.contentId, "aria-labelledby": a.triggerId }, o, {
              ref: u,
              align: "start",
              side: i.dir === "rtl" ? "left" : "right",
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (f) => {
                var d;
                i.isUsingKeyboardRef.current &&
                  ((d = c.current) === null || d === void 0 || d.focus()),
                  f.preventDefault();
              },
              onCloseAutoFocus: (f) => f.preventDefault(),
              onFocusOutside: D(e.onFocusOutside, (f) => {
                f.target !== a.trigger && s.onOpenChange(!1);
              }),
              onEscapeKeyDown: D(e.onEscapeKeyDown, (f) => {
                i.onClose(), f.preventDefault();
              }),
              onKeyDown: D(e.onKeyDown, (f) => {
                const d = f.currentTarget.contains(f.target),
                  h = I3[i.dir].includes(f.key);
                if (d && h) {
                  var x;
                  s.onOpenChange(!1),
                    (x = a.trigger) === null || x === void 0 || x.focus(),
                    f.preventDefault();
                }
              }),
            })
          )
        )
      )
    );
  });
function _v(e) {
  return e ? "open" : "closed";
}
function Ji(e) {
  return e === "indeterminate";
}
function kd(e) {
  return Ji(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function d4(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function f4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function p4(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = f4(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return c !== n ? c : void 0;
}
function m4(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x,
      c = t[s].y,
      u = t[i].x,
      f = t[i].y;
    c > r != f > r && n < ((u - a) * (r - c)) / (f - c) + a && (o = !o);
  }
  return o;
}
function h4(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return m4(n, t);
}
function ts(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
const g4 = U3,
  v4 = bv,
  y4 = H3,
  x4 = K3,
  w4 = X3,
  b4 = _d,
  $4 = q3,
  S4 = t4,
  E4 = r4,
  C4 = s4,
  R4 = i4,
  P4 = l4,
  _4 = u4,
  kv = "DropdownMenu",
  [k4, l7] = He(kv, [xv]),
  ot = xv(),
  [N4, Nv] = k4(kv),
  T4 = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: s,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      c = ot(t),
      u = l.useRef(null),
      [f = !1, d] = At({ prop: o, defaultProp: s, onChange: i });
    return l.createElement(
      N4,
      {
        scope: t,
        triggerId: Pn(),
        triggerRef: u,
        contentId: Pn(),
        open: f,
        onOpenChange: d,
        onOpenToggle: l.useCallback(() => d((h) => !h), [d]),
        modal: a,
      },
      l.createElement(
        g4,
        P({}, c, { open: f, onOpenChange: d, dir: r, modal: a }),
        n
      )
    );
  },
  O4 = "DropdownMenuTrigger",
  j4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      s = Nv(O4, n),
      i = ot(n);
    return l.createElement(
      v4,
      P({ asChild: !0 }, i),
      l.createElement(
        K.button,
        P(
          {
            type: "button",
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": s.open,
            "aria-controls": s.open ? s.contentId : void 0,
            "data-state": s.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
          },
          o,
          {
            ref: xa(t, s.triggerRef),
            onPointerDown: D(e.onPointerDown, (a) => {
              !r &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (s.onOpenToggle(), s.open || a.preventDefault());
            }),
            onKeyDown: D(e.onKeyDown, (a) => {
              r ||
                (["Enter", " "].includes(a.key) && s.onOpenToggle(),
                a.key === "ArrowDown" && s.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(a.key) &&
                  a.preventDefault());
            }),
          }
        )
      )
    );
  }),
  D4 = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = ot(t);
    return l.createElement(y4, P({}, r, n));
  },
  A4 = "DropdownMenuContent",
  M4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Nv(A4, n),
      s = ot(n),
      i = l.useRef(!1);
    return l.createElement(
      x4,
      P({ id: o.contentId, "aria-labelledby": o.triggerId }, s, r, {
        ref: t,
        onCloseAutoFocus: D(e.onCloseAutoFocus, (a) => {
          var c;
          i.current ||
            (c = o.triggerRef.current) === null ||
            c === void 0 ||
            c.focus(),
            (i.current = !1),
            a.preventDefault();
        }),
        onInteractOutside: D(e.onInteractOutside, (a) => {
          const c = a.detail.originalEvent,
            u = c.button === 0 && c.ctrlKey === !0,
            f = c.button === 2 || u;
          (!o.modal || f) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  I4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(w4, P({}, o, r, { ref: t }));
  }),
  L4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(b4, P({}, o, r, { ref: t }));
  }),
  F4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement($4, P({}, o, r, { ref: t }));
  }),
  z4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(S4, P({}, o, r, { ref: t }));
  }),
  B4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(E4, P({}, o, r, { ref: t }));
  }),
  U4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(C4, P({}, o, r, { ref: t }));
  }),
  V4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(R4, P({}, o, r, { ref: t }));
  }),
  H4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(P4, P({}, o, r, { ref: t }));
  }),
  W4 = l.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ot(n);
    return l.createElement(
      _4,
      P({}, o, r, {
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width":
            "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height":
            "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  K4 = T4,
  G4 = j4,
  Y4 = D4,
  Tv = M4,
  Ov = I4,
  jv = L4,
  Dv = F4,
  Q4 = z4,
  Av = B4,
  Mv = U4,
  Iv = V4,
  Lv = H4,
  Fv = W4,
  Nd = K4,
  Td = G4,
  X4 = Q4,
  q4 = l.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    p.jsxs(Lv, {
      ref: o,
      className: W(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, p.jsx(uC, { className: "ml-auto h-4 w-4" })],
    })
  );
q4.displayName = Lv.displayName;
const J4 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Fv, {
    ref: n,
    className: W(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
J4.displayName = Fv.displayName;
const Aa = l.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  p.jsx(Y4, {
    children: p.jsx(Tv, {
      ref: r,
      sideOffset: t,
      className: W(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    }),
  })
);
Aa.displayName = Tv.displayName;
const Z4 = l.forwardRef(({ className: e, inset: t, ...n }, r) =>
  p.jsx(jv, {
    ref: r,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
Z4.displayName = jv.displayName;
const e5 = l.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  p.jsxs(Dv, {
    ref: o,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      p.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: p.jsx(Mv, { children: p.jsx(pd, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
e5.displayName = Dv.displayName;
const hr = l.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs(Av, {
    ref: r,
    className: W(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      p.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: p.jsx(Mv, {
          children: p.jsx(hC, { className: "h-4 w-4 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
hr.displayName = Av.displayName;
const Od = l.forwardRef(({ className: e, inset: t, ...n }, r) =>
  p.jsx(Ov, {
    ref: r,
    className: W("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  })
);
Od.displayName = Ov.displayName;
const jd = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Iv, { ref: n, className: W("-mx-1 my-1 h-px bg-muted", e), ...t })
);
jd.displayName = Iv.displayName;
const zv = "Avatar",
  [t5, c7] = He(zv),
  [n5, Bv] = t5(zv),
  r5 = l.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, s] = l.useState("idle");
    return l.createElement(
      n5,
      { scope: n, imageLoadingStatus: o, onImageLoadingStatusChange: s },
      l.createElement(K.span, P({}, r, { ref: t }))
    );
  }),
  o5 = "AvatarImage",
  s5 = l.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...s
      } = e,
      i = Bv(o5, n),
      a = l5(r),
      c = De((u) => {
        o(u), i.onImageLoadingStatusChange(u);
      });
    return (
      je(() => {
        a !== "idle" && c(a);
      }, [a, c]),
      a === "loaded"
        ? l.createElement(K.img, P({}, s, { ref: t, src: r }))
        : null
    );
  }),
  i5 = "AvatarFallback",
  a5 = l.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      s = Bv(i5, n),
      [i, a] = l.useState(r === void 0);
    return (
      l.useEffect(() => {
        if (r !== void 0) {
          const c = window.setTimeout(() => a(!0), r);
          return () => window.clearTimeout(c);
        }
      }, [r]),
      i && s.imageLoadingStatus !== "loaded"
        ? l.createElement(K.span, P({}, o, { ref: t }))
        : null
    );
  });
function l5(e) {
  const [t, n] = l.useState("idle");
  return (
    je(() => {
      if (!e) {
        n("error");
        return;
      }
      let r = !0;
      const o = new window.Image(),
        s = (i) => () => {
          r && n(i);
        };
      return (
        n("loading"),
        (o.onload = s("loaded")),
        (o.onerror = s("error")),
        (o.src = e),
        () => {
          r = !1;
        }
      );
    }, [e]),
    t
  );
}
const Uv = r5,
  Vv = s5,
  Hv = a5,
  Hc = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Uv, {
      ref: n,
      className: W(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t,
    })
  );
Hc.displayName = Uv.displayName;
const Wc = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Vv, { ref: n, className: W("aspect-square h-full w-full", e), ...t })
);
Wc.displayName = Vv.displayName;
const Wv = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Hv, {
    ref: n,
    className: W(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
Wv.displayName = Hv.displayName;
const c5 = { theme: "system", setTheme: () => null },
  Kv = l.createContext(c5);
function u5({
  children: e,
  defaultTheme: t = "system",
  storageKey: n = "vite-ui-theme",
  ...r
}) {
  const [o, s] = l.useState(() => localStorage.getItem(n) || t);
  l.useEffect(() => {
    const a = window.document.documentElement;
    if ((a.classList.remove("light", "dark"), o === "system")) {
      const c = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      a.classList.add(c);
      return;
    }
    a.classList.add(o);
  }, [o]);
  const i = {
    theme: o,
    setTheme: (a) => {
      localStorage.setItem(n, a), s(a);
    },
  };
  return p.jsx(Kv.Provider, { ...r, value: i, children: e });
}
const d5 = () => {
  const e = l.useContext(Kv);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
function Ma(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const Gv = "Radio",
  [f5, Yv] = He(Gv),
  [p5, m5] = f5(Gv),
  h5 = l.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: o = !1,
        required: s,
        disabled: i,
        value: a = "on",
        onCheck: c,
        ...u
      } = e,
      [f, d] = l.useState(null),
      h = X(t, (g) => d(g)),
      x = l.useRef(!1),
      v = f ? !!f.closest("form") : !0;
    return l.createElement(
      p5,
      { scope: n, checked: o, disabled: i },
      l.createElement(
        K.button,
        P(
          {
            type: "button",
            role: "radio",
            "aria-checked": o,
            "data-state": Qv(o),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: a,
          },
          u,
          {
            ref: h,
            onClick: D(e.onClick, (g) => {
              o || c == null || c(),
                v &&
                  ((x.current = g.isPropagationStopped()),
                  x.current || g.stopPropagation());
            }),
          }
        )
      ),
      v &&
        l.createElement(y5, {
          control: f,
          bubbles: !x.current,
          name: r,
          value: a,
          checked: o,
          required: s,
          disabled: i,
          style: { transform: "translateX(-100%)" },
        })
    );
  }),
  g5 = "RadioIndicator",
  v5 = l.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e,
      s = m5(g5, n);
    return l.createElement(
      Ct,
      { present: r || s.checked },
      l.createElement(
        K.span,
        P(
          {
            "data-state": Qv(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
          },
          o,
          { ref: t }
        )
      )
    );
  }),
  y5 = (e) => {
    const { control: t, checked: n, bubbles: r = !0, ...o } = e,
      s = l.useRef(null),
      i = Ma(n),
      a = Oa(t);
    return (
      l.useEffect(() => {
        const c = s.current,
          u = window.HTMLInputElement.prototype,
          d = Object.getOwnPropertyDescriptor(u, "checked").set;
        if (i !== n && d) {
          const h = new Event("click", { bubbles: r });
          d.call(c, n), c.dispatchEvent(h);
        }
      }, [i, n, r]),
      l.createElement(
        "input",
        P({ type: "radio", "aria-hidden": !0, defaultChecked: n }, o, {
          tabIndex: -1,
          ref: s,
          style: {
            ...e.style,
            ...a,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      )
    );
  };
function Qv(e) {
  return e ? "checked" : "unchecked";
}
const x5 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Xv = "RadioGroup",
  [w5, u7] = He(Xv, [ja, Yv]),
  qv = ja(),
  Jv = Yv(),
  [b5, $5] = w5(Xv),
  S5 = l.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: o,
        value: s,
        required: i = !1,
        disabled: a = !1,
        orientation: c,
        dir: u,
        loop: f = !0,
        onValueChange: d,
        ...h
      } = e,
      x = qv(n),
      v = xs(u),
      [g, b] = At({ prop: s, defaultProp: o, onChange: d });
    return l.createElement(
      b5,
      {
        scope: n,
        name: r,
        required: i,
        disabled: a,
        value: g,
        onValueChange: b,
      },
      l.createElement(
        gv,
        P({ asChild: !0 }, x, { orientation: c, dir: v, loop: f }),
        l.createElement(
          K.div,
          P(
            {
              role: "radiogroup",
              "aria-required": i,
              "aria-orientation": c,
              "data-disabled": a ? "" : void 0,
              dir: v,
            },
            h,
            { ref: t }
          )
        )
      )
    );
  }),
  E5 = "RadioGroupItem",
  C5 = l.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e,
      s = $5(E5, n),
      i = s.disabled || r,
      a = qv(n),
      c = Jv(n),
      u = l.useRef(null),
      f = X(t, u),
      d = s.value === o.value,
      h = l.useRef(!1);
    return (
      l.useEffect(() => {
        const x = (g) => {
            x5.includes(g.key) && (h.current = !0);
          },
          v = () => (h.current = !1);
        return (
          document.addEventListener("keydown", x),
          document.addEventListener("keyup", v),
          () => {
            document.removeEventListener("keydown", x),
              document.removeEventListener("keyup", v);
          }
        );
      }, []),
      l.createElement(
        vv,
        P({ asChild: !0 }, a, { focusable: !i, active: d }),
        l.createElement(
          h5,
          P({ disabled: i, required: s.required, checked: d }, c, o, {
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: D((x) => {
              x.key === "Enter" && x.preventDefault();
            }),
            onFocus: D(o.onFocus, () => {
              var x;
              h.current &&
                ((x = u.current) === null || x === void 0 || x.click());
            }),
          })
        )
      )
    );
  }),
  R5 = l.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      o = Jv(n);
    return l.createElement(v5, P({}, o, r, { ref: t }));
  }),
  Zv = S5,
  e1 = C5,
  P5 = R5,
  Dd = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(Zv, { className: W("grid gap-2", e), ...t, ref: n })
  );
Dd.displayName = Zv.displayName;
const Ut = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(e1, {
    ref: n,
    className: W(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: p.jsx(P5, {
      className: "flex items-center justify-center",
      children: p.jsx(pd, { className: "h-3.5 w-3.5 fill-primary" }),
    }),
  })
);
Ut.displayName = e1.displayName;
function t1() {
  const { setTheme: e } = d5();
  return p.jsxs(Dd, {
    className: "w-full flex items-center justify-between mt-2",
    defaultValue: "system",
    children: [
      p.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          p.jsx(Ut, { onClick: () => e("light"), value: "light", id: "light" }),
          p.jsx(Dr, { htmlFor: "light", children: "Light" }),
        ],
      }),
      p.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          p.jsx(Ut, { onClick: () => e("dark"), value: "dark", id: "dark" }),
          p.jsx(Dr, { htmlFor: "dark", children: "Dark" }),
        ],
      }),
      p.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          p.jsx(Ut, {
            onClick: () => e("system"),
            value: "system",
            id: "system",
          }),
          p.jsx(Dr, { htmlFor: "system", children: "System" }),
        ],
      }),
    ],
  });
}
function _5({ user: e, logout: t }) {
  return p.jsx("div", {
    className: "cursor-pointer",
    children: p.jsxs(Nd, {
      children: [
        p.jsx(Td, {
          asChild: !0,
          children: p.jsxs(Hc, {
            children: [
              p.jsx(Wc, { src: e.picture }),
              p.jsx(Wv, { children: e.fullName.at(0) }),
            ],
          }),
        }),
        p.jsxs(Aa, {
          className: "mx-4 p-2 md:w-72 lg:w-72",
          children: [
            p.jsxs("div", {
              className: "flex  items-center  gap-2 ",
              children: [
                p.jsx(Hc, {
                  className: "flex",
                  children: p.jsx(Wc, { src: e.picture }),
                }),
                p.jsxs("div", {
                  className: "",
                  children: [
                    p.jsx("small", {
                      className: "text-sm font-medium leading-none",
                      children: e.fullName,
                    }),
                    p.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: e.email,
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(jd, {}),
            p.jsxs("div", {
              className: "",
              children: [
                p.jsx(Od, { children: "Theme" }),
                p.jsx(t1, {}),
                p.jsx(qt, {
                  className: "w-full mt-4",
                  variant: "ghost",
                  onClick: t,
                  children: "Sign out",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function k5() {
  const e = ds(),
    t = e == null ? void 0 : e.user,
    n = e == null ? void 0 : e.logout,
    r = () => {
      n && n();
    };
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx("header", {
        children: p.jsx("nav", {
          role: "navigation",
          children: p.jsx(V0, {
            children: p.jsxs("div", {
              className: "flex items-center justify-between w-full m-2",
              children: [
                p.jsx("h4", {
                  className:
                    "ml-4 text-xl font-semibold tracking-tight scroll-m-20 ",
                  children: "Readify",
                }),
                p.jsx("div", {
                  className: "flex items-center gap-4 mr-4",
                  children: t && p.jsx(_5, { user: t, logout: r }),
                }),
              ],
            }),
          }),
        }),
      }),
      p.jsx("div", {
        className:
          "flex flex-col items-center justify-center w-full mx-auto mt-6 lg:items-end md:items-end lg:w-1/2 md:w-3/4",
        children: t ? p.jsx(bC, {}) : "",
      }),
      p.jsx("main", {
        className:
          "flex flex-col  w-full p-6 mx-auto mt-6 border rounded shadow-sm lg:w-1/2 md:w-3/4",
        children: p.jsx(rC, {}),
      }),
    ],
  });
}
const n1 = ud,
  r1 = dd,
  N5 = fd,
  o1 = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(ps, {
      className: W(
        "fixed inset-0 z-50 bg-black/40  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
o1.displayName = ps.displayName;
const T5 = wa(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Ad = l.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      p.jsxs(N5, {
        children: [
          p.jsx(o1, {}),
          p.jsxs(ms, {
            ref: o,
            className: W(T5({ side: e }), t),
            ...r,
            children: [
              n,
              p.jsxs(ka, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  p.jsx(md, { className: "w-4 h-4" }),
                  p.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
Ad.displayName = ms.displayName;
const No = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: W("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
No.displayName = "SheetHeader";
const To = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(hs, {
    ref: n,
    className: W("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
To.displayName = hs.displayName;
const Yn = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(gs, { ref: n, className: W("text-sm text-muted-foreground", e), ...t })
);
Yn.displayName = gs.displayName;
function O5({ wordsCount: e, charactersCount: t }) {
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col items-start",
    children: [
      p.jsxs("p", {
        className: "text-sm text-muted-foreground",
        children: [
          "Words:",
          " ",
          p.jsx("span", {
            "aria-label": "Number of words in the text" + e,
            className: "",
            children: e,
          }),
        ],
      }),
      p.jsxs("p", {
        className: "text-sm text-muted-foreground",
        children: [
          "Characters:",
          " ",
          p.jsx("span", {
            "aria-label": "Number of character in the text" + t,
            className: "",
            children: t,
          }),
        ],
      }),
    ],
  });
}
function Zi(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
const s1 = ["PageUp", "PageDown"],
  i1 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  a1 = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  $s = "Slider",
  [Kc, j5, D5] = ys($s),
  [l1, d7] = He($s, [D5]),
  [A5, Ia] = l1($s),
  M5 = l.forwardRef((e, t) => {
    const {
        name: n,
        min: r = 0,
        max: o = 100,
        step: s = 1,
        orientation: i = "horizontal",
        disabled: a = !1,
        minStepsBetweenThumbs: c = 0,
        defaultValue: u = [r],
        value: f,
        onValueChange: d = () => {},
        onValueCommit: h = () => {},
        inverted: x = !1,
        ...v
      } = e,
      [g, b] = l.useState(null),
      y = X(t, (N) => b(N)),
      m = l.useRef(new Set()),
      w = l.useRef(0),
      $ = i === "horizontal",
      S = g ? !!g.closest("form") : !0,
      C = $ ? I5 : L5,
      [E = [], R] = At({
        prop: f,
        defaultProp: u,
        onChange: (N) => {
          var I;
          (I = [...m.current][w.current]) === null || I === void 0 || I.focus(),
            d(N);
        },
      }),
      L = l.useRef(E);
    function M(N) {
      const I = G5(E, N);
      Y(N, I);
    }
    function H(N) {
      Y(N, w.current);
    }
    function j() {
      const N = L.current[w.current];
      E[w.current] !== N && h(E);
    }
    function Y(N, I, { commit: V } = { commit: !1 }) {
      const B = q5(s),
        T = J5(Math.round((N - r) / s) * s + r, B),
        _ = Zi(T, [r, o]);
      R((A = []) => {
        const z = W5(A, _, I);
        if (X5(z, c * s)) {
          w.current = z.indexOf(_);
          const G = String(z) !== String(A);
          return G && V && h(z), G ? z : A;
        } else return A;
      });
    }
    return l.createElement(
      A5,
      {
        scope: e.__scopeSlider,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: w,
        thumbs: m.current,
        values: E,
        orientation: i,
      },
      l.createElement(
        Kc.Provider,
        { scope: e.__scopeSlider },
        l.createElement(
          Kc.Slot,
          { scope: e.__scopeSlider },
          l.createElement(
            C,
            P({ "aria-disabled": a, "data-disabled": a ? "" : void 0 }, v, {
              ref: y,
              onPointerDown: D(v.onPointerDown, () => {
                a || (L.current = E);
              }),
              min: r,
              max: o,
              inverted: x,
              onSlideStart: a ? void 0 : M,
              onSlideMove: a ? void 0 : H,
              onSlideEnd: a ? void 0 : j,
              onHomeKeyDown: () => !a && Y(r, 0, { commit: !0 }),
              onEndKeyDown: () => !a && Y(o, E.length - 1, { commit: !0 }),
              onStepKeyDown: ({ event: N, direction: I }) => {
                if (!a) {
                  const T =
                      s1.includes(N.key) || (N.shiftKey && i1.includes(N.key))
                        ? 10
                        : 1,
                    _ = w.current,
                    A = E[_],
                    z = s * T * I;
                  Y(A + z, _, { commit: !0 });
                }
              },
            })
          )
        )
      ),
      S &&
        E.map((N, I) =>
          l.createElement(H5, {
            key: I,
            name: n ? n + (E.length > 1 ? "[]" : "") : void 0,
            value: N,
          })
        )
    );
  }),
  [c1, u1] = l1($s, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  I5 = l.forwardRef((e, t) => {
    const {
        min: n,
        max: r,
        dir: o,
        inverted: s,
        onSlideStart: i,
        onSlideMove: a,
        onSlideEnd: c,
        onStepKeyDown: u,
        ...f
      } = e,
      [d, h] = l.useState(null),
      x = X(t, (w) => h(w)),
      v = l.useRef(),
      g = xs(o),
      b = g === "ltr",
      y = (b && !s) || (!b && s);
    function m(w) {
      const $ = v.current || d.getBoundingClientRect(),
        S = [0, $.width],
        E = Md(S, y ? [n, r] : [r, n]);
      return (v.current = $), E(w - $.left);
    }
    return l.createElement(
      c1,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
      },
      l.createElement(
        d1,
        P({ dir: g, "data-orientation": "horizontal" }, f, {
          ref: x,
          style: {
            ...f.style,
            "--radix-slider-thumb-transform": "translateX(-50%)",
          },
          onSlideStart: (w) => {
            const $ = m(w.clientX);
            i == null || i($);
          },
          onSlideMove: (w) => {
            const $ = m(w.clientX);
            a == null || a($);
          },
          onSlideEnd: () => {
            (v.current = void 0), c == null || c();
          },
          onStepKeyDown: (w) => {
            const S = a1[y ? "from-left" : "from-right"].includes(w.key);
            u == null || u({ event: w, direction: S ? -1 : 1 });
          },
        })
      )
    );
  }),
  L5 = l.forwardRef((e, t) => {
    const {
        min: n,
        max: r,
        inverted: o,
        onSlideStart: s,
        onSlideMove: i,
        onSlideEnd: a,
        onStepKeyDown: c,
        ...u
      } = e,
      f = l.useRef(null),
      d = X(t, f),
      h = l.useRef(),
      x = !o;
    function v(g) {
      const b = h.current || f.current.getBoundingClientRect(),
        y = [0, b.height],
        w = Md(y, x ? [r, n] : [n, r]);
      return (h.current = b), w(g - b.top);
    }
    return l.createElement(
      c1,
      {
        scope: e.__scopeSlider,
        startEdge: x ? "bottom" : "top",
        endEdge: x ? "top" : "bottom",
        size: "height",
        direction: x ? 1 : -1,
      },
      l.createElement(
        d1,
        P({ "data-orientation": "vertical" }, u, {
          ref: d,
          style: {
            ...u.style,
            "--radix-slider-thumb-transform": "translateY(50%)",
          },
          onSlideStart: (g) => {
            const b = v(g.clientY);
            s == null || s(b);
          },
          onSlideMove: (g) => {
            const b = v(g.clientY);
            i == null || i(b);
          },
          onSlideEnd: () => {
            (h.current = void 0), a == null || a();
          },
          onStepKeyDown: (g) => {
            const y = a1[x ? "from-bottom" : "from-top"].includes(g.key);
            c == null || c({ event: g, direction: y ? -1 : 1 });
          },
        })
      )
    );
  }),
  d1 = l.forwardRef((e, t) => {
    const {
        __scopeSlider: n,
        onSlideStart: r,
        onSlideMove: o,
        onSlideEnd: s,
        onHomeKeyDown: i,
        onEndKeyDown: a,
        onStepKeyDown: c,
        ...u
      } = e,
      f = Ia($s, n);
    return l.createElement(
      K.span,
      P({}, u, {
        ref: t,
        onKeyDown: D(e.onKeyDown, (d) => {
          d.key === "Home"
            ? (i(d), d.preventDefault())
            : d.key === "End"
            ? (a(d), d.preventDefault())
            : s1.concat(i1).includes(d.key) && (c(d), d.preventDefault());
        }),
        onPointerDown: D(e.onPointerDown, (d) => {
          const h = d.target;
          h.setPointerCapture(d.pointerId),
            d.preventDefault(),
            f.thumbs.has(h) ? h.focus() : r(d);
        }),
        onPointerMove: D(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && o(d);
        }),
        onPointerUp: D(e.onPointerUp, (d) => {
          const h = d.target;
          h.hasPointerCapture(d.pointerId) &&
            (h.releasePointerCapture(d.pointerId), s(d));
        }),
      })
    );
  }),
  F5 = "SliderTrack",
  z5 = l.forwardRef((e, t) => {
    const { __scopeSlider: n, ...r } = e,
      o = Ia(F5, n);
    return l.createElement(
      K.span,
      P(
        {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
        },
        r,
        { ref: t }
      )
    );
  }),
  Qp = "SliderRange",
  B5 = l.forwardRef((e, t) => {
    const { __scopeSlider: n, ...r } = e,
      o = Ia(Qp, n),
      s = u1(Qp, n),
      i = l.useRef(null),
      a = X(t, i),
      c = o.values.length,
      u = o.values.map((h) => f1(h, o.min, o.max)),
      f = c > 1 ? Math.min(...u) : 0,
      d = 100 - Math.max(...u);
    return l.createElement(
      K.span,
      P(
        {
          "data-orientation": o.orientation,
          "data-disabled": o.disabled ? "" : void 0,
        },
        r,
        {
          ref: a,
          style: { ...e.style, [s.startEdge]: f + "%", [s.endEdge]: d + "%" },
        }
      )
    );
  }),
  Xp = "SliderThumb",
  U5 = l.forwardRef((e, t) => {
    const n = j5(e.__scopeSlider),
      [r, o] = l.useState(null),
      s = X(t, (a) => o(a)),
      i = l.useMemo(
        () => (r ? n().findIndex((a) => a.ref.current === r) : -1),
        [n, r]
      );
    return l.createElement(V5, P({}, e, { ref: s, index: i }));
  }),
  V5 = l.forwardRef((e, t) => {
    const { __scopeSlider: n, index: r, ...o } = e,
      s = Ia(Xp, n),
      i = u1(Xp, n),
      [a, c] = l.useState(null),
      u = X(t, (b) => c(b)),
      f = Oa(a),
      d = s.values[r],
      h = d === void 0 ? 0 : f1(d, s.min, s.max),
      x = K5(r, s.values.length),
      v = f == null ? void 0 : f[i.size],
      g = v ? Y5(v, h, i.direction) : 0;
    return (
      l.useEffect(() => {
        if (a)
          return (
            s.thumbs.add(a),
            () => {
              s.thumbs.delete(a);
            }
          );
      }, [a, s.thumbs]),
      l.createElement(
        "span",
        {
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [i.startEdge]: `calc(${h}% + ${g}px)`,
          },
        },
        l.createElement(
          Kc.ItemSlot,
          { scope: e.__scopeSlider },
          l.createElement(
            K.span,
            P(
              {
                role: "slider",
                "aria-label": e["aria-label"] || x,
                "aria-valuemin": s.min,
                "aria-valuenow": d,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
              },
              o,
              {
                ref: u,
                style: d === void 0 ? { display: "none" } : e.style,
                onFocus: D(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = r;
                }),
              }
            )
          )
        )
      )
    );
  }),
  H5 = (e) => {
    const { value: t, ...n } = e,
      r = l.useRef(null),
      o = Ma(t);
    return (
      l.useEffect(() => {
        const s = r.current,
          i = window.HTMLInputElement.prototype,
          c = Object.getOwnPropertyDescriptor(i, "value").set;
        if (o !== t && c) {
          const u = new Event("input", { bubbles: !0 });
          c.call(s, t), s.dispatchEvent(u);
        }
      }, [o, t]),
      l.createElement(
        "input",
        P({ style: { display: "none" } }, n, { ref: r, defaultValue: t })
      )
    );
  };
function W5(e = [], t, n) {
  const r = [...e];
  return (r[n] = t), r.sort((o, s) => o - s);
}
function f1(e, t, n) {
  const s = (100 / (n - t)) * (e - t);
  return Zi(s, [0, 100]);
}
function K5(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
    ? ["Minimum", "Maximum"][e]
    : void 0;
}
function G5(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)),
    r = Math.min(...n);
  return n.indexOf(r);
}
function Y5(e, t, n) {
  const r = e / 2,
    s = Md([0, 50], [0, r]);
  return (r - s(t) * n) * n;
}
function Q5(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function X5(e, t) {
  if (t > 0) {
    const n = Q5(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Md(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function q5(e) {
  return (String(e).split(".")[1] || "").length;
}
function J5(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const p1 = M5,
  Z5 = z5,
  e6 = B5,
  t6 = U5,
  Dt = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsxs(p1, {
      ref: n,
      className: W(
        "relative flex w-full touch-none select-none items-center",
        e
      ),
      ...t,
      children: [
        p.jsx(Z5, {
          className:
            "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
          children: p.jsx(e6, { className: "absolute h-full bg-primary" }),
        }),
        p.jsx(t6, {
          className:
            "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        }),
      ],
    })
  );
Dt.displayName = p1.displayName;
function n6({ textSize: e, setTextSize: t }) {
  const [n, r] = l.useState(e),
    o = (s) => {
      r(s), t(s);
    };
  return p.jsxs("div", {
    role: "presentation",
    className: "relative flex flex-col items-start ",
    children: [
      p.jsx($t, {
        htmlFor: "textSize",
        className: "mb-4 text-sm text-muted-foreground",
        children: "Font Size",
      }),
      p.jsx(Dt, {
        "aria-label": "Font Size" + n + "pixels",
        defaultValue: [n],
        onValueChange: (s) => o(s[0]),
        min: 10,
        max: 30,
        step: 1,
        id: "textSize",
      }),
      p.jsxs("span", {
        "aria-label": "Current Text Size",
        className:
          "absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground",
        children: [n, " px"],
      }),
    ],
  });
}
function r6({ lineSpacing: e, setLineSpacing: t }) {
  const [n, r] = l.useState(e),
    o = (s) => {
      r(s), t(s);
    };
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col items-start mt-4 relative",
    children: [
      p.jsx($t, {
        htmlFor: "lineSpacing",
        className: "text-sm text-muted-foreground mb-4",
        children: "Line Spacing",
      }),
      p.jsx(Dt, {
        "aria-label": "Line Spacing" + n + "pixels",
        defaultValue: [n],
        onValueChange: (s) => o(s[0]),
        min: 18,
        max: 60,
        step: 1,
        id: "lineSpacing",
      }),
      p.jsxs("span", {
        "aria-label": "Current Line Spacing",
        className:
          "absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1",
        children: [n, " px"],
      }),
    ],
  });
}
const Id = l.forwardRef((e, t) =>
    l.createElement(
      K.span,
      P({}, e, {
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style,
        },
      })
    )
  ),
  o6 = [" ", "Enter", "ArrowUp", "ArrowDown"],
  s6 = [" ", "Enter"],
  La = "Select",
  [Fa, za, i6] = ys(La),
  [no, f7] = He(La, [i6, to]),
  Ld = to(),
  [a6, ar] = no(La),
  [l6, c6] = no(La),
  u6 = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: i,
        defaultValue: a,
        onValueChange: c,
        dir: u,
        name: f,
        autoComplete: d,
        disabled: h,
        required: x,
      } = e,
      v = Ld(t),
      [g, b] = l.useState(null),
      [y, m] = l.useState(null),
      [w, $] = l.useState(!1),
      S = xs(u),
      [C = !1, E] = At({ prop: r, defaultProp: o, onChange: s }),
      [R, L] = At({ prop: i, defaultProp: a, onChange: c }),
      M = l.useRef(null),
      H = g ? !!g.closest("form") : !0,
      [j, Y] = l.useState(new Set()),
      N = Array.from(j)
        .map((I) => I.props.value)
        .join(";");
    return l.createElement(
      bd,
      v,
      l.createElement(
        a6,
        {
          required: x,
          scope: t,
          trigger: g,
          onTriggerChange: b,
          valueNode: y,
          onValueNodeChange: m,
          valueNodeHasChildren: w,
          onValueNodeHasChildrenChange: $,
          contentId: Pn(),
          value: R,
          onValueChange: L,
          open: C,
          onOpenChange: E,
          dir: S,
          triggerPointerDownPosRef: M,
          disabled: h,
        },
        l.createElement(
          Fa.Provider,
          { scope: t },
          l.createElement(
            l6,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: l.useCallback((I) => {
                Y((V) => new Set(V).add(I));
              }, []),
              onNativeOptionRemove: l.useCallback((I) => {
                Y((V) => {
                  const B = new Set(V);
                  return B.delete(I), B;
                });
              }, []),
            },
            n
          )
        ),
        H
          ? l.createElement(
              y1,
              {
                key: N,
                "aria-hidden": !0,
                required: x,
                tabIndex: -1,
                name: f,
                autoComplete: d,
                value: R,
                onChange: (I) => L(I.target.value),
                disabled: h,
              },
              R === void 0 ? l.createElement("option", { value: "" }) : null,
              Array.from(j)
            )
          : null
      )
    );
  },
  d6 = "SelectTrigger",
  f6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = Ld(n),
      i = ar(d6, n),
      a = i.disabled || r,
      c = X(t, i.onTriggerChange),
      u = za(n),
      [f, d, h] = x1((v) => {
        const g = u().filter((m) => !m.disabled),
          b = g.find((m) => m.value === i.value),
          y = w1(g, v, b);
        y !== void 0 && i.onValueChange(y.value);
      }),
      x = () => {
        a || (i.onOpenChange(!0), h());
      };
    return l.createElement(
      $d,
      P({ asChild: !0 }, s),
      l.createElement(
        K.button,
        P(
          {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": v1(i.value) ? "" : void 0,
          },
          o,
          {
            ref: c,
            onClick: D(o.onClick, (v) => {
              v.currentTarget.focus();
            }),
            onPointerDown: D(o.onPointerDown, (v) => {
              const g = v.target;
              g.hasPointerCapture(v.pointerId) &&
                g.releasePointerCapture(v.pointerId),
                v.button === 0 &&
                  v.ctrlKey === !1 &&
                  (x(),
                  (i.triggerPointerDownPosRef.current = {
                    x: Math.round(v.pageX),
                    y: Math.round(v.pageY),
                  }),
                  v.preventDefault());
            }),
            onKeyDown: D(o.onKeyDown, (v) => {
              const g = f.current !== "";
              !(v.ctrlKey || v.altKey || v.metaKey) &&
                v.key.length === 1 &&
                d(v.key),
                !(g && v.key === " ") &&
                  o6.includes(v.key) &&
                  (x(), v.preventDefault());
            }),
          }
        )
      )
    );
  }),
  p6 = "SelectValue",
  m6 = l.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: i = "",
        ...a
      } = e,
      c = ar(p6, n),
      { onValueNodeHasChildrenChange: u } = c,
      f = s !== void 0,
      d = X(t, c.onValueNodeChange);
    return (
      je(() => {
        u(f);
      }, [u, f]),
      l.createElement(
        K.span,
        P({}, a, { ref: d, style: { pointerEvents: "none" } }),
        v1(c.value) ? l.createElement(l.Fragment, null, i) : s
      )
    );
  }),
  h6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return l.createElement(
      K.span,
      P({ "aria-hidden": !0 }, o, { ref: t }),
      r || "▼"
    );
  }),
  g6 = (e) => l.createElement(Pa, P({ asChild: !0 }, e)),
  Kr = "SelectContent",
  v6 = l.forwardRef((e, t) => {
    const n = ar(Kr, e.__scopeSelect),
      [r, o] = l.useState();
    if (
      (je(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? In.createPortal(
            l.createElement(
              m1,
              { scope: e.__scopeSelect },
              l.createElement(
                Fa.Slot,
                { scope: e.__scopeSelect },
                l.createElement("div", null, e.children)
              )
            ),
            s
          )
        : null;
    }
    return l.createElement(y6, P({}, e, { ref: t }));
  }),
  zt = 10,
  [m1, lr] = no(Kr),
  y6 = l.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: a,
        sideOffset: c,
        align: u,
        alignOffset: f,
        arrowPadding: d,
        collisionBoundary: h,
        collisionPadding: x,
        sticky: v,
        hideWhenDetached: g,
        avoidCollisions: b,
        ...y
      } = e,
      m = ar(Kr, n),
      [w, $] = l.useState(null),
      [S, C] = l.useState(null),
      E = X(t, (U) => $(U)),
      [R, L] = l.useState(null),
      [M, H] = l.useState(null),
      j = za(n),
      [Y, N] = l.useState(!1),
      I = l.useRef(!1);
    l.useEffect(() => {
      if (w) return ld(w);
    }, [w]),
      id();
    const V = l.useCallback(
        (U) => {
          const [ee, ...re] = j().map((ne) => ne.ref.current),
            [te] = re.slice(-1),
            oe = document.activeElement;
          for (const ne of U)
            if (
              ne === oe ||
              (ne == null || ne.scrollIntoView({ block: "nearest" }),
              ne === ee && S && (S.scrollTop = 0),
              ne === te && S && (S.scrollTop = S.scrollHeight),
              ne == null || ne.focus(),
              document.activeElement !== oe)
            )
              return;
        },
        [j, S]
      ),
      B = l.useCallback(() => V([R, w]), [V, R, w]);
    l.useEffect(() => {
      Y && B();
    }, [Y, B]);
    const { onOpenChange: T, triggerPointerDownPosRef: _ } = m;
    l.useEffect(() => {
      if (w) {
        let U = { x: 0, y: 0 };
        const ee = (te) => {
            var oe, ne, Fe, be;
            U = {
              x: Math.abs(
                Math.round(te.pageX) -
                  ((oe =
                    (ne = _.current) === null || ne === void 0
                      ? void 0
                      : ne.x) !== null && oe !== void 0
                    ? oe
                    : 0)
              ),
              y: Math.abs(
                Math.round(te.pageY) -
                  ((Fe =
                    (be = _.current) === null || be === void 0
                      ? void 0
                      : be.y) !== null && Fe !== void 0
                    ? Fe
                    : 0)
              ),
            };
          },
          re = (te) => {
            U.x <= 10 && U.y <= 10
              ? te.preventDefault()
              : w.contains(te.target) || T(!1),
              document.removeEventListener("pointermove", ee),
              (_.current = null);
          };
        return (
          _.current !== null &&
            (document.addEventListener("pointermove", ee),
            document.addEventListener("pointerup", re, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", ee),
              document.removeEventListener("pointerup", re, { capture: !0 });
          }
        );
      }
    }, [w, T, _]),
      l.useEffect(() => {
        const U = () => T(!1);
        return (
          window.addEventListener("blur", U),
          window.addEventListener("resize", U),
          () => {
            window.removeEventListener("blur", U),
              window.removeEventListener("resize", U);
          }
        );
      }, [T]);
    const [A, z] = x1((U) => {
        const ee = j().filter((oe) => !oe.disabled),
          re = ee.find((oe) => oe.ref.current === document.activeElement),
          te = w1(ee, U, re);
        te && setTimeout(() => te.ref.current.focus());
      }),
      G = l.useCallback(
        (U, ee, re) => {
          const te = !I.current && !re;
          ((m.value !== void 0 && m.value === ee) || te) &&
            (L(U), te && (I.current = !0));
        },
        [m.value]
      ),
      fe = l.useCallback(() => (w == null ? void 0 : w.focus()), [w]),
      ie = l.useCallback(
        (U, ee, re) => {
          const te = !I.current && !re;
          ((m.value !== void 0 && m.value === ee) || te) && H(U);
        },
        [m.value]
      ),
      Pe = r === "popper" ? qp : x6,
      ae =
        Pe === qp
          ? {
              side: a,
              sideOffset: c,
              align: u,
              alignOffset: f,
              arrowPadding: d,
              collisionBoundary: h,
              collisionPadding: x,
              sticky: v,
              hideWhenDetached: g,
              avoidCollisions: b,
            }
          : {};
    return l.createElement(
      m1,
      {
        scope: n,
        content: w,
        viewport: S,
        onViewportChange: C,
        itemRefCallback: G,
        selectedItem: R,
        onItemLeave: fe,
        itemTextRefCallback: ie,
        focusSelectedItem: B,
        selectedItemText: M,
        position: r,
        isPositioned: Y,
        searchRef: A,
      },
      l.createElement(
        ad,
        { as: Nn, allowPinchZoom: !0 },
        l.createElement(
          sd,
          {
            asChild: !0,
            trapped: m.open,
            onMountAutoFocus: (U) => {
              U.preventDefault();
            },
            onUnmountAutoFocus: D(o, (U) => {
              var ee;
              (ee = m.trigger) === null ||
                ee === void 0 ||
                ee.focus({ preventScroll: !0 }),
                U.preventDefault();
            }),
          },
          l.createElement(
            fs,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: s,
              onPointerDownOutside: i,
              onFocusOutside: (U) => U.preventDefault(),
              onDismiss: () => m.onOpenChange(!1),
            },
            l.createElement(
              Pe,
              P(
                {
                  role: "listbox",
                  id: m.contentId,
                  "data-state": m.open ? "open" : "closed",
                  dir: m.dir,
                  onContextMenu: (U) => U.preventDefault(),
                },
                y,
                ae,
                {
                  onPlaced: () => N(!0),
                  ref: E,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...y.style,
                  },
                  onKeyDown: D(y.onKeyDown, (U) => {
                    const ee = U.ctrlKey || U.altKey || U.metaKey;
                    if (
                      (U.key === "Tab" && U.preventDefault(),
                      !ee && U.key.length === 1 && z(U.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(U.key))
                    ) {
                      let te = j()
                        .filter((oe) => !oe.disabled)
                        .map((oe) => oe.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(U.key) &&
                          (te = te.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(U.key))
                      ) {
                        const oe = U.target,
                          ne = te.indexOf(oe);
                        te = te.slice(ne + 1);
                      }
                      setTimeout(() => V(te)), U.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        )
      )
    );
  }),
  x6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = ar(Kr, n),
      i = lr(Kr, n),
      [a, c] = l.useState(null),
      [u, f] = l.useState(null),
      d = X(t, (E) => f(E)),
      h = za(n),
      x = l.useRef(!1),
      v = l.useRef(!0),
      {
        viewport: g,
        selectedItem: b,
        selectedItemText: y,
        focusSelectedItem: m,
      } = i,
      w = l.useCallback(() => {
        if (s.trigger && s.valueNode && a && u && g && b && y) {
          const E = s.trigger.getBoundingClientRect(),
            R = u.getBoundingClientRect(),
            L = s.valueNode.getBoundingClientRect(),
            M = y.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const oe = M.left - R.left,
              ne = L.left - oe,
              Fe = E.left - ne,
              be = E.width + Fe,
              me = Math.max(be, R.width),
              st = window.innerWidth - zt,
              cr = Zi(ne, [zt, st - me]);
            (a.style.minWidth = be + "px"), (a.style.left = cr + "px");
          } else {
            const oe = R.right - M.right,
              ne = window.innerWidth - L.right - oe,
              Fe = window.innerWidth - E.right - ne,
              be = E.width + Fe,
              me = Math.max(be, R.width),
              st = window.innerWidth - zt,
              cr = Zi(ne, [zt, st - me]);
            (a.style.minWidth = be + "px"), (a.style.right = cr + "px");
          }
          const H = h(),
            j = window.innerHeight - zt * 2,
            Y = g.scrollHeight,
            N = window.getComputedStyle(u),
            I = parseInt(N.borderTopWidth, 10),
            V = parseInt(N.paddingTop, 10),
            B = parseInt(N.borderBottomWidth, 10),
            T = parseInt(N.paddingBottom, 10),
            _ = I + V + Y + T + B,
            A = Math.min(b.offsetHeight * 5, _),
            z = window.getComputedStyle(g),
            G = parseInt(z.paddingTop, 10),
            fe = parseInt(z.paddingBottom, 10),
            ie = E.top + E.height / 2 - zt,
            Pe = j - ie,
            ae = b.offsetHeight / 2,
            U = b.offsetTop + ae,
            ee = I + V + U,
            re = _ - ee;
          if (ee <= ie) {
            const oe = b === H[H.length - 1].ref.current;
            a.style.bottom = "0px";
            const ne = u.clientHeight - g.offsetTop - g.offsetHeight,
              Fe = Math.max(Pe, ae + (oe ? fe : 0) + ne + B),
              be = ee + Fe;
            a.style.height = be + "px";
          } else {
            const oe = b === H[0].ref.current;
            a.style.top = "0px";
            const Fe = Math.max(ie, I + g.offsetTop + (oe ? G : 0) + ae) + re;
            (a.style.height = Fe + "px"), (g.scrollTop = ee - ie + g.offsetTop);
          }
          (a.style.margin = `${zt}px 0`),
            (a.style.minHeight = A + "px"),
            (a.style.maxHeight = j + "px"),
            r == null || r(),
            requestAnimationFrame(() => (x.current = !0));
        }
      }, [h, s.trigger, s.valueNode, a, u, g, b, y, s.dir, r]);
    je(() => w(), [w]);
    const [$, S] = l.useState();
    je(() => {
      u && S(window.getComputedStyle(u).zIndex);
    }, [u]);
    const C = l.useCallback(
      (E) => {
        E && v.current === !0 && (w(), m == null || m(), (v.current = !1));
      },
      [w, m]
    );
    return l.createElement(
      w6,
      {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: x,
        onScrollButtonChange: C,
      },
      l.createElement(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: $,
          },
        },
        l.createElement(
          K.div,
          P({}, o, {
            ref: d,
            style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
          })
        )
      )
    );
  }),
  qp = l.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = zt,
        ...s
      } = e,
      i = Ld(n);
    return l.createElement(
      Sd,
      P({}, i, s, {
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
          boxSizing: "border-box",
          ...s.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  [w6, Fd] = no(Kr, {}),
  Jp = "SelectViewport",
  b6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = lr(Jp, n),
      s = Fd(Jp, n),
      i = X(t, o.onViewportChange),
      a = l.useRef(0);
    return l.createElement(
      l.Fragment,
      null,
      l.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      l.createElement(
        Fa.Slot,
        { scope: n },
        l.createElement(
          K.div,
          P({ "data-radix-select-viewport": "", role: "presentation" }, r, {
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...r.style,
            },
            onScroll: D(r.onScroll, (c) => {
              const u = c.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: d } = s;
              if (d != null && d.current && f) {
                const h = Math.abs(a.current - u.scrollTop);
                if (h > 0) {
                  const x = window.innerHeight - zt * 2,
                    v = parseFloat(f.style.minHeight),
                    g = parseFloat(f.style.height),
                    b = Math.max(v, g);
                  if (b < x) {
                    const y = b + h,
                      m = Math.min(x, y),
                      w = y - m;
                    (f.style.height = m + "px"),
                      f.style.bottom === "0px" &&
                        ((u.scrollTop = w > 0 ? w : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = u.scrollTop;
            }),
          })
        )
      )
    );
  }),
  $6 = "SelectGroup",
  [p7, S6] = no($6),
  E6 = "SelectLabel",
  C6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = S6(E6, n);
    return l.createElement(K.div, P({ id: o.id }, r, { ref: t }));
  }),
  Gc = "SelectItem",
  [R6, h1] = no(Gc),
  P6 = l.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...i
      } = e,
      a = ar(Gc, n),
      c = lr(Gc, n),
      u = a.value === r,
      [f, d] = l.useState(s ?? ""),
      [h, x] = l.useState(!1),
      v = X(t, (y) => {
        var m;
        return (m = c.itemRefCallback) === null || m === void 0
          ? void 0
          : m.call(c, y, r, o);
      }),
      g = Pn(),
      b = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return l.createElement(
      R6,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: l.useCallback((y) => {
          d((m) => {
            var w;
            return (
              m ||
              ((w = y == null ? void 0 : y.textContent) !== null && w !== void 0
                ? w
                : ""
              ).trim()
            );
          });
        }, []),
      },
      l.createElement(
        Fa.ItemSlot,
        { scope: n, value: r, disabled: o, textValue: f },
        l.createElement(
          K.div,
          P(
            {
              role: "option",
              "aria-labelledby": g,
              "data-highlighted": h ? "" : void 0,
              "aria-selected": u && h,
              "data-state": u ? "checked" : "unchecked",
              "aria-disabled": o || void 0,
              "data-disabled": o ? "" : void 0,
              tabIndex: o ? void 0 : -1,
            },
            i,
            {
              ref: v,
              onFocus: D(i.onFocus, () => x(!0)),
              onBlur: D(i.onBlur, () => x(!1)),
              onPointerUp: D(i.onPointerUp, b),
              onPointerMove: D(i.onPointerMove, (y) => {
                if (o) {
                  var m;
                  (m = c.onItemLeave) === null || m === void 0 || m.call(c);
                } else y.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: D(i.onPointerLeave, (y) => {
                if (y.currentTarget === document.activeElement) {
                  var m;
                  (m = c.onItemLeave) === null || m === void 0 || m.call(c);
                }
              }),
              onKeyDown: D(i.onKeyDown, (y) => {
                var m;
                (((m = c.searchRef) === null || m === void 0
                  ? void 0
                  : m.current) !== "" &&
                  y.key === " ") ||
                  (s6.includes(y.key) && b(),
                  y.key === " " && y.preventDefault());
              }),
            }
          )
        )
      )
    );
  }),
  qs = "SelectItemText",
  _6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      i = ar(qs, n),
      a = lr(qs, n),
      c = h1(qs, n),
      u = c6(qs, n),
      [f, d] = l.useState(null),
      h = X(
        t,
        (y) => d(y),
        c.onItemTextChange,
        (y) => {
          var m;
          return (m = a.itemTextRefCallback) === null || m === void 0
            ? void 0
            : m.call(a, y, c.value, c.disabled);
        }
      ),
      x = f == null ? void 0 : f.textContent,
      v = l.useMemo(
        () =>
          l.createElement(
            "option",
            { key: c.value, value: c.value, disabled: c.disabled },
            x
          ),
        [c.disabled, c.value, x]
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: b } = u;
    return (
      je(() => (g(v), () => b(v)), [g, b, v]),
      l.createElement(
        l.Fragment,
        null,
        l.createElement(K.span, P({ id: c.textId }, s, { ref: h })),
        c.isSelected && i.valueNode && !i.valueNodeHasChildren
          ? In.createPortal(s.children, i.valueNode)
          : null
      )
    );
  }),
  k6 = "SelectItemIndicator",
  N6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return h1(k6, n).isSelected
      ? l.createElement(K.span, P({ "aria-hidden": !0 }, r, { ref: t }))
      : null;
  }),
  Zp = "SelectScrollUpButton",
  T6 = l.forwardRef((e, t) => {
    const n = lr(Zp, e.__scopeSelect),
      r = Fd(Zp, e.__scopeSelect),
      [o, s] = l.useState(!1),
      i = X(t, r.onScrollButtonChange);
    return (
      je(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const f = c.scrollTop > 0;
            s(f);
          };
          var a = u;
          const c = n.viewport;
          return (
            u(),
            c.addEventListener("scroll", u),
            () => c.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? l.createElement(
            g1,
            P({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: c } = n;
                a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  em = "SelectScrollDownButton",
  O6 = l.forwardRef((e, t) => {
    const n = lr(em, e.__scopeSelect),
      r = Fd(em, e.__scopeSelect),
      [o, s] = l.useState(!1),
      i = X(t, r.onScrollButtonChange);
    return (
      je(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const f = c.scrollHeight - c.clientHeight,
              d = Math.ceil(c.scrollTop) < f;
            s(d);
          };
          var a = u;
          const c = n.viewport;
          return (
            u(),
            c.addEventListener("scroll", u),
            () => c.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? l.createElement(
            g1,
            P({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: c } = n;
                a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  g1 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = lr("SelectScrollButton", n),
      i = l.useRef(null),
      a = za(n),
      c = l.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      l.useEffect(() => () => c(), [c]),
      je(() => {
        var u;
        const f = a().find((d) => d.ref.current === document.activeElement);
        f == null ||
          (u = f.ref.current) === null ||
          u === void 0 ||
          u.scrollIntoView({ block: "nearest" });
      }, [a]),
      l.createElement(
        K.div,
        P({ "aria-hidden": !0 }, o, {
          ref: t,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: D(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: D(o.onPointerMove, () => {
            var u;
            (u = s.onItemLeave) === null || u === void 0 || u.call(s),
              i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerLeave: D(o.onPointerLeave, () => {
            c();
          }),
        })
      )
    );
  }),
  j6 = l.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return l.createElement(K.div, P({ "aria-hidden": !0 }, r, { ref: t }));
  });
function v1(e) {
  return e === "" || e === void 0;
}
const y1 = l.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = l.useRef(null),
    s = X(t, o),
    i = Ma(n);
  return (
    l.useEffect(() => {
      const a = o.current,
        c = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(c, "value").set;
      if (i !== n && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(d);
      }
    }, [i, n]),
    l.createElement(
      Id,
      { asChild: !0 },
      l.createElement("select", P({}, r, { ref: s, defaultValue: n }))
    )
  );
});
y1.displayName = "BubbleSelect";
function x1(e) {
  const t = De(e),
    n = l.useRef(""),
    r = l.useRef(0),
    o = l.useCallback(
      (i) => {
        const a = n.current + i;
        t(a),
          (function c(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
          })(a);
      },
      [t]
    ),
    s = l.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function w1(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = D6(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function D6(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const A6 = u6,
  b1 = f6,
  M6 = m6,
  I6 = h6,
  L6 = g6,
  $1 = v6,
  F6 = b6,
  S1 = C6,
  E1 = P6,
  z6 = _6,
  B6 = N6,
  C1 = T6,
  R1 = O6,
  P1 = j6,
  U6 = A6,
  V6 = M6,
  _1 = l.forwardRef(({ className: e, children: t, ...n }, r) =>
    p.jsxs(b1, {
      ref: r,
      className: W(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        p.jsx(I6, {
          asChild: !0,
          children: p.jsx(sC, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
_1.displayName = b1.displayName;
const k1 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(C1, {
    ref: n,
    className: W("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: p.jsx(fC, {}),
  })
);
k1.displayName = C1.displayName;
const N1 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(R1, {
    ref: n,
    className: W("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: p.jsx(lC, {}),
  })
);
N1.displayName = R1.displayName;
const T1 = l.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    p.jsx(L6, {
      children: p.jsxs($1, {
        ref: o,
        className: W(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          p.jsx(k1, {}),
          p.jsx(F6, {
            className: W(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          p.jsx(N1, {}),
        ],
      }),
    })
);
T1.displayName = $1.displayName;
const H6 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(S1, {
    ref: n,
    className: W("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  })
);
H6.displayName = S1.displayName;
const Bn = l.forwardRef(({ className: e, children: t, ...n }, r) =>
  p.jsxs(E1, {
    ref: r,
    className: W(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      p.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: p.jsx(B6, { children: p.jsx(pd, { className: "h-4 w-4" }) }),
      }),
      p.jsx(z6, { children: t }),
    ],
  })
);
Bn.displayName = E1.displayName;
const W6 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(P1, { ref: n, className: W("-mx-1 my-1 h-px bg-muted", e), ...t })
);
W6.displayName = P1.displayName;
function K6({ fontFamily: e, setFontFamily: t }) {
  return p.jsxs("div", {
    role: "presentation",
    className: "flex items-center justify-between mt-4",
    children: [
      p.jsx("p", {
        className: "text-sm self-center text-muted-foreground ",
        children: "Font family",
      }),
      p.jsxs(U6, {
        onValueChange: t,
        defaultValue: e,
        children: [
          p.jsx(_1, {
            className: " w-[140px]",
            children: p.jsx(V6, { placeholder: "Theme" }),
          }),
          p.jsxs(T1, {
            children: [
              p.jsx(Bn, { value: "Inter", children: "Inter" }),
              p.jsx(Bn, { value: "Montserrat", children: "Montserrat" }),
              p.jsx(Bn, { value: "Poppins", children: "Poppins" }),
              p.jsx(Bn, { value: "Roboto Serif", children: "Roboto Serif" }),
              p.jsx(Bn, { value: "Georgia", children: "Georgia" }),
              p.jsx(Bn, {
                value: "Playfair Display",
                children: "Playfair Display",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function G6({ letterSpacing: e, setLetterSpacing: t }) {
  const [n, r] = l.useState(e),
    o = (s) => {
      r(s), t(s);
    };
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col items-start mt-4 relative",
    children: [
      p.jsx($t, {
        htmlFor: "letterSpacing",
        className: "text-sm text-muted-foreground mb-4",
        children: "Letter Spacing",
      }),
      p.jsx(Dt, {
        "aria-label": "Letter Spacing" + n + "pixels",
        defaultValue: [n],
        onValueChange: (s) => o(s[0]),
        min: 0,
        max: 5,
        step: 0.1,
        id: "letterSpacing",
      }),
      p.jsxs("span", {
        "aria-label": "Current Letter Spacing",
        className:
          "absolute top-0 right-0 text-sm text-muted-foreground mr-2 mt-1",
        children: [n, " px"],
      }),
    ],
  });
}
function Ba() {
  const [e, t] = l.useState([window.innerWidth, window.innerHeight]);
  return (
    l.useEffect(() => {
      function n() {
        t([window.innerWidth, window.innerHeight]);
      }
      return (
        window.addEventListener("resize", n),
        () => window.removeEventListener("resize", n)
      );
    }, []),
    e
  );
}
function Y6({
  wordsCount: e,
  charactersCount: t,
  textSize: n,
  setTextSize: r,
  fontFamily: o,
  setFontFamily: s,
  lineSpacing: i,
  setLineSpacing: a,
  letterSpacing: c,
  setLetterSpacing: u,
}) {
  const d = Ba()[0] > 768 ? "right" : "bottom";
  return p.jsxs(n1, {
    children: [
      p.jsx(r1, { children: p.jsx(G2, {}) }),
      p.jsxs(Ad, {
        side: d,
        children: [
          p.jsxs(No, {
            children: [
              p.jsx(To, {
                className:
                  "flex text-xl font-semibold tracking-tight border-b scroll-m-20",
                children: "Stats",
              }),
              p.jsx(Yn, {
                children: p.jsx(O5, { wordsCount: e, charactersCount: t }),
              }),
            ],
          }),
          p.jsxs(No, {
            children: [
              p.jsx(To, {
                className:
                  "flex text-xl font-semibold tracking-tight border-b scroll-m-20 mt-4",
                children: "Theme",
              }),
              p.jsx(Yn, { children: p.jsx(t1, {}) }),
            ],
          }),
          p.jsxs(No, {
            children: [
              p.jsx(To, {
                className:
                  "flex mt-4 text-xl font-semibold tracking-tight border-b scroll-m-20",
                children: "Typography",
              }),
              p.jsxs(Yn, {
                children: [
                  p.jsx(n6, { textSize: n, setTextSize: r }),
                  p.jsx(K6, { fontFamily: o, setFontFamily: s }),
                  p.jsx(r6, { lineSpacing: i, setLineSpacing: a }),
                  p.jsx(G6, { letterSpacing: c, setLetterSpacing: u }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const O1 = "Switch",
  [Q6, m7] = He(O1),
  [X6, q6] = Q6(O1),
  J6 = l.forwardRef((e, t) => {
    const {
        __scopeSwitch: n,
        name: r,
        checked: o,
        defaultChecked: s,
        required: i,
        disabled: a,
        value: c = "on",
        onCheckedChange: u,
        ...f
      } = e,
      [d, h] = l.useState(null),
      x = X(t, (m) => h(m)),
      v = l.useRef(!1),
      g = d ? !!d.closest("form") : !0,
      [b = !1, y] = At({ prop: o, defaultProp: s, onChange: u });
    return l.createElement(
      X6,
      { scope: n, checked: b, disabled: a },
      l.createElement(
        K.button,
        P(
          {
            type: "button",
            role: "switch",
            "aria-checked": b,
            "aria-required": i,
            "data-state": j1(b),
            "data-disabled": a ? "" : void 0,
            disabled: a,
            value: c,
          },
          f,
          {
            ref: x,
            onClick: D(e.onClick, (m) => {
              y((w) => !w),
                g &&
                  ((v.current = m.isPropagationStopped()),
                  v.current || m.stopPropagation());
            }),
          }
        )
      ),
      g &&
        l.createElement(t8, {
          control: d,
          bubbles: !v.current,
          name: r,
          value: c,
          checked: b,
          required: i,
          disabled: a,
          style: { transform: "translateX(-100%)" },
        })
    );
  }),
  Z6 = "SwitchThumb",
  e8 = l.forwardRef((e, t) => {
    const { __scopeSwitch: n, ...r } = e,
      o = q6(Z6, n);
    return l.createElement(
      K.span,
      P(
        {
          "data-state": j1(o.checked),
          "data-disabled": o.disabled ? "" : void 0,
        },
        r,
        { ref: t }
      )
    );
  }),
  t8 = (e) => {
    const { control: t, checked: n, bubbles: r = !0, ...o } = e,
      s = l.useRef(null),
      i = Ma(n),
      a = Oa(t);
    return (
      l.useEffect(() => {
        const c = s.current,
          u = window.HTMLInputElement.prototype,
          d = Object.getOwnPropertyDescriptor(u, "checked").set;
        if (i !== n && d) {
          const h = new Event("click", { bubbles: r });
          d.call(c, n), c.dispatchEvent(h);
        }
      }, [i, n, r]),
      l.createElement(
        "input",
        P({ type: "checkbox", "aria-hidden": !0, defaultChecked: n }, o, {
          tabIndex: -1,
          ref: s,
          style: {
            ...e.style,
            ...a,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      )
    );
  };
function j1(e) {
  return e ? "checked" : "unchecked";
}
const D1 = J6,
  n8 = e8,
  Ss = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(D1, {
      className: W(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        e
      ),
      ...t,
      ref: n,
      children: p.jsx(n8, {
        className: W(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        ),
      }),
    })
  );
Ss.displayName = D1.displayName;
let Tl;
const A1 = "HoverCard",
  [M1, h7] = He(A1, [to]),
  zd = to(),
  [r8, Bd] = M1(A1),
  o8 = (e) => {
    const {
        __scopeHoverCard: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        openDelay: i = 700,
        closeDelay: a = 300,
      } = e,
      c = zd(t),
      u = l.useRef(0),
      f = l.useRef(0),
      d = l.useRef(!1),
      h = l.useRef(!1),
      [x = !1, v] = At({ prop: r, defaultProp: o, onChange: s }),
      g = l.useCallback(() => {
        clearTimeout(f.current),
          (u.current = window.setTimeout(() => v(!0), i));
      }, [i, v]),
      b = l.useCallback(() => {
        clearTimeout(u.current),
          !d.current &&
            !h.current &&
            (f.current = window.setTimeout(() => v(!1), a));
      }, [a, v]),
      y = l.useCallback(() => v(!1), [v]);
    return (
      l.useEffect(
        () => () => {
          clearTimeout(u.current), clearTimeout(f.current);
        },
        []
      ),
      l.createElement(
        r8,
        {
          scope: t,
          open: x,
          onOpenChange: v,
          onOpen: g,
          onClose: b,
          onDismiss: y,
          hasSelectionRef: d,
          isPointerDownOnContentRef: h,
        },
        l.createElement(bd, c, n)
      )
    );
  },
  s8 = "HoverCardTrigger",
  i8 = l.forwardRef((e, t) => {
    const { __scopeHoverCard: n, ...r } = e,
      o = Bd(s8, n),
      s = zd(n);
    return l.createElement(
      $d,
      P({ asChild: !0 }, s),
      l.createElement(
        K.a,
        P({ "data-state": o.open ? "open" : "closed" }, r, {
          ref: t,
          onPointerEnter: D(e.onPointerEnter, ea(o.onOpen)),
          onPointerLeave: D(e.onPointerLeave, ea(o.onClose)),
          onFocus: D(e.onFocus, o.onOpen),
          onBlur: D(e.onBlur, o.onClose),
          onTouchStart: D(e.onTouchStart, (i) => i.preventDefault()),
        })
      )
    );
  }),
  a8 = "HoverCardPortal",
  [g7, l8] = M1(a8, { forceMount: void 0 }),
  Yc = "HoverCardContent",
  c8 = l.forwardRef((e, t) => {
    const n = l8(Yc, e.__scopeHoverCard),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Bd(Yc, e.__scopeHoverCard);
    return l.createElement(
      Ct,
      { present: r || s.open },
      l.createElement(
        u8,
        P({ "data-state": s.open ? "open" : "closed" }, o, {
          onPointerEnter: D(e.onPointerEnter, ea(s.onOpen)),
          onPointerLeave: D(e.onPointerLeave, ea(s.onClose)),
          ref: t,
        })
      )
    );
  }),
  u8 = l.forwardRef((e, t) => {
    const {
        __scopeHoverCard: n,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        ...a
      } = e,
      c = Bd(Yc, n),
      u = zd(n),
      f = l.useRef(null),
      d = X(t, f),
      [h, x] = l.useState(!1);
    return (
      l.useEffect(() => {
        if (h) {
          const v = document.body;
          return (
            (Tl = v.style.userSelect || v.style.webkitUserSelect),
            (v.style.userSelect = "none"),
            (v.style.webkitUserSelect = "none"),
            () => {
              (v.style.userSelect = Tl), (v.style.webkitUserSelect = Tl);
            }
          );
        }
      }, [h]),
      l.useEffect(() => {
        if (f.current) {
          const v = () => {
            x(!1),
              (c.isPointerDownOnContentRef.current = !1),
              setTimeout(() => {
                var g;
                ((g = document.getSelection()) === null || g === void 0
                  ? void 0
                  : g.toString()) !== "" && (c.hasSelectionRef.current = !0);
              });
          };
          return (
            document.addEventListener("pointerup", v),
            () => {
              document.removeEventListener("pointerup", v),
                (c.hasSelectionRef.current = !1),
                (c.isPointerDownOnContentRef.current = !1);
            }
          );
        }
      }, [c.isPointerDownOnContentRef, c.hasSelectionRef]),
      l.useEffect(() => {
        f.current &&
          d8(f.current).forEach((g) => g.setAttribute("tabindex", "-1"));
      }),
      l.createElement(
        fs,
        {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onInteractOutside: i,
          onEscapeKeyDown: r,
          onPointerDownOutside: o,
          onFocusOutside: D(s, (v) => {
            v.preventDefault();
          }),
          onDismiss: c.onDismiss,
        },
        l.createElement(
          Sd,
          P({}, u, a, {
            onPointerDown: D(a.onPointerDown, (v) => {
              v.currentTarget.contains(v.target) && x(!0),
                (c.hasSelectionRef.current = !1),
                (c.isPointerDownOnContentRef.current = !0);
            }),
            ref: d,
            style: {
              ...a.style,
              userSelect: h ? "text" : void 0,
              WebkitUserSelect: h ? "text" : void 0,
              "--radix-hover-card-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          })
        )
      )
    );
  });
function ea(e) {
  return (t) => (t.pointerType === "touch" ? void 0 : e());
}
function d8(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) =>
        r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
const f8 = o8,
  p8 = i8,
  I1 = c8,
  m8 = f8,
  h8 = p8,
  L1 = l.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) =>
      p.jsx(I1, {
        ref: o,
        align: t,
        sideOffset: n,
        className: W(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          e
        ),
        ...r,
      })
  );
L1.displayName = I1.displayName;
function Es({ icon: e, title: t, description: n }) {
  return p.jsxs(m8, {
    children: [
      p.jsx(h8, { asChild: !0, children: e }),
      p.jsx(L1, {
        children: p.jsxs("div", {
          className: "space-y-1 ",
          children: [
            p.jsx("h4", { className: "text-sm font-semibold", children: t }),
            p.jsx("p", { className: "text-sm", children: n }),
          ],
        }),
      }),
    ],
  });
}
function g8({
  peripheralVision: e,
  setPeripheralVision: t,
  leftMargin: n,
  setLeftMargin: r,
  rightMargin: o,
  setRightMargin: s,
  peripheralOpacity: i,
  setPeripheralOpacity: a,
}) {
  const u = Ba()[0] > 768;
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col p-3 mt-4 border rounded-lg shadow-sm ",
    children: [
      p.jsxs("div", {
        role: "presentation",
        className: "flex flex-row items-center justify-between ",
        children: [
          p.jsxs("div", {
            role: "presentation",
            className: "flex items-center",
            children: [
              p.jsx("h2", { children: "Peripheral Vision" }),
              p.jsx(Es, {
                icon: p.jsx(vs, { className: "w-4 h-4 ml-2 cursor-help" }),
                title: "Peripheral Vision",
                description:
                  "Peripheral Vision is a technique that allows you to read faster by using your peripheral vision to read the text.",
              }),
            ],
          }),
          p.jsx(Ss, { onCheckedChange: t, checked: e }),
        ],
      }),
      e &&
        p.jsxs("div", {
          className: "mb-4",
          children: [
            p.jsxs("div", {
              role: "presentation",
              className: "relative mt-4 ",
              children: [
                p.jsx($t, {
                  htmlFor: "leftMargin",
                  className: "flex mb-4 text-sm text-muted-foreground",
                  children: "Left Margin",
                }),
                p.jsx(Dt, {
                  className: "mt-4",
                  "aria-label": "Left Margin" + n + "px",
                  defaultValue: [n],
                  onValueChange: (f) => r(f[0]),
                  min: u ? 60 : 30,
                  max: u ? 180 : 100,
                  step: 1,
                  id: "leftMargin",
                }),
                p.jsxs("span", {
                  "aria-label": "Current Margin",
                  className:
                    "absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground",
                  children: [n, " px"],
                }),
              ],
            }),
            p.jsxs("div", {
              role: "presentation",
              className: "relative ",
              children: [
                p.jsx($t, {
                  htmlFor: "rightMargin",
                  className: "flex mt-4 mb-4 text-sm text-muted-foreground",
                  children: "Right Margin",
                }),
                p.jsx(Dt, {
                  className: "",
                  "aria-label": "Right Margin" + o + "px",
                  defaultValue: [o],
                  onValueChange: (f) => s(f[0]),
                  min: u ? 60 : 30,
                  max: u ? 180 : 100,
                  step: 5,
                  id: "rightMargin",
                }),
                p.jsxs("span", {
                  "aria-label": "Current Margin",
                  className:
                    "absolute top-0 right-0 mr-2 text-sm text-muted-foreground",
                  children: [o, " px"],
                }),
              ],
            }),
            p.jsxs("div", {
              role: "presentation",
              className: "relative ",
              children: [
                p.jsxs($t, {
                  htmlFor: "opacity",
                  className: "flex mt-4 mb-4 text-sm text-muted-foreground",
                  children: [
                    "Opacity ",
                    p.jsx(U0, { className: "w-4 h-4 ml-2" }),
                  ],
                }),
                p.jsx(Dt, {
                  "aria-label": "Opacity" + i + "%",
                  defaultValue: [i],
                  onValueChange: (f) => a(f[0]),
                  min: 0,
                  max: 1,
                  step: 0.1,
                  id: "opacity",
                }),
                p.jsxs("span", {
                  "aria-label": "Current Opacity",
                  className:
                    "absolute top-0 right-0 mr-2 text-sm text-muted-foreground",
                  children: [i, " %"],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function v8({
  setBoldedWords: e,
  boldedWords: t,
  fixation: n,
  setFixation: r,
}) {
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col p-3 mt-4 border rounded-lg shadow-sm ",
    children: [
      p.jsxs("div", {
        role: "presentation",
        className: "flex flex-row items-center justify-between ",
        children: [
          p.jsxs("div", {
            role: "presentation",
            className: "flex items-center",
            children: [
              p.jsx("h2", { children: "Bionic Reading" }),
              p.jsx(Es, {
                icon: p.jsx(vs, { className: "w-4 h-4 ml-2 cursor-help" }),
                title: "Bionic Reading",
                description:
                  "Bionic Reading is a technique that allows you to read faster by bolding the first characters of a text.",
              }),
            ],
          }),
          p.jsx(Ss, { onCheckedChange: e, checked: t }),
        ],
      }),
      t &&
        p.jsxs("div", {
          role: "presentation",
          className: "relative mt-4",
          children: [
            p.jsx($t, {
              htmlFor: "fixation",
              className: "flex mb-4 text-sm text-muted-foreground",
              children: "Fixation",
            }),
            p.jsx(Dt, {
              className: "mt-4",
              "aria-label": "Fixation" + n,
              defaultValue: [n],
              onValueChange: (o) => r(o[0]),
              min: 3,
              max: 11,
              step: 1,
              id: "fixation",
            }),
            p.jsx("span", {
              "aria-label": "Current Fixation",
              className:
                "absolute top-0 right-0 mt-1 mr-2 text-sm text-muted-foreground",
              children: n,
            }),
          ],
        }),
    ],
  });
}
function y8({ pacerColour: e, setPacerColour: t }) {
  return p.jsx("div", {
    className: "flex",
    children: p.jsxs(Dd, {
      className: "flex items-center mx-auto gjustify-between  ",
      defaultValue: e,
      onValueChange: t,
      children: [
        p.jsx(Ut, {
          className: "w-5 h-5 border-foreground",
          style: { backgroundColor: "#ffacb8" },
          value: "#ffacb8",
          id: "option-one",
        }),
        p.jsx(Ut, {
          className: "w-5 h-5 border-foreground",
          style: { backgroundColor: "#ade1c3" },
          value: "#ade1c3",
          id: "option-two",
        }),
        p.jsx(Ut, {
          className: "w-5 h-5 border-foreground",
          style: { backgroundColor: "#ffd2a4" },
          value: "#ffd2a4",
          id: "option-two",
        }),
        p.jsx(Ut, {
          className: "w-5 h-5 border-foreground",
          style: { backgroundColor: "#b8b7ee" },
          value: "#b8b7ee",
          id: "option-two",
        }),
        p.jsx(Ut, {
          className: "w-5 h-5 border-foreground",
          style: { backgroundColor: "#cfcfd1" },
          value: "#cfcfd1",
          id: "option-two",
        }),
      ],
    }),
  });
}
function x8({ wordChunking: e, setWordChunking: t }) {
  return p.jsxs("div", {
    role: "presentation",
    className: "relative flex flex-col items-start  mt-4",
    children: [
      p.jsxs("div", {
        className: "flex ",
        children: [
          p.jsx($t, {
            htmlFor: "wordChunking",
            className: "mb-4 text-sm text-muted-foreground",
            children: "Word Chunking",
          }),
          p.jsx(Es, {
            icon: p.jsx(vs, {
              className: "w-4 h-4 ml-2 cursor-help mt-[2px] ",
            }),
            title: "Word Chunking",
            description:
              "Words chunking is a technique that involves grouping words together to read them in chunks. This can help to reduce subvocalization and increase reading speed. The number of words in each chunk can be adjusted to suit the reader's preference.",
          }),
        ],
      }),
      p.jsx(Dt, {
        "aria-label": e + "words",
        defaultValue: [e],
        onValueChange: (n) => t(n[0]),
        min: 1,
        max: 10,
        step: 1,
        id: "wordChunking",
      }),
      p.jsxs("span", {
        "aria-label": "Current number of words chunking",
        className:
          "absolute top-0 right-0  mr-2  text-sm text-muted-foreground",
        children: [e, " words"],
      }),
    ],
  });
}
function w8({
  stopRegression: e,
  setStopRegression: t,
  regressionOpacity: n,
  setRegressionOpacity: r,
}) {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsxs("div", {
        role: "presentation",
        className: "flex flex-row items-center justify-between mt-4",
        children: [
          p.jsxs("div", {
            role: "presentation",
            className: "flex items-center",
            children: [
              p.jsx("h2", { children: "Stop Regression" }),
              p.jsx(Es, {
                icon: p.jsx(vs, { className: "w-4 h-4 ml-2 cursor-help" }),
                title: "Stopping Regression",
                description:
                  "Regression is the act of re-reading words or phrases. This can slow down reading speed. By enabling stop regression, the reader can focus on moving forward and avoid re-reading words. This can help to increase reading speed.",
              }),
            ],
          }),
          p.jsx(Ss, { onCheckedChange: t, checked: e }),
        ],
      }),
      e &&
        p.jsxs("div", {
          role: "presentation",
          className: "relative flex flex-col items-start  mt-4",
          children: [
            p.jsxs($t, {
              htmlFor: "regressionOpacity",
              className: " flex mb-4 text-sm text-muted-foreground",
              children: ["Opacity ", p.jsx(U0, { className: "w-4 h-4 ml-2" })],
            }),
            p.jsx(Dt, {
              "aria-label": "Regression Opacity" + n + "%",
              defaultValue: [n],
              onValueChange: (o) => r(o[0]),
              min: 0,
              max: 1,
              step: 0.1,
              id: "stopRegression",
            }),
            p.jsxs("span", {
              "aria-label": "Current regression opacity",
              className:
                "absolute top-0 right-0  mr-2  text-sm text-muted-foreground",
              children: [n, " %"],
            }),
          ],
        }),
    ],
  });
}
function b8({
  pacingTechnique: e,
  setPacingTechnique: t,
  pacerColour: n,
  setPacerColour: r,
  wordChunking: o,
  setWordChunking: s,
  stopRegression: i,
  setStopRegression: a,
  regressionOpacity: c,
  setRegressionOpacity: u,
}) {
  return p.jsxs("div", {
    role: "presentation",
    className: "flex flex-col p-3 mt-4 border rounded-lg shadow-sm ",
    children: [
      p.jsxs("div", {
        role: "presentation",
        className: "flex flex-row items-center justify-between ",
        children: [
          p.jsxs("div", {
            role: "presentation",
            className: "flex items-center",
            children: [
              p.jsx("h2", { children: "Pacing Technique" }),
              p.jsx(Es, {
                icon: p.jsx(vs, { className: "w-4 h-4 ml-2 cursor-help" }),
                title: "Pacing Technique",
                description:
                  "Pacing technique is a method of speed reading that uses a visual aid to pace the reader. This can be a pen, finger, or a pointer. The reader follows the visual aid across the page, which helps to reduce subvocalization and increase reading speed.",
              }),
            ],
          }),
          p.jsx(Ss, { onCheckedChange: t, checked: e }),
        ],
      }),
      e &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsxs("div", {
              role: "presentation",
              className: "relative flex justify-between mt-4",
              children: [
                p.jsx($t, {
                  htmlFor: "pacerColour",
                  className: "flex text-sm text-muted-foreground",
                  children: "Pacer Colour",
                }),
                p.jsx(y8, {
                  "aria-label": "colour" + n + "selected",
                  pacerColour: n,
                  setPacerColour: r,
                }),
              ],
            }),
            p.jsx(x8, { wordChunking: o, setWordChunking: s }),
            p.jsx(w8, {
              stopRegression: i,
              setStopRegression: a,
              regressionOpacity: c,
              setRegressionOpacity: u,
            }),
          ],
        }),
    ],
  });
}
function $8({
  boldedWords: e,
  setBoldedWords: t,
  fixation: n,
  setFixation: r,
  peripheralVision: o,
  setPeripheralVision: s,
  leftMargin: i,
  setLeftMargin: a,
  rightMargin: c,
  setRightMargin: u,
  peripheralOpacity: f,
  setPeripheralOpacity: d,
  pacingTechnique: h,
  setPacingTechnique: x,
  pacerColour: v,
  setPacerColour: g,
  wordChunking: b,
  setWordChunking: y,
  stopRegression: m,
  setStopRegression: w,
  regressionOpacity: $,
  setRegressionOpacity: S,
}) {
  const E = Ba()[0] > 768 ? "left" : "bottom";
  return p.jsxs(n1, {
    children: [
      p.jsx(r1, { children: p.jsx(W2, {}) }),
      p.jsx(Ad, {
        className: "",
        side: E,
        children: p.jsxs(No, {
          children: [
            p.jsx(To, {
              className:
                "flex mt-4 text-xl font-semibold tracking-tight border-b scroll-m-20",
              children: "Speed Reading techniques",
            }),
            p.jsx(Yn, {
              children: p.jsx(b8, {
                pacingTechnique: h,
                setPacingTechnique: x,
                pacerColour: v,
                setPacerColour: g,
                wordChunking: b,
                setWordChunking: y,
                stopRegression: m,
                setStopRegression: w,
                regressionOpacity: $,
                setRegressionOpacity: S,
              }),
            }),
            p.jsx(Yn, {
              children: p.jsx(v8, {
                setBoldedWords: t,
                boldedWords: e,
                fixation: n,
                setFixation: r,
              }),
            }),
            p.jsx(Yn, {
              children: p.jsx(g8, {
                peripheralVision: o,
                setPeripheralVision: s,
                leftMargin: i,
                setLeftMargin: a,
                rightMargin: c,
                setRightMargin: u,
                peripheralOpacity: f,
                setPeripheralOpacity: d,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function S8({ textPageColour: e, setTextPageColour: t }) {
  return p.jsx("div", {
    className: "",
    children: p.jsxs(Nd, {
      children: [
        p.jsx(Td, {
          asChild: !0,
          children: p.jsx(Y2, { className: "cursor-pointer" }),
        }),
        p.jsxs(Aa, {
          className: "",
          children: [
            p.jsx(Od, { children: "Page Colour" }),
            p.jsx(jd, {}),
            p.jsxs(X4, {
              className:
                "flex flex-row items-center justify-between mr-4 md:flex-col md:items-start md:mr-0 lg:mr-0 lg:flex-col lg:items-start",
              value: e,
              onValueChange: t,
              children: [
                p.jsx(hr, {
                  value: "pageColourDefault",
                  children: p.jsx("div", {
                    className:
                      "w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColourDefault ",
                  }),
                }),
                p.jsx(hr, {
                  value: "pageColour1",
                  children: p.jsx("div", {
                    className:
                      "w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour1 ",
                  }),
                }),
                p.jsx(hr, {
                  value: "pageColour2",
                  children: p.jsx("div", {
                    className:
                      "w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour2 ",
                  }),
                }),
                p.jsx(hr, {
                  value: "pageColour3",
                  children: p.jsx("div", {
                    className:
                      "w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour3 ",
                  }),
                }),
                p.jsx(hr, {
                  value: "pageColour4",
                  children: p.jsx("div", {
                    className:
                      "w-5 h-5 border border-foreground rounded-full bg-textPageColours-pageColour4 ",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function E8(e, t) {
  return e.split(" ").map(function (o, s) {
    return o.length >= t
      ? p.jsxs(p.Fragment, {
          children: [
            p.jsx(
              "span",
              { style: { fontWeight: "bold" }, children: o.slice(0, t - 1) },
              s
            ),
            o.slice(t - 1),
            " ",
          ],
        })
      : o.length >= 5
      ? p.jsxs(p.Fragment, {
          children: [
            p.jsx(
              "span",
              { style: { fontWeight: "bold" }, children: o.slice(0, t - 4) },
              s
            ),
            o.slice(t - 4),
            " ",
          ],
        })
      : o.length >= 3
      ? p.jsxs(p.Fragment, {
          children: [
            p.jsx(
              "span",
              { style: { fontWeight: "bold" }, children: o.slice(0, t - 5) },
              s
            ),
            o.slice(t - 5),
            " ",
          ],
        })
      : o.length === 1
      ? p.jsxs(p.Fragment, {
          children: [
            p.jsx(
              "span",
              { style: { fontWeight: "bold" }, children: o.slice(0, 1) },
              s
            ),
            o.slice(1),
            " ",
          ],
        })
      : o + " ";
  });
}
function C8({ wordsCount: e, setHighlightIndex: t, wordChunking: n }) {
  const [r, o] = l.useState(!1),
    [s, i] = l.useState(400),
    a = l.useRef(null);
  l.useEffect(
    () => (
      r &&
        (clearInterval(a.current),
        (a.current = setInterval(() => {
          t((v) => (v + n) % e);
        }, s))),
      () => clearInterval(a.current)
    ),
    [r, t, s, e, n]
  );
  const c = () => {
      r || o(!0);
    },
    u = () => {
      r && o(!1);
    },
    f = () => {
      t((v) => v + n);
    },
    d = () => {
      t((v) => v - n);
    },
    h = () => {
      i((v) => v - 30);
    },
    x = () => {
      i((v) => v + 30);
    };
  return p.jsx("div", {
    className:
      "fixed w-48 h-12 -translate-x-1/2 rounded jus bottom-5 left-1/2 bg-primary text-primary-foreground",
    children: p.jsxs("div", {
      className: "flex items-center justify-center h-full gap-2 ",
      children: [
        p.jsx(K2, { className: "cursor-pointer ", onClick: x }),
        p.jsx(J2, { className: "cursor-pointer", onClick: d }),
        r
          ? p.jsx(Q2, { className: "cursor-pointer", onClick: u })
          : p.jsx(X2, { className: "cursor-pointer", onClick: c }),
        p.jsx(Z2, { className: "cursor-pointer", onClick: f }),
        p.jsx(q2, { className: "cursor-pointer", onClick: h }),
      ],
    }),
  });
}
function tm({ marginSide: e, peripheralOpacity: t, className: n }) {
  return p.jsx("div", {
    style: { width: `${e}px`, opacity: `${t}` },
    className: n,
  });
}
function R8() {
  return p.jsx("div", {
    className: "cursor-pointer",
    children: p.jsxs(Nd, {
      children: [
        p.jsx(Td, {
          asChild: !0,
          children: p.jsx("small", {
            className: "text-sm font-medium leading-none",
            children: "Questionnaires",
          }),
        }),
        p.jsx(Aa, {
          className: "mx-4 p-2 ",
          children: p.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              p.jsx("a", {
                className: "w-full p-1 hover:bg-border rounded-sm",
                href: "https://forms.office.com/e/tNLzCS1mmj",
                target: "_blank",
                children: "Test 1",
              }),
              p.jsx("a", {
                className: "w-full p-1 hover:bg-border rounded-sm",
                href: "https://forms.office.com/e/8ZjhGT9z0c",
                target: "_blank",
                children: "Test 2",
              }),
              p.jsx("a", {
                href: "https://forms.office.com/e/m0w0E1LHzX",
                target: "_blank",
                className: "w-full p-1 hover:bg-border rounded-sm",
                children: "Usability",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function P8() {
  const { id: e } = ab(),
    t = ds(),
    n = t == null ? void 0 : t.user,
    r = Ba(),
    [o, s] = l.useState(""),
    [i, a] = l.useState(""),
    [c, u] = l.useState(!1),
    [f, d] = l.useState(""),
    [h, x] = l.useState(16),
    [v, g] = l.useState("Inter"),
    [b, y] = l.useState(24),
    [m, w] = l.useState(0),
    [$, S] = l.useState("pageColourDefault"),
    [C, E] = l.useState("#ffacb8"),
    [R, L] = l.useState(!1),
    [M, H] = l.useState(7),
    [j, Y] = l.useState(!1),
    [N, I] = l.useState(r[0] > 768 ? 120 : 80),
    [V, B] = l.useState(r[0] > 768 ? 120 : 80),
    [T, _] = l.useState(0.5),
    [A, z] = l.useState(0),
    [G, fe] = l.useState(!1),
    [ie, Pe] = l.useState(1),
    [ae, U] = l.useState(!1),
    [ee, re] = l.useState(0.5),
    te = o == null ? void 0 : o.split(" ").length,
    oe = o == null ? void 0 : o.trim().length,
    ne =
      $ === "pageColour1" ||
      $ === "pageColour2" ||
      $ === "pageColour3" ||
      $ === "pageColour4"
        ? { color: "#000000" }
        : {};
  l.useEffect(() => {
    async function be() {
      try {
        u(!0), d("");
        const me = await fetch(
          `https://readify-xbps.onrender.com0/documents/${e}`,
          { credentials: "include" }
        );
        if (!me.ok)
          throw new Error("Something went wrong with fetching docments");
        const st = await me.json();
        if (st.Response === "False") throw new Error("Document not found");
        a(st.title), s(st.text), u(!1);
      } catch (me) {
        console.log(me),
          d(
            n
              ? "Something went wrong , failed to load Documents."
              : "You must login first"
          );
      } finally {
        u(!1);
      }
    }
    be();
  }, [e, n]);
  function Fe(be, me, st) {
    return be
      .split(" ")
      .map((ro, on) =>
        on >= me && on < me + st
          ? p.jsxs(
              "span",
              {
                className: "",
                style: { backgroundColor: `${C}` },
                children: [ro, " "],
              },
              on
            )
          : on <= me
          ? p.jsxs(
              "span",
              { style: ae ? { opacity: ee } : {}, children: [ro, " "] },
              on
            )
          : p.jsxs("span", { children: [ro, " "] }, on)
      );
  }
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx("header", {
        children: p.jsx("nav", {
          role: "navigation",
          className: "fixed top-0 left-0 z-10 w-full  bg-background ",
          children: p.jsx(V0, {
            children: p.jsxs("div", {
              className: "flex items-center justify-between w-full m-2",
              children: [
                p.jsx("h4", {
                  className:
                    "flex ml-4 text-xl font-semibold tracking-tight scroll-m-20 ",
                  children: p.jsx(ls, {
                    to: "/documents",
                    children: "Readify",
                  }),
                }),
                p.jsxs("div", {
                  className: "flex gap-4 mr-2 lg:gap-8 lg:mr-4",
                  children: [
                    p.jsx(R8, {}),
                    p.jsx(S8, { textPageColour: $, setTextPageColour: S }),
                    p.jsx($8, {
                      setBoldedWords: L,
                      boldedWords: R,
                      fixation: M,
                      setFixation: H,
                      peripheralVision: j,
                      setPeripheralVision: Y,
                      leftMargin: N,
                      setLeftMargin: I,
                      rightMargin: V,
                      setRightMargin: B,
                      peripheralOpacity: T,
                      setPeripheralOpacity: _,
                      pacingTechnique: G,
                      setPacingTechnique: fe,
                      pacerColour: C,
                      setPacerColour: E,
                      wordChunking: ie,
                      setWordChunking: Pe,
                      stopRegression: ae,
                      setStopRegression: U,
                      regressionOpacity: ee,
                      setRegressionOpacity: re,
                    }),
                    p.jsx(Y6, {
                      wordsCount: te,
                      charactersCount: oe,
                      setTextSize: x,
                      textSize: h,
                      fontFamily: v,
                      setFontFamily: g,
                      lineSpacing: b,
                      setLineSpacing: y,
                      letterSpacing: m,
                      setLetterSpacing: w,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      p.jsx("main", {
        children: p.jsxs("section", {
          className: `mx-auto mt-14 rounded-sm shadow-sm h-fit flex flex-col  items-center  overflow-x-hidden  border  lg:w-1/2 lg:mt-32 lg:mb-10 bg-textPageColours-${$} relative z-0 `,
          children: [
            c && p.jsx(rd, {}),
            p.jsx("div", {
              className: "mt-10 mb-5",
              children: p.jsx("h3", {
                style: { ...ne },
                className:
                  "text-2xl font-semibold tracking-tight scroll-m-20 text-center",
                children: i,
              }),
            }),
            p.jsxs("div", {
              className: "w-11/12",
              children: [
                f && p.jsx(Fg, { error: f }),
                p.jsx("p", {
                  style: {
                    fontSize: `${h}px`,
                    fontFamily: `${v} , sans-serif`,
                    lineHeight: `${b}px`,
                    letterSpacing: `${m}px`,
                    ...ne,
                  },
                  className:
                    "indent-8 whitespace-pre-line pb-10 px-6 mx-auto md:max-w-[80ch] text-left lg:max-w-[90ch]  [&:not(:first-child)]:mt-6 text-foreground  ",
                  children: R
                    ? E8(o, M).map((be, me) =>
                        p.jsx(
                          "span",
                          {
                            children:
                              G && me >= A && me < A + ie
                                ? p.jsx("span", {
                                    style: { backgroundColor: `${C}` },
                                    children: be,
                                  })
                                : p.jsx("span", {
                                    style: { opacity: me <= A ? ee : 1 },
                                    children: be,
                                  }),
                          },
                          me
                        )
                      )
                    : G
                    ? Fe(o, A, ie)
                    : o,
                }),
              ],
            }),
            j &&
              p.jsx(tm, {
                marginSide: N,
                peripheralOpacity: T,
                className:
                  "absolute top-0 left-0  h-full border-r-2  border-border  bg-background",
              }),
            j &&
              p.jsx(tm, {
                marginSide: V,
                peripheralOpacity: T,
                className:
                  "absolute top-0 right-0  h-full border-l-2 border-border  bg-background",
              }),
          ],
        }),
      }),
      G &&
        p.jsx(C8, { wordsCount: te, setHighlightIndex: z, wordChunking: ie }),
    ],
  });
}
const F1 = "ToastProvider",
  [Ud, _8, k8] = ys("Toast"),
  [z1, v7] = He("Toast", [k8]),
  [N8, Ua] = z1(F1),
  B1 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [a, c] = l.useState(null),
      [u, f] = l.useState(0),
      d = l.useRef(!1),
      h = l.useRef(!1);
    return l.createElement(
      Ud.Provider,
      { scope: t },
      l.createElement(
        N8,
        {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: a,
          onViewportChange: c,
          onToastAdd: l.useCallback(() => f((x) => x + 1), []),
          onToastRemove: l.useCallback(() => f((x) => x - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: h,
        },
        i
      )
    );
  };
B1.propTypes = {
  label(e) {
    if (e.label && typeof e.label == "string" && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${F1}\`. Expected non-empty \`string\`.`;
      return new Error(t);
    }
    return null;
  },
};
const T8 = "ToastViewport",
  O8 = ["F8"],
  Qc = "toast.viewportPause",
  Xc = "toast.viewportResume",
  j8 = l.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = O8,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = Ua(T8, n),
      a = _8(n),
      c = l.useRef(null),
      u = l.useRef(null),
      f = l.useRef(null),
      d = l.useRef(null),
      h = X(t, d, i.onViewportChange),
      x = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = i.toastCount > 0;
    l.useEffect(() => {
      const b = (y) => {
        var m;
        r.every(($) => y[$] || y.code === $) &&
          ((m = d.current) === null || m === void 0 || m.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      l.useEffect(() => {
        const b = c.current,
          y = d.current;
        if (v && b && y) {
          const m = () => {
              if (!i.isClosePausedRef.current) {
                const C = new CustomEvent(Qc);
                y.dispatchEvent(C), (i.isClosePausedRef.current = !0);
              }
            },
            w = () => {
              if (i.isClosePausedRef.current) {
                const C = new CustomEvent(Xc);
                y.dispatchEvent(C), (i.isClosePausedRef.current = !1);
              }
            },
            $ = (C) => {
              !b.contains(C.relatedTarget) && w();
            },
            S = () => {
              b.contains(document.activeElement) || w();
            };
          return (
            b.addEventListener("focusin", m),
            b.addEventListener("focusout", $),
            b.addEventListener("pointermove", m),
            b.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", w),
            () => {
              b.removeEventListener("focusin", m),
                b.removeEventListener("focusout", $),
                b.removeEventListener("pointermove", m),
                b.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", w);
            }
          );
        }
      }, [v, i.isClosePausedRef]);
    const g = l.useCallback(
      ({ tabbingDirection: b }) => {
        const m = a().map((w) => {
          const $ = w.ref.current,
            S = [$, ...Q8($)];
          return b === "forwards" ? S : S.reverse();
        });
        return (b === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      l.useEffect(() => {
        const b = d.current;
        if (b) {
          const y = (m) => {
            const w = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !w) {
              const R = document.activeElement,
                L = m.shiftKey;
              if (m.target === b && L) {
                var S;
                (S = u.current) === null || S === void 0 || S.focus();
                return;
              }
              const j = g({ tabbingDirection: L ? "backwards" : "forwards" }),
                Y = j.findIndex((N) => N === R);
              if (Ol(j.slice(Y + 1))) m.preventDefault();
              else {
                var C, E;
                L
                  ? (C = u.current) === null || C === void 0 || C.focus()
                  : (E = f.current) === null || E === void 0 || E.focus();
              }
            }
          };
          return (
            b.addEventListener("keydown", y),
            () => b.removeEventListener("keydown", y)
          );
        }
      }, [a, g]),
      l.createElement(
        pE,
        {
          ref: c,
          role: "region",
          "aria-label": o.replace("{hotkey}", x),
          tabIndex: -1,
          style: { pointerEvents: v ? void 0 : "none" },
        },
        v &&
          l.createElement(nm, {
            ref: u,
            onFocusFromOutsideViewport: () => {
              const b = g({ tabbingDirection: "forwards" });
              Ol(b);
            },
          }),
        l.createElement(
          Ud.Slot,
          { scope: n },
          l.createElement(K.ol, P({ tabIndex: -1 }, s, { ref: h }))
        ),
        v &&
          l.createElement(nm, {
            ref: f,
            onFocusFromOutsideViewport: () => {
              const b = g({ tabbingDirection: "backwards" });
              Ol(b);
            },
          })
      )
    );
  }),
  D8 = "ToastFocusProxy",
  nm = l.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Ua(D8, n);
    return l.createElement(
      Id,
      P({ "aria-hidden": !0, tabIndex: 0 }, o, {
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var a;
          const c = i.relatedTarget;
          !((a = s.viewport) !== null && a !== void 0 && a.contains(c)) && r();
        },
      })
    );
  }),
  Va = "Toast",
  A8 = "toast.swipeStart",
  M8 = "toast.swipeMove",
  I8 = "toast.swipeCancel",
  L8 = "toast.swipeEnd",
  F8 = l.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [a = !0, c] = At({ prop: r, defaultProp: o, onChange: s });
    return l.createElement(
      Ct,
      { present: n || a },
      l.createElement(
        U1,
        P({ open: a }, i, {
          ref: t,
          onClose: () => c(!1),
          onPause: De(e.onPause),
          onResume: De(e.onResume),
          onSwipeStart: D(e.onSwipeStart, (u) => {
            u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: D(e.onSwipeMove, (u) => {
            const { x: f, y: d } = u.detail.delta;
            u.currentTarget.setAttribute("data-swipe", "move"),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-x",
                `${f}px`
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-move-y",
                `${d}px`
              );
          }),
          onSwipeCancel: D(e.onSwipeCancel, (u) => {
            u.currentTarget.setAttribute("data-swipe", "cancel"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
              u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: D(e.onSwipeEnd, (u) => {
            const { x: f, y: d } = u.detail.delta;
            u.currentTarget.setAttribute("data-swipe", "end"),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-x"
              ),
              u.currentTarget.style.removeProperty(
                "--radix-toast-swipe-move-y"
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-x",
                `${f}px`
              ),
              u.currentTarget.style.setProperty(
                "--radix-toast-swipe-end-y",
                `${d}px`
              ),
              c(!1);
          }),
        })
      )
    );
  }),
  [z8, B8] = z1(Va, { onClose() {} }),
  U1 = l.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: c,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: d,
        onSwipeCancel: h,
        onSwipeEnd: x,
        ...v
      } = e,
      g = Ua(Va, n),
      [b, y] = l.useState(null),
      m = X(t, (N) => y(N)),
      w = l.useRef(null),
      $ = l.useRef(null),
      S = o || g.duration,
      C = l.useRef(0),
      E = l.useRef(S),
      R = l.useRef(0),
      { onToastAdd: L, onToastRemove: M } = g,
      H = De(() => {
        var N;
        (b == null ? void 0 : b.contains(document.activeElement)) &&
          ((N = g.viewport) === null || N === void 0 || N.focus()),
          i();
      }),
      j = l.useCallback(
        (N) => {
          !N ||
            N === 1 / 0 ||
            (window.clearTimeout(R.current),
            (C.current = new Date().getTime()),
            (R.current = window.setTimeout(H, N)));
        },
        [H]
      );
    l.useEffect(() => {
      const N = g.viewport;
      if (N) {
        const I = () => {
            j(E.current), u == null || u();
          },
          V = () => {
            const B = new Date().getTime() - C.current;
            (E.current = E.current - B),
              window.clearTimeout(R.current),
              c == null || c();
          };
        return (
          N.addEventListener(Qc, V),
          N.addEventListener(Xc, I),
          () => {
            N.removeEventListener(Qc, V), N.removeEventListener(Xc, I);
          }
        );
      }
    }, [g.viewport, S, c, u, j]),
      l.useEffect(() => {
        s && !g.isClosePausedRef.current && j(S);
      }, [s, S, g.isClosePausedRef, j]),
      l.useEffect(() => (L(), () => M()), [L, M]);
    const Y = l.useMemo(() => (b ? K1(b) : null), [b]);
    return g.viewport
      ? l.createElement(
          l.Fragment,
          null,
          Y &&
            l.createElement(
              U8,
              {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
              },
              Y
            ),
          l.createElement(
            z8,
            { scope: n, onClose: H },
            In.createPortal(
              l.createElement(
                Ud.ItemSlot,
                { scope: n },
                l.createElement(
                  fE,
                  {
                    asChild: !0,
                    onEscapeKeyDown: D(a, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || H(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                  },
                  l.createElement(
                    K.li,
                    P(
                      {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                      },
                      v,
                      {
                        ref: m,
                        style: {
                          userSelect: "none",
                          touchAction: "none",
                          ...e.style,
                        },
                        onKeyDown: D(e.onKeyDown, (N) => {
                          N.key === "Escape" &&
                            (a == null || a(N.nativeEvent),
                            N.nativeEvent.defaultPrevented ||
                              ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                              H()));
                        }),
                        onPointerDown: D(e.onPointerDown, (N) => {
                          N.button === 0 &&
                            (w.current = { x: N.clientX, y: N.clientY });
                        }),
                        onPointerMove: D(e.onPointerMove, (N) => {
                          if (!w.current) return;
                          const I = N.clientX - w.current.x,
                            V = N.clientY - w.current.y,
                            B = !!$.current,
                            T = ["left", "right"].includes(g.swipeDirection),
                            _ = ["left", "up"].includes(g.swipeDirection)
                              ? Math.min
                              : Math.max,
                            A = T ? _(0, I) : 0,
                            z = T ? 0 : _(0, V),
                            G = N.pointerType === "touch" ? 10 : 2,
                            fe = { x: A, y: z },
                            ie = { originalEvent: N, delta: fe };
                          B
                            ? (($.current = fe),
                              Js(M8, d, ie, { discrete: !1 }))
                            : rm(fe, g.swipeDirection, G)
                            ? (($.current = fe),
                              Js(A8, f, ie, { discrete: !1 }),
                              N.target.setPointerCapture(N.pointerId))
                            : (Math.abs(I) > G || Math.abs(V) > G) &&
                              (w.current = null);
                        }),
                        onPointerUp: D(e.onPointerUp, (N) => {
                          const I = $.current,
                            V = N.target;
                          if (
                            (V.hasPointerCapture(N.pointerId) &&
                              V.releasePointerCapture(N.pointerId),
                            ($.current = null),
                            (w.current = null),
                            I)
                          ) {
                            const B = N.currentTarget,
                              T = { originalEvent: N, delta: I };
                            rm(I, g.swipeDirection, g.swipeThreshold)
                              ? Js(L8, x, T, { discrete: !0 })
                              : Js(I8, h, T, { discrete: !0 }),
                              B.addEventListener(
                                "click",
                                (_) => _.preventDefault(),
                                { once: !0 }
                              );
                          }
                        }),
                      }
                    )
                  )
                )
              ),
              g.viewport
            )
          )
        )
      : null;
  });
U1.propTypes = {
  type(e) {
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${Va}\`. Expected \`foreground | background\`.`;
      return new Error(t);
    }
    return null;
  },
};
const U8 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ua(Va, t),
      [s, i] = l.useState(!1),
      [a, c] = l.useState(!1);
    return (
      G8(() => i(!0)),
      l.useEffect(() => {
        const u = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : l.createElement(
            Pa,
            { asChild: !0 },
            l.createElement(
              Id,
              r,
              s && l.createElement(l.Fragment, null, o.label, " ", n)
            )
          )
    );
  },
  V8 = l.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return l.createElement(K.div, P({}, r, { ref: t }));
  }),
  H8 = l.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return l.createElement(K.div, P({}, r, { ref: t }));
  }),
  W8 = "ToastAction",
  V1 = l.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n
      ? l.createElement(
          W1,
          { altText: n, asChild: !0 },
          l.createElement(H1, P({}, r, { ref: t }))
        )
      : null;
  });
V1.propTypes = {
  altText(e) {
    return e.altText
      ? null
      : new Error(`Missing prop \`altText\` expected on \`${W8}\``);
  },
};
const K8 = "ToastClose",
  H1 = l.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = B8(K8, n);
    return l.createElement(
      W1,
      { asChild: !0 },
      l.createElement(
        K.button,
        P({ type: "button" }, r, { ref: t, onClick: D(e.onClick, o.onClose) })
      )
    );
  }),
  W1 = l.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return l.createElement(
      K.div,
      P(
        {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
        },
        o,
        { ref: t }
      )
    );
  });
function K1(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Y8(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...K1(r));
      }
    }),
    t
  );
}
function Js(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? od(o, s) : o.dispatchEvent(s);
}
const rm = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function G8(e = () => {}) {
  const t = De(e);
  je(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Y8(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Q8(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ol(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
const X8 = B1,
  G1 = j8,
  Y1 = F8,
  Q1 = V8,
  X1 = H8,
  q1 = V1,
  J1 = H1,
  q8 = X8,
  Z1 = l.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(G1, {
      ref: n,
      className: W(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Z1.displayName = G1.displayName;
const J8 = wa(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  ey = l.forwardRef(({ className: e, variant: t, ...n }, r) =>
    p.jsx(Y1, { ref: r, className: W(J8({ variant: t }), e), ...n })
  );
ey.displayName = Y1.displayName;
const Z8 = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(q1, {
    ref: n,
    className: W(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
Z8.displayName = q1.displayName;
const ty = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(J1, {
    ref: n,
    className: W(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: p.jsx(md, { className: "h-4 w-4" }),
  })
);
ty.displayName = J1.displayName;
const ny = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(Q1, {
    ref: n,
    className: W("text-sm font-semibold [&+div]:text-xs", e),
    ...t,
  })
);
ny.displayName = Q1.displayName;
const ry = l.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(X1, { ref: n, className: W("text-sm opacity-90", e), ...t })
);
ry.displayName = X1.displayName;
function e7() {
  const { toasts: e } = ba();
  return p.jsxs(q8, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return p.jsxs(
          ey,
          {
            ...s,
            children: [
              p.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && p.jsx(ny, { children: n }),
                  r && p.jsx(ry, { children: r }),
                ],
              }),
              o,
              p.jsx(ty, {}),
            ],
          },
          t
        );
      }),
      p.jsx(Z1, {}),
    ],
  });
}
function t7() {
  return p.jsxs("main", {
    className: "flex flex-col items-center justify-center h-screen",
    children: [
      p.jsx("h2", {
        className:
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        children: "Readify",
      }),
      p.jsx("h2", {
        className:
          "scroll-m-20 text-[80px] font-extrabold tracking-tight  text-center",
        children: "404 - Not Found!",
      }),
      p.jsx(ls, { to: "/", children: p.jsx(qt, { children: "Go Home " }) }),
    ],
  });
}
function n7() {
  return p.jsx(p.Fragment, {
    children: p.jsx(u5, {
      defaultTheme: "system",
      storageKey: "vite-ui-theme",
      children: p.jsxs(QS, {
        children: [
          p.jsxs($b, {
            children: [
              p.jsx(mr, { path: "/", element: p.jsx(g$, {}) }),
              p.jsx(mr, { path: "/login", element: p.jsx(P$, {}) }),
              p.jsx(mr, { path: "/documents", element: p.jsx(k5, {}) }),
              p.jsx(mr, { path: "/documents/:id", element: p.jsx(P8, {}) }),
              p.jsx(mr, { path: "*", element: p.jsx(t7, {}) }),
            ],
          }),
          p.jsx(e7, {}),
        ],
      }),
    }),
  });
}
jl.createRoot(document.getElementById("root")).render(
  p.jsx(kb, { children: p.jsx(Ee.StrictMode, { children: p.jsx(n7, {}) }) })
);
