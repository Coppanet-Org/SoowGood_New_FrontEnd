
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DegreeService, DoctorDegreeService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DegreeDto, DoctorDegreeDto } from 'src/app/proxy/dto-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TosterService } from '../../../../../shared/services/toster.service';

@Component({
  selector: 'app-degree-specilization-info-form',
  templateUrl: './degree-specilization-info-form.component.html',
  styleUrls: ['./degree-specilization-info-form.component.scss']
})
export class DegreeSpecilizationInfoFormComponent implements OnInit {
  isLoading: boolean = false;
  degreeList: DoctorDegreeDto[] = [];
  durationList: any = [
    { id: 1, name: '1 year' },
    { id: 2, name: '2 year' },
    { id: 3, name: '3 year' },
    { id: 4, name: '4 year' },
    { id: 5, name: '5 year' },
  ];
  form!: FormGroup;
  doctorId: any;
  public editData: DoctorDegreeDto | undefined
  constructor(
    private degreeService: DegreeService,
    private fb: FormBuilder,
    private doctorDegreeService: DoctorDegreeService,
    private normalAuth: AuthService,
    private tosterService: TosterService,
    
  ) { }

  ngOnInit(): void {
    this.loadForm();
    this.degreeService.getList().subscribe((res) => {
      this.degreeList = res;
    });
    this.doctorId = this.normalAuth.authInfo().id;
    if (this.editData) {
      this.form.patchValue(this.editData);
    }
  }

  loadForm() {
    this.form = this.fb.group({
      zipCode: ['1216'],
      degreeId: ['', Validators.required],
      duration: ['', Validators.required],
      //durationType: ['', Validators.required],
      passingYear: ['', Validators.required],
      instituteName: ['', Validators.required],
      instituteCity: ['', Validators.required],
      instituteCountry: ['', Validators.required],
    });
  }
  sendDataToParent() {
    let degreeId = this.form.get('degreeId')?.value;
    let duration = this.form.get('duration')?.value;
    const newDegreeData = {
      ...this.form.value,
      degreeId: Number(degreeId),
      duration: Number(duration),
      doctorId: this.doctorId,
    };

    if (!this.form.valid && !this.form.touched) {
      this.tosterService.customToast(
        'Please fill all the required fields!',
        'warning'
      );
      return;
    }

    if (!this.editData) {
      this.doctorDegreeService.create(newDegreeData).subscribe((res) => {
        if (res) {
          this.tosterService.customToast('Successfully added!', 'success');
          //this.dialogRef.close(true);
        }
      });
    } else {
      let changedProperties: string[] = [];
      let exData: any = this.editData;
      for (const key in newDegreeData) {
        if (
          newDegreeData.hasOwnProperty(key) &&
          newDegreeData[key] !== exData[key]
        ) {
          changedProperties.push(key);
        }
      }

      if (changedProperties.length < 1) {
        //this.dialogRef.close(false);
        return;
      } else {
        this.doctorDegreeService
          .update({ ...newDegreeData, id: this.editData.id })
          .subscribe((res) => {
            if (res) {
              this.tosterService.customToast(
                'Successfully updated!',
                'success'
              );
              //this.dialogRef.close(true);
            } else {
              this.tosterService.customToast(
                'Something went wrong! Please contact your administrator.',
                'error'
              );
              //this.dialogRef.close(false);
            }
          });
      }
    }
  }
}
