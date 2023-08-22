import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agent-signup',
  templateUrl: './agent-signup.component.html',
  styleUrls: ['./agent-signup.component.scss']
})
export class AgentSignupComponent {
  signupForm!: FormGroup
  isLoading!:boolean
  constructor(){
  
  }
  
  onSubmit(){}
  
}
