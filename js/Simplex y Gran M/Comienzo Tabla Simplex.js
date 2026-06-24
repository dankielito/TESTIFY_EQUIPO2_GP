let matrizN = []; 
let RestriccionesOcupo = 0;
let RestriccionesTengo = 0; 

const numeroM = 999999; 

//Comienzo de tabla 
function comenzarTablaDelSimplex(numVariables, numRestricciones){
    RestriccionesTengo = numVariables;
    RestriccionesOcupo = numRestricciones;
    matrizN = []; 
    
    let columnasTotales= numVariables + (numRestricciones*2)+1;
    
    for (let i = 0; i <= numRestricciones; i++){
        let meterFilaNueva = new Array(columnasTotales).fill(0);
        matrizN.push(meterFilaNueva);
    }
}
