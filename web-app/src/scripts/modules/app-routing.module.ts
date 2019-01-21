import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { principalPage }   from '../components/principal.component';

 
const appRoutes: Routes = [
  { path: 'home', component: principalPage },
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