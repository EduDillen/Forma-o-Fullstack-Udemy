// // var, let, const 

// var x = 10 
// var  y = 15

// if(y>10){
//     var x = 5
//     console.log(x);
// }

// console.log(x); //Perdeu o valor de referência (altera os valores que estão fora do bloco)

// let a = 10 
// let b = 15

// if(b>10){
//     let a = 5
//     console.log(a); //não altera os valores que estão fora do bloco
// }

// console.log(a);

// function logName(){
//     const name = `Pedro`
//     console.log(name);
// }

// const name = `Eduardo`
// logName()
// console.log(name); //respeita a função e a variavel global name

// // 2 - arrow function
// const sum = function(a,b){
//     return a+b
// }

// const arrowSum = (a,b) => a + b //não precisa de corpo de função, return, function.

// console.log(sum(5,5));
// console.log(arrowSum(5,5));

// const greeting = (name)=> {
//     if(name){
//         return `Hello ${name}`
//     } else {
//         return `Hello`
//     }
// }

// console.log(greeting(`Eduardo`));
// console.log(greeting());

// const user = {
//     name: `Eduardo`,
//     sayUsername(){
//         setTimeout(function(){
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000)
//     },
//     sayUsernameArrow(){
//         setTimeout(()=>{
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 2000)
//     }
// }

// user.sayUsername()
// user.sayUsernameArrow()

// 3 - filter

// const arr = [1,2,3,4,5,6]

// const highNumbers = arr.filter((n)=>{
//     if(n>=3){
//         return n
//     }
// })

// console.log(highNumbers);

// const users = [
//     {name: `Eduardo`, avaliable: true},
//     {name: `João`, avaliable: false},
//     {name: `Matheus`, avaliable: true},
//     {name: `André`, avaliable: false},
//     {name: `Pedro`, avaliable: true},
// ]

// const avaliableUsers = users.filter((user)=> user.avaliable)
// console.log(avaliableUsers);

// 4 - map 
// const products = [
//     {name: `Camisa`, price: 10.99, category: `Roupas`},
//     {name: `Calça`, price: 15.99, category: `Roupas`},
//     {name: `Pistão`, price: 1000.00, category: `Peças de Carro`},
//     {name: `PS5`, price: 4999.99, category: `Videogame`},
//     {name: `JBL Charge 3`, price: 395.50, category: `Caixas de Som`},
//     {name: `JBL Charge 5`, price: 695.50, category: `Caixas de Som`},
// ]

// products.map((product)=> {
//     if(product.category === `Roupas`){
//         product.onSale = true
//     }
// })

// console.log(products);

// // 5 - template literals

// const userName = `Eduardo`
// const age = 22

// console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`);

// // 6 - destructuring 

// const fruits = [`maçã`, `mamão`, `Laranja`]

// const [f1,f2,f3]= fruits

// console.log(f1,f3);

// const productDetails = {
//     name: `Mouse`,
//     price: 100,
//     category: `Periférico`,
//     color: `preto`
// }

// const {name: productName,price,category,color}= productDetails

// console.log(`O produto é ${productName}, custa R$${price}, e é da cor ${color}`);

// // 7 - spread operator (...)

// const a1 = [1,2,3]
// const a2 = [4,5,6]
// const a3 = [...a1,...a2]
// console.log(a3);

// const a4 = [0, ...a3, 7]

// console.log(a4);

// const carName = {name:`Gol`}
// const carBrand = {brand: `VW`}
// const otherInfos = {km: 192542, price: 21000}
// const car = {...carName, ...carBrand, ...otherInfos}
// console.log(car);

// 8 - classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100-discount/100))
    }
}

const shirt = new Product("Camisa Gola V", 20)

console.log(shirt)

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9 - herança (classe herdar metodos e propriedades de outra)
class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são: ");
        this.colors.forEach((color)=> {
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 30, ["Preto", "Marrom", "Cinza"])

console.log(hat);
console.log(hat.name);
hat.showColors