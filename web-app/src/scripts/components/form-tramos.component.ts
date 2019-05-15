declare var componentHandler: any;
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from "@angular/http";
import {StretchesService} from "../services/stretches.service";
import { Router } from "@angular/router";


@Component({
  selector: 'form-tramos',
  templateUrl: '../../views/form-tramos.component.html',
  providers: [StretchesService]
})
export class FormTramosComponent implements OnInit {
  myForm: FormGroup;
  requestRoutes: any;
  showImage:boolean;
  dialog:any;
  toast:any;
  
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  constructor(
    private fb: FormBuilder,
    private _stretchesService: StretchesService,
    private router:Router) {

      this.dialog = document.querySelector('dialog');
      this.toast = document.querySelector('.mdl-js-snackbar');

    this.requestRoutes = {};
    this.myForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      km: ['', Validators.required]
    });

    if (screen.width < 1024)
      this.showImage = false;
    else {
      this.showImage = true;
    }

  }

  ngOnInit() {
    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');
  }

  onSubmit() {

    let form: any = this.myForm.value;
    this.requestRoutes.name = form.origin + " - " + form.destination;
    this.requestRoutes.origin = form.origin;
    this.requestRoutes.destination = form.destination;
    this.requestRoutes.distance = form.km; 
    this._stretchesService.saveStretch(this.requestRoutes).subscribe((response: Response) => {
      this.dialog.showModal();
    });
  }

  nuevoRegistro(){
    this.dialog.close();
    this.myForm.reset();

    for (const key in this.myForm.controls) {
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
