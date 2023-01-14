function saludar( nombre ) {
    // console.log( arguments );
    // console.log( 'Hola ' + nombre );

    return [1,2];

    // Esto nunca se va a ejecutar
    console.log( 'Soy un código que está después del return' );

}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

// Funciones de flecha disponibles en ECMA Script 6 (JavaScript del 2015)
const saludarFlecha = () => { // los paréntesis son opcionales aunque pase argumentos
    console.log( 'Hola Flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

// saludar( 'Jorge', 36, true, 'México' );
// saludar2( 'Jorge' );

// saludarFlecha();
// saludarFlecha2( 'Melissa' );

function sumar ( a, b ){
    return a + b;
}

// const sumar2 = ( a, b ) => {
//     return a + b;
// }

const sumar2 = ( a, b ) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );


