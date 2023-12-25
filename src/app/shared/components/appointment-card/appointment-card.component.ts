import { Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowPrescriptionModalComponent } from '../../modules/show-prescription-modal/show-prescription-modal.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { UploadAppointmentDocDialogComponent } from '../upload-appointment-doc-dialog/upload-appointment-doc-dialog.component';
import { DocumentsAttachmentService } from 'src/app/proxy/services';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { Common } from '../../common/common';
import { AppointmentDto } from '../../../proxy/dto-models';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent implements AfterViewInit {
  @Input() appointment: any;
  @Input() user: any;
  uploadPrescriptiion: boolean = true;
  btnDisable: boolean = false;
  constructor(private Router: Router, public dialog: MatDialog, private DoctorProfilePicService: DocumentsAttachmentService,
    private NormalAuth: AuthService) { }

  ngAfterViewInit(): void {
    console.log(this.appointment);

    const currentDate = new Date();
    const appointmentDate = new Date(this.appointment.appointmentDate);

    // Set hours, minutes, seconds, and milliseconds to 0 for both dates
    currentDate.setHours(0, 0, 0, 0);
    appointmentDate.setHours(0, 0, 0, 0);

    // Compare the date components
    if (appointmentDate.getTime() >= currentDate.getTime()) {
      this.uploadPrescriptiion = true;
    } else {
      this.uploadPrescriptiion = false;
    }

    if (appointmentDate.getTime() < currentDate.getTime()) {
      this.btnDisable = true;
    } else {
      this.btnDisable = false;
    }

  }

  goToBuildPrescription(aptCode: string) {

    if (aptCode != null && aptCode !== undefined) {
      const url = '/doctor/build-prescription/' + aptCode;
      window.open(url, '_blank');
    } else {
      console.log('Appointment not found');
    }
  }

  goToPatientProfile(appointment: any) {
    this.Router.navigate([
      '/doctor/patients/patient-details/',
      appointment.patientProfileId,
      appointment.doctorProfileId,
    ]);
  }

  openPdfDialog(id: any): void {
    this.dialog.open(ShowPrescriptionModalComponent, {
      minWidth: '820px',
      maxWidth: '100%',
      height: '1000px',
      data: { appointmentId: id },
    });
  }

  goToJoinCall(apt: any, user: string) {

    // const url = `https://agora-video-call-eight.vercel.app/?username=${'username'}&aptCode=${apt}&c=${user}`;
    // // window.location.href = url;
    // window.open(url, '_blank');
    // return

    if (apt) {
      const currentDate = new Date();
      const appointmentDate = new Date(apt.appointmentDate);
      // currentDate.setHours(13);
      // currentDate.setMinutes(35);
      // console.log({
      //   currentDate,
      //   appointmentDate,
      //   date: currentDate.getDate() === appointmentDate.getDate(),
      //   month: currentDate.getMonth() === appointmentDate.getMonth(),
      //   year: currentDate.getFullYear() === appointmentDate.getFullYear(),
      // });

      const appointmentTime = {
        hour: +apt.appointmentTime.split(':')[0],
        minute: +apt.appointmentTime.split(':')[1],
      };

      if (
        currentDate.getFullYear() <= appointmentDate.getFullYear() &&
        currentDate.getMonth() <= appointmentDate.getMonth() &&
        currentDate.getDate() <= appointmentDate.getDate()
      ) {
        if (
          currentDate.getFullYear() === appointmentDate.getFullYear() &&
          currentDate.getMonth() === appointmentDate.getMonth() &&
          currentDate.getDate() === appointmentDate.getDate()
        ) {
          //   console.log('Today is appointment date');

          // 15min age user can join
          const getTimeDifference = (
            aptHour: number,
            aptMinute: number,
            currentHour: number,
            currentMinute: number
          ) => {
            console.log({
              aptMinute,
              aptHour,
              currentHour,
              currentMinute,
            });
            if (aptMinute < 15) {
              aptMinute += 60;
              aptHour -= 1;
            }

            const hourDiff = aptHour - currentHour;
            const minuteDiff = aptMinute - currentMinute;

            // console.log(hourDiff);
            // console.log(minuteDiff);

            return hourDiff * 60 + minuteDiff;
          };
          const timeDiff = getTimeDifference(
            appointmentTime.hour,
            appointmentTime.minute,
            currentDate.getHours(),
            currentDate.getMinutes()
          );


          if (timeDiff < 15 && timeDiff > -30) {

            console.log('Appointment will start soon!');
            let username = apt.doctorName;
            const client = user;
            const aptCode = apt.appointmentCode;
            if (client == 'doctor') {
              username = apt.doctorName;
            }
            else {
              username = apt.patientName;
            }
            const url = `https://agora-video-call-eight.vercel.app/?username=${username}&aptCode=${aptCode}&c=${client}`;
            // window.location.href = url;
            window.open(url, '_blank');
          } else if (timeDiff > 15) {
            this.openDialog('Appointment time is not here yet!')
            //  console.log('Appointment time is not here yet!');
          } else {
            this.openDialog("Appointment time is over!")
            //  console.log('Appointment time is over!');
            this.uploadPrescriptiion = false
          }
        } else {
          this.openDialog('Appointment date is coming soon!')
          // console.log('Appointment date is coming soon!');
        }
      } else {
        this.openDialog('Appointment date is over!')
        // console.log('Appointment date is over!');
        this.uploadPrescriptiion = false

      }
    }
  }

  uploadDocuments(data: any) {
    const dialogRef = this.dialog.open(UploadAppointmentDocDialogComponent, {
      width: "40vw",
      data: data?.patientProfileId
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openDialog(data: string): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      width: "40vw",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  //cancellAppointment(id: any) {
  //  let sessionUser = this.NormalAuth.authInfo();
  //  if (confirm("Are you sure to Cancel ")) {

  //  }

  //}

  // generatePDF(action = 'open') {
  //   const docDefinition = {
  //     pageSize: 'A5',
  //     pageOrientation: 'landscape',
  //     content: [
  //       {
  //         text: `Dr. doctorName`,
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
  //         table: {
  //           widths: [130, 40, 80, 110, 110],
  //           body: [
  //             [
  //               {
  //                 text: `Patient`,
  //                 border: [1, 1, 1, 1], // Thin right border
  //               },
  //               {
  //                 text: `Age`,
  //                 border: [1, 1, 1, 1],
  //               },
  //               {
  //                 text: `Weight: 1 kg`,
  //                 border: [1, 1, 1, 1],
  //               },
  //               {
  //                 text: `Date: ${new Date().toLocaleDateString()}`,
  //                 border: [1, 1, 1, 1],
  //               },
  //               {
  //                 text: `Time: ${new Date().toLocaleTimeString()}`,
  //                 border: [1, 1, 1, 1], // Remove the right border for the last column
  //               },
  //             ],
  //           ],
  //         },
  //         margin: [0, 30, 0, 30],
  //       },
  //       {
  //         table: {
  //           widths: [130, 370],
  //           body: [
  //             [
  //               {
  //                 fontSize: 11,
  //                 stack: [
  //                   {
  //                     text: 'Patient H/O',
  //                     style: 'listHeader',
  //                     fontSize: 12,
  //                   },
  //                   {
  //                     ul: [
  //                       {
  //                         text: 'Paralysis',
  //                         style: 'listItem',
  //                         display: 'inline',
  //                         fontSize: 11,
  //                       },
  //                       {
  //                         text: 'Brain',
  //                         style: 'listItem',
  //                         display: 'inline',
  //                         fontSize: 11,
  //                       },
  //                     ],
  //                   },
  //                 ],
  //               },
  //               {
  //                 stack: [
  //                   {
  //                     text: 'Header 1',
  //                     style: 'listHeader',
  //                   },
  //                   {
  //                     ul: [
  //                       {
  //                         text: 'Styled Item 1',
  //                         style: 'listItem',
  //                         display: 'inline',
  //                       },
  //                     ],
  //                   },
  //                 ],
  //               },
  //             ],
  //           ],
  //         },
  //         margin: [0, 30, 0, 30],
  //       },
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

  //   pdfMake.createPdf(docDefinition as any).getDataUrl((dataUrl) => {
  //     this.pdfDataUrl = dataUrl; // Store the data URL
  //     if (action === 'open') {
  //       this.openPdfDialog();
  //     }
  //   });
  // }
}
