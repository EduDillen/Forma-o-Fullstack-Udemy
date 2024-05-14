/*
// 1 - Number (não precisa de "")
console.log(typeof 2);
console.log(typeof 3.14);
console.log(typeof 1e2);
console.log(typeof π);

// 2 - Operações Aritméticas
console.log(2+4);
console.log(10-5);
console.log(5*4);
console.log(10/2);
console.log(5+4*2);

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(1*"a");
console.log(1+"a");
console.log(Infinity +(-Infinity));

// 4 - Strings
console.log("Um Texto");
console.log(`Mais um Texto`);
console.log(`12`);
console.log(typeof "Um Texto");
console.log(typeof `Mais um Texto`);

// 5 - Carcteres especiais em string
console.log("Testandoa a \n quebra de linha"); // Endentação
console.log("Testandoa a \nquebra de linha"); // Sem endentacão
console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi, " + "tudo" + " bem?"); //Funciona da mesma maneira com crase

// 7 - Interpolação/ Template Strings (Deve ser escrita `entre crases`, não "entre aspas duplas" nem entre 'aspas simples')
console.log(`A soma de 2 + 2 é ${2+2}`)
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans (true e false)
console.log(true);
console.log(5>20); 
console.log(30>10); 

// 9 - Comparações
console.log(5<=5)
console.log(5<5)
console.log(10==10)
console.log(10==9)
console.log(10!=9)

// 10 - Idêntico [===, !==] (melhor que == pois o === identifica o tipo também!)
console.log(9 == "9") 
console.log(9 + "9") // resultado = 99, tipos diferentes 
console.log(9 === "9") //não são idênticos, o === identifica o tipo.
console.log(9!="9") //falso pois ele acha que são iguais por serem o mesmo caractere 
console.log(9!=="9") //verdadeiro pois ele identifica que não são idênticos, têm tipos diferentes
*/
// 11 - Operadores Lógicos [&&:AND, ||:OR, !:NOT]
console.log(true && true)
console.log(true && false)
console.log(5>2 && 2<10)
console.log(5>2 && "Eduardo" === 1)
console.log(5>2 || "Eduardo" === 1)
console.log(5<2 || "Eduardo" === 1)
console.log(!true) //inverte o resultado
console.log(!5>2) //Avalia primeiro a condição e depois o operador lógico

// 12 - Empty values (undefined e null)
console.log(typeof null, typeof undefined); //null é um objeto e o undefined é undefined
console.log(null == undefined); // ambos tem ausencia de valor 
console.log(null === undefined); // mas não sao identicos pois seu tipo não é o mesmo
console.log(undefined == false); //Eles não são iguais ao booleano falso 

// 13 - Conversão de tipo automática (conversão silenciosa pode gerar erros)
console.log(5*null); // 0 
console.log("teste"*"opa"); // NaN
console.log("10"+1); //101
console.log("10"-1); //9
