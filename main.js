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