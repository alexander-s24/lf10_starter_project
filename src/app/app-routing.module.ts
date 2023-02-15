import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/utility/app.guard';
import{EmployeeDetailsComponent} from './employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard]},
  { path: 'details', component: EmployeeDetailsComponent},
  { path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
