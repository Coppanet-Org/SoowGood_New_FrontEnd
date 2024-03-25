"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[42],{6332:(w,g,e)=>{e.d(g,{N:()=>v});var d=e(9212),p=e(8175);let v=(()=>{class n{constructor(f){this.restService=f,this.apiName="Default",this.create=(r,c)=>this.restService.request({method:"POST",url:"/api/app/specialization",body:r},{apiName:this.apiName,...c}),this.get=(r,c)=>this.restService.request({method:"GET",url:`/api/app/specialization/${r}`},{apiName:this.apiName,...c}),this.getBySpecialityId=(r,c)=>this.restService.request({method:"GET",url:`/api/app/specialization/by-speciality-id/${r}`},{apiName:this.apiName,...c}),this.getList=r=>this.restService.request({method:"GET",url:"/api/app/specialization"},{apiName:this.apiName,...r}),this.getListBySpecialtyId=(r,c)=>this.restService.request({method:"GET",url:`/api/app/specialization/by-specialty-id/${r}`},{apiName:this.apiName,...c}),this.getListFiltering=r=>this.restService.request({method:"GET",url:"/api/app/specialization/filtering"},{apiName:this.apiName,...r}),this.update=(r,c)=>this.restService.request({method:"PUT",url:"/api/app/specialization",body:r},{apiName:this.apiName,...c})}static#t=this.\u0275fac=function(r){return new(r||n)(d.LFG(p.vgb))};static#e=this.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},6361:(w,g,e)=>{e.d(g,{g:()=>v});var d=e(6814),p=e(9212);let v=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=p.oAB({type:n});static#o=this.\u0275inj=p.cJS({imports:[d.ez]})}return n})()},7417:(w,g,e)=>{e.d(g,{Z:()=>M});var d=e(876),p=e(3862),v=e(2572),n=e(1329),t=e(9212),f=e(6223),r=e(6332),c=e(7552),D=e(8184),y=e(6814),m=e(408),S=e(553),C=e(7700),N=e(4661),A=e(9802),Z=e(9483);function z(a,b){if(1&a){const o=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.openDialog())}),t._uU(1),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("disabled",o.isLoading),t.xp6(),t.hij(" ",o.isLoading?"Loading":"Book Now"," ")}}let U=(()=>{class a{constructor(o,s,i,h,u){this.dialog=o,this.DoctorScheduleService=s,this.router=i,this.TosterService=h,this.NormalAuth=u,this.doctorScheduleList=[],this.isLoading=!1,this.picUrl=`${S.NZ.apis.default.url}/`}ngOnInit(){this.isAuthUser=this.NormalAuth.authInfo();const o=this.doctorDetails.profilePic,i=o?.replace(/wwwroot/gi,"");this.doctorPicurl=i?this.picUrl+i:""}openDialog(){this.isLoading=!0,"undefine || null"!=this.doctorDetails?this.DoctorScheduleService.getDetailsScheduleListByDoctorId(this.doctorDetails.id).subscribe(o=>{this.isLoading=!1,o?.length>0&&this.doctorDetails?this.dialog.open(m.R,{maxWidth:600,minWidth:450,data:{doctorDetails:{...this.doctorDetails,picUrl:this.doctorPicurl},doctorScheduleInfo:o,userAccess:"doctor"!=this.isAuthUser?.userType,isAuthUser:!!this.isAuthUser?.id}}):(this.isLoading=!1,this.TosterService.customToast("No Details/Schedule found","warning"))}):(this.isLoading=!1,this.TosterService.customToast("No Details/Schedule found","warning"))}goToProfile(){this.router.navigate([`/search/doctors/${this.doctorDetails.id}`])}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(C.uw),t.Y36(N.P),t.Y36(D.F0),t.Y36(A.G),t.Y36(Z.e))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-doctor-card"]],inputs:{doctorDetails:"doctorDetails"},decls:21,vars:7,consts:[[1,"relative","flex","group","h-[400px]","overflow-hidden","w-full","transition-all","duration-500","shadow-2xl","shadow-secondary/10","flex-col","rounded-xl","bg-white","bg-clip-border","text-gray-700","border-[1px]"],[1,"relative","box-border","flex","justify-center","py-10","h-[100px]","bg-primary/90","w-full"],[1,"w-[120px]","overflow-hidden","shadow-2xl","shadow-primary/30","bg-white","h-[120px]","rounded-full","border-secondary/50","border-[1px]"],["alt","avater","height","70","width","70",1,"w-full","h-full","object-cover",3,"ngSrc"],[1,"px-10","pt-9","mt-10","flex","flex-col","items-center","h-full"],[1,"flex","items-center","justify-between"],[1,"block","text-center","text-[18px]","font-Roboto","font-medium","leading-snug","tracking-normal","text-blue-gray-900","antialiased"],[1,"mr-2"],[1,"fa-solid","fa-circle-check","text-green-500","text-[14px]"],[1,"block","text-center","font-normal","font-Roboto","text-[14px]","leading-relaxed","text-gray-500","antialiased"],[1,"mt-3","text-center"],[1,"text-[20px]","text-secondary","font-medium","font-Roboto"],[1,"px-4","pt-5","pb-4","flex","gap-2"],["class","rounded-md block hover:bg-secondary/90 bg-primary w-full select-none hover:border-secondary border-secondary/20 border-[1px] py-2 px-7 text-center align-middle font-sans font-medium text-[14px] text-white hover:text-white/90 transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none","type","button","data-ripple-light","true",3,"disabled"],["type","button","data-ripple-light","true",1,"rounded-md","block","w-full","hover:bg-secondary/90","bg-secondary-light","select-none","hover:border-secondary","border-secondary/20","border-[1px]","py-2","px-7","text-center","align-middle","font-sans","font-medium","text-[14px]","text-secondary-dark","hover:text-white/90","transition-all","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"click"],["type","button","data-ripple-light","true",1,"rounded-md","block","hover:bg-secondary/90","bg-primary","w-full","select-none","hover:border-secondary","border-secondary/20","border-[1px]","py-2","px-7","text-center","align-middle","font-sans","font-medium","text-[14px]","text-white","hover:text-white/90","transition-all","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"disabled","click"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA()(),t.TgZ(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7),t.TgZ(8,"span",7),t._UZ(9,"i",8),t.qZA()()(),t.TgZ(10,"p",9),t._uU(11),t.qZA(),t.TgZ(12,"p",9),t._uU(13),t.qZA(),t.TgZ(14,"div",10)(15,"span",11),t._uU(16),t.qZA()()(),t.TgZ(17,"div",12),t.YNc(18,z,2,2,"button",13),t.TgZ(19,"button",14),t.NdJ("click",function(){return i.goToProfile()}),t._uU(20," Profile "),t.qZA()()()),2&s&&(t.xp6(3),t.Q6J("ngSrc",i.doctorPicurl?i.doctorPicurl:"/assets/doctor/avater.png"),t.xp6(4),t.AsE(" ",i.doctorDetails.doctorTitleName,". ",i.doctorDetails.fullName," "),t.xp6(4),t.hij(" ",i.doctorDetails.qualifications," "),t.xp6(2),t.hij(" ",i.doctorDetails.areaOfExperties," "),t.xp6(3),t.hij("Minimum Fee: ",i.doctorDetails.displayFee," Tk. "),t.xp6(2),t.um2(18,"doctor"!==(null==i.isAuthUser?null:i.isAuthUser.userType)?18:-1))},dependencies:[y.Zd],styles:[".dialog-panel[_ngcontent-%COMP%]{width:200px;background:red}"]})}return a})();var F=e(5776),l=e(3052),L=e(2651);function T(a,b){if(1&a&&(t.TgZ(0,"div",10),t._UZ(1,"app-skeleton")(2,"app-skeleton")(3,"app-skeleton")(4,"app-skeleton")(5,"app-skeleton")(6,"app-skeleton")(7,"app-skeleton")(8,"app-skeleton"),t.qZA()),2&a){const o=t.oxw();t.Q6J("ngClass","globalSearch"==o.from?"w-full  grid lg:grid-cols-3 xl:grid-cols-4 gap-7 p-5  flex-wrap  pb-[50px]":"w-full grid lg:grid-cols-3 gap-10 p-5  flex-wrap  pb-[50px]")}}function x(a,b){if(1&a&&(t.TgZ(0,"div",11)(1,"div"),t._uU(2,"No records has been found!"),t.qZA(),t._uU(3),t.qZA()),2&a){const o=t.oxw();t.xp6(3),t.hij(" ",o.noDataAvailable," ")}}function P(a,b){if(1&a&&(t.TgZ(0,"div",12),t._UZ(1,"app-doctor-card",13),t.qZA()),2&a){const o=b.$implicit;t.xp6(),t.Q6J("doctorDetails",o)}}function I(a,b){if(1&a&&(t.TgZ(0,"div",10),t.SjG(1,P,2,1,"div",14,t.ikw),t.qZA()),2&a){const o=t.oxw();t.Q6J("ngClass","globalSearch"==o.from?"w-full  grid lg:grid-cols-3 xl:grid-cols-4 gap-7 p-5  flex-wrap  pb-[50px]":"w-full grid lg:grid-cols-3 gap-10 p-5  flex-wrap  pb-[50px]"),t.xp6(),t.wJu(o.doctorList)}}let M=(()=>{class a{constructor(o,s,i,h){this.fb=o,this.SpecializationService=s,this.DoctorProfileService=i,this.route=h,this.totalCount=0,this.doctorList=[],this.dataLoading=!0,this.consultancyType=d.v.getEnumList(p.Is),this.subscriptions=[],this.noDataAvailable=!1,this.subs=new n.Y,this.doctorFilterDto={},this.filterModel={offset:0,limit:0,pageNo:0,pageSize:10,sortBy:"name",sortOrder:"asc",isDesc:!1},this.filter=this.fb.group({})}ngOnInit(){window.scrollTo(0,0),this.filterInput={fields:{searchField:{formControlName:"search"},filterField:[{label:"Consultancy Type",fieldType:"select",formControlName:"consultancy",options:d.v.getEnumList(p.Is)},{label:"Specialization",fieldType:"select",formControlName:"specialization",options:[]}]}};const o=this.SpecializationService.getListFiltering().subscribe({next:s=>{this.filterInput={fields:{searchField:{formControlName:"search"},filterField:[{label:"Consultancy Type",fieldType:"select",formControlName:"consultancy",options:this.consultancyType},{label:"Specialization",fieldType:"select",formControlName:"specialization",options:s.map(i=>({id:i.id,name:i.specializationName}))}]}}},complete:()=>{o.unsubscribe()}});this.subscriptions.push(o),this.route.queryParams.subscribe(s=>{const i=s.doctorname?s.doctorname:s.patientname?s.patientname:void 0,h=s.consultancyType,u=s.specialization;console.log(u),this.selectedFilterData(h||i||u?{consultancy:h,name:i,specialization:u}:{consultancy:"",name:"",specialization:""})})}selectedFilterData(o){this.dataLoading=!0;const{consultancy:s,specialization:i,name:h}=o;this.doctorFilterDto.consultancyType=s,this.doctorFilterDto.name=h,this.doctorFilterDto.specializationId=i,this.filterModel.limit=this.filterModel.pageSize,this.filterModel.offset=(this.filterModel.pageNo-1)*this.filterModel.pageSize,this.subs.sink=(0,v.a)([this.DoctorProfileService.getDoctorListFilter(this.doctorFilterDto,this.filterModel),this.DoctorProfileService.getDoctorsCountByFilters(this.doctorFilterDto)]).subscribe(([u,E])=>{this.totalCount=E,this.dataLoading=!1,this.doctorList=u},u=>{console.log(u)})}pageChanged(o){this.filterModel.pageNo=o}pageSizeChanged(o){this.filterModel.pageNo=1,this.filterModel.pageSize=o}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(f.qu),t.Y36(r.N),t.Y36(c.K),t.Y36(D.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-public-doctors"]],inputs:{from:"from"},decls:17,vars:8,consts:[[1,"absolute","top-0","right-0",3,"hasBackdrop"],["mode","side"],["drawer",""],[1,"doctor-dashboard_midcontent_container","w-full"],[1,"flex","items-center","justify-left","border-[1px]"],[1,"w-full","relative","pb-10"],[3,"filterInput","filterForm"],[3,"ngClass",4,"ngIf"],["class","flex justify-center items-center h-[500px] w-full",4,"ngIf"],[1,"px-6"],[3,"ngClass"],[1,"flex","justify-center","items-center","h-[500px]","w-full"],[1,"h-full"],[1,"max-w-[350px]","min-w-[310px]",3,"doctorDetails"],["class","h-full"]],template:function(s,i){1&s&&(t.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1,2),t._uU(3,"I'm a drawer"),t.qZA(),t.TgZ(4,"mat-drawer-content")(5,"div",3)(6,"div",4)(7,"div",5),t._UZ(8,"app-filter",6),t.YNc(9,T,9,1,"div",7)(10,x,4,1,"div",8),t.TgZ(11,"p",9),t._uU(12," Total "),t.TgZ(13,"strong"),t._uU(14),t.qZA(),t._uU(15),t.qZA(),t.YNc(16,I,3,1,"div",7),t.qZA()()()()()),2&s&&(t.Q6J("hasBackdrop",!0),t.xp6(8),t.Q6J("filterInput",i.filterInput)("filterForm",i.filter),t.xp6(),t.Q6J("ngIf",i.dataLoading),t.xp6(),t.Q6J("ngIf",i.noDataAvailable),t.xp6(4),t.Oqu(i.totalCount),t.xp6(),t.hij(" ",i.totalCount>1?"doctors":"doctor"," found. "),t.xp6(),t.Q6J("ngIf",!i.dataLoading))},dependencies:[y.mk,y.O5,U,F._,l.z,L.jA,L.kh,L.LW],styles:[".mdc-line-ripple{display:none}  .mat-mdc-text-field-wrapper{border:1px solid rgb(211,211,211);height:45px!important}  .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:30px}  .mat-mdc-select-arrow svg{top:0}  .mat-mdc-form-field{margin-right:15px;border-radius:10px}  .mat-mdc-paginator-page-size-select{height:40px}  .mat-mdc-paginator-container{background:#fff;border-radius:10px}  .mat-mdc-form-field-infix{padding-top:9px!important;padding-bottom:0}"]})}return a})()},1697:(w,g,e)=>{e.d(g,{A:()=>F});var d=e(6814),p=e(6223),v=e(2296),n=e(8034),t=e(9157),f=e(2032),r=e(8184),c=e(909),D=e(6361),y=e(6427),m=e(9212);let S=(()=>{class l{static#t=this.\u0275fac=function(x){return new(x||l)};static#e=this.\u0275mod=m.oAB({type:l});static#o=this.\u0275inj=m.cJS({imports:[d.ez]})}return l})(),C=(()=>{class l{static#t=this.\u0275fac=function(x){return new(x||l)};static#e=this.\u0275mod=m.oAB({type:l});static#o=this.\u0275inj=m.cJS({imports:[d.ez,p.UX,p.u5,r.Bz.forChild([]),D.g,y.U,v.ot,S,c.w,t.lN,f.c,n.FA]})}return l})();var N=e(6255),A=e(8525),Z=e(3365),z=e(9606),U=e(2651);let F=(()=>{class l{static#t=this.\u0275fac=function(x){return new(x||l)};static#e=this.\u0275mod=m.oAB({type:l});static#o=this.\u0275inj=m.cJS({imports:[d.ez,C,N.m,p.UX,t.lN,A.LD,Z.TU,n.FA,f.c,z.i,U.SJ]})}return l})()}}]);