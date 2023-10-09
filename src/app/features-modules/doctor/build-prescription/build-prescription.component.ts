import { TosterService } from 'src/app/shared/services/toster.service';
import { AppointmentService } from 'src/app/proxy/services';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentDto } from 'src/app/proxy/dto-models';
import { Observable} from 'rxjs';
import { symptoms } from 'src/app/shared/utils/patient-symptoms';



@Component({
  selector: 'app-build-prescription',
  templateUrl: './build-prescription.component.html',
  styleUrls: ['./build-prescription.component.scss'],
})
export class BuildPrescriptionComponent implements OnInit {
  form!: FormGroup;
  prescriptionForm!: FormGroup
  appointmentInfo: AppointmentDto = {};
  specialCaseChecked: boolean = false;
  options: any[] = symptoms;
  filteredOptions!: Observable<string[]>;

  symptomsControls: FormControl[] = [];
  today!:any

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
    private TosterService: TosterService
  ) {}

  ngOnInit(): void {
this.today = new Date().toDateString()
this.todayTime = new Date().toLocaleTimeString()

    
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
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



  loadForm() {
    this.form = this.fb.group({
      patientName: ['Hasibn'],
      height:[''],
      weight:[''],
      date:[""],
      time:[''],
      age:['']
      // Add other patient-related fields as needed (age, weight, date, time, etc.)
    });

    this.prescriptionForm = this.fb.group({
      followUp:'',
      chiefComplaints: this.fb.array([
        this.createChiefComplaintFormGroup()
      ]),
      medicineSchedule: this.fb.array([
        this.createMedicineScheduleFormGroup()
      ]),
    });
  }




// get each array
  get chiefComplaints() {
    return this.prescriptionForm.get('chiefComplaints') as FormArray;
  }

  get medicineSchedule() {
    return this.prescriptionForm.get('medicineSchedule') as FormArray;
  }

  //each form group
  createChiefComplaintFormGroup() {
    return this.fb.group({
      symptoms: [''],
      durationDay: ['1'],
      durationTime: ['day'],
      condition: [''],
      problems: [''],
      comments: [''],
    });
  }

  createMedicineScheduleFormGroup() {
    return this.fb.group({
      specialCaseChecked:[false],
      medicineName: [''],
      durationDay: ['1'],
      durationTime: ['day'],
      timing: [''],
      timingDay: [''],
      comments: [''],
    });
   
  }

// add new row
  addChiefComplaint() {
    this.chiefComplaints.push(this.createChiefComplaintFormGroup());
  }
  addMedicineSchedule() {
    this.medicineSchedule.push(this.createMedicineScheduleFormGroup());
  }


  //remove each row
  removeChiefComplaint(index: number) {
    this.chiefComplaints.removeAt(index);
  }
  removeMedicineSchedule(index: number) {
    this.medicineSchedule.removeAt(index);
  }


  submitPrescription(){
   console.log(this.prescriptionForm.value);
  }
}
