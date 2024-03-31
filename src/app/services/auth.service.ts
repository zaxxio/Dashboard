import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(http: HttpClient) {
  }

  onSignIn() {

  }

  isSignedIn() {
    if (localStorage.getItem("token") != null) {
      console.log("Signed In")
      return true;
    } else {
      return false;
    }
  }

}
