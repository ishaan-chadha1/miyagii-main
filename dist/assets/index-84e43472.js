function Nb(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Mb(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Ov = { exports: {} },
  qc = {},
  Iv = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nl = Symbol.for("react.element"),
  Db = Symbol.for("react.portal"),
  Rb = Symbol.for("react.fragment"),
  Lb = Symbol.for("react.strict_mode"),
  Ob = Symbol.for("react.profiler"),
  Ib = Symbol.for("react.provider"),
  Fb = Symbol.for("react.context"),
  Vb = Symbol.for("react.forward_ref"),
  zb = Symbol.for("react.suspense"),
  Bb = Symbol.for("react.memo"),
  Ub = Symbol.for("react.lazy"),
  vg = Symbol.iterator;
function $b(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (vg && t[vg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Fv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vv = Object.assign,
  zv = {};
function Go(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = zv),
    (this.updater = n || Fv);
}
Go.prototype.isReactComponent = {};
Go.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Go.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Bv() {}
Bv.prototype = Go.prototype;
function kp(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = zv),
    (this.updater = n || Fv);
}
var Pp = (kp.prototype = new Bv());
Pp.constructor = kp;
Vv(Pp, Go.prototype);
Pp.isPureReactComponent = !0;
var yg = Array.isArray,
  Uv = Object.prototype.hasOwnProperty,
  Ep = { current: null },
  $v = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Uv.call(e, r) && !$v.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Nl,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Ep.current,
  };
}
function Hb(t, e) {
  return {
    $$typeof: Nl,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Cp(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Nl;
}
function Wb(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var wg = /\/+/g;
function Df(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Wb("" + t.key)
    : e.toString(36);
}
function Au(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Nl:
          case Db:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Df(o, 0) : r),
      yg(i)
        ? ((n = ""),
          t != null && (n = t.replace(wg, "$&/") + "/"),
          Au(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Cp(i) &&
            (i = Hb(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wg, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), yg(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var l = r + Df(s, a);
      o += Au(s, e, n, l, i);
    }
  else if (((l = $b(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (l = r + Df(s, a++)), (o += Au(s, e, n, l, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Yl(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Au(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Xb(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Yt = { current: null },
  Nu = { transition: null },
  Yb = {
    ReactCurrentDispatcher: Yt,
    ReactCurrentBatchConfig: Nu,
    ReactCurrentOwner: Ep,
  };
ie.Children = {
  map: Yl,
  forEach: function (t, e, n) {
    Yl(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Yl(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Yl(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Cp(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
ie.Component = Go;
ie.Fragment = Rb;
ie.Profiler = Ob;
ie.PureComponent = kp;
ie.StrictMode = Lb;
ie.Suspense = zb;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yb;
ie.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = Vv({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Ep.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      Uv.call(e, l) &&
        !$v.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Nl, type: t.type, key: i, ref: s, props: r, _owner: o };
};
ie.createContext = function (t) {
  return (
    (t = {
      $$typeof: Fb,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Ib, _context: t }),
    (t.Consumer = t)
  );
};
ie.createElement = Hv;
ie.createFactory = function (t) {
  var e = Hv.bind(null, t);
  return (e.type = t), e;
};
ie.createRef = function () {
  return { current: null };
};
ie.forwardRef = function (t) {
  return { $$typeof: Vb, render: t };
};
ie.isValidElement = Cp;
ie.lazy = function (t) {
  return { $$typeof: Ub, _payload: { _status: -1, _result: t }, _init: Xb };
};
ie.memo = function (t, e) {
  return { $$typeof: Bb, type: t, compare: e === void 0 ? null : e };
};
ie.startTransition = function (t) {
  var e = Nu.transition;
  Nu.transition = {};
  try {
    t();
  } finally {
    Nu.transition = e;
  }
};
ie.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ie.useCallback = function (t, e) {
  return Yt.current.useCallback(t, e);
};
ie.useContext = function (t) {
  return Yt.current.useContext(t);
};
ie.useDebugValue = function () {};
ie.useDeferredValue = function (t) {
  return Yt.current.useDeferredValue(t);
};
ie.useEffect = function (t, e) {
  return Yt.current.useEffect(t, e);
};
ie.useId = function () {
  return Yt.current.useId();
};
ie.useImperativeHandle = function (t, e, n) {
  return Yt.current.useImperativeHandle(t, e, n);
};
ie.useInsertionEffect = function (t, e) {
  return Yt.current.useInsertionEffect(t, e);
};
ie.useLayoutEffect = function (t, e) {
  return Yt.current.useLayoutEffect(t, e);
};
ie.useMemo = function (t, e) {
  return Yt.current.useMemo(t, e);
};
ie.useReducer = function (t, e, n) {
  return Yt.current.useReducer(t, e, n);
};
ie.useRef = function (t) {
  return Yt.current.useRef(t);
};
ie.useState = function (t) {
  return Yt.current.useState(t);
};
ie.useSyncExternalStore = function (t, e, n) {
  return Yt.current.useSyncExternalStore(t, e, n);
};
ie.useTransition = function () {
  return Yt.current.useTransition();
};
ie.version = "18.2.0";
Iv.exports = ie;
var E = Iv.exports;
const Hn = Mb(E),
  Gb = Nb({ __proto__: null, default: Hn }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qb = E,
  Kb = Symbol.for("react.element"),
  qb = Symbol.for("react.fragment"),
  Zb = Object.prototype.hasOwnProperty,
  Jb = Qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  e2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wv(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) Zb.call(e, r) && !e2.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: Kb,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Jb.current,
  };
}
qc.Fragment = qb;
qc.jsx = Wv;
qc.jsxs = Wv;
Ov.exports = qc;
var f = Ov.exports,
  Od = {},
  Xv = { exports: {} },
  jn = {},
  Yv = { exports: {} },
  Gv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(N, O) {
    var T = N.length;
    N.push(O);
    e: for (; 0 < T; ) {
      var I = (T - 1) >>> 1,
        ee = N[I];
      if (0 < i(ee, O)) (N[I] = O), (N[T] = ee), (T = I);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      T = N.pop();
    if (T !== O) {
      N[0] = T;
      e: for (var I = 0, ee = N.length, nt = ee >>> 1; I < nt; ) {
        var ue = 2 * (I + 1) - 1,
          Pe = N[ue],
          pe = ue + 1,
          ge = N[pe];
        if (0 > i(Pe, T))
          pe < ee && 0 > i(ge, Pe)
            ? ((N[I] = ge), (N[pe] = T), (I = pe))
            : ((N[I] = Pe), (N[ue] = T), (I = ue));
        else if (pe < ee && 0 > i(ge, T)) (N[I] = ge), (N[pe] = T), (I = pe);
        else break e;
      }
    }
    return O;
  }
  function i(N, O) {
    var T = N.sortIndex - O.sortIndex;
    return T !== 0 ? T : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    p = !1,
    x = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N)
        r(u), (O.sortIndex = O.expirationTime), e(l, O);
      else break;
      O = n(u);
    }
  }
  function w(N) {
    if (((g = !1), v(N), !x))
      if (n(l) !== null) (x = !0), K(S);
      else {
        var O = n(u);
        O !== null && W(w, O.startTime - N);
      }
  }
  function S(N, O) {
    (x = !1), g && ((g = !1), y(P), (P = -1)), (p = !0);
    var T = h;
    try {
      for (
        v(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (N && !F()));

      ) {
        var I = d.callback;
        if (typeof I == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var ee = I(d.expirationTime <= O);
          (O = t.unstable_now()),
            typeof ee == "function" ? (d.callback = ee) : d === n(l) && r(l),
            v(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var nt = !0;
      else {
        var ue = n(u);
        ue !== null && W(w, ue.startTime - O), (nt = !1);
      }
      return nt;
    } finally {
      (d = null), (h = T), (p = !1);
    }
  }
  var k = !1,
    b = null,
    P = -1,
    C = 5,
    j = -1;
  function F() {
    return !(t.unstable_now() - j < C);
  }
  function R() {
    if (b !== null) {
      var N = t.unstable_now();
      j = N;
      var O = !0;
      try {
        O = b(!0, N);
      } finally {
        O ? Z() : ((k = !1), (b = null));
      }
    } else k = !1;
  }
  var Z;
  if (typeof m == "function")
    Z = function () {
      m(R);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      H = $.port2;
    ($.port1.onmessage = R),
      (Z = function () {
        H.postMessage(null);
      });
  } else
    Z = function () {
      _(R, 0);
    };
  function K(N) {
    (b = N), k || ((k = !0), Z());
  }
  function W(N, O) {
    P = _(function () {
      N(t.unstable_now());
    }, O);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      x || p || ((x = !0), K(S));
    }),
    (t.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var T = h;
      h = O;
      try {
        return N();
      } finally {
        h = T;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var T = h;
      h = N;
      try {
        return O();
      } finally {
        h = T;
      }
    }),
    (t.unstable_scheduleCallback = function (N, O, T) {
      var I = t.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? I + T : I))
          : (T = I),
        N)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = T + ee),
        (N = {
          id: c++,
          callback: O,
          priorityLevel: N,
          startTime: T,
          expirationTime: ee,
          sortIndex: -1,
        }),
        T > I
          ? ((N.sortIndex = T),
            e(u, N),
            n(l) === null &&
              N === n(u) &&
              (g ? (y(P), (P = -1)) : (g = !0), W(w, T - I)))
          : ((N.sortIndex = ee), e(l, N), x || p || ((x = !0), K(S))),
        N
      );
    }),
    (t.unstable_shouldYield = F),
    (t.unstable_wrapCallback = function (N) {
      var O = h;
      return function () {
        var T = h;
        h = O;
        try {
          return N.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(Gv);
Yv.exports = Gv;
var t2 = Yv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qv = E,
  Pn = t2;
function M(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kv = new Set(),
  Ja = {};
function Is(t, e) {
  Do(t, e), Do(t + "Capture", e);
}
function Do(t, e) {
  for (Ja[t] = e, t = 0; t < e.length; t++) Kv.add(e[t]);
}
var Yr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Id = Object.prototype.hasOwnProperty,
  n2 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _g = {},
  Sg = {};
function r2(t) {
  return Id.call(Sg, t)
    ? !0
    : Id.call(_g, t)
    ? !1
    : n2.test(t)
    ? (Sg[t] = !0)
    : ((_g[t] = !0), !1);
}
function i2(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function s2(t, e, n, r) {
  if (e === null || typeof e > "u" || i2(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Gt(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Tt[t] = new Gt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Tt[e] = new Gt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Tt[t] = new Gt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Tt[t] = new Gt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Tt[t] = new Gt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Tt[t] = new Gt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Tt[t] = new Gt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Tt[t] = new Gt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Tt[t] = new Gt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var jp = /[\-:]([a-z])/g;
function Ap(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(jp, Ap);
    Tt[e] = new Gt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(jp, Ap);
    Tt[e] = new Gt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(jp, Ap);
  Tt[e] = new Gt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Tt[t] = new Gt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Tt.xlinkHref = new Gt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Tt[t] = new Gt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Np(t, e, n, r) {
  var i = Tt.hasOwnProperty(e) ? Tt[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (s2(e, n, i, r) && (n = null),
    r || i === null
      ? r2(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var ei = Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gl = Symbol.for("react.element"),
  eo = Symbol.for("react.portal"),
  to = Symbol.for("react.fragment"),
  Mp = Symbol.for("react.strict_mode"),
  Fd = Symbol.for("react.profiler"),
  qv = Symbol.for("react.provider"),
  Zv = Symbol.for("react.context"),
  Dp = Symbol.for("react.forward_ref"),
  Vd = Symbol.for("react.suspense"),
  zd = Symbol.for("react.suspense_list"),
  Rp = Symbol.for("react.memo"),
  oi = Symbol.for("react.lazy"),
  Jv = Symbol.for("react.offscreen"),
  bg = Symbol.iterator;
function na(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (bg && t[bg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Oe = Object.assign,
  Rf;
function ga(t) {
  if (Rf === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Rf = (e && e[1]) || "";
    }
  return (
    `
` +
    Rf +
    t
  );
}
var Lf = !1;
function Of(t, e) {
  if (!t || Lf) return "";
  Lf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Lf = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? ga(t) : "";
}
function o2(t) {
  switch (t.tag) {
    case 5:
      return ga(t.type);
    case 16:
      return ga("Lazy");
    case 13:
      return ga("Suspense");
    case 19:
      return ga("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Of(t.type, !1)), t;
    case 11:
      return (t = Of(t.type.render, !1)), t;
    case 1:
      return (t = Of(t.type, !0)), t;
    default:
      return "";
  }
}
function Bd(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case to:
      return "Fragment";
    case eo:
      return "Portal";
    case Fd:
      return "Profiler";
    case Mp:
      return "StrictMode";
    case Vd:
      return "Suspense";
    case zd:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Zv:
        return (t.displayName || "Context") + ".Consumer";
      case qv:
        return (t._context.displayName || "Context") + ".Provider";
      case Dp:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Rp:
        return (
          (e = t.displayName || null), e !== null ? e : Bd(t.type) || "Memo"
        );
      case oi:
        (e = t._payload), (t = t._init);
        try {
          return Bd(t(e));
        } catch {}
    }
  return null;
}
function a2(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bd(e);
    case 8:
      return e === Mp ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Di(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function ey(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function l2(t) {
  var e = ey(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ql(t) {
  t._valueTracker || (t._valueTracker = l2(t));
}
function ty(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = ey(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function nc(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ud(t, e) {
  var n = e.checked;
  return Oe({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Tg(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Di(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function ny(t, e) {
  (e = e.checked), e != null && Np(t, "checked", e, !1);
}
function $d(t, e) {
  ny(t, e);
  var n = Di(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Hd(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Hd(t, e.type, Di(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function kg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Hd(t, e, n) {
  (e !== "number" || nc(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var xa = Array.isArray;
function _o(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Di(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Wd(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(M(91));
  return Oe({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Pg(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(M(92));
      if (xa(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Di(n) };
}
function ry(t, e) {
  var n = Di(e.value),
    r = Di(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function Eg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function iy(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xd(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? iy(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Kl,
  sy = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Kl = Kl || document.createElement("div"),
          Kl.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Kl.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function el(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Pa = {
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
  u2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pa).forEach(function (t) {
  u2.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Pa[e] = Pa[t]);
  });
});
function oy(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Pa.hasOwnProperty(t) && Pa[t])
    ? ("" + e).trim()
    : e + "px";
}
function ay(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = oy(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var c2 = Oe(
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
function Yd(t, e) {
  if (e) {
    if (c2[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(M(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(M(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(M(62));
  }
}
function Gd(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
var Qd = null;
function Lp(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Kd = null,
  So = null,
  bo = null;
function Cg(t) {
  if ((t = Rl(t))) {
    if (typeof Kd != "function") throw Error(M(280));
    var e = t.stateNode;
    e && ((e = nf(e)), Kd(t.stateNode, t.type, e));
  }
}
function ly(t) {
  So ? (bo ? bo.push(t) : (bo = [t])) : (So = t);
}
function uy() {
  if (So) {
    var t = So,
      e = bo;
    if (((bo = So = null), Cg(t), e)) for (t = 0; t < e.length; t++) Cg(e[t]);
  }
}
function cy(t, e) {
  return t(e);
}
function fy() {}
var If = !1;
function dy(t, e, n) {
  if (If) return t(e, n);
  If = !0;
  try {
    return cy(t, e, n);
  } finally {
    (If = !1), (So !== null || bo !== null) && (fy(), uy());
  }
}
function tl(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = nf(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(M(231, e, typeof n));
  return n;
}
var qd = !1;
if (Yr)
  try {
    var ra = {};
    Object.defineProperty(ra, "passive", {
      get: function () {
        qd = !0;
      },
    }),
      window.addEventListener("test", ra, ra),
      window.removeEventListener("test", ra, ra);
  } catch {
    qd = !1;
  }
function f2(t, e, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ea = !1,
  rc = null,
  ic = !1,
  Zd = null,
  d2 = {
    onError: function (t) {
      (Ea = !0), (rc = t);
    },
  };
function h2(t, e, n, r, i, s, o, a, l) {
  (Ea = !1), (rc = null), f2.apply(d2, arguments);
}
function p2(t, e, n, r, i, s, o, a, l) {
  if ((h2.apply(this, arguments), Ea)) {
    if (Ea) {
      var u = rc;
      (Ea = !1), (rc = null);
    } else throw Error(M(198));
    ic || ((ic = !0), (Zd = u));
  }
}
function Fs(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function hy(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function jg(t) {
  if (Fs(t) !== t) throw Error(M(188));
}
function m2(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Fs(t)), e === null)) throw Error(M(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return jg(i), t;
        if (s === r) return jg(i), e;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? t : e;
}
function py(t) {
  return (t = m2(t)), t !== null ? my(t) : null;
}
function my(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = my(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var gy = Pn.unstable_scheduleCallback,
  Ag = Pn.unstable_cancelCallback,
  g2 = Pn.unstable_shouldYield,
  x2 = Pn.unstable_requestPaint,
  Ye = Pn.unstable_now,
  v2 = Pn.unstable_getCurrentPriorityLevel,
  Op = Pn.unstable_ImmediatePriority,
  xy = Pn.unstable_UserBlockingPriority,
  sc = Pn.unstable_NormalPriority,
  y2 = Pn.unstable_LowPriority,
  vy = Pn.unstable_IdlePriority,
  Zc = null,
  _r = null;
function w2(t) {
  if (_r && typeof _r.onCommitFiberRoot == "function")
    try {
      _r.onCommitFiberRoot(Zc, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var or = Math.clz32 ? Math.clz32 : b2,
  _2 = Math.log,
  S2 = Math.LN2;
function b2(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((_2(t) / S2) | 0)) | 0;
}
var ql = 64,
  Zl = 4194304;
function va(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function oc(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = va(a)) : ((s &= o), s !== 0 && (r = va(s)));
  } else (o = n & ~i), o !== 0 ? (r = va(o)) : s !== 0 && (r = va(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - or(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function T2(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function k2(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - or(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = T2(a, e))
      : l <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function Jd(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function yy() {
  var t = ql;
  return (ql <<= 1), !(ql & 4194240) && (ql = 64), t;
}
function Ff(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ml(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - or(e)),
    (t[e] = n);
}
function P2(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - or(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Ip(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - or(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var me = 0;
function wy(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _y,
  Fp,
  Sy,
  by,
  Ty,
  eh = !1,
  Jl = [],
  yi = null,
  wi = null,
  _i = null,
  nl = new Map(),
  rl = new Map(),
  ui = [],
  E2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ng(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      yi = null;
      break;
    case "dragenter":
    case "dragleave":
      wi = null;
      break;
    case "mouseover":
    case "mouseout":
      _i = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rl.delete(e.pointerId);
  }
}
function ia(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Rl(e)), e !== null && Fp(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function C2(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (yi = ia(yi, t, e, n, r, i)), !0;
    case "dragenter":
      return (wi = ia(wi, t, e, n, r, i)), !0;
    case "mouseover":
      return (_i = ia(_i, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return nl.set(s, ia(nl.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), rl.set(s, ia(rl.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function ky(t) {
  var e = ds(t.target);
  if (e !== null) {
    var n = Fs(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = hy(n)), e !== null)) {
          (t.blockedOn = e),
            Ty(t.priority, function () {
              Sy(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Mu(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = th(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qd = r), n.target.dispatchEvent(r), (Qd = null);
    } else return (e = Rl(n)), e !== null && Fp(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Mg(t, e, n) {
  Mu(t) && n.delete(e);
}
function j2() {
  (eh = !1),
    yi !== null && Mu(yi) && (yi = null),
    wi !== null && Mu(wi) && (wi = null),
    _i !== null && Mu(_i) && (_i = null),
    nl.forEach(Mg),
    rl.forEach(Mg);
}
function sa(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    eh ||
      ((eh = !0),
      Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority, j2)));
}
function il(t) {
  function e(i) {
    return sa(i, t);
  }
  if (0 < Jl.length) {
    sa(Jl[0], t);
    for (var n = 1; n < Jl.length; n++) {
      var r = Jl[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    yi !== null && sa(yi, t),
      wi !== null && sa(wi, t),
      _i !== null && sa(_i, t),
      nl.forEach(e),
      rl.forEach(e),
      n = 0;
    n < ui.length;
    n++
  )
    (r = ui[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < ui.length && ((n = ui[0]), n.blockedOn === null); )
    ky(n), n.blockedOn === null && ui.shift();
}
var To = ei.ReactCurrentBatchConfig,
  ac = !0;
function A2(t, e, n, r) {
  var i = me,
    s = To.transition;
  To.transition = null;
  try {
    (me = 1), Vp(t, e, n, r);
  } finally {
    (me = i), (To.transition = s);
  }
}
function N2(t, e, n, r) {
  var i = me,
    s = To.transition;
  To.transition = null;
  try {
    (me = 4), Vp(t, e, n, r);
  } finally {
    (me = i), (To.transition = s);
  }
}
function Vp(t, e, n, r) {
  if (ac) {
    var i = th(t, e, n, r);
    if (i === null) Gf(t, e, r, lc, n), Ng(t, r);
    else if (C2(i, t, e, n, r)) r.stopPropagation();
    else if ((Ng(t, r), e & 4 && -1 < E2.indexOf(t))) {
      for (; i !== null; ) {
        var s = Rl(i);
        if (
          (s !== null && _y(s),
          (s = th(t, e, n, r)),
          s === null && Gf(t, e, r, lc, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Gf(t, e, r, null, n);
  }
}
var lc = null;
function th(t, e, n, r) {
  if (((lc = null), (t = Lp(r)), (t = ds(t)), t !== null))
    if (((e = Fs(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = hy(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (lc = t), null;
}
function Py(t) {
  switch (t) {
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
      switch (v2()) {
        case Op:
          return 1;
        case xy:
          return 4;
        case sc:
        case y2:
          return 16;
        case vy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fi = null,
  zp = null,
  Du = null;
function Ey() {
  if (Du) return Du;
  var t,
    e = zp,
    n = e.length,
    r,
    i = "value" in fi ? fi.value : fi.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Du = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Ru(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function eu() {
  return !0;
}
function Dg() {
  return !1;
}
function An(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? eu
        : Dg),
      (this.isPropagationStopped = Dg),
      this
    );
  }
  return (
    Oe(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = eu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = eu));
      },
      persist: function () {},
      isPersistent: eu,
    }),
    e
  );
}
var Qo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bp = An(Qo),
  Dl = Oe({}, Qo, { view: 0, detail: 0 }),
  M2 = An(Dl),
  Vf,
  zf,
  oa,
  Jc = Oe({}, Dl, {
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
    getModifierState: Up,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== oa &&
            (oa && t.type === "mousemove"
              ? ((Vf = t.screenX - oa.screenX), (zf = t.screenY - oa.screenY))
              : (zf = Vf = 0),
            (oa = t)),
          Vf);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : zf;
    },
  }),
  Rg = An(Jc),
  D2 = Oe({}, Jc, { dataTransfer: 0 }),
  R2 = An(D2),
  L2 = Oe({}, Dl, { relatedTarget: 0 }),
  Bf = An(L2),
  O2 = Oe({}, Qo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I2 = An(O2),
  F2 = Oe({}, Qo, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  V2 = An(F2),
  z2 = Oe({}, Qo, { data: 0 }),
  Lg = An(z2),
  B2 = {
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
  U2 = {
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
  $2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function H2(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = $2[t]) ? !!e[t] : !1;
}
function Up() {
  return H2;
}
var W2 = Oe({}, Dl, {
    key: function (t) {
      if (t.key) {
        var e = B2[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Ru(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? U2[t.keyCode] || "Unidentified"
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
    getModifierState: Up,
    charCode: function (t) {
      return t.type === "keypress" ? Ru(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Ru(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  X2 = An(W2),
  Y2 = Oe({}, Jc, {
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
  Og = An(Y2),
  G2 = Oe({}, Dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Up,
  }),
  Q2 = An(G2),
  K2 = Oe({}, Qo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q2 = An(K2),
  Z2 = Oe({}, Jc, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  J2 = An(Z2),
  eT = [9, 13, 27, 32],
  $p = Yr && "CompositionEvent" in window,
  Ca = null;
Yr && "documentMode" in document && (Ca = document.documentMode);
var tT = Yr && "TextEvent" in window && !Ca,
  Cy = Yr && (!$p || (Ca && 8 < Ca && 11 >= Ca)),
  Ig = String.fromCharCode(32),
  Fg = !1;
function jy(t, e) {
  switch (t) {
    case "keyup":
      return eT.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ay(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var no = !1;
function nT(t, e) {
  switch (t) {
    case "compositionend":
      return Ay(e);
    case "keypress":
      return e.which !== 32 ? null : ((Fg = !0), Ig);
    case "textInput":
      return (t = e.data), t === Ig && Fg ? null : t;
    default:
      return null;
  }
}
function rT(t, e) {
  if (no)
    return t === "compositionend" || (!$p && jy(t, e))
      ? ((t = Ey()), (Du = zp = fi = null), (no = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Cy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var iT = {
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
function Vg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!iT[t.type] : e === "textarea";
}
function Ny(t, e, n, r) {
  ly(r),
    (e = uc(e, "onChange")),
    0 < e.length &&
      ((n = new Bp("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var ja = null,
  sl = null;
function sT(t) {
  Uy(t, 0);
}
function ef(t) {
  var e = so(t);
  if (ty(e)) return t;
}
function oT(t, e) {
  if (t === "change") return e;
}
var My = !1;
if (Yr) {
  var Uf;
  if (Yr) {
    var $f = "oninput" in document;
    if (!$f) {
      var zg = document.createElement("div");
      zg.setAttribute("oninput", "return;"),
        ($f = typeof zg.oninput == "function");
    }
    Uf = $f;
  } else Uf = !1;
  My = Uf && (!document.documentMode || 9 < document.documentMode);
}
function Bg() {
  ja && (ja.detachEvent("onpropertychange", Dy), (sl = ja = null));
}
function Dy(t) {
  if (t.propertyName === "value" && ef(sl)) {
    var e = [];
    Ny(e, sl, t, Lp(t)), dy(sT, e);
  }
}
function aT(t, e, n) {
  t === "focusin"
    ? (Bg(), (ja = e), (sl = n), ja.attachEvent("onpropertychange", Dy))
    : t === "focusout" && Bg();
}
function lT(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return ef(sl);
}
function uT(t, e) {
  if (t === "click") return ef(e);
}
function cT(t, e) {
  if (t === "input" || t === "change") return ef(e);
}
function fT(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var ur = typeof Object.is == "function" ? Object.is : fT;
function ol(t, e) {
  if (ur(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Id.call(e, i) || !ur(t[i], e[i])) return !1;
  }
  return !0;
}
function Ug(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function $g(t, e) {
  var n = Ug(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
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
    n = Ug(n);
  }
}
function Ry(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Ry(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Ly() {
  for (var t = window, e = nc(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = nc(t.document);
  }
  return e;
}
function Hp(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function dT(t) {
  var e = Ly(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Ry(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hp(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = $g(n, s));
        var o = $g(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var hT = Yr && "documentMode" in document && 11 >= document.documentMode,
  ro = null,
  nh = null,
  Aa = null,
  rh = !1;
function Hg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  rh ||
    ro == null ||
    ro !== nc(r) ||
    ((r = ro),
    "selectionStart" in r && Hp(r)
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
    (Aa && ol(Aa, r)) ||
      ((Aa = r),
      (r = uc(nh, "onSelect")),
      0 < r.length &&
        ((e = new Bp("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = ro))));
}
function tu(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var io = {
    animationend: tu("Animation", "AnimationEnd"),
    animationiteration: tu("Animation", "AnimationIteration"),
    animationstart: tu("Animation", "AnimationStart"),
    transitionend: tu("Transition", "TransitionEnd"),
  },
  Hf = {},
  Oy = {};
Yr &&
  ((Oy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete io.animationend.animation,
    delete io.animationiteration.animation,
    delete io.animationstart.animation),
  "TransitionEvent" in window || delete io.transitionend.transition);
function tf(t) {
  if (Hf[t]) return Hf[t];
  if (!io[t]) return t;
  var e = io[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Oy) return (Hf[t] = e[n]);
  return t;
}
var Iy = tf("animationend"),
  Fy = tf("animationiteration"),
  Vy = tf("animationstart"),
  zy = tf("transitionend"),
  By = new Map(),
  Wg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zi(t, e) {
  By.set(t, e), Is(e, [t]);
}
for (var Wf = 0; Wf < Wg.length; Wf++) {
  var Xf = Wg[Wf],
    pT = Xf.toLowerCase(),
    mT = Xf[0].toUpperCase() + Xf.slice(1);
  zi(pT, "on" + mT);
}
zi(Iy, "onAnimationEnd");
zi(Fy, "onAnimationIteration");
zi(Vy, "onAnimationStart");
zi("dblclick", "onDoubleClick");
zi("focusin", "onFocus");
zi("focusout", "onBlur");
zi(zy, "onTransitionEnd");
Do("onMouseEnter", ["mouseout", "mouseover"]);
Do("onMouseLeave", ["mouseout", "mouseover"]);
Do("onPointerEnter", ["pointerout", "pointerover"]);
Do("onPointerLeave", ["pointerout", "pointerover"]);
Is(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Is(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Is("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Is(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Is(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Is(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ya =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gT = new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));
function Xg(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), p2(r, e, void 0, t), (t.currentTarget = null);
}
function Uy(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Xg(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Xg(i, a, u), (s = l);
        }
    }
  }
  if (ic) throw ((t = Zd), (ic = !1), (Zd = null), t);
}
function _e(t, e) {
  var n = e[lh];
  n === void 0 && (n = e[lh] = new Set());
  var r = t + "__bubble";
  n.has(r) || ($y(e, t, 2, !1), n.add(r));
}
function Yf(t, e, n) {
  var r = 0;
  e && (r |= 4), $y(n, t, r, e);
}
var nu = "_reactListening" + Math.random().toString(36).slice(2);
function al(t) {
  if (!t[nu]) {
    (t[nu] = !0),
      Kv.forEach(function (n) {
        n !== "selectionchange" && (gT.has(n) || Yf(n, !1, t), Yf(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[nu] || ((e[nu] = !0), Yf("selectionchange", !1, e));
  }
}
function $y(t, e, n, r) {
  switch (Py(e)) {
    case 1:
      var i = A2;
      break;
    case 4:
      i = N2;
      break;
    default:
      i = Vp;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !qd ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Gf(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = ds(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  dy(function () {
    var u = s,
      c = Lp(n),
      d = [];
    e: {
      var h = By.get(t);
      if (h !== void 0) {
        var p = Bp,
          x = t;
        switch (t) {
          case "keypress":
            if (Ru(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = X2;
            break;
          case "focusin":
            (x = "focus"), (p = Bf);
            break;
          case "focusout":
            (x = "blur"), (p = Bf);
            break;
          case "beforeblur":
          case "afterblur":
            p = Bf;
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
            p = Rg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = R2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Q2;
            break;
          case Iy:
          case Fy:
          case Vy:
            p = I2;
            break;
          case zy:
            p = q2;
            break;
          case "scroll":
            p = M2;
            break;
          case "wheel":
            p = J2;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = V2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Og;
        }
        var g = (e & 4) !== 0,
          _ = !g && t === "scroll",
          y = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var m = u, v; m !== null; ) {
          v = m;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              y !== null && ((w = tl(m, y)), w != null && g.push(ll(m, w, v)))),
            _)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((h = new p(h, x, null, n, c)), d.push({ event: h, listeners: g }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === "mouseover" || t === "pointerover"),
          (p = t === "mouseout" || t === "pointerout"),
          h &&
            n !== Qd &&
            (x = n.relatedTarget || n.fromElement) &&
            (ds(x) || x[Gr]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((x = n.relatedTarget || n.toElement),
              (p = u),
              (x = x ? ds(x) : null),
              x !== null &&
                ((_ = Fs(x)), x !== _ || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((p = null), (x = u)),
          p !== x)
        ) {
          if (
            ((g = Rg),
            (w = "onMouseLeave"),
            (y = "onMouseEnter"),
            (m = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((g = Og),
              (w = "onPointerLeave"),
              (y = "onPointerEnter"),
              (m = "pointer")),
            (_ = p == null ? h : so(p)),
            (v = x == null ? h : so(x)),
            (h = new g(w, m + "leave", p, n, c)),
            (h.target = _),
            (h.relatedTarget = v),
            (w = null),
            ds(c) === u &&
              ((g = new g(y, m + "enter", x, n, c)),
              (g.target = v),
              (g.relatedTarget = _),
              (w = g)),
            (_ = w),
            p && x)
          )
            t: {
              for (g = p, y = x, m = 0, v = g; v; v = Gs(v)) m++;
              for (v = 0, w = y; w; w = Gs(w)) v++;
              for (; 0 < m - v; ) (g = Gs(g)), m--;
              for (; 0 < v - m; ) (y = Gs(y)), v--;
              for (; m--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = Gs(g)), (y = Gs(y));
              }
              g = null;
            }
          else g = null;
          p !== null && Yg(d, h, p, g, !1),
            x !== null && _ !== null && Yg(d, _, x, g, !0);
        }
      }
      e: {
        if (
          ((h = u ? so(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var S = oT;
        else if (Vg(h))
          if (My) S = cT;
          else {
            S = lT;
            var k = aT;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = uT);
        if (S && (S = S(t, u))) {
          Ny(d, S, n, c);
          break e;
        }
        k && k(t, h, u),
          t === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            Hd(h, "number", h.value);
      }
      switch (((k = u ? so(u) : window), t)) {
        case "focusin":
          (Vg(k) || k.contentEditable === "true") &&
            ((ro = k), (nh = u), (Aa = null));
          break;
        case "focusout":
          Aa = nh = ro = null;
          break;
        case "mousedown":
          rh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (rh = !1), Hg(d, n, c);
          break;
        case "selectionchange":
          if (hT) break;
        case "keydown":
        case "keyup":
          Hg(d, n, c);
      }
      var b;
      if ($p)
        e: {
          switch (t) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        no
          ? jy(t, n) && (P = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Cy &&
          n.locale !== "ko" &&
          (no || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && no && (b = Ey())
            : ((fi = c),
              (zp = "value" in fi ? fi.value : fi.textContent),
              (no = !0))),
        (k = uc(u, P)),
        0 < k.length &&
          ((P = new Lg(P, t, null, n, c)),
          d.push({ event: P, listeners: k }),
          b ? (P.data = b) : ((b = Ay(n)), b !== null && (P.data = b)))),
        (b = tT ? nT(t, n) : rT(t, n)) &&
          ((u = uc(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Lg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Uy(d, e);
  });
}
function ll(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function uc(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = tl(t, n)),
      s != null && r.unshift(ll(t, s, i)),
      (s = tl(t, e)),
      s != null && r.push(ll(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Gs(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Yg(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = tl(n, s)), l != null && o.unshift(ll(n, l, a)))
        : i || ((l = tl(n, s)), l != null && o.push(ll(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var xT = /\r\n?/g,
  vT = /\u0000|\uFFFD/g;
function Gg(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      xT,
      `
`
    )
    .replace(vT, "");
}
function ru(t, e, n) {
  if (((e = Gg(e)), Gg(t) !== e && n)) throw Error(M(425));
}
function cc() {}
var ih = null,
  sh = null;
function oh(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var ah = typeof setTimeout == "function" ? setTimeout : void 0,
  yT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qg = typeof Promise == "function" ? Promise : void 0,
  wT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qg < "u"
      ? function (t) {
          return Qg.resolve(null).then(t).catch(_T);
        }
      : ah;
function _T(t) {
  setTimeout(function () {
    throw t;
  });
}
function Qf(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), il(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  il(e);
}
function Si(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Kg(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Ko = Math.random().toString(36).slice(2),
  vr = "__reactFiber$" + Ko,
  ul = "__reactProps$" + Ko,
  Gr = "__reactContainer$" + Ko,
  lh = "__reactEvents$" + Ko,
  ST = "__reactListeners$" + Ko,
  bT = "__reactHandles$" + Ko;
function ds(t) {
  var e = t[vr];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Gr] || n[vr])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Kg(t); t !== null; ) {
          if ((n = t[vr])) return n;
          t = Kg(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Rl(t) {
  return (
    (t = t[vr] || t[Gr]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function so(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(M(33));
}
function nf(t) {
  return t[ul] || null;
}
var uh = [],
  oo = -1;
function Bi(t) {
  return { current: t };
}
function Te(t) {
  0 > oo || ((t.current = uh[oo]), (uh[oo] = null), oo--);
}
function we(t, e) {
  oo++, (uh[oo] = t.current), (t.current = e);
}
var Ri = {},
  Rt = Bi(Ri),
  tn = Bi(!1),
  Es = Ri;
function Ro(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Ri;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function nn(t) {
  return (t = t.childContextTypes), t != null;
}
function fc() {
  Te(tn), Te(Rt);
}
function qg(t, e, n) {
  if (Rt.current !== Ri) throw Error(M(168));
  we(Rt, e), we(tn, n);
}
function Hy(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(M(108, a2(t) || "Unknown", i));
  return Oe({}, n, r);
}
function dc(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ri),
    (Es = Rt.current),
    we(Rt, t),
    we(tn, tn.current),
    !0
  );
}
function Zg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((t = Hy(t, e, Es)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Te(tn),
      Te(Rt),
      we(Rt, t))
    : Te(tn),
    we(tn, n);
}
var Rr = null,
  rf = !1,
  Kf = !1;
function Wy(t) {
  Rr === null ? (Rr = [t]) : Rr.push(t);
}
function TT(t) {
  (rf = !0), Wy(t);
}
function Ui() {
  if (!Kf && Rr !== null) {
    Kf = !0;
    var t = 0,
      e = me;
    try {
      var n = Rr;
      for (me = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Rr = null), (rf = !1);
    } catch (i) {
      throw (Rr !== null && (Rr = Rr.slice(t + 1)), gy(Op, Ui), i);
    } finally {
      (me = e), (Kf = !1);
    }
  }
  return null;
}
var ao = [],
  lo = 0,
  hc = null,
  pc = 0,
  Rn = [],
  Ln = 0,
  Cs = null,
  Fr = 1,
  Vr = "";
function ss(t, e) {
  (ao[lo++] = pc), (ao[lo++] = hc), (hc = t), (pc = e);
}
function Xy(t, e, n) {
  (Rn[Ln++] = Fr), (Rn[Ln++] = Vr), (Rn[Ln++] = Cs), (Cs = t);
  var r = Fr;
  t = Vr;
  var i = 32 - or(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - or(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Fr = (1 << (32 - or(e) + i)) | (n << i) | r),
      (Vr = s + t);
  } else (Fr = (1 << s) | (n << i) | r), (Vr = t);
}
function Wp(t) {
  t.return !== null && (ss(t, 1), Xy(t, 1, 0));
}
function Xp(t) {
  for (; t === hc; )
    (hc = ao[--lo]), (ao[lo] = null), (pc = ao[--lo]), (ao[lo] = null);
  for (; t === Cs; )
    (Cs = Rn[--Ln]),
      (Rn[Ln] = null),
      (Vr = Rn[--Ln]),
      (Rn[Ln] = null),
      (Fr = Rn[--Ln]),
      (Rn[Ln] = null);
}
var Tn = null,
  bn = null,
  Ee = !1,
  ir = null;
function Yy(t, e) {
  var n = Fn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Jg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Tn = t), (bn = Si(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Tn = t), (bn = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Cs !== null ? { id: Fr, overflow: Vr } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Tn = t),
            (bn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ch(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function fh(t) {
  if (Ee) {
    var e = bn;
    if (e) {
      var n = e;
      if (!Jg(t, e)) {
        if (ch(t)) throw Error(M(418));
        e = Si(n.nextSibling);
        var r = Tn;
        e && Jg(t, e)
          ? Yy(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (Ee = !1), (Tn = t));
      }
    } else {
      if (ch(t)) throw Error(M(418));
      (t.flags = (t.flags & -4097) | 2), (Ee = !1), (Tn = t);
    }
  }
}
function e0(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Tn = t;
}
function iu(t) {
  if (t !== Tn) return !1;
  if (!Ee) return e0(t), (Ee = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !oh(t.type, t.memoizedProps))),
    e && (e = bn))
  ) {
    if (ch(t)) throw (Gy(), Error(M(418)));
    for (; e; ) Yy(t, e), (e = Si(e.nextSibling));
  }
  if ((e0(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(M(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              bn = Si(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      bn = null;
    }
  } else bn = Tn ? Si(t.stateNode.nextSibling) : null;
  return !0;
}
function Gy() {
  for (var t = bn; t; ) t = Si(t.nextSibling);
}
function Lo() {
  (bn = Tn = null), (Ee = !1);
}
function Yp(t) {
  ir === null ? (ir = [t]) : ir.push(t);
}
var kT = ei.ReactCurrentBatchConfig;
function nr(t, e) {
  if (t && t.defaultProps) {
    (e = Oe({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var mc = Bi(null),
  gc = null,
  uo = null,
  Gp = null;
function Qp() {
  Gp = uo = gc = null;
}
function Kp(t) {
  var e = mc.current;
  Te(mc), (t._currentValue = e);
}
function dh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ko(t, e) {
  (gc = t),
    (Gp = uo = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (en = !0), (t.firstContext = null));
}
function Wn(t) {
  var e = t._currentValue;
  if (Gp !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), uo === null)) {
      if (gc === null) throw Error(M(308));
      (uo = t), (gc.dependencies = { lanes: 0, firstContext: t });
    } else uo = uo.next = t;
  return e;
}
var hs = null;
function qp(t) {
  hs === null ? (hs = [t]) : hs.push(t);
}
function Qy(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), qp(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Qr(t, r)
  );
}
function Qr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ai = !1;
function Zp(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ky(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function $r(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bi(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), de & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Qr(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), qp(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Qr(t, n)
  );
}
function Lu(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Ip(t, n);
  }
}
function t0(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function xc(t, e, n, r) {
  var i = t.updateQueue;
  ai = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var h = a.lane,
        p = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = t,
            g = a;
          switch (((h = e), (p = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(p, d, h);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (h = typeof x == "function" ? x.call(p, d, h) : x),
                h == null)
              )
                break e;
              d = Oe({}, d, h);
              break e;
            case 2:
              ai = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (As |= o), (t.lanes = o), (t.memoizedState = d);
  }
}
function n0(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var qy = new Qv.Component().refs;
function hh(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Oe({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var sf = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Fs(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Wt(),
      i = ki(t),
      s = $r(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = bi(t, s, i)),
      e !== null && (ar(e, t, i, r), Lu(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Wt(),
      i = ki(t),
      s = $r(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = bi(t, s, i)),
      e !== null && (ar(e, t, i, r), Lu(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Wt(),
      r = ki(t),
      i = $r(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = bi(t, i, r)),
      e !== null && (ar(e, t, r, n), Lu(e, t, r));
  },
};
function r0(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ol(n, r) || !ol(i, s)
      : !0
  );
}
function Zy(t, e, n) {
  var r = !1,
    i = Ri,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Wn(s))
      : ((i = nn(e) ? Es : Rt.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Ro(t, i) : Ri)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = sf),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function i0(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && sf.enqueueReplaceState(e, e.state, null);
}
function ph(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = qy), Zp(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Wn(s))
    : ((s = nn(e) ? Es : Rt.current), (i.context = Ro(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (hh(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && sf.enqueueReplaceState(i, i.state, null),
      xc(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function aa(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            a === qy && (a = i.refs = {}),
              o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, t));
  }
  return t;
}
function su(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      M(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function s0(t) {
  var e = t._init;
  return e(t._payload);
}
function Jy(t) {
  function e(y, m) {
    if (t) {
      var v = y.deletions;
      v === null ? ((y.deletions = [m]), (y.flags |= 16)) : v.push(m);
    }
  }
  function n(y, m) {
    if (!t) return null;
    for (; m !== null; ) e(y, m), (m = m.sibling);
    return null;
  }
  function r(y, m) {
    for (y = new Map(); m !== null; )
      m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling);
    return y;
  }
  function i(y, m) {
    return (y = Pi(y, m)), (y.index = 0), (y.sibling = null), y;
  }
  function s(y, m, v) {
    return (
      (y.index = v),
      t
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((y.flags |= 2), m) : v)
            : ((y.flags |= 2), m))
        : ((y.flags |= 1048576), m)
    );
  }
  function o(y) {
    return t && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, m, v, w) {
    return m === null || m.tag !== 6
      ? ((m = rd(v, y.mode, w)), (m.return = y), m)
      : ((m = i(m, v)), (m.return = y), m);
  }
  function l(y, m, v, w) {
    var S = v.type;
    return S === to
      ? c(y, m, v.props.children, w, v.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === oi &&
            s0(S) === m.type))
      ? ((w = i(m, v.props)), (w.ref = aa(y, m, v)), (w.return = y), w)
      : ((w = Bu(v.type, v.key, v.props, null, y.mode, w)),
        (w.ref = aa(y, m, v)),
        (w.return = y),
        w);
  }
  function u(y, m, v, w) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = id(v, y.mode, w)), (m.return = y), m)
      : ((m = i(m, v.children || [])), (m.return = y), m);
  }
  function c(y, m, v, w, S) {
    return m === null || m.tag !== 7
      ? ((m = ys(v, y.mode, w, S)), (m.return = y), m)
      : ((m = i(m, v)), (m.return = y), m);
  }
  function d(y, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = rd("" + m, y.mode, v)), (m.return = y), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Gl:
          return (
            (v = Bu(m.type, m.key, m.props, null, y.mode, v)),
            (v.ref = aa(y, null, m)),
            (v.return = y),
            v
          );
        case eo:
          return (m = id(m, y.mode, v)), (m.return = y), m;
        case oi:
          var w = m._init;
          return d(y, w(m._payload), v);
      }
      if (xa(m) || na(m))
        return (m = ys(m, y.mode, v, null)), (m.return = y), m;
      su(y, m);
    }
    return null;
  }
  function h(y, m, v, w) {
    var S = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : a(y, m, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Gl:
          return v.key === S ? l(y, m, v, w) : null;
        case eo:
          return v.key === S ? u(y, m, v, w) : null;
        case oi:
          return (S = v._init), h(y, m, S(v._payload), w);
      }
      if (xa(v) || na(v)) return S !== null ? null : c(y, m, v, w, null);
      su(y, v);
    }
    return null;
  }
  function p(y, m, v, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (y = y.get(v) || null), a(m, y, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Gl:
          return (y = y.get(w.key === null ? v : w.key) || null), l(m, y, w, S);
        case eo:
          return (y = y.get(w.key === null ? v : w.key) || null), u(m, y, w, S);
        case oi:
          var k = w._init;
          return p(y, m, v, k(w._payload), S);
      }
      if (xa(w) || na(w)) return (y = y.get(v) || null), c(m, y, w, S, null);
      su(m, w);
    }
    return null;
  }
  function x(y, m, v, w) {
    for (
      var S = null, k = null, b = m, P = (m = 0), C = null;
      b !== null && P < v.length;
      P++
    ) {
      b.index > P ? ((C = b), (b = null)) : (C = b.sibling);
      var j = h(y, b, v[P], w);
      if (j === null) {
        b === null && (b = C);
        break;
      }
      t && b && j.alternate === null && e(y, b),
        (m = s(j, m, P)),
        k === null ? (S = j) : (k.sibling = j),
        (k = j),
        (b = C);
    }
    if (P === v.length) return n(y, b), Ee && ss(y, P), S;
    if (b === null) {
      for (; P < v.length; P++)
        (b = d(y, v[P], w)),
          b !== null &&
            ((m = s(b, m, P)), k === null ? (S = b) : (k.sibling = b), (k = b));
      return Ee && ss(y, P), S;
    }
    for (b = r(y, b); P < v.length; P++)
      (C = p(b, y, P, v[P], w)),
        C !== null &&
          (t && C.alternate !== null && b.delete(C.key === null ? P : C.key),
          (m = s(C, m, P)),
          k === null ? (S = C) : (k.sibling = C),
          (k = C));
    return (
      t &&
        b.forEach(function (F) {
          return e(y, F);
        }),
      Ee && ss(y, P),
      S
    );
  }
  function g(y, m, v, w) {
    var S = na(v);
    if (typeof S != "function") throw Error(M(150));
    if (((v = S.call(v)), v == null)) throw Error(M(151));
    for (
      var k = (S = null), b = m, P = (m = 0), C = null, j = v.next();
      b !== null && !j.done;
      P++, j = v.next()
    ) {
      b.index > P ? ((C = b), (b = null)) : (C = b.sibling);
      var F = h(y, b, j.value, w);
      if (F === null) {
        b === null && (b = C);
        break;
      }
      t && b && F.alternate === null && e(y, b),
        (m = s(F, m, P)),
        k === null ? (S = F) : (k.sibling = F),
        (k = F),
        (b = C);
    }
    if (j.done) return n(y, b), Ee && ss(y, P), S;
    if (b === null) {
      for (; !j.done; P++, j = v.next())
        (j = d(y, j.value, w)),
          j !== null &&
            ((m = s(j, m, P)), k === null ? (S = j) : (k.sibling = j), (k = j));
      return Ee && ss(y, P), S;
    }
    for (b = r(y, b); !j.done; P++, j = v.next())
      (j = p(b, y, P, j.value, w)),
        j !== null &&
          (t && j.alternate !== null && b.delete(j.key === null ? P : j.key),
          (m = s(j, m, P)),
          k === null ? (S = j) : (k.sibling = j),
          (k = j));
    return (
      t &&
        b.forEach(function (R) {
          return e(y, R);
        }),
      Ee && ss(y, P),
      S
    );
  }
  function _(y, m, v, w) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === to &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Gl:
          e: {
            for (var S = v.key, k = m; k !== null; ) {
              if (k.key === S) {
                if (((S = v.type), S === to)) {
                  if (k.tag === 7) {
                    n(y, k.sibling),
                      (m = i(k, v.props.children)),
                      (m.return = y),
                      (y = m);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === oi &&
                    s0(S) === k.type)
                ) {
                  n(y, k.sibling),
                    (m = i(k, v.props)),
                    (m.ref = aa(y, k, v)),
                    (m.return = y),
                    (y = m);
                  break e;
                }
                n(y, k);
                break;
              } else e(y, k);
              k = k.sibling;
            }
            v.type === to
              ? ((m = ys(v.props.children, y.mode, w, v.key)),
                (m.return = y),
                (y = m))
              : ((w = Bu(v.type, v.key, v.props, null, y.mode, w)),
                (w.ref = aa(y, m, v)),
                (w.return = y),
                (y = w));
          }
          return o(y);
        case eo:
          e: {
            for (k = v.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(y, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = y),
                    (y = m);
                  break e;
                } else {
                  n(y, m);
                  break;
                }
              else e(y, m);
              m = m.sibling;
            }
            (m = id(v, y.mode, w)), (m.return = y), (y = m);
          }
          return o(y);
        case oi:
          return (k = v._init), _(y, m, k(v._payload), w);
      }
      if (xa(v)) return x(y, m, v, w);
      if (na(v)) return g(y, m, v, w);
      su(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(y, m.sibling), (m = i(m, v)), (m.return = y), (y = m))
          : (n(y, m), (m = rd(v, y.mode, w)), (m.return = y), (y = m)),
        o(y))
      : n(y, m);
  }
  return _;
}
var Oo = Jy(!0),
  e1 = Jy(!1),
  Ll = {},
  Sr = Bi(Ll),
  cl = Bi(Ll),
  fl = Bi(Ll);
function ps(t) {
  if (t === Ll) throw Error(M(174));
  return t;
}
function Jp(t, e) {
  switch ((we(fl, e), we(cl, t), we(Sr, Ll), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Xd(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Xd(e, t));
  }
  Te(Sr), we(Sr, e);
}
function Io() {
  Te(Sr), Te(cl), Te(fl);
}
function t1(t) {
  ps(fl.current);
  var e = ps(Sr.current),
    n = Xd(e, t.type);
  e !== n && (we(cl, t), we(Sr, n));
}
function em(t) {
  cl.current === t && (Te(Sr), Te(cl));
}
var Ne = Bi(0);
function vc(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var qf = [];
function tm() {
  for (var t = 0; t < qf.length; t++)
    qf[t]._workInProgressVersionPrimary = null;
  qf.length = 0;
}
var Ou = ei.ReactCurrentDispatcher,
  Zf = ei.ReactCurrentBatchConfig,
  js = 0,
  Le = null,
  it = null,
  dt = null,
  yc = !1,
  Na = !1,
  dl = 0,
  PT = 0;
function Et() {
  throw Error(M(321));
}
function nm(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ur(t[n], e[n])) return !1;
  return !0;
}
function rm(t, e, n, r, i, s) {
  if (
    ((js = s),
    (Le = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Ou.current = t === null || t.memoizedState === null ? AT : NT),
    (t = n(r, i)),
    Na)
  ) {
    s = 0;
    do {
      if (((Na = !1), (dl = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (dt = it = null),
        (e.updateQueue = null),
        (Ou.current = MT),
        (t = n(r, i));
    } while (Na);
  }
  if (
    ((Ou.current = wc),
    (e = it !== null && it.next !== null),
    (js = 0),
    (dt = it = Le = null),
    (yc = !1),
    e)
  )
    throw Error(M(300));
  return t;
}
function im() {
  var t = dl !== 0;
  return (dl = 0), t;
}
function mr() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return dt === null ? (Le.memoizedState = dt = t) : (dt = dt.next = t), dt;
}
function Xn() {
  if (it === null) {
    var t = Le.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = it.next;
  var e = dt === null ? Le.memoizedState : dt.next;
  if (e !== null) (dt = e), (it = t);
  else {
    if (t === null) throw Error(M(310));
    (it = t),
      (t = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null,
      }),
      dt === null ? (Le.memoizedState = dt = t) : (dt = dt.next = t);
  }
  return dt;
}
function hl(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Jf(t) {
  var e = Xn(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = it,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((js & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (Le.lanes |= c),
          (As |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      ur(r, e.memoizedState) || (en = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Le.lanes |= s), (As |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function ed(t) {
  var e = Xn(),
    n = e.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    ur(s, e.memoizedState) || (en = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function n1() {}
function r1(t, e) {
  var n = Le,
    r = Xn(),
    i = e(),
    s = !ur(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (en = !0)),
    (r = r.queue),
    sm(o1.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (dt !== null && dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pl(9, s1.bind(null, n, r, i, e), void 0, null),
      ht === null)
    )
      throw Error(M(349));
    js & 30 || i1(n, e, i);
  }
  return i;
}
function i1(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Le.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function s1(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), a1(e) && l1(t);
}
function o1(t, e, n) {
  return n(function () {
    a1(e) && l1(t);
  });
}
function a1(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ur(t, n);
  } catch {
    return !0;
  }
}
function l1(t) {
  var e = Qr(t, 1);
  e !== null && ar(e, t, 1, -1);
}
function o0(t) {
  var e = mr();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hl,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = jT.bind(null, Le, t)),
    [e.memoizedState, t]
  );
}
function pl(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Le.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Le.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function u1() {
  return Xn().memoizedState;
}
function Iu(t, e, n, r) {
  var i = mr();
  (Le.flags |= t),
    (i.memoizedState = pl(1 | e, n, void 0, r === void 0 ? null : r));
}
function of(t, e, n, r) {
  var i = Xn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (it !== null) {
    var o = it.memoizedState;
    if (((s = o.destroy), r !== null && nm(r, o.deps))) {
      i.memoizedState = pl(e, n, s, r);
      return;
    }
  }
  (Le.flags |= t), (i.memoizedState = pl(1 | e, n, s, r));
}
function a0(t, e) {
  return Iu(8390656, 8, t, e);
}
function sm(t, e) {
  return of(2048, 8, t, e);
}
function c1(t, e) {
  return of(4, 2, t, e);
}
function f1(t, e) {
  return of(4, 4, t, e);
}
function d1(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function h1(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), of(4, 4, d1.bind(null, e, t), n)
  );
}
function om() {}
function p1(t, e) {
  var n = Xn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && nm(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function m1(t, e) {
  var n = Xn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && nm(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function g1(t, e, n) {
  return js & 21
    ? (ur(n, e) || ((n = yy()), (Le.lanes |= n), (As |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (en = !0)), (t.memoizedState = n));
}
function ET(t, e) {
  var n = me;
  (me = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Zf.transition;
  Zf.transition = {};
  try {
    t(!1), e();
  } finally {
    (me = n), (Zf.transition = r);
  }
}
function x1() {
  return Xn().memoizedState;
}
function CT(t, e, n) {
  var r = ki(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    v1(t))
  )
    y1(e, n);
  else if (((n = Qy(t, e, n, r)), n !== null)) {
    var i = Wt();
    ar(n, t, r, i), w1(n, e, r);
  }
}
function jT(t, e, n) {
  var r = ki(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (v1(t)) y1(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ur(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), qp(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qy(t, e, i, r)),
      n !== null && ((i = Wt()), ar(n, t, r, i), w1(n, e, r));
  }
}
function v1(t) {
  var e = t.alternate;
  return t === Le || (e !== null && e === Le);
}
function y1(t, e) {
  Na = yc = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function w1(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Ip(t, n);
  }
}
var wc = {
    readContext: Wn,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useInsertionEffect: Et,
    useLayoutEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useMutableSource: Et,
    useSyncExternalStore: Et,
    useId: Et,
    unstable_isNewReconciler: !1,
  },
  AT = {
    readContext: Wn,
    useCallback: function (t, e) {
      return (mr().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Wn,
    useEffect: a0,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Iu(4194308, 4, d1.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Iu(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Iu(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = mr();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = mr();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = CT.bind(null, Le, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = mr();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: o0,
    useDebugValue: om,
    useDeferredValue: function (t) {
      return (mr().memoizedState = t);
    },
    useTransition: function () {
      var t = o0(!1),
        e = t[0];
      return (t = ET.bind(null, t[1])), (mr().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Le,
        i = mr();
      if (Ee) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = e()), ht === null)) throw Error(M(349));
        js & 30 || i1(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        a0(o1.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        pl(9, s1.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = mr(),
        e = ht.identifierPrefix;
      if (Ee) {
        var n = Vr,
          r = Fr;
        (n = (r & ~(1 << (32 - or(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = dl++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = PT++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  NT = {
    readContext: Wn,
    useCallback: p1,
    useContext: Wn,
    useEffect: sm,
    useImperativeHandle: h1,
    useInsertionEffect: c1,
    useLayoutEffect: f1,
    useMemo: m1,
    useReducer: Jf,
    useRef: u1,
    useState: function () {
      return Jf(hl);
    },
    useDebugValue: om,
    useDeferredValue: function (t) {
      var e = Xn();
      return g1(e, it.memoizedState, t);
    },
    useTransition: function () {
      var t = Jf(hl)[0],
        e = Xn().memoizedState;
      return [t, e];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: x1,
    unstable_isNewReconciler: !1,
  },
  MT = {
    readContext: Wn,
    useCallback: p1,
    useContext: Wn,
    useEffect: sm,
    useImperativeHandle: h1,
    useInsertionEffect: c1,
    useLayoutEffect: f1,
    useMemo: m1,
    useReducer: ed,
    useRef: u1,
    useState: function () {
      return ed(hl);
    },
    useDebugValue: om,
    useDeferredValue: function (t) {
      var e = Xn();
      return it === null ? (e.memoizedState = t) : g1(e, it.memoizedState, t);
    },
    useTransition: function () {
      var t = ed(hl)[0],
        e = Xn().memoizedState;
      return [t, e];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: x1,
    unstable_isNewReconciler: !1,
  };
function Fo(t, e) {
  try {
    var n = "",
      r = e;
    do (n += o2(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function td(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function mh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var DT = typeof WeakMap == "function" ? WeakMap : Map;
function _1(t, e, n) {
  (n = $r(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Sc || ((Sc = !0), (kh = r)), mh(t, e);
    }),
    n
  );
}
function S1(t, e, n) {
  (n = $r(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        mh(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        mh(t, e),
          typeof r != "function" &&
            (Ti === null ? (Ti = new Set([this])) : Ti.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function l0(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new DT();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = YT.bind(null, t, e, n)), e.then(t, t));
}
function u0(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function c0(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = $r(-1, 1)), (e.tag = 2), bi(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var RT = ei.ReactCurrentOwner,
  en = !1;
function Vt(t, e, n, r) {
  e.child = t === null ? e1(e, null, n, r) : Oo(e, t.child, n, r);
}
function f0(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    ko(e, i),
    (r = rm(t, e, n, r, s, i)),
    (n = im()),
    t !== null && !en
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Kr(t, e, i))
      : (Ee && n && Wp(e), (e.flags |= 1), Vt(t, e, r, i), e.child)
  );
}
function d0(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !pm(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), b1(t, e, s, r, i))
      : ((t = Bu(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ol), n(o, r) && t.ref === e.ref)
    )
      return Kr(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Pi(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function b1(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (ol(s, r) && t.ref === e.ref)
      if (((en = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (en = !0);
      else return (e.lanes = t.lanes), Kr(t, e, i);
  }
  return gh(t, e, n, r, i);
}
function T1(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(fo, vn),
        (vn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          we(fo, vn),
          (vn |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        we(fo, vn),
        (vn |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      we(fo, vn),
      (vn |= r);
  return Vt(t, e, i, n), e.child;
}
function k1(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function gh(t, e, n, r, i) {
  var s = nn(n) ? Es : Rt.current;
  return (
    (s = Ro(e, s)),
    ko(e, i),
    (n = rm(t, e, n, r, s, i)),
    (r = im()),
    t !== null && !en
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Kr(t, e, i))
      : (Ee && r && Wp(e), (e.flags |= 1), Vt(t, e, n, i), e.child)
  );
}
function h0(t, e, n, r, i) {
  if (nn(n)) {
    var s = !0;
    dc(e);
  } else s = !1;
  if ((ko(e, i), e.stateNode === null))
    Fu(t, e), Zy(e, n, r), ph(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Wn(u))
      : ((u = nn(n) ? Es : Rt.current), (u = Ro(e, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && i0(e, o, r, u)),
      (ai = !1);
    var h = e.memoizedState;
    (o.state = h),
      xc(e, r, o, i),
      (l = e.memoizedState),
      a !== r || h !== l || tn.current || ai
        ? (typeof c == "function" && (hh(e, n, c, r), (l = e.memoizedState)),
          (a = ai || r0(e, n, a, r, h, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Ky(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : nr(e.type, a)),
      (o.props = u),
      (d = e.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Wn(l))
        : ((l = nn(n) ? Es : Rt.current), (l = Ro(e, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== l) && i0(e, o, r, l)),
      (ai = !1),
      (h = e.memoizedState),
      (o.state = h),
      xc(e, r, o, i);
    var x = e.memoizedState;
    a !== d || h !== x || tn.current || ai
      ? (typeof p == "function" && (hh(e, n, p, r), (x = e.memoizedState)),
        (u = ai || r0(e, n, u, r, h, x, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return xh(t, e, n, r, s, i);
}
function xh(t, e, n, r, i, s) {
  k1(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Zg(e, n, !1), Kr(t, e, s);
  (r = e.stateNode), (RT.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Oo(e, t.child, null, s)), (e.child = Oo(e, null, a, s)))
      : Vt(t, e, a, s),
    (e.memoizedState = r.state),
    i && Zg(e, n, !0),
    e.child
  );
}
function P1(t) {
  var e = t.stateNode;
  e.pendingContext
    ? qg(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && qg(t, e.context, !1),
    Jp(t, e.containerInfo);
}
function p0(t, e, n, r, i) {
  return Lo(), Yp(i), (e.flags |= 256), Vt(t, e, n, r), e.child;
}
var vh = { dehydrated: null, treeContext: null, retryLane: 0 };
function yh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function E1(t, e, n) {
  var r = e.pendingProps,
    i = Ne.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    we(Ne, i & 1),
    t === null)
  )
    return (
      fh(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = uf(o, r, 0, null)),
              (t = ys(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = yh(n)),
              (e.memoizedState = vh),
              t)
            : am(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return LT(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = Pi(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Pi(a, s)) : ((s = ys(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? yh(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = vh),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = Pi(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function am(t, e) {
  return (
    (e = uf({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function ou(t, e, n, r) {
  return (
    r !== null && Yp(r),
    Oo(e, t.child, null, n),
    (t = am(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function LT(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = td(Error(M(422)))), ou(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = uf({ mode: "visible", children: r.children }, i, 0, null)),
        (s = ys(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Oo(e, t.child, null, o),
        (e.child.memoizedState = yh(o)),
        (e.memoizedState = vh),
        s);
  if (!(e.mode & 1)) return ou(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(M(419))), (r = td(s, r, void 0)), ou(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), en || a)) {
    if (((r = ht), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Qr(t, i), ar(r, t, i, -1));
    }
    return hm(), (r = td(Error(M(421)))), ou(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = GT.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (bn = Si(i.nextSibling)),
      (Tn = e),
      (Ee = !0),
      (ir = null),
      t !== null &&
        ((Rn[Ln++] = Fr),
        (Rn[Ln++] = Vr),
        (Rn[Ln++] = Cs),
        (Fr = t.id),
        (Vr = t.overflow),
        (Cs = e)),
      (e = am(e, r.children)),
      (e.flags |= 4096),
      e);
}
function m0(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), dh(t.return, e, n);
}
function nd(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function C1(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Vt(t, e, r.children, n), (r = Ne.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && m0(t, n, e);
        else if (t.tag === 19) m0(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((we(Ne, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && vc(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          nd(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && vc(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        nd(e, !0, n, null, s);
        break;
      case "together":
        nd(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Fu(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Kr(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (As |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(M(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Pi(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Pi(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function OT(t, e, n) {
  switch (e.tag) {
    case 3:
      P1(e), Lo();
      break;
    case 5:
      t1(e);
      break;
    case 1:
      nn(e.type) && dc(e);
      break;
    case 4:
      Jp(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      we(mc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Ne, Ne.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? E1(t, e, n)
          : (we(Ne, Ne.current & 1),
            (t = Kr(t, e, n)),
            t !== null ? t.sibling : null);
      we(Ne, Ne.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return C1(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        we(Ne, Ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), T1(t, e, n);
  }
  return Kr(t, e, n);
}
var j1, wh, A1, N1;
j1 = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wh = function () {};
A1 = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), ps(Sr.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ud(t, i)), (r = Ud(t, r)), (s = []);
        break;
      case "select":
        (i = Oe({}, i, { value: void 0 })),
          (r = Oe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Wd(t, i)), (r = Wd(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = cc);
    }
    Yd(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ja.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ja.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && _e("scroll", t),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
N1 = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function la(t, e) {
  if (!Ee)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ct(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function IT(t, e, n) {
  var r = e.pendingProps;
  switch ((Xp(e), e.tag)) {
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
      return Ct(e), null;
    case 1:
      return nn(e.type) && fc(), Ct(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Io(),
        Te(tn),
        Te(Rt),
        tm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (iu(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), ir !== null && (Ch(ir), (ir = null)))),
        wh(t, e),
        Ct(e),
        null
      );
    case 5:
      em(e);
      var i = ps(fl.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        A1(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(M(166));
          return Ct(e), null;
        }
        if (((t = ps(Sr.current)), iu(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[vr] = e), (r[ul] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              _e("cancel", r), _e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              _e("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ya.length; i++) _e(ya[i], r);
              break;
            case "source":
              _e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              _e("error", r), _e("load", r);
              break;
            case "details":
              _e("toggle", r);
              break;
            case "input":
              Tg(r, s), _e("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                _e("invalid", r);
              break;
            case "textarea":
              Pg(r, s), _e("invalid", r);
          }
          Yd(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ru(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ru(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : Ja.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  _e("scroll", r);
            }
          switch (n) {
            case "input":
              Ql(r), kg(r, s, !0);
              break;
            case "textarea":
              Ql(r), Eg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cc);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = iy(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[vr] = e),
            (t[ul] = r),
            j1(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Gd(n, r)), n)) {
              case "dialog":
                _e("cancel", t), _e("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ya.length; i++) _e(ya[i], t);
                i = r;
                break;
              case "source":
                _e("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                _e("error", t), _e("load", t), (i = r);
                break;
              case "details":
                _e("toggle", t), (i = r);
                break;
              case "input":
                Tg(t, r), (i = Ud(t, r)), _e("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Oe({}, r, { value: void 0 })),
                  _e("invalid", t);
                break;
              case "textarea":
                Pg(t, r), (i = Wd(t, r)), _e("invalid", t);
                break;
              default:
                i = r;
            }
            Yd(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ay(t, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && sy(t, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && el(t, l)
                    : typeof l == "number" && el(t, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Ja.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && _e("scroll", t)
                      : l != null && Np(t, s, l, o));
              }
            switch (n) {
              case "input":
                Ql(t), kg(t, r, !1);
                break;
              case "textarea":
                Ql(t), Eg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Di(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? _o(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      _o(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = cc);
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
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ct(e), null;
    case 6:
      if (t && e.stateNode != null) N1(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(M(166));
        if (((n = ps(fl.current)), ps(Sr.current), iu(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[vr] = e),
            (s = r.nodeValue !== n) && ((t = Tn), t !== null))
          )
            switch (t.tag) {
              case 3:
                ru(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  ru(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vr] = e),
            (e.stateNode = r);
      }
      return Ct(e), null;
    case 13:
      if (
        (Te(Ne),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Ee && bn !== null && e.mode & 1 && !(e.flags & 128))
          Gy(), Lo(), (e.flags |= 98560), (s = !1);
        else if (((s = iu(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[vr] = e;
          } else
            Lo(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ct(e), (s = !1);
        } else ir !== null && (Ch(ir), (ir = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Ne.current & 1 ? ot === 0 && (ot = 3) : hm())),
          e.updateQueue !== null && (e.flags |= 4),
          Ct(e),
          null);
    case 4:
      return (
        Io(), wh(t, e), t === null && al(e.stateNode.containerInfo), Ct(e), null
      );
    case 10:
      return Kp(e.type._context), Ct(e), null;
    case 17:
      return nn(e.type) && fc(), Ct(e), null;
    case 19:
      if ((Te(Ne), (s = e.memoizedState), s === null)) return Ct(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) la(s, !1);
        else {
          if (ot !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = vc(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    la(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return we(Ne, (Ne.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Ye() > Vo &&
            ((e.flags |= 128), (r = !0), la(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = vc(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              la(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Ee)
            )
              return Ct(e), null;
          } else
            2 * Ye() - s.renderingStartTime > Vo &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), la(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Ye()),
          (e.sibling = null),
          (n = Ne.current),
          we(Ne, r ? (n & 1) | 2 : n & 1),
          e)
        : (Ct(e), null);
    case 22:
    case 23:
      return (
        dm(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? vn & 1073741824 && (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ct(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, e.tag));
}
function FT(t, e) {
  switch ((Xp(e), e.tag)) {
    case 1:
      return (
        nn(e.type) && fc(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Io(),
        Te(tn),
        Te(Rt),
        tm(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return em(e), null;
    case 13:
      if (
        (Te(Ne), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(M(340));
        Lo();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Te(Ne), null;
    case 4:
      return Io(), null;
    case 10:
      return Kp(e.type._context), null;
    case 22:
    case 23:
      return dm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var au = !1,
  At = !1,
  VT = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function co(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(t, e, r);
      }
    else n.current = null;
}
function _h(t, e, n) {
  try {
    n();
  } catch (r) {
    Ve(t, e, r);
  }
}
var g0 = !1;
function zT(t, e) {
  if (((ih = ac), (t = Ly()), Hp(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = t,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === t) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++c === r && (l = o),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sh = { focusedElem: t, selectionRange: n }, ac = !1, z = e; z !== null; )
    if (((e = z), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (z = t);
    else
      for (; z !== null; ) {
        e = z;
        try {
          var x = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    _ = x.memoizedState,
                    y = e.stateNode,
                    m = y.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : nr(e.type, g),
                      _
                    );
                  y.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (w) {
          Ve(e, e.return, w);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (z = t);
          break;
        }
        z = e.return;
      }
  return (x = g0), (g0 = !1), x;
}
function Ma(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && _h(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function af(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Sh(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function M1(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), M1(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[vr], delete e[ul], delete e[lh], delete e[ST], delete e[bT])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function D1(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function x0(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || D1(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function bh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = cc));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (bh(t, e, n), t = t.sibling; t !== null; ) bh(t, e, n), (t = t.sibling);
}
function Th(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Th(t, e, n), t = t.sibling; t !== null; ) Th(t, e, n), (t = t.sibling);
}
var wt = null,
  rr = !1;
function ri(t, e, n) {
  for (n = n.child; n !== null; ) R1(t, e, n), (n = n.sibling);
}
function R1(t, e, n) {
  if (_r && typeof _r.onCommitFiberUnmount == "function")
    try {
      _r.onCommitFiberUnmount(Zc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      At || co(n, e);
    case 6:
      var r = wt,
        i = rr;
      (wt = null),
        ri(t, e, n),
        (wt = r),
        (rr = i),
        wt !== null &&
          (rr
            ? ((t = wt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        (rr
          ? ((t = wt),
            (n = n.stateNode),
            t.nodeType === 8
              ? Qf(t.parentNode, n)
              : t.nodeType === 1 && Qf(t, n),
            il(t))
          : Qf(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (i = rr),
        (wt = n.stateNode.containerInfo),
        (rr = !0),
        ri(t, e, n),
        (wt = r),
        (rr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !At &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && _h(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      ri(t, e, n);
      break;
    case 1:
      if (
        !At &&
        (co(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ve(n, e, a);
        }
      ri(t, e, n);
      break;
    case 21:
      ri(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((At = (r = At) || n.memoizedState !== null), ri(t, e, n), (At = r))
        : ri(t, e, n);
      break;
    default:
      ri(t, e, n);
  }
}
function v0(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new VT()),
      e.forEach(function (r) {
        var i = QT.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function er(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (wt = a.stateNode), (rr = !1);
              break e;
            case 3:
              (wt = a.stateNode.containerInfo), (rr = !0);
              break e;
            case 4:
              (wt = a.stateNode.containerInfo), (rr = !0);
              break e;
          }
          a = a.return;
        }
        if (wt === null) throw Error(M(160));
        R1(s, o, i), (wt = null), (rr = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Ve(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) L1(e, t), (e = e.sibling);
}
function L1(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((er(e, t), pr(t), r & 4)) {
        try {
          Ma(3, t, t.return), af(3, t);
        } catch (g) {
          Ve(t, t.return, g);
        }
        try {
          Ma(5, t, t.return);
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      break;
    case 1:
      er(e, t), pr(t), r & 512 && n !== null && co(n, n.return);
      break;
    case 5:
      if (
        (er(e, t),
        pr(t),
        r & 512 && n !== null && co(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          el(i, "");
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && ny(i, s),
              Gd(a, o);
            var u = Gd(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? ay(i, d)
                : c === "dangerouslySetInnerHTML"
                ? sy(i, d)
                : c === "children"
                ? el(i, d)
                : Np(i, c, d, u);
            }
            switch (a) {
              case "input":
                $d(i, s);
                break;
              case "textarea":
                ry(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? _o(i, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? _o(i, !!s.multiple, s.defaultValue, !0)
                      : _o(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ul] = s;
          } catch (g) {
            Ve(t, t.return, g);
          }
      }
      break;
    case 6:
      if ((er(e, t), pr(t), r & 4)) {
        if (t.stateNode === null) throw Error(M(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (g) {
          Ve(t, t.return, g);
        }
      }
      break;
    case 3:
      if (
        (er(e, t), pr(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(e.containerInfo);
        } catch (g) {
          Ve(t, t.return, g);
        }
      break;
    case 4:
      er(e, t), pr(t);
      break;
    case 13:
      er(e, t),
        pr(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (cm = Ye())),
        r & 4 && v0(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((At = (u = At) || c), er(e, t), (At = u)) : er(e, t),
        pr(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (z = t, c = t.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((h = z), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ma(4, h, h.return);
                  break;
                case 1:
                  co(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (e = r),
                        (x.props = e.memoizedProps),
                        (x.state = e.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      Ve(r, n, g);
                    }
                  }
                  break;
                case 5:
                  co(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    w0(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (z = p)) : w0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = t; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = oy("display", o)));
              } catch (g) {
                Ve(t, t.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Ve(t, t.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === t) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === t) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === t) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      er(e, t), pr(t), r & 4 && v0(t);
      break;
    case 21:
      break;
    default:
      er(e, t), pr(t);
  }
}
function pr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (D1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (el(i, ""), (r.flags &= -33));
          var s = x0(t);
          Th(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = x0(t);
          bh(t, a, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function BT(t, e, n) {
  (z = t), O1(t);
}
function O1(t, e, n) {
  for (var r = (t.mode & 1) !== 0; z !== null; ) {
    var i = z,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || au;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || At;
        a = au;
        var u = At;
        if (((au = o), (At = l) && !u))
          for (z = i; z !== null; )
            (o = z),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? _0(i)
                : l !== null
                ? ((l.return = o), (z = l))
                : _0(i);
        for (; s !== null; ) (z = s), O1(s), (s = s.sibling);
        (z = i), (au = a), (At = u);
      }
      y0(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (z = s)) : y0(t);
  }
}
function y0(t) {
  for (; z !== null; ) {
    var e = z;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              At || af(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !At)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : nr(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && n0(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                n0(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && il(d);
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
              throw Error(M(163));
          }
        At || (e.flags & 512 && Sh(e));
      } catch (h) {
        Ve(e, e.return, h);
      }
    }
    if (e === t) {
      z = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (z = n);
      break;
    }
    z = e.return;
  }
}
function w0(t) {
  for (; z !== null; ) {
    var e = z;
    if (e === t) {
      z = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (z = n);
      break;
    }
    z = e.return;
  }
}
function _0(t) {
  for (; z !== null; ) {
    var e = z;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            af(4, e);
          } catch (l) {
            Ve(e, n, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(e, i, l);
            }
          }
          var s = e.return;
          try {
            Sh(e);
          } catch (l) {
            Ve(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Sh(e);
          } catch (l) {
            Ve(e, o, l);
          }
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    if (e === t) {
      z = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (z = a);
      break;
    }
    z = e.return;
  }
}
var UT = Math.ceil,
  _c = ei.ReactCurrentDispatcher,
  lm = ei.ReactCurrentOwner,
  Un = ei.ReactCurrentBatchConfig,
  de = 0,
  ht = null,
  et = null,
  bt = 0,
  vn = 0,
  fo = Bi(0),
  ot = 0,
  ml = null,
  As = 0,
  lf = 0,
  um = 0,
  Da = null,
  Zt = null,
  cm = 0,
  Vo = 1 / 0,
  Mr = null,
  Sc = !1,
  kh = null,
  Ti = null,
  lu = !1,
  di = null,
  bc = 0,
  Ra = 0,
  Ph = null,
  Vu = -1,
  zu = 0;
function Wt() {
  return de & 6 ? Ye() : Vu !== -1 ? Vu : (Vu = Ye());
}
function ki(t) {
  return t.mode & 1
    ? de & 2 && bt !== 0
      ? bt & -bt
      : kT.transition !== null
      ? (zu === 0 && (zu = yy()), zu)
      : ((t = me),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Py(t.type))),
        t)
    : 1;
}
function ar(t, e, n, r) {
  if (50 < Ra) throw ((Ra = 0), (Ph = null), Error(M(185)));
  Ml(t, n, r),
    (!(de & 2) || t !== ht) &&
      (t === ht && (!(de & 2) && (lf |= n), ot === 4 && ci(t, bt)),
      rn(t, r),
      n === 1 && de === 0 && !(e.mode & 1) && ((Vo = Ye() + 500), rf && Ui()));
}
function rn(t, e) {
  var n = t.callbackNode;
  k2(t, e);
  var r = oc(t, t === ht ? bt : 0);
  if (r === 0)
    n !== null && Ag(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Ag(n), e === 1))
      t.tag === 0 ? TT(S0.bind(null, t)) : Wy(S0.bind(null, t)),
        wT(function () {
          !(de & 6) && Ui();
        }),
        (n = null);
    else {
      switch (wy(r)) {
        case 1:
          n = Op;
          break;
        case 4:
          n = xy;
          break;
        case 16:
          n = sc;
          break;
        case 536870912:
          n = vy;
          break;
        default:
          n = sc;
      }
      n = H1(n, I1.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function I1(t, e) {
  if (((Vu = -1), (zu = 0), de & 6)) throw Error(M(327));
  var n = t.callbackNode;
  if (Po() && t.callbackNode !== n) return null;
  var r = oc(t, t === ht ? bt : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Tc(t, r);
  else {
    e = r;
    var i = de;
    de |= 2;
    var s = V1();
    (ht !== t || bt !== e) && ((Mr = null), (Vo = Ye() + 500), vs(t, e));
    do
      try {
        WT();
        break;
      } catch (a) {
        F1(t, a);
      }
    while (1);
    Qp(),
      (_c.current = s),
      (de = i),
      et !== null ? (e = 0) : ((ht = null), (bt = 0), (e = ot));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Jd(t)), i !== 0 && ((r = i), (e = Eh(t, i)))), e === 1)
    )
      throw ((n = ml), vs(t, 0), ci(t, r), rn(t, Ye()), n);
    if (e === 6) ci(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !$T(i) &&
          ((e = Tc(t, r)),
          e === 2 && ((s = Jd(t)), s !== 0 && ((r = s), (e = Eh(t, s)))),
          e === 1))
      )
        throw ((n = ml), vs(t, 0), ci(t, r), rn(t, Ye()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          os(t, Zt, Mr);
          break;
        case 3:
          if (
            (ci(t, r), (r & 130023424) === r && ((e = cm + 500 - Ye()), 10 < e))
          ) {
            if (oc(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Wt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = ah(os.bind(null, t, Zt, Mr), e);
            break;
          }
          os(t, Zt, Mr);
          break;
        case 4:
          if ((ci(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - or(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ye() - r),
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
                : 1960 * UT(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = ah(os.bind(null, t, Zt, Mr), r);
            break;
          }
          os(t, Zt, Mr);
          break;
        case 5:
          os(t, Zt, Mr);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return rn(t, Ye()), t.callbackNode === n ? I1.bind(null, t) : null;
}
function Eh(t, e) {
  var n = Da;
  return (
    t.current.memoizedState.isDehydrated && (vs(t, e).flags |= 256),
    (t = Tc(t, e)),
    t !== 2 && ((e = Zt), (Zt = n), e !== null && Ch(e)),
    t
  );
}
function Ch(t) {
  Zt === null ? (Zt = t) : Zt.push.apply(Zt, t);
}
function $T(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ur(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function ci(t, e) {
  for (
    e &= ~um,
      e &= ~lf,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - or(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function S0(t) {
  if (de & 6) throw Error(M(327));
  Po();
  var e = oc(t, 0);
  if (!(e & 1)) return rn(t, Ye()), null;
  var n = Tc(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Jd(t);
    r !== 0 && ((e = r), (n = Eh(t, r)));
  }
  if (n === 1) throw ((n = ml), vs(t, 0), ci(t, e), rn(t, Ye()), n);
  if (n === 6) throw Error(M(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    os(t, Zt, Mr),
    rn(t, Ye()),
    null
  );
}
function fm(t, e) {
  var n = de;
  de |= 1;
  try {
    return t(e);
  } finally {
    (de = n), de === 0 && ((Vo = Ye() + 500), rf && Ui());
  }
}
function Ns(t) {
  di !== null && di.tag === 0 && !(de & 6) && Po();
  var e = de;
  de |= 1;
  var n = Un.transition,
    r = me;
  try {
    if (((Un.transition = null), (me = 1), t)) return t();
  } finally {
    (me = r), (Un.transition = n), (de = e), !(de & 6) && Ui();
  }
}
function dm() {
  (vn = fo.current), Te(fo);
}
function vs(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), yT(n)), et !== null))
    for (n = et.return; n !== null; ) {
      var r = n;
      switch ((Xp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fc();
          break;
        case 3:
          Io(), Te(tn), Te(Rt), tm();
          break;
        case 5:
          em(r);
          break;
        case 4:
          Io();
          break;
        case 13:
          Te(Ne);
          break;
        case 19:
          Te(Ne);
          break;
        case 10:
          Kp(r.type._context);
          break;
        case 22:
        case 23:
          dm();
      }
      n = n.return;
    }
  if (
    ((ht = t),
    (et = t = Pi(t.current, null)),
    (bt = vn = e),
    (ot = 0),
    (ml = null),
    (um = lf = As = 0),
    (Zt = Da = null),
    hs !== null)
  ) {
    for (e = 0; e < hs.length; e++)
      if (((n = hs[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    hs = null;
  }
  return t;
}
function F1(t, e) {
  do {
    var n = et;
    try {
      if ((Qp(), (Ou.current = wc), yc)) {
        for (var r = Le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        yc = !1;
      }
      if (
        ((js = 0),
        (dt = it = Le = null),
        (Na = !1),
        (dl = 0),
        (lm.current = null),
        n === null || n.return === null)
      ) {
        (ot = 1), (ml = e), (et = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          l = e;
        if (
          ((e = bt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = u0(o);
          if (p !== null) {
            (p.flags &= -257),
              c0(p, o, a, s, e),
              p.mode & 1 && l0(s, u, e),
              (e = p),
              (l = u);
            var x = e.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(l), (e.updateQueue = g);
            } else x.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              l0(s, u, e), hm();
              break e;
            }
            l = Error(M(426));
          }
        } else if (Ee && a.mode & 1) {
          var _ = u0(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              c0(_, o, a, s, e),
              Yp(Fo(l, a));
            break e;
          }
        }
        (s = l = Fo(l, a)),
          ot !== 4 && (ot = 2),
          Da === null ? (Da = [s]) : Da.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var y = _1(s, l, e);
              t0(s, y);
              break e;
            case 1:
              a = l;
              var m = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Ti === null || !Ti.has(v))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var w = S1(s, a, e);
                t0(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      B1(n);
    } catch (S) {
      (e = S), et === n && n !== null && (et = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function V1() {
  var t = _c.current;
  return (_c.current = wc), t === null ? wc : t;
}
function hm() {
  (ot === 0 || ot === 3 || ot === 2) && (ot = 4),
    ht === null || (!(As & 268435455) && !(lf & 268435455)) || ci(ht, bt);
}
function Tc(t, e) {
  var n = de;
  de |= 2;
  var r = V1();
  (ht !== t || bt !== e) && ((Mr = null), vs(t, e));
  do
    try {
      HT();
      break;
    } catch (i) {
      F1(t, i);
    }
  while (1);
  if ((Qp(), (de = n), (_c.current = r), et !== null)) throw Error(M(261));
  return (ht = null), (bt = 0), ot;
}
function HT() {
  for (; et !== null; ) z1(et);
}
function WT() {
  for (; et !== null && !g2(); ) z1(et);
}
function z1(t) {
  var e = $1(t.alternate, t, vn);
  (t.memoizedProps = t.pendingProps),
    e === null ? B1(t) : (et = e),
    (lm.current = null);
}
function B1(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = FT(n, e)), n !== null)) {
        (n.flags &= 32767), (et = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ot = 6), (et = null);
        return;
      }
    } else if (((n = IT(n, e, vn)), n !== null)) {
      et = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      et = e;
      return;
    }
    et = e = t;
  } while (e !== null);
  ot === 0 && (ot = 5);
}
function os(t, e, n) {
  var r = me,
    i = Un.transition;
  try {
    (Un.transition = null), (me = 1), XT(t, e, n, r);
  } finally {
    (Un.transition = i), (me = r);
  }
  return null;
}
function XT(t, e, n, r) {
  do Po();
  while (di !== null);
  if (de & 6) throw Error(M(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(M(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (P2(t, s),
    t === ht && ((et = ht = null), (bt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      lu ||
      ((lu = !0),
      H1(sc, function () {
        return Po(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Un.transition), (Un.transition = null);
    var o = me;
    me = 1;
    var a = de;
    (de |= 4),
      (lm.current = null),
      zT(t, n),
      L1(n, t),
      dT(sh),
      (ac = !!ih),
      (sh = ih = null),
      (t.current = n),
      BT(n),
      x2(),
      (de = a),
      (me = o),
      (Un.transition = s);
  } else t.current = n;
  if (
    (lu && ((lu = !1), (di = t), (bc = i)),
    (s = t.pendingLanes),
    s === 0 && (Ti = null),
    w2(n.stateNode),
    rn(t, Ye()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Sc) throw ((Sc = !1), (t = kh), (kh = null), t);
  return (
    bc & 1 && t.tag !== 0 && Po(),
    (s = t.pendingLanes),
    s & 1 ? (t === Ph ? Ra++ : ((Ra = 0), (Ph = t))) : (Ra = 0),
    Ui(),
    null
  );
}
function Po() {
  if (di !== null) {
    var t = wy(bc),
      e = Un.transition,
      n = me;
    try {
      if (((Un.transition = null), (me = 16 > t ? 16 : t), di === null))
        var r = !1;
      else {
        if (((t = di), (di = null), (bc = 0), de & 6)) throw Error(M(331));
        var i = de;
        for (de |= 4, z = t.current; z !== null; ) {
          var s = z,
            o = s.child;
          if (z.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ma(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var h = c.sibling,
                        p = c.return;
                      if ((M1(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (z = h);
                        break;
                      }
                      z = p;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              z = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (z = o);
          else
            e: for (; z !== null; ) {
              if (((s = z), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ma(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (z = y);
                break e;
              }
              z = s.return;
            }
        }
        var m = t.current;
        for (z = m; z !== null; ) {
          o = z;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (z = v);
          else
            e: for (o = m; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      af(9, a);
                  }
                } catch (S) {
                  Ve(a, a.return, S);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (z = w);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((de = i), Ui(), _r && typeof _r.onPostCommitFiberRoot == "function")
        )
          try {
            _r.onPostCommitFiberRoot(Zc, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (me = n), (Un.transition = e);
    }
  }
  return !1;
}
function b0(t, e, n) {
  (e = Fo(n, e)),
    (e = _1(t, e, 1)),
    (t = bi(t, e, 1)),
    (e = Wt()),
    t !== null && (Ml(t, 1, e), rn(t, e));
}
function Ve(t, e, n) {
  if (t.tag === 3) b0(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        b0(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ti === null || !Ti.has(r)))
        ) {
          (t = Fo(n, t)),
            (t = S1(e, t, 1)),
            (e = bi(e, t, 1)),
            (t = Wt()),
            e !== null && (Ml(e, 1, t), rn(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function YT(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Wt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    ht === t &&
      (bt & n) === n &&
      (ot === 4 || (ot === 3 && (bt & 130023424) === bt && 500 > Ye() - cm)
        ? vs(t, 0)
        : (um |= n)),
    rn(t, e);
}
function U1(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Zl), (Zl <<= 1), !(Zl & 130023424) && (Zl = 4194304))
      : (e = 1));
  var n = Wt();
  (t = Qr(t, e)), t !== null && (Ml(t, e, n), rn(t, n));
}
function GT(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), U1(t, n);
}
function QT(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(e), U1(t, n);
}
var $1;
$1 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || tn.current) en = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (en = !1), OT(t, e, n);
      en = !!(t.flags & 131072);
    }
  else (en = !1), Ee && e.flags & 1048576 && Xy(e, pc, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Fu(t, e), (t = e.pendingProps);
      var i = Ro(e, Rt.current);
      ko(e, n), (i = rm(null, e, r, t, i, n));
      var s = im();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            nn(r) ? ((s = !0), dc(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Zp(e),
            (i.updater = sf),
            (e.stateNode = i),
            (i._reactInternals = e),
            ph(e, r, t, n),
            (e = xh(null, e, r, !0, s, n)))
          : ((e.tag = 0), Ee && s && Wp(e), Vt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Fu(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = qT(r)),
          (t = nr(r, t)),
          i)
        ) {
          case 0:
            e = gh(null, e, r, t, n);
            break e;
          case 1:
            e = h0(null, e, r, t, n);
            break e;
          case 11:
            e = f0(null, e, r, t, n);
            break e;
          case 14:
            e = d0(null, e, r, nr(r.type, t), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : nr(r, i)),
        gh(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : nr(r, i)),
        h0(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((P1(e), t === null)) throw Error(M(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Ky(t, e),
          xc(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = Fo(Error(M(423)), e)), (e = p0(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Fo(Error(M(424)), e)), (e = p0(t, e, r, n, i));
            break e;
          } else
            for (
              bn = Si(e.stateNode.containerInfo.firstChild),
                Tn = e,
                Ee = !0,
                ir = null,
                n = e1(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Lo(), r === i)) {
            e = Kr(t, e, n);
            break e;
          }
          Vt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        t1(e),
        t === null && fh(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        oh(r, i) ? (o = null) : s !== null && oh(r, s) && (e.flags |= 32),
        k1(t, e),
        Vt(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && fh(e), null;
    case 13:
      return E1(t, e, n);
    case 4:
      return (
        Jp(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Oo(e, null, r, n)) : Vt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : nr(r, i)),
        f0(t, e, r, i, n)
      );
    case 7:
      return Vt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Vt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Vt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          we(mc, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ur(s.value, o)) {
            if (s.children === i.children && !tn.current) {
              e = Kr(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = $r(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      dh(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(M(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  dh(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Vt(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        ko(e, n),
        (i = Wn(i)),
        (r = r(i)),
        (e.flags |= 1),
        Vt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = nr(r, e.pendingProps)),
        (i = nr(r.type, i)),
        d0(t, e, r, i, n)
      );
    case 15:
      return b1(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : nr(r, i)),
        Fu(t, e),
        (e.tag = 1),
        nn(r) ? ((t = !0), dc(e)) : (t = !1),
        ko(e, n),
        Zy(e, r, i),
        ph(e, r, i, n),
        xh(null, e, r, !0, t, n)
      );
    case 19:
      return C1(t, e, n);
    case 22:
      return T1(t, e, n);
  }
  throw Error(M(156, e.tag));
};
function H1(t, e) {
  return gy(t, e);
}
function KT(t, e, n, r) {
  (this.tag = t),
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
    (this.pendingProps = e),
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
function Fn(t, e, n, r) {
  return new KT(t, e, n, r);
}
function pm(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function qT(t) {
  if (typeof t == "function") return pm(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Dp)) return 11;
    if (t === Rp) return 14;
  }
  return 2;
}
function Pi(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Fn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Bu(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) pm(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case to:
        return ys(n.children, i, s, e);
      case Mp:
        (o = 8), (i |= 8);
        break;
      case Fd:
        return (
          (t = Fn(12, n, e, i | 2)), (t.elementType = Fd), (t.lanes = s), t
        );
      case Vd:
        return (t = Fn(13, n, e, i)), (t.elementType = Vd), (t.lanes = s), t;
      case zd:
        return (t = Fn(19, n, e, i)), (t.elementType = zd), (t.lanes = s), t;
      case Jv:
        return uf(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case qv:
              o = 10;
              break e;
            case Zv:
              o = 9;
              break e;
            case Dp:
              o = 11;
              break e;
            case Rp:
              o = 14;
              break e;
            case oi:
              (o = 16), (r = null);
              break e;
          }
        throw Error(M(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Fn(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function ys(t, e, n, r) {
  return (t = Fn(7, t, r, e)), (t.lanes = n), t;
}
function uf(t, e, n, r) {
  return (
    (t = Fn(22, t, r, e)),
    (t.elementType = Jv),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function rd(t, e, n) {
  return (t = Fn(6, t, null, e)), (t.lanes = n), t;
}
function id(t, e, n) {
  return (
    (e = Fn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function ZT(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ff(0)),
    (this.expirationTimes = Ff(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ff(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function mm(t, e, n, r, i, s, o, a, l) {
  return (
    (t = new ZT(t, e, n, a, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Fn(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zp(s),
    t
  );
}
function JT(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: eo,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function W1(t) {
  if (!t) return Ri;
  t = t._reactInternals;
  e: {
    if (Fs(t) !== t || t.tag !== 1) throw Error(M(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (nn(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(M(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (nn(n)) return Hy(t, n, e);
  }
  return e;
}
function X1(t, e, n, r, i, s, o, a, l) {
  return (
    (t = mm(n, r, !0, t, i, s, o, a, l)),
    (t.context = W1(null)),
    (n = t.current),
    (r = Wt()),
    (i = ki(n)),
    (s = $r(r, i)),
    (s.callback = e ?? null),
    bi(n, s, i),
    (t.current.lanes = i),
    Ml(t, i, r),
    rn(t, r),
    t
  );
}
function cf(t, e, n, r) {
  var i = e.current,
    s = Wt(),
    o = ki(i);
  return (
    (n = W1(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = $r(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = bi(i, e, o)),
    t !== null && (ar(t, i, o, s), Lu(t, i, o)),
    o
  );
}
function kc(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function T0(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function gm(t, e) {
  T0(t, e), (t = t.alternate) && T0(t, e);
}
function ek() {
  return null;
}
var Y1 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function xm(t) {
  this._internalRoot = t;
}
ff.prototype.render = xm.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(M(409));
  cf(t, e, null, null);
};
ff.prototype.unmount = xm.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Ns(function () {
      cf(null, t, null, null);
    }),
      (e[Gr] = null);
  }
};
function ff(t) {
  this._internalRoot = t;
}
ff.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = by();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ui.length && e !== 0 && e < ui[n].priority; n++);
    ui.splice(n, 0, t), n === 0 && ky(t);
  }
};
function vm(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function df(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function k0() {}
function tk(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = kc(o);
        s.call(u);
      };
    }
    var o = X1(e, r, t, 0, null, !1, !1, "", k0);
    return (
      (t._reactRootContainer = o),
      (t[Gr] = o.current),
      al(t.nodeType === 8 ? t.parentNode : t),
      Ns(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = kc(l);
      a.call(u);
    };
  }
  var l = mm(t, 0, !1, null, null, !1, !1, "", k0);
  return (
    (t._reactRootContainer = l),
    (t[Gr] = l.current),
    al(t.nodeType === 8 ? t.parentNode : t),
    Ns(function () {
      cf(e, l, n, r);
    }),
    l
  );
}
function hf(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = kc(o);
        a.call(l);
      };
    }
    cf(e, o, t, i);
  } else o = tk(n, e, t, i, r);
  return kc(o);
}
_y = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = va(e.pendingLanes);
        n !== 0 &&
          (Ip(e, n | 1), rn(e, Ye()), !(de & 6) && ((Vo = Ye() + 500), Ui()));
      }
      break;
    case 13:
      Ns(function () {
        var r = Qr(t, 1);
        if (r !== null) {
          var i = Wt();
          ar(r, t, 1, i);
        }
      }),
        gm(t, 1);
  }
};
Fp = function (t) {
  if (t.tag === 13) {
    var e = Qr(t, 134217728);
    if (e !== null) {
      var n = Wt();
      ar(e, t, 134217728, n);
    }
    gm(t, 134217728);
  }
};
Sy = function (t) {
  if (t.tag === 13) {
    var e = ki(t),
      n = Qr(t, e);
    if (n !== null) {
      var r = Wt();
      ar(n, t, e, r);
    }
    gm(t, e);
  }
};
by = function () {
  return me;
};
Ty = function (t, e) {
  var n = me;
  try {
    return (me = t), e();
  } finally {
    me = n;
  }
};
Kd = function (t, e, n) {
  switch (e) {
    case "input":
      if (($d(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = nf(r);
            if (!i) throw Error(M(90));
            ty(r), $d(r, i);
          }
        }
      }
      break;
    case "textarea":
      ry(t, n);
      break;
    case "select":
      (e = n.value), e != null && _o(t, !!n.multiple, e, !1);
  }
};
cy = fm;
fy = Ns;
var nk = { usingClientEntryPoint: !1, Events: [Rl, so, nf, ly, uy, fm] },
  ua = {
    findFiberByHostInstance: ds,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  rk = {
    bundleType: ua.bundleType,
    version: ua.version,
    rendererPackageName: ua.rendererPackageName,
    rendererConfig: ua.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ei.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = py(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: ua.findFiberByHostInstance || ek,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uu.isDisabled && uu.supportsFiber)
    try {
      (Zc = uu.inject(rk)), (_r = uu);
    } catch {}
}
jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nk;
jn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vm(e)) throw Error(M(200));
  return JT(t, e, null, n);
};
jn.createRoot = function (t, e) {
  if (!vm(t)) throw Error(M(299));
  var n = !1,
    r = "",
    i = Y1;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = mm(t, 1, !1, null, null, n, !1, r, i)),
    (t[Gr] = e.current),
    al(t.nodeType === 8 ? t.parentNode : t),
    new xm(e)
  );
};
jn.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(M(188))
      : ((t = Object.keys(t).join(",")), Error(M(268, t)));
  return (t = py(e)), (t = t === null ? null : t.stateNode), t;
};
jn.flushSync = function (t) {
  return Ns(t);
};
jn.hydrate = function (t, e, n) {
  if (!df(e)) throw Error(M(200));
  return hf(null, t, e, !0, n);
};
jn.hydrateRoot = function (t, e, n) {
  if (!vm(t)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Y1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = X1(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Gr] = e.current),
    al(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new ff(e);
};
jn.render = function (t, e, n) {
  if (!df(e)) throw Error(M(200));
  return hf(null, t, e, !1, n);
};
jn.unmountComponentAtNode = function (t) {
  if (!df(t)) throw Error(M(40));
  return t._reactRootContainer
    ? (Ns(function () {
        hf(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Gr] = null);
        });
      }),
      !0)
    : !1;
};
jn.unstable_batchedUpdates = fm;
jn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!df(n)) throw Error(M(200));
  if (t == null || t._reactInternals === void 0) throw Error(M(38));
  return hf(t, e, n, !1, r);
};
jn.version = "18.2.0-next-9e3b772b8-20220608";
function G1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1);
    } catch (t) {
      console.error(t);
    }
}
G1(), (Xv.exports = jn);
var ik = Xv.exports,
  P0 = ik;
(Od.createRoot = P0.createRoot), (Od.hydrateRoot = P0.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    gl.apply(this, arguments)
  );
}
var hi;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(hi || (hi = {}));
const E0 = "popstate";
function sk(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return jh(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Pc(i);
  }
  return ak(e, n, null, t);
}
function $e(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function ym(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function ok() {
  return Math.random().toString(36).substr(2, 8);
}
function C0(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function jh(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    gl(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? qo(e) : e,
      { state: n, key: (e && e.key) || r || ok() }
    )
  );
}
function Pc(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function qo(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function ak(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = hi.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(gl({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = hi.Pop;
    let _ = c(),
      y = _ == null ? null : _ - u;
    (u = _), l && l({ action: a, location: g.location, delta: y });
  }
  function h(_, y) {
    a = hi.Push;
    let m = jh(g.location, _, y);
    n && n(m, _), (u = c() + 1);
    let v = C0(m, u),
      w = g.createHref(m);
    try {
      o.pushState(v, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      i.location.assign(w);
    }
    s && l && l({ action: a, location: g.location, delta: 1 });
  }
  function p(_, y) {
    a = hi.Replace;
    let m = jh(g.location, _, y);
    n && n(m, _), (u = c());
    let v = C0(m, u),
      w = g.createHref(m);
    o.replaceState(v, "", w),
      s && l && l({ action: a, location: g.location, delta: 0 });
  }
  function x(_) {
    let y = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof _ == "string" ? _ : Pc(_);
    return (
      $e(
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
      return t(i, o);
    },
    listen(_) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(E0, d),
        (l = _),
        () => {
          i.removeEventListener(E0, d), (l = null);
        }
      );
    },
    createHref(_) {
      return e(i, _);
    },
    createURL: x,
    encodeLocation(_) {
      let y = x(_);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: h,
    replace: p,
    go(_) {
      return o.go(_);
    },
  };
  return g;
}
var j0;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(j0 || (j0 = {}));
function lk(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? qo(e) : e,
    i = xl(r.pathname || "/", n);
  if (i == null) return null;
  let s = Q1(t);
  uk(s);
  let o = null;
  for (let a = 0; o == null && a < s.length; ++a) o = vk(s[a], wk(i));
  return o;
}
function Q1(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      ($e(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Ei([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      ($e(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Q1(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: gk(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of K1(s.path)) i(s, o, l);
    }),
    e
  );
}
function K1(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = K1(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function uk(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : xk(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ck = /^:\w+$/,
  fk = 3,
  dk = 2,
  hk = 1,
  pk = 10,
  mk = -2,
  A0 = (t) => t === "*";
function gk(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(A0) && (r += mk),
    e && (r += dk),
    n
      .filter((i) => !A0(i))
      .reduce((i, s) => i + (ck.test(s) ? fk : s === "" ? hk : pk), r)
  );
}
function xk(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function vk(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = Ah(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    s.push({
      params: r,
      pathname: Ei([i, c.pathname]),
      pathnameBase: Tk(Ei([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (i = Ei([i, c.pathnameBase]));
  }
  return s;
}
function Ah(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = yk(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: h, isOptional: p } = c;
      if (h === "*") {
        let g = a[d] || "";
        o = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[d];
      return p && !x ? (u[h] = void 0) : (u[h] = _k(x || "", h)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function yk(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    ym(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function wk(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      ym(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function _k(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      ym(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      t
    );
  }
}
function xl(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function Sk(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? qo(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : bk(n, e)) : e,
    search: kk(r),
    hash: Pk(i),
  };
}
function bk(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function sd(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function q1(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Z1(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = qo(t))
    : ((i = gl({}, t)),
      $e(
        !i.pathname || !i.pathname.includes("?"),
        sd("?", "pathname", "search", i)
      ),
      $e(
        !i.pathname || !i.pathname.includes("#"),
        sd("#", "pathname", "hash", i)
      ),
      $e(!i.search || !i.search.includes("#"), sd("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let d = e.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    a = d >= 0 ? e[d] : "/";
  }
  let l = Sk(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Ei = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Tk = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  kk = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Pk = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Ek(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const J1 = ["post", "put", "patch", "delete"];
new Set(J1);
const Ck = ["get", ...J1];
new Set(Ck);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ec() {
  return (
    (Ec = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ec.apply(this, arguments)
  );
}
const pf = E.createContext(null),
  ew = E.createContext(null),
  Vs = E.createContext(null),
  mf = E.createContext(null),
  zs = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  tw = E.createContext(null);
function jk(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  Ol() || $e(!1);
  let { basename: r, navigator: i } = E.useContext(Vs),
    { hash: s, pathname: o, search: a } = gf(t, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Ei([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Ol() {
  return E.useContext(mf) != null;
}
function Il() {
  return Ol() || $e(!1), E.useContext(mf).location;
}
function nw(t) {
  E.useContext(Vs).static || E.useLayoutEffect(t);
}
function rw() {
  let { isDataRoute: t } = E.useContext(zs);
  return t ? Uk() : Ak();
}
function Ak() {
  Ol() || $e(!1);
  let t = E.useContext(pf),
    { basename: e, navigator: n } = E.useContext(Vs),
    { matches: r } = E.useContext(zs),
    { pathname: i } = Il(),
    s = JSON.stringify(q1(r).map((l) => l.pathnameBase)),
    o = E.useRef(!1);
  return (
    nw(() => {
      o.current = !0;
    }),
    E.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Z1(l, JSON.parse(s), i, u.relative === "path");
        t == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : Ei([e, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [e, n, s, i, t]
    )
  );
}
function gf(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: r } = E.useContext(zs),
    { pathname: i } = Il(),
    s = JSON.stringify(q1(r).map((o) => o.pathnameBase));
  return E.useMemo(() => Z1(t, JSON.parse(s), i, n === "path"), [t, s, i, n]);
}
function Nk(t, e) {
  return Mk(t, e);
}
function Mk(t, e, n) {
  Ol() || $e(!1);
  let { navigator: r } = E.useContext(Vs),
    { matches: i } = E.useContext(zs),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = Il(),
    u;
  if (e) {
    var c;
    let g = typeof e == "string" ? qo(e) : e;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || $e(!1),
      (u = g);
  } else u = l;
  let d = u.pathname || "/",
    h = a === "/" ? d : d.slice(a.length) || "/",
    p = lk(t, { pathname: h }),
    x = Ik(
      p &&
        p.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, o, g.params),
            pathname: Ei([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : Ei([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return e && x
    ? E.createElement(
        mf.Provider,
        {
          value: {
            location: Ec(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: hi.Pop,
          },
        },
        x
      )
    : x;
}
function Dk() {
  let t = Bk(),
    e = Ek(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? E.createElement("pre", { style: i }, n) : null,
    s
  );
}
const Rk = E.createElement(Dk, null);
class Lk extends E.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error || n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error
      ? E.createElement(
          zs.Provider,
          { value: this.props.routeContext },
          E.createElement(tw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ok(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = E.useContext(pf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(zs.Provider, { value: e }, r)
  );
}
function Ik(t, e, n) {
  var r;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
    var i;
    if ((i = n) != null && i.errors) t = n.matches;
    else return null;
  }
  let s = t,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let a = s.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
    );
    a >= 0 || $e(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
  }
  return s.reduceRight((a, l, u) => {
    let c = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      d = null;
    n && (d = l.route.errorElement || Rk);
    let h = e.concat(s.slice(0, u + 1)),
      p = () => {
        let x;
        return (
          c
            ? (x = d)
            : l.route.Component
            ? (x = E.createElement(l.route.Component, null))
            : l.route.element
            ? (x = l.route.element)
            : (x = a),
          E.createElement(Ok, {
            match: l,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? E.createElement(Lk, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var iw = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(iw || {}),
  Cc = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Cc || {});
function Fk(t) {
  let e = E.useContext(pf);
  return e || $e(!1), e;
}
function Vk(t) {
  let e = E.useContext(ew);
  return e || $e(!1), e;
}
function zk(t) {
  let e = E.useContext(zs);
  return e || $e(!1), e;
}
function sw(t) {
  let e = zk(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || $e(!1), n.route.id;
}
function Bk() {
  var t;
  let e = E.useContext(tw),
    n = Vk(Cc.UseRouteError),
    r = sw(Cc.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function Uk() {
  let { router: t } = Fk(iw.UseNavigateStable),
    e = sw(Cc.UseNavigateStable),
    n = E.useRef(!1);
  return (
    nw(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, Ec({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
function Nr(t) {
  $e(!1);
}
function $k(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = hi.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  Ol() && $e(!1);
  let a = e.replace(/^\/*/, "/"),
    l = E.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o]);
  typeof r == "string" && (r = qo(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: h = null,
      key: p = "default",
    } = r,
    x = E.useMemo(() => {
      let g = xl(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: d, state: h, key: p },
            navigationType: i,
          };
    }, [a, u, c, d, h, p, i]);
  return x == null
    ? null
    : E.createElement(
        Vs.Provider,
        { value: l },
        E.createElement(mf.Provider, { children: n, value: x })
      );
}
function Hk(t) {
  let { children: e, location: n } = t;
  return Nk(Nh(e), n);
}
new Promise(() => {});
function Nh(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    E.Children.forEach(t, (r, i) => {
      if (!E.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, Nh(r.props.children, s));
        return;
      }
      r.type !== Nr && $e(!1), !r.props.index || !r.props.children || $e(!1);
      let o = {
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
      r.props.children && (o.children = Nh(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jc() {
  return (
    (jc = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    jc.apply(this, arguments)
  );
}
function ow(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Wk(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Xk(t, e) {
  return t.button === 0 && (!e || e === "_self") && !Wk(t);
}
const Yk = [
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
  Gk = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Qk = E.createContext({ isTransitioning: !1 }),
  Kk = "startTransition",
  N0 = Gb[Kk];
function qk(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = E.useRef();
  s.current == null && (s.current = sk({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = E.useCallback(
      (d) => {
        u && N0 ? N0(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    E.useLayoutEffect(() => o.listen(c), [o, c]),
    E.createElement($k, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
    })
  );
}
const Zk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  aw = E.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = e,
      h = ow(e, Yk),
      { basename: p } = E.useContext(Vs),
      x,
      g = !1;
    if (typeof u == "string" && Jk.test(u) && ((x = u), Zk))
      try {
        let v = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          S = xl(w.pathname, p);
        w.origin === v.origin && S != null
          ? (u = S + w.search + w.hash)
          : (g = !0);
      } catch {}
    let _ = jk(u, { relative: i }),
      y = tP(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function m(v) {
      r && r(v), v.defaultPrevented || y(v);
    }
    return E.createElement(
      "a",
      jc({}, h, { href: x || _, onClick: g || s ? r : m, ref: n, target: l })
    );
  }),
  Se = E.forwardRef(function (e, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = e,
      d = ow(e, Gk),
      h = gf(l, { relative: d.relative }),
      p = Il(),
      x = E.useContext(ew),
      { navigator: g } = E.useContext(Vs),
      _ = x != null && nP(h) && u === !0,
      y = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
      m = p.pathname,
      v =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    i ||
      ((m = m.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (y = y.toLowerCase()));
    let w = m === y || (!o && m.startsWith(y) && m.charAt(y.length) === "/"),
      S =
        v != null &&
        (v === y || (!o && v.startsWith(y) && v.charAt(y.length) === "/")),
      k = { isActive: w, isPending: S, isTransitioning: _ },
      b = w ? r : void 0,
      P;
    typeof s == "function"
      ? (P = s(k))
      : (P = [
          s,
          w ? "active" : null,
          S ? "pending" : null,
          _ ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let C = typeof a == "function" ? a(k) : a;
    return E.createElement(
      aw,
      jc({}, d, {
        "aria-current": b,
        className: P,
        ref: n,
        style: C,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(k) : c
    );
  });
var Mh;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Mh || (Mh = {}));
var M0;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(M0 || (M0 = {}));
function eP(t) {
  let e = E.useContext(pf);
  return e || $e(!1), e;
}
function tP(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    l = rw(),
    u = Il(),
    c = gf(t, { relative: o });
  return E.useCallback(
    (d) => {
      if (Xk(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Pc(u) === Pc(c);
        l(t, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, t, s, o, a]
  );
}
function nP(t, e) {
  e === void 0 && (e = {});
  let n = E.useContext(Qk);
  n == null && $e(!1);
  let { basename: r } = eP(Mh.useViewTransitionState),
    i = gf(t, { relative: e.relative });
  if (!n.isTransitioning) return !1;
  let s = xl(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = xl(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ah(i.pathname, o) != null || Ah(i.pathname, s) != null;
}
const V = {
    paddingX: "sm:px-10 px-[15px]",
    paddingX1: "sm:px-10 px-[15px]",
    paddingY: "sm:py-16 py-[15px]",
    padding: "sm:px-10 px-6 sm:py-16 py-10",
    heroHeadText:
      "font-black font-normal text-[1.5rem] lg:text-[40px] xl:text-[51px] sm:text-[30px] xs:text-[28px]  lg:leading-[78px] mt-2",
    heroHead2Text:
      "font-black font-normal text-white text-[1.5rem] lg:text-[60px] sm:text-[30px] xs:text-[28px]  lg:leading-[78px] mt-2",
    heroHead1Text:
      "font-black font-normal text-white text-[1.3rem] xl:text-[24px] sm:text-[28px] lg:text-[24px]  xl:leading-[45px] lg:leading-[55px] mt-2",
    heroHead3Text:
      "font-black font-normal  text-[1.3rem] xl:text-[30px] sm:text-[28px] lg:text-[24px]  xl:leading-[40px] lg:leading-[45px] mt-2",
    heroSubText:
      "text-[1.1rem] lg:text-[25px] sm:text-[26px] xs:text-[20px] lg:leading-[35px]",
    sectionHeadText:
      "text-white font-black text-[1.7rem] md:text-[60px] sm:text-[50px] xs:text-[40px] ",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  },
  rP = "/assets/logo-3a7af5f6.png",
  lw = "/assets/offer4-4f2e8126.png",
  uw = "/assets/offer5-fc1f777b.png",
  cw = "/assets/offer6-c135d954.png",
  iP = "/assets/image2-a03aa8b8.png",
  at = "/assets/box1-f0cf9af1.png",
  $i = "/assets/box2-04a7cc1f.png",
  Bs = "/assets/box3-03b89114.png",
  Er = "/assets/box4-7a0b5282.png",
  xf = "/assets/box8-a7b08593.png",
  fw = "/assets/box9-9e493412.png",
  Fl = "/assets/box13-738c43ce.png",
  D0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAQAAAA4Y6kNAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cLFggQCmEzEj8AAAABb3JOVAHPoneaAAACSElEQVRIx62XW27TQBSGv5lk6sS1UsIItRQqtS95ZgewBLbATmAlbAFWgNgBOwCJtuqLFRRZcaIhPn2YxLk4njiX/8nRnHxzzolnzh9FrUSTENGlhQHA4ZiSM1H/CUjV4GJeEgMFExwe0cbQQQMZI5XtgZzjCoaMVV5ZjeiRYHA8qmkDpGgsfRypGoWKkx4Ww5BUFUGkGN7WBW7BWiyOv5udVRvAFg/VYmuhXa5gE6rWgFT33AHd8i1d9vAAICjHPS1uRFeQWAxP+wLn0AcMdgMpHfqkzXu4Ac0Z0pfuepavcSo9DAhAilvmqUHOMRwDRBWkxIs8NXCB2/Fif5QfIiIitdARRZmnGBnIqyDwVkoFoqwM/O/e5gwI5sg7AP7xLRg1xpIwgjYxxfbjv4H8qT4F+5lLQeR7GTEJl80L/yC3chvcekLsI+/kMohc1TAYeSV3PktD8zPzJ7jq/O3f3on5wns+AL/4zu9GG8tA7I6IzyIi8nUnycrAF+4aZNpMBueRs/n8O17tBTKncyJkh6lHTtHLi+lwSYQm98gM5q/oceqBPzRaFYzpnwCZkJVTQboykN6RZfdkIIl/1qByxtjVgXSALG5haTwoXR9Ie+doMTwuPmmoDqQ9gTGW4fKCXJSb4ngjB5wjMVziVmfXHKkK7plxsy+0dBsrHkpVlp/28EQx18xqPVEJNaRNZnppG0PObS3wVP5yHh5xjcGRMaoOOonp0kczrrM8dV79nAsS6rz6OOSgFLUSwxkxEab8RzEjZ0oW9sjPa6QBBLCdDcIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTEtMjJUMDg6MTU6NDMrMDA6MDAc+xaGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTExLTIyVDA4OjE1OjQzKzAwOjAwbaauOgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0xMS0yMlQwODoxNjoxMCswMDowMKiMIB8AAAAASUVORK5CYII=",
  R0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAnCAQAAAA4Y6kNAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cLFggRGIuRUjYAAAABb3JOVAHPoneaAAACh0lEQVRIx62XW07bQBSGvxkyDTFRSGohKA1VkBCvZQlsoSsoOyg7KEtod9AdFFaQ7qDqChqpgHixTCMrFw349MEmOIlnyKXnyRmf+eaf4xPPb4U3RFOnSo0NDAAWy5ghI/XgmqM8uIDXBEDKCEuGqGDYRAMJfZUsgcxxKTEDNZy7W6VBHYPlVo0XQIompIUlUn1vURqEGGIilXqRYmiXJTqwISGWP8XKqhLgBjfzm3VCa+xBEarmgEyvuQB0ZpaequEKQFCWazY4ED2HJMRwtywwh95gCGeQskmLaPEazkCHxLSkNq3yDVZFqwEBiLCZzhwpWxjWAaJSIgKpPavcxvobewFon5QwR4qhTrIeEICYQHSm8hVQqlE60iz8+iSxxPJZTuVjKXIA1LPUHTkqX1Yu5Kd08uszeY5zR/6R7GQqq4wcW7nnhG6u6XQy2uPSkT8iyNiHsutYtSm/RUQklm5+JSLSdRVT9uSwAoDB9Z85J6tls6ARfrmQWBoaf3wrHe36pryAVD0+cD8z2FNXLyMtFWfG/dzIhYdnsADIO2m7s6Qj3wvt88WnUNrSztQN2XaknNLhpPBovqpzb6U2+Zshx2iplb7YepzxnibQ44pL9cOrsYomo4iWYwlZO2RHjqWiAVTKgNb6SOok6uGpiSK0NNbU2MDQn/SlGjIglJca3x8hViXFVo+eD6SVNIYYbqGALB5IKwADQuLMHxW3GmF5K5UVgIZd7NPZVUCqlGseOVgWOnEbuYdSpbfvlvBEAfs8Oj3RBGqIFjnTJ7bR59ymEv+Xv8zTq+xjsCT0532uBNRooRmUWR6fV99imzourz5wOSgPMq/sKwKqmMkXxSNDxiRuj/wPCQIey3pG1+EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTEtMjJUMDg6MTc6MDQrMDA6MDBZ4/bPAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTExLTIyVDA4OjE3OjA0KzAwOjAwKL5OcwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0xMS0yMlQwODoxNzoyNCswMDowMD2OaNEAAAAASUVORK5CYII=",
  L0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAnCAQAAADTVBIOAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cLFggQMz42mjcAAAABb3JOVAHPoneaAAACUklEQVRIx62XX27aQBCHv9mwARxESldR27SR+hDx3KvkJO0NeoSoN+kNuEJv0EpNorxYVAhh0AZPH/wHMLaxAyNZMmL229+OZ70/CzWhhgFd+pxhAfB4VkQs5aVunFQCA94SADFLPAmkg6WHAebMZN4KmgJjpiwk2vu3y5ABFs+TrBpB1eAY4QllVluaIQ7LlFDiA1C1fKpKLQE7HJ6/xQrLHvKMx/0lV2L7vIciVgpI9uc9gC0ZZbZq+QokiOeBM27UlEBxWJ7bIlPsIxa3B9UeI8LmtSxgI6aMtF9U+gEv4euQAIT4jVYDoBdYjkEiMSFBpjVReokva3W9V9X7htgZ8VZd1epYr8oSVVVVm6pVp+OkBwxwDpRvyR/p1SwWwCCb4Upvj6nnltbbZMUG6LI8DZQlQQa1+IqZ85rqRCc60S86UdXf+r0C+pK3qI7VHYQmMdUsvpXmOx1nSpvHL+74CcDXQ+VtrvQz6JvqRttW6uk0Eyp/QP7VJKRPxwDr9Kw8PjobaETvRNAeqwy6wmxeW68P7WKIMugckqY9MoaQbCMDErNgVJYlIiKye7d7vxMD5snJkfRpiNHhkYsfYrPXkgGQiAVO222EYjh8ZoQyULh7dLXW6bA8Zb9SaPHoaokMcEw3vmqz5BDPR224t3aQlnf47TMuh0rMA2tu2mJzh7LlvaQk4bmFlwq4Zl3jpXKsJWziAXLTWe/6dlJP50/TAV2usXjmzPa9sgb0GWFYVBmlas9/wSUDqjz/os55VULTCp8T0MXmXydrIlbM6332f+8rF0RoCOEoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTExLTIyVDA4OjE2OjI3KzAwOjAwxeyAEQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMS0yMlQwODoxNjoyNyswMDowMLSxOK0AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMTEtMjJUMDg6MTY6NTErMDA6MDCKsSVRAAAAAElFTkSuQmCC",
  O0 = "/assets/hand2-826192e2.png",
  I0 = "/assets/hand3-2601c5bc.png",
  dw = "/assets/impenetrability-384dab49.svg",
  hw = "/assets/impenetrability1-0b7dbbc6.svg",
  pw = "/assets/verifiability-dd910cbd.svg",
  mw = "/assets/verifiability1-fbc5ea88.svg",
  gw = "/assets/timestamping-f6f29b0a.svg",
  xw = "/assets/timestamping1-24698f29.svg",
  vw = "/assets/immutability-85924c62.svg",
  yw = "/assets/immutability1-2f3ebbd7.svg",
  sP = "/assets/key-09df9504.svg",
  oP = "/assets/key1-e263f1b1.svg",
  aP = "/assets/blockchain-a9aaef52.svg",
  lP = "/assets/blockchain1-bfbd860f.svg",
  uP = "/assets/bond-87d25130.svg",
  cP = "/assets/bond1-ae0b7e47.svg",
  fP = "/assets/access-control-381c522d.svg",
  dP = "/assets/access-control1-faa72598.svg",
  ww = E.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  vf = E.createContext({}),
  wm = E.createContext(null),
  yf = typeof document < "u",
  hP = yf ? E.useLayoutEffect : E.useEffect,
  _w = E.createContext({ strict: !1 });
function pP(t, e, n, r) {
  const { visualElement: i } = E.useContext(vf),
    s = E.useContext(_w),
    o = E.useContext(wm),
    a = E.useContext(ww).reducedMotion,
    l = E.useRef();
  (r = r || s.renderer),
    !l.current &&
      r &&
      (l.current = r(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  E.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = E.useRef(!!window.HandoffAppearAnimations);
  return (
    hP(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    E.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function ho(t) {
  return (
    typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function mP(t, e, n) {
  return E.useCallback(
    (r) => {
      r && t.mount && t.mount(r),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : ho(n) && (n.current = r));
    },
    [e]
  );
}
function vl(t) {
  return typeof t == "string" || Array.isArray(t);
}
function wf(t) {
  return typeof t == "object" && typeof t.start == "function";
}
const _m = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Sm = ["initial", ..._m];
function _f(t) {
  return wf(t.animate) || Sm.some((e) => vl(t[e]));
}
function Sw(t) {
  return !!(_f(t) || t.variants);
}
function gP(t, e) {
  if (_f(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || vl(n) ? n : void 0,
      animate: vl(r) ? r : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function xP(t) {
  const { initial: e, animate: n } = gP(t, E.useContext(vf));
  return E.useMemo(() => ({ initial: e, animate: n }), [F0(e), F0(n)]);
}
function F0(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const V0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  yl = {};
for (const t in V0) yl[t] = { isEnabled: (e) => V0[t].some((n) => !!e[n]) };
function vP(t) {
  for (const e in t) yl[e] = { ...yl[e], ...t[e] };
}
const bw = E.createContext({}),
  Tw = E.createContext({}),
  yP = Symbol.for("motionComponentSymbol");
function wP({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  t && vP(t);
  function s(a, l) {
    let u;
    const c = { ...E.useContext(ww), ...a, layoutId: _P(a) },
      { isStatic: d } = c,
      h = xP(a),
      p = r(a, d);
    if (!d && yf) {
      h.visualElement = pP(i, p, c, e);
      const x = E.useContext(Tw),
        g = E.useContext(_w).strict;
      h.visualElement && (u = h.visualElement.loadFeatures(c, g, t, x));
    }
    return E.createElement(
      vf.Provider,
      { value: h },
      u && h.visualElement
        ? E.createElement(u, { visualElement: h.visualElement, ...c })
        : null,
      n(i, a, mP(p, h.visualElement, l), p, d, h.visualElement)
    );
  }
  const o = E.forwardRef(s);
  return (o[yP] = i), o;
}
function _P({ layoutId: t }) {
  const e = E.useContext(bw).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function SP(t) {
  function e(r, i = {}) {
    return wP(t(r, i));
  }
  if (typeof Proxy > "u") return e;
  const n = new Map();
  return new Proxy(e, {
    get: (r, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const bP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function bm(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(bP.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const Ac = {};
function TP(t) {
  Object.assign(Ac, t);
}
const Vl = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Us = new Set(Vl);
function kw(t, { layout: e, layoutId: n }) {
  return (
    Us.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!Ac[t] || t === "opacity"))
  );
}
const ln = (t) => !!(t && t.getVelocity),
  kP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  PP = Vl.length;
function EP(
  t,
  { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < PP; o++) {
    const a = Vl[o];
    if (t[a] !== void 0) {
      const l = kP[a] || a;
      s += `${l}(${t[a]}) `;
    }
  }
  return (
    e && !t.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(t, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const Pw = (t) => (e) => typeof e == "string" && e.startsWith(t),
  Ew = Pw("--"),
  Dh = Pw("var(--"),
  CP =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  jP = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Li = (t, e, n) => Math.min(Math.max(n, t), e),
  $s = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  La = { ...$s, transform: (t) => Li(0, 1, t) },
  cu = { ...$s, default: 1 },
  Oa = (t) => Math.round(t * 1e5) / 1e5,
  Sf = /(-)?([\d]*\.?[\d])+/g,
  Cw =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  AP =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function zl(t) {
  return typeof t == "string";
}
const Bl = (t) => ({
    test: (e) => zl(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  ii = Bl("deg"),
  br = Bl("%"),
  Q = Bl("px"),
  NP = Bl("vh"),
  MP = Bl("vw"),
  z0 = {
    ...br,
    parse: (t) => br.parse(t) / 100,
    transform: (t) => br.transform(t * 100),
  },
  B0 = { ...$s, transform: Math.round },
  jw = {
    borderWidth: Q,
    borderTopWidth: Q,
    borderRightWidth: Q,
    borderBottomWidth: Q,
    borderLeftWidth: Q,
    borderRadius: Q,
    radius: Q,
    borderTopLeftRadius: Q,
    borderTopRightRadius: Q,
    borderBottomRightRadius: Q,
    borderBottomLeftRadius: Q,
    width: Q,
    maxWidth: Q,
    height: Q,
    maxHeight: Q,
    size: Q,
    top: Q,
    right: Q,
    bottom: Q,
    left: Q,
    padding: Q,
    paddingTop: Q,
    paddingRight: Q,
    paddingBottom: Q,
    paddingLeft: Q,
    margin: Q,
    marginTop: Q,
    marginRight: Q,
    marginBottom: Q,
    marginLeft: Q,
    rotate: ii,
    rotateX: ii,
    rotateY: ii,
    rotateZ: ii,
    scale: cu,
    scaleX: cu,
    scaleY: cu,
    scaleZ: cu,
    skew: ii,
    skewX: ii,
    skewY: ii,
    distance: Q,
    translateX: Q,
    translateY: Q,
    translateZ: Q,
    x: Q,
    y: Q,
    z: Q,
    perspective: Q,
    transformPerspective: Q,
    opacity: La,
    originX: z0,
    originY: z0,
    originZ: Q,
    zIndex: B0,
    fillOpacity: La,
    strokeOpacity: La,
    numOctaves: B0,
  };
function Tm(t, e, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = t;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in e) {
    const h = e[d];
    if (Ew(d)) {
      s[d] = h;
      continue;
    }
    const p = jw[d],
      x = jP(h, p);
    if (Us.has(d)) {
      if (((l = !0), (o[d] = x), !c)) continue;
      h !== (p.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = x)) : (i[d] = x);
  }
  if (
    (e.transform ||
      (l || r
        ? (i.transform = EP(t.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: h = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${d} ${h} ${p}`;
  }
}
const km = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Aw(t, e, n) {
  for (const r in e) !ln(e[r]) && !kw(r, n) && (t[r] = e[r]);
}
function DP({ transformTemplate: t }, e, n) {
  return E.useMemo(() => {
    const r = km();
    return (
      Tm(r, e, { enableHardwareAcceleration: !n }, t),
      Object.assign({}, r.vars, r.style)
    );
  }, [e]);
}
function RP(t, e, n) {
  const r = t.style || {},
    i = {};
  return (
    Aw(i, r, t),
    Object.assign(i, DP(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
  );
}
function LP(t, e, n) {
  const r = {},
    i = RP(t, e, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const OP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Nc(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    OP.has(t)
  );
}
let Nw = (t) => !Nc(t);
function IP(t) {
  t && (Nw = (e) => (e.startsWith("on") ? !Nc(e) : t(e)));
}
try {
  IP(require("@emotion/is-prop-valid").default);
} catch {}
function FP(t, e, n) {
  const r = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((Nw(i) ||
        (n === !0 && Nc(i)) ||
        (!e && !Nc(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (r[i] = t[i]));
  return r;
}
function U0(t, e, n) {
  return typeof t == "string" ? t : Q.transform(e + n * t);
}
function VP(t, e, n) {
  const r = U0(e, t.x, t.width),
    i = U0(n, t.y, t.height);
  return `${r} ${i}`;
}
const zP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  BP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function UP(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? zP : BP;
  t[s.offset] = Q.transform(-r);
  const o = Q.transform(e),
    a = Q.transform(n);
  t[s.array] = `${o} ${a}`;
}
function Pm(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  h
) {
  if ((Tm(t, u, c, h), d)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: p, style: x, dimensions: g } = t;
  p.transform && (g && (x.transform = p.transform), delete p.transform),
    g &&
      (i !== void 0 || s !== void 0 || x.transform) &&
      (x.transformOrigin = VP(
        g,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    e !== void 0 && (p.x = e),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    o !== void 0 && UP(p, o, a, l, !1);
}
const Mw = () => ({ ...km(), attrs: {} }),
  Em = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function $P(t, e, n, r) {
  const i = E.useMemo(() => {
    const s = Mw();
    return (
      Pm(s, e, { enableHardwareAcceleration: !1 }, Em(r), t.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [e]);
  if (t.style) {
    const s = {};
    Aw(s, t.style, t), (i.style = { ...s, ...i.style });
  }
  return i;
}
function HP(t = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (bm(n) ? $P : LP)(r, s, o, n),
      c = { ...FP(r, typeof n == "string", t), ...l, ref: i },
      { children: d } = r,
      h = E.useMemo(() => (ln(d) ? d.get() : d), [d]);
    return E.createElement(n, { ...c, children: h });
  };
}
const Cm = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Dw(t, { style: e, vars: n }, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n) t.style.setProperty(s, n[s]);
}
const Rw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Lw(t, e, n, r) {
  Dw(t, e, void 0, r);
  for (const i in e.attrs) t.setAttribute(Rw.has(i) ? i : Cm(i), e.attrs[i]);
}
function jm(t, e) {
  const { style: n } = t,
    r = {};
  for (const i in n)
    (ln(n[i]) || (e.style && ln(e.style[i])) || kw(i, t)) && (r[i] = n[i]);
  return r;
}
function Ow(t, e) {
  const n = jm(t, e);
  for (const r in t)
    if (ln(t[r]) || ln(e[r])) {
      const i =
        Vl.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = t[r];
    }
  return n;
}
function Am(t, e, n, r = {}, i = {}) {
  return (
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)),
    e
  );
}
function WP(t) {
  const e = E.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Mc = (t) => Array.isArray(t),
  XP = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  YP = (t) => (Mc(t) ? t[t.length - 1] || 0 : t);
function Uu(t) {
  const e = ln(t) ? t.get() : t;
  return XP(e) ? e.toValue() : e;
}
function GP(
  { scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: QP(r, i, s, t), renderState: e() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Iw = (t) => (e, n) => {
  const r = E.useContext(vf),
    i = E.useContext(wm),
    s = () => GP(t, e, r, i);
  return n ? s() : WP(s);
};
function QP(t, e, n, r) {
  const i = {},
    s = r(t, {});
  for (const h in s) i[h] = Uu(s[h]);
  let { initial: o, animate: a } = t;
  const l = _f(t),
    u = Sw(t);
  e &&
    u &&
    !l &&
    t.inherit !== !1 &&
    (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return (
    d &&
      typeof d != "boolean" &&
      !wf(d) &&
      (Array.isArray(d) ? d : [d]).forEach((p) => {
        const x = Am(t, p);
        if (!x) return;
        const { transitionEnd: g, transition: _, ...y } = x;
        for (const m in y) {
          let v = y[m];
          if (Array.isArray(v)) {
            const w = c ? v.length - 1 : 0;
            v = v[w];
          }
          v !== null && (i[m] = v);
        }
        for (const m in g) i[m] = g[m];
      }),
    i
  );
}
const Be = (t) => t;
class $0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function KP(t) {
  let e = new $0(),
    n = new $0(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          h = d ? e : n;
        return u && o.add(l), h.add(l) && d && i && (r = e.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([e, n] = [n, e]), n.clear(), (r = e.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = e.order[u];
            c(l), o.has(c) && (a.schedule(c), t());
          }
        (i = !1), s && ((s = !1), a.process(l));
      },
    };
  return a;
}
const fu = ["prepare", "read", "update", "preRender", "render", "postRender"],
  qP = 40;
function ZP(t, e) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = fu.reduce((d, h) => ((d[h] = KP(() => (n = !0))), d), {}),
    o = (d) => s[d].process(i),
    a = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, qP), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        fu.forEach(o),
        (i.isProcessing = !1),
        n && e && ((r = !1), t(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || t(a);
    };
  return {
    schedule: fu.reduce((d, h) => {
      const p = s[h];
      return (d[h] = (x, g = !1, _ = !1) => (n || l(), p.schedule(x, g, _))), d;
    }, {}),
    cancel: (d) => fu.forEach((h) => s[h].cancel(d)),
    state: i,
    steps: s,
  };
}
const {
    schedule: ke,
    cancel: qr,
    state: ft,
    steps: od,
  } = ZP(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0),
  JP = {
    useVisualState: Iw({
      scrapeMotionValuesFromProps: Ow,
      createRenderState: Mw,
      onMount: (t, e, { renderState: n, latestValues: r }) => {
        ke.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ke.render(() => {
            Pm(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Em(e.tagName),
              t.transformTemplate
            ),
              Lw(e, n);
          });
      },
    }),
  },
  eE = {
    useVisualState: Iw({
      scrapeMotionValuesFromProps: jm,
      createRenderState: km,
    }),
  };
function tE(t, { forwardMotionProps: e = !1 }, n, r) {
  return {
    ...(bm(t) ? JP : eE),
    preloadedFeatures: n,
    useRender: HP(e),
    createVisualElement: r,
    Component: t,
  };
}
function zr(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const Fw = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function bf(t, e = "page") {
  return { point: { x: t[e + "X"], y: t[e + "Y"] } };
}
const nE = (t) => (e) => Fw(e) && t(e, bf(e));
function Hr(t, e, n, r) {
  return zr(t, e, nE(n), r);
}
const rE = (t, e) => (n) => e(t(n)),
  Ci = (...t) => t.reduce(rE);
function Vw(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const H0 = Vw("dragHorizontal"),
  W0 = Vw("dragVertical");
function zw(t) {
  let e = !1;
  if (t === "y") e = W0();
  else if (t === "x") e = H0();
  else {
    const n = H0(),
      r = W0();
    n && r
      ? (e = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return e;
}
function Bw() {
  const t = zw(!0);
  return t ? (t(), !1) : !0;
}
let Hi = class {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
};
function X0(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"),
    r = "onHover" + (e ? "Start" : "End"),
    i = (s, o) => {
      if (s.type === "touch" || Bw()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e),
        a[r] && ke.update(() => a[r](s, o));
    };
  return Hr(t.current, n, i, { passive: !t.getProps()[r] });
}
class iE extends Hi {
  mount() {
    this.unmount = Ci(X0(this.node, !0), X0(this.node, !1));
  }
  unmount() {}
}
class sE extends Hi {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ci(
      zr(this.node.current, "focus", () => this.onFocus()),
      zr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Uw = (t, e) => (e ? (t === e ? !0 : Uw(t, e.parentElement)) : !1);
function ad(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, bf(n));
}
class oE extends Hi {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Be),
      (this.removeEndListeners = Be),
      (this.removeAccessibleListeners = Be),
      (this.startPointerPress = (e, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          s = Hr(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ke.update(() => {
                Uw(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Hr(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Ci(s, o)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                ad("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ke.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = zr(this.node.current, "keyup", o)),
              ad("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = zr(this.node.current, "keydown", e),
          r = () => {
            this.isPressing && ad("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = zr(this.node.current, "blur", r);
        this.removeAccessibleListeners = Ci(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ke.update(() => r(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Bw()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ke.update(() => r(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = Hr(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(e.onTapStart || e.onPointerStart),
      }),
      r = zr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ci(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Rh = new WeakMap(),
  ld = new WeakMap(),
  aE = (t) => {
    const e = Rh.get(t.target);
    e && e(t);
  },
  lE = (t) => {
    t.forEach(aE);
  };
function uE({ root: t, ...e }) {
  const n = t || document;
  ld.has(n) || ld.set(n, {});
  const r = ld.get(n),
    i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(lE, { root: t, ...e })), r[i];
}
function cE(t, e, n) {
  const r = uE(e);
  return (
    Rh.set(t, n),
    r.observe(t),
    () => {
      Rh.delete(t), r.unobserve(t);
    }
  );
}
const fE = { some: 0, all: 1 };
class dE extends Hi {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : fE[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(l);
      };
    return cE(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(hE(e, n)) && this.startObserver();
  }
  unmount() {}
}
function hE({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const pE = {
  inView: { Feature: dE },
  tap: { Feature: oE },
  focus: { Feature: sE },
  hover: { Feature: iE },
};
function $w(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function mE(t) {
  const e = {};
  return t.values.forEach((n, r) => (e[r] = n.get())), e;
}
function gE(t) {
  const e = {};
  return t.values.forEach((n, r) => (e[r] = n.getVelocity())), e;
}
function Tf(t, e, n) {
  const r = t.getProps();
  return Am(r, e, n !== void 0 ? n : r.custom, mE(t), gE(t));
}
const xE = "framerAppearId",
  vE = "data-" + Cm(xE);
let yE = Be,
  Nm = Be;
const ji = (t) => t * 1e3,
  Wr = (t) => t / 1e3,
  wE = { current: !1 },
  Hw = (t) => Array.isArray(t) && typeof t[0] == "number";
function Ww(t) {
  return !!(
    !t ||
    (typeof t == "string" && Xw[t]) ||
    Hw(t) ||
    (Array.isArray(t) && t.every(Ww))
  );
}
const wa = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
  Xw = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wa([0, 0.65, 0.55, 1]),
    circOut: wa([0.55, 0, 1, 0.45]),
    backIn: wa([0.31, 0.01, 0.66, -0.59]),
    backOut: wa([0.33, 1.53, 0.69, 0.99]),
  };
function Yw(t) {
  if (t) return Hw(t) ? wa(t) : Array.isArray(t) ? t.map(Yw) : Xw[t];
}
function _E(
  t,
  e,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Yw(a);
  return (
    Array.isArray(c) && (u.easing = c),
    t.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function SE(t, { repeat: e, repeatType: n = "loop" }) {
  const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[r];
}
const Gw = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  bE = 1e-7,
  TE = 12;
function kE(t, e, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = e + (n - e) / 2), (s = Gw(o, r, i) - t), s > 0 ? (n = o) : (e = o);
  while (Math.abs(s) > bE && ++a < TE);
  return o;
}
function Ul(t, e, n, r) {
  if (t === e && n === r) return Be;
  const i = (s) => kE(s, 0, 1, t, n);
  return (s) => (s === 0 || s === 1 ? s : Gw(i(s), e, r));
}
const PE = Ul(0.42, 0, 1, 1),
  EE = Ul(0, 0, 0.58, 1),
  Qw = Ul(0.42, 0, 0.58, 1),
  CE = (t) => Array.isArray(t) && typeof t[0] != "number",
  Kw = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
  qw = (t) => (e) => 1 - t(1 - e),
  Zw = (t) => 1 - Math.sin(Math.acos(t)),
  Mm = qw(Zw),
  jE = Kw(Mm),
  Jw = Ul(0.33, 1.53, 0.69, 0.99),
  Dm = qw(Jw),
  AE = Kw(Dm),
  NE = (t) =>
    (t *= 2) < 1 ? 0.5 * Dm(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  ME = {
    linear: Be,
    easeIn: PE,
    easeInOut: Qw,
    easeOut: EE,
    circIn: Zw,
    circInOut: jE,
    circOut: Mm,
    backIn: Dm,
    backInOut: AE,
    backOut: Jw,
    anticipate: NE,
  },
  Y0 = (t) => {
    if (Array.isArray(t)) {
      Nm(t.length === 4);
      const [e, n, r, i] = t;
      return Ul(e, n, r, i);
    } else if (typeof t == "string") return ME[t];
    return t;
  },
  Rm = (t, e) => (n) =>
    !!(
      (zl(n) && AP.test(n) && n.startsWith(t)) ||
      (e && Object.prototype.hasOwnProperty.call(n, e))
    ),
  e_ = (t, e, n) => (r) => {
    if (!zl(r)) return r;
    const [i, s, o, a] = r.match(Sf);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  DE = (t) => Li(0, 255, t),
  ud = { ...$s, transform: (t) => Math.round(DE(t)) },
  ms = {
    test: Rm("rgb", "red"),
    parse: e_("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ud.transform(t) +
      ", " +
      ud.transform(e) +
      ", " +
      ud.transform(n) +
      ", " +
      Oa(La.transform(r)) +
      ")",
  };
function RE(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Lh = { test: Rm("#"), parse: RE, transform: ms.transform },
  po = {
    test: Rm("hsl", "hue"),
    parse: e_("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      br.transform(Oa(e)) +
      ", " +
      br.transform(Oa(n)) +
      ", " +
      Oa(La.transform(r)) +
      ")",
  },
  Ft = {
    test: (t) => ms.test(t) || Lh.test(t) || po.test(t),
    parse: (t) =>
      ms.test(t) ? ms.parse(t) : po.test(t) ? po.parse(t) : Lh.parse(t),
    transform: (t) =>
      zl(t) ? t : t.hasOwnProperty("red") ? ms.transform(t) : po.transform(t),
  },
  De = (t, e, n) => -n * t + n * e + t;
function cd(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
      ? e
      : n < 2 / 3
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  );
}
function LE({ hue: t, saturation: e, lightness: n, alpha: r }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!e) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      l = 2 * n - a;
    (i = cd(l, a, t + 1 / 3)), (s = cd(l, a, t)), (o = cd(l, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const fd = (t, e, n) => {
    const r = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - r) + r));
  },
  OE = [Lh, ms, po],
  IE = (t) => OE.find((e) => e.test(t));
function G0(t) {
  const e = IE(t);
  let n = e.parse(t);
  return e === po && (n = LE(n)), n;
}
const t_ = (t, e) => {
  const n = G0(t),
    r = G0(e),
    i = { ...n };
  return (s) => (
    (i.red = fd(n.red, r.red, s)),
    (i.green = fd(n.green, r.green, s)),
    (i.blue = fd(n.blue, r.blue, s)),
    (i.alpha = De(n.alpha, r.alpha, s)),
    ms.transform(i)
  );
};
function FE(t) {
  var e, n;
  return (
    isNaN(t) &&
    zl(t) &&
    (((e = t.match(Sf)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(Cw)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const n_ = { regex: CP, countKey: "Vars", token: "${v}", parse: Be },
  r_ = { regex: Cw, countKey: "Colors", token: "${c}", parse: Ft.parse },
  i_ = { regex: Sf, countKey: "Numbers", token: "${n}", parse: $s.parse };
function dd(t, { regex: e, countKey: n, token: r, parse: i }) {
  const s = t.tokenised.match(e);
  s &&
    ((t["num" + n] = s.length),
    (t.tokenised = t.tokenised.replace(e, r)),
    t.values.push(...s.map(i)));
}
function Dc(t) {
  const e = t.toString(),
    n = {
      value: e,
      tokenised: e,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && dd(n, n_), dd(n, r_), dd(n, i_), n;
}
function s_(t) {
  return Dc(t).values;
}
function o_(t) {
  const { values: e, numColors: n, numVars: r, tokenised: i } = Dc(t),
    s = e.length;
  return (o) => {
    let a = i;
    for (let l = 0; l < s; l++)
      l < r
        ? (a = a.replace(n_.token, o[l]))
        : l < r + n
        ? (a = a.replace(r_.token, Ft.transform(o[l])))
        : (a = a.replace(i_.token, Oa(o[l])));
    return a;
  };
}
const VE = (t) => (typeof t == "number" ? 0 : t);
function zE(t) {
  const e = s_(t);
  return o_(t)(e.map(VE));
}
const Oi = {
    test: FE,
    parse: s_,
    createTransformer: o_,
    getAnimatableNone: zE,
  },
  a_ = (t, e) => (n) => `${n > 0 ? e : t}`;
function l_(t, e) {
  return typeof t == "number"
    ? (n) => De(t, e, n)
    : Ft.test(t)
    ? t_(t, e)
    : t.startsWith("var(")
    ? a_(t, e)
    : c_(t, e);
}
const u_ = (t, e) => {
    const n = [...t],
      r = n.length,
      i = t.map((s, o) => l_(s, e[o]));
    return (s) => {
      for (let o = 0; o < r; o++) n[o] = i[o](s);
      return n;
    };
  },
  BE = (t, e) => {
    const n = { ...t, ...e },
      r = {};
    for (const i in n)
      t[i] !== void 0 && e[i] !== void 0 && (r[i] = l_(t[i], e[i]));
    return (i) => {
      for (const s in r) n[s] = r[s](i);
      return n;
    };
  },
  c_ = (t, e) => {
    const n = Oi.createTransformer(e),
      r = Dc(t),
      i = Dc(e);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Ci(u_(r.values, i.values), n)
      : a_(t, e);
  },
  wl = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r;
  },
  Q0 = (t, e) => (n) => De(t, e, n);
function UE(t) {
  return typeof t == "number"
    ? Q0
    : typeof t == "string"
    ? Ft.test(t)
      ? t_
      : c_
    : Array.isArray(t)
    ? u_
    : typeof t == "object"
    ? BE
    : Q0;
}
function $E(t, e, n) {
  const r = [],
    i = n || UE(t[0]),
    s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || Be : e;
      a = Ci(l, a);
    }
    r.push(a);
  }
  return r;
}
function f_(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if ((Nm(s === e.length), s === 1)) return () => e[0];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const o = $E(e, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < t.length - 2 && !(u < t[c + 1]); c++);
      const d = wl(t[c], t[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(Li(t[0], t[s - 1], u)) : l;
}
function HE(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = wl(0, e, r);
    t.push(De(n, 1, i));
  }
}
function WE(t) {
  const e = [0];
  return HE(e, t.length - 1), e;
}
function XE(t, e) {
  return t.map((n) => n * e);
}
function YE(t, e) {
  return t.map(() => e || Qw).splice(0, t.length - 1);
}
function Rc({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = CE(r) ? r.map(Y0) : Y0(r),
    s = { done: !1, value: e[0] },
    o = XE(n && n.length === e.length ? n : WE(e), t),
    a = f_(o, e, { ease: Array.isArray(i) ? i : YE(e, i) });
  return {
    calculatedDuration: t,
    next: (l) => ((s.value = a(l)), (s.done = l >= t), s),
  };
}
function d_(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const GE = 5;
function h_(t, e, n) {
  const r = Math.max(e - GE, 0);
  return d_(n - t(r), e - r);
}
const hd = 0.001,
  QE = 0.01,
  K0 = 10,
  KE = 0.05,
  qE = 1;
function ZE({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, s;
  yE(t <= ji(K0));
  let o = 1 - e;
  (o = Li(KE, qE, o)),
    (t = Li(QE, K0, Wr(t))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * t,
            h = c - n,
            p = Oh(u, o),
            x = Math.exp(-d);
          return hd - (h / p) * x;
        }),
        (s = (u) => {
          const d = u * o * t,
            h = d * n + n,
            p = Math.pow(o, 2) * Math.pow(u, 2) * t,
            x = Math.exp(-d),
            g = Oh(Math.pow(u, 2), o);
          return ((-i(u) + hd > 0 ? -1 : 1) * ((h - p) * x)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * t),
            d = (u - n) * t + 1;
          return -hd + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * t),
            d = (n - u) * (t * t);
          return c * d;
        }));
  const a = 5 / t,
    l = eC(i, s, a);
  if (((t = ji(t)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: t };
  }
}
const JE = 12;
function eC(t, e, n) {
  let r = n;
  for (let i = 1; i < JE; i++) r = r - t(r) / e(r);
  return r;
}
function Oh(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const tC = ["duration", "bounce"],
  nC = ["stiffness", "damping", "mass"];
function q0(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function rC(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!q0(t, nC) && q0(t, tC)) {
    const n = ZE(t);
    (e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function p_({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
  const i = t[0],
    s = t[t.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: h,
    } = rC(r),
    p = c ? -Wr(c) : 0,
    x = l / (2 * Math.sqrt(a * u)),
    g = s - i,
    _ = Wr(Math.sqrt(a / u)),
    y = Math.abs(g) < 5;
  n || (n = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5);
  let m;
  if (x < 1) {
    const v = Oh(_, x);
    m = (w) => {
      const S = Math.exp(-x * _ * w);
      return (
        s - S * (((p + x * _ * g) / v) * Math.sin(v * w) + g * Math.cos(v * w))
      );
    };
  } else if (x === 1) m = (v) => s - Math.exp(-_ * v) * (g + (p + _ * g) * v);
  else {
    const v = _ * Math.sqrt(x * x - 1);
    m = (w) => {
      const S = Math.exp(-x * _ * w),
        k = Math.min(v * w, 300);
      return (
        s - (S * ((p + x * _ * g) * Math.sinh(k) + v * g * Math.cosh(k))) / v
      );
    };
  }
  return {
    calculatedDuration: (h && d) || null,
    next: (v) => {
      const w = m(v);
      if (h) o.done = v >= d;
      else {
        let S = p;
        v !== 0 && (x < 1 ? (S = h_(m, v, w)) : (S = 0));
        const k = Math.abs(S) <= n,
          b = Math.abs(s - w) <= e;
        o.done = k && b;
      }
      return (o.value = o.done ? s : w), o;
    },
  };
}
function Z0({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = t[0],
    h = { done: !1, value: d },
    p = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    x = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let g = n * e;
  const _ = d + g,
    y = o === void 0 ? _ : o(_);
  y !== _ && (g = y - d);
  const m = (P) => -g * Math.exp(-P / r),
    v = (P) => y + m(P),
    w = (P) => {
      const C = m(P),
        j = v(P);
      (h.done = Math.abs(C) <= u), (h.value = h.done ? y : j);
    };
  let S, k;
  const b = (P) => {
    p(h.value) &&
      ((S = P),
      (k = p_({
        keyframes: [h.value, x(h.value)],
        velocity: h_(v, P, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    b(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let C = !1;
        return (
          !k && S === void 0 && ((C = !0), w(P), b(P)),
          S !== void 0 && P > S ? k.next(P - S) : (!C && w(P), h)
        );
      },
    }
  );
}
const iC = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => ke.update(e, !0),
      stop: () => qr(e),
      now: () => (ft.isProcessing ? ft.timestamp : performance.now()),
    };
  },
  J0 = 2e4;
function ex(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < J0; ) (e += n), (r = t.next(e));
  return e >= J0 ? 1 / 0 : e;
}
const sC = { decay: Z0, inertia: Z0, tween: Rc, keyframes: Rc, spring: p_ };
function Lc({
  autoplay: t = !0,
  delay: e = 0,
  driver: n = iC,
  keyframes: r,
  type: i = "keyframes",
  repeat: s = 0,
  repeatDelay: o = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...h
}) {
  let p = 1,
    x = !1,
    g,
    _;
  const y = () => {
    _ = new Promise((I) => {
      g = I;
    });
  };
  y();
  let m;
  const v = sC[i] || Rc;
  let w;
  v !== Rc &&
    typeof r[0] != "number" &&
    ((w = f_([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = v({ ...h, keyframes: r });
  let k;
  a === "mirror" &&
    (k = v({
      ...h,
      keyframes: [...r].reverse(),
      velocity: -(h.velocity || 0),
    }));
  let b = "idle",
    P = null,
    C = null,
    j = null;
  S.calculatedDuration === null && s && (S.calculatedDuration = ex(S));
  const { calculatedDuration: F } = S;
  let R = 1 / 0,
    Z = 1 / 0;
  F !== null && ((R = F + o), (Z = R * (s + 1) - o));
  let $ = 0;
  const H = (I) => {
      if (C === null) return;
      p > 0 && (C = Math.min(C, I)),
        p < 0 && (C = Math.min(I - Z / p, C)),
        P !== null ? ($ = P) : ($ = Math.round(I - C) * p);
      const ee = $ - e * (p >= 0 ? 1 : -1),
        nt = p >= 0 ? ee < 0 : ee > Z;
      ($ = Math.max(ee, 0)), b === "finished" && P === null && ($ = Z);
      let ue = $,
        Pe = S;
      if (s) {
        const Ge = $ / R;
        let cn = Math.floor(Ge),
          Ie = Ge % 1;
        !Ie && Ge >= 1 && (Ie = 1),
          Ie === 1 && cn--,
          (cn = Math.min(cn, s + 1));
        const fn = !!(cn % 2);
        fn &&
          (a === "reverse"
            ? ((Ie = 1 - Ie), o && (Ie -= o / R))
            : a === "mirror" && (Pe = k));
        let se = Li(0, 1, Ie);
        $ > Z && (se = a === "reverse" && fn ? 1 : 0), (ue = se * R);
      }
      const pe = nt ? { done: !1, value: r[0] } : Pe.next(ue);
      w && (pe.value = w(pe.value));
      let { done: ge } = pe;
      !nt && F !== null && (ge = p >= 0 ? $ >= Z : $ <= 0);
      const mt = P === null && (b === "finished" || (b === "running" && ge));
      return d && d(pe.value), mt && N(), pe;
    },
    K = () => {
      m && m.stop(), (m = void 0);
    },
    W = () => {
      (b = "idle"), K(), g(), y(), (C = j = null);
    },
    N = () => {
      (b = "finished"), c && c(), K(), g();
    },
    O = () => {
      if (x) return;
      m || (m = n(H));
      const I = m.now();
      l && l(),
        P !== null ? (C = I - P) : (!C || b === "finished") && (C = I),
        b === "finished" && y(),
        (j = C),
        (P = null),
        (b = "running"),
        m.start();
    };
  t && O();
  const T = {
    then(I, ee) {
      return _.then(I, ee);
    },
    get time() {
      return Wr($);
    },
    set time(I) {
      (I = ji(I)),
        ($ = I),
        P !== null || !m || p === 0 ? (P = I) : (C = m.now() - I / p);
    },
    get duration() {
      const I = S.calculatedDuration === null ? ex(S) : S.calculatedDuration;
      return Wr(I);
    },
    get speed() {
      return p;
    },
    set speed(I) {
      I === p || !m || ((p = I), (T.time = Wr($)));
    },
    get state() {
      return b;
    },
    play: O,
    pause: () => {
      (b = "paused"), (P = $);
    },
    stop: () => {
      (x = !0), b !== "idle" && ((b = "idle"), u && u(), W());
    },
    cancel: () => {
      j !== null && H(j), W();
    },
    complete: () => {
      b = "finished";
    },
    sample: (I) => ((C = 0), H(I)),
  };
  return T;
}
function oC(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const aC = oC(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  lC = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  du = 10,
  uC = 2e4,
  cC = (t, e) => e.type === "spring" || t === "backgroundColor" || !Ww(e.ease);
function fC(t, e, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      aC() &&
      lC.has(e) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let o = !1,
    a,
    l;
  const u = () => {
    l = new Promise((m) => {
      a = m;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: h, times: p } = i;
  if (cC(e, i)) {
    const m = Lc({ ...i, repeat: 0, delay: 0 });
    let v = { done: !1, value: c[0] };
    const w = [];
    let S = 0;
    for (; !v.done && S < uC; ) (v = m.sample(S)), w.push(v.value), (S += du);
    (p = void 0), (c = w), (d = S - du), (h = "linear");
  }
  const x = _E(t.owner.current, e, c, { ...i, duration: d, ease: h, times: p });
  i.syncStart &&
    (x.startTime = ft.isProcessing
      ? ft.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const g = () => x.cancel(),
    _ = () => {
      ke.update(g), a(), u();
    };
  return (
    (x.onfinish = () => {
      t.set(SE(c, i)), r && r(), _();
    }),
    {
      then(m, v) {
        return l.then(m, v);
      },
      attachTimeline(m) {
        return (x.timeline = m), (x.onfinish = null), Be;
      },
      get time() {
        return Wr(x.currentTime || 0);
      },
      set time(m) {
        x.currentTime = ji(m);
      },
      get speed() {
        return x.playbackRate;
      },
      set speed(m) {
        x.playbackRate = m;
      },
      get duration() {
        return Wr(d);
      },
      play: () => {
        o || (x.play(), qr(g));
      },
      pause: () => x.pause(),
      stop: () => {
        if (((o = !0), x.playState === "idle")) return;
        const { currentTime: m } = x;
        if (m) {
          const v = Lc({ ...i, autoplay: !1 });
          t.setWithVelocity(v.sample(m - du).value, v.sample(m).value, du);
        }
        _();
      },
      complete: () => x.finish(),
      cancel: _,
    }
  );
}
function dC({ keyframes: t, delay: e, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(t[t.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Be,
      pause: Be,
      stop: Be,
      then: (s) => (s(), Promise.resolve()),
      cancel: Be,
      complete: Be,
    }
  );
  return e
    ? Lc({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i })
    : i();
}
const hC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  pC = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  mC = { type: "keyframes", duration: 0.8 },
  gC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  xC = (t, { keyframes: e }) =>
    e.length > 2
      ? mC
      : Us.has(t)
      ? t.startsWith("scale")
        ? pC(e[1])
        : hC
      : gC,
  Ih = (t, e) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Oi.test(e) || e === "0") &&
            !e.startsWith("url("))
        ),
  vC = new Set(["brightness", "contrast", "saturate", "opacity"]);
function yC(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(Sf) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let s = vC.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + i + ")";
}
const wC = /([a-z-]*)\(.*?\)/g,
  Fh = {
    ...Oi,
    getAnimatableNone: (t) => {
      const e = t.match(wC);
      return e ? e.map(yC).join(" ") : t;
    },
  },
  _C = {
    ...jw,
    color: Ft,
    backgroundColor: Ft,
    outlineColor: Ft,
    fill: Ft,
    stroke: Ft,
    borderColor: Ft,
    borderTopColor: Ft,
    borderRightColor: Ft,
    borderBottomColor: Ft,
    borderLeftColor: Ft,
    filter: Fh,
    WebkitFilter: Fh,
  },
  Lm = (t) => _C[t];
function m_(t, e) {
  let n = Lm(t);
  return (
    n !== Fh && (n = Oi), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const g_ = (t) => /^0[^.\s]+$/.test(t);
function SC(t) {
  if (typeof t == "number") return t === 0;
  if (t !== null) return t === "none" || t === "0" || g_(t);
}
function bC(t, e, n, r) {
  const i = Ih(e, n);
  let s;
  Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
  const o = r.from !== void 0 ? r.from : t.get();
  let a;
  const l = [];
  for (let u = 0; u < s.length; u++)
    s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
      SC(s[u]) && l.push(u),
      typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (a = s[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      s[c] = m_(e, a);
    }
  return s;
}
function TC({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function x_(t, e) {
  return t[e] || t.default || t;
}
const Om =
  (t, e, n, r = {}) =>
  (i) => {
    const s = x_(r, t) || {},
      o = s.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - ji(o);
    const l = bC(e, t, n, s),
      u = l[0],
      c = l[l.length - 1],
      d = Ih(t, u),
      h = Ih(t, c);
    let p = {
      keyframes: l,
      velocity: e.getVelocity(),
      ease: "easeOut",
      ...s,
      delay: -a,
      onUpdate: (x) => {
        e.set(x), s.onUpdate && s.onUpdate(x);
      },
      onComplete: () => {
        i(), s.onComplete && s.onComplete();
      },
    };
    if (
      (TC(s) || (p = { ...p, ...xC(t, p) }),
      p.duration && (p.duration = ji(p.duration)),
      p.repeatDelay && (p.repeatDelay = ji(p.repeatDelay)),
      !d || !h || wE.current || s.type === !1)
    )
      return dC(p);
    if (
      e.owner &&
      e.owner.current instanceof HTMLElement &&
      !e.owner.getProps().onUpdate
    ) {
      const x = fC(e, t, p);
      if (x) return x;
    }
    return Lc(p);
  };
function Oc(t) {
  return !!(ln(t) && t.add);
}
const v_ = (t) => /^\-?\d*\.?\d+$/.test(t);
function Im(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Fm(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Vm {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Im(this.subscriptions, e), () => Fm(this.subscriptions, e);
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const kC = (t) => !isNaN(parseFloat(t));
class PC {
  constructor(e, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: s, timestamp: o } = ft;
        this.lastUpdated !== o &&
          ((this.timeDelta = s),
          (this.lastUpdated = o),
          ke.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ke.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = e),
      (this.canTrackVelocity = kC(this.current)),
      (this.owner = n.owner);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Vm());
    const r = this.events[e].add(n);
    return e === "change"
      ? () => {
          r(),
            ke.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), (this.prev = e), (this.timeDelta = r);
  }
  jump(e) {
    this.updateAndNotify(e),
      (this.prev = e),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? d_(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zo(t, e) {
  return new PC(t, e);
}
const y_ = (t) => (e) => e.test(t),
  EC = { test: (t) => t === "auto", parse: (t) => t },
  w_ = [$s, Q, br, ii, MP, NP, EC],
  ca = (t) => w_.find(y_(t)),
  CC = [...w_, Ft, Oi],
  jC = (t) => CC.find(y_(t));
function AC(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, zo(n));
}
function NC(t, e) {
  const n = Tf(t, e);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...s
  } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = YP(s[o]);
    AC(t, o, a);
  }
}
function MC(t, e, n) {
  var r, i;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)),
    o = s.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const l = s[a],
        u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !==
              null && i !== void 0
              ? i
              : e[l]),
        c != null &&
          (typeof c == "string" && (v_(c) || g_(c))
            ? (c = parseFloat(c))
            : !jC(c) && Oi.test(u) && (c = m_(l, u)),
          t.addValue(l, zo(c, { owner: t })),
          n[l] === void 0 && (n[l] = c),
          c !== null && t.setBaseTarget(l, c));
    }
}
function DC(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function RC(t, e, n) {
  const r = {};
  for (const i in t) {
    const s = DC(i, e);
    if (s !== void 0) r[i] = s;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function LC({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), r;
}
function __(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: s = t.getDefaultTransition(),
    transitionEnd: o,
    ...a
  } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  r && (s = r);
  const u = [],
    c = i && t.animationState && t.animationState.getState()[i];
  for (const d in a) {
    const h = t.getValue(d),
      p = a[d];
    if (!h || p === void 0 || (c && LC(c, d))) continue;
    const x = { delay: n, elapsed: 0, ...s };
    if (window.HandoffAppearAnimations && !h.hasAnimated) {
      const _ = t.getProps()[vE];
      _ &&
        ((x.elapsed = window.HandoffAppearAnimations(_, d, h, ke)),
        (x.syncStart = !0));
    }
    h.start(Om(d, h, p, t.shouldReduceMotion && Us.has(d) ? { type: !1 } : x));
    const g = h.animation;
    Oc(l) && (l.add(d), g.then(() => l.remove(d))), u.push(g);
  }
  return (
    o &&
      Promise.all(u).then(() => {
        o && NC(t, o);
      }),
    u
  );
}
function Vh(t, e, n = {}) {
  const r = Tf(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(__(t, r, n)) : () => Promise.resolve(),
    o =
      t.variantChildren && t.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return OC(t, e, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return l().then(() => u());
  } else return Promise.all([s(), o(n.delay)]);
}
function OC(t, e, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (t.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(t.variantChildren)
      .sort(IC)
      .forEach((u, c) => {
        u.notify("AnimationStart", e),
          o.push(
            Vh(u, e, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", e)
            )
          );
      }),
    Promise.all(o)
  );
}
function IC(t, e) {
  return t.sortNodePosition(e);
}
function FC(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => Vh(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string") r = Vh(t, e, n);
  else {
    const i = typeof e == "function" ? Tf(t, e, n.custom) : e;
    r = Promise.all(__(t, i, n));
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
const VC = [..._m].reverse(),
  zC = _m.length;
function BC(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: r }) => FC(t, n, r)));
}
function UC(t) {
  let e = BC(t);
  const n = HC();
  let r = !0;
  const i = (l, u) => {
    const c = Tf(t, u);
    if (c) {
      const { transition: d, transitionEnd: h, ...p } = c;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function s(l) {
    e = l(t);
  }
  function o(l, u) {
    const c = t.getProps(),
      d = t.getVariantContext(!0) || {},
      h = [],
      p = new Set();
    let x = {},
      g = 1 / 0;
    for (let y = 0; y < zC; y++) {
      const m = VC[y],
        v = n[m],
        w = c[m] !== void 0 ? c[m] : d[m],
        S = vl(w),
        k = m === u ? v.isActive : null;
      k === !1 && (g = y);
      let b = w === d[m] && w !== c[m] && S;
      if (
        (b && r && t.manuallyAnimateOnMount && (b = !1),
        (v.protectedKeys = { ...x }),
        (!v.isActive && k === null) ||
          (!w && !v.prevProp) ||
          wf(w) ||
          typeof w == "boolean")
      )
        continue;
      const P = $C(v.prevProp, w);
      let C = P || (m === u && v.isActive && !b && S) || (y > g && S);
      const j = Array.isArray(w) ? w : [w];
      let F = j.reduce(i, {});
      k === !1 && (F = {});
      const { prevResolvedValues: R = {} } = v,
        Z = { ...R, ...F },
        $ = (H) => {
          (C = !0), p.delete(H), (v.needsAnimating[H] = !0);
        };
      for (const H in Z) {
        const K = F[H],
          W = R[H];
        x.hasOwnProperty(H) ||
          (K !== W
            ? Mc(K) && Mc(W)
              ? !$w(K, W) || P
                ? $(H)
                : (v.protectedKeys[H] = !0)
              : K !== void 0
              ? $(H)
              : p.add(H)
            : K !== void 0 && p.has(H)
            ? $(H)
            : (v.protectedKeys[H] = !0));
      }
      (v.prevProp = w),
        (v.prevResolvedValues = F),
        v.isActive && (x = { ...x, ...F }),
        r && t.blockInitialAnimation && (C = !1),
        C &&
          !b &&
          h.push(
            ...j.map((H) => ({ animation: H, options: { type: m, ...l } }))
          );
    }
    if (p.size) {
      const y = {};
      p.forEach((m) => {
        const v = t.getBaseTarget(m);
        v !== void 0 && (y[m] = v);
      }),
        h.push({ animation: y });
    }
    let _ = !!h.length;
    return (
      r && c.initial === !1 && !t.manuallyAnimateOnMount && (_ = !1),
      (r = !1),
      _ ? e(h) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = t.variantChildren) === null ||
      d === void 0 ||
      d.forEach((p) => {
        var x;
        return (x = p.animationState) === null || x === void 0
          ? void 0
          : x.setActive(l, u);
      }),
      (n[l].isActive = u);
    const h = o(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function $C(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !$w(e, t) : !1;
}
function ns(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function HC() {
  return {
    animate: ns(!0),
    whileInView: ns(),
    whileHover: ns(),
    whileTap: ns(),
    whileDrag: ns(),
    whileFocus: ns(),
    exit: ns(),
  };
}
class WC extends Hi {
  constructor(e) {
    super(e), e.animationState || (e.animationState = UC(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), wf(e) && (this.unmount = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let XC = 0;
class YC extends Hi {
  constructor() {
    super(...arguments), (this.id = XC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: e,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i) return;
    const s = this.node.animationState.setActive("exit", !e, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const GC = { animation: { Feature: WC }, exit: { Feature: YC } },
  tx = (t, e) => Math.abs(t - e);
function QC(t, e) {
  const n = tx(t.x, e.x),
    r = tx(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class S_ {
  constructor(e, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = md(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = QC(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: h } = u,
          { timestamp: p } = ft;
        this.history.push({ ...h, timestamp: p });
        const { onStart: x, onMove: g } = this.handlers;
        c ||
          (x && x(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = pd(c, this.transformPagePoint)),
          ke.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: h } = this.handlers,
          p = md(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : pd(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, p), h && h(u, p);
      }),
      !Fw(e))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = bf(e),
      s = pd(i, this.transformPagePoint),
      { point: o } = s,
      { timestamp: a } = ft;
    this.history = [{ ...o, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(e, md(s, this.history)),
      (this.removeListeners = Ci(
        Hr(window, "pointermove", this.handlePointerMove),
        Hr(window, "pointerup", this.handlePointerUp),
        Hr(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), qr(this.updatePoint);
  }
}
function pd(t, e) {
  return e ? { point: e(t.point) } : t;
}
function nx(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function md({ point: t }, e) {
  return {
    point: t,
    delta: nx(t, b_(e)),
    offset: nx(t, KC(e)),
    velocity: qC(e, 0.1),
  };
}
function KC(t) {
  return t[0];
}
function b_(t) {
  return t[t.length - 1];
}
function qC(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    r = null;
  const i = b_(t);
  for (; n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > ji(e))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Wr(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function En(t) {
  return t.max - t.min;
}
function zh(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function rx(t, e, n, r = 0.5) {
  (t.origin = r),
    (t.originPoint = De(e.min, e.max, t.origin)),
    (t.scale = En(n) / En(e)),
    (zh(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    (t.translate = De(n.min, n.max, t.origin) - t.originPoint),
    (zh(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function Ia(t, e, n, r) {
  rx(t.x, e.x, n.x, r ? r.originX : void 0),
    rx(t.y, e.y, n.y, r ? r.originY : void 0);
}
function ix(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + En(e));
}
function ZC(t, e, n) {
  ix(t.x, e.x, n.x), ix(t.y, e.y, n.y);
}
function sx(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + En(e));
}
function Fa(t, e, n) {
  sx(t.x, e.x, n.x), sx(t.y, e.y, n.y);
}
function JC(t, { min: e, max: n }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? De(e, t, r.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = r ? De(n, t, r.max) : Math.min(t, n)),
    t
  );
}
function ox(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function ej(t, { top: e, left: n, bottom: r, right: i }) {
  return { x: ox(t.x, n, i), y: ox(t.y, e, r) };
}
function ax(t, e) {
  let n = e.min - t.min,
    r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function tj(t, e) {
  return { x: ax(t.x, e.x), y: ax(t.y, e.y) };
}
function nj(t, e) {
  let n = 0.5;
  const r = En(t),
    i = En(e);
  return (
    i > r
      ? (n = wl(e.min, e.max - r, t.min))
      : r > i && (n = wl(t.min, t.max - i, e.min)),
    Li(0, 1, n)
  );
}
function rj(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Bh = 0.35;
function ij(t = Bh) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Bh),
    { x: lx(t, "left", "right"), y: lx(t, "top", "bottom") }
  );
}
function lx(t, e, n) {
  return { min: ux(t, e), max: ux(t, n) };
}
function ux(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const cx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  mo = () => ({ x: cx(), y: cx() }),
  fx = () => ({ min: 0, max: 0 }),
  qe = () => ({ x: fx(), y: fx() });
function gr(t) {
  return [t("x"), t("y")];
}
function T_({ top: t, left: e, right: n, bottom: r }) {
  return { x: { min: e, max: n }, y: { min: t, max: r } };
}
function sj({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function oj(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function gd(t) {
  return t === void 0 || t === 1;
}
function Uh({ scale: t, scaleX: e, scaleY: n }) {
  return !gd(t) || !gd(e) || !gd(n);
}
function as(t) {
  return Uh(t) || k_(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function k_(t) {
  return dx(t.x) || dx(t.y);
}
function dx(t) {
  return t && t !== "0%";
}
function Ic(t, e, n) {
  const r = t - n,
    i = e * r;
  return n + i;
}
function hx(t, e, n, r, i) {
  return i !== void 0 && (t = Ic(t, i, r)), Ic(t, n, r) + e;
}
function $h(t, e = 0, n = 1, r, i) {
  (t.min = hx(t.min, e, n, r, i)), (t.max = hx(t.max, e, n, r, i));
}
function P_(t, { x: e, y: n }) {
  $h(t.x, e.translate, e.scale, e.originPoint),
    $h(t.y, n.translate, n.scale, n.originPoint);
}
function aj(t, e, n, r = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const l = s.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        go(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), P_(t, o)),
      r && as(s.latestValues) && go(t, s.latestValues));
  }
  (e.x = px(e.x)), (e.y = px(e.y));
}
function px(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
    ? t
    : 1;
}
function li(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function mx(t, e, [n, r, i]) {
  const s = e[i] !== void 0 ? e[i] : 0.5,
    o = De(t.min, t.max, s);
  $h(t, e[n], e[r], o, e.scale);
}
const lj = ["x", "scaleX", "originX"],
  uj = ["y", "scaleY", "originY"];
function go(t, e) {
  mx(t.x, e, lj), mx(t.y, e, uj);
}
function E_(t, e) {
  return T_(oj(t.getBoundingClientRect(), e));
}
function cj(t, e, n) {
  const r = E_(t, n),
    { scroll: i } = e;
  return i && (li(r.x, i.offset.x), li(r.y, i.offset.y)), r;
}
const fj = new WeakMap();
class dj {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = qe()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(bf(l, "page").point);
      },
      s = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: h } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = zw(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          gr((x) => {
            let g = this.getAxisMotionValue(x).get() || 0;
            if (br.test(g)) {
              const { projection: _ } = this.visualElement;
              if (_ && _.layout) {
                const y = _.layout.layoutBox[x];
                y && (g = En(y) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[x] = g;
          }),
          h && ke.update(() => h(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      o = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: h,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: x } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = hj(x)),
            this.currentDirection !== null && h && h(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, x),
          this.updateAxis("y", u.point, x),
          this.visualElement.render(),
          p && p(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new S_(
      e,
      { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(e, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && ke.update(() => s(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !hu(e, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    this.constraints &&
      this.constraints[e] &&
      (o = JC(o, this.constraints[e], this.elastic[e])),
      s.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    e && ho(e)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : e && r
      ? (this.constraints = ej(r.layoutBox, e))
      : (this.constraints = !1),
      (this.elastic = ij(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        gr((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = rj(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ho(e)) return !1;
    const r = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = cj(r, i.root, this.visualElement.getTransformPagePoint());
    let o = tj(i.layout.layoutBox, s);
    if (n) {
      const a = n(sj(o));
      (this.hasMutatedConstraints = !!a), a && (o = T_(a));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = gr((c) => {
        if (!hu(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: r ? e[c] : 0,
            bounceStiffness: h,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, x);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Om(e, r, 0, n));
  }
  stopAnimation() {
    gr((e) => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    gr((n) => {
      const { drag: r } = this.getProps();
      if (!hu(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(e[n] - De(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ho(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    gr((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const l = a.get();
        i[o] = nj({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      gr((o) => {
        if (!hu(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(De(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    fj.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = Hr(e, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        ho(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = zr(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (gr((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Bh,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function hu(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function hj(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class pj extends Hi {
  constructor(e) {
    super(e),
      (this.removeGroupControls = Be),
      (this.removeListeners = Be),
      (this.controls = new dj(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Be);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const gx = (t) => (e, n) => {
  t && ke.update(() => t(e, n));
};
class mj extends Hi {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Be);
  }
  onPointerDown(e) {
    this.session = new S_(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: gx(e),
      onStart: gx(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && ke.update(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Hr(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function gj() {
  const t = E.useContext(wm);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t,
    i = E.useId();
  return E.useEffect(() => r(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const $u = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function xx(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const fa = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (Q.test(t)) t = parseFloat(t);
        else return t;
      const n = xx(t, e.target.x),
        r = xx(t, e.target.y);
      return `${n}% ${r}%`;
    },
  },
  xj = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const r = t,
        i = Oi.parse(t);
      if (i.length > 5) return r;
      const s = Oi.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        l = n.y.scale * e.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = De(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class vj extends Hn.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = e;
    TP(yj),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($u.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || e.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              ke.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      queueMicrotask(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function C_(t) {
  const [e, n] = gj(),
    r = E.useContext(bw);
  return Hn.createElement(vj, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(Tw),
    isPresent: e,
    safeToRemove: n,
  });
}
const yj = {
    borderRadius: {
      ...fa,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fa,
    borderTopRightRadius: fa,
    borderBottomLeftRadius: fa,
    borderBottomRightRadius: fa,
    boxShadow: xj,
  },
  j_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  wj = j_.length,
  vx = (t) => (typeof t == "string" ? parseFloat(t) : t),
  yx = (t) => typeof t == "number" || Q.test(t);
function _j(t, e, n, r, i, s) {
  i
    ? ((t.opacity = De(0, n.opacity !== void 0 ? n.opacity : 1, Sj(r))),
      (t.opacityExit = De(e.opacity !== void 0 ? e.opacity : 1, 0, bj(r))))
    : s &&
      (t.opacity = De(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < wj; o++) {
    const a = `border${j_[o]}Radius`;
    let l = wx(e, a),
      u = wx(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || yx(l) === yx(u)
        ? ((t[a] = Math.max(De(vx(l), vx(u), r), 0)),
          (br.test(u) || br.test(l)) && (t[a] += "%"))
        : (t[a] = u);
  }
  (e.rotate || n.rotate) && (t.rotate = De(e.rotate || 0, n.rotate || 0, r));
}
function wx(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Sj = A_(0, 0.5, Mm),
  bj = A_(0.5, 0.95, Be);
function A_(t, e, n) {
  return (r) => (r < t ? 0 : r > e ? 1 : n(wl(t, e, r)));
}
function _x(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function Nn(t, e) {
  _x(t.x, e.x), _x(t.y, e.y);
}
function Sx(t, e, n, r, i) {
  return (
    (t -= e), (t = Ic(t, 1 / n, r)), i !== void 0 && (t = Ic(t, 1 / i, r)), t
  );
}
function Tj(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (
    (br.test(e) &&
      ((e = parseFloat(e)), (e = De(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = De(s.min, s.max, r);
  t === s && (a -= e),
    (t.min = Sx(t.min, e, n, a, i)),
    (t.max = Sx(t.max, e, n, a, i));
}
function bx(t, e, [n, r, i], s, o) {
  Tj(t, e[n], e[r], e[i], e.scale, s, o);
}
const kj = ["x", "scaleX", "originX"],
  Pj = ["y", "scaleY", "originY"];
function Tx(t, e, n, r) {
  bx(t.x, e, kj, n ? n.x : void 0, r ? r.x : void 0),
    bx(t.y, e, Pj, n ? n.y : void 0, r ? r.y : void 0);
}
function kx(t) {
  return t.translate === 0 && t.scale === 1;
}
function N_(t) {
  return kx(t.x) && kx(t.y);
}
function Ej(t, e) {
  return (
    t.x.min === e.x.min &&
    t.x.max === e.x.max &&
    t.y.min === e.y.min &&
    t.y.max === e.y.max
  );
}
function M_(t, e) {
  return (
    Math.round(t.x.min) === Math.round(e.x.min) &&
    Math.round(t.x.max) === Math.round(e.x.max) &&
    Math.round(t.y.min) === Math.round(e.y.min) &&
    Math.round(t.y.max) === Math.round(e.y.max)
  );
}
function Px(t) {
  return En(t.x) / En(t.y);
}
class Cj {
  constructor() {
    this.members = [];
  }
  add(e) {
    Im(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (Fm(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      r.instance && r.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = r),
        n && (e.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: r } = e;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ex(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x,
    s = t.y.translate / e.y;
  if (
    ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const o = t.x.scale * e.x,
    a = t.y.scale * e.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const jj = (t, e) => t.depth - e.depth;
class Aj {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    Im(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    Fm(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(jj),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function Nj(t, e) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= e && (qr(r), t(s - e));
    };
  return ke.read(r, !0), () => qr(r);
}
function Mj(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function Dj(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Rj(t, e, n) {
  const r = ln(t) ? t : zo(t);
  return r.start(Om("", r, e, n)), r.animation;
}
const Cx = ["", "X", "Y", "Z"],
  jx = 1e3;
let Lj = 0;
const ls = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function D_({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      (this.id = Lj++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (ls.totalNodes =
            ls.resolvedTargetDeltas =
            ls.recalculatedProjection =
              0),
            this.nodes.forEach(Fj),
            this.nodes.forEach($j),
            this.nodes.forEach(Hj),
            this.nodes.forEach(Vj),
            Mj(ls);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Aj());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Vm()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Dj(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        t)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        t(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = Nj(h, 250)),
            $u.hasAnimatedSinceResize &&
              (($u.hasAnimatedSinceResize = !1), this.nodes.forEach(Nx));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: p,
              layout: x,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || Qj,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: y } =
                  c.getProps(),
                m = !this.targetLayout || !M_(this.targetLayout, x) || p,
                v = !h && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (h && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, v);
                const w = { ...x_(g, "layout"), onPlay: _, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                h || Nx(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        qr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Wj),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ax);
        return;
      }
      this.isUpdating || this.nodes.forEach(Bj),
        (this.isUpdating = !1),
        this.nodes.forEach(Uj),
        this.nodes.forEach(Oj),
        this.nodes.forEach(Ij),
        this.clearAllSnapshots();
      const a = performance.now();
      (ft.delta = Li(0, 1e3 / 60, a - ft.timestamp)),
        (ft.timestamp = a),
        (ft.isProcessing = !0),
        od.update.process(ft),
        od.preRender.process(ft),
        od.render.process(ft),
        (ft.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(zj), this.sharedNodes.forEach(Xj);
    }
    scheduleUpdateProjection() {
      ke.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ke.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = qe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !N_(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || as(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Kj(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return qe();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (li(a.x, l.offset.x), li(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = qe();
      Nn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Nn(a, o);
            const { scroll: h } = this.root;
            h && (li(a.x, -h.offset.x), li(a.y, -h.offset.y));
          }
          li(a.x, c.offset.x), li(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = qe();
      Nn(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          go(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          as(c.latestValues) && go(l, c.latestValues);
      }
      return as(this.latestValues) && go(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = qe();
      Nn(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !as(u.latestValues)) continue;
        Uh(u.latestValues) && u.updateSnapshot();
        const c = qe(),
          d = u.measurePageBox();
        Nn(c, d),
          Tx(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return as(this.latestValues) && Tx(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ft.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = ft.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = qe()),
              (this.relativeTargetOrigin = qe()),
              Fa(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Nn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = qe()), (this.targetWithTransforms = qe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                ZC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Nn(this.target, this.layout.layoutBox),
                P_(this.target, this.targetDelta))
              : Nn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = qe()),
                (this.relativeTargetOrigin = qe()),
                Fa(this.relativeTargetOrigin, this.target, p.target),
                Nn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ls.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Uh(this.parent.latestValues) ||
          k_(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ft.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Nn(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        p = this.treeScale.y;
      aj(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: x } = a;
      if (!x) {
        this.projectionTransform &&
          ((this.projectionDelta = mo()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = mo()),
        (this.projectionDeltaWithTransform = mo()));
      const g = this.projectionTransform;
      Ia(this.projectionDelta, this.layoutCorrected, x, this.latestValues),
        (this.projectionTransform = Ex(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== h ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", x)),
        ls.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = mo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = qe(),
        p = l ? l.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        g = p !== x,
        _ = this.getStack(),
        y = !_ || _.members.length <= 1,
        m = !!(g && !y && this.options.crossfade === !0 && !this.path.some(Gj));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Mx(d.x, o.x, S),
          Mx(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Fa(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Yj(this.relativeTarget, this.relativeTargetOrigin, h, S),
            v && Ej(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = qe()),
            Nn(v, this.relativeTarget)),
          g &&
            ((this.animationValues = c), _j(c, u, this.latestValues, S, m, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (qr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ke.update(() => {
          ($u.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Rj(0, jx, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(jx),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          R_(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || qe();
          const d = En(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const h = En(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Nn(a, l),
          go(a, c),
          Ia(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Cj()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Cx.length; c++) {
        const d = "rotate" + Cx[c];
        l[d] && ((u[d] = l[d]), o.setStaticValue(d, 0));
      }
      o.render();
      for (const c in u) o.setStaticValue(c, u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Uu(o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Uu(o.pointerEvents) || "")),
          this.hasProjected &&
            !as(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ex(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: p, y: x } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${x.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const g in Ac) {
        if (h[g] === void 0) continue;
        const { correct: _, applyTo: y } = Ac[g],
          m = u.transform === "none" ? h[g] : _(h[g], d);
        if (y) {
          const v = y.length;
          for (let w = 0; w < v; w++) u[y[w]] = m;
        } else u[g] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Uu(o.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ax),
        this.root.sharedNodes.clear();
    }
  };
}
function Oj(t) {
  t.updateLayout();
}
function Ij(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout,
      { animationType: s } = t.options,
      o = n.source !== t.layout.source;
    s === "size"
      ? gr((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            p = En(h);
          (h.min = r[d].min), (h.max = h.min + p);
        })
      : R_(s, n.layoutBox, r) &&
        gr((d) => {
          const h = o ? n.measuredBox[d] : n.layoutBox[d],
            p = En(r[d]);
          (h.max = h.min + p),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[d].max = t.relativeTarget[d].min + p));
        });
    const a = mo();
    Ia(a, r, n.layoutBox);
    const l = mo();
    o ? Ia(l, t.applyTransform(i, !0), n.measuredBox) : Ia(l, r, n.layoutBox);
    const u = !N_(a);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const x = qe();
          Fa(x, n.layoutBox, h.layoutBox);
          const g = qe();
          Fa(g, r, p.layoutBox),
            M_(x, g) || (c = !0),
            d.options.layoutRoot &&
              ((t.relativeTarget = g),
              (t.relativeTargetOrigin = x),
              (t.relativeParent = d));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function Fj(t) {
  ls.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Vj(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function zj(t) {
  t.clearSnapshot();
}
function Ax(t) {
  t.clearMeasurements();
}
function Bj(t) {
  t.isLayoutDirty = !1;
}
function Uj(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Nx(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function $j(t) {
  t.resolveTargetDelta();
}
function Hj(t) {
  t.calcProjection();
}
function Wj(t) {
  t.resetRotation();
}
function Xj(t) {
  t.removeLeadSnapshot();
}
function Mx(t, e, n) {
  (t.translate = De(e.translate, 0, n)),
    (t.scale = De(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Dx(t, e, n, r) {
  (t.min = De(e.min, n.min, r)), (t.max = De(e.max, n.max, r));
}
function Yj(t, e, n, r) {
  Dx(t.x, e.x, n.x, r), Dx(t.y, e.y, n.y, r);
}
function Gj(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Qj = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Rx = (t) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
  Lx = Rx("applewebkit/") && !Rx("chrome/") ? Math.round : Be;
function Ox(t) {
  (t.min = Lx(t.min)), (t.max = Lx(t.max));
}
function Kj(t) {
  Ox(t.x), Ox(t.y);
}
function R_(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !zh(Px(e), Px(n), 0.2))
  );
}
const qj = D_({
    attachResizeListener: (t, e) => zr(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  xd = { current: void 0 },
  L_ = D_({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!xd.current) {
        const t = new qj({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (xd.current = t);
      }
      return xd.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Zj = {
    pan: { Feature: mj },
    drag: { Feature: pj, ProjectionNode: L_, MeasureLayout: C_ },
  },
  Jj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function eA(t) {
  const e = Jj.exec(t);
  if (!e) return [,];
  const [, n, r] = e;
  return [n, r];
}
function Hh(t, e, n = 1) {
  const [r, i] = eA(t);
  if (!r) return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return v_(o) ? parseFloat(o) : o;
  } else return Dh(i) ? Hh(i, e, n + 1) : i;
}
function tA(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element)) return { target: e, transitionEnd: n };
  n && (n = { ...n }),
    t.values.forEach((i) => {
      const s = i.get();
      if (!Dh(s)) return;
      const o = Hh(s, r);
      o && i.set(o);
    });
  for (const i in e) {
    const s = e[i];
    if (!Dh(s)) continue;
    const o = Hh(s, r);
    o && ((e[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: e, transitionEnd: n };
}
const nA = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  O_ = (t) => nA.has(t),
  rA = (t) => Object.keys(t).some(O_),
  Ix = (t) => t === $s || t === Q,
  Fx = (t, e) => parseFloat(t.split(", ")[e]),
  Vx =
    (t, e) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Fx(i[1], e);
      {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? Fx(s[1], t) : 0;
      }
    },
  iA = new Set(["x", "y", "z"]),
  sA = Vl.filter((t) => !iA.has(t));
function oA(t) {
  const e = [];
  return (
    sA.forEach((n) => {
      const r = t.getValue(n);
      r !== void 0 &&
        (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    e.length && t.render(),
    e
  );
}
const Bo = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: Vx(4, 13),
  y: Vx(5, 14),
};
Bo.translateX = Bo.x;
Bo.translateY = Bo.y;
const aA = (t, e, n) => {
    const r = e.measureViewportBox(),
      i = e.current,
      s = getComputedStyle(i),
      { display: o } = s,
      a = {};
    o === "none" && e.setStaticValue("display", t.display || "block"),
      n.forEach((u) => {
        a[u] = Bo[u](r, s);
      }),
      e.render();
    const l = e.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = e.getValue(u);
        c && c.jump(a[u]), (t[u] = Bo[u](l, s));
      }),
      t
    );
  },
  lA = (t, e, n = {}, r = {}) => {
    (e = { ...e }), (r = { ...r });
    const i = Object.keys(e).filter(O_);
    let s = [],
      o = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = t.getValue(l);
        if (!t.hasValue(l)) return;
        let c = n[l],
          d = ca(c);
        const h = e[l];
        let p;
        if (Mc(h)) {
          const x = h.length,
            g = h[0] === null ? 1 : 0;
          (c = h[g]), (d = ca(c));
          for (let _ = g; _ < x && h[_] !== null; _++)
            p ? Nm(ca(h[_]) === p) : (p = ca(h[_]));
        } else p = ca(h);
        if (d !== p)
          if (Ix(d) && Ix(p)) {
            const x = u.get();
            typeof x == "string" && u.set(parseFloat(x)),
              typeof h == "string"
                ? (e[l] = parseFloat(h))
                : Array.isArray(h) && p === Q && (e[l] = h.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            p != null &&
            p.transform &&
            (c === 0 || h === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (e[l] = d.transform(h))
              : (o || ((s = oA(t)), (o = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : e[l]),
                u.jump(h));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = aA(e, t, a);
      return (
        s.length &&
          s.forEach(([c, d]) => {
            t.getValue(c).set(d);
          }),
        t.render(),
        yf && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: e, transitionEnd: r };
  };
function uA(t, e, n, r) {
  return rA(e) ? lA(t, e, n, r) : { target: e, transitionEnd: r };
}
const cA = (t, e, n, r) => {
    const i = tA(t, e, r);
    return (e = i.target), (r = i.transitionEnd), uA(t, e, n, r);
  },
  Wh = { current: null },
  I_ = { current: !1 };
function fA() {
  if (((I_.current = !0), !!yf))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Wh.current = t.matches);
      t.addListener(e), e();
    } else Wh.current = !1;
}
function dA(t, e, n) {
  const { willChange: r } = e;
  for (const i in e) {
    const s = e[i],
      o = n[i];
    if (ln(s)) t.addValue(i, s), Oc(r) && r.add(i);
    else if (ln(o)) t.addValue(i, zo(s, { owner: t })), Oc(r) && r.remove(i);
    else if (o !== s)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, zo(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (const i in n) e[i] === void 0 && t.removeValue(i);
  return e;
}
const zx = new WeakMap(),
  F_ = Object.keys(yl),
  hA = F_.length,
  Bx = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  pA = Sm.length;
class mA {
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: s,
    },
    o = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ke.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.isControllingVariants = _f(n)),
      (this.isVariantNode = Sw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const h = c[d];
      a[d] !== void 0 && ln(h) && (h.set(a[d], !1), Oc(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    (this.current = e),
      zx.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      I_.current || fA(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Wh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    zx.delete(this.current),
      this.projection && this.projection.unmount(),
      qr(this.notifyUpdate),
      qr(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Us.has(e),
      i = n.on("change", (o) => {
        (this.latestValues[e] = o),
          this.props.onUpdate && ke.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), s();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, r, i, s) {
    let o, a;
    for (let l = 0; l < hA; l++) {
      const u = F_[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: h,
          MeasureLayout: p,
        } = yl[u];
      h && (o = h),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          p && (a = p));
    }
    if (!this.projection && o) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: h,
        layoutRoot: p,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && ho(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
        layoutRoot: p,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : qe();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Bx.length; r++) {
      const i = Bx[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = e["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = dA(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < pA; r++) {
      const i = Sm[r],
        s = this.props[i];
      (vl(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    n !== this.values.get(e) &&
      (this.removeValue(e), this.bindToMotionValue(e, n)),
      this.values.set(e, n),
      (this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = zo(n, { owner: this })), this.addValue(e, r)),
      r
    );
  }
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current
      ? this.latestValues[e]
      : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, e, this.options);
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Am(this.props, r)) === null || n === void 0
            ? void 0
            : n[e]
          : void 0;
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !ln(s)
      ? s
      : this.initialValues[e] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Vm()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class V_ extends mA {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  makeTargetAnimatableFromInstance(
    { transition: e, transitionEnd: n, ...r },
    { transformValues: i },
    s
  ) {
    let o = RC(r, e || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
      MC(this, r, o);
      const a = cA(this, r, o, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: e, transitionEnd: n, ...r };
  }
}
function gA(t) {
  return window.getComputedStyle(t);
}
class xA extends V_ {
  readValueFromInstance(e, n) {
    if (Us.has(n)) {
      const r = Lm(n);
      return (r && r.default) || 0;
    } else {
      const r = gA(e),
        i = (Ew(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return E_(e, n);
  }
  build(e, n, r, i) {
    Tm(e, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return jm(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    ln(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(e, n, r, i) {
    Dw(e, n, r, i);
  }
}
class vA extends V_ {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Us.has(n)) {
      const r = Lm(n);
      return (r && r.default) || 0;
    }
    return (n = Rw.has(n) ? n : Cm(n)), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return qe();
  }
  scrapeMotionValuesFromProps(e, n) {
    return Ow(e, n);
  }
  build(e, n, r, i) {
    Pm(e, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, r, i) {
    Lw(e, n, r, i);
  }
  mount(e) {
    (this.isSVGTag = Em(e.tagName)), super.mount(e);
  }
}
const yA = (t, e) =>
    bm(t)
      ? new vA(e, { enableHardwareAcceleration: !1 })
      : new xA(e, { enableHardwareAcceleration: !0 }),
  wA = { layout: { ProjectionNode: L_, MeasureLayout: C_ } },
  _A = { ...GC, ...pE, ...Zj, ...wA },
  D = SP((t, e) => tE(t, e, _A, yA));
function Dr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function z_(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var kn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Uo = { duration: 0.5, overwrite: !1, delay: 0 },
  zm,
  Mt,
  ze,
  Vn = 1e8,
  ye = 1 / Vn,
  Xh = Math.PI * 2,
  SA = Xh / 4,
  bA = 0,
  B_ = Math.sqrt,
  TA = Math.cos,
  kA = Math.sin,
  pt = function (e) {
    return typeof e == "string";
  },
  Ue = function (e) {
    return typeof e == "function";
  },
  Zr = function (e) {
    return typeof e == "number";
  },
  Bm = function (e) {
    return typeof e > "u";
  },
  Pr = function (e) {
    return typeof e == "object";
  },
  sn = function (e) {
    return e !== !1;
  },
  Um = function () {
    return typeof window < "u";
  },
  pu = function (e) {
    return Ue(e) || pt(e);
  },
  U_ =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Dt = Array.isArray,
  Yh = /(?:-?\.?\d|\.)+/gi,
  $_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  xo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  vd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  H_ = /[+-]=-?[.\d]+/,
  W_ = /[^,'"\[\]\s]+/gi,
  PA = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Me,
  Dn,
  Gh,
  $m,
  Cn = {},
  Fc = {},
  X_,
  Y_ = function (e) {
    return (Fc = Ms(e, Cn)) && un;
  },
  Hm = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Vc = function (e, n) {
    return !n && console.warn(e);
  },
  G_ = function (e, n) {
    return (e && (Cn[e] = n) && Fc && (Fc[e] = n)) || Cn;
  },
  _l = function () {
    return 0;
  },
  EA = { suppressEvents: !0, isStart: !0, kill: !1 },
  Hu = { suppressEvents: !0, kill: !1 },
  CA = { suppressEvents: !0 },
  Wm = {},
  Ai = [],
  Qh = {},
  Q_,
  wn = {},
  yd = {},
  Ux = 30,
  Wu = [],
  Xm = "",
  Ym = function (e) {
    var n = e[0],
      r,
      i;
    if ((Pr(n) || Ue(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = Wu.length; i-- && !Wu[i].targetTest(n); );
      r = Wu[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new yS(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  ws = function (e) {
    return e._gsap || Ym(zn(e))[0]._gsap;
  },
  K_ = function (e, n, r) {
    return (r = e[n]) && Ue(r)
      ? e[n]()
      : (Bm(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  on = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  Xe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  _t = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Eo = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  jA = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  zc = function () {
    var e = Ai.length,
      n = Ai.slice(0),
      r,
      i;
    for (Qh = {}, Ai.length = 0, r = 0; r < e; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  q_ = function (e, n, r, i) {
    Ai.length && !Mt && zc(),
      e.render(n, r, i || (Mt && n < 0 && (e._initted || e._startAt))),
      Ai.length && !Mt && zc();
  },
  Z_ = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(W_).length < 2
      ? n
      : pt(e)
      ? e.trim()
      : e;
  },
  J_ = function (e) {
    return e;
  },
  Yn = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  AA = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  Ms = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  $x = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Pr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  Bc = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  Va = function (e) {
    var n = e.parent || Me,
      r = e.keyframes ? AA(Dt(e.keyframes)) : Yn;
    if (sn(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  NA = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  eS = function (e, n, r, i, s) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = e[i],
      a;
    if (s) for (a = n[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = o),
      (n.parent = n._dp = e),
      n
    );
  },
  kf = function (e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = n._prev,
      o = n._next;
    s ? (s._next = o) : e[r] === n && (e[r] = o),
      o ? (o._prev = s) : e[i] === n && (e[i] = s),
      (n._next = n._prev = n.parent = null);
  },
  Ii = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  _s = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  MA = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  Kh = function (e, n, r, i) {
    return (
      e._startAt &&
      (Mt
        ? e._startAt.revert(Hu)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  DA = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Hx = function (e) {
    return e._repeat ? $o(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  $o = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  Uc = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  Pf = function (e) {
    return (e._end = _t(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ye) || 0)
    ));
  },
  Ef = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = _t(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        Pf(e),
        r._dirty || _s(r, e)),
      e
    );
  },
  tS = function (e, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((r = Uc(e.rawTime(), n)),
        (!n._dur || $l(0, n.totalDuration(), r) - n._tTime > ye) &&
          n.render(r, !0)),
      _s(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -ye;
    }
  },
  yr = function (e, n, r, i) {
    return (
      n.parent && Ii(n),
      (n._start = _t(
        (Zr(r) ? r : r || e !== Me ? Mn(e, r, n) : e._time) + n._delay
      )),
      (n._end = _t(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      eS(e, n, "_first", "_last", e._sort ? "_start" : 0),
      qh(n) || (e._recent = n),
      i || tS(e, n),
      e._ts < 0 && Ef(e, e._tTime),
      e
    );
  },
  nS = function (e, n) {
    return (
      (Cn.ScrollTrigger || Hm("scrollTrigger", n)) &&
      Cn.ScrollTrigger.create(n, e)
    );
  },
  rS = function (e, n, r, i, s) {
    if ((Qm(e, n, s), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !Mt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Q_ !== _n.frame
    )
      return Ai.push(e), (e._lazy = [s, i]), 1;
  },
  RA = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  qh = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  LA = function (e, n, r, i) {
    var s = e.ratio,
      o =
        n < 0 ||
        (!n &&
          ((!e._start && RA(e) && !(!e._initted && qh(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !qh(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      d;
    if (
      (a &&
        e._repeat &&
        ((l = $l(0, e._tDur, n)),
        (c = $o(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== $o(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Mt || i || e._zTime === ye || (!n && e._zTime))
    ) {
      if (!e._initted && rS(e, n, i, r, l)) return;
      for (
        d = e._zTime,
          e._zTime = n || (r ? ye : 0),
          r || (r = n && !d),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      n < 0 && Kh(e, n, r, !0),
        e._onUpdate && !r && Bn(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Bn(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === o &&
          (o && Ii(e, 1),
          !r &&
            !Mt &&
            (Bn(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  OA = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  Ho = function (e, n, r, i) {
    var s = e._repeat,
      o = _t(n) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : _t(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !i && Ef(e, (e._tTime = e._tDur * a)),
      e.parent && Pf(e),
      r || _s(e.parent, e),
      e
    );
  },
  Wx = function (e) {
    return e instanceof Jt ? _s(e) : Ho(e, e._dur);
  },
  IA = { _start: 0, endTime: _l, totalDuration: _l },
  Mn = function t(e, n, r) {
    var i = e.labels,
      s = e._recent || IA,
      o = e.duration() >= Vn ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return pt(n) && (isNaN(n) || n in i)
      ? ((l = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (a = n.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (n = n.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
          ? (n in i || (i[n] = o), i[n])
          : ((l = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
            u && r && (l = (l / 100) * (Dt(r) ? r[0] : r).totalDuration()),
            a > 1 ? t(e, n.substr(0, a - 1), r) + l : o + l))
      : n == null
      ? o
      : +n;
  },
  za = function (e, n, r) {
    var i = Zr(n[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = n[s],
      a,
      l;
    if ((i && (o.duration = n[1]), (o.parent = r), e)) {
      for (a = o, l = r; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = sn(l.vars.inherit) && l.parent);
      (o.immediateRender = sn(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = n[s - 1]);
    }
    return new Je(n[0], o, n[s + 1]);
  },
  Wi = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  $l = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  Nt = function (e, n) {
    return !pt(e) || !(n = PA.exec(e)) ? "" : n[1];
  },
  FA = function (e, n, r) {
    return Wi(r, function (i) {
      return $l(e, n, i);
    });
  },
  Zh = [].slice,
  iS = function (e, n) {
    return (
      e &&
      Pr(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && Pr(e[0]))) &&
      !e.nodeType &&
      e !== Dn
    );
  },
  VA = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var s;
        return (pt(i) && !n) || iS(i, 1)
          ? (s = r).push.apply(s, zn(i))
          : r.push(i);
      }) || r
    );
  },
  zn = function (e, n, r) {
    return ze && !n && ze.selector
      ? ze.selector(e)
      : pt(e) && !r && (Gh || !Wo())
      ? Zh.call((n || $m).querySelectorAll(e), 0)
      : Dt(e)
      ? VA(e, r)
      : iS(e)
      ? Zh.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Jh = function (e) {
    return (
      (e = zn(e)[0] || Vc("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return zn(
          n,
          r.querySelectorAll
            ? r
            : r === e
            ? Vc("Invalid scope") || $m.createElement("div")
            : e
        );
      }
    );
  },
  sS = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  oS = function (e) {
    if (Ue(e)) return e;
    var n = Pr(e) ? e : { each: e },
      r = Ss(n.ease),
      i = n.from || 0,
      s = parseFloat(n.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      u = n.axis,
      c = i,
      d = i;
    return (
      pt(i)
        ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !a && l && ((c = i[0]), (d = i[1])),
      function (h, p, x) {
        var g = (x || n).length,
          _ = o[g],
          y,
          m,
          v,
          w,
          S,
          k,
          b,
          P,
          C;
        if (!_) {
          if (((C = n.grid === "auto" ? 0 : (n.grid || [1, Vn])[1]), !C)) {
            for (
              b = -Vn;
              b < (b = x[C++].getBoundingClientRect().left) && C < g;

            );
            C--;
          }
          for (
            _ = o[g] = [],
              y = l ? Math.min(C, g) * c - 0.5 : i % C,
              m = C === Vn ? 0 : l ? (g * d) / C - 0.5 : (i / C) | 0,
              b = 0,
              P = Vn,
              k = 0;
            k < g;
            k++
          )
            (v = (k % C) - y),
              (w = m - ((k / C) | 0)),
              (_[k] = S = u ? Math.abs(u === "y" ? w : v) : B_(v * v + w * w)),
              S > b && (b = S),
              S < P && (P = S);
          i === "random" && sS(_),
            (_.max = b - P),
            (_.min = P),
            (_.v = g =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (C > g
                    ? g - 1
                    : u
                    ? u === "y"
                      ? g / C
                      : C
                    : Math.max(C, g / C)) ||
                0) * (i === "edges" ? -1 : 1)),
            (_.b = g < 0 ? s - g : s),
            (_.u = Nt(n.amount || n.each) || 0),
            (r = r && g < 0 ? gS(r) : r);
        }
        return (
          (g = (_[h] - _.min) / _.max || 0),
          _t(_.b + (r ? r(g) : g) * _.v) + _.u
        );
      }
    );
  },
  ep = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = _t(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (Zr(r) ? 0 : Nt(r));
    };
  },
  aS = function (e, n) {
    var r = Dt(e),
      i,
      s;
    return (
      !r &&
        Pr(e) &&
        ((i = r = e.radius || Vn),
        e.values
          ? ((e = zn(e.values)), (s = !Zr(e[0])) && (i *= i))
          : (e = ep(e.increment))),
      Wi(
        n,
        r
          ? Ue(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= i ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = Vn,
                    c = 0,
                    d = e.length,
                    h,
                    p;
                  d--;

                )
                  s
                    ? ((h = e[d].x - a), (p = e[d].y - l), (h = h * h + p * p))
                    : (h = Math.abs(e[d] - a)),
                    h < u && ((u = h), (c = d));
                return (
                  (c = !i || u <= i ? e[c] : o),
                  s || c === o || Zr(o) ? c : c + Nt(o)
                );
              }
          : ep(e)
      )
    );
  },
  lS = function (e, n, r, i) {
    return Wi(Dt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return Dt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  zA = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (s, o) {
        return o(s);
      }, i);
    };
  },
  BA = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || Nt(r));
    };
  },
  UA = function (e, n, r) {
    return cS(e, n, 0, 1, r);
  },
  uS = function (e, n, r) {
    return Wi(r, function (i) {
      return e[~~n(i)];
    });
  },
  $A = function t(e, n, r) {
    var i = n - e;
    return Dt(e)
      ? uS(e, t(0, e.length), n)
      : Wi(r, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  HA = function t(e, n, r) {
    var i = n - e,
      s = i * 2;
    return Dt(e)
      ? uS(e, t(0, e.length - 1), n)
      : Wi(r, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
        });
  },
  Sl = function (e) {
    for (var n = 0, r = "", i, s, o, a; ~(i = e.indexOf("random(", n)); )
      (o = e.indexOf(")", i)),
        (a = e.charAt(i + 7) === "["),
        (s = e.substr(i + 7, o - i - 7).match(a ? W_ : Yh)),
        (r +=
          e.substr(n, i - n) + lS(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (n = o + 1);
    return r + e.substr(n, e.length - n);
  },
  cS = function (e, n, r, i, s) {
    var o = n - e,
      a = i - r;
    return Wi(s, function (l) {
      return r + (((l - e) / o) * a || 0);
    });
  },
  WA = function t(e, n, r, i) {
    var s = isNaN(e + n)
      ? 0
      : function (p) {
          return (1 - p) * e + p * n;
        };
    if (!s) {
      var o = pt(e),
        a = {},
        l,
        u,
        c,
        d,
        h;
      if ((r === !0 && (i = 1) && (r = null), o))
        (e = { p: e }), (n = { p: n });
      else if (Dt(e) && !Dt(n)) {
        for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
          c.push(t(e[u - 1], e[u]));
        d--,
          (s = function (x) {
            x *= d;
            var g = Math.min(h, ~~x);
            return c[g](x - g);
          }),
          (r = n);
      } else i || (e = Ms(Dt(e) ? [] : {}, e));
      if (!c) {
        for (l in n) Gm.call(a, e, l, "get", n[l]);
        s = function (x) {
          return Zm(x, a) || (o ? e.p : e);
        };
      }
    }
    return Wi(r, s);
  },
  Xx = function (e, n, r) {
    var i = e.labels,
      s = Vn,
      o,
      a,
      l;
    for (o in i)
      (a = i[o] - n),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Bn = function (e, n, r) {
    var i = e.vars,
      s = i[n],
      o = ze,
      a = e._ctx,
      l,
      u,
      c;
    if (s)
      return (
        (l = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && Ai.length && zc(),
        a && (ze = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (ze = o),
        c
      );
  },
  _a = function (e) {
    return (
      Ii(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Mt),
      e.progress() < 1 && Bn(e, "onInterrupt"),
      e
    );
  },
  vo,
  fS = [],
  dS = function (e) {
    if (Um() && e) {
      e = (!e.name && e.default) || e;
      var n = e.name,
        r = Ue(e),
        i =
          n && !r && e.init
            ? function () {
                this._props = [];
              }
            : e,
        s = {
          init: _l,
          render: Zm,
          add: Gm,
          kill: aN,
          modifier: oN,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: qm, aliases: {}, register: 0 };
      if ((Wo(), e !== i)) {
        if (wn[n]) return;
        Yn(i, Yn(Bc(e, s), o)),
          Ms(i.prototype, Ms(s, Bc(e, o))),
          (wn[(i.prop = n)] = i),
          e.targetTest && (Wu.push(i), (Wm[n] = 1)),
          (n =
            (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
            "Plugin");
      }
      G_(n, i), e.register && e.register(un, i, an);
    } else e && fS.push(e);
  },
  ve = 255,
  Sa = {
    aqua: [0, ve, ve],
    lime: [0, ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ve],
    navy: [0, 0, 128],
    white: [ve, ve, ve],
    olive: [128, 128, 0],
    yellow: [ve, ve, 0],
    orange: [ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ve, 0, 0],
    pink: [ve, 192, 203],
    cyan: [0, ve, ve],
    transparent: [ve, ve, ve, 0],
  },
  wd = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? n + (r - n) * (2 / 3 - e) * 6
        : n) *
        ve +
        0.5) |
        0
    );
  },
  hS = function (e, n, r) {
    var i = e ? (Zr(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : Sa.black,
      s,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      p,
      x;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Sa[e]))
        i = Sa[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & ve, i & ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ve, e & ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = x = e.match(Yh)), !n))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            i.length > 3 && (i[3] *= 1),
            (i[0] = wd(l + 1 / 3, s, o)),
            (i[1] = wd(l, s, o)),
            (i[2] = wd(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (i = e.match($_)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Yh) || Sa.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !x &&
        ((s = i[0] / ve),
        (o = i[1] / ve),
        (a = i[2] / ve),
        (d = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (c = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((p = d - h),
            (u = c > 0.5 ? p / (2 - d - h) : p / (d + h)),
            (l =
              d === s
                ? (o - a) / p + (o < a ? 6 : 0)
                : d === o
                ? (a - s) / p + 2
                : (s - o) / p + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  pS = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(Ni).forEach(function (s) {
        var o = s.match(xo) || [];
        n.push.apply(n, o), r.push((i += o.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  Yx = function (e, n, r) {
    var i = "",
      s = (e + i).match(Ni),
      o = n ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      d;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (
          (h = hS(h, n, 1)) &&
          o +
            (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      r && ((c = pS(e)), (l = r.c), l.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(Ni, "1").split(xo), d = u.length - 1; a < d; a++)
        i +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : r).shift());
    if (!u)
      for (u = e.split(Ni), d = u.length - 1; a < d; a++) i += u[a] + s[a];
    return i + u[d];
  },
  Ni = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Sa) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  XA = /hsl[a]?\(/,
  mS = function (e) {
    var n = e.join(" "),
      r;
    if (((Ni.lastIndex = 0), Ni.test(n)))
      return (
        (r = XA.test(n)),
        (e[1] = Yx(e[1], r)),
        (e[0] = Yx(e[0], r, pS(e[1]))),
        !0
      );
  },
  bl,
  _n = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      d,
      h,
      p,
      x = function g(_) {
        var y = t() - i,
          m = _ === !0,
          v,
          w,
          S,
          k;
        if (
          (y > e && (r += y - n),
          (i += y),
          (S = i - r),
          (v = S - o),
          (v > 0 || m) &&
            ((k = ++d.frame),
            (h = S - d.time * 1e3),
            (d.time = S = S / 1e3),
            (o += v + (v >= s ? 4 : s - v)),
            (w = 1)),
          m || (l = u(g)),
          w)
        )
          for (p = 0; p < a.length; p++) a[p](S, h, k, _);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          x(!0);
        },
        deltaRatio: function (_) {
          return h / (1e3 / (_ || 60));
        },
        wake: function () {
          X_ &&
            (!Gh &&
              Um() &&
              ((Dn = Gh = window),
              ($m = Dn.document || {}),
              (Cn.gsap = un),
              (Dn.gsapVersions || (Dn.gsapVersions = [])).push(un.version),
              Y_(Fc || Dn.GreenSockGlobals || (!Dn.gsap && Dn) || {}),
              (c = Dn.requestAnimationFrame),
              fS.forEach(dS)),
            l && d.sleep(),
            (u =
              c ||
              function (_) {
                return setTimeout(_, (o - d.time * 1e3 + 1) | 0);
              }),
            (bl = 1),
            x(2));
        },
        sleep: function () {
          (c ? Dn.cancelAnimationFrame : clearTimeout)(l), (bl = 0), (u = _l);
        },
        lagSmoothing: function (_, y) {
          (e = _ || 1 / 0), (n = Math.min(y || 33, e));
        },
        fps: function (_) {
          (s = 1e3 / (_ || 240)), (o = d.time * 1e3 + s);
        },
        add: function (_, y, m) {
          var v = y
            ? function (w, S, k, b) {
                _(w, S, k, b), d.remove(v);
              }
            : _;
          return d.remove(_), a[m ? "unshift" : "push"](v), Wo(), v;
        },
        remove: function (_, y) {
          ~(y = a.indexOf(_)) && a.splice(y, 1) && p >= y && p--;
        },
        _listeners: a,
      }),
      d
    );
  })(),
  Wo = function () {
    return !bl && _n.wake();
  },
  ae = {},
  YA = /^[\d.\-M][\d.\-,\s]/,
  GA = /["']/g,
  QA = function (e) {
    for (
      var n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        s = 1,
        o = r.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      (l = r[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (n[i] = isNaN(u) ? u.replace(GA, "").trim() : +u),
        (i = l.substr(a + 1).trim());
    return n;
  },
  KA = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  qA = function (e) {
    var n = (e + "").split("("),
      r = ae[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [QA(n[1])] : KA(e).split(",").map(Z_)
        )
      : ae._CE && YA.test(e)
      ? ae._CE("", e)
      : r;
  },
  gS = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  xS = function t(e, n) {
    for (var r = e._first, i; r; )
      r instanceof Jt
        ? t(r, n)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== n &&
          (r.timeline
            ? t(r.timeline, n)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = n))),
        (r = r._next);
  },
  Ss = function (e, n) {
    return (e && (Ue(e) ? e : ae[e] || qA(e))) || n;
  },
  Hs = function (e, n, r, i) {
    r === void 0 &&
      (r = function (l) {
        return 1 - n(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? n(l * 2) / 2 : 1 - n((1 - l) * 2) / 2;
        });
    var s = { easeIn: n, easeOut: r, easeInOut: i },
      o;
    return (
      on(e, function (a) {
        (ae[a] = Cn[a] = s), (ae[(o = a.toLowerCase())] = r);
        for (var l in s)
          ae[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = ae[a + "." + l] = s[l];
      }),
      s
    );
  },
  vS = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  _d = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (s / Xh) * (Math.asin(1 / i) || 0),
      a = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * kA((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : vS(a);
    return (
      (s = Xh / s),
      (l.config = function (u, c) {
        return t(e, u, c);
      }),
      l
    );
  },
  Sd = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (o) {
        return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (s) {
              return 1 - r(1 - s);
            }
          : vS(r);
    return (
      (i.config = function (s) {
        return t(e, s);
      }),
      i
    );
  };
on("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Hs(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
ae.Linear.easeNone = ae.none = ae.Linear.easeIn;
Hs("Elastic", _d("in"), _d("out"), _d());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    s = function (a) {
      return a < n
        ? t * a * a
        : a < r
        ? t * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? t * (a -= 2.25 / e) * a + 0.9375
        : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Hs(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Hs("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Hs("Circ", function (t) {
  return -(B_(1 - t * t) - 1);
});
Hs("Sine", function (t) {
  return t === 1 ? 1 : -TA(t * SA) + 1;
});
Hs("Back", Sd("in"), Sd("out"), Sd());
ae.SteppedEase =
  ae.steps =
  Cn.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          s = n ? 1 : 0,
          o = 1 - ye;
        return function (a) {
          return (((i * $l(0, o, a)) | 0) + s) * r;
        };
      },
    };
Uo.ease = ae["quad.out"];
on(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (Xm += t + "," + t + "Params,");
  }
);
var yS = function (e, n) {
    (this.id = bA++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : K_),
      (this.set = n ? n.getSetter : qm);
  },
  Tl = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        Ho(this, +n.duration, 1, 1),
        (this.data = n.data),
        ze && ((this._ctx = ze), ze.data.push(this)),
        bl || _n.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Ho(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Wo(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Ef(this, r), !s._dp || s.parent || tS(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            yr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === ye) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), q_(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Hx(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                Hx(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (r, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, i)
          : this._repeat
          ? $o(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (r) {
        if (!arguments.length) return this._rts === -ye ? 0 : this._rts;
        if (this._rts === r) return this;
        var i =
          this.parent && this._ts ? Uc(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -ye ? 0 : this._rts),
          this.totalTime($l(-Math.abs(this._delay), this._tDur, i), !0),
          Pf(this),
          MA(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Wo(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ye &&
                      (this._tTime -= ye)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && yr(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (sn(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Uc(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = CA);
        var i = Mt;
        return (
          (Mt = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (Mt = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
          (s = i._start + s / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1 / 0
            : this._sat.globalTime(r)
          : s;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), Wx(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), Wx(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(Mn(this, r), sn(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, sn(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -ye : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ye), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= i &&
            s < this.endTime(!0) - ye)
        );
      }),
      (e.eventCallback = function (r, i, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (i
              ? ((o[r] = i),
                s && (o[r + "Params"] = s),
                r === "onUpdate" && (this._onUpdate = i))
              : delete o[r],
            this)
          : o[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (s) {
          var o = Ue(r) ? r : J_,
            a = function () {
              var u = i.then;
              (i.then = null),
                Ue(o) && (o = o(i)) && (o.then || o === i) && (i.then = u),
                s(o),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? a()
            : (i._prom = a);
        });
      }),
      (e.kill = function () {
        _a(this);
      }),
      t
    );
  })();
Yn(Tl.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ye,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Jt = (function (t) {
  z_(e, t);
  function e(r, i) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = t.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = sn(r.sortChildren)),
      Me && yr(r.parent || Me, Dr(s), i),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && nS(Dr(s), r.scrollTrigger),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, s, o) {
      return za(0, arguments, this), this;
    }),
    (n.from = function (i, s, o) {
      return za(1, arguments, this), this;
    }),
    (n.fromTo = function (i, s, o, a) {
      return za(2, arguments, this), this;
    }),
    (n.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Va(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Je(i, s, Mn(this, o), 1),
        this
      );
    }),
    (n.call = function (i, s, o) {
      return yr(this, Je.delayedCall(0, i, s), o);
    }),
    (n.staggerTo = function (i, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Je(i, o, Mn(this, l)),
        this
      );
    }),
    (n.staggerFrom = function (i, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (Va(o).immediateRender = sn(o.immediateRender)),
        this.staggerTo(i, s, o, a, l, u, c)
      );
    }),
    (n.staggerFromTo = function (i, s, o, a, l, u, c, d) {
      return (
        (a.startAt = o),
        (Va(a).immediateRender = sn(a.immediateRender)),
        this.staggerTo(i, s, a, l, u, c, d)
      );
    }),
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : _t(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !u),
        h,
        p,
        x,
        g,
        _,
        y,
        m,
        v,
        w,
        S,
        k,
        b;
      if (
        (this !== Me && c > l && i >= 0 && (c = l), c !== this._tTime || o || d)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (i += this._time - a)),
          (h = c),
          (w = this._start),
          (v = this._ts),
          (y = !v),
          d && (u || (a = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (_ = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(_ * 100 + i, s, o);
          if (
            ((h = _t(c % _)),
            c === l
              ? ((g = this._repeat), (h = u))
              : ((g = ~~(c / _)),
                g && g === c / _ && ((h = u), g--),
                h > u && (h = u)),
            (S = $o(this._tTime, _)),
            !a &&
              this._tTime &&
              S !== g &&
              this._tTime - S * _ - this._dur <= 0 &&
              (S = g),
            k && g & 1 && ((h = u - h), (b = 1)),
            g !== S && !this._lock)
          ) {
            var P = k && S & 1,
              C = P === (k && g & 1);
            if (
              (g < S && (P = !P),
              (a = P ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (b ? 0 : _t(g * _)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && Bn(this, "onRepeat"),
              this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              C &&
                ((this._lock = 2),
                (a = P ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !b && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
            xS(this, b);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = OA(this, _t(a), _t(h))), m && (c -= h - (h = m._start))),
          (this._tTime = c),
          (this._time = h),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (a = 0)),
          !a && h && !s && !g && (Bn(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (h >= a && i >= 0)
          for (p = this._first; p; ) {
            if (
              ((x = p._next), (p._act || h >= p._start) && p._ts && m !== p)
            ) {
              if (p.parent !== this) return this.render(i, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (h - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (h - p._start) * p._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !y))
              ) {
                (m = 0), x && (c += this._zTime = -ye);
                break;
              }
            }
            p = x;
          }
        else {
          p = this._last;
          for (var j = i < 0 ? i : h; p; ) {
            if (((x = p._prev), (p._act || j <= p._end) && p._ts && m !== p)) {
              if (p.parent !== this) return this.render(i, s, o);
              if (
                (p.render(
                  p._ts > 0
                    ? (j - p._start) * p._ts
                    : (p._dirty ? p.totalDuration() : p._tDur) +
                        (j - p._start) * p._ts,
                  s,
                  o || (Mt && (p._initted || p._startAt))
                ),
                h !== this._time || (!this._ts && !y))
              ) {
                (m = 0), x && (c += this._zTime = j ? -ye : ye);
                break;
              }
            }
            p = x;
          }
        }
        if (
          m &&
          !s &&
          (this.pause(),
          (m.render(h >= a ? 0 : -ye)._zTime = h >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = w), Pf(this), this.render(i, s, o);
        this._onUpdate && !s && Bn(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (w === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Ii(this, 1),
              !s &&
                !(i < 0 && !a) &&
                (c || a || !l) &&
                (Bn(
                  this,
                  c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (i, s) {
      var o = this;
      if ((Zr(s) || (s = Mn(this, s, i)), !(i instanceof Tl))) {
        if (Dt(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (pt(i)) return this.addLabel(i, s);
        if (Ue(i)) i = Je.delayedCall(0, i);
        else return this;
      }
      return this !== i ? yr(this, i, s) : this;
    }),
    (n.getChildren = function (i, s, o, a) {
      i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Vn);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Je
            ? s && l.push(u)
            : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (n.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === i) return s[o];
    }),
    (n.remove = function (i) {
      return pt(i)
        ? this.removeLabel(i)
        : Ue(i)
        ? this.killTweensOf(i)
        : (kf(this, i),
          i === this._recent && (this._recent = this._last),
          _s(this));
    }),
    (n.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = _t(
              _n.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          t.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, s) {
      return (this.labels[i] = Mn(this, s)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, s, o) {
      var a = Je.delayedCall(0, s || _l, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), yr(this, a, Mn(this, i))
      );
    }),
    (n.removePause = function (i) {
      var s = this._first;
      for (i = Mn(this, i); s; )
        s._start === i && s.data === "isPause" && Ii(s), (s = s._next);
    }),
    (n.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; )
        pi !== a[l] && a[l].kill(i, s);
      return this;
    }),
    (n.getTweensOf = function (i, s) {
      for (var o = [], a = zn(i), l = this._first, u = Zr(s), c; l; )
        l instanceof Je
          ? jA(l._targets, a) &&
            (u
              ? (!pi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next);
      return o;
    }),
    (n.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = Mn(o, i),
        l = s,
        u = l.startAt,
        c = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        p,
        x = Je.to(
          o,
          Yn(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                ye,
              onStart: function () {
                if ((o.pause(), !p)) {
                  var _ =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  x._dur !== _ && Ho(x, _, 0, 1).render(x._time, !0, !0),
                    (p = 1);
                }
                c && c.apply(x, d || []);
              },
            },
            s
          )
        );
      return h ? x.render(0) : x;
    }),
    (n.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, Yn({ startAt: { time: Mn(this, i) } }, o));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Xx(this, Mn(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Xx(this, Mn(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + ye);
    }),
    (n.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
      if (s) for (u in l) l[u] >= o && (l[u] += i);
      return _s(this);
    }),
    (n.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        _s(this)
      );
    }),
    (n.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        l = Vn,
        u,
        c,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -i : i)
        );
      if (o._dirty) {
        for (d = o.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (yr(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u);
        Ho(o, o === Me && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Me._ts && (q_(Me, Uc(i, Me)), (Q_ = _n.frame)), _n.frame >= Ux)) {
        Ux += kn.autoSleep || 120;
        var s = Me._first;
        if ((!s || !s._ts) && kn.autoSleep && _n._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || _n.sleep();
        }
      }
    }),
    e
  );
})(Tl);
Yn(Jt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ZA = function (e, n, r, i, s, o, a) {
    var l = new an(this._pt, e, n, 0, 1, kS, null, s),
      u = 0,
      c = 0,
      d,
      h,
      p,
      x,
      g,
      _,
      y,
      m;
    for (
      l.b = r,
        l.e = i,
        r += "",
        i += "",
        (y = ~i.indexOf("random(")) && (i = Sl(i)),
        o && ((m = [r, i]), o(m, e, n), (r = m[0]), (i = m[1])),
        h = r.match(vd) || [];
      (d = vd.exec(i));

    )
      (x = d[0]),
        (g = i.substring(u, d.index)),
        p ? (p = (p + 1) % 5) : g.substr(-5) === "rgba(" && (p = 1),
        x !== h[c++] &&
          ((_ = parseFloat(h[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: g || c === 1 ? g : ",",
            s: _,
            c: x.charAt(1) === "=" ? Eo(_, x) - _ : parseFloat(x) - _,
            m: p && p < 4 ? Math.round : 0,
          }),
          (u = vd.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = a),
      (H_.test(i) || y) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Gm = function (e, n, r, i, s, o, a, l, u, c) {
    Ue(i) && (i = i(s || 0, e, o));
    var d = e[n],
      h =
        r !== "get"
          ? r
          : Ue(d)
          ? u
            ? e[
                n.indexOf("set") || !Ue(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](u)
            : e[n]()
          : d,
      p = Ue(d) ? (u ? rN : bS) : Km,
      x;
    if (
      (pt(i) &&
        (~i.indexOf("random(") && (i = Sl(i)),
        i.charAt(1) === "=" &&
          ((x = Eo(h, i) + (Nt(h) || 0)), (x || x === 0) && (i = x))),
      !c || h !== i || tp)
    )
      return !isNaN(h * i) && i !== ""
        ? ((x = new an(
            this._pt,
            e,
            n,
            +h || 0,
            i - (h || 0),
            typeof d == "boolean" ? sN : TS,
            0,
            p
          )),
          u && (x.fp = u),
          a && x.modifier(a, this, e),
          (this._pt = x))
        : (!d && !(n in e) && Hm(n, i),
          ZA.call(this, e, n, h, i, p, l || kn.stringFilter, u));
  },
  JA = function (e, n, r, i, s) {
    if (
      (Ue(e) && (e = Ba(e, s, n, r, i)),
      !Pr(e) || (e.style && e.nodeType) || Dt(e) || U_(e))
    )
      return pt(e) ? Ba(e, s, n, r, i) : e;
    var o = {},
      a;
    for (a in e) o[a] = Ba(e[a], s, n, r, i);
    return o;
  },
  wS = function (e, n, r, i, s, o) {
    var a, l, u, c;
    if (
      wn[e] &&
      (a = new wn[e]()).init(
        s,
        a.rawVars ? n[e] : JA(n[e], i, s, o, r),
        r,
        i,
        o
      ) !== !1 &&
      ((r._pt = l = new an(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      r !== vo)
    )
      for (u = r._ptLookup[r._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  pi,
  tp,
  Qm = function t(e, n, r) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      c = i.onUpdateParams,
      d = i.callbackScope,
      h = i.runBackwards,
      p = i.yoyoEase,
      x = i.keyframes,
      g = i.autoRevert,
      _ = e._dur,
      y = e._startAt,
      m = e._targets,
      v = e.parent,
      w = v && v.data === "nested" ? v.vars.targets : m,
      S = e._overwrite === "auto" && !zm,
      k = e.timeline,
      b,
      P,
      C,
      j,
      F,
      R,
      Z,
      $,
      H,
      K,
      W,
      N,
      O;
    if (
      (k && (!x || !s) && (s = "none"),
      (e._ease = Ss(s, Uo.ease)),
      (e._yEase = p ? gS(Ss(p === !0 ? s : p, Uo.ease)) : 0),
      p &&
        e._yoyo &&
        !e._repeat &&
        ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
      (e._from = !k && !!i.runBackwards),
      !k || (x && !i.stagger))
    ) {
      if (
        (($ = m[0] ? ws(m[0]).harness : 0),
        (N = $ && i[$.prop]),
        (b = Bc(i, Wm)),
        y &&
          (y._zTime < 0 && y.progress(1),
          n < 0 && h && a && !g ? y.render(-1, !0) : y.revert(h && _ ? Hu : EA),
          (y._lazy = 0)),
        o)
      ) {
        if (
          (Ii(
            (e._startAt = Je.set(
              m,
              Yn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !y && sn(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: c,
                  callbackScope: d,
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Mt || (!a && !g)) && e._startAt.revert(Hu),
          a && _ && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (h && _ && !y) {
        if (
          (n && (a = !1),
          (C = Yn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !y && sn(l),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            b
          )),
          N && (C[$.prop] = N),
          Ii((e._startAt = Je.set(m, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (Mt ? e._startAt.revert(Hu) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !a)
        )
          t(e._startAt, ye, ye);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (_ && sn(l)) || (l && !_), P = 0;
        P < m.length;
        P++
      ) {
        if (
          ((F = m[P]),
          (Z = F._gsap || Ym(m)[P]._gsap),
          (e._ptLookup[P] = K = {}),
          Qh[Z.id] && Ai.length && zc(),
          (W = w === m ? P : w.indexOf(F)),
          $ &&
            (H = new $()).init(F, N || b, e, W, w) !== !1 &&
            ((e._pt = j =
              new an(e._pt, F, H.name, 0, 1, H.render, H, 0, H.priority)),
            H._props.forEach(function (T) {
              K[T] = j;
            }),
            H.priority && (R = 1)),
          !$ || N)
        )
          for (C in b)
            wn[C] && (H = wS(C, b, e, W, F, w))
              ? H.priority && (R = 1)
              : (K[C] = j =
                  Gm.call(e, F, C, "get", b[C], W, w, 0, i.stringFilter));
        e._op && e._op[P] && e.kill(F, e._op[P]),
          S &&
            e._pt &&
            ((pi = e),
            Me.killTweensOf(F, K, e.globalTime(n)),
            (O = !e.parent),
            (pi = 0)),
          e._pt && l && (Qh[Z.id] = 1);
      }
      R && PS(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !O),
      x && n <= 0 && k.render(Vn, !0, !0);
  },
  eN = function (e, n, r, i, s, o, a) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      u,
      c,
      d,
      h;
    if (!l)
      for (
        l = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((u = d[h][n]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== n && u.fp !== n; ) u = u._next;
        if (!u) return (tp = 1), (e.vars[n] = "+=0"), Qm(e, a), (tp = 0), 1;
        l.push(u);
      }
    for (h = l.length; h--; )
      (c = l[h]),
        (u = c._pt || c),
        (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c),
        (u.c = r - u.s),
        c.e && (c.e = Xe(r) + Nt(c.e)),
        c.b && (c.b = u.s + Nt(c.b));
  },
  tN = function (e, n) {
    var r = e[0] ? ws(e[0]).harness : 0,
      i = r && r.aliases,
      s,
      o,
      a,
      l;
    if (!i) return n;
    s = Ms({}, n);
    for (o in i)
      if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  nN = function (e, n, r, i) {
    var s = n.ease || i || "power1.inOut",
      o,
      a;
    if (Dt(n))
      (a = r[e] || (r[e] = [])),
        n.forEach(function (l, u) {
          return a.push({ t: (u / (n.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in n)
        (a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: n[o], e: s });
  },
  Ba = function (e, n, r, i, s) {
    return Ue(e)
      ? e.call(n, r, i, s)
      : pt(e) && ~e.indexOf("random(")
      ? Sl(e)
      : e;
  },
  _S = Xm + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  SS = {};
on(_S + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (SS[t] = 1);
});
var Je = (function (t) {
  z_(e, t);
  function e(r, i, s, o) {
    var a;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)),
      (a = t.call(this, o ? i : Va(i)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      p = l.overwrite,
      x = l.keyframes,
      g = l.defaults,
      _ = l.scrollTrigger,
      y = l.yoyoEase,
      m = i.parent || Me,
      v = (Dt(r) || U_(r) ? Zr(r[0]) : "length" in i) ? [r] : zn(r),
      w,
      S,
      k,
      b,
      P,
      C,
      j,
      F;
    if (
      ((a._targets = v.length
        ? Ym(v)
        : Vc(
            "GSAP target " + r + " not found. https://greensock.com",
            !kn.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = p),
      x || h || pu(u) || pu(c))
    ) {
      if (
        ((i = a.vars),
        (w = a.timeline =
          new Jt({
            data: "nested",
            defaults: g || {},
            targets: m && m.data === "nested" ? m.vars.targets : v,
          })),
        w.kill(),
        (w.parent = w._dp = Dr(a)),
        (w._start = 0),
        h || pu(u) || pu(c))
      ) {
        if (((b = v.length), (j = h && oS(h)), Pr(h)))
          for (P in h) ~_S.indexOf(P) && (F || (F = {}), (F[P] = h[P]));
        for (S = 0; S < b; S++)
          (k = Bc(i, SS)),
            (k.stagger = 0),
            y && (k.yoyoEase = y),
            F && Ms(k, F),
            (C = v[S]),
            (k.duration = +Ba(u, Dr(a), S, C, v)),
            (k.delay = (+Ba(c, Dr(a), S, C, v) || 0) - a._delay),
            !h &&
              b === 1 &&
              k.delay &&
              ((a._delay = c = k.delay), (a._start += c), (k.delay = 0)),
            w.to(C, k, j ? j(S, C, v) : 0),
            (w._ease = ae.none);
        w.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (x) {
        Va(Yn(w.vars.defaults, { ease: "none" })),
          (w._ease = Ss(x.ease || i.ease || "none"));
        var R = 0,
          Z,
          $,
          H;
        if (Dt(x))
          x.forEach(function (K) {
            return w.to(v, K, ">");
          }),
            w.duration();
        else {
          k = {};
          for (P in x)
            P === "ease" || P === "easeEach" || nN(P, x[P], k, x.easeEach);
          for (P in k)
            for (
              Z = k[P].sort(function (K, W) {
                return K.t - W.t;
              }),
                R = 0,
                S = 0;
              S < Z.length;
              S++
            )
              ($ = Z[S]),
                (H = {
                  ease: $.e,
                  duration: (($.t - (S ? Z[S - 1].t : 0)) / 100) * u,
                }),
                (H[P] = $.v),
                w.to(v, H, R),
                (R += H.duration);
          w.duration() < u && w.to({}, { duration: u - w.duration() });
        }
      }
      u || a.duration((u = w.duration()));
    } else a.timeline = 0;
    return (
      p === !0 && !zm && ((pi = Dr(a)), Me.killTweensOf(v), (pi = 0)),
      yr(m, Dr(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (d ||
        (!u &&
          !x &&
          a._start === _t(m._time) &&
          sn(d) &&
          DA(Dr(a)) &&
          m.data !== "nested")) &&
        ((a._tTime = -ye), a.render(Math.max(0, -c) || 0)),
      _ && nS(Dr(a), _),
      a
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = i < 0,
        d = i > l - ye && !c ? l : i < ye ? 0 : i,
        h,
        p,
        x,
        g,
        _,
        y,
        m,
        v,
        w;
      if (!u) LA(this, i, s, o);
      else if (
        d !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((h = d), (v = this.timeline), this._repeat)) {
          if (((g = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(g * 100 + i, s, o);
          if (
            ((h = _t(d % g)),
            d === l
              ? ((x = this._repeat), (h = u))
              : ((x = ~~(d / g)),
                x && x === d / g && ((h = u), x--),
                h > u && (h = u)),
            (y = this._yoyo && x & 1),
            y && ((w = this._yEase), (h = u - h)),
            (_ = $o(this._tTime, g)),
            h === a && !o && this._initted)
          )
            return (this._tTime = d), this;
          x !== _ &&
            (v && this._yEase && xS(v, y),
            this.vars.repeatRefresh &&
              !y &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(_t(g * x), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (rS(this, c ? i : h, o, s, d)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (u !== this._dur) return this.render(i, s, o);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = m = (w || this._ease)(h / u)),
          this._from && (this.ratio = m = 1 - m),
          h && !a && !s && !x && (Bn(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (p = this._pt; p; ) p.r(m, p.d), (p = p._next);
        (v &&
          v.render(
            i < 0 ? i : !h && y ? -ye : v._dur * v._ease(h / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !s &&
            (c && Kh(this, i, s, o), Bn(this, "onUpdate")),
          this._repeat &&
            x !== _ &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Bn(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (c && !this._onUpdate && Kh(this, i, !0, !0),
            (i || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Ii(this, 1),
            !s &&
              !(c && !a) &&
              (d || a || y) &&
              (Bn(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, s, o, a) {
      bl || _n.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || Qm(this, l),
        (u = this._ease(l / this._dur)),
        eN(this, i, s, o, a, u, l)
          ? this.resetTo(i, s, o, a)
          : (Ef(this, 0),
            this.parent ||
              eS(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? _a(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, pi && pi.vars.overwrite !== !0)
            ._first || _a(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Ho(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? zn(i) : a,
        u = this._ptLookup,
        c = this._pt,
        d,
        h,
        p,
        x,
        g,
        _,
        y;
      if ((!s || s === "all") && NA(a, l))
        return s === "all" && (this._pt = 0), _a(this);
      for (
        d = this._op = this._op || [],
          s !== "all" &&
            (pt(s) &&
              ((g = {}),
              on(s, function (m) {
                return (g[m] = 1);
              }),
              (s = g)),
            (s = tN(a, s))),
          y = a.length;
        y--;

      )
        if (~l.indexOf(a[y])) {
          (h = u[y]),
            s === "all"
              ? ((d[y] = s), (x = h), (p = {}))
              : ((p = d[y] = d[y] || {}), (x = s));
          for (g in x)
            (_ = h && h[g]),
              _ &&
                ((!("kill" in _.d) || _.d.kill(g) === !0) && kf(this, _, "_pt"),
                delete h[g]),
              p !== "all" && (p[g] = 1);
        }
      return this._initted && !this._pt && c && _a(this), this;
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return za(1, arguments);
    }),
    (e.delayedCall = function (i, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, s, o) {
      return za(2, arguments);
    }),
    (e.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
    }),
    (e.killTweensOf = function (i, s, o) {
      return Me.killTweensOf(i, s, o);
    }),
    e
  );
})(Tl);
Yn(Je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
on("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Je[t] = function () {
    var e = new Jt(),
      n = Zh.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var Km = function (e, n, r) {
    return (e[n] = r);
  },
  bS = function (e, n, r) {
    return e[n](r);
  },
  rN = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  iN = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  qm = function (e, n) {
    return Ue(e[n]) ? bS : Bm(e[n]) && e.setAttribute ? iN : Km;
  },
  TS = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  sN = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  kS = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  Zm = function (e, n) {
    for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  oN = function (e, n, r, i) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === i && s.modifier(e, n, r), (s = o);
  },
  aN = function (e) {
    for (var n = this._pt, r, i; n; )
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? kf(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  lN = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  PS = function (e) {
    for (var n = e._pt, r, i, s, o; n; ) {
      for (r = n._next, i = s; i && i.pr > n.pr; ) i = i._next;
      (n._prev = i ? i._prev : o) ? (n._prev._next = n) : (s = n),
        (n._next = i) ? (i._prev = n) : (o = n),
        (n = r);
    }
    e._pt = s;
  },
  an = (function () {
    function t(n, r, i, s, o, a, l, u, c) {
      (this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = i),
        (this.r = a || TS),
        (this.d = l || this),
        (this.set = u || Km),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = lN),
          (this.m = r),
          (this.mt = s),
          (this.tween = i);
      }),
      t
    );
  })();
on(
  Xm +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Wm[t] = 1);
  }
);
Cn.TweenMax = Cn.TweenLite = Je;
Cn.TimelineLite = Cn.TimelineMax = Jt;
Me = new Jt({
  sortChildren: !1,
  defaults: Uo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
kn.stringFilter = mS;
var bs = [],
  Xu = {},
  uN = [],
  Gx = 0,
  cN = 0,
  bd = function (e) {
    return (Xu[e] || uN).map(function (n) {
      return n();
    });
  },
  np = function () {
    var e = Date.now(),
      n = [];
    e - Gx > 2 &&
      (bd("matchMediaInit"),
      bs.forEach(function (r) {
        var i = r.queries,
          s = r.conditions,
          o,
          a,
          l,
          u;
        for (a in i)
          (o = Dn.matchMedia(i[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (r.revert(), l && n.push(r));
      }),
      bd("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r);
      }),
      (Gx = e),
      bd("matchMedia"));
  },
  ES = (function () {
    function t(n, r) {
      (this.selector = r && Jh(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = cN++),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        Ue(r) && ((s = i), (i = r), (r = Ue));
        var o = this,
          a = function () {
            var u = ze,
              c = o.selector,
              d;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = Jh(s)),
              (ze = o),
              (d = i.apply(o, arguments)),
              Ue(d) && o._r.push(d),
              (ze = u),
              (o.selector = c),
              (o.isReverted = !1),
              d
            );
          };
        return (o.last = a), r === Ue ? a(o) : r ? (o[r] = a) : a;
      }),
      (e.ignore = function (r) {
        var i = ze;
        (ze = null), r(this), (ze = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof Je &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var s = this;
        if (r) {
          var o = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (u) {
                return o.splice(o.indexOf(u), 1);
              }));
          }),
            o
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, u) {
                return u.g - l.g || -1 / 0;
              })
              .forEach(function (l) {
                return l.t.revert(r);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof Je) && l.revert && l.revert(r);
            }),
            this._r.forEach(function (l) {
              return l(r, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), i))
          for (var a = bs.length; a--; )
            bs[a].id === this.id && bs.splice(a, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  fN = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, s) {
        Pr(r) || (r = { matches: r });
        var o = new ES(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        ze && !o.selector && (o.selector = ze.selector),
          this.contexts.push(o),
          (i = o.add("onMatch", i)),
          (o.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((l = Dn.matchMedia(r[u])),
              l &&
                (bs.indexOf(o) < 0 && bs.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(np)
                  : l.addEventListener("change", np)));
        return c && i(o), this;
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  $c = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return dS(i);
      });
    },
    timeline: function (e) {
      return new Jt(e);
    },
    getTweensOf: function (e, n) {
      return Me.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      pt(e) && (e = zn(e)[0]);
      var s = ws(e || {}).get,
        o = r ? J_ : Z_;
      return (
        r === "native" && (r = ""),
        e &&
          (n
            ? o(((wn[n] && wn[n].get) || s)(e, n, r, i))
            : function (a, l, u) {
                return o(((wn[a] && wn[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = zn(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return un.quickSetter(c, n, r);
          }),
          s = i.length;
        return function (c) {
          for (var d = s; d--; ) i[d](c);
        };
      }
      e = e[0] || {};
      var o = wn[n],
        a = ws(e),
        l = (a.harness && (a.harness.aliases || {})[n]) || n,
        u = o
          ? function (c) {
              var d = new o();
              (vo._pt = 0),
                d.init(e, r ? c + r : c, vo, 0, [e]),
                d.render(1, d),
                vo._pt && Zm(1, vo);
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, r ? c + r : c, a, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        s = un.to(
          e,
          Ms(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        o = function (l, u, c) {
          return s.resetTo(n, l, u, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return Me.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ss(e.ease, Uo.ease)), $x(Uo, e || {});
    },
    config: function (e) {
      return $x(kn, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return (
          a && !wn[a] && !Cn[a] && Vc(n + " effect requires " + a + " plugin.")
        );
      }),
        (yd[n] = function (a, l, u) {
          return r(zn(a), Yn(l || {}, s), u);
        }),
        o &&
          (Jt.prototype[n] = function (a, l, u) {
            return this.add(yd[n](a, Pr(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, n) {
      ae[e] = Ss(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Ss(e, n) : ae;
    },
    getById: function (e) {
      return Me.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new Jt(e),
        i,
        s;
      for (
        r.smoothChildTiming = sn(e.smoothChildTiming),
          Me.remove(r),
          r._dp = 0,
          r._time = r._tTime = Me._time,
          i = Me._first;
        i;

      )
        (s = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof Je &&
              i.vars.onComplete === i._targets[0]
            )) &&
            yr(r, i, i._start - i._delay),
          (i = s);
      return yr(Me, r, 0), r;
    },
    context: function (e, n) {
      return e ? new ES(e, n) : ze;
    },
    matchMedia: function (e) {
      return new fN(e);
    },
    matchMediaRefresh: function () {
      return (
        bs.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || np()
      );
    },
    addEventListener: function (e, n) {
      var r = Xu[e] || (Xu[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = Xu[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: $A,
      wrapYoyo: HA,
      distribute: oS,
      random: lS,
      snap: aS,
      normalize: UA,
      getUnit: Nt,
      clamp: FA,
      splitColor: hS,
      toArray: zn,
      selector: Jh,
      mapRange: cS,
      pipe: zA,
      unitize: BA,
      interpolate: WA,
      shuffle: sS,
    },
    install: Y_,
    effects: yd,
    ticker: _n,
    updateRoot: Jt.updateRoot,
    plugins: wn,
    globalTimeline: Me,
    core: {
      PropTween: an,
      globals: G_,
      Tween: Je,
      Timeline: Jt,
      Animation: Tl,
      getCache: ws,
      _removeLinkedListItem: kf,
      reverting: function () {
        return Mt;
      },
      context: function (e) {
        return e && ze && (ze.data.push(e), (e._ctx = ze)), ze;
      },
      suppressOverwrites: function (e) {
        return (zm = e);
      },
    },
  };
on("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return ($c[t] = Je[t]);
});
_n.add(Jt.updateRoot);
vo = $c.to({}, { duration: 0 });
var dN = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  hN = function (e, n) {
    var r = e._targets,
      i,
      s,
      o;
    for (i in n)
      for (s = r.length; s--; )
        (o = e._ptLookup[s][i]),
          o &&
            (o = o.d) &&
            (o._pt && (o = dN(o, i)),
            o && o.modifier && o.modifier(n[i], e, r[s], i));
  },
  Td = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (pt(s) &&
              ((l = {}),
              on(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            n)
          ) {
            l = {};
            for (u in s) l[u] = n(s[u]);
            s = l;
          }
          hN(a, s);
        };
      },
    };
  },
  un =
    $c.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, s) {
          var o, a, l;
          this.tween = r;
          for (o in n)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                n[o],
                i,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            Mt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      Td("roundProps", ep),
      Td("modifiers"),
      Td("snap", aS)
    ) || $c;
Je.version = Jt.version = un.version = "3.12.2";
X_ = 1;
Um() && Wo();
ae.Power0;
var G = ae.Power1;
ae.Power2;
ae.Power3;
ae.Power4;
ae.Linear;
ae.Quad;
ae.Cubic;
ae.Quart;
ae.Quint;
ae.Strong;
ae.Elastic;
ae.Back;
ae.SteppedEase;
ae.Bounce;
ae.Sine;
ae.Expo;
ae.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qx,
  mi,
  Co,
  Jm,
  gs,
  Kx,
  eg,
  pN = function () {
    return typeof window < "u";
  },
  Jr = {},
  us = 180 / Math.PI,
  jo = Math.PI / 180,
  Qs = Math.atan2,
  qx = 1e8,
  tg = /([A-Z])/g,
  mN = /(left|right|width|margin|padding|x)/i,
  gN = /[\s,\(]\S/,
  wr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  rp = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  xN = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  vN = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  yN = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  CS = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  jS = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  wN = function (e, n, r) {
    return (e.style[n] = r);
  },
  _N = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  SN = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  bN = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  TN = function (e, n, r, i, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
  },
  kN = function (e, n, r, i, s) {
    var o = e._gsap;
    (o[n] = r), o.renderTransform(s, o);
  },
  Re = "transform",
  lr = Re + "Origin",
  PN = function t(e, n) {
    var r = this,
      i = this.target,
      s = i.style;
    if (e in Jr && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = wr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (r.tfm[o] = Lr(i, o));
              })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : Lr(i, e));
      else
        return wr.transform.split(",").forEach(function (o) {
          return t.call(r, o, n);
        });
      if (this.props.indexOf(Re) >= 0) return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(lr, n, "")),
        (e = Re);
    }
    (s || n) && this.props.push(e, n, s[e]);
  },
  AS = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  EN = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (n[e[s]] = e[s + 2])
        : e[s + 2]
        ? (r[e[s]] = e[s + 2])
        : r.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(tg, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (s = eg()),
        (!s || !s.isStart) && !r[Re] && (AS(r), (i.uncache = 1));
    }
  },
  NS = function (e, n) {
    var r = { target: e, props: [], revert: EN, save: PN };
    return (
      e._gsap || un.core.getCache(e),
      n &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  MS,
  ip = function (e, n) {
    var r = mi.createElementNS
      ? mi.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : mi.createElement(e);
    return r.style ? r : mi.createElement(e);
  },
  Tr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(tg, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, Xo(n) || n, 1)) ||
      ""
    );
  },
  Zx = "O,Moz,ms,Ms,Webkit".split(","),
  Xo = function (e, n, r) {
    var i = n || gs,
      s = i.style,
      o = 5;
    if (e in s && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Zx[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Zx[o] : "") + e;
  },
  sp = function () {
    pN() &&
      window.document &&
      ((Qx = window),
      (mi = Qx.document),
      (Co = mi.documentElement),
      (gs = ip("div") || { style: {} }),
      ip("div"),
      (Re = Xo(Re)),
      (lr = Re + "Origin"),
      (gs.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (MS = !!Xo("perspective")),
      (eg = un.core.reverting),
      (Jm = 1));
  },
  kd = function t(e) {
    var n = ip(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (Co.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      Co.removeChild(n),
      (this.style.cssText = s),
      o
    );
  },
  Jx = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  DS = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = kd.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === kd || (n = kd.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +Jx(e, ["x", "cx", "x1"]) || 0,
            y: +Jx(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  RS = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && DS(e));
  },
  kl = function (e, n) {
    if (n) {
      var r = e.style;
      n in Jr && n !== lr && (n = Re),
        r.removeProperty
          ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") &&
              (n = "-" + n),
            r.removeProperty(n.replace(tg, "-$1").toLowerCase()))
          : r.removeAttribute(n);
    }
  },
  gi = function (e, n, r, i, s, o) {
    var a = new an(e._pt, n, r, 0, 1, o ? jS : CS);
    return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a;
  },
  ev = { deg: 1, rad: 1, turn: 1 },
  CN = { grid: 1, flex: 1 },
  Fi = function t(e, n, r, i) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = gs.style,
      l = mN.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = i === "px",
      p = i === "%",
      x,
      g,
      _,
      y;
    return i === o || !s || ev[i] || ev[o]
      ? s
      : (o !== "px" && !h && (s = t(e, n, r, "px")),
        (y = e.getCTM && RS(e)),
        (p || o === "%") && (Jr[n] || ~n.indexOf("adius"))
          ? ((x = y ? e.getBBox()[l ? "width" : "height"] : e[c]),
            Xe(p ? (s / x) * d : (s / 100) * x))
          : ((a[l ? "width" : "height"] = d + (h ? o : i)),
            (g =
              ~n.indexOf("adius") || (i === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            y && (g = (e.ownerSVGElement || {}).parentNode),
            (!g || g === mi || !g.appendChild) && (g = mi.body),
            (_ = g._gsap),
            _ && p && _.width && l && _.time === _n.time && !_.uncache
              ? Xe((s / _.width) * d)
              : ((p || o === "%") &&
                  !CN[Tr(g, "display")] &&
                  (a.position = Tr(e, "position")),
                g === e && (a.position = "static"),
                g.appendChild(gs),
                (x = gs[c]),
                g.removeChild(gs),
                (a.position = "absolute"),
                l && p && ((_ = ws(g)), (_.time = _n.time), (_.width = g[c])),
                Xe(h ? (x * s) / d : x && s ? (d / x) * s : 0))));
  },
  Lr = function (e, n, r, i) {
    var s;
    return (
      Jm || sp(),
      n in wr &&
        n !== "transform" &&
        ((n = wr[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      Jr[n] && n !== "transform"
        ? ((s = El(e, i)),
          (s =
            n !== "transformOrigin"
              ? s[n]
              : s.svg
              ? s.origin
              : Wc(Tr(e, lr)) + " " + s.zOrigin + "px"))
        : ((s = e.style[n]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s =
              (Hc[n] && Hc[n](e, n, r)) ||
              Tr(e, n) ||
              K_(e, n) ||
              (n === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? Fi(e, n, s, r) + r : s
    );
  },
  jN = function (e, n, r, i) {
    if (!r || r === "none") {
      var s = Xo(n, e, 1),
        o = s && Tr(e, s, 1);
      o && o !== r
        ? ((n = s), (r = o))
        : n === "borderColor" && (r = Tr(e, "borderTopColor"));
    }
    var a = new an(this._pt, e.style, n, 0, 1, kS),
      l = 0,
      u = 0,
      c,
      d,
      h,
      p,
      x,
      g,
      _,
      y,
      m,
      v,
      w,
      S;
    if (
      ((a.b = r),
      (a.e = i),
      (r += ""),
      (i += ""),
      i === "auto" && ((e.style[n] = i), (i = Tr(e, n) || i), (e.style[n] = r)),
      (c = [r, i]),
      mS(c),
      (r = c[0]),
      (i = c[1]),
      (h = r.match(xo) || []),
      (S = i.match(xo) || []),
      S.length)
    ) {
      for (; (d = xo.exec(i)); )
        (_ = d[0]),
          (m = i.substring(l, d.index)),
          x
            ? (x = (x + 1) % 5)
            : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (x = 1),
          _ !== (g = h[u++] || "") &&
            ((p = parseFloat(g) || 0),
            (w = g.substr((p + "").length)),
            _.charAt(1) === "=" && (_ = Eo(p, _) + w),
            (y = parseFloat(_)),
            (v = _.substr((y + "").length)),
            (l = xo.lastIndex - v.length),
            v ||
              ((v = v || kn.units[n] || w),
              l === i.length && ((i += v), (a.e += v))),
            w !== v && (p = Fi(e, n, g, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: m || u === 1 ? m : ",",
              s: p,
              c: y - p,
              m: (x && x < 4) || n === "zIndex" ? Math.round : 0,
            }));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = n === "display" && i === "none" ? jS : CS;
    return H_.test(i) && (a.e = 0), (this._pt = a), a;
  },
  tv = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  AN = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (n[0] = tv[r] || r),
      (n[1] = tv[i] || i),
      n.join(" ")
    );
  },
  NN = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        s = n.u,
        o = r._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (a = s[u]),
            Jr[a] && ((l = 1), (a = a === "transformOrigin" ? lr : Re)),
            kl(r, a);
      l &&
        (kl(r, Re),
        o &&
          (o.svg && r.removeAttribute("transform"),
          El(r, 1),
          (o.uncache = 1),
          AS(i)));
    }
  },
  Hc = {
    clearProps: function (e, n, r, i, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new an(e._pt, n, r, 0, 0, NN));
        return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
      }
    },
  },
  Pl = [1, 0, 0, 1, 0, 0],
  LS = {},
  OS = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  nv = function (e) {
    var n = Tr(e, Re);
    return OS(n) ? Pl : n.substr(7).match($_).map(Xe);
  },
  ng = function (e, n) {
    var r = e._gsap || ws(e),
      i = e.style,
      s = nv(e),
      o,
      a,
      l,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? Pl : s)
      : (s === Pl &&
          !e.offsetParent &&
          e !== Co &&
          !r.svg &&
          ((l = i.display),
          (i.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), Co.appendChild(e)),
          (s = nv(e)),
          l ? (i.display = l) : kl(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : Co.removeChild(e))),
        n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  op = function (e, n, r, i, s, o) {
    var a = e._gsap,
      l = s || ng(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      d = a.xOffset || 0,
      h = a.yOffset || 0,
      p = l[0],
      x = l[1],
      g = l[2],
      _ = l[3],
      y = l[4],
      m = l[5],
      v = n.split(" "),
      w = parseFloat(v[0]) || 0,
      S = parseFloat(v[1]) || 0,
      k,
      b,
      P,
      C;
    r
      ? l !== Pl &&
        (b = p * _ - x * g) &&
        ((P = w * (_ / b) + S * (-g / b) + (g * m - _ * y) / b),
        (C = w * (-x / b) + S * (p / b) - (p * m - x * y) / b),
        (w = P),
        (S = C))
      : ((k = DS(e)),
        (w = k.x + (~v[0].indexOf("%") ? (w / 100) * k.width : w)),
        (S = k.y + (~(v[1] || v[0]).indexOf("%") ? (S / 100) * k.height : S))),
      i || (i !== !1 && a.smooth)
        ? ((y = w - u),
          (m = S - c),
          (a.xOffset = d + (y * p + m * g) - y),
          (a.yOffset = h + (y * x + m * _) - m))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = w),
      (a.yOrigin = S),
      (a.smooth = !!i),
      (a.origin = n),
      (a.originIsAbsolute = !!r),
      (e.style[lr] = "0px 0px"),
      o &&
        (gi(o, a, "xOrigin", u, w),
        gi(o, a, "yOrigin", c, S),
        gi(o, a, "xOffset", d, a.xOffset),
        gi(o, a, "yOffset", h, a.yOffset)),
      e.setAttribute("data-svg-origin", w + " " + S);
  },
  El = function (e, n) {
    var r = e._gsap || new yS(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = Tr(e, lr) || "0",
      c,
      d,
      h,
      p,
      x,
      g,
      _,
      y,
      m,
      v,
      w,
      S,
      k,
      b,
      P,
      C,
      j,
      F,
      R,
      Z,
      $,
      H,
      K,
      W,
      N,
      O,
      T,
      I,
      ee,
      nt,
      ue,
      Pe;
    return (
      (c = d = h = g = _ = y = m = v = w = 0),
      (p = x = 1),
      (r.svg = !!(e.getCTM && RS(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[Re] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Re] !== "none" ? l[Re] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (b = ng(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((N = e.getBBox()),
            (u = r.xOrigin - N.x + "px " + (r.yOrigin - N.y) + "px"),
            (W = ""))
          : (W = !n && e.getAttribute("data-svg-origin")),
        op(e, W || u, !!W || r.originIsAbsolute, r.smooth !== !1, b)),
      (S = r.xOrigin || 0),
      (k = r.yOrigin || 0),
      b !== Pl &&
        ((F = b[0]),
        (R = b[1]),
        (Z = b[2]),
        ($ = b[3]),
        (c = H = b[4]),
        (d = K = b[5]),
        b.length === 6
          ? ((p = Math.sqrt(F * F + R * R)),
            (x = Math.sqrt($ * $ + Z * Z)),
            (g = F || R ? Qs(R, F) * us : 0),
            (m = Z || $ ? Qs(Z, $) * us + g : 0),
            m && (x *= Math.abs(Math.cos(m * jo))),
            r.svg && ((c -= S - (S * F + k * Z)), (d -= k - (S * R + k * $))))
          : ((Pe = b[6]),
            (nt = b[7]),
            (T = b[8]),
            (I = b[9]),
            (ee = b[10]),
            (ue = b[11]),
            (c = b[12]),
            (d = b[13]),
            (h = b[14]),
            (P = Qs(Pe, ee)),
            (_ = P * us),
            P &&
              ((C = Math.cos(-P)),
              (j = Math.sin(-P)),
              (W = H * C + T * j),
              (N = K * C + I * j),
              (O = Pe * C + ee * j),
              (T = H * -j + T * C),
              (I = K * -j + I * C),
              (ee = Pe * -j + ee * C),
              (ue = nt * -j + ue * C),
              (H = W),
              (K = N),
              (Pe = O)),
            (P = Qs(-Z, ee)),
            (y = P * us),
            P &&
              ((C = Math.cos(-P)),
              (j = Math.sin(-P)),
              (W = F * C - T * j),
              (N = R * C - I * j),
              (O = Z * C - ee * j),
              (ue = $ * j + ue * C),
              (F = W),
              (R = N),
              (Z = O)),
            (P = Qs(R, F)),
            (g = P * us),
            P &&
              ((C = Math.cos(P)),
              (j = Math.sin(P)),
              (W = F * C + R * j),
              (N = H * C + K * j),
              (R = R * C - F * j),
              (K = K * C - H * j),
              (F = W),
              (H = N)),
            _ &&
              Math.abs(_) + Math.abs(g) > 359.9 &&
              ((_ = g = 0), (y = 180 - y)),
            (p = Xe(Math.sqrt(F * F + R * R + Z * Z))),
            (x = Xe(Math.sqrt(K * K + Pe * Pe))),
            (P = Qs(H, K)),
            (m = Math.abs(P) > 2e-4 ? P * us : 0),
            (w = ue ? 1 / (ue < 0 ? -ue : ue) : 0)),
        r.svg &&
          ((W = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !OS(Tr(e, Re))),
          W && e.setAttribute("transform", W))),
      Math.abs(m) > 90 &&
        Math.abs(m) < 270 &&
        (s
          ? ((p *= -1), (m += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((x *= -1), (m += m <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        d -
        ((r.yPercent =
          d &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = h + o),
      (r.scaleX = Xe(p)),
      (r.scaleY = Xe(x)),
      (r.rotation = Xe(g) + a),
      (r.rotationX = Xe(_) + a),
      (r.rotationY = Xe(y) + a),
      (r.skewX = m + a),
      (r.skewY = v + a),
      (r.transformPerspective = w + o),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[lr] = Wc(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = kn.force3D),
      (r.renderTransform = r.svg ? DN : MS ? IS : MN),
      (r.uncache = 0),
      r
    );
  },
  Wc = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Pd = function (e, n, r) {
    var i = Nt(n);
    return Xe(parseFloat(n) + parseFloat(Fi(e, "x", r + "px", i))) + i;
  },
  MN = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      IS(e, n);
  },
  rs = "0deg",
  da = "0px",
  is = ") ",
  IS = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      u = r.rotation,
      c = r.rotationY,
      d = r.rotationX,
      h = r.skewX,
      p = r.skewY,
      x = r.scaleX,
      g = r.scaleY,
      _ = r.transformPerspective,
      y = r.force3D,
      m = r.target,
      v = r.zOrigin,
      w = "",
      S = (y === "auto" && e && e !== 1) || y === !0;
    if (v && (d !== rs || c !== rs)) {
      var k = parseFloat(c) * jo,
        b = Math.sin(k),
        P = Math.cos(k),
        C;
      (k = parseFloat(d) * jo),
        (C = Math.cos(k)),
        (o = Pd(m, o, b * C * -v)),
        (a = Pd(m, a, -Math.sin(k) * -v)),
        (l = Pd(m, l, P * C * -v + v));
    }
    _ !== da && (w += "perspective(" + _ + is),
      (i || s) && (w += "translate(" + i + "%, " + s + "%) "),
      (S || o !== da || a !== da || l !== da) &&
        (w +=
          l !== da || S
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + is),
      u !== rs && (w += "rotate(" + u + is),
      c !== rs && (w += "rotateY(" + c + is),
      d !== rs && (w += "rotateX(" + d + is),
      (h !== rs || p !== rs) && (w += "skew(" + h + ", " + p + is),
      (x !== 1 || g !== 1) && (w += "scale(" + x + ", " + g + is),
      (m.style[Re] = w || "translate(0, 0)");
  },
  DN = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      u = r.skewX,
      c = r.skewY,
      d = r.scaleX,
      h = r.scaleY,
      p = r.target,
      x = r.xOrigin,
      g = r.yOrigin,
      _ = r.xOffset,
      y = r.yOffset,
      m = r.forceCSS,
      v = parseFloat(o),
      w = parseFloat(a),
      S,
      k,
      b,
      P,
      C;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= jo),
          (u *= jo),
          (S = Math.cos(l) * d),
          (k = Math.sin(l) * d),
          (b = Math.sin(l - u) * -h),
          (P = Math.cos(l - u) * h),
          u &&
            ((c *= jo),
            (C = Math.tan(u - c)),
            (C = Math.sqrt(1 + C * C)),
            (b *= C),
            (P *= C),
            c &&
              ((C = Math.tan(c)),
              (C = Math.sqrt(1 + C * C)),
              (S *= C),
              (k *= C))),
          (S = Xe(S)),
          (k = Xe(k)),
          (b = Xe(b)),
          (P = Xe(P)))
        : ((S = d), (P = h), (k = b = 0)),
      ((v && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) &&
        ((v = Fi(p, "x", o, "px")), (w = Fi(p, "y", a, "px"))),
      (x || g || _ || y) &&
        ((v = Xe(v + x - (x * S + g * b) + _)),
        (w = Xe(w + g - (x * k + g * P) + y))),
      (i || s) &&
        ((C = p.getBBox()),
        (v = Xe(v + (i / 100) * C.width)),
        (w = Xe(w + (s / 100) * C.height))),
      (C =
        "matrix(" + S + "," + k + "," + b + "," + P + "," + v + "," + w + ")"),
      p.setAttribute("transform", C),
      m && (p.style[Re] = C);
  },
  RN = function (e, n, r, i, s) {
    var o = 360,
      a = pt(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? us : 1),
      u = l - i,
      c = i + u + "deg",
      d,
      h;
    return (
      a &&
        ((d = s.split("_")[1]),
        d === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        d === "cw" && u < 0
          ? (u = ((u + o * qx) % o) - ~~(u / o) * o)
          : d === "ccw" && u > 0 && (u = ((u - o * qx) % o) - ~~(u / o) * o)),
      (e._pt = h = new an(e._pt, n, r, i, u, xN)),
      (h.e = c),
      (h.u = "deg"),
      e._props.push(r),
      h
    );
  },
  rv = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  LN = function (e, n, r) {
    var i = rv({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      l,
      u,
      c,
      d,
      h,
      p,
      x;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[Re] = n),
        (a = El(r, 1)),
        kl(r, Re),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Re]),
        (o[Re] = n),
        (a = El(r, 1)),
        (o[Re] = u));
    for (l in Jr)
      (u = i[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((p = Nt(u)),
          (x = Nt(c)),
          (d = p !== x ? Fi(r, l, u, x) : parseFloat(u)),
          (h = parseFloat(c)),
          (e._pt = new an(e._pt, a, l, d, h - d, rp)),
          (e._pt.u = x || 0),
          e._props.push(l));
    rv(a, i);
  };
on("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (a) {
      return e < 2 ? t + a : "border" + a + t;
    });
  Hc[e > 1 ? "border" + t : t] = function (a, l, u, c, d) {
    var h, p;
    if (arguments.length < 4)
      return (
        (h = o.map(function (x) {
          return Lr(a, x, u);
        })),
        (p = h.join(" ")),
        p.split(h[0]).length === 5 ? h[0] : p
      );
    (h = (c + "").split(" ")),
      (p = {}),
      o.forEach(function (x, g) {
        return (p[x] = h[g] = h[g] || h[((g - 1) / 2) | 0]);
      }),
      a.init(l, p, d);
  };
});
var FS = {
  name: "css",
  register: sp,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      u,
      c,
      d,
      h,
      p,
      x,
      g,
      _,
      y,
      m,
      v,
      w,
      S,
      k,
      b,
      P;
    Jm || sp(),
      (this.styles = this.styles || NS(e)),
      (P = this.styles.props),
      (this.tween = r);
    for (g in n)
      if (g !== "autoRound" && ((c = n[g]), !(wn[g] && wS(g, n, r, i, e, s)))) {
        if (
          ((p = typeof c),
          (x = Hc[g]),
          p === "function" && ((c = c.call(r, i, e, s)), (p = typeof c)),
          p === "string" && ~c.indexOf("random(") && (c = Sl(c)),
          x)
        )
          x(this, e, g, c, r) && (b = 1);
        else if (g.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (c += ""),
            (Ni.lastIndex = 0),
            Ni.test(u) || ((_ = Nt(u)), (y = Nt(c))),
            y ? _ !== y && (u = Fi(e, g, u, y) + y) : _ && (c += _),
            this.add(a, "setProperty", u, c, i, s, 0, 0, g),
            o.push(g),
            P.push(g, 0, a[g]);
        else if (p !== "undefined") {
          if (
            (l && g in l
              ? ((u = typeof l[g] == "function" ? l[g].call(r, i, e, s) : l[g]),
                pt(u) && ~u.indexOf("random(") && (u = Sl(u)),
                Nt(u + "") || (u += kn.units[g] || Nt(Lr(e, g)) || ""),
                (u + "").charAt(1) === "=" && (u = Lr(e, g)))
              : (u = Lr(e, g)),
            (h = parseFloat(u)),
            (m = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            m && (c = c.substr(2)),
            (d = parseFloat(c)),
            g in wr &&
              (g === "autoAlpha" &&
                (h === 1 && Lr(e, "visibility") === "hidden" && d && (h = 0),
                P.push("visibility", 0, a.visibility),
                gi(
                  this,
                  a,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              g !== "scale" &&
                g !== "transform" &&
                ((g = wr[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
            (v = g in Jr),
            v)
          ) {
            if (
              (this.styles.save(g),
              w ||
                ((S = e._gsap),
                (S.renderTransform && !n.parseTransform) ||
                  El(e, n.parseTransform),
                (k = n.smoothOrigin !== !1 && S.smooth),
                (w = this._pt =
                  new an(this._pt, a, Re, 0, 1, S.renderTransform, S, 0, -1)),
                (w.dep = 1)),
              g === "scale")
            )
              (this._pt = new an(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (m ? Eo(S.scaleY, m + d) : d) - S.scaleY || 0,
                rp
              )),
                (this._pt.u = 0),
                o.push("scaleY", g),
                (g += "X");
            else if (g === "transformOrigin") {
              P.push(lr, 0, a[lr]),
                (c = AN(c)),
                S.svg
                  ? op(e, c, 0, k, 0, this)
                  : ((y = parseFloat(c.split(" ")[2]) || 0),
                    y !== S.zOrigin && gi(this, S, "zOrigin", S.zOrigin, y),
                    gi(this, a, g, Wc(u), Wc(c)));
              continue;
            } else if (g === "svgOrigin") {
              op(e, c, 1, k, 0, this);
              continue;
            } else if (g in LS) {
              RN(this, S, g, h, m ? Eo(h, m + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              gi(this, S, "smooth", S.smooth, c);
              continue;
            } else if (g === "force3D") {
              S[g] = c;
              continue;
            } else if (g === "transform") {
              LN(this, c, e);
              continue;
            }
          } else g in a || (g = Xo(g) || g);
          if (v || ((d || d === 0) && (h || h === 0) && !gN.test(c) && g in a))
            (_ = (u + "").substr((h + "").length)),
              d || (d = 0),
              (y = Nt(c) || (g in kn.units ? kn.units[g] : _)),
              _ !== y && (h = Fi(e, g, u, y)),
              (this._pt = new an(
                this._pt,
                v ? S : a,
                g,
                h,
                (m ? Eo(h, m + d) : d) - h,
                !v && (y === "px" || g === "zIndex") && n.autoRound !== !1
                  ? yN
                  : rp
              )),
              (this._pt.u = y || 0),
              _ !== y && y !== "%" && ((this._pt.b = u), (this._pt.r = vN));
          else if (g in a) jN.call(this, e, g, u, m ? m + c : c);
          else if (g in e) this.add(e, g, u || e[g], m ? m + c : c, i, s);
          else if (g !== "parseTransform") {
            Hm(g, c);
            continue;
          }
          v || (g in a ? P.push(g, 0, a[g]) : P.push(g, 1, u || e[g])),
            o.push(g);
        }
      }
    b && PS(this);
  },
  render: function (e, n) {
    if (n.tween._time || !eg())
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: Lr,
  aliases: wr,
  getSetter: function (e, n, r) {
    var i = wr[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in Jr && n !== lr && (e._gsap.x || Lr(e, "x"))
        ? r && Kx === r
          ? n === "scale"
            ? bN
            : SN
          : (Kx = r || {}) && (n === "scale" ? TN : kN)
        : e.style && !Bm(e.style[n])
        ? wN
        : ~n.indexOf("-")
        ? _N
        : qm(e, n)
    );
  },
  core: { _removeProperty: kl, _getMatrix: ng },
};
un.utils.checkPrefix = Xo;
un.core.getStyleSaver = NS;
(function (t, e, n, r) {
  var i = on(t + "," + e + "," + n, function (s) {
    Jr[s] = 1;
  });
  on(e, function (s) {
    (kn.units[s] = "deg"), (LS[s] = 1);
  }),
    (wr[i[13]] = t + "," + e),
    on(r, function (s) {
      var o = s.split(":");
      wr[o[1]] = i[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
on(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    kn.units[t] = "px";
  }
);
un.registerPlugin(FS);
var L = un.registerPlugin(FS) || un;
L.core.Tween;
function iv(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function ON(t, e, n) {
  return e && iv(t.prototype, e), n && iv(t, n), t;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var St,
  ap,
  Sn,
  xi,
  vi,
  Ao,
  VS,
  cs,
  Ua,
  zS,
  Br,
  tr,
  BS,
  US = function () {
    return (
      St ||
      (typeof window < "u" && (St = window.gsap) && St.registerPlugin && St)
    );
  },
  $S = 1,
  yo = [],
  re = [],
  kr = [],
  $a = Date.now,
  lp = function (e, n) {
    return n;
  },
  IN = function () {
    var e = Ua.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, re),
      i.push.apply(i, kr),
      (re = r),
      (kr = i),
      (lp = function (o, a) {
        return n[o](a);
      });
  },
  Mi = function (e, n) {
    return ~kr.indexOf(e) && kr[kr.indexOf(e) + 1][n];
  },
  Ha = function (e) {
    return !!~zS.indexOf(e);
  },
  It = function (e, n, r, i, s) {
    return e.addEventListener(n, r, { passive: !i, capture: !!s });
  },
  Ot = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  mu = "scrollLeft",
  gu = "scrollTop",
  up = function () {
    return (Br && Br.isPressed) || re.cache++;
  },
  Xc = function (e, n) {
    var r = function i(s) {
      if (s || s === 0) {
        $S && (Sn.history.scrollRestoration = "manual");
        var o = Br && Br.isPressed;
        (s = i.v = Math.round(s) || (Br && Br.iOS ? 1 : 0)),
          e(s),
          (i.cacheID = re.cache),
          o && lp("ss", s);
      } else
        (n || re.cache !== i.cacheID || lp("ref")) &&
          ((i.cacheID = re.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  $t = {
    s: mu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Xc(function (t) {
      return arguments.length
        ? Sn.scrollTo(t, st.sc())
        : Sn.pageXOffset || xi[mu] || vi[mu] || Ao[mu] || 0;
    }),
  },
  st = {
    s: gu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: $t,
    sc: Xc(function (t) {
      return arguments.length
        ? Sn.scrollTo($t.sc(), t)
        : Sn.pageYOffset || xi[gu] || vi[gu] || Ao[gu] || 0;
    }),
  },
  qt = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || St.utils.toArray)(e)[0] ||
      (typeof e == "string" && St.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Vi = function (e, n) {
    var r = n.s,
      i = n.sc;
    Ha(e) && (e = xi.scrollingElement || vi);
    var s = re.indexOf(e),
      o = i === st.sc ? 1 : 2;
    !~s && (s = re.push(e) - 1), re[s + o] || It(e, "scroll", up);
    var a = re[s + o],
      l =
        a ||
        (re[s + o] =
          Xc(Mi(e, r), !0) ||
          (Ha(e)
            ? i
            : Xc(function (u) {
                return arguments.length ? (e[r] = u) : e[r];
              })));
    return (
      (l.target = e),
      a || (l.smooth = St.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  cp = function (e, n, r) {
    var i = e,
      s = e,
      o = $a(),
      a = o,
      l = n || 50,
      u = Math.max(500, l * 3),
      c = function (x, g) {
        var _ = $a();
        g || _ - o > l
          ? ((s = i), (i = x), (a = o), (o = _))
          : r
          ? (i += x)
          : (i = s + ((x - s) / (_ - a)) * (o - a));
      },
      d = function () {
        (s = i = r ? 0 : i), (a = o = 0);
      },
      h = function (x) {
        var g = a,
          _ = s,
          y = $a();
        return (
          (x || x === 0) && x !== i && c(x),
          o === a || y - a > u
            ? 0
            : ((i + (r ? _ : -_)) / ((r ? y : o) - g)) * 1e3
        );
      };
    return { update: c, reset: d, getVelocity: h };
  },
  ha = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  sv = function (e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  HS = function () {
    (Ua = St.core.globals().ScrollTrigger), Ua && Ua.core && IN();
  },
  WS = function (e) {
    return (
      (St = e || US()),
      St &&
        typeof document < "u" &&
        document.body &&
        ((Sn = window),
        (xi = document),
        (vi = xi.documentElement),
        (Ao = xi.body),
        (zS = [Sn, xi, vi, Ao]),
        St.utils.clamp,
        (BS = St.core.context || function () {}),
        (cs = "onpointerenter" in Ao ? "pointer" : "mouse"),
        (VS = tt.isTouch =
          Sn.matchMedia &&
          Sn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Sn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (tr = tt.eventTypes =
          (
            "ontouchstart" in vi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in vi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return ($S = 0);
        }, 500),
        HS(),
        (ap = 1)),
      ap
    );
  };
$t.op = st;
re.cache = 0;
var tt = (function () {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return (
    (e.init = function (r) {
      ap || WS(St) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ua || HS();
      var i = r.tolerance,
        s = r.dragMinimum,
        o = r.type,
        a = r.target,
        l = r.lineHeight,
        u = r.debounce,
        c = r.preventDefault,
        d = r.onStop,
        h = r.onStopDelay,
        p = r.ignore,
        x = r.wheelSpeed,
        g = r.event,
        _ = r.onDragStart,
        y = r.onDragEnd,
        m = r.onDrag,
        v = r.onPress,
        w = r.onRelease,
        S = r.onRight,
        k = r.onLeft,
        b = r.onUp,
        P = r.onDown,
        C = r.onChangeX,
        j = r.onChangeY,
        F = r.onChange,
        R = r.onToggleX,
        Z = r.onToggleY,
        $ = r.onHover,
        H = r.onHoverEnd,
        K = r.onMove,
        W = r.ignoreCheck,
        N = r.isNormalizer,
        O = r.onGestureStart,
        T = r.onGestureEnd,
        I = r.onWheel,
        ee = r.onEnable,
        nt = r.onDisable,
        ue = r.onClick,
        Pe = r.scrollSpeed,
        pe = r.capture,
        ge = r.allowClicks,
        mt = r.lockAxis,
        Ge = r.onLockAxis;
      (this.target = a = qt(a) || vi),
        (this.vars = r),
        p && (p = St.utils.toArray(p)),
        (i = i || 1e-9),
        (s = s || 0),
        (x = x || 1),
        (Pe = Pe || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Sn.getComputedStyle(Ao).lineHeight) || 22);
      var cn,
        Ie,
        fn,
        se,
        Qe,
        Qt,
        dn,
        A = this,
        hn = 0,
        Cr = 0,
        Yi = Vi(a, $t),
        Ke = Vi(a, st),
        Gi = Yi(),
        Qi = Ke(),
        Zo =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          tr[0] === "pointerdown",
        gt = Ha(a),
        He = a.ownerDocument || xi,
        Gn = [0, 0, 0],
        Qn = [0, 0, 0],
        Ki = 0,
        jr = function () {
          return (Ki = $a());
        },
        cr = function (Y, he) {
          return (
            ((A.event = Y) && p && ~p.indexOf(Y.target)) ||
            (he && Zo && Y.pointerType !== "touch") ||
            (W && W(Y, he))
          );
        },
        Kt = function () {
          A._vx.reset(), A._vy.reset(), Ie.pause(), d && d(A);
        },
        qi = function () {
          var Y = (A.deltaX = sv(Gn)),
            he = (A.deltaY = sv(Qn)),
            Fe = Math.abs(Y) >= i,
            B = Math.abs(he) >= i;
          F && (Fe || B) && F(A, Y, he, Gn, Qn),
            Fe &&
              (S && A.deltaX > 0 && S(A),
              k && A.deltaX < 0 && k(A),
              C && C(A),
              R && A.deltaX < 0 != hn < 0 && R(A),
              (hn = A.deltaX),
              (Gn[0] = Gn[1] = Gn[2] = 0)),
            B &&
              (P && A.deltaY > 0 && P(A),
              b && A.deltaY < 0 && b(A),
              j && j(A),
              Z && A.deltaY < 0 != Cr < 0 && Z(A),
              (Cr = A.deltaY),
              (Qn[0] = Qn[1] = Qn[2] = 0)),
            (se || fn) && (K && K(A), fn && (m(A), (fn = !1)), (se = !1)),
            Qt && !(Qt = !1) && Ge && Ge(A),
            Qe && (I(A), (Qe = !1)),
            (cn = 0);
        },
        Ws = function (Y, he, Fe) {
          (Gn[Fe] += Y),
            (Qn[Fe] += he),
            A._vx.update(Y),
            A._vy.update(he),
            u ? cn || (cn = requestAnimationFrame(qi)) : qi();
        },
        Xs = function (Y, he) {
          mt &&
            !dn &&
            ((A.axis = dn = Math.abs(Y) > Math.abs(he) ? "x" : "y"), (Qt = !0)),
            dn !== "y" && ((Gn[2] += Y), A._vx.update(Y, !0)),
            dn !== "x" && ((Qn[2] += he), A._vy.update(he, !0)),
            u ? cn || (cn = requestAnimationFrame(qi)) : qi();
        },
        Zi = function (Y) {
          if (!cr(Y, 1)) {
            Y = ha(Y, c);
            var he = Y.clientX,
              Fe = Y.clientY,
              B = he - A.x,
              le = Fe - A.y,
              q = A.isDragging;
            (A.x = he),
              (A.y = Fe),
              (q ||
                Math.abs(A.startX - he) >= s ||
                Math.abs(A.startY - Fe) >= s) &&
                (m && (fn = !0),
                q || (A.isDragging = !0),
                Xs(B, le),
                q || (_ && _(A)));
          }
        },
        ti = (A.onPress = function (J) {
          cr(J, 1) ||
            (J && J.button) ||
            ((A.axis = dn = null),
            Ie.pause(),
            (A.isPressed = !0),
            (J = ha(J)),
            (hn = Cr = 0),
            (A.startX = A.x = J.clientX),
            (A.startY = A.y = J.clientY),
            A._vx.reset(),
            A._vy.reset(),
            It(N ? a : He, tr[1], Zi, c, !0),
            (A.deltaX = A.deltaY = 0),
            v && v(A));
        }),
        ni = (A.onRelease = function (J) {
          if (!cr(J, 1)) {
            Ot(N ? a : He, tr[1], Zi, !0);
            var Y = !isNaN(A.y - A.startY),
              he =
                A.isDragging &&
                (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
              Fe = ha(J);
            !he &&
              Y &&
              (A._vx.reset(),
              A._vy.reset(),
              c &&
                ge &&
                St.delayedCall(0.08, function () {
                  if ($a() - Ki > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (He.createEvent) {
                      var B = He.createEvent("MouseEvents");
                      B.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Sn,
                        1,
                        Fe.screenX,
                        Fe.screenY,
                        Fe.clientX,
                        Fe.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        J.target.dispatchEvent(B);
                    }
                  }
                })),
              (A.isDragging = A.isGesturing = A.isPressed = !1),
              d && !N && Ie.restart(!0),
              y && he && y(A),
              w && w(A, he);
          }
        }),
        ce = function (Y) {
          return (
            Y.touches &&
            Y.touches.length > 1 &&
            (A.isGesturing = !0) &&
            O(Y, A.isDragging)
          );
        },
        Ji = function () {
          return (A.isGesturing = !1) || T(A);
        },
        Kn = function (Y) {
          if (!cr(Y)) {
            var he = Yi(),
              Fe = Ke();
            Ws((he - Gi) * Pe, (Fe - Qi) * Pe, 1),
              (Gi = he),
              (Qi = Fe),
              d && Ie.restart(!0);
          }
        },
        qn = function (Y) {
          if (!cr(Y)) {
            (Y = ha(Y, c)), I && (Qe = !0);
            var he =
              (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? Sn.innerHeight : 1) *
              x;
            Ws(Y.deltaX * he, Y.deltaY * he, 0), d && !N && Ie.restart(!0);
          }
        },
        Zn = function (Y) {
          if (!cr(Y)) {
            var he = Y.clientX,
              Fe = Y.clientY,
              B = he - A.x,
              le = Fe - A.y;
            (A.x = he), (A.y = Fe), (se = !0), (B || le) && Xs(B, le);
          }
        },
        es = function (Y) {
          (A.event = Y), $(A);
        },
        Ys = function (Y) {
          (A.event = Y), H(A);
        },
        Ar = function (Y) {
          return cr(Y) || (ha(Y, c) && ue(A));
        };
      (Ie = A._dc = St.delayedCall(h || 0.25, Kt).pause()),
        (A.deltaX = A.deltaY = 0),
        (A._vx = cp(0, 50, !0)),
        (A._vy = cp(0, 50, !0)),
        (A.scrollX = Yi),
        (A.scrollY = Ke),
        (A.isDragging = A.isGesturing = A.isPressed = !1),
        BS(this),
        (A.enable = function (J) {
          return (
            A.isEnabled ||
              (It(gt ? He : a, "scroll", up),
              o.indexOf("scroll") >= 0 && It(gt ? He : a, "scroll", Kn, c, pe),
              o.indexOf("wheel") >= 0 && It(a, "wheel", qn, c, pe),
              ((o.indexOf("touch") >= 0 && VS) || o.indexOf("pointer") >= 0) &&
                (It(a, tr[0], ti, c, pe),
                It(He, tr[2], ni),
                It(He, tr[3], ni),
                ge && It(a, "click", jr, !1, !0),
                ue && It(a, "click", Ar),
                O && It(He, "gesturestart", ce),
                T && It(He, "gestureend", Ji),
                $ && It(a, cs + "enter", es),
                H && It(a, cs + "leave", Ys),
                K && It(a, cs + "move", Zn)),
              (A.isEnabled = !0),
              J && J.type && ti(J),
              ee && ee(A)),
            A
          );
        }),
        (A.disable = function () {
          A.isEnabled &&
            (yo.filter(function (J) {
              return J !== A && Ha(J.target);
            }).length || Ot(gt ? He : a, "scroll", up),
            A.isPressed &&
              (A._vx.reset(), A._vy.reset(), Ot(N ? a : He, tr[1], Zi, !0)),
            Ot(gt ? He : a, "scroll", Kn, pe),
            Ot(a, "wheel", qn, pe),
            Ot(a, tr[0], ti, pe),
            Ot(He, tr[2], ni),
            Ot(He, tr[3], ni),
            Ot(a, "click", jr, !0),
            Ot(a, "click", Ar),
            Ot(He, "gesturestart", ce),
            Ot(He, "gestureend", Ji),
            Ot(a, cs + "enter", es),
            Ot(a, cs + "leave", Ys),
            Ot(a, cs + "move", Zn),
            (A.isEnabled = A.isPressed = A.isDragging = !1),
            nt && nt(A));
        }),
        (A.kill = A.revert =
          function () {
            A.disable();
            var J = yo.indexOf(A);
            J >= 0 && yo.splice(J, 1), Br === A && (Br = 0);
          }),
        yo.push(A),
        N && Ha(a) && (Br = A),
        A.enable(g);
    }),
    ON(t, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    t
  );
})();
tt.version = "3.12.2";
tt.create = function (t) {
  return new tt(t);
};
tt.register = WS;
tt.getAll = function () {
  return yo.slice();
};
tt.getById = function (t) {
  return yo.filter(function (e) {
    return e.vars.id === t;
  })[0];
};
US() && St.registerPlugin(tt);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var U,
  Zs,
  oe,
  Ae,
  sr,
  be,
  XS,
  Yc,
  Gc,
  wo,
  Yu,
  xu,
  jt,
  Cf,
  fp,
  zt,
  ov,
  av,
  Js,
  YS,
  Ed,
  GS,
  gn,
  QS,
  KS,
  qS,
  si,
  dp,
  rg,
  No,
  ig,
  Cd,
  vu = 1,
  Ut = Date.now,
  jd = Ut(),
  $n = 0,
  ba = 0,
  lv = function (e, n, r) {
    var i = yn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + n + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  uv = function (e, n) {
    return n && (!yn(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  FN = function t() {
    return ba && requestAnimationFrame(t);
  },
  cv = function () {
    return (Cf = 1);
  },
  fv = function () {
    return (Cf = 0);
  },
  xr = function (e) {
    return e;
  },
  Ta = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ZS = function () {
    return typeof window < "u";
  },
  JS = function () {
    return U || (ZS() && (U = window.gsap) && U.registerPlugin && U);
  },
  Ds = function (e) {
    return !!~XS.indexOf(e);
  },
  eb = function (e) {
    return (
      (e === "Height" ? ig : oe["inner" + e]) ||
      sr["client" + e] ||
      be["client" + e]
    );
  },
  tb = function (e) {
    return (
      Mi(e, "getBoundingClientRect") ||
      (Ds(e)
        ? function () {
            return (Ju.width = oe.innerWidth), (Ju.height = ig), Ju;
          }
        : function () {
            return Ir(e);
          })
    );
  },
  VN = function (e, n, r) {
    var i = r.d,
      s = r.d2,
      o = r.a;
    return (o = Mi(e, "getBoundingClientRect"))
      ? function () {
          return o()[i];
        }
      : function () {
          return (n ? eb(s) : e["client" + s]) || 0;
        };
  },
  zN = function (e, n) {
    return !n || ~kr.indexOf(e)
      ? tb(e)
      : function () {
          return Ju;
        };
  },
  Ur = function (e, n) {
    var r = n.s,
      i = n.d2,
      s = n.d,
      o = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (o = Mi(e, r))
        ? o() - tb(e)()[s]
        : Ds(e)
        ? (sr[r] || be[r]) - eb(i)
        : e[r] - e["offset" + i]
    );
  },
  yu = function (e, n) {
    for (var r = 0; r < Js.length; r += 3)
      (!n || ~n.indexOf(Js[r + 1])) && e(Js[r], Js[r + 1], Js[r + 2]);
  },
  yn = function (e) {
    return typeof e == "string";
  },
  Ht = function (e) {
    return typeof e == "function";
  },
  Gu = function (e) {
    return typeof e == "number";
  },
  fs = function (e) {
    return typeof e == "object";
  },
  pa = function (e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause();
  },
  Ad = function (e, n) {
    if (e.enabled) {
      var r = n(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Ks = Math.abs,
  nb = "left",
  rb = "top",
  sg = "right",
  og = "bottom",
  Ts = "width",
  ks = "height",
  Wa = "Right",
  Xa = "Left",
  Ya = "Top",
  Ga = "Bottom",
  Ze = "padding",
  On = "margin",
  Yo = "Width",
  ag = "Height",
  yt = "px",
  In = function (e) {
    return oe.getComputedStyle(e);
  },
  BN = function (e) {
    var n = In(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  dv = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  Ir = function (e, n) {
    var r =
        n &&
        In(e)[fp] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        U.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  hp = function (e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  ib = function (e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      s;
    for (s in r) n.push(r[s] / i);
    return n;
  },
  UN = function (e) {
    return function (n) {
      return U.utils.snap(ib(e), n);
    };
  },
  lg = function (e) {
    var n = U.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, s) {
          return i - s;
        });
    return r
      ? function (i, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return n(i);
          if (s > 0) {
            for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a];
            return r[a - 1];
          } else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a];
          return r[0];
        }
      : function (i, s, o) {
          o === void 0 && (o = 0.001);
          var a = n(i);
          return !s || Math.abs(a - i) < o || a - i < 0 == s < 0
            ? a
            : n(s < 0 ? i - e : i + e);
        };
  },
  $N = function (e) {
    return function (n, r) {
      return lg(ib(e))(n, r.direction);
    };
  },
  wu = function (e, n, r, i) {
    return r.split(",").forEach(function (s) {
      return e(n, s, i);
    });
  },
  ct = function (e, n, r, i, s) {
    return e.addEventListener(n, r, { passive: !i, capture: !!s });
  },
  ut = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  _u = function (e, n, r) {
    (r = r && r.wheelHandler), r && (e(n, "wheel", r), e(n, "touchmove", r));
  },
  hv = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Su = { toggleActions: "play", anticipatePin: 0 },
  Qc = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Qu = function (e, n) {
    if (yn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in Qc
            ? Qc[e] * n
            : ~e.indexOf("%")
            ? (parseFloat(e) * n) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  bu = function (e, n, r, i, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      d = s.fontSize,
      h = s.indent,
      p = s.fontWeight,
      x = Ae.createElement("div"),
      g = Ds(r) || Mi(r, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      y = g ? be : r,
      m = e.indexOf("start") !== -1,
      v = m ? u : c,
      w =
        "border-color:" +
        v +
        ";font-size:" +
        d +
        ";color:" +
        v +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (w += "position:" + ((_ || l) && g ? "fixed;" : "absolute;")),
      (_ || l || !g) &&
        (w += (i === st ? sg : og) + ":" + (o + parseFloat(h)) + "px;"),
      a &&
        (w +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (x._isStart = m),
      x.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (x.style.cssText = w),
      (x.innerText = n || n === 0 ? e + "-" + n : e),
      y.children[0] ? y.insertBefore(x, y.children[0]) : y.appendChild(x),
      (x._offset = x["offset" + i.op.d2]),
      Ku(x, 0, i, m),
      x
    );
  },
  Ku = function (e, n, r, i) {
    var s = { display: "block" },
      o = r[i ? "os2" : "p2"],
      a = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (s[r.a + "Percent"] = i ? -100 : 0),
      (s[r.a] = i ? "1px" : 0),
      (s["border" + o + Yo] = 1),
      (s["border" + a + Yo] = 0),
      (s[r.p] = n + "px"),
      U.set(e, s);
  },
  te = [],
  pp = {},
  Cl,
  pv = function () {
    return Ut() - $n > 34 && (Cl || (Cl = requestAnimationFrame(Xr)));
  },
  qs = function () {
    (!gn || !gn.isPressed || gn.startX > be.clientWidth) &&
      (re.cache++,
      gn ? Cl || (Cl = requestAnimationFrame(Xr)) : Xr(),
      $n || Ls("scrollStart"),
      ($n = Ut()));
  },
  Nd = function () {
    (qS = oe.innerWidth), (KS = oe.innerHeight);
  },
  ka = function () {
    re.cache++,
      !jt &&
        !GS &&
        !Ae.fullscreenElement &&
        !Ae.webkitFullscreenElement &&
        (!QS ||
          qS !== oe.innerWidth ||
          Math.abs(oe.innerHeight - KS) > oe.innerHeight * 0.25) &&
        Yc.restart(!0);
  },
  Rs = {},
  HN = [],
  sb = function t() {
    return ut(X, "scrollEnd", t) || xs(!0);
  },
  Ls = function (e) {
    return (
      (Rs[e] &&
        Rs[e].map(function (n) {
          return n();
        })) ||
      HN
    );
  },
  xn = [],
  ob = function (e) {
    for (var n = 0; n < xn.length; n += 5)
      (!e || (xn[n + 4] && xn[n + 4].query === e)) &&
        ((xn[n].style.cssText = xn[n + 1]),
        xn[n].getBBox && xn[n].setAttribute("transform", xn[n + 2] || ""),
        (xn[n + 3].uncache = 1));
  },
  ug = function (e, n) {
    var r;
    for (zt = 0; zt < te.length; zt++)
      (r = te[zt]),
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && ob(n), n || Ls("revert");
  },
  ab = function (e, n) {
    re.cache++,
      (n || !Bt) &&
        re.forEach(function (r) {
          return Ht(r) && r.cacheID++ && (r.rec = 0);
        }),
      yn(e) && (oe.history.scrollRestoration = rg = e);
  },
  Bt,
  Ps = 0,
  mv,
  WN = function () {
    if (mv !== Ps) {
      var e = (mv = Ps);
      requestAnimationFrame(function () {
        return e === Ps && xs(!0);
      });
    }
  },
  lb = function () {
    be.appendChild(No),
      (ig = No.offsetHeight || oe.innerHeight),
      be.removeChild(No);
  },
  xs = function (e, n) {
    if ($n && !e) {
      ct(X, "scrollEnd", sb);
      return;
    }
    lb(),
      (Bt = X.isRefreshing = !0),
      re.forEach(function (i) {
        return Ht(i) && ++i.cacheID && (i.rec = i());
      });
    var r = Ls("refreshInit");
    YS && X.sort(),
      n || ug(),
      re.forEach(function (i) {
        Ht(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      te.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      te.forEach(function (i, s) {
        if (i._subPinOffset && i.pin) {
          var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = i.pin[o];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[o] - a), i.refresh();
        }
      }),
      te.forEach(function (i) {
        var s = Ur(i.scroller, i._dir);
        (i.vars.end === "max" || (i._endClamp && i.end > s)) &&
          i.setPositions(i.start, Math.max(i.start + 1, s), !0);
      }),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      re.forEach(function (i) {
        Ht(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      ab(rg, 1),
      Yc.pause(),
      Ps++,
      (Bt = 2),
      Xr(2),
      te.forEach(function (i) {
        return Ht(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (Bt = X.isRefreshing = !1),
      Ls("refresh");
  },
  mp = 0,
  qu = 1,
  Qa,
  Xr = function (e) {
    if (!Bt || e === 2) {
      (X.isUpdating = !0), Qa && Qa.update(0);
      var n = te.length,
        r = Ut(),
        i = r - jd >= 50,
        s = n && te[0].scroll();
      if (
        ((qu = mp > s ? -1 : 1),
        Bt || (mp = s),
        i &&
          ($n && !Cf && r - $n > 200 && (($n = 0), Ls("scrollEnd")),
          (Yu = jd),
          (jd = r)),
        qu < 0)
      ) {
        for (zt = n; zt-- > 0; ) te[zt] && te[zt].update(0, i);
        qu = 1;
      } else for (zt = 0; zt < n; zt++) te[zt] && te[zt].update(0, i);
      X.isUpdating = !1;
    }
    Cl = 0;
  },
  gp = [
    nb,
    rb,
    og,
    sg,
    On + Ga,
    On + Wa,
    On + Ya,
    On + Xa,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Zu = gp.concat([
    Ts,
    ks,
    "boxSizing",
    "max" + Yo,
    "max" + ag,
    "position",
    On,
    Ze,
    Ze + Ya,
    Ze + Wa,
    Ze + Ga,
    Ze + Xa,
  ]),
  XN = function (e, n, r) {
    Mo(r);
    var i = e._gsap;
    if (i.spacerIsNative) Mo(i.spacerState);
    else if (e._gsap.swappedIn) {
      var s = n.parentNode;
      s && (s.insertBefore(e, n), s.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  Md = function (e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var s = gp.length, o = n.style, a = e.style, l; s--; )
        (l = gp[s]), (o[l] = r[l]);
      (o.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (o.display = "inline-block"),
        (a[og] = a[sg] = "auto"),
        (o.flexBasis = r.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Ts] = hp(e, $t) + yt),
        (o[ks] = hp(e, st) + yt),
        (o[Ze] = a[On] = a[rb] = a[nb] = "0"),
        Mo(i),
        (a[Ts] = a["max" + Yo] = r[Ts]),
        (a[ks] = a["max" + ag] = r[ks]),
        (a[Ze] = r[Ze]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  YN = /([A-Z])/g,
  Mo = function (e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        s,
        o;
      for ((e.t._gsap || U.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (o = e[i + 1]),
          (s = e[i]),
          o
            ? (n[s] = o)
            : n[s] && n.removeProperty(s.replace(YN, "-$1").toLowerCase());
    }
  },
  Tu = function (e) {
    for (var n = Zu.length, r = e.style, i = [], s = 0; s < n; s++)
      i.push(Zu[s], r[Zu[s]]);
    return (i.t = e), i;
  },
  GN = function (e, n, r) {
    for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), i.push(a, a in n ? n[a] : e[o + 1]);
    return (i.t = e.t), i;
  },
  Ju = { left: 0, top: 0 },
  gv = function (e, n, r, i, s, o, a, l, u, c, d, h, p, x) {
    Ht(e) && (e = e(l)),
      yn(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? Qu("0" + e.substr(3), r) : 0));
    var g = p ? p.time() : 0,
      _,
      y,
      m;
    if ((p && p.seek(0), isNaN(e) || (e = +e), Gu(e)))
      p &&
        (e = U.utils.mapRange(
          p.scrollTrigger.start,
          p.scrollTrigger.end,
          0,
          h,
          e
        )),
        a && Ku(a, r, i, !0);
    else {
      Ht(n) && (n = n(l));
      var v = (e || "0").split(" "),
        w,
        S,
        k,
        b;
      (m = qt(n, l) || be),
        (w = Ir(m) || {}),
        (!w || (!w.left && !w.top)) &&
          In(m).display === "none" &&
          ((b = m.style.display),
          (m.style.display = "block"),
          (w = Ir(m)),
          b ? (m.style.display = b) : m.style.removeProperty("display")),
        (S = Qu(v[0], w[i.d])),
        (k = Qu(v[1] || "0", r)),
        (e = w[i.p] - u[i.p] - c + S + s - k),
        a && Ku(a, k, i, r - k < 20 || (a._isStart && k > 20)),
        (r -= r - k);
    }
    if ((x && ((l[x] = e || -0.001), e < 0 && (e = 0)), o)) {
      var P = e + r,
        C = o._isStart;
      (_ = "scroll" + i.d2),
        Ku(
          o,
          P,
          i,
          (C && P > 20) ||
            (!C && (d ? Math.max(be[_], sr[_]) : o.parentNode[_]) <= P + 1)
        ),
        d &&
          ((u = Ir(a)),
          d && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + yt));
    }
    return (
      p &&
        m &&
        ((_ = Ir(m)),
        p.seek(h),
        (y = Ir(m)),
        (p._caScrollDist = _[i.p] - y[i.p]),
        (e = (e / p._caScrollDist) * h)),
      p && p.seek(g),
      p ? e : Math.round(e)
    );
  },
  QN = /(webkit|moz|length|cssText|inset)/i,
  xv = function (e, n, r, i) {
    if (e.parentNode !== n) {
      var s = e.style,
        o,
        a;
      if (n === be) {
        (e._stOrig = s.cssText), (a = In(e));
        for (o in a)
          !+o &&
            !QN.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = r), (s.left = i);
      } else s.cssText = e._stOrig;
      (U.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  ub = function (e, n, r) {
    var i = n,
      s = i;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== i &&
          a !== s &&
          Math.abs(a - i) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), r && r()),
        (s = i),
        (i = o),
        o
      );
    };
  },
  ku = function (e, n, r) {
    var i = {};
    (i[n.p] = "+=" + r), U.set(e, i);
  },
  vv = function (e, n) {
    var r = Vi(e, n),
      i = "_scroll" + n.p2,
      s = function o(a, l, u, c, d) {
        var h = o.tween,
          p = l.onComplete,
          x = {};
        u = u || r();
        var g = ub(r, u, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (d = (c && d) || 0),
          (c = c || a - u),
          h && h.kill(),
          (l[i] = a),
          (l.modifiers = x),
          (x[i] = function () {
            return g(u + c * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            re.cache++, Xr();
          }),
          (l.onComplete = function () {
            (o.tween = 0), p && p.call(h);
          }),
          (h = o.tween = U.to(e, l)),
          h
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      ct(e, "wheel", r.wheelHandler),
      X.isTouch && ct(e, "touchmove", r.wheelHandler),
      s
    );
  },
  X = (function () {
    function t(n, r) {
      Zs ||
        t.register(U) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        dp(this),
        this.init(n, r);
    }
    var e = t.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !ba)
        ) {
          this.update = this.refresh = this.kill = xr;
          return;
        }
        r = dv(yn(r) || Gu(r) || r.nodeType ? { trigger: r } : r, Su);
        var s = r,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          d = s.scrub,
          h = s.trigger,
          p = s.pin,
          x = s.pinSpacing,
          g = s.invalidateOnRefresh,
          _ = s.anticipatePin,
          y = s.onScrubComplete,
          m = s.onSnapComplete,
          v = s.once,
          w = s.snap,
          S = s.pinReparent,
          k = s.pinSpacer,
          b = s.containerAnimation,
          P = s.fastScrollEnd,
          C = s.preventOverlaps,
          j =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? $t
              : st,
          F = !d && d !== 0,
          R = qt(r.scroller || oe),
          Z = U.core.getCache(R),
          $ = Ds(R),
          H =
            ("pinType" in r
              ? r.pinType
              : Mi(R, "pinType") || ($ && "fixed")) === "fixed",
          K = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          W = F && r.toggleActions.split(" "),
          N = "markers" in r ? r.markers : Su.markers,
          O = $ ? 0 : parseFloat(In(R)["border" + j.p2 + Yo]) || 0,
          T = this,
          I =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(T);
            },
          ee = VN(R, $, j),
          nt = zN(R, $),
          ue = 0,
          Pe = 0,
          pe = 0,
          ge = Vi(R, j),
          mt,
          Ge,
          cn,
          Ie,
          fn,
          se,
          Qe,
          Qt,
          dn,
          A,
          hn,
          Cr,
          Yi,
          Ke,
          Gi,
          Qi,
          Zo,
          gt,
          He,
          Gn,
          Qn,
          Ki,
          jr,
          cr,
          Kt,
          qi,
          Ws,
          Xs,
          Zi,
          ti,
          ni,
          ce,
          Ji,
          Kn,
          qn,
          Zn,
          es,
          Ys,
          Ar;
        if (
          ((T._startClamp = T._endClamp = !1),
          (T._dir = j),
          (_ *= 45),
          (T.scroller = R),
          (T.scroll = b ? b.time.bind(b) : ge),
          (Ie = ge()),
          (T.vars = r),
          (i = i || r.animation),
          "refreshPriority" in r &&
            ((YS = 1), r.refreshPriority === -9999 && (Qa = T)),
          (Z.tweenScroll = Z.tweenScroll || {
            top: vv(R, st),
            left: vv(R, $t),
          }),
          (T.tweenTo = mt = Z.tweenScroll[j.p]),
          (T.scrubDuration = function (B) {
            (Ji = Gu(B) && B),
              Ji
                ? ce
                  ? ce.duration(B)
                  : (ce = U.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: Ji,
                      paused: !0,
                      onComplete: function () {
                        return y && y(T);
                      },
                    }))
                : (ce && ce.progress(1).kill(), (ce = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !T.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (T.animation = i.pause()),
            (i.scrollTrigger = T),
            T.scrubDuration(d),
            (ti = 0),
            l || (l = i.vars.id)),
          w &&
            ((!fs(w) || w.push) && (w = { snapTo: w }),
            "scrollBehavior" in be.style &&
              U.set($ ? [be, sr] : R, { scrollBehavior: "auto" }),
            re.forEach(function (B) {
              return (
                Ht(B) &&
                B.target === ($ ? Ae.scrollingElement || sr : R) &&
                (B.smooth = !1)
              );
            }),
            (cn = Ht(w.snapTo)
              ? w.snapTo
              : w.snapTo === "labels"
              ? UN(i)
              : w.snapTo === "labelsDirectional"
              ? $N(i)
              : w.directional !== !1
              ? function (B, le) {
                  return lg(w.snapTo)(B, Ut() - Pe < 500 ? 0 : le.direction);
                }
              : U.utils.snap(w.snapTo)),
            (Kn = w.duration || { min: 0.1, max: 2 }),
            (Kn = fs(Kn) ? wo(Kn.min, Kn.max) : wo(Kn, Kn)),
            (qn = U.delayedCall(w.delay || Ji / 2 || 0.1, function () {
              var B = ge(),
                le = Ut() - Pe < 500,
                q = mt.tween;
              if (
                (le || Math.abs(T.getVelocity()) < 10) &&
                !q &&
                !Cf &&
                ue !== B
              ) {
                var ne = (B - se) / Ke,
                  lt = i && !F ? i.totalProgress() : ne,
                  fe = le ? 0 : ((lt - ni) / (Ut() - Yu)) * 1e3 || 0,
                  We = U.utils.clamp(-ne, 1 - ne, (Ks(fe / 2) * fe) / 0.185),
                  Lt = ne + (w.inertia === !1 ? 0 : We),
                  xt = wo(0, 1, cn(Lt, T)),
                  Ce = Math.round(se + xt * Ke),
                  xe = w,
                  Jn = xe.onStart,
                  je = xe.onInterrupt,
                  pn = xe.onComplete;
                if (B <= Qe && B >= se && Ce !== B) {
                  if (q && !q._initted && q.data <= Ks(Ce - B)) return;
                  w.inertia === !1 && (We = xt - ne),
                    mt(
                      Ce,
                      {
                        duration: Kn(
                          Ks(
                            (Math.max(Ks(Lt - lt), Ks(xt - lt)) * 0.185) /
                              fe /
                              0.05 || 0
                          )
                        ),
                        ease: w.ease || "power3",
                        data: Ks(Ce - B),
                        onInterrupt: function () {
                          return qn.restart(!0) && je && je(T);
                        },
                        onComplete: function () {
                          T.update(),
                            (ue = ge()),
                            (ti = ni =
                              i && !F ? i.totalProgress() : T.progress),
                            m && m(T),
                            pn && pn(T);
                        },
                      },
                      B,
                      We * Ke,
                      Ce - B - We * Ke
                    ),
                    Jn && Jn(T, mt.tween);
                }
              } else T.isActive && ue !== B && qn.restart(!0);
            }).pause())),
          l && (pp[l] = T),
          (h = T.trigger = qt(h || (p !== !0 && p))),
          (Ar = h && h._gsap && h._gsap.stRevert),
          Ar && (Ar = Ar(T)),
          (p = p === !0 ? h : qt(p)),
          yn(a) && (a = { targets: h, className: a }),
          p &&
            (x === !1 ||
              x === On ||
              (x =
                !x &&
                p.parentNode &&
                p.parentNode.style &&
                In(p.parentNode).display === "flex"
                  ? !1
                  : Ze),
            (T.pin = p),
            (Ge = U.core.getCache(p)),
            Ge.spacer
              ? (Gi = Ge.pinState)
              : (k &&
                  ((k = qt(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Ge.spacerIsNative = !!k),
                  k && (Ge.spacerState = Tu(k))),
                (Ge.spacer = gt = k || Ae.createElement("div")),
                gt.classList.add("pin-spacer"),
                l && gt.classList.add("pin-spacer-" + l),
                (Ge.pinState = Gi = Tu(p))),
            r.force3D !== !1 && U.set(p, { force3D: !0 }),
            (T.spacer = gt = Ge.spacer),
            (Zi = In(p)),
            (cr = Zi[x + j.os2]),
            (Gn = U.getProperty(p)),
            (Qn = U.quickSetter(p, j.a, yt)),
            Md(p, gt, Zi),
            (Zo = Tu(p))),
          N)
        ) {
          (Cr = fs(N) ? dv(N, hv) : hv),
            (A = bu("scroller-start", l, R, j, Cr, 0)),
            (hn = bu("scroller-end", l, R, j, Cr, 0, A)),
            (He = A["offset" + j.op.d2]);
          var J = qt(Mi(R, "content") || R);
          (Qt = this.markerStart = bu("start", l, J, j, Cr, He, 0, b)),
            (dn = this.markerEnd = bu("end", l, J, j, Cr, He, 0, b)),
            b && (Ys = U.quickSetter([Qt, dn], j.a, yt)),
            !H &&
              !(kr.length && Mi(R, "fixedMarkers") === !0) &&
              (BN($ ? be : R),
              U.set([A, hn], { force3D: !0 }),
              (qi = U.quickSetter(A, j.a, yt)),
              (Xs = U.quickSetter(hn, j.a, yt)));
        }
        if (b) {
          var Y = b.vars.onUpdate,
            he = b.vars.onUpdateParams;
          b.eventCallback("onUpdate", function () {
            T.update(0, 0, 1), Y && Y.apply(b, he || []);
          });
        }
        if (
          ((T.previous = function () {
            return te[te.indexOf(T) - 1];
          }),
          (T.next = function () {
            return te[te.indexOf(T) + 1];
          }),
          (T.revert = function (B, le) {
            if (!le) return T.kill(!0);
            var q = B !== !1 || !T.enabled,
              ne = jt;
            q !== T.isReverted &&
              (q &&
                ((Zn = Math.max(ge(), T.scroll.rec || 0)),
                (pe = T.progress),
                (es = i && i.progress())),
              Qt &&
                [Qt, dn, A, hn].forEach(function (lt) {
                  return (lt.style.display = q ? "none" : "block");
                }),
              q && ((jt = T), T.update(q)),
              p &&
                (!S || !T.isActive) &&
                (q ? XN(p, gt, Gi) : Md(p, gt, In(p), Kt)),
              q || T.update(q),
              (jt = ne),
              (T.isReverted = q));
          }),
          (T.refresh = function (B, le, q, ne) {
            if (!((jt || !T.enabled) && !le)) {
              if (p && B && $n) {
                ct(t, "scrollEnd", sb);
                return;
              }
              !Bt && I && I(T),
                (jt = T),
                mt.tween && !q && (mt.tween.kill(), (mt.tween = 0)),
                ce && ce.pause(),
                g && i && i.revert({ kill: !1 }).invalidate(),
                T.isReverted || T.revert(!0, !0),
                (T._subPinOffset = !1);
              var lt = ee(),
                fe = nt(),
                We = b ? b.duration() : Ur(R, j),
                Lt = Ke <= 0.01,
                xt = 0,
                Ce = ne || 0,
                xe = fs(q) ? q.end : r.end,
                Jn = r.endTrigger || h,
                je = fs(q)
                  ? q.start
                  : r.start || (r.start === 0 || !h ? 0 : p ? "0 0" : "0 100%"),
                pn = (T.pinnedContainer =
                  r.pinnedContainer && qt(r.pinnedContainer, T)),
                fr = (h && Math.max(0, te.indexOf(T))) || 0,
                mn = fr,
                vt,
                kt,
                ts,
                Wl,
                Pt,
                rt,
                dr,
                Mf,
                xg,
                Jo,
                hr,
                ea,
                Xl;
              for (
                N &&
                fs(q) &&
                ((ea = U.getProperty(A, j.p)), (Xl = U.getProperty(hn, j.p)));
                mn--;

              )
                (rt = te[mn]),
                  rt.end || rt.refresh(0, 1) || (jt = T),
                  (dr = rt.pin),
                  dr &&
                    (dr === h || dr === p || dr === pn) &&
                    !rt.isReverted &&
                    (Jo || (Jo = []), Jo.unshift(rt), rt.revert(!0, !0)),
                  rt !== te[mn] && (fr--, mn--);
              for (
                Ht(je) && (je = je(T)),
                  je = lv(je, "start", T),
                  se =
                    gv(
                      je,
                      h,
                      lt,
                      j,
                      ge(),
                      Qt,
                      A,
                      T,
                      fe,
                      O,
                      H,
                      We,
                      b,
                      T._startClamp && "_startClamp"
                    ) || (p ? -0.001 : 0),
                  Ht(xe) && (xe = xe(T)),
                  yn(xe) &&
                    !xe.indexOf("+=") &&
                    (~xe.indexOf(" ")
                      ? (xe = (yn(je) ? je.split(" ")[0] : "") + xe)
                      : ((xt = Qu(xe.substr(2), lt)),
                        (xe = yn(je)
                          ? je
                          : (b
                              ? U.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  se
                                )
                              : se) + xt),
                        (Jn = h))),
                  xe = lv(xe, "end", T),
                  Qe =
                    Math.max(
                      se,
                      gv(
                        xe || (Jn ? "100% 0" : We),
                        Jn,
                        lt,
                        j,
                        ge() + xt,
                        dn,
                        hn,
                        T,
                        fe,
                        O,
                        H,
                        We,
                        b,
                        T._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  xt = 0,
                  mn = fr;
                mn--;

              )
                (rt = te[mn]),
                  (dr = rt.pin),
                  dr &&
                    rt.start - rt._pinPush <= se &&
                    !b &&
                    rt.end > 0 &&
                    ((vt =
                      rt.end -
                      (T._startClamp ? Math.max(0, rt.start) : rt.start)),
                    ((dr === h && rt.start - rt._pinPush < se) || dr === pn) &&
                      isNaN(je) &&
                      (xt += vt * (1 - rt.progress)),
                    dr === p && (Ce += vt));
              if (
                ((se += xt),
                (Qe += xt),
                T._startClamp && (T._startClamp += xt),
                T._endClamp &&
                  !Bt &&
                  ((T._endClamp = Qe || -0.001), (Qe = Math.min(Qe, Ur(R, j)))),
                (Ke = Qe - se || ((se -= 0.01) && 0.001)),
                Lt && (pe = U.utils.clamp(0, 1, U.utils.normalize(se, Qe, Zn))),
                (T._pinPush = Ce),
                Qt &&
                  xt &&
                  ((vt = {}),
                  (vt[j.a] = "+=" + xt),
                  pn && (vt[j.p] = "-=" + ge()),
                  U.set([Qt, dn], vt)),
                p)
              )
                (vt = In(p)),
                  (Wl = j === st),
                  (ts = ge()),
                  (Ki = parseFloat(Gn(j.a)) + Ce),
                  !We &&
                    Qe > 1 &&
                    ((hr = ($ ? Ae.scrollingElement || sr : R).style),
                    (hr = {
                      style: hr,
                      value: hr["overflow" + j.a.toUpperCase()],
                    }),
                    $ &&
                      In(be)["overflow" + j.a.toUpperCase()] !== "scroll" &&
                      (hr.style["overflow" + j.a.toUpperCase()] = "scroll")),
                  Md(p, gt, vt),
                  (Zo = Tu(p)),
                  (kt = Ir(p, !0)),
                  (Mf = H && Vi(R, Wl ? $t : st)()),
                  x &&
                    ((Kt = [x + j.os2, Ke + Ce + yt]),
                    (Kt.t = gt),
                    (mn = x === Ze ? hp(p, j) + Ke + Ce : 0),
                    mn && Kt.push(j.d, mn + yt),
                    Mo(Kt),
                    pn &&
                      te.forEach(function (ta) {
                        ta.pin === pn &&
                          ta.vars.pinSpacing !== !1 &&
                          (ta._subPinOffset = !0);
                      }),
                    H && ge(Zn)),
                  H &&
                    ((Pt = {
                      top: kt.top + (Wl ? ts - se : Mf) + yt,
                      left: kt.left + (Wl ? Mf : ts - se) + yt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Pt[Ts] = Pt["max" + Yo] = Math.ceil(kt.width) + yt),
                    (Pt[ks] = Pt["max" + ag] = Math.ceil(kt.height) + yt),
                    (Pt[On] =
                      Pt[On + Ya] =
                      Pt[On + Wa] =
                      Pt[On + Ga] =
                      Pt[On + Xa] =
                        "0"),
                    (Pt[Ze] = vt[Ze]),
                    (Pt[Ze + Ya] = vt[Ze + Ya]),
                    (Pt[Ze + Wa] = vt[Ze + Wa]),
                    (Pt[Ze + Ga] = vt[Ze + Ga]),
                    (Pt[Ze + Xa] = vt[Ze + Xa]),
                    (Qi = GN(Gi, Pt, S)),
                    Bt && ge(0)),
                  i
                    ? ((xg = i._initted),
                      Ed(1),
                      i.render(i.duration(), !0, !0),
                      (jr = Gn(j.a) - Ki + Ke + Ce),
                      (Ws = Math.abs(Ke - jr) > 1),
                      H && Ws && Qi.splice(Qi.length - 2, 2),
                      i.render(0, !0, !0),
                      xg || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      Ed(0))
                    : (jr = Ke),
                  hr &&
                    (hr.value
                      ? (hr.style["overflow" + j.a.toUpperCase()] = hr.value)
                      : hr.style.removeProperty("overflow-" + j.a));
              else if (h && ge() && !b)
                for (kt = h.parentNode; kt && kt !== be; )
                  kt._pinOffset &&
                    ((se -= kt._pinOffset), (Qe -= kt._pinOffset)),
                    (kt = kt.parentNode);
              Jo &&
                Jo.forEach(function (ta) {
                  return ta.revert(!1, !0);
                }),
                (T.start = se),
                (T.end = Qe),
                (Ie = fn = Bt ? Zn : ge()),
                !b && !Bt && (Ie < Zn && ge(Zn), (T.scroll.rec = 0)),
                T.revert(!1, !0),
                (Pe = Ut()),
                qn && ((ue = -1), qn.restart(!0)),
                (jt = 0),
                i &&
                  F &&
                  (i._initted || es) &&
                  i.progress() !== es &&
                  i.progress(es || 0, !0).render(i.time(), !0, !0),
                (Lt || pe !== T.progress || b) &&
                  (i &&
                    !F &&
                    i.totalProgress(
                      b && se < -0.001 && !pe
                        ? U.utils.normalize(se, Qe, 0)
                        : pe,
                      !0
                    ),
                  (T.progress = Lt || (Ie - se) / Ke === pe ? 0 : pe)),
                p && x && (gt._pinOffset = Math.round(T.progress * jr)),
                ce && ce.invalidate(),
                isNaN(ea) ||
                  ((ea -= U.getProperty(A, j.p)),
                  (Xl -= U.getProperty(hn, j.p)),
                  ku(A, j, ea),
                  ku(Qt, j, ea - (ne || 0)),
                  ku(hn, j, Xl),
                  ku(dn, j, Xl - (ne || 0))),
                Lt && !Bt && T.update(),
                c && !Bt && !Yi && ((Yi = !0), c(T), (Yi = !1));
            }
          }),
          (T.getVelocity = function () {
            return ((ge() - fn) / (Ut() - Yu)) * 1e3 || 0;
          }),
          (T.endAnimation = function () {
            pa(T.callbackAnimation),
              i &&
                (ce
                  ? ce.progress(1)
                  : i.paused()
                  ? F || pa(i, T.direction < 0, 1)
                  : pa(i, i.reversed()));
          }),
          (T.labelToScroll = function (B) {
            return (
              (i &&
                i.labels &&
                (se || T.refresh() || se) +
                  (i.labels[B] / i.duration()) * Ke) ||
              0
            );
          }),
          (T.getTrailing = function (B) {
            var le = te.indexOf(T),
              q =
                T.direction > 0 ? te.slice(0, le).reverse() : te.slice(le + 1);
            return (
              yn(B)
                ? q.filter(function (ne) {
                    return ne.vars.preventOverlaps === B;
                  })
                : q
            ).filter(function (ne) {
              return T.direction > 0 ? ne.end <= se : ne.start >= Qe;
            });
          }),
          (T.update = function (B, le, q) {
            if (!(b && !q && !B)) {
              var ne = Bt === !0 ? Zn : T.scroll(),
                lt = B ? 0 : (ne - se) / Ke,
                fe = lt < 0 ? 0 : lt > 1 ? 1 : lt || 0,
                We = T.progress,
                Lt,
                xt,
                Ce,
                xe,
                Jn,
                je,
                pn,
                fr;
              if (
                (le &&
                  ((fn = Ie),
                  (Ie = b ? ge() : ne),
                  w && ((ni = ti), (ti = i && !F ? i.totalProgress() : fe))),
                _ &&
                  !fe &&
                  p &&
                  !jt &&
                  !vu &&
                  $n &&
                  se < ne + ((ne - fn) / (Ut() - Yu)) * _ &&
                  (fe = 1e-4),
                fe !== We && T.enabled)
              ) {
                if (
                  ((Lt = T.isActive = !!fe && fe < 1),
                  (xt = !!We && We < 1),
                  (je = Lt !== xt),
                  (Jn = je || !!fe != !!We),
                  (T.direction = fe > We ? 1 : -1),
                  (T.progress = fe),
                  Jn &&
                    !jt &&
                    ((Ce = fe && !We ? 0 : fe === 1 ? 1 : We === 1 ? 2 : 3),
                    F &&
                      ((xe =
                        (!je && W[Ce + 1] !== "none" && W[Ce + 1]) || W[Ce]),
                      (fr =
                        i &&
                        (xe === "complete" || xe === "reset" || xe in i)))),
                  C &&
                    (je || fr) &&
                    (fr || d || !i) &&
                    (Ht(C)
                      ? C(T)
                      : T.getTrailing(C).forEach(function (ts) {
                          return ts.endAnimation();
                        })),
                  F ||
                    (ce && !jt && !vu
                      ? (ce._dp._time - ce._start !== ce._time &&
                          ce.render(ce._dp._time - ce._start),
                        ce.resetTo
                          ? ce.resetTo("totalProgress", fe, i._tTime / i._tDur)
                          : ((ce.vars.totalProgress = fe),
                            ce.invalidate().restart()))
                      : i && i.totalProgress(fe, !!(jt && (Pe || B)))),
                  p)
                ) {
                  if ((B && x && (gt.style[x + j.os2] = cr), !H))
                    Qn(Ta(Ki + jr * fe));
                  else if (Jn) {
                    if (
                      ((pn =
                        !B && fe > We && Qe + 1 > ne && ne + 1 >= Ur(R, j)),
                      S)
                    )
                      if (!B && (Lt || pn)) {
                        var mn = Ir(p, !0),
                          vt = ne - se;
                        xv(
                          p,
                          be,
                          mn.top + (j === st ? vt : 0) + yt,
                          mn.left + (j === st ? 0 : vt) + yt
                        );
                      } else xv(p, gt);
                    Mo(Lt || pn ? Qi : Zo),
                      (Ws && fe < 1 && Lt) ||
                        Qn(Ki + (fe === 1 && !pn ? jr : 0));
                  }
                }
                w && !mt.tween && !jt && !vu && qn.restart(!0),
                  a &&
                    (je || (v && fe && (fe < 1 || !Cd))) &&
                    Gc(a.targets).forEach(function (ts) {
                      return ts.classList[Lt || v ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !F && !B && o(T),
                  Jn && !jt
                    ? (F &&
                        (fr &&
                          (xe === "complete"
                            ? i.pause().totalProgress(1)
                            : xe === "reset"
                            ? i.restart(!0).pause()
                            : xe === "restart"
                            ? i.restart(!0)
                            : i[xe]()),
                        o && o(T)),
                      (je || !Cd) &&
                        (u && je && Ad(T, u),
                        K[Ce] && Ad(T, K[Ce]),
                        v && (fe === 1 ? T.kill(!1, 1) : (K[Ce] = 0)),
                        je || ((Ce = fe === 1 ? 1 : 3), K[Ce] && Ad(T, K[Ce]))),
                      P &&
                        !Lt &&
                        Math.abs(T.getVelocity()) > (Gu(P) ? P : 2500) &&
                        (pa(T.callbackAnimation),
                        ce
                          ? ce.progress(1)
                          : pa(i, xe === "reverse" ? 1 : !fe, 1)))
                    : F && o && !jt && o(T);
              }
              if (Xs) {
                var kt = b ? (ne / b.duration()) * (b._caScrollDist || 0) : ne;
                qi(kt + (A._isFlipped ? 1 : 0)), Xs(kt);
              }
              Ys && Ys((-ne / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (T.enable = function (B, le) {
            T.enabled ||
              ((T.enabled = !0),
              ct(R, "resize", ka),
              $ || ct(R, "scroll", qs),
              I && ct(t, "refreshInit", I),
              B !== !1 && ((T.progress = pe = 0), (Ie = fn = ue = ge())),
              le !== !1 && T.refresh());
          }),
          (T.getTween = function (B) {
            return B && mt ? mt.tween : ce;
          }),
          (T.setPositions = function (B, le, q, ne) {
            if (b) {
              var lt = b.scrollTrigger,
                fe = b.duration(),
                We = lt.end - lt.start;
              (B = lt.start + (We * B) / fe), (le = lt.start + (We * le) / fe);
            }
            T.refresh(
              !1,
              !1,
              {
                start: uv(B, q && !!T._startClamp),
                end: uv(le, q && !!T._endClamp),
              },
              ne
            ),
              T.update();
          }),
          (T.adjustPinSpacing = function (B) {
            if (Kt && B) {
              var le = Kt.indexOf(j.d) + 1;
              (Kt[le] = parseFloat(Kt[le]) + B + yt),
                (Kt[1] = parseFloat(Kt[1]) + B + yt),
                Mo(Kt);
            }
          }),
          (T.disable = function (B, le) {
            if (
              T.enabled &&
              (B !== !1 && T.revert(!0, !0),
              (T.enabled = T.isActive = !1),
              le || (ce && ce.pause()),
              (Zn = 0),
              Ge && (Ge.uncache = 1),
              I && ut(t, "refreshInit", I),
              qn && (qn.pause(), mt.tween && mt.tween.kill() && (mt.tween = 0)),
              !$)
            ) {
              for (var q = te.length; q--; )
                if (te[q].scroller === R && te[q] !== T) return;
              ut(R, "resize", ka), $ || ut(R, "scroll", qs);
            }
          }),
          (T.kill = function (B, le) {
            T.disable(B, le), ce && !le && ce.kill(), l && delete pp[l];
            var q = te.indexOf(T);
            q >= 0 && te.splice(q, 1),
              q === zt && qu > 0 && zt--,
              (q = 0),
              te.forEach(function (ne) {
                return ne.scroller === T.scroller && (q = 1);
              }),
              q || Bt || (T.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                B && i.revert({ kill: !1 }),
                le || i.kill()),
              Qt &&
                [Qt, dn, A, hn].forEach(function (ne) {
                  return ne.parentNode && ne.parentNode.removeChild(ne);
                }),
              Qa === T && (Qa = 0),
              p &&
                (Ge && (Ge.uncache = 1),
                (q = 0),
                te.forEach(function (ne) {
                  return ne.pin === p && q++;
                }),
                q || (Ge.spacer = 0)),
              r.onKill && r.onKill(T);
          }),
          te.push(T),
          T.enable(!1, !1),
          Ar && Ar(T),
          i && i.add && !Ke)
        ) {
          var Fe = T.update;
          (T.update = function () {
            (T.update = Fe), se || Qe || T.refresh();
          }),
            U.delayedCall(0.01, T.update),
            (Ke = 0.01),
            (se = Qe = 0);
        } else T.refresh();
        p && WN();
      }),
      (t.register = function (r) {
        return (
          Zs ||
            ((U = r || JS()), ZS() && window.document && t.enable(), (Zs = ba)),
          Zs
        );
      }),
      (t.defaults = function (r) {
        if (r) for (var i in r) Su[i] = r[i];
        return Su;
      }),
      (t.disable = function (r, i) {
        (ba = 0),
          te.forEach(function (o) {
            return o[i ? "kill" : "disable"](r);
          }),
          ut(oe, "wheel", qs),
          ut(Ae, "scroll", qs),
          clearInterval(xu),
          ut(Ae, "touchcancel", xr),
          ut(be, "touchstart", xr),
          wu(ut, Ae, "pointerdown,touchstart,mousedown", cv),
          wu(ut, Ae, "pointerup,touchend,mouseup", fv),
          Yc.kill(),
          yu(ut);
        for (var s = 0; s < re.length; s += 3)
          _u(ut, re[s], re[s + 1]), _u(ut, re[s], re[s + 2]);
      }),
      (t.enable = function () {
        if (
          ((oe = window),
          (Ae = document),
          (sr = Ae.documentElement),
          (be = Ae.body),
          U &&
            ((Gc = U.utils.toArray),
            (wo = U.utils.clamp),
            (dp = U.core.context || xr),
            (Ed = U.core.suppressOverwrites || xr),
            (rg = oe.history.scrollRestoration || "auto"),
            (mp = oe.pageYOffset),
            U.core.globals("ScrollTrigger", t),
            be))
        ) {
          (ba = 1),
            (No = document.createElement("div")),
            (No.style.height = "100vh"),
            (No.style.position = "absolute"),
            lb(),
            FN(),
            tt.register(U),
            (t.isTouch = tt.isTouch),
            (si =
              tt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ct(oe, "wheel", qs),
            (XS = [oe, Ae, sr, be]),
            U.matchMedia
              ? ((t.matchMedia = function (l) {
                  var u = U.matchMedia(),
                    c;
                  for (c in l) u.add(c, l[c]);
                  return u;
                }),
                U.addEventListener("matchMediaInit", function () {
                  return ug();
                }),
                U.addEventListener("matchMediaRevert", function () {
                  return ob();
                }),
                U.addEventListener("matchMedia", function () {
                  xs(0, 1), Ls("matchMedia");
                }),
                U.matchMedia("(orientation: portrait)", function () {
                  return Nd(), Nd;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Nd(),
            ct(Ae, "scroll", qs);
          var r = be.style,
            i = r.borderTopStyle,
            s = U.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              o = Ir(be),
              st.m = Math.round(o.top + st.sc()) || 0,
              $t.m = Math.round(o.left + $t.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              xu = setInterval(pv, 250),
              U.delayedCall(0.5, function () {
                return (vu = 0);
              }),
              ct(Ae, "touchcancel", xr),
              ct(be, "touchstart", xr),
              wu(ct, Ae, "pointerdown,touchstart,mousedown", cv),
              wu(ct, Ae, "pointerup,touchend,mouseup", fv),
              fp = U.utils.checkPrefix("transform"),
              Zu.push(fp),
              Zs = Ut(),
              Yc = U.delayedCall(0.2, xs).pause(),
              Js = [
                Ae,
                "visibilitychange",
                function () {
                  var l = oe.innerWidth,
                    u = oe.innerHeight;
                  Ae.hidden
                    ? ((ov = l), (av = u))
                    : (ov !== l || av !== u) && ka();
                },
                Ae,
                "DOMContentLoaded",
                xs,
                oe,
                "load",
                xs,
                oe,
                "resize",
                ka,
              ],
              yu(ct),
              te.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < re.length;
            a += 3
          )
            _u(ut, re[a], re[a + 1]), _u(ut, re[a], re[a + 2]);
        }
      }),
      (t.config = function (r) {
        "limitCallbacks" in r && (Cd = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(xu)) || ((xu = i) && setInterval(pv, i)),
          "ignoreMobileResize" in r &&
            (QS = t.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (yu(ut) || yu(ct, r.autoRefreshEvents || "none"),
            (GS = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (t.scrollerProxy = function (r, i) {
        var s = qt(r),
          o = re.indexOf(s),
          a = Ds(s);
        ~o && re.splice(o, a ? 6 : 2),
          i && (a ? kr.unshift(oe, i, be, i, sr, i) : kr.unshift(s, i));
      }),
      (t.clearMatchMedia = function (r) {
        te.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (r, i, s) {
        var o = (yn(r) ? qt(r) : r).getBoundingClientRect(),
          a = o[s ? Ts : ks] * i || 0;
        return s
          ? o.right - a > 0 && o.left + a < oe.innerWidth
          : o.bottom - a > 0 && o.top + a < oe.innerHeight;
      }),
      (t.positionInViewport = function (r, i, s) {
        yn(r) && (r = qt(r));
        var o = r.getBoundingClientRect(),
          a = o[s ? Ts : ks],
          l =
            i == null
              ? a / 2
              : i in Qc
              ? Qc[i] * a
              : ~i.indexOf("%")
              ? (parseFloat(i) * a) / 100
              : parseFloat(i) || 0;
        return s ? (o.left + l) / oe.innerWidth : (o.top + l) / oe.innerHeight;
      }),
      (t.killAll = function (r) {
        if (
          (te.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          r !== !0)
        ) {
          var i = Rs.killAll || [];
          (Rs = {}),
            i.forEach(function (s) {
              return s();
            });
        }
      }),
      t
    );
  })();
X.version = "3.12.2";
X.saveStyles = function (t) {
  return t
    ? Gc(t).forEach(function (e) {
        if (e && e.style) {
          var n = xn.indexOf(e);
          n >= 0 && xn.splice(n, 5),
            xn.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              U.core.getCache(e),
              dp()
            );
        }
      })
    : xn;
};
X.revert = function (t, e) {
  return ug(!t, e);
};
X.create = function (t, e) {
  return new X(t, e);
};
X.refresh = function (t) {
  return t ? ka() : (Zs || X.register()) && xs(!0);
};
X.update = function (t) {
  return ++re.cache && Xr(t === !0 ? 2 : 0);
};
X.clearScrollMemory = ab;
X.maxScroll = function (t, e) {
  return Ur(t, e ? $t : st);
};
X.getScrollFunc = function (t, e) {
  return Vi(qt(t), e ? $t : st);
};
X.getById = function (t) {
  return pp[t];
};
X.getAll = function () {
  return te.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
X.isScrolling = function () {
  return !!$n;
};
X.snapDirectional = lg;
X.addEventListener = function (t, e) {
  var n = Rs[t] || (Rs[t] = []);
  ~n.indexOf(e) || n.push(e);
};
X.removeEventListener = function (t, e) {
  var n = Rs[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
X.batch = function (t, e) {
  var n = [],
    r = {},
    i = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var d = [],
        h = [],
        p = U.delayedCall(i, function () {
          c(d, h), (d = []), (h = []);
        }).pause();
      return function (x) {
        d.length || p.restart(!0),
          d.push(x.trigger),
          h.push(x),
          s <= d.length && p.progress(1);
      };
    },
    a;
  for (a in e)
    r[a] =
      a.substr(0, 2) === "on" && Ht(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    Ht(s) &&
      ((s = s()),
      ct(X, "refresh", function () {
        return (s = e.batchMax());
      })),
    Gc(t).forEach(function (l) {
      var u = {};
      for (a in r) u[a] = r[a];
      (u.trigger = l), n.push(X.create(u));
    }),
    n
  );
};
var yv = function (e, n, r, i) {
    return (
      n > i ? e(i) : n < 0 && e(0),
      r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
    );
  },
  Dd = function t(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          n === !0
            ? "auto"
            : n
            ? "pan-" + n + (tt.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === sr && t(be, n);
  },
  Pu = { auto: 1, scroll: 1 },
  KN = function (e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      s = (n.changedTouches ? n.changedTouches[0] : n).target,
      o = s._gsap || U.core.getCache(s),
      a = Ut(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== be &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(Pu[(l = In(s)).overflowY] || Pu[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== r &&
        !Ds(s) &&
        (Pu[(l = In(s)).overflowY] || Pu[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  cb = function (e, n, r, i) {
    return tt.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && KN),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && ct(Ae, tt.eventTypes[0], _v, !1, !0);
      },
      onDisable: function () {
        return ut(Ae, tt.eventTypes[0], _v, !0);
      },
    });
  },
  qN = /(input|label|select|textarea)/i,
  wv,
  _v = function (e) {
    var n = qN.test(e.target.tagName);
    (n || wv) && ((e._gsapAllow = !0), (wv = n));
  },
  ZN = function (e) {
    fs(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      s = n.allowNestedScroll,
      o = n.onRelease,
      a,
      l,
      u = qt(e.target) || sr,
      c = U.core.globals().ScrollSmoother,
      d = c && c.get(),
      h =
        si &&
        ((e.content && qt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      p = Vi(u, st),
      x = Vi(u, $t),
      g = 1,
      _ =
        (tt.isTouch && oe.visualViewport
          ? oe.visualViewport.scale * oe.visualViewport.width
          : oe.outerWidth) / oe.innerWidth,
      y = 0,
      m = Ht(i)
        ? function () {
            return i(a);
          }
        : function () {
            return i || 2.8;
          },
      v,
      w,
      S = cb(u, e.type, !0, s),
      k = function () {
        return (w = !1);
      },
      b = xr,
      P = xr,
      C = function () {
        (l = Ur(u, st)),
          (P = wo(si ? 1 : 0, l)),
          r && (b = wo(0, Ur(u, $t))),
          (v = Ps);
      },
      j = function () {
        (h._gsap.y = Ta(parseFloat(h._gsap.y) + p.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (p.offset = p.cacheID = 0);
      },
      F = function () {
        if (w) {
          requestAnimationFrame(k);
          var N = Ta(a.deltaY / 2),
            O = P(p.v - N);
          if (h && O !== p.v + p.offset) {
            p.offset = O - p.v;
            var T = Ta((parseFloat(h && h._gsap.y) || 0) - p.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              T +
              ", 0, 1)"),
              (h._gsap.y = T + "px"),
              (p.cacheID = re.cache),
              Xr();
          }
          return !0;
        }
        p.offset && j(), (w = !0);
      },
      R,
      Z,
      $,
      H,
      K = function () {
        C(),
          R.isActive() &&
            R.vars.scrollY > l &&
            (p() > l ? R.progress(1) && p(l) : R.resetTo("scrollY", l));
      };
    return (
      h && U.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (W) {
        return (
          (si && W.type === "touchmove" && F()) ||
          (g > 1.05 && W.type !== "touchstart") ||
          a.isGesturing ||
          (W.touches && W.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        w = !1;
        var W = g;
        (g = Ta(((oe.visualViewport && oe.visualViewport.scale) || 1) / _)),
          R.pause(),
          W !== g && Dd(u, g > 1.01 ? !0 : r ? !1 : "x"),
          (Z = x()),
          ($ = p()),
          C(),
          (v = Ps);
      }),
      (e.onRelease = e.onGestureStart =
        function (W, N) {
          if ((p.offset && j(), !N)) H.restart(!0);
          else {
            re.cache++;
            var O = m(),
              T,
              I;
            r &&
              ((T = x()),
              (I = T + (O * 0.05 * -W.velocityX) / 0.227),
              (O *= yv(x, T, I, Ur(u, $t))),
              (R.vars.scrollX = b(I))),
              (T = p()),
              (I = T + (O * 0.05 * -W.velocityY) / 0.227),
              (O *= yv(p, T, I, Ur(u, st))),
              (R.vars.scrollY = P(I)),
              R.invalidate().duration(O).play(0.01),
              ((si && R.vars.scrollY >= l) || T >= l - 1) &&
                U.to({}, { onUpdate: K, duration: O });
          }
          o && o(W);
        }),
      (e.onWheel = function () {
        R._ts && R.pause(), Ut() - y > 1e3 && ((v = 0), (y = Ut()));
      }),
      (e.onChange = function (W, N, O, T, I) {
        if (
          (Ps !== v && C(),
          N && r && x(b(T[2] === N ? Z + (W.startX - W.x) : x() + N - T[1])),
          O)
        ) {
          p.offset && j();
          var ee = I[2] === O,
            nt = ee ? $ + W.startY - W.y : p() + O - I[1],
            ue = P(nt);
          ee && nt !== ue && ($ += ue - nt), p(ue);
        }
        (O || N) && Xr();
      }),
      (e.onEnable = function () {
        Dd(u, r ? !1 : "x"),
          X.addEventListener("refresh", K),
          ct(oe, "resize", K),
          p.smooth &&
            ((p.target.style.scrollBehavior = "auto"),
            (p.smooth = x.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        Dd(u, !0),
          ut(oe, "resize", K),
          X.removeEventListener("refresh", K),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new tt(e)),
      (a.iOS = si),
      si && !p() && p(1),
      si && U.ticker.add(xr),
      (H = a._dc),
      (R = U.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: ub(p, p(), function () {
            return R.pause();
          }),
        },
        onUpdate: Xr,
        onComplete: H.vars.onComplete,
      })),
      a
    );
  };
X.sort = function (t) {
  return te.sort(
    t ||
      function (e, n) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (n.start + (n.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
X.observe = function (t) {
  return new tt(t);
};
X.normalizeScroll = function (t) {
  if (typeof t > "u") return gn;
  if (t === !0 && gn) return gn.enable();
  if (t === !1) return gn && gn.kill();
  var e = t instanceof tt ? t : ZN(t);
  return gn && gn.target === e.target && gn.kill(), Ds(e.target) && (gn = e), e;
};
X.core = {
  _getVelocityProp: cp,
  _inputObserver: cb,
  _scrollers: re,
  _proxies: kr,
  bridge: {
    ss: function () {
      $n || Ls("scrollStart"), ($n = Ut());
    },
    ref: function () {
      return jt;
    },
  },
};
JS() && U.registerPlugin(X);
L.registerPlugin(X);
function JN() {
  return (
    E.useEffect(() => {
      L.to(".box5", {
        scrollTrigger: { trigger: ".trigger1", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box6", {
          scrollTrigger: { trigger: ".trigger1", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box7", {
          scrollTrigger: { trigger: ".trigger1", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger1 w-full relative min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]",
      children: [
        f.jsx(D.img, {
          className:
            "box box5 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box6 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: xf,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box7 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block",
          src: Fl,
          alt: "box",
        }),
        f.jsxs("div", {
          className: `mt-[100px] max-w-7xl mx-auto ${V.paddingX} items-start`,
          children: [
            f.jsx("div", {
              children: f.jsx("h2", {
                className: `${V.heroHeadText}  text-white uppercase text-center`,
                children: f.jsx("span", {
                  className: "text-black",
                  children: "Unlock The Power of Blockchain",
                }),
              }),
            }),
            f.jsxs("div", {
              className:
                " flex flex-col justify-between mt-4 md:mt-[4rem] lg:flex-row items-center",
              children: [
                f.jsx("div", {
                  className:
                    "image1  md:w-[50%] h-[20rem] md:h-[35vh] lg:h-[50vh] xl:w-[35rem] ",
                  children: f.jsx(D.img, {
                    src: iP,
                    alt: "",
                    animate: { y: [0, -10, 0] },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      repeatType: "loop",
                    },
                  }),
                }),
                f.jsxs("div", {
                  className:
                    "w-full lg:w-[45%] md:p-6 text-center md:text-left",
                  children: [
                    f.jsx("h1", {
                      className: " w-full text-[1.7rem] uppercase font-normal",
                      children: "Welcome to the era of Decentralistion",
                    }),
                    f.jsx("p", {
                      className:
                        " w-full text-[#807E87] text-[1rem] uppercase font-normal mt-4 leading-7 tracking-wide",
                      children:
                        "Witness the emergence of a new era, where trust flows freely, collaboration knows no bounds, and the infinite possibilities of human potential unfold in graceful union with the interconnected web of existence.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function jf() {
  return f.jsx("section", {
    className: " w-full py-5 bg-[#5379FE]",
    children: f.jsxs("div", {
      className:
        "flex flex-col text-center md:flex md:flex-row md:justify-between max-w-[80vw] mx-auto",
      children: [
        f.jsx("div", {
          className: "text-white w-[100%] md:w-[60%] lg:w-[50%]",
          children: f.jsx("span", {
            className: "pt-[4px]",
            children: "@2023 All Rights Reserved",
          }),
        }),
        f.jsxs("div", {
          className:
            "text-white w-[100%] mt-4 md:mt-[0px] md:w-[45%] lg:w-[50%] xl:w-[25rem] flex flex-row justify-between",
          children: [
            f.jsx("div", {
              className: "hidden lg:inline-block",
              children: f.jsxs("div", {
                className: "flex flex-row gap-3 mr-4  ",
                children: [
                  f.jsx("a", {
                    href: "#",
                    children: f.jsx("img", { src: D0, className: "", alt: "" }),
                  }),
                  f.jsx("a", {
                    href: "#",
                    children: f.jsx("img", { src: L0, className: "", alt: "" }),
                  }),
                  f.jsx("a", {
                    href: "#",
                    children: f.jsx("img", { src: R0, className: "", alt: "" }),
                  }),
                ],
              }),
            }),
            f.jsx("a", {
              href: "#",
              className: "pt-[4px]",
              children: "Privacy Policy",
            }),
            f.jsx("a", {
              href: "#",
              className: "pt-[4px]",
              children: "Terms of Service",
            }),
          ],
        }),
        f.jsx("div", {
          className: "w-[100%] mt-4 md:hidden",
          children: f.jsxs("div", {
            className: "flex flex-row justify-center gap-4  ",
            children: [
              f.jsx("a", {
                href: "#",
                children: f.jsx("img", { src: D0, className: "", alt: "" }),
              }),
              f.jsx("a", {
                href: "#",
                children: f.jsx("img", { src: L0, className: "", alt: "" }),
              }),
              f.jsx("a", {
                href: "#",
                children: f.jsx("img", { src: R0, className: "", alt: "" }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var xp = new Map(),
  Eu = new WeakMap(),
  Sv = 0,
  e3 = void 0;
function t3(t) {
  return t
    ? (Eu.has(t) || ((Sv += 1), Eu.set(t, Sv.toString())), Eu.get(t))
    : "0";
}
function n3(t) {
  return Object.keys(t)
    .sort()
    .filter((e) => t[e] !== void 0)
    .map((e) => `${e}_${e === "root" ? t3(t.root) : t[e]}`)
    .toString();
}
function r3(t) {
  let e = n3(t),
    n = xp.get(e);
  if (!n) {
    const r = new Map();
    let i;
    const s = new IntersectionObserver((o) => {
      o.forEach((a) => {
        var l;
        const u = a.isIntersecting && i.some((c) => a.intersectionRatio >= c);
        t.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u),
          (l = r.get(a.target)) == null ||
            l.forEach((c) => {
              c(u, a);
            });
      });
    }, t);
    (i =
      s.thresholds ||
      (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0])),
      (n = { id: e, observer: s, elements: r }),
      xp.set(e, n);
  }
  return n;
}
function i3(t, e, n = {}, r = e3) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
    const l = t.getBoundingClientRect();
    return (
      e(r, {
        isIntersecting: r,
        target: t,
        intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
        time: 0,
        boundingClientRect: l,
        intersectionRect: l,
        rootBounds: l,
      }),
      () => {}
    );
  }
  const { id: i, observer: s, elements: o } = r3(n);
  let a = o.get(t) || [];
  return (
    o.has(t) || o.set(t, a),
    a.push(e),
    s.observe(t),
    function () {
      a.splice(a.indexOf(e), 1),
        a.length === 0 && (o.delete(t), s.unobserve(t)),
        o.size === 0 && (s.disconnect(), xp.delete(i));
    }
  );
}
function Xt({
  threshold: t,
  delay: e,
  trackVisibility: n,
  rootMargin: r,
  root: i,
  triggerOnce: s,
  skip: o,
  initialInView: a,
  fallbackInView: l,
  onChange: u,
} = {}) {
  var c;
  const [d, h] = E.useState(null),
    p = E.useRef(),
    [x, g] = E.useState({ inView: !!a, entry: void 0 });
  (p.current = u),
    E.useEffect(() => {
      if (o || !d) return;
      let v;
      return (
        (v = i3(
          d,
          (w, S) => {
            g({ inView: w, entry: S }),
              p.current && p.current(w, S),
              S.isIntersecting && s && v && (v(), (v = void 0));
          },
          {
            root: i,
            rootMargin: r,
            threshold: t,
            trackVisibility: n,
            delay: e,
          },
          l
        )),
        () => {
          v && v();
        }
      );
    }, [Array.isArray(t) ? t.toString() : t, d, i, r, s, o, n, l, e]);
  const _ = (c = x.entry) == null ? void 0 : c.target,
    y = E.useRef();
  !d &&
    _ &&
    !s &&
    !o &&
    y.current !== _ &&
    ((y.current = _), g({ inView: !!a, entry: void 0 }));
  const m = [h, x.inView, x.entry];
  return (m.ref = m[0]), (m.inView = m[1]), (m.entry = m[2]), m;
}
L.registerPlugin(X);
function s3() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {
      L.to(".box10", {
        scrollTrigger: {
          trigger: ".trigger3",
          start: "top top",
          endTrigger: "bottom bottom",
          scrub: 1,
        },
        x: -500,
        y: 200,
        z: 200,
        ease: G,
        duration: 1,
      }),
        L.to(".box11", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: -800,
          z: 200,
          ease: G,
          duration: 1.5,
        }),
        L.to(".box12", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box13", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2.5,
        });
    }, []),
    f.jsxs("section", {
      className: "trigger3 w-full xl:min-h-[73vh] relative mx-auto  ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] rotate-[-40.33]",
          src: $i,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]",
          src: Er,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block",
          src: Bs,
          alt: "box",
        }),
        e &&
          f.jsx(D.div, {
            className: `pt-[30vh] pb-[30vh] w-7xl mx-auto ${V.paddingX} items-start lg:w-[80vw]`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            children: f.jsx("h2", {
              className: `${V.heroHead1Text}  text-white uppercase text-center`,
              children: f.jsx("span", {
                className: "text-black ",
                children:
                  "Our goal at Miyagi is to make your interactions with this innovative technology as humane as possible while providing you with endless inspiration for your creative journey.",
              }),
            }),
          }),
      ],
    })
  );
}
const Ka = /^[a-z0-9]+(-[a-z0-9]+)*$/,
  Af = (t, e, n, r = "") => {
    const i = t.split(":");
    if (t.slice(0, 1) === "@") {
      if (i.length < 2 || i.length > 3) return null;
      r = i.shift().slice(1);
    }
    if (i.length > 3 || !i.length) return null;
    if (i.length > 1) {
      const a = i.pop(),
        l = i.pop(),
        u = { provider: i.length > 0 ? i[0] : r, prefix: l, name: a };
      return e && !ec(u) ? null : u;
    }
    const s = i[0],
      o = s.split("-");
    if (o.length > 1) {
      const a = { provider: r, prefix: o.shift(), name: o.join("-") };
      return e && !ec(a) ? null : a;
    }
    if (n && r === "") {
      const a = { provider: r, prefix: "", name: s };
      return e && !ec(a, n) ? null : a;
    }
    return null;
  },
  ec = (t, e) =>
    t
      ? !!(
          (t.provider === "" || t.provider.match(Ka)) &&
          ((e && t.prefix === "") || t.prefix.match(Ka)) &&
          t.name.match(Ka)
        )
      : !1,
  fb = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
  Kc = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
  cg = Object.freeze({ ...fb, ...Kc }),
  vp = Object.freeze({ ...cg, body: "", hidden: !1 });
function o3(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0),
    !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function bv(t, e) {
  const n = o3(t, e);
  for (const r in vp)
    r in Kc
      ? r in t && !(r in n) && (n[r] = Kc[r])
      : r in e
      ? (n[r] = e[r])
      : r in t && (n[r] = t[r]);
  return n;
}
function a3(t, e) {
  const n = t.icons,
    r = t.aliases || Object.create(null),
    i = Object.create(null);
  function s(o) {
    if (n[o]) return (i[o] = []);
    if (!(o in i)) {
      i[o] = null;
      const a = r[o] && r[o].parent,
        l = a && s(a);
      l && (i[o] = [a].concat(l));
    }
    return i[o];
  }
  return (e || Object.keys(n).concat(Object.keys(r))).forEach(s), i;
}
function l3(t, e, n) {
  const r = t.icons,
    i = t.aliases || Object.create(null);
  let s = {};
  function o(a) {
    s = bv(r[a] || i[a], s);
  }
  return o(e), n.forEach(o), bv(t, s);
}
function db(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object") return n;
  t.not_found instanceof Array &&
    t.not_found.forEach((i) => {
      e(i, null), n.push(i);
    });
  const r = a3(t);
  for (const i in r) {
    const s = r[i];
    s && (e(i, l3(t, i, s)), n.push(i));
  }
  return n;
}
const u3 = { provider: "", aliases: {}, not_found: {}, ...fb };
function Rd(t, e) {
  for (const n in e) if (n in t && typeof t[n] != typeof e[n]) return !1;
  return !0;
}
function hb(t) {
  if (typeof t != "object" || t === null) return null;
  const e = t;
  if (
    typeof e.prefix != "string" ||
    !t.icons ||
    typeof t.icons != "object" ||
    !Rd(t, u3)
  )
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(Ka) || typeof s.body != "string" || !Rd(s, vp)) return null;
  }
  const r = e.aliases || Object.create(null);
  for (const i in r) {
    const s = r[i],
      o = s.parent;
    if (!i.match(Ka) || typeof o != "string" || (!n[o] && !r[o]) || !Rd(s, vp))
      return null;
  }
  return e;
}
const Tv = Object.create(null);
function c3(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: Object.create(null),
    missing: new Set(),
  };
}
function Os(t, e) {
  const n = Tv[t] || (Tv[t] = Object.create(null));
  return n[e] || (n[e] = c3(t, e));
}
function fg(t, e) {
  return hb(e)
    ? db(e, (n, r) => {
        r ? (t.icons[n] = r) : t.missing.add(n);
      })
    : [];
}
function f3(t, e, n) {
  try {
    if (typeof n.body == "string") return (t.icons[e] = { ...n }), !0;
  } catch {}
  return !1;
}
let jl = !1;
function pb(t) {
  return typeof t == "boolean" && (jl = t), jl;
}
function d3(t) {
  const e = typeof t == "string" ? Af(t, !0, jl) : t;
  if (e) {
    const n = Os(e.provider, e.prefix),
      r = e.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function h3(t, e) {
  const n = Af(t, !0, jl);
  if (!n) return !1;
  const r = Os(n.provider, n.prefix);
  return f3(r, n.name, e);
}
function p3(t, e) {
  if (typeof t != "object") return !1;
  if ((typeof e != "string" && (e = t.provider || ""), jl && !e && !t.prefix)) {
    let i = !1;
    return (
      hb(t) &&
        ((t.prefix = ""),
        db(t, (s, o) => {
          o && h3(s, o) && (i = !0);
        })),
      i
    );
  }
  const n = t.prefix;
  if (!ec({ provider: e, prefix: n, name: "a" })) return !1;
  const r = Os(e, n);
  return !!fg(r, t);
}
const mb = Object.freeze({ width: null, height: null }),
  gb = Object.freeze({ ...mb, ...Kc }),
  m3 = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
  g3 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function kv(t, e, n) {
  if (e === 1) return t;
  if (((n = n || 100), typeof t == "number")) return Math.ceil(t * e * n) / n;
  if (typeof t != "string") return t;
  const r = t.split(m3);
  if (r === null || !r.length) return t;
  const i = [];
  let s = r.shift(),
    o = g3.test(s);
  for (;;) {
    if (o) {
      const a = parseFloat(s);
      isNaN(a) ? i.push(s) : i.push(Math.ceil(a * e * n) / n);
    } else i.push(s);
    if (((s = r.shift()), s === void 0)) return i.join("");
    o = !o;
  }
}
const x3 = (t) => t === "unset" || t === "undefined" || t === "none";
function v3(t, e) {
  const n = { ...cg, ...t },
    r = { ...gb, ...e },
    i = { left: n.left, top: n.top, width: n.width, height: n.height };
  let s = n.body;
  [n, r].forEach((x) => {
    const g = [],
      _ = x.hFlip,
      y = x.vFlip;
    let m = x.rotate;
    _
      ? y
        ? (m += 2)
        : (g.push(
            "translate(" +
              (i.width + i.left).toString() +
              " " +
              (0 - i.top).toString() +
              ")"
          ),
          g.push("scale(-1 1)"),
          (i.top = i.left = 0))
      : y &&
        (g.push(
          "translate(" +
            (0 - i.left).toString() +
            " " +
            (i.height + i.top).toString() +
            ")"
        ),
        g.push("scale(1 -1)"),
        (i.top = i.left = 0));
    let v;
    switch ((m < 0 && (m -= Math.floor(m / 4) * 4), (m = m % 4), m)) {
      case 1:
        (v = i.height / 2 + i.top),
          g.unshift("rotate(90 " + v.toString() + " " + v.toString() + ")");
        break;
      case 2:
        g.unshift(
          "rotate(180 " +
            (i.width / 2 + i.left).toString() +
            " " +
            (i.height / 2 + i.top).toString() +
            ")"
        );
        break;
      case 3:
        (v = i.width / 2 + i.left),
          g.unshift("rotate(-90 " + v.toString() + " " + v.toString() + ")");
        break;
    }
    m % 2 === 1 &&
      (i.left !== i.top && ((v = i.left), (i.left = i.top), (i.top = v)),
      i.width !== i.height &&
        ((v = i.width), (i.width = i.height), (i.height = v))),
      g.length && (s = '<g transform="' + g.join(" ") + '">' + s + "</g>");
  });
  const o = r.width,
    a = r.height,
    l = i.width,
    u = i.height;
  let c, d;
  o === null
    ? ((d = a === null ? "1em" : a === "auto" ? u : a), (c = kv(d, l / u)))
    : ((c = o === "auto" ? l : o),
      (d = a === null ? kv(c, u / l) : a === "auto" ? u : a));
  const h = {},
    p = (x, g) => {
      x3(g) || (h[x] = g.toString());
    };
  return (
    p("width", c),
    p("height", d),
    (h.viewBox =
      i.left.toString() +
      " " +
      i.top.toString() +
      " " +
      l.toString() +
      " " +
      u.toString()),
    { attributes: h, body: s }
  );
}
const y3 = /\sid="(\S+)"/g,
  w3 =
    "IconifyId" +
    Date.now().toString(16) +
    ((Math.random() * 16777216) | 0).toString(16);
let _3 = 0;
function S3(t, e = w3) {
  const n = [];
  let r;
  for (; (r = y3.exec(t)); ) n.push(r[1]);
  if (!n.length) return t;
  const i = "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);
  return (
    n.forEach((s) => {
      const o = typeof e == "function" ? e(s) : e + (_3++).toString(),
        a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      t = t.replace(
        new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
        "$1" + o + i + "$3"
      );
    }),
    (t = t.replace(new RegExp(i, "g"), "")),
    t
  );
}
const yp = Object.create(null);
function b3(t, e) {
  yp[t] = e;
}
function wp(t) {
  return yp[t] || yp[""];
}
function dg(t) {
  let e;
  if (typeof t.resources == "string") e = [t.resources];
  else if (((e = t.resources), !(e instanceof Array) || !e.length)) return null;
  return {
    resources: e,
    path: t.path || "/",
    maxURL: t.maxURL || 500,
    rotate: t.rotate || 750,
    timeout: t.timeout || 5e3,
    random: t.random === !0,
    index: t.index || 0,
    dataAfterTimeout: t.dataAfterTimeout !== !1,
  };
}
const hg = Object.create(null),
  ma = ["https://api.simplesvg.com", "https://api.unisvg.com"],
  tc = [];
for (; ma.length > 0; )
  ma.length === 1 || Math.random() > 0.5
    ? tc.push(ma.shift())
    : tc.push(ma.pop());
hg[""] = dg({ resources: ["https://api.iconify.design"].concat(tc) });
function T3(t, e) {
  const n = dg(e);
  return n === null ? !1 : ((hg[t] = n), !0);
}
function pg(t) {
  return hg[t];
}
const k3 = () => {
  let t;
  try {
    if (((t = fetch), typeof t == "function")) return t;
  } catch {}
};
let Pv = k3();
function P3(t, e) {
  const n = pg(t);
  if (!n) return 0;
  let r;
  if (!n.maxURL) r = 0;
  else {
    let i = 0;
    n.resources.forEach((o) => {
      i = Math.max(i, o.length);
    });
    const s = e + ".json?icons=";
    r = n.maxURL - i - n.path.length - s.length;
  }
  return r;
}
function E3(t) {
  return t === 404;
}
const C3 = (t, e, n) => {
  const r = [],
    i = P3(t, e),
    s = "icons";
  let o = { type: s, provider: t, prefix: e, icons: [] },
    a = 0;
  return (
    n.forEach((l, u) => {
      (a += l.length + 1),
        a >= i &&
          u > 0 &&
          (r.push(o),
          (o = { type: s, provider: t, prefix: e, icons: [] }),
          (a = l.length)),
        o.icons.push(l);
    }),
    r.push(o),
    r
  );
};
function j3(t) {
  if (typeof t == "string") {
    const e = pg(t);
    if (e) return e.path;
  }
  return "/";
}
const A3 = (t, e, n) => {
    if (!Pv) {
      n("abort", 424);
      return;
    }
    let r = j3(e.provider);
    switch (e.type) {
      case "icons": {
        const s = e.prefix,
          a = e.icons.join(","),
          l = new URLSearchParams({ icons: a });
        r += s + ".json?" + l.toString();
        break;
      }
      case "custom": {
        const s = e.uri;
        r += s.slice(0, 1) === "/" ? s.slice(1) : s;
        break;
      }
      default:
        n("abort", 400);
        return;
    }
    let i = 503;
    Pv(t + r)
      .then((s) => {
        const o = s.status;
        if (o !== 200) {
          setTimeout(() => {
            n(E3(o) ? "abort" : "next", o);
          });
          return;
        }
        return (i = 501), s.json();
      })
      .then((s) => {
        if (typeof s != "object" || s === null) {
          setTimeout(() => {
            s === 404 ? n("abort", s) : n("next", i);
          });
          return;
        }
        setTimeout(() => {
          n("success", s);
        });
      })
      .catch(() => {
        n("next", i);
      });
  },
  N3 = { prepare: C3, send: A3 };
function M3(t) {
  const e = { loaded: [], missing: [], pending: [] },
    n = Object.create(null);
  t.sort((i, s) =>
    i.provider !== s.provider
      ? i.provider.localeCompare(s.provider)
      : i.prefix !== s.prefix
      ? i.prefix.localeCompare(s.prefix)
      : i.name.localeCompare(s.name)
  );
  let r = { provider: "", prefix: "", name: "" };
  return (
    t.forEach((i) => {
      if (
        r.name === i.name &&
        r.prefix === i.prefix &&
        r.provider === i.provider
      )
        return;
      r = i;
      const s = i.provider,
        o = i.prefix,
        a = i.name,
        l = n[s] || (n[s] = Object.create(null)),
        u = l[o] || (l[o] = Os(s, o));
      let c;
      a in u.icons
        ? (c = e.loaded)
        : o === "" || u.missing.has(a)
        ? (c = e.missing)
        : (c = e.pending);
      const d = { provider: s, prefix: o, name: a };
      c.push(d);
    }),
    e
  );
}
function xb(t, e) {
  t.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function D3(t) {
  t.pendingCallbacksFlag ||
    ((t.pendingCallbacksFlag = !0),
    setTimeout(() => {
      t.pendingCallbacksFlag = !1;
      const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
      if (!e.length) return;
      let n = !1;
      const r = t.provider,
        i = t.prefix;
      e.forEach((s) => {
        const o = s.icons,
          a = o.pending.length;
        (o.pending = o.pending.filter((l) => {
          if (l.prefix !== i) return !0;
          const u = l.name;
          if (t.icons[u]) o.loaded.push({ provider: r, prefix: i, name: u });
          else if (t.missing.has(u))
            o.missing.push({ provider: r, prefix: i, name: u });
          else return (n = !0), !0;
          return !1;
        })),
          o.pending.length !== a &&
            (n || xb([t], s.id),
            s.callback(
              o.loaded.slice(0),
              o.missing.slice(0),
              o.pending.slice(0),
              s.abort
            ));
      });
    }));
}
let R3 = 0;
function L3(t, e, n) {
  const r = R3++,
    i = xb.bind(null, n, r);
  if (!e.pending.length) return i;
  const s = { id: r, icons: e, callback: t, abort: i };
  return (
    n.forEach((o) => {
      (o.loaderCallbacks || (o.loaderCallbacks = [])).push(s);
    }),
    i
  );
}
function O3(t, e = !0, n = !1) {
  const r = [];
  return (
    t.forEach((i) => {
      const s = typeof i == "string" ? Af(i, e, n) : i;
      s && r.push(s);
    }),
    r
  );
}
var I3 = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1,
};
function F3(t, e, n, r) {
  const i = t.resources.length,
    s = t.random ? Math.floor(Math.random() * i) : t.index;
  let o;
  if (t.random) {
    let k = t.resources.slice(0);
    for (o = []; k.length > 1; ) {
      const b = Math.floor(Math.random() * k.length);
      o.push(k[b]), (k = k.slice(0, b).concat(k.slice(b + 1)));
    }
    o = o.concat(k);
  } else o = t.resources.slice(s).concat(t.resources.slice(0, s));
  const a = Date.now();
  let l = "pending",
    u = 0,
    c,
    d = null,
    h = [],
    p = [];
  typeof r == "function" && p.push(r);
  function x() {
    d && (clearTimeout(d), (d = null));
  }
  function g() {
    l === "pending" && (l = "aborted"),
      x(),
      h.forEach((k) => {
        k.status === "pending" && (k.status = "aborted");
      }),
      (h = []);
  }
  function _(k, b) {
    b && (p = []), typeof k == "function" && p.push(k);
  }
  function y() {
    return {
      startTime: a,
      payload: e,
      status: l,
      queriesSent: u,
      queriesPending: h.length,
      subscribe: _,
      abort: g,
    };
  }
  function m() {
    (l = "failed"),
      p.forEach((k) => {
        k(void 0, c);
      });
  }
  function v() {
    h.forEach((k) => {
      k.status === "pending" && (k.status = "aborted");
    }),
      (h = []);
  }
  function w(k, b, P) {
    const C = b !== "success";
    switch (((h = h.filter((j) => j !== k)), l)) {
      case "pending":
        break;
      case "failed":
        if (C || !t.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (b === "abort") {
      (c = P), m();
      return;
    }
    if (C) {
      (c = P), h.length || (o.length ? S() : m());
      return;
    }
    if ((x(), v(), !t.random)) {
      const j = t.resources.indexOf(k.resource);
      j !== -1 && j !== t.index && (t.index = j);
    }
    (l = "completed"),
      p.forEach((j) => {
        j(P);
      });
  }
  function S() {
    if (l !== "pending") return;
    x();
    const k = o.shift();
    if (k === void 0) {
      if (h.length) {
        d = setTimeout(() => {
          x(), l === "pending" && (v(), m());
        }, t.timeout);
        return;
      }
      m();
      return;
    }
    const b = {
      status: "pending",
      resource: k,
      callback: (P, C) => {
        w(b, P, C);
      },
    };
    h.push(b), u++, (d = setTimeout(S, t.rotate)), n(k, e, b.callback);
  }
  return setTimeout(S), y;
}
function vb(t) {
  const e = { ...I3, ...t };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function i(a, l, u) {
    const c = F3(e, a, l, (d, h) => {
      r(), u && u(d, h);
    });
    return n.push(c), c;
  }
  function s(a) {
    return n.find((l) => a(l)) || null;
  }
  return {
    query: i,
    find: s,
    setIndex: (a) => {
      e.index = a;
    },
    getIndex: () => e.index,
    cleanup: r,
  };
}
function Ev() {}
const Ld = Object.create(null);
function V3(t) {
  if (!Ld[t]) {
    const e = pg(t);
    if (!e) return;
    const n = vb(e),
      r = { config: e, redundancy: n };
    Ld[t] = r;
  }
  return Ld[t];
}
function z3(t, e, n) {
  let r, i;
  if (typeof t == "string") {
    const s = wp(t);
    if (!s) return n(void 0, 424), Ev;
    i = s.send;
    const o = V3(t);
    o && (r = o.redundancy);
  } else {
    const s = dg(t);
    if (s) {
      r = vb(s);
      const o = t.resources ? t.resources[0] : "",
        a = wp(o);
      a && (i = a.send);
    }
  }
  return !r || !i ? (n(void 0, 424), Ev) : r.query(e, i, n)().abort;
}
const Cv = "iconify2",
  Al = "iconify",
  yb = Al + "-count",
  jv = Al + "-version",
  wb = 36e5,
  B3 = 168;
function _p(t, e) {
  try {
    return t.getItem(e);
  } catch {}
}
function mg(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {}
}
function Av(t, e) {
  try {
    t.removeItem(e);
  } catch {}
}
function Sp(t, e) {
  return mg(t, yb, e.toString());
}
function bp(t) {
  return parseInt(_p(t, yb)) || 0;
}
const Nf = { local: !0, session: !0 },
  _b = { local: new Set(), session: new Set() };
let gg = !1;
function U3(t) {
  gg = t;
}
let Cu = typeof window > "u" ? {} : window;
function Sb(t) {
  const e = t + "Storage";
  try {
    if (Cu && Cu[e] && typeof Cu[e].length == "number") return Cu[e];
  } catch {}
  Nf[t] = !1;
}
function bb(t, e) {
  const n = Sb(t);
  if (!n) return;
  const r = _p(n, jv);
  if (r !== Cv) {
    if (r) {
      const a = bp(n);
      for (let l = 0; l < a; l++) Av(n, Al + l.toString());
    }
    mg(n, jv, Cv), Sp(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / wb) - B3,
    s = (a) => {
      const l = Al + a.toString(),
        u = _p(n, l);
      if (typeof u == "string") {
        try {
          const c = JSON.parse(u);
          if (
            typeof c == "object" &&
            typeof c.cached == "number" &&
            c.cached > i &&
            typeof c.provider == "string" &&
            typeof c.data == "object" &&
            typeof c.data.prefix == "string" &&
            e(c, a)
          )
            return !0;
        } catch {}
        Av(n, l);
      }
    };
  let o = bp(n);
  for (let a = o - 1; a >= 0; a--)
    s(a) || (a === o - 1 ? (o--, Sp(n, o)) : _b[t].add(a));
}
function Tb() {
  if (!gg) {
    U3(!0);
    for (const t in Nf)
      bb(t, (e) => {
        const n = e.data,
          r = e.provider,
          i = n.prefix,
          s = Os(r, i);
        if (!fg(s, n).length) return !1;
        const o = n.lastModified || -1;
        return (
          (s.lastModifiedCached = s.lastModifiedCached
            ? Math.min(s.lastModifiedCached, o)
            : o),
          !0
        );
      });
  }
}
function $3(t, e) {
  const n = t.lastModifiedCached;
  if (n && n >= e) return n === e;
  if (((t.lastModifiedCached = e), n))
    for (const r in Nf)
      bb(r, (i) => {
        const s = i.data;
        return (
          i.provider !== t.provider ||
          s.prefix !== t.prefix ||
          s.lastModified === e
        );
      });
  return !0;
}
function H3(t, e) {
  gg || Tb();
  function n(r) {
    let i;
    if (!Nf[r] || !(i = Sb(r))) return;
    const s = _b[r];
    let o;
    if (s.size) s.delete((o = Array.from(s).shift()));
    else if (((o = bp(i)), !Sp(i, o + 1))) return;
    const a = {
      cached: Math.floor(Date.now() / wb),
      provider: t.provider,
      data: e,
    };
    return mg(i, Al + o.toString(), JSON.stringify(a));
  }
  (e.lastModified && !$3(t, e.lastModified)) ||
    (Object.keys(e.icons).length &&
      (e.not_found && ((e = Object.assign({}, e)), delete e.not_found),
      n("local") || n("session")));
}
function Nv() {}
function W3(t) {
  t.iconsLoaderFlag ||
    ((t.iconsLoaderFlag = !0),
    setTimeout(() => {
      (t.iconsLoaderFlag = !1), D3(t);
    }));
}
function X3(t, e) {
  t.iconsToLoad
    ? (t.iconsToLoad = t.iconsToLoad.concat(e).sort())
    : (t.iconsToLoad = e),
    t.iconsQueueFlag ||
      ((t.iconsQueueFlag = !0),
      setTimeout(() => {
        t.iconsQueueFlag = !1;
        const { provider: n, prefix: r } = t,
          i = t.iconsToLoad;
        delete t.iconsToLoad;
        let s;
        if (!i || !(s = wp(n))) return;
        s.prepare(n, r, i).forEach((a) => {
          z3(n, a, (l) => {
            if (typeof l != "object")
              a.icons.forEach((u) => {
                t.missing.add(u);
              });
            else
              try {
                const u = fg(t, l);
                if (!u.length) return;
                const c = t.pendingIcons;
                c &&
                  u.forEach((d) => {
                    c.delete(d);
                  }),
                  H3(t, l);
              } catch (u) {
                console.error(u);
              }
            W3(t);
          });
        });
      }));
}
const Y3 = (t, e) => {
  const n = O3(t, !0, pb()),
    r = M3(n);
  if (!r.pending.length) {
    let l = !0;
    return (
      e &&
        setTimeout(() => {
          l && e(r.loaded, r.missing, r.pending, Nv);
        }),
      () => {
        l = !1;
      }
    );
  }
  const i = Object.create(null),
    s = [];
  let o, a;
  return (
    r.pending.forEach((l) => {
      const { provider: u, prefix: c } = l;
      if (c === a && u === o) return;
      (o = u), (a = c), s.push(Os(u, c));
      const d = i[u] || (i[u] = Object.create(null));
      d[c] || (d[c] = []);
    }),
    r.pending.forEach((l) => {
      const { provider: u, prefix: c, name: d } = l,
        h = Os(u, c),
        p = h.pendingIcons || (h.pendingIcons = new Set());
      p.has(d) || (p.add(d), i[u][c].push(d));
    }),
    s.forEach((l) => {
      const { provider: u, prefix: c } = l;
      i[u][c].length && X3(l, i[u][c]);
    }),
    e ? L3(e, r, s) : Nv
  );
};
function G3(t, e) {
  const n = { ...t };
  for (const r in e) {
    const i = e[r],
      s = typeof i;
    r in mb
      ? (i === null || (i && (s === "string" || s === "number"))) && (n[r] = i)
      : s === typeof n[r] && (n[r] = r === "rotate" ? i % 4 : i);
  }
  return n;
}
const Q3 = /[\s,]+/;
function K3(t, e) {
  e.split(Q3).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function q3(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; ) i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(t);
    return isNaN(i) ? 0 : r(i);
  } else if (n !== t) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : ((s = s / i), s % 1 === 0 ? r(s) : 0);
    }
  }
  return e;
}
function Z3(t, e) {
  let n =
    t.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e) n += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function J3(t) {
  return t
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
}
function eM(t) {
  return "data:image/svg+xml," + J3(t);
}
function tM(t) {
  return 'url("' + eM(t) + '")';
}
let qa;
function nM() {
  try {
    qa = window.trustedTypes.createPolicy("iconify", { createHTML: (t) => t });
  } catch {
    qa = null;
  }
}
function rM(t) {
  return qa === void 0 && nM(), qa ? qa.createHTML(t) : t;
}
const kb = { ...gb, inline: !1 },
  iM = {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img",
  },
  sM = { display: "inline-block" },
  Tp = { backgroundColor: "currentColor" },
  Pb = { backgroundColor: "transparent" },
  Mv = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
  Dv = { WebkitMask: Tp, mask: Tp, background: Pb };
for (const t in Dv) {
  const e = Dv[t];
  for (const n in Mv) e[t + n] = Mv[n];
}
const oM = { ...kb, inline: !0 };
function Rv(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const aM = (t, e, n, r) => {
  const i = n ? oM : kb,
    s = G3(i, e),
    o = e.mode || "svg",
    a = {},
    l = e.style || {},
    u = { ...(o === "svg" ? iM : {}), ref: r };
  for (let y in e) {
    const m = e[y];
    if (m !== void 0)
      switch (y) {
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "_ref":
        case "_inline":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          s[y] = m === !0 || m === "true" || m === 1;
          break;
        case "flip":
          typeof m == "string" && K3(s, m);
          break;
        case "color":
          a.color = m;
          break;
        case "rotate":
          typeof m == "string"
            ? (s[y] = q3(m))
            : typeof m == "number" && (s[y] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete u["aria-hidden"];
          break;
        default:
          i[y] === void 0 && (u[y] = m);
      }
  }
  const c = v3(t, s),
    d = c.attributes;
  if ((s.inline && (a.verticalAlign = "-0.125em"), o === "svg")) {
    (u.style = { ...a, ...l }), Object.assign(u, d);
    let y = 0,
      m = e.id;
    return (
      typeof m == "string" && (m = m.replace(/-/g, "_")),
      (u.dangerouslySetInnerHTML = {
        __html: rM(S3(c.body, m ? () => m + "ID" + y++ : "iconifyReact")),
      }),
      Hn.createElement("svg", u)
    );
  }
  const { body: h, width: p, height: x } = t,
    g = o === "mask" || (o === "bg" ? !1 : h.indexOf("currentColor") !== -1),
    _ = Z3(h, { ...d, width: p + "", height: x + "" });
  return (
    (u.style = {
      ...a,
      "--svg": tM(_),
      width: Rv(d.width),
      height: Rv(d.height),
      ...sM,
      ...(g ? Tp : Pb),
      ...l,
    }),
    Hn.createElement("span", u)
  );
};
pb(!0);
b3("", N3);
if (typeof document < "u" && typeof window < "u") {
  Tb();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload,
      n = "Invalid IconifyPreload syntax.";
    typeof e == "object" &&
      e !== null &&
      (e instanceof Array ? e : [e]).forEach((r) => {
        try {
          (typeof r != "object" ||
            r === null ||
            r instanceof Array ||
            typeof r.icons != "object" ||
            typeof r.prefix != "string" ||
            !p3(r)) &&
            console.error(n);
        } catch {
          console.error(n);
        }
      });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = e[n];
          if (typeof i != "object" || !i || i.resources === void 0) continue;
          T3(n, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
class Eb extends Hn.Component {
  constructor(e) {
    super(e), (this.state = { icon: null });
  }
  _abortLoading() {
    this._loading && (this._loading.abort(), (this._loading = null));
  }
  _setData(e) {
    this.state.icon !== e && this.setState({ icon: e });
  }
  _checkIcon(e) {
    const n = this.state,
      r = this.props.icon;
    if (typeof r == "object" && r !== null && typeof r.body == "string") {
      (this._icon = ""),
        this._abortLoading(),
        (e || n.icon === null) && this._setData({ data: r });
      return;
    }
    let i;
    if (typeof r != "string" || (i = Af(r, !1, !0)) === null) {
      this._abortLoading(), this._setData(null);
      return;
    }
    const s = d3(i);
    if (!s) {
      (!this._loading || this._loading.name !== r) &&
        (this._abortLoading(),
        (this._icon = ""),
        this._setData(null),
        s !== null &&
          (this._loading = {
            name: r,
            abort: Y3([i], this._checkIcon.bind(this, !1)),
          }));
      return;
    }
    if (this._icon !== r || n.icon === null) {
      this._abortLoading(), (this._icon = r);
      const o = ["iconify"];
      i.prefix !== "" && o.push("iconify--" + i.prefix),
        i.provider !== "" && o.push("iconify--" + i.provider),
        this._setData({ data: s, classes: o }),
        this.props.onLoad && this.props.onLoad(r);
    }
  }
  componentDidMount() {
    this._checkIcon(!1);
  }
  componentDidUpdate(e) {
    e.icon !== this.props.icon && this._checkIcon(!0);
  }
  componentWillUnmount() {
    this._abortLoading();
  }
  render() {
    const e = this.props,
      n = this.state.icon;
    if (n === null)
      return e.children ? e.children : Hn.createElement("span", {});
    let r = e;
    return (
      n.classes &&
        (r = {
          ...e,
          className:
            (typeof e.className == "string" ? e.className + " " : "") +
            n.classes.join(" "),
        }),
      aM({ ...cg, ...n.data }, r, e._inline, e._ref)
    );
  }
}
const ju = Hn.forwardRef(function (e, n) {
  const r = { ...e, _ref: n, _inline: !1 };
  return Hn.createElement(Eb, r);
});
Hn.forwardRef(function (e, n) {
  const r = { ...e, _ref: n, _inline: !0 };
  return Hn.createElement(Eb, r);
});
const Xi = () => {
  const [t, e] = Xt({ triggerOnce: !1, threshold: 0.2 }),
    [n, r] = Xt({ triggerOnce: !1, threshold: 0.2 }),
    [i, s] = E.useState(!1);
  return (
    rw(),
    E.useEffect(() => {
      const o = () => {
        window.scrollY > 100 ? s(!0) : s(!1);
      };
      return (
        window.addEventListener("scroll", o),
        () => window.removeEventListener("scroll", o)
      );
    }, []),
    f.jsx("nav", {
      className: `${
        V.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        i ? "bg-primary" : "bg-transparent"
      }`,
      children: f.jsxs("div", {
        className:
          "w-full flex justify-between items-center shadow-sm rounded-3xl bg-white md:max-w-[80vw] mx-auto p-4 border-2",
        children: [
          f.jsx(aw, {
            to: "/",
            className: "",
            onClick: () => {
              window.scrollTo(0, 0);
            },
            children: f.jsx("img", {
              src: rP,
              alt: "logo",
              className: "max-w-[100px] md:max-w-[150px] object-contain",
            }),
          }),
          f.jsxs("ul", {
            className: "navbar list-none hidden lg:flex flex-row gap-10",
            children: [
              f.jsxs("li", {
                className:
                  " hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative",
                children: [
                  f.jsx(Se, {
                    to: "/",
                    exact: !0,
                    activeClassName: "active",
                    children: "Home",
                  }),
                  window.location.pathname === "/" &&
                    f.jsx("span", { className: "dot absolute bottom-[-10px]" }),
                ],
              }),
              f.jsxs("li", {
                className:
                  "hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown",
                children: [
                  f.jsxs(Se, {
                    to: "/storage",
                    className: "flex flex-row justify-between",
                    children: [
                      "Products",
                      " ",
                      f.jsx("span", {
                        className: "mx-auto",
                        children: f.jsx(ju, {
                          icon: "iconamoon:arrow-down-2-thin",
                          width: "26",
                          className: "flex",
                        }),
                      }),
                    ],
                  }),
                  window.location.pathname === "/storage" &&
                    f.jsx("span", { className: "dot absolute bottom-[-10px]" }),
                  f.jsx("div", {
                    className: "dropdown-content absolute ",
                    ref: t,
                    children:
                      e &&
                      f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(Se, {
                            to: "/storage-pricing",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0 },
                              className:
                                "p-4 bg-[#fff] border-t-2 border-r-2 border-l-2 rounded-tl-lg rounded-tr-lg text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", { children: "Storage" }),
                            }),
                          }),
                          f.jsx(Se, {
                            to: "/verification",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0.2 },
                              className:
                                "p-4 bg-[#fff] border-r-2 border-l-2 text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", {
                                children: "Verification",
                              }),
                            }),
                          }),
                          f.jsx(Se, {
                            to: "/esign",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0.4 },
                              className:
                                "p-4 bg-[#fff] border-b-2 border-r-2 border-l-2 rounded-bl-lg rounded-br-lg text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", { children: "Esign" }),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
              f.jsxs("li", {
                className:
                  " hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative",
                children: [
                  f.jsx(Se, { to: "/philosophy", children: "Philosophy" }),
                  window.location.pathname === "/philosophy" &&
                    f.jsx("span", { className: "dot absolute bottom-[-10px]" }),
                ],
              }),
              f.jsxs("li", {
                className:
                  " hover:text-[#5379FE] text-[18px] font-medium cursor-pointer relative products-dropdown",
                children: [
                  f.jsxs(Se, {
                    to: "/subscription",
                    className: "flex flex-row justify-between",
                    children: [
                      "Subscription",
                      " ",
                      f.jsx("span", {
                        className: "mx-auto",
                        children: f.jsx(ju, {
                          icon: "iconamoon:arrow-down-2-thin",
                          width: "26",
                          className: "flex",
                        }),
                      }),
                    ],
                  }),
                  window.location.pathname === "/subscription" &&
                    f.jsx("span", { className: "dot absolute bottom-[-10px]" }),
                  f.jsx("div", {
                    className: "dropdown-content absolute ",
                    ref: n,
                    children:
                      r &&
                      f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(Se, {
                            to: "/storage-pricing",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0 },
                              className:
                                "p-4 bg-[#fff] border-t-2 border-r-2 border-l-2 rounded-tl-lg rounded-tr-lg text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", { children: "Storage" }),
                            }),
                          }),
                          f.jsx(Se, {
                            to: "/verification",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0.2 },
                              className:
                                "p-4 bg-[#fff] border-r-2 border-l-2 text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", {
                                children: "Verification",
                              }),
                            }),
                          }),
                          f.jsx(Se, {
                            to: "/esign",
                            children: f.jsx(D.div, {
                              initial: { opacity: 0, scale: 0 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { duration: 0.2, delay: 0.4 },
                              className:
                                "p-4 bg-[#fff] border-b-2 border-r-2 border-l-2 rounded-bl-lg rounded-br-lg text-black hover:bg-blue-500 hover:text-white",
                              children: f.jsx("span", { children: "Esign" }),
                            }),
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: " lg:hidden flex flex-1 justify-end items-center",
            children: f.jsx("nav", {
              role: "navigation",
              children: f.jsxs("div", {
                id: "menuToggle",
                children: [
                  f.jsx("input", { type: "checkbox" }),
                  f.jsx("span", {}),
                  f.jsx("span", {}),
                  f.jsx("span", {}),
                  f.jsxs("ul", {
                    id: "menu",
                    children: [
                      f.jsx(Se, {
                        to: "/",
                        exact: !0,
                        activeClassName: "active",
                        children: f.jsx("li", { children: "Home" }),
                      }),
                      f.jsx(Se, {
                        to: "/storage",
                        children: f.jsxs("li", {
                          className: "mobile-dropdown",
                          children: [
                            "Storage",
                            f.jsx(ju, {
                              icon: "iconamoon:arrow-down-2-thin",
                              width: "26",
                              className: "inline-block",
                            }),
                            f.jsxs("ul", {
                              className:
                                "mobile-dropdown-content p-4 rounded-lg flex flex-col gap-4",
                              children: [
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/storage-pricing",
                                    href: "#",
                                    children: "Storage",
                                  }),
                                }),
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/verification",
                                    children: "Verification",
                                  }),
                                }),
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/esign",
                                    children: "Esign",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      f.jsx(Se, {
                        to: "/philosophy",
                        children: f.jsx("li", { children: "Philosphy" }),
                      }),
                      f.jsx(Se, {
                        to: "/subscription",
                        children: f.jsxs("li", {
                          className: "mobile-dropdown",
                          children: [
                            "Subscription",
                            f.jsx(ju, {
                              icon: "iconamoon:arrow-down-2-thin",
                              width: "26",
                              className: "inline-block",
                            }),
                            f.jsxs("ul", {
                              className:
                                "mobile-dropdown-content p-4 rounded-lg flex flex-col gap-4",
                              children: [
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/storage-pricing",
                                    children: "Storage",
                                  }),
                                }),
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/pricing",
                                    children: "Pricing",
                                  }),
                                }),
                                f.jsx("li", {
                                  className: "p-2 text-white",
                                  children: f.jsx(Se, {
                                    to: "/esign",
                                    children: "Esign",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          f.jsx(D.div, {
            className: "text-black hidden  lg:inline-block",
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
            transition: { type: "spring", stiffness: 400, damping: 17 },
            children: f.jsx("button", {
              className:
                " min-w-[140px] font-poppins font-medium cursor-pointer text-[16px] rounded-xl border-2 p-2 text-white bg-[#5379FE] hover:w-[120px] hover:scale-95",
              children: "Login",
            }),
          }),
        ],
      }),
    })
  );
};
L.registerPlugin(X);
function lM() {
  return (
    E.useEffect(() => {
      L.to(".box1", {
        scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box2", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: -500,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box3", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box4", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger background relative w-full max-h-[100vh] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]",
          src: $i,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box3 absolute top-[80vh] right-[0px] md:hidden  xl:inline-block  xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]",
          src: Bs,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` pt-[300px] mx-auto ${V.paddingX}`,
          children: f.jsx("div", {
            children: f.jsx("h1", {
              className: `${V.heroHead2Text}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "<",
                  "With ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "MIYAGI",
                  }),
                  " your",
                  f.jsx("br", {}),
                  "documents are safe",
                  ">",
                ],
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `verify-button-display mt-[100px]  max-w-6xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: "verify-button mx-auto flex flex-row gap-[1.5rem]",
            children: [
              f.jsx(D.button, {
                className:
                  " min-w-[160px] min-h-[50px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl  border-2 p-2 text-white bg-[#5379FE] ",
                whileHover: { scale: 1.2 },
                whileTap: { scale: 0.9 },
                transition: { type: "spring", stiffness: 400, damping: 17 },
                children: "Verify Now",
              }),
              f.jsx(D.button, {
                className:
                  " min-w-[160px] min-h-[50px] font-poppins font-medium cursor-pointer text-[16px] rounded-3xl border-2 p-2 text-black bg-white ",
                whileHover: { scale: 1.2 },
                whileTap: { scale: 0.9 },
                transition: { type: "spring", stiffness: 400, damping: 17 },
                children: "Decentralize Now",
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function uM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {
      L.to(".box14", {
        scrollTrigger: {
          trigger: ".trigger4",
          start: "top top",
          endTrigger: "bottom bottom",
          scrub: 1,
        },
        x: -500,
        y: 200,
        z: 200,
        ease: G,
        duration: 3,
      }),
        L.to(".box15", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: -800,
          y: -200,
          z: 200,
          ease: G,
          duration: 3,
        }),
        L.to(".box16", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 3,
        }),
        L.to(".box17", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 3,
        });
    }, []),
    f.jsxs("section", {
      className: "trigger4 w-full relative mt-[6rem] md:mt-[0rem] mx-auto  ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box14 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box15 absolute bottom-[-19vh] left-[20vw] hidden xl:inline-block rotate-[-40.33] ",
          src: Bs,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box16 absolute top-[25vh] right-[0px] hidden xl:inline-block rotate-[-40.33]",
          src: Er,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box17 absolute bottom-[0vh] right-[0vw] xl:bottom-[-25vh] xl:right-[10vw] rotate-[-40.33]",
          src: $i,
          alt: "box",
        }),
        e &&
          f.jsx(D.div, {
            className: `pt-0 md:pt-[30vh] pb-[30vh]  w-7xl mx-auto ${V.paddingX} items-start lg:w-[80vw]`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            children: f.jsx("h1", {
              className: `${V.heroHead1Text} quote  text-white uppercase text-center`,
              children: f.jsx("span", {
                className: "text-black  ",
                children:
                  "With the knowledge that your digital belongings will be preserved forever and are easily verifiable on the chain, you can enjoy a stress-free seamless interaction with our timeless technology.",
              }),
            }),
          }),
      ],
    })
  );
}
function cM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return f.jsxs("section", {
    className:
      "{`w-full relative min-h-[60vh] md:min-h-[60vh] mx-auto`} mb-[4rem] md:mb-[10rem] overflow-hidden ",
    children: [
      f.jsx(D.img, {
        className:
          "box absolute top-[-10vh] left-[0px] xl:top-[0vh] xl:left-[0px] rotate-[-40.33] ",
        animate: { y: [0, 24, 0] },
        transition: { duration: 1.5, repeat: 1 / 0, repeatType: "loop" },
        src: at,
        alt: "box",
      }),
      f.jsx(D.img, {
        className:
          "box absolute bottom-[0vh] right-[-100px] rotate-[-40.33]  hidden md:inline-block",
        animate: { y: [0, 24, 0] },
        transition: { duration: 2, repeat: 1 / 0, repeatType: "loop" },
        src: $i,
        alt: "box",
      }),
      f.jsx("div", {
        className: `md:mt-[200px] max-w-3xl xl:max-w-4xl mx-auto ${V.paddingX}`,
        ref: t,
        children:
          e &&
          f.jsxs(D.div, {
            className: "p-2  text-center flex flex-col justify-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            children: [
              f.jsx("h1", {
                className:
                  "text-slate-950 text-[1.5rem] xl:text-[2.3rem] font-normal leading-[34px] uppercase mb-8",
                children: "Decentralise. Simplify. Digitilise.",
              }),
              f.jsx("p", {
                className:
                  "text-zinc-500 text-[1rem] xl:text-[1.2rem] font-normal leading-[30px] text-center",
                children:
                  "We’re a diverse and passionate team that takes ownership of your problems and empowers you to execute your plans. We stay light on our feet and truly enjoy delivering great work.",
              }),
            ],
          }),
      }),
      f.jsx("div", {
        className: `mt-[5rem] xl:mt-[10rem] max-w-7xl mx-auto ${V.paddingX} `,
        children: f.jsxs("div", {
          className:
            "bg-gradient-to-r from-[#E0F5FF] to-[#D4EEFF] p-6 rounded-lg shadow-md max-w-2xl mx-auto my-8 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl",
          children: [
            f.jsx("h2", {
              className:
                "text-2xl font-bold text-center text-[#5379FE] mb-4 animate-pulse",
              children: "Join our Newsletter",
            }),
            f.jsxs("form", {
              className: "flex flex-col sm:flex-row gap-4 justify-between",
              children: [
                f.jsx("input", {
                  className:
                    "flex-1 px-4 py-2 text-[#5379FE] bg-[#ffffff] border border-[#5379FE] rounded-md shadow-sm focus:outline-none focus:border-[#5379FE] focus:ring-1 focus:ring-[#5379FE] transition-colors duration-500",
                  placeholder: "Enter Your Email here...",
                  type: "email",
                }),
                f.jsx("button", {
                  className:
                    "px-6 py-2 bg-[#5379FE] text-white font-semibold rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-100 transition-colors duration-500",
                  children: "Submit",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
L.registerPlugin(X);
function fM() {
  const [t, e] = Xt({ triggerOnce: !1, threshold: 0.2 }),
    [n, r] = E.useState(window.innerWidth > 1024),
    [i, s] = E.useState(1);
  return (
    E.useEffect(() => {
      L.utils.toArray(".desktopContentSection:not(:first-child)");
      const o = L.utils.toArray(".desktopPhoto:not(:first-child)");
      L.set(o, { yPercent: 101 }),
        L.matchMedia().add("(min-width: 600px)", () => {
          console.log("desktop"),
            L.to(".desktopContentSection", {
              scrollTrigger: {
                trigger: ".gallery",
                pin: !0,
                start: "top top",
                end: "bottom bottom",
                endTrigger: ".last",
                scrub: 1,
              },
              y: "-350%",
              ease: G,
            });
        });
      const l = () => {
        const c = window.scrollY + window.innerHeight * 3.4,
          d = Math.floor(c / window.innerHeight) - 4;
        s(d);
      };
      window.addEventListener("scroll", l),
        L.to(".box8", {
          scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
          x: -500,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box9", {
          scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        });
      const u = () => {
        r(window.innerWidth > 1024);
      };
      return (
        window.addEventListener("resize", u),
        () => {
          window.removeEventListener("resize", u),
            window.removeEventListener("scroll", l);
        }
      );
    }, []),
    n
      ? f.jsxs("section", {
          className: "trigger2 w-full relative min-h-[100vh] mx-auto",
          children: [
            f.jsx(D.img, {
              className:
                "box box8 absolute top-[10vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
              src: at,
              alt: "box",
            }),
            f.jsx(D.img, {
              className:
                "box box9 absolute top-[60vh] right-[0px] rotate-[-40.33]",
              src: fw,
              alt: "box",
            }),
            f.jsx("div", {
              className: "mt-[50px] md:mt-[100px]",
              children: f.jsx("h1", {
                className: `${V.heroHeadText}  text-white uppercase text-center`,
                children: f.jsxs("span", {
                  className: "text-black",
                  children: [
                    "What does have to ",
                    "<",
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: "MIYAGI",
                    }),
                    ">",
                    " offer?",
                  ],
                }),
              }),
            }),
            f.jsx("div", {
              className:
                "mt-[50px] md:mt-[100px] xl:mt-[100px] w-full mx-auto xl:pl-[10rem] xl:pr-[10rem] pb-[0rem]",
              children: f.jsxs("div", {
                className: "gallery",
                children: [
                  f.jsx("div", {
                    className: "right",
                    children: f.jsx("div", {
                      className: "desktopPhotos  ",
                      children: f.jsxs("div", {
                        className: "desktopPhoto red",
                        children: [
                          f.jsxs("div", {
                            className: `border-2 mt-4 p-4 leading-6 tracking-wide ${
                              i === 1 ? "active-box" : ""
                            } rounded-[20px]`,
                            children: [
                              f.jsx("h1", {
                                className: "text-[#5379FE] text-[22px] mb-4",
                                children: "Sign Documents",
                              }),
                              f.jsx("p", {
                                className: "text-[#807E87] text-[0.95rem]",
                                children:
                                  "Are you tired of the hassles and uncertainties of traditional document signing methods? Say goodbye to the days of printing, scanning, and mailing documents. Welcome to the future of secure, efficient, and tamper-proof document signing with Blockchain technology!",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: `border-2 mt-8 p-4 leading-6 tracking-wide ${
                              i === 2 ? "active-box" : ""
                            } rounded-[20px]`,
                            children: [
                              f.jsx("h1", {
                                className: "text-[#5379FE] text-[22px] mb-4",
                                children: "Store Data",
                              }),
                              f.jsx("p", {
                                className: "text-[#807E87] text-[0.95rem]",
                                children:
                                  "Discover the pinnacle of data security and trust in decentralized storage, harnessed by Blockchain. Bid adieu to centralized vulnerabilities and reclaim dominion over your prized information.",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: `border-2 mt-8 p-4 leading-6 tracking-wide ${
                              i === 3 ? "active-box" : ""
                            } rounded-[20px]`,
                            children: [
                              f.jsx("h1", {
                                className: "text-[#5379FE] text-[22px] mb-4",
                                children: "Verify Documents",
                              }),
                              f.jsx("p", {
                                className: "text-[#807E87] text-[0.95rem]",
                                children:
                                  "Tired of relying on traditional, easily forgeable verification methods? Enter a new era of unassailable trust and transparency with Blockchain-powered document verification ensure authenticity and trust while bidding farewell to counterfeiting concerns.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  f.jsx("div", {
                    className: "left",
                    children: f.jsxs(D.div, {
                      className: "desktopContent",
                      ref: t,
                      children: [
                        e &&
                          f.jsx(D.div, {
                            className: "desktopContentSection",
                            children:
                              i === 1 &&
                              f.jsx(D.img, {
                                src: cw,
                                alt: "",
                                className: "img img1 rounded-[20px]",
                                initial: { opacity: 0 },
                                animate: { opacity: e ? 1 : 0 },
                                transition: { duration: 1, delay: 0.5 },
                              }),
                          }),
                        e &&
                          f.jsx(D.div, {
                            className: "desktopContentSection",
                            children:
                              i === 2 &&
                              f.jsx(D.img, {
                                src: lw,
                                alt: "",
                                className: "img img2 rounded-[20px]",
                                initial: { opacity: 0 },
                                animate: { opacity: e ? 1 : 0 },
                                transition: { duration: 1, delay: 0.5 },
                              }),
                          }),
                        e &&
                          f.jsx(D.div, {
                            className: "desktopContentSection last",
                            children:
                              i === 3 &&
                              f.jsx(D.img, {
                                src: uw,
                                alt: "",
                                className: "img img3 last rounded-[20px] ",
                                initial: { opacity: 0 },
                                animate: { opacity: e ? 1 : 0 },
                                transition: { duration: 1, delay: 0.5 },
                              }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
L.registerPlugin(X);
function dM() {
  const [t, e] = E.useState(window.innerWidth < 1024);
  return (
    E.useEffect(() => {
      L.to(".box8", {
        scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        z: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box9", {
          scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        });
      const n = () => {
        e(window.innerWidth <= 1024);
      };
      return (
        window.addEventListener("resize", n),
        () => {
          window.removeEventListener("resize", n);
        }
      );
    }, []),
    t
      ? f.jsxs("section", {
          className: "trigger2 w-full relative min-h-[100vh] pb-[5rem] mx-auto",
          children: [
            f.jsx(D.img, {
              className:
                "box box8 absolute top-[10vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
              src: at,
              alt: "box",
            }),
            f.jsx(D.img, {
              className:
                "box box9 absolute top-[60vh] right-[0px] rotate-[-40.33]",
              src: fw,
              alt: "box",
            }),
            f.jsx("div", {
              className: "mt-[50px] md:mt-[100px]",
              children: f.jsx("h1", {
                className: `${V.heroHeadText}  text-white uppercase text-center`,
                children: f.jsxs("span", {
                  className: "text-black",
                  children: [
                    "What does have to ",
                    "<",
                    "MIYAGI",
                    ">",
                    " offer?",
                  ],
                }),
              }),
            }),
            f.jsx("div", {
              className: `gallery mt-[20px] md:mt-[100px] w-7xl mx-auto ${V.paddingX} items-start lg:w-[80vw] flex flex-row justify-between`,
              children: f.jsxs("div", {
                className: "w-full",
                children: [
                  f.jsx("img", {
                    src: cw,
                    alt: "",
                    className: "img1 w-full rounded-[20px]",
                  }),
                  f.jsxs("div", {
                    className:
                      "border-2 mt-4 p-4 leading-6 tracking-wide rounded-[20px]",
                    children: [
                      f.jsx("h1", {
                        className: "text-[#5379FE] text-[22px] mb-4",
                        children: "Sign Documents",
                      }),
                      f.jsx("p", {
                        className: "text-[#807E87] text-[0.95rem]",
                        children:
                          "Are you tired of the hassles and uncertainties of traditional document signing methods? Say goodbye to the days of printing, scanning, and mailing documents. Welcome to the future of secure, efficient, and tamper-proof document signing with Blockchain technology!",
                      }),
                    ],
                  }),
                  f.jsx("img", {
                    src: uw,
                    alt: "",
                    className:
                      "img2 rounded-[20px] mt-8 md:mt-[6rem] w-full lg:mt-[3.5rem]",
                  }),
                  f.jsxs("div", {
                    className:
                      "border-2 mt-8 p-4 leading-6 tracking-wide rounded-[20px]",
                    children: [
                      f.jsx("h1", {
                        className: "text-[#5379FE] text-[22px] mb-4",
                        children: "Store Data",
                      }),
                      f.jsx("p", {
                        className: "text-[#807E87] text-[0.95rem]",
                        children:
                          "Discover the pinnacle of data security and trust in decentralized storage, harnessed by Blockchain. Bid adieu to centralized vulnerabilities and reclaim dominion over your prized information.",
                      }),
                    ],
                  }),
                  f.jsx("img", {
                    src: lw,
                    alt: "",
                    className:
                      "img3 last rounded-[20px] mt-8 md:mt-[6rem] md:mb-[3rem] w-full lg:mt-[3.5rem]",
                  }),
                  f.jsxs("div", {
                    className:
                      "border-2 mt-8 p-4 leading-6 tracking-wide rounded-[20px]",
                    children: [
                      f.jsx("h1", {
                        className: "text-[#5379FE] text-[22px] mb-4",
                        children: "Verify Documents",
                      }),
                      f.jsx("p", {
                        className: "text-[#807E87] text-[0.95rem]",
                        children:
                          "Tired of relying on traditional, easily forgeable verification methods? Enter a new era of unassailable trust and transparency with Blockchain-powered document verification ensure authenticity and trust while bidding farewell to counterfeiting concerns.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : null
  );
}
function hM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsx(f.Fragment, {
      children: f.jsxs("div", {
        children: [
          f.jsx(Xi, {}),
          f.jsx(lM, {}),
          f.jsx(JN, {}),
          f.jsx(fM, { className: "hidden lg:block" }),
          f.jsx(dM, { className: "lg:hidden" }),
          f.jsx(s3, {}),
          f.jsx(uM, {}),
          f.jsx(cM, {}),
          f.jsx(jf, {}),
        ],
      }),
    })
  );
}
L.registerPlugin(X);
function pM() {
  return (
    E.useEffect(() => {
      L.to(".box1", {
        scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box2", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: -500,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box3", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box4", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box2 absolute top-[75vh] left-[200.47px] hidden md:inline-block md:top-[75vh] md:left-[200.47px] rotate-[-40.33]",
          src: $i,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box3 absolute top-[80vh] right-[0px] md:hidden  xl:inline-block  xl:top-[80vh] xl:right-[300.47px] rotate-[-40.33]",
          src: Bs,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box4 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("h1", {
            className: `${V.heroHead2Text}  text-white uppercase text-center`,
            children: f.jsxs("span", {
              className: "text-black",
              children: [
                "<",
                "Our ",
                f.jsx("span", {
                  className: "text-[#5379FE]",
                  children: "PHILOSOPHY",
                }),
                ">",
              ],
            }),
          }),
        }),
        f.jsx("div", {
          className: `mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[2rem]",
            children: [
              f.jsxs("div", {
                className: `text-center ${V.heroSubText}`,
                children: [
                  "<",
                  "If we had to explain to",
                  " ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "Miyagi",
                  }),
                  " in the simplest of terms, We are a ",
                  f.jsx("br", { className: "hidden lg:inline-block" }),
                  " company which gives right to data ownership to the client",
                  ">",
                ],
              }),
              f.jsxs("div", {
                className:
                  "text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7 ",
                children: [
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "In an era",
                  }),
                  " where people’s data is being exploited by big tech giants for their ulterior motives,we want to equip people with a tool which",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children:
                      " would give them an option to not let their data be exploited",
                  }),
                  " by the big tech companies or perhaps how ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "John Lennon",
                  }),
                  " would’ve said it.",
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function mM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {}, []),
    f.jsxs("section", {
      className:
        "about w-full min-h-[70vh] pt-[10vh] pb-[10vh] flex flex-col gap-[3rem] relative mx-auto ",
      ref: t,
      children: [
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("h1", {
            className: `${V.heroHead2Text}  text-white text-center`,
            children: f.jsx("span", {
              className: "text-black",
              children: "why miyagi ?",
            }),
          }),
        }),
        f.jsxs("div", {
          className:
            "bg-[white] p-2 mx-auto rounded-lg flex flex-row justify-evenly w-[300px] text-center",
          children: [
            f.jsx("h1", {
              className: "p-2 text-[15px] font-thin",
              children: "Lorem",
            }),
            f.jsx("h1", {
              className: "p-2 text-[15px] font-thin",
              children: "Lorem",
            }),
            f.jsx("h1", {
              className: "p-2 text-[15px] font-thin",
              children: "Lorem",
            }),
          ],
        }),
        e &&
          f.jsx("div", {
            className: ` w-7xl mx-auto ${V.paddingX} items-start lg:w-[80vw]`,
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            transition: {
              duration: 0.3,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
            children: f.jsx("h2", {
              className: `${V.heroHead3Text}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black ",
                children: [
                  "That is a lot to make work and it does get stressful for the team but",
                  " ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "who doesn’t like a challenge?",
                  }),
                ],
              }),
            }),
          }),
        f.jsx("div", {
          className: `w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${V.paddingX1} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[4rem]",
            children: [
              f.jsxs("div", {
                className:
                  "text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7  capitalize",
                children: [
                  "<",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children:
                      "Try out Miyagi for free and let us know how you feel about it.",
                  }),
                  " ",
                  "Your opinion matters to us. A Long time",
                  " ",
                  f.jsx("br", { className: "hidden md:inline-block" }),
                  " ago, someone asked one of our founders,",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "“What does the user want?’.",
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7  capitalize",
                children: [
                  "That simple yet",
                  f.jsx("br", {}),
                  "Complex question still resonates with us and remains one of the core philosophies of ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: " Miyagi",
                  }),
                  ". Your feedback adds to the landscape of",
                  " ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: " Miyagi",
                  }),
                  " and with your help, one day we would find the solution to",
                  " ",
                  f.jsx("br", { className: "hidden md:inline-block" }),
                  " That Resonating Question",
                  ">",
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function gM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {
      L.to(".box10", {
        scrollTrigger: {
          trigger: ".trigger3",
          start: "top top",
          endTrigger: "bottom bottom",
          scrub: 1,
        },
        x: -500,
        y: 200,
        z: 200,
        ease: G,
        duration: 1,
      }),
        L.to(".box11", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: -900,
          z: 200,
          ease: G,
          duration: 1.5,
        }),
        L.to(".box12", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box13", {
          scrollTrigger: {
            trigger: ".trigger3",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2.5,
        });
    }, []),
    f.jsxs("section", {
      className:
        "pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh] trigger3 w-full max-h-[100vh] relative mx-auto ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] rotate-[-40.33]",
          src: $i,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]",
          src: Er,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block",
          src: Bs,
          alt: "box",
        }),
        e &&
          f.jsxs(D.div, {
            className: ` w-7xl mx-auto ${V.paddingX} flex flex-col gap-10 lg:w-[80vw]`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            children: [
              f.jsx("h2", {
                className: `${V.heroHead1Text}  text-white uppercase text-center`,
                children: f.jsxs("span", {
                  className: "text-black ",
                  children: [
                    "If you believe in ",
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: " Data ownership, Tech craftsmanship",
                    }),
                    " and ",
                    f.jsx("br", { className: "hidden lg:inline-block" }),
                    " ",
                    f.jsx("span", {
                      className: "text-[#5379FE",
                      children: "Bringing the power back to the people,",
                    }),
                    " we would",
                    f.jsx("br", { className: "hidden lg:inline-block" }),
                    " recommend you try out ",
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: "Miyagi.",
                    }),
                  ],
                }),
              }),
              f.jsx("h2", {
                className: `${V.heroHead1Text}  text-white uppercase text-center`,
                children: f.jsxs("span", {
                  className: "text-black ",
                  children: [
                    "We hope that with your help, ",
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: "Miyagi",
                    }),
                    " can propel the ",
                    f.jsx("br", { className: "hidden lg:inline-block" }),
                    " world towards a future where the issues relating to",
                    f.jsx("br", { className: "hidden lg:inline-block" }),
                    " data ownership are no longer a concern.",
                  ],
                }),
              }),
              f.jsx("h2", {
                className: `${V.heroHead1Text}  text-white uppercase text-center`,
                children: f.jsxs("span", {
                  className: "text-black ",
                  children: [
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: "Together",
                    }),
                    " , we shall make a ",
                    f.jsx("span", {
                      className: "text-[#5379FE]",
                      children: "difference",
                    }),
                    ".",
                  ],
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function xM() {
  return f.jsxs("section", {
    className:
      "location w-full relative pt-[10vh] pb-[10vh] md:pt-[20vh] md:pb-[20vh] lg:pt-[30vh] lg:pb-[30vh] min-h-[40vh] lg:min-h-[60vh] mx-auto overflow-hidden ",
    children: [
      f.jsx(D.img, {
        className:
          "box20 absolute top-[-5vh] left-[0px] xl:top-[0vh] xl:left-[0px] rotate-[-40.33] ",
        animate: { y: [0, 14, 0] },
        transition: { duration: 1.5, repeat: 1 / 0, repeatType: "loop" },
        src: at,
        alt: "box",
      }),
      f.jsx(D.img, {
        className:
          "box absolute bottom-[0vh] right-[-100px] rotate-[-40.33]  hidden md:inline-block",
        animate: { y: [0, 24, 0] },
        transition: { duration: 2, repeat: 1 / 0, repeatType: "loop" },
        src: $i,
        alt: "box",
      }),
      f.jsx("div", {
        className: ` max-w-3xl xl:max-w-6xl mx-auto ${V.paddingX} text-center`,
        children: f.jsxs("h1", {
          className: `${V.heroHead3Text}`,
          children: [
            "<",
            f.jsx("span", {
              className: "text-[#5379FE] uppercase",
              children: "Miyagi",
            }),
            ">",
            f.jsx("br", {}),
            "A ",
            f.jsx("span", { className: "text-[#5379FE]" }),
            "decentralised application built for the ",
            f.jsx("span", {
              className: "text-[#5379FE]",
              children: "curious, ",
            }),
            f.jsx("br", { className: "hidden lg:inline-block" }),
            "Formulated by the ",
            f.jsx("span", {
              className: "text-[#5379FE]",
              children: "dreamers",
            }),
            "  & ",
            f.jsx("span", {
              className: "text-[#5379FE]",
              children: "thinkers",
            }),
            " of the ",
            f.jsx("span", {
              className: "text-[#5379FE]",
              children: "Indian Subcontinent",
            }),
            ".",
          ],
        }),
      }),
    ],
  });
}
L.registerPlugin(X);
function vM() {
  const [t, e] = Xt({ triggerOnce: !1, threshold: 0.2 }),
    [n, r] = E.useState(!1);
  return (
    E.useEffect(() => {
      const i = () => {
        r(!0), L.to(".trigger1", { scrollTrigger: { pin: !0 } });
      };
      (() => {
        const o = new Image();
        (o.src = O0), (o.onload = i);
        const a = new Image();
        (a.src = I0), (a.onload = i);
      })(),
        L.to(".box6", {
          scrollTrigger: { trigger: ".trigger1", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          ease: "power1.inOut",
          duration: 2,
        }),
        L.to(".box7", {
          scrollTrigger: { trigger: ".trigger1", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: "power1.inOut",
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger1 power w-full relative min-h-[80vh] md:min-h-[90vh] mx-auto",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box7 absolute top-[80vh] right-[10vw] xl:top-[75vh] xl:right-[20vw] rotate-[-40.33] hidden md:inline-block",
          src: Fl,
          alt: "box",
        }),
        f.jsxs("div", {
          className: "w-full flex flex-col md:flex-row justify-between",
          children: [
            f.jsxs("div", {
              className:
                "relative w-full flex flex-col items-center md:w-[60%] h-[20rem] md:h-full lg:h-full xl:w-[40%]",
              children: [
                e &&
                  f.jsx(D.img, {
                    src: O0,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: {
                      duration: 2,
                      delay: 1,
                      ease: [0.25, 1, 0.3, 1],
                    },
                    className:
                      "hand2 md:mt-[5rem] lg:mt-[0rem] absolute md:left-[-3px] xl:left-[-6px] h-[30vh] md:h-[34vh] lg:h-[68vh] xl:h-[76vh]",
                    alt: "",
                  }),
                e &&
                  f.jsx(D.img, {
                    src: I0,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: {
                      duration: 2,
                      delay: 2,
                      ease: [0.25, 1, 0.3, 1],
                    },
                    className:
                      "hand3 md:mt-[5rem] lg:mt-[0rem]  absolute md:left-0 h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh]",
                    alt: "",
                  }),
              ],
            }),
            f.jsx("div", {
              className:
                "pb-[50px] xl:mr-[0rem] lg:pt-[50px] lg:pb-[50px] xl:pt-[120px] xl:pb-[120px] w-full lg:w-[55%] flex flex-col justify-between lg:flex-row items-center",
              children: f.jsxs("div", {
                className: "w-[85%] md:p-6 text-center md:text-left",
                children: [
                  f.jsx("h1", {
                    className: "w-full text-[1.7rem] uppercase font-normal",
                    children: "“POWER TO THE PEOPLE”",
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-10",
                    children: [
                      f.jsxs("p", {
                        className:
                          "w-full text-[#807E87] text-[1rem] capitalize font-normal mt-4 leading-7 tracking-wide",
                        children: [
                          "<",
                          "Whether it be having an easy-to-use",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Verification",
                          }),
                          " and",
                          f.jsxs("span", {
                            className: "text-[#5379FE]",
                            children: [
                              " ",
                              "Timestamping platform for all your Documents",
                            ],
                          }),
                          " ",
                          "or the sheer simplicity of",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Decentralised Data Storage,",
                          }),
                          " ",
                          "we do it all and this is but the",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "tip of ice berg",
                          }),
                          " ",
                          ">",
                        ],
                      }),
                      f.jsxs("p", {
                        className:
                          "w-full text-[#807E87] text-[1rem] capitalize font-normal leading-7 tracking-wide",
                        children: [
                          "Just like ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Satoshi",
                          }),
                          " ",
                          "envisioned Bitcoin taking over financial institutions by dreaming of a world which is",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "fair",
                          }),
                          " &",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "democratised",
                          }),
                          ", We at",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Miyagi",
                          }),
                          " envision to create a similar level of disruption in the cloud storage ecosystem by leveraging the fundamentals of BLOCKCHAIN",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Blockchain Technology",
                          }),
                          " ",
                          "and core principles of",
                          " ",
                          f.jsx("span", {
                            className: "text-[#5379FE]",
                            children: "Satoshi’s philosophy",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function yM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsx(pM, {}),
        f.jsx(vM, {}),
        f.jsx(mM, {}),
        f.jsx(gM, {}),
        f.jsx(xM, {}),
        f.jsx(jf, {}),
      ],
    })
  );
}
L.registerPlugin(X);
function wM() {
  return (
    E.useEffect(() => {
      L.to(".box1", {
        scrollTrigger: { trigger: ".trigger0", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box2", {
          scrollTrigger: { trigger: ".trigger0", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger0 relative w-full min-h-[45vh] lg:pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box2 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("div", {
            children: f.jsx("h1", {
              className: `${V.heroHead2Text}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "Documents uploaded on the ",
                  f.jsx("br", {}),
                  " chain are stored in a ",
                  f.jsx("br", {}),
                  " decentralized manner on ",
                  f.jsx("br", {}),
                  " Miyagi",
                ],
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `mt-[40px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[0.5rem]",
            children: [
              f.jsx("div", {
                className: `text-center ${V.heroSubText} font-semibold`,
                children: "Why should you upload to the chain?",
              }),
              f.jsxs("div", {
                className:
                  "text-center text-[#807E87] text-[1.1rem] font-normal leading-7 md:leading-7 ",
                children: [
                  "Uploading your data on the chain opens up avenues for your data ",
                  f.jsx("br", {}),
                  " to become : (followed by the 4 prompts)",
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const _M = [
    {
      Image: vw,
      Image1: yw,
      heading: "Immutability",
      content:
        "A document once stored on the chain cannot be removed, displaced or edited. This helps protect the integrity of your data.",
    },
    {
      Image: dw,
      Image1: hw,
      heading: "Impenetrability",
      content:
        "On the blockchain, your assets are hack-proof. Its advanced encryption keeps your valuable data safe from unauthorized access.",
    },
    {
      Image: pw,
      Image1: mw,
      heading: "Verifiability",
      content:
        "Chain documents get Miyagi's badge. In 'verify now,' confirm Miyagi's verification. Post-metadata changes prompt Miyagi denial, saving manual check time.",
    },
    {
      Image: gw,
      Image1: xw,
      heading: "Time-stamping",
      content:
        "Chain documents feature a timestamp for verification time and date, ensuring transparency and data integrity.",
    },
  ],
  SM = [
    {
      Image: oP,
      Image1: sP,
      heading: "Unrivaled Data Ownership",
      content:
        "Your data is unequivocally yours. With decentralization, you maintain complete ownership and control, eliminating the possibility of external entities accessing or manipulating your information without your consent.",
    },
    {
      Image: fP,
      Image1: dP,
      heading: "Enhanced Privacy Control",
      content:
        "Your data is shielded from intrusive data mining practices, placing you in control of who accesses your information and how it's utilized.",
    },
    {
      Image: aP,
      Image1: lP,
      heading: "Cryptographic Citadel",
      content:
        "Elevate your security with our top-tier cryptographic shielding, ensuring an impregnable fortress around your valuable data.",
    },
    {
      Image: uP,
      Image1: cP,
      heading: "Decentralized Data Fragmentation",
      content:
        "Embracing decentralization, your data is fragmented and stored across diverse nodes. This not only enhances security but also minimizes the risk of a single point of failure.",
    },
  ],
  bM = [
    {
      Image: vw,
      Image1: yw,
      heading: "Decentralized verification",
      content:
        "Blockchain e-sigs can be independently verified by any party without relying on a central database or service provider, enhancing availability and removing single point of failure risks that exist with traditional e-sigs.",
    },
    {
      Image: dw,
      Image1: hw,
      heading: "Document integrity",
      content:
        "Storing a hash fingerprint on an immutable blockchain allows any changes made to the source document stored in IPFS to be immutably detected, providing superior evidence of tampering compared to traditional e-signs. ",
    },
    {
      Image: pw,
      Image1: mw,
      heading: "Non-repudiable",
      content:
        "The cryptographic signing technique and public/private key pair system used for blockchain e-sigs assigns accountability to the signers' identities, preserving this linkage permanently on the decentralized ledger. Traditional e-sigs can have ambiguity around signer identities.",
    },
    {
      Image: gw,
      Image1: xw,
      heading: "Cost-effective scalability",
      content:
        "The decentralized and programmable architecture of blockchain e-signatures means that additional signature volume and users can be added with negligible incremental cost. Compared to traditional centralized e-signature solutions, blockchains offer significantly better economics for scaling up digital signature usage within an organization. ",
    },
  ],
  TM = [
    {
      subscriptiontype: "base",
      detail: " Individual Golf professional (<500 Clients)",
      content:
        " He Perfect Match For Starting Golf Professionals And Golf Professionals With a Smaller Clientele.",
      amount: " $7.81",
      time: "  Additional Agenda <11 Month",
    },
    {
      subscriptiontype: "base",
      detail: " Individual Golf professional (<500 Clients)",
      content:
        " He Perfect Match For Starting Golf Professionals And Golf Professionals With a Smaller Clientele.",
      amount: " $7.81",
      time: "  Additional Agenda <11 Month",
    },
    {
      subscriptiontype: "plus",
      detail:
        "Individual Golf Professional (>500 Clients) & Smaller Academies (< Less Than 3 Professionals",
      content:
        "For The Golf Professionals Who Already Have Many Teaching Hours and Who Have a Large Customer Database and For The Small Golf Academies.",
      amount: " $14.71",
      time: " Additional Agenda <18 Month",
    },
    {
      subscriptiontype: "premium",
      detail: "Larger Academies (More Than 3 Professionals)",
      content:
        "The Ultimate Solution For The Bigger Academies With a Larger Clientele.",
      amount: "$22.52",
      time: "Additional Agenda < 25 Month",
    },
  ];
function kM({ Image: t, Image1: e, heading: n, content: r, index: i }) {
  const [s, o] = E.useState(!1),
    a = () => {
      o(!0);
    },
    l = () => {
      o(!1);
    };
  return f.jsx(
    "div",
    {
      className: "activeBox",
      onMouseEnter: a,
      onMouseLeave: l,
      children: f.jsxs("div", {
        className:
          "inneractiveBox flex flex-col w-[310px] h-full rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4",
        children: [
          f.jsxs("div", {
            className:
              "featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]",
            children: [
              f.jsx("img", {
                className: `feature-image ${s ? "hidden" : ""}`,
                src: t,
                alt: "",
              }),
              f.jsx("img", {
                className: `feature-image1 ${s ? "" : "hidden"}`,
                src: e,
                alt: "",
              }),
            ],
          }),
          f.jsx("div", {
            children: f.jsx("h1", {
              className: "text-[20px] md:text-[25px] font-normal uppercase",
              children: n,
            }),
          }),
          f.jsx("div", {
            children: f.jsx("p", {
              className:
                "w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7",
              children: r,
            }),
          }),
        ],
      }),
    },
    i
  );
}
function PM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {}, []),
    f.jsx("section", {
      className: "trigger1 w-full xl:min-h-[60vh] relative mx-auto  ",
      ref: t,
      children:
        e &&
        f.jsx("div", {
          className: `pb-[10vh] w-7xl mx-auto ${V.paddingX} items-start lg:w-[100vw]`,
          children: f.jsx("div", {
            className: "w-full flex flex-wrap justify-center gap-6",
            children: _M.map((n, r) => f.jsx(kM, { index: r, ...n }, r)),
          }),
        }),
    })
  );
}
function EM(t, e, n, r) {
  return new (n || (n = Promise))(function (i, s) {
    function o(u) {
      try {
        l(r.next(u));
      } catch (c) {
        s(c);
      }
    }
    function a(u) {
      try {
        l(r.throw(u));
      } catch (c) {
        s(c);
      }
    }
    function l(u) {
      var c;
      u.done
        ? i(u.value)
        : ((c = u.value),
          c instanceof n
            ? c
            : new n(function (d) {
                d(c);
              })).then(o, a);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
const Lv = (t, e, n, r) => {
    t.style.transition = `${e} ${n}ms ${r}`;
  },
  Or = (t, e, n) => Math.min(Math.max(t, e), n);
class CM {
  constructor(e, n) {
    (this.glareAngle = 0),
      (this.glareOpacity = 0),
      (this.calculateGlareSize = (o) => {
        const { width: a, height: l } = o,
          u = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2));
        return { width: u, height: u };
      }),
      (this.setSize = (o) => {
        const a = this.calculateGlareSize(o);
        (this.glareEl.style.width = `${a.width}px`),
          (this.glareEl.style.height = `${a.height}px`);
      }),
      (this.update = (o, a, l, u) => {
        this.updateAngle(o, a.glareReverse), this.updateOpacity(o, a, l, u);
      }),
      (this.updateAngle = (o, a) => {
        const { xPercentage: l, yPercentage: u } = o,
          c = 180 / Math.PI,
          d = l ? Math.atan2(u, -l) * c : 0;
        this.glareAngle = d - (a ? 180 : 0);
      }),
      (this.updateOpacity = (o, a, l, u) => {
        const { xPercentage: c, yPercentage: d } = o,
          { glarePosition: h, glareReverse: p, glareMaxOpacity: x } = a,
          g = l ? -1 : 1,
          _ = u ? -1 : 1,
          y = p ? -1 : 1;
        let m = 0;
        switch (h) {
          case "top":
            m = -c * g * y;
            break;
          case "right":
            m = d * _ * y;
            break;
          case "bottom":
          case void 0:
            m = c * g * y;
            break;
          case "left":
            m = -d * _ * y;
            break;
          case "all":
            m = Math.hypot(c, d);
        }
        const v = Or(m, 0, 100);
        this.glareOpacity = (v * x) / 100;
      }),
      (this.render = (o) => {
        const { glareColor: a } = o;
        (this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`),
          (this.glareEl.style.opacity = this.glareOpacity.toString()),
          (this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${a} 100%)`);
      }),
      (this.glareWrapperEl = document.createElement("div")),
      (this.glareEl = document.createElement("div")),
      this.glareWrapperEl.appendChild(this.glareEl),
      (this.glareWrapperEl.className = "glare-wrapper"),
      (this.glareEl.className = "glare");
    const r = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: n,
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        pointerEvents: "none",
      },
      i = this.calculateGlareSize(e),
      s = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transformOrigin: "0% 0%",
        pointerEvents: "none",
        width: `${i.width}px`,
        height: `${i.height}px`,
      };
    Object.assign(this.glareWrapperEl.style, r),
      Object.assign(this.glareEl.style, s);
  }
}
class jM {
  constructor() {
    (this.glareAngle = 0),
      (this.glareOpacity = 0),
      (this.tiltAngleX = 0),
      (this.tiltAngleY = 0),
      (this.tiltAngleXPercentage = 0),
      (this.tiltAngleYPercentage = 0),
      (this.update = (e, n) => {
        this.updateTilt(e, n),
          this.updateTiltManualInput(e, n),
          this.updateTiltReverse(n),
          this.updateTiltLimits(n);
      }),
      (this.updateTilt = (e, n) => {
        const { xPercentage: r, yPercentage: i } = e,
          { tiltMaxAngleX: s, tiltMaxAngleY: o } = n;
        (this.tiltAngleX = (r * s) / 100),
          (this.tiltAngleY = ((i * o) / 100) * -1);
      }),
      (this.updateTiltManualInput = (e, n) => {
        const {
          tiltAngleXManual: r,
          tiltAngleYManual: i,
          tiltMaxAngleX: s,
          tiltMaxAngleY: o,
        } = n;
        (r !== null || i !== null) &&
          ((this.tiltAngleX = r !== null ? r : 0),
          (this.tiltAngleY = i !== null ? i : 0),
          (e.xPercentage = (100 * this.tiltAngleX) / s),
          (e.yPercentage = (100 * this.tiltAngleY) / o));
      }),
      (this.updateTiltReverse = (e) => {
        const n = e.tiltReverse ? -1 : 1;
        (this.tiltAngleX = n * this.tiltAngleX),
          (this.tiltAngleY = n * this.tiltAngleY);
      }),
      (this.updateTiltLimits = (e) => {
        const { tiltAxis: n } = e;
        (this.tiltAngleX = Or(this.tiltAngleX, -90, 90)),
          (this.tiltAngleY = Or(this.tiltAngleY, -90, 90)),
          n &&
            ((this.tiltAngleX = n === "x" ? this.tiltAngleX : 0),
            (this.tiltAngleY = n === "y" ? this.tiltAngleY : 0));
      }),
      (this.updateTiltAnglesPercentage = (e) => {
        const { tiltMaxAngleX: n, tiltMaxAngleY: r } = e;
        (this.tiltAngleXPercentage = (this.tiltAngleX / n) * 100),
          (this.tiltAngleYPercentage = (this.tiltAngleY / r) * 100);
      }),
      (this.render = (e) => {
        e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
      });
  }
}
const AM = Object.assign(
  Object.assign(
    {
      scale: 1,
      perspective: 1e3,
      flipVertically: !1,
      flipHorizontally: !1,
      reset: !0,
      transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
      transitionSpeed: 400,
      trackOnWindow: !1,
      gyroscope: !1,
    },
    {
      tiltEnable: !0,
      tiltReverse: !1,
      tiltAngleXInitial: 0,
      tiltAngleYInitial: 0,
      tiltMaxAngleX: 20,
      tiltMaxAngleY: 20,
      tiltAxis: void 0,
      tiltAngleXManual: null,
      tiltAngleYManual: null,
    }
  ),
  {
    glareEnable: !1,
    glareMaxOpacity: 0.7,
    glareColor: "#ffffff",
    glarePosition: "bottom",
    glareReverse: !1,
    glareBorderRadius: "0",
  }
);
class Za extends E.PureComponent {
  constructor() {
    super(...arguments),
      (this.wrapperEl = {
        node: null,
        size: { width: 0, height: 0, left: 0, top: 0 },
        clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 },
        updateAnimationId: null,
        scale: 1,
      }),
      (this.tilt = null),
      (this.glare = null),
      (this.addDeviceOrientationEventListener = () =>
        EM(this, void 0, void 0, function* () {
          if (!window.DeviceOrientationEvent) return;
          const e = DeviceOrientationEvent.requestPermission;
          typeof e == "function"
            ? (yield e()) === "granted" &&
              window.addEventListener("deviceorientation", this.onMove)
            : window.addEventListener("deviceorientation", this.onMove);
        })),
      (this.setSize = () => {
        this.setWrapperElSize(),
          this.glare && this.glare.setSize(this.wrapperEl.size);
      }),
      (this.mainLoop = (e) => {
        this.wrapperEl.updateAnimationId !== null &&
          cancelAnimationFrame(this.wrapperEl.updateAnimationId),
          this.processInput(e),
          this.update(e.type),
          (this.wrapperEl.updateAnimationId = requestAnimationFrame(
            this.renderFrame
          ));
      }),
      (this.onEnter = (e) => {
        const { onEnter: n } = this.props;
        this.setSize(),
          (this.wrapperEl.node.style.willChange = "transform"),
          this.setTransitions(),
          n && n(e.type);
      }),
      (this.onMove = (e) => {
        this.mainLoop(e), this.emitOnMove(e);
      }),
      (this.onLeave = (e) => {
        const { onLeave: n } = this.props;
        if ((this.setTransitions(), n && n(e.type), this.props.reset)) {
          const r = new CustomEvent("autoreset");
          this.onMove(r);
        }
      }),
      (this.processInput = (e) => {
        const { scale: n } = this.props;
        switch (e.type) {
          case "mousemove":
            (this.wrapperEl.clientPosition.x = e.pageX),
              (this.wrapperEl.clientPosition.y = e.pageY),
              (this.wrapperEl.scale = n);
            break;
          case "touchmove":
            (this.wrapperEl.clientPosition.x = e.touches[0].pageX),
              (this.wrapperEl.clientPosition.y = e.touches[0].pageY),
              (this.wrapperEl.scale = n);
            break;
          case "deviceorientation":
            this.processInputDeviceOrientation(e), (this.wrapperEl.scale = n);
            break;
          case "autoreset":
            const {
                tiltAngleXInitial: r,
                tiltAngleYInitial: i,
                tiltMaxAngleX: s,
                tiltMaxAngleY: o,
              } = this.props,
              a = (i / o) * 100;
            (this.wrapperEl.clientPosition.xPercentage = Or(
              (r / s) * 100,
              -100,
              100
            )),
              (this.wrapperEl.clientPosition.yPercentage = Or(a, -100, 100)),
              (this.wrapperEl.scale = 1);
        }
      }),
      (this.processInputDeviceOrientation = (e) => {
        if (!e.gamma || !e.beta || !this.props.gyroscope) return;
        const { tiltMaxAngleX: n, tiltMaxAngleY: r } = this.props,
          i = e.gamma;
        (this.wrapperEl.clientPosition.xPercentage = (e.beta / n) * 100),
          (this.wrapperEl.clientPosition.yPercentage = (i / r) * 100),
          (this.wrapperEl.clientPosition.xPercentage = Or(
            this.wrapperEl.clientPosition.xPercentage,
            -100,
            100
          )),
          (this.wrapperEl.clientPosition.yPercentage = Or(
            this.wrapperEl.clientPosition.yPercentage,
            -100,
            100
          ));
      }),
      (this.update = (e) => {
        const {
          tiltEnable: n,
          flipVertically: r,
          flipHorizontally: i,
        } = this.props;
        e !== "autoreset" &&
          e !== "deviceorientation" &&
          e !== "propChange" &&
          this.updateClientInput(),
          n && this.tilt.update(this.wrapperEl.clientPosition, this.props),
          this.updateFlip(),
          this.tilt.updateTiltAnglesPercentage(this.props),
          this.glare &&
            this.glare.update(this.wrapperEl.clientPosition, this.props, r, i);
      }),
      (this.updateClientInput = () => {
        const { trackOnWindow: e } = this.props;
        let n, r;
        if (e) {
          const { x: i, y: s } = this.wrapperEl.clientPosition;
          (n = (s / window.innerHeight) * 200 - 100),
            (r = (i / window.innerWidth) * 200 - 100);
        } else {
          const {
            size: { width: i, height: s, left: o, top: a },
            clientPosition: { x: l, y: u },
          } = this.wrapperEl;
          (n = ((u - a) / s) * 200 - 100), (r = ((l - o) / i) * 200 - 100);
        }
        (this.wrapperEl.clientPosition.xPercentage = Or(n, -100, 100)),
          (this.wrapperEl.clientPosition.yPercentage = Or(r, -100, 100));
      }),
      (this.updateFlip = () => {
        const { flipVertically: e, flipHorizontally: n } = this.props;
        e && ((this.tilt.tiltAngleX += 180), (this.tilt.tiltAngleY *= -1)),
          n && (this.tilt.tiltAngleY += 180);
      }),
      (this.renderFrame = () => {
        this.resetWrapperElTransform(),
          this.renderPerspective(),
          this.tilt.render(this.wrapperEl.node),
          this.renderScale(),
          this.glare && this.glare.render(this.props);
      });
  }
  componentDidMount() {
    if (
      ((this.tilt = new jM()),
      this.initGlare(),
      this.addEventListeners(),
      typeof CustomEvent > "u")
    )
      return;
    const e = new CustomEvent("autoreset");
    this.mainLoop(e);
    const n = new CustomEvent("initial");
    this.emitOnMove(n);
  }
  componentWillUnmount() {
    this.wrapperEl.updateAnimationId !== null &&
      cancelAnimationFrame(this.wrapperEl.updateAnimationId),
      this.removeEventListeners();
  }
  componentDidUpdate() {
    const e = new CustomEvent("propChange");
    this.mainLoop(e), this.emitOnMove(e);
  }
  addEventListeners() {
    const { trackOnWindow: e, gyroscope: n } = this.props;
    window.addEventListener("resize", this.setSize),
      e &&
        (window.addEventListener("mouseenter", this.onEnter),
        window.addEventListener("mousemove", this.onMove),
        window.addEventListener("mouseout", this.onLeave),
        window.addEventListener("touchstart", this.onEnter),
        window.addEventListener("touchmove", this.onMove),
        window.addEventListener("touchend", this.onLeave)),
      n && this.addDeviceOrientationEventListener();
  }
  removeEventListeners() {
    const { trackOnWindow: e, gyroscope: n } = this.props;
    window.removeEventListener("resize", this.setSize),
      e &&
        (window.removeEventListener("mouseenter", this.onEnter),
        window.removeEventListener("mousemove", this.onMove),
        window.removeEventListener("mouseout", this.onLeave),
        window.removeEventListener("touchstart", this.onEnter),
        window.removeEventListener("touchmove", this.onMove),
        window.removeEventListener("touchend", this.onLeave)),
      n &&
        window.DeviceOrientationEvent &&
        window.removeEventListener("deviceorientation", this.onMove);
  }
  setWrapperElSize() {
    const e = this.wrapperEl.node.getBoundingClientRect();
    (this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth),
      (this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight),
      (this.wrapperEl.size.left = e.left + window.scrollX),
      (this.wrapperEl.size.top = e.top + window.scrollY);
  }
  initGlare() {
    const { glareEnable: e, glareBorderRadius: n } = this.props;
    e &&
      ((this.glare = new CM(this.wrapperEl.size, n)),
      this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
  }
  emitOnMove(e) {
    const { onMove: n } = this.props;
    if (!n) return;
    let r = 0,
      i = 0;
    this.glare && ((r = this.glare.glareAngle), (i = this.glare.glareOpacity)),
      n({
        tiltAngleX: this.tilt.tiltAngleX,
        tiltAngleY: this.tilt.tiltAngleY,
        tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
        tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
        glareAngle: r,
        glareOpacity: i,
        eventType: e.type,
      });
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = "";
  }
  renderPerspective() {
    const { perspective: e } = this.props;
    this.wrapperEl.node.style.transform += `perspective(${e}px) `;
  }
  renderScale() {
    const { scale: e } = this.wrapperEl;
    this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`;
  }
  setTransitions() {
    const { transitionSpeed: e, transitionEasing: n } = this.props;
    Lv(this.wrapperEl.node, "all", e, n),
      this.glare && Lv(this.glare.glareEl, "opacity", e, n);
  }
  render() {
    const { children: e, className: n, style: r } = this.props;
    return Hn.createElement(
      "div",
      {
        ref: (i) => (this.wrapperEl.node = i),
        onMouseEnter: this.onEnter,
        onMouseMove: this.onMove,
        onMouseLeave: this.onLeave,
        onTouchStart: this.onEnter,
        onTouchMove: this.onMove,
        onTouchEnd: this.onLeave,
        className: n,
        style: r,
      },
      e
    );
  }
}
Za.defaultProps = AM;
L.registerPlugin(X);
function NM({
  subscriptiontype: t,
  detail: e,
  content: n,
  amount: r,
  time: i,
  index: s,
  activeBox: o,
  handleBoxClick: a,
}) {
  return f.jsx(Za, {
    className: "parallax-effect",
    perspective: 500,
    tiltMaxAngleX: 8,
    tiltMaxAngleY: 8,
    glareEnable: !0,
    glareMaxOpacity: 0.2,
    glareColor: "lightblue",
    glarePosition: "all",
    glareBorderRadius: "10px",
    children: f.jsx(
      "div",
      {
        className: "activeBox",
        children: f.jsxs("div", {
          className:
            "w-[312px] h-[450px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between transform translate-z-120",
          children: [
            f.jsxs("div", {
              className: "flex flex-col gap-4 md:gap-6",
              children: [
                f.jsx("h1", {
                  className: `${V.heroHead3Text} uppercase text-white`,
                  children: t,
                }),
                f.jsxs("div", {
                  className: "flex flex-col gap-5",
                  children: [
                    f.jsx("p", {
                      className:
                        " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                      children: e,
                    }),
                    f.jsx("p", {
                      className:
                        " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsxs("h1", {
                  className: "text-white text-[25px] md:text-[40px] lowercase",
                  children: [
                    r,
                    f.jsx("span", {
                      className:
                        "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                      children: "/MO",
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "w-full text-center my-2",
                  children: f.jsx(D.button, {
                    className:
                      "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                    whileHover: { scale: 1.2 },
                    whileTap: { scale: 0.9 },
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                    children: "Choose Base",
                  }),
                }),
                f.jsx("h3", {
                  className:
                    "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                  children: i,
                }),
              ],
            }),
          ],
        }),
      },
      s
    ),
  });
}
function Cb() {
  const [t, e] = E.useState(0),
    n = (r) => {
      e(r);
    };
  return (
    E.useEffect(() => {
      L.to(".box5", {
        scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box6", {
          scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box7", {
          scrollTrigger: { trigger: ".trigger2", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, [t]),
    f.jsxs("section", {
      className:
        "trigger2 w-full relative md:pt-[100px] pb-[100px] min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]",
      children: [
        f.jsx(D.img, {
          className:
            "box box5 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box6 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: xf,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box7 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block",
          src: Fl,
          alt: "box",
        }),
        f.jsx("div", {
          className: ` max-w-7xl mx-auto ${V.paddingX} items-start`,
          children: f.jsx("div", {
            children: f.jsx("h2", {
              className: `${V.heroHeadText}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "BLOCKCHAIN-BASED VERIFIABLE ",
                  f.jsx("br", {}),
                  " UPLOAD SUBSCRIPTION",
                ],
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `${V.paddingX} mt-[2rem] md:mt-[5rem] flex flex-wrap justify-center gap-5`,
          children: TM.map((r, i) =>
            f.jsx(NM, { index: i, activeBox: t, handleBoxClick: n, ...r }, i)
          ),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function jb() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {
      L.to(".box8", {
        scrollTrigger: { trigger: ".trigger3", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      });
    }, []),
    f.jsxs("section", {
      className:
        "trigger3 w-full h-full md:pt-[10vh] pb-[10vh] relative mx-auto ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box8 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx("div", {
          className: `mt-[40px] md:mt-[70px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${V.paddingX1} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[2rem]",
            children: [
              f.jsxs("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children: [
                  "At ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "Miyagi",
                  }),
                  " we offer clients the option to digitally sign their documents. E-signs on",
                  " ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "Miyagi",
                  }),
                  " are sold singularly.",
                ],
              }),
              f.jsx("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children:
                  "This ensures that the client only purchases the number of e-signs required by him unlike annual subscriptions where in clients have to purchase unlimited e-signs at a hefty price in order to have access to the same.",
              }),
              f.jsxs("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children: [
                  "E-signs at ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "Miyagi",
                  }),
                  " at priced @Rs5",
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function MM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {
      L.to(".box10", {
        scrollTrigger: {
          trigger: ".trigger4",
          start: "top top",
          endTrigger: "bottom bottom",
          scrub: 1,
        },
        x: -500,
        y: 200,
        z: 200,
        ease: G,
        duration: 1,
      }),
        L.to(".box11", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: -800,
          z: 200,
          ease: G,
          duration: 1.5,
        }),
        L.to(".box12", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box13", {
          scrollTrigger: {
            trigger: ".trigger4",
            start: "top top",
            endTrigger: "bottom bottom",
            scrub: 1,
          },
          x: 600,
          y: 200,
          z: 200,
          ease: G,
          duration: 2.5,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger4 w-full min-h-[70vh] md:pt-[10vh] pb-[10vh] relative mx-auto ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box10 absolute top-[7vh] left-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box11 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[20vw] md:hidden",
          src: $i,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box12 absolute top-[-5vh] right-[0px] xl:top-[7vh] rotate-[-40.33]",
          src: Er,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box13 absolute bottom-[-25vh] right-[10vw] rotate-[-40.33]  hidden xl:inline-block",
          src: Bs,
          alt: "box",
        }),
        f.jsx("div", {
          className: `mt-[40px] md:mt-[70px] w-full md:max-w-[44rem]  lg:max-w-5xl mx-auto ${V.paddingX1} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[2rem]",
            children: [
              f.jsx("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children:
                  "Miyagi Labs pioneers secure and tamper-proof blockchain-based E-signatures, ensuring authenticity and trust in the digital document signing process.",
              }),
              f.jsx("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children:
                  "Miyagi Labs distinguishes itself through a cost-effective and premium blockchain-based E-signature solution, leveraging the inherent advantages over centralized servers. Our platform delivers cutting-edge E-signature capabilities that are both affordable and of the highest quality, disrupting the traditional cost dynamics associated with premium services.",
              }),
              f.jsx("div", {
                className:
                  "text-center text-black text-[1rem] md:text-[1.2rem] font-normal leading-7 md:leading-7  capitalize",
                children:
                  "Miyagi Labs stands as a beacon of innovation, offering businesses a cost-effective yet premium alternative to traditional E-signature solutions, with the added advantage of decentralization and enhanced security over centralized counterparts.",
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function Ab() {
  return (
    E.useEffect(() => {
      L.to(".box14", {
        scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box15", {
          scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box16", {
          scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger5 w-full relative md:pt-[100px] pb-[100px] min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]",
      children: [
        f.jsx(D.img, {
          className:
            "box box14 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box15 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: xf,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box16 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block",
          src: Fl,
          alt: "box",
        }),
        f.jsx("div", {
          className: ` max-w-7xl mx-auto ${V.paddingX} items-start`,
          children: f.jsx("div", {
            children: f.jsx("h2", {
              className: `${V.heroHeadText}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "BLOCKCHAIN-BASED ESIGN ",
                  f.jsx("br", {}),
                  " SUBSCRIPTION",
                ],
              }),
            }),
          }),
        }),
        f.jsxs("div", {
          className: `${V.paddingX} mt-[2rem] md:mt-[5rem] flex flex-wrap justify-center gap-6`,
          children: [
            f.jsxs("div", {
              className:
                "w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
              children: [
                f.jsxs("div", {
                  className: "flex flex-col gap-4 md:gap-6",
                  children: [
                    f.jsx("h1", {
                      className: `${V.heroHead3Text} uppercase text-white`,
                      children: "base",
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-5",
                      children: [
                        f.jsxs("p", {
                          className:
                            " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                          children: [
                            "Individual Golf professional (",
                            "<",
                            "500 Clients)",
                          ],
                        }),
                        f.jsx("p", {
                          className:
                            " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                          children:
                            "He Perfect Match For Starting Golf Professionals And Golf Professionals With a Smaller Clientele.",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsxs("h1", {
                      className:
                        "text-white text-[25px] md:text-[40px] lowercase",
                      children: [
                        "$7.81",
                        f.jsx("span", {
                          className:
                            "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                          children: "/MO",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "w-full text-center my-2",
                      children: f.jsx(D.button, {
                        className:
                          "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Choose Base",
                      }),
                    }),
                    f.jsxs("h3", {
                      className:
                        "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                      children: ["Additional Agenda ", "<", "11 Month"],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
              children: [
                f.jsxs("div", {
                  className: "flex flex-col gap-4 md:gap-6",
                  children: [
                    f.jsx("h1", {
                      className: `${V.heroHead3Text} uppercase text-white`,
                      children: "base",
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-5",
                      children: [
                        f.jsxs("p", {
                          className:
                            " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                          children: [
                            "Individual Golf professional (",
                            "<",
                            "500 Clients)",
                          ],
                        }),
                        f.jsx("p", {
                          className:
                            " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                          children:
                            "He Perfect Match For Starting Golf Professionals And Golf Professionals With a Smaller Clientele.",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsxs("h1", {
                      className:
                        "text-white text-[25px] md:text-[40px] lowercase",
                      children: [
                        "$7.81",
                        f.jsx("span", {
                          className:
                            "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                          children: "/MO",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "w-full text-center my-2",
                      children: f.jsx(D.button, {
                        className:
                          "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Choose Base",
                      }),
                    }),
                    f.jsxs("h3", {
                      className:
                        "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                      children: ["Additional Agenda ", "<", "11 Month"],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "w-[312px] h-[450px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
              children: [
                f.jsxs("div", {
                  className: "flex flex-col gap-4 md:gap-6",
                  children: [
                    f.jsx("h1", {
                      className: `${V.heroHead3Text} uppercase text-white`,
                      children: "plus",
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-5",
                      children: [
                        f.jsxs("p", {
                          className:
                            " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                          children: [
                            "Individual Golf Professional (",
                            ">",
                            "500 Clients) & Smaller Academies (",
                            "<",
                            " Less Than 3 Professionals",
                          ],
                        }),
                        f.jsx("p", {
                          className:
                            " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                          children:
                            "For The Golf Professionals Who Already Have Many Teaching Hours and Who Have a Large Customer Database and For The Small Golf Academies.",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsxs("h1", {
                      className:
                        "text-white text-[25px] md:text-[40px] lowercase",
                      children: [
                        "$14.71",
                        f.jsx("span", {
                          className:
                            "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                          children: "/MO",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "w-full text-center my-2",
                      children: f.jsx(D.button, {
                        className:
                          "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Choose Base",
                      }),
                    }),
                    f.jsxs("h3", {
                      className:
                        "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                      children: ["Additional Agenda ", "<", "18 Month"],
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
              children: [
                f.jsxs("div", {
                  className: "flex flex-col gap-4 md:gap-6",
                  children: [
                    f.jsx("h1", {
                      className: `${V.heroHead3Text} uppercase text-white`,
                      children: "premium",
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-5",
                      children: [
                        f.jsx("p", {
                          className:
                            " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                          children:
                            "Larger Academies (More Than 3 Professionals)",
                        }),
                        f.jsx("p", {
                          className:
                            " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                          children:
                            "The Ultimate Solution For The Bigger Academies With a Larger Clientele.",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsxs("h1", {
                      className:
                        "text-white text-[25px] md:text-[40px] lowercase",
                      children: [
                        "$22.52",
                        f.jsx("span", {
                          className:
                            "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                          children: "/MO",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "w-full text-center my-2",
                      children: f.jsx(D.button, {
                        className:
                          "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Choose Base",
                      }),
                    }),
                    f.jsxs("h3", {
                      className:
                        "text-center text-white text-[0.9rem] md:text-basee font-normal leading-normal",
                      children: ["Additional Agenda ", "<", "25 Month"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function DM() {
  return (
    E.useEffect(() => {
      L.to(".box17", {
        scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box18", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box17 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box18 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("div", {
            children: f.jsx("h1", {
              className: `${V.heroHead2Text}  text-white uppercase text-center`,
              children: f.jsx("span", {
                className: "text-black",
                children: "BLOCKCHAIN-BACKED UPLOAD",
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-[2.5rem]",
            children: [
              f.jsx("div", {
                className: `text-center ${V.heroSubText}`,
                children: "Why should you upload to the chain?",
              }),
              f.jsxs("div", {
                className: "flex flex-col gap-6 justify-center text-center",
                children: [
                  f.jsxs("div", {
                    className:
                      "text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                    children: [
                      "Uploading to the chain upgrades your assets in a",
                      " ",
                      f.jsx("span", {
                        className: "text-[#5379FE]",
                        children: "facade",
                      }),
                      " of ways, the most important being.",
                    ],
                  }),
                  f.jsxs("div", {
                    className:
                      "text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                    children: [
                      f.jsx("span", {
                        className: "text-[#5379FE]",
                        children: "Immutability:",
                      }),
                      " A document once stored on the chain cannot be removed, displaced or edited. This helps protect the integrity of your data.",
                    ],
                  }),
                  " ",
                  f.jsxs("div", {
                    className:
                      "text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                    children: [
                      f.jsx("span", {
                        className: "text-[#5379FE]",
                        children: "Impenetrability:",
                      }),
                      " ",
                      "Blockchain technology is superior to the technology used for hacking prevalent in current times. Once on the chain, your assets become immune to hacking. This further helps in ensuring that the data most precious to you is safeguarded from unwanted guests.",
                    ],
                  }),
                  " ",
                  f.jsxs("div", {
                    className:
                      "text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                    children: [
                      f.jsx("span", {
                        className: "text-[#5379FE]",
                        children: "Verifiability:",
                      }),
                      " Every document uploaded singularly receives the badge of verification from Miyagi. This prevents questions raised against the integrity of your document as it was verified pre-hand. Any changes made to your document if dropped in the verify now section will receive a prompt stating that this file does not match the data of the file uploaded by you, thus it shall not be verified. Verification has far-reaching use-cases and can drastically reduce the time spent on manually verifying your documents.",
                    ],
                  }),
                  " ",
                  f.jsxs("div", {
                    className:
                      "text-[#807E87] text-[0.95] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                    children: [
                      f.jsx("span", {
                        className: "text-[#5379FE]",
                        children: "Time-stamp:",
                      }),
                      " Every document uploaded to the chain receives a badge stating the exact time and date at which the document was verified. This helps users and third-party institutions in tracking their uploaded documents.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function RM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsxs("div", {
          className: "mt-[10rem] lg:mt-[15rem]",
          children: [f.jsx(PM, {}), f.jsx(Cb, {}), f.jsx(Ab, {})],
        }),
        f.jsx(jf, {}),
      ],
    })
  );
}
L.registerPlugin(X);
function Hl() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {}, []),
    f.jsxs("section", {
      className:
        "trigger6 lg:pt-[20vh] pb-[20vh] w-full xl:min-h-[73vh] flex flex-row justify-center relative mx-auto  ",
      ref: t,
      children: [
        f.jsx(D.img, {
          className:
            "box box9 absolute bottom-[-15vh] left-[10vw] xl:bottom-[-15vh] xl:left-[0vw] rotate-[-40.33]",
          src: Bs,
          alt: "box",
          animate: { y: [0, 24, 0] },
          transition: { duration: 1.5, repeat: 1 / 0, repeatType: "loop" },
        }),
        f.jsxs("div", {
          className: `${V.paddingX} max-w-[90rem] flex flex-col lg:flex-row justify-center gap-6`,
          children: [
            f.jsxs("div", {
              className: "w-full lg:w-[50%] text-center lg:text-left",
              children: [
                f.jsx("span", {
                  className: `${V.heroHeadText}  text-black uppercase`,
                  children:
                    "Coming Soon, currently in the Beta-Testing phases, Reach out for Early-Access",
                }),
                f.jsx("div", {
                  className: "mt-6",
                  children: f.jsx(D.button, {
                    className:
                      " min-w-[160px] min-h-[50px] font-poppins cursor-pointer text-[16px] rounded-3xl  border-2 p-2 text-white bg-[#5379FE] ",
                    whileHover: { scale: 1.2 },
                    whileTap: { scale: 0.9 },
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                    children: "Contact Us",
                  }),
                }),
              ],
            }),
            f.jsxs("div", {
              className:
                "w-full lg:w-[50%] flex flex-wrap justify-center gap-6",
              children: [
                f.jsxs("div", {
                  className:
                    "w-[312px] md:w-[330px] h-[220px] md:h-[280px] lg:w-[218px] lg:h-[348px] xl:w-[310px] xl:h-[320px] bg-blue-500 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-center",
                  children: [
                    f.jsxs("div", {
                      className: "flex flex-col gap-2 md:gap-4",
                      children: [
                        f.jsx("h1", {
                          className:
                            "text-white text-[25px] md:text-[35px] xl:text-[40px]",
                          children: "SDK",
                        }),
                        f.jsx("p", {
                          className:
                            " text-white text-[15px] lg:text-[15px] xl:text-[20px] capitalize leading-[25px] md:leading-[30px]",
                          children:
                            "Revolutionize Your Tech Landscape with Miyagi SDK: Where Innovation Meets Seamless Integration",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      children: f.jsx(D.button, {
                        className:
                          "min-w-[140px] min-h-[40px] md:min-w-[160px] md:min-h-[50px] cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Contact Us",
                      }),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className:
                    "w-[312px] md:w-[330px] h-[220px] md:h-[280px] lg:w-[218px] lg:h-[348px] xl:w-[310px] xl:h-[320px] bg-blue-500 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-center",
                  children: [
                    f.jsxs("div", {
                      className: "flex flex-col gap-2 md:gap-4",
                      children: [
                        f.jsx("h1", {
                          className:
                            "text-white text-[25px] md:text-[35px] xl:text-[40px]",
                          children: "API",
                        }),
                        f.jsx("p", {
                          className:
                            " text-white text-[15px] lg:text-[15px] xl:text-[20px] capitalize leading-[25px] md:leading-[30px]",
                          children:
                            "Seamless Integration, Infinite Possibilities: Miyagi API, Your Gateway to Decentralized Excellence",
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      children: f.jsx(D.button, {
                        className:
                          " min-w-[140px] min-h-[40px] md:min-w-[160px] md:min-h-[50px] cursor-pointer text-[16px] rounded-xl  border-2 p-2 text-black bg-white ",
                        whileHover: { scale: 1.2 },
                        whileTap: { scale: 0.9 },
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        },
                        children: "Contact Us",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function LM() {
  return (
    E.useEffect(() => {
      L.to(".box1", {
        scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box2", {
          scrollTrigger: { trigger: ".trigger", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box2 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("div", {
            children: f.jsx("h1", {
              className: `${V.heroHead2Text}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "IPFS-POWERED DECENTRALISED ",
                  f.jsx("br", {}),
                  " STORAGE SUBSCRIPTION",
                ],
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-6 text-center",
            children: [
              f.jsxs("div", {
                className:
                  "text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                children: [
                  "We at ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "Miyagi",
                  }),
                  " offer storage powered by IPFS technology which stores your documents in a decentralised fashion. This provides an additional layer of security as compared to centralised data storage solutions thus maintaining the integrity of your assets.",
                ],
              }),
              " ",
              f.jsx("div", {
                className:
                  "text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                children:
                  "Why should you opt for decentralised storage over centralised storage?",
              }),
              " ",
              f.jsx("div", {
                className:
                  "text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                children:
                  "Centralised storages store all your data in one place. This means that it has a single point of failure meaning an error anywhere in the system would cause the entirety of it to collapse, thus posing a danger to the security of your assets.",
              }),
              " ",
              f.jsx("div", {
                className:
                  "text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                children:
                  "Decentralised storage stores your data using InterPlanetaryFileSystem technology where your data is broken down into 256 bits and scattered all across the world. You may be wondering how is that helpful. In order to access your data a hacker would need to have access to all 256 keys which is impossible. Only you have access to the keys of your data, thus safeguarding you",
              }),
            ],
          }),
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function OM() {
  return (
    E.useEffect(() => {
      L.to(".box14", {
        scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box15", {
          scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
          x: 300,
          y: 200,
          ease: G,
          duration: 2,
        }),
        L.to(".box16", {
          scrollTrigger: { trigger: ".trigger5", start: "top top", scrub: 1 },
          x: 600,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger5 w-full relative md:pt-[100px] pb-[100px] min-h-[80vh]  md:min-h-[100vh] mx-auto bg-[]",
      children: [
        f.jsx(D.img, {
          className:
            "box box14 absolute top-[3vh] left-[0px] xl:top-[10vh] xl:left-[0px] rotate-[-40.33]  hidden xl:inline-block",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box15 absolute top-[15vh] right-[0px] xl:top-[25vh] xl:right-[0px] rotate-[-40.33]  hidden md:inline-block",
          src: xf,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box16 absolute top-[80vh] right-[10vw] xl:top-[80vh] xl:right-[20vw] rotate-[-40.33]  hidden md:inline-block",
          src: Fl,
          alt: "box",
        }),
        f.jsx("div", {
          className: ` max-w-7xl mx-auto ${V.paddingX} items-start`,
          children: f.jsx("div", {
            children: f.jsx("h2", {
              className: `${V.heroHeadText}  text-white uppercase text-center`,
              children: f.jsxs("span", {
                className: "text-black",
                children: [
                  "We at ",
                  f.jsx("span", {
                    className: "text-[#5379FE]",
                    children: "miyagi",
                  }),
                  " offer 4 plans ",
                  f.jsx("br", {}),
                  " of varying storages",
                ],
              }),
            }),
          }),
        }),
        f.jsxs("div", {
          className: `${V.paddingX} mt-[2rem] md:mt-[5rem] flex flex-wrap justify-center gap-6`,
          children: [
            f.jsxs("div", {
              className:
                "w-[312px] h-[220px] md:h-[520px] xl:h-[570px] p-6 flex flex-col gap-4 md:gap-6",
              children: [
                f.jsx("h1", {
                  className: `${V.heroHead3Text} uppercase text-black`,
                  children: "pick your plan",
                }),
                f.jsxs("div", {
                  className: "flex flex-col gap-5",
                  children: [
                    f.jsx("input", {
                      type: "radio",
                      name: "checkbox",
                      class: "check",
                      id: "radio1",
                      checked: !0,
                    }),
                    f.jsxs("label", {
                      for: "radio1",
                      children: [
                        f.jsx("div", {
                          class: "container",
                          children: f.jsxs("div", {
                            class: "cRadioBtn",
                            children: [
                              f.jsx("div", { class: "overlay" }),
                              f.jsx("div", { class: "drops xsDrop" }),
                              f.jsx("div", { class: "drops mdDrop" }),
                              f.jsx("div", { class: "drops lgDrop" }),
                            ],
                          }),
                        }),
                        f.jsx("h2", {
                          className: "capitalize text-[20px]",
                          children: "monthly billing",
                        }),
                      ],
                    }),
                    f.jsx("input", {
                      type: "radio",
                      name: "checkbox",
                      class: "check",
                      id: "radio2",
                    }),
                    f.jsxs("label", {
                      for: "radio2",
                      children: [
                        f.jsx("div", {
                          class: "container",
                          children: f.jsxs("div", {
                            class: "cRadioBtn",
                            children: [
                              f.jsx("div", { class: "overlay" }),
                              f.jsx("div", { class: "drops xsDrop" }),
                              f.jsx("div", { class: "drops mdDrop" }),
                              f.jsx("div", { class: "drops lgDrop" }),
                            ],
                          }),
                        }),
                        f.jsx("h2", {
                          className: "capitalize text-[20px]",
                          children: "yearly billing",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f.jsx(Za, {
              children: f.jsxs("div", {
                className:
                  "w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
                children: [
                  f.jsxs("div", {
                    className: "flex flex-col gap-4 md:gap-6",
                    children: [
                      f.jsx("h1", {
                        className: `${V.heroHead3Text} uppercase text-white`,
                        children: "base",
                      }),
                      f.jsxs("div", {
                        className: "flex flex-col gap-5",
                        children: [
                          f.jsxs("p", {
                            className:
                              " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                            children: [
                              "Individual Golf professional (",
                              "<",
                              "500 Clients)",
                            ],
                          }),
                          f.jsx("p", {
                            className:
                              " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                            children:
                              "He Perfect Match For Starting Golf Professionals And Golf Professionals With a Smaller Clientele.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsxs("h1", {
                        className:
                          "text-white text-[25px] md:text-[40px] lowercase",
                        children: [
                          "$7.81",
                          f.jsx("span", {
                            className:
                              "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                            children: "/MO",
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "w-full text-center my-2",
                        children: f.jsx(D.button, {
                          className:
                            "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                          whileHover: { scale: 1.2 },
                          whileTap: { scale: 0.9 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: "Choose Base",
                        }),
                      }),
                      f.jsxs("h3", {
                        className:
                          "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                        children: ["Additional Agenda ", "<", "11 Month"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            f.jsx(Za, {
              children: f.jsxs("div", {
                className:
                  "w-[312px] h-[440px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
                children: [
                  f.jsxs("div", {
                    className: "flex flex-col gap-4 md:gap-6",
                    children: [
                      f.jsx("h1", {
                        className: `${V.heroHead3Text} uppercase text-white`,
                        children: "plus",
                      }),
                      f.jsxs("div", {
                        className: "flex flex-col gap-5",
                        children: [
                          f.jsxs("p", {
                            className:
                              " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                            children: [
                              "Individual Golf Professional (",
                              ">",
                              "500 Clients) & Smaller Academies (",
                              "<",
                              " Less Than 3 Professionals",
                            ],
                          }),
                          f.jsx("p", {
                            className:
                              " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                            children:
                              "For The Golf Professionals Who Already Have Many Teaching Hours and Who Have a Large Customer Database and For The Small Golf Academies.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsxs("h1", {
                        className:
                          "text-white text-[25px] md:text-[40px] lowercase",
                        children: [
                          "$14.71",
                          f.jsx("span", {
                            className:
                              "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                            children: "/MO",
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "w-full text-center my-2",
                        children: f.jsx(D.button, {
                          className:
                            "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                          whileHover: { scale: 1.2 },
                          whileTap: { scale: 0.9 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: "Choose Base",
                        }),
                      }),
                      f.jsxs("h3", {
                        className:
                          "text-center text-white text-[0.9rem] md:text-base font-normal leading-normal",
                        children: ["Additional Agenda ", "<", "18 Month"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            f.jsx(Za, {
              children: f.jsxs("div", {
                className:
                  "w-[312px] h-[400px] md:h-[520px] xl:h-[570px] bg-blue-500 rounded-3xl p-6 flex flex-col justify-between",
                children: [
                  f.jsxs("div", {
                    className: "flex flex-col gap-4 md:gap-6",
                    children: [
                      f.jsx("h1", {
                        className: `${V.heroHead3Text} uppercase text-white`,
                        children: "premium",
                      }),
                      f.jsxs("div", {
                        className: "flex flex-col gap-5",
                        children: [
                          f.jsx("p", {
                            className:
                              " text-white text-[18px] md:text-[21px] capitalize leading-[25px] md:leading-[30px]",
                            children:
                              "Larger Academies (More Than 3 Professionals)",
                          }),
                          f.jsx("p", {
                            className:
                              " text-slate-200 text-[0.9rem] md:text-base leading-relaxed",
                            children:
                              "The Ultimate Solution For The Bigger Academies With a Larger Clientele.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsxs("h1", {
                        className:
                          "text-white text-[25px] md:text-[40px] lowercase",
                        children: [
                          "$22.52",
                          f.jsx("span", {
                            className:
                              "text-white text-2xl lowercase leading-[25px] md:leading-[30px]",
                            children: "/MO",
                          }),
                        ],
                      }),
                      f.jsx("div", {
                        className: "w-full text-center my-2",
                        children: f.jsx(D.button, {
                          className:
                            "min-w-[140px] md:min-w-[160px] min-h-[40px] md:min-h-[50px] font-poppins cursor-pointer text-[15px] md:text-[16px] rounded-3xl  border-2 p-2 text-black bg-white ",
                          whileHover: { scale: 1.2 },
                          whileTap: { scale: 0.9 },
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                          children: "Choose Base",
                        }),
                      }),
                      f.jsxs("h3", {
                        className:
                          "text-center text-white text-[0.9rem] md:text-basee font-normal leading-normal",
                        children: ["Additional Agenda ", "<", "25 Month"],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function IM({ Image: t, heading: e, content: n, index: r, Image1: i }) {
  const [s, o] = E.useState(!1),
    a = () => {
      o(!0);
    },
    l = () => {
      o(!1);
    };
  return f.jsx(
    "div",
    {
      className: "activeBox",
      onMouseEnter: a,
      onMouseLeave: l,
      children: f.jsxs("div", {
        className:
          "inneractiveBox flex flex-col w-[310px] h-[390px] md:h-[455px] rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4",
        children: [
          f.jsxs("div", {
            className:
              "featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]",
            children: [
              f.jsx("img", {
                className: `feature-image ${s ? "hidden" : ""}`,
                src: t,
                alt: "",
              }),
              f.jsx("img", {
                className: `feature-image1 ${s ? "" : "hidden"}`,
                src: i,
                alt: "",
              }),
            ],
          }),
          f.jsx("div", {
            children: f.jsx("h1", {
              className: " text-[20px] md:text-[25px] font-normal uppercase",
              children: e,
            }),
          }),
          f.jsx("div", {
            children: f.jsx("p", {
              className:
                "w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7",
              children: n,
            }),
          }),
        ],
      }),
    },
    r
  );
}
function FM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {}, []),
    f.jsxs("section", {
      className: "trigger1 w-full xl:min-h-[60vh] relative mx-auto",
      ref: t,
      children: [
        e &&
          f.jsx("div", {
            className: `pb-[10vh] w-7xl mx-auto ${V.paddingX} items-start lg:w-[100vw]`,
            children: f.jsx("div", {
              className: "w-full flex flex-wrap justify-center gap-6",
              children: SM.map((n, r) => f.jsx(IM, { index: r, ...n }, r)),
            }),
          }),
        f.jsx("div", {
          className: "w-full flex justify-center",
          children: f.jsx(Se, {
            to: "/subscription",
            children: f.jsx("button", {
              className:
                "p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin",
              children: "pricing of the products",
            }),
          }),
        }),
      ],
    })
  );
}
function VM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsx(LM, {}),
        f.jsx(FM, {}),
        f.jsx(MM, {}),
        f.jsx(Hl, {}),
        f.jsx(jf, {}),
      ],
    })
  );
}
function zM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsxs("div", {
          className: "mt-[10rem] md:mt-[0rem]",
          children: [
            f.jsx(OM, {}),
            f.jsx("div", {
              className: "w-full flex justify-center",
              children: f.jsx(Se, {
                to: "/subscription",
                children: f.jsx("button", {
                  className:
                    "p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin",
                  children: "pricing of the products",
                }),
              }),
            }),
            f.jsx(Hl, {}),
          ],
        }),
      ],
    })
  );
}
function BM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsxs("div", {
          className: "mt-[10rem] md:mt-[0rem]",
          children: [
            f.jsx(wM, {}),
            f.jsx(Cb, {}),
            f.jsx("div", {
              className: "w-full flex justify-center",
              children: f.jsx(Se, {
                to: "/subscription",
                children: f.jsx("button", {
                  className:
                    "p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin",
                  children: "pricing of the products",
                }),
              }),
            }),
            f.jsx(Hl, {}),
          ],
        }),
      ],
    })
  );
}
L.registerPlugin(X);
function UM() {
  return (
    E.useEffect(() => {
      L.to(".box1", {
        scrollTrigger: { trigger: ".trigger20", start: "top top", scrub: 1 },
        x: -500,
        y: 200,
        ease: G,
        duration: 2,
      }),
        L.to(".box2", {
          scrollTrigger: { trigger: ".trigger20", start: "top top", scrub: 1 },
          x: 200,
          y: 200,
          ease: G,
          duration: 2,
        });
    }, []),
    f.jsxs("section", {
      className:
        "trigger20 background relative w-full min-h-[100vh] pt-[270px] pb-[100px] md:pt-[270px] md:pb-[270px] md:min-h-[100vh] mx-auto ",
      children: [
        f.jsx(D.img, {
          className:
            "box box1 absolute top-[5vh] left-[0px] xl:top-[10vh] hidden md:inline-block xl:left-[0px] rotate-[-40.33]",
          src: at,
          alt: "box",
        }),
        f.jsx(D.img, {
          className:
            "box box2 absolute top-[3vh] right-[100px] xl:top-[15vh] xl:right-[10.47px] rotate-[-40.33]",
          src: Er,
          alt: "box4",
        }),
        f.jsx("div", {
          className: ` mx-auto ${V.paddingX}`,
          children: f.jsx("div", {
            children: f.jsx("h1", {
              className: `${V.heroHead2Text}  text-white uppercase text-center`,
              children: f.jsx("span", {
                className: "text-black",
                children: "E-SIGN",
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `mt-[40px] w-full md:max-w-[44rem]  lg:max-w-6xl mx-auto ${V.paddingX} flex flex-row items-start`,
          children: f.jsxs("div", {
            className: " mx-auto flex flex-col gap-6 text-center",
            children: [
              f.jsx("div", {
                className:
                  "text-[#807E87] text-[0.95rem] md:text-[1.1rem] font-normal leading-6 md:leading-7 ",
                children:
                  "Blockchain-based IPFS e-signatures provide a cutting-edge way of digitally signing documents by cryptographically hashing files and storing that fingerprint in a tamper-evident decentralized ledger, enabling reliable independent verification of signatures without a central authority. This eliminates single points of failure and allows e-signatures and signed agreements to retain high integrity even if the storage layer is compromised. Additional benefits over traditional e-sigs include immutable audit trails, non-repudiation of signers, seamless workflows integration via smart contracts, and cost-effective scaling. By harnessing the security of blockchain decentralization along with distributed storage, blockchain e-signatures enable resilient, transparent and automated digital agreements that protect against tampering, spoofing and obsolescence. This makes them appealing for security-focused organizations and ideally positioned for emerging legislation around blockchain contractual validity.",
              }),
              " ",
            ],
          }),
        }),
      ],
    })
  );
}
function $M({ Image: t, Image1: e, heading: n, content: r, index: i }) {
  const [s, o] = E.useState(!1),
    a = () => {
      o(!0);
    },
    l = () => {
      o(!1);
    };
  return f.jsx(
    "div",
    {
      className: "activeBox",
      onMouseEnter: a,
      onMouseLeave: l,
      children: f.jsxs("div", {
        className:
          "inneractiveBox flex flex-col w-[310px] h-full rounded-3xl shadow border border-slate-200 p-6 gap-3 md:gap-4",
        children: [
          f.jsxs("div", {
            className:
              "featured-image w-[100px] h-[100px] bg-blue-500 rounded-[20px]",
            children: [
              f.jsx("img", {
                className: `feature-image ${s ? "hidden" : ""}`,
                src: t,
                alt: "",
              }),
              f.jsx("img", {
                className: `feature-image1 ${s ? "" : "hidden"}`,
                src: e,
                alt: "",
              }),
            ],
          }),
          f.jsx("div", {
            children: f.jsx("h1", {
              className: "text-[20px] md:text-[25px] font-normal uppercase",
              children: n,
            }),
          }),
          f.jsx("div", {
            children: f.jsx("p", {
              className:
                "w-full text-[0.9rem] md:text-[1rem] font-thin capitalize leading-6 md:leading-7",
              children: r,
            }),
          }),
        ],
      }),
    },
    i
  );
}
function HM() {
  const [t, e] = Xt({ triggerOnce: !0, threshold: 0.2 });
  return (
    E.useEffect(() => {}, []),
    f.jsx("section", {
      className: "trigger1 w-full xl:min-h-[60vh] relative mx-auto  ",
      ref: t,
      children:
        e &&
        f.jsx("div", {
          className: `pb-[10vh] w-7xl mx-auto ${V.paddingX} items-start lg:w-[100vw]`,
          children: f.jsx("div", {
            className: "w-full flex flex-wrap justify-center gap-6",
            children: bM.map((n, r) => f.jsx($M, { index: r, ...n }, r)),
          }),
        }),
    })
  );
}
function WM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsx(UM, {}),
        f.jsx(HM, {}),
        f.jsx(DM, {}),
        f.jsx(jb, {}),
        f.jsx(Ab, {}),
        f.jsx("div", {
          className: "w-full flex justify-center",
          children: f.jsx(Se, {
            to: "/subscription",
            children: f.jsx("button", {
              className:
                "p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin",
              children: "pricing of the products",
            }),
          }),
        }),
        f.jsx(Hl, {}),
      ],
    })
  );
}
function XM() {
  return (
    E.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(Xi, {}),
        f.jsxs("div", {
          className: "mt-[10rem] md:mt-[0rem]",
          children: [
            f.jsx(jb, {}),
            f.jsx("div", {
              className: "w-full flex justify-center",
              children: f.jsx(Se, {
                to: "/storage",
                children: f.jsx("button", {
                  className:
                    "p-2 rounded-lg text-white bg-[#5379FE] text-[15px] font-thin",
                  children: "why us?",
                }),
              }),
            }),
            f.jsx(Hl, {}),
          ],
        }),
      ],
    })
  );
}
function YM() {
  return f.jsxs(Hk, {
    children: [
      f.jsx(Nr, { path: "/", element: f.jsx(hM, {}) }),
      f.jsx(Nr, { path: "/philosophy", element: f.jsx(yM, {}) }),
      f.jsx(Nr, { path: "/subscription", element: f.jsx(RM, {}) }),
      f.jsx(Nr, { path: "/storage", element: f.jsx(VM, {}) }),
      f.jsx(Nr, { path: "/storage-pricing", element: f.jsx(zM, {}) }),
      f.jsx(Nr, { path: "/verification", element: f.jsx(BM, {}) }),
      f.jsx(Nr, { path: "/esign", element: f.jsx(WM, {}) }),
      f.jsx(Nr, { path: "/pricing", element: f.jsx(XM, {}) }),
    ],
  });
}
Od.createRoot(document.getElementById("root")).render(
  f.jsx(qk, { children: f.jsx(YM, {}) })
);
