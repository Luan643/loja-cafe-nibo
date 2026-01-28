import { Component, inject, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoServico } from '../../services/produto-servico';

@Component({
  selector: 'app-detalhar-produto',
  imports: [],
  templateUrl: './detalhar-produto.html',
  styleUrl: './detalhar-produto.scss',
})
export class DetalharProduto {

  route = inject(ActivatedRoute)
  produtoServico = inject(ProdutoServico)
  teste:any

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.teste = id
    if (id) {
      this.produtoServico.buscarProdutoPorId(id).subscribe(produto => {
        console.log(produto)
      })
    }

  }

  // @Input()
  // id!: string
}
