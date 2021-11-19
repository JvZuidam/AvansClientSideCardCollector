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
import { UserNewComponent } from './components/user/user-new/user-new/user-new.component';


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
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
