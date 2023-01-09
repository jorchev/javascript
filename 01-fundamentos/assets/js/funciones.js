function saludar( nombre ) {
    console.log( arguments );
    console.log( 'Hola ' + nombre );
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

saludar( 'Jorge', 36, true, 'México' );
// saludar2( 'Jorge' );

saludarFlecha();
saludarFlecha2( 'Melissa' );


