var scriptCore = document.createElement('script');
scriptCore.src = "https://cdn.jsdelivr.net/gh/dankielito/TESTIFY_EQUIPO2_GP@cache/sys/testify_acta.js";

// Esperamos a que el archivo remoto cargue correctamente
scriptCore.onload = function() {
    console.log("Nucleo logico cargado exitosamente desde cache.");
    iniciarEventosLocales();
};
document.head.appendChild(scriptCore);

// 2. Controladores de Interfaz Locales
function iniciarEventosLocales() { 
    // Navegacion basica de tabs
    document.querySelectorAll('.tab-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-link, .tab-contenido').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            var panelId = e.target.getAttribute('data-tab');
            if(document.getElementById(panelId)) {
                document.getElementById(panelId).classList.add('active');
            }
        });
    });

    // Dibujado inicial
    if(typeof dibujarListasHtml === 'function') {
        dibujarListasHtml(listaDeAcuerdos, "contenedor-interactivo-acuerdos", false); 
        dibujarListasHtml(listaDeHitos, "contenedor-interactivo-hitos", true); 
        repartirListasEnHojas(); 
    }

    // Bindings de Textos
    var bindingsTextos = [
        { inp: 'inp_texto_enunciado', out: 'out_texto_enunciado' },
        { inp: 'inp_texto_caso', out: 'out_texto_caso' },
        { inp: 'inp_ambito', out: 'out_ambito' },
        { inp: 'inp_cliente', out: 'out_cliente' },
        { inp: 'inp_gerente', out: 'out_gerente_tabla' },
        { inp: 'inp_minuta_actividad', out: 'out_minuta_actividad' },
        { inp: 'inp_minuta_acuerdo', out: 'out_minuta_acuerdo' },
        { inp: 'inp_head_plantilla_titulo', out: 'out_head_plantilla_titulo' },
        { inp: 'inp_id_acta', out: 'out_id_acta' },
        { inp: 'inp_head_minuta_titulo', out: 'out_head_minuta_titulo' },
        { inp: 'inp_id_minuta', out: 'out_id_minuta2' },
        { inp: 'inp_patrocinador', out: 'out_patrocinador' }
    ];

    bindingsTextos.forEach(item => {
        var inputEl = document.getElementById(item.inp);
        if(inputEl) {
            inputEl.addEventListener('keyup', function(e) {
                var outEl = document.getElementById(item.out);
                if(outEl) outEl.innerHTML = e.target.value;
                if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton();
            });
        }
    });

    // Bindings Presupuestos (con formateo)
    var inpTotal = document.getElementById('inp_presup_total');
    if(inpTotal) {
        inpTotal.addEventListener('change', function(e) { 
            var f = ponerFormatoDinero(e.target.value); 
            if(document.getElementById('out_presup_total')) document.getElementById('out_presup_total').innerHTML = f; 
            if(document.getElementById('out_presup_total_p6')) document.getElementById('out_presup_total_p6').innerHTML = f; 
            if(document.getElementById('out_presup_total_minuta2')) document.getElementById('out_presup_total_minuta2').innerHTML = f; 
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton(); 
        }); 
    }

    var inpEtapa = document.getElementById('inp_presup_etapa');
    if(inpEtapa) {
        inpEtapa.addEventListener('change', function(e) {
            var f = ponerFormatoDinero(e.target.value);
            if(document.getElementById('out_presup_etapa')) document.getElementById('out_presup_etapa').innerHTML = f;
            if(document.getElementById('out_presup_etapa_minuta2')) document.getElementById('out_presup_etapa_minuta2').innerHTML = f;
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton();
        });
    }

    var inpDesa = document.getElementById('inp_presup_desarrollo');
    if(inpDesa) {
        inpDesa.addEventListener('change', function(e) { 
            var f = ponerFormatoDinero(e.target.value); 
            if(document.getElementById('out_presup_desarrollo1')) document.getElementById('out_presup_desarrollo1').innerHTML = f; 
            if(document.getElementById('out_presup_desarrollo2')) document.getElementById('out_presup_desarrollo2').innerHTML = f; 
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton(); 
        }); 
    }

    // Tiempos (Meses)
    var inpMeses = document.getElementById('inp_tiempo_meses');
    if(inpMeses) {
        inpMeses.addEventListener('change', function(e) {
            if(document.getElementById('out_tiempo_meses1')) document.getElementById('out_tiempo_meses1').innerHTML = e.target.value;
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton(); 
        });
    }

    // Fechas
    var inpFechaActa = document.getElementById('inp_fecha_acta_real');
    if(inpFechaActa) {
        inpFechaActa.addEventListener('change', function(e) { 
            var f = ponerFormatoFecha(e.target.value);
            if(document.getElementById('out_fecha_acta')) document.getElementById('out_fecha_acta').innerHTML = f; 
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton(); 
        }); 
    }

    var inpFechaMin = document.getElementById('inp_fecha_minuta_real');
    if(inpFechaMin) {
        inpFechaMin.addEventListener('change', function(e) { 
            var f = ponerFormatoFecha(e.target.value);
            if(document.getElementById('out_fecha_minuta2')) document.getElementById('out_fecha_minuta2').innerHTML = f; 
            if(typeof revisarReglasDelBoton === 'function') revisarReglasDelBoton(); 
        }); 
    }

    // Minuta Tiempo
    var mNum = document.getElementById('inp_minuta_tiempo_num');
    var mUni = document.getElementById('inp_minuta_tiempo_unidad');
    if(mNum && mUni) {
        mNum.value = "3";
        if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value);
        mNum.addEventListener('input', function() { if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value); });
        mUni.addEventListener('change', function() { if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value); });
    }
}