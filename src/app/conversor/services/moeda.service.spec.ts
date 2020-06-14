import { TestBed } from '@angular/core/testing';

import { MoedaService } from './moeda.service';
import {HttpClientModule} from '@angular/common/http';

describe('MoedaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoedaService
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MoedaService = TestBed.get(MoedaService);
    expect(service).toBeTruthy();
  });
});
