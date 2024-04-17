import { Injectable } from '@angular/core';
import {loginUrl,checkusername,signin,getbatchlist,gettechlist,getemplist,saveemployee,search,
  hoslist,doclist,patlist,savedata,getlist} from '../config/api-config'
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
    var fullUrl =loginUrl;
    return this.http.post(fullUrl,object,options)
  }

  getemplist(batchid: any, techid: any) {
    let options = {
      params: {
          'batchid': batchid,
          'techid': techid
        }
    }
    var fullUrl =getemplist;
    return this.http.get(fullUrl,options)
  }
  save(emp: any, mark: any) {
    let options = {
      params: {
          'emp': emp,
          'mark': mark
        }
    }
    var fullUrl =saveemployee;
    return this.http.get(fullUrl,options)
  }

  savedata(adddate: any, disdate: any, amount: any, scmid: any, emp: any) {
    let options = {
      params: {
          'adddate': adddate,
          'disdate': disdate,
          'amount': amount,
          'scmid': scmid,
          'emp': emp,
        }
    }
    var fullUrl =savedata;
    return this.http.get(fullUrl,options)
  }

  search(batchid: any) {
    let options = {
      params: {
          'batchid': batchid,
        }
    }
    var fullUrl =search;
    return this.http.get(fullUrl,options)
  }

  getbatchlist() {
    let options = {}
    var fullUrl =getbatchlist;
    return this.http.get(fullUrl,options)
  }

  hoslist() {
    let options = {}
    var fullUrl =hoslist;
    return this.http.get(fullUrl,options)
  }

  doclist(batchid: any) {
    let options = {
      params: {
        'hospid': batchid,
      }
    }
    var fullUrl =doclist;
    return this.http.get(fullUrl,options)
  }

  getlist(batchid: any) {
    let options = {
      params: {
        'hospid': batchid,
      }
    }
    var fullUrl =getlist;
    return this.http.get(fullUrl,options)
  }

  pat(batchid: any) {
    let options = {
      params: {
        'docid': batchid,
      }
    }
    var fullUrl =patlist;
    return this.http.get(fullUrl,options)
  }


  gettechlist() {
    let options = {}
    var fullUrl =gettechlist;
    return this.http.get(fullUrl,options)
  }

  checkusername(usename:any) {
    // console.log(object);
    let options = {
      params: {
        'username': usename,

      }
    }
    var fullUrl =checkusername;
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
    var fullUrl =signin;
    return this.http.get(fullUrl,options)
  }
}
