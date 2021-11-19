import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AboutComponent} from "./components/about/about.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserDetailComponent} from "./components/user/user-detail/user-detail.component";
import {UserEditComponent} from "./components/user/user-edit/user-edit.component";
import {UserNewComponent} from "./components/user/user-new/user-new.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', pathMatch: 'full', component: UserListComponent },
  { path: 'users/new', pathMatch: 'full', component: UserNewComponent },
  { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent},
  { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
