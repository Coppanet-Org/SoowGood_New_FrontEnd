"use strict";(self.webpackChunksoowgood_v2=self.webpackChunksoowgood_v2||[]).push([[2260],{6516:(T,b,p)=>{p.d(b,{Vn:()=>d,Is:()=>u,vs:()=>P,Y0:()=>g,UE:()=>v,Ix:()=>I});var c=p(7999),s=(()=>{return(t=s||(s={}))[t.Paid=1]="Paid",t[t.Due=2]="Due",t[t.FailedOrCancelled=3]="FailedOrCancelled",s;var t})();(0,c.Uoq)(s);var m=(()=>{return(t=m||(m={}))[t.Pending=1]="Pending",t[t.Confirmed=2]="Confirmed",t[t.InProgress=3]="InProgress",t[t.Completed=4]="Completed",t[t.Cancelled=5]="Cancelled",t[t.Failed=6]="Failed",m;var t})();(0,c.Uoq)(m);var d=(()=>{return(t=d||(d={}))[t.New=1]="New",t[t.Followup=2]="Followup",t[t.ReportShow=3]="ReportShow",t[t.Emargency=4]="Emargency",d;var t})();(0,c.Uoq)(d);var o=(()=>{return(t=o||(o={}))[t.ProfilePicture=1]="ProfilePicture",t[t.DoctorDegreeDoc=2]="DoctorDegreeDoc",t[t.DoctIdentityDoc=3]="DoctIdentityDoc",t[t.DoctorSpecialityDoc=4]="DoctorSpecialityDoc",t[t.Prescription=5]="Prescription",t[t.PatientPreviousDocuments=6]="PatientPreviousDocuments",o;var t})();(0,c.Uoq)(o);var u=(()=>{return(t=u||(u={}))[t.Chamber=1]="Chamber",t[t.Online=2]="Online",t[t.PhysicalVisit=3]="PhysicalVisit",t[t.OnDemand=4]="OnDemand",t[t.OnlineRT=5]="OnlineRT",u;var t})();(0,c.Uoq)(u);var P=(()=>{return(t=P||(P={}))[t.Dr=1]="Dr",t[t.AsstProfDr=2]="AsstProfDr",t[t.AssocProfDr=3]="AssocProfDr",t[t.ProfDr=4]="ProfDr",P;var t})();(0,c.Uoq)(P);var _=(()=>{return(t=_||(_={}))[t.Doctor=1]="Doctor",t[t.Agent=2]="Agent",t[t.Patient=3]="Patient",t[t.Hospital=4]="Hospital",_;var t})();(0,c.Uoq)(_);var g=(()=>{return(t=g||(g={}))[t.Male=1]="Male",t[t.Female=2]="Female",t[t.Others=3]="Others",g;var t})();(0,c.Uoq)(g);var v=(()=>{return(t=v||(v={}))[t.Single=1]="Single",t[t.Maried=2]="Maried",v;var t})();(0,c.Uoq)(v);var Z=(()=>{return(t=Z||(Z={}))[t.New=0]="New",t[t.Send=1]="Send",t[t.Varified=2]="Varified",t[t.Cancel=3]="Cancel",t[t.TimeExpired=4]="TimeExpired",Z;var t})();(0,c.Uoq)(Z);var I=(()=>{return(t=I||(I={}))[t.Regular=1]="Regular",t[t.Occasional=2]="Occasional",I;var t})();(0,c.Uoq)(I)},9466:(T,b,p)=>{p.d(b,{H:()=>N});var c=p(4650),s=p(7999);let N=(()=>{class m{constructor(d){this.restService=d,this.apiName="Default",this.cancellAppointment=(n,o,r,u)=>this.restService.request({method:"POST",url:`/api/app/appointment/cancell-appointment/${n}`,params:{cancelByid:o,cancelByRole:r}},{apiName:this.apiName,...u}),this.create=(n,o)=>this.restService.request({method:"POST",url:"/api/app/appointment",body:n},{apiName:this.apiName,...o}),this.get=(n,o)=>this.restService.request({method:"GET",url:`/api/app/appointment/${n}`},{apiName:this.apiName,...o}),this.getAppCountByRealTimeConsultancy=(n,o)=>this.restService.request({method:"GET",url:"/api/app/appointment/app-count-by-real-time-consultancy",params:{aptDate:n}},{apiName:this.apiName,...o}),this.getAppCountByScheduleIdSessionId=(n,o,r)=>this.restService.request({method:"GET",url:"/api/app/appointment/app-count-by-schedule-id-session-id",params:{scheduleId:n,sessionId:o}},{apiName:this.apiName,...r}),this.getAppointmentCountForDoctorWithSearchFilter=(n,o,r)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-count-for-doctor-with-search-filter/${n}`,params:{name:o.name,consultancyType:o.consultancyType,specialityId:o.specialityId,specializationId:o.specializationId,appointmentStatus:o.appointmentStatus,fromDate:o.fromDate,toDate:o.toDate,isCurrentOnline:o.isCurrentOnline}},{apiName:this.apiName,...r}),this.getAppointmentCountForPatientWithSearchFilter=(n,o,r,u)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-count-for-patient-with-search-filter/${n}`,params:{role:o,name:r.name,consultancyType:r.consultancyType,specialityId:r.specialityId,specializationId:r.specializationId,appointmentStatus:r.appointmentStatus,fromDate:r.fromDate,toDate:r.toDate,isCurrentOnline:r.isCurrentOnline}},{apiName:this.apiName,...u}),this.getAppointmentListByDoctorId=(n,o)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-list-by-doctor-id/${n}`},{apiName:this.apiName,...o}),this.getAppointmentListByPatientId=(n,o,r)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-list-by-patient-id/${n}`,params:{role:o}},{apiName:this.apiName,...r}),this.getAppointmentListForDoctorWithSearchFilter=(n,o,r,u)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-list-for-doctor-with-search-filter/${n}`,params:{name:o.name,consultancyType:o.consultancyType,specialityId:o.specialityId,specializationId:o.specializationId,appointmentStatus:o.appointmentStatus,fromDate:o.fromDate,toDate:o.toDate,isCurrentOnline:o.isCurrentOnline,offset:r.offset,limit:r.limit,pageNo:r.pageNo,pageSize:r.pageSize,sortBy:r.sortBy,sortOrder:r.sortOrder,isDesc:r.isDesc}},{apiName:this.apiName,...u}),this.getAppointmentListForPatientWithSearchFilter=(n,o,r,u,S)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-list-for-patient-with-search-filter/${n}`,params:{role:o,name:r.name,consultancyType:r.consultancyType,specialityId:r.specialityId,specializationId:r.specializationId,appointmentStatus:r.appointmentStatus,fromDate:r.fromDate,toDate:r.toDate,isCurrentOnline:r.isCurrentOnline,offset:u.offset,limit:u.limit,pageNo:u.pageNo,pageSize:u.pageSize,sortBy:u.sortBy,sortOrder:u.sortOrder,isDesc:u.isDesc}},{apiName:this.apiName,...S}),this.getAppointmentListWithSearchFilter=(n,o,r,u,S,P,U,_,A)=>this.restService.request({method:"GET",url:`/api/app/appointment/appointment-list-with-search-filter/${n}`,params:{name:o,consultancy:r,fromDate:u,toDate:S,aptStatus:P,skipValue:U,currentLimit:_}},{apiName:this.apiName,...A}),this.getLeftBookingCountBySessionIdAndScheduleId=(n,o,r)=>this.restService.request({method:"GET",url:"/api/app/appointment/left-booking-count",params:{sessionId:n,scheduleId:o}},{apiName:this.apiName,...r}),this.getList=n=>this.restService.request({method:"GET",url:"/api/app/appointment"},{apiName:this.apiName,...n}),this.getListAppointmentListByAdmin=n=>this.restService.request({method:"GET",url:"/api/app/appointment/appointment-list-by-admin"},{apiName:this.apiName,...n}),this.getPatientListByDoctorId=(n,o)=>this.restService.request({method:"GET",url:`/api/app/appointment/patient-list-by-doctor-id/${n}`},{apiName:this.apiName,...o}),this.getSearchedPatientListByDoctorId=(n,o,r)=>this.restService.request({method:"GET",url:`/api/app/appointment/searched-patient-list-by-doctor-id/${n}`,params:{name:o}},{apiName:this.apiName,...r}),this.update=(n,o)=>this.restService.request({method:"PUT",url:"/api/app/appointment",body:n},{apiName:this.apiName,...o}),this.updateAppointmentPaymentStatus=(n,o,r)=>this.restService.request({method:"PUT",url:`/api/app/appointment/appointment-payment-status/${o}`,params:{appCode:n}},{apiName:this.apiName,...r}),this.updateCallConsultationAppointment=(n,o)=>this.restService.request({method:"PUT",url:"/api/app/appointment/call-consultation-appointment",params:{appCode:n}},{apiName:this.apiName,...o}),this.testAcTokenByInput=(n,o)=>this.restService.request({method:"POST",responseType:"text",url:"/api/app/appointment/test-ac-token",body:n},{apiName:this.apiName,...o}),this.testBuildTokenWithUIDByInput=(n,o)=>this.restService.request({method:"POST",responseType:"text",url:"/api/app/appointment/test-build-token-with-uID",body:n},{apiName:this.apiName,...o}),this.testBuildTokenWithUserAccountBy_appIdAnd_appCertificateAnd_channelNameAnd_account=(n,o,r,u,S)=>this.restService.request({method:"POST",responseType:"text",url:`/api/app/appointment/test-build-token-with-user-account/${n}`,params:{_appCertificate:o,_channelName:r,_account:u}},{apiName:this.apiName,...S})}}return m.\u0275fac=function(d){return new(d||m)(c.LFG(s.vgb))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},7132:(T,b,p)=>{p.d(b,{t:()=>N});var c=p(6895),s=p(4650);let N=(()=>{class m{}return m.\u0275fac=function(d){return new(d||m)},m.\u0275mod=s.oAB({type:m}),m.\u0275inj=s.cJS({imports:[c.ez]}),m})()},2462:(T,b,p)=>{p.d(b,{p:()=>$});var c=p(5649),s=p(4006),N=p(1873),m=p(6516),e=p(4650),d=p(2381),n=p(427),o=p(6084),r=p(629),u=p(6895);function S(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Please enter patient name. "),e.qZA())}function P(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Patient name should contain only letters and numbers at the end (optional). "),e.qZA())}function U(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Patient name should be at least 3 characters long "),e.qZA())}function _(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Please enter patient age. "),e.qZA())}function A(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Age should be a number. "),e.qZA())}function g(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," You must enter a valid mobile number! "),e.qZA())}function x(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," Mobile number should have exactly 11 digits and follow the Bangladeshi format! "),e.qZA())}function v(l,f){1&l&&(e.TgZ(0,"p",35),e._uU(1," You must enter a valid email! "),e.qZA())}function B(l,f){if(1&l&&(e.TgZ(0,"option",36),e._uU(1),e.qZA()),2&l){const a=f.$implicit;e.Q6J("value",a.id),e.xp6(1),e.Oqu(a.name)}}function Z(l,f){1&l&&(e.TgZ(0,"p",37),e._uU(1," Please select gender! "),e.qZA())}function M(l,f){1&l&&(e.TgZ(0,"p",37),e._uU(1," Please select blood group! "),e.qZA())}let I=(()=>{class l{constructor(a,i,h,y,C){this.fb=a,this.TosterService=i,this.UserinfoStateService=h,this.PatientProfileService=y,this.NormalAuth=C,this.inputConfigs=c.cv,this.isLoading=!1,this.formSubmitted=!1,this.btnLoader=!1,this.genderList=[]}ngOnInit(){let a=this.NormalAuth.authInfo();this.authInfo=a,this.genderList=N.v.getEnumList(m.Y0),this.loadForm(),a&&(this.createPatientForm.get("creatorEntityId")?.setValue(a.id),this.createPatientForm.get("createdBy")?.setValue(a.fullName))}loadForm(){this.createPatientForm=this.fb.group({patientName:["",s.kI.required],age:["",s.kI.required],gender:["0",s.kI.required],bloodGroup:["0",s.kI.required],patientMobileNo:["",s.kI.required],patientEmail:[""],createdBy:["",s.kI.required],creatorEntityId:["",s.kI.required],creatorRole:["patient"==this.authInfo.userType?"patient":"agent",s.kI.required]})}createNewPatient(){if(this.formSubmitted=!0,console.log(this.createPatientForm.value),this.createPatientForm.valid)try{this.btnLoader=!0,this.PatientProfileService.create(this.createPatientForm.value).subscribe(a=>{a.patientCode&&a.patientMobileNo&&this.PatientProfileService.getByPhoneAndCode(a.patientCode,a.patientMobileNo).subscribe({next:i=>{console.log(i),this.UserinfoStateService.getUserPatientInfo(i.id,this.authInfo.userType),this.TosterService.customToast("Your patient is created!","success"),this.btnLoader=!1,this.UserinfoStateService.getUserPatientInfo(i.id,"patient")},error:i=>{this.TosterService.customToast("Something went wrong!","error"),this.btnLoader=!1}})})}catch{this.TosterService.customToast("Something wrong! Please retry","error")}else this.TosterService.customToast("Please field all the required fields","warning")}}return l.\u0275fac=function(a){return new(a||l)(e.Y36(s.qu),e.Y36(d.G),e.Y36(n.Z),e.Y36(o.j),e.Y36(r.e))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-create-patient"]],decls:72,vars:14,consts:[[1,""],[1,"bg-white"],[1,"pl-10","pt-4","pb-4","border-b-gray-300","border-[1px]"],[1,"font-Roboto","text-[22px]","font-semibold"],[3,"formGroup"],[1,"px-10","py-6","grid","grid-cols-1","md:grid-cols-2","gap-5"],[1,"mb-5"],["for","name",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","formControlName","patientName","type","text","name","patientName","id","patientName","placeholder","Full Name",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["class","text-red-600 text-sm",4,"ngIf"],[1,"w-full"],["for","age",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","maxlength","3","minlength","1","formControlName","age","id","age","placeholder","Age",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","patientMobileNo",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","maxlength","11","minlength","11","formControlName","patientMobileNo","id","patientMobileNo","placeholder","Patient Mobile No",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","patientEmail",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","formControlName","patientEmail","id","patientEmail","placeholder","Patient Mobile No",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","date",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["formControlName","gender","name","gender","id","gender",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-2","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["value","0",1,"font-semibold","text-gray-500"],[3,"value",4,"ngFor","ngForOf"],["class","text-[14px] text-red-600",4,"ngIf"],["for","bloodGroup",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["formControlName","bloodGroup","name","bloodGroup","id","bloodGroup",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-2","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["value","A+",1,"font-semibold","text-gray-500"],["value","A-",1,"font-semibold","text-gray-500"],["value","B+",1,"font-semibold","text-gray-500"],["value","B-",1,"font-semibold","text-gray-500"],["value","o+",1,"font-semibold","text-gray-500"],["value","o-",1,"font-semibold","text-gray-500"],["value","Ab+",1,"font-semibold","text-gray-500"],["value","Ab-",1,"font-semibold","text-gray-500"],["value","others",1,"font-semibold","text-gray-500"],[1,"px-10","pb-10"],[1,"btn-secondary",3,"disabled","click"],[1,"text-red-600","text-sm"],[3,"value"],[1,"text-[14px]","text-red-600"]],template:function(a,i){if(1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Patient Information"),e.qZA()(),e.TgZ(5,"form",4)(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9," Full Name "),e.qZA(),e._UZ(10,"input",8),e.YNc(11,S,2,0,"p",9),e.YNc(12,P,2,0,"p",9),e.YNc(13,U,2,0,"p",9),e.qZA(),e.TgZ(14,"div",10)(15,"div",6)(16,"label",11),e._uU(17," Age "),e.qZA(),e._UZ(18,"input",12),e.YNc(19,_,2,0,"p",9),e.YNc(20,A,2,0,"p",9),e.qZA()(),e.TgZ(21,"div",10)(22,"div",6)(23,"label",13),e._uU(24," Patient Mobile No "),e.qZA(),e._UZ(25,"input",14),e.YNc(26,g,2,0,"p",9),e.YNc(27,x,2,0,"p",9),e.qZA()(),e.TgZ(28,"div",10)(29,"div",6)(30,"label",15),e._uU(31," Patient Eamil "),e.qZA(),e._UZ(32,"input",16),e.YNc(33,v,2,0,"p",9),e.qZA()(),e.TgZ(34,"div",10)(35,"div",6)(36,"label",17),e._uU(37," Select gender "),e.qZA(),e.TgZ(38,"select",18)(39,"option",19),e._uU(40,"Select gender "),e.qZA(),e.YNc(41,B,2,2,"option",20),e.qZA(),e.YNc(42,Z,2,0,"p",21),e.qZA()(),e.TgZ(43,"div",10)(44,"div",6)(45,"label",22),e._uU(46," Select blood group "),e.qZA(),e.TgZ(47,"select",23)(48,"option",19),e._uU(49,"Select blood group "),e.qZA(),e.TgZ(50,"option",24),e._uU(51,"A+ "),e.qZA(),e.TgZ(52,"option",25),e._uU(53,"A- "),e.qZA(),e.TgZ(54,"option",26),e._uU(55,"B+ "),e.qZA(),e.TgZ(56,"option",27),e._uU(57,"B- "),e.qZA(),e.TgZ(58,"option",28),e._uU(59,"o+ "),e.qZA(),e.TgZ(60,"option",29),e._uU(61,"o- "),e.qZA(),e.TgZ(62,"option",30),e._uU(63,"Ab+ "),e.qZA(),e.TgZ(64,"option",31),e._uU(65,"Ab- "),e.qZA(),e.TgZ(66,"option",32),e._uU(67,"others "),e.qZA()(),e.YNc(68,M,2,0,"p",21),e.qZA()()()(),e.TgZ(69,"div",33)(70,"button",34),e.NdJ("click",function(){return i.createNewPatient()}),e._uU(71),e.qZA()()()()),2&a){let h,y,C,D,E,q,O,F,w,L;e.xp6(5),e.Q6J("formGroup",i.createPatientForm),e.xp6(6),e.Q6J("ngIf",i.formSubmitted&&(null==(h=i.createPatientForm.get("patientName"))?null:h.touched)&&(null==(h=i.createPatientForm.get("patientName"))?null:h.hasError("required"))),e.xp6(1),e.Q6J("ngIf",i.formSubmitted&&(null==(y=i.createPatientForm.get("patientName"))?null:y.touched)&&(null==(y=i.createPatientForm.get("patientName"))?null:y.hasError("pattern"))),e.xp6(1),e.Q6J("ngIf",i.formSubmitted&&(null==(C=i.createPatientForm.get("patientName"))?null:C.touched)&&(null==(C=i.createPatientForm.get("patientName"))?null:C.hasError("invalidName"))),e.xp6(6),e.Q6J("ngIf",i.formSubmitted&&(null==(D=i.createPatientForm.get("age"))?null:D.touched)&&(null==(D=i.createPatientForm.get("age"))?null:D.hasError("required"))),e.xp6(1),e.Q6J("ngIf",i.formSubmitted&&(null==(E=i.createPatientForm.get("age"))?null:E.touched)&&(null==(E=i.createPatientForm.get("age"))?null:E.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",i.formSubmitted&&(null==(q=i.createPatientForm.get("patientMobileNo"))?null:q.touched)&&(null==(q=i.createPatientForm.get("patientMobileNo"))?null:q.hasError("required"))),e.xp6(1),e.Q6J("ngIf",i.formSubmitted&&(null==(O=i.createPatientForm.get("patientMobileNo"))?null:O.touched)&&(null==(O=i.createPatientForm.get("patientMobileNo"))?null:O.hasError("pattern"))),e.xp6(6),e.Q6J("ngIf",i.formSubmitted&&(null==(F=i.createPatientForm.get("patientEmail"))?null:F.touched)&&(null==(F=i.createPatientForm.get("patientEmail"))?null:F.hasError("required"))),e.xp6(8),e.Q6J("ngForOf",i.genderList),e.xp6(1),e.Q6J("ngIf",i.formSubmitted&&(null==(w=i.createPatientForm.get("gender"))?null:w.touched)&&"0"===(null==(w=i.createPatientForm.get("gender"))?null:w.value)),e.xp6(26),e.Q6J("ngIf",i.formSubmitted&&(null==(L=i.createPatientForm.get("bloodGroup"))?null:L.touched)&&"0"===(null==(L=i.createPatientForm.get("bloodGroup"))?null:L.value)),e.xp6(2),e.Q6J("disabled",i.btnLoader),e.xp6(1),e.Oqu(i.btnLoader?"Loading...":"Submit")}},dependencies:[u.sg,u.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u]}),l})();var Y=p(3900),t=p(4004),R=p(9646),k=p(2510),G=p(9466),J=p(5412);function z(l,f){if(1&l){const a=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(a);const h=e.oxw();return e.KtG(h.addNewPatient())}),e._UZ(1,"i",19),e._uU(2,"Add New Patient "),e.qZA()}}function W(l,f){if(1&l){const a=e.EpF();e.TgZ(0,"tr",24)(1,"td",25),e._uU(2),e.qZA(),e.TgZ(3,"td",25),e._uU(4),e.qZA(),e.TgZ(5,"td",25),e._uU(6),e.qZA(),e.TgZ(7,"td",25),e._uU(8),e.qZA(),e.TgZ(9,"td",25),e._uU(10),e.qZA(),e.TgZ(11,"td",25)(12,"span",26),e.NdJ("click",function(){const y=e.CHM(a).$implicit,C=e.oxw(2);return e.KtG(C.goToPatientProfile(y))}),e._uU(13," View Profile "),e.qZA()()()}if(2&l){const a=f.$implicit,i=f.index;e.xp6(2),e.hij(" ",i+1," "),e.xp6(2),e.hij(" ",a.patientName," "),e.xp6(2),e.hij(" ",a.patientMobileNo," "),e.xp6(2),e.hij(" ",a.patientEmail," "),e.xp6(2),e.hij(" ",a.patientLocation?a.patientLocation:"---"," ")}}function Q(l,f){if(1&l&&(e.TgZ(0,"table",20)(1,"thead",21)(2,"tr")(3,"th",22),e._uU(4,"S.L No"),e.qZA(),e.TgZ(5,"th",22),e._uU(6,"Patient's Name"),e.qZA(),e.TgZ(7,"th",22),e._uU(8,"Mobile No."),e.qZA(),e.TgZ(9,"th",22),e._uU(10,"Email"),e.qZA(),e.TgZ(11,"th",22),e._uU(12,"Location"),e.qZA(),e.TgZ(13,"th",22),e._uU(14,"Profile"),e.qZA()()(),e.TgZ(15,"tbody"),e.YNc(16,W,14,5,"tr",23),e.qZA()()),2&l){const a=e.oxw();e.xp6(16),e.Q6J("ngForOf",a.patientList)}}function j(l,f){1&l&&(e.TgZ(0,"div",27),e._uU(1," Data is loading ... "),e.qZA())}let $=(()=>{class l{constructor(a,i,h,y,C,D){this.Router=a,this.AppointmentService=i,this.NormalAuth=h,this.dialog=y,this.PatientProfileService=C,this.UserinfoStateService=D,this.patientLoader=!1}ngOnInit(){let a=this.NormalAuth.authInfo();if(a&&this.UserinfoStateService.getUserPatientInfo(a.id,a.userType),this.userInfo=a,a.id){this.patientLoader=!0;try{"doctor"===a.userType?this.AppointmentService.getPatientListByDoctorId(a.id).subscribe(i=>{this.patientList=i,this.patientLoader=!1}):"patient"===a.userType||"agent"===a.userType?this.UserinfoStateService.getData().pipe((0,Y.w)(i=>i?this.UserinfoStateService.getUserPatientData().pipe((0,t.U)(h=>h)):(0,R.of)([]))).subscribe(i=>{this.patientList=i,this.patientLoader=!1}):console.log("Data Nai")}catch(i){console.log(i)}}}goToPatientProfile(a){"doctor"===this.userInfo.userType?this.Router.navigate(["/doctor/patients/patient-details/",a.patientProfileId]):"patient"===this.userInfo.userType?this.Router.navigate(["/patient/my-patient/patient-details/",a.id]):"agent"===this.userInfo.userType&&this.Router.navigate(["/agent/patients/patient-details/",a.id])}addNewPatient(){this.dialog.open(I,{width:"40vw"}).afterClosed().subscribe(i=>{})}onSearchChange(a){}}return l.\u0275fac=function(a){return new(a||l)(e.Y36(k.F0),e.Y36(G.H),e.Y36(r.e),e.Y36(J.uw),e.Y36(o.j),e.Y36(n.Z))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-public-patients"]],decls:19,vars:3,consts:[[1,"doctor-dashboard_midcontent_container","w-full"],[1,"flex","items-center","justify-left","border-[1px]"],[1,"w-full","h-full","bg-white"],[1,"relative","overflow-x-auto","sm:rounded-lg"],[1,"bg-slate-200/20","flex","gap-4","items-center","justify-between","border-b-[1px]","px-8","py-5"],[1,"flex","gap-5"],[1,"dashbord-heading-text","text-[22px]"],[1,"fa-solid","fa-building-columns","mr-1"],["class","btn-secondary-light border-[1px] border-secondary-dark/50",3,"click",4,"ngIf"],[1,"flex"],[1,"py-2","h-fit","px-4","rounded-md","bg-gray-400/10","flex","items-center","border-gray-200","border-[1px]"],["placeholder","Search patient...",1,"outline-none","bg-transparent","font-poppins","w-[400px]","text-black/80","placeholder:text-black/50",3,"change"],[1,"bg-transparent"],[1,"fa-solid","fa-magnifying-glass","text-gray-500"],[1,"w-full","flex","h-screen","flex-wrap","justify-evenly","overflow-y-scroll","no-scrollbar","px-5","pb-[50px]"],[1,"px-4","py-3","w-full"],["class","w-full text-sm text-left rounded-lg text-gray-500 dark:text-gray-400 border-[1px]",4,"ngIf"],["class","w-full h-[300px] flex justify-center items-center",4,"ngIf"],[1,"btn-secondary-light","border-[1px]","border-secondary-dark/50",3,"click"],[1,"fa-solid","fa-plus","mr-2"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","dark:text-gray-400","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5","dark:bg-gray-700","dark:text-gray-400"],["scope","col",1,"px-6","py-3"],["class","bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600",4,"ngFor","ngForOf"],[1,"bg-white","dark:bg-gray-800","hover:bg-gray-50","dark:hover:bg-gray-600"],[1,"px-6","py-4"],[1,"bg-blue-100","cursor-pointer","text-blue-800","text-xs","font-medium","mr-2","px-2.5","py-1","rounded","dark:bg-blue-900","dark:text-blue-300",3,"click"],[1,"w-full","h-[300px]","flex","justify-center","items-center"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),e._UZ(7,"i",7),e._uU(8,"My Patients "),e.qZA(),e.YNc(9,z,3,0,"button",8),e.qZA(),e.TgZ(10,"div",9)(11,"div",10)(12,"input",11),e.NdJ("change",function(y){return i.onSearchChange(y)}),e.qZA(),e.TgZ(13,"span",12),e._UZ(14,"i",13),e.qZA()()()(),e.TgZ(15,"div",14)(16,"div",15),e.YNc(17,Q,17,1,"table",16),e.YNc(18,j,2,0,"div",17),e.qZA()()()()()()),2&a&&(e.xp6(9),e.Q6J("ngIf","agent"===i.userInfo.userType||"patient"),e.xp6(8),e.Q6J("ngIf",!i.patientLoader),e.xp6(1),e.Q6J("ngIf",i.patientLoader))},dependencies:[u.sg,u.O5]}),l})()},2260:(T,b,p)=>{p.d(b,{c:()=>n});var c=p(6895),s=p(2462),N=p(7132),m=p(2510),e=p(4650);const d=[{path:"",component:s.p}];let n=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,m.Bz.forChild(d),N.t]}),o})()},1873:(T,b,p)=>{p.d(b,{v:()=>N});class c{constructor(){}static getNamesAndValues(e){return c.getNames(e).map(d=>({name:d,value:e[d]}))}static getNames(e){return Object.keys(e).filter(d=>"number"==typeof e[d]||e[d]===d||e[e[d]]?.toString()!==d)}static getValues(e){return c.getNames(e).map(d=>e[d])}}var s=p(4650);let N=(()=>{class m{static getEnumList(d){let n=[];return c.getNamesAndValues(d).forEach(r=>{let u={id:r.value.toString(),name:r.name};n.push(u)}),n}}return m.\u0275fac=function(d){return new(d||m)},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},5649:(T,b,p)=>{p.d(b,{Ap:()=>o,JK:()=>r,cv:()=>_,is:()=>A,ry:()=>P});var c=p(6516),s=p(1873);s.v.getEnumList(c.Is);const m=s.v.getEnumList(c.Y0),e=s.v.getEnumList(c.UE),d=s.v.getEnumList(c.vs),o=(s.v.getEnumList(c.Vn),[{label:"Your Title",inputId:"doctorTitle",defaultOption:"Select Title",options:d,formControlName:"doctorTitle",isSelect:!0,type:"select"},{label:"Full Name",inputId:"fullName",formControlName:"fullName",isSelect:!1,type:"text"},{label:"Email",inputId:"email",formControlName:"email",isSelect:!1,readonly:!0,type:"email"},{label:"Gender",inputId:"gender",formControlName:"gender",options:m,isSelect:!0,type:"select"},{label:"Martial Status",inputId:"maritalStatus",formControlName:"maritalStatus",options:e,isSelect:!0,type:"select"},{label:"Date of Birth",inputId:"dateOfBirth",formControlName:"dateOfBirth",isSelect:!1,type:"date"},{label:"Identity Number",inputId:"identityNumber",formControlName:"identityNumber",isSelect:!1,type:"number"},{label:"BMDC Reg Number",inputId:"bmdcRegNo",formControlName:"bmdcRegNo",isSelect:!1,type:"number"},{label:"BMDC Exp. Date",inputId:"bmdcRegExpiryDate",formControlName:"bmdcRegExpiryDate",isSelect:!1,type:"date"},{label:"Address",inputId:"address",formControlName:"address",isSelect:!1,type:"text"},{label:"Country",inputId:"country",formControlName:"country",isSelect:!1},{label:"City",inputId:"city",formControlName:"city",isSelect:!1,type:"text"},{label:"Zip Code",inputId:"zipCode",formControlName:"zipCode",isSelect:!1,type:"number"},{label:"Specialties",inputId:"specialityId",formControlName:"specialityId",isSelect:!1,type:"select"}]),r=[{label:"Full Name",inputId:"fullName",formControlName:"fullName",isSelect:!1,type:"text"},{label:"Email",inputId:"email",formControlName:"email",isSelect:!1,readonly:!0,type:"email"},{label:"Date of Birth",inputId:"dateOfBirth",formControlName:"dateOfBirth",isSelect:!1,type:"date"},{label:"Address",inputId:"address",formControlName:"address",isSelect:!1,type:"text"},{label:"Country",inputId:"country",formControlName:"country",isSelect:!1},{label:"City",inputId:"city",formControlName:"city",isSelect:!1,type:"text"},{label:"Zip Code",inputId:"zipCode",formControlName:"zipCode",isSelect:!1,type:"number"}],P=[{label:"Agent Name",inputId:"fullName",formControlName:"fullName",isSelect:!1,type:"text"},{label:"Agent Id",inputId:"agentCode",formControlName:"agentCode",isSelect:!1,type:"text"},{label:"Mobile",inputId:"mobileNo",formControlName:"mobileNo",isSelect:!1,type:"tel"},{label:"Agent Organization",inputId:"organizationName",formControlName:"organizationName",isSelect:!1,type:"text"},{label:"Email",inputId:"email",formControlName:"email",isSelect:!1,readonly:!0,type:"email"},{label:"Address",inputId:"address",formControlName:"address",isSelect:!1,type:"text"}],_=[{label:"Patient Name",inputId:"patientName",defaultOption:"Write patient name",formControlName:"patientName",isSelect:!1,type:"text"},{label:"Age",inputId:"age",formControlName:"age",isSelect:!1,type:"text"},{label:"Patient Mobile No",inputId:"patientMobileNo",formControlName:"patientMobileNo",isSelect:!1,type:"tel"},{label:"Gender",inputId:"gender",formControlName:"gender",options:m,isSelect:!0,type:"select"},{label:"Blood Group",inputId:"bloodGroup",formControlName:"bloodGroup",isSelect:!1,type:"text"}],A=g=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(g).getDay()]}}]);