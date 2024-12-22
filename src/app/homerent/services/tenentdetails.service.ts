import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addroomforhome, addtenanttoroom, viewtenanttoroom } from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class TenentdetailsService {
 
  constructor(private http: HttpClient,private enctserv:EncryptService) { }

  addtenanttoroom(formData: FormData) {
    let headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let fullUrl =addtenanttoroom;
    return this.http.post(fullUrl,formData,options);
  }

  gettenantdetails(houseId: any, roomId: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params:{
        houseId:houseId,
        roomId:roomId
      }
    };
    let fullUrl =viewtenanttoroom;
    return this.http.get(fullUrl,options);
  }
}
