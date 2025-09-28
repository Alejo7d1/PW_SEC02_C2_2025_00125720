//Adivinar número
let numero = prompt("¿Qué número estoy pensando?")
switch (numero){
    case "5":
        alert("Número Correcto");
        break;
    case "4":
    case "6":
        alert("Casi aciertas");
        break;
    default:
        alert("Frío, frío");
}

//bucle de consulta edad
let edad = prompt("¿Cuantosd años tienes?", 0)
while (edad <= 18){
    alert("Eres demasiado joven lo siento");
    edad = prompt("¿Cuantos años tienes?", 0)
};

//Bucles for
for (let i=0; i<10; i += 1){
    console.log(i);
};

for (let i=10; i>0; i -= 1){
    console.log(i);
};

for (let i=10, j = 0; i > j ; i -= 1){
    console.log(i,j);
};

