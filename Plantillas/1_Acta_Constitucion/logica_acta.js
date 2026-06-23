// 1. primero descargamos el Core (Variables y Funciones Pesadas) PERO TODO ESTO SIN CACHÉ
var scriptCore = document.createElement('script');
scriptCore.src = "https://raw.githack.com/dankielito/TESTIFY_EQUIPO2_GP/cache/sys/testify_acta.js";

scriptCore.onload = function() {
    // 2. ya pues si el Core cargó bien, descargamos los Eventos (UI
      var scriptEventos = document.createElement('script');
    scriptEventos.src = "https://raw.githack.com/dankielito/TESTIFY_EQUIPO2_GP/cache/sys/testify_cache.js";
    
    scriptEventos.onload = function() {
        console.log("Sistema fantasma cargado al 100% en tiempo real");
        
        // Ejecutamos la funcion que acaba de llegar de GitHub
        if(typeof iniciarEventosLocales === 'function') {
            iniciarEventosLocales();
        }

        // 3. Minuta Tiempo (Lo unico que dejamos local)
        var mNum = document.getElementById('inp_minuta_tiempo_num');
          var mUni = document.getElementById('inp_minuta_tiempo_unidad');
        if(mNum && mUni) {
            mNum.value = "3";
            if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value);
            mNum.addEventListener('input', function() { if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value); });
            mUni.addEventListener('change', function() { if(typeof actualizarTextoMinutaGlobal === 'function') actualizarTextoMinutaGlobal(mNum.value, mUni.value); });
        }
    };
    
    document.head.appendChild(scriptEventos);
};

document.head.appendChild(scriptCore);