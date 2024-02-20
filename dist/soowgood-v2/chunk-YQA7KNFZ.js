import{d as de}from"./chunk-MELX6YOY.js";import{a as pe}from"./chunk-QOS45KNY.js";import{b as I}from"./chunk-HT3LM57F.js";import{d as le,g as me}from"./chunk-EFF4UWHC.js";import{a as ne,c as re}from"./chunk-XTINLLUJ.js";import{e as oe,s as C,z as ae}from"./chunk-HL5HGHA3.js";import{a as E}from"./chunk-7LPMGZKA.js";import{A as te,C as ie,c as $,e as b,h as z,i as H,n as J,r as K,u as Q,v as W,w as X,x as Z,z as ee}from"./chunk-FSNV7SJ3.js";import{Ha as c,L as V,Ma as d,S as O,Vb as _,Wb as P,X as S,Xa as t,Y as q,Ya as e,Za as g,aa as w,ba as N,bb as T,cc as R,fb as h,hb as y,i as D,m as G,tb as i,uc as U,vb as f,xc as Y,ya as m,za as s}from"./chunk-TXQBTV46.js";function ve(n,a){n&1&&(t(0,"p",36),i(1," Please enter patient name. "),e())}function Se(n,a){n&1&&(t(0,"p",36),i(1," Patient name should contain only letters and numbers at the end (optional). "),e())}function ye(n,a){n&1&&(t(0,"p",36),i(1," Patient name should be at least 3 characters long "),e())}function _e(n,a){n&1&&(t(0,"p",36),i(1," Please enter patient age. "),e())}function Pe(n,a){n&1&&(t(0,"p",36),i(1," Age should be a number. "),e())}function Ee(n,a){n&1&&(t(0,"p",36),i(1," You must enter a valid mobile number! "),e())}function Ce(n,a){n&1&&(t(0,"p",36),i(1," Mobile number should have exactly 11 digits and follow the Bangladeshi format! "),e())}function Ie(n,a){n&1&&(t(0,"p",36),i(1," You must enter a valid email! "),e())}function we(n,a){if(n&1&&(t(0,"option",37),i(1),e()),n&2){let p=a.$implicit;d("value",p.id),m(),f(" ",p.name," ")}}function Ne(n,a){n&1&&(t(0,"p",38),i(1," Please select gender! "),e())}function Te(n,a){n&1&&(t(0,"p",38),i(1," Please select blood group! "),e())}var ce=(()=>{let a=class a{constructor(o,l,r,u,x,v){this.fb=o,this.TosterService=l,this.UserinfoStateService=r,this.PatientProfileService=u,this.NormalAuth=x,this.dialogRef=v,this.inputConfigs=de,this.isLoading=!1,this.formSubmitted=!1,this.btnLoader=!1,this.genderList=[]}ngOnInit(){let o=this.NormalAuth.authInfo();this.authInfo=o,this.genderList=me.getEnumList(le),this.loadForm(),o&&(this.createPatientForm.get("creatorEntityId")?.setValue(o.id),this.createPatientForm.get("createdBy")?.setValue(o.fullName))}loadForm(){this.createPatientForm=this.fb.group({patientName:["",b.required],age:["",b.required],gender:["0",b.required],bloodGroup:["0",b.required],patientMobileNo:["",b.required],patientEmail:[""],createdBy:["",b.required],creatorEntityId:["",b.required],creatorRole:[this.authInfo.userType=="patient"?"patient":"agent",b.required]})}createNewPatient(){if(this.formSubmitted=!0,!this.createPatientForm.valid&&(this.createPatientForm.get("bloodGroup")?.value==="0"||this.createPatientForm.get("gender")?.value==="0")){this.TosterService.customToast("Please field all the required fields","warning");return}try{this.btnLoader=!0,this.PatientProfileService.create(this.createPatientForm.value).subscribe(o=>{o.patientCode&&o.patientMobileNo&&this.PatientProfileService.getByPhoneAndCode(o.patientCode,o.patientMobileNo).subscribe({next:l=>{console.log(l),this.TosterService.customToast("Your patient is created!","success"),this.btnLoader=!1,this.UserinfoStateService.getUserPatientInfo(this.authInfo.id,this.authInfo.userType),this.dialogRef.close()},error:l=>{this.TosterService.customToast("Something went wrong!","error"),this.btnLoader=!1}})})}catch{this.TosterService.customToast("Something wrong! Please retry","error"),this.btnLoader=!1}}};a.\u0275fac=function(l){return new(l||a)(s(ie),s(ae),s(I),s(C),s(E),s(ne))},a.\u0275cmp=S({type:a,selectors:[["app-create-patient"]],decls:74,vars:14,consts:[[1,""],[1,"bg-white"],[1,"pl-10","pt-4","pb-4","border-b-gray-300","border-[1px]"],[1,"font-Roboto","text-[22px]","font-semibold"],[3,"click"],[3,"formGroup"],[1,"px-10","py-6","grid","grid-cols-1","md:grid-cols-2","gap-5"],[1,"mb-5"],["for","name",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","formControlName","patientName","type","text","name","patientName","id","patientName","placeholder","Full Name",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["class","text-red-600 text-sm",4,"ngIf"],[1,"w-full"],["for","age",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","maxlength","3","minlength","1","formControlName","age","id","age","placeholder","Age",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","patientMobileNo",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","maxlength","11","formControlName","patientMobileNo","id","patientMobileNo","placeholder","Patient Mobile No",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","patientEmail",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["autocomplete","off","formControlName","patientEmail","id","patientEmail","placeholder","Patient Email",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-1.5","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["for","date",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["formControlName","gender","name","gender","id","gender",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-2","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["value","0",1,"font-semibold","text-gray-500"],[3,"value",4,"ngFor","ngForOf"],["class","text-[14px] text-red-600",4,"ngIf"],["for","bloodGroup",1,"mb-2","block","font-medium","text-[14px]","text-[#07074D]"],["formControlName","bloodGroup","name","bloodGroup","id","bloodGroup",1,"w-full","rounded-md","border","border-[#e0e0e0]","bg-white","py-2","px-3","text-base","font-normal","text-[14px]","text-[#6B7280]","outline-none","focus:border-[#6A64F1]","focus:shadow-md"],["value","A+",1,"font-semibold","text-gray-500"],["value","A-",1,"font-semibold","text-gray-500"],["value","B+",1,"font-semibold","text-gray-500"],["value","B-",1,"font-semibold","text-gray-500"],["value","O+",1,"font-semibold","text-gray-500"],["value","O-",1,"font-semibold","text-gray-500"],["value","AB+",1,"font-semibold","text-gray-500"],["value","AB-",1,"font-semibold","text-gray-500"],["value","others",1,"font-semibold","text-gray-500"],[1,"px-10","pb-10"],[1,"btn-secondary",3,"disabled","click"],[1,"text-red-600","text-sm"],[3,"value"],[1,"text-[14px]","text-red-600"]],template:function(l,r){if(l&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),i(4,"Patient Information"),e(),t(5,"span",4),h("click",function(){return r.dialogRef.close()}),i(6,"Close"),e()(),t(7,"form",5)(8,"div",6)(9,"div",7)(10,"label",8),i(11," Full Name "),e(),g(12,"input",9),c(13,ve,2,0,"p",10)(14,Se,2,0,"p",10)(15,ye,2,0,"p",10),e(),t(16,"div",11)(17,"div",7)(18,"label",12),i(19," Age "),e(),g(20,"input",13),c(21,_e,2,0,"p",10)(22,Pe,2,0,"p",10),e()(),t(23,"div",11)(24,"div",7)(25,"label",14),i(26," Patient Mobile No "),e(),g(27,"input",15),c(28,Ee,2,0,"p",10)(29,Ce,2,0,"p",10),e()(),t(30,"div",11)(31,"div",7)(32,"label",16),i(33," Patient Eamil "),e(),g(34,"input",17),c(35,Ie,2,0,"p",10),e()(),t(36,"div",11)(37,"div",7)(38,"label",18),i(39," Select gender "),e(),t(40,"select",19)(41,"option",20),i(42," Select gender "),e(),c(43,we,2,2,"option",21),e(),c(44,Ne,2,0,"p",22),e()(),t(45,"div",11)(46,"div",7)(47,"label",23),i(48," Select blood group "),e(),t(49,"select",24)(50,"option",20),i(51," Select blood group "),e(),t(52,"option",25),i(53,"A+"),e(),t(54,"option",26),i(55,"A-"),e(),t(56,"option",27),i(57,"B+"),e(),t(58,"option",28),i(59,"B-"),e(),t(60,"option",29),i(61,"O+"),e(),t(62,"option",30),i(63,"O-"),e(),t(64,"option",31),i(65," AB+ "),e(),t(66,"option",32),i(67," AB- "),e(),t(68,"option",33),i(69," others "),e()(),c(70,Te,2,0,"p",22),e()()()(),t(71,"div",34)(72,"button",35),h("click",function(){return r.createNewPatient()}),i(73),e()()()()),l&2){let u,x,v,F,A,L,M,k,B,j;m(7),d("formGroup",r.createPatientForm),m(6),d("ngIf",r.formSubmitted&&((u=r.createPatientForm.get("patientName"))==null?null:u.hasError("required"))),m(),d("ngIf",r.formSubmitted&&((x=r.createPatientForm.get("patientName"))==null?null:x.hasError("pattern"))),m(),d("ngIf",r.formSubmitted&&((v=r.createPatientForm.get("patientName"))==null?null:v.hasError("invalidName"))),m(6),d("ngIf",r.formSubmitted&&((F=r.createPatientForm.get("age"))==null?null:F.hasError("required"))),m(),d("ngIf",r.formSubmitted&&((A=r.createPatientForm.get("age"))==null?null:A.hasError("pattern"))),m(6),d("ngIf",r.formSubmitted&&((L=r.createPatientForm.get("patientMobileNo"))==null?null:L.hasError("required"))),m(),d("ngIf",r.formSubmitted&&((M=r.createPatientForm.get("patientMobileNo"))==null?null:M.hasError("pattern"))),m(6),d("ngIf",r.formSubmitted&&((k=r.createPatientForm.get("patientEmail"))==null?null:k.hasError("required"))),m(8),d("ngForOf",r.genderList),m(),d("ngIf",r.formSubmitted&&((B=r.createPatientForm.get("gender"))==null?null:B.value)==="0"),m(26),d("ngIf",r.formSubmitted&&((j=r.createPatientForm.get("bloodGroup"))==null?null:j.value)==="0"),m(2),d("disabled",r.btnLoader),m(),f(" ",r.btnLoader?"Loading...":"Submit"," ")}},dependencies:[_,P,J,X,Z,$,W,z,H,ee,te,K,Q]});let n=a;return n})();function Fe(n,a){if(n&1){let p=T();t(0,"button",18),h("click",function(){w(p);let l=y();return N(l.addNewPatient())}),g(1,"i",19),i(2,"Add New Patient "),e()}}function Ae(n,a){if(n&1){let p=T();t(0,"tr",24)(1,"td",25),i(2),e(),t(3,"td",25),i(4),e(),t(5,"td",25),i(6),e(),t(7,"td",25),i(8),e(),t(9,"td",25),i(10),e(),t(11,"td",25),i(12),e(),t(13,"td",25)(14,"span",26),h("click",function(){let r=w(p).$implicit,u=y(2);return N(u.goToPatientProfile(r))}),i(15," View Profile "),e()()()}if(n&2){let p=a.$implicit,o=a.index;m(2),f(" ",o+1," "),m(2),f(" ",p.patientName," "),m(2),f(" ",p.patientMobileNo," "),m(2),f(" ",p.genderName," "),m(2),f(" ",p.age," "),m(2),f(" ",p.bloodGroup?p.bloodGroup:"---"," ")}}function Le(n,a){if(n&1&&(t(0,"table",20)(1,"thead",21)(2,"tr")(3,"th",22),i(4,"S.L No"),e(),t(5,"th",22),i(6,"Patient's Name"),e(),t(7,"th",22),i(8,"Mobile No."),e(),t(9,"th",22),i(10,"Gender"),e(),t(11,"th",22),i(12,"Age"),e(),t(13,"th",22),i(14,"Blood Group"),e(),t(15,"th",22),i(16,"Profile"),e()()(),t(17,"tbody"),c(18,Ae,16,6,"tr",23),e()()),n&2){let p=y();m(18),d("ngForOf",p.patientList)}}function Me(n,a){n&1&&(t(0,"div",27),i(1," Data is loading ... "),e())}var ue=(()=>{let a=class a{constructor(o,l,r,u,x,v){this.Router=o,this.AppointmentService=l,this.NormalAuth=r,this.dialog=u,this.PatientProfileService=x,this.UserinfoStateService=v,this.patientLoader=!1}ngOnInit(){let o=this.NormalAuth.authInfo();o&&this.UserinfoStateService.getUserPatientInfo(o.id,o.userType),this.userInfo=o,this.getPatientList(o)}goToPatientProfile(o){this.userInfo.userType==="doctor"?this.Router.navigate(["/doctor/patients/patient-details/",o.patientProfileId]):this.userInfo.userType==="patient"?this.Router.navigate(["/patient/my-family/patient-details/",o.id]):this.userInfo.userType==="agent"&&this.Router.navigate(["/agent/patients/patient-details/",o.id])}addNewPatient(){this.dialog.open(ce,{width:"40vw"})}getPatientList(o){if(o.id){this.patientLoader=!0;try{o.userType==="doctor"?this.AppointmentService.getPatientListByDoctorId(o.id).subscribe(l=>{this.patientList=l,this.patientLoader=!1}):o.userType==="patient"||o.userType==="agent"?this.UserinfoStateService.getData().pipe(V(l=>l?this.UserinfoStateService.getUserPatientData().pipe(G(r=>r)):D([]))).subscribe(l=>{this.patientList=l,this.patientLoader=!1}):(console.log("Data Nai"),this.patientLoader=!1)}catch(l){console.log(l),this.patientLoader=!1}}}onSearchChange(o){}};a.\u0275fac=function(l){return new(l||a)(s(U),s(oe),s(E),s(re),s(C),s(I))},a.\u0275cmp=S({type:a,selectors:[["app-public-patients"]],decls:19,vars:4,consts:[[1,"doctor-dashboard_midcontent_container","w-full"],[1,"flex","items-center","justify-left","border-[1px]"],[1,"w-full","h-full","bg-white"],[1,"relative","overflow-x-auto","sm:rounded-lg"],[1,"bg-slate-200/20","flex","gap-4","items-center","justify-between","border-b-[1px]","px-8","py-5"],[1,"flex","gap-5"],[1,"dashbord-heading-text","text-[22px]"],[1,"fa-solid","fa-building-columns","mr-1"],["class","btn-secondary-light border-[1px] border-secondary-dark/50",3,"click",4,"ngIf"],[1,"flex"],[1,"py-2","h-fit","px-4","rounded-md","bg-gray-400/10","flex","items-center","border-gray-200","border-[1px]"],["placeholder","Search patient...",1,"outline-none","bg-transparent","font-poppins","w-[400px]","text-black/80","placeholder:text-black/50",3,"change"],[1,"bg-transparent"],[1,"fa-solid","fa-magnifying-glass","text-gray-500"],[1,"w-full","flex","h-screen","flex-wrap","justify-evenly","overflow-y-scroll","no-scrollbar","px-5","pb-[50px]"],[1,"px-4","py-3","w-full"],["class","w-full text-sm text-left rounded-lg text-gray-500 border-[1px]",4,"ngIf"],["class","w-full h-[300px] flex justify-center items-center",4,"ngIf"],[1,"btn-secondary-light","border-[1px]","border-secondary-dark/50",3,"click"],[1,"fa-solid","fa-plus","mr-2"],[1,"w-full","text-sm","text-left","rounded-lg","text-gray-500","border-[1px]"],[1,"text-xs","rounded-lg","text-gray-800","uppercase","bg-black/5"],["scope","col",1,"px-6","py-3"],["class","bg-white hover:bg-gray-50",4,"ngFor","ngForOf"],[1,"bg-white","hover:bg-gray-50"],[1,"px-6","py-4"],[1,"bg-blue-100","cursor-pointer","text-blue-800","text-xs","font-medium","mr-2","px-2.5","py-1","rounded",3,"click"],[1,"w-full","h-[300px]","flex","justify-center","items-center"]],template:function(l,r){l&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),g(7,"i",7),i(8),e(),c(9,Fe,3,0,"button",8),e(),t(10,"div",9)(11,"div",10)(12,"input",11),h("change",function(x){return r.onSearchChange(x)}),e(),t(13,"span",12),g(14,"i",13),e()()()(),t(15,"div",14)(16,"div",15),c(17,Le,19,1,"table",16)(18,Me,2,0,"div",17),e()()()()()()),l&2&&(m(8),f("",r.userInfo.userType==="patient"?"My Family":"My Patient"," "),m(),d("ngIf",r.userInfo.userType==="agent"||r.userInfo.userType==="patient"),m(8),d("ngIf",!r.patientLoader),m(),d("ngIf",r.patientLoader))},dependencies:[_,P]});let n=a;return n})();var ke=[{path:"",component:ue}],We=(()=>{let a=class a{};a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=q({type:a}),a.\u0275inj=O({imports:[R,Y.forChild(ke),pe]});let n=a;return n})();export{ue as a,We as b};
