<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$pageTitle = 'Bolsas';
$bolsas = require __DIR__ . '/data/bolsas-data.php';
ob_start();

require __DIR__ . '/views/bolsas.view.php';
$content = ob_get_clean();
require __DIR__ . '/templates/layout.php';
?>