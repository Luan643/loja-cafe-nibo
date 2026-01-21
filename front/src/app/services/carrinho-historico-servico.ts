import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../constantes/aplicacao-constantes';
import { CarrinhoProdutos } from '../models/carrinhoProdutos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoHistoricoServico {

  httpClient = inject(HttpClient)

  listarHistoricoDeCompras(usuarioId: string) {
    return this.httpClient.get<CarrinhoProdutos>(`${BASE_URL}/historico/${usuarioId}`)
  }

}
