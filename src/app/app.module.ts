import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    AddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RecaptchaModule, // module recaptcha
    RecaptchaFormsModule, // formule de validation recaptcha
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }