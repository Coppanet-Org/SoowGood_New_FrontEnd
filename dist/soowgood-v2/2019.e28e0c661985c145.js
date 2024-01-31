"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[2019],{2019:(w,h,t)=>{t.r(h),t.d(h,{AgentLoginModule:()=>E});var d=t(6895),s=t(4006),c=t(262),o=t(3900),p=t(2843),r=t(8745),e=t(4650),u=t(2381),v=t(5374),b=t(3661),N=t(210),C=t(5654),U=t(629),T=t(2510),L=t(4144),Z=t(9549);function x(n,f){1&n&&(e.TgZ(0,"div",25)(1,"span"),e._uU(2,"Login"),e.qZA(),e._UZ(3,"i",26),e.qZA())}function P(n,f){1&n&&e._UZ(0,"span",27)}const F=function(n){return{"border-red-500":n}},I=[{path:"",component:(()=>{class n{constructor(i,l,m,A,g,a,y,S){this.ToasterService=i,this.UserAuthService=l,this.appAuthService=m,this.oAuthService=A,this.AgentProfileService=g,this.NormalAuth=a,this._router=y,this.fb=S,this.defaultAuth={mobileNo:"",password:""},this.subs=new r.Y,this.passwordFieldType="password",this.confirmPasswordFieldType="password"}ngOnInit(){this.loadForm()}loadForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,s.kI.compose([s.kI.required])],password:[this.defaultAuth.password,s.kI.compose([s.kI.required,s.kI.minLength(7),s.kI.maxLength(100)])]})}onSubmit(){if(this.isLoading=!0,!this.loginForm.valid&&!this.loginForm.touched)return void this.ToasterService.customToast("Please filled all required field","warning");let i;const l=this.loginForm.value.mobileNo,m=this.loginForm.value.password;this.oAuthService.oidc=!1;let A={userName:this.loginForm.value.mobileNo,email:"",password:this.loginForm.value.password,rememberMe:!1};try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(l,m).then(g=>{console.log(g),g&&this.UserAuthService.loginByUserDto(A).pipe((0,c.K)(a=>this.handleLoginError(a)),(0,o.w)(a=>(i=a,a.success?this.AgentProfileService.getByUserName(a.userName||""):(this.hasError=!0,this.ToasterService.customToast(a.message||" ","error"),(0,p._)(a.message||"Login failed")))),(0,c.K)(a=>this.handleProfileError(a))).subscribe(a=>{console.log(a);const y={fullName:a.fullName,userId:a.userId,id:a.id,userType:i.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(y);const S=a.isActive?i.roleName.toString().toLowerCase():(i.roleName.toString()+"/profile-settings").toLowerCase();this._router.navigate([S],{state:{data:a}}).then(()=>this.ToasterService.customToast(i.message||" ","success"))})})}catch(g){this.hasError=!0,"'tokenEndpoint' should not be null"===g.message&&this.ToasterService.customToast(g.message||" ","success")}}handleLoginError(i){this.isLoading=!1}handleProfileError(i){this.isLoading=!1}passwordVisibility(i){"password"===i?this.passwordFieldType="password"===this.passwordFieldType?"text":"password":"confirmPassword"===i&&(this.confirmPasswordFieldType="password"===this.confirmPasswordFieldType?"text":"password")}ngOnDestroy(){this.subs.unsubscribe()}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(u.G),e.Y36(v.V),e.Y36(b.K),e.Y36(N.Ct),e.Y36(C.j),e.Y36(U.e),e.Y36(T.F0),e.Y36(s.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-agent-login"]],decls:36,vars:10,consts:[[1,"signup-form"],[1,"signup-form__left"],["src","../../../../assets/auth/Repeat Grid 3.png","alt","auth",1,"w-full","h-full"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],[1,"text-4xl","font-medium"],[1,"text-slate-500","mt-2"],["action","",1,"mt-6",3,"formGroup","submit"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto","font-semibold"],["matInput","","maxlength","11","type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","border-none","outline-none","font-Roboto","font-semibold","h-fit"],["for","Password"],[1,"form_input","flex","justify-between"],["formControlName","password","name","password","id","password","placeholder","Password123@*",1,"w-full","outline-none",3,"type"],[1,"cursor-pointer",3,"click"],["type","submit",1,"form_btn","disabled:bg-gray-500",3,"disabled"],["class","flex items-center",4,"ngIf"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/agent/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],[1,"flex","items-center"],[1,"fa-solid","ml-2","fa-right-to-bracket"],[1,"loading","loading-dots","loading-md"]],template:function(i,l){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),e._uU(6,"Login"),e.qZA(),e.TgZ(7,"p",6),e._uU(8,"Hi, Welcome to SoowGood \u{1f44b}"),e.qZA(),e.TgZ(9,"form",7),e.NdJ("submit",function(){return l.onSubmit()}),e.TgZ(10,"div",8)(11,"label",9)(12,"p",10),e._uU(13,"Mobile Number"),e.qZA(),e.TgZ(14,"div",11)(15,"span",12),e._uU(16,"+88 \xa0"),e.qZA(),e._UZ(17,"input",13),e.qZA()(),e.TgZ(18,"label",14)(19,"p",10),e._uU(20,"Password"),e.qZA(),e.TgZ(21,"div",15),e._UZ(22,"input",16),e.TgZ(23,"span",17),e.NdJ("click",function(){return l.passwordVisibility("password")}),e._UZ(24,"i"),e.qZA()()(),e.TgZ(25,"button",18),e.YNc(26,x,4,0,"div",19),e.YNc(27,P,1,0,"span",20),e.qZA(),e.TgZ(28,"p",21),e._uU(29," Don't have an account? "),e.TgZ(30,"a",22)(31,"span"),e._uU(32,"Sign up "),e.qZA(),e.TgZ(33,"span"),e.O4$(),e.TgZ(34,"svg",23),e._UZ(35,"path",24),e.qZA()()()()()()()()()),2&i){let m;e.xp6(9),e.Q6J("formGroup",l.loginForm),e.xp6(5),e.Q6J("ngClass",e.VKq(8,F,(null==(m=l.loginForm.get("mobileNo"))?null:m.invalid)&&(null==(m=l.loginForm.get("mobileNo"))?null:m.touched))),e.xp6(8),e.Q6J("type",l.passwordFieldType),e.xp6(2),e.Tol("password"===l.passwordFieldType?"fa fa-eye-slash":"fa fa-eye"),e.xp6(1),e.Q6J("disabled",l.isLoading),e.xp6(1),e.Q6J("ngIf",!l.isLoading),e.xp6(1),e.Q6J("ngIf",l.isLoading)}},dependencies:[d.mk,d.O5,T.rH,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.nD,s.sg,s.u,L.Nt,Z.qo]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,T.Bz.forChild(I),s.u5,s.UX,L.c]}),n})()},5374:(w,h,t)=>{t.d(h,{V:()=>c});var d=t(4650),s=t(7999);let c=(()=>{class o{constructor(r){this.restService=r,this.apiName="Default",this.isUserExistsByUserName=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/is-user-exists",params:{userName:e}},{apiName:this.apiName,...u}),this.loginByUserDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/login",body:e},{apiName:this.apiName,...u}),this.refreshAccessTokenByUser=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/refresh-access-token",body:e},{apiName:this.apiName,...u}),this.resetPasswordByInputDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/reset-password",body:e},{apiName:this.apiName,...u}),this.resetPassword_AppByInputDto=(e,u)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/reset-password_App",body:e},{apiName:this.apiName,...u}),this.signupUserByUserDtoAndPasswordAndRole=(e,u,v,b)=>this.restService.request({method:"POST",url:"/api/app/user-accounts/signup-user",params:{password:u,role:v},body:e},{apiName:this.apiName,...b})}}return o.\u0275fac=function(r){return new(r||o)(d.LFG(s.vgb))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},2381:(w,h,t)=>{t.d(h,{G:()=>c});var d=t(4650),s=t(9094);let c=(()=>{class o{constructor(r){this.toasterService=r}customToast(r,e){return this.toasterService[e](r,this.getToastOptions(e))}getToastOptions(r){const e=this.getBackgroundColor(r);return{duration:3e3,style:{padding:"10px 16px",color:this.getTextColor(r),background:e},iconTheme:this.getIconColor(r)}}getBackgroundColor(r){switch(r){case"success":return"rgb(0 171 7 / 100%)";case"error":return"rgb(255 0 0 / 100%) ";case"warning":return"rgb(255 179 68 / 100%)";default:return"#c2e0c6"}}getTextColor(r){switch(r){case"success":case"error":return"#f1f1f1";case"warning":return"#7a5600";default:return"#333"}}getIconColor(r){switch(r){case"success":default:return{primary:"#005539",secondary:"#f1f1f1"};case"error":return{primary:"#f44336",secondary:"#f1f1f1"};case"warning":return{primary:"#483500",secondary:"#f1f1f1"}}}}return o.\u0275fac=function(r){return new(r||o)(d.LFG(s.jE))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8745:(w,h,t)=>{t.d(h,{Y:()=>s});var s=function(){function c(){this._subs=[]}return c.prototype.add=function(){for(var o=[],p=0;p<arguments.length;p++)o[p]=arguments[p];this._subs=this._subs.concat(o)},Object.defineProperty(c.prototype,"sink",{set:function(o){this._subs.push(o)},enumerable:!0,configurable:!0}),c.prototype.unsubscribe=function(){this._subs.forEach(function(o){return o&&function(c){return"function"==typeof c}(o.unsubscribe)&&o.unsubscribe()}),this._subs=[]},c}()}}]);