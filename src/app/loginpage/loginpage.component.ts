import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  title: 'reactive forms';
  loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username' : this.formBuilder.control('',Validators.required),
      'password' : this.formBuilder.control('',Validators.required)
    });
  }

  get username() {
    return this.loginForm.get('username'); //notice this
  }
  get password() {
    return this.loginForm.get('password');  //and this too
  }

  handleSubmit() {
    console.log(this.loginForm.value);
  }
  /**loginUser(event){
    event.preventDefault()
    const target = event.target 
    const username = event.target.querySelector('#username').value
    const password = event.target.querySelector('#password').value

    //this.Auth.getUserDetails(username, password)
    console.log(username, password)
  }**/

}