import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient,private _Router:Router) { }
  userData:any;

saveUserData(){
 if( localStorage.getItem("token")!=null)
  {
    let encodeToken:any=localStorage.getItem("token");
    let decodeToken= jwtDecode(encodeToken);
    this.userData=decodeToken;
    console.log(decodeToken);
  }
}



  setLogin(loginData:object):Observable<any>{

return this._httpclient.post(`${environment.baseURL}/api/account/login`,loginData);

  }

  Logout()
  {
    localStorage.removeItem("token");
    this._Router.navigate(['/Login']);
    console.log("loged out");

  }

resetPassword(passwordData:object):Observable<any>
{
return this._httpclient.post(`${environment.baseURL}/api/account/reset-password`,passwordData);
}



}
