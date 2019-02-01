import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { FormClientComponent } from "../components/form-client.component";
import { FormUserComponent } from "../components/form-user.component";
import { FormComponent } from '../components/form.component';
import { LoginComponent } from '../components/login.component';
import { PrincipalComponent } from '../components/principal.component';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';


import {httpFactory} from "../factories/httpFactory";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    SimplePdfViewerModule
  ],
  declarations: [
    AppComponent,
    FormClientComponent,
    FormUserComponent,
    FormComponent,
    LoginComponent,
    PrincipalComponent
  ],
  bootstrap: [ AppComponent ],
  providers : [
    {
      provide : Http,
      useFactory : httpFactory,
      deps : [XHRBackend,RequestOptions]
    }
  ]
})
export class AppModule { }