import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FormClientComponent } from "../components/form-client.component";
import { FormUserComponent } from "../components/form-user.component";
import { FormComponent } from '../components/form.component';
import { LoginComponent } from '../components/login.component';
import { PrincipalComponent } from '../components/principal.component';

const appRoutes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: FormClientComponent },
  { path: 'user', component: FormUserComponent },
  { path: 'provider', component: FormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
          useHash: true
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }