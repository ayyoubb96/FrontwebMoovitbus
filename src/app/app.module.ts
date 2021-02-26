import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import {ListeAbonneComponent} from './liste-abonne/liste-abonne.component';
import {ListeemployeComponent} from './listeemploye/listeemploye.component';
import {ListeBusPleinComponent} from './liste-bus-plein/liste-bus-plein.component';
import {AjouterEmployerComponent} from './ajouter-employer/ajouter-employer.component';
import {RouterModule, Routes} from '@angular/router';
import {SignalerUrgenceComponent} from './signaler-urgence/signaler-urgence.component';
import {MapUrgenceComponent} from './map-urgence/map-urgence.component';


const appRoutes: Routes = [
  { path: 'listeabonne', component: ListeAbonneComponent},
  { path: 'listeemployee', component: ListeemployeComponent},
  { path: 'listebusplein', component: ListeBusPleinComponent},
  { path: 'ajouteremployer', component: AjouterEmployerComponent},
  { path: 'adminpage', component: AdminComponent},
  {
    path:'signalerUrgence',
    component:SignalerUrgenceComponent
  },
  {
    path:'listeUrgences',
    component:MapUrgenceComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ChauffeurComponent,
    ListeAbonneComponent,
    ListeemployeComponent,
    ListeBusPleinComponent,
    AjouterEmployerComponent,
    SignalerUrgenceComponent,
    MapUrgenceComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
