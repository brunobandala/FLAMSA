import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StretchesService{

constructor(private http: Http){}


   getAllStretches(){
     return this.http.get("/tramos");
   }

   saveStretch(tramo:any){
     return this.http.post("/tramos",tramo);
   }
}