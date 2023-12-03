import { DoctorProfileService } from './../../../proxy/services/doctor-profile.service';
import { SpecializationService } from './../../../proxy/services/specialization.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterInputModel } from '../../utils/models/models';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FilterComponent implements OnInit {
  @Input() filterForm!: FormGroup;
  @Input() filterInput!:FilterInputModel
  @Input() from=''
  @Output() searchChanged = new EventEmitter<string>();
  @Output() getSpecializations = new EventEmitter<any>();
  @Output() callBuildForm = new EventEmitter<any>();
  @Output() selectedValueForFilter = new EventEmitter<any>();

  constructor(private DoctorProfileService : DoctorProfileService){
    
  }


  ngOnInit(): void {
   this.buildForm();
   this.filterForm.get('speciality')?.valueChanges.subscribe(specialtyId => {
    this.getSpecializations.emit(specialtyId);

  });
  }
  getFormControlsFields() {
    const formGroupFields: any = {};
    formGroupFields['search'] = new FormControl('');
    for (const field of this.filterInput.fields.filterField) {
      formGroupFields[field.formControlName] = new FormControl('');
    }
    return formGroupFields;
  }



 buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.filterForm = new FormGroup(formGroupFields);
    this.filterForm.get('search')?.valueChanges.subscribe(value => {
      this.searchChanged.emit(value);
    });
  }



  submit() {
    this.selectedValueForFilter.emit(this.filterForm.value)
    this.filterForm.reset()
  }
}
