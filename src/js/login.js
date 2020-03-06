//获取元素
var form=document.querySelector("form")
var nameIpt=document.querySelector(".username")
var passIpt=document.querySelector(".password")

//绑定事件
form.addEventListener("click",clickHandler)
function clickHandler(e){
    e=e||window.event
    e.preventDefault()

 //获取输入框内容
    var uname=nameIpt.value;
    var upass=passIpt.value;  
//表单验证
    if(!uname||!upass){
        // alert('请输入信息')
        return
    }
    $.ajax({
      url:'/wtf',
      type:'get',
      dataType: 'json',
      data:{
          username:uname,
          password:upass
      },
      success:function(res){
          if(res.code===0){
            alert('用户名或密码错误')
          }else{
            window.location.href='./index.html'
          }
          console.log(res)
      }
  })
}