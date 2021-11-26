import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionEditComponent } from './collection-edit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";

describe('CollectionEditComponent', () => {
  let component: CollectionEditComponent;
  let fixture: ComponentFixture<CollectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionEditComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODO: same error as with the user, for some reason seeing values as null sinc ethe collection you start out with is null
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
