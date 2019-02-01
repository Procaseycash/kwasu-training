import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondListingComponent} from './second-listing.component';
import {RouterModule, Routes} from "@angular/router";
import {UserRegComponent} from "./user-reg/user-reg.component";

const secondListingRoutes: Routes = [
  {
    path: 'student-portal',
    component: SecondListingComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserRegComponent
      },
      {
        path: 'course-reg',
        component: UserRegComponent,
        data: {roles: ['ADMIN', 'STUDENT'], permissions: ['all-course-registration', 'create-reg', 'delete-reg']}
      }
    ]
  }
];

@NgModule({
  declarations: [SecondListingComponent, UserRegComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(secondListingRoutes)
  ],
  exports: [RouterModule]
})
export class SecondListingModule {
}
