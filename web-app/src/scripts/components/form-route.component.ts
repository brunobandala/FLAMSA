declare var componentHandler: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {StretchesService} from "../services/stretches.service";
import {RoutesService} from "../services/routes.service";
import {Response} from "@angular/http";

@Component({
  selector: 'form-route',
  templateUrl: '../../views/form-route.component.html',
  providers:[StretchesService,RoutesService]
})
export class FormRouteComponent implements OnInit {
  myFormRoute: FormGroup;
  showImage:boolean;
  dialog:any;
  toast:any;
  
  routes:any[];

  selected: any;
  routesSelected: any[] = [];

  constructor(
      private fb: FormBuilder, 
      private router:Router,
      private _stretchesService:StretchesService,
      private _routesService:RoutesService) {
    if (screen.width < 1024)
      this.showImage = false;
    else {
      this.showImage = true;
    }

  }

  nuevoRegistro(){
    this.dialog.close();
    this.myFormRoute.reset();
    for (const key in this.myFormRoute.controls) {
      this.myFormRoute.get(key).updateValueAndValidity();
    }

    this.routes = this.routes.concat(this.routesSelected);
    this.routesSelected = [];
    setTimeout(() => {
      componentHandler.upgradeDom();
    }, 20);

    var nodeList = document.querySelectorAll('.mdl-textfield');
    Array.prototype.forEach.call(nodeList, function (elem:any) {
        elem.MaterialTextfield.checkDirty();
    });

}

cancelarAlta(){
  let toast:any;
  toast = document.querySelector('.mdl-js-snackbar');
  toast.MaterialSnackbar.showSnackbar({message : "Redirigiendo...", timeout: 1000});
  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 1000);
}

  ngOnInit() {
    componentHandler.upgradeDom();
    this.myFormRoute = this.fb.group({
      name: ['', Validators.required],
      distance: ['', Validators.required]
    });
    this.selected = [];

    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');

    this._stretchesService.getAllStretches().subscribe((response:Response)=>{
      this.routes = response.json();
    });

  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  onSubmit() {
    let request:any = this.myFormRoute.value;
    request.stretches = this.routesSelected;

    this._routesService.saveRoute(request).subscribe((response:any)=>{
      this.dialog.showModal();
    });

  }

  selectedCheck(route:any,collectionName:string,collectionTarget:string) {
    var index = this[collectionName].findIndex((croute:any) => croute.id == route.id);
    this[collectionTarget].push(route);
    this[collectionName].splice(index,1);
    setTimeout(() => {
      componentHandler.upgradeDom();
    }, 20);

  }

}