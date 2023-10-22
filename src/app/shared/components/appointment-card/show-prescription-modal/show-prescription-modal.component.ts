import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-prescription-modal',
  templateUrl: './show-prescription-modal.component.html',
  styleUrls: ['./show-prescription-modal.component.scss'],
})
export class ShowPrescriptionModalComponent implements OnInit {
  @Input() isLoading!: boolean;
  pdfContent: Blob;
  pdfSrc: any;

  constructor(public dialogRef: MatDialogRef<ShowPrescriptionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.pdfContent = data.pdfContent;
    this.pdfSrc = data.pdfDataUrl;
  }

  ngOnInit() {
    console.log(this.isLoading);
  }
}
