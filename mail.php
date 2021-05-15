<?php 
if(isset($_POST['send_mail'])){
    $to = "innocentmasuki99@gmail.com"; // this is your Email address
    if(isset($_POST['guest_mail'])){
        $from = $_POST['guest_mail'];
    }
    if(isset($_POST['guest_name'])){
        $full_name = $_POST['guest_name'];
    }
    if(isset($_POST['guest_message'])){
        $text = $_POST['guest_message'];
    }
    $subject = $_POST['message_sub'];
    $subject = $subject . " ";

    
    $message = $full_name . " Wrote the following:" . "\n\n" . $text;


    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    header('Location: index.html');
?>