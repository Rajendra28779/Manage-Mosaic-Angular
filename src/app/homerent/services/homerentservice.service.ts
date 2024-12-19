import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addnewhome, getallhousedetialsforuserspecific,getdisplayhousedetails, gethousemasterData, getroommasterData} from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class HomerentserviceService {



  constructor(private http: HttpClient,private enctserv:EncryptService) { }

  addnewhome(object: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
    };
    let fullUrl =addnewhome;
    return this.http.post(fullUrl,object,options);
  }

  getallhousedetialsforuserspecific(userid: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params :{
        userid : userid
      }
    };
    let fullUrl =getallhousedetialsforuserspecific;
    return this.http.get(fullUrl,options);
  }

  getdisplayhousedetails(houseId: any, userid: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    let options = {
      headers: headers,
      params :{
        houseId : houseId,
        userid : userid
      }
    };
    let fullUrl =getdisplayhousedetails;
    return this.http.get(fullUrl,options);
  }

  gethousemasterData(userId:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
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
