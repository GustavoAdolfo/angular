import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  salvar(tarefas: Tarefa[]): void {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    this.salvar(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    const index = tarefas.findIndex(x => x.id === tarefa.id);
    tarefas[index] = tarefa;
    this.salvar(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(x => x.id !== id);
    this.salvar(tarefas);
  }

  alterarStatus(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    const tarefa = tarefas.find(x => x.id === id);
    tarefa.concluida = !tarefa.concluida;
    tarefas = tarefas.filter(x => x.id === id);
    tarefas.push(tarefa);
    this.salvar(tarefas);
  }
}
