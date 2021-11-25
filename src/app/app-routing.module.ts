import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AboutComponent} from "./components/about/about.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {UserDetailComponent} from "./components/user/user-detail/user-detail.component";
import {UserEditComponent} from "./components/user/user-edit/user-edit.component";
import {UserNewComponent} from "./components/user/user-new/user-new.component";
import {CollectionListComponent} from "./components/collection/collection-list/collection-list.component";
import {CollectionDetailComponent} from "./components/collection/collection-detail/collection-detail.component";
import {CollectionEditComponent} from "./components/collection/collection-edit/collection-edit.component";
import {CollectionNewComponent} from "./components/collection/collection-new/collection-new.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },

  { path: 'users', pathMatch: 'full', component: UserListComponent },
  { path: 'users/new', pathMatch: 'full', component: UserNewComponent },
  { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent},
  { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent},

  { path: 'collections', pathMatch: 'full', component: CollectionListComponent},
  { path: 'collections/new', pathMatch: 'full', component: CollectionNewComponent},
  { path: 'collections/:id', pathMatch: 'full', component: CollectionDetailComponent},
  { path: 'collections/:id/edit', pathMatch: 'full', component: CollectionEditComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
