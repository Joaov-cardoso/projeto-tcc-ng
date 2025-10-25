import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FocusTrapModule } from 'primeng/focustrap';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [
    FocusTrapModule,
    ButtonModule,
    FormsModule, 
    InputTextModule, 
    CheckboxModule, 
    IconFieldModule, 
    InputIconModule, 
    AutoFocusModule,
    RouterLink
],
  template: `
  <div class="card flex justify-center">
    <div class="painel">
      <div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
          <p-iconfield>
              <p-inputicon>
                  <i class="pi pi-user"></i>
              </p-inputicon>
              <label for="campo-usuario">Nome de Usuário</label>
              <input type="text" pInputText id="campo-usuario" [(ngModel)]="usuario" type="text" placeholder="Digite seu usuário" [pAutoFocus]="true" fluid="" />
          </p-iconfield>

          <p-iconfield>
              <p-inputicon>
                  <i class="pi pi-key"> </i>
              </p-inputicon>
              <label for="campo-senha">Senha</label>
              <input type="text" pInputText id="email" [(ngModel)]="senha" type="text" placeholder="Digite sua senha" fluid />
          </p-iconfield>


          <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" routerLink="/dashboard" />
      </div>
    </div>
  </div>   
  `,
  styles: `

  `
})
export class InitialLogin {
  usuario: string = '';
  senha: string = '';

  login() {

  }
}
