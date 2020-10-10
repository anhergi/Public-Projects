<?php
	
	$from = "antonio.herrero1991@gmail.com";
	$to = "antonio.herrero1991@gmail.com";
	$subject = "Información página web";
	$message = "Observaciones...";
	$headers = "From: " . $from;
	mail($to, $subject, $message, $headers);
	// echo "The email was sent";
	header("Location: index.html");

?>