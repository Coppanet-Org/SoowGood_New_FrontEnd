"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[9672],{41:(C,v,o)=>{o.d(v,{$:()=>y});var u=o(4650),t=o(629),d=o(2510);let m=(()=>{class p{constructor(c,h){this.authService=c,this.router=h}canActivate(c,h){const T=this.authService.authInfo();if(T){const r=T.userType,f=h.url.split("/")[1];return r===f||(this.router.navigate(["agent"==f?`/${f}/login`:"/login"]),!1)}{const r=h.url.startsWith("/agent")?"/agent/login":"/login";return this.router.navigate([r]),!1}}}return p.\u0275fac=function(c){return new(c||p)(u.LFG(t.e),u.LFG(d.F0))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();const y=(p,s)=>(0,u.f3M)(m).canActivate(p,s)},1112:(C,v,o)=>{o.r(v),o.d(v,{LayoutModule:()=>b});var u=o(6895),t=o(4650),d=o(2510),m=o(629),y=o(427),p=o(2381),s=o(4310);function c(e,a){1&e&&(t.TgZ(0,"div"),t._uU(1,"Admin Nav"),t.qZA())}function h(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"li",15),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.checkAuthUser(l.userType))}),t.TgZ(1,"a",16),t._UZ(2,"i",17),t._uU(3," Login "),t.qZA()()}}function T(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"li",18),t.NdJ("click",function(){t.CHM(n);const l=t.oxw(2);return t.KtG(l.checkAuthUser(l.userType))}),t.TgZ(1,"a",16),t._UZ(2,"i",19),t._uU(3,"Registration "),t.qZA()()}}function r(e,a){1&e&&(t.TgZ(0,"li",20)(1,"a",16),t._UZ(2,"i",17),t._uU(3," Dashboard "),t.qZA()())}function f(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"div")(4,"div")(5,"ul",6)(6,"li",7),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.navigator("soowgood-point"))}),t._uU(7," Soowgood Point "),t.qZA(),t.TgZ(8,"li",7),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.navigator("village-booth"))}),t._uU(9," Village Booth "),t.qZA(),t.TgZ(10,"li")(11,"div",8)(12,"label",9),t._UZ(13,"i",10),t._uU(14," Agent "),t.qZA(),t.TgZ(15,"ul",11),t.YNc(16,h,4,0,"li",12),t.YNc(17,T,4,0,"li",13),t.YNc(18,r,4,0,"li",14),t.qZA()()()()()()()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.logoPath,t.LSH),t.xp6(14),t.Q6J("ngIf","agent"!==n.userType),t.xp6(1),t.Q6J("ngIf","agent"!==n.userType),t.xp6(1),t.Q6J("ngIf","agent"===n.userType)}}let g=(()=>{class e{onWindowScroll(){this.scrolled=window.scrollY>=100,this.logoPath=window.scrollY>=100?"assets/SoowGood-Logo.png":"assets/auth/clr-logo.png"}constructor(n,i,l,I,E){this.NormalAuth=n,this.MainAuth=i,this.UserinfoStateService=l,this.router=I,this.TosterService=E,this.layout="",this.userType="",this.scrolled=!1,this.logoPath="assets/auth/clr-logo.png"}ngOnInit(){const n=this.NormalAuth.authInfo();this.isAuthLogin=!(!n||!n.id),this.userType=n?n.userType:""}signOut(){this.MainAuth.signOut(),this.isAuthLogin=!1}navigator(n){this.router.navigateByUrl(`/${n}`)}checkAuthUser(n){"doctor"===n&&this.TosterService.customToast("Your are already login as Doctor","warning"),"patient"===n&&this.TosterService.customToast("Your are already login as Patient","warning")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.e),t.Y36(m.e),t.Y36(y.Z),t.Y36(d.F0),t.Y36(p.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],hostBindings:function(n,i){1&n&&t.NdJ("scroll",function(){return i.onWindowScroll()},!1,t.Jf7)},inputs:{layout:"layout"},decls:4,vars:6,consts:[[1,"w-full","transition-all","duration-200","fixed","py-2","z-50","top-0","supports-backdrop-blur:bg-primary/70"],[4,"ngIf"],["class","container-items",4,"ngIf"],[1,"container-items"],["routerLink","/",1,"header-logo"],["appScroll","","loading","lazy","alt","logo",1,"w-full","drop-shadow-md",3,"src"],[1,"inline-flex","gap-4"],[1,"btn-secondary-anim","border-secondary-dark/50","border-[1px]",3,"click"],[1,"dropdown","dropdown-end"],["tabindex","0",1,"btn-secondary","bg-primary","cursor-pointer","border-secondary-dark","flex"],[1,"fa-solid","fa-user","mr-2"],["tabindex","0",1,"menu","menu-sm","dropdown-content","mt-3","p-4","shadow","bg-base-100","rounded-box","w-52"],["routerLink","/agent/login",3,"click",4,"ngIf"],["routerLink","/agent/signup",3,"click",4,"ngIf"],["routerLink","/agent/dashboard",4,"ngIf"],["routerLink","/agent/login",3,"click"],[1,"font-Roboto","text-[16px]","font-semibold","py-2"],[1,"fa-solid","fa-right-to-bracket","mr-1"],["routerLink","/agent/signup",3,"click"],[1,"fa-solid","fa-border-none","mr-1"],["routerLink","/agent/dashboard"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div"),t.YNc(2,c,2,0,"div",1),t.YNc(3,f,19,4,"div",2),t.qZA()()),2&n&&(t.ekj("scrolled",i.scrolled),t.xp6(1),t.Tol("admin"==i.layout||"spreed"==i.layout?"container-full":"container"),t.xp6(1),t.Q6J("ngIf","admin"==i.layout),t.xp6(1),t.Q6J("ngIf","public"==i.layout||"spreed"))},dependencies:[u.O5,d.rH,s.f],styles:[".scrolled[_ngcontent-%COMP%]{background:#01204e;opacity:1;transition:.4s;border-bottom:1px solid #30bced}"]}),e})(),Z=(()=>{class e{constructor(){this.layout="admin"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-layout"]],decls:2,vars:1,consts:[[3,"layout"]],template:function(n,i){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet"),2&n&&t.Q6J("layout",i.layout)},dependencies:[d.lC,g]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-doctor-layout"]],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"router-outlet")},dependencies:[d.lC]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],decls:75,vars:0,consts:[[1,"bg-primary"],[1,"container","footer","py-16","text-white"],[1,"max-w-[220px]"],["src","../../../../assets/SoowGood-Logo.png","alt",""],[1,"mt-5"],[1,"fa-solid","fa-phone","mr-2","text-secondary"],[1,"fa-solid","fa-paper-plane","mr-2","text-secondary"],[1,"flex","items-center"],[1,"fa-solid","fa-location-dot","mr-2","text-secondary"],[1,"font-Roboto","font-semibold","mb-4","text-[20px]","text-white"],["routerLink","/about-us",1,"link","link-hover","opacity-80"],["routerLink","/contact-us",1,"link","link-hover","opacity-80"],[1,"link","link-hover","opacity-80"],[1,"container"],["src","/assets/payment/sslcommerz-banner.webp","alt","ssl-banner"],[1,"container","mt-5","footer","py-4","border-t","text-white","border-base-300"],[1,"items-center","grid-flow-col"],[1,"text-[18px]","font-Roboto"],[1,"mt-4"],[1,"md:place-self-center","md:justify-self-end"],[1,"grid","grid-flow-col","gap-4"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24",1,"fill-current"],["d","M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"],["d","M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"],["d","M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"]],template:function(n,i){1&n&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"p"),t._uU(5,"Consult your patients anywhere anytime."),t.qZA(),t.TgZ(6,"p",4),t._UZ(7,"i",5),t._uU(8,"+8801605-144633"),t.qZA(),t.TgZ(9,"p"),t._UZ(10,"i",6),t._uU(11,"info@soowgood.com"),t.qZA(),t.TgZ(12,"p",7),t._UZ(13,"i",8),t.TgZ(14,"span"),t._uU(15,"Mahtab Center (12th Floor), Room #10, Bijoynagar, Dhaka 1000"),t.qZA()()(),t.TgZ(16,"div")(17,"span",9),t._uU(18,"Company"),t.qZA(),t.TgZ(19,"a",10),t._uU(20,"About us"),t.qZA(),t.TgZ(21,"a",11),t._uU(22,"Support"),t.qZA(),t.TgZ(23,"a",12),t._uU(24,"Soowgood points"),t.qZA(),t.TgZ(25,"a",12),t._uU(26,"Village booths"),t.qZA(),t.TgZ(27,"a",12),t._uU(28,"Press kit"),t.qZA()(),t.TgZ(29,"div")(30,"span",9),t._uU(31,"Platform"),t.qZA(),t.TgZ(32,"a",12),t._uU(33,"Branding"),t.qZA(),t.TgZ(34,"a",12),t._uU(35,"Design"),t.qZA(),t.TgZ(36,"a",12),t._uU(37,"Marketing"),t.qZA(),t.TgZ(38,"a",12),t._uU(39,"Advertisement"),t.qZA()(),t.TgZ(40,"div")(41,"span",9),t._uU(42,"Licence"),t.qZA(),t.TgZ(43,"a",12),t._uU(44,"TL : 039455/2022"),t.qZA(),t.TgZ(45,"a",12),t._uU(46,"BIN : 005606801-0208"),t.qZA(),t.TgZ(47,"a",12),t._uU(48,"Privacy policy"),t.qZA(),t.TgZ(49,"a",12),t._uU(50,"Terms & Condition"),t.qZA()()()(),t.TgZ(51,"footer",0)(52,"div",13),t._UZ(53,"img",14),t.qZA(),t.TgZ(54,"div",15)(55,"div",16)(56,"div")(57,"h1",17),t._uU(58,"Soowgood Ltd"),t.qZA(),t.TgZ(59,"p",18),t._uU(60,"Providing reliable helth solution since 2021"),t.qZA(),t.TgZ(61,"p"),t._uU(62,"Developed by Coppanet\xa9all right reserved\xa02023"),t.qZA()()(),t.TgZ(63,"div",19)(64,"div",20)(65,"a"),t.O4$(),t.TgZ(66,"svg",21),t._UZ(67,"path",22),t.qZA()(),t.kcU(),t.TgZ(68,"a"),t.O4$(),t.TgZ(69,"svg",21),t._UZ(70,"path",23),t.qZA()(),t.kcU(),t.TgZ(71,"a"),t.O4$(),t.TgZ(72,"svg",21),t._UZ(73,"path",24),t.qZA()()()()(),t._uU(74," \\\n"),t.qZA())},dependencies:[d.rH]}),e})(),S=(()=>{class e{constructor(){this.layout="public"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-public-layout"]],decls:3,vars:1,consts:[[3,"layout"]],template:function(n,i){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet")(2,"app-footer"),2&n&&t.Q6J("layout",i.layout)},dependencies:[d.lC,g,L]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-public-layout-two"]],decls:3,vars:1,consts:[[3,"layout"]],template:function(n,i){1&n&&t._UZ(0,"app-header",0)(1,"router-outlet")(2,"app-footer"),2&n&&t.Q6J("layout","spreed")},dependencies:[d.lC,g,L]}),e})();var M=o(3472),x=o(7999);let O=(()=>{class e{constructor(n){this.restService=n,this.apiName="Default",this.create=(i,l)=>this.restService.request({method:"POST",url:"/api/app/payment-history",body:i},{apiName:this.apiName,...l}),this.get=(i,l)=>this.restService.request({method:"GET",url:`/api/app/payment-history/${i}`},{apiName:this.apiName,...l}),this.getByAppointmentCode=(i,l)=>this.restService.request({method:"GET",responseType:"text",url:"/api/app/payment-history/by-appointment-code",params:{appCode:i}},{apiName:this.apiName,...l}),this.getByTranId=(i,l)=>this.restService.request({method:"GET",url:`/api/app/payment-history/by-tran-id/${i}`},{apiName:this.apiName,...l}),this.getList=i=>this.restService.request({method:"GET",url:"/api/app/payment-history"},{apiName:this.apiName,...i}),this.update=(i,l)=>this.restService.request({method:"PUT",url:"/api/app/payment-history",body:i},{apiName:this.apiName,...l}),this.updateHistory=(i,l)=>this.restService.request({method:"PUT",url:"/api/app/payment-history/history",body:i},{apiName:this.apiName,...l})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(x.vgb))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),D=(()=>{class e{constructor(n,i,l){this.sslCommerzService=n,this.paymentHistoryService=i,this.tosterService=l}ngOnInit(){this.appCode=JSON.parse(localStorage.getItem("patientAppointmentCode")||""),this.sslCommerzService.updateAppointmentPaymentStatus(this.appCode,1).subscribe(n=>{this.tosterService.customToast("Appointment Confirmed, Show the appoinment list","success")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(M.r),t.Y36(O),t.Y36(p.G))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment-success"]],decls:14,vars:0,consts:[[1,"flex","justify-center","h-screen","w-full","items-center"],[1,"lg:w-[60%]","flex","justify-center","flex-col","items-center","relative"],[1,"absolute","text-[120px]","font-extrabold","text-primary/5","-z-10","top-6"],["src","/assets/payment/card-payment.svg","alt","",1,"w-[200px]"],[1,"font-poppins","text-[24px]","font-semibold","text-primary/80","mt-6"],[1,"mt-4"],[1,"mt-7"],["routerLink","/",1,"btn-primary"],["routerLink","/patient/appointments",1,"btn-primary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"THANK YOU !"),t.qZA(),t._UZ(4,"img",3),t.TgZ(5,"h1",4),t._uU(6,"Your Payment is Successful!"),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"Thank for your payment. An automated payment recept will be sent your email or phone number."),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t._uU(11,"Back to Home"),t.qZA(),t.TgZ(12,"button",8),t._uU(13,"Appointment"),t.qZA()()()())},dependencies:[d.rH],styles:[".alert[_ngcontent-%COMP%]{background:#f8d7da;padding:5px 10px;border-radius:8px}.animation-ctn[_ngcontent-%COMP%]{text-align:center;margin:5em auto}@keyframes _ngcontent-%COMP%_checkmark{0%{stroke-dashoffset:100px}to{stroke-dashoffset:0px}}@keyframes _ngcontent-%COMP%_checkmark-circle{0%{stroke-dashoffset:480px}to{stroke-dashoffset:960px}}@keyframes _ngcontent-%COMP%_colored-circle{0%{opacity:0}to{opacity:100}}.inlinesvg[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_checkmark .3s ease-in-out .9s backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_checkmark-circle .6s ease-in-out backwards}.icon--order-success[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle#colored[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_colored-circle .6s ease-in-out .7s backwards}"]}),e})();var U=o(41);const N=[{path:"",component:S,children:[{path:"",loadChildren:()=>Promise.all([o.e(8581),o.e(3692),o.e(8592),o.e(4495)]).then(o.bind(o,4495)).then(e=>e.LandingPageModule)}]},{path:"search",component:A,children:[{path:"",loadChildren:()=>Promise.all([o.e(4144),o.e(3033),o.e(9065),o.e(1287),o.e(7620),o.e(6399),o.e(8592),o.e(7017)]).then(o.bind(o,7017)).then(e=>e.SearchPageModule)},{path:"doctors/:id",loadChildren:()=>Promise.all([o.e(4144),o.e(3033),o.e(3848),o.e(7620),o.e(3)]).then(o.bind(o,1618)).then(e=>e.DoctorProfilePageModule)}]},{path:"admin",component:Z,children:[{path:"",loadChildren:()=>o.e(5023).then(o.bind(o,5023)).then(e=>e.AdminModule)}]},{path:"agent",component:P,canActivate:[U.$],children:[{path:"",loadChildren:()=>Promise.all([o.e(5038),o.e(4175)]).then(o.bind(o,4175)).then(e=>e.AgentModule)}]},{path:"doctor",canActivate:[U.$],component:P,children:[{path:"",loadChildren:()=>Promise.all([o.e(5038),o.e(8545)]).then(o.bind(o,8545)).then(e=>e.DoctorModule)}]},{path:"patient",canActivate:[U.$],component:P,children:[{path:"",loadChildren:()=>Promise.all([o.e(5038),o.e(8592),o.e(6281)]).then(o.bind(o,6281)).then(e=>e.PatientModule)}]},{path:"soowgood-point",component:A,children:[{path:"",loadChildren:()=>o.e(6246).then(o.bind(o,6246)).then(e=>e.SoowgoodPointModule)}]},{path:"soowgood-booth",component:A,children:[{path:"",loadChildren:()=>o.e(3862).then(o.bind(o,3862)).then(e=>e.SoowgoodBoothModule)}]},{path:"about-us",component:S,children:[{path:"",loadChildren:()=>o.e(6423).then(o.bind(o,6423)).then(e=>e.AboutUsModule)}]},{path:"contact-us",component:S,children:[{path:"",loadChildren:()=>o.e(3780).then(o.bind(o,3780)).then(e=>e.ContactUsModule)}]},{path:"payment-success",component:D}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,d.Bz.forChild(N)]}),e})()},3472:(C,v,o)=>{o.d(v,{r:()=>d});var u=o(4650),t=o(7999);let d=(()=>{class m{constructor(p){this.restService=p,this.apiName="Default",this.initPaymentHistoryFromMobileByInput=(s,c)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/init-payment-history-from-mobile",body:s},{apiName:this.apiName,...c}),this.initiatePayment=(s,c)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-payment",body:s},{apiName:this.apiName,...c}),this.initiateRefund=s=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-refund"},{apiName:this.apiName,...s}),this.initiateTestPayment=(s,c)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-test-payment",body:s},{apiName:this.apiName,...c}),this.initiateTestRefund=s=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/initiate-test-refund"},{apiName:this.apiName,...s}),this.updateApplicantPaymentStatusBySslCommerzResponseDic=(s,c)=>this.restService.request({method:"PUT",url:"/api/app/ssl-commerz/applicant-payment-status",body:s},{apiName:this.apiName,...c}),this.updateAppointmentPaymentStatus=(s,c,h)=>this.restService.request({method:"PUT",responseType:"text",url:"/api/app/ssl-commerz/appointment-payment-status",params:{appCode:s,sts:c}},{apiName:this.apiName,...h}),this.updatePaymentHistoryBySslCommerzResponseDic=(s,c)=>this.restService.request({method:"PUT",url:"/api/app/ssl-commerz/payment-history",body:s},{apiName:this.apiName,...c}),this.validateTestTransaction=(s,c)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/validate-test-transaction",body:s},{apiName:this.apiName,...c}),this.validateTransaction=(s,c)=>this.restService.request({method:"POST",url:"/api/app/ssl-commerz/validate-transaction",body:s},{apiName:this.apiName,...c})}}return m.\u0275fac=function(p){return new(p||m)(u.LFG(t.vgb))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},4310:(C,v,o)=>{o.d(v,{f:()=>t});var u=o(4650);let t=(()=>{class d{onClick(){window.scrollTo({top:0,behavior:"smooth"})}}return d.\u0275fac=function(y){return new(y||d)},d.\u0275dir=u.lG2({type:d,selectors:[["","appScroll",""]],hostBindings:function(y,p){1&y&&u.NdJ("click",function(){return p.onClick()})},standalone:!0}),d})()},427:(C,v,o)=>{o.d(v,{Z:()=>c});var u=o(1135),t=o(4650),d=o(7087),m=o(2339),y=o(5654),p=o(6084),s=o(629);let c=(()=>{class h{constructor(r,f,g,Z,P){this.LoaderService=r,this.DoctorProfileService=f,this.AgentProfileService=g,this.PatientProfileService=Z,this.NormalAuth=P,this.authenticateUserInfo=new u.X({}),this.userPatientInfo=new u.X([])}sendData(r){this.authenticateUserInfo.next(r)}getData(){return this.authenticateUserInfo.asObservable()}sendUserPatientData(r){this.userPatientInfo.next(r)}getUserPatientData(){return this.userPatientInfo.asObservable()}ngOnInit(){let r=this.NormalAuth.authInfo();console.log(r),r.id&&this.getProfileInfo(r.id,r.userType)}getProfileInfo(r,f){r&&(this.LoaderService.sendLoaderState(!0),"doctor"==f&&this.DoctorProfileService.get(r).subscribe(g=>{this.sendData(g),this.LoaderService.sendLoaderState(!1)}),"agent"==f&&this.AgentProfileService.get(r).subscribe(g=>{this.sendData(g),this.LoaderService.sendLoaderState(!1)}),"patient"==f&&this.PatientProfileService.get(r).subscribe(g=>{this.sendData(g),this.LoaderService.sendLoaderState(!1)}))}getUserPatientInfo(r,f){r&&f?this.PatientProfileService.getPatientListByUserProfileId(r,f).subscribe(g=>this.sendUserPatientData(g)):this.sendUserPatientData(null)}}return h.\u0275fac=function(r){return new(r||h)(t.LFG(d.D),t.LFG(m.K),t.LFG(y.j),t.LFG(p.j),t.LFG(s.e))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);