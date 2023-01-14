/**
 * Dias de la semana abrimos a las 11
 * Los fines de semana abrimos a las 9
 */

// Entra al sitio web para consultar si está abierto hoy...

const dia = 1; // 0: Domingo, 1: Lunes, 2: Martes ...
const horaActual = 8;

let horaApertura;
let mensaje; // Está abierto, está cerrado, abrimos a las X:XX

// if ( dia === 0 || dia === 6) {
// if ( [0,6].includes( dia ) ) {
//     console.log( 'Fin de semana' );
//     horaApertura = 9;
// } else {
//     console.log( 'Día de semana' );
//     horaApertura = 11;
// }
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });