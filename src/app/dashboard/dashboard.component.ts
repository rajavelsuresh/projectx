import { Input, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lat: number = 20.593684;
  lng: number = 78.96288000000004;
  today: number = Date.now();
  constructor() {this.reset(); }
  ngOnInit() {
 setInterval( () => { this.today = Date.now(); }, 1000);
  }
reset() {}
}



let marker;

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {lat: 59.325, lng: 18.070}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.327, lng: 18.067}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}