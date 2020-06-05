// Eu escolhi a linguagem javascript porque me pareceu uma linguagem bastante acessivel e cativante.

var string = "variavel"; //Variavel String
var int = 10; //Variavel Int
var float = 1.5; //Variavel Float
var array = [int,string,float]; //Cria um array com 3 variaveis
var objeto = {FirstName: "Vasco", LastName: "Fonseca"};
var bool = true;
var variavelNull = null; // variavel nula.
    var VariavelIndefinida;
const variavelConstante = 10; //nao podemos alterar o valor

document,getElementById("Variavel").innerHTML - int; //Escreve o valor da variavel

var toString = int.toString(); //Transforma uma variavel int numa string
var length = string.length ); //Tamanha da variavel string

var variavelGlobal //É uma varivel que podes ser utilizada em qualquer parte do script

function varlocal(){
	var variavellocal; //É uma variavel que so podes ser usada dentro da funçao aonde se encontra
}

function varParametro(variavelParametro){
var varFuncao = varParametro + 3; //Só pode ser usada dentro da funçao
}

function OperadoresAritmetricos(){
     var num1 = 5;
	 var nume2 - 10;
	 var soma2 - 0;
	 var subtraaao = 1;

	 var soma = num1 +num2; //soma duas variaveis
	 soma2++; //soma mais 1 ao valor atual

	 var subtracao - num2 - num1; //subtrai uma variavel por outra
	 subtracao--; //subtrai 1 ao valor atual

	 var divisao = num2 / num1; //divide uma variavel por outra
	 var divisao2 = num2 % num1; //retorna o inteiro restante da divisao dos dois operandos

	 var multiplicacao = num1 * num2; //multiplicacao 2 variaveis 
	 var expoente = num1 ** num2; //calcula a base elevada á potencia da 2 variavel

}

function OperadoresRelacionados(){
	var Array2 = new Array(1,2,6,8);
	var string2 = "string";

	if(6 in Array2){
		//executa este if se o numero 6 estiver incluido no array
	}
	 if("teste" in Array2){
	 	 //nao executa o if
	 }

	 if(Array2 instanceof string2){
	 	 //executa o if se ambas as variaveis foram do mesmo tipo de dados
	 }
	  if(int2 != int3){
	  	  //executa este if se as variaveis tiverem, valores diferentes
	  }
}

//regras de nome das constantes e varievais
var variavel1;
var varieval_2$;

const constante1 = 0;
const constante_2$ = 0;

 //regras dos nomes das funçoes
function funcao(){

}

function funcao2(){

}

function funcao_3$(){

}
