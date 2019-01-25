declare var componentHandler: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-user',
  templateUrl: '../../views/form-user.component.html',
})
export class FormUserComponent implements OnInit {
  formUser: FormGroup;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      rfc: ['', Validators.required],
      acronimo: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.formUser.value)
  }

}
