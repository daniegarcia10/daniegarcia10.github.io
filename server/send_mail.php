<?php

    require $_SERVER['DOCUMENT_ROOT'].'/server/system/config.php';
    require_once LIBS_ROUTE.'/mail.php';
    // echo json_encode('php works!')
    $mail = new Mail();
    $mail = $mail->mail;
    
    $mail->addAddress('daniegarcia10@gmail.com');
 
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Reporte';
    $mail->Body    = 'Prueba envio de correo';

    if($mail->send()) {
        $statusCode = 200;
        header('Content-Type: application/json');
        http_response_code($statusCode);
    } else {
        $statusCode = 500;
        header('Content-Type: application/json');
        http_response_code($statusCode);
    }
?>