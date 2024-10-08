<?php

$server = "localhost";
$user = "root";
$pass ="";
$db ="colaboracion"

$conexion = new msqli($server, $user, $pass, $db);

if ($conexion->connect_errno){
    die("Conexion Fallida" . $conexion->connect_errno );
} else{
    echo"conectado";
}

?>