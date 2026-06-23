<?php
// todo esta dividido en la carpeta de Estructura pa que sea mas facil de editar
include 'Estructura/head.php';
include 'Estructura/header.php';

echo '<main class="workspace-container">'; // abrimos el contenedor de los paneles
include 'Estructura/panel_izq.php'; // cargamos el panel de edicion (el de la izq)
include 'Estructura/panel_der.php'; // cargamos el visor de pdf (el de la der)

echo '</main>';
include 'Estructura/footer.php';
?>