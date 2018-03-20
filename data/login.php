<?php
session_start();
header("Content-Type:application/json");
header('Access-Control-Allow-Origin:http://localhost:9000');
require_once("init.php");
@$uname=$_REQUEST["username"];
@$upwd=$_REQUEST["upwd"];
$sql="select uid,username,upwd from user";
$result=sql_execute($sql);
if(count($result)){
  $_SESSION["uid"]=$result[0]["uid"];
  var_dump($result);
  echo json_encode(
    ["ok"=>1,"msg"=>""]
  );
}else
  echo json_encode(
    ["ok"=>0,"msg"=>"用户名或密码错误!"]
  );