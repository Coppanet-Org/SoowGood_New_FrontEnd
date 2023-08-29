import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.scss']
})
export class AgentLoginComponent {
loginForm!: FormGroup
isLoading!:boolean
constructor(){

}

onSubmit(){}
}
