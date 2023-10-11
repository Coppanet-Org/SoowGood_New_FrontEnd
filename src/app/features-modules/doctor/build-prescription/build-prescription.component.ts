import { TosterService } from 'src/app/shared/services/toster.service';
import { AppointmentService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDto } from 'src/app/proxy/dto-models';
import { Observable } from 'rxjs';
import { symptoms } from 'src/app/shared/utils/patient-symptoms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-build-prescription',
  templateUrl: './build-prescription.component.html',
  styleUrls: ['./build-prescription.component.scss'],
})
export class BuildPrescriptionComponent implements OnInit {
  form!: FormGroup;
  prescriptionForm!: FormGroup;
  appointmentInfo: AppointmentDto = {};
  specialCaseChecked: boolean = false;
  options: any[] = symptoms;
  filteredOptions!: Observable<string[]>;

  symptomsControls: FormControl[] = [];
  today!: any;

  selectedSymptoms: string[] = [];
  durationList = [
    {
      viewValue: 'Day',
      value: 1,
    },
    {
      viewValue: 'Week',
      value: 2,
    },
    {
      viewValue: 'Month',
      value: 3,
    },
    {
      viewValue: 'Year',
      value: 4,
    },
  ];
  todayTime!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private Router: Router,
    private AppointmentService: AppointmentService,
    private TosterService: TosterService,

  ) {}

  ngOnInit(): void {
    this.today = new Date().toDateString();
    this.todayTime = new Date().toLocaleTimeString();

    const { aptId } = this.route.snapshot.params;
    if (aptId) {
      this.AppointmentService.get(aptId).subscribe((res) => {
        if (res.appointmenCode) {
          this.appointmentInfo = res;
          this.form.get('patientName')?.patchValue(res.patientName);
        } else {
          this.Router.navigate(['/doctor/appointments']).then((r) => {
            this.TosterService.customToast('Documents not found!', 'error');
          });
        }
      });
    }

    this.loadForm();
  }

  displayFn(symptom: string): string {
    return symptom || '';
  }

  private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  loadForm() {
    this.form = this.fb.group({
      patientName: ['Hasibn'],
      height: [''],
      weight: [''],
      date: [''],
      time: [''],
      age: [''],
      // Add other patient-related fields as needed (age, weight, date, time, etc.)
    });

    this.prescriptionForm = this.fb.group({
      followUp: '',
      advice: '',
      chiefComplaints: this.fb.array([this.createChiefComplaintFormGroup()]),
      findings: this.fb.array([this.createFindingsFormGroup()]),
      medicineSchedule: this.fb.array([this.createMedicineScheduleFormGroup()]),
      diagnosis: this.fb.array([this.createMedicineScheduleFormGroup()]),
    });
  }

  // get each array
  get chiefComplaints() {
    return this.prescriptionForm.get('chiefComplaints') as FormArray;
  }
  get findings() {
    return this.prescriptionForm.get('findings') as FormArray;
  }
  get medicineSchedule() {
    return this.prescriptionForm.get('medicineSchedule') as FormArray;
  }
  get diagnosis() {
    return this.prescriptionForm.get('diagnosis') as FormArray;
  }
  //each form group
  createChiefComplaintFormGroup() {
    return this.fb.group({
      symptoms: ['', Validators.required],
      durationDay: ['1', Validators.required],
      durationTime: ['day', Validators.required],
      condition: [''],
      problems: ['', Validators.required],
      comments: [''],
    });
  }
  createFindingsFormGroup() {
    return this.fb.group({
      observations: ['', Validators.required],
      problems: ['', Validators.required],
      comments: [''],
    });
  }
  createMedicineScheduleFormGroup() {
    return this.fb.group({
      specialCaseChecked: [false],
      medicineName: ['', Validators.required],
      durationDay: ['1', Validators.required],
      durationTime: ['day', Validators.required],
      timing: ['', Validators.required],
      timingDay: [''],
      comments: [''],
    });
  }
  createDiagnosisFormGroup() {
    return this.fb.group({
      testName: ['', Validators.required],
      comments: [''],
    });
  }
  // add new row
  addChiefComplaint() {
    this.chiefComplaints.push(this.createChiefComplaintFormGroup());
  }
  addFindings() {
    this.findings.push(this.createFindingsFormGroup());
  }
  addMedicineSchedule() {
    this.medicineSchedule.push(this.createMedicineScheduleFormGroup());
  }
  addDiagnosis() {
    this.diagnosis.push(this.createDiagnosisFormGroup());
  }
  //remove each row
  removeChiefComplaint(index: number) {
    this.chiefComplaints.removeAt(index);
  }
  removeFindings(index: number) {
    this.findings.removeAt(index);
  }
  removeMedicineSchedule(index: number) {
    this.medicineSchedule.removeAt(index);
  }
  removeDiagnosis(index: number) {
    this.diagnosis.removeAt(index);
  }

  submitPrescription() {
    const formattedMedicineSchedule =
      this.prescriptionForm.value.medicineSchedule.map((medicine: any) => ({
        ...medicine,
        timingDay: Array.isArray(medicine.timingDay)
          ? medicine.timingDay.join(', ')
          : medicine.timingDay,
      }));

console.log();



  }

  // generatePDF(action = 'open') {
  //   const docDefinition = {
  //     content: [
  //       {
  //         text: `Dr. doctorName}`,
  //         style: 'header',
  //       },
  //       {
  //         text: 'General Medicine',
  //         style: 'subheader',
  //       },
  //       {
  //         text: 'Dhaka Medical College & Hospital, Dhaka',
  //         style: 'subheader',
  //       },
  //       {
  //         text: `BMDC No. : 03210225423`,
  //         style: 'subheader',
  //       },
  //       {
  //         columns: [
  //           {
  //             text: `Patient Name: patientName}`,
  //             width: 150,
  //           },
  //           {
  //             text: `Age: age}`,
  //             width: 50,
  //           },
  //           {
  //             text: `Weight: weight} kg`,
  //             width: 100,
  //           },
  //           {
  //             text: `Date: ${new Date().toLocaleDateString()}`,
  //             width: 120,
  //           },
  //           {
  //             text: `Time: ${new Date().toLocaleTimeString()}`,
  //             width: 120,
  //           },
  //         ],
  //         margin: [0, 15, 0, 10],
  //       },
  //       {
  //         table: {
  //           widths: [150, 350],
  //           border:[0,0,0,0],
  //           body: [ [
  //             {
  //               border: [0, 0, 0, 0], // Set all border values to 0 to make them transparent
  //               stack: [
  //                 {
  //                   text: 'Header 1',
  //                   style: 'listHeader',
  //                 },
  //                 {
  //                   ul: [
  //                     {
  //                       text: 'Styled Item 1',
  //                       style: 'listItem',
  //                       display: 'inline',
  //                     },
  //                     {
  //                       text: 'Styled Item 2',
  //                       style: 'listItem',
  //                       display: 'inline',
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   text: 'Header 1',
  //                   style: 'listHeader',
  //                   margin:[15,0,15,0]
  //                 },
  //                 {
  //                   ul: [
  //                     {
  //                       text: 'Styled Item 1',
  //                       style: 'listItem',
  //                       display: 'inline',
  //                     },
  //                     {
  //                       text: 'Styled Item 2',
  //                       style: 'listItem',
  //                       display: 'inline',
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //             '',
  //           ],
  //           ],
  //         },
  //       },
  //       // Add sections for Chief Complaints, Findings, Medication & Schedule, Diagnosis, Follow Up, and Advice here
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 22,
  //         bold: true,
  //         margin: [0, 0, 0, 10], // [left, top, right, bottom]
  //       },
  //       subheader: {
  //         fontSize: 12,
  //         margin: [0, 0, 0, 5],
  //       },
  //       sectionHeader: {
  //         fontSize: 12,
  //         margin: [0, 15, 0, 10],
  //       },
  //       listItem: {
  //         margin: [5, 0],
          
  //       },
  //     },
  //   };
    
  //   pdfMake.createPdf(docDefinition as any).open({}, window);
    
  // }
}
