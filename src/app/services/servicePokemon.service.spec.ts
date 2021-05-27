/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicePokemonService } from './servicePokemon.service';

describe('Service: ServicePokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePokemonService]
    });
  });

  it('should ...', inject([ServicePokemonService], (service: ServicePokemonService) => {
    expect(service).toBeTruthy();
  }));
});
