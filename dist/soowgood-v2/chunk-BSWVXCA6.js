import{d}from"./chunk-PUKYV4E7.js";import{a as m}from"./chunk-7NGZH4SF.js";import{F as u,R as f,U as c,e as o,i as n,uc as l}from"./chunk-TXQBTV46.js";var a=class{setAuth(e){this.authToken=e.authToken,this.refreshToken=e.refreshToken,this.expiresIn=e.expiresIn}};var h=class extends a{setUser(e){e&&e.info&&(this.name=e.info.name||"",this.given_name=e.info.given_name||"",this.fullname=e.info.preferred_username||e.info.name,this.email=e.info.email||"",this.email_verified=e.info.email_verified||"False",this.phone_number_verified=e.info.phone_number_verified||"False",this.pic=e.info.pic||"./assets/media/avatars/default.jpg",this.roles=[e.info.role],this.sub=e.info.sub)}};var T=(()=>{let e=class e{get currentUserValue(){return this.currentUserSubject.value}set currentUserValue(i){this.currentUserSubject.next(i)}constructor(i,t){this.oAuthService=i,this.router=t,this.subs=new m,this.isLoadingSubject=new o(!1),this.currentUserSubject=new o(void 0),this.currentUser$=this.currentUserSubject.asObservable(),this.isLoading$=this.isLoadingSubject.asObservable()}getUserByToken(){return this.oAuthService.hasValidAccessToken()?n(this.createUserModel(this.oAuthService.getIdentityClaims())):n()}login(i,t){try{if(!this.oAuthService.hasValidAccessToken()&&!this.oAuthService.hasValidIdToken())this.isLoadingSubject.next(!0),this.oAuthService.oidc=!1,this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(i,t).then(s=>(s?this.createUserModel(s):this.logout(),n(s))).catch(s=>{console.log(s),this.isLoadingSubject.next(!1)}),u(()=>this.isLoadingSubject.next(!1));else return n(this.createUserModel(this.oAuthService.getIdentityClaims()))}catch(s){throw s}}createUserModel(i){let t=new h;return t.setUser(i),t.setAuth(this.getAuthData()),this.currentUserSubject=new o(t),this.currentUserSubject.next(t),t}getAuthData(){return{authToken:this.oAuthService.getAccessToken(),refreshToken:this.oAuthService.getRefreshToken(),expiresIn:this.oAuthService.getAccessTokenExpiration()}}logout(){this.oAuthService.logOut(),this.router.navigate(["/auth/login"])}ngOnDestroy(){this.subs.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)(c(d),c(l))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{T as a};
