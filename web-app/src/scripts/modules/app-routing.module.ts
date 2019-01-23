import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { principalPage }   from '../components/principal.component';
import { LoginComponent } from "../components/login.component";
 
const appRoutes: Routes = [
  { path: 'home', component: principalPage },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}