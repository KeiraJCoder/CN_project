<?php
if(isset($_POST['submit'])){
$firstName = "First Name:".$_POST['firstName']."
";
$lastName = "Last Name:".$_POST['lastName']."
";
$file=fopen("file.txt", "a");
fwrite($file, $firstName);
fwrite($file, $lastName);
fclose($file);
}
?>