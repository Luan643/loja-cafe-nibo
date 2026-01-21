import { inject, Injectable } from '@angular/core';
import { EventoToast } from '../components/toast/toast';
import { CanActivateFn, Router } from '@angular/router';

export interface UsuarioLogado {
  _id: string,
  nome: string,
  usuario: string,
  eAdmin?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class Util {

  async getUsuarioId() {

    const usuarioDadosJSON: string | null = localStorage.getItem("usuarioDados")

    if (!usuarioDadosJSON) {
      alert('Antes de acessar essa funcionalidade, faça o login')
      return

      // await notificar('Antes de acessar essa funcionalidade, faça o login')
      //irPara('login.html')
    }
    const usuarioDadosJS: UsuarioLogado = JSON.parse(usuarioDadosJSON)
    return usuarioDadosJS._id
  }

  getUsuario(): UsuarioLogado | null {
    const usuarioDadosJSON: string | null = localStorage.getItem("usuarioDados")

    if (usuarioDadosJSON)
      return JSON.parse(usuarioDadosJSON)

    return null
  }

  criarToast(mensagem: string, erro: boolean) {
    const dados: EventoToast = {
      mensagem,
      erro
    }

    const evento: CustomEvent = new CustomEvent('toast-mensagem', {detail: dados})
    const body = document.querySelector("body")
    body?.dispatchEvent(evento)
  }
}


export const authGuard: CanActivateFn = (route, state) => {
  const util = inject(Util)
  const router = inject(Router)

  const usuario = util.getUsuario()
  if (usuario)
    return true
  else {
    router.navigate(['/home'])
    return false
  }
}

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const util = inject(Util)
  const router = inject(Router)

  const usuario = util.getUsuario()

  if(usuario?.eAdmin){
    return true
  } else {
    router.navigate(['/home'])
    return false
  }
}