var listaDeAcuerdos = [
    { id: 1, cant: 1, texto: "perfil del proyecto", activo: true },
    { id: 2, cant: 1, texto: "título del proyecto", activo: true },
    { id: 3, cant: 1, texto: "objetivo general", activo: true },
    { id: 4, cant: 1, texto: "sector económico", activo: true },
    { id: 5, cant: 1, texto: "giro empresarial", activo: true },
    { id: 6, cant: 1, texto: "reporte de contribución al PIB", activo: true },
    { id: 7, cant: 1, texto: "perfil del cliente", activo: true },
    { id: 8, cant: 1, texto: "análisis de mercado TI", activo: true },
    { id: 9, cant: 1, texto: "estudio de facitbilidad", activo: true },
    { id: 10, cant: 1, texto: "tabla de proyecciones financieras", activo: true },
    { id: 11, cant: 1, texto: "tabla del análisis comparativo de la competencia", activo: true },
    { id: 12, cant: 1, texto: "tabla del plan operativo", activo: true },
    { id: 13, cant: 1, texto: "tabla del plan general de trabajo", activo: true },
    { id: 14, cant: 3, texto: "diagramas de entrada, proceso y salida", activo: true },
    { id: 15, cant: 3, texto: "listas de los recursos de entrada, proceso y salida", activo: true },
    { id: 16, cant: 4, texto: "tablas de los recursos enlistados de entrada, proceso y salida", activo: true },
    { id: 17, cant: 1, texto: "diagrama CPM", activo: true },
    { id: 18, cant: 1, texto: "acta de constitución firmada", activo: true },
    { id: 19, cant: 1, texto: "matriz de intersados", activo: true },
    { id: 20, cant: 1, texto: "documento de alcance del software", activo: true },
    { id: 21, cant: 1, texto: "diagrama EDT/WBS", activo: true },
    { id: 22, cant: 1, texto: "plan de dirección integral", activo: true },
    { id: 23, cant: 1, texto: "set de plantillas para usuarios", activo: true },
    { id: 24, cant: 1, texto: "software único de pruebas (Testify)", activo: true },
    { id: 25, cant: 1, texto: "módulo de IA para conclusiones", activo: true },
    { id: 26, cant: 5, texto: "reportes de avance metodológico", activo: true },
    { id: 27, cant: 1, texto: "proyecto de inversión técnica", activo: true },
    { id: 28, cant: 1, texto: "prototipo funcional validado", activo: true },
    { id: 29, cant: 1, texto: "plano operativo técnico", activo: true },
    { id: 30, cant: 1, texto: "servidor PostgreSQl configurado", activo: true },
    { id: 31, cant: 1, texto: "interfaz de usuario programada", activo: true },
    { id: 32, cant: 3, texto: "módulos de seguridad configurados", activo: true },
    { id: 33, cant: 1, texto: "diseño estructural completo", activo: true },
    { id: 34, cant: 1, texto: "manual de estándares de proceso", activo: true },
    { id: 35, cant: 1, texto: "reporte de integridad de datos", activo: true },
    { id: 36, cant: 1, texto: "set de módulos desarrollados", activo: true },
    { id: 37, cant: 1, texto: "reporte de validación de IA", activo: true },
    { id: 38, cant: 5, texto: "protocolos de mantenimiento", activo: true },
    { id: 39, cant: 1, texto: "documento de errores (QA)", activo: true },
    { id: 40, cant: 15, texto: "reportes de pruebas unitarias", activo: true },
    { id: 41, cant: 11, texto: "reportes de actualización", activo: true },
    { id: 42, cant: 2, texto: "convenios de asociación", activo: true },
    { id: 43, cant: 1, texto: "presupuesto de innovación", activo: true },
    { id: 44, cant: 1, texto: "reporte de retorno de inversión", activo: true },
    { id: 45, cant: 1, texto: "plan de adquisición de activos", activo: true },
    { id: 46, cant: 1, texto: "tarifario oficial de Testify", activo: true },
    { id: 47, cant: 4, texto: "reportes presupuestales", activo: true },
    { id: 48, cant: 1, texto: "bitácora de administración", activo: true },
    { id: 49, cant: 11, texto: "comprobantes de dispersión", activo: true },
    { id: 50, cant: 11, texto: "balances generales", activo: true },
    { id: 51, cant: 5, texto: "contratos laborales firmados", activo: true },
    { id: 52, cant: 1, texto: "programa de capacitación integral", activo: true },
    { id: 53, cant: 1, texto: "sistema de evaluación", activo: true },
    { id: 54, cant: 5, texto: "perfiles de puesto validados", activo: true },
    { id: 55, cant: 3, texto: "módulos formativos diseñados", activo: true },
    { id: 56, cant: 1, texto: "manual de indicadores (KPIs)", activo: true },
    { id: 57, cant: 15, texto: "reportes de entrevista", activo: true },
    { id: 58, cant: 5, texto: "bitácoras de inducción", activo: true },
    { id: 59, cant: 11, texto: "reportes de evaluación mensual", activo: true },
    { id: 60, cant: 6, texto: "contratos de licencia firmados", activo: true },
    { id: 61, cant: 1, texto: "reporte de posicionamiento", activo: true },
    { id: 62, cant: 1, texto: "plan de post venta detallado", activo: true },
    { id: 63, cant: 1, texto: "cartera de 20 prospectos", activo: true },
    { id: 64, cant: 1, texto: "presentación ejecutiva (Pitch Deck)", activo: true },
    { id: 65, cant: 1, texto: "manual de niveles de servicio", activo: true },
    { id: 66, cant: 6, texto: "expedientes de contrato cerrados", activo: true },
    { id: 67, cant: 10, texto: "bitácoras de demostración", activo: true },
    { id: 68, cant: 6, texto: "reportes de satisfaction", activo: true },
    { id: 69, cant: 1, texto: "tabla de checklist de verificación", activo: true },
    { id: 70, cant: 1, texto: "bitácora de control de cambios", activo: true },
    { id: 71, cant: 1, texto: "reporte de seguimiento de hitos", activo: true },
    { id: 72, cant: 1, texto: "matriz de resultados finales", activo: true },
    { id: 73, cant: 1, texto: "reporte de costos reales vs planeados", activo: true },
    { id: 74, cant: 1, texto: "análisis de valor ganado", activo: true },
    { id: 75, cant: 1, texto: "acta de cierre del proyecto firmada", activo: true }
];

var listaDeHitos = [
    { id: 1, cant: null, texto: "Tema", activo: true },
    { id: 2, cant: null, texto: "Título", activo: true },
    { id: 3, cant: null, texto: "Objetivo", activo: true },
    { id: 4, cant: null, texto: "Sector", activo: true },
    { id: 5, cant: null, texto: "Giro", activo: true },
    { id: 6, cant: null, texto: "PIB", activo: true },
    { id: 7, cant: null, texto: "Cliente", activo: true },
    { id: 8, cant: null, texto: "Mercado", activo: true },
    { id: 9, cant: null, texto: "Aceptación del mercado", activo: true },
    { id: 10, cant: null, texto: "Proyección de ventas", activo: true },
    { id: 11, cant: null, texto: "Benchmarking", activo: true },
    { id: 12, cant: null, texto: "Plan operativo", activo: true },
    { id: 13, cant: null, texto: "Plan general de trabajo", activo: true },
    { id: 14, cant: null, texto: "Plan de comercialización", activo: true },
    { id: 15, cant: null, texto: "Cronograma de Actividades", activo: true },
    { id: 16, cant: null, texto: "Red CPM", activo: true },
    { id: 17, cant: null, texto: "Acta de constitución del proyecto", activo: true },
    { id: 18, cant: null, texto: "Gestión de interesados", activo: true },
    { id: 19, cant: null, texto: "Gestión del alcance", activo: true },
    { id: 20, cant: null, texto: "EDT", activo: true },
    { id: 21, cant: null, texto: "Gestión de dirección del proyecto", activo: true },
    { id: 22, cant: null, texto: "Plantillas de requisitos", activo: true },
    { id: 23, cant: null, texto: "Diseñar y desarrollar un software único", activo: true },
    { id: 24, cant: null, texto: "Gestionar una innovación de IA", activo: true },
    { id: 25, cant: null, texto: "Gestionar una innovación técnica de IA", activo: true },
    { id: 26, cant: null, texto: "Gestionar el proyecto integral", activo: true },
    { id: 27, cant: null, texto: "Realizar el proyecto de inversión técnica", activo: true },
    { id: 28, cant: null, texto: "Desarrollar el prototipo funcional", activo: true },
    { id: 29, cant: null, texto: "Realizar el plan operativo técnico", activo: true },
    { id: 30, cant: null, texto: "Instalar la infraestructura de red", activo: true },
    { id: 31, cant: null, texto: "Programar la interfaz de usuario", activo: true },
    { id: 32, cant: null, texto: "Configurar los módulos de seguridad", activo: true },
    { id: 33, cant: null, texto: "Diseñar la estructura funcional y técnica del software", activo: true },
    { id: 34, cant: null, texto: "Gestionar la estandarización de procesos de reportes", activo: true },
    { id: 35, cant: null, texto: "Supervisar la integridad de la base de datos y flujo", activo: true },
    { id: 36, cant: null, texto: "Desarrollar los módulos de software", activo: true },
    { id: 37, cant: null, texto: "Validar los algoritmos de IA para el mapeo de datos", activo: true },
    { id: 38, cant: null, texto: "Estructurar los protocolos de mantenimiento y actualización", activo: true },
    { id: 39, cant: null, texto: "Documentar las pruebas de errores y rendimiento", activo: true },
    { id: 40, cant: null, texto: "Ejecutar las pruebas unitarias de los módulos", activo: true },
    { id: 41, cant: null, texto: "Realizar las actualizaciones de seguridad en la BD", activo: true },
    { id: 42, cant: null, texto: "Obtener afiliaciones con socios capitalistas", activo: true },
    { id: 43, cant: null, texto: "Gestionar el presupuesto de innovación", activo: true },
    { id: 44, cant: null, texto: "Realizar la proyección de recuperación financiera", activo: true },
    { id: 45, cant: null, texto: "Determinar el capital para activos y equipo", activo: true },
    { id: 46, cant: null, texto: "Definir el tarifario de licencias anuales", activo: true },
    { id: 47, cant: null, texto: "Obtener el presupuesto trimestral de nómina", activo: true },
    { id: 48, cant: null, texto: "Administrar el fondo de infraestructura física", activo: true },
    { id: 49, cant: null, texto: "Ejecutar el pago mensual de salarios", activo: true },
    { id: 50, cant: null, texto: "Realizar el balance de caja mensual", activo: true },
    { id: 51, cant: null, texto: "Contratar personal especializado", activo: true },
    { id: 52, cant: null, texto: "Capacitar al personal en metodologías y BD", activo: true },
    { id: 53, cant: null, texto: "Establecer el sistema de evaluación del desempeño", activo: true },
    { id: 54, cant: null, texto: "Definir los perfiles de puesto y competencias técnicas", activo: true },
    { id: 55, cant: null, texto: "Diseñar los talleres formativos de la arquitectura", activo: true },
    { id: 56, cant: null, texto: "Estructurar los KPIs de productividad del equipo", activo: true },
    { id: 57, cant: null, texto: "Realizar las entrevistas y pruebas técnicas", activo: true },
    { id: 58, cant: null, texto: "Ejecutar la inducción técnica al nuevo personal", activo: true },
    { id: 59, cant: null, texto: "Aplicar las encuestas de desempeño mensuales", activo: true },
    { id: 60, cant: null, texto: "Vender el licenciamiento anual a las empresas de TI", activo: true },
    { id: 61, cant: null, texto: "Posicionar a Testify en el mercado de la CDMX", activo: true },
    { id: 62, cant: null, texto: "Diseñar el plan de post venta y mantenimiento", activo: true },
    { id: 63, cant: null, texto: "Realizar la prospección de cliente", activo: true },
    { id: 64, cant: null, texto: "Desarrollar el pitch deck comercial de Testify", activo: true },
    { id: 65, cant: null, texto: "Definir los niveles de soporte y acuerdos", activo: true },
    { id: 66, cant: null, texto: "Cerrar los contratos legales con los clientes", activo: true },
    { id: 67, cant: null, texto: "Ejecutar las demos técnicas para jefes de área gestionar encuestas de satisfacción y eficiencia", activo: true },
    { id: 68, cant: null, texto: "Cheecklist de verificación", activo: true },
    { id: 70, cant: null, texto: "Control de cambios", activo: true },
    { id: 71, cant: null, texto: "Control de seguimiento", activo: true },
    { id: 72, cant: null, texto: "Plantilla de resultados", activo: true },
    { id: 73, cant: null, texto: "Plantilla de costos", activo: true },
    { id: 74, cant: null, texto: "Plantilla de valor ganado", activo: true },
    { id: 75, cant: null, texto: "Plantilla de acta de cierre", activo: true }
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
    var form = document.getElementById('form-acta-constitucion');
    if (!form) return;
    var inputs = form.getElementsByTagName('input');
    for(var i=0; i<inputs.length; i++) { if(inputs[i].id != "") obj[inputs[i].id] = inputs[i].value; }
    var textareas = form.getElementsByTagName('textarea');
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
    var preEtapaObj = document.getElementById('inp_presup_etapa');
    var preTotalObj = document.getElementById('inp_presup_total');
    var preDesaObj = document.getElementById('inp_presup_desarrollo');
    var losMesesObj = document.getElementById('inp_tiempo_meses');
    
    if (!preEtapaObj || !preTotalObj || !preDesaObj || !losMesesObj) return;

    var preEtapa = parseFloat(preEtapaObj.value);
    var preTotal = parseFloat(preTotalObj.value);
    var preDesa = parseFloat(preDesaObj.value);
    var losMeses = parseInt(losMesesObj.value);

    var caja = document.getElementById('alerta-negocio');
    var txt = document.getElementById('texto-alerta');
    var err = [];

    if (preEtapa > preTotal) err.push("El presupuesto de Etapa 1 es muy alto.");
    if (preDesa > preTotal) err.push("Operativo se pasa del total.");
    if (losMeses > 36) err.push("No pueden ser mas de 36 meses.");

    if (caja && txt) {
        if (err.length > 0) {
            caja.style.display = 'block';
            txt.innerHTML = err.join("<br>");
        } else {
            caja.style.display = 'none';
        }
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
