import { a as V } from "./chunk-IZ4OZ4UU.js";
import { a as R } from "./chunk-KZZFNO2Y.js";
import { c as L } from "./chunk-3BRYM6P7.js";
import { b as k } from "./chunk-NJZYVABX.js";
import "./chunk-IBQVX35S.js";
import { A as z, c as G } from "./chunk-GEVSPATW.js";
import { a as P } from "./chunk-7LPMGZKA.js";
import {
  D as U,
  E,
  F as O,
  h as D,
  i as T,
  n as _,
  r as A,
  u as M,
} from "./chunk-N3UDIXRD.js";
import {
  $a as y,
  Ha as c,
  Ma as l,
  S as h,
  Vb as w,
  Wb as C,
  X as v,
  Xa as m,
  Y as b,
  Ya as d,
  Za as p,
  _a as x,
  cc as N,
  fb as S,
  fc as j,
  tb as I,
  xc as F,
  ya as a,
  za as s,
} from "./chunk-TXQBTV46.js";
import { a as u, b as g } from "./chunk-5G567QLT.js";
function H(t, e) {
  if ((t & 1 && (x(0, 23), p(1, "app-input", 24), y()), t & 2)) {
    let r = e.$implicit;
    a(),
      l("label", r.label)("inputId", r.inputId)("isSelectInput", r.isSelect)(
        "readonly",
        r.readonly ? r.readonly : !1
      )("options", r.options)("formControlName", r.formControlName)(
        "type",
        r.type
      )("placeholder", r.label);
  }
}
function J(t, e) {
  t & 1 && p(0, "span", 25);
}
var B = (() => {
  let e = class e {
    constructor(o, i, n, f, $) {
      (this.fb = o),
        (this.NormalAuth = i),
        (this.AgentProfileService = n),
        (this.TosterService = f),
        (this.UserinfoStateService = $),
        (this.agentInputData = []);
    }
    ngOnInit() {
      this.loadForm();
      let o = this.NormalAuth.authInfo().id;
      (this.agentId = o),
        o &&
          this.UserinfoStateService.getData().subscribe((i) => {
            (this.profileInfo = i), this.form.patchValue(i);
          }),
        (this.agentInputData = L);
    }
    loadForm() {
      this.form = this.fb.group({
        fullName: [""],
        agentCode: [""],
        mobileNo: [""],
        email: [""],
        address: [""],
        contact: [""],
      });
    }
    onUpdateAgentDate() {
      this.isLoading = !0;
      try {
        this.AgentProfileService.update(
          g(u({}, this.form.value), { id: this.agentId })
        ).subscribe((o) => {
          console.log(o),
            this.TosterService.customToast("Successfully updated", "success"),
            (this.isLoading = !1);
        });
      } catch {
        this.TosterService.customToast("Update Failed", "error");
      }
    }
  };
  (e.ɵfac = function (i) {
    return new (i || e)(s(U), s(P), s(G), s(z), s(k));
  }),
    (e.ɵcmp = v({
      type: e,
      selectors: [["app-profile-settings"]],
      decls: 27,
      vars: 4,
      consts: [
        [1, "doctor-dashboard_midcontent_container", "p-4"],
        [1, "mx-auto"],
        [
          1,
          "bg-white",
          "relative",
          "shadow",
          "rounded-lg",
          "w-full",
          "mx-auto",
        ],
        [1, "p-10", "pt-8"],
        [1, "flex", "justify-between", "items-center"],
        [1, "flex", "justify-left", "items-center", "gap-6"],
        [1, "relative", "w-[128px]", "h-[128px]", "bg-white", "transition"],
        [
          "width",
          "100",
          "height",
          "100",
          "alt",
          "",
          1,
          "object-cover",
          "rounded-lg",
          "mx-auto",
          "w-32",
          "h-32",
          "shadow-md",
          "border-4",
          "border-white",
          3,
          "ngSrc",
        ],
        [
          "type",
          "file",
          "accept",
          ".gif,.jpg,.jpeg,.png,.doc,.docx,.pdf",
          "multiple",
          "",
          2,
          "display",
          "none",
        ],
        ["attachments", "", "fileInput", ""],
        [
          1,
          "duration-200",
          "transform",
          "hover:scale-110",
          "flex",
          "justify-center",
          "items-center",
          "cursor-pointer",
          "absolute",
          "-bottom-[8px]",
          "-right-[8px]",
          "w-[30px]",
          "h-[30px]",
          "rounded-full",
          "p-1",
          "bg-white",
          "z-20",
          "border-[1px]",
        ],
        [1, "fa-solid", "fa-camera", "text-primary"],
        [
          1,
          "font-bold",
          "text-left",
          "text-3xl",
          "text-gray-900",
          "dashbord-heading-text",
        ],
        [
          1,
          "text-left",
          "text-sm",
          "text-gray-400",
          "mt-2",
          "font-medium",
          "dashbord-heading-subtext",
        ],
        [1, "w-full", "bg-white", "mt-10"],
        [3, "formGroup"],
        [1, "-mx-3", "flex", "flex-wrap"],
        ["class", "w-full", 4, "ngFor", "ngForOf"],
        [1, "flex", "items-center", "justify-end", "w-fit", "mt-6"],
        [
          1,
          "btn-secondary",
          "px-10",
          "hover:text-primary",
          "border-transparent",
          "hover:border",
          "hover:border-secondary-border",
          "group",
        ],
        [
          1,
          "flex",
          "items-center",
          "gap-1",
          "text-white",
          "group-hover:text-primary",
        ],
        [3, "click"],
        ["class", "loading loading-dots loading-md", 4, "ngIf"],
        [1, "w-full"],
        [
          1,
          "sm:w-1/3",
          3,
          "label",
          "inputId",
          "isSelectInput",
          "readonly",
          "options",
          "formControlName",
          "type",
          "placeholder",
        ],
        [1, "loading", "loading-dots", "loading-md"],
      ],
      template: function (i, n) {
        i & 1 &&
          (m(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3)(
            5,
            "div",
            4
          )(6, "div", 5)(7, "div", 6),
          p(8, "img", 7)(9, "input", 8, 9),
          m(12, "div", 10),
          p(13, "i", 11),
          d()(),
          m(14, "div"),
          p(15, "h1", 12)(16, "p", 13),
          d()()(),
          m(17, "div", 14)(18, "form", 15)(19, "div", 16),
          c(20, H, 2, 8, "ng-container", 17),
          d(),
          m(21, "div", 18)(22, "button", 19)(23, "div", 20)(24, "span", 21),
          S("click", function () {
            return n.onUpdateAgentDate();
          }),
          I(25, "Update Info"),
          d()(),
          c(26, J, 1, 0, "span", 22),
          d()()()()()()()()()),
          i & 2 &&
            (a(8),
            l("ngSrc", n.url ? n.url : "/assets/doctor/avater.png"),
            a(10),
            l("formGroup", n.form),
            a(2),
            l("ngForOf", n.agentInputData),
            a(6),
            l("ngIf", n.isLoading == !0));
      },
      dependencies: [w, C, R, _, D, T, A, M, j],
    }));
  let t = e;
  return t;
})();
var K = [{ path: "", component: B }],
  pe = (() => {
    let e = class e {};
    (e.ɵfac = function (i) {
      return new (i || e)();
    }),
      (e.ɵmod = b({ type: e })),
      (e.ɵinj = h({ imports: [N, F.forChild(K), V, O, E] }));
    let t = e;
    return t;
  })();
export { pe as ProfileSettingsModule };
