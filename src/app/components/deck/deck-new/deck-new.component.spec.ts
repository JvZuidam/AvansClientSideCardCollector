import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckNewComponent } from './deck-new.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DeckNewComponent', () => {
  let component: DeckNewComponent;
  let fixture: ComponentFixture<DeckNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckNewComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
