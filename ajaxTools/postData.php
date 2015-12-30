<?php
$name=$_POST["name"];
$message=$_POST["message"];
$conn = new mysqli('localhost', 'root', '','firstDatabase');
$sql="INSERT INTO ajaxtest(name,message) VALUES('{$name}','{$message}')";
mysqli_query($conn,$sql);

