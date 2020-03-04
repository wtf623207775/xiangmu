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
      url: '/wtf',
      method: 'POST', 
      data: { c: 100, d: 100 },
      dataType: 'json',
      success: function (res) {
        console.log(res)
      }
    })
}