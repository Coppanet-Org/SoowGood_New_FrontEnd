import{a as v}from"./chunk-BC4RU75W.js";import{a as ie,b as oe}from"./chunk-OS6GAVXR.js";import{a as me,b as de,e as pe}from"./chunk-7LZRNLM6.js";import{c as ue}from"./chunk-EQCB2C7E.js";import{b as ce,c as fe,h as ge,j as we,k as he}from"./chunk-6KAU5MPM.js";import"./chunk-YTSUX7O2.js";import"./chunk-4DRUEFLH.js";import{r as se,y as ae,z as le}from"./chunk-HL5HGHA3.js";import{a as ne}from"./chunk-7LPMGZKA.js";import{A as ee,C as te,E as re,c as W,e as b,h as $,i as J,n as K,r as Q,u as X,y as Z}from"./chunk-FSNV7SJ3.js";import{Ab as O,Bb as A,Ha as h,Ma as l,Qa as y,S as k,Ub as D,Wb as U,X as M,Xa as t,Y as N,Ya as r,Za as u,aa as L,ba as j,bb as V,cc as G,fb as c,fc as B,hb as R,sb as q,tb as o,uc as z,vb as x,vc as Y,xc as H,ya as s,za as g}from"./chunk-TXQBTV46.js";import"./chunk-5G567QLT.js";function ye(i,a){i&1&&(t(0,"p",55),o(1," You must enter a valid mobile number. "),r())}function xe(i,a){i&1&&(t(0,"p",55),o(1," Please include a valid mobile number so we can get back to you. "),r())}function Pe(i,a){if(i&1&&(t(0,"div",56),u(1,"i",57),o(2),r()),i&2){let ve=R();s(2),x(" ",ve.errorMessage," ")}}function Se(i,a){i&1&&(t(0,"p",55),o(1," Password is required. "),r())}function Fe(i,a){i&1&&(t(0,"p",55),o(1," Password must start with an uppercase letter. "),r())}function Ce(i,a){i&1&&(t(0,"p",55),o(1," Password must be at least 6 characters long. "),r())}function Te(i,a){i&1&&(t(0,"p",55),o(1," Password must include a special character. "),r())}function Ie(i,a){i&1&&(t(0,"p",55),o(1," Password must include a number. "),r())}function Ee(i,a){i&1&&(t(0,"mat-hint",58),o(1,"hint: Password@123"),r())}function ke(i,a){i&1&&(t(0,"p",55),o(1," Confirm password is required. "),r())}function Me(i,a){i&1&&(t(0,"p",55),o(1," Password not matched. "),r())}var Ne=i=>({"border-red-500":i}),Le=()=>({length:4,allowNumbersOnly:!0}),be=(()=>{let a=class a{constructor(n,m,e,f,d,p){this.UserAccountsService=n,this.TosterService=m,this.fb=e,this.otpService=f,this.authService=d,this.router=p,this.resetFormSubmitted=!1,this.resetLoading=!1,this.resetPasswordFieldType="password",this.resetConfPasswordFieldType="password",this.isEditable=!1,this.isLoading=!1,this.activeTab=0,this.otpMessage="",this.errorMessage="",this.otpLoading=!1}ngOnInit(){this.authService.authInfo()&&(this.TosterService.customToast("Your are already login your account","warning"),this.router.navigate(["/"])),this.loadForm()}loadForm(){this.resetPasswordForm=this.fb.group({username:["",[b.required,b.pattern(/^(?:88)?[0-9]{11}$/)]],newPassword:["",[b.required,v.isAtLeast6Characters,v.includesSpecialCharacter,v.includesNumber]],confirmPassword:["",b.required]},{validator:v.matchValidator})}resetPassword(){if(this.errorMessage="",this.resetFormSubmitted=!0,!this.resetPasswordForm.get("username")?.invalid){this.resetLoading=!0;try{this.UserAccountsService.isUserExistsByUserName(this.resetPasswordForm.get("username")?.value).subscribe({next:n=>{console.log(n),n?(this.resetLoading=!1,this.next(1),this.resetFormSubmitted=!1):(this.errorMessage="Mobile number not found!",this.resetLoading=!1,this.resetFormSubmitted=!1)},error:n=>{this.TosterService.customToast(String(n.message),"error"),this.resetFormSubmitted=!1}})}catch(n){this.TosterService.customToast(String(n),"error"),this.resetFormSubmitted=!1}}}back(n){this.activeTab=n}next(n){this.activeTab=n}onIndexChange(n){this.activeTab=n._selectedIndex}verify(){this.errorMessage="",this.otpLoading=!0;let n=this.otp;n&&this.otpService.varifyOtp(Number(n)).subscribe(m=>{m?(this.otpLoading=!1,this.next(2)):this.errorMessage="Invalid OTP. Please check again!"})}onOtpChange(n){n.length==4?(this.otp=n,this.verify()):console.log("Pin should be 4 character")}resetPasswordVisibility(n){n==="newPassword"?this.resetPasswordFieldType=this.resetPasswordFieldType==="password"?"text":"password":n==="confirmPassword"&&(this.resetConfPasswordFieldType=this.resetConfPasswordFieldType==="password"?"text":"password")}confirmPassword(){this.resetFormSubmitted=!0;let n={userId:this.resetPasswordForm.get("username")?.value,newPassword:this.resetPasswordForm.get("newPassword")?.value};this.resetPasswordForm.valid&&this.resetPasswordForm.dirty&&(this.resetLoading=!0,this.UserAccountsService.resetPasswordByInputDto(n).subscribe({next:m=>{m.success?(this.TosterService.customToast(String(m.message),"success"),this.resetLoading=!1,this.resetFormSubmitted=!1,this.resetPasswordForm.reset()):(this.TosterService.customToast(String(m.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1)},error:m=>{this.TosterService.customToast(String(m.message),"error"),this.resetFormSubmitted=!1,this.resetLoading=!1}})),this.TosterService.customToast("Please enter your new password","warning")}};a.\u0275fac=function(m){return new(m||a)(g(ae),g(le),g(te),g(se),g(ne),g(z))},a.\u0275cmp=M({type:a,selectors:[["app-forgot-password"]],decls:95,vars:29,consts:[[1,"w-full","h-screen","overflow-y-auto","bg-slate-100"],["id","content","role","main",1,"w-full","max-w-md","mx-auto","p-6"],[1,"flex","flex-col","items-center"],["ngSrc","assets/auth/clr-logo.png","alt","logo","width","200","height","48",1,"w-[200px]","h-12","mr-2"],[1,"forgot-pass"],[2,"background","transparent",3,"selectedIndex","selectedIndexChange"],["stepper",""],[3,"stepControl"],[3,"formGroup"],[1,"mt-7","bg-white","rounded-xl","shadow-lg","border-2","border-secondary/50"],[1,"p-4","sm:p-7"],[1,"text-center"],[1,"block","text-2xl","font-bold","text-gray-800"],[1,"mt-2","text-sm","text-gray-600"],["routerLink","/login",1,"text-secondary","decoration-2","hover:underline","font-medium"],[1,"mt-5"],[1,"grid","gap-y-4"],["for","username",1,"block","text-sm","font-bold","ml-1","mb-2"],[1,"form_input","flex","h-[40px]",3,"ngClass"],["matPrefix","",1,"h-fit","font-Roboto","text-[16px]"],["autocomplete","off","matInput","","maxlength","11","type","tel","formControlName","username","id","username","placeholder","018-000-00000","required","","inputmode","numeric",1,"w-full","bg-white","border-none","outline-none","font-Roboto","h-fit","font-semibold","text-[16px]"],["class","font-Roboto text-[12px] text-red-600 mt-2",4,"ngIf"],[1,"py-3","px-4","inline-flex","justify-center","items-center","gap-2","rounded-md","border","border-transparent","font-semibold","bg-secondary","text-white","hover:bg-secondary/80","focus:outline-none","focus:ring-2","focus:ring-blue-500","focus:ring-offset-2","transition-all","text-sm",3,"click"],[1,"max-w-lg","text-center","min-w-[400px]","mx-auto","my-10","bg-white","p-5","rounded-xl","shadow","shadow-slate-300"],[1,"w-[150px]","m-auto","rounded-full","h-[150px]","bg-slate-200"],["ngSrc","/assets/auth/v-code.jpg","alt","IMG","width","150","height","150"],[1,"mt-4","text-[28px]","text-primary","font-semibold"],[1,"text-primary"],[1,"mt-6","bg-white"],["inputClass","verify-focus bg-white ",2,"background","white",3,"config","onInputChange"],["class","p-4 mt-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 font-semibold font-Roboto","role","alert",4,"ngIf"],[1,"flex","gap-3","mt-6"],[1,"btn-secondary","w-1/2",3,"disabled","click"],[1,"form_btn","w-1/2",3,"disabled","click"],[1,"fa-solid","fa-arrow-right","ml-2"],[1,"p-8","border-[1px]","rounded-lg","mt-6","bg-white"],["for","newPassword",1,"block","mb-2","text-sm","font-medium","text-gray-800"],[1,"form_input","flex","justify-between"],["formControlName","newPassword","name","newPassword","id","newPassword","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"outline-none","border-none","w-full","bg-white",3,"type","keydown.enter"],[1,"cursor-pointer",3,"click"],[1,"flex","flex-col"],["class","text-xs text-red-500 font-normal","align","end",4,"ngIf"],["for","confirm-password",1,"block","mb-2","mt-3","text-sm","font-medium","text-gray-900"],["formControlName","confirmPassword","name","confirm-password","id","confirm-password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"outline-none","border-none","w-full","bg-white",3,"type","keydown.enter"],[1,"flex","items-start","mt-6"],[1,"flex","items-center","h-5"],["id","newsletter","aria-describedby","newsletter","type","checkbox","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-primary-300"],[1,"ml-3","text-sm"],["for","newsletter",1,"font-light","text-gray-500"],["href","#",1,"font-medium","text-primary-600","hover:underline"],[1,"btn-secondary","w-full","mt-5",3,"click"],[1,"h-[300px]","bg-white","flex","justify-center","text-center"],[1,"mt-3","flex","justify-center","items-center","text-center","divide-x","divide-gray-300"],["routerLink","/",1,"pr-3.5","inline-flex","items-center","gap-x-2","text-sm","text-gray-600","decoration-2","hover:underline","hover:text-primary"],["routerLink","/contact-us",1,"pl-3","inline-flex","items-center","gap-x-2","text-sm","text-gray-600","decoration-2","hover:underline","hover:text-primary"],[1,"font-Roboto","text-[12px]","text-red-600","mt-2"],["role","alert",1,"p-4","mt-4","mb-4","text-sm","text-yellow-800","rounded-lg","bg-yellow-50","font-semibold","font-Roboto"],[1,"fa-solid","fa-circle-exclamation","mr-2"],["align","end",1,"text-xs","text-red-500","font-normal"]],template:function(m,e){if(m&1){let f=V();t(0,"div",0)(1,"main",1)(2,"div",2),u(3,"img",3),t(4,"div",4)(5,"mat-stepper",5,6),c("selectedIndexChange",function(){L(f);let p=q(6);return j(e.onIndexChange(p))}),t(7,"mat-step",7)(8,"form",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"h1",12),o(13," Forgot password? "),r(),t(14,"p",13),o(15," Remember your password? "),t(16,"a",14),o(17," Login here "),r()()(),t(18,"div",15)(19,"div",16)(20,"div")(21,"label",17),o(22,"Mobile Number"),r(),t(23,"div",18)(24,"span",19),o(25,"+88 \xA0"),r(),u(26,"input",20),r(),h(27,ye,2,0,"p",21)(28,xe,2,0,"p",21),r(),t(29,"button",22),c("click",function(){return e.resetPassword()}),o(30," Reset password "),r()()()()()()(),t(31,"mat-step")(32,"div",23)(33,"div",24),u(34,"img",25),r(),t(35,"h1",26),o(36," Verify Your Phone "),u(37,"br"),o(38," Number "),r(),t(39,"p",27),o(40," We have already sent a verification code"),u(41,"br"),o(42),r(),t(43,"div",28)(44,"ng-otp-input",29),c("onInputChange",function(p){return e.onOtpChange(p)}),r()(),h(45,Pe,3,1,"div",30),t(46,"div",31)(47,"button",32),c("click",function(){return e.back(0)}),o(48," Back "),r(),t(49,"button",33),c("click",function(){return e.verify()}),o(50," Continue "),u(51,"i",34),r()()()(),t(52,"mat-step")(53,"div",35)(54,"form",8)(55,"label",36),o(56,"New Password"),r(),t(57,"div",37)(58,"input",38),c("keydown.enter",function(p){return p.preventDefault()}),r(),t(59,"button",39),c("click",function(){return e.resetPasswordVisibility("newPassword")}),u(60,"i"),r()(),t(61,"div",40),h(62,Se,2,0,"p",21)(63,Fe,2,0,"p",21)(64,Ce,2,0,"p",21)(65,Te,2,0,"p",21)(66,Ie,2,0,"p",21),r(),h(67,Ee,2,0,"mat-hint",41),t(68,"label",42),o(69,"Confirm password"),r(),t(70,"div",37)(71,"input",43),c("keydown.enter",function(p){return p.preventDefault()}),r(),t(72,"button",39),c("click",function(){return e.resetPasswordVisibility("confirmPassword")}),u(73,"i"),r()(),t(74,"div",40),h(75,ke,2,0,"p",21)(76,Me,2,0,"p",21),r(),t(77,"div",44)(78,"div",45),u(79,"input",46),r(),t(80,"div",47)(81,"label",48),o(82,"I accept the "),t(83,"a",49),o(84,"Terms and Conditions"),r()()()(),t(85,"button",50),c("click",function(){return e.confirmPassword()}),o(86," Confirm Password "),r()()()(),t(87,"mat-step")(88,"div",51),o(89," You have successfully reset your password! Now you can login your account with new password. "),r()()()()(),t(90,"p",52)(91,"a",53),o(92," Home "),r(),t(93,"span",54),o(94," Contact us! "),r()()()()}if(m&2){let f,d,p,P,S,F,C,T,I,_,E,w;s(5),l("selectedIndex",e.activeTab),s(2),l("stepControl",e.resetPasswordForm),s(),l("formGroup",e.resetPasswordForm),s(15),l("ngClass",A(26,Ne,((f=e.resetPasswordForm.get("username"))==null?null:f.invalid)&&((f=e.resetPasswordForm.get("username"))==null?null:f.touched))),s(4),l("ngIf",e.resetFormSubmitted&&((d=e.resetPasswordForm.get("username"))==null?null:d.hasError("required"))),s(),l("ngIf",e.resetFormSubmitted&&((p=e.resetPasswordForm.get("username"))==null?null:p.hasError("pattern"))),s(14),x("to ",(P=e.resetPasswordForm.get("username"))==null?null:P.value," "),s(2),l("config",O(28,Le)),s(),l("ngIf",e.errorMessage),s(2),l("disabled",e.isLoading),s(2),l("disabled",e.isLoading),s(5),l("formGroup",e.resetPasswordForm),s(4),l("type",e.resetPasswordFieldType),s(2),y(e.resetPasswordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),s(2),l("ngIf",e.resetFormSubmitted&&((S=e.resetPasswordForm.get("newPassword"))==null?null:S.hasError("required"))),s(),l("ngIf",e.resetFormSubmitted&&((F=e.resetPasswordForm.get("newPassword"))==null?null:F.hasError("startsWithUppercase"))),s(),l("ngIf",e.resetFormSubmitted&&((C=e.resetPasswordForm.get("newPassword"))==null?null:C.hasError("isAtLeast6Characters"))),s(),l("ngIf",e.resetFormSubmitted&&((T=e.resetPasswordForm.get("newPassword"))==null?null:T.hasError("includesSpecialCharacter"))),s(),l("ngIf",e.resetFormSubmitted&&((I=e.resetPasswordForm.get("newPassword"))==null?null:I.hasError("includesNumber"))),s(),l("ngIf",((_=e.resetPasswordForm.get("newPassword"))==null?null:_.invalid)||((_=e.resetPasswordForm.get("newPassword"))==null?null:_.value)==="0"),s(4),l("type",e.resetConfPasswordFieldType),s(2),y(e.resetConfPasswordFieldType==="password"?"fa fa-eye-slash":"fa fa-eye"),s(2),l("ngIf",e.resetFormSubmitted&&((E=e.resetPasswordForm.get("confirmPassword"))==null?null:E.hasError("required"))),s(),l("ngIf",e.resetFormSubmitted&&((w=e.resetPasswordForm.get("confirmPassword"))==null?null:w.valid)&&((w=e.resetPasswordForm.get("confirmPassword"))==null?null:w.dirty)&&((w=e.resetPasswordForm.get("confirmPassword"))==null?null:w.errors))}},dependencies:[D,U,Y,K,W,$,J,Z,ee,Q,X,B,me,de,ce,fe,we,ie],styles:[".mat-horizontal-stepper-header-container{display:none!important}  .mat-horizontal-content-container{width:450px!important}"]});let i=a;return i})();var je=[{path:"",component:be}],ot=(()=>{let a=class a{};a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=N({type:a}),a.\u0275inj=k({imports:[G,H.forChild(je),re,ue,pe,ge,he,oe]});let i=a;return i})();export{ot as ForgotPasswordModule};
