import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addroomforhome } from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class TenentdetailsService {


  constructor(private http: HttpClient,private enctserv:EncryptService) { }

  addroomforhome(formData: FormData) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let fullUrl =addroomforhome;
    return this.http.post(fullUrl,formData,options);
  }
}
