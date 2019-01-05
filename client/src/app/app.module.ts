import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app.routing.module';

import { AuthService, NotificationService } from './services/shared';

import { AppComponent } from './app.component';
import { LoginComponent, RegistrationComponent, TopnavbarComponent } from './components/general';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule],
  providers: [
    AuthService,
    NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
