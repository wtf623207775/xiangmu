<?php
     // 1. 接受前端传递来的参数
     $username=$_GET['username'];
     $password=$_GET['password'];

    // 2-1. 连接数据库 
    $link=mysqli_connect('localhost','root','root','test3');
    // 2-2. 执行 sql 语句
    $sql= " SELECT * FROM `login` WHERE `username` = '$username' AND `password` = '$password' ";
    $res=mysqli_query($link,$sql);
    // 2-3. 解析结果
    $row=mysqli_fetch_all($res);
     // 2-4. 断开数据库连接
     mysqli_close($link);

// 如果成功, 返回一个关联型数组
  // 如果失败, 也返回一个关联型数组
  if ($row) {
    $arr = array("message" => "登录成功", "code" => 1);
  } else {
    $arr = array("message" => "登录失败", "code" => 0);
  }
//   var_dump($res);
  // 把这关联型数组返回
  print_r(json_encode($arr));
?>