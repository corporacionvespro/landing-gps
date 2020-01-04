<?php
    try{
        $manejador = "mysql";
        $servidor = "localhost";
        $usuario = "root";
        //$pass = "vespro@taxi";
        $pass = "";
        $base = "landing";
        $cadena = "$manejador:host=$servidor;dbname=$base";
        $cnx = new PDO($cadena, $usuario, $pass, array(PDO::ATTR_PERSISTENT => "true", PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
        // echo 'conectado';
    }catch(Exception $ex){
        echo "Error de acceso, inf&oacute;rmelo a la brevedad.";
        exit;
    }
?>