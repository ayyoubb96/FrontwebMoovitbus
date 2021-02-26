import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listeemploye',
  templateUrl: './listeemploye.component.html',
  styleUrls: ['./listeemploye.component.css']
})
export class ListeemployeComponent implements OnInit {
  responses : any;
  http2 :any;
  //url:any;
  texturl='http://localhost:8080/api/admin/AfficherEmploye';
  constructor(http: HttpClient) {
    this.http2=http
    //this.responses = new Array<any>();
    http.get('http://localhost:8080/api/admin/AfficherEmploye')
    .subscribe(responses => {
        console.log(responses);
        this.responses=responses;
    });
  }

  ngOnInit(): void {
  }

}
