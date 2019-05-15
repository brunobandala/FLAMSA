declare var componentHandler: any;

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FilesService} from "../services/files.service";
import {ProvidersService} from "../services/providers.service";
import {Response} from "@angular/http";
import { Router } from "@angular/router";
import { SimplePdfViewerComponent } from 'simple-pdf-viewer';

@Component({
  selector: 'form-proveedor',
  templateUrl: '../../views/form.component.html',
  providers : [FilesService,ProvidersService]
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  toast:any;
  dialog:any;
  isUploadingContract:Boolean;
  
  @ViewChild(SimplePdfViewerComponent) 
  private pdfViewer: SimplePdfViewerComponent;

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  constructor(
    private router:Router,
    private fb: FormBuilder, 
    private _filesService:FilesService, 
    private _providersService:ProvidersService) {
    
      this.isUploadingContract = false;
      this.toast = document.querySelector('.mdl-js-snackbar');
      this.dialog = document.querySelector('dialog');

    }

  ngOnInit() {

    this.myForm = this.fb.group({
      businessName: ['', Validators.required],
      RFC: ['', Validators.required],
      fiscalAddress: ['', Validators.required],
      officeAddress: ['', Validators.required],
      personalContact: ['', Validators.required],
      contact: ['', Validators.required],
      creditDays: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]+$/)]],
      details : ['',Validators.nullValidator],
      filename : ['',Validators.required]
    });
    this.dialog = document.querySelector('dialog');

  }

  onSubmit() {
    this._providersService.saveProvider(this.myForm.value).subscribe((response:Response)=>{
      this.toast.MaterialSnackbar.showSnackbar({message:"Guardado con éxito!"});
      this.dialog.showModal();
    },(error:any) =>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Ocurrió un error al guardar el proveedor"});

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

  saveContract(event:FileList){
    let file:File = event.item(0);
    this.isUploadingContract = true;
    this._filesService.uploadFile(file).subscribe((response:Response)=>{

      let form:any;
      let body:any = response.json()[0];
      this.isUploadingContract = false;
      form = this.myForm.value;
      form["filename"] = body.fd;
      this.pdfViewer.openFile(file);
      
      this.myForm.setValue(form);
    },(error:any)=>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Ocurrió un error al guardar el contrato!"});
      this.isUploadingContract = false;
    });
  }


}

