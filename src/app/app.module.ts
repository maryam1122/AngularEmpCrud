import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './employee/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddeditComponent } from './employee/addedit.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
