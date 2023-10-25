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
          pdf.save(`${this.prescriptionInfo.patientName}-Prescription.pdf`);
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
  convertToBanglaText(drugName: string, schedule: string): string {
    const parts = schedule.split('+');
    const isTablet = drugName.toLowerCase().includes('tablet') || drugName.toLowerCase().includes('capsule');
    const isInjection = drugName.toLowerCase().includes('injection');
    const isDrops = drugName.toLowerCase().includes('drops');
    let medicineType:string;
    
    if (isTablet) {
      medicineType = 'টা';
    } else if (isInjection) {
      medicineType = 'নিবেন';
    } else if (isDrops) {
      medicineType = 'দিবেন ';
    }
    else {
      medicineType = 'বার';
    }
  
    const banglaText = parts.map((part, index) => {
      const partValue = parseInt(part, 10);
      let doseText = '';
      if (partValue === 0) {
        doseText = ''; // No dose
      } else {
        doseText = `১ ${medicineType == 'দিবেন' || 'দিবেন' ? 'বার' : medicineType} ${this.getTimeText(index)} ${isInjection ? 'নিবেন' : 'খাবেন'}`;
      }
      return doseText;
    });
    return banglaText.join(' - ');
  }

  // Helper function to get Bangla time text
  getTimeText(index: number): string {
    switch (index) {
      case 0:
        return 'সকালে';
      case 1:
        return 'দুপুর ';
      case 2:
        return 'রাতে';
      default:
        return 'অজানা';
    }
  }
  getDurationEnglishToBangla(index: number): string {
    switch (index) {
      case 0:
        return 'সকালে';
      case 1:
        return 'দুপুর ';
      case 2:
        return 'রাতে';
      default:
        return 'অজানা';
    }
  }
}
