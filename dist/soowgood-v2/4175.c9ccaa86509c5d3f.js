"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[4175],{4175:(N,a,t)=>{t.r(a),t.d(a,{AgentModule:()=>P});var e=t(6895);const m=[{menuName:"Dashboard",route:"dashboard",icon:"fa-brands fa-microsoft"},{menuName:"Patients",route:"patients",icon:"fa-solid fa-bed-pulse"},{menuName:"Doctors",route:"doctors",icon:"fa-solid fa-bed-pulse"},{menuName:"Appointments",route:"appointments",icon:"fa-solid fa-calendar-check"},{menuName:"Billing",route:"billing",icon:"fa-solid fa-money-bill-transfer"},{menuName:"Profile Settings",route:"profile-settings",icon:"fa-solid fa-gear"}];var o=t(4650),i=t(629),f=t(427),h=t(1951),g=t(3428),v=t(8711);let u=(()=>{class n{constructor(d,l){this.NormalAuth=d,this.UserinfoStateService=l}ngOnInit(){this.menuList=m;let d=this.NormalAuth.authInfo().id;d&&this.UserinfoStateService.getProfileInfo(d,"agent")}}return n.\u0275fac=function(d){return new(d||n)(o.Y36(i.e),o.Y36(f.Z))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-agent"]],decls:5,vars:1,consts:[[1,"flex","justify-between","w-full","-z-10"],[1,"w-[20%]","min-w-[250px]",3,"menuList"],[1,"doctor-dashboard_midcontent","w-[80%]","h-full","bg-[#F9F9FF]"]],template:function(d,l){1&d&&(o.TgZ(0,"div",0),o._UZ(1,"app-dashboard-menu",1),o.TgZ(2,"div",2),o._UZ(3,"app-dashboard-header")(4,"router-outlet"),o.qZA()()),2&d&&(o.xp6(1),o.Q6J("menuList",l.menuList))},dependencies:[h.lC,g.X,v.E]}),n})();var A=t(655),C=t(8478);const M=[{path:"",component:u,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>Promise.all([t.e(8592),t.e(2368)]).then(t.bind(t,2368)).then(n=>n.DashboardModule)},{path:"appointments",loadChildren:()=>Promise.all([t.e(4144),t.e(3033),t.e(9065),t.e(1287),t.e(9229),t.e(3848),t.e(6665),t.e(8592),t.e(8292)]).then(t.bind(t,8292)).then(n=>n.AppointmentsModule)},{path:"doctors",loadChildren:()=>Promise.all([t.e(4144),t.e(3033),t.e(9065),t.e(1287),t.e(7620),t.e(3267),t.e(6399),t.e(8592),t.e(561)]).then(t.bind(t,561)).then(n=>n.DoctorsModule)},{path:"patients",loadChildren:()=>Promise.all([t.e(2260),t.e(9473)]).then(t.bind(t,9473)).then(n=>n.PatientsModule)},{path:"billing",loadChildren:()=>t.e(4546).then(t.bind(t,4546)).then(n=>n.BillingModule)},{path:"profile-settings",loadChildren:()=>t.e(9629).then(t.bind(t,9629)).then(n=>n.ProfileSettingsModule)}]}];let P=(()=>{class n{}return n.\u0275fac=function(d){return new(d||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[e.ez,h.Bz.forChild(M),A.F,C.V]}),n})()}}]);