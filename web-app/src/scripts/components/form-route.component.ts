declare var componentHandler: any;


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-route',
  templateUrl: '../../views/form-route.component.html',
})
export class FormRouteComponent implements OnInit {
  myFormRoute: FormGroup;
  showImage:boolean;
  
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

  constructor(private fb: FormBuilder) {
    if (screen.width < 1024)
      this.showImage = false;
    else {
      this.showImage = true;
    }

  }

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
    if (this.searchInDivCatalogSelected(checkboxLabel, divCatalogSelected) && !this.searchInDivCatalog(checkboxLabel,divCatalog)) {
      divCatalog.appendChild(checkboxLabel);
    }else{
      divCatalogSelected.appendChild(checkboxLabel);
    }
  }

  searchInDivCatalogSelected(checkbox:any, divCatalogSelected:any){
    var validate:boolean;
    divCatalogSelected.childNodes.forEach((element: any) => {
      if (element == checkbox) {
        validate = true;
      }else{
        validate = false;
      }
    });

    return validate;
  }

  searchInDivCatalog(checkbox:any, divCatalog:any){
    var validate:boolean;
    divCatalog.childNodes.forEach((element: any) => {
      if (element == checkbox) {
        validate = true;
      }else{
        validate = false;
      }
    });

    return validate;
  }
}
