import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


interface Estoque {
  id: string;
  nome: string;
  quantidade: number;
  fornecedor: string;
  valor: number;
}
@Component({
  selector: 'app-estoque',
  imports: [TableModule, CommonModule, ButtonModule, RouterLink], 
  template: `
    <div class="painel">
      <div>
        <p-button routerLink="/estoque/cadastrar" label="Cadastrar"/>
      </div>
      <div class="card">
          <p-table [value]="estoques" [tableStyle]="{'min-width': '60rem'}">
              <ng-template #header>
                  <tr>
                      <th pSortableColumn="id" style="width:20%">
                          <div class="flex items-center gap-2">
                              Código
                              <p-sortIcon field="code" />
                          </div>
                      </th>
                      <th pSortableColumn="nome" style="width:20%">
                          <div class="flex items-center gap-2">
                              Nome
                              <p-sortIcon field="name" />
                          </div>
                      </th>
                      <th pSortableColumn="quantidade" style="width:20%">
                          <div class="flex items-center gap-2">
                              Quantidade
                              <p-sortIcon field="category" />
                          </div>
                      </th>
                      <th pSortableColumn="Fornecedor" style="width:20%">
                          <div class="flex items-center gap-2">
                              Fornecedor
                              <p-sortIcon field="quantity" />
                          </div>
                      </th>
                      <th pSortableColumn="Valor" style="width:20%">
                          <div class="flex items-center gap-2">
                              Valor
                              <p-sortIcon field="quantity" />
                          </div>
                      </th>
                  </tr>
              </ng-template>
              <ng-template #body let-estoques>
                  <tr>
                      <td>{{ estoques.id }}</td>
                      <td>{{ estoques.nome }}</td>
                      <td>{{ estoques.quantidade }}</td>
                      <td>{{ estoques.valor }}</td>
                  </tr>
              </ng-template>
          </p-table>
      </div>
    </div>
  `,
  styles: `
   .painel{
     position: fixed;
      top: 0;
      right: 0;
      width: 80%;
      height: 95%;
      background-color: #1e1e2f;
      color: #fff;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      margin-top: 20px;
      margin-right: 70px;
      box-shadow: 2px 0 5px rgba(0,0,0,0.2);
  }
  `
})
export class GestaoEstoque {
  estoques: Estoque[];


  constructor(private router: Router) {
    this.estoques = this.carregarEstoquesLocalStorage();
  }

  carregarEstoquesLocalStorage(): Estoque[] {
    let estoquesDoLocalStorage = localStorage.getItem("estoques");
    if (estoquesDoLocalStorage === null) {
      return [];
    }
    let estoques: Estoque[] = JSON.parse(estoquesDoLocalStorage);
    return estoques;
  }

  apagar(estoque: Estoque): void {
    let indiceParaApagar = this.estoques.indexOf(estoque);
    this.estoques.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }

  editar(estoque: Estoque): void {
    this.router.navigate([`/estoque/editar/${estoque.id}`])
  }

  salvarLocalStorage(): void {
    let estoquesString = JSON.stringify(this.estoques);

    localStorage.setItem("estoques", estoquesString);
  }
}

