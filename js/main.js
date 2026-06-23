document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación del Panel Izquierdo
    const botonesMenu = document.querySelectorAll('.nav-menu button');
    const secciones = document.querySelectorAll('.template-section');

    botonesMenu.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesMenu.forEach(b => b.classList.remove('active'));
            secciones.forEach(s => s.classList.remove('active'));

            boton.classList.add('active');
            document.getElementById(boton.getAttribute('data-target')).classList.add('active');
        });
    });

    // 2. Lógica del Visualizador Dinámico
    const radiosPdf = document.querySelectorAll('.toggle-pdf');
    const iframeViewer = document.getElementById('main-pdf-viewer');
    const livePreview = document.getElementById('live-preview-container');

    radiosPdf.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const archivoSeleccionado = e.target.value;
            
            if (archivoSeleccionado === 'live_etapa_1') {
                iframeViewer.style.display = 'none';
                livePreview.style.display = 'block';
            } else {
                livePreview.style.display = 'none';
                iframeViewer.style.display = 'block';
                iframeViewer.src = `PDF_Separado/${archivoSeleccionado}#view=FitH`;
            }
        });
    });

    // 3. Lógica de Zoom Simulada
    let zoomNivel = 1;
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const contenedorHoja = document.getElementById('hoja-zoom-container');

    if(btnZoomIn && btnZoomOut && contenedorHoja) {
        btnZoomIn.addEventListener('click', () => {
            if(zoomNivel < 1.5) { zoomNivel += 0.1; aplicarZoom(); }
        });
        btnZoomOut.addEventListener('click', () => {
            if(zoomNivel > 0.5) { zoomNivel -= 0.1; aplicarZoom(); }
        });

        function aplicarZoom() {
            contenedorHoja.style.transform = `scale(${zoomNivel})`;
            contenedorHoja.style.transformOrigin = "top center";
        }
    }
});