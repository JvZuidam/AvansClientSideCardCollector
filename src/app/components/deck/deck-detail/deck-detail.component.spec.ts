import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDetailComponent } from './deck-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DeckDetailComponent', () => {
  let component: DeckDetailComponent;
  let fixture: ComponentFixture<DeckDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckDetailComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
