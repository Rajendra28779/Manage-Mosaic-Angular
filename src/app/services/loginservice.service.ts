import { Injectable } from '@angular/core';
// import {loginUrl,checkusername,signin,getbatchlist,gettechlist,getemplist,saveemployee,search,
//   hoslist,doclist,patlist,savedata,getlist} from '../config/api-config'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {





  constructor(private http: HttpClient) { }

  login(object:any) {
    console.log(object);
    let options = {
      // params: {
      //   'fastName': object.fastName,
      // }
    }
    var fullUrl ="loginUrl";
    return this.http.post(fullUrl,object,options)
  }


  checkusername(usename:any) {
    // console.log(object);
    let options = {
      params: {
        'username': usename,

      }
    }
    var fullUrl ="checkusername";
    return this.http.get(fullUrl,options)
  }
  signin(usename:any,password:any) {
    // console.log(object);
    let options = {
      params: {
        'username': usename,
        'password': password,

      }
    }
    var fullUrl ="signin";
    return this.http.get(fullUrl,options)
  }
}
