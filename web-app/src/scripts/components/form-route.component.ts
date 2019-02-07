declare var componentHandler: any;


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-route',
  templateUrl: '../../views/form-route.component.html',
})
export class FormRouteComponent implements OnInit {
  myFormRoute: FormGroup;

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
  routesSelected: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myFormRoute = this.fb.group({
      name: ['', Validators.required],
      km: ['', Validators.required]
    });
    this.selected = [];
  }

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  onSubmit() {
    this.routesSelected = document.getElementsByName("routesSelected");
    for (let i = 0; i < this.routesSelected.length; i++) {
      const element = this.routesSelected[i];
    }
  }

  selectedCheck(checkboxLabel: any, divCatalogSelected:any, divCatalog:any) {
    var indexList = 0;

    if (divCatalogSelected.childNodes.length >= divCatalog.childNodes.length) {
      indexList = divCatalogSelected.childNodes.length;
    }else{
      indexList = divCatalog.childNodes.length;
    }

    for (let index = 0; index < indexList; index++) {
      if (divCatalog.childNodes[index] === checkboxLabel) {
        divCatalogSelected.appendChild(checkboxLabel);
        console.log(divCatalog);
      }else{
        if (divCatalogSelected.childNodes[index] == checkboxLabel) {
          divCatalog.appendChild(checkboxLabel);
          console.log(divCatalogSelected);
        }
      }
    }
  }
}
