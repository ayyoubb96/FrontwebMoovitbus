import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import {CasUrgentsService} from '../Services/cas-urgents.service';
@Component({
  selector: 'app-map-urgence',
  templateUrl: './map-urgence.component.html',
  styleUrls: ['./map-urgence.component.css']
})
export class MapUrgenceComponent implements OnInit {
  private map: any;

  constructor(private urgenceService:CasUrgentsService) { }
  urgencesListe;

  ngOnInit() {
    let url = this.urgenceService.host+'/CasUrgents';
    this.loadMap();
    this.urgenceService.getRessource(url)
      .subscribe(data=>{
        this.urgencesListe=data;
        console.log(this.urgencesListe);
        this.urgencesListe.forEach(val=>{
          console.log(val.bus.longitude);
          let Marker = Leaflet.marker([val.bus.latitude,  val.bus.longitude ]);
          var popup = Leaflet.popup({ minWidth:50,maxWidth:100, autoClose: false, closeOnClick: false,})
            .setContent(val.type);
          Marker.addTo(this.map);
          Marker.bindPopup(popup).openPopup();



        });



      })

  }

  loadMap(){
    this.map = Leaflet.map("mapId").setView([35.73793, -5.88322], 13);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'MoovitBus © 2021 / 2022 '})
      .addTo(this.map); // This line is added to add the Tile Layer to our map
  }
}
