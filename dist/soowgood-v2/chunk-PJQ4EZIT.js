import { a as I, b as te } from "./chunk-5G567QLT.js";
var zd = null;
var Ea = 1,
  Gd = Symbol("SIGNAL");
function ie(e) {
  let t = zd;
  return (zd = e), t;
}
var Wd = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function hy(e) {
  if (!(ba(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Ea)) {
    if (!e.producerMustRecompute(e) && !Ia(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Ea);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Ea);
  }
}
function qd(e) {
  return e && (e.nextProducerIndex = 0), ie(e);
}
function Zd(e, t) {
  if (
    (ie(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (ba(e))
      for (let r = e.nextProducerIndex; r < e.producerNode.length; r++)
        Ca(e.producerNode[r], e.producerIndexOfThis[r]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Ia(e) {
  ko(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let r = e.producerNode[t],
      n = e.producerLastReadVersion[t];
    if (n !== r.version || (hy(r), n !== r.version)) return !0;
  }
  return !1;
}
function Yd(e) {
  if ((ko(e), ba(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Ca(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ca(e, t) {
  if ((py(e), ko(e), e.liveConsumerNode.length === 1))
    for (let n = 0; n < e.producerNode.length; n++)
      Ca(e.producerNode[n], e.producerIndexOfThis[n]);
  let r = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[r]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[r]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let n = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    ko(o), (o.producerIndexOfThis[n] = t);
  }
}
function ba(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function ko(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function py(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function gy() {
  throw new Error();
}
var my = gy;
function Qd(e) {
  my = e;
}
function b(e) {
  return typeof e == "function";
}
function Vt(e) {
  let r = e((n) => {
    Error.call(n), (n.stack = new Error().stack);
  });
  return (
    (r.prototype = Object.create(Error.prototype)),
    (r.prototype.constructor = r),
    r
  );
}
var Lo = Vt(
  (e) =>
    function (r) {
      e(this),
        (this.message = r
          ? `${r.length} errors occurred during unsubscription:
${r.map((n, o) => `${o + 1}) ${n.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = r);
    }
);
function sn(e, t) {
  if (e) {
    let r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var J = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: r } = this;
      if (r)
        if (((this._parentage = null), Array.isArray(r)))
          for (let i of r) i.remove(this);
        else r.remove(this);
      let { initialTeardown: n } = this;
      if (b(n))
        try {
          n();
        } catch (i) {
          t = i instanceof Lo ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            Kd(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Lo ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Lo(t);
    }
  }
  add(t) {
    var r;
    if (t && t !== this)
      if (this.closed) Kd(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: r } = this;
    return r === t || (Array.isArray(r) && r.includes(t));
  }
  _addParent(t) {
    let { _parentage: r } = this;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }
  _removeParent(t) {
    let { _parentage: r } = this;
    r === t ? (this._parentage = null) : Array.isArray(r) && sn(r, t);
  }
  remove(t) {
    let { _finalizers: r } = this;
    r && sn(r, t), t instanceof e && t._removeParent(this);
  }
};
J.EMPTY = (() => {
  let e = new J();
  return (e.closed = !0), e;
})();
var Ma = J.EMPTY;
function jo(e) {
  return (
    e instanceof J ||
    (e && "closed" in e && b(e.remove) && b(e.add) && b(e.unsubscribe))
  );
}
function Kd(e) {
  b(e) ? e() : e.unsubscribe();
}
var Qe = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var On = {
  setTimeout(e, t, ...r) {
    let { delegate: n } = On;
    return n?.setTimeout ? n.setTimeout(e, t, ...r) : setTimeout(e, t, ...r);
  },
  clearTimeout(e) {
    let { delegate: t } = On;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Vo(e) {
  On.setTimeout(() => {
    let { onUnhandledError: t } = Qe;
    if (t) t(e);
    else throw e;
  });
}
function an() {}
var Jd = Ta("C", void 0, void 0);
function Xd(e) {
  return Ta("E", void 0, e);
}
function ef(e) {
  return Ta("N", e, void 0);
}
function Ta(e, t, r) {
  return { kind: e, value: t, error: r };
}
var cn = null;
function Pn(e) {
  if (Qe.useDeprecatedSynchronousErrorHandling) {
    let t = !cn;
    if ((t && (cn = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: r, error: n } = cn;
      if (((cn = null), r)) throw n;
    }
  } else e();
}
function tf(e) {
  Qe.useDeprecatedSynchronousErrorHandling &&
    cn &&
    ((cn.errorThrown = !0), (cn.error = e));
}
var un = class extends J {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), jo(t) && t.add(this))
          : (this.destination = Dy);
    }
    static create(t, r, n) {
      return new It(t, r, n);
    }
    next(t) {
      this.isStopped ? xa(ef(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? xa(Xd(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? xa(Jd, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  vy = Function.prototype.bind;
function Sa(e, t) {
  return vy.call(e, t);
}
var Aa = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: r } = this;
      if (r.next)
        try {
          r.next(t);
        } catch (n) {
          $o(n);
        }
    }
    error(t) {
      let { partialObserver: r } = this;
      if (r.error)
        try {
          r.error(t);
        } catch (n) {
          $o(n);
        }
      else $o(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (r) {
          $o(r);
        }
    }
  },
  It = class extends un {
    constructor(t, r, n) {
      super();
      let o;
      if (b(t) || !t)
        o = { next: t ?? void 0, error: r ?? void 0, complete: n ?? void 0 };
      else {
        let i;
        this && Qe.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Sa(t.next, i),
              error: t.error && Sa(t.error, i),
              complete: t.complete && Sa(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Aa(o);
    }
  };
function $o(e) {
  Qe.useDeprecatedSynchronousErrorHandling ? tf(e) : Vo(e);
}
function yy(e) {
  throw e;
}
function xa(e, t) {
  let { onStoppedNotification: r } = Qe;
  r && On.setTimeout(() => r(e, t));
}
var Dy = { closed: !0, next: an, error: yy, complete: an };
var Fn = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function Ie(e) {
  return e;
}
function Sr(...e) {
  return _a(e);
}
function _a(e) {
  return e.length === 0
    ? Ie
    : e.length === 1
    ? e[0]
    : function (r) {
        return e.reduce((n, o) => o(n), r);
      };
}
var P = (() => {
  class e {
    constructor(r) {
      r && (this._subscribe = r);
    }
    lift(r) {
      let n = new e();
      return (n.source = this), (n.operator = r), n;
    }
    subscribe(r, n, o) {
      let i = Ey(r) ? r : new It(r, n, o);
      return (
        Pn(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i)
          );
        }),
        i
      );
    }
    _trySubscribe(r) {
      try {
        return this._subscribe(r);
      } catch (n) {
        r.error(n);
      }
    }
    forEach(r, n) {
      return (
        (n = nf(n)),
        new n((o, i) => {
          let s = new It({
            next: (a) => {
              try {
                r(a);
              } catch (c) {
                i(c), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(r) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(r);
    }
    [Fn]() {
      return this;
    }
    pipe(...r) {
      return _a(r)(this);
    }
    toPromise(r) {
      return (
        (r = nf(r)),
        new r((n, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => n(i)
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function nf(e) {
  var t;
  return (t = e ?? Qe.Promise) !== null && t !== void 0 ? t : Promise;
}
function wy(e) {
  return e && b(e.next) && b(e.error) && b(e.complete);
}
function Ey(e) {
  return (e && e instanceof un) || (wy(e) && jo(e));
}
function Na(e) {
  return b(e?.lift);
}
function x(e) {
  return (t) => {
    if (Na(t))
      return t.lift(function (r) {
        try {
          return e(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function M(e, t, r, n, o) {
  return new Ra(e, t, r, n, o);
}
var Ra = class extends un {
  constructor(t, r, n, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = r
        ? function (a) {
            try {
              r(a);
            } catch (c) {
              t.error(c);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (c) {
              t.error(c);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = n
        ? function () {
            try {
              n();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: r } = this;
      super.unsubscribe(),
        !r && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function kn() {
  return x((e, t) => {
    let r = null;
    e._refCount++;
    let n = M(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        r = null;
        return;
      }
      let o = e._connection,
        i = r;
      (r = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(n), n.closed || (r = e.connect());
  });
}
var Ln = class extends P {
  constructor(t, r) {
    super(),
      (this.source = t),
      (this.subjectFactory = r),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Na(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new J();
      let r = this.getSubject();
      t.add(
        this.source.subscribe(
          M(
            r,
            void 0,
            () => {
              this._teardown(), r.complete();
            },
            (n) => {
              this._teardown(), r.error(n);
            },
            () => this._teardown()
          )
        )
      ),
        t.closed && ((this._connection = null), (t = J.EMPTY));
    }
    return t;
  }
  refCount() {
    return kn()(this);
  }
};
var rf = Vt(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
var ae = (() => {
    class e extends P {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(r) {
        let n = new Uo(this, this);
        return (n.operator = r), n;
      }
      _throwIfClosed() {
        if (this.closed) throw new rf();
      }
      next(r) {
        Pn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let n of this.currentObservers) n.next(r);
          }
        });
      }
      error(r) {
        Pn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = r);
            let { observers: n } = this;
            for (; n.length; ) n.shift().error(r);
          }
        });
      }
      complete() {
        Pn(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: r } = this;
            for (; r.length; ) r.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var r;
        return (
          ((r = this.observers) === null || r === void 0 ? void 0 : r.length) >
          0
        );
      }
      _trySubscribe(r) {
        return this._throwIfClosed(), super._trySubscribe(r);
      }
      _subscribe(r) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(r),
          this._innerSubscribe(r)
        );
      }
      _innerSubscribe(r) {
        let { hasError: n, isStopped: o, observers: i } = this;
        return n || o
          ? Ma
          : ((this.currentObservers = null),
            i.push(r),
            new J(() => {
              (this.currentObservers = null), sn(i, r);
            }));
      }
      _checkFinalizedStatuses(r) {
        let { hasError: n, thrownError: o, isStopped: i } = this;
        n ? r.error(o) : i && r.complete();
      }
      asObservable() {
        let r = new P();
        return (r.source = this), r;
      }
    }
    return (e.create = (t, r) => new Uo(t, r)), e;
  })(),
  Uo = class extends ae {
    constructor(t, r) {
      super(), (this.destination = t), (this.source = r);
    }
    next(t) {
      var r, n;
      (n =
        (r = this.destination) === null || r === void 0 ? void 0 : r.next) ===
        null ||
        n === void 0 ||
        n.call(r, t);
    }
    error(t) {
      var r, n;
      (n =
        (r = this.destination) === null || r === void 0 ? void 0 : r.error) ===
        null ||
        n === void 0 ||
        n.call(r, t);
    }
    complete() {
      var t, r;
      (r =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        r === void 0 ||
        r.call(t);
    }
    _subscribe(t) {
      var r, n;
      return (n =
        (r = this.source) === null || r === void 0
          ? void 0
          : r.subscribe(t)) !== null && n !== void 0
        ? n
        : Ma;
    }
  };
var he = class extends ae {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let r = super._subscribe(t);
    return !r.closed && t.next(this._value), r;
  }
  getValue() {
    let { hasError: t, thrownError: r, _value: n } = this;
    if (t) throw r;
    return this._throwIfClosed(), n;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var xr = {
  now() {
    return (xr.delegate || Date).now();
  },
  delegate: void 0,
};
var Bo = class extends ae {
  constructor(t = 1 / 0, r = 1 / 0, n = xr) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = r),
      (this._timestampProvider = n),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = r === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, r));
  }
  next(t) {
    let {
      isStopped: r,
      _buffer: n,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    r || (n.push(t), !o && n.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let r = this._innerSubscribe(t),
      { _infiniteTimeWindow: n, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += n ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), r;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: r,
        _buffer: n,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < n.length && n.splice(0, n.length - i), !o)) {
      let s = r.now(),
        a = 0;
      for (let c = 1; c < n.length && n[c] <= s; c += 2) a = c;
      a && n.splice(0, a + 1);
    }
  }
};
var Ho = class extends J {
  constructor(t, r) {
    super();
  }
  schedule(t, r = 0) {
    return this;
  }
};
var Ar = {
  setInterval(e, t, ...r) {
    let { delegate: n } = Ar;
    return n?.setInterval ? n.setInterval(e, t, ...r) : setInterval(e, t, ...r);
  },
  clearInterval(e) {
    let { delegate: t } = Ar;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var zo = class extends Ho {
  constructor(t, r) {
    super(t, r), (this.scheduler = t), (this.work = r), (this.pending = !1);
  }
  schedule(t, r = 0) {
    var n;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, r)),
      (this.pending = !0),
      (this.delay = r),
      (this.id =
        (n = this.id) !== null && n !== void 0
          ? n
          : this.requestAsyncId(i, this.id, r)),
      this
    );
  }
  requestAsyncId(t, r, n = 0) {
    return Ar.setInterval(t.flush.bind(t, this), n);
  }
  recycleAsyncId(t, r, n = 0) {
    if (n != null && this.delay === n && this.pending === !1) return r;
    r != null && Ar.clearInterval(r);
  }
  execute(t, r) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let n = this._execute(t, r);
    if (n) return n;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, r) {
    let n = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (n = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (n) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: r } = this,
        { actions: n } = r;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        sn(n, this),
        t != null && (this.id = this.recycleAsyncId(r, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var jn = class e {
  constructor(t, r = e.now) {
    (this.schedulerActionCtor = t), (this.now = r);
  }
  schedule(t, r = 0, n) {
    return new this.schedulerActionCtor(this, t).schedule(n, r);
  }
};
jn.now = xr.now;
var Go = class extends jn {
  constructor(t, r = jn.now) {
    super(t, r), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: r } = this;
    if (this._active) {
      r.push(t);
      return;
    }
    let n;
    this._active = !0;
    do if ((n = t.execute(t.state, t.delay))) break;
    while ((t = r.shift()));
    if (((this._active = !1), n)) {
      for (; (t = r.shift()); ) t.unsubscribe();
      throw n;
    }
  }
};
var Ct = new Go(zo),
  of = Ct;
var xe = new P((e) => e.complete());
function Wo(e) {
  return e && b(e.schedule);
}
function Oa(e) {
  return e[e.length - 1];
}
function Vn(e) {
  return b(Oa(e)) ? e.pop() : void 0;
}
function it(e) {
  return Wo(Oa(e)) ? e.pop() : void 0;
}
function sf(e, t) {
  return typeof Oa(e) == "number" ? e.pop() : t;
}
function cf(e, t, r, n) {
  function o(i) {
    return i instanceof r
      ? i
      : new r(function (s) {
          s(i);
        });
  }
  return new (r || (r = Promise))(function (i, s) {
    function a(l) {
      try {
        u(n.next(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      l.done ? i(l.value) : o(l.value).then(a, c);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function af(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    r = t && e[t],
    n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function ln(e) {
  return this instanceof ln ? ((this.v = e), this) : new ln(e);
}
function uf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []),
    o,
    i = [];
  return (
    (o = {}),
    s("next"),
    s("throw"),
    s("return"),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    n[f] &&
      (o[f] = function (h) {
        return new Promise(function (p, D) {
          i.push([f, h, p, D]) > 1 || a(f, h);
        });
      });
  }
  function a(f, h) {
    try {
      c(n[f](h));
    } catch (p) {
      d(i[0][3], p);
    }
  }
  function c(f) {
    f.value instanceof ln
      ? Promise.resolve(f.value.v).then(u, l)
      : d(i[0][2], f);
  }
  function u(f) {
    a("next", f);
  }
  function l(f) {
    a("throw", f);
  }
  function d(f, h) {
    f(h), i.shift(), i.length && a(i[0][0], i[0][1]);
  }
}
function lf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    r;
  return t
    ? t.call(e)
    : ((e = typeof af == "function" ? af(e) : e[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(i) {
    r[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, c) {
          (s = e[i](s)), o(a, c, s.done, s.value);
        });
      };
  }
  function o(i, s, a, c) {
    Promise.resolve(c).then(function (u) {
      i({ value: u, done: a });
    }, s);
  }
}
function e_(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
var $n = (e) => e && typeof e.length == "number" && typeof e != "function";
function qo(e) {
  return b(e?.then);
}
function Zo(e) {
  return b(e[Fn]);
}
function Yo(e) {
  return Symbol.asyncIterator && b(e?.[Symbol.asyncIterator]);
}
function Qo(e) {
  return new TypeError(
    `You provided ${
      e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function Iy() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Ko = Iy();
function Jo(e) {
  return b(e?.[Ko]);
}
function Xo(e) {
  return uf(this, arguments, function* () {
    let r = e.getReader();
    try {
      for (;;) {
        let { value: n, done: o } = yield ln(r.read());
        if (o) return yield ln(void 0);
        yield yield ln(n);
      }
    } finally {
      r.releaseLock();
    }
  });
}
function ei(e) {
  return b(e?.getReader);
}
function k(e) {
  if (e instanceof P) return e;
  if (e != null) {
    if (Zo(e)) return Cy(e);
    if ($n(e)) return by(e);
    if (qo(e)) return My(e);
    if (Yo(e)) return df(e);
    if (Jo(e)) return Ty(e);
    if (ei(e)) return Sy(e);
  }
  throw Qo(e);
}
function Cy(e) {
  return new P((t) => {
    let r = e[Fn]();
    if (b(r.subscribe)) return r.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function by(e) {
  return new P((t) => {
    for (let r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
    t.complete();
  });
}
function My(e) {
  return new P((t) => {
    e.then(
      (r) => {
        t.closed || (t.next(r), t.complete());
      },
      (r) => t.error(r)
    ).then(null, Vo);
  });
}
function Ty(e) {
  return new P((t) => {
    for (let r of e) if ((t.next(r), t.closed)) return;
    t.complete();
  });
}
function df(e) {
  return new P((t) => {
    xy(e, t).catch((r) => t.error(r));
  });
}
function Sy(e) {
  return df(Xo(e));
}
function xy(e, t) {
  var r, n, o, i;
  return cf(this, void 0, void 0, function* () {
    try {
      for (r = lf(e); (n = yield r.next()), !n.done; ) {
        let s = n.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        n && !n.done && (i = r.return) && (yield i.call(r));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function De(e, t, r, n = 0, o = !1) {
  let i = t.schedule(function () {
    r(), o ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if ((e.add(i), !o)) return i;
}
function ti(e, t = 0) {
  return x((r, n) => {
    r.subscribe(
      M(
        n,
        (o) => De(n, e, () => n.next(o), t),
        () => De(n, e, () => n.complete(), t),
        (o) => De(n, e, () => n.error(o), t)
      )
    );
  });
}
function ni(e, t = 0) {
  return x((r, n) => {
    n.add(e.schedule(() => r.subscribe(n), t));
  });
}
function ff(e, t) {
  return k(e).pipe(ni(t), ti(t));
}
function hf(e, t) {
  return k(e).pipe(ni(t), ti(t));
}
function pf(e, t) {
  return new P((r) => {
    let n = 0;
    return t.schedule(function () {
      n === e.length
        ? r.complete()
        : (r.next(e[n++]), r.closed || this.schedule());
    });
  });
}
function gf(e, t) {
  return new P((r) => {
    let n;
    return (
      De(r, t, () => {
        (n = e[Ko]()),
          De(
            r,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = n.next());
              } catch (s) {
                r.error(s);
                return;
              }
              i ? r.complete() : r.next(o);
            },
            0,
            !0
          );
      }),
      () => b(n?.return) && n.return()
    );
  });
}
function ri(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new P((r) => {
    De(r, t, () => {
      let n = e[Symbol.asyncIterator]();
      De(
        r,
        t,
        () => {
          n.next().then((o) => {
            o.done ? r.complete() : r.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function mf(e, t) {
  return ri(Xo(e), t);
}
function vf(e, t) {
  if (e != null) {
    if (Zo(e)) return ff(e, t);
    if ($n(e)) return pf(e, t);
    if (qo(e)) return hf(e, t);
    if (Yo(e)) return ri(e, t);
    if (Jo(e)) return gf(e, t);
    if (ei(e)) return mf(e, t);
  }
  throw Qo(e);
}
function W(e, t) {
  return t ? vf(e, t) : k(e);
}
function T(...e) {
  let t = it(e);
  return W(e, t);
}
function Un(e, t) {
  let r = b(e) ? e : () => e,
    n = (o) => o.error(r());
  return new P(t ? (o) => t.schedule(n, 0, o) : n);
}
function Pa(e) {
  return !!e && (e instanceof P || (b(e.lift) && b(e.subscribe)));
}
var Ke = Vt(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
function Ay(e, t) {
  let r = typeof t == "object";
  return new Promise((n, o) => {
    let i = !1,
      s;
    e.subscribe({
      next: (a) => {
        (s = a), (i = !0);
      },
      error: o,
      complete: () => {
        i ? n(s) : r ? n(t.defaultValue) : o(new Ke());
      },
    });
  });
}
function oi(e) {
  return e instanceof Date && !isNaN(e);
}
var _y = Vt(
  (e) =>
    function (r = null) {
      e(this),
        (this.message = "Timeout has occurred"),
        (this.name = "TimeoutError"),
        (this.info = r);
    }
);
function Ny(e, t) {
  let {
    first: r,
    each: n,
    with: o = Ry,
    scheduler: i = t ?? Ct,
    meta: s = null,
  } = oi(e) ? { first: e } : typeof e == "number" ? { each: e } : e;
  if (r == null && n == null) throw new TypeError("No timeout provided.");
  return x((a, c) => {
    let u,
      l,
      d = null,
      f = 0,
      h = (p) => {
        l = De(
          c,
          i,
          () => {
            try {
              u.unsubscribe(),
                k(o({ meta: s, lastValue: d, seen: f })).subscribe(c);
            } catch (D) {
              c.error(D);
            }
          },
          p
        );
      };
    (u = a.subscribe(
      M(
        c,
        (p) => {
          l?.unsubscribe(), f++, c.next((d = p)), n > 0 && h(n);
        },
        void 0,
        void 0,
        () => {
          l?.closed || l?.unsubscribe(), (d = null);
        }
      )
    )),
      !f && h(r != null ? (typeof r == "number" ? r : +r - i.now()) : n);
  });
}
function Ry(e) {
  throw new _y(e);
}
function O(e, t) {
  return x((r, n) => {
    let o = 0;
    r.subscribe(
      M(n, (i) => {
        n.next(e.call(t, i, o++));
      })
    );
  });
}
var { isArray: Oy } = Array;
function Py(e, t) {
  return Oy(t) ? e(...t) : e(t);
}
function $t(e) {
  return O((t) => Py(e, t));
}
var { isArray: Fy } = Array,
  { getPrototypeOf: ky, prototype: Ly, keys: jy } = Object;
function ii(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Fy(t)) return { args: t, keys: null };
    if (Vy(t)) {
      let r = jy(t);
      return { args: r.map((n) => t[n]), keys: r };
    }
  }
  return { args: e, keys: null };
}
function Vy(e) {
  return e && typeof e == "object" && ky(e) === Ly;
}
function si(e, t) {
  return e.reduce((r, n, o) => ((r[n] = t[o]), r), {});
}
function _r(...e) {
  let t = it(e),
    r = Vn(e),
    { args: n, keys: o } = ii(e);
  if (n.length === 0) return W([], t);
  let i = new P(Fa(n, t, o ? (s) => si(o, s) : Ie));
  return r ? i.pipe($t(r)) : i;
}
function Fa(e, t, r = Ie) {
  return (n) => {
    yf(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let c = 0; c < o; c++)
          yf(
            t,
            () => {
              let u = W(e[c], t),
                l = !1;
              u.subscribe(
                M(
                  n,
                  (d) => {
                    (i[c] = d), l || ((l = !0), a--), a || n.next(r(i.slice()));
                  },
                  () => {
                    --s || n.complete();
                  }
                )
              );
            },
            n
          );
      },
      n
    );
  };
}
function yf(e, t, r) {
  e ? De(r, e, t) : t();
}
function Df(e, t, r, n, o, i, s, a) {
  let c = [],
    u = 0,
    l = 0,
    d = !1,
    f = () => {
      d && !c.length && !u && t.complete();
    },
    h = (D) => (u < n ? p(D) : c.push(D)),
    p = (D) => {
      i && t.next(D), u++;
      let v = !1;
      k(r(D, l++)).subscribe(
        M(
          t,
          (m) => {
            o?.(m), i ? h(m) : t.next(m);
          },
          () => {
            v = !0;
          },
          void 0,
          () => {
            if (v)
              try {
                for (u--; c.length && u < n; ) {
                  let m = c.shift();
                  s ? De(t, s, () => p(m)) : p(m);
                }
                f();
              } catch (m) {
                t.error(m);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      M(t, h, () => {
        (d = !0), f();
      })
    ),
    () => {
      a?.();
    }
  );
}
function Y(e, t, r = 1 / 0) {
  return b(t)
    ? Y((n, o) => O((i, s) => t(n, i, o, s))(k(e(n, o))), r)
    : (typeof t == "number" && (r = t), x((n, o) => Df(n, o, e, r)));
}
function st(e = 1 / 0) {
  return Y(Ie, e);
}
function wf() {
  return st(1);
}
function Ut(...e) {
  return wf()(W(e, it(e)));
}
function ai(e) {
  return new P((t) => {
    k(e()).subscribe(t);
  });
}
function $y(...e) {
  let t = Vn(e),
    { args: r, keys: n } = ii(e),
    o = new P((i) => {
      let { length: s } = r;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        c = s,
        u = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        k(r[l]).subscribe(
          M(
            i,
            (f) => {
              d || ((d = !0), u--), (a[l] = f);
            },
            () => c--,
            void 0,
            () => {
              (!c || !d) && (u || i.next(n ? si(n, a) : a), i.complete());
            }
          )
        );
      }
    });
  return t ? o.pipe($t(t)) : o;
}
var Uy = ["addListener", "removeListener"],
  By = ["addEventListener", "removeEventListener"],
  Hy = ["on", "off"];
function ka(e, t, r, n) {
  if ((b(r) && ((n = r), (r = void 0)), n)) return ka(e, t, r).pipe($t(n));
  let [o, i] = Wy(e)
    ? By.map((s) => (a) => e[s](t, a, r))
    : zy(e)
    ? Uy.map(Ef(e, t))
    : Gy(e)
    ? Hy.map(Ef(e, t))
    : [];
  if (!o && $n(e)) return Y((s) => ka(s, t, r))(k(e));
  if (!o) throw new TypeError("Invalid event target");
  return new P((s) => {
    let a = (...c) => s.next(1 < c.length ? c : c[0]);
    return o(a), () => i(a);
  });
}
function Ef(e, t) {
  return (r) => (n) => e[r](t, n);
}
function zy(e) {
  return b(e.addListener) && b(e.removeListener);
}
function Gy(e) {
  return b(e.on) && b(e.off);
}
function Wy(e) {
  return b(e.addEventListener) && b(e.removeEventListener);
}
function Nr(e = 0, t, r = of) {
  let n = -1;
  return (
    t != null && (Wo(t) ? (r = t) : (n = t)),
    new P((o) => {
      let i = oi(e) ? +e - r.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return r.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= n ? this.schedule(void 0, n) : o.complete());
      }, i);
    })
  );
}
function qy(...e) {
  let t = it(e),
    r = sf(e, 1 / 0),
    n = e;
  return n.length ? (n.length === 1 ? k(n[0]) : st(r)(W(n, t))) : xe;
}
var { isArray: Zy } = Array;
function ci(e) {
  return e.length === 1 && Zy(e[0]) ? e[0] : e;
}
function pe(e, t) {
  return x((r, n) => {
    let o = 0;
    r.subscribe(M(n, (i) => e.call(t, i, o++) && n.next(i)));
  });
}
function Yy(...e) {
  return (e = ci(e)), e.length === 1 ? k(e[0]) : new P(Qy(e));
}
function Qy(e) {
  return (t) => {
    let r = [];
    for (let n = 0; r && !t.closed && n < e.length; n++)
      r.push(
        k(e[n]).subscribe(
          M(t, (o) => {
            if (r) {
              for (let i = 0; i < r.length; i++) i !== n && r[i].unsubscribe();
              r = null;
            }
            t.next(o);
          })
        )
      );
  };
}
function If(e) {
  return x((t, r) => {
    let n = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if ((i?.unsubscribe(), (i = null), n)) {
          n = !1;
          let u = o;
          (o = null), r.next(u);
        }
        s && r.complete();
      },
      c = () => {
        (i = null), s && r.complete();
      };
    t.subscribe(
      M(
        r,
        (u) => {
          (n = !0), (o = u), i || k(e(u)).subscribe((i = M(r, a, c)));
        },
        () => {
          (s = !0), (!n || !i || i.closed) && r.complete();
        }
      )
    );
  });
}
function Ky(e, t = Ct) {
  return If(() => Nr(e, t));
}
function bt(e) {
  return x((t, r) => {
    let n = null,
      o = !1,
      i;
    (n = t.subscribe(
      M(r, void 0, void 0, (s) => {
        (i = k(e(s, bt(e)(t)))),
          n ? (n.unsubscribe(), (n = null), i.subscribe(r)) : (o = !0);
      })
    )),
      o && (n.unsubscribe(), (n = null), i.subscribe(r));
  });
}
function Cf(e, t, r, n, o) {
  return (i, s) => {
    let a = r,
      c = t,
      u = 0;
    i.subscribe(
      M(
        s,
        (l) => {
          let d = u++;
          (c = a ? e(c, l, d) : ((a = !0), l)), n && s.next(c);
        },
        o &&
          (() => {
            a && s.next(c), s.complete();
          })
      )
    );
  };
}
function La(...e) {
  let t = Vn(e);
  return t
    ? Sr(La(...e), $t(t))
    : x((r, n) => {
        Fa([r, ...ci(e)])(n);
      });
}
function Jy(...e) {
  return La(...e);
}
function Mt(e, t) {
  return b(t) ? Y(e, t, 1) : Y(e, 1);
}
function bf(e, t = Ct) {
  return x((r, n) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let u = i;
          (i = null), n.next(u);
        }
      };
    function c() {
      let u = s + e,
        l = t.now();
      if (l < u) {
        (o = this.schedule(void 0, u - l)), n.add(o);
        return;
      }
      a();
    }
    r.subscribe(
      M(
        n,
        (u) => {
          (i = u), (s = t.now()), o || ((o = t.schedule(c, e)), n.add(o));
        },
        () => {
          a(), n.complete();
        },
        void 0,
        () => {
          i = o = null;
        }
      )
    );
  });
}
function Bt(e) {
  return x((t, r) => {
    let n = !1;
    t.subscribe(
      M(
        r,
        (o) => {
          (n = !0), r.next(o);
        },
        () => {
          n || r.next(e), r.complete();
        }
      )
    );
  });
}
function $e(e) {
  return e <= 0
    ? () => xe
    : x((t, r) => {
        let n = 0;
        t.subscribe(
          M(r, (o) => {
            ++n <= e && (r.next(o), e <= n && r.complete());
          })
        );
      });
}
function Mf() {
  return x((e, t) => {
    e.subscribe(M(t, an));
  });
}
function Rr(e) {
  return O(() => e);
}
function ja(e, t) {
  return t
    ? (r) => Ut(t.pipe($e(1), Mf()), r.pipe(ja(e)))
    : Y((r, n) => k(e(r, n)).pipe($e(1), Rr(r)));
}
function Xy(e, t = Ct) {
  let r = Nr(e, t);
  return ja(() => r);
}
function Tf(e, t = Ie) {
  return (
    (e = e ?? eD),
    x((r, n) => {
      let o,
        i = !0;
      r.subscribe(
        M(n, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), n.next(s));
        })
      );
    })
  );
}
function eD(e, t) {
  return e === t;
}
function ui(e = tD) {
  return x((t, r) => {
    let n = !1;
    t.subscribe(
      M(
        r,
        (o) => {
          (n = !0), r.next(o);
        },
        () => (n ? r.complete() : r.error(e()))
      )
    );
  });
}
function tD() {
  return new Ke();
}
function Ht(e) {
  return x((t, r) => {
    try {
      t.subscribe(r);
    } finally {
      r.add(e);
    }
  });
}
function at(e, t) {
  let r = arguments.length >= 2;
  return (n) =>
    n.pipe(
      e ? pe((o, i) => e(o, i, n)) : Ie,
      $e(1),
      r ? Bt(t) : ui(() => new Ke())
    );
}
function Bn(e) {
  return e <= 0
    ? () => xe
    : x((t, r) => {
        let n = [];
        t.subscribe(
          M(
            r,
            (o) => {
              n.push(o), e < n.length && n.shift();
            },
            () => {
              for (let o of n) r.next(o);
              r.complete();
            },
            void 0,
            () => {
              n = null;
            }
          )
        );
      });
}
function Va(e, t) {
  let r = arguments.length >= 2;
  return (n) =>
    n.pipe(
      e ? pe((o, i) => e(o, i, n)) : Ie,
      Bn(1),
      r ? Bt(t) : ui(() => new Ke())
    );
}
function $a(e, t) {
  return x(Cf(e, t, arguments.length >= 2, !0));
}
function Ba(e = {}) {
  let {
    connector: t = () => new ae(),
    resetOnError: r = !0,
    resetOnComplete: n = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      c,
      u = 0,
      l = !1,
      d = !1,
      f = () => {
        a?.unsubscribe(), (a = void 0);
      },
      h = () => {
        f(), (s = c = void 0), (l = d = !1);
      },
      p = () => {
        let D = s;
        h(), D?.unsubscribe();
      };
    return x((D, v) => {
      u++, !d && !l && f();
      let m = (c = c ?? t());
      v.add(() => {
        u--, u === 0 && !d && !l && (a = Ua(p, o));
      }),
        m.subscribe(v),
        !s &&
          u > 0 &&
          ((s = new It({
            next: (j) => m.next(j),
            error: (j) => {
              (d = !0), f(), (a = Ua(h, r, j)), m.error(j);
            },
            complete: () => {
              (l = !0), f(), (a = Ua(h, n)), m.complete();
            },
          })),
          k(D).subscribe(s));
    })(i);
  };
}
function Ua(e, t, ...r) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let n = new It({
    next: () => {
      n.unsubscribe(), e();
    },
  });
  return k(t(...r)).subscribe(n);
}
function nD(e, t, r) {
  let n,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: n = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: r,
        } = e)
      : (n = e ?? 1 / 0),
    Ba({
      connector: () => new Bo(n, t, r),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function rD(e) {
  return pe((t, r) => e <= r);
}
function li(...e) {
  let t = it(e);
  return x((r, n) => {
    (t ? Ut(e, r, t) : Ut(e, r)).subscribe(n);
  });
}
function Ce(e, t) {
  return x((r, n) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && n.complete();
    r.subscribe(
      M(
        n,
        (c) => {
          o?.unsubscribe();
          let u = 0,
            l = i++;
          k(e(c, l)).subscribe(
            (o = M(
              n,
              (d) => n.next(t ? t(c, d, l, u++) : d),
              () => {
                (o = null), a();
              }
            ))
          );
        },
        () => {
          (s = !0), a();
        }
      )
    );
  });
}
function Ha(e) {
  return x((t, r) => {
    k(e).subscribe(M(r, () => r.complete(), an)), !r.closed && t.subscribe(r);
  });
}
function oD(e, t = !1) {
  return x((r, n) => {
    let o = 0;
    r.subscribe(
      M(n, (i) => {
        let s = e(i, o++);
        (s || t) && n.next(i), !s && n.complete();
      })
    );
  });
}
function ne(e, t, r) {
  let n = b(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n
    ? x((o, i) => {
        var s;
        (s = n.subscribe) === null || s === void 0 || s.call(n);
        let a = !0;
        o.subscribe(
          M(
            i,
            (c) => {
              var u;
              (u = n.next) === null || u === void 0 || u.call(n, c), i.next(c);
            },
            () => {
              var c;
              (a = !1),
                (c = n.complete) === null || c === void 0 || c.call(n),
                i.complete();
            },
            (c) => {
              var u;
              (a = !1),
                (u = n.error) === null || u === void 0 || u.call(n, c),
                i.error(c);
            },
            () => {
              var c, u;
              a && ((c = n.unsubscribe) === null || c === void 0 || c.call(n)),
                (u = n.finalize) === null || u === void 0 || u.call(n);
            }
          )
        );
      })
    : Ie;
}
var Ih = "https://g.co/ng/security#xss",
  y = class extends Error {
    constructor(t, r) {
      super(Zi(t, r)), (this.code = t);
    }
  };
function Zi(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function z(e) {
  for (let t in e) if (e[t] === z) return t;
  throw Error("Could not find renamed property on target object.");
}
function sD(e, t) {
  for (let r in t) t.hasOwnProperty(r) && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Te(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(Te).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let r = t.indexOf(`
`);
  return r === -1 ? t : t.substring(0, r);
}
function sc(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
    ? e
    : e + " " + t;
}
var aD = z({ __forward_ref__: z });
function Ch(e) {
  return (
    (e.__forward_ref__ = Ch),
    (e.toString = function () {
      return Te(this());
    }),
    e
  );
}
function Me(e) {
  return bh(e) ? e() : e;
}
function bh(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(aD) && e.__forward_ref__ === Ch
  );
}
function Mh(e) {
  return e && !!e.ɵproviders;
}
var cD = z({ ɵcmp: z }),
  uD = z({ ɵdir: z }),
  lD = z({ ɵpipe: z }),
  dD = z({ ɵmod: z }),
  bi = z({ ɵfac: z }),
  Or = z({ __NG_ELEMENT_ID__: z }),
  Sf = z({ __NG_ENV_ID__: z });
function gn(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function fD(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : gn(e);
}
function hD(e, t) {
  let r = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new y(-200, `Circular dependency in DI detected for ${e}${r}`);
}
function wu(e, t) {
  throw new y(-201, !1);
}
function pD(e, t) {
  e == null && Eu(t, e, null, "!=");
}
function Eu(e, t, r, n) {
  throw new Error(
    `ASSERTION ERROR: ${e}` +
      (n == null ? "" : ` [Expected=> ${r} ${n} ${t} <=Actual]`)
  );
}
function w(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function mt(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Yi(e) {
  return xf(e, Sh) || xf(e, xh);
}
function Th(e) {
  return Yi(e) !== null;
}
function xf(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function gD(e) {
  let t = e && (e[Sh] || e[xh]);
  return t || null;
}
function Af(e) {
  return e && (e.hasOwnProperty(_f) || e.hasOwnProperty(mD)) ? e[_f] : null;
}
var Sh = z({ ɵprov: z }),
  _f = z({ ɵinj: z }),
  xh = z({ ngInjectableDef: z }),
  mD = z({ ngInjectorDef: z }),
  F = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(F || {}),
  ac;
function Ah() {
  return ac;
}
function Ae(e) {
  let t = ac;
  return (ac = e), t;
}
function _h(e, t, r) {
  let n = Yi(e);
  if (n && n.providedIn == "root")
    return n.value === void 0 ? (n.value = n.factory()) : n.value;
  if (r & F.Optional) return null;
  if (t !== void 0) return t;
  wu(e, "Injector");
}
var X = globalThis;
var E = class {
  constructor(t, r) {
    (this._desc = t),
      (this.ngMetadataName = "InjectionToken"),
      (this.ɵprov = void 0),
      typeof r == "number"
        ? (this.__NG_ELEMENT_ID__ = r)
        : r !== void 0 &&
          (this.ɵprov = w({
            token: this,
            providedIn: r.providedIn || "root",
            factory: r.factory,
          }));
  }
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
};
var vD = {},
  kr = vD,
  cc = "__NG_DI_FLAG__",
  Mi = "ngTempTokenPath",
  yD = "ngTokenPath",
  DD = /\n/gm,
  wD = "\u0275",
  Nf = "__source",
  Yn;
function ED() {
  return Yn;
}
function zt(e) {
  let t = Yn;
  return (Yn = e), t;
}
function ID(e, t = F.Default) {
  if (Yn === void 0) throw new y(-203, !1);
  return Yn === null
    ? _h(e, void 0, t)
    : Yn.get(e, t & F.Optional ? null : void 0, t);
}
function C(e, t = F.Default) {
  return (Ah() || ID)(Me(e), t);
}
function g(e, t = F.Default) {
  return C(e, Qi(t));
}
function Qi(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function uc(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = Me(e[r]);
    if (Array.isArray(n)) {
      if (n.length === 0) throw new y(900, !1);
      let o,
        i = F.Default;
      for (let s = 0; s < n.length; s++) {
        let a = n[s],
          c = CD(a);
        typeof c == "number" ? (c === -1 ? (o = a.token) : (i |= c)) : (o = a);
      }
      t.push(C(o, i));
    } else t.push(C(n));
  }
  return t;
}
function Nh(e, t) {
  return (e[cc] = t), (e.prototype[cc] = t), e;
}
function CD(e) {
  return e[cc];
}
function bD(e, t, r, n) {
  let o = e[Mi];
  throw (
    (t[Nf] && o.unshift(t[Nf]),
    (e.message = MD(
      `
` + e.message,
      o,
      r,
      n
    )),
    (e[yD] = o),
    (e[Mi] = null),
    e)
  );
}
function MD(e, t, r, n = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == wD
      ? e.slice(2)
      : e;
  let o = Te(t);
  if (Array.isArray(t)) o = t.map(Te).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : Te(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${r}${n ? "(" + n + ")" : ""}[${o}]: ${e.replace(
    DD,
    `
  `
  )}`;
}
function qr(e) {
  return { toString: e }.toString();
}
var Rh = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Rh || {}),
  dt = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(dt || {}),
  Kn = {},
  _e = [],
  ce = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(ce || {});
function Oh(e, t, r) {
  let n = e.length;
  for (;;) {
    let o = e.indexOf(t, r);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === n || e.charCodeAt(o + i) <= 32) return o;
    }
    r = o + 1;
  }
}
function lc(e, t, r) {
  let n = 0;
  for (; n < r.length; ) {
    let o = r[n];
    if (typeof o == "number") {
      if (o !== 0) break;
      n++;
      let i = r[n++],
        s = r[n++],
        a = r[n++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = r[++n];
      TD(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), n++;
    }
  }
  return n;
}
function Ph(e) {
  return e === 3 || e === 4 || e === 6;
}
function TD(e) {
  return e.charCodeAt(0) === 64;
}
function Lr(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let r = -1;
      for (let n = 0; n < t.length; n++) {
        let o = t[n];
        typeof o == "number"
          ? (r = o)
          : r === 0 ||
            (r === -1 || r === 2
              ? Rf(e, r, o, null, t[++n])
              : Rf(e, r, o, null, null));
      }
    }
  return e;
}
function Rf(e, t, r, n, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === r) {
      if (n === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (n === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, n !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, r),
    n !== null && e.splice(i++, 0, n),
    o !== null && e.splice(i++, 0, o);
}
var Fh = "ng-template";
function SD(e, t, r) {
  let n = 0,
    o = !0;
  for (; n < e.length; ) {
    let i = e[n++];
    if (typeof i == "string" && o) {
      let s = e[n++];
      if (r && i === "class" && Oh(s.toLowerCase(), t, 0) !== -1) return !0;
    } else if (i === 1) {
      for (; n < e.length && typeof (i = e[n++]) == "string"; )
        if (i.toLowerCase() === t) return !0;
      return !1;
    } else typeof i == "number" && (o = !1);
  }
  return !1;
}
function kh(e) {
  return e.type === 4 && e.value !== Fh;
}
function xD(e, t, r) {
  let n = e.type === 4 && !r ? Fh : e.value;
  return t === n;
}
function AD(e, t, r) {
  let n = 4,
    o = e.attrs || [],
    i = RD(o),
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
      if (!s && !Je(n) && !Je(c)) return !1;
      if (s && Je(c)) continue;
      (s = !1), (n = c | (n & 1));
      continue;
    }
    if (!s)
      if (n & 4) {
        if (
          ((n = 2 | (n & 1)),
          (c !== "" && !xD(e, c, r)) || (c === "" && t.length === 1))
        ) {
          if (Je(n)) return !1;
          s = !0;
        }
      } else {
        let u = n & 8 ? c : t[++a];
        if (n & 8 && e.attrs !== null) {
          if (!SD(e.attrs, u, r)) {
            if (Je(n)) return !1;
            s = !0;
          }
          continue;
        }
        let l = n & 8 ? "class" : c,
          d = _D(l, o, kh(e), r);
        if (d === -1) {
          if (Je(n)) return !1;
          s = !0;
          continue;
        }
        if (u !== "") {
          let f;
          d > i ? (f = "") : (f = o[d + 1].toLowerCase());
          let h = n & 8 ? f : null;
          if ((h && Oh(h, u, 0) !== -1) || (n & 2 && u !== f)) {
            if (Je(n)) return !1;
            s = !0;
          }
        }
      }
  }
  return Je(n) || s;
}
function Je(e) {
  return (e & 1) === 0;
}
function _D(e, t, r, n) {
  if (t === null) return -1;
  let o = 0;
  if (n || !r) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return OD(t, e);
}
function Lh(e, t, r = !1) {
  for (let n = 0; n < t.length; n++) if (AD(e, t[n], r)) return !0;
  return !1;
}
function ND(e) {
  let t = e.attrs;
  if (t != null) {
    let r = t.indexOf(5);
    if (!(r & 1)) return t[r + 1];
  }
  return null;
}
function RD(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (Ph(r)) return t;
  }
  return e.length;
}
function OD(e, t) {
  let r = e.indexOf(4);
  if (r > -1)
    for (r++; r < e.length; ) {
      let n = e[r];
      if (typeof n == "number") return -1;
      if (n === t) return r;
      r++;
    }
  return -1;
}
function PD(e, t) {
  e: for (let r = 0; r < t.length; r++) {
    let n = t[r];
    if (e.length === n.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== n[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Of(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function FD(e) {
  let t = e[0],
    r = 1,
    n = 2,
    o = "",
    i = !1;
  for (; r < e.length; ) {
    let s = e[r];
    if (typeof s == "string")
      if (n & 2) {
        let a = e[++r];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else n & 8 ? (o += "." + s) : n & 4 && (o += " " + s);
    else
      o !== "" && !Je(s) && ((t += Of(i, o)), (o = "")),
        (n = s),
        (i = i || !Je(n));
    r++;
  }
  return o !== "" && (t += Of(i, o)), t;
}
function kD(e) {
  return e.map(FD).join(",");
}
function LD(e) {
  let t = [],
    r = [],
    n = 1,
    o = 2;
  for (; n < e.length; ) {
    let i = e[n];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++n]) : o === 8 && r.push(i);
    else {
      if (!Je(o)) break;
      o = i;
    }
    n++;
  }
  return { attrs: t, classes: r };
}
function jh(e) {
  return qr(() => {
    let t = Uh(e),
      r = te(I({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Rh.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || dt.Emulated,
        styles: e.styles || _e,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Bh(r);
    let n = e.dependencies;
    return (
      (r.directiveDefs = Ti(n, !1)), (r.pipeDefs = Ti(n, !0)), (r.id = $D(r)), r
    );
  });
}
function jD(e) {
  return ft(e) || Iu(e);
}
function VD(e) {
  return e !== null;
}
function vt(e) {
  return qr(() => ({
    type: e.type,
    bootstrap: e.bootstrap || _e,
    declarations: e.declarations || _e,
    imports: e.imports || _e,
    exports: e.exports || _e,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function Pf(e, t) {
  if (e == null) return Kn;
  let r = {};
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      let o = e[n],
        i,
        s,
        a = ce.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((r[i] = a !== ce.None ? [n, a] : n), (t[i] = s)) : (r[i] = n);
    }
  return r;
}
function Fe(e) {
  return qr(() => {
    let t = Uh(e);
    return Bh(t), t;
  });
}
function Ki(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function ft(e) {
  return e[cD] || null;
}
function Iu(e) {
  return e[uD] || null;
}
function Cu(e) {
  return e[lD] || null;
}
function Vh(e) {
  let t = ft(e) || Iu(e) || Cu(e);
  return t !== null ? t.standalone : !1;
}
function $h(e, t) {
  let r = e[dD] || null;
  if (!r && t === !0)
    throw new Error(`Type ${Te(e)} does not have '\u0275mod' property.`);
  return r;
}
function Uh(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || Kn,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || _e,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: Pf(e.inputs, t),
    outputs: Pf(e.outputs),
    debugInfo: null,
  };
}
function Bh(e) {
  e.features?.forEach((t) => t(e));
}
function Ti(e, t) {
  if (!e) return null;
  let r = t ? Cu : jD;
  return () => (typeof e == "function" ? e() : e).map((n) => r(n)).filter(VD);
}
function $D(e) {
  let t = 0,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of r) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
var yt = 0,
  S = 1,
  _ = 2,
  ue = 3,
  Xe = 4,
  ke = 5,
  Jn = 6,
  jr = 7,
  ve = 8,
  Ue = 9,
  Tt = 10,
  K = 11,
  Vr = 12,
  Ff = 13,
  cr = 14,
  Pe = 15,
  Zr = 16,
  Gn = 17,
  lt = 18,
  Ji = 19,
  Hh = 20,
  Gt = 21,
  za = 22,
  mn = 23,
  ee = 25,
  bu = 1;
var vn = 7,
  Si = 8,
  Xn = 9,
  ye = 10,
  Mu = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Mu || {});
function hn(e) {
  return Array.isArray(e) && typeof e[bu] == "object";
}
function At(e) {
  return Array.isArray(e) && e[bu] === !0;
}
function Tu(e) {
  return (e.flags & 4) !== 0;
}
function Xi(e) {
  return e.componentOffset > -1;
}
function es(e) {
  return (e.flags & 1) === 1;
}
function St(e) {
  return !!e.template;
}
function UD(e) {
  return (e[_] & 512) !== 0;
}
function dc(e) {
  return (e[_] & 256) === 256;
}
function yn(e, t) {
  let r = e.hasOwnProperty(bi);
  return r ? e[bi] : null;
}
var fc = class {
  constructor(t, r, n) {
    (this.previousValue = t), (this.currentValue = r), (this.firstChange = n);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function zh(e, t, r, n) {
  t !== null ? t.applyValueToInputSignal(t, n) : (e[r] = n);
}
function Yt() {
  return Gh;
}
function Gh(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = HD), BD;
}
Yt.ngInherit = !0;
function BD() {
  let e = qh(this),
    t = e?.current;
  if (t) {
    let r = e.previous;
    if (r === Kn) e.previous = t;
    else for (let n in t) r[n] = t[n];
    (e.current = null), this.ngOnChanges(t);
  }
}
function HD(e, t, r, n, o) {
  let i = this.declaredInputs[n],
    s = qh(e) || zD(e, { previous: Kn, current: null }),
    a = s.current || (s.current = {}),
    c = s.previous,
    u = c[i];
  (a[i] = new fc(u && u.currentValue, r, c === Kn)), zh(e, t, o, r);
}
var Wh = "__ngSimpleChanges__";
function qh(e) {
  return e[Wh] || null;
}
function zD(e, t) {
  return (e[Wh] = t);
}
var kf = null;
var ct = function (e, t, r) {
    kf?.(e, t, r);
  },
  Zh = "svg",
  GD = "math",
  WD = !1;
function qD() {
  return WD;
}
function ht(e) {
  for (; Array.isArray(e); ) e = e[yt];
  return e;
}
function ZD(e) {
  for (; Array.isArray(e); ) {
    if (typeof e[bu] == "object") return e;
    e = e[yt];
  }
  return null;
}
function Su(e, t) {
  return ht(t[e]);
}
function He(e, t) {
  return ht(t[e.index]);
}
function Yr(e, t) {
  return e.data[t];
}
function xu(e, t) {
  return e[t];
}
function Qt(e, t) {
  let r = t[e];
  return hn(r) ? r : r[yt];
}
function YD(e) {
  return (e[_] & 4) === 4;
}
function Au(e) {
  return (e[_] & 128) === 128;
}
function QD(e) {
  return At(e[ue]);
}
function er(e, t) {
  return t == null ? null : e[t];
}
function Yh(e) {
  e[Gn] = 0;
}
function KD(e) {
  e[_] & 1024 || ((e[_] |= 1024), Au(e) && $r(e));
}
function Qh(e, t) {
  for (; e > 0; ) (t = t[cr]), e--;
  return t;
}
function Kh(e) {
  return e[_] & 9216 || e[mn]?.dirty;
}
function hc(e) {
  Kh(e)
    ? $r(e)
    : e[_] & 64 &&
      (qD()
        ? ((e[_] |= 1024), $r(e))
        : e[Tt].changeDetectionScheduler?.notify());
}
function $r(e) {
  e[Tt].changeDetectionScheduler?.notify();
  let t = Ur(e);
  for (; t !== null && !(t[_] & 8192 || ((t[_] |= 8192), !Au(t))); ) t = Ur(t);
}
function ts(e, t) {
  if ((e[_] & 256) === 256) throw new y(911, !1);
  e[Gt] === null && (e[Gt] = []), e[Gt].push(t);
}
function _u(e, t) {
  if (e[Gt] === null) return;
  let r = e[Gt].indexOf(t);
  r !== -1 && e[Gt].splice(r, 1);
}
function Ur(e) {
  let t = e[ue];
  return At(t) ? t[ue] : t;
}
var N = { lFrame: op(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
function JD() {
  return N.lFrame.elementDepthCount;
}
function XD() {
  N.lFrame.elementDepthCount++;
}
function ew() {
  N.lFrame.elementDepthCount--;
}
function Jh() {
  return N.bindingsEnabled;
}
function Xh() {
  return N.skipHydrationRootTNode !== null;
}
function tw(e) {
  return N.skipHydrationRootTNode === e;
}
function nw() {
  N.skipHydrationRootTNode = null;
}
function A() {
  return N.lFrame.lView;
}
function Q() {
  return N.lFrame.tView;
}
function kk(e) {
  return (N.lFrame.contextLView = e), e[ve];
}
function Lk(e) {
  return (N.lFrame.contextLView = null), e;
}
function re() {
  let e = ep();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function ep() {
  return N.lFrame.currentTNode;
}
function rw() {
  let e = N.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function bn(e, t) {
  let r = N.lFrame;
  (r.currentTNode = e), (r.isParent = t);
}
function Nu() {
  return N.lFrame.isParent;
}
function Ru() {
  N.lFrame.isParent = !1;
}
function ow() {
  return N.lFrame.contextLView;
}
function Qr() {
  let e = N.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function iw() {
  return N.lFrame.bindingIndex;
}
function sw(e) {
  return (N.lFrame.bindingIndex = e);
}
function Mn() {
  return N.lFrame.bindingIndex++;
}
function Ou(e) {
  let t = N.lFrame,
    r = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), r;
}
function aw() {
  return N.lFrame.inI18n;
}
function cw(e, t) {
  let r = N.lFrame;
  (r.bindingIndex = r.bindingRootIndex = e), pc(t);
}
function uw() {
  return N.lFrame.currentDirectiveIndex;
}
function pc(e) {
  N.lFrame.currentDirectiveIndex = e;
}
function Pu(e) {
  let t = N.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function tp() {
  return N.lFrame.currentQueryIndex;
}
function Fu(e) {
  N.lFrame.currentQueryIndex = e;
}
function lw(e) {
  let t = e[S];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ke] : null;
}
function np(e, t, r) {
  if (r & F.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(r & F.Host); )
      if (((o = lw(i)), o === null || ((i = i[cr]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let n = (N.lFrame = rp());
  return (n.currentTNode = t), (n.lView = e), !0;
}
function ku(e) {
  let t = rp(),
    r = e[S];
  (N.lFrame = t),
    (t.currentTNode = r.firstChild),
    (t.lView = e),
    (t.tView = r),
    (t.contextLView = e),
    (t.bindingIndex = r.bindingStartIndex),
    (t.inI18n = !1);
}
function rp() {
  let e = N.lFrame,
    t = e === null ? null : e.child;
  return t === null ? op(e) : t;
}
function op(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function ip() {
  let e = N.lFrame;
  return (N.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var sp = ip;
function Lu() {
  let e = ip();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function dw(e) {
  return (N.lFrame.contextLView = Qh(e, N.lFrame.contextLView))[ve];
}
function _t() {
  return N.lFrame.selectedIndex;
}
function Dn(e) {
  N.lFrame.selectedIndex = e;
}
function Kr() {
  let e = N.lFrame;
  return Yr(e.tView, e.selectedIndex);
}
function jk() {
  N.lFrame.currentNamespace = Zh;
}
function Vk() {
  fw();
}
function fw() {
  N.lFrame.currentNamespace = null;
}
function hw() {
  return N.lFrame.currentNamespace;
}
var ap = !0;
function ns() {
  return ap;
}
function rs(e) {
  ap = e;
}
function pw(e, t, r) {
  let { ngOnChanges: n, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (n) {
    let s = Gh(t);
    (r.preOrderHooks ??= []).push(e, s),
      (r.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (r.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((r.preOrderHooks ??= []).push(e, i),
      (r.preOrderCheckHooks ??= []).push(e, i));
}
function os(e, t) {
  for (let r = t.directiveStart, n = t.directiveEnd; r < n; r++) {
    let i = e.data[r].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: c,
        ngAfterViewChecked: u,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-r, s),
      a &&
        ((e.contentHooks ??= []).push(r, a),
        (e.contentCheckHooks ??= []).push(r, a)),
      c && (e.viewHooks ??= []).push(-r, c),
      u &&
        ((e.viewHooks ??= []).push(r, u), (e.viewCheckHooks ??= []).push(r, u)),
      l != null && (e.destroyHooks ??= []).push(r, l);
  }
}
function yi(e, t, r) {
  cp(e, t, 3, r);
}
function Di(e, t, r, n) {
  (e[_] & 3) === r && cp(e, t, r, n);
}
function Ga(e, t) {
  let r = e[_];
  (r & 3) === t && ((r &= 16383), (r += 1), (e[_] = r));
}
function cp(e, t, r, n) {
  let o = n !== void 0 ? e[Gn] & 65535 : 0,
    i = n ?? -1,
    s = t.length - 1,
    a = 0;
  for (let c = o; c < s; c++)
    if (typeof t[c + 1] == "number") {
      if (((a = t[c]), n != null && a >= n)) break;
    } else
      t[c] < 0 && (e[Gn] += 65536),
        (a < i || i == -1) &&
          (gw(e, r, t, c), (e[Gn] = (e[Gn] & 4294901760) + c + 2)),
        c++;
}
function Lf(e, t) {
  ct(4, e, t);
  let r = ie(null);
  try {
    t.call(e);
  } finally {
    ie(r), ct(5, e, t);
  }
}
function gw(e, t, r, n) {
  let o = r[n] < 0,
    i = r[n + 1],
    s = o ? -r[n] : r[n],
    a = e[s];
  o
    ? e[_] >> 14 < e[Gn] >> 16 &&
      (e[_] & 3) === t &&
      ((e[_] += 16384), Lf(a, i))
    : Lf(a, i);
}
var Qn = -1,
  wn = class {
    constructor(t, r, n) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = r),
        (this.injectImpl = n);
    }
  };
function mw(e) {
  return e instanceof wn;
}
function vw(e) {
  return (e.flags & 8) !== 0;
}
function yw(e) {
  return (e.flags & 16) !== 0;
}
function up(e) {
  return e !== Qn;
}
function xi(e) {
  return e & 32767;
}
function Dw(e) {
  return e >> 16;
}
function Ai(e, t) {
  let r = Dw(e),
    n = t;
  for (; r > 0; ) (n = n[cr]), r--;
  return n;
}
var gc = !0;
function _i(e) {
  let t = gc;
  return (gc = e), t;
}
var ww = 256,
  lp = ww - 1,
  dp = 5,
  Ew = 0,
  ut = {};
function Iw(e, t, r) {
  let n;
  typeof r == "string"
    ? (n = r.charCodeAt(0) || 0)
    : r.hasOwnProperty(Or) && (n = r[Or]),
    n == null && (n = r[Or] = Ew++);
  let o = n & lp,
    i = 1 << o;
  t.data[e + (o >> dp)] |= i;
}
function Ni(e, t) {
  let r = fp(e, t);
  if (r !== -1) return r;
  let n = t[S];
  n.firstCreatePass &&
    ((e.injectorIndex = t.length),
    Wa(n.data, e),
    Wa(t, null),
    Wa(n.blueprint, null));
  let o = ju(e, t),
    i = e.injectorIndex;
  if (up(o)) {
    let s = xi(o),
      a = Ai(o, t),
      c = a[S].data;
    for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
  }
  return (t[i + 8] = o), i;
}
function Wa(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function fp(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function ju(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let r = 0,
    n = null,
    o = t;
  for (; o !== null; ) {
    if (((n = vp(o)), n === null)) return Qn;
    if ((r++, (o = o[cr]), n.injectorIndex !== -1))
      return n.injectorIndex | (r << 16);
  }
  return Qn;
}
function mc(e, t, r) {
  Iw(e, t, r);
}
function Cw(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let r = e.attrs;
  if (r) {
    let n = r.length,
      o = 0;
    for (; o < n; ) {
      let i = r[o];
      if (Ph(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < n && typeof r[o] == "string"; ) o++;
      else {
        if (i === t) return r[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function hp(e, t, r) {
  if (r & F.Optional || e !== void 0) return e;
  wu(t, "NodeInjector");
}
function pp(e, t, r, n) {
  if (
    (r & F.Optional && n === void 0 && (n = null), !(r & (F.Self | F.Host)))
  ) {
    let o = e[Ue],
      i = Ae(void 0);
    try {
      return o ? o.get(t, n, r & F.Optional) : _h(t, n, r & F.Optional);
    } finally {
      Ae(i);
    }
  }
  return hp(n, t, r);
}
function gp(e, t, r, n = F.Default, o) {
  if (e !== null) {
    if (t[_] & 2048 && !(n & F.Self)) {
      let s = Sw(e, t, r, n, ut);
      if (s !== ut) return s;
    }
    let i = mp(e, t, r, n, ut);
    if (i !== ut) return i;
  }
  return pp(t, r, n, o);
}
function mp(e, t, r, n, o) {
  let i = Mw(r);
  if (typeof i == "function") {
    if (!np(t, e, n)) return n & F.Host ? hp(o, r, n) : pp(t, r, n, o);
    try {
      let s;
      if (((s = i(n)), s == null && !(n & F.Optional))) wu(r);
      else return s;
    } finally {
      sp();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = fp(e, t),
      c = Qn,
      u = n & F.Host ? t[Pe][ke] : null;
    for (
      (a === -1 || n & F.SkipSelf) &&
      ((c = a === -1 ? ju(e, t) : t[a + 8]),
      c === Qn || !Vf(n, !1)
        ? (a = -1)
        : ((s = t[S]), (a = xi(c)), (t = Ai(c, t))));
      a !== -1;

    ) {
      let l = t[S];
      if (jf(i, a, l.data)) {
        let d = bw(a, t, r, s, n, u);
        if (d !== ut) return d;
      }
      (c = t[a + 8]),
        c !== Qn && Vf(n, t[S].data[a + 8] === u) && jf(i, a, t)
          ? ((s = l), (a = xi(c)), (t = Ai(c, t)))
          : (a = -1);
    }
  }
  return o;
}
function bw(e, t, r, n, o, i) {
  let s = t[S],
    a = s.data[e + 8],
    c = n == null ? Xi(a) && gc : n != s && (a.type & 3) !== 0,
    u = o & F.Host && i === a,
    l = wi(a, s, r, c, u);
  return l !== null ? En(t, s, l, a) : ut;
}
function wi(e, t, r, n, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    c = e.directiveStart,
    u = e.directiveEnd,
    l = i >> 20,
    d = n ? a : a + l,
    f = o ? a + l : u;
  for (let h = d; h < f; h++) {
    let p = s[h];
    if ((h < c && r === p) || (h >= c && p.type === r)) return h;
  }
  if (o) {
    let h = s[c];
    if (h && St(h) && h.type === r) return c;
  }
  return null;
}
function En(e, t, r, n) {
  let o = e[r],
    i = t.data;
  if (mw(o)) {
    let s = o;
    s.resolving && hD(fD(i[r]));
    let a = _i(s.canSeeViewProviders);
    s.resolving = !0;
    let c,
      u = s.injectImpl ? Ae(s.injectImpl) : null,
      l = np(e, n, F.Default);
    try {
      (o = e[r] = s.factory(void 0, i, e, n)),
        t.firstCreatePass && r >= n.directiveStart && pw(r, i[r], t);
    } finally {
      u !== null && Ae(u), _i(a), (s.resolving = !1), sp();
    }
  }
  return o;
}
function Mw(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Or) ? e[Or] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & lp : Tw) : t;
}
function jf(e, t, r) {
  let n = 1 << e;
  return !!(r[t + (e >> dp)] & n);
}
function Vf(e, t) {
  return !(e & F.Self) && !(e & F.Host && t);
}
var pn = class {
  constructor(t, r) {
    (this._tNode = t), (this._lView = r);
  }
  get(t, r, n) {
    return gp(this._tNode, this._lView, t, Qi(n), r);
  }
};
function Tw() {
  return new pn(re(), A());
}
function Vu(e) {
  return qr(() => {
    let t = e.prototype.constructor,
      r = t[bi] || vc(t),
      n = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== n; ) {
      let i = o[bi] || vc(o);
      if (i && i !== r) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function vc(e) {
  return bh(e)
    ? () => {
        let t = vc(Me(e));
        return t && t();
      }
    : yn(e);
}
function Sw(e, t, r, n, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[_] & 2048 && !(s[_] & 512); ) {
    let a = mp(i, s, r, n | F.Self, ut);
    if (a !== ut) return a;
    let c = i.parent;
    if (!c) {
      let u = s[Hh];
      if (u) {
        let l = u.get(r, ut, n);
        if (l !== ut) return l;
      }
      (c = vp(s)), (s = s[cr]);
    }
    i = c;
  }
  return o;
}
function vp(e) {
  let t = e[S],
    r = t.type;
  return r === 2 ? t.declTNode : r === 1 ? e[ke] : null;
}
function $u(e) {
  return Cw(re(), e);
}
var di = "__parameters__";
function xw(e) {
  return function (...r) {
    if (e) {
      let n = e(...r);
      for (let o in n) this[o] = n[o];
    }
  };
}
function yp(e, t, r) {
  return qr(() => {
    let n = xw(t);
    function o(...i) {
      if (this instanceof o) return n.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(c, u, l) {
        let d = c.hasOwnProperty(di)
          ? c[di]
          : Object.defineProperty(c, di, { value: [] })[di];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), c;
      }
    }
    return (
      r && (o.prototype = Object.create(r.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
function Aw(e) {
  let t = X.ng;
  if (t && t.ɵcompilerFacade) return t.ɵcompilerFacade;
  throw new Error("JIT compiler unavailable");
}
function _w(e) {
  return typeof e == "function";
}
function Nw(e, t, r) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) {
    let o = e[n],
      i = t[n];
    if ((r && ((o = r(o)), (i = r(i))), i !== o)) return !1;
  }
  return !0;
}
function Rw(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Uu(e, t) {
  e.forEach((r) => (Array.isArray(r) ? Uu(r, t) : t(r)));
}
function Dp(e, t, r) {
  t >= e.length ? e.push(r) : e.splice(t, 0, r);
}
function Ri(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Ow(e, t) {
  let r = [];
  for (let n = 0; n < e; n++) r.push(t);
  return r;
}
function Pw(e, t, r, n) {
  let o = e.length;
  if (o == t) e.push(r, n);
  else if (o === 1) e.push(n, e[0]), (e[0] = r);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = r), (e[t + 1] = n);
  }
}
function Jr(e, t, r) {
  let n = Xr(e, t);
  return n >= 0 ? (e[n | 1] = r) : ((n = ~n), Pw(e, n, t, r)), n;
}
function qa(e, t) {
  let r = Xr(e, t);
  if (r >= 0) return e[r | 1];
}
function Xr(e, t) {
  return Fw(e, t, 1);
}
function Fw(e, t, r) {
  let n = 0,
    o = e.length >> r;
  for (; o !== n; ) {
    let i = n + ((o - n) >> 1),
      s = e[i << r];
    if (t === s) return i << r;
    s > t ? (o = i) : (n = i + 1);
  }
  return ~(o << r);
}
var eo = Nh(yp("Optional"), 8);
var is = Nh(yp("SkipSelf"), 4);
function kw(e) {
  let t = [],
    r = new Map();
  function n(o) {
    let i = r.get(o);
    if (!i) {
      let s = e(o);
      r.set(o, (i = s.then($w)));
    }
    return i;
  }
  return (
    Oi.forEach((o, i) => {
      let s = [];
      o.templateUrl &&
        s.push(
          n(o.templateUrl).then((u) => {
            o.template = u;
          })
        );
      let a = typeof o.styles == "string" ? [o.styles] : o.styles || [];
      if (((o.styles = a), o.styleUrl && o.styleUrls?.length))
        throw new Error(
          "@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"
        );
      if (o.styleUrls?.length) {
        let u = o.styles.length,
          l = o.styleUrls;
        o.styleUrls.forEach((d, f) => {
          a.push(""),
            s.push(
              n(d).then((h) => {
                (a[u + f] = h),
                  l.splice(l.indexOf(d), 1),
                  l.length == 0 && (o.styleUrls = void 0);
              })
            );
        });
      } else
        o.styleUrl &&
          s.push(
            n(o.styleUrl).then((u) => {
              a.push(u), (o.styleUrl = void 0);
            })
          );
      let c = Promise.all(s).then(() => Uw(i));
      t.push(c);
    }),
    jw(),
    Promise.all(t).then(() => {})
  );
}
var Oi = new Map(),
  Lw = new Set();
function jw() {
  let e = Oi;
  return (Oi = new Map()), e;
}
function Vw() {
  return Oi.size === 0;
}
function $w(e) {
  return typeof e == "string" ? e : e.text();
}
function Uw(e) {
  Lw.delete(e);
}
var tr = new E(""),
  wp = new E("", -1),
  Ep = new E(""),
  Pi = class {
    get(t, r = kr) {
      if (r === kr) {
        let n = new Error(`NullInjectorError: No provider for ${Te(t)}!`);
        throw ((n.name = "NullInjectorError"), n);
      }
      return r;
    }
  };
function ss(e) {
  return { ɵproviders: e };
}
function Bw(...e) {
  return { ɵproviders: Ip(!0, e), ɵfromNgModule: !0 };
}
function Ip(e, ...t) {
  let r = [],
    n = new Set(),
    o,
    i = (s) => {
      r.push(s);
    };
  return (
    Uu(t, (s) => {
      let a = s;
      yc(a, i, [], n) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Cp(o, i),
    r
  );
}
function Cp(e, t) {
  for (let r = 0; r < e.length; r++) {
    let { ngModule: n, providers: o } = e[r];
    Bu(o, (i) => {
      t(i, n);
    });
  }
}
function yc(e, t, r, n) {
  if (((e = Me(e)), !e)) return !1;
  let o = null,
    i = Af(e),
    s = !i && ft(e);
  if (!i && !s) {
    let c = e.ngModule;
    if (((i = Af(c)), i)) o = c;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = n.has(o);
  if (s) {
    if (a) return !1;
    if ((n.add(o), s.dependencies)) {
      let c =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let u of c) yc(u, t, r, n);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      n.add(o);
      let u;
      try {
        Uu(i.imports, (l) => {
          yc(l, t, r, n) && ((u ||= []), u.push(l));
        });
      } finally {
      }
      u !== void 0 && Cp(u, t);
    }
    if (!a) {
      let u = yn(o) || (() => new o());
      t({ provide: o, useFactory: u, deps: _e }, o),
        t({ provide: Ep, useValue: o, multi: !0 }, o),
        t({ provide: tr, useValue: () => C(o), multi: !0 }, o);
    }
    let c = i.providers;
    if (c != null && !a) {
      let u = e;
      Bu(c, (l) => {
        t(l, u);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Bu(e, t) {
  for (let r of e)
    Mh(r) && (r = r.ɵproviders), Array.isArray(r) ? Bu(r, t) : t(r);
}
var Hw = z({ provide: String, useValue: z });
function bp(e) {
  return e !== null && typeof e == "object" && Hw in e;
}
function zw(e) {
  return !!(e && e.useExisting);
}
function Gw(e) {
  return !!(e && e.useFactory);
}
function nr(e) {
  return typeof e == "function";
}
function Ww(e) {
  return !!e.useClass;
}
var as = new E(""),
  Ei = {},
  qw = {},
  Za;
function Hu() {
  return Za === void 0 && (Za = new Pi()), Za;
}
var we = class {},
  Br = class extends we {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, r, n, o) {
      super(),
        (this.parent = r),
        (this.source = n),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        wc(t, (s) => this.processProvider(s)),
        this.records.set(wp, Wn(void 0, this)),
        o.has("environment") && this.records.set(we, Wn(void 0, this));
      let i = this.records.get(as);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(Ep, _e, F.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear();
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let r = zt(this),
        n = Ae(void 0),
        o;
      try {
        return t();
      } finally {
        zt(r), Ae(n);
      }
    }
    get(t, r = kr, n = F.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(Sf))) return t[Sf](this);
      n = Qi(n);
      let o,
        i = zt(this),
        s = Ae(void 0);
      try {
        if (!(n & F.SkipSelf)) {
          let c = this.records.get(t);
          if (c === void 0) {
            let u = Jw(t) && Yi(t);
            u && this.injectableDefInScope(u)
              ? (c = Wn(Dc(t), Ei))
              : (c = null),
              this.records.set(t, c);
          }
          if (c != null) return this.hydrate(t, c);
        }
        let a = n & F.Self ? Hu() : this.parent;
        return (r = n & F.Optional && r === kr ? null : r), a.get(t, r);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[Mi] = a[Mi] || []).unshift(Te(t)), i)) throw a;
          return bD(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        Ae(s), zt(i);
      }
    }
    resolveInjectorInitializers() {
      let t = zt(this),
        r = Ae(void 0),
        n;
      try {
        let o = this.get(tr, _e, F.Self);
        for (let i of o) i();
      } finally {
        zt(t), Ae(r);
      }
    }
    toString() {
      let t = [],
        r = this.records;
      for (let n of r.keys()) t.push(Te(n));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new y(205, !1);
    }
    processProvider(t) {
      t = Me(t);
      let r = nr(t) ? t : Me(t && t.provide),
        n = Yw(t);
      if (!nr(t) && t.multi === !0) {
        let o = this.records.get(r);
        o ||
          ((o = Wn(void 0, Ei, !0)),
          (o.factory = () => uc(o.multi)),
          this.records.set(r, o)),
          (r = t),
          o.multi.push(t);
      }
      this.records.set(r, n);
    }
    hydrate(t, r) {
      return (
        r.value === Ei && ((r.value = qw), (r.value = r.factory())),
        typeof r.value == "object" &&
          r.value &&
          Kw(r.value) &&
          this._ngOnDestroyHooks.add(r.value),
        r.value
      );
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let r = Me(t.providedIn);
      return typeof r == "string"
        ? r === "any" || this.scopes.has(r)
        : this.injectorDefTypes.has(r);
    }
    removeOnDestroy(t) {
      let r = this._onDestroyHooks.indexOf(t);
      r !== -1 && this._onDestroyHooks.splice(r, 1);
    }
  };
function Dc(e) {
  let t = Yi(e),
    r = t !== null ? t.factory : yn(e);
  if (r !== null) return r;
  if (e instanceof E) throw new y(204, !1);
  if (e instanceof Function) return Zw(e);
  throw new y(204, !1);
}
function Zw(e) {
  if (e.length > 0) throw new y(204, !1);
  let r = gD(e);
  return r !== null ? () => r.factory(e) : () => new e();
}
function Yw(e) {
  if (bp(e)) return Wn(void 0, e.useValue);
  {
    let t = Mp(e);
    return Wn(t, Ei);
  }
}
function Mp(e, t, r) {
  let n;
  if (nr(e)) {
    let o = Me(e);
    return yn(o) || Dc(o);
  } else if (bp(e)) n = () => Me(e.useValue);
  else if (Gw(e)) n = () => e.useFactory(...uc(e.deps || []));
  else if (zw(e)) n = () => C(Me(e.useExisting));
  else {
    let o = Me(e && (e.useClass || e.provide));
    if (Qw(e)) n = () => new o(...uc(e.deps));
    else return yn(o) || Dc(o);
  }
  return n;
}
function Wn(e, t, r = !1) {
  return { factory: e, value: t, multi: r ? [] : void 0 };
}
function Qw(e) {
  return !!e.deps;
}
function Kw(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Jw(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof E);
}
function wc(e, t) {
  for (let r of e)
    Array.isArray(r) ? wc(r, t) : r && Mh(r) ? wc(r.ɵproviders, t) : t(r);
}
function et(e, t) {
  e instanceof Br && e.assertNotDestroyed();
  let r,
    n = zt(e),
    o = Ae(void 0);
  try {
    return t();
  } finally {
    zt(n), Ae(o);
  }
}
function Xw(e) {
  if (!Ah() && !ED()) throw new y(-203, !1);
}
function $f(e, t = null, r = null, n) {
  let o = Tp(e, t, r, n);
  return o.resolveInjectorInitializers(), o;
}
function Tp(e, t = null, r = null, n, o = new Set()) {
  let i = [r || _e, Bw(e)];
  return (
    (n = n || (typeof e == "object" ? void 0 : Te(e))),
    new Br(i, t || Hu(), n || null, o)
  );
}
var ze = (() => {
  let t = class t {
    static create(n, o) {
      if (Array.isArray(n)) return $f({ name: "" }, o, n, "");
      {
        let i = n.name ?? "";
        return $f({ name: i }, n.parent, n.providers, i);
      }
    }
  };
  (t.THROW_IF_NOT_FOUND = kr),
    (t.NULL = new Pi()),
    (t.ɵprov = w({ token: t, providedIn: "any", factory: () => C(wp) })),
    (t.__NG_ELEMENT_ID__ = -1);
  let e = t;
  return e;
})();
var Ec;
function Sp(e) {
  Ec = e;
}
function xp() {
  if (Ec !== void 0) return Ec;
  if (typeof document < "u") return document;
  throw new y(210, !1);
}
var cs = new E("", { providedIn: "root", factory: () => eE }),
  eE = "ng",
  zu = new E(""),
  tt = new E("", { providedIn: "platform", factory: () => "unknown" });
var $k = new E(""),
  Gu = new E("", {
    providedIn: "root",
    factory: () =>
      xp().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  }),
  Wu = {
    breakpoints: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    disableImageSizeWarning: !1,
    disableImageLazyLoadWarning: !1,
  },
  Ap = new E("", { providedIn: "root", factory: () => Wu });
function _p(e) {
  return e instanceof Function ? e() : e;
}
function qu(e) {
  return (e ?? g(ze)).get(tt) === "browser";
}
function tE(e) {
  Eu("Must never be called in production mode");
  let r = e[Pe][ve];
  return r && r.constructor ? ft(r.constructor) : null;
}
function nE(e) {
  Eu("Must never be called in production mode");
  let r = tE(e)?.type?.name;
  return r ? ` (used in the '${r}' component template)` : "";
}
function Np(e) {
  return (e.flags & 128) === 128;
}
var pt = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(pt || {}),
  rE = /^>|^->|<!--|-->|--!>|<!-$/g,
  oE = /(<|>)/g,
  iE = "\u200B$1\u200B";
function sE(e) {
  return e.replace(rE, (t) => t.replace(oE, iE));
}
var Rp = new Map(),
  aE = 0;
function cE() {
  return aE++;
}
function uE(e) {
  Rp.set(e[Ji], e);
}
function lE(e) {
  Rp.delete(e[Ji]);
}
var Uf = "__ngContext__";
function Wt(e, t) {
  hn(t) ? ((e[Uf] = t[Ji]), uE(t)) : (e[Uf] = t);
}
var dE;
function Zu(e, t) {
  return dE(e, t);
}
function qn(e, t, r, n, o) {
  if (n != null) {
    let i,
      s = !1;
    At(n) ? (i = n) : hn(n) && ((s = !0), (n = n[yt]));
    let a = ht(n);
    e === 0 && r !== null
      ? o == null
        ? Lp(t, r, a)
        : Fi(t, r, a, o || null, !0)
      : e === 1 && r !== null
      ? Fi(t, r, a, o || null, !0)
      : e === 2
      ? SE(t, a, s)
      : e === 3 && t.destroyNode(a),
      i != null && AE(t, e, i, r, o);
  }
}
function fE(e, t) {
  return e.createText(t);
}
function hE(e, t, r) {
  e.setValue(t, r);
}
function pE(e, t) {
  return e.createComment(sE(t));
}
function Op(e, t, r) {
  return e.createElement(t, r);
}
function gE(e, t) {
  Pp(e, t), (t[yt] = null), (t[ke] = null);
}
function mE(e, t, r, n, o, i) {
  (n[yt] = o), (n[ke] = t), ds(e, n, r, 1, o, i);
}
function Pp(e, t) {
  ds(e, t, t[K], 2, null, null);
}
function vE(e) {
  let t = e[Vr];
  if (!t) return Ya(e[S], e);
  for (; t; ) {
    let r = null;
    if (hn(t)) r = t[Vr];
    else {
      let n = t[ye];
      n && (r = n);
    }
    if (!r) {
      for (; t && !t[Xe] && t !== e; ) hn(t) && Ya(t[S], t), (t = t[ue]);
      t === null && (t = e), hn(t) && Ya(t[S], t), (r = t && t[Xe]);
    }
    t = r;
  }
}
function yE(e, t, r, n) {
  let o = ye + n,
    i = r.length;
  n > 0 && (r[o - 1][Xe] = t),
    n < i - ye
      ? ((t[Xe] = r[o]), Dp(r, ye + n, t))
      : (r.push(t), (t[Xe] = null)),
    (t[ue] = r);
  let s = t[Zr];
  s !== null && r !== s && DE(s, t);
  let a = t[lt];
  a !== null && a.insertView(e), hc(t), (t[_] |= 128);
}
function DE(e, t) {
  let r = e[Xn],
    o = t[ue][ue][Pe];
  t[Pe] !== o && (e[_] |= Mu.HasTransplantedViews),
    r === null ? (e[Xn] = [t]) : r.push(t);
}
function Fp(e, t) {
  let r = e[Xn],
    n = r.indexOf(t);
  r.splice(n, 1);
}
function Hr(e, t) {
  if (e.length <= ye) return;
  let r = ye + t,
    n = e[r];
  if (n) {
    let o = n[Zr];
    o !== null && o !== e && Fp(o, n), t > 0 && (e[r - 1][Xe] = n[Xe]);
    let i = Ri(e, ye + t);
    gE(n[S], n);
    let s = i[lt];
    s !== null && s.detachView(i[S]),
      (n[ue] = null),
      (n[Xe] = null),
      (n[_] &= -129);
  }
  return n;
}
function us(e, t) {
  if (!(t[_] & 256)) {
    let r = t[K];
    r.destroyNode && ds(e, t, r, 3, null, null), vE(t);
  }
}
function Ya(e, t) {
  if (!(t[_] & 256)) {
    (t[_] &= -129),
      (t[_] |= 256),
      t[mn] && Yd(t[mn]),
      EE(e, t),
      wE(e, t),
      t[S].type === 1 && t[K].destroy();
    let r = t[Zr];
    if (r !== null && At(t[ue])) {
      r !== t[ue] && Fp(r, t);
      let n = t[lt];
      n !== null && n.detachView(e);
    }
    lE(t);
  }
}
function wE(e, t) {
  let r = e.cleanup,
    n = t[jr];
  if (r !== null)
    for (let i = 0; i < r.length - 1; i += 2)
      if (typeof r[i] == "string") {
        let s = r[i + 3];
        s >= 0 ? n[s]() : n[-s].unsubscribe(), (i += 2);
      } else {
        let s = n[r[i + 1]];
        r[i].call(s);
      }
  n !== null && (t[jr] = null);
  let o = t[Gt];
  if (o !== null) {
    t[Gt] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function EE(e, t) {
  let r;
  if (e != null && (r = e.destroyHooks) != null)
    for (let n = 0; n < r.length; n += 2) {
      let o = t[r[n]];
      if (!(o instanceof wn)) {
        let i = r[n + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              c = i[s + 1];
            ct(4, a, c);
            try {
              c.call(a);
            } finally {
              ct(5, a, c);
            }
          }
        else {
          ct(4, o, i);
          try {
            i.call(o);
          } finally {
            ct(5, o, i);
          }
        }
      }
    }
}
function kp(e, t, r) {
  return IE(e, t.parent, r);
}
function IE(e, t, r) {
  let n = t;
  for (; n !== null && n.type & 40; ) (t = n), (n = t.parent);
  if (n === null) return r[yt];
  {
    let { componentOffset: o } = n;
    if (o > -1) {
      let { encapsulation: i } = e.data[n.directiveStart + o];
      if (i === dt.None || i === dt.Emulated) return null;
    }
    return He(n, r);
  }
}
function Fi(e, t, r, n, o) {
  e.insertBefore(t, r, n, o);
}
function Lp(e, t, r) {
  e.appendChild(t, r);
}
function Bf(e, t, r, n, o) {
  n !== null ? Fi(e, t, r, n, o) : Lp(e, t, r);
}
function CE(e, t, r, n) {
  e.removeChild(t, r, n);
}
function Yu(e, t) {
  return e.parentNode(t);
}
function bE(e, t) {
  return e.nextSibling(t);
}
function jp(e, t, r) {
  return TE(e, t, r);
}
function ME(e, t, r) {
  return e.type & 40 ? He(e, r) : null;
}
var TE = ME,
  Hf;
function ls(e, t, r, n) {
  let o = kp(e, n, t),
    i = t[K],
    s = n.parent || t[ke],
    a = jp(s, n, t);
  if (o != null)
    if (Array.isArray(r))
      for (let c = 0; c < r.length; c++) Bf(i, o, r[c], a, !1);
    else Bf(i, o, r, a, !1);
  Hf !== void 0 && Hf(i, n, t, r, o);
}
function Ii(e, t) {
  if (t !== null) {
    let r = t.type;
    if (r & 3) return He(t, e);
    if (r & 4) return Ic(-1, e[t.index]);
    if (r & 8) {
      let n = t.child;
      if (n !== null) return Ii(e, n);
      {
        let o = e[t.index];
        return At(o) ? Ic(-1, o) : ht(o);
      }
    } else {
      if (r & 32) return Zu(t, e)() || ht(e[t.index]);
      {
        let n = Vp(e, t);
        if (n !== null) {
          if (Array.isArray(n)) return n[0];
          let o = Ur(e[Pe]);
          return Ii(o, n);
        } else return Ii(e, t.next);
      }
    }
  }
  return null;
}
function Vp(e, t) {
  if (t !== null) {
    let n = e[Pe][ke],
      o = t.projection;
    return n.projection[o];
  }
  return null;
}
function Ic(e, t) {
  let r = ye + e + 1;
  if (r < t.length) {
    let n = t[r],
      o = n[S].firstChild;
    if (o !== null) return Ii(n, o);
  }
  return t[vn];
}
function SE(e, t, r) {
  let n = Yu(e, t);
  n && CE(e, n, t, r);
}
function Qu(e, t, r, n, o, i, s) {
  for (; r != null; ) {
    let a = n[r.index],
      c = r.type;
    if (
      (s && t === 0 && (a && Wt(ht(a), n), (r.flags |= 2)),
      (r.flags & 32) !== 32)
    )
      if (c & 8) Qu(e, t, r.child, n, o, i, !1), qn(t, e, o, a, i);
      else if (c & 32) {
        let u = Zu(r, n),
          l;
        for (; (l = u()); ) qn(t, e, o, l, i);
        qn(t, e, o, a, i);
      } else c & 16 ? $p(e, t, n, r, o, i) : qn(t, e, o, a, i);
    r = s ? r.projectionNext : r.next;
  }
}
function ds(e, t, r, n, o, i) {
  Qu(r, n, e.firstChild, t, o, i, !1);
}
function xE(e, t, r) {
  let n = t[K],
    o = kp(e, r, t),
    i = r.parent || t[ke],
    s = jp(i, r, t);
  $p(n, 0, t, r, o, s);
}
function $p(e, t, r, n, o, i) {
  let s = r[Pe],
    c = s[ke].projection[n.projection];
  if (Array.isArray(c))
    for (let u = 0; u < c.length; u++) {
      let l = c[u];
      qn(t, e, o, l, i);
    }
  else {
    let u = c,
      l = s[ue];
    Np(n) && (u.flags |= 128), Qu(e, t, u, l, o, i, !0);
  }
}
function AE(e, t, r, n, o) {
  let i = r[vn],
    s = ht(r);
  i !== s && qn(t, e, n, i, o);
  for (let a = ye; a < r.length; a++) {
    let c = r[a];
    ds(c[S], c, e, t, n, i);
  }
}
function _E(e, t, r, n, o) {
  if (t) o ? e.addClass(r, n) : e.removeClass(r, n);
  else {
    let i = n.indexOf("-") === -1 ? void 0 : pt.DashCase;
    o == null
      ? e.removeStyle(r, n, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= pt.Important)),
        e.setStyle(r, n, o, i));
  }
}
function NE(e, t, r) {
  e.setAttribute(t, "style", r);
}
function Up(e, t, r) {
  r === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", r);
}
function Bp(e, t, r) {
  let { mergedAttrs: n, classes: o, styles: i } = r;
  n !== null && lc(e, t, n),
    o !== null && Up(e, t, o),
    i !== null && NE(e, t, i);
}
var fi;
function RE() {
  if (fi === void 0 && ((fi = null), X.trustedTypes))
    try {
      fi = X.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return fi;
}
function fs(e) {
  return RE()?.createHTML(e) || e;
}
var hi;
function Hp() {
  if (hi === void 0 && ((hi = null), X.trustedTypes))
    try {
      hi = X.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return hi;
}
function zf(e) {
  return Hp()?.createHTML(e) || e;
}
function Gf(e) {
  return Hp()?.createScriptURL(e) || e;
}
var xt = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ih})`;
    }
  },
  Cc = class extends xt {
    getTypeName() {
      return "HTML";
    }
  },
  bc = class extends xt {
    getTypeName() {
      return "Style";
    }
  },
  Mc = class extends xt {
    getTypeName() {
      return "Script";
    }
  },
  Tc = class extends xt {
    getTypeName() {
      return "URL";
    }
  },
  Sc = class extends xt {
    getTypeName() {
      return "ResourceURL";
    }
  };
function Ne(e) {
  return e instanceof xt ? e.changingThisBreaksApplicationSecurity : e;
}
function Nt(e, t) {
  let r = OE(e);
  if (r != null && r !== t) {
    if (r === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${r} (see ${Ih})`);
  }
  return r === t;
}
function OE(e) {
  return (e instanceof xt && e.getTypeName()) || null;
}
function zp(e) {
  return new Cc(e);
}
function Gp(e) {
  return new bc(e);
}
function Wp(e) {
  return new Mc(e);
}
function qp(e) {
  return new Tc(e);
}
function Zp(e) {
  return new Sc(e);
}
function PE(e) {
  let t = new Ac(e);
  return FE() ? new xc(t) : t;
}
var xc = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let r = new window.DOMParser().parseFromString(fs(t), "text/html").body;
        return r === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (r.removeChild(r.firstChild), r);
      } catch {
        return null;
      }
    }
  },
  Ac = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert"
          ));
    }
    getInertBodyElement(t) {
      let r = this.inertDocument.createElement("template");
      return (r.innerHTML = fs(t)), r;
    }
  };
function FE() {
  try {
    return !!new window.DOMParser().parseFromString(fs(""), "text/html");
  } catch {
    return !1;
  }
}
var kE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function hs(e) {
  return (e = String(e)), e.match(kE) ? e : "unsafe:" + e;
}
function Rt(e) {
  let t = {};
  for (let r of e.split(",")) t[r] = !0;
  return t;
}
function to(...e) {
  let t = {};
  for (let r of e) for (let n in r) r.hasOwnProperty(n) && (t[n] = !0);
  return t;
}
var Yp = Rt("area,br,col,hr,img,wbr"),
  Qp = Rt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  Kp = Rt("rp,rt"),
  LE = to(Kp, Qp),
  jE = to(
    Qp,
    Rt(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
    )
  ),
  VE = to(
    Kp,
    Rt(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
    )
  ),
  Wf = to(Yp, jE, VE, LE),
  Jp = Rt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  $E = Rt(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
  ),
  UE = Rt(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
  ),
  BE = to(Jp, $E, UE),
  HE = Rt("script,style,template"),
  _c = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let r = t.firstChild,
        n = !0;
      for (; r; ) {
        if (
          (r.nodeType === Node.ELEMENT_NODE
            ? (n = this.startElement(r))
            : r.nodeType === Node.TEXT_NODE
            ? this.chars(r.nodeValue)
            : (this.sanitizedSomething = !0),
          n && r.firstChild)
        ) {
          r = r.firstChild;
          continue;
        }
        for (; r; ) {
          r.nodeType === Node.ELEMENT_NODE && this.endElement(r);
          let o = this.checkClobberedElement(r, r.nextSibling);
          if (o) {
            r = o;
            break;
          }
          r = this.checkClobberedElement(r, r.parentNode);
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let r = t.nodeName.toLowerCase();
      if (!Wf.hasOwnProperty(r))
        return (this.sanitizedSomething = !0), !HE.hasOwnProperty(r);
      this.buf.push("<"), this.buf.push(r);
      let n = t.attributes;
      for (let o = 0; o < n.length; o++) {
        let i = n.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!BE.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let c = i.value;
        Jp[a] && (c = hs(c)), this.buf.push(" ", s, '="', qf(c), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let r = t.nodeName.toLowerCase();
      Wf.hasOwnProperty(r) &&
        !Yp.hasOwnProperty(r) &&
        (this.buf.push("</"), this.buf.push(r), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(qf(t));
    }
    checkClobberedElement(t, r) {
      if (
        r &&
        (t.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
          Node.DOCUMENT_POSITION_CONTAINED_BY
      )
        throw new Error(
          `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`
        );
      return r;
    }
  },
  zE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  GE = /([^\#-~ |!])/g;
function qf(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(zE, function (t) {
      let r = t.charCodeAt(0),
        n = t.charCodeAt(1);
      return "&#" + ((r - 55296) * 1024 + (n - 56320) + 65536) + ";";
    })
    .replace(GE, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var pi;
function Ku(e, t) {
  let r = null;
  try {
    pi = pi || PE(e);
    let n = t ? String(t) : "";
    r = pi.getInertBodyElement(n);
    let o = 5,
      i = n;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable"
        );
      o--, (n = i), (i = r.innerHTML), (r = pi.getInertBodyElement(n));
    } while (n !== i);
    let a = new _c().sanitizeChildren(Zf(r) || r);
    return fs(a);
  } finally {
    if (r) {
      let n = Zf(r) || r;
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    }
  }
}
function Zf(e) {
  return "content" in e && WE(e) ? e.content : null;
}
function WE(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var nt = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(nt || {});
function Uk(e) {
  let t = Ju();
  return t
    ? zf(t.sanitize(nt.HTML, e) || "")
    : Nt(e, "HTML")
    ? zf(Ne(e))
    : Ku(xp(), gn(e));
}
function qE(e) {
  let t = Ju();
  return t ? t.sanitize(nt.URL, e) || "" : Nt(e, "URL") ? Ne(e) : hs(gn(e));
}
function ZE(e) {
  let t = Ju();
  if (t) return Gf(t.sanitize(nt.RESOURCE_URL, e) || "");
  if (Nt(e, "ResourceURL")) return Gf(Ne(e));
  throw new y(904, !1);
}
function YE(e, t) {
  return (t === "src" &&
    (e === "embed" ||
      e === "frame" ||
      e === "iframe" ||
      e === "media" ||
      e === "script")) ||
    (t === "href" && (e === "base" || e === "link"))
    ? ZE
    : qE;
}
function Xp(e, t, r) {
  return YE(t, r)(e);
}
function Ju() {
  let e = A();
  return e && e[Tt].sanitizer;
}
var Nc = class {};
var QE = "h",
  KE = "b";
var JE = () => null;
function Xu(e, t, r = !1) {
  return JE(e, t, r);
}
var Rc = class {},
  ki = class {};
function XE(e) {
  let t = Error(`No component factory found for ${Te(e)}.`);
  return (t[eI] = e), t;
}
var eI = "ngComponent";
var Oc = class {
    resolveComponentFactory(t) {
      throw XE(t);
    }
  },
  ps = (() => {
    let t = class t {};
    t.NULL = new Oc();
    let e = t;
    return e;
  })();
function tI() {
  return ur(re(), A());
}
function ur(e, t) {
  return new Ge(He(e, t));
}
var Ge = (() => {
  let t = class t {
    constructor(n) {
      this.nativeElement = n;
    }
  };
  t.__NG_ELEMENT_ID__ = tI;
  let e = t;
  return e;
})();
function nI(e) {
  return e instanceof Ge ? e.nativeElement : e;
}
var zr = class {},
  Kt = (() => {
    let t = class t {
      constructor() {
        this.destroyNode = null;
      }
    };
    t.__NG_ELEMENT_ID__ = () => rI();
    let e = t;
    return e;
  })();
function rI() {
  let e = A(),
    t = re(),
    r = Qt(t.index, e);
  return (hn(r) ? r : e)[K];
}
var oI = (() => {
    let t = class t {};
    t.ɵprov = w({ token: t, providedIn: "root", factory: () => null });
    let e = t;
    return e;
  })(),
  Qa = {};
function el(e) {
  let t = ie(null);
  try {
    return e();
  } finally {
    ie(t);
  }
}
function eg(e) {
  return tl(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function iI(e, t) {
  if (Array.isArray(e)) for (let r = 0; r < e.length; r++) t(e[r]);
  else {
    let r = e[Symbol.iterator](),
      n;
    for (; !(n = r.next()).done; ) t(n.value);
  }
}
function tl(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
var Pc = class {
    constructor() {}
    supports(t) {
      return eg(t);
    }
    create(t) {
      return new Fc(t);
    }
  },
  sI = (e, t) => t,
  Fc = class {
    constructor(t) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = t || sI);
    }
    forEachItem(t) {
      let r;
      for (r = this._itHead; r !== null; r = r._next) t(r);
    }
    forEachOperation(t) {
      let r = this._itHead,
        n = this._removalsHead,
        o = 0,
        i = null;
      for (; r || n; ) {
        let s = !n || (r && r.currentIndex < Yf(n, o, i)) ? r : n,
          a = Yf(s, o, i),
          c = s.currentIndex;
        if (s === n) o--, (n = n._nextRemoved);
        else if (((r = r._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let u = a - o,
            l = c - o;
          if (u != l) {
            for (let f = 0; f < u; f++) {
              let h = f < i.length ? i[f] : (i[f] = 0),
                p = h + f;
              l <= p && p < u && (i[f] = h + 1);
            }
            let d = s.previousIndex;
            i[d] = l - u;
          }
        }
        a !== c && t(s, a, c);
      }
    }
    forEachPreviousItem(t) {
      let r;
      for (r = this._previousItHead; r !== null; r = r._nextPrevious) t(r);
    }
    forEachAddedItem(t) {
      let r;
      for (r = this._additionsHead; r !== null; r = r._nextAdded) t(r);
    }
    forEachMovedItem(t) {
      let r;
      for (r = this._movesHead; r !== null; r = r._nextMoved) t(r);
    }
    forEachRemovedItem(t) {
      let r;
      for (r = this._removalsHead; r !== null; r = r._nextRemoved) t(r);
    }
    forEachIdentityChange(t) {
      let r;
      for (r = this._identityChangesHead; r !== null; r = r._nextIdentityChange)
        t(r);
    }
    diff(t) {
      if ((t == null && (t = []), !eg(t))) throw new y(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let r = this._itHead,
        n = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            r === null || !Object.is(r.trackById, s)
              ? ((r = this._mismatch(r, i, s, a)), (n = !0))
              : (n && (r = this._verifyReinsertion(r, i, s, a)),
                Object.is(r.item, i) || this._addIdentityChange(r, i)),
            (r = r._next);
      } else
        (o = 0),
          iI(t, (a) => {
            (s = this._trackByFn(o, a)),
              r === null || !Object.is(r.trackById, s)
                ? ((r = this._mismatch(r, a, s, o)), (n = !0))
                : (n && (r = this._verifyReinsertion(r, a, s, o)),
                  Object.is(r.item, a) || this._addIdentityChange(r, a)),
              (r = r._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(r), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, r, n, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(n, null)),
        t !== null
          ? (Object.is(t.item, r) || this._addIdentityChange(t, r),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(n, o)),
            t !== null
              ? (Object.is(t.item, r) || this._addIdentityChange(t, r),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new kc(r, n), i, o))),
        t
      );
    }
    _verifyReinsertion(t, r, n, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(n, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let r = t._next;
        this._addToRemovals(this._unlink(t)), (t = r);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, r, n) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, r, n),
        this._addToMoves(t, n),
        t
      );
    }
    _moveAfter(t, r, n) {
      return (
        this._unlink(t), this._insertAfter(t, r, n), this._addToMoves(t, n), t
      );
    }
    _addAfter(t, r, n) {
      return (
        this._insertAfter(t, r, n),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, r, n) {
      let o = r === null ? this._itHead : r._next;
      return (
        (t._next = o),
        (t._prev = r),
        o === null ? (this._itTail = t) : (o._prev = t),
        r === null ? (this._itHead = t) : (r._next = t),
        this._linkedRecords === null && (this._linkedRecords = new Li()),
        this._linkedRecords.put(t),
        (t.currentIndex = n),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let r = t._prev,
        n = t._next;
      return (
        r === null ? (this._itHead = n) : (r._next = n),
        n === null ? (this._itTail = r) : (n._prev = r),
        t
      );
    }
    _addToMoves(t, r) {
      return (
        t.previousIndex === r ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new Li()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, r) {
      return (
        (t.item = r),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  kc = class {
    constructor(t, r) {
      (this.item = t),
        (this.trackById = r),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  Lc = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, r) {
      let n;
      for (n = this._head; n !== null; n = n._nextDup)
        if ((r === null || r <= n.currentIndex) && Object.is(n.trackById, t))
          return n;
      return null;
    }
    remove(t) {
      let r = t._prevDup,
        n = t._nextDup;
      return (
        r === null ? (this._head = n) : (r._nextDup = n),
        n === null ? (this._tail = r) : (n._prevDup = r),
        this._head === null
      );
    }
  },
  Li = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let r = t.trackById,
        n = this.map.get(r);
      n || ((n = new Lc()), this.map.set(r, n)), n.add(t);
    }
    get(t, r) {
      let n = t,
        o = this.map.get(n);
      return o ? o.get(t, r) : null;
    }
    remove(t) {
      let r = t.trackById;
      return this.map.get(r).remove(t) && this.map.delete(r), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Yf(e, t, r) {
  let n = e.previousIndex;
  if (n === null) return n;
  let o = 0;
  return r && n < r.length && (o = r[n]), n + t + o;
}
var jc = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || tl(t);
    }
    create() {
      return new Vc();
    }
  },
  Vc = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let r;
      for (r = this._mapHead; r !== null; r = r._next) t(r);
    }
    forEachPreviousItem(t) {
      let r;
      for (r = this._previousMapHead; r !== null; r = r._nextPrevious) t(r);
    }
    forEachChangedItem(t) {
      let r;
      for (r = this._changesHead; r !== null; r = r._nextChanged) t(r);
    }
    forEachAddedItem(t) {
      let r;
      for (r = this._additionsHead; r !== null; r = r._nextAdded) t(r);
    }
    forEachRemovedItem(t) {
      let r;
      for (r = this._removalsHead; r !== null; r = r._nextRemoved) t(r);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || tl(t))) throw new y(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let r = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (n, o) => {
          if (r && r.key === o)
            this._maybeAddToChanges(r, n),
              (this._appendAfter = r),
              (r = r._next);
          else {
            let i = this._getOrCreateRecordForKey(o, n);
            r = this._insertBeforeOrAppend(r, i);
          }
        }),
        r)
      ) {
        r._prev && (r._prev._next = null), (this._removalsHead = r);
        for (let n = r; n !== null; n = n._nextRemoved)
          n === this._mapHead && (this._mapHead = null),
            this._records.delete(n.key),
            (n._nextRemoved = n._next),
            (n.previousValue = n.currentValue),
            (n.currentValue = null),
            (n._prev = null),
            (n._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, r) {
      if (t) {
        let n = t._prev;
        return (
          (r._next = t),
          (r._prev = n),
          (t._prev = r),
          n && (n._next = r),
          t === this._mapHead && (this._mapHead = r),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = r), (r._prev = this._appendAfter))
          : (this._mapHead = r),
        (this._appendAfter = r),
        null
      );
    }
    _getOrCreateRecordForKey(t, r) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, r);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let n = new $c(t);
      return (
        this._records.set(t, n),
        (n.currentValue = r),
        this._addToAdditions(n),
        n
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, r) {
      Object.is(r, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = r),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, r) {
      t instanceof Map
        ? t.forEach(r)
        : Object.keys(t).forEach((n) => r(t[n], n));
    }
  },
  $c = class {
    constructor(t) {
      (this.key = t),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function Qf() {
  return new nl([new Pc()]);
}
var nl = (() => {
  let t = class t {
    constructor(n) {
      this.factories = n;
    }
    static create(n, o) {
      if (o != null) {
        let i = o.factories.slice();
        n = n.concat(i);
      }
      return new t(n);
    }
    static extend(n) {
      return {
        provide: t,
        useFactory: (o) => t.create(n, o || Qf()),
        deps: [[t, new is(), new eo()]],
      };
    }
    find(n) {
      let o = this.factories.find((i) => i.supports(n));
      if (o != null) return o;
      throw new y(901, !1);
    }
  };
  t.ɵprov = w({ token: t, providedIn: "root", factory: Qf });
  let e = t;
  return e;
})();
function Kf() {
  return new rl([new jc()]);
}
var rl = (() => {
  let t = class t {
    constructor(n) {
      this.factories = n;
    }
    static create(n, o) {
      if (o) {
        let i = o.factories.slice();
        n = n.concat(i);
      }
      return new t(n);
    }
    static extend(n) {
      return {
        provide: t,
        useFactory: (o) => t.create(n, o || Kf()),
        deps: [[t, new is(), new eo()]],
      };
    }
    find(n) {
      let o = this.factories.find((i) => i.supports(n));
      if (o) return o;
      throw new y(901, !1);
    }
  };
  t.ɵprov = w({ token: t, providedIn: "root", factory: Kf });
  let e = t;
  return e;
})();
function ji(e, t, r, n, o = !1) {
  for (; r !== null; ) {
    let i = t[r.index];
    i !== null && n.push(ht(i)), At(i) && aI(i, n);
    let s = r.type;
    if (s & 8) ji(e, t, r.child, n);
    else if (s & 32) {
      let a = Zu(r, t),
        c;
      for (; (c = a()); ) n.push(c);
    } else if (s & 16) {
      let a = Vp(t, r);
      if (Array.isArray(a)) n.push(...a);
      else {
        let c = Ur(t[Pe]);
        ji(c[S], c, a, n, !0);
      }
    }
    r = o ? r.projectionNext : r.next;
  }
  return n;
}
function aI(e, t) {
  for (let r = ye; r < e.length; r++) {
    let n = e[r],
      o = n[S].firstChild;
    o !== null && ji(n[S], n, o, t);
  }
  e[vn] !== e[yt] && t.push(e[vn]);
}
var tg = [];
function cI(e) {
  return e[mn] ?? uI(e);
}
function uI(e) {
  let t = tg.pop() ?? Object.create(dI);
  return (t.lView = e), t;
}
function lI(e) {
  e.lView[mn] !== e && ((e.lView = null), tg.push(e));
}
var dI = te(I({}, Wd), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    $r(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[mn] = this;
  },
});
function ng(e) {
  return og(e[Vr]);
}
function rg(e) {
  return og(e[Xe]);
}
function og(e) {
  for (; e !== null && !At(e); ) e = e[Xe];
  return e;
}
var fI = "ngOriginalError";
function Ka(e) {
  return e[fI];
}
var gt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let r = this._findOriginalError(t);
      this._console.error("ERROR", t),
        r && this._console.error("ORIGINAL ERROR", r);
    }
    _findOriginalError(t) {
      let r = t && Ka(t);
      for (; r && Ka(r); ) r = Ka(r);
      return r || null;
    }
  },
  ig = new E("", {
    providedIn: "root",
    factory: () => g(gt).handleError.bind(void 0),
  });
var sg = !1,
  hI = new E("", { providedIn: "root", factory: () => sg });
var Le = {};
function Bk(e = 1) {
  ag(Q(), A(), _t() + e, !1);
}
function ag(e, t, r, n) {
  if (!n)
    if ((t[_] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && yi(t, i, r);
    } else {
      let i = e.preOrderHooks;
      i !== null && Di(t, i, 0, r);
    }
  Dn(r);
}
function L(e, t = F.Default) {
  let r = A();
  if (r === null) return C(e, t);
  let n = re();
  return gp(n, r, Me(e), t);
}
function cg() {
  let e = "invalid";
  throw new Error(e);
}
function ug(e, t, r, n, o, i) {
  let s = ie(null);
  try {
    let a = null;
    o & ce.SignalBased && (a = t[n][Gd]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & ce.HasDecoratorInputTransform &&
        (i = e.inputTransforms[n].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, r, n) : zh(t, a, n, i);
  } finally {
    ie(s);
  }
}
function pI(e, t) {
  let r = e.hostBindingOpCodes;
  if (r !== null)
    try {
      for (let n = 0; n < r.length; n++) {
        let o = r[n];
        if (o < 0) Dn(~o);
        else {
          let i = o,
            s = r[++n],
            a = r[++n];
          cw(s, i);
          let c = t[i];
          a(2, c);
        }
      }
    } finally {
      Dn(-1);
    }
}
function gs(e, t, r, n, o, i, s, a, c, u, l) {
  let d = t.blueprint.slice();
  return (
    (d[yt] = o),
    (d[_] = n | 4 | 128 | 8 | 64),
    (u !== null || (e && e[_] & 2048)) && (d[_] |= 2048),
    Yh(d),
    (d[ue] = d[cr] = e),
    (d[ve] = r),
    (d[Tt] = s || (e && e[Tt])),
    (d[K] = a || (e && e[K])),
    (d[Ue] = c || (e && e[Ue]) || null),
    (d[ke] = i),
    (d[Ji] = cE()),
    (d[Jn] = l),
    (d[Hh] = u),
    (d[Pe] = t.type == 2 ? e[Pe] : d),
    d
  );
}
function lr(e, t, r, n, o) {
  let i = e.data[t];
  if (i === null) (i = gI(e, t, r, n, o)), aw() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = r), (i.value = n), (i.attrs = o);
    let s = rw();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return bn(i, !0), i;
}
function gI(e, t, r, n, o) {
  let i = ep(),
    s = Nu(),
    a = s ? i : i && i.parent,
    c = (e.data[t] = EI(e, a, r, t, n, o));
  return (
    e.firstChild === null && (e.firstChild = c),
    i !== null &&
      (s
        ? i.child == null && c.parent !== null && (i.child = c)
        : i.next === null && ((i.next = c), (c.prev = i))),
    c
  );
}
function lg(e, t, r, n) {
  if (r === 0) return -1;
  let o = t.length;
  for (let i = 0; i < r; i++) t.push(n), e.blueprint.push(n), e.data.push(null);
  return o;
}
function dg(e, t, r, n, o) {
  let i = _t(),
    s = n & 2;
  try {
    Dn(-1), s && t.length > ee && ag(e, t, ee, !1), ct(s ? 2 : 0, o), r(n, o);
  } finally {
    Dn(i), ct(s ? 3 : 1, o);
  }
}
function ol(e, t, r) {
  if (Tu(t)) {
    let n = ie(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        a.contentQueries && a.contentQueries(1, r[s], s);
      }
    } finally {
      ie(n);
    }
  }
}
function il(e, t, r) {
  Jh() && (SI(e, t, r, He(r, t)), (r.flags & 64) === 64 && pg(e, t, r));
}
function sl(e, t, r = He) {
  let n = t.localNames;
  if (n !== null) {
    let o = t.index + 1;
    for (let i = 0; i < n.length; i += 2) {
      let s = n[i + 1],
        a = s === -1 ? r(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function fg(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = al(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id
      ))
    : t;
}
function al(e, t, r, n, o, i, s, a, c, u, l) {
  let d = ee + n,
    f = d + o,
    h = mI(d, f),
    p = typeof u == "function" ? u() : u;
  return (h[S] = {
    type: e,
    blueprint: h,
    template: r,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: h.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: f,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: c,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function mI(e, t) {
  let r = [];
  for (let n = 0; n < t; n++) r.push(n < e ? null : Le);
  return r;
}
function vI(e, t, r, n) {
  let i = n.get(hI, sg) || r === dt.ShadowDom,
    s = e.selectRootElement(t, i);
  return yI(s), s;
}
function yI(e) {
  DI(e);
}
var DI = () => null;
function wI(e, t, r, n) {
  let o = vg(t);
  o.push(r), e.firstCreatePass && yg(e).push(n, o.length - 1);
}
function EI(e, t, r, n, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Xh() && (a |= 128),
    {
      type: r,
      index: n,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function Jf(e, t, r, n, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    n ??= {};
    let a,
      c = ce.None;
    Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
    let u = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      u = o[i];
    }
    e === 0 ? Xf(n, r, u, a, c) : Xf(n, r, u, a);
  }
  return n;
}
function Xf(e, t, r, n, o) {
  let i;
  e.hasOwnProperty(r) ? (i = e[r]).push(t, n) : (i = e[r] = [t, n]),
    o !== void 0 && i.push(o);
}
function II(e, t, r) {
  let n = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    c = null,
    u = null;
  for (let l = n; l < o; l++) {
    let d = i[l],
      f = r ? r.get(d) : null,
      h = f ? f.inputs : null,
      p = f ? f.outputs : null;
    (c = Jf(0, d.inputs, l, c, h)), (u = Jf(1, d.outputs, l, u, p));
    let D = c !== null && s !== null && !kh(t) ? jI(c, l, s) : null;
    a.push(D);
  }
  c !== null &&
    (c.hasOwnProperty("class") && (t.flags |= 8),
    c.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = c),
    (t.outputs = u);
}
function CI(e) {
  return e === "class"
    ? "className"
    : e === "for"
    ? "htmlFor"
    : e === "formaction"
    ? "formAction"
    : e === "innerHtml"
    ? "innerHTML"
    : e === "readonly"
    ? "readOnly"
    : e === "tabindex"
    ? "tabIndex"
    : e;
}
function ms(e, t, r, n, o, i, s, a) {
  let c = He(t, r),
    u = t.inputs,
    l;
  !a && u != null && (l = u[n])
    ? (ul(e, r, l, n, o), Xi(t) && bI(r, t.index))
    : t.type & 3
    ? ((n = CI(n)),
      (o = s != null ? s(o, t.value || "", n) : o),
      i.setProperty(c, n, o))
    : t.type & 12;
}
function bI(e, t) {
  let r = Qt(t, e);
  r[_] & 16 || (r[_] |= 64);
}
function cl(e, t, r, n) {
  if (Jh()) {
    let o = n === null ? null : { "": -1 },
      i = AI(e, r),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && hg(e, t, r, s, o, a),
      o && _I(r, n, o);
  }
  r.mergedAttrs = Lr(r.mergedAttrs, r.attrs);
}
function hg(e, t, r, n, o, i) {
  for (let u = 0; u < n.length; u++) mc(Ni(r, t), e, n[u].type);
  RI(r, e.data.length, n.length);
  for (let u = 0; u < n.length; u++) {
    let l = n[u];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    c = lg(e, t, n.length, null);
  for (let u = 0; u < n.length; u++) {
    let l = n[u];
    (r.mergedAttrs = Lr(r.mergedAttrs, l.hostAttrs)),
      OI(e, r, t, c, l),
      NI(c, l, o),
      l.contentQueries !== null && (r.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (r.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(r.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(r.index), (a = !0)),
      c++;
  }
  II(e, r, i);
}
function MI(e, t, r, n, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    TI(s) != a && s.push(a), s.push(r, n, i);
  }
}
function TI(e) {
  let t = e.length;
  for (; t > 0; ) {
    let r = e[--t];
    if (typeof r == "number" && r < 0) return r;
  }
  return 0;
}
function SI(e, t, r, n) {
  let o = r.directiveStart,
    i = r.directiveEnd;
  Xi(r) && PI(t, r, e.data[o + r.componentOffset]),
    e.firstCreatePass || Ni(r, t),
    Wt(n, t);
  let s = r.initialInputs;
  for (let a = o; a < i; a++) {
    let c = e.data[a],
      u = En(t, e, a, r);
    if ((Wt(u, t), s !== null && LI(t, a - o, u, c, r, s), St(c))) {
      let l = Qt(r.index, t);
      l[ve] = En(t, e, a, r);
    }
  }
}
function pg(e, t, r) {
  let n = r.directiveStart,
    o = r.directiveEnd,
    i = r.index,
    s = uw();
  try {
    Dn(i);
    for (let a = n; a < o; a++) {
      let c = e.data[a],
        u = t[a];
      pc(a),
        (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) &&
          xI(c, u);
    }
  } finally {
    Dn(-1), pc(s);
  }
}
function xI(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function AI(e, t) {
  let r = e.directiveRegistry,
    n = null,
    o = null;
  if (r)
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      if (Lh(t, s.selectors, !1))
        if ((n || (n = []), St(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              n.unshift(...a, s);
            let c = a.length;
            Uc(e, t, c);
          } else n.unshift(s), Uc(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, n, o), n.push(s);
    }
  return n === null ? null : [n, o];
}
function Uc(e, t, r) {
  (t.componentOffset = r), (e.components ??= []).push(t.index);
}
function _I(e, t, r) {
  if (t) {
    let n = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = r[t[o + 1]];
      if (i == null) throw new y(-301, !1);
      n.push(t[o], i);
    }
  }
}
function NI(e, t, r) {
  if (r) {
    if (t.exportAs)
      for (let n = 0; n < t.exportAs.length; n++) r[t.exportAs[n]] = e;
    St(t) && (r[""] = e);
  }
}
function RI(e, t, r) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + r),
    (e.providerIndexes = t);
}
function OI(e, t, r, n, o) {
  e.data[n] = o;
  let i = o.factory || (o.factory = yn(o.type, !0)),
    s = new wn(i, St(o), L);
  (e.blueprint[n] = s), (r[n] = s), MI(e, t, n, lg(e, r, o.hostVars, Le), o);
}
function PI(e, t, r) {
  let n = He(t, e),
    o = fg(r),
    i = e[Tt].rendererFactory,
    s = 16;
  r.signals ? (s = 4096) : r.onPush && (s = 64);
  let a = vs(
    e,
    gs(e, o, null, s, n, t, null, i.createRenderer(n, r), null, null, null)
  );
  e[t.index] = a;
}
function FI(e, t, r, n, o, i) {
  let s = He(e, t);
  kI(t[K], s, i, e.value, r, n, o);
}
function kI(e, t, r, n, o, i, s) {
  if (i == null) e.removeAttribute(t, o, r);
  else {
    let a = s == null ? gn(i) : s(i, n || "", o);
    e.setAttribute(t, o, a, r);
  }
}
function LI(e, t, r, n, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let c = s[a++],
        u = s[a++],
        l = s[a++],
        d = s[a++];
      ug(n, r, c, u, l, d);
    }
}
function jI(e, t, r) {
  let n = null,
    o = 0;
  for (; o < r.length; ) {
    let i = r[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      n === null && (n = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          n.push(i, s[a + 1], s[a + 2], r[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return n;
}
function gg(e, t, r, n) {
  return [e, !0, 0, t, null, n, null, r, null, null];
}
function mg(e, t) {
  let r = e.contentQueries;
  if (r !== null) {
    let n = ie(null);
    try {
      for (let o = 0; o < r.length; o += 2) {
        let i = r[o],
          s = r[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Fu(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      ie(n);
    }
  }
}
function vs(e, t) {
  return e[Vr] ? (e[Ff][Xe] = t) : (e[Vr] = t), (e[Ff] = t), t;
}
function Bc(e, t, r) {
  Fu(0);
  let n = ie(null);
  try {
    t(e, r);
  } finally {
    ie(n);
  }
}
function vg(e) {
  return e[jr] || (e[jr] = []);
}
function yg(e) {
  return e.cleanup || (e.cleanup = []);
}
function Dg(e, t, r) {
  return (e === null || St(e)) && (r = ZD(r[t.index])), r[K];
}
function ys(e, t) {
  let r = e[Ue],
    n = r ? r.get(gt, null) : null;
  n && n.handleError(t);
}
function ul(e, t, r, n, o) {
  for (let i = 0; i < r.length; ) {
    let s = r[i++],
      a = r[i++],
      c = r[i++],
      u = t[s],
      l = e.data[s];
    ug(l, u, n, a, c, o);
  }
}
function wg(e, t, r) {
  let n = Su(t, e);
  hE(e[K], n, r);
}
var VI = 100;
function $I(e, t = !0) {
  let r = e[Tt],
    n = r.rendererFactory,
    o = !1;
  o || n.begin?.();
  try {
    UI(e);
  } catch (i) {
    throw (t && ys(e, i), i);
  } finally {
    o || (n.end?.(), r.inlineEffectRunner?.flush());
  }
}
function UI(e) {
  Hc(e, 0);
  let t = 0;
  for (; Kh(e); ) {
    if (t === VI) throw new y(103, !1);
    t++, Hc(e, 1);
  }
}
function BI(e, t, r, n) {
  let o = t[_];
  if ((o & 256) === 256) return;
  let i = !1;
  !i && t[Tt].inlineEffectRunner?.flush(), ku(t);
  let s = null,
    a = null;
  !i && HI(e) && ((a = cI(t)), (s = qd(a)));
  try {
    Yh(t), sw(e.bindingStartIndex), r !== null && dg(e, t, r, 2, n);
    let c = (o & 3) === 3;
    if (!i)
      if (c) {
        let d = e.preOrderCheckHooks;
        d !== null && yi(t, d, null);
      } else {
        let d = e.preOrderHooks;
        d !== null && Di(t, d, 0, null), Ga(t, 0);
      }
    if ((zI(t), Eg(t, 0), e.contentQueries !== null && mg(e, t), !i))
      if (c) {
        let d = e.contentCheckHooks;
        d !== null && yi(t, d);
      } else {
        let d = e.contentHooks;
        d !== null && Di(t, d, 1), Ga(t, 1);
      }
    pI(e, t);
    let u = e.components;
    u !== null && Cg(t, u, 0);
    let l = e.viewQuery;
    if ((l !== null && Bc(2, l, n), !i))
      if (c) {
        let d = e.viewCheckHooks;
        d !== null && yi(t, d);
      } else {
        let d = e.viewHooks;
        d !== null && Di(t, d, 2), Ga(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[za])) {
      for (let d of t[za]) d();
      t[za] = null;
    }
    i || (t[_] &= -73);
  } catch (c) {
    throw ($r(t), c);
  } finally {
    a !== null && (Zd(a, s), lI(a)), Lu();
  }
}
function HI(e) {
  return e.type !== 2;
}
function Eg(e, t) {
  for (let r = ng(e); r !== null; r = rg(r))
    for (let n = ye; n < r.length; n++) {
      let o = r[n];
      Ig(o, t);
    }
}
function zI(e) {
  for (let t = ng(e); t !== null; t = rg(t)) {
    if (!(t[_] & Mu.HasTransplantedViews)) continue;
    let r = t[Xn];
    for (let n = 0; n < r.length; n++) {
      let o = r[n],
        i = o[ue];
      KD(o);
    }
  }
}
function GI(e, t, r) {
  let n = Qt(t, e);
  Ig(n, r);
}
function Ig(e, t) {
  Au(e) && Hc(e, t);
}
function Hc(e, t) {
  let n = e[S],
    o = e[_],
    i = e[mn],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Ia(i))),
    i && (i.dirty = !1),
    (e[_] &= -9217),
    s)
  )
    BI(n, e, n.template, e[ve]);
  else if (o & 8192) {
    Eg(e, 1);
    let a = n.components;
    a !== null && Cg(e, a, 1);
  }
}
function Cg(e, t, r) {
  for (let n = 0; n < t.length; n++) GI(e, t[n], r);
}
function Ds(e) {
  for (e[Tt].changeDetectionScheduler?.notify(); e; ) {
    e[_] |= 64;
    let t = Ur(e);
    if (UD(e) && !t) return e;
    e = t;
  }
  return null;
}
var In = class {
    get rootNodes() {
      let t = this._lView,
        r = t[S];
      return ji(r, t, r.firstChild, []);
    }
    constructor(t, r, n = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = r),
        (this.notifyErrorHandler = n),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[ve];
    }
    set context(t) {
      this._lView[ve] = t;
    }
    get destroyed() {
      return (this._lView[_] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[ue];
        if (At(t)) {
          let r = t[Si],
            n = r ? r.indexOf(this) : -1;
          n > -1 && (Hr(t, n), Ri(r, n));
        }
        this._attachedToViewContainer = !1;
      }
      us(this._lView[S], this._lView);
    }
    onDestroy(t) {
      ts(this._lView, t);
    }
    markForCheck() {
      Ds(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[_] &= -129;
    }
    reattach() {
      hc(this._lView), (this._lView[_] |= 128);
    }
    detectChanges() {
      (this._lView[_] |= 1024), $I(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new y(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      (this._appRef = null), Pp(this._lView[S], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new y(902, !1);
      (this._appRef = t), hc(this._lView);
    }
  },
  dr = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = WI;
    let e = t;
    return e;
  })();
function WI(e) {
  return qI(re(), A(), (e & 16) === 16);
}
function qI(e, t, r) {
  if (Xi(e) && !r) {
    let n = Qt(e.index, t);
    return new In(n, n);
  } else if (e.type & 47) {
    let n = t[Pe];
    return new In(n, t);
  }
  return null;
}
var bg = (() => {
    let t = class t {};
    (t.__NG_ELEMENT_ID__ = ZI), (t.__NG_ENV_ID__ = (n) => n);
    let e = t;
    return e;
  })(),
  zc = class extends bg {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return ts(this._lView, t), () => _u(this._lView, t);
    }
  };
function ZI() {
  return new zc(A());
}
var eh = new Set();
function Jt(e) {
  eh.has(e) ||
    (eh.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
var Gc = class extends ae {
  constructor(t = !1) {
    super(), (this.__isAsync = t);
  }
  emit(t) {
    super.next(t);
  }
  subscribe(t, r, n) {
    let o = t,
      i = r || (() => null),
      s = n;
    if (t && typeof t == "object") {
      let c = t;
      (o = c.next?.bind(c)), (i = c.error?.bind(c)), (s = c.complete?.bind(c));
    }
    this.__isAsync && ((i = Ja(i)), o && (o = Ja(o)), s && (s = Ja(s)));
    let a = super.subscribe({ next: o, error: i, complete: s });
    return t instanceof J && t.add(a), a;
  }
};
function Ja(e) {
  return (t) => {
    setTimeout(e, void 0, t);
  };
}
var ge = Gc;
function th(...e) {}
function YI() {
  let e = typeof X.requestAnimationFrame == "function",
    t = X[e ? "requestAnimationFrame" : "setTimeout"],
    r = X[e ? "cancelAnimationFrame" : "clearTimeout"];
  if (typeof Zone < "u" && t && r) {
    let n = t[Zone.__symbol__("OriginalDelegate")];
    n && (t = n);
    let o = r[Zone.__symbol__("OriginalDelegate")];
    o && (r = o);
  }
  return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: r };
}
var B = class e {
    constructor({
      enableLongStackTrace: t = !1,
      shouldCoalesceEventChangeDetection: r = !1,
      shouldCoalesceRunChangeDetection: n = !1,
    }) {
      if (
        ((this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new ge(!1)),
        (this.onMicrotaskEmpty = new ge(!1)),
        (this.onStable = new ge(!1)),
        (this.onError = new ge(!1)),
        typeof Zone > "u")
      )
        throw new y(908, !1);
      Zone.assertZonePatched();
      let o = this;
      (o._nesting = 0),
        (o._outer = o._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
        t &&
          Zone.longStackTraceZoneSpec &&
          (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
        (o.shouldCoalesceEventChangeDetection = !n && r),
        (o.shouldCoalesceRunChangeDetection = n),
        (o.lastRequestAnimationFrameId = -1),
        (o.nativeRequestAnimationFrame = YI().nativeRequestAnimationFrame),
        JI(o);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new y(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new y(909, !1);
    }
    run(t, r, n) {
      return this._inner.run(t, r, n);
    }
    runTask(t, r, n, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, QI, th, th);
      try {
        return i.runTask(s, r, n);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, r, n) {
      return this._inner.runGuarded(t, r, n);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  QI = {};
function ll(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function KI(e) {
  e.isCheckStableRunning ||
    e.lastRequestAnimationFrameId !== -1 ||
    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(
      X,
      () => {
        e.fakeTopEventTask ||
          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
            "fakeTopEventTask",
            () => {
              (e.lastRequestAnimationFrameId = -1),
                Wc(e),
                (e.isCheckStableRunning = !0),
                ll(e),
                (e.isCheckStableRunning = !1);
            },
            void 0,
            () => {},
            () => {}
          )),
          e.fakeTopEventTask.invoke();
      }
    )),
    Wc(e));
}
function JI(e) {
  let t = () => {
    KI(e);
  };
  e._inner = e._inner.fork({
    name: "angular",
    properties: { isAngularZone: !0 },
    onInvokeTask: (r, n, o, i, s, a) => {
      if (XI(a)) return r.invokeTask(o, i, s, a);
      try {
        return nh(e), r.invokeTask(o, i, s, a);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && i.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          rh(e);
      }
    },
    onInvoke: (r, n, o, i, s, a, c) => {
      try {
        return nh(e), r.invoke(o, i, s, a, c);
      } finally {
        e.shouldCoalesceRunChangeDetection && t(), rh(e);
      }
    },
    onHasTask: (r, n, o, i) => {
      r.hasTask(o, i),
        n === o &&
          (i.change == "microTask"
            ? ((e._hasPendingMicrotasks = i.microTask), Wc(e), ll(e))
            : i.change == "macroTask" &&
              (e.hasPendingMacrotasks = i.macroTask));
    },
    onHandleError: (r, n, o, i) => (
      r.handleError(o, i), e.runOutsideAngular(() => e.onError.emit(i)), !1
    ),
  });
}
function Wc(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.lastRequestAnimationFrameId !== -1)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function nh(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function rh(e) {
  e._nesting--, ll(e);
}
var qc = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new ge()),
      (this.onMicrotaskEmpty = new ge()),
      (this.onStable = new ge()),
      (this.onError = new ge());
  }
  run(t, r, n) {
    return t.apply(r, n);
  }
  runGuarded(t, r, n) {
    return t.apply(r, n);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, r, n, o) {
    return t.apply(r, n);
  }
};
function XI(e) {
  return !Array.isArray(e) || e.length !== 1
    ? !1
    : e[0].data?.__ignore_ng_zone__ === !0;
}
function eC(e = "zone.js", t) {
  return e === "noop" ? new qc() : e === "zone.js" ? new B(t) : e;
}
var Zn = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(Zn || {}),
  tC = { destroy() {} };
function oh(e, t) {
  let r = t?.injector ?? g(ze);
  if (!qu(r)) return;
  r.get(ws).internalCallbacks.push(e);
}
function dl(e, t) {
  !t && Xw(dl);
  let r = t?.injector ?? g(ze);
  if (!qu(r)) return tC;
  Jt("NgAfterNextRender");
  let n = r.get(ws),
    o = (n.handler ??= new Yc()),
    i = t?.phase ?? Zn.MixedReadWrite,
    s = () => {
      o.unregister(c), a();
    },
    a = r.get(bg).onDestroy(s),
    c = new Zc(r, i, () => {
      s(), e();
    });
  return o.register(c), { destroy: s };
}
var Zc = class {
    constructor(t, r, n) {
      (this.phase = r),
        (this.callbackFn = n),
        (this.zone = t.get(B)),
        (this.errorHandler = t.get(gt, null, { optional: !0 }));
    }
    invoke() {
      try {
        this.zone.runOutsideAngular(this.callbackFn);
      } catch (t) {
        this.errorHandler?.handleError(t);
      }
    }
  },
  Yc = class {
    constructor() {
      (this.executingCallbacks = !1),
        (this.buckets = {
          [Zn.EarlyRead]: new Set(),
          [Zn.Write]: new Set(),
          [Zn.MixedReadWrite]: new Set(),
          [Zn.Read]: new Set(),
        }),
        (this.deferredCallbacks = new Set());
    }
    register(t) {
      (this.executingCallbacks
        ? this.deferredCallbacks
        : this.buckets[t.phase]
      ).add(t);
    }
    unregister(t) {
      this.buckets[t.phase].delete(t), this.deferredCallbacks.delete(t);
    }
    execute() {
      let t = !1;
      this.executingCallbacks = !0;
      for (let r of Object.values(this.buckets))
        for (let n of r) (t = !0), n.invoke();
      this.executingCallbacks = !1;
      for (let r of this.deferredCallbacks) this.buckets[r.phase].add(r);
      return this.deferredCallbacks.clear(), t;
    }
    destroy() {
      for (let t of Object.values(this.buckets)) t.clear();
      this.deferredCallbacks.clear();
    }
  },
  ws = (() => {
    let t = class t {
      constructor() {
        (this.handler = null), (this.internalCallbacks = []);
      }
      execute() {
        let n = [...this.internalCallbacks];
        this.internalCallbacks.length = 0;
        for (let i of n) i();
        return !!this.handler?.execute() || n.length > 0;
      }
      ngOnDestroy() {
        this.handler?.destroy(),
          (this.handler = null),
          (this.internalCallbacks.length = 0);
      }
    };
    t.ɵprov = w({ token: t, providedIn: "root", factory: () => new t() });
    let e = t;
    return e;
  })();
function nC(e, t) {
  let r = Qt(t, e),
    n = r[S];
  rC(n, r);
  let o = r[yt];
  o !== null && r[Jn] === null && (r[Jn] = Xu(o, r[Ue])), fl(n, r, r[ve]);
}
function rC(e, t) {
  for (let r = t.length; r < e.blueprint.length; r++) t.push(e.blueprint[r]);
}
function fl(e, t, r) {
  ku(t);
  try {
    let n = e.viewQuery;
    n !== null && Bc(1, n, r);
    let o = e.template;
    o !== null && dg(e, t, o, 1, r),
      e.firstCreatePass && (e.firstCreatePass = !1),
      e.staticContentQueries && mg(e, t),
      e.staticViewQueries && Bc(2, e.viewQuery, r);
    let i = e.components;
    i !== null && oC(t, i);
  } catch (n) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      n)
    );
  } finally {
    (t[_] &= -5), Lu();
  }
}
function oC(e, t) {
  for (let r = 0; r < t.length; r++) nC(e, t[r]);
}
function Vi(e, t, r) {
  let n = r ? e.styles : null,
    o = r ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = sc(o, a);
      else if (i == 2) {
        let c = a,
          u = t[++s];
        n = sc(n, c + ": " + u + ";");
      }
    }
  r ? (e.styles = n) : (e.stylesWithoutHost = n),
    r ? (e.classes = o) : (e.classesWithoutHost = o);
}
var $i = class extends ps {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let r = ft(t);
    return new rr(r, this.ngModule);
  }
};
function ih(e) {
  let t = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let n = e[r];
    n !== void 0 &&
      t.push({ propName: Array.isArray(n) ? n[0] : n, templateName: r });
  }
  return t;
}
function iC(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Zh : t === "math" ? GD : null;
}
var Qc = class {
    constructor(t, r) {
      (this.injector = t), (this.parentInjector = r);
    }
    get(t, r, n) {
      n = Qi(n);
      let o = this.injector.get(t, Qa, n);
      return o !== Qa || r === Qa ? o : this.parentInjector.get(t, r, n);
    }
  },
  rr = class extends ki {
    get inputs() {
      let t = this.componentDef,
        r = t.inputTransforms,
        n = ih(t.inputs);
      if (r !== null)
        for (let o of n)
          r.hasOwnProperty(o.propName) && (o.transform = r[o.propName]);
      return n;
    }
    get outputs() {
      return ih(this.componentDef.outputs);
    }
    constructor(t, r) {
      super(),
        (this.componentDef = t),
        (this.ngModule = r),
        (this.componentType = t.type),
        (this.selector = kD(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!r);
    }
    create(t, r, n, o) {
      o = o || this.ngModule;
      let i = o instanceof we ? o : o?.injector;
      i &&
        this.componentDef.getStandaloneInjector !== null &&
        (i = this.componentDef.getStandaloneInjector(i) || i);
      let s = i ? new Qc(t, i) : t,
        a = s.get(zr, null);
      if (a === null) throw new y(407, !1);
      let c = s.get(oI, null),
        u = s.get(ws, null),
        l = s.get(Nc, null),
        d = {
          rendererFactory: a,
          sanitizer: c,
          inlineEffectRunner: null,
          afterRenderEventManager: u,
          changeDetectionScheduler: l,
        },
        f = a.createRenderer(null, this.componentDef),
        h = this.componentDef.selectors[0][0] || "div",
        p = n ? vI(f, n, this.componentDef.encapsulation, s) : Op(f, h, iC(h)),
        D = 512;
      this.componentDef.signals
        ? (D |= 4096)
        : this.componentDef.onPush || (D |= 16);
      let v = null;
      p !== null && (v = Xu(p, s, !0));
      let m = al(0, null, null, 1, 0, null, null, null, null, null, null),
        j = gs(null, m, null, D, null, null, d, f, s, null, v);
      ku(j);
      let Ee, U;
      try {
        let fe = this.componentDef,
          Ye,
          Tr = null;
        fe.findHostDirectiveDefs
          ? ((Ye = []),
            (Tr = new Map()),
            fe.findHostDirectiveDefs(fe, Ye, Tr),
            Ye.push(fe))
          : (Ye = [fe]);
        let dy = sC(j, p),
          fy = aC(dy, p, fe, Ye, j, d, f);
        (U = Yr(m, ee)),
          p && lC(f, fe, p, n),
          r !== void 0 && dC(U, this.ngContentSelectors, r),
          (Ee = uC(fy, fe, Ye, Tr, j, [fC])),
          fl(m, j, null);
      } finally {
        Lu();
      }
      return new Kc(this.componentType, Ee, ur(U, j), j, U);
    }
  },
  Kc = class extends Rc {
    constructor(t, r, n, o, i) {
      super(),
        (this.location = n),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = r),
        (this.hostView = this.changeDetectorRef = new In(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, r) {
      let n = this._tNode.inputs,
        o;
      if (n !== null && (o = n[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), r))
        )
          return;
        let i = this._rootLView;
        ul(i[S], i, o, t, r), this.previousInputValues.set(t, r);
        let s = Qt(this._tNode.index, i);
        Ds(s);
      }
    }
    get injector() {
      return new pn(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function sC(e, t) {
  let r = e[S],
    n = ee;
  return (e[n] = t), lr(r, n, 2, "#host", null);
}
function aC(e, t, r, n, o, i, s) {
  let a = o[S];
  cC(n, e, t, s);
  let c = null;
  t !== null && (c = Xu(t, o[Ue]));
  let u = i.rendererFactory.createRenderer(t, r),
    l = 16;
  r.signals ? (l = 4096) : r.onPush && (l = 64);
  let d = gs(o, fg(r), null, l, o[e.index], e, i, u, null, null, c);
  return (
    a.firstCreatePass && Uc(a, e, n.length - 1), vs(o, d), (o[e.index] = d)
  );
}
function cC(e, t, r, n) {
  for (let o of e) t.mergedAttrs = Lr(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Vi(t, t.mergedAttrs, !0), r !== null && Bp(n, r, t));
}
function uC(e, t, r, n, o, i) {
  let s = re(),
    a = o[S],
    c = He(s, o);
  hg(a, o, s, r, null, n);
  for (let l = 0; l < r.length; l++) {
    let d = s.directiveStart + l,
      f = En(o, a, d, s);
    Wt(f, o);
  }
  pg(a, o, s), c && Wt(c, o);
  let u = En(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[ve] = o[ve] = u), i !== null)) for (let l of i) l(u, t);
  return ol(a, s, e), u;
}
function lC(e, t, r, n) {
  if (n) lc(e, r, ["ng-version", "17.1.2"]);
  else {
    let { attrs: o, classes: i } = LD(t.selectors[0]);
    o && lc(e, r, o), i && i.length > 0 && Up(e, r, i.join(" "));
  }
}
function dC(e, t, r) {
  let n = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = r[o];
    n.push(i != null ? Array.from(i) : null);
  }
}
function fC() {
  let e = re();
  os(A()[S], e);
}
function hC(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function pC(e) {
  let t = hC(e.type),
    r = !0,
    n = [e];
  for (; t; ) {
    let o;
    if (St(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new y(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (r) {
        n.push(o);
        let s = e;
        (s.inputs = gi(e.inputs)),
          (s.inputTransforms = gi(e.inputTransforms)),
          (s.declaredInputs = gi(e.declaredInputs)),
          (s.outputs = gi(e.outputs));
        let a = o.hostBindings;
        a && DC(e, a);
        let c = o.viewQuery,
          u = o.contentQueries;
        if (
          (c && vC(e, c),
          u && yC(e, u),
          gC(e, o),
          sD(e.outputs, o.outputs),
          St(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === pC && (r = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  mC(n);
}
function gC(e, t) {
  for (let r in t.inputs) {
    if (!t.inputs.hasOwnProperty(r) || e.inputs.hasOwnProperty(r)) continue;
    let n = t.inputs[r];
    if (
      n !== void 0 &&
      ((e.inputs[r] = n),
      (e.declaredInputs[r] = t.declaredInputs[r]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(n) ? n[0] : n;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function mC(e) {
  let t = 0,
    r = null;
  for (let n = e.length - 1; n >= 0; n--) {
    let o = e[n];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Lr(o.hostAttrs, (r = Lr(r, o.hostAttrs))));
  }
}
function gi(e) {
  return e === Kn ? {} : e === _e ? [] : e;
}
function vC(e, t) {
  let r = e.viewQuery;
  r
    ? (e.viewQuery = (n, o) => {
        t(n, o), r(n, o);
      })
    : (e.viewQuery = t);
}
function yC(e, t) {
  let r = e.contentQueries;
  r
    ? (e.contentQueries = (n, o, i) => {
        t(n, o, i), r(n, o, i);
      })
    : (e.contentQueries = t);
}
function DC(e, t) {
  let r = e.hostBindings;
  r
    ? (e.hostBindings = (n, o) => {
        t(n, o), r(n, o);
      })
    : (e.hostBindings = t);
}
function Es(e) {
  let t = e.inputConfig,
    r = {};
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let o = t[n];
      Array.isArray(o) && o[3] && (r[n] = o[3]);
    }
  e.inputTransforms = r;
}
var Hk = new RegExp(`^(\\d+)*(${KE}|${QE})*(.*)`);
var wC = () => null;
function or(e, t) {
  return wC(e, t);
}
function no(e, t, r, n) {
  let o = t.tView,
    s = e[_] & 4096 ? 4096 : 16,
    a = gs(
      e,
      o,
      r,
      s,
      null,
      t,
      null,
      null,
      null,
      n?.injector ?? null,
      n?.dehydratedView ?? null
    ),
    c = e[t.index];
  a[Zr] = c;
  let u = e[lt];
  return u !== null && (a[lt] = u.createEmbeddedView(o)), fl(o, a, r), a;
}
function Mg(e, t) {
  let r = ye + t;
  if (r < e.length) return e[r];
}
function ir(e, t) {
  return !t || t.firstChild === null || Np(e);
}
function ro(e, t, r, n = !0) {
  let o = t[S];
  if ((yE(o, t, e, r), n)) {
    let s = Ic(r, e),
      a = t[K],
      c = Yu(a, e[vn]);
    c !== null && mE(o, e[ke], a, t, c, s);
  }
  let i = t[Jn];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function hl(e, t) {
  let r = Hr(e, t);
  return r !== void 0 && us(r[S], r), r;
}
var Dt = (() => {
  let t = class t {};
  t.__NG_ELEMENT_ID__ = EC;
  let e = t;
  return e;
})();
function EC() {
  let e = re();
  return Sg(e, A());
}
var IC = Dt,
  Tg = class extends IC {
    constructor(t, r, n) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = r),
        (this._hostLView = n);
    }
    get element() {
      return ur(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new pn(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = ju(this._hostTNode, this._hostLView);
      if (up(t)) {
        let r = Ai(t, this._hostLView),
          n = xi(t),
          o = r[S].data[n + 8];
        return new pn(o, r);
      } else return new pn(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let r = sh(this._lContainer);
      return (r !== null && r[t]) || null;
    }
    get length() {
      return this._lContainer.length - ye;
    }
    createEmbeddedView(t, r, n) {
      let o, i;
      typeof n == "number"
        ? (o = n)
        : n != null && ((o = n.index), (i = n.injector));
      let s = or(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(r || {}, i, s);
      return this.insertImpl(a, o, ir(this._hostTNode, s)), a;
    }
    createComponent(t, r, n, o, i) {
      let s = t && !_w(t),
        a;
      if (s) a = r;
      else {
        let p = r || {};
        (a = p.index),
          (n = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let c = s ? t : new rr(ft(t)),
        u = n || this.parentInjector;
      if (!i && c.ngModule == null) {
        let D = (s ? u : this.parentInjector).get(we, null);
        D && (i = D);
      }
      let l = ft(c.componentType ?? {}),
        d = or(this._lContainer, l?.id ?? null),
        f = d?.firstChild ?? null,
        h = c.create(u, o, f, i);
      return this.insertImpl(h.hostView, a, ir(this._hostTNode, d)), h;
    }
    insert(t, r) {
      return this.insertImpl(t, r, !0);
    }
    insertImpl(t, r, n) {
      let o = t._lView;
      if (QD(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let c = o[ue],
            u = new Tg(c, c[ke], c[ue]);
          u.detach(u.indexOf(t));
        }
      }
      let i = this._adjustIndex(r),
        s = this._lContainer;
      return ro(s, o, i, n), t.attachToViewContainerRef(), Dp(Xa(s), i, t), t;
    }
    move(t, r) {
      return this.insert(t, r);
    }
    indexOf(t) {
      let r = sh(this._lContainer);
      return r !== null ? r.indexOf(t) : -1;
    }
    remove(t) {
      let r = this._adjustIndex(t, -1),
        n = Hr(this._lContainer, r);
      n && (Ri(Xa(this._lContainer), r), us(n[S], n));
    }
    detach(t) {
      let r = this._adjustIndex(t, -1),
        n = Hr(this._lContainer, r);
      return n && Ri(Xa(this._lContainer), r) != null ? new In(n) : null;
    }
    _adjustIndex(t, r = 0) {
      return t ?? this.length + r;
    }
  };
function sh(e) {
  return e[Si];
}
function Xa(e) {
  return e[Si] || (e[Si] = []);
}
function Sg(e, t) {
  let r,
    n = t[e.index];
  return (
    At(n) ? (r = n) : ((r = gg(n, t, null, e)), (t[e.index] = r), vs(t, r)),
    bC(r, t, e, n),
    new Tg(r, e, t)
  );
}
function CC(e, t) {
  let r = e[K],
    n = r.createComment(""),
    o = He(t, e),
    i = Yu(r, o);
  return Fi(r, i, n, bE(r, o), !1), n;
}
var bC = TC,
  MC = () => !1;
function xg(e, t, r) {
  return MC(e, t, r);
}
function TC(e, t, r, n) {
  if (e[vn]) return;
  let o;
  r.type & 8 ? (o = ht(n)) : (o = CC(t, r)), (e[vn] = o);
}
function pl(e, t, r) {
  return (e[t] = r);
}
function SC(e, t) {
  return e[t];
}
function Be(e, t, r) {
  let n = e[t];
  return Object.is(n, r) ? !1 : ((e[t] = r), !0);
}
function Ag(e, t, r, n) {
  let o = Be(e, t, r);
  return Be(e, t + 1, n) || o;
}
function xC(e, t, r, n, o, i, s, a, c) {
  let u = t.consts,
    l = lr(t, e, 4, s || null, er(u, a));
  cl(t, r, l, er(u, c)), os(t, l);
  let d = (l.tView = al(
    2,
    l,
    n,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    u,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Ui(e, t, r, n, o, i, s, a) {
  let c = A(),
    u = Q(),
    l = e + ee,
    d = u.firstCreatePass ? xC(l, u, c, t, r, n, o, i, s) : u.data[l];
  bn(d, !1);
  let f = AC(u, c, d, e);
  ns() && ls(u, c, f, d), Wt(f, c);
  let h = gg(f, c, f, d);
  return (
    (c[l] = h),
    vs(c, h),
    xg(h, d, c),
    es(d) && il(u, c, d),
    s != null && sl(c, d, a),
    Ui
  );
}
var AC = _C;
function _C(e, t, r, n) {
  return rs(!0), t[K].createComment("");
}
var be = (function (e) {
    return (
      (e[(e.NOT_STARTED = 0)] = "NOT_STARTED"),
      (e[(e.IN_PROGRESS = 1)] = "IN_PROGRESS"),
      (e[(e.COMPLETE = 2)] = "COMPLETE"),
      (e[(e.FAILED = 3)] = "FAILED"),
      e
    );
  })(be || {}),
  ah = 0,
  NC = 1,
  me = (function (e) {
    return (
      (e[(e.Placeholder = 0)] = "Placeholder"),
      (e[(e.Loading = 1)] = "Loading"),
      (e[(e.Complete = 2)] = "Complete"),
      (e[(e.Error = 3)] = "Error"),
      e
    );
  })(me || {}),
  gl = (function (e) {
    return (e[(e.Initial = -1)] = "Initial"), e;
  })(gl || {}),
  RC = 0,
  ml = 1;
var _g = 4,
  Ng = 5,
  Rg = (function (e) {
    return (
      (e[(e.Manual = 0)] = "Manual"),
      (e[(e.Playthrough = 1)] = "Playthrough"),
      e
    );
  })(Rg || {});
function Is(e, t, r) {
  let n = e === 1 ? Ng : _g;
  t[n] === null && (t[n] = []), t[n].push(r);
}
function Jc(e, t) {
  let r = e === 1 ? Ng : _g,
    n = t[r];
  if (n !== null) {
    for (let o of n) o();
    t[r] = null;
  }
}
function Og(e) {
  Jc(1, e), Jc(0, e);
}
function Cs(e) {
  return e + 1;
}
function fr(e, t) {
  let r = e[S],
    n = Cs(t.index);
  return e[n];
}
function OC(e, t, r) {
  let n = e[S],
    o = Cs(t);
  e[o] = r;
}
function bs(e, t) {
  let r = Cs(t.index);
  return e.data[r];
}
function PC(e, t, r) {
  let n = Cs(t);
  e.data[n] = r;
}
function FC(e, t, r) {
  let n = t[S],
    o = bs(n, r);
  switch (e) {
    case me.Complete:
      return o.primaryTmplIndex;
    case me.Loading:
      return o.loadingTmplIndex;
    case me.Error:
      return o.errorTmplIndex;
    case me.Placeholder:
      return o.placeholderTmplIndex;
    default:
      return null;
  }
}
function ch(e, t) {
  return t === me.Placeholder
    ? e.placeholderBlockConfig?.[ah] ?? null
    : t === me.Loading
    ? e.loadingBlockConfig?.[ah] ?? null
    : null;
}
function kC(e) {
  return e.loadingBlockConfig?.[NC] ?? null;
}
function uh(e, t) {
  if (!e || e.length === 0) return t;
  let r = new Set(e);
  for (let n of t) r.add(n);
  return e.length === r.size ? e : Array.from(r);
}
function LC(e, t) {
  let r = t.primaryTmplIndex + ee;
  return Yr(e, r);
}
var Hn = new WeakMap();
var zn = null,
  ec = 0,
  Xc = class {
    constructor() {
      (this.callbacks = new Set()),
        (this.listener = () => {
          for (let t of this.callbacks) t();
        });
    }
  };
function jC(e, t, r) {
  let n = r.get(B),
    o = Hn.get(e);
  return (
    (zn =
      zn ||
      n.runOutsideAngular(
        () =>
          new IntersectionObserver((i) => {
            for (let s of i)
              s.isIntersecting &&
                Hn.has(s.target) &&
                n.run(Hn.get(s.target).listener);
          })
      )),
    o ||
      ((o = new Xc()),
      n.runOutsideAngular(() => zn.observe(e)),
      Hn.set(e, o),
      ec++),
    o.callbacks.add(t),
    () => {
      Hn.has(e) &&
        (o.callbacks.delete(t),
        o.callbacks.size === 0 && (zn?.unobserve(e), Hn.delete(e), ec--),
        ec === 0 && (zn?.disconnect(), (zn = null)));
    }
  );
}
function VC(e, t, r) {
  return r == null ? e : r >= 0 ? Qh(r, e) : e[t.index][ye] ?? null;
}
function $C(e, t) {
  return Su(ee + t, e);
}
function UC(e, t, r, n, o, i, s) {
  let a = e[Ue];
  function c() {
    if (dc(e)) return;
    let u = fr(e, t),
      l = u[ml];
    if (l !== gl.Initial && l !== me.Placeholder) return;
    let d = VC(e, t, n);
    if (!d) {
      oh(c, { injector: a });
      return;
    }
    if (dc(d)) return;
    let f = $C(d, r),
      h = o(
        f,
        () => {
          e !== d && _u(d, h), i();
        },
        a
      );
    e !== d && ts(d, h), Is(s, u, h);
  }
  oh(c, { injector: a });
}
function Pg(e, t) {
  let n = t[Ue].get(zC),
    o = () => n.remove(e);
  return n.add(e), o;
}
var BC = () =>
    typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout,
  HC = () =>
    typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout,
  zC = (() => {
    let t = class t {
      constructor() {
        (this.executingCallbacks = !1),
          (this.idleId = null),
          (this.current = new Set()),
          (this.deferred = new Set()),
          (this.ngZone = g(B)),
          (this.requestIdleCallbackFn = BC().bind(globalThis)),
          (this.cancelIdleCallbackFn = HC().bind(globalThis));
      }
      add(n) {
        (this.executingCallbacks ? this.deferred : this.current).add(n),
          this.idleId === null && this.scheduleIdleCallback();
      }
      remove(n) {
        let { current: o, deferred: i } = this;
        o.delete(n),
          i.delete(n),
          o.size === 0 && i.size === 0 && this.cancelIdleCallback();
      }
      scheduleIdleCallback() {
        let n = () => {
          this.cancelIdleCallback(), (this.executingCallbacks = !0);
          for (let o of this.current) o();
          if (
            (this.current.clear(),
            (this.executingCallbacks = !1),
            this.deferred.size > 0)
          ) {
            for (let o of this.deferred) this.current.add(o);
            this.deferred.clear(), this.scheduleIdleCallback();
          }
        };
        this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n));
      }
      cancelIdleCallback() {
        this.idleId !== null &&
          (this.cancelIdleCallbackFn(this.idleId), (this.idleId = null));
      }
      ngOnDestroy() {
        this.cancelIdleCallback(), this.current.clear(), this.deferred.clear();
      }
    };
    t.ɵprov = w({ token: t, providedIn: "root", factory: () => new t() });
    let e = t;
    return e;
  })();
var GC = new E("");
function Fg(e) {
  return e.get(GC, null, { optional: !0 })?.behavior === Rg.Manual ? !1 : qu(e);
}
var WC = null;
function Gk(e, t, r, n, o, i, s, a, c) {
  let u = A(),
    l = Q(),
    d = e + ee;
  if ((Ui(e, null, 0, 0), l.firstCreatePass)) {
    Jt("NgDefer");
    let v = {
      primaryTmplIndex: t,
      loadingTmplIndex: n ?? null,
      placeholderTmplIndex: o ?? null,
      errorTmplIndex: i ?? null,
      placeholderBlockConfig: null,
      loadingBlockConfig: null,
      dependencyResolverFn: r ?? null,
      loadingState: be.NOT_STARTED,
      loadingPromise: null,
    };
    c?.(l, v, a, s), PC(l, d, v);
  }
  let f = re(),
    h = u[d];
  xg(h, f, u);
  let p = [null, gl.Initial, null, null, null, null];
  OC(u, d, p);
  let D = () => Og(p);
  Is(0, p, () => _u(u, D)), ts(u, D);
}
function Wk() {
  qC(Pg);
}
function qk() {
  ZC(Pg);
}
function Zk(e, t) {
  let r = A(),
    n = re();
  Lg(r, n), UC(r, n, e, t, jC, () => jg(r, n), 0);
}
function qC(e) {
  let t = A(),
    r = re();
  Lg(t, r);
  let n = e(() => jg(t, r), t),
    o = fr(t, r);
  Is(0, o, n);
}
function ZC(e) {
  let t = A(),
    r = re(),
    n = t[S],
    o = bs(n, r);
  if (o.loadingState === be.NOT_STARTED) {
    let i = fr(t, r),
      a = e(() => QC(o, t, r), t);
    Is(1, i, a);
  }
}
function fn(e, t, r, n = !1) {
  let o = r[ue],
    i = o[S];
  if (dc(o)) return;
  let s = fr(o, t),
    a = s[ml];
  if (lh(a, e) && lh(s[RC] ?? -1, e)) {
    let c = bs(i, t),
      l =
        !n &&
        (kC(c) !== null || ch(c, me.Loading) !== null || ch(c, me.Placeholder))
          ? WC
          : YC;
    try {
      l(e, s, r, t, o);
    } catch (d) {
      ys(o, d);
    }
  }
}
function YC(e, t, r, n, o) {
  let i = FC(e, o, n);
  if (i !== null) {
    t[ml] = e;
    let s = o[S],
      a = i + ee,
      c = Yr(s, a),
      u = 0;
    hl(r, u);
    let l = or(r, c.tView.ssrId),
      d = no(o, c, null, { dehydratedView: l });
    ro(r, d, u, ir(c, l)), Ds(d);
  }
}
function lh(e, t) {
  return e < t;
}
function QC(e, t, r) {
  t[Ue] && Fg(t[Ue]) && kg(e, t, r);
}
function kg(e, t, r) {
  let n = t[Ue],
    o = t[S];
  if (e.loadingState !== be.NOT_STARTED) return;
  let i = fr(t, r),
    s = LC(o, e);
  (e.loadingState = be.IN_PROGRESS), Jc(1, i);
  let a = e.dependencyResolverFn;
  if (!a) {
    e.loadingPromise = Promise.resolve().then(() => {
      (e.loadingPromise = null), (e.loadingState = be.COMPLETE);
    });
    return;
  }
  e.loadingPromise = Promise.allSettled(a()).then((c) => {
    let u = !1,
      l = [],
      d = [];
    for (let f of c)
      if (f.status === "fulfilled") {
        let h = f.value,
          p = ft(h) || Iu(h);
        if (p) l.push(p);
        else {
          let D = Cu(h);
          D && d.push(D);
        }
      } else {
        u = !0;
        break;
      }
    if (((e.loadingPromise = null), u)) {
      if (((e.loadingState = be.FAILED), e.errorTmplIndex === null)) {
        let f = nE(t),
          h = new y(750, !1);
        ys(t, h);
      }
    } else {
      e.loadingState = be.COMPLETE;
      let f = s.tView;
      l.length > 0 && (f.directiveRegistry = uh(f.directiveRegistry, l)),
        d.length > 0 && (f.pipeRegistry = uh(f.pipeRegistry, d));
    }
  });
}
function Lg(e, t) {
  let r = e[t.index];
  fn(me.Placeholder, t, r);
}
function dh(e, t, r) {
  e.loadingPromise.then(() => {
    e.loadingState === be.COMPLETE
      ? fn(me.Complete, t, r)
      : e.loadingState === be.FAILED && fn(me.Error, t, r);
  });
}
function jg(e, t) {
  let r = e[S],
    n = e[t.index],
    o = e[Ue];
  if (!Fg(o)) return;
  let i = fr(e, t),
    s = bs(r, t);
  switch ((Og(i), s.loadingState)) {
    case be.NOT_STARTED:
      fn(me.Loading, t, n),
        kg(s, e, t),
        s.loadingState === be.IN_PROGRESS && dh(s, t, n);
      break;
    case be.IN_PROGRESS:
      fn(me.Loading, t, n), dh(s, t, n);
      break;
    case be.COMPLETE:
      fn(me.Complete, t, n);
      break;
    case be.FAILED:
      fn(me.Error, t, n);
      break;
    default:
  }
}
function vl(e, t, r, n) {
  let o = A(),
    i = Mn();
  if (Be(o, i, t)) {
    let s = Q(),
      a = Kr();
    FI(a, o, e, t, r, n);
  }
  return vl;
}
function yl(e, t, r, n) {
  return Be(e, Mn(), r) ? t + gn(r) + n : Le;
}
function KC(e, t, r, n, o, i) {
  let s = iw(),
    a = Ag(e, s, r, o);
  return Ou(2), a ? t + gn(r) + n + gn(o) + i : Le;
}
function mi(e, t) {
  return (e << 17) | (t << 2);
}
function Cn(e) {
  return (e >> 17) & 32767;
}
function JC(e) {
  return (e & 2) == 2;
}
function XC(e, t) {
  return (e & 131071) | (t << 17);
}
function eu(e) {
  return e | 2;
}
function sr(e) {
  return (e & 131068) >> 2;
}
function tc(e, t) {
  return (e & -131069) | (t << 2);
}
function eb(e) {
  return (e & 1) === 1;
}
function tu(e) {
  return e | 1;
}
function tb(e, t, r, n, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Cn(s),
    c = sr(s);
  e[n] = r;
  let u = !1,
    l;
  if (Array.isArray(r)) {
    let d = r;
    (l = d[1]), (l === null || Xr(d, l) > 0) && (u = !0);
  } else l = r;
  if (o)
    if (c !== 0) {
      let f = Cn(e[a + 1]);
      (e[n + 1] = mi(f, a)),
        f !== 0 && (e[f + 1] = tc(e[f + 1], n)),
        (e[a + 1] = XC(e[a + 1], n));
    } else
      (e[n + 1] = mi(a, 0)), a !== 0 && (e[a + 1] = tc(e[a + 1], n)), (a = n);
  else
    (e[n + 1] = mi(c, 0)),
      a === 0 ? (a = n) : (e[c + 1] = tc(e[c + 1], n)),
      (c = n);
  u && (e[n + 1] = eu(e[n + 1])),
    fh(e, l, n, !0),
    fh(e, l, n, !1),
    nb(t, l, e, n, i),
    (s = mi(a, c)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function nb(e, t, r, n, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    Xr(i, t) >= 0 &&
    (r[n + 1] = tu(r[n + 1]));
}
function fh(e, t, r, n) {
  let o = e[r + 1],
    i = t === null,
    s = n ? Cn(o) : sr(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let c = e[s],
      u = e[s + 1];
    rb(c, t) && ((a = !0), (e[s + 1] = n ? tu(u) : eu(u))),
      (s = n ? Cn(u) : sr(u));
  }
  a && (e[r + 1] = n ? eu(o) : tu(o));
}
function rb(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? Xr(e, t) >= 0
    : !1;
}
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Vg(e) {
  return e.substring(se.key, se.keyEnd);
}
function ob(e) {
  return e.substring(se.value, se.valueEnd);
}
function ib(e) {
  return Bg(e), $g(e, ar(e, 0, se.textEnd));
}
function $g(e, t) {
  let r = se.textEnd;
  return r === t ? -1 : ((t = se.keyEnd = ab(e, (se.key = t), r)), ar(e, t, r));
}
function sb(e) {
  return Bg(e), Ug(e, ar(e, 0, se.textEnd));
}
function Ug(e, t) {
  let r = se.textEnd,
    n = (se.key = ar(e, t, r));
  return r === n
    ? -1
    : ((n = se.keyEnd = cb(e, n, r)),
      (n = hh(e, n, r, 58)),
      (n = se.value = ar(e, n, r)),
      (n = se.valueEnd = ub(e, n, r)),
      hh(e, n, r, 59));
}
function Bg(e) {
  (se.key = 0),
    (se.keyEnd = 0),
    (se.value = 0),
    (se.valueEnd = 0),
    (se.textEnd = e.length);
}
function ar(e, t, r) {
  for (; t < r && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function ab(e, t, r) {
  for (; t < r && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function cb(e, t, r) {
  let n;
  for (
    ;
    t < r &&
    ((n = e.charCodeAt(t)) === 45 ||
      n === 95 ||
      ((n & -33) >= 65 && (n & -33) <= 90) ||
      (n >= 48 && n <= 57));

  )
    t++;
  return t;
}
function hh(e, t, r, n) {
  return (t = ar(e, t, r)), t < r && t++, t;
}
function ub(e, t, r) {
  let n = -1,
    o = -1,
    i = -1,
    s = t,
    a = s;
  for (; s < r; ) {
    let c = e.charCodeAt(s++);
    if (c === 59) return a;
    c === 34 || c === 39
      ? (a = s = ph(e, c, s, r))
      : t === s - 4 && i === 85 && o === 82 && n === 76 && c === 40
      ? (a = s = ph(e, 41, s, r))
      : c > 32 && (a = s),
      (i = o),
      (o = n),
      (n = c & -33);
  }
  return a;
}
function ph(e, t, r, n) {
  let o = -1,
    i = r;
  for (; i < n; ) {
    let s = e.charCodeAt(i++);
    if (s == t && o !== 92) return i;
    s == 92 && o === 92 ? (o = 0) : (o = s);
  }
  throw new Error();
}
function lb(e, t, r) {
  let n = A(),
    o = Mn();
  if (Be(n, o, t)) {
    let i = Q(),
      s = Kr();
    ms(i, s, n, e, t, n[K], r, !1);
  }
  return lb;
}
function nu(e, t, r, n, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  ul(e, r, i[s], s, n);
}
function Dl(e, t, r) {
  return zg(e, t, r, !1), Dl;
}
function db(e, t) {
  return zg(e, t, null, !0), db;
}
function Yk(e) {
  wl(qg, fb, e, !1);
}
function fb(e, t) {
  for (let r = sb(t); r >= 0; r = Ug(t, r)) qg(e, Vg(t), ob(t));
}
function Qk(e) {
  wl(yb, Hg, e, !0);
}
function Hg(e, t) {
  for (let r = ib(t); r >= 0; r = $g(t, r)) Jr(e, Vg(t), !0);
}
function zg(e, t, r, n) {
  let o = A(),
    i = Q(),
    s = Ou(2);
  if ((i.firstUpdatePass && Wg(i, e, s, n), t !== Le && Be(o, s, t))) {
    let a = i.data[_t()];
    Zg(i, a, o, o[K], e, (o[s + 1] = wb(t, r)), n, s);
  }
}
function wl(e, t, r, n) {
  let o = Q(),
    i = Ou(2);
  o.firstUpdatePass && Wg(o, null, i, n);
  let s = A();
  if (r !== Le && Be(s, i, r)) {
    let a = o.data[_t()];
    if (Yg(a, n) && !Gg(o, i)) {
      let c = n ? a.classesWithoutHost : a.stylesWithoutHost;
      c !== null && (r = sc(c, r || "")), nu(o, a, s, r, n);
    } else Db(o, a, s, s[K], s[i + 1], (s[i + 1] = vb(e, t, r)), n, i);
  }
}
function Gg(e, t) {
  return t >= e.expandoStartIndex;
}
function Wg(e, t, r, n) {
  let o = e.data;
  if (o[r + 1] === null) {
    let i = o[_t()],
      s = Gg(e, r);
    Yg(i, n) && t === null && !s && (t = !1),
      (t = hb(o, i, t, n)),
      tb(o, i, t, r, s, n);
  }
}
function hb(e, t, r, n) {
  let o = Pu(e),
    i = n ? t.residualClasses : t.residualStyles;
  if (o === null)
    (n ? t.classBindings : t.styleBindings) === 0 &&
      ((r = nc(null, e, t, r, n)), (r = Gr(r, t.attrs, n)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((r = nc(o, e, t, r, n)), i === null)) {
        let c = pb(e, t, n);
        c !== void 0 &&
          Array.isArray(c) &&
          ((c = nc(null, e, t, c[1], n)),
          (c = Gr(c, t.attrs, n)),
          gb(e, t, n, c));
      } else i = mb(e, t, n);
  }
  return (
    i !== void 0 && (n ? (t.residualClasses = i) : (t.residualStyles = i)), r
  );
}
function pb(e, t, r) {
  let n = r ? t.classBindings : t.styleBindings;
  if (sr(n) !== 0) return e[Cn(n)];
}
function gb(e, t, r, n) {
  let o = r ? t.classBindings : t.styleBindings;
  e[Cn(o)] = n;
}
function mb(e, t, r) {
  let n,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    n = Gr(n, s, r);
  }
  return Gr(n, t.attrs, r);
}
function nc(e, t, r, n, o) {
  let i = null,
    s = r.directiveEnd,
    a = r.directiveStylingLast;
  for (
    a === -1 ? (a = r.directiveStart) : a++;
    a < s && ((i = t[a]), (n = Gr(n, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (r.directiveStylingLast = a), n;
}
function Gr(e, t, r) {
  let n = r ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === n &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Jr(e, s, r ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function vb(e, t, r) {
  if (r == null || r === "") return _e;
  let n = [],
    o = Ne(r);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(n, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(n, i, o[i]);
  else typeof o == "string" && t(n, o);
  return n;
}
function qg(e, t, r) {
  Jr(e, t, Ne(r));
}
function yb(e, t, r) {
  let n = String(t);
  n !== "" && !n.includes(" ") && Jr(e, n, r);
}
function Db(e, t, r, n, o, i, s, a) {
  o === Le && (o = _e);
  let c = 0,
    u = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let f = c < o.length ? o[c + 1] : void 0,
      h = u < i.length ? i[u + 1] : void 0,
      p = null,
      D;
    l === d
      ? ((c += 2), (u += 2), f !== h && ((p = d), (D = h)))
      : d === null || (l !== null && l < d)
      ? ((c += 2), (p = l))
      : ((u += 2), (p = d), (D = h)),
      p !== null && Zg(e, t, r, n, p, D, s, a),
      (l = c < o.length ? o[c] : null),
      (d = u < i.length ? i[u] : null);
  }
}
function Zg(e, t, r, n, o, i, s, a) {
  if (!(t.type & 3)) return;
  let c = e.data,
    u = c[a + 1],
    l = eb(u) ? gh(c, t, r, o, sr(u), s) : void 0;
  if (!Bi(l)) {
    Bi(i) || (JC(u) && (i = gh(c, null, r, o, a, s)));
    let d = Su(_t(), r);
    _E(n, s, d, o, i);
  }
}
function gh(e, t, r, n, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let c = e[o],
      u = Array.isArray(c),
      l = u ? c[1] : c,
      d = l === null,
      f = r[o + 1];
    f === Le && (f = d ? _e : void 0);
    let h = d ? qa(f, n) : l === n ? f : void 0;
    if ((u && !Bi(h) && (h = qa(c, n)), Bi(h) && ((a = h), s))) return a;
    let p = e[o + 1];
    o = s ? Cn(p) : sr(p);
  }
  if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = qa(c, n));
  }
  return a;
}
function Bi(e) {
  return e !== void 0;
}
function wb(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = Te(Ne(e)))),
    e
  );
}
function Yg(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function Kk(e, t, r) {
  let n = A(),
    o = yl(n, e, t, r);
  wl(Jr, Hg, o, !0);
}
var ru = class {
  destroy(t) {}
  updateValue(t, r) {}
  swap(t, r) {
    let n = Math.min(t, r),
      o = Math.max(t, r),
      i = this.detach(o);
    if (o - n > 1) {
      let s = this.detach(n);
      this.attach(n, i), this.attach(o, s);
    } else this.attach(n, i);
  }
  move(t, r) {
    this.attach(r, this.detach(t));
  }
};
function rc(e, t, r, n, o) {
  return e === r && Object.is(t, n) ? 1 : Object.is(o(e, t), o(r, n)) ? -1 : 0;
}
function Eb(e, t, r) {
  let n,
    o,
    i = 0,
    s = e.length - 1;
  if (Array.isArray(t)) {
    let a = t.length - 1;
    for (; i <= s && i <= a; ) {
      let c = e.at(i),
        u = t[i],
        l = rc(i, c, i, u, r);
      if (l !== 0) {
        l < 0 && e.updateValue(i, u), i++;
        continue;
      }
      let d = e.at(s),
        f = t[a],
        h = rc(s, d, a, f, r);
      if (h !== 0) {
        h < 0 && e.updateValue(s, f), s--, a--;
        continue;
      }
      let p = r(i, c),
        D = r(s, d),
        v = r(i, u);
      if (Object.is(v, D)) {
        let m = r(a, f);
        Object.is(m, p)
          ? (e.swap(i, s), e.updateValue(s, f), a--, s--)
          : e.move(s, i),
          e.updateValue(i, u),
          i++;
        continue;
      }
      if (((n ??= new Hi()), (o ??= vh(e, i, s, r)), ou(e, n, i, v)))
        e.updateValue(i, u), i++, s++;
      else if (o.has(v)) n.set(p, e.detach(i)), s--;
      else {
        let m = e.create(i, t[i]);
        e.attach(i, m), i++, s++;
      }
    }
    for (; i <= a; ) mh(e, n, r, i, t[i]), i++;
  } else if (t != null) {
    let a = t[Symbol.iterator](),
      c = a.next();
    for (; !c.done && i <= s; ) {
      let u = e.at(i),
        l = c.value,
        d = rc(i, u, i, l, r);
      if (d !== 0) d < 0 && e.updateValue(i, l), i++, (c = a.next());
      else {
        (n ??= new Hi()), (o ??= vh(e, i, s, r));
        let f = r(i, l);
        if (ou(e, n, i, f)) e.updateValue(i, l), i++, s++, (c = a.next());
        else if (!o.has(f))
          e.attach(i, e.create(i, l)), i++, s++, (c = a.next());
        else {
          let h = r(i, u);
          n.set(h, e.detach(i)), s--;
        }
      }
    }
    for (; !c.done; ) mh(e, n, r, e.length, c.value), (c = a.next());
  }
  for (; i <= s; ) e.destroy(e.detach(s--));
  n?.forEach((a) => {
    e.destroy(a);
  });
}
function ou(e, t, r, n) {
  return t !== void 0 && t.has(n)
    ? (e.attach(r, t.get(n)), t.delete(n), !0)
    : !1;
}
function mh(e, t, r, n, o) {
  if (ou(e, t, n, r(n, o))) e.updateValue(n, o);
  else {
    let i = e.create(n, o);
    e.attach(n, i);
  }
}
function vh(e, t, r, n) {
  let o = new Set();
  for (let i = t; i <= r; i++) o.add(n(i, e.at(i)));
  return o;
}
var Hi = class {
  constructor() {
    (this.kvMap = new Map()), (this._vMap = void 0);
  }
  has(t) {
    return this.kvMap.has(t);
  }
  delete(t) {
    if (!this.has(t)) return !1;
    let r = this.kvMap.get(t);
    return (
      this._vMap !== void 0 && this._vMap.has(r)
        ? (this.kvMap.set(t, this._vMap.get(r)), this._vMap.delete(r))
        : this.kvMap.delete(t),
      !0
    );
  }
  get(t) {
    return this.kvMap.get(t);
  }
  set(t, r) {
    if (this.kvMap.has(t)) {
      let n = this.kvMap.get(t);
      this._vMap === void 0 && (this._vMap = new Map());
      let o = this._vMap;
      for (; o.has(n); ) n = o.get(n);
      o.set(n, r);
    } else this.kvMap.set(t, r);
  }
  forEach(t) {
    for (let [r, n] of this.kvMap)
      if ((t(n, r), this._vMap !== void 0)) {
        let o = this._vMap;
        for (; o.has(n); ) (n = o.get(n)), t(n, r);
      }
  }
};
function Jk(e, t, r) {
  Jt("NgControlFlow");
  let n = A(),
    o = Mn(),
    i = cu(n, ee + e),
    s = 0;
  if (Be(n, o, t)) {
    let a = ie(null);
    try {
      if ((hl(i, s), t !== -1)) {
        let c = uu(n[S], ee + t),
          u = or(i, c.tView.ssrId),
          l = no(n, c, r, { dehydratedView: u });
        ro(i, l, s, ir(c, u));
      }
    } finally {
      ie(a);
    }
  } else {
    let a = Mg(i, s);
    a !== void 0 && (a[ve] = r);
  }
}
var iu = class {
  constructor(t, r, n) {
    (this.lContainer = t), (this.$implicit = r), (this.$index = n);
  }
  get $count() {
    return this.lContainer.length - ye;
  }
};
function Xk(e) {
  return e;
}
function e1(e, t) {
  return t;
}
var su = class {
  constructor(t, r, n) {
    (this.hasEmptyBlock = t), (this.trackByFn = r), (this.liveCollection = n);
  }
};
function t1(e, t, r, n, o, i, s, a, c, u, l, d, f) {
  Jt("NgControlFlow");
  let h = c !== void 0,
    p = A(),
    D = a ? s.bind(p[Pe][ve]) : s,
    v = new su(h, D);
  (p[ee + e] = v), Ui(e + 1, t, r, n, o, i), h && Ui(e + 2, c, u, l, d, f);
}
var au = class extends ru {
  constructor(t, r, n) {
    super(),
      (this.lContainer = t),
      (this.hostLView = r),
      (this.templateTNode = n),
      (this.needsIndexUpdate = !1);
  }
  get length() {
    return this.lContainer.length - ye;
  }
  at(t) {
    return this.getLView(t)[ve].$implicit;
  }
  attach(t, r) {
    let n = r[Jn];
    (this.needsIndexUpdate ||= t !== this.length),
      ro(this.lContainer, r, t, ir(this.templateTNode, n));
  }
  detach(t) {
    return (
      (this.needsIndexUpdate ||= t !== this.length - 1), Ib(this.lContainer, t)
    );
  }
  create(t, r) {
    let n = or(this.lContainer, this.templateTNode.tView.ssrId);
    return no(
      this.hostLView,
      this.templateTNode,
      new iu(this.lContainer, r, t),
      { dehydratedView: n }
    );
  }
  destroy(t) {
    us(t[S], t);
  }
  updateValue(t, r) {
    this.getLView(t)[ve].$implicit = r;
  }
  reset() {
    this.needsIndexUpdate = !1;
  }
  updateIndexes() {
    if (this.needsIndexUpdate)
      for (let t = 0; t < this.length; t++) this.getLView(t)[ve].$index = t;
  }
  getLView(t) {
    return Cb(this.lContainer, t);
  }
};
function n1(e) {
  let t = ie(null),
    r = _t();
  try {
    let n = A(),
      o = n[S],
      i = n[r];
    if (i.liveCollection === void 0) {
      let a = r + 1,
        c = cu(n, a),
        u = uu(o, a);
      i.liveCollection = new au(c, n, u);
    } else i.liveCollection.reset();
    let s = i.liveCollection;
    if ((Eb(s, e, i.trackByFn), s.updateIndexes(), i.hasEmptyBlock)) {
      let a = Mn(),
        c = s.length === 0;
      if (Be(n, a, c)) {
        let u = r + 2,
          l = cu(n, u);
        if (c) {
          let d = uu(o, u),
            f = or(l, d.tView.ssrId),
            h = no(n, d, void 0, { dehydratedView: f });
          ro(l, h, 0, ir(d, f));
        } else hl(l, 0);
      }
    }
  } finally {
    ie(t);
  }
}
function cu(e, t) {
  return e[t];
}
function Ib(e, t) {
  return Hr(e, t);
}
function Cb(e, t) {
  return Mg(e, t);
}
function uu(e, t) {
  return Yr(e, t);
}
function bb(e, t, r, n, o, i) {
  let s = t.consts,
    a = er(s, o),
    c = lr(t, e, 2, n, a);
  return (
    cl(t, r, c, er(s, i)),
    c.attrs !== null && Vi(c, c.attrs, !1),
    c.mergedAttrs !== null && Vi(c, c.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, c),
    c
  );
}
function Qg(e, t, r, n) {
  let o = A(),
    i = Q(),
    s = ee + e,
    a = o[K],
    c = i.firstCreatePass ? bb(s, i, o, t, r, n) : i.data[s],
    u = Mb(i, o, c, a, t, e);
  o[s] = u;
  let l = es(c);
  return (
    bn(c, !0),
    Bp(a, u, c),
    (c.flags & 32) !== 32 && ns() && ls(i, o, u, c),
    JD() === 0 && Wt(u, o),
    XD(),
    l && (il(i, o, c), ol(i, c, o)),
    n !== null && sl(o, c),
    Qg
  );
}
function Kg() {
  let e = re();
  Nu() ? Ru() : ((e = e.parent), bn(e, !1));
  let t = e;
  tw(t) && nw(), ew();
  let r = Q();
  return (
    r.firstCreatePass && (os(r, e), Tu(e) && r.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      vw(t) &&
      nu(r, t, A(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      yw(t) &&
      nu(r, t, A(), t.stylesWithoutHost, !1),
    Kg
  );
}
function El(e, t, r, n) {
  return Qg(e, t, r, n), Kg(), El;
}
var Mb = (e, t, r, n, o, i) => (rs(!0), Op(n, o, hw()));
function Tb(e, t, r, n, o) {
  let i = t.consts,
    s = er(i, n),
    a = lr(t, e, 8, "ng-container", s);
  s !== null && Vi(a, s, !0);
  let c = er(i, o);
  return cl(t, r, a, c), t.queries !== null && t.queries.elementStart(t, a), a;
}
function Jg(e, t, r) {
  let n = A(),
    o = Q(),
    i = e + ee,
    s = o.firstCreatePass ? Tb(i, o, n, t, r) : o.data[i];
  bn(s, !0);
  let a = xb(o, n, s, e);
  return (
    (n[i] = a),
    ns() && ls(o, n, a, s),
    Wt(a, n),
    es(s) && (il(o, n, s), ol(o, s, n)),
    r != null && sl(n, s),
    Jg
  );
}
function Xg() {
  let e = re(),
    t = Q();
  return (
    Nu() ? Ru() : ((e = e.parent), bn(e, !1)),
    t.firstCreatePass && (os(t, e), Tu(e) && t.queries.elementEnd(e)),
    Xg
  );
}
function Sb(e, t, r) {
  return Jg(e, t, r), Xg(), Sb;
}
var xb = (e, t, r, n) => (rs(!0), pE(t[K], ""));
function r1() {
  return A();
}
function Ab(e, t, r) {
  let n = A(),
    o = Mn();
  if (Be(n, o, t)) {
    let i = Q(),
      s = Kr();
    ms(i, s, n, e, t, n[K], r, !0);
  }
  return Ab;
}
function _b(e, t, r) {
  let n = A(),
    o = Mn();
  if (Be(n, o, t)) {
    let i = Q(),
      s = Kr(),
      a = Pu(i.data),
      c = Dg(a, s, n);
    ms(i, s, n, e, t, c, r, !0);
  }
  return _b;
}
var dn = void 0;
function Nb(e) {
  let t = e,
    r = Math.floor(Math.abs(e)),
    n = e.toString().replace(/^[^.]*\.?/, "").length;
  return r === 1 && n === 0 ? 1 : 5;
}
var Rb = [
    "en",
    [["a", "p"], ["AM", "PM"], dn],
    [["AM", "PM"], dn, dn],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    dn,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
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
      [
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
    ],
    dn,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", dn, "{1} 'at' {0}", dn],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    Nb,
  ],
  Pr = {};
function em(e, t, r) {
  typeof t != "string" && ((r = t), (t = e[Z.LocaleId])),
    (t = t.toLowerCase().replace(/_/g, "-")),
    (Pr[t] = e),
    r && (Pr[t][Z.ExtraData] = r);
}
function Re(e) {
  let t = Ob(e),
    r = yh(t);
  if (r) return r;
  let n = t.split("-")[0];
  if (((r = yh(n)), r)) return r;
  if (n === "en") return Rb;
  throw new y(701, !1);
}
function yh(e) {
  return (
    e in Pr ||
      (Pr[e] =
        X.ng && X.ng.common && X.ng.common.locales && X.ng.common.locales[e]),
    Pr[e]
  );
}
var Z = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(Z || {});
function Ob(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var zi = "en-US",
  Pb = "USD";
var Fb = zi;
function kb(e) {
  pD(e, "Expected localeId to be defined"),
    typeof e == "string" && (Fb = e.toLowerCase().replace(/_/g, "-"));
}
function hr(e) {
  return !!e && typeof e.then == "function";
}
function Il(e) {
  return !!e && typeof e.subscribe == "function";
}
function Cl(e, t, r, n) {
  let o = A(),
    i = Q(),
    s = re();
  return tm(i, o, o[K], s, e, t, n), Cl;
}
function Lb(e, t) {
  let r = re(),
    n = A(),
    o = Q(),
    i = Pu(o.data),
    s = Dg(i, r, n);
  return tm(o, n, s, r, e, t), Lb;
}
function jb(e, t, r, n) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === r && o[i + 1] === n) {
        let a = t[jr],
          c = o[i + 2];
        return a.length > c ? a[c] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function tm(e, t, r, n, o, i, s) {
  let a = es(n),
    u = e.firstCreatePass && yg(e),
    l = t[ve],
    d = vg(t),
    f = !0;
  if (n.type & 3 || s) {
    let D = He(n, t),
      v = s ? s(D) : D,
      m = d.length,
      j = s ? (U) => s(ht(U[n.index])) : n.index,
      Ee = null;
    if ((!s && a && (Ee = jb(e, t, o, n.index)), Ee !== null)) {
      let U = Ee.__ngLastListenerFn__ || Ee;
      (U.__ngNextListenerFn__ = i), (Ee.__ngLastListenerFn__ = i), (f = !1);
    } else {
      i = wh(n, t, l, i, !1);
      let U = r.listen(v, o, i);
      d.push(i, U), u && u.push(o, j, m, m + 1);
    }
  } else i = wh(n, t, l, i, !1);
  let h = n.outputs,
    p;
  if (f && h !== null && (p = h[o])) {
    let D = p.length;
    if (D)
      for (let v = 0; v < D; v += 2) {
        let m = p[v],
          j = p[v + 1],
          fe = t[m][j].subscribe(i),
          Ye = d.length;
        d.push(i, fe), u && u.push(o, n.index, Ye, -(Ye + 1));
      }
  }
}
function Dh(e, t, r, n) {
  try {
    return ct(6, t, r), r(n) !== !1;
  } catch (o) {
    return ys(e, o), !1;
  } finally {
    ct(7, t, r);
  }
}
function wh(e, t, r, n, o) {
  return function i(s) {
    if (s === Function) return n;
    let a = e.componentOffset > -1 ? Qt(e.index, t) : t;
    Ds(a);
    let c = Dh(t, r, n, s),
      u = i.__ngNextListenerFn__;
    for (; u; ) (c = Dh(t, r, u, s) && c), (u = u.__ngNextListenerFn__);
    return o && c === !1 && s.preventDefault(), c;
  };
}
function o1(e = 1) {
  return dw(e);
}
function Vb(e, t) {
  let r = null,
    n = ND(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      r = o;
      continue;
    }
    if (n === null ? Lh(e, i, !0) : PD(n, i)) return o;
  }
  return r;
}
function i1(e) {
  let t = A()[Pe][ke];
  if (!t.projection) {
    let r = e ? e.length : 1,
      n = (t.projection = Ow(r, null)),
      o = n.slice(),
      i = t.child;
    for (; i !== null; ) {
      let s = e ? Vb(i, e) : 0;
      s !== null && (o[s] ? (o[s].projectionNext = i) : (n[s] = i), (o[s] = i)),
        (i = i.next);
    }
  }
}
function s1(e, t = 0, r) {
  let n = A(),
    o = Q(),
    i = lr(o, ee + e, 16, null, r || null);
  i.projection === null && (i.projection = t),
    Ru(),
    (!n[Jn] || Xh()) && (i.flags & 32) !== 32 && xE(o, n, i);
}
function $b(e, t, r) {
  return nm(e, "", t, "", r), $b;
}
function nm(e, t, r, n, o) {
  let i = A(),
    s = yl(i, t, r, n);
  if (s !== Le) {
    let a = Q(),
      c = Kr();
    ms(a, c, i, e, s, i[K], o, !1);
  }
  return nm;
}
function Ub() {
  return this._results[Symbol.iterator]();
}
var lu = class e {
    get changes() {
      return (this._changes ??= new ge());
    }
    constructor(t = !1) {
      (this._emitDistinctChangesOnly = t),
        (this.dirty = !0),
        (this._results = []),
        (this._changesDetected = !1),
        (this._changes = void 0),
        (this.length = 0),
        (this.first = void 0),
        (this.last = void 0);
      let r = e.prototype;
      r[Symbol.iterator] || (r[Symbol.iterator] = Ub);
    }
    get(t) {
      return this._results[t];
    }
    map(t) {
      return this._results.map(t);
    }
    filter(t) {
      return this._results.filter(t);
    }
    find(t) {
      return this._results.find(t);
    }
    reduce(t, r) {
      return this._results.reduce(t, r);
    }
    forEach(t) {
      this._results.forEach(t);
    }
    some(t) {
      return this._results.some(t);
    }
    toArray() {
      return this._results.slice();
    }
    toString() {
      return this._results.toString();
    }
    reset(t, r) {
      this.dirty = !1;
      let n = Rw(t);
      (this._changesDetected = !Nw(this._results, n, r)) &&
        ((this._results = n),
        (this.length = n.length),
        (this.last = n[this.length - 1]),
        (this.first = n[0]));
    }
    notifyOnChanges() {
      this._changes !== void 0 &&
        (this._changesDetected || !this._emitDistinctChangesOnly) &&
        this._changes.emit(this);
    }
    setDirty() {
      this.dirty = !0;
    }
    destroy() {
      this._changes !== void 0 &&
        (this._changes.complete(), this._changes.unsubscribe());
    }
  },
  qt = (() => {
    let t = class t {};
    t.__NG_ELEMENT_ID__ = zb;
    let e = t;
    return e;
  })(),
  Bb = qt,
  Hb = class extends Bb {
    constructor(t, r, n) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = r),
        (this.elementRef = n);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, r) {
      return this.createEmbeddedViewImpl(t, r);
    }
    createEmbeddedViewImpl(t, r, n) {
      let o = no(this._declarationLView, this._declarationTContainer, t, {
        injector: r,
        dehydratedView: n,
      });
      return new In(o);
    }
  };
function zb() {
  return Ms(re(), A());
}
function Ms(e, t) {
  return e.type & 4 ? new Hb(t, e, ur(e, t)) : null;
}
var du = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  fu = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let r = t.queries;
      if (r !== null) {
        let n = t.contentQueries !== null ? t.contentQueries[0] : r.length,
          o = [];
        for (let i = 0; i < n; i++) {
          let s = r.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let r = 0; r < this.queries.length; r++)
        sm(t, r).matches !== null && this.queries[r].setDirty();
    }
  },
  Gi = class {
    constructor(t, r, n = null) {
      (this.predicate = t), (this.flags = r), (this.read = n);
    }
  },
  hu = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, r) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementStart(t, r);
    }
    elementEnd(t) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementEnd(t);
    }
    embeddedTView(t) {
      let r = null;
      for (let n = 0; n < this.length; n++) {
        let o = r !== null ? r.length : 0,
          i = this.getByIndex(n).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = n), r !== null ? r.push(i) : (r = [i]));
      }
      return r !== null ? new e(r) : null;
    }
    template(t, r) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].template(t, r);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  pu = class e {
    constructor(t, r = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = r);
    }
    elementStart(t, r) {
      this.isApplyingToNode(r) && this.matchTNode(t, r);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, r) {
      this.elementStart(t, r);
    }
    embeddedTView(t, r) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, r),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let r = this._declarationNodeIndex,
          n = t.parent;
        for (; n !== null && n.type & 8 && n.index !== r; ) n = n.parent;
        return r === (n !== null ? n.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, r) {
      let n = this.metadata.predicate;
      if (Array.isArray(n))
        for (let o = 0; o < n.length; o++) {
          let i = n[o];
          this.matchTNodeWithReadOption(t, r, Gb(r, i)),
            this.matchTNodeWithReadOption(t, r, wi(r, t, i, !1, !1));
        }
      else
        n === qt
          ? r.type & 4 && this.matchTNodeWithReadOption(t, r, -1)
          : this.matchTNodeWithReadOption(t, r, wi(r, t, n, !1, !1));
    }
    matchTNodeWithReadOption(t, r, n) {
      if (n !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Ge || o === Dt || (o === qt && r.type & 4))
            this.addMatch(r.index, -2);
          else {
            let i = wi(r, t, o, !1, !1);
            i !== null && this.addMatch(r.index, i);
          }
        else this.addMatch(r.index, n);
      }
    }
    addMatch(t, r) {
      this.matches === null ? (this.matches = [t, r]) : this.matches.push(t, r);
    }
  };
function Gb(e, t) {
  let r = e.localNames;
  if (r !== null) {
    for (let n = 0; n < r.length; n += 2) if (r[n] === t) return r[n + 1];
  }
  return null;
}
function Wb(e, t) {
  return e.type & 11 ? ur(e, t) : e.type & 4 ? Ms(e, t) : null;
}
function qb(e, t, r, n) {
  return r === -1 ? Wb(t, e) : r === -2 ? Zb(e, t, n) : En(e, e[S], r, t);
}
function Zb(e, t, r) {
  if (r === Ge) return ur(t, e);
  if (r === qt) return Ms(t, e);
  if (r === Dt) return Sg(t, e);
}
function rm(e, t, r, n) {
  let o = t[lt].queries[n];
  if (o.matches === null) {
    let i = e.data,
      s = r.matches,
      a = [];
    for (let c = 0; c < s.length; c += 2) {
      let u = s[c];
      if (u < 0) a.push(null);
      else {
        let l = i[u];
        a.push(qb(t, l, s[c + 1], r.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function gu(e, t, r, n) {
  let o = e.queries.getByIndex(r),
    i = o.matches;
  if (i !== null) {
    let s = rm(e, t, o, r);
    for (let a = 0; a < i.length; a += 2) {
      let c = i[a];
      if (c > 0) n.push(s[a / 2]);
      else {
        let u = i[a + 1],
          l = t[-c];
        for (let d = ye; d < l.length; d++) {
          let f = l[d];
          f[Zr] === f[ue] && gu(f[S], f, u, n);
        }
        if (l[Xn] !== null) {
          let d = l[Xn];
          for (let f = 0; f < d.length; f++) {
            let h = d[f];
            gu(h[S], h, u, n);
          }
        }
      }
    }
  }
  return n;
}
function Yb(e, t) {
  return e[lt].queries[t].queryList;
}
function om(e, t, r) {
  let n = new lu((r & 4) === 4);
  wI(e, t, n, n.destroy),
    t[lt] === null && (t[lt] = new fu()),
    t[lt].queries.push(new du(n));
}
function im(e, t, r) {
  e.queries === null && (e.queries = new hu()), e.queries.track(new pu(t, r));
}
function Qb(e, t) {
  let r = e.contentQueries || (e.contentQueries = []),
    n = r.length ? r[r.length - 1] : -1;
  t !== n && r.push(e.queries.length - 1, t);
}
function sm(e, t) {
  return e.queries.getByIndex(t);
}
function am(e, t, r, n) {
  let o = Q();
  if (o.firstCreatePass) {
    let i = re();
    im(o, new Gi(t, r, n), i.index),
      Qb(o, e),
      (r & 2) === 2 && (o.staticContentQueries = !0);
  }
  om(o, A(), r);
}
function c1(e, t, r) {
  let n = Q();
  n.firstCreatePass &&
    (im(n, new Gi(e, t, r), -1), (t & 2) === 2 && (n.staticViewQueries = !0)),
    om(n, A(), t);
}
function cm(e) {
  let t = A(),
    r = Q(),
    n = tp();
  Fu(n + 1);
  let o = sm(r, n);
  if (e.dirty && YD(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = o.crossesNgTemplate ? gu(r, t, n, []) : rm(r, t, o, n);
      e.reset(i, nI), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function um() {
  return Yb(A(), tp());
}
function Kb(e, t, r, n) {
  r >= e.data.length && ((e.data[r] = null), (e.blueprint[r] = null)),
    (t[r] = n);
}
function u1(e) {
  let t = ow();
  return xu(t, ee + e);
}
function l1(e, t = "") {
  let r = A(),
    n = Q(),
    o = e + ee,
    i = n.firstCreatePass ? lr(n, o, 1, t, null) : n.data[o],
    s = Jb(n, r, i, t, e);
  (r[o] = s), ns() && ls(n, r, s, i), bn(i, !1);
}
var Jb = (e, t, r, n, o) => (rs(!0), fE(t[K], n));
function Xb(e) {
  return lm("", e, ""), Xb;
}
function lm(e, t, r) {
  let n = A(),
    o = yl(n, e, t, r);
  return o !== Le && wg(n, _t(), o), lm;
}
function e0(e, t, r, n, o) {
  let i = A(),
    s = KC(i, e, t, r, n, o);
  return s !== Le && wg(i, _t(), s), e0;
}
function t0(e, t, r) {
  let n = Q();
  if (n.firstCreatePass) {
    let o = St(e);
    mu(r, n.data, n.blueprint, o, !0), mu(t, n.data, n.blueprint, o, !1);
  }
}
function mu(e, t, r, n, o) {
  if (((e = Me(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) mu(e[i], t, r, n, o);
  else {
    let i = Q(),
      s = A(),
      a = re(),
      c = nr(e) ? e : Me(e.provide),
      u = Mp(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      f = a.providerIndexes >> 20;
    if (nr(e) || !e.multi) {
      let h = new wn(u, o, L),
        p = ic(c, t, o ? l : l + f, d);
      p === -1
        ? (mc(Ni(a, s), i, c),
          oc(i, e, t.length),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          r.push(h),
          s.push(h))
        : ((r[p] = h), (s[p] = h));
    } else {
      let h = ic(c, t, l + f, d),
        p = ic(c, t, l, l + f),
        D = h >= 0 && r[h],
        v = p >= 0 && r[p];
      if ((o && !v) || (!o && !D)) {
        mc(Ni(a, s), i, c);
        let m = o0(o ? r0 : n0, r.length, o, n, u);
        !o && v && (r[p].providerFactory = m),
          oc(i, e, t.length, 0),
          t.push(c),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          r.push(m),
          s.push(m);
      } else {
        let m = dm(r[o ? p : h], u, !o && n);
        oc(i, e, h > -1 ? h : p, m);
      }
      !o && n && v && r[p].componentProviders++;
    }
  }
}
function oc(e, t, r, n) {
  let o = nr(t),
    i = Ww(t);
  if (o || i) {
    let c = (i ? Me(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
      let u = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = u.indexOf(r);
        l === -1 ? u.push(r, [n, c]) : u[l + 1].push(n, c);
      } else u.push(r, c);
    }
  }
}
function dm(e, t, r) {
  return r && e.componentProviders++, e.multi.push(t) - 1;
}
function ic(e, t, r, n) {
  for (let o = r; o < n; o++) if (t[o] === e) return o;
  return -1;
}
function n0(e, t, r, n) {
  return vu(this.multi, []);
}
function r0(e, t, r, n) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = En(r, r[S], this.providerFactory.index, n);
    (i = a.slice(0, s)), vu(o, i);
    for (let c = s; c < a.length; c++) i.push(a[c]);
  } else (i = []), vu(o, i);
  return i;
}
function vu(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    t.push(n());
  }
  return t;
}
function o0(e, t, r, n, o) {
  let i = new wn(e, r, L);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    dm(i, o, n && !r),
    i
  );
}
function d1(e, t = []) {
  return (r) => {
    r.providersResolver = (n, o) => t0(n, o ? o(e) : e, t);
  };
}
var Zt = class {},
  Wr = class {};
var Wi = class extends Zt {
    constructor(t, r, n) {
      super(),
        (this._parent = r),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new $i(this));
      let o = $h(t);
      (this._bootstrapComponents = _p(o.bootstrap)),
        (this._r3Injector = Tp(
          t,
          r,
          [
            { provide: Zt, useValue: this },
            { provide: ps, useValue: this.componentFactoryResolver },
            ...n,
          ],
          Te(t),
          new Set(["environment"])
        )),
        this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(t));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((r) => r()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  qi = class extends Wr {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new Wi(this.moduleType, t, []);
    }
  };
function i0(e, t, r) {
  return new Wi(e, t, r);
}
var yu = class extends Zt {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new $i(this)),
      (this.instance = null);
    let r = new Br(
      [
        ...t.providers,
        { provide: Zt, useValue: this },
        { provide: ps, useValue: this.componentFactoryResolver },
      ],
      t.parent || Hu(),
      t.debugName,
      new Set(["environment"])
    );
    (this.injector = r),
      t.runEnvironmentInitializers && r.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Ts(e, t, r = null) {
  return new yu({
    providers: e,
    parent: t,
    debugName: r,
    runEnvironmentInitializers: !0,
  }).injector;
}
var s0 = (() => {
  let t = class t {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let o = Ip(!1, n.type),
          i =
            o.length > 0
              ? Ts([o], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, i);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
  };
  t.ɵprov = w({
    token: t,
    providedIn: "environment",
    factory: () => new t(C(we)),
  });
  let e = t;
  return e;
})();
function fm(e) {
  Jt("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(s0).getOrCreateStandaloneInjector(e));
}
function f1(e, t, r) {
  let n = e.ɵcmp;
  (n.directiveDefs = Ti(t, !1)), (n.pipeDefs = Ti(r, !0));
}
function h1(e, t, r) {
  let n = Qr() + e,
    o = A();
  return o[n] === Le ? pl(o, n, r ? t.call(r) : t()) : SC(o, n);
}
function p1(e, t, r, n) {
  return pm(A(), Qr(), e, t, r, n);
}
function g1(e, t, r, n, o) {
  return gm(A(), Qr(), e, t, r, n, o);
}
function hm(e, t) {
  let r = e[t];
  return r === Le ? void 0 : r;
}
function pm(e, t, r, n, o, i) {
  let s = t + r;
  return Be(e, s, o) ? pl(e, s + 1, i ? n.call(i, o) : n(o)) : hm(e, s + 1);
}
function gm(e, t, r, n, o, i, s) {
  let a = t + r;
  return Ag(e, a, o, i)
    ? pl(e, a + 2, s ? n.call(s, o, i) : n(o, i))
    : hm(e, a + 2);
}
function m1(e, t) {
  let r = Q(),
    n,
    o = e + ee;
  r.firstCreatePass
    ? ((n = a0(t, r.pipeRegistry)),
      (r.data[o] = n),
      n.onDestroy && (r.destroyHooks ??= []).push(o, n.onDestroy))
    : (n = r.data[o]);
  let i = n.factory || (n.factory = yn(n.type, !0)),
    s,
    a = Ae(L);
  try {
    let c = _i(!1),
      u = i();
    return _i(c), Kb(r, A(), o, u), u;
  } finally {
    Ae(a);
  }
}
function a0(e, t) {
  if (t)
    for (let r = t.length - 1; r >= 0; r--) {
      let n = t[r];
      if (e === n.name) return n;
    }
}
function v1(e, t, r) {
  let n = e + ee,
    o = A(),
    i = xu(o, n);
  return mm(o, n) ? pm(o, Qr(), t, i.transform, r, i) : i.transform(r);
}
function y1(e, t, r, n) {
  let o = e + ee,
    i = A(),
    s = xu(i, o);
  return mm(i, o) ? gm(i, Qr(), t, s.transform, r, n, s) : s.transform(r, n);
}
function mm(e, t) {
  return e[S].data[t].pure;
}
function D1(e, t) {
  return Ms(e, t);
}
var vi = null;
function c0(e) {
  (vi !== null &&
    (e.defaultEncapsulation !== vi.defaultEncapsulation ||
      e.preserveWhitespaces !== vi.preserveWhitespaces)) ||
    (vi = e);
}
var Ss = (() => {
    let t = class t {
      log(n) {
        console.log(n);
      }
      warn(n) {
        console.warn(n);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  Du = class {
    constructor(t, r) {
      (this.ngModuleFactory = t), (this.componentFactories = r);
    }
  },
  xs = (() => {
    let t = class t {
      compileModuleSync(n) {
        return new qi(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let o = this.compileModuleSync(n),
          i = $h(n),
          s = _p(i.declarations).reduce((a, c) => {
            let u = ft(c);
            return u && a.push(new rr(u)), a;
          }, []);
        return new Du(o, s);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  u0 = new E("");
var Tn = (() => {
  let t = class t {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new he(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var bl = new E(""),
  oo = new E(""),
  As = (() => {
    let t = class t {
      constructor(n, o, i) {
        (this._ngZone = n),
          (this.registry = o),
          (this._pendingCount = 0),
          (this._isZoneStable = !0),
          (this._callbacks = []),
          (this.taskTrackingZone = null),
          Ml || (l0(i), i.addToWindow(o)),
          this._watchAngularEvents(),
          n.run(() => {
            this.taskTrackingZone =
              typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
          });
      }
      _watchAngularEvents() {
        this._ngZone.onUnstable.subscribe({
          next: () => {
            this._isZoneStable = !1;
          },
        }),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                B.assertNotInAngularZone(),
                  queueMicrotask(() => {
                    (this._isZoneStable = !0), this._runCallbacksIfReady();
                  });
              },
            });
          });
      }
      increasePendingRequestCount() {
        return (this._pendingCount += 1), this._pendingCount;
      }
      decreasePendingRequestCount() {
        if (((this._pendingCount -= 1), this._pendingCount < 0))
          throw new Error("pending async requests below zero");
        return this._runCallbacksIfReady(), this._pendingCount;
      }
      isStable() {
        return (
          this._isZoneStable &&
          this._pendingCount === 0 &&
          !this._ngZone.hasPendingMacrotasks
        );
      }
      _runCallbacksIfReady() {
        if (this.isStable())
          queueMicrotask(() => {
            for (; this._callbacks.length !== 0; ) {
              let n = this._callbacks.pop();
              clearTimeout(n.timeoutId), n.doneCb();
            }
          });
        else {
          let n = this.getPendingTasks();
          this._callbacks = this._callbacks.filter((o) =>
            o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0
          );
        }
      }
      getPendingTasks() {
        return this.taskTrackingZone
          ? this.taskTrackingZone.macroTasks.map((n) => ({
              source: n.source,
              creationLocation: n.creationLocation,
              data: n.data,
            }))
          : [];
      }
      addCallback(n, o, i) {
        let s = -1;
        o &&
          o > 0 &&
          (s = setTimeout(() => {
            (this._callbacks = this._callbacks.filter(
              (a) => a.timeoutId !== s
            )),
              n();
          }, o)),
          this._callbacks.push({ doneCb: n, timeoutId: s, updateCb: i });
      }
      whenStable(n, o, i) {
        if (i && !this.taskTrackingZone)
          throw new Error(
            'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
          );
        this.addCallback(n, o, i), this._runCallbacksIfReady();
      }
      getPendingRequestCount() {
        return this._pendingCount;
      }
      registerApplication(n) {
        this.registry.registerApplication(n, this);
      }
      unregisterApplication(n) {
        this.registry.unregisterApplication(n);
      }
      findProviders(n, o, i) {
        return [];
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(B), C(_s), C(oo));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  _s = (() => {
    let t = class t {
      constructor() {
        this._applications = new Map();
      }
      registerApplication(n, o) {
        this._applications.set(n, o);
      }
      unregisterApplication(n) {
        this._applications.delete(n);
      }
      unregisterAllApplications() {
        this._applications.clear();
      }
      getTestability(n) {
        return this._applications.get(n) || null;
      }
      getAllTestabilities() {
        return Array.from(this._applications.values());
      }
      getAllRootElements() {
        return Array.from(this._applications.keys());
      }
      findTestabilityInTree(n, o = !0) {
        return Ml?.findTestabilityInTree(this, n, o) ?? null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })();
function l0(e) {
  Ml = e;
}
var Ml,
  Ns = new E(""),
  vm = (() => {
    let t = class t {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, o) => {
            (this.resolve = n), (this.reject = o);
          })),
          (this.appInits = g(Ns, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let i of this.appInits) {
          let s = i();
          if (hr(s)) n.push(s);
          else if (Il(s)) {
            let a = new Promise((c, u) => {
              s.subscribe({ complete: c, error: u });
            });
            n.push(a);
          }
        }
        let o = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            o();
          })
          .catch((i) => {
            this.reject(i);
          }),
          n.length === 0 && o(),
          (this.initialized = !0);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Rs = new E("");
function d0(e, t, r) {
  let n = new qi(r);
  return Promise.resolve(n);
}
function f0() {
  Qd(() => {
    throw new y(600, !1);
  });
}
function h0(e) {
  return e.isBoundToModule;
}
function p0(e, t, r) {
  try {
    let n = r();
    return hr(n)
      ? n.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : n;
  } catch (n) {
    throw (t.runOutsideAngular(() => e.handleError(n)), n);
  }
}
function ym(e, t) {
  return Array.isArray(t) ? t.reduce(ym, e) : I(I({}, e), t);
}
var Sn = (() => {
  let t = class t {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = g(ig)),
        (this.afterRenderEffectManager = g(ws)),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = g(Tn).hasPendingTasks.pipe(O((n) => !n))),
        (this._injector = g(we));
    }
    get destroyed() {
      return this._destroyed;
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, o) {
      let i = n instanceof ki;
      if (!this._injector.get(vm).done) {
        let h = !i && Vh(n),
          p = !1;
        throw new y(405, p);
      }
      let a;
      i ? (a = n) : (a = this._injector.get(ps).resolveComponentFactory(n)),
        this.componentTypes.push(a.componentType);
      let c = h0(a) ? void 0 : this._injector.get(Zt),
        u = o || a.selector,
        l = a.create(ze.NULL, [], u, c),
        d = l.location.nativeElement,
        f = l.injector.get(bl, null);
      return (
        f?.registerApplication(d),
        l.onDestroy(() => {
          this.detachView(l.hostView),
            Ci(this.components, l),
            f?.unregisterApplication(d);
        }),
        this._loadComponent(l),
        l
      );
    }
    tick() {
      if (this._runningTick) throw new y(101, !1);
      try {
        this._runningTick = !0;
        for (let n of this._views) n.detectChanges();
      } catch (n) {
        this.internalErrorHandler(n);
      } finally {
        try {
          let n = this.afterRenderEffectManager.execute();
        } catch (n) {
          this.internalErrorHandler(n);
        }
        this._runningTick = !1;
      }
    }
    attachView(n) {
      let o = n;
      this._views.push(o), o.attachToAppRef(this);
    }
    detachView(n) {
      let o = n;
      Ci(this._views, o), o.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let o = this._injector.get(Rs, []);
      [...this._bootstrapListeners, ...o].forEach((i) => i(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => Ci(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new y(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function Ci(e, t) {
  let r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
function Eh(e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}
var g0 = (() => {
  let t = class t {
    constructor() {
      (this.zone = g(B)), (this.applicationRef = g(Sn));
    }
    initialize() {
      this._onMicrotaskEmptySubscription ||
        (this._onMicrotaskEmptySubscription =
          this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.zone.run(() => {
                this.applicationRef.tick();
              });
            },
          }));
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function m0(e) {
  return [
    { provide: B, useFactory: e },
    {
      provide: tr,
      multi: !0,
      useFactory: () => {
        let t = g(g0, { optional: !0 });
        return () => t.initialize();
      },
    },
    {
      provide: tr,
      multi: !0,
      useFactory: () => {
        let t = g(D0);
        return () => {
          t.initialize();
        };
      },
    },
    { provide: ig, useFactory: v0 },
  ];
}
function v0() {
  let e = g(B),
    t = g(gt);
  return (r) => e.runOutsideAngular(() => t.handleError(r));
}
function y0(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var D0 = (() => {
  let t = class t {
    constructor() {
      (this.subscription = new J()),
        (this.initialized = !1),
        (this.zone = g(B)),
        (this.pendingTasks = g(Tn));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              B.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            B.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function w0() {
  return (typeof $localize < "u" && $localize.locale) || zi;
}
var io = new E("", {
    providedIn: "root",
    factory: () => g(io, F.Optional | F.SkipSelf) || w0(),
  }),
  Dm = new E("", { providedIn: "root", factory: () => Pb });
var wm = new E(""),
  Em = (() => {
    let t = class t {
      constructor(n) {
        (this._injector = n),
          (this._modules = []),
          (this._destroyListeners = []),
          (this._destroyed = !1);
      }
      bootstrapModuleFactory(n, o) {
        let i = eC(
          o?.ngZone,
          y0({
            eventCoalescing: o?.ngZoneEventCoalescing,
            runCoalescing: o?.ngZoneRunCoalescing,
          })
        );
        return i.run(() => {
          let s = i0(
              n.moduleType,
              this.injector,
              m0(() => i)
            ),
            a = s.injector.get(gt, null);
          return (
            i.runOutsideAngular(() => {
              let c = i.onError.subscribe({
                next: (u) => {
                  a.handleError(u);
                },
              });
              s.onDestroy(() => {
                Ci(this._modules, s), c.unsubscribe();
              });
            }),
            p0(a, i, () => {
              let c = s.injector.get(vm);
              return (
                c.runInitializers(),
                c.donePromise.then(() => {
                  let u = s.injector.get(io, zi);
                  return kb(u || zi), this._moduleDoBootstrap(s), s;
                })
              );
            })
          );
        });
      }
      bootstrapModule(n, o = []) {
        let i = ym({}, o);
        return d0(this.injector, i, n).then((s) =>
          this.bootstrapModuleFactory(s, i)
        );
      }
      _moduleDoBootstrap(n) {
        let o = n.injector.get(Sn);
        if (n._bootstrapComponents.length > 0)
          n._bootstrapComponents.forEach((i) => o.bootstrap(i));
        else if (n.instance.ngDoBootstrap) n.instance.ngDoBootstrap(o);
        else throw new y(-403, !1);
        this._modules.push(n);
      }
      onDestroy(n) {
        this._destroyListeners.push(n);
      }
      get injector() {
        return this._injector;
      }
      destroy() {
        if (this._destroyed) throw new y(404, !1);
        this._modules.slice().forEach((o) => o.destroy()),
          this._destroyListeners.forEach((o) => o());
        let n = this._injector.get(wm, null);
        n && (n.forEach((o) => o()), n.clear()), (this._destroyed = !0);
      }
      get destroyed() {
        return this._destroyed;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(ze));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  Fr = null,
  Im = new E("");
function E0(e) {
  if (Fr && !Fr.get(Im, !1)) throw new y(400, !1);
  f0(), (Fr = e);
  let t = e.get(Em);
  return b0(e), t;
}
function Tl(e, t, r = []) {
  let n = `Platform: ${t}`,
    o = new E(n);
  return (i = []) => {
    let s = Cm();
    if (!s || s.injector.get(Im, !1)) {
      let a = [...r, ...i, { provide: o, useValue: !0 }];
      e ? e(a) : E0(I0(a, n));
    }
    return C0(o);
  };
}
function I0(e = [], t) {
  return ze.create({
    name: t,
    providers: [
      { provide: as, useValue: "platform" },
      { provide: wm, useValue: new Set([() => (Fr = null)]) },
      ...e,
    ],
  });
}
function C0(e) {
  let t = Cm();
  if (!t) throw new y(401, !1);
  return t;
}
function Cm() {
  return Fr?.get(Em) ?? null;
}
function b0(e) {
  e.get(zu, null)?.forEach((r) => r());
}
function w1() {
  return !1;
}
var bm = Tl(null, "core", []),
  Mm = (() => {
    let t = class t {
      constructor(n) {}
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(Sn));
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({}));
    let e = t;
    return e;
  })();
function Xt(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Sl(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function Tm(e) {
  let t = ft(e);
  if (!t) return null;
  let r = new rr(t);
  return {
    get selector() {
      return r.selector;
    },
    get type() {
      return r.componentType;
    },
    get inputs() {
      return r.inputs;
    },
    get outputs() {
      return r.outputs;
    },
    get ngContentSelectors() {
      return r.ngContentSelectors;
    },
    get isStandalone() {
      return t.standalone;
    },
    get isSignal() {
      return t.signals;
    },
  };
}
var km = null;
function xn() {
  return km;
}
function Lm(e) {
  km ??= e;
}
var Bs = class {},
  le = new E(""),
  Ul = (() => {
    let t = class t {
      historyGo(n) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(M0), providedIn: "platform" }));
    let e = t;
    return e;
  })(),
  jm = new E(""),
  M0 = (() => {
    let t = class t extends Ul {
      constructor() {
        super(),
          (this._doc = g(le)),
          (this._location = window.location),
          (this._history = window.history);
      }
      getBaseHrefFromDOM() {
        return xn().getBaseHref(this._doc);
      }
      onPopState(n) {
        let o = xn().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("popstate", n, !1),
          () => o.removeEventListener("popstate", n)
        );
      }
      onHashChange(n) {
        let o = xn().getGlobalEventTarget(this._doc, "window");
        return (
          o.addEventListener("hashchange", n, !1),
          () => o.removeEventListener("hashchange", n)
        );
      }
      get href() {
        return this._location.href;
      }
      get protocol() {
        return this._location.protocol;
      }
      get hostname() {
        return this._location.hostname;
      }
      get port() {
        return this._location.port;
      }
      get pathname() {
        return this._location.pathname;
      }
      get search() {
        return this._location.search;
      }
      get hash() {
        return this._location.hash;
      }
      set pathname(n) {
        this._location.pathname = n;
      }
      pushState(n, o, i) {
        this._history.pushState(n, o, i);
      }
      replaceState(n, o, i) {
        this._history.replaceState(n, o, i);
      }
      forward() {
        this._history.forward();
      }
      back() {
        this._history.back();
      }
      historyGo(n = 0) {
        this._history.go(n);
      }
      getState() {
        return this._history.state;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({
        token: t,
        factory: () => new t(),
        providedIn: "platform",
      }));
    let e = t;
    return e;
  })();
function Bl(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let r = 0;
  return (
    e.endsWith("/") && r++,
    t.startsWith("/") && r++,
    r == 2 ? e + t.substring(1) : r == 1 ? e + t : e + "/" + t
  );
}
function Sm(e) {
  let t = e.match(/#|\?|$/),
    r = (t && t.index) || e.length,
    n = r - (e[r - 1] === "/" ? 1 : 0);
  return e.slice(0, n) + e.slice(r);
}
function Pt(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var Lt = (() => {
    let t = class t {
      historyGo(n) {
        throw new Error("");
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(Hl), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Vm = new E(""),
  Hl = (() => {
    let t = class t extends Lt {
      constructor(n, o) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            o ??
            this._platformLocation.getBaseHrefFromDOM() ??
            g(le).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Bl(this._baseHref, n);
      }
      path(n = !1) {
        let o =
            this._platformLocation.pathname + Pt(this._platformLocation.search),
          i = this._platformLocation.hash;
        return i && n ? `${o}${i}` : o;
      }
      pushState(n, o, i, s) {
        let a = this.prepareExternalUrl(i + Pt(s));
        this._platformLocation.pushState(n, o, a);
      }
      replaceState(n, o, i, s) {
        let a = this.prepareExternalUrl(i + Pt(s));
        this._platformLocation.replaceState(n, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(Ul), C(Vm, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  $m = (() => {
    let t = class t extends Lt {
      constructor(n, o) {
        super(),
          (this._platformLocation = n),
          (this._baseHref = ""),
          (this._removeListenerFns = []),
          o != null && (this._baseHref = o);
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      path(n = !1) {
        let o = this._platformLocation.hash ?? "#";
        return o.length > 0 ? o.substring(1) : o;
      }
      prepareExternalUrl(n) {
        let o = Bl(this._baseHref, n);
        return o.length > 0 ? "#" + o : o;
      }
      pushState(n, o, i, s) {
        let a = this.prepareExternalUrl(i + Pt(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.pushState(n, o, a);
      }
      replaceState(n, o, i, s) {
        let a = this.prepareExternalUrl(i + Pt(s));
        a.length == 0 && (a = this._platformLocation.pathname),
          this._platformLocation.replaceState(n, o, a);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(Ul), C(Vm, 8));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  gr = (() => {
    let t = class t {
      constructor(n) {
        (this._subject = new ge()),
          (this._urlChangeListeners = []),
          (this._urlChangeSubscription = null),
          (this._locationStrategy = n);
        let o = this._locationStrategy.getBaseHref();
        (this._basePath = x0(Sm(xm(o)))),
          this._locationStrategy.onPopState((i) => {
            this._subject.emit({
              url: this.path(!0),
              pop: !0,
              state: i.state,
              type: i.type,
            });
          });
      }
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe(),
          (this._urlChangeListeners = []);
      }
      path(n = !1) {
        return this.normalize(this._locationStrategy.path(n));
      }
      getState() {
        return this._locationStrategy.getState();
      }
      isCurrentPathEqualTo(n, o = "") {
        return this.path() == this.normalize(n + Pt(o));
      }
      normalize(n) {
        return t.stripTrailingSlash(S0(this._basePath, xm(n)));
      }
      prepareExternalUrl(n) {
        return (
          n && n[0] !== "/" && (n = "/" + n),
          this._locationStrategy.prepareExternalUrl(n)
        );
      }
      go(n, o = "", i = null) {
        this._locationStrategy.pushState(i, "", n, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Pt(o)), i);
      }
      replaceState(n, o = "", i = null) {
        this._locationStrategy.replaceState(i, "", n, o),
          this._notifyUrlChangeListeners(this.prepareExternalUrl(n + Pt(o)), i);
      }
      forward() {
        this._locationStrategy.forward();
      }
      back() {
        this._locationStrategy.back();
      }
      historyGo(n = 0) {
        this._locationStrategy.historyGo?.(n);
      }
      onUrlChange(n) {
        return (
          this._urlChangeListeners.push(n),
          (this._urlChangeSubscription ??= this.subscribe((o) => {
            this._notifyUrlChangeListeners(o.url, o.state);
          })),
          () => {
            let o = this._urlChangeListeners.indexOf(n);
            this._urlChangeListeners.splice(o, 1),
              this._urlChangeListeners.length === 0 &&
                (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeSubscription = null));
          }
        );
      }
      _notifyUrlChangeListeners(n = "", o) {
        this._urlChangeListeners.forEach((i) => i(n, o));
      }
      subscribe(n, o, i) {
        return this._subject.subscribe({ next: n, error: o, complete: i });
      }
    };
    (t.normalizeQueryParams = Pt),
      (t.joinWithSlash = Bl),
      (t.stripTrailingSlash = Sm),
      (t.ɵfac = function (o) {
        return new (o || t)(C(Lt));
      }),
      (t.ɵprov = w({ token: t, factory: () => T0(), providedIn: "root" }));
    let e = t;
    return e;
  })();
function T0() {
  return new gr(C(Lt));
}
function S0(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let r = t.substring(e.length);
  return r === "" || ["/", ";", "?", "#"].includes(r[0]) ? r : t;
}
function xm(e) {
  return e.replace(/\/index.html$/, "");
}
function x0(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, r] = e.split(/\/\/[^\/]+/);
    return r;
  }
  return e;
}
var Um = {
    ADP: [void 0, void 0, 0],
    AFN: [void 0, "\u060B", 0],
    ALL: [void 0, void 0, 0],
    AMD: [void 0, "\u058F", 2],
    AOA: [void 0, "Kz"],
    ARS: [void 0, "$"],
    AUD: ["A$", "$"],
    AZN: [void 0, "\u20BC"],
    BAM: [void 0, "KM"],
    BBD: [void 0, "$"],
    BDT: [void 0, "\u09F3"],
    BHD: [void 0, void 0, 3],
    BIF: [void 0, void 0, 0],
    BMD: [void 0, "$"],
    BND: [void 0, "$"],
    BOB: [void 0, "Bs"],
    BRL: ["R$"],
    BSD: [void 0, "$"],
    BWP: [void 0, "P"],
    BYN: [void 0, void 0, 2],
    BYR: [void 0, void 0, 0],
    BZD: [void 0, "$"],
    CAD: ["CA$", "$", 2],
    CHF: [void 0, void 0, 2],
    CLF: [void 0, void 0, 4],
    CLP: [void 0, "$", 0],
    CNY: ["CN\xA5", "\xA5"],
    COP: [void 0, "$", 2],
    CRC: [void 0, "\u20A1", 2],
    CUC: [void 0, "$"],
    CUP: [void 0, "$"],
    CZK: [void 0, "K\u010D", 2],
    DJF: [void 0, void 0, 0],
    DKK: [void 0, "kr", 2],
    DOP: [void 0, "$"],
    EGP: [void 0, "E\xA3"],
    ESP: [void 0, "\u20A7", 0],
    EUR: ["\u20AC"],
    FJD: [void 0, "$"],
    FKP: [void 0, "\xA3"],
    GBP: ["\xA3"],
    GEL: [void 0, "\u20BE"],
    GHS: [void 0, "GH\u20B5"],
    GIP: [void 0, "\xA3"],
    GNF: [void 0, "FG", 0],
    GTQ: [void 0, "Q"],
    GYD: [void 0, "$", 2],
    HKD: ["HK$", "$"],
    HNL: [void 0, "L"],
    HRK: [void 0, "kn"],
    HUF: [void 0, "Ft", 2],
    IDR: [void 0, "Rp", 2],
    ILS: ["\u20AA"],
    INR: ["\u20B9"],
    IQD: [void 0, void 0, 0],
    IRR: [void 0, void 0, 0],
    ISK: [void 0, "kr", 0],
    ITL: [void 0, void 0, 0],
    JMD: [void 0, "$"],
    JOD: [void 0, void 0, 3],
    JPY: ["\xA5", void 0, 0],
    KHR: [void 0, "\u17DB"],
    KMF: [void 0, "CF", 0],
    KPW: [void 0, "\u20A9", 0],
    KRW: ["\u20A9", void 0, 0],
    KWD: [void 0, void 0, 3],
    KYD: [void 0, "$"],
    KZT: [void 0, "\u20B8"],
    LAK: [void 0, "\u20AD", 0],
    LBP: [void 0, "L\xA3", 0],
    LKR: [void 0, "Rs"],
    LRD: [void 0, "$"],
    LTL: [void 0, "Lt"],
    LUF: [void 0, void 0, 0],
    LVL: [void 0, "Ls"],
    LYD: [void 0, void 0, 3],
    MGA: [void 0, "Ar", 0],
    MGF: [void 0, void 0, 0],
    MMK: [void 0, "K", 0],
    MNT: [void 0, "\u20AE", 2],
    MRO: [void 0, void 0, 0],
    MUR: [void 0, "Rs", 2],
    MXN: ["MX$", "$"],
    MYR: [void 0, "RM"],
    NAD: [void 0, "$"],
    NGN: [void 0, "\u20A6"],
    NIO: [void 0, "C$"],
    NOK: [void 0, "kr", 2],
    NPR: [void 0, "Rs"],
    NZD: ["NZ$", "$"],
    OMR: [void 0, void 0, 3],
    PHP: ["\u20B1"],
    PKR: [void 0, "Rs", 2],
    PLN: [void 0, "z\u0142"],
    PYG: [void 0, "\u20B2", 0],
    RON: [void 0, "lei"],
    RSD: [void 0, void 0, 0],
    RUB: [void 0, "\u20BD"],
    RWF: [void 0, "RF", 0],
    SBD: [void 0, "$"],
    SEK: [void 0, "kr", 2],
    SGD: [void 0, "$"],
    SHP: [void 0, "\xA3"],
    SLE: [void 0, void 0, 2],
    SLL: [void 0, void 0, 0],
    SOS: [void 0, void 0, 0],
    SRD: [void 0, "$"],
    SSP: [void 0, "\xA3"],
    STD: [void 0, void 0, 0],
    STN: [void 0, "Db"],
    SYP: [void 0, "\xA3", 0],
    THB: [void 0, "\u0E3F"],
    TMM: [void 0, void 0, 0],
    TND: [void 0, void 0, 3],
    TOP: [void 0, "T$"],
    TRL: [void 0, void 0, 0],
    TRY: [void 0, "\u20BA"],
    TTD: [void 0, "$"],
    TWD: ["NT$", "$", 2],
    TZS: [void 0, void 0, 2],
    UAH: [void 0, "\u20B4"],
    UGX: [void 0, void 0, 0],
    USD: ["$"],
    UYI: [void 0, void 0, 0],
    UYU: [void 0, "$"],
    UYW: [void 0, void 0, 4],
    UZS: [void 0, void 0, 2],
    VEF: [void 0, "Bs", 2],
    VND: ["\u20AB", void 0, 0],
    VUV: [void 0, void 0, 0],
    XAF: ["FCFA", void 0, 0],
    XCD: ["EC$", "$"],
    XOF: ["F\u202FCFA", void 0, 0],
    XPF: ["CFPF", void 0, 0],
    XXX: ["\xA4"],
    YER: [void 0, void 0, 0],
    ZAR: [void 0, "R"],
    ZMK: [void 0, void 0, 0],
    ZMW: [void 0, "ZK"],
    ZWD: [void 0, void 0, 0],
  },
  Bm = (function (e) {
    return (
      (e[(e.Decimal = 0)] = "Decimal"),
      (e[(e.Percent = 1)] = "Percent"),
      (e[(e.Currency = 2)] = "Currency"),
      (e[(e.Scientific = 3)] = "Scientific"),
      e
    );
  })(Bm || {});
var Se = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(Se || {}),
  G = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(G || {}),
  je = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(je || {}),
  Oe = (function (e) {
    return (
      (e[(e.Decimal = 0)] = "Decimal"),
      (e[(e.Group = 1)] = "Group"),
      (e[(e.List = 2)] = "List"),
      (e[(e.PercentSign = 3)] = "PercentSign"),
      (e[(e.PlusSign = 4)] = "PlusSign"),
      (e[(e.MinusSign = 5)] = "MinusSign"),
      (e[(e.Exponential = 6)] = "Exponential"),
      (e[(e.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
      (e[(e.PerMille = 8)] = "PerMille"),
      (e[(e.Infinity = 9)] = "Infinity"),
      (e[(e.NaN = 10)] = "NaN"),
      (e[(e.TimeSeparator = 11)] = "TimeSeparator"),
      (e[(e.CurrencyDecimal = 12)] = "CurrencyDecimal"),
      (e[(e.CurrencyGroup = 13)] = "CurrencyGroup"),
      e
    );
  })(Oe || {});
function A0(e) {
  return Re(e)[Z.LocaleId];
}
function _0(e, t, r) {
  let n = Re(e),
    o = [n[Z.DayPeriodsFormat], n[Z.DayPeriodsStandalone]],
    i = We(o, t);
  return We(i, r);
}
function N0(e, t, r) {
  let n = Re(e),
    o = [n[Z.DaysFormat], n[Z.DaysStandalone]],
    i = We(o, t);
  return We(i, r);
}
function R0(e, t, r) {
  let n = Re(e),
    o = [n[Z.MonthsFormat], n[Z.MonthsStandalone]],
    i = We(o, t);
  return We(i, r);
}
function O0(e, t) {
  let n = Re(e)[Z.Eras];
  return We(n, t);
}
function Ps(e, t) {
  let r = Re(e);
  return We(r[Z.DateFormat], t);
}
function Fs(e, t) {
  let r = Re(e);
  return We(r[Z.TimeFormat], t);
}
function ks(e, t) {
  let n = Re(e)[Z.DateTimeFormat];
  return We(n, t);
}
function Ft(e, t) {
  let r = Re(e),
    n = r[Z.NumberSymbols][t];
  if (typeof n > "u") {
    if (t === Oe.CurrencyDecimal) return r[Z.NumberSymbols][Oe.Decimal];
    if (t === Oe.CurrencyGroup) return r[Z.NumberSymbols][Oe.Group];
  }
  return n;
}
function P0(e, t) {
  return Re(e)[Z.NumberFormats][t];
}
function F0(e) {
  return Re(e)[Z.Currencies];
}
function Hm(e) {
  if (!e[Z.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${
        e[Z.LocaleId]
      }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
    );
}
function k0(e) {
  let t = Re(e);
  return (
    Hm(t),
    (t[Z.ExtraData][2] || []).map((n) =>
      typeof n == "string" ? xl(n) : [xl(n[0]), xl(n[1])]
    )
  );
}
function L0(e, t, r) {
  let n = Re(e);
  Hm(n);
  let o = [n[Z.ExtraData][0], n[Z.ExtraData][1]],
    i = We(o, t) || [];
  return We(i, r) || [];
}
function We(e, t) {
  for (let r = t; r > -1; r--) if (typeof e[r] < "u") return e[r];
  throw new Error("Locale data API: locale data undefined");
}
function xl(e) {
  let [t, r] = e.split(":");
  return { hours: +t, minutes: +r };
}
function j0(e, t, r = "en") {
  let n = F0(r)[e] || Um[e] || [],
    o = n[1];
  return t === "narrow" && typeof o == "string" ? o : n[0] || e;
}
var V0 = 2;
function $0(e) {
  let t,
    r = Um[e];
  return r && (t = r[2]), typeof t == "number" ? t : V0;
}
var U0 =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  Ls = {},
  B0 =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  kt = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.ShortGMT = 1)] = "ShortGMT"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Extended = 3)] = "Extended"),
      e
    );
  })(kt || {}),
  $ = (function (e) {
    return (
      (e[(e.FullYear = 0)] = "FullYear"),
      (e[(e.Month = 1)] = "Month"),
      (e[(e.Date = 2)] = "Date"),
      (e[(e.Hours = 3)] = "Hours"),
      (e[(e.Minutes = 4)] = "Minutes"),
      (e[(e.Seconds = 5)] = "Seconds"),
      (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
      (e[(e.Day = 7)] = "Day"),
      e
    );
  })($ || {}),
  V = (function (e) {
    return (
      (e[(e.DayPeriods = 0)] = "DayPeriods"),
      (e[(e.Days = 1)] = "Days"),
      (e[(e.Months = 2)] = "Months"),
      (e[(e.Eras = 3)] = "Eras"),
      e
    );
  })(V || {});
function H0(e, t, r, n) {
  let o = J0(e);
  t = Ot(r, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = B0.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let l = s.pop();
      if (!l) break;
      t = l;
    } else {
      s.push(t);
      break;
    }
  let c = o.getTimezoneOffset();
  n && ((c = Gm(n, c)), (o = K0(o, n, !0)));
  let u = "";
  return (
    s.forEach((l) => {
      let d = Y0(l);
      u += d
        ? d(o, r, c)
        : l === "''"
        ? "'"
        : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    u
  );
}
function Hs(e, t, r) {
  let n = new Date(0);
  return n.setFullYear(e, t, r), n.setHours(0, 0, 0), n;
}
function Ot(e, t) {
  let r = A0(e);
  if (((Ls[r] ??= {}), Ls[r][t])) return Ls[r][t];
  let n = "";
  switch (t) {
    case "shortDate":
      n = Ps(e, je.Short);
      break;
    case "mediumDate":
      n = Ps(e, je.Medium);
      break;
    case "longDate":
      n = Ps(e, je.Long);
      break;
    case "fullDate":
      n = Ps(e, je.Full);
      break;
    case "shortTime":
      n = Fs(e, je.Short);
      break;
    case "mediumTime":
      n = Fs(e, je.Medium);
      break;
    case "longTime":
      n = Fs(e, je.Long);
      break;
    case "fullTime":
      n = Fs(e, je.Full);
      break;
    case "short":
      let o = Ot(e, "shortTime"),
        i = Ot(e, "shortDate");
      n = js(ks(e, je.Short), [o, i]);
      break;
    case "medium":
      let s = Ot(e, "mediumTime"),
        a = Ot(e, "mediumDate");
      n = js(ks(e, je.Medium), [s, a]);
      break;
    case "long":
      let c = Ot(e, "longTime"),
        u = Ot(e, "longDate");
      n = js(ks(e, je.Long), [c, u]);
      break;
    case "full":
      let l = Ot(e, "fullTime"),
        d = Ot(e, "fullDate");
      n = js(ks(e, je.Full), [l, d]);
      break;
  }
  return n && (Ls[r][t] = n), n;
}
function js(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (r, n) {
        return t != null && n in t ? t[n] : r;
      })),
    e
  );
}
function rt(e, t, r = "-", n, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = r)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return n && (s = s.slice(s.length - t)), i + s;
}
function z0(e, t) {
  return rt(e, 3).substring(0, t);
}
function oe(e, t, r = 0, n = !1, o = !1) {
  return function (i, s) {
    let a = G0(e, i);
    if (((r > 0 || a > -r) && (a += r), e === $.Hours))
      a === 0 && r === -12 && (a = 12);
    else if (e === $.FractionalSeconds) return z0(a, t);
    let c = Ft(s, Oe.MinusSign);
    return rt(a, t, c, n, o);
  };
}
function G0(e, t) {
  switch (e) {
    case $.FullYear:
      return t.getFullYear();
    case $.Month:
      return t.getMonth();
    case $.Date:
      return t.getDate();
    case $.Hours:
      return t.getHours();
    case $.Minutes:
      return t.getMinutes();
    case $.Seconds:
      return t.getSeconds();
    case $.FractionalSeconds:
      return t.getMilliseconds();
    case $.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function q(e, t, r = Se.Format, n = !1) {
  return function (o, i) {
    return W0(o, i, e, t, r, n);
  };
}
function W0(e, t, r, n, o, i) {
  switch (r) {
    case V.Months:
      return R0(t, o, n)[e.getMonth()];
    case V.Days:
      return N0(t, o, n)[e.getDay()];
    case V.DayPeriods:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let u = k0(t),
          l = L0(t, o, n),
          d = u.findIndex((f) => {
            if (Array.isArray(f)) {
              let [h, p] = f,
                D = s >= h.hours && a >= h.minutes,
                v = s < p.hours || (s === p.hours && a < p.minutes);
              if (h.hours < p.hours) {
                if (D && v) return !0;
              } else if (D || v) return !0;
            } else if (f.hours === s && f.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return l[d];
      }
      return _0(t, o, n)[s < 12 ? 0 : 1];
    case V.Eras:
      return O0(t, n)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let c = r;
      throw new Error(`unexpected translation type ${c}`);
  }
}
function Vs(e) {
  return function (t, r, n) {
    let o = -1 * n,
      i = Ft(r, Oe.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case kt.Short:
        return (o >= 0 ? "+" : "") + rt(s, 2, i) + rt(Math.abs(o % 60), 2, i);
      case kt.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + rt(s, 1, i);
      case kt.Long:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          rt(s, 2, i) +
          ":" +
          rt(Math.abs(o % 60), 2, i)
        );
      case kt.Extended:
        return n === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              rt(s, 2, i) +
              ":" +
              rt(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var q0 = 0,
  Us = 4;
function Z0(e) {
  let t = Hs(e, q0, 1).getDay();
  return Hs(e, 0, 1 + (t <= Us ? Us : Us + 7) - t);
}
function zm(e) {
  let t = e.getDay(),
    r = t === 0 ? -3 : Us - t;
  return Hs(e.getFullYear(), e.getMonth(), e.getDate() + r);
}
function Al(e, t = !1) {
  return function (r, n) {
    let o;
    if (t) {
      let i = new Date(r.getFullYear(), r.getMonth(), 1).getDay() - 1,
        s = r.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = zm(r),
        s = Z0(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return rt(o, e, Ft(n, Oe.MinusSign));
  };
}
function $s(e, t = !1) {
  return function (r, n) {
    let i = zm(r).getFullYear();
    return rt(i, e, Ft(n, Oe.MinusSign), t);
  };
}
var _l = {};
function Y0(e) {
  if (_l[e]) return _l[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = q(V.Eras, G.Abbreviated);
      break;
    case "GGGG":
      t = q(V.Eras, G.Wide);
      break;
    case "GGGGG":
      t = q(V.Eras, G.Narrow);
      break;
    case "y":
      t = oe($.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = oe($.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = oe($.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = oe($.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = $s(1);
      break;
    case "YY":
      t = $s(2, !0);
      break;
    case "YYY":
      t = $s(3);
      break;
    case "YYYY":
      t = $s(4);
      break;
    case "M":
    case "L":
      t = oe($.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = oe($.Month, 2, 1);
      break;
    case "MMM":
      t = q(V.Months, G.Abbreviated);
      break;
    case "MMMM":
      t = q(V.Months, G.Wide);
      break;
    case "MMMMM":
      t = q(V.Months, G.Narrow);
      break;
    case "LLL":
      t = q(V.Months, G.Abbreviated, Se.Standalone);
      break;
    case "LLLL":
      t = q(V.Months, G.Wide, Se.Standalone);
      break;
    case "LLLLL":
      t = q(V.Months, G.Narrow, Se.Standalone);
      break;
    case "w":
      t = Al(1);
      break;
    case "ww":
      t = Al(2);
      break;
    case "W":
      t = Al(1, !0);
      break;
    case "d":
      t = oe($.Date, 1);
      break;
    case "dd":
      t = oe($.Date, 2);
      break;
    case "c":
    case "cc":
      t = oe($.Day, 1);
      break;
    case "ccc":
      t = q(V.Days, G.Abbreviated, Se.Standalone);
      break;
    case "cccc":
      t = q(V.Days, G.Wide, Se.Standalone);
      break;
    case "ccccc":
      t = q(V.Days, G.Narrow, Se.Standalone);
      break;
    case "cccccc":
      t = q(V.Days, G.Short, Se.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = q(V.Days, G.Abbreviated);
      break;
    case "EEEE":
      t = q(V.Days, G.Wide);
      break;
    case "EEEEE":
      t = q(V.Days, G.Narrow);
      break;
    case "EEEEEE":
      t = q(V.Days, G.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = q(V.DayPeriods, G.Abbreviated);
      break;
    case "aaaa":
      t = q(V.DayPeriods, G.Wide);
      break;
    case "aaaaa":
      t = q(V.DayPeriods, G.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = q(V.DayPeriods, G.Abbreviated, Se.Standalone, !0);
      break;
    case "bbbb":
      t = q(V.DayPeriods, G.Wide, Se.Standalone, !0);
      break;
    case "bbbbb":
      t = q(V.DayPeriods, G.Narrow, Se.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = q(V.DayPeriods, G.Abbreviated, Se.Format, !0);
      break;
    case "BBBB":
      t = q(V.DayPeriods, G.Wide, Se.Format, !0);
      break;
    case "BBBBB":
      t = q(V.DayPeriods, G.Narrow, Se.Format, !0);
      break;
    case "h":
      t = oe($.Hours, 1, -12);
      break;
    case "hh":
      t = oe($.Hours, 2, -12);
      break;
    case "H":
      t = oe($.Hours, 1);
      break;
    case "HH":
      t = oe($.Hours, 2);
      break;
    case "m":
      t = oe($.Minutes, 1);
      break;
    case "mm":
      t = oe($.Minutes, 2);
      break;
    case "s":
      t = oe($.Seconds, 1);
      break;
    case "ss":
      t = oe($.Seconds, 2);
      break;
    case "S":
      t = oe($.FractionalSeconds, 1);
      break;
    case "SS":
      t = oe($.FractionalSeconds, 2);
      break;
    case "SSS":
      t = oe($.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = Vs(kt.Short);
      break;
    case "ZZZZZ":
      t = Vs(kt.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = Vs(kt.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = Vs(kt.Long);
      break;
    default:
      return null;
  }
  return (_l[e] = t), t;
}
function Gm(e, t) {
  e = e.replace(/:/g, "");
  let r = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(r) ? t : r;
}
function Q0(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function K0(e, t, r) {
  let n = r ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = Gm(t, o);
  return Q0(e, n * (i - o));
}
function J0(e) {
  if (Am(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return Hs(o, i - 1, s);
    }
    let r = parseFloat(e);
    if (!isNaN(e - r)) return new Date(r);
    let n;
    if ((n = e.match(U0))) return X0(n);
  }
  let t = new Date(e);
  if (!Am(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function X0(e) {
  let t = new Date(0),
    r = 0,
    n = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((r = Number(e[9] + e[10])), (n = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - r,
    a = Number(e[5] || 0) - n,
    c = Number(e[6] || 0),
    u = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, c, u), t;
}
function Am(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
var eM = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
  _m = 22,
  zs = ".",
  so = "0",
  tM = ";",
  nM = ",",
  Nl = "#",
  Nm = "\xA4";
function rM(e, t, r, n, o, i, s = !1) {
  let a = "",
    c = !1;
  if (!isFinite(e)) a = Ft(r, Oe.Infinity);
  else {
    let u = aM(e);
    s && (u = sM(u));
    let l = t.minInt,
      d = t.minFrac,
      f = t.maxFrac;
    if (i) {
      let j = i.match(eM);
      if (j === null) throw new Error(`${i} is not a valid digit info`);
      let Ee = j[1],
        U = j[3],
        fe = j[5];
      Ee != null && (l = Rl(Ee)),
        U != null && (d = Rl(U)),
        fe != null ? (f = Rl(fe)) : U != null && d > f && (f = d);
    }
    cM(u, d, f);
    let h = u.digits,
      p = u.integerLen,
      D = u.exponent,
      v = [];
    for (c = h.every((j) => !j); p < l; p++) h.unshift(0);
    for (; p < 0; p++) h.unshift(0);
    p > 0 ? (v = h.splice(p, h.length)) : ((v = h), (h = [0]));
    let m = [];
    for (
      h.length >= t.lgSize && m.unshift(h.splice(-t.lgSize, h.length).join(""));
      h.length > t.gSize;

    )
      m.unshift(h.splice(-t.gSize, h.length).join(""));
    h.length && m.unshift(h.join("")),
      (a = m.join(Ft(r, n))),
      v.length && (a += Ft(r, o) + v.join("")),
      D && (a += Ft(r, Oe.Exponential) + "+" + D);
  }
  return (
    e < 0 && !c ? (a = t.negPre + a + t.negSuf) : (a = t.posPre + a + t.posSuf),
    a
  );
}
function oM(e, t, r, n, o) {
  let i = P0(t, Bm.Currency),
    s = iM(i, Ft(t, Oe.MinusSign));
  return (
    (s.minFrac = $0(n)),
    (s.maxFrac = s.minFrac),
    rM(e, s, t, Oe.CurrencyGroup, Oe.CurrencyDecimal, o)
      .replace(Nm, r)
      .replace(Nm, "")
      .trim()
  );
}
function iM(e, t = "-") {
  let r = {
      minInt: 1,
      minFrac: 0,
      maxFrac: 0,
      posPre: "",
      posSuf: "",
      negPre: "",
      negSuf: "",
      gSize: 0,
      lgSize: 0,
    },
    n = e.split(tM),
    o = n[0],
    i = n[1],
    s =
      o.indexOf(zs) !== -1
        ? o.split(zs)
        : [
            o.substring(0, o.lastIndexOf(so) + 1),
            o.substring(o.lastIndexOf(so) + 1),
          ],
    a = s[0],
    c = s[1] || "";
  r.posPre = a.substring(0, a.indexOf(Nl));
  for (let l = 0; l < c.length; l++) {
    let d = c.charAt(l);
    d === so
      ? (r.minFrac = r.maxFrac = l + 1)
      : d === Nl
      ? (r.maxFrac = l + 1)
      : (r.posSuf += d);
  }
  let u = a.split(nM);
  if (
    ((r.gSize = u[1] ? u[1].length : 0),
    (r.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0),
    i)
  ) {
    let l = o.length - r.posPre.length - r.posSuf.length,
      d = i.indexOf(Nl);
    (r.negPre = i.substring(0, d).replace(/'/g, "")),
      (r.negSuf = i.slice(d + l).replace(/'/g, ""));
  } else (r.negPre = t + r.posPre), (r.negSuf = r.posSuf);
  return r;
}
function sM(e) {
  if (e.digits[0] === 0) return e;
  let t = e.digits.length - e.integerLen;
  return (
    e.exponent
      ? (e.exponent += 2)
      : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0),
        (e.integerLen += 2)),
    e
  );
}
function aM(e) {
  let t = Math.abs(e) + "",
    r = 0,
    n,
    o,
    i,
    s,
    a;
  for (
    (o = t.indexOf(zs)) > -1 && (t = t.replace(zs, "")),
      (i = t.search(/e/i)) > 0
        ? (o < 0 && (o = i), (o += +t.slice(i + 1)), (t = t.substring(0, i)))
        : o < 0 && (o = t.length),
      i = 0;
    t.charAt(i) === so;
    i++
  );
  if (i === (a = t.length)) (n = [0]), (o = 1);
  else {
    for (a--; t.charAt(a) === so; ) a--;
    for (o -= i, n = [], s = 0; i <= a; i++, s++) n[s] = Number(t.charAt(i));
  }
  return (
    o > _m && ((n = n.splice(0, _m - 1)), (r = o - 1), (o = 1)),
    { digits: n, exponent: r, integerLen: o }
  );
}
function cM(e, t, r) {
  if (t > r)
    throw new Error(
      `The minimum number of digits after fraction (${t}) is higher than the maximum (${r}).`
    );
  let n = e.digits,
    o = n.length - e.integerLen,
    i = Math.min(Math.max(t, o), r),
    s = i + e.integerLen,
    a = n[s];
  if (s > 0) {
    n.splice(Math.max(e.integerLen, s));
    for (let d = s; d < n.length; d++) n[d] = 0;
  } else {
    (o = Math.max(0, o)),
      (e.integerLen = 1),
      (n.length = Math.max(1, (s = i + 1))),
      (n[0] = 0);
    for (let d = 1; d < s; d++) n[d] = 0;
  }
  if (a >= 5)
    if (s - 1 < 0) {
      for (let d = 0; d > s; d--) n.unshift(0), e.integerLen++;
      n.unshift(1), e.integerLen++;
    } else n[s - 1]++;
  for (; o < Math.max(0, i); o++) n.push(0);
  let c = i !== 0,
    u = t + e.integerLen,
    l = n.reduceRight(function (d, f, h, p) {
      return (
        (f = f + d),
        (p[h] = f < 10 ? f : f - 10),
        c && (p[h] === 0 && h >= u ? p.pop() : (c = !1)),
        f >= 10 ? 1 : 0
      );
    }, 0);
  l && (n.unshift(l), e.integerLen++);
}
function Rl(e) {
  let t = parseInt(e);
  if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
  return t;
}
function F1(e, t, r) {
  return em(e, t, r);
}
function Gs(e, t) {
  t = encodeURIComponent(t);
  for (let r of e.split(";")) {
    let n = r.indexOf("="),
      [o, i] = n == -1 ? [r, ""] : [r.slice(0, n), r.slice(n + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var Ol = /\s+/,
  Rm = [],
  k1 = (() => {
    let t = class t {
      constructor(n, o) {
        (this._ngEl = n),
          (this._renderer = o),
          (this.initialClasses = Rm),
          (this.stateMap = new Map());
      }
      set klass(n) {
        this.initialClasses = n != null ? n.trim().split(Ol) : Rm;
      }
      set ngClass(n) {
        this.rawClass = typeof n == "string" ? n.trim().split(Ol) : n;
      }
      ngDoCheck() {
        for (let o of this.initialClasses) this._updateState(o, !0);
        let n = this.rawClass;
        if (Array.isArray(n) || n instanceof Set)
          for (let o of n) this._updateState(o, !0);
        else if (n != null)
          for (let o of Object.keys(n)) this._updateState(o, !!n[o]);
        this._applyStateDiff();
      }
      _updateState(n, o) {
        let i = this.stateMap.get(n);
        i !== void 0
          ? (i.enabled !== o && ((i.changed = !0), (i.enabled = o)),
            (i.touched = !0))
          : this.stateMap.set(n, { enabled: o, changed: !0, touched: !0 });
      }
      _applyStateDiff() {
        for (let n of this.stateMap) {
          let o = n[0],
            i = n[1];
          i.changed
            ? (this._toggleClass(o, i.enabled), (i.changed = !1))
            : i.touched ||
              (i.enabled && this._toggleClass(o, !1), this.stateMap.delete(o)),
            (i.touched = !1);
        }
      }
      _toggleClass(n, o) {
        (n = n.trim()),
          n.length > 0 &&
            n.split(Ol).forEach((i) => {
              o
                ? this._renderer.addClass(this._ngEl.nativeElement, i)
                : this._renderer.removeClass(this._ngEl.nativeElement, i);
            });
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Ge), L(Kt));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngClass", ""]],
        inputs: { klass: [ce.None, "class", "klass"], ngClass: "ngClass" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
var Pl = class {
    constructor(t, r, n, o) {
      (this.$implicit = t),
        (this.ngForOf = r),
        (this.index = n),
        (this.count = o);
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  L1 = (() => {
    let t = class t {
      set ngForOf(n) {
        (this._ngForOf = n), (this._ngForOfDirty = !0);
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      constructor(n, o, i) {
        (this._viewContainer = n),
          (this._template = o),
          (this._differs = i),
          (this._ngForOf = null),
          (this._ngForOfDirty = !0),
          (this._differ = null);
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          if (!this._differ && n)
            if (0)
              try {
              } catch {}
            else this._differ = this._differs.find(n).create(this.ngForTrackBy);
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let o = this._viewContainer;
        n.forEachOperation((i, s, a) => {
          if (i.previousIndex == null)
            o.createEmbeddedView(
              this._template,
              new Pl(i.item, this._ngForOf, -1, -1),
              a === null ? void 0 : a
            );
          else if (a == null) o.remove(s === null ? void 0 : s);
          else if (s !== null) {
            let c = o.get(s);
            o.move(c, a), Om(c, i);
          }
        });
        for (let i = 0, s = o.length; i < s; i++) {
          let c = o.get(i).context;
          (c.index = i), (c.count = s), (c.ngForOf = this._ngForOf);
        }
        n.forEachIdentityChange((i) => {
          let s = o.get(i.currentIndex);
          Om(s, i);
        });
      }
      static ngTemplateContextGuard(n, o) {
        return !0;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Dt), L(qt), L(nl));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
function Om(e, t) {
  e.context.$implicit = t.item;
}
var j1 = (() => {
    let t = class t {
      constructor(n, o) {
        (this._viewContainer = n),
          (this._context = new Fl()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = o);
      }
      set ngIf(n) {
        (this._context.$implicit = this._context.ngIf = n), this._updateView();
      }
      set ngIfThen(n) {
        Pm("ngIfThen", n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        Pm("ngIfElse", n),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context
              )));
      }
      static ngTemplateContextGuard(n, o) {
        return !0;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Dt), L(qt));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngIf", ""]],
        inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  Fl = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function Pm(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${Te(t)}'.`);
}
var uM = !0,
  kl = class {
    constructor(t, r) {
      (this._viewContainerRef = t),
        (this._templateRef = r),
        (this._created = !1);
    }
    create() {
      (this._created = !0),
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    destroy() {
      (this._created = !1), this._viewContainerRef.clear();
    }
    enforceState(t) {
      t && !this._created
        ? this.create()
        : !t && this._created && this.destroy();
    }
  },
  lM = (() => {
    let t = class t {
      constructor() {
        (this._defaultViews = []),
          (this._defaultUsed = !1),
          (this._caseCount = 0),
          (this._lastCaseCheckIndex = 0),
          (this._lastCasesMatched = !1);
      }
      set ngSwitch(n) {
        (this._ngSwitch = n),
          this._caseCount === 0 && this._updateDefaultCases(!0);
      }
      _addCase() {
        return this._caseCount++;
      }
      _addDefault(n) {
        this._defaultViews.push(n);
      }
      _matchCase(n) {
        let o = uM ? n === this._ngSwitch : n == this._ngSwitch;
        return (
          (this._lastCasesMatched ||= o),
          this._lastCaseCheckIndex++,
          this._lastCaseCheckIndex === this._caseCount &&
            (this._updateDefaultCases(!this._lastCasesMatched),
            (this._lastCaseCheckIndex = 0),
            (this._lastCasesMatched = !1)),
          o
        );
      }
      _updateDefaultCases(n) {
        if (this._defaultViews.length > 0 && n !== this._defaultUsed) {
          this._defaultUsed = n;
          for (let o of this._defaultViews) o.enforceState(n);
        }
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngSwitch", ""]],
        inputs: { ngSwitch: "ngSwitch" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  V1 = (() => {
    let t = class t {
      constructor(n, o, i) {
        (this.ngSwitch = i), i._addCase(), (this._view = new kl(n, o));
      }
      ngDoCheck() {
        this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Dt), L(qt), L(lM, 9));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngSwitchCase", ""]],
        inputs: { ngSwitchCase: "ngSwitchCase" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })();
var $1 = (() => {
    let t = class t {
      constructor(n, o, i) {
        (this._ngEl = n),
          (this._differs = o),
          (this._renderer = i),
          (this._ngStyle = null),
          (this._differ = null);
      }
      set ngStyle(n) {
        (this._ngStyle = n),
          !this._differ && n && (this._differ = this._differs.find(n).create());
      }
      ngDoCheck() {
        if (this._differ) {
          let n = this._differ.diff(this._ngStyle);
          n && this._applyChanges(n);
        }
      }
      _setStyle(n, o) {
        let [i, s] = n.split("."),
          a = i.indexOf("-") === -1 ? void 0 : pt.DashCase;
        o != null
          ? this._renderer.setStyle(
              this._ngEl.nativeElement,
              i,
              s ? `${o}${s}` : o,
              a
            )
          : this._renderer.removeStyle(this._ngEl.nativeElement, i, a);
      }
      _applyChanges(n) {
        n.forEachRemovedItem((o) => this._setStyle(o.key, null)),
          n.forEachAddedItem((o) => this._setStyle(o.key, o.currentValue)),
          n.forEachChangedItem((o) => this._setStyle(o.key, o.currentValue));
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Ge), L(rl), L(Kt));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngStyle", ""]],
        inputs: { ngStyle: "ngStyle" },
        standalone: !0,
      }));
    let e = t;
    return e;
  })(),
  U1 = (() => {
    let t = class t {
      constructor(n) {
        (this._viewContainerRef = n),
          (this._viewRef = null),
          (this.ngTemplateOutletContext = null),
          (this.ngTemplateOutlet = null),
          (this.ngTemplateOutletInjector = null);
      }
      ngOnChanges(n) {
        if (this._shouldRecreateView(n)) {
          let o = this._viewContainerRef;
          if (
            (this._viewRef && o.remove(o.indexOf(this._viewRef)),
            !this.ngTemplateOutlet)
          ) {
            this._viewRef = null;
            return;
          }
          let i = this._createContextForwardProxy();
          this._viewRef = o.createEmbeddedView(this.ngTemplateOutlet, i, {
            injector: this.ngTemplateOutletInjector ?? void 0,
          });
        }
      }
      _shouldRecreateView(n) {
        return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
      }
      _createContextForwardProxy() {
        return new Proxy(
          {},
          {
            set: (n, o, i) =>
              this.ngTemplateOutletContext
                ? Reflect.set(this.ngTemplateOutletContext, o, i)
                : !1,
            get: (n, o, i) => {
              if (this.ngTemplateOutletContext)
                return Reflect.get(this.ngTemplateOutletContext, o, i);
            },
          }
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(Dt));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "ngTemplateOutlet", ""]],
        inputs: {
          ngTemplateOutletContext: "ngTemplateOutletContext",
          ngTemplateOutlet: "ngTemplateOutlet",
          ngTemplateOutletInjector: "ngTemplateOutletInjector",
        },
        standalone: !0,
        features: [Yt],
      }));
    let e = t;
    return e;
  })();
function zl(e, t) {
  return new y(2100, !1);
}
var Ll = class {
    createSubscription(t, r) {
      return el(() =>
        t.subscribe({
          next: r,
          error: (n) => {
            throw n;
          },
        })
      );
    }
    dispose(t) {
      el(() => t.unsubscribe());
    }
  },
  jl = class {
    createSubscription(t, r) {
      return t.then(r, (n) => {
        throw n;
      });
    }
    dispose(t) {}
  },
  dM = new jl(),
  fM = new Ll(),
  B1 = (() => {
    let t = class t {
      constructor(n) {
        (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null),
          (this._strategy = null),
          (this._ref = n);
      }
      ngOnDestroy() {
        this._subscription && this._dispose(), (this._ref = null);
      }
      transform(n) {
        return this._obj
          ? n !== this._obj
            ? (this._dispose(), this.transform(n))
            : this._latestValue
          : (n && this._subscribe(n), this._latestValue);
      }
      _subscribe(n) {
        (this._obj = n),
          (this._strategy = this._selectStrategy(n)),
          (this._subscription = this._strategy.createSubscription(n, (o) =>
            this._updateLatestValue(n, o)
          ));
      }
      _selectStrategy(n) {
        if (hr(n)) return dM;
        if (Il(n)) return fM;
        throw zl(t, n);
      }
      _dispose() {
        this._strategy.dispose(this._subscription),
          (this._latestValue = null),
          (this._subscription = null),
          (this._obj = null);
      }
      _updateLatestValue(n, o) {
        n === this._obj && ((this._latestValue = o), this._ref.markForCheck());
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(dr, 16));
    }),
      (t.ɵpipe = Ki({ name: "async", type: t, pure: !1, standalone: !0 }));
    let e = t;
    return e;
  })();
var hM = "mediumDate",
  pM = new E(""),
  gM = new E(""),
  H1 = (() => {
    let t = class t {
      constructor(n, o, i) {
        (this.locale = n),
          (this.defaultTimezone = o),
          (this.defaultOptions = i);
      }
      transform(n, o, i, s) {
        if (n == null || n === "" || n !== n) return null;
        try {
          let a = o ?? this.defaultOptions?.dateFormat ?? hM,
            c =
              i ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return H0(n, a, s || this.locale, c);
        } catch (a) {
          throw zl(t, a.message);
        }
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(io, 16), L(pM, 24), L(gM, 24));
    }),
      (t.ɵpipe = Ki({ name: "date", type: t, pure: !0, standalone: !0 }));
    let e = t;
    return e;
  })();
var z1 = (() => {
  let t = class t {
    constructor(n, o = "USD") {
      (this._locale = n), (this._defaultCurrencyCode = o);
    }
    transform(n, o = this._defaultCurrencyCode, i = "symbol", s, a) {
      if (!mM(n)) return null;
      (a ||= this._locale),
        typeof i == "boolean" && (i = i ? "symbol" : "code");
      let c = o || this._defaultCurrencyCode;
      i !== "code" &&
        (i === "symbol" || i === "symbol-narrow"
          ? (c = j0(c, i === "symbol" ? "wide" : "narrow", a))
          : (c = i));
      try {
        let u = vM(n);
        return oM(u, a, c, o, s);
      } catch (u) {
        throw zl(t, u.message);
      }
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(L(io, 16), L(Dm, 16));
  }),
    (t.ɵpipe = Ki({ name: "currency", type: t, pure: !0, standalone: !0 }));
  let e = t;
  return e;
})();
function mM(e) {
  return !(e == null || e === "" || e !== e);
}
function vM(e) {
  if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
    return Number(e);
  if (typeof e != "number") throw new Error(`${e} is not a number`);
  return e;
}
var Wm = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({}));
    let e = t;
    return e;
  })(),
  Gl = "browser",
  yM = "server";
function DM(e) {
  return e === Gl;
}
function Ws(e) {
  return e === yM;
}
var qm = (() => {
    let t = class t {};
    t.ɵprov = w({
      token: t,
      providedIn: "root",
      factory: () => (DM(g(tt)) ? new Vl(g(le), window) : new $l()),
    });
    let e = t;
    return e;
  })(),
  Vl = class {
    constructor(t, r) {
      (this.document = t), (this.window = r), (this.offset = () => [0, 0]);
    }
    setOffset(t) {
      Array.isArray(t) ? (this.offset = () => t) : (this.offset = t);
    }
    getScrollPosition() {
      return [this.window.scrollX, this.window.scrollY];
    }
    scrollToPosition(t) {
      this.window.scrollTo(t[0], t[1]);
    }
    scrollToAnchor(t) {
      let r = wM(this.document, t);
      r && (this.scrollToElement(r), r.focus());
    }
    setHistoryScrollRestoration(t) {
      this.window.history.scrollRestoration = t;
    }
    scrollToElement(t) {
      let r = t.getBoundingClientRect(),
        n = r.left + this.window.pageXOffset,
        o = r.top + this.window.pageYOffset,
        i = this.offset();
      this.window.scrollTo(n - i[0], o - i[1]);
    }
  };
function wM(e, t) {
  let r = e.getElementById(t) || e.getElementsByName(t)[0];
  if (r) return r;
  if (
    typeof e.createTreeWalker == "function" &&
    e.body &&
    typeof e.body.attachShadow == "function"
  ) {
    let n = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT),
      o = n.currentNode;
    for (; o; ) {
      let i = o.shadowRoot;
      if (i) {
        let s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
        if (s) return s;
      }
      o = n.nextNode();
    }
  }
  return null;
}
var $l = class {
    setOffset(t) {}
    getScrollPosition() {
      return [0, 0];
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
  },
  pr = class {};
var Zm = (e) => e.src,
  EM = new E("", { providedIn: "root", factory: () => Zm });
var IM = new E("NG_OPTIMIZED_PRELOADED_IMAGES", {
    providedIn: "root",
    factory: () => new Set(),
  }),
  CM = (() => {
    let t = class t {
      constructor() {
        (this.preloadedImages = g(IM)), (this.document = g(le));
      }
      createPreloadLinkTag(n, o, i, s) {
        if (this.preloadedImages.has(o)) return;
        this.preloadedImages.add(o);
        let a = n.createElement("link");
        n.setAttribute(a, "as", "image"),
          n.setAttribute(a, "href", o),
          n.setAttribute(a, "rel", "preload"),
          n.setAttribute(a, "fetchpriority", "high"),
          s && n.setAttribute(a, "imageSizes", s),
          i && n.setAttribute(a, "imageSrcset", i),
          n.appendChild(this.document.head, a);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var bM = /^((\s*\d+w\s*(,|$)){1,})$/;
var MM = [1, 2],
  TM = 640;
var SM = 1920,
  xM = 1080;
var G1 = (() => {
  let t = class t {
    constructor() {
      (this.imageLoader = g(EM)),
        (this.config = AM(g(Ap))),
        (this.renderer = g(Kt)),
        (this.imgElement = g(Ge).nativeElement),
        (this.injector = g(ze)),
        (this.isServer = Ws(g(tt))),
        (this.preloadLinkCreator = g(CM)),
        (this.lcpObserver = null),
        (this._renderedSrc = null),
        (this.priority = !1),
        (this.disableOptimizedSrcset = !1),
        (this.fill = !1);
    }
    ngOnInit() {
      Jt("NgOptimizedImage"), this.setHostAttributes();
    }
    setHostAttributes() {
      this.fill
        ? (this.sizes ||= "100vw")
        : (this.setHostAttribute("width", this.width.toString()),
          this.setHostAttribute("height", this.height.toString())),
        this.setHostAttribute("loading", this.getLoadingBehavior()),
        this.setHostAttribute("fetchpriority", this.getFetchPriority()),
        this.setHostAttribute("ng-img", "true");
      let n = this.updateSrcAndSrcset();
      this.sizes && this.setHostAttribute("sizes", this.sizes),
        this.isServer &&
          this.priority &&
          this.preloadLinkCreator.createPreloadLinkTag(
            this.renderer,
            this.getRewrittenSrc(),
            n,
            this.sizes
          );
    }
    ngOnChanges(n) {
      if (n.ngSrc && !n.ngSrc.isFirstChange()) {
        let o = this._renderedSrc;
        this.updateSrcAndSrcset(!0);
        let i = this._renderedSrc;
        this.lcpObserver !== null &&
          o &&
          i &&
          o !== i &&
          this.injector.get(B).runOutsideAngular(() => {
            this.lcpObserver?.updateImage(o, i);
          });
      }
    }
    callImageLoader(n) {
      let o = n;
      return (
        this.loaderParams && (o.loaderParams = this.loaderParams),
        this.imageLoader(o)
      );
    }
    getLoadingBehavior() {
      return !this.priority && this.loading !== void 0
        ? this.loading
        : this.priority
        ? "eager"
        : "lazy";
    }
    getFetchPriority() {
      return this.priority ? "high" : "auto";
    }
    getRewrittenSrc() {
      if (!this._renderedSrc) {
        let n = { src: this.ngSrc };
        this._renderedSrc = this.callImageLoader(n);
      }
      return this._renderedSrc;
    }
    getRewrittenSrcset() {
      let n = bM.test(this.ngSrcset);
      return this.ngSrcset
        .split(",")
        .filter((i) => i !== "")
        .map((i) => {
          i = i.trim();
          let s = n ? parseFloat(i) : parseFloat(i) * this.width;
          return `${this.callImageLoader({ src: this.ngSrc, width: s })} ${i}`;
        })
        .join(", ");
    }
    getAutomaticSrcset() {
      return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset();
    }
    getResponsiveSrcset() {
      let { breakpoints: n } = this.config,
        o = n;
      return (
        this.sizes?.trim() === "100vw" && (o = n.filter((s) => s >= TM)),
        o
          .map(
            (s) =>
              `${this.callImageLoader({ src: this.ngSrc, width: s })} ${s}w`
          )
          .join(", ")
      );
    }
    updateSrcAndSrcset(n = !1) {
      n && (this._renderedSrc = null);
      let o = this.getRewrittenSrc();
      this.setHostAttribute("src", o);
      let i;
      return (
        this.ngSrcset
          ? (i = this.getRewrittenSrcset())
          : this.shouldGenerateAutomaticSrcset() &&
            (i = this.getAutomaticSrcset()),
        i && this.setHostAttribute("srcset", i),
        i
      );
    }
    getFixedSrcset() {
      return MM.map(
        (o) =>
          `${this.callImageLoader({
            src: this.ngSrc,
            width: this.width * o,
          })} ${o}x`
      ).join(", ");
    }
    shouldGenerateAutomaticSrcset() {
      let n = !1;
      return (
        this.sizes || (n = this.width > SM || this.height > xM),
        !this.disableOptimizedSrcset &&
          !this.srcset &&
          this.imageLoader !== Zm &&
          !n
      );
    }
    ngOnDestroy() {}
    setHostAttribute(n, o) {
      this.renderer.setAttribute(this.imgElement, n, o);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵdir = Fe({
      type: t,
      selectors: [["img", "ngSrc", ""]],
      hostVars: 8,
      hostBindings: function (o, i) {
        o & 2 &&
          Dl("position", i.fill ? "absolute" : null)(
            "width",
            i.fill ? "100%" : null
          )("height", i.fill ? "100%" : null)("inset", i.fill ? "0px" : null);
      },
      inputs: {
        ngSrc: [ce.HasDecoratorInputTransform, "ngSrc", "ngSrc", _M],
        ngSrcset: "ngSrcset",
        sizes: "sizes",
        width: [ce.HasDecoratorInputTransform, "width", "width", Sl],
        height: [ce.HasDecoratorInputTransform, "height", "height", Sl],
        loading: "loading",
        priority: [ce.HasDecoratorInputTransform, "priority", "priority", Xt],
        loaderParams: "loaderParams",
        disableOptimizedSrcset: [
          ce.HasDecoratorInputTransform,
          "disableOptimizedSrcset",
          "disableOptimizedSrcset",
          Xt,
        ],
        fill: [ce.HasDecoratorInputTransform, "fill", "fill", Xt],
        src: "src",
        srcset: "srcset",
      },
      standalone: !0,
      features: [Es, Yt],
    }));
  let e = t;
  return e;
})();
function AM(e) {
  let t = {};
  return (
    e.breakpoints && (t.breakpoints = e.breakpoints.sort((r, n) => r - n)),
    Object.assign({}, Wu, e, t)
  );
}
function _M(e) {
  return typeof e == "string" ? e : Ne(e);
}
var co = class {},
  Zs = class {},
  An = class e {
    constructor(t) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        t
          ? typeof t == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  t
                    .split(
                      `
`
                    )
                    .forEach((r) => {
                      let n = r.indexOf(":");
                      if (n > 0) {
                        let o = r.slice(0, n),
                          i = o.toLowerCase(),
                          s = r.slice(n + 1).trim();
                        this.maybeSetNormalizedName(o, i),
                          this.headers.has(i)
                            ? this.headers.get(i).push(s)
                            : this.headers.set(i, [s]);
                      }
                    });
              })
            : typeof Headers < "u" && t instanceof Headers
            ? ((this.headers = new Map()),
              t.forEach((r, n) => {
                this.setHeaderEntries(n, r);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(t).forEach(([r, n]) => {
                    this.setHeaderEntries(r, n);
                  });
              })
          : (this.headers = new Map());
    }
    has(t) {
      return this.init(), this.headers.has(t.toLowerCase());
    }
    get(t) {
      this.init();
      let r = this.headers.get(t.toLowerCase());
      return r && r.length > 0 ? r[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(t) {
      return this.init(), this.headers.get(t.toLowerCase()) || null;
    }
    append(t, r) {
      return this.clone({ name: t, value: r, op: "a" });
    }
    set(t, r) {
      return this.clone({ name: t, value: r, op: "s" });
    }
    delete(t, r) {
      return this.clone({ name: t, value: r, op: "d" });
    }
    maybeSetNormalizedName(t, r) {
      this.normalizedNames.has(r) || this.normalizedNames.set(r, t);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof e
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
          (this.lazyUpdate = null)));
    }
    copyFrom(t) {
      t.init(),
        Array.from(t.headers.keys()).forEach((r) => {
          this.headers.set(r, t.headers.get(r)),
            this.normalizedNames.set(r, t.normalizedNames.get(r));
        });
    }
    clone(t) {
      let r = new e();
      return (
        (r.lazyInit =
          this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this),
        (r.lazyUpdate = (this.lazyUpdate || []).concat([t])),
        r
      );
    }
    applyUpdate(t) {
      let r = t.name.toLowerCase();
      switch (t.op) {
        case "a":
        case "s":
          let n = t.value;
          if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
          this.maybeSetNormalizedName(t.name, r);
          let o = (t.op === "a" ? this.headers.get(r) : void 0) || [];
          o.push(...n), this.headers.set(r, o);
          break;
        case "d":
          let i = t.value;
          if (!i) this.headers.delete(r), this.normalizedNames.delete(r);
          else {
            let s = this.headers.get(r);
            if (!s) return;
            (s = s.filter((a) => i.indexOf(a) === -1)),
              s.length === 0
                ? (this.headers.delete(r), this.normalizedNames.delete(r))
                : this.headers.set(r, s);
          }
          break;
      }
    }
    setHeaderEntries(t, r) {
      let n = (Array.isArray(r) ? r : [r]).map((i) => i.toString()),
        o = t.toLowerCase();
      this.headers.set(o, n), this.maybeSetNormalizedName(t, o);
    }
    forEach(t) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((r) =>
          t(this.normalizedNames.get(r), this.headers.get(r))
        );
    }
  };
var ql = class {
  encodeKey(t) {
    return Qm(t);
  }
  encodeValue(t) {
    return Qm(t);
  }
  decodeKey(t) {
    return decodeURIComponent(t);
  }
  decodeValue(t) {
    return decodeURIComponent(t);
  }
};
function OM(e, t) {
  let r = new Map();
  return (
    e.length > 0 &&
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((o) => {
          let i = o.indexOf("="),
            [s, a] =
              i == -1
                ? [t.decodeKey(o), ""]
                : [t.decodeKey(o.slice(0, i)), t.decodeValue(o.slice(i + 1))],
            c = r.get(s) || [];
          c.push(a), r.set(s, c);
        }),
    r
  );
}
var PM = /%(\d[a-f0-9])/gi,
  FM = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Qm(e) {
  return encodeURIComponent(e).replace(PM, (t, r) => FM[r] ?? t);
}
function qs(e) {
  return `${e}`;
}
var en = class e {
    constructor(t = {}) {
      if (
        ((this.updates = null),
        (this.cloneFrom = null),
        (this.encoder = t.encoder || new ql()),
        t.fromString)
      ) {
        if (t.fromObject)
          throw new Error("Cannot specify both fromString and fromObject.");
        this.map = OM(t.fromString, this.encoder);
      } else
        t.fromObject
          ? ((this.map = new Map()),
            Object.keys(t.fromObject).forEach((r) => {
              let n = t.fromObject[r],
                o = Array.isArray(n) ? n.map(qs) : [qs(n)];
              this.map.set(r, o);
            }))
          : (this.map = null);
    }
    has(t) {
      return this.init(), this.map.has(t);
    }
    get(t) {
      this.init();
      let r = this.map.get(t);
      return r ? r[0] : null;
    }
    getAll(t) {
      return this.init(), this.map.get(t) || null;
    }
    keys() {
      return this.init(), Array.from(this.map.keys());
    }
    append(t, r) {
      return this.clone({ param: t, value: r, op: "a" });
    }
    appendAll(t) {
      let r = [];
      return (
        Object.keys(t).forEach((n) => {
          let o = t[n];
          Array.isArray(o)
            ? o.forEach((i) => {
                r.push({ param: n, value: i, op: "a" });
              })
            : r.push({ param: n, value: o, op: "a" });
        }),
        this.clone(r)
      );
    }
    set(t, r) {
      return this.clone({ param: t, value: r, op: "s" });
    }
    delete(t, r) {
      return this.clone({ param: t, value: r, op: "d" });
    }
    toString() {
      return (
        this.init(),
        this.keys()
          .map((t) => {
            let r = this.encoder.encodeKey(t);
            return this.map
              .get(t)
              .map((n) => r + "=" + this.encoder.encodeValue(n))
              .join("&");
          })
          .filter((t) => t !== "")
          .join("&")
      );
    }
    clone(t) {
      let r = new e({ encoder: this.encoder });
      return (
        (r.cloneFrom = this.cloneFrom || this),
        (r.updates = (this.updates || []).concat(t)),
        r
      );
    }
    init() {
      this.map === null && (this.map = new Map()),
        this.cloneFrom !== null &&
          (this.cloneFrom.init(),
          this.cloneFrom
            .keys()
            .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
          this.updates.forEach((t) => {
            switch (t.op) {
              case "a":
              case "s":
                let r = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
                r.push(qs(t.value)), this.map.set(t.param, r);
                break;
              case "d":
                if (t.value !== void 0) {
                  let n = this.map.get(t.param) || [],
                    o = n.indexOf(qs(t.value));
                  o !== -1 && n.splice(o, 1),
                    n.length > 0
                      ? this.map.set(t.param, n)
                      : this.map.delete(t.param);
                } else {
                  this.map.delete(t.param);
                  break;
                }
            }
          }),
          (this.cloneFrom = this.updates = null));
    }
  },
  Km = class {
    constructor(t) {
      this.defaultValue = t;
    }
  },
  Zl = class {
    constructor() {
      this.map = new Map();
    }
    set(t, r) {
      return this.map.set(t, r), this;
    }
    get(t) {
      return (
        this.map.has(t) || this.map.set(t, t.defaultValue()), this.map.get(t)
      );
    }
    delete(t) {
      return this.map.delete(t), this;
    }
    has(t) {
      return this.map.has(t);
    }
    keys() {
      return this.map.keys();
    }
  };
function kM(e) {
  switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function Jm(e) {
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
}
function Xm(e) {
  return typeof Blob < "u" && e instanceof Blob;
}
function ev(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function LM(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
var ao = class e {
    constructor(t, r, n, o) {
      (this.url = r),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = t.toUpperCase());
      let i;
      if (
        (kM(this.method) || o
          ? ((this.body = n !== void 0 ? n : null), (i = o))
          : (i = n),
        i &&
          ((this.reportProgress = !!i.reportProgress),
          (this.withCredentials = !!i.withCredentials),
          i.responseType && (this.responseType = i.responseType),
          i.headers && (this.headers = i.headers),
          i.context && (this.context = i.context),
          i.params && (this.params = i.params),
          (this.transferCache = i.transferCache)),
        (this.headers ??= new An()),
        (this.context ??= new Zl()),
        !this.params)
      )
        (this.params = new en()), (this.urlWithParams = r);
      else {
        let s = this.params.toString();
        if (s.length === 0) this.urlWithParams = r;
        else {
          let a = r.indexOf("?"),
            c = a === -1 ? "?" : a < r.length - 1 ? "&" : "";
          this.urlWithParams = r + c + s;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : Jm(this.body) ||
          Xm(this.body) ||
          ev(this.body) ||
          LM(this.body) ||
          typeof this.body == "string"
        ? this.body
        : this.body instanceof en
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || ev(this.body)
        ? null
        : Xm(this.body)
        ? this.body.type || null
        : Jm(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof en
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(t = {}) {
      let r = t.method || this.method,
        n = t.url || this.url,
        o = t.responseType || this.responseType,
        i = t.body !== void 0 ? t.body : this.body,
        s =
          t.withCredentials !== void 0
            ? t.withCredentials
            : this.withCredentials,
        a =
          t.reportProgress !== void 0 ? t.reportProgress : this.reportProgress,
        c = t.headers || this.headers,
        u = t.params || this.params,
        l = t.context ?? this.context;
      return (
        t.setHeaders !== void 0 &&
          (c = Object.keys(t.setHeaders).reduce(
            (d, f) => d.set(f, t.setHeaders[f]),
            c
          )),
        t.setParams &&
          (u = Object.keys(t.setParams).reduce(
            (d, f) => d.set(f, t.setParams[f]),
            u
          )),
        new e(r, n, i, {
          params: u,
          headers: c,
          context: l,
          reportProgress: a,
          responseType: o,
          withCredentials: s,
        })
      );
    }
  },
  mr = (function (e) {
    return (
      (e[(e.Sent = 0)] = "Sent"),
      (e[(e.UploadProgress = 1)] = "UploadProgress"),
      (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
      (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
      (e[(e.Response = 4)] = "Response"),
      (e[(e.User = 5)] = "User"),
      e
    );
  })(mr || {}),
  uo = class {
    constructor(t, r = Ks.Ok, n = "OK") {
      (this.headers = t.headers || new An()),
        (this.status = t.status !== void 0 ? t.status : r),
        (this.statusText = t.statusText || n),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  Yl = class e extends uo {
    constructor(t = {}) {
      super(t), (this.type = mr.ResponseHeader);
    }
    clone(t = {}) {
      return new e({
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  Ys = class e extends uo {
    constructor(t = {}) {
      super(t),
        (this.type = mr.Response),
        (this.body = t.body !== void 0 ? t.body : null);
    }
    clone(t = {}) {
      return new e({
        body: t.body !== void 0 ? t.body : this.body,
        headers: t.headers || this.headers,
        status: t.status !== void 0 ? t.status : this.status,
        statusText: t.statusText || this.statusText,
        url: t.url || this.url || void 0,
      });
    }
  },
  Qs = class extends uo {
    constructor(t) {
      super(t, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              t.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              t.url || "(unknown url)"
            }: ${t.status} ${t.statusText}`),
        (this.error = t.error || null);
    }
  },
  Ks = (function (e) {
    return (
      (e[(e.Continue = 100)] = "Continue"),
      (e[(e.SwitchingProtocols = 101)] = "SwitchingProtocols"),
      (e[(e.Processing = 102)] = "Processing"),
      (e[(e.EarlyHints = 103)] = "EarlyHints"),
      (e[(e.Ok = 200)] = "Ok"),
      (e[(e.Created = 201)] = "Created"),
      (e[(e.Accepted = 202)] = "Accepted"),
      (e[(e.NonAuthoritativeInformation = 203)] =
        "NonAuthoritativeInformation"),
      (e[(e.NoContent = 204)] = "NoContent"),
      (e[(e.ResetContent = 205)] = "ResetContent"),
      (e[(e.PartialContent = 206)] = "PartialContent"),
      (e[(e.MultiStatus = 207)] = "MultiStatus"),
      (e[(e.AlreadyReported = 208)] = "AlreadyReported"),
      (e[(e.ImUsed = 226)] = "ImUsed"),
      (e[(e.MultipleChoices = 300)] = "MultipleChoices"),
      (e[(e.MovedPermanently = 301)] = "MovedPermanently"),
      (e[(e.Found = 302)] = "Found"),
      (e[(e.SeeOther = 303)] = "SeeOther"),
      (e[(e.NotModified = 304)] = "NotModified"),
      (e[(e.UseProxy = 305)] = "UseProxy"),
      (e[(e.Unused = 306)] = "Unused"),
      (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
      (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"),
      (e[(e.BadRequest = 400)] = "BadRequest"),
      (e[(e.Unauthorized = 401)] = "Unauthorized"),
      (e[(e.PaymentRequired = 402)] = "PaymentRequired"),
      (e[(e.Forbidden = 403)] = "Forbidden"),
      (e[(e.NotFound = 404)] = "NotFound"),
      (e[(e.MethodNotAllowed = 405)] = "MethodNotAllowed"),
      (e[(e.NotAcceptable = 406)] = "NotAcceptable"),
      (e[(e.ProxyAuthenticationRequired = 407)] =
        "ProxyAuthenticationRequired"),
      (e[(e.RequestTimeout = 408)] = "RequestTimeout"),
      (e[(e.Conflict = 409)] = "Conflict"),
      (e[(e.Gone = 410)] = "Gone"),
      (e[(e.LengthRequired = 411)] = "LengthRequired"),
      (e[(e.PreconditionFailed = 412)] = "PreconditionFailed"),
      (e[(e.PayloadTooLarge = 413)] = "PayloadTooLarge"),
      (e[(e.UriTooLong = 414)] = "UriTooLong"),
      (e[(e.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
      (e[(e.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
      (e[(e.ExpectationFailed = 417)] = "ExpectationFailed"),
      (e[(e.ImATeapot = 418)] = "ImATeapot"),
      (e[(e.MisdirectedRequest = 421)] = "MisdirectedRequest"),
      (e[(e.UnprocessableEntity = 422)] = "UnprocessableEntity"),
      (e[(e.Locked = 423)] = "Locked"),
      (e[(e.FailedDependency = 424)] = "FailedDependency"),
      (e[(e.TooEarly = 425)] = "TooEarly"),
      (e[(e.UpgradeRequired = 426)] = "UpgradeRequired"),
      (e[(e.PreconditionRequired = 428)] = "PreconditionRequired"),
      (e[(e.TooManyRequests = 429)] = "TooManyRequests"),
      (e[(e.RequestHeaderFieldsTooLarge = 431)] =
        "RequestHeaderFieldsTooLarge"),
      (e[(e.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
      (e[(e.InternalServerError = 500)] = "InternalServerError"),
      (e[(e.NotImplemented = 501)] = "NotImplemented"),
      (e[(e.BadGateway = 502)] = "BadGateway"),
      (e[(e.ServiceUnavailable = 503)] = "ServiceUnavailable"),
      (e[(e.GatewayTimeout = 504)] = "GatewayTimeout"),
      (e[(e.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
      (e[(e.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
      (e[(e.InsufficientStorage = 507)] = "InsufficientStorage"),
      (e[(e.LoopDetected = 508)] = "LoopDetected"),
      (e[(e.NotExtended = 510)] = "NotExtended"),
      (e[(e.NetworkAuthenticationRequired = 511)] =
        "NetworkAuthenticationRequired"),
      e
    );
  })(Ks || {});
function Wl(e, t) {
  return {
    body: t,
    headers: e.headers,
    context: e.context,
    observe: e.observe,
    params: e.params,
    reportProgress: e.reportProgress,
    responseType: e.responseType,
    withCredentials: e.withCredentials,
    transferCache: e.transferCache,
  };
}
var jM = (() => {
  let t = class t {
    constructor(n) {
      this.handler = n;
    }
    request(n, o, i = {}) {
      let s;
      if (n instanceof ao) s = n;
      else {
        let u;
        i.headers instanceof An ? (u = i.headers) : (u = new An(i.headers));
        let l;
        i.params &&
          (i.params instanceof en
            ? (l = i.params)
            : (l = new en({ fromObject: i.params }))),
          (s = new ao(n, o, i.body !== void 0 ? i.body : null, {
            headers: u,
            context: i.context,
            params: l,
            reportProgress: i.reportProgress,
            responseType: i.responseType || "json",
            withCredentials: i.withCredentials,
            transferCache: i.transferCache,
          }));
      }
      let a = T(s).pipe(Mt((u) => this.handler.handle(u)));
      if (n instanceof ao || i.observe === "events") return a;
      let c = a.pipe(pe((u) => u instanceof Ys));
      switch (i.observe || "body") {
        case "body":
          switch (s.responseType) {
            case "arraybuffer":
              return c.pipe(
                O((u) => {
                  if (u.body !== null && !(u.body instanceof ArrayBuffer))
                    throw new Error("Response is not an ArrayBuffer.");
                  return u.body;
                })
              );
            case "blob":
              return c.pipe(
                O((u) => {
                  if (u.body !== null && !(u.body instanceof Blob))
                    throw new Error("Response is not a Blob.");
                  return u.body;
                })
              );
            case "text":
              return c.pipe(
                O((u) => {
                  if (u.body !== null && typeof u.body != "string")
                    throw new Error("Response is not a string.");
                  return u.body;
                })
              );
            case "json":
            default:
              return c.pipe(O((u) => u.body));
          }
        case "response":
          return c;
        default:
          throw new Error(`Unreachable: unhandled observe type ${i.observe}}`);
      }
    }
    delete(n, o = {}) {
      return this.request("DELETE", n, o);
    }
    get(n, o = {}) {
      return this.request("GET", n, o);
    }
    head(n, o = {}) {
      return this.request("HEAD", n, o);
    }
    jsonp(n, o) {
      return this.request("JSONP", n, {
        params: new en().append(o, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(n, o = {}) {
      return this.request("OPTIONS", n, o);
    }
    patch(n, o, i = {}) {
      return this.request("PATCH", n, Wl(i, o));
    }
    post(n, o, i = {}) {
      return this.request("POST", n, Wl(i, o));
    }
    put(n, o, i = {}) {
      return this.request("PUT", n, Wl(i, o));
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(C(co));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac }));
  let e = t;
  return e;
})();
function sv(e, t) {
  return t(e);
}
function VM(e, t) {
  return (r, n) => t.intercept(r, { handle: (o) => e(o, n) });
}
function $M(e, t, r) {
  return (n, o) => et(r, () => t(n, (i) => e(i, o)));
}
var av = new E(""),
  Ql = new E(""),
  UM = new E(""),
  BM = new E("");
function HM() {
  let e = null;
  return (t, r) => {
    e === null && (e = (g(av, { optional: !0 }) ?? []).reduceRight(VM, sv));
    let n = g(Tn),
      o = n.add();
    return e(t, r).pipe(Ht(() => n.remove(o)));
  };
}
var tv = (() => {
  let t = class t extends co {
    constructor(n, o) {
      super(),
        (this.backend = n),
        (this.injector = o),
        (this.chain = null),
        (this.pendingTasks = g(Tn));
      let i = g(BM, { optional: !0 });
      this.backend = i ?? n;
    }
    handle(n) {
      if (this.chain === null) {
        let i = Array.from(
          new Set([...this.injector.get(Ql), ...this.injector.get(UM, [])])
        );
        this.chain = i.reduceRight((s, a) => $M(s, a, this.injector), sv);
      }
      let o = this.pendingTasks.add();
      return this.chain(n, (i) => this.backend.handle(i)).pipe(
        Ht(() => this.pendingTasks.remove(o))
      );
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(C(Zs), C(we));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac }));
  let e = t;
  return e;
})();
var zM = /^\)\]\}',?\n/;
function GM(e) {
  return "responseURL" in e && e.responseURL
    ? e.responseURL
    : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
    ? e.getResponseHeader("X-Request-URL")
    : null;
}
var nv = (() => {
    let t = class t {
      constructor(n) {
        this.xhrFactory = n;
      }
      handle(n) {
        if (n.method === "JSONP") throw new y(-2800, !1);
        let o = this.xhrFactory;
        return (o.ɵloadImpl ? W(o.ɵloadImpl()) : T(null)).pipe(
          Ce(
            () =>
              new P((s) => {
                let a = o.build();
                if (
                  (a.open(n.method, n.urlWithParams),
                  n.withCredentials && (a.withCredentials = !0),
                  n.headers.forEach((v, m) =>
                    a.setRequestHeader(v, m.join(","))
                  ),
                  n.headers.has("Accept") ||
                    a.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !n.headers.has("Content-Type"))
                ) {
                  let v = n.detectContentTypeHeader();
                  v !== null && a.setRequestHeader("Content-Type", v);
                }
                if (n.responseType) {
                  let v = n.responseType.toLowerCase();
                  a.responseType = v !== "json" ? v : "text";
                }
                let c = n.serializeBody(),
                  u = null,
                  l = () => {
                    if (u !== null) return u;
                    let v = a.statusText || "OK",
                      m = new An(a.getAllResponseHeaders()),
                      j = GM(a) || n.url;
                    return (
                      (u = new Yl({
                        headers: m,
                        status: a.status,
                        statusText: v,
                        url: j,
                      })),
                      u
                    );
                  },
                  d = () => {
                    let { headers: v, status: m, statusText: j, url: Ee } = l(),
                      U = null;
                    m !== Ks.NoContent &&
                      (U =
                        typeof a.response > "u" ? a.responseText : a.response),
                      m === 0 && (m = U ? Ks.Ok : 0);
                    let fe = m >= 200 && m < 300;
                    if (n.responseType === "json" && typeof U == "string") {
                      let Ye = U;
                      U = U.replace(zM, "");
                      try {
                        U = U !== "" ? JSON.parse(U) : null;
                      } catch (Tr) {
                        (U = Ye),
                          fe && ((fe = !1), (U = { error: Tr, text: U }));
                      }
                    }
                    fe
                      ? (s.next(
                          new Ys({
                            body: U,
                            headers: v,
                            status: m,
                            statusText: j,
                            url: Ee || void 0,
                          })
                        ),
                        s.complete())
                      : s.error(
                          new Qs({
                            error: U,
                            headers: v,
                            status: m,
                            statusText: j,
                            url: Ee || void 0,
                          })
                        );
                  },
                  f = (v) => {
                    let { url: m } = l(),
                      j = new Qs({
                        error: v,
                        status: a.status || 0,
                        statusText: a.statusText || "Unknown Error",
                        url: m || void 0,
                      });
                    s.error(j);
                  },
                  h = !1,
                  p = (v) => {
                    h || (s.next(l()), (h = !0));
                    let m = { type: mr.DownloadProgress, loaded: v.loaded };
                    v.lengthComputable && (m.total = v.total),
                      n.responseType === "text" &&
                        a.responseText &&
                        (m.partialText = a.responseText),
                      s.next(m);
                  },
                  D = (v) => {
                    let m = { type: mr.UploadProgress, loaded: v.loaded };
                    v.lengthComputable && (m.total = v.total), s.next(m);
                  };
                return (
                  a.addEventListener("load", d),
                  a.addEventListener("error", f),
                  a.addEventListener("timeout", f),
                  a.addEventListener("abort", f),
                  n.reportProgress &&
                    (a.addEventListener("progress", p),
                    c !== null &&
                      a.upload &&
                      a.upload.addEventListener("progress", D)),
                  a.send(c),
                  s.next({ type: mr.Sent }),
                  () => {
                    a.removeEventListener("error", f),
                      a.removeEventListener("abort", f),
                      a.removeEventListener("load", d),
                      a.removeEventListener("timeout", f),
                      n.reportProgress &&
                        (a.removeEventListener("progress", p),
                        c !== null &&
                          a.upload &&
                          a.upload.removeEventListener("progress", D)),
                      a.readyState !== a.DONE && a.abort();
                  }
                );
              })
          )
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(pr));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Js = new E(""),
  cv = "XSRF-TOKEN",
  uv = new E("", { providedIn: "root", factory: () => cv }),
  lv = "X-XSRF-TOKEN",
  dv = new E("", { providedIn: "root", factory: () => lv }),
  lo = class {},
  fv = (() => {
    let t = class t {
      constructor(n, o, i) {
        (this.doc = n),
          (this.platform = o),
          (this.cookieName = i),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let n = this.doc.cookie || "";
        return (
          n !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Gs(n, this.cookieName)),
            (this.lastCookieString = n)),
          this.lastToken
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(le), C(tt), C(uv));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function hv(e, t) {
  let r = e.url.toLowerCase();
  if (
    !g(Js) ||
    e.method === "GET" ||
    e.method === "HEAD" ||
    r.startsWith("http://") ||
    r.startsWith("https://")
  )
    return t(e);
  let n = g(lo).getToken(),
    o = g(dv);
  return (
    n != null &&
      !e.headers.has(o) &&
      (e = e.clone({ headers: e.headers.set(o, n) })),
    t(e)
  );
}
var rv = (() => {
    let t = class t {
      constructor(n) {
        this.injector = n;
      }
      intercept(n, o) {
        return et(this.injector, () => hv(n, (i) => o.handle(i)));
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(we));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Xs = (function (e) {
    return (
      (e[(e.Interceptors = 0)] = "Interceptors"),
      (e[(e.LegacyInterceptors = 1)] = "LegacyInterceptors"),
      (e[(e.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
      (e[(e.NoXsrfProtection = 3)] = "NoXsrfProtection"),
      (e[(e.JsonpSupport = 4)] = "JsonpSupport"),
      (e[(e.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
      (e[(e.Fetch = 6)] = "Fetch"),
      e
    );
  })(Xs || {});
function Kl(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function WM(...e) {
  let t = [
    jM,
    nv,
    tv,
    { provide: co, useExisting: tv },
    { provide: Zs, useExisting: nv },
    { provide: Ql, useValue: hv, multi: !0 },
    { provide: Js, useValue: !0 },
    { provide: lo, useClass: fv },
  ];
  for (let r of e) t.push(...r.ɵproviders);
  return ss(t);
}
var ov = new E("");
function qM() {
  return Kl(Xs.LegacyInterceptors, [
    { provide: ov, useFactory: HM },
    { provide: Ql, useExisting: ov, multi: !0 },
  ]);
}
function iv({ cookieName: e, headerName: t }) {
  let r = [];
  return (
    e !== void 0 && r.push({ provide: uv, useValue: e }),
    t !== void 0 && r.push({ provide: dv, useValue: t }),
    Kl(Xs.CustomXsrfConfiguration, r)
  );
}
function ZM() {
  return Kl(Xs.NoXsrfProtection, [{ provide: Js, useValue: !1 }]);
}
var iL = (() => {
    let t = class t {
      static disable() {
        return { ngModule: t, providers: [ZM().ɵproviders] };
      }
      static withOptions(n = {}) {
        return { ngModule: t, providers: iv(n).ɵproviders };
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({
        providers: [
          rv,
          { provide: av, useExisting: rv, multi: !0 },
          { provide: lo, useClass: fv },
          iv({ cookieName: cv, headerName: lv }).ɵproviders,
          { provide: Js, useValue: !0 },
        ],
      }));
    let e = t;
    return e;
  })(),
  sL = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({ providers: [WM(qM())] }));
    let e = t;
    return e;
  })();
var ed = class extends Bs {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  td = class e extends ed {
    static makeCurrent() {
      Lm(new e());
    }
    onAndCancel(t, r, n) {
      return (
        t.addEventListener(r, n),
        () => {
          t.removeEventListener(r, n);
        }
      );
    }
    dispatchEvent(t, r) {
      t.dispatchEvent(r);
    }
    remove(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    createElement(t, r) {
      return (r = r || this.getDefaultDocument()), r.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, r) {
      return r === "window"
        ? window
        : r === "document"
        ? t
        : r === "body"
        ? t.body
        : null;
    }
    getBaseHref(t) {
      let r = YM();
      return r == null ? null : QM(r);
    }
    resetBaseElement() {
      fo = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return Gs(document.cookie, t);
    }
  },
  fo = null;
function YM() {
  return (
    (fo = fo || document.querySelector("base")),
    fo ? fo.getAttribute("href") : null
  );
}
function QM(e) {
  return new URL(e, document.baseURI).pathname;
}
var nd = class {
    addToWindow(t) {
      (X.getAngularTestability = (n, o = !0) => {
        let i = t.findTestabilityInTree(n, o);
        if (i == null) throw new y(5103, !1);
        return i;
      }),
        (X.getAllAngularTestabilities = () => t.getAllTestabilities()),
        (X.getAllAngularRootElements = () => t.getAllRootElements());
      let r = (n) => {
        let o = X.getAllAngularTestabilities(),
          i = o.length,
          s = function () {
            i--, i == 0 && n();
          };
        o.forEach((a) => {
          a.whenStable(s);
        });
      };
      X.frameworkStabilizers || (X.frameworkStabilizers = []),
        X.frameworkStabilizers.push(r);
    }
    findTestabilityInTree(t, r, n) {
      if (r == null) return null;
      let o = t.getTestability(r);
      return (
        o ??
        (n
          ? xn().isShadowRoot(r)
            ? this.findTestabilityInTree(t, r.host, !0)
            : this.findTestabilityInTree(t, r.parentElement, !0)
          : null)
      );
    }
  },
  KM = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  rd = new E(""),
  vv = (() => {
    let t = class t {
      constructor(n, o) {
        (this._zone = o),
          (this._eventNameToPlugin = new Map()),
          n.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = n.slice().reverse());
      }
      addEventListener(n, o, i) {
        return this._findPluginFor(o).addEventListener(n, o, i);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(n) {
        let o = this._eventNameToPlugin.get(n);
        if (o) return o;
        if (((o = this._plugins.find((s) => s.supports(n))), !o))
          throw new y(5101, !1);
        return this._eventNameToPlugin.set(n, o), o;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(rd), C(B));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  ea = class {
    constructor(t) {
      this._doc = t;
    }
  },
  Jl = "ng-app-id",
  yv = (() => {
    let t = class t {
      constructor(n, o, i, s = {}) {
        (this.doc = n),
          (this.appId = o),
          (this.nonce = i),
          (this.platformId = s),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Ws(s)),
          this.resetHostNodes();
      }
      addStyles(n) {
        for (let o of n)
          this.changeUsageCount(o, 1) === 1 && this.onStyleAdded(o);
      }
      removeStyles(n) {
        for (let o of n)
          this.changeUsageCount(o, -1) <= 0 && this.onStyleRemoved(o);
      }
      ngOnDestroy() {
        let n = this.styleNodesInDOM;
        n && (n.forEach((o) => o.remove()), n.clear());
        for (let o of this.getAllStyles()) this.onStyleRemoved(o);
        this.resetHostNodes();
      }
      addHost(n) {
        this.hostNodes.add(n);
        for (let o of this.getAllStyles()) this.addStyleToHost(n, o);
      }
      removeHost(n) {
        this.hostNodes.delete(n);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(n) {
        for (let o of this.hostNodes) this.addStyleToHost(o, n);
      }
      onStyleRemoved(n) {
        let o = this.styleRef;
        o.get(n)?.elements?.forEach((i) => i.remove()), o.delete(n);
      }
      collectServerRenderedStyles() {
        let n = this.doc.head?.querySelectorAll(`style[${Jl}="${this.appId}"]`);
        if (n?.length) {
          let o = new Map();
          return (
            n.forEach((i) => {
              i.textContent != null && o.set(i.textContent, i);
            }),
            o
          );
        }
        return null;
      }
      changeUsageCount(n, o) {
        let i = this.styleRef;
        if (i.has(n)) {
          let s = i.get(n);
          return (s.usage += o), s.usage;
        }
        return i.set(n, { usage: o, elements: [] }), o;
      }
      getStyleElement(n, o) {
        let i = this.styleNodesInDOM,
          s = i?.get(o);
        if (s?.parentNode === n) return i.delete(o), s.removeAttribute(Jl), s;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = o),
            this.platformIsServer && a.setAttribute(Jl, this.appId),
            n.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(n, o) {
        let i = this.getStyleElement(n, o),
          s = this.styleRef,
          a = s.get(o)?.elements;
        a ? a.push(i) : s.set(o, { elements: [i], usage: 1 });
      }
      resetHostNodes() {
        let n = this.hostNodes;
        n.clear(), n.add(this.doc.head);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(le), C(cs), C(Gu, 8), C(tt));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  Xl = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  id = /%COMP%/g,
  Dv = "%COMP%",
  JM = `_nghost-${Dv}`,
  XM = `_ngcontent-${Dv}`,
  eT = !0,
  tT = new E("", { providedIn: "root", factory: () => eT });
function nT(e) {
  return XM.replace(id, e);
}
function rT(e) {
  return JM.replace(id, e);
}
function wv(e, t) {
  return t.map((r) => r.replace(id, e));
}
var pv = (() => {
    let t = class t {
      constructor(n, o, i, s, a, c, u, l = null) {
        (this.eventManager = n),
          (this.sharedStylesHost = o),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = s),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = u),
          (this.nonce = l),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Ws(c)),
          (this.defaultRenderer = new ho(n, a, u, this.platformIsServer));
      }
      createRenderer(n, o) {
        if (!n || !o) return this.defaultRenderer;
        this.platformIsServer &&
          o.encapsulation === dt.ShadowDom &&
          (o = te(I({}, o), { encapsulation: dt.Emulated }));
        let i = this.getOrCreateRenderer(n, o);
        return (
          i instanceof ta
            ? i.applyToHost(n)
            : i instanceof po && i.applyStyles(),
          i
        );
      }
      getOrCreateRenderer(n, o) {
        let i = this.rendererByCompId,
          s = i.get(o.id);
        if (!s) {
          let a = this.doc,
            c = this.ngZone,
            u = this.eventManager,
            l = this.sharedStylesHost,
            d = this.removeStylesOnCompDestroy,
            f = this.platformIsServer;
          switch (o.encapsulation) {
            case dt.Emulated:
              s = new ta(u, l, o, this.appId, d, a, c, f);
              break;
            case dt.ShadowDom:
              return new od(u, l, n, o, a, c, this.nonce, f);
            default:
              s = new po(u, l, o, d, a, c, f);
              break;
          }
          i.set(o.id, s);
        }
        return s;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(
        C(vv),
        C(yv),
        C(cs),
        C(tT),
        C(le),
        C(tt),
        C(B),
        C(Gu)
      );
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  ho = class {
    constructor(t, r, n, o) {
      (this.eventManager = t),
        (this.doc = r),
        (this.ngZone = n),
        (this.platformIsServer = o),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, r) {
      return r
        ? this.doc.createElementNS(Xl[r] || r, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, r) {
      (gv(t) ? t.content : t).appendChild(r);
    }
    insertBefore(t, r, n) {
      t && (gv(t) ? t.content : t).insertBefore(r, n);
    }
    removeChild(t, r) {
      t && t.removeChild(r);
    }
    selectRootElement(t, r) {
      let n = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!n) throw new y(-5104, !1);
      return r || (n.textContent = ""), n;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, r, n, o) {
      if (o) {
        r = o + ":" + r;
        let i = Xl[o];
        i ? t.setAttributeNS(i, r, n) : t.setAttribute(r, n);
      } else t.setAttribute(r, n);
    }
    removeAttribute(t, r, n) {
      if (n) {
        let o = Xl[n];
        o ? t.removeAttributeNS(o, r) : t.removeAttribute(`${n}:${r}`);
      } else t.removeAttribute(r);
    }
    addClass(t, r) {
      t.classList.add(r);
    }
    removeClass(t, r) {
      t.classList.remove(r);
    }
    setStyle(t, r, n, o) {
      o & (pt.DashCase | pt.Important)
        ? t.style.setProperty(r, n, o & pt.Important ? "important" : "")
        : (t.style[r] = n);
    }
    removeStyle(t, r, n) {
      n & pt.DashCase ? t.style.removeProperty(r) : (t.style[r] = "");
    }
    setProperty(t, r, n) {
      t != null && (t[r] = n);
    }
    setValue(t, r) {
      t.nodeValue = r;
    }
    listen(t, r, n) {
      if (
        typeof t == "string" &&
        ((t = xn().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${r}`);
      return this.eventManager.addEventListener(
        t,
        r,
        this.decoratePreventDefault(n)
      );
    }
    decoratePreventDefault(t) {
      return (r) => {
        if (r === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(r)) : t(r)) ===
          !1 && r.preventDefault();
      };
    }
  };
function gv(e) {
  return e.tagName === "TEMPLATE" && e.content !== void 0;
}
var od = class extends ho {
    constructor(t, r, n, o, i, s, a, c) {
      super(t, i, s, c),
        (this.sharedStylesHost = r),
        (this.hostEl = n),
        (this.shadowRoot = n.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let u = wv(o.id, o.styles);
      for (let l of u) {
        let d = document.createElement("style");
        a && d.setAttribute("nonce", a),
          (d.textContent = l),
          this.shadowRoot.appendChild(d);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, r) {
      return super.appendChild(this.nodeOrShadowRoot(t), r);
    }
    insertBefore(t, r, n) {
      return super.insertBefore(this.nodeOrShadowRoot(t), r, n);
    }
    removeChild(t, r) {
      return super.removeChild(this.nodeOrShadowRoot(t), r);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  po = class extends ho {
    constructor(t, r, n, o, i, s, a, c) {
      super(t, i, s, a),
        (this.sharedStylesHost = r),
        (this.removeStylesOnCompDestroy = o),
        (this.styles = c ? wv(c, n.styles) : n.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  ta = class extends po {
    constructor(t, r, n, o, i, s, a, c) {
      let u = o + "-" + n.id;
      super(t, r, n, i, s, a, c, u),
        (this.contentAttr = nT(u)),
        (this.hostAttr = rT(u));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, r) {
      let n = super.createElement(t, r);
      return super.setAttribute(n, this.contentAttr, ""), n;
    }
  },
  oT = (() => {
    let t = class t extends ea {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return !0;
      }
      addEventListener(n, o, i) {
        return (
          n.addEventListener(o, i, !1), () => this.removeEventListener(n, o, i)
        );
      }
      removeEventListener(n, o, i) {
        return n.removeEventListener(o, i);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(le));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })(),
  mv = ["alt", "control", "meta", "shift"],
  iT = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  sT = {
    alt: (e) => e.altKey,
    control: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
  },
  aT = (() => {
    let t = class t extends ea {
      constructor(n) {
        super(n);
      }
      supports(n) {
        return t.parseEventName(n) != null;
      }
      addEventListener(n, o, i) {
        let s = t.parseEventName(o),
          a = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => xn().onAndCancel(n, s.domEventName, a));
      }
      static parseEventName(n) {
        let o = n.toLowerCase().split("."),
          i = o.shift();
        if (o.length === 0 || !(i === "keydown" || i === "keyup")) return null;
        let s = t._normalizeKey(o.pop()),
          a = "",
          c = o.indexOf("code");
        if (
          (c > -1 && (o.splice(c, 1), (a = "code.")),
          mv.forEach((l) => {
            let d = o.indexOf(l);
            d > -1 && (o.splice(d, 1), (a += l + "."));
          }),
          (a += s),
          o.length != 0 || s.length === 0)
        )
          return null;
        let u = {};
        return (u.domEventName = i), (u.fullKey = a), u;
      }
      static matchEventFullKeyCode(n, o) {
        let i = iT[n.key] || n.key,
          s = "";
        return (
          o.indexOf("code.") > -1 && ((i = n.code), (s = "code.")),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === " " ? (i = "space") : i === "." && (i = "dot"),
              mv.forEach((a) => {
                if (a !== i) {
                  let c = sT[a];
                  c(n) && (s += a + ".");
                }
              }),
              (s += i),
              s === o)
        );
      }
      static eventCallback(n, o, i) {
        return (s) => {
          t.matchEventFullKeyCode(s, n) && i.runGuarded(() => o(s));
        };
      }
      static _normalizeKey(n) {
        return n === "esc" ? "escape" : n;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(le));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function cT() {
  td.makeCurrent();
}
function uT() {
  return new gt();
}
function lT() {
  return Sp(document), document;
}
var dT = [
    { provide: tt, useValue: Gl },
    { provide: zu, useValue: cT, multi: !0 },
    { provide: le, useFactory: lT, deps: [] },
  ],
  DL = Tl(bm, "browser", dT),
  fT = new E(""),
  hT = [
    { provide: oo, useClass: nd, deps: [] },
    { provide: bl, useClass: As, deps: [B, _s, oo] },
    { provide: As, useClass: As, deps: [B, _s, oo] },
  ],
  pT = [
    { provide: as, useValue: "root" },
    { provide: gt, useFactory: uT, deps: [] },
    { provide: rd, useClass: oT, multi: !0, deps: [le, B, tt] },
    { provide: rd, useClass: aT, multi: !0, deps: [le] },
    pv,
    yv,
    vv,
    { provide: zr, useExisting: pv },
    { provide: pr, useClass: KM, deps: [] },
    [],
  ],
  wL = (() => {
    let t = class t {
      constructor(n) {}
      static withServerTransition(n) {
        return { ngModule: t, providers: [{ provide: cs, useValue: n.appId }] };
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(fT, 12));
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({ providers: [...pT, ...hT], imports: [Wm, Mm] }));
    let e = t;
    return e;
  })();
var Ev = (() => {
  let t = class t {
    constructor(n) {
      this._doc = n;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(n) {
      this._doc.title = n || "";
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(C(le));
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
var gT = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({
        token: t,
        factory: function (o) {
          let i = null;
          return o ? (i = new (o || t)()) : (i = C(mT)), i;
        },
        providedIn: "root",
      }));
    let e = t;
    return e;
  })(),
  mT = (() => {
    let t = class t extends gT {
      constructor(n) {
        super(), (this._doc = n);
      }
      sanitize(n, o) {
        if (o == null) return null;
        switch (n) {
          case nt.NONE:
            return o;
          case nt.HTML:
            return Nt(o, "HTML") ? Ne(o) : Ku(this._doc, String(o)).toString();
          case nt.STYLE:
            return Nt(o, "Style") ? Ne(o) : o;
          case nt.SCRIPT:
            if (Nt(o, "Script")) return Ne(o);
            throw new y(5200, !1);
          case nt.URL:
            return Nt(o, "URL") ? Ne(o) : hs(String(o));
          case nt.RESOURCE_URL:
            if (Nt(o, "ResourceURL")) return Ne(o);
            throw new y(5201, !1);
          default:
            throw new y(5202, !1);
        }
      }
      bypassSecurityTrustHtml(n) {
        return zp(n);
      }
      bypassSecurityTrustStyle(n) {
        return Gp(n);
      }
      bypassSecurityTrustScript(n) {
        return Wp(n);
      }
      bypassSecurityTrustUrl(n) {
        return qp(n);
      }
      bypassSecurityTrustResourceUrl(n) {
        return Zp(n);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(le));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
var R = "primary",
  Ao = Symbol("RouteTitle"),
  ld = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r[0] : r;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let r = this.params[t];
        return Array.isArray(r) ? r : [r];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Er(e) {
  return new ld(e);
}
function yT(e, t, r) {
  let n = r.path.split("/");
  if (
    n.length > e.length ||
    (r.pathMatch === "full" && (t.hasChildren() || n.length < e.length))
  )
    return null;
  let o = {};
  for (let i = 0; i < n.length; i++) {
    let s = n[i],
      a = e[i];
    if (s.startsWith(":")) o[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: e.slice(0, n.length), posParams: o };
}
function DT(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; ++r) if (!wt(e[r], t[r])) return !1;
  return !0;
}
function wt(e, t) {
  let r = e ? dd(e) : void 0,
    n = t ? dd(t) : void 0;
  if (!r || !n || r.length != n.length) return !1;
  let o;
  for (let i = 0; i < r.length; i++)
    if (((o = r[i]), !Nv(e[o], t[o]))) return !1;
  return !0;
}
function dd(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function Nv(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    let r = [...e].sort(),
      n = [...t].sort();
    return r.every((o, i) => n[i] === o);
  } else return e === t;
}
function Rv(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function on(e) {
  return Pa(e) ? e : hr(e) ? W(Promise.resolve(e)) : T(e);
}
var wT = { exact: Pv, subset: Fv },
  Ov = { exact: ET, subset: IT, ignored: () => !0 };
function Iv(e, t, r) {
  return (
    wT[r.paths](e.root, t.root, r.matrixParams) &&
    Ov[r.queryParams](e.queryParams, t.queryParams) &&
    !(r.fragment === "exact" && e.fragment !== t.fragment)
  );
}
function ET(e, t) {
  return wt(e, t);
}
function Pv(e, t, r) {
  if (
    !Nn(e.segments, t.segments) ||
    !oa(e.segments, t.segments, r) ||
    e.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let n in t.children)
    if (!e.children[n] || !Pv(e.children[n], t.children[n], r)) return !1;
  return !0;
}
function IT(e, t) {
  return (
    Object.keys(t).length <= Object.keys(e).length &&
    Object.keys(t).every((r) => Nv(e[r], t[r]))
  );
}
function Fv(e, t, r) {
  return kv(e, t, t.segments, r);
}
function kv(e, t, r, n) {
  if (e.segments.length > r.length) {
    let o = e.segments.slice(0, r.length);
    return !(!Nn(o, r) || t.hasChildren() || !oa(o, r, n));
  } else if (e.segments.length === r.length) {
    if (!Nn(e.segments, r) || !oa(e.segments, r, n)) return !1;
    for (let o in t.children)
      if (!e.children[o] || !Fv(e.children[o], t.children[o], n)) return !1;
    return !0;
  } else {
    let o = r.slice(0, e.segments.length),
      i = r.slice(e.segments.length);
    return !Nn(e.segments, o) || !oa(e.segments, o, n) || !e.children[R]
      ? !1
      : kv(e.children[R], t, i, n);
  }
}
function oa(e, t, r) {
  return t.every((n, o) => Ov[r](e[o].parameters, n.parameters));
}
var tn = class {
    constructor(t = new H([], {}), r = {}, n = null) {
      (this.root = t), (this.queryParams = r), (this.fragment = n);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Er(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return MT.serialize(this);
    }
  },
  H = class {
    constructor(t, r) {
      (this.segments = t),
        (this.children = r),
        (this.parent = null),
        Object.values(r).forEach((n) => (n.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return ia(this);
    }
  },
  _n = class {
    constructor(t, r) {
      (this.path = t), (this.parameters = r);
    }
    get parameterMap() {
      return (this._parameterMap ??= Er(this.parameters)), this._parameterMap;
    }
    toString() {
      return jv(this);
    }
  };
function CT(e, t) {
  return Nn(e, t) && e.every((r, n) => wt(r.parameters, t[n].parameters));
}
function Nn(e, t) {
  return e.length !== t.length ? !1 : e.every((r, n) => r.path === t[n].path);
}
function bT(e, t) {
  let r = [];
  return (
    Object.entries(e.children).forEach(([n, o]) => {
      n === R && (r = r.concat(t(o, n)));
    }),
    Object.entries(e.children).forEach(([n, o]) => {
      n !== R && (r = r.concat(t(o, n)));
    }),
    r
  );
}
var _o = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => new Eo(), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Eo = class {
    parse(t) {
      let r = new hd(t);
      return new tn(
        r.parseRootSegment(),
        r.parseQueryParams(),
        r.parseFragment()
      );
    }
    serialize(t) {
      let r = `/${go(t.root, !0)}`,
        n = xT(t.queryParams),
        o = typeof t.fragment == "string" ? `#${TT(t.fragment)}` : "";
      return `${r}${n}${o}`;
    }
  },
  MT = new Eo();
function ia(e) {
  return e.segments.map((t) => jv(t)).join("/");
}
function go(e, t) {
  if (!e.hasChildren()) return ia(e);
  if (t) {
    let r = e.children[R] ? go(e.children[R], !1) : "",
      n = [];
    return (
      Object.entries(e.children).forEach(([o, i]) => {
        o !== R && n.push(`${o}:${go(i, !1)}`);
      }),
      n.length > 0 ? `${r}(${n.join("//")})` : r
    );
  } else {
    let r = bT(e, (n, o) =>
      o === R ? [go(e.children[R], !1)] : [`${o}:${go(n, !1)}`]
    );
    return Object.keys(e.children).length === 1 && e.children[R] != null
      ? `${ia(e)}/${r[0]}`
      : `${ia(e)}/(${r.join("//")})`;
  }
}
function Lv(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function na(e) {
  return Lv(e).replace(/%3B/gi, ";");
}
function TT(e) {
  return encodeURI(e);
}
function fd(e) {
  return Lv(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function sa(e) {
  return decodeURIComponent(e);
}
function Cv(e) {
  return sa(e.replace(/\+/g, "%20"));
}
function jv(e) {
  return `${fd(e.path)}${ST(e.parameters)}`;
}
function ST(e) {
  return Object.entries(e)
    .map(([t, r]) => `;${fd(t)}=${fd(r)}`)
    .join("");
}
function xT(e) {
  let t = Object.entries(e)
    .map(([r, n]) =>
      Array.isArray(n)
        ? n.map((o) => `${na(r)}=${na(o)}`).join("&")
        : `${na(r)}=${na(n)}`
    )
    .filter((r) => r);
  return t.length ? `?${t.join("&")}` : "";
}
var AT = /^[^\/()?;#]+/;
function sd(e) {
  let t = e.match(AT);
  return t ? t[0] : "";
}
var _T = /^[^\/()?;=#]+/;
function NT(e) {
  let t = e.match(_T);
  return t ? t[0] : "";
}
var RT = /^[^=?&#]+/;
function OT(e) {
  let t = e.match(RT);
  return t ? t[0] : "";
}
var PT = /^[^&#]+/;
function FT(e) {
  let t = e.match(PT);
  return t ? t[0] : "";
}
var hd = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new H([], {})
        : new H([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let r = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (r = this.parseParens(!0)));
    let n = {};
    return (
      this.peekStartsWith("(") && (n = this.parseParens(!1)),
      (t.length > 0 || Object.keys(r).length > 0) && (n[R] = new H(t, r)),
      n
    );
  }
  parseSegment() {
    let t = sd(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new y(4009, !1);
    return this.capture(t), new _n(sa(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let r = NT(this.remaining);
    if (!r) return;
    this.capture(r);
    let n = "";
    if (this.consumeOptional("=")) {
      let o = sd(this.remaining);
      o && ((n = o), this.capture(n));
    }
    t[sa(r)] = sa(n);
  }
  parseQueryParam(t) {
    let r = OT(this.remaining);
    if (!r) return;
    this.capture(r);
    let n = "";
    if (this.consumeOptional("=")) {
      let s = FT(this.remaining);
      s && ((n = s), this.capture(n));
    }
    let o = Cv(r),
      i = Cv(n);
    if (t.hasOwnProperty(o)) {
      let s = t[o];
      Array.isArray(s) || ((s = [s]), (t[o] = s)), s.push(i);
    } else t[o] = i;
  }
  parseParens(t) {
    let r = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let n = sd(this.remaining),
        o = this.remaining[n.length];
      if (o !== "/" && o !== ")" && o !== ";") throw new y(4010, !1);
      let i;
      n.indexOf(":") > -1
        ? ((i = n.slice(0, n.indexOf(":"))), this.capture(i), this.capture(":"))
        : t && (i = R);
      let s = this.parseChildren();
      (r[i] = Object.keys(s).length === 1 ? s[R] : new H([], s)),
        this.consumeOptional("//");
    }
    return r;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new y(4011, !1);
  }
};
function Vv(e) {
  return e.segments.length > 0 ? new H([], { [R]: e }) : e;
}
function $v(e) {
  let t = {};
  for (let [n, o] of Object.entries(e.children)) {
    let i = $v(o);
    if (n === R && i.segments.length === 0 && i.hasChildren())
      for (let [s, a] of Object.entries(i.children)) t[s] = a;
    else (i.segments.length > 0 || i.hasChildren()) && (t[n] = i);
  }
  let r = new H(e.segments, t);
  return kT(r);
}
function kT(e) {
  if (e.numberOfChildren === 1 && e.children[R]) {
    let t = e.children[R];
    return new H(e.segments.concat(t.segments), t.children);
  }
  return e;
}
function Ir(e) {
  return e instanceof tn;
}
function LT(e, t, r = null, n = null) {
  let o = Uv(e);
  return Bv(o, t, r, n);
}
function Uv(e) {
  let t;
  function r(i) {
    let s = {};
    for (let c of i.children) {
      let u = r(c);
      s[c.outlet] = u;
    }
    let a = new H(i.url, s);
    return i === e && (t = a), a;
  }
  let n = r(e.root),
    o = Vv(n);
  return t ?? o;
}
function Bv(e, t, r, n) {
  let o = e;
  for (; o.parent; ) o = o.parent;
  if (t.length === 0) return ad(o, o, o, r, n);
  let i = jT(t);
  if (i.toRoot()) return ad(o, o, new H([], {}), r, n);
  let s = VT(i, o, e),
    a = s.processChildren
      ? yo(s.segmentGroup, s.index, i.commands)
      : zv(s.segmentGroup, s.index, i.commands);
  return ad(o, s.segmentGroup, a, r, n);
}
function aa(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function Io(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function ad(e, t, r, n, o) {
  let i = {};
  n &&
    Object.entries(n).forEach(([c, u]) => {
      i[c] = Array.isArray(u) ? u.map((l) => `${l}`) : `${u}`;
    });
  let s;
  e === t ? (s = r) : (s = Hv(e, t, r));
  let a = Vv($v(s));
  return new tn(a, i, o);
}
function Hv(e, t, r) {
  let n = {};
  return (
    Object.entries(e.children).forEach(([o, i]) => {
      i === t ? (n[o] = r) : (n[o] = Hv(i, t, r));
    }),
    new H(e.segments, n)
  );
}
var ca = class {
  constructor(t, r, n) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = r),
      (this.commands = n),
      t && n.length > 0 && aa(n[0]))
    )
      throw new y(4003, !1);
    let o = n.find(Io);
    if (o && o !== Rv(n)) throw new y(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function jT(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new ca(!0, 0, e);
  let t = 0,
    r = !1,
    n = e.reduce((o, i, s) => {
      if (typeof i == "object" && i != null) {
        if (i.outlets) {
          let a = {};
          return (
            Object.entries(i.outlets).forEach(([c, u]) => {
              a[c] = typeof u == "string" ? u.split("/") : u;
            }),
            [...o, { outlets: a }]
          );
        }
        if (i.segmentPath) return [...o, i.segmentPath];
      }
      return typeof i != "string"
        ? [...o, i]
        : s === 0
        ? (i.split("/").forEach((a, c) => {
            (c == 0 && a === ".") ||
              (c == 0 && a === ""
                ? (r = !0)
                : a === ".."
                ? t++
                : a != "" && o.push(a));
          }),
          o)
        : [...o, i];
    }, []);
  return new ca(r, t, n);
}
var Dr = class {
  constructor(t, r, n) {
    (this.segmentGroup = t), (this.processChildren = r), (this.index = n);
  }
};
function VT(e, t, r) {
  if (e.isAbsolute) return new Dr(t, !0, 0);
  if (!r) return new Dr(t, !1, NaN);
  if (r.parent === null) return new Dr(r, !0, 0);
  let n = aa(e.commands[0]) ? 0 : 1,
    o = r.segments.length - 1 + n;
  return $T(r, o, e.numberOfDoubleDots);
}
function $T(e, t, r) {
  let n = e,
    o = t,
    i = r;
  for (; i > o; ) {
    if (((i -= o), (n = n.parent), !n)) throw new y(4005, !1);
    o = n.segments.length;
  }
  return new Dr(n, !1, o - i);
}
function UT(e) {
  return Io(e[0]) ? e[0].outlets : { [R]: e };
}
function zv(e, t, r) {
  if (((e ??= new H([], {})), e.segments.length === 0 && e.hasChildren()))
    return yo(e, t, r);
  let n = BT(e, t, r),
    o = r.slice(n.commandIndex);
  if (n.match && n.pathIndex < e.segments.length) {
    let i = new H(e.segments.slice(0, n.pathIndex), {});
    return (
      (i.children[R] = new H(e.segments.slice(n.pathIndex), e.children)),
      yo(i, 0, o)
    );
  } else
    return n.match && o.length === 0
      ? new H(e.segments, {})
      : n.match && !e.hasChildren()
      ? pd(e, t, r)
      : n.match
      ? yo(e, 0, o)
      : pd(e, t, r);
}
function yo(e, t, r) {
  if (r.length === 0) return new H(e.segments, {});
  {
    let n = UT(r),
      o = {};
    if (
      Object.keys(n).some((i) => i !== R) &&
      e.children[R] &&
      e.numberOfChildren === 1 &&
      e.children[R].segments.length === 0
    ) {
      let i = yo(e.children[R], t, r);
      return new H(e.segments, i.children);
    }
    return (
      Object.entries(n).forEach(([i, s]) => {
        typeof s == "string" && (s = [s]),
          s !== null && (o[i] = zv(e.children[i], t, s));
      }),
      Object.entries(e.children).forEach(([i, s]) => {
        n[i] === void 0 && (o[i] = s);
      }),
      new H(e.segments, o)
    );
  }
}
function BT(e, t, r) {
  let n = 0,
    o = t,
    i = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; o < e.segments.length; ) {
    if (n >= r.length) return i;
    let s = e.segments[o],
      a = r[n];
    if (Io(a)) break;
    let c = `${a}`,
      u = n < r.length - 1 ? r[n + 1] : null;
    if (o > 0 && c === void 0) break;
    if (c && u && typeof u == "object" && u.outlets === void 0) {
      if (!Mv(c, u, s)) return i;
      n += 2;
    } else {
      if (!Mv(c, {}, s)) return i;
      n++;
    }
    o++;
  }
  return { match: !0, pathIndex: o, commandIndex: n };
}
function pd(e, t, r) {
  let n = e.segments.slice(0, t),
    o = 0;
  for (; o < r.length; ) {
    let i = r[o];
    if (Io(i)) {
      let c = HT(i.outlets);
      return new H(n, c);
    }
    if (o === 0 && aa(r[0])) {
      let c = e.segments[t];
      n.push(new _n(c.path, bv(r[0]))), o++;
      continue;
    }
    let s = Io(i) ? i.outlets[R] : `${i}`,
      a = o < r.length - 1 ? r[o + 1] : null;
    s && a && aa(a)
      ? (n.push(new _n(s, bv(a))), (o += 2))
      : (n.push(new _n(s, {})), o++);
  }
  return new H(n, {});
}
function HT(e) {
  let t = {};
  return (
    Object.entries(e).forEach(([r, n]) => {
      typeof n == "string" && (n = [n]),
        n !== null && (t[r] = pd(new H([], {}), 0, n));
    }),
    t
  );
}
function bv(e) {
  let t = {};
  return Object.entries(e).forEach(([r, n]) => (t[r] = `${n}`)), t;
}
function Mv(e, t, r) {
  return e == r.path && wt(t, r.parameters);
}
var Do = "imperative",
  de = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(de || {}),
  Ze = class {
    constructor(t, r) {
      (this.id = t), (this.url = r);
    }
  },
  Cr = class extends Ze {
    constructor(t, r, n = "imperative", o = null) {
      super(t, r),
        (this.type = de.NavigationStart),
        (this.navigationTrigger = n),
        (this.restoredState = o);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  ot = class extends Ze {
    constructor(t, r, n) {
      super(t, r), (this.urlAfterRedirects = n), (this.type = de.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  qe = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      e
    );
  })(qe || {}),
  ua = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(ua || {}),
  nn = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.reason = n),
        (this.code = o),
        (this.type = de.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  rn = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.reason = n),
        (this.code = o),
        (this.type = de.NavigationSkipped);
    }
  },
  Co = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.error = n),
        (this.target = o),
        (this.type = de.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  la = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = de.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  gd = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = de.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  md = class extends Ze {
    constructor(t, r, n, o, i) {
      super(t, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.shouldActivate = i),
        (this.type = de.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  vd = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = de.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  yd = class extends Ze {
    constructor(t, r, n, o) {
      super(t, r),
        (this.urlAfterRedirects = n),
        (this.state = o),
        (this.type = de.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Dd = class {
    constructor(t) {
      (this.route = t), (this.type = de.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  wd = class {
    constructor(t) {
      (this.route = t), (this.type = de.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Ed = class {
    constructor(t) {
      (this.snapshot = t), (this.type = de.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Id = class {
    constructor(t) {
      (this.snapshot = t), (this.type = de.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Cd = class {
    constructor(t) {
      (this.snapshot = t), (this.type = de.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  bd = class {
    constructor(t) {
      (this.snapshot = t), (this.type = de.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  da = class {
    constructor(t, r, n) {
      (this.routerEvent = t),
        (this.position = r),
        (this.anchor = n),
        (this.type = de.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  bo = class {},
  Mo = class {
    constructor(t) {
      this.url = t;
    }
  };
var Md = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new No()),
        (this.attachRef = null);
    }
  },
  No = (() => {
    let t = class t {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(n, o) {
        let i = this.getOrCreateContext(n);
        (i.outlet = o), this.contexts.set(n, i);
      }
      onChildOutletDestroyed(n) {
        let o = this.getContext(n);
        o && ((o.outlet = null), (o.attachRef = null));
      }
      onOutletDeactivated() {
        let n = this.contexts;
        return (this.contexts = new Map()), n;
      }
      onOutletReAttached(n) {
        this.contexts = n;
      }
      getOrCreateContext(n) {
        let o = this.getContext(n);
        return o || ((o = new Md()), this.contexts.set(n, o)), o;
      }
      getContext(n) {
        return this.contexts.get(n) || null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  fa = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let r = this.pathFromRoot(t);
      return r.length > 1 ? r[r.length - 2] : null;
    }
    children(t) {
      let r = Td(t, this._root);
      return r ? r.children.map((n) => n.value) : [];
    }
    firstChild(t) {
      let r = Td(t, this._root);
      return r && r.children.length > 0 ? r.children[0].value : null;
    }
    siblings(t) {
      let r = Sd(t, this._root);
      return r.length < 2
        ? []
        : r[r.length - 2].children.map((o) => o.value).filter((o) => o !== t);
    }
    pathFromRoot(t) {
      return Sd(t, this._root).map((r) => r.value);
    }
  };
function Td(e, t) {
  if (e === t.value) return t;
  for (let r of t.children) {
    let n = Td(e, r);
    if (n) return n;
  }
  return null;
}
function Sd(e, t) {
  if (e === t.value) return [t];
  for (let r of t.children) {
    let n = Sd(e, r);
    if (n.length) return n.unshift(t), n;
  }
  return [];
}
var Ve = class {
  constructor(t, r) {
    (this.value = t), (this.children = r);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function yr(e) {
  let t = {};
  return e && e.children.forEach((r) => (t[r.value.outlet] = r)), t;
}
var ha = class extends fa {
  constructor(t, r) {
    super(t), (this.snapshot = r), Ld(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Gv(e) {
  let t = zT(e),
    r = new he([new _n("", {})]),
    n = new he({}),
    o = new he({}),
    i = new he({}),
    s = new he(""),
    a = new Rn(r, n, i, s, o, R, e, t.root);
  return (a.snapshot = t.root), new ha(new Ve(a, []), t);
}
function zT(e) {
  let t = {},
    r = {},
    n = {},
    o = "",
    i = new To([], t, n, o, r, R, e, null, {});
  return new pa("", new Ve(i, []));
}
var Rn = class {
  constructor(t, r, n, o, i, s, a, c) {
    (this.urlSubject = t),
      (this.paramsSubject = r),
      (this.queryParamsSubject = n),
      (this.fragmentSubject = o),
      (this.dataSubject = i),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(O((u) => u[Ao])) ?? T(void 0)),
      (this.url = t),
      (this.params = r),
      (this.queryParams = n),
      (this.fragment = o),
      (this.data = i);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(O((t) => Er(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(O((t) => Er(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function kd(e, t, r = "emptyOnly") {
  let n,
    { routeConfig: o } = e;
  return (
    t !== null &&
    (r === "always" ||
      o?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (n = {
          params: I(I({}, t.params), e.params),
          data: I(I({}, t.data), e.data),
          resolve: I(I(I(I({}, e.data), t.data), o?.data), e._resolvedData),
        })
      : (n = {
          params: I({}, e.params),
          data: I({}, e.data),
          resolve: I(I({}, e.data), e._resolvedData ?? {}),
        }),
    o && qv(o) && (n.resolve[Ao] = o.title),
    n
  );
}
var To = class {
    get title() {
      return this.data?.[Ao];
    }
    constructor(t, r, n, o, i, s, a, c, u) {
      (this.url = t),
        (this.params = r),
        (this.queryParams = n),
        (this.fragment = o),
        (this.data = i),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = u);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= Er(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Er(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((n) => n.toString()).join("/"),
        r = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${r}')`;
    }
  },
  pa = class extends fa {
    constructor(t, r) {
      super(r), (this.url = t), Ld(this, r);
    }
    toString() {
      return Wv(this._root);
    }
  };
function Ld(e, t) {
  (t.value._routerState = e), t.children.forEach((r) => Ld(e, r));
}
function Wv(e) {
  let t = e.children.length > 0 ? ` { ${e.children.map(Wv).join(", ")} } ` : "";
  return `${e.value}${t}`;
}
function cd(e) {
  if (e.snapshot) {
    let t = e.snapshot,
      r = e._futureSnapshot;
    (e.snapshot = r),
      wt(t.queryParams, r.queryParams) ||
        e.queryParamsSubject.next(r.queryParams),
      t.fragment !== r.fragment && e.fragmentSubject.next(r.fragment),
      wt(t.params, r.params) || e.paramsSubject.next(r.params),
      DT(t.url, r.url) || e.urlSubject.next(r.url),
      wt(t.data, r.data) || e.dataSubject.next(r.data);
  } else
    (e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data);
}
function xd(e, t) {
  let r = wt(e.params, t.params) && CT(e.url, t.url),
    n = !e.parent != !t.parent;
  return r && !n && (!e.parent || xd(e.parent, t.parent));
}
function qv(e) {
  return typeof e.title == "string" || e.title === null;
}
var GT = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = R),
          (this.activateEvents = new ge()),
          (this.deactivateEvents = new ge()),
          (this.attachEvents = new ge()),
          (this.detachEvents = new ge()),
          (this.parentContexts = g(No)),
          (this.location = g(Dt)),
          (this.changeDetector = g(dr)),
          (this.environmentInjector = g(we)),
          (this.inputBinder = g(Da, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(n) {
        if (n.name) {
          let { firstChange: o, previousValue: i } = n.name;
          if (o) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(n) {
        return this.parentContexts.getContext(n)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let n = this.parentContexts.getContext(this.name);
        n?.route &&
          (n.attachRef
            ? this.attach(n.attachRef, n.route)
            : this.activateWith(n.route, n.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new y(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new y(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new y(4012, !1);
        this.location.detach();
        let n = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(n.instance),
          n
        );
      }
      attach(n, o) {
        (this.activated = n),
          (this._activatedRoute = o),
          this.location.insert(n.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(n.instance);
      }
      deactivate() {
        if (this.activated) {
          let n = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(n);
        }
      }
      activateWith(n, o) {
        if (this.isActivated) throw new y(4013, !1);
        this._activatedRoute = n;
        let i = this.location,
          a = n.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          u = new Ad(n, c, i.injector);
        (this.activated = i.createComponent(a, {
          index: i.length,
          injector: u,
          environmentInjector: o ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Yt],
      }));
    let e = t;
    return e;
  })(),
  Ad = class {
    constructor(t, r, n) {
      (this.route = t), (this.childContexts = r), (this.parent = n);
    }
    get(t, r) {
      return t === Rn
        ? this.route
        : t === No
        ? this.childContexts
        : this.parent.get(t, r);
    }
  },
  Da = new E(""),
  Tv = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(n) {
        this.unsubscribeFromRouteData(n), this.subscribeToRouteData(n);
      }
      unsubscribeFromRouteData(n) {
        this.outletDataSubscriptions.get(n)?.unsubscribe(),
          this.outletDataSubscriptions.delete(n);
      }
      subscribeToRouteData(n) {
        let { activatedRoute: o } = n,
          i = _r([o.queryParams, o.params, o.data])
            .pipe(
              Ce(
                ([s, a, c], u) => (
                  (c = I(I(I({}, s), a), c)),
                  u === 0 ? T(c) : Promise.resolve(c)
                )
              )
            )
            .subscribe((s) => {
              if (
                !n.isActivated ||
                !n.activatedComponentRef ||
                n.activatedRoute !== o ||
                o.component === null
              ) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              let a = Tm(o.component);
              if (!a) {
                this.unsubscribeFromRouteData(n);
                return;
              }
              for (let { templateName: c } of a.inputs)
                n.activatedComponentRef.setInput(c, s[c]);
            });
        this.outletDataSubscriptions.set(n, i);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function WT(e, t, r) {
  let n = So(e, t._root, r ? r._root : void 0);
  return new ha(n, t);
}
function So(e, t, r) {
  if (r && e.shouldReuseRoute(t.value, r.value.snapshot)) {
    let n = r.value;
    n._futureSnapshot = t.value;
    let o = qT(e, t, r);
    return new Ve(n, o);
  } else {
    if (e.shouldAttach(t.value)) {
      let i = e.retrieve(t.value);
      if (i !== null) {
        let s = i.route;
        return (
          (s.value._futureSnapshot = t.value),
          (s.children = t.children.map((a) => So(e, a))),
          s
        );
      }
    }
    let n = ZT(t.value),
      o = t.children.map((i) => So(e, i));
    return new Ve(n, o);
  }
}
function qT(e, t, r) {
  return t.children.map((n) => {
    for (let o of r.children)
      if (e.shouldReuseRoute(n.value, o.value.snapshot)) return So(e, n, o);
    return So(e, n);
  });
}
function ZT(e) {
  return new Rn(
    new he(e.url),
    new he(e.params),
    new he(e.queryParams),
    new he(e.fragment),
    new he(e.data),
    e.outlet,
    e.component,
    e
  );
}
var Zv = "ngNavigationCancelingError";
function Yv(e, t) {
  let { redirectTo: r, navigationBehaviorOptions: n } = Ir(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    o = Qv(!1, qe.Redirect);
  return (o.url = r), (o.navigationBehaviorOptions = n), o;
}
function Qv(e, t) {
  let r = new Error(`NavigationCancelingError: ${e || ""}`);
  return (r[Zv] = !0), (r.cancellationCode = t), r;
}
function YT(e) {
  return Kv(e) && Ir(e.url);
}
function Kv(e) {
  return !!e && e[Zv];
}
var QT = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵcmp = jh({
      type: t,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [fm],
      decls: 1,
      vars: 0,
      template: function (o, i) {
        o & 1 && El(0, "router-outlet");
      },
      dependencies: [GT],
      encapsulation: 2,
    }));
  let e = t;
  return e;
})();
function KT(e, t) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = Ts(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
  );
}
function jd(e) {
  let t = e.children && e.children.map(jd),
    r = t ? te(I({}, e), { children: t }) : I({}, e);
  return (
    !r.component &&
      !r.loadComponent &&
      (t || r.loadChildren) &&
      r.outlet &&
      r.outlet !== R &&
      (r.component = QT),
    r
  );
}
function Et(e) {
  return e.outlet || R;
}
function JT(e, t) {
  let r = e.filter((n) => Et(n) === t);
  return r.push(...e.filter((n) => Et(n) !== t)), r;
}
function Ro(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let t = e.parent; t; t = t.parent) {
    let r = t.routeConfig;
    if (r?._loadedInjector) return r._loadedInjector;
    if (r?._injector) return r._injector;
  }
  return null;
}
var XT = (e, t, r, n) =>
    O(
      (o) => (
        new _d(t, o.targetRouterState, o.currentRouterState, r, n).activate(e),
        o
      )
    ),
  _d = class {
    constructor(t, r, n, o, i) {
      (this.routeReuseStrategy = t),
        (this.futureState = r),
        (this.currState = n),
        (this.forwardEvent = o),
        (this.inputBindingEnabled = i);
    }
    activate(t) {
      let r = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(r, n, t),
        cd(this.futureState.root),
        this.activateChildRoutes(r, n, t);
    }
    deactivateChildRoutes(t, r, n) {
      let o = yr(r);
      t.children.forEach((i) => {
        let s = i.value.outlet;
        this.deactivateRoutes(i, o[s], n), delete o[s];
      }),
        Object.values(o).forEach((i) => {
          this.deactivateRouteAndItsChildren(i, n);
        });
    }
    deactivateRoutes(t, r, n) {
      let o = t.value,
        i = r ? r.value : null;
      if (o === i)
        if (o.component) {
          let s = n.getContext(o.outlet);
          s && this.deactivateChildRoutes(t, r, s.children);
        } else this.deactivateChildRoutes(t, r, n);
      else i && this.deactivateRouteAndItsChildren(r, n);
    }
    deactivateRouteAndItsChildren(t, r) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, r)
        : this.deactivateRouteAndOutlet(t, r);
    }
    detachAndStoreRouteSubtree(t, r) {
      let n = r.getContext(t.value.outlet),
        o = n && t.value.component ? n.children : r,
        i = yr(t);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      if (n && n.outlet) {
        let s = n.outlet.detach(),
          a = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: s,
          route: t,
          contexts: a,
        });
      }
    }
    deactivateRouteAndOutlet(t, r) {
      let n = r.getContext(t.value.outlet),
        o = n && t.value.component ? n.children : r,
        i = yr(t);
      for (let s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
      n &&
        (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
        (n.attachRef = null),
        (n.route = null));
    }
    activateChildRoutes(t, r, n) {
      let o = yr(r);
      t.children.forEach((i) => {
        this.activateRoutes(i, o[i.value.outlet], n),
          this.forwardEvent(new bd(i.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new Id(t.value.snapshot));
    }
    activateRoutes(t, r, n) {
      let o = t.value,
        i = r ? r.value : null;
      if ((cd(o), o === i))
        if (o.component) {
          let s = n.getOrCreateContext(o.outlet);
          this.activateChildRoutes(t, r, s.children);
        } else this.activateChildRoutes(t, r, n);
      else if (o.component) {
        let s = n.getOrCreateContext(o.outlet);
        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(o.snapshot);
          this.routeReuseStrategy.store(o.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            cd(a.route.value),
            this.activateChildRoutes(t, null, s.children);
        } else {
          let a = Ro(o.snapshot);
          (s.attachRef = null),
            (s.route = o),
            (s.injector = a),
            s.outlet && s.outlet.activateWith(o, s.injector),
            this.activateChildRoutes(t, null, s.children);
        }
      } else this.activateChildRoutes(t, null, n);
    }
  },
  ga = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  wr = class {
    constructor(t, r) {
      (this.component = t), (this.route = r);
    }
  };
function eS(e, t, r) {
  let n = e._root,
    o = t ? t._root : null;
  return mo(n, o, r, [n.value]);
}
function tS(e) {
  let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: e, guards: t };
}
function Mr(e, t) {
  let r = Symbol(),
    n = t.get(e, r);
  return n === r ? (typeof e == "function" && !Th(e) ? e : t.get(e)) : n;
}
function mo(
  e,
  t,
  r,
  n,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let i = yr(t);
  return (
    e.children.forEach((s) => {
      nS(s, i[s.value.outlet], r, n.concat([s.value]), o),
        delete i[s.value.outlet];
    }),
    Object.entries(i).forEach(([s, a]) => wo(a, r.getContext(s), o)),
    o
  );
}
function nS(
  e,
  t,
  r,
  n,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let i = e.value,
    s = t ? t.value : null,
    a = r ? r.getContext(e.value.outlet) : null;
  if (s && i.routeConfig === s.routeConfig) {
    let c = rS(s, i, i.routeConfig.runGuardsAndResolvers);
    c
      ? o.canActivateChecks.push(new ga(n))
      : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
      i.component ? mo(e, t, a ? a.children : null, n, o) : mo(e, t, r, n, o),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        o.canDeactivateChecks.push(new wr(a.outlet.component, s));
  } else
    s && wo(t, a, o),
      o.canActivateChecks.push(new ga(n)),
      i.component
        ? mo(e, null, a ? a.children : null, n, o)
        : mo(e, null, r, n, o);
  return o;
}
function rS(e, t, r) {
  if (typeof r == "function") return r(e, t);
  switch (r) {
    case "pathParamsChange":
      return !Nn(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Nn(e.url, t.url) || !wt(e.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !xd(e, t) || !wt(e.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !xd(e, t);
  }
}
function wo(e, t, r) {
  let n = yr(e),
    o = e.value;
  Object.entries(n).forEach(([i, s]) => {
    o.component
      ? t
        ? wo(s, t.children.getContext(i), r)
        : wo(s, null, r)
      : wo(s, t, r);
  }),
    o.component
      ? t && t.outlet && t.outlet.isActivated
        ? r.canDeactivateChecks.push(new wr(t.outlet.component, o))
        : r.canDeactivateChecks.push(new wr(null, o))
      : r.canDeactivateChecks.push(new wr(null, o));
}
function Oo(e) {
  return typeof e == "function";
}
function oS(e) {
  return typeof e == "boolean";
}
function iS(e) {
  return e && Oo(e.canLoad);
}
function sS(e) {
  return e && Oo(e.canActivate);
}
function aS(e) {
  return e && Oo(e.canActivateChild);
}
function cS(e) {
  return e && Oo(e.canDeactivate);
}
function uS(e) {
  return e && Oo(e.canMatch);
}
function Jv(e) {
  return e instanceof Ke || e?.name === "EmptyError";
}
var ra = Symbol("INITIAL_VALUE");
function br() {
  return Ce((e) =>
    _r(e.map((t) => t.pipe($e(1), li(ra)))).pipe(
      O((t) => {
        for (let r of t)
          if (r !== !0) {
            if (r === ra) return ra;
            if (r === !1 || r instanceof tn) return r;
          }
        return !0;
      }),
      pe((t) => t !== ra),
      $e(1)
    )
  );
}
function lS(e, t) {
  return Y((r) => {
    let {
      targetSnapshot: n,
      currentSnapshot: o,
      guards: { canActivateChecks: i, canDeactivateChecks: s },
    } = r;
    return s.length === 0 && i.length === 0
      ? T(te(I({}, r), { guardsResult: !0 }))
      : dS(s, n, o, e).pipe(
          Y((a) => (a && oS(a) ? fS(n, i, e, t) : T(a))),
          O((a) => te(I({}, r), { guardsResult: a }))
        );
  });
}
function dS(e, t, r, n) {
  return W(e).pipe(
    Y((o) => vS(o.component, o.route, r, t, n)),
    at((o) => o !== !0, !0)
  );
}
function fS(e, t, r, n) {
  return W(t).pipe(
    Mt((o) =>
      Ut(
        pS(o.route.parent, n),
        hS(o.route, n),
        mS(e, o.path, r),
        gS(e, o.route, r)
      )
    ),
    at((o) => o !== !0, !0)
  );
}
function hS(e, t) {
  return e !== null && t && t(new Cd(e)), T(!0);
}
function pS(e, t) {
  return e !== null && t && t(new Ed(e)), T(!0);
}
function gS(e, t, r) {
  let n = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!n || n.length === 0) return T(!0);
  let o = n.map((i) =>
    ai(() => {
      let s = Ro(t) ?? r,
        a = Mr(i, s),
        c = sS(a) ? a.canActivate(t, e) : et(s, () => a(t, e));
      return on(c).pipe(at());
    })
  );
  return T(o).pipe(br());
}
function mS(e, t, r) {
  let n = t[t.length - 1],
    i = t
      .slice(0, t.length - 1)
      .reverse()
      .map((s) => tS(s))
      .filter((s) => s !== null)
      .map((s) =>
        ai(() => {
          let a = s.guards.map((c) => {
            let u = Ro(s.node) ?? r,
              l = Mr(c, u),
              d = aS(l) ? l.canActivateChild(n, e) : et(u, () => l(n, e));
            return on(d).pipe(at());
          });
          return T(a).pipe(br());
        })
      );
  return T(i).pipe(br());
}
function vS(e, t, r, n, o) {
  let i = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!i || i.length === 0) return T(!0);
  let s = i.map((a) => {
    let c = Ro(t) ?? o,
      u = Mr(a, c),
      l = cS(u) ? u.canDeactivate(e, t, r, n) : et(c, () => u(e, t, r, n));
    return on(l).pipe(at());
  });
  return T(s).pipe(br());
}
function yS(e, t, r, n) {
  let o = t.canLoad;
  if (o === void 0 || o.length === 0) return T(!0);
  let i = o.map((s) => {
    let a = Mr(s, e),
      c = iS(a) ? a.canLoad(t, r) : et(e, () => a(t, r));
    return on(c);
  });
  return T(i).pipe(br(), Xv(n));
}
function Xv(e) {
  return Sr(
    ne((t) => {
      if (Ir(t)) throw Yv(e, t);
    }),
    O((t) => t === !0)
  );
}
function DS(e, t, r, n) {
  let o = t.canMatch;
  if (!o || o.length === 0) return T(!0);
  let i = o.map((s) => {
    let a = Mr(s, e),
      c = uS(a) ? a.canMatch(t, r) : et(e, () => a(t, r));
    return on(c);
  });
  return T(i).pipe(br(), Xv(n));
}
var xo = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  ma = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function vr(e) {
  return Un(new xo(e));
}
function wS(e) {
  return Un(new y(4e3, !1));
}
function ES(e) {
  return Un(Qv(!1, qe.GuardRejected));
}
var Nd = class {
    constructor(t, r) {
      (this.urlSerializer = t), (this.urlTree = r);
    }
    lineralizeSegments(t, r) {
      let n = [],
        o = r.root;
      for (;;) {
        if (((n = n.concat(o.segments)), o.numberOfChildren === 0)) return T(n);
        if (o.numberOfChildren > 1 || !o.children[R]) return wS(t.redirectTo);
        o = o.children[R];
      }
    }
    applyRedirectCommands(t, r, n) {
      let o = this.applyRedirectCreateUrlTree(
        r,
        this.urlSerializer.parse(r),
        t,
        n
      );
      if (r.startsWith("/")) throw new ma(o);
      return o;
    }
    applyRedirectCreateUrlTree(t, r, n, o) {
      let i = this.createSegmentGroup(t, r.root, n, o);
      return new tn(
        i,
        this.createQueryParams(r.queryParams, this.urlTree.queryParams),
        r.fragment
      );
    }
    createQueryParams(t, r) {
      let n = {};
      return (
        Object.entries(t).forEach(([o, i]) => {
          if (typeof i == "string" && i.startsWith(":")) {
            let a = i.substring(1);
            n[o] = r[a];
          } else n[o] = i;
        }),
        n
      );
    }
    createSegmentGroup(t, r, n, o) {
      let i = this.createSegments(t, r.segments, n, o),
        s = {};
      return (
        Object.entries(r.children).forEach(([a, c]) => {
          s[a] = this.createSegmentGroup(t, c, n, o);
        }),
        new H(i, s)
      );
    }
    createSegments(t, r, n, o) {
      return r.map((i) =>
        i.path.startsWith(":")
          ? this.findPosParam(t, i, o)
          : this.findOrReturn(i, n)
      );
    }
    findPosParam(t, r, n) {
      let o = n[r.path.substring(1)];
      if (!o) throw new y(4001, !1);
      return o;
    }
    findOrReturn(t, r) {
      let n = 0;
      for (let o of r) {
        if (o.path === t.path) return r.splice(n), o;
        n++;
      }
      return t;
    }
  },
  Rd = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function IS(e, t, r, n, o) {
  let i = Vd(e, t, r);
  return i.matched
    ? ((n = KT(t, n)),
      DS(n, t, r, o).pipe(O((s) => (s === !0 ? i : I({}, Rd)))))
    : T(i);
}
function Vd(e, t, r) {
  if (t.path === "**") return CS(r);
  if (t.path === "")
    return t.pathMatch === "full" && (e.hasChildren() || r.length > 0)
      ? I({}, Rd)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: r,
          parameters: {},
          positionalParamSegments: {},
        };
  let o = (t.matcher || yT)(r, e, t);
  if (!o) return I({}, Rd);
  let i = {};
  Object.entries(o.posParams ?? {}).forEach(([a, c]) => {
    i[a] = c.path;
  });
  let s =
    o.consumed.length > 0
      ? I(I({}, i), o.consumed[o.consumed.length - 1].parameters)
      : i;
  return {
    matched: !0,
    consumedSegments: o.consumed,
    remainingSegments: r.slice(o.consumed.length),
    parameters: s,
    positionalParamSegments: o.posParams ?? {},
  };
}
function CS(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? Rv(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function Sv(e, t, r, n) {
  return r.length > 0 && TS(e, r, n)
    ? {
        segmentGroup: new H(t, MS(n, new H(r, e.children))),
        slicedSegments: [],
      }
    : r.length === 0 && SS(e, r, n)
    ? {
        segmentGroup: new H(e.segments, bS(e, r, n, e.children)),
        slicedSegments: r,
      }
    : { segmentGroup: new H(e.segments, e.children), slicedSegments: r };
}
function bS(e, t, r, n) {
  let o = {};
  for (let i of r)
    if (wa(e, t, i) && !n[Et(i)]) {
      let s = new H([], {});
      o[Et(i)] = s;
    }
  return I(I({}, n), o);
}
function MS(e, t) {
  let r = {};
  r[R] = t;
  for (let n of e)
    if (n.path === "" && Et(n) !== R) {
      let o = new H([], {});
      r[Et(n)] = o;
    }
  return r;
}
function TS(e, t, r) {
  return r.some((n) => wa(e, t, n) && Et(n) !== R);
}
function SS(e, t, r) {
  return r.some((n) => wa(e, t, n));
}
function wa(e, t, r) {
  return (e.hasChildren() || t.length > 0) && r.pathMatch === "full"
    ? !1
    : r.path === "";
}
function xS(e, t, r, n) {
  return Et(e) !== n && (n === R || !wa(t, r, e)) ? !1 : Vd(t, e, r).matched;
}
function AS(e, t, r) {
  return t.length === 0 && !e.children[r];
}
var Od = class {};
function _S(e, t, r, n, o, i, s = "emptyOnly") {
  return new Pd(e, t, r, n, o, s, i).recognize();
}
var NS = 31,
  Pd = class {
    constructor(t, r, n, o, i, s, a) {
      (this.injector = t),
        (this.configLoader = r),
        (this.rootComponentType = n),
        (this.config = o),
        (this.urlTree = i),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new Nd(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new y(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = Sv(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        O((r) => {
          let n = new To(
              [],
              Object.freeze({}),
              Object.freeze(I({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              R,
              this.rootComponentType,
              null,
              {}
            ),
            o = new Ve(n, r),
            i = new pa("", o),
            s = LT(n, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (i.url = this.urlSerializer.serialize(s)),
            this.inheritParamsAndData(i._root, null),
            { state: i, tree: s }
          );
        })
      );
    }
    match(t) {
      return this.processSegmentGroup(this.injector, this.config, t, R).pipe(
        bt((n) => {
          if (n instanceof ma)
            return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
          throw n instanceof xo ? this.noMatchError(n) : n;
        })
      );
    }
    inheritParamsAndData(t, r) {
      let n = t.value,
        o = kd(n, r, this.paramsInheritanceStrategy);
      (n.params = Object.freeze(o.params)),
        (n.data = Object.freeze(o.data)),
        t.children.forEach((i) => this.inheritParamsAndData(i, n));
    }
    processSegmentGroup(t, r, n, o) {
      return n.segments.length === 0 && n.hasChildren()
        ? this.processChildren(t, r, n)
        : this.processSegment(t, r, n, n.segments, o, !0).pipe(
            O((i) => (i instanceof Ve ? [i] : []))
          );
    }
    processChildren(t, r, n) {
      let o = [];
      for (let i of Object.keys(n.children))
        i === "primary" ? o.unshift(i) : o.push(i);
      return W(o).pipe(
        Mt((i) => {
          let s = n.children[i],
            a = JT(r, i);
          return this.processSegmentGroup(t, a, s, i);
        }),
        $a((i, s) => (i.push(...s), i)),
        Bt(null),
        Va(),
        Y((i) => {
          if (i === null) return vr(n);
          let s = ey(i);
          return RS(s), T(s);
        })
      );
    }
    processSegment(t, r, n, o, i, s) {
      return W(r).pipe(
        Mt((a) =>
          this.processSegmentAgainstRoute(
            a._injector ?? t,
            r,
            a,
            n,
            o,
            i,
            s
          ).pipe(
            bt((c) => {
              if (c instanceof xo) return T(null);
              throw c;
            })
          )
        ),
        at((a) => !!a),
        bt((a) => {
          if (Jv(a)) return AS(n, o, i) ? T(new Od()) : vr(n);
          throw a;
        })
      );
    }
    processSegmentAgainstRoute(t, r, n, o, i, s, a) {
      return xS(n, o, i, s)
        ? n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, o, n, i, s)
          : this.allowRedirects && a
          ? this.expandSegmentAgainstRouteUsingRedirect(t, o, r, n, i, s)
          : vr(o)
        : vr(o);
    }
    expandSegmentAgainstRouteUsingRedirect(t, r, n, o, i, s) {
      let {
        matched: a,
        consumedSegments: c,
        positionalParamSegments: u,
        remainingSegments: l,
      } = Vd(r, o, i);
      if (!a) return vr(r);
      o.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > NS && (this.allowRedirects = !1));
      let d = this.applyRedirects.applyRedirectCommands(c, o.redirectTo, u);
      return this.applyRedirects
        .lineralizeSegments(o, d)
        .pipe(Y((f) => this.processSegment(t, n, r, f.concat(l), s, !1)));
    }
    matchSegmentAgainstRoute(t, r, n, o, i) {
      let s = IS(r, n, o, t, this.urlSerializer);
      return (
        n.path === "**" && (r.children = {}),
        s.pipe(
          Ce((a) =>
            a.matched
              ? ((t = n._injector ?? t),
                this.getChildConfig(t, n, o).pipe(
                  Ce(({ routes: c }) => {
                    let u = n._loadedInjector ?? t,
                      {
                        consumedSegments: l,
                        remainingSegments: d,
                        parameters: f,
                      } = a,
                      h = new To(
                        l,
                        f,
                        Object.freeze(I({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        PS(n),
                        Et(n),
                        n.component ?? n._loadedComponent ?? null,
                        n,
                        FS(n)
                      ),
                      { segmentGroup: p, slicedSegments: D } = Sv(r, l, d, c);
                    if (D.length === 0 && p.hasChildren())
                      return this.processChildren(u, c, p).pipe(
                        O((m) => (m === null ? null : new Ve(h, m)))
                      );
                    if (c.length === 0 && D.length === 0)
                      return T(new Ve(h, []));
                    let v = Et(n) === i;
                    return this.processSegment(u, c, p, D, v ? R : i, !0).pipe(
                      O((m) => new Ve(h, m instanceof Ve ? [m] : []))
                    );
                  })
                ))
              : vr(r)
          )
        )
      );
    }
    getChildConfig(t, r, n) {
      return r.children
        ? T({ routes: r.children, injector: t })
        : r.loadChildren
        ? r._loadedRoutes !== void 0
          ? T({ routes: r._loadedRoutes, injector: r._loadedInjector })
          : yS(t, r, n, this.urlSerializer).pipe(
              Y((o) =>
                o
                  ? this.configLoader.loadChildren(t, r).pipe(
                      ne((i) => {
                        (r._loadedRoutes = i.routes),
                          (r._loadedInjector = i.injector);
                      })
                    )
                  : ES(r)
              )
            )
        : T({ routes: [], injector: t });
    }
  };
function RS(e) {
  e.sort((t, r) =>
    t.value.outlet === R
      ? -1
      : r.value.outlet === R
      ? 1
      : t.value.outlet.localeCompare(r.value.outlet)
  );
}
function OS(e) {
  let t = e.value.routeConfig;
  return t && t.path === "";
}
function ey(e) {
  let t = [],
    r = new Set();
  for (let n of e) {
    if (!OS(n)) {
      t.push(n);
      continue;
    }
    let o = t.find((i) => n.value.routeConfig === i.value.routeConfig);
    o !== void 0 ? (o.children.push(...n.children), r.add(o)) : t.push(n);
  }
  for (let n of r) {
    let o = ey(n.children);
    t.push(new Ve(n.value, o));
  }
  return t.filter((n) => !r.has(n));
}
function PS(e) {
  return e.data || {};
}
function FS(e) {
  return e.resolve || {};
}
function kS(e, t, r, n, o, i) {
  return Y((s) =>
    _S(e, t, r, n, s.extractedUrl, o, i).pipe(
      O(({ state: a, tree: c }) =>
        te(I({}, s), { targetSnapshot: a, urlAfterRedirects: c })
      )
    )
  );
}
function LS(e, t) {
  return Y((r) => {
    let {
      targetSnapshot: n,
      guards: { canActivateChecks: o },
    } = r;
    if (!o.length) return T(r);
    let i = new Set(o.map((c) => c.route)),
      s = new Set();
    for (let c of i) if (!s.has(c)) for (let u of ty(c)) s.add(u);
    let a = 0;
    return W(s).pipe(
      Mt((c) =>
        i.has(c)
          ? jS(c, n, e, t)
          : ((c.data = kd(c, c.parent, e).resolve), T(void 0))
      ),
      ne(() => a++),
      Bn(1),
      Y((c) => (a === s.size ? T(r) : xe))
    );
  });
}
function ty(e) {
  let t = e.children.map((r) => ty(r)).flat();
  return [e, ...t];
}
function jS(e, t, r, n) {
  let o = e.routeConfig,
    i = e._resolve;
  return (
    o?.title !== void 0 && !qv(o) && (i[Ao] = o.title),
    VS(i, e, t, n).pipe(
      O(
        (s) => (
          (e._resolvedData = s), (e.data = kd(e, e.parent, r).resolve), null
        )
      )
    )
  );
}
function VS(e, t, r, n) {
  let o = dd(e);
  if (o.length === 0) return T({});
  let i = {};
  return W(o).pipe(
    Y((s) =>
      $S(e[s], t, r, n).pipe(
        at(),
        ne((a) => {
          i[s] = a;
        })
      )
    ),
    Bn(1),
    Rr(i),
    bt((s) => (Jv(s) ? xe : Un(s)))
  );
}
function $S(e, t, r, n) {
  let o = Ro(t) ?? n,
    i = Mr(e, o),
    s = i.resolve ? i.resolve(t, r) : et(o, () => i(t, r));
  return on(s);
}
function ud(e) {
  return Ce((t) => {
    let r = e(t);
    return r ? W(r).pipe(O(() => t)) : T(t);
  });
}
var ny = (() => {
    let t = class t {
      buildTitle(n) {
        let o,
          i = n.root;
        for (; i !== void 0; )
          (o = this.getResolvedTitleForRoute(i) ?? o),
            (i = i.children.find((s) => s.outlet === R));
        return o;
      }
      getResolvedTitleForRoute(n) {
        return n.data[Ao];
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(US), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  US = (() => {
    let t = class t extends ny {
      constructor(n) {
        super(), (this.title = n);
      }
      updateTitle(n) {
        let o = this.buildTitle(n);
        o !== void 0 && this.title.setTitle(o);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(Ev));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Po = new E("", { providedIn: "root", factory: () => ({}) }),
  va = new E(""),
  $d = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = g(xs));
      }
      loadComponent(n) {
        if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
        if (n._loadedComponent) return T(n._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(n);
        let o = on(n.loadComponent()).pipe(
            O(ry),
            ne((s) => {
              this.onLoadEndListener && this.onLoadEndListener(n),
                (n._loadedComponent = s);
            }),
            Ht(() => {
              this.componentLoaders.delete(n);
            })
          ),
          i = new Ln(o, () => new ae()).pipe(kn());
        return this.componentLoaders.set(n, i), i;
      }
      loadChildren(n, o) {
        if (this.childrenLoaders.get(o)) return this.childrenLoaders.get(o);
        if (o._loadedRoutes)
          return T({ routes: o._loadedRoutes, injector: o._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(o);
        let s = BS(o, this.compiler, n, this.onLoadEndListener).pipe(
            Ht(() => {
              this.childrenLoaders.delete(o);
            })
          ),
          a = new Ln(s, () => new ae()).pipe(kn());
        return this.childrenLoaders.set(o, a), a;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function BS(e, t, r, n) {
  return on(e.loadChildren()).pipe(
    O(ry),
    Y((o) =>
      o instanceof Wr || Array.isArray(o) ? T(o) : W(t.compileModuleAsync(o))
    ),
    O((o) => {
      n && n(e);
      let i,
        s,
        a = !1;
      return (
        Array.isArray(o)
          ? ((s = o), (a = !0))
          : ((i = o.create(r).injector),
            (s = i.get(va, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(jd), injector: i }
      );
    })
  );
}
function HS(e) {
  return e && typeof e == "object" && "default" in e;
}
function ry(e) {
  return HS(e) ? e.default : e;
}
var Ud = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(zS), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  zS = (() => {
    let t = class t {
      shouldProcessUrl(n) {
        return !0;
      }
      extract(n) {
        return n;
      }
      merge(n, o) {
        return n;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  oy = new E(""),
  iy = new E("");
function GS(e, t, r) {
  let n = e.get(iy),
    o = e.get(le);
  return e.get(B).runOutsideAngular(() => {
    if (!o.startViewTransition || n.skipNextTransition)
      return (n.skipNextTransition = !1), Promise.resolve();
    let i,
      s = new Promise((u) => {
        i = u;
      }),
      a = o.startViewTransition(() => (i(), WS(e))),
      { onViewTransitionCreated: c } = n;
    return c && et(e, () => c({ transition: a, from: t, to: r })), s;
  });
}
function WS(e) {
  return new Promise((t) => {
    dl(t, { injector: e });
  });
}
var Bd = (() => {
  let t = class t {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new ae()),
        (this.transitionAbortSubject = new ae()),
        (this.configLoader = g($d)),
        (this.environmentInjector = g(we)),
        (this.urlSerializer = g(_o)),
        (this.rootContexts = g(No)),
        (this.location = g(gr)),
        (this.inputBindingEnabled = g(Da, { optional: !0 }) !== null),
        (this.titleStrategy = g(ny)),
        (this.options = g(Po, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = g(Ud)),
        (this.createViewTransition = g(oy, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => T(void 0)),
        (this.rootComponentType = null);
      let n = (i) => this.events.next(new Dd(i)),
        o = (i) => this.events.next(new wd(i));
      (this.configLoader.onLoadEndListener = o),
        (this.configLoader.onLoadStartListener = n);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(n) {
      let o = ++this.navigationId;
      this.transitions?.next(
        te(I(I({}, this.transitions.value), n), { id: o })
      );
    }
    setupNavigations(n, o, i) {
      return (
        (this.transitions = new he({
          id: 0,
          currentUrlTree: o,
          currentRawUrl: o,
          extractedUrl: this.urlHandlingStrategy.extract(o),
          urlAfterRedirects: this.urlHandlingStrategy.extract(o),
          rawUrl: o,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: Do,
          restoredState: null,
          currentSnapshot: i.snapshot,
          targetSnapshot: null,
          currentRouterState: i,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          pe((s) => s.id !== 0),
          O((s) =>
            te(I({}, s), {
              extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl),
            })
          ),
          Ce((s) => {
            this.currentTransition = s;
            let a = !1,
              c = !1;
            return T(s).pipe(
              ne((u) => {
                this.currentNavigation = {
                  id: u.id,
                  initialUrl: u.rawUrl,
                  extractedUrl: u.extractedUrl,
                  trigger: u.source,
                  extras: u.extras,
                  previousNavigation: this.lastSuccessfulNavigation
                    ? te(I({}, this.lastSuccessfulNavigation), {
                        previousNavigation: null,
                      })
                    : null,
                };
              }),
              Ce((u) => {
                let l =
                    !n.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  d = u.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                if (!l && d !== "reload") {
                  let f = "";
                  return (
                    this.events.next(
                      new rn(
                        u.id,
                        this.urlSerializer.serialize(u.rawUrl),
                        f,
                        ua.IgnoredSameUrlNavigation
                      )
                    ),
                    u.resolve(null),
                    xe
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(u.rawUrl))
                  return T(u).pipe(
                    Ce((f) => {
                      let h = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new Cr(
                            f.id,
                            this.urlSerializer.serialize(f.extractedUrl),
                            f.source,
                            f.restoredState
                          )
                        ),
                        h !== this.transitions?.getValue()
                          ? xe
                          : Promise.resolve(f)
                      );
                    }),
                    kS(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      n.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy
                    ),
                    ne((f) => {
                      (s.targetSnapshot = f.targetSnapshot),
                        (s.urlAfterRedirects = f.urlAfterRedirects),
                        (this.currentNavigation = te(
                          I({}, this.currentNavigation),
                          { finalUrl: f.urlAfterRedirects }
                        ));
                      let h = new la(
                        f.id,
                        this.urlSerializer.serialize(f.extractedUrl),
                        this.urlSerializer.serialize(f.urlAfterRedirects),
                        f.targetSnapshot
                      );
                      this.events.next(h);
                    })
                  );
                if (
                  l &&
                  this.urlHandlingStrategy.shouldProcessUrl(u.currentRawUrl)
                ) {
                  let {
                      id: f,
                      extractedUrl: h,
                      source: p,
                      restoredState: D,
                      extras: v,
                    } = u,
                    m = new Cr(f, this.urlSerializer.serialize(h), p, D);
                  this.events.next(m);
                  let j = Gv(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = s =
                      te(I({}, u), {
                        targetSnapshot: j,
                        urlAfterRedirects: h,
                        extras: te(I({}, v), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = h),
                    T(s)
                  );
                } else {
                  let f = "";
                  return (
                    this.events.next(
                      new rn(
                        u.id,
                        this.urlSerializer.serialize(u.extractedUrl),
                        f,
                        ua.IgnoredByUrlHandlingStrategy
                      )
                    ),
                    u.resolve(null),
                    xe
                  );
                }
              }),
              ne((u) => {
                let l = new gd(
                  u.id,
                  this.urlSerializer.serialize(u.extractedUrl),
                  this.urlSerializer.serialize(u.urlAfterRedirects),
                  u.targetSnapshot
                );
                this.events.next(l);
              }),
              O(
                (u) => (
                  (this.currentTransition = s =
                    te(I({}, u), {
                      guards: eS(
                        u.targetSnapshot,
                        u.currentSnapshot,
                        this.rootContexts
                      ),
                    })),
                  s
                )
              ),
              lS(this.environmentInjector, (u) => this.events.next(u)),
              ne((u) => {
                if (((s.guardsResult = u.guardsResult), Ir(u.guardsResult)))
                  throw Yv(this.urlSerializer, u.guardsResult);
                let l = new md(
                  u.id,
                  this.urlSerializer.serialize(u.extractedUrl),
                  this.urlSerializer.serialize(u.urlAfterRedirects),
                  u.targetSnapshot,
                  !!u.guardsResult
                );
                this.events.next(l);
              }),
              pe((u) =>
                u.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(u, "", qe.GuardRejected),
                    !1)
              ),
              ud((u) => {
                if (u.guards.canActivateChecks.length)
                  return T(u).pipe(
                    ne((l) => {
                      let d = new vd(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot
                      );
                      this.events.next(d);
                    }),
                    Ce((l) => {
                      let d = !1;
                      return T(l).pipe(
                        LS(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector
                        ),
                        ne({
                          next: () => (d = !0),
                          complete: () => {
                            d ||
                              this.cancelNavigationTransition(
                                l,
                                "",
                                qe.NoDataFromResolver
                              );
                          },
                        })
                      );
                    }),
                    ne((l) => {
                      let d = new yd(
                        l.id,
                        this.urlSerializer.serialize(l.extractedUrl),
                        this.urlSerializer.serialize(l.urlAfterRedirects),
                        l.targetSnapshot
                      );
                      this.events.next(d);
                    })
                  );
              }),
              ud((u) => {
                let l = (d) => {
                  let f = [];
                  d.routeConfig?.loadComponent &&
                    !d.routeConfig._loadedComponent &&
                    f.push(
                      this.configLoader.loadComponent(d.routeConfig).pipe(
                        ne((h) => {
                          d.component = h;
                        }),
                        O(() => {})
                      )
                    );
                  for (let h of d.children) f.push(...l(h));
                  return f;
                };
                return _r(l(u.targetSnapshot.root)).pipe(Bt(null), $e(1));
              }),
              ud(() => this.afterPreactivation()),
              Ce(() => {
                let { currentSnapshot: u, targetSnapshot: l } = s,
                  d = this.createViewTransition?.(
                    this.environmentInjector,
                    u.root,
                    l.root
                  );
                return d ? W(d).pipe(O(() => s)) : T(s);
              }),
              O((u) => {
                let l = WT(
                  n.routeReuseStrategy,
                  u.targetSnapshot,
                  u.currentRouterState
                );
                return (
                  (this.currentTransition = s =
                    te(I({}, u), { targetRouterState: l })),
                  (this.currentNavigation.targetRouterState = l),
                  s
                );
              }),
              ne(() => {
                this.events.next(new bo());
              }),
              XT(
                this.rootContexts,
                n.routeReuseStrategy,
                (u) => this.events.next(u),
                this.inputBindingEnabled
              ),
              $e(1),
              ne({
                next: (u) => {
                  (a = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new ot(
                        u.id,
                        this.urlSerializer.serialize(u.extractedUrl),
                        this.urlSerializer.serialize(u.urlAfterRedirects)
                      )
                    ),
                    this.titleStrategy?.updateTitle(
                      u.targetRouterState.snapshot
                    ),
                    u.resolve(!0);
                },
                complete: () => {
                  a = !0;
                },
              }),
              Ha(
                this.transitionAbortSubject.pipe(
                  ne((u) => {
                    throw u;
                  })
                )
              ),
              Ht(() => {
                !a &&
                  !c &&
                  this.cancelNavigationTransition(
                    s,
                    "",
                    qe.SupersededByNewNavigation
                  ),
                  this.currentNavigation?.id === s.id &&
                    (this.currentNavigation = null);
              }),
              bt((u) => {
                if (((c = !0), Kv(u)))
                  this.events.next(
                    new nn(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      u.message,
                      u.cancellationCode
                    )
                  ),
                    YT(u) ? this.events.next(new Mo(u.url)) : s.resolve(!1);
                else {
                  this.events.next(
                    new Co(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      u,
                      s.targetSnapshot ?? void 0
                    )
                  );
                  try {
                    s.resolve(n.errorHandler(u));
                  } catch (l) {
                    this.options.resolveNavigationPromiseOnError
                      ? s.resolve(!1)
                      : s.reject(l);
                  }
                }
                return xe;
              })
            );
          })
        )
      );
    }
    cancelNavigationTransition(n, o, i) {
      let s = new nn(n.id, this.urlSerializer.serialize(n.extractedUrl), o, i);
      this.events.next(s), n.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let e = t;
  return e;
})();
function qS(e) {
  return e !== Do;
}
var ZS = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(YS), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  Fd = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, r) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, r) {
      return t.routeConfig === r.routeConfig;
    }
  },
  YS = (() => {
    let t = class t extends Fd {};
    (t.ɵfac = (() => {
      let n;
      return function (i) {
        return (n || (n = Vu(t)))(i || t);
      };
    })()),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  sy = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: () => g(QS), providedIn: "root" }));
    let e = t;
    return e;
  })(),
  QS = (() => {
    let t = class t extends sy {
      constructor() {
        super(...arguments),
          (this.location = g(gr)),
          (this.urlSerializer = g(_o)),
          (this.options = g(Po, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = g(Ud)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new tn()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Gv(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(n) {
        return this.location.subscribe((o) => {
          o.type === "popstate" && n(o.url, o.state);
        });
      }
      handleRouterEvent(n, o) {
        if (n instanceof Cr) this.stateMemento = this.createStateMemento();
        else if (n instanceof rn) this.rawUrlTree = o.initialUrl;
        else if (n instanceof la) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !o.extras.skipLocationChange
          ) {
            let i = this.urlHandlingStrategy.merge(o.finalUrl, o.initialUrl);
            this.setBrowserUrl(i, o);
          }
        } else
          n instanceof bo
            ? ((this.currentUrlTree = o.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                o.finalUrl,
                o.initialUrl
              )),
              (this.routerState = o.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (o.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, o)))
            : n instanceof nn &&
              (n.code === qe.GuardRejected || n.code === qe.NoDataFromResolver)
            ? this.restoreHistory(o)
            : n instanceof Co
            ? this.restoreHistory(o, !0)
            : n instanceof ot &&
              ((this.lastSuccessfulId = n.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(n, o) {
        let i = this.urlSerializer.serialize(n);
        if (this.location.isCurrentPathEqualTo(i) || o.extras.replaceUrl) {
          let s = this.browserPageId,
            a = I(I({}, o.extras.state), this.generateNgRouterState(o.id, s));
          this.location.replaceState(i, "", a);
        } else {
          let s = I(
            I({}, o.extras.state),
            this.generateNgRouterState(o.id, this.browserPageId + 1)
          );
          this.location.go(i, "", s);
        }
      }
      restoreHistory(n, o = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let i = this.browserPageId,
            s = this.currentPageId - i;
          s !== 0
            ? this.location.historyGo(s)
            : this.currentUrlTree === n.finalUrl &&
              s === 0 &&
              (this.resetState(n), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (o && this.resetState(n), this.resetUrlToCurrentUrlTree());
      }
      resetState(n) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            n.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(n, o) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: n, ɵrouterPageId: o }
          : { navigationId: n };
      }
    };
    (t.ɵfac = (() => {
      let n;
      return function (i) {
        return (n || (n = Vu(t)))(i || t);
      };
    })()),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  vo = (function (e) {
    return (
      (e[(e.COMPLETE = 0)] = "COMPLETE"),
      (e[(e.FAILED = 1)] = "FAILED"),
      (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
      e
    );
  })(vo || {});
function ay(e, t) {
  e.events
    .pipe(
      pe(
        (r) =>
          r instanceof ot ||
          r instanceof nn ||
          r instanceof Co ||
          r instanceof rn
      ),
      O((r) =>
        r instanceof ot || r instanceof rn
          ? vo.COMPLETE
          : (
              r instanceof nn
                ? r.code === qe.Redirect ||
                  r.code === qe.SupersededByNewNavigation
                : !1
            )
          ? vo.REDIRECTING
          : vo.FAILED
      ),
      pe((r) => r !== vo.REDIRECTING),
      $e(1)
    )
    .subscribe(() => {
      t();
    });
}
function KS(e) {
  throw e;
}
var JS = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  XS = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  jt = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = g(Ss)),
          (this.stateManager = g(sy)),
          (this.options = g(Po, { optional: !0 }) || {}),
          (this.pendingTasks = g(Tn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = g(Bd)),
          (this.urlSerializer = g(_o)),
          (this.location = g(gr)),
          (this.urlHandlingStrategy = g(Ud)),
          (this._events = new ae()),
          (this.errorHandler = this.options.errorHandler || KS),
          (this.navigated = !1),
          (this.routeReuseStrategy = g(ZS)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = g(va, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!g(Da, { optional: !0 })),
          (this.eventsSubscription = new J()),
          (this.isNgZoneEnabled = g(B) instanceof B && B.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (n) => {
                this.console.warn(n);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let n = this.navigationTransitions.events.subscribe((o) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              s = this.navigationTransitions.currentNavigation;
            if (i !== null && s !== null) {
              if (
                (this.stateManager.handleRouterEvent(o, s),
                o instanceof nn &&
                  o.code !== qe.Redirect &&
                  o.code !== qe.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (o instanceof ot) this.navigated = !0;
              else if (o instanceof Mo) {
                let a = this.urlHandlingStrategy.merge(o.url, i.currentRawUrl),
                  c = {
                    info: i.extras.info,
                    skipLocationChange: i.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || qS(i.source),
                  };
                this.scheduleNavigation(a, Do, null, c, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            tx(o) && this._events.next(o);
          } catch (i) {
            this.navigationTransitions.transitionAbortSubject.next(i);
          }
        });
        this.eventsSubscription.add(n);
      }
      resetRootComponentType(n) {
        (this.routerState.root.component = n),
          (this.navigationTransitions.rootComponentType = n);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Do,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (n, o) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(n, "popstate", o);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(n, o, i) {
        let s = { replaceUrl: !0 },
          a = i?.navigationId ? i : null;
        if (i) {
          let u = I({}, i);
          delete u.navigationId,
            delete u.ɵrouterPageId,
            Object.keys(u).length !== 0 && (s.state = u);
        }
        let c = this.parseUrl(n);
        this.scheduleNavigation(c, o, a, s);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(n) {
        (this.config = n.map(jd)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(n, o = {}) {
        let {
            relativeTo: i,
            queryParams: s,
            fragment: a,
            queryParamsHandling: c,
            preserveFragment: u,
          } = o,
          l = u ? this.currentUrlTree.fragment : a,
          d = null;
        switch (c) {
          case "merge":
            d = I(I({}, this.currentUrlTree.queryParams), s);
            break;
          case "preserve":
            d = this.currentUrlTree.queryParams;
            break;
          default:
            d = s || null;
        }
        d !== null && (d = this.removeEmptyProps(d));
        let f;
        try {
          let h = i ? i.snapshot : this.routerState.snapshot.root;
          f = Uv(h);
        } catch {
          (typeof n[0] != "string" || !n[0].startsWith("/")) && (n = []),
            (f = this.currentUrlTree.root);
        }
        return Bv(f, n, d, l ?? null);
      }
      navigateByUrl(n, o = { skipLocationChange: !1 }) {
        let i = Ir(n) ? n : this.parseUrl(n),
          s = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(s, Do, null, o);
      }
      navigate(n, o = { skipLocationChange: !1 }) {
        return ex(n), this.navigateByUrl(this.createUrlTree(n, o), o);
      }
      serializeUrl(n) {
        return this.urlSerializer.serialize(n);
      }
      parseUrl(n) {
        try {
          return this.urlSerializer.parse(n);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(n, o) {
        let i;
        if (
          (o === !0 ? (i = I({}, JS)) : o === !1 ? (i = I({}, XS)) : (i = o),
          Ir(n))
        )
          return Iv(this.currentUrlTree, n, i);
        let s = this.parseUrl(n);
        return Iv(this.currentUrlTree, s, i);
      }
      removeEmptyProps(n) {
        return Object.entries(n).reduce(
          (o, [i, s]) => (s != null && (o[i] = s), o),
          {}
        );
      }
      scheduleNavigation(n, o, i, s, a) {
        if (this.disposed) return Promise.resolve(!1);
        let c, u, l;
        a
          ? ((c = a.resolve), (u = a.reject), (l = a.promise))
          : (l = new Promise((f, h) => {
              (c = f), (u = h);
            }));
        let d = this.pendingTasks.add();
        return (
          ay(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(d));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: o,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: n,
            extras: s,
            resolve: c,
            reject: u,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          l.catch((f) => Promise.reject(f))
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })();
function ex(e) {
  for (let t = 0; t < e.length; t++) if (e[t] == null) throw new y(4008, !1);
}
function tx(e) {
  return !(e instanceof bo) && !(e instanceof Mo);
}
var xv = (() => {
    let t = class t {
      constructor(n, o, i, s, a, c) {
        (this.router = n),
          (this.route = o),
          (this.tabIndexAttribute = i),
          (this.renderer = s),
          (this.el = a),
          (this.locationStrategy = c),
          (this.href = null),
          (this.commands = null),
          (this.onChanges = new ae()),
          (this.preserveFragment = !1),
          (this.skipLocationChange = !1),
          (this.replaceUrl = !1);
        let u = a.nativeElement.tagName?.toLowerCase();
        (this.isAnchorElement = u === "a" || u === "area"),
          this.isAnchorElement
            ? (this.subscription = n.events.subscribe((l) => {
                l instanceof ot && this.updateHref();
              }))
            : this.setTabIndexIfNotOnNativeEl("0");
      }
      setTabIndexIfNotOnNativeEl(n) {
        this.tabIndexAttribute != null ||
          this.isAnchorElement ||
          this.applyAttributeValue("tabindex", n);
      }
      ngOnChanges(n) {
        this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
      }
      set routerLink(n) {
        n != null
          ? ((this.commands = Array.isArray(n) ? n : [n]),
            this.setTabIndexIfNotOnNativeEl("0"))
          : ((this.commands = null), this.setTabIndexIfNotOnNativeEl(null));
      }
      onClick(n, o, i, s, a) {
        let c = this.urlTree;
        if (
          c === null ||
          (this.isAnchorElement &&
            (n !== 0 ||
              o ||
              i ||
              s ||
              a ||
              (typeof this.target == "string" && this.target != "_self")))
        )
          return !0;
        let u = {
          skipLocationChange: this.skipLocationChange,
          replaceUrl: this.replaceUrl,
          state: this.state,
          info: this.info,
        };
        return this.router.navigateByUrl(c, u), !this.isAnchorElement;
      }
      ngOnDestroy() {
        this.subscription?.unsubscribe();
      }
      updateHref() {
        let n = this.urlTree;
        this.href =
          n !== null && this.locationStrategy
            ? this.locationStrategy?.prepareExternalUrl(
                this.router.serializeUrl(n)
              )
            : null;
        let o =
          this.href === null
            ? null
            : Xp(
                this.href,
                this.el.nativeElement.tagName.toLowerCase(),
                "href"
              );
        this.applyAttributeValue("href", o);
      }
      applyAttributeValue(n, o) {
        let i = this.renderer,
          s = this.el.nativeElement;
        o !== null ? i.setAttribute(s, n, o) : i.removeAttribute(s, n);
      }
      get urlTree() {
        return this.commands === null
          ? null
          : this.router.createUrlTree(this.commands, {
              relativeTo:
                this.relativeTo !== void 0 ? this.relativeTo : this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: this.preserveFragment,
            });
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(jt), L(Rn), $u("tabindex"), L(Kt), L(Ge), L(Lt));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "routerLink", ""]],
        hostVars: 1,
        hostBindings: function (o, i) {
          o & 1 &&
            Cl("click", function (a) {
              return i.onClick(
                a.button,
                a.ctrlKey,
                a.shiftKey,
                a.altKey,
                a.metaKey
              );
            }),
            o & 2 && vl("target", i.target);
        },
        inputs: {
          target: "target",
          queryParams: "queryParams",
          fragment: "fragment",
          queryParamsHandling: "queryParamsHandling",
          state: "state",
          info: "info",
          relativeTo: "relativeTo",
          preserveFragment: [
            ce.HasDecoratorInputTransform,
            "preserveFragment",
            "preserveFragment",
            Xt,
          ],
          skipLocationChange: [
            ce.HasDecoratorInputTransform,
            "skipLocationChange",
            "skipLocationChange",
            Xt,
          ],
          replaceUrl: [
            ce.HasDecoratorInputTransform,
            "replaceUrl",
            "replaceUrl",
            Xt,
          ],
          routerLink: "routerLink",
        },
        standalone: !0,
        features: [Es, Yt],
      }));
    let e = t;
    return e;
  })(),
  jL = (() => {
    let t = class t {
      get isActive() {
        return this._isActive;
      }
      constructor(n, o, i, s, a) {
        (this.router = n),
          (this.element = o),
          (this.renderer = i),
          (this.cdr = s),
          (this.link = a),
          (this.classes = []),
          (this._isActive = !1),
          (this.routerLinkActiveOptions = { exact: !1 }),
          (this.isActiveChange = new ge()),
          (this.routerEventsSubscription = n.events.subscribe((c) => {
            c instanceof ot && this.update();
          }));
      }
      ngAfterContentInit() {
        T(this.links.changes, T(null))
          .pipe(st())
          .subscribe((n) => {
            this.update(), this.subscribeToEachLinkOnChanges();
          });
      }
      subscribeToEachLinkOnChanges() {
        this.linkInputChangesSubscription?.unsubscribe();
        let n = [...this.links.toArray(), this.link]
          .filter((o) => !!o)
          .map((o) => o.onChanges);
        this.linkInputChangesSubscription = W(n)
          .pipe(st())
          .subscribe((o) => {
            this._isActive !== this.isLinkActive(this.router)(o) &&
              this.update();
          });
      }
      set routerLinkActive(n) {
        let o = Array.isArray(n) ? n : n.split(" ");
        this.classes = o.filter((i) => !!i);
      }
      ngOnChanges(n) {
        this.update();
      }
      ngOnDestroy() {
        this.routerEventsSubscription.unsubscribe(),
          this.linkInputChangesSubscription?.unsubscribe();
      }
      update() {
        !this.links ||
          !this.router.navigated ||
          queueMicrotask(() => {
            let n = this.hasActiveLinks();
            this._isActive !== n &&
              ((this._isActive = n),
              this.cdr.markForCheck(),
              this.classes.forEach((o) => {
                n
                  ? this.renderer.addClass(this.element.nativeElement, o)
                  : this.renderer.removeClass(this.element.nativeElement, o);
              }),
              n && this.ariaCurrentWhenActive !== void 0
                ? this.renderer.setAttribute(
                    this.element.nativeElement,
                    "aria-current",
                    this.ariaCurrentWhenActive.toString()
                  )
                : this.renderer.removeAttribute(
                    this.element.nativeElement,
                    "aria-current"
                  ),
              this.isActiveChange.emit(n));
          });
      }
      isLinkActive(n) {
        let o = nx(this.routerLinkActiveOptions)
          ? this.routerLinkActiveOptions
          : this.routerLinkActiveOptions.exact || !1;
        return (i) => {
          let s = i.urlTree;
          return s ? n.isActive(s, o) : !1;
        };
      }
      hasActiveLinks() {
        let n = this.isLinkActive(this.router);
        return (this.link && n(this.link)) || this.links.some(n);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(L(jt), L(Ge), L(Kt), L(dr), L(xv, 8));
    }),
      (t.ɵdir = Fe({
        type: t,
        selectors: [["", "routerLinkActive", ""]],
        contentQueries: function (o, i, s) {
          if ((o & 1 && am(s, xv, 5), o & 2)) {
            let a;
            cm((a = um())) && (i.links = a);
          }
        },
        inputs: {
          routerLinkActiveOptions: "routerLinkActiveOptions",
          ariaCurrentWhenActive: "ariaCurrentWhenActive",
          routerLinkActive: "routerLinkActive",
        },
        outputs: { isActiveChange: "isActiveChange" },
        exportAs: ["routerLinkActive"],
        standalone: !0,
        features: [Yt],
      }));
    let e = t;
    return e;
  })();
function nx(e) {
  return !!e.paths;
}
var ya = class {};
var rx = (() => {
    let t = class t {
      constructor(n, o, i, s, a) {
        (this.router = n),
          (this.injector = i),
          (this.preloadingStrategy = s),
          (this.loader = a);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            pe((n) => n instanceof ot),
            Mt(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(n, o) {
        let i = [];
        for (let s of o) {
          s.providers &&
            !s._injector &&
            (s._injector = Ts(s.providers, n, `Route: ${s.path}`));
          let a = s._injector ?? n,
            c = s._loadedInjector ?? a;
          ((s.loadChildren && !s._loadedRoutes && s.canLoad === void 0) ||
            (s.loadComponent && !s._loadedComponent)) &&
            i.push(this.preloadConfig(a, s)),
            (s.children || s._loadedRoutes) &&
              i.push(this.processRoutes(c, s.children ?? s._loadedRoutes));
        }
        return W(i).pipe(st());
      }
      preloadConfig(n, o) {
        return this.preloadingStrategy.preload(o, () => {
          let i;
          o.loadChildren && o.canLoad === void 0
            ? (i = this.loader.loadChildren(n, o))
            : (i = T(null));
          let s = i.pipe(
            Y((a) =>
              a === null
                ? T(void 0)
                : ((o._loadedRoutes = a.routes),
                  (o._loadedInjector = a.injector),
                  this.processRoutes(a.injector ?? n, a.routes))
            )
          );
          if (o.loadComponent && !o._loadedComponent) {
            let a = this.loader.loadComponent(o);
            return W([s, a]).pipe(st());
          } else return s;
        });
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(jt), C(xs), C(we), C(ya), C($d));
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let e = t;
    return e;
  })(),
  cy = new E(""),
  ox = (() => {
    let t = class t {
      constructor(n, o, i, s, a = {}) {
        (this.urlSerializer = n),
          (this.transitions = o),
          (this.viewportScroller = i),
          (this.zone = s),
          (this.options = a),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (a.scrollPositionRestoration ||= "disabled"),
          (a.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof Cr
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = n.navigationTrigger),
              (this.restoredId = n.restoredState
                ? n.restoredState.navigationId
                : 0))
            : n instanceof ot
            ? ((this.lastId = n.id),
              this.scheduleScrollEvent(
                n,
                this.urlSerializer.parse(n.urlAfterRedirects).fragment
              ))
            : n instanceof rn &&
              n.code === ua.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                n,
                this.urlSerializer.parse(n.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((n) => {
          n instanceof da &&
            (n.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(n.position)
              : n.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(n.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(n, o) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.zone.run(() => {
              this.transitions.events.next(
                new da(
                  n,
                  this.lastSource === "popstate"
                    ? this.store[this.restoredId]
                    : null,
                  o
                )
              );
            });
          }, 0);
        });
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (o) {
      cg();
    }),
      (t.ɵprov = w({ token: t, factory: t.ɵfac }));
    let e = t;
    return e;
  })();
function ix(e) {
  return e.routerState.root;
}
function Fo(e, t) {
  return { ɵkind: e, ɵproviders: t };
}
function sx() {
  let e = g(ze);
  return (t) => {
    let r = e.get(Sn);
    if (t !== r.components[0]) return;
    let n = e.get(jt),
      o = e.get(uy);
    e.get(Hd) === 1 && n.initialNavigation(),
      e.get(ly, null, F.Optional)?.setUpPreloading(),
      e.get(cy, null, F.Optional)?.init(),
      n.resetRootComponentType(r.componentTypes[0]),
      o.closed || (o.next(), o.complete(), o.unsubscribe());
  };
}
var uy = new E("", { factory: () => new ae() }),
  Hd = new E("", { providedIn: "root", factory: () => 1 });
function ax() {
  return Fo(2, [
    { provide: Hd, useValue: 0 },
    {
      provide: Ns,
      multi: !0,
      deps: [ze],
      useFactory: (t) => {
        let r = t.get(jm, Promise.resolve());
        return () =>
          r.then(
            () =>
              new Promise((n) => {
                let o = t.get(jt),
                  i = t.get(uy);
                ay(o, () => {
                  n(!0);
                }),
                  (t.get(Bd).afterPreactivation = () => (
                    n(!0), i.closed ? T(void 0) : i
                  )),
                  o.initialNavigation();
              })
          );
      },
    },
  ]);
}
function cx() {
  return Fo(3, [
    {
      provide: Ns,
      multi: !0,
      useFactory: () => {
        let t = g(jt);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: Hd, useValue: 2 },
  ]);
}
var ly = new E("");
function ux(e) {
  return Fo(0, [
    { provide: ly, useExisting: rx },
    { provide: ya, useExisting: e },
  ]);
}
function lx() {
  return Fo(8, [Tv, { provide: Da, useExisting: Tv }]);
}
function dx(e) {
  let t = [
    { provide: oy, useValue: GS },
    {
      provide: iy,
      useValue: I({ skipNextTransition: !!e?.skipInitialTransition }, e),
    },
  ];
  return Fo(9, t);
}
var Av = new E("ROUTER_FORROOT_GUARD"),
  fx = [
    gr,
    { provide: _o, useClass: Eo },
    jt,
    No,
    { provide: Rn, useFactory: ix, deps: [jt] },
    $d,
    [],
  ],
  VL = (() => {
    let t = class t {
      constructor(n) {}
      static forRoot(n, o) {
        return {
          ngModule: t,
          providers: [
            fx,
            [],
            { provide: va, multi: !0, useValue: n },
            { provide: Av, useFactory: mx, deps: [[jt, new eo(), new is()]] },
            { provide: Po, useValue: o || {} },
            o?.useHash ? px() : gx(),
            hx(),
            o?.preloadingStrategy ? ux(o.preloadingStrategy).ɵproviders : [],
            o?.initialNavigation ? vx(o) : [],
            o?.bindToComponentInputs ? lx().ɵproviders : [],
            o?.enableViewTransitions ? dx().ɵproviders : [],
            yx(),
          ],
        };
      }
      static forChild(n) {
        return {
          ngModule: t,
          providers: [{ provide: va, multi: !0, useValue: n }],
        };
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(C(Av, 8));
    }),
      (t.ɵmod = vt({ type: t })),
      (t.ɵinj = mt({}));
    let e = t;
    return e;
  })();
function hx() {
  return {
    provide: cy,
    useFactory: () => {
      let e = g(qm),
        t = g(B),
        r = g(Po),
        n = g(Bd),
        o = g(_o);
      return (
        r.scrollOffset && e.setOffset(r.scrollOffset), new ox(o, n, e, t, r)
      );
    },
  };
}
function px() {
  return { provide: Lt, useClass: $m };
}
function gx() {
  return { provide: Lt, useClass: Hl };
}
function mx(e) {
  return "guarded";
}
function vx(e) {
  return [
    e.initialNavigation === "disabled" ? cx().ɵproviders : [],
    e.initialNavigation === "enabledBlocking" ? ax().ɵproviders : [],
  ];
}
var _v = new E("");
function yx() {
  return [
    { provide: _v, useFactory: sx },
    { provide: Rs, multi: !0, useExisting: _v },
  ];
}
export {
  J as a,
  Sr as b,
  P as c,
  ae as d,
  he as e,
  xe as f,
  e_ as g,
  W as h,
  T as i,
  Un as j,
  Ay as k,
  Ny as l,
  O as m,
  _r as n,
  Y as o,
  Ut as p,
  ai as q,
  $y as r,
  ka as s,
  Nr as t,
  qy as u,
  pe as v,
  Yy as w,
  Ky as x,
  bt as y,
  Jy as z,
  bf as A,
  $e as B,
  Rr as C,
  Xy as D,
  Tf as E,
  Ht as F,
  at as G,
  Ba as H,
  nD as I,
  rD as J,
  li as K,
  Ce as L,
  Ha as M,
  oD as N,
  ne as O,
  y as P,
  Ch as Q,
  w as R,
  mt as S,
  E as T,
  C as U,
  g as V,
  ce as W,
  jh as X,
  vt as Y,
  Fe as Z,
  Ki as _,
  Yt as $,
  kk as aa,
  Lk as ba,
  jk as ca,
  Vk as da,
  Vu as ea,
  $u as fa,
  eo as ga,
  is as ha,
  ss as ia,
  ze as ja,
  cs as ka,
  tt as la,
  $k as ma,
  Gu as na,
  nt as oa,
  Uk as pa,
  qE as qa,
  ZE as ra,
  Nc as sa,
  ps as ta,
  Ge as ua,
  zr as va,
  Kt as wa,
  gt as xa,
  Bk as ya,
  L as za,
  cg as Aa,
  dr as Ba,
  ge as Ca,
  B as Da,
  pC as Ea,
  Es as Fa,
  Dt as Ga,
  Ui as Ha,
  Gk as Ia,
  Wk as Ja,
  qk as Ka,
  Zk as La,
  vl as Ma,
  lb as Na,
  Dl as Oa,
  db as Pa,
  Yk as Qa,
  Qk as Ra,
  Kk as Sa,
  Jk as Ta,
  Xk as Ua,
  e1 as Va,
  t1 as Wa,
  n1 as Xa,
  Qg as Ya,
  Kg as Za,
  El as _a,
  Jg as $a,
  Xg as ab,
  Sb as bb,
  r1 as cb,
  Ab as db,
  _b as eb,
  hr as fb,
  Cl as gb,
  Lb as hb,
  o1 as ib,
  i1 as jb,
  s1 as kb,
  $b as lb,
  nm as mb,
  lu as nb,
  qt as ob,
  am as pb,
  c1 as qb,
  cm as rb,
  um as sb,
  u1 as tb,
  l1 as ub,
  Xb as vb,
  lm as wb,
  e0 as xb,
  d1 as yb,
  fm as zb,
  f1 as Ab,
  h1 as Bb,
  p1 as Cb,
  g1 as Db,
  m1 as Eb,
  v1 as Fb,
  y1 as Gb,
  D1 as Hb,
  Ns as Ib,
  Sn as Jb,
  io as Kb,
  w1 as Lb,
  Xt as Mb,
  Sl as Nb,
  xn as Ob,
  le as Pb,
  Lt as Qb,
  $m as Rb,
  gr as Sb,
  F1 as Tb,
  k1 as Ub,
  L1 as Vb,
  j1 as Wb,
  lM as Xb,
  V1 as Yb,
  $1 as Zb,
  U1 as _b,
  B1 as $b,
  H1 as ac,
  z1 as bc,
  Wm as cc,
  DM as dc,
  Ws as ec,
  G1 as fc,
  An as gc,
  en as hc,
  Km as ic,
  Zl as jc,
  jM as kc,
  av as lc,
  iL as mc,
  sL as nc,
  pv as oc,
  DL as pc,
  wL as qc,
  gT as rc,
  Rn as sc,
  GT as tc,
  jt as uc,
  xv as vc,
  jL as wc,
  VL as xc,
};
