import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { UsuarioLogado, Util } from '../../services/util';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar implements OnInit {

  utilServico = inject(Util)
  router = inject(Router)
  usuario = signal<UsuarioLogado | null>(null)

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
      const usuarioStorage = this.utilServico.getUsuario()
      this.usuario.set(usuarioStorage)
    })
  }

  navagacao(path: string) {
    this.router.navigate([path])
  }

  loginLogout() {
    const usuarioStorage = this.utilServico.getUsuario()

    if (usuarioStorage) {
      localStorage.removeItem("usuarioDados")
      this.usuario.set(null)
      // await notificar("Você saiu da sua conta.", false)

      this.navagacao('/home')
    } else {
      this.navagacao("")
    }
  }

  ngOnInit() {
    const usuarioStorage = this.utilServico.getUsuario()
    this.usuario.set(usuarioStorage)
  }

  buscaProduto(valorBusca: string) {
    const evento: CustomEvent = new CustomEvent('busca-produto', {
      detail: valorBusca
    })

    const body = document.querySelector('body')
    body?.dispatchEvent(evento)
  }
}
