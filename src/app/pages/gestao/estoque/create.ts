import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Fluid } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

interface Estoque {
  id: string;
  nome: string;
  quantidade: number;
  fornecedor: string;
  valor: number;
}

@Component({
  selector: 'app-create',
  imports: [FormsModule, InputTextModule, IftaLabelModule, InputNumber, Fluid, IconFieldModule],
  template: `
    <div class="painel">
      <div>
        <div class="card flex justify-center">
          <p-iftalabel>
              <input pInputText id="username" [(ngModel)]="nome" autocomplete="off" />
              <label for="username">Username</label>
          </p-iftalabel>
      </div>

       <div class="flex-auto">
        <label class="mb-2 block font-bold" for="horizontal">
          Valor
        </label>
    <p-inputnumber [(ngModel)]="valor" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="BRL">
        <ng-template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
        </ng-template>
        <ng-template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
        </ng-template>
    </p-inputnumber>
    </div>

      <div class="card flex justify-center">
          <p-iftalabel>
              <input pInputText id="username" [(ngModel)]="fornecedor" autocomplete="off" />
              <label for="username">Fornecedor</label>
          </p-iftalabel>
      </div>



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
export class EstoqueCreate {
  estoques: Estoque[];

  nome: string = "";
  quantidade: number = 0;
  fornecedor: string = "";
  valor: number = 0;

    idEditar?: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.estoques = this.carregarEstoquesLocalStorage();
    let idParaEditar = this.activatedRouter.snapshot.paramMap.get("id");

    if (idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();
      this.preencherCamposParaEditar();
    }
  }
  preencherCamposParaEditar(): void {
    let estoque = this.estoques.filter(estoque => estoque.id === this.idEditar)[0];
    this.nome = estoque.nome;
    this.quantidade = estoque.quantidade;
    this.fornecedor = estoque.fornecedor;
    this.valor = estoque.valor;
  }

  salvar(): void {
    if (this.idEditar === undefined) {
      this.cadastroEstoque();
    } else {
      this.editarEstoque();
    }
    this.salvarLocalStorage();
    this.router.navigate(["/estoque"])
  }
  
  editarEstoque() {
    let indiceLista = this.estoques.findIndex(estoque => estoque.id === this.idEditar);

    this.estoques[indiceLista].nome = this.nome;
    this.estoques[indiceLista].quantidade = this.quantidade;
    this.estoques[indiceLista].fornecedor = this.fornecedor;
    this.estoques[indiceLista].valor = this.valor;
  }

  cadastroEstoque() {
    let estoque: Estoque = {
      id: crypto.randomUUID(),
      nome: this.nome,
      quantidade: this.quantidade,
      fornecedor: this.fornecedor,
      valor: this.valor,
    }
    this.estoques.push(estoque);
  }

  carregarEstoquesLocalStorage(): Estoque[] {
    let estoquesDoLocalStorage = localStorage.getItem("estoques");
    if (estoquesDoLocalStorage === null) {
      return [];
    }
    let estoques: Estoque[] = JSON.parse(estoquesDoLocalStorage);
    return estoques;
  }

  salvarLocalStorage(): void {
    let estoquesString = JSON.stringify(this.estoques);

    localStorage.setItem("estoques", estoquesString);
  }
}
