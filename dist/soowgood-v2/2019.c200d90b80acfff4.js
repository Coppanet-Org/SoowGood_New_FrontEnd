"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[2019],{2019:(y,f,r)=>{r.r(f),r.d(f,{AgentLoginModule:()=>B});var c=r(6895),n=r(4006),d=r(262),l=r(3900),g=r(2843),w=r(8745),e=r(4650),u=r(2381),A=r(5374),T=r(3661),L=r(210),U=r(5654),x=r(629),S=r(2510),Z=r(4144),N=r(9549);function P(o,m){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password is required. "),e.qZA())}function F(o,m){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password must start with an uppercase letter. "),e.qZA())}function C(o,m){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password must be at least 6 characters long. "),e.qZA())}function E(o,m){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password must include a special character. "),e.qZA())}function I(o,m){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password must include a number. "),e.qZA())}function Y(o,m){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const s=e.oxw();let t;e.xp6(1),e.hij(" ",null==(t=s.loginForm.get("password"))?null:t.getError("customError")," ")}}function J(o,m){if(1&o&&(e.TgZ(0,"div",28),e._UZ(1,"i",29),e._uU(2),e.qZA()),2&o){const s=e.oxw();e.xp6(2),e.hij(" ",s.errorMessage," ")}}function q(o,m){1&o&&(e.TgZ(0,"div",30)(1,"span"),e._uU(2,"Login"),e.qZA(),e._UZ(3,"i",31),e.qZA())}function M(o,m){1&o&&e._UZ(0,"span",32)}const O=function(o){return{"border-red-500":o}},D=[{path:"",component:(()=>{class o{constructor(s,t,p,h,a,i,v,b){this.ToasterService=s,this.UserAuthService=t,this.appAuthService=p,this.oAuthService=h,this.AgentProfileService=a,this.NormalAuth=i,this._router=v,this.fb=b,this.formSubmitted=!1,this.defaultAuth={mobileNo:"",password:""},this.subs=new w.Y,this.passwordFieldType="password",this.confirmPasswordFieldType="password"}ngOnInit(){this.loadForm()}loadForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,n.kI.required],password:[this.defaultAuth.password,n.kI.compose([n.kI.required])]})}onSubmit(){if(this.formSubmitted=!0,this.loginForm.invalid)return void this.ToasterService.customToast("Please filled all required field","warning");let s;this.isLoading=!0;const t=this.loginForm.value.mobileNo,p=this.loginForm.value.password;this.oAuthService.oidc=!1;let h={userName:this.loginForm.value.mobileNo,email:"",password:this.loginForm.value.password,rememberMe:!1};try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(t,p).then(a=>{this.formSubmitted=!1,a&&("Doctor"!==a?.info?.role||"Patient"!==a?.info?.role)&&this.UserAuthService.loginByUserDto(h).pipe((0,d.K)(i=>this.handleLoginError(i)),(0,l.w)(i=>(s=i,i.success?this.AgentProfileService.getByUserName(i.userName||""):(this.hasError=!0,this.ToasterService.customToast(i.message||" ","error"),(0,g._)(i.message||"Login failed")))),(0,d.K)(i=>this.handleProfileError(i))).subscribe(i=>{console.log(i);const v={fullName:i.fullName,userId:i.userId,id:i.id,userType:s.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(v);const b=i.isActive?s.roleName.toString().toLowerCase():(s.roleName.toString()+"/profile-settings").toLowerCase();this._router.navigate([b],{state:{data:i}}).then(()=>this.ToasterService.customToast(s.message||" ","success"))}),("Doctor"===a?.info?.role||"Patient"===a?.info?.role)&&(this.errorMessage=`You ara a ${a?.info?.role}. Please login from ${a?.info?.role} portal.`)}).catch(a=>{this.isLoading=!1,this.errorMessage=a.error?.error_description})}catch(a){console.log(a),this.hasError=!0,"'tokenEndpoint' should not be null"===a.message&&this.ToasterService.customToast(a.message||" ","success")}}handleLoginError(s){this.isLoading=!1}handleProfileError(s){this.isLoading=!1}passwordVisibility(s){"password"===s?this.passwordFieldType="password"===this.passwordFieldType?"text":"password":"confirmPassword"===s&&(this.confirmPasswordFieldType="password"===this.confirmPasswordFieldType?"text":"password")}ngOnDestroy(){this.subs.unsubscribe()}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(u.G),e.Y36(A.V),e.Y36(T.K),e.Y36(L.Ct),e.Y36(U.j),e.Y36(x.e),e.Y36(S.F0),e.Y36(n.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-agent-login"]],decls:44,vars:17,consts:[[1,"signup-form"],[1,"signup-form__left"],["src","/assets/agent/auth-bg.avif","alt","auth",1,"w-full","h-full"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],[1,"text-4xl","font-bold","font-Roboto"],[1,"text-slate-500","mt-2"],["action","",1,"mt-6",3,"formGroup","submit"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto","font-semibold"],["matInput","","maxlength","11","type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","border-none","outline-none","font-Roboto","font-semibold","h-fit"],["for","Password"],[1,"form_input","flex","justify-between"],["formControlName","password","name","password","id","password","placeholder","Password123@*",1,"w-full","outline-none",3,"type"],[1,"cursor-pointer",3,"click"],[1,"flex","flex-col"],[4,"ngIf"],["class","p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 font-semibold font-Roboto","role","alert",4,"ngIf"],["type","submit",1,"form_btn","disabled:bg-gray-500","disabled:select-none",3,"disabled"],["class","flex items-center",4,"ngIf"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/agent/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],["role","alert",1,"p-4","mb-4","text-sm","text-yellow-800","rounded-lg","bg-yellow-50","font-semibold","font-Roboto"],[1,"fa-solid","fa-circle-exclamation","mr-2"],[1,"flex","items-center"],[1,"fa-solid","ml-2","fa-right-to-bracket"],[1,"loading","loading-dots","loading-md"]],template:function(s,t){if(1&s&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Agent Login"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Hi, Welcome to SoowGood \u{1f44b}"),e.qZA(),e.TgZ(9,"form",7),e.NdJ("submit",function(){return t.onSubmit()}),e.TgZ(10,"div",8)(11,"label",9)(12,"p",10),e._uU(13,"Mobile Number"),e.qZA(),e.TgZ(14,"div",11)(15,"span",12),e._uU(16,"+88 \xa0"),e.qZA(),e._UZ(17,"input",13),e.qZA()(),e.TgZ(18,"label",14)(19,"p",10),e._uU(20,"Password"),e.qZA(),e.TgZ(21,"div",15),e._UZ(22,"input",16),e.TgZ(23,"span",17),e.NdJ("click",function(){return t.passwordVisibility("password")}),e._UZ(24,"i"),e.qZA()(),e.TgZ(25,"div",18),e.YNc(26,P,2,0,"mat-error",19),e.YNc(27,F,2,0,"mat-error",19),e.YNc(28,C,2,0,"mat-error",19),e.YNc(29,E,2,0,"mat-error",19),e.YNc(30,I,2,0,"mat-error",19),e.YNc(31,Y,2,1,"mat-error",19),e.qZA()(),e.YNc(32,J,3,1,"div",20),e.TgZ(33,"button",21),e.YNc(34,q,4,0,"div",22),e.YNc(35,M,1,0,"span",23),e.qZA(),e.TgZ(36,"p",24),e._uU(37," Don't have an account? "),e.TgZ(38,"a",25)(39,"span"),e._uU(40,"Sign up "),e.qZA(),e.TgZ(41,"span"),e.O4$(),e.TgZ(42,"svg",26),e._UZ(43,"path",27),e.qZA()()()()()()()()()),2&s){let p,h,a,i,v,b,_;e.xp6(9),e.Q6J("formGroup",t.loginForm),e.xp6(5),e.Q6J("ngClass",e.VKq(15,O,(null==(p=t.loginForm.get("mobileNo"))?null:p.invalid)&&(null==(p=t.loginForm.get("mobileNo"))?null:p.touched))),e.xp6(8),e.Q6J("type",t.passwordFieldType),e.xp6(2),e.Tol("password"===t.passwordFieldType?"fa fa-eye-slash":"fa fa-eye"),e.xp6(2),e.Q6J("ngIf",t.formSubmitted&&(null==(h=t.loginForm.get("password"))?null:h.hasError("required"))),e.xp6(1),e.Q6J("ngIf",t.formSubmitted&&(null==(a=t.loginForm.get("password"))?null:a.hasError("startsWithUppercase"))),e.xp6(1),e.Q6J("ngIf",t.formSubmitted&&(null==(i=t.loginForm.get("password"))?null:i.hasError("isAtLeast6Characters"))),e.xp6(1),e.Q6J("ngIf",t.formSubmitted&&(null==(v=t.loginForm.get("password"))?null:v.hasError("includesSpecialCharacter"))),e.xp6(1),e.Q6J("ngIf",t.formSubmitted&&(null==(b=t.loginForm.get("password"))?null:b.hasError("includesNumber"))),e.xp6(1),e.Q6J("ngIf",null==(_=t.loginForm.get("password"))?null:_.hasError("customError")),e.xp6(1),e.Q6J("ngIf",t.errorMessage),e.xp6(1),e.Q6J("disabled",t.isLoading||!t.loginForm.dirty||t.loginForm.invalid),e.xp6(1),e.Q6J("ngIf",!t.isLoading),e.xp6(1),e.Q6J("ngIf",t.isLoading)}},dependencies:[c.mk,c.O5,S.rH,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.nD,n.sg,n.u,Z.Nt,N.TO,N.qo]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,S.Bz.forChild(D),n.u5,n.UX,Z.c]}),o})()},5374:(y,f,r)=>{r.d(f,{V:()=>d});var c=r(4650),n=r(7999);let d=(()=>{class l{constructor(w){this.restService=w,this.apiName="Default",this.delete=(e,u,A)=>this.restService.request({method:"DELETE",url:"/api/app/user-accounts",params:{mobile:e,role:u}},{apiName:this.apiName,...A}),this.isUserExistsByUserName=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/is-user-exists",params:{userName:e}},{apiName:this.apiName,...u}),this.loginByUserDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/login",body:e},{apiName:this.apiName,...u}),this.refreshAccessTokenByUser=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/refresh-access-token",body:e},{apiName:this.apiName,...u}),this.resetPasswordByInputDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/reset-password",body:e},{apiName:this.apiName,...u}),this.resetPassword_AppByInputDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/reset-password_App",body:e},{apiName:this.apiName,...u}),this.signupUserByUserDtoAndPasswordAndRole=(e,u,A,T)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/signup-user",params:{password:u,role:A},body:e},{apiName:this.apiName,...T})}}return l.\u0275fac=function(w){return new(w||l)(c.LFG(n.vgb))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8745:(y,f,r)=>{r.d(f,{Y:()=>n});var n=function(){function d(){this._subs=[]}return d.prototype.add=function(){for(var l=[],g=0;g<arguments.length;g++)l[g]=arguments[g];this._subs=this._subs.concat(l)},Object.defineProperty(d.prototype,"sink",{set:function(l){this._subs.push(l)},enumerable:!0,configurable:!0}),d.prototype.unsubscribe=function(){this._subs.forEach(function(l){return l&&function(d){return"function"==typeof d}(l.unsubscribe)&&l.unsubscribe()}),this._subs=[]},d}()}}]);