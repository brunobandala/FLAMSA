declare var componentHandler: any;
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.component.html'
})
export class AppComponent {

  constructor(
    private router:Router){}
  Logout(){
    document.cookie = "sails.sid = ; expires= Thu, 01 Jan 1970 00:00:00: UTC1; path=/;";
    this.router.navigate(['/login']);
  }
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }


}

