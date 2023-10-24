import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  fields: any = [];
  @Input() model: any;
  @Input() formName: any;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    
  }
  getFormControlsFields() {
    let id = 0
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators:any = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({ ...fieldProps, fieldName: field,id : id++ });
    }
    return formGroupFields;
  }
  private addValidator(rules: any) {
    if (!rules) {
      return [];
    }
  
    const validator = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        default:
          throw new Error(`Unsupported validation rule: ${rule}`);
      }
    });
  
    return validator;
  }


  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.registerForm = new FormGroup(formGroupFields);
  }
}
