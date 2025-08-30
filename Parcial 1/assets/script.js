//Cambiar a filas
function alterCards(){
    const container = document.getElementById("mainContainer");
    container.style.display = "inline";
}

//Cambiar titulo
function alterTitle(){
    document.getElementById("headTitle").innerHTML = "HTML & CSS: Curso práctico avanzado";
}

//Cambiar color de textos en main
function alterColor(){
    const container = document.getElementById("mainContainer");
    container.style.color = "red"
}

//Agrega imagen externa
function addImage() {
  const container = document.getElementById("importedImage");

  //usa un formulario para solicitar imagen
  const src = prompt("Introduce la URL de la imagen o la ruta local:");

  //En caso de no recibir imagen
  if (!src) return;

  const img = document.createElement("img");
  img.src = src;
  img.style.margin = "12px";
  img.style.maxWidth = "24vw"; 

  container.appendChild(img);
}
