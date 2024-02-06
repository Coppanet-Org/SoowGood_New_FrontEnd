import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accout-delete-request',
  templateUrl: './accout-delete-request.component.html',
  styleUrl: './accout-delete-request.component.scss',
})
export class AccoutDeleteRequestComponent implements OnInit {
  deleteForm!: FormGroup;
  url: string = `https://apisoowgoodbeta.com/api/app/user-data-delete`;
  message: any = '';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadForm();
  }

  loadForm() {
    this.deleteForm = this.fb.group({
      mobileNumber: '',
      fullName: '',
      description: '',
    });
  }

  submit() {
    try {
      this.httpClient.post(this.url, this.deleteForm.value).subscribe({
        next: (res) => {
          this.message = res;
          console.log('Request successful:', res);
        },
        error: (err) => {
          console.error('Error occurred:', err);
          // Handle errors here
        },
      });
    } catch (error) {
      console.error('Exception occurred:', error);
    }
  }
}
