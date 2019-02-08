declare var componentHandler: any;


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'form-route',
  templateUrl: '../../views/form-route.component.html',
})
export class FormRouteComponent implements OnInit {
  myFormRoute: FormGroup;
  showImage:boolean;
  dialog:any;
  toast:any;
  
  routes = [{
    id: 1,
    route_name: "A"
  }, {
    id: 2,
    route_name: "B"
  }, {
    id: 3,
    route_name: "C"
  }, {
    id: 4,
    route_name: "D"
  }]

  selected: any;
  routesSelected: any[] = [];

  constructor(private fb: FormBuilder, private router:Router) {
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
      this.myFormRoute.get(key).clearValidators();
      this.myFormRoute.get(key).updateValueAndValidity();
    }

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
    this.myFormRoute = this.fb.group({
      name: ['', Validators.required],
      km: ['', Validators.required]
    });
    this.selected = [];

    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  onSubmit() {
//    this.routesSelected = document.getElementsByName("routesSelected");
 //   for (let i = 0; i < this.routesSelected.length; i++) {
  //    const element = this.routesSelected[i];
   // }
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