import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gethousedetailsforuser, getmaintanceTrackingRecord, getrequestdetailsForowner, onChangeroomgettenanrdata, savehousemaintancerqst, takeactionagainestrequest } from 'src/app/config/api-config';
import { EncryptService } from 'src/app/services/encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class CompliantService {


  constructor(private http: HttpClient,private enctserv:EncryptService) { }


    savehousemaintancerwst(object: any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers
      };
      let fullUrl = savehousemaintancerqst;
      return this.http.post(fullUrl,object,options);
    }

    gethousedetailsforuser(phoneNo: any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers,
        params :{
          phoneNo : phoneNo
        }
      };
      let fullUrl = gethousedetailsforuser;
      return this.http.get(fullUrl,options);
    }

    onChangeroomgettenanrdata(id: any, houseId: any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers,
        params :{
          roomId : id,
          houseId : houseId
        }
      };
      let fullUrl = onChangeroomgettenanrdata;
      return this.http.get(fullUrl,options);
    }

    getmaintanceTrackingRecord(userId: any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers
      };
      let fullUrl = getmaintanceTrackingRecord;
      return this.http.get(fullUrl,options);
    }

    getrequestdetailsForowner() {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers,
      };
      let fullUrl = getrequestdetailsForowner;
      return this.http.get(fullUrl,options);
    }

    takeactionagainestrequest(actiontype: any,rqstId:any) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.enctserv.getJwtToken(),
        'Access-Control-Allow-Origin': '*',
      });
      let options = {
        headers: headers,
        params :{
          actiontype : actiontype,
          rqstId : rqstId
        }
      };
      let fullUrl = takeactionagainestrequest;
      return this.http.get(fullUrl,options);
    }
}
