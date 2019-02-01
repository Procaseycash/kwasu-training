import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SecondListingModule} from "./modules/second-listing/second-listing.module";
import { InputEventComponent } from './components/input-event/input-event.component';
import { OutputEventComponent } from './components/output-event/output-event.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app.routing";
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    InputEventComponent,
    OutputEventComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouting),
    SecondListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
