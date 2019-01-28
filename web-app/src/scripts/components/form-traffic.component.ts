declare var componentHandler: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-traffic',
  templateUrl: '../../views/form-traffic.component.html',
})
export class FormTrafficComponent implements OnInit {
  myFormTraffic: FormGroup;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myFormTraffic = this.fb.group({
      provider: ['', Validators.required],
      client: ['', Validators.required],
      route: ['', Validators.required],
      product: ['', Validators.required],
      tariffProvider: ['', Validators.required],
      tariffClient: ['', Validators.required],
      accessories: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]+$/)]]
    });
  }

  onSubmit() {
    console.log(this.myFormTraffic.value)
  }

}
