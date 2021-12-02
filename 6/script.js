function calculate() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    console.log(height)
    console.log(weight)
    var imc = weight / height ** 2;
    console.log(imc)
    
    if(imc < 16) {
        resultado='Você está com magreza grave'        
    } else if (imc < 17) {
        resultado='Você está com magreza moderada'
    } else if (imc < 18.5) {
        resultado='Você está com magreza leve'
    } else if (imc < 25) {
        resultado='Você está com peso normal'
    } else if (imc < 30) {
        resultado='Você está com sobrepeso'
    } else if (imc < 35) {
        resultado='Você está com obesidade nível I'
    } else if (imc < 40) {
        resultado='Você está com obesidade nível II (severa)'
    } else if (imc > 40) {
        resultado='Você está com obesidade nível III (mórbida)'
    } 
    document.getElementById("area_informacao").innerText=resultado
}
