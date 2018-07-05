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
import { A006ChooseTeacherComponent } from './a006-choose-teacher/a006-choose-teacher.component';
import { A007TeacherDetailsComponent } from './a007-teacher-details/a007-teacher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    A001HeaderComponent,
    ZFooterComponent,
    A002IndexComponent,
    A003LoginComponent,
    A004RegisterComponent,
    A005AllTeacherPageComponent,
    A006ChooseTeacherComponent,
    A007TeacherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
