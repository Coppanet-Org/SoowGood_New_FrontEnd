"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[9672],{41:(C,f,e)=>{e.d(f,{$:()=>v});var h=e(4650),t=e(629),c=e(2510);let g=(()=>{class d{constructor(l,m){this.authService=l,this.router=m}canActivate(l,m){const P=this.authService.authInfo();if(P){const i=P.userType,y=m.url.split("/")[1];return i===y||(this.router.navigate(["agent"==y?`/${y}/login`:"/login"]),!1)}{const i=m.url.startsWith("/agent")?"/agent/login":"/login";return this.router.navigate([i]),!1}}}return d.\u0275fac=function(l){return new(l||d)(h.LFG(t.e),h.LFG(c.F0))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();const v=(d,s)=>(0,h.f3M)(g).canActivate(d,s)},1112:(C,f,e)=>{e.r(f),e.d(f,{LayoutModule:()=>x});var h=e(6895),t=e(4650),c=e(2510),g=e(629),v=e(427),d=e(4310);function s(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Admin Nav "),t.qZA())}function l(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"div")(4,"div")(5,"ul",6)(6,"li",7),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.navigator("soowgood-point"))}),t._uU(7,"Soowgood Point"),t.qZA(),t.TgZ(8,"li",7),t.NdJ("click",function(){t.CHM(n);const p=t.oxw();return t.KtG(p.navigator("village-booth"))}),t._uU(9,"Village Booth"),t.qZA()()()()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("src",n.logoPath,t.LSH)}}let m=(()=>{class o{onWindowScroll(){this.scrolled=window.scrollY>=100,this.logoPath=window.scrollY>=100?"assets/SoowGood-Logo.png":"assets/auth/clr-logo.png"}constructor(n,a,p,D){this.NormalAuth=n,this.MainAuth=a,this.UserinfoStateService=p,this.router=D,this.layout="",this.userType="",this.scrolled=!1,this.logoPath="assets/auth/clr-logo.png"}ngOnInit(){const n=this.NormalAuth.authInfo();this.isAuthLogin=!(!n||!n.id),this.userType=n?n.userType:""}signOut(){this.MainAuth.signOut(),this.isAuthLogin=!1}navigator(n){this.router.navigateByUrl(`/${n}`)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.e),t.Y36(g.e),t.Y36(v.Z),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-header"]],hostBindings:function(n,a){1&n&&t.NdJ("scroll",function(){return a.onWindowScroll()},!1,t.Jf7)},inputs:{layout:"layout"},decls:5,vars:6,consts:[[1,"w-full","transition-all","duration-200","fixed","py-2","z-50","top-0","supports-backdrop-blur:bg-primary/70"],[4,"ngIf"],["class","container-items py-3",4,"ngIf"],[1,"container-items","py-3"],["routerLink","/",1,"header-logo"],["appScroll","","loading","lazy","alt","logo",1,"w-full","drop-shadow-md",3,"src"],[1,"inline-flex","gap-4"],[1,"font-semibold","text-secondary","bg-primary","px-4","py-2","border-secondary","border-[1px]","rounded-md","backdrop-blur-md","cursor-pointer",3,"click"]],template:function(n,a){1&n&&(t._UZ(0,"div"),t.TgZ(1,"div",0)(2,"div"),t.YNc(3,s,2,0,"div",1),t.YNc(4,l,10,1,"div",2),t.qZA()()),2&n&&(t.xp6(1),t.ekj("scrolled",a.scrolled),t.xp6(1),t.Tol("admin"==a.layout||"spreed"==a.layout?"container-full":"container"),t.xp6(1),t.Q6J("ngIf","admin"==a.layout),t.xp6(1),t.Q6J("ngIf","public"==a.layout||"spreed"))},dependencies:[h.O5,c.rH,d.f],styles:[".scrolled[_ngcontent-%COMP%]{background:#01204e;opacity:1;transition:.4s;border-bottom:1px solid #30bced}"]}),o})(),P=(()=>{class o{constructor(){this.layout="admin"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin-layout"]],decls:2,vars:1,consts:[[3,"layout"]],template:function(n,a){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet"),2&n&&t.Q6J("layout",a.layout)},dependencies:[c.lC,m]}),o})(),i=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-doctor-layout"]],decls:1,vars:0,template:function(n,a){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.lC]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer"]],decls:75,vars:0,consts:[[1,"bg-primary"],[1,"container","footer","py-16","text-white"],[1,"max-w-[220px]"],["src","../../../../assets/SoowGood-Logo.png","alt",""],[1,"mt-5"],[1,"fa-solid","fa-phone","mr-2","text-secondary"],[1,"fa-solid","fa-paper-plane","mr-2","text-secondary"],[1,"flex","items-center"],[1,"fa-solid","fa-location-dot","mr-2","text-secondary"],[1,"font-Roboto","font-semibold","mb-4","text-[20px]","text-white"],[1,"link","link-hover","opacity-80"],[1,"container"],["src","assets/payment/sslcommerz-banner.webp","alt","ssl-banner"],[1,"container","mt-5","footer","py-4","border-t","text-white","border-base-300"],[1,"items-center","grid-flow-col"],[1,"text-[18px]","font-Roboto"],[1,"mt-4"],[1,"md:place-self-center","md:justify-self-end"],[1,"grid","grid-flow-col","gap-4"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"fill-current"],["d","M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"],["d","M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"],["d","M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"]],template:function(n,a){1&n&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"p"),t._uU(5,"Consult your patients anywhere anytime."),t.qZA(),t.TgZ(6,"p",4),t._UZ(7,"i",5),t._uU(8,"+8801605-144633"),t.qZA(),t.TgZ(9,"p"),t._UZ(10,"i",6),t._uU(11,"info@soowgood.com"),t.qZA(),t.TgZ(12,"p",7),t._UZ(13,"i",8),t.TgZ(14,"span"),t._uU(15,"Mahtab Center (12th Floor), Room #10, Bijoynagar, Dhaka 1000"),t.qZA()()(),t.TgZ(16,"div")(17,"span",9),t._uU(18,"Company"),t.qZA(),t.TgZ(19,"a",10),t._uU(20,"About us"),t.qZA(),t.TgZ(21,"a",10),t._uU(22,"Support"),t.qZA(),t.TgZ(23,"a",10),t._uU(24,"Soowgood points"),t.qZA(),t.TgZ(25,"a",10),t._uU(26,"Village booths"),t.qZA(),t.TgZ(27,"a",10),t._uU(28,"Press kit"),t.qZA()(),t.TgZ(29,"div")(30,"span",9),t._uU(31,"Platform"),t.qZA(),t.TgZ(32,"a",10),t._uU(33,"Branding"),t.qZA(),t.TgZ(34,"a",10),t._uU(35,"Design"),t.qZA(),t.TgZ(36,"a",10),t._uU(37,"Marketing"),t.qZA(),t.TgZ(38,"a",10),t._uU(39,"Advertisement"),t.qZA()(),t.TgZ(40,"div")(41,"span",9),t._uU(42,"Licence"),t.qZA(),t.TgZ(43,"a",10),t._uU(44,"TL : 039455/2022"),t.qZA(),t.TgZ(45,"a",10),t._uU(46,"BIN : 005606801-0208"),t.qZA(),t.TgZ(47,"a",10),t._uU(48,"Privacy policy"),t.qZA(),t.TgZ(49,"a",10),t._uU(50,"Terms & Condition"),t.qZA()()()(),t.TgZ(51,"footer",0)(52,"div",11),t._UZ(53,"img",12),t.qZA(),t.TgZ(54,"div",13)(55,"div",14)(56,"div")(57,"h1",15),t._uU(58,"Soowgood Ltd"),t.qZA(),t.TgZ(59,"p",16),t._uU(60,"Providing reliable helth solution since 2021"),t.qZA(),t.TgZ(61,"p"),t._uU(62,"Developed by Coppanet\xa9all right reserved\xa02023"),t.qZA()()(),t.TgZ(63,"div",17)(64,"div",18)(65,"a"),t.O4$(),t.TgZ(66,"svg",19),t._UZ(67,"path",20),t.qZA()(),t.kcU(),t.TgZ(68,"a"),t.O4$(),t.TgZ(69,"svg",19),t._UZ(70,"path",21),t.qZA()(),t.kcU(),t.TgZ(71,"a"),t.O4$(),t.TgZ(72,"svg",19),t._UZ(73,"path",22),t.qZA()()()()(),t._uU(74," \\\n"),t.qZA())}}),o})(),u=(()=>{class o{constructor(){this.layout="public"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-public-layout"]],decls:3,vars:1,consts:[[3,"layout"]],template:function(n,a){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet")(2,"app-footer"),2&n&&t.Q6J("layout",a.layout)},dependencies:[c.lC,m,y]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-public-layout-two"]],decls:3,vars:1,consts:[[3,"layout"]],template:function(n,a){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet")(2,"app-footer"),2&n&&t.Q6J("layout","spreed")},dependencies:[c.lC,m,y]}),o})();var S=e(3472),A=e(7999);let U=(()=>{class o{constructor(n){this.restService=n,this.apiName="Default",this.create=(a,p)=>this.restService.request({method:"POST",url:"/api/app/payment-history",body:a},{apiName:this.apiName,...p}),this.get=(a,p)=>this.restService.request({method:"GET",url:`/api/app/payment-history/${a}`},{apiName:this.apiName,...p}),this.getByAppointmentCode=(a,p)=>this.restService.request({method:"GET",responseType:"text",url:"/api/app/payment-history/by-appointment-code",params:{appCode:a}},{apiName:this.apiName,...p}),this.getByTranId=(a,p)=>this.restService.request({method:"GET",url:`/api/app/payment-history/by-tran-id/${a}`},{apiName:this.apiName,...p}),this.getList=a=>this.restService.request({method:"GET",url:"/api/app/payment-history"},{apiName:this.apiName,...a}),this.update=(a,p)=>this.restService.request({method:"PUT",url:"/api/app/payment-history",body:a},{apiName:this.apiName,...p}),this.updateHistory=(a,p)=>this.restService.request({method:"PUT",url:"/api/app/payment-history/history",body:a},{apiName:this.apiName,...p})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(A.vgb))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var M=e(2381);let O=(()=>{class o{constructor(n,a,p){this.sslCommerzService=n,this.paymentHistoryService=a,this.tosterService=p}ngOnInit(){this.appCode=JSON.parse(localStorage.getItem("patientAppointmentCode")||""),this.sslCommerzService.updateAppointmentPaymentStatus(this.appCode,1).subscribe(n=>{this.tosterService.customToast("Appointment Confirmed, Show the appoinment list","success")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(S.r),t.Y36(U),t.Y36(M.G))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-payment-success"]],decls:14,vars:0,consts:[[1,"flex","justify-center","h-screen","w-full","items-center"],[1,"lg:w-[60%]","flex","justify-center","flex-col","items-center","relative"],[1,"absolute","text-[120px]","font-extrabold","text-primary/5","-z-10","top-6"],["src","/assets/payment/card-payment.svg","alt","",1,"w-[200px]"],[1,"font-poppins","text-[24px]","font-semibold","text-primary/80","mt-6"],[1,"mt-4"],[1,"mt-7"],["routerLink","/",1,"btn-primary"],["routerLink","/patient/appointments",1,"btn-primary"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"THANK YOU !"),t.qZA(),t._UZ(4,"img",3),t.TgZ(5,"h1",4),t._uU(6,"Your Payment is Successful!"),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"Thank for your payment. An automated payment recept will be sent your email or phone number."),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t._uU(11,"Back to Home"),t.qZA(),t.TgZ(12,"button",8),t._uU(13,"Appointment"),t.qZA()()()())},dependencies:[c.rH],styles:[".alert[_ngcontent-%COMP%]{background:#f8d7da;padding:5px 10px;border-radius:8px}.animation-ctn[_ngcontent-%COMP%]{text-align:center;margin:5em auto}@keyframes _ngcontent-%COMP%_checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@keyframes _ngcontent-%COMP%_checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes _ngcontent-%COMP%_colored-circle{0%{opacity:0}to{opacity:100}}.inlinesvg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_checkmark .3s ease-in-out .9s backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_checkmark-circle .6s ease-in-out backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle#colored[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_colored-circle .6s ease-in-out .7s backwards}"]}),o})();var Z=e(41);const L=[{path:"",component:u,children:[{path:"",loadChildren:()=>Promise.all([e.e(8581),e.e(3692),e.e(8592),e.e(4495)]).then(e.bind(e,4495)).then(o=>o.LandingPageModule)}]},{path:"search",component:T,children:[{path:"",loadChildren:()=>Promise.all([e.e(4144),e.e(3033),e.e(9065),e.e(1287),e.e(7620),e.e(6399),e.e(8592),e.e(7017)]).then(e.bind(e,7017)).then(o=>o.SearchPageModule)},{path:"doctors/:id",loadChildren:()=>Promise.all([e.e(4144),e.e(3033),e.e(3848),e.e(7620),e.e(3)]).then(e.bind(e,1618)).then(o=>o.DoctorProfilePageModule)}]},{path:"admin",component:P,children:[{path:"",loadChildren:()=>e.e(5023).then(e.bind(e,5023)).then(o=>o.AdminModule)}]},{path:"agent",component:i,canActivate:[Z.$],children:[{path:"",loadChildren:()=>Promise.all([e.e(5038),e.e(4175)]).then(e.bind(e,4175)).then(o=>o.AgentModule)}]},{path:"doctor",canActivate:[Z.$],component:i,children:[{path:"",loadChildren:()=>Promise.all([e.e(5038),e.e(8545)]).then(e.bind(e,8545)).then(o=>o.DoctorModule)}]},{path:"patient",canActivate:[Z.$],component:i,children:[{path:"",loadChildren:()=>Promise.all([e.e(5038),e.e(8592),e.e(6281)]).then(e.bind(e,6281)).then(o=>o.PatientModule)}]},{path:"soowgood-point",component:T,children:[{path:"",loadChildren:()=>e.e(6246).then(e.bind(e,6246)).then(o=>o.SoowgoodPointModule)}]},{path:"soowgood-booth",component:T,children:[{path:"",loadChildren:()=>e.e(3862).then(e.bind(e,3862)).then(o=>o.SoowgoodBoothModule)}]},{path:"about-us",component:u,children:[{path:"",loadChildren:()=>e.e(6423).then(e.bind(e,6423)).then(o=>o.AboutUsModule)}]},{path:"contact-us",component:u,children:[{path:"",loadChildren:()=>e.e(3780).then(e.bind(e,3780)).then(o=>o.ContactUsModule)}]},{path:"payment-success",component:O}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,c.Bz.forChild(L)]}),o})()},3472:(C,f,e)=>{e.d(f,{r:()=>c});var h=e(4650),t=e(7999);let c=(()=>{class g{constructor(d){this.restService=d,this.apiName="Default",this.initPaymentHistoryFromMobileByInput=(s,l)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/init-payment-history-from-mobile",body:s},{apiName:this.apiName,...l}),this.initiatePayment=(s,l)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-payment",body:s},{apiName:this.apiName,...l}),this.initiateRefund=s=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-refund"},{apiName:this.apiName,...s}),this.initiateTestPayment=(s,l)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-test-payment",body:s},{apiName:this.apiName,...l}),this.initiateTestRefund=s=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-test-refund"},{apiName:this.apiName,...s}),this.updateApplicantPaymentStatusBySslCommerzResponseDic=(s,l)=>this.restService.request({method:"PUT",url:"/api/app/ssl-commerz/applicant-payment-status",body:s},{apiName:this.apiName,...l}),this.updateAppointmentPaymentStatus=(s,l,m)=>this.restService.request({method:"PUT",responseType:"text",url:"/api/app/ssl-commerz/appointment-payment-status",params:{appCode:s,sts:l}},{apiName:this.apiName,...m}),this.updatePaymentHistoryBySslCommerzResponseDic=(s,l)=>this.restService.request({method:"PUT",url:"/api/app/ssl-commerz/payment-history",body:s},{apiName:this.apiName,...l}),this.validateTestTransaction=(s,l)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/validate-test-transaction",body:s},{apiName:this.apiName,...l}),this.validateTransaction=(s,l)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/validate-transaction",body:s},{apiName:this.apiName,...l})}}return g.\u0275fac=function(d){return new(d||g)(h.LFG(t.vgb))},g.\u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4310:(C,f,e)=>{e.d(f,{f:()=>t});var h=e(4650);let t=(()=>{class c{onClick(){window.scrollTo({top:0,behavior:"smooth"})}}return c.\u0275fac=function(v){return new(v||c)},c.\u0275dir=h.lG2({type:c,selectors:[["","appScroll",""]],hostBindings:function(v,d){1&v&&h.NdJ("click",function(){return d.onClick()})},standalone:!0}),c})()},427:(C,f,e)=>{e.d(f,{Z:()=>l});var h=e(1135),t=e(4650),c=e(7087),g=e(2339),v=e(5654),d=e(6084),s=e(629);let l=(()=>{class m{constructor(i,y,u,T,S){this.LoaderService=i,this.DoctorProfileService=y,this.AgentProfileService=u,this.PatientProfileService=T,this.NormalAuth=S,this.authenticateUserInfo=new h.X({}),this.userPatientInfo=new h.X([])}sendData(i){this.authenticateUserInfo.next(i)}getData(){return this.authenticateUserInfo.asObservable()}sendUserPatientData(i){this.userPatientInfo.next(i)}getUserPatientData(){return this.userPatientInfo.asObservable()}ngOnInit(){let i=this.NormalAuth.authInfo();console.log(i),i.id&&this.getProfileInfo(i.id,i.userType)}getProfileInfo(i,y){i&&(this.LoaderService.sendLoaderState(!0),"doctor"==y&&this.DoctorProfileService.get(i).subscribe(u=>{this.sendData(u),this.LoaderService.sendLoaderState(!1)}),"agent"==y&&this.AgentProfileService.get(i).subscribe(u=>{this.sendData(u),this.LoaderService.sendLoaderState(!1)}),"patient"==y&&this.PatientProfileService.get(i).subscribe(u=>{this.sendData(u),this.LoaderService.sendLoaderState(!1)}))}getUserPatientInfo(i,y){i&&"patient"==y&&this.PatientProfileService.getPatientListByUserProfileId(i).subscribe(u=>this.sendUserPatientData(u)),i&&"agent"==y&&this.PatientProfileService.getPatientListByUserProfileId(i).subscribe(u=>this.sendUserPatientData(u))}}return m.\u0275fac=function(i){return new(i||m)(t.LFG(c.D),t.LFG(g.K),t.LFG(v.j),t.LFG(d.j),t.LFG(s.e))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);