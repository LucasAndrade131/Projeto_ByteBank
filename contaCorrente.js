import {cliente} from "./cliente.js"

export class contaCorrente{
    static numeroDeContas = 0; //Atributos static são os mesmo para todos objetos, eles são compartilhados.
    agencia;
    _cliente; //atributo privado
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    set cliente(novoValor){ //instanceof verificação
        if(novoValor instanceof cliente){ //se o novovalor intacia cliente 
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){//ele utiliza o get no saldo pra poder retornar oq está dentro do saldo
        return this._saldo;//pois ele não utilizou set, pois todo método de transferir, 
    } //está em sacar, depositar, transferir unica forma de alterar o saldo

    constructor(agencia, cliente){//o metodo constructor é um método utilizado para inicializar os atributos
        this.agencia = agencia;
        this._cliente = cliente;
        contaCorrente.numeroDeContas += 1;//o numero de contas acessa minha contaCorrente e verifica sua quantidade com  +=
    }
    //método = funcoes ou compotamentos
    sacar(valor){
        if(this._saldo >= valor){  // verifica se o saldo disponível (this._saldo) é maior ou igual ao valor que se deseja sacar (valor)
            this._saldo -= valor; //validação se o valor for menor igual ao saldo ele saca
            return valor; // return sempre será no final do método
        } else {
            console.log('Saldo insuficiente para realizar o saque.');
        }
    }

    depositar(valor){
        if(valor <= 0) //se o valor for menor ou igual a zero
        {
            return; //não retorna nada, nenhuma ação executada
        }
        this._saldo += valor;  //aumenta o valor do saldo
    }

    transferir(valor, conta) {
        this.sacar(valor); //sacar o valor
        conta.depositar(valor); //depositar o mesmo valor que foi sacado
        //conta.cidade = "São Paulo";  adicionar um atributo em uma classe sem ser direto na classe 
        //é um pessímo ato para seu código 
    }
}