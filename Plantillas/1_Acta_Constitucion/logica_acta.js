// 1. Inyeccion remota del nucleo logico
var scriptCore = document.createElement('script');
scriptCore.src = "https://cdn.jsdelivr.net/gh/dankielito/TESTIFY_EQUIPO2_GP@main/cdn/core_acta.js";
document.head.appendChild(scriptCore);

// 2. Controladores de Interfaz Locales
window.onload = function() { 
    console.log("Sistema cargado..."); 

    // Navegacion basica de tabs
    document.querySelectorAll('.tab-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-link, .tab-contenido').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.tab).classList.add('active');
        });
    });

    // Esperar a que el script remoto descargue para iniciar listas
    setTimeout(() => {
        if(typeof dibujarListasHtml === 'function') {
            dibujarListasHtml(listaDeAcuerdos, "contenedor-interactivo-acuerdos", false); 
            repartirListasEnHojas(); 
        }
    }, 800);
};