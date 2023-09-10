import {
  AfterContentInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookingFilterInputData } from '../../utils/input-info';
import { distinctUntilChanged, map, merge, scan } from 'rxjs';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss'],
})
export class BookingDialogComponent implements OnInit {
  bookingForm!: FormGroup;
  form!: FormGroup;
  inputConfigs: any;
  secondFormGroup!: FormGroup;
  firstFormGroup!: FormGroup;
  activeTab!: any;
  isBookMyselfClick: boolean = false;

  @ViewChild('buttonMyself') buttonMyself!: ElementRef;
  @ViewChild('buttonOthers') buttonOthers!: ElementRef;
  isBookOther: boolean = false;
  isNewUser: boolean= false;
  isExistUser: boolean =true;
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      bookMyself: [false],
      bookOther: [false],
      patientName: [''],
      age: [''],
      mobile: [''],
    });
   this.inputConfigs= bookingFilterInputData([{
      id: 0,
      name:"udoy"
    }],[{
      id: 0,
      name:"udoy"
    }])
  }

  ngOnInit() {
    this.loadForm();
  }
  onStepChange(e: any) {
    this.activeTab = e;
  }

  userExistCheck(status:string):void{
    switch (status) {
      case "new-user":
       this.isNewUser = true
       this.isExistUser = false  
      return
      case "exist-user":
        this.isNewUser = false
        this.isExistUser = true  
       return

    }
  }



  loadForm() {
    this.form = this.fb.group({
      scheduleType: ['', Validators.required],
      doctorChamberId: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      appointmentDate: ['', Validators.required],
    });
  }

  closeDialogs() {}
}
