<?php 
if(isset($_POST['send_mail'])){
    $to = "innocentmasuki99@gmail.com"; // this is your Email address
   
        $from = $_POST['guest_mail'];
   

        $full_name = $_POST['guest_name'];
   
        $text = $_POST['guest_message'];
   
    $subject = $_POST['message_sub'];


    
    $message = $full_name . " Wrote the following:" . "\n\n" . $text;


    $headers = "From:" . $from;

    if(mail($to,$subject,$message,$headers)){
            echo "Successful";
    }
    else{
        echo "failed";
    }
    
    // header('Location: index.html');
}
?>