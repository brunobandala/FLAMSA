declare var componentHandler: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FilesService} from "../services/files.service";
import {ClientsService} from "../services/clients.service";
import {Response} from "@angular/http";

@Component({
  selector: 'form-client',
  templateUrl: '../../views/form-client.component.html',
  providers:[FilesService,ClientsService]
})
export class FormClientComponent implements OnInit {
  myForm: FormGroup;
  isUploadingContract:boolean[];
  toast:any;
  paymentProcessFilename:string;
  contractFilename:string;


  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  constructor(
      private fb: FormBuilder,
      private _filesService:FilesService,
      private _clientsService:ClientsService) {
        this.isUploadingContract = [];
        this.isUploadingContract[0] = false;
        this.isUploadingContract[1] = false;
        this.paymentProcessFilename = '';
        this.contractFilename = '';
        this.toast = document.querySelector('.mdl-js-snackbar');
      }

  ngOnInit() {
    this.myForm = this.fb.group({
      businessName: ['', Validators.required],
      RFC: ['', Validators.required],
      fiscalAddress: ['', Validators.required],
      officeAddress: ['', Validators.required],
      principalContact: ['', Validators.required],
      seccondaryContact: ['', Validators.required],
      paymentProcessFilename : ['', Validators.required],
      contractFilename : ['', Validators.required],
      creditDays: ['', [Validators.required, Validators.maxLength(2), Validators.pattern(/^[0-9]+$/)]],
      observations :['',Validators.nullValidator]
    });
  }

  checkDirty(){
    var nodeList = document.querySelectorAll('.mdl-textfield');
    Array.prototype.forEach.call(nodeList, function (elem:any) {
        elem.MaterialTextfield.checkDirty();
    });
  }

  saveFile(event:FileList,fileType:string,inputNumber:number){
    let file:File = event.item(0);
    this.isUploadingContract[inputNumber] = true;
    this[fileType] = file.name;
    this._filesService.uploadFile(file).subscribe((response:Response)=>{
      let body:any = response.json()[0];
      this.isUploadingContract[inputNumber] = false;
      this.myForm.get(fileType).setValue(body.fd);
      this.checkDirty();
    },(error:any)=>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Ocurrió un error al guardar el archivo!"});
      this.isUploadingContract[inputNumber] = false;
      this[fileType] = '';
    });
  }

  onSubmit() {
    this._clientsService.createClient(this.myForm.value).subscribe((response:Response)=>{
      this.toast.MaterialSnackbar.showSnackbar(
        {message : "Se guardó al cliente con éxito"});
    });
  }

}