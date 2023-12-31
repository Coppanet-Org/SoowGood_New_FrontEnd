
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterInputModel } from '../../utils/models/models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FilterComponent implements OnInit {
  @Input() filterForm!: FormGroup;
  @Input() filterInput!: FilterInputModel
  @Input() from = ''
  @Output() searchChanged = new EventEmitter<string>();
  @Output() getSpecializations = new EventEmitter<any>();
  @Output() callBuildForm = new EventEmitter<any>();
  @Output() selectedValueForFilter = new EventEmitter<any>();
  @Output() searchValue = new EventEmitter<any>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    this.filterForm.get('speciality')?.valueChanges.subscribe(specialtyId => {
      this.getSpecializations.emit(specialtyId);

    });

    this.route.queryParams.subscribe(params => {
      const doctorName = params['doctorname'];
      this.filterForm.get('search')?.setValue(doctorName);

    });
  }
  getFormControlsFields() {
    const formGroupFields: any = {};
    formGroupFields['search'] = new FormControl('');
    for (const field of this.filterInput.fields.filterField) {
      if (typeof field.formControlName === 'string') {
        formGroupFields[field.formControlName] = new FormControl('');
      } else {
        formGroupFields[field.formControlName.endDate] = new FormControl('');
        formGroupFields[field.formControlName.startDate] = new FormControl('');
      }
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
  }

  search() {
    this.searchValue.emit(this.filterForm.get('search')?.value)
    this.updateQueryParam(this.filterForm.get('search')?.value)
  }

  updateQueryParam(newDoctorName: string) {
    const currentParams = { ...this.route.snapshot.queryParams };
    currentParams['doctorname'] = newDoctorName;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: currentParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
