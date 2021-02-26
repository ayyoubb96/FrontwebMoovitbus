import { TestBed } from '@angular/core/testing';

import { CasUrgentsService } from './cas-urgents.service';

describe('CasUrgentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasUrgentsService = TestBed.get(CasUrgentsService);
    expect(service).toBeTruthy();
  });
});
