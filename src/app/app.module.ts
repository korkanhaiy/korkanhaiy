import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { A001HeaderComponent } from './a001-header/a001-header.component';
import { AppRoutingModule } from './/app-routing.module';
import { ZFooterComponent } from './z-footer/z-footer.component';
import { A002IndexComponent } from './a002-index/a002-index.component';
import { A003LoginComponent } from './a003-login/a003-login.component';
import { A004RegisterComponent } from './a004-register/a004-register.component';
import { A005AllTeacherPageComponent } from './a005-all-teacher-page/a005-all-teacher-page.component';

@NgModule({
  declarations: [
    AppComponent,
    A001HeaderComponent,
    ZFooterComponent,
    A002IndexComponent,
    A003LoginComponent,
    A004RegisterComponent,
    A005AllTeacherPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
