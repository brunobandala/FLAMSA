import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "login",
    templateUrl: "../../views/login.html"
})

export class LoginComponent {

    
    public constructor(private router:Router) {
        
    }
    redirection() {
        this.router.navigate(['/home']);
    }
}