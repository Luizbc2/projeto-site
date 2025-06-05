<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('ROOT_PATH', dirname(__DIR__));

define('SITE_NAME', 'Nis Mello Ateliê');
define('WHATSAPP_NUMBER', '554499629630');
define('INSTAGRAM_URL', 'https://www.instagram.com/nismelloatelie/');


 */
function render_view($viewName, $data = [])
{

    extract($data);

    ob_start();

    require ROOT_PATH . "/views/{$viewName}.view.php";

    $content = ob_get_clean();


    require ROOT_PATH . '/templates/layout.php';
}
?>