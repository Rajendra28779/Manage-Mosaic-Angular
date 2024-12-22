import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gethousedetailsforuser, gethousemasterData, getmaintanceTrackingRecord, getroommasterData, onChangeroomgettenanrdata, savehousemaintancerqst } from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class CommenService {
 
  
 
  constructor(private http: HttpClient,private enctserv:EncryptService) { }

  gethousemasterData(userId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params :{
        userId : userId
      }
    };
    let fullUrl = gethousemasterData;
    return this.http.get(fullUrl,options);
  }

  getroommasterData(userId:any, houseId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params :{
        userId : userId,
        houseId : houseId
      }
    };
    let fullUrl = getroommasterData;
    return this.http.get(fullUrl,options);
  }

}
