declare var componentHandler: any;
import { Component, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "login",
    templateUrl: "../../views/login.html"
})

export class LoginComponent {
    userSection: any;
    loginSection: any;

    ngAfterViewInit() {
        componentHandler.upgradeDom();
      }
    
    public constructor(private router:Router) {
        
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

    redirection(username:string,password:string) {
        if(username != '' && password != ''){
            this.construction(username);
            this.router.navigate(['/home']);
        }
    }
}