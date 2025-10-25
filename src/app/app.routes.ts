import { Routes } from '@angular/router';
import { InitialLogin } from './pages/login';
import { GestaoDashboard } from './pages/gestao/dashboard/dashboard';
import { GestaoPrecos } from './pages/gestao/precos/precos';
import { GestaoProdutos } from './pages/gestao/produtos/produtos';
import { GestaoFornecedores } from './pages/gestao/fornecedores/fornecedores';
import { GestaoEstoque } from './pages/gestao/estoque/estoque';
import { GestaoFiscal } from './pages/gestao/fiscal/fiscal';
import { GestaoRelatorios } from './pages/gestao/relatorios/relatorios';
<<<<<<< HEAD
import { EstoqueCreate } from './pages/gestao/estoque/create';
=======
import { GestaoCustosFixos } from './pages/gestao/custos-fixos/custos-fixo';
>>>>>>> 4f9e7d90ac8794e2ce5287766428efa64284ceca

export const routes: Routes = [
    {path: "login", component: InitialLogin},
    {path: "dashboard", component: GestaoDashboard},
    {path: "precos", component: GestaoPrecos},
    {path: "produtos", component: GestaoProdutos},
    {path: "fornecedores", component: GestaoFornecedores},

    {path: "estoque", component: GestaoEstoque},
    {path: "estoque/cadastrar", component: EstoqueCreate},

    {path: "fiscal", component: GestaoFiscal},
    {path: "relatorios", component: GestaoRelatorios},
    {path: "custos-fixos", component: GestaoCustosFixos},
    
];