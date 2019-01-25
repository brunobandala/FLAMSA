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
 
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FormClientComponent,
    FormUserComponent,
    FormComponent,
    LoginComponent,
    PrincipalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }