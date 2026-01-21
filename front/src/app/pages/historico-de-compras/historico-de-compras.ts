import { Component, inject, OnInit, signal } from '@angular/core';
import { CarrinhoHistoricoServico } from '../../services/carrinho-historico-servico';
import { Util } from '../../services/util';

interface ComprasFront {
  _id: string,
  nome: string,
  preco: number,
  img?: string,
  quantidade: number
}

@Component({
  selector: 'app-historico-de-compras',
  imports: [],
  templateUrl: './historico-de-compras.html',
  styleUrl: './historico-de-compras.scss',
})
export class HistoricoDeCompras implements OnInit {

  carrinhoHistoricoServico = inject(CarrinhoHistoricoServico)
  util = inject(Util)
  compras = signal<ComprasFront[]>([])

  ngOnInit(): void {
    this.listasComprasAnteriores()
  }

  async listasComprasAnteriores() {

    const usuario = this.util.getUsuario()

    this.carrinhoHistoricoServico.listarHistoricoDeCompras(usuario?._id!!)
      .subscribe(compras => {
        const comprasFront = compras.produtos.map(p => {
          const compra: ComprasFront = {
            _id: p?.produto?._id ?? '',
            nome: p?.produto?.nome ?? '',
            preco: p?.produto?.preco ?? '',
            img: p?.produto?.img ?? '',
            quantidade: p.quantidade
          }
          return compra
        })

        this.compras.set(comprasFront)
      })

    // historicoContainer.innerHTML = ''
    // if (!historico || !historico.produtos || historico.produtos.length === 0) {
    //   historicoContainer.innerHTML = `<p>Seu historico está vazio</p>`
    //   return
    // } else {
    //   for (let i = 0; i < historico.produtos.length; i++) {
    //     historicoContainer.innerHTML += `
            
    //     `
    //   }
    // }
  }

  converterMoeda(valor: number) {
    return valor.toFixed(2).toString().replace('.', ',') + ' R$'
  }

}
