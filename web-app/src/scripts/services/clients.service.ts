import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchContract } from "../models/searchContract.interface";

@Injectable()
export class ClientsService{

constructor(private http: Http){}

  getClients(){
     return this.http.get("/cliente");
   }
}