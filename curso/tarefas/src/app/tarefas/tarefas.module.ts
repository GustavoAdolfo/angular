import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar/editar-tarefas.component';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarComponent, EditarTarefasComponent, TarefaConcluidaDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
