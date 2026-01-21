import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constantes/aplicacao-constantes';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServico {

  constructor(private httpClient: HttpClient){
    
  }

  autenticar(usuario: UsuarioLogin) {
    if (!usuario.usuario || !usuario.senha)
      throw 'Usuário e senha são obrigatórios para fazer login'

    return this.httpClient.post(`${BASE_URL}/usuario/login`, usuario)
  }

  castastrar(usuario: UsuarioLogin) {
    return this.httpClient.post(`${BASE_URL}/usuario`, usuario)
  }

}
