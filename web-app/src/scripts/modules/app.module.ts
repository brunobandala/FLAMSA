import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { FormClientComponent } from "../components/form-client.component";
import { FormUserComponent } from "../components/form-user.component";
import { FormComponent } from '../components/form.component';
import { LoginComponent } from '../components/login.component';
import { PrincipalComponent } from '../components/principal.component';
import { SearchComponent } from "../components/search.component";
import { FormTrafficComponent } from "../components/form-traffic.component";
import { FormTramosComponent } from "../components/form-tramos.component";
import { FormRouteComponent } from "../components/form-route.component";
import { footerComponent } from "../components/footer.component";
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpModule,Http, XHRBackend, RequestOptions } from '@angular/http';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';


import {httpFactory} from "../factories/httpFactory";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    SimplePdfViewerModule,
    NgDatepickerModule
  ],
  declarations: [
    AppComponent,
    FormClientComponent,
    FormUserComponent,
    FormComponent,
    LoginComponent,
    PrincipalComponent,
    SearchComponent,
    FormTrafficComponent,
    FormTramosComponent,
    FormRouteComponent,
    footerComponent
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