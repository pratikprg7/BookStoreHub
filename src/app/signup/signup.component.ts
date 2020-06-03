import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted = false;
  singupForm: FormGroup;

  constructor(private auth: FormBuilder) {}
 

  ngOnInit() {
    this.singupForm = this.auth.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailid: [null, [Validators.email, Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      cpassword: ['',Validators.required]
    });
  }

  get f() { return this.singupForm.controls; }

  handleSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.singupForm.invalid) {
            return;
        }
  }
  /**registerUser(event){

    event.preventDefault()
    const error = []
    const target = event.target
    const firstname = event.target.querySelector('#FirstName').value
    const lastname = event.target.querySelector('#LastName').value
    const email = event.target.querySelector('#Emailid').value
    const password = event.target.querySelector('#password').value
    const cpassowrd = event.target.querySelector('#cpassword').value

    if(password != cpassowrd){
      error.push("Password do not match");
    }

    console.log(firstname, lastname, email, password, cpassowrd)
  }**/
}
