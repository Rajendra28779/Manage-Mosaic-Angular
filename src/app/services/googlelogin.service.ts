import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { loginthroughgoogle } from '../config/api-config';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleloginService {
  private authStatus = new Subject<any>();

  constructor(private http: HttpClient,private router:Router) {
    // Load Google API on service initialization
    this.loadGoogleApi();
  }

  private loadGoogleApi() {
    try{
      google.accounts.id.initialize({
        client_id: '243335143053-rmpl6ttt4srog99fvhlmmr1hafkcug7o.apps.googleusercontent.com',
        callback: (response: any) => this.handleCredentialResponse(response)
      });
    }catch{
      console.log("google not defined");

    }
    // google.accounts.id.initialize({
    //   client_id: '243335143053-rmpl6ttt4srog99fvhlmmr1hafkcug7o.apps.googleusercontent.com',
    //   callback: (response: any) => this.handleCredentialResponse(response)
    // });
  }

  // This function is called after user signs in
  private handleCredentialResponse(response: any) {
    let token = response.credential
    console.log('ID Token:', response.credential);
    this.http.post(loginthroughgoogle, { token }).subscribe(
    (response:any) => {
      if(response.status==200){
        sessionStorage.setItem('user', JSON.stringify(response.userdata));
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/rentmanage/userdashboard']);
      }else{
        this.swal("Error",response.message,"error")
      }
    },
    (error) => console.error('Login failed', error)
  );
  }

    swal(title: any, text: any, icon: any) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text
      });
    }

  // This function is called to render the sign-in button
  renderButton(elementId: string) {
    google.accounts.id.renderButton(
      document.getElementById(elementId),  // The element where button will be rendered
      {
        theme: 'outline',  // Button style
        size: 'large',     // Button size
        text: 'Continue_in_with'
      }
    );
  }

  // This will return the observable that will notify components
  getAuthStatus(): Observable<any> {
    return this.authStatus.asObservable();
  }

  // Optionally: Method to prompt the user to sign in automatically
  promptSignIn() {
    google.accounts.id.prompt();
  }
}
