<?php
$nombres = $_POST["nombres"];
$empresa = $_POST["empresa"];
$correo = $_POST["correo"];
$whatsapp = $_POST["whatsapp"];

$destinatario = "corporacionvespro@gmail.com";
$subject = "NUEVO CLIENTE";
$msg = "NOMBRE: $nombres \n";
$msg .= "ASUNTO: nuevo cliente \n";
$msg .= "MENSAJE: Empresa: $empresa \n";
$msg .= "Correo: $correo \n";
$msg .= "Whatsapp: $whatsapp";

$headers = 'Correo: '.$correo."\r\n".
	'Desinatario: '.$destinatario."\r\n".
	'X-Mailer: PHP/'.phpversion();

if (mail($destinatario, $subject, $msg, $headers)) {
	echo '<p class="ContactoC-confirm">Sus datos han sido enviados, un asesor se comunicará con usted a la brevedad. </p>';
} else {
	echo '<p>El envío de datos ha fallado.</p>';
}

$cn = new PDO("mysql:host=localhost;dbname=landing;charset=utf8", "root", "");
$query = "INSERT INTO cliente (celular, nombre, empresa, correo) VALUES ('".$whatsapp."', '".$nombres."', '".$empresa."', '". $correo."');";
$result = $cn->prepare($query);
$exec = $result->execute();
if ($exec) {
	echo 'Cliente registrado correctamente';
}
?>