// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


import { LoaderService } from './shared/services/loader.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'soowgood-v2';
  isLoading!: boolean;
  // invoice = [
  //   {
  //     customerName: "string",
  //     address: "string",   
  //     contactNo: "number",   
  //     email: "string",  
  //     products: "",   
  //     additionalDetails: "string",  
  //     },
  //     {
  //       customerName: "string",
  //       address: "string",   
  //       contactNo: "number",   
  //       email: "string",  
  //       products: "",   
  //       additionalDetails: "string",  
  //       }

  // ]
  constructor(private LoaderService: LoaderService) {
    
  }

  ngOnInit(){
    this.LoaderService.getLoaderState().subscribe((s) => (this.isLoading = s));
  }


  
  // Create the PDF document

  
//     generatePDF(action = 'open') {    
//       const appointmentInfo = {
//         doctorName: 'Dr. John Doe',
//         // Add other appointment info here
//       };
    
//       const formValue = {
//         patientName: 'John Smith',
//         age: 30,
//         weight: 70,
//         // Add other form values here
//       };
    
//       const chiefComplaints = [
//         {
//           symptoms: 'Fever',
//           durationDay: 3,
//           durationTime: 'day',
//           problems: 'Headache',
//           comments: 'No relief with painkillers',
//         },
//         // Add other complaints here
//       ];
    
//       const findings = [
//         {
//           observations: 'Normal blood pressure',
//           problems: 'None',
//           comments: '',
//         },
//         // Add other findings here
//       ];
    
//       const medicineSchedule = [
//         {
//           medicineName: 'Medicine 1',
//           durationDay: 1,
//           durationTime: 'day',
//           specialCaseChecked: false,
//           timing: '1 + 1 + 1',
//           timingDay: [],
//           comments: 'Take with food',
//         },
//         // Add other medicines here
//       ];
    
//       const diagnosis = [
//         {
//           test: 'Blood Test',
//           comments: 'Further tests may be needed',
//         },
//         // Add other diagnoses here
//       ];
    
//       const followUpDate = '2023-10-20';
//       const advice = 'Get plenty of rest and drink fluids.';
    
//       // Define the document definition
//       const docDefinition = {
//         content: [
//           {
//             text: `Dr. ${appointmentInfo.doctorName}`,
//             style: 'header',
//           },
//           {
//             text: 'General Medicine',
//             style: 'subheader',
//           },
//           {
//             text: 'Dhaka Medical College & Hospital, Dhaka',
//             style: 'subheader',
//           },
//           {
//             text: `BMDC No. : 03210225423`,
//             style: 'subheader',
//           },
//           {
//             text: 'Patient Information',
//             style: 'sectionHeader',
//           },
//           {
//             columns: [
//               {
//                 text: `Patient Name: ${formValue.patientName}`,
//                 width: 'auto',
//               },
//               {
//                 text: `Age: ${formValue.age}`,
//                 width: 'auto',
//               },
//               {
//                 text: `Weight: ${formValue.weight} kg`,
//                 width: 'auto',
//               },
//               {
//                 text: `Date: ${new Date().toLocaleDateString()}`,
//                 width: 'auto',
//               },
//               {
//                 text: `Time: ${new Date().toLocaleTimeString()}`,
//                 width: 'auto',
//               },
//             ],
//           },
//           // Add Chief Complaints, Findings, Medication & Schedule, Diagnosis, Follow Up, and Advice sections here
//         ],
//         styles: {
//           header: {
//             fontSize: 24,
//             bold: true,
//             margin: [0, 0, 0, 10], // [left, top, right, bottom]
//           },
//           subheader: {
//             fontSize: 16,
//             bold: true,
//             margin: [0, 0, 0, 5],
//           },
//           sectionHeader: {
//             fontSize: 18,
//             bold: true,
//             margin: [0, 15, 0, 10],
//           },
//         },
//       };
// // ... Previous code ...

// // ... Previous code ...

// // Extend the docDefinition to add Chief Complaints section
// docDefinition.content.push(
//   {
//     text: 'Chief Complaints',
//     style: 'sectionHeader',
//   },
//   {
//     table: {
//       widths: ['*', '*', '*', '*', '*'],
//       body: [
//         [
//           'Symptom',
//           'Duration',
//           'Problem',
//           'Comments',
//           'Action'
//         ],
//         ...chiefComplaints.map(complaint => [
//           complaint.symptoms,
//           `${complaint.durationDay} ${complaint.durationTime}`,
//           complaint.problems,
//           complaint.comments,
//           '', // Add your action here if needed
//         ]),
//       ],
//     },
//   }
// );

// // Extend the docDefinition to add Findings section
// docDefinition.content.push(
//   {
//     text: 'Findings',
//     style: 'sectionHeader',
//   },
//   {
//     table: {
//       widths: ['*', '*', '*', '*'],
//       body: [
//         [
//           'Observations',
//           'Problem',
//           'Comments',
//           'Action'
//         ],
//         ...findings.map(finding => [
//           finding.observations,
//           finding.problems,
//           finding.comments,
//           '', // Add your action here if needed
//         ]),
//       ],
//     },
//   }
// );

// // Extend the docDefinition to add Medication & Schedule section
// docDefinition.content.push(
//   {
//     text: 'Medication & Schedule',
//     style: 'sectionHeader',
//   },

//   {
//     table: {
//       widths: ['*', '*', '*', '*', '*'],
//       body: [
//         [
//           'Medicine Name',
//           'Duration',
//           'Schedule/Timing',
//           'Comments',
//           'Action'
//         ],
//         ...medicineSchedule.map(medicine => [
//           medicine.medicineName,
//           `${medicine.durationDay} ${medicine.durationTime}`,
//           medicine.specialCaseChecked ? medicine.timingDay.join(', ') : medicine.timing,
//           medicine.comments,
//           '', // Add your action here if needed
//         ]),
//       ],
//     },
//   }
// );

// // Extend the docDefinition to add Diagnosis section
// docDefinition.content.push(
//   {
//     text: 'Diagnosis',
//     style: 'sectionHeader',
//   },
//   {
//     table: {
//       widths: ['*', '*', '*'],
//       body: [
//         [
//           'Test',
//           'Comments',
//           'Action'
//         ],
//         ...diagnosis.map(diagnose => [
//           diagnose.test,
//           diagnose.comments,
//           '', // Add your action here if needed
//         ]),
//       ],
//     },
//   }
// );

// // ... Continue with Follow Up and Advice sections ...

// // ... Rest of the code ...



//       pdfMake.createPdf(docDefinition as any).getDataUrl((dataUrl) => {
//         if (action === 'download') {
//           const link = document.createElement('a');
//           link.href = dataUrl;
//           link.download = 'prescription.pdf';
//           link.click();
//         } else if (action === 'print') {
//           const iframe = document.createElement('iframe');
//           iframe.style.display = 'none';
//           iframe.src = dataUrl;
//           document.body.appendChild(iframe);
//           iframe.onload = () => {
//             iframe.contentWindow?.print();
//             document.body.removeChild(iframe);
//           };
//         } else {
//           window.open(dataUrl, '_blank');
//         }
//       });
//     }
    
    
    
    
   

}

