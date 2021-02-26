import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  public host : string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  Loginadm(admin){
    return this.http.post(this.host + "/api/admin/login",admin)

  }

  Loginch(admin:any){
    return this.http.post(this.host + "/api/chauffeur/login",admin)

  }
}
