// 1 - arrays (0 based)
// const lista = [1,2,3,4,5]
// console.log(lista);
// console.log(typeof lista);

// const items = [`Eduardo`, true, 1, 4.5,[]]
// console.log(items);

// const arr = [`a`,`b`,`c`,`d`]
// console.log(arr[92]);

// // 2 - Propriedades 
// const numbers = [5,3,4]

// console.log(numbers.length);
// console.log(numbers[`length`]);

// const myName = `EduardoMelloDillenburg`
// console.log(myName.length);

// // 3 - Métodos 
// const otherNumbers = [1,2,3]

// const allNumbers = numbers.concat(otherNumbers)
// console.log(allNumbers);

// const text = `algum texto`

// console.log(text.toUpperCase());

// console.log(typeof text.toLocaleUpperCase);

// console.log(text.indexOf(`g`));

// // 5 - Objetos
// const person = {
//     name: `Eduardo`,
//     age: 22,
//     job: `Dev`
// }

// console.log(person.age);
// console.log(person.name.length);
// console.log(typeof person);

// // 6 - Criando e deletando propriedades 

// const car = {
//     engine: 1.0,
//     brand: `Vw`,
//     model: `Up!`,
//     km: 60.000,
// }

// console.log(car);

// car.doors=4

// console.log(car);

// 7 - Mais sobre objetos 
// const obj = {
//     a: `teste`,
//     b: true,
// }

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)

// console.log(obj2);

// console.log(obj)

// // 8 - objetos 

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.entries(obj2));

// // 9 - Mutação 
// const a = {
//     name: `Eduardo`
// }

// const b = a 

// console.log(a);
// console.log(b);

// console.log(a===b);

// a.age = 22

// console.log(b);
// console.log(a);

// delete b.age 

// console.log(a);
// console.log(b); //deletou a propriedade age dos dois, não apenas do b

// 10 - Loops em Arrays 
// const users = [`Eduardo`,`Yasmin`,`André`,`Janaina`]

// for(let i = 0; i<users.length; i++){
//     console.log(`Listando o user: ${users[i]}`);
// }

// // 11 - Push e Pop (fim)

// const array = [`a`,`b`,`c`]
// array.push(`d`)
// console.log(array);
// console.log(array.length);
// array.pop()
// console.log(array);

// const removeditem = array.pop()
// console.log(removeditem);
// console.log(array);
// array.push(`z`,`x`,`y`)
// console.log(array);

// // 12 - shift e unshift (inicio)

// const letters = [`a`,`b`,`c`]
// const letter = letters.shift()
// console.log(letter);
// console.log(letters);

// letters.unshift(`p`,`q`,`r`)
// letters.unshift(`z`)

// console.log(letters);

// // 13 - indexOf e lastindexOf 

// const elements = [`morango`,`maçã`,`abacate`,`pera`,`abacate`];
// console.log(elements.indexOf(`maçã`));
// console.log(elements.indexOf(`maçã`));
// console.log(elements[2]);
// console.log(elements[elements.indexOf(`abacate`)]);

// console.log(elements.lastIndexOf(`abacate`)); // último item
// console.log(elements.indexOf(`mamao`));

// 14 - slice 
// const testeSlice = [`a`,`b`,`c`,`d`,`e`,`f`]
// const subArray = testeSlice.slice(2,4)
// console.log(testeSlice);
// console.log(subArray);

// const subArray2 = testeSlice.slice(2,4+1)
// console.log(subArray2)
// const subArray3 = testeSlice.slice(10,20)
// console.log(subArray3); //lista vazia []

// const subArray4 = testeSlice.slice(2)
// console.log(subArray4);

// // 15 - forEach (percorre cada um dos elementos array)

// const nums = [1,2,3,4,5]

// nums.forEach((numero)=> {
//     console.log(`o número é ${numero}`)
// })

// const posts = [
//     {title: `primeiro post`, category:`PHP`},
//     {title: `primeiro post`, category:`JS`},
//     {title: `primeiro post`, category:`Python`}
// ]

// posts.forEach((post)=> {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`);
// })

// // 16 - includes
// const brands = [`BMW`,`VW`,`Fiat`]

// console.log(brands.includes(`Fiat`));
// console.log(brands.includes(`KIA`));

// if(brands.includes(`BMW`)){
//     console.log(`Há carros da marca BMW`);
// }

// // 17 - Reverse 
// const reverseTest = [1,2,3,4,5]
// reverseTest.reverse()

// console.log(reverseTest); //inverte o array original pode ser usado para ordenar itens ex: mais caro - mais barato

// 18 - Trim (remove tudo que não é texto em uma string)

// const trimTest = `testando \n    `
// console.log(trimTest);
// console.log(trimTest.trim());
// console.log(trimTest.length);
// console.log(trimTest.trim().length);

// // 19 - padStart (insere um texto no começo da string)

// const testePadStart = `1`
// const newNumber = testePadStart.padStart(4,`0`)
// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, `0`)
// console.log(testePadEnd);

// // 20 - Split

// const frase = `O rato roeu a roupa do rei de Roma`
// const arrayDaFrase = frase.split(` `)
// console.log(arrayDaFrase);

// // 21 - Join (separador)
// const fraseDenovo = arrayDaFrase.join(` `)
// console.log(fraseDenovo);

// const itensParaComprar = [`mouse`,`teclado`,`monitor`]

// const  fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(`, `)}`
// console.log(fraseDeCompra);

// // 22 - Repeat 
// const palavra = `Testando `
// console.log(palavra.repeat(5));

// // 23 - Rest Operator (importante!) (...) 

// const somaInfinita = (...args) => {

//     let total = 0 

//     for(let i = 0; i < args.length; i++){
//         total += args[i]
//     }

//     return(total)
// }

// console.log(somaInfinita(1,2,3,4));

// console.log(somaInfinita(1,20,31231,123123,124324,345346)); //react vio e angular 

// 24 - for...of

// const  somaInfinita2 = (...args)=>{
//     let total = 0 
//     for(num of args){
//         total += num 
//     }
//     return total
// }

// console.log(somaInfinita2(1,2,3,4));
// console.log(somaInfinita2(1,2,3,4,1,2,3,12,31,24,213,4,23,42,34,23,4,23,42,34,2,34));

// // 25 - destructuring em objetos 

// const userDetails = {
//     firstName: `Eduardo`,
//     lastName: `Dillenburg`,
//     job: `Dev`
// }

// const {firstName, lastName, job} = userDetails

// console.log(firstName,lastName,job);

// // renomear variáveis 
// const {firstName: primeiroNome}= userDetails
// console.log(firstName);

// // 26 - destructuring com arrays usar [] sem indices de {}

// const myList=[`avião`,`submarino`,`carro`, `trator`]

// const [veiculoA, veiculoB, veiculoC,d,e] = myList

// console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON(comunicação entre API e front-end) apenas aspas duplas e não aceita comentarios 

const myJson = '{"name": "Eduardo", "age": 22, "skills": ["JavaScript", "Node", "HTML"]}'
console.log(myJson);

// 28 - JSON para objeto e objeto para JSON

const myObject = JSON.parse(myJson)
console.log(myObject.name);
console.log(typeof myObject);

// JSON invalido 

// const badJson = '{"name": Eduardo, "age": 31}' //faltou aspas 
// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true 
console.log(myObject);
console.log(typeof myObject);

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson);
console.log(typeof myNewJson);