import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDetailComponent } from './trade-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TradeDetailComponent', () => {
  let component: TradeDetailComponent;
  let fixture: ComponentFixture<TradeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeDetailComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
