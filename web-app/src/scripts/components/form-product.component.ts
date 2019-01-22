import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-product',
  templateUrl: '../../views/form-product.component.html',
})
export class FormProductComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      boxing: ['', Validators.required],
      typeTrailer: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
