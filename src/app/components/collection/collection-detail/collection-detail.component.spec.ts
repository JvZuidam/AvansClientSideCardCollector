import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDetailComponent } from './collection-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CollectionDetailComponent', () => {
  let component: CollectionDetailComponent;
  let fixture: ComponentFixture<CollectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
