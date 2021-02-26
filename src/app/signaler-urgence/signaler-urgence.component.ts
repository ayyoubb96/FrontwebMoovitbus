import { Component, OnInit } from '@angular/core';
import {CasUrgentsService} from '../Services/cas-urgents.service';

@Component({
  selector: 'app-signaler-urgence',
  templateUrl: './signaler-urgence.component.html',
  styleUrls: ['./signaler-urgence.component.css']
})
export class SignalerUrgenceComponent implements OnInit {

  constructor(private urgenceService:CasUrgentsService) { }

  chauffeur_id;
  ngOnInit() {
    this.chauffeur_id = localStorage.getItem("user_id");
  }


  signalerUrgence(data) {
    console.log(data);
    let url = this.urgenceService.host + '/SignalerCasUrgent?id_chauffeur='+data.chauffeur_id+'&type='+data.type;

    this.urgenceService.getRessource(url)
      .subscribe(data=>{
        console.log("successfull");

      },err=>{
        console.log(err);
      });
  }
}
