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
import {CardDetailComponent} from "./components/card/card-detail/card-detail.component";
import {DeckListComponent} from "./components/deck/deck-list/deck-list.component";
import {DeckNewComponent} from "./components/deck/deck-new/deck-new.component";
import {DeckDetailComponent} from "./components/deck/deck-detail/deck-detail.component";
import {DeckEditComponent} from "./components/deck/deck-edit/deck-edit.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {TradeListComponent} from "./components/trade/trade-list/trade-list.component";
import {TradeNewComponent} from "./components/trade/trade-new/trade-new.component";
import {TradeDetailComponent} from "./components/trade/trade-detail/trade-detail.component";
import {TradeEditComponent} from "./components/trade/trade-edit/trade-edit.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },

  { path: 'users/new', pathMatch: 'full', component: UserNewComponent, canActivate: [AuthGuardService] },
  { path: 'users/:id', pathMatch: 'full', component: UserDetailComponent, canActivate: [AuthGuardService]},
  { path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent, canActivate: [AuthGuardService]},

  { path: 'collections', pathMatch: 'full', component: CollectionListComponent, canActivate: [AuthGuardService]},
  { path: 'collections/new', pathMatch: 'full', component: CollectionNewComponent, canActivate: [AuthGuardService]},
  { path: 'collections/:id', pathMatch: 'full', component: CollectionDetailComponent, canActivate: [AuthGuardService]},
  { path: 'collections/:id/edit', pathMatch: 'full', component: CollectionEditComponent, canActivate: [AuthGuardService]},

  { path: 'cards/:id', pathMatch: 'full', component: CardDetailComponent, canActivate: [AuthGuardService]},

  { path: 'decks', pathMatch: 'full', component: DeckListComponent, canActivate: [AuthGuardService]},
  { path: 'decks/new', pathMatch: 'full', component: DeckNewComponent, canActivate: [AuthGuardService]},
  { path: 'decks/:id', pathMatch: 'full', component: DeckDetailComponent, canActivate: [AuthGuardService]},
  { path: 'decks/:id/edit', pathMatch: 'full', component: DeckEditComponent, canActivate: [AuthGuardService]},

  { path: 'trades', pathMatch: 'full', component: TradeListComponent, canActivate: [AuthGuardService]},
  { path: 'trades/new', pathMatch: 'full', component: TradeNewComponent, canActivate: [AuthGuardService]},
  { path: 'trades/:id', pathMatch: 'full', component: TradeDetailComponent, canActivate: [AuthGuardService]},
  { path: 'trades/:id/edit', pathMatch: 'full', component: TradeEditComponent, canActivate: [AuthGuardService]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
