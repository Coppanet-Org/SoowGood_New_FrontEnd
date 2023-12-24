"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[545],{8545:(v,l,t)=>{t.r(l),t.d(l,{DoctorModule:()=>b});var i=t(8478),h=t(6895),n=t(4650),r=t(629),m=t(427),c=t(8711),p=t(3428),s=t(1951);let f=(()=>{class o{constructor(a,e){this.NormalAuth=a,this.UserinfoStateService=e,this.menuList=[{menuName:"Dashboard",route:"dashboard",icon:"fa-brands fa-microsoft"},{menuName:"Appointments",route:"appointments",icon:"fa-solid fa-calendar-check"},{menuName:"Patients",route:"patients",icon:"fa-solid fa-bed-pulse"},{menuName:"Hospital & Schedule",route:"hospital-schedule",icon:"fa-solid fa-calendar-days"},{menuName:"Billing",route:"billing",icon:"fa-solid fa-money-bill-transfer"},{menuName:"Profile Settings",route:"profile-settings",icon:"fa-solid fa-gear"}]}ngOnInit(){window.scrollTo(0,0);let a=this.NormalAuth.authInfo();a.id&&this.UserinfoStateService.getProfileInfo(a.id,a.userType)}}return o.\u0275fac=function(a){return new(a||o)(n.Y36(r.e),n.Y36(m.Z))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-doctor"]],decls:5,vars:1,consts:[[1,"flex","justify-between","w-full","-z-10"],[1,"w-[20%]","min-w-[250px]",3,"menuList"],[1,"doctor-dashboard_midcontent","w-[80%]","h-full","bg-[#F9F9FF]"]],template:function(a,e){1&a&&(n.TgZ(0,"div",0),n._UZ(1,"app-dashboard-menu",1),n.TgZ(2,"div",2),n._UZ(3,"app-dashboard-header")(4,"router-outlet"),n.qZA()()),2&a&&(n.xp6(1),n.Q6J("menuList",e.menuList))},dependencies:[c.E,p.X,s.lC],styles:[".doctor-dashboard_midcontent[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px;display:none}.doctor-dashboard_midcontent[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d}  .mat-step-text-label{font-size:20px;font-weight:500}  .mdc-tab--active{background:#01204e}  .mat-ink-bar{display:none}  .mat-mdc-tab:not(.mat-mdc-tab-disabled) .mdc-tab-indicator__content--underline, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled)   .mdc-tab-indicator__content--underline[_ngcontent-%COMP%]{border:none}  .mdc-tab-indicator__content--underline{border:none}  .mat-horizontal-stepper-header{height:50px!important}  .mat-typography p{margin:2px 0}  .mat-horizontal-stepper-header-container{background:rgba(1,49,122,.0274509804);padding:5px;border-radius:5px}  .mat-horizontal-content-container{padding:0!important}  .mat-step-text-label{color:#01204e;font-weight:500;font-size:16px}  .mat-step-header:hover:not([aria-disabled]), .mat-step-header[_ngcontent-%COMP%]:hover[aria-disabled=false]{background-color:#30bbed15;border-radius:5px}  .mat-step-header .mat-step-icon{background-color:#30bced;color:#fff}  .mat-step-header[aria-selected=true]{background-color:#30bbed3c!important;border-radius:5px}  .mat-step-header[aria-selected=true] .mat-step-text-label{color:#01204e}  .mat-step-header[aria-selected=true] .mat-step-icon{background-color:#30bced!important}h1[_ngcontent-%COMP%]{text-transform:capitalize}"]}),o})();var u=t(655);const g=[{path:"",component:f,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>Promise.all([t.e(592),t.e(361)]).then(t.bind(t,8361)).then(o=>o.DashboardModule)},{path:"appointments",loadChildren:()=>Promise.all([t.e(144),t.e(33),t.e(65),t.e(287),t.e(920),t.e(857),t.e(129)]).then(t.bind(t,9129)).then(o=>o.AppointmentsModule)},{path:"patients",loadChildren:()=>Promise.all([t.e(592),t.e(257)]).then(t.bind(t,6407)).then(o=>o.MyPatientsModule)},{path:"hospital-schedule",loadChildren:()=>Promise.all([t.e(144),t.e(592),t.e(595)]).then(t.bind(t,2595)).then(o=>o.HospitalScheduleModule)},{path:"billing",loadChildren:()=>t.e(289).then(t.bind(t,5289)).then(o=>o.BillingModule)},{path:"profile-settings",loadChildren:()=>Promise.all([t.e(144),t.e(592),t.e(977)]).then(t.bind(t,9977)).then(o=>o.ProfileSettingsModule)},{path:"build-prescription/:aptId",loadChildren:()=>Promise.all([t.e(144),t.e(65),t.e(161)]).then(t.bind(t,2161)).then(o=>o.BuildPrescriptionModule)}]}];let b=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[i.V,h.ez,u.F,s.Bz.forChild(g)]}),o})()}}]);