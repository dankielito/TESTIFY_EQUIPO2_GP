// Plantillas/1_Acta_Constitucion/logica_acta.js
document.addEventListener('DOMContentLoaded', () => {

    // === 1. TABS DEL FORMULARIO ===
    const enlacesPestañas = document.querySelectorAll('.tab-link');
    const contenedoresPestañas = document.querySelectorAll('.tab-contenido');
    enlacesPestañas.forEach(enlace => {
        enlace.addEventListener('click', () => {
            enlacesPestañas.forEach(btn => btn.classList.remove('active'));
            contenedoresPestañas.forEach(panel => panel.classList.remove('active'));
            enlace.classList.add('active');
            document.getElementById(enlace.getAttribute('data-tab')).classList.add('active');
        });
    });

    // === 2. FORMATEADORES ===
    const formatoDinero = (numero) => Number(numero).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formatoFechaStr = (fechaISO) => {
        if(!fechaISO) return "";
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const partes = fechaISO.split('-');
        if(partes.length !== 3) return fechaISO;
        return `${parseInt(partes[2], 10)} de ${meses[parseInt(partes[1], 10) - 1]} del ${partes[0]}`;
    };

    // === 3. MANEJO DE MEMORIA (AJAX a registroFinal.php) ===
    const guardarMemoriaTestify = () => {
        const datosTemporales = {};
        document.querySelectorAll('#form-acta-constitucion input, #form-acta-constitucion textarea, #form-acta-constitucion select').forEach(campo => {
            if(campo.id) datosTemporales[campo.id] = campo.value;
        });
        // Guardamos las listas actuales
        datosTemporales['acuerdos'] = datosAcuerdos;
        datosTemporales['hitos'] = datosHitos;

        fetch('Plantillas/registroFinal.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ modulo: 'ActaConstitucion', datos: datosTemporales })
        })
        .then(res => res.json())
        .then(data => console.log("💾 Testify guardado en memoria:", data))
        .catch(err => console.error("Error al guardar memoria:", err));
    };

    // === 4. BLOQUEOS ESTRICTOS DE TECLADO (REGLAS DE NEGOCIO) ===
    
    // Regla: Cantidad Minuta (Max 99, solo enteros)
    const inpMinutaNum = document.getElementById('inp_minuta_tiempo_num');
    if (inpMinutaNum) {
        inpMinutaNum.addEventListener('keypress', (e) => {
            // Bloquea cualquier cosa que no sea un número del 0 al 9
            if (!/[0-9]/.test(e.key)) { e.preventDefault(); return; }
            // Bloquea el tecleo si ya tiene 2 dígitos (Max 99)
            if (e.target.value.length >= 2) { e.preventDefault(); }
        });
        
        // Prevención en caso de copy/paste
        inpMinutaNum.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
            actualizarTextoMinuta();
        });
    }

    // Actualizador dinámico del tiempo de Minuta
    const inpMinutaSelect = document.getElementById('inp_minuta_tiempo_unidad');
    const actualizarTextoMinuta = () => {
        const num = inpMinutaNum.value || "0";
        const txt = `${num} ${inpMinutaSelect.value}`;
        const out = document.getElementById('out_minuta_tiempo');
        if(out) out.innerText = txt;
        guardarMemoriaTestify(); // Auto-guardado
    };
    if(inpMinutaSelect) inpMinutaSelect.addEventListener('change', actualizarTextoMinuta);

    // Regla: Presupuestos (Max 2 decimales)
    document.querySelectorAll('.input-presupuesto').forEach(input => {
        input.addEventListener('keypress', (e) => {
            // Permitir solo números y UN punto
            if (!/[0-9.]/.test(e.key)) { e.preventDefault(); return; }
            
            const val = e.target.value;
            if (e.key === '.' && val.includes('.')) { e.preventDefault(); return; }
            
            // Si ya tiene punto, contamos cuántos números hay después
            if (val.includes('.') && val.split('.')[1].length >= 2) {
                e.preventDefault(); // Literalmente bloquea teclear un tercer decimal
            }
        });
    });

    const validarReglasNegocio = () => {
        const pEtapa = parseFloat(document.getElementById('inp_presup_etapa').value) || 0;
        const pTotal = parseFloat(document.getElementById('inp_presup_total').value) || 0;
        const pDesarrollo = parseFloat(document.getElementById('inp_presup_desarrollo').value) || 0;
        const tiempoMeses = parseInt(document.getElementById('inp_tiempo_meses').value, 10) || 0;

        const alertaBox = document.getElementById('alerta-negocio');
        const textoAlerta = document.getElementById('texto-alerta');
        const btnGenerar = document.getElementById('btn-generar-acta');
        let errores = [];

        if (pEtapa > pTotal) errores.push("La Etapa 1 excede el presupuesto total.");
        if (pDesarrollo > pTotal) errores.push("El presupuesto operativo excede el total.");
        if (tiempoMeses > 36) errores.push("El tiempo máximo permitido son 36 meses.");

        if (errores.length > 0) {
            alertaBox.style.display = 'block';
            textoAlerta.innerHTML = errores.join("<br>⚠️ ");
            btnGenerar.disabled = true;
        } else {
            alertaBox.style.display = 'none';
            btnGenerar.disabled = false;
        }
        guardarMemoriaTestify();
    };

    // === 5. DATOS Y LISTAS INTERACTIVAS ===
    let datosAcuerdos = [
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

    let datosHitos = [
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

    const pintarContenedorLista = (arrayDatos, idContenedor, esHito = false) => {
        const contenedor = document.getElementById(idContenedor);
        if(!contenedor) return;
        contenedor.innerHTML = "";

        arrayDatos.forEach(item => {
            const fila = document.createElement('div');
            fila.className = "fila-lista-interactiva";

            const chk = document.createElement('input');
            chk.type = "checkbox";
            chk.checked = item.activo;
            chk.addEventListener('change', () => { item.activo = chk.checked; sincronizarListasHojas(); });
            fila.appendChild(chk);

            if(!esHito && item.cant !== null) {
                const num = document.createElement('input');
                num.type = "number";
                num.min = "1"; num.max = "100";
                num.value = item.cant;
                num.addEventListener('input', () => {
                    let v = parseInt(num.value, 10) || 1;
                    if(v > 100) v = 100;
                    item.cant = v;
                    sincronizarListasHojas();
                });
                fila.appendChild(num);
            }

            const txtLabel = document.createElement('span');
            txtLabel.className = "label-editable";
            txtLabel.innerText = item.texto;
            txtLabel.addEventListener('dblclick', () => {
                const inpEdit = document.createElement('input');
                inpEdit.type = "text";
                inpEdit.className = "input-inline-edit";
                inpEdit.value = item.texto;
                inpEdit.addEventListener('blur', () => {
                    item.texto = inpEdit.value || "Elemento vacío";
                    txtLabel.innerText = item.texto;
                    fila.replaceChild(txtLabel, inpEdit);
                    sincronizarListasHojas();
                });
                inpEdit.addEventListener('keydown', (ev) => { if(ev.key === 'Enter') inpEdit.blur(); });
                fila.replaceChild(inpEdit, txtLabel);
                inpEdit.focus();
            });

            fila.appendChild(txtLabel);
            contenedor.appendChild(fila);
        });
    };

    const sincronizarListasHojas = () => {
        const acuerdosActivos = datosAcuerdos.filter(i => i.activo);
        const listadoPagina55 = acuerdosActivos.slice(0, 8);
        const listadoPagina56 = acuerdosActivos.slice(8, 50);
        const listadoPagina57 = acuerdosActivos.slice(50);

        const renderUList = (elementos, idDestino) => {
            const nodoDestino = document.getElementById(idDestino);
            if(!nodoDestino) return;
            nodoDestino.innerHTML = "";
            elementos.forEach(el => {
                const li = document.createElement('li');
                li.innerText = el.cant ? `${el.cant} ${el.texto}` : el.texto;
                nodoDestino.appendChild(li);
            });
        };

        renderUList(listadoPagina55, 'out_acuerdos_p55');
        renderUList(listadoPagina56, 'out_acuerdos_p56');
        renderUList(listadoPagina57, 'out_acuerdos_p57');

        const hitosActivos = datosHitos.filter(i => i.activo);
        const hitosPagina58 = hitosActivos.slice(0, 21);
        const hitosPagina59 = hitosActivos.slice(21, 63);
        const hitosPagina60 = hitosActivos.slice(63);

        renderUList(hitosPagina58, 'out_hitos_p58');
        renderUList(hitosPagina59, 'out_hitos_p59');
        renderUList(hitosPagina60, 'out_hitos_p60');
        
        guardarMemoriaTestify();
    };

    const vincularEntrada = (idInput, idOutput, callback = null) => {
        const input = document.getElementById(idInput);
        if(input) {
            const handler = () => {
                const nodos = document.querySelectorAll(`[id="${idOutput}"]`);
                nodos.forEach(nodo => { nodo.innerHTML = callback ? callback(input.value) : input.value; });
                validarReglasNegocio();
            };
            input.addEventListener('input', handler);
            input.addEventListener('change', handler);
            handler(); 
        }
    };

    // Vínculos Múltiples (Textos, Cantidades, Encabezados)
    vincularEntrada('inp_texto_enunciado', 'out_texto_enunciado');
    vincularEntrada('inp_texto_caso', 'out_texto_caso');
    vincularEntrada('inp_ambito', 'out_ambito');
    vincularEntrada('inp_cliente', 'out_cliente');
    vincularEntrada('inp_gerente', 'out_gerente_tabla');
    vincularEntrada('inp_minuta_actividad', 'out_minuta_actividad');
    vincularEntrada('inp_minuta_acuerdo', 'out_minuta_acuerdo');
    
    vincularEntrada('inp_tiempo_meses', 'out_tiempo_meses1');
    vincularEntrada('inp_tiempo_meses', 'out_tiempo_meses2');
    
    vincularEntrada('inp_presup_etapa', 'out_presup_etapa', val => formatoDinero(val));
    vincularEntrada('inp_presup_etapa', 'out_presup_etapa_minuta', val => formatoDinero(val));
    vincularEntrada('inp_presup_etapa', 'out_presup_etapa_minuta2', val => formatoDinero(val));

    vincularEntrada('inp_presup_desarrollo', 'out_presup_desarrollo1', val => formatoDinero(val));
    vincularEntrada('inp_presup_desarrollo', 'out_presup_desarrollo2', val => formatoDinero(val));

    vincularEntrada('inp_presup_total', 'out_presup_total', val => formatoDinero(val));
    vincularEntrada('inp_presup_total', 'out_presup_total_p6', val => formatoDinero(val));
    vincularEntrada('inp_presup_total', 'out_presup_total_minuta2', val => formatoDinero(val));

    vincularEntrada('inp_head_plantilla_titulo', 'out_head_plantilla_titulo');
    vincularEntrada('inp_fecha_acta_real', 'out_fecha_acta', val => formatoFechaStr(val));
    vincularEntrada('inp_head_minuta_titulo', 'out_head_minuta_titulo');
    vincularEntrada('inp_fecha_minuta_real', 'out_fecha_minuta', val => formatoFechaStr(val));
    vincularEntrada('inp_fecha_minuta_real', 'out_fecha_minuta2', val => formatoFechaStr(val));
    vincularEntrada('inp_id_minuta', 'out_id_minuta');
    vincularEntrada('inp_id_minuta', 'out_id_minuta2');
    vincularEntrada('inp_patrocinador', 'out_patrocinador');

    // Inicializar
    pintarContenedorLista(datosAcuerdos, "contenedor-interactivo-acuerdos", false);
    pintarContenedorLista(datosHitos, "contenedor-interactivo-hitos", true);
    sincronizarListasHojas();
    
    // Disparar carga de la minuta inicial (3 días)
    if(inpMinutaNum) {
        inpMinutaNum.value = "3";
        actualizarTextoMinuta();
    }
});