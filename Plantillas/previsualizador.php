<link rel="stylesheet" href="Plantillas/1_Acta_Constitucion/paginas/paginas.css">

<div style="height: 100%; display: flex; flex-direction: column;">
    
    <div class="pdf-sim-toolbar">
        <div class="toolbar-left">
            <span style="font-size: 14px; margin-left: 10px;">Testify_Preview_vFinal.pdf</span>
        </div>
        <div class="toolbar-center" style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 13px;">55 - 86 / 296</span>
            <span style="color: #666;">|</span>
            <button id="btn-zoom-out" title="Alejar">➖</button>
            <button id="btn-zoom-in" title="Acercar">➕</button>
        </div>
        <div class="toolbar-right">
            <button class="btn-descarga-pdf">Descargar</button>
        </div>
    </div>

    <div class="pdf-sim-container">
        <div id="hoja-zoom-container">
            
            <div id="contenedor-acta-constitucion">
                <?php @include '1_Acta_Constitucion/preview_acta.php'; ?>
            </div>
            
            <div id="contenedor-registro-interesados">
                <?php // @include '2_Registro_Interesados/preview_interesados.php'; ?>
            </div>

            <div id="contenedor-gestion-alcance">
                <?php // @include '3_Gestion_Alcance/preview_alcance.php'; ?>
            </div>
          
            </div>
    </div>

</div>