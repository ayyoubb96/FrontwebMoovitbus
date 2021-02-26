import {Component, Input, OnInit} from '@angular/core';
import {LoginserviceService} from '../Services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin:any ={
    email:'',
    password:'',
  }
  Chauffeur:any ={
    email:'',
    password:'',
  }
  showMeee: boolean=true;
  public demandes: any;
  err : boolean = false;

  showVarq : boolean = false;
  acceptq : boolean = false;
  valide : boolean = false;
  showad: boolean=false;


  showMea: boolean=false;
  showMec: boolean=false;
  showwMe: boolean=true;
  cne: any;
  mdp: any;
  @Input() showM: boolean=true;
  errr: boolean = false;
  private service:LoginserviceService;
  showch: boolean=false;

  constructor(private serv:LoginserviceService) { }

  ngOnInit(): void {}
  toggleChild() {
    this.showMea = false;
    this.showMec =true;
  }

  toggleChild1() {
    this.showMec =false;
    this.showMea = true;
  }

  registre() {

  }

  loginc() {

    this.serv.Loginch(this.Chauffeur).subscribe(data=>{
      this.demandes=data;
      localStorage.setItem("user_id" , this.demandes.id );
      if (this.demandes===null){
        this.err=true

      }
      if (this.demandes){
        this.showM=false;
        this.showch=true;


      }
    }, error => {
      console.log(error);

    });



  }
  logina() {

    this.serv.Loginadm(this.admin).subscribe(data=>{
      this.demandes=data;
    }, error => {
      console.log(error);
    });
    if (this.demandes===null){
      this.err=true

    }
    if (this.demandes.role=="admin"){
      this.showM=false;
      this.showad=true;



    }



  }
}
