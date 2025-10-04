const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

const nombre = 'Fran Quesada';
const escuela = 'Fictizia';

const profesor = { nombre , escuela}

const string = 'mi string';

// No lo puede hacer
//string = 'otra cosa diferente';

//Mutación de objetos
const objeto = {
    propiedad1: 'esta es mi propiedad original'
}

objeto.propiedad2 = 'esta es una propiedad nueva';
objeto.propiedad1 = 'Esta propiedad la modifico';

//No se puede hacer
/*const peligro = {
    propiedad1: 'Esta es mi propiedad original'
}
peligro = {
    prohibido: 'Esto no lo puedo hacer'
}
    */

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iroman']
}
const heroesDc = heroes.dc;

const dc = {
    heroes: {
        batman:{
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
}
const { heroes: { batman} } = dc;

const objeto2 = {
    nombre: 'Fran Quesada',
    edad: 26,
}

//Devuelve el mismo objeto
const objetoCongelado = Object.freeze(objeto2)
objetoCongelado.localidad = 'madrid';

// Pero si podemos crear nuevas copias a partir del objeto congelado
const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
}