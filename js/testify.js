// meti aqui el cargador inicial de scriptTag basado en funciones básicas y nativas de js
function importarPedazoJs(rutaArchivo) {
    var scriptTag = document.createElement('script');
    scriptTag.src = rutaArchivo;
         document.head.appendChild(scriptTag);
}
// llamando a las funciones de la subcarpeta
importarPedazoJs('js/funciones/navegacion.js');
importarPedazoJs('js/funciones/visualizador.js');
importarPedazoJs('js/funciones/zoom.js');