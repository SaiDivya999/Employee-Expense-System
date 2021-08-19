import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExpenseComponent } from './Components/expense/expense.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewExpenseComponent } from './Components/view-expense/view-expense.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { ProjectComponent } from './Components/project/project.component';
import { ViewprojectComponent } from './Components/viewproject/viewproject.component';

import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ExpenseClaimComponent } from './Components/expenseclaim/expenseclaim.component';
import { ViewExpenseClaimComponent } from './Components/view-expenseclaim/view-expenseclaim.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ExpenseComponent,
    ViewExpenseComponent,
    ExpenseClaimComponent,
    ViewExpenseClaimComponent,
    LoginComponent,
    ProjectComponent,
    ViewprojectComponent,
    ViewEmployeeComponent,
    RegisterComponent,
    AdminComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
