(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
            o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();

function qh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

var Jh = {
    exports: {}
}
    , Ys = {}
    , ep = {
        exports: {}
    }
    , K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io = Symbol.for("react.element")
    , wy = Symbol.for("react.portal")
    , Sy = Symbol.for("react.fragment")
    , xy = Symbol.for("react.strict_mode")
    , Ey = Symbol.for("react.profiler")
    , Py = Symbol.for("react.provider")
    , Ty = Symbol.for("react.context")
    , Cy = Symbol.for("react.forward_ref")
    , ky = Symbol.for("react.suspense")
    , Ay = Symbol.for("react.memo")
    , Ly = Symbol.for("react.lazy")
    , Pf = Symbol.iterator;
function _y(e) {
    return e === null || typeof e != "object" ? null : (e = Pf && e[Pf] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var tp = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , np = Object.assign
    , rp = {};
function Yr(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = rp,
        this.updater = n || tp
}
Yr.prototype.isReactComponent = {};
Yr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
Yr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function ip() { }
ip.prototype = Yr.prototype;
function Iu(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = rp,
        this.updater = n || tp
}
var Fu = Iu.prototype = new ip;
Fu.constructor = Iu;
np(Fu, Yr.prototype);
Fu.isPureReactComponent = !0;
var Tf = Array.isArray
    , op = Object.prototype.hasOwnProperty
    , zu = {
        current: null
    }
    , sp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function ap(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
            t.key !== void 0 && (o = "" + t.key),
            t)
            op.call(t, r) && !sp.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: io,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: zu.current
    }
}
function Ry(e, t) {
    return {
        $$typeof: io,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Bu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === io
}
function Ny(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Cf = /\/+/g;
function _a(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ny("" + e.key) : t.toString(36)
}
function Go(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case io:
                    case wy:
                        s = !0
                }
        }
    if (s)
        return s = e,
            i = i(s),
            e = r === "" ? "." + _a(s, 0) : r,
            Tf(i) ? (n = "",
                e != null && (n = e.replace(Cf, "$&/") + "/"),
                Go(i, t, n, "", function (u) {
                    return u
                })) : i != null && (Bu(i) && (i = Ry(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Cf, "$&/") + "/") + e)),
                    t.push(i)),
            1;
    if (s = 0,
        r = r === "" ? "." : r + ":",
        Tf(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + _a(o, a);
            s += Go(o, t, n, l, i)
        }
    else if (l = _y(e),
        typeof l == "function")
        for (e = l.call(e),
            a = 0; !(o = e.next()).done;)
            o = o.value,
                l = r + _a(o, a++),
                s += Go(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Eo(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , i = 0;
    return Go(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }),
        r
}
function Dy(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ze = {
    current: null
}
    , Ko = {
        transition: null
    }
    , Vy = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Ko,
        ReactCurrentOwner: zu
    };
function lp() {
    throw Error("act(...) is not supported in production builds of React.")
}
K.Children = {
    map: Eo,
    forEach: function (e, t, n) {
        Eo(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Eo(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return Eo(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Bu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = Yr;
K.Fragment = Sy;
K.Profiler = Ey;
K.PureComponent = Iu;
K.StrictMode = xy;
K.Suspense = ky;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vy;
K.act = lp;
K.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = np({}, e.props)
        , i = e.key
        , o = e.ref
        , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
            s = zu.current),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            op.call(t, l) && !sp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: io,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
    ;
K.createContext = function (e) {
    return e = {
        $$typeof: Ty,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: Py,
            _context: e
        },
        e.Consumer = e
}
    ;
K.createElement = ap;
K.createFactory = function (e) {
    var t = ap.bind(null, e);
    return t.type = e,
        t
}
    ;
K.createRef = function () {
    return {
        current: null
    }
}
    ;
K.forwardRef = function (e) {
    return {
        $$typeof: Cy,
        render: e
    }
}
    ;
K.isValidElement = Bu;
K.lazy = function (e) {
    return {
        $$typeof: Ly,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Dy
    }
}
    ;
K.memo = function (e, t) {
    return {
        $$typeof: Ay,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
K.startTransition = function (e) {
    var t = Ko.transition;
    Ko.transition = {};
    try {
        e()
    } finally {
        Ko.transition = t
    }
}
    ;
K.unstable_act = lp;
K.useCallback = function (e, t) {
    return ze.current.useCallback(e, t)
}
    ;
K.useContext = function (e) {
    return ze.current.useContext(e)
}
    ;
K.useDebugValue = function () { }
    ;
K.useDeferredValue = function (e) {
    return ze.current.useDeferredValue(e)
}
    ;
K.useEffect = function (e, t) {
    return ze.current.useEffect(e, t)
}
    ;
K.useId = function () {
    return ze.current.useId()
}
    ;
K.useImperativeHandle = function (e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
}
    ;
K.useInsertionEffect = function (e, t) {
    return ze.current.useInsertionEffect(e, t)
}
    ;
K.useLayoutEffect = function (e, t) {
    return ze.current.useLayoutEffect(e, t)
}
    ;
K.useMemo = function (e, t) {
    return ze.current.useMemo(e, t)
}
    ;
K.useReducer = function (e, t, n) {
    return ze.current.useReducer(e, t, n)
}
    ;
K.useRef = function (e) {
    return ze.current.useRef(e)
}
    ;
K.useState = function (e) {
    return ze.current.useState(e)
}
    ;
K.useSyncExternalStore = function (e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
}
    ;
K.useTransition = function () {
    return ze.current.useTransition()
}
    ;
K.version = "18.3.1";
ep.exports = K;
var j = ep.exports;
const ne = qh(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oy = j
    , My = Symbol.for("react.element")
    , jy = Symbol.for("react.fragment")
    , Iy = Object.prototype.hasOwnProperty
    , Fy = Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    , zy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function up(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Iy.call(t, r) && !zy.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
            t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: My,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Fy.current
    }
}
Ys.Fragment = jy;
Ys.jsx = up;
Ys.jsxs = up;
Jh.exports = Ys;
var T = Jh.exports
    , yl = {}
    , cp = {
        exports: {}
    }
    , Je = {}
    , fp = {
        exports: {}
    }
    , dp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(A, L) {
        var k = A.length;
        A.push(L);
        e: for (; 0 < k;) {
            var _ = k - 1 >>> 1
                , U = A[_];
            if (0 < i(U, L))
                A[_] = L,
                    A[k] = U,
                    k = _;
            else
                break e
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0]
    }
    function r(A) {
        if (A.length === 0)
            return null;
        var L = A[0]
            , k = A.pop();
        if (k !== L) {
            A[0] = k;
            e: for (var _ = 0, U = A.length, ie = U >>> 1; _ < ie;) {
                var Z = 2 * (_ + 1) - 1
                    , Oe = A[Z]
                    , O = Z + 1
                    , Q = A[O];
                if (0 > i(Oe, k))
                    O < U && 0 > i(Q, Oe) ? (A[_] = Q,
                        A[O] = k,
                        _ = O) : (A[_] = Oe,
                            A[Z] = k,
                            _ = Z);
                else if (O < U && 0 > i(Q, k))
                    A[_] = Q,
                        A[O] = k,
                        _ = O;
                else
                    break e
            }
        }
        return L
    }
    function i(A, L) {
        var k = A.sortIndex - L.sortIndex;
        return k !== 0 ? k : A.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var s = Date
            , a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = []
        , u = []
        , c = 1
        , f = null
        , d = 3
        , m = !1
        , g = !1
        , y = !1
        , S = typeof setTimeout == "function" ? setTimeout : null
        , v = typeof clearTimeout == "function" ? clearTimeout : null
        , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(A) {
        for (var L = n(u); L !== null;) {
            if (L.callback === null)
                r(u);
            else if (L.startTime <= A)
                r(u),
                    L.sortIndex = L.expirationTime,
                    t(l, L);
            else
                break;
            L = n(u)
        }
    }
    function w(A) {
        if (y = !1,
            p(A),
            !g)
            if (n(l) !== null)
                g = !0,
                    H(x);
            else {
                var L = n(u);
                L !== null && Y(w, L.startTime - A)
            }
    }
    function x(A, L) {
        g = !1,
            y && (y = !1,
                v(P),
                P = -1),
            m = !0;
        var k = d;
        try {
            for (p(L),
                f = n(l); f !== null && (!(f.expirationTime > L) || A && !V());) {
                var _ = f.callback;
                if (typeof _ == "function") {
                    f.callback = null,
                        d = f.priorityLevel;
                    var U = _(f.expirationTime <= L);
                    L = e.unstable_now(),
                        typeof U == "function" ? f.callback = U : f === n(l) && r(l),
                        p(L)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var ie = !0;
            else {
                var Z = n(u);
                Z !== null && Y(w, Z.startTime - L),
                    ie = !1
            }
            return ie
        } finally {
            f = null,
                d = k,
                m = !1
        }
    }
    var C = !1
        , E = null
        , P = -1
        , D = 5
        , R = -1;
    function V() {
        return !(e.unstable_now() - R < D)
    }
    function M() {
        if (E !== null) {
            var A = e.unstable_now();
            R = A;
            var L = !0;
            try {
                L = E(!0, A)
            } finally {
                L ? I() : (C = !1,
                    E = null)
            }
        } else
            C = !1
    }
    var I;
    if (typeof h == "function")
        I = function () {
            h(M)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var z = new MessageChannel
            , W = z.port2;
        z.port1.onmessage = M,
            I = function () {
                W.postMessage(null)
            }
    } else
        I = function () {
            S(M, 0)
        }
            ;
    function H(A) {
        E = A,
            C || (C = !0,
                I())
    }
    function Y(A, L) {
        P = S(function () {
            A(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (A) {
            A.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            g || m || (g = !0,
                H(x))
        }
        ,
        e.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < A ? Math.floor(1e3 / A) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return d
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(l)
        }
        ,
        e.unstable_next = function (A) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = d
            }
            var k = d;
            d = L;
            try {
                return A()
            } finally {
                d = k
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (A, L) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    A = 3
            }
            var k = d;
            d = A;
            try {
                return L()
            } finally {
                d = k
            }
        }
        ,
        e.unstable_scheduleCallback = function (A, L, k) {
            var _ = e.unstable_now();
            switch (typeof k == "object" && k !== null ? (k = k.delay,
                k = typeof k == "number" && 0 < k ? _ + k : _) : k = _,
            A) {
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3
            }
            return U = k + U,
                A = {
                    id: c++,
                    callback: L,
                    priorityLevel: A,
                    startTime: k,
                    expirationTime: U,
                    sortIndex: -1
                },
                k > _ ? (A.sortIndex = k,
                    t(u, A),
                    n(l) === null && A === n(u) && (y ? (v(P),
                        P = -1) : y = !0,
                        Y(w, k - _))) : (A.sortIndex = U,
                            t(l, A),
                            g || m || (g = !0,
                                H(x))),
                A
        }
        ,
        e.unstable_shouldYield = V,
        e.unstable_wrapCallback = function (A) {
            var L = d;
            return function () {
                var k = d;
                d = L;
                try {
                    return A.apply(this, arguments)
                } finally {
                    d = k
                }
            }
        }
}
)(dp);
fp.exports = dp;
var By = fp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uy = j
    , Ze = By;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var hp = new Set
    , Ni = {};
function tr(e, t) {
    Mr(e, t),
        Mr(e + "Capture", t)
}
function Mr(e, t) {
    for (Ni[e] = t,
        e = 0; e < t.length; e++)
        hp.add(t[e])
}
var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , wl = Object.prototype.hasOwnProperty
    , $y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , kf = {}
    , Af = {};
function Wy(e) {
    return wl.call(Af, e) ? !0 : wl.call(kf, e) ? !1 : $y.test(e) ? Af[e] = !0 : (kf[e] = !0,
        !1)
}
function Hy(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function Gy(e, t, n, r) {
    if (t === null || typeof t > "u" || Hy(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Be(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = i,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = s
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    Ae[e] = new Be(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    Ae[t] = new Be(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ae[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Ae[e] = new Be(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    Ae[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ae[e] = new Be(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    Ae[e] = new Be(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Ae[e] = new Be(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    Ae[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Uu = /[\-:]([a-z])/g;
function $u(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Uu, $u);
    Ae[t] = new Be(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Uu, $u);
    Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Uu, $u);
    Ae[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ae.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Ae[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Wu(e, t, n, r) {
    var i = Ae.hasOwnProperty(t) ? Ae[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gy(t, n, i, r) && (n = null),
        r || i === null ? Wy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
            r = i.attributeNamespace,
            n === null ? e.removeAttribute(t) : (i = i.type,
                n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Zt = Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , Po = Symbol.for("react.element")
    , cr = Symbol.for("react.portal")
    , fr = Symbol.for("react.fragment")
    , Hu = Symbol.for("react.strict_mode")
    , Sl = Symbol.for("react.profiler")
    , pp = Symbol.for("react.provider")
    , mp = Symbol.for("react.context")
    , Gu = Symbol.for("react.forward_ref")
    , xl = Symbol.for("react.suspense")
    , El = Symbol.for("react.suspense_list")
    , Ku = Symbol.for("react.memo")
    , tn = Symbol.for("react.lazy")
    , vp = Symbol.for("react.offscreen")
    , Lf = Symbol.iterator;
function ei(e) {
    return e === null || typeof e != "object" ? null : (e = Lf && e[Lf] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var de = Object.assign, Ra;
function fi(e) {
    if (Ra === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ra = t && t[1] || ""
        }
    return `
` + Ra + e
}
var Na = !1;
function Da(e, t) {
    if (!e || Na)
        return "";
    Na = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--,
                a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                                a--,
                                0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                    l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Na = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fi(e) : ""
}
function Ky(e) {
    switch (e.tag) {
        case 5:
            return fi(e.type);
        case 16:
            return fi("Lazy");
        case 13:
            return fi("Suspense");
        case 19:
            return fi("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Da(e.type, !1),
                e;
        case 11:
            return e = Da(e.type.render, !1),
                e;
        case 1:
            return e = Da(e.type, !0),
                e;
        default:
            return ""
    }
}
function Pl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case fr:
            return "Fragment";
        case cr:
            return "Portal";
        case Sl:
            return "Profiler";
        case Hu:
            return "StrictMode";
        case xl:
            return "Suspense";
        case El:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case mp:
                return (e.displayName || "Context") + ".Consumer";
            case pp:
                return (e._context.displayName || "Context") + ".Provider";
            case Gu:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case Ku:
                return t = e.displayName || null,
                    t !== null ? t : Pl(e.type) || "Memo";
            case tn:
                t = e._payload,
                    e = e._init;
                try {
                    return Pl(e(t))
                } catch { }
        }
    return null
}
function Yy(e) {
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
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Pl(t);
        case 8:
            return t === Hu ? "StrictMode" : "Mode";
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
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function wn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function gp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Qy(e) {
    var t = gp(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
            , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (s) {
                r = "" + s,
                    o.call(this, s)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (s) {
                r = "" + s
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function To(e) {
    e._valueTracker || (e._valueTracker = Qy(e))
}
function yp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = gp(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function us(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Tl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function _f(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = wn(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function wp(e, t) {
    t = t.checked,
        t != null && Wu(e, "checked", t, !1)
}
function Cl(e, t) {
    wp(e, t);
    var n = wn(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? kl(e, t.type, n) : t.hasOwnProperty("defaultValue") && kl(e, t.type, wn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Rf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function kl(e, t, n) {
    (t !== "number" || us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var di = Array.isArray;
function Ar(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + wn(n),
            t = null,
            i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Al(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Nf(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(N(92));
            if (di(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: wn(n)
    }
}
function Sp(e, t) {
    var n = wn(t.value)
        , r = wn(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Df(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function xp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function Ll(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Co, Ep = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Co = Co || document.createElement("div"),
            Co.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Co.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function Di(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var vi = {
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
    strokeWidth: !0
}
    , Xy = ["Webkit", "ms", "Moz", "O"];
Object.keys(vi).forEach(function (e) {
    Xy.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            vi[t] = vi[e]
    })
});
function Pp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vi.hasOwnProperty(e) && vi[e] ? ("" + t).trim() : t + "px"
}
function Tp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , i = Pp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : e[n] = i
        }
}
var by = de({
    menuitem: !0
}, {
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
    wbr: !0
});
function _l(e, t) {
    if (t) {
        if (by[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Rl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
            return !0
    }
}
var Nl = null;
function Yu(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var Dl = null
    , Lr = null
    , _r = null;
function Vf(e) {
    if (e = ao(e)) {
        if (typeof Dl != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = qs(t),
            Dl(e.stateNode, e.type, t))
    }
}
function Cp(e) {
    Lr ? _r ? _r.push(e) : _r = [e] : Lr = e
}
function kp() {
    if (Lr) {
        var e = Lr
            , t = _r;
        if (_r = Lr = null,
            Vf(e),
            t)
            for (e = 0; e < t.length; e++)
                Vf(t[e])
    }
}
function Ap(e, t) {
    return e(t)
}
function Lp() { }
var Va = !1;
function _p(e, t, n) {
    if (Va)
        return e(t, n);
    Va = !0;
    try {
        return Ap(e, t, n)
    } finally {
        Va = !1,
            (Lr !== null || _r !== null) && (Lp(),
                kp())
    }
}
function Vi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = qs(n);
    if (r === null)
        return null;
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
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Vl = !1;
if (Ht)
    try {
        var ti = {};
        Object.defineProperty(ti, "passive", {
            get: function () {
                Vl = !0
            }
        }),
            window.addEventListener("test", ti, ti),
            window.removeEventListener("test", ti, ti)
    } catch {
        Vl = !1
    }
function Zy(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gi = !1
    , cs = null
    , fs = !1
    , Ol = null
    , qy = {
        onError: function (e) {
            gi = !0,
                cs = e
        }
    };
function Jy(e, t, n, r, i, o, s, a, l) {
    gi = !1,
        cs = null,
        Zy.apply(qy, arguments)
}
function e0(e, t, n, r, i, o, s, a, l) {
    if (Jy.apply(this, arguments),
        gi) {
        if (gi) {
            var u = cs;
            gi = !1,
                cs = null
        } else
            throw Error(N(198));
        fs || (fs = !0,
            Ol = u)
    }
}
function nr(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Rp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Of(e) {
    if (nr(e) !== e)
        throw Error(N(188))
}
function t0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = nr(e),
            t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n)
                    return Of(i),
                        e;
                if (o === r)
                    return Of(i),
                        t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = i,
                r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0,
                        n = i,
                        r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                        r = i,
                        n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0,
                            n = o,
                            r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                            r = o,
                            n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function Np(e) {
    return e = t0(e),
        e !== null ? Dp(e) : null
}
function Dp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = Dp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Vp = Ze.unstable_scheduleCallback
    , Mf = Ze.unstable_cancelCallback
    , n0 = Ze.unstable_shouldYield
    , r0 = Ze.unstable_requestPaint
    , me = Ze.unstable_now
    , i0 = Ze.unstable_getCurrentPriorityLevel
    , Qu = Ze.unstable_ImmediatePriority
    , Op = Ze.unstable_UserBlockingPriority
    , ds = Ze.unstable_NormalPriority
    , o0 = Ze.unstable_LowPriority
    , Mp = Ze.unstable_IdlePriority
    , Qs = null
    , Ct = null;
function s0(e) {
    if (Ct && typeof Ct.onCommitFiberRoot == "function")
        try {
            Ct.onCommitFiberRoot(Qs, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var yt = Math.clz32 ? Math.clz32 : u0
    , a0 = Math.log
    , l0 = Math.LN2;
function u0(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (a0(e) / l0 | 0) | 0
}
var ko = 64
    , Ao = 4194304;
function hi(e) {
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
            return e
    }
}
function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , i = e.suspendedLanes
        , o = e.pingedLanes
        , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = hi(a) : (o &= s,
            o !== 0 && (r = hi(o)))
    } else
        s = n & ~i,
            s !== 0 ? r = hi(s) : o !== 0 && (r = hi(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
        o = t & -t,
        i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - yt(t),
                i = 1 << n,
                r |= e[n],
                t &= ~i;
    return r
}
function c0(e, t) {
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
            return -1
    }
}
function f0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - yt(o)
            , a = 1 << s
            , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = c0(a, t)) : l <= t && (e.expiredLanes |= a),
            o &= ~a
    }
}
function Ml(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function jp() {
    var e = ko;
    return ko <<= 1,
        !(ko & 4194240) && (ko = 64),
        e
}
function Oa(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function oo(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - yt(t),
        e[t] = n
}
function d0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - yt(n)
            , o = 1 << i;
        t[i] = 0,
            r[i] = -1,
            e[i] = -1,
            n &= ~o
    }
}
function Xu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - yt(n)
            , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
            n &= ~i
    }
}
var b = 0;
function Ip(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fp, bu, zp, Bp, Up, jl = !1, Lo = [], cn = null, fn = null, dn = null, Oi = new Map, Mi = new Map, on = [], h0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function jf(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            cn = null;
            break;
        case "dragenter":
        case "dragleave":
            fn = null;
            break;
        case "mouseover":
        case "mouseout":
            dn = null;
            break;
        case "pointerover":
        case "pointerout":
            Oi.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Mi.delete(t.pointerId)
    }
}
function ni(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
        t !== null && (t = ao(t),
            t !== null && bu(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e)
}
function p0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return cn = ni(cn, e, t, n, r, i),
                !0;
        case "dragenter":
            return fn = ni(fn, e, t, n, r, i),
                !0;
        case "mouseover":
            return dn = ni(dn, e, t, n, r, i),
                !0;
        case "pointerover":
            var o = i.pointerId;
            return Oi.set(o, ni(Oi.get(o) || null, e, t, n, r, i)),
                !0;
        case "gotpointercapture":
            return o = i.pointerId,
                Mi.set(o, ni(Mi.get(o) || null, e, t, n, r, i)),
                !0
    }
    return !1
}
function $p(e) {
    var t = Bn(e.target);
    if (t !== null) {
        var n = nr(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = Rp(n),
                    t !== null) {
                    e.blockedOn = t,
                        Up(e.priority, function () {
                            zp(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Yo(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Nl = r,
                n.target.dispatchEvent(r),
                Nl = null
        } else
            return t = ao(n),
                t !== null && bu(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function If(e, t, n) {
    Yo(e) && n.delete(t)
}
function m0() {
    jl = !1,
        cn !== null && Yo(cn) && (cn = null),
        fn !== null && Yo(fn) && (fn = null),
        dn !== null && Yo(dn) && (dn = null),
        Oi.forEach(If),
        Mi.forEach(If)
}
function ri(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        jl || (jl = !0,
            Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, m0)))
}
function ji(e) {
    function t(i) {
        return ri(i, e)
    }
    if (0 < Lo.length) {
        ri(Lo[0], e);
        for (var n = 1; n < Lo.length; n++) {
            var r = Lo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (cn !== null && ri(cn, e),
        fn !== null && ri(fn, e),
        dn !== null && ri(dn, e),
        Oi.forEach(t),
        Mi.forEach(t),
        n = 0; n < on.length; n++)
        r = on[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < on.length && (n = on[0],
        n.blockedOn === null);)
        $p(n),
            n.blockedOn === null && on.shift()
}
var Rr = Zt.ReactCurrentBatchConfig
    , ps = !0;
function v0(e, t, n, r) {
    var i = b
        , o = Rr.transition;
    Rr.transition = null;
    try {
        b = 1,
            Zu(e, t, n, r)
    } finally {
        b = i,
            Rr.transition = o
    }
}
function g0(e, t, n, r) {
    var i = b
        , o = Rr.transition;
    Rr.transition = null;
    try {
        b = 4,
            Zu(e, t, n, r)
    } finally {
        b = i,
            Rr.transition = o
    }
}
function Zu(e, t, n, r) {
    if (ps) {
        var i = Il(e, t, n, r);
        if (i === null)
            Ha(e, t, r, ms, n),
                jf(e, r);
        else if (p0(i, e, t, n, r))
            r.stopPropagation();
        else if (jf(e, r),
            t & 4 && -1 < h0.indexOf(e)) {
            for (; i !== null;) {
                var o = ao(i);
                if (o !== null && Fp(o),
                    o = Il(e, t, n, r),
                    o === null && Ha(e, t, r, ms, n),
                    o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Ha(e, t, r, null, n)
    }
}
var ms = null;
function Il(e, t, n, r) {
    if (ms = null,
        e = Yu(r),
        e = Bn(e),
        e !== null)
        if (t = nr(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = Rp(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ms = e,
        null
}
function Wp(e) {
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
            switch (i0()) {
                case Qu:
                    return 1;
                case Op:
                    return 4;
                case ds:
                case o0:
                    return 16;
                case Mp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var an = null
    , qu = null
    , Qo = null;
function Hp() {
    if (Qo)
        return Qo;
    var e, t = qu, n = t.length, r, i = "value" in an ? an.value : an.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Qo = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Xo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function _o() {
    return !0
}
function Ff() {
    return !1
}
function et(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
            this._targetInst = i,
            this.type = r,
            this.nativeEvent = o,
            this.target = s,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? _o : Ff,
            this.isPropagationStopped = Ff,
            this
    }
    return de(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = _o)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = _o)
        },
        persist: function () { },
        isPersistent: _o
    }),
        t
}
var Qr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ju = et(Qr), so = de({}, Qr, {
    view: 0,
    detail: 0
}), y0 = et(so), Ma, ja, ii, Xs = de({}, so, {
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
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (Ma = e.screenX - ii.screenX,
            ja = e.screenY - ii.screenY) : ja = Ma = 0,
            ii = e),
            Ma)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : ja
    }
}), zf = et(Xs), w0 = de({}, Xs, {
    dataTransfer: 0
}), S0 = et(w0), x0 = de({}, so, {
    relatedTarget: 0
}), Ia = et(x0), E0 = de({}, Qr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), P0 = et(E0), T0 = de({}, Qr, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), C0 = et(T0), k0 = de({}, Qr, {
    data: 0
}), Bf = et(k0), A0 = {
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
    MozPrintableKey: "Unidentified"
}, L0 = {
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
    224: "Meta"
}, _0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function R0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : !1
}
function ec() {
    return R0
}
var N0 = de({}, so, {
    key: function (e) {
        if (e.key) {
            var t = A0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Xo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? L0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function (e) {
        return e.type === "keypress" ? Xo(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , D0 = et(N0)
    , V0 = de({}, Xs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
    , Uf = et(V0)
    , O0 = de({}, so, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ec
    })
    , M0 = et(O0)
    , j0 = de({}, Qr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , I0 = et(j0)
    , F0 = de({}, Xs, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , z0 = et(F0)
    , B0 = [9, 13, 27, 32]
    , tc = Ht && "CompositionEvent" in window
    , yi = null;
Ht && "documentMode" in document && (yi = document.documentMode);
var U0 = Ht && "TextEvent" in window && !yi
    , Gp = Ht && (!tc || yi && 8 < yi && 11 >= yi)
    , $f = " "
    , Wf = !1;
function Kp(e, t) {
    switch (e) {
        case "keyup":
            return B0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Yp(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var dr = !1;
function $0(e, t) {
    switch (e) {
        case "compositionend":
            return Yp(t);
        case "keypress":
            return t.which !== 32 ? null : (Wf = !0,
                $f);
        case "textInput":
            return e = t.data,
                e === $f && Wf ? null : e;
        default:
            return null
    }
}
function W0(e, t) {
    if (dr)
        return e === "compositionend" || !tc && Kp(e, t) ? (e = Hp(),
            Qo = qu = an = null,
            dr = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var H0 = {
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
    week: !0
};
function Hf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!H0[e.type] : t === "textarea"
}
function Qp(e, t, n, r) {
    Cp(r),
        t = vs(t, "onChange"),
        0 < t.length && (n = new Ju("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var wi = null
    , Ii = null;
function G0(e) {
    om(e, 0)
}
function bs(e) {
    var t = mr(e);
    if (yp(t))
        return e
}
function K0(e, t) {
    if (e === "change")
        return t
}
var Xp = !1;
if (Ht) {
    var Fa;
    if (Ht) {
        var za = "oninput" in document;
        if (!za) {
            var Gf = document.createElement("div");
            Gf.setAttribute("oninput", "return;"),
                za = typeof Gf.oninput == "function"
        }
        Fa = za
    } else
        Fa = !1;
    Xp = Fa && (!document.documentMode || 9 < document.documentMode)
}
function Kf() {
    wi && (wi.detachEvent("onpropertychange", bp),
        Ii = wi = null)
}
function bp(e) {
    if (e.propertyName === "value" && bs(Ii)) {
        var t = [];
        Qp(t, Ii, e, Yu(e)),
            _p(G0, t)
    }
}
function Y0(e, t, n) {
    e === "focusin" ? (Kf(),
        wi = t,
        Ii = n,
        wi.attachEvent("onpropertychange", bp)) : e === "focusout" && Kf()
}
function Q0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return bs(Ii)
}
function X0(e, t) {
    if (e === "click")
        return bs(t)
}
function b0(e, t) {
    if (e === "input" || e === "change")
        return bs(t)
}
function Z0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var St = typeof Object.is == "function" ? Object.is : Z0;
function Fi(e, t) {
    if (St(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!wl.call(t, i) || !St(e[i], t[i]))
            return !1
    }
    return !0
}
function Yf(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Qf(e, t) {
    var n = Yf(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Yf(n)
    }
}
function Zp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function qp() {
    for (var e = window, t = us(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = us(e.document)
    }
    return t
}
function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function q0(e) {
    var t = qp()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Zp(n.ownerDocument.documentElement, n)) {
        if (r !== null && nc(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                    , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                    !e.extend && o > r && (i = r,
                        r = o,
                        o = i),
                    i = Qf(n, o);
                var s = Qf(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                        e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var J0 = Ht && "documentMode" in document && 11 >= document.documentMode
    , hr = null
    , Fl = null
    , Si = null
    , zl = !1;
function Xf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zl || hr == null || hr !== us(r) || (r = hr,
        "selectionStart" in r && nc(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        Si && Fi(Si, r) || (Si = r,
            r = vs(Fl, "onSelect"),
            0 < r.length && (t = new Ju("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = hr)))
}
function Ro(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var pr = {
    animationend: Ro("Animation", "AnimationEnd"),
    animationiteration: Ro("Animation", "AnimationIteration"),
    animationstart: Ro("Animation", "AnimationStart"),
    transitionend: Ro("Transition", "TransitionEnd")
}
    , Ba = {}
    , Jp = {};
Ht && (Jp = document.createElement("div").style,
    "AnimationEvent" in window || (delete pr.animationend.animation,
        delete pr.animationiteration.animation,
        delete pr.animationstart.animation),
    "TransitionEvent" in window || delete pr.transitionend.transition);
function Zs(e) {
    if (Ba[e])
        return Ba[e];
    if (!pr[e])
        return e;
    var t = pr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Jp)
            return Ba[e] = t[n];
    return e
}
var em = Zs("animationend")
    , tm = Zs("animationiteration")
    , nm = Zs("animationstart")
    , rm = Zs("transitionend")
    , im = new Map
    , bf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Cn(e, t) {
    im.set(e, t),
        tr(t, [e])
}
for (var Ua = 0; Ua < bf.length; Ua++) {
    var $a = bf[Ua]
        , e1 = $a.toLowerCase()
        , t1 = $a[0].toUpperCase() + $a.slice(1);
    Cn(e1, "on" + t1)
}
Cn(em, "onAnimationEnd");
Cn(tm, "onAnimationIteration");
Cn(nm, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(rm, "onTransitionEnd");
Mr("onMouseEnter", ["mouseout", "mouseover"]);
Mr("onMouseLeave", ["mouseout", "mouseover"]);
Mr("onPointerEnter", ["pointerout", "pointerover"]);
Mr("onPointerLeave", ["pointerout", "pointerover"]);
tr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
tr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
tr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
tr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , n1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));
function Zf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        e0(r, t, void 0, e),
        e.currentTarget = null
}
function om(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                        , l = a.instance
                        , u = a.currentTarget;
                    if (a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    Zf(i, a, u),
                        o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                        l = a.instance,
                        u = a.currentTarget,
                        a = a.listener,
                        l !== o && i.isPropagationStopped())
                        break e;
                    Zf(i, a, u),
                        o = l
                }
        }
    }
    if (fs)
        throw e = Ol,
        fs = !1,
        Ol = null,
        e
}
function te(e, t) {
    var n = t[Hl];
    n === void 0 && (n = t[Hl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (sm(t, e, 2, !1),
        n.add(r))
}
function Wa(e, t, n) {
    var r = 0;
    t && (r |= 4),
        sm(n, e, r, t)
}
var No = "_reactListening" + Math.random().toString(36).slice(2);
function zi(e) {
    if (!e[No]) {
        e[No] = !0,
            hp.forEach(function (n) {
                n !== "selectionchange" && (n1.has(n) || Wa(n, !1, e),
                    Wa(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[No] || (t[No] = !0,
            Wa("selectionchange", !1, t))
    }
}
function sm(e, t, n, r) {
    switch (Wp(t)) {
        case 1:
            var i = v0;
            break;
        case 4:
            i = g0;
            break;
        default:
            i = Zu
    }
    n = i.bind(null, t, n, e),
        i = void 0,
        !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
        r ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
}
function Ha(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null;) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                            l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null;) {
                    if (s = Bn(a),
                        s === null)
                        return;
                    if (l = s.tag,
                        l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    _p(function () {
        var u = o
            , c = Yu(n)
            , f = [];
        e: {
            var d = im.get(e);
            if (d !== void 0) {
                var m = Ju
                    , g = e;
                switch (e) {
                    case "keypress":
                        if (Xo(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        m = D0;
                        break;
                    case "focusin":
                        g = "focus",
                            m = Ia;
                        break;
                    case "focusout":
                        g = "blur",
                            m = Ia;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Ia;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = zf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = S0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = M0;
                        break;
                    case em:
                    case tm:
                    case nm:
                        m = P0;
                        break;
                    case rm:
                        m = I0;
                        break;
                    case "scroll":
                        m = y0;
                        break;
                    case "wheel":
                        m = z0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = C0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Uf
                }
                var y = (t & 4) !== 0
                    , S = !y && e === "scroll"
                    , v = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var h = u, p; h !== null;) {
                    p = h;
                    var w = p.stateNode;
                    if (p.tag === 5 && w !== null && (p = w,
                        v !== null && (w = Vi(h, v),
                            w != null && y.push(Bi(h, w, p)))),
                        S)
                        break;
                    h = h.return
                }
                0 < y.length && (d = new m(d, g, null, n, c),
                    f.push({
                        event: d,
                        listeners: y
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                    m = e === "mouseout" || e === "pointerout",
                    d && n !== Nl && (g = n.relatedTarget || n.fromElement) && (Bn(g) || g[Gt]))
                    break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                    m ? (g = n.relatedTarget || n.toElement,
                        m = u,
                        g = g ? Bn(g) : null,
                        g !== null && (S = nr(g),
                            g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (m = null,
                                g = u),
                    m !== g)) {
                    if (y = zf,
                        w = "onMouseLeave",
                        v = "onMouseEnter",
                        h = "mouse",
                        (e === "pointerout" || e === "pointerover") && (y = Uf,
                            w = "onPointerLeave",
                            v = "onPointerEnter",
                            h = "pointer"),
                        S = m == null ? d : mr(m),
                        p = g == null ? d : mr(g),
                        d = new y(w, h + "leave", m, n, c),
                        d.target = S,
                        d.relatedTarget = p,
                        w = null,
                        Bn(c) === u && (y = new y(v, h + "enter", g, n, c),
                            y.target = p,
                            y.relatedTarget = S,
                            w = y),
                        S = w,
                        m && g)
                        t: {
                            for (y = m,
                                v = g,
                                h = 0,
                                p = y; p; p = sr(p))
                                h++;
                            for (p = 0,
                                w = v; w; w = sr(w))
                                p++;
                            for (; 0 < h - p;)
                                y = sr(y),
                                    h--;
                            for (; 0 < p - h;)
                                v = sr(v),
                                    p--;
                            for (; h--;) {
                                if (y === v || v !== null && y === v.alternate)
                                    break t;
                                y = sr(y),
                                    v = sr(v)
                            }
                            y = null
                        }
                    else
                        y = null;
                    m !== null && qf(f, d, m, y, !1),
                        g !== null && S !== null && qf(f, S, g, y, !0)
                }
            }
            e: {
                if (d = u ? mr(u) : window,
                    m = d.nodeName && d.nodeName.toLowerCase(),
                    m === "select" || m === "input" && d.type === "file")
                    var x = K0;
                else if (Hf(d))
                    if (Xp)
                        x = b0;
                    else {
                        x = Q0;
                        var C = Y0
                    }
                else
                    (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (x = X0);
                if (x && (x = x(e, u))) {
                    Qp(f, x, n, c);
                    break e
                }
                C && C(e, d, u),
                    e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && kl(d, "number", d.value)
            }
            switch (C = u ? mr(u) : window,
            e) {
                case "focusin":
                    (Hf(C) || C.contentEditable === "true") && (hr = C,
                        Fl = u,
                        Si = null);
                    break;
                case "focusout":
                    Si = Fl = hr = null;
                    break;
                case "mousedown":
                    zl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    zl = !1,
                        Xf(f, n, c);
                    break;
                case "selectionchange":
                    if (J0)
                        break;
                case "keydown":
                case "keyup":
                    Xf(f, n, c)
            }
            var E;
            if (tc)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e
                    }
                    P = void 0
                }
            else
                dr ? Kp(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Gp && n.locale !== "ko" && (dr || P !== "onCompositionStart" ? P === "onCompositionEnd" && dr && (E = Hp()) : (an = c,
                qu = "value" in an ? an.value : an.textContent,
                dr = !0)),
                C = vs(u, P),
                0 < C.length && (P = new Bf(P, e, null, n, c),
                    f.push({
                        event: P,
                        listeners: C
                    }),
                    E ? P.data = E : (E = Yp(n),
                        E !== null && (P.data = E)))),
                (E = U0 ? $0(e, n) : W0(e, n)) && (u = vs(u, "onBeforeInput"),
                    0 < u.length && (c = new Bf("onBeforeInput", "beforeinput", null, n, c),
                        f.push({
                            event: c,
                            listeners: u
                        }),
                        c.data = E))
        }
        om(f, t)
    })
}
function Bi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function vs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e
            , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
            o = Vi(e, n),
            o != null && r.unshift(Bi(e, o, i)),
            o = Vi(e, t),
            o != null && r.push(Bi(e, o, i))),
            e = e.return
    }
    return r
}
function sr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function qf(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n
            , l = a.alternate
            , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
            i ? (l = Vi(n, o),
                l != null && s.unshift(Bi(n, l, a))) : i || (l = Vi(n, o),
                    l != null && s.push(Bi(n, l, a)))),
            n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var r1 = /\r\n?/g
    , i1 = /\u0000|\uFFFD/g;
function Jf(e) {
    return (typeof e == "string" ? e : "" + e).replace(r1, `
`).replace(i1, "")
}
function Do(e, t, n) {
    if (t = Jf(t),
        Jf(e) !== t && n)
        throw Error(N(425))
}
function gs() { }
var Bl = null
    , Ul = null;
function $l(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Wl = typeof setTimeout == "function" ? setTimeout : void 0
    , o1 = typeof clearTimeout == "function" ? clearTimeout : void 0
    , ed = typeof Promise == "function" ? Promise : void 0
    , s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ed < "u" ? function (e) {
        return ed.resolve(null).then(e).catch(a1)
    }
        : Wl;
function a1(e) {
    setTimeout(function () {
        throw e
    })
}
function Ga(e, t) {
    var n = t
        , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
            i && i.nodeType === 8)
            if (n = i.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                        ji(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ji(t)
}
function hn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function td(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xr = Math.random().toString(36).slice(2)
    , Tt = "__reactFiber$" + Xr
    , Ui = "__reactProps$" + Xr
    , Gt = "__reactContainer$" + Xr
    , Hl = "__reactEvents$" + Xr
    , l1 = "__reactListeners$" + Xr
    , u1 = "__reactHandles$" + Xr;
function Bn(e) {
    var t = e[Tt];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Gt] || n[Tt]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = td(e); e !== null;) {
                    if (n = e[Tt])
                        return n;
                    e = td(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function ao(e) {
    return e = e[Tt] || e[Gt],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function mr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function qs(e) {
    return e[Ui] || null
}
var Gl = []
    , vr = -1;
function kn(e) {
    return {
        current: e
    }
}
function re(e) {
    0 > vr || (e.current = Gl[vr],
        Gl[vr] = null,
        vr--)
}
function q(e, t) {
    vr++,
        Gl[vr] = e.current,
        e.current = t
}
var Sn = {}
    , Ve = kn(Sn)
    , He = kn(!1)
    , Qn = Sn;
function jr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Sn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = i),
        i
}
function Ge(e) {
    return e = e.childContextTypes,
        e != null
}
function ys() {
    re(He),
        re(Ve)
}
function nd(e, t, n) {
    if (Ve.current !== Sn)
        throw Error(N(168));
    q(Ve, t),
        q(He, n)
}
function am(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(N(108, Yy(e) || "Unknown", i));
    return de({}, n, r)
}
function ws(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Sn,
        Qn = Ve.current,
        q(Ve, e),
        q(He, He.current),
        !0
}
function rd(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = am(e, t, Qn),
        r.__reactInternalMemoizedMergedChildContext = e,
        re(He),
        re(Ve),
        q(Ve, e)) : re(He),
        q(He, n)
}
var Vt = null
    , Js = !1
    , Ka = !1;
function lm(e) {
    Vt === null ? Vt = [e] : Vt.push(e)
}
function c1(e) {
    Js = !0,
        lm(e)
}
function An() {
    if (!Ka && Vt !== null) {
        Ka = !0;
        var e = 0
            , t = b;
        try {
            var n = Vt;
            for (b = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Vt = null,
                Js = !1
        } catch (i) {
            throw Vt !== null && (Vt = Vt.slice(e + 1)),
            Vp(Qu, An),
            i
        } finally {
            b = t,
                Ka = !1
        }
    }
    return null
}
var gr = []
    , yr = 0
    , Ss = null
    , xs = 0
    , rt = []
    , it = 0
    , Xn = null
    , Mt = 1
    , jt = "";
function Mn(e, t) {
    gr[yr++] = xs,
        gr[yr++] = Ss,
        Ss = e,
        xs = t
}
function um(e, t, n) {
    rt[it++] = Mt,
        rt[it++] = jt,
        rt[it++] = Xn,
        Xn = e;
    var r = Mt;
    e = jt;
    var i = 32 - yt(r) - 1;
    r &= ~(1 << i),
        n += 1;
    var o = 32 - yt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
            r >>= s,
            i -= s,
            Mt = 1 << 32 - yt(t) + i | n << i | r,
            jt = o + e
    } else
        Mt = 1 << o | n << i | r,
            jt = e
}
function rc(e) {
    e.return !== null && (Mn(e, 1),
        um(e, 1, 0))
}
function ic(e) {
    for (; e === Ss;)
        Ss = gr[--yr],
            gr[yr] = null,
            xs = gr[--yr],
            gr[yr] = null;
    for (; e === Xn;)
        Xn = rt[--it],
            rt[it] = null,
            jt = rt[--it],
            rt[it] = null,
            Mt = rt[--it],
            rt[it] = null
}
var be = null
    , Xe = null
    , ae = !1
    , mt = null;
function cm(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function id(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    be = e,
                    Xe = hn(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    be = e,
                    Xe = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = Xn !== null ? {
                    id: Mt,
                    overflow: jt
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = st(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    be = e,
                    Xe = null,
                    !0) : !1;
        default:
            return !1
    }
}
function Kl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Yl(e) {
    if (ae) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!id(e, t)) {
                if (Kl(e))
                    throw Error(N(418));
                t = hn(n.nextSibling);
                var r = be;
                t && id(e, t) ? cm(r, n) : (e.flags = e.flags & -4097 | 2,
                    ae = !1,
                    be = e)
            }
        } else {
            if (Kl(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
                ae = !1,
                be = e
        }
    }
}
function od(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    be = e
}
function Vo(e) {
    if (e !== be)
        return !1;
    if (!ae)
        return od(e),
            ae = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !$l(e.type, e.memoizedProps)),
        t && (t = Xe)) {
        if (Kl(e))
            throw fm(),
            Error(N(418));
        for (; t;)
            cm(e, t),
                t = hn(t.nextSibling)
    }
    if (od(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = hn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = be ? hn(e.stateNode.nextSibling) : null;
    return !0
}
function fm() {
    for (var e = Xe; e;)
        e = hn(e.nextSibling)
}
function Ir() {
    Xe = be = null,
        ae = !1
}
function oc(e) {
    mt === null ? mt = [e] : mt.push(e)
}
var f1 = Zt.ReactCurrentBatchConfig;
function oi(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var i = r
                , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
                ,
                t._stringRef = o,
                t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Oo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sd(e) {
    var t = e._init;
    return t(e._payload)
}
function dm(e) {
    function t(v, h) {
        if (e) {
            var p = v.deletions;
            p === null ? (v.deletions = [h],
                v.flags |= 16) : p.push(h)
        }
    }
    function n(v, h) {
        if (!e)
            return null;
        for (; h !== null;)
            t(v, h),
                h = h.sibling;
        return null
    }
    function r(v, h) {
        for (v = new Map; h !== null;)
            h.key !== null ? v.set(h.key, h) : v.set(h.index, h),
                h = h.sibling;
        return v
    }
    function i(v, h) {
        return v = gn(v, h),
            v.index = 0,
            v.sibling = null,
            v
    }
    function o(v, h, p) {
        return v.index = p,
            e ? (p = v.alternate,
                p !== null ? (p = p.index,
                    p < h ? (v.flags |= 2,
                        h) : p) : (v.flags |= 2,
                            h)) : (v.flags |= 1048576,
                                h)
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2),
            v
    }
    function a(v, h, p, w) {
        return h === null || h.tag !== 6 ? (h = Ja(p, v.mode, w),
            h.return = v,
            h) : (h = i(h, p),
                h.return = v,
                h)
    }
    function l(v, h, p, w) {
        var x = p.type;
        return x === fr ? c(v, h, p.props.children, w, p.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === tn && sd(x) === h.type) ? (w = i(h, p.props),
            w.ref = oi(v, h, p),
            w.return = v,
            w) : (w = ns(p.type, p.key, p.props, null, v.mode, w),
                w.ref = oi(v, h, p),
                w.return = v,
                w)
    }
    function u(v, h, p, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = el(p, v.mode, w),
            h.return = v,
            h) : (h = i(h, p.children || []),
                h.return = v,
                h)
    }
    function c(v, h, p, w, x) {
        return h === null || h.tag !== 7 ? (h = Gn(p, v.mode, w, x),
            h.return = v,
            h) : (h = i(h, p),
                h.return = v,
                h)
    }
    function f(v, h, p) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ja("" + h, v.mode, p),
                h.return = v,
                h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Po:
                    return p = ns(h.type, h.key, h.props, null, v.mode, p),
                        p.ref = oi(v, null, h),
                        p.return = v,
                        p;
                case cr:
                    return h = el(h, v.mode, p),
                        h.return = v,
                        h;
                case tn:
                    var w = h._init;
                    return f(v, w(h._payload), p)
            }
            if (di(h) || ei(h))
                return h = Gn(h, v.mode, p, null),
                    h.return = v,
                    h;
            Oo(v, h)
        }
        return null
    }
    function d(v, h, p, w) {
        var x = h !== null ? h.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return x !== null ? null : a(v, h, "" + p, w);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Po:
                    return p.key === x ? l(v, h, p, w) : null;
                case cr:
                    return p.key === x ? u(v, h, p, w) : null;
                case tn:
                    return x = p._init,
                        d(v, h, x(p._payload), w)
            }
            if (di(p) || ei(p))
                return x !== null ? null : c(v, h, p, w, null);
            Oo(v, p)
        }
        return null
    }
    function m(v, h, p, w, x) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return v = v.get(p) || null,
                a(h, v, "" + w, x);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Po:
                    return v = v.get(w.key === null ? p : w.key) || null,
                        l(h, v, w, x);
                case cr:
                    return v = v.get(w.key === null ? p : w.key) || null,
                        u(h, v, w, x);
                case tn:
                    var C = w._init;
                    return m(v, h, p, C(w._payload), x)
            }
            if (di(w) || ei(w))
                return v = v.get(p) || null,
                    c(h, v, w, x, null);
            Oo(h, w)
        }
        return null
    }
    function g(v, h, p, w) {
        for (var x = null, C = null, E = h, P = h = 0, D = null; E !== null && P < p.length; P++) {
            E.index > P ? (D = E,
                E = null) : D = E.sibling;
            var R = d(v, E, p[P], w);
            if (R === null) {
                E === null && (E = D);
                break
            }
            e && E && R.alternate === null && t(v, E),
                h = o(R, h, P),
                C === null ? x = R : C.sibling = R,
                C = R,
                E = D
        }
        if (P === p.length)
            return n(v, E),
                ae && Mn(v, P),
                x;
        if (E === null) {
            for (; P < p.length; P++)
                E = f(v, p[P], w),
                    E !== null && (h = o(E, h, P),
                        C === null ? x = E : C.sibling = E,
                        C = E);
            return ae && Mn(v, P),
                x
        }
        for (E = r(v, E); P < p.length; P++)
            D = m(E, v, P, p[P], w),
                D !== null && (e && D.alternate !== null && E.delete(D.key === null ? P : D.key),
                    h = o(D, h, P),
                    C === null ? x = D : C.sibling = D,
                    C = D);
        return e && E.forEach(function (V) {
            return t(v, V)
        }),
            ae && Mn(v, P),
            x
    }
    function y(v, h, p, w) {
        var x = ei(p);
        if (typeof x != "function")
            throw Error(N(150));
        if (p = x.call(p),
            p == null)
            throw Error(N(151));
        for (var C = x = null, E = h, P = h = 0, D = null, R = p.next(); E !== null && !R.done; P++,
            R = p.next()) {
            E.index > P ? (D = E,
                E = null) : D = E.sibling;
            var V = d(v, E, R.value, w);
            if (V === null) {
                E === null && (E = D);
                break
            }
            e && E && V.alternate === null && t(v, E),
                h = o(V, h, P),
                C === null ? x = V : C.sibling = V,
                C = V,
                E = D
        }
        if (R.done)
            return n(v, E),
                ae && Mn(v, P),
                x;
        if (E === null) {
            for (; !R.done; P++,
                R = p.next())
                R = f(v, R.value, w),
                    R !== null && (h = o(R, h, P),
                        C === null ? x = R : C.sibling = R,
                        C = R);
            return ae && Mn(v, P),
                x
        }
        for (E = r(v, E); !R.done; P++,
            R = p.next())
            R = m(E, v, P, R.value, w),
                R !== null && (e && R.alternate !== null && E.delete(R.key === null ? P : R.key),
                    h = o(R, h, P),
                    C === null ? x = R : C.sibling = R,
                    C = R);
        return e && E.forEach(function (M) {
            return t(v, M)
        }),
            ae && Mn(v, P),
            x
    }
    function S(v, h, p, w) {
        if (typeof p == "object" && p !== null && p.type === fr && p.key === null && (p = p.props.children),
            typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Po:
                    e: {
                        for (var x = p.key, C = h; C !== null;) {
                            if (C.key === x) {
                                if (x = p.type,
                                    x === fr) {
                                    if (C.tag === 7) {
                                        n(v, C.sibling),
                                            h = i(C, p.props.children),
                                            h.return = v,
                                            v = h;
                                        break e
                                    }
                                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === tn && sd(x) === C.type) {
                                    n(v, C.sibling),
                                        h = i(C, p.props),
                                        h.ref = oi(v, C, p),
                                        h.return = v,
                                        v = h;
                                    break e
                                }
                                n(v, C);
                                break
                            } else
                                t(v, C);
                            C = C.sibling
                        }
                        p.type === fr ? (h = Gn(p.props.children, v.mode, w, p.key),
                            h.return = v,
                            v = h) : (w = ns(p.type, p.key, p.props, null, v.mode, w),
                                w.ref = oi(v, h, p),
                                w.return = v,
                                v = w)
                    }
                    return s(v);
                case cr:
                    e: {
                        for (C = p.key; h !== null;) {
                            if (h.key === C)
                                if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                    n(v, h.sibling),
                                        h = i(h, p.children || []),
                                        h.return = v,
                                        v = h;
                                    break e
                                } else {
                                    n(v, h);
                                    break
                                }
                            else
                                t(v, h);
                            h = h.sibling
                        }
                        h = el(p, v.mode, w),
                            h.return = v,
                            v = h
                    }
                    return s(v);
                case tn:
                    return C = p._init,
                        S(v, h, C(p._payload), w)
            }
            if (di(p))
                return g(v, h, p, w);
            if (ei(p))
                return y(v, h, p, w);
            Oo(v, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
            h !== null && h.tag === 6 ? (n(v, h.sibling),
                h = i(h, p),
                h.return = v,
                v = h) : (n(v, h),
                    h = Ja(p, v.mode, w),
                    h.return = v,
                    v = h),
            s(v)) : n(v, h)
    }
    return S
}
var Fr = dm(!0)
    , hm = dm(!1)
    , Es = kn(null)
    , Ps = null
    , wr = null
    , sc = null;
function ac() {
    sc = wr = Ps = null
}
function lc(e) {
    var t = Es.current;
    re(Es),
        e._currentValue = t
}
function Ql(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function Nr(e, t) {
    Ps = e,
        sc = wr = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0),
            e.firstContext = null)
}
function ut(e) {
    var t = e._currentValue;
    if (sc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            wr === null) {
            if (Ps === null)
                throw Error(N(308));
            wr = e,
                Ps.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            wr = wr.next = e;
    return t
}
var Un = null;
function uc(e) {
    Un === null ? Un = [e] : Un.push(e)
}
function pm(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
        uc(t)) : (n.next = i.next,
            i.next = n),
        t.interleaved = n,
        Kt(e, r)
}
function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nn = !1;
function cc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function mm(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function Bt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        X & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            Kt(e, n)
    }
    return i = r.interleaved,
        i === null ? (t.next = t,
            uc(r)) : (t.next = i.next,
                i.next = t),
        r.interleaved = t,
        Kt(e, n)
}
function bo(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Xu(e, n)
    }
}
function ad(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var i = null
            , o = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                    n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Ts(e, t, n, r) {
    var i = e.updateQueue;
    nn = !1;
    var o = i.firstBaseUpdate
        , s = i.lastBaseUpdate
        , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
            , u = l.next;
        l.next = null,
            s === null ? o = u : s.next = u,
            s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
            a = c.lastBaseUpdate,
            a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
                c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
            c = u = l = null,
            a = o;
        do {
            var d = a.lane
                , m = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                        , y = a;
                    switch (d = t,
                    m = n,
                    y.tag) {
                        case 1:
                            if (g = y.payload,
                                typeof g == "function") {
                                f = g.call(m, f, d);
                                break e
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = y.payload,
                                d = typeof g == "function" ? g.call(m, f, d) : g,
                                d == null)
                                break e;
                            f = de({}, f, d);
                            break e;
                        case 2:
                            nn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    d = i.effects,
                    d === null ? i.effects = [a] : d.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    c === null ? (u = c = m,
                        l = f) : c = c.next = m,
                    s |= d;
            if (a = a.next,
                a === null) {
                if (a = i.shared.pending,
                    a === null)
                    break;
                d = a,
                    a = d.next,
                    d.next = null,
                    i.lastBaseUpdate = d,
                    i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
            i.baseState = l,
            i.firstBaseUpdate = u,
            i.lastBaseUpdate = c,
            t = i.shared.interleaved,
            t !== null) {
            i = t;
            do
                s |= i.lane,
                    i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        Zn |= s,
            e.lanes = s,
            e.memoizedState = f
    }
}
function ld(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                    r = n,
                    typeof i != "function")
                    throw Error(N(191, i));
                i.call(r)
            }
        }
}
var lo = {}
    , kt = kn(lo)
    , $i = kn(lo)
    , Wi = kn(lo);
function $n(e) {
    if (e === lo)
        throw Error(N(174));
    return e
}
function fc(e, t) {
    switch (q(Wi, t),
    q($i, e),
    q(kt, lo),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = Ll(t, e)
    }
    re(kt),
        q(kt, t)
}
function zr() {
    re(kt),
        re($i),
        re(Wi)
}
function vm(e) {
    $n(Wi.current);
    var t = $n(kt.current)
        , n = Ll(t, e.type);
    t !== n && (q($i, e),
        q(kt, n))
}
function dc(e) {
    $i.current === e && (re(kt),
        re($i))
}
var ue = kn(0);
function Cs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Ya = [];
function hc() {
    for (var e = 0; e < Ya.length; e++)
        Ya[e]._workInProgressVersionPrimary = null;
    Ya.length = 0
}
var Zo = Zt.ReactCurrentDispatcher
    , Qa = Zt.ReactCurrentBatchConfig
    , bn = 0
    , fe = null
    , xe = null
    , Pe = null
    , ks = !1
    , xi = !1
    , Hi = 0
    , d1 = 0;
function _e() {
    throw Error(N(321))
}
function pc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!St(e[n], t[n]))
            return !1;
    return !0
}
function mc(e, t, n, r, i, o) {
    if (bn = o,
        fe = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Zo.current = e === null || e.memoizedState === null ? v1 : g1,
        e = n(r, i),
        xi) {
        o = 0;
        do {
            if (xi = !1,
                Hi = 0,
                25 <= o)
                throw Error(N(301));
            o += 1,
                Pe = xe = null,
                t.updateQueue = null,
                Zo.current = y1,
                e = n(r, i)
        } while (xi)
    }
    if (Zo.current = As,
        t = xe !== null && xe.next !== null,
        bn = 0,
        Pe = xe = fe = null,
        ks = !1,
        t)
        throw Error(N(300));
    return e
}
function vc() {
    var e = Hi !== 0;
    return Hi = 0,
        e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e,
        Pe
}
function ct() {
    if (xe === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = xe.next;
    var t = Pe === null ? fe.memoizedState : Pe.next;
    if (t !== null)
        Pe = t,
            xe = e;
    else {
        if (e === null)
            throw Error(N(310));
        xe = e,
            e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            },
            Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}
function Gi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Xa(e) {
    var t = ct()
        , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = xe
        , i = r.baseQueue
        , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
                o.next = s
        }
        r.baseQueue = i = o,
            n.pending = null
    }
    if (i !== null) {
        o = i.next,
            r = r.baseState;
        var a = s = null
            , l = null
            , u = o;
        do {
            var c = u.lane;
            if ((bn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                    r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                    s = r) : l = l.next = f,
                    fe.lanes |= c,
                    Zn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
            St(r, t.memoizedState) || ($e = !0),
            t.memoizedState = r,
            t.baseState = s,
            t.baseQueue = l,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        i = e;
        do
            o = i.lane,
                fe.lanes |= o,
                Zn |= o,
                i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ba(e) {
    var t = ct()
        , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , i = n.pending
        , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
                s = s.next;
        while (s !== i);
        St(o, t.memoizedState) || ($e = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
    }
    return [o, r]
}
function gm() { }
function ym(e, t) {
    var n = fe
        , r = ct()
        , i = t()
        , o = !St(r.memoizedState, i);
    if (o && (r.memoizedState = i,
        $e = !0),
        r = r.queue,
        gc(xm.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Ki(9, Sm.bind(null, n, r, i, t), void 0, null),
            Te === null)
            throw Error(N(349));
        bn & 30 || wm(n, t, i)
    }
    return i
}
function wm(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = fe.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            fe.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function Sm(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        Em(t) && Pm(e)
}
function xm(e, t, n) {
    return n(function () {
        Em(t) && Pm(e)
    })
}
function Em(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !St(e, n)
    } catch {
        return !0
    }
}
function Pm(e) {
    var t = Kt(e, 1);
    t !== null && wt(t, e, 1, -1)
}
function ud(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Gi,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = m1.bind(null, fe, e),
        [t.memoizedState, e]
}
function Ki(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = fe.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            fe.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function Tm() {
    return ct().memoizedState
}
function qo(e, t, n, r) {
    var i = Pt();
    fe.flags |= e,
        i.memoizedState = Ki(1 | t, n, void 0, r === void 0 ? null : r)
}
function ea(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
        var s = xe.memoizedState;
        if (o = s.destroy,
            r !== null && pc(r, s.deps)) {
            i.memoizedState = Ki(t, n, o, r);
            return
        }
    }
    fe.flags |= e,
        i.memoizedState = Ki(1 | t, n, o, r)
}
function cd(e, t) {
    return qo(8390656, 8, e, t)
}
function gc(e, t) {
    return ea(2048, 8, e, t)
}
function Cm(e, t) {
    return ea(4, 2, e, t)
}
function km(e, t) {
    return ea(4, 4, e, t)
}
function Am(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function Lm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        ea(4, 4, Am.bind(null, t, e), n)
}
function yc() { }
function _m(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function Rm(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pc(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function Nm(e, t, n) {
    return bn & 21 ? (St(n, t) || (n = jp(),
        fe.lanes |= n,
        Zn |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            $e = !0),
            e.memoizedState = n)
}
function h1(e, t) {
    var n = b;
    b = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Qa.transition;
    Qa.transition = {};
    try {
        e(!1),
            t()
    } finally {
        b = n,
            Qa.transition = r
    }
}
function Dm() {
    return ct().memoizedState
}
function p1(e, t, n) {
    var r = vn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        Vm(e))
        Om(t, n);
    else if (n = pm(e, t, n, r),
        n !== null) {
        var i = Ie();
        wt(n, e, r, i),
            Mm(n, t, r)
    }
}
function m1(e, t, n) {
    var r = vn(e)
        , i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Vm(e))
        Om(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
            try {
                var s = t.lastRenderedState
                    , a = o(s, n);
                if (i.hasEagerState = !0,
                    i.eagerState = a,
                    St(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                        uc(t)) : (i.next = l.next,
                            l.next = i),
                        t.interleaved = i;
                    return
                }
            } catch { } finally { }
        n = pm(e, t, i, r),
            n !== null && (i = Ie(),
                wt(n, e, r, i),
                Mm(n, t, r))
    }
}
function Vm(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}
function Om(e, t) {
    xi = ks = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function Mm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            Xu(e, n)
    }
}
var As = {
    readContext: ut,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
}
    , v1 = {
        readContext: ut,
        useCallback: function (e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: ut,
        useEffect: cd,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                qo(4194308, 4, Am.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return qo(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return qo(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Pt();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = Pt();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = p1.bind(null, fe, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Pt();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: ud,
        useDebugValue: yc,
        useDeferredValue: function (e) {
            return Pt().memoizedState = e
        },
        useTransition: function () {
            var e = ud(!1)
                , t = e[0];
            return e = h1.bind(null, e[1]),
                Pt().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = fe
                , i = Pt();
            if (ae) {
                if (n === void 0)
                    throw Error(N(407));
                n = n()
            } else {
                if (n = t(),
                    Te === null)
                    throw Error(N(349));
                bn & 30 || wm(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o,
                cd(xm.bind(null, r, o, e), [e]),
                r.flags |= 2048,
                Ki(9, Sm.bind(null, r, o, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = Pt()
                , t = Te.identifierPrefix;
            if (ae) {
                var n = jt
                    , r = Mt;
                n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Hi++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = d1++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , g1 = {
        readContext: ut,
        useCallback: _m,
        useContext: ut,
        useEffect: gc,
        useImperativeHandle: Lm,
        useInsertionEffect: Cm,
        useLayoutEffect: km,
        useMemo: Rm,
        useReducer: Xa,
        useRef: Tm,
        useState: function () {
            return Xa(Gi)
        },
        useDebugValue: yc,
        useDeferredValue: function (e) {
            var t = ct();
            return Nm(t, xe.memoizedState, e)
        },
        useTransition: function () {
            var e = Xa(Gi)[0]
                , t = ct().memoizedState;
            return [e, t]
        },
        useMutableSource: gm,
        useSyncExternalStore: ym,
        useId: Dm,
        unstable_isNewReconciler: !1
    }
    , y1 = {
        readContext: ut,
        useCallback: _m,
        useContext: ut,
        useEffect: gc,
        useImperativeHandle: Lm,
        useInsertionEffect: Cm,
        useLayoutEffect: km,
        useMemo: Rm,
        useReducer: ba,
        useRef: Tm,
        useState: function () {
            return ba(Gi)
        },
        useDebugValue: yc,
        useDeferredValue: function (e) {
            var t = ct();
            return xe === null ? t.memoizedState = e : Nm(t, xe.memoizedState, e)
        },
        useTransition: function () {
            var e = ba(Gi)[0]
                , t = ct().memoizedState;
            return [e, t]
        },
        useMutableSource: gm,
        useSyncExternalStore: ym,
        useId: Dm,
        unstable_isNewReconciler: !1
    };
function ht(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Xl(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : de({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ta = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? nr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie()
            , i = vn(e)
            , o = Bt(r, i);
        o.payload = t,
            n != null && (o.callback = n),
            t = pn(e, o, i),
            t !== null && (wt(t, e, i, r),
                bo(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ie()
            , i = vn(e)
            , o = Bt(r, i);
        o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = pn(e, o, i),
            t !== null && (wt(t, e, i, r),
                bo(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ie()
            , r = vn(e)
            , i = Bt(n, r);
        i.tag = 2,
            t != null && (i.callback = t),
            t = pn(e, i, r),
            t !== null && (wt(t, e, r, n),
                bo(t, e, r))
    }
};
function fd(e, t, n, r, i, o, s) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Fi(n, r) || !Fi(i, o) : !0
}
function jm(e, t, n) {
    var r = !1
        , i = Sn
        , o = t.contextType;
    return typeof o == "object" && o !== null ? o = ut(o) : (i = Ge(t) ? Qn : Ve.current,
        r = t.contextTypes,
        o = (r = r != null) ? jr(e, i) : Sn),
        t = new t(n, o),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = ta,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = i,
            e.__reactInternalMemoizedMaskedChildContext = o),
        t
}
function dd(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ta.enqueueReplaceState(t, t.state, null)
}
function bl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
        i.state = e.memoizedState,
        i.refs = {},
        cc(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ut(o) : (o = Ge(t) ? Qn : Ve.current,
        i.context = jr(e, o)),
        i.state = e.memoizedState,
        o = t.getDerivedStateFromProps,
        typeof o == "function" && (Xl(e, t, o, n),
            i.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && ta.enqueueReplaceState(i, i.state, null),
            Ts(e, n, i, r),
            i.state = e.memoizedState),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Br(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += Ky(r),
                r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Za(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Zl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var w1 = typeof WeakMap == "function" ? WeakMap : Map;
function Im(e, t, n) {
    n = Bt(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        _s || (_s = !0,
            au = r),
            Zl(e, t)
    }
        ,
        n
}
function Fm(e, t, n) {
    n = Bt(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }
            ,
            n.callback = function () {
                Zl(e, t)
            }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Zl(e, t),
            typeof r != "function" && (mn === null ? mn = new Set([this]) : mn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
        n
}
function hd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new w1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
            i === void 0 && (i = new Set,
                r.set(t, i));
    i.has(n) || (i.add(n),
        e = V1.bind(null, e, t, n),
        t.then(e, e))
}
function pd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function md(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = i,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1),
                t.tag = 2,
                pn(n, t, 1))),
            n.lanes |= 1),
            e)
}
var S1 = Zt.ReactCurrentOwner
    , $e = !1;
function je(e, t, n, r) {
    t.child = e === null ? hm(t, null, n, r) : Fr(t, e.child, n, r)
}
function vd(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Nr(t, i),
        r = mc(e, t, n, r, o, i),
        n = vc(),
        e !== null && !$e ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Yt(e, t, i)) : (ae && n && rc(t),
                t.flags |= 1,
                je(e, t, r, i),
                t.child)
}
function gd(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !kc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = o,
            zm(e, t, o, r, i)) : (e = ns(n.type, null, r, t, t.mode, i),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (o = e.child,
        !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Fi,
            n(s, r) && e.ref === t.ref)
            return Yt(e, t, i)
    }
    return t.flags |= 1,
        e = gn(o, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function zm(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Fi(o, r) && e.ref === t.ref)
            if ($e = !1,
                t.pendingProps = r = o,
                (e.lanes & i) !== 0)
                e.flags & 131072 && ($e = !0);
            else
                return t.lanes = e.lanes,
                    Yt(e, t, i)
    }
    return ql(e, t, n, r, i)
}
function Bm(e, t, n) {
    var r = t.pendingProps
        , i = r.children
        , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                q(xr, Qe),
                Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    q(xr, Qe),
                    Qe |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = o !== null ? o.baseLanes : n,
                q(xr, Qe),
                Qe |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
            t.memoizedState = null) : r = n,
            q(xr, Qe),
            Qe |= r;
    return je(e, t, i, n),
        t.child
}
function Um(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function ql(e, t, n, r, i) {
    var o = Ge(n) ? Qn : Ve.current;
    return o = jr(t, o),
        Nr(t, i),
        n = mc(e, t, n, r, o, i),
        r = vc(),
        e !== null && !$e ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~i,
            Yt(e, t, i)) : (ae && r && rc(t),
                t.flags |= 1,
                je(e, t, n, i),
                t.child)
}
function yd(e, t, n, r, i) {
    if (Ge(n)) {
        var o = !0;
        ws(t)
    } else
        o = !1;
    if (Nr(t, i),
        t.stateNode === null)
        Jo(e, t),
            jm(t, n, r),
            bl(t, n, r, i),
            r = !0;
    else if (e === null) {
        var s = t.stateNode
            , a = t.memoizedProps;
        s.props = a;
        var l = s.context
            , u = n.contextType;
        typeof u == "object" && u !== null ? u = ut(u) : (u = Ge(n) ? Qn : Ve.current,
            u = jr(t, u));
        var c = n.getDerivedStateFromProps
            , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && dd(t, s, r, u),
            nn = !1;
        var d = t.memoizedState;
        s.state = d,
            Ts(t, r, s, i),
            l = t.memoizedState,
            a !== r || d !== l || He.current || nn ? (typeof c == "function" && (Xl(t, n, c, r),
                l = t.memoizedState),
                (a = nn || fd(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                    typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = l),
                s.props = r,
                s.state = l,
                s.context = u,
                r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        s = t.stateNode,
            mm(e, t),
            a = t.memoizedProps,
            u = t.type === t.elementType ? a : ht(t.type, a),
            s.props = u,
            f = t.pendingProps,
            d = s.context,
            l = n.contextType,
            typeof l == "object" && l !== null ? l = ut(l) : (l = Ge(n) ? Qn : Ve.current,
                l = jr(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && dd(t, s, r, l),
            nn = !1,
            d = t.memoizedState,
            s.state = d,
            Ts(t, r, s, i);
        var g = t.memoizedState;
        a !== f || d !== g || He.current || nn ? (typeof m == "function" && (Xl(t, n, m, r),
            g = t.memoizedState),
            (u = nn || fd(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l),
                typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)),
                typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = g),
            s.props = r,
            s.state = g,
            s.context = l,
            r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Jl(e, t, n, r, o, i)
}
function Jl(e, t, n, r, i, o) {
    Um(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && rd(t, n, !1),
            Yt(e, t, o);
    r = t.stateNode,
        S1.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && s ? (t.child = Fr(t, e.child, null, o),
            t.child = Fr(t, null, a, o)) : je(e, t, a, o),
        t.memoizedState = r.state,
        i && rd(t, n, !0),
        t.child
}
function $m(e) {
    var t = e.stateNode;
    t.pendingContext ? nd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nd(e, t.context, !1),
        fc(e, t.containerInfo)
}
function wd(e, t, n, r, i) {
    return Ir(),
        oc(i),
        t.flags |= 256,
        je(e, t, n, r),
        t.child
}
var eu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function tu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Wm(e, t, n) {
    var r = t.pendingProps, i = ue.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? (o = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
        q(ue, i & 1),
        e === null)
        return Yl(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (s = r.children,
                        e = r.fallback,
                        o ? (r = t.mode,
                            o = t.child,
                            s = {
                                mode: "hidden",
                                children: s
                            },
                            !(r & 1) && o !== null ? (o.childLanes = 0,
                                o.pendingProps = s) : o = ia(s, r, 0, null),
                            e = Gn(e, r, n, null),
                            o.return = t,
                            e.return = t,
                            o.sibling = e,
                            t.child = o,
                            t.child.memoizedState = tu(n),
                            t.memoizedState = eu,
                            e) : wc(t, s));
    if (i = e.memoizedState,
        i !== null && (a = i.dehydrated,
            a !== null))
        return x1(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
            s = t.mode,
            i = e.child,
            a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = l,
            t.deletions = null) : (r = gn(i, l),
                r.subtreeFlags = i.subtreeFlags & 14680064),
            a !== null ? o = gn(a, o) : (o = Gn(o, s, n, null),
                o.flags |= 2),
            o.return = t,
            r.return = t,
            r.sibling = o,
            t.child = r,
            r = o,
            o = t.child,
            s = e.child.memoizedState,
            s = s === null ? tu(n) : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions
            },
            o.memoizedState = s,
            o.childLanes = e.childLanes & ~n,
            t.memoizedState = eu,
            r
    }
    return o = e.child,
        e = o.sibling,
        r = gn(o, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function wc(e, t) {
    return t = ia({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function Mo(e, t, n, r) {
    return r !== null && oc(r),
        Fr(t, e.child, null, n),
        e = wc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function x1(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Za(Error(N(422))),
            Mo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (o = r.fallback,
                    i = t.mode,
                    r = ia({
                        mode: "visible",
                        children: r.children
                    }, i, 0, null),
                    o = Gn(o, i, s, null),
                    o.flags |= 2,
                    r.return = t,
                    o.return = t,
                    r.sibling = o,
                    t.child = r,
                    t.mode & 1 && Fr(t, e.child, null, s),
                    t.child.memoizedState = tu(s),
                    t.memoizedState = eu,
                    o);
    if (!(t.mode & 1))
        return Mo(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            o = Error(N(419)),
            r = Za(o, r, void 0),
            Mo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
        $e || a) {
        if (r = Te,
            r !== null) {
            switch (s & -s) {
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
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
                i !== 0 && i !== o.retryLane && (o.retryLane = i,
                    Kt(e, i),
                    wt(r, e, i, -1))
        }
        return Cc(),
            r = Za(Error(N(421))),
            Mo(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = O1.bind(null, e),
        i._reactRetry = t,
        null) : (e = o.treeContext,
            Xe = hn(i.nextSibling),
            be = t,
            ae = !0,
            mt = null,
            e !== null && (rt[it++] = Mt,
                rt[it++] = jt,
                rt[it++] = Xn,
                Mt = e.id,
                jt = e.overflow,
                Xn = t),
            t = wc(t, r.children),
            t.flags |= 4096,
            t)
}
function Sd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Ql(e.return, t, n)
}
function qa(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = i)
}
function Hm(e, t, n) {
    var r = t.pendingProps
        , i = r.revealOrder
        , o = r.tail;
    if (je(e, t, r.children, n),
        r = ue.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Sd(e, n, t);
                else if (e.tag === 19)
                    Sd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (q(ue, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child,
                    i = null; n !== null;)
                    e = n.alternate,
                        e !== null && Cs(e) === null && (i = n),
                        n = n.sibling;
                n = i,
                    n === null ? (i = t.child,
                        t.child = null) : (i = n.sibling,
                            n.sibling = null),
                    qa(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null,
                    i = t.child,
                    t.child = null; i !== null;) {
                    if (e = i.alternate,
                        e !== null && Cs(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling,
                        i.sibling = n,
                        n = i,
                        i = e
                }
                qa(t, !0, n, null, o);
                break;
            case "together":
                qa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function Jo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        Zn |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
            n = gn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = gn(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function E1(e, t, n) {
    switch (t.tag) {
        case 3:
            $m(t),
                Ir();
            break;
        case 5:
            vm(t);
            break;
        case 1:
            Ge(t.type) && ws(t);
            break;
        case 4:
            fc(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , i = t.memoizedProps.value;
            q(Es, r._currentValue),
                r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (q(ue, ue.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? Wm(e, t, n) : (q(ue, ue.current & 1),
                        e = Yt(e, t, n),
                        e !== null ? e.sibling : null);
            q(ue, ue.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Hm(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
                i !== null && (i.rendering = null,
                    i.tail = null,
                    i.lastEffect = null),
                q(ue, ue.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Bm(e, t, n)
    }
    return Yt(e, t, n)
}
var Gm, nu, Km, Ym;
Gm = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
nu = function () { }
    ;
Km = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
            $n(kt.current);
        var o = null;
        switch (n) {
            case "input":
                i = Tl(e, i),
                    r = Tl(e, r),
                    o = [];
                break;
            case "select":
                i = de({}, i, {
                    value: void 0
                }),
                    r = de({}, r, {
                        value: void 0
                    }),
                    o = [];
                break;
            case "textarea":
                i = Al(e, i),
                    r = Al(e, r),
                    o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gs)
        }
        _l(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                            n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ni.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                                n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                                n[s] = l[s])
                    } else
                        n || (o || (o = []),
                            o.push(u, n)),
                            n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                        a = a ? a.__html : void 0,
                        l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ni.hasOwnProperty(u) ? (l != null && u === "onScroll" && te("scroll", e),
                            o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
    ;
Ym = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function si(e, t) {
    if (!ae)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 14680064,
                r |= i.flags & 14680064,
                i.return = e,
                i = i.sibling;
    else
        for (i = e.child; i !== null;)
            n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function P1(e, t, n) {
    var r = t.pendingProps;
    switch (ic(t),
    t.tag) {
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
            return Re(t),
                null;
        case 1:
            return Ge(t.type) && ys(),
                Re(t),
                null;
        case 3:
            return r = t.stateNode,
                zr(),
                re(He),
                re(Ve),
                hc(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (Vo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    mt !== null && (cu(mt),
                        mt = null))),
                nu(e, t),
                Re(t),
                null;
        case 5:
            dc(t);
            var i = $n(Wi.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Km(e, t, n, r, i),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(N(166));
                    return Re(t),
                        null
                }
                if (e = $n(kt.current),
                    Vo(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Tt] = t,
                    r[Ui] = o,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            te("cancel", r),
                                te("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            te("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < pi.length; i++)
                                te(pi[i], r);
                            break;
                        case "source":
                            te("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            te("error", r),
                                te("load", r);
                            break;
                        case "details":
                            te("toggle", r);
                            break;
                        case "input":
                            _f(r, o),
                                te("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                                te("invalid", r);
                            break;
                        case "textarea":
                            Nf(r, o),
                                te("invalid", r)
                    }
                    _l(n, o),
                        i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Do(r.textContent, a, e),
                                i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Do(r.textContent, a, e),
                                    i = ["children", "" + a]) : Ni.hasOwnProperty(s) && a != null && s === "onScroll" && te("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            To(r),
                                Rf(r, o, !0);
                            break;
                        case "textarea":
                            To(r),
                                Df(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = gs)
                    }
                    r = i,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = xp(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                                n === "select" && (s = e,
                                    r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                        e[Tt] = t,
                        e[Ui] = r,
                        Gm(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (s = Rl(n, r),
                        n) {
                            case "dialog":
                                te("cancel", e),
                                    te("close", e),
                                    i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                te("load", e),
                                    i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < pi.length; i++)
                                    te(pi[i], e);
                                i = r;
                                break;
                            case "source":
                                te("error", e),
                                    i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                te("error", e),
                                    te("load", e),
                                    i = r;
                                break;
                            case "details":
                                te("toggle", e),
                                    i = r;
                                break;
                            case "input":
                                _f(e, r),
                                    i = Tl(e, r),
                                    te("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    i = de({}, r, {
                                        value: void 0
                                    }),
                                    te("invalid", e);
                                break;
                            case "textarea":
                                Nf(e, r),
                                    i = Al(e, r),
                                    te("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        _l(n, i),
                            a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? Tp(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                                    l != null && Ep(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Di(e, l) : typeof l == "number" && Di(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ni.hasOwnProperty(o) ? l != null && o === "onScroll" && te("scroll", e) : l != null && Wu(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                To(e),
                                    Rf(e, r, !1);
                                break;
                            case "textarea":
                                To(e),
                                    Df(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + wn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    o = r.value,
                                    o != null ? Ar(e, !!r.multiple, o, !1) : r.defaultValue != null && Ar(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = gs)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return Re(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Ym(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(N(166));
                if (n = $n(Wi.current),
                    $n(kt.current),
                    Vo(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Tt] = t,
                        (o = r.nodeValue !== n) && (e = be,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Do(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[Tt] = t,
                        t.stateNode = r
            }
            return Re(t),
                null;
        case 13:
            if (re(ue),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ae && Xe !== null && t.mode & 1 && !(t.flags & 128))
                    fm(),
                        Ir(),
                        t.flags |= 98560,
                        o = !1;
                else if (o = Vo(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(N(318));
                        if (o = t.memoizedState,
                            o = o !== null ? o.dehydrated : null,
                            !o)
                            throw Error(N(317));
                        o[Tt] = t
                    } else
                        Ir(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    Re(t),
                        o = !1
                } else
                    mt !== null && (cu(mt),
                        mt = null),
                        o = !0;
                if (!o)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || ue.current & 1 ? Ee === 0 && (Ee = 3) : Cc())),
                    t.updateQueue !== null && (t.flags |= 4),
                    Re(t),
                    null);
        case 4:
            return zr(),
                nu(e, t),
                e === null && zi(t.stateNode.containerInfo),
                Re(t),
                null;
        case 10:
            return lc(t.type._context),
                Re(t),
                null;
        case 17:
            return Ge(t.type) && ys(),
                Re(t),
                null;
        case 19:
            if (re(ue),
                o = t.memoizedState,
                o === null)
                return Re(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                s = o.rendering,
                s === null)
                if (r)
                    si(o, !1);
                else {
                    if (Ee !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Cs(e),
                                s !== null) {
                                for (t.flags |= 128,
                                    si(o, !1),
                                    r = s.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    o = n,
                                        e = r,
                                        o.flags &= 14680066,
                                        s = o.alternate,
                                        s === null ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = s.childLanes,
                                                o.lanes = s.lanes,
                                                o.child = s.child,
                                                o.subtreeFlags = 0,
                                                o.deletions = null,
                                                o.memoizedProps = s.memoizedProps,
                                                o.memoizedState = s.memoizedState,
                                                o.updateQueue = s.updateQueue,
                                                o.type = s.type,
                                                e = s.dependencies,
                                                o.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return q(ue, ue.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && me() > Ur && (t.flags |= 128,
                        r = !0,
                        si(o, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Cs(s),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            si(o, !0),
                            o.tail === null && o.tailMode === "hidden" && !s.alternate && !ae)
                            return Re(t),
                                null
                    } else
                        2 * me() - o.renderingStartTime > Ur && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            si(o, !1),
                            t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child,
                    t.child = s) : (n = o.last,
                        n !== null ? n.sibling = s : t.child = s,
                        o.last = s)
            }
            return o.tail !== null ? (t = o.tail,
                o.rendering = t,
                o.tail = t.sibling,
                o.renderingStartTime = me(),
                t.sibling = null,
                n = ue.current,
                q(ue, r ? n & 1 | 2 : n & 1),
                t) : (Re(t),
                    null);
        case 22:
        case 23:
            return Tc(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Qe & 1073741824 && (Re(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}
function T1(e, t) {
    switch (ic(t),
    t.tag) {
        case 1:
            return Ge(t.type) && ys(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return zr(),
                re(He),
                re(Ve),
                hc(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return dc(t),
                null;
        case 13:
            if (re(ue),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(N(340));
                Ir()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return re(ue),
                null;
        case 4:
            return zr(),
                null;
        case 10:
            return lc(t.type._context),
                null;
        case 22:
        case 23:
            return Tc(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var jo = !1
    , De = !1
    , C1 = typeof WeakSet == "function" ? WeakSet : Set
    , F = null;
function Sr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function ru(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var xd = !1;
function k1(e, t) {
    if (Bl = ps,
        e = qp(),
        nc(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                        , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                        , a = -1
                        , l = -1
                        , u = 0
                        , c = 0
                        , f = e
                        , d = null;
                    t: for (; ;) {
                        for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i),
                            f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                            f.nodeType === 3 && (s += f.nodeValue.length),
                            (m = f.firstChild) !== null;)
                            d = f,
                                f = m;
                        for (; ;) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (a = s),
                                d === o && ++c === r && (l = s),
                                (m = f.nextSibling) !== null)
                                break;
                            f = d,
                                d = f.parentNode
                        }
                        f = m
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ul = {
        focusedElem: e,
        selectionRange: n
    },
        ps = !1,
        F = t; F !== null;)
        if (t = F,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                F = e;
        else
            for (; F !== null;) {
                t = F;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (g !== null) {
                                    var y = g.memoizedProps
                                        , S = g.memoizedState
                                        , v = t.stateNode
                                        , h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ht(t.type, y), S);
                                    v.__reactInternalSnapshotBeforeUpdate = h
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(N(163))
                        }
                } catch (w) {
                    pe(t, t.return, w)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        F = e;
                    break
                }
                F = t.return
            }
    return g = xd,
        xd = !1,
        g
}
function Ei(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                    o !== void 0 && ru(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function na(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function iu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Qm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Qm(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[Tt],
                delete t[Ui],
                delete t[Hl],
                delete t[l1],
                delete t[u1])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function Xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ed(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = gs));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (ou(e, t, n),
            e = e.sibling; e !== null;)
            ou(e, t, n),
                e = e.sibling
}
function su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (su(e, t, n),
            e = e.sibling; e !== null;)
            su(e, t, n),
                e = e.sibling
}
var Ce = null
    , pt = !1;
function qt(e, t, n) {
    for (n = n.child; n !== null;)
        bm(e, t, n),
            n = n.sibling
}
function bm(e, t, n) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
        try {
            Ct.onCommitFiberUnmount(Qs, n)
        } catch { }
    switch (n.tag) {
        case 5:
            De || Sr(n, t);
        case 6:
            var r = Ce
                , i = pt;
            Ce = null,
                qt(e, t, n),
                Ce = r,
                pt = i,
                Ce !== null && (pt ? (e = Ce,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
            break;
        case 18:
            Ce !== null && (pt ? (e = Ce,
                n = n.stateNode,
                e.nodeType === 8 ? Ga(e.parentNode, n) : e.nodeType === 1 && Ga(e, n),
                ji(e)) : Ga(Ce, n.stateNode));
            break;
        case 4:
            r = Ce,
                i = pt,
                Ce = n.stateNode.containerInfo,
                pt = !0,
                qt(e, t, n),
                Ce = r,
                pt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!De && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                i = r = r.next;
                do {
                    var o = i
                        , s = o.destroy;
                    o = o.tag,
                        s !== void 0 && (o & 2 || o & 4) && ru(n, t, s),
                        i = i.next
                } while (i !== r)
            }
            qt(e, t, n);
            break;
        case 1:
            if (!De && (Sr(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    pe(n, t, a)
                }
            qt(e, t, n);
            break;
        case 21:
            qt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (De = (r = De) || n.memoizedState !== null,
                qt(e, t, n),
                De = r) : qt(e, t, n);
            break;
        default:
            qt(e, t, n)
    }
}
function Pd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new C1),
            t.forEach(function (r) {
                var i = M1.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(i, i))
            })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                    , s = t
                    , a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Ce = a.stateNode,
                                pt = !1;
                            break e;
                        case 3:
                            Ce = a.stateNode.containerInfo,
                                pt = !0;
                            break e;
                        case 4:
                            Ce = a.stateNode.containerInfo,
                                pt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Ce === null)
                    throw Error(N(160));
                bm(o, s, i),
                    Ce = null,
                    pt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                    i.return = null
            } catch (u) {
                pe(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            Zm(t, e),
                t = t.sibling
}
function Zm(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e),
                Et(e),
                r & 4) {
                try {
                    Ei(3, e, e.return),
                        na(3, e)
                } catch (y) {
                    pe(e, e.return, y)
                }
                try {
                    Ei(5, e, e.return)
                } catch (y) {
                    pe(e, e.return, y)
                }
            }
            break;
        case 1:
            dt(t, e),
                Et(e),
                r & 512 && n !== null && Sr(n, n.return);
            break;
        case 5:
            if (dt(t, e),
                Et(e),
                r & 512 && n !== null && Sr(n, n.return),
                e.flags & 32) {
                var i = e.stateNode;
                try {
                    Di(i, "")
                } catch (y) {
                    pe(e, e.return, y)
                }
            }
            if (r & 4 && (i = e.stateNode,
                i != null)) {
                var o = e.memoizedProps
                    , s = n !== null ? n.memoizedProps : o
                    , a = e.type
                    , l = e.updateQueue;
                if (e.updateQueue = null,
                    l !== null)
                    try {
                        a === "input" && o.type === "radio" && o.name != null && wp(i, o),
                            Rl(a, s);
                        var u = Rl(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var c = l[s]
                                , f = l[s + 1];
                            c === "style" ? Tp(i, f) : c === "dangerouslySetInnerHTML" ? Ep(i, f) : c === "children" ? Di(i, f) : Wu(i, c, f, u)
                        }
                        switch (a) {
                            case "input":
                                Cl(i, o);
                                break;
                            case "textarea":
                                Sp(i, o);
                                break;
                            case "select":
                                var d = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var m = o.value;
                                m != null ? Ar(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? Ar(i, !!o.multiple, o.defaultValue, !0) : Ar(i, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        i[Ui] = o
                    } catch (y) {
                        pe(e, e.return, y)
                    }
            }
            break;
        case 6:
            if (dt(t, e),
                Et(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(N(162));
                i = e.stateNode,
                    o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (y) {
                    pe(e, e.return, y)
                }
            }
            break;
        case 3:
            if (dt(t, e),
                Et(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    ji(t.containerInfo)
                } catch (y) {
                    pe(e, e.return, y)
                }
            break;
        case 4:
            dt(t, e),
                Et(e);
            break;
        case 13:
            dt(t, e),
                Et(e),
                i = e.child,
                i.flags & 8192 && (o = i.memoizedState !== null,
                    i.stateNode.isHidden = o,
                    !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ec = me())),
                r & 4 && Pd(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (De = (u = De) || c,
                    dt(t, e),
                    De = u) : dt(t, e),
                Et(e),
                r & 8192) {
                if (u = e.memoizedState !== null,
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (F = e,
                        c = e.child; c !== null;) {
                        for (f = F = c; F !== null;) {
                            switch (d = F,
                            m = d.child,
                            d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ei(4, d, d.return);
                                    break;
                                case 1:
                                    Sr(d, d.return);
                                    var g = d.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = d,
                                            n = d.return;
                                        try {
                                            t = r,
                                                g.props = t.memoizedProps,
                                                g.state = t.memoizedState,
                                                g.componentWillUnmount()
                                        } catch (y) {
                                            pe(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Sr(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Cd(f);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = d,
                                F = m) : Cd(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null,
                    f = e; ;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode,
                                    u ? (o = i.style,
                                        typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                                            l = f.memoizedProps.style,
                                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                                            a.style.display = Pp("display", s))
                            } catch (y) {
                                pe(e, e.return, y)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (y) {
                                pe(e, e.return, y)
                            }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f,
                            f = f.child;
                        continue
                    }
                    if (f === e)
                        break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e)
                            break e;
                        c === f && (c = null),
                            f = f.return
                    }
                    c === f && (c = null),
                        f.sibling.return = f.return,
                        f = f.sibling
                }
            }
            break;
        case 19:
            dt(t, e),
                Et(e),
                r & 4 && Pd(e);
            break;
        case 21:
            break;
        default:
            dt(t, e),
                Et(e)
    }
}
function Et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Di(i, ""),
                        r.flags &= -33);
                    var o = Ed(e);
                    su(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo
                        , a = Ed(e);
                    ou(e, a, s);
                    break;
                default:
                    throw Error(N(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function A1(e, t, n) {
    F = e,
        qm(e)
}
function qm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null;) {
        var i = F
            , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || jo;
            if (!s) {
                var a = i.alternate
                    , l = a !== null && a.memoizedState !== null || De;
                a = jo;
                var u = De;
                if (jo = s,
                    (De = l) && !u)
                    for (F = i; F !== null;)
                        s = F,
                            l = s.child,
                            s.tag === 22 && s.memoizedState !== null ? kd(i) : l !== null ? (l.return = s,
                                F = l) : kd(i);
                for (; o !== null;)
                    F = o,
                        qm(o),
                        o = o.sibling;
                F = i,
                    jo = a,
                    De = u
            }
            Td(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
                F = o) : Td(e)
    }
}
function Td(e) {
    for (; F !== null;) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            De || na(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !De)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && ld(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                ld(t, s, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src)
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
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && ji(f)
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
                            throw Error(N(163))
                    }
                De || t.flags & 512 && iu(t)
            } catch (d) {
                pe(t, t.return, d)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                F = n;
            break
        }
        F = t.return
    }
}
function Cd(e) {
    for (; F !== null;) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                F = n;
            break
        }
        F = t.return
    }
}
function kd(e) {
    for (; F !== null;) {
        var t = F;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        na(4, t)
                    } catch (l) {
                        pe(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            pe(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        iu(t)
                    } catch (l) {
                        pe(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        iu(t)
                    } catch (l) {
                        pe(t, s, l)
                    }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                F = a;
            break
        }
        F = t.return
    }
}
var L1 = Math.ceil
    , Ls = Zt.ReactCurrentDispatcher
    , Sc = Zt.ReactCurrentOwner
    , lt = Zt.ReactCurrentBatchConfig
    , X = 0
    , Te = null
    , we = null
    , ke = 0
    , Qe = 0
    , xr = kn(0)
    , Ee = 0
    , Yi = null
    , Zn = 0
    , ra = 0
    , xc = 0
    , Pi = null
    , Ue = null
    , Ec = 0
    , Ur = 1 / 0
    , Dt = null
    , _s = !1
    , au = null
    , mn = null
    , Io = !1
    , ln = null
    , Rs = 0
    , Ti = 0
    , lu = null
    , es = -1
    , ts = 0;
function Ie() {
    return X & 6 ? me() : es !== -1 ? es : es = me()
}
function vn(e) {
    return e.mode & 1 ? X & 2 && ke !== 0 ? ke & -ke : f1.transition !== null ? (ts === 0 && (ts = jp()),
        ts) : (e = b,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Wp(e.type)),
            e) : 1
}
function wt(e, t, n, r) {
    if (50 < Ti)
        throw Ti = 0,
        lu = null,
        Error(N(185));
    oo(e, n, r),
        (!(X & 2) || e !== Te) && (e === Te && (!(X & 2) && (ra |= n),
            Ee === 4 && sn(e, ke)),
            Ke(e, r),
            n === 1 && X === 0 && !(t.mode & 1) && (Ur = me() + 500,
                Js && An()))
}
function Ke(e, t) {
    var n = e.callbackNode;
    f0(e, t);
    var r = hs(e, e === Te ? ke : 0);
    if (r === 0)
        n !== null && Mf(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && Mf(n),
            t === 1)
            e.tag === 0 ? c1(Ad.bind(null, e)) : lm(Ad.bind(null, e)),
                s1(function () {
                    !(X & 6) && An()
                }),
                n = null;
        else {
            switch (Ip(r)) {
                case 1:
                    n = Qu;
                    break;
                case 4:
                    n = Op;
                    break;
                case 16:
                    n = ds;
                    break;
                case 536870912:
                    n = Mp;
                    break;
                default:
                    n = ds
            }
            n = sv(n, Jm.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function Jm(e, t) {
    if (es = -1,
        ts = 0,
        X & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (Dr() && e.callbackNode !== n)
        return null;
    var r = hs(e, e === Te ? ke : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ns(e, r);
    else {
        t = r;
        var i = X;
        X |= 2;
        var o = tv();
        (Te !== e || ke !== t) && (Dt = null,
            Ur = me() + 500,
            Hn(e, t));
        do
            try {
                N1();
                break
            } catch (a) {
                ev(e, a)
            }
        while (!0);
        ac(),
            Ls.current = o,
            X = i,
            we !== null ? t = 0 : (Te = null,
                ke = 0,
                t = Ee)
    }
    if (t !== 0) {
        if (t === 2 && (i = Ml(e),
            i !== 0 && (r = i,
                t = uu(e, i))),
            t === 1)
            throw n = Yi,
            Hn(e, 0),
            sn(e, r),
            Ke(e, me()),
            n;
        if (t === 6)
            sn(e, r);
        else {
            if (i = e.current.alternate,
                !(r & 30) && !_1(i) && (t = Ns(e, r),
                    t === 2 && (o = Ml(e),
                        o !== 0 && (r = o,
                            t = uu(e, o))),
                    t === 1))
                throw n = Yi,
                Hn(e, 0),
                sn(e, r),
                Ke(e, me()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    jn(e, Ue, Dt);
                    break;
                case 3:
                    if (sn(e, r),
                        (r & 130023424) === r && (t = Ec + 500 - me(),
                            10 < t)) {
                        if (hs(e, 0) !== 0)
                            break;
                        if (i = e.suspendedLanes,
                            (i & r) !== r) {
                            Ie(),
                                e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Wl(jn.bind(null, e, Ue, Dt), t);
                        break
                    }
                    jn(e, Ue, Dt);
                    break;
                case 4:
                    if (sn(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        i = -1; 0 < r;) {
                        var s = 31 - yt(r);
                        o = 1 << s,
                            s = t[s],
                            s > i && (i = s),
                            r &= ~o
                    }
                    if (r = i,
                        r = me() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * L1(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Wl(jn.bind(null, e, Ue, Dt), r);
                        break
                    }
                    jn(e, Ue, Dt);
                    break;
                case 5:
                    jn(e, Ue, Dt);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Ke(e, me()),
        e.callbackNode === n ? Jm.bind(null, e) : null
}
function uu(e, t) {
    var n = Pi;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
        e = Ns(e, t),
        e !== 2 && (t = Ue,
            Ue = n,
            t !== null && cu(t)),
        e
}
function cu(e) {
    Ue === null ? Ue = e : Ue.push.apply(Ue, e)
}
function _1(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!St(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function sn(e, t) {
    for (t &= ~xc,
        t &= ~ra,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - yt(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Ad(e) {
    if (X & 6)
        throw Error(N(327));
    Dr();
    var t = hs(e, 0);
    if (!(t & 1))
        return Ke(e, me()),
            null;
    var n = Ns(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ml(e);
        r !== 0 && (t = r,
            n = uu(e, r))
    }
    if (n === 1)
        throw n = Yi,
        Hn(e, 0),
        sn(e, t),
        Ke(e, me()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        jn(e, Ue, Dt),
        Ke(e, me()),
        null
}
function Pc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
            X === 0 && (Ur = me() + 500,
                Js && An())
    }
}
function qn(e) {
    ln !== null && ln.tag === 0 && !(X & 6) && Dr();
    var t = X;
    X |= 1;
    var n = lt.transition
        , r = b;
    try {
        if (lt.transition = null,
            b = 1,
            e)
            return e()
    } finally {
        b = r,
            lt.transition = n,
            X = t,
            !(X & 6) && An()
    }
}
function Tc() {
    Qe = xr.current,
        re(xr)
}
function Hn(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        o1(n)),
        we !== null)
        for (n = we.return; n !== null;) {
            var r = n;
            switch (ic(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && ys();
                    break;
                case 3:
                    zr(),
                        re(He),
                        re(Ve),
                        hc();
                    break;
                case 5:
                    dc(r);
                    break;
                case 4:
                    zr();
                    break;
                case 13:
                    re(ue);
                    break;
                case 19:
                    re(ue);
                    break;
                case 10:
                    lc(r.type._context);
                    break;
                case 22:
                case 23:
                    Tc()
            }
            n = n.return
        }
    if (Te = e,
        we = e = gn(e.current, null),
        ke = Qe = t,
        Ee = 0,
        Yi = null,
        xc = ra = Zn = 0,
        Ue = Pi = null,
        Un !== null) {
        for (t = 0; t < Un.length; t++)
            if (n = Un[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var i = r.next
                    , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                        r.next = s
                }
                n.pending = r
            }
        Un = null
    }
    return e
}
function ev(e, t) {
    do {
        var n = we;
        try {
            if (ac(),
                Zo.current = As,
                ks) {
                for (var r = fe.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                        r = r.next
                }
                ks = !1
            }
            if (bn = 0,
                Pe = xe = fe = null,
                xi = !1,
                Hi = 0,
                Sc.current = null,
                n === null || n.return === null) {
                Ee = 1,
                    Yi = t,
                    we = null;
                break
            }
            e: {
                var o = e
                    , s = n.return
                    , a = n
                    , l = t;
                if (t = ke,
                    a.flags |= 32768,
                    l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                        , c = a
                        , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                            c.memoizedState = d.memoizedState,
                            c.lanes = d.lanes) : (c.updateQueue = null,
                                c.memoizedState = null)
                    }
                    var m = pd(s);
                    if (m !== null) {
                        m.flags &= -257,
                            md(m, s, a, o, t),
                            m.mode & 1 && hd(o, u, t),
                            t = m,
                            l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(l),
                                t.updateQueue = y
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hd(o, u, t),
                                Cc();
                            break e
                        }
                        l = Error(N(426))
                    }
                } else if (ae && a.mode & 1) {
                    var S = pd(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            md(S, s, a, o, t),
                            oc(Br(l, a));
                        break e
                    }
                }
                o = l = Br(l, a),
                    Ee !== 4 && (Ee = 2),
                    Pi === null ? Pi = [o] : Pi.push(o),
                    o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536,
                                t &= -t,
                                o.lanes |= t;
                            var v = Im(o, l, t);
                            ad(o, v);
                            break e;
                        case 1:
                            a = l;
                            var h = o.type
                                , p = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (mn === null || !mn.has(p)))) {
                                o.flags |= 65536,
                                    t &= -t,
                                    o.lanes |= t;
                                var w = Fm(o, a, t);
                                ad(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            rv(n)
        } catch (x) {
            t = x,
                we === n && n !== null && (we = n = n.return);
            continue
        }
        break
    } while (!0)
}
function tv() {
    var e = Ls.current;
    return Ls.current = As,
        e === null ? As : e
}
function Cc() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
        Te === null || !(Zn & 268435455) && !(ra & 268435455) || sn(Te, ke)
}
function Ns(e, t) {
    var n = X;
    X |= 2;
    var r = tv();
    (Te !== e || ke !== t) && (Dt = null,
        Hn(e, t));
    do
        try {
            R1();
            break
        } catch (i) {
            ev(e, i)
        }
    while (!0);
    if (ac(),
        X = n,
        Ls.current = r,
        we !== null)
        throw Error(N(261));
    return Te = null,
        ke = 0,
        Ee
}
function R1() {
    for (; we !== null;)
        nv(we)
}
function N1() {
    for (; we !== null && !n0();)
        nv(we)
}
function nv(e) {
    var t = ov(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
        t === null ? rv(e) : we = t,
        Sc.current = null
}
function rv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = T1(n, t),
                n !== null) {
                n.flags &= 32767,
                    we = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                Ee = 6,
                    we = null;
                return
            }
        } else if (n = P1(n, t, Qe),
            n !== null) {
            we = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Ee === 0 && (Ee = 5)
}
function jn(e, t, n) {
    var r = b
        , i = lt.transition;
    try {
        lt.transition = null,
            b = 1,
            D1(e, t, n, r)
    } finally {
        lt.transition = i,
            b = r
    }
    return null
}
function D1(e, t, n, r) {
    do
        Dr();
    while (ln !== null);
    if (X & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (d0(e, o),
        e === Te && (we = Te = null,
            ke = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Io || (Io = !0,
            sv(ds, function () {
                return Dr(),
                    null
            })),
        o = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || o) {
        o = lt.transition,
            lt.transition = null;
        var s = b;
        b = 1;
        var a = X;
        X |= 4,
            Sc.current = null,
            k1(e, n),
            Zm(n, e),
            q0(Ul),
            ps = !!Bl,
            Ul = Bl = null,
            e.current = n,
            A1(n),
            r0(),
            X = a,
            b = s,
            lt.transition = o
    } else
        e.current = n;
    if (Io && (Io = !1,
        ln = e,
        Rs = i),
        o = e.pendingLanes,
        o === 0 && (mn = null),
        s0(n.stateNode),
        Ke(e, me()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            i = t[n],
                r(i.value, {
                    componentStack: i.stack,
                    digest: i.digest
                });
    if (_s)
        throw _s = !1,
        e = au,
        au = null,
        e;
    return Rs & 1 && e.tag !== 0 && Dr(),
        o = e.pendingLanes,
        o & 1 ? e === lu ? Ti++ : (Ti = 0,
            lu = e) : Ti = 0,
        An(),
        null
}
function Dr() {
    if (ln !== null) {
        var e = Ip(Rs)
            , t = lt.transition
            , n = b;
        try {
            if (lt.transition = null,
                b = 16 > e ? 16 : e,
                ln === null)
                var r = !1;
            else {
                if (e = ln,
                    ln = null,
                    Rs = 0,
                    X & 6)
                    throw Error(N(331));
                var i = X;
                for (X |= 4,
                    F = e.current; F !== null;) {
                    var o = F
                        , s = o.child;
                    if (F.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null;) {
                                    var c = F;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ei(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                            F = f;
                                    else
                                        for (; F !== null;) {
                                            c = F;
                                            var d = c.sibling
                                                , m = c.return;
                                            if (Qm(c),
                                                c === u) {
                                                F = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m,
                                                    F = d;
                                                break
                                            }
                                            F = m
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                            y = S
                                    } while (y !== null)
                                }
                            }
                            F = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                            F = s;
                    else
                        e: for (; F !== null;) {
                            if (o = F,
                                o.flags & 2048)
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ei(9, o, o.return)
                                }
                            var v = o.sibling;
                            if (v !== null) {
                                v.return = o.return,
                                    F = v;
                                break e
                            }
                            F = o.return
                        }
                }
                var h = e.current;
                for (F = h; F !== null;) {
                    s = F;
                    var p = s.child;
                    if (s.subtreeFlags & 2064 && p !== null)
                        p.return = s,
                            F = p;
                    else
                        e: for (s = h; F !== null;) {
                            if (a = F,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            na(9, a)
                                    }
                                } catch (x) {
                                    pe(a, a.return, x)
                                }
                            if (a === s) {
                                F = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                    F = w;
                                break e
                            }
                            F = a.return
                        }
                }
                if (X = i,
                    An(),
                    Ct && typeof Ct.onPostCommitFiberRoot == "function")
                    try {
                        Ct.onPostCommitFiberRoot(Qs, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            b = n,
                lt.transition = t
        }
    }
    return !1
}
function Ld(e, t, n) {
    t = Br(n, t),
        t = Im(e, t, 1),
        e = pn(e, t, 1),
        t = Ie(),
        e !== null && (oo(e, 1, t),
            Ke(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        Ld(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ld(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
                    e = Br(n, e),
                        e = Fm(t, e, 1),
                        t = pn(t, e, 1),
                        e = Ie(),
                        t !== null && (oo(t, 1, e),
                            Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function V1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = Ie(),
        e.pingedLanes |= e.suspendedLanes & n,
        Te === e && (ke & n) === n && (Ee === 4 || Ee === 3 && (ke & 130023424) === ke && 500 > me() - Ec ? Hn(e, 0) : xc |= n),
        Ke(e, t)
}
function iv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ao,
        Ao <<= 1,
        !(Ao & 130023424) && (Ao = 4194304)) : t = 1);
    var n = Ie();
    e = Kt(e, t),
        e !== null && (oo(e, t, n),
            Ke(e, n))
}
function O1(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        iv(e, n)
}
function M1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t),
        iv(e, n)
}
var ov;
ov = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || He.current)
            $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return $e = !1,
                    E1(e, t, n);
            $e = !!(e.flags & 131072)
        }
    else
        $e = !1,
            ae && t.flags & 1048576 && um(t, xs, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            Jo(e, t),
                e = t.pendingProps;
            var i = jr(t, Ve.current);
            Nr(t, n),
                i = mc(null, t, r, e, i, n);
            var o = vc();
            return t.flags |= 1,
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Ge(r) ? (o = !0,
                        ws(t)) : o = !1,
                    t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                    cc(t),
                    i.updater = ta,
                    t.stateNode = i,
                    i._reactInternals = t,
                    bl(t, r, e, n),
                    t = Jl(null, t, r, !0, o, n)) : (t.tag = 0,
                        ae && o && rc(t),
                        je(null, t, i, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (Jo(e, t),
                e = t.pendingProps,
                i = r._init,
                r = i(r._payload),
                t.type = r,
                i = t.tag = I1(r),
                e = ht(r, e),
                i) {
                    case 0:
                        t = ql(null, t, r, e, n);
                        break e;
                    case 1:
                        t = yd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = gd(null, t, r, ht(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : ht(r, i),
                ql(e, t, r, i, n);
        case 1:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : ht(r, i),
                yd(e, t, r, i, n);
        case 3:
            e: {
                if ($m(t),
                    e === null)
                    throw Error(N(387));
                r = t.pendingProps,
                    o = t.memoizedState,
                    i = o.element,
                    mm(e, t),
                    Ts(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element,
                    o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    },
                        t.updateQueue.baseState = o,
                        t.memoizedState = o,
                        t.flags & 256) {
                        i = Br(Error(N(423)), t),
                            t = wd(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = Br(Error(N(424)), t),
                            t = wd(e, t, r, n, i);
                        break e
                    } else
                        for (Xe = hn(t.stateNode.containerInfo.firstChild),
                            be = t,
                            ae = !0,
                            mt = null,
                            n = hm(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (Ir(),
                        r === i) {
                        t = Yt(e, t, n);
                        break e
                    }
                    je(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return vm(t),
                e === null && Yl(t),
                r = t.type,
                i = t.pendingProps,
                o = e !== null ? e.memoizedProps : null,
                s = i.children,
                $l(r, i) ? s = null : o !== null && $l(r, o) && (t.flags |= 32),
                Um(e, t),
                je(e, t, s, n),
                t.child;
        case 6:
            return e === null && Yl(t),
                null;
        case 13:
            return Wm(e, t, n);
        case 4:
            return fc(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = Fr(t, null, r, n) : je(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : ht(r, i),
                vd(e, t, r, i, n);
        case 7:
            return je(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return je(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return je(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    i = t.pendingProps,
                    o = t.memoizedProps,
                    s = i.value,
                    q(Es, r._currentValue),
                    r._currentValue = s,
                    o !== null)
                    if (St(o.value, s)) {
                        if (o.children === i.children && !He.current) {
                            t = Yt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child,
                            o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = Bt(-1, n & -n),
                                                l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next,
                                                    c.next = l),
                                                    u.pending = l
                                            }
                                        }
                                        o.lanes |= n,
                                            l = o.alternate,
                                            l !== null && (l.lanes |= n),
                                            Ql(o.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return,
                                    s === null)
                                    throw Error(N(341));
                                s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    Ql(s, n, t),
                                    s = o.sibling
                            } else
                                s = o.child;
                            if (s !== null)
                                s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling,
                                        o !== null) {
                                        o.return = s.return,
                                            s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                je(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type,
                r = t.pendingProps.children,
                Nr(t, n),
                i = ut(i),
                r = r(i),
                t.flags |= 1,
                je(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                i = ht(r, t.pendingProps),
                i = ht(r.type, i),
                gd(e, t, r, i, n);
        case 15:
            return zm(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                i = t.pendingProps,
                i = t.elementType === r ? i : ht(r, i),
                Jo(e, t),
                t.tag = 1,
                Ge(r) ? (e = !0,
                    ws(t)) : e = !1,
                Nr(t, n),
                jm(t, r, i),
                bl(t, r, i, n),
                Jl(null, t, r, !0, e, n);
        case 19:
            return Hm(e, t, n);
        case 22:
            return Bm(e, t, n)
    }
    throw Error(N(156, t.tag))
}
    ;
function sv(e, t) {
    return Vp(e, t)
}
function j1(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function st(e, t, n, r) {
    return new j1(e, t, n, r)
}
function kc(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function I1(e) {
    if (typeof e == "function")
        return kc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === Gu)
            return 11;
        if (e === Ku)
            return 14
    }
    return 2
}
function gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function ns(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
        typeof e == "function")
        kc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
            case fr:
                return Gn(n.children, i, o, t);
            case Hu:
                s = 8,
                    i |= 8;
                break;
            case Sl:
                return e = st(12, n, t, i | 2),
                    e.elementType = Sl,
                    e.lanes = o,
                    e;
            case xl:
                return e = st(13, n, t, i),
                    e.elementType = xl,
                    e.lanes = o,
                    e;
            case El:
                return e = st(19, n, t, i),
                    e.elementType = El,
                    e.lanes = o,
                    e;
            case vp:
                return ia(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case pp:
                            s = 10;
                            break e;
                        case mp:
                            s = 9;
                            break e;
                        case Gu:
                            s = 11;
                            break e;
                        case Ku:
                            s = 14;
                            break e;
                        case tn:
                            s = 16,
                                r = null;
                            break e
                    }
                throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = st(s, n, t, i),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
}
function Gn(e, t, n, r) {
    return e = st(7, e, r, t),
        e.lanes = n,
        e
}
function ia(e, t, n, r) {
    return e = st(22, e, r, t),
        e.elementType = vp,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Ja(e, t, n) {
    return e = st(6, e, null, t),
        e.lanes = n,
        e
}
function el(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function F1(e, t, n, r, i) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Oa(0),
        this.expirationTimes = Oa(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Oa(0),
        this.identifierPrefix = r,
        this.onRecoverableError = i,
        this.mutableSourceEagerHydrationData = null
}
function Ac(e, t, n, r, i, o, s, a, l) {
    return e = new F1(e, t, n, a, l),
        t === 1 ? (t = 1,
            o === !0 && (t |= 8)) : t = 0,
        o = st(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        cc(o),
        e
}
function z1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: cr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function av(e) {
    if (!e)
        return Sn;
    e = e._reactInternals;
    e: {
        if (nr(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ge(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ge(n))
            return am(e, n, t)
    }
    return t
}
function lv(e, t, n, r, i, o, s, a, l) {
    return e = Ac(n, r, !0, e, i, o, s, a, l),
        e.context = av(null),
        n = e.current,
        r = Ie(),
        i = vn(n),
        o = Bt(r, i),
        o.callback = t ?? null,
        pn(n, o, i),
        e.current.lanes = i,
        oo(e, i, r),
        Ke(e, r),
        e
}
function oa(e, t, n, r) {
    var i = t.current
        , o = Ie()
        , s = vn(i);
    return n = av(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Bt(o, s),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = pn(i, t, s),
        e !== null && (wt(e, i, s, o),
            bo(e, i, s)),
        s
}
function Ds(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function _d(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Lc(e, t) {
    _d(e, t),
        (e = e.alternate) && _d(e, t)
}
function B1() {
    return null
}
var uv = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function _c(e) {
    this._internalRoot = e
}
sa.prototype.render = _c.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    oa(e, t, null, null)
}
    ;
sa.prototype.unmount = _c.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qn(function () {
            oa(null, e, null, null)
        }),
            t[Gt] = null
    }
}
    ;
function sa(e) {
    this._internalRoot = e
}
sa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Bp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++)
            ;
        on.splice(n, 0, e),
            n === 0 && $p(e)
    }
}
    ;
function Rc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function aa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Rd() { }
function U1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = Ds(s);
                o.call(u)
            }
        }
        var s = lv(t, r, e, 0, null, !1, !1, "", Rd);
        return e._reactRootContainer = s,
            e[Gt] = s.current,
            zi(e.nodeType === 8 ? e.parentNode : e),
            qn(),
            s
    }
    for (; i = e.lastChild;)
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Ds(l);
            a.call(u)
        }
    }
    var l = Ac(e, 0, !1, null, null, !1, !1, "", Rd);
    return e._reactRootContainer = l,
        e[Gt] = l.current,
        zi(e.nodeType === 8 ? e.parentNode : e),
        qn(function () {
            oa(t, l, n, r)
        }),
        l
}
function la(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Ds(s);
                a.call(l)
            }
        }
        oa(t, s, e, i)
    } else
        s = U1(n, t, e, i, r);
    return Ds(s)
}
Fp = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = hi(t.pendingLanes);
                n !== 0 && (Xu(t, n | 1),
                    Ke(t, me()),
                    !(X & 6) && (Ur = me() + 500,
                        An()))
            }
            break;
        case 13:
            qn(function () {
                var r = Kt(e, 1);
                if (r !== null) {
                    var i = Ie();
                    wt(r, e, 1, i)
                }
            }),
                Lc(e, 1)
    }
}
    ;
bu = function (e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            wt(t, e, 134217728, n)
        }
        Lc(e, 134217728)
    }
}
    ;
zp = function (e) {
    if (e.tag === 13) {
        var t = vn(e)
            , n = Kt(e, t);
        if (n !== null) {
            var r = Ie();
            wt(n, e, t, r)
        }
        Lc(e, t)
    }
}
    ;
Bp = function () {
    return b
}
    ;
Up = function (e, t) {
    var n = b;
    try {
        return b = e,
            t()
    } finally {
        b = n
    }
}
    ;
Dl = function (e, t, n) {
    switch (t) {
        case "input":
            if (Cl(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = qs(r);
                        if (!i)
                            throw Error(N(90));
                        yp(r),
                            Cl(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Sp(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Ar(e, !!n.multiple, t, !1)
    }
}
    ;
Ap = Pc;
Lp = qn;
var $1 = {
    usingClientEntryPoint: !1,
    Events: [ao, mr, qs, Cp, kp, Pc]
}
    , ai = {
        findFiberByHostInstance: Bn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , W1 = {
        bundleType: ai.bundleType,
        version: ai.version,
        rendererPackageName: ai.rendererPackageName,
        rendererConfig: ai.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Zt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Np(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ai.findFiberByHostInstance || B1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fo.isDisabled && Fo.supportsFiber)
        try {
            Qs = Fo.inject(W1),
                Ct = Fo
        } catch { }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
Je.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Rc(t))
        throw Error(N(200));
    return z1(e, t, null, n)
}
    ;
Je.createRoot = function (e, t) {
    if (!Rc(e))
        throw Error(N(299));
    var n = !1
        , r = ""
        , i = uv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = Ac(e, 1, !1, null, null, n, !1, r, i),
        e[Gt] = t.current,
        zi(e.nodeType === 8 ? e.parentNode : e),
        new _c(t)
}
    ;
Je.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
            Error(N(268, e)));
    return e = Np(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
Je.flushSync = function (e) {
    return qn(e)
}
    ;
Je.hydrate = function (e, t, n) {
    if (!aa(t))
        throw Error(N(200));
    return la(null, e, t, !0, n)
}
    ;
Je.hydrateRoot = function (e, t, n) {
    if (!Rc(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
        , i = !1
        , o = ""
        , s = uv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        t = lv(t, null, e, 1, n ?? null, i, !1, o, s),
        e[Gt] = t.current,
        zi(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                i = n._getVersion,
                i = i(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new sa(t)
}
    ;
Je.render = function (e, t, n) {
    if (!aa(t))
        throw Error(N(200));
    return la(null, e, t, !1, n)
}
    ;
Je.unmountComponentAtNode = function (e) {
    if (!aa(e))
        throw Error(N(40));
    return e._reactRootContainer ? (qn(function () {
        la(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[Gt] = null
        })
    }),
        !0) : !1
}
    ;
Je.unstable_batchedUpdates = Pc;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!aa(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return la(e, t, n, !1, r)
}
    ;
Je.version = "18.3.1-next-f1338f8080-20240426";
function cv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)
        } catch (e) {
            console.error(e)
        }
}
cv(),
    cp.exports = Je;
var H1 = cp.exports
    , Nd = H1;
yl.createRoot = Nd.createRoot,
    yl.hydrateRoot = Nd.hydrateRoot;
function G1(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
    }
}
function K1(e, t, n) {
    return t && G1(e.prototype, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
}
var Dd = "(prefers-reduced-motion: reduce)"
    , Er = 1
    , Y1 = 2
    , $r = 3
    , br = 4
    , uo = 5
    , rs = 6
    , Vs = 7
    , Q1 = {
        CREATED: Er,
        MOUNTED: Y1,
        IDLE: $r,
        MOVING: br,
        SCROLLING: uo,
        DRAGGING: rs,
        DESTROYED: Vs
    };
function Qt(e) {
    e.length = 0
}
function Ln(e, t, n) {
    return Array.prototype.slice.call(e, t, n)
}
function J(e) {
    return e.bind.apply(e, [null].concat(Ln(arguments, 1)))
}
var fv = setTimeout
    , fu = function () { };
function Vd(e) {
    return requestAnimationFrame(e)
}
function ua(e, t) {
    return typeof t === e
}
function Qi(e) {
    return !Dc(e) && ua("object", e)
}
var Nc = Array.isArray
    , dv = J(ua, "function")
    , xn = J(ua, "string")
    , co = J(ua, "undefined");
function Dc(e) {
    return e === null
}
function hv(e) {
    try {
        return e instanceof (e.ownerDocument.defaultView || window).HTMLElement
    } catch {
        return !1
    }
}
function fo(e) {
    return Nc(e) ? e : [e]
}
function ft(e, t) {
    fo(e).forEach(t)
}
function Vc(e, t) {
    return e.indexOf(t) > -1
}
function is(e, t) {
    return e.push.apply(e, fo(t)),
        e
}
function It(e, t, n) {
    e && ft(t, function (r) {
        r && e.classList[n ? "add" : "remove"](r)
    })
}
function Lt(e, t) {
    It(e, xn(t) ? t.split(" ") : t, !0)
}
function ho(e, t) {
    ft(t, e.appendChild.bind(e))
}
function Oc(e, t) {
    ft(e, function (n) {
        var r = (t || n).parentNode;
        r && r.insertBefore(n, t)
    })
}
function Xi(e, t) {
    return hv(e) && (e.msMatchesSelector || e.matches).call(e, t)
}
function pv(e, t) {
    var n = e ? Ln(e.children) : [];
    return t ? n.filter(function (r) {
        return Xi(r, t)
    }) : n
}
function po(e, t) {
    return t ? pv(e, t)[0] : e.firstElementChild
}
var bi = Object.keys;
function Kn(e, t, n) {
    return e && (n ? bi(e).reverse() : bi(e)).forEach(function (r) {
        r !== "__proto__" && t(e[r], r)
    }),
        e
}
function Zi(e) {
    return Ln(arguments, 1).forEach(function (t) {
        Kn(t, function (n, r) {
            e[r] = t[r]
        })
    }),
        e
}
function un(e) {
    return Ln(arguments, 1).forEach(function (t) {
        Kn(t, function (n, r) {
            Nc(n) ? e[r] = n.slice() : Qi(n) ? e[r] = un({}, Qi(e[r]) ? e[r] : {}, n) : e[r] = n
        })
    }),
        e
}
function Od(e, t) {
    ft(t || bi(e), function (n) {
        delete e[n]
    })
}
function _t(e, t) {
    ft(e, function (n) {
        ft(t, function (r) {
            n && n.removeAttribute(r)
        })
    })
}
function G(e, t, n) {
    Qi(t) ? Kn(t, function (r, i) {
        G(e, i, r)
    }) : ft(e, function (r) {
        Dc(n) || n === "" ? _t(r, t) : r.setAttribute(t, String(n))
    })
}
function Vr(e, t, n) {
    var r = document.createElement(e);
    return t && (xn(t) ? Lt(r, t) : G(r, t)),
        n && ho(n, r),
        r
}
function vt(e, t, n) {
    if (co(n))
        return getComputedStyle(e)[t];
    Dc(n) || (e.style[t] = "" + n)
}
function qi(e, t) {
    vt(e, "display", t)
}
function mv(e) {
    e.setActive && e.setActive() || e.focus({
        preventScroll: !0
    })
}
function gt(e, t) {
    return e.getAttribute(t)
}
function Md(e, t) {
    return e && e.classList.contains(t)
}
function ot(e) {
    return e.getBoundingClientRect()
}
function Jn(e) {
    ft(e, function (t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    })
}
function vv(e) {
    return po(new DOMParser().parseFromString(e, "text/html").body)
}
function Ot(e, t) {
    e.preventDefault(),
        t && (e.stopPropagation(),
            e.stopImmediatePropagation())
}
function gv(e, t) {
    return e && e.querySelector(t)
}
function Mc(e, t) {
    return t ? Ln(e.querySelectorAll(t)) : []
}
function Ft(e, t) {
    It(e, t, !1)
}
function du(e) {
    return e.timeStamp
}
function Vn(e) {
    return xn(e) ? e : e ? e + "px" : ""
}
var mo = "splide"
    , jc = "data-" + mo;
function Ci(e, t) {
    if (!e)
        throw new Error("[" + mo + "] " + (t || ""))
}
var En = Math.min
    , Os = Math.max
    , Ms = Math.floor
    , Ji = Math.ceil
    , We = Math.abs;
function yv(e, t, n) {
    return We(e - t) < n
}
function os(e, t, n, r) {
    var i = En(t, n)
        , o = Os(t, n);
    return r ? i < e && e < o : i <= e && e <= o
}
function lr(e, t, n) {
    var r = En(t, n)
        , i = Os(t, n);
    return En(Os(r, e), i)
}
function hu(e) {
    return +(e > 0) - +(e < 0)
}
function pu(e, t) {
    return ft(t, function (n) {
        e = e.replace("%s", "" + n)
    }),
        e
}
function Ic(e) {
    return e < 10 ? "0" + e : "" + e
}
var jd = {};
function X1(e) {
    return "" + e + Ic(jd[e] = (jd[e] || 0) + 1)
}
function wv() {
    var e = [];
    function t(s, a, l, u) {
        i(s, a, function (c, f, d) {
            var m = "addEventListener" in c
                , g = m ? c.removeEventListener.bind(c, f, l, u) : c.removeListener.bind(c, l);
            m ? c.addEventListener(f, l, u) : c.addListener(l),
                e.push([c, f, d, l, g])
        })
    }
    function n(s, a, l) {
        i(s, a, function (u, c, f) {
            e = e.filter(function (d) {
                return d[0] === u && d[1] === c && d[2] === f && (!l || d[3] === l) ? (d[4](),
                    !1) : !0
            })
        })
    }
    function r(s, a, l) {
        var u, c = !0;
        return typeof CustomEvent == "function" ? u = new CustomEvent(a, {
            bubbles: c,
            detail: l
        }) : (u = document.createEvent("CustomEvent"),
            u.initCustomEvent(a, c, !1, l)),
            s.dispatchEvent(u),
            u
    }
    function i(s, a, l) {
        ft(s, function (u) {
            u && ft(a, function (c) {
                c.split(" ").forEach(function (f) {
                    var d = f.split(".");
                    l(u, d[0], d[1])
                })
            })
        })
    }
    function o() {
        e.forEach(function (s) {
            s[4]()
        }),
            Qt(e)
    }
    return {
        bind: t,
        unbind: n,
        dispatch: r,
        destroy: o
    }
}
var _n = "mounted"
    , mu = "ready"
    , Xt = "move"
    , Zr = "moved"
    , Fc = "click"
    , Sv = "active"
    , xv = "inactive"
    , Ev = "visible"
    , Pv = "hidden"
    , Se = "refresh"
    , Fe = "updated"
    , Wr = "resize"
    , ca = "resized"
    , Tv = "drag"
    , Cv = "dragging"
    , kv = "dragged"
    , fa = "scroll"
    , rr = "scrolled"
    , b1 = "overflow"
    , zc = "destroy"
    , Av = "arrows:mounted"
    , Lv = "arrows:updated"
    , _v = "pagination:mounted"
    , Rv = "pagination:updated"
    , Bc = "navigation:mounted"
    , Uc = "autoplay:play"
    , Nv = "autoplay:playing"
    , $c = "autoplay:pause"
    , Wc = "lazyload:loaded"
    , Dv = "sk"
    , Vv = "sh"
    , js = "ei";
function he(e) {
    var t = e ? e.event.bus : document.createDocumentFragment()
        , n = wv();
    function r(o, s) {
        n.bind(t, fo(o).join(" "), function (a) {
            s.apply(s, Nc(a.detail) ? a.detail : [])
        })
    }
    function i(o) {
        n.dispatch(t, o, Ln(arguments, 1))
    }
    return e && e.event.on(zc, n.destroy),
        Zi(n, {
            bus: t,
            on: r,
            off: J(n.unbind, t),
            emit: i
        })
}
function da(e, t, n, r) {
    var i = Date.now, o, s = 0, a, l = !0, u = 0;
    function c() {
        if (!l) {
            if (s = e ? En((i() - o) / e, 1) : 1,
                n && n(s),
                s >= 1 && (t(),
                    o = i(),
                    r && ++u >= r))
                return d();
            a = Vd(c)
        }
    }
    function f(v) {
        v || g(),
            o = i() - (v ? s * e : 0),
            l = !1,
            a = Vd(c)
    }
    function d() {
        l = !0
    }
    function m() {
        o = i(),
            s = 0,
            n && n(s)
    }
    function g() {
        a && cancelAnimationFrame(a),
            s = 0,
            a = 0,
            l = !0
    }
    function y(v) {
        e = v
    }
    function S() {
        return l
    }
    return {
        start: f,
        rewind: m,
        pause: d,
        cancel: g,
        set: y,
        isPaused: S
    }
}
function Z1(e) {
    var t = e;
    function n(i) {
        t = i
    }
    function r(i) {
        return Vc(fo(i), t)
    }
    return {
        set: n,
        is: r
    }
}
function q1(e, t) {
    var n = da(0, e, null, 1);
    return function () {
        n.isPaused() && n.start()
    }
}
function J1(e, t, n) {
    var r = e.state
        , i = n.breakpoints || {}
        , o = n.reducedMotion || {}
        , s = wv()
        , a = [];
    function l() {
        var g = n.mediaQuery === "min";
        bi(i).sort(function (y, S) {
            return g ? +y - +S : +S - +y
        }).forEach(function (y) {
            c(i[y], "(" + (g ? "min" : "max") + "-width:" + y + "px)")
        }),
            c(o, Dd),
            f()
    }
    function u(g) {
        g && s.destroy()
    }
    function c(g, y) {
        var S = matchMedia(y);
        s.bind(S, "change", f),
            a.push([g, S])
    }
    function f() {
        var g = r.is(Vs)
            , y = n.direction
            , S = a.reduce(function (v, h) {
                return un(v, h[1].matches ? h[0] : {})
            }, {});
        Od(n),
            m(S),
            n.destroy ? e.destroy(n.destroy === "completely") : g ? (u(!0),
                e.mount()) : y !== n.direction && e.refresh()
    }
    function d(g) {
        matchMedia(Dd).matches && (g ? un(n, o) : Od(n, bi(o)))
    }
    function m(g, y, S) {
        un(n, g),
            y && un(Object.getPrototypeOf(n), g),
            (S || !r.is(Er)) && e.emit(Fe, n)
    }
    return {
        setup: l,
        destroy: u,
        reduce: d,
        set: m
    }
}
var ha = "Arrow"
    , pa = ha + "Left"
    , ma = ha + "Right"
    , Ov = ha + "Up"
    , Mv = ha + "Down"
    , Id = "rtl"
    , va = "ttb"
    , tl = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [Ov, ma],
        ArrowRight: [Mv, pa]
    };
function ew(e, t, n) {
    function r(o, s, a) {
        a = a || n.direction;
        var l = a === Id && !s ? 1 : a === va ? 0 : -1;
        return tl[o] && tl[o][l] || o.replace(/width|left|right/i, function (u, c) {
            var f = tl[u.toLowerCase()][l] || u;
            return c > 0 ? f.charAt(0).toUpperCase() + f.slice(1) : f
        })
    }
    function i(o) {
        return o * (n.direction === Id ? 1 : -1)
    }
    return {
        resolve: r,
        orient: i
    }
}
var Ut = "role"
    , Or = "tabindex"
    , tw = "disabled"
    , xt = "aria-"
    , vo = xt + "controls"
    , jv = xt + "current"
    , Fd = xt + "selected"
    , at = xt + "label"
    , Hc = xt + "labelledby"
    , Iv = xt + "hidden"
    , Gc = xt + "orientation"
    , eo = xt + "roledescription"
    , zd = xt + "live"
    , Bd = xt + "busy"
    , Ud = xt + "atomic"
    , Kc = [Ut, Or, tw, vo, jv, at, Hc, Iv, Gc, eo]
    , Rt = mo + "__"
    , Rn = "is-"
    , nl = mo
    , $d = Rt + "track"
    , nw = Rt + "list"
    , ga = Rt + "slide"
    , Fv = ga + "--clone"
    , rw = ga + "__container"
    , Yc = Rt + "arrows"
    , ya = Rt + "arrow"
    , zv = ya + "--prev"
    , Bv = ya + "--next"
    , wa = Rt + "pagination"
    , Uv = wa + "__page"
    , iw = Rt + "progress"
    , ow = iw + "__bar"
    , sw = Rt + "toggle"
    , aw = Rt + "spinner"
    , lw = Rt + "sr"
    , uw = Rn + "initialized"
    , er = Rn + "active"
    , $v = Rn + "prev"
    , Wv = Rn + "next"
    , vu = Rn + "visible"
    , gu = Rn + "loading"
    , Hv = Rn + "focus-in"
    , Gv = Rn + "overflow"
    , cw = [er, vu, $v, Wv, gu, Hv, Gv]
    , fw = {
        slide: ga,
        clone: Fv,
        arrows: Yc,
        arrow: ya,
        prev: zv,
        next: Bv,
        pagination: wa,
        page: Uv,
        spinner: aw
    };
function dw(e, t) {
    if (dv(e.closest))
        return e.closest(t);
    for (var n = e; n && n.nodeType === 1 && !Xi(n, t);)
        n = n.parentElement;
    return n
}
var hw = 5
    , Wd = 200
    , Kv = "touchstart mousedown"
    , rl = "touchmove mousemove"
    , il = "touchend touchcancel mouseup click";
function pw(e, t, n) {
    var r = he(e), i = r.on, o = r.bind, s = e.root, a = n.i18n, l = {}, u = [], c = [], f = [], d, m, g;
    function y() {
        p(),
            w(),
            h()
    }
    function S() {
        i(Se, v),
            i(Se, y),
            i(Fe, h),
            o(document, Kv + " keydown", function (E) {
                g = E.type === "keydown"
            }, {
                capture: !0
            }),
            o(s, "focusin", function () {
                It(s, Hv, !!g)
            })
    }
    function v(E) {
        var P = Kc.concat("style");
        Qt(u),
            Ft(s, c),
            Ft(d, f),
            _t([d, m], P),
            _t(s, E ? P : ["style", eo])
    }
    function h() {
        Ft(s, c),
            Ft(d, f),
            c = C(nl),
            f = C($d),
            Lt(s, c),
            Lt(d, f),
            G(s, at, n.label),
            G(s, Hc, n.labelledby)
    }
    function p() {
        d = x("." + $d),
            m = po(d, "." + nw),
            Ci(d && m, "A track/list element is missing."),
            is(u, pv(m, "." + ga + ":not(." + Fv + ")")),
            Kn({
                arrows: Yc,
                pagination: wa,
                prev: zv,
                next: Bv,
                bar: ow,
                toggle: sw
            }, function (E, P) {
                l[P] = x("." + E)
            }),
            Zi(l, {
                root: s,
                track: d,
                list: m,
                slides: u
            })
    }
    function w() {
        var E = s.id || X1(mo)
            , P = n.role;
        s.id = E,
            d.id = d.id || E + "-track",
            m.id = m.id || E + "-list",
            !gt(s, Ut) && s.tagName !== "SECTION" && P && G(s, Ut, P),
            G(s, eo, a.carousel),
            G(m, Ut, "presentation")
    }
    function x(E) {
        var P = gv(s, E);
        return P && dw(P, "." + nl) === s ? P : void 0
    }
    function C(E) {
        return [E + "--" + n.type, E + "--" + n.direction, n.drag && E + "--draggable", n.isNavigation && E + "--nav", E === nl && er]
    }
    return Zi(l, {
        setup: y,
        mount: S,
        destroy: v
    })
}
var Hr = "slide"
    , qr = "loop"
    , go = "fade";
function mw(e, t, n, r) {
    var i = he(e), o = i.on, s = i.emit, a = i.bind, l = e.Components, u = e.root, c = e.options, f = c.isNavigation, d = c.updateOnMove, m = c.i18n, g = c.pagination, y = c.slideFocus, S = l.Direction.resolve, v = gt(r, "style"), h = gt(r, at), p = n > -1, w = po(r, "." + rw), x;
    function C() {
        p || (r.id = u.id + "-slide" + Ic(t + 1),
            G(r, Ut, g ? "tabpanel" : "group"),
            G(r, eo, m.slide),
            G(r, at, h || pu(m.slideLabel, [t + 1, e.length]))),
            E()
    }
    function E() {
        a(r, "click", J(s, Fc, A)),
            a(r, "keydown", J(s, Dv, A)),
            o([Zr, Vv, rr], V),
            o(Bc, D),
            d && o(Xt, R)
    }
    function P() {
        x = !0,
            i.destroy(),
            Ft(r, cw),
            _t(r, Kc),
            G(r, "style", v),
            G(r, at, h || "")
    }
    function D() {
        var L = e.splides.map(function (k) {
            var _ = k.splide.Components.Slides.getAt(t);
            return _ ? _.slide.id : ""
        }).join(" ");
        G(r, at, pu(m.slideX, (p ? n : t) + 1)),
            G(r, vo, L),
            G(r, Ut, y ? "button" : ""),
            y && _t(r, eo)
    }
    function R() {
        x || V()
    }
    function V() {
        if (!x) {
            var L = e.index;
            M(),
                I(),
                It(r, $v, t === L - 1),
                It(r, Wv, t === L + 1)
        }
    }
    function M() {
        var L = W();
        L !== Md(r, er) && (It(r, er, L),
            G(r, jv, f && L || ""),
            s(L ? Sv : xv, A))
    }
    function I() {
        var L = H()
            , k = !L && (!W() || p);
        if (e.state.is([br, uo]) || G(r, Iv, k || ""),
            G(Mc(r, c.focusableNodes || ""), Or, k ? -1 : ""),
            y && G(r, Or, k ? -1 : 0),
            L !== Md(r, vu) && (It(r, vu, L),
                s(L ? Ev : Pv, A)),
            !L && document.activeElement === r) {
            var _ = l.Slides.getAt(e.index);
            _ && mv(_.slide)
        }
    }
    function z(L, k, _) {
        vt(_ && w || r, L, k)
    }
    function W() {
        var L = e.index;
        return L === t || c.cloneStatus && L === n
    }
    function H() {
        if (e.is(go))
            return W();
        var L = ot(l.Elements.track)
            , k = ot(r)
            , _ = S("left", !0)
            , U = S("right", !0);
        return Ms(L[_]) <= Ji(k[_]) && Ms(k[U]) <= Ji(L[U])
    }
    function Y(L, k) {
        var _ = We(L - t);
        return !p && (c.rewind || e.is(qr)) && (_ = En(_, e.length - _)),
            _ <= k
    }
    var A = {
        index: t,
        slideIndex: n,
        slide: r,
        container: w,
        isClone: p,
        mount: C,
        destroy: P,
        update: V,
        style: z,
        isWithin: Y
    };
    return A
}
function vw(e, t, n) {
    var r = he(e)
        , i = r.on
        , o = r.emit
        , s = r.bind
        , a = t.Elements
        , l = a.slides
        , u = a.list
        , c = [];
    function f() {
        d(),
            i(Se, m),
            i(Se, d)
    }
    function d() {
        l.forEach(function (V, M) {
            y(V, M, -1)
        })
    }
    function m() {
        x(function (V) {
            V.destroy()
        }),
            Qt(c)
    }
    function g() {
        x(function (V) {
            V.update()
        })
    }
    function y(V, M, I) {
        var z = mw(e, M, I, V);
        z.mount(),
            c.push(z),
            c.sort(function (W, H) {
                return W.index - H.index
            })
    }
    function S(V) {
        return V ? C(function (M) {
            return !M.isClone
        }) : c
    }
    function v(V) {
        var M = t.Controller
            , I = M.toIndex(V)
            , z = M.hasFocus() ? 1 : n.perPage;
        return C(function (W) {
            return os(W.index, I, I + z - 1)
        })
    }
    function h(V) {
        return C(V)[0]
    }
    function p(V, M) {
        ft(V, function (I) {
            if (xn(I) && (I = vv(I)),
                hv(I)) {
                var z = l[M];
                z ? Oc(I, z) : ho(u, I),
                    Lt(I, n.classes.slide),
                    P(I, J(o, Wr))
            }
        }),
            o(Se)
    }
    function w(V) {
        Jn(C(V).map(function (M) {
            return M.slide
        })),
            o(Se)
    }
    function x(V, M) {
        S(M).forEach(V)
    }
    function C(V) {
        return c.filter(dv(V) ? V : function (M) {
            return xn(V) ? Xi(M.slide, V) : Vc(fo(V), M.index)
        }
        )
    }
    function E(V, M, I) {
        x(function (z) {
            z.style(V, M, I)
        })
    }
    function P(V, M) {
        var I = Mc(V, "img")
            , z = I.length;
        z ? I.forEach(function (W) {
            s(W, "load error", function () {
                --z || M()
            })
        }) : M()
    }
    function D(V) {
        return V ? l.length : c.length
    }
    function R() {
        return c.length > n.perPage
    }
    return {
        mount: f,
        destroy: m,
        update: g,
        register: y,
        get: S,
        getIn: v,
        getAt: h,
        add: p,
        remove: w,
        forEach: x,
        filter: C,
        style: E,
        getLength: D,
        isEnough: R
    }
}
function gw(e, t, n) {
    var r = he(e), i = r.on, o = r.bind, s = r.emit, a = t.Slides, l = t.Direction.resolve, u = t.Elements, c = u.root, f = u.track, d = u.list, m = a.getAt, g = a.style, y, S, v;
    function h() {
        p(),
            o(window, "resize load", q1(J(s, Wr))),
            i([Fe, Se], p),
            i(Wr, w)
    }
    function p() {
        y = n.direction === va,
            vt(c, "maxWidth", Vn(n.width)),
            vt(f, l("paddingLeft"), x(!1)),
            vt(f, l("paddingRight"), x(!0)),
            w(!0)
    }
    function w(A) {
        var L = ot(c);
        (A || S.width !== L.width || S.height !== L.height) && (vt(f, "height", C()),
            g(l("marginRight"), Vn(n.gap)),
            g("width", P()),
            g("height", D(), !0),
            S = L,
            s(ca),
            v !== (v = Y()) && (It(c, Gv, v),
                s(b1, v)))
    }
    function x(A) {
        var L = n.padding
            , k = l(A ? "right" : "left");
        return L && Vn(L[k] || (Qi(L) ? 0 : L)) || "0px"
    }
    function C() {
        var A = "";
        return y && (A = E(),
            Ci(A, "height or heightRatio is missing."),
            A = "calc(" + A + " - " + x(!1) + " - " + x(!0) + ")"),
            A
    }
    function E() {
        return Vn(n.height || ot(d).width * n.heightRatio)
    }
    function P() {
        return n.autoWidth ? null : Vn(n.fixedWidth) || (y ? "" : R())
    }
    function D() {
        return Vn(n.fixedHeight) || (y ? n.autoHeight ? null : R() : E())
    }
    function R() {
        var A = Vn(n.gap);
        return "calc((100%" + (A && " + " + A) + ")/" + (n.perPage || 1) + (A && " - " + A) + ")"
    }
    function V() {
        return ot(d)[l("width")]
    }
    function M(A, L) {
        var k = m(A || 0);
        return k ? ot(k.slide)[l("width")] + (L ? 0 : W()) : 0
    }
    function I(A, L) {
        var k = m(A);
        if (k) {
            var _ = ot(k.slide)[l("right")]
                , U = ot(d)[l("left")];
            return We(_ - U) + (L ? 0 : W())
        }
        return 0
    }
    function z(A) {
        return I(e.length - 1) - I(0) + M(0, A)
    }
    function W() {
        var A = m(0);
        return A && parseFloat(vt(A.slide, l("marginRight"))) || 0
    }
    function H(A) {
        return parseFloat(vt(f, l("padding" + (A ? "Right" : "Left")))) || 0
    }
    function Y() {
        return e.is(go) || z(!0) > V()
    }
    return {
        mount: h,
        resize: w,
        listSize: V,
        slideSize: M,
        sliderSize: z,
        totalSize: I,
        getPadding: H,
        isOverflow: Y
    }
}
var yw = 2;
function ww(e, t, n) {
    var r = he(e), i = r.on, o = t.Elements, s = t.Slides, a = t.Direction.resolve, l = [], u;
    function c() {
        i(Se, f),
            i([Fe, Wr], m),
            (u = S()) && (g(u),
                t.Layout.resize(!0))
    }
    function f() {
        d(),
            c()
    }
    function d() {
        Jn(l),
            Qt(l),
            r.destroy()
    }
    function m() {
        var v = S();
        u !== v && (u < v || !v) && r.emit(Se)
    }
    function g(v) {
        var h = s.get().slice()
            , p = h.length;
        if (p) {
            for (; h.length < v;)
                is(h, h);
            is(h.slice(-v), h.slice(0, v)).forEach(function (w, x) {
                var C = x < v
                    , E = y(w.slide, x);
                C ? Oc(E, h[0].slide) : ho(o.list, E),
                    is(l, E),
                    s.register(E, x - v + (C ? 0 : p), w.index)
            })
        }
    }
    function y(v, h) {
        var p = v.cloneNode(!0);
        return Lt(p, n.classes.clone),
            p.id = e.root.id + "-clone" + Ic(h + 1),
            p
    }
    function S() {
        var v = n.clones;
        if (!e.is(qr))
            v = 0;
        else if (co(v)) {
            var h = n[a("fixedWidth")] && t.Layout.slideSize(0)
                , p = h && Ji(ot(o.track)[a("width")] / h);
            v = p || n[a("autoWidth")] && e.length || n.perPage * yw
        }
        return v
    }
    return {
        mount: c,
        destroy: d
    }
}
function Sw(e, t, n) {
    var r = he(e), i = r.on, o = r.emit, s = e.state.set, a = t.Layout, l = a.slideSize, u = a.getPadding, c = a.totalSize, f = a.listSize, d = a.sliderSize, m = t.Direction, g = m.resolve, y = m.orient, S = t.Elements, v = S.list, h = S.track, p;
    function w() {
        p = t.Transition,
            i([_n, ca, Fe, Se], x)
    }
    function x() {
        t.Controller.isBusy() || (t.Scroll.cancel(),
            E(e.index),
            t.Slides.update())
    }
    function C(k, _, U, ie) {
        k !== _ && A(k > U) && (V(),
            P(R(z(), k > U), !0)),
            s(br),
            o(Xt, _, U, k),
            p.start(_, function () {
                s($r),
                    o(Zr, _, U, k),
                    ie && ie()
            })
    }
    function E(k) {
        P(I(k, !0))
    }
    function P(k, _) {
        if (!e.is(go)) {
            var U = _ ? k : D(k);
            vt(v, "transform", "translate" + g("X") + "(" + U + "px)"),
                k !== U && o(Vv)
        }
    }
    function D(k) {
        if (e.is(qr)) {
            var _ = M(k)
                , U = _ > t.Controller.getEnd()
                , ie = _ < 0;
            (ie || U) && (k = R(k, U))
        }
        return k
    }
    function R(k, _) {
        var U = k - Y(_)
            , ie = d();
        return k -= y(ie * (Ji(We(U) / ie) || 1)) * (_ ? 1 : -1),
            k
    }
    function V() {
        P(z(), !0),
            p.cancel()
    }
    function M(k) {
        for (var _ = t.Slides.get(), U = 0, ie = 1 / 0, Z = 0; Z < _.length; Z++) {
            var Oe = _[Z].index
                , O = We(I(Oe, !0) - k);
            if (O <= ie)
                ie = O,
                    U = Oe;
            else
                break
        }
        return U
    }
    function I(k, _) {
        var U = y(c(k - 1) - H(k));
        return _ ? W(U) : U
    }
    function z() {
        var k = g("left");
        return ot(v)[k] - ot(h)[k] + y(u(!1))
    }
    function W(k) {
        return n.trimSpace && e.is(Hr) && (k = lr(k, 0, y(d(!0) - f()))),
            k
    }
    function H(k) {
        var _ = n.focus;
        return _ === "center" ? (f() - l(k, !0)) / 2 : +_ * l(k) || 0
    }
    function Y(k) {
        return I(k ? t.Controller.getEnd() : 0, !!n.trimSpace)
    }
    function A(k) {
        var _ = y(R(z(), k));
        return k ? _ >= 0 : _ <= v[g("scrollWidth")] - ot(h)[g("width")]
    }
    function L(k, _) {
        _ = co(_) ? z() : _;
        var U = k !== !0 && y(_) < y(Y(!1))
            , ie = k !== !1 && y(_) > y(Y(!0));
        return U || ie
    }
    return {
        mount: w,
        move: C,
        jump: E,
        translate: P,
        shift: R,
        cancel: V,
        toIndex: M,
        toPosition: I,
        getPosition: z,
        getLimit: Y,
        exceededLimit: L,
        reposition: x
    }
}
function xw(e, t, n) {
    var r = he(e), i = r.on, o = r.emit, s = t.Move, a = s.getPosition, l = s.getLimit, u = s.toPosition, c = t.Slides, f = c.isEnough, d = c.getLength, m = n.omitEnd, g = e.is(qr), y = e.is(Hr), S = J(z, !1), v = J(z, !0), h = n.start || 0, p, w = h, x, C, E;
    function P() {
        D(),
            i([Fe, Se, js], D),
            i(ca, R)
    }
    function D() {
        x = d(!0),
            C = n.perMove,
            E = n.perPage,
            p = A();
        var O = lr(h, 0, m ? p : x - 1);
        O !== h && (h = O,
            s.reposition())
    }
    function R() {
        p !== A() && o(js)
    }
    function V(O, Q, Le) {
        if (!Oe()) {
            var oe = I(O)
                , ge = Y(oe);
            ge > -1 && (Q || ge !== h) && (U(ge),
                s.move(oe, ge, w, Le))
        }
    }
    function M(O, Q, Le, oe) {
        t.Scroll.scroll(O, Q, Le, function () {
            var ge = Y(s.toIndex(a()));
            U(m ? En(ge, p) : ge),
                oe && oe()
        })
    }
    function I(O) {
        var Q = h;
        if (xn(O)) {
            var Le = O.match(/([+\-<>])(\d+)?/) || []
                , oe = Le[1]
                , ge = Le[2];
            oe === "+" || oe === "-" ? Q = W(h + +("" + oe + (+ge || 1)), h) : oe === ">" ? Q = ge ? L(+ge) : S(!0) : oe === "<" && (Q = v(!0))
        } else
            Q = g ? O : lr(O, 0, p);
        return Q
    }
    function z(O, Q) {
        var Le = C || (Z() ? 1 : E)
            , oe = W(h + Le * (O ? -1 : 1), h, !(C || Z()));
        return oe === -1 && y && !yv(a(), l(!O), 1) ? O ? 0 : p : Q ? oe : Y(oe)
    }
    function W(O, Q, Le) {
        if (f() || Z()) {
            var oe = H(O);
            oe !== O && (Q = O,
                O = oe,
                Le = !1),
                O < 0 || O > p ? !C && (os(0, O, Q, !0) || os(p, Q, O, !0)) ? O = L(k(O)) : g ? O = Le ? O < 0 ? -(x % E || E) : x : O : n.rewind ? O = O < 0 ? p : 0 : O = -1 : Le && O !== Q && (O = L(k(Q) + (O < Q ? -1 : 1)))
        } else
            O = -1;
        return O
    }
    function H(O) {
        if (y && n.trimSpace === "move" && O !== h)
            for (var Q = a(); Q === u(O, !0) && os(O, 0, e.length - 1, !n.rewind);)
                O < h ? --O : ++O;
        return O
    }
    function Y(O) {
        return g ? (O + x) % x || 0 : O
    }
    function A() {
        for (var O = x - (Z() || g && C ? 1 : E); m && O-- > 0;)
            if (u(x - 1, !0) !== u(O, !0)) {
                O++;
                break
            }
        return lr(O, 0, x - 1)
    }
    function L(O) {
        return lr(Z() ? O : E * O, 0, p)
    }
    function k(O) {
        return Z() ? En(O, p) : Ms((O >= p ? x - 1 : O) / E)
    }
    function _(O) {
        var Q = s.toIndex(O);
        return y ? lr(Q, 0, p) : Q
    }
    function U(O) {
        O !== h && (w = h,
            h = O)
    }
    function ie(O) {
        return O ? w : h
    }
    function Z() {
        return !co(n.focus) || n.isNavigation
    }
    function Oe() {
        return e.state.is([br, uo]) && !!n.waitForTransition
    }
    return {
        mount: P,
        go: V,
        scroll: M,
        getNext: S,
        getPrev: v,
        getAdjacent: z,
        getEnd: A,
        setIndex: U,
        getIndex: ie,
        toIndex: L,
        toPage: k,
        toDest: _,
        hasFocus: Z,
        isBusy: Oe
    }
}
var Ew = "http://www.w3.org/2000/svg"
    , Pw = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
    , zo = 40;
function Tw(e, t, n) {
    var r = he(e), i = r.on, o = r.bind, s = r.emit, a = n.classes, l = n.i18n, u = t.Elements, c = t.Controller, f = u.arrows, d = u.track, m = f, g = u.prev, y = u.next, S, v, h = {};
    function p() {
        x(),
            i(Fe, w)
    }
    function w() {
        C(),
            p()
    }
    function x() {
        var M = n.arrows;
        M && !(g && y) && D(),
            g && y && (Zi(h, {
                prev: g,
                next: y
            }),
                qi(m, M ? "" : "none"),
                Lt(m, v = Yc + "--" + n.direction),
                M && (E(),
                    V(),
                    G([g, y], vo, d.id),
                    s(Av, g, y)))
    }
    function C() {
        r.destroy(),
            Ft(m, v),
            S ? (Jn(f ? [g, y] : m),
                g = y = null) : _t([g, y], Kc)
    }
    function E() {
        i([_n, Zr, Se, rr, js], V),
            o(y, "click", J(P, ">")),
            o(g, "click", J(P, "<"))
    }
    function P(M) {
        c.go(M, !0)
    }
    function D() {
        m = f || Vr("div", a.arrows),
            g = R(!0),
            y = R(!1),
            S = !0,
            ho(m, [g, y]),
            !f && Oc(m, d)
    }
    function R(M) {
        var I = '<button class="' + a.arrow + " " + (M ? a.prev : a.next) + '" type="button"><svg xmlns="' + Ew + '" viewBox="0 0 ' + zo + " " + zo + '" width="' + zo + '" height="' + zo + '" focusable="false"><path d="' + (n.arrowPath || Pw) + '" />';
        return vv(I)
    }
    function V() {
        if (g && y) {
            var M = e.index
                , I = c.getPrev()
                , z = c.getNext()
                , W = I > -1 && M < I ? l.last : l.prev
                , H = z > -1 && M > z ? l.first : l.next;
            g.disabled = I < 0,
                y.disabled = z < 0,
                G(g, at, W),
                G(y, at, H),
                s(Lv, g, y, I, z)
        }
    }
    return {
        arrows: h,
        mount: p,
        destroy: C,
        update: V
    }
}
var Cw = jc + "-interval";
function kw(e, t, n) {
    var r = he(e), i = r.on, o = r.bind, s = r.emit, a = da(n.interval, e.go.bind(e, ">"), E), l = a.isPaused, u = t.Elements, c = t.Elements, f = c.root, d = c.toggle, m = n.autoplay, g, y, S = m === "pause";
    function v() {
        m && (h(),
            d && G(d, vo, u.track.id),
            S || p(),
            C())
    }
    function h() {
        n.pauseOnHover && o(f, "mouseenter mouseleave", function (D) {
            g = D.type === "mouseenter",
                x()
        }),
            n.pauseOnFocus && o(f, "focusin focusout", function (D) {
                y = D.type === "focusin",
                    x()
            }),
            d && o(d, "click", function () {
                S ? p() : w(!0)
            }),
            i([Xt, fa, Se], a.rewind),
            i(Xt, P)
    }
    function p() {
        l() && t.Slides.isEnough() && (a.start(!n.resetProgress),
            y = g = S = !1,
            C(),
            s(Uc))
    }
    function w(D) {
        D === void 0 && (D = !0),
            S = !!D,
            C(),
            l() || (a.pause(),
                s($c))
    }
    function x() {
        S || (g || y ? w(!1) : p())
    }
    function C() {
        d && (It(d, er, !S),
            G(d, at, n.i18n[S ? "play" : "pause"]))
    }
    function E(D) {
        var R = u.bar;
        R && vt(R, "width", D * 100 + "%"),
            s(Nv, D)
    }
    function P(D) {
        var R = t.Slides.getAt(D);
        a.set(R && +gt(R.slide, Cw) || n.interval)
    }
    return {
        mount: v,
        destroy: a.cancel,
        play: p,
        pause: w,
        isPaused: l
    }
}
function Aw(e, t, n) {
    var r = he(e)
        , i = r.on;
    function o() {
        n.cover && (i(Wc, J(a, !0)),
            i([_n, Fe, Se], J(s, !0)))
    }
    function s(l) {
        t.Slides.forEach(function (u) {
            var c = po(u.container || u.slide, "img");
            c && c.src && a(l, c, u)
        })
    }
    function a(l, u, c) {
        c.style("background", l ? 'center/cover no-repeat url("' + u.src + '")' : "", !0),
            qi(u, l ? "none" : "")
    }
    return {
        mount: o,
        destroy: J(s, !1)
    }
}
var Lw = 10
    , _w = 600
    , Rw = .6
    , Nw = 1.5
    , Dw = 800;
function Vw(e, t, n) {
    var r = he(e), i = r.on, o = r.emit, s = e.state.set, a = t.Move, l = a.getPosition, u = a.getLimit, c = a.exceededLimit, f = a.translate, d = e.is(Hr), m, g, y = 1;
    function S() {
        i(Xt, w),
            i([Fe, Se], x)
    }
    function v(E, P, D, R, V) {
        var M = l();
        if (w(),
            D && (!d || !c())) {
            var I = t.Layout.sliderSize()
                , z = hu(E) * I * Ms(We(E) / I) || 0;
            E = a.toPosition(t.Controller.toDest(E % I)) + z
        }
        var W = yv(M, E, 1);
        y = 1,
            P = W ? 0 : P || Os(We(E - M) / Nw, Dw),
            g = R,
            m = da(P, h, J(p, M, E, V), 1),
            s(uo),
            o(fa),
            m.start()
    }
    function h() {
        s($r),
            g && g(),
            o(rr)
    }
    function p(E, P, D, R) {
        var V = l()
            , M = E + (P - E) * C(R)
            , I = (M - V) * y;
        f(V + I),
            d && !D && c() && (y *= Rw,
                We(I) < Lw && v(u(c(!0)), _w, !1, g, !0))
    }
    function w() {
        m && m.cancel()
    }
    function x() {
        m && !m.isPaused() && (w(),
            h())
    }
    function C(E) {
        var P = n.easingFunc;
        return P ? P(E) : 1 - Math.pow(1 - E, 4)
    }
    return {
        mount: S,
        destroy: w,
        scroll: v,
        cancel: x
    }
}
var ur = {
    passive: !1,
    capture: !0
};
function Ow(e, t, n) {
    var r = he(e), i = r.on, o = r.emit, s = r.bind, a = r.unbind, l = e.state, u = t.Move, c = t.Scroll, f = t.Controller, d = t.Elements.track, m = t.Media.reduce, g = t.Direction, y = g.resolve, S = g.orient, v = u.getPosition, h = u.exceededLimit, p, w, x, C, E, P = !1, D, R, V;
    function M() {
        s(d, rl, fu, ur),
            s(d, il, fu, ur),
            s(d, Kv, z, ur),
            s(d, "click", Y, {
                capture: !0
            }),
            s(d, "dragstart", Ot),
            i([_n, Fe], I)
    }
    function I() {
        var B = n.drag;
        La(!B),
            C = B === "free"
    }
    function z(B) {
        if (D = !1,
            !R) {
            var se = ge(B);
            oe(B.target) && (se || !B.button) && (f.isBusy() ? Ot(B, !0) : (V = se ? d : window,
                E = l.is([br, uo]),
                x = null,
                s(V, rl, W, ur),
                s(V, il, H, ur),
                u.cancel(),
                c.cancel(),
                A(B)))
        }
    }
    function W(B) {
        if (l.is(rs) || (l.set(rs),
            o(Tv)),
            B.cancelable)
            if (E) {
                u.translate(p + Le(Z(B)));
                var se = Oe(B) > Wd
                    , Dn = P !== (P = h());
                (se || Dn) && A(B),
                    D = !0,
                    o(Cv),
                    Ot(B)
            } else
                _(B) && (E = k(B),
                    Ot(B))
    }
    function H(B) {
        l.is(rs) && (l.set($r),
            o(kv)),
            E && (L(B),
                Ot(B)),
            a(V, rl, W),
            a(V, il, H),
            E = !1
    }
    function Y(B) {
        !R && D && Ot(B, !0)
    }
    function A(B) {
        x = w,
            w = B,
            p = v()
    }
    function L(B) {
        var se = U(B)
            , Dn = ie(se)
            , Jr = n.rewind && n.rewindByDrag;
        m(!1),
            C ? f.scroll(Dn, 0, n.snap) : e.is(go) ? f.go(S(hu(se)) < 0 ? Jr ? "<" : "-" : Jr ? ">" : "+") : e.is(Hr) && P && Jr ? f.go(h(!0) ? ">" : "<") : f.go(f.toDest(Dn), !0),
            m(!0)
    }
    function k(B) {
        var se = n.dragMinThreshold
            , Dn = Qi(se)
            , Jr = Dn && se.mouse || 0
            , yy = (Dn ? se.touch : +se) || 10;
        return We(Z(B)) > (ge(B) ? yy : Jr)
    }
    function _(B) {
        return We(Z(B)) > We(Z(B, !0))
    }
    function U(B) {
        if (e.is(qr) || !P) {
            var se = Oe(B);
            if (se && se < Wd)
                return Z(B) / se
        }
        return 0
    }
    function ie(B) {
        return v() + hu(B) * En(We(B) * (n.flickPower || 600), C ? 1 / 0 : t.Layout.listSize() * (n.flickMaxPages || 1))
    }
    function Z(B, se) {
        return Q(B, se) - Q(O(B), se)
    }
    function Oe(B) {
        return du(B) - du(O(B))
    }
    function O(B) {
        return w === B && x || w
    }
    function Q(B, se) {
        return (ge(B) ? B.changedTouches[0] : B)["page" + y(se ? "Y" : "X")]
    }
    function Le(B) {
        return B / (P && e.is(Hr) ? hw : 1)
    }
    function oe(B) {
        var se = n.noDrag;
        return !Xi(B, "." + Uv + ", ." + ya) && (!se || !Xi(B, se))
    }
    function ge(B) {
        return typeof TouchEvent < "u" && B instanceof TouchEvent
    }
    function Nt() {
        return E
    }
    function La(B) {
        R = B
    }
    return {
        mount: M,
        disable: La,
        isDragging: Nt
    }
}
var Mw = {
    Spacebar: " ",
    Right: ma,
    Left: pa,
    Up: Ov,
    Down: Mv
};
function Qc(e) {
    return e = xn(e) ? e : e.key,
        Mw[e] || e
}
var Hd = "keydown";
function jw(e, t, n) {
    var r = he(e), i = r.on, o = r.bind, s = r.unbind, a = e.root, l = t.Direction.resolve, u, c;
    function f() {
        d(),
            i(Fe, m),
            i(Fe, d),
            i(Xt, y)
    }
    function d() {
        var v = n.keyboard;
        v && (u = v === "global" ? window : a,
            o(u, Hd, S))
    }
    function m() {
        s(u, Hd)
    }
    function g(v) {
        c = v
    }
    function y() {
        var v = c;
        c = !0,
            fv(function () {
                c = v
            })
    }
    function S(v) {
        if (!c) {
            var h = Qc(v);
            h === l(pa) ? e.go("<") : h === l(ma) && e.go(">")
        }
    }
    return {
        mount: f,
        destroy: m,
        disable: g
    }
}
var ki = jc + "-lazy"
    , ss = ki + "-srcset"
    , Iw = "[" + ki + "], [" + ss + "]";
function Fw(e, t, n) {
    var r = he(e)
        , i = r.on
        , o = r.off
        , s = r.bind
        , a = r.emit
        , l = n.lazyLoad === "sequential"
        , u = [Zr, rr]
        , c = [];
    function f() {
        n.lazyLoad && (d(),
            i(Se, d))
    }
    function d() {
        Qt(c),
            m(),
            l ? v() : (o(u),
                i(u, g),
                g())
    }
    function m() {
        t.Slides.forEach(function (h) {
            Mc(h.slide, Iw).forEach(function (p) {
                var w = gt(p, ki)
                    , x = gt(p, ss);
                if (w !== p.src || x !== p.srcset) {
                    var C = n.classes.spinner
                        , E = p.parentElement
                        , P = po(E, "." + C) || Vr("span", C, E);
                    c.push([p, h, P]),
                        p.src || qi(p, "none")
                }
            })
        })
    }
    function g() {
        c = c.filter(function (h) {
            var p = n.perPage * ((n.preloadPages || 1) + 1) - 1;
            return h[1].isWithin(e.index, p) ? y(h) : !0
        }),
            c.length || o(u)
    }
    function y(h) {
        var p = h[0];
        Lt(h[1].slide, gu),
            s(p, "load error", J(S, h)),
            G(p, "src", gt(p, ki)),
            G(p, "srcset", gt(p, ss)),
            _t(p, ki),
            _t(p, ss)
    }
    function S(h, p) {
        var w = h[0]
            , x = h[1];
        Ft(x.slide, gu),
            p.type !== "error" && (Jn(h[2]),
                qi(w, ""),
                a(Wc, w, x),
                a(Wr)),
            l && v()
    }
    function v() {
        c.length && y(c.shift())
    }
    return {
        mount: f,
        destroy: J(Qt, c),
        check: g
    }
}
function zw(e, t, n) {
    var r = he(e), i = r.on, o = r.emit, s = r.bind, a = t.Slides, l = t.Elements, u = t.Controller, c = u.hasFocus, f = u.getIndex, d = u.go, m = t.Direction.resolve, g = l.pagination, y = [], S, v;
    function h() {
        p(),
            i([Fe, Se, js], h);
        var R = n.pagination;
        g && qi(g, R ? "" : "none"),
            R && (i([Xt, fa, rr], D),
                w(),
                D(),
                o(_v, {
                    list: S,
                    items: y
                }, P(e.index)))
    }
    function p() {
        S && (Jn(g ? Ln(S.children) : S),
            Ft(S, v),
            Qt(y),
            S = null),
            r.destroy()
    }
    function w() {
        var R = e.length
            , V = n.classes
            , M = n.i18n
            , I = n.perPage
            , z = c() ? u.getEnd() + 1 : Ji(R / I);
        S = g || Vr("ul", V.pagination, l.track.parentElement),
            Lt(S, v = wa + "--" + E()),
            G(S, Ut, "tablist"),
            G(S, at, M.select),
            G(S, Gc, E() === va ? "vertical" : "");
        for (var W = 0; W < z; W++) {
            var H = Vr("li", null, S)
                , Y = Vr("button", {
                    class: V.page,
                    type: "button"
                }, H)
                , A = a.getIn(W).map(function (k) {
                    return k.slide.id
                })
                , L = !c() && I > 1 ? M.pageX : M.slideX;
            s(Y, "click", J(x, W)),
                n.paginationKeyboard && s(Y, "keydown", J(C, W)),
                G(H, Ut, "presentation"),
                G(Y, Ut, "tab"),
                G(Y, vo, A.join(" ")),
                G(Y, at, pu(L, W + 1)),
                G(Y, Or, -1),
                y.push({
                    li: H,
                    button: Y,
                    page: W
                })
        }
    }
    function x(R) {
        d(">" + R, !0)
    }
    function C(R, V) {
        var M = y.length
            , I = Qc(V)
            , z = E()
            , W = -1;
        I === m(ma, !1, z) ? W = ++R % M : I === m(pa, !1, z) ? W = (--R + M) % M : I === "Home" ? W = 0 : I === "End" && (W = M - 1);
        var H = y[W];
        H && (mv(H.button),
            d(">" + W),
            Ot(V, !0))
    }
    function E() {
        return n.paginationDirection || n.direction
    }
    function P(R) {
        return y[u.toPage(R)]
    }
    function D() {
        var R = P(f(!0))
            , V = P(f());
        if (R) {
            var M = R.button;
            Ft(M, er),
                _t(M, Fd),
                G(M, Or, -1)
        }
        if (V) {
            var I = V.button;
            Lt(I, er),
                G(I, Fd, !0),
                G(I, Or, "")
        }
        o(Rv, {
            list: S,
            items: y
        }, R, V)
    }
    return {
        items: y,
        mount: h,
        destroy: p,
        getAt: P,
        update: D
    }
}
var Bw = [" ", "Enter"];
function Uw(e, t, n) {
    var r = n.isNavigation
        , i = n.slideFocus
        , o = [];
    function s() {
        e.splides.forEach(function (g) {
            g.isParent || (u(e, g.splide),
                u(g.splide, e))
        }),
            r && c()
    }
    function a() {
        o.forEach(function (g) {
            g.destroy()
        }),
            Qt(o)
    }
    function l() {
        a(),
            s()
    }
    function u(g, y) {
        var S = he(g);
        S.on(Xt, function (v, h, p) {
            y.go(y.is(qr) ? p : v)
        }),
            o.push(S)
    }
    function c() {
        var g = he(e)
            , y = g.on;
        y(Fc, d),
            y(Dv, m),
            y([_n, Fe], f),
            o.push(g),
            g.emit(Bc, e.splides)
    }
    function f() {
        G(t.Elements.list, Gc, n.direction === va ? "vertical" : "")
    }
    function d(g) {
        e.go(g.index)
    }
    function m(g, y) {
        Vc(Bw, Qc(y)) && (d(g),
            Ot(y))
    }
    return {
        setup: J(t.Media.set, {
            slideFocus: co(i) ? r : i
        }, !0),
        mount: s,
        destroy: a,
        remount: l
    }
}
function $w(e, t, n) {
    var r = he(e)
        , i = r.bind
        , o = 0;
    function s() {
        n.wheel && i(t.Elements.track, "wheel", a, ur)
    }
    function a(u) {
        if (u.cancelable) {
            var c = u.deltaY
                , f = c < 0
                , d = du(u)
                , m = n.wheelMinThreshold || 0
                , g = n.wheelSleep || 0;
            We(c) > m && d - o > g && (e.go(f ? "<" : ">"),
                o = d),
                l(f) && Ot(u)
        }
    }
    function l(u) {
        return !n.releaseWheel || e.state.is(br) || t.Controller.getAdjacent(u) !== -1
    }
    return {
        mount: s
    }
}
var Ww = 90;
function Hw(e, t, n) {
    var r = he(e)
        , i = r.on
        , o = t.Elements.track
        , s = n.live && !n.isNavigation
        , a = Vr("span", lw)
        , l = da(Ww, J(c, !1));
    function u() {
        s && (d(!t.Autoplay.isPaused()),
            G(o, Ud, !0),
            a.textContent = "…",
            i(Uc, J(d, !0)),
            i($c, J(d, !1)),
            i([Zr, rr], J(c, !0)))
    }
    function c(m) {
        G(o, Bd, m),
            m ? (ho(o, a),
                l.start()) : (Jn(a),
                    l.cancel())
    }
    function f() {
        _t(o, [zd, Ud, Bd]),
            Jn(a)
    }
    function d(m) {
        s && G(o, zd, m ? "off" : "polite")
    }
    return {
        mount: u,
        disable: d,
        destroy: f
    }
}
var Gw = Object.freeze({
    __proto__: null,
    Media: J1,
    Direction: ew,
    Elements: pw,
    Slides: vw,
    Layout: gw,
    Clones: ww,
    Move: Sw,
    Controller: xw,
    Arrows: Tw,
    Autoplay: kw,
    Cover: Aw,
    Scroll: Vw,
    Drag: Ow,
    Keyboard: jw,
    LazyLoad: Fw,
    Pagination: zw,
    Sync: Uw,
    Wheel: $w,
    Live: Hw
})
    , Kw = {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay",
        carousel: "carousel",
        slide: "slide",
        select: "Select a slide to show",
        slideLabel: "%s of %s"
    }
    , Yw = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: fw,
        i18n: Kw,
        reducedMotion: {
            speed: 0,
            rewindSpeed: 0,
            autoplay: "pause"
        }
    };
function Qw(e, t, n) {
    var r = t.Slides;
    function i() {
        he(e).on([_n, Se], o)
    }
    function o() {
        r.forEach(function (a) {
            a.style("transform", "translateX(-" + 100 * a.index + "%)")
        })
    }
    function s(a, l) {
        r.style("transition", "opacity " + n.speed + "ms " + n.easing),
            fv(l)
    }
    return {
        mount: i,
        start: s,
        cancel: fu
    }
}
function Xw(e, t, n) {
    var r = t.Move, i = t.Controller, o = t.Scroll, s = t.Elements.list, a = J(vt, s, "transition"), l;
    function u() {
        he(e).bind(s, "transitionend", function (m) {
            m.target === s && l && (f(),
                l())
        })
    }
    function c(m, g) {
        var y = r.toPosition(m, !0)
            , S = r.getPosition()
            , v = d(m);
        We(y - S) >= 1 && v >= 1 ? n.useScroll ? o.scroll(y, v, !1, g) : (a("transform " + v + "ms " + n.easing),
            r.translate(y, !0),
            l = g) : (r.jump(m),
                g())
    }
    function f() {
        a(""),
            o.cancel()
    }
    function d(m) {
        var g = n.rewindSpeed;
        if (e.is(Hr) && g) {
            var y = i.getIndex(!0)
                , S = i.getEnd();
            if (y === 0 && m >= S || y >= S && m === 0)
                return g
        }
        return n.speed
    }
    return {
        mount: u,
        start: c,
        cancel: f
    }
}
var bw = function () {
    function e(n, r) {
        this.event = he(),
            this.Components = {},
            this.state = Z1(Er),
            this.splides = [],
            this._o = {},
            this._E = {};
        var i = xn(n) ? gv(document, n) : n;
        Ci(i, i + " is invalid."),
            this.root = i,
            r = un({
                label: gt(i, at) || "",
                labelledby: gt(i, Hc) || ""
            }, Yw, e.defaults, r || {});
        try {
            un(r, JSON.parse(gt(i, jc)))
        } catch {
            Ci(!1, "Invalid JSON")
        }
        this._o = Object.create(un({}, r))
    }
    var t = e.prototype;
    return t.mount = function (r, i) {
        var o = this
            , s = this.state
            , a = this.Components;
        Ci(s.is([Er, Vs]), "Already mounted!"),
            s.set(Er),
            this._C = a,
            this._T = i || this._T || (this.is(go) ? Qw : Xw),
            this._E = r || this._E;
        var l = Zi({}, Gw, this._E, {
            Transition: this._T
        });
        return Kn(l, function (u, c) {
            var f = u(o, a, o._o);
            a[c] = f,
                f.setup && f.setup()
        }),
            Kn(a, function (u) {
                u.mount && u.mount()
            }),
            this.emit(_n),
            Lt(this.root, uw),
            s.set($r),
            this.emit(mu),
            this
    }
        ,
        t.sync = function (r) {
            return this.splides.push({
                splide: r
            }),
                r.splides.push({
                    splide: this,
                    isParent: !0
                }),
                this.state.is($r) && (this._C.Sync.remount(),
                    r.Components.Sync.remount()),
                this
        }
        ,
        t.go = function (r) {
            return this._C.Controller.go(r),
                this
        }
        ,
        t.on = function (r, i) {
            return this.event.on(r, i),
                this
        }
        ,
        t.off = function (r) {
            return this.event.off(r),
                this
        }
        ,
        t.emit = function (r) {
            var i;
            return (i = this.event).emit.apply(i, [r].concat(Ln(arguments, 1))),
                this
        }
        ,
        t.add = function (r, i) {
            return this._C.Slides.add(r, i),
                this
        }
        ,
        t.remove = function (r) {
            return this._C.Slides.remove(r),
                this
        }
        ,
        t.is = function (r) {
            return this._o.type === r
        }
        ,
        t.refresh = function () {
            return this.emit(Se),
                this
        }
        ,
        t.destroy = function (r) {
            r === void 0 && (r = !0);
            var i = this.event
                , o = this.state;
            return o.is(Er) ? he(this).on(mu, this.destroy.bind(this, r)) : (Kn(this._C, function (s) {
                s.destroy && s.destroy(r)
            }, !0),
                i.emit(zc),
                i.destroy(),
                r && Qt(this.splides),
                o.set(Vs)),
                this
        }
        ,
        K1(e, [{
            key: "options",
            get: function () {
                return this._o
            },
            set: function (r) {
                this._C.Media.set(r, !0, !0)
            }
        }, {
            key: "length",
            get: function () {
                return this._C.Slides.getLength(!0)
            }
        }, {
            key: "index",
            get: function () {
                return this._C.Controller.getIndex()
            }
        }]),
        e
}()
    , Xc = bw;
Xc.defaults = {};
Xc.STATES = Q1;
var Gd = [[_n, "onMounted"], [mu, "onReady"], [Xt, "onMove"], [Zr, "onMoved"], [Fc, "onClick"], [Sv, "onActive"], [xv, "onInactive"], [Ev, "onVisible"], [Pv, "onHidden"], [Se, "onRefresh"], [Fe, "onUpdated"], [Wr, "onResize"], [ca, "onResized"], [Tv, "onDrag"], [Cv, "onDragging"], [kv, "onDragged"], [fa, "onScroll"], [rr, "onScrolled"], [zc, "onDestroy"], [Av, "onArrowsMounted"], [Lv, "onArrowsUpdated"], [_v, "onPaginationMounted"], [Rv, "onPaginationUpdated"], [Bc, "onNavigationMounted"], [Uc, "onAutoplayPlay"], [Nv, "onAutoplayPlaying"], [$c, "onAutoplayPause"], [Wc, "onLazyLoadLoaded"]];
function bc(...e) {
    return e.filter(Boolean).join(" ")
}
function Is(e) {
    return e !== null && typeof e == "object"
}
function yu(e, t) {
    if (Array.isArray(e) && Array.isArray(t))
        return e.length === t.length && !e.some((n, r) => !yu(n, t[r]));
    if (Is(e) && Is(t)) {
        const n = Object.keys(e)
            , r = Object.keys(t);
        return n.length === r.length && !n.some(i => !Object.prototype.hasOwnProperty.call(t, i) || !yu(e[i], t[i]))
    }
    return e === t
}
function Zw(e, t) {
    return e.length === t.length && !e.some((n, r) => n !== t[r])
}
function qw(e, t) {
    if (e) {
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
            const i = n[r];
            if (i !== "__proto__" && t(e[i], i) === !1)
                break
        }
    }
    return e
}
function wu(e, t) {
    const n = e;
    return qw(t, (r, i) => {
        Array.isArray(r) ? n[i] = r.slice() : Is(r) ? n[i] = wu(Is(n[i]) ? n[i] : {}, r) : n[i] = r
    }
    ),
        n
}
var Jw = ({ children: e, className: t, ...n }) => ne.createElement("div", {
    className: bc("splide__track", t),
    ...n
}, ne.createElement("ul", {
    className: "splide__list"
}, e))
    , Kd = class extends ne.Component {
        constructor() {
            super(...arguments),
                this.splideRef = ne.createRef(),
                this.slides = []
        }
        componentDidMount() {
            const { options: e, extensions: t, transition: n } = this.props
                , { current: r } = this.splideRef;
            r && (this.splide = new Xc(r, e),
                this.bind(this.splide),
                this.splide.mount(t, n),
                this.options = wu({}, e || {}),
                this.slides = this.getSlides())
        }
        componentWillUnmount() {
            this.splide && (this.splide.destroy(),
                this.splide = void 0),
                this.options = void 0,
                this.slides.length = 0
        }
        componentDidUpdate() {
            if (!this.splide)
                return;
            const { options: e } = this.props;
            e && !yu(this.options, e) && (this.splide.options = e,
                this.options = wu({}, e));
            const t = this.getSlides();
            Zw(this.slides, t) || (this.splide.refresh(),
                this.slides = t)
        }
        sync(e) {
            var t;
            (t = this.splide) == null || t.sync(e)
        }
        go(e) {
            var t;
            (t = this.splide) == null || t.go(e)
        }
        getSlides() {
            var e;
            if (this.splide) {
                const t = (e = this.splide.Components.Elements) == null ? void 0 : e.list.children;
                return t && Array.prototype.slice.call(t) || []
            }
            return []
        }
        bind(e) {
            Gd.forEach(([t, n]) => {
                const r = this.props[n];
                typeof r == "function" && e.on(t, (...i) => {
                    r(e, ...i)
                }
                )
            }
            )
        }
        omit(e, t) {
            return t.forEach(n => {
                Object.prototype.hasOwnProperty.call(e, n) && delete e[n]
            }
            ),
                e
        }
        render() {
            const { className: e, tag: t = "div", hasTrack: n = !0, children: r, ...i } = this.props;
            return ne.createElement(t, {
                className: bc("splide", e),
                ref: this.splideRef,
                ...this.omit(i, ["options", ...Gd.map(o => o[1])])
            }, n ? ne.createElement(Jw, null, r) : r)
        }
    }
    , Jt = ({ children: e, className: t, ...n }) => ne.createElement("li", {
        className: bc("splide__slide", t),
        ...n
    }, e);
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
const Yv = j.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
    , Sa = j.createContext({})
    , xa = j.createContext(null)
    , Ea = typeof document < "u"
    , Zc = Ea ? j.useLayoutEffect : j.useEffect
    , Qv = j.createContext({
        strict: !1
    })
    , qc = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    , eS = "framerAppearId"
    , Xv = "data-" + qc(eS);
function tS(e, t, n, r) {
    const { visualElement: i } = j.useContext(Sa)
        , o = j.useContext(Qv)
        , s = j.useContext(xa)
        , a = j.useContext(Yv).reducedMotion
        , l = j.useRef();
    r = r || o.renderer,
        !l.current && r && (l.current = r(e, {
            visualState: t,
            parent: i,
            props: n,
            presenceContext: s,
            blockInitialAnimation: s ? s.initial === !1 : !1,
            reducedMotionConfig: a
        }));
    const u = l.current;
    j.useInsertionEffect(() => {
        u && u.update(n, s)
    }
    );
    const c = j.useRef(!!(n[Xv] && !window.HandoffComplete));
    return Zc(() => {
        u && (u.render(),
            c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
        j.useEffect(() => {
            u && (u.updateFeatures(),
                !c.current && u.animationState && u.animationState.animateChanges(),
                c.current && (c.current = !1,
                    window.HandoffComplete = !0))
        }
        ),
        u
}
function Pr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function nS(e, t, n) {
    return j.useCallback(r => {
        r && e.mount && e.mount(r),
            t && (r ? t.mount(r) : t.unmount()),
            n && (typeof n == "function" ? n(r) : Pr(n) && (n.current = r))
    }
        , [t])
}
function to(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Pa(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Jc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
    , ef = ["initial", ...Jc];
function Ta(e) {
    return Pa(e.animate) || ef.some(t => to(e[t]))
}
function bv(e) {
    return !!(Ta(e) || e.variants)
}
function rS(e, t) {
    if (Ta(e)) {
        const { initial: n, animate: r } = e;
        return {
            initial: n === !1 || to(n) ? n : void 0,
            animate: to(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function iS(e) {
    const { initial: t, animate: n } = rS(e, j.useContext(Sa));
    return j.useMemo(() => ({
        initial: t,
        animate: n
    }), [Yd(t), Yd(n)])
}
function Yd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Qd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
    , no = {};
for (const e in Qd)
    no[e] = {
        isEnabled: t => Qd[e].some(n => !!t[n])
    };
function oS(e) {
    for (const t in e)
        no[t] = {
            ...no[t],
            ...e[t]
        }
}
const tf = j.createContext({})
    , Zv = j.createContext({})
    , sS = Symbol.for("motionComponentSymbol");
function aS({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
    e && oS(e);
    function o(a, l) {
        let u;
        const c = {
            ...j.useContext(Yv),
            ...a,
            layoutId: lS(a)
        }
            , { isStatic: f } = c
            , d = iS(a)
            , m = r(a, f);
        if (!f && Ea) {
            d.visualElement = tS(i, m, c, t);
            const g = j.useContext(Zv)
                , y = j.useContext(Qv).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, g))
        }
        return j.createElement(Sa.Provider, {
            value: d
        }, u && d.visualElement ? j.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, a, nS(m, d.visualElement, l), m, f, d.visualElement))
    }
    const s = j.forwardRef(o);
    return s[sS] = i,
        s
}
function lS({ layoutId: e }) {
    const t = j.useContext(tf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function uS(e) {
    function t(r, i = {}) {
        return aS(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)),
            n.get(i))
    })
}
const cS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function nf(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(cS.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Fs = {};
function fS(e) {
    Object.assign(Fs, e)
}
const yo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
    , ir = new Set(yo);
function qv(e, { layout: t, layoutId: n }) {
    return ir.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fs[e] || e === "opacity")
}
const Ye = e => !!(e && e.getVelocity)
    , dS = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    }
    , hS = yo.length;
function pS(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, i) {
    let o = "";
    for (let s = 0; s < hS; s++) {
        const a = yo[s];
        if (e[a] !== void 0) {
            const l = dS[a] || a;
            o += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
        o = o.trim(),
        i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
        o
}
const Jv = e => t => typeof t == "string" && t.startsWith(e)
    , eg = Jv("--")
    , Su = Jv("var(--")
    , mS = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
    , vS = (e, t) => t && typeof e == "number" ? t.transform(e) : e
    , Pn = (e, t, n) => Math.min(Math.max(n, e), t)
    , or = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    }
    , Ai = {
        ...or,
        transform: e => Pn(0, 1, e)
    }
    , Bo = {
        ...or,
        default: 1
    }
    , Li = e => Math.round(e * 1e5) / 1e5
    , Ca = /(-)?([\d]*\.?[\d])+/g
    , tg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
    , gS = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function wo(e) {
    return typeof e == "string"
}
const So = e => ({
    test: t => wo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
    , en = So("deg")
    , At = So("%")
    , $ = So("px")
    , yS = So("vh")
    , wS = So("vw")
    , Xd = {
        ...At,
        parse: e => At.parse(e) / 100,
        transform: e => At.transform(e * 100)
    }
    , bd = {
        ...or,
        transform: Math.round
    }
    , ng = {
        borderWidth: $,
        borderTopWidth: $,
        borderRightWidth: $,
        borderBottomWidth: $,
        borderLeftWidth: $,
        borderRadius: $,
        radius: $,
        borderTopLeftRadius: $,
        borderTopRightRadius: $,
        borderBottomRightRadius: $,
        borderBottomLeftRadius: $,
        width: $,
        maxWidth: $,
        height: $,
        maxHeight: $,
        size: $,
        top: $,
        right: $,
        bottom: $,
        left: $,
        padding: $,
        paddingTop: $,
        paddingRight: $,
        paddingBottom: $,
        paddingLeft: $,
        margin: $,
        marginTop: $,
        marginRight: $,
        marginBottom: $,
        marginLeft: $,
        rotate: en,
        rotateX: en,
        rotateY: en,
        rotateZ: en,
        scale: Bo,
        scaleX: Bo,
        scaleY: Bo,
        scaleZ: Bo,
        skew: en,
        skewX: en,
        skewY: en,
        distance: $,
        translateX: $,
        translateY: $,
        translateZ: $,
        x: $,
        y: $,
        z: $,
        perspective: $,
        transformPerspective: $,
        opacity: Ai,
        originX: Xd,
        originY: Xd,
        originZ: $,
        zIndex: bd,
        fillOpacity: Ai,
        strokeOpacity: Ai,
        numOctaves: bd
    };
function rf(e, t, n, r) {
    const { style: i, vars: o, transform: s, transformOrigin: a } = e;
    let l = !1
        , u = !1
        , c = !0;
    for (const f in t) {
        const d = t[f];
        if (eg(f)) {
            o[f] = d;
            continue
        }
        const m = ng[f]
            , g = vS(d, m);
        if (ir.has(f)) {
            if (l = !0,
                s[f] = g,
                !c)
                continue;
            d !== (m.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
                a[f] = g) : i[f] = g
    }
    if (t.transform || (l || r ? i.transform = pS(e.transform, n, c, r) : i.transform && (i.transform = "none")),
        u) {
        const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = a;
        i.transformOrigin = `${f} ${d} ${m}`
    }
}
const of = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function rg(e, t, n) {
    for (const r in t)
        !Ye(t[r]) && !qv(r, n) && (e[r] = t[r])
}
function SS({ transformTemplate: e }, t, n) {
    return j.useMemo(() => {
        const r = of();
        return rf(r, t, {
            enableHardwareAcceleration: !n
        }, e),
            Object.assign({}, r.vars, r.style)
    }
        , [t])
}
function xS(e, t, n) {
    const r = e.style || {}
        , i = {};
    return rg(i, r, e),
        Object.assign(i, SS(e, t, n)),
        e.transformValues ? e.transformValues(i) : i
}
function ES(e, t, n) {
    const r = {}
        , i = xS(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
        i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
        i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
        r.style = i,
        r
}
const PS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function zs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || PS.has(e)
}
let ig = e => !zs(e);
function TS(e) {
    e && (ig = t => t.startsWith("on") ? !zs(t) : e(t))
}
try {
    TS(require("@emotion/is-prop-valid").default)
} catch { }
function CS(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (ig(i) || n === !0 && zs(i) || !t && !zs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Zd(e, t, n) {
    return typeof e == "string" ? e : $.transform(t + n * e)
}
function kS(e, t, n) {
    const r = Zd(t, e.x, e.width)
        , i = Zd(n, e.y, e.height);
    return `${r} ${i}`
}
const AS = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
    , LS = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function _S(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? AS : LS;
    e[o.offset] = $.transform(-r);
    const s = $.transform(t)
        , a = $.transform(n);
    e[o.array] = `${s} ${a}`
}
function sf(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a = 1, pathOffset: l = 0, ...u }, c, f, d) {
    if (rf(e, u, c, d),
        f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
        e.style = {};
    const { attrs: m, style: g, dimensions: y } = e;
    m.transform && (y && (g.transform = m.transform),
        delete m.transform),
        y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = kS(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
        t !== void 0 && (m.x = t),
        n !== void 0 && (m.y = n),
        r !== void 0 && (m.scale = r),
        s !== void 0 && _S(m, s, a, l, !1)
}
const og = () => ({
    ...of(),
    attrs: {}
})
    , af = e => typeof e == "string" && e.toLowerCase() === "svg";
function RS(e, t, n, r) {
    const i = j.useMemo(() => {
        const o = og();
        return sf(o, t, {
            enableHardwareAcceleration: !1
        }, af(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
        , [t]);
    if (e.style) {
        const o = {};
        rg(o, e.style, e),
            i.style = {
                ...o,
                ...i.style
            }
    }
    return i
}
function NS(e = !1) {
    return (n, r, i, { latestValues: o }, s) => {
        const l = (nf(n) ? RS : ES)(r, o, s, n)
            , c = {
                ...CS(r, typeof n == "string", e),
                ...l,
                ref: i
            }
            , { children: f } = r
            , d = j.useMemo(() => Ye(f) ? f.get() : f, [f]);
        return j.createElement(n, {
            ...c,
            children: d
        })
    }
}
function sg(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const ag = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function lg(e, t, n, r) {
    sg(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(ag.has(i) ? i : qc(i), t.attrs[i])
}
function lf(e, t) {
    const { style: n } = e
        , r = {};
    for (const i in n)
        (Ye(n[i]) || t.style && Ye(t.style[i]) || qv(i, e)) && (r[i] = n[i]);
    return r
}
function ug(e, t) {
    const n = lf(e, t);
    for (const r in e)
        if (Ye(e[r]) || Ye(t[r])) {
            const i = yo.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}
function uf(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
        t
}
function cg(e) {
    const t = j.useRef(null);
    return t.current === null && (t.current = e()),
        t.current
}
const Bs = e => Array.isArray(e)
    , DS = e => !!(e && typeof e == "object" && e.mix && e.toValue)
    , VS = e => Bs(e) ? e[e.length - 1] || 0 : e;
function as(e) {
    const t = Ye(e) ? e.get() : e;
    return DS(t) ? t.toValue() : t
}
function OS({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, o) {
    const s = {
        latestValues: MS(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)),
        s
}
const fg = e => (t, n) => {
    const r = j.useContext(Sa)
        , i = j.useContext(xa)
        , o = () => OS(e, t, r, i);
    return n ? o() : cg(o)
}
    ;
function MS(e, t, n, r) {
    const i = {}
        , o = r(e, {});
    for (const d in o)
        i[d] = as(o[d]);
    let { initial: s, animate: a } = e;
    const l = Ta(e)
        , u = bv(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
        a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    return f && typeof f != "boolean" && !Pa(f) && (Array.isArray(f) ? f : [f]).forEach(m => {
        const g = uf(e, m);
        if (!g)
            return;
        const { transitionEnd: y, transition: S, ...v } = g;
        for (const h in v) {
            let p = v[h];
            if (Array.isArray(p)) {
                const w = c ? p.length - 1 : 0;
                p = p[w]
            }
            p !== null && (i[h] = p)
        }
        for (const h in y)
            i[h] = y[h]
    }
    ),
        i
}
const ve = e => e;
class qd {
    constructor() {
        this.order = [],
            this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
                this.order.push(t),
                !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
            this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
            this.scheduled.clear()
    }
}
function jS(e) {
    let t = new qd
        , n = new qd
        , r = 0
        , i = !1
        , o = !1;
    const s = new WeakSet
        , a = {
            schedule: (l, u = !1, c = !1) => {
                const f = c && i
                    , d = f ? t : n;
                return u && s.add(l),
                    d.add(l) && f && i && (r = t.order.length),
                    l
            }
            ,
            cancel: l => {
                n.remove(l),
                    s.delete(l)
            }
            ,
            process: l => {
                if (i) {
                    o = !0;
                    return
                }
                if (i = !0,
                    [t, n] = [n, t],
                    n.clear(),
                    r = t.order.length,
                    r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(l),
                            s.has(c) && (a.schedule(c),
                                e())
                    }
                i = !1,
                    o && (o = !1,
                        a.process(l))
            }
        };
    return a
}
const Uo = ["prepare", "read", "update", "preRender", "render", "postRender"]
    , IS = 40;
function FS(e, t) {
    let n = !1
        , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
        , o = Uo.reduce((f, d) => (f[d] = jS(() => n = !0),
            f), {})
        , s = f => o[f].process(i)
        , a = () => {
            const f = performance.now();
            n = !1,
                i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, IS), 1),
                i.timestamp = f,
                i.isProcessing = !0,
                Uo.forEach(s),
                i.isProcessing = !1,
                n && t && (r = !1,
                    e(a))
        }
        , l = () => {
            n = !0,
                r = !0,
                i.isProcessing || e(a)
        }
        ;
    return {
        schedule: Uo.reduce((f, d) => {
            const m = o[d];
            return f[d] = (g, y = !1, S = !1) => (n || l(),
                m.schedule(g, y, S)),
                f
        }
            , {}),
        cancel: f => Uo.forEach(d => o[d].cancel(f)),
        state: i,
        steps: o
    }
}
const { schedule: ee, cancel: bt, state: Ne, steps: ol } = FS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ve, !0)
    , zS = {
        useVisualState: fg({
            scrapeMotionValuesFromProps: ug,
            createRenderState: og,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
                ee.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }
                ),
                    ee.render(() => {
                        sf(n, r, {
                            enableHardwareAcceleration: !1
                        }, af(t.tagName), e.transformTemplate),
                            lg(t, n)
                    }
                    )
            }
        })
    }
    , BS = {
        useVisualState: fg({
            scrapeMotionValuesFromProps: lf,
            createRenderState: of
        })
    };
function US(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
        ...nf(e) ? zS : BS,
        preloadedFeatures: n,
        useRender: NS(t),
        createVisualElement: r,
        Component: e
    }
}
function zt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r),
        () => e.removeEventListener(t, n)
}
const dg = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function ka(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const $S = e => t => dg(t) && e(t, ka(t));
function $t(e, t, n, r) {
    return zt(e, t, $S(n), r)
}
const WS = (e, t) => n => t(e(n))
    , yn = (...e) => e.reduce(WS);
function hg(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
            ;
        return t === null ? (t = e,
            n) : !1
    }
}
const Jd = hg("dragHorizontal")
    , eh = hg("dragVertical");
function pg(e) {
    let t = !1;
    if (e === "y")
        t = eh();
    else if (e === "x")
        t = Jd();
    else {
        const n = Jd()
            , r = eh();
        n && r ? t = () => {
            n(),
                r()
        }
            : (n && n(),
                r && r())
    }
    return t
}
function mg() {
    const e = pg(!0);
    return e ? (e(),
        !1) : !0
}
class Nn {
    constructor(t) {
        this.isMounted = !1,
            this.node = t
    }
    update() { }
}
function th(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
        , r = "onHover" + (t ? "Start" : "End")
        , i = (o, s) => {
            if (o.pointerType === "touch" || mg())
                return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
                a[r] && ee.update(() => a[r](o, s))
        }
        ;
    return $t(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class HS extends Nn {
    mount() {
        this.unmount = yn(th(this.node, !0), th(this.node, !1))
    }
    unmount() { }
}
class GS extends Nn {
    constructor() {
        super(...arguments),
            this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
            this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
            this.isActive = !1)
    }
    mount() {
        this.unmount = yn(zt(this.node.current, "focus", () => this.onFocus()), zt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}
const vg = (e, t) => t ? e === t ? !0 : vg(e, t.parentElement) : !1;
function sl(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, ka(n))
}
class KS extends Nn {
    constructor() {
        super(...arguments),
            this.removeStartListeners = ve,
            this.removeEndListeners = ve,
            this.removeAccessibleListeners = ve,
            this.startPointerPress = (t, n) => {
                if (this.isPressing)
                    return;
                this.removeEndListeners();
                const r = this.node.getProps()
                    , o = $t(window, "pointerup", (a, l) => {
                        if (!this.checkPressEnd())
                            return;
                        const { onTap: u, onTapCancel: c, globalTapTarget: f } = this.node.getProps();
                        ee.update(() => {
                            !f && !vg(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                        }
                        )
                    }
                        , {
                            passive: !(r.onTap || r.onPointerUp)
                        })
                    , s = $t(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                        passive: !(r.onTapCancel || r.onPointerCancel)
                    });
                this.removeEndListeners = yn(o, s),
                    this.startPress(t, n)
            }
            ,
            this.startAccessiblePress = () => {
                const t = o => {
                    if (o.key !== "Enter" || this.isPressing)
                        return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || sl("up", (l, u) => {
                            const { onTap: c } = this.node.getProps();
                            c && ee.update(() => c(l, u))
                        }
                        )
                    }
                        ;
                    this.removeEndListeners(),
                        this.removeEndListeners = zt(this.node.current, "keyup", s),
                        sl("down", (a, l) => {
                            this.startPress(a, l)
                        }
                        )
                }
                    , n = zt(this.node.current, "keydown", t)
                    , r = () => {
                        this.isPressing && sl("cancel", (o, s) => this.cancelPress(o, s))
                    }
                    , i = zt(this.node.current, "blur", r);
                this.removeAccessibleListeners = yn(n, i)
            }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const { onTapStart: r, whileTap: i } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
            r && ee.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
            this.isPressing = !1,
            this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
            !mg()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel: r } = this.node.getProps();
        r && ee.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
            , n = $t(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            })
            , r = zt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = yn(n, r)
    }
    unmount() {
        this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners()
    }
}
const xu = new WeakMap
    , al = new WeakMap
    , YS = e => {
        const t = xu.get(e.target);
        t && t(e)
    }
    , QS = e => {
        e.forEach(YS)
    }
    ;
function XS({ root: e, ...t }) {
    const n = e || document;
    al.has(n) || al.set(n, {});
    const r = al.get(n)
        , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(QS, {
        root: e,
        ...t
    })),
        r[i]
}
function bS(e, t, n) {
    const r = XS(t);
    return xu.set(e, n),
        r.observe(e),
        () => {
            xu.delete(e),
                r.unobserve(e)
        }
}
const ZS = {
    some: 0,
    all: 1
};
class qS extends Nn {
    constructor() {
        super(...arguments),
            this.hasEnteredView = !1,
            this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps()
            , { root: n, margin: r, amount: i = "some", once: o } = t
            , s = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: typeof i == "number" ? i : ZS[i]
            }
            , a = l => {
                const { isIntersecting: u } = l;
                if (this.isInView === u || (this.isInView = u,
                    o && !u && this.hasEnteredView))
                    return;
                u && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", u);
                const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps()
                    , d = u ? c : f;
                d && d(l)
            }
            ;
        return bS(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(JS(t, n)) && this.startObserver()
    }
    unmount() { }
}
function JS({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return n => e[n] !== t[n]
}
const ex = {
    inView: {
        Feature: qS
    },
    tap: {
        Feature: KS
    },
    focus: {
        Feature: GS
    },
    hover: {
        Feature: HS
    }
};
function gg(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function tx(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()),
        t
}
function nx(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()),
        t
}
function Aa(e, t, n) {
    const r = e.getProps();
    return uf(r, t, n !== void 0 ? n : r.custom, tx(e), nx(e))
}
let Us = ve;
const Yn = e => e * 1e3
    , Wt = e => e / 1e3
    , rx = {
        current: !1
    }
    , yg = e => Array.isArray(e) && typeof e[0] == "number";
function wg(e) {
    return !!(!e || typeof e == "string" && Sg[e] || yg(e) || Array.isArray(e) && e.every(wg))
}
const mi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
    , Sg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: mi([0, .65, .55, 1]),
        circOut: mi([.55, 0, 1, .45]),
        backIn: mi([.31, .01, .66, -.59]),
        backOut: mi([.33, 1.53, .69, .99])
    };
function xg(e) {
    if (e)
        return yg(e) ? mi(e) : Array.isArray(e) ? e.map(xg) : Sg[e]
}
function ix(e, t, n, { delay: r = 0, duration: i, repeat: o = 0, repeatType: s = "loop", ease: a, times: l } = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = xg(a);
    return Array.isArray(c) && (u.easing = c),
        e.animate(u, {
            delay: r,
            duration: i,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: o + 1,
            direction: s === "reverse" ? "alternate" : "normal"
        })
}
function ox(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Eg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    , sx = 1e-7
    , ax = 12;
function lx(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
            o = Eg(s, r, i) - e,
            o > 0 ? n = s : t = s;
    while (Math.abs(o) > sx && ++a < ax);
    return s
}
function xo(e, t, n, r) {
    if (e === t && n === r)
        return ve;
    const i = o => lx(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Eg(i(o), t, r)
}
const ux = xo(.42, 0, 1, 1)
    , cx = xo(0, 0, .58, 1)
    , Pg = xo(.42, 0, .58, 1)
    , fx = e => Array.isArray(e) && typeof e[0] != "number"
    , Tg = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    , Cg = e => t => 1 - e(1 - t)
    , cf = e => 1 - Math.sin(Math.acos(e))
    , kg = Cg(cf)
    , dx = Tg(cf)
    , Ag = xo(.33, 1.53, .69, .99)
    , ff = Cg(Ag)
    , hx = Tg(ff)
    , px = e => (e *= 2) < 1 ? .5 * ff(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
    , nh = {
        linear: ve,
        easeIn: ux,
        easeInOut: Pg,
        easeOut: cx,
        circIn: cf,
        circInOut: dx,
        circOut: kg,
        backIn: ff,
        backInOut: hx,
        backOut: Ag,
        anticipate: px
    }
    , rh = e => {
        if (Array.isArray(e)) {
            Us(e.length === 4);
            const [t, n, r, i] = e;
            return xo(t, n, r, i)
        } else if (typeof e == "string")
            return Us(nh[e] !== void 0),
                nh[e];
        return e
    }
    , df = (e, t) => n => !!(wo(n) && gS.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
    , Lg = (e, t, n) => r => {
        if (!wo(r))
            return r;
        const [i, o, s, a] = r.match(Ca);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    }
    , mx = e => Pn(0, 255, e)
    , ll = {
        ...or,
        transform: e => Math.round(mx(e))
    }
    , Wn = {
        test: df("rgb", "red"),
        parse: Lg("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ll.transform(e) + ", " + ll.transform(t) + ", " + ll.transform(n) + ", " + Li(Ai.transform(r)) + ")"
    };
function vx(e) {
    let t = ""
        , n = ""
        , r = ""
        , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        r = e.substring(5, 7),
        i = e.substring(7, 9)) : (t = e.substring(1, 2),
            n = e.substring(2, 3),
            r = e.substring(3, 4),
            i = e.substring(4, 5),
            t += t,
            n += n,
            r += r,
            i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Eu = {
    test: df("#"),
    parse: vx,
    transform: Wn.transform
}
    , Tr = {
        test: df("hsl", "hue"),
        parse: Lg("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + At.transform(Li(t)) + ", " + At.transform(Li(n)) + ", " + Li(Ai.transform(r)) + ")"
    }
    , Me = {
        test: e => Wn.test(e) || Eu.test(e) || Tr.test(e),
        parse: e => Wn.test(e) ? Wn.parse(e) : Tr.test(e) ? Tr.parse(e) : Eu.parse(e),
        transform: e => wo(e) ? e : e.hasOwnProperty("red") ? Wn.transform(e) : Tr.transform(e)
    }
    , ce = (e, t, n) => -n * e + n * t + e;
function ul(e, t, n) {
    return n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function gx({ hue: e, saturation: t, lightness: n, alpha: r }) {
    e /= 360,
        t /= 100,
        n /= 100;
    let i = 0
        , o = 0
        , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
            , l = 2 * n - a;
        i = ul(l, a, e + 1 / 3),
            o = ul(l, a, e),
            s = ul(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const cl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
    , yx = [Eu, Wn, Tr]
    , wx = e => yx.find(t => t.test(e));
function ih(e) {
    const t = wx(e);
    let n = t.parse(e);
    return t === Tr && (n = gx(n)),
        n
}
const _g = (e, t) => {
    const n = ih(e)
        , r = ih(t)
        , i = {
            ...n
        };
    return o => (i.red = cl(n.red, r.red, o),
        i.green = cl(n.green, r.green, o),
        i.blue = cl(n.blue, r.blue, o),
        i.alpha = ce(n.alpha, r.alpha, o),
        Wn.transform(i))
}
    ;
function Sx(e) {
    var t, n;
    return isNaN(e) && wo(e) && (((t = e.match(Ca)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(tg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Rg = {
    regex: mS,
    countKey: "Vars",
    token: "${v}",
    parse: ve
}
    , Ng = {
        regex: tg,
        countKey: "Colors",
        token: "${c}",
        parse: Me.parse
    }
    , Dg = {
        regex: Ca,
        countKey: "Numbers",
        token: "${n}",
        parse: or.parse
    };
function fl(e, { regex: t, countKey: n, token: r, parse: i }) {
    const o = e.tokenised.match(t);
    o && (e["num" + n] = o.length,
        e.tokenised = e.tokenised.replace(t, r),
        e.values.push(...o.map(i)))
}
function $s(e) {
    const t = e.toString()
        , n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && fl(n, Rg),
        fl(n, Ng),
        fl(n, Dg),
        n
}
function Vg(e) {
    return $s(e).values
}
function Og(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = $s(e)
        , o = t.length;
    return s => {
        let a = i;
        for (let l = 0; l < o; l++)
            l < r ? a = a.replace(Rg.token, s[l]) : l < r + n ? a = a.replace(Ng.token, Me.transform(s[l])) : a = a.replace(Dg.token, Li(s[l]));
        return a
    }
}
const xx = e => typeof e == "number" ? 0 : e;
function Ex(e) {
    const t = Vg(e);
    return Og(e)(t.map(xx))
}
const Tn = {
    test: Sx,
    parse: Vg,
    createTransformer: Og,
    getAnimatableNone: Ex
}
    , Mg = (e, t) => n => `${n > 0 ? t : e}`;
function jg(e, t) {
    return typeof e == "number" ? n => ce(e, t, n) : Me.test(e) ? _g(e, t) : e.startsWith("var(") ? Mg(e, t) : Fg(e, t)
}
const Ig = (e, t) => {
    const n = [...e]
        , r = n.length
        , i = e.map((o, s) => jg(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
    , Px = (e, t) => {
        const n = {
            ...e,
            ...t
        }
            , r = {};
        for (const i in n)
            e[i] !== void 0 && t[i] !== void 0 && (r[i] = jg(e[i], t[i]));
        return i => {
            for (const o in r)
                n[o] = r[o](i);
            return n
        }
    }
    , Fg = (e, t) => {
        const n = Tn.createTransformer(t)
            , r = $s(e)
            , i = $s(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? yn(Ig(r.values, i.values), n) : Mg(e, t)
    }
    , ro = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }
    , oh = (e, t) => n => ce(e, t, n);
function Tx(e) {
    return typeof e == "number" ? oh : typeof e == "string" ? Me.test(e) ? _g : Fg : Array.isArray(e) ? Ig : typeof e == "object" ? Px : oh
}
function Cx(e, t, n) {
    const r = []
        , i = n || Tx(e[0])
        , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ve : t;
            a = yn(l, a)
        }
        r.push(a)
    }
    return r
}
function zg(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const o = e.length;
    if (Us(o === t.length),
        o === 1)
        return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(),
        t = [...t].reverse());
    const s = Cx(t, r, i)
        , a = s.length
        , l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                    ;
            const f = ro(e[c], e[c + 1], u);
            return s[c](f)
        }
        ;
    return n ? u => l(Pn(e[0], e[o - 1], u)) : l
}
function kx(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ro(0, t, r);
        e.push(ce(n, 1, i))
    }
}
function Ax(e) {
    const t = [0];
    return kx(t, e.length - 1),
        t
}
function Lx(e, t) {
    return e.map(n => n * t)
}
function _x(e, t) {
    return e.map(() => t || Pg).splice(0, e.length - 1)
}
function Ws({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const i = fx(r) ? r.map(rh) : rh(r)
        , o = {
            done: !1,
            value: t[0]
        }
        , s = Lx(n && n.length === t.length ? n : Ax(t), e)
        , a = zg(s, t, {
            ease: Array.isArray(i) ? i : _x(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
            o.done = l >= e,
            o)
    }
}
function Bg(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Rx = 5;
function Ug(e, t, n) {
    const r = Math.max(t - Rx, 0);
    return Bg(n - e(r), t - r)
}
const dl = .001
    , Nx = .01
    , Dx = 10
    , Vx = .05
    , Ox = 1;
function Mx({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
    let i, o, s = 1 - t;
    s = Pn(Vx, Ox, s),
        e = Pn(Nx, Dx, Wt(e)),
        s < 1 ? (i = u => {
            const c = u * s
                , f = c * e
                , d = c - n
                , m = Pu(u, s)
                , g = Math.exp(-f);
            return dl - d / m * g
        }
            ,
            o = u => {
                const f = u * s * e
                    , d = f * n + n
                    , m = Math.pow(s, 2) * Math.pow(u, 2) * e
                    , g = Math.exp(-f)
                    , y = Pu(Math.pow(u, 2), s);
                return (-i(u) + dl > 0 ? -1 : 1) * ((d - m) * g) / y
            }
        ) : (i = u => {
            const c = Math.exp(-u * e)
                , f = (u - n) * e + 1;
            return -dl + c * f
        }
            ,
            o = u => {
                const c = Math.exp(-u * e)
                    , f = (n - u) * (e * e);
                return c * f
            }
        );
    const a = 5 / e
        , l = Ix(i, o, a);
    if (e = Yn(e),
        isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const jx = 12;
function Ix(e, t, n) {
    let r = n;
    for (let i = 1; i < jx; i++)
        r = r - e(r) / t(r);
    return r
}
function Pu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Fx = ["duration", "bounce"]
    , zx = ["stiffness", "damping", "mass"];
function sh(e, t) {
    return t.some(n => e[n] !== void 0)
}
function Bx(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!sh(e, zx) && sh(e, Fx)) {
        const n = Mx(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
            t.isResolvedFromDuration = !0
    }
    return t
}
function $g({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0]
        , o = e[e.length - 1]
        , s = {
            done: !1,
            value: i
        }
        , { stiffness: a, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: d } = Bx({
            ...r,
            velocity: -Wt(r.velocity || 0)
        })
        , m = f || 0
        , g = l / (2 * Math.sqrt(a * u))
        , y = o - i
        , S = Wt(Math.sqrt(a / u))
        , v = Math.abs(y) < 5;
    n || (n = v ? .01 : 2),
        t || (t = v ? .005 : .5);
    let h;
    if (g < 1) {
        const p = Pu(S, g);
        h = w => {
            const x = Math.exp(-g * S * w);
            return o - x * ((m + g * S * y) / p * Math.sin(p * w) + y * Math.cos(p * w))
        }
    } else if (g === 1)
        h = p => o - Math.exp(-S * p) * (y + (m + S * y) * p);
    else {
        const p = S * Math.sqrt(g * g - 1);
        h = w => {
            const x = Math.exp(-g * S * w)
                , C = Math.min(p * w, 300);
            return o - x * ((m + g * S * y) * Math.sinh(C) + p * y * Math.cosh(C)) / p
        }
    }
    return {
        calculatedDuration: d && c || null,
        next: p => {
            const w = h(p);
            if (d)
                s.done = p >= c;
            else {
                let x = m;
                p !== 0 && (g < 1 ? x = Ug(h, p, w) : x = 0);
                const C = Math.abs(x) <= n
                    , E = Math.abs(o - w) <= t;
                s.done = C && E
            }
            return s.value = s.done ? o : w,
                s
        }
    }
}
function ah({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = .5, restSpeed: c }) {
    const f = e[0]
        , d = {
            done: !1,
            value: f
        }
        , m = P => a !== void 0 && P < a || l !== void 0 && P > l
        , g = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let y = n * t;
    const S = f + y
        , v = s === void 0 ? S : s(S);
    v !== S && (y = v - f);
    const h = P => -y * Math.exp(-P / r)
        , p = P => v + h(P)
        , w = P => {
            const D = h(P)
                , R = p(P);
            d.done = Math.abs(D) <= u,
                d.value = d.done ? v : R
        }
        ;
    let x, C;
    const E = P => {
        m(d.value) && (x = P,
            C = $g({
                keyframes: [d.value, g(d.value)],
                velocity: Ug(p, P, d.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c
            }))
    }
        ;
    return E(0),
    {
        calculatedDuration: null,
        next: P => {
            let D = !1;
            return !C && x === void 0 && (D = !0,
                w(P),
                E(P)),
                x !== void 0 && P > x ? C.next(P - x) : (!D && w(P),
                    d)
        }
    }
}
const Ux = e => {
    const t = ({ timestamp: n }) => e(n);
    return {
        start: () => ee.update(t, !0),
        stop: () => bt(t),
        now: () => Ne.isProcessing ? Ne.timestamp : performance.now()
    }
}
    , lh = 2e4;
function uh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < lh;)
        t += n,
            r = e.next(t);
    return t >= lh ? 1 / 0 : t
}
const $x = {
    decay: ah,
    inertia: ah,
    tween: Ws,
    keyframes: Ws,
    spring: $g
};
function Hs({ autoplay: e = !0, delay: t = 0, driver: n = Ux, keyframes: r, type: i = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: f, ...d }) {
    let m = 1, g = !1, y, S;
    const v = () => {
        S = new Promise(_ => {
            y = _
        }
        )
    }
        ;
    v();
    let h;
    const p = $x[i] || Ws;
    let w;
    p !== Ws && typeof r[0] != "number" && (w = zg([0, 100], r, {
        clamp: !1
    }),
        r = [0, 100]);
    const x = p({
        ...d,
        keyframes: r
    });
    let C;
    a === "mirror" && (C = p({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let E = "idle"
        , P = null
        , D = null
        , R = null;
    x.calculatedDuration === null && o && (x.calculatedDuration = uh(x));
    const { calculatedDuration: V } = x;
    let M = 1 / 0
        , I = 1 / 0;
    V !== null && (M = V + s,
        I = M * (o + 1) - s);
    let z = 0;
    const W = _ => {
        if (D === null)
            return;
        m > 0 && (D = Math.min(D, _)),
            m < 0 && (D = Math.min(_ - I / m, D)),
            P !== null ? z = P : z = Math.round(_ - D) * m;
        const U = z - t * (m >= 0 ? 1 : -1)
            , ie = m >= 0 ? U < 0 : U > I;
        z = Math.max(U, 0),
            E === "finished" && P === null && (z = I);
        let Z = z
            , Oe = x;
        if (o) {
            const oe = Math.min(z, I) / M;
            let ge = Math.floor(oe)
                , Nt = oe % 1;
            !Nt && oe >= 1 && (Nt = 1),
                Nt === 1 && ge--,
                ge = Math.min(ge, o + 1),
                !!(ge % 2) && (a === "reverse" ? (Nt = 1 - Nt,
                    s && (Nt -= s / M)) : a === "mirror" && (Oe = C)),
                Z = Pn(0, 1, Nt) * M
        }
        const O = ie ? {
            done: !1,
            value: r[0]
        } : Oe.next(Z);
        w && (O.value = w(O.value));
        let { done: Q } = O;
        !ie && V !== null && (Q = m >= 0 ? z >= I : z <= 0);
        const Le = P === null && (E === "finished" || E === "running" && Q);
        return f && f(O.value),
            Le && A(),
            O
    }
        , H = () => {
            h && h.stop(),
                h = void 0
        }
        , Y = () => {
            E = "idle",
                H(),
                y(),
                v(),
                D = R = null
        }
        , A = () => {
            E = "finished",
                c && c(),
                H(),
                y()
        }
        , L = () => {
            if (g)
                return;
            h || (h = n(W));
            const _ = h.now();
            l && l(),
                P !== null ? D = _ - P : (!D || E === "finished") && (D = _),
                E === "finished" && v(),
                R = D,
                P = null,
                E = "running",
                h.start()
        }
        ;
    e && L();
    const k = {
        then(_, U) {
            return S.then(_, U)
        },
        get time() {
            return Wt(z)
        },
        set time(_) {
            _ = Yn(_),
                z = _,
                P !== null || !h || m === 0 ? P = _ : D = h.now() - _ / m
        },
        get duration() {
            const _ = x.calculatedDuration === null ? uh(x) : x.calculatedDuration;
            return Wt(_)
        },
        get speed() {
            return m
        },
        set speed(_) {
            _ === m || !h || (m = _,
                k.time = Wt(z))
        },
        get state() {
            return E
        },
        play: L,
        pause: () => {
            E = "paused",
                P = z
        }
        ,
        stop: () => {
            g = !0,
                E !== "idle" && (E = "idle",
                    u && u(),
                    Y())
        }
        ,
        cancel: () => {
            R !== null && W(R),
                Y()
        }
        ,
        complete: () => {
            E = "finished"
        }
        ,
        sample: _ => (D = 0,
            W(_))
    };
    return k
}
function Wx(e) {
    let t;
    return () => (t === void 0 && (t = e()),
        t)
}
const Hx = Wx(() => Object.hasOwnProperty.call(Element.prototype, "animate"))
    , Gx = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
    , $o = 10
    , Kx = 2e4
    , Yx = (e, t) => t.type === "spring" || e === "backgroundColor" || !wg(t.ease);
function Qx(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (!(Hx() && Gx.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let s = !1, a, l, u = !1;
    const c = () => {
        l = new Promise(p => {
            a = p
        }
        )
    }
        ;
    c();
    let { keyframes: f, duration: d = 300, ease: m, times: g } = i;
    if (Yx(t, i)) {
        const p = Hs({
            ...i,
            repeat: 0,
            delay: 0
        });
        let w = {
            done: !1,
            value: f[0]
        };
        const x = [];
        let C = 0;
        for (; !w.done && C < Kx;)
            w = p.sample(C),
                x.push(w.value),
                C += $o;
        g = void 0,
            f = x,
            d = C - $o,
            m = "linear"
    }
    const y = ix(e.owner.current, t, f, {
        ...i,
        duration: d,
        ease: m,
        times: g
    })
        , S = () => {
            u = !1,
                y.cancel()
        }
        , v = () => {
            u = !0,
                ee.update(S),
                a(),
                c()
        }
        ;
    return y.onfinish = () => {
        u || (e.set(ox(f, i)),
            r && r(),
            v())
    }
        ,
    {
        then(p, w) {
            return l.then(p, w)
        },
        attachTimeline(p) {
            return y.timeline = p,
                y.onfinish = null,
                ve
        },
        get time() {
            return Wt(y.currentTime || 0)
        },
        set time(p) {
            y.currentTime = Yn(p)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(p) {
            y.playbackRate = p
        },
        get duration() {
            return Wt(d)
        },
        play: () => {
            s || (y.play(),
                bt(S))
        }
        ,
        pause: () => y.pause(),
        stop: () => {
            if (s = !0,
                y.playState === "idle")
                return;
            const { currentTime: p } = y;
            if (p) {
                const w = Hs({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(w.sample(p - $o).value, w.sample(p).value, $o)
            }
            v()
        }
        ,
        complete: () => {
            u || y.finish()
        }
        ,
        cancel: v
    }
}
function Xx({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (n && n(e[e.length - 1]),
        r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ve,
        pause: ve,
        stop: ve,
        then: o => (o(),
            Promise.resolve()),
        cancel: ve,
        complete: ve
    });
    return t ? Hs({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const bx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
    , Zx = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    })
    , qx = {
        type: "keyframes",
        duration: .8
    }
    , Jx = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    }
    , eE = (e, { keyframes: t }) => t.length > 2 ? qx : ir.has(e) ? e.startsWith("scale") ? Zx(t[1]) : bx : Jx
    , Tu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Tn.test(t) || t === "0") && !t.startsWith("url("))
    , tE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function nE(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Ca) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = tE.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
        t + "(" + o + i + ")"
}
const rE = /([a-z-]*)\(.*?\)/g
    , Cu = {
        ...Tn,
        getAnimatableNone: e => {
            const t = e.match(rE);
            return t ? t.map(nE).join(" ") : e
        }
    }
    , iE = {
        ...ng,
        color: Me,
        backgroundColor: Me,
        outlineColor: Me,
        fill: Me,
        stroke: Me,
        borderColor: Me,
        borderTopColor: Me,
        borderRightColor: Me,
        borderBottomColor: Me,
        borderLeftColor: Me,
        filter: Cu,
        WebkitFilter: Cu
    }
    , hf = e => iE[e];
function Wg(e, t) {
    let n = hf(e);
    return n !== Cu && (n = Tn),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Hg = e => /^0[^.\s]+$/.test(e);
function oE(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Hg(e)
}
function sE(e, t, n, r) {
    const i = Tu(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < o.length; u++)
        o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
            oE(o[u]) && l.push(u),
            typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
    if (i && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            o[c] = Wg(t, a)
        }
    return o
}
function aE({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
    return !!Object.keys(c).length
}
function pf(e, t) {
    return e[t] || e.default || e
}
const lE = {
    skipAnimations: !1
}
    , mf = (e, t, n, r = {}) => i => {
        const o = pf(r, e) || {}
            , s = o.delay || r.delay || 0;
        let { elapsed: a = 0 } = r;
        a = a - Yn(s);
        const l = sE(t, e, n, o)
            , u = l[0]
            , c = l[l.length - 1]
            , f = Tu(e, u)
            , d = Tu(e, c);
        let m = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: g => {
                t.set(g),
                    o.onUpdate && o.onUpdate(g)
            }
            ,
            onComplete: () => {
                i(),
                    o.onComplete && o.onComplete()
            }
        };
        if (aE(o) || (m = {
            ...m,
            ...eE(e, m)
        }),
            m.duration && (m.duration = Yn(m.duration)),
            m.repeatDelay && (m.repeatDelay = Yn(m.repeatDelay)),
            !f || !d || rx.current || o.type === !1 || lE.skipAnimations)
            return Xx(m);
        if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const g = Qx(t, e, m);
            if (g)
                return g
        }
        return Hs(m)
    }
    ;
function Gs(e) {
    return !!(Ye(e) && e.add)
}
const Gg = e => /^\-?\d*\.?\d+$/.test(e);
function vf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function gf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class yf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return vf(this.subscriptions, t),
            () => gf(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const uE = e => !isNaN(parseFloat(e));
class cE {
    constructor(t, n = {}) {
        this.version = "10.18.0",
            this.timeDelta = 0,
            this.lastUpdated = 0,
            this.canTrackVelocity = !1,
            this.events = {},
            this.updateAndNotify = (r, i = !0) => {
                this.prev = this.current,
                    this.current = r;
                const { delta: o, timestamp: s } = Ne;
                this.lastUpdated !== s && (this.timeDelta = o,
                    this.lastUpdated = s,
                    ee.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
            }
            ,
            this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck),
            this.velocityCheck = ({ timestamp: r }) => {
                r !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
            }
            ,
            this.hasAnimated = !1,
            this.prev = this.current = t,
            this.canTrackVelocity = uE(this.current),
            this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new yf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
                ee.read(() => {
                    this.events.change.getSize() || this.stop()
                }
                )
        }
            : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
            this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
            this.prev = t,
            this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
            this.prev = t,
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Bg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
            new Promise(n => {
                this.hasAnimated = !0,
                    this.animation = t(n),
                    this.events.animationStart && this.events.animationStart.notify()
            }
            ).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
            }
            )
    }
    stop() {
        this.animation && (this.animation.stop(),
            this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Gr(e, t) {
    return new cE(e, t)
}
const Kg = e => t => t.test(e)
    , fE = {
        test: e => e === "auto",
        parse: e => e
    }
    , Yg = [or, $, At, en, wS, yS, fE]
    , li = e => Yg.find(Kg(e))
    , dE = [...Yg, Me, Tn]
    , hE = e => dE.find(Kg(e));
function pE(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gr(n))
}
function mE(e, t) {
    const n = Aa(e, t);
    let { transitionEnd: r = {}, transition: i = {}, ...o } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = VS(o[s]);
        pE(e, s, a)
    }
}
function vE(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter(a => !e.hasValue(a))
        , s = o.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = o[a]
                , u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
                c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
                c != null && (typeof c == "string" && (Gg(c) || Hg(c)) ? c = parseFloat(c) : !hE(c) && Tn.test(u) && (c = Wg(l, u)),
                    e.addValue(l, Gr(c, {
                        owner: e
                    })),
                    n[l] === void 0 && (n[l] = c),
                    c !== null && e.setBaseTarget(l, c))
        }
}
function gE(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function yE(e, t, n) {
    const r = {};
    for (const i in e) {
        const o = gE(i, t);
        if (o !== void 0)
            r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get())
        }
    }
    return r
}
function wE({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
        r
}
function SE(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function Qg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (o = r);
    const u = []
        , c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const d = e.getValue(f)
            , m = a[f];
        if (!d || m === void 0 || c && wE(c, f))
            continue;
        const g = {
            delay: n,
            elapsed: 0,
            ...pf(o || {}, f)
        };
        if (window.HandoffAppearAnimations) {
            const v = e.getProps()[Xv];
            if (v) {
                const h = window.HandoffAppearAnimations(v, f, d, ee);
                h !== null && (g.elapsed = h,
                    g.isHandoff = !0)
            }
        }
        let y = !g.isHandoff && !SE(d, m);
        if (g.type === "spring" && (d.getVelocity() || g.velocity) && (y = !1),
            d.animation && (y = !1),
            y)
            continue;
        d.start(mf(f, d, m, e.shouldReduceMotion && ir.has(f) ? {
            type: !1
        } : g));
        const S = d.animation;
        Gs(l) && (l.add(f),
            S.then(() => l.remove(f))),
            u.push(S)
    }
    return s && Promise.all(u).then(() => {
        s && mE(e, s)
    }
    ),
        u
}
function ku(e, t, n = {}) {
    const r = Aa(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Qg(e, r, n)) : () => Promise.resolve()
        , s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = i;
            return xE(e, t, u + l, c, f, n)
        }
            : () => Promise.resolve()
        , { when: a } = i;
    if (a) {
        const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
        return l().then(() => u())
    } else
        return Promise.all([o(), s(n.delay)])
}
function xE(e, t, n = 0, r = 0, i = 1, o) {
    const s = []
        , a = (e.variantChildren.size - 1) * r
        , l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(EE).forEach((u, c) => {
        u.notify("AnimationStart", t),
            s.push(ku(u, t, {
                ...o,
                delay: n + l(c)
            }).then(() => u.notify("AnimationComplete", t)))
    }
    ),
        Promise.all(s)
}
function EE(e, t) {
    return e.sortNodePosition(t)
}
function PE(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => ku(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = ku(e, t, n);
    else {
        const i = typeof t == "function" ? Aa(e, t, n.custom) : t;
        r = Promise.all(Qg(e, i, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const TE = [...Jc].reverse()
    , CE = Jc.length;
function kE(e) {
    return t => Promise.all(t.map(({ animation: n, options: r }) => PE(e, n, r)))
}
function AE(e) {
    let t = kE(e);
    const n = _E();
    let r = !0;
    const i = (l, u) => {
        const c = Aa(e, u);
        if (c) {
            const { transition: f, transitionEnd: d, ...m } = c;
            l = {
                ...l,
                ...m,
                ...d
            }
        }
        return l
    }
        ;
    function o(l) {
        t = l(e)
    }
    function s(l, u) {
        const c = e.getProps()
            , f = e.getVariantContext(!0) || {}
            , d = []
            , m = new Set;
        let g = {}
            , y = 1 / 0;
        for (let v = 0; v < CE; v++) {
            const h = TE[v]
                , p = n[h]
                , w = c[h] !== void 0 ? c[h] : f[h]
                , x = to(w)
                , C = h === u ? p.isActive : null;
            C === !1 && (y = v);
            let E = w === f[h] && w !== c[h] && x;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
                p.protectedKeys = {
                    ...g
                },
                !p.isActive && C === null || !w && !p.prevProp || Pa(w) || typeof w == "boolean")
                continue;
            let D = LE(p.prevProp, w) || h === u && p.isActive && !E && x || v > y && x
                , R = !1;
            const V = Array.isArray(w) ? w : [w];
            let M = V.reduce(i, {});
            C === !1 && (M = {});
            const { prevResolvedValues: I = {} } = p
                , z = {
                    ...I,
                    ...M
                }
                , W = H => {
                    D = !0,
                        m.has(H) && (R = !0,
                            m.delete(H)),
                        p.needsAnimating[H] = !0
                }
                ;
            for (const H in z) {
                const Y = M[H]
                    , A = I[H];
                if (g.hasOwnProperty(H))
                    continue;
                let L = !1;
                Bs(Y) && Bs(A) ? L = !gg(Y, A) : L = Y !== A,
                    L ? Y !== void 0 ? W(H) : m.add(H) : Y !== void 0 && m.has(H) ? W(H) : p.protectedKeys[H] = !0
            }
            p.prevProp = w,
                p.prevResolvedValues = M,
                p.isActive && (g = {
                    ...g,
                    ...M
                }),
                r && e.blockInitialAnimation && (D = !1),
                D && (!E || R) && d.push(...V.map(H => ({
                    animation: H,
                    options: {
                        type: h,
                        ...l
                    }
                })))
        }
        if (m.size) {
            const v = {};
            m.forEach(h => {
                const p = e.getBaseTarget(h);
                p !== void 0 && (v[h] = p)
            }
            ),
                d.push({
                    animation: v
                })
        }
        let S = !!d.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (S = !1),
            r = !1,
            S ? t(d) : Promise.resolve()
    }
    function a(l, u, c) {
        var f;
        if (n[l].isActive === u)
            return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(m => {
            var g;
            return (g = m.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u)
        }
        ),
            n[l].isActive = u;
        const d = s(c, l);
        for (const m in n)
            n[m].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n
    }
}
function LE(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !gg(t, e) : !1
}
function On(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function _E() {
    return {
        animate: On(!0),
        whileInView: On(),
        whileHover: On(),
        whileTap: On(),
        whileDrag: On(),
        whileFocus: On(),
        exit: On()
    }
}
class RE extends Nn {
    constructor(t) {
        super(t),
            t.animationState || (t.animationState = AE(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        this.unmount(),
            Pa(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps()
            , { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() { }
}
let NE = 0;
class DE extends Nn {
    constructor() {
        super(...arguments),
            this.id = NE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext
            , { isPresent: i } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const o = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && o.then(() => n(this.id))
    }
    mount() {
        const { register: t } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const VE = {
    animation: {
        Feature: RE
    },
    exit: {
        Feature: DE
    }
}
    , ch = (e, t) => Math.abs(e - t);
function OE(e, t) {
    const n = ch(e.x, t.x)
        , r = ch(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Xg {
    constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
        if (this.startEvent = null,
            this.lastMoveEvent = null,
            this.lastMoveEventInfo = null,
            this.handlers = {},
            this.contextWindow = window,
            this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const f = pl(this.lastMoveEventInfo, this.history)
                    , d = this.startEvent !== null
                    , m = OE(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!d && !m)
                    return;
                const { point: g } = f
                    , { timestamp: y } = Ne;
                this.history.push({
                    ...g,
                    timestamp: y
                });
                const { onStart: S, onMove: v } = this.handlers;
                d || (S && S(this.lastMoveEvent, f),
                    this.startEvent = this.lastMoveEvent),
                    v && v(this.lastMoveEvent, f)
            }
            ,
            this.handlePointerMove = (f, d) => {
                this.lastMoveEvent = f,
                    this.lastMoveEventInfo = hl(d, this.transformPagePoint),
                    ee.update(this.updatePoint, !0)
            }
            ,
            this.handlePointerUp = (f, d) => {
                this.end();
                const { onEnd: m, onSessionEnd: g, resumeAnimation: y } = this.handlers;
                if (this.dragSnapToOrigin && y && y(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const S = pl(f.type === "pointercancel" ? this.lastMoveEventInfo : hl(d, this.transformPagePoint), this.history);
                this.startEvent && m && m(f, S),
                    g && g(f, S)
            }
            ,
            !dg(t))
            return;
        this.dragSnapToOrigin = o,
            this.handlers = n,
            this.transformPagePoint = r,
            this.contextWindow = i || window;
        const s = ka(t)
            , a = hl(s, this.transformPagePoint)
            , { point: l } = a
            , { timestamp: u } = Ne;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const { onSessionStart: c } = n;
        c && c(t, pl(a, this.history)),
            this.removeListeners = yn($t(this.contextWindow, "pointermove", this.handlePointerMove), $t(this.contextWindow, "pointerup", this.handlePointerUp), $t(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
            bt(this.updatePoint)
    }
}
function hl(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function fh(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function pl({ point: e }, t) {
    return {
        point: e,
        delta: fh(e, bg(t)),
        offset: fh(e, ME(t)),
        velocity: jE(t, .1)
    }
}
function ME(e) {
    return e[0]
}
function bg(e) {
    return e[e.length - 1]
}
function jE(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
        , r = null;
    const i = bg(e);
    for (; n >= 0 && (r = e[n],
        !(i.timestamp - r.timestamp > Yn(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = Wt(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
        s.y === 1 / 0 && (s.y = 0),
        s
}
function qe(e) {
    return e.max - e.min
}
function Au(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}
function dh(e, t, n, r = .5) {
    e.origin = r,
        e.originPoint = ce(t.min, t.max, e.origin),
        e.scale = qe(n) / qe(t),
        (Au(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        e.translate = ce(n.min, n.max, e.origin) - e.originPoint,
        (Au(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function _i(e, t, n, r) {
    dh(e.x, t.x, n.x, r ? r.originX : void 0),
        dh(e.y, t.y, n.y, r ? r.originY : void 0)
}
function hh(e, t, n) {
    e.min = n.min + t.min,
        e.max = e.min + qe(t)
}
function IE(e, t, n) {
    hh(e.x, t.x, n.x),
        hh(e.y, t.y, n.y)
}
function ph(e, t, n) {
    e.min = t.min - n.min,
        e.max = e.min + qe(t)
}
function Ri(e, t, n) {
    ph(e.x, t.x, n.x),
        ph(e.y, t.y, n.y)
}
function FE(e, { min: t, max: n }, r) {
    return t !== void 0 && e < t ? e = r ? ce(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ce(n, e, r.max) : Math.min(e, n)),
        e
}
function mh(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function zE(e, { top: t, left: n, bottom: r, right: i }) {
    return {
        x: mh(e.x, n, i),
        y: mh(e.y, t, r)
    }
}
function vh(e, t) {
    let n = t.min - e.min
        , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function BE(e, t) {
    return {
        x: vh(e.x, t.x),
        y: vh(e.y, t.y)
    }
}
function UE(e, t) {
    let n = .5;
    const r = qe(e)
        , i = qe(t);
    return i > r ? n = ro(t.min, t.max - r, e.min) : r > i && (n = ro(e.min, e.max - i, t.min)),
        Pn(0, 1, n)
}
function $E(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
}
const Lu = .35;
function WE(e = Lu) {
    return e === !1 ? e = 0 : e === !0 && (e = Lu),
    {
        x: gh(e, "left", "right"),
        y: gh(e, "top", "bottom")
    }
}
function gh(e, t, n) {
    return {
        min: yh(e, t),
        max: yh(e, n)
    }
}
function yh(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const wh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
    , Cr = () => ({
        x: wh(),
        y: wh()
    })
    , Sh = () => ({
        min: 0,
        max: 0
    })
    , ye = () => ({
        x: Sh(),
        y: Sh()
    });
function nt(e) {
    return [e("x"), e("y")]
}
function Zg({ top: e, left: t, right: n, bottom: r }) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function HE({ x: e, y: t }) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function GE(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
        , r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function ml(e) {
    return e === void 0 || e === 1
}
function _u({ scale: e, scaleX: t, scaleY: n }) {
    return !ml(e) || !ml(t) || !ml(n)
}
function In(e) {
    return _u(e) || qg(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function qg(e) {
    return xh(e.x) || xh(e.y)
}
function xh(e) {
    return e && e !== "0%"
}
function Ks(e, t, n) {
    const r = e - n
        , i = t * r;
    return n + i
}
function Eh(e, t, n, r, i) {
    return i !== void 0 && (e = Ks(e, i, r)),
        Ks(e, n, r) + t
}
function Ru(e, t = 0, n = 1, r, i) {
    e.min = Eh(e.min, t, n, r, i),
        e.max = Eh(e.max, t, n, r, i)
}
function Jg(e, { x: t, y: n }) {
    Ru(e.x, t.translate, t.scale, t.originPoint),
        Ru(e.y, n.translate, n.scale, n.originPoint)
}
function KE(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
            s = o.projectionDelta;
        const l = o.instance;
        l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && kr(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
            s && (t.x *= s.x.scale,
                t.y *= s.y.scale,
                Jg(e, s)),
            r && In(o.latestValues) && kr(e, o.latestValues))
    }
    t.x = Ph(t.x),
        t.y = Ph(t.y)
}
function Ph(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function rn(e, t) {
    e.min = e.min + t,
        e.max = e.max + t
}
function Th(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : .5
        , s = ce(e.min, e.max, o);
    Ru(e, t[n], t[r], s, t.scale)
}
const YE = ["x", "scaleX", "originX"]
    , QE = ["y", "scaleY", "originY"];
function kr(e, t) {
    Th(e.x, t, YE),
        Th(e.y, t, QE)
}
function ey(e, t) {
    return Zg(GE(e.getBoundingClientRect(), t))
}
function XE(e, t, n) {
    const r = ey(e, n)
        , { scroll: i } = t;
    return i && (rn(r.x, i.offset.x),
        rn(r.y, i.offset.y)),
        r
}
const ty = ({ current: e }) => e ? e.ownerDocument.defaultView : null
    , bE = new WeakMap;
class ZE {
    constructor(t) {
        this.openGlobalLock = null,
            this.isDragging = !1,
            this.currentDirection = null,
            this.originPoint = {
                x: 0,
                y: 0
            },
            this.constraints = !1,
            this.hasMutatedConstraints = !1,
            this.elastic = ye(),
            this.visualElement = t
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const { dragSnapToOrigin: f } = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
                n && this.snapToCursor(ka(c, "page").point)
        }
            , o = (c, f) => {
                const { drag: d, dragPropagation: m, onDragStart: g } = this.getProps();
                if (d && !m && (this.openGlobalLock && this.openGlobalLock(),
                    this.openGlobalLock = pg(d),
                    !this.openGlobalLock))
                    return;
                this.isDragging = !0,
                    this.currentDirection = null,
                    this.resolveConstraints(),
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                    nt(S => {
                        let v = this.getAxisMotionValue(S).get() || 0;
                        if (At.test(v)) {
                            const { projection: h } = this.visualElement;
                            if (h && h.layout) {
                                const p = h.layout.layoutBox[S];
                                p && (v = qe(p) * (parseFloat(v) / 100))
                            }
                        }
                        this.originPoint[S] = v
                    }
                    ),
                    g && ee.update(() => g(c, f), !1, !0);
                const { animationState: y } = this.visualElement;
                y && y.setActive("whileDrag", !0)
            }
            , s = (c, f) => {
                const { dragPropagation: d, dragDirectionLock: m, onDirectionLock: g, onDrag: y } = this.getProps();
                if (!d && !this.openGlobalLock)
                    return;
                const { offset: S } = f;
                if (m && this.currentDirection === null) {
                    this.currentDirection = qE(S),
                        this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, S),
                    this.updateAxis("y", f.point, S),
                    this.visualElement.render(),
                    y && y(c, f)
            }
            , a = (c, f) => this.stop(c, f)
            , l = () => nt(c => {
                var f;
                return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
            }
            )
            , { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new Xg(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: ty(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
            !r)
            return;
        const { velocity: i } = n;
        this.startAnimation(i);
        const { onDragEnd: o } = this.getProps();
        o && ee.update(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            this.panSession = void 0;
        const { dragPropagation: r } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
            this.openGlobalLock = null),
            n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const { drag: i } = this.getProps();
        if (!r || !Wo(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = FE(s, this.constraints[t], this.elastic[t])),
            o.set(s)
    }
    resolveConstraints() {
        var t;
        const { dragConstraints: n, dragElastic: r } = this.getProps()
            , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
            , o = this.constraints;
        n && Pr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = zE(i.layoutBox, n) : this.constraints = !1,
            this.elastic = WE(r),
            o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && nt(s => {
                this.getAxisMotionValue(s) && (this.constraints[s] = $E(i.layoutBox[s], this.constraints[s]))
            }
            )
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !Pr(t))
            return !1;
        const r = t.current
            , { projection: i } = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = XE(r, i.root, this.visualElement.getTransformPagePoint());
        let s = BE(i.layout.layoutBox, o);
        if (n) {
            const a = n(HE(s));
            this.hasMutatedConstraints = !!a,
                a && (s = Zg(a))
        }
        return s
    }
    startAnimation(t) {
        const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps()
            , l = this.constraints || {}
            , u = nt(c => {
                if (!Wo(c, n, this.currentDirection))
                    return;
                let f = l && l[c] || {};
                s && (f = {
                    min: 0,
                    max: 0
                });
                const d = i ? 200 : 1e6
                    , m = i ? 40 : 1e7
                    , g = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: d,
                        bounceDamping: m,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...o,
                        ...f
                    };
                return this.startAxisValueAnimation(c, g)
            }
            );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(mf(t, r, 0, n))
    }
    stopAnimation() {
        nt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        nt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
            , r = this.visualElement.getProps()
            , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        nt(n => {
            const { drag: r } = this.getProps();
            if (!Wo(n, r, this.currentDirection))
                return;
            const { projection: i } = this.visualElement
                , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const { min: s, max: a } = i.layout.layoutBox[n];
                o.set(t[n] - ce(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag: t, dragConstraints: n } = this.getProps()
            , { projection: r } = this.visualElement;
        if (!Pr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        nt(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                i[s] = UE({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const { transformTemplate: o } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            nt(s => {
                if (!Wo(s, t, null))
                    return;
                const a = this.getAxisMotionValue(s)
                    , { min: l, max: u } = this.constraints[s];
                a.set(ce(l, u, i[s]))
            }
            )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        bE.set(this.visualElement, this);
        const t = this.visualElement.current
            , n = $t(t, "pointerdown", l => {
                const { drag: u, dragListener: c = !0 } = this.getProps();
                u && c && this.start(l)
            }
            )
            , r = () => {
                const { dragConstraints: l } = this.getProps();
                Pr(l) && (this.constraints = this.resolveRefConstraints())
            }
            , { projection: i } = this.visualElement
            , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
            i.updateLayout()),
            r();
        const s = zt(window, "resize", () => this.scalePositionWithinConstraints())
            , a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
                this.isDragging && u && (nt(c => {
                    const f = this.getAxisMotionValue(c);
                    f && (this.originPoint[c] += l[c].translate,
                        f.set(f.get() + l[c].translate))
                }
                ),
                    this.visualElement.render())
            }
            );
        return () => {
            s(),
                n(),
                o(),
                a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
            , { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Lu, dragMomentum: a = !0 } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function Wo(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function qE(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
        n
}
class JE extends Nn {
    constructor(t) {
        super(t),
            this.removeGroupControls = ve,
            this.removeListeners = ve,
            this.controls = new ZE(t)
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            this.removeListeners = this.controls.addListeners() || ve
    }
    unmount() {
        this.removeGroupControls(),
            this.removeListeners()
    }
}
const Ch = e => (t, n) => {
    e && ee.update(() => e(t, n))
}
    ;
class eP extends Nn {
    constructor() {
        super(...arguments),
            this.removePointerDownListener = ve
    }
    onPointerDown(t) {
        this.session = new Xg(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ty(this.node)
        })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
        return {
            onSessionStart: Ch(t),
            onStart: Ch(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                    i && ee.update(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = $t(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
            this.session && this.session.end()
    }
}
function tP() {
    const e = j.useContext(xa);
    if (e === null)
        return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e
        , i = j.useId();
    return j.useEffect(() => r(i), []),
        !t && n ? [!1, () => n && n(i)] : [!0]
}
const ls = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function kh(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ui = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if ($.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = kh(e, t.target.x)
            , r = kh(e, t.target.y);
        return `${n}% ${r}%`
    }
}
    , nP = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e
                , i = Tn.parse(e);
            if (i.length > 5)
                return r;
            const o = Tn.createTransformer(e)
                , s = typeof i[0] != "number" ? 1 : 0
                , a = n.x.scale * t.x
                , l = n.y.scale * t.y;
            i[0 + s] /= a,
                i[1 + s] /= l;
            const u = ce(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u),
                typeof i[3 + s] == "number" && (i[3 + s] /= u),
                o(i)
        }
    };
class rP extends ne.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props
            , { projection: o } = t;
        fS(iP),
            o && (n.group && n.group.add(o),
                r && r.register && i && r.register(o),
                o.root.didUpdate(),
                o.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                o.setOptions({
                    ...o.options,
                    onExitComplete: () => this.safeToRemove()
                })),
            ls.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props
            , s = r.projection;
        return s && (s.isPresent = o,
            i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
            t.isPresent !== o && (o ? s.promote() : s.relegate() || ee.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove()
            }
            ))),
            null
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t && (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }
            ))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props
            , { projection: i } = t;
        i && (i.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(i),
            r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function ny(e) {
    const [t, n] = tP()
        , r = j.useContext(tf);
    return ne.createElement(rP, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: j.useContext(Zv),
        isPresent: t,
        safeToRemove: n
    })
}
const iP = {
    borderRadius: {
        ...ui,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ui,
    borderTopRightRadius: ui,
    borderBottomLeftRadius: ui,
    borderBottomRightRadius: ui,
    boxShadow: nP
}
    , ry = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
    , oP = ry.length
    , Ah = e => typeof e == "string" ? parseFloat(e) : e
    , Lh = e => typeof e == "number" || $.test(e);
function sP(e, t, n, r, i, o) {
    i ? (e.opacity = ce(0, n.opacity !== void 0 ? n.opacity : 1, aP(r)),
        e.opacityExit = ce(t.opacity !== void 0 ? t.opacity : 1, 0, lP(r))) : o && (e.opacity = ce(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < oP; s++) {
        const a = `border${ry[s]}Radius`;
        let l = _h(t, a)
            , u = _h(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
            u || (u = 0),
            l === 0 || u === 0 || Lh(l) === Lh(u) ? (e[a] = Math.max(ce(Ah(l), Ah(u), r), 0),
                (At.test(u) || At.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = ce(t.rotate || 0, n.rotate || 0, r))
}
function _h(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const aP = iy(0, .5, kg)
    , lP = iy(.5, .95, ve);
function iy(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ro(e, t, r))
}
function Rh(e, t) {
    e.min = t.min,
        e.max = t.max
}
function tt(e, t) {
    Rh(e.x, t.x),
        Rh(e.y, t.y)
}
function Nh(e, t, n, r, i) {
    return e -= t,
        e = Ks(e, 1 / n, r),
        i !== void 0 && (e = Ks(e, 1 / i, r)),
        e
}
function uP(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (At.test(t) && (t = parseFloat(t),
        t = ce(s.min, s.max, t / 100) - s.min),
        typeof t != "number")
        return;
    let a = ce(o.min, o.max, r);
    e === o && (a -= t),
        e.min = Nh(e.min, t, n, a, i),
        e.max = Nh(e.max, t, n, a, i)
}
function Dh(e, t, [n, r, i], o, s) {
    uP(e, t[n], t[r], t[i], t.scale, o, s)
}
const cP = ["x", "scaleX", "originX"]
    , fP = ["y", "scaleY", "originY"];
function Vh(e, t, n, r) {
    Dh(e.x, t, cP, n ? n.x : void 0, r ? r.x : void 0),
        Dh(e.y, t, fP, n ? n.y : void 0, r ? r.y : void 0)
}
function Oh(e) {
    return e.translate === 0 && e.scale === 1
}
function oy(e) {
    return Oh(e.x) && Oh(e.y)
}
function dP(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function sy(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function Mh(e) {
    return qe(e.x) / qe(e.y)
}
class hP {
    constructor() {
        this.members = []
    }
    add(t) {
        vf(this.members, t),
            t.scheduleRender()
    }
    remove(t) {
        if (gf(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
            !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
            this.lead = t,
            t.show(),
            r)) {
            r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const { crossfade: i } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const { options: n, resumingFrom: r } = t;
            n.onExitComplete && n.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function jh(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
        , o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n) {
        const { rotate: l, rotateX: u, rotateY: c } = n;
        l && (r += `rotate(${l}deg) `),
            u && (r += `rotateX(${u}deg) `),
            c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
        , a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`),
        r || "none"
}
const pP = (e, t) => e.depth - t.depth;
class mP {
    constructor() {
        this.children = [],
            this.isDirty = !1
    }
    add(t) {
        vf(this.children, t),
            this.isDirty = !0
    }
    remove(t) {
        gf(this.children, t),
            this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(pP),
            this.isDirty = !1,
            this.children.forEach(t)
    }
}
function vP(e, t) {
    const n = performance.now()
        , r = ({ timestamp: i }) => {
            const o = i - n;
            o >= t && (bt(r),
                e(o - t))
        }
        ;
    return ee.read(r, !0),
        () => bt(r)
}
function gP(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function yP(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function wP(e, t, n) {
    const r = Ye(e) ? e : Gr(e);
    return r.start(mf("", r, t, n)),
        r.animation
}
const Ih = ["", "X", "Y", "Z"]
    , SP = {
        visibility: "hidden"
    }
    , Fh = 1e3;
let xP = 0;
const Fn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function ay({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = xP++,
                this.animationId = 0,
                this.children = new Set,
                this.options = {},
                this.isTreeAnimating = !1,
                this.isAnimationBlocked = !1,
                this.isLayoutDirty = !1,
                this.isProjectionDirty = !1,
                this.isSharedProjectionDirty = !1,
                this.isTransformDirty = !1,
                this.updateManuallyBlocked = !1,
                this.updateBlockedByResize = !1,
                this.isUpdating = !1,
                this.isSVG = !1,
                this.needsReset = !1,
                this.shouldResetTransform = !1,
                this.treeScale = {
                    x: 1,
                    y: 1
                },
                this.eventHandlers = new Map,
                this.hasTreeAnimated = !1,
                this.updateScheduled = !1,
                this.projectionUpdateScheduled = !1,
                this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                }
                ,
                this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1,
                        Fn.totalNodes = Fn.resolvedTargetDeltas = Fn.recalculatedProjection = 0,
                        this.nodes.forEach(TP),
                        this.nodes.forEach(_P),
                        this.nodes.forEach(RP),
                        this.nodes.forEach(CP),
                        gP(Fn)
                }
                ,
                this.hasProjected = !1,
                this.isVisible = !0,
                this.animationProgress = 0,
                this.sharedNodes = new Map,
                this.latestValues = s,
                this.root = a ? a.root || a : this,
                this.path = a ? [...a.path, a] : [],
                this.parent = a,
                this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new mP)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new yf),
                this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = yP(s),
                this.instance = s;
            const { layoutId: l, layout: u, visualElement: c } = this.options;
            if (c && !c.current && c.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                a && (u || l) && (this.isLayoutDirty = !0),
                e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                        f && f(),
                        f = vP(d, 250),
                        ls.hasAnimatedSinceResize && (ls.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(Bh))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: m, layout: g }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0,
                            this.relativeTarget = void 0;
                        return
                    }
                    const y = this.options.transition || c.getDefaultTransition() || MP
                        , { onLayoutAnimationStart: S, onLayoutAnimationComplete: v } = c.getProps()
                        , h = !this.targetLayout || !sy(this.targetLayout, g) || m
                        , p = !d && m;
                    if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || d && (h || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(f, p);
                        const w = {
                            ...pf(y, "layout"),
                            onPlay: S,
                            onComplete: v
                        };
                        (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                            w.type = !1),
                            this.startAnimation(w)
                    } else
                        d || Bh(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = g
                }
                )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                this.instance = void 0,
                bt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
                this.nodes && this.nodes.forEach(NP),
                this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0,
                this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                    f.updateScroll("snapshot"),
                    f.options.layoutRoot && f.willUpdate(!1)
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
                this.updateSnapshot(),
                s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
                this.isUpdateBlocked()) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(zh);
                return
            }
            this.isUpdating || this.nodes.forEach(AP),
                this.isUpdating = !1,
                this.nodes.forEach(LP),
                this.nodes.forEach(EP),
                this.nodes.forEach(PP),
                this.clearAllSnapshots();
            const a = performance.now();
            Ne.delta = Pn(0, 1e3 / 60, a - Ne.timestamp),
                Ne.timestamp = a,
                Ne.isProcessing = !0,
                ol.update.process(Ne),
                ol.preRender.process(Ne),
                ol.render.process(Ne),
                Ne.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
                queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(kP),
                this.sharedNodes.forEach(DP)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                ee.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ee.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
                this.layoutCorrected = ye(),
                this.isLayoutDirty = !1,
                this.projectionDelta = void 0,
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
                a && (this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: r(this.instance),
                    offset: n(this.instance)
                })
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
                , a = this.projectionDelta && !oy(this.projectionDelta)
                , l = this.getTransformTemplate()
                , u = l ? l(this.latestValues, "") : void 0
                , c = u !== this.prevTransformTemplateValue;
            s && (a || In(this.latestValues) || c) && (i(this.instance, u),
                this.shouldResetTransform = !1,
                this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
                jP(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const { visualElement: s } = this.options;
            if (!s)
                return ye();
            const a = s.measureViewportBox()
                , { scroll: l } = this.root;
            return l && (rn(a.x, l.offset.x),
                rn(a.y, l.offset.y)),
                a
        }
        removeElementScroll(s) {
            const a = ye();
            tt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                    , { scroll: c, options: f } = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        tt(a, s);
                        const { scroll: d } = this.root;
                        d && (rn(a.x, -d.offset.x),
                            rn(a.y, -d.offset.y))
                    }
                    rn(a.x, c.offset.x),
                        rn(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a = !1) {
            const l = ye();
            tt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && kr(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                    In(c.latestValues) && kr(l, c.latestValues)
            }
            return In(this.latestValues) && kr(l, this.latestValues),
                l
        }
        removeTransform(s) {
            const a = ye();
            tt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !In(u.latestValues))
                    continue;
                _u(u.latestValues) && u.updateSnapshot();
                const c = ye()
                    , f = u.measurePageBox();
                tt(c, f),
                    Vh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return In(this.latestValues) && Vh(a, this.latestValues),
                a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
                this.root.scheduleUpdateProjection(),
                this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
                this.layout = void 0,
                this.snapshot = void 0,
                this.prevTransformTemplateValue = void 0,
                this.targetDelta = void 0,
                this.target = void 0,
                this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const { layout: f, layoutId: d } = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = Ne.timestamp,
                    !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ye(),
                        this.relativeTargetOrigin = ye(),
                        Ri(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                        tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ye(),
                        this.targetWithTransforms = ye()),
                        this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                            IE(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox),
                                Jg(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = ye(),
                            this.relativeTargetOrigin = ye(),
                            Ri(this.relativeTargetOrigin, this.target, m.target),
                            tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Fn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || _u(this.parent.latestValues) || qg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
                , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
                l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
                this.resolvedRelativeTargetAt === Ne.timestamp && (u = !1),
                u)
                return;
            const { layout: c, layoutId: f } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(c || f))
                return;
            tt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
                , m = this.treeScale.y;
            KE(this.layoutCorrected, this.treeScale, this.path, l),
                a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const { target: g } = a;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Cr(),
                    this.projectionTransform = "none",
                    this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Cr(),
                this.projectionDeltaWithTransform = Cr());
            const y = this.projectionTransform;
            _i(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
                this.projectionTransform = jh(this.projectionDelta, this.treeScale),
                (this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== m) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", g)),
                Fn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
                s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot
                , u = l ? l.latestValues : {}
                , c = {
                    ...this.latestValues
                }
                , f = Cr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
                this.attemptToResolveRelativeTarget = !a;
            const d = ye()
                , m = l ? l.source : void 0
                , g = this.layout ? this.layout.source : void 0
                , y = m !== g
                , S = this.getStack()
                , v = !S || S.members.length <= 1
                , h = !!(y && !v && this.options.crossfade === !0 && !this.path.some(OP));
            this.animationProgress = 0;
            let p;
            this.mixTargetDelta = w => {
                const x = w / 1e3;
                Uh(f.x, s.x, x),
                    Uh(f.y, s.y, x),
                    this.setTargetDelta(f),
                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ri(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        VP(this.relativeTarget, this.relativeTargetOrigin, d, x),
                        p && dP(this.relativeTarget, p) && (this.isProjectionDirty = !1),
                        p || (p = ye()),
                        tt(p, this.relativeTarget)),
                    y && (this.animationValues = c,
                        sP(c, u, this.latestValues, x, h, v)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    this.animationProgress = x
            }
                ,
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (bt(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                this.pendingAnimation = ee.update(() => {
                    ls.hasAnimatedSinceResize = !0,
                        this.currentAnimation = wP(0, Fh, {
                            ...s,
                            onUpdate: a => {
                                this.mixTargetDelta(a),
                                    s.onUpdate && s.onUpdate(a)
                            }
                            ,
                            onComplete: () => {
                                s.onComplete && s.onComplete(),
                                    this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                }
                )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
                this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Fh),
                this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && ly(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ye();
                    const f = qe(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                        l.x.max = l.x.min + f;
                    const d = qe(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                        l.y.max = l.y.min + d
                }
                tt(a, l),
                    kr(a, c),
                    _i(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new hP),
                this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const { layoutId: a } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const { layoutId: s } = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
                s && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                a && this.setOptions({
                    transition: a
                })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const { visualElement: s } = this.options;
            if (!s)
                return;
            let a = !1;
            const { latestValues: l } = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
                !a)
                return;
            const u = {};
            for (let c = 0; c < Ih.length; c++) {
                const f = "rotate" + Ih[c];
                l[f] && (u[f] = l[f],
                    s.setStaticValue(f, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return SP;
            const u = {
                visibility: ""
            }
                , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                    u.opacity = "",
                    u.pointerEvents = as(s == null ? void 0 : s.pointerEvents) || "",
                    u.transform = c ? c(this.latestValues, "") : "none",
                    u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                    y.pointerEvents = as(s == null ? void 0 : s.pointerEvents) || ""),
                    this.hasProjected && !In(this.latestValues) && (y.transform = c ? c({}, "") : "none",
                        this.hasProjected = !1),
                    y
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
                u.transform = jh(this.projectionDeltaWithTransform, this.treeScale, d),
                c && (u.transform = c(d, u.transform));
            const { x: m, y: g } = this.projectionDelta;
            u.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`,
                f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const y in Fs) {
                if (d[y] === void 0)
                    continue;
                const { correct: S, applyTo: v } = Fs[y]
                    , h = u.transform === "none" ? d[y] : S(d[y], f);
                if (v) {
                    const p = v.length;
                    for (let w = 0; w < p; w++)
                        u[v[w]] = h
                } else
                    u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? as(s == null ? void 0 : s.pointerEvents) || "" : "none"),
                u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
                this.root.nodes.forEach(zh),
                this.root.sharedNodes.clear()
        }
    }
}
function EP(e) {
    e.updateLayout()
}
function PP(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: i } = e.layout
            , { animationType: o } = e.options
            , s = n.source !== e.layout.source;
        o === "size" ? nt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
                , m = qe(d);
            d.min = r[f].min,
                d.max = d.min + m
        }
        ) : ly(o, n.layoutBox, r) && nt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
                , m = qe(r[f]);
            d.max = d.min + m,
                e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[f].max = e.relativeTarget[f].min + m)
        }
        );
        const a = Cr();
        _i(a, r, n.layoutBox);
        const l = Cr();
        s ? _i(l, e.applyTransform(i, !0), n.measuredBox) : _i(l, r, n.layoutBox);
        const u = !oy(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const { snapshot: d, layout: m } = f;
                if (d && m) {
                    const g = ye();
                    Ri(g, n.layoutBox, d.layoutBox);
                    const y = ye();
                    Ri(y, r, m.layoutBox),
                        sy(g, y) || (c = !0),
                        f.options.layoutRoot && (e.relativeTarget = y,
                            e.relativeTargetOrigin = g,
                            e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function TP(e) {
    Fn.totalNodes++,
        e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function CP(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function kP(e) {
    e.clearSnapshot()
}
function zh(e) {
    e.clearMeasurements()
}
function AP(e) {
    e.isLayoutDirty = !1
}
function LP(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
        e.resetTransform()
}
function Bh(e) {
    e.finishAnimation(),
        e.targetDelta = e.relativeTarget = e.target = void 0,
        e.isProjectionDirty = !0
}
function _P(e) {
    e.resolveTargetDelta()
}
function RP(e) {
    e.calcProjection()
}
function NP(e) {
    e.resetRotation()
}
function DP(e) {
    e.removeLeadSnapshot()
}
function Uh(e, t, n) {
    e.translate = ce(t.translate, 0, n),
        e.scale = ce(t.scale, 1, n),
        e.origin = t.origin,
        e.originPoint = t.originPoint
}
function $h(e, t, n, r) {
    e.min = ce(t.min, n.min, r),
        e.max = ce(t.max, n.max, r)
}
function VP(e, t, n, r) {
    $h(e.x, t.x, n.x, r),
        $h(e.y, t.y, n.y, r)
}
function OP(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const MP = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
    , Wh = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
    , Hh = Wh("applewebkit/") && !Wh("chrome/") ? Math.round : ve;
function Gh(e) {
    e.min = Hh(e.min),
        e.max = Hh(e.max)
}
function jP(e) {
    Gh(e.x),
        Gh(e.y)
}
function ly(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Au(Mh(t), Mh(n), .2)
}
const IP = ay({
    attachResizeListener: (e, t) => zt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
    , vl = {
        current: void 0
    }
    , uy = ay({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!vl.current) {
                const e = new IP({});
                e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    vl.current = e
            }
            return vl.current
        }
        ,
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        }
        ,
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    })
    , FP = {
        pan: {
            Feature: eP
        },
        drag: {
            Feature: JE,
            ProjectionNode: uy,
            MeasureLayout: ny
        }
    }
    , zP = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function BP(e) {
    const t = zP.exec(e);
    if (!t)
        return [,];
    const [, n, r] = t;
    return [n, r]
}
function Nu(e, t, n = 1) {
    const [r, i] = BP(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Gg(s) ? parseFloat(s) : s
    } else
        return Su(i) ? Nu(i, t, n + 1) : i
}
function UP(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
        e.values.forEach(i => {
            const o = i.get();
            if (!Su(o))
                return;
            const s = Nu(o, r);
            s && i.set(s)
        }
        );
    for (const i in t) {
        const o = t[i];
        if (!Su(o))
            continue;
        const s = Nu(o, r);
        s && (t[i] = s,
            n || (n = {}),
            n[i] === void 0 && (n[i] = o))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const $P = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
    , cy = e => $P.has(e)
    , WP = e => Object.keys(e).some(cy)
    , Kh = e => e === or || e === $
    , Yh = (e, t) => parseFloat(e.split(", ")[t])
    , Qh = (e, t) => (n, { transform: r }) => {
        if (r === "none" || !r)
            return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i)
            return Yh(i[1], t);
        {
            const o = r.match(/^matrix\((.+)\)$/);
            return o ? Yh(o[1], e) : 0
        }
    }
    , HP = new Set(["x", "y", "z"])
    , GP = yo.filter(e => !HP.has(e));
function KP(e) {
    const t = [];
    return GP.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
            r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
        t.length && e.render(),
        t
}
const Kr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Qh(4, 13),
    y: Qh(5, 14)
};
Kr.translateX = Kr.x;
Kr.translateY = Kr.y;
const YP = (e, t, n) => {
    const r = t.measureViewportBox()
        , i = t.current
        , o = getComputedStyle(i)
        , { display: s } = o
        , a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach(u => {
            a[u] = Kr[u](r, o)
        }
        ),
        t.render();
    const l = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(a[u]),
            e[u] = Kr[u](l, o)
    }
    ),
        e
}
    , QP = (e, t, n = {}, r = {}) => {
        t = {
            ...t
        },
            r = {
                ...r
            };
        const i = Object.keys(t).filter(cy);
        let o = []
            , s = !1;
        const a = [];
        if (i.forEach(l => {
            const u = e.getValue(l);
            if (!e.hasValue(l))
                return;
            let c = n[l]
                , f = li(c);
            const d = t[l];
            let m;
            if (Bs(d)) {
                const g = d.length
                    , y = d[0] === null ? 1 : 0;
                c = d[y],
                    f = li(c);
                for (let S = y; S < g && d[S] !== null; S++)
                    m ? Us(li(d[S]) === m) : m = li(d[S])
            } else
                m = li(d);
            if (f !== m)
                if (Kh(f) && Kh(m)) {
                    const g = u.get();
                    typeof g == "string" && u.set(parseFloat(g)),
                        typeof d == "string" ? t[l] = parseFloat(d) : Array.isArray(d) && m === $ && (t[l] = d.map(parseFloat))
                } else
                    f != null && f.transform && (m != null && m.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(m.transform(c)) : t[l] = f.transform(d) : (s || (o = KP(e),
                        s = !0),
                        a.push(l),
                        r[l] = r[l] !== void 0 ? r[l] : t[l],
                        u.jump(d))
        }
        ),
            a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
                , u = YP(t, e, a);
            return o.length && o.forEach(([c, f]) => {
                e.getValue(c).set(f)
            }
            ),
                e.render(),
                Ea && l !== null && window.scrollTo({
                    top: l
                }),
            {
                target: u,
                transitionEnd: r
            }
        } else
            return {
                target: t,
                transitionEnd: r
            }
    }
    ;
function XP(e, t, n, r) {
    return WP(t) ? QP(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const bP = (e, t, n, r) => {
    const i = UP(e, t, r);
    return t = i.target,
        r = i.transitionEnd,
        XP(e, t, n, r)
}
    , Du = {
        current: null
    }
    , fy = {
        current: !1
    };
function ZP() {
    if (fy.current = !0,
        !!Ea)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
                , t = () => Du.current = e.matches;
            e.addListener(t),
                t()
        } else
            Du.current = !1
}
function qP(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
        const o = t[i]
            , s = n[i];
        if (Ye(o))
            e.addValue(i, o),
                Gs(r) && r.add(i);
        else if (Ye(s))
            e.addValue(i, Gr(o, {
                owner: e
            })),
                Gs(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const a = e.getValue(i);
                !a.hasAnimated && a.set(o)
            } else {
                const a = e.getStaticValue(i);
                e.addValue(i, Gr(a !== void 0 ? a : o, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Xh = new WeakMap
    , dy = Object.keys(no)
    , JP = dy.length
    , bh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
    , eT = ef.length;
class tT {
    constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: o }, s = {}) {
        this.current = null,
            this.children = new Set,
            this.isVariantNode = !1,
            this.isControllingVariants = !1,
            this.shouldReduceMotion = null,
            this.values = new Map,
            this.features = {},
            this.valueSubscriptions = new Map,
            this.prevMotionValues = {},
            this.events = {},
            this.propEventSubscriptions = {},
            this.notifyUpdate = () => this.notify("Update", this.latestValues),
            this.render = () => {
                this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }
            ,
            this.scheduleRender = () => ee.render(this.render, !1, !0);
        const { latestValues: a, renderState: l } = o;
        this.latestValues = a,
            this.baseTarget = {
                ...a
            },
            this.initialValues = n.initial ? {
                ...a
            } : {},
            this.renderState = l,
            this.parent = t,
            this.props = n,
            this.presenceContext = r,
            this.depth = t ? t.depth + 1 : 0,
            this.reducedMotionConfig = i,
            this.options = s,
            this.isControllingVariants = Ta(n),
            this.isVariantNode = bv(n),
            this.isVariantNode && (this.variantChildren = new Set),
            this.manuallyAnimateOnMount = !!(t && t.current);
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            a[f] !== void 0 && Ye(d) && (d.set(a[f], !1),
                Gs(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
            Xh.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
            fy.current || ZP(),
            this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Du.current,
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext)
    }
    unmount() {
        Xh.delete(this.current),
            this.projection && this.projection.unmount(),
            bt(this.notifyUpdate),
            bt(this.render),
            this.valueSubscriptions.forEach(t => t()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = ir.has(t)
            , i = n.on("change", s => {
                this.latestValues[t] = s,
                    this.props.onUpdate && ee.update(this.notifyUpdate, !1, !0),
                    r && this.projection && (this.projection.isTransformDirty = !0)
            }
            )
            , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(),
                o()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({ children: t, ...n }, r, i, o) {
        let s, a;
        for (let l = 0; l < JP; l++) {
            const u = dy[l]
                , { isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: m } = no[u];
            d && (s = d),
                c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
                    m && (a = m))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const { layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: m } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || f && Pr(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: m
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
                n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ye()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            this.prevProps = this.props,
            this.props = t,
            this.prevPresenceContext = this.presenceContext,
            this.presenceContext = n;
        for (let r = 0; r < bh.length; r++) {
            const i = bh[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = qP(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
            this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
                r
        }
        const n = {};
        for (let r = 0; r < eT; r++) {
            const i = ef[r]
                , o = this.props[i];
            (to(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
                () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
            this.bindToMotionValue(t, n)),
            this.values.set(t, n),
            this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
            this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Gr(n, {
            owner: this
        }),
            this.addValue(t, r)),
            r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const { initial: r } = this.props
            , i = typeof r == "string" || typeof r == "object" ? (n = uf(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ye(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new yf),
            this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class hy extends tT {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t],
            delete r[t]
    }
    makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: i }, o) {
        let s = yE(r, t || {}, this);
        if (i && (n && (n = i(n)),
            r && (r = i(r)),
            s && (s = i(s))),
            o) {
            vE(this, r, s);
            const a = bP(this, r, s, n);
            n = a.transitionEnd,
                r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function nT(e) {
    return window.getComputedStyle(e)
}
class rT extends hy {
    constructor() {
        super(...arguments),
            this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (ir.has(n)) {
            const r = hf(n);
            return r && r.default || 0
        } else {
            const r = nT(t)
                , i = (eg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return ey(t, n)
    }
    build(t, n, r, i) {
        rf(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return lf(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
            delete this.childSubscription);
        const { children: t } = this.props;
        Ye(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        sg(t, n, r, i)
    }
}
class iT extends hy {
    constructor() {
        super(...arguments),
            this.type = "svg",
            this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (ir.has(n)) {
            const r = hf(n);
            return r && r.default || 0
        }
        return n = ag.has(n) ? n : qc(n),
            t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ye()
    }
    scrapeMotionValuesFromProps(t, n) {
        return ug(t, n)
    }
    build(t, n, r, i) {
        sf(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        lg(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = af(t.tagName),
            super.mount(t)
    }
}
const oT = (e, t) => nf(e) ? new iT(t, {
    enableHardwareAcceleration: !1
}) : new rT(t, {
    enableHardwareAcceleration: !0
})
    , sT = {
        layout: {
            ProjectionNode: uy,
            MeasureLayout: ny
        }
    }
    , aT = {
        ...VE,
        ...ex,
        ...FP,
        ...sT
    }
    , ar = uS((e, t) => US(e, t, aT, oT));
function py() {
    const e = j.useRef(!1);
    return Zc(() => (e.current = !0,
        () => {
            e.current = !1
        }
    ), []),
        e
}
function lT() {
    const e = py()
        , [t, n] = j.useState(0)
        , r = j.useCallback(() => {
            e.current && n(t + 1)
        }
            , [t]);
    return [j.useCallback(() => ee.postRender(r), [r]), t]
}
class uT extends j.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
                r.width = n.offsetWidth || 0,
                r.top = n.offsetTop,
                r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}
function cT({ children: e, isPresent: t }) {
    const n = j.useId()
        , r = j.useRef(null)
        , i = j.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return j.useInsertionEffect(() => {
        const { width: o, height: s, top: a, left: l } = i.current;
        if (t || !r.current || !o || !s)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
            u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
            () => {
                document.head.removeChild(u)
            }
    }
        , [t]),
        j.createElement(uT, {
            isPresent: t,
            childRef: r,
            sizeRef: i
        }, j.cloneElement(e, {
            ref: r
        }))
}
const gl = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
    const a = cg(fT)
        , l = j.useId()
        , u = j.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: c => {
                a.set(c, !0);
                for (const f of a.values())
                    if (!f)
                        return;
                r && r()
            }
            ,
            register: c => (a.set(c, !1),
                () => a.delete(c))
        }), o ? void 0 : [n]);
    return j.useMemo(() => {
        a.forEach((c, f) => a.set(f, !1))
    }
        , [n]),
        j.useEffect(() => {
            !n && !a.size && r && r()
        }
            , [n]),
        s === "popLayout" && (e = j.createElement(cT, {
            isPresent: n
        }, e)),
        j.createElement(xa.Provider, {
            value: u
        }, e)
}
    ;
function fT() {
    return new Map
}
function dT(e) {
    return j.useEffect(() => () => e(), [])
}
const zn = e => e.key || "";
function hT(e, t) {
    e.forEach(n => {
        const r = zn(n);
        t.set(r, n)
    }
    )
}
function pT(e) {
    const t = [];
    return j.Children.forEach(e, n => {
        j.isValidElement(n) && t.push(n)
    }
    ),
        t
}
const mT = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: o = !0, mode: s = "sync" }) => {
    const a = j.useContext(tf).forceRender || lT()[0]
        , l = py()
        , u = pT(e);
    let c = u;
    const f = j.useRef(new Map).current
        , d = j.useRef(c)
        , m = j.useRef(new Map).current
        , g = j.useRef(!0);
    if (Zc(() => {
        g.current = !1,
            hT(u, m),
            d.current = c
    }
    ),
        dT(() => {
            g.current = !0,
                m.clear(),
                f.clear()
        }
        ),
        g.current)
        return j.createElement(j.Fragment, null, c.map(h => j.createElement(gl, {
            key: zn(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s
        }, h)));
    c = [...c];
    const y = d.current.map(zn)
        , S = u.map(zn)
        , v = y.length;
    for (let h = 0; h < v; h++) {
        const p = y[h];
        S.indexOf(p) === -1 && !f.has(p) && f.set(p, void 0)
    }
    return s === "wait" && f.size && (c = []),
        f.forEach((h, p) => {
            if (S.indexOf(p) !== -1)
                return;
            const w = m.get(p);
            if (!w)
                return;
            const x = y.indexOf(p);
            let C = h;
            if (!C) {
                const E = () => {
                    f.delete(p);
                    const P = Array.from(m.keys()).filter(D => !S.includes(D));
                    if (P.forEach(D => m.delete(D)),
                        d.current = u.filter(D => {
                            const R = zn(D);
                            return R === p || P.includes(R)
                        }
                        ),
                        !f.size) {
                        if (l.current === !1)
                            return;
                        a(),
                            r && r()
                    }
                }
                    ;
                C = j.createElement(gl, {
                    key: zn(w),
                    isPresent: !1,
                    onExitComplete: E,
                    custom: t,
                    presenceAffectsLayout: o,
                    mode: s
                }, w),
                    f.set(p, C)
            }
            c.splice(x, 0, C)
        }
        ),
        c = c.map(h => {
            const p = h.key;
            return f.has(p) ? h : j.createElement(gl, {
                key: zn(h),
                isPresent: !0,
                presenceAffectsLayout: o,
                mode: s
            }, h)
        }
        ),
        j.createElement(j.Fragment, null, f.size ? c : c.map(h => j.cloneElement(h)))
}
    ;
var my = {
    exports: {}
}
    , vT = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    , gT = vT
    , yT = gT;
function vy() { }
function gy() { }
gy.resetWarningCache = vy;
var wT = function () {
    function e(r, i, o, s, a, l) {
        if (l !== yT) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: gy,
        resetWarningCache: vy
    };
    return n.PropTypes = n,
        n
};
my.exports = wT();
var ST = my.exports;
const le = qh(ST);
var xT = ["color", "size", "title", "className"];
function Vu() {
    return Vu = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Vu.apply(this, arguments)
}
function ET(e, t) {
    if (e == null)
        return {};
    var n = PT(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function PT(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var wf = j.forwardRef(function (e, t) {
    var n = e.color
        , r = e.size
        , i = e.title
        , o = e.className
        , s = ET(e, xT);
    return ne.createElement("svg", Vu({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
        className: ["bi", "bi-heart-half", o].filter(Boolean).join(" ")
    }, s), i ? ne.createElement("title", null, i) : null, ne.createElement("path", {
        d: "M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
    }))
});
wf.propTypes = {
    color: le.string,
    size: le.oneOfType([le.string, le.number]),
    title: le.string,
    className: le.string
};
wf.defaultProps = {
    color: "currentColor",
    size: "1em",
    title: null,
    className: ""
};
var TT = ["color", "size", "title", "className"];
function Ou() {
    return Ou = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Ou.apply(this, arguments)
}
function CT(e, t) {
    if (e == null)
        return {};
    var n = kT(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function kT(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var Sf = j.forwardRef(function (e, t) {
    var n = e.color
        , r = e.size
        , i = e.title
        , o = e.className
        , s = CT(e, TT);
    return ne.createElement("svg", Ou({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
        className: ["bi", "bi-twitch", o].filter(Boolean).join(" ")
    }, s), i ? ne.createElement("title", null, i) : null, ne.createElement("path", {
        d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"
    }), ne.createElement("path", {
        d: "M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"
    }))
});
Sf.propTypes = {
    color: le.string,
    size: le.oneOfType([le.string, le.number]),
    title: le.string,
    className: le.string
};
Sf.defaultProps = {
    color: "currentColor",
    size: "1em",
    title: null,
    className: ""
};
var AT = ["color", "size", "title", "className"];
function Mu() {
    return Mu = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        Mu.apply(this, arguments)
}
function LT(e, t) {
    if (e == null)
        return {};
    var n = _T(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function _T(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var xf = j.forwardRef(function (e, t) {
    var n = e.color
        , r = e.size
        , i = e.title
        , o = e.className
        , s = LT(e, AT);
    return ne.createElement("svg", Mu({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
        className: ["bi", "bi-twitter-x", o].filter(Boolean).join(" ")
    }, s), i ? ne.createElement("title", null, i) : null, ne.createElement("path", {
        d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
    }))
});
xf.propTypes = {
    color: le.string,
    size: le.oneOfType([le.string, le.number]),
    title: le.string,
    className: le.string
};
xf.defaultProps = {
    color: "currentColor",
    size: "1em",
    title: null,
    className: ""
};
var RT = ["color", "size", "title", "className"];
function ju() {
    return ju = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        ,
        ju.apply(this, arguments)
}
function NT(e, t) {
    if (e == null)
        return {};
    var n = DT(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
                !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function DT(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
            !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var Ef = j.forwardRef(function (e, t) {
    var n = e.color
        , r = e.size
        , i = e.title
        , o = e.className
        , s = NT(e, RT);
    return ne.createElement("svg", ju({
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: r,
        height: r,
        fill: n,
        className: ["bi", "bi-youtube", o].filter(Boolean).join(" ")
    }, s), i ? ne.createElement("title", null, i) : null, ne.createElement("path", {
        d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
    }))
});
Ef.propTypes = {
    color: le.string,
    size: le.oneOfType([le.string, le.number]),
    title: le.string,
    className: le.string
};
Ef.defaultProps = {
    color: "currentColor",
    size: "1em",
    title: null,
    className: ""
};
const ci = e => T.jsx(T.Fragment, {
    children: e.text.split("").map(function (t, n) {
        return T.jsx("span", {
            "aria-hidden": "true",
            children: t
        }, n)
    })
})
    , Ho = e => T.jsx(T.Fragment, {
        children: e.text.split("").map(function (t, n) {
            return T.jsx("span", {
                "aria-hidden": "true",
                className: "blue",
                children: t
            }, n)
        })
    })
    , VT = "/assets/logo-DY3LGhgK.png"
    , OT = "/assets/ColinHorn-MediaKit-B_lPu2W8.png"
    , MT = "/assets/icon-stream-DMRtKjd2.png"
    , jT = "/assets/video-bg1-extra-Cpx25qCj.mp4"
    , Zh = "/assets/video-bg1-D9QY4R4K.webm"
    , IT = "/assets/video-bg2-extra-Cb1iYIbn.mp4"
    , FT = "/assets/video-bg2-BG0o4Icj.webm"
    , zT = "/assets/video-bg3-extra-BQ0B5OHY.mp4"
    , BT = "/assets/video-bg3--B062Kvr.webm"
    , UT = "/assets/video-bg4-5qlipqym.mp4"
    , $T = "/assets/ChatStyler-7jzScuVF.png"
    , WT = "/assets/BrowserTimer-Dq-CbKAT.png"
    , HT = "/assets/StreamChat-BylOF6eO.png";
function GT() {
    const [e, t] = j.useState(!1)
        , n = ne.createRef()
        , r = ne.createRef();
    return j.useEffect(() => {
        n.current && r.current && r.current.splide && (console.log("Oh Hi"),
            n.current.sync(r.current.splide))
    }
        , [n, r]),
        T.jsxs(T.Fragment, {
            children: [T.jsxs("header", {
                children: [T.jsx("img", {
                    src: VT,
                    alt: ""
                }), T.jsx("h1", {
                    children: "Colin Horn"
                })]
            }), T.jsxs("section", {
                className: "slide-container",
                children: [T.jsxs(Kd, {
                    options: {
                        speed: 1500,
                        arrows: !1,
                        direction: "ttb",
                        drag: !0,
                        paginationDirection: "ttb",
                        height: "100%",
                        type: "loop",
                        wheel: !0,
                        waitForTransition: !0,
                        breakpoints: {
                            767: {
                                paginationDirection: "ltr"
                            }
                        }
                    },
                    ref: n,
                    children: [T.jsx(Jt, {
                        className: "slide-item",
                        children: T.jsxs("div", {
                            className: "text",
                            children: [T.jsxs("div", {
                                className: "title",
                                children: [T.jsx("h1", {
                                    "aria-label": "Stream Tools",
                                    children: T.jsxs("span", {
                                        children: [T.jsx(ci, {
                                            text: "Stream"
                                        }), T.jsx(Ho, {
                                            text: "Tools"
                                        })]
                                    })
                                }), T.jsx("div", {
                                    className: "icon stream",
                                    children: T.jsx("img", {
                                        src: MT,
                                        alt: ""
                                    })
                                })]
                            }), T.jsx(ar.p, {
                                className: "preamble",
                                children: "Looking for some handy streaming widgets or tools? I have created things for every streamer to use - including a styler for your StreamElements or StreamLabs chat widget or a timer for use within OBS as a browser"
                            }), T.jsxs("div", {
                                className: "buttons",
                                children: [T.jsx("button", {
                                    className: "btn",
                                    onClick: () => t(!0),
                                    children: "Streaming Tools"
                                }), T.jsx("a", {
                                    href: "https://shop.colinhorn.co.uk/collections/streaming",
                                    target: "_blank",
                                    className: "btn",
                                    children: "Widgets & Layouts"
                                })]
                            })]
                        })
                    }), T.jsx(Jt, {
                        className: "slide-item",
                        children: T.jsxs("div", {
                            className: "text youtube",
                            children: [T.jsx("div", {
                                className: "title",
                                children: T.jsx("h1", {
                                    "aria-label": "YouTube",
                                    children: T.jsxs("span", {
                                        children: [T.jsx(ci, {
                                            text: "You"
                                        }), T.jsx(Ho, {
                                            text: "Tube"
                                        })]
                                    })
                                })
                            }), T.jsx("p", {
                                className: "preamble",
                                children: "Come visit my YouTube channel to watch my latest video. From tech reviews, gameplay, stream tutorials and the occasional vlog, this is where you can keep up to do date with the latest."
                            }), T.jsx("div", {
                                className: "buttons",
                                children: T.jsx("a", {
                                    href: "https://www.youtube.com/colinhorn",
                                    className: "btn youtube",
                                    children: "Visit Channel"
                                })
                            })]
                        })
                    }), T.jsx(Jt, {
                        className: "slide-item",
                        children: T.jsxs("div", {
                            className: "text twitch",
                            children: [T.jsx("div", {
                                className: "title",
                                children: T.jsx("h1", {
                                    "aria-label": "Twitch",
                                    children: T.jsxs("span", {
                                        children: [T.jsx(ci, {
                                            text: "Tw"
                                        }), T.jsx(Ho, {
                                            text: "i"
                                        }), T.jsx(ci, {
                                            text: "tch"
                                        })]
                                    })
                                })
                            }), T.jsx("p", {
                                className: "preamble",
                                children: "Wanting to interact with me live and watch some gameplay? This is the place to do it over on Twitch."
                            }), T.jsx("div", {
                                className: "buttons",
                                children: T.jsx("a", {
                                    href: "https://www.twitch.tv/C0LINHORN",
                                    className: "btn twitch",
                                    children: "Watch Live"
                                })
                            })]
                        })
                    }), T.jsx(Jt, {
                        className: "slide-item",
                        children: T.jsxs("div", {
                            className: "text ",
                            children: [T.jsx("div", {
                                className: "title",
                                children: T.jsx("h1", {
                                    "aria-label": "Merchandise",
                                    children: T.jsxs("span", {
                                        children: [T.jsx(ci, {
                                            text: "Mer"
                                        }), T.jsx(Ho, {
                                            text: "ch"
                                        })]
                                    })
                                })
                            }), T.jsx("p", {
                                className: "preamble",
                                children: "Looking to support me and pick up some threads on the way? Grab your Colin Horn Merch from the store. More coming soon!"
                            }), T.jsx("div", {
                                className: "buttons",
                                children: T.jsx("a", {
                                    href: "https://shop.colinhorn.co.uk",
                                    className: "btn",
                                    children: "Shop Now"
                                })
                            })]
                        })
                    })]
                }), T.jsx("section", {
                    className: "background-slide",
                    children: T.jsxs(Kd, {
                        options: {
                            speed: 1500,
                            arrows: !1,
                            pagination: !1,
                            type: "fade",
                            rewind: !0,
                            height: "100%",
                            width: "100%",
                            drag: !0,
                            isNavigation: !0
                        },
                        ref: r,
                        children: [T.jsxs(Jt, {
                            className: "slide-item",
                            children: [T.jsx("div", {
                                className: "background",
                                children: T.jsx("video", {
                                    src: jT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            }), T.jsx("div", {
                                className: "blob",
                                children: T.jsx("video", {
                                    src: Zh,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            })]
                        }), T.jsxs(Jt, {
                            className: "slide-item",
                            children: [T.jsx("div", {
                                className: "background",
                                children: T.jsx("video", {
                                    src: IT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            }), T.jsx("div", {
                                className: "blob",
                                children: T.jsx("video", {
                                    src: FT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            })]
                        }), T.jsxs(Jt, {
                            className: "slide-item",
                            children: [T.jsx("div", {
                                className: "background",
                                children: T.jsx("video", {
                                    src: zT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            }), T.jsx("div", {
                                className: "blob",
                                children: T.jsx("video", {
                                    src: BT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            })]
                        }), T.jsxs(Jt, {
                            className: "slide-item",
                            children: [T.jsx("div", {
                                className: "background",
                                children: T.jsx("video", {
                                    src: UT,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            }), T.jsx("div", {
                                className: "blob flipped",
                                children: T.jsx("video", {
                                    src: Zh,
                                    loop: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    autoPlay: !0
                                })
                            })]
                        })]
                    })
                }), T.jsx(mT, {
                    mode: "wait",
                    children: e && T.jsxs(T.Fragment, {
                        children: [T.jsx(ar.div, {
                            className: "popupclose",
                            onClick: () => t(!1),
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .5
                            }
                        }), T.jsxs(ar.div, {
                            className: "popup",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .5
                            },
                            children: [T.jsx("span", {
                                className: "close",
                                onClick: () => t(!1),
                                children: "×"
                            }), T.jsxs("div", {
                                className: "columns",
                                children: [T.jsxs("div", {
                                    className: "item",
                                    children: [T.jsx("div", {
                                        className: "image",
                                        children: T.jsx(ar.img, {
                                            src: $T,
                                            alt: "",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            }
                                        })
                                    }), T.jsxs("div", {
                                        className: "text",
                                        children: [T.jsx("h2", {
                                            children: "Chat Styler"
                                        }), T.jsx("p", {
                                            children: "Looking to customise the look of your StreamElements or StreamLabs chat widget?"
                                        }), T.jsx("p", {
                                            children: "Use this tool to change colours, angle, size and even backgrounds of your on stream chat window."
                                        })]
                                    }), T.jsx("a", {
                                        href: "https://chatstyler.colinhorn.co.uk",
                                        className: "btn",
                                        children: "View"
                                    })]
                                }), T.jsxs("div", {
                                    className: "item",
                                    children: [T.jsx("div", {
                                        className: "image",
                                        children: T.jsx(ar.img, {
                                            src: HT,
                                            alt: "",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            }
                                        })
                                    }), T.jsxs("div", {
                                        className: "text",
                                        children: [T.jsx("h2", {
                                            children: "Chat Dashboard"
                                        }), T.jsx("p", {
                                            children: "Keep an eye on different chats at once."
                                        }), T.jsx("p", {
                                            children: "The Chat Dashboard allows you to have your Twitch, TikTok, YouTube and Kick chat all in one place."
                                        })]
                                    }), T.jsx("a", {
                                        href: "https://streamchat.colinhorn.co.uk",
                                        className: "btn",
                                        children: "View"
                                    })]
                                }), T.jsxs("div", {
                                    className: "item",
                                    children: [T.jsx("div", {
                                        className: "image",
                                        children: T.jsx(ar.img, {
                                            src: WT,
                                            alt: "",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            }
                                        })
                                    }), T.jsxs("div", {
                                        className: "text",
                                        children: [T.jsx("h2", {
                                            children: "Browser Timer"
                                        }), T.jsx("p", {
                                            children: "A simple but yet handy timer"
                                        }), T.jsx("p", {
                                            children: "Use this timer as a browser source within your streaming software. Easy to implement and customise in any way possible."
                                        })]
                                    }), T.jsx("a", {
                                        href: "https://timer.colinhorn.co.uk",
                                        className: "btn",
                                        children: "View"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            }), T.jsx("section", {
                className: "socials",
                children: T.jsxs("ul", {
                    children: [T.jsx("li", {
                        children: T.jsx("a", {
                            target: "_blank",
                            href: "https://www.twitch.tv/C0LINHORN",
                            children: T.jsx(Sf, {
                                size: 25
                            })
                        })
                    }), T.jsx("li", {
                        children: T.jsx("a", {
                            target: "_blank",
                            href: "https://www.youtube.com/colinhorn",
                            children: T.jsx(Ef, {
                                size: 29
                            })
                        })
                    }), T.jsx("li", {
                        children: T.jsx("a", {
                            target: "_blank",
                            href: "https://www.twitter.com/C0LINHORN",
                            children: T.jsx(xf, {
                                size: 25
                            })
                        })
                    }), T.jsx("li", {
                        children: T.jsx("a", {
                            href: "https://shop.colinhorn.co.uk/pages/donate",
                            target: "_blank",
                            children: T.jsx(wf, {
                                size: 25
                            })
                        })
                    })]
                })
            }), T.jsx("footer", {
                children: T.jsxs("ul", {
                    children: [T.jsx("li", {
                        children: T.jsx("a", {
                            href: "mailto:colin@colinhorn.co.uk",
                            children: "Contact"
                        })
                    }), T.jsxs("li", {
                        children: ["© Copyright Colin Horn ", new Date().getFullYear()]
                    }), T.jsx("li", {
                        children: T.jsx("a", {
                            href: OT,
                            download: !0,
                            children: "Media Kit"
                        })
                    })]
                })
            })]
        })
}
yl.createRoot(document.getElementById("root")).render(T.jsx(ne.StrictMode, {
    children: T.jsx(GT, {})
}));