// zoom simulado para la hoja html tipo word o pdf tmb 
var escalaZoom = 1;
var btnMenos = document.getElementById('btn-zoom-out');
var btnMas = document.getElementById('btn-zoom-in');
var laHojaContainer = document.getElementById('hoja-zoom-container');

if (btnMas && btnMenos && laHojaContainer) {
    btnMas.addEventListener('click', function() {
        if (escalaZoom < 1.5) {
            escalaZoom = escalaZoom + 0.1;
            hacerZoomHoja();
        }
    });

    btnMenos.addEventListener('click', function() {
        if (escalaZoom > 0.5) {
            escalaZoom = escalaZoom - 0.1;
            hacerZoomHoja();
        }
    });

    function hacerZoomHoja() {
        laHojaContainer.style.transform = "scale(" + escalaZoom + ")";
        laHojaContainer.style.transformOrigin = "top center";
    }
}