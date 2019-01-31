import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SessionService{

constructor(private http: Http){}
  loginUser(email:string,password:string){
     return this.http.post("http://localhost:1337/login",{email,password});
   }
}