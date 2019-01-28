declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-tramos',
  templateUrl: '../../views/form-tramos.component.html',
})
export class FormTramosComponent implements OnInit {
  myForm: FormGroup;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      km: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.myForm.value)
  }

}
