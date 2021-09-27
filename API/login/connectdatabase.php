<?php
$servidor="";
$usuario="";
$senha="";
$bancodedados="";

$mysqli=new mysqli($servidor,$usuario,$senha,$bancodedados);

if(mysqli_connect_errno()){
    die("Houve um erro:".mysqli_connect_errno());
    exit();
}
?>