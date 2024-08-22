import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-TEST-0.2';

  LoginForm : FormGroup = new FormGroup({
    email :  new FormControl(''),
    password : new  FormControl('')
  });

  OnSubmit(){
    console.log(this.LoginForm.value);
  }
}
