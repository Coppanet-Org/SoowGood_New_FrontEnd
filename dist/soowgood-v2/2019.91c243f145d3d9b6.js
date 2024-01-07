"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[2019],{2019:(f,g,s)=>{s.r(g),s.d(g,{AgentLoginModule:()=>S});var d=s(6895),t=s(4006),a=s(262),i=s(3900),l=s(2843),v=s(8745),o=s(4650),w=s(2381),A=s(5374),b=s(5654),Z=s(629),c=s(1951);function L(n,m){1&n&&o._UZ(0,"span",23)}const T=[{path:"",component:(()=>{class n{constructor(r,u,e,h,p,x){this.ToasterService=r,this.UserAuthService=u,this.AgentProfileService=e,this.NormalAuth=h,this._router=p,this.fb=x,this.defaultAuth={mobileNo:"",password:""},this.subs=new v.Y}ngOnInit(){this.loadForm()}loadForm(){this.loginForm=this.fb.group({mobileNo:[this.defaultAuth.mobileNo,t.kI.compose([t.kI.required,t.kI.minLength(11),t.kI.maxLength(11)])],password:[this.defaultAuth.password,t.kI.compose([t.kI.required,t.kI.minLength(7),t.kI.maxLength(100)])]})}onSubmit(){if(!this.loginForm.valid&&!this.loginForm.touched)return void this.ToasterService.customToast("Please filled all required field","warning");let r,u={userName:this.loginForm.value.mobileNo,email:"",password:this.loginForm.value.password,rememberMe:!1};try{this.UserAuthService.loginByUserDto(u).pipe((0,a.K)(e=>this.handleLoginError(e)),(0,i.w)(e=>(r=e,e.success?this.AgentProfileService.getByUserName(e.userName||""):(this.hasError=!0,this.ToasterService.customToast(e.message||" ","error"),(0,l._)(e.message||"Login failed")))),(0,a.K)(e=>this.handleProfileError(e))).subscribe(e=>{console.log(e);const h={fullName:e.fullName,userId:e.userId,id:e.id,userType:r.roleName.toString().toLowerCase()};this.NormalAuth.setAuthInfoInLocalStorage(h);const p=e.isActive?r.roleName.toString().toLowerCase():(r.roleName.toString()+"/profile-settings").toLowerCase();this._router.navigate([p],{state:{data:e}}).then(()=>this.ToasterService.customToast(r.message||" ","success"))})}catch(e){this.hasError=!0,"'tokenEndpoint' should not be null"===e.message&&this.ToasterService.customToast(e.message||" ","success")}}handleLoginError(r){}handleProfileError(r){}ngOnDestroy(){this.subs.unsubscribe()}}return n.\u0275fac=function(r){return new(r||n)(o.Y36(w.G),o.Y36(A.V),o.Y36(b.j),o.Y36(Z.e),o.Y36(c.F0),o.Y36(t.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-agent-login"]],decls:34,vars:2,consts:[[1,"signup-form"],[1,"signup-form__left"],["src","../../../../assets/auth/Repeat Grid 3.png","alt","auth",1,"w-full","h-full"],[1,"signup-form__right","drop-shadow-soft","relative"],[1,"max-w-lg","min-w-[500px]","mx-auto","mt-10","bg-white","p-8","rounded-xl","shadow","shadow-slate-300"],[1,"text-4xl","font-medium"],[1,"text-slate-500","mt-2"],["action","",1,"mt-6",3,"formGroup"],[1,"flex","flex-col","space-y-5","mt-10"],["for","mobile"],[1,"font-medium","text-slate-700","pb-2"],["type","tel","formControlName","mobileNo","id","mobileNo","placeholder","018-000-00000","required","",1,"form_input"],["for","Password"],["formControlName","password","type","password","name","password","id","password","placeholder","Password123@*",1,"form_input"],[1,"form_btn",3,"click"],[1,"flex"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"text-center"],["routerLink","/agent/signup",1,"text-primary","font-medium","inline-flex","space-x-1","items-center"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"],[1,"loading","loading-dots","loading-md"]],template:function(r,u){1&r&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),o._uU(6,"Login"),o.qZA(),o.TgZ(7,"p",6),o._uU(8,"Hi, Welcome to SoowGood \u{1f44b}"),o.qZA(),o.TgZ(9,"form",7)(10,"div",8)(11,"label",9)(12,"p",10),o._uU(13,"Mobile Number"),o.qZA(),o._UZ(14,"input",11),o.qZA(),o.TgZ(15,"label",12)(16,"p",10),o._uU(17," Password"),o.qZA(),o._UZ(18,"input",13),o.qZA(),o.TgZ(19,"button",14),o.NdJ("click",function(){return u.onSubmit()}),o.TgZ(20,"div",15),o.O4$(),o.TgZ(21,"svg",16),o._UZ(22,"path",17),o.qZA(),o.kcU(),o.TgZ(23,"span"),o._uU(24,"Login"),o.qZA()(),o.YNc(25,L,1,0,"span",18),o.qZA(),o.TgZ(26,"p",19),o._uU(27," Don't have an account? "),o.TgZ(28,"a",20)(29,"span"),o._uU(30,"Sign up "),o.qZA(),o.TgZ(31,"span"),o.O4$(),o.TgZ(32,"svg",21),o._UZ(33,"path",22),o.qZA()()()()()()()()()),2&r&&(o.xp6(9),o.Q6J("formGroup",u.loginForm),o.xp6(16),o.Q6J("ngIf",u.isLoading))},dependencies:[d.O5,c.rH,t._Y,t.Fj,t.JJ,t.JL,t.Q7,t.sg,t.u]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[d.ez,c.Bz.forChild(T),t.u5,t.UX]}),n})()},8745:(f,g,s)=>{s.d(g,{Y:()=>t});var t=function(){function a(){this._subs=[]}return a.prototype.add=function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];this._subs=this._subs.concat(i)},Object.defineProperty(a.prototype,"sink",{set:function(i){this._subs.push(i)},enumerable:!0,configurable:!0}),a.prototype.unsubscribe=function(){this._subs.forEach(function(i){return i&&function(a){return"function"==typeof a}(i.unsubscribe)&&i.unsubscribe()}),this._subs=[]},a}()}}]);