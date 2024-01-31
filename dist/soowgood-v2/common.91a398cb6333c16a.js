"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[8592],{3661:(_,h,a)=>{a.d(h,{K:()=>f});var i=a(1135),e=a(9646),p=a(8746),r=a(8745);class u{setAuth(n){this.authToken=n.authToken,this.refreshToken=n.refreshToken,this.expiresIn=n.expiresIn}}class t extends u{setUser(n){n&&n.info&&(this.name=n.info.name||"",this.given_name=n.info.given_name||"",this.fullname=n.info.preferred_username||n.info.name,this.email=n.info.email||"",this.email_verified=n.info.email_verified||"False",this.phone_number_verified=n.info.phone_number_verified||"False",this.pic=n.info.pic||"./assets/media/avatars/default.jpg",this.roles=[n.info.role],this.sub=n.info.sub)}}var o=a(4650),m=a(210),v=a(2510);let f=(()=>{class c{constructor(s,l){this.oAuthService=s,this.router=l,this.subs=new r.Y,this.isLoadingSubject=new i.X(!1),this.currentUserSubject=new i.X(void 0),this.currentUser$=this.currentUserSubject.asObservable(),this.isLoading$=this.isLoadingSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}set currentUserValue(s){this.currentUserSubject.next(s)}getUserByToken(){return this.oAuthService.hasValidAccessToken()?(0,e.of)(this.createUserModel(this.oAuthService.getIdentityClaims())):(0,e.of)()}login(s,l){try{if(this.oAuthService.hasValidAccessToken()||this.oAuthService.hasValidIdToken())return(0,e.of)(this.createUserModel(this.oAuthService.getIdentityClaims()));this.isLoadingSubject.next(!0),this.oAuthService.oidc=!1,this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(s,l).then(g=>(g?this.createUserModel(g):this.logout(),(0,e.of)(g))).catch(g=>{console.log(g),this.isLoadingSubject.next(!1)}),(0,p.x)(()=>this.isLoadingSubject.next(!1))}catch(g){throw g}}createUserModel(s){const l=new t;return l.setUser(s),l.setAuth(this.getAuthData()),this.currentUserSubject=new i.X(l),this.currentUserSubject.next(l),l}getAuthData(){return{authToken:this.oAuthService.getAccessToken(),refreshToken:this.oAuthService.getRefreshToken(),expiresIn:this.oAuthService.getAccessTokenExpiration()}}logout(){this.oAuthService.logOut(),this.router.navigate(["/auth/login"])}ngOnDestroy(){this.subs.unsubscribe()}}return c.\u0275fac=function(s){return new(s||c)(o.LFG(m.Ct),o.LFG(v.F0))},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},5654:(_,h,a)=>{a.d(h,{j:()=>p});var i=a(4650),e=a(7999);let p=(()=>{class r{constructor(d){this.restService=d,this.apiName="Default",this.create=(t,o)=>this.restService.request({method:"POST",url:"/api/app/agent-profile",body:t},{apiName:this.apiName,...o}),this.get=(t,o)=>this.restService.request({method:"GET",url:`/api/app/agent-profile/${t}`},{apiName:this.apiName,...o}),this.getByUserId=(t,o)=>this.restService.request({method:"GET",url:`/api/app/agent-profile/by-user-id/${t}`},{apiName:this.apiName,...o}),this.getByUserName=(t,o)=>this.restService.request({method:"GET",url:"/api/app/agent-profile/by-user-name",params:{userName:t}},{apiName:this.apiName,...o}),this.getList=t=>this.restService.request({method:"GET",url:"/api/app/agent-profile"},{apiName:this.apiName,...t}),this.getlByUserName=(t,o)=>this.restService.request({method:"GET",url:"/api/app/agent-profile/l-by-user-name",params:{userName:t}},{apiName:this.apiName,...o}),this.update=(t,o)=>this.restService.request({method:"PUT",url:"/api/app/agent-profile",body:t},{apiName:this.apiName,...o})}}return r.\u0275fac=function(d){return new(d||r)(i.LFG(e.vgb))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1398:(_,h,a)=>{a.d(h,{s:()=>p});var i=a(4650),e=a(7999);let p=(()=>{class r{constructor(d){this.restService=d,this.apiName="Default",this.getDashboadDataForDoctor=(t,o)=>this.restService.request({method:"GET",url:"/api/app/dashboard/dashboad-data-for-doctor",params:{doctorid:t}},{apiName:this.apiName,...o}),this.getDashboadDataForPatient=(t,o,m)=>this.restService.request({method:"GET",url:`/api/app/dashboard/dashboad-data-for-patient/${t}`,params:{role:o}},{apiName:this.apiName,...m}),this.getDashboardAppointmentListForDoctor=(t,o,m)=>this.restService.request({method:"GET",url:`/api/app/dashboard/dashboard-appointment-list-for-doctor/${t}`,params:{day:o}},{apiName:this.apiName,...m}),this.getDashboardAppointmentListForPatient=(t,o,m,v)=>this.restService.request({method:"GET",url:`/api/app/dashboard/dashboard-appointment-list-for-patient/${t}`,params:{role:o,day:m}},{apiName:this.apiName,...v})}}return r.\u0275fac=function(d){return new(d||r)(i.LFG(e.vgb))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6153:(_,h,a)=>{a.d(h,{R:()=>p});var i=a(4650),e=a(7999);let p=(()=>{class r{constructor(d){this.restService=d,this.apiName="Default",this.create=(t,o)=>this.restService.request({method:"POST",url:"/api/app/degree",body:t},{apiName:this.apiName,...o}),this.get=(t,o)=>this.restService.request({method:"GET",url:`/api/app/degree/${t}`},{apiName:this.apiName,...o}),this.getList=t=>this.restService.request({method:"GET",url:"/api/app/degree"},{apiName:this.apiName,...t}),this.update=(t,o)=>this.restService.request({method:"PUT",url:"/api/app/degree",body:t},{apiName:this.apiName,...o})}}return r.\u0275fac=function(d){return new(d||r)(i.LFG(e.vgb))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1941:(_,h,a)=>{a.d(h,{g:()=>p});var i=a(4650),e=a(6895);let p=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-dashboard-statisticscard"]],inputs:{details:"details"},decls:10,vars:5,consts:[[1,"flex","gap-4","cursor-pointer","group","justify-between","bg-white","px-5","py-3","items-center","rounded-lg","border-[1px]","max-w-full","shadow-2xl","shadow-blue-400/20"],[1,""],[1,"font-medium","transition-all","duration-100"],[1,"dashbord-heading-text","text-[24px]"],[1,"text-[14px]","font-normal","text-green-700"],[1,"group-hover:scale-105","transition-all","duration-100","w-[50px]","h-[50px]","shadow-xl","text-center","border-radius-md","bg-gradient-to-r","flex","items-center","justify-center","from-cyan-500","to-blue-500","rounded-lg"],[1,"fa-solid","fa-bed-pulse","box-shado","text-blue-50","text-[24px]"]],template:function(d,t){1&d&&(i.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),i._uU(3),i.qZA(),i.TgZ(4,"h1",3),i._uU(5),i.ALo(6,"currency"),i._UZ(7,"span",4),i.qZA()(),i.TgZ(8,"div",5),i._UZ(9,"i",6),i.qZA()()),2&d&&(i.xp6(3),i.Oqu(t.details.title),i.xp6(2),i.Oqu(t.details.currency?i.xi3(6,2,t.details.data,"BDT "):t.details.data))},dependencies:[e.H9]}),r})()},2356:(_,h,a)=>{a.d(h,{B:()=>p});var i=a(6895),e=a(4650);let p=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[i.ez]}),r})()},8047:(_,h,a)=>{a.d(h,{q:()=>f});var i=a(9229),e=a(4650),p=a(629),r=a(5412),u=a(5817),d=a(2381),t=a(6895);function o(c,n){if(1&c){const s=e.EpF();e.TgZ(0,"tr",12)(1,"td",10),e._uU(2),e.qZA(),e.TgZ(3,"td",10),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td",10),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td",10)(10,"span",13),e.NdJ("click",function(){const D=e.CHM(s).$implicit,b=e.oxw(2);return e.KtG(b.openPdfDialog(D.id))}),e._uU(11,"View"),e.qZA()(),e.TgZ(12,"td",10),e._uU(13),e.ALo(14,"date"),e.qZA(),e.TgZ(15,"td",10),e._uU(16),e.qZA()()}if(2&c){const s=n.$implicit;e.xp6(2),e.hij(" Dr. ",s.doctorName," "),e.xp6(2),e.hij(" ",e.lcZ(5,5,s.prescriptionDate)," "),e.xp6(3),e.hij(" ",e.lcZ(8,7,s.appointmentDate)," "),e.xp6(6),e.hij(" ",e.lcZ(14,9,s.followupDate)," "),e.xp6(3),e.hij(" ",s.advice," ")}}function m(c,n){if(1&c&&(e.TgZ(0,"div",6)(1,"table",7)(2,"thead",8)(3,"tr")(4,"th",9),e._uU(5," Doctor's Name "),e.qZA(),e.TgZ(6,"th",9),e._uU(7," Prescription Date "),e.qZA(),e.TgZ(8,"td",10),e._uU(9," Appointment Date "),e.qZA(),e.TgZ(10,"th",9),e._uU(11," Prescription "),e.qZA(),e.TgZ(12,"td",10),e._uU(13," Followup Date "),e.qZA(),e.TgZ(14,"th",9),e._uU(15," Advice "),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,o,17,11,"tr",11),e.qZA()()()),2&c){const s=e.oxw();e.xp6(17),e.Q6J("ngForOf",s.prescriptionListDetails)}}function v(c,n){if(1&c&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&c){const s=e.oxw();e.xp6(1),e.hij(" ",s.isLoading.message," ")}}let f=(()=>{class c{constructor(s,l,g,D){this.NormalAuth=s,this.dialog=l,this.PrescriptionMasterService=g,this.TosterService=D,this.isLoading={status:!1,message:""}}ngOnInit(){this.isLoading={status:!0,message:"Data is loading..."};let s=this.NormalAuth.authInfo();try{this.PrescriptionMasterService.getPrescriptionMasterListByPatientId(s.id).subscribe({next:l=>{this.prescriptionListDetails=l,this.isLoading={status:!1,message:""}},error:l=>{this.TosterService.customToast("Someting went wrong while getting data!","error"),this.isLoading={status:!1,message:""}}})}catch{this.isLoading={status:!1,message:""}}}openPdfDialog(s){this.dialog.open(i.P,{minWidth:"820px",maxWidth:"100%",height:"1000px",data:{prescriptionId:s}})}}return c.\u0275fac=function(s){return new(s||c)(e.Y36(p.e),e.Y36(r.uw),e.Y36(u.c),e.Y36(d.G))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-prescriptions"]],decls:6,vars:2,consts:[[1,"overflow-hidden","doctor-dashboard_midcontent_container","w-ful"],[1,"flex","items-center","justify-left"],[1,"w-full","h-screen","bg-white"],[1,"relative","overflow-x-auto","sm:rounded-lg","px-8","py-6"],["class","px-4",4,"ngIf"],["class","flex w-full h-[300px] justify-center items-center",4,"ngIf"],[1,"px-4"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","dark:text-gray-400","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3"],[1,"px-6","py-4"],["class","bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","hover:bg-gray-50","dark:hover:bg-gray-600"],[1,"py-1","px-4","border-secondary-dark/10","border-[1px]","bg-secondary-light","text-primary","rounded-md","cursor-pointer",3,"click"],[1,"flex","w-full","h-[300px]","justify-center","items-center"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,m,18,1,"div",4),e.YNc(5,v,2,1,"div",5),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("ngIf",!l.isLoading.status),e.xp6(1),e.Q6J("ngIf",l.isLoading.status))},dependencies:[t.sg,t.O5,t.uU]}),c})()},1936:(_,h,a)=>{a.d(h,{f:()=>r});var i=a(1135),e=a(4650),p=a(2339);let r=(()=>{class u{constructor(t){this.DoctorProfileService=t,this.doctorsList=new i.X([]),this.currentlyOnlineDoctor=new i.X([])}getDoctorListData(){return this.doctorsList.asObservable()}getCurrentlyOnlineDoctorData(){return this.currentlyOnlineDoctor.asObservable()}sendDoctorListData(t){this.doctorsList.next(t)}sendCurrentlyOnlineDoctorData(t){this.currentlyOnlineDoctor.next(t)}getAllDoctorList(){return this.DoctorProfileService.getList().subscribe(t=>{this.sendDoctorListData(t)}),this.getDoctorListData()}getCurrentlyOnlineDoctorList(){return this.DoctorProfileService.getCurrentlyOnlineDoctorList().subscribe(t=>{this.sendCurrentlyOnlineDoctorData(t)}),this.getCurrentlyOnlineDoctorData()}}return u.\u0275fac=function(t){return new(t||u)(e.LFG(p.K))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},534:(_,h,a)=>{a.d(h,{h:()=>i});const i=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Congo-Brazzaville)","Costa Rica","Croatia","Cuba","Cyprus","Czechia (Czech Republic)","Democratic Republic of the Congo (Congo-Kinshasa)","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (Timor-Leste)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (formerly Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia (formerly Macedonia)","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]}}]);