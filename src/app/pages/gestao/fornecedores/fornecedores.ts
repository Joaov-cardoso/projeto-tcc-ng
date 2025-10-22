import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-fornecedores',
  imports: [SplitterModule],
  template: `
<div class="painel">
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
export class GestaoFornecedores {

}
