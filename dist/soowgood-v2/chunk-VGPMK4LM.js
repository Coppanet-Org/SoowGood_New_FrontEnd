import{a as f}from"./chunk-7LPMGZKA.js";import{R as c,U as s,V as u,uc as l}from"./chunk-TXQBTV46.js";var g=(()=>{let t=class t{constructor(i,e){this.authService=i,this.router=e}canActivate(i,e){let a=this.authService.authInfo();if(a){let n=a.userType,o=e.url.split("/")[1];if(n===o)return!0;{let h=o=="agent"?`/${o}/login`:"/login";return this.router.navigate([h]),!1}}else{let n=e.url.startsWith("/agent")?"/agent/login":"/login";return this.router.navigate([n]),!1}}};t.\u0275fac=function(e){return new(e||t)(s(f),s(l))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})(),I=(r,t)=>u(g).canActivate(r,t);export{I as a};