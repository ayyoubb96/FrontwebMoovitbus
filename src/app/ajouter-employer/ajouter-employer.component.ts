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



  constructor(private http: HttpClient) {
}

handleClick(){

  fetch('http://localhost:8080/api/admin/ajouter/admin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "token": {
              "email": "hatimbakk25@gmail.com",
              "password": "45123"
          },
          "new admin": {
              "nom": "BARAKATE",
              "prenom": "ALI",
              "email": "ali@gmail.com",
              "password": "dfghsdfgfrsgs",
              "numTel": "4044644408074"
          }

      })
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          alert('done')
      })
      .catch(e => alert('error'))
}
  ngOnInit(): void {
  }

}
