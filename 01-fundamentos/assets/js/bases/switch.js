
const dia = 1; // 0: Domingo, 1: Lunes ...

switch( dia ){ // Aplica una evaluación con === compara valor y tipo de dato
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('No es lunes, martes o domingo');
}