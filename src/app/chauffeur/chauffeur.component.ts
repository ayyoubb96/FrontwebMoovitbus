import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {
  showVarq: boolean = false;
  acceptq: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChild() {
    this.showVarq = false;
    this.acceptq =true;
  }

  toggleChild1() {
    this.acceptq =false;
    this.showVarq = true;
  }
}
