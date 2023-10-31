export class Cliente {
    private _nome: string;
    private _cpf: string;
    private _telefone: string;
    private _rua: string;
    private _numero: string;
    private _complemento: string;
    private _bairro: string;
    private _cidade: string;
    private _estado: string;
  
    constructor(
      nome: string,
      cpf: string,
      telefone: string,
      rua: string,
      numero: string,
      complemento: string,
      bairro: string,
      cidade: string,
      estado: string
    ) {
      this._nome = nome;
      this._cpf = cpf;
      this._telefone = telefone;
      this._rua = rua;
      this._numero = numero;
      this._complemento = complemento;
      this._bairro = bairro;
      this._cidade = cidade;
      this._estado = estado;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    get cpf(): string {
      return this._cpf;
    }
  
    get telefone(): string {
      return this._telefone;
    }
  
    get rua(): string {
      return this._rua;
    }
  
    get numero(): string {
      return this._numero;
    }
  
    get complemento(): string {
      return this._complemento;
    }
  
    get bairro(): string {
      return this._bairro;
    }
  
    get cidade(): string {
      return this._cidade;
    }
  
    get estado(): string {
      return this._estado;
    }
  }