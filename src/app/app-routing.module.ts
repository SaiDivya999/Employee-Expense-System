import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './Components/expense/expense.component';
import { ExpenseClaimComponent } from './Components/expenseclaim/expenseclaim.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProjectComponent } from './Components/project/project.component';
import { ViewExpenseComponent } from './Components/view-expense/view-expense.component';
import { ViewExpenseClaimComponent } from './Components/view-expenseclaim/view-expenseclaim.component';
import { ViewprojectComponent } from './Components/viewproject/viewproject.component';
import { ViewEmployeeComponent } from './Components/view-employee/view-employee.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'expense',component: ExpenseComponent},
  {path: 'view-expense',component: ViewExpenseComponent},
  {path: 'expenseclaim',component: ExpenseClaimComponent},
  {path: 'view-expenseclaim',component: ViewExpenseClaimComponent},
  {path: 'login',component: LoginComponent},
  {path: 'project',component: ProjectComponent},
  {path: 'viewproject',component: ViewprojectComponent},
  {path: 'view-employee',component: ViewEmployeeComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
