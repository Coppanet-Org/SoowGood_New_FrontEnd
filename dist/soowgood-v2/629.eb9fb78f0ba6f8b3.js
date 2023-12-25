"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[629],{9629:(T,l,n)=>{n.r(l),n.d(l,{ProfileSettingsModule:()=>Z});var a=n(6895),i=n(4006),p=n(5649),t=n(4650),f=n(629),u=n(5654),c=n(2381),g=n(427),m=n(4473);function h(o,s){if(1&o&&(t.ynx(0,26),t._UZ(1,"app-input",27),t.BQk()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("label",e.label)("inputId",e.inputId)("isSelectInput",e.isSelect)("readonly",!!e.readonly&&e.readonly)("options",e.options)("formControlName",e.formControlName)("type",e.type)("placeholder",e.label)}}function v(o,s){1&o&&t._UZ(0,"span",28)}let x=(()=>{class o{constructor(e,r,d,w,I){this.fb=e,this.NormalAuth=r,this.AgentProfileService=d,this.TosterService=w,this.UserinfoStateService=I,this.agentInputData=[]}ngOnInit(){this.loadForm();let e=this.NormalAuth.authInfo().id;this.agentId=e,e&&this.UserinfoStateService.getData().subscribe(r=>this.form.patchValue(r)),this.agentInputData=p.ry}loadForm(){this.form=this.fb.group({fullName:[""],agentCode:[""],mobileNo:["",i.kI.required],organizationName:[""],email:[""],address:["",i.kI.required],contact:[""]})}onUpdateAgentDate(){this.isLoading=!0;try{this.AgentProfileService.update({...this.form.value,id:this.agentId}).subscribe(e=>{console.log(e),this.TosterService.customToast("Successfully updated","success"),this.isLoading=!1})}catch{this.TosterService.customToast("Update Failed","error")}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(f.e),t.Y36(u.j),t.Y36(c.G),t.Y36(g.Z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile-settings"]],decls:32,vars:4,consts:[[1,"doctor-dashboard_midcontent_container","p-4"],[1,"mx-auto"],[1,"bg-white","relative","shadow","rounded-lg","w-full","mx-auto"],[1,"p-10","pt-8"],[1,"flex","justify-between","items-center"],[1,"flex","justify-left","items-center","gap-6"],[1,"relative","w-[128px]","h-[128px]","bg-white","transition"],["alt","",1,"object-cover","rounded-lg","mx-auto","w-32","h-32","shadow-md","border-4","border-white",3,"src"],["type","file","accept",".gif,.jpg,.jpeg,.png,.doc,.docx,.pdf","multiple","",2,"display","none"],["attachments","","fileInput",""],[1,"duration-200","transform","hover:scale-110","flex","justify-center","items-center","cursor-pointer","absolute","-bottom-[8px]","-right-[8px]","w-[30px]","h-[30px]","rounded-full","p-1","bg-white","z-20","border-[1px]"],[1,"fa-solid","fa-camera","text-primary"],[1,"font-bold","text-left","text-3xl","text-gray-900","dashbord-heading-text"],[1,"text-left","text-sm","text-gray-400","mt-2","font-medium","dashbord-heading-subtext"],[1,"btn-secondary"],[1,"w-full","bg-white","mt-10"],[3,"formGroup"],[1,"-mx-3","flex","flex-wrap"],["class","w-full",4,"ngFor","ngForOf"],[1,"flex","items-center","justify-end","w-fit","mt-6"],[1,"btn-secondary","px-10","hover:text-primary","border-transparent","hover:border","hover:border-secondary-border","group"],[1,"flex","items-center","gap-1","text-white","group-hover:text-primary"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"],[3,"click"],["class","loading loading-dots loading-md",4,"ngIf"],[1,"w-full"],[1,"sm:w-1/3",3,"label","inputId","isSelectInput","readonly","options","formControlName","type","placeholder"],[1,"loading","loading-dots","loading-md"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t._UZ(8,"img",7)(9,"input",8,9),t.TgZ(12,"div",10),t._UZ(13,"i",11),t.qZA()(),t.TgZ(14,"div"),t._UZ(15,"h1",12)(16,"p",13),t.qZA()(),t.TgZ(17,"div")(18,"button",14),t._uU(19," View Profile "),t.qZA()()(),t.TgZ(20,"div",15)(21,"form",16)(22,"div",17),t.YNc(23,h,2,8,"ng-container",18),t.qZA(),t.TgZ(24,"div",19)(25,"button",20)(26,"div",21),t.O4$(),t.TgZ(27,"svg",22),t._UZ(28,"path",23),t.qZA(),t.kcU(),t.TgZ(29,"span",24),t.NdJ("click",function(){return r.onUpdateAgentDate()}),t._uU(30,"Update Info"),t.qZA()(),t.YNc(31,v,1,0,"span",25),t.qZA()()()()()()()()()),2&e&&(t.xp6(8),t.Q6J("src",r.url?r.url:"../../../../../assets/doctor/dr.jpeg",t.LSH),t.xp6(13),t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("ngForOf",r.agentInputData),t.xp6(8),t.Q6J("ngIf",1==r.isLoading))},dependencies:[a.sg,a.O5,m.a,i._Y,i.JJ,i.JL,i.sg,i.u]}),o})();var y=n(2510),S=n(7905);const b=[{path:"",component:x}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,y.Bz.forChild(b),S.g,i.UX,i.u5]}),o})()}}]);