<?php
// Plantillas/registroFinal.php
// sesion abierta pa que no se pierdan los datos cuando cambias de tab
session_start();

// recibimos el stream de datos
$rawPost = file_get_contents('php://input');
$jsonPayload = json_decode($rawPost, true);

// por si acaso llega algo vacio, mejor validamos
if (!empty($jsonPayload)) {
    
    // inicializamos la memoria si es la primera vez que entran
    if (!isset($_SESSION['Testify_Memoria'])) {
        $_SESSION['Testify_Memoria'] = [];
    }
    
    // verificar en la guia de scripts si funciona 
    $modName = $jsonPayload['modulo'] ?? 'General';
    
    // guardamos los datos en la sesion
    $_SESSION['Testify_Memoria'][$modName] = $jsonPayload['datos'];
    
    // confirmamos que se guardo bien, pa el log del js
    header('Content-Type: application/json');
    echo json_encode([
        "status" => "ok", 
        "msg" => "datos de $modName salvados chido"
    ]);

} else {
    // esto es por si alguien entra directo al archivo o no mando nada
    header('Content-Type: application/json');
    echo json_encode($_SESSION['Testify_Memoria'] ?? []);
}
// TODO: ver si es necesario limpiar la sesion al cerrar ventana
?>