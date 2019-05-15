import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchContract } from "../models/searchContract.interface";

@Injectable()
export class ContractsService{

constructor(private http: Http){}

  deleteContract(contractId:any){
    return this.http.delete("/contratos/"+contractId);
  }

  searchContract(searchCriteria:SearchContract){

     return this.http.post("/contratos/search",searchCriteria);
   }

   saveContract(contract:any){
     return this.http.post("/contratos",contract);
   }
}