<?php
$conn = new mysqli('localhost', 'root', '','firstDatabase');
$sql="SELECT * FROM ajaxtest";
$res=mysqli_query($conn,$sql);
$final=array();
while($row=mysqli_fetch_row($res)){
    $final=array_merge($final,$row);
}
$final=implode(",",$final);
echo $final;