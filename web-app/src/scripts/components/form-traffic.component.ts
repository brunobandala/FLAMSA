declare var componentHandler: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProvidersService} from "../services/providers.service";
import {ClientsService} from "../services/clients.service";
import {RoutesService} from "../services/routes.service";
import {ProductsService} from "../services/products.service"; 
import {ContractsService} from "../services/contracts.service";
import {BasicCatalogWrapper} from "../models/basicCatalogWrapper.interface";
import {Response} from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'form-traffic',
  templateUrl: '../../views/form-traffic.component.html',
  providers : [ProvidersService,ClientsService,RoutesService,ProductsService,ContractsService]
})
export class FormTrafficComponent implements OnInit {
  myFormTraffic: FormGroup;
  providersCatalog: BasicCatalogWrapper[];
  clientsCatalog: BasicCatalogWrapper[];
  routesCatalog: BasicCatalogWrapper[];
  productsCatalog: BasicCatalogWrapper[];
  contractRequest:any;
  showTooltip:boolean;
  dialog:any;
  toast:any;


  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  
  constructor(private fb: FormBuilder, 
              private _providersService:ProvidersService,
              private _clientsService:ClientsService,
              private _routesService:RoutesService,
              private _productsService:ProductsService,
              private _contractsService:ContractsService,
              private router:Router) {
    this.contractRequest = {};
    let datePattern = Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);

    this.myFormTraffic = this.fb.group({
      provider: ['', Validators.required],
      client: ['', Validators.required],
      route: ['', Validators.required],
      product: ['', Validators.required],
      tariffProvider: ['', Validators.required],
      tariffClient: ['', Validators.required],
      factureProvider : ['',Validators.required],
      factureFlamsa : ['',Validators.required],
      loadDate : ['',[Validators.required,datePattern]],
      documentsDate : ['',[Validators.required,datePattern]],
      billDate : ['',[Validators.required,datePattern]],
      providerPayDate : ['',[Validators.required,datePattern]],
      flamsaPayDate : ['',[Validators.required,datePattern]],
      accessories: ['', Validators.required],
      observations : ['',Validators.nullValidator],
      utility : ['',Validators.nullValidator]

    });

    if (screen.width<1024) 
      this.showTooltip = false;
    else{
      this.showTooltip = true;
    }

  }

  checkDirty(){
    
    var nodeList = document.querySelectorAll('.mdl-textfield');
    Array.prototype.forEach.call(nodeList, function (elem:any) {
        elem.MaterialTextfield.checkDirty();
    });

    document.querySelector("form > div.mdl-cell--3-col-desktop > div:nth-child(1) > div").classList.remove("is-visible");
    document.querySelector("form > div.mdl-cell--3-col-desktop > div:nth-child(2) > div").classList.remove("is-visible");
    document.querySelector("form > div.mdl-cell--3-col-desktop > div:nth-child(3) > div").classList.remove("is-visible");
    document.querySelector("form > div.mdl-cell--3-col-desktop > div:nth-child(4) > div").classList.remove("is-visible");
    

  }

  nuevoRegistro(){
    this.dialog.close();
    this.myFormTraffic.reset();

    for (const key in this.myFormTraffic.controls) {
      this.myFormTraffic.get(key).reset();
      this.myFormTraffic.get(key).updateValueAndValidity();
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

  selectCatalogItem(item:BasicCatalogWrapper, form:string){
    console.log("selected item = "+item.name+" selected id="+item.id);
    this.myFormTraffic.get(form).setValue(item.name);
    this.contractRequest[form] = item.id;
    this.checkDirty();
  }

  ngOnInit() {
    this._routesService.getAllRoutes().subscribe((response:Response)=>{
      this.routesCatalog = response.json();
    });

    this._providersService.getAllProviders().subscribe((response : Response)=>{
      this.providersCatalog = response.json();
    });

    this._clientsService.getClients().subscribe((response:Response)=>{
      this.clientsCatalog = response.json();
    });

    this._productsService.getAllProducts().subscribe((response:Response)=>{
      this.productsCatalog = response.json();
    });

    this.dialog = document.querySelector('dialog');
    this.toast = document.querySelector('.mdl-js-snackbar');
  }

  onSubmit(type:string) {

    let form:any = this.myFormTraffic.value;

    this.contractRequest.status = type;
    this.contractRequest.accessories = form.accessories;
    this.contractRequest.utility = form.utility;
    this.contractRequest.providerRate = form.tariffProvider;
    this.contractRequest.clientRate = form.tariffClient; 
    this.contractRequest.providerBill = form.factureProvider;
    this.contractRequest.flamsaBill = form.factureProvider;
    this.contractRequest.cargoDate = form.loadDate;
    this.contractRequest.documentsDate = form.documentsDate;
    this.contractRequest.paymentDate = form.billDate;
    this.contractRequest.providerBillDate = form.providerPayDate;
    this.contractRequest.flamsaBillDate = form.flamsaPayDate;
    this.contractRequest.description = form.observations;


    this._contractsService.saveContract(this.contractRequest).subscribe((response:Response)=>{
      this.dialog.showModal();
    });
  }

}
