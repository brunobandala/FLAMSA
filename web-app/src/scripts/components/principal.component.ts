declare var componentHandler: any;
import { Component } from "@angular/core";

@Component({
    selector: 'principal',
    templateUrl: '../../views/principal.component.html'
})

export class PrincipalComponent {

    ngAfterViewInit() {
        componentHandler.upgradeDom();
    }

    constructor() {
        
    }
}