import {Component} from '@angular/core';
import {NavigationStart, NavigationEnd, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        spinner.show();
        console.log("Navigation Start");
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          spinner.hide()
        }, 300)
        console.log("Navigation End");
      }
    });
  }
}
