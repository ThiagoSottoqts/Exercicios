let n1 = Number(prompt('Digite um número'))
let n2 = Number(prompt('Digite um número'))

let c = (n1 + n2)

console.log(c)
document.write(`A soma de ${n1} + ${n2}. É igual a ${c}.`,("<br>"))

//subtração
let f = n1 - n2

console.log(f)
document.write(`A subrtração de ${n1} - ${n2}. É igual a ${f}.`,("<br>"))


//multiplicação
let i = n1 * n2

console.log(i)
document.write(`A multiplicação de ${n1} * ${n2}. É igual a ${i}.`,("<br>"))

//divisão
let j = n1 / n2

console.log(j)
document.write(`A divisão de ${n1} * ${n2}. É igual a ${j}.`,("<br>"))

//resultado

let resultado = c - f - i - j
console.log(resultado)
document.write(`A diferença entre o resultado de ${c} - ${f} - ${i} - ${j}. É igual a ${resultado}.`,("<br>"))
