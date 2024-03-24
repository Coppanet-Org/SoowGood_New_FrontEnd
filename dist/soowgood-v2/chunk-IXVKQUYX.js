import { a as ue } from "./chunk-JBYXCWIV.js";
import { a as fe } from "./chunk-IZ4OZ4UU.js";
import "./chunk-KZZFNO2Y.js";
import { b as se } from "./chunk-3BRYM6P7.js";
import { b as ae } from "./chunk-NJZYVABX.js";
import { d as de, g as pe } from "./chunk-IBQVX35S.js";
import { A as me, s as le } from "./chunk-GEVSPATW.js";
import { a as ne } from "./chunk-7LPMGZKA.js";
import {
  A as ee,
  B as te,
  D as ie,
  E as oe,
  F as re,
  c as R,
  e as y,
  h as Z,
  i as $,
  n as H,
  r as Y,
  u as J,
  v as K,
  w as Q,
  x as W,
  y as X,
} from "./chunk-N3UDIXRD.js";
import {
  Ha as p,
  Ma as m,
  S as O,
  Vb as M,
  Wb as G,
  X as k,
  Xa as i,
  Y as j,
  Ya as e,
  Za as s,
  ac as v,
  cc as z,
  fb as q,
  kb as S,
  qa as L,
  tb as r,
  vb as b,
  vc as V,
  xc as U,
  ya as a,
  za as f,
} from "./chunk-TXQBTV46.js";
import { a as F, b as D } from "./chunk-5G567QLT.js";
function ge(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your full name. "), e());
}
function he(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your email. "), e());
}
function xe(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Email should be valid. "), e());
}
function ve(t, n) {
  if ((t & 1 && (i(0, "option", 59), r(1), e()), t & 2)) {
    let u = n.$implicit;
    S("value", u.id), a(), b(" ", u.name, " ");
  }
}
function ye(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please select your gender. "), e());
}
function Se(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your age. "), e());
}
function _e(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your birth date. "), e());
}
function Ee(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your blood group. "), e());
}
function we(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Address is required. "), e());
}
function Ce(t, n) {
  t & 1 &&
    (i(0, "p", 58),
    r(1, " Address should only contain alphanumeric characters and spaces. "),
    e());
}
function Ie(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your city name. "), e());
}
function Pe(t, n) {
  t & 1 &&
    (i(0, "p", 58),
    r(
      1,
      " city name should contain only letters (no numbers or special characters). "
    ),
    e());
}
function Ne(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please enter your zip code. "), e());
}
function Be(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Zip code should be a 4-digit number. "), e());
}
function Te(t, n) {
  if ((t & 1 && (i(0, "option", 59), r(1), e()), t & 2)) {
    let u = n.$implicit;
    S("value", u), a(), b(" ", u, " ");
  }
}
function Ae(t, n) {
  t & 1 && (i(0, "p", 58), r(1, " Please select your country! "), e());
}
function Fe(t, n) {
  t & 1 && (i(0, "div", 60)(1, "span"), r(2, "Update Info"), e()());
}
function De(t, n) {
  t & 1 && s(0, "span", 61);
}
var ce = (() => {
  let n = class n {
    constructor(d, l, o, c, g, h) {
      (this.fb = d),
        (this.PatientProfileService = l),
        (this.NormalAuth = o),
        (this.TosterService = c),
        (this.UserinfoStateService = g),
        (this.datePipe = h),
        (this.patientInputData = se),
        (this.isLoading = !1),
        (this.formSubmitted = !1),
        (this.countryList = ue);
    }
    ngOnInit() {
      this.loadForm(), (this.genderList = pe.getEnumList(de));
      let d = this.NormalAuth.authInfo().id;
      (this.patientId = d),
        this.fetchProfileInfo(d),
        this.UserinfoStateService.getData().subscribe(
          (l) => (this.profileInfo = l)
        );
    }
    loadForm() {
      this.form = this.fb.group({
        fullName: ["", [y.required]],
        email: [
          "",
          [y.required, y.pattern(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)],
        ],
        gender: ["0"],
        age: [""],
        bloodGroup: ["0"],
        dateOfBirth: [""],
        city: [""],
        country: ["Bangladesh"],
        address: [""],
        zipCode: [""],
      });
    }
    submit() {
      (this.formSubmitted = !0), (this.isLoading = !0);
      let d = [];
      for (let l in this.form.value)
        this.form.value.hasOwnProperty(l) &&
          this.form.value[l] !== this.profileInfo[l] &&
          d.push(l);
      d.length === 0
        ? (this.TosterService.customToast("Nothing has changed", "warning"),
          (this.isLoading = !1),
          (this.formSubmitted = !1))
        : this.PatientProfileService.update(
            D(F({}, this.form.value), { id: this.patientId })
          ).subscribe(
            (l) => {
              this.TosterService.customToast("Successfully update", "success"),
                (this.isLoading = !1),
                (this.formSubmitted = !1),
                this.UserinfoStateService.getProfileInfo(
                  this.patientId,
                  "patient"
                );
            },
            (l) => {
              (this.isLoading = !1),
                (this.formSubmitted = !1),
                this.TosterService.customToast(l.message, "error");
            }
          );
    }
    fetchProfileInfo(d) {
      d &&
        this.UserinfoStateService.getData().subscribe(
          (l) => {
            (l.dateOfBirth = this.formatDate(l.dateOfBirth)),
              this.form?.patchValue(l);
          },
          (l) => {
            this.TosterService.customToast(l.message, "error");
          }
        );
    }
    formatDate(d) {
      if (!d) return "";
      let l = new Date(d);
      return this.datePipe.transform(l, "yyyy-MM-dd") || "";
    }
  };
  (n.ɵfac = function (l) {
    return new (l || n)(f(ie), f(le), f(ne), f(me), f(ae), f(v));
  }),
    (n.ɵcmp = k({
      type: n,
      selectors: [["app-profile-settings"]],
      decls: 119,
      vars: 23,
      consts: [
        [1, "doctor-dashboard_midcontent_container"],
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
          "src",
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
          "text-gray-800",
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
        [1, "flex", "gap-4", "mt-4"],
        [
          1,
          "btn-secondary",
          "!py-1.5",
          "px-4",
          "shadow-none",
          "btn",
          "font-normal",
          "bg-secondary-light/50",
          "text-secondary-dark",
          "border-secondary-dark/20",
          3,
          "routerLink",
        ],
        [1, "fa-solid", "fa-plus", "mr-2"],
        [1, "flex", "items-center", "justify-left", "mt-10", "relative"],
        [3, "formGroup", "submit"],
        [1, "-mx-3", "flex", "flex-wrap"],
        [1, "w-full", "px-3", "sm:w-1/4"],
        [1, "mb-5"],
        [
          "for",
          "fullName",
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
          "fullName",
          "type",
          "text",
          "name",
          "fullName",
          "id",
          "fullName",
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
        ["class", "text-red-600", 4, "ngIf"],
        [
          "for",
          "email",
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
          "email",
          "type",
          "email",
          "placeholder",
          "example@yourmail.com",
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
          "gender",
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
          "formControlName",
          "age",
          "inputmode",
          "numeric",
          "placeholder",
          "Your age",
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
          "dateOfBirth",
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
          "required",
          "",
          "formControlName",
          "dateOfBirth",
          "type",
          "date",
          "name",
          "dateOfBirth",
          "id",
          "dateOfBirth",
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
        [
          "for",
          "address",
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
          "address",
          "id",
          "address",
          "placeholder",
          "Flat No - 1346, Road no - 02, block - C, Mohakhali DOHS",
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
          "city",
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
          "city",
          "id",
          "city",
          "placeholder",
          "Enter city",
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
          "zipCode",
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
          "4",
          "minlength",
          "4",
          "formControlName",
          "zipCode",
          "id",
          "post-code",
          "placeholder",
          "Zip Code",
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
          "name",
          1,
          "mb-2",
          "block",
          "font-medium",
          "text-[14px]",
          "text-[#07074D]",
        ],
        [
          "formControlName",
          "country",
          "id",
          "country",
          "placeholder",
          "Enter Country",
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
        [1, "flex", "items-center", "justify-end", "w-fit", "mt-6"],
        [
          "type",
          "submit",
          1,
          "btn",
          "btn-secondary",
          "px-10",
          "hover:text-primary",
          "border-transparent",
          "hover:border",
          "hover:border-secondary-border",
          "group",
        ],
        [
          "class",
          "flex items-center gap-1 text-white group-hover:text-primary",
          4,
          "ngIf",
        ],
        ["class", "loading loading-dots loading-md", 4, "ngIf"],
        [1, "text-red-600"],
        [1, "font-semibold", "text-gray-500", 3, "value"],
        [
          1,
          "flex",
          "items-center",
          "gap-1",
          "text-white",
          "group-hover:text-primary",
        ],
        [1, "loading", "loading-dots", "loading-md"],
      ],
      template: function (l, o) {
        if (
          (l & 1 &&
            (i(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3)(
              5,
              "div",
              4
            )(6, "div", 5)(7, "div", 6),
            s(8, "img", 7)(9, "input", 8, 9),
            i(12, "div", 10),
            s(13, "i", 11),
            e()(),
            i(14, "div")(15, "h1", 12),
            r(16),
            e(),
            i(17, "p", 13),
            r(18),
            e(),
            i(19, "div", 14)(20, "button", 15),
            s(21, "i", 16),
            r(22, " Create Patient "),
            e()()()()(),
            i(23, "div", 17)(24, "div")(25, "form", 18),
            q("submit", function () {
              return o.submit();
            }),
            i(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "label", 22),
            r(30, " Full Name "),
            e(),
            s(31, "input", 23),
            p(32, ge, 2, 0, "p", 24),
            e()(),
            i(33, "div", 20)(34, "div", 21)(35, "label", 25),
            r(36, " Email "),
            e(),
            s(37, "input", 26),
            p(38, he, 2, 0, "p", 24)(39, xe, 2, 0, "p", 24),
            e()(),
            i(40, "div", 20)(41, "div", 21)(42, "label", 27),
            r(43, " Gender "),
            e(),
            i(44, "select", 28)(45, "option", 29),
            r(46, " Select gender "),
            e(),
            p(47, ve, 2, 2, "option", 30),
            e(),
            p(48, ye, 2, 0, "p", 24),
            e()(),
            i(49, "div", 20)(50, "div", 21)(51, "label", 31),
            r(52, " Age "),
            e(),
            s(53, "input", 32),
            p(54, Se, 2, 0, "p", 24),
            e()(),
            i(55, "div", 20)(56, "div", 21)(57, "label", 33),
            r(58, " Date of Birth "),
            e(),
            s(59, "input", 34),
            p(60, _e, 2, 0, "p", 24),
            e()(),
            i(61, "div", 20)(62, "div", 21)(63, "label", 35),
            r(64, " Blood Group "),
            e(),
            i(65, "select", 36)(66, "option", 29),
            r(67, " Select blood group "),
            e(),
            i(68, "option", 37),
            r(69, " A+ "),
            e(),
            i(70, "option", 38),
            r(71, " A- "),
            e(),
            i(72, "option", 39),
            r(73, " B+ "),
            e(),
            i(74, "option", 40),
            r(75, " B- "),
            e(),
            i(76, "option", 41),
            r(77, " O+ "),
            e(),
            i(78, "option", 42),
            r(79, " O- "),
            e(),
            i(80, "option", 43),
            r(81, " AB+ "),
            e(),
            i(82, "option", 44),
            r(83, " AB- "),
            e(),
            i(84, "option", 45),
            r(85, " others "),
            e()(),
            p(86, Ee, 2, 0, "p", 24),
            e()(),
            i(87, "div", 20)(88, "div", 21)(89, "label", 46),
            r(90, " Address "),
            e(),
            s(91, "input", 47),
            p(92, we, 2, 0, "p", 24)(93, Ce, 2, 0, "p", 24),
            e()(),
            i(94, "div", 20)(95, "div", 21)(96, "label", 48),
            r(97, " City "),
            e(),
            s(98, "input", 49),
            p(99, Ie, 2, 0, "p", 24)(100, Pe, 2, 0, "p", 24),
            e()(),
            i(101, "div", 20)(102, "div", 21)(103, "label", 50),
            r(104, " Zip Code "),
            e(),
            s(105, "input", 51),
            p(106, Ne, 2, 0, "p", 24)(107, Be, 2, 0, "p", 24),
            e()(),
            i(108, "div", 20)(109, "div", 21)(110, "label", 52),
            r(111, " Country "),
            e(),
            i(112, "select", 53),
            p(113, Te, 2, 2, "option", 30),
            e(),
            p(114, Ae, 2, 0, "p", 24),
            e()()(),
            i(115, "div", 54)(116, "button", 55),
            p(117, Fe, 3, 0, "div", 56)(118, De, 1, 0, "span", 57),
            e()()()()()()()()()()),
          l & 2)
        ) {
          let c, g, h, _, E, x, w, C, I, P, N, B, T, A;
          a(8),
            m(
              "src",
              o.url ? o.url : "../../../../../assets/doctor/avater.png",
              L
            ),
            a(8),
            b(" ", o.profileInfo == null ? null : o.profileInfo.fullName, " "),
            a(2),
            b(" ", o.profileInfo.email, " "),
            a(2),
            m("routerLink", "../my-patient"),
            a(5),
            m("formGroup", o.form),
            a(7),
            m(
              "ngIf",
              o.formSubmitted &&
                ((c = o.form.get("fullName")) == null
                  ? null
                  : c.hasError("required"))
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((g = o.form.get("email")) == null
                  ? null
                  : g.hasError("required"))
            ),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((h = o.form.get("email")) == null
                  ? null
                  : h.hasError("pattern"))
            ),
            a(8),
            m("ngForOf", o.genderList),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((_ = o.form.get("gender")) == null ? null : _.value) == "0"
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((E = o.form.get("age")) == null
                  ? null
                  : E.hasError("required"))
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((x = o.form.get("dateOfBirth")) == null
                  ? null
                  : x.hasError("required")) &&
                ((x = o.form.get("dateOfBirth")) == null ? null : x.dirty)
            ),
            a(26),
            m(
              "ngIf",
              o.formSubmitted &&
                ((w = o.form.get("bloodGroup")) == null
                  ? null
                  : w.hasError("required"))
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((C = o.form.get("address")) == null
                  ? null
                  : C.hasError("required"))
            ),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((I = o.form.get("address")) == null
                  ? null
                  : I.hasError("pattern"))
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((P = o.form.get("city")) == null
                  ? null
                  : P.hasError("required"))
            ),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((N = o.form.get("city")) == null
                  ? null
                  : N.hasError("pattern"))
            ),
            a(6),
            m(
              "ngIf",
              o.formSubmitted &&
                ((B = o.form.get("zipCode")) == null
                  ? null
                  : B.hasError("required"))
            ),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((T = o.form.get("zipCode")) == null
                  ? null
                  : T.hasError("pattern"))
            ),
            a(6),
            m("ngForOf", o.countryList),
            a(),
            m(
              "ngIf",
              o.formSubmitted &&
                ((A = o.form.get("country")) == null
                  ? null
                  : A.hasError("required"))
            ),
            a(3),
            m("ngIf", o.isLoading == !1),
            a(),
            m("ngIf", o.isLoading == !0);
        }
      },
      dependencies: [M, G, V, H, Q, W, R, K, Z, $, X, ee, te, Y, J],
    }));
  let t = n;
  return t;
})();
var Oe = [
    { path: "", component: ce },
    {
      path: "patient-details/:id",
      loadChildren: () =>
        import("./chunk-NNKGHGX6.js").then((t) => t.PatientDetailsModule),
    },
  ],
  et = (() => {
    let n = class n {};
    (n.ɵfac = function (l) {
      return new (l || n)();
    }),
      (n.ɵmod = j({ type: n })),
      (n.ɵinj = O({
        providers: [v],
        imports: [z, U.forChild(Oe), re, oe, fe],
      }));
    let t = n;
    return t;
  })();
export { et as ProfileSettingsModule };
