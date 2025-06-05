<?php
$bolsas = require ROOT_PATH . '/data/bolsas-data.php';

render_view('bolsas', [
    'pageTitle' => 'Bolsas',
    'bolsas' => $bolsas
]);
?>