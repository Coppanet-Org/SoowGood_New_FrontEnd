import{k as s}from"./chunk-B6XPZLTG.js";import{R as i,U as n,e as o}from"./chunk-PJQ4EZIT.js";var u=(()=>{let r=class r{constructor(t){this.DoctorProfileService=t,this.doctorsList=new o([]),this.currentlyOnlineDoctor=new o([])}getDoctorListData(){return this.doctorsList.asObservable()}getCurrentlyOnlineDoctorData(){return this.currentlyOnlineDoctor.asObservable()}sendDoctorListData(t){this.doctorsList.next(t)}sendCurrentlyOnlineDoctorData(t){this.currentlyOnlineDoctor.next(t)}getAllDoctorList(){return this.DoctorProfileService.getList().subscribe(t=>{this.sendDoctorListData(t)}),this.getDoctorListData()}getCurrentlyOnlineDoctorList(){return this.DoctorProfileService.getCurrentlyOnlineDoctorList().subscribe(t=>{this.sendCurrentlyOnlineDoctorData(t)}),this.getCurrentlyOnlineDoctorData()}};r.\u0275fac=function(c){return new(c||r)(n(s))},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{u as a};
