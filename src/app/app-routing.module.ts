import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuserComponent } from './auser/auser.component';
import { CnewuserComponent } from './cnewuser/cnewuser.component';
import { EpanelComponent } from './epanel/epanel.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { NoticeComponent } from './notice/notice.component';
import { PuserComponent } from './puser/puser.component';

const routes: Routes = [
  {path:"" ,component:Login2Component},
  {path:"epanel" ,component:EpanelComponent},
  {path:"login",component:LoginComponent},
  {path : "admin" , component:AdminComponent},
  {path : "notice" , component:NoticeComponent},
  {path : "auser" , component:AuserComponent},
  {path : "puser" , component:PuserComponent},
  {path : "cnewuser" , component:CnewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
