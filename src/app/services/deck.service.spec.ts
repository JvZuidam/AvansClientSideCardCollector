import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DeckService', () => {
  let service: DeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
