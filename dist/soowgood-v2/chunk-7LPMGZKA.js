import{R as o,U as i,i as r,uc as n}from"./chunk-TXQBTV46.js";var f=(()=>{let t=class t{constructor(e){this._router=e,this._authenticated=!1}setAuthInfoInLocalStorage(e){localStorage.removeItem("auth"),localStorage.setItem("auth",JSON.stringify(e))}signOut(){return localStorage.clear(),this._authenticated=!1,this._router.navigate(["/"]),r(!0)}authInfo(){let e=localStorage.getItem("auth");return e?JSON.parse(e):null}};t.\u0275fac=function(c){return new(c||t)(i(n))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{f as a};
