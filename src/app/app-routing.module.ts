import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/utility/app.guard';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
