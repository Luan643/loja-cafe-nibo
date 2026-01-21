import { Component, inject, signal } from '@angular/core';
import { DADOS_USUARIO, NOME_APLICACAO } from '../../constantes/aplicacao-constantes';
import { FormsModule } from '@angular/forms';
import { UsuarioServico } from '../../services/usuario-servico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  imports: [FormsModule],
  templateUrl: './login-usuario.html',
  styleUrl: './login-usuario.scss',
})
export class LoginUsuario {

  cadastro = signal<boolean>(false)
  usuarioServico = inject(UsuarioServico)
  router = inject(Router)

  nomeAplicacao = NOME_APLICACAO
  usuario: UsuarioLogin = {
    usuario: '',
    senha: '',
    nome: ''
  }

  login() {
    if (this.cadastro()) {
      this.usuarioServico.castastrar(this.usuario)
        .subscribe(usuarioLogado => {
          localStorage.setItem(DADOS_USUARIO, JSON.stringify(usuarioLogado))
          this.irParaHome()
        })
    }
    this.usuarioServico.autenticar(this.usuario).subscribe((resposta) => {
      localStorage.setItem(DADOS_USUARIO, JSON.stringify(resposta))
      this.irParaHome()
    })
  }

  criarContat(criarConta: boolean) {
    this.cadastro.set(criarConta)
  }

  irParaHome() {
    this.router.navigate(['/home'])
  }
}
