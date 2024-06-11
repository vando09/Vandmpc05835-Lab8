import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iunit } from 'src/app/pages/unit/unit.component';
import { AuthService } from './auth.service';
 
const URL_unit = 'https://knowledgehub.demopolyct.online/api/unit'


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  getUnit(): Observable<any>{
    return this.http.get(URL_unit,{
      headers: new HttpHeaders().set('x-access-token', this.authService.getToken())
    });
  }
  postUnit(data: Iunit): Observable<any>{
    return this.http.post(URL_unit,{
      name : data.name,
      address:data.address,
      description:data.description
    })
  }
  getUnitById(id:number): Observable<any>{
    return this.http.get(URL_unit+id)
  }
  putUnit(data: Iunit,id:string): Observable<any>{
    return this.http.put(URL_unit+id,{
      name : data.name,
      address:data.address,
      description:data.description
    });
  }
}
