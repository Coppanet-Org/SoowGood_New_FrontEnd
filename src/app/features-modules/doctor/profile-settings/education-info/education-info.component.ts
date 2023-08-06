import { DegreeService } from '../../../../proxy/services/degree.service';
import { DegreeDialogComponentnt } from '../degree-dialog/degree-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDegreeService } from 'src/app/proxy/services';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DegreeDto } from 'src/app/proxy/dto-models';



@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.scss']
})
export class EducationInfoComponent implements OnInit {
  isLoading:boolean= false
  doctorId: any;
  educationList:any= [];
  degreeData:any

  constructor(public dialog: MatDialog,
    private doctorDegreeService: DoctorDegreeService,
    private normalAuth: AuthService,
    
    ) {}
 
  ngOnInit():void {
    let doctorId = this.normalAuth.authInfo().id;

    this. doctorId = doctorId
    if (doctorId) {
      this.getDegreeDataList(doctorId)
    }

  }  


getDegreeDataList(id:any):void{
  this.doctorDegreeService.getDoctorDegreeListByDoctorId(id).subscribe((res)=>{
    this.educationList= res

  })
}
handleDegreeEdit(row: any) {
  this.dialog
    .open(DegreeDialogComponentnt, {
      data: row,
      width: "40vw",
    })
    .afterClosed()
    .subscribe((result) => {
      if (result === true) {
        this.getDegreeDataList(this.doctorId);
      }
    });
}


openDialog():void {
  const dialogRef = this.dialog.open(DegreeDialogComponentnt,{
    width: "40vw"
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getDegreeDataList(this.doctorId)
  });

}
}


