import { DoctorFeeSetupService } from './../../../../proxy/services/doctor-fee-setup.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FeeDialogComponent } from '../fee-dialog/fee-dialog.component';
import { DoctorFeesSetupDto } from 'src/app/proxy/dto-models';

@Component({
  selector: 'app-fee-setup',
  templateUrl: './fee-setup.component.html',
  styleUrls: ['./fee-setup.component.scss'],
})
export class FeeSetupComponent implements OnInit {
  feeList: DoctorFeesSetupDto[] = [];
  doctorId!: number;

  constructor(
    public dialog: MatDialog,
    private normalAuth: AuthService,
    private DoctorFeeSetupService: DoctorFeeSetupService
  ) {}
  ngOnInit(): void {
    let doctorId = this.normalAuth.authInfo().id;
    if (doctorId) {
      this.doctorId = doctorId;
      this.getFeeList(doctorId);
    }
  }
  getFeeList(doctorId: any): void {
    this.DoctorFeeSetupService.getListByDoctorIdList(doctorId).subscribe(
      (res) => {
        this.feeList = res;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeeDialogComponent, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getFeeList(this.doctorId);
    });
  }
  handleFeeEdit(row: any) {
    this.dialog
      .open(FeeDialogComponent, {
        data: row,
        width: "40vw",
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === true) {
          this.getFeeList(this.doctorId);
        }
      });
  }
}
