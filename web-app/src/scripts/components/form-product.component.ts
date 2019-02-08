declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProductModel} from '../models/productModel.interface';
import {ProductsService} from '../services/products.service';
import {Response} from "@angular/http";

@Component({
  selector: 'form-product',
  templateUrl: '../../views/form-product.component.html',
  providers : [ProductsService]
})
export class FormProductComponent implements OnInit {
  myForm: FormGroup;
  dialog:any;
  toast:any;
  showImage:boolean;

  constructor(
      private fb: FormBuilder, 
      private router:Router,
      private _productsService:ProductsService) {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      trailerType : ['', Validators.required],
      description : ['', Validators.nullValidator]
    });

    if (screen.width < 1024)
      this.showImage = false;
    else {
      this.showImage = true;
    }

    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');
  }

  ngOnInit() {
    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');
  }
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  onSubmit() {
    console.log(this.myForm.value);

    let request:ProductModel = this.myForm.value;

    this._productsService.createProduct(this.myForm.value).subscribe((response:Response)=>{
      this.dialog.showModal();
    },(error:any)=>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Ocurrió un error al guardar el producto"});
    });

  }

  nuevoRegistro(){
      this.dialog.close();
      this.myForm.setValue({
        name: null,
        type: null,
        trailerType: null,
        description : null
      });

      for (const key in this.myForm.controls) {
        this.myForm.get(key).clearValidators();
        this.myForm.get(key).updateValueAndValidity();
      }

      var nodeList = document.querySelectorAll('.mdl-textfield');
      Array.prototype.forEach.call(nodeList, function (elem:any) {
          elem.MaterialTextfield.checkDirty();
      });

  }

  cancelarAlta(){
    let toast:any;
    toast = document.querySelector('.mdl-js-snackbar');
    toast.MaterialSnackbar.showSnackbar({message : "Redirigiendo...", timeout: 1000});
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}
