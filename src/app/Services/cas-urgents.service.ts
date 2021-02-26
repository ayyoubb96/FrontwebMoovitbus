import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasUrgentsService {

  constructor(private http:HttpClient) { }

  public host:string="http://localhost:8080";






  getRessource(url) {
    return this.http.get(url);
  }
}
