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

const text = `algum texto`

console.log(text.toUpperCase());

console.log(typeof text.toLocaleUpperCase);

console.log(text.indexOf(`g`));

// 5 - Objetos
const person = {
    name: `Eduardo`,
    age: 22,
    job: `Dev`
}

console.log(person.age);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e deletando propriedades 

const car = {
    engine: 1.0,
    brand: `Vw`,
    model: `Up!`,
    km: 60.000,
}

console.log(car);

car.doors=4
