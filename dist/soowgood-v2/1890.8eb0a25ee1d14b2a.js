"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[1890],{1890:(v,c,i)=>{i.r(c),i.d(c,{AuthCheckingModule:()=>m});var u=i(6814),a=i(7874),l=i(553),t=i(9212),d=i(9483),r=i(8184);const p=[{path:"",component:(()=>{class o{constructor(e,n,s,h){this.AuthService=e,this.router=n,this.renderer=s,this.ActivatedRoute=h,this.token="",this.eUserInfo="",this.key=l.Re}ngOnInit(){this.AuthService.authInfo();let n=this.AuthService.authInfo()?.userType,s=this.ActivatedRoute.snapshot.queryParams.redirect;n?this.eUserInfo=encodeURIComponent(String(localStorage.getItem("access_token"))):this.router.navigate(["/service-login"],{queryParams:{redirect:s}})}continueToService(){let e=this.ActivatedRoute.snapshot.queryParams.redirect;e?window.open(`http://localhost:3000/token-verify?redirect=${e}&token=${this.eUserInfo}`,"_blank"):window.open(`http://localhost:3000?token=${this.eUserInfo}`,"_blank")}encrypt(e){return a.AES.encrypt(e,this.key).toString()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(r.F0),t.Y36(t.Qsj),t.Y36(r.gz))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth-checking"]],decls:4,vars:0,consts:[[1,"flex","h-screen","w-full","justify-center","items-center","flex-col"],[1,"py-2","px-5","border-[1px]","rounded-md","cursor-pointer","hover:bg-primary/10"],[3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2),t.NdJ("click",function(){return s.continueToService()}),t._uU(3," Continue with soowgood.com "),t.qZA()()())}})}return o})()}];let m=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[u.ez,r.Bz.forChild(p)]})}return o})()}}]);