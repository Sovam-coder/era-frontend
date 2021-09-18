import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoticeComponent } from './notice/notice.component';
import { HeaderComponent } from './header/header.component';
import { AuserComponent } from './auser/auser.component';
import { HttpClientModule } from '@angular/common/http';
import { CnewuserComponent } from './cnewuser/cnewuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { PuserComponent } from './puser/puser.component';
import { EpanelComponent } from './epanel/epanel.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NoticeComponent,
    HeaderComponent,
    AuserComponent,
    CnewuserComponent,
    Login2Component,
    PuserComponent,
    EpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
