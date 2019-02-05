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


  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
  
  constructor(private fb: FormBuilder, 
              private _providersService:ProvidersService,
              private _clientsService:ClientsService,
              private _routesService:RoutesService,
              private _productsService:ProductsService,
              private _contractsService:ContractsService) {
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

  }

  checkDirty(){
    
    var nodeList = document.querySelectorAll('.mdl-textfield');
    Array.prototype.forEach.call(nodeList, function (elem:any) {
        elem.MaterialTextfield.checkDirty();
    });

    document.querySelector("form > div:nth-child(1) > div").classList.remove("is-visible");
    document.querySelector("form > div:nth-child(3) > div").classList.remove("is-visible");
    document.querySelector("form > div:nth-child(5) > div").classList.remove("is-visible");
    document.querySelector("form > div:nth-child(7) > div").classList.remove("is-visible");
    

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
      console.log(response.json());
    });
  }

}
