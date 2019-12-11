<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];
$formcontent="From: $name \n Email : $email \n Phone : $mobile \n Message: $message";
$recipient = "Example@yourmail.com"; //Replace with your email
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
	echo "success";
}
exit;

?>