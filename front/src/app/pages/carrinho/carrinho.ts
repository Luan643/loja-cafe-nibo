import { Component, inject, signal } from '@angular/core';
import { Util } from '../../services/util';
import { FormsModule } from '@angular/forms';
import { CarrinhoServico } from '../../services/carrinho-servico';
import { Router } from '@angular/router';

interface ProdutoFront {
  _id: string,
  nome: string,
  preco: number,
  img?: string,
  quantidade: number
}

@Component({
  selector: 'app-carrinho',
  imports: [FormsModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.scss',
})
export class Carrinho {

  router = inject(Router)
  utilServico = inject(Util)
  carrinhoServico = inject(CarrinhoServico)
  produtosCarrinho = signal<ProdutoFront[]>([])
  valorTotal = signal<number>(0)

  async ngOnInit() {
    this.listarProdutosCarrinho()
  }

  async listarProdutosCarrinho() {
    const usuarioId = await this.utilServico.getUsuarioId()

    if (usuarioId)
      this.carrinhoServico.buscarCarrinhoUsuario(usuarioId).subscribe(produtos => {
        let valorTotal = 0
        const produtosFront = produtos.produtos.map(p => {
          const produto: ProdutoFront = {
            _id: p.produto._id!!,
            nome: p.produto.nome,
            preco: p.produto.preco,
            img: p.produto.img,
            quantidade: p.quantidade
          }
          valorTotal += produto.preco * produto.quantidade
          return produto
        })

        this.valorTotal.set(valorTotal)
        this.produtosCarrinho.set(produtosFront)
      })
  }

  async removerItemCarrinho(produtoId: string) {
    const usuarioId = await this.utilServico.getUsuarioId()

    if (usuarioId)
      this.carrinhoServico.deletarItemCarrinho(produtoId, usuarioId).subscribe(produtoRemovido => {
        this.listarProdutosCarrinho()
      })

  }

  async finalizarCompraNoCarrinho() {
    const usuarioId = await this.utilServico.getUsuarioId()
    if (usuarioId)
      this.carrinhoServico.finalizarCompra(this.valorTotal(), usuarioId).subscribe(res => {
        this.listarProdutosCarrinho()
        this.utilServico.criarToast('Sua compra foi realizada com sucesso!', false)
        this.router.navigate(['/home'])
      })
  }

  converterMoeda(valor: number) {
    return valor.toFixed(2).toString().replace('.', ',') + ' R$'
  }
}