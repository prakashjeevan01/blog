import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor() {}


registerForm= new FormGroup({
  firstname:new FormControl(""),
  LastName:new FormControl(""),
  email:new FormControl(""),
  mobile:new FormControl(""),
  gender:new FormControl(""),
  pwd:new FormControl(""),
  rpwd:new FormControl("")

})
signupSubmited(){
  console.log(this.registerForm);
}


}
