import { TestBed } from '@angular/core/testing';
import { Linguapro } from './linguapro';

describe('Linguapro', () => {
  let service: Linguapro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Linguapro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
