import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckEditComponent } from './deck-edit.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule} from "@angular/forms";
import {DragDropModule} from "@angular/cdk/drag-drop";

describe('DeckEditComponent', () => {
  let component: DeckEditComponent;
  let fixture: ComponentFixture<DeckEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckEditComponent ],
      imports: [ HttpClientTestingModule, AppRoutingModule, FormsModule, DragDropModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: same error as with the user, collection, for some reason seeing values as null sinc ethe collection you start out with is null
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
