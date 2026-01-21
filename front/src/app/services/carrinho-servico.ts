import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../constantes/aplicacao-constantes';
import { CarrinhoProdutos } from '../models/carrinhoProdutos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoServico {

  constructor(private httpClient: HttpClient) { }


  adicionarProdutoCarrinho(produto: Produto) {

    return this.httpClient.post(`${BASE_URL}/carrinho`, produto)
  }

  buscarCarrinhoUsuario(usuarioId: string) {

    return this.httpClient.get<CarrinhoProdutos>(`${BASE_URL}/carrinho/${usuarioId}`)
  }

  deletarItemCarrinho(produtoId: string, usuarioId: string) {

    return this.httpClient.delete(`${BASE_URL}/carrinho/usuario/${usuarioId}/produto/${produtoId}`)
  }

  finalizarCompra(valorPago: number, usuarioId: string) {

    if (!valorPago)
      throw 'Valor a pagar não informado!'

    if (!usuarioId)
      throw 'Para finalizar o carrinho faça o login!'

    let carrinho = {
      usuarioId,
      valorPago
    }

    return this.httpClient.post(`${BASE_URL}/carrinho/finalizar`, carrinho)

    // return fetch(`${BASE_URL}/carrinho/finalizar`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(carrinho)
    // })
    //   .then(async function (res) {
    //     if (res.ok) {
    //       return res.json()
    //     } else {
    //       const erro = await res.text();
    //       const mensagemErro = "erro na compra, preenchar o valor corretamente: " + erro
    //       notificar(mensagemErro, true)
    //       throw mensagemErro
    //     }
    //   })

  }
}
