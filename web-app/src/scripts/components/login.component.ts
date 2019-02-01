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
   
    ngAfterViewInit() {
        componentHandler.upgradeDom();
    }
    
    public constructor(
        private router:Router, 
        private _sessionService : SessionService) {}

    login(username:string, password: string) {
        this._sessionService.loginUser(username,password).subscribe((res:Response)=>{
            
            localStorage.setItem("session",JSON.stringify(res.json()));
            this.router.navigate(['/home']);
          },(err:any)=>{
            let toast:any;
            toast = document.querySelector('.mdl-js-snackbar');
            toast.MaterialSnackbar.showSnackbar({message : "EMAIL / PASSWORD INVÁLIDOS"});
          }
          );
    }
}