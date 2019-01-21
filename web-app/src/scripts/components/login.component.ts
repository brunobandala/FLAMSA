import { Component } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "login",
    templateUrl: "../../views/login.html"
})

export class LoginComponent {
    private router: Router;
    private route: ActivatedRoute;

    redirection() {
        this.router.navigate(['/home']);
    }
}