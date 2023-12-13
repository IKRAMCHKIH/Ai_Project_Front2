import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {UserregisterComponent} from './userregister/userregister.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { DisplayOffreComponent } from './display-offre/display-offre.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { NotificationComponent } from './notification/notification.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'register', component: UserregisterComponent },
  { path: 'CarPooling', component: HomepageComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'displayOffre', component: DisplayOffreComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'addOff', component: AddOfferComponent },
  { path: 'notif', component: NotificationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
