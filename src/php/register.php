<?php

 header('content-type:text/html;charset=utf-8;');
  // 1. 接受前端传递来的参数
 $username=$_GET['username'];
 $password=$_GET['password'];
// $username='aa';
// $password='bbb';
  // 2-1. 连接数据库 
  $link=mysqli_connect('localhost','root','root','test3');

//   $sql="INSERT INTO `login` VALUES (null,'$username','$password')";
 $sql="INSERT INTO `login` (`username`,`password`) VALUES ('$username','$password')) ";
  $res=mysqli_query($link,$sql);
 
//   mysqli_close($link);
 
//    var_dump($link);
// echo mysqli_error($link);
if ($res) {
    $arr = array("message" => "登录成功", "code" => 1);
  } else {
    $arr = array("message" => "登录失败", "code" => 0);
  }
//   var_dump($res);
  // 把这关联型数组返回
  print_r(json_encode($arr));
?>