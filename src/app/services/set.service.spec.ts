import { TestBed } from '@angular/core/testing';

import { SetService } from './set.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SetService', () => {
  let service: SetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(SetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
