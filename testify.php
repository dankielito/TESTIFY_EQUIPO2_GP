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
                <?php 
                    // Usamos @ para evitar warnings si el archivo aun no existe mientras maquetamos
                    @include 'Plantillas/1_Acta_Constitucion/formulario_acta.php'; 
                    // Si no carga el include, mostramos un texto temporal
                    echo "<p>Cargando interfaz de Acta de Constitución...</p>";
                ?>
            </div>

            <div id="registro_interesados" class="template-section">
                <?php @include 'Plantillas/2_Registro_Interesados/formulario_interesados.php'; ?>
                <p>Cargando interfaz de Registro de Interesados...</p>
            </div>

            <div id="gestion_alcance" class="template-section"><p>Módulo de Alcance en construcción.</p></div>
            <div id="edt" class="template-section"><p>Módulo EDT en construcción.</p></div>
            <div id="plan_direccion" class="template-section"><p>Módulo de Plan de Dirección en construcción.</p></div>
            <div id="gestion_requerimientos" class="template-section"><p>Módulo de Requerimientos en construcción.</p></div>

        </section>

        <section class="visualizer-panel">
            
            <div class="visualizer-toolbar">
                <span style="color: #2596be; font-weight: bold; margin-right: 15px;">Documentos Activos:</span>
                
                <label><input type="checkbox" id="check-completo" checked> Completo</label>
                <span style="margin: 0 10px; color: #ccc;">|</span>
                
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_perfil"> Perfil</label>
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_e0"> Etapa 0</label>
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_e1"> Etapa 1</label>
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_e2"> Etapa 2</label>
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_e3"> Etapa 3</label>
                <label><input type="checkbox" class="toggle-pdf" data-pdf="pdf_e4"> Etapa 4</label>
            </div>

            <div class="pdf-container">
                <iframe id="pdf_completo" class="pdf-frame" src="PDF_Separado/Final.pdf#view=FitH" style="display: block;"></iframe>
                
                <iframe id="pdf_perfil" class="pdf-frame" src="PDF_Separado/PERFIL_PROYECTO.pdf#view=FitH" style="display: none;"></iframe>
                <iframe id="pdf_e0" class="pdf-frame" src="PDF_Separado/ETAPA_0.pdf#view=FitH" style="display: none;"></iframe>
                <iframe id="pdf_e1" class="pdf-frame" src="PDF_Separado/ETAPA_1.pdf#view=FitH" style="display: none;"></iframe>
                <iframe id="pdf_e2" class="pdf-frame" src="PDF_Separado/ETAPA_2.pdf#view=FitH" style="display: none;"></iframe>
                <iframe id="pdf_e3" class="pdf-frame" src="PDF_Separado/ETAPA_3.pdf#view=FitH" style="display: none;"></iframe>
                <iframe id="pdf_e4" class="pdf-frame" src="PDF_Separado/ETAPA_4.pdf#view=FitH" style="display: none;"></iframe>
            </div>

        </section>
    </main>

    <script src="js/main.js"></script>
</body>
</html>