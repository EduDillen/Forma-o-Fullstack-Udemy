/*
// 1 - Variáveis
let nome = "Eduardo"
console.log(nome);
console.log("Eduardo");

nome = "Eduardo Dillenburg"

console.log(nome);

const idade = 22;

console.log(idade);

/*idade = 23 TypeError: Assignment to constant variable.
at Object.<anonymous> (/Users/eduardodillenburg/Documents/Formação Full Stack - Udemy/JS/3_ESTRUTURAS/JS/node_3900f45dd1307.tmp.js:14:7)
at Module._compile (node:internal/modules/cjs/loader:1378:14)
at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
at Module.load (node:internal/modules/cjs/loader:1212:32)
at Module._load (node:internal/modules/cjs/loader:1028:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
at node:internal/main/run_main_module:28:49 

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variáveis 
/*let 2teste = "inválido"
let @teste = "inválido"

let 
    a = 10, 
    b = 20, 
    c = 30
console.log(a, b, c);

const nomecomp = "Eduardo Mello Dillenburg"
const nomeComp = "João da Silva"

console.log(nomecomp); 
console.log(nomeComp);

let _teste = 'ok_'
let $teste = 'ok$'

console.log(_teste);
console.log($teste);
/*
// 3 - Prompt
const age = prompt("Digite a sua idade:")
console.log(`Você tem ${age} anos!`);
document.write(`Você tem ${age} anos!`)

// 4 - Alert
window.alert("você é velho!!")

const z = 10

alert(`o Número é ${z}`)


// 5 - Math
console.log(Math.max(5,2,1,10,4)); //Retorna o maior número 
console.log(Math.floor(5.123124)); //Arredonda para baixo 
console.log(Math.ceil(5.123124)); //Arredonda para cima

// 6 - Console 
console.log('teste');
console.error('erro!');
console.warn('Aviso!');
*/

// 7 - if
// const m = 10
// if(m>5){
//     console.log('M é maior que 5');
// }

// const user = 'João'
// if(user === 'João'){
//     console.log('Olá, João!');
// }
// if(user === 'Maria'){
//     console.log('Olá, Maria!');
// }
// console.log(user==='João', user==='Maria');

// // 8 - Else 
// const loggedIn = false
// if(loggedIn){
//     console.log('Está autenticado!')
// } else {
//     console.log('Não está autenticado!');
// }

// const q = 10 
// const w = 25

// if(q>5&&w>20){
//     console.log('números mais altos')
// } else {
//     console.log('Os números não são mais altos');
// }

// // 9 - else if (usar varios else ifs)
// if(1>2){
//     console.log('teste');
// } else if(2>3){
//     console.log('teste 2');
// } else if(5>1){
//     console.log('Agora sim!');
// }

// const userName = 'Eduardo'
// const userAge = 22

// if(userName === 'José'){
//     console.log('Bem vindo, José!');
// } else if(userName === 'Eduardo' && userAge === 22){
//     console.log(`Olá, Eduardo, você tem ${userAge} anos`);
// } else {
//     console.log('Nenhuma condição aeita!');
// }

// //10 - while
// let p = 0 
// while(p<5){
//     console.log(`repetindo ${p}`);
//     p = p+1
// }
// //  //Loop Infinito
// //  let x = 10
// //  while(x>5){
// //    console.log(`impromindo ${x}`); 
// //  }

// 11 - do while

// let o = 10

// do{
//     console.log(`Valor de o: ${o}`);
//     o--
// } while (o>1)

// 12 - for 

// for(let t =0; t < 10; t++){
//     console.log('Repetindo');
// }

// let r = 10 
// for(r; r>0; r=r-1){
//     console.log(`dominuindo ${r}`);
// }

// 13 - endentação

// for(let u = 0; u < 10; u++){
//     if(u*2 >10){
//         console.log(`maior que 10! ${u}`);
//     } else{
//         if(u/2 ==0){
//             console.log('Deu 0');
//         }
//     }
// }

// 14 - break

// for(let g = 20; g>10; g--){
//     console.log(`valor de ${g}`);
    
//     if(g===15){
//         console.log('O g é 15!');
//         break
//     }
// }

// // 15 - continue 
// for(let s = 0; s < 10; s = s+ 1){
//     //operador de resto = % 
//     if(s % 2=== 0){
//         console.log('Número par!');
//         continue
//     }
//     console.log(s);
// }

// 16 - switch

const job = `programador`

switch(job){
    case `programador`:
        console.log(`Você é um programador!`);
        break
    case `Advogado`:
        console.log(`Você é um advogado!`);
        break
    case `Engenheiro`:
        console.log(`Você é um engenheiro!`);
        break
    default:
        console.log(`Profissão não encontrada`);
}   

// switch errado (precisa do break!!!)
const l = 100

switch(l){
    case 200:
      console.log(`L é 200!`)
    case 100:
      console.log(`L é 100!`)  
    case 10:
      console.log(`L é 10!`)
    default:
        console.log(`L não encontrado`);
}