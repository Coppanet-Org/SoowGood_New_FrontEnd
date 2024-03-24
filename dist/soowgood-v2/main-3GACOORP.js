import {
  a as tr,
  b as ir,
  c as nr,
  d as Me,
  e as Si,
} from "./chunk-PUKYV4E7.js";
import { b as cr } from "./chunk-OJYXUISO.js";
import { a as Rt } from "./chunk-VGPMK4LM.js";
import { a as yr, b as vr, c as br, d as xr } from "./chunk-SAS3FUYG.js";
import { a as gr } from "./chunk-K7BE7XRD.js";
import { a as wr } from "./chunk-AHLHTMOM.js";
import { a as zt } from "./chunk-PWAO2R5Y.js";
import { d as Er } from "./chunk-VLBZHMG7.js";
import { a as _r } from "./chunk-K6SFV5Q2.js";
import { a as Sr } from "./chunk-SPBVGZO6.js";
import "./chunk-FVULMH5T.js";
import "./chunk-XCW56EU2.js";
import { a as dr, b as hr } from "./chunk-NJZYVABX.js";
import { a as Tr } from "./chunk-W4ZBBNGU.js";
import "./chunk-DJNKJFRI.js";
import { b as Cr } from "./chunk-TTHUJNPP.js";
import "./chunk-7NGZH4SF.js";
import "./chunk-F6S7Z6QR.js";
import "./chunk-EQCB2C7E.js";
import { a as Ze } from "./chunk-DIK5M47G.js";
import "./chunk-Y7H6PHVG.js";
import "./chunk-IBQVX35S.js";
import { a as or, b as sr, c as Ye, d as ar } from "./chunk-XTINLLUJ.js";
import "./chunk-46JTLTO3.js";
import "./chunk-YTSUX7O2.js";
import {
  L as wi,
  Y as M,
  Z as be,
  ba as rr,
  ca as Ci,
  ia as Xe,
  ja as Ei,
  ka as Lt,
} from "./chunk-4DRUEFLH.js";
import {
  A as ue,
  a as lr,
  l as mr,
  n as pr,
  q as ur,
  t as Ft,
  u as fr,
  y as Je,
} from "./chunk-GEVSPATW.js";
import { a as se } from "./chunk-7LPMGZKA.js";
import {
  B as Un,
  D as At,
  E as lt,
  F as ct,
  G as Kn,
  H as Dt,
  I as Gn,
  J as $n,
  K as bi,
  L as We,
  M as Qn,
  O as Ot,
  P as It,
  Q as Nt,
  R as Wn,
  S as xi,
  T as Xn,
  U as Yn,
  V as Zn,
  X as Jn,
  Y as er,
  Z as _i,
  c as Mt,
  e as vi,
  h as Ge,
  i as $e,
  k as zn,
  m as Bn,
  n as Qe,
  r as kt,
  u as Pt,
  v as jn,
  w as qn,
  x as Vn,
  y as Hn,
} from "./chunk-N3UDIXRD.js";
import {
  B as hi,
  Ba as wn,
  Da as Cn,
  F as yn,
  Ha as D,
  Hb as Mn,
  Ia as ot,
  Ja as st,
  Ka as at,
  Kb as kn,
  L as qe,
  Ma as E,
  O as Ve,
  Oa as En,
  Ob as yi,
  P,
  Pb as Pn,
  Qa as Ue,
  Qb as An,
  R as le,
  S as B,
  Sa as _e,
  Ta as Tn,
  U as j,
  Ub as Dn,
  V as He,
  Va as St,
  Vb as Et,
  Wa as wt,
  Wb as Te,
  X as w,
  Xa as l,
  Y as q,
  Ya as c,
  Z as vn,
  Za as u,
  aa as ie,
  b as hn,
  ba as ne,
  bb as ce,
  ca as G,
  cc as oe,
  da as re,
  fb as N,
  fc as ve,
  gc as On,
  h as rt,
  hb as O,
  i as fi,
  ja as bn,
  k as gn,
  kc as In,
  lc as Nn,
  m as je,
  ma as gi,
  nc as Ln,
  oc as Fn,
  pc as Rn,
  qa as xn,
  qc as Tt,
  r as _t,
  sa as _n,
  tb as m,
  tc as Ke,
  ub as de,
  uc as H,
  v as Ee,
  va as Sn,
  vb as me,
  vc as $,
  wb as Ct,
  xc as pe,
  ya as g,
  za as x,
} from "./chunk-TXQBTV46.js";
import {
  a as K,
  b as xt,
  c as fn,
  f as ui,
  g as Oe,
} from "./chunk-5G567QLT.js";
var Ti = {};
function kr({ cultureNameLocaleFileMap: n = {}, errorHandlerFn: e = zo } = {}) {
  return (t) => {
    Ti = K(K({}, Zn), n);
    let i = `/locales/${Ti[t] || t}`;
    return new Promise((r, o) =>
      import(`@angular/common${i}`)
        .then((s) => {
          let a = s;
          for (; a.default; ) a = a.default;
          r({ default: a });
        })
        .catch((s) => {
          e({ resolve: r, reject: o, error: s, locale: t });
        })
    );
  };
}
var Mr = {};
function zo(t) {
  return Oe(this, arguments, function* ({ locale: n, resolve: e }) {
    if (Mr[n]) {
      e({ default: Mr[Ti[n] || n] });
      return;
    }
    kn() &&
      console.error(
        `Cannot find the ${n} locale file. You can check how can add new culture at https://docs.abp.io/en/abp/latest/UI/Angular/Localization#adding-a-new-culture`
      ),
      e();
  });
}
var Ar = Mi;
function Mi(n, e) {
  return n === e || (n !== n && e !== e)
    ? !0
    : {}.toString.call(n) != {}.toString.call(e) || n !== Object(n) || !n
    ? !1
    : Array.isArray(n)
    ? Pr(n, e)
    : {}.toString.call(n) == "[object Set]"
    ? Pr(Array.from(n), Array.from(e))
    : {}.toString.call(n) == "[object Object]"
    ? jo(n, e)
    : Bo(n, e);
}
function Bo(n, e) {
  return n.toString() === e.toString();
}
function Pr(n, e) {
  var t = n.length;
  if (t != e.length) return !1;
  for (var i = !0, r = 0; r < t; r++)
    if (!Mi(n[r], e[r])) {
      i = !1;
      break;
    }
  return i;
}
function jo(n, e) {
  var t = Object.keys(n).sort(),
    i = Object.keys(e).sort(),
    r = t.length;
  if (r != i.length) return !1;
  for (var o = 0; o < r; o++) {
    var s = t[o],
      a = i[o];
    if (!(s == a && Mi(n[s], e[a]))) return !1;
  }
  return !0;
}
var ki = localStorage;
function dt(n = ki) {
  [
    "access_token",
    "id_token",
    "refresh_token",
    "nonce",
    "PKCE_verifier",
    "expires_at",
    "id_token_claims_obj",
    "id_token_expires_at",
    "id_token_stored_at",
    "access_token_stored_at",
    "granted_scopes",
    "session_state",
  ].forEach((t) => n.removeItem(t));
}
var jt = class {
  constructor(e) {
    (this.injector = e),
      (this.catchError = (t) => (
        this.httpErrorReporter.reportError(t), fi(null)
      )),
      (this.httpErrorReporter = e.get(Qn)),
      (this.environment = e.get(We)),
      (this.configState = e.get(Ot)),
      (this.oAuthService = e.get(Me)),
      (this.sessionState = e.get(Nt)),
      (this.localStorageService = e.get(It)),
      (this.oAuthConfig = this.environment.getEnvironment().oAuthConfig || {}),
      (this.tenantKey = e.get(xi)),
      (this.router = e.get(H)),
      this.listenToOauthErrors();
  }
  init() {
    return Oe(this, null, function* () {
      return (
        this.oAuthConfig.clientId &&
          qo(this.oAuthConfig.clientId, ki) &&
          dt(ki),
        this.oAuthService.configure(this.oAuthConfig),
        this.oAuthService.events
          .pipe(Ee((e) => e.type === "token_refresh_error"))
          .subscribe(() => this.navigateToLogin()),
        this.navigateToPreviousUrl(),
        this.oAuthService
          .loadDiscoveryDocument()
          .then(() =>
            this.oAuthService.hasValidAccessToken() ||
            !this.oAuthService.getRefreshToken()
              ? Promise.resolve()
              : this.refreshToken()
          )
          .catch(this.catchError)
      );
    });
  }
  navigateToPreviousUrl() {
    let { responseType: e } = this.oAuthConfig;
    e === "code" &&
      this.oAuthService.events
        .pipe(
          Ee((t) => t.type === "token_received" && !!this.oAuthService.state),
          hi(1),
          je(() => {
            let t = decodeURIComponent(this.oAuthService.state);
            return t && t !== "/" ? t : "/";
          }),
          qe((t) =>
            this.configState.getOne$("currentUser").pipe(
              Ee((i) => !!i?.isAuthenticated),
              Ve(() => this.router.navigate([t]))
            )
          )
        )
        .subscribe();
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => dt());
  }
  listenToOauthErrors() {
    this.oAuthService.events
      .pipe(
        Ee((e) => e instanceof nr),
        Ve(() => dt()),
        qe(() => this.configState.refreshAppState())
      )
      .subscribe();
  }
};
function qo(n, e) {
  let t = "abpOAuthClientId";
  if (!e.getItem(t)) return e.setItem(t, n), !1;
  let i = e.getItem(t) !== n;
  return i && e.setItem(t, n), i;
}
var Pi = class n extends jt {
    constructor() {
      super(...arguments), (this.isInternalAuth = !1);
    }
    init() {
      return Oe(this, null, function* () {
        return ui(n.prototype, this, "init")
          .call(this)
          .then(() => this.oAuthService.tryLogin().catch(bi))
          .then(() =>
            this.oAuthService.setupAutomaticSilentRefresh({}, "access_token")
          );
      });
    }
    navigateToLogin(e) {
      let t = "";
      e?.returnUrl && (t = e.returnUrl);
      let i = this.getCultureParams(e);
      this.oAuthService.initCodeFlow(t, i);
    }
    checkIfInternalAuth(e) {
      return this.oAuthService.initCodeFlow("", this.getCultureParams(e)), !1;
    }
    logout(e) {
      return rt(
        this.oAuthService.revokeTokenAndLogout(this.getCultureParams(e))
      );
    }
    login(e) {
      return (
        this.oAuthService.initCodeFlow("", this.getCultureParams(e)), fi(null)
      );
    }
    getCultureParams(e) {
      let t = this.sessionState.getLanguage();
      return K(K({}, t && { culture: t, "ui-culture": t }), e);
    }
  },
  Or = "rememberMe",
  Ir = "passwordFlow",
  Nr = function (n, e) {
    let t = e.get(Ot),
      i = e.get(H),
      r = e.get(It);
    return hn(
      qe(() => t.refreshAppState()),
      Ve(() => {
        Vo(n.rememberMe, r), n.redirectUrl && i.navigate([n.redirectUrl]);
      })
    );
  };
function Vo(n, e) {
  Bt(e),
    e.setItem(Ir, "true"),
    (document.cookie = `${Or}=true; path=/${
      n ? " ;expires=Fri, 31 Dec 9999 23:59:59 GMT" : ""
    }`);
}
function Bt(n) {
  n.removeItem(Ir),
    (document.cookie =
      Or + "= ; path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT");
}
function Ho(n) {
  let e = document.cookie.match(new RegExp("(^| )" + n + "=([^;]+)"));
  return e ? e[2] : "";
}
var Ai = class n extends jt {
    constructor() {
      super(...arguments),
        (this.isInternalAuth = !0),
        (this.cookieKey = "rememberMe"),
        (this.storageKey = "passwordFlow");
    }
    listenToTokenExpiration() {
      this.oAuthService.events
        .pipe(
          Ee(
            (e) =>
              e instanceof ir &&
              e.type === "token_expires" &&
              e.info === "access_token"
          )
        )
        .subscribe(() => {
          this.oAuthService.getRefreshToken()
            ? this.refreshToken()
            : (this.oAuthService.logOut(),
              Bt(this.localStorageService),
              this.configState.refreshAppState().subscribe());
        });
    }
    init() {
      return Oe(this, null, function* () {
        return (
          !Ho(this.cookieKey) &&
            localStorage.getItem(this.storageKey) &&
            this.oAuthService.logOut(),
          ui(n.prototype, this, "init")
            .call(this)
            .then(() => this.listenToTokenExpiration())
        );
      });
    }
    navigateToLogin(e) {
      return this.injector
        .get(H)
        .navigate(["/account/login"], { queryParams: e });
    }
    checkIfInternalAuth() {
      return !0;
    }
    login(e) {
      let t = this.sessionState.getTenant();
      return rt(
        this.oAuthService.fetchTokenUsingPasswordFlow(
          e.username,
          e.password,
          new On(K({}, t && t.id && { [this.tenantKey]: t.id }))
        )
      ).pipe(Nr(e, this.injector));
    }
    logout() {
      let e = this.injector.get(H);
      return rt(this.oAuthService.revokeTokenAndLogout(!0)).pipe(
        qe(() => this.configState.refreshAppState()),
        Ve(() => {
          e.navigateByUrl("/"), Bt(this.localStorageService);
        })
      );
    }
    refreshToken() {
      return this.oAuthService.refreshToken().catch(() => {
        dt(), Bt(this.localStorageService);
      });
    }
  },
  Dr = {
    Code(n) {
      return new Pi(n);
    },
    Password(n) {
      return new Ai(n);
    },
  },
  Uo = (() => {
    class n {
      constructor(t) {
        (this.injector = t), (this.oAuthService = this.injector.get(Me));
      }
      get isInternalAuth() {
        return this.strategy.isInternalAuth;
      }
      init() {
        return Oe(this, null, function* () {
          let i = this.injector
            .get(We)
            .getEnvironment$()
            .pipe(
              je((r) => r?.oAuthConfig),
              Ee(Boolean),
              Ve((r) => {
                this.strategy =
                  r.responseType === "code"
                    ? Dr.Code(this.injector)
                    : Dr.Password(this.injector);
              }),
              qe(() => rt(this.strategy.init())),
              hi(1)
            );
          return yield gn(i);
        });
      }
      logout(t) {
        return this.strategy.logout(t);
      }
      navigateToLogin(t) {
        this.strategy.navigateToLogin(t);
      }
      login(t) {
        return this.strategy.login(t);
      }
      get isAuthenticated() {
        return this.oAuthService.hasValidAccessToken();
      }
      loginUsingGrant(t, i, r) {
        let { clientId: o, dummyClientSecret: s } = this.oAuthService,
          a = this.oAuthService.getAccessToken(),
          d = K({ access_token: a, grant_type: t, client_id: o }, i);
        return (
          s && (d.client_secret = s),
          this.oAuthService.fetchTokenUsingGrant(t, d, r)
        );
      }
    }
    return (
      (n.ɵfac = function (t) {
        return new (t || n)(j(bn));
      }),
      (n.ɵprov = le({ token: n, factory: n.ɵfac, providedIn: "root" })),
      n
    );
  })(),
  Ko = (() => {
    class n {
      constructor(t, i, r) {
        (this.oAuthService = t),
          (this.environmentService = i),
          (this.options = r),
          this.listenToSetEnvironment();
      }
      listenToSetEnvironment() {
        this.environmentService
          .createOnUpdateStream((t) => t)
          .pipe(
            je((t) => t.oAuthConfig),
            Ee((t) => !Ar(t, this.options.environment.oAuthConfig))
          )
          .subscribe((t) => {
            this.oAuthService.configure(t);
          });
      }
    }
    return (
      (n.ɵfac = function (t) {
        return new (t || n)(j(Me), j(We), j(Gn));
      }),
      (n.ɵprov = le({ token: n, factory: n.ɵfac, providedIn: "root" })),
      n
    );
  })(),
  Go = (() => {
    class n {
      constructor(t, i, r, o) {
        (this.oAuthService = t),
          (this.sessionState = i),
          (this.httpWaitService = r),
          (this.tenantKey = o);
      }
      intercept(t, i) {
        this.httpWaitService.addRequest(t);
        let o = t.context?.get($n)
          ? t
          : t.clone({ setHeaders: this.getAdditionalHeaders(t.headers) });
        return i
          .handle(o)
          .pipe(yn(() => this.httpWaitService.deleteRequest(t)));
      }
      getAdditionalHeaders(t) {
        let i = {},
          r = this.oAuthService.getAccessToken();
        !t?.has("Authorization") && r && (i.Authorization = `Bearer ${r}`);
        let o = this.sessionState.getLanguage();
        !t?.has("Accept-Language") && o && (i["Accept-Language"] = o);
        let s = this.sessionState.getTenant();
        return (
          !t?.has(this.tenantKey) && s?.id && (i[this.tenantKey] = s.id),
          (i["X-Requested-With"] = "XMLHttpRequest"),
          i
        );
      }
    }
    return (
      (n.ɵfac = function (t) {
        return new (t || n)(j(Me), j(Nt), j(Jn), j(xi));
      }),
      (n.ɵprov = le({ token: n, factory: n.ɵfac, providedIn: "root" })),
      n
    );
  })(),
  $o = (() => {
    class n {
      constructor(t, i) {
        (this.oauthService = t), (this.authService = i);
      }
      canActivate(t, i) {
        if (this.oauthService.hasValidAccessToken()) return !0;
        let o = { returnUrl: i.url };
        return this.authService.navigateToLogin(o), !1;
      }
    }
    return (
      (n.ɵfac = function (t) {
        return new (t || n)(j(Me), j(Dt));
      }),
      (n.ɵprov = le({ token: n, factory: n.ɵfac, providedIn: "root" })),
      n
    );
  })(),
  Qo = {
    provide: Wn,
    useFactory: () => {
      let n = He(We);
      return () => {
        let e = n.getEnvironment();
        if (!e.oAuthConfig) {
          console.warn("The oAuthConfig env is missing on environment.ts");
          return;
        }
        let { issuer: t } = e.oAuthConfig,
          i = t.endsWith("/") ? t : `${t}/`;
        window.open(
          `${i}Account/Manage?returnUrl=${window.location.href}`,
          "_self"
        );
      };
    },
  };
var Wo = function (n) {
    let e = n.get(Ot);
    n.get(Me).hasValidAccessToken() && !e.getDeep("currentUser.id") && dt();
  },
  Lr = (() => {
    class n {
      static forRoot() {
        return {
          ngModule: n,
          providers: [
            { provide: Dt, useClass: Uo },
            { provide: Kn, useClass: $o },
            { provide: _i, useClass: Go },
            { provide: Xn, useValue: Nr },
            { provide: Yn, useValue: Wo },
            { provide: Nn, useExisting: _i, multi: !0 },
            Qo,
            { provide: Mn, multi: !0, deps: [Ko], useFactory: bi },
            Si.forRoot().providers,
            { provide: tr, useClass: It },
          ],
        };
      }
    }
    return (
      (n.ɵfac = function (t) {
        return new (t || n)();
      }),
      (n.ɵmod = q({ type: n })),
      (n.ɵinj = B({ imports: [oe, Si] })),
      n
    );
  })();
function Fr(n) {
  return new P(3e3, !1);
}
function Xo() {
  return new P(3100, !1);
}
function Yo() {
  return new P(3101, !1);
}
function Zo(n) {
  return new P(3001, !1);
}
function Jo(n) {
  return new P(3003, !1);
}
function es(n) {
  return new P(3004, !1);
}
function ts(n, e) {
  return new P(3005, !1);
}
function is() {
  return new P(3006, !1);
}
function ns() {
  return new P(3007, !1);
}
function rs(n, e) {
  return new P(3008, !1);
}
function os(n) {
  return new P(3002, !1);
}
function ss(n, e, t, i, r) {
  return new P(3010, !1);
}
function as() {
  return new P(3011, !1);
}
function ls() {
  return new P(3012, !1);
}
function cs() {
  return new P(3200, !1);
}
function ds() {
  return new P(3202, !1);
}
function ms() {
  return new P(3013, !1);
}
function ps(n) {
  return new P(3014, !1);
}
function us(n) {
  return new P(3015, !1);
}
function fs(n) {
  return new P(3016, !1);
}
function hs(n, e) {
  return new P(3404, !1);
}
function gs(n) {
  return new P(3502, !1);
}
function ys(n) {
  return new P(3503, !1);
}
function vs() {
  return new P(3300, !1);
}
function bs(n) {
  return new P(3504, !1);
}
function xs(n) {
  return new P(3301, !1);
}
function _s(n, e) {
  return new P(3302, !1);
}
function Ss(n) {
  return new P(3303, !1);
}
function ws(n, e) {
  return new P(3400, !1);
}
function Cs(n) {
  return new P(3401, !1);
}
function Es(n) {
  return new P(3402, !1);
}
function Ts(n, e) {
  return new P(3505, !1);
}
function ke(n) {
  switch (n.length) {
    case 0:
      return new Xe();
    case 1:
      return n[0];
    default:
      return new Ei(n);
  }
}
function Xr(n, e, t = new Map(), i = new Map()) {
  let r = [],
    o = [],
    s = -1,
    a = null;
  if (
    (e.forEach((d) => {
      let p = d.get("offset"),
        f = p == s,
        h = (f && a) || new Map();
      d.forEach((T, C) => {
        let v = C,
          S = T;
        if (C !== "offset")
          switch (((v = n.normalizePropertyName(v, r)), S)) {
            case Lt:
              S = t.get(C);
              break;
            case be:
              S = i.get(C);
              break;
            default:
              S = n.normalizeStyleValue(C, v, S, r);
              break;
          }
        h.set(v, S);
      }),
        f || o.push(h),
        (a = h),
        (s = p);
    }),
    r.length)
  )
    throw gs(r);
  return o;
}
function Ji(n, e, t, i) {
  switch (e) {
    case "start":
      n.onStart(() => i(t && Di(t, "start", n)));
      break;
    case "done":
      n.onDone(() => i(t && Di(t, "done", n)));
      break;
    case "destroy":
      n.onDestroy(() => i(t && Di(t, "destroy", n)));
      break;
  }
}
function Di(n, e, t) {
  let i = t.totalTime,
    r = !!t.disabled,
    o = en(
      n.element,
      n.triggerName,
      n.fromState,
      n.toState,
      e || n.phaseName,
      i ?? n.totalTime,
      r
    ),
    s = n._data;
  return s != null && (o._data = s), o;
}
function en(n, e, t, i, r = "", o = 0, s) {
  return {
    element: n,
    triggerName: e,
    fromState: t,
    toState: i,
    phaseName: r,
    totalTime: o,
    disabled: !!s,
  };
}
function J(n, e, t) {
  let i = n.get(e);
  return i || n.set(e, (i = t)), i;
}
function Rr(n) {
  let e = n.indexOf(":"),
    t = n.substring(1, e),
    i = n.slice(e + 1);
  return [t, i];
}
var Ms = typeof document > "u" ? null : document.documentElement;
function tn(n) {
  let e = n.parentNode || n.host || null;
  return e === Ms ? null : e;
}
function ks(n) {
  return n.substring(1, 6) == "ebkit";
}
var Ie = null,
  zr = !1;
function Ps(n) {
  Ie ||
    ((Ie = As() || {}), (zr = Ie.style ? "WebkitAppearance" in Ie.style : !1));
  let e = !0;
  return (
    Ie.style &&
      !ks(n) &&
      ((e = n in Ie.style),
      !e &&
        zr &&
        (e = "Webkit" + n.charAt(0).toUpperCase() + n.slice(1) in Ie.style)),
    e
  );
}
function As() {
  return typeof document < "u" ? document.body : null;
}
function Yr(n, e) {
  for (; e; ) {
    if (e === n) return !0;
    e = tn(e);
  }
  return !1;
}
function Zr(n, e, t) {
  if (t) return Array.from(n.querySelectorAll(e));
  let i = n.querySelector(e);
  return i ? [i] : [];
}
var nn = (() => {
    let e = class e {
      validateStyleProperty(i) {
        return Ps(i);
      }
      matchesElement(i, r) {
        return !1;
      }
      containsElement(i, r) {
        return Yr(i, r);
      }
      getParentElement(i) {
        return tn(i);
      }
      query(i, r, o) {
        return Zr(i, r, o);
      }
      computeStyle(i, r, o) {
        return o || "";
      }
      animate(i, r, o, s, a, d = [], p) {
        return new Xe(o, s);
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵprov = le({ token: e, factory: e.ɵfac }));
    let n = e;
    return n;
  })(),
  an = class an {};
an.NOOP = new nn();
var Fe = an,
  Re = class {};
var Ds = 1e3,
  Jr = "{{",
  Os = "}}",
  eo = "ng-enter",
  Ri = "ng-leave",
  qt = "ng-trigger",
  Gt = ".ng-trigger",
  Br = "ng-animating",
  zi = ".ng-animating";
function Se(n) {
  if (typeof n == "number") return n;
  let e = n.match(/^(-?[\.\d]+)(m?s)/);
  return !e || e.length < 2 ? 0 : Bi(parseFloat(e[1]), e[2]);
}
function Bi(n, e) {
  switch (e) {
    case "s":
      return n * Ds;
    default:
      return n;
  }
}
function $t(n, e, t) {
  return n.hasOwnProperty("duration") ? n : Is(n, e, t);
}
function Is(n, e, t) {
  let i =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    r,
    o = 0,
    s = "";
  if (typeof n == "string") {
    let a = n.match(i);
    if (a === null) return e.push(Fr(n)), { duration: 0, delay: 0, easing: "" };
    r = Bi(parseFloat(a[1]), a[2]);
    let d = a[3];
    d != null && (o = Bi(parseFloat(d), a[4]));
    let p = a[5];
    p && (s = p);
  } else r = n;
  if (!t) {
    let a = !1,
      d = e.length;
    r < 0 && (e.push(Xo()), (a = !0)),
      o < 0 && (e.push(Yo()), (a = !0)),
      a && e.splice(d, 0, Fr(n));
  }
  return { duration: r, delay: o, easing: s };
}
function Ns(n) {
  return n.length
    ? n[0] instanceof Map
      ? n
      : n.map((e) => new Map(Object.entries(e)))
    : [];
}
function xe(n, e, t) {
  e.forEach((i, r) => {
    let o = rn(r);
    t && !t.has(r) && t.set(r, n.style[o]), (n.style[o] = i);
  });
}
function Le(n, e) {
  e.forEach((t, i) => {
    let r = rn(i);
    n.style[r] = "";
  });
}
function mt(n) {
  return Array.isArray(n) ? (n.length == 1 ? n[0] : rr(n)) : n;
}
function Ls(n, e, t) {
  let i = e.params || {},
    r = to(n);
  r.length &&
    r.forEach((o) => {
      i.hasOwnProperty(o) || t.push(Zo(o));
    });
}
var ji = new RegExp(`${Jr}\\s*(.+?)\\s*${Os}`, "g");
function to(n) {
  let e = [];
  if (typeof n == "string") {
    let t;
    for (; (t = ji.exec(n)); ) e.push(t[1]);
    ji.lastIndex = 0;
  }
  return e;
}
function ut(n, e, t) {
  let i = `${n}`,
    r = i.replace(ji, (o, s) => {
      let a = e[s];
      return a == null && (t.push(Jo(s)), (a = "")), a.toString();
    });
  return r == i ? n : r;
}
var Fs = /-+([a-z0-9])/g;
function rn(n) {
  return n.replace(Fs, (...e) => e[1].toUpperCase());
}
function Rs(n, e) {
  return n === 0 || e === 0;
}
function zs(n, e, t) {
  if (t.size && e.length) {
    let i = e[0],
      r = [];
    if (
      (t.forEach((o, s) => {
        i.has(s) || r.push(s), i.set(s, o);
      }),
      r.length)
    )
      for (let o = 1; o < e.length; o++) {
        let s = e[o];
        r.forEach((a) => s.set(a, on(n, a)));
      }
  }
  return e;
}
function Z(n, e, t) {
  switch (e.type) {
    case M.Trigger:
      return n.visitTrigger(e, t);
    case M.State:
      return n.visitState(e, t);
    case M.Transition:
      return n.visitTransition(e, t);
    case M.Sequence:
      return n.visitSequence(e, t);
    case M.Group:
      return n.visitGroup(e, t);
    case M.Animate:
      return n.visitAnimate(e, t);
    case M.Keyframes:
      return n.visitKeyframes(e, t);
    case M.Style:
      return n.visitStyle(e, t);
    case M.Reference:
      return n.visitReference(e, t);
    case M.AnimateChild:
      return n.visitAnimateChild(e, t);
    case M.AnimateRef:
      return n.visitAnimateRef(e, t);
    case M.Query:
      return n.visitQuery(e, t);
    case M.Stagger:
      return n.visitStagger(e, t);
    default:
      throw es(e.type);
  }
}
function on(n, e) {
  return window.getComputedStyle(n)[e];
}
var Bs = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Qt = class extends Re {
    normalizePropertyName(e, t) {
      return rn(e);
    }
    normalizeStyleValue(e, t, i, r) {
      let o = "",
        s = i.toString().trim();
      if (Bs.has(t) && i !== 0 && i !== "0")
        if (typeof i == "number") o = "px";
        else {
          let a = i.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && r.push(ts(e, i));
        }
      return s + o;
    }
  };
var Wt = "*";
function js(n, e) {
  let t = [];
  return (
    typeof n == "string"
      ? n.split(/\s*,\s*/).forEach((i) => qs(i, t, e))
      : t.push(n),
    t
  );
}
function qs(n, e, t) {
  if (n[0] == ":") {
    let d = Vs(n, t);
    if (typeof d == "function") {
      e.push(d);
      return;
    }
    n = d;
  }
  let i = n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (i == null || i.length < 4) return t.push(us(n)), e;
  let r = i[1],
    o = i[2],
    s = i[3];
  e.push(jr(r, s));
  let a = r == Wt && s == Wt;
  o[0] == "<" && !a && e.push(jr(s, r));
}
function Vs(n, e) {
  switch (n) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (t, i) => parseFloat(i) > parseFloat(t);
    case ":decrement":
      return (t, i) => parseFloat(i) < parseFloat(t);
    default:
      return e.push(fs(n)), "* => *";
  }
}
var Vt = new Set(["true", "1"]),
  Ht = new Set(["false", "0"]);
function jr(n, e) {
  let t = Vt.has(n) || Ht.has(n),
    i = Vt.has(e) || Ht.has(e);
  return (r, o) => {
    let s = n == Wt || n == r,
      a = e == Wt || e == o;
    return (
      !s && t && typeof r == "boolean" && (s = r ? Vt.has(n) : Ht.has(n)),
      !a && i && typeof o == "boolean" && (a = o ? Vt.has(e) : Ht.has(e)),
      s && a
    );
  };
}
var io = ":self",
  Hs = new RegExp(`s*${io}s*,?`, "g");
function no(n, e, t, i) {
  return new qi(n).build(e, t, i);
}
var qr = "",
  qi = class {
    constructor(e) {
      this._driver = e;
    }
    build(e, t, i) {
      let r = new Vi(t);
      return this._resetContextStyleTimingState(r), Z(this, mt(e), r);
    }
    _resetContextStyleTimingState(e) {
      (e.currentQuerySelector = qr),
        (e.collectedStyles = new Map()),
        e.collectedStyles.set(qr, new Map()),
        (e.currentTime = 0);
    }
    visitTrigger(e, t) {
      let i = (t.queryCount = 0),
        r = (t.depCount = 0),
        o = [],
        s = [];
      return (
        e.name.charAt(0) == "@" && t.errors.push(is()),
        e.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(t), a.type == M.State)) {
            let d = a,
              p = d.name;
            p
              .toString()
              .split(/\s*,\s*/)
              .forEach((f) => {
                (d.name = f), o.push(this.visitState(d, t));
              }),
              (d.name = p);
          } else if (a.type == M.Transition) {
            let d = this.visitTransition(a, t);
            (i += d.queryCount), (r += d.depCount), s.push(d);
          } else t.errors.push(ns());
        }),
        {
          type: M.Trigger,
          name: e.name,
          states: o,
          transitions: s,
          queryCount: i,
          depCount: r,
          options: null,
        }
      );
    }
    visitState(e, t) {
      let i = this.visitStyle(e.styles, t),
        r = (e.options && e.options.params) || null;
      if (i.containsDynamicStyles) {
        let o = new Set(),
          s = r || {};
        i.styles.forEach((a) => {
          a instanceof Map &&
            a.forEach((d) => {
              to(d).forEach((p) => {
                s.hasOwnProperty(p) || o.add(p);
              });
            });
        }),
          o.size && t.errors.push(rs(e.name, [...o.values()]));
      }
      return {
        type: M.State,
        name: e.name,
        style: i,
        options: r ? { params: r } : null,
      };
    }
    visitTransition(e, t) {
      (t.queryCount = 0), (t.depCount = 0);
      let i = Z(this, mt(e.animation), t),
        r = js(e.expr, t.errors);
      return {
        type: M.Transition,
        matchers: r,
        animation: i,
        queryCount: t.queryCount,
        depCount: t.depCount,
        options: Ne(e.options),
      };
    }
    visitSequence(e, t) {
      return {
        type: M.Sequence,
        steps: e.steps.map((i) => Z(this, i, t)),
        options: Ne(e.options),
      };
    }
    visitGroup(e, t) {
      let i = t.currentTime,
        r = 0,
        o = e.steps.map((s) => {
          t.currentTime = i;
          let a = Z(this, s, t);
          return (r = Math.max(r, t.currentTime)), a;
        });
      return (
        (t.currentTime = r), { type: M.Group, steps: o, options: Ne(e.options) }
      );
    }
    visitAnimate(e, t) {
      let i = $s(e.timings, t.errors);
      t.currentAnimateTimings = i;
      let r,
        o = e.styles ? e.styles : Ci({});
      if (o.type == M.Keyframes) r = this.visitKeyframes(o, t);
      else {
        let s = e.styles,
          a = !1;
        if (!s) {
          a = !0;
          let p = {};
          i.easing && (p.easing = i.easing), (s = Ci(p));
        }
        t.currentTime += i.duration + i.delay;
        let d = this.visitStyle(s, t);
        (d.isEmptyStep = a), (r = d);
      }
      return (
        (t.currentAnimateTimings = null),
        { type: M.Animate, timings: i, style: r, options: null }
      );
    }
    visitStyle(e, t) {
      let i = this._makeStyleAst(e, t);
      return this._validateStyleAst(i, t), i;
    }
    _makeStyleAst(e, t) {
      let i = [],
        r = Array.isArray(e.styles) ? e.styles : [e.styles];
      for (let a of r)
        typeof a == "string"
          ? a === be
            ? i.push(a)
            : t.errors.push(os(a))
          : i.push(new Map(Object.entries(a)));
      let o = !1,
        s = null;
      return (
        i.forEach((a) => {
          if (
            a instanceof Map &&
            (a.has("easing") && ((s = a.get("easing")), a.delete("easing")), !o)
          ) {
            for (let d of a.values())
              if (d.toString().indexOf(Jr) >= 0) {
                o = !0;
                break;
              }
          }
        }),
        {
          type: M.Style,
          styles: i,
          easing: s,
          offset: e.offset,
          containsDynamicStyles: o,
          options: null,
        }
      );
    }
    _validateStyleAst(e, t) {
      let i = t.currentAnimateTimings,
        r = t.currentTime,
        o = t.currentTime;
      i && o > 0 && (o -= i.duration + i.delay),
        e.styles.forEach((s) => {
          typeof s != "string" &&
            s.forEach((a, d) => {
              let p = t.collectedStyles.get(t.currentQuerySelector),
                f = p.get(d),
                h = !0;
              f &&
                (o != r &&
                  o >= f.startTime &&
                  r <= f.endTime &&
                  (t.errors.push(ss(d, f.startTime, f.endTime, o, r)),
                  (h = !1)),
                (o = f.startTime)),
                h && p.set(d, { startTime: o, endTime: r }),
                t.options && Ls(a, t.options, t.errors);
            });
        });
    }
    visitKeyframes(e, t) {
      let i = { type: M.Keyframes, styles: [], options: null };
      if (!t.currentAnimateTimings) return t.errors.push(as()), i;
      let r = 1,
        o = 0,
        s = [],
        a = !1,
        d = !1,
        p = 0,
        f = e.steps.map((F) => {
          let R = this._makeStyleAst(F, t),
            Q = R.offset != null ? R.offset : Gs(R.styles),
            V = 0;
          return (
            Q != null && (o++, (V = R.offset = Q)),
            (d = d || V < 0 || V > 1),
            (a = a || V < p),
            (p = V),
            s.push(V),
            R
          );
        });
      d && t.errors.push(ls()), a && t.errors.push(cs());
      let h = e.steps.length,
        T = 0;
      o > 0 && o < h ? t.errors.push(ds()) : o == 0 && (T = r / (h - 1));
      let C = h - 1,
        v = t.currentTime,
        S = t.currentAnimateTimings,
        I = S.duration;
      return (
        f.forEach((F, R) => {
          let Q = T > 0 ? (R == C ? 1 : T * R) : s[R],
            V = Q * I;
          (t.currentTime = v + S.delay + V),
            (S.duration = V),
            this._validateStyleAst(F, t),
            (F.offset = Q),
            i.styles.push(F);
        }),
        i
      );
    }
    visitReference(e, t) {
      return {
        type: M.Reference,
        animation: Z(this, mt(e.animation), t),
        options: Ne(e.options),
      };
    }
    visitAnimateChild(e, t) {
      return t.depCount++, { type: M.AnimateChild, options: Ne(e.options) };
    }
    visitAnimateRef(e, t) {
      return {
        type: M.AnimateRef,
        animation: this.visitReference(e.animation, t),
        options: Ne(e.options),
      };
    }
    visitQuery(e, t) {
      let i = t.currentQuerySelector,
        r = e.options || {};
      t.queryCount++, (t.currentQuery = e);
      let [o, s] = Us(e.selector);
      (t.currentQuerySelector = i.length ? i + " " + o : o),
        J(t.collectedStyles, t.currentQuerySelector, new Map());
      let a = Z(this, mt(e.animation), t);
      return (
        (t.currentQuery = null),
        (t.currentQuerySelector = i),
        {
          type: M.Query,
          selector: o,
          limit: r.limit || 0,
          optional: !!r.optional,
          includeSelf: s,
          animation: a,
          originalSelector: e.selector,
          options: Ne(e.options),
        }
      );
    }
    visitStagger(e, t) {
      t.currentQuery || t.errors.push(ms());
      let i =
        e.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : $t(e.timings, t.errors, !0);
      return {
        type: M.Stagger,
        animation: Z(this, mt(e.animation), t),
        timings: i,
        options: null,
      };
    }
  };
function Us(n) {
  let e = !!n.split(/\s*,\s*/).find((t) => t == io);
  return (
    e && (n = n.replace(Hs, "")),
    (n = n
      .replace(/@\*/g, Gt)
      .replace(/@\w+/g, (t) => Gt + "-" + t.slice(1))
      .replace(/:animating/g, zi)),
    [n, e]
  );
}
function Ks(n) {
  return n ? K({}, n) : null;
}
var Vi = class {
  constructor(e) {
    (this.errors = e),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function Gs(n) {
  if (typeof n == "string") return null;
  let e = null;
  if (Array.isArray(n))
    n.forEach((t) => {
      if (t instanceof Map && t.has("offset")) {
        let i = t;
        (e = parseFloat(i.get("offset"))), i.delete("offset");
      }
    });
  else if (n instanceof Map && n.has("offset")) {
    let t = n;
    (e = parseFloat(t.get("offset"))), t.delete("offset");
  }
  return e;
}
function $s(n, e) {
  if (n.hasOwnProperty("duration")) return n;
  if (typeof n == "number") {
    let o = $t(n, e).duration;
    return Oi(o, 0, "");
  }
  let t = n;
  if (t.split(/\s+/).some((o) => o.charAt(0) == "{" && o.charAt(1) == "{")) {
    let o = Oi(0, 0, "");
    return (o.dynamic = !0), (o.strValue = t), o;
  }
  let r = $t(t, e);
  return Oi(r.duration, r.delay, r.easing);
}
function Ne(n) {
  return (
    n ? ((n = K({}, n)), n.params && (n.params = Ks(n.params))) : (n = {}), n
  );
}
function Oi(n, e, t) {
  return { duration: n, delay: e, easing: t };
}
function sn(n, e, t, i, r, o, s = null, a = !1) {
  return {
    type: 1,
    element: n,
    keyframes: e,
    preStyleProps: t,
    postStyleProps: i,
    duration: r,
    delay: o,
    totalTime: r + o,
    easing: s,
    subTimeline: a,
  };
}
var ft = class {
    constructor() {
      this._map = new Map();
    }
    get(e) {
      return this._map.get(e) || [];
    }
    append(e, t) {
      let i = this._map.get(e);
      i || this._map.set(e, (i = [])), i.push(...t);
    }
    has(e) {
      return this._map.has(e);
    }
    clear() {
      this._map.clear();
    }
  },
  Qs = 1,
  Ws = ":enter",
  Xs = new RegExp(Ws, "g"),
  Ys = ":leave",
  Zs = new RegExp(Ys, "g");
function ro(n, e, t, i, r, o = new Map(), s = new Map(), a, d, p = []) {
  return new Hi().buildKeyframes(n, e, t, i, r, o, s, a, d, p);
}
var Hi = class {
    buildKeyframes(e, t, i, r, o, s, a, d, p, f = []) {
      p = p || new ft();
      let h = new Ui(e, t, p, r, o, f, []);
      h.options = d;
      let T = d.delay ? Se(d.delay) : 0;
      h.currentTimeline.delayNextStep(T),
        h.currentTimeline.setStyles([s], null, h.errors, d),
        Z(this, i, h);
      let C = h.timelines.filter((v) => v.containsAnimation());
      if (C.length && a.size) {
        let v;
        for (let S = C.length - 1; S >= 0; S--) {
          let I = C[S];
          if (I.element === t) {
            v = I;
            break;
          }
        }
        v &&
          !v.allowOnlyTimelineStyles() &&
          v.setStyles([a], null, h.errors, d);
      }
      return C.length
        ? C.map((v) => v.buildKeyframes())
        : [sn(t, [], [], [], 0, T, "", !1)];
    }
    visitTrigger(e, t) {}
    visitState(e, t) {}
    visitTransition(e, t) {}
    visitAnimateChild(e, t) {
      let i = t.subInstructions.get(t.element);
      if (i) {
        let r = t.createSubContext(e.options),
          o = t.currentTimeline.currentTime,
          s = this._visitSubInstructions(i, r, r.options);
        o != s && t.transformIntoNewTimeline(s);
      }
      t.previousNode = e;
    }
    visitAnimateRef(e, t) {
      let i = t.createSubContext(e.options);
      i.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([e.options, e.animation.options], t, i),
        this.visitReference(e.animation, i),
        t.transformIntoNewTimeline(i.currentTimeline.currentTime),
        (t.previousNode = e);
    }
    _applyAnimationRefDelays(e, t, i) {
      for (let r of e) {
        let o = r?.delay;
        if (o) {
          let s =
            typeof o == "number" ? o : Se(ut(o, r?.params ?? {}, t.errors));
          i.delayNextStep(s);
        }
      }
    }
    _visitSubInstructions(e, t, i) {
      let o = t.currentTimeline.currentTime,
        s = i.duration != null ? Se(i.duration) : null,
        a = i.delay != null ? Se(i.delay) : null;
      return (
        s !== 0 &&
          e.forEach((d) => {
            let p = t.appendInstructionToTimeline(d, s, a);
            o = Math.max(o, p.duration + p.delay);
          }),
        o
      );
    }
    visitReference(e, t) {
      t.updateOptions(e.options, !0),
        Z(this, e.animation, t),
        (t.previousNode = e);
    }
    visitSequence(e, t) {
      let i = t.subContextCount,
        r = t,
        o = e.options;
      if (
        o &&
        (o.params || o.delay) &&
        ((r = t.createSubContext(o)),
        r.transformIntoNewTimeline(),
        o.delay != null)
      ) {
        r.previousNode.type == M.Style &&
          (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = Xt));
        let s = Se(o.delay);
        r.delayNextStep(s);
      }
      e.steps.length &&
        (e.steps.forEach((s) => Z(this, s, r)),
        r.currentTimeline.applyStylesToKeyframe(),
        r.subContextCount > i && r.transformIntoNewTimeline()),
        (t.previousNode = e);
    }
    visitGroup(e, t) {
      let i = [],
        r = t.currentTimeline.currentTime,
        o = e.options && e.options.delay ? Se(e.options.delay) : 0;
      e.steps.forEach((s) => {
        let a = t.createSubContext(e.options);
        o && a.delayNextStep(o),
          Z(this, s, a),
          (r = Math.max(r, a.currentTimeline.currentTime)),
          i.push(a.currentTimeline);
      }),
        i.forEach((s) => t.currentTimeline.mergeTimelineCollectedStyles(s)),
        t.transformIntoNewTimeline(r),
        (t.previousNode = e);
    }
    _visitTiming(e, t) {
      if (e.dynamic) {
        let i = e.strValue,
          r = t.params ? ut(i, t.params, t.errors) : i;
        return $t(r, t.errors);
      } else return { duration: e.duration, delay: e.delay, easing: e.easing };
    }
    visitAnimate(e, t) {
      let i = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
        r = t.currentTimeline;
      i.delay && (t.incrementTime(i.delay), r.snapshotCurrentStyles());
      let o = e.style;
      o.type == M.Keyframes
        ? this.visitKeyframes(o, t)
        : (t.incrementTime(i.duration),
          this.visitStyle(o, t),
          r.applyStylesToKeyframe()),
        (t.currentAnimateTimings = null),
        (t.previousNode = e);
    }
    visitStyle(e, t) {
      let i = t.currentTimeline,
        r = t.currentAnimateTimings;
      !r && i.hasCurrentStyleProperties() && i.forwardFrame();
      let o = (r && r.easing) || e.easing;
      e.isEmptyStep
        ? i.applyEmptyStep(o)
        : i.setStyles(e.styles, o, t.errors, t.options),
        (t.previousNode = e);
    }
    visitKeyframes(e, t) {
      let i = t.currentAnimateTimings,
        r = t.currentTimeline.duration,
        o = i.duration,
        a = t.createSubContext().currentTimeline;
      (a.easing = i.easing),
        e.styles.forEach((d) => {
          let p = d.offset || 0;
          a.forwardTime(p * o),
            a.setStyles(d.styles, d.easing, t.errors, t.options),
            a.applyStylesToKeyframe();
        }),
        t.currentTimeline.mergeTimelineCollectedStyles(a),
        t.transformIntoNewTimeline(r + o),
        (t.previousNode = e);
    }
    visitQuery(e, t) {
      let i = t.currentTimeline.currentTime,
        r = e.options || {},
        o = r.delay ? Se(r.delay) : 0;
      o &&
        (t.previousNode.type === M.Style ||
          (i == 0 && t.currentTimeline.hasCurrentStyleProperties())) &&
        (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = Xt));
      let s = i,
        a = t.invokeQuery(
          e.selector,
          e.originalSelector,
          e.limit,
          e.includeSelf,
          !!r.optional,
          t.errors
        );
      t.currentQueryTotal = a.length;
      let d = null;
      a.forEach((p, f) => {
        t.currentQueryIndex = f;
        let h = t.createSubContext(e.options, p);
        o && h.delayNextStep(o),
          p === t.element && (d = h.currentTimeline),
          Z(this, e.animation, h),
          h.currentTimeline.applyStylesToKeyframe();
        let T = h.currentTimeline.currentTime;
        s = Math.max(s, T);
      }),
        (t.currentQueryIndex = 0),
        (t.currentQueryTotal = 0),
        t.transformIntoNewTimeline(s),
        d &&
          (t.currentTimeline.mergeTimelineCollectedStyles(d),
          t.currentTimeline.snapshotCurrentStyles()),
        (t.previousNode = e);
    }
    visitStagger(e, t) {
      let i = t.parentContext,
        r = t.currentTimeline,
        o = e.timings,
        s = Math.abs(o.duration),
        a = s * (t.currentQueryTotal - 1),
        d = s * t.currentQueryIndex;
      switch (o.duration < 0 ? "reverse" : o.easing) {
        case "reverse":
          d = a - d;
          break;
        case "full":
          d = i.currentStaggerTime;
          break;
      }
      let f = t.currentTimeline;
      d && f.delayNextStep(d);
      let h = f.currentTime;
      Z(this, e.animation, t),
        (t.previousNode = e),
        (i.currentStaggerTime =
          r.currentTime - h + (r.startTime - i.currentTimeline.startTime));
    }
  },
  Xt = {},
  Ui = class n {
    constructor(e, t, i, r, o, s, a, d) {
      (this._driver = e),
        (this.element = t),
        (this.subInstructions = i),
        (this._enterClassName = r),
        (this._leaveClassName = o),
        (this.errors = s),
        (this.timelines = a),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = Xt),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = d || new Yt(this._driver, t, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(e, t) {
      if (!e) return;
      let i = e,
        r = this.options;
      i.duration != null && (r.duration = Se(i.duration)),
        i.delay != null && (r.delay = Se(i.delay));
      let o = i.params;
      if (o) {
        let s = r.params;
        s || (s = this.options.params = {}),
          Object.keys(o).forEach((a) => {
            (!t || !s.hasOwnProperty(a)) && (s[a] = ut(o[a], s, this.errors));
          });
      }
    }
    _copyOptions() {
      let e = {};
      if (this.options) {
        let t = this.options.params;
        if (t) {
          let i = (e.params = {});
          Object.keys(t).forEach((r) => {
            i[r] = t[r];
          });
        }
      }
      return e;
    }
    createSubContext(e = null, t, i) {
      let r = t || this.element,
        o = new n(
          this._driver,
          r,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(r, i || 0)
        );
      return (
        (o.previousNode = this.previousNode),
        (o.currentAnimateTimings = this.currentAnimateTimings),
        (o.options = this._copyOptions()),
        o.updateOptions(e),
        (o.currentQueryIndex = this.currentQueryIndex),
        (o.currentQueryTotal = this.currentQueryTotal),
        (o.parentContext = this),
        this.subContextCount++,
        o
      );
    }
    transformIntoNewTimeline(e) {
      return (
        (this.previousNode = Xt),
        (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(e, t, i) {
      let r = {
          duration: t ?? e.duration,
          delay: this.currentTimeline.currentTime + (i ?? 0) + e.delay,
          easing: "",
        },
        o = new Ki(
          this._driver,
          e.element,
          e.keyframes,
          e.preStyleProps,
          e.postStyleProps,
          r,
          e.stretchStartingKeyframe
        );
      return this.timelines.push(o), r;
    }
    incrementTime(e) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
    }
    delayNextStep(e) {
      e > 0 && this.currentTimeline.delayNextStep(e);
    }
    invokeQuery(e, t, i, r, o, s) {
      let a = [];
      if ((r && a.push(this.element), e.length > 0)) {
        (e = e.replace(Xs, "." + this._enterClassName)),
          (e = e.replace(Zs, "." + this._leaveClassName));
        let d = i != 1,
          p = this._driver.query(this.element, e, d);
        i !== 0 &&
          (p = i < 0 ? p.slice(p.length + i, p.length) : p.slice(0, i)),
          a.push(...p);
      }
      return !o && a.length == 0 && s.push(ps(t)), a;
    }
  },
  Yt = class n {
    constructor(e, t, i, r) {
      (this._driver = e),
        (this.element = t),
        (this.startTime = i),
        (this._elementTimelineStylesLookup = r),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(t)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(t, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(e) {
      let t = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || t
        ? (this.forwardTime(this.currentTime + e),
          t && this.snapshotCurrentStyles())
        : (this.startTime += e);
    }
    fork(e, t) {
      return (
        this.applyStylesToKeyframe(),
        new n(
          this._driver,
          e,
          t || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += Qs), this._loadKeyframe();
    }
    forwardTime(e) {
      this.applyStylesToKeyframe(), (this.duration = e), this._loadKeyframe();
    }
    _updateStyle(e, t) {
      this._localTimelineStyles.set(e, t),
        this._globalTimelineStyles.set(e, t),
        this._styleSummary.set(e, { time: this.currentTime, value: t });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(e) {
      e && this._previousKeyframe.set("easing", e);
      for (let [t, i] of this._globalTimelineStyles)
        this._backFill.set(t, i || be), this._currentKeyframe.set(t, be);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(e, t, i, r) {
      t && this._previousKeyframe.set("easing", t);
      let o = (r && r.params) || {},
        s = Js(e, this._globalTimelineStyles);
      for (let [a, d] of s) {
        let p = ut(d, o, i);
        this._pendingStyles.set(a, p),
          this._localTimelineStyles.has(a) ||
            this._backFill.set(a, this._globalTimelineStyles.get(a) ?? be),
          this._updateStyle(a, p);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((e, t) => {
          this._currentKeyframe.set(t, e);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((e, t) => {
          this._currentKeyframe.has(t) || this._currentKeyframe.set(t, e);
        }));
    }
    snapshotCurrentStyles() {
      for (let [e, t] of this._localTimelineStyles)
        this._pendingStyles.set(e, t), this._updateStyle(e, t);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let e = [];
      for (let t in this._currentKeyframe) e.push(t);
      return e;
    }
    mergeTimelineCollectedStyles(e) {
      e._styleSummary.forEach((t, i) => {
        let r = this._styleSummary.get(i);
        (!r || t.time > r.time) && this._updateStyle(i, t.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let e = new Set(),
        t = new Set(),
        i = this._keyframes.size === 1 && this.duration === 0,
        r = [];
      this._keyframes.forEach((a, d) => {
        let p = new Map([...this._backFill, ...a]);
        p.forEach((f, h) => {
          f === Lt ? e.add(h) : f === be && t.add(h);
        }),
          i || p.set("offset", d / this.duration),
          r.push(p);
      });
      let o = [...e.values()],
        s = [...t.values()];
      if (i) {
        let a = r[0],
          d = new Map(a);
        a.set("offset", 0), d.set("offset", 1), (r = [a, d]);
      }
      return sn(
        this.element,
        r,
        o,
        s,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  Ki = class extends Yt {
    constructor(e, t, i, r, o, s, a = !1) {
      super(e, t, s.delay),
        (this.keyframes = i),
        (this.preStyleProps = r),
        (this.postStyleProps = o),
        (this._stretchStartingKeyframe = a),
        (this.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let e = this.keyframes,
        { delay: t, duration: i, easing: r } = this.timings;
      if (this._stretchStartingKeyframe && t) {
        let o = [],
          s = i + t,
          a = t / s,
          d = new Map(e[0]);
        d.set("offset", 0), o.push(d);
        let p = new Map(e[0]);
        p.set("offset", Vr(a)), o.push(p);
        let f = e.length - 1;
        for (let h = 1; h <= f; h++) {
          let T = new Map(e[h]),
            C = T.get("offset"),
            v = t + C * i;
          T.set("offset", Vr(v / s)), o.push(T);
        }
        (i = s), (t = 0), (r = ""), (e = o);
      }
      return sn(
        this.element,
        e,
        this.preStyleProps,
        this.postStyleProps,
        i,
        t,
        r,
        !0
      );
    }
  };
function Vr(n, e = 3) {
  let t = Math.pow(10, e - 1);
  return Math.round(n * t) / t;
}
function Js(n, e) {
  let t = new Map(),
    i;
  return (
    n.forEach((r) => {
      if (r === "*") {
        i ??= e.keys();
        for (let o of i) t.set(o, be);
      } else for (let [o, s] of r) t.set(o, s);
    }),
    t
  );
}
function Hr(n, e, t, i, r, o, s, a, d, p, f, h, T) {
  return {
    type: 0,
    element: n,
    triggerName: e,
    isRemovalTransition: r,
    fromState: t,
    fromStyles: o,
    toState: i,
    toStyles: s,
    timelines: a,
    queriedElements: d,
    preStyleProps: p,
    postStyleProps: f,
    totalTime: h,
    errors: T,
  };
}
var Ii = {},
  Zt = class {
    constructor(e, t, i) {
      (this._triggerName = e), (this.ast = t), (this._stateStyles = i);
    }
    match(e, t, i, r) {
      return ea(this.ast.matchers, e, t, i, r);
    }
    buildStyles(e, t, i) {
      let r = this._stateStyles.get("*");
      return (
        e !== void 0 && (r = this._stateStyles.get(e?.toString()) || r),
        r ? r.buildStyles(t, i) : new Map()
      );
    }
    build(e, t, i, r, o, s, a, d, p, f) {
      let h = [],
        T = (this.ast.options && this.ast.options.params) || Ii,
        C = (a && a.params) || Ii,
        v = this.buildStyles(i, C, h),
        S = (d && d.params) || Ii,
        I = this.buildStyles(r, S, h),
        F = new Set(),
        R = new Map(),
        Q = new Map(),
        V = r === "void",
        ze = { params: oo(S, T), delay: this.ast.options?.delay },
        ge = f ? [] : ro(e, t, this.ast.animation, o, s, v, I, ze, p, h),
        W = 0;
      return (
        ge.forEach((X) => {
          W = Math.max(X.duration + X.delay, W);
        }),
        h.length
          ? Hr(t, this._triggerName, i, r, V, v, I, [], [], R, Q, W, h)
          : (ge.forEach((X) => {
              let Pe = X.element,
                Be = J(R, Pe, new Set());
              X.preStyleProps.forEach((Ae) => Be.add(Ae));
              let dn = J(Q, Pe, new Set());
              X.postStyleProps.forEach((Ae) => dn.add(Ae)),
                Pe !== t && F.add(Pe);
            }),
            Hr(
              t,
              this._triggerName,
              i,
              r,
              V,
              v,
              I,
              ge,
              [...F.values()],
              R,
              Q,
              W
            ))
      );
    }
  };
function ea(n, e, t, i, r) {
  return n.some((o) => o(e, t, i, r));
}
function oo(n, e) {
  let t = K({}, e);
  return (
    Object.entries(n).forEach(([i, r]) => {
      r != null && (t[i] = r);
    }),
    t
  );
}
var Gi = class {
  constructor(e, t, i) {
    (this.styles = e), (this.defaultParams = t), (this.normalizer = i);
  }
  buildStyles(e, t) {
    let i = new Map(),
      r = oo(e, this.defaultParams);
    return (
      this.styles.styles.forEach((o) => {
        typeof o != "string" &&
          o.forEach((s, a) => {
            s && (s = ut(s, r, t));
            let d = this.normalizer.normalizePropertyName(a, t);
            (s = this.normalizer.normalizeStyleValue(a, d, s, t)), i.set(a, s);
          });
      }),
      i
    );
  }
};
function ta(n, e, t) {
  return new $i(n, e, t);
}
var $i = class {
  constructor(e, t, i) {
    (this.name = e),
      (this.ast = t),
      (this._normalizer = i),
      (this.transitionFactories = []),
      (this.states = new Map()),
      t.states.forEach((r) => {
        let o = (r.options && r.options.params) || {};
        this.states.set(r.name, new Gi(r.style, o, i));
      }),
      Ur(this.states, "true", "1"),
      Ur(this.states, "false", "0"),
      t.transitions.forEach((r) => {
        this.transitionFactories.push(new Zt(e, r, this.states));
      }),
      (this.fallbackTransition = ia(e, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(e, t, i, r) {
    return this.transitionFactories.find((s) => s.match(e, t, i, r)) || null;
  }
  matchStyles(e, t, i) {
    return this.fallbackTransition.buildStyles(e, t, i);
  }
};
function ia(n, e, t) {
  let i = [(s, a) => !0],
    r = { type: M.Sequence, steps: [], options: null },
    o = {
      type: M.Transition,
      animation: r,
      matchers: i,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Zt(n, o, e);
}
function Ur(n, e, t) {
  n.has(e) ? n.has(t) || n.set(t, n.get(e)) : n.has(t) && n.set(e, n.get(t));
}
var na = new ft(),
  Qi = class {
    constructor(e, t, i) {
      (this.bodyNode = e),
        (this._driver = t),
        (this._normalizer = i),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(e, t) {
      let i = [],
        r = [],
        o = no(this._driver, t, i, r);
      if (i.length) throw ys(i);
      r.length && void 0, this._animations.set(e, o);
    }
    _buildPlayer(e, t, i) {
      let r = e.element,
        o = Xr(this._normalizer, e.keyframes, t, i);
      return this._driver.animate(r, o, e.duration, e.delay, e.easing, [], !0);
    }
    create(e, t, i = {}) {
      let r = [],
        o = this._animations.get(e),
        s,
        a = new Map();
      if (
        (o
          ? ((s = ro(
              this._driver,
              t,
              o,
              eo,
              Ri,
              new Map(),
              new Map(),
              i,
              na,
              r
            )),
            s.forEach((f) => {
              let h = J(a, f.element, new Map());
              f.postStyleProps.forEach((T) => h.set(T, null));
            }))
          : (r.push(vs()), (s = [])),
        r.length)
      )
        throw bs(r);
      a.forEach((f, h) => {
        f.forEach((T, C) => {
          f.set(C, this._driver.computeStyle(h, C, be));
        });
      });
      let d = s.map((f) => {
          let h = a.get(f.element);
          return this._buildPlayer(f, new Map(), h);
        }),
        p = ke(d);
      return (
        this._playersById.set(e, p),
        p.onDestroy(() => this.destroy(e)),
        this.players.push(p),
        p
      );
    }
    destroy(e) {
      let t = this._getPlayer(e);
      t.destroy(), this._playersById.delete(e);
      let i = this.players.indexOf(t);
      i >= 0 && this.players.splice(i, 1);
    }
    _getPlayer(e) {
      let t = this._playersById.get(e);
      if (!t) throw xs(e);
      return t;
    }
    listen(e, t, i, r) {
      let o = en(t, "", "", "");
      return Ji(this._getPlayer(e), i, o, r), () => {};
    }
    command(e, t, i, r) {
      if (i == "register") {
        this.register(e, r[0]);
        return;
      }
      if (i == "create") {
        let s = r[0] || {};
        this.create(e, t, s);
        return;
      }
      let o = this._getPlayer(e);
      switch (i) {
        case "play":
          o.play();
          break;
        case "pause":
          o.pause();
          break;
        case "reset":
          o.reset();
          break;
        case "restart":
          o.restart();
          break;
        case "finish":
          o.finish();
          break;
        case "init":
          o.init();
          break;
        case "setPosition":
          o.setPosition(parseFloat(r[0]));
          break;
        case "destroy":
          this.destroy(e);
          break;
      }
    }
  },
  Kr = "ng-animate-queued",
  ra = ".ng-animate-queued",
  Ni = "ng-animate-disabled",
  oa = ".ng-animate-disabled",
  sa = "ng-star-inserted",
  aa = ".ng-star-inserted",
  la = [],
  so = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  ca = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  fe = "__ng_removed",
  ht = class {
    get params() {
      return this.options.params;
    }
    constructor(e, t = "") {
      this.namespaceId = t;
      let i = e && e.hasOwnProperty("value"),
        r = i ? e.value : e;
      if (((this.value = ma(r)), i)) {
        let o = e,
          { value: s } = o,
          a = fn(o, ["value"]);
        this.options = a;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(e) {
      let t = e.params;
      if (t) {
        let i = this.options.params;
        Object.keys(t).forEach((r) => {
          i[r] == null && (i[r] = t[r]);
        });
      }
    }
  },
  pt = "void",
  Li = new ht(pt),
  Wi = class {
    constructor(e, t, i) {
      (this.id = e),
        (this.hostElement = t),
        (this._engine = i),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + e),
        ae(t, this._hostClassName);
    }
    listen(e, t, i, r) {
      if (!this._triggers.has(t)) throw _s(i, t);
      if (i == null || i.length == 0) throw Ss(t);
      if (!pa(i)) throw ws(i, t);
      let o = J(this._elementListeners, e, []),
        s = { name: t, phase: i, callback: r };
      o.push(s);
      let a = J(this._engine.statesByElement, e, new Map());
      return (
        a.has(t) || (ae(e, qt), ae(e, qt + "-" + t), a.set(t, Li)),
        () => {
          this._engine.afterFlush(() => {
            let d = o.indexOf(s);
            d >= 0 && o.splice(d, 1), this._triggers.has(t) || a.delete(t);
          });
        }
      );
    }
    register(e, t) {
      return this._triggers.has(e) ? !1 : (this._triggers.set(e, t), !0);
    }
    _getTrigger(e) {
      let t = this._triggers.get(e);
      if (!t) throw Cs(e);
      return t;
    }
    trigger(e, t, i, r = !0) {
      let o = this._getTrigger(t),
        s = new gt(this.id, t, e),
        a = this._engine.statesByElement.get(e);
      a ||
        (ae(e, qt),
        ae(e, qt + "-" + t),
        this._engine.statesByElement.set(e, (a = new Map())));
      let d = a.get(t),
        p = new ht(i, this.id);
      if (
        (!(i && i.hasOwnProperty("value")) && d && p.absorbOptions(d.options),
        a.set(t, p),
        d || (d = Li),
        !(p.value === pt) && d.value === p.value)
      ) {
        if (!ha(d.params, p.params)) {
          let S = [],
            I = o.matchStyles(d.value, d.params, S),
            F = o.matchStyles(p.value, p.params, S);
          S.length
            ? this._engine.reportError(S)
            : this._engine.afterFlush(() => {
                Le(e, I), xe(e, F);
              });
        }
        return;
      }
      let T = J(this._engine.playersByElement, e, []);
      T.forEach((S) => {
        S.namespaceId == this.id &&
          S.triggerName == t &&
          S.queued &&
          S.destroy();
      });
      let C = o.matchTransition(d.value, p.value, e, p.params),
        v = !1;
      if (!C) {
        if (!r) return;
        (C = o.fallbackTransition), (v = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: e,
          triggerName: t,
          transition: C,
          fromState: d,
          toState: p,
          player: s,
          isFallbackTransition: v,
        }),
        v ||
          (ae(e, Kr),
          s.onStart(() => {
            et(e, Kr);
          })),
        s.onDone(() => {
          let S = this.players.indexOf(s);
          S >= 0 && this.players.splice(S, 1);
          let I = this._engine.playersByElement.get(e);
          if (I) {
            let F = I.indexOf(s);
            F >= 0 && I.splice(F, 1);
          }
        }),
        this.players.push(s),
        T.push(s),
        s
      );
    }
    deregister(e) {
      this._triggers.delete(e),
        this._engine.statesByElement.forEach((t) => t.delete(e)),
        this._elementListeners.forEach((t, i) => {
          this._elementListeners.set(
            i,
            t.filter((r) => r.name != e)
          );
        });
    }
    clearElementCache(e) {
      this._engine.statesByElement.delete(e), this._elementListeners.delete(e);
      let t = this._engine.playersByElement.get(e);
      t &&
        (t.forEach((i) => i.destroy()),
        this._engine.playersByElement.delete(e));
    }
    _signalRemovalForInnerTriggers(e, t) {
      let i = this._engine.driver.query(e, Gt, !0);
      i.forEach((r) => {
        if (r[fe]) return;
        let o = this._engine.fetchNamespacesByElement(r);
        o.size
          ? o.forEach((s) => s.triggerLeaveAnimation(r, t, !1, !0))
          : this.clearElementCache(r);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          i.forEach((r) => this.clearElementCache(r))
        );
    }
    triggerLeaveAnimation(e, t, i, r) {
      let o = this._engine.statesByElement.get(e),
        s = new Map();
      if (o) {
        let a = [];
        if (
          (o.forEach((d, p) => {
            if ((s.set(p, d.value), this._triggers.has(p))) {
              let f = this.trigger(e, p, pt, r);
              f && a.push(f);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, e, !0, t, s),
            i && ke(a).onDone(() => this._engine.processLeaveNode(e)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(e) {
      let t = this._elementListeners.get(e),
        i = this._engine.statesByElement.get(e);
      if (t && i) {
        let r = new Set();
        t.forEach((o) => {
          let s = o.name;
          if (r.has(s)) return;
          r.add(s);
          let d = this._triggers.get(s).fallbackTransition,
            p = i.get(s) || Li,
            f = new ht(pt),
            h = new gt(this.id, s, e);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: s,
              transition: d,
              fromState: p,
              toState: f,
              player: h,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(e, t) {
      let i = this._engine;
      if (
        (e.childElementCount && this._signalRemovalForInnerTriggers(e, t),
        this.triggerLeaveAnimation(e, t, !0))
      )
        return;
      let r = !1;
      if (i.totalAnimations) {
        let o = i.players.length ? i.playersByQueriedElement.get(e) : [];
        if (o && o.length) r = !0;
        else {
          let s = e;
          for (; (s = s.parentNode); )
            if (i.statesByElement.get(s)) {
              r = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(e), r))
        i.markElementAsRemoved(this.id, e, !1, t);
      else {
        let o = e[fe];
        (!o || o === so) &&
          (i.afterFlush(() => this.clearElementCache(e)),
          i.destroyInnerAnimations(e),
          i._onRemovalComplete(e, t));
      }
    }
    insertNode(e, t) {
      ae(e, this._hostClassName);
    }
    drainQueuedTransitions(e) {
      let t = [];
      return (
        this._queue.forEach((i) => {
          let r = i.player;
          if (r.destroyed) return;
          let o = i.element,
            s = this._elementListeners.get(o);
          s &&
            s.forEach((a) => {
              if (a.name == i.triggerName) {
                let d = en(
                  o,
                  i.triggerName,
                  i.fromState.value,
                  i.toState.value
                );
                (d._data = e), Ji(i.player, a.phase, d, a.callback);
              }
            }),
            r.markedForDestroy
              ? this._engine.afterFlush(() => {
                  r.destroy();
                })
              : t.push(i);
        }),
        (this._queue = []),
        t.sort((i, r) => {
          let o = i.transition.ast.depCount,
            s = r.transition.ast.depCount;
          return o == 0 || s == 0
            ? o - s
            : this._engine.driver.containsElement(i.element, r.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(e) {
      this.players.forEach((t) => t.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, e);
    }
  },
  Xi = class {
    _onRemovalComplete(e, t) {
      this.onRemovalComplete(e, t);
    }
    constructor(e, t, i, r) {
      (this.bodyNode = e),
        (this.driver = t),
        (this._normalizer = i),
        (this.scheduler = r),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (o, s) => {});
    }
    get queuedPlayers() {
      let e = [];
      return (
        this._namespaceList.forEach((t) => {
          t.players.forEach((i) => {
            i.queued && e.push(i);
          });
        }),
        e
      );
    }
    createNamespace(e, t) {
      let i = new Wi(e, t, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, t)
          ? this._balanceNamespaceList(i, t)
          : (this.newHostElements.set(t, i), this.collectEnterElement(t)),
        (this._namespaceLookup[e] = i)
      );
    }
    _balanceNamespaceList(e, t) {
      let i = this._namespaceList,
        r = this.namespacesByHostElement;
      if (i.length - 1 >= 0) {
        let s = !1,
          a = this.driver.getParentElement(t);
        for (; a; ) {
          let d = r.get(a);
          if (d) {
            let p = i.indexOf(d);
            i.splice(p + 1, 0, e), (s = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        s || i.unshift(e);
      } else i.push(e);
      return r.set(t, e), e;
    }
    register(e, t) {
      let i = this._namespaceLookup[e];
      return i || (i = this.createNamespace(e, t)), i;
    }
    registerTrigger(e, t, i) {
      let r = this._namespaceLookup[e];
      r && r.register(t, i) && this.totalAnimations++;
    }
    destroy(e, t) {
      e &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let i = this._fetchNamespace(e);
          this.namespacesByHostElement.delete(i.hostElement);
          let r = this._namespaceList.indexOf(i);
          r >= 0 && this._namespaceList.splice(r, 1),
            i.destroy(t),
            delete this._namespaceLookup[e];
        }));
    }
    _fetchNamespace(e) {
      return this._namespaceLookup[e];
    }
    fetchNamespacesByElement(e) {
      let t = new Set(),
        i = this.statesByElement.get(e);
      if (i) {
        for (let r of i.values())
          if (r.namespaceId) {
            let o = this._fetchNamespace(r.namespaceId);
            o && t.add(o);
          }
      }
      return t;
    }
    trigger(e, t, i, r) {
      if (Ut(t)) {
        let o = this._fetchNamespace(e);
        if (o) return o.trigger(t, i, r), !0;
      }
      return !1;
    }
    insertNode(e, t, i, r) {
      if (!Ut(t)) return;
      let o = t[fe];
      if (o && o.setForRemoval) {
        (o.setForRemoval = !1), (o.setForMove = !0);
        let s = this.collectedLeaveElements.indexOf(t);
        s >= 0 && this.collectedLeaveElements.splice(s, 1);
      }
      if (e) {
        let s = this._fetchNamespace(e);
        s && s.insertNode(t, i);
      }
      r && this.collectEnterElement(t);
    }
    collectEnterElement(e) {
      this.collectedEnterElements.push(e);
    }
    markElementAsDisabled(e, t) {
      t
        ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), ae(e, Ni))
        : this.disabledNodes.has(e) &&
          (this.disabledNodes.delete(e), et(e, Ni));
    }
    removeNode(e, t, i) {
      if (Ut(t)) {
        this.scheduler?.notify();
        let r = e ? this._fetchNamespace(e) : null;
        r ? r.removeNode(t, i) : this.markElementAsRemoved(e, t, !1, i);
        let o = this.namespacesByHostElement.get(t);
        o && o.id !== e && o.removeNode(t, i);
      } else this._onRemovalComplete(t, i);
    }
    markElementAsRemoved(e, t, i, r, o) {
      this.collectedLeaveElements.push(t),
        (t[fe] = {
          namespaceId: e,
          setForRemoval: r,
          hasAnimation: i,
          removedBeforeQueried: !1,
          previousTriggersValues: o,
        });
    }
    listen(e, t, i, r, o) {
      return Ut(t) ? this._fetchNamespace(e).listen(t, i, r, o) : () => {};
    }
    _buildInstruction(e, t, i, r, o) {
      return e.transition.build(
        this.driver,
        e.element,
        e.fromState.value,
        e.toState.value,
        i,
        r,
        e.fromState.options,
        e.toState.options,
        t,
        o
      );
    }
    destroyInnerAnimations(e) {
      let t = this.driver.query(e, Gt, !0);
      t.forEach((i) => this.destroyActiveAnimationsForElement(i)),
        this.playersByQueriedElement.size != 0 &&
          ((t = this.driver.query(e, zi, !0)),
          t.forEach((i) => this.finishActiveQueriedAnimationOnElement(i)));
    }
    destroyActiveAnimationsForElement(e) {
      let t = this.playersByElement.get(e);
      t &&
        t.forEach((i) => {
          i.queued ? (i.markedForDestroy = !0) : i.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(e) {
      let t = this.playersByQueriedElement.get(e);
      t && t.forEach((i) => i.finish());
    }
    whenRenderingDone() {
      return new Promise((e) => {
        if (this.players.length) return ke(this.players).onDone(() => e());
        e();
      });
    }
    processLeaveNode(e) {
      let t = e[fe];
      if (t && t.setForRemoval) {
        if (((e[fe] = so), t.namespaceId)) {
          this.destroyInnerAnimations(e);
          let i = this._fetchNamespace(t.namespaceId);
          i && i.clearElementCache(e);
        }
        this._onRemovalComplete(e, t.setForRemoval);
      }
      e.classList?.contains(Ni) && this.markElementAsDisabled(e, !1),
        this.driver.query(e, oa, !0).forEach((i) => {
          this.markElementAsDisabled(i, !1);
        });
    }
    flush(e = -1) {
      let t = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((i, r) =>
            this._balanceNamespaceList(i, r)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let i = 0; i < this.collectedEnterElements.length; i++) {
          let r = this.collectedEnterElements[i];
          ae(r, sa);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let i = [];
        try {
          t = this._flushAnimations(i, e);
        } finally {
          for (let r = 0; r < i.length; r++) i[r]();
        }
      } else
        for (let i = 0; i < this.collectedLeaveElements.length; i++) {
          let r = this.collectedLeaveElements[i];
          this.processLeaveNode(r);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((i) => i()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let i = this._whenQuietFns;
        (this._whenQuietFns = []),
          t.length
            ? ke(t).onDone(() => {
                i.forEach((r) => r());
              })
            : i.forEach((r) => r());
      }
    }
    reportError(e) {
      throw Es(e);
    }
    _flushAnimations(e, t) {
      let i = new ft(),
        r = [],
        o = new Map(),
        s = [],
        a = new Map(),
        d = new Map(),
        p = new Map(),
        f = new Set();
      this.disabledNodes.forEach((y) => {
        f.add(y);
        let b = this.driver.query(y, ra, !0);
        for (let _ = 0; _ < b.length; _++) f.add(b[_]);
      });
      let h = this.bodyNode,
        T = Array.from(this.statesByElement.keys()),
        C = Qr(T, this.collectedEnterElements),
        v = new Map(),
        S = 0;
      C.forEach((y, b) => {
        let _ = eo + S++;
        v.set(b, _), y.forEach((k) => ae(k, _));
      });
      let I = [],
        F = new Set(),
        R = new Set();
      for (let y = 0; y < this.collectedLeaveElements.length; y++) {
        let b = this.collectedLeaveElements[y],
          _ = b[fe];
        _ &&
          _.setForRemoval &&
          (I.push(b),
          F.add(b),
          _.hasAnimation
            ? this.driver.query(b, aa, !0).forEach((k) => F.add(k))
            : R.add(b));
      }
      let Q = new Map(),
        V = Qr(T, Array.from(F));
      V.forEach((y, b) => {
        let _ = Ri + S++;
        Q.set(b, _), y.forEach((k) => ae(k, _));
      }),
        e.push(() => {
          C.forEach((y, b) => {
            let _ = v.get(b);
            y.forEach((k) => et(k, _));
          }),
            V.forEach((y, b) => {
              let _ = Q.get(b);
              y.forEach((k) => et(k, _));
            }),
            I.forEach((y) => {
              this.processLeaveNode(y);
            });
        });
      let ze = [],
        ge = [];
      for (let y = this._namespaceList.length - 1; y >= 0; y--)
        this._namespaceList[y].drainQueuedTransitions(t).forEach((_) => {
          let k = _.player,
            z = _.element;
          if ((ze.push(k), this.collectedEnterElements.length)) {
            let U = z[fe];
            if (U && U.setForMove) {
              if (
                U.previousTriggersValues &&
                U.previousTriggersValues.has(_.triggerName)
              ) {
                let De = U.previousTriggersValues.get(_.triggerName),
                  te = this.statesByElement.get(_.element);
                if (te && te.has(_.triggerName)) {
                  let bt = te.get(_.triggerName);
                  (bt.value = De), te.set(_.triggerName, bt);
                }
              }
              k.destroy();
              return;
            }
          }
          let ye = !h || !this.driver.containsElement(h, z),
            Y = Q.get(z),
            Ce = v.get(z),
            L = this._buildInstruction(_, i, Ce, Y, ye);
          if (L.errors && L.errors.length) {
            ge.push(L);
            return;
          }
          if (ye) {
            k.onStart(() => Le(z, L.fromStyles)),
              k.onDestroy(() => xe(z, L.toStyles)),
              r.push(k);
            return;
          }
          if (_.isFallbackTransition) {
            k.onStart(() => Le(z, L.fromStyles)),
              k.onDestroy(() => xe(z, L.toStyles)),
              r.push(k);
            return;
          }
          let un = [];
          L.timelines.forEach((U) => {
            (U.stretchStartingKeyframe = !0),
              this.disabledNodes.has(U.element) || un.push(U);
          }),
            (L.timelines = un),
            i.append(z, L.timelines);
          let Ro = { instruction: L, player: k, element: z };
          s.push(Ro),
            L.queriedElements.forEach((U) => J(a, U, []).push(k)),
            L.preStyleProps.forEach((U, De) => {
              if (U.size) {
                let te = d.get(De);
                te || d.set(De, (te = new Set())),
                  U.forEach((bt, pi) => te.add(pi));
              }
            }),
            L.postStyleProps.forEach((U, De) => {
              let te = p.get(De);
              te || p.set(De, (te = new Set())),
                U.forEach((bt, pi) => te.add(pi));
            });
        });
      if (ge.length) {
        let y = [];
        ge.forEach((b) => {
          y.push(Ts(b.triggerName, b.errors));
        }),
          ze.forEach((b) => b.destroy()),
          this.reportError(y);
      }
      let W = new Map(),
        X = new Map();
      s.forEach((y) => {
        let b = y.element;
        i.has(b) &&
          (X.set(b, b),
          this._beforeAnimationBuild(y.player.namespaceId, y.instruction, W));
      }),
        r.forEach((y) => {
          let b = y.element;
          this._getPreviousPlayers(
            b,
            !1,
            y.namespaceId,
            y.triggerName,
            null
          ).forEach((k) => {
            J(W, b, []).push(k), k.destroy();
          });
        });
      let Pe = I.filter((y) => Wr(y, d, p)),
        Be = new Map();
      $r(Be, this.driver, R, p, be).forEach((y) => {
        Wr(y, d, p) && Pe.push(y);
      });
      let Ae = new Map();
      C.forEach((y, b) => {
        $r(Ae, this.driver, new Set(y), d, Lt);
      }),
        Pe.forEach((y) => {
          let b = Be.get(y),
            _ = Ae.get(y);
          Be.set(
            y,
            new Map([...(b?.entries() ?? []), ...(_?.entries() ?? [])])
          );
        });
      let mi = [],
        mn = [],
        pn = {};
      s.forEach((y) => {
        let { element: b, player: _, instruction: k } = y;
        if (i.has(b)) {
          if (f.has(b)) {
            _.onDestroy(() => xe(b, k.toStyles)),
              (_.disabled = !0),
              _.overrideTotalTime(k.totalTime),
              r.push(_);
            return;
          }
          let z = pn;
          if (X.size > 1) {
            let Y = b,
              Ce = [];
            for (; (Y = Y.parentNode); ) {
              let L = X.get(Y);
              if (L) {
                z = L;
                break;
              }
              Ce.push(Y);
            }
            Ce.forEach((L) => X.set(L, z));
          }
          let ye = this._buildAnimation(_.namespaceId, k, W, o, Ae, Be);
          if ((_.setRealPlayer(ye), z === pn)) mi.push(_);
          else {
            let Y = this.playersByElement.get(z);
            Y && Y.length && (_.parentPlayer = ke(Y)), r.push(_);
          }
        } else
          Le(b, k.fromStyles),
            _.onDestroy(() => xe(b, k.toStyles)),
            mn.push(_),
            f.has(b) && r.push(_);
      }),
        mn.forEach((y) => {
          let b = o.get(y.element);
          if (b && b.length) {
            let _ = ke(b);
            y.setRealPlayer(_);
          }
        }),
        r.forEach((y) => {
          y.parentPlayer ? y.syncPlayerEvents(y.parentPlayer) : y.destroy();
        });
      for (let y = 0; y < I.length; y++) {
        let b = I[y],
          _ = b[fe];
        if ((et(b, Ri), _ && _.hasAnimation)) continue;
        let k = [];
        if (a.size) {
          let ye = a.get(b);
          ye && ye.length && k.push(...ye);
          let Y = this.driver.query(b, zi, !0);
          for (let Ce = 0; Ce < Y.length; Ce++) {
            let L = a.get(Y[Ce]);
            L && L.length && k.push(...L);
          }
        }
        let z = k.filter((ye) => !ye.destroyed);
        z.length ? ua(this, b, z) : this.processLeaveNode(b);
      }
      return (
        (I.length = 0),
        mi.forEach((y) => {
          this.players.push(y),
            y.onDone(() => {
              y.destroy();
              let b = this.players.indexOf(y);
              this.players.splice(b, 1);
            }),
            y.play();
        }),
        mi
      );
    }
    afterFlush(e) {
      this._flushFns.push(e);
    }
    afterFlushAnimationsDone(e) {
      this._whenQuietFns.push(e);
    }
    _getPreviousPlayers(e, t, i, r, o) {
      let s = [];
      if (t) {
        let a = this.playersByQueriedElement.get(e);
        a && (s = a);
      } else {
        let a = this.playersByElement.get(e);
        if (a) {
          let d = !o || o == pt;
          a.forEach((p) => {
            p.queued || (!d && p.triggerName != r) || s.push(p);
          });
        }
      }
      return (
        (i || r) &&
          (s = s.filter(
            (a) => !((i && i != a.namespaceId) || (r && r != a.triggerName))
          )),
        s
      );
    }
    _beforeAnimationBuild(e, t, i) {
      let r = t.triggerName,
        o = t.element,
        s = t.isRemovalTransition ? void 0 : e,
        a = t.isRemovalTransition ? void 0 : r;
      for (let d of t.timelines) {
        let p = d.element,
          f = p !== o,
          h = J(i, p, []);
        this._getPreviousPlayers(p, f, s, a, t.toState).forEach((C) => {
          let v = C.getRealPlayer();
          v.beforeDestroy && v.beforeDestroy(), C.destroy(), h.push(C);
        });
      }
      Le(o, t.fromStyles);
    }
    _buildAnimation(e, t, i, r, o, s) {
      let a = t.triggerName,
        d = t.element,
        p = [],
        f = new Set(),
        h = new Set(),
        T = t.timelines.map((v) => {
          let S = v.element;
          f.add(S);
          let I = S[fe];
          if (I && I.removedBeforeQueried) return new Xe(v.duration, v.delay);
          let F = S !== d,
            R = fa((i.get(S) || la).map((W) => W.getRealPlayer())).filter(
              (W) => {
                let X = W;
                return X.element ? X.element === S : !1;
              }
            ),
            Q = o.get(S),
            V = s.get(S),
            ze = Xr(this._normalizer, v.keyframes, Q, V),
            ge = this._buildPlayer(v, ze, R);
          if ((v.subTimeline && r && h.add(S), F)) {
            let W = new gt(e, a, S);
            W.setRealPlayer(ge), p.push(W);
          }
          return ge;
        });
      p.forEach((v) => {
        J(this.playersByQueriedElement, v.element, []).push(v),
          v.onDone(() => da(this.playersByQueriedElement, v.element, v));
      }),
        f.forEach((v) => ae(v, Br));
      let C = ke(T);
      return (
        C.onDestroy(() => {
          f.forEach((v) => et(v, Br)), xe(d, t.toStyles);
        }),
        h.forEach((v) => {
          J(r, v, []).push(C);
        }),
        C
      );
    }
    _buildPlayer(e, t, i) {
      return t.length > 0
        ? this.driver.animate(e.element, t, e.duration, e.delay, e.easing, i)
        : new Xe(e.duration, e.delay);
    }
  },
  gt = class {
    constructor(e, t, i) {
      (this.namespaceId = e),
        (this.triggerName = t),
        (this.element = i),
        (this._player = new Xe()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(e) {
      this._containsRealPlayer ||
        ((this._player = e),
        this._queuedCallbacks.forEach((t, i) => {
          t.forEach((r) => Ji(e, i, void 0, r));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(e.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(e) {
      this.totalTime = e;
    }
    syncPlayerEvents(e) {
      let t = this._player;
      t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
        e.onDone(() => this.finish()),
        e.onDestroy(() => this.destroy());
    }
    _queueEvent(e, t) {
      J(this._queuedCallbacks, e, []).push(t);
    }
    onDone(e) {
      this.queued && this._queueEvent("done", e), this._player.onDone(e);
    }
    onStart(e) {
      this.queued && this._queueEvent("start", e), this._player.onStart(e);
    }
    onDestroy(e) {
      this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(e) {
      this.queued || this._player.setPosition(e);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(e) {
      let t = this._player;
      t.triggerCallback && t.triggerCallback(e);
    }
  };
function da(n, e, t) {
  let i = n.get(e);
  if (i) {
    if (i.length) {
      let r = i.indexOf(t);
      i.splice(r, 1);
    }
    i.length == 0 && n.delete(e);
  }
  return i;
}
function ma(n) {
  return n ?? null;
}
function Ut(n) {
  return n && n.nodeType === 1;
}
function pa(n) {
  return n == "start" || n == "done";
}
function Gr(n, e) {
  let t = n.style.display;
  return (n.style.display = e ?? "none"), t;
}
function $r(n, e, t, i, r) {
  let o = [];
  t.forEach((d) => o.push(Gr(d)));
  let s = [];
  i.forEach((d, p) => {
    let f = new Map();
    d.forEach((h) => {
      let T = e.computeStyle(p, h, r);
      f.set(h, T), (!T || T.length == 0) && ((p[fe] = ca), s.push(p));
    }),
      n.set(p, f);
  });
  let a = 0;
  return t.forEach((d) => Gr(d, o[a++])), s;
}
function Qr(n, e) {
  let t = new Map();
  if ((n.forEach((a) => t.set(a, [])), e.length == 0)) return t;
  let i = 1,
    r = new Set(e),
    o = new Map();
  function s(a) {
    if (!a) return i;
    let d = o.get(a);
    if (d) return d;
    let p = a.parentNode;
    return t.has(p) ? (d = p) : r.has(p) ? (d = i) : (d = s(p)), o.set(a, d), d;
  }
  return (
    e.forEach((a) => {
      let d = s(a);
      d !== i && t.get(d).push(a);
    }),
    t
  );
}
function ae(n, e) {
  n.classList?.add(e);
}
function et(n, e) {
  n.classList?.remove(e);
}
function ua(n, e, t) {
  ke(t).onDone(() => n.processLeaveNode(e));
}
function fa(n) {
  let e = [];
  return ao(n, e), e;
}
function ao(n, e) {
  for (let t = 0; t < n.length; t++) {
    let i = n[t];
    i instanceof Ei ? ao(i.players, e) : e.push(i);
  }
}
function ha(n, e) {
  let t = Object.keys(n),
    i = Object.keys(e);
  if (t.length != i.length) return !1;
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    if (!e.hasOwnProperty(o) || n[o] !== e[o]) return !1;
  }
  return !0;
}
function Wr(n, e, t) {
  let i = t.get(n);
  if (!i) return !1;
  let r = e.get(n);
  return r ? i.forEach((o) => r.add(o)) : e.set(n, i), t.delete(n), !0;
}
var it = class {
  constructor(e, t, i, r) {
    (this._driver = t),
      (this._normalizer = i),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (o, s) => {}),
      (this._transitionEngine = new Xi(e.body, t, i, r)),
      (this._timelineEngine = new Qi(e.body, t, i)),
      (this._transitionEngine.onRemovalComplete = (o, s) =>
        this.onRemovalComplete(o, s));
  }
  registerTrigger(e, t, i, r, o) {
    let s = e + "-" + r,
      a = this._triggerCache[s];
    if (!a) {
      let d = [],
        p = [],
        f = no(this._driver, o, d, p);
      if (d.length) throw hs(r, d);
      p.length && void 0,
        (a = ta(r, f, this._normalizer)),
        (this._triggerCache[s] = a);
    }
    this._transitionEngine.registerTrigger(t, r, a);
  }
  register(e, t) {
    this._transitionEngine.register(e, t);
  }
  destroy(e, t) {
    this._transitionEngine.destroy(e, t);
  }
  onInsert(e, t, i, r) {
    this._transitionEngine.insertNode(e, t, i, r);
  }
  onRemove(e, t, i) {
    this._transitionEngine.removeNode(e, t, i);
  }
  disableAnimations(e, t) {
    this._transitionEngine.markElementAsDisabled(e, t);
  }
  process(e, t, i, r) {
    if (i.charAt(0) == "@") {
      let [o, s] = Rr(i),
        a = r;
      this._timelineEngine.command(o, t, s, a);
    } else this._transitionEngine.trigger(e, t, i, r);
  }
  listen(e, t, i, r, o) {
    if (i.charAt(0) == "@") {
      let [s, a] = Rr(i);
      return this._timelineEngine.listen(s, t, a, o);
    }
    return this._transitionEngine.listen(e, t, i, r, o);
  }
  flush(e = -1) {
    this._transitionEngine.flush(e);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(e) {
    this._transitionEngine.afterFlushAnimationsDone(e);
  }
};
function ga(n, e) {
  let t = null,
    i = null;
  return (
    Array.isArray(e) && e.length
      ? ((t = Fi(e[0])), e.length > 1 && (i = Fi(e[e.length - 1])))
      : e instanceof Map && (t = Fi(e)),
    t || i ? new Yi(n, t, i) : null
  );
}
var tt = class tt {
  constructor(e, t, i) {
    (this._element = e),
      (this._startStyles = t),
      (this._endStyles = i),
      (this._state = 0);
    let r = tt.initialStylesByElement.get(e);
    r || tt.initialStylesByElement.set(e, (r = new Map())),
      (this._initialStyles = r);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        xe(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (xe(this._element, this._initialStyles),
        this._endStyles &&
          (xe(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (tt.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (Le(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (Le(this._element, this._endStyles), (this._endStyles = null)),
        xe(this._element, this._initialStyles),
        (this._state = 3));
  }
};
tt.initialStylesByElement = new WeakMap();
var Yi = tt;
function Fi(n) {
  let e = null;
  return (
    n.forEach((t, i) => {
      ya(i) && ((e = e || new Map()), e.set(i, t));
    }),
    e
  );
}
function ya(n) {
  return n === "display" || n === "position";
}
var Jt = class {
    constructor(e, t, i, r) {
      (this.element = e),
        (this.keyframes = t),
        (this.options = i),
        (this._specialStyles = r),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = i.duration),
        (this._delay = i.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((e) => e()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let e = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        e,
        this.options
      )),
        (this._finalKeyframe = e.length ? e[e.length - 1] : new Map());
      let t = () => this._onFinish();
      this.domPlayer.addEventListener("finish", t),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", t);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(e) {
      let t = [];
      return (
        e.forEach((i) => {
          t.push(Object.fromEntries(i));
        }),
        t
      );
    }
    _triggerWebAnimation(e, t, i) {
      return e.animate(this._convertKeyframesToObject(t), i);
    }
    onStart(e) {
      this._originalOnStartFns.push(e), this._onStartFns.push(e);
    }
    onDone(e) {
      this._originalOnDoneFns.push(e), this._onDoneFns.push(e);
    }
    onDestroy(e) {
      this._onDestroyFns.push(e);
    }
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((e) => e()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((e) => e()),
        (this._onDestroyFns = []));
    }
    setPosition(e) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = e * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let e = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((i, r) => {
          r !== "offset" && e.set(r, this._finished ? i : on(this.element, r));
        }),
        (this.currentSnapshot = e);
    }
    triggerCallback(e) {
      let t = e === "start" ? this._onStartFns : this._onDoneFns;
      t.forEach((i) => i()), (t.length = 0);
    }
  },
  ei = class {
    validateStyleProperty(e) {
      return !0;
    }
    validateAnimatableStyleProperty(e) {
      return !0;
    }
    matchesElement(e, t) {
      return !1;
    }
    containsElement(e, t) {
      return Yr(e, t);
    }
    getParentElement(e) {
      return tn(e);
    }
    query(e, t, i) {
      return Zr(e, t, i);
    }
    computeStyle(e, t, i) {
      return on(e, t);
    }
    animate(e, t, i, r, o, s = []) {
      let a = r == 0 ? "both" : "forwards",
        d = { duration: i, delay: r, fill: a };
      o && (d.easing = o);
      let p = new Map(),
        f = s.filter((C) => C instanceof Jt);
      Rs(i, r) &&
        f.forEach((C) => {
          C.currentSnapshot.forEach((v, S) => p.set(S, v));
        });
      let h = Ns(t).map((C) => new Map(C));
      h = zs(e, h, p);
      let T = ga(e, h);
      return new Jt(e, h, d, T);
    }
  };
var Kt = "@",
  lo = "@.disabled",
  ti = class {
    constructor(e, t, i, r) {
      (this.namespaceId = e),
        (this.delegate = t),
        (this.engine = i),
        (this._onDestroy = r),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(e) {
      this.delegate.destroyNode?.(e);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(e, t) {
      return this.delegate.createElement(e, t);
    }
    createComment(e) {
      return this.delegate.createComment(e);
    }
    createText(e) {
      return this.delegate.createText(e);
    }
    appendChild(e, t) {
      this.delegate.appendChild(e, t),
        this.engine.onInsert(this.namespaceId, t, e, !1);
    }
    insertBefore(e, t, i, r = !0) {
      this.delegate.insertBefore(e, t, i),
        this.engine.onInsert(this.namespaceId, t, e, r);
    }
    removeChild(e, t, i) {
      this.engine.onRemove(this.namespaceId, t, this.delegate);
    }
    selectRootElement(e, t) {
      return this.delegate.selectRootElement(e, t);
    }
    parentNode(e) {
      return this.delegate.parentNode(e);
    }
    nextSibling(e) {
      return this.delegate.nextSibling(e);
    }
    setAttribute(e, t, i, r) {
      this.delegate.setAttribute(e, t, i, r);
    }
    removeAttribute(e, t, i) {
      this.delegate.removeAttribute(e, t, i);
    }
    addClass(e, t) {
      this.delegate.addClass(e, t);
    }
    removeClass(e, t) {
      this.delegate.removeClass(e, t);
    }
    setStyle(e, t, i, r) {
      this.delegate.setStyle(e, t, i, r);
    }
    removeStyle(e, t, i) {
      this.delegate.removeStyle(e, t, i);
    }
    setProperty(e, t, i) {
      t.charAt(0) == Kt && t == lo
        ? this.disableAnimations(e, !!i)
        : this.delegate.setProperty(e, t, i);
    }
    setValue(e, t) {
      this.delegate.setValue(e, t);
    }
    listen(e, t, i) {
      return this.delegate.listen(e, t, i);
    }
    disableAnimations(e, t) {
      this.engine.disableAnimations(e, t);
    }
  },
  Zi = class extends ti {
    constructor(e, t, i, r, o) {
      super(t, i, r, o), (this.factory = e), (this.namespaceId = t);
    }
    setProperty(e, t, i) {
      t.charAt(0) == Kt
        ? t.charAt(1) == "." && t == lo
          ? ((i = i === void 0 ? !0 : !!i), this.disableAnimations(e, i))
          : this.engine.process(this.namespaceId, e, t.slice(1), i)
        : this.delegate.setProperty(e, t, i);
    }
    listen(e, t, i) {
      if (t.charAt(0) == Kt) {
        let r = va(e),
          o = t.slice(1),
          s = "";
        return (
          o.charAt(0) != Kt && ([o, s] = ba(o)),
          this.engine.listen(this.namespaceId, r, o, s, (a) => {
            let d = a._data || -1;
            this.factory.scheduleListenerCallback(d, i, a);
          })
        );
      }
      return this.delegate.listen(e, t, i);
    }
  };
function va(n) {
  switch (n) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return n;
  }
}
function ba(n) {
  let e = n.indexOf("."),
    t = n.substring(0, e),
    i = n.slice(e + 1);
  return [t, i];
}
var ii = class {
  constructor(e, t, i) {
    (this.delegate = e),
      (this.engine = t),
      (this._zone = i),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (t.onRemovalComplete = (r, o) => {
        let s = o?.parentNode(r);
        s && o.removeChild(s, r);
      });
  }
  createRenderer(e, t) {
    let i = "",
      r = this.delegate.createRenderer(e, t);
    if (!e || !t?.data?.animation) {
      let p = this._rendererCache,
        f = p.get(r);
      if (!f) {
        let h = () => p.delete(r);
        (f = new ti(i, r, this.engine, h)), p.set(r, f);
      }
      return f;
    }
    let o = t.id,
      s = t.id + "-" + this._currentId;
    this._currentId++, this.engine.register(s, e);
    let a = (p) => {
      Array.isArray(p)
        ? p.forEach(a)
        : this.engine.registerTrigger(o, s, e, p.name, p);
    };
    return t.data.animation.forEach(a), new Zi(this, s, r, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(e, t, i) {
    if (e >= 0 && e < this._microtaskId) {
      this._zone.run(() => t(i));
      return;
    }
    let r = this._animationCallbacksBuffer;
    r.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          r.forEach((o) => {
            let [s, a] = o;
            s(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      r.push([t, i]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
var _a = (() => {
  let e = class e extends it {
    constructor(i, r, o) {
      super(i, r, o, He(_n, { optional: !0 }));
    }
    ngOnDestroy() {
      this.flush();
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(j(yi), j(Fe), j(Re));
  }),
    (e.ɵprov = le({ token: e, factory: e.ɵfac }));
  let n = e;
  return n;
})();
function Sa() {
  return new Qt();
}
function wa(n, e, t) {
  return new ii(n, e, t);
}
var mo = [
    { provide: Re, useFactory: Sa },
    { provide: it, useClass: _a },
    { provide: Sn, useFactory: wa, deps: [Fn, it, Cn] },
  ],
  co = [
    { provide: Fe, useFactory: () => new ei() },
    { provide: gi, useValue: "BrowserAnimations" },
    ...mo,
  ],
  Ca = [
    { provide: Fe, useClass: nn },
    { provide: gi, useValue: "NoopAnimations" },
    ...mo,
  ],
  po = (() => {
    let e = class e {
      static withConfig(i) {
        return { ngModule: e, providers: i.disableAnimations ? Ca : co };
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵmod = q({ type: e })),
      (e.ɵinj = B({ providers: co, imports: [Tt] }));
    let n = e;
    return n;
  })();
var uo = (() => {
  let e = class e {
    constructor(i, r) {
      (this.loaderService = i), (this.cdr = r), (this.isLoading = !1);
    }
    ngOnInit() {
      this.loaderService.getLoaderState().subscribe((i) => {
        (this.isLoading = i), this.cdr.detectChanges();
      });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(dr), x(wn));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function (r, o) {
        r & 1 && u(0, "router-outlet");
      },
      dependencies: [Ke],
      styles: [
        ".app-loader[_ngcontent-%COMP%]{position:absolute;z-index:1000;width:100%;background:#0202024b;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}#ngx-facebook-messenger[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{bottom:36px;right:0;left:0}#ngx-facebook-messenger[_ngcontent-%COMP%]   .wrapper-icon-text[_ngcontent-%COMP%]{left:12px;background:#8278ff}",
      ],
    }));
  let n = e;
  return n;
})();
var fo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-empty-page"]],
      decls: 48,
      vars: 0,
      consts: [
        [
          1,
          "w-full",
          "h-screen",
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
        ],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "data-name",
          "Layer 1",
          "viewBox",
          "0 0 860.13137 571.14799",
          0,
          "xmlns",
          "xlink",
          "http://www.w3.org/1999/xlink",
          1,
          "w-1/2",
          "md:1/3",
          "lg:w-1/4",
          "text-blue-600",
        ],
        [
          "d",
          "M605.66974,324.95306c-7.66934-12.68446-16.7572-26.22768-30.98954-30.36953-16.482-4.7965-33.4132,4.73193-47.77473,14.13453a1392.15692,1392.15692,0,0,0-123.89338,91.28311l.04331.49238q46.22556-3.1878,92.451-6.37554c22.26532-1.53546,45.29557-3.2827,64.97195-13.8156,7.46652-3.99683,14.74475-9.33579,23.20555-9.70782,10.51175-.46217,19.67733,6.87923,26.8802,14.54931,42.60731,45.371,54.937,114.75409,102.73817,154.61591A1516.99453,1516.99453,0,0,0,605.66974,324.95306Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M867.57068,709.78146c-4.71167-5.94958-6.6369-7.343-11.28457-13.34761q-56.7644-73.41638-106.70791-151.79237-33.92354-53.23-64.48275-108.50439-14.54864-26.2781-28.29961-52.96872-10.67044-20.6952-20.8646-41.63793c-1.94358-3.98782-3.8321-7.99393-5.71122-12.00922-4.42788-9.44232-8.77341-18.93047-13.43943-28.24449-5.31686-10.61572-11.789-21.74485-21.55259-28.877a29.40493,29.40493,0,0,0-15.31855-5.89458c-7.948-.51336-15.28184,2.76855-22.17568,6.35295-50.43859,26.301-97.65922,59.27589-140.3696,96.79771A730.77816,730.77816,0,0,0,303.32241,496.24719c-1.008,1.43927-3.39164.06417-2.37419-1.38422q6.00933-8.49818,12.25681-16.81288A734.817,734.817,0,0,1,500.80465,303.06436q18.24824-11.82581,37.18269-22.54245c6.36206-3.60275,12.75188-7.15967,19.25136-10.49653,6.37146-3.27274,13.13683-6.21547,20.41563-6.32547,24.7701-.385,37.59539,27.66695,46.40506,46.54248q4.15283,8.9106,8.40636,17.76626,16.0748,33.62106,33.38729,66.628,10.68453,20.379,21.83683,40.51955,34.7071,62.71816,73.77854,122.897c34.5059,53.1429,68.73651,100.08874,108.04585,149.78472C870.59617,709.21309,868.662,711.17491,867.57068,709.78146Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#e4e4e4",
        ],
        [
          "d",
          "M414.91613,355.804c-1.43911-1.60428-2.86927-3.20856-4.31777-4.81284-11.42244-12.63259-23.6788-25.11847-39.3644-32.36067a57.11025,57.11025,0,0,0-23.92679-5.54622c-8.56213.02753-16.93178,2.27348-24.84306,5.41792-3.74034,1.49427-7.39831,3.1902-11.00078,4.99614-4.11634,2.07182-8.15927,4.28118-12.1834,6.50883q-11.33112,6.27044-22.36816,13.09089-21.9606,13.57221-42.54566,29.21623-10.67111,8.11311-20.90174,16.75788-9.51557,8.03054-18.64618,16.492c-1.30169,1.20091-3.24527-.74255-1.94358-1.94347,1.60428-1.49428,3.22691-2.97938,4.84955-4.44613q6.87547-6.21546,13.9712-12.19257,12.93921-10.91827,26.54851-20.99312,21.16293-15.67614,43.78288-29.22541,11.30361-6.76545,22.91829-12.96259c2.33794-1.24675,4.70318-2.466,7.09572-3.6211a113.11578,113.11578,0,0,1,16.86777-6.86632,60.0063,60.0063,0,0,1,25.476-2.50265,66.32706,66.32706,0,0,1,23.50512,8.1314c15.40091,8.60812,27.34573,21.919,38.97,34.90915C418.03337,355.17141,416.09875,357.12405,414.91613,355.804Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#e4e4e4",
        ],
        [
          "d",
          "M730.47659,486.71092l36.90462-13.498,18.32327-6.70183c5.96758-2.18267,11.92082-4.66747,18.08988-6.23036a28.53871,28.53871,0,0,1,16.37356.20862,37.73753,37.73753,0,0,1,12.771,7.91666,103.63965,103.63965,0,0,1,10.47487,11.18643c3.98932,4.79426,7.91971,9.63877,11.86772,14.46706q24.44136,29.89094,48.56307,60.04134,24.12117,30.14991,47.91981,60.556,23.85681,30.48041,47.38548,61.21573,2.88229,3.76518,5.75966,7.53415c1.0598,1.38809,3.44949.01962,2.37472-1.38808Q983.582,650.9742,959.54931,620.184q-24.09177-30.86383-48.51647-61.46586-24.42421-30.60141-49.17853-60.93743-6.16706-7.55761-12.35445-15.09858c-3.47953-4.24073-6.91983-8.52718-10.73628-12.47427-7.00539-7.24516-15.75772-13.64794-26.23437-13.82166-6.15972-.10214-12.121,1.85248-17.844,3.92287-6.16968,2.232-12.32455,4.50571-18.48633,6.75941l-37.16269,13.59243-9.29067,3.3981c-1.64875.603-.93651,3.2619.73111,2.652Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#e4e4e4",
        ],
        [
          "d",
          "M366.37741,334.52609c-18.75411-9.63866-42.77137-7.75087-60.00508,4.29119a855.84708,855.84708,0,0,1,97.37056,22.72581C390.4603,353.75916,380.07013,341.5635,366.37741,334.52609Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M306.18775,338.7841l-3.61042,2.93462c1.22123-1.02713,2.4908-1.99013,3.795-2.90144C306.31073,338.80665,306.24935,338.79473,306.18775,338.7841Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M831.54929,486.84576c-3.6328-4.42207-7.56046-9.05222-12.99421-10.84836l-5.07308.20008A575.436,575.436,0,0,0,966.74929,651.418Q899.14929,569.13192,831.54929,486.84576Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M516.08388,450.36652A37.4811,37.4811,0,0,0,531.015,471.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M749.08388,653.36652A37.4811,37.4811,0,0,0,764.015,674.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        [
          "d",
          "M284.08388,639.36652A37.4811,37.4811,0,0,0,299.015,660.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f2f2f2",
        ],
        ["cx", "649.24878", "cy", "51", "r", "51", "fill", "currentColor"],
        [
          "d",
          "M911.21851,176.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C957.07935,195.76,935.93537,179.63727,911.21851,176.29639Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f0f0f0",
        ],
        [
          "d",
          "M805.21851,244.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C851.07935,263.76,829.93537,247.63727,805.21851,244.29639Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#f0f0f0",
        ],
        [
          "d",
          "M1020.94552,257.15423a.98189.98189,0,0,1-.30176-.04688C756.237,173.48919,523.19942,184.42376,374.26388,208.32122c-20.26856,3.251-40.59131,7.00586-60.40381,11.16113-5.05811,1.05957-10.30567,2.19532-15.59668,3.37793-6.31885,1.40723-12.55371,2.85645-18.53223,4.30567q-3.873.917-7.59472,1.84863c-3.75831.92773-7.57178,1.89453-11.65967,2.957-4.56787,1.17774-9.209,2.41309-13.79737,3.67188a.44239.44239,0,0,1-.05127.01465l.00049.001c-5.18261,1.415-10.33789,2.8711-15.32324,4.3252-2.69824.77929-5.30371,1.54785-7.79932,2.30664-.2788.07715-.52587.15136-.77636.22754l-.53614.16308c-.31054.09473-.61718.1875-.92382.27539l-.01953.00586.00048.001-.81152.252c-.96777.293-1.91211.5791-2.84082.86426-24.54492,7.56641-38.03809,12.94922-38.17139,13.00195a1,1,0,1,1-.74414-1.85644c.13428-.05274,13.69336-5.46289,38.32764-13.05762.93213-.28613,1.87891-.57226,2.84961-.86621l.7539-.23438c.02588-.00976.05176-.01757.07813-.02539.30518-.08691.60986-.17968.91943-.27343l.53711-.16309c.26758-.08105.53125-.16113.80127-.23535,2.47852-.75391,5.09278-1.52441,7.79785-2.30664,4.98731-1.45508,10.14746-2.91113,15.334-4.32813.01611-.00586.03271-.00976.04883-.01464v-.001c4.60449-1.2627,9.26269-2.50293,13.84521-3.68457,4.09424-1.06348,7.915-2.03223,11.67969-2.96192q3.73755-.93017,7.60937-1.85253c5.98536-1.45118,12.23291-2.90235,18.563-4.3125,5.29932-1.1836,10.55567-2.32227,15.62207-3.38282,19.84326-4.16211,40.19776-7.92285,60.49707-11.17871C523.09591,182.415,756.46749,171.46282,1021.2463,255.2011a.99974.99974,0,0,1-.30078,1.95313Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#ccc",
        ],
        [
          "d",
          "M432.92309,584.266a6.72948,6.72948,0,0,0-1.7-2.67,6.42983,6.42983,0,0,0-.92-.71c-2.61-1.74-6.51-2.13-8.99,0a5.81012,5.81012,0,0,0-.69.71q-1.11,1.365-2.28,2.67c-1.28,1.46-2.59,2.87-3.96,4.24-.39.38-.78.77-1.18,1.15-.23.23-.46.45-.69.67-.88.84-1.78,1.65-2.69,2.45-.48.43-.96.85-1.45,1.26-.73.61-1.46,1.22-2.2,1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01,0-.02,0-.03.02a.17861.17861,0,0,0-.07.05c-.22.15-.37.25-.48.34.04-.01995.08-.05.12-.07-.18.14-.37.28-.55.42-1.75,1.29-3.54,2.53-5.37,3.69a99.21022,99.21022,0,0,1-14.22,7.55c-.33.13-.67.27-1.01.4a85.96993,85.96993,0,0,1-40.85,6.02q-2.13008-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.93186,97.93186,0,0,1-18.02-5.44,118.65185,118.65185,0,0,1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11,1.15-2.82,2.28-5.64,3.38-8.48.55-1.37,1.08-2.74,1.6-4.12,4.09-10.63,7.93-21.36,11.61-32.13q5.58-16.365,10.53-32.92.51-1.68.99-3.36,2.595-8.745,4.98-17.53c.15-.56994.31-1.12994.45-1.7q.68994-2.52,1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.63441,7.63441,0,0,0-9.22,5.24c-.43,1.62-.86,3.23-1.3,4.85q-3.165,11.74494-6.66,23.41-.51,1.68-1.02,3.36-7.71,25.41-16.93,50.31-1.11,3.015-2.25,6.01c-.37.98-.74,1.96-1.12,2.94-.73,1.93-1.48,3.86-2.23,5.79-.43006,1.13-.87006,2.26-1.31,3.38-.29.71-.57,1.42-.85,2.12a41.80941,41.80941,0,0,0-8.81-2.12l-.48-.06a27.397,27.397,0,0,0-7.01.06,23.91419,23.91419,0,0,0-17.24,10.66c-4.77,7.51-4.71,18.25,1.98,24.63,6.89,6.57,17.32,6.52,25.43,2.41a28.35124,28.35124,0,0,0,10.52-9.86,50.56939,50.56939,0,0,0,2.74-4.65c.21.14.42.28.63.43.8.56,1.6,1.13,2.39,1.69a111.73777,111.73777,0,0,0,14.51,8.91,108.35887,108.35887,0,0,0,34.62,10.47c.27.03.53.07.8.1,1.33.17,2.67.3,4.01.41a103.78229,103.78229,0,0,0,55.58-11.36q2.175-1.125,4.31-2.36,3.315-1.92,6.48-4.08c1.15-.78,2.27-1.57,3.38-2.4a101.04244,101.04244,0,0,0,13.51-11.95q2.35491-2.475,4.51-5.11005a8.0612,8.0612,0,0,0,2.2-5.3A7.5644,7.5644,0,0,0,432.92309,584.266Zm-165.59,23.82c.21-.15.42-.31.62-.47C267.89312,607.766,267.60308,607.936,267.33312,608.086Zm3.21-3.23c-.23.26-.44.52-.67.78a23.36609,23.36609,0,0,1-2.25,2.2c-.11.1-.23.2-.35.29a.00976.00976,0,0,0-.01.01,3.80417,3.80417,0,0,0-.42005.22q-.645.39-1.31994.72a17.00459,17.00459,0,0,1-2.71.75,16.79925,16.79925,0,0,1-2.13.02h-.02a14.82252,14.82252,0,0,1-1.45-.4c-.24-.12-.47-.25994-.7-.4-.09-.08-.17005-.16-.22-.21a2.44015,2.44015,0,0,1-.26995-.29.0098.0098,0,0,0-.01-.01c-.11005-.2-.23005-.4-.34-.6a.031.031,0,0,1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51066,12.51066,0,0,1,.01-1.37,13.4675,13.4675,0,0,1,.54-1.88,11.06776,11.06776,0,0,1,.69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.02212,18.02212,0,0,1,1.75-1.01,19.48061,19.48061,0,0,1,2.93-.79,24.98945,24.98945,0,0,1,4.41.04,30.30134,30.30134,0,0,1,4.1,1.01,36.94452,36.94452,0,0,1-2.77,4.54C270.6231,604.746,270.58312,604.806,270.54308,604.856Zm-11.12-3.29a2.18029,2.18029,0,0,1-.31.38995A1.40868,1.40868,0,0,1,259.42309,601.566Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M402.86309,482.136q-.13494,4.71-.27,9.42-.285,10.455-.59,20.92-.315,11.775-.66,23.54-.165,6.07507-.34,12.15-.465,16.365-.92,32.72c-.03,1.13-.07,2.25-.1,3.38q-.225,8.11506-.45,16.23-.255,8.805-.5,17.61-.18,6.59994-.37,13.21-1.34994,47.895-2.7,95.79a7.64844,7.64844,0,0,1-7.5,7.5,7.56114,7.56114,0,0,1-7.5-7.5q.75-26.94,1.52-53.88.675-24.36,1.37-48.72.225-8.025.45-16.06.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96q.66-23.475,1.32-46.96.27-9.24.52-18.49.3-10.545.6-21.08c.09-3.09.17005-6.17.26-9.26a7.64844,7.64844,0,0,1,7.5-7.5A7.56116,7.56116,0,0,1,402.86309,482.136Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M814.29118,484.2172a893.23753,893.23753,0,0,1-28.16112,87.94127c-3.007,7.94641-6.08319,15.877-9.3715,23.71185l.75606-1.7916a54.58274,54.58274,0,0,1-5.58953,10.61184q-.22935.32119-.46685.63642,1.16559-1.49043.4428-.589c-.25405.30065-.5049.60219-.7676.89546a23.66436,23.66436,0,0,1-2.2489,2.20318q-.30139.25767-.61188.5043l.93783-.729c-.10884.25668-.87275.59747-1.11067.74287a18.25362,18.25362,0,0,1-2.40479,1.21853l1.7916-.75606a19.0859,19.0859,0,0,1-4.23122,1.16069l1.9938-.26791a17.02055,17.02055,0,0,1-4.29785.046l1.99379.2679a14.0022,14.0022,0,0,1-3.40493-.917l1.79159.75606a12.01175,12.01175,0,0,1-1.67882-.89614c-.27135-.17688-1.10526-.80852-.01487.02461,1.13336.86595.14562.07434-.08763-.15584-.19427-.19171-.36962-.4-.55974-.595-.88208-.90454.99637,1.55662.39689.49858a18.18179,18.18179,0,0,1-.87827-1.63672l.75606,1.7916a11.92493,11.92493,0,0,1-.728-2.65143l.26791,1.9938a13.65147,13.65147,0,0,1-.00316-3.40491l-.2679,1.9938a15.96371,15.96371,0,0,1,.99486-3.68011l-.75606,1.7916a16.72914,16.72914,0,0,1,1.17794-2.29848,6.72934,6.72934,0,0,1,.72851-1.0714c.04915.01594-1.26865,1.51278-.56937.757.1829-.19767.354-.40592.539-.602.29617-.31382.61354-.60082.92561-.89791,1.04458-.99442-1.46188.966-.25652.17907a19.0489,19.0489,0,0,1,2.74925-1.49923l-1.79159.75606a20.31136,20.31136,0,0,1,4.99523-1.33984l-1.9938.2679a25.62828,25.62828,0,0,1,6.46062.07647l-1.9938-.2679a33.21056,33.21056,0,0,1,7.89178,2.2199l-1.7916-.75606c5.38965,2.31383,10.16308,5.74926,14.928,9.118a111.94962,111.94962,0,0,0,14.50615,8.9065,108.38849,108.38849,0,0,0,34.62226,10.47371,103.93268,103.93268,0,0,0,92.58557-36.75192,8.07773,8.07773,0,0,0,2.1967-5.3033,7.63232,7.63232,0,0,0-2.1967-5.3033c-2.75154-2.52586-7.94926-3.239-10.6066,0a95.63575,95.63575,0,0,1-8.10664,8.72692q-2.01736,1.914-4.14232,3.70983-1.21364,1.02588-2.46086,2.01121c-.3934.31081-1.61863,1.13807.26309-.19744-.43135.30614-.845.64036-1.27058.95478a99.26881,99.26881,0,0,1-20.33215,11.56478l1.79159-.75606a96.8364,96.8364,0,0,1-24.17119,6.62249l1.99379-.2679a97.64308,97.64308,0,0,1-25.75362-.03807l1.99379.2679a99.79982,99.79982,0,0,1-24.857-6.77027l1.7916.75607a116.02515,116.02515,0,0,1-21.7364-12.59112,86.87725,86.87725,0,0,0-11.113-6.99417,42.8238,42.8238,0,0,0-14.43784-4.38851c-9.43884-1.11076-19.0571,2.56562-24.24624,10.72035-4.77557,7.50482-4.71394,18.24362,1.97369,24.62519,6.8877,6.5725,17.31846,6.51693,25.43556,2.40567,7.81741-3.95946,12.51288-12.18539,15.815-19.94186,7.43109-17.45514,14.01023-35.31364,20.1399-53.263q9.09651-26.63712,16.49855-53.81332.91661-3.36581,1.80683-6.73869c1.001-3.78869-1.26094-8.32-5.23829-9.22589a7.63317,7.63317,0,0,0-9.22589,5.23829Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M889.12382,482.13557l-2.69954,95.79311-2.68548,95.29418-1.5185,53.88362a7.56465,7.56465,0,0,0,7.5,7.5,7.64923,7.64923,0,0,0,7.5-7.5l2.69955-95.79311,2.68548-95.29418,1.51849-53.88362a7.56465,7.56465,0,0,0-7.5-7.5,7.64923,7.64923,0,0,0-7.5,7.5Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M629.52566,700.36106h2.32885V594.31942h54.32863v-2.32291H631.85451V547.25214H673.8102q-.92256-1.17339-1.89893-2.31694H631.85451V515.38231c-.7703-.32846-1.54659-.64493-2.32885-.9435V544.9352h-45.652V507.07c-.78227.03583-1.55258.08959-2.3289.15527v37.71h-36.4201V516.68409c-.78227.34636-1.55258.71061-2.31694,1.0928V544.9352h-30.6158v2.31694h30.6158v44.74437h-30.6158v2.32291h30.6158V700.36106h2.31694V594.31942a36.41283,36.41283,0,0,1,36.4201,36.42007v69.62157h2.3289V594.31942h45.652Zm-84.401-108.36455V547.25214h36.4201v44.74437Zm38.749,0V547.25214h.91362a44.74135,44.74135,0,0,1,44.73842,44.74437Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "opacity",
          "0.2",
        ],
        [
          "d",
          "M615.30309,668.566a63.05854,63.05854,0,0,1-20.05,33.7c-.74.64-1.48,1.26-2.25,1.87q-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623,37.623,0,0,1-3.3-32.44c2.64-7.12,7.42-13.41,12.12-19.65,6.49-8.62,12.8-17.14,13.03-27.65a60.54415,60.54415,0,0,1,7.9,13.33,16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32a63.99025,63.99025,0,0,1,2.45,12.18A61.18851,61.18851,0,0,1,615.30309,668.566Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M648.50311,642.356c-5.9,4.29-9.35,10.46-12.03,17.26a16.62776,16.62776,0,0,0-7.17,4.58c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39-2.68,8.04-5.14,16.36-9.88,23.15a36.98942,36.98942,0,0,1-12.03,10.91,38.49166,38.49166,0,0,1-4.02,1.99q-7.62.585-14.95,1.25-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825,0-1.65a63.30382,63.30382,0,0,1,15.25-39.86c.45-.52.91-1.03,1.38-1.54a61.7925,61.7925,0,0,1,16.81-12.7A62.65425,62.65425,0,0,1,648.50311,642.356Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "currentColor",
        ],
        [
          "d",
          "M589.16308,699.526l-1.15,3.4-.58,1.73c-1.53.14-3.04.29-4.54.43l-.27.03c-1.66.17-3.31.34-4.96.51-.43-.5-.86-1.01-1.28-1.53a62.03045,62.03045,0,0,1,8.07-87.11c-1.32,6.91.22,13.53,2.75,20.1-.27.11-.53.22-.78.34a16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32q.705.075,1.41.15c.07.15.13.29.2.44,2.85,6.18,5.92,12.39,7.65,18.83a43.66591,43.66591,0,0,1,1.02,4.91A37.604,37.604,0,0,1,589.16308,699.526Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "currentColor",
        ],
        [
          "d",
          "M689.82123,554.48655c-8.60876-16.79219-21.94605-30.92088-37.63219-41.30357a114.2374,114.2374,0,0,0-52.5626-18.37992q-3.69043-.33535-7.399-.39281c-2.92141-.04371-46.866,12.63176-61.58712,22.98214a114.29462,114.29462,0,0,0-35.333,39.527,102.49972,102.49972,0,0,0-12.12557,51.6334,113.56387,113.56387,0,0,0,14.70268,51.47577,110.47507,110.47507,0,0,0,36.44425,38.74592C549.66655,708.561,565.07375,734.51,583.1831,735.426c18.24576.923,39.05418-23.55495,55.6951-30.98707a104.42533,104.42533,0,0,0,41.72554-34.005,110.24964,110.24964,0,0,0,19.599-48.94777c2.57368-18.08313,1.37415-36.73271-4.80123-54.01627a111.85969,111.85969,0,0,0-5.58024-12.9833c-1.77961-3.50519-6.996-4.7959-10.26142-2.69063a7.67979,7.67979,0,0,0-2.69064,10.26142q1.56766,3.08773,2.91536,6.27758l-.75606-1.7916a101.15088,101.15088,0,0,1,6.87641,25.53816l-.26791-1.99379a109.2286,109.2286,0,0,1-.06613,28.68252l.26791-1.9938a109.73379,109.73379,0,0,1-7.55462,27.67419l.75606-1.79159a104.212,104.212,0,0,1-6.67151,13.09835q-1.92308,3.18563-4.08062,6.22159c-.63172.8881-1.28287,1.761-1.939,2.63114-.85625,1.13555,1.16691-1.48321.28228-.36941-.15068.18972-.30049.3801-.45182.5693q-.68121.85165-1.3818,1.68765a93.61337,93.61337,0,0,1-10.17647,10.38359q-1.36615,1.19232-2.77786,2.33115c-.46871.37832-.932.77269-1.42079,1.12472.01861-.0134,1.57956-1.19945.65556-.511-.2905.21644-.57851.43619-.86961.65184q-2.90994,2.1558-5.97433,4.092a103.48509,103.48509,0,0,1-14.75565,7.7131l1.7916-.75606a109.21493,109.21493,0,0,1-27.59663,7.55154l1.9938-.26791a108.15361,108.15361,0,0,1-28.58907.0506l1.99379.2679a99.835,99.835,0,0,1-25.09531-6.78448l1.79159.75607a93.64314,93.64314,0,0,1-13.41605-6.99094q-3.17437-2-6.18358-4.24743c-.2862-.21359-.56992-.43038-.855-.64549-.9155-.69088.65765.50965.67021.51787a19.16864,19.16864,0,0,1-1.535-1.22469q-1.45353-1.18358-2.86136-2.4218a101.98931,101.98931,0,0,1-10.49319-10.70945q-1.21308-1.43379-2.37407-2.91054c-.33524-.4263-.9465-1.29026.40424.5289-.17775-.23939-.36206-.47414-.54159-.71223q-.64657-.85751-1.27568-1.72793-2.203-3.048-4.18787-6.24586a109.29037,109.29037,0,0,1-7.8054-15.10831l.75606,1.7916a106.58753,106.58753,0,0,1-7.34039-26.837l.26791,1.9938a97.86589,97.86589,0,0,1-.04843-25.63587l-.2679,1.9938A94.673,94.673,0,0,1,505.27587,570.55l-.75606,1.7916a101.55725,101.55725,0,0,1,7.19519-13.85624q2.0655-3.32328,4.37767-6.4847.52528-.71832,1.06244-1.42786c.324-.4279,1.215-1.49333-.30537.38842.14906-.18449.29252-.37428.43942-.56041q1.26882-1.60756,2.59959-3.1649A107.40164,107.40164,0,0,1,530.772,536.21508q1.47408-1.29171,2.99464-2.52906.6909-.56218,1.39108-1.11284c.18664-.14673.37574-.29073.56152-.43858-1.99743,1.58953-.555.43261-.10157.09288q3.13393-2.34833,6.43534-4.46134a103.64393,103.64393,0,0,1,15.38655-8.10791l-1.7916.75606c7.76008-3.25839,42.14086-10.9492,48.394-10.10973l-1.99379-.26791A106.22471,106.22471,0,0,1,628.768,517.419l-1.7916-.75606a110.31334,110.31334,0,0,1,12.6002,6.32922q3.04344,1.78405,5.96742,3.76252,1.38351.93658,2.73809,1.915.677.48917,1.34626.98885c.24789.185.49386.37253.74135.558,1.03924.779-1.43148-1.1281-.34209-.26655a110.84261,110.84261,0,0,1,10.36783,9.2532q2.401,2.445,4.63686,5.04515,1.14659,1.33419,2.24643,2.70757c.36436.45495,1.60506,2.101.08448.08457.37165.49285.74744.98239,1.11436,1.47884a97.97718,97.97718,0,0,1,8.39161,13.53807c1.79317,3.49775,6.98675,4.80186,10.26142,2.69064A7.67666,7.67666,0,0,0,689.82123,554.48655Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M602.43116,676.88167a3.77983,3.77983,0,0,1-2.73939-6.55137c.09531-.37882.16368-.65085.259-1.02968q-.05115-.12366-.1029-.24717c-3.47987-8.29769-25.685,14.83336-26.645,22.63179a30.029,30.029,0,0,0,.52714,10.32752A120.39223,120.39223,0,0,1,562.77838,652.01a116.20247,116.20247,0,0,1,.72078-12.96332q.59712-5.293,1.65679-10.51055a121.78667,121.78667,0,0,1,24.1515-51.61646c6.87378.38364,12.898-.66348,13.47967-13.98532.10346-2.36972,1.86113-4.42156,2.24841-6.756-.65621.08607-1.32321.13985-1.97941.18285-.20444.0107-.41958.02149-.624.03228l-.07709.00346a3.745,3.745,0,0,1-3.07566-6.10115q.425-.52305.85054-1.04557c.43036-.53793.87143-1.06507,1.30171-1.60292a1.865,1.865,0,0,0,.13986-.16144c.49494-.61322.98971-1.21564,1.48465-1.82885a10.82911,10.82911,0,0,0-3.55014-3.43169c-4.95941-2.90463-11.80146-.89293-15.38389,3.59313-3.59313,4.486-4.27083,10.77947-3.023,16.3843a43.39764,43.39764,0,0,0,6.003,13.3828c-.269.34429-.54872.67779-.81765,1.02209a122.57366,122.57366,0,0,0-12.79359,20.2681c1.0163-7.93863-11.41159-36.60795-16.21776-42.68052-5.773-7.29409-17.61108-4.11077-18.62815,5.13562q-.01476.13428-.02884.26849,1.07082.60411,2.0964,1.28237a5.12707,5.12707,0,0,1-2.06713,9.33031l-.10452.01613c-9.55573,13.64367,21.07745,49.1547,28.74518,41.18139a125.11045,125.11045,0,0,0-6.73449,31.69282,118.66429,118.66429,0,0,0,.08607,19.15986l-.03231-.22593C558.90163,648.154,529.674,627.51374,521.139,629.233c-4.91675.99041-9.75952.76525-9.01293,5.72484q.01788.11874.03635.2375a34.4418,34.4418,0,0,1,3.862,1.86105q1.07082.60423,2.09639,1.28237a5.12712,5.12712,0,0,1-2.06712,9.33039l-.10464.01606c-.07528.01079-.13987.02157-.21507.03237-4.34967,14.96631,27.90735,39.12,47.5177,31.43461h.01081a125.07484,125.07484,0,0,0,8.402,24.52806H601.679c.10765-.3335.20443-.67779.3013-1.01129a34.102,34.102,0,0,1-8.30521-.49477c2.22693-2.73257,4.45377-5.48664,6.6807-8.21913a1.86122,1.86122,0,0,0,.13986-.16135c1.12956-1.39849,2.26992-2.78627,3.39948-4.18476l.00061-.00173a49.95232,49.95232,0,0,0-1.46367-12.72495Zm-34.37066-67.613.0158-.02133-.0158.04282Zm-6.64832,59.93237-.25822-.58084c.01079-.41957.01079-.83914,0-1.26942,0-.11845-.0215-.23672-.0215-.35508.09678.74228.18285,1.48464.29042,2.22692Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        ["cx", "95.24878", "cy", "439", "r", "11", "fill", "#3f3d56"],
        ["cx", "227.24878", "cy", "559", "r", "11", "fill", "#3f3d56"],
        ["cx", "728.24878", "cy", "559", "r", "11", "fill", "#3f3d56"],
        ["cx", "755.24878", "cy", "419", "r", "11", "fill", "#3f3d56"],
        ["cx", "723.24878", "cy", "317", "r", "11", "fill", "#3f3d56"],
        [
          "d",
          "M434.1831,583.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,434.1831,583.426Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        ["cx", "484.24878", "cy", "349", "r", "11", "fill", "#3f3d56"],
        [
          "d",
          "M545.1831,513.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,545.1831,513.426Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        [
          "d",
          "M403.1831,481.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,403.1831,481.426Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#3f3d56",
        ],
        ["cx", "599.24878", "cy", "443", "r", "11", "fill", "#3f3d56"],
        ["cx", "426.24878", "cy", "338", "r", "16", "fill", "#3f3d56"],
        [
          "d",
          "M1028.875,735.26666l-857.75.30733a1.19068,1.19068,0,1,1,0-2.38136l857.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z",
          "transform",
          "translate(-169.93432 -164.42601)",
          "fill",
          "#cacaca",
        ],
        [1, "flex", "flex-col", "items-center", "justify-center"],
        [1, "text-3xl", "md:text-4xl", "lg:text-5xl", "text-gray-800", "mt-12"],
        [1, "md:text-lg", "lg:text-xl", "text-gray-600", "mt-8"],
        [
          "routerLink",
          "/",
          "title",
          "Return Home",
          1,
          "flex",
          "items-center",
          "space-x-2",
          "bg-blue-600",
          "hover:bg-blue-700",
          "text-gray-100",
          "px-4",
          "py-2",
          "mt-12",
          "rounded",
          "transition",
          "duration-150",
        ],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "viewBox",
          "0 0 20 20",
          "fill",
          "currentColor",
          1,
          "h-5",
          "w-5",
        ],
        [
          "fill-rule",
          "evenodd",
          "d",
          "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
          "clip-rule",
          "evenodd",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0),
          G(),
          l(1, "svg", 1),
          u(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(
            6,
            "path",
            6
          )(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(
            11,
            "path",
            11
          )(12, "circle", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15)(
            16,
            "path",
            16
          )(17, "path", 17)(18, "path", 18)(19, "path", 19)(20, "path", 20)(
            21,
            "path",
            21
          )(22, "path", 22)(23, "path", 23)(24, "path", 24)(25, "path", 25)(
            26,
            "circle",
            26
          )(27, "circle", 27)(28, "circle", 28)(29, "circle", 29)(
            30,
            "circle",
            30
          )(31, "path", 31)(32, "circle", 32)(33, "path", 33)(34, "path", 34)(
            35,
            "circle",
            35
          )(36, "circle", 36)(37, "path", 37),
          c(),
          re(),
          l(38, "div", 38)(39, "p", 39),
          m(40, "Page Not Found"),
          c(),
          l(41, "p", 40),
          m(42, "Sorry, the page you are looking for could not be found."),
          c(),
          l(43, "a", 41),
          G(),
          l(44, "svg", 42),
          u(45, "path", 43),
          c(),
          re(),
          l(46, "span"),
          m(47, "Return Home"),
          c()()()());
      },
      dependencies: [$],
    }));
  let n = e;
  return n;
})();
var Ea = (() => {
    let e = class e {
      constructor(i, r) {
        (this.authService = i), (this.router = r);
      }
      canActivate(i, r) {
        return this.authService.authInfo()
          ? (this.router.navigate([""]), !1)
          : !0;
      }
    };
    (e.ɵfac = function (r) {
      return new (r || e)(j(se), j(H));
    }),
      (e.ɵprov = le({ token: e, factory: e.ɵfac, providedIn: "root" }));
    let n = e;
    return n;
  })(),
  ni = (n, e) => He(Ea).canActivate(n, e);
function Ta(n, e) {
  if ((n & 1 && (l(0, "span", 28), m(1), c()), n & 2)) {
    let t = O(3);
    g(), de(t.authInfo == null ? null : t.authInfo.fullName);
  }
}
function Ma(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "li")(1, "a", 29),
      N("click", function () {
        ie(t);
        let r = O(3);
        return ne(r.signOut());
      }),
      u(2, "i", 30),
      m(3, "Logout "),
      c()();
  }
}
function ka(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "li", 31),
      N("click", function () {
        ie(t);
        let r = O(3);
        return ne(r.checkAuthUser(r.userType));
      }),
      l(1, "a", 32),
      u(2, "i", 33),
      m(3, " Login "),
      c()();
  }
}
function Pa(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "li", 34),
      N("click", function () {
        ie(t);
        let r = O(3);
        return ne(r.checkAuthUser(r.userType));
      }),
      l(1, "a", 32),
      u(2, "i", 35),
      m(3, "Registration "),
      c()();
  }
}
function Aa(n, e) {
  n & 1 &&
    (l(0, "li", 36)(1, "a", 32), u(2, "i", 33), m(3, " Dashboard "), c()());
}
function Da(n, e) {
  if (
    (n & 1 &&
      (l(0, "li")(1, "div", 20)(2, "label", 21),
      u(3, "i", 22),
      m(4, " Agent "),
      c(),
      l(5, "ul", 23),
      D(6, Ta, 2, 1, "span", 24)(7, Ma, 4, 0, "li", 7)(8, ka, 4, 0, "li", 25)(
        9,
        Pa,
        4,
        0,
        "li",
        26
      )(10, Aa, 4, 0, "li", 27),
      c()()()),
    n & 2)
  ) {
    let t = O(2);
    g(6),
      E("ngIf", t.userType === "agent"),
      g(),
      E("ngIf", t.userType == "agent"),
      g(),
      E("ngIf", t.userType !== "agent"),
      g(),
      E("ngIf", t.userType !== "agent"),
      g(),
      E("ngIf", t.userType === "agent");
  }
}
function Oa(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "div", 37)(1, "div", 20)(2, "label", 38)(3, "div", 39),
      u(4, "img", 40),
      c()(),
      l(5, "ul", 23)(6, "span", 41),
      m(7),
      c(),
      l(8, "li", 42)(9, "a", 43),
      u(10, "i", 30),
      m(11, "Dashboard "),
      c()(),
      l(12, "li")(13, "a", 44),
      N("click", function () {
        ie(t);
        let r = O(2);
        return ne(r.signOut());
      }),
      u(14, "i", 30),
      m(15, "Logout "),
      c()()()()();
  }
  if (n & 2) {
    let t = O(2);
    g(7),
      Ct(
        " ",
        t.authInfo.userType === "doctor"
          ? t.authInfo == null
            ? null
            : t.authInfo.doctorTitle
          : "",
        " ",
        t.authInfo.fullName,
        ""
      ),
      g(),
      E("routerLink", "/" + t.userType + "/dashboard");
  }
}
function Ia(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "div", 2)(1, "div", 3),
      u(2, "img", 4),
      c(),
      l(3, "ul", 5)(4, "li", 6),
      N("click", function () {
        ie(t);
        let r = O();
        return ne(r.navigator("soowgood-point"));
      }),
      m(5, " Soowgood Point "),
      c(),
      l(6, "li", 6),
      N("click", function () {
        ie(t);
        let r = O();
        return ne(r.navigator("soowgood-booth"));
      }),
      m(7, " Village Booth "),
      c(),
      D(8, Da, 11, 5, "li", 7),
      l(9, "li"),
      D(10, Oa, 16, 3, "div", 8),
      c()(),
      G(),
      l(11, "svg", 9),
      u(12, "g", 10)(13, "g", 11),
      l(14, "g", 12)(15, "style", 13),
      m(16, " .st0 { fill: #ffffff; } "),
      c(),
      l(17, "g"),
      u(18, "path", 14)(19, "rect", 15)(20, "path", 16)(21, "rect", 17)(
        22,
        "path",
        18
      )(23, "rect", 19),
      c()()()();
  }
  if (n & 2) {
    let t = O();
    g(8),
      E("ngIf", t.userType === "agent" || !t.userType),
      g(2),
      E(
        "ngIf",
        t.isAuthLogin && (t.userType === "doctor" || t.userType === "patient")
      );
  }
}
var ri = (() => {
  let e = class e {
    constructor(i, r, o, s, a, d) {
      (this.NormalAuth = i),
        (this.MainAuth = r),
        (this.UserinfoStateService = o),
        (this.router = s),
        (this.TosterService = a),
        (this.menuService = d),
        (this.layout = ""),
        (this.userType = ""),
        (this.scrolled = !1),
        (this.logoPath = "assets/SoowGood-Logo.png");
    }
    ngOnInit() {
      let i = this.NormalAuth.authInfo();
      this.authInfo = i;
      let r = i ? i.id : null;
      this.UserinfoStateService.getProfileInfo(r, this.authInfo?.userType),
        r ? (this.isAuthLogin = !0) : (this.isAuthLogin = !1),
        (this.userType = i ? i.userType : "");
    }
    signOut() {
      this.MainAuth.signOut(),
        (this.isAuthLogin = !1),
        window.location.reload();
    }
    navigator(i) {
      let r = `/${i}`;
      this.router.navigateByUrl(r);
    }
    checkAuthUser(i) {
      if (
        (i === "doctor" &&
          this.TosterService.customToast(
            "Your are already login as Doctor",
            "warning"
          ),
        i === "patient")
      )
        this.TosterService.customToast(
          "Your are already login as Patient",
          "warning"
        );
      else return;
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(se), x(se), x(hr), x(H), x(ue), x(gr));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-header"]],
      inputs: { layout: "layout" },
      decls: 3,
      vars: 5,
      consts: [
        [
          1,
          "w-full",
          "bg-primary",
          "transition-all",
          "duration-200",
          "fixed",
          "py-3",
          "border-b-[1px]",
          "border-secondary-dark/50",
          "z-50",
          "top-0",
          "supports-backdrop-blur:bg-primary/70",
        ],
        ["class", "container-items", 4, "ngIf"],
        [1, "container-items"],
        [
          "routerLink",
          "/",
          1,
          "header-logo",
          "xs:max-w-[170px]",
          "md:max-w-[200px]",
          "lg:max-w-[220px]",
        ],
        [
          "appScroll",
          "",
          "src",
          "/assets/SoowGood-Logo.png",
          "alt",
          "logo",
          1,
          "w-full",
          "drop-shadow-md",
          "active:scale-95",
          "duration-200",
          "cursor-pointer",
        ],
        [1, "lg:flex", "gap-4", "items-center", "hidden"],
        [
          1,
          "btn-secondary-anim",
          "border-secondary-dark/50",
          "border-[1px]",
          3,
          "click",
        ],
        [4, "ngIf"],
        ["class", "flex items-center", 4, "ngIf"],
        [
          "version",
          "1.1",
          "id",
          "_x32_",
          "xmlns",
          "http://www.w3.org/2000/svg",
          0,
          "xmlns",
          "xlink",
          "http://www.w3.org/1999/xlink",
          "viewBox",
          "0 0 512 512",
          0,
          "xml",
          "space",
          "preserve",
          "width",
          "34px",
          "height",
          "24px",
          "fill",
          "#ffffff",
          "stroke",
          "#ffffff",
          1,
          "mr-2",
          "ml-2",
          "lg:hidden",
        ],
        ["id", "SVGRepo_bgCarrier", "stroke-width", "0"],
        [
          "id",
          "SVGRepo_tracerCarrier",
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
        ],
        ["id", "SVGRepo_iconCarrier"],
        ["type", "text/css"],
        [
          "d",
          "M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z",
          1,
          "st0",
        ],
        [
          "x",
          "148.122",
          "y",
          "14.489",
          "width",
          "363.878",
          "height",
          "80.504",
          1,
          "st0",
        ],
        [
          "d",
          "M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z",
          1,
          "st0",
        ],
        [
          "x",
          "148.122",
          "y",
          "215.748",
          "width",
          "363.878",
          "height",
          "80.504",
          1,
          "st0",
        ],
        [
          "d",
          "M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z",
          1,
          "st0",
        ],
        [
          "x",
          "148.122",
          "y",
          "417.007",
          "width",
          "363.878",
          "height",
          "80.504",
          1,
          "st0",
        ],
        [1, "dropdown", "dropdown-end"],
        [
          "tabindex",
          "0",
          1,
          "btn-secondary",
          "bg-primary",
          "cursor-pointer",
          "border-secondary-dark",
          "flex",
        ],
        [1, "fa-solid", "fa-user", "mr-2"],
        [
          "tabindex",
          "0",
          1,
          "menu",
          "menu-sm",
          "dropdown-content",
          "mt-3",
          "p-4",
          "shadow",
          "bg-white",
          "rounded-box",
          "w-52",
        ],
        [
          "class",
          "pb-3 font-Roboto text-primary pl-3 border-b-[1px] text-[20px]",
          4,
          "ngIf",
        ],
        ["routerLink", "/agent/login", 3, "click", 4, "ngIf"],
        ["routerLink", "/agent/signup", 3, "click", 4, "ngIf"],
        ["routerLink", "/agent/dashboard", 4, "ngIf"],
        [
          1,
          "pb-3",
          "font-Roboto",
          "text-primary",
          "pl-3",
          "border-b-[1px]",
          "text-[20px]",
        ],
        [1, "font-Roboto", "text-primary", "text-[16px]", "py-2", 3, "click"],
        [1, "fa-solid", "fa-right-from-bracket", "mr-1"],
        ["routerLink", "/agent/login", 3, "click"],
        [1, "font-Roboto", "text-primary", "text-[16px]", "py-2"],
        [1, "fa-solid", "fa-right-to-bracket", "mr-1"],
        ["routerLink", "/agent/signup", 3, "click"],
        [1, "fa-solid", "fa-border-none", "mr-1"],
        ["routerLink", "/agent/dashboard"],
        [1, "flex", "items-center"],
        [
          "tabindex",
          "0",
          1,
          "btn",
          "btn-ghost",
          "btn-circle",
          "avatar",
          "flex",
        ],
        [1, "w-8", "rounded-full"],
        ["src", "../../../../assets/person.png"],
        [
          1,
          "pb-3",
          "text-primary",
          "font-Roboto",
          "pl-3",
          "border-b-[1px]",
          "text-[20px]",
        ],
        [3, "routerLink"],
        [1, "font-Roboto", "text-[16px]", "text-primary", "py-2"],
        [1, "font-Roboto", "text-[16px]", "text-primary", "py-2", 3, "click"],
      ],
      template: function (r, o) {
        r & 1 && (l(0, "div", 0)(1, "div"), D(2, Ia, 24, 2, "div", 1), c()()),
          r & 2 &&
            (En("scrolled", o.scrolled),
            g(),
            Ue(
              o.layout == "admin" || o.layout == "spreed"
                ? "container-full"
                : "container"
            ),
            g(),
            E("ngIf", o.layout == "public" || "spreed"));
      },
      dependencies: [Te, $],
      styles: [
        ".scrolled[_ngcontent-%COMP%]{background:#01204e;opacity:1;transition:.4s;border-bottom:1px solid #30bced}",
      ],
    }));
  let n = e;
  return n;
})();
var oi = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-footer"]],
      decls: 68,
      vars: 0,
      consts: [
        [1, "bg-primary"],
        [1, "container", "footer", "py-16", "text-white"],
        [1, "max-w-[220px]"],
        ["src", "../../../../assets/SoowGood-Logo.png", "alt", ""],
        [1, "mt-5"],
        [1, "fa-solid", "fa-phone", "mr-2", "text-secondary"],
        [1, "fa-solid", "fa-paper-plane", "mr-2", "text-secondary"],
        [1, "flex", "items-center"],
        [1, "fa-solid", "fa-location-dot", "mr-2", "text-secondary"],
        [1, "font-Roboto", "mb-4", "text-[20px]", "text-white"],
        ["routerLink", "/about-us", 1, "link", "link-hover", "opacity-80"],
        ["routerLink", "/contact-us", 1, "link", "link-hover", "opacity-80"],
        [1, "link", "link-hover", "opacity-80"],
        ["routerLink", "/privacy", 1, "link", "link-hover", "opacity-80"],
        [
          "routerLink",
          "/terms-services",
          1,
          "link",
          "link-hover",
          "opacity-80",
        ],
        ["routerLink", "/refund-policy", 1, "link", "link-hover", "opacity-80"],
        [
          "routerLink",
          "/acoount-delete-request",
          1,
          "link",
          "link-hover",
          "opacity-80",
        ],
        [1, "container"],
        ["src", "assets/payment/sslcommerz-banner.webp", "alt", "ssl-banner"],
        [
          1,
          "container",
          "mt-5",
          "footer",
          "py-4",
          "border-t",
          "text-white",
          "border-base-300",
        ],
        [1, "items-center", "grid-flow-col"],
        [1, "text-[18px]", "font-Roboto"],
        [1, "mt-4"],
        [1, "md:place-self-center", "md:justify-self-end"],
        [1, "grid", "grid-flow-col", "gap-4"],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "width",
          "24",
          "height",
          "24",
          "viewBox",
          "0 0 24 24",
          1,
          "fill-current",
        ],
        [
          "d",
          "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
        ],
        [
          "d",
          "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
        ],
        [
          "d",
          "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "footer", 0)(1, "div", 1)(2, "div", 2),
          u(3, "img", 3),
          l(4, "p"),
          m(5, "Consult your patients anywhere anytime."),
          c(),
          l(6, "p", 4),
          u(7, "i", 5),
          m(8, "+8801605-144633 "),
          c(),
          l(9, "p"),
          u(10, "i", 6),
          m(11, "info@soowgood.com "),
          c(),
          l(12, "p", 7),
          u(13, "i", 8),
          l(14, "span"),
          m(15, "Mahtab Center (12th Floor), Room #10, Bijoynagar, Dhaka 1000"),
          c()()(),
          l(16, "div")(17, "span", 9),
          m(18, "Company"),
          c(),
          l(19, "a", 10),
          m(20, "About us"),
          c(),
          l(21, "a", 11),
          m(22, "Support"),
          c(),
          l(23, "a", 12),
          m(24, "Soowgood points"),
          c(),
          l(25, "a", 12),
          m(26, "Village booths"),
          c(),
          l(27, "a", 12),
          m(28, "Press kit"),
          c()(),
          l(29, "div")(30, "span", 9),
          m(31, "Licence"),
          c(),
          l(32, "a", 12),
          m(33, "TL : 039455/2022"),
          c(),
          l(34, "a", 12),
          m(35, "BIN : 005606801-0208"),
          c(),
          l(36, "a", 13),
          m(37, "Privacy policy"),
          c(),
          l(38, "a", 14),
          m(39, "Terms & Condition"),
          c(),
          l(40, "a", 15),
          m(41, "Refund Policy"),
          c(),
          l(42, "a", 16),
          m(43, "Acount Delete Request"),
          c()()()(),
          l(44, "footer", 0)(45, "div", 17),
          u(46, "img", 18),
          c(),
          l(47, "div", 19)(48, "div", 20)(49, "div")(50, "h1", 21),
          m(51, "Soowgood Ltd"),
          c(),
          l(52, "p", 22),
          m(53, "Providing reliable helth solution since 2021"),
          c(),
          l(54, "p"),
          m(55, "Developed by Coppanet\xA9all right reserved\xA02023"),
          c()()(),
          l(56, "div", 23)(57, "div", 24)(58, "a"),
          G(),
          l(59, "svg", 25),
          u(60, "path", 26),
          c()(),
          re(),
          l(61, "a"),
          G(),
          l(62, "svg", 25),
          u(63, "path", 27),
          c()(),
          re(),
          l(64, "a"),
          G(),
          l(65, "svg", 25),
          u(66, "path", 28),
          c()()()()(),
          m(
            67,
            ` \\
`
          ),
          c());
      },
      dependencies: [$],
    }));
  let n = e;
  return n;
})();
var he = (() => {
  let e = class e {
    constructor() {
      this.layout = "public";
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-public-layout"]],
      decls: 3,
      vars: 1,
      consts: [[3, "layout"]],
      template: function (r, o) {
        r & 1 && u(0, "app-header", 0)(1, "router-outlet")(2, "app-footer"),
          r & 2 && E("layout", o.layout);
      },
      dependencies: [ri, Ke, oi],
    }));
  let n = e;
  return n;
})();
var si = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵmod = q({ type: e })),
    (e.ɵinj = B({ imports: [oe, pe.forChild([])] }));
  let n = e;
  return n;
})();
var ai = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-doctor-layout"]],
      decls: 1,
      vars: 0,
      template: function (r, o) {
        r & 1 && u(0, "router-outlet");
      },
      dependencies: [Ke],
    }));
  let n = e;
  return n;
})();
var yo = (() => {
  let e = class e {
    onClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵdir = vn({
      type: e,
      selectors: [["", "appScroll", ""]],
      hostBindings: function (r, o) {
        r & 1 &&
          N("click", function () {
            return o.onClick();
          });
      },
      standalone: !0,
    }));
  let n = e;
  return n;
})();
var vo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-service-card"]],
      inputs: { serviceDetails: "serviceDetails" },
      decls: 5,
      vars: 1,
      consts: [
        [
          1,
          "w-full",
          "lg:min-w-[140px]",
          "lg:max-w-[150px]",
          "flex-1",
          "h-[140px]",
          "flex",
          "flex-col",
          "gap-3",
          "justify-center",
          "items-center",
          "p-3",
          "bg-white/80",
          "border-[1px]",
          "rounded-md",
          "shadow-secondary",
        ],
        [
          "width",
          "70",
          "height",
          "70",
          "ngSrc",
          "/assets/banner/diagn.webp",
          "alt",
          "ambulance",
          1,
          "max-w-[60px]",
        ],
        [
          1,
          "font-Roboto",
          "text-[16px]",
          "block",
          "text-center",
          "text-primary",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0),
          u(1, "img", 1),
          l(2, "h2", 2)(3, "span"),
          m(4),
          c()()()),
          r & 2 && (g(4), de(o.serviceDetails.serviceName || null));
      },
      dependencies: [ve],
    }));
  let n = e;
  return n;
})();
function Fa(n, e) {
  n & 1 && (l(0, "h1", 32), m(1, " Easy Login/Registration "), c());
}
function Ra(n, e) {
  n & 1 && (l(0, "p", 33), m(1, " Doctor & Patient "), c());
}
function za(n, e) {
  n & 1 && (l(0, "h1", 34), m(1, " Manage Your Appointment "), c());
}
function Ba(n, e) {
  n & 1 &&
    (l(0, "div", 35)(1, "button", 36),
    m(2, " Login "),
    c(),
    l(3, "button", 37),
    m(4, " Registration "),
    c()());
}
function ja(n, e) {
  if (
    (n & 1 &&
      (l(0, "div", 35)(1, "button", 38),
      u(2, "i", 39),
      m(3, "Go to Dashboard "),
      c()()),
    n & 2)
  ) {
    let t = O(3);
    g(), E("routerLink", t.authUser.userType);
  }
}
function qa(n, e) {
  if (
    (n & 1 &&
      (l(0, "div", 25)(1, "div", 26),
      u(2, "img", 27),
      D(3, Fa, 2, 0, "h1", 28)(4, Ra, 2, 0, "p", 29)(5, za, 2, 0, "h1", 30)(
        6,
        Ba,
        5,
        0,
        "div",
        31
      )(7, ja, 4, 1, "div", 31),
      c()()),
    n & 2)
  ) {
    let t = O(2);
    g(3),
      E("ngIf", !t.authUser),
      g(),
      E("ngIf", !t.authUser),
      g(),
      E("ngIf", t.authUser),
      g(),
      E("ngIf", !t.authUser),
      g(),
      E("ngIf", t.authUser);
  }
}
function Va(n, e) {
  if ((n & 1 && (l(0, "div", 23), D(1, qa, 8, 5, "div", 24), c()), n & 2)) {
    let t = O();
    g(),
      E("ngIf", (t.authUser == null ? null : t.authUser.userType) !== "agent");
  }
}
function Ha(n, e) {
  if ((n & 1 && u(0, "app-service-card", 40), n & 2)) {
    let t = e.$implicit;
    E("serviceDetails", t);
  }
}
function Ua(n, e) {
  n & 1 && m(0, " No Service found ");
}
var bo = (() => {
  let e = class e {
    constructor(i, r, o, s) {
      (this.fb = i),
        (this.router = r),
        (this.NormalAuth = o),
        (this.PlatformFacilityService = s),
        (this.searchText = "");
    }
    ngOnInit() {
      this.loadForm(),
        this.getPlatformList(),
        (this.authUser = this.NormalAuth.authInfo()),
        (this.profileStep = this.authUser ? this.authUser.profileStep : null),
        (this.userRole = this.authUser ? this.authUser.userType : null),
        this.searchForm.get("service")?.valueChanges.subscribe((i) => {
          this.service = i;
        }),
        this.searchForm.get("searchText")?.valueChanges.subscribe((i) => {
          this.searchText = i;
        });
    }
    loadForm() {
      this.searchForm = this.fb.group({ service: ["0"], searchText: [""] });
    }
    onChangeService(i) {}
    goToServicePage() {
      let i = this.searchForm.get("searchText")?.value;
      i
        ? this.router.navigate(["/search"], { queryParams: { doctorname: i } })
        : this.router.navigate(["/search"]);
    }
    ngAfterViewInit() {
      this.swiper = new yr(".swiper", {
        speed: 1500,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: { delay: 2e3 },
        modules: [vr, br, xr],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: { el: ".swiper-pagination" },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 30 },
          992: { slidesPerView: 1, spaceBetween: 40 },
        },
      });
    }
    getPlatformList() {
      this.PlatformFacilityService.getList().subscribe({
        next: (i) => {
          this.serviceList = i;
        },
        error: (i) => {
          console.log(i);
        },
      });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(At), x(H), x(se), x(fr));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-banner"]],
      decls: 33,
      vars: 8,
      consts: [
        [
          1,
          "bg-hero-pattern",
          "max-h-full",
          "3xl:pt-14",
          "3xl:pb-20",
          "py-10",
          "flex",
          "relative",
          "overflow-hidden",
          "w-full",
          "bg-[#f2f6f6]",
        ],
        [1, "container"],
        [
          1,
          "w-full",
          "grid",
          "lg:grid-cols-[9fr,3fr]",
          "grid-cols-1",
          "gap-8",
          "mt-16",
        ],
        [1, "swiper", "w-full", "h-full"],
        [1, "swiper-wrapper", "!w-full", "h-full"],
        [1, "swiper-slide", "!w-full", "h-full"],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-1_50.webp",
          "alt",
          "banner",
          "loading",
          "eager",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-2_50.webp",
          "alt",
          "banner",
          "loading",
          "eager",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [1, "swiper-slide", "!w-full"],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-3_50.webp",
          "alt",
          "banner",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-4_50.webp",
          "alt",
          "banner",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-5_50.webp",
          "alt",
          "banner",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [
          "width",
          "300",
          "height",
          "300",
          "ngSrc",
          "/assets/banner/b-6_50.webp",
          "alt",
          "banner",
          1,
          "object-cover",
          "w-full",
          "h-full",
        ],
        [1, "swiper-button-prev"],
        [1, "swiper-button-next"],
        [
          1,
          "search-area",
          "mt-5",
          "flex",
          "backdrop-blur-sm",
          "border-[1px]",
          "bg-white",
          "max-w-full",
          "p-2",
          "justify-between",
          "rounded-[10px]",
          "items-centershadow-blue",
          3,
          "ngClass",
        ],
        [1, "w-full", "flex", "gap-3", 3, "formGroup", "ngSubmit"],
        [
          "type",
          "search",
          "formControlName",
          "searchText",
          "placeholder",
          "Search Doctor by Name...",
          1,
          "w-full",
          "py-1",
          "bg-white",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
        ],
        [
          "type",
          "submit",
          1,
          "btn-secondary",
          "bg-primary",
          "py-2.5",
          "rounded-[6px]",
          "lg:min-w-[170px]",
        ],
        [1, "fa-solid", "fa-magnifying-glass", "lg:mr-2"],
        [1, "hidden", "lg:block"],
        [
          "class",
          "max-w-[350px] 3xl:max-w-[380px] lg:flex hidden h-full flex-col",
          4,
          "ngIf",
        ],
        [
          1,
          "grid",
          "grid-cols-2",
          "xs:grid-cols-3",
          "sm:grid-cols-4",
          "md:grid-cols-5",
          "place-items-center",
          "lg:grid-cols-7",
          "xl:grid-cols-8",
          "lg:gap-5",
          "mt-6",
        ],
        [
          1,
          "max-w-[350px]",
          "3xl:max-w-[380px]",
          "lg:flex",
          "hidden",
          "h-full",
          "flex-col",
        ],
        [
          "class",
          "border-secondary rounded-lg p-4 border-[1px] backdrop-blur-md h-[430px] 3xl:h-[530px] max-w-full bg-white/10",
          4,
          "ngIf",
        ],
        [
          1,
          "border-secondary",
          "rounded-lg",
          "p-4",
          "border-[1px]",
          "backdrop-blur-md",
          "h-[430px]",
          "3xl:h-[530px]",
          "max-w-full",
          "bg-white/10",
        ],
        [
          1,
          "p-8",
          "bg-white/30",
          "w-full",
          "h-full",
          "flex",
          "items-center",
          "justify-center",
          "flex-col",
          "relative",
          "rounded-md",
          "text-center",
        ],
        [
          "width",
          "100",
          "height",
          "100",
          "ngSrc",
          "/assets/banner/sg-icon.webp",
          "alt",
          "icon",
          1,
          "max-w-[100px]",
          "pb-6",
        ],
        [
          "class",
          "font-Roboto text-primary text-center text-[30px] font-bold",
          4,
          "ngIf",
        ],
        ["class", "font-Roboto text-center text-[20px] my-3", 4, "ngIf"],
        [
          "class",
          "font-Roboto text-primary text-center text-[28px] mt-5 font-bold",
          4,
          "ngIf",
        ],
        ["class", "flex justify-evenly items-end gap-4 mt-5", 4, "ngIf"],
        [
          1,
          "font-Roboto",
          "text-primary",
          "text-center",
          "text-[30px]",
          "font-bold",
        ],
        [1, "font-Roboto", "text-center", "text-[20px]", "my-3"],
        [
          1,
          "font-Roboto",
          "text-primary",
          "text-center",
          "text-[28px]",
          "mt-5",
          "font-bold",
        ],
        [1, "flex", "justify-evenly", "items-end", "gap-4", "mt-5"],
        ["routerLink", "login", 1, "btn-secondary", "w-1/2", "text-[18px]"],
        [
          "routerLink",
          "signup",
          1,
          "btn-secondary",
          "bg-primary",
          "w-1/2",
          "text-[18px]",
        ],
        [
          1,
          "btn-secondary",
          "bg-primary",
          "w-full",
          "text-[18px]",
          3,
          "routerLink",
        ],
        [1, "fa-solid", "fa-border-none", "mr-2"],
        [3, "serviceDetails"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div")(
            5,
            "div",
            3
          )(6, "div", 4)(7, "div", 5),
          u(8, "img", 6),
          c(),
          l(9, "div", 5),
          u(10, "img", 7),
          c(),
          l(11, "div", 8),
          u(12, "img", 9),
          c(),
          l(13, "div", 5),
          u(14, "img", 10),
          c(),
          l(15, "div", 8),
          u(16, "img", 11),
          c(),
          l(17, "div", 8),
          u(18, "img", 12),
          c()(),
          u(19, "div", 13)(20, "div", 14),
          c()(),
          l(21, "div", 15)(22, "form", 16),
          N("ngSubmit", function () {
            return o.goToServicePage();
          }),
          u(23, "input", 17),
          l(24, "button", 18),
          u(25, "i", 19),
          l(26, "span", 20),
          m(27, " Find Doctor"),
          c()()()()(),
          D(28, Va, 2, 1, "div", 21),
          c(),
          l(29, "div", 22),
          St(30, Ha, 1, 1, "app-service-card", 40, Tn, !1, Ua, 1, 0),
          c()()()),
          r & 2 &&
            (g(3),
            Ue(o.userRole === "agent" ? "w-full " : "w-full"),
            g(),
            Ue(
              o.userRole === "agent"
                ? "w-full h-[450px] overflow-hidden bg-white border-[1px] rounded-xl shadow-secondary"
                : "w-full h-[150px] xs:h-[180px] lg:h-[350px] 3xl:h-[450px] overflow-hidden bg-white border-[1px] rounded-xl shadow-secondary"
            ),
            g(17),
            E("ngClass", o.userRole === "agent" ? "w-[60%] mx-auto" : "w-full"),
            g(),
            E("formGroup", o.searchForm),
            g(6),
            E("ngIf", o.userRole !== "agent"),
            g(2),
            wt(o.serviceList));
      },
      dependencies: [Dn, Te, $, Qe, Mt, Ge, $e, kt, Pt, ve, vo],
      styles: [
        ".btn-secondary[_ngcontent-%COMP%]:hover{color:#0e82fd;border-color:#0e82fd;background-color:#cc2b2b;box-shadow:inset 0 0 0 50px #fff;-webkit-transition:.5s;-ms-transition:.5s;transition:.5s}.bg-hero-pattern[_ngcontent-%COMP%]{background-size:cover;background-position:bottom center}",
      ],
    }));
  let n = e;
  return n;
})();
function Ga(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "button", 14),
      N("click", function () {
        ie(t);
        let r = O();
        return ne(r.onClickConsultNow(r.doctorDetails));
      }),
      u(1, "i", 15),
      m(2),
      c();
  }
  if (n & 2) {
    let t = O();
    E("disabled", t.isLoading),
      g(2),
      me("", t.isLoading ? "Loading" : "Consult Now", " ");
  }
}
var xo = (() => {
  let e = class e {
    constructor(i, r, o, s, a, d) {
      (this.DoctorScheduleService = i),
        (this.NormalAuth = r),
        (this.dialog = o),
        (this.TosterService = s),
        (this.FinancialSetupService = a),
        (this.router = d),
        (this.isLoading = !1),
        (this.userType = ""),
        (this.defaultImage = "assets/doctor/avater.png"),
        (this.picUrl = `${Ze.apis.default.url}/`),
        (this.isAuthUser = this.NormalAuth.authInfo()?.id),
        (this.userType = this.NormalAuth.authInfo()?.userType);
    }
    onClickConsultNow(i) {
      this.openDialog(i);
    }
    goToProfile(i) {
      this.router.navigate([`/search/doctors/${i}`]);
    }
    openDialog(i) {
      if (((this.isLoading = !0), i.id)) {
        let r = this.DoctorScheduleService.getDetailsScheduleListByDoctorId(
            i.id
          ),
          o = this.FinancialSetupService.getList();
        _t([r, o]).subscribe(([s, a]) => {
          s?.length > 0 &&
            i &&
            ((this.isLoading = !1),
            this.dialog.open(Sr, {
              maxWidth: 600,
              minWidth: 450,
              data: {
                doctorDetails: i,
                doctorScheduleInfo: s,
                isAuthUser: !!this.isAuthUser,
                userAccess: this.userType != "doctor",
                serviceFeeList: a,
              },
            }));
        });
      } else
        (this.isLoading = !1),
          this.TosterService.customToast(
            "No Details/Schedule found",
            "warning"
          );
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(mr), x(se), x(Ye), x(ue), x(ur), x(H));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-live-doctor-card"]],
      inputs: { doctorDetails: "doctorDetails" },
      decls: 26,
      vars: 5,
      consts: [
        [
          1,
          "live-card",
          "w-full",
          "hover:border-secondary/50",
          "group",
          "relative",
          "border-[1px]",
          "overflow-hidden",
          "max-w-[300px]",
          "rounded-[10px]",
          "h-[300px]",
          "bg-white",
        ],
        [
          "ngSrc",
          "assets/banner/shape-24.jpg",
          "alt",
          "shape",
          "width",
          "50",
          "height",
          "50",
          1,
          "absolute",
          "card-img",
        ],
        [1, "absolute", "top-0", "left-0", "w-full", "h-full", "z-10"],
        [
          1,
          "w-[90px]",
          "relative",
          "after:w-[15px]",
          "after:h-[15px]",
          "after:border-[2px]",
          "after:bg-green-400",
          "after:rounded-full",
          "after:absolute",
          "after:bottom-0",
          "after:right-0",
          "ml-6",
          "mt-6",
          "overflow-hidden",
          "p-1",
          "h-[90px]",
          "rounded-[10px]",
          "border-[1px]",
          "bg-secondary/10",
        ],
        [
          "width",
          "50",
          "height",
          "50",
          "alt",
          "doctor",
          1,
          "object-cover",
          "rounded-lg",
          "w-full",
          "h-full",
          3,
          "src",
        ],
        [1, "px-6", "mt-6"],
        [1, "text-[18px]", "font-semibold", "font-Roboto", "text-primary/90"],
        [1, "px-6", "mt-4", "flex", "gap-2"],
        [1, "fa-solid", "fa-star", "text-secondary"],
        [1, "text-sm"],
        [
          1,
          "group-hover:border-t-secondary/50",
          "border-t-[1px]",
          "w-full",
          "absolute",
          "bottom-0",
          "flex",
          "justify-between",
        ],
        [
          "class",
          "border-r-[1px] disabled:bg-gray-400 hover:bg-primary/90 hover:text-white group-hover:border-r-secondary/50 flex-1 py-3 font-semibold font-Roboto/80 text-primary/80 bg-secondary/10",
          3,
          "disabled",
        ],
        [
          1,
          "flex-1",
          "py-2",
          "font-semibold",
          "hover:bg-primary/90",
          "hover:text-white",
          "font-Roboto/80",
          "text-primary/80",
          "bg-secondary/10",
          3,
          "click",
        ],
        [1, "text-secondary", "mr-2", "fa-solid", "fa-user-tie"],
        [
          1,
          "border-r-[1px]",
          "disabled:bg-gray-400",
          "hover:bg-primary/90",
          "hover:text-white",
          "group-hover:border-r-secondary/50",
          "flex-1",
          "py-3",
          "font-semibold",
          "font-Roboto/80",
          "text-primary/80",
          "bg-secondary/10",
          3,
          "disabled",
          "click",
        ],
        [1, "text-secondary", "mr-2", "fa-solid", "fa-video-slash"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0),
          u(1, "img", 1),
          l(2, "div", 2)(3, "div", 3),
          u(4, "img", 4),
          c(),
          l(5, "div")(6, "div", 5)(7, "h2", 6),
          m(8),
          c(),
          l(9, "p"),
          m(10),
          c(),
          l(11, "p"),
          m(12),
          c()(),
          l(13, "div", 7),
          u(14, "i", 8)(15, "i", 8)(16, "i", 8)(17, "i", 8)(18, "i", 8),
          l(19, "p", 9),
          m(20, "(105 reviews)"),
          c()(),
          l(21, "div", 10),
          D(22, Ga, 3, 2, "button", 11),
          l(23, "button", 12),
          N("click", function () {
            return o.goToProfile(o.doctorDetails.id);
          }),
          u(24, "i", 13),
          m(25, "Profile "),
          c()()()()()),
          r & 2 &&
            (g(4),
            E("src", o.doctorDetails.profilePicUrl || o.defaultImage, xn),
            g(4),
            me(" Dr. ", o.doctorDetails.fullName, " "),
            g(2),
            de(o.doctorDetails.qualifications),
            g(2),
            de(o.doctorDetails.areaOfExperties),
            g(10),
            _e(22, o.userType !== "doctor" ? 22 : -1));
      },
      dependencies: [ve],
      styles: [
        ".live-card[_ngcontent-%COMP%]{transition-duration:.4s}.live-card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{opacity:0;transform:translatey(-100%);transition-duration:.4s}.live-card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%]{opacity:.08;transform:translatey(0)}",
      ],
    }));
  let n = e;
  return n;
})();
var Qa = (n, e) => e.id;
function Wa(n, e) {
  n & 1 && (l(0, "div", 14)(1, "p", 15), m(2, "Loading..."), c()());
}
function Xa(n, e) {
  if ((n & 1 && u(0, "app-live-doctor-card", 16), n & 2)) {
    let t = e.$implicit;
    E("doctorDetails", t);
  }
}
function Ya(n, e) {
  n & 1 && (l(0, "div", 17), m(1, " Loading... "), c());
}
function Za(n, e) {
  if (n & 1) {
    let t = ce();
    l(0, "button", 18),
      N("click", function () {
        ie(t);
        let r = O();
        return ne(r.onClickSeeMore("OnlineRT"));
      }),
      m(1, " see more "),
      c();
  }
}
var _o = (() => {
  let e = class e {
    constructor(i, r, o) {
      (this.DoctorStateService = i),
        (this.router = r),
        (this.DocumentsAttachmentService = o),
        (this.picUrl = `${Ze.apis.default.url}/`),
        (this.isLoading = !1),
        (this.noData = !1);
    }
    ngOnInit() {
      this.getDoctorDetails();
    }
    onClickSeeMore(i) {
      i && this.router.navigate(["/search"], { queryParams: { type: i } });
    }
    getDoctorDetails() {
      (this.isLoading = !0),
        (this.liveDoctorList = []),
        this.DoctorStateService.getCurrentlyOnlineDoctorList()
          .pipe(je((i) => i.filter((r, o) => o < 8)))
          .subscribe({
            next: (i) => {
              let r = i,
                o = r.map((s) =>
                  this.DocumentsAttachmentService.getDocumentInfoByEntityTypeAndEntityIdAndAttachmentType(
                    "Doctor",
                    s.id,
                    "ProfilePicture"
                  )
                );
              _t(o).subscribe((s) => {
                this.liveDoctorList = r.map((a, d) => {
                  let p = s[d],
                    f = "";
                  if (p) {
                    let h = p.path || "",
                      T = /wwwroot/gi,
                      C = h.replace(T, "");
                    f = this.picUrl + C;
                  }
                  return xt(K({}, a), { profilePicUrl: f });
                });
              }),
                (this.isLoading = !1);
            },
            error: (i) => {
              console.log(i), (this.isLoading = !1);
            },
            complete() {
              console.log("completed");
            },
          });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(_r), x(H), x(pr));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-live-doctors"]],
      decls: 18,
      vars: 3,
      consts: [
        [1, "py-[100px]", "w-full"],
        [1, "container", "h-full"],
        [1, "flex", "flex-col", "justify-center", "h-full"],
        [1, "flex", "justify-between", "items-end"],
        [1, "relative"],
        [1, "text-[18px]", "text-secondary", "font-Roboto"],
        [1, "bubble", "absolute", "left-[23px]", "bottom-[42px]"],
        [1, "bubble-outer-dot"],
        [1, "bubble-inner-dot"],
        [1, "text-[44px]", "text-primary/90", "font-Roboto"],
        [
          "class",
          "grid w-full grid-cols-1 justify-center items-center h-[300px]",
          4,
          "ngIf",
        ],
        [
          "id",
          " py-6",
          1,
          "relative",
          "w-full",
          "grid",
          "gap-7",
          "mt-5",
          "grid-cols-1",
          "sm:grid-cols-2",
          "md:grid-cols-4",
        ],
        [
          "class",
          "flex flex-shrink-1 w-full h-[300px] justify-center items-center",
        ],
        [
          "class",
          "rounded-3xl mt-10 px-6 py-2 bg-secondary text-white mx-auto",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          1,
          "grid",
          "w-full",
          "grid-cols-1",
          "justify-center",
          "items-center",
          "h-[300px]",
        ],
        [1, "text-center", "leading-9"],
        [3, "doctorDetails"],
        [
          1,
          "flex",
          "flex-shrink-1",
          "w-full",
          "h-[300px]",
          "justify-center",
          "items-center",
        ],
        [
          1,
          "rounded-3xl",
          "mt-10",
          "px-6",
          "py-2",
          "bg-secondary",
          "text-white",
          "mx-auto",
          3,
          "click",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(
            5,
            "h3",
            5
          ),
          m(6, "Available now"),
          c(),
          l(7, "div", 6)(8, "span", 7),
          u(9, "span", 8),
          c()(),
          l(10, "h1", 9),
          m(11, " Live Doctors "),
          c()()(),
          D(12, Wa, 3, 0, "div", 10),
          l(13, "div", 11),
          St(14, Xa, 1, 1, "app-live-doctor-card", 16, Qa),
          D(16, Ya, 2, 0, "div", 12),
          c(),
          D(17, Za, 2, 0, "button", 13),
          c()()()),
          r & 2 &&
            (g(12),
            E("ngIf", o.isLoading),
            g(2),
            wt(o.liveDoctorList),
            g(2),
            _e(16, o.isLoading ? 16 : -1),
            g(),
            E(
              "ngIf",
              (o.liveDoctorList == null ? null : o.liveDoctorList.length) > 0
            ));
      },
      dependencies: [Te, xo],
      styles: [
        '.bubble[_ngcontent-%COMP%]{display:block;position:absolute;cursor:pointer}.bubble[_ngcontent-%COMP%]:hover:after{background-color:#00d007}.bubble[_ngcontent-%COMP%]:after{content:"";background-color:#00d007;width:12px;height:12px;border-radius:50%;position:absolute;display:block;top:1px;left:1px}.bubble[_ngcontent-%COMP%]   .bubble-outer-dot[_ngcontent-%COMP%]{margin:1px;display:block;text-align:center;opacity:1;background-color:#09ff0066;width:12px;height:12px;border-radius:50%;-webkit-animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite;-moz-animation:bubble-pulse 1.5s linear infinite;-o-animation:bubble-pulse 1.5s linear infinite;animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite}.bubble[_ngcontent-%COMP%]   .bubble-inner-dot[_ngcontent-%COMP%]{display:block;text-align:center;opacity:1;background-color:#0f16;width:12px;height:12px;border-radius:50%;-webkit-animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite;-moz-animation:bubble-pulse 1.5s linear infinite;-o-animation:bubble-pulse 1.5s linear infinite;animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite}.bubble[_ngcontent-%COMP%]   .bubble-inner-dot[_ngcontent-%COMP%]:after{content:"";display:block;text-align:center;opacity:1;background-color:#00ff2666;width:12px;height:12px;border-radius:50%;-webkit-animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite;-moz-animation:bubble-pulse 1.5s linear infinite;-o-animation:bubble-pulse 1.5s linear infinite;animation:_ngcontent-%COMP%_bubble-pulse 1.5s linear infinite}@-webkit-keyframes _ngcontent-%COMP%_bubble-pulse{0%{transform:scale(1);opacity:.75}25%{transform:scale(1);opacity:.75}to{transform:scale(2.5);opacity:0}}@keyframes _ngcontent-%COMP%_bubble-pulse{0%{transform:scale(1);opacity:.75}25%{transform:scale(1);opacity:.75}to{transform:scale(2.5);opacity:0}}@-moz-keyframes bubble-pulse{0%{transform:scale(1);opacity:.75}25%{transform:scale(1);opacity:.75}to{transform:scale(2.5);opacity:0}}@-o-keyframes bubble-pulse{0%{transform:scale(1);opacity:.75}25%{transform:scale(1);opacity:.75}to{transform:scale(2.5);opacity:0}}#center-div[_ngcontent-%COMP%]{position:absolute;inset:0;margin:auto;width:14px;height:14px}[class^=number-slide][_ngcontent-%COMP%], [class*=" number-slide"][_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.navigation-wrapper[_ngcontent-%COMP%]{position:relative}.dots[_ngcontent-%COMP%]{display:flex;padding:10px 0;justify-content:center}.dot[_ngcontent-%COMP%]{border:none;width:10px;height:10px;background:#3c87ff;border-radius:50%;margin:0 5px;padding:5px;cursor:pointer}.dot[_ngcontent-%COMP%]:focus{outline:none}.dot.active[_ngcontent-%COMP%]{background:#a5a4a4}.arrow[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);fill:#230861;cursor:pointer}.arrow--left[_ngcontent-%COMP%]{left:5px}.arrow--right[_ngcontent-%COMP%]{left:auto;right:5px}.arrow--disabled[_ngcontent-%COMP%]{fill:#ffffff80}.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-button-next[_ngcontent-%COMP%]:after{display:none}.swiper-pagination[_ngcontent-%COMP%]{bottom:-25px!important}',
      ],
    }));
  let n = e;
  return n;
})();
var So = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-signup-marketing-banner"]],
      decls: 11,
      vars: 0,
      consts: [
        [1, "w-full", "bg-slate-50"],
        [
          1,
          "grid",
          "max-w-screen-xl",
          "px-4",
          "py-8",
          "mx-auto",
          "lg:gap-8",
          "xl:gap-0",
          "lg:py-16",
          "lg:grid-cols-12",
        ],
        [1, "mr-auto", "place-self-center", "lg:col-span-7"],
        [
          1,
          "max-w-xl",
          "mb-4",
          "text-[44px]",
          "font-bold",
          "font-Roboto",
          "text-primary",
          "tracking-tigh",
        ],
        [
          1,
          "max-w-2xl",
          "mb-6",
          "font-medium",
          "text-gray-600",
          "lg:mb-8",
          "md:text-lg",
          "lg:text-xlW",
        ],
        [
          "routerLink",
          "/signup",
          1,
          "inline-flex",
          "bg-primary",
          "text-white",
          "items-center",
          "justify-center",
          "px-5",
          "py-3",
          "text-base",
          "font-medium",
          "text-center",
          "border",
          "border-gray-300",
          "rounded-lg",
          "hover:bg-secondary",
        ],
        [1, "hidden", "lg:mt-0", "lg:col-span-5", "lg:flex"],
        [
          "loading",
          "lazy",
          "width",
          "400",
          "height",
          "300",
          "ngSrc",
          "assets/doctor/online-dr.png",
          "alt",
          "mockup",
          1,
          "max-w-full",
          "h-full",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
          m(4, " Consult your patients anywhere anytime. "),
          c(),
          l(5, "p", 4),
          m(
            6,
            ' Unable to reach your clinic/chamber on time? With Soowgood, you can now provide consultations to your patients from anywhere, at any time. Join as a registered doctor and begin consultations instantly!" '
          ),
          c(),
          l(7, "span", 5),
          m(8, " Signup Now "),
          c()(),
          l(9, "div", 6),
          u(10, "img", 7),
          c()()());
      },
      dependencies: [$, ve],
    }));
  let n = e;
  return n;
})();
var wo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-app-marketing"]],
      decls: 44,
      vars: 0,
      consts: [
        [1, "lg:h-screen", "bg-primary", "py-10", "flex", "items-center"],
        [1, "container"],
        [1, "grid", "lg:grid-cols-2", "grid-cols-1"],
        [1, "relative", "hidden", "justify-center", "lg:flex"],
        [1, "w-[350px]", "h-[350px]", "rounded-full", "bg-secondary"],
        [
          "loading",
          "lazy",
          "ngSrc",
          "assets/banner/app.png",
          "width",
          "250",
          "height",
          "500",
          "alt",
          "",
          1,
          "absolute",
          "max-h-[500px]",
          "top-1/2",
          "-translate-y-1/2",
          "-translate-x-1/2",
          "left-1/2",
        ],
        [1, "text-[15px]", "lg:text-[20px]", "text-secondary", "font-semibold"],
        [
          1,
          "text-[28px]",
          "md:text-[34px]",
          "lg:text-[44px]",
          "mb-6",
          "text-white",
          "font-bold",
        ],
        [1, "text-secondary"],
        [1, "lg:text-[16px]", "text-[14px]", "font-Roboto", "text-gray-300"],
        [
          1,
          "grid",
          "grid-cols-2",
          "row-gap-4",
          "mt-9",
          "grid-rows-2",
          "text-[15px]",
          "lg:text-[18px]",
          "font-Roboto",
          "text-gray-300",
        ],
        [1, "fa-regular", "fa-square-check", "mr-2", "text-secondary"],
        [1, "grid", "grid-cols-1", "xs:grid-cols-2", "gap-6", "mt-10"],
        [
          1,
          "bg-white",
          "sm:h-[60px]",
          "rounded-lg",
          "flex",
          "items-center",
          "p-4",
          "gap-4",
          "w-fit",
        ],
        [1, "fa-brands", "text-[50px]", "fa-apple"],
        [
          1,
          "text-[14px]",
          "mb-0",
          "font-semibold",
          "text-primary",
          "font-poppins",
        ],
        [1, "text-[24px]", "font-semibold", "text-primary", "font-poppins"],
        [
          1,
          "w-fit",
          "bg-white",
          "sm:h-[60px]",
          "rounded-lg",
          "flex",
          "gap-4",
          "items-center",
          "p-4",
        ],
        [
          "loading",
          "lazy",
          "width",
          "40",
          "height",
          "25",
          "ngSrc",
          "assets/other/playstore.webp",
          "alt",
          "app",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4),
          u(5, "img", 5),
          c()(),
          l(6, "div")(7, "h3", 6),
          m(8, " Download Our App "),
          c(),
          l(9, "h1", 7),
          m(10, " Download Our "),
          l(11, "span", 8),
          m(12, "Soowgood"),
          c(),
          m(13, " App From Your Gadget "),
          c(),
          l(14, "p", 9),
          m(
            15,
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
          ),
          c(),
          l(16, "ul", 10)(17, "li"),
          u(18, "i", 11),
          m(19, "Video Consult With Doctors "),
          c(),
          l(20, "li"),
          u(21, "i", 11),
          m(22, "Exclusive Healthcare "),
          c(),
          l(23, "li"),
          u(24, "i", 11),
          m(25, "Ask Free Questions "),
          c(),
          l(26, "li"),
          u(27, "i", 11),
          m(28, "Live Medicine Order Tracking "),
          c()(),
          l(29, "div", 12)(30, "div", 13),
          u(31, "i", 14),
          l(32, "div")(33, "p", 15),
          m(34, " Download on the "),
          c(),
          l(35, "h2", 16),
          m(36, " App Store "),
          c()()(),
          l(37, "div", 17),
          u(38, "img", 18),
          l(39, "div")(40, "p", 15),
          m(41, " Download on the "),
          c(),
          l(42, "h2", 16),
          m(43, " Play Store "),
          c()()()()()()()());
      },
      dependencies: [ve],
    }));
  let n = e;
  return n;
})();
function il(n, e) {
  n & 1 && u(0, "img", 1);
}
function nl(n, e) {
  n & 1 &&
    (l(0, "div", 2)(1, "div", 3)(2, "p", 4),
    m(3, "Contact us"),
    c(),
    l(4, "h1", 5),
    m(5, " Get in touch "),
    c(),
    l(6, "p", 6),
    m(7, " Our friendly team is always here to chat. "),
    c()(),
    l(8, "div", 7)(9, "div", 8)(10, "span", 9),
    G(),
    l(11, "svg", 10),
    u(12, "path", 11),
    c()(),
    re(),
    l(13, "h2", 12),
    m(14, "Email"),
    c(),
    l(15, "p", 13),
    m(16, "Our friendly team is here to help."),
    c(),
    l(17, "p", 14),
    m(18, "info@soowgood.com"),
    c()(),
    l(19, "div", 8)(20, "span", 9),
    G(),
    l(21, "svg", 10),
    u(22, "path", 15)(23, "path", 16),
    c()(),
    re(),
    l(24, "h2", 12),
    m(25, "Office"),
    c(),
    l(26, "p", 13),
    m(27, "Come say hello at our office HQ."),
    c(),
    l(28, "p", 14),
    m(29, " Mahtab Center (12th Floor), Room #10, Bijoynagar, Dhaka 1000 "),
    c()(),
    l(30, "div", 8)(31, "span", 9),
    G(),
    l(32, "svg", 10),
    u(33, "path", 17),
    c()(),
    re(),
    l(34, "h2", 12),
    m(35, "Phone"),
    c(),
    l(36, "p", 13),
    m(37, "Mon-Fri from 8am to 5pm."),
    c(),
    l(38, "p", 14),
    m(39, "+8801605-144633"),
    c()()()());
}
var li = (() => {
  let e = class e {
    constructor(i, r) {
      (this.dialogRef = i), (this.data = r);
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(or), x(sr));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-pricing-modal"]],
      decls: 3,
      vars: 1,
      consts: [
        [1, "bg-white"],
        ["src", "/assets/other/sg-compare.jpg", "alt", "compare"],
        [1, "container", "px-6", "py-12", "mx-auto"],
        [1, "text-center"],
        [1, "font-medium", "text-blue-500"],
        [
          1,
          "mt-2",
          "text-2xl",
          "font-semibold",
          "text-gray-800",
          "md:text-3xl",
        ],
        [1, "mt-3", "text-gray-500"],
        [
          1,
          "grid",
          "grid-cols-1",
          "gap-12",
          "mt-10",
          "md:grid-cols-2",
          "lg:grid-cols-3",
        ],
        [
          1,
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "text-center",
        ],
        [1, "p-3", "text-blue-500", "rounded-full", "bg-blue-100/80"],
        [
          "xmlns",
          "http://www.w3.org/2000/svg",
          "fill",
          "none",
          "viewBox",
          "0 0 24 24",
          "stroke-width",
          "1.5",
          "stroke",
          "currentColor",
          1,
          "w-6",
          "h-6",
        ],
        [
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
          "d",
          "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
        ],
        [1, "mt-4", "text-lg", "font-medium", "text-gray-800"],
        [1, "mt-2", "text-gray-500"],
        [1, "mt-2", "text-blue-500"],
        [
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
          "d",
          "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
        ],
        [
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
          "d",
          "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
        ],
        [
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
          "d",
          "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "section", 0), D(1, il, 1, 0, "img", 1)(2, nl, 40, 0), c()),
          r & 2 && (g(), _e(1, o.data === "compare" ? 1 : 2));
      },
    }));
  let n = e;
  return n;
})();
var Co = (() => {
  let e = class e {
    constructor() {
      this.include = "";
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-pricing-card-include-list"]],
      inputs: { include: "include" },
      decls: 4,
      vars: 1,
      consts: [
        [1, "flex", "items-center"],
        [1, "fa-solid", "fa-square-check", "text-[24px]", "text-primary"],
        [1, "mx-4", "font-medium", "text-[16px]", "text-gray-700"],
      ],
      template: function (r, o) {
        r & 1 && (l(0, "div", 0), u(1, "i", 1), l(2, "span", 2), m(3), c()()),
          r & 2 && (g(3), de(o.include));
      },
    }));
  let n = e;
  return n;
})();
function ol(n, e) {
  if ((n & 1 && u(0, "app-pricing-card-include-list", 15), n & 2)) {
    let t = e.$implicit;
    E("include", t);
  }
}
var Eo = (() => {
  let e = class e {
    constructor(i) {
      (this.dialog = i), (this.selectedPlan = "monthly");
    }
    getStartNow() {
      let i = this.dialog.open(li, {});
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(Ye));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-pricing-card"]],
      inputs: { details: "details" },
      decls: 25,
      vars: 4,
      consts: [
        [1, "w-full", "min-h-[630px]", "max-h-fit", "mx-auto", "bg-white"],
        [1, "p-6"],
        [1, "flex", "justify-between", "items-center"],
        [
          1,
          "text-lg",
          "font-semibold",
          "font-Roboto",
          "text-gray-700",
          "capitalize",
          "lg:text-[28px]",
        ],
        [
          1,
          "mt-4",
          "text-2xl",
          "font-bold",
          "font-Roboto",
          "text-secondary-dark",
          "sm:text-3xl",
          "xl:text-4xl",
        ],
        [1, "outline-none", "border-[1px]", 3, "ngModel", "ngModelChange"],
        ["value", "monthly"],
        ["value", "yearly"],
        ["value", "quarterly"],
        ["value", "halfYearly"],
        [
          1,
          "w-full",
          "px-4",
          "py-2",
          "mt-6",
          "tracking-wide",
          "text-white",
          "capitalize",
          "transition-colors",
          "duration-300",
          "transform",
          "bg-primary/90",
          "rounded-md",
          "hover:bg-primary",
          "focus:outline-none",
          "focus:bg-secondary",
          "focus:ring",
          "focus:ring-secondary",
          "focus:ring-opacity-80",
          3,
          "click",
        ],
        [1, "border-gray-200"],
        [
          1,
          "text-lg",
          "font-medium",
          "text-gray-700",
          "capitalize",
          "lg:text-xl",
        ],
        [1, "mt-8", "space-y-4", "flex", "flex-col", "gap-3"],
        [3, "include", 4, "ngFor", "ngForOf"],
        [3, "include"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
          m(4),
          c(),
          l(5, "div")(6, "h2", 4),
          m(7),
          c(),
          l(8, "select", 5),
          N("ngModelChange", function (a) {
            return (o.selectedPlan = a);
          }),
          l(9, "option", 6),
          m(10, "Monthly"),
          c(),
          l(11, "option", 7),
          m(12, "Yearly"),
          c(),
          l(13, "option", 8),
          m(14, "Quarterly"),
          c(),
          l(15, "option", 9),
          m(16, "Half Yearly"),
          c()()()(),
          l(17, "button", 10),
          N("click", function () {
            return o.getStartNow();
          }),
          m(18, " Start Now "),
          c()(),
          u(19, "hr", 11),
          l(20, "div", 1)(21, "h1", 12),
          m(22, " What\u2019s included: "),
          c(),
          l(23, "div", 13),
          D(24, ol, 1, 1, "app-pricing-card-include-list", 14),
          c()()()),
          r & 2 &&
            (g(4),
            me(" ", o.details == null ? null : o.details.name, " "),
            g(3),
            me(
              " ",
              o.selectedPlan === "monthly"
                ? o.details == null
                  ? null
                  : o.details.price.monthly
                : o.selectedPlan === "yearly"
                ? o.details == null
                  ? null
                  : o.details.price.yearly
                : o.selectedPlan === "quarterly"
                ? o.details == null
                  ? null
                  : o.details.price.quarterly
                : o.selectedPlan === "halfYearly"
                ? o.details == null
                  ? null
                  : o.details.price.halfYearly
                : "Not Available",
              " "
            ),
            g(),
            E("ngModel", o.selectedPlan),
            g(16),
            E("ngForOf", o.details.facilities));
      },
      dependencies: [Et, qn, Vn, jn, Ge, Bn, Co],
    }));
  let n = e;
  return n;
})();
function al(n, e) {
  if ((n & 1 && u(0, "app-pricing-card", 7), n & 2)) {
    let t = e.$implicit;
    E("details", t);
  }
}
var To = (() => {
  let e = class e {
    constructor(i) {
      (this.dialog = i),
        (this.packages = [
          {
            name: "Bronze",
            facilities: [
              "1 Free Doctor Consultation- General Practitioner",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
            ],
            price: {
              monthly: "150 tk",
              quarterly: " 500 tk.",
              halfYearly: " 900 tk.",
              yearly: "Not Available",
            },
            condition: "Subscription based, but no auto-renew option",
          },
          {
            name: "Silver",
            facilities: [
              "2 Free Doctor Consultations- General Practitioner",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
              "Discount on Partner Hospital Service",
            ],
            price: {
              monthly: "250 tk",
              quarterly: "950 tk.",
              halfYearly: "1800 tk.",
              yearly: "Not Available",
            },
            condition: "Subscription based, but no auto-renew option",
          },
          {
            name: "Gold",
            facilities: [
              "3 Free Doctor Consultations- 2 General Practitioners and 1 Specialist Doctor",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
              "Discount on Partner Hospital Service",
              "Hospital Cashback up to BDT 1,00,000",
            ],
            price: {
              monthly: "353 tk",
              quarterly: "1059 tk.",
              halfYearly: "2118 tk.",
              yearly: "4235 tk.",
            },
            condition: "Subscription based, has auto-renew option",
          },
          {
            name: "Platinum",
            facilities: [
              "3 Free Doctor Consultations- 2 General Practitioners and 1 Specialist Doctor",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
              "Discount on Partner Hospital Service",
              "Hospital Cashback up to BDT 20,000",
              "Out Patient Benefit up to BDT 2,000",
            ],
            price: {
              monthly: "445 tk",
              quarterly: "1334 tk.",
              halfYearly: "2667 tk.",
              yearly: "5334 tk.",
            },
            condition: "Subscription based, has auto-renew option",
          },
          {
            name: "Diamond",
            facilities: [
              "4 Free Doctor Consultations- 2 General Practitioners and 2 Specialist Doctors",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
              "Discount on Partner Hospital Service",
              "Hospital Cashback up to BDT 50,000",
              "Natural Death Coverage up to BDT 2,00,000",
            ],
            price: {
              monthly: "794 tk",
              quarterly: "2382 tk.",
              halfYearly: "4764 tk.",
              yearly: "9527 tk.",
            },
            condition: "Subscription based, has auto-renew option",
          },
          {
            name: "Titanium",
            facilities: [
              "4 Free Doctor Consultations- 2 General Practitioners and 2 Specialist Doctors",
              "Discount on Partner Diagnostic Test",
              "Discount on Medicine Purchase",
              "Discount on Home Sample Collection",
              "Discount on Partner Hospital Service",
              "Hospital Cashback up to BDT 50,000",
              "Permanent Total Disability- PTD & Permanent Partial Disability- PPD Coverage (1st Schedule) up to BDT 2,50,000",
              "Natural Death Coverage up to BDT 2,50,000",
              "Accidental Death Coverage up to BDT 5,00,000",
            ],
            price: {
              monthly: "993 tk",
              quarterly: "2979 tk.",
              halfYearly: "5958 tk.",
              yearly: "11916 tk.",
            },
            condition: "Subscription based, has auto-renew option",
          },
        ]);
    }
    comparePrice() {
      let i = this.dialog.open(li, { data: "compare" });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(Ye));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-pricing"]],
      decls: 12,
      vars: 1,
      consts: [
        [1, "bg-blue-50/80", "py-20"],
        [1, "container", "py-8", "mx-auto"],
        [
          1,
          "pb-20",
          "flex",
          "justify-center",
          "mx-auto",
          "text-center",
          "w-1/2",
          "flex-col",
          "items-center",
        ],
        [1, "text-[44px]", "font-semibold", "font-Roboto", "text-primary"],
        [
          1,
          "bg-secondary-dark",
          "py-2",
          "px-4",
          "text-white",
          "mt-4",
          "rounded-md",
          3,
          "click",
        ],
        [
          1,
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "xl:grid-cols-3",
          "gap-6",
          "bg-white",
          "p-5",
        ],
        [3, "details", 4, "ngFor", "ngForOf"],
        [3, "details"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
          m(4, " Pricing Plan "),
          c(),
          l(5, "p"),
          m(
            6,
            " At Soowgood, we understand the importance of seamless access to healthcare services. "
          ),
          c(),
          l(7, "button", 4),
          N("click", function () {
            return o.comparePrice();
          }),
          m(8, " Compare Price "),
          c()(),
          l(9, "div")(10, "div", 5),
          D(11, al, 1, 1, "app-pricing-card", 6),
          c()()()()),
          r & 2 && (g(11), E("ngForOf", o.packages));
      },
      dependencies: [Et, Eo],
    }));
  let n = e;
  return n;
})();
var Mo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-newsletter"]],
      decls: 28,
      vars: 0,
      consts: [
        [1, "bg-slate-100", "py-20"],
        [
          1,
          "bg-white",
          "rounded-xl",
          "py-6",
          "flex",
          "justify-center",
          "items-center",
          "mx-auto",
          "max-w-[1100px]",
          "shadow-soft",
        ],
        [1, "bg-white"],
        [1, "py-8", "px-4"],
        [
          1,
          "flex",
          "justify-between",
          "items-center",
          "sm:text-center",
          "gap-5",
          "2xl:px-6",
        ],
        [1, "w-1/2", "h-fit"],
        [
          1,
          "mb-4",
          "text-left",
          "text-2xl",
          "tracking-tight",
          "font-bold",
          "text-primary",
          "sm:text-4xl",
        ],
        [1, "mx-auto", "text-left", "max-w-2xl", "font-light", "text-gray-500"],
        [
          1,
          "items-center",
          "mx-auto",
          "mb-3",
          "space-y-4",
          "max-w-screen-sm",
          "sm:flex",
          "sm:space-y-0",
        ],
        [1, "relative", "w-full"],
        [
          "for",
          "email",
          1,
          "hidden",
          "mb-2",
          "text-sm",
          "font-medium",
          "text-gray-900",
        ],
        [
          1,
          "flex",
          "absolute",
          "inset-y-0",
          "left-0",
          "items-center",
          "pl-3",
          "pointer-events-none",
        ],
        [
          "fill",
          "currentColor",
          "viewBox",
          "0 0 20 20",
          "xmlns",
          "http://www.w3.org/2000/svg",
          1,
          "w-5",
          "h-5",
          "text-gray-500",
        ],
        [
          "d",
          "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
        ],
        ["d", "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"],
        [
          "placeholder",
          "Enter your email",
          "type",
          "email",
          "id",
          "email",
          "required",
          "",
          1,
          "block",
          "p-3",
          "pl-10",
          "w-full",
          "text-sm",
          "text-gray-900",
          "bg-gray-50",
          "rounded-lg",
          "border",
          "border-gray-300",
          "sm:rounded-none",
          "sm:rounded-l-lg",
          "focus:ring-primary-500",
          "focus:border-primary-500",
        ],
        [
          "type",
          "submit",
          1,
          "btn-secondary",
          "bg-primary",
          "py-3",
          "px-5",
          "w-full",
          "text-sm",
          "font-medium",
          "text-center",
          "text-white",
          "rounded-lg",
          "border",
          "cursor-pointer",
          "bg-primary-700",
          "border-primary-600",
          "sm:rounded-none",
          "sm:rounded-r-lg",
          "hover:bg-primary-800",
          "focus:ring-4",
          "focus:ring-primary-300",
        ],
        [
          1,
          "mx-auto",
          "max-w-screen-sm",
          "text-sm",
          "text-left",
          "text-gray-500",
          "newsletter-form-footer",
        ],
        ["href", "#", 1, "font-medium", "text-primary-600", "hover:underline"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(
            4,
            "div",
            4
          )(5, "div", 5)(6, "h2", 6),
          m(7, " Sign up for our newsletter "),
          c(),
          l(8, "p", 7),
          m(
            9,
            " Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email. "
          ),
          c()(),
          l(10, "form")(11, "div", 8)(12, "div", 9)(13, "label", 10),
          m(14, "Email address"),
          c(),
          l(15, "div", 11),
          G(),
          l(16, "svg", 12),
          u(17, "path", 13)(18, "path", 14),
          c()(),
          re(),
          u(19, "input", 15),
          c(),
          l(20, "div")(21, "button", 16),
          m(22, " Subscribe "),
          c()()(),
          l(23, "div", 17),
          m(24, " We care about the protection of your data. "),
          l(25, "a", 18),
          m(26, "Read our Privacy Policy"),
          c(),
          m(27, ". "),
          c()()()()()()());
      },
      dependencies: [Qe, $e, zn],
    }));
  let n = e;
  return n;
})();
var dl = () => [So],
  ml = () => [wo],
  pl = () => [To],
  ul = () => [Mo];
function fl(n, e) {
  n & 1 && u(0, "app-signup-marketing-banner");
}
function hl(n, e) {
  n & 1 && (l(0, "div", 4), m(1, " Loading... "), c());
}
function gl(n, e) {
  n & 1 && u(0, "app-app-marketing");
}
function yl(n, e) {
  n & 1 && (l(0, "div", 4), m(1, " Loading... "), c());
}
function vl(n, e) {
  n & 1 && u(0, "app-pricing");
}
function bl(n, e) {
  n & 1 && (l(0, "div", 4), m(1, " Loading... "), c());
}
function xl(n, e) {
  n & 1 && u(0, "app-newsletter");
}
function _l(n, e) {
  n & 1 && (l(0, "div", 4), m(1, " Loading... "), c());
}
var ci = (() => {
  let e = class e {
    ngOnInit() {
      this.model = {
        firstname: {
          type: "text",
          value: "",
          label: "FirstName",
          rules: { required: !0 },
        },
        lastname: {
          type: "text",
          value: "",
          label: "LastName",
          rules: { required: !0 },
        },
        address: {
          type: "text",
          value: "",
          label: "Address",
          rules: { required: !0 },
        },
        age: {
          type: "number",
          value: "",
          label: "age",
          rules: { required: !0 },
        },
        birthDay: {
          type: "date",
          value: "",
          label: "Birthday",
          rules: { required: !0 },
        },
      };
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-landing-page"]],
      decls: 25,
      vars: 0,
      consts: [
        ["scrolltop", ""],
        [1, "relative", "w-full"],
        [
          "appScroll",
          "",
          1,
          "absolute",
          "bottom-10",
          "right-10",
          "cursor-pointer",
          "bg-secondary",
          "p-4",
          "text-white",
          "rounded-md",
        ],
        [1, "fa-solid", "fa-arrow-up"],
        [
          1,
          "flex",
          "flex-shrink-1",
          "w-full",
          "h-[300px]",
          "justify-center",
          "items-center",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (u(0, "app-header")(1, "div", null, 0),
          l(3, "div", 1),
          u(4, "app-banner")(5, "app-live-doctors"),
          D(6, fl, 1, 0)(7, hl, 2, 0),
          ot(8, 6, dl, null, 7),
          at(0, -1),
          st(),
          D(10, gl, 1, 0)(11, yl, 2, 0),
          ot(12, 10, ml, null, 11),
          at(0, -1),
          st(),
          D(14, vl, 1, 0)(15, bl, 2, 0),
          ot(16, 14, pl, null, 15),
          at(0, -1),
          st(),
          D(18, xl, 1, 0)(19, _l, 2, 0),
          ot(20, 18, ul, null, 19),
          at(0, -1),
          st(),
          c(),
          l(22, "div", 2),
          u(23, "i", 3),
          c(),
          u(24, "app-footer"));
      },
      dependencies: [yo, ri, oi, bo, _o],
    }));
  let n = e;
  return n;
})();
function Sl(n, e) {
  if ((n & 1 && (l(0, "div", 16), m(1), c()), n & 2)) {
    let t = O();
    g(),
      Ct(
        " successfully sent your request for user: ",
        t.message.fullName,
        " mobile number: ",
        t.message.mobileNumber,
        " "
      );
  }
}
function wl(n, e) {
  if ((n & 1 && (l(0, "div", 17), m(1), c()), n & 2)) {
    let t = O();
    g(), me(" ", t.errorMessage, " ");
  }
}
var ko = (() => {
  let e = class e {
    constructor(i, r) {
      (this.fb = i),
        (this.httpClient = r),
        (this.url = "https://apisoowgoodbeta.com/api/app/user-data-delete"),
        (this.message = ""),
        (this.errorMessage = "");
    }
    ngOnInit() {
      window.scrollTo(0, 0), this.loadForm();
    }
    loadForm() {
      this.deleteForm = this.fb.group({
        mobileNumber: ["", vi.required],
        fullName: ["", vi.required],
        description: "",
      });
    }
    submit() {
      if (this.deleteForm.invalid) {
        (this.errorMessage = ""),
          (this.errorMessage = "Mobile and Username is Required");
        return;
      }
      try {
        this.httpClient.post(this.url, this.deleteForm.value).subscribe({
          next: (i) => {
            (this.errorMessage = ""),
              (this.message = i),
              console.log("Request successful:", i);
          },
          error: (i) => {
            console.error("Error occurred:", i);
          },
        });
      } catch (i) {
        console.error("Exception occurred:", i);
      }
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(At), x(In));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-accout-delete-request"]],
      decls: 23,
      vars: 3,
      consts: [
        [1, "h-screen", "flex", "items-center", "justify-center", "pt-[100px]"],
        [
          1,
          "border-[1px]",
          "p-5",
          "rounded-lg",
          "mx-auto",
          "w-[450px]",
          3,
          "formGroup",
          "submit",
        ],
        [1, "pb-4", "pt-2", "text-[24px]", "font-Roboto", "border-b-[1px]"],
        [1, "flex", "flex-col", "space-y-1", "mt-6"],
        ["for", "mobileNumber", 1, "font-semibold"],
        [
          1,
          "flex",
          "gap-1",
          "border-[1px]",
          "py-2.5",
          "px-3",
          "h-[40px]",
          "rounded-md",
          "outline-none",
          "focus:bg-secondary/10",
        ],
        ["matPrefix", "", 1, "h-fit", "font-Roboto", "text-[14px]"],
        [
          "autocomplete",
          "off",
          "matInput",
          "",
          "maxlength",
          "11",
          "type",
          "tel",
          "formControlName",
          "mobileNumber",
          "id",
          "mobileNo",
          "placeholder",
          "018-000-00000",
          "required",
          "",
          "inputmode",
          "numeric",
          1,
          "w-full",
          "border-none",
          "outline-none",
          "font-Roboto",
          "h-fit",
          "text-[14px]",
        ],
        [1, "flex", "flex-col", "space-y-1", "mt-3"],
        ["for", "username", 1, "font-semibold"],
        [
          "type",
          "text",
          "placeholder",
          "Enter your username",
          "formControlName",
          "fullName",
          1,
          "border-[1px]",
          "py-2",
          "px-3",
          "rounded-md",
          "outline-none",
          "focus:bg-secondary/10",
        ],
        ["for", "description", 1, "font-semibold"],
        [
          "type",
          "text",
          "rows",
          "2",
          "placeholder",
          "Reason",
          "formControlName",
          "description",
          1,
          "border-[1px]",
          "py-2",
          "px-3",
          "rounded-md",
          "outline-none",
          "focus:bg-secondary/10",
        ],
        ["type", "submit", 1, "btn-secondary", "bg-red-500", "w-full", "mt-6"],
        ["class", "p-4 bg-green-200 text-green-900 font-Roboto mt-3"],
        ["class", "p-4 bg-red-200 text-red-900 font-Roboto mt-3"],
        [1, "p-4", "bg-green-200", "text-green-900", "font-Roboto", "mt-3"],
        [1, "p-4", "bg-red-200", "text-red-900", "font-Roboto", "mt-3"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "form", 1),
          N("submit", function () {
            return o.submit();
          }),
          l(2, "h1", 2),
          m(3, " Request to Delete Acoount! "),
          c(),
          l(4, "div", 3)(5, "label", 4),
          m(6, "Mobile Number"),
          c(),
          l(7, "div", 5)(8, "span", 6),
          m(9, "+88 \xA0"),
          c(),
          u(10, "input", 7),
          c()(),
          l(11, "div", 8)(12, "label", 9),
          m(13, "Username"),
          c(),
          u(14, "input", 10),
          c(),
          l(15, "div", 8)(16, "label", 11),
          m(17, "Why you want to delete your account?"),
          c(),
          u(18, "textarea", 12),
          c(),
          l(19, "button", 13),
          m(20, " Request "),
          c(),
          D(21, Sl, 2, 2, "div", 14)(22, wl, 2, 1, "div", 15),
          c()()),
          r & 2 &&
            (g(),
            E("formGroup", o.deleteForm),
            g(20),
            _e(21, o.message ? 21 : -1),
            g(),
            _e(22, o.errorMessage ? 22 : -1));
      },
      dependencies: [Qe, Mt, Ge, $e, Hn, Un, kt, Pt],
    }));
  let n = e;
  return n;
})();
function Cl(n, e) {
  if (
    (n & 1 &&
      (l(0, "div", 1)(1, "div", 2)(2, "span", 3),
      m(3, "THANK YOU !"),
      c(),
      u(4, "img", 4),
      l(5, "h1", 5),
      m(6, " Your Payment is Success. "),
      c(),
      l(7, "p", 6),
      m(8, "Thank for your payment."),
      c(),
      l(9, "p", 7),
      m(10),
      c(),
      l(11, "div", 8)(12, "button", 9),
      m(13, "Back to Home"),
      c(),
      l(14, "button", 10),
      m(15),
      c()()()()),
    n & 2)
  ) {
    let t = O();
    g(10),
      de(t.message),
      g(4),
      E("routerLink", "/" + t.userType + "/appointments"),
      g(),
      me(" ", t.isLoading ? "Loading" : "See Appointments", " ");
  }
}
var Po = (() => {
  let e = class e {
    constructor(i, r, o, s) {
      (this.sslCommerzService = i),
        (this.tosterService = r),
        (this.AuthService = o),
        (this.Router = s),
        (this.userType = ""),
        (this.isLoading = !1),
        (this.message = ""),
        (this.showTemplate = !1);
    }
    ngOnInit() {
      if (
        ((this.userType = this.AuthService.authInfo()?.userType),
        (this.appCode = JSON.parse(
          localStorage.getItem("patientAppointmentCode") || ""
        )),
        (this.isLoading = !0),
        this.userType)
      )
        (this.showTemplate = !0),
          this.sslCommerzService
            .updateAppointmentPaymentStatus(this.appCode, 1)
            .subscribe((i) => {
              (this.isLoading = !1),
                (this.message = "Your appointment is confirmed!");
            });
      else {
        this.showTemplate = !1;
        return;
      }
    }
    ngAfterViewInit() {
      this.userType ||
        (this.tosterService.customToast(
          "You are not authorized to visit this page",
          "error"
        ),
        this.Router.navigate(["/"]));
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(Je), x(ue), x(se), x(H));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-payment-success"]],
      decls: 1,
      vars: 1,
      consts: [
        [
          "class",
          "flex justify-center h-screen w-full items-center",
          4,
          "ngIf",
        ],
        [1, "flex", "justify-center", "h-screen", "w-full", "items-center"],
        [
          1,
          "lg:w-[60%]",
          "flex",
          "justify-center",
          "flex-col",
          "items-center",
          "relative",
        ],
        [
          1,
          "absolute",
          "text-[120px]",
          "font-extrabold",
          "text-primary/5",
          "-z-10",
          "top-6",
        ],
        ["src", "/assets/payment/card-payment.svg", "alt", "", 1, "w-[200px]"],
        [
          1,
          "font-poppins",
          "text-[24px]",
          "font-semibold",
          "text-primary/80",
          "mt-6",
        ],
        [1, "mt-4"],
        [1, "text-green-500", "font-semibold"],
        [1, "mt-7"],
        ["routerLink", "/", 1, "btn-primary"],
        [1, "btn-primary", 3, "routerLink"],
      ],
      template: function (r, o) {
        r & 1 && D(0, Cl, 16, 3, "div", 0), r & 2 && E("ngIf", o.showTemplate);
      },
      dependencies: [Te, $],
      styles: [
        ".alert[_ngcontent-%COMP%]{background:#f8d7da;padding:5px 10px;border-radius:8px}.animation-ctn[_ngcontent-%COMP%]{text-align:center;margin:5em auto}@-webkit-keyframes _ngcontent-%COMP%_checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@-ms-keyframes checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:200px}}@keyframes _ngcontent-%COMP%_checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@-webkit-keyframes _ngcontent-%COMP%_checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@-ms-keyframes checkmark-circle{0%{stroke-dashoffset:240px}to{stroke-dashoffset:480px}}@keyframes _ngcontent-%COMP%_checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes _ngcontent-%COMP%_colored-circle{0%{opacity:0}to{opacity:100}}.inlinesvg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_checkmark .3s ease-in-out .9s backwards;animation:_ngcontent-%COMP%_checkmark .3s ease-in-out .9s backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_checkmark-circle .6s ease-in-out backwards;animation:_ngcontent-%COMP%_checkmark-circle .6s ease-in-out backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle#colored[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_colored-circle .6s ease-in-out .7s backwards;animation:_ngcontent-%COMP%_colored-circle .6s ease-in-out .7s backwards}",
      ],
    }));
  let n = e;
  return n;
})();
var Ao = (() => {
  let e = class e {
    constructor(i, r, o) {
      (this.sslCommerzService = i),
        (this.paymentHistoryService = r),
        (this.tosterService = o);
    }
    ngOnInit() {
      (this.appCode = JSON.parse(
        localStorage.getItem("patientAppointmentCode") || ""
      )),
        this.sslCommerzService
          .updateAppointmentPaymentStatus(this.appCode, 2)
          .subscribe((i) => {
            this.tosterService.customToast(
              "Appointment Cancelled due to payment cancelled!!!",
              "warning"
            );
          });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(Je), x(Ft), x(ue));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-payment-cancel"]],
      decls: 12,
      vars: 0,
      consts: [
        [1, "flex", "justify-center", "h-screen", "w-full", "items-center"],
        [
          1,
          "lg:w-[60%]",
          "flex",
          "justify-center",
          "flex-col",
          "items-center",
          "relative",
        ],
        [
          1,
          "absolute",
          "text-[120px]",
          "font-extrabold",
          "text-primary/5",
          "-z-10",
          "top-6",
        ],
        [
          "width",
          "200",
          "height",
          "200",
          "ngSrc",
          "/assets/payment/card-payment.svg",
          "alt",
          "",
          1,
          "w-[200px]",
        ],
        [
          1,
          "font-poppins",
          "text-[24px]",
          "font-semibold",
          "text-primary/80",
          "mt-6",
        ],
        [1, "mt-4"],
        [1, "mt-7"],
        ["routerLink", "/", 1, "btn-primary"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "span", 2),
          m(3, "OPS !"),
          c(),
          u(4, "img", 3),
          l(5, "h1", 4),
          m(6, " Your Payment is Cancelled! "),
          c(),
          l(7, "p", 5),
          m(8, "Please Contact to the administrator."),
          c(),
          l(9, "div", 6)(10, "button", 7),
          m(11, "Back to Home"),
          c()()()());
      },
      dependencies: [$],
    }));
  let n = e;
  return n;
})();
var Do = (() => {
  let e = class e {
    constructor(i, r, o) {
      (this.sslCommerzService = i),
        (this.paymentHistoryService = r),
        (this.tosterService = o);
    }
    ngOnInit() {
      (this.appCode = JSON.parse(
        localStorage.getItem("patientAppointmentCode") || ""
      )),
        this.sslCommerzService
          .updateAppointmentPaymentStatus(this.appCode, 2)
          .subscribe((i) => {
            this.tosterService.customToast(
              "Appointment Cancelled due to payment faild",
              "error"
            );
          });
    }
  };
  (e.ɵfac = function (r) {
    return new (r || e)(x(Je), x(Ft), x(ue));
  }),
    (e.ɵcmp = w({
      type: e,
      selectors: [["app-payment-faild"]],
      decls: 12,
      vars: 0,
      consts: [
        [1, "flex", "justify-center", "h-screen", "w-full", "items-center"],
        [
          1,
          "lg:w-[60%]",
          "flex",
          "justify-center",
          "flex-col",
          "items-center",
          "relative",
        ],
        [
          1,
          "absolute",
          "text-[120px]",
          "font-extrabold",
          "text-primary/5",
          "-z-10",
          "top-6",
        ],
        [
          "width",
          "250",
          "height",
          "250",
          "ngSrc",
          "/assets/payment/card-payment.svg",
          "alt",
          "",
          1,
          "w-[200px]",
        ],
        [
          1,
          "font-poppins",
          "text-[24px]",
          "font-semibold",
          "text-primary/80",
          "mt-6",
        ],
        [1, "mt-4"],
        [1, "mt-7"],
        ["routerLink", "/", 1, "btn-primary"],
      ],
      template: function (r, o) {
        r & 1 &&
          (l(0, "div", 0)(1, "div", 1)(2, "span", 2),
          m(3, "OPS !"),
          c(),
          u(4, "img", 3),
          l(5, "h1", 4),
          m(6, " Your Payment is Faild! "),
          c(),
          l(7, "p", 5),
          m(8, "Please Contact to the administrator."),
          c(),
          l(9, "div", 6)(10, "button", 7),
          m(11, "Back to Home"),
          c()()()());
      },
      dependencies: [$],
    }));
  let n = e;
  return n;
})();
var di = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵmod = q({ type: e })),
    (e.ɵinj = B({ imports: [oe, pe.forChild([])] }));
  let n = e;
  return n;
})();
var El = [
    { path: "", component: ci },
    { path: "acoount-delete-request", component: ko },
    { path: "payment-success", component: Po },
    { path: "payment-cancel", component: Ao },
    { path: "payment-faild", component: Do },
  ],
  Oo = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵmod = q({ type: e })),
      (e.ɵinj = B({
        imports: [oe, pe.forChild(El), ct, zt, wr, lt, si, di, Cr],
      }));
    let n = e;
    return n;
  })();
var Tl = [
    {
      path: "",
      children: [
        { path: "", pathMatch: "full", component: ci },
        {
          path: "search",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-3FRO3TTP.js").then((n) => n.SearchPageModule),
            },
            {
              path: "doctors/:id",
              loadChildren: () =>
                import("./chunk-WJCCB7PS.js").then(
                  (n) => n.DoctorProfilePageModule
                ),
            },
          ],
        },
        {
          path: "agent",
          component: ai,
          canActivate: [Rt],
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-F7YNOAKI.js").then((n) => n.AgentModule),
            },
          ],
        },
        {
          path: "doctor",
          canActivate: [Rt],
          component: ai,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-EFGTYD3T.js").then((n) => n.DoctorModule),
            },
          ],
        },
        {
          path: "patient",
          canActivate: [Rt],
          component: ai,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-FWYKV56L.js").then((n) => n.PatientModule),
            },
          ],
        },
        {
          path: "soowgood-point",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-6WWJS2NB.js").then(
                  (n) => n.SoowgoodPointModule
                ),
            },
          ],
        },
        {
          path: "soowgood-booth",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-C5ZGYP5O.js").then(
                  (n) => n.SoowgoodBoothModule
                ),
            },
          ],
        },
        {
          path: "about-us",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-WWLGHGLE.js").then((n) => n.AboutUsModule),
            },
          ],
        },
        {
          path: "contact-us",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-VYYF7SNL.js").then((n) => n.ContactUsModule),
            },
          ],
        },
        {
          path: "terms-services",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-QHDGXHL6.js").then(
                  (n) => n.TearmsServicesModule
                ),
            },
          ],
        },
        {
          path: "refund-policy",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-NAR6AOPQ.js").then((n) => n.RefundPolicyModule),
            },
          ],
        },
        {
          path: "privacy",
          component: he,
          children: [
            {
              path: "",
              loadChildren: () =>
                import("./chunk-4USYASB2.js").then((n) => n.PrivacyModule),
            },
          ],
        },
      ],
    },
  ],
  Io = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵmod = q({ type: e })),
      (e.ɵinj = B({ imports: [oe, si, pe.forChild(Tl), Oo, di] }));
    let n = e;
    return n;
  })();
var Ml = [
    { path: "", component: he },
    {
      path: "login",
      canActivate: [ni],
      loadChildren: () =>
        import("./chunk-VM32WF2O.js").then((n) => n.LoginModule),
    },
    {
      path: "forgot-password",
      loadChildren: () =>
        import("./chunk-HBIFQZTK.js").then((n) => n.ForgotPasswordModule),
    },
    {
      path: "signup",
      loadChildren: () =>
        import("./chunk-PWTJ7OV6.js").then((n) => n.SignupModule),
    },
    {
      path: "agent/signup",
      canActivate: [ni],
      loadChildren: () =>
        import("./chunk-NMYRGWBM.js").then((n) => n.AgentSignupModule),
    },
    {
      path: "agent/login",
      canActivate: [ni],
      loadChildren: () =>
        import("./chunk-WRQLBKOM.js").then((n) => n.AgentLoginModule),
    },
    { path: "**", component: fo },
  ],
  No = (() => {
    let e = class e {};
    (e.ɵfac = function (r) {
      return new (r || e)();
    }),
      (e.ɵmod = q({ type: e })),
      (e.ɵinj = B({ imports: [pe.forRoot(Ml), Io, pe] }));
    let n = e;
    return n;
  })();
var Lo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵmod = q({ type: e })),
    (e.ɵinj = B({ imports: [oe] }));
  let n = e;
  return n;
})();
var Fo = (() => {
  let e = class e {};
  (e.ɵfac = function (r) {
    return new (r || e)();
  }),
    (e.ɵmod = q({ type: e, bootstrap: [uo] })),
    (e.ɵinj = B({
      providers: [{ provide: Pn, useClass: An }],
      imports: [
        Tt,
        wi,
        Ln,
        cr,
        wi,
        Lo,
        er.forRoot({ environment: Ze, registerLocaleFn: kr() }),
        po,
        zt,
        No,
        lr.forRoot({ position: "bottom-right" }),
        Tr,
        Er,
        ct,
        lt,
        Lr.forRoot(),
        ar,
        ct,
        lt,
      ],
    }));
  let n = e;
  return n;
})();
Rn()
  .bootstrapModule(Fo)
  .catch((n) => console.error(n));
