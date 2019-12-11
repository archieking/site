<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Email : $email \n Message: $message";
$recipient = "Example@yourmail.com"; //Replace with your email
$subject = "Quote Form";
$mailheader = "From: $email \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
	echo "success";
}
exit;

?>