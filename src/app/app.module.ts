import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { TradeComponent } from './components/trade/trade.component';
import { TradeDetailComponent } from './components/trade/trade-detail/trade-detail.component';
import { TradeEditComponent } from './components/trade/trade-edit/trade-edit.component';
import { TradeListComponent } from './components/trade/trade-list/trade-list.component';
import { UserNewComponent } from './components/user/user-new/user-new.component';
import {FormsModule} from "@angular/forms";
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionListComponent } from './components/collection/collection-list/collection-list.component';
import { CollectionDetailComponent } from './components/collection/collection-detail/collection-detail.component';
import { CollectionEditComponent } from './components/collection/collection-edit/collection-edit.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card/card-detail/card-detail.component';
import { CollectionNewComponent } from './components/collection/collection-new/collection-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import { DeckComponent } from './components/deck/deck.component';
import { DeckListComponent } from './components/deck/deck-list/deck-list.component';
import { DeckDetailComponent } from './components/deck/deck-detail/deck-detail.component';
import { DeckEditComponent } from './components/deck/deck-edit/deck-edit.component';
import { DeckNewComponent } from './components/deck/deck-new/deck-new.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    LoginComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    TradeComponent,
    TradeDetailComponent,
    TradeEditComponent,
    TradeListComponent,
    UserNewComponent,
    CollectionComponent,
    CollectionListComponent,
    CollectionDetailComponent,
    CollectionEditComponent,
    CardComponent,
    CardDetailComponent,
    CollectionNewComponent,
    DeckComponent,
    DeckListComponent,
    DeckDetailComponent,
    DeckEditComponent,
    DeckNewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
