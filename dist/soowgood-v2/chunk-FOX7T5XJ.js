import{a as w}from"./chunk-ZHKAS5JY.js";import{a as x,b as I}from"./chunk-YDCGVR55.js";import"./chunk-RVCLVMVA.js";import"./chunk-W4ZBBNGU.js";import"./chunk-DJNKJFRI.js";import"./chunk-NSGTVVZT.js";import"./chunk-TULQWZNE.js";import"./chunk-TTHUJNPP.js";import{a as c,b as f,c as C}from"./chunk-U4GQQU26.js";import"./chunk-7NGZH4SF.js";import"./chunk-FQWPYGQS.js";import"./chunk-EQCB2C7E.js";import"./chunk-DIK5M47G.js";import"./chunk-6KAU5MPM.js";import"./chunk-EFF4UWHC.js";import"./chunk-XTINLLUJ.js";import"./chunk-46JTLTO3.js";import"./chunk-YTSUX7O2.js";import"./chunk-4DRUEFLH.js";import"./chunk-HL5HGHA3.js";import{a as g}from"./chunk-7LPMGZKA.js";import"./chunk-FSNV7SJ3.js";import{Ma as b,S as m,X as s,Xa as r,Y as p,Ya as n,Za as a,cc as l,tb as y,xc as d,ya as h,za as M}from"./chunk-TXQBTV46.js";import"./chunk-BYPGBJQR.js";import"./chunk-FK6H3RFT.js";import"./chunk-5G567QLT.js";var A=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=s({type:t,selectors:[["app-medical-history"]],inputs:{Id:"Id"},decls:8,vars:0,consts:[[1,"min-h-[500px]","w-full","border-[1px]","rounded-xl","overflow-hidden","shadow-secondary/10","shadow-2xl"],["mat-stretch-tabs","true","animationDuration","0","mat-align-tabs","start"],["label","All Prescriptions"],["label","Test Reports"],["label","Others"]],template:function(i,u){i&1&&(r(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2),a(3,"app-prescriptions"),n(),r(4,"mat-tab",3),y(5," Comming soon..."),n(),r(6,"mat-tab",4),y(7," Comming soon... "),n()()())},dependencies:[c,f,w]});let e=t;return e})();var T=(()=>{let t=class t{constructor(o){this.NormalAuth=o}ngOnInit(){let o=this.NormalAuth.authInfo().id;this.patientId=o}};t.\u0275fac=function(i){return new(i||t)(M(g))},t.\u0275cmp=s({type:t,selectors:[["app-appointments"]],decls:8,vars:3,consts:[[1,"w-full","border-l-[1px]","h-full"],[1,"flex","items-center","justify-left","relative"],[1,"overflow-x-auto","sm:rounded-lg","px-8","py-6","w-full"],["mat-stretch-tabs","false","mat-align-tabs","start"],["label","Appointments"],[3,"id","user"],["label","Medical History"],[3,"id"]],template:function(i,u){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-tab-group",3)(4,"mat-tab",4),a(5,"app-all-appointments",5),n(),r(6,"mat-tab",6),a(7,"app-medical-history",7),n()()()()()),i&2&&(h(5),b("id",u.patientId)("user","patient"),h(2),b("id",u.patientId))},dependencies:[x,c,f,A]});let e=t;return e})();var N=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[l,d.forChild([])]});let e=t;return e})();var D=[{path:"",component:T}],X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p({type:t}),t.\u0275inj=m({imports:[l,d.forChild(D),I,C,N]});let e=t;return e})();export{X as AppointmentsModule};
