import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-liste-abonne',
  templateUrl: './liste-abonne.component.html',
  styleUrls: ['./liste-abonne.component.css']
})
export class ListeAbonneComponent implements OnInit {
  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/api/abonnements/clients';
  constructor(http: HttpClient) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/api/abonnements/clients')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
  }

  ngOnInit(): void {
  }

}
