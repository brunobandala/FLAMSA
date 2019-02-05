import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchContract } from "../models/searchContract.interface";

@Injectable()
export class ContractsService{

constructor(private http: Http){}

  searchContract(searchCriteria:SearchContract){

     return this.http.post("/contratos/search",searchCriteria);
   }

   saveContract(contract:any){
     return this.http.post("/contratos",contract);
   }
}