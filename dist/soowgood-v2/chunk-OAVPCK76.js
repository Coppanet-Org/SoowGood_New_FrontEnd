import{a as ue}from"./chunk-BSWVXCA6.js";import{d as ee}from"./chunk-PUKYV4E7.js";import{a as de}from"./chunk-7NGZH4SF.js";import{a as se,c as ne,h as ae,j as le,k as me}from"./chunk-6KAU5MPM.js";import"./chunk-4DRUEFLH.js";import{k as ie,s as re,y as F,z as oe}from"./chunk-HL5HGHA3.js";import{a as te}from"./chunk-7LPMGZKA.js";import{A as Q,C as X,D as Z,E as R,c as z,e as x,h as H,i as W,n as Y,r as $,u as J,y as K}from"./chunk-FSNV7SJ3.js";import{Bb as E,Ha as S,Ma as u,Qa as k,S as P,Ub as U,Wb as O,X as M,Xa as i,Y as A,Ya as o,Za as f,ca as j,cc as q,fb as N,fc as V,hb as _,tb as l,uc as B,vb as y,vc as G,xc as D,ya as a,za as c}from"./chunk-TXQBTV46.js";import"./chunk-5G567QLT.js";function he(e,s){e&1&&(i(0,"mat-error"),l(1," You must enter a valid mobile number. "),o())}function ge(e,s){e&1&&(i(0,"mat-error"),l(1," Mobile number should be valid. "),o())}function ve(e,s){if(e&1&&(i(0,"mat-error"),l(1),o()),e&2){let v=_(),m;a(),y(" ",(m=v.loginForm.get("mobileNo"))==null?null:m.getError("customError")," ")}}function be(e,s){e&1&&(i(0,"mat-error"),l(1," Password is required. "),o())}function we(e,s){e&1&&(i(0,"mat-error"),l(1," Password must start with an uppercase letter. "),o())}function Se(e,s){e&1&&(i(0,"mat-error"),l(1," Password must be at least 6 characters long. "),o())}function _e(e,s){e&1&&(i(0,"mat-error"),l(1," Password must include a special character. "),o())}function ye(e,s){e&1&&(i(0,"mat-error"),l(1," Password must include a number. "),o())}function xe(e,s){if(e&1&&(i(0,"mat-error"),l(1),o()),e&2){let v=_(),m;a(),y(" ",(m=v.loginForm.get("password"))==null?null:m.getError("customError")," ")}}function Ne(e,s){if(e&1&&(i(0,"div",30),f(1,"i",31),l(2),o()),e&2){let v=_();a(2),y(" ",v.errorMessage," ")}}function Ee(e,s){e&1&&(i(0,"div",32)(1,"span"),l(2,"Login"),o(),f(3,"i",33),o())}function Fe(e,s){e&1&&f(0,"span",34)}var pe=e=>({"border-red-500":e}),ce=(()=>{let s=class s{constructor(m,p,t,d,b,w,n,r,h,g){this.authService=m,this.appAuthService=p,this.oAuthService=t,this.doctorProfileService=d,this.PatientProfileService=b,this.fb=w,this._router=n,this.ToasterService=r,this.NormalAuth=h,this.UserAccountsService=g,this.defaultAuth={mobileNo:"",password:""},this.formSubmitted=!1,this.errorMessage="",this.loginDto={},this.hasError=!1,this.subs=new de,this.isLoading=!1,this.passwordFieldType="password",this.confirmPasswordFieldType="password",this.changePasswordShow=!1,this.resetModalShow=!1,this.resetLoading=!1,this.resetFormSubmitted=!1,this.resetPasswordFieldType="password",this.resetConfPasswordFieldType="password"}ngOnInit(){this.initForm()}get formControl(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,[x.required,x.pattern(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)]],password:[this.defaultAuth.password,x.required]})}passwordVisibility(m){m==="password"?this.passwordFieldType=this.passwordFieldType==="password"?"text":"password":m==="confirmPassword"&&(this.confirmPasswordFieldType=this.confirmPasswordFieldType==="password"?"text":"password")}onSubmit(){if(this.formSubmitted=!0,!this.loginForm.valid&&!this.loginForm.touched){this.ToasterService.customToast("Please fill in all required fields","warning"),this.isLoading=!1;return}else{if(this.loginForm.invalid){this.isLoading=!1;return}this.formSubmitted=!1,this.isLoading=!0;let m="";this.errorMessage="",this.hasError=!1;let p=this.formControl.mobileNo.value,t=this.formControl.password.value;this.oAuthService.oidc=!1,this.loginDto.userName=p,this.loginDto.email="",this.loginDto.password=t,this.loginDto.rememberMe=!1;try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(p,t).then(d=>{if(console.log(d),d&&d?.info?.role!=="Agent"){let w=this.appAuthService.createUserModel(d);var b=p.split("@")[0];this.authService.loginByUserDto(this.loginDto).subscribe(n=>{if(this.loginResponse=n,this.loginResponse.message.includes("User Name Or Password is not correct !")){this.ToasterService.customToast(String(this.loginResponse.message),"warning"),this.isLoading=!1;return}n.success&&n.roleName[0]=="Doctor"?(this.isLoading=!1,this.subs.sink=this.doctorProfileService.getByUserName(n.userName?n.userName:"").subscribe(r=>{let h={identityNumber:r.identityNumber,fullName:r.fullName,bmdcRegNo:r.bmdcRegNo,isActive:r.isActive,userId:r.userId,id:r.id,specialityId:r.specialityId,profileStep:r.profileStep,createFrom:r.createFrom,userType:n.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(h),r.profileStep==1||r.profileStep==2?m="/signup":m=r.isActive?n.roleName.toString()+"/dashboard":n.roleName.toString()+"/profile-settings/basic-info",this._router.navigate([m.toLowerCase()],{state:{data:r}}).then(()=>{this.ToasterService.customToast(n.message?n.message:" ","success")})},r=>{this.handleProfileError(r)})):n.success&&n.roleName[0]=="Patient"?(this.isLoading=!1,this.subs.sink=this.PatientProfileService.getByUserName(n.userName?n.userName:"").subscribe(r=>{let h={fullName:r.fullName,userId:r.userId,id:r.id,userType:n.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(h);let g=n.roleName.toString()+"/dashboard";this._router.navigate([g.toLowerCase()],{state:{data:r}}).then(()=>{this.ToasterService.customToast(n.message?n.message:" ","success")})},r=>{this.handleProfileError(r)})):(this.hasError=!0,this.ToasterService.customToast(n.message?n.message:" ","error"),this.isLoading=!1)})}d?.info.role==="Agent"&&(this.hasError=!0,this.isLoading=!1,this.errorMessage="You are a Agent!. Please login from Agent portal.")}).catch(d=>{this.hasError=!0,this.appAuthService.isLoadingSubject.next(!1),this.errorMessage=d.error.error_description||d.error.error,this.isLoading=!1})}catch(d){this.hasError=!0,d.message==="'tokenEndpoint' should not be null"&&(this.errorMessage="Identity server is not running")}}}handleProfileError(m){this.errorMessage="",m.error.error.message==="There is no entity DoctorProfile with id = !"?this.errorMessage="User not found":this.ToasterService.customToast(String(m.error.error.message),"error")}ngOnDestroy(){this.subs.unsubscribe()}};s.\u0275fac=function(p){return new(p||s)(c(F),c(ue),c(ee),c(ie),c(re),c(X),c(B),c(oe),c(te),c(F))},s.\u0275cmp=M({type:s,selectors:[["app-login"]],decls:52,vars:23,consts:[[1,"signup-form"],[1,"signup-form__left"],["ngSrc","/assets/auth/login-auth.webp","width","400","height","400","alt","auth"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","relative","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],["width","70","height","70","ngSrc","/assets/auth/ms-icon-310x310.png","alt","icon",1,"w-[100px]","rounded-full","border-2","border-white","h-[100px]","absolute","-top-[60px]","left-1/2","-translate-x-1/2"],[1,"text-4xl","font-semibold","font-Roboto","text-primary","mt-8"],[1,"text-slate-500","mt-2"],[1,"mt-6",3,"formGroup","submit"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto","text-[16px]"],["autocomplete","off","matInput","","maxlength","11","type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","bg-white","border-none","outline-none","font-Roboto","h-fit","font-semibold","text-[16px]"],[4,"ngIf"],["for","Password"],[1,"form_input","flex","justify-between",3,"ngClass"],["autocomplete","off","formControlName","password","name","password","id","password","placeholder","Password123@*",1,"outline-none","border-none","w-full","bg-white",3,"type"],[1,"cursor-pointer",3,"click"],[1,"flex","flex-col"],["class","p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 font-semibold font-Roboto","role","alert",4,"ngIf"],["type","submit",1,"form_btn","disabled:bg-gray-500","disabled:select-none",3,"disabled"],["class","flex items-center",4,"ngIf"],["class","loading loading-dots loading-md",4,"ngIf"],["routerLink","/forgot-password",1,"cursor-pointer"],[1,"text-center"],["routerLink","/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],["role","alert",1,"p-4","mb-4","text-sm","text-yellow-800","rounded-lg","bg-yellow-50","font-semibold","font-Roboto"],[1,"fa-solid","fa-circle-exclamation","mr-2"],[1,"flex","items-center"],[1,"fa-solid","ml-2","fa-right-to-bracket"],[1,"loading","loading-dots","loading-md"]],template:function(p,t){if(p&1&&(i(0,"div",0)(1,"div",1),f(2,"img",2),o(),i(3,"div",3)(4,"div",4),f(5,"img",5),i(6,"h1",6),l(7," Login "),o(),i(8,"p",7),l(9,"Hi, Welcome to SoowGood \u{1F44B}"),o(),i(10,"form",8),N("submit",function(){return t.onSubmit()}),i(11,"div",9)(12,"label",10)(13,"p",11),l(14,"Mobile Number"),o(),i(15,"div",12)(16,"span",13),l(17,"+88 \xA0"),o(),f(18,"input",14),o(),S(19,he,2,0,"mat-error",15)(20,ge,2,0,"mat-error",15)(21,ve,2,1,"mat-error",15),o(),i(22,"label",16)(23,"p",11),l(24,"Password"),o(),i(25,"div",17),f(26,"input",18),i(27,"span",19),N("click",function(){return t.passwordVisibility("password")}),f(28,"i"),o()(),i(29,"div",20),S(30,be,2,0,"mat-error",15)(31,we,2,0,"mat-error",15)(32,Se,2,0,"mat-error",15)(33,_e,2,0,"mat-error",15)(34,ye,2,0,"mat-error",15)(35,xe,2,1,"mat-error",15),o()(),S(36,Ne,3,1,"div",21),i(37,"button",22),S(38,Ee,4,0,"div",23)(39,Fe,1,0,"span",24),o(),i(40,"p"),l(41," Forgot your password?"),i(42,"strong",25),l(43," Reset now"),o()(),i(44,"p",26),l(45," Don't have an account? "),i(46,"a",27)(47,"span"),l(48,"Sign up "),o(),i(49,"span"),j(),i(50,"svg",28),f(51,"path",29),o()()()()()()()()()),p&2){let d,b,w,n,r,h,g,C,L,T,I;a(10),u("formGroup",t.loginForm),a(5),u("ngClass",E(19,pe,((d=t.loginForm.get("mobileNo"))==null?null:d.invalid)&&((d=t.loginForm.get("mobileNo"))==null?null:d.touched))),a(4),u("ngIf",t.formSubmitted&&((b=t.loginForm.get("mobileNo"))==null?null:b.hasError("required"))),a(),u("ngIf",t.formSubmitted&&((w=t.loginForm.get("mobileNo"))==null?null:w.hasError("pattern"))),a(),u("ngIf",(n=t.loginForm.get("mobileNo"))==null?null:n.hasError("customError")),a(4),u("ngClass",E(21,pe,((r=t.loginForm.get("password"))==null?null:r.invalid)&&((r=t.loginForm.get("password"))==null?null:r.touched))),a(),u("type",t.passwordFieldType),a(2),k(t.passwordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),a(2),u("ngIf",t.formSubmitted&&((h=t.loginForm.get("password"))==null?null:h.hasError("required"))),a(),u("ngIf",t.formSubmitted&&((g=t.loginForm.get("password"))==null?null:g.hasError("startsWithUppercase"))),a(),u("ngIf",t.formSubmitted&&((C=t.loginForm.get("password"))==null?null:C.hasError("isAtLeast6Characters"))),a(),u("ngIf",t.formSubmitted&&((L=t.loginForm.get("password"))==null?null:L.hasError("includesSpecialCharacter"))),a(),u("ngIf",t.formSubmitted&&((T=t.loginForm.get("password"))==null?null:T.hasError("includesNumber"))),a(),u("ngIf",(I=t.loginForm.get("password"))==null?null:I.hasError("customError")),a(),u("ngIf",t.errorMessage),a(),u("disabled",t.isLoading||!t.loginForm.dirty||t.loginForm.invalid),a(),u("ngIf",!t.isLoading),a(),u("ngIf",t.isLoading)}},dependencies:[U,O,G,Y,z,H,W,K,Q,$,J,se,ne,le,V],styles:[".signup-form__left[_ngcontent-%COMP%]{width:49.3%;height:100%}.signup-form__left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=s;return e})();var Ce=[{path:"",component:ce}],Je=(()=>{let s=class s{};s.\u0275fac=function(p){return new(p||s)},s.\u0275mod=A({type:s}),s.\u0275inj=P({imports:[q,D.forChild(Ce),Z,R,ae,me]});let e=s;return e})();export{Je as LoginModule};