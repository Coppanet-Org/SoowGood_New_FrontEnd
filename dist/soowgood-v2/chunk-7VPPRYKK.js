import{a as D}from"./chunk-BC4RU75W.js";import{a as be}from"./chunk-NJK7ZBEB.js";import{a as ue}from"./chunk-K7BE7XRD.js";import{b as fe}from"./chunk-NJZYVABX.js";import{a as he,b as ge,k as we}from"./chunk-Y7H6PHVG.js";import{a as le,b as me,c as de}from"./chunk-XTINLLUJ.js";import{A as j,k as pe,z as ce}from"./chunk-GEVSPATW.js";import{a as V}from"./chunk-7LPMGZKA.js";import{D as ne,E as se,F as ae,b as Y,c as Z,e as H,h as R,i as ee,m as te,n as ie,r as oe,u as re}from"./chunk-N3UDIXRD.js";import{Ha as w,Ma as d,Pa as B,Qa as z,Ra as W,S as v,Sa as E,Vb as K,Wb as I,X as h,Xa as n,Y as x,Ya as s,Za as m,aa as S,ba as P,bb as T,ca as U,cc as y,fb as u,fc as L,hb as C,qa as q,tb as a,ub as $,uc as Q,vb as M,vc as k,wc as X,xc as N,ya as l,za as p,zb as J}from"./chunk-TXQBTV46.js";function ke(t,e){if(t&1&&(n(0,"li",1)(1,"a",2),m(2,"i"),a(3),s()()),t&2){let c=e.$implicit;d("routerLink",c.route),l(2),W(" w-[30px] h-[30px] text-primary flex items-center justify-center drop-shadow-lg 0px 7px 29px 0px] bg-white ",c.icon,""),l(),M(" ",c.menuName," ")}}var ve=(()=>{let e=class e{constructor(){this.menuList=[],this.isActive=!1}ngOnInit(){var o=JSON.parse(localStorage.getItem("auth")||"{}");this.isActive=o.isActive,this.isActive?this.menuList=this.menuItemDetails:this.menuList.push(this.menuItemDetails[5])}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-dashboard-menu-item"]],inputs:{menuItemDetails:"menuItemDetails"},decls:1,vars:1,consts:[["class","overflow-hidden rounded-lg transition-all box-border hover:bg-[#5195fc0e]",3,"routerLink",4,"ngFor","ngForOf"],[1,"overflow-hidden","rounded-lg","transition-all","box-border","hover:bg-[#5195fc0e]",3,"routerLink"],["routerLinkActive","active",1,"text-[16px]","font-Roboto","py-4","text-primary"]],template:function(i,r){i&1&&w(0,ke,4,5,"li",0),i&2&&d("ngForOf",r.menuItemDetails)},dependencies:[K,k,X],styles:[".active[_ngcontent-%COMP%]{background:#5195fc1c;color:#01204e;font-weight:500;border-left:3px solid #30bced;box-sizing:border-box}.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#01204e}"]});let t=e;return t})();function Ee(t,e){t&1&&(n(0,"span",15),a(1,"Online"),s())}function Le(t,e){t&1&&(n(0,"span",16),a(1,"Offline"),s())}function Ne(t,e){if(t&1){let c=T();n(0,"div")(1,"label",10)(2,"input",11),u("ngModelChange",function(i){S(c);let r=C();return P(r.status=i)})("change",function(){S(c);let i=C();return P(i.onChangeStatus())}),s(),m(3,"div",12),w(4,Ee,2,0,"span",13)(5,Le,2,0,"span",14),s()()}if(t&2){let c=C();l(2),B(c.isProfileLoad?"display:none":"display:block"),d("value",c.status)("ngModel",c.status),l(2),d("ngIf",c.status),l(),d("ngIf",!c.status)}}var xe=(()=>{let e=class e{constructor(o,i,r,f,g){this.UserinfoStateService=o,this.AuthService=i,this.DoctorProfileService=r,this.profilePicService=f,this.TosterService=g,this.profilePic="",this.isProfileLoad=!0,this.isProfilePicLoad=!0}ngOnInit(){this.authInfo=this.AuthService.authInfo(),this.authInfo.userType=="doctor"?this.profileTile="Doctor":this.authInfo.userType=="patient"?this.profileTile="Patient":this.profileTile="Agent",this.isProfileLoad=!0,this.UserinfoStateService.getData().subscribe(o=>{this.userInfo=o,this.status=o.isOnline,this.getProfilePic(),this.isProfileLoad=!1})}onChangeStatus(){try{this.DoctorProfileService.updateDoctorsOnlineStatusByIdAndOnlineStatus(this.userInfo.id,this.status).subscribe({next:o=>{this.status=o.isOnline},error:o=>{console.log(o)}})}catch(o){console.log(o)}}getProfilePic(){let o=this.authInfo.userType==="doctor"?"Doctor":this.authInfo.userType==="patient"?"Patient":this.authInfo.userType==="agent"?"Agent":"";if(o==""){console.log("usertype not found");return}this.profilePicService.getProfilePic(o,this.authInfo.id,"ProfilePicture").then(({profilePic:i,picUrl:r})=>{this.profilePic=i,this.url=r+this.profilePic}).catch(i=>{this.TosterService.customToast("Error getting profile picture","error")})}};e.\u0275fac=function(i){return new(i||e)(p(fe),p(V),p(pe),p(be),p(j))},e.\u0275cmp=h({type:e,selectors:[["app-dashboard-profilecard"]],decls:13,vars:5,consts:[[1,"main_right","border-l-[1px]","border-box","-z-10","bg-white"],[1,"box-border"],[1,"card","w-full","bg-white","border-none","border-b-[1px]"],[1,"px-10","pt-10"],["alt","profile",1,"rounded-full","w-[100px]","h-[100px]","object-cover","border-2","border-secondary",3,"src"],[1,"card-body","pb-3","items-center","text-center","rounded-none","border-none"],[1,"py-.5","px-4","bg-sky-300/30","text-primary","font-Roboto","text-[12px]","font-semibold"],[1,"card-title","text-primary"],[1,"text-primary"],[4,"ngIf"],[1,"relative","inline-flex","items-center","mb-5","cursor-pointer"],["type","checkbox","name","status",1,"sr-only","peer",3,"value","ngModel","ngModelChange","change"],[1,"w-9","h-5","bg-gray-200","peer-focus:outline-none","peer-focus:ring-4","peer-focus:ring-secondary","rounded-full","peer","peer-checked:after:translate-x-full","rtl:peer-checked:after:-translate-x-full","peer-checked:after:border-white","after:content-['']","after:absolute","after:top-[2px]","after:start-[2px]","after:bg-white","after:border-gray-300","after:border","after:rounded-full","after:h-4","after:w-4","after:transition-all","peer-checked:bg-green-500"],["class","ms-3 text-sm font-medium text-green-700",4,"ngIf"],["class","ms-3 text-sm font-medium text-gray-900",4,"ngIf"],[1,"ms-3","text-sm","font-medium","text-green-700"],[1,"ms-3","text-sm","font-medium","text-gray-900"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"figure",3),m(4,"img",4),s(),n(5,"div",5)(6,"span",6),a(7),s(),n(8,"h2",7),a(9),s(),n(10,"p",8),a(11),s(),w(12,Ne,6,6,"div",9),s()()()()),i&2&&(l(4),d("src",r.url||"",q),l(3),M(" ",r.profileTile," "),l(2),M(" ",r.userInfo==null?null:r.userInfo.fullName," "),l(2),$(r.userInfo==null?null:r.userInfo.designation),l(),d("ngIf",r.authInfo.userType=="doctor"))},dependencies:[I,Y,R,te]});let t=e;return t})();var ye=(()=>{let e=class e{constructor(){this.menuList=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-dashboard-menu"]],inputs:{menuList:"menuList"},decls:18,vars:2,consts:[[1,"main_menu","bg-white","z-50","box-border","h-full"],[1,"max-w-full","bg-primary","max-h-[70px]","sticky","top-0","z-50","min-h-[60px]","w-","py-3","flex","justify-center"],["ngSrc","/assets/SoowGood-Logo.png","width","200","height","48","alt","logos","priority","",1,"max-w-[200px]","cursor-pointer",3,"routerLink"],[1,"w-full","sticky","top-[70px]","h-[calc(100vh-70px)]","overflow-y-scroll","menu_list","border-r-[1px]"],[1,"w-full","bg-gray-100","main_right","border-box","-z-10"],[1,"box-border","p-2"],[1,"menu","w-full"],["routerLink","/",1,"bg-secondary","w-full","btn-secondary","mb-3"],[1,"fa-solid","fa-arrow-left","mr-2"],[3,"menuItemDetails"],[1,"mt-5","mb-3"],["px","",1,"bg-secondary","py-5","w-full","gap-3","border-white/50","rounded-lg","mt-5","border-[1px]"],[1,"text-[22px]","font-Roboto","drop-shadow-md","text-white","text-center","mb-3"],[1,"text-[24px]","text-white","drop-shadow-lg","text-center","font-semibold"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1),m(2,"img",2),s(),n(3,"div",3)(4,"div",4),m(5,"app-dashboard-profilecard"),s(),n(6,"div",5)(7,"ul",6)(8,"button",7),m(9,"i",8),a(10," Back to Home Page "),s(),m(11,"app-dashboard-menu-item",9)(12,"hr",10),n(13,"div",11)(14,"h1",12),a(15," Hotline "),s(),n(16,"h1",13),a(17," +880 1605-144633 "),s()()()()()()),i&2&&(l(2),d("routerLink","/"),l(9),d("menuItemDetails",r.menuList))},dependencies:[k,L,ve,xe],styles:[".menu[_ngcontent-%COMP%]{overflow:hidden}.menu_list[_ngcontent-%COMP%]::-webkit-scrollbar{width:0px}.menu_list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#30bced;outline:none;border-radius:5px}"]});let t=e;return t})();var Ve=[{path:"*",component:ye}],st=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[y,N.forChild(Ve),se]});let t=e;return t})();function je(t,e){t&1&&m(0,"app-reset-password",0),t&2&&d("mobile","01874303205")}function Oe(t,e){t&1&&m(0,"app-delete-account")}var A=(()=>{let e=class e{constructor(o){this.component=o}};e.\u0275fac=function(i){return new(i||e)(p(me))},e.\u0275cmp=h({type:e,selectors:[["app-dynamic-dialog"]],decls:2,vars:1,consts:[[3,"mobile"]],template:function(i,r){i&1&&w(0,je,1,1,"app-reset-password",0)(1,Oe,1,0),i&2&&E(0,r.component==="change-password"?0:1)}});let t=e;return t})();function ze(t,e){if(t&1){let c=T();n(0,"li")(1,"a",18),u("click",function(){S(c);let i=C();return P(i.signOut())}),m(2,"i",19),a(3,"Logout "),s()()}}function He(t,e){if(t&1){let c=T();n(0,"li",20),u("click",function(){S(c);let i=C();return P(i.onClickModal("change-password"))}),n(1,"a",10),m(2,"i",19),a(3," Change password "),s()(),n(4,"li",9),u("click",function(){S(c);let i=C();return P(i.onClickModal("delete-account"))}),n(5,"a",21),m(6,"i",19),a(7," Delete account "),s()()}}var ct=(()=>{let e=class e{constructor(o,i,r,f){this.NormalAuth=o,this.Router=i,this.dialog=r,this.menuService=f}onClickMobileMenu(o){console.log(o),this.menuService.visible(o)}ngOnInit(){this.menuService.menuVisibility$.subscribe(o=>this.isVisible=o),this.authInfo=this.NormalAuth.authInfo()}signOut(){this.NormalAuth.signOut()}goHome(){this.Router.navigate(["/"])}onClickModal(o){let i=this.dialog.open(A,{maxWidth:600,minWidth:450,data:o})}};e.\u0275fac=function(i){return new(i||e)(p(V),p(Q),p(de),p(ue))},e.\u0275cmp=h({type:e,selectors:[["app-dashboard-header"]],decls:20,vars:2,consts:[[1,"sticky","top-0","z-50","w-full","backdrop-blur-md","bg-primary","h-[70px]","flex","px-10","box-border","justify-between","lg:justify-end","items-center"],["routerLink","/",1,"header-logo","xs:max-w-[170px]","md:max-w-[200px]","lg:hidden"],["appScroll","","src","/assets/SoowGood-Logo.png","alt","logo",1,"w-full","drop-shadow-md","active:scale-95","duration-200","cursor-pointer"],[1,"flex","items-center"],[1,"dropdown","dropdown-end"],["tabindex","0",1,"btn","btn-ghost","btn-circle","avatar","flex"],[1,"w-8","rounded-full"],["ngSrc","/assets/person.png","width","50","height","50"],["tabindex","0",1,"menu","menu-sm","dropdown-content","mt-3","p-4","shadow","bg-white","rounded-box","w-64"],[3,"click"],[1,"font-Roboto","text-primary","text-[16px]","py-2"],[1,"fa-solid","fa-border-none","mr-1"],[4,"ngIf"],["fill","#ffffff","width","24px","height","24px","viewBox","0 0 16 16","xmlns","http://www.w3.org/2000/svg","stroke","#ffffff",1,"lg:hidden",3,"click"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z","fill-rule","evenodd"],[1,"font-Roboto","text-primary","text-[16px]","py-2",3,"click"],[1,"fa-solid","fa-right-from-bracket","mr-1"],[1,"mt-2","border-t-2",3,"click"],[1,"font-Roboto","text-red-500","text-[16px]","py-2"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1),m(2,"img",2),s(),n(3,"div",3)(4,"div",4)(5,"label",5)(6,"div",6),m(7,"img",7),s()(),n(8,"ul",8)(9,"li",9),u("click",function(){return r.goHome()}),n(10,"a",10),m(11,"i",11),a(12," Home Page "),s()(),w(13,ze,4,0,"li",12)(14,He,8,0),s()(),U(),n(15,"svg",13),u("click",function(){return r.onClickMobileMenu(r.isVisible)}),m(16,"g",14)(17,"g",15),n(18,"g",16),m(19,"path",17),s()()()()),i&2&&(l(13),d("ngIf",r.authInfo==null?null:r.authInfo.userType),l(),E(14,(r.authInfo==null?null:r.authInfo.userType)==="patient"?14:-1))},dependencies:[I,L],styles:[".db-header[_ngcontent-%COMP%]{background:#f1f;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.sticky-header[_ngcontent-%COMP%]{box-shadow:#00000040 0 54px 55px,#0000001f 0 -12px 30px,#0000001f 0 4px 6px,#0000002b 0 12px 13px,#00000017 0 -3px 5px}"]});let t=e;return t})();function Ge(t,e){t&1&&(n(0,"mat-error"),a(1," Confirm password is required. "),s())}function Ue(t,e){t&1&&(n(0,"mat-error"),a(1," Password not matched. "),s())}function qe(t,e){t&1&&(n(0,"mat-hint",19),a(1,"hint: Password@123"),s())}var _e=(()=>{let e=class e{constructor(o,i,r,f){this.fb=o,this.UserAccountsService=i,this.ToasterService=r,this.dialogRef=f,this.changePasswordShow=!1,this.resetLoading=!1,this.resetFormSubmitted=!1,this.passwordFieldType="password",this.confirmPasswordFieldType="password",console.log("hello")}ngOnInit(){this.loadForm()}loadForm(){this.resetPasswordForm=this.fb.group({newPassword:["",[H.required,D.isAtLeast6Characters,D.includesSpecialCharacter,D.includesNumber]],confirmPassword:["",H.required]},{validator:D.matchValidator})}resetPassword(){}confirmPassword(){this.resetFormSubmitted=!0,console.log(this.mobile),this.mobile||this.ToasterService.customToast("Mobile no not found. Please contact support team.","error");let o={userId:this.mobile,newPassword:this.resetPasswordForm.get("newPassword")?.value};if(!o.newPassword&&!this.resetPasswordForm.get("confirmPassword")?.value){this.ToasterService.customToast("Please enter your new password","warning");return}console.log(o),this.resetLoading=!0,this.UserAccountsService.resetPasswordByInputDto(o).subscribe({next:i=>{i.success?(this.ToasterService.customToast(String(i.message),"success"),this.resetLoading=!1,this.resetFormSubmitted=!1):(this.ToasterService.customToast(String(i.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1)},error:i=>{this.ToasterService.customToast(String(i.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1}})}passwordVisibility(o){o==="password"?this.passwordFieldType=this.passwordFieldType==="password"?"text":"password":o==="confirmPassword"&&(this.confirmPasswordFieldType=this.confirmPasswordFieldType==="password"?"text":"password")}};e.\u0275fac=function(i){return new(i||e)(p(ne),p(ce),p(j),p(le))},e.\u0275cmp=h({type:e,selectors:[["app-reset-password"]],inputs:{from:"from",mobile:"mobile"},decls:33,vars:11,consts:[[1,"p-10"],[1,"space-y-4","md:space-y-5",3,"formGroup"],[1,"font-Roboto-semibold","font-semibold","text-[24px]"],[1,"my-5"],["for","confirm-password",1,"block","mb-2","text-sm","font-medium","text-gray-800"],[1,"form_input","flex","justify-between"],["formControlName","newPassword","name","password","id","password","placeholder","Password",1,"outline-none","border-none","w-full",3,"type","keydown.enter"],[1,"cursor-pointer",3,"click"],["formControlName","confirmPassword","name","confirmPassword","id","confirmPassword","placeholder","Confirm Password",1,"outline-none","border-none","w-full",3,"type","keydown.enter"],[1,"flex","flex-col"],[4,"ngIf"],["class","text-xs text-red-500 font-normal",4,"ngIf"],[1,"flex","items-start","mt-4"],[1,"flex","items-center","h-5"],["id","newsletter","aria-describedby","newsletter","type","checkbox","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-primary-300"],[1,"ml-3","text-sm"],["for","newsletter",1,"font-light","text-gray-500"],["routerLink","/terms-services",1,"font-medium","text-primary-600","hover:underline",3,"click"],["type","submit",1,"w-full","text-white","bg-secondary","bg-primary-600","hover:bg-primary-700","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"disabled","click"],[1,"text-xs","text-red-500","font-normal"]],template:function(i,r){if(i&1&&(n(0,"div",0)(1,"form",1)(2,"div")(3,"h1",2),a(4," Change your password "),s(),m(5,"hr",3),n(6,"label",4),a(7,"New password"),s(),n(8,"div",5)(9,"input",6),u("keydown.enter",function(g){return g.preventDefault()}),s(),n(10,"button",7),u("click",function(){return r.passwordVisibility("password")}),m(11,"i"),s()()(),n(12,"div")(13,"label",4),a(14,"Confirm password"),s(),n(15,"div",5)(16,"input",8),u("keydown.enter",function(g){return g.preventDefault()}),s(),n(17,"button",7),u("click",function(){return r.passwordVisibility("password")}),m(18,"i"),s()(),n(19,"div",9),w(20,Ge,2,0,"mat-error",10)(21,Ue,2,0,"mat-error",10),s()(),w(22,qe,2,0,"mat-hint",11),n(23,"div",12)(24,"div",13),m(25,"input",14),s(),n(26,"div",15)(27,"label",16),a(28,"I accept the "),n(29,"a",17),u("click",function(){return r.dialogRef.close()}),a(30,"Terms and Conditions"),s()()()(),n(31,"button",18),u("click",function(){return r.confirmPassword()}),a(32," Confirm passwod "),s()()()),i&2){let f,g,F,_;l(),d("formGroup",r.resetPasswordForm),l(8),d("type",r.passwordFieldType),l(2),z(r.passwordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),l(5),d("type",r.passwordFieldType),l(2),z(r.passwordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),l(2),d("ngIf",r.resetPasswordForm.dirty&&((f=r.resetPasswordForm.get("confirmPassword"))==null?null:f.hasError("required"))),l(),d("ngIf",r.resetPasswordForm.dirty&&((g=r.resetPasswordForm.get("confirmPassword"))==null?null:g.valid)&&((g=r.resetPasswordForm.get("confirmPassword"))==null?null:g.dirty)&&((g=r.resetPasswordForm.get("confirmPassword"))==null?null:g.errors)),l(),d("ngIf",((F=r.resetPasswordForm.get("newPassword"))==null?null:F.invalid)||((F=r.resetPasswordForm.get("newPassword"))==null?null:F.value)==="0"),l(9),d("disabled",((_=r.resetPasswordForm.get("newPassword"))==null?null:_.invalid)&&!((_=r.resetPasswordForm.get("newPassword"))!=null&&_.dirty)||((_=r.resetPasswordForm.get("confirmPassword"))==null?null:_.invalid)&&!((_=r.resetPasswordForm.get("confirmPassword"))!=null&&_.dirty))}},dependencies:[I,ie,Z,R,ee,oe,re,k,ge,he]});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[y,ae,N.forChild([]),we]});let t=e;return t})();var Se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-delete-account"]],decls:4,vars:0,consts:[[1,"p-10"],[1,"font-Roboto-semibold","text-[24px]","pb-5","border-b-[1px]"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"h1",1),a(2," Delete account "),s(),a(3,` This feature will be comming soon!
`),s())}});let t=e;return t})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[y]});let t=e;return t})();var Ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[y,Ce,Pe]});let t=e;return t})();J(A,[_e,Se],[]);var At=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=v({imports:[y,Ie]});let t=e;return t})();export{ye as a,ct as b,st as c,At as d};
