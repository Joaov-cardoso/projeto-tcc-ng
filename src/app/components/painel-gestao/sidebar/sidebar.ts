import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-sidebar',
  imports: [AvatarModule, RouterLink],
  template: `
    <div class="sidebar">
      <div class="sidebar-header">
        <p-avatar label="U" size="large"></p-avatar>
        <h3>Usuário</h3>
      </div>
      <ul class="sidebar-menu">
        <li><a routerLink="dashboard">Dashboard</a></li>
        <li><a routerLink="precos">Preços</a></li>
        <li><a routerLink="produtos">Produtos</a></li>
        <li><a routerLink="fornecedores">Fornecedores</a></li>
        <li><a routerLink="estoque">Estoque</a></li>
        <li><a routerLink="fiscal">Fiscal</a></li>
        <li><a routerLink="relatorios">Relatórios</a></li>
        <li><a routerLink="custos-fixos">Custos Fixos</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 220px;
      height: 100vh;
      background-color: #1e1e2f;
      color: #fff;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    }

    .sidebar-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    .sidebar-header h3 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }

    .sidebar-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-grow: 1;
    }

    .sidebar-menu li {
      margin: 0.5rem 0;
    }

    .sidebar-menu a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      display: block;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.3s;
    }

    .sidebar-menu a:hover {
      background-color: #3a3a5c;
    }
  `]
})
export class Sidebar {}
