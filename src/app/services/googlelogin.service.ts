import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleloginService {
  private authStatus = new Subject<any>();

  constructor(private http: HttpClient) {
    // Load Google API on service initialization
    this.loadGoogleApi();
  }

  private loadGoogleApi() {
    google.accounts.id.initialize({
      client_id: '243335143053-rmpl6ttt4srog99fvhlmmr1hafkcug7o.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });
  }

  // This function is called after user signs in
  private handleCredentialResponse(response: any) {
    let token = response.credential
    console.log('ID Token:', response.credential);
    this.http.post('http://localhost:8028/login/google', { token }).subscribe(
    (response) => console.log('Login successful', response),
    (error) => console.error('Login failed', error)
  );
   // this.authStatus.next(token);  // Send token to any component that listens to this observable
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
