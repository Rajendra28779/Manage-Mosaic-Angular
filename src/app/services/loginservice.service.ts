import { Injectable } from '@angular/core';
import {loginUrl,checkusername,signinuser} from '../config/api-config'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  constructor(private http: HttpClient) { }

  login(username:any,password:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let object ={
      "userName":username,
      "password":password
    }
    let fullUrl =loginUrl;
    return this.http.post(fullUrl,object,options)
  }

  checkusername(usename:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params: {
        'username': usename,
      }
    }
    let fullUrl =checkusername;
    return this.http.get(fullUrl,options)
  }
  signin(object:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let fullUrl =signinuser;
    return this.http.post(fullUrl,object,options)
  }

  sendmail(object:any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let fullUrl =loginUrl;
    return this.http.post(fullUrl,object,options)
  }
}
