import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RoutesService{

constructor(private http: Http){}


   getAllRoutes(){
     return this.http.get("/rutas");
   }

   saveRoute(route:any){
     return this.http.post("/rutas",route);
   }
}