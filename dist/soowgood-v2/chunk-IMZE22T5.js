import{a as R}from"./chunk-YBAE6PYR.js";import"./chunk-6MXKGXAX.js";import{a as j,b as B,c as O}from"./chunk-LNI7LSET.js";import{c as k}from"./chunk-KZ73FH3X.js";import"./chunk-RCDD4OPH.js";import"./chunk-FFSGEAVH.js";import"./chunk-QYZGMTSF.js";import{s as N,u as L}from"./chunk-B6XPZLTG.js";import{a as F}from"./chunk-6E6ZED7T.js";import"./chunk-U25NMAFE.js";import"./chunk-FUUASHDU.js";import{Eb as u,Fb as b,Ha as D,Na as x,S,Vb as I,X as p,Y as E,Ya as i,Za as e,_a as f,aa as v,ac as M,ba as y,cb as P,cc as T,gb as C,ib as w,sc as A,ub as o,wb as m,xc as _,ya as d,za as c}from"./chunk-PJQ4EZIT.js";import"./chunk-BYPGBJQR.js";import"./chunk-FK6H3RFT.js";import"./chunk-5G567QLT.js";var J=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p({type:t,selectors:[["app-patient-medical-records"]],decls:2,vars:0,template:function(n,r){n&1&&(i(0,"p"),o(1,"patient-medical-records works!"),e())}});let a=t;return a})();var H=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p({type:t,selectors:[["app-patient-billing-history"]],decls:2,vars:0,template:function(n,r){n&1&&(i(0,"p"),o(1,"patient-billing-history works!"),e())}});let a=t;return a})();function $(a,t){if(a&1){let s=P();i(0,"tr",6)(1,"td",4),o(2),e(),i(3,"td",4),o(4),u(5,"date"),e(),i(6,"td",4),o(7),u(8,"date"),e(),i(9,"td",4)(10,"span",7),C("click",function(){let r=v(s).$implicit,g=w();return y(g.openPdfDialog(r.id))}),o(11,"View"),e()(),i(12,"td",4),o(13),u(14,"date"),e(),i(15,"td",4),o(16),e()()}if(a&2){let s=t.$implicit;d(2),m("Dr. ",s.doctorName,""),d(2),m(" ",b(5,5,s.prescriptionDate)," "),d(3),m(" ",b(8,7,s.appointmentDate)," "),d(6),m(" ",b(14,9,s.followupDate)," "),d(3),m(" ",s.advice," ")}}var U=(()=>{let t=class t{constructor(l){this.dialog=l}openPdfDialog(l){this.dialog.open(R,{minWidth:"820px",maxWidth:"100%",height:"1000px",data:{prescriptionId:l}})}};t.\u0275fac=function(n){return new(n||t)(c(k))},t.\u0275cmp=p({type:t,selectors:[["app-patient-prescriptions"]],inputs:{prescriptionListDetails:"prescriptionListDetails"},decls:18,vars:1,consts:[[1,"px-4","py-3"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5"],["scope","col",1,"px-6","py-3"],[1,"px-6","py-4"],["class","bg-white hover:bg-gray-50",4,"ngFor","ngForOf"],[1,"bg-white","hover:bg-gray-50"],[1,"py-1","px-4","border-secondary-dark/10","border-[1px]","bg-secondary-light","text-primary","rounded-md","cursor-pointer",3,"click"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr")(4,"th",3),o(5,"Doctor's Name"),e(),i(6,"th",3),o(7,"Prescription Date"),e(),i(8,"td",4),o(9,"Appointment Date"),e(),i(10,"th",3),o(11,"Prescription"),e(),i(12,"td",4),o(13,"Followup Date"),e(),i(14,"th",3),o(15,"Advice"),e()()(),i(16,"tbody"),D(17,$,17,11,"tr",5),e()()()),n&2&&(d(17),x("ngForOf",r.prescriptionListDetails))},dependencies:[I,M]});let a=t;return a})();var V=(()=>{let t=class t{constructor(l,n,r,g){this.route=l,this.PatientProfileService=n,this.PrescriptionMasterService=r,this.NormalAuth=g}ngOnInit(){let l=this.NormalAuth.authInfo();this.userInfo=l;let{patientProfileId:n}=this.route.snapshot.params;this.userInfo.userType==="doctor"?n&&l.id&&(this.PatientProfileService.get(n).subscribe(r=>{this.patientProfileInfo=r}),this.PrescriptionMasterService.getPrescriptionMasterListByDoctorIdPatientId(l.id,n).subscribe(r=>{this.prescriptionListDetails=r})):this.userInfo.userType==="patient"?(this.PatientProfileService.get(n).subscribe(r=>{this.patientProfileInfo=r}),this.PrescriptionMasterService.getPrescriptionMasterListByPatientId(n).subscribe(r=>{this.prescriptionListDetails=r,console.log(r)})):this.userInfo.userType}};t.\u0275fac=function(n){return new(n||t)(c(A),c(N),c(L),c(F))},t.\u0275cmp=p({type:t,selectors:[["app-patient-details"]],decls:41,vars:6,consts:[[1,"doctor-dashboard_midcontent_container","w-full","p-8","bg-white","overflow-hidden"],[1,"flex","gap-6"],[1,"w-[90px]","h-[90px]","rounded-full","overflow-hidden","border-[3px]"],["src","/assets/doctor/dr.jpeg","alt","",1,"w-full","h-full","object-cover"],[1,"font-Roboto"],[1,"text-[24px]","font-medium","text-primary"],[1,"flex","gap-16","font-Roboto"],[1,"text-gray-600","my-2","text-[15px"],[1,"flex","gap-5","mt-12"],[1,"h-[500px]","w-full","border-[1px]","rounded-xl","overflow-hidden","shadow-secondary/10","shadow-2xl"],["mat-stretch-tabs","true","mat-align-tabs","start"],["label","Medical Records"],["label","Prescriptions"],[3,"prescriptionListDetails"],["label","Billing History"],[1,"min-w-[320px]","h-[500px]","overflow-hidden","border-[1px]","rounded-xl","shadow-secondary/10","shadow-2xl"],[1,"w-full","bg-white/90","p-4","text-primary/90","font-Roboto","border-b-[1px]"],[1,"fa-solid","fa-clock","text-primary","mr-2"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),f(3,"img",3),e(),i(4,"div",4)(5,"h1",5),o(6),e(),i(7,"div",6)(8,"div")(9,"p",7)(10,"b"),o(11,"Age : "),e(),o(12),e()(),i(13,"div")(14,"p",7)(15,"b"),o(16,"Blood Group :"),e(),o(17),e()(),i(18,"div")(19,"p",7)(20,"b"),o(21,"Mobile :"),e(),o(22),e()(),i(23,"div")(24,"p",7)(25,"b"),o(26,"Email : "),e(),o(27),e()()()()(),i(28,"div",8)(29,"div",9)(30,"mat-tab-group",10)(31,"mat-tab",11),f(32,"app-patient-medical-records"),e(),i(33,"mat-tab",12),f(34,"app-patient-prescriptions",13),e(),i(35,"mat-tab",14),f(36,"app-patient-billing-history"),e()()(),i(37,"div",15)(38,"h1",16),f(39,"i",17),o(40," History "),e()()()()),n&2&&(d(6),m(" ",r.patientProfileInfo==null?null:r.patientProfileInfo.patientName," "),d(6),m("",r.patientProfileInfo==null?null:r.patientProfileInfo.age," "),d(5),m(" ",r.patientProfileInfo==null?null:r.patientProfileInfo.bloodGroup," "),d(5),m(" ",r.patientProfileInfo==null?null:r.patientProfileInfo.patientMobileNo," "),d(5),m(" ",r.patientProfileInfo==null?null:r.patientProfileInfo.patientEmail," "),d(7),x("prescriptionListDetails",r.prescriptionListDetails))},dependencies:[j,B,J,H,U],styles:[".mat-tab-group[_ngcontent-%COMP%]{margin-bottom:48px}  .mat-tab-group .mat-mdc-tab-label-container{border:1px solid red!important;overflow:hidden}  .mdc-tab--active{background:#01204e;color:#fff}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%]{color:#fff}  .mat-ink-bar{display:none}  .mat-mdc-tab:not(.mat-mdc-tab-disabled) .mdc-tab-indicator__content--underline, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled)   .mdc-tab-indicator__content--underline[_ngcontent-%COMP%]{border:none}  .mdc-tab-indicator__content--underline{border:none}  .mat-mdc-tab-labels{border-bottom:1px solid rgb(230,230,230)}"]});let a=t;return a})();var z=[{path:"",component:V}],Et=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=E({type:t}),t.\u0275inj=S({imports:[T,_.forChild(z),O]});let a=t;return a})();export{Et as PatientDetailsModule};
