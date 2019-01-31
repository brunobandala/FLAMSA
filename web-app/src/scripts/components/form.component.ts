declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-proveedor',
  templateUrl: '../../views/form.component.html',
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      rs: ['', Validators.required],
      rfc: ['', Validators.required],
      df: ['', Validators.required],
      do: ['', Validators.required],
      cp: ['', Validators.required],
      ccpp: ['', Validators.required],
      dc: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]+$/)]]
    });
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
