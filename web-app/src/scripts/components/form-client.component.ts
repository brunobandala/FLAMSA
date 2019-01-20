import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-client',
  templateUrl: '../../views/form-client.component.html',
})
export class FormClientComponent implements OnInit {
  myForm: FormGroup;

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