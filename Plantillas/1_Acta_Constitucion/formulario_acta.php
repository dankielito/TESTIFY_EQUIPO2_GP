<div class="editor-formulario">
    <div id="alerta-negocio" style="display: none; background: #ffcccc; color: #cc0000; padding: 10px; border-left: 5px solid #cc0000; margin-bottom: 15px; border-radius: 4px; font-size: 12px;">
        <strong>⚠️ Alerta de Validación:</strong> <span id="texto-alerta"></span>
    </div>

    <div class="tabs-navegador">
        <button type="button" class="tab-link active" data-tab="tab-texto">📝 Texto</button>
        <button type="button" class="tab-link" data-tab="tab-cantidades">🔢 Valores</button>
        <button type="button" class="tab-link" data-tab="tab-listados">📋 Listados</button>
        <button type="button" class="tab-link" data-tab="tab-encabezados">🔝 Encabezados</button>
    </div>

    <form id="form-acta-constitucion">
        
        <div id="tab-texto" class="tab-contenido active">
            <h4 class="subseccion-formulario">Enunciado del Trabajo</h4>
            <div class="campo">
                <label>Descripción General (Texto narrativo):</label>
                <textarea id="inp_texto_enunciado" rows="5">El proyecto es una plataforma de automatización impulsada por Inteligencia Artificial que transforma datos técnicos en reportes ejecutivos. Este se desea realizar en un año con el fin de detectar una problemática crítica en las empresas de TI en de la CDMX por la excesiva carga de trabajo manual y la falta de estandarización en la documentación de pruebas de software, esto genera retrasos en las entregas y posibles errores humanos. Es fundamental para la dirección por que representa una oportunidad estratégica de ser líderes en el sector tecnológico con un presupuesto de $13,236,817 pesos mexicanos.</textarea>
            </div>

            <h4 class="subseccion-formulario">Caso de Negocio</h4>
            <div class="campo">
                <label>Justificación y Rentabilidad:</label>
                <textarea id="inp_texto_caso" rows="4">El proyecto es rentable debido a que el 73.33% de los clientes potenciales encuestados muestran disposición de compra. En la proyección de ventas nos indica que anualmente tenemos una venta de más de 22 millones de pesos el primer año, lo que representa un margen de utilidad significativo frente al costo de desarrollo. Estratégicamente, posiciona a la organización como líder en el uso de IA aplicada a la documentación de QA en el mercado local.</textarea>
            </div>

            <h4 class="subseccion-formulario">Ámbito de Aplicación e Integrantes</h4>
            <div class="campo">
                <label>Ámbito Territorial:</label>
                <input type="text" id="inp_ambito" value="Empresas de TI ubicadas en la CDMX.">
            </div>
            <div class="campo">
                <label>Descripción del Cliente (QA):</label>
                <input type="text" id="inp_cliente" value="Empresas de servicios de software y departamentos de QA en la alcaldía Cuautémoc">
            </div>
            <div class="campo">
                <label>Gerente de Proyecto:</label>
                <input type="text" id="inp_gerente" value="Alexis Daniel Romero Razo">
            </div>

            <h4 class="subseccion-formulario">Información de Reunión (Minuta)</h4>
            <div class="campo">
                <label>Actividad de la Minuta:</label>
                <textarea id="inp_minuta_actividad" rows="3">Elaboración del Acta de Constitución del Proyecto, definiendo el alcance general, objetivos, stakeholders principales, presupuesto estimado y la autorización formal del proyecto Testify.</textarea>
            </div>
            <div class="campo">
                <label>Acuerdos Tomados:</label>
                <textarea id="inp_minuta_acuerdo" rows="4">La integrante Angela Martínez fue responsable de redactar el Acta de Constitución del Proyecto, integrando la información proporcionada por el equipo. Se acordó que el documento incluiría los objetivos, justificación, alcance, entregables principales, presupuesto estimado y roles del equipo. Asimismo, todos los integrantes revisaron el contenido y aprobaron el documento final.</textarea>
            </div>
        </div>

        <div id="tab-cantidades" class="tab-contenido">
            <h4 class="subseccion-formulario">Tiempos de Gestión</h4>
            <div class="campo">
                <label>Tiempo de Desarrollo (Máximo 36 meses):</label>
                <input type="number" id="inp_tiempo_meses" value="12" min="1" max="36" oninput="if(this.value > 36) this.value = 36;">
            </div>
            
            <div class="campo">
                <label>Tiempo de Ejecución Minuta (Max. 99):</label>
                <div style="display: flex; gap: 10px;">
                    <input type="text" id="inp_minuta_tiempo_num" value="" placeholder="Ej. 3" style="width: 70px; text-align: center;">
                    <select id="inp_minuta_tiempo_unidad" style="flex: 1;">
                        <option value="horas">horas</option>
                        <option value="días" selected>días</option>
                        <option value="semanas">semanas</option>
                        <option value="meses">meses</option>
                    </select>
                </div>
            </div>

            <h4 class="subseccion-formulario">Presupuestos Autorizados</h4>
            <div class="campo">
                <label>Presupuesto de la Etapa 1 (MXN):</label>
                <input type="text" class="input-presupuesto" id="inp_presup_etapa" value="127270.79">
            </div>
            <div class="campo">
                <label>Presupuesto Operativo / Desarrollo (MXN):</label>
                <input type="text" class="input-presupuesto" id="inp_presup_desarrollo" value="13236817.00">
            </div>
            <div class="campo">
                <label>Presupuesto Total del Proyecto (MXN):</label>
                <input type="text" class="input-presupuesto" id="inp_presup_total" value="14462590.00">
            </div>
        </div>

        <div id="tab-listados" class="tab-contenido">
            <p style="font-size:11px; color:#555; margin-bottom:10px;">💡 <em>Doble clic en el texto para editarlo. Modifica las cantidades de manera independiente (máx. 100).</em></p>
            
            <h4 class="subseccion-formulario">Componentes de Acuerdos</h4>
            <div class="lista-interactiva-contenedor" id="contenedor-interactivo-acuerdos"></div>

            <h4 class="subseccion-formulario">Componentes de Hitos</h4>
            <div class="lista-interactiva-contenedor" id="contenedor-interactivo-hitos"></div>
        </div>

        <div id="tab-encabezados" class="tab-contenido">
            <h4 class="subseccion-formulario">Encabezado de la Plantilla</h4>
            <div class="campo">
                <label>Título Superior de la Plantilla:</label>
                <input type="text" id="inp_head_plantilla_titulo" value="Plantilla No. 5 ET.1 Acta de constitución del proyecto">
            </div>
            <div class="campo">
                <label>ID del Documento (Acta):</label>
                <input type="text" id="inp_id_acta" value="ES0DC1E5">
            </div>
            <div class="campo">
                <label>Fecha de la Plantilla:</label>
                <input type="date" id="inp_fecha_acta_real" value="2026-03-30">
            </div>

            <h4 class="subseccion-formulario">Encabezado de la Minuta</h4>
            <div class="campo">
                <label>Título Superior de la Minuta:</label>
                <input type="text" id="inp_head_minuta_titulo" value="Minuta No.5 ET.1 Acta de Constitución del Proyecto">
            </div>
            <div class="campo">
                <label>ID de la Minuta:</label>
                <input type="text" id="inp_id_minuta" value="ES0DC4EM5">
            </div>
            <div class="campo">
                <label>Fecha de la Minuta:</label>
                <input type="date" id="inp_fecha_minuta_real" value="2026-03-25">
            </div>
            
            <h4 class="subseccion-formulario">Metadatos de Control</h4>
            <div class="campo">
                <label>Patrocinador Base:</label>
                <input type="text" id="inp_patrocinador" value="(SIGUIENTE CLASE)">
            </div>
        </div>
    </form>
</div>

<style>
    .editor-formulario { padding: 10px; font-family: 'Aptos', sans-serif; background-color: #f8fbfd; }
    
    /* Pestañas Estilo Navegador */
    .tabs-navegador { display: flex; border-bottom: 2px solid #c1e4f5; margin-bottom: 15px; background: #ebf4f8; border-radius: 4px 4px 0 0; }
    .tab-link { flex: 1; background: transparent; border: none; padding: 10px 5px; font-size: 12px; font-weight: bold; color: #525659; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s; text-align: center; }
    .tab-link:hover { background: rgba(37, 150, 190, 0.1); color: #2596be; }
    .tab-link.active { color: #2596be; border-bottom-color: #2596be; background: #ffffff; }
    
    /* Visibilidad de los Paneles */
    .tab-contenido { display: none; }
    .tab-contenido.active { display: block; }
    
    .subseccion-formulario { color: #2596be; font-size: 13px; margin: 15px 0 8px 0; border-bottom: 1px solid #c1e4f5; padding-bottom: 3px; text-transform: uppercase; }
    .campo { margin-bottom: 12px; }
    .campo label { display: block; font-weight: bold; color: #323639; font-size: 11px; margin-bottom: 4px; }
    .campo input, .campo textarea, .campo select { width: 100%; padding: 7px; border: 1px solid #b0c4de; border-radius: 4px; font-family: inherit; font-size: 12px; box-sizing: border-box; }
    
    /* Contenedores de Listas Avanzadas */
    .lista-interactiva-contenedor { max-height: 280px; overflow-y: auto; border: 1px solid #cbd5e1; background: #fff; border-radius: 4px; padding: 5px; margin-bottom: 15px; }
    .fila-lista-interactiva { display: flex; align-items: center; gap: 6px; padding: 4px; border-bottom: 1px solid #f1f5f9; font-size: 12px; }
    .fila-lista-interactiva input[type="number"] { width: 45px; padding: 2px; text-align: center; border: 1px solid #cbd5e1; border-radius: 3px; }
    .label-editable { flex: 1; cursor: pointer; padding: 2px; border-radius: 3px; transition: background 0.1s; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .label-editable:hover { background: #f1f5f9; }
    .input-inline-edit { flex: 1; font-size: 12px; padding: 2px; border: 1px solid #2596be; border-radius: 3px; }
</style>

<script src="Plantillas/1_Acta_Constitucion/logica_acta.js"></script>