var altura = Number(prompt('Digite a altura em cm'))
var base = Number(prompt('Digite a base em cm'))
let baseQuadrado = Number(prompt('Digite a base ou altura do quadrado em cm'))

let retangulo = base * altura
console.log(`O retângulo tem ${retangulo} cm² de área.`)

let perimetro = 2 * (base + altura)
console.log(`O perimêtro do retangulo é de ${perimetro} cm.`)


let quadrado = baseQuadrado * baseQuadrado
console.log(`A área do quadrado é de ${quadrado} cm².`)

let perimetroQuadrado = baseQuadrado + baseQuadrado + baseQuadrado + baseQuadrado
console.log(`O perimêtro do quadrado é de ${perimetroQuadrado} cm.`)