interface IEndereco {
  logradouro: string;
  complemento: Date | string;
}

interface IClientProps {
  nome: string;
  dataNascimento: string;
  endereco: IEndereco;
}

class Cliente {
  nome: string;
  dataNascimento: string;
  endereco: IEndereco;

  constructor({ nome, dataNascimento, endereco }: IClientProps) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
  }

  public getNome(): string {
    return "leandro";
  }

  public getIdade(): number {
    return 0;
  }

  private calculaIdade(): number {
    return 0;
  }
}

class Endereco {
  logradouro: string;
  complemento: Date | string;

  constructor({ logradouro, complemento }: IEndereco) {
    this.logradouro = logradouro;
    this.complemento = complemento;
  }

  public getLogradouro(): string {
    return "";
  }

  public getComplemento(): string {
    return "";
  }

  public getEnderecoComplemento(): string {
    return "";
  }
}
