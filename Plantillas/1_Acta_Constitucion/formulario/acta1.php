<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="Plantillas/1_Acta_Constitucion/css/formulario_acta.css">
<div class="editor-formulario p-3 bg-light" style="font-family: 'Aptos', sans-serif;">
    
    <div id="alerta-negocio" class="alert alert-danger" style="display: none; font-size: 12px;">
        <strong>Alerta de Validación:</strong> <span id="texto-alerta"></span>
    </div>

    <div class="nav nav-tabs mb-3 tabs-navegador">
        <button type="button" class="nav-link active tab-link" data-tab="tab-texto">Texto</button>
        <button type="button" class="nav-link tab-link" data-tab="tab-cantidades">Valores</button>
        <button type="button" class="nav-link tab-link" data-tab="tab-listados">Listados</button>
        <button type="button" class="nav-link tab-link" data-tab="tab-encabezados">Encabezados</button>
    </div>

<form id="form-acta-constitucion">
    <div id="tab-texto" class="tab-contenido active">
        <h4 class="text-info text-uppercase fs-6 mb-3 border-bottom pb-1">Enunciado del Trabajo</h4>
        <div class="mb-3">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Descripción General (Texto narrativo):</label>
            <textarea class="form-control form-control-sm" id="inp_texto_enunciado" rows="5">El proyecto es una plataforma de automatización impulsada por Inteligencia Artificial que transforma datos técnicos en reportes ejecutivos. Este se desea realizar en un año con el fin de detectar una problemática crítica en las empresas de TI en de la CDMX por la excesiva carga de trabajo manual y la falta de estandarización en la documentación de pruebas de software, esto genera retrasos en las entregas y posibles errores humanos. Es fundamental para la dirección por que representa una oportunidad estratégica de ser líderes en el sector tecnológico con un presupuesto de $13,236,817 pesos mexicanos.</textarea>
        </div>

        <h4 class="text-info text-uppercase fs-6 mb-3 border-bottom pb-1">Caso de Negocio</h4>
         <div class="mb-3">
            <label class="form-label fw-bold" style="font-size: 11px; color: #323639;">Justificación y Rentabilidad:</label>
            <textarea class="form-control form-control-sm" id="inp_texto_caso" rows="4">El proyecto es rentable debido a que el 73.33% de los clientes potenciales encuestados muestran disposición de compra. En la proyección de ventas nos indica que anualmente tenemos una venta de más de 22 millones de pesos el primer año, lo que representa un margen de utilidad significativo frente al costo de desarrollo. Estratégicamente, posiciona a la organización como líder en el uso de IA aplicada a la documentación de QA en el mercado local.</textarea>
        </div>