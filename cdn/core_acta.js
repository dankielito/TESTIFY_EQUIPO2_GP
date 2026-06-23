// Archivo en GitHub: core_acta.js (El 80% oculto)

var listaDeAcuerdos = [ 
    { id: 1, cant: 1, texto: "perfil del proyecto", activo: true }, 
    /* ... pega aquí toda tu lista de 75 acuerdos ... */
]; 

var listaDeHitos = [ 
    { id: 1, cant: null, texto: "Tema", activo: true }, 
    /* ... pega aquí toda tu lista de hitos ... */
]; 

function ponerFormatoDinero(cantidad) { 
    var num = parseFloat(cantidad); 
    if (isNaN(num)) num = 0; 
    return num.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); 
} 

function ponerFormatoFecha(fechaMala) { 
    if (fechaMala == "") return ""; 
    var arr = fechaMala.split('-'); 
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]; 
    return parseInt(arr[2]) + " de " + meses[parseInt(arr[1]) - 1] + " del " + arr[0]; 
} 

function mandarGuardarMemoria() { 
    var obj = {}; 
    var inputs = document.getElementById('form-acta-constitucion').getElementsByTagName('input'); 
    for(var i=0; i<inputs.length; i++) { if(inputs[i].id != "") obj[inputs[i].id] = inputs[i].value; } 
    var textareas = document.getElementById('form-acta-constitucion').getElementsByTagName('textarea'); 
    for(var x=0; x<textareas.length; x++) { if(textareas[x].id != "") obj[textareas[x].id] = textareas[x].value; } 
    
    obj['acuerdos'] = listaDeAcuerdos; 
    obj['hitos'] = listaDeHitos; 

    fetch('Plantillas/registroFinal.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ modulo: 'ActaConstitucion', datos: obj }) 
    }).catch(function(e) { console.log("Error de conexion al guardar", e); }); 
} 

function revisarReglasDelBoton() { 
    var preEtapa = parseFloat(document.getElementById('inp_presup_etapa').value); 
    var preTotal = parseFloat(document.getElementById('inp_presup_total').value); 
    var preDesa = parseFloat(document.getElementById('inp_presup_desarrollo').value); 
    var losMeses = parseInt(document.getElementById('inp_tiempo_meses').value); 

    var caja = document.getElementById('alerta-negocio'); 
    var txt = document.getElementById('texto-alerta'); 
    var err = []; 

    if (preEtapa > preTotal) err.push("El presupuesto de Etapa 1 es muy alto."); 
    if (preDesa > preTotal) err.push("Operativo se pasa del total."); 
    if (losMeses > 36) err.push("No pueden ser mas de 36 meses."); 

    if (err.length > 0) { 
        caja.style.display = 'block'; 
        txt.innerHTML = err.join("<br>"); 
    } else { 
        caja.style.display = 'none'; 
    } 
    mandarGuardarMemoria(); 
} 

function dibujarListasHtml(elArreglo, idDelDiv, esHito) { 
    var c = document.getElementById(idDelDiv); 
    if(c == null) return; 
    c.innerHTML = ""; 

    for (var i = 0; i < elArreglo.length; i++) { 
        (function(item) { 
            var fila = document.createElement('div'); fila.className = "fila-lista-interactiva"; 
            var chk = document.createElement('input'); chk.type = "checkbox"; chk.checked = item.activo; 
            chk.addEventListener('change', function(e) { item.activo = e.target.checked; repartirListasEnHojas(); }); 
            fila.appendChild(chk); 

            if(esHito == false && item.cant != null) { 
                var num = document.createElement('input'); num.type = "number"; num.min = "1"; num.max = "100"; num.value = item.cant; 
                num.addEventListener('input', function(e) { 
                    var v = parseInt(e.target.value); 
                    item.cant = isNaN(v) ? 1 : (v > 100 ? 100 : v); 
                    repartirListasEnHojas(); 
                }); 
                fila.appendChild(num); 
            } 

            var sp = document.createElement('span'); sp.className = "label-editable"; sp.innerHTML = item.texto; 
            sp.addEventListener('dblclick', function() { 
                var inp = document.createElement('input'); inp.type = "text"; inp.className = "input-inline-edit"; inp.value = item.texto; 
                inp.addEventListener('blur', function() { 
                    item.texto = inp.value == "" ? "Sin texto" : inp.value; 
                    sp.innerHTML = item.texto; 
                    fila.replaceChild(sp, inp); 
                    repartirListasEnHojas(); 
                }); 
                fila.replaceChild(inp, sp); inp.focus(); 
            }); 
            fila.appendChild(sp); c.appendChild(fila); 
        })(elArreglo[i]); 
    } 
} 

function imprimirListaUl(arr, id) { 
    var d = document.getElementById(id); 
    if(d != null) { 
        d.innerHTML = ""; 
        for(var b=0; b<arr.length; b++) { 
            var li = document.createElement('li'); 
            li.innerHTML = arr[b].cant != null ? arr[b].cant + " " + arr[b].texto : arr[b].texto; 
            d.appendChild(li); 
        } 
    } 
} 

function repartirListasEnHojas() { 
    var tA = []; for(var z=0; z<listaDeAcuerdos.length; z++) { if(listaDeAcuerdos[z].activo) tA.push(listaDeAcuerdos[z]); } 
    imprimirListaUl(tA.slice(0, 8), 'out_acuerdos_p55'); 
    imprimirListaUl(tA.slice(8, 50), 'out_acuerdos_p56'); 
    imprimirListaUl(tA.slice(50, 100), 'out_acuerdos_p57'); 

    var tH = []; for(var y=0; y<listaDeHitos.length; y++) { if(listaDeHitos[y].activo) tH.push(listaDeHitos[y]); } 
    imprimirListaUl(tH.slice(0, 21), 'out_hitos_p58'); 
    imprimirListaUl(tH.slice(21, 63), 'out_hitos_p59'); 
    imprimirListaUl(tH.slice(63, 100), 'out_hitos_p60'); 
    mandarGuardarMemoria(); 
}

function actualizarTextoMinutaGlobal(n, u) { 
    if(n == "") n = "0"; 
    var out = document.getElementById('out_minuta_tiempo'); 
    if(out) out.innerHTML = n + " " + u; 
    mandarGuardarMemoria(); 
}
