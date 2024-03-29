import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UserDetailComponent} from "./components/user/user-detail/user-detail.component";
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        //Add the components belonging to the app module in here so the tests will succeed
        AppComponent,
        HeaderComponent,
        DashboardComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
