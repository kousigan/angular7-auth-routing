import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AppRouterModule } from './app.routing';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, AppRouterModule],
  declarations: [AppComponent, HelloComponent, HomeComponent, AdminComponent, LoginComponent],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
