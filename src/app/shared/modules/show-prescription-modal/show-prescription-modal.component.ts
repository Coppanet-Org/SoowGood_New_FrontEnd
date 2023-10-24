import { TosterService } from 'src/app/shared/services/toster.service';
import { PrescriptionMasterService } from './../../../proxy/services/prescription-master.service';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-show-prescription-modal',
  templateUrl: './show-prescription-modal.component.html',
  styleUrls: ['./show-prescription-modal.component.scss'],
})
export class ShowPrescriptionModalComponent implements OnInit {
  @Input() isLoading!: boolean;
  @ViewChild('printableSection') printableSection!: ElementRef;
  prescriptionInfo: any;
  prescriptionLoader!: boolean;
  constructor(
    private TosterService: TosterService,
    private PrescriptionMasterService: PrescriptionMasterService,
    public dialogRef: MatDialogRef<ShowPrescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    
    if (this.data?.prescriptionId) {
      this.prescriptionLoader = true;
      try {
        if (this.data.prescriptionId) {
          this.PrescriptionMasterService.getPrescription(
            this.data.prescriptionId
          ).subscribe((res) => {
            this.prescriptionInfo = res;
            this.prescriptionLoader = false;
          });
        }
        if (this.data.appointmentId) {
          this.PrescriptionMasterService.getPrescriptionByAppointmentId(
            this.data.appointmentId
          ).subscribe((res) => {
            this.prescriptionInfo = res;
            this.prescriptionLoader = false;
          });
        }
      } catch (error) {
        this.TosterService.customToast(String(error), 'error');
        this.prescriptionLoader = true;
      }
    }
  }

  // pdfSavePrint(click: string) {
  //   const printableContent = this.printableSection.nativeElement;
  //   if (printableContent) {
  //     html2canvas(printableContent).then((canvas) => {
  //       const pdf = new jsPDF();
  //       const imgData = canvas.toDataURL('image/png');
  //       pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // The last two arguments are width and height (A4 size)
  //       if (click == 'save') {
  //         pdf.save('Prescription.pdf');
  //       }
  //       if (click == 'print') {
  //         pdf.autoPrint();
  //         const blob = pdf.output('blob');
  //         const pdfUrl = URL.createObjectURL(blob);
  //         const printWindow: Window | null = window.open(pdfUrl);
  //         if (printWindow) {
  //           printWindow.onload = () => {
  //             printWindow.print();
  //           };
  //         } else {
  //           console.error('Print window could not be opened.');
  //         }
  //       }
  //     });
  //   } else {
  //     console.error('Printable section not found');
  //   }
  // }

  pdfSavePrint(click: string) {
    const printableContent = this.printableSection.nativeElement;
    if (printableContent) {
      const scale = 2; // Adjust the scale as needed for higher quality
      const options = {
        scale: scale, // Increase the scale for better image quality
        useCORS: true, // Allow cross-origin requests for images
      };
      html2canvas(printableContent, options).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 size
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        if (click === 'save') {
          pdf.save('Prescription.pdf');
        }
        if (click === 'print') {
          //
          const blob = pdf.output('blob');
          const pdfUrl = URL.createObjectURL(blob);
          const printWindow: Window | null = window.open(pdfUrl);
          if (printWindow) {
            printWindow.onload = () => {
              // printWindow.print();
              pdf.autoPrint();
            };
          } else {
            console.error('Print window could not be opened.');
          }
        }
      });
    } else {
      console.error('Printable section not found');
    }
  }
}
