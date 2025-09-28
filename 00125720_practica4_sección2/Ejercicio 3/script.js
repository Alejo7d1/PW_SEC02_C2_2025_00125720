//función de ordenamiento
function ordenar(arr){
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++){
        for(let j = 0; j < nuevoArray.length - i - 1; j++){
            if(nuevoArray[j] > nuevoArray[j + 1]){
                let temportal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j+1];
                nuevoArray[j + 1] = temportal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenar([14, 23, 99, 874, 93, 12]));

//Función de numero par
function esPar(numero){
    return numero % 2 === 0;
}
console.log(esPar(7));

//Calcular día de crecimiento de una planta
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada){
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada){
        altura += velocidadCrecimiento;
        dias++;
        if(altura >= alturaDeseada){ return dias }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}

//Comprobar función
console.log(`${calcularDiasCrecimiento(2,1,12)} días`)

