<h4 class="text-info text-uppercase fs-6 mb-3 border-bottom pb-1">Ámbito de Aplicación e Integrantes</h4>
        <div class="mb-2">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Ámbito Territorial:</label>
            <input type="text" class="form-control form-control-sm" id="inp_ambito" value="Empresas de TI ubicadas en la CDMX.">
        </div>
        <div class="mb-2">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Descripción del Cliente (QA):</label>
            <input type="text" class="form-control form-control-sm" id="inp_cliente" value="Empresas de servicios de software y departamentos de QA en la alcaldía Cuautémoc">
        </div>
        <div class="mb-3">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Gerente de Proyecto:</label>
            <input type="text" class="form-control form-control-sm" id="inp_gerente" value="Alexis Daniel Romero Razo">
        </div>

        <h4 class="text-info text-uppercase fs-6 mb-3 border-bottom pb-1">Información de Reunión (Minuta)</h4>
        <div class="mb-2">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Actividad de la Minuta:</label>
            <textarea class="form-control form-control-sm" id="inp_minuta_actividad" rows="3">Elaboración del Acta de Constitución del Proyecto, definiendo el alcance general, objetivos, stakeholders principales, presupuesto estimado y la autorización formal del proyecto Testify.</textarea>
        </div>
        <div class="mb-2">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Acuerdos Tomados:</label>
            <textarea class="form-control form-control-sm" id="inp_minuta_acuerdo" rows="4">La integrante Angela Martínez fue responsable de redactar el Acta de Constitución del Proyecto, integrando la información proporcionada por el equipo. Se acordó que el documento incluiría los objetivos, justificación, alcance, entregables principales, presupuesto estimado y roles del equipo. Asimismo, todos los integrantes revisaron el contenido y aprobaron el documento final.</textarea>
        </div>
    </div>

    <div id="tab-cantidades" class="tab-contenido">
        <h4 class="text-info text-uppercase fs-6 mb-3 border-bottom pb-1">Tiempos de Gestión</h4>
        <div class="mb-3">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Tiempo de Desarrollo (Máximo 36 meses):</label>
            <input type="number" class="form-control form-control-sm" id="inp_tiempo_meses" value="12" min="1" max="36" oninput="if(this.value > 36) this.value = 36;">
        </div>
        
        <div class="mb-3">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Tiempo de Ejecución Minuta (Max. 99):</label>
            <div class="d-flex gap-2">
                <input type="text" class="form-control form-control-sm text-center" id="inp_minuta_tiempo_num" value="" placeholder="Ej. 3" style="width: 80px;">
                <select class="form-select form-select-sm" id="inp_minuta_tiempo_unidad">
                    <option value="horas">horas</option>
                    <option value="días" selected>días</option>
                    <option value="semanas">semanas</option>
                    <option value="meses">meses</option>
                </select>
            </div>
        </div>