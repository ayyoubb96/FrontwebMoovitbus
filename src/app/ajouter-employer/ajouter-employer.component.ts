import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ajouter-employer',
  templateUrl: './ajouter-employer.component.html',
  styleUrls: ['./ajouter-employer.component.css']
})
export class AjouterEmployerComponent implements OnInit {



    suivantactivated =false;

  constructor(private http: HttpClient) {


}

  onCreatePost(postData: {nom: string;
    prenom: string;
    email: string;
    password: string;
    num_tel: string;
                          tel: string;
                           }) {
    // Send Http request

    this.http
      .post(
        'http://localhost:8080/api/admin/add/chauffeur',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onSelectedElementList(){

  }
  activatesuivant(){
    this.suivantactivated=true;
  }


  ngOnInit(): void {

  }

}
