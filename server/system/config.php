<?php
//////////////////////////////////////
// Valores de uri
/////////////////////////////////////

define('URI', $_SERVER['REQUEST_URI']);

define('REQUEST_METHOD', $_SERVER['REQUEST_METHOD']);

//////////////////////////////////////
// Valores de rutas
/////////////////////////////////////

define('FOLDER_PATH', '/server');

define('ROOT', $_SERVER['DOCUMENT_ROOT']);

define('LIBS_ROUTE', ROOT . FOLDER_PATH . '/libs/');

//////////////////////////////////////
// Valores de base de datos
/////////////////////////////////////

define('DB_HOST', 'localhost');
define('DB_DATABASE', 'emdep_government3');
define('DB_USER', 'emdep');
define('DB_PASSWORD', '3md3p');
