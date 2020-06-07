<?php
$to      = 'patrykjary123@gmail.com';
$email   = $_POST['email'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Content-type: text/html; charset=utf-8';

mail($to, $email, $message, $headers);
echo 'ok';
?>
