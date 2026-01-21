import { Component, inject, signal } from '@angular/core';
import { ProdutoServico } from '../../services/produto-servico';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/Produto';
import { Util } from '../../services/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produtos',
  imports: [FormsModule],
  templateUrl: './criar-produtos.html',
  styleUrl: './criar-produtos.scss',
})
export class CriarProdutos {

  imagem = signal<string>('')
  util = inject(Util)
  router = inject(Router)

  produtoServico = inject(ProdutoServico)
  produto: Produto = {
    nome: '',
    preco: 0  
  }

  criarNovoProduto() {
    const produtoFinal = {
        img: this.imagem(),
        nome: this.produto.nome,
        preco: this.produto.preco
    }

    this.produtoServico.criarProduto(produtoFinal).subscribe((resposta) => {
      this.util.criarToast('Produto criado!', false)
      this.router.navigate(['/home'])
    })

  }

  escolherImagem() {
    const input = document.createElement('input')
    input.hidden = true
    input.type = "file"

    input.onchange = (e:any) => {
      const file = e.target.files[0]

      const reader = new FileReader()
      reader.onload = (e:any) => {
        this.imagem.set(e.target.result)
      }
      reader.readAsDataURL(file)
    }


    const body:any = document.querySelector('body')
    body.appendChild(input)
    input.click()

    body.removeChild(input)
  }
}
