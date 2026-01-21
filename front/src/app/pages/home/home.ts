import { Component, inject, OnInit, signal } from '@angular/core';
import { ProdutoServico } from '../../services/produto-servico';
import { Produto } from '../../models/Produto';
import { CarrinhoServico } from '../../services/carrinho-servico';
import { Router } from '@angular/router';
import { Util } from '../../services/util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  listaDeProdutos = signal<Produto[]>([])
  produtoServico = inject(ProdutoServico)
  carrinhoServico = inject(CarrinhoServico)
  util = inject(Util)

  constructor(private router: Router){}

  ngOnInit() {
    this.produtoServico.listarProdutos().subscribe(produtos => {
      this.listaDeProdutos.set(produtos)
    })

    const body = document.querySelector('body')
    body?.addEventListener('busca-produto', (evt: any) => {
      this.produtoServico.buscarProdutos(evt.detail)
      .subscribe(produtos => this.listaDeProdutos.set(produtos))
    })
  }

  adicionarAoCarrinho(produtoId: any) {

    const usuarioLocalStorage: any = localStorage.getItem("usuarioDados")

    if(!usuarioLocalStorage){
      this.util.criarToast('Para adicionar produtos ao carrinho é necessário estar logado', true)
      return
    }

    const usuarioParseJson = JSON.parse(usuarioLocalStorage)

    const dadosCompra:any = {
      usuarioId: usuarioParseJson._id,
      produtoId,
      quantidade: 1
    }

    this.carrinhoServico.adicionarProdutoCarrinho(dadosCompra).subscribe(compra => {
      if (compra)
        this.util.criarToast('Produto adicionado ao carrinho!', false)
    })
  }

  detalhar(produtoId?: string) {
    this.router.navigate([`detalhar/${produtoId}`])
  }
}