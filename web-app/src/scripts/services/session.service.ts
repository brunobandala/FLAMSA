import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class SessionService{

constructor(private http: Http){
    
}
  loginUser(email:string,password:string){
     return this.http.post("/login",{email,password});
   }
}