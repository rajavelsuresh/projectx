import { Component } from '@angular/core';
import { Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = true;
  title = 'projectx';
  constructor(private router: Router ) {
    this.router = router;
  }
  modifyHeader() { // This method is called many times
    console.log(this.router.url); // This prints a loot of routes on console
    if (this.router.url === '/login') {
        this.showHeader = false;
    } else {
        this.showHeader = true;
    }
}
}
