<?php
require __DIR__ . '/core/bootstrap.php';

$controllerPath = ROOT_PATH . '/controllers/';
$page = $_GET['page'] ?? 'home';
$controllerFile = $controllerPath . $page . '.php';

if (file_exists($controllerFile)) {
    require $controllerFile;
} else {
    http_response_code(404);
    echo "<h1>Erro 404: Página não encontrada.</h1>";
}
?>