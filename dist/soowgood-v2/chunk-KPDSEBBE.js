import{a as C,b as x,c as v,d as y}from"./chunk-BNCAHXCF.js";import"./chunk-CJZERUYB.js";import"./chunk-FCHAHHLG.js";import{d as M}from"./chunk-IHVDFC37.js";import{b as g}from"./chunk-UGVBX5RU.js";import"./chunk-DIK5M47G.js";import"./chunk-JN5TIQFO.js";import"./chunk-KZ73FH3X.js";import"./chunk-RCDD4OPH.js";import"./chunk-FFSGEAVH.js";import"./chunk-QYZGMTSF.js";import"./chunk-B6XPZLTG.js";import{a as b}from"./chunk-6E6ZED7T.js";import"./chunk-U25NMAFE.js";import"./chunk-FUUASHDU.js";import{Na as p,S as d,X as s,Y as l,Ya as n,Za as c,_a as r,cc as h,tc as u,xc as f,ya as m,za as i}from"./chunk-PJQ4EZIT.js";import"./chunk-5G567QLT.js";var w=(()=>{let t=class t{constructor(o,a){this.NormalAuth=o,this.UserinfoStateService=a,this.menuList=[{menuName:"Dashboard",route:"dashboard",icon:"fa-brands fa-microsoft"},{menuName:"Appointments",route:"appointments",icon:"fa-solid fa-calendar-check"},{menuName:"Patients",route:"patients",icon:"fa-solid fa-bed-pulse"},{menuName:"Hospital & Schedule",route:"hospital-schedule",icon:"fa-solid fa-calendar-days"},{menuName:"Billing",route:"billing",icon:"fa-solid fa-money-bill-transfer"},{menuName:"Profile Settings",route:"profile-settings",icon:"fa-solid fa-gear"}]}ngOnInit(){window.scrollTo(0,0);let o=this.NormalAuth.authInfo();o.id&&this.UserinfoStateService.getProfileInfo(o.id,o.userType)}};t.\u0275fac=function(a){return new(a||t)(i(b),i(g))},t.\u0275cmp=s({type:t,selectors:[["app-doctor"]],decls:5,vars:1,consts:[[1,"flex","justify-between","w-full","-z-10"],[1,"w-[20%]","min-w-[250px]",3,"menuList"],[1,"doctor-dashboard_midcontent","w-[80%]","bg-[#F9F9FF]"]],template:function(a,S){a&1&&(n(0,"div",0),r(1,"app-dashboard-menu",1),n(2,"div",2),r(3,"app-dashboard-header")(4,"router-outlet"),c()()),a&2&&(m(),p("menuList",S.menuList))},dependencies:[x,C,u],styles:[".doctor-dashboard_midcontent[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px;display:none}.doctor-dashboard_midcontent[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d}  .mat-step-text-label{font-size:20px;font-weight:500}  .mdc-tab--active{background:#01204e}  .mat-ink-bar{display:none}  .mat-mdc-tab:not(.mat-mdc-tab-disabled) .mdc-tab-indicator__content--underline, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled)   .mdc-tab-indicator__content--underline[_ngcontent-%COMP%]{border:none}  .mdc-tab-indicator__content--underline{border:none}  .mat-horizontal-stepper-header{height:50px!important}  .mat-typography p{margin:2px 0}  .mat-horizontal-stepper-header-container{background:#01317a07;padding:5px;border-radius:5px}  .mat-horizontal-content-container{padding:0!important}  .mat-step-text-label{color:#01204e;font-weight:500;font-size:16px}  .mat-step-header:hover:not([aria-disabled]), .mat-step-header[_ngcontent-%COMP%]:hover[aria-disabled=false]{background-color:#30bbed15;border-radius:5px}  .mat-step-header .mat-step-icon{background-color:#30bced;color:#fff}  .mat-step-header[aria-selected=true]{background-color:#30bbed3c!important;border-radius:5px}  .mat-step-header[aria-selected=true] .mat-step-text-label{color:#01204e}  .mat-step-header[aria-selected=true] .mat-step-icon{background-color:#30bced!important}h1[_ngcontent-%COMP%]{text-transform:capitalize}"]});let e=t;return e})();var P=[{path:"",component:w,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>import("./chunk-YGKTFXHS.js").then(e=>e.DashboardModule)},{path:"appointments",loadChildren:()=>import("./chunk-B6WRF75D.js").then(e=>e.AppointmentsModule)},{path:"patients",loadChildren:()=>import("./chunk-24GHZ7TK.js").then(e=>e.MyPatientsModule)},{path:"hospital-schedule",loadChildren:()=>import("./chunk-UOC6P2MW.js").then(e=>e.HospitalScheduleModule)},{path:"billing",loadChildren:()=>import("./chunk-5MIT4GSG.js").then(e=>e.BillingModule)},{path:"profile-settings",loadChildren:()=>import("./chunk-B7TJFBEI.js").then(e=>e.ProfileSettingsModule)},{path:"build-prescription/:aptId",loadChildren:()=>import("./chunk-F2JS4UDW.js").then(e=>e.BuildPrescriptionModule)}]}],B=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=l({type:t}),t.\u0275inj=d({imports:[y,h,v,M,f.forChild(P)]});let e=t;return e})();export{B as DoctorModule};