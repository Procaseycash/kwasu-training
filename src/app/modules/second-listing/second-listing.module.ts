import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondListingComponent } from './second-listing.component';

@NgModule({
  declarations: [SecondListingComponent],
  imports: [
    CommonModule
  ],
  exports: [SecondListingComponent]
})
export class SecondListingModule { }
