document.addEventListener('DOMContentLoaded', () => {
    // 1. Logica de navegacion del menu (Izquierda)
    const botonesMenu = document.querySelectorAll('.nav-menu button');
    const seccionesPlantilla = document.querySelectorAll('.template-section');

    botonesMenu.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quitar clase active de todos los botones y secciones
            botonesMenu.forEach(b => b.classList.remove('active'));
            seccionesPlantilla.forEach(s => s.classList.remove('active'));

            // Activar el seleccionado
            boton.classList.add('active');
            const targetId = boton.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. Logica del Visualizador PDF Acoplado (Derecha)
    const checkCompleto = document.getElementById('check-completo');
    const iframeCompleto = document.getElementById('pdf_completo');
    const togglesPdf = document.querySelectorAll('.toggle-pdf');

    // Evento A: Cuando el usuario hace clic en "Completo"
    checkCompleto.addEventListener('change', (e) => {
        if(e.target.checked) {
            // Mostramos el documento final
            iframeCompleto.style.display = 'block';
            
            // Desmarcamos y ocultamos todas las opciones individuales
            togglesPdf.forEach(toggle => {
                toggle.checked = false;
                const pdfId = toggle.getAttribute('data-pdf');
                document.getElementById(pdfId).style.display = 'none';
            });
        } else {
            // Si el usuario desmarca completo, ocultamos el iframe
            iframeCompleto.style.display = 'none';
        }
    });

    // Evento B: Cuando el usuario hace clic en cualquier Etapa individual
    togglesPdf.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const pdfId = e.target.getAttribute('data-pdf');
            const iframeObjetivo = document.getElementById(pdfId);
            
            if(e.target.checked) {
                // Si marcamos una etapa, apagamos y ocultamos el "Completo"
                checkCompleto.checked = false;
                iframeCompleto.style.display = 'none';
                
                // Mostramos el iframe de la etapa seleccionada
                iframeObjetivo.style.display = 'block';
            } else {
                // Si la desmarcamos, la ocultamos
                iframeObjetivo.style.display = 'none';
            }
        });
    });
});