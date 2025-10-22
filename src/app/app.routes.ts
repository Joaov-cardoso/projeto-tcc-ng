import { Routes } from '@angular/router';
import { InitialLogin } from './pages/login';
import { GestaoDashboard } from './pages/gestao/dashboard/dashboard';
import { GestaoPrecos } from './pages/gestao/precos/precos';

export const routes: Routes = [
    {path: "login", component: InitialLogin},
    {path: "dashboard", component: GestaoDashboard},
    {path: "precos", component: GestaoPrecos},
    
];
