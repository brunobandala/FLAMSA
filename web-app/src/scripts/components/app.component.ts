declare var componentHandler: any;
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '../../views/app.component.html'
})
export class AppComponent {
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }


}


