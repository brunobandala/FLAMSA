declare var componentHandler: any;
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {SessionService} from "../services/session.service";
import {Response} from "@angular/http";
import {ClientSessionService} from "../services/client.session.service";

@Component({
    selector: "login",
    templateUrl: "../../views/login.html",
    providers : [SessionService]
})

export class LoginComponent {
    userSection: any;
    loginSection: any;
    showImage:boolean;

    ngAfterViewInit() {
        componentHandler.upgradeDom();
      }
    
    public constructor(
        private router:Router, 
        private _sessionService : SessionService) {
            // document.getElementById("demo-menu-lower-left").setAttribute("disabled", "false");
            if (screen.width<1024) 
                this.showImage = false;
            else{
                this.showImage = true;
            }
        }


    construction(username: string){
    }
    
    login(username:string, password: string) {
        this._sessionService.loginUser(username,password).subscribe((res:Response)=>{
            this.construction(username);
            localStorage.setItem("session",JSON.stringify(res.json()));
            ClientSessionService.isLoggedIn = true;
            ClientSessionService.username = username;
            document.getElementById("demo-menu-lower-left").setAttribute("disabled", "false");
            this.router.navigate(['/home']);
          },(err:any)=>{
            let toast:any;
            toast = document.querySelector('.mdl-js-snackbar');
            toast.MaterialSnackbar.showSnackbar({message : "EMAIL / PASSWORD INVÁLIDOS"});
          }
          );
    }
}