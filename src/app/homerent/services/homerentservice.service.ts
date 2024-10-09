import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addhomedetails, gethomedetails, getroomdetails, inactiveroomdetails, loginUrl, submitdetails } from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class HomerentserviceService {


  constructor(private http: HttpClient,private enctserv:EncryptService) { }

  savehomedetails(object: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.enctserv.getJwtToken()
    });
    let options = {
      headers: headers,
    };
    let fullUrl =addhomedetails;
    return this.http.post(fullUrl,object,options);
  }

  gethomedetails(userid: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.enctserv.getJwtToken()
    });
    let options = {
      headers: headers,
      params:{
        userid:userid
      }
    };
    let fullUrl =gethomedetails;
    return this.http.get(fullUrl,options)
  }

  getroomdetails(housedetails:any,userid: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.enctserv.getJwtToken()
    });
    let options = {
      headers: headers,
      params:{
        userid:userid,
        housedetails:housedetails,
      }
    };
    let fullUrl =getroomdetails;
    return this.http.get(fullUrl,options)
  }

  inactiveroomdetails(detailsid: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.enctserv.getJwtToken()
    });
    let options = {
      headers: headers,
      params:{
        detailsid:detailsid
      }
    };
    let fullUrl =inactiveroomdetails;
    return this.http.get(fullUrl,options)
  }

  submitdetails(object: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.enctserv.getJwtToken()
    });
    let options = {
      headers: headers
    };
    let fullUrl =submitdetails;
    return this.http.post(fullUrl,object,options)
  }
}
