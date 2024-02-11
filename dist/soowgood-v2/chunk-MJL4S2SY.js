import{a as ae}from"./chunk-BSWVXCA6.js";import{d as Q}from"./chunk-PUKYV4E7.js";import{a as se}from"./chunk-7NGZH4SF.js";import{a as ie,c as re,j as oe,k as ne}from"./chunk-6KAU5MPM.js";import"./chunk-4DRUEFLH.js";import{c as Z,y as ee,z as te}from"./chunk-VFYQ4BPW.js";import{a as X}from"./chunk-7LPMGZKA.js";import{A as Y,C as z,D as J,E as K,c as R,e as w,h as G,i as B,n as O,r as H,u as W,y as $}from"./chunk-FSNV7SJ3.js";import{Bb as M,Ha as v,L,Ma as d,Qa as P,S as C,Ub as j,Wb as k,X as T,Xa as i,Y as N,Ya as o,Za as f,ca as I,cc as D,fb as _,hb as y,j as F,tb as m,uc as U,vb as x,vc as V,xc as q,y as S,ya as l,za as c}from"./chunk-TXQBTV46.js";import"./chunk-5G567QLT.js";function de(e,r){e&1&&(i(0,"mat-error"),m(1," Password is required. "),o())}function pe(e,r){e&1&&(i(0,"mat-error"),m(1," Password must start with an uppercase letter. "),o())}function ue(e,r){e&1&&(i(0,"mat-error"),m(1," Password must be at least 6 characters long. "),o())}function ce(e,r){e&1&&(i(0,"mat-error"),m(1," Password must include a special character. "),o())}function fe(e,r){e&1&&(i(0,"mat-error"),m(1," Password must include a number. "),o())}function ge(e,r){if(e&1&&(i(0,"mat-error"),m(1),o()),e&2){let b=y(),s;l(),x(" ",(s=b.loginForm.get("password"))==null?null:s.getError("customError")," ")}}function he(e,r){if(e&1&&(i(0,"div",28),f(1,"i",29),m(2),o()),e&2){let b=y();l(2),x(" ",b.errorMessage," ")}}function ve(e,r){e&1&&(i(0,"div",30)(1,"span"),m(2,"Login"),o(),f(3,"i",31),o())}function we(e,r){e&1&&f(0,"span",32)}var be=e=>({"border-red-500":e}),le=(()=>{let r=class r{constructor(s,p,t,u,a,n,g,h){this.ToasterService=s,this.UserAuthService=p,this.appAuthService=t,this.oAuthService=u,this.AgentProfileService=a,this.NormalAuth=n,this._router=g,this.fb=h,this.formSubmitted=!1,this.defaultAuth={mobileNo:"",password:""},this.subs=new se,this.passwordFieldType="password",this.confirmPasswordFieldType="password"}ngOnInit(){this.loadForm()}loadForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,w.required],password:[this.defaultAuth.password,w.compose([w.required])]})}onSubmit(){if(this.formSubmitted=!0,this.loginForm.invalid){this.ToasterService.customToast("Please filled all required field","warning");return}this.isLoading=!0;let s,p=this.loginForm.value.mobileNo,t=this.loginForm.value.password;this.oAuthService.oidc=!1;let u={userName:this.loginForm.value.mobileNo,email:"",password:this.loginForm.value.password,rememberMe:!1};try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(p,t).then(a=>{this.formSubmitted=!1,a&&(a?.info?.role!=="Doctor"||a?.info?.role!=="Patient")&&this.UserAuthService.loginByUserDto(u).pipe(S(n=>this.handleLoginError(n)),L(n=>(s=n,n.success?this.AgentProfileService.getByUserName(n.userName||""):(this.hasError=!0,this.ToasterService.customToast(n.message||" ","error"),F(n.message||"Login failed")))),S(n=>this.handleProfileError(n))).subscribe(n=>{console.log(n);let g={fullName:n.fullName,userId:n.userId,id:n.id,userType:s.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(g);let h=n.isActive?s.roleName.toString().toLowerCase():(s.roleName.toString()+"/profile-settings").toLowerCase();this._router.navigate([h],{state:{data:n}}).then(()=>this.ToasterService.customToast(s.message||" ","success"))}),(a?.info?.role==="Doctor"||a?.info?.role==="Patient")&&(this.errorMessage=`You ara a ${a?.info?.role}. Please login from ${a?.info?.role} portal.`)}).catch(a=>{this.isLoading=!1,this.errorMessage=a.error?.error_description})}catch(a){console.log(a),this.hasError=!0,a.message==="'tokenEndpoint' should not be null"&&this.ToasterService.customToast(a.message||" ","success")}}handleLoginError(s){this.isLoading=!1}handleProfileError(s){this.isLoading=!1}passwordVisibility(s){s==="password"?this.passwordFieldType=this.passwordFieldType==="password"?"text":"password":s==="confirmPassword"&&(this.confirmPasswordFieldType=this.confirmPasswordFieldType==="password"?"text":"password")}ngOnDestroy(){this.subs.unsubscribe()}};r.\u0275fac=function(p){return new(p||r)(c(te),c(ee),c(ae),c(Q),c(Z),c(X),c(U),c(z))},r.\u0275cmp=T({type:r,selectors:[["app-agent-login"]],decls:44,vars:17,consts:[[1,"signup-form"],[1,"signup-form__left"],["width","300","height","300","ngSrc","/assets/agent/auth-bg.avif","alt","auth",1,"w-full","h-full","object-cover"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],[1,"text-4xl","font-bold","font-Roboto"],[1,"text-slate-500","mt-2"],["action","",1,"mt-6",3,"formGroup","submit"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto"],["matInput","","maxlength","11","type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","border-none","outline-none","font-Roboto","h-fit"],["for","Password"],[1,"form_input","flex","justify-between"],["formControlName","password","name","password","id","password","placeholder","Password123@*",1,"w-full","outline-none",3,"type"],[1,"cursor-pointer",3,"click"],[1,"flex","flex-col"],[4,"ngIf"],["class","p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 font-semibold font-Roboto","role","alert",4,"ngIf"],["type","submit",1,"form_btn","disabled:bg-gray-500","disabled:select-none",3,"disabled"],["class","flex items-center",4,"ngIf"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/agent/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],["role","alert",1,"p-4","mb-4","text-sm","text-yellow-800","rounded-lg","bg-yellow-50","font-semibold","font-Roboto"],[1,"fa-solid","fa-circle-exclamation","mr-2"],[1,"flex","items-center"],[1,"fa-solid","ml-2","fa-right-to-bracket"],[1,"loading","loading-dots","loading-md"]],template:function(p,t){if(p&1&&(i(0,"div",0)(1,"div",1),f(2,"img",2),o(),i(3,"div",3)(4,"div",4)(5,"h1",5),m(6,"Agent Login"),o(),i(7,"p",6),m(8,"Hi, Welcome to SoowGood \u{1F44B}"),o(),i(9,"form",7),_("submit",function(){return t.onSubmit()}),i(10,"div",8)(11,"label",9)(12,"p",10),m(13,"Mobile Number"),o(),i(14,"div",11)(15,"span",12),m(16,"+88 \xA0"),o(),f(17,"input",13),o()(),i(18,"label",14)(19,"p",10),m(20,"Password"),o(),i(21,"div",15),f(22,"input",16),i(23,"span",17),_("click",function(){return t.passwordVisibility("password")}),f(24,"i"),o()(),i(25,"div",18),v(26,de,2,0,"mat-error",19)(27,pe,2,0,"mat-error",19)(28,ue,2,0,"mat-error",19)(29,ce,2,0,"mat-error",19)(30,fe,2,0,"mat-error",19)(31,ge,2,1,"mat-error",19),o()(),v(32,he,3,1,"div",20),i(33,"button",21),v(34,ve,4,0,"div",22)(35,we,1,0,"span",23),o(),i(36,"p",24),m(37," Don't have an account? "),i(38,"a",25)(39,"span"),m(40,"Sign up "),o(),i(41,"span"),I(),i(42,"svg",26),f(43,"path",27),o()()()()()()()()()),p&2){let u,a,n,g,h,E,A;l(9),d("formGroup",t.loginForm),l(5),d("ngClass",M(15,be,((u=t.loginForm.get("mobileNo"))==null?null:u.invalid)&&((u=t.loginForm.get("mobileNo"))==null?null:u.touched))),l(8),d("type",t.passwordFieldType),l(2),P(t.passwordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),l(2),d("ngIf",t.formSubmitted&&((a=t.loginForm.get("password"))==null?null:a.hasError("required"))),l(),d("ngIf",t.formSubmitted&&((n=t.loginForm.get("password"))==null?null:n.hasError("startsWithUppercase"))),l(),d("ngIf",t.formSubmitted&&((g=t.loginForm.get("password"))==null?null:g.hasError("isAtLeast6Characters"))),l(),d("ngIf",t.formSubmitted&&((h=t.loginForm.get("password"))==null?null:h.hasError("includesSpecialCharacter"))),l(),d("ngIf",t.formSubmitted&&((E=t.loginForm.get("password"))==null?null:E.hasError("includesNumber"))),l(),d("ngIf",(A=t.loginForm.get("password"))==null?null:A.hasError("customError")),l(),d("ngIf",t.errorMessage),l(),d("disabled",t.isLoading||!t.loginForm.dirty||t.loginForm.invalid),l(),d("ngIf",!t.isLoading),l(),d("ngIf",t.isLoading)}},dependencies:[j,k,V,O,R,G,B,$,Y,H,W,oe,ie,re]});let e=r;return e})();var Se=[{path:"",component:le}],Ge=(()=>{let r=class r{};r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=N({type:r}),r.\u0275inj=C({imports:[D,q.forChild(Se),J,K,ne]});let e=r;return e})();export{Ge as AgentLoginModule};
