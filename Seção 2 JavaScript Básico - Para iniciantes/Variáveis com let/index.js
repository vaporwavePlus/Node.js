//  Quando um valor é definido "João"
let nome = "João"; //String

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");

// Quando um valor não é definido "Undefined", A variavel foi declarada, mas não tem valor

let nome2;
console.log(nome2);

//  Quando modificado o valor ela se torna declarada, tendo o valor

let nome3;
nome3 = "João";

console.log(nome3);

//  Não se pode utilizar variavel reservadas do sistema, tipo "let if =, ou, const console ="
/*  Não pode começar o nome de uma variável com um número
let 4nome = Invalid or unexpected token
*/

/*
  Não podem conter espaços ou traços
   let nome-Cliente;
*/

//  Case-sensitive

let nomeCliente = "Messias";
let nomecliente = "Abraão";

console.log(nomeCliente, nomecliente);

//  Não podemos redeclarar variáveis com let

let nomeFuncionario = "João";
nomeFuncionario = "Messias";

console.log(nomeFuncionario);

//  NÃO UTILIZE VAR, UTILIZE LET.
