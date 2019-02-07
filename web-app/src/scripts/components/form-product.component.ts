declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'form-product',
  templateUrl: '../../views/form-product.component.html',
})
export class FormProductComponent implements OnInit {
  myForm: FormGroup;
  dialog:any;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      boxing: ['', Validators.required],
      typeTrailer: ['', Validators.required]
    });
  }
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.dialog = document.querySelector('dialog');
    this.dialog.showModal();
  }

  nuevoRegistro(){
      this.dialog.close();
      this.myForm.setValue({
        name: null,
        boxing: null,
        typeTrailer: null
      });
      document.getElementById("obs").innerText = '';
      for (const key in this.myForm.controls) {
        this.myForm.get(key).clearValidators();
        this.myForm.get(key).updateValueAndValidity();
      }
  }

  cancelarAlta(){
    let toast:any;
    toast = document.querySelector('.mdl-js-snackbar');
    toast.MaterialSnackbar.showSnackbar({message : "Redirigiendo...", timeout: 2000});
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
}
