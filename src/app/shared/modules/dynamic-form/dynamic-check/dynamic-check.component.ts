import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-check',
  templateUrl: './dynamic-check.component.html',
  styleUrls: ['./dynamic-check.component.scss']
})
export class DynamicCheckComponent {
  @Input() field: any;
  @Input() formName!: FormGroup;
}
