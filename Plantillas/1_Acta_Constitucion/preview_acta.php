<link rel="stylesheet" href="Plantillas/1_Acta_Constitucion/paginas/paginas.css">

<div style="height: 100%; display: flex; flex-direction: column;">
    <div class="pdf-sim-toolbar">
        <div class="toolbar-left">
            <span style="font-size: 14px; margin-left: 10px;">ETAPA_1_Generada.pdf</span>
        </div>
        <div class="toolbar-center" style="display: flex; align-items: center; gap: 15px;">
            <span style="font-size: 13px;">55 - 62 / 296</span>
            <span style="color: #666;">|</span>
            <button id="btn-zoom-out" title="Alejar">➖</button>
            <button id="btn-zoom-in" title="Acercar">➕</button>
        </div>
        <div class="toolbar-right">
            <button class="btn-descarga-pdf">📥 Descargar</button>
        </div>
    </div>

    <div class="pdf-sim-container">
        <div id="hoja-zoom-container">
            <?php include 'paginas/pagina1.php'; ?>
            <?php include 'paginas/pagina2.php'; ?>
            <?php include 'paginas/pagina3.php'; ?>
            <?php include 'paginas/pagina4.php'; ?>
            <?php include 'paginas/pagina5.php'; ?>
            <?php include 'paginas/pagina6.php'; ?>
            <?php include 'paginas/pagina7.php'; ?>
            <?php include 'paginas/pagina8.php'; ?>
        </div>
    </div>
</div>