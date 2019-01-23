import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "login",
    templateUrl: "../../views/login.html"
})

export class LoginComponent {
    private route: ActivatedRoute;

    constructor(private router: Router) {}

    redirection() {
        this.router.navigate(['/home']);
    }
}