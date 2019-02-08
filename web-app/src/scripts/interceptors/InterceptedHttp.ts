import {Injectable} from '@angular/core';
import {ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class InterceptedHttp extends Http {

    constructor(backend:ConnectionBackend, defaultOptions:RequestOptions){
        super(backend,defaultOptions);
    }

    request(url:string | Request, options?: RequestOptionsArgs):Observable<Response>{
        return super.request(url,options);
    }

    get(url:string, options?: RequestOptionsArgs):Observable<Response>{
        return super.get(this.updateUrl(url),{withCredentials:true});
    }

    post(url:string,body:string, options?: RequestOptionsArgs):Observable<Response>{
        return super.post(this.updateUrl(url),body,{withCredentials:true});
    }

    put(url:string,body:string, options?: RequestOptionsArgs):Observable<Response>{
        return super.put(this.updateUrl(url),body,{withCredentials:true});
    }

    delete(url:string, options?: RequestOptionsArgs):Observable<Response>{
        return super.delete(this.updateUrl(url),{withCredentials:true});
    }

    private updateUrl(url:string){
        return "http://localhost:1337"+url;
    }
}