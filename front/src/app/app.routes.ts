import { Routes } from '@angular/router';
import { LoginUsuario } from './pages/login-usuario/login-usuario';
import { NOME_APLICACAO } from './constantes/aplicacao-constantes';
import { Home } from './pages/home/home';
import { HistoricoDeCompras } from './pages/historico-de-compras/historico-de-compras';
import { CriarProdutos } from './pages/criar-produtos/criar-produtos';
import { Carrinho } from './pages/carrinho/carrinho';
import { authGuard, authGuardAdmin } from './services/util';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';
import { DetalharProduto } from './pages/detalhar-produto/detalhar-produto';

export const routes: Routes = [
    {path:"", component: LoginUsuario, title: 'Login ' + NOME_APLICACAO},
    {path:"home", component: Home, title: NOME_APLICACAO},
    {path:"criar_produtos", component: CriarProdutos, title: NOME_APLICACAO, canActivate: [authGuard, authGuardAdmin]},
    {path:"historico", component: HistoricoDeCompras, title: NOME_APLICACAO, canActivate: [authGuard]},
    {path:"carrinho", component: Carrinho, title: NOME_APLICACAO, canActivate: [authGuard]},
    {path:"detalhar/:id", component: DetalharProduto, title: NOME_APLICACAO},
    {path:"**", component: NaoEncontrado, title: NOME_APLICACAO},
];
