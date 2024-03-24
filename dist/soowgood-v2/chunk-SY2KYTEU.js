import { a as Je } from "./chunk-KZZFNO2Y.js";
import { d as ze, e as He } from "./chunk-3BRYM6P7.js";
import { a as Ue } from "./chunk-FVULMH5T.js";
import { c as Ge, d as Re } from "./chunk-XCW56EU2.js";
import { b as Ve } from "./chunk-NJZYVABX.js";
import { a as Ye } from "./chunk-7NGZH4SF.js";
import { a as $e, b as Qe } from "./chunk-F6S7Z6QR.js";
import { j as We } from "./chunk-Y7H6PHVG.js";
import { a as qe, d as je, g as H } from "./chunk-IBQVX35S.js";
import { a as Pe, b as Ne } from "./chunk-XTINLLUJ.js";
import { A as Oe, e as Le, q as Ae, s as Me } from "./chunk-GEVSPATW.js";
import { a as Be } from "./chunk-7LPMGZKA.js";
import {
  A as Ee,
  B as Fe,
  D as Te,
  c as _e,
  e as v,
  h as ve,
  i as xe,
  n as be,
  p as Se,
  r as ye,
  u as ke,
  v as we,
  w as Ce,
  x as De,
  y as Ie,
} from "./chunk-N3UDIXRD.js";
import {
  $a as ce,
  Gb as pe,
  Ha as f,
  K as O,
  L as ie,
  Ma as d,
  R as oe,
  Sa as re,
  Ta as ae,
  Va as le,
  Vb as ue,
  Wa as se,
  Wb as fe,
  X as M,
  Xa as i,
  Ya as t,
  Za as g,
  _a as de,
  aa as S,
  ba as y,
  bb as N,
  ca as Y,
  d as Z,
  da as ne,
  e as W,
  fb as k,
  fc as ge,
  hb as h,
  i as ee,
  m as $,
  pb as q,
  qb as j,
  rb as G,
  sb as R,
  tb as r,
  ub as z,
  v as te,
  vb as F,
  vc as he,
  wb as me,
  ya as s,
  z as Q,
  za as I,
} from "./chunk-TXQBTV46.js";
var V = (() => {
  let a = class a {
    constructor() {
      (this.doctorSlotList = new W([])),
        (this.doctorScheduleList = new W([])),
        (this.selectedSlot = new Z());
    }
    sendDoctorAvailableSlotData(e) {
      this.doctorSlotList.next(e);
    }
    getDoctorAvailableSlotData() {
      return this.doctorSlotList.asObservable();
    }
    sendDoctorScheduleData(e) {
      this.doctorScheduleList.next(e);
    }
    getDoctorScheduleData() {
      return this.doctorScheduleList.asObservable();
    }
    sendSelectedSlot(e) {
      this.selectedSlot.next(e);
    }
    getSelectedSlot() {
      return this.selectedSlot.asObservable();
    }
  };
  (a.ɵfac = function (n) {
    return new (n || a)();
  }),
    (a.ɵprov = oe({ token: a, factory: a.ɵfac, providedIn: "root" }));
  let o = a;
  return o;
})();
function it(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div", 1),
      g(1, "input", 2),
      i(2, "label", 3),
      k("click", function () {
        S(l);
        let n = h();
        return y(n.selectSlot(n.item));
      }),
      i(3, "div", 4),
      g(4, "span", 5),
      i(5, "div", 6)(6, "p", 7),
      r(7),
      t()(),
      i(8, "p", 7),
      r(9),
      t()()()();
  }
  if (o & 2) {
    let l = h();
    s(),
      d("id", l.item.id)("value", l.item.id),
      s(),
      d("for", l.item.id),
      s(5),
      me("", l.item.startTime, " - ", l.item.endTime, ""),
      s(2),
      F("(", l.item.patientCount, " slot available)");
  }
}
function ot(o, a) {
  o & 1 &&
    (i(0, "p", 8),
    r(
      1,
      ` No slot available for your selected date/hospital/chamber. Please change your selection!
`
    ),
    t());
}
var Ke = (() => {
  let a = class a {
    constructor(e) {
      this.DoctorScheduleStateService = e;
    }
    selectSlot(e) {
      console.log(e), this.DoctorScheduleStateService.sendSelectedSlot(e);
    }
  };
  (a.ɵfac = function (n) {
    return new (n || a)(I(V));
  }),
    (a.ɵcmp = M({
      type: a,
      selectors: [["app-slot-item"]],
      inputs: { item: "item" },
      decls: 2,
      vars: 1,
      consts: [
        ["class", "flex items-center"],
        [1, "flex", "items-center"],
        [
          "hidden",
          "",
          "type",
          "radio",
          "name",
          "default-radio",
          1,
          "w-4",
          "h-4",
          "text-blue-600",
          "bg-gray-100",
          "border-gray-300",
          "focus:ring-blue-500",
          "focus:ring-2",
          3,
          "id",
          "value",
        ],
        [
          1,
          "radio-card",
          "flex",
          "py-2",
          "px-3",
          "border-[1px]",
          "border-secondary-dark/20",
          "bg-secondary-light",
          "text-secondary-dark",
          "cursor-pointer",
          3,
          "for",
          "click",
        ],
        [1, "card-content-wrapper"],
        [1, "check-icon"],
        [1, "card-content", "tooltip"],
        [1, "text-[14px]"],
        [1, "absolute", "top-0", "text-red-500"],
      ],
      template: function (n, c) {
        n & 1 && f(0, it, 10, 6, "div", 0)(1, ot, 2, 0),
          n & 2 && re(0, c.item.patientCount > 0 ? 0 : 1);
      },
      styles: [
        "input[type=radio][_ngcontent-%COMP%]:checked + .radio-card[_ngcontent-%COMP%]{background:#006c93;color:#fff}",
      ],
    }));
  let o = a;
  return o;
})();
function rt(o, a) {
  if ((o & 1 && g(0, "app-slot-item", 1), o & 2)) {
    let l = a.$implicit;
    d("item", l);
  }
}
var Xe = (() => {
  let a = class a {
    constructor(e) {
      (this.DoctorScheduleStateService = e),
        (this.slotList = []),
        this.DoctorScheduleStateService.getDoctorAvailableSlotData()
          .pipe(te((n) => n))
          .subscribe((n) => {
            console.log(n), (this.slotList = n);
          });
    }
  };
  (a.ɵfac = function (n) {
    return new (n || a)(I(V));
  }),
    (a.ɵcmp = M({
      type: a,
      selectors: [["app-slots"]],
      decls: 3,
      vars: 0,
      consts: [
        [1, "grid", "grid-cols-3", "gap-3", "relative"],
        [3, "item"],
      ],
      template: function (n, c) {
        n & 1 && (i(0, "div", 0), le(1, rt, 1, 1, "app-slot-item", 1, ae), t()),
          n & 2 && (s(), se(c.slotList));
      },
      dependencies: [Ke],
    }));
  let o = a;
  return o;
})();
var lt = ["buttonMyself"],
  st = ["buttonOthers"];
function dt(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div", 2)(1, "div", 3),
      g(2, "img", 4),
      i(3, "h1", 5),
      r(4, "Welcome to Soowgood."),
      t()(),
      i(5, "div", 6)(6, "p"),
      r(7, " You must be "),
      i(8, "a", 7),
      k("click", function () {
        S(l);
        let n = h();
        return y(n.dialogRef.close());
      }),
      r(9, "Login! "),
      t(),
      r(10, " to continue! "),
      t(),
      i(11, "p"),
      r(12, "or"),
      t(),
      i(13, "p")(14, "a", 8),
      k("click", function () {
        S(l);
        let n = h();
        return y(n.dialogRef.close());
      }),
      r(15, "Register"),
      t(),
      r(16, " a new account. "),
      t()()();
  }
}
function ct(o, a) {
  o & 1 && (i(0, "div", 15), r(1, "Loading..."), t());
}
function mt(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "li", 23),
      k("click", function () {
        S(l);
        let n = h(3);
        return y(n.onStepChange(1));
      }),
      g(1, "input", 75),
      i(2, "label", 76)(3, "div", 26),
      g(4, "i", 77),
      i(5, "div")(6, "div", 28),
      r(7, " Book for Self "),
      t(),
      i(8, "div", 29),
      r(9, "If you are patient!"),
      t()()(),
      Y(),
      i(10, "svg", 30),
      g(11, "path", 31),
      t()()();
  }
}
function pt(o, a) {
  o & 1 && (i(0, "p", 98), r(1, " Please select appointment date. "), t());
}
function ut(o, a) {
  if ((o & 1 && (i(0, "option", 99), r(1), t()), o & 2)) {
    let l = a.$implicit;
    d("value", l.id), s(), F(" ", l.name, " ");
  }
}
function ft(o, a) {
  o & 1 && (i(0, "p", 98), r(1, " Please select a hospital/chamber "), t());
}
function gt(o, a) {
  if ((o & 1 && (i(0, "option", 99), r(1), t()), o & 2)) {
    let l = a.$implicit;
    d("value", l.id), s(), F(" ", l.name, " ");
  }
}
function ht(o, a) {
  o & 1 && (i(0, "p", 98), r(1, " Please select appointment type "), t());
}
function _t(o, a) {
  o & 1 &&
    (i(0, "div", 15)(1, "label", 100),
    r(2, " Available Slots : "),
    t(),
    i(3, "div", 101),
    g(4, "app-slots"),
    t()());
}
function vt(o, a) {
  if ((o & 1 && (i(0, "div", 15)(1, "p"), r(2), t()()), o & 2)) {
    let l = h(4);
    s(2), z(l.showEmptySlot);
  }
}
function xt(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div")(1, "form", 20)(2, "div", 78)(3, "div", 79)(4, "div", 80),
      g(5, "img", 81),
      t(),
      i(6, "div", 82)(7, "h2", 83),
      r(8),
      t(),
      i(9, "p"),
      r(10),
      t()()(),
      i(11, "div", 84)(12, "div", 85)(13, "div", 86),
      r(14, "Total Fee"),
      t(),
      i(15, "div", 87),
      r(16),
      t()()()(),
      g(17, "hr", 88),
      i(18, "div", 43)(19, "div", 44)(20, "div", 45)(21, "label", 53),
      r(22, " Appointment Date "),
      t(),
      i(23, "input", 89),
      k("click", function () {
        S(l);
        let n = R(25);
        return y(n.open());
      }),
      t(),
      g(24, "mat-datepicker", null, 90),
      f(26, pt, 2, 0, "p", 57),
      t()(),
      i(27, "div", 44)(28, "div", 45)(29, "label", 91),
      r(30, " Select place "),
      t(),
      i(31, "select", 92)(32, "option", 55),
      r(33, " Select hospital/chamber "),
      t(),
      f(34, ut, 2, 2, "option", 93),
      t(),
      f(35, ft, 2, 0, "p", 57),
      t()(),
      i(36, "div", 44)(37, "div", 45)(38, "label", 53),
      r(39, " Select appointment type "),
      t(),
      i(40, "select", 94)(41, "option", 55),
      r(42, " Select appointment type "),
      t(),
      f(43, gt, 2, 2, "option", 93),
      t(),
      f(44, ht, 2, 0, "p", 57),
      t()()()(),
      f(45, _t, 5, 0, "div", 13)(46, vt, 3, 1, "div", 13),
      i(47, "div", 95)(48, "button", 96),
      k("click", function () {
        S(l);
        let n = h(3);
        return y(n.onStepChange(0));
      }),
      r(49, " Back "),
      t(),
      i(50, "button", 97),
      k("click", function () {
        S(l);
        let n = h(3);
        return y(n.onStepChange(3));
      }),
      r(51),
      t()()();
  }
  if (o & 2) {
    let l = R(25),
      e = h(3),
      n,
      c,
      b;
    s(),
      d("formGroup", e.form),
      s(4),
      d(
        "ngSrc",
        (e.doctorData.doctorDetails == null
          ? null
          : e.doctorData.doctorDetails.picUrl) || "/doctor/avater.png"
      ),
      s(3),
      F(
        " ",
        e.doctorData == null ? null : e.doctorData.doctorDetails.fullName,
        " "
      ),
      s(2),
      z(
        e.doctorData == null ? null : e.doctorData.doctorDetails.areaOfExperties
      ),
      s(6),
      F(" ", e.totalFee ? e.totalFee : "00", ".0 tk. "),
      s(7),
      d("matDatepickerFilter", e.dateFilter)("matDatepicker", l)(
        "max",
        e.maxDate
      )("min", e.minDate)("matDatepicker", l),
      s(3),
      d(
        "ngIf",
        e.formSubmitted &&
          ((n = e.form.get("appointmentDate")) == null
            ? null
            : n.hasError("required"))
      ),
      s(8),
      d("ngForOf", e.hospitalList),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((c = e.form.get("doctorScheduleType")) == null ? null : c.value) ===
            "0"
      ),
      s(8),
      d("ngForOf", e.appointmentType),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((b = e.form.get("appointmentType")) == null ? null : b.value) === "0"
      ),
      s(),
      d("ngIf", (e.filterData == null ? null : e.filterData.length) > 0),
      s(),
      d(
        "ngIf",
        (e.filterData == null ? null : e.filterData.length) <= 0 &&
          e.showEmptySlot !== ""
      ),
      s(5),
      F(" ", e.isLoading ? "Loading..." : "Next", " ");
  }
}
function bt(o, a) {
  o & 1 && r(0, " Data is loading... ");
}
function St(o, a) {
  if ((o & 1 && (i(0, "option", 105), r(1), t()), o & 2)) {
    let l = a.$implicit;
    d("value", l.id), s(), F(" ", l.name, " ");
  }
}
function yt(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div")(1, "label", 102),
      r(2, "Select your patient"),
      t(),
      de(3),
      i(4, "select", 103),
      k("input", function (n) {
        S(l);
        let c = h(3);
        return y(c.getSinglePatientData(n));
      }),
      i(5, "option", 104),
      r(6, "--Select Patient--"),
      t(),
      f(7, St, 2, 2, "option", 56),
      t(),
      ce(),
      t();
  }
  if (o & 2) {
    let l = h(3);
    s(4), d("value", l.value), s(3), d("ngForOf", l.userPatientList);
  }
}
function kt(o, a) {
  o & 1 && (i(0, "p", 106), r(1, " Please enter patient name. "), t());
}
function wt(o, a) {
  o & 1 &&
    (i(0, "p", 106),
    r(
      1,
      " Patient name should contain only letters and numbers at the end (optional). "
    ),
    t());
}
function Ct(o, a) {
  o & 1 &&
    (i(0, "p", 106),
    r(1, " Patient name should be at least 3 characters long "),
    t());
}
function Dt(o, a) {
  o & 1 && (i(0, "p", 106), r(1, " Please enter patient age. "), t());
}
function It(o, a) {
  o & 1 && (i(0, "p", 106), r(1, " Age should be a number. "), t());
}
function Et(o, a) {
  o & 1 &&
    (i(0, "p", 106), r(1, " You must enter a valid mobile number! "), t());
}
function Ft(o, a) {
  o & 1 &&
    (i(0, "p", 106),
    r(
      1,
      " Mobile number should have exactly 11 digits and follow the Bangladeshi format! "
    ),
    t());
}
function Tt(o, a) {
  if ((o & 1 && (i(0, "option", 105), r(1), t()), o & 2)) {
    let l = a.$implicit;
    d("value", l.id), s(), F(" ", l.name, " ");
  }
}
function Pt(o, a) {
  o & 1 && (i(0, "p", 98), r(1, " Please select gender! "), t());
}
function Nt(o, a) {
  o & 1 && (i(0, "p", 98), r(1, " Please select blood group! "), t());
}
function Bt(o, a) {
  o & 1 && (i(0, "div", 107)(1, "span"), r(2, "Continue"), t()());
}
function Lt(o, a) {
  o & 1 && g(0, "span", 108);
}
function At(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div", 16)(1, "mat-stepper", 17, 18)(3, "mat-step", 19)(4, "form", 20)(
      5,
      "ul",
      21
    ),
      f(6, mt, 12, 0, "li", 22),
      i(7, "li", 23),
      k("click", function () {
        S(l);
        let n = h(2);
        return y(n.onStepChange(2));
      }),
      g(8, "input", 24),
      i(9, "label", 25)(10, "div", 26),
      g(11, "i", 27),
      i(12, "div")(13, "div", 28),
      r(14, "Book Someone"),
      t(),
      i(15, "div", 29),
      r(16, "If someone is patient!"),
      t()()(),
      Y(),
      i(17, "svg", 30),
      g(18, "path", 31),
      t()()()()()(),
      ne(),
      i(19, "mat-step", 32),
      f(20, xt, 52, 18, "div", 33)(21, bt, 1, 0, "ng-template", null, 34, pe),
      t(),
      i(23, "mat-step", 19)(24, "div", 35)(25, "div", 36)(26, "input", 37),
      k("click", function () {
        S(l);
        let n = h(2);
        return y(n.userExistCheck("exist-user"));
      }),
      t(),
      i(27, "label", 38),
      r(28, " Already Exist "),
      t()(),
      i(29, "div", 36)(30, "input", 39),
      k("click", function () {
        S(l);
        let n = h(2);
        return y(n.userExistCheck("new-user"));
      }),
      t(),
      i(31, "label", 40),
      r(32, " New Patient "),
      t()()(),
      i(33, "div", 41),
      f(34, yt, 8, 2, "div", 1),
      i(35, "div", 41)(36, "form", 42)(37, "div", 43)(38, "div", 44)(
        39,
        "div",
        45
      )(40, "label", 46),
      r(41, " Full Name "),
      t(),
      g(42, "input", 47),
      f(43, kt, 2, 0, "p", 48)(44, wt, 2, 0, "p", 48)(45, Ct, 2, 0, "p", 48),
      t()(),
      i(46, "div", 44)(47, "div", 45)(48, "label", 49),
      r(49, " Age "),
      t(),
      g(50, "input", 50),
      f(51, Dt, 2, 0, "p", 48)(52, It, 2, 0, "p", 48),
      t()(),
      i(53, "div", 44)(54, "div", 45)(55, "label", 51),
      r(56, " Patient Mobile No "),
      t(),
      g(57, "input", 52),
      f(58, Et, 2, 0, "p", 48)(59, Ft, 2, 0, "p", 48),
      t()(),
      i(60, "div", 44)(61, "div", 45)(62, "label", 53),
      r(63, " Select gender "),
      t(),
      i(64, "select", 54)(65, "option", 55),
      r(66, " Select gender "),
      t(),
      f(67, Tt, 2, 2, "option", 56),
      t(),
      f(68, Pt, 2, 0, "p", 57),
      t()(),
      i(69, "div", 44)(70, "div", 45)(71, "label", 58),
      r(72, " Select blood group "),
      t(),
      i(73, "select", 59)(74, "option", 55),
      r(75, " Select blood group "),
      t(),
      i(76, "option", 60),
      r(77, " A+ "),
      t(),
      i(78, "option", 61),
      r(79, " A- "),
      t(),
      i(80, "option", 62),
      r(81, " B+ "),
      t(),
      i(82, "option", 63),
      r(83, " B- "),
      t(),
      i(84, "option", 64),
      r(85, " O+ "),
      t(),
      i(86, "option", 65),
      r(87, " O- "),
      t(),
      i(88, "option", 66),
      r(89, " AB+ "),
      t(),
      i(90, "option", 67),
      r(91, " AB- "),
      t(),
      i(92, "option", 68),
      r(93, " others "),
      t()(),
      f(94, Nt, 2, 0, "p", 57),
      t()()()()()(),
      i(95, "div", 69)(96, "button", 70),
      k("click", function () {
        S(l);
        let n = h(2);
        return y(n.onStepChange(0));
      }),
      r(97, " Back "),
      t(),
      i(98, "button", 71),
      k("click", function () {
        S(l);
        let n = h(2);
        return y(n.createNewPatient());
      }),
      f(99, Bt, 3, 0, "div", 72)(100, Lt, 1, 0, "span", 73),
      t()()(),
      i(101, "mat-step", 19)(102, "app-booking-review", 74),
      k("gotToBack", function (n) {
        S(l);
        let c = h(2);
        return y(c.onStepChange(n));
      }),
      t()()()();
  }
  if (o & 2) {
    let l = R(22),
      e = h(2),
      n,
      c,
      b,
      T,
      P,
      B,
      L,
      w,
      x;
    s(),
      d("selectedIndex", e.activeTab),
      s(2),
      d("stepControl", e.firstFormGroup),
      s(),
      d("formGroup", e.bookingForm),
      s(2),
      d("ngIf", e.sessionRole == "patient"),
      s(13),
      d("stepControl", e.secondFormGroup)("ariaSelected", e.activeTab),
      s(),
      d("ngIf", !e.dataLoader)("ngIfElse", l),
      s(3),
      d("stepControl", e.thirdFormGroup),
      s(11),
      d("ngIf", e.isExistUser),
      s(2),
      d("formGroup", e.createPatientForm),
      s(7),
      d(
        "ngIf",
        e.formSubmitted &&
          ((n = e.createPatientForm.get("patientName")) == null
            ? null
            : n.hasError("required"))
      ),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((c = e.createPatientForm.get("patientName")) == null
            ? null
            : c.hasError("pattern"))
      ),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((b = e.createPatientForm.get("patientName")) == null
            ? null
            : b.hasError("invalidName"))
      ),
      s(6),
      d(
        "ngIf",
        e.formSubmitted &&
          ((T = e.createPatientForm.get("age")) == null
            ? null
            : T.hasError("required"))
      ),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((P = e.createPatientForm.get("age")) == null
            ? null
            : P.hasError("pattern"))
      ),
      s(6),
      d(
        "ngIf",
        e.formSubmitted &&
          ((B = e.createPatientForm.get("patientMobileNo")) == null
            ? null
            : B.hasError("required"))
      ),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          ((L = e.createPatientForm.get("patientMobileNo")) == null
            ? null
            : L.hasError("pattern"))
      ),
      s(8),
      d("ngForOf", e.genderList),
      s(),
      d(
        "ngIf",
        e.formSubmitted &&
          (((w = e.createPatientForm.get("gender")) == null
            ? null
            : w.value) === "0" ||
            ((w = e.createPatientForm.get("gender")) == null
              ? null
              : w.value) == null)
      ),
      s(26),
      d(
        "ngIf",
        e.formSubmitted &&
          (((x = e.createPatientForm.get("bloodGroup")) == null
            ? null
            : x.value) === "0" ||
            ((x = e.createPatientForm.get("bloodGroup")) == null
              ? null
              : x.value) === null)
      ),
      s(5),
      d("ngIf", e.btnLoader == !1),
      s(),
      d("ngIf", e.btnLoader == !0),
      s(),
      d("stepControl", e.fourFormGroup),
      s(),
      d("bookingInfo", e.bookingInfo);
  }
}
function Mt(o, a) {
  if (o & 1) {
    let l = N();
    i(0, "div")(1, "div", 9)(2, "h1", 10),
      g(3, "i", 11),
      r(4),
      t(),
      i(5, "button", 12),
      k("click", function () {
        S(l);
        let n = h();
        return y(n.closeDialogs());
      }),
      r(6, "Close"),
      t()(),
      f(7, ct, 2, 0, "div", 13)(8, At, 103, 25, "div", 14),
      t();
  }
  if (o & 2) {
    let l = h();
    s(4),
      F(" Booking ", l.stepHeading, " "),
      s(3),
      d("ngIf", l.dataLoader),
      s(),
      d("ngIf", !l.dataLoader);
  }
}
var li = (() => {
  let a = class a {
    constructor(e, n, c, b, T, P, B, L, w, x) {
      (this.fb = e),
        (this.UserinfoStateService = n),
        (this.PatientProfileService = c),
        (this.FinancialSetupService = b),
        (this.TosterService = T),
        (this.DoctorScheduleStateService = P),
        (this.NormalAuth = B),
        (this.dialogRef = L),
        (this.doctorData = w),
        (this.AppointmentService = x),
        (this.isBookMyselfClick = !1),
        (this.isBookOther = !1),
        (this.isNewUser = !1),
        (this.isExistUser = !0),
        (this.btnLoader = !1),
        (this.userPatientList = []),
        (this.serviceFeeList = []),
        (this.showAppointmentTypeSelectBox = !0),
        (this.stepHeading = ""),
        (this.dataLoader = !1),
        (this.hasValidCode = !1),
        (this.createNewPatientInfo = {}),
        (this.alreadyExistPatient = {}),
        (this.disabledDays = []),
        (this.subs = new Ye()),
        (this.formSubmitted = !1),
        (this.showEmptySlot = ""),
        (this.filteredChamber = []),
        (this.isLoading = !1),
        (this.dateFilter = (A) => {
          if (!A) return !1;
          let U = A.getDay();
          return !this.disabledDays.includes(U);
        }),
        (this.inputForCreatePatient = ze),
        (this.firstFormGroup = this.fb.group({ firstCtrl: ["", v.required] })),
        (this.secondFormGroup = this.fb.group({
          secondCtrl: ["", v.required],
        }));
      let C = new Date(),
        m = C.getFullYear(),
        _ = C.getMonth(),
        p = C.getDate();
      this.minDate = new Date(m, _, p);
      let D = new Date(C);
      D.setDate(C.getDate() + 30), (this.maxDate = D);
    }
    ngOnInit() {
      (this.dataLoader = !0),
        (this.sessionRole = this.NormalAuth.authInfo()?.userType),
        (this.selectedSlotInfo = ""),
        (this.appointmentType = H.getEnumList(qe)),
        (this.genderList = H.getEnumList(je)),
        this.FinancialSetupService.getList().subscribe((m) => {
          this.serviceFeeList = m;
        }),
        this.DoctorScheduleStateService.getSelectedSlot()
          .pipe()
          .subscribe((m) => {
            this.selectedSlotInfo = m;
          });
      let e = this.doctorData.doctorScheduleInfo,
        n = this.NormalAuth.authInfo()?.id;
      n &&
        (this.sessionRole == "patient" &&
          this.UserinfoStateService.getUserPatientInfo(n, "patient"),
        this.sessionRole == "agent" &&
          this.UserinfoStateService.getUserPatientInfo(n, "agent"),
        this.UserinfoStateService.getData()
          .pipe(
            ie(
              (m) => (
                (this.profileInfo = m),
                this.loadForm(),
                (this.dataLoader = !1),
                m
                  ? this.UserinfoStateService.getUserPatientData().pipe(
                      $((_) =>
                        _?.map((p) => ({ name: p.patientName, id: p.id }))
                      )
                    )
                  : ee([])
              )
            )
          )
          .subscribe((m) => {
            this.userPatientList = m;
          }));
      let c = this.form
          .get("appointmentDate")
          ?.valueChanges.pipe(O(this.form.get("appointmentDate")?.value)),
        b = this.form
          .get("doctorScheduleType")
          ?.valueChanges.pipe(O(this.form.get("doctorScheduleType"))),
        T = this.form
          .get("appointmentType")
          ?.valueChanges.pipe(O(this.form.get("appointmentType")?.value)),
        P = e
          .map((m) =>
            m.doctorScheduleDaySession.map((_) => _.scheduleDayofWeek)
          )
          .flat(),
        B = (m) =>
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].indexOf(m),
        L = [0, 1, 2, 3, 4, 5, 6],
        w = [...new Set(P)].map(B);
      this.disabledDays = L.filter((m) => !w.includes(m));
      let x = "",
        C = "";
      c
        .pipe(
          $(
            (m) => (
              (x = He(String(m))),
              (C = m),
              e
                .filter((p) =>
                  p.doctorScheduleDaySession.some(
                    (D) => D.scheduleDayofWeek === x
                  )
                )
                .map((p) => ({ name: p.scheduleName, id: p.id }))
            )
          )
        )
        .subscribe((m) => {
          this.hospitalList = m;
        }),
        c.pipe(Q(b)).subscribe({
          next: ([m, _]) => {
            m &&
              _ &&
              this.AppointmentService.getListOfSessionsWithWeekDayTimeSlotPatientCount(
                _,
                this.dateFormater(m)
              ).subscribe((p) => {
                (this.filterData = p),
                  this.DoctorScheduleStateService.sendDoctorAvailableSlotData(
                    p
                  );
              }),
              (this.filterData = []),
              this.DoctorScheduleStateService.sendDoctorAvailableSlotData([]);
          },
          error: (m) => console.log(m),
        }),
        b.pipe(Q(T)).subscribe((m) => {
          if (m[1] == 0) {
            this.totalFee = 0;
            return;
          }
          let _ = e.filter(
            (p) => (console.log(p.id, m[0]), p.id === Number(m[0]))
          );
          console.log(_),
            _
              ? _.map((p) => {
                  console.log(p);
                  let D = p.doctorFeesSetup.find((A) =>
                    A.appointmentType == m[1] ? A.totalFee : ""
                  );
                  if (!D) {
                    this.TosterService.customToast(
                      "Fee not found your selected appointment type!",
                      "warning"
                    ),
                      (this.totalFee = 0);
                    return;
                  }
                  (this.totalFee = D?.totalFee), (this.selectedFeesInfo = D);
                })
              : this.TosterService.customToast(
                  "Fee not found your selected appointment type!",
                  "warning"
                );
        });
    }
    dateFormater(e) {
      return e.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    }
    isDayAvailable(e, n) {
      return e.filter((c) => c.scheduleDayofWeek === n);
    }
    loadForm() {
      (this.bookingForm = this.fb.group({
        bookMyself: [""],
        bookOther: [""],
        patientName: ["", v.required],
        age: ["", v.required],
        mobile: ["", v.required],
      })),
        (this.form = this.fb.group({
          consultancyType: [""],
          doctorScheduleType: ["0", v.required],
          appointmentDate: ["", v.required],
          appointmentType: ["0", v.required],
        })),
        (this.createPatientForm = this.fb.group({
          isSelf: [!1, v.required],
          patientName: ["", v.required],
          patientProfileId: [""],
          age: ["", [v.required, v.pattern(/^[1-9][0-9]{0,2}$/)]],
          gender: ["0", v.required],
          bloodGroup: ["0", v.required],
          patientMobileNo: ["", [v.required, v.pattern(/^(?:88)?[0-9]{11}$/)]],
          patientEmail: [
            this.profileInfo?.email || "admin@gmail.com",
            v.required,
          ],
          createdBy: [this.profileInfo.fullName, v.required],
          creatorEntityId: [this.profileInfo.id, v.required],
          creatorRole: [
            this.sessionRole == "patient" ? "patient" : "agent",
            v.required,
          ],
        }));
    }
    onStepChange(e) {
      e >= 0 && e < 3 && (this.activeTab = e), console.log(e);
      let {
          appointmentType: n,
          appointmentDate: c,
          doctorScheduleType: b,
        } = this.form.value,
        T = n != 0 && b != 0 && c;
      if (e === 3 && T) {
        if (
          ((this.isLoading = !0),
          (this.formSubmitted = !0),
          this.filterData.length <= 0 && !this.selectedSlotInfo?.scheduleId)
        ) {
          this.TosterService.customToast(
            "No slot found your selected options!",
            "warning"
          );
          return;
        }
        let {
            scheduleId: P,
            id: B,
            scheduleDayofWeek: L,
          } = this.selectedSlotInfo,
          w = this.doctorData.doctorScheduleInfo.find((x) => x.id === P);
        if (w && w.consultancyType) {
          let x = "",
            C = "",
            m = 0,
            _ = 0,
            p = 0,
            D = 0;
          this.sessionRole == "agent" &&
            (w.consultancyType == 1
              ? ((C = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 4
                )?.externalAmountIn),
                (_ = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 4 && u.externalAmountIn == C
                )?.externalAmount),
                C == "Percentage"
                  ? (D = this.selectedFeesInfo.totalFee * (_ / 100))
                  : C == "Flat" && (D = _))
              : w.consultancyType == 2 &&
                ((C = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 5
                )?.externalAmountIn),
                (_ = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 5 && u.externalAmountIn == C
                )?.externalAmount),
                C == "Percentage"
                  ? (D = this.selectedFeesInfo.totalFee * (_ / 100))
                  : C == "Flat" && (D = _))),
            w.consultancyType == 1
              ? ((x = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 1
                )?.amountIn),
                (m = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 1 && u.amountIn == x
                )?.amount),
                x == "Percentage"
                  ? (p = this.selectedFeesInfo.totalFee * (m / 100))
                  : x == "Flat" && (p = m))
              : w.consultancyType == 2 &&
                ((x = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 2
                )?.amountIn),
                (m = this.serviceFeeList.find(
                  (u) => u.platformFacilityId == 2 && u.amountIn == x
                )?.amount),
                x == "Percentage"
                  ? (p = this.selectedFeesInfo.totalFee * (m / 100))
                  : x == "Flat" && (p = m)),
            (this.formSubmitted = !0);
          let {
              consultancyType: A,
              doctorChamberId: U,
              doctorProfileId: Ze,
              scheduleType: et,
              chamber: tt,
            } = w,
            E = "";
          this.UserinfoStateService.getData().subscribe((u) => (E = u));
          let X = {
            doctorScheduleId: P,
            doctorProfileId: Ze,
            doctorName: this.doctorData?.doctorDetails.fullName,
            doctorCode: this.doctorData?.doctorDetails.doctorCode,
            patientProfileId: this.alreadyExistPatient?.id
              ? this.alreadyExistPatient?.id
              : this.createNewPatientInfo.id
              ? this.createNewPatientInfo?.id
              : E?.id,
            patientName: this.alreadyExistPatient?.patientName
              ? this.alreadyExistPatient?.patientName
              : this.createNewPatientInfo?.patientName
              ? this.createNewPatientInfo?.patientName
              : E?.fullName,
            patientCode: this.alreadyExistPatient?.patientCode
              ? this.alreadyExistPatient?.patientCode
              : this.createNewPatientInfo?.patientCode
              ? this.createNewPatientInfo?.patientCode
              : E?.patientCode,
            patientMobileNo: this.alreadyExistPatient?.patientMobileNo
              ? this.alreadyExistPatient?.patientMobileNo
              : this.createNewPatientInfo?.patientMobileNo
              ? this.createNewPatientInfo?.patientMobileNo
              : E?.mobileNo,
            patientEmail: this.alreadyExistPatient?.patientEmail
              ? this.alreadyExistPatient?.patientEmail
              : this.createNewPatientInfo?.patientEmail
              ? this.createNewPatientInfo?.patientEmail
              : E.email || "admin@gmail.com",
            consultancyType: A,
            doctorChamberId: U,
            doctorChamberName: tt,
            scheduleType: et,
            doctorScheduleDaySessionId: B,
            scheduleDayofWeek: L,
            appointmentType: n,
            appointmentDate: c,
            appointmentTime: "",
            doctorFeesSetupId: this.selectedFeesInfo.id,
            doctorFee: this.selectedFeesInfo.totalFee,
            agentFee: D,
            platformFee: p,
            totalAppointmentFee: this.selectedFeesInfo.totalFee + p + D,
            appointmentStatus: 1,
            appointmentPaymentStatus: 2,
            appointmentCreatorId: E?.id,
            appointmentCreatorRole:
              this.sessionRole == "patient" ? "patient" : "agent",
          };
          if (X && E) {
            if (
              ((this.bookingInfo = X),
              (this.formSubmitted = !0),
              this.bookingForm.get("bookMyself")?.value == "bookMyself")
            ) {
              let u = {
                id: E?.id,
                patientName: E.fullName,
                patientCode: E.patientCode,
                patientEmail: E.email ? E.email : "admin@gmail.com",
                patientMobileNo: E.mobileNo,
              };
              this.PatientProfileService.update(u).subscribe((Vt) => {
                (this.activeTab = e), (this.isLoading = !1);
              });
            }
            this.bookingForm.get("bookOther")?.value == "bookOther" &&
              ((this.activeTab = e), (this.isLoading = !1));
            return;
          }
        } else
          (this.formSubmitted = !0),
            this.TosterService.customToast("Please select a slot", "warning"),
            (this.isLoading = !1);
      } else this.isLoading = !1;
      e === 3 &&
        !T &&
        ((this.formSubmitted = !0),
        this.TosterService.customToast(
          "Please select all the required fields",
          "warning"
        ),
        (this.isLoading = !1));
    }
    userExistCheck(e) {
      switch (
        (this.createPatientForm.get("patientName")?.reset(),
        this.createPatientForm.get("age")?.reset(),
        this.createPatientForm.get("gender")?.reset(),
        this.createPatientForm.get("bloodGroup")?.reset(),
        this.createPatientForm.get("patientMobileNo")?.reset(),
        e)
      ) {
        case "new-user":
          (this.isNewUser = !0), (this.isExistUser = !1);
          return;
        case "exist-user":
          (this.isNewUser = !1), (this.isExistUser = !0);
          return;
        default:
          break;
      }
    }
    createNewPatient() {
      if (((this.formSubmitted = !0), !this.createPatientForm.valid)) {
        this.TosterService.customToast(
          "Please field all the required fields",
          "warning"
        );
        return;
      }
      if (this.isNewUser)
        try {
          (this.btnLoader = !0),
            this.PatientProfileService.create(
              this.createPatientForm.value
            ).subscribe((e) => {
              e.patientCode &&
                e.patientMobileNo &&
                this.PatientProfileService.getByPhoneAndCode(
                  e.patientCode,
                  e.patientMobileNo
                ).subscribe((n) => {
                  this.createNewPatientInfo = n;
                }),
                (this.btnLoader = !1),
                this.TosterService.customToast(
                  "Your patient is created!",
                  "success"
                ),
                this.UserinfoStateService.getUserPatientInfo(
                  this.profileInfo.id,
                  "patient"
                ),
                this.onStepChange(1);
            });
        } catch {
          this.TosterService.customToast(
            "Something wrong! Please retry",
            "error"
          );
        }
      else this.onStepChange(1);
    }
    getSinglePatientData(e) {
      e.target.value &&
        this.UserinfoStateService.getUserPatientData().subscribe((n) =>
          n.find((c) => {
            c.id == e.target.value &&
              ((this.alreadyExistPatient = c),
              this.createPatientForm.patchValue({
                patientProfileId: c.id,
                age: c.age,
                gender: c.gender,
                bloodGroup: c.bloodGroup,
                patientMobileNo: c.patientMobileNo,
                patientEmail: c.patientEmail,
                patientName: c.patientName,
                createdBy: c.createdBy,
                creatorEntityId: c.creatorEntityId,
                creatorRole: c.creatorRole,
              }));
          })
        );
    }
    closeDialogs() {
      (this.selectedSlotInfo = ""), this.dialogRef.close(!1);
    }
  };
  (a.ɵfac = function (n) {
    return new (n || a)(
      I(Te),
      I(Ve),
      I(Me),
      I(Ae),
      I(Oe),
      I(V),
      I(Be),
      I(Pe),
      I(Ne),
      I(Le)
    );
  }),
    (a.ɵcmp = M({
      type: a,
      selectors: [["app-booking-dialog"]],
      viewQuery: function (n, c) {
        if ((n & 1 && (q(lt, 5), q(st, 5), q(Je, 5)), n & 2)) {
          let b;
          j((b = G())) && (c.buttonMyself = b.first),
            j((b = G())) && (c.buttonOthers = b.first),
            j((b = G())) && (c.customInputs = b);
        }
      },
      decls: 2,
      vars: 2,
      consts: [
        ["class", "bg-white h-[300px]", 4, "ngIf"],
        [4, "ngIf"],
        [1, "bg-white", "h-[300px]"],
        [
          1,
          "bg-primary",
          "h-[100px]",
          "w-full",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
        ],
        [
          "ngSrc",
          "assets/logo.svg",
          "alt",
          "logo",
          "width",
          "50",
          "height",
          "50",
        ],
        [1, "text-white", "text-[24px]", "font-roboto"],
        [1, "p-8", "flex", "justify-center", "items-center", "flex-col"],
        ["routerLink", "/login", 1, "text-blue-500", "font-bold", 3, "click"],
        ["routerLink", "/signup", 1, "text-blue-500", "font-bold", 3, "click"],
        [
          1,
          "flex",
          "justify-between",
          "py-4",
          "px-6",
          "border-b-[1px]",
          "items-center",
        ],
        [1, "dashbord-heading-text"],
        [1, "mr-1", "text-[18px]", "fa-solid", "fa-calendar"],
        [1, "btn-secondary-light", 3, "click"],
        ["class", "py-3", 4, "ngIf"],
        ["class", "w-full px-12 pt-5 pb-10", 4, "ngIf"],
        [1, "py-3"],
        [1, "w-full", "px-12", "pt-5", "pb-10"],
        [1, "mx-auto", 3, "selectedIndex"],
        ["stepper", ""],
        [3, "stepControl"],
        [3, "formGroup"],
        [1, "grid", "grid-row-2", "w-full", "gap-6"],
        [3, "click", 4, "ngIf"],
        [3, "click"],
        [
          "type",
          "radio",
          "formControlName",
          "bookOther",
          "id",
          "bookOther",
          "value",
          "bookOther",
          1,
          "hidden",
          "peer",
        ],
        [
          "for",
          "bookOther",
          1,
          "inline-flex",
          "items-center",
          "justify-between",
          "w-full",
          "p-5",
          "text-gray-500",
          "bg-white",
          "border",
          "border-gray-200",
          "rounded-lg",
          "cursor-pointer",
          "peer-checked:border-blue-600",
          "peer-checked:text-blue-600",
          "hover:text-gray-600",
          "hover:bg-gray-100",
        ],
        [1, "flex", "items-center", "gap-3"],
        [1, "fa-solid", "fa-people-robbery", "text-[44px]"],
        [1, "w-full", "text-lg", "font-semibold"],
        [1, "w-full"],
        [
          "aria-hidden",
          "true",
          "xmlns",
          "http://www.w3.org/2000/svg",
          "fill",
          "none",
          "viewBox",
          "0 0 14 10",
          1,
          "w-5",
          "h-5",
          "ml-3",
        ],
        [
          "stroke",
          "currentColor",
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
          "stroke-width",
          "2",
          "d",
          "M1 5h12m0 0L9 1m4 4L9 9",
        ],
        [3, "stepControl", "ariaSelected"],
        [4, "ngIf", "ngIfElse"],
        ["loader", ""],
        [1, "flex", "gap-4"],
        [
          1,
          "flex",
          "items-center",
          "px-4",
          "border",
          "border-gray-200",
          "rounded",
        ],
        [
          "checked",
          "",
          "id",
          "bordered-radio-2",
          "type",
          "radio",
          "value",
          "",
          "name",
          "bordered-radio",
          1,
          "w-4",
          "h-4",
          "text-blue-600",
          "bg-gray-100",
          "border-gray-300",
          "focus:ring-0",
          3,
          "click",
        ],
        [
          "for",
          "bordered-radio-2",
          1,
          "w-full",
          "py-2",
          "ml-2",
          "text-sm",
          "font-medium",
          "text-gray-900",
        ],
        [
          "id",
          "bordered-radio-1",
          "type",
          "radio",
          "value",
          "",
          "name",
          "bordered-radio",
          1,
          "w-4",
          "h-4",
          "text-blue-600",
          "bg-gray-100",
          "border-gray-300",
          "focus:ring-0",
          3,
          "click",
        ],
        [
          "for",
          "bordered-radio-1",
          1,
          "w-full",
          "py-2",
          "ml-2",
          "text-sm",
          "font-medium",
          "text-gray-900",
        ],
        [1, "pt-5"],
        [1, "w-full", 3, "formGroup"],
        [1, "-mx-3", "flex", "flex-wrap"],
        [1, "w-full", "px-3", "sm:w-1/2"],
        [1, "mb-5"],
        [
          "for",
          "name",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "autocomplete",
          "off",
          "formControlName",
          "patientName",
          "type",
          "text",
          "name",
          "patientName",
          "id",
          "patientName",
          "placeholder",
          "Full Name",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-1.5",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        ["class", "text-red-600 text-sm", 4, "ngIf"],
        [
          "for",
          "age",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "autocomplete",
          "off",
          "maxlength",
          "3",
          "minlength",
          "1",
          "formControlName",
          "age",
          "id",
          "age",
          "placeholder",
          "Age",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-1.5",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        [
          "for",
          "patientMobileNo",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "autocomplete",
          "off",
          "maxlength",
          "11",
          "minlength",
          "11",
          "formControlName",
          "patientMobileNo",
          "id",
          "patientMobileNo",
          "placeholder",
          "Patient Mobile No",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-1.5",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        [
          "for",
          "date",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "formControlName",
          "gender",
          "name",
          "gender",
          "id",
          "gender",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-2",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        ["value", "0", 1, "font-semibold", "text-gray-500"],
        [3, "value", 4, "ngFor", "ngForOf"],
        ["class", "text-[14px] text-red-600", 4, "ngIf"],
        [
          "for",
          "bloodGroup",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "formControlName",
          "bloodGroup",
          "name",
          "bloodGroup",
          "id",
          "bloodGroup",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-2",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        ["value", "A+", 1, "font-semibold", "text-gray-500"],
        ["value", "A-", 1, "font-semibold", "text-gray-500"],
        ["value", "B+", 1, "font-semibold", "text-gray-500"],
        ["value", "B-", 1, "font-semibold", "text-gray-500"],
        ["value", "O+", 1, "font-semibold", "text-gray-500"],
        ["value", "O-", 1, "font-semibold", "text-gray-500"],
        ["value", "AB+", 1, "font-semibold", "text-gray-500"],
        ["value", "AB-", 1, "font-semibold", "text-gray-500"],
        ["value", "others", 1, "font-semibold", "text-gray-500"],
        [1, "flex", "gap-5"],
        [1, "btn-secondary", "py-2", "mt-6", 3, "click"],
        [1, "btn-secondary", "bg-primary", "py-2", "mt-6", 3, "click"],
        ["class", "flex items-center gap-1 tetx-white", 4, "ngIf"],
        ["class", "loading loading-dots loading-md", 4, "ngIf"],
        [3, "bookingInfo", "gotToBack"],
        [
          "type",
          "radio",
          "formControlName",
          "bookMyself",
          "id",
          "bookMyself",
          "value",
          "bookMyself",
          "required",
          "",
          1,
          "hidden",
          "peer",
        ],
        [
          "for",
          "bookMyself",
          1,
          "inline-flex",
          "items-center",
          "justify-between",
          "w-full",
          "p-5",
          "text-gray-500",
          "bg-white",
          "border",
          "border-gray-200",
          "rounded-lg",
          "cursor-pointer",
          "peer-checked:border-blue-600",
          "peer-checked:text-blue-600",
          "hover:text-gray-600",
          "hover:bg-gray-100",
        ],
        [1, "fa-solid", "fa-person", "text-[44px]"],
        [1, "flex", "justify-between"],
        [1, "grid", "grid-cols-5", "gap-4"],
        [
          1,
          "col-span-1",
          "rounded-full",
          "w-[50px]",
          "h-[50px]",
          "overflow-hidden",
          "border-secondary",
          "border-2",
        ],
        [
          "width",
          "50",
          "height",
          "50",
          "alt",
          "",
          1,
          "w-full",
          "h-full",
          "object-cover",
          3,
          "ngSrc",
        ],
        [1, "col-span-4"],
        [1, "heading", "text-[20px]"],
        [1, "py-0", "px-3"],
        [1, "leading-0"],
        [1, "stat-title"],
        [1, "stat-value", "text-secondary", "text[24px]"],
        [1, "h-px", "my-8", "bg-gray-200", "border-0"],
        [
          "matInput",
          "",
          "formControlName",
          "appointmentDate",
          "placeholder",
          "Appointment Date",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-1.5",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
          3,
          "matDatepickerFilter",
          "matDatepicker",
          "max",
          "min",
          "click",
        ],
        ["picker", ""],
        [
          "for",
          "doctorScheduleType",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "formControlName",
          "doctorScheduleType",
          "name",
          "doctorScheduleType",
          "id",
          "doctorScheduleType",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-2",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        [
          "class",
          "font-semibold text-gray-500",
          3,
          "value",
          4,
          "ngFor",
          "ngForOf",
        ],
        [
          "formControlName",
          "appointmentType",
          "name",
          "appointmentType",
          "id",
          "appointmentType",
          1,
          "w-full",
          "rounded-md",
          "border",
          "border-[#e0e0e0]",
          "bg-white",
          "py-2",
          "px-3",
          "text-base",
          "font-normal",
          "text-[14px]",
          "text-[#6B7280]",
          "outline-none",
          "focus:border-[#6A64F1]",
          "focus:shadow-md",
        ],
        [1, "flex", "gap-5", "mt-10", "w-full"],
        [1, "btn-secondary", "py-2", "bg-primary/90", 3, "click"],
        [1, "btn-secondary", "py-2", 3, "click"],
        [1, "text-[14px]", "text-red-600"],
        [1, "font-semibold", "text-gray-500", 3, "value"],
        [1, "font-Roboto", "text-[16px]", "text-primary/90"],
        [1, "mt-2"],
        ["for", "", 1, "label"],
        [1, "form_input", 3, "value", "input"],
        ["value", ""],
        [3, "value"],
        [1, "text-red-600", "text-sm"],
        [1, "flex", "items-center", "gap-1", "tetx-white"],
        [1, "loading", "loading-dots", "loading-md"],
      ],
      template: function (n, c) {
        n & 1 && f(0, dt, 17, 0, "div", 0)(1, Mt, 9, 3, "div", 1),
          n & 2 &&
            (d("ngIf", !c.doctorData.isAuthUser),
            s(),
            d("ngIf", c.doctorData.isAuthUser));
      },
      dependencies: [
        ue,
        fe,
        be,
        Ce,
        De,
        _e,
        we,
        Se,
        ve,
        xe,
        Ie,
        Ee,
        Fe,
        ye,
        ke,
        he,
        Ge,
        Re,
        $e,
        Qe,
        Xe,
        Ue,
        We,
        ge,
      ],
      styles: [
        ".mat-horizontal-stepper-header-container{display:none!important}  .mat-horizontal-content-container{padding:0!important}input[type=radio][_ngcontent-%COMP%]:checked + .radio-card[_ngcontent-%COMP%]{background:#006c93;color:#fff}",
      ],
    }));
  let o = a;
  return o;
})();
export { li as a };
