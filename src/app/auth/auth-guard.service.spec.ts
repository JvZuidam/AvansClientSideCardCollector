import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
