import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent {
  @Input() headingText: any;
  @Input() buttonText: any;
  @Input() iconClass: any;
  @Output() openDialog: EventEmitter<void> = new EventEmitter<void>();
}
