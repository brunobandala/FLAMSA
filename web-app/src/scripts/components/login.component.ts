declare var componentHandler: any;
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {SessionService} from "../services/session.service";
import {Response} from "@angular/http";

@Component({
    selector: "login",
    templateUrl: "../../views/login.html",
    providers : [SessionService]
})

export class LoginComponent {
    userSection: any;
    loginSection: any;

    ngAfterViewInit() {
        componentHandler.upgradeDom();
      }
    
    public constructor(
        private router:Router, 
        private _sessionService : SessionService) {
            document.getElementById("demo-menu-lower-left").setAttribute("disabled", "true");
        }


    construction(username: string){
        this.userSection = document.getElementById("userSection");
        this.loginSection = document.getElementById("loginSection");
        while (this.loginSection.hasChildNodes()){
            this.loginSection.removeChild(this.loginSection.firstChild);
        }
        var userText = document.createElement("span");
        userText.innerText = username;
        this.userSection.appendChild(userText);
        this.userSection.removeAttribute("hidden");
    }
    
    login(username:string, password: string) {
        this._sessionService.loginUser(username,password).subscribe((res:Response)=>{
            
            localStorage.setItem("session",JSON.stringify(res.json()));
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