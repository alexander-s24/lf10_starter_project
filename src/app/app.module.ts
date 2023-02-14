import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular/public_api';
import { initializeKeycloak } from './utility/app.init';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
