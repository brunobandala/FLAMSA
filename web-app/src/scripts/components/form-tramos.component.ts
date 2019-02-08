declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { RoutesService } from "../services/routes.service"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from "@angular/http";


@Component({
  selector: 'form-tramos',
  templateUrl: '../../views/form-tramos.component.html',
  providers: [RoutesService]
})
export class FormTramosComponent implements OnInit {
  myForm: FormGroup;
  requestRoutes: any;
  showImage:boolean;
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  constructor(
    private fb: FormBuilder,
    private _routesService: RoutesService) {

    this.requestRoutes = {};
    this.myForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      km: ['', Validators.required]
    });

    if (screen.width < 1024)
      this.showImage = false;
    else {
      this.showImage = true;
    }

  }

  ngOnInit() {

  }

  onSubmit() {

    let form: any = this.myForm.value;
    this.requestRoutes.name = form.origin + " - " + form.destination;
    this.requestRoutes.origin = form.origin;
    this.requestRoutes.destination = form.destination;
    this.requestRoutes.distance = form.km;

    this._routesService.saveRoute(this.requestRoutes).subscribe((response: Response) => {
      console.log(response.json());
    });
  }

}
