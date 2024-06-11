import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface  Iloginl{
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private JwtHelperService = new JwtHelperService();
  loginFrom!: Iloginl;
  constructor(
    private _http:HttpClient,
  ){ }

   login(data:Iloginl): Observable<any>{
    return this._http.post('https://knowledgehub.demopolyct.online/api/auth/login',{
      email: data.email,
      password: data.password
    })
   }
   isLoggedIn():boolean{
    if(this.getToken()){
      const expired = this.JwtHelperService.isTokenExpired(this.getToken());
      if(expired){
        localStorage.clear();
      }
      return !expired;
    }
    return false;
   }
   getToken(){
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTc1NzM1NTgsImV4cCI6MTc0OTEwOTU1NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.6UmQxc8fTAVBSiSTn859oBjmzZEJlp9pYh7Xh1jCD5k';
   }
}
