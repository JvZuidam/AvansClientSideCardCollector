import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckListComponent } from './deck-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('DeckListComponent', () => {
  let component: DeckListComponent;
  let fixture: ComponentFixture<DeckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
