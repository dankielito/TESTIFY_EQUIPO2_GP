// controla si se ve el pdf estatico o el live html preview de la derecha
var radiosPdf = document.querySelectorAll('.toggle-pdf');
var framePdf = document.getElementById('main-pdf-viewer');
var vistaPreviaLive = document.getElementById('live-preview-container');

for (var i = 0; i < radiosPdf.length; i++) {
    radiosPdf[i].addEventListener('change', function(evento) {
        var pdfSeleccionado = evento.target.value;
        
        if (pdfSeleccionado === 'live_etapa_1') {
            framePdf.style.display = 'none';
            vistaPreviaLive.style.display = 'block';
        } else {
            vistaPreviaLive.style.display = 'none';
            framePdf.style.display = 'block';
            framePdf.src = "PDF_Separado/" + pdfSeleccionado + "#view=FitH";
        }
    });
}