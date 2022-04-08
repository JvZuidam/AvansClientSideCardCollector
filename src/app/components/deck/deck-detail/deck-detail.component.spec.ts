import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckDetailComponent } from './deck-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {DragDropModule} from "@angular/cdk/drag-drop";

describe('DeckDetailComponent', () => {
  let component: DeckDetailComponent;
  let fixture: ComponentFixture<DeckDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckDetailComponent ],
      imports: [RouterTestingModule, DragDropModule, HttpClientTestingModule ]
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
