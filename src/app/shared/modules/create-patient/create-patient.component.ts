import { inputConfigs } from './../../utils/input-info';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {
form!: FormGroup
inputConfigs:any
isLoading:boolean = false
}
