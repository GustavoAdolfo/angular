export class Tarefa {

  public id: number;
  public nome: string;
  public concluida: boolean;

  consructor(
    _id?: number,
    _nome?: string,
    _concluida?: boolean
  ) {
    this.id = _id;
    this.nome = _nome;
    this.concluida = _concluida;
    }
}
