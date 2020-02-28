<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$pdo = new PDO("mysql:host=localhost;dbname=landing;charset=utf8", "root", "palomino2011", array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
));


try{
    //variables 
    $nombres = $_POST["nombres"];
    $empresa = $_POST["empresa"];
    $correo = $_POST["email"];
    $whatsapp = $_POST["whatsapp"];
    $codigo = $_POST["codigo-promocion"];
    
    $pdo->beginTransaction();

    $query = "INSERT INTO cliente (celular, nombre, empresa, correo, codigo) VALUES ('".$whatsapp."', '".$nombres."', '".$empresa."', '". $correo."','".$codigo."')";
    $result = $pdo->prepare($query);
    $exec = $result->execute();
    
    // try {
       
    //     //Server settings
    //     $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    //     $mail->isSMTP();                                            // Set mailer to use SMTP
    //     $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    //     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    //     $mail->Username   = 'tecnologiavespro@gmail.com';                     // SMTP username
    //     $mail->Password   = 'jacmegzeisdcooep';                               // SMP passwordT
    //     $mail->SMTPSecure = 'SMTP';                                  // Enable TLS encryption, `ssl` also accepted
    //     // $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    //     // $mail->Port       = 587;                                    // TCP port to connect to
    //     // $mail->Port       = 465;                                    // TCP port to connect to
    //     $mail->Port       = 25;                                    // TCP port to connect to
    
    //     //Recipients
    //     $mail->setFrom('tecnologiavespro@gmail.com', 'Sistemas GPS');
    //     $mail->addAddress('tecnologiavespro@gmail.com');     // Add a recipient
    
    //     // Content
    //     $mail->isHTML(true);                                  // Set email format to HTML
    //     $mail->Subject = 'GPS: '.$nombres;
    //     $mail->Body    = '<b>Nombre:</b> '.$nombres.'<br>';
    //     $mail->Body    = $mail->Body.'<b>Empresa:</b> '.$empresa.'<br>';
    //     $mail->Body    = $mail->Body.'<b>Telefono:</b> '.$whatsapp.'<br>';
    //     $mail->Body    = $mail->Body.'<b>Email:</b> '.$correo.'<br>';
    //     $mail->Body    = $mail->Body.'<b>Codigo Promoción:</b> '.$codigo.'<br>';
       
    //     header('Content-Type: application/json');    
    //     if (!$mail->send()) {
    //         $pdo->rollBack();
    //         echo json_encode([
    //             "status"    => "ERROR",
    //             "data"      => $mail->ErrorInfo
    //         ]);
    //     }else {
    //         $pdo->commit();	
    //         echo json_encode([
    //             "status"    => "OK",
    //             "data"      => "Mensaje enviado."
    //         ]);
    //     }
    // }catch (\Exception $e) {
    //     $pdo->rollBack();
    //     header('Content-Type: application/json');    
    //     echo json_encode([
    //         "status"    => "ERROR",
    //         "data"      => $mail->ErrorInfo
    //     ]);
    // }

    header('Location: https://api.whatsapp.com/send?phone=51997630413&text=Hola, soy '.$nombres.' de la empresa '.$empresa.', mi correo es '.$correo.' y solicito información sobre el GPS');

}catch(\Exception $e){
    header('Content-Type: application/json');    
    $pdo->rollBack();
    echo json_encode([
        "status"    => "ERROR",
        "data"      => $e->getMessage()
    ]);
}



