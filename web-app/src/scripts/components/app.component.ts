declare var componentHandler: any;
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {CookieService} from 'angular2-cookie/core';
import {SessionService} from "../services/session.service";
@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.component.html',
  providers : [SessionService]
})
export class AppComponent {

  constructor(
    private router:Router,
    private _cookieService:CookieService,
    private _sessionService:SessionService){}
  Logout(){
    this._sessionService.logoutUser().subscribe((response:any)=>{
      localStorage.removeItem("session");
      this.router.navigate(['/login']);
    },(error:any)=>{});

  }
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }


}

