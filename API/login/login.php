<?php
include("connectdatabase.php");
session_start();

$id=0;
$Username= $_POST['username'];
$Password= MD5($_POST['password']);
$query = "select * from cadastro where login = '$Username' and senha = '$Password'";
 
$result = mysqli_query($mysqli, $query);
 
$row = mysqli_num_rows($result);

if($row > 0){
            $_SESSION["username"] = $Username;
            echo 1;
            exit();
}
    echo 0;
?>