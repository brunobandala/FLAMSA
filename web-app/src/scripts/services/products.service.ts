import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService{

constructor(private http: Http){}


   getAllProducts(){
     return this.http.get("/productos");
   }
}