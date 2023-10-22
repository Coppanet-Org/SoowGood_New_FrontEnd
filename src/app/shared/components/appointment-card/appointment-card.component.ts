import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowPrescriptionModalComponent } from './show-prescription-modal/show-prescription-modal.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.scss'],
})
export class AppointmentCardComponent {
  @Input() appointment: any;
  @Input() user: any;
  pdfContent!: Blob;
  pdfDataUrl!: string;
  constructor(private Router: Router, public dialog: MatDialog) {}

  goToBuildPrescription(aptCode: string) {
    if (aptCode != null && aptCode !== undefined) {
      const url = '/doctor/build-prescription/' + aptCode;
      window.open(url, '_blank');
    } else {
      console.log('Appointment not found');
    }
  }
  goToPatientProfile(patientProfileId: number) {
    this.Router.navigate([
      '/doctor/patients/patient-details/' + patientProfileId,
    ]);
  }

  openPdfDialog(): void {
    const dialogRef = this.dialog.open(ShowPrescriptionModalComponent, {
      width: '80%',
      data: { pdfContent: this.pdfDataUrl }
    });
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
          margin: [0, 30, 0, 30],
        },
        {
          table: {
            widths: [130, 370],
            body: [
              [
                {
                  fontSize: 11,
                  stack: [
                    {
                      text: 'Patient H/O',
                      style: 'listHeader',
                      fontSize: 12,
                    },
                    {
                      ul: [
                        {
                          text: 'Paralysis',
                          style: 'listItem',
                          display: 'inline',
                          fontSize: 11,
                        },
                        {
                          text: 'Brain',
                          style: 'listItem',
                          display: 'inline',
                          fontSize: 11,
                        },
                      ],
                    },
                  ],
                },
                {
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
                        },
                      ],
                    },
                  ],
                },
              ],
            ],
          },
          margin: [0, 30, 0, 30],
        },
      ],
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

    pdfMake.createPdf(docDefinition as any).getDataUrl((dataUrl) => {
      this.pdfDataUrl = dataUrl; // Store the data URL
      if (action === 'open') {
        this.openPdfDialog();
      }
    });
  }
}
