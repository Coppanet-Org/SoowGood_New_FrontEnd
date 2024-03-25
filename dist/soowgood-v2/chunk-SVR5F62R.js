import{a as _e}from"./chunk-BWR5FXNE.js";import{b as E}from"./chunk-CJZERUYB.js";import{d as ne}from"./chunk-IIKX2XJD.js";import{a as he}from"./chunk-7NGZH4SF.js";import{a as de,b as ue,c as ce,h as pe,j as fe,k as ge}from"./chunk-JN5TIQFO.js";import"./chunk-QYZGMTSF.js";import{k as ae,s as le,y as M,z as me}from"./chunk-B6XPZLTG.js";import{a as se}from"./chunk-6E6ZED7T.js";import"./chunk-U25NMAFE.js";import{A as te,C as re,D as ie,E as oe,c as J,e as S,h as K,i as Q,n as X,r as Z,u as R,y as ee}from"./chunk-FUUASHDU.js";import{Cb as N,Ha as _,Na as d,Ra as L,S as q,Ub as B,Wb as D,X as U,Y as G,Ya as t,Za as r,_a as f,aa as P,ba as C,ca as I,cb as T,cc as H,da as O,fc as Y,gb as w,ib as g,ub as l,uc as W,vc as z,wb as F,xc as $,ya as n,za as h}from"./chunk-PJQ4EZIT.js";import"./chunk-5G567QLT.js";function xe(e,a){e&1&&(t(0,"mat-error"),l(1," You must enter a valid mobile number. "),r())}function Se(e,a){e&1&&(t(0,"mat-error"),l(1," Mobile number should be valid. "),r())}function ye(e,a){if(e&1&&(t(0,"mat-error"),l(1),r()),e&2){let i=g(),o;n(),F(" ",(o=i.loginForm.get("mobileNo"))==null?null:o.getError("customError")," ")}}function Pe(e,a){e&1&&(t(0,"mat-error"),l(1," Password is required. "),r())}function Ce(e,a){e&1&&(t(0,"mat-error"),l(1," Password must start with an uppercase letter. "),r())}function Fe(e,a){e&1&&(t(0,"mat-error"),l(1," Password must be at least 6 characters long. "),r())}function Te(e,a){e&1&&(t(0,"mat-error"),l(1," Password must include a special character. "),r())}function Ee(e,a){e&1&&(t(0,"mat-error"),l(1," Password must include a number. "),r())}function Le(e,a){if(e&1&&(t(0,"mat-error"),l(1),r()),e&2){let i=g(),o;n(),F(" ",(o=i.loginForm.get("password"))==null?null:o.getError("customError")," ")}}function Ie(e,a){if(e&1&&(t(0,"div",30),f(1,"i",31),l(2),r()),e&2){let i=g();n(2),F(" ",i.errorMessage," ")}}function Ne(e,a){e&1&&(t(0,"div",32)(1,"span"),l(2,"Login"),r(),f(3,"i",33),r())}function Me(e,a){e&1&&f(0,"span",34)}function ke(e,a){e&1&&(t(0,"mat-error"),l(1," You must enter a valid mobile number. "),r())}function Ae(e,a){e&1&&(t(0,"mat-error"),l(1," Mobile number should have exactly 11 digits. "),r())}function Ve(e,a){if(e&1&&(t(0,"mat-error"),l(1),r()),e&2){let i=g(3),o;n(),F(" ",(o=i.resetPasswordForm.get("username"))==null?null:o.getError("customError")," ")}}function je(e,a){if(e&1&&(t(0,"div")(1,"label",47),l(2,"Your phone number"),r(),f(3,"input",48),_(4,ke,2,0,"mat-error",15)(5,Ae,2,0,"mat-error",15)(6,Ve,2,1,"mat-error",15),r()),e&2){let i=g(2),o,m,s;n(4),d("ngIf",i.resetFormSubmitted&&((o=i.resetPasswordForm.get("username"))==null?null:o.hasError("required"))),n(),d("ngIf",i.resetFormSubmitted&&((m=i.resetPasswordForm.get("username"))==null?null:m.hasError("pattern"))),n(),d("ngIf",(s=i.resetPasswordForm.get("username"))==null?null:s.hasError("customError"))}}function qe(e,a){e&1&&(t(0,"mat-error"),l(1," Password is required. "),r())}function Ue(e,a){e&1&&(t(0,"mat-error"),l(1," Password must start with an uppercase letter. "),r())}function Ge(e,a){e&1&&(t(0,"mat-error"),l(1," Password must be at least 6 characters long. "),r())}function Oe(e,a){e&1&&(t(0,"mat-error"),l(1," Password must include a special character. "),r())}function Be(e,a){e&1&&(t(0,"mat-error"),l(1," Password must include a number. "),r())}function De(e,a){e&1&&(t(0,"mat-hint",61),l(1,"hint: Password@123"),r())}function He(e,a){e&1&&(t(0,"mat-error"),l(1," Confirm password is required. "),r())}function Ye(e,a){e&1&&(t(0,"mat-error"),l(1," Password not matched. "),r())}function We(e,a){if(e&1){let i=T();t(0,"div")(1,"label",49),l(2,"New Password"),r(),t(3,"div",50)(4,"input",51),w("keydown.enter",function(m){return m.preventDefault()}),r(),t(5,"button",19),w("click",function(){P(i);let m=g(2);return C(m.resetPasswordVisibility("newPassword"))}),f(6,"i"),r()(),t(7,"div",20),_(8,qe,2,0,"mat-error",15)(9,Ue,2,0,"mat-error",15)(10,Ge,2,0,"mat-error",15)(11,Oe,2,0,"mat-error",15)(12,Be,2,0,"mat-error",15),r(),_(13,De,2,0,"mat-hint",52),t(14,"label",53),l(15,"Confirm password"),r(),t(16,"div",50)(17,"input",54),w("keydown.enter",function(m){return m.preventDefault()}),r(),t(18,"button",19),w("click",function(){P(i);let m=g(2);return C(m.resetPasswordVisibility("confirmPassword"))}),f(19,"i"),r()(),t(20,"div",20),_(21,He,2,0,"mat-error",15)(22,Ye,2,0,"mat-error",15),r(),t(23,"div",55)(24,"div",56),f(25,"input",57),r(),t(26,"div",58)(27,"label",59),l(28,"I accept the "),t(29,"a",60),l(30,"Terms and Conditions"),r()()()()()}if(e&2){let i=g(2),o,m,s,p,b,v,c,u;n(4),d("type",i.resetPasswordFieldType),n(2),L(i.resetPasswordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),n(2),d("ngIf",i.resetFormSubmitted&&((o=i.resetPasswordForm.get("newPassword"))==null?null:o.hasError("required"))),n(),d("ngIf",i.resetFormSubmitted&&((m=i.resetPasswordForm.get("newPassword"))==null?null:m.hasError("startsWithUppercase"))),n(),d("ngIf",i.resetFormSubmitted&&((s=i.resetPasswordForm.get("newPassword"))==null?null:s.hasError("isAtLeast6Characters"))),n(),d("ngIf",i.resetFormSubmitted&&((p=i.resetPasswordForm.get("newPassword"))==null?null:p.hasError("includesSpecialCharacter"))),n(),d("ngIf",i.resetFormSubmitted&&((b=i.resetPasswordForm.get("newPassword"))==null?null:b.hasError("includesNumber"))),n(),d("ngIf",((v=i.resetPasswordForm.get("newPassword"))==null?null:v.invalid)||((v=i.resetPasswordForm.get("newPassword"))==null?null:v.value)==="0"),n(4),d("type",i.resetConfPasswordFieldType),n(2),L(i.resetConfPasswordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),n(2),d("ngIf",i.resetFormSubmitted&&((c=i.resetPasswordForm.get("confirmPassword"))==null?null:c.hasError("required"))),n(),d("ngIf",i.resetFormSubmitted&&((u=i.resetPasswordForm.get("confirmPassword"))==null?null:u.valid)&&((u=i.resetPasswordForm.get("confirmPassword"))==null?null:u.dirty)&&((u=i.resetPasswordForm.get("confirmPassword"))==null?null:u.errors))}}function ze(e,a){if(e&1){let i=T();t(0,"button",62),w("click",function(){P(i);let m=g(2);return C(m.resetPassword())}),l(1),r()}if(e&2){let i=g(2);n(),F(" ",i.resetLoading?"Loading...":"Reset password"," ")}}function $e(e,a){if(e&1){let i=T();t(0,"button",62),w("click",function(){P(i);let m=g(2);return C(m.confirmPassword())}),l(1," Confirm passwod "),r()}}function Je(e,a){if(e&1){let i=T();I(),O(),t(0,"div",35,36)(2,"div",37)(3,"section")(4,"div",38)(5,"div",39)(6,"div",40),w("click",function(){P(i);let m=g();return C(m.resetModalShow=!1)}),f(7,"i",41),r(),t(8,"a",42),f(9,"img",43),r(),t(10,"h2",44),l(11," Forgot Password "),r(),t(12,"form",45),_(13,je,7,3,"div",15)(14,We,31,14,"div",15)(15,ze,2,1,"button",46)(16,$e,2,0,"button",46),r()()()()()()}if(e&2){let i=g();n(12),d("formGroup",i.resetPasswordForm),n(),d("ngIf",!i.changePasswordShow),n(),d("ngIf",i.changePasswordShow),n(),d("ngIf",!i.changePasswordShow),n(),d("ngIf",i.changePasswordShow)}}var we=e=>({"border-red-500":e}),ve=(()=>{let a=class a{constructor(o,m,s,p,b,v,c,u,x,y){this.authService=o,this.appAuthService=m,this.oAuthService=s,this.doctorProfileService=p,this.PatientProfileService=b,this.fb=v,this._router=c,this.ToasterService=u,this.NormalAuth=x,this.UserAccountsService=y,this.defaultAuth={mobileNo:"",password:""},this.formSubmitted=!1,this.errorMessage="",this.loginDto={},this.hasError=!1,this.subs=new he,this.isLoading=!1,this.passwordFieldType="password",this.confirmPasswordFieldType="password",this.changePasswordShow=!1,this.resetModalShow=!1,this.resetLoading=!1,this.resetFormSubmitted=!1,this.resetPasswordFieldType="password",this.resetConfPasswordFieldType="password"}ngOnInit(){this.initForm()}get formControl(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,[S.required,S.pattern(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)]],password:[this.defaultAuth.password,S.required]}),this.resetPasswordForm=this.fb.group({username:["",[S.required,S.pattern(/^(?:88)?[0-9]{11}$/)]],newPassword:["",[S.required,E.isAtLeast6Characters,E.includesSpecialCharacter,E.includesNumber]],confirmPassword:["",S.required]},{validator:E.matchValidator})}passwordVisibility(o){o==="password"?this.passwordFieldType=this.passwordFieldType==="password"?"text":"password":o==="confirmPassword"&&(this.confirmPasswordFieldType=this.confirmPasswordFieldType==="password"?"text":"password")}resetPasswordVisibility(o){o==="newPassword"?this.resetPasswordFieldType=this.resetPasswordFieldType==="password"?"text":"password":o==="confirmPassword"&&(this.resetConfPasswordFieldType=this.resetConfPasswordFieldType==="password"?"text":"password")}onSubmit(){if(this.formSubmitted=!0,!this.loginForm.valid&&!this.loginForm.touched){this.ToasterService.customToast("Please fill in all required fields","warning"),this.isLoading=!1;return}else{if(this.loginForm.invalid){this.isLoading=!1;return}this.formSubmitted=!1,this.isLoading=!0;let o="";this.errorMessage="",this.hasError=!1;let m=this.formControl.mobileNo.value,s=this.formControl.password.value;this.oAuthService.oidc=!1,this.loginDto.userName=m,this.loginDto.email="",this.loginDto.password=s,this.loginDto.rememberMe=!1;try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(m,s).then(p=>{if(console.log(p),p&&p?.info?.role!=="Agent"){let v=this.appAuthService.createUserModel(p);var b=m.split("@")[0];this.authService.loginByUserDto(this.loginDto).subscribe(c=>{if(this.loginResponse=c,this.loginResponse.message.includes("User Name Or Password is not correct !")){this.ToasterService.customToast(String(this.loginResponse.message),"warning"),this.isLoading=!1;return}c.success&&c.roleName[0]=="Doctor"?(this.isLoading=!1,this.subs.sink=this.doctorProfileService.getByUserName(c.userName?c.userName:"").subscribe(u=>{let x={identityNumber:u.identityNumber,fullName:u.fullName,bmdcRegNo:u.bmdcRegNo,isActive:u.isActive,userId:u.userId,id:u.id,specialityId:u.specialityId,profileStep:u.profileStep,createFrom:u.createFrom,userType:c.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(x),u.profileStep==1||u.profileStep==2?o="/signup":o=u.isActive?c.roleName.toString()+"/dashboard":c.roleName.toString()+"/profile-settings/basic-info",this._router.navigate([o.toLowerCase()],{state:{data:u}}).then(()=>{this.ToasterService.customToast(c.message?c.message:" ","success")})},u=>{this.handleProfileError(u)})):c.success&&c.roleName[0]=="Patient"?(this.isLoading=!1,this.subs.sink=this.PatientProfileService.getByUserName(c.userName?c.userName:"").subscribe(u=>{let x={fullName:u.fullName,userId:u.userId,id:u.id,userType:c.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(x);let y=c.roleName.toString()+"/dashboard";this._router.navigate([y.toLowerCase()],{state:{data:u}}).then(()=>{this.ToasterService.customToast(c.message?c.message:" ","success")})},u=>{this.handleProfileError(u)})):(this.hasError=!0,this.ToasterService.customToast(c.message?c.message:" ","error"),this.isLoading=!1)})}p?.info.role==="Agent"&&(this.hasError=!0,this.isLoading=!1,this.errorMessage="You are a Agent!. Please login from Agent portal.")}).catch(p=>{this.hasError=!0,this.appAuthService.isLoadingSubject.next(!1),this.errorMessage=p.error.error_description||p.error.error,this.isLoading=!1})}catch(p){this.hasError=!0,p.message==="'tokenEndpoint' should not be null"&&(this.errorMessage="Identity server is not running")}}}handleProfileError(o){this.errorMessage="",o.error.error.message==="There is no entity DoctorProfile with id = !"?this.errorMessage="User not found":this.ToasterService.customToast(String(o.error.error.message),"error")}resetModal(){this.resetModalShow=!this.resetModalShow}resetPassword(){if(this.resetFormSubmitted=!0,this.resetPasswordForm.get("username")?.invalid){this.ToasterService.customToast("Please enter your phone number","warning");return}this.resetLoading=!0;try{this.authService.isUserExistsByUserName(this.resetPasswordForm.get("username")?.value).subscribe({next:o=>{console.log(o),o?(this.resetLoading=!1,this.changePasswordShow=o,this.resetFormSubmitted=!1):(this.ToasterService.customToast("Mobile number not found!","warning"),this.changePasswordShow=o,this.resetLoading=!1,this.resetFormSubmitted=!1)},error:o=>{this.ToasterService.customToast(String(o.message),"error"),this.resetFormSubmitted=!1}})}catch(o){this.ToasterService.customToast(String(o),"error"),this.resetFormSubmitted=!1}}confirmPassword(){this.resetFormSubmitted=!0;let o={userId:this.resetPasswordForm.get("username")?.value,newPassword:this.resetPasswordForm.get("newPassword")?.value};if(!o.newPassword&&!this.resetPasswordForm.get("confirmPassword")?.value){this.ToasterService.customToast("Please enter your new password","warning");return}this.resetLoading=!0,this.UserAccountsService.resetPasswordByInputDto(o).subscribe({next:m=>{m.success?(this.ToasterService.customToast(String(m.message),"success"),this.resetModalShow=!1,this.resetLoading=!1,this.resetFormSubmitted=!1,this.resetPasswordForm.reset()):(this.ToasterService.customToast(String(m.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1)},error:m=>{this.ToasterService.customToast(String(m.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1}})}ngOnDestroy(){this.subs.unsubscribe()}};a.\u0275fac=function(m){return new(m||a)(h(M),h(_e),h(ne),h(ae),h(le),h(re),h(W),h(me),h(se),h(M))},a.\u0275cmp=U({type:a,selectors:[["app-login"]],decls:53,vars:24,consts:[[1,"signup-form"],[1,"signup-form__left"],["ngSrc","/assets/auth/login-auth.webp","width","400","height","400","alt","auth"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","relative","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],["width","70","height","70","ngSrc","/assets/auth/ms-icon-310x310.png","alt","icon",1,"w-[100px]","rounded-full","border-2","border-white","h-[100px]","absolute","-top-[60px]","left-1/2","-translate-x-1/2"],[1,"text-4xl","font-semibold","font-Roboto","text-primary","mt-8"],[1,"text-slate-500","mt-2"],[1,"mt-6",3,"formGroup","submit"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto","text-[16px]"],["autocomplete","off","matInput","","maxlength","11","type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","bg-white","border-none","outline-none","font-Roboto","h-fit","font-semibold","text-[16px]"],[4,"ngIf"],["for","Password"],[1,"form_input","flex","justify-between",3,"ngClass"],["autocomplete","off","formControlName","password","name","password","id","password","placeholder","Password123@*",1,"outline-none","border-none","w-full","bg-white",3,"type"],[1,"cursor-pointer",3,"click"],[1,"flex","flex-col"],["class","p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 font-semibold font-Roboto","role","alert",4,"ngIf"],["type","submit",1,"form_btn","disabled:bg-gray-500","disabled:select-none",3,"disabled"],["class","flex items-center",4,"ngIf"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],["class","absolute top-0 left-0 bg-black/40 border-none h-screen w-full flex justify-center items-center",4,"ngIf"],["role","alert",1,"p-4","mb-4","text-sm","text-yellow-800","rounded-lg","bg-yellow-50","font-semibold","font-Roboto"],[1,"fa-solid","fa-circle-exclamation","mr-2"],[1,"flex","items-center"],[1,"fa-solid","ml-2","fa-right-to-bracket"],[1,"loading","loading-dots","loading-md"],[1,"absolute","top-0","left-0","bg-black/40","border-none","h-screen","w-full","flex","justify-center","items-center"],["reset",""],[1,"w-[450px]","border-none","rounded-xl"],[1,"flex","flex-col","items-center","justify-center","mx-auto","md:h-screen","lg:py-0"],[1,"w-full","relative","p-12","bg-primary","rounded-lg"],[1,"absolute","text-white","right-5","top-5",3,"click"],[1,"fa-solid","fa-rectangle-xmark"],["href","/",1,"flex","justify-center","items-center","mb-3","text-2xl","font-semibold","text-gray-900"],["ngSrc","assets/SoowGood-Logo.png","alt","logo","width","200","height","48",1,"w-[200px]","h-12","mr-2"],[1,"font-Roboto","mb-8","text-[20px]","font-normal","text-gray-200","text-center"],[1,"mt-8","space-y-4","lg:mt-7","md:space-y-5",3,"formGroup"],["type","submit","class","w-full text-white bg-secondary bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",3,"click",4,"ngIf"],["for","number",1,"block","mb-2","text-sm","font-medium","text-white"],["formControlName","username","name","number","id","number","inputmode","numeric","placeholder","018700 00 000","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5"],["for","newPassword",1,"block","mb-2","text-sm","font-medium","text-gray-100"],[1,"form_input","flex","justify-between"],["formControlName","newPassword","name","newPassword","id","newPassword","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"outline-none","border-none","w-full","bg-white",3,"type","keydown.enter"],["class","text-xs text-red-500 font-normal","align","end",4,"ngIf"],["for","confirm-password",1,"block","mb-2","text-sm","font-medium","text-gray-100"],["formControlName","confirmPassword","name","confirm-password","id","confirm-password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"outline-none","border-none","w-full","bg-white",3,"type","keydown.enter"],[1,"flex","items-start","mt-4"],[1,"flex","items-center","h-5"],["id","newsletter","aria-describedby","newsletter","type","checkbox","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-primary-300"],[1,"ml-3","text-sm"],["for","newsletter",1,"font-light","text-gray-500"],["href","#",1,"font-medium","text-primary-600","hover:underline"],["align","end",1,"text-xs","text-red-500","font-normal"],["type","submit",1,"w-full","text-white","bg-secondary","bg-primary-600","hover:bg-primary-700","focus:ring-4","focus:outline-none","focus:ring-primary-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center",3,"click"]],template:function(m,s){if(m&1&&(t(0,"div",0)(1,"div",1),f(2,"img",2),r(),t(3,"div",3)(4,"div",4),f(5,"img",5),t(6,"h1",6),l(7," Login "),r(),t(8,"p",7),l(9,"Hi, Welcome to SoowGood \u{1F44B}"),r(),t(10,"form",8),w("submit",function(){return s.onSubmit()}),t(11,"div",9)(12,"label",10)(13,"p",11),l(14,"Mobile Number"),r(),t(15,"div",12)(16,"span",13),l(17,"+88 \xA0"),r(),f(18,"input",14),r(),_(19,xe,2,0,"mat-error",15)(20,Se,2,0,"mat-error",15)(21,ye,2,1,"mat-error",15),r(),t(22,"label",16)(23,"p",11),l(24,"Password"),r(),t(25,"div",17),f(26,"input",18),t(27,"span",19),w("click",function(){return s.passwordVisibility("password")}),f(28,"i"),r()(),t(29,"div",20),_(30,Pe,2,0,"mat-error",15)(31,Ce,2,0,"mat-error",15)(32,Fe,2,0,"mat-error",15)(33,Te,2,0,"mat-error",15)(34,Ee,2,0,"mat-error",15)(35,Le,2,1,"mat-error",15),r()(),_(36,Ie,3,1,"div",21),t(37,"button",22),_(38,Ne,4,0,"div",23)(39,Me,1,0,"span",24),r(),t(40,"p"),l(41," Forgot your password?"),t(42,"strong",19),w("click",function(){return s.resetModal()}),l(43," Reset now"),r()(),t(44,"p",25),l(45," Don't have an account? "),t(46,"a",26)(47,"span"),l(48,"Sign up "),r(),t(49,"span"),I(),t(50,"svg",27),f(51,"path",28),r()()()()()()()()(),_(52,Je,17,5,"div",29)),m&2){let p,b,v,c,u,x,y,k,A,V,j;n(10),d("formGroup",s.loginForm),n(5),d("ngClass",N(20,we,((p=s.loginForm.get("mobileNo"))==null?null:p.invalid)&&((p=s.loginForm.get("mobileNo"))==null?null:p.touched))),n(4),d("ngIf",s.formSubmitted&&((b=s.loginForm.get("mobileNo"))==null?null:b.hasError("required"))),n(),d("ngIf",s.formSubmitted&&((v=s.loginForm.get("mobileNo"))==null?null:v.hasError("pattern"))),n(),d("ngIf",(c=s.loginForm.get("mobileNo"))==null?null:c.hasError("customError")),n(4),d("ngClass",N(22,we,((u=s.loginForm.get("password"))==null?null:u.invalid)&&((u=s.loginForm.get("password"))==null?null:u.touched))),n(),d("type",s.passwordFieldType),n(2),L(s.passwordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),n(2),d("ngIf",s.formSubmitted&&((x=s.loginForm.get("password"))==null?null:x.hasError("required"))),n(),d("ngIf",s.formSubmitted&&((y=s.loginForm.get("password"))==null?null:y.hasError("startsWithUppercase"))),n(),d("ngIf",s.formSubmitted&&((k=s.loginForm.get("password"))==null?null:k.hasError("isAtLeast6Characters"))),n(),d("ngIf",s.formSubmitted&&((A=s.loginForm.get("password"))==null?null:A.hasError("includesSpecialCharacter"))),n(),d("ngIf",s.formSubmitted&&((V=s.loginForm.get("password"))==null?null:V.hasError("includesNumber"))),n(),d("ngIf",(j=s.loginForm.get("password"))==null?null:j.hasError("customError")),n(),d("ngIf",s.errorMessage),n(),d("disabled",s.isLoading||!s.loginForm.dirty||s.loginForm.invalid),n(),d("ngIf",!s.isLoading),n(),d("ngIf",s.isLoading),n(13),d("ngIf",s.resetModalShow)}},dependencies:[B,D,z,X,J,K,Q,ee,te,Z,R,ue,de,ce,fe,Y],styles:[".signup-form__left[_ngcontent-%COMP%]{width:49.3%;height:100%}.signup-form__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=a;return e})();var Ke=[{path:"",component:ve}],_t=(()=>{let a=class a{};a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=G({type:a}),a.\u0275inj=q({imports:[H,$.forChild(Ke),ie,oe,pe,ge]});let e=a;return e})();export{_t as LoginModule};