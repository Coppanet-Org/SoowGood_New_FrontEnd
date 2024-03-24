import { a as R } from "./chunk-IO662K4Q.js";
import "./chunk-DJNKJFRI.js";
import { a as j, b as B, c as O } from "./chunk-U4GQQU26.js";
import { c as k } from "./chunk-XTINLLUJ.js";
import "./chunk-46JTLTO3.js";
import "./chunk-YTSUX7O2.js";
import "./chunk-4DRUEFLH.js";
import { s as N, v as L } from "./chunk-GEVSPATW.js";
import { a as F } from "./chunk-7LPMGZKA.js";
import "./chunk-N3UDIXRD.js";
import {
  Db as u,
  Eb as b,
  Ha as D,
  Ma as x,
  S,
  Vb as w,
  X as p,
  Xa as o,
  Y as E,
  Ya as e,
  Za as f,
  aa as v,
  ac as M,
  ba as y,
  bb as P,
  cc as T,
  fb as C,
  hb as I,
  sc as A,
  tb as r,
  vb as m,
  xc as _,
  ya as d,
  za as c,
} from "./chunk-TXQBTV46.js";
import "./chunk-BYPGBJQR.js";
import "./chunk-FK6H3RFT.js";
import "./chunk-5G567QLT.js";
var J = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = p({
      type: t,
      selectors: [["app-patient-medical-records"]],
      decls: 1,
      vars: 0,
      template: function (i, n) {
        i & 1 &&
          r(
            0,
            `Coming soon...
`
          );
      },
    }));
  let a = t;
  return a;
})();
var H = (() => {
  let t = class t {};
  (t.ɵfac = function (i) {
    return new (i || t)();
  }),
    (t.ɵcmp = p({
      type: t,
      selectors: [["app-patient-billing-history"]],
      decls: 1,
      vars: 0,
      template: function (i, n) {
        i & 1 &&
          r(
            0,
            `coming soon...
`
          );
      },
    }));
  let a = t;
  return a;
})();
function $(a, t) {
  if (a & 1) {
    let s = P();
    o(0, "tr", 6)(1, "td", 4),
      r(2),
      e(),
      o(3, "td", 4),
      r(4),
      u(5, "date"),
      e(),
      o(6, "td", 4),
      r(7),
      u(8, "date"),
      e(),
      o(9, "td", 4)(10, "span", 7),
      C("click", function () {
        let n = v(s).$implicit,
          h = I();
        return y(h.openPdfDialog(n.id));
      }),
      r(11, "View"),
      e()(),
      o(12, "td", 4),
      r(13),
      u(14, "date"),
      e(),
      o(15, "td", 4),
      r(16),
      e()();
  }
  if (a & 2) {
    let s = t.$implicit;
    d(2),
      m("Dr. ", s.doctorName, ""),
      d(2),
      m(" ", b(5, 5, s.prescriptionDate), " "),
      d(3),
      m(" ", b(8, 7, s.appointmentDate), " "),
      d(6),
      m(" ", b(14, 9, s.followupDate), " "),
      d(3),
      m(" ", s.advice, " ");
  }
}
var U = (() => {
  let t = class t {
    constructor(l) {
      this.dialog = l;
    }
    openPdfDialog(l) {
      this.dialog.open(R, {
        minWidth: "820px",
        maxWidth: "100%",
        height: "1000px",
        data: { prescriptionId: l },
      });
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(c(k));
  }),
    (t.ɵcmp = p({
      type: t,
      selectors: [["app-patient-prescriptions"]],
      inputs: { prescriptionListDetails: "prescriptionListDetails" },
      decls: 18,
      vars: 1,
      consts: [
        [1, "px-4", "py-3"],
        [
          1,
          "w-full",
          "text-sm",
          "text-left",
          "rounded-lg",
          "text-gray-500",
          "border-[1px]",
        ],
        [
          1,
          "text-xs",
          "rounded-lg",
          "text-gray-800",
          "uppercase",
          "bg-black/5",
        ],
        ["scope", "col", 1, "px-6", "py-3"],
        [1, "px-6", "py-4"],
        ["class", "bg-white hover:bg-gray-50", 4, "ngFor", "ngForOf"],
        [1, "bg-white", "hover:bg-gray-50"],
        [
          1,
          "py-1",
          "px-4",
          "border-secondary-dark/10",
          "border-[1px]",
          "bg-secondary-light",
          "text-primary",
          "rounded-md",
          "cursor-pointer",
          3,
          "click",
        ],
      ],
      template: function (i, n) {
        i & 1 &&
          (o(0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th", 3),
          r(5, "Doctor's Name"),
          e(),
          o(6, "th", 3),
          r(7, "Prescription Date"),
          e(),
          o(8, "td", 4),
          r(9, "Appointment Date"),
          e(),
          o(10, "th", 3),
          r(11, "Prescription"),
          e(),
          o(12, "td", 4),
          r(13, "Followup Date"),
          e(),
          o(14, "th", 3),
          r(15, "Advice"),
          e()()(),
          o(16, "tbody"),
          D(17, $, 17, 11, "tr", 5),
          e()()()),
          i & 2 && (d(17), x("ngForOf", n.prescriptionListDetails));
      },
      dependencies: [w, M],
    }));
  let a = t;
  return a;
})();
var V = (() => {
  let t = class t {
    constructor(l, i, n, h) {
      (this.route = l),
        (this.PatientProfileService = i),
        (this.PrescriptionMasterService = n),
        (this.NormalAuth = h);
    }
    ngOnInit() {
      let l = this.NormalAuth.authInfo();
      this.userInfo = l;
      let { patientProfileId: i } = this.route.snapshot.params;
      this.userInfo.userType === "doctor"
        ? i &&
          l.id &&
          (this.PatientProfileService.get(i).subscribe((n) => {
            this.patientProfileInfo = n;
          }),
          this.PrescriptionMasterService.getPrescriptionMasterListByDoctorIdPatientId(
            l.id,
            i
          ).subscribe((n) => {
            this.prescriptionListDetails = n;
          }))
        : this.userInfo.userType === "patient"
        ? (this.PatientProfileService.get(i).subscribe((n) => {
            this.patientProfileInfo = n;
          }),
          this.PrescriptionMasterService.getPrescriptionMasterListByPatientId(
            i
          ).subscribe((n) => {
            (this.prescriptionListDetails = n), console.log(n);
          }))
        : this.userInfo.userType;
    }
  };
  (t.ɵfac = function (i) {
    return new (i || t)(c(A), c(N), c(L), c(F));
  }),
    (t.ɵcmp = p({
      type: t,
      selectors: [["app-patient-details"]],
      decls: 41,
      vars: 6,
      consts: [
        [
          1,
          "doctor-dashboard_midcontent_container",
          "w-full",
          "p-8",
          "bg-white",
          "overflow-hidden",
        ],
        [1, "flex", "gap-6"],
        [
          1,
          "w-[90px]",
          "h-[90px]",
          "rounded-full",
          "overflow-hidden",
          "border-[3px]",
        ],
        [
          "src",
          "/assets/doctor/avater.png",
          "alt",
          "",
          1,
          "w-full",
          "h-full",
          "object-cover",
        ],
        [1, "font-Roboto"],
        [1, "text-[24px]", "font-medium", "text-primary"],
        [1, "flex", "gap-16", "font-Roboto"],
        [1, "text-gray-600", "my-2", "text-[15px"],
        [1, "flex", "gap-5", "mt-12"],
        [
          1,
          "h-[500px]",
          "w-full",
          "border-[1px]",
          "rounded-xl",
          "overflow-hidden",
          "shadow-secondary/10",
          "shadow-2xl",
        ],
        ["mat-stretch-tabs", "true", "mat-align-tabs", "start"],
        ["label", "Prescriptions"],
        [3, "prescriptionListDetails"],
        ["label", "Medical Records"],
        ["label", "Billing History"],
        [
          1,
          "min-w-[320px]",
          "h-[500px]",
          "overflow-hidden",
          "border-[1px]",
          "rounded-xl",
          "shadow-secondary/10",
          "shadow-2xl",
        ],
        [
          1,
          "w-full",
          "bg-white/90",
          "p-4",
          "text-primary/90",
          "font-Roboto",
          "border-b-[1px]",
        ],
        [1, "fa-solid", "fa-clock", "text-primary", "mr-2"],
      ],
      template: function (i, n) {
        i & 1 &&
          (o(0, "div", 0)(1, "div", 1)(2, "div", 2),
          f(3, "img", 3),
          e(),
          o(4, "div", 4)(5, "h1", 5),
          r(6),
          e(),
          o(7, "div", 6)(8, "div")(9, "p", 7)(10, "b"),
          r(11, "Age : "),
          e(),
          r(12),
          e()(),
          o(13, "div")(14, "p", 7)(15, "b"),
          r(16, "Blood Group :"),
          e(),
          r(17),
          e()(),
          o(18, "div")(19, "p", 7)(20, "b"),
          r(21, "Mobile :"),
          e(),
          r(22),
          e()(),
          o(23, "div")(24, "p", 7)(25, "b"),
          r(26, "Email : "),
          e(),
          r(27),
          e()()()()(),
          o(28, "div", 8)(29, "div", 9)(30, "mat-tab-group", 10)(
            31,
            "mat-tab",
            11
          ),
          f(32, "app-patient-prescriptions", 12),
          e(),
          o(33, "mat-tab", 13),
          f(34, "app-patient-medical-records"),
          e(),
          o(35, "mat-tab", 14),
          f(36, "app-patient-billing-history"),
          e()()(),
          o(37, "div", 15)(38, "h1", 16),
          f(39, "i", 17),
          r(40, " History "),
          e()()()()),
          i & 2 &&
            (d(6),
            m(
              " ",
              n.patientProfileInfo == null
                ? null
                : n.patientProfileInfo.patientName,
              " "
            ),
            d(6),
            m(
              "",
              n.patientProfileInfo == null ? null : n.patientProfileInfo.age,
              " "
            ),
            d(5),
            m(
              " ",
              n.patientProfileInfo == null
                ? null
                : n.patientProfileInfo.bloodGroup,
              " "
            ),
            d(5),
            m(
              " ",
              n.patientProfileInfo == null
                ? null
                : n.patientProfileInfo.patientMobileNo,
              " "
            ),
            d(5),
            m(
              " ",
              n.patientProfileInfo == null
                ? null
                : n.patientProfileInfo.patientEmail,
              " "
            ),
            d(5),
            x("prescriptionListDetails", n.prescriptionListDetails));
      },
      dependencies: [j, B, J, H, U],
      styles: [
        ".mat-tab-group[_ngcontent-%COMP%]{margin-bottom:48px}  .mat-tab-group .mat-mdc-tab-label-container{border:1px solid red!important;overflow:hidden}  .mdc-tab--active{background:#01204e;color:#fff}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%]{color:#01204e}  .mat-ink-bar{display:none}  .mat-mdc-tab:not(.mat-mdc-tab-disabled) .mdc-tab-indicator__content--underline, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled)   .mdc-tab-indicator__content--underline[_ngcontent-%COMP%]{border:none}  .mdc-tab-indicator__content--underline{border:none}  .mat-mdc-tab-labels{border-bottom:1px solid rgb(230,230,230)}",
      ],
    }));
  let a = t;
  return a;
})();
var z = [{ path: "", component: V }],
  Et = (() => {
    let t = class t {};
    (t.ɵfac = function (i) {
      return new (i || t)();
    }),
      (t.ɵmod = E({ type: t })),
      (t.ɵinj = S({ imports: [T, _.forChild(z), O] }));
    let a = t;
    return a;
  })();
export { Et as PatientDetailsModule };
