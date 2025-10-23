import { Routes } from '@angular/router';
import { InitialLogin } from './pages/login';
import { GestaoDashboard } from './pages/gestao/dashboard/dashboard';
import { GestaoPrecos } from './pages/gestao/precos/precos';
import { GestaoProdutos } from './pages/gestao/produtos/produtos';
import { GestaoFornecedores } from './pages/gestao/fornecedores/fornecedores';
import { GestaoEstoque } from './pages/gestao/estoque/estoque';
import { GestaoFiscal } from './pages/gestao/fiscal/fiscal';
import { GestaoRelatorios } from './pages/gestao/relatorios/relatorios';

export const routes: Routes = [
    {path: "login", component: InitialLogin},
    {path: "dashboard", component: GestaoDashboard},
    {path: "precos", component: GestaoPrecos},
    {path: "produtos", component: GestaoProdutos},
    {path: "fornecedores", component: GestaoFornecedores},
    {path: "estoque", component: GestaoEstoque},
    {path: "fiscal", component: GestaoFiscal},
    {path: "relatorios", component: GestaoRelatorios},
    
];
