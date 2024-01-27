export class cliente { //a classe é um modelo/template o objeto 
    nome;
    _cpf;   //atributos = váriaveis ou caracteristicas  
//OBJETOS: abstração de coisas que existem no mundo real
    get cpf(){
       return this._cpf;
    }

    constructor(nome, cpf){ //construtor, recebe as propriedades já pré-definidas pela classe
        this.nome = nome; // sem isso ela não pode ser instânciada
        this._cpf = cpf; //só pode ser no atribuita com construtor
    }
}
