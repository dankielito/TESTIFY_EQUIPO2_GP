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
    const togglesPdf = document.querySelectorAll('.toggle-pdf');
    
    togglesPdf.forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const pdfId = e.target.getAttribute('data-pdf');
            const iframeObjetivo = document.getElementById(pdfId);
            
            if(e.target.checked) {
                iframeObjetivo.style.display = 'block';
            } else {
                iframeObjetivo.style.display = 'none';
            }
        });
    });
});