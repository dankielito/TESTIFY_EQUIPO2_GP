<?php
// Plantillas/registroFinal.php
session_start(); // Iniciamos la sesión en el servidor

// Capturamos la información enviada desde el JavaScript (Fetch API)
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

// Verificamos si se enviaron datos
if ($data) {
    // Si no existe la variable maestra del proyecto, la creamos
    if (!isset($_SESSION['Testify_Memoria'])) {
        $_SESSION['Testify_Memoria'] = [];
    }
    
    // Obtenemos qué módulo está mandando la información (ej. 'Acta_Constitucion')
    $modulo = isset($data['modulo']) ? $data['modulo'] : 'General';
    
    // Actualizamos únicamente el módulo correspondiente, manteniendo el resto intacto
    $_SESSION['Testify_Memoria'][$modulo] = $data['datos'];
    
    // Devolvemos una respuesta de éxito al navegador
    echo json_encode([
        "status" => "success", 
        "mensaje" => "Datos de $modulo guardados temporalmente.",
        "memoria_actual" => $_SESSION['Testify_Memoria']
    ]);
} else {
    // Si solo se consulta el archivo, devuelve la memoria actual
    echo json_encode(isset($_SESSION['Testify_Memoria']) ? $_SESSION['Testify_Memoria'] : []);
}
?>