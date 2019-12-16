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

$pdo = new PDO("mysql:host=localhost;dbname=landing;charset=utf8", "root", "", array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
));

try{
    //variables 
    $nombres = $_POST["nombres"];
    $empresa = $_POST["empresa"];
    $correo = $_POST["email"];
    $whatsapp = $_POST["whatsapp"];
    
    $pdo->beginTransaction();

    $query = "INSERT INTO cliente (celular, nombre, empresa, correo) VALUES ('".$whatsapp."', '".$nombres."', '".$empresa."', '". $correo."');";
    $result = $pdo->prepare($query);
    $exec = $result->execute();
    echo json_encode([
        "status"    => "hola",
        "data"      => ""
    ]);
    
    try {
       
        //Server settings
        $mail->SMTPDebug = 0;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'tecnologiavespro@gmail.com';                     // SMTP username
        $mail->Password   = 'jacmegzeisdcooep';                               // SMP passwordT
        $mail->SMTPSecure = 'SMTP';                                  // Enable TLS encryption, `ssl` also accepted
        // $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        // $mail->Port       = 587;                                    // TCP port to connect to
        // $mail->Port       = 465;                                    // TCP port to connect to
        $mail->Port       = 25;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('tecnologiavespro@gmail.com', 'Sistemas GPS');
        $mail->addAddress('tecnologiavespro@gmail.com');     // Add a recipient
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Nuevo cliente GPS';
        $mail->Body    = '<b>Nombre:</b> '.$nombres.'<br>';
        $mail->Body    = $mail->Body.'<b>Empresa:</b> '.$empresa.'<br>';
        $mail->Body    = $mail->Body.'<b>Telefono:</b> '.$whatsapp.'<br>';
        $mail->Body    = $mail->Body.'<b>Email:</b> '.$correo.'<br>';
       
        header('Content-Type: application/json');    
        if (!$mail->send()) {
            $pdo->rollBack();
            echo json_encode([
                "status"    => "ERROR",
                "data"      => $mail->ErrorInfo
            ]);
        }else {
            $pdo->commit();	
            echo json_encode([
                "status"    => "OK",
                "data"      => "Mensaje enviado."
            ]);
        }
    }catch (Exception $e) {
        $pdo->rollBack();
        header('Content-Type: application/json');    
        echo json_encode([
            "status"    => "ERROR",
            "data"      => $mail->ErrorInfo
        ]);
    }
}catch(Exception $e){
    echo json_encode([
        "status"    => "holsa",
        "data"      => $e->getMessage()
    ]);
    $pdo->rollBack();
    echo json_encode([
        "status"    => "ERROR",
        "data"      => $e->getMessage()
    ]);
}



