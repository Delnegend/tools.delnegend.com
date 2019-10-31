! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function (e, t, n) {
    "use strict";
    (function (e, r) {
        n.d(t, "a", function () {
            return Pt
        }), n.d(t, "f", function () {
            return ge
        }), n.d(t, "d", function () {
            return se
        }), n.d(t, "c", function () {
            return D
        }), n.d(t, "b", function () {
            return O
        }), n.d(t, "e", function () {
            return Ht
        }), n.d(t, "g", function () {
            return Kt
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var i = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };

        function o(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var a = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        };

        function s(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function l() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
            return e
        }
        var c = {},
            u = {};

        function p(e) {
            if (!0 !== e.__mobxDidRunLazyInitializers) {
                var t = e.__mobxDecorators;
                if (t)
                    for (var n in rt(e, "__mobxDidRunLazyInitializers", !0), t) {
                        var r = t[n];
                        r.propertyCreator(e, r.prop, r.descriptor, r.decoratorTarget, r.decoratorArguments)
                    }
            }
        }

        function h(e, t) {
            return function () {
                var n, r = function (r, i, o, s) {
                    if (!0 === s) return t(r, i, o, r, n), null;
                    if (!Object.prototype.hasOwnProperty.call(r, "__mobxDecorators")) {
                        var l = r.__mobxDecorators;
                        rt(r, "__mobxDecorators", a({}, l))
                    }
                    return r.__mobxDecorators[i] = {
                            prop: i,
                            propertyCreator: t,
                            descriptor: o,
                            decoratorTarget: r,
                            decoratorArguments: n
                        },
                        function (e, t) {
                            var n = t ? c : u;
                            return n[e] || (n[e] = {
                                configurable: !0,
                                enumerable: t,
                                get: function () {
                                    return p(this), this[e]
                                },
                                set: function (t) {
                                    p(this), this[e] = t
                                }
                            })
                        }(i, e)
                };
                return function (e) {
                    return (2 === e.length || 3 === e.length) && "string" == typeof e[1] || 4 === e.length && !0 === e[3]
                }(arguments) ? (n = Xe, r.apply(null, arguments)) : (n = Array.prototype.slice.call(arguments), r)
            }
        }

        function d() {
            return !!vt.spyListeners.length
        }

        function f(e) {
            if (vt.spyListeners.length)
                for (var t = vt.spyListeners, n = 0, r = t.length; n < r; n++) t[n](e)
        }

        function v(e) {
            f(a({}, e, {
                spyReportStart: !0
            }))
        }
        var m = {
            spyReportEnd: !0
        };

        function y(e) {
            f(e ? a({}, e, {
                spyReportEnd: !0
            }) : m)
        }

        function g(e, t) {
            var n = function () {
                return b(e, t, this, arguments)
            };
            return n.isMobxAction = !0, n
        }

        function b(e, t, n, r) {
            var i = function (e, t, n, r) {
                var i = d() && !!e,
                    o = 0;
                if (i) {
                    o = Date.now();
                    var a = r && r.length || 0,
                        s = new Array(a);
                    if (a > 0)
                        for (var l = 0; l < a; l++) s[l] = r[l];
                    v({
                        type: "action",
                        name: e,
                        object: n,
                        arguments: s
                    })
                }
                var c = Nt();
                wt();
                var u = w(!0);
                return {
                    prevDerivation: c,
                    prevAllowStateChanges: u,
                    notifySpy: i,
                    startTime: o
                }
            }(e, 0, n, r);
            try {
                return t.apply(n, r)
            } finally {
                ! function (e) {
                    _(e.prevAllowStateChanges), _t(), Ct(e.prevDerivation), e.notifySpy && y({
                        time: Date.now() - e.startTime
                    })
                }(i)
            }
        }

        function w(e) {
            var t = vt.allowStateChanges;
            return vt.allowStateChanges = e, t
        }

        function _(e) {
            vt.allowStateChanges = e
        }

        function x() {
            qe(!1)
        }

        function k(e) {
            return function (t, n, r) {
                if (r) {
                    if (r.value) return {
                        value: g(e, r.value),
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    };
                    var i = r.initializer;
                    return {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        initializer: function () {
                            return g(e, i.call(this))
                        }
                    }
                }
                return function (e) {
                    return function (t, n, r) {
                        Object.defineProperty(t, n, {
                            configurable: !0,
                            enumerable: !1,
                            get: function () {},
                            set: function (t) {
                                rt(this, n, O(e, t))
                            }
                        })
                    }
                }(e).apply(this, arguments)
            }
        }
        var O = function (e, t, n, r) {
            return 1 === arguments.length && "function" == typeof e ? g(e.name || "<unnamed action>", e) : 2 === arguments.length && "function" == typeof t ? g(e, t) : 1 === arguments.length && "string" == typeof e ? k(e) : !0 !== r ? k(t).apply(null, arguments) : void(e[t] = g(e.name || t, n.value))
        };

        function S(e, t, n) {
            rt(e, t, g(t, n.bind(e)))
        }
        O.bound = function (e, t, n, r) {
            return !0 === r ? (S(e, t, n.value), null) : n ? {
                configurable: !0,
                enumerable: !1,
                get: function () {
                    return S(this, t, n.value || n.initializer.call(this)), this[t]
                },
                set: x
            } : {
                enumerable: !1,
                configurable: !0,
                set: function (e) {
                    S(this, t, e)
                },
                get: function () {}
            }
        };
        var T = Object.prototype.toString;

        function j(e, t) {
            return z(e, t)
        }

        function z(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return !1;
            if (e != e) return t != t;
            var i = typeof e;
            return ("function" === i || "object" === i || "object" == typeof t) && function (e, t, n, r) {
                e = A(e), t = A(t);
                var i = T.call(e);
                if (i !== T.call(t)) return !1;
                switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + e == "" + t;
                    case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object Symbol]":
                        return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
                }
                var o = "[object Array]" === i;
                if (!o) {
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    var a = e.constructor,
                        s = t.constructor;
                    if (a !== s && !("function" == typeof a && a instanceof a && "function" == typeof s && s instanceof s) && "constructor" in e && "constructor" in t) return !1
                }
                n = n || [], r = r || [];
                var l = n.length;
                for (; l--;)
                    if (n[l] === e) return r[l] === t;
                if (n.push(e), r.push(t), o) {
                    if ((l = e.length) !== t.length) return !1;
                    for (; l--;)
                        if (!z(e[l], t[l], n, r)) return !1
                } else {
                    var c, u = Object.keys(e);
                    if (l = u.length, Object.keys(t).length !== l) return !1;
                    for (; l--;)
                        if (c = u[l], !N(t, c) || !z(e[c], t[c], n, r)) return !1
                }
                return n.pop(), r.pop(), !0
            }(e, t, n, r)
        }

        function A(e) {
            return Ke(e) ? e.peek() : at(e) || Ce(e) ? st(e.entries()) : e
        }

        function N(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function C(e, t) {
            return e === t
        }
        var E = {
            identity: C,
            structural: function (e, t) {
                return j(e, t)
            },
            default: function (e, t) {
                return function (e, t) {
                    return "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                }(e, t) || C(e, t)
            }
        };

        function D(e, t) {
            void 0 === t && (t = Ye);
            var n, r = t && t.name || e.name || "Autorun@" + Fe();
            if (!t.scheduler && !t.delay) n = new Pt(r, function () {
                this.track(a)
            }, t.onError);
            else {
                var i = L(t),
                    o = !1;
                n = new Pt(r, function () {
                    o || (o = !0, i(function () {
                        o = !1, n.isDisposed || n.track(a)
                    }))
                }, t.onError)
            }

            function a() {
                e(n)
            }
            return n.schedule(), n.getDisposer()
        }
        var P = function (e) {
            return e()
        };

        function L(e) {
            return e.scheduler ? e.scheduler : e.delay ? function (t) {
                return setTimeout(t, e.delay)
            } : P
        }
        var R = function () {
            function e(e) {
                this.dependenciesState = ut.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = !1, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = ut.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + Fe(), this.value = new Ot(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = pt.NONE, this.firstGet = !0, this.derivation = e.get, this.name = e.name || "ComputedValue@" + Fe(), e.set && (this.setter = g(this.name + "-setter", e.set)), this.equals = e.equals || (e.compareStructural || e.struct ? E.structural : E.default), this.scope = e.context, this.requiresReaction = !!e.requiresReaction, this.keepAlive = !!e.keepAlive
            }
            return e.prototype.onBecomeStale = function () {
                ! function (e) {
                    if (e.lowestObserverState !== ut.UP_TO_DATE) return;
                    e.lowestObserverState = ut.POSSIBLY_STALE;
                    var t = e.observers,
                        n = t.length;
                    for (; n--;) {
                        var r = t[n];
                        r.dependenciesState === ut.UP_TO_DATE && (r.dependenciesState = ut.POSSIBLY_STALE, r.isTracing !== pt.NONE && kt(r, e), r.onBecomeStale())
                    }
                }(this)
            }, e.prototype.onBecomeUnobserved = function () {}, e.prototype.onBecomeObserved = function () {}, e.prototype.get = function () {
                var e = this;
                this.keepAlive && this.firstGet && (this.firstGet = !1, D(function () {
                    return e.get()
                })), this.isComputing && qe("Cycle detected in computation " + this.name + ": " + this.derivation), 0 === vt.inBatch && 0 === this.observers.length ? Tt(this) && (this.warnAboutUntrackedRead(), wt(), this.value = this.computeValue(!1), _t()) : (xt(this), Tt(this) && this.trackAndCompute() && function (e) {
                    if (e.lowestObserverState === ut.STALE) return;
                    e.lowestObserverState = ut.STALE;
                    var t = e.observers,
                        n = t.length;
                    for (; n--;) {
                        var r = t[n];
                        r.dependenciesState === ut.POSSIBLY_STALE ? r.dependenciesState = ut.STALE : r.dependenciesState === ut.UP_TO_DATE && (e.lowestObserverState = ut.UP_TO_DATE)
                    }
                }(this));
                var t = this.value;
                if (St(t)) throw t.cause;
                return t
            }, e.prototype.peek = function () {
                var e = this.computeValue(!1);
                if (St(e)) throw e.cause;
                return e
            }, e.prototype.set = function (e) {
                if (this.setter) {
                    Ze(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                    try {
                        this.setter.call(this.scope, e)
                    } finally {
                        this.isRunningSetter = !1
                    }
                } else Ze(!1, !1)
            }, e.prototype.trackAndCompute = function () {
                d() && f({
                    object: this.scope,
                    type: "compute",
                    name: this.name
                });
                var e = this.value,
                    t = this.dependenciesState === ut.NOT_TRACKING,
                    n = this.computeValue(!0),
                    r = t || St(e) || St(n) || !this.equals(e, n);
                return r && (this.value = n), r
            }, e.prototype.computeValue = function (e) {
                var t;
                if (this.isComputing = !0, vt.computationDepth++, e) t = zt(this, this.derivation, this.scope);
                else if (!0 === vt.disableErrorBoundaries) t = this.derivation.call(this.scope);
                else try {
                    t = this.derivation.call(this.scope)
                } catch (e) {
                    t = new Ot(e)
                }
                return vt.computationDepth--, this.isComputing = !1, t
            }, e.prototype.suspend = function () {
                At(this), this.value = void 0
            }, e.prototype.observe = function (e, t) {
                var n = this,
                    r = !0,
                    i = void 0;
                return D(function () {
                    var o = n.get();
                    if (!r || t) {
                        var a = Nt();
                        e({
                            type: "update",
                            object: n,
                            newValue: o,
                            oldValue: i
                        }), Ct(a)
                    }
                    r = !1, i = o
                })
            }, e.prototype.warnAboutUntrackedRead = function () {}, e.prototype.toJSON = function () {
                return this.get()
            }, e.prototype.toString = function () {
                return this.name + "[" + this.derivation.toString() + "]"
            }, e.prototype.valueOf = function () {
                return ct(this.get())
            }, e
        }();
        R.prototype[lt()] = R.prototype.valueOf;
        var M = ot("ComputedValue", R);

        function V(e) {
            return void 0 !== e.interceptors && e.interceptors.length > 0
        }

        function I(e, t) {
            var n = e.interceptors || (e.interceptors = []);
            return n.push(t), et(function () {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            })
        }

        function B(e, t) {
            var n = Nt();
            try {
                var r = e.interceptors;
                if (r)
                    for (var i = 0, o = r.length; i < o && (Ze(!(t = r[i](t)) || t.type, "Intercept handlers should return nothing or a change object"), t); i++);
                return t
            } finally {
                Ct(n)
            }
        }

        function U(e) {
            return void 0 !== e.changeListeners && e.changeListeners.length > 0
        }

        function H(e, t) {
            var n = e.changeListeners || (e.changeListeners = []);
            return n.push(t), et(function () {
                var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            })
        }

        function $(e, t) {
            var n = Nt(),
                r = e.changeListeners;
            if (r) {
                for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
                Ct(n)
            }
        }
        var W = {};
        ! function () {
            if (Ae) return;
            Ae = function () {
                function e(e) {
                    void 0 === e && (e = "Atom@" + Fe()), this.name = e, this.isPendingUnobservation = !1, this.isBeingObserved = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = ut.NOT_TRACKING
                }
                return e.prototype.onBecomeUnobserved = function () {}, e.prototype.onBecomeObserved = function () {}, e.prototype.reportObserved = function () {
                    return xt(this)
                }, e.prototype.reportChanged = function () {
                    wt(),
                        function (e) {
                            if (e.lowestObserverState === ut.STALE) return;
                            e.lowestObserverState = ut.STALE;
                            var t = e.observers,
                                n = t.length;
                            for (; n--;) {
                                var r = t[n];
                                r.dependenciesState === ut.UP_TO_DATE && (r.isTracing !== pt.NONE && kt(r, e), r.onBecomeStale()), r.dependenciesState = ut.STALE
                            }
                        }(this), _t()
                }, e.prototype.toString = function () {
                    return this.name
                }, e
            }(), Ne = ot("Atom", Ae)
        }();
        var K = function (e) {
            function t(t, n, r, i) {
                void 0 === r && (r = "ObservableValue@" + Fe()), void 0 === i && (i = !0);
                var o = e.call(this, r) || this;
                return o.enhancer = n, o.hasUnreportedChange = !1, o.value = n(t, void 0, r), i && d() && f({
                    type: "create",
                    name: o.name,
                    newValue: "" + o.value
                }), o
            }
            return o(t, e), t.prototype.dehanceValue = function (e) {
                return void 0 !== this.dehancer ? this.dehancer(e) : e
            }, t.prototype.set = function (e) {
                var t = this.value;
                if ((e = this.prepareNewValue(e)) !== W) {
                    var n = d();
                    n && v({
                        type: "update",
                        name: this.name,
                        newValue: e,
                        oldValue: t
                    }), this.setNewValue(e), n && y()
                }
            }, t.prototype.prepareNewValue = function (e) {
                if (jt(this), V(this)) {
                    var t = B(this, {
                        object: this,
                        type: "update",
                        newValue: e
                    });
                    if (!t) return W;
                    e = t.newValue
                }
                return e = this.enhancer(e, this.value, this.name), this.value !== e ? e : W
            }, t.prototype.setNewValue = function (e) {
                var t = this.value;
                this.value = e, this.reportChanged(), U(this) && $(this, {
                    type: "update",
                    object: this,
                    newValue: e,
                    oldValue: t
                })
            }, t.prototype.get = function () {
                return this.reportObserved(), this.dehanceValue(this.value)
            }, t.prototype.intercept = function (e) {
                return I(this, e)
            }, t.prototype.observe = function (e, t) {
                return t && e({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0
                }), H(this, e)
            }, t.prototype.toJSON = function () {
                return this.get()
            }, t.prototype.toString = function () {
                return this.name + "[" + this.value + "]"
            }, t.prototype.valueOf = function () {
                return ct(this.get())
            }, t
        }(Ae);
        K.prototype[lt()] = K.prototype.valueOf;
        var G = ot("ObservableValue", K),
            X = function () {
                function e(e, t, n) {
                    this.target = e, this.name = t, this.defaultEnhancer = n, this.values = {}
                }
                return e.prototype.read = function (e, t) {
                    if (this.target === e || (this.illegalAccess(e, t), this.values[t])) return this.values[t].get()
                }, e.prototype.write = function (e, t, n) {
                    var r = this.target;
                    r !== e && this.illegalAccess(e, t);
                    var i = this.values[t];
                    if (i instanceof R) i.set(n);
                    else {
                        if (V(this)) {
                            if (!(l = B(this, {
                                    type: "update",
                                    object: r,
                                    name: t,
                                    newValue: n
                                }))) return;
                            n = l.newValue
                        }
                        if ((n = i.prepareNewValue(n)) !== W) {
                            var o = U(this),
                                s = d(),
                                l = o || s ? {
                                    type: "update",
                                    object: r,
                                    oldValue: i.value,
                                    name: t,
                                    newValue: n
                                } : null;
                            s && v(a({}, l, {
                                name: this.name,
                                key: t
                            })), i.setNewValue(n), o && $(this, l), s && y()
                        }
                    }
                }, e.prototype.remove = function (e) {
                    if (this.values[e]) {
                        var t = this.target;
                        if (V(this))
                            if (!(o = B(this, {
                                    object: t,
                                    name: e,
                                    type: "remove"
                                }))) return;
                        try {
                            wt();
                            var n = U(this),
                                r = d(),
                                i = this.values[e].get();
                            this.keys && this.keys.remove(e), delete this.values[e], delete this.target[e];
                            var o = n || r ? {
                                type: "remove",
                                object: t,
                                oldValue: i,
                                name: e
                            } : null;
                            r && v(a({}, o, {
                                name: this.name,
                                key: e
                            })), n && $(this, o), r && y()
                        } finally {
                            _t()
                        }
                    }
                }, e.prototype.illegalAccess = function (e, t) {
                    console.warn("Property '" + t + "' of '" + e + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner")
                }, e.prototype.observe = function (e, t) {
                    return H(this, e)
                }, e.prototype.intercept = function (e) {
                    return I(this, e)
                }, e.prototype.getKeys = function () {
                    var e = this;
                    return void 0 === this.keys && (this.keys = new Ie(Object.keys(this.values).filter(function (t) {
                        return e.values[t] instanceof K
                    }), _e, "keys(" + this.name + ")", !0)), this.keys.slice()
                }, e
            }();

        function Y(e, t, n) {
            void 0 === t && (t = ""), void 0 === n && (n = we);
            var r = e.$mobx;
            return r || (nt(e) || (t = (e.constructor.name || "ObservableObject") + "@" + Fe()), t || (t = "ObservableObject@" + Fe()), it(e, "$mobx", r = new X(e, t, n)), r)
        }

        function J(e, t, n, r) {
            var i = Y(e);
            if (V(i)) {
                var o = B(i, {
                    object: e,
                    name: t,
                    type: "add",
                    newValue: n
                });
                if (!o) return;
                n = o.newValue
            }
            n = (i.values[t] = new K(n, r, i.name + "." + t, !1)).value, Object.defineProperty(e, t, function (e) {
                    return q[e] || (q[e] = {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return this.$mobx.read(this, e)
                        },
                        set: function (t) {
                            this.$mobx.write(this, e, t)
                        }
                    })
                }(t)), i.keys && i.keys.push(t),
                function (e, t, n, r) {
                    var i = U(e),
                        o = d(),
                        s = i || o ? {
                            type: "add",
                            object: t,
                            name: n,
                            newValue: r
                        } : null;
                    o && v(a({}, s, {
                        name: e.name,
                        key: n
                    }));
                    i && $(e, s);
                    o && y()
                }(i, e, t, n)
        }

        function F(e, t, n) {
            var r = Y(e);
            n.name = r.name + "." + t, n.context = e, r.values[t] = new R(n), Object.defineProperty(e, t, function (e) {
                return Z[e] || (Z[e] = {
                    configurable: !0,
                    enumerable: !1,
                    get: function () {
                        return Q(this).read(this, e)
                    },
                    set: function (t) {
                        Q(this).write(this, e, t)
                    }
                })
            }(t))
        }
        var q = {},
            Z = {};

        function Q(e) {
            var t = e.$mobx;
            return t || (p(e), e.$mobx)
        }
        var ee = ot("ObservableObjectAdministration", X);

        function te(e) {
            return !!tt(e) && (p(e), ee(e.$mobx))
        }

        function ne(t) {
            var n = h(!0, function (e, n, r, i, o) {
                    J(e, n, r ? r.initializer ? r.initializer.call(e) : r.value : void 0, t)
                }),
                r = (void 0 !== e && e.env, n);
            return r.enhancer = t, r
        }

        function re(e, t) {
            if (null === e || void 0 === e) return !1;
            if (void 0 !== t) {
                if (te(e)) {
                    var n = e.$mobx;
                    return n.values && !!n.values[t]
                }
                return !1
            }
            return te(e) || !!e.$mobx || Ne(e) || It(e) || M(e)
        }

        function ie(e) {
            return 1 !== arguments.length && qe(!1), re(e)
        }
        var oe = h(!1, function (e, t, n, r, i) {
                var o = n.get,
                    s = n.set,
                    l = i[0] || {};
                F(e, t, a({
                    get: o,
                    set: s
                }, l))
            }),
            ae = oe({
                equals: E.structural
            }),
            se = function (e, t, n) {
                if ("string" == typeof t) return oe.apply(null, arguments);
                if (null !== e && "object" == typeof e && 1 === arguments.length) return oe.apply(null, arguments);
                var r = "object" == typeof t ? t : {};
                return r.get = e, r.set = "function" == typeof t ? t : r.set, r.name = r.name || e.name || "", new R(r)
            };

        function le(e, t, n, r) {
            var i = (r = pe(r)).defaultDecorator || (!1 === r.deep ? ve : de);
            Y(e, r.name, i.enhancer), wt();
            try {
                for (var o in t) {
                    var a = Object.getOwnPropertyDescriptor(t, o);
                    0;
                    var s = (n && o in n ? n[o] : a.get ? oe : i)(e, o, a, !0);
                    s && Object.defineProperty(e, o, s)
                }
            } finally {
                _t()
            }
            return e
        }
        se.struct = ae;
        var ce = {
                deep: !0,
                name: void 0,
                defaultDecorator: void 0
            },
            ue = {
                deep: !1,
                name: void 0,
                defaultDecorator: void 0
            };

        function pe(e) {
            return null === e || void 0 === e ? ce : "string" == typeof e ? {
                name: e,
                deep: !0
            } : e
        }

        function he(e) {
            return e.defaultDecorator ? e.defaultDecorator.enhancer : !1 === e.deep ? _e : we
        }
        Object.freeze(ce), Object.freeze(ue);
        var de = ne(we),
            fe = ne(function (e, t, n) {
                return void 0 === e || null === e ? e : te(e) || Ke(e) || Ce(e) ? e : Array.isArray(e) ? ge.array(e, {
                    name: n,
                    deep: !1
                }) : nt(e) ? ge.object(e, void 0, {
                    name: n,
                    deep: !1
                }) : at(e) ? ge.map(e, {
                    name: n,
                    deep: !1
                }) : qe(!1)
            }),
            ve = ne(_e),
            me = ne(function (e, t, n) {
                0;
                return j(e, t) ? t : e
            });
        var ye = {
                box: function (e, t) {
                    arguments.length > 2 && be("box");
                    var n = pe(t);
                    return new K(e, he(n), n.name)
                },
                shallowBox: function (e, t) {
                    return arguments.length > 2 && be("shallowBox"), Qe("observable.shallowBox", "observable.box(value, { deep: false })"), ge.box(e, {
                        name: t,
                        deep: !1
                    })
                },
                array: function (e, t) {
                    arguments.length > 2 && be("array");
                    var n = pe(t);
                    return new Ie(e, he(n), n.name)
                },
                shallowArray: function (e, t) {
                    return arguments.length > 2 && be("shallowArray"), Qe("observable.shallowArray", "observable.array(values, { deep: false })"), ge.array(e, {
                        name: t,
                        deep: !1
                    })
                },
                map: function (e, t) {
                    arguments.length > 2 && be("map");
                    var n = pe(t);
                    return new ze(e, he(n), n.name)
                },
                shallowMap: function (e, t) {
                    return arguments.length > 2 && be("shallowMap"), Qe("observable.shallowMap", "observable.map(values, { deep: false })"), ge.map(e, {
                        name: t,
                        deep: !1
                    })
                },
                object: function (e, t, n) {
                    return "string" == typeof arguments[1] && be("object"), le({}, e, t, pe(n))
                },
                shallowObject: function (e, t) {
                    return "string" == typeof arguments[1] && be("shallowObject"), Qe("observable.shallowObject", "observable.object(values, {}, { deep: false })"), ge.object(e, {}, {
                        name: t,
                        deep: !1
                    })
                },
                ref: ve,
                shallow: fe,
                deep: de,
                struct: me
            },
            ge = function (e, t, n) {
                if ("string" == typeof arguments[1]) return de.apply(null, arguments);
                if (ie(e)) return e;
                var r = nt(e) ? ge.object(e, t, n) : Array.isArray(e) ? ge.array(e, t) : at(e) ? ge.map(e, t) : e;
                if (r !== e) return r;
                qe(!1)
            };

        function be(e) {
            qe("Expected one or two arguments to observable." + e + ". Did you accidentally try to use observable." + e + " as decorator?")
        }

        function we(e, t, n) {
            return ie(e) ? e : Array.isArray(e) ? ge.array(e, {
                name: n
            }) : nt(e) ? ge.object(e, void 0, {
                name: n
            }) : at(e) ? ge.map(e, {
                name: n
            }) : e
        }

        function _e(e) {
            return e
        }

        function xe() {
            return "function" == typeof Symbol && Symbol.iterator || "@@iterator"
        }

        function ke(e, t) {
            it(e, xe(), t)
        }

        function Oe(e) {
            return e[xe()] = Se, e
        }

        function Se() {
            return this
        }

        function Te(e, t) {
            void 0 === t && (t = void 0), wt();
            try {
                return e.apply(t)
            } finally {
                _t()
            }
        }
        Object.keys(ye).forEach(function (e) {
            return ge[e] = ye[e]
        });
        var je = {},
            ze = function () {
                function e(e, t, n) {
                    if (void 0 === t && (t = we), void 0 === n && (n = "ObservableMap@" + Fe()), this.enhancer = t, this.name = n, this.$mobx = je, this._keys = new Ie(void 0, _e, this.name + ".keys()", !0), "function" != typeof Map) throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
                    this._data = new Map, this._hasMap = new Map, this.merge(e)
                }
                return e.prototype._has = function (e) {
                    return this._data.has(e)
                }, e.prototype.has = function (e) {
                    return this._hasMap.has(e) ? this._hasMap.get(e).get() : this._updateHasMapEntry(e, !1).get()
                }, e.prototype.set = function (e, t) {
                    var n = this._has(e);
                    if (V(this)) {
                        var r = B(this, {
                            type: n ? "update" : "add",
                            object: this,
                            newValue: t,
                            name: e
                        });
                        if (!r) return this;
                        t = r.newValue
                    }
                    return n ? this._updateValue(e, t) : this._addValue(e, t), this
                }, e.prototype.delete = function (e) {
                    var t = this;
                    if (V(this) && !(i = B(this, {
                            type: "delete",
                            object: this,
                            name: e
                        }))) return !1;
                    if (this._has(e)) {
                        var n = d(),
                            r = U(this),
                            i = r || n ? {
                                type: "delete",
                                object: this,
                                oldValue: this._data.get(e).value,
                                name: e
                            } : null;
                        return n && v(a({}, i, {
                            name: this.name,
                            key: e
                        })), Te(function () {
                            t._keys.remove(e), t._updateHasMapEntry(e, !1), t._data.get(e).setNewValue(void 0), t._data.delete(e)
                        }), r && $(this, i), n && y(), !0
                    }
                    return !1
                }, e.prototype._updateHasMapEntry = function (e, t) {
                    var n = this._hasMap.get(e);
                    return n ? n.setNewValue(t) : (n = new K(t, _e, this.name + "." + e + "?", !1), this._hasMap.set(e, n)), n
                }, e.prototype._updateValue = function (e, t) {
                    var n = this._data.get(e);
                    if ((t = n.prepareNewValue(t)) !== W) {
                        var r = d(),
                            i = U(this),
                            o = i || r ? {
                                type: "update",
                                object: this,
                                oldValue: n.value,
                                name: e,
                                newValue: t
                            } : null;
                        r && v(a({}, o, {
                            name: this.name,
                            key: e
                        })), n.setNewValue(t), i && $(this, o), r && y()
                    }
                }, e.prototype._addValue = function (e, t) {
                    var n = this;
                    Te(function () {
                        var r = new K(t, n.enhancer, n.name + "." + e, !1);
                        n._data.set(e, r), t = r.value, n._updateHasMapEntry(e, !0), n._keys.push(e)
                    });
                    var r = d(),
                        i = U(this),
                        o = i || r ? {
                            type: "add",
                            object: this,
                            name: e,
                            newValue: t
                        } : null;
                    r && v(a({}, o, {
                        name: this.name,
                        key: e
                    })), i && $(this, o), r && y()
                }, e.prototype.get = function (e) {
                    return this.has(e) ? this.dehanceValue(this._data.get(e).get()) : this.dehanceValue(void 0)
                }, e.prototype.dehanceValue = function (e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.keys = function () {
                    return this._keys[xe()]()
                }, e.prototype.values = function () {
                    var e = this,
                        t = 0;
                    return Oe({
                        next: function () {
                            return t < e._keys.length ? {
                                value: e.get(e._keys[t++]),
                                done: !1
                            } : {
                                value: void 0,
                                done: !0
                            }
                        }
                    })
                }, e.prototype.entries = function () {
                    var e = this,
                        t = 0;
                    return Oe({
                        next: function () {
                            if (t < e._keys.length) {
                                var n = e._keys[t++];
                                return {
                                    value: [n, e.get(n)],
                                    done: !1
                                }
                            }
                            return {
                                done: !0
                            }
                        }
                    })
                }, e.prototype.forEach = function (e, t) {
                    var n = this;
                    this._keys.forEach(function (r) {
                        return e.call(t, n.get(r), r, n)
                    })
                }, e.prototype.merge = function (e) {
                    var t = this;
                    return Ce(e) && (e = e.toJS()), Te(function () {
                        nt(e) ? Object.keys(e).forEach(function (n) {
                            return t.set(n, e[n])
                        }) : Array.isArray(e) ? e.forEach(function (e) {
                            var n = s(e, 2),
                                r = n[0],
                                i = n[1];
                            return t.set(r, i)
                        }) : at(e) ? e.forEach(function (e, n) {
                            return t.set(n, e)
                        }) : null !== e && void 0 !== e && qe("Cannot initialize map from " + e)
                    }), this
                }, e.prototype.clear = function () {
                    var e = this;
                    Te(function () {
                        ! function (e) {
                            var t = Nt(),
                                n = e();
                            Ct(t)
                        }(function () {
                            e._keys.slice().forEach(function (t) {
                                return e.delete(t)
                            })
                        })
                    })
                }, e.prototype.replace = function (e) {
                    var t = this;
                    return Te(function () {
                        var n = function (e) {
                            return nt(e) ? Object.keys(e) : Array.isArray(e) ? e.map(function (e) {
                                return s(e, 1)[0]
                            }) : at(e) || Ce(e) ? st(e.keys()) : qe("Cannot get keys from '" + e + "'")
                        }(e);
                        t._keys.filter(function (e) {
                            return -1 === n.indexOf(e)
                        }).forEach(function (e) {
                            return t.delete(e)
                        }), t.merge(e)
                    }), this
                }, Object.defineProperty(e.prototype, "size", {
                    get: function () {
                        return this._keys.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.toPOJO = function () {
                    var e = this,
                        t = {};
                    return this._keys.forEach(function (n) {
                        return t["" + n] = e.get(n)
                    }), t
                }, e.prototype.toJS = function () {
                    var e = this,
                        t = new Map;
                    return this._keys.forEach(function (n) {
                        return t.set(n, e.get(n))
                    }), t
                }, e.prototype.toJSON = function () {
                    return this.toPOJO()
                }, e.prototype.toString = function () {
                    var e = this;
                    return this.name + "[{ " + this._keys.map(function (t) {
                        return t + ": " + e.get(t)
                    }).join(", ") + " }]"
                }, e.prototype.observe = function (e, t) {
                    return H(this, e)
                }, e.prototype.intercept = function (e) {
                    return I(this, e)
                }, e
            }();
        ke(ze.prototype, function () {
            return this.entries()
        }), it(ze.prototype, "undefined" != typeof Symbol ? Symbol.toStringTag : "@@toStringTag", "Map");
        var Ae, Ne, Ce = ot("ObservableMap", ze);

        function Ee(e, t) {
            if ("object" == typeof e && null !== e) {
                if (Ke(e)) return void 0 !== t && qe(!1), e.$mobx.atom;
                if (Ce(e)) {
                    var n = e;
                    return void 0 === t ? Ee(n._keys) : ((r = n._data.get(t) || n._hasMap.get(t)) || qe(!1), r)
                }
                var r;
                if (p(e), t && !e.$mobx && e[t], te(e)) return t ? ((r = e.$mobx.values[t]) || qe(!1), r) : qe(!1);
                if (Ne(e) || M(e) || It(e)) return e
            } else if ("function" == typeof e && It(e.$mobx)) return e.$mobx;
            return qe(!1)
        }

        function De(e, t) {
            return e || qe("Expecting some object"), void 0 !== t ? De(Ee(e, t)) : Ne(e) || M(e) || It(e) ? e : Ce(e) ? e : (p(e), e.$mobx ? e.$mobx : void qe(!1))
        }

        function Pe(e, t) {
            return (void 0 !== t ? Ee(e, t) : te(e) || Ce(e) ? De(e) : Ee(e)).name
        }
        var Le = function () {
                var e = !1,
                    t = {};
                return Object.defineProperty(t, "0", {
                    set: function () {
                        e = !0
                    }
                }), Object.create(t)[0] = 1, !1 === e
            }(),
            Re = 0,
            Me = function () {
                return function () {}
            }();
        ! function (e, t) {
            void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : void 0 !== e.prototype.__proto__ ? e.prototype.__proto__ = t : e.prototype = t
        }(Me, Array.prototype), Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (e) {
            Object.defineProperty(Me.prototype, e, {
                configurable: !0,
                writable: !0,
                value: Array.prototype[e]
            })
        });
        var Ve = function () {
                function e(e, t, n, r) {
                    this.array = n, this.owned = r, this.values = [], this.lastKnownLength = 0, this.atom = new Ae(e || "ObservableArray@" + Fe()), this.enhancer = function (n, r) {
                        return t(n, r, e + "[..]")
                    }
                }
                return e.prototype.dehanceValue = function (e) {
                    return void 0 !== this.dehancer ? this.dehancer(e) : e
                }, e.prototype.dehanceValues = function (e) {
                    return void 0 !== this.dehancer && this.values.length > 0 ? e.map(this.dehancer) : e
                }, e.prototype.intercept = function (e) {
                    return I(this, e)
                }, e.prototype.observe = function (e, t) {
                    return void 0 === t && (t = !1), t && e({
                        object: this.array,
                        type: "splice",
                        index: 0,
                        added: this.values.slice(),
                        addedCount: this.values.length,
                        removed: [],
                        removedCount: 0
                    }), H(this, e)
                }, e.prototype.getArrayLength = function () {
                    return this.atom.reportObserved(), this.values.length
                }, e.prototype.setArrayLength = function (e) {
                    if ("number" != typeof e || e < 0) throw new Error("[mobx.array] Out of range: " + e);
                    var t = this.values.length;
                    if (e !== t)
                        if (e > t) {
                            for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
                            this.spliceWithArray(t, 0, n)
                        } else this.spliceWithArray(e, t - e)
                }, e.prototype.updateArrayLength = function (e, t) {
                    if (e !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                    this.lastKnownLength += t, t > 0 && e + t + 1 > Re && $e(e + t + 1)
                }, e.prototype.spliceWithArray = function (e, t, n) {
                    var r = this;
                    jt(this.atom);
                    var i = this.values.length;
                    if (void 0 === e ? e = 0 : e > i ? e = i : e < 0 && (e = Math.max(0, i + e)), t = 1 === arguments.length ? i - e : void 0 === t || null === t ? 0 : Math.max(0, Math.min(t, i - e)), void 0 === n && (n = Xe), V(this)) {
                        var o = B(this, {
                            object: this.array,
                            type: "splice",
                            index: e,
                            removedCount: t,
                            added: n
                        });
                        if (!o) return Xe;
                        t = o.removedCount, n = o.added
                    }
                    var a = (n = 0 === n.length ? n : n.map(function (e) {
                        return r.enhancer(e, void 0)
                    })).length - t;
                    this.updateArrayLength(i, a);
                    var s = this.spliceItemsIntoValues(e, t, n);
                    return 0 === t && 0 === n.length || this.notifyArraySplice(e, n, s), this.dehanceValues(s)
                }, e.prototype.spliceItemsIntoValues = function (e, t, n) {
                    if (n.length < 1e4) return (r = this.values).splice.apply(r, l([e, t], n));
                    var r, i = this.values.slice(e, e + t);
                    return this.values = this.values.slice(0, e).concat(n, this.values.slice(e + t)), i
                }, e.prototype.notifyArrayChildUpdate = function (e, t, n) {
                    var r = !this.owned && d(),
                        i = U(this),
                        o = i || r ? {
                            object: this.array,
                            type: "update",
                            index: e,
                            newValue: t,
                            oldValue: n
                        } : null;
                    r && v(a({}, o, {
                        name: this.atom.name
                    })), this.atom.reportChanged(), i && $(this, o), r && y()
                }, e.prototype.notifyArraySplice = function (e, t, n) {
                    var r = !this.owned && d(),
                        i = U(this),
                        o = i || r ? {
                            object: this.array,
                            type: "splice",
                            index: e,
                            removed: n,
                            added: t,
                            removedCount: n.length,
                            addedCount: t.length
                        } : null;
                    r && v(a({}, o, {
                        name: this.atom.name
                    })), this.atom.reportChanged(), i && $(this, o), r && y()
                }, e
            }(),
            Ie = function (e) {
                function t(t, n, r, i) {
                    void 0 === r && (r = "ObservableArray@" + Fe()), void 0 === i && (i = !1);
                    var o = e.call(this) || this,
                        a = new Ve(r, n, o, i);
                    if (it(o, "$mobx", a), t && t.length) {
                        var s = w(!0);
                        o.spliceWithArray(0, 0, t), _(s)
                    }
                    return Le && Object.defineProperty(a.array, "0", Be), o
                }
                return o(t, e), t.prototype.intercept = function (e) {
                    return this.$mobx.intercept(e)
                }, t.prototype.observe = function (e, t) {
                    return void 0 === t && (t = !1), this.$mobx.observe(e, t)
                }, t.prototype.clear = function () {
                    return this.splice(0)
                }, t.prototype.concat = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), e.map(function (e) {
                        return Ke(e) ? e.peek() : e
                    }))
                }, t.prototype.replace = function (e) {
                    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, e)
                }, t.prototype.toJS = function () {
                    return this.slice()
                }, t.prototype.toJSON = function () {
                    return this.toJS()
                }, t.prototype.peek = function () {
                    return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values)
                }, t.prototype.find = function (e, t, n) {
                    void 0 === n && (n = 0), 3 === arguments.length && Qe("The array.find fromIndex argument to find will not be supported anymore in the next major");
                    var r = this.findIndex.apply(this, arguments);
                    return -1 === r ? void 0 : this.get(r)
                }, t.prototype.findIndex = function (e, t, n) {
                    void 0 === n && (n = 0), 3 === arguments.length && Qe("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
                    for (var r = this.peek(), i = r.length, o = n; o < i; o++)
                        if (e.call(t, r[o], o, this)) return o;
                    return -1
                }, t.prototype.splice = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    switch (arguments.length) {
                        case 0:
                            return [];
                        case 1:
                            return this.$mobx.spliceWithArray(e);
                        case 2:
                            return this.$mobx.spliceWithArray(e, t)
                    }
                    return this.$mobx.spliceWithArray(e, t, n)
                }, t.prototype.spliceWithArray = function (e, t, n) {
                    return this.$mobx.spliceWithArray(e, t, n)
                }, t.prototype.push = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.$mobx;
                    return n.spliceWithArray(n.values.length, 0, e), n.values.length
                }, t.prototype.pop = function () {
                    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
                }, t.prototype.shift = function () {
                    return this.splice(0, 1)[0]
                }, t.prototype.unshift = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.$mobx;
                    return n.spliceWithArray(0, 0, e), n.values.length
                }, t.prototype.reverse = function () {
                    var e = this.slice();
                    return e.reverse.apply(e, arguments)
                }, t.prototype.sort = function (e) {
                    var t = this.slice();
                    return t.sort.apply(t, arguments)
                }, t.prototype.remove = function (e) {
                    var t = this.$mobx.dehanceValues(this.$mobx.values).indexOf(e);
                    return t > -1 && (this.splice(t, 1), !0)
                }, t.prototype.move = function (e, t) {
                    function n(e) {
                        if (e < 0) throw new Error("[mobx.array] Index out of bounds: " + e + " is negative");
                        var t = this.$mobx.values.length;
                        if (e >= t) throw new Error("[mobx.array] Index out of bounds: " + e + " is not smaller than " + t)
                    }
                    if (Qe("observableArray.move is deprecated, use .slice() & .replace() instead"), n.call(this, e), n.call(this, t), e !== t) {
                        var r, i = this.$mobx.values;
                        r = e < t ? l(i.slice(0, e), i.slice(e + 1, t + 1), [i[e]], i.slice(t + 1)) : l(i.slice(0, t), [i[e]], i.slice(t, e), i.slice(e + 1)), this.replace(r)
                    }
                }, t.prototype.get = function (e) {
                    var t = this.$mobx;
                    if (t) {
                        if (e < t.values.length) return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
                        console.warn("[mobx.array] Attempt to read an array index (" + e + ") that is out of bounds (" + t.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                    }
                }, t.prototype.set = function (e, t) {
                    var n = this.$mobx,
                        r = n.values;
                    if (e < r.length) {
                        jt(n.atom);
                        var i = r[e];
                        if (V(n)) {
                            var o = B(n, {
                                type: "update",
                                object: this,
                                index: e,
                                newValue: t
                            });
                            if (!o) return;
                            t = o.newValue
                        }(t = n.enhancer(t, i)) !== i && (r[e] = t, n.notifyArrayChildUpdate(e, t, i))
                    } else {
                        if (e !== r.length) throw new Error("[mobx.array] Index out of bounds, " + e + " is larger than " + r.length);
                        n.spliceWithArray(e, 0, [t])
                    }
                }, t
            }(Me);
        ke(Ie.prototype, function () {
                this.$mobx.atom.reportObserved();
                var e = this,
                    t = 0;
                return Oe({
                    next: function () {
                        return t < e.length ? {
                            value: e[t++],
                            done: !1
                        } : {
                            done: !0,
                            value: void 0
                        }
                    }
                })
            }), Object.defineProperty(Ie.prototype, "length", {
                enumerable: !1,
                configurable: !0,
                get: function () {
                    return this.$mobx.getArrayLength()
                },
                set: function (e) {
                    this.$mobx.setArrayLength(e)
                }
            }), "undefined" != typeof Symbol && Symbol.toStringTag && rt(Ie.prototype, "undefined" != typeof Symbol ? Symbol.toStringTag : "@@toStringTag", "Array"), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (e) {
                var t = Array.prototype[e];
                Ze("function" == typeof t, "Base function not defined on Array prototype: '" + e + "'"), rt(Ie.prototype, e, function () {
                    return t.apply(this.peek(), arguments)
                })
            }),
            function (e, t) {
                for (var n = 0; n < t.length; n++) rt(e, t[n], e[t[n]])
            }(Ie.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
        var Be = Ue(0);

        function Ue(e) {
            return {
                enumerable: !1,
                configurable: !1,
                get: function () {
                    return this.get(e)
                },
                set: function (t) {
                    this.set(e, t)
                }
            }
        }

        function He(e) {
            Object.defineProperty(Ie.prototype, "" + e, Ue(e))
        }

        function $e(e) {
            for (var t = Re; t < e; t++) He(t);
            Re = e
        }
        $e(1e3);
        var We = ot("ObservableArrayAdministration", Ve);

        function Ke(e) {
            return tt(e) && We(e.$mobx)
        }
        var Ge = "An invariant failed, however the error is obfuscated because this is an production build.",
            Xe = [];
        Object.freeze(Xe);
        var Ye = {};

        function Je() {
            return "undefined" != typeof window ? window : r
        }

        function Fe() {
            return ++vt.mobxGuid
        }

        function qe(e) {
            throw Ze(!1, e), "X"
        }

        function Ze(e, t) {
            if (!e) throw new Error("[mobx] " + (t || Ge))
        }
        Object.freeze(Ye);

        function Qe(e, t) {
            return !1
        }

        function et(e) {
            var t = !1;
            return function () {
                if (!t) return t = !0, e.apply(this, arguments)
            }
        }

        function tt(e) {
            return null !== e && "object" == typeof e
        }

        function nt(e) {
            if (null === e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function rt(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: n
            })
        }

        function it(e, t, n) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: n
            })
        }

        function ot(e, t) {
            var n = "isMobX" + e;
            return t.prototype[n] = !0,
                function (e) {
                    return tt(e) && !0 === e[n]
                }
        }

        function at(e) {
            return void 0 !== Je().Map && e instanceof Je().Map
        }

        function st(e) {
            for (var t = [];;) {
                var n = e.next();
                if (n.done) break;
                t.push(n.value)
            }
            return t
        }

        function lt() {
            return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
        }

        function ct(e) {
            return null === e ? null : "object" == typeof e ? "" + e : e
        }
        var ut, pt, ht = function () {
                return function () {
                    this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.enforceActions = !1, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.disableErrorBoundaries = !1
                }
            }(),
            dt = !0,
            ft = !1,
            vt = function () {
                var e = Je();
                return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (dt = !1), e.__mobxGlobals && e.__mobxGlobals.version !== (new ht).version && (dt = !1), dt ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = new ht) : (setTimeout(function () {
                    ft || qe("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`")
                }, 1), new ht)
            }();

        function mt(e) {
            var t = {
                name: e.name
            };
            return e.observing && e.observing.length > 0 && (t.dependencies = function (e) {
                var t = [];
                return e.forEach(function (e) {
                    -1 === t.indexOf(e) && t.push(e)
                }), t
            }(e.observing).map(mt)), t
        }

        function yt(e, t) {
            var n = e.observers.length;
            n && (e.observersIndexes[t.__mapid] = n), e.observers[n] = t, e.lowestObserverState > t.dependenciesState && (e.lowestObserverState = t.dependenciesState)
        }

        function gt(e, t) {
            if (1 === e.observers.length) e.observers.length = 0, bt(e);
            else {
                var n = e.observers,
                    r = e.observersIndexes,
                    i = n.pop();
                if (i !== t) {
                    var o = r[t.__mapid] || 0;
                    o ? r[i.__mapid] = o : delete r[i.__mapid], n[o] = i
                }
                delete r[t.__mapid]
            }
        }

        function bt(e) {
            !1 === e.isPendingUnobservation && (e.isPendingUnobservation = !0, vt.pendingUnobservations.push(e))
        }

        function wt() {
            vt.inBatch++
        }

        function _t() {
            if (0 == --vt.inBatch) {
                Mt();
                for (var e = vt.pendingUnobservations, t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.isPendingUnobservation = !1, 0 === n.observers.length && (n.isBeingObserved && (n.isBeingObserved = !1, n.onBecomeUnobserved()), n instanceof R && n.suspend())
                }
                vt.pendingUnobservations = []
            }
        }

        function xt(e) {
            var t = vt.trackingDerivation;
            return null !== t ? (t.runId !== e.lastAccessedBy && (e.lastAccessedBy = t.runId, t.newObserving[t.unboundDepsCount++] = e, e.isBeingObserved || (e.isBeingObserved = !0, e.onBecomeObserved())), !0) : (0 === e.observers.length && vt.inBatch > 0 && bt(e), !1)
        }

        function kt(e, t) {
            if (console.log("[mobx.trace] '" + e.name + "' is invalidated due to a change in: '" + t.name + "'"), e.isTracing === pt.BREAK) {
                var n = [];
                ! function e(t, n, r) {
                    if (n.length >= 1e3) return void n.push("(and many more)");
                    n.push("" + new Array(r).join("\t") + t.name);
                    t.dependencies && t.dependencies.forEach(function (t) {
                        return e(t, n, r + 1)
                    })
                }(function (e, t) {
                    return mt(Ee(e, t))
                }(e), n, 1), new Function("debugger;\n/*\nTracing '" + e.name + "'\n\nYou are entering this break point because derivation '" + e.name + "' is being traced and '" + t.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (e instanceof R ? e.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + n.join("\n") + "\n*/\n    ")()
            }
        }! function (e) {
            e[e.NOT_TRACKING = -1] = "NOT_TRACKING", e[e.UP_TO_DATE = 0] = "UP_TO_DATE", e[e.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", e[e.STALE = 2] = "STALE"
        }(ut || (ut = {})),
        function (e) {
            e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK"
        }(pt || (pt = {}));
        var Ot = function () {
            return function (e) {
                this.cause = e
            }
        }();

        function St(e) {
            return e instanceof Ot
        }

        function Tt(e) {
            switch (e.dependenciesState) {
                case ut.UP_TO_DATE:
                    return !1;
                case ut.NOT_TRACKING:
                case ut.STALE:
                    return !0;
                case ut.POSSIBLY_STALE:
                    for (var t = Nt(), n = e.observing, r = n.length, i = 0; i < r; i++) {
                        var o = n[i];
                        if (M(o)) {
                            if (vt.disableErrorBoundaries) o.get();
                            else try {
                                o.get()
                            } catch (e) {
                                return Ct(t), !0
                            }
                            if (e.dependenciesState === ut.STALE) return Ct(t), !0
                        }
                    }
                    return Et(e), Ct(t), !1
            }
        }

        function jt(e) {
            var t = e.observers.length > 0;
            vt.computationDepth > 0 && t && qe(!1), vt.allowStateChanges || !t && "strict" !== vt.enforceActions || qe(!1)
        }

        function zt(e, t, n) {
            Et(e), e.newObserving = new Array(e.observing.length + 100), e.unboundDepsCount = 0, e.runId = ++vt.runId;
            var r, i = vt.trackingDerivation;
            if (vt.trackingDerivation = e, !0 === vt.disableErrorBoundaries) r = t.call(n);
            else try {
                r = t.call(n)
            } catch (e) {
                r = new Ot(e)
            }
            return vt.trackingDerivation = i,
                function (e) {
                    for (var t = e.observing, n = e.observing = e.newObserving, r = ut.UP_TO_DATE, i = 0, o = e.unboundDepsCount, a = 0; a < o; a++) {
                        var s = n[a];
                        0 === s.diffValue && (s.diffValue = 1, i !== a && (n[i] = s), i++), s.dependenciesState > r && (r = s.dependenciesState)
                    }
                    n.length = i, e.newObserving = null, o = t.length;
                    for (; o--;) {
                        var s = t[o];
                        0 === s.diffValue && gt(s, e), s.diffValue = 0
                    }
                    for (; i--;) {
                        var s = n[i];
                        1 === s.diffValue && (s.diffValue = 0, yt(s, e))
                    }
                    r !== ut.UP_TO_DATE && (e.dependenciesState = r, e.onBecomeStale())
                }(e), r
        }

        function At(e) {
            var t = e.observing;
            e.observing = [];
            for (var n = t.length; n--;) gt(t[n], e);
            e.dependenciesState = ut.NOT_TRACKING
        }

        function Nt() {
            var e = vt.trackingDerivation;
            return vt.trackingDerivation = null, e
        }

        function Ct(e) {
            vt.trackingDerivation = e
        }

        function Et(e) {
            if (e.dependenciesState !== ut.UP_TO_DATE) {
                e.dependenciesState = ut.UP_TO_DATE;
                for (var t = e.observing, n = t.length; n--;) t[n].lowestObserverState = ut.UP_TO_DATE
            }
        }

        function Dt() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = !1;
            "boolean" == typeof e[e.length - 1] && (n = e.pop());
            var r = function (e) {
                switch (e.length) {
                    case 0:
                        return vt.trackingDerivation;
                    case 1:
                        return Ee(e[0]);
                    case 2:
                        return Ee(e[0], e[1])
                }
            }(e);
            if (!r) return qe(!1);
            r.isTracing === pt.NONE && console.log("[mobx.trace] '" + r.name + "' tracing enabled"), r.isTracing = n ? pt.BREAK : pt.LOG
        }
        var Pt = function () {
            function e(e, t, n) {
                void 0 === e && (e = "Reaction@" + Fe()), this.name = e, this.onInvalidate = t, this.errorHandler = n, this.observing = [], this.newObserving = [], this.dependenciesState = ut.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + Fe(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = pt.NONE
            }
            return e.prototype.onBecomeStale = function () {
                this.schedule()
            }, e.prototype.schedule = function () {
                this._isScheduled || (this._isScheduled = !0, vt.pendingReactions.push(this), Mt())
            }, e.prototype.isScheduled = function () {
                return this._isScheduled
            }, e.prototype.runReaction = function () {
                if (!this.isDisposed) {
                    if (wt(), this._isScheduled = !1, Tt(this)) {
                        this._isTrackPending = !0;
                        try {
                            this.onInvalidate(), this._isTrackPending && d() && f({
                                name: this.name,
                                type: "scheduled-reaction"
                            })
                        } catch (e) {
                            this.reportExceptionInDerivation(e)
                        }
                    }
                    _t()
                }
            }, e.prototype.track = function (e) {
                wt();
                var t, n = d();
                n && (t = Date.now(), v({
                    name: this.name,
                    type: "reaction"
                })), this._isRunning = !0;
                var r = zt(this, e, void 0);
                this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && At(this), St(r) && this.reportExceptionInDerivation(r.cause), n && y({
                    time: Date.now() - t
                }), _t()
            }, e.prototype.reportExceptionInDerivation = function (e) {
                var t = this;
                if (this.errorHandler) this.errorHandler(e, this);
                else {
                    if (vt.disableErrorBoundaries) throw e;
                    var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
                    console.error(n, e), d() && f({
                        type: "error",
                        name: this.name,
                        message: n,
                        error: "" + e
                    }), vt.globalReactionErrorHandlers.forEach(function (n) {
                        return n(e, t)
                    })
                }
            }, e.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, this._isRunning || (wt(), At(this), _t()))
            }, e.prototype.getDisposer = function () {
                var e = this.dispose.bind(this);
                return e.$mobx = this, e
            }, e.prototype.toString = function () {
                return "Reaction[" + this.name + "]"
            }, e.prototype.trace = function (e) {
                void 0 === e && (e = !1), Dt(this, e)
            }, e
        }();
        var Lt = 100,
            Rt = function (e) {
                return e()
            };

        function Mt() {
            vt.inBatch > 0 || vt.isRunningReactions || Rt(Vt)
        }

        function Vt() {
            vt.isRunningReactions = !0;
            for (var e = vt.pendingReactions, t = 0; e.length > 0;) {
                ++t === Lt && (console.error("Reaction doesn't converge to a stable state after " + Lt + " iterations. Probably there is a cycle in the reactive function: " + e[0]), e.splice(0));
                for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction()
            }
            vt.isRunningReactions = !1
        }
        var It = ot("Reaction", Pt);

        function Bt(e) {
            var t = Rt;
            Rt = function (n) {
                return e(function () {
                    return t(n)
                })
            }
        }

        function Ut(e) {
            return te(e) ? e.$mobx.getKeys() : Ce(e) ? e._keys.slice() : Ke(e) ? e.map(function (e, t) {
                return t
            }) : qe(!1)
        }

        function Ht(e) {
            var t = e.enforceActions,
                n = e.computedRequiresReaction,
                r = e.disableErrorBoundaries,
                i = e.arrayBuffer,
                o = e.reactionScheduler;
            if (void 0 !== t) {
                var a = void 0;
                switch (t) {
                    case !0:
                    case "observed":
                        a = !0;
                        break;
                    case !1:
                    case "never":
                        a = !1;
                        break;
                    case "strict":
                    case "always":
                        a = "strict";
                        break;
                    default:
                        fail("Invalid value for 'enforceActions': '" + t + "', expected 'never', 'always' or 'observed'")
                }
                vt.enforceActions = a, vt.allowStateChanges = !0 !== a && "strict" !== a
            }
            void 0 !== n && (vt.computedRequiresReaction = !!n), !0 === e.isolateGlobalState && ((vt.pendingReactions.length || vt.inBatch || vt.isRunningReactions) && qe("isolateGlobalState should be called before MobX is running any reactions"), ft = !0, dt && (0 == --Je().__mobxInstanceCount && (Je().__mobxGlobals = void 0), vt = new ht)), void 0 !== r && (!0 === r && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on."), vt.disableErrorBoundaries = !!r), "number" == typeof i && $e(i), o && Bt(o)
        }
        var $t = {
            detectCycles: !0,
            exportMapsAsObjects: !0
        };

        function Wt(e, t, n, r) {
            return r.detectCycles && e.set(t, n), n
        }

        function Kt(e, t) {
            return ie(e) ? ("boolean" == typeof t && (t = {
                detectCycles: t
            }), t || (t = $t), !0 === t.detectCycles && (n = new Map), function e(t, n, r) {
                if (!ie(t)) return t;
                if (!0 === n.detectCycles && null !== t && "object" == typeof t && r.has(t)) return r.get(t);
                if (Ke(t)) {
                    var i = Wt(r, t, [], n),
                        o = t.map(function (t) {
                            return e(t, n, r)
                        });
                    i.length = o.length;
                    for (var a = 0, s = o.length; a < s; a++) i[a] = o[a];
                    return i
                }
                if (te(t)) {
                    for (var l in i = Wt(r, t, {}, n), Ut(t), t) i[l] = e(t[l], n, r);
                    return i
                }
                if (Ce(t)) {
                    if (!1 === n.exportMapsAsObjects) {
                        var c = Wt(r, t, new Map, n);
                        return t.forEach(function (t, i) {
                            c.set(i, e(t, n, r))
                        }), c
                    }
                    var u = Wt(r, t, {}, n);
                    return t.forEach(function (t, i) {
                        u[i] = e(t, n, r)
                    }), u
                }
                return G(t) ? e(t.get(), n, r) : t
            }(e, t, n)) : e;
            var n
        }
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
                return vt.spyListeners.push(e), et(function () {
                    vt.spyListeners = vt.spyListeners.filter(function (t) {
                        return t !== e
                    })
                })
            },
            extras: {
                getDebugName: Pe
            }
        })
    }).call(this, n(3), n(4))
}, function (e, t, n) {
    ! function () {
        "use strict";

        function t(e) {
            var t = window,
                n = document;
            if (e = e || {}, !("scrollBehavior" in n.documentElement.style && !0 !== e.force)) {
                var r, i = t.HTMLElement || t.Element,
                    o = ~~e.duration || 468,
                    a = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy,
                        elementScroll: i.prototype.scroll || u,
                        scrollIntoView: i.prototype.scrollIntoView
                    },
                    s = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                    l = function (e) {
                        return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e)
                    }(t.navigator.userAgent) ? 1 : 0,
                    c = !1;
                t.scroll = t.scrollTo = function () {
                    void 0 !== arguments[0] && (!0 !== p(arguments[0]) ? g.call(t, n.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : a.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                }, t.scrollBy = function () {
                    void 0 !== arguments[0] && (p(arguments[0]) ? a.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : g.call(t, n.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                }, i.prototype.scroll = i.prototype.scrollTo = function () {
                    if (void 0 !== arguments[0])
                        if (!0 !== p(arguments[0])) {
                            var e = arguments[0].left,
                                t = arguments[0].top;
                            g.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                        } else {
                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                            a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                        }
                }, i.prototype.scrollBy = function () {
                    void 0 !== arguments[0] && (!0 !== p(arguments[0]) ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior
                    }) : a.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                }, i.prototype.scrollIntoView = function () {
                    if (!0 !== p(arguments[0])) {
                        var e, r, i, o, s, l, c = function (e) {
                                var t;
                                do {
                                    t = (e = e.parentNode) === n.body
                                } while (!1 === t && !1 === f(e));
                                return t = null, e
                            }(this),
                            u = c.getBoundingClientRect(),
                            h = this.getBoundingClientRect(),
                            d = arguments[0].inline || "nearest",
                            v = arguments[0].block || "start";
                        switch (d) {
                            case "start":
                                e = h.left - u.left, s = u.left, i = h.left;
                                break;
                            case "center":
                                e = h.left - u.left + h.width / 2 - u.width / 2, s = (u.left + u.right - t.innerWidth) / 2, i = (h.left + h.right - t.innerWidth) / 2;
                                break;
                            case "end":
                                e = h.right - u.right, s = u.right - t.innerWidth, i = h.right - t.innerWidth;
                                break;
                            case "nearest":
                                e = 0, s = 0, i = 0
                        }
                        switch (v) {
                            case "start":
                                r = h.top - u.top, l = u.top, o = h.top;
                                break;
                            case "center":
                                r = h.top - u.top + h.height / 2 - u.height / 2, l = (u.top + u.bottom - t.innerHeight) / 2, o = (h.top + h.bottom - t.innerHeight) / 2;
                                break;
                            case "end":
                                r = h.bottom - u.bottom, l = u.bottom - t.innerHeight, o = h.bottom - t.innerHeight;
                                break;
                            case "nearest":
                                r = 0, l = 0, o = 0
                        }
                        c !== n.body ? (g.call(this, c, c.scrollLeft + e, c.scrollTop + r), "fixed" !== t.getComputedStyle(c).position && t.scrollBy({
                            left: s,
                            top: l,
                            behavior: "smooth"
                        })) : t.scrollBy({
                            left: i,
                            top: o,
                            behavior: "smooth"
                        })
                    } else a.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                }
            }

            function u(e, t) {
                this.scrollLeft = e, this.scrollTop = t
            }

            function p(e) {
                if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                if ("object" == typeof e && "smooth" === e.behavior) return !1;
                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
            }

            function h(e, t) {
                return "Y" === t ? e.clientHeight + l < e.scrollHeight : "X" === t ? e.clientWidth + l < e.scrollWidth : void 0
            }

            function d(e, n) {
                var r = t.getComputedStyle(e, null)["overflow" + n];
                return "auto" === r || "scroll" === r
            }

            function f(e) {
                var t = h(e, "Y") && d(e, "Y"),
                    n = h(e, "X") && d(e, "X");
                return t || n
            }

            function v(e) {
                if (!c) {
                    var n, r, i, a = (s() - e.startTime) / o;
                    n = function (e) {
                        return .5 * (1 - Math.cos(Math.PI * e))
                    }(a = a > 1 ? 1 : a), r = e.startX + (e.x - e.startX) * n, i = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, r, i), r === e.x && i === e.y || t.requestAnimationFrame(v.bind(t, e))
                }
            }

            function m() {
                c = !0, clearTimeout(r), r = setTimeout(y, o)
            }

            function y() {
                c = !1, t.removeEventListener("wheel", m), t.removeEventListener("touchmove", m)
            }

            function g(e, r, i) {
                var o, l, c, p, h = s();
                e === n.body ? (o = t, l = t.scrollX || t.pageXOffset, c = t.scrollY || t.pageYOffset, p = a.scroll) : (o = e, l = e.scrollLeft, c = e.scrollTop, p = u), t.addEventListener("wheel", m, {
                    passive: !0,
                    once: !0
                }), t.addEventListener("touchmove", m, {
                    passive: !0,
                    once: !0
                }), v({
                    scrollable: o,
                    method: p,
                    startTime: h,
                    startX: l,
                    startY: c,
                    x: r,
                    y: i
                })
            }
        }
        e.exports = {
            polyfill: t,
            seamless: t,
            default: t
        }
    }()
}, function (e, t, n) {
    n(8), n(9), e.exports = n(11)
}, function (e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var l, c = [],
        u = !1,
        p = -1;

    function h() {
        u && l && (u = !1, l.length ? c = l.concat(c) : p = -1, c.length && d())
    }

    function d() {
        if (!u) {
            var e = s(h);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++p < t;) l && l[p].run();
                p = -1, t = c.length
            }
            l = null, u = !1,
                function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new f(e, t)), 1 !== c.length || u || s(d)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r = {
        "./en-US.json": 6,
        "./vi-VN.json": 7
    };

    function i(e) {
        var t = o(e);
        return n(t)
    }

    function o(e) {
        var t = r[e];
        if (!(t + 1)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }
        return t
    }
    i.keys = function () {
        return Object.keys(r)
    }, i.resolve = o, e.exports = i, i.id = 5
}, function (e) {
    e.exports = {
        "language-name": "English",
        app: {
            name: "DELNEGEND",
            fullname: "DELNEGEND",
            edit: "Edit",
            synchronize: "Synchronize",
            preferences: "Preferences",
            "editor-tip": "Click here to edit lyric lines",
            "synchronizer-tip": "Click here to synchronize lyric",
            "preferences-tip": "language and other preferences"
        },
        lrc: {
            album: "Album",
            title: "Title",
            artist: "Artist",
            "load-audio": "Load Audio",
            "load-text": "Load Text",
            "select-all": "Select All & Copy"
        },
        preferences: {
            language: "Language",
            version: "App name",
            "build-time": "Version",
            "build-revision": "Release",
            "github-repo": "Homepage",
            help: "How to use",
            "time-tag-decimals": "Decimals of Time Tag",
            "trim-line": "Trim Lyric Line",
            "add-space": "Add Space after Time Tag",
            "built-in-audio": "Use Browser Built-in Audio Player",
            "space-button-on-screen": "On-screen Space Key",
            "dark-mode": "Dark Mode",
            "clear-cache": "Clear App Cache"
        }
    }
}, function (e) {
    e.exports = {
        "language-name": "Tiếng Việt",
        app: {
            name: "DELNEGEND",
            fullname: "DELNEGEND",
            edit: "Chỉnh sửa",
            synchronize: "Đồng bộ",
            preferences: "Cấu hình",
            "editor-tip": "Nhấn vào đây để chỉnh sửa lời nhạc",
            "synchronizer-tip": "Nhấn vào đây để đồng bộ với nhạc",
            "preferences-tip": "Ngôn ngữ và tùy chọn khác"
        },
        lrc: {
            album: "Album",
            title: "Tiêu đề",
            artist: "Nghệ sĩ",
            "load-audio": "Chọn file nhạc",
            "load-text": "Chọn file lời",
            "select-all": "Chọn tất cả và sao chép"
        },
        preferences: {
            language: "Ngôn ngữ",
            version: "Tên ứng dụng",
            "build-time": "Phiên bản",
            "build-revision": "Phát hành",
            "github-repo": "Trang chủ",
            help: "Hướng dẫn sử dụng",
            "time-tag-decimals": "Số lượng số thập phân",
            "trim-line": "Cắt dòng lyric",
            "add-space": "Thêm dấu cách sau time tag",
            "built-in-audio": "Sử dụng audio player của trình duyệt",
            "space-button-on-screen": "Hiện nút space trên màn hình",
            "dark-mode": "Dark Mode",
            "clear-cache": "Xóa bộ nhớ đệm"
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = function () {},
        i = {},
        o = [],
        a = [];

    function s(e, t) {
        var n, s, l, c, u = a;
        for (c = arguments.length; c-- > 2;) o.push(arguments[c]);
        for (t && null != t.children && (o.length || o.push(t.children), delete t.children); o.length;)
            if ((s = o.pop()) && void 0 !== s.pop)
                for (c = s.length; c--;) o.push(s[c]);
            else "boolean" == typeof s && (s = null), (l = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (l = !1)), l && n ? u[u.length - 1] += s : u === a ? u = [s] : u.push(s), n = l;
        var p = new r;
        return p.nodeName = e, p.children = u, p.attributes = null == t ? void 0 : t, p.key = null == t ? void 0 : t.key, void 0 !== i.vnode && i.vnode(p), p
    }

    function l(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    var c = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var u = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        p = [];

    function d(e) {
        !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (i.debounceRendering || c)(f)
    }

    function f() {
        var e, t = p;
        for (p = []; e = t.pop();) e._dirty && P(e)
    }

    function v(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && m(e, t.nodeName) : n || e._componentConstructor === t.nodeName
    }

    function m(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function y(e) {
        var t = l({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n)
            for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t
    }

    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function b(e, t, n, r, i) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) n && n(null), r && r(e);
        else if ("class" !== t || i)
            if ("style" === t) {
                if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                    if ("string" != typeof n)
                        for (var o in n) o in r || (e.style[o] = "");
                    for (var o in r) e.style[o] = "number" == typeof r[o] && !1 === u.test(o) ? r[o] + "px" : r[o]
                }
            } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, w, a) : e.removeEventListener(t, w, a), (e._listeners || (e._listeners = {}))[t] = r
        } else if ("list" !== t && "type" !== t && !i && t in e) {
            try {
                e[t] = null == r ? "" : r
            } catch (e) {}
            null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t)
        } else {
            var s = i && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
        } else e.className = r || ""
    }

    function w(e) {
        return this._listeners[e.type](i.event && i.event(e) || e)
    }
    var _ = [],
        x = 0,
        k = !1,
        O = !1;

    function S() {
        for (var e; e = _.pop();) i.afterMount && i.afterMount(e), e.componentDidMount && e.componentDidMount()
    }

    function T(e, t, n, r, i, o) {
        x++ || (k = null != i && void 0 !== i.ownerSVGElement, O = null != e && !("__preactattr_" in e));
        var a = j(e, t, n, r, o);
        return i && a.parentNode !== i && i.appendChild(a), --x || (O = !1, o || S()), a
    }

    function j(e, t, n, r, i) {
        var o = e,
            a = k;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || i) ? e.nodeValue != t && (e.nodeValue = t) : (o = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(o, e), z(e, !0))), o.__preactattr_ = !0, o;
        var s = t.nodeName;
        if ("function" == typeof s) return function (e, t, n, r) {
            var i = e && e._component,
                o = i,
                a = e,
                s = i && e._componentConstructor === t.nodeName,
                l = s,
                c = y(t);
            for (; i && !l && (i = i._parentComponent);) l = i.constructor === t.nodeName;
            i && l && (!r || i._component) ? (D(i, c, 3, n, r), e = i.base) : (o && !s && (L(o), e = a = null), i = C(t.nodeName, c, n), e && !i.nextBase && (i.nextBase = e, a = null), D(i, c, 1, n, r), e = i.base, a && e !== a && (a._component = null, z(a, !1)));
            return e
        }(e, t, n, r);
        if (k = "svg" === s || "foreignObject" !== s && k, s = String(s), (!e || !m(e, s)) && (o = function (e, t) {
                var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
                return n.normalizedNodeName = e, n
            }(s, k), e)) {
            for (; e.firstChild;) o.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(o, e), z(e, !0)
        }
        var l = o.firstChild,
            c = o.__preactattr_,
            u = t.children;
        if (null == c) {
            c = o.__preactattr_ = {};
            for (var p = o.attributes, h = p.length; h--;) c[p[h].name] = p[h].value
        }
        return !O && u && 1 === u.length && "string" == typeof u[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != u[0] && (l.nodeValue = u[0]) : (u && u.length || null != l) && function (e, t, n, r, i) {
                var o, a, s, l, c, u = e.childNodes,
                    p = [],
                    h = {},
                    d = 0,
                    f = 0,
                    m = u.length,
                    y = 0,
                    b = t ? t.length : 0;
                if (0 !== m)
                    for (var w = 0; w < m; w++) {
                        var _ = u[w],
                            x = _.__preactattr_,
                            k = b && x ? _._component ? _._component.__key : x.key : null;
                        null != k ? (d++, h[k] = _) : (x || (void 0 !== _.splitText ? !i || _.nodeValue.trim() : i)) && (p[y++] = _)
                    }
                if (0 !== b)
                    for (var w = 0; w < b; w++) {
                        l = t[w], c = null;
                        var k = l.key;
                        if (null != k) d && void 0 !== h[k] && (c = h[k], h[k] = void 0, d--);
                        else if (f < y)
                            for (o = f; o < y; o++)
                                if (void 0 !== p[o] && v(a = p[o], l, i)) {
                                    c = a, p[o] = void 0, o === y - 1 && y--, o === f && f++;
                                    break
                                } c = j(c, l, n, r), s = u[w], c && c !== e && c !== s && (null == s ? e.appendChild(c) : c === s.nextSibling ? g(s) : e.insertBefore(c, s))
                    }
                if (d)
                    for (var w in h) void 0 !== h[w] && z(h[w], !1);
                for (; f <= y;) void 0 !== (c = p[y--]) && z(c, !1)
            }(o, u, n, r, O || null != c.dangerouslySetInnerHTML),
            function (e, t, n) {
                var r;
                for (r in n) t && null != t[r] || null == n[r] || b(e, r, n[r], n[r] = void 0, k);
                for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || b(e, r, n[r], n[r] = t[r], k)
            }(o, t.attributes, c), k = a, o
    }

    function z(e, t) {
        var n = e._component;
        n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || g(e), A(e))
    }

    function A(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            z(e, !0), e = t
        }
    }
    var N = [];

    function C(e, t, n) {
        var r, i = N.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, n), R.call(r, t, n)) : ((r = new R(t, n)).constructor = e, r.render = E); i--;)
            if (N[i].constructor === e) return r.nextBase = N[i].nextBase, N.splice(i, 1), r;
        return r
    }

    function E(e, t, n) {
        return this.constructor(e, n)
    }

    function D(e, t, n, r, o) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === i.syncComponentUpdates && e.base ? d(e) : P(e, 1, o)), e.__ref && e.__ref(e))
    }

    function P(e, t, n, r) {
        if (!e._disable) {
            var o, a, s, c = e.props,
                u = e.state,
                p = e.context,
                h = e.prevProps || c,
                d = e.prevState || u,
                f = e.prevContext || p,
                v = e.base,
                m = e.nextBase,
                g = v || m,
                b = e._component,
                w = !1,
                k = f;
            if (e.constructor.getDerivedStateFromProps && (u = l(l({}, u), e.constructor.getDerivedStateFromProps(c, u)), e.state = u), v && (e.props = h, e.state = d, e.context = f, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, u, p) ? w = !0 : e.componentWillUpdate && e.componentWillUpdate(c, u, p), e.props = c, e.state = u, e.context = p), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !w) {
                o = e.render(c, u, p), e.getChildContext && (p = l(l({}, p), e.getChildContext())), v && e.getSnapshotBeforeUpdate && (k = e.getSnapshotBeforeUpdate(h, d));
                var O, j, A = o && o.nodeName;
                if ("function" == typeof A) {
                    var N = y(o);
                    (a = b) && a.constructor === A && N.key == a.__key ? D(a, N, 1, p, !1) : (O = a, e._component = a = C(A, N, p), a.nextBase = a.nextBase || m, a._parentComponent = e, D(a, N, 0, p, !1), P(a, 1, n, !0)), j = a.base
                } else s = g, (O = b) && (s = e._component = null), (g || 1 === t) && (s && (s._component = null), j = T(s, o, p, n || !v, g && g.parentNode, !0));
                if (g && j !== g && a !== b) {
                    var E = g.parentNode;
                    E && j !== E && (E.replaceChild(j, g), O || (g._component = null, z(g, !1)))
                }
                if (O && L(O), e.base = j, j && !r) {
                    for (var R = e, M = e; M = M._parentComponent;)(R = M).base = j;
                    j._component = R, j._componentConstructor = R.constructor
                }
            }
            for (!v || n ? _.unshift(e) : w || (e.componentDidUpdate && e.componentDidUpdate(h, d, k), i.afterUpdate && i.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            x || r || S()
        }
    }

    function L(e) {
        i.beforeUnmount && i.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, g(t), N.push(e), A(t)), e.__ref && e.__ref(null)
    }

    function R(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
    }

    function M(e, t, n) {
        return T(n, e, {}, !1, t, !1)
    }
    l(R.prototype, {
        setState: function (e, t) {
            this.prevState || (this.prevState = this.state), this.state = l(l({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), d(this)
        },
        forceUpdate: function (e) {
            e && this._renderCallbacks.push(e), P(this, 2)
        },
        render: function () {}
    });
    var V = n(0),
        I = n(1);
    let B;
    var U, H, $, W, K, G, X, Y, J, F, q, Z, Q, ee, te, ne = B = (e => e.keys().reduce((t, n) => (t[n.slice(2, -5)] = e(n), t), {}))(n(5));

    function re(e, t, n, r) {
        n && Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(r) : void 0
        })
    }

    function ie(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    const oe = new(U = V.b.bound, H = V.b.bound, $ = V.b.bound, W = V.b.bound, K = V.b.bound, G = V.b.bound, X = V.b.bound, J = ie((Y = class e {
        get i18n() {
            return ne[this.lang] || ne["en-US"]
        }
        get fixed_decimal() {
            return Math.pow(10, this.fixed)
        }
        static get storageName() {
            return "lrc-maker-preferences"
        }
        constructor() {
            re(this, "trim", J, this), re(this, "fixed", F, this), re(this, "pretty_tag", q, this), re(this, "built_in_audio", Z, this), re(this, "screen_button", Q, this), re(this, "dark_mode", ee, this), re(this, "lang", te, this);
            try {
                this.lang = (e => e in ne ? e : "en-US")(navigator.language);
                const t = JSON.parse(localStorage.getItem(e.storageName));
                for (let [e, n] of Object.entries(t)) e in this && (this[e] = n)
            } catch (e) {}
        }
        save() {
            try {
                localStorage.setItem(e.storageName, JSON.stringify(Object(V.g)(this, !1)))
            } catch (e) {}
        }
        toggle_trim() {
            !0 === this.trim ? (this.trim = !1, this.pretty_tag = !1) : this.trim = !0, this.save()
        }
        toggle_pretty_tag() {
            !1 === this.pretty_tag ? (this.pretty_tag = !0, this.trim = !0) : this.pretty_tag = !1, this.save()
        }
        toggle_audio_player() {
            this.built_in_audio = !this.built_in_audio, this.save()
        }
        toggle_screen_button() {
            this.screen_button = !this.screen_button, this.save()
        }
        toggle_dark_mode() {
            this.dark_mode = !this.dark_mode, this.save()
        }
        add_fixed() {
            this.fixed < 2 && (this.fixed += 1, this.save())
        }
        minus_fixed() {
            this.fixed > 0 && (this.fixed -= 1, this.save())
        }
        set language(e) {
            this.lang = e, this.save()
        }
        get language() {
            return this.lang
        }
    }).prototype, "trim", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !0
        }
    }), F = ie(Y.prototype, "fixed", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 2
        }
    }), q = ie(Y.prototype, "pretty_tag", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !0
        }
    }), Z = ie(Y.prototype, "built_in_audio", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !1
        }
    }), Q = ie(Y.prototype, "screen_button", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !1
        }
    }), ee = ie(Y.prototype, "dark_mode", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !1
        }
    }), te = ie(Y.prototype, "lang", [V.f], {
        enumerable: !0,
        initializer: function () {
            return "en-US"
        }
    }), ie(Y.prototype, "i18n", [V.d], Object.getOwnPropertyDescriptor(Y.prototype, "i18n"), Y.prototype), ie(Y.prototype, "fixed_decimal", [V.d], Object.getOwnPropertyDescriptor(Y.prototype, "fixed_decimal"), Y.prototype), ie(Y.prototype, "toggle_trim", [U], Object.getOwnPropertyDescriptor(Y.prototype, "toggle_trim"), Y.prototype), ie(Y.prototype, "toggle_pretty_tag", [H], Object.getOwnPropertyDescriptor(Y.prototype, "toggle_pretty_tag"), Y.prototype), ie(Y.prototype, "toggle_audio_player", [$], Object.getOwnPropertyDescriptor(Y.prototype, "toggle_audio_player"), Y.prototype), ie(Y.prototype, "toggle_screen_button", [W], Object.getOwnPropertyDescriptor(Y.prototype, "toggle_screen_button"), Y.prototype), ie(Y.prototype, "toggle_dark_mode", [K], Object.getOwnPropertyDescriptor(Y.prototype, "toggle_dark_mode"), Y.prototype), ie(Y.prototype, "add_fixed", [G], Object.getOwnPropertyDescriptor(Y.prototype, "add_fixed"), Y.prototype), ie(Y.prototype, "minus_fixed", [X], Object.getOwnPropertyDescriptor(Y.prototype, "minus_fixed"), Y.prototype), ie(Y.prototype, "language", [V.d], Object.getOwnPropertyDescriptor(Y.prototype, "language"), Y.prototype), Y);
    var ae, se, le, ce, ue;

    function pe(e, t, n, r) {
        n && Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(r) : void 0
        })
    }

    function he(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    const de = new(ae = V.b.bound, le = he((se = class {
        constructor() {
            pe(this, "audioSrc", le, this), pe(this, "_currentTime", ce, this), pe(this, "lock", ue, this)
        }
        set src(e) {
            "string" == typeof e ? (URL.revokeObjectURL(this.audioSrc), this.audioSrc = e) : setTimeout(Object(V.b)(() => {
                URL.revokeObjectURL(this.audioSrc), this.audioSrc = URL.createObjectURL(e)
            }), 0)
        }
        get src() {
            return this.audioSrc
        }
        get currentTime_fixed() {
            return ~~(this.currentTime * oe.fixed_decimal) / oe.fixed_decimal
        }
        set currentTime(e) {
            this._currentTime = e
        }
        get currentTime() {
            return this._currentTime
        }
        toggle_lock() {
            this.lock = !this.lock
        }
    }).prototype, "audioSrc", [V.f], {
        enumerable: !0,
        initializer: null
    }), ce = he(se.prototype, "_currentTime", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 0
        }
    }), ue = he(se.prototype, "lock", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !1
        }
    }), he(se.prototype, "src", [V.d], Object.getOwnPropertyDescriptor(se.prototype, "src"), se.prototype), he(se.prototype, "currentTime_fixed", [V.d], Object.getOwnPropertyDescriptor(se.prototype, "currentTime_fixed"), se.prototype), he(se.prototype, "currentTime", [V.d], Object.getOwnPropertyDescriptor(se.prototype, "currentTime"), se.prototype), he(se.prototype, "toggle_lock", [ae], Object.getOwnPropertyDescriptor(se.prototype, "toggle_lock"), se.prototype), se);
    var fe, ve;
    let me = (ve = function (e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }((fe = class {
        constructor() {
            ! function (e, t, n, r) {
                n && Object.defineProperty(e, t, {
                    enumerable: n.enumerable,
                    configurable: n.configurable,
                    writable: n.writable,
                    value: n.initializer ? n.initializer.call(r) : void 0
                })
            }(this, "path", ve, this), "undefined" != typeof window && (this.path = location.hash, addEventListener("hashchange", Object(V.b)(() => this.path = location.hash)))
        }
        static get editor() {
            return {
                name: oe.i18n.app.edit,
                path: "#/",
                title: oe.i18n.app["editor-tip"]
            }
        }
        static get synchronizer() {
            return {
                name: oe.i18n.app.synchronize,
                path: "#/synchronizer/",
                title: oe.i18n.app["synchronizer-tip"]
            }
        }
        static get preferences() {
            return {
                name: oe.i18n.app.preferences,
                path: "#/preferences/",
                title: oe.i18n.app["preferences-tip"]
            }
        }
    }).prototype, "path", [V.f], {
        enumerable: !0,
        initializer: function () {
            return ""
        }
    }), fe);
    const ye = new me;
    var ge, be, we, _e, xe, ke;

    function Oe(e, t, n, r) {
        n && Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(r) : void 0
        })
    }

    function Se(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    let Te = (ge = V.b.bound, be = V.b.bound, _e = Se((we = class e {
        get selectedIndex() {
            return this._selectedIndex
        }
        set selectedIndex(e) {
            let t = e;
            (isNaN(t) || t < 0) && (t = 0), t > this.lyric.length - 1 && (t = this.lyric.length - 1), this._selectedIndex = t
        }
        get highlightIndex() {
            const e = de.currentTime,
                t = this.lyric.filter(t => void 0 !== t.time && t.time < e).sort((e, t) => e.time < t.time ? 1 : -1);
            return 0 === t.length ? 0 : t[0].key
        }
        static get storageName() {
            return "lrc-maker-lyric"
        }
        constructor() {
            Oe(this, "info", _e, this), Oe(this, "lyric", xe, this), Oe(this, "_selectedIndex", ke, this), this.save = (() => {
                try {
                    localStorage.setItem(e.storageName, this.value)
                } catch (e) {}
            });
            try {
                this.value = localStorage.getItem(e.storageName)
            } catch (e) {}
        }
        set value(e) {
            this.info.clear(), this.lyric.clear();
            const t = e.split(/\r\n|[\r\n]/),
                n = /\[\s*(\d{1,3}):(\d{1,2}(?:[:.]\d{1,3})?)\s*](.*)/,
                r = /\[\s*(\w{1,6})\s*:(.*)]/;
            for (let e of t) {
                const t = n.exec(e);
                if (null !== t) {
                    let e = t[1],
                        n = t[2],
                        r = t[3];
                    n = n.replace(":", "."), [e, n] = [parseInt(e), parseFloat(n)], oe.trim && (r = r.trim()), this.lyric.push({
                        key: this.lyric.length,
                        time: 60 * e + n,
                        text: r
                    })
                } else {
                    const t = r.exec(e);
                    if (null !== t) this.info.set(t[1], t[2]);
                    else {
                        let t = e;
                        oe.trim && (t = t.trim()), this.lyric.push({
                            key: this.lyric.length,
                            text: t,
                            time: void 0
                        })
                    }
                }
            }
            this.selectedIndex += 0
        }
        info_set(e, t) {
            this.info.set(e, t)
        }
        info_delete(e) {
            this.info.delete(e)
        }
        static timeToTag(e) {
            const t = oe.fixed;
            return `[${(""+~~(e/60)).padStart(2,"0")}:${(e%60).toFixed(t).padStart(t?t+3:2,"0")}]`
        }
        get value() {
            const t = [],
                n = this.info.entries();
            for (let e of n) t.push(`[${e[0]}:${e[1]}]`);
            for (let n of this.lyric) {
                const {
                    time: r,
                    text: i
                } = n, o = oe.pretty_tag ? " " : "";
                void 0 === r || isNaN(r) ? t.push(i) : t.push(e.timeToTag(r, oe) + o + i)
            }
            return t.join("\r\n")
        }
    }).prototype, "info", [V.f], {
        enumerable: !0,
        initializer: function () {
            return new Map
        }
    }), xe = Se(we.prototype, "lyric", [V.f], {
        enumerable: !0,
        initializer: function () {
            return []
        }
    }), ke = Se(we.prototype, "_selectedIndex", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 0
        }
    }), Se(we.prototype, "selectedIndex", [V.d], Object.getOwnPropertyDescriptor(we.prototype, "selectedIndex"), we.prototype), Se(we.prototype, "highlightIndex", [V.d], Object.getOwnPropertyDescriptor(we.prototype, "highlightIndex"), we.prototype), Se(we.prototype, "info_set", [ge], Object.getOwnPropertyDescriptor(we.prototype, "info_set"), we.prototype), Se(we.prototype, "info_delete", [be], Object.getOwnPropertyDescriptor(we.prototype, "info_delete"), we.prototype), Se(we.prototype, "value", [V.d], Object.getOwnPropertyDescriptor(we.prototype, "value"), we.prototype), we);
    const je = new Te;

    function ze(e, t, n) {
        const r = e[t];
        e[t] = function () {
            if (n.apply(this, arguments), r) return r.apply(this, arguments)
        }
    }
    const Ae = Symbol("mobxReaction");

    function Ne(e) {
        const t = e;
        ze(t.prototype, "componentWillMount", function () {
            const e = this.constructor.displayName || this.constructor.name;
            this[Ae] = new V.a(`${e}.render()`, () => this.setState({}))
        }), ze(t.prototype, "componentWillUnmount", function () {
            this[Ae].dispose(), this[Ae] = null
        });
        const n = t.prototype.render;
        t.prototype.render = function () {
            const e = arguments;
            let t;
            return this[Ae].track(() => {
                t = n.apply(this, e)
            }), t
        }
    }
    var Ce;
    let Ee = Ne(Ce = class extends R {
        render() {
            return h("header", {
                className: "app-header"
            }, h("div", {
                className: "wrapper"
            }, h("span", {
                className: "app-title"
            }, oe.i18n.app.name), h("nav", {
                className: "app-nav"
            }, h("a", {
                href: me.editor.path,
                className: ye.path === me.editor.path ? "active" : ye.path === me.synchronizer.path && 0 === je.lyric.length ? "showtip" : void 0,
                title: me.editor.title
            }, h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            })), h("span", {
                className: "option"
            }, me.editor.name)), h("a", {
                href: me.synchronizer.path,
                className: ye.path === me.synchronizer.path ? "active" : "",
                title: me.synchronizer.title
            }, h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"
            })), h("span", {
                className: "option"
            }, me.synchronizer.name)), h("a", {
                href: me.preferences.path,
                className: ye.path === me.preferences.path ? "active" : "",
                title: me.preferences.title
            }, h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
            })), h("span", {
                className: "option"
            }, me.preferences.name)))))
        }
    }) || Ce;
    var De, Pe, Le, Re;

    function Me(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    let Ve = (De = V.b.bound, Ne((Re = Me((Le = class extends R {
        constructor(...e) {
            var t;
            return t = super(...e),
                function (e, t, n, r) {
                    n && Object.defineProperty(e, t, {
                        enumerable: n.enumerable,
                        configurable: n.configurable,
                        writable: n.writable,
                        value: n.initializer ? n.initializer.call(r) : void 0
                    })
                }(this, "href", Re, this), t
        }
        handleClick(e) {
            let t = je.value;
            this.lrcString != t && (this.lrcString = t, URL.revokeObjectURL(this.href), this.href = URL.createObjectURL(new Blob([t], {
                type: "text/plain;charset=UTF-8"
            })))
        }
        render() {
            return h("a", {
                className: "download iconbutton",
                download: (je.info.get("ti")) + ".lrc",
                href: this.href,
                onClick: this.handleClick
            }, h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            })))
        }
    }).prototype, "href", [V.f], {
        enumerable: !0,
        initializer: null
    }), Me(Le.prototype, "handleClick", [De], Object.getOwnPropertyDescriptor(Le.prototype, "handleClick"), Le.prototype), Pe = Le)) || Pe);
    var Ie;
    let Be = Ne(Ie = class extends R {
        constructor(e) {
            super(e), this.updateInfo = (e => {
                let t = e.target.value,
                    n = e.target.name;
                0 === t.length ? je.info_delete(n, t) : je.info_set(n, t)
            }), this.parseText = (e => {
                je.value = e.target.value
            }), this.uploadAudio = (e => {
                let t = e.target.files[0];
                t && (de.src = t)
            }), this.uploadText = (e => {
                let t = e.target.files[0];
                if (t) {
                    const e = new FileReader;
                    e.onload = (e => {
                        let t = e.target.result;
                        je.value = t
                    }), e.readAsText(t)
                }
            }), this.selectAll = (() => {
                this.textarea.select(), document.execCommand("copy")
            }), this.setTextarea = (e => {
                this.textarea = e
            })
        }
        render() {
            return h("div", {
                className: "editor"
            }, h("section", {
                className: "editor-tool-bar"
            }, h("label", {
                className: "editor-button"
            }, h("svg", {
                fill: "#000000",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
            }), h("path", {
                d: "M19.00,15.50l0,-2.99l-1.49,0l0,2.99l-2.99,0l0,1.49l2.99,0l0,2.99l1.49,0l0,-2.99l2.99,0l0,-1.49l-2.99,0Z"
            })), h("span", {
                className: "option"
            }, oe.i18n.lrc["load-audio"]), h("input", {
                type: "file",
                accept: "audio/*",
                onChange: this.uploadAudio
            })), h("label", {
                className: "editor-button"
            }, h("svg", {
                fill: "#000000",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"
            })), h("span", {
                className: "option"
            }, oe.i18n.lrc["load-text"]), h("input", {
                type: "file",
                accept: "text/*, .txt, .lrc",
                onChange: this.uploadText
            })), h("span", {
                onClick: this.selectAll,
                className: "editor-button"
            }, h("svg", {
                fill: "#000000",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"
            })), h("span", {
                className: "option"
            }, oe.i18n.lrc["select-all"]))), h("section", {
                className: "lrc-info-section"
            }, h("section", {
                className: "lrc-info-input-section"
            }, h("span", null, oe.i18n.lrc.title), h("input", {
                placeholder: "ti",
                name: "ti",
                onBlur: this.updateInfo,
                value: je.info.get("ti")
            })), h("section", {
                className: "lrc-info-input-section"
            }, h("span", null, oe.i18n.lrc.artist), h("input", {
                placeholder: "ar",
                name: "ar",
                onBlur: this.updateInfo,
                value: je.info.get("ar")
            })), h("section", {
                className: "lrc-info-input-section"
            }, h("span", null, oe.i18n.lrc.album), h("input", {
                placeholder: "al",
                name: "al",
                onBlur: this.updateInfo,
                value: je.info.get("al")
            }))), h("section", {
                className: "lrc-textarea-section"
            }, h("textarea", {
                className: "app-textarea",
                placeholder: "text",
                onBlur: this.parseText,
                value: je.value,
                ref: this.setTextarea
            })), h("div", {
                className: "extra_button_group"
            }, h(Ve, null)))
        }
    }) || Ie;
    var Ue;
    let He = Ne(Ue = class extends R {
        render() {
            let e = ["locknodebutton", "iconbutton"];
            return de.lock && e.push("locked"), h("button", {
                tabIndex: "-1",
                className: e.join(" "),
                onClick: de.toggle_lock
            }, de.lock ? h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
            })) : h("svg", {
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), h("path", {
                d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"
            })))
        }
    }) || Ue;
    var $e, We, Ke, Ge;

    function Xe(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    let Ye = Ne($e = class extends R {
        render() {
            return h("span", {
                className: "current-time-tag"
            }, Te.timeToTag(de.currentTime_fixed) + "➤")
        }
    }) || $e;
    let Je = (We = V.b.bound, Ne((Xe((Ge = class extends R {
        get trackNode() {
            const e = de.lock ? je.highlightIndex : je.selectedIndex;
            return this.base.children[e]
        }
        constructor(e) {
            super(e)
        }
        componentDidMount() {
            this.disposers = [Object(V.c)(() => {
                this.trackNode && this.trackNode.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                })
            }), Object(V.c)(() => {
                de.lock ? document.body.classList.add("freeze") : document.body.classList.remove("freeze")
            }), () => document.body.classList.remove("freeze"), ((e, t, n) => (document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)))("keydown", e => {
                if (["Backspace", "Delete"].includes(e.code) || ["Backspace", "Delete", "Del"].includes(e.key)) return e.preventDefault(), void this.deleteTimestamp();
                !0 !== e.metaKey && !0 !== e.ctrlKey && ("Space" === e.code || " " === e.key || "Spacebar" === e.key ? (e.preventDefault(), Fe()) : ["ArrowUp", "KeyW", "KeyJ"].includes(e.code) || ["ArrowUp", "Up", "W", "w", "J", "j"].includes(e.key) ? (e.preventDefault(), this.changeSelect(-1)) : ["ArrowDown", "KeyS", "KeyK"].includes(e.code) || ["ArrowDown", "Down", "S", "s", "K", "k"].includes(e.key) ? (e.preventDefault(), this.changeSelect(1)) : "Home" === e.code || "Home" === e.key ? (e.preventDefault(), this.changeSelect(-1e3)) : "End" === e.code || "End" === e.key ? (e.preventDefault(), this.changeSelect(1e3)) : "PageUp" === e.code || "PageUp" === e.key ? (e.preventDefault(), this.changeSelect(-10)) : "PageDown" !== e.code && "PageDown" !== e.key || (e.preventDefault(), this.changeSelect(10)))
            }, {
                capture: !0
            })]
        }
        componentWillUnmount() {
            this.disposers.forEach(e => e())
        }
        deleteTimestamp() {
            let e = je.selectedIndex;
            je.lyric[e].time = void 0
        }
        changeSelect(e) {
            je.selectedIndex += e
        }
        selectLine(e) {
            let {
                key: t
            } = e.target.dataset;
            if (!t) return !0;
            je.selectedIndex = Number(t)
        }
        render() {
            return h("ul", {
                className: "lyric-list",
                onClick: this.selectLine
            }, je.lyric.map((e, t) => {
                const n = ["lyric-line"];
                e.key === je.highlightIndex && n.push("highlight"), e.key === je.selectedIndex && n.push("select");
                let r = Math.max(e.key - 1, 0),
                    i = je.lyric[r].time;
                i && i > e.time && n.push("error");
                const o = void 0 === e.time ? null : h("span", {
                    className: "lyric-time"
                }, Te.timeToTag(e.time));
                return h("li", {
                    className: n.join(" "),
                    "data-key": e.key,
                    key: e.key
                }, e.key == je.selectedIndex ? h(Ye, null) : null, h("p", {
                    className: "lyric"
                }, o, oe.pretty_tag ? " " : null, h("span", {
                    class: "lyric-text"
                }, e.text)))
            }))
        }
    }).prototype, "trackNode", [V.d], Object.getOwnPropertyDescriptor(Ge.prototype, "trackNode"), Ge.prototype), Xe(Ge.prototype, "deleteTimestamp", [V.b], Object.getOwnPropertyDescriptor(Ge.prototype, "deleteTimestamp"), Ge.prototype), Xe(Ge.prototype, "changeSelect", [V.b], Object.getOwnPropertyDescriptor(Ge.prototype, "changeSelect"), Ge.prototype), Xe(Ge.prototype, "selectLine", [We], Object.getOwnPropertyDescriptor(Ge.prototype, "selectLine"), Ge.prototype), Ke = Ge)) || Ke);
    const Fe = Object(V.b)(() => {
            if (je.lyric.length > 0) {
                let e = je.selectedIndex;
                je.lyric[e].time = de.currentTime, je.selectedIndex += 1
            }
        }),
        qe = () => h("div", {
            className: "synchronizer"
        }, h(Je, null), h("div", {
            className: "extra_button_group"
        }, h(He, null), h(Ve, null)));
    var Ze;
    let Qe = Ne(Ze = class extends R {
        constructor(...e) {
            var t;
            return t = super(...e), this.clearCache = (() => {
                localStorage.clear(), "serviceWorkerRegistration" in window && window.serviceWorkerRegistration.unregister()
            }), t
        }
        handleLanguageSelect(e) {
            oe.language = e.target.value
        }
        render() {
            return h("div", {
                className: "preferences"
            }, h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences.language), h("div", {
                className: "lang-select"
            }, h("select", {
                onChange: this.handleLanguageSelect
            }, Object.entries(ne).map(([e, t]) => h("option", {
                key: e,
                value: e,
                selected: oe.language === e
            }, t["language-name"])))))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences.version), h("div", null, "Lyric Maker"))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["build-time"]), h("div", null, "1.0"))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["build-revision"]), h("div", null, "4.2019"))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["github-repo"]), h("a", {
                href: "https://delnegend.ml",
                target: "_blank"
            }, "DELNEGEND"))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences.help), h("a", {
                href: "https://delnegend.ml/lrc-maker/",
                target: "_blank"
            }, "DELNEGEND Post"))), h("section", null, h("div", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["time-tag-decimals"]), h("div", {
                class: "stepper"
            }, h("button", {
                class: "addOnLeft",
                onClick: oe.minus_fixed
            }, "-"), h("input", {
                type: "text",
                value: oe.fixed
            }), h("button", {
                class: "addOnRight",
                onClick: oe.add_fixed
            }, "+")))), h("section", null, h("label", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["trim-line"]), h("label", {
                class: "label-switch"
            }, h("input", {
                type: "checkbox",
                checked: oe.trim,
                onChange: oe.toggle_trim
            }), h("div", {
                class: "checkbox"
            })))), h("section", null, h("label", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["add-space"]), h("label", {
                class: "label-switch"
            }, h("input", {
                type: "checkbox",
                checked: oe.pretty_tag,
                onChange: oe.toggle_pretty_tag
            }), h("div", {
                class: "checkbox"
            })))), h("section", null, h("label", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["built-in-audio"]), h("label", {
                class: "label-switch"
            }, h("input", {
                type: "checkbox",
                checked: oe.built_in_audio,
                onChange: oe.toggle_audio_player
            }), h("div", {
                class: "checkbox"
            })))), h("section", null, h("label", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["space-button-on-screen"]), h("label", {
                class: "label-switch"
            }, h("input", {
                type: "checkbox",
                checked: oe.screen_button,
                onChange: oe.toggle_screen_button
            }), h("div", {
                class: "checkbox"
            })))), h("section", null, h("label", {
                className: "section-group"
            }, h("div", null, oe.i18n.preferences["dark-mode"]), h("label", {
                class: "label-switch"
            }, h("input", {
                type: "checkbox",
                checked: oe.dark_mode,
                onChange: oe.toggle_dark_mode
            }), h("div", {
                class: "checkbox"
            })))), h("section", null, h("div", {
                className: "section-group"
            }, h("button", {
                onClick: this.clearCache
            }, oe.i18n.preferences["clear-cache"]))))
        }
    }) || Ze;
    var et;
    let tt = Ne(et = class extends R {
        match() {
            switch (ye.path) {
                case "":
                case me.editor.path:
                    return h(Be, null);
                case me.synchronizer.path:
                    return h(qe, null);
                case me.preferences.path:
                    return h(Qe, null)
            }
            return h("div", {
                className: "not_found"
            }, h("header", null, "404"), h("p", null, "Không tìm thấy trang bạn cần."), h("p", null, "The page you were looking for has gone."))
        }
        render() {
            return h("div", {
                className: "app-content"
            }, this.match())
        }
    }) || et;
    var nt;
    let rt = Ne(nt = class extends R {
        render() {
            return oe.screen_button && ye.path === me.synchronizer.path ? h("button", {
                onClick: Fe,
                className: "space_button"
            }, "space") : null
        }
    }) || nt;
    var it, ot, at, st, lt, ct, ut, pt, ht, dt, ft, vt, mt, yt;

    function gt(e, t, n, r) {
        n && Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(r) : void 0
        })
    }

    function bt(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach(function (e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function (n, r) {
            return r(e, t, n) || n
        }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    const wt = ({
        min: e,
        max: t,
        step: n,
        value: r,
        onInput: i,
        className: o
    }) => {
        return h("div", {
            className: `slider ${o}-slider`
        }, h("progress", {
            min: 0,
            max: 1,
            value: (r - e) / (t - e || 1)
        }), h("input", {
            type: "range",
            tabIndex: "-1",
            className: o,
            min: e,
            max: t,
            step: n,
            value: r,
            onInput: i,
            onChange: i
        }))
    };
    let _t = (it = V.b.bound, Ne((st = bt((at = class e extends R {
        constructor(...e) {
            var t;
            return t = super(...e), gt(this, "duration", st, this), gt(this, "_currentTime", lt, this), gt(this, "paused", ct, this), gt(this, "volume", ut, this), gt(this, "_playbackRate", pt, this), gt(this, "muted", ht, this), gt(this, "onLoadedMetadata", dt, this), gt(this, "onPlay", ft, this), gt(this, "onPause", vt, this), gt(this, "onVolumeChange", mt, this), this.onTimeUpdate = (e => {
                this.paused && this.syncTime()
            }), gt(this, "onRateChange", yt, this), this.replay5s = (() => {
                this.audio.currentTime -= 5
            }), this.forward5s = (() => {
                this.audio.currentTime += 5
            }), this.play = (() => {
                this.audio.play()
            }), this.pause = (() => {
                this.audio.pause()
            }), this.togglePlayPause = (() => {
                this.paused ? this.play() : this.pause()
            }), this.handleTimeSelect = (e => {
                this.audio.currentTime = e.target.value
            }), this.handlePlaybackRateChange = (e => {
                this.audio.playbackRate = Math.exp(e.target.value)
            }), this.handlePlaybackRateReset = (e => {
                this.audio.playbackRate = 1
            }), this.handleVolumeChange = (e => {
                const t = e.target.value;
                this.audio.muted = 0 === t, this.audio.volume = t
            }), this.toggleMuted = (e => {
                this.audio.muted = !this.audio.muted
            }), this.setAudioRef = (e => {
                this.audio = e
            }), t
        }
        componentDidMount() {
            this.audio.volume = parseFloat(sessionStorage.getItem("lrc-maker-volume")) || 1, this.playbackRate = parseFloat(sessionStorage.getItem("lrc-maker-playbackRate")) || 1, this.audio.muted = "true" == sessionStorage.getItem("lrc-maker-muted"), window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("lrc-maker-volume", this.volume), sessionStorage.setItem("lrc-maker-playbackRate", this._playbackRate), sessionStorage.setItem("lrc-maker-muted", this.muted)
            })
        }
        set currentTime(e) {
            this.audio.currentTime = e
        }
        get currentTime() {
            return this._currentTime
        }
        set playbackRate(e) {
            this.audio.playbackRate = e
        }
        get playbackRate() {
            return this._playbackRate
        }
        set playbackRate_exp(e) {
            this.playbackRate = Math.exp(e)
        }
        get playbackRate_exp() {
            return Math.log(this.playbackRate)
        }
        get currentTime_int() {
            return ~~this.currentTime
        }
        syncTime() {
            this._currentTime = this.audio.currentTime, this.props.onTimeUpdate({
                target: this
            }), this.paused || (this.handler = requestAnimationFrame(this.syncTime))
        }
        static timeToTag(e) {
            let t = ~~(e / 60),
                n = ~~(e % 60);
            return `${t=(""+t).padStart(2,"0")}:${n=(""+n).padStart(2,"0")}`
        }
        get timeTag() {
            return h("span", null, e.timeToTag(this.currentTime_int), 0 === this.duration ? null : " / " + e.timeToTag(this.duration))
        }
        get timelineSection() {
            return this.props.controls ? null : h("section", {
                className: "time-line-section" + (this.paused ? "" : " playing")
            }, h("button", {
                tabIndex: "-1",
                className: "replay5s",
                onClick: this.replay5s,
                disabled: this.currentTime_int <= 0
            }, h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"
            }))), h("button", {
                tabIndex: "-1",
                disabled: !this.duration,
                onClick: this.togglePlayPause
            }, this.paused ? h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M8 5v14l11-7z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            })) : h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))), h("button", {
                tabIndex: "-1",
                className: "forward5s",
                onClick: this.forward5s,
                disabled: this.currentTime_int >= this.duration
            }, h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"
            }))), this.timeTag, wt({
                min: 0,
                max: this.duration,
                step: "1",
                value: this.currentTime_int,
                onInput: this.handleTimeSelect,
                className: "time-line"
            }))
        }
        get audioextraSection() {
            return this.props.controls ? null : h("section", {
                className: "audio-extra-section"
            }, h("button", {
                tabIndex: "-1",
                onClick: this.handlePlaybackRateReset
            }, "X ", this.playbackRate.toFixed(2)), wt({
                className: "playbackrate",
                min: -1,
                max: 1,
                step: "any",
                value: this.playbackRate_exp,
                onInput: this.handlePlaybackRateChange
            }), h("button", {
                tabIndex: "-1",
                onClick: this.toggleMuted
            }, this.muted || 0 === this.volume ? h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            })) : h("svg", {
                fill: "#5a5a5a",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
                d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            }), h("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))), wt({
                min: 0,
                max: 1,
                step: "any",
                value: this.muted ? 0 : this.volume,
                onInput: this.handleVolumeChange,
                className: "volume-slider"
            }))
        }
        render() {
            return h("div", {
                className: this.props.className
            }, h("audio", {
                hidden: !this.props.controls,
                controls: this.props.controls,
                src: this.props.src,
                ref: this.setAudioRef,
                onLoadedMetadata: this.onLoadedMetadata,
                onPlay: this.onPlay,
                onPause: this.onPause,
                onEnded: this.onPause,
                onTimeUpdate: this.onTimeUpdate,
                onVolumeChange: this.onVolumeChange,
                onRateChange: this.onRateChange
            }), this.timelineSection, this.audioextraSection)
        }
    }).prototype, "duration", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 0
        }
    }), lt = bt(at.prototype, "_currentTime", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 0
        }
    }), ct = bt(at.prototype, "paused", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !0
        }
    }), ut = bt(at.prototype, "volume", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 1
        }
    }), pt = bt(at.prototype, "_playbackRate", [V.f], {
        enumerable: !0,
        initializer: function () {
            return 1
        }
    }), ht = bt(at.prototype, "muted", [V.f], {
        enumerable: !0,
        initializer: function () {
            return !1
        }
    }), bt(at.prototype, "playbackRate_exp", [V.d], Object.getOwnPropertyDescriptor(at.prototype, "playbackRate_exp"), at.prototype), bt(at.prototype, "currentTime_int", [V.d], Object.getOwnPropertyDescriptor(at.prototype, "currentTime_int"), at.prototype), bt(at.prototype, "syncTime", [it], Object.getOwnPropertyDescriptor(at.prototype, "syncTime"), at.prototype), bt(at.prototype, "timeTag", [V.d], Object.getOwnPropertyDescriptor(at.prototype, "timeTag"), at.prototype), dt = bt(at.prototype, "onLoadedMetadata", [V.b], {
        enumerable: !0,
        initializer: function () {
            return e => {
                this.duration = e.target.duration, this.paused = e.target.paused
            }
        }
    }), ft = bt(at.prototype, "onPlay", [V.b], {
        enumerable: !0,
        initializer: function () {
            return e => {
                this.paused = e.target.paused, this.syncTime()
            }
        }
    }), vt = bt(at.prototype, "onPause", [V.b], {
        enumerable: !0,
        initializer: function () {
            return e => {
                this.paused = e.target.paused, cancelAnimationFrame(this.handler)
            }
        }
    }), mt = bt(at.prototype, "onVolumeChange", [V.b], {
        enumerable: !0,
        initializer: function () {
            return e => {
                this.volume = e.target.volume, this.muted = e.target.muted
            }
        }
    }), yt = bt(at.prototype, "onRateChange", [V.b], {
        enumerable: !0,
        initializer: function () {
            return e => {
                this._playbackRate = e.target.playbackRate
            }
        }
    }), ot = at)) || ot);
    var xt;
    let kt = Ne(xt = class extends R {
        componentDidMount() {
            document.addEventListener("visibilitychange", () => {
                document.hidden && (this.audio.pause(), je.save())
            }, !1), window.addEventListener("beforeunload", () => {
                je.save()
            }), document.addEventListener("keydown", e => {
                if (!["text", "textarea"].includes(e.target.type))
                    if (!0 === e.metaKey || !0 === e.ctrlKey) {
                        if (["ArrowUp", "KeyJ"].includes(e.code) || ["ArrowUp", "Up", "J", "j"].includes(e.key)) {
                            e.preventDefault();
                            const t = this.audio.playbackRate,
                                n = Math.exp(Math.min(Math.log(t) + .2, 1));
                            this.audio.playbackRate = n
                        } else if (["ArrowDown", "KeyK"].includes(e.code) || ["ArrowDown", "Down", "K", "k"].includes(e.key)) {
                            e.preventDefault();
                            const t = this.audio.playbackRate,
                                n = Math.exp(Math.max(Math.log(t) - .2, -1));
                            this.audio.playbackRate = n
                        } else if ("Enter" === e.code || "Enter" === e.key) e.preventDefault(), this.audio.paused ? this.audio.play() : this.audio.pause();
                        else if (!0 === e.shiftKey && ("KeyP" === e.code || "P" === e.key || "p" === e.key)) {
                            e.preventDefault();
                            let t = prompt("Input the audio source url.", de.src);
                            t && (de.src = t)
                        }
                    } else ["ArrowLeft", "KeyA"].includes(e.code) || ["ArrowLeft", "Left", "A", "a"].includes(e.key) ? (e.preventDefault(), this.audio.currentTime -= 5) : ["ArrowRight", "KeyD"].includes(e.code) || ["ArrowRight", "Right", "D", "d"].includes(e.key) ? (e.preventDefault(), this.audio.currentTime += 5) : "KeyR" !== e.code && "R" !== e.key && "r" !== e.key || (e.preventDefault(), this.audio.playbackRate = 1)
            }, {
                capture: !0
            });
            let e = location.search.slice(1).split("&").reduce((e, t) => {
                let [n, r] = t.split("=");
                return Object.assign(e, {
                    [n]: decodeURIComponent(r)
                })
            }, {});
            void 0 !== e.audioSrc && (de.src = e.audioSrc)
        }
        render() {
            return h("footer", {
                className: "app-footer"
            }, h(rt, null), h(_t, {
                className: "app-audio",
                controls: oe.built_in_audio,
                ref: e => {
                    this.audio = e
                },
                src: de.src,
                onTimeUpdate: e => {
                    de.currentTime = e.target.currentTime
                }
            }))
        }
    }) || xt;
    var Ot = ({
        loading: e
    }) => h("main", {
        className: "app"
    }, h(Ee, null), e ? h("div", {
        className: "loading-page"
    }, h("p", null, "Loading", h("span", {
        className: "dot"
    }, "...")), h("div", {
        className: "loading"
    })) : h(tt, null), h(kt, null));
    window.h = s, Object(V.e)({
        enforceActions: !0
    }), Object(V.c)(() => document.title = oe.i18n.app.fullname), Object(V.c)(() => {
        oe.dark_mode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
    }), Object(I.polyfill)(), String.prototype.padStart || (String.prototype.padStart = function (e, t) {
        return e >>= 0, t = String(t || " "), this.length > e ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), t.slice(0, e) + String(this))
    }), M(Ot({
        loading: !1
    }), document.body, document.body.firstElementChild), document.body.addEventListener("dragover", e => (e.stopPropagation(), e.preventDefault(), e.dataTransfer.dropEffect = "copy", !1), !1), document.body.addEventListener("drop", Object(V.b)(e => {
        e.stopPropagation(), e.preventDefault();
        let t = e.dataTransfer.files[0];
        if (t)
            if (/^audio\//.test(t.type)) de.src = t;
            else if (/^text\//.test(t.type) || /(?:\.lrc|\.txt)$/i.test(t.name)) {
            let e = new FileReader;
            e.onload = (e => {
                je.value = e.target.result, location.hash = me.editor.path
            }), e.readAsText(t)
        }
        return !1
    }), !1), window.opener && (window.addEventListener("message", e => {
        const t = e.data.audioSrc;
        t && "string" == typeof t && (de.src = t)
    }, {
        once: !0
    }), window.opener.postMessage(!0, "*")), "serviceWorker" in navigator && navigator.serviceWorker.register("./sw.js").then(e => {
        e.update(), window.serviceWorkerRegistration = e, console.log("ServiceWorker Registed (｡･ω･｡)ﾉ: ", e.scope)
    }, e => {
        console.log("ServiceWorker registration failed: ", e)
    })
}, function (e, t) {}, , function (e, t) {}]);
//# sourceMappingURL=app.js.map