// // 1 - Criando uma função

// function minhaFuncao(){
//     console.log(`testando`);
// }

// minhaFuncao()
// minhaFuncao()
// minhaFuncao()

// const minhaFuncaoEmVariavel = function (){
//     console.log(`funcao em variavel`);
// }

// minhaFuncaoEmVariavel()

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParametro(`alguma coisa`)

// funcaoComParametro(`Outra função`)

// //2 - Return

// const a = 10 
// const b = 20 
// const c = 30 
// const d = 40 

// function soma(n1, n2){
//     return n1 + n2
// }

// const result = soma(a, b)

// console.log(result);

// console.log(soma(c,d));

// 3 - Escopo da função

// let y = 10 

// function escopo(){
//     let y = 20 
//     console.log(`Y dentro da função: ${y}`);
// }

// escopo()


//  y = 15

// console.log(`Y fora da função é: ${y}`);

// escopo()

// 4 - Escopo alinhado 

// let m = 10 

// function escopoAlinhado(){
//     let m = 20 

//     if(true){
//         let m = 30 

//         if(true){
//             let m = 40 
//             console.log(m);
//         }
//         console.log(m);
//     }
//     console.log(m);
// }
// escopoAlinhado()
// console.log(m);

// // 5 - Arrow function (função anônima() precisa estar dentro de uma variável)

// const Arrow = ()=> {
//     console.log(`Esta é uma arrow function`);
// }

// Arrow()

// const parOuImpar = (n) => {
//     if(n%2===0){
//         console.log(`Par`);
//         return
//     }

//     console.log(`Impar`);
// }

// parOuImpar(5)

// parOuImpar(10)


// //6 - mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x * x 
// }

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x 

// console.log(raizQuadrada2(5));
// console.log(raizQuadrada2(12));

// const helloWorld = () => console.log(`Hello World!`); //não precisa de 2 console.log

// helloWorld()

// // 7 - parâmetro opcional

// const multiplication = function(m,n){ //se so tiver um numero, multiplique por 2, se houver 2, multiplique um pelo outro
//     if(n === undefined){
//         return m * 2 
//     } else {
//         return m * n 
//     }
// }
// console.log(multiplication(5));
// console.log(multiplication(2,4));

// const greeting = (name) => {
//     if (!name){
//         console.log(`Olá!`);
//         return
//     }
//     console.log(`Olá ${name}`);
// }

// greeting()
// greeting(`Eduardo`)

// // 8 - valor default 
// const customGreeting = (name, greet = `Olá!`) => {
//     return `${greet}, ${name}!`
// }

// console.log(customGreeting(`Eduardo`));
// console.log(customGreeting(`João`, `Bom dia`));

// const repeatText = (text, repeat = 2)=>{
//     for(let i = 0; i<repeat; i++){
//         console.log(text)
//     }
// }

// repeatText(`testando`)

// repeatText(`agora repita 5 vezes`, 5)

// 9 - Closure 

function someFunction(){
    let txt = `Alguma coisa`

    function display(){
        console.log(txt);
    }
    display()
}
someFunction()

const multiplicationClosure = (n) => {
    return(m) => {
        return n*m
    }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(10)

console.log(c1(5));
console.log(c2(10));

// 11 - Recursão (uma espécie de loop)
const untilTen = (n,m) => {
    if(n<10){
        console.log(`Função parou`);
    } else {
        const x = n - m 
        console.log(x);
        untilTen(x,m)
    }
}
untilTen(100, 7)

function factorial(x){
    if(x===0){
        return 1
    } else {
        return x*factorial(x-1)
    }
}

const num = 6
const result = factorial(num)

console.log(`o factorial do númedo ${num} é ${result}`);