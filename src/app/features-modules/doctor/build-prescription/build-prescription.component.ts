import { PrescriptionMasterService } from './../../../proxy/services/prescription-master.service';
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
import { AppointmentDto, PrescriptionDrugDetailsDto, PrescriptionMainComplaintDto, PrescriptionMasterDto } from 'src/app/proxy/dto-models';
import { Observable, debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';
import { symptoms } from 'src/app/shared/utils/patient-symptoms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PrescriptionMainComplaintInputDto } from 'src/app/proxy/input-dto';
import { CustomTableLayout } from 'pdfmake/interfaces';

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
  filteredOptions: Observable<string[]>[] = [];

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
  prescriptionLoader: boolean = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private Router: Router,
    private AppointmentService: AppointmentService,
    private TosterService: TosterService,
    private PrescriptionMasterService: PrescriptionMasterService
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
          // this.form.get('age')?.patchValue(res.age);
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



  loadForm() {
    this.form = this.fb.group({
      patientName: [''],
      height: [''],
      weight: [''],
      date: [''],
      time: [''],
      age: [''],
      //Add other patient-related fields as needed (age, weight, date, time, etc.)
    });


    this.prescriptionForm = this.fb.group({
      followUp: [''],
      advice: [''],
      chiefComplaints: this.fb.array([this.createChiefComplaintFormGroup()]),
      findings: this.fb.array([this.createFindingsFormGroup()]),
      medicineSchedule: this.fb.array([this.createMedicineScheduleFormGroup()]),
      diagnosis: this.fb.array([this.createDiagnosisFormGroup()]),
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
   
      let compliant = this.fb.group({
        symptoms: ['', Validators.required],
        durationDay: ['1', Validators.required],
        durationTime: ['day', Validators.required],
        problems: ['', Validators.required],
        physicianRecommendedAction: [''],
      });
    
      const symptomsControl = compliant.get('symptoms');
      if (symptomsControl) {
        this.filteredOptions.push(
          symptomsControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filterSymptoms(value))
          )
        );
      }
    
      return compliant;
    
  }

  formatOption(option: string, searchValue: string): string {
    if (searchValue && option.toLowerCase().includes(searchValue.toLowerCase())) {
      const regExp = new RegExp(searchValue, 'gi');
      return option.replace(regExp, (match) => `<span class="highlight">${match}</span>`);
    }
    return option;
  }



  private _filterSymptoms(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  createFindingsFormGroup() {
    return this.fb.group({
      observation: ['', Validators.required],
      comments: [''],
    });
  }
  createMedicineScheduleFormGroup() {
    return this.fb.group({
      drugRxId: [2],
      specialCaseChecked: [false],
      drugName: ['', Validators.required],
      durationDay: ['1', Validators.required],
      durationTime: ['day', Validators.required],
      drugDoseSchedule: ['', Validators.required],
      drugDoseScheduleDays: [''],
      instruction: [''],
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
    const { chiefComplaints, findings,diagnosis,followUp,advice } =
      this.prescriptionForm.value;
    const formattedMedicineSchedule :PrescriptionMainComplaintDto[] =
      this.prescriptionForm.value.medicineSchedule.map((medicine: any) => ({
        drugRxId : medicine.drugRxId,
        drugName: medicine.drugName,
        drugDoseScheduleDays: Array.isArray(medicine.drugDoseScheduleDays)
          ? medicine.drugDoseScheduleDays.join(', ')
          : medicine.drugDoseScheduleDays,
        duration: medicine.durationDay + ' ' + medicine.durationTime,
        drugDoseSchedule:medicine.drugDoseSchedule,
        instruction: medicine.instruction
      }));
    let prescriptionMainComplaints: PrescriptionMainComplaintDto[] = chiefComplaints.map((e: any) => {
      return {
        duration: e.durationDay + ' ' + e.durationTime,
        problems: e.problems,
        physicianRecommendedAction: e.physicianRecommendedAction,
      };
    });

  const { id:appointmentId, appointmentSerial,appointmenCode,doctorProfileId,doctorName,patientProfileId,patientName,patientCode,consultancyType,appointmentType,
    appointmentDate,
    doctorCode
  } = this.appointmentInfo

    const prescription: any = {
      refferenceCode:"0123",
      appointmentId,
      appointmentSerial,
      appointmenCode,
      doctorProfileId,
      doctorName,
      doctorCode,
      patientProfileId,
      patientCode,
      patientName,
      consultancyType,
      appointmentType,
      appointmentDate,
      prescriptionDate : this.today,
      patientLifeStyle: null,
      reportShowDate: null,
      prescriptionMainComplaints,
      prescriptionFindingsObservations: findings,
      prescriptionDrugDetails: formattedMedicineSchedule,
      prescriptionMedicalCheckups: diagnosis,
      followupDate: followUp,
      advice: advice,
      prescriptionPatientDiseaseHistory: [
        {
          "patientProfileId": 40013,
          "commonDiseaseId": 1,
          "diseaseName": "Mild intermittent asthma, uncomplicated"
        }
      ],
    
    };

if (this.prescriptionForm.invalid) {
  this.TosterService.customToast("Please fill all the fields!", 'warning')
  return
}

    try {
      this.prescriptionLoader = true
      this.PrescriptionMasterService.create(prescription).subscribe(
        (res) => {
          if (res) {
           this.prescriptionLoader = false
           this.TosterService.customToast("Prescription created successfully!", 'success')
         }else{
          this.TosterService.customToast("Prescription create failed!", 'error')
         }
        }
      );
    } catch (error) {
      this.TosterService.customToast(String(error), 'error')
    }
  }

  generatePDF(action = 'open') {
    const docDefinition = {
      pageSize: 'A5',
      pageOrientation: 'landscape',
      content: [
        {
          text: `Dr. doctorName`,
          style: 'header',
        },
        {
          text: 'General Medicine',
          style: 'subheader',
        },
        {
          text: 'Dhaka Medical College & Hospital, Dhaka',
          style: 'subheader',
        },
        {
          text: `BMDC No. : 03210225423`,
          style: 'subheader',
        },
        
          {
            table: {
              widths: [130, 40, 80, 110, 110],
     
              body: [
                
                [
                  
                  {
                    text: `Patient`,
                    border: [1, 1, 1, 1], // Thin right border
                  },
                  {
                    text: `Age`,
                    border: [1, 1, 1, 1],
                  },
                  {
                    text: `Weight: 1 kg`,
                    border: [1, 1, 1, 1],
                  },
                  {
                    text: `Date: ${new Date().toLocaleDateString()}`,
                    border: [1, 1, 1, 1],
                  },
                  {
                    text: `Time: ${new Date().toLocaleTimeString()}`,
                    border: [1, 1, 1, 1], // Remove the right border for the last column
                  },
                ],
              ],
            },
            border:[1,1,1,1],
            margin: [0, 30, 0, 30],
          },

        
        {
          table: {
            widths: [130, 370],
            border:[0,0,0,0],
            body: [ [
              {
                fontSize: 11,
                border:[0,0,0,0],
                // Set all border values to 0 to make them transparent
                stack: [
                  
                 [ {
                    text: 'Patient H/O',
                    style: 'listHeader',
                    fontSize: 12
                  },
                  {
                    ul: [
                      {
                        text: 'Paralysis',
                        style: 'listItem',
                        display: 'inline',
                        fontSize: 11
                      },
                      {
                        text: 'Brain',
                        style: 'listItem',
                        display: 'inline',
                        fontSize: 11
                      },
                    ],
                  },
                ],[
                  {
                    text: 'Patient H/O',
                    style: 'listHeader',
                    margin:[20,0,0,0]
                  },
                  {
                    ul: [
                      {
                        text: 'Paralysis',
                        style: 'listItem',
                        display: 'inline',
                      },
                      {
                        text: 'Brain',
                        style: 'listItem',
                        display: 'inline',
                      },
                    ],
                  }]
                ],
                
              },
              {
                border: [1, 0, 0, 0], // Set all border values to 0 to make them transparent
                stack: [
                  {
                    text: 'Header 1',
                    style: 'listHeader',
                  },
                  {
                    ul: [
                      {
                        text: 'Styled Item 1',
                        style: 'listItem',
                        display: 'inline',
                      }                   
                    ],
                  },
                ]  
              },
            ],
            ],
          },
        },





      ],
     
     

     
     // add table layouts

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10], // [left, top, right, bottom]
        },
        subheader: {
          fontSize: 12,
          margin: [0, 0, 0, 5],
        },
        sectionHeader: {
          fontSize: 12,
          margin: [0, 15, 0, 10],
        },
        listItem: {
          margin: [5, 0],

        },
      },

    };

   

    pdfMake.createPdf(docDefinition as any).open({}, window);

  }
}
