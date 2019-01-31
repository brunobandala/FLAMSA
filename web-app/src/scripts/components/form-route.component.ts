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
      console.log(element);
    }
    console.log(this.myFormRoute.value);
    console.log(this.routes);
    console.log(this.selected);
  }

  selectedCheck(checkbox: any) {
    this.routes.forEach(element => {
      if (element.route_name == checkbox) {
        this.selected.push(element);
        this.routes = this.routes.filter((e) => e.route_name != element.route_name);
      }
    });
  }

  selectedCheck2(checkbox: any) {
    this.selected.forEach((element: any) => {
      if (element.route_name == checkbox) {
        this.routes.push(element);
        this.selected = this.selected.filter((sel:any) => sel.route_name != element.route_name);
      }
    });
  }
}
