import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import {FormsModule} from "@angular/forms";
import {SecondListingModule} from "./modules/second-listing/second-listing.module";
import { InputEventComponent } from './components/input-event/input-event.component';
import { OutputEventComponent } from './components/output-event/output-event.component';
import {HttpClientModule} from "@angular/common/http";
import { TestComponentsComponent } from './test-components/test-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    InputEventComponent,
    OutputEventComponent,
    TestComponentsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SecondListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
