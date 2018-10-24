import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedinUser: object;
  constructor( private authenticationService: AuthenticationService )  { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
   this.loggedinUser= JSON.parse(localStorage.getItem('currentUser'));
    }
   
  }
  logOut(){
    this.authenticationService.logout();
    window.location.reload();
  }

}
