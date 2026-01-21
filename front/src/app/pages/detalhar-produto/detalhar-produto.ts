import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-detalhar-produto',
  imports: [],
  templateUrl: './detalhar-produto.html',
  styleUrl: './detalhar-produto.scss',
})
export class DetalharProduto {

  @Input()
  id!: string
}
