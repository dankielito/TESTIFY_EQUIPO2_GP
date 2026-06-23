// cambia entre las pantallas de los formularios de la izq
var botonesMenu = document.querySelectorAll('.nav-menu button');
var seccionesForm = document.querySelectorAll('.template-section');

for (var i = 0; i < botonesMenu.length; i++) {
    botonesMenu[i].addEventListener('click', function(e) {
        
        // limpiar estados
        for (var j = 0; j < botonesMenu.length; j++) {
            botonesMenu[j].classList.remove('active');
        }
        for (var k = 0; k < seccionesForm.length; k++) {
            seccionesForm[k].classList.remove('active');
        }

        // activar el nuevo
        var botonClickeado = e.target;
        botonClickeado.classList.add('active');
        
        var targetId = botonClickeado.getAttribute('data-target');
        var panelActivo = document.getElementById(targetId);
        if(panelActivo) {
            panelActivo.classList.add('active');
        }
    });
}