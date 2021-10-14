import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule

  ]
})
export class UserModule { }
