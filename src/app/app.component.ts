import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  constructor(private router: Router) {

  }

  goDetail() {
    debugger;
    this.router.navigate(['/stock']);
  }

}
