<?php
// Configuración del correo electrónico (ajusta esto según tu servidor de correo)
$to = 'tu_correo@ejemplo.com';
$subject = 'Nuevo mensaje desde el formulario de contacto';

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$email = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

// Crear el cuerpo del mensaje
$cuerpo = "Nombre: $nombre\n";
$cuerpo .= "Correo electrónico: $email\n";
$cuerpo .= "Mensaje:\n$mensaje";

// Utilizar una librería como PHPMailer para enviar el correo electrónico
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'vkhousnoulina@gmail.com';     // Set the SMTP server to send through
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for SSL, 587 for TLS
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'tu_usuario@ejemplo.com';                     // SMTP username
    $mail->Password   = 'tu_contraseña';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption; `ssl` also accepted

    //Recipients
    $mail->setFrom('vkhousnoulina@gmail.com', 'Victoria');
    $mail->addAddress($to);     // Add a recipient

    // Content
    $mail->isHTML(false);  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $cuerpo;

    $mail->send();
    echo 'Mensaje enviado correctamente';
} catch (Exception $e) {
    echo "Mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
}