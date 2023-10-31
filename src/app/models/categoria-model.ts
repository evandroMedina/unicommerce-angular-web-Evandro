export class Categoria{
    private nome: string;
    private status: boolean;

    constructor(nome: string) {
        this.nome = nome;
        this.status = true; // Sempre ativa
      }

      get _nome(): string {
        return this.nome;
      }

      get _status(): boolean {
        return this.status;
      }
}