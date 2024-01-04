"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[4512],{4512:(_,l,a)=>{a.r(l),a.d(l,{PatientDetailsModule:()=>P});var p=a(6895),t=a(4650),d=a(2510),c=a(6084),m=a(5817),s=a(3848);let g=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-patient-medical-records"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"patient-medical-records works!"),t.qZA())}}),o})(),u=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-patient-billing-history"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"patient-billing-history works!"),t.qZA())}}),o})();var Z=a(9229),b=a(5412);function f(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr",6)(1,"td",4),t._uU(2),t.qZA(),t.TgZ(3,"td",4),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",4),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td",4)(10,"span",7),t.NdJ("click",function(){const y=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.openPdfDialog(y.id))}),t._uU(11,"View"),t.qZA()(),t.TgZ(12,"td",4),t._uU(13),t.ALo(14,"date"),t.qZA(),t.TgZ(15,"td",4),t._uU(16),t.qZA()()}if(2&o){const e=i.$implicit;t.xp6(2),t.hij(" Dr. ",e.doctorName," "),t.xp6(2),t.hij(" ",t.lcZ(5,5,e.prescriptionDate)," "),t.xp6(3),t.hij(" ",t.lcZ(8,7,e.appointmentDate)," "),t.xp6(6),t.hij(" ",t.lcZ(14,9,e.followupDate)," "),t.xp6(3),t.hij(" ",e.advice," ")}}let h=(()=>{class o{constructor(e){this.dialog=e}openPdfDialog(e){this.dialog.open(Z.P,{minWidth:"820px",maxWidth:"100%",height:"1000px",data:{prescriptionId:e}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-patient-prescriptions"]],inputs:{prescriptionListDetails:"prescriptionListDetails"},decls:18,vars:1,consts:[[1,"px-4","py-3"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","dark:text-gray-400","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3"],[1,"px-6","py-4"],["class","bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","hover:bg-gray-50","dark:hover:bg-gray-600"],[1,"py-1","px-4","border-secondary-dark/10","border-[1px]","bg-secondary-light","text-primary","rounded-md","cursor-pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr")(4,"th",3),t._uU(5," Doctor's Name "),t.qZA(),t.TgZ(6,"th",3),t._uU(7," Prescription Date "),t.qZA(),t.TgZ(8,"td",4),t._uU(9," Appointment Date "),t.qZA(),t.TgZ(10,"th",3),t._uU(11," Prescription "),t.qZA(),t.TgZ(12,"td",4),t._uU(13," Followup Date "),t.qZA(),t.TgZ(14,"th",3),t._uU(15," Advice "),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,f,17,11,"tr",5),t.qZA()()()),2&e&&(t.xp6(17),t.Q6J("ngForOf",n.prescriptionListDetails))},dependencies:[p.sg,p.uU]}),o})();const x=[{path:"",component:(()=>{class o{constructor(e,n,r){this.route=e,this.PatientProfileService=n,this.PrescriptionMasterService=r}ngOnInit(){const{patientProfileId:e,doctorProfileId:n}=this.route.snapshot.params;console.log(this.route.snapshot.params),e&&n&&(this.PatientProfileService.get(e).subscribe(r=>{this.patientProfileInfo=r}),this.PrescriptionMasterService.getPrescriptionMasterListByDoctorIdPatientId(n,e).subscribe(r=>{this.prescriptionListDetails=r}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.gz),t.Y36(c.j),t.Y36(m.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-patient-details"]],decls:74,vars:3,consts:[[1,"doctor-dashboard_midcontent_container","w-full","p-8","bg-white","overflow-hidden"],[1,"flex","gap-6"],[1,"w-[90px]","h-[90px]","rounded-full","overflow-hidden","border-[3px]"],["src","/assets/doctor/dr.jpeg","alt","",1,"w-full","h-full","object-cover"],[1,"font-Roboto"],[1,"text-[24px]","font-medium","text-primary"],[1,"flex","gap-16","font-Roboto"],[1,"text-gray-600","my-2","text-[15px"],[1,"flex","gap-5","mt-12"],[1,"h-[500px]","w-full","border-[1px]","rounded-xl","overflow-hidden","shadow-secondary/10","shadow-2xl"],["mat-stretch-tabs","true","mat-align-tabs","start"],["label","Medical Records"],["label","Prescriptions"],[3,"prescriptionListDetails"],["label","Billing History"],[1,"min-w-[320px]","h-[500px]","overflow-hidden","border-[1px]","rounded-xl","shadow-secondary/10","shadow-2xl"],[1,"w-full","bg-white/90","p-4","text-primary/90","font-Roboto","border-b-[1px]"],[1,"fa-solid","fa-clock","text-primary","mr-2"],[1,"p-4","text-[14px]"],[1,"relative"],[1,"after:content-['","']","after:w-[1px]","after:h-[30px]","after:bg-secondary","after:absolute","after:top-[17px]","after:left-[7px]","fa-regular","fa-circle-dot","mb-[20px]","text-primary","text-[16px]"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"h1",5),t._uU(6),t.qZA(),t.TgZ(7,"div",6)(8,"div")(9,"p",7)(10,"b"),t._uU(11,"ID: "),t.qZA(),t._uU(12,"SG25621 "),t.qZA(),t.TgZ(13,"p",7)(14,"b"),t._uU(15,"Age : "),t.qZA(),t._uU(16,"26y"),t.qZA()(),t.TgZ(17,"div")(18,"p",7)(19,"b"),t._uU(20,"Blood Group :"),t.qZA(),t._uU(21," B+"),t.qZA(),t.TgZ(22,"p",7)(23,"b"),t._uU(24,"Address : "),t.qZA(),t._uU(25," Runway Road Dhaka, 1215"),t.qZA()(),t.TgZ(26,"div")(27,"p",7)(28,"b"),t._uU(29,"Mobile :"),t.qZA(),t._uU(30),t.qZA(),t.TgZ(31,"p",7)(32,"b"),t._uU(33,"Email : "),t.qZA(),t._uU(34," example@mail.com"),t.qZA()()()()(),t.TgZ(35,"div",8)(36,"div",9)(37,"mat-tab-group",10)(38,"mat-tab",11),t._UZ(39,"app-patient-medical-records"),t.qZA(),t.TgZ(40,"mat-tab",12),t._UZ(41,"app-patient-prescriptions",13),t.qZA(),t.TgZ(42,"mat-tab",14),t._UZ(43,"app-patient-billing-history"),t.qZA()()(),t.TgZ(44,"div",15)(45,"h1",16),t._UZ(46,"i",17),t._uU(47," History "),t.qZA(),t.TgZ(48,"div",18)(49,"p",19),t._UZ(50,"i",20),t.TgZ(51,"span"),t._uU(52,"-----"),t.qZA(),t._uU(53," Dr. John - 20/05/23 : 05.00pm "),t.qZA(),t.TgZ(54,"p",19),t._UZ(55,"i",20),t.TgZ(56,"span"),t._uU(57,"-----"),t.qZA(),t._uU(58," Dr. John - 20/05/23 : 05.00pm "),t.qZA(),t.TgZ(59,"p",19),t._UZ(60,"i",20),t.TgZ(61,"span"),t._uU(62,"-----"),t.qZA(),t._uU(63," Payment Done "),t.qZA(),t.TgZ(64,"p",19),t._UZ(65,"i",20),t.TgZ(66,"span"),t._uU(67,"-----"),t.qZA(),t._uU(68," Reschedule : 05.00pm "),t.qZA(),t.TgZ(69,"p",19),t._UZ(70,"i",20),t.TgZ(71,"span"),t._uU(72,"-----"),t.qZA(),t._uU(73," Revisit : 05.00pm "),t.qZA()()()()()),2&e&&(t.xp6(6),t.hij("",null==n.patientProfileInfo?null:n.patientProfileInfo.patientName," "),t.xp6(24),t.hij(" ",n.patientProfileInfo.mobileNo,""),t.xp6(11),t.Q6J("prescriptionListDetails",n.prescriptionListDetails))},dependencies:[s.uX,s.SP,g,u,h],styles:[".mat-tab-group[_ngcontent-%COMP%]{margin-bottom:48px}  .mat-tab-group .mat-mdc-tab-label-container{border:1px solid red!important;overflow:hidden}  .mdc-tab--active{background:#01204e;color:#fff}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%]{color:#fff}  .mat-ink-bar{display:none}  .mat-mdc-tab:not(.mat-mdc-tab-disabled) .mdc-tab-indicator__content--underline, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled)   .mdc-tab-indicator__content--underline[_ngcontent-%COMP%]{border:none}  .mdc-tab-indicator__content--underline{border:none}  .mat-mdc-tab-labels{border-bottom:1px solid rgb(230,230,230)}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(x),s.Nh]}),o})()}}]);