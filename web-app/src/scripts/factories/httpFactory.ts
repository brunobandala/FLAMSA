import {XHRBackend,Http,RequestOptions} from "@angular/http";
import {InterceptedHttp} from "../interceptors/InterceptedHttp";

export function httpFactory(xHRBackend:XHRBackend,requestOptions:RequestOptions): Http{
    return new InterceptedHttp(xHRBackend,requestOptions);
}