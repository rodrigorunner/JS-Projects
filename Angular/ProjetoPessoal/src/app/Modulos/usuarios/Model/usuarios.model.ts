export class Usuarios {
    id?: string = undefined;
    nome: string = undefined;
    senha: number = undefined;
    telefone: number = undefined;
    email: string = undefined;
    apto: number = undefined;
    nascimento: Date = undefined;
    cep: number = undefined;
    complemento: string = undefined;

    // Interrogação no TS significa um valor opcional, pode ser "null"
    // init?: Parital<> trabalha de forma parcial.
    // Ao mapear duas classes ele verifica similaridade dos campos.
    // Use o assign ao invés de instanciar uma classe
        constructor(init?: Partial<Usuarios>) {
            Object.assign(this, init);
    }
}