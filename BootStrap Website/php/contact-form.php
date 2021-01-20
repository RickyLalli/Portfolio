<?php

if (isset($_POST['submit'])) {

    $firstName =  $_POST['inputFirstName'];
    $lastName =  $_POST['inputLastName'];
    $mailFrom =  $_POST['inputEmail'];
    $topic =  $_POST['inputTopic'];
    $message =  $_POST['inputMessage'];


    $mailTo = "contact@rickylalli.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$firstName." ".$lastName."\n\n".$message;

    mail($mailTo, $topic, $txt, $headers);
    header("Location: contact.php?mailsend");


}

?>