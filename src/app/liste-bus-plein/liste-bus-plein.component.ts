import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-liste-bus-plein',
  templateUrl: './liste-bus-plein.component.html',
  styleUrls: ['./liste-bus-plein.component.css']
})
export class ListeBusPleinComponent implements OnInit {
  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/station/surcharge';
  constructor(http: HttpClient) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/station/surcharge')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
  }

  ngOnInit(): void {
  }

}
