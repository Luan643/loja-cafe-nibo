import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constantes/aplicacao-constantes';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServico {

  constructor(private httpClient: HttpClient) {

  }

  listarProdutos() {
    return this.httpClient.get<Produto[]>(`${BASE_URL}/produto`)

  }

  criarProduto(produto: Produto) {
    if (!produto.nome || !produto.preco)
      throw 'Nome e preço do produto são obrigatórios'

    return this.httpClient.post(`${BASE_URL}/produto/criar`, produto)
  }

  buscarProdutos(nome: string) {
    return this.httpClient.get<Produto[]>(`${BASE_URL}/produto/busca?nome=${nome}`)
  }

  buscarProdutoPorId(idProduto: string){
    return this.httpClient.get<Produto>(`${BASE_URL}/produto/detalhar/${idProduto}`)
  }
}

