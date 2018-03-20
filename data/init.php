<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/1
 * Time: 19:47
 */
$localhost = '127.0.0.1';
$user = 'root';
$pwd = '';
$database = 'yigang';
$port = 3306;
$charset = "UTF8";


$conn = mysqli_connect($localhost,$user,$pwd,$database,$port);

mysqli_query($conn,"SET NAMES $charset");

//if(!mysqli_query($conn,"SET NAMES $charset")){
//    echo  "查询执行失败！请检查SQL语法";
//}else {
//    echo "success";
//}


function sql_execute($sql){
    global $conn;
    $result = mysqli_query($conn, $sql);
    if(stripos($sql,"select") === 0)
        if(!$result){
            return  "查询执行失败！请检查SQL语法：$sql";
        }else {
            return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
        }
    else
        return $result;
}
