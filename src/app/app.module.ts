import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import {FormsModule} from "@angular/forms";
import {SecondListingModule} from "./modules/second-listing/second-listing.module";
import { InputEventComponent } from './components/input-event/input-event.component';
import { OutputEventComponent } from './components/output-event/output-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    InputEventComponent,
    OutputEventComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    SecondListingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
