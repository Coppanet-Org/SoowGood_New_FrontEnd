import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagnostic-center',
  templateUrl: './diagnostic-center.component.html',
  styleUrls: ['./diagnostic-center.component.scss'],
})
export class DiagnosticCenterComponent {
  @Input() diagnostic!: any;
}
