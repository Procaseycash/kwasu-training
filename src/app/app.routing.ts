import {Routes} from '@angular/router';
import {ListingComponent} from './components/listing/listing.component';
import {SecondListingComponent} from "./modules/second-listing/second-listing.component";

export const AppRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListingComponent
  },
  {
    path: 'about-us',
    component: SecondListingComponent
  },
  {
    path: 'login',
    component: ListingComponent
  },
  {
    path: 'contact-us',
    redirectTo: ''
  },
  {
    path: 'student-portal',
    loadChildren: './modules/second-listing/second-listing.module#SecondListingModule'
  },
];
