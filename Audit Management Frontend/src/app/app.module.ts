import { User } from './models/User';
import { SpecialFLag } from './models/SpecialFlag';
import { AuthorizationMsclientService } from './httpclients/authorization-msclient.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SeverityComponent } from './severity/severity.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChecklistService } from './services/checklist.service';
import { SeverityService } from './services/severity.service';
import { DatePipe } from '@angular/common';

import { AuthenticationRequest } from './models/AuthenticationRequest';
import { SecurityToken } from './models/SecurityToken';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LoginStatus } from './models/LoginStatus';
import { ProjectDetails } from './models/ProjectDetails';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChecklistComponent,
    SeverityComponent,
    NavHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ChecklistService,
    SeverityService,
    DatePipe,
    AuthenticationRequest,
    SecurityToken,
    LoginStatus,
    ProjectDetails,
    SpecialFLag,
    User,
    AuthorizationMsclientService,
    {   // for token interceptor
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
