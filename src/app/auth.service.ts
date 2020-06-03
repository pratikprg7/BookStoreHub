import { Injectable } from '@angular/core';




interface registerResponse{
  success: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  getUserDetails(username, passowrd){
    //Check Authentication
  }

  //registerUserDetails(firstname, lastname, emailid, passoword, cpassword){
    //Registering new user
    //return this.http.post<registerResponse>('/api/register',{
     // firstname, lastname, emailid, passoword, cpassword
   // })
 // }
}
