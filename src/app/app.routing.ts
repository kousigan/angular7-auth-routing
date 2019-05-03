import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes =[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'admin',component: AdminComponent, canActivate:[ AuthGuard ]},
   {path:'**',component: HomeComponent},
    
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [  RouterModule ],
})
export class AppRouterModule { }