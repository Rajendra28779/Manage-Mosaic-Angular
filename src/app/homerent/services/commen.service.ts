import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  downloadcommondoc,getdashboarddata,gethousemasterData,getroommasterData} from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class CommenService { 
   
 
  constructor(private readonly http: HttpClient,private readonly enctserv:EncryptService) { }

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

  downloadcommondoc(docPath: any) {
    const jsonObj = {
      f: docPath
  };
  const jsonString = JSON.stringify(jsonObj);
  const queryParam = btoa(jsonString);
  const url = downloadcommondoc + '?' + 'data=' + queryParam;
  return url;
  }
 
  getdashboarddata() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.enctserv.getJwtToken(),
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers
    };
    let fullUrl = getdashboarddata;
    return this.http.get(fullUrl,options);
  }

}
