"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[281],{6281:(A,a,t)=>{t.r(a),t.d(a,{PatientModule:()=>S});var i=t(6895),h=t(2510),n=t(4650),e=t(629),m=t(427),f=t(1936),v=t(8711),P=t(3428);let g=(()=>{class o{constructor(d,s,c){this.NormalAuth=d,this.UserinfoStateService=s,this.DoctorStateService=c,this.menuList=[{menuName:"Dashboard",route:"dashboard",icon:"fa-brands fa-microsoft"},{menuName:"Appointments",route:"appointments",icon:"fa-solid fa-calendar-check"},{menuName:"Doctors",route:"doctors",icon:"fa-solid fa-bed-pulse"},{menuName:"My Patient",route:"my-patient",icon:"fa-solid fa-bed-pulse"},{menuName:"Billing",route:"billing",icon:"fa-solid fa-money-bill-transfer"},{menuName:"Profile Settings",route:"profile-settings",icon:"fa-solid fa-gear"}]}ngOnInit(){let d=this.NormalAuth.authInfo();d.id&&(this.UserinfoStateService.getProfileInfo(d.id,d.userType),this.DoctorStateService.getAllDoctorList())}}return o.\u0275fac=function(d){return new(d||o)(n.Y36(e.e),n.Y36(m.Z),n.Y36(f.f))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-patient"]],decls:5,vars:1,consts:[[1,"flex","justify-between","w-full","-z-10"],[1,"w-[20%]","min-w-[250px]",3,"menuList"],[1,"doctor-dashboard_midcontent","w-[80%]","h-full","bg-[#f4f4fb]"]],template:function(d,s){1&d&&(n.TgZ(0,"div",0),n._UZ(1,"app-dashboard-menu",1),n.TgZ(2,"div",2),n._UZ(3,"app-dashboard-header")(4,"router-outlet"),n.qZA()()),2&d&&(n.xp6(1),n.Q6J("menuList",s.menuList))},dependencies:[v.E,P.X,h.lC]}),o})();var u=t(655),C=t(41),M=t(8478);const y=[{path:"",component:g,canActivate:[C.$],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>Promise.all([t.e(581),t.e(592),t.e(326)]).then(t.bind(t,5326)).then(o=>o.DashboardModule)},{path:"appointments",loadChildren:()=>Promise.all([t.e(144),t.e(33),t.e(65),t.e(287),t.e(920),t.e(848),t.e(857),t.e(718)]).then(t.bind(t,718)).then(o=>o.AppointmentsModule)},{path:"doctors",loadChildren:()=>Promise.all([t.e(144),t.e(33),t.e(65),t.e(287),t.e(620),t.e(399),t.e(68)]).then(t.bind(t,9068)).then(o=>o.DoctorsModule)},{path:"billing",loadChildren:()=>t.e(20).then(t.bind(t,7020)).then(o=>o.BillingModule)},{path:"my-patient",loadChildren:()=>t.e(437).then(t.bind(t,9437)).then(o=>o.MyPatientModule)},{path:"profile-settings",loadChildren:()=>Promise.all([t.e(592),t.e(449)]).then(t.bind(t,4449)).then(o=>o.ProfileSettingsModule)},{path:"patient-details/:id",loadChildren:()=>Promise.all([t.e(920),t.e(848),t.e(638)]).then(t.bind(t,8638)).then(o=>o.PatientDetailsModule)}]}];let S=(()=>{class o{}return o.\u0275fac=function(d){return new(d||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[M.V,i.ez,u.F,h.Bz.forChild(y)]}),o})()}}]);