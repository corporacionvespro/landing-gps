<?php
$nombres = $_POST["nombres"];
$empresa = $_POST["empresa"];
$correo = $_POST["email"];
$whatsapp = $_POST["whatsapp"];

$destinatario = "tecnologiavespro@gmail.com";
$subject = "NUEVO CLIENTE";
$msg = "NOMBRE: $nombres \n";
$msg .= "ASUNTO: nuevo cliente \n";
$msg .= "MENSAJE: Empresa: $empresa \n";
$msg .= "Correo: $correo \n";
$msg .= "Whatsapp: $whatsapp";

$headers = 'Correo: '.$correo."\r\n".
	'Desinatario: '.$destinatario."\r\n".
	'X-Mailer: PHP/'.phpversion();

$aux=0;
$data; 
// if (mail($destinatario, $subject, $msg, $headers)) {
// 	$aux=0;
// }else{ 
// 	$aux=1;
// } 

try{
	if($aux==0){
		$cn = new PDO("mysql:host=localhost;dbname=landing;charset=utf8", "root", "");
		$query = "INSERT INTO cliente (celular, nombre, empresa, correo) VALUES ('".$whatsapp."', '".$nombres."', '".$empresa."', '". $correo."');";
		$result = $cn->prepare($query);
		$exec = $result->execute();
		$aux=0;
	}
}catch(Excetion $e){
	$aux=2;
	$data=$e->getMessage();
}

if ($aux==0) {
	echo json_encode(array("status"=>'success', 'data'=>'todo correcto'));
}else{
	if($aux==1){
		echo json_encode(array("status"=>'warning', 'data'=>'Algo salio mal, intente nuevamente'));
	}else if($aux==2){
		echo json_encode(array("status"=>'warning', 'data'=>$data));
	}
}
?>