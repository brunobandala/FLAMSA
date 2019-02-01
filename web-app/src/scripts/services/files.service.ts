import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FilesService{

constructor(private http: Http){}

  uploadFile(file:File){
      let formData:FormData = new FormData();
      formData.append("contract",file);
     return this.http.post("/files",formData);
   }
}