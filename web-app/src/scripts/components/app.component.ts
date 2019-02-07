declare var componentHandler: any;
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from 'angular2-cookie/core';
import { SessionService } from "../services/session.service";
import { ClientSessionService } from "../services/client.session.service";
@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.component.html',
  providers: [SessionService]
})
export class AppComponent {
  showFooter:boolean;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private _sessionService: SessionService) {
      if (screen.width<1024) 
          this.showFooter = false;
      else{
          this.showFooter = true;
      }
  }

  Logout() {
    this._sessionService.logoutUser().subscribe((response: any) => {
      localStorage.removeItem("session");
      this.router.navigate(['/login']);
    }, (error: any) => { });

  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  
  navigation(){
    this.router.navigate(['/home']);
  }

}


