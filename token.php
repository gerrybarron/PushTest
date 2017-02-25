<?php
header("Access-Control-Allow-Origin:*");
	include "connection.php";
	$token = $_POST["token"];

	$home = $dbh->prepare("INSERT INTO tbl_test (fld_token) VALUES (:fld_token)");
	$home->bindParam(":fld_token", $token);
	$home->execute(); 
?>