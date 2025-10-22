import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-dashboard',
  imports: [SplitterModule],
  template: `
<div class="painel">
  <h2>DashBoard Gerente</h2>
  <div class="card1">
      <p-splitter class="mb-8 dashboard-card1">
          <ng-template #panel>
              <div class="flex items-center justify-center h-full texto">Ticket Médio</div>
          </ng-template>
      </p-splitter>
      <p-splitter class="mb-8 dashboard-card1">
          <ng-template #panel>
              <div class="flex items-center justify-center h-full texto">Vendas</div>
          </ng-template>
      </p-splitter>
      <p-splitter class="mb-8 dashboard-card1">
              <ng-template #panel>
              <div class="flex items-center justify-center h-full texto">CMV</div>
          </ng-template>    
      </p-splitter>
      <p-splitter class="mb-8 dashboard-card1">
          <ng-template #panel>
              <div class="flex items-center justify-center h-full texto">Lucro Previsto</div>
          </ng-template> 
      </p-splitter>
      <p-splitter class="mb-8 dashboard-card1">
          <ng-template #panel>
              <div class="flex items-center justify-center h-full texto">Avaliação</div>
          </ng-template>
      </p-splitter>
    </div>

    <div class="card2">
      <p-splitter class="mb-8 dashboard-card2">
        <ng-template #panel>
          <div class="flex items-center justify-center h-full texto">Vendas CMV</div>
        </ng-template>
      </p-splitter>

      <p-splitter class="mb-8 dashboard-card2">
        <ng-template #panel>
          <div class="flex items-center justify-center h-full texto">Previsão de Lucro</div>
        </ng-template>
      </p-splitter>
    </div> 

    <div class="card3">
        <p-splitter class="mb-8 dashboard-card3">
            <ng-template #panel>
                <div class="flex items-center justify-center h-full texto">Produtos em Destaque</div>
            </ng-template>
        </p-splitter>

        <p-splitter class="mb-8 dashboard-card3">
            <ng-template #panel>
                <div class="flex items-center justify-center h-full texto">Ultimas Avaliações</div>
            </ng-template>
        </p-splitter>
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

  .card1{
    display:flex;
    flex-direction: row;
    gap: 20px;
  }

  .card2{
    display:flex;
    flex-direction: row;
    gap: 20px;
  }

  .card3 {
    display:flex;
    flex-direction: row;
    gap: 20px;
  }

  .dashboard-card1{
    height: 100px; 
    width: 100%;
  }

  .dashboard-card2{
    margin-top: 20px; 
    height: 340px; 
    width: 100%;
  }

  .dashboard-card3 {
    margin-top: 20px; 
    height: 300px; 
    width: 100%; 
  }

  .texto{
    text-align: center;
  }

  .card-inferior{
    display: flex;
    flex-direction: row;
  }
  `
})
export class GestaoDashboard {

}
