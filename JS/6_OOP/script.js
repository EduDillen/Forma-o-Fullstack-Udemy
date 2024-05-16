// // 1 - métodos 
// const animal = {
//     nome: `bob`,
//     latir: function(){
//         console.log(`au au`);
//     }

// }
// console.log(animal.nome);
// animal.latir() //executar função dentro do objeto = método

// //  2 - Aprofundando em métodos 

// const pessoa = {
//     nome: `Eduardo`,

//     getNome: function(){
//         return this.nome
//     },


//     setNome: function(novoNome){
//         this.nome = novoNome
//     }
// }


// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome(`Yasmin`)
// console.log(pessoa.getNome());

// // 3 - Prototype 

// const text = "asd"
// console.log(Object.getPrototypeOf(text));

// const bool = true
// console.log(Object.getPrototypeOf(bool));


// // 4 - mais sobre prototype 

// const myObject = {
//     a: `b`,
// }
// console.log(Object.getPrototypeOf(myObject));
// console.log(Object.getPrototypeOf(myObject)=== Object.prototype);

// const mySecontObject = Object.create(myObject)
// console.log(mySecontObject);
// console.log(mySecontObject.a);
// console.log(Object.getPrototypeOf(mySecontObject)===myObject);

// 5 - Classes básicas 
// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro)
// pastorAlemao.raca = `Pastor Alemão`
// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro)
// bulldog.raca = `Bulldog`
// console.log(bulldog);

// // 6 - Função como classe  (construtora)

// function criarcachorro(nome, raca){
//     const cachorro = Object.create({})

//     cachorro.nome = nome 
//     cachorro.raca = raca 

//     return cachorro 
// }

// const bob = criarcachorro(`Bob`, `Vira lata`)

// console.log(bob);

// const jack = criarcachorro(`Jack`, `Poodle`)
// console.log(jack);
// console.log(Object.getPrototypeOf(jack));

// // 7 - Funções como classe 

// function Cachorro(nome, raca){
//     this.nome = nome 
//     this.raca = raca 
// }

// const husky = new Cachorro(`Ozzy`, `Husky`)
// console.log(husky);

// // 8 - métodos na função construtora (essencia do JavaScript)

// Cachorro.prototype.uivar = function(){
//     console.log(`auuuuuuuu`);
// }

// husky.uivar()

// console.log(Cachorro.prototype);

// // 9 - Classes ES6

// class CachorroClasse {
//     constructor(nome, raca){
//         this.nome = nome 
//         this.raca = raca
//     }
// }
// const jeff = new CachorroClasse(`Jeff`, `labrador`)
// console.log(jeff);
// console.log(Object.getPrototypeOf(jeff));

// // 10 - Mais sobre classes 

// class Caminhao {
//     constructor(eixos, cor){
//         this.eixos=eixos
//         this.cor=cor
//     }

//     descreverCaminhao(){
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, `azul`)
// console.log(scania);

// scania.descreverCaminhao()

// Caminhao.motor = 4 //undefined

// const c2 = new Caminhao(4, `preto`)

// console.log(c2);
// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0 //Precisa ser via prototype para adicionar

// const c3 = new Caminhao(8, `branco`)

// console.log(c3.motor);

// // 11 - override

// class Humano {
//     constructor(nome, idade){
//         this.nome = nome 
//         this.idade = idade
//     }
// }

// const eduardo = new Humano (`Eduardo`, 31)
// console.log(eduardo);

// Humano.prototype.idade = `Não definida`
// console.log(eduardo.idade)
// console.log(Humano.prototype.idade);


// 12 - symbol 
// class Aviao {
//     constructor(marca, turbinas){
//         this.marca=marca
//         this.turbinas=turbinas
//     }
// }

// const asas = Symbol()
// const pilotos = Symbol()
// Aviao.prototype[asas] = 2
// Aviao.prototype[pilotos] = 4 
// const boeing = new Aviao(`Boeing`, 2)
// console.log(boeing);

// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

// 13 - getter e setter 

// class Post{
//     constructor(titulo, descricao, tags){
//         this.titulo=titulo
//         this.descricao=descricao
//         this.tags=tags
//     }

//     get exibirTitulo(){
//         return `Você está lendo ${this.titulo}`
//     }

//     set adicionarTags(tags){
//         const tagsArray = tags.split(`, `)
//         this.tags=tagsArray
//     }
// }
// const myPost = new Post(`Algum post`, `é um post sobre programação`)

// console.log(myPost);
// console.log(myPost.exibirTitulo);
// myPost.adicionarTags = `programação, js, php`
// console.log(myPost);

// 14 - herança 

class Mamifero{
    constructor(patas){
        this.patas=patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas)
        this.nome=nome
    }
}

const shark = new Lobo(4, `Shark`)
console.log(shark);
console.log(shark.patas);
console.log(shark.nome);
console.log(Lobo.name);
console.log(Mamifero.name);

// 15 - instanceof (verifica se um objeto é pai de outro)
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4,`teste`)instanceof Mamifero); //Objeto para classe 
