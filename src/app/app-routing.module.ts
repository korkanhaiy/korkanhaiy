import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { A002IndexComponent } from './a002-index/a002-index.component';
import { A003LoginComponent } from './a003-login/a003-login.component';
import { A004RegisterComponent } from './a004-register/a004-register.component';

const routes: Routes = [
  { path: '', component: A002IndexComponent},
  { path: 'index', component:A002IndexComponent},
  { path: 'login', component:A003LoginComponent},
  { path: 'register', component:A004RegisterComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }