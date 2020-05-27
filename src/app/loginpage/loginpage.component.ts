import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit(): void {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target 
    const username = event.target.querySelector('#username').value
    const password = event.target.querySelector('#password').value

    //this.Auth.getUserDetails(username, password)
    console.log(username, password)
  }

}