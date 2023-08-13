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
    private doctorChamberService: DoctorChamberService
    ) {}

  ngOnInit(): void {
    let doctorId = this.normalAuth.authInfo().id;
    if (doctorId) {
      this.doctorId =doctorId ;
      this.getChamberList(doctorId)
    }
  }
  getChamberList(doctorId:any):void{
    console.log(doctorId);
    
   this.doctorChamberService.getDoctorChamberListByDoctorId(doctorId).subscribe((res)=>{
    this.chamberList = res
    console.log(res);
    
   })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(HospitalDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getChamberList(this.doctorId)
    });
  }
}
