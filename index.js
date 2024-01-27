import {cliente} from "./cliente.js"
import {contaCorrente} from "./contaCorrente.js"

const  cliente1 = new cliente("Pedro", 11122233309);//instância
const cliente2 = new cliente("Gabriel", 22233344409); //modo certo com menos linha
/*cliente2.nome = "Gabriel";
cliente2.cpf = 22233344409; modo errado com mais linhas e mais sujeito a erro
protejo meus atributos se eu colocar ecp cpf=-1 eu não consigo*/
const contaCorrentePedro = new contaCorrente(1001, cliente1);//instância
contaCorrentePedro.depositar(500);
const conta2 = new contaCorrente(102, cliente2); // "()" parenteses é pra indentificar que é uma classe ou chamar algum método

let valor = 200;
contaCorrentePedro.transferir(valor, conta2);

console.log(contaCorrente.numeroDeContas);