import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(event){

    event.preventDefault()

    const target = event.target
    const firstname = event.target.querySelector('#FirstName').value
    const lastname = event.target.querySelector('#LastName').value
    const email = event.target.querySelector('#Emailid').value
    const password = event.target.querySelector('#password').value
    const cpassowrd = event.target.querySelector('#cpassword').value

    console.log(firstname, lastname, email, password, cpassowrd)
  }
}
