import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProvidersService{

constructor(private http: Http){}

  saveProvider(provider:any){

     return this.http.post("/proveedores",provider);
   }
}