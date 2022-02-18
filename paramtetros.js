//PARAMETROS DE FUNÇÃO

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2, 4))

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))

// console.log(multiplica())