"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[2019],{2019:(w,c,t)=>{t.r(c),t.d(c,{AgentLoginModule:()=>C});var d=t(6895),e=t(4006),a=t(262),i=t(3900),l=t(2843),b=t(8745),o=t(4650),L=t(2381),Z=t(5374),S=t(3661),T=t(210),x=t(5654),N=t(629),p=t(2510);function U(n,h){1&n&&o._UZ(0,"span",23)}const y=[{path:"",component:(()=>{class n{constructor(r,u,g,f,m,s,v,A){this.ToasterService=r,this.UserAuthService=u,this.appAuthService=g,this.oAuthService=f,this.AgentProfileService=m,this.NormalAuth=s,this._router=v,this.fb=A,this.defaultAuth={mobileNo:"",password:""},this.subs=new b.Y}ngOnInit(){this.loadForm()}loadForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,e.kI.compose([e.kI.required,e.kI.minLength(11),e.kI.maxLength(11)])],password:[this.defaultAuth.password,e.kI.compose([e.kI.required,e.kI.minLength(7),e.kI.maxLength(100)])]})}onSubmit(){if(!this.loginForm.valid&&!this.loginForm.touched)return void this.ToasterService.customToast("Please filled all required field","warning");let r;const u=this.loginForm.value.mobileNo,g=this.loginForm.value.password;this.oAuthService.oidc=!1;let f={userName:this.loginForm.value.mobileNo,email:"",password:this.loginForm.value.password,rememberMe:!1};try{this.appAuthService.isLoadingSubject.next(!0),this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(u,g).then(m=>{m&&this.UserAuthService.loginByUserDto(f).pipe((0,a.K)(s=>this.handleLoginError(s)),(0,i.w)(s=>(r=s,s.success?this.AgentProfileService.getByUserName(s.userName||""):(this.hasError=!0,this.ToasterService.customToast(s.message||" ","error"),(0,l._)(s.message||"Login failed")))),(0,a.K)(s=>this.handleProfileError(s))).subscribe(s=>{console.log(s);const v={fullName:s.fullName,userId:s.userId,id:s.id,userType:r.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(v);const A=s.isActive?r.roleName.toString().toLowerCase():(r.roleName.toString()+"/profile-settings").toLowerCase();this._router.navigate([A],{state:{data:s}}).then(()=>this.ToasterService.customToast(r.message||" ","success"))})})}catch(m){this.hasError=!0,"'tokenEndpoint' should not be null"===m.message&&this.ToasterService.customToast(m.message||" ","success")}}handleLoginError(r){}handleProfileError(r){}ngOnDestroy(){this.subs.unsubscribe()}}return n.\u0275fac=function(r){return new(r||n)(o.Y36(L.G),o.Y36(Z.V),o.Y36(S.K),o.Y36(T.Ct),o.Y36(x.j),o.Y36(N.e),o.Y36(p.F0),o.Y36(e.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-agent-login"]],decls:34,vars:2,consts:[[1,"signup-form"],[1,"signup-form__left"],["src","../../../../assets/auth/Repeat Grid 3.png","alt","auth",1,"w-full","h-full"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],[1,"text-4xl","font-medium"],[1,"text-slate-500","mt-2"],["action","",1,"mt-6",3,"formGroup"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],["type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","",1,"form_input"],["for","Password"],["formControlName","password","type","password","name","password","id","password","placeholder","Password123@*",1,"form_input"],[1,"form_btn",3,"click"],[1,"flex"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/agent/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],[1,"loading","loading-dots","loading-md"]],template:function(r,u){1&r&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),o._uU(6,"Login"),o.qZA(),o.TgZ(7,"p",6),o._uU(8,"Hi, Welcome to SoowGood \u{1f44b}"),o.qZA(),o.TgZ(9,"form",7)(10,"div",8)(11,"label",9)(12,"p",10),o._uU(13,"Mobile Number"),o.qZA(),o._UZ(14,"input",11),o.qZA(),o.TgZ(15,"label",12)(16,"p",10),o._uU(17," Password"),o.qZA(),o._UZ(18,"input",13),o.qZA(),o.TgZ(19,"button",14),o.NdJ("click",function(){return u.onSubmit()}),o.TgZ(20,"div",15),o.O4$(),o.TgZ(21,"svg",16),o._UZ(22,"path",17),o.qZA(),o.kcU(),o.TgZ(23,"span"),o._uU(24,"Login"),o.qZA()(),o.YNc(25,U,1,0,"span",18),o.qZA(),o.TgZ(26,"p",19),o._uU(27," Don't have an account? "),o.TgZ(28,"a",20)(29,"span"),o._uU(30,"Sign up "),o.qZA(),o.TgZ(31,"span"),o.O4$(),o.TgZ(32,"svg",21),o._UZ(33,"path",22),o.qZA()()()()()()()()()),2&r&&(o.xp6(9),o.Q6J("formGroup",u.loginForm),o.xp6(16),o.Q6J("ngIf",u.isLoading))},dependencies:[d.O5,p.rH,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.sg,e.u]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,p.Bz.forChild(y),e.u5,e.UX]}),n})()},8745:(w,c,t)=>{t.d(c,{Y:()=>e});var e=function(){function a(){this._subs=[]}return a.prototype.add=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];this._subs=this._subs.concat(i)},Object.defineProperty(a.prototype,"sink",{set:function(i){this._subs.push(i)},enumerable:!0,configurable:!0}),a.prototype.unsubscribe=function(){this._subs.forEach(function(i){return i&&function(a){return"function"==typeof a}(i.unsubscribe)&&i.unsubscribe()}),this._subs=[]},a}()}}]);