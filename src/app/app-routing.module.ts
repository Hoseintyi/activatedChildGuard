import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { NotAuthorizeComponent } from './not-authorize/not-authorize.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'register' , component: RegisterComponent , canDeactivate: [DeactivateGuard]},
  {path: 'about' , component: AboutComponent , canActivate: [AuthGuard]},
  {path: 'admin' , component: AdminComponent, canActivateChild: [AuthGuard],children :[
    {path: 'manageusers' , component: ManageUsersComponent}, {path: 'managePages' , component: ManagePagesComponent}] },
  {path: 'notAuthorized' , component: NotAuthorizeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
