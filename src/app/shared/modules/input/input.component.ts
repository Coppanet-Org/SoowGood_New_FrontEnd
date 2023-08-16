import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() inputId!: string;
  @Input() defaultOption!: string;
  @Input() className!: string;
  @Input() options!: any[];
  @Input() isSelectInput: boolean = false;
  @Input() readonly: boolean = false;
  @Input() type!: string;
  @Input() placeholder!: string;

  constructor() {
    console.log(this.type);
    
  }

  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(newValue: any) {
    this.value = newValue.target?.value;
    this.onChange(newValue.target?.value);
    this.onTouched();
  }
}
