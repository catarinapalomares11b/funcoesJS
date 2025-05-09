//EXEMPLO 1
function mostrarAlerta(){
    let nome = "Catarina"
    alert("Seja bem-vindo(a), " +nome)
}

mostrarAlerta()

//EXEMPLO 2
function somar(valorA, valorB){
    alert(valorA + valorB)
}

somar(20, 12)

//EXEMPLO 3
function mensagemBoasVindas(nome, cargo){
    alert('Seja bem-vindo(a) ${nome} ${cargo}')
}

let nome = prompt("Digite o nome do funcionário:")
let cargo = prompt("Digite o cargo do funcionário:")

alert(mensagemBoasVindas(nome, cargo))
console.log(mensagemBoasVindas(nome, cargo))

//EXEMPLO 4
function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

let multiplicacao1 = multiplicacao(6, 7)
let multiplicacao2 = multiplicacao(9, 10)
let multiplicacao3 = multiplicacao(12, 25)

console.log(multiplicacao1)
console.log(multiplicacao2)
console.log(multiplicacao3)

//EXEMPLO 5
function parOuImpar(numero){
    if(numero % 2 === 0){
        return "PAR"
    }
    return "ÍMPAR"
    
}

console.log(parOuImpar(14))

//EXEMPLO 6
let numero = 10

const button = document.querySelector("button")

button.addEventListener("click", function(){
    numero++
    console.log(numero)
})

console.log(numero)

//EXEMPLO 7
let numero = 10

const button = document.querySelector("button")

button.addEventListener("click", () => {
    numero++
    console.log(numero)
})

console.log(numero)

//EXEMPLO 8
let somar = (valor1, valor2) => valor1 + valor2
let multiplicacao = (numero1, numero2) => numero1 * numero2

console.log(multiplicacao(10, 20))
console.log(somar(10, 70))