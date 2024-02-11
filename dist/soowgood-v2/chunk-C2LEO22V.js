import{a as P,b as V}from"./chunk-GO5UKO7J.js";import{a as O}from"./chunk-7LPMGZKA.js";import{D as k,Z as j,h as A,m as M,v as L,w as T,x as F}from"./chunk-FSNV7SJ3.js";import{Db as S,Eb as D,Ha as c,Ma as p,S as f,Vb as _,Wb as C,X as u,Xa as t,Y as b,Ya as e,Za as x,ac as w,cc as E,fb as v,hb as y,tb as n,vb as m,vc as N,xc as I,ya as d,za as g}from"./chunk-TXQBTV46.js";import"./chunk-5G567QLT.js";function $(a,i){if(a&1&&x(0,"app-dashboard-statisticscard",17),a&2){let l=i.$implicit;p("details",l)}}function B(a,i){if(a&1&&(t(0,"tr",22)(1,"td",23),n(2),e(),t(3,"td",23),n(4),e(),t(5,"td",23),n(6),S(7,"date"),e(),t(8,"td",23),n(9),e(),t(10,"td",23),n(11),e()()),a&2){let l=i.$implicit;d(2),m(" ",l.patientName," "),d(2),m(" ",l.patientMobileNo," "),d(2),m(" ",D(7,5,l.appointmentDate)," "),d(3),m(" ",l.appointmentTime," "),d(2),m(" ",l.consultancyTypeName," ")}}function q(a,i){if(a&1&&(t(0,"div")(1,"table",18)(2,"thead",19)(3,"tr")(4,"th",20),n(5," Patient's Name "),e(),t(6,"th",20),n(7," Mobile No. "),e(),t(8,"th",20),n(9," App. Date "),e(),t(10,"th",20),n(11," App. Time "),e(),t(12,"th",20),n(13," App. Type "),e()()(),t(14,"tbody"),c(15,B,12,7,"tr",21),e()()()),a&2){let l=y();d(15),p("ngForOf",l.appointmentList)}}function z(a,i){a&1&&(t(0,"div",24),n(1," Data is Loading... "),e())}var W=(()=>{let i=class i{constructor(r,o){this.NormalAuth=r,this.DashboardService=o,this.showWarning=!1,this.details=[{title:"Total appointments",data:0},{title:"Total Patient",data:""},{title:"Loyalty Points",data:""},{title:"Total Income",data:0,currency:!0}],this.appointmentList=[],this.aptLoading=!1,this.selectedValue="All"}ngOnInit(){setTimeout(()=>{this.showWarning=!0},1e3);let r=this.NormalAuth.authInfo()?.id;this.doctorId=r,this.getDashboardStatisticData(r),this.getDashboardAppointment(this.selectedValue)}getDashboardStatisticData(r){this.DashboardService.getDashboadDataForDoctor(r).subscribe({next:o=>{this.details[0].data=Number(o.totalAppointment),this.details[1].data=Number(o.totalPatient),this.details[2].data=Number(o.doctorLoyaltypoints),this.details[3].data=Number(o.totalFeeAmount)}})}getDashboardAppointment(r){this.aptLoading=!0,this.DashboardService.getDashboardAppointmentListForDoctor(this.doctorId,r).subscribe({next:o=>{this.appointmentList=o,this.aptLoading=!1},error:o=>{console.log(o),this.aptLoading=!1}})}changeSelection(r){if(r){this.getDashboardAppointment(r.target.value);return}}};i.\u0275fac=function(o){return new(o||i)(g(O),g(j))},i.\u0275cmp=u({type:i,selectors:[["app-dashboard"]],decls:24,vars:5,consts:[[1,"doctor-dashboard_midcontent_container","p-4"],[1,"top-bar","flex","justify-between","gap-6"],[1,"w-full","max-w-[70%]"],[1,"top-box","mt-2","grid","grid-cols-1","md:grid-cols-2","2xl:grid-cols-2","max-w-[100%]","gap-5"],[3,"details",4,"ngFor","ngForOf"],[1,"bottom-box","border-[1px]","mt-5","bg-white","rounded-lg","box-border"],[1,"flex","justify-between","p-4","border-b-[1px]","items-center"],[1,"dashbord-heading-text","h-fit"],[3,"ngModel","value","ngModelChange","change"],["value","All"],["value","Confirmed"],["value","Completed"],["routerLink","../appointments",1,"btn-secondary-light","h-fit"],[4,"ngIf"],["class","w-full h-[300px] flex justify-center items-center",4,"ngIf"],[1,"dashboard_today_appointment","min-w-[38%]","max-w-[38%]","bg-white","border-[1px]","h-[500px]","rounded-lg","p-5","box-border"],[1,"dashbord-heading-text","border-b-[1px]","pb-3"],[3,"details"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","dark:text-gray-400","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3"],["class","bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","hover:bg-gray-50","dark:hover:bg-gray-600"],[1,"px-6","py-4"],[1,"w-full","h-[300px]","flex","justify-center","items-center"]],template:function(o,s){o&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),c(4,$,1,1,"app-dashboard-statisticscard",4),e(),t(5,"div",5)(6,"div",6)(7,"h2",7),n(8," All Appointments "),e(),t(9,"div")(10,"select",8),v("ngModelChange",function(h){return s.selectedValue=h})("change",function(h){return s.changeSelection(h)}),t(11,"option",9),n(12,"All"),e(),t(13,"option",10),n(14,"Confirmed"),e(),t(15,"option",11),n(16,"Completed"),e()()(),t(17,"button",12),n(18,"View all"),e()(),c(19,q,16,1,"div",13)(20,z,2,0,"div",14),e()(),t(21,"div",15)(22,"h2",16),n(23," Recent Notifications "),e()()()()),o&2&&(d(4),p("ngForOf",s.details),d(6),p("ngModel",s.selectedValue)("value",s.selectedValue),d(9),p("ngIf",!s.aptLoading),d(),p("ngIf",s.aptLoading))},dependencies:[P,T,F,L,A,M,_,C,N,w],styles:[".hideWarning[_ngcontent-%COMP%]{transition:.4s;height:0px;opacity:0;transform:translateY(-100px)}.showWarning[_ngcontent-%COMP%]{transition:.4s;opacity:1;transform:translateY(0)}"]});let a=i;return a})();var G=[{path:"",component:W}],ot=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=b({type:i}),i.\u0275inj=f({imports:[V,k,E,I.forChild(G)]});let a=i;return a})();export{ot as DashboardModule};