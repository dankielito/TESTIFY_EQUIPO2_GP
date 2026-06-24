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

//buscar el numero mas negativo de la fila Z
function checarColumnaParaElPivote(){
    let PrimeraFilaZ = matrizN[0];
    let ColumnaG = -1;
    let NMasChico = 0;
    
    for (let j = 0; j < PrimeraFilaZ.length - 1; j++) { 
        if (PrimeraFilaZ[j] < NMasChico){
            NMasChico = PrimeraFilaZ[j];
            ColumnaG = j;
        }
    }
    return ColumnaG;
}

//Buscar el pivote haciendo la division 
function checarColumnaParaElPivote(){
    let PrimeraFilaZ = matrizN[0];
    let ColumnaG = -1;
    let NMasChico = 0;
    
    for (let j = 0; j < PrimeraFilaZ.length -1; j++) { 
        if (PrimeraFilaZ[j] < NMasChico){
            NMasChico = PrimeraFilaZ[j];
            ColumnaG = j;
        }
    }
    return ColumnaG;
}
function checarFilaParaElPivote(columnaElegida) {
    let filaG = -1;
    let razonMasChica = Infinity;

    for (let i = 1; i <= RestriccionesOcupo; i++) {
        let numeroDeCelda = matrizN[i][columnaElegida];
        let valorSolucion = matrizN[i][matrizN[i].length - 1];

        if (numeroDeCelda > 0) {
            let razonActual = valorSolucion / numeroDeCelda;
            if (razonActual < razonMasChica) {
                razonMasChica = razonActual;
                filaG = i;
            }
        }
    }
    return filaG;
}

//GaussJordan
function GaussJordan (filaPivote, columnaPivote){
    let numeroPivote = matrizN[filaPivote][columnaPivote];
    let columnasTotales = matrizN[0].length;

    //Convertir pivote en 1 
    for (let j=0; j< columnasTotales; j++){
        matrizN[filaPivote][j] /= numeroPivote;
    }

    //Hacer 0 a los otros numeros de la columna
    for (let i=0; i< matrizN.length; i++){
        if (i !== filaPivote){
            let Multiplicador = matrizN[i][columnaPivote];
            for (let j=0;  j<columnasTotales; j++){
                matrizN[i][j] -= Multiplicador*matrizN[filaPivote][j];
            }
        }
    }
}
function resolverCompleto (){
    let iteracion = 0;
    while (iteracion<20){
        let colPivote =checarColumnaParaElPivote();
        if (colPivote === -1){
            console.log ("Llegamos a la solución óptima (:");
            break;
        }

        let filaPivote = checarFilaParaElPivote(colPivote);
        if (filaPivote === -1){
            console.log ("El problema no esta acotado :(");
            break;
        }
        GaussJordan(filaPivote, colPivote);
        iteracion++;
    }
}

function CalcularSimplexDesdePantalla(){
    let z1 = parseFloat(document.getElementById("inputZ1").value) || 0;
    let z2 = parseFloat(document.getElementById("inputZ2").value) || 0;

    let r1 = parseFloat(document.getElementById("res1").value) || 0;
    let r2 = parseFloat(document.getElementById("res2").value) || 0;
    let r3 = parseFloat(document.getElementById("res3").value) || 0;

    let s1 = parseFloat(document.getElementById("signo1").value);
    let s2 = parseFloat(document.getElementById("signo2").value);
    let s3 = parseFloat(document.getElementById("signo3").value);

    comenzarTablaDelSimplex(2, 3);

    matrizN[0][0] = -z1;
    matrizN[0][1] = -z2;

let colSolucion = matrizN[0].length -1;
    matrizN[1][colSolucion]= r1;
    matrizN[2][colSolucion]= r2;
    matrizN[3][colSolucion]= r3;

    matrizN[1][0]= 1; matrizN[1][1]=0;
    matrizN[2][0]= 0; matrizN[2][1]=2;
    matrizN[3][0]= 3; matrizN[3][1]=2;

    let columnaActual =2;

    //Primera restriccion
    if (s1 === "<="){
        matrizN[1][columnaActual]=1;
        columnaActual++;
    }else if (s1 === ">="){
        matrizN[1][columnaActual]=-1; columnaActual++;
        matrizN[1][columnaActual]=1; matrizN[0][columnaActual]=numeroM; columnaActual++;
    } else if (s1 === "="){
        matrizN[1][columnaActual]= 1; matrizN[0][columnaActual] = numeroM; columnaActual++;
    }

    //Segunda restriccion

     if (s2 === "<="){
        matrizN[2][columnaActual]=1;
        columnaActual++;
    }else if (s2 === ">="){
        matrizN[2][columnaActual]=-1; columnaActual++;
        matrizN[2][columnaActual]=1; matrizN[0][columnaActual]=numeroM; columnaActual++;
    } else if (s2 === "="){
        matrizN[2][columnaActual]= 1; matrizN[0][columnaActual] = numeroM; columnaActual++;
    }

    //Tercera restriccion
      if (s3 === "<="){
        matrizN[3][columnaActual]=1;
        columnaActual++;
    }else if (s3 === ">="){
        matrizN[3][columnaActual]=-1; columnaActual++;
        matrizN[3][columnaActual]=1; matrizN[0][columnaActual]=numeroM; columnaActual++;
    } else if (s3 === "="){
        matrizN[3][columnaActual]= 1; matrizN[0][columnaActual] = numeroM; columnaActual++;
    }

    for (let i= 1; i<=3; i++){
        let sActual =(i ===1) ? s1 : (i=== 2) ? s2: s3;
        if (sActual=== ">="|| sActual === "="){
            for (let j=0; j< colSolucion; j++){
                if (matrizN[0][j] === numeroM){
                    for (let k=0; k <= colSolucion; k++){
                        matrizN[0][k]-= numeroM*matrizN[i][k];
                    }
                    break;
                }
            }
        }
    }


    resolverCompleto();

    let resultadoZ = matrizN[0][colSolucion];
    if (resultadoZ<0) resultadoZ=-resultadoZ;
    resultadoZ = Math.round(resultadoZ * 100) / 100;

    document.getElementById("textoResultado").innerHTML = "✔ Optimización Completa: Z = $" + resultadoZ;
}