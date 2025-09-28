console.assert("Legolas" > "Gimli");

//Limpiar consola
console.clear();

//Lista de forma interactva las propiedades de un objeto
console.dir(window);

//Muestra una representacion HTML del objeto
console.dirxml(document.body);

const marvel = ['Spider Man', 'iron Man', 'Capitan America', 'Lobezno xD'];
//Permite agrupar diferentes valores
console.group('Superhéroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

