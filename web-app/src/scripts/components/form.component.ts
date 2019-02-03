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
  }

  onSubmit() {
    this._providersService.saveProvider(this.myForm.value).subscribe((response:Response)=>{
      this.toast.MaterialSnackbar.showSnackbar({message:"Guardado con éxito!"});
      this.router.navigate(['/home']);
    },(error:any) =>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Ocurrió un error al guardar el proveedor"});

    });
  }

  saveContract(event:FileList){
    let file:File = event.item(0);
    this.pdfViewer.openFile(file);
    this.isUploadingContract = true;
    this._filesService.uploadFile(file).subscribe((response:Response)=>{

      let form:any;
      let body:any = response.json()[0];
      this.isUploadingContract = false;
      form = this.myForm.value;
      form["filename"] = body.fd;

      this.myForm.setValue(form);
    },(error:any)=>{
      alert(error);
      this.isUploadingContract = false;
    });
  }


}

