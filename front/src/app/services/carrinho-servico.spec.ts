import { TestBed } from '@angular/core/testing';

import { CarrinhoServico } from './carrinho-servico';

describe('CarrinhoServico', () => {
  let service: CarrinhoServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
