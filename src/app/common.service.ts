/**import { Injectable } from '@angular/core';
import {HttpClientModule, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: Http) { }
  saveUser(user){
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
      .map((response: Response) => response.json())
  }

  getUser(){
    return this.http.get('http://localhost:8080/api/getUser/')
        .map((response: Response) => response.json())
  }

  deleteUser(id){
    return this.http.post('http://localhost8080/api/deleteUser/', {'id' : id})
  }
}**/
