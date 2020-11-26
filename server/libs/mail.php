<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once LIBS_ROUTE .'/PHPMailer/src/Exception.php';
require_once LIBS_ROUTE .'/PHPMailer/src/PHPMailer.php';
require_once LIBS_ROUTE .'/PHPMailer/src/SMTP.php';

class Mail {

	public $mail; 			/* holds the socket	*/

	function __construct(){
        $this->mail = new PHPMailer(true);   
        $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $this->mail->isSMTP();                                            // Send using SMTP
        $this->mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $this->mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $this->mail->Username   = 'boletazoserver@gmail.com';                     // SMTP username
        $this->mail->Password   = 'BoletazoPass12';                               // SMTP password
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $this->mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
        //Recipients
        $this->mail->setFrom('boletazoserver@gmail.com', 'Deliroots');
        
    }
}