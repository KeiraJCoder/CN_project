<?php
if(isset($_POST['submit'])){
$q1 = "Question 1:".$_POST['q1']."
";
$q2 = "Question 2:".$_POST['q2']."
";
$file=fopen("file.txt", "a");
fwrite($file, $q1);
fwrite($file, $q2);
fclose($file);
}
?>