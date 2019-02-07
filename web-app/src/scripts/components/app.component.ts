declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from 'angular2-cookie/core';
import { SessionService } from "../services/session.service";
import { ClientSessionService } from "../services/client.session.service";
import { GlobalVariable } from "../components/login.component";
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.component.html',
  providers: [SessionService]
})
export class AppComponent implements OnInit {
  showFooter:boolean;
  user:any;

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private _sessionService: SessionService,
    private activatedRoute: ActivatedRoute) {
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
  async reloadData():Promise<void> {
    this.user = await GlobalVariable;
  }
  
  ngOnInit(){
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }
  navigation(){
    console.log(this.user);
    console.log(GlobalVariable);
    this.router.navigate(['/home']);
  }

}


