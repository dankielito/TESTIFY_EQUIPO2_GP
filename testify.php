<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testify - Plataforma de Documentación TI</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <header class="testify-header">
        <div class="logo-container">
            <img src="img/logo/logo.PNG" alt="Testify Logo" onerror="this.src='https://via.placeholder.com/150x40?text=TESTIFY'">
        </div>
        <nav class="nav-menu">
            <button class="active" data-target="acta_constitucion">1. Acta de Constitución</button>
            <button data-target="registro_interesados">2. Interesados</button>
            <button data-target="gestion_alcance">3. Alcance</button>
            <button data-target="edt">4. EDT</button>
            <button data-target="plan_direccion">5. Plan Dirección</button>
            <button data-target="gestion_requerimientos">6. Requerimientos</button>
        </nav>
    </header>

    <main class="workspace-container">
        
        <section class="editor-panel">
            <h2 class="seccion-titulo">Edición de Plantilla</h2>
            
            <div id="acta_constitucion" class="template-section active">
                <?php @include 'Plantillas/1_Acta_Constitucion/formulario_acta.php'; ?>
            </div>

            <div id="registro_interesados" class="template-section">
                <?php @include 'Plantillas/2_Registro_Interesados/formulario_interesados.php'; ?>
            </div>

            <div id="gestion_alcance" class="template-section"><p>Módulo de Alcance en construcción.</p></div>
            <div id="edt" class="template-section"><p>Módulo EDT en construcción.</p></div>
            <div id="plan_direccion" class="template-section"><p>Módulo de Plan de Dirección en construcción.</p></div>
            <div id="gestion_requerimientos" class="template-section"><p>Módulo de Requerimientos en construcción.</p></div>
        </section>

        <section class="visualizer-panel">
            <div class="visualizer-toolbar">
                <span style="color: #2596be; font-weight: bold; margin-right: 10px;">Vista:</span>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="Final.pdf" checked> Completo</label>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="ETAPA_0.pdf"> Etapa 0</label>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="live_etapa_1"> Etapa 1 (Editor)</label>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="ETAPA_2.pdf"> Etapa 2</label>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="ETAPA_3.pdf"> Etapa 3</label>
                <label><input type="radio" name="pdf_view" class="toggle-pdf" value="ETAPA_4.pdf"> Etapa 4</label>
            </div>

            <div class="pdf-container" style="position: relative; height: 100%;">
                <iframe id="main-pdf-viewer" class="pdf-frame" src="PDF_Separado/Final.pdf#view=FitH" style="width: 100%; height: 100%; border: none; display: block;"></iframe>
                
                <div id="live-preview-container" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #525659; z-index: 10; overflow-y: auto;">
                    <?php @include 'Plantillas/previsualizador.php'; ?>
                </div>
            </div>
        </section>
    </main>

    <script src="js/main.js"></script>
</body>
</html>