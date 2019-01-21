import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { LoginComponent } from '../components/login.component';
import { principalPage } from '../components/principal.component';
 
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    principalPage
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }