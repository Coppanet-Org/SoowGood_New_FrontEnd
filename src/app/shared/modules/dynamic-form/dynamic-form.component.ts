import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {


fields:any= [];
model = {
        name: '',
        lastName: '',
        address: '',
        age: '',
 };
  getFormControlsFields() {
    const formGroupFields:any = {};
    for (const field of Object.keys(this.model)) {
        formGroupFields[field] = new FormControl("");
        this.fields.push(field);
    }
    return formGroupFields;
}

}
