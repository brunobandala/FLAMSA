import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ProductModel} from '../models/productModel.interface';

@Injectable()
export class ProductsService{

constructor(private http: Http){}


   getAllProducts(){
     return this.http.get("/productos");
   }

   createProduct(request:ProductModel){
     return this.http.post("/productos",request);
   }

}