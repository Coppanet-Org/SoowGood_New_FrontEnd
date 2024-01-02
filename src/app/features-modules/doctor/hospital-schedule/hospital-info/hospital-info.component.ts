import { HospitalStateService } from '../../../../shared/services/states/hospital-state.service';
import { DoctorChamberService } from './../../../../proxy/services/doctor-chamber.service';
import { Component, OnInit } from '@angular/core';
import { HospitalDialogComponent } from '../hospital-dialog/hospital-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DoctorChamberDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.component.html',
  styleUrls: ['./hospital-info.component.scss'],
})
export class HospitalInfoComponent implements OnInit {
  doctorId: any;
  chamberList:DoctorChamberDto[]=[];

  constructor(public dialog: MatDialog,
    private normalAuth: AuthService,
    private doctorChamberService: DoctorChamberService,
    private HospitalStateService:HospitalStateService
    ) {}

  ngOnInit(): void {
    let doctorId = this.normalAuth.authInfo().id;
    if (doctorId) {
      this.doctorId =doctorId ;
      this.getChamberList(doctorId)
    }
  }
  getChamberList(doctorId:any):void{
   this.doctorChamberService.getDoctorChamberListByDoctorId(doctorId).subscribe((res)=>{
    this.chamberList = res
    this.HospitalStateService.sendData(res)

   })
  }
  onPlaceEdit(data:any){
    console.log(data);
    const dialogRef = this.dialog.open(HospitalDialogComponent, {
      width: '40vw',
      data:data
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getChamberList(this.doctorId)
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HospitalDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getChamberList(this.doctorId)
      }
    });
  }
}
