<?php
include("connectdatabase.php");

$id=0;
$result=0;
$username= $_POST['username'];
$password= MD5($_POST['password']);
$query_select = "SELECT login FROM cadastro WHERE login = '$username'";
$select = mysqli_query($mysqli, $query_select);
$array = mysqli_fetch_array($select);
$logarray = $array['login'];

if($logarray == $username){
                header("Location:/API/register/registrar.html");
$sql=$mysqli->prepare("insert into cadastro values (?,?,?)");

$sql->bind_param("iss",$id,$username,$password);

$sql->execute();

$sql->store_result();

$result=$sql->affected_rows;
    
}else{
      if($result > 0){
        header("Location:/painel");
}
}
?>