import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CustomerService } from '../../../services/customer-service';
import { ButtonModule } from 'primeng/button';

interface Customer{

}

@Component({
  selector: 'app-precos',
  imports: [TableModule, CommonModule, ButtonModule],
  template: `
<div class="painel">
  <h2>Central de Preços</h2>
  <div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [tableStyle]="{ 'min-width': '50rem' }"
        [rowsPerPageOptions]="[5, 10, 20]"
    >
        <ng-template #header>
            <tr>
                <th style="width:25%">Produto</th>
                <th style="width:25%">Custo</th>
                <th style="width:25%">Valor Sugerido</th>
                <th style="width:25%">Valor Regional</th>
                <th style="width:25%"></th>
            </tr>
        </ng-template>
        <ng-template #body let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
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

  h2 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  `
})
export class GestaoPrecos {
customers!: Customer[];

    constructor(private customerService: CustomerService) {}
}