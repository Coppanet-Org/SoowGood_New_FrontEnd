import { a as Tt } from "./chunk-IO662K4Q.js";
import { a as kt } from "./chunk-W4ZBBNGU.js";
import { a as wt, b as It, c as At } from "./chunk-ZFTKKZR4.js";
import { b as Dt } from "./chunk-MNM6YY3O.js";
import { a as yt, b as Ct } from "./chunk-TTHUJNPP.js";
import { a as St } from "./chunk-7NGZH4SF.js";
import { h as vt } from "./chunk-F6S7Z6QR.js";
import { a as gt } from "./chunk-DIK5M47G.js";
import { h as bt, k as _t } from "./chunk-Y7H6PHVG.js";
import { b as xt, g as ht } from "./chunk-IBQVX35S.js";
import { a as ft, b as Y, c as ut } from "./chunk-XTINLLUJ.js";
import { L as dt } from "./chunk-4DRUEFLH.js";
import { A as q, e as A } from "./chunk-GEVSPATW.js";
import { a as G } from "./chunk-7LPMGZKA.js";
import { D as mt, F as ct } from "./chunk-N3UDIXRD.js";
import {
  $a as it,
  Db as O,
  Eb as W,
  Ha as _,
  La as F,
  Ma as c,
  Qa as D,
  R as H,
  S as U,
  Ta as X,
  U as K,
  Ub as nt,
  Va as Z,
  Wa as tt,
  Wb as I,
  X as w,
  Xa as r,
  Y as z,
  Ya as o,
  Za as f,
  _a as et,
  aa as v,
  ac as ot,
  ba as y,
  bb as S,
  cc as $,
  fb as b,
  fc as J,
  hb as d,
  i as E,
  kc as at,
  m as L,
  n as V,
  ra as Q,
  rc as rt,
  sc as pt,
  tb as p,
  ub as N,
  uc as lt,
  vb as u,
  wb as B,
  xc as st,
  y as R,
  ya as l,
  za as g,
} from "./chunk-TXQBTV46.js";
var Ft = (() => {
  let a = class a {
    constructor(n) {
      (this.AppointmentService = n),
        (this.appointmentList = []),
        (this.cache = {});
    }
    getAllAppointmentList(n, e) {
      let s = `${e}-${n}`;
      return e === "patient"
        ? this.AppointmentService.getAppointmentListByPatientId(
            n,
            "patient"
          ).pipe(
            L((m) => ((this.appointmentList = m), m)),
            R((m) => E(null))
          )
        : e === "agent"
        ? this.AppointmentService.getAppointmentListByPatientId(
            n,
            "agent"
          ).pipe(
            L((m) => ((this.appointmentList = m), m)),
            R((m) => E(null))
          )
        : e === "doctor"
        ? this.AppointmentService.getAppointmentListByDoctorId(n).pipe(
            L((m) => ((this.appointmentList = m), m)),
            R((m) => E(null))
          )
        : E(null);
    }
  };
  (a.ɵfac = function (e) {
    return new (e || a)(K(A));
  }),
    (a.ɵprov = H({ token: a, factory: a.ɵfac, providedIn: "root" }));
  let i = a;
  return i;
})();
var Nt = (() => {
  let a = class a {
    constructor(n) {
      this.editData = n;
    }
  };
  (a.ɵfac = function (e) {
    return new (e || a)(g(Y));
  }),
    (a.ɵcmp = w({
      type: a,
      selectors: [["app-appointment-dialog"]],
      decls: 5,
      vars: 1,
      consts: [
        [
          1,
          "w-full",
          "p-4",
          "text-center",
          "bg-white",
          "border",
          "border-gray-200",
          "rounded-lg",
          "shadow",
          "sm:p-8",
        ],
        [1, "mb-2", "text-3xl", "font-bold", "text-gray-900"],
        [1, "mb-5", "text-base", "text-gray-500", "sm:text-lg"],
      ],
      template: function (e, s) {
        e & 1 &&
          (r(0, "div", 0)(1, "h5", 1),
          p(2),
          o(),
          r(3, "p", 2),
          p(
            4,
            " Your appointment is approaching; make sure you're ready and confident for the event. Double-check details and prepare accordingly. "
          ),
          o()()),
          e & 2 && (l(2), u(" ", s.editData, " "));
      },
    }));
  let i = a;
  return i;
})();
function Ot(i, a) {
  i & 1 && f(0, "img", 16);
}
function Wt(i, a) {
  if ((i & 1 && f(0, "iframe", 19), i & 2)) {
    let t = d(2);
    c("src", t.selectedFileContent, Q);
  }
}
function $t(i, a) {
  if ((i & 1 && f(0, "img", 20), i & 2)) {
    let t = d(2);
    c("ngSrc", t.selectedFileContent);
  }
}
function Jt(i, a) {
  if (
    (i & 1 &&
      (et(0), _(1, Wt, 1, 1, "iframe", 17)(2, $t, 1, 1, "img", 18), it()),
    i & 2)
  ) {
    let t = d();
    l(),
      c("ngIf", t.isPdf(t.selectedFileName)),
      l(),
      c("ngIf", !t.isPdf(t.selectedFileName));
  }
}
function Yt(i, a) {
  if ((i & 1 && (r(0, "span", 21), p(1), o()), i & 2)) {
    let t = d();
    l(), N(t.selectedFileName);
  }
}
function Gt(i, a) {
  i & 1 && (r(0, "span"), p(1, "Click here to select your file!"), o());
}
function qt(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 22),
      b("click", function () {
        v(t);
        let e = d();
        return y(e.onDeleteFile());
      }),
      p(1, " Change "),
      o();
  }
}
var Mt = (() => {
  let a = class a {
    constructor(n, e, s, m, h) {
      (this.sanitizer = n),
        (this.dialogRef = e),
        (this.TosterService = s),
        (this.http = m),
        (this.patientId = h),
        (this.apiUrl = `${gt.apis.default.url}/api`),
        (this.loading = { status: !1, message: "Send to Doctor" });
    }
    onFileChanged(n) {
      let e = n.target.files[0];
      if (((this.fileInfo = e), e)) {
        this.selectedFileName = e.name;
        let s = new FileReader();
        (s.onload = (m) => {
          if (e.type === "application/pdf") {
            let h = m.target?.result,
              j = new Blob([h], { type: "application/pdf" });
            (this.selectedFileContent =
              this.sanitizer.bypassSecurityTrustResourceUrl(
                URL.createObjectURL(j)
              )),
              console.log(this.selectedFileContent);
          } else
            (this.selectedFileContent =
              this.sanitizer.bypassSecurityTrustResourceUrl(
                URL.createObjectURL(e)
              )),
              console.log(this.selectedFileContent);
        }),
          s.readAsArrayBuffer(e);
      }
    }
    savePreviousDocument() {
      if (!this.fileInfo) {
        this.TosterService.customToast("Please select a file!", "warning");
        return;
      }
      (this.loading = { status: !0, message: "Sending..." }),
        this.selectedFileName &&
          ((this.fileData = new FormData()),
          this.fileData.append("entityId", this.patientId.toString()),
          this.fileData.append("entityType", "Patient"),
          this.fileData.append("attachmentType", "PatientPreviousDocuments"),
          this.fileData.append(
            "directoryName",
            "PatientPreviousDocuments\\" + this.patientId.toString()
          ),
          this.fileData.append(this.selectedFileName, this.fileInfo),
          this.http
            .post(`${this.apiUrl}/Common/Documents`, this.fileData)
            .subscribe(
              (n) => {
                (this.loading = { status: !1, message: "Sent" }),
                  (this.selectedFileName = ""),
                  (this.selectedFileContent = ""),
                  this.TosterService.customToast(
                    "Your previous document sucessfully send your doctor.",
                    "success"
                  );
              },
              (n) => {
                console.log(n);
              }
            ));
    }
    onDeleteFile() {
      (this.selectedFileName = ""), (this.selectedFileContent = "");
    }
    isPdf(n) {
      return n.toLowerCase().endsWith(".pdf");
    }
  };
  (a.ɵfac = function (e) {
    return new (e || a)(g(rt), g(ft), g(q), g(at), g(Y));
  }),
    (a.ɵcmp = w({
      type: a,
      selectors: [["app-upload-appointment-doc-dialog"]],
      decls: 21,
      vars: 6,
      consts: [
        [1, "grid", "space-y-2", "w-full", "p-8", "sm:w-full"],
        [1, "flex", "justify-between"],
        [1, "text-md", "font-bold", "mb-3", "text-gray-500", "tracking-wide"],
        [3, "click"],
        [1, "flex", "items-center", "flex-col", "justify-center", "w-full"],
        [
          1,
          "flex",
          "flex-col",
          "rounded-lg",
          "border-4",
          "border-dashed",
          "w-full",
          "h-60",
          "p-10",
          "group",
          "text-center",
        ],
        [
          1,
          "h-full",
          "w-full",
          "text-center",
          "flex",
          "flex-col",
          "justify-center",
          "items-center",
        ],
        [1, "flex", "flex-auto", "max-h-48", "mx-auto", "-mt-10"],
        [
          "class",
          "has-mask h-36 object-center",
          "src",
          "https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg",
          "alt",
          "freepik image",
          4,
          "ngIf",
        ],
        [4, "ngIf"],
        [1, "pointer-none", "text-gray-500"],
        ["class", "text-sm", 4, "ngIf"],
        ["ngClass", "mt-3", 3, "click", 4, "ngIf"],
        [
          "type",
          "file",
          "accept",
          ".jpg,.jpeg,.png,.pdf",
          1,
          "hidden",
          3,
          "change",
        ],
        ["attachments", "", "fileInput", ""],
        [
          1,
          "btn-secondary",
          "border",
          "border-transparent",
          "mt-5",
          3,
          "click",
        ],
        [
          "src",
          "https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg",
          "alt",
          "freepik image",
          1,
          "has-mask",
          "h-36",
          "object-center",
        ],
        ["width", "100%", "height", "100%", 3, "src", 4, "ngIf"],
        [
          "alt",
          "selected file",
          "width",
          "300",
          "height",
          "300",
          "class",
          "has-mask h-36 object-center",
          3,
          "ngSrc",
          4,
          "ngIf",
        ],
        ["width", "100%", "height", "100%", 3, "src"],
        [
          "alt",
          "selected file",
          "width",
          "300",
          "height",
          "300",
          1,
          "has-mask",
          "h-36",
          "object-center",
          3,
          "ngSrc",
        ],
        [1, "text-sm"],
        ["ngClass", "mt-3", 3, "click"],
      ],
      template: function (e, s) {
        e & 1 &&
          (r(0, "div", 0)(1, "div", 1)(2, "label", 2),
          p(3, "Upload your previous documents."),
          o(),
          r(4, "button", 3),
          b("click", function () {
            return s.dialogRef.close();
          }),
          p(5, "Close"),
          o()(),
          r(6, "div", 4)(7, "label", 5)(8, "div", 6)(9, "div", 7),
          _(10, Ot, 1, 0, "img", 8)(11, Jt, 3, 2, "ng-container", 9),
          o(),
          r(12, "p", 10),
          _(13, Yt, 2, 1, "span", 11)(14, Gt, 2, 0, "span", 9),
          o(),
          _(15, qt, 2, 0, "button", 12),
          o(),
          r(16, "input", 13, 14),
          b("change", function (h) {
            return s.onFileChanged(h);
          }),
          o()(),
          r(19, "button", 15),
          b("click", function () {
            return s.savePreviousDocument();
          }),
          p(20),
          o()()()),
          e & 2 &&
            (l(10),
            c("ngIf", !s.selectedFileContent),
            l(),
            c("ngIf", s.selectedFileContent),
            l(2),
            c("ngIf", s.selectedFileName),
            l(),
            c("ngIf", !s.selectedFileName),
            l(),
            c("ngIf", s.selectedFileName),
            l(5),
            u(" ", s.loading.message, " "));
      },
      dependencies: [nt, I, J],
    }));
  let i = a;
  return i;
})();
function Qt(i, a) {
  i & 1 && f(0, "i", 16);
}
function Xt(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 17),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.cancellAppointment(e.appointment.id));
      }),
      f(1, "i", 18),
      p(2, " Cancel "),
      o();
  }
  if (i & 2) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary-light flex-1 basis-5/12 hover:text-white hover:bg-primary/30 bg-primary/90 text-white  mr-0"
    ),
      F("data-tip", t.btnDisable && "Not acceptable!");
  }
}
function Zt(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 19),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.openPdfDialog(e.appointment.id));
      }),
      f(1, "i", 20),
      p(2, " Prescription "),
      o();
  }
}
function te(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 21),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.goToJoinCall(e.appointment, "patient"));
      }),
      f(1, "i", 22),
      p(2, " Join Call "),
      o();
  }
  if (i & 2) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary py-2 flex-1 basis-5/12 mr-0 hover:text-white hover:bg-primary border-secondary-dark/30 border"
    ),
      c("disabled", t.btnDisable),
      F("data-tip", t.btnDisable && "Appointment day is over!");
  }
}
function ee(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 23),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.uploadDocuments(e.appointment));
      }),
      f(1, "i", 24),
      p(2, " Upload Documents "),
      o();
  }
}
function ie(i, a) {
  if (
    (i & 1 &&
      (r(0, "div")(1, "div", 1)(2, "div")(3, "h2", 2),
      p(4),
      o()(),
      r(5, "div", 3),
      f(6, "img", 4),
      o()(),
      r(7, "div", 5)(8, "p", 6)(9, "b"),
      p(10, "Patient Name : "),
      o(),
      r(11, "b"),
      p(12),
      o()(),
      r(13, "p", 7)(14, "b"),
      p(15, "Code : "),
      o(),
      p(16),
      o(),
      r(17, "p", 7)(18, "b"),
      p(19, "Date & Time : "),
      o(),
      r(20, "b"),
      p(21),
      O(22, "date"),
      o()(),
      r(23, "p", 7)(24, "b"),
      p(25, "Doctor Fee :"),
      o(),
      r(26, "span", 8),
      p(27),
      o()(),
      r(28, "p", 7)(29, "b"),
      p(30, " Appointment Type : "),
      o(),
      p(31),
      o(),
      r(32, "p", 7)(33, "b"),
      p(34, "Consultancy Type : "),
      o(),
      r(35, "span", 9),
      _(36, Qt, 1, 0, "i", 10),
      p(37),
      o()(),
      r(38, "p", 7)(39, "b"),
      p(40, " Appointment Serial: "),
      o(),
      p(41),
      o(),
      r(42, "p", 7)(43, "b"),
      p(44, "Status : "),
      o(),
      r(45, "span"),
      p(46),
      o()()(),
      r(47, "div", 11),
      _(48, Xt, 3, 3, "button", 12)(49, Zt, 3, 0, "button", 13)(
        50,
        te,
        3,
        4,
        "button",
        14
      )(51, ee, 3, 0, "button", 15),
      o()()),
    i & 2)
  ) {
    let t = d();
    l(4),
      u(" Dr. ", t.appointment.doctorName, " "),
      l(8),
      N(t.appointment.patientName),
      l(4),
      u(" ", t.appointment.appointmentCode, " "),
      l(5),
      B(
        " ",
        W(22, 17, t.appointment.appointmentDate),
        " - ",
        t.appointment.appointmentTime,
        " "
      ),
      l(6),
      u("", t.appointment.totalAppointmentFee, " tk. "),
      l(4),
      u("", t.appointment.appointmentTypeName, " "),
      l(5),
      c("ngIf", t.appointment.consultancyTypeName == "online"),
      l(),
      u("", t.appointment.consultancyTypeName, " "),
      l(4),
      u("", t.appointment.appointmentSerial, " no. "),
      l(4),
      D(
        t.appointment.appointmentStatus == 4
          ? "bg-green-100 text-green-950 py-.5 px-3 rounded-lg"
          : "bg-yellow-100 py-.5 px-3  text-yellow-800 rounded-lg"
      ),
      l(),
      u(
        " ",
        t.appointment.appointmentStatus == 2
          ? "Confirmed"
          : t.appointment.appointmentStatus == 4
          ? "Completed"
          : t.appointment.appointmentStatus == 5
          ? "Cancelled"
          : "Progress",
        " "
      ),
      l(2),
      c(
        "ngIf",
        t.appointment.appointmentStatus == 2 &&
          t.appointment.appointmentStatus !== 4
      ),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 4),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 2),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 2 && t.uploadPrescriptiion);
  }
}
function ne(i, a) {
  i & 1 && f(0, "i", 16);
}
function oe(i, a) {
  if (
    (i & 1 && (r(0, "button"), f(1, "i", 18), p(2, " Cancel "), o()), i & 2)
  ) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary-light flex-1 basis-5/12  hover:text-white hover:bg-secondary bg-primary/90 text-white  mr-0"
    );
  }
}
function ae(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 17),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.goToJoinCall(e.appointment, "doctor"));
      }),
      f(1, "i", 22),
      p(2, " Join Call "),
      o();
  }
  if (i & 2) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary-light flex-1 basis-5/12   mr-0 hover:text-white hover:bg-secondary border-secondary-dark/30 border"
    );
  }
}
function re(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "div")(1, "div", 1)(2, "div")(3, "h2", 25),
      b("click", function () {
        v(t);
        let e = d();
        return y(e.goToPatientProfile(e.appointment));
      }),
      p(4),
      o()(),
      r(5, "div", 3),
      f(6, "img", 4),
      o()(),
      r(7, "div", 5)(8, "p", 26)(9, "b"),
      p(10, "Date & Time : "),
      o(),
      r(11, "b"),
      p(12),
      O(13, "date"),
      o()(),
      r(14, "p", 7)(15, "b"),
      p(16, "Doctor Fee :"),
      o(),
      p(17),
      o(),
      r(18, "p", 7)(19, "b"),
      p(20, " Appointment Type : "),
      o(),
      p(21),
      o(),
      r(22, "p", 7)(23, "b"),
      p(24, "Consultancy Type : "),
      o(),
      r(25, "span", 27),
      _(26, ne, 1, 0, "i", 10),
      p(27),
      o()(),
      r(28, "p", 7)(29, "b"),
      p(30, " Appointment Serial: "),
      o(),
      p(31),
      o(),
      r(32, "p", 7)(33, "b"),
      p(34, "Status : "),
      o(),
      r(35, "span"),
      p(36),
      o()()(),
      r(37, "div", 28),
      _(38, oe, 3, 2, "button", 29)(39, ae, 3, 2, "button", 12),
      r(40, "button", 30),
      b("click", function () {
        v(t);
        let e = d();
        return y(e.goToBuildPrescription(e.appointment.id));
      }),
      f(41, "i", 20),
      p(42, "Create Prescription "),
      o()()();
  }
  if (i & 2) {
    let t = d();
    l(4),
      u(" ", t.appointment.patientName, " "),
      l(8),
      B(
        " ",
        W(13, 13, t.appointment.appointmentDate),
        " - ",
        t.appointment.appointmentTime,
        " "
      ),
      l(5),
      u(" ", t.appointment.totalAppointmentFee, " tk. "),
      l(4),
      u("", t.appointment.appointmentTypeName, " "),
      l(5),
      c("ngIf", t.appointment.consultancyTypeName == "online"),
      l(),
      u("", t.appointment.consultancyTypeName, " "),
      l(4),
      u("", t.appointment.appointmentSerial, " no. "),
      l(4),
      D(
        t.appointment.appointmentStatus == 4
          ? "bg-green-100 text-green-950 py-.5 px-3 rounded-lg"
          : "bg-yellow-100 py-.5 px-3  text-yellow-800 rounded-lg"
      ),
      l(),
      u(
        " ",
        t.appointment.appointmentStatus == 2
          ? "Confirmed"
          : t.appointment.appointmentStatus == 4
          ? "Completed"
          : t.appointment.appointmentStatus == 5
          ? "Cancelled"
          : "Progress",
        " "
      ),
      l(2),
      c(
        "ngIf",
        t.appointment.appointmentStatus !== 4 &&
          t.appointment.appointmentStatus == 2
      ),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 2);
  }
}
function pe(i, a) {
  i & 1 && f(0, "i", 16);
}
function le(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 17),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.cancellAppointment(e.appointment.id));
      }),
      f(1, "i", 18),
      p(2, " Cancel "),
      o();
  }
  if (i & 2) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary-light flex-1 basis-5/12 hover:text-white hover:bg-primary/30 bg-primary/90 text-white  mr-0"
    ),
      F("data-tip", t.btnDisable && "Not acceptable!");
  }
}
function se(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 19),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.openPdfDialog(e.appointment.id));
      }),
      f(1, "i", 20),
      p(2, " Prescription "),
      o();
  }
}
function me(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 21),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.goToJoinCall(e.appointment, "patient"));
      }),
      f(1, "i", 22),
      p(2, " Join Call "),
      o();
  }
  if (i & 2) {
    let t = d(2);
    D(
      t.btnDisable
        ? "btn-secondary-light tooltip tooltip-warning flex-1 basis-5/12 bg-primary/10 text-gray-400 hover:text-neutral-400  mr-0"
        : "btn-secondary py-2 flex-1 basis-5/12 mr-0 hover:text-white hover:bg-primary border-secondary-dark/30 border"
    ),
      c("disabled", t.btnDisable),
      F("data-tip", t.btnDisable && "Appointment day is over!");
  }
}
function ce(i, a) {
  if (i & 1) {
    let t = S();
    r(0, "button", 23),
      b("click", function () {
        v(t);
        let e = d(2);
        return y(e.uploadDocuments(e.appointment));
      }),
      f(1, "i", 24),
      p(2, " Upload Documents "),
      o();
  }
}
function de(i, a) {
  if (
    (i & 1 &&
      (r(0, "div")(1, "div", 1)(2, "div")(3, "h2", 2),
      p(4),
      o()(),
      r(5, "div", 3),
      f(6, "img", 4),
      o()(),
      r(7, "div", 5)(8, "p", 6)(9, "b"),
      p(10, "Patient : "),
      o(),
      r(11, "b", 31),
      p(12),
      o()(),
      r(13, "p", 7)(14, "b"),
      p(15, "Code : "),
      o(),
      p(16),
      o(),
      r(17, "p", 7)(18, "b"),
      p(19, "Date & Time : "),
      o(),
      r(20, "b"),
      p(21),
      O(22, "date"),
      o()(),
      r(23, "p", 7)(24, "b"),
      p(25, "Doctor Fee :"),
      o(),
      r(26, "span", 8),
      p(27),
      o()(),
      r(28, "p", 7)(29, "b"),
      p(30, " Appointment Type : "),
      o(),
      p(31),
      o(),
      r(32, "p", 7)(33, "b"),
      p(34, "Consultancy Type : "),
      o(),
      r(35, "span", 32),
      _(36, pe, 1, 0, "i", 10),
      p(37),
      o()(),
      r(38, "p", 7)(39, "b"),
      p(40, " Appointment Serial: "),
      o(),
      r(41, "span", 33),
      p(42),
      o()(),
      r(43, "p", 7)(44, "b"),
      p(45, "Status : "),
      o(),
      r(46, "span"),
      p(47),
      o()()(),
      r(48, "div", 11),
      _(49, le, 3, 3, "button", 12)(50, se, 3, 0, "button", 13)(
        51,
        me,
        3,
        4,
        "button",
        14
      )(52, ce, 3, 0, "button", 15),
      o()()),
    i & 2)
  ) {
    let t = d();
    l(4),
      u(" Dr. ", t.appointment.doctorName, " "),
      l(8),
      N(t.appointment.patientName),
      l(4),
      u(" ", t.appointment.appointmentCode, " "),
      l(5),
      B(
        " ",
        W(22, 17, t.appointment.appointmentDate),
        " - ",
        t.appointment.appointmentTime,
        " "
      ),
      l(6),
      u(" ", t.appointment.totalAppointmentFee, " tk. "),
      l(4),
      u("", t.appointment.appointmentTypeName, " "),
      l(5),
      c("ngIf", t.appointment.consultancyTypeName == "online"),
      l(),
      u("", t.appointment.consultancyTypeName, " "),
      l(5),
      u("", t.appointment.appointmentSerial, " no."),
      l(4),
      D(
        t.appointment.appointmentStatus == 4
          ? "bg-green-100 font-Roboto text-green-950 py-.5 px-3 rounded-lg"
          : "bg-yellow-100 py-.5 px-3 font-Roboto text-yellow-800 rounded-lg"
      ),
      l(),
      u(
        " ",
        t.appointment.appointmentStatus == 2
          ? "Confirmed"
          : t.appointment.appointmentStatus == 4
          ? "Completed"
          : t.appointment.appointmentStatus == 5
          ? "Cancelled"
          : "Progress",
        " "
      ),
      l(2),
      c(
        "ngIf",
        t.appointment.appointmentStatus == 2 &&
          t.appointment.appointmentStatus !== 4
      ),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 4),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 2),
      l(),
      c("ngIf", t.appointment.appointmentStatus == 2 && t.uploadPrescriptiion);
  }
}
var Pt = (() => {
  let a = class a {
    constructor(n, e, s, m, h) {
      (this.Router = n),
        (this.dialog = e),
        (this.AppointmentService = s),
        (this.tosterService = m),
        (this.NormalAuth = h),
        (this.uploadPrescriptiion = !0),
        (this.btnDisable = !1),
        (this.btnDisable = !1);
    }
    ngAfterViewInit() {
      console.log(this.appointment);
      let n = new Date(),
        e = new Date(this.appointment.appointmentDate);
      n.setHours(0, 0, 0, 0),
        e.setHours(0, 0, 0, 0),
        e.getTime() >= n.getTime()
          ? (this.uploadPrescriptiion = !0)
          : (this.uploadPrescriptiion = !1),
        e.getTime() < n.getTime()
          ? (this.btnDisable = !0)
          : (this.btnDisable = !1);
    }
    goToBuildPrescription(n) {
      if (n != null && n !== void 0) {
        let e = "/#/doctor/build-prescription/" + n;
        window.open(e, "_blank");
      } else console.log("Appointment not found");
    }
    goToPatientProfile(n) {
      this.Router.navigate([
        "/doctor/patients/patient-details/",
        n.patientProfileId,
        n.doctorProfileId,
      ]);
    }
    openPdfDialog(n) {
      this.dialog.open(Tt, {
        minWidth: "820px",
        maxWidth: "100%",
        height: "1000px",
        data: { appointmentId: n },
      });
    }
    goToJoinCall(n, e) {
      if (n) {
        let s = new Date(),
          m = new Date(n.appointmentDate),
          h = {
            hour: +n.appointmentTime.split(":")[0],
            minute: +n.appointmentTime.split(":")[1],
          };
        if (
          s.getFullYear() <= m.getFullYear() &&
          s.getMonth() <= m.getMonth() &&
          s.getDate() <= m.getDate()
        )
          if (
            s.getFullYear() === m.getFullYear() &&
            s.getMonth() === m.getMonth() &&
            s.getDate() === m.getDate()
          ) {
            let k = ((x, C, M, P) => {
              console.log({
                aptMinute: C,
                aptHour: x,
                currentHour: M,
                currentMinute: P,
              }),
                C < 15 && ((C += 60), (x -= 1));
              let Vt = x - M,
                Rt = C - P;
              return Vt * 60 + Rt;
            })(h.hour, h.minute, s.getHours(), s.getMinutes());
            if (k < 15 && k > -30) {
              console.log("Appointment will start soon!");
              let x = n.doctorName,
                C = e,
                M = n.appointmentCode;
              C == "doctor" ? (x = n.doctorName) : (x = n.patientName);
              let P = `https://agora-video-call-eight.vercel.app/?username=${x}&aptCode=${M}&c=${C}`;
              window.open(P, "_blank");
            } else
              k > 15
                ? this.openDialog("Appointment time is not here yet!")
                : (this.openDialog("Appointment time is over!"),
                  (this.uploadPrescriptiion = !1));
          } else this.openDialog("Appointment date is coming soon!");
        else
          this.openDialog("Appointment date is over!"),
            (this.uploadPrescriptiion = !1);
      }
    }
    uploadDocuments(n) {
      this.dialog
        .open(Mt, { width: "40vw", data: n?.patientProfileId })
        .afterClosed()
        .subscribe((s) => {});
    }
    openDialog(n) {
      this.dialog
        .open(Nt, { width: "40vw", data: n })
        .afterClosed()
        .subscribe((s) => {});
    }
    cancellAppointment(n) {
      let e = this.NormalAuth.authInfo();
      n &&
        confirm("Are you Sure, to canel this appointment?") &&
        this.AppointmentService.cancellAppointment(
          n,
          e.id,
          e.userType
        ).subscribe((m) => {
          m &&
            this.tosterService.customToast(
              "Appointment Cancelled!!",
              "success"
            );
        });
    }
  };
  (a.ɵfac = function (e) {
    return new (e || a)(g(lt), g(ut), g(A), g(q), g(G));
  }),
    (a.ɵcmp = w({
      type: a,
      selectors: [["app-appointment-card"]],
      inputs: { appointment: "appointment", user: "user" },
      decls: 3,
      vars: 3,
      consts: [
        [4, "ngIf"],
        [
          1,
          "border-b-[1px]",
          "flex",
          "justify-between",
          "p-5",
          "bg-primary/90",
        ],
        [1, "text-[22px]", "font-Roboto", "text-gray-50", "mt-2", "capitalize"],
        [
          1,
          "w-[60px]",
          "h-[60px]",
          "overflow-hidden",
          "rounded-full",
          "border-secondary",
          "border-[2px]",
        ],
        [
          "ngSrc",
          "/assets/doctor/avater.png",
          "alt",
          "img",
          "width",
          "50",
          "height",
          "50",
          1,
          "w-full",
          "h-full",
          "object-cover",
        ],
        [1, "px-6"],
        [
          1,
          "py-1",
          "text-[18px]",
          "text-gray-500",
          "mt-5",
          "flex",
          "justify-between",
        ],
        [1, "py-1", "text-[14px]", "text-gray-500", "flex", "justify-between"],
        [1, "font-Roboto", "text-[18px]"],
        [1, "badge", "text-primary", "bg-green-200", "font-Roboto"],
        ["class", "fa-solid fa-video", 4, "ngIf"],
        [
          1,
          "flex",
          "w-full",
          "justify-between",
          "gap-3",
          "flex-wrap",
          "p-4",
          "items-end",
          "h-full",
        ],
        [3, "class", "click", 4, "ngIf"],
        [
          "class",
          "btn-secondary-light flex-1 basis-5/12 mr-0 border-secondary-dark/30 border",
          3,
          "click",
          4,
          "ngIf",
        ],
        [3, "disabled", "class", "click", 4, "ngIf"],
        [
          "class",
          "btn-secondary-light flex-1 tooltip-warning basis-5/12 mr-0 border-secondary-dark/30 border",
          3,
          "click",
          4,
          "ngIf",
        ],
        [1, "fa-solid", "fa-video"],
        [3, "click"],
        [1, "fa-solid", "fa-ban", "mr-1"],
        [
          1,
          "btn-secondary-light",
          "flex-1",
          "basis-5/12",
          "mr-0",
          "border-secondary-dark/30",
          "border",
          3,
          "click",
        ],
        [1, "fa-solid", "fa-prescription", "mr-1"],
        [3, "disabled", "click"],
        [1, "fa-solid", "fa-phone-volume", "mr-1"],
        [
          1,
          "btn-secondary-light",
          "flex-1",
          "tooltip-warning",
          "basis-5/12",
          "mr-0",
          "border-secondary-dark/30",
          "border",
          3,
          "click",
        ],
        [1, "fa-solid", "fa-upload", "mr-1"],
        [
          1,
          "cursor-pointer",
          "text-[22px]",
          "font-Roboto",
          "text-gray-50",
          "mt-2",
          "capitalize",
          3,
          "click",
        ],
        [
          1,
          "py-1",
          "text-[14px]",
          "text-gray-500",
          "mt-3",
          "flex",
          "justify-between",
        ],
        [1, "badge", "text-primary"],
        [
          1,
          "grid",
          "grid-cols-2",
          "flex-wrap",
          "w-full",
          "justify-between",
          "gap-4",
          "p-4",
        ],
        [3, "class", 4, "ngIf"],
        [
          1,
          "btn-secondary-light",
          "col-span-2",
          "flex-1",
          "active:scale-90",
          "transition-all",
          "duration-75",
          "mr-0",
          "hover:text-white",
          "hover:bg-secondary",
          "border-secondary-dark/30",
          "border",
          3,
          "click",
        ],
        [1, "text-[18px]", "capitalize"],
        [1, "badge", "bg-green-200", "text-primary"],
        [1, "font-Roboto"],
      ],
      template: function (e, s) {
        e & 1 &&
          _(0, ie, 52, 19, "div", 0)(1, re, 43, 15, "div", 0)(
            2,
            de,
            53,
            19,
            "div",
            0
          ),
          e & 2 &&
            (c("ngIf", s.user == "patient"),
            l(),
            c("ngIf", s.user == "doctor"),
            l(),
            c("ngIf", s.user == "agent"));
      },
      dependencies: [I, J, ot],
    }));
  let i = a;
  return i;
})();
function ue(i, a) {
  i & 1 &&
    (r(0, "div", 8),
    f(1, "app-skeleton")(2, "app-skeleton")(3, "app-skeleton")(
      4,
      "app-skeleton"
    )(5, "app-skeleton")(6, "app-skeleton")(7, "app-skeleton")(
      8,
      "app-skeleton"
    ),
    o());
}
function ge(i, a) {
  i & 1 &&
    (r(0, "div", 9)(1, "div"), p(2, "No records has been found!"), o()());
}
function xe(i, a) {
  if (
    (i & 1 && (r(0, "div", 10), f(1, "app-appointment-card", 11), o()), i & 2)
  ) {
    let t = a.$implicit,
      n = d();
    l(), c("appointment", t)("user", n.user);
  }
}
function he(i, a) {
  i & 1 &&
    (r(0, "div", 12)(1, "div"), p(2, "No records has been found!"), o()());
}
var Le = (() => {
  let a = class a {
    constructor(n, e, s, m, h) {
      (this.DoctorPatientAppointmentService = n),
        (this.fb = e),
        (this.AppointmentService = s),
        (this.route = m),
        (this.AuthService = h),
        (this.animationDirection = "bottom"),
        (this.dataLoading = !1),
        (this.appointmentList = []),
        (this.skelton = !1),
        (this.consultancyType = []),
        (this.specialityList = []),
        (this.specializationList = []),
        (this.totalCount = 0),
        (this.filterModel = {
          offset: 0,
          limit: 0,
          pageNo: 0,
          pageSize: 10,
          sortBy: "name",
          sortOrder: "asc",
          isDesc: !1,
        }),
        (this.subs = new St()),
        (this.doctorFilterDto = {}),
        (this.filterInput = {
          fields: {
            searchField: { formControlName: "appointmentSearch" },
            filterField: [
              {
                label: "Consultancy Type",
                fieldType: "select",
                formControlName: "consultancy",
                options: ht.getEnumList(xt),
              },
              {
                label: "start date",
                fieldType: "date-range",
                formControlName: { startDate: "startDate", endDate: "endDate" },
              },
            ],
          },
        }),
        (this.filter = this.fb.group({}));
    }
    ngOnInit() {
      (this.userType = this.AuthService.authInfo().userType),
        this.route.queryParams.subscribe((n) => {
          let e = n["apt-patientname"]
              ? n["apt-patientname"]
              : n["apt-doctorname"]
              ? n["apt-doctorname"]
              : n.patientname
              ? n.patientname
              : n.doctorname,
            s = n.consultancyType,
            m = n.startDate,
            h = n.endDate;
          s || e || m || h
            ? this.loadData({
                consultancy: s,
                name: e,
                startDate: m,
                endDate: h,
              })
            : this.loadData({
                consultancy: void 0,
                name: void 0,
                endDate: void 0,
                startDate: void 0,
              });
        });
    }
    loadData(n) {
      console.log(n);
      let { consultancy: e, startDate: s, endDate: m, name: h } = n,
        j = s !== void 0 ? new Date(s).toLocaleDateString() : void 0,
        k = m !== void 0 ? new Date(m).toLocaleDateString() : void 0;
      (this.doctorFilterDto.consultancyType = e),
        (this.doctorFilterDto.fromDate = j),
        (this.doctorFilterDto.toDate = k),
        (this.doctorFilterDto.name = h),
        (this.filterModel.limit = this.filterModel.pageSize),
        (this.filterModel.offset =
          (this.filterModel.pageNo - 1) * this.filterModel.pageSize),
        (this.dataLoading = !0),
        (this.skelton = !0),
        this.user == "doctor" &&
          (this.subs.sink = V([
            this.AppointmentService.getAppointmentListForDoctorWithSearchFilter(
              this.id,
              this.doctorFilterDto,
              this.filterModel
            ),
            this.AppointmentService.getAppointmentCountForDoctorWithSearchFilter(
              this.id,
              this.doctorFilterDto
            ),
          ]).subscribe(
            ([x, C]) => {
              (this.totalCount = C),
                (this.appointmentList = x),
                (this.dataLoading = !1),
                (this.skelton = !1);
            },
            (x) => {
              console.log(x), (this.dataLoading = !1), (this.skelton = !1);
            }
          )),
        this.user == "patient" &&
          (this.subs.sink = V([
            this.AppointmentService.getAppointmentListForPatientWithSearchFilter(
              this.id,
              "patient",
              this.doctorFilterDto,
              this.filterModel
            ),
            this.AppointmentService.getAppointmentCountForPatientWithSearchFilter(
              this.id,
              "patient",
              this.doctorFilterDto
            ),
          ]).subscribe(
            ([x, C]) => {
              (this.totalCount = C),
                (this.appointmentList = x),
                (this.dataLoading = !1),
                (this.skelton = !1);
            },
            (x) => {
              console.log(x), (this.dataLoading = !1), (this.skelton = !1);
            }
          )),
        this.user == "agent" &&
          (this.subs.sink = V([
            this.AppointmentService.getAppointmentListForPatientWithSearchFilter(
              this.id,
              "agent",
              this.doctorFilterDto,
              this.filterModel
            ),
            this.AppointmentService.getAppointmentCountForPatientWithSearchFilter(
              this.id,
              "agent",
              this.doctorFilterDto
            ),
          ]).subscribe(
            ([x, C]) => {
              (this.totalCount = C),
                (this.appointmentList = x),
                (this.dataLoading = !1),
                (this.skelton = !1);
            },
            (x) => {
              console.log(x), (this.dataLoading = !1), (this.skelton = !1);
            }
          ));
    }
  };
  (a.ɵfac = function (e) {
    return new (e || a)(g(Ft), g(mt), g(A), g(pt), g(G));
  }),
    (a.ɵcmp = w({
      type: a,
      selectors: [["app-all-appointments"]],
      inputs: { id: "id", user: "user" },
      decls: 12,
      vars: 6,
      consts: [
        [1, "w-full", "relative"],
        [3, "filterInput", "filterForm", "from"],
        [1, "flex", "gap-4", "items-center", "justify-between"],
        [1, "dashbord-heading-text", "text-[22px]"],
        [1, "fa-solid", "fa-building-columns", "mr-1"],
        [
          "class",
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 flex-wrap",
          4,
          "ngIf",
        ],
        [
          "class",
          "flex justify-center items-center h-[500px] w-full",
          4,
          "ngIf",
        ],
        [
          1,
          "grid",
          "px-6",
          "grid-cols-1",
          "md:grid-cols-2",
          "xl:grid-cols-3",
          "gap-10",
          "3xl:grid-cols-4",
          "w-full",
        ],
        [
          1,
          "grid",
          "grid-cols-1",
          "sm:grid-cols-2",
          "md:grid-cols-3",
          "2xl:grid-cols-4",
          "gap-10",
          "flex-wrap",
        ],
        [1, "flex", "justify-center", "items-center", "h-[500px]", "w-full"],
        [
          1,
          "border-[1px]",
          "min-w-[330px]",
          "h-fit",
          "rounded-md",
          "bg-gray-300",
          "overflow-hidden",
        ],
        [3, "appointment", "user"],
        [
          1,
          "flex",
          "justify-center",
          "items-center",
          "h-[500px]",
          "flex-shrink",
        ],
        [
          "class",
          "border-[1px] min-w-[330px] h-fit rounded-md bg-gray-300 overflow-hidden",
        ],
        ["class", "flex justify-center items-center h-[500px] flex-shrink"],
      ],
      template: function (e, s) {
        e & 1 &&
          (r(0, "div", 0),
          f(1, "app-filter", 1),
          r(2, "div", 2)(3, "h1", 3),
          f(4, "i", 4),
          p(5, " Appointments "),
          o()(),
          _(6, ue, 9, 0, "div", 5)(7, ge, 3, 0, "div", 6),
          r(8, "div", 7),
          Z(9, xe, 2, 2, "div", 13, X, !1, he, 3, 0, "div", 14),
          o()()),
          e & 2 &&
            (l(),
            c("filterInput", s.filterInput)("filterForm", s.filter)(
              "from",
              "appointment"
            ),
            l(5),
            c("ngIf", s.skelton),
            l(),
            c("ngIf", s.noDataAvailable),
            l(2),
            tt(s.appointmentList));
      },
      dependencies: [I, yt, wt, Pt],
      styles: [
        ".mdc-line-ripple{display:none}  .mat-mdc-text-field-wrapper{border:1px solid rgb(211,211,211);height:45px!important}  .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:30px}  .mat-mdc-select-arrow svg{top:0}  .mat-mdc-form-field{margin-left:15px}  .mat-mdc-paginator-page-size-select{height:40px}  .mat-mdc-paginator-container{background:#fff;border-radius:10px}  .mat-mdc-form-field-infix{padding-top:9px!important;padding-bottom:0}",
      ],
    }));
  let i = a;
  return i;
})();
var Lt = (() => {
  let a = class a {};
  (a.ɵfac = function (e) {
    return new (e || a)();
  }),
    (a.ɵmod = z({ type: a })),
    (a.ɵinj = U({ imports: [$, kt] }));
  let i = a;
  return i;
})();
var ci = (() => {
  let a = class a {};
  (a.ɵfac = function (e) {
    return new (e || a)();
  }),
    (a.ɵmod = z({ type: a })),
    (a.ɵinj = U({
      imports: [$, st.forChild([]), Ct, Lt, ct, bt, Dt, It, vt, _t, dt, At],
    }));
  let i = a;
  return i;
})();
export { Le as a, ci as b };
