import { TestBed } from '@angular/core/testing';

import { CarrinhoHistoricoServico } from './carrinho-historico-servico';

describe('CarrinhoHistorico', () => {
  let service: CarrinhoHistoricoServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoHistoricoServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
