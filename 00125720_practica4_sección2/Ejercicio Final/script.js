//Ejercicio Final
function actividadDiaria(){
    dia = prompt("¿Qué día es?")
    var alt = document.getElementById("day");
    alt.innerHTML = dia;
    switch (dia){
        case "Lunes":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Debo atender un cliente especifico";
            break;
        case "Martes":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Visito una agencia fuera de la ciudad";
            break;
        case "Miercoles":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Debo llevar a mi hija al ballet (balé)";
            break;
        case "Jueves":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Debo priorizar entregas de desarrollo";
            break;
        case "Viernes":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Debo atender problemas de manera remota";
            break;
        case "Sábado":
            var alt = document.getElementById("activity");
            alt.innerHTML = "Debo hacer lo que mi esposa quiera.";
            break;
        default:
            var alt = document.getElementById("activity");
            alt.innerHTML = "No hay actividad este día";
            break;
    }
}

actividadDiaria()

