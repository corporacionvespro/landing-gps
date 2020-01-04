<?php
    require_once ("conexion.php");

    $sql="SELECT * FROM promocion where CURDATE()<='fechafin' LIMIT 1";
    global $cnx;
    $result = $cnx->query($sql);
    $datos = array();
    foreach($result as $row) {
        $datos[] = $row;
    }
    header('Content-Type: application/json');  
    echo json_encode($datos);
?>