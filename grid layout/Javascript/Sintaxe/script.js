alert("Hello Word") /*tela de alerta na página principal*/

console.log("Instrução 1")

var nome = "João"

if(nome=="João"){ /*tudo que esta entre chaves é um escopo, comnado LET só pode usar dentro do escopo*/
    let nome = "Maria"
    console.log(nome)
}

let nome1 = "Aguiar"
let sobrenome1 = "Fernandes"
console.log(nome1,sobrenome1) /*concatenação*/

var a = 7
if (a>6){
    document.write("Maior que 6")
} else {
    document.write("Menor que 6")
}

var b = 5
if ((b>1)&&(b<6)){
    document.write("Maior que 1 E menor que 6")
}

var c = 5
if ((c>1)||(c<6)){
    document.write("Maior que 1 OU menor que 6")
}